# Rules for adding Qewl û Beytên Êzdîyan to the Library

This file is the working plan. Follow it exactly every session. Do not improvise beyond it.

## Source and output

1. Source text is the OCR file at `C:\Users\Zachar\Zotero\storage\XHJRGX9F\Qewl û Beytên Êzdiyan_20260720.txt`.
2. Output is `books/mds/qewl_u_beyten_ezdiyan.md`. New content is always appended to the end of this file. Never rewrite finished sections.
3. The book is registered in `books/reader.html` under the key `qewl_u_beyten_ezdiyan` with source language `ku`, and listed in `books/index.html`.

## Workflow

1. Work in chunks of five book pages at a time. Pages are identified by the page number lines in the source txt (a line containing only a number, such as `9`). The unnumbered front matter before page 9 counts as the first chunk on its own.
2. Never do more than one chunk in a single working session unless the user explicitly asks for more.
3. After finishing a chunk, save the md file, then update the Progress section at the bottom of this file with the page the book file now ends at.
4. If a session crashes, resume from the page recorded in the Progress section. The md file always ends at a clean chunk boundary.

## Format of the md file

1. The format copies `siya_evine.md`. Every unit is a pair of lines with the same number. The first line is the Kurmanji original. The second line is the English translation. A blank line separates each pair from the next.
2. Numbering runs continuously through the whole book and never restarts.
3. Headings keep their markdown marks inside the numbered line. The book title uses `#`. Each qewl or beyt title, and each named section, uses `##`. Both lines of a heading pair carry the same mark.
4. Verse is numbered by verse line, one number per line of the poem. Prose is numbered by sentence.
5. Page number lines from the source are dropped, since the reader skips them anyway and the md numbering replaces them.

## Translation style

The purpose is language learning. The reader should be able to map the Kurmanji line onto the English line word by word as far as possible.

1. One to one mapping. Every numbered Kurmanji line gets exactly one English line. Never merge two source sentences into one English sentence and never split one source sentence across two numbers.
2. Literal leaning. Follow the Kurmanji structure as closely as English grammar allows. Awkward but faithful beats elegant but loose.
3. Idioms are translated by meaning. When the literal wording differs a lot from the rendered meaning, add the literal meaning in parentheses at the end of the English line, marked with the word literally.
4. Consistent vocabulary. The same Kurmanji word or refrain gets the same English rendering every time it appears. Refrains that repeat across stanzas must be rendered identically each time.
5. Religious and cultural terms stay recognizable. Names such as Tawûsî Melek, Siltan Êzîd and Şêşims stay as names. The genre words qewl and beyt stay as qewl and beyt. Xwedê becomes God.
6. Do not smooth over ambiguity. Where a line is genuinely ambiguous, translate faithfully rather than prettily.

## OCR handling

1. The OCR is nearly perfect but not perfect. While translating, silently fix clearly mechanical artifacts. These are stray characters from other scripts, wrong letters that make a non word out of an obvious real word, digits inside words, and lines broken in the middle of a verse.
2. Never second guess unusual but plausible spellings. Qewls are full of dialect and archaic forms that look wrong but are the printed text. When unsure whether something is an error or a dialect form, leave it exactly as written.
3. No external checking, no re passes, no proofreading project beyond the fixes made while reading each line once.
4. Some front matter passages appear twice in the OCR with different quality. When a passage is duplicated, use the cleaner copy and drop the other.

## What is included and excluded

1. Included. The book title, the back cover description with its two verse quotations, both author biographies, and then the entire body of the book from the Pêşgotin onward.
2. The two biographies each get a `##` heading with the author's name, for navigation.
3. Excluded. The ISBN and print shop block, the publisher addresses and contact block, the copyright line, garbled duplicate copies of passages, and the table of contents (NAVEROK), since its page numbers are meaningless in the reader.

## Style rules for all writing in this project

1. No dashes of any kind in translations, notes, or this file. No em dashes, no hyphens as punctuation. Hyphens inside quoted source text and inside proper names as printed stay untouched.
2. No colons or semicolons in English prose. Restructure into separate sentences. Colons printed in the source text stay in the Kurmanji line.
3. No emojis anywhere.

## Progress

The md file currently ends at the end of the front matter (title, back cover text, both biographies). The next chunk starts at page 9, the Pêşgotin, and covers pages 9 through 13.
