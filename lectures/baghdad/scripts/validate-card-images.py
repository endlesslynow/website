import hashlib
import json
import math
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "golden-age-events.js"


def load_card_images():
    script = r"""
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync(process.argv[1], 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);
const cards = [];
for (const [setName, phases] of Object.entries(ctx.window)) {
  if (!setName.startsWith('BAGHDAD_') || !Array.isArray(phases)) continue;
  for (const phase of phases) {
    for (const event of phase.events || []) {
      if (!event.image || !event.image.src) continue;
      cards.push({
        setName,
        phase: phase.title,
        date: event.date,
        title: event.title,
        highlight: !!event.highlight,
        src: event.image.src
      });
    }
  }
}
process.stdout.write(JSON.stringify(cards));
"""
    result = subprocess.run(
        ["node", "-e", script, str(DATA)],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def dhash(path, size=16):
    image = Image.open(path)
    image = ImageOps.exif_transpose(image).convert("L").resize((size + 1, size), Image.Resampling.LANCZOS)
    pixels = list(image.getdata())
    value = 0
    for y in range(size):
        row = pixels[y * (size + 1):(y + 1) * (size + 1)]
        for x in range(size):
            value = (value << 1) | int(row[x] > row[x + 1])
    return value


def ahash(path, size=16):
    image = Image.open(path)
    image = ImageOps.exif_transpose(image).convert("L").resize((size, size), Image.Resampling.LANCZOS)
    pixels = list(image.getdata())
    average = sum(pixels) / len(pixels)
    value = 0
    for pixel in pixels:
        value = (value << 1) | int(pixel > average)
    return value


def phash(path, size=32, low_size=8):
    image = Image.open(path)
    image = ImageOps.exif_transpose(image).convert("L").resize((size, size), Image.Resampling.LANCZOS)
    pixels = [float(pixel) for pixel in image.getdata()]
    rows = [pixels[row * size:(row + 1) * size] for row in range(size)]

    coefficients = []
    for u in range(low_size):
        for v in range(low_size):
            total = 0.0
            for x in range(size):
                cos_x = math.cos(((2 * x + 1) * u * math.pi) / (2 * size))
                for y in range(size):
                    total += rows[x][y] * cos_x * math.cos(((2 * y + 1) * v * math.pi) / (2 * size))
            coefficients.append(total)

    detail = coefficients[1:]
    median = sorted(detail)[len(detail) // 2]
    value = 0
    for coefficient in detail:
        value = (value << 1) | int(coefficient > median)
    return value


def hamming(left, right):
    return (left ^ right).bit_count()


cards = load_card_images()
problems = []
by_src = {}
by_sha = {}
fingerprints = []
bad_name = re.compile(r"placeholder|fallback|missing", re.I)

for card in cards:
    src = card["src"]
    image_path = ROOT / src
    label = f"{card['date']} - {card['title']}"

    if bad_name.search(src):
        problems.append(f"Disallowed placeholder/fallback image name: {src} <- {label}")

    if not image_path.exists():
        problems.append(f"Missing file: {src} <- {label}")
        continue

    by_src.setdefault(src, []).append(label)
    data = image_path.read_bytes()
    by_sha.setdefault(hashlib.sha256(data).hexdigest(), []).append((src, label))

    try:
        fingerprints.append((src, label, dhash(image_path), ahash(image_path), phash(image_path)))
    except Exception as exc:
        problems.append(f"Unreadable image: {src} <- {label}: {exc}")

for src, labels in by_src.items():
    if len(labels) > 1:
        problems.append(f"Duplicate image path: {src} <- {' / '.join(labels)}")

for digest, matches in by_sha.items():
    if len(matches) > 1:
        problems.append(
            "Byte-identical duplicate image "
            + digest
            + ": "
            + " / ".join(f"{src} ({label})" for src, label in matches)
        )

for index, left in enumerate(fingerprints):
    for right in fingerprints[index + 1:]:
        dh = hamming(left[2], right[2])
        ah = hamming(left[3], right[3])
        ph = hamming(left[4], right[4])
        if dh <= 26 or ah <= 24 or (ph <= 18 and (dh <= 70 or ah <= 70)):
            problems.append(
                f"Likely visual duplicate d={dh} a={ah} p={ph}: "
                f"{left[0]} ({left[1]}) / {right[0]} ({right[1]})"
            )

if problems:
    for problem in problems:
        print(problem, file=sys.stderr)
    print(f"Card image validation failed with {len(problems)} problem(s).", file=sys.stderr)
    sys.exit(1)

print(f"Card image validation passed for {len(cards)} rendered card images.")
