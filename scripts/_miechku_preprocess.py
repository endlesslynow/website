"""One-off: clean the raw Ukrainian source into a blank-line-separated intermediate.

Each non-empty source line is one paragraph (tab-indented, single-newline
separated). We strip the leading whitespace, drop the leading copyright
disclaimer, prepend a title heading, and emit every paragraph as its own
blank-line-separated block so scripts/translate_and_tag.py renders one
paragraph per block (like siya_evine.md / gilgamesh.md).
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, "books", "mds", "Спитайте Мієчку.md")
OUT = os.path.join(HERE, "_miechku_clean.md")

# Leading disclaimer lines to drop (not part of the novel).
DROP_PREFIXES = (
    "Текст не можна копіювати",   # "Текст не можна копіювати"
    "Поважаймо авторське право",  # "Поважаймо авторське право"
)

raw = open(SRC, "r", encoding="utf-8").read().replace("\r\n", "\n").replace("\r", "\n")

paras = []
for line in raw.split("\n"):
    s = line.strip()
    if not s:
        continue
    if any(s.startswith(p) for p in DROP_PREFIXES):
        continue
    paras.append(s)

title = "# Спитайте Мієчку"  # "# Спитайте Мієчку"
blocks = [title] + paras

with open(OUT, "w", encoding="utf-8") as f:
    f.write("\n\n".join(blocks) + "\n")

print("paragraphs (incl. title):", len(blocks))
print("wrote", OUT)
