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
    "BAGHDAD_FOUNDATION_PHASES": "Foundation Cards",
    "BAGHDAD_GOLDEN_AGE_PHASES": "Golden Age Cards",
    "BAGHDAD_MONGOL_SIEGE_PHASES": "Mongol Siege Cards",
    "BAGHDAD_STAGNATION_PHASES": "Stagnation Cards",
    "BAGHDAD_OTTOMAN_PHASES": "Ottoman Cards",
    "BAGHDAD_MODERN_PHASES": "Modern Cards",
    "BAGHDAD_PROTEST_PHASES": "Protest Cards",
}


@dataclass(frozen=True)
class PictureEntry:
    section: str
    label: str
    src: str
    file_path: Path
    span: tuple[int, int] | None = None
    insert_at: int | None = None
    quote: str = '"'

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

        for image_match in re.finditer(r"<img\s+[^>]*src=(['\"])(.*?)\1[^>]*>", section_text, flags=re.S | re.I):
            src = image_match.group(2)
            if not src.startswith("images/detail-cards/"):
                continue
            after = section_text[image_match.end() :]
            title_match = re.search(
                r'<div\s+class=(["\'])detail-card-title\1[^>]*>(.*?)</div>',
                after,
                flags=re.S | re.I,
            )
            label = clean_label(title_match.group(2)) if title_match else Path(src).name
            start = section_match.start() + image_match.start(2)
            end = section_match.start() + image_match.end(2)
            entries.append(PictureEntry(heading, label, src, HTML_FILE, (start, end), quote=image_match.group(1)))
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
            entries.append(PictureEntry(section, label, src, EVENTS_FILE, (absolute_start, absolute_end)))
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
    object_pattern = re.compile(r"\{[^{}]*name:\s*(['\"])(.*?)\1[^{}]*\}", re.S)
    portrait_pattern = re.compile(r"portrait:\s*(['\"])(.*?)\1")
    years_pattern = re.compile(r"years:\s*(['\"])(.*?)\1")
    for match in object_pattern.finditer(block):
        item = match.group(0)
        name = clean_label(match.group(2))
        years_match = years_pattern.search(item)
        years = clean_label(years_match.group(2)) if years_match else ""
        label = f"{name} ({years})" if years else name
        portrait_match = portrait_pattern.search(item)
        if portrait_match:
            src = portrait_match.group(2)
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


def replace_entry(entry: PictureEntry, new_src: str) -> None:
    text = read_text(entry.file_path)
    if entry.span:
        start, end = entry.span
        text = text[:start] + new_src + text[end:]
    elif entry.insert_at is not None:
        text = text[: entry.insert_at] + f", portrait: {entry.quote}{new_src}{entry.quote}" + text[entry.insert_at :]
    else:
        raise ValueError("This image entry cannot be changed.")
    write_text(entry.file_path, text)


class PictureChanger(QMainWindow):
    def __init__(self) -> None:
        super().__init__()
        self.setWindowTitle("Baghdad Website Picture Changer")
        self.resize(980, 640)
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

        right_layout = QVBoxLayout()
        right_layout.addWidget(self.preview)
        right_layout.addWidget(self.title_label)
        right_layout.addWidget(self.path_label)
        right_layout.addWidget(self.choose_button)
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

        for section, items in grouped.items():
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
            return

        self.title_label.setText(entry.label)
        self.path_label.setText(f"{entry.src}\n{entry.file_path.relative_to(BAGHDAD_DIR)}")
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

        self.status_label.setText(f"Changed: {entry.label}\nNew path: {new_src}")
        self.reload()


def main() -> int:
    app = QApplication(sys.argv)
    window = PictureChanger()
    window.show()
    return app.exec()


if __name__ == "__main__":
    raise SystemExit(main())
