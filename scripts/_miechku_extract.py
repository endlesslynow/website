"""Extract the canonical {id: ukrainian} map from the scaffold pass.

Writes:
  _miechku_uk.jsonl   one {"id":N,"uk":"...","h":"# "|"## "|""} per line
  _miechku_uk.json    {id: uk} (bare text, heading markers stripped)
The scaffold pairs are:  N. <uk>   /   N. [Translation pending for sentence N]
We take the first line of each id and strip any leading heading hashes so the
final tag pass can re-apply them to both source and translation lines.
"""
import os, re, json

HERE = os.path.dirname(os.path.abspath(__file__))
SCAFFOLD = os.path.join(HERE, "_miechku_scaffold.md")

uk = {}
heading = {}
seen = set()
line_re = re.compile(r"^(\d+)\.\s?(.*)$")
for line in open(SCAFFOLD, "r", encoding="utf-8").read().split("\n"):
    m = line_re.match(line)
    if not m:
        continue
    sid = int(m.group(1))
    if sid in seen:        # second occurrence = the (pending) english line
        continue
    seen.add(sid)
    text = m.group(2)
    if text.startswith("[Translation pending"):
        # shouldn't happen for first occurrence, but guard anyway
        continue
    hm = re.match(r"^(#{1,6})\s+(.*)$", text)
    if hm:
        heading[sid] = hm.group(1) + " "
        text = hm.group(2)
    else:
        heading[sid] = ""
    uk[sid] = text

ids = sorted(uk)
with open(os.path.join(HERE, "_miechku_uk.json"), "w", encoding="utf-8") as f:
    json.dump({str(i): uk[i] for i in ids}, f, ensure_ascii=False, indent=0)
with open(os.path.join(HERE, "_miechku_uk.jsonl"), "w", encoding="utf-8") as f:
    for i in ids:
        f.write(json.dumps({"id": i, "h": heading[i], "uk": uk[i]}, ensure_ascii=False) + "\n")

print("ids:", len(ids), "min", ids[0], "max", ids[-1])
print("headings:", sum(1 for i in ids if heading[i]))
