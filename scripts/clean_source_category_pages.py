from __future__ import annotations

import argparse
import html
import re
import unicodedata
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "kurdish_research"
REFERENCE_PAGE = SOURCE_DIR / "source_category_01-peer-reviewed-academic.html"
LANDING_PAGE = SOURCE_DIR / "kurdish_research.html"

STYLE_RE = re.compile(r"<style>.*?</style>", re.DOTALL)
SCRIPT_RE = re.compile(r'<script id="source-topic-filter">.*?</script>', re.DOTALL)
SEARCH_CONTROLS_RE = re.compile(r'<div class="search-controls" role="search">.*?</div>', re.DOTALL)
TAG_RE = re.compile(r'<(?:span class="tag"|a class="tag" href="[^"]*"[^>]*)>(.*?)</(?:span|a)>', re.DOTALL)
TAG_LINK_RE = re.compile(r'<a class="tag" href="([^"]+)"[^>]*>(.*?)</a>', re.DOTALL)
TAG_SPAN_RE = re.compile(r'<span class="tag">(.*?)</span>', re.DOTALL)
COUNT_RE = re.compile(r'<div class="count">Number of times used:\s*(.*?)</div>', re.DOTALL)
URL_LABEL_RE = re.compile(r'(<div class="meta-row url"><span class="meta-label">)URL(:</span>)')
NO_URL_ROW_RE = re.compile(r'<div class="meta-row"><span class="meta-label">URL:</span>\s*No URL</div>')
RESOURCE_LINK_RE = re.compile(
    r'<a href="([^"]+)" class="resource-link">.*?<span class="link-title">(.*?)</span>',
    re.DOTALL,
)
H1_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.DOTALL)
DOWNLOAD_RE = re.compile(r'<a href="([^"]+)" class="download-btn"', re.DOTALL)
KNOWN_MOJIBAKE_REPLACEMENTS: tuple[tuple[str, str], ...] = (
    ("\u00e2\u20ac\u0153", "\u201c"),
    ("\u00e2\u20ac\u009d", "\u201d"),
    ("\u00e2\u20ac\u02dc", "\u2018"),
    ("\u00e2\u20ac\u2122", "\u2019"),
    ("\u00e2\u20ac\u201c", "\u2013"),
    ("\u00e2\u20ac\u201d", "\u2014"),
    ("\u00e2\u20ac\u00a6", "\u2026"),
    ("\u00c3a", "\u00ea"),
    ("\u00c3\u0160", "\u00ca"),
    ("\u00c3\u0081", "\u00c1"),
    ("\u00c31\u20444", "\u00fc"),
    ("\u00c3 \u0308", "\u00e8"),
    ("\u00c3\u00aa", "\u00ea"),
    ("\u00c3\u00ae", "\u00ee"),
    ("\u00c3\u00bb", "\u00fb"),
    ("\u00c3\u00a7", "\u00e7"),
    ("\u00c3\u00b6", "\u00f6"),
    ("\u00c3\u00bc", "\u00fc"),
    ("\u00c3\u00a9", "\u00e9"),
    ("\u00c3\u00a8", "\u00e8"),
    ("\u00c3\u00a2", "\u00e2"),
    ("\u00c3\u0178", "\u00df"),
    ("\u00c3\u2021", "\u00c7"),
    ("\u00c3\u2013", "\u00d6"),
    ("\u00c3\u0152", "\u00dc"),
    ("\u00c3\u0153", "\u00dc"),
    ("\u00c4\u00b0", "\u0130"),
    ("\u00c4\u00b1", "\u0131"),
    ("\u00c4\u20ac", "\u0100"),
    ("\u00c4\u017e", "\u011e"),
    ("\u00c4\u0178", "\u011f"),
    ("\u00c5\u017e", "\u015e"),
    ("\u00c5\u0178", "\u015f"),
    ("\u00c5\u009e", "\u015e"),
    ("\u00c5\u009f", "\u015f"),
    ("\u00c5\u2018", "\u0151"),
    ("\u00c5\u2019", "\u0171"),
    ("\u00c5\u2122", "\u0159"),
    ("\u00c5\u00a1", "\u0161"),
    ("\u00c5\u008d", "\u014d"),
    ("\u00e2\u20ac\u00a2", "\u2022"),
)

SEARCH_CONTROLS_HTML = """<div class="search-controls" role="search">
<label class="search-label" for="source-search">Search</label>
<input type="search" id="source-search" class="search-input" autocomplete="off" placeholder="Search source names or used-in files">
<button type="button" class="search-clear" hidden>Clear</button>
<div class="search-count" aria-live="polite"></div>
</div>"""


def source_category_pages() -> list[Path]:
    return sorted(SOURCE_DIR.glob("source_category_*.html"), key=lambda item: item.name.casefold())


def collapse_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def normalize_lookup_key(text: str) -> str:
    text = html.unescape(text)
    text, _count = repair_known_mojibake(text)
    text = unquote(text)
    text = re.sub(r"\.(?:html?|pdf)$", "", text, flags=re.IGNORECASE)
    text = text.replace("_", " ").replace("-", " ")
    text = unicodedata.normalize("NFKD", text)
    text = "".join(character for character in text if not unicodedata.combining(character))
    text = re.sub(r"[^0-9A-Za-z]+", " ", text).casefold()
    return collapse_whitespace(text)


def source_relative_href(href: str, base_page: Path = LANDING_PAGE) -> str:
    href = html.unescape(href).strip()
    if not href or re.match(r"^[a-z][a-z0-9+.-]*:", href, flags=re.IGNORECASE):
        return href
    target = (base_page.parent / href).resolve()
    try:
        return target.relative_to(SOURCE_DIR.resolve()).as_posix()
    except ValueError:
        return href


def add_link_key(mapping: dict[str, str], label: str, href: str) -> None:
    key = normalize_lookup_key(label)
    if key:
        mapping.setdefault(key, href)


def build_file_link_map() -> dict[str, str]:
    mapping: dict[str, str] = {}

    if LANDING_PAGE.is_file():
        landing_text = LANDING_PAGE.read_text(encoding="utf-8", errors="replace")
        for href, label_html in RESOURCE_LINK_RE.findall(landing_text):
            label = collapse_whitespace(html.unescape(re.sub(r"<[^>]+>", "", label_html)))
            if label and label != "Browse Source Categories":
                add_link_key(mapping, label, source_relative_href(href, LANDING_PAGE))

    for page in sorted((SOURCE_DIR / "podcast_pages").glob("*.html"), key=lambda item: item.name.casefold()):
        href = f"podcast_pages/{page.name}"
        add_link_key(mapping, page.stem, href)
        page_text = page.read_text(encoding="utf-8", errors="replace")
        h1_match = H1_RE.search(page_text)
        if h1_match:
            label = collapse_whitespace(html.unescape(re.sub(r"<[^>]+>", "", h1_match.group(1))))
            add_link_key(mapping, label, href)
        for download_href in DOWNLOAD_RE.findall(page_text):
            download_name = Path(unquote(download_href)).stem
            add_link_key(mapping, download_name, href)

    for doc in sorted((SOURCE_DIR / "docs").glob("*.pdf"), key=lambda item: item.name.casefold()):
        add_link_key(mapping, doc.stem, f"docs/{doc.name}")

    for category_page in source_category_pages():
        page_text = category_page.read_text(encoding="utf-8", errors="replace")
        for href, label_html in TAG_LINK_RE.findall(page_text):
            href = html.unescape(href)
            if href.startswith("podcast_pages/") and (SOURCE_DIR / href).is_file():
                label = collapse_whitespace(html.unescape(re.sub(r"<[^>]+>", "", label_html)))
                add_link_key(mapping, label, href)

    return mapping


def resolve_file_href(label: str, file_link_map: dict[str, str], lookup_keys: list[str]) -> str | None:
    key = normalize_lookup_key(label)
    if key in file_link_map:
        return file_link_map[key]

    for candidate in lookup_keys:
        if len(candidate) >= 12 and (candidate in key or key in candidate):
            return file_link_map[candidate]

    return None


def tag_to_link(match: re.Match[str], file_link_map: dict[str, str], lookup_keys: list[str]) -> str:
    label_html = match.group(1)
    label = collapse_whitespace(html.unescape(re.sub(r"<[^>]+>", "", label_html)))
    href = resolve_file_href(label, file_link_map, lookup_keys)
    if href is None:
        raise RuntimeError(f'No podcast page link found for used-in label: "{label}"')
    if not href.startswith("podcast_pages/") or not (SOURCE_DIR / href).is_file():
        raise RuntimeError(f'Invalid used-in link for "{label}": "{href}"')
    return f'<a class="tag" href="{html.escape(href, quote=True)}" target="_blank" rel="noopener noreferrer">{label_html}</a>'


def relabel_url_rows(text: str) -> tuple[str, int]:
    updated, url_label_count = URL_LABEL_RE.subn(r"\1Link\2", text)
    updated, no_url_count = NO_URL_ROW_RE.subn(
        '<div class="meta-row url"><span class="meta-label">Link:</span> No URL</div>',
        updated,
    )
    return updated, url_label_count + no_url_count


def normalize_count_rows(text: str) -> tuple[str, int]:
    return COUNT_RE.subn(
        lambda match: f'<div class="meta-row count"><span class="meta-label">Number of times used:</span> {match.group(1).strip()}</div>',
        text,
    )


def link_used_file_tags(text: str, file_link_map: dict[str, str]) -> tuple[str, int]:
    linked = 0
    lookup_keys = sorted(file_link_map, key=len, reverse=True)

    def replace(match: re.Match[str]) -> str:
        nonlocal linked
        replacement = tag_to_link(match, file_link_map, lookup_keys)
        if replacement != match.group(0):
            linked += 1
        return replacement

    return TAG_RE.sub(replace, text), linked


def ensure_search_controls(text: str) -> str:
    if SEARCH_CONTROLS_RE.search(text):
        return text

    marker = '<div class="back-link"><a href="source_categories.html"'
    if marker in text:
        return text.replace(marker, f"{SEARCH_CONTROLS_HTML}\n{marker}", 1)

    category_marker = '<div class="category">'
    if category_marker in text:
        return text.replace(category_marker, f"{SEARCH_CONTROLS_HTML}\n{category_marker}", 1)

    return text


def reference_style() -> str:
    text = REFERENCE_PAGE.read_text(encoding="utf-8", errors="replace")
    match = STYLE_RE.search(text)
    if not match:
        raise RuntimeError(f"No <style> block found in {REFERENCE_PAGE}")
    return match.group(0)


def reference_script() -> str:
    text = REFERENCE_PAGE.read_text(encoding="utf-8", errors="replace")
    match = SCRIPT_RE.search(text)
    if not match:
        raise RuntimeError(f'No <script id="source-topic-filter"> block found in {REFERENCE_PAGE}')
    return match.group(0)


def repair_known_mojibake(text: str) -> tuple[str, int]:
    updated = text
    replacement_count = 0
    for bad, good in KNOWN_MOJIBAKE_REPLACEMENTS:
        count = updated.count(bad)
        if count:
            updated = updated.replace(bad, good)
            replacement_count += count
    return updated, replacement_count


def clean_page(
    path: Path,
    style_block: str,
    script_block: str,
    file_link_map: dict[str, str],
) -> tuple[int, int, int, int, int, int]:
    text = path.read_text(encoding="utf-8", errors="replace")
    updated, mojibake_count = repair_known_mojibake(text)
    updated, url_label_count = relabel_url_rows(updated)
    updated, count_row_count = normalize_count_rows(updated)
    updated, linked_tag_count = link_used_file_tags(updated, file_link_map)
    updated = ensure_search_controls(updated)

    style_count = 0
    if STYLE_RE.search(updated):
        next_updated, count = STYLE_RE.subn(style_block, updated, count=1)
        if next_updated != updated:
            style_count = count
            updated = next_updated
    else:
        raise RuntimeError(f"No <style> block found in {path}")

    script_count = 0
    script_match = SCRIPT_RE.search(updated)
    if script_match:
        next_updated, count = SCRIPT_RE.subn(lambda _match: script_block, updated, count=1)
        if next_updated != updated:
            script_count = count
            updated = next_updated
    elif "</body>" in updated:
        updated = updated.replace("</body>", f"{script_block}</body>", 1)
        script_count = 1

    if updated != text:
        path.write_text(updated, encoding="utf-8", newline="")

    return mojibake_count, style_count, script_count, url_label_count, count_row_count, linked_tag_count


def audit_remaining_known_mojibake() -> int:
    total = 0
    for path in source_category_pages():
        text = path.read_text(encoding="utf-8", errors="replace")
        for bad, _good in KNOWN_MOJIBAKE_REPLACEMENTS:
            total += text.count(bad)
    return total


def audit_used_file_tag_links() -> list[str]:
    violations: list[str] = []
    for path in source_category_pages():
        text = path.read_text(encoding="utf-8", errors="replace")
        for match in TAG_SPAN_RE.finditer(text):
            label = collapse_whitespace(html.unescape(re.sub(r"<[^>]+>", "", match.group(1))))
            violations.append(f'{path.name}: unlinked used-in tag "{label}"')
        for href_html, label_html in TAG_LINK_RE.findall(text):
            href = html.unescape(href_html)
            label = collapse_whitespace(html.unescape(re.sub(r"<[^>]+>", "", label_html)))
            if not href.startswith("podcast_pages/"):
                violations.append(f'{path.name}: used-in tag "{label}" points to "{href}"')
            elif not (SOURCE_DIR / href).is_file():
                violations.append(f'{path.name}: used-in tag "{label}" points to missing file "{href}"')
    return violations


def main() -> int:
    parser = argparse.ArgumentParser(description="Clean source-category HTML pages and align their page format.")
    parser.add_argument("--check", action="store_true", help="Report what would be changed without writing files.")
    args = parser.parse_args()

    style_block = reference_style()
    script_block = reference_script()
    file_link_map = build_file_link_map()
    pages = source_category_pages()
    total_mojibake = 0
    total_style_updates = 0
    total_script_updates = 0
    total_url_label_updates = 0
    total_count_row_updates = 0
    total_linked_tag_updates = 0

    if args.check:
        for path in pages:
            text = path.read_text(encoding="utf-8", errors="replace")
            _cleaned, mojibake_count = repair_known_mojibake(text)
            _url_labeled, url_label_count = relabel_url_rows(text)
            _counted, count_row_count = normalize_count_rows(text)
            _linked, linked_tag_count = link_used_file_tags(text, file_link_map)
            style_match = STYLE_RE.search(text)
            style_update = int(bool(style_match and style_match.group(0) != style_block))
            script_match = SCRIPT_RE.search(text)
            script_update = int(bool(script_match and script_match.group(0) != script_block))
            total_mojibake += mojibake_count
            total_style_updates += style_update
            total_script_updates += script_update
            total_url_label_updates += url_label_count
            total_count_row_updates += count_row_count
            total_linked_tag_updates += linked_tag_count
            if mojibake_count or style_update or script_update or url_label_count or count_row_count or linked_tag_count:
                print(
                    f"{path.name}: mojibake replacements={mojibake_count}, "
                    f"style update={style_update}, script update={script_update}, "
                    f"url labels={url_label_count}, count rows={count_row_count}, linked tags={linked_tag_count}"
                )
        print(f"Pages scanned: {len(pages)}")
        print(f"File link targets loaded: {len(file_link_map)}")
        print(f"Mojibake replacements pending: {total_mojibake}")
        print(f"Style updates pending: {total_style_updates}")
        print(f"Script updates pending: {total_script_updates}")
        print(f"URL label updates pending: {total_url_label_updates}")
        print(f"Count row updates pending: {total_count_row_updates}")
        print(f"File tag links pending: {total_linked_tag_updates}")
        used_file_tag_violations = audit_used_file_tag_links()
        if used_file_tag_violations:
            raise RuntimeError(
                "Used-in tag link audit failed:\n" + "\n".join(used_file_tag_violations[:50])
            )
        print("Used-in tag link violations pending: 0")
        return 0

    for path in pages:
        (
            mojibake_count,
            style_count,
            script_count,
            url_label_count,
            count_row_count,
            linked_tag_count,
        ) = clean_page(path, style_block, script_block, file_link_map)
        total_mojibake += mojibake_count
        total_style_updates += style_count
        total_script_updates += script_count
        total_url_label_updates += url_label_count
        total_count_row_updates += count_row_count
        total_linked_tag_updates += linked_tag_count
        if mojibake_count or style_count or script_count or url_label_count or count_row_count or linked_tag_count:
            print(
                f"{path.name}: mojibake replacements={mojibake_count}, "
                f"style update={style_count}, script update={script_count}, "
                f"url labels={url_label_count}, count rows={count_row_count}, linked tags={linked_tag_count}"
            )

    print(f"Pages scanned: {len(pages)}")
    print(f"File link targets loaded: {len(file_link_map)}")
    print(f"Mojibake replacements applied: {total_mojibake}")
    print(f"Style updates applied: {total_style_updates}")
    print(f"Script updates applied: {total_script_updates}")
    print(f"URL label updates applied: {total_url_label_updates}")
    print(f"Count row updates applied: {total_count_row_updates}")
    print(f"File tag links applied: {total_linked_tag_updates}")
    print(f"Known mojibake sequences remaining: {audit_remaining_known_mojibake()}")
    used_file_tag_violations = audit_used_file_tag_links()
    if used_file_tag_violations:
        raise RuntimeError(
            "Used-in tag link audit failed:\n" + "\n".join(used_file_tag_violations[:50])
        )
    print("Used-in tag link violations remaining: 0")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
