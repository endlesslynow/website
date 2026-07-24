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

## کتاب فارسی

- Key: `farsi_book`
- Source text: `C:\Users\Zachar\Documents\Hatra\obsdian_vaults\Zachar\3 - Language Learning\Farsi Book.md`
- Output: `books/mds/farsi_book.md`
- Registered in `reader.html` with `SRC_LANG` = `fa` and `BOOK_TITLE` = `کتاب فارسی`, and listed in `index.html`.
- Structure. A graded reader of 12 numbered passages. Each passage is one reader paragraph, so the paragraph numbers on the left run 1 through 12. Inside each passage the sentences are numbered continuously across the whole book, Farsi paired with its English gloss, so each sentence is tappable on its own. The passages are separated by a double blank line in the markdown.
- OCR quirk. In the source Translations section, passages 2 through 6 appear twice. The first copy was used and the duplicate dropped. The Farsi for passages 1 through 6 is one sentence per line in the source; passages 7 through 12 are wrapped prose and were split by sentence.
- The English is the literal learning gloss carried over from the source, including its parenthetical literal notes such as (thermometer) and (take off).

### Progress

Complete. All 12 passages, 130 sentence pairs, are in the markdown file. This is the whole source, so there is nothing left to append.

## Hînker 2

- Key: `hinker_2`
- Source text: `C:\Users\Zachar\Zotero\storage\NDE2SLEB\.zotero-ft-cache` (full text cache of Hînker, Asta Duyemîn by Ronayî Onen and Samî Tan)
- Output: `books/mds/hinker_2.md`
- Registered in `reader.html` with `SRC_LANG` = `ku` and `BOOK_TITLE` = `Hînker 2`, and listed in `index.html`.
- Scope agreed with the user. Not the whole coursebook, only the reading texts from page 64 to the end of Unit 8 that are full texts longer than five sentences. Excluded by agreement were the multiple choice quizzes (Kî dizane), the fill in the blank and conjugation exercises (Dendikê alûyê, Xelata Nobelê), the short passive voice opinion snippets (Pêşeroja ragihandinê), and all comprehension, true false, matching and grammar table material. Three dialogue texts (Bajar interview p78, Ravekirina cih p82, Çapemeniya kurdî p97) and the untitled p93 newspaper text were offered but the user chose not to include them.
- The 19 texts, in order, with their source page: Vegera li welêt (64), Bûyereke ji dîrokê (66), Feqiyê Teyran (67), Rovî û qijîk (68), Ehmedê Xanî (71), Cîranên Amedê (77), Gera Perwînê li Stenbolê (80), Qada Îstasyona Trênê (81), Avahiya me (83), Odeya Hêlînê (84), Bajarê me (86), Wendy qala welatê xwe dike (87), Deriyên Sûrên Amedê (88), Ragihandin (90), Çîroka ragihandinê (92), Kompîtur û înternet (94), Radyo (98), Televîzyon (99), Cizîr dê bi şahiyên çandî rabe ser piyan (101).
- Structure. Grouped by the three units (ROJÊN BERÊ, CIH Û WAR, RAGIHANDIN), each unit and each text carries a `##` heading pair, and prose is numbered by sentence with continuous numbering. The two poem stanzas and the quatrain in the Feqiyê Teyran and Ehmedê Xanî texts are kept whole as single verse units.
- Fixed term choices. Regional place names stay Kurmanji as printed (Amed, Mêrdîn, Heskîf, Midyad, Bazîd, Agirî, Helebçe, Cizîr, and the descriptive gate names). Well known exonyms are used for countries, continents and world cities (Istanbul, London, Amsterdam, The Hague, Germany, Belgium, Europe, Britain). Genre and cultural words stay as themselves (dengbêj, qasid). Tengav is rendered as the Bosphorus. Koça dawîn is rendered as the final migration.

### Progress

Complete. All 19 texts, 283 sentence pairs across 307 numbered pairs including headings, are in the markdown file. This is the full agreed scope, so there is nothing left to append.

## سلطان

- Key: `the_sultan`
- Source text: `C:\Users\Zachar\Documents\Hatra\obsdian_vaults\Zachar\3 - Language Learning\Texts\Farsi Stories\The Sultan` (a folder of six files, Chap 1 through Chap 6)
- Output: `books/mds/the_sultan.md`
- Registered in `reader.html` with `SRC_LANG` = `fa` and `BOOK_TITLE` = `سلطان`, and listed in `index.html` in the فارسی section. `SRC_LANG` stays `fa` on purpose. Google Translate has no separate Dari engine, so `fa` is what the tap to translate word lookup must use. This only affects lookup, not the text.
- Language. Spoken Kabuli Dari. The monolingual source is Iranian Persian. It was first paired sentence by sentence with an English learning gloss, then the Persian side of every pair was converted to spoken Kabuli Dari (the English gloss is unchanged, since it carries the meaning). The user's goal is speaking Dari rather than literary Farsi.
- Structure. A graded reader mystery in very short sentences, set in Ottoman Istanbul. The six untitled source chapters were given `##` headings فصل ۱ through فصل ۶ for navigation, and پایان closes the book as a final heading. The book title uses `#`. Numbering is continuous across the whole book.
- Dari conversion. Done by a reversible token table in `transform_dari.py` (kept beside the source), applied with word boundaries so substrings like چهار, چرا, راست, دوست are never touched. Vocabulary: بزرگ becomes کلان, کوچک becomes خورد, خیابان becomes سرک, مغازه becomes دکان, خیلی becomes بسیار, الان and حالا become حالی, بچه becomes طفل, نگاه کردن and تماشا کردن become سیل کردن, حرف زدن becomes گپ زدن, اطلاعات becomes معلومات, نیاز becomes ضرورت. Verbs: دانستن becomes فامیدن (می‌داند to می‌فامه), توانستن becomes تانستن (می‌تواند to می‌تانه), نشستن to می‌شینه. Morphology: copula است to اس, نیست to نیس, هستند to استن; present 3sg ـد to ـه (می‌کند to می‌کنه, می‌رود to می‌ره); present 3pl ـند to ـن (می‌کنند to می‌کنن); خواستن to خای forms (می‌خواهد to می‌خایه); the object marker را to ره; the imperative کن to کو; چه to چی; literary futures such as خواهد فهمید rewritten to present می‌فامه. Past tense is left as printed since Dari past matches (only 3rd plural ـند to ـن, for example بودند to بودن). A native speaker should still spot check fine points, since a few colloquial choices (سیل کردن, the ـه ending) are Kabuli register calls rather than the only correct forms.
- Fixed term choices. Personal names stay as themselves: Elif (الیف), Baba (بابا, the father's nickname, kept as Baba), Yusuf (یوسف), Kara Yusuf (کارا یوسف), Hasan, Mohammad, Karim. وزیر ابراهیم پاشا is Vizier Ibrahim Pasha. ینی‌چری is Janissary. طلا is gold, مُهر is seal, نشانه is sign, قبرستان is cemetery, سرباز is soldier, هوا is the air. قوی is rendered strong and قدرتمند is rendered powerful to keep them distinct. غمگین is rendered sad and ناراحت is rendered upset to keep them distinct.
- Orthography. Chapter 1 in the source is written without ZWNJ and uses straight quotation marks. Chapters 2 through 6 use ZWNJ and guillemets. The base pairing kept each chapter's quote style as printed, and the Dari conversion writes all converted verb forms with ZWNJ, so the verbs read consistently across chapters. Only mechanical spacing artifacts around punctuation, such as a space before a full stop or a missing space after a quote, were silently normalized.
- Quirks. The two scene breaks printed as three dash lines in chapter 5 were rendered as ordinary paragraph breaks, since the reader would otherwise treat a bare three dash line as a metadata divider and drop everything above it. The em dash of interrupted speech in بابای من— is kept in the Farsi line and rendered as an ellipsis in the English line to respect the no dash rule.

### Progress

Complete. All six chapters, 1023 sentence pairs across 1031 numbered pairs including the title and eight headings, are in the markdown file. This is the whole story, so there is nothing left to append.




