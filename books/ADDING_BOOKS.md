# How to add a book to the Library

This file is the standard procedure for adding any book, in any language, to the reader Library. Follow it exactly every session. Do not improvise beyond it. The general rules come first and apply to every book. The per book register at the bottom holds the source, settings, and translation progress for each specific book. When you start work, read the general rules, then find the book's entry in the register.

## What a book is made of

Every book in the Library is one bilingual markdown file plus three small registrations. The markdown lives at `books/mds/<key>.md`. The `<key>` is a short lowercase ASCII name with underscores, for example `siya_evine`. The reader builds the page directly from the markdown, so the markdown is the whole book.

## Registering a new book

A book is registered with three edits. Do all three the first time you create the book, before translating any body text.

1. Create the file `books/mds/<key>.md`. Pick the `<key>` and keep it identical across all three edits.
2. In `books/reader.html`, near the top of the script, there is a chain of `else if (bookKey === "...")` branches. Add one for the new book. It sets three values. `BOOK_MD_URL` is `/books/mds/<key>.md`. `SRC_LANG` is the Google Translate source language code for the original language, for example `ku` for Kurmanji, `fr` for French, `uk` for Ukrainian. `BOOK_TITLE` is the title as it should show in the reader bar, in the original language and script.
3. In `books/index.html`, add a `.book-item` block. It holds the title in a `.book-title` div and a Read link pointing to `/books/reader.html?book=<key>`.

The reader handles numbering, headings, and page numbers on its own. It auto numbers paragraphs, treats a short all caps line or a line marked with `#` as a heading with no number, and drops any standalone line that is only a page number. It also strips a metadata block ending in a line of three dashes if one is present at the top, so never place a bare three dash line in the body of the markdown.

## Workflow for translating the body

1. Work in chunks of five book pages at a time. Pages are identified by the page number lines in the source text, meaning a line containing only a number such as `9`. Any unnumbered front matter before the first numbered page counts as the first chunk on its own.
2. Never do more than one chunk in a single working session unless the user explicitly asks for more.
3. New content is always appended to the end of the markdown file. Never rewrite a finished section.
4. After finishing a chunk, save the markdown file, then update that book's Progress line in the per book register with the page the file now ends at.
5. If a session crashes, resume from the page recorded in Progress. The markdown file always ends at a clean chunk boundary.

## Format of the markdown file

1. The format copies `books/mds/siya_evine.md`. Every unit is a pair of lines carrying the same number. The first line is the original language. The second line is the English translation. A blank line separates each pair from the next.
2. Numbering runs continuously through the whole book and never restarts.
3. Headings keep their markdown marks inside the numbered line. The book title uses `#`. Each section, chapter, poem, or named part uses `##`. Both lines of a heading pair carry the same mark and the same number.
4. Verse is numbered by verse line, one number per line of the poem. Prose is numbered by sentence.
5. Do not add page number lines. The reader drops them and the continuous numbering replaces them.

## Translation style

The purpose is language learning. The reader should be able to map the original line onto the English line word by word as far as possible.

1. One to one mapping. Every numbered original line gets exactly one English line. Never merge two source sentences into one English sentence and never split one source sentence across two numbers.
2. Literal leaning. Follow the original structure as closely as English grammar allows. Awkward but faithful beats elegant but loose.
3. Idioms are translated by meaning. When the literal wording differs a lot from the rendered meaning, add the literal meaning in parentheses at the end of the English line, introduced with the word literally.
4. Consistent vocabulary. The same original word or refrain gets the same English rendering every time it appears. Refrains that repeat across stanzas must be rendered identically each time.
5. Names and cultural terms stay recognizable. Personal names, place names, and genre words stay as themselves rather than being translated away. Words for God are rendered as God. Any book with its own fixed term choices records them in its register entry.
6. Do not smooth over ambiguity. Where a line is genuinely ambiguous, translate faithfully rather than prettily.

## OCR and source handling

1. The source is usually OCR text and is nearly perfect but not perfect. While translating, silently fix clearly mechanical artifacts. These are stray characters from other scripts, wrong letters that make a non word out of an obvious real word, digits sitting inside words, and lines broken in the middle of a verse.
2. Never second guess unusual but plausible spellings. Older and dialect texts are full of forms that look wrong but are the printed text. When unsure whether something is an error or a real form, leave it exactly as written.
3. No external checking, no re passes, no proofreading project beyond the fixes made while reading each line once.
4. Some passages appear twice in an OCR at different quality. When a passage is duplicated, use the cleaner copy and drop the other.

## What is included and excluded

1. Included. The title, any back cover or jacket description including verse quotations, author or translator biographies, and then the entire body of the book from the first real section onward.
2. Biographies each get a `##` heading with the person's name, for navigation.
3. Excluded. The ISBN and print shop block, publisher addresses and contact blocks, the copyright line, garbled duplicate copies of passages, and the table of contents, since its page numbers are meaningless in the reader.

## Style rules for all writing in this project

1. No dashes of any kind in translations, notes, or this file. No em dashes, no hyphens used as punctuation. Hyphens inside quoted source text and inside proper names as printed stay untouched.
2. Punctuation parity between the two lines. The English translation line replicates the punctuation of the original line, including colons and semicolons. Where the original has a colon or a semicolon, put the same mark at the matching place in the English line. Never strip a colon or semicolon from the English merely because it is a colon or semicolon.
3. No emojis anywhere.

---

# Per book register

One entry per book. Each entry holds the source file, the settings used at registration, any fixed term choices, book specific quirks, and a Progress line that always records where the markdown file currently stops.

## Qewl û Beytên Êzdîyan

- Key: `qewl_u_beyten_ezdiyan`
- Source text: `C:\Users\Zachar\Zotero\storage\XHJRGX9F\Qewl û Beytên Êzdiyan_20260720.txt`
- Output: `books/mds/qewl_u_beyten_ezdiyan.md`
- Registered in `reader.html` with `SRC_LANG` = `ku` and `BOOK_TITLE` = `Qewl û Beytên Êzdîyan`, and listed in `index.html`.
- Fixed term choices. The names Tawûsî Melek, Siltan Êzîd, and Şêşims stay as names. The genre words qewl and beyt stay as qewl and beyt. Xwedê becomes God.
- OCR quirk. The author biographies appear twice in the OCR. The second copy is cleaner, the first copy of the Celîlê Celîl bio is truncated mid sentence. The cleaner copies were used.
- Excluded from this book as agreed. The ISBN and print shop block, the publisher addresses and contact block, and the table of contents (NAVEROK).

### Progress

The markdown file currently ends at numbered pair 371, at the bottom of page 26, ending at Stanza 8 of Beyta Behza-I. Everything up to that point is complete, meaning the title, back cover, biographies, the Pêşgotin (which closes with the authors' signature on page 23), the Du Gotin second foreword on page 24, and then the first main text Beyta Behza-I, whose heading and Stanzas 1 through 3 are on page 25 (the heading is pair 332) and Stanzas 4 through 8 on page 26. The next chunk resumes at page 27 with Stanza 9 of Beyta Behza-I.




