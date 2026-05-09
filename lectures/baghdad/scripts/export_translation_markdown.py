from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
BAGHDAD_DIR = SCRIPT_DIR.parent

HTML_FILE = BAGHDAD_DIR / "baghdad-timeline.html"
EVENTS_FILE = BAGHDAD_DIR / "data" / "golden-age-events.js"
DETAIL_CARDS_FILE = BAGHDAD_DIR / "data" / "detail-cards.js"
TIMELINE_JS_FILE = BAGHDAD_DIR / "js" / "baghdad-timeline.js"
DEFAULT_OUTPUT_DIR = BAGHDAD_DIR / "translation-md"
DEFAULT_RETURNED_TRANSLATION_DIR = Path("returned-md-files") / "arabic"
MAX_ENTRIES_PER_FILE = 100

EVENT_SECTIONS = {
    "BAGHDAD_FOUNDATION_PHASES": ("foundation", "Foundation Events"),
    "BAGHDAD_GOLDEN_AGE_PHASES": ("golden-age", "Golden Age Events"),
    "BAGHDAD_MONGOL_SIEGE_PHASES": ("mongol-siege", "Mongol Siege Events"),
    "BAGHDAD_STAGNATION_PHASES": ("stagnation", "Stagnation Events"),
    "BAGHDAD_OTTOMAN_PHASES": ("ottoman", "Ottoman Events"),
    "BAGHDAD_MODERN_PHASES": ("modern", "Modern Events"),
    "BAGHDAD_PROTEST_PHASES": ("protest", "Protest Events"),
}

CATEGORY_FILES = {
    "website-text": ("01_website_text", "Website Text"),
    "timeline-card-text": ("02_timeline_card_text", "Timeline Card Text"),
    "more-info-card-text": ("03_more_info_card_text", "More Info Card Text"),
    "sidebar-text": ("04_sidebar_text", "Sidebar Text"),
    "image-alt-text": ("05_image_alt_text", "Image Alt Text"),
}

TRANSLATABLE_HTML_ATTRS = {"aria-label", "title"}
IMAGE_TEXT_ATTRS = {"alt"}
VOID_HTML_TAGS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}
NON_TRANSLATABLE_TEXT = {"x", "X", "✕", "×"}


@dataclass(frozen=True)
class TranslationEntry:
    category: str
    entry_id: str
    source: Path
    context: str
    field: str
    original: str


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


def write_text(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8", newline="\n")


def rel(path: Path) -> str:
    return path.relative_to(BAGHDAD_DIR).as_posix()


def slugify(value: str, fallback: str = "item") -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or fallback


def normalize_ws(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def decode_js_string(raw_value: str, quote: str = '"') -> str:
    try:
        return json.loads(f'"{raw_value}"')
    except Exception:
        try:
            return bytes(raw_value, "utf-8").decode("unicode_escape")
        except Exception:
            return raw_value.replace(r"\'", "'").replace(r"\"", '"').replace(r"\n", "\n")


def find_matching(text: str, start: int) -> int:
    pairs = {"{": "}", "[": "]"}
    open_ch = text[start]
    close_ch = pairs.get(open_ch)
    if close_ch is None:
        return -1

    depth = 0
    in_string: str | None = None
    escaped = False
    in_line_comment = False
    in_block_comment = False

    for i in range(start, len(text)):
        ch = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""

        if in_line_comment:
            if ch in "\r\n":
                in_line_comment = False
            continue
        if in_block_comment:
            if ch == "*" and nxt == "/":
                in_block_comment = False
            continue
        if escaped:
            escaped = False
            continue
        if in_string:
            if ch == "\\":
                escaped = True
            elif ch == in_string:
                in_string = None
            continue

        if ch == "/" and nxt == "/":
            in_line_comment = True
            continue
        if ch == "/" and nxt == "*":
            in_block_comment = True
            continue
        if ch in {"'", '"', "`"}:
            in_string = ch
            continue
        if ch == open_ch:
            depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0:
                return i
    return -1


def property_string(block: str, name: str) -> str | None:
    key = rf'(?:["\']{re.escape(name)}["\']|{re.escape(name)})\s*:\s*'
    double_match = re.search(key + r'"((?:[^"\\]|\\.)*)"', block, flags=re.DOTALL)
    if double_match:
        return decode_js_string(double_match.group(1), '"')
    single_match = re.search(key + r"'((?:[^'\\]|\\.)*)'", block, flags=re.DOTALL)
    if single_match:
        return decode_js_string(single_match.group(1), "'")
    return None


def variable_ranges(text: str) -> list[tuple[str, int, int]]:
    matches = list(re.finditer(r"window\.(BAGHDAD_[A-Z_]+)\s*=", text))
    ranges: list[tuple[str, int, int]] = []
    for i, match in enumerate(matches):
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        ranges.append((match.group(1), match.start(), end))
    return ranges


def iter_top_level_objects(text: str, start: int, end: int) -> list[tuple[int, int]]:
    objects: list[tuple[int, int]] = []
    i = start
    while i < end:
        if text[i] == "{":
            obj_end = find_matching(text, i)
            if obj_end != -1 and obj_end <= end:
                objects.append((i, obj_end + 1))
                i = obj_end + 1
                continue
        i += 1
    return objects


def find_array_after(text: str, name: str, start: int, end: int) -> tuple[int, int] | None:
    match = re.search(rf'(?:["\']{re.escape(name)}["\']|{re.escape(name)})\s*:\s*\[', text[start:end])
    if not match:
        return None
    arr_start = start + match.end() - 1
    arr_end = find_matching(text, arr_start)
    if arr_end == -1:
        return None
    return arr_start, arr_end + 1


class StaticHtmlTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.entries: list[TranslationEntry] = []
        self.stack: list[tuple[str, dict[str, str]]] = []
        self.ignored_depth = 0
        self.text_index = 0
        self.attr_index = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = {name: value or "" for name, value in attrs}
        self.stack.append((tag, attr_map))
        if tag in VOID_HTML_TAGS:
            self._record_attributes(tag, attr_map)
            self.stack.pop()
            return
        if tag in {"script", "style", "svg"}:
            self.ignored_depth += 1
        self._record_attributes(tag, attr_map)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = {name: value or "" for name, value in attrs}
        self.stack.append((tag, attr_map))
        self._record_attributes(tag, attr_map)
        self.stack.pop()

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style", "svg"} and self.ignored_depth:
            self.ignored_depth -= 1
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data: str) -> None:
        if self.ignored_depth:
            return
        text = normalize_ws(data)
        if not text or text in NON_TRANSLATABLE_TEXT:
            return
        if all(ch in "xX*+-/_|<>^=~.,;:!?()[]{}#&" for ch in text):
            return
        self.text_index += 1
        context = self.current_context()
        self.entries.append(
            TranslationEntry(
                category="website-text",
                entry_id=f"website.text.{self.text_index:03d}",
                source=HTML_FILE,
                context=context,
                field="text",
                original=text,
            )
        )

    def _record_attributes(self, tag: str, attr_map: dict[str, str]) -> None:
        for attr_name in sorted(TRANSLATABLE_HTML_ATTRS | IMAGE_TEXT_ATTRS):
            value = normalize_ws(attr_map.get(attr_name, ""))
            if not value:
                continue
            self.attr_index += 1
            category = "image-alt-text" if tag == "img" and attr_name in IMAGE_TEXT_ATTRS else "website-text"
            self.entries.append(
                TranslationEntry(
                    category=category,
                    entry_id=f"html.{slugify(tag)}.{slugify(attr_name)}.{self.attr_index:03d}",
                    source=HTML_FILE,
                    context=self.current_context(),
                    field=f"{tag}.{attr_name}",
                    original=value,
                )
            )

    def current_context(self) -> str:
        parts: list[str] = []
        for tag, attrs in self.stack[-5:]:
            label = tag
            if attrs.get("id"):
                label += f"#{attrs['id']}"
            elif attrs.get("class"):
                cls = attrs["class"].split()[0]
                label += f".{cls}"
            parts.append(label)
        return " > ".join(parts) or "document"


def scan_static_html() -> list[TranslationEntry]:
    parser = StaticHtmlTextParser()
    parser.feed(read_text(HTML_FILE))
    return parser.entries


def scan_timeline_cards() -> list[TranslationEntry]:
    text = read_text(EVENTS_FILE)
    entries: list[TranslationEntry] = []

    for variable, var_start, var_end in variable_ranges(text):
        section = EVENT_SECTIONS.get(variable)
        if not section:
            continue
        section_slug, section_label = section
        assignment_start = text.find("[", var_start, var_end)
        assignment_end = find_matching(text, assignment_start) if assignment_start != -1 else -1
        if assignment_start == -1 or assignment_end == -1:
            continue

        for phase_index, (phase_start, phase_end) in enumerate(iter_top_level_objects(text, assignment_start + 1, assignment_end), 1):
            phase_block = text[phase_start:phase_end]
            events_array = find_array_after(text, "events", phase_start, phase_end)
            phase_head = text[phase_start : events_array[0] if events_array else phase_end]
            phase_title = property_string(phase_head, "title")
            phase_description = property_string(phase_head, "description")
            phase_slug = slugify(phase_title or f"phase-{phase_index}", f"phase-{phase_index}")

            if phase_title:
                entries.append(
                    TranslationEntry(
                        "timeline-card-text",
                        f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.title",
                        EVENTS_FILE,
                        f"{section_label} / phase {phase_index}",
                        "phase.title",
                        phase_title,
                    )
                )
            if phase_description:
                entries.append(
                    TranslationEntry(
                        "timeline-card-text",
                        f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.description",
                        EVENTS_FILE,
                        f"{section_label} / {phase_title or 'phase'}",
                        "phase.description",
                        phase_description,
                    )
                )

            if not events_array:
                continue
            for event_index, (event_start, event_end) in enumerate(iter_top_level_objects(text, events_array[0] + 1, events_array[1] - 1), 1):
                event_block = text[event_start:event_end]
                event_title = property_string(event_block, "title")
                event_slug = slugify(event_title or f"event-{event_index}", f"event-{event_index}")
                context = f"{section_label} / {phase_title or 'phase'} / event {event_index}"
                for field_name in ("date", "title", "description", "mediaPlaceholder"):
                    value = property_string(event_block, field_name)
                    if value:
                        entries.append(
                            TranslationEntry(
                                "timeline-card-text",
                                f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.event-{event_index:02d}.{event_slug}.{slugify(field_name)}",
                                EVENTS_FILE,
                                context,
                                f"event.{field_name}",
                                value,
                            )
                        )

                for image_field in ("alt", "caption"):
                    value = property_string(event_block, image_field)
                    if value:
                        entries.append(
                            TranslationEntry(
                                "image-alt-text" if image_field == "alt" else "timeline-card-text",
                                f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.event-{event_index:02d}.{event_slug}.image.{image_field}",
                                EVENTS_FILE,
                                context,
                                f"event.image.{image_field}",
                                value,
                            )
                        )

    return entries


def scan_detail_cards() -> list[TranslationEntry]:
    text = read_text(DETAIL_CARDS_FILE)
    entries: list[TranslationEntry] = []

    for card_index, match in enumerate(re.finditer(r'"([a-z][a-z0-9-]*)"\s*:\s*\{', text), 1):
        card_id = match.group(1)
        card_start = match.end() - 1
        card_end = find_matching(text, card_start)
        if card_end == -1:
            continue
        block = text[card_start : card_end + 1]
        title = property_string(block, "title") or card_id
        context = f"detail card {card_index}: {title}"

        for field_name in ("title", "date"):
            value = property_string(block, field_name)
            if value:
                entries.append(
                    TranslationEntry(
                        "more-info-card-text",
                        f"more-info.{card_id}.{field_name}",
                        DETAIL_CARDS_FILE,
                        context,
                        field_name,
                        value,
                    )
                )

        content_match = re.search(r"\bcontent\s*:\s*\[", block)
        if content_match:
            arr_start = card_start + content_match.end() - 1
            arr_end = find_matching(text, arr_start)
            if arr_end != -1:
                array_text = text[arr_start : arr_end + 1]
                for para_index, para_match in enumerate(re.finditer(r'"((?:[^"\\]|\\.)*)"', array_text, flags=re.DOTALL), 1):
                    entries.append(
                        TranslationEntry(
                            "more-info-card-text",
                            f"more-info.{card_id}.content.p{para_index:02d}",
                            DETAIL_CARDS_FILE,
                            context,
                            f"content[{para_index}]",
                            decode_js_string(para_match.group(1), '"'),
                        )
                    )

    return entries


def scan_sidebar_text() -> list[TranslationEntry]:
    text = read_text(TIMELINE_JS_FILE)
    entries: list[TranslationEntry] = []

    for label_index, match in enumerate(re.finditer(r"\{\s*el:\s*\w+,\s*text:\s*'((?:[^'\\]|\\.)*)'\s*\}", text), 1):
        value = decode_js_string(match.group(1), "'")
        entries.append(
            TranslationEntry(
                "sidebar-text",
                f"sidebar.heading.{slugify(value)}",
                TIMELINE_JS_FILE,
                "timeline sidebar headings",
                "heading.text",
                value,
            )
        )

    for array_name, item_kind, fields in (
        ("eras", "era", ("label", "years")),
        ("rulers", "ruler", ("name", "years")),
    ):
        array_match = re.search(rf"\bvar\s+{array_name}\s*=\s*\[", text)
        if not array_match:
            continue
        arr_start = array_match.end() - 1
        arr_end = find_matching(text, arr_start)
        if arr_end == -1:
            continue
        for item_index, (obj_start, obj_end) in enumerate(iter_top_level_objects(text, arr_start + 1, arr_end), 1):
            block = text[obj_start:obj_end]
            label = property_string(block, fields[0]) or f"{item_kind} {item_index}"
            item_slug = slugify(label, f"{item_kind}-{item_index}")
            for field_name in fields:
                value = property_string(block, field_name)
                if value:
                    entries.append(
                        TranslationEntry(
                            "sidebar-text",
                            f"sidebar.{item_kind}.{item_index:03d}.{item_slug}.{slugify(field_name)}",
                            TIMELINE_JS_FILE,
                            f"timeline sidebar {item_kind} {item_index}: {label}",
                            f"{item_kind}.{field_name}",
                            value,
                        )
                    )

    return entries


def fence_for(value: str) -> str:
    fence = "```"
    while fence in value:
        fence += "`"
    return fence


def markdown_for_entries(title: str, entries: list[TranslationEntry], start_index: int = 1) -> str:
    lines = [
        f"# {title}",
        "",
        f"This file contains {len(entries)} translation item(s).",
        "Translate the text in each `Original` block into Arabic.",
        "Put the Arabic inside the empty `Arabic translation` block.",
        "Do not change IDs, source paths, context lines, or field names.",
        "",
    ]

    for index, entry in enumerate(entries, 1):
        original_fence = fence_for(entry.original)
        display_index = start_index + index - 1
        lines.extend(
            [
                f"## {display_index:03d}. {entry.entry_id}",
                "",
                f"- ID: `{entry.entry_id}`",
                f"- Source: `{rel(entry.source)}`",
                f"- Context: `{entry.context}`",
                f"- Field: `{entry.field}`",
                "",
                "Original:",
                f"{original_fence}text",
                entry.original,
                original_fence,
                "",
                "Arabic translation:",
                "```text",
                "",
                "```",
                "",
            ]
        )
    return "\n".join(lines)


def chunk_entries(entries: list[TranslationEntry], size: int = MAX_ENTRIES_PER_FILE) -> list[list[TranslationEntry]]:
    return [entries[i : i + size] for i in range(0, len(entries), size)] or [[]]


def remove_old_generated_exports(output_dir: Path) -> None:
    for base_name, _title in CATEGORY_FILES.values():
        old_single = output_dir / f"{base_name}.md"
        if old_single.exists():
            old_single.unlink()
        for old_part in output_dir.glob(f"{base_name}_part_*.md"):
            old_part.unlink()


def write_blank_return_files(output_dir: Path, returned_dir: Path, export_filenames: list[str]) -> list[tuple[str, str]]:
    if not returned_dir.is_absolute():
        returned_dir = output_dir / returned_dir
    returned_dir.mkdir(parents=True, exist_ok=True)

    results: list[tuple[str, str]] = []
    for filename in export_filenames:
        target = returned_dir / filename
        if target.exists() and target.stat().st_size > 0:
            results.append((filename, "kept existing non-empty file"))
            continue
        write_text(target, "")
        results.append((filename, "created blank file"))
    return results


def write_exports(entries: list[TranslationEntry], output_dir: Path, returned_dir: Path | None = DEFAULT_RETURNED_TRANSLATION_DIR) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    remove_old_generated_exports(output_dir)

    grouped: dict[str, list[TranslationEntry]] = {category: [] for category in CATEGORY_FILES}
    for entry in entries:
        grouped.setdefault(entry.category, []).append(entry)

    readme_lines = [
        "# Baghdad Translation Markdown Export",
        "",
        "These files were generated by `scripts/export_translation_markdown.py`.",
        "Translate only inside each empty `Arabic translation` code block.",
        "The IDs are stable handles for putting the translated text back into the website later.",
        f"Each Markdown part contains at most {MAX_ENTRIES_PER_FILE} translation items.",
        "Matching blank paste-target files are created in `returned-md-files/arabic`.",
        "",
        "## Regenerate",
        "",
        "From the repository root:",
        "",
        "```powershell",
        "python lectures\\baghdad\\scripts\\export_translation_markdown.py",
        "```",
        "",
        "## Files",
        "",
    ]

    export_filenames: list[str] = []
    for category, (base_name, title) in CATEGORY_FILES.items():
        category_entries = grouped.get(category, [])
        chunks = chunk_entries(category_entries)
        if len(chunks) == 1:
            filename = f"{base_name}_part_01.md"
            part_title = f"{title} - Part 01"
            write_text(output_dir / filename, markdown_for_entries(part_title, chunks[0], 1))
            export_filenames.append(filename)
            readme_lines.append(f"- `{filename}`: {len(chunks[0])} entries")
            continue

        readme_lines.append(f"- `{base_name}`: {len(category_entries)} entries in {len(chunks)} parts")
        for part_index, chunk in enumerate(chunks, 1):
            start_index = (part_index - 1) * MAX_ENTRIES_PER_FILE + 1
            end_index = start_index + len(chunk) - 1
            filename = f"{base_name}_part_{part_index:02d}.md"
            part_title = f"{title} - Part {part_index:02d}"
            write_text(output_dir / filename, markdown_for_entries(part_title, chunk, start_index))
            export_filenames.append(filename)
            readme_lines.append(f"  - `{filename}`: entries {start_index}-{end_index} ({len(chunk)} items)")

    if returned_dir is not None:
        returned_results = write_blank_return_files(output_dir, returned_dir, export_filenames)
        readme_lines.extend(["", "## Blank Return Files", ""])
        for filename, status in returned_results:
            readme_lines.append(f"- `returned-md-files/arabic/{filename}`: {status}")

    total = sum(len(items) for items in grouped.values())
    readme_lines.extend(["", f"Total entries: {total}", ""])
    write_text(output_dir / "_README.md", "\n".join(readme_lines))


def collect_entries() -> list[TranslationEntry]:
    return [
        *scan_static_html(),
        *scan_timeline_cards(),
        *scan_detail_cards(),
        *scan_sidebar_text(),
    ]


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Export Baghdad website text into categorized Markdown files for Arabic translation."
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help=f"Output directory. Default: {DEFAULT_OUTPUT_DIR}",
    )
    parser.add_argument(
        "--returned-dir",
        type=Path,
        default=DEFAULT_RETURNED_TRANSLATION_DIR,
        help=(
            "Directory for matching blank returned translation files. "
            "Relative paths are resolved inside the output directory. "
            f"Default: {DEFAULT_RETURNED_TRANSLATION_DIR}"
        ),
    )
    parser.add_argument(
        "--no-returned-blanks",
        action="store_true",
        help="Do not create blank paste-target files for returned translations.",
    )
    args = parser.parse_args()

    output_dir = args.output
    if not output_dir.is_absolute():
        output_dir = BAGHDAD_DIR / output_dir

    entries = collect_entries()
    returned_dir = None if args.no_returned_blanks else args.returned_dir
    write_exports(entries, output_dir, returned_dir)
    print(f"Wrote {len(entries)} translation entries to {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
