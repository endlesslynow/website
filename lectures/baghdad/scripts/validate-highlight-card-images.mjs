import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'data', 'golden-age-events.js');
const code = fs.readFileSync(dataPath, 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(code, context, { filename: dataPath });

const cards = [];
for (const [setName, phases] of Object.entries(context.window)) {
    if (!setName.startsWith('BAGHDAD_') || !Array.isArray(phases)) continue;

    for (const phase of phases) {
        for (const event of phase.events || []) {
            if (!event.highlight) continue;
            cards.push({
                setName,
                phase: phase.title,
                date: event.date,
                title: event.title,
                src: event.image && event.image.src
            });
        }
    }
}

const problems = [];
const bySrc = new Map();
const byHash = new Map();
const disallowedName = /placeholder|fallback|missing/i;

for (const card of cards) {
    if (!card.src) {
        problems.push(`Missing image.src: ${card.date} - ${card.title}`);
        continue;
    }

    if (disallowedName.test(card.src)) {
        problems.push(`Disallowed placeholder/fallback image name: ${card.src} <- ${card.date} - ${card.title}`);
    }

    const imagePath = path.join(root, card.src);
    if (!fs.existsSync(imagePath)) {
        problems.push(`Missing file: ${card.src} <- ${card.date} - ${card.title}`);
        continue;
    }

    if (!bySrc.has(card.src)) bySrc.set(card.src, []);
    bySrc.get(card.src).push(card);

    const hash = crypto.createHash('sha256').update(fs.readFileSync(imagePath)).digest('hex');
    if (!byHash.has(hash)) byHash.set(hash, []);
    byHash.get(hash).push(card);
}

for (const [src, matches] of bySrc.entries()) {
    if (matches.length <= 1) continue;
    problems.push(`Duplicate image path: ${src} <- ${matches.map(card => `${card.date} - ${card.title}`).join(' / ')}`);
}

for (const [hash, matches] of byHash.entries()) {
    if (matches.length <= 1) continue;
    problems.push(`Byte-identical duplicate image ${hash}: ${matches.map(card => `${card.src} (${card.date} - ${card.title})`).join(' / ')}`);
}

if (problems.length) {
    for (const problem of problems) console.error(problem);
    console.error(`Highlighted card image validation failed with ${problems.length} problem(s).`);
    process.exit(1);
}

console.log(`Highlighted card image validation passed for ${cards.length} cards.`);
