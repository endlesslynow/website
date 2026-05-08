from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from pathlib import Path

from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import (
    QApplication,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QListWidget,
    QListWidgetItem,
    QMainWindow,
    QMessageBox,
    QPushButton,
    QScrollArea,
    QTabWidget,
    QTextEdit,
    QVBoxLayout,
    QWidget,
)


SCRIPT_DIR = Path(__file__).resolve().parent
BAGHDAD_DIR = SCRIPT_DIR.parent

DETAIL_CARDS_FILE = BAGHDAD_DIR / "data" / "detail-cards.js"
EVENTS_FILE = BAGHDAD_DIR / "data" / "golden-age-events.js"

EVENT_SECTIONS = {
    "BAGHDAD_FOUNDATION_PHASES": "Foundation Events",
    "BAGHDAD_GOLDEN_AGE_PHASES": "Golden Age Events",
    "BAGHDAD_MONGOL_SIEGE_PHASES": "Mongol Siege Events",
    "BAGHDAD_STAGNATION_PHASES": "Stagnation Events",
    "BAGHDAD_OTTOMAN_PHASES": "Ottoman Events",
    "BAGHDAD_MODERN_PHASES": "Modern Events",
    "BAGHDAD_PROTEST_PHASES": "Protest Events",
}

TAB_ORDER = [
    "Foundation Events",
    "Golden Age Events",
    "Mongol Siege Events",
    "Stagnation Events",
    "Ottoman Events",
    "Modern Events",
    "Protest Events",
    # Detail Cards comes last
]


@dataclass(frozen=True)
class FieldEntry:
    label: str
    value: str       # decoded, for display
    raw_value: str   # raw bytes from file, for safety verification
    span: tuple[int, int]
    multiline: bool = False
    is_array: bool = False


@dataclass(frozen=True)
class CardEntry:
    section: str
    label: str
    file_path: Path
    fields: tuple[FieldEntry, ...]


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


def write_text(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8")


def find_matching(text: str, start: int) -> int:
    pairs = {"{": "}", "[": "]"}
    open_ch = text[start]
    close_ch = pairs.get(open_ch)
    if close_ch is None:
        return -1
    depth = 0
    in_str = False
    esc = False
    for i in range(start, len(text)):
        ch = text[i]
        if esc:
            esc = False
        elif ch == "\\" and in_str:
            esc = True
        elif ch == '"':
            in_str = not in_str
        elif not in_str:
            if ch == open_ch:
                depth += 1
            elif ch == close_ch:
                depth -= 1
                if depth == 0:
                    return i
    return -1


def decode_js_string(s: str) -> str:
    return s.replace("\\\\", "\x00").replace('\\"', '"').replace("\\n", "\n").replace("\\t", "\t").replace("\x00", "\\")


def encode_js_string(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\r", "").replace("\n", "\\n")


def serialize_array(paragraphs: list[str]) -> str:
    if not paragraphs:
        return "[]"
    item_indent = "            "
    close_indent = "        "
    lines = [f'"{encode_js_string(p)}"' for p in paragraphs]
    inner = (",\n" + item_indent).join(lines)
    return f"[\n{item_indent}{inner}\n{close_indent}]"


def scan_detail_cards() -> list[CardEntry]:
    text = read_text(DETAIL_CARDS_FILE)
    entries: list[CardEntry] = []

    for m in re.finditer(r'"([a-z][a-z0-9-]*)"\s*:\s*\{', text):
        brace = m.end() - 1
        block_end = find_matching(text, brace)
        if block_end == -1:
            continue
        block = text[brace : block_end + 1]
        off = brace

        fields: list[FieldEntry] = []

        tm = re.search(r'\btitle:\s*"((?:[^"\\]|\\.)*)"', block)
        if tm:
            fields.append(FieldEntry(
                label="Title",
                value=decode_js_string(tm.group(1)),
                raw_value=tm.group(1),
                span=(off + tm.start(1), off + tm.end(1)),
            ))

        dm = re.search(r'\bdate:\s*"((?:[^"\\]|\\.)*)"', block)
        if dm:
            fields.append(FieldEntry(
                label="Date",
                value=decode_js_string(dm.group(1)),
                raw_value=dm.group(1),
                span=(off + dm.start(1), off + dm.end(1)),
            ))

        cm = re.search(r"\bcontent:\s*\[", block)
        if cm:
            arr_start = off + cm.end() - 1
            arr_end = find_matching(text, arr_start)
            if arr_end != -1:
                array_text = text[arr_start : arr_end + 1]
                paras = [decode_js_string(p) for p in re.findall(r'"((?:[^"\\]|\\.)*)"', array_text)]
                fields.append(FieldEntry(
                    label="Content",
                    value="\n\n".join(paras),
                    raw_value=array_text,
                    span=(arr_start, arr_end + 1),
                    multiline=True,
                    is_array=True,
                ))

        if not fields:
            continue

        label = fields[0].value if fields else m.group(1)
        entries.append(CardEntry("Detail Cards", label, DETAIL_CARDS_FILE, tuple(fields)))

    return entries


def variable_ranges(text: str) -> list[tuple[str, int, int]]:
    matches = list(re.finditer(r"window\.(BAGHDAD_[A-Z_]+)\s*=", text))
    ranges: list[tuple[str, int, int]] = []
    for i, match in enumerate(matches):
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        ranges.append((match.group(1), match.start(), end))
    return ranges


def scan_event_cards() -> list[CardEntry]:
    text = read_text(EVENTS_FILE)
    entries: list[CardEntry] = []

    for variable, var_start, var_end in variable_ranges(text):
        section = EVENT_SECTIONS.get(variable)
        if not section:
            continue

        for am in re.finditer(r'"events"\s*:\s*\[', text[var_start:var_end]):
            arr_start = var_start + am.end() - 1
            arr_end = find_matching(text, arr_start)
            if arr_end == -1:
                continue

            i = arr_start + 1
            while i < arr_end:
                if text[i] == "{":
                    obj_end = find_matching(text, i)
                    if obj_end == -1 or obj_end > arr_end:
                        i += 1
                        continue

                    block = text[i : obj_end + 1]
                    off = i

                    tm = re.search(r'"title"\s*:\s*"((?:[^"\\]|\\.)*)"', block)
                    dm = re.search(r'"date"\s*:\s*"((?:[^"\\]|\\.)*)"', block)
                    desc_m = re.search(r'"description"\s*:\s*"((?:[^"\\]|\\.)*)"', block)

                    fields: list[FieldEntry] = []

                    if tm:
                        fields.append(FieldEntry(
                            label="Title",
                            value=decode_js_string(tm.group(1)),
                            raw_value=tm.group(1),
                            span=(off + tm.start(1), off + tm.end(1)),
                        ))

                    if desc_m:
                        fields.append(FieldEntry(
                            label="Description",
                            value=decode_js_string(desc_m.group(1)),
                            raw_value=desc_m.group(1),
                            span=(off + desc_m.start(1), off + desc_m.end(1)),
                            multiline=True,
                        ))

                    if fields:
                        date_str = decode_js_string(dm.group(1)) if dm else ""
                        title_str = fields[0].value
                        label = f"{date_str} — {title_str}" if date_str else title_str
                        entries.append(CardEntry(section, label, EVENTS_FILE, tuple(fields)))

                    i = obj_end + 1
                else:
                    i += 1

    return entries


def scan_all_entries() -> list[CardEntry]:
    return [*scan_detail_cards(), *scan_event_cards()]


def apply_changes(file_path: Path, changes: list[tuple[tuple[int, int], str, str]]) -> None:
    text = read_text(file_path)
    for (start, end), expected_raw, new_value in sorted(changes, key=lambda x: x[0][0], reverse=True):
        found = text[start:end]
        if found != expected_raw:
            raise ValueError(
                f"File changed since last scan — cannot safely update.\n\n"
                f"Expected: {expected_raw!r}\nFound at position: {found!r}\n\n"
                f"Click 'Refresh List' and try again."
            )
        text = text[:start] + new_value + text[end:]
    write_text(file_path, text)


class TextChanger(QMainWindow):
    def __init__(self) -> None:
        super().__init__()
        self.setWindowTitle("Baghdad Website Text Changer")
        self.resize(1200, 700)
        self.entries: list[CardEntry] = []
        self.lists: dict[str, QListWidget] = {}
        self._field_editors: list[tuple[FieldEntry, QWidget]] = []

        self.tabs = QTabWidget()
        self.tabs.currentChanged.connect(self._on_tab_changed)

        self.card_title_label = QLabel("Select a card")
        font = self.card_title_label.font()
        font.setBold(True)
        font.setPointSize(font.pointSize() + 1)
        self.card_title_label.setFont(font)
        self.card_title_label.setWordWrap(True)

        self.fields_container = QWidget()
        self.fields_layout = QVBoxLayout(self.fields_container)
        self.fields_layout.setContentsMargins(0, 0, 4, 0)
        self.fields_layout.setSpacing(6)

        scroll = QScrollArea()
        scroll.setWidget(self.fields_container)
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(scroll.Shape.NoFrame)

        self.save_button = QPushButton("Save Changes")
        self.save_button.clicked.connect(self.save_changes)
        self.refresh_button = QPushButton("Refresh List")
        self.refresh_button.clicked.connect(self.reload)
        self.status_label = QLabel("")
        self.status_label.setWordWrap(True)
        self.status_label.setStyleSheet("color: #555;")

        right_layout = QVBoxLayout()
        right_layout.setContentsMargins(8, 4, 4, 4)
        right_layout.addWidget(self.card_title_label)
        right_layout.addWidget(scroll, 1)
        right_layout.addWidget(self.save_button)
        right_layout.addWidget(self.refresh_button)
        right_layout.addWidget(self.status_label)

        right_widget = QWidget()
        right_widget.setLayout(right_layout)

        root_layout = QHBoxLayout()
        root_layout.addWidget(self.tabs, 1)
        root_layout.addWidget(right_widget, 2)

        root = QWidget()
        root.setLayout(root_layout)
        self.setCentralWidget(root)

        self.reload()

    def selected_entry(self) -> CardEntry | None:
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
        grouped: dict[str, list[tuple[int, CardEntry]]] = {}
        for i, entry in enumerate(self.entries):
            grouped.setdefault(entry.section, []).append((i, entry))

        ordered = sorted(grouped.items(), key=lambda x: TAB_ORDER.index(x[0]) if x[0] in TAB_ORDER else len(TAB_ORDER))
        for section, items in ordered:
            lw = QListWidget()
            lw.currentItemChanged.connect(self.update_editor)
            for index, entry in items:
                item = QListWidgetItem(entry.label)
                item.setData(Qt.ItemDataRole.UserRole, index)
                lw.addItem(item)
            self.tabs.addTab(lw, section)
            self.lists[section] = lw

        if self.tabs.count():
            first = self.tabs.widget(0)
            if isinstance(first, QListWidget) and first.count():
                first.setCurrentRow(0)

        self.status_label.setText(f"Found {len(self.entries)} cards.")

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

    def _on_tab_changed(self, _index: int) -> None:
        self.update_editor()

    def _clear_fields(self) -> None:
        while self.fields_layout.count():
            item = self.fields_layout.takeAt(0)
            w = item.widget()
            if w:
                w.deleteLater()
        self._field_editors.clear()

    def update_editor(self, *_args: object) -> None:
        self._clear_fields()
        entry = self.selected_entry()

        if entry is None:
            self.card_title_label.setText("Select a card")
            return

        self.card_title_label.setText(entry.label)

        for f in entry.fields:
            self.fields_layout.addWidget(QLabel(f"{f.label}:"))

            if f.multiline:
                editor: QWidget = QTextEdit()
                editor.setPlainText(f.value)
                editor.setMinimumHeight(300 if f.is_array else 120)
            else:
                editor = QLineEdit()
                editor.setText(f.value)

            self.fields_layout.addWidget(editor)
            self._field_editors.append((f, editor))

        self.fields_layout.addStretch(1)

    def save_changes(self) -> None:
        entry = self.selected_entry()
        if entry is None:
            QMessageBox.information(self, "No card selected", "Select a card first.")
            return

        changes: list[tuple[tuple[int, int], str]] = []
        for f, editor in self._field_editors:
            new_value = editor.toPlainText() if isinstance(editor, QTextEdit) else editor.text()

            if new_value == f.value:
                continue

            if f.is_array:
                paras = [p.strip() for p in new_value.split("\n\n") if p.strip()]
                serialized = serialize_array(paras)
            else:
                serialized = encode_js_string(new_value)

            changes.append((f.span, f.raw_value, serialized))

        if not changes:
            self.status_label.setText("No changes to save.")
            return

        try:
            apply_changes(entry.file_path, changes)
        except Exception as exc:
            QMessageBox.critical(self, "Could not save changes", str(exc))
            return

        saved = self._save_position()
        self.status_label.setText(f"Saved {len(changes)} field(s) for: {entry.label}")
        self.reload()
        self._restore_position(*saved)


def main() -> int:
    app = QApplication(sys.argv)
    window = TextChanger()
    window.show()
    return app.exec()


if __name__ == "__main__":
    raise SystemExit(main())
