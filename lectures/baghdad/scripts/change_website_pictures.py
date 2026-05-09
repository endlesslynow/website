from __future__ import annotations

import html
import re
import shutil
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path

from PyQt6.QtCore import Qt
from PyQt6.QtGui import QPixmap
from PyQt6.QtWidgets import (
    QApplication,
    QFileDialog,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QListWidget,
    QListWidgetItem,
    QMainWindow,
    QMessageBox,
    QPushButton,
    QTabWidget,
    QVBoxLayout,
    QWidget,
)


SCRIPT_DIR = Path(__file__).resolve().parent
BAGHDAD_DIR = SCRIPT_DIR.parent

HTML_FILE = BAGHDAD_DIR / "baghdad-timeline.html"
EVENTS_FILE = BAGHDAD_DIR / "data" / "golden-age-events.js"
TIMELINE_JS_FILE = BAGHDAD_DIR / "js" / "baghdad-timeline.js"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"}

EVENT_SECTIONS = {
    "BAGHDAD_FOUNDATION_PHASES": "Foundation Timeline Cards",
    "BAGHDAD_GOLDEN_AGE_PHASES": "Golden Age Timeline Cards",
    "BAGHDAD_MONGOL_SIEGE_PHASES": "Mongol Siege Timeline Cards",
    "BAGHDAD_STAGNATION_PHASES": "Stagnation Timeline Cards",
    "BAGHDAD_OTTOMAN_PHASES": "Ottoman Timeline Cards",
    "BAGHDAD_MODERN_PHASES": "Modern Timeline Cards",
    "BAGHDAD_PROTEST_PHASES": "Protest Timeline Cards",
}

DETAIL_SECTIONS_BY_ERA = {
    "era1": "Foundation More Info Cards",
    "era2": "Golden Age More Info Cards",
    "era3": "Mongol Siege More Info Cards",
    "era4": "Stagnation More Info Cards",
    "era5": "Ottoman More Info Cards",
    "era6": "Modern More Info Cards",
    "era7": "Protest More Info Cards",
}

TAB_ORDER = [
    "Foundation Timeline Cards",
    "Golden Age Timeline Cards",
    "Mongol Siege Timeline Cards",
    "Stagnation Timeline Cards",
    "Ottoman Timeline Cards",
    "Modern Timeline Cards",
    "Protest Timeline Cards",
    "Ruler Portraits",
    "Foundation More Info Cards",
    "Golden Age More Info Cards",
    "Mongol Siege More Info Cards",
    "Stagnation More Info Cards",
    "Ottoman More Info Cards",
    "Modern More Info Cards",
    "Protest More Info Cards",
]


@dataclass(frozen=True)
class PictureEntry:
    section: str
    label: str
    src: str
    file_path: Path
    span: tuple[int, int] | None = None
    insert_at: int | None = None
    quote: str = '"'
    caption: str = ""
    caption_span: tuple[int, int] | None = None

    @property
    def target_dir(self) -> Path:
        parts = Path(self.src.replace("/", "\\")).parts
        if len(parts) > 1 and parts[0] == "images":
            return BAGHDAD_DIR / Path(*parts[:-1])
        return BAGHDAD_DIR / "images"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


def write_text(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8")


def clean_label(value: str) -> str:
    value = re.sub(r"<[^>]+>", "", value)
    value = html.unescape(value)
    value = re.sub(r"\s+", " ", value).strip()
    return value or "Untitled"


def decode_js_string(value: str) -> str:
    return (
        value
        .replace("\\\\", "\x00")
        .replace("\\'", "'")
        .replace('\\"', '"')
        .replace("\\n", "\n")
        .replace("\\t", "\t")
        .replace("\x00", "\\")
    )


def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value.lower()).strip("-")
    return value or "picture"


def posix_rel(path: Path) -> str:
    return path.relative_to(BAGHDAD_DIR).as_posix()


def site_path_exists(src: str) -> bool:
    return (BAGHDAD_DIR / src).exists()


def path_for_preview(src: str) -> Path:
    return BAGHDAD_DIR / src


def unique_destination(entry: PictureEntry, chosen: Path) -> Path:
    target_dir = entry.target_dir
    target_dir.mkdir(parents=True, exist_ok=True)
    stem = slugify(entry.label)
    suffix = chosen.suffix.lower()
    candidate = target_dir / f"{stem}{suffix}"
    counter = 2
    while candidate.exists():
        try:
            if candidate.resolve() == chosen.resolve():
                return candidate
        except OSError:
            pass
        candidate = target_dir / f"{stem}-{counter}{suffix}"
        counter += 1
    return candidate


def copy_or_reference(entry: PictureEntry, chosen_name: str) -> str:
    chosen = Path(chosen_name).resolve()
    if chosen.suffix.lower() not in IMAGE_EXTENSIONS:
        raise ValueError("Please choose an image file.")

    try:
        return chosen.relative_to(BAGHDAD_DIR).as_posix()
    except ValueError:
        destination = unique_destination(entry, chosen)
        shutil.copy2(chosen, destination)
        return posix_rel(destination)


def nearest_value(text: str, pattern: str, before: int) -> str:
    matches = list(re.finditer(pattern, text[:before], flags=re.S))
    if not matches:
        return ""
    return clean_label(matches[-1].group(1))


def scan_html_detail_cards() -> list[PictureEntry]:
    text = read_text(HTML_FILE)
    entries: list[PictureEntry] = []
    section_matches = list(re.finditer(r"<section\b.*?</section>", text, flags=re.S | re.I))
    for section_match in section_matches:
        section_text = section_match.group(0)
        heading_match = re.search(r"<h2[^>]*>(.*?)</h2>", section_text, flags=re.S | re.I)
        heading = clean_label(heading_match.group(1)) if heading_match else "Detail Cards"
        era_match = re.search(r'\bdata-era=(["\'])(.*?)\1', section_text, flags=re.S | re.I)
        section = DETAIL_SECTIONS_BY_ERA.get(era_match.group(2), f"{heading} More Info Cards") if era_match else f"{heading} More Info Cards"

        for image_match in re.finditer(r"<img\s+[^>]*src=(['\"])(.*?)\1[^>]*>", section_text, flags=re.S | re.I):
            src = image_match.group(2)
            if not src.startswith("images/"):
                continue
            after = section_text[image_match.end() :]
            title_match = re.search(
                r'<div\s+class=(["\'])detail-card-title\1[^>]*>(.*?)</div>',
                after,
                flags=re.S | re.I,
            )
            label = clean_label(title_match.group(2)) if title_match else Path(src).name
            src_start = section_match.start() + image_match.start(2)
            src_end = section_match.start() + image_match.end(2)

            # Extract alt attribute as the caption
            img_tag = image_match.group(0)
            alt_m = re.search(r'\balt=([\'"])(.*?)\1', img_tag, re.I | re.S)
            if alt_m:
                alt_offset = section_match.start() + image_match.start() + alt_m.start(2)
                caption = html.unescape(alt_m.group(2))
                caption_span: tuple[int, int] | None = (alt_offset, alt_offset + len(alt_m.group(2)))
            else:
                caption = ""
                caption_span = None

            entries.append(PictureEntry(
                section,
                label,
                src,
                HTML_FILE,
                (src_start, src_end),
                quote=image_match.group(1),
                caption=caption,
                caption_span=caption_span,
            ))
    return entries


def variable_ranges(text: str) -> list[tuple[str, int, int]]:
    matches = list(re.finditer(r"window\.(BAGHDAD_[A-Z_]+)\s*=", text))
    ranges: list[tuple[str, int, int]] = []
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        ranges.append((match.group(1), match.start(), end))
    return ranges


def scan_event_cards() -> list[PictureEntry]:
    text = read_text(EVENTS_FILE)
    entries: list[PictureEntry] = []
    src_pattern = re.compile(r'"src"\s*:\s*"([^"]+)"')
    for variable, start, end in variable_ranges(text):
        section = EVENT_SECTIONS.get(variable)
        if not section:
            continue
        block = text[start:end]
        for match in src_pattern.finditer(block):
            src = match.group(1)
            if not src.startswith("images/"):
                continue
            absolute_start = start + match.start(1)
            absolute_end = start + match.end(1)
            before = block[: match.start()]
            title = nearest_value(before, r'"title"\s*:\s*"([^"]+)"', len(before))
            date = nearest_value(before, r'"date"\s*:\s*"([^"]+)"', len(before))
            label = f"{date} - {title}" if date and title else title or Path(src).name

            # Find the "caption" field in the rest of the same image object
            after_src = block[match.end():]
            obj_end = after_src.find("}")
            caption = ""
            caption_span: tuple[int, int] | None = None
            if obj_end != -1:
                cap_m = re.search(r'"caption"\s*:\s*"([^"]*)"', after_src[:obj_end])
                if cap_m:
                    abs_cap_start = start + match.end() + cap_m.start(1)
                    abs_cap_end = start + match.end() + cap_m.end(1)
                    caption = cap_m.group(1)
                    caption_span = (abs_cap_start, abs_cap_end)

            entries.append(PictureEntry(
                section, label, src, EVENTS_FILE,
                (absolute_start, absolute_end),
                caption=caption,
                caption_span=caption_span,
            ))
    return entries


def ruler_slug(name: str) -> str:
    return re.sub(r"^-+|-+$", "", re.sub(r"[^a-z0-9]+", "-", name.lower().replace(".", "")))


def scan_rulers() -> list[PictureEntry]:
    text = read_text(TIMELINE_JS_FILE)
    rulers_match = re.search(r"var\s+rulers\s*=\s*\[(.*?)\];", text, flags=re.S)
    if not rulers_match:
        return []

    entries: list[PictureEntry] = []
    block_start = rulers_match.start(1)
    block = rulers_match.group(1)
    object_pattern = re.compile(r"\{[^{}]*\}", re.S)
    string_value = r"(['\"])((?:\\.|(?!\1).)*)\1"
    name_pattern = re.compile(r"name:\s*" + string_value, re.S)
    portrait_pattern = re.compile(r"portrait:\s*" + string_value, re.S)
    years_pattern = re.compile(r"years:\s*" + string_value, re.S)
    for match in object_pattern.finditer(block):
        item = match.group(0)
        name_match = name_pattern.search(item)
        if not name_match:
            continue
        name = clean_label(decode_js_string(name_match.group(2)))
        years_match = years_pattern.search(item)
        years = clean_label(decode_js_string(years_match.group(2))) if years_match else ""
        label = f"{name} ({years})" if years else name
        portrait_match = portrait_pattern.search(item)
        if portrait_match:
            src = decode_js_string(portrait_match.group(2))
            start = block_start + match.start() + portrait_match.start(2)
            end = block_start + match.start() + portrait_match.end(2)
            entries.append(PictureEntry("Ruler Portraits", label, src, TIMELINE_JS_FILE, (start, end), quote=portrait_match.group(1)))
        else:
            src = f"images/rulers/{ruler_slug(name)}.jpg"
            insert_at = block_start + match.end() - 1
            entries.append(PictureEntry("Ruler Portraits", label, src, TIMELINE_JS_FILE, None, insert_at, quote="'"))
    return entries


def scan_all_entries() -> list[PictureEntry]:
    entries: list[PictureEntry] = []
    entries.extend(scan_html_detail_cards())
    entries.extend(scan_event_cards())
    entries.extend(scan_rulers())
    return entries


def unique_span(text: str, value: str) -> tuple[int, int] | None:
    matches = [match.span() for match in re.finditer(re.escape(value), text)]
    if len(matches) == 1:
        return matches[0]
    return None


def replace_entry(entry: PictureEntry, new_src: str) -> None:
    text = read_text(entry.file_path)
    if entry.span:
        start, end = entry.span
        found = text[start:end]
        if found != entry.src:
            current_span = unique_span(text, entry.src)
            if current_span is None:
                count = len(re.findall(re.escape(entry.src), text))
                reason = "Could not find the expected path." if count == 0 else "Found the expected path more than once."
                raise ValueError(
                    f"File changed since last scan — cannot safely update.\n\n"
                    f"Expected: {entry.src!r}\nFound at scanned position: {found!r}\n\n"
                    f"{reason}\nClick 'Refresh List' and try again."
                )
            start, end = current_span
        text = text[:start] + new_src + text[end:]
    elif entry.insert_at is not None:
        text = text[: entry.insert_at] + f", portrait: {entry.quote}{new_src}{entry.quote}" + text[entry.insert_at :]
    else:
        raise ValueError("This image entry cannot be changed.")
    write_text(entry.file_path, text)


def replace_caption(entry: PictureEntry, new_caption: str) -> None:
    if entry.caption_span is None:
        raise ValueError("This entry has no editable caption.")
    text = read_text(entry.file_path)
    start, end = entry.caption_span
    found = text[start:end]
    if found != entry.caption:
        raise ValueError(
            f"File changed since last scan — cannot safely update.\n\n"
            f"Expected: {entry.caption!r}\nFound at position: {found!r}\n\n"
            f"Click 'Refresh List' and try again."
        )
    text = text[:start] + new_caption + text[end:]
    write_text(entry.file_path, text)


class PictureChanger(QMainWindow):
    def __init__(self) -> None:
        super().__init__()
        self.setWindowTitle("Baghdad Website Picture Changer")
        self.resize(980, 680)
        self.entries: list[PictureEntry] = []
        self.lists: dict[str, QListWidget] = {}

        self.tabs = QTabWidget()
        self.tabs.currentChanged.connect(self.update_preview)
        self.preview = QLabel("Select a picture")
        self.preview.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.preview.setMinimumSize(360, 300)
        self.preview.setStyleSheet("border: 1px solid #b9b9b9; background: #f7f7f7; color: #333;")

        self.title_label = QLabel("")
        self.title_label.setWordWrap(True)
        self.path_label = QLabel("")
        self.path_label.setWordWrap(True)
        self.status_label = QLabel("")
        self.status_label.setWordWrap(True)

        self.choose_button = QPushButton("Choose New Picture")
        self.choose_button.clicked.connect(self.choose_new_picture)
        self.refresh_button = QPushButton("Refresh List")
        self.refresh_button.clicked.connect(self.reload)

        caption_label = QLabel("Caption / Alt text:")
        self.caption_edit = QLineEdit()
        self.caption_edit.setPlaceholderText("No caption for this entry")
        self.save_caption_button = QPushButton("Save Caption")
        self.save_caption_button.clicked.connect(self.save_caption)

        right_layout = QVBoxLayout()
        right_layout.addWidget(self.preview)
        right_layout.addWidget(self.title_label)
        right_layout.addWidget(self.path_label)
        right_layout.addWidget(self.choose_button)
        right_layout.addWidget(caption_label)
        right_layout.addWidget(self.caption_edit)
        right_layout.addWidget(self.save_caption_button)
        right_layout.addWidget(self.refresh_button)
        right_layout.addWidget(self.status_label)
        right_layout.addStretch(1)

        root_layout = QHBoxLayout()
        root_layout.addWidget(self.tabs, 2)
        right_widget = QWidget()
        right_widget.setLayout(right_layout)
        root_layout.addWidget(right_widget, 1)

        root = QWidget()
        root.setLayout(root_layout)
        self.setCentralWidget(root)

        self.reload()

    def _save_position(self) -> tuple[str, int]:
        tab_name = self.tabs.tabText(self.tabs.currentIndex())
        current_list = self.tabs.currentWidget()
        row = current_list.currentRow() if isinstance(current_list, QListWidget) else 0
        return tab_name, row

    def _restore_position(self, tab_name: str, row: int) -> None:
        if tab_name in self.lists:
            self.tabs.setCurrentWidget(self.lists[tab_name])
            lst = self.lists[tab_name]
            if row < lst.count():
                lst.setCurrentRow(row)

    def selected_entry(self) -> PictureEntry | None:
        current_list = self.tabs.currentWidget()
        if not isinstance(current_list, QListWidget):
            return None
        item = current_list.currentItem()
        if item is None:
            return None
        index = item.data(Qt.ItemDataRole.UserRole)
        if isinstance(index, int) and 0 <= index < len(self.entries):
            return self.entries[index]
        return None

    def reload(self) -> None:
        try:
            self.entries = scan_all_entries()
        except Exception as exc:
            QMessageBox.critical(self, "Could not read website files", str(exc))
            return

        self.tabs.clear()
        self.lists.clear()
        grouped: dict[str, list[tuple[int, PictureEntry]]] = {}
        for index, entry in enumerate(self.entries):
            grouped.setdefault(entry.section, []).append((index, entry))

        ordered = sorted(grouped.items(), key=lambda x: TAB_ORDER.index(x[0]) if x[0] in TAB_ORDER else len(TAB_ORDER))
        for section, items in ordered:
            list_widget = QListWidget()
            list_widget.currentItemChanged.connect(self.update_preview)
            for index, entry in items:
                missing = "" if site_path_exists(entry.src) else " [missing]"
                item = QListWidgetItem(f"{entry.label}{missing}")
                item.setData(Qt.ItemDataRole.UserRole, index)
                list_widget.addItem(item)
            self.tabs.addTab(list_widget, section)
            self.lists[section] = list_widget

        if self.tabs.count():
            first = self.tabs.widget(0)
            if isinstance(first, QListWidget) and first.count():
                first.setCurrentRow(0)
        self.status_label.setText(f"Found {len(self.entries)} picture references.")

    def update_preview(self, *_args) -> None:
        entry = self.selected_entry()
        if entry is None:
            self.preview.setText("Select a picture")
            self.preview.setPixmap(QPixmap())
            self.title_label.setText("")
            self.path_label.setText("")
            self.caption_edit.setText("")
            self.caption_edit.setEnabled(False)
            self.save_caption_button.setEnabled(False)
            return

        self.title_label.setText(entry.label)
        self.path_label.setText(f"{entry.src}\n{entry.file_path.relative_to(BAGHDAD_DIR)}")

        has_caption = entry.caption_span is not None
        self.caption_edit.setText(entry.caption)
        self.caption_edit.setEnabled(has_caption)
        self.save_caption_button.setEnabled(has_caption)

        image_path = path_for_preview(entry.src)
        if not image_path.exists():
            self.preview.setPixmap(QPixmap())
            self.preview.setText("Image file is missing")
            return

        pixmap = QPixmap(str(image_path))
        if pixmap.isNull():
            self.preview.setPixmap(QPixmap())
            self.preview.setText("Preview not available")
            return
        scaled = pixmap.scaled(
            self.preview.size(),
            Qt.AspectRatioMode.KeepAspectRatio,
            Qt.TransformationMode.SmoothTransformation,
        )
        self.preview.setText("")
        self.preview.setPixmap(scaled)

    def resizeEvent(self, event) -> None:  # noqa: N802
        super().resizeEvent(event)
        self.update_preview()

    def choose_new_picture(self) -> None:
        entry = self.selected_entry()
        if entry is None:
            QMessageBox.information(self, "No picture selected", "Select a picture first.")
            return

        chosen_name, _ = QFileDialog.getOpenFileName(
            self,
            "Choose new picture",
            str(Path.home()),
            "Images (*.jpg *.jpeg *.png *.webp *.gif *.svg);;All files (*)",
        )
        if not chosen_name:
            return

        try:
            new_src = copy_or_reference(entry, chosen_name)
            replace_entry(entry, new_src)
        except Exception as exc:
            QMessageBox.critical(self, "Could not change picture", str(exc))
            return

        saved = self._save_position()
        self.status_label.setText(f"Changed: {entry.label}\nNew path: {new_src}")
        self.reload()
        self._restore_position(*saved)

    def save_caption(self) -> None:
        entry = self.selected_entry()
        if entry is None:
            return
        new_caption = self.caption_edit.text()
        try:
            replace_caption(entry, new_caption)
        except Exception as exc:
            QMessageBox.critical(self, "Could not save caption", str(exc))
            return

        saved = self._save_position()
        self.status_label.setText(f"Caption saved: {entry.label}")
        self.reload()
        self._restore_position(*saved)


def main() -> int:
    app = QApplication(sys.argv)
    window = PictureChanger()
    window.show()
    return app.exec()


if __name__ == "__main__":
    raise SystemExit(main())
