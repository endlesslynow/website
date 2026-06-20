"""Merge all scripts/tr/*.tsv (lines: id<TAB>english) into translations.json,
validating that every scaffold id is present exactly once and none are extra.
"""
import os, glob, json

HERE = os.path.dirname(os.path.abspath(__file__))
uk = json.load(open(os.path.join(HERE, "_miechku_uk.json"), encoding="utf-8"))
expected = set(int(k) for k in uk)

tr = {}
dups = []
for path in sorted(glob.glob(os.path.join(HERE, "tr", "*.tsv"))):
    for ln, line in enumerate(open(path, encoding="utf-8").read().split("\n"), 1):
        if not line.strip():
            continue
        if "\t" not in line:
            raise SystemExit(f"{os.path.basename(path)}:{ln} has no TAB: {line[:60]!r}")
        sid, eng = line.split("\t", 1)
        sid = int(sid.strip())
        eng = eng.strip()
        if sid in tr:
            dups.append(sid)
        tr[sid] = eng

have = set(tr)
missing = sorted(expected - have)
extra = sorted(have - expected)
empty = sorted(i for i in have if not tr[i])

print(f"collected {len(tr)} / {len(expected)} translations")
if dups:
    print(f"WARNING duplicates ({len(dups)}):", dups[:20])
if extra:
    print(f"WARNING extra ids ({len(extra)}):", extra[:20])
if empty:
    print(f"WARNING empty translations ({len(empty)}):", empty[:20])
if missing:
    print(f"MISSING {len(missing)} ids. first 40:", missing[:40])
else:
    print("ALL IDS PRESENT.")

out = os.path.join(HERE, "translations.json")
json.dump({str(i): tr[i] for i in sorted(tr)}, open(out, "w", encoding="utf-8"),
          ensure_ascii=False, indent=0)
print("wrote", out)
