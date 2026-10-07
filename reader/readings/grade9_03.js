/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 3, book pages 13-15, PDF pages 20-22 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «the book's signs after holy names» is written «(ص), (ج), رضی‌الله‌عنها»; «دیدکه» is written «دید که».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-03',
  group: 'Dari · grade 9',
  label: 'Lesson 3',
  name: "khul-qi nay-ko",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_03.jpg',
    alt: "A smiling boy in a white shirt and trousers sits barefoot in front of a tall stack of folded striped rugs."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_03.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "khulq":                                                  { fa: "خلق", mean: "character, nature (khulq; khalq, with a, means people)" },
    "khul-qi nay-ko":                                         { fa: "خلق نیکو", mean: "good character" },
    "nay-ko":                                                 { fa: "نیکو", mean: "good, fine" },
    "in-saan":                                                { fa: "انسان", mean: "a person, a human being" },
    "in-saa-ni mu-sul-maan":                                  { fa: "انسان مسلمان", mean: "a Muslim person" },
    "khoob":                                                  { fa: "خوب", mean: "good" },
    "wa":                                                     { fa: "و", mean: "and" },
    "mu-sul-maan":                                            { fa: "مسلمان", mean: "Muslim" },
    "baa-yad":                                                { fa: "باید", mean: "must, should" },
    "baa":                                                    { fa: "با", mean: "with" },
    "aash-naa baa-shad":                                      { fa: "آشنا باشد", mean: "should be familiar (with baa, with)" },
    "akh-laaq":                                               { fa: "اخلاق", mean: "character, manners, morals" },
    "akh-laa-qi pay-gham-bar":                                { fa: "اخلاق پیغمبر", mean: "the Prophet’s character" },
    "pay-gham-bar":                                           { fa: "پیغمبر", mean: "prophet; here the Prophet Muhammad" },
    "sal-lal-laa-hu a-lay-hi wa sal-lam":                     { fa: "(ص)", mean: "peace and blessings of God be upon him - said after the Prophet’s name; (ص) is short for it" },
    "aash-naa":                                               { fa: "آشنا", mean: "familiar, known" },
    "aash-naa bu-dan":                                        { fa: "آشنا بودن", mean: "to know, to be familiar with" },
    "baa-shad":                                               { fa: "باشد", mean: "be, should be" },
    "bu-dan":                                                 { fa: "بودن", mean: "to be" },
    "zee-raa":                                                { fa: "زیرا", mean: "because" },
    "deen":                                                   { fa: "دین", mean: "religion" },
    "ha-maan":                                                { fa: "همان", mean: "that same, the very" },
    "akh-laa-qi nay-ko":                                      { fa: "اخلاق نیکو", mean: "good character" },
    "khul-qi khush":                                          { fa: "خلق خوش", mean: "a pleasant nature, good temper" },
    "khush":                                                  { fa: "خوش", mean: "pleasant, happy" },
    "ast":                                                    { fa: "است", mean: "is" },
    "ki":                                                     { fa: "که", mean: "that, which, who" },
    "khalq":                                                  { fa: "خلق", mean: "people (khalq; khulq, with u, means character)" },
    "raa":                                                    { fa: "را", mean: "marks the object of the verb" },
    "shi-kaar":                                               { fa: "شکار", mean: "hunting, a catch" },
    "shi-kaar may-ku-nad":                                    { fa: "شکار می‌کند", mean: "wins over - literally hunts" },
    "shi-kaar kar-dan":                                       { fa: "شکار کردن", mean: "to hunt; here to win people over" },
    "may-ku-nad":                                             { fa: "می‌کند", mean: "does, makes" },
    "kar-dan":                                                { fa: "کردن", mean: "to do, to make" },
    "ar-zish":                                                { fa: "ارزش", mean: "value, worth" },
    "ar-zi-shi deen":                                         { fa: "ارزش دین", mean: "the value of religion" },
    "ba-raa-yi":                                              { fa: "برای", mean: "for" },
    "may-na-maa-yaa-nad":                                     { fa: "می‌نمایاند", mean: "shows" },
    "na-maa-yaan-dan":                                        { fa: "نمایاندن", mean: "to show" },
    "a-gar":                                                  { fa: "اگر", mean: "if" },
    "bi-khaa-haym":                                           { fa: "بخواهیم", mean: "we want (after “if”)" },
    "khaas-tan":                                              { fa: "خواستن", mean: "to want" },
    "aash-naa sha-waym":                                      { fa: "آشنا شویم", mean: "we become familiar (with baa, with)" },
    "akh-laa-qi pa-yaam-bar":                                 { fa: "اخلاق پیامبر", mean: "the Prophet’s character" },
    "pa-yaam-bar":                                            { fa: "پیامبر", mean: "prophet; here the Prophet Muhammad" },
    "baysh-tar":                                              { fa: "بیشتر", mean: "more" },
    "aash-naa shu-dan":                                       { fa: "آشنا شدن", mean: "to get to know, to become familiar with" },
    "sha-waym":                                               { fa: "شویم", mean: "we become" },
    "shu-dan":                                                { fa: "شدن", mean: "to become" },
    "ba":                                                     { fa: "به", mean: "to" },
    "qur-aan":                                                { fa: "قرآن", mean: "the Quran" },
    "ru-joo ku-naym":                                         { fa: "رجوع کنیم", mean: "we turn to, we consult" },
    "ru-joo":                                                 { fa: "رجوع", mean: "turning to, consulting" },
    "ru-joo kar-dan":                                         { fa: "رجوع کردن", mean: "to turn to, to consult" },
    "ku-naym":                                                { fa: "کنیم", mean: "we do" },
    "khu-daa-wand":                                           { fa: "خداوند", mean: "God, the Lord" },
    "jal-la ja-laa-lu-hu":                                    { fa: "(ج)", mean: "may his glory be exalted - said after God’s name; (ج) is short for it" },
    "dar-baa-ra-yi":                                          { fa: "دربارهٔ", mean: "about" },
    "may-far-maa-yad":                                        { fa: "می‌فرماید", mean: "says (polite: used for God and great people)" },
    "far-moo-dan":                                            { fa: "فرمودن", mean: "to say, to command (polite)" },
    "wa-in-na-ka":                                            { fa: "وَإِنَّکَ", mean: "Arabic: and indeed you" },
    "wa-in-na-ka la-a-laa khu-lu-qin a-zeem":                 { fa: "وَإِنَّکَ لَعَلیٰ خُلُقٍ عَظِیْمٍ", mean: "Arabic, from the Quran: and indeed you have a great character" },
    "la-a-laa":                                               { fa: "لَعَلیٰ", mean: "Arabic: surely have, surely stand upon" },
    "khu-lu-qin":                                             { fa: "خُلُقٍ", mean: "Arabic: a character" },
    "a-zeem":                                                 { fa: "عَظِیْمٍ", mean: "Arabic: great" },
    "soo-ra":                                                 { fa: "سوره", mean: "a chapter of the Quran, a sura" },
    "soo-ra-yi al-qa-lam":                                    { fa: "سورهٔ القلم", mean: "the Sura of the Pen, chapter 68 of the Quran" },
    "al-qa-lam":                                              { fa: "القلم", mean: "Arabic: the pen" },
    "aa-ya":                                                  { fa: "آیه", mean: "a verse of the Quran" },
    "aa-ya-yi chaar":                                         { fa: "آیه ۴", mean: "verse 4" },
    "chaar":                                                  { fa: "۴", mean: "four" },
    "yaa-nee":                                                { fa: "یعنی", mean: "that is, it means" },
    "tu":                                                     { fa: "تو", mean: "you (one person)" },
    "daa-raa-yi":                                             { fa: "دارای", mean: "having, possessing" },
    "daa-raa-yi akh-laa-qi bu-zurg":                          { fa: "دارای اخلاق بزرگ", mean: "having a great character" },
    "akh-laa-qi bu-zurg":                                     { fa: "اخلاق بزرگ", mean: "a great character" },
    "bu-zurg":                                                { fa: "بزرگ", mean: "big, great" },
    "has-tee":                                                { fa: "هستی", mean: "you are" },
    "dar":                                                    { fa: "در", mean: "in" },
    "dar lu-ghat":                                            { fa: "در لغت", mean: "in the dictionary, by its plain meaning" },
    "lu-ghat":                                                { fa: "لغت", mean: "a word; the dictionary" },
    "khoy":                                                   { fa: "خوی", mean: "nature, temper" },
    "khoy wa aa-dat raa go-yand":                             { fa: "خوی و عادت را گویند", mean: "it means nature and habit - literally they call nature and habit (khulq)" },
    "aa-dat":                                                 { fa: "عادت", mean: "habit" },
    "go-yand":                                                { fa: "گویند", mean: "they say, they call" },
    "guf-tan":                                                { fa: "گفتن", mean: "to say, to tell" },
    "dar is-ti-laah":                                         { fa: "در اصطلاح", mean: "as a term, in its special sense" },
    "is-ti-laah":                                             { fa: "اصطلاح", mean: "a term" },
    "i-baa-rat":                                              { fa: "عبارت", mean: "an expression" },
    "i-baa-rat az":                                           { fa: "عبارت از", mean: "consisting of, meaning" },
    "az":                                                     { fa: "از", mean: "from, of" },
    "aa-maal":                                                { fa: "اعمال", mean: "deeds, actions" },
    "aa-maa-li nay-kay":                                      { fa: "اعمال نیکی", mean: "good deeds (which …)" },
    "nay-kay":                                                { fa: "نیکی", mean: "good; the -ay points ahead to «که», which" },
    "sar":                                                    { fa: "سر", mean: "head" },
    "sar may-za-nad":                                         { fa: "سر می‌زند", mean: "comes out, is done" },
    "sar za-dan":                                             { fa: "سر زدن", mean: "to come out (from someone), to be done" },
    "may-za-nad":                                             { fa: "می‌زند", mean: "hits" },
    "za-dan":                                                 { fa: "زدن", mean: "to hit" },
    "daa-raa-yi khul-qi nay-ko":                              { fa: "دارای خلق نیکو", mean: "having good character" },
    "bar-khord":                                              { fa: "برخورد", mean: "how one treats people" },
    "raf-taar":                                               { fa: "رفتار", mean: "behavior, conduct" },
    "raf-taa-ri zisht wa naa-pa-sand":                        { fa: "رفتار زشت و ناپسند", mean: "ugly and improper behavior" },
    "zisht":                                                  { fa: "زشت", mean: "ugly, bad" },
    "naa-pa-sand":                                            { fa: "ناپسند", mean: "disliked, improper" },
    "bi-par-hay-zad":                                         { fa: "بپرهیزد", mean: "should avoid, should keep away (from az)" },
    "par-hay-zee-dan":                                        { fa: "پرهیزیدن", mean: "to avoid, to keep away from" },
    "i-maam":                                                 { fa: "امام", mean: "imam; here a title for a great scholar" },
    "i-maam mu-ham-ma-di gha-zaa-lee":                        { fa: "امام محمد غزالی", mean: "Imam Muhammad al-Ghazali" },
    "mu-ham-mad":                                             { fa: "محمد", mean: "Muhammad" },
    "gha-zaa-lee":                                            { fa: "غزالی", mean: "al-Ghazali, a Persian scholar who died in 1111" },
    "ki-taab":                                                { fa: "کتاب", mean: "book" },
    "kee-mee-yaa":                                            { fa: "کیمیا", mean: "alchemy" },
    "kee-mee-yaa-yi sa-aa-dat":                               { fa: "کیمیای سعادت", mean: "The Alchemy of Happiness, al-Ghazali’s book in Persian" },
    "sa-aa-dat":                                              { fa: "سعادت", mean: "happiness" },
    "khud":                                                   { fa: "خود", mean: "own; self" },
    "ni-gaash-ta":                                            { fa: "نگاشته", mean: "written" },
    "ni-gaash-ta ast":                                        { fa: "نگاشته است", mean: "has written" },
    "ni-gaash-tan":                                           { fa: "نگاشتن", mean: "to write" },
    "bi-daan":                                                { fa: "بدان", mean: "know (an order)" },
    "daa-nis-tan":                                            { fa: "دانستن", mean: "to know" },
    "ay-zad":                                                 { fa: "ایزد", mean: "God" },
    "ay-zad ta-aa-laa":                                       { fa: "ایزد تعالی", mean: "God the Most High" },
    "ta-aa-laa":                                              { fa: "تعالی", mean: "the Most High - said after God’s name" },
    "bar":                                                    { fa: "بر", mean: "on, upon" },
    "ra-sool":                                                { fa: "رسول", mean: "messenger" },
    "ra-soo-li maq-bool":                                     { fa: "رسول مقبول", mean: "the accepted Messenger, the Prophet" },
    "maq-bool":                                               { fa: "مقبول", mean: "accepted" },
    "sa-naa":                                                 { fa: "ثنا", mean: "praise" },
    "sa-naa ... guft":                                        { fa: "ثنا ... گفت", mean: "praised" },
    "sa-naa guf-tan":                                         { fa: "ثنا گفتن", mean: "to praise" },
    "guft":                                                   { fa: "گفت", mean: "said" },
    "pa-yaam-ba-ri khu-daa":                                  { fa: "پیامبر خدا", mean: "the Prophet of God" },
    "khu-daa":                                                { fa: "خدا", mean: "God" },
    "far-moo-da":                                             { fa: "فرموده", mean: "said (polite)" },
    "far-moo-da ast":                                         { fa: "فرموده است", mean: "has said (polite)" },
    "bu-ith-tu":                                              { fa: "بُعِثْتُ", mean: "Arabic: I was sent" },
    "bu-ith-tu li-u-tam-mi-ma ma-kaa-ri-ma al-akh-laaq":      { fa: "بُعِثْتُ لِاُتَّمِمَ مَکارَم الاَخْلَاقِ", mean: "Arabic, a saying of the Prophet: I was sent to complete the noble qualities of character" },
    "li-u-tam-mi-ma":                                         { fa: "لِاُتَّمِمَ", mean: "Arabic: to complete" },
    "ma-kaa-ri-ma":                                           { fa: "مَکارَم", mean: "Arabic: the noble qualities of" },
    "al-akh-laaq":                                            { fa: "الاَخْلَاقِ", mean: "Arabic: character" },
    "al-mus-tad-rak":                                         { fa: "المستدرک", mean: "al-Mustadrak, a book of the Prophet’s sayings" },
    "al-haa-kim":                                             { fa: "(الحاکم)", mean: "al-Hakim, the scholar who collected it" },
    "al-haa-kim nay-shaa-poo-ree":                            { fa: "(الحاکم) نیشاپوری", mean: "al-Hakim of Nishapur, who died in 1014" },
    "nay-shaa-poo-ree":                                       { fa: "نیشاپوری", mean: "from Nishapur" },
    "yak ha-zaa-ru du-sa-du bees-tu chaar":                   { fa: "۱۲۲۴", mean: "1224, the saying’s number in that book" },
    "man":                                                    { fa: "من", mean: "I" },
    "it-maam":                                                { fa: "اتمام", mean: "completing" },
    "it-maam wa ik-maal":                                     { fa: "اتمام و اکمال", mean: "completing and perfecting" },
    "ik-maal":                                                { fa: "اکمال", mean: "perfecting" },
    "ma-kaa-rim":                                             { fa: "مکارم", mean: "noble qualities" },
    "ma-kaa-ri-mi akh-laaq":                                  { fa: "مکارم اخلاق", mean: "the noble qualities of character (the book’s note: the good qualities of character)" },
    "fi-ris-taa-da":                                          { fa: "فرستاده", mean: "sent" },
    "fi-ris-taa-da shu-da-am":                                { fa: "فرستاده شده‌ام", mean: "I have been sent" },
    "fi-ris-taa-dan":                                         { fa: "فرستادن", mean: "to send" },
    "shu-da-am":                                              { fa: "شده‌ام", mean: "I have become; after a word like fi-ris-taa-da, I have been …" },
    "ka-say":                                                 { fa: "کسی", mean: "someone" },
    "nazd":                                                   { fa: "نزد", mean: "to, at the side of (a person)" },
    "ra-soo-li khu-daa":                                      { fa: "رسول خدا", mean: "the Messenger of God" },
    "aa-mad":                                                 { fa: "آمد", mean: "came" },
    "aa-ma-dan":                                              { fa: "آمدن", mean: "to come" },
    "pur-seed":                                               { fa: "پرسید", mean: "asked" },
    "pur-see-dan":                                            { fa: "پرسیدن", mean: "to ask" },
    "deen chees":                                             { fa: "دین چیست", mean: "what is religion" },
    "chees":                                                  { fa: "چیست", mean: "what is" },
    "aan":                                                    { fa: "آن", mean: "that" },
    "aan haz-rat":                                            { fa: "آن حضرت", mean: "he - literally that holiness, a respectful way to name the Prophet" },
    "haz-rat":                                                { fa: "حضرت", mean: "his holiness - a title of respect" },
    "far-moo-dand":                                           { fa: "فرمودند", mean: "said (polite; plural for respect)" },
    "ham-chu-neen":                                           { fa: "همچنین", mean: "also, likewise" },
    "su-aal":                                                 { fa: "سؤال", mean: "a question" },
    "su-aal shud":                                            { fa: "سؤال شد", mean: "was asked" },
    "su-aal shu-dan":                                         { fa: "سؤال شدن", mean: "to be asked" },
    "shud":                                                   { fa: "شد", mean: "became; was" },
    "faa-zil-ta-reen":                                        { fa: "فاضل‌ترین", mean: "the most excellent (the book’s note: the best)" },
    "faa-zil-ta-reen aa-maal":                                { fa: "فاضل‌ترین اعمال", mean: "the best of deeds" },
    "guf-tand":                                               { fa: "گفتند", mean: "they said; here he said (plural for respect)" },
    "haz-ra-ti bee-bee aa-yi-sha-yi sid-dee-qa":              { fa: "حضرت بی‌بی عایشهٔ صدیقه", mean: "Lady Aisha the Truthful, the Prophet’s wife" },
    "bee-bee":                                                { fa: "بی‌بی", mean: "lady - a title of respect for a woman" },
    "aa-yi-sha":                                              { fa: "عایشه", mean: "Aisha" },
    "sid-dee-qa":                                             { fa: "صدیقه", mean: "the truthful one - Aisha’s title" },
    "ra-zee-yal-laa-hu an-haa":                               { fa: "رضی‌الله‌عنها", mean: "may God be pleased with her - said after the name of a woman who was a companion of the Prophet" },
    "jo-yaa":                                                 { fa: "جویا", mean: "seeking, asking" },
    "jo-yaa shu-dand":                                        { fa: "جویا شدند", mean: "they asked about" },
    "jo-yaa shu-dan":                                         { fa: "جویا شدن", mean: "to ask about" },
    "shu-dand":                                               { fa: "شدند", mean: "they became" },
    "dar paa-sukh":                                           { fa: "در پاسخ", mean: "in answer" },
    "paa-sukh":                                               { fa: "پاسخ", mean: "an answer" },
    "kaa-na":                                                 { fa: "کَانَ", mean: "Arabic: was" },
    "kaa-na khu-lu-qu-hu al-qur-aan":                         { fa: "کَانَ خُلُقُه القرآن", mean: "Arabic: his character was the Quran" },
    "khu-lu-qu-hu":                                           { fa: "خُلُقُه", mean: "Arabic: his character" },
    "al-qur-aan":                                             { fa: "القرآن", mean: "Arabic: the Quran" },
    "oo":                                                     { fa: "او", mean: "he, she; his, her" },
    "bood":                                                   { fa: "بود", mean: "was" },
    "har":                                                    { fa: "هر", mean: "every" },
    "har chi":                                                { fa: "هر چه", mean: "whatever" },
    "chi":                                                    { fa: "چه", mean: "what; how" },
    "hast":                                                   { fa: "هست", mean: "is, there is" },
    "see-rat":                                                { fa: "سیرت", mean: "way of life, conduct" },
    "see-ra-ti pa-yaam-bar":                                  { fa: "سیرت پیامبر", mean: "the Prophet’s way of life" },
    "wu-jood":                                                { fa: "وجود", mean: "existence" },
    "wu-jood daash-ta ast":                                   { fa: "وجود داشته است", mean: "has been there, was present" },
    "wu-jood daash-tan":                                      { fa: "وجود داشتن", mean: "to exist, to be there" },
    "daash-ta":                                               { fa: "داشته", mean: "had" },
    "daash-tan":                                              { fa: "داشتن", mean: "to have" },
    "shaykh":                                                 { fa: "شیخ", mean: "sheikh - a title for a great teacher or poet" },
    "shay-khi mus-li-hud-deen sa-dee":                        { fa: "شیخ مصلح‌الدین سعدی", mean: "Sheikh Muslihuddin Sa’di" },
    "mus-li-hud-deen":                                        { fa: "مصلح‌الدین", mean: "Muslihuddin, Sa’di’s first name" },
    "sa-dee":                                                 { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "chi zay-baa":                                            { fa: "چه زیبا", mean: "how beautifully" },
    "zay-baa":                                                { fa: "زیبا", mean: "beautiful" },
    "su-roo-da":                                              { fa: "سروده", mean: "written (a poem)" },
    "su-roo-da ast":                                          { fa: "سروده است", mean: "has written (a poem)" },
    "su-roo-dan":                                             { fa: "سرودن", mean: "to write a poem" },
    "shi-kaar ku-nad":                                        { fa: "شکار کند", mean: "wins over - literally hunts (the book’s note: attracts and draws in)" },
    "ku-nad":                                                 { fa: "کند", mean: "does" },
    "aql":                                                    { fa: "عقل", mean: "reason, good sense" },
    "bih-tar":                                                { fa: "بهتر", mean: "better" },
    "bih-tar az een":                                         { fa: "بهتر از این", mean: "better than this" },
    "een":                                                    { fa: "این", mean: "this" },
    "chi kaar ku-nad":                                        { fa: "چه کار کند", mean: "what could it do - literally what work would it do" },
    "kaar":                                                   { fa: "کار", mean: "work, a job" },
    "sha-raa-fat-mand":                                       { fa: "شرافتمند", mean: "honorable" },
    "akh-laa-qi ha-mee-da":                                   { fa: "اخلاق حمیده", mean: "praiseworthy character (the book’s note: a praised nature and habits)" },
    "ha-mee-da":                                              { fa: "حمیده", mean: "praiseworthy" },
    "khaa-na-waa-da":                                         { fa: "خانواده", mean: "family" },
    "mak-tab":                                                { fa: "مکتب", mean: "school" },
    "jaa-mi-a":                                               { fa: "جامعه", mean: "society" },
    "ham-naw-aan":                                            { fa: "هم‌نوعان", mean: "fellow human beings" },
    "ham-naw-aa-ni khaysh":                                   { fa: "هم‌نوعان خویش", mean: "their fellow human beings" },
    "khaysh":                                                 { fa: "خویش", mean: "own; self" },
    "mu-taa-biq":                                             { fa: "مطابق", mean: "according to" },
    "ir-shaa-daat":                                           { fa: "ارشادات", mean: "guidance, teachings" },
    "ir-shaa-daa-ti i-laa-hee":                               { fa: "ارشادات الهی", mean: "God’s teachings" },
    "i-laa-hee":                                              { fa: "الهی", mean: "of God" },
    "fa-raa-meen":                                            { fa: "فرامین", mean: "commands" },
    "fa-raa-mee-ni sha-ree-at":                               { fa: "فرامین شریعت", mean: "the commands of the religious law" },
    "sha-ree-at":                                             { fa: "شریعت", mean: "religious law" },
    "sha-ree-a-ti ghar-raa-yi mu-ham-ma-dee":                 { fa: "شریعت غرای محمدی", mean: "the shining religious law of Muhammad" },
    "ghar-raa":                                               { fa: "غرا", mean: "bright, shining" },
    "mu-ham-ma-dee":                                          { fa: "محمدی", mean: "of Muhammad" },
    "a-mal":                                                  { fa: "عمل", mean: "action, deed" },
    "a-mal may-ku-nad":                                       { fa: "عمل می‌کند", mean: "acts" },
    "a-mal kar-dan":                                          { fa: "عمل کردن", mean: "to act" },
    "ri-faah":                                                { fa: "رفاه", mean: "well-being, comfort" },
    "ri-faah wa aa-baa-daa-nee-yi jaa-mi-a":                  { fa: "رفاه و آبادانی جامعه", mean: "the well-being and prosperity of society" },
    "aa-baa-daa-nee":                                         { fa: "آبادانی", mean: "prosperity, building up" },
    "sa-heem":                                                { fa: "سهیم", mean: "having a share" },
    "sa-heem may-sha-wad":                                    { fa: "سهیم می‌شود", mean: "takes part" },
    "sa-heem shu-dan":                                        { fa: "سهیم شدن", mean: "to take part, to share" },
    "may-sha-wad":                                            { fa: "می‌شود", mean: "becomes" },
    "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad": { fa: "در خدمت مخلوق خدا قرار می‌گیرد", mean: "puts himself at the service of God’s creatures" },
    "khid-mat":                                               { fa: "خدمت", mean: "service" },
    "makh-looq":                                              { fa: "مخلوق", mean: "creature" },
    "makh-loo-qi khu-daa":                                    { fa: "مخلوق خدا", mean: "God’s creatures" },
    "qa-raar":                                                { fa: "قرار", mean: "place, rest" },
    "qa-raar may-gee-rad":                                    { fa: "قرار می‌گیرد", mean: "is placed, comes to be" },
    "qa-raar gi-rif-tan":                                     { fa: "قرار گرفتن", mean: "to be placed; to come to be (in a state)" },
    "may-gee-rad":                                            { fa: "می‌گیرد", mean: "takes" },
    "gi-rif-tan":                                             { fa: "گرفتن", mean: "to take" },
    "zish-tee":                                               { fa: "زشتی", mean: "ugliness, bad deeds" },
    "bad-kho-yee":                                            { fa: "بدخویی", mean: "bad temper" },
    "may-par-hay-zad":                                        { fa: "می‌پرهیزد", mean: "avoids, keeps away (from az)" },
    "akh-laa-qi nay-kost":                                    { fa: "اخلاق نیکوست", mean: "it is good character (that …)" },
    "nay-kost":                                               { fa: "نیکوست", mean: "is good (nay-ko + ast)" },
    "af-raad":                                                { fa: "افراد", mean: "individuals, members" },
    "af-raa-di aan":                                          { fa: "افراد آن", mean: "its members" },
    "ba sar-man-zi-li sa-aa-dat may-ra-saa-nad":              { fa: "به سر منزل سعادت می‌رساند", mean: "brings (them) to happiness - literally to the destination of happiness" },
    "sar-man-zil":                                            { fa: "سر منزل", mean: "destination - literally the head of the stage" },
    "may-ra-saa-nad":                                         { fa: "می‌رساند", mean: "brings, delivers" },
    "ra-saan-dan":                                            { fa: "رساندن", mean: "to bring, to deliver" },
    "maa":                                                    { fa: "ما", mean: "we" },
    "bi-yaa-mo-zaym":                                         { fa: "بیاموزیم", mean: "(that) we learn" },
    "aa-mokh-tan":                                            { fa: "آموختن", mean: "to learn" },
    "pee-ra-zan":                                             { fa: "پیرزن", mean: "an old woman" },
    "pee-ra-za-ni ya-hoo-dee-yay bood":                       { fa: "پیرزن یهودی‌یی بود", mean: "there was a Jewish old woman" },
    "ya-hoo-dee-yay":                                         { fa: "یهودی‌یی", mean: "a Jewish (woman)" },
    "ya-hoo-dee":                                             { fa: "یهودی", mean: "Jewish; a Jew" },
    "an-daakh-tan":                                           { fa: "انداختن", mean: "throwing; to throw" },
    "khaa-kis-tar":                                           { fa: "خاکستر", mean: "ash" },
    "khas":                                                   { fa: "خس", mean: "straw, dry grass" },
    "khas wa khaa-shaak":                                     { fa: "خس و خاشاک", mean: "rubbish, sweepings" },
    "khaa-shaak":                                             { fa: "خاشاک", mean: "sweepings, rubbish" },
    "a-zi-yat":                                               { fa: "اذیت", mean: "harm, trouble" },
    "a-zi-yat may-kard":                                      { fa: "اذیت می‌کرد", mean: "used to trouble, kept harassing" },
    "a-zi-yat kar-dan":                                       { fa: "اذیت کردن", mean: "to trouble, to harass" },
    "may-kard":                                               { fa: "می‌کرد", mean: "used to do, kept doing" },
    "chand":                                                  { fa: "چند", mean: "a few; how many" },
    "chand ro-zay":                                           { fa: "چند روزی", mean: "for a few days" },
    "ro-zay":                                                 { fa: "روزی", mean: "a day (roz + -ay)" },
    "roz":                                                    { fa: "روز", mean: "day" },
    "maw-rid":                                                { fa: "مورد", mean: "object, case" },
    "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand":   { fa: "مورد آزار و اذیت قرار نگرفتند", mean: "were not troubled - literally did not become the object of hurt and harm (plural for respect)" },
    "aa-zaar":                                                { fa: "آزار", mean: "hurt, harm" },
    "qa-raar na-gi-rif-tand":                                 { fa: "قرار نگرفتند", mean: "did not come to be (plural for respect)" },
    "na-gi-rif-tand":                                         { fa: "نگرفتند", mean: "they did not take" },
    "ta-aj-jub":                                              { fa: "تعجب", mean: "surprise" },
    "ta-aj-jub kar-dand":                                     { fa: "تعجب کردند", mean: "was surprised (plural for respect)" },
    "ta-aj-jub kar-dan":                                      { fa: "تعجب کردن", mean: "to be surprised" },
    "kar-dand":                                               { fa: "کردند", mean: "they did" },
    "ahl":                                                    { fa: "اهل", mean: "people (of a place)" },
    "ah-li ma-hal-la":                                        { fa: "اهل محله", mean: "the people of the neighborhood" },
    "ma-hal-la":                                              { fa: "محله", mean: "neighborhood" },
    "jo-yaa-yi ah-waal shu-dand":                             { fa: "جویای احوال شدند", mean: "asked how she was (plural for respect)" },
    "jo-yaa-yi ah-waal shu-dan":                              { fa: "جویای احوال شدن", mean: "to ask after someone" },
    "ah-waal":                                                { fa: "احوال", mean: "how someone is, news" },
    "mar-dum":                                                { fa: "مردم", mean: "people" },
    "bee-maar":                                               { fa: "بیمار", mean: "sick" },
    "ba i-yaa-da-ti way raft":                                { fa: "به عیادت وی رفت", mean: "went to visit her in her sickness" },
    "i-yaa-dat":                                              { fa: "عیادت", mean: "visiting someone who is sick" },
    "way":                                                    { fa: "وی", mean: "he, she" },
    "raft":                                                   { fa: "رفت", mean: "went" },
    "raf-tan":                                                { fa: "رفتن", mean: "to go" },
    "waq-tay":                                                { fa: "وقتی", mean: "when" },
    "chashm":                                                 { fa: "چشم", mean: "eye" },
    "baaz":                                                   { fa: "باز", mean: "open" },
    "baaz kard":                                              { fa: "باز کرد", mean: "opened" },
    "baaz kar-dan":                                           { fa: "باز کردن", mean: "to open" },
    "kard":                                                   { fa: "کرد", mean: "did, made" },
    "deed":                                                   { fa: "دید", mean: "saw" },
    "dee-dan":                                                { fa: "دیدن", mean: "to see; seeing" },
    "ha-maan pa-yaam-ba-ri khu-daa ast":                      { fa: "همان پیامبر خدا است", mean: "it is that same Prophet of God" },
    "har roz":                                                { fa: "هر روز", mean: "every day" },
    "reekh-tan":                                              { fa: "ریختن", mean: "pouring, dumping; to pour" },
    "sar wa roy":                                             { fa: "سر و روی", mean: "head and face" },
    "roy":                                                    { fa: "روی", mean: "face" },
    "mu-baa-rak-shaan":                                       { fa: "مبارک‌شان", mean: "his blessed (-shaan, their, said of one person for respect)" },
    "mu-baa-rak":                                             { fa: "مبارک", mean: "blessed" },
    "ha-maan bood ki":                                        { fa: "همان بود که", mean: "that was when, right then" },
    "ka-li-ma":                                               { fa: "کلمه", mean: "a word" },
    "ka-li-ma-yi tay-yi-ba":                                  { fa: "کلمهٔ طیِّبه", mean: "the good word: “there is no god but God, Muhammad is the Messenger of God”, said to become a Muslim" },
    "tay-yi-ba":                                              { fa: "طیِّبه", mean: "good, pure" },
    "khaand":                                                 { fa: "خواند", mean: "read, recited" },
    "khaan-dan":                                              { fa: "خواندن", mean: "to read, to recite" },
    "mu-sul-maan shud":                                       { fa: "مسلمان شد", mean: "became a Muslim" },
    "mu-sul-maan shu-dan":                                    { fa: "مسلمان شدن", mean: "to become a Muslim" },
    "een ast":                                                { fa: "این است", mean: "this is" },
    "hat-taa":                                                { fa: "حتا", mean: "even" },
    "dush-ma-naan":                                           { fa: "دشمنان", mean: "enemies" },
    "dush-man":                                               { fa: "دشمن", mean: "an enemy" },
    "dee-dan-shaan":                                          { fa: "دیدن‌شان", mean: "seeing him (-shaan, their, said of one person for respect)" },
    "tah-ti ta-seer":                                         { fa: "تحت تأثیر", mean: "under the influence" },
    "tah-ti ta-seer qa-raar gi-rif-ta":                       { fa: "تحت تأثیر قرار گرفته", mean: "moved, touched - literally having come under the influence" },
    "ta-seer":                                                { fa: "تأثیر", mean: "effect, influence" },
    "gi-rif-ta":                                              { fa: "گرفته", mean: "taken; having taken" },
    "ee-maan":                                                { fa: "ایمان", mean: "faith" },
    "ee-maan may-aa-war-dand":                                { fa: "ایمان می‌آوردند", mean: "came to believe, became believers" },
    "ee-maan aa-war-dan":                                     { fa: "ایمان آوردن", mean: "to come to believe, to become a believer" },
    "may-aa-war-dand":                                        { fa: "می‌آوردند", mean: "used to bring" }
  },

  // How the letters of the pronunciations are said, as in Onion Skin.
  sounds: [
    [
      "aa",
      "as in “father”"
    ],
    [
      "a",
      "as in “cat”; a word’s last a, as in “sofa”"
    ],
    [
      "ay",
      "as in “say”"
    ],
    [
      "ee",
      "as in “see”"
    ],
    [
      "i",
      "as in “sit”"
    ],
    [
      "o",
      "as in “go”"
    ],
    [
      "oo",
      "as in “food”"
    ],
    [
      "u",
      "as in “put”"
    ],
    [
      "aw",
      "as in “cow”"
    ],
    [
      "kh",
      "the rough h in Scottish “loch”"
    ],
    [
      "gh",
      "a French r"
    ],
    [
      "q",
      "a k made deep in the throat"
    ],
    [
      "-",
      "between syllables; -i at the end of a word joins it to the next, “of”"
    ]
  ],

  // The lesson. Each word: [the word as printed, its pronunciation in this
  // sentence, then the entries from "words" its slip shows, in order].
  title: {
    "say": "khul-qi nay-ko",
    "mean": "Good character",
    "words": [
      [
        "خلق",
        "khul-qi",
        "khulq",
        "khul-qi nay-ko"
      ],
      [
        "نیکو",
        "nay-ko",
        "nay-ko",
        "khul-qi nay-ko"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "in-saa-ni khoob wa mu-sul-maan baa-yad baa akh-laa-qi pay-gham-bar sal-lal-laa-hu a-lay-hi wa sal-lam aash-naa baa-shad;",
        "mean": "A good Muslim person should know the character of the Prophet (peace and blessings of God be upon him);",
        "words": [
          [
            "انسان",
            "in-saa-ni",
            "in-saan",
            "in-saa-ni mu-sul-maan"
          ],
          [
            "خوب",
            "khoob",
            "khoob"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مسلمان",
            "mu-sul-maan",
            "mu-sul-maan",
            "in-saa-ni mu-sul-maan"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "با",
            "baa",
            "baa",
            "aash-naa baa-shad"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi pay-gham-bar"
          ],
          [
            "پیغمبر",
            "pay-gham-bar",
            "pay-gham-bar",
            "akh-laa-qi pay-gham-bar"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "آشنا",
            "aash-naa",
            "aash-naa",
            "aash-naa baa-shad",
            "aash-naa bu-dan"
          ],
          [
            "باشد؛",
            "baa-shad",
            "baa-shad",
            "aash-naa baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "zee-raa deen ha-maan akh-laa-qi nay-ko wa khul-qi khush ast ki khalq raa shi-kaar may-ku-nad wa ar-zi-shi deen raa ba-raa-yi in-saan may-na-maa-yaa-nad;",
        "mean": "because religion is that very good character and pleasant nature which wins people over and shows people the worth of religion;",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "دین",
            "deen",
            "deen"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi nay-ko"
          ],
          [
            "نیکو",
            "nay-ko",
            "nay-ko",
            "akh-laa-qi nay-ko"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خُلق",
            "khul-qi",
            "khulq",
            "khul-qi khush"
          ],
          [
            "خوش",
            "khush",
            "khush",
            "khul-qi khush"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "خلق",
            "khalq",
            "khalq"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "شکار",
            "shi-kaar",
            "shi-kaar",
            "shi-kaar may-ku-nad",
            "shi-kaar kar-dan"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "shi-kaar may-ku-nad",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ارزش",
            "ar-zi-shi",
            "ar-zish",
            "ar-zi-shi deen"
          ],
          [
            "دین",
            "deen",
            "deen",
            "ar-zi-shi deen"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "می‌نمایاند؛",
            "may-na-maa-yaa-nad",
            "may-na-maa-yaa-nad",
            "na-maa-yaan-dan"
          ]
        ]
      },
      {
        "say": "a-gar bi-khaa-haym baa akh-laa-qi pa-yaam-bar baysh-tar aash-naa sha-waym baa-yad ba qur-aan ru-joo ku-naym.",
        "mean": "If we want to know the Prophet’s character better, we must turn to the Quran.",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "بخواهیم",
            "bi-khaa-haym",
            "bi-khaa-haym",
            "khaas-tan"
          ],
          [
            "با",
            "baa",
            "baa",
            "aash-naa sha-waym"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi pa-yaam-bar"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar",
            "akh-laa-qi pa-yaam-bar"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "آشنا",
            "aash-naa",
            "aash-naa",
            "aash-naa sha-waym",
            "aash-naa shu-dan"
          ],
          [
            "شویم",
            "sha-waym",
            "sha-waym",
            "aash-naa sha-waym",
            "shu-dan"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "قرآن",
            "qur-aan",
            "qur-aan",
            "ru-joo ku-naym"
          ],
          [
            "رجوع",
            "ru-joo",
            "ru-joo",
            "ru-joo ku-naym",
            "ru-joo kar-dan"
          ],
          [
            "کنیم.",
            "ku-naym",
            "ku-naym",
            "ru-joo ku-naym",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "khu-daa-wand jal-la ja-laa-lu-hu dar-baa-ra-yi pa-yaam-bar sal-lal-laa-hu a-lay-hi wa sal-lam may-far-maa-yad: “wa-in-na-ka la-a-laa khu-lu-qin a-zeem” (soo-ra-yi al-qa-lam: aa-ya-yi chaar) yaa-nee: tu daa-raa-yi akh-laa-qi bu-zurg has-tee.",
        "mean": "God (may his glory be exalted) says about the Prophet (peace and blessings of God be upon him): “And indeed you have a great character” [Sura al-Qalam, verse 4], that is: you have a great character.",
        "words": [
          [
            "خداوند",
            "khu-daa-wand",
            "khu-daa-wand"
          ],
          [
            "(ج)",
            "jal-la ja-laa-lu-hu",
            "jal-la ja-laa-lu-hu"
          ],
          [
            "دربارهٔ",
            "dar-baa-ra-yi",
            "dar-baa-ra-yi"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "می‌فرماید:",
            "may-far-maa-yad",
            "may-far-maa-yad",
            "far-moo-dan"
          ],
          [
            "«وَإِنَّکَ",
            "wa-in-na-ka",
            "wa-in-na-ka",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "لَعَلیٰ",
            "la-a-laa",
            "la-a-laa",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "خُلُقٍ",
            "khu-lu-qin",
            "khu-lu-qin",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "عَظِیْمٍ»",
            "a-zeem",
            "a-zeem",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "[سورهٔ",
            "soo-ra-yi",
            "soo-ra",
            "soo-ra-yi al-qa-lam"
          ],
          [
            "القلم:",
            "al-qa-lam",
            "al-qa-lam",
            "soo-ra-yi al-qa-lam"
          ],
          [
            "آیه",
            "aa-ya-yi",
            "aa-ya",
            "aa-ya-yi chaar"
          ],
          [
            "۴]",
            "chaar",
            "chaar",
            "aa-ya-yi chaar"
          ],
          [
            "یعنی:",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi",
            "daa-raa-yi akh-laa-qi bu-zurg"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi bu-zurg"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg",
            "akh-laa-qi bu-zurg"
          ],
          [
            "هستی.",
            "has-tee",
            "has-tee",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "khulq dar lu-ghat khoy wa aa-dat raa go-yand wa dar is-ti-laah i-baa-rat az aa-maa-li nay-kay ast ki az in-saan sar may-za-nad.",
        "mean": "By its plain meaning, khulq means nature and habit, and as a term it means the good deeds that come from a person.",
        "words": [
          [
            "خُلق",
            "khulq",
            "khulq"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar lu-ghat"
          ],
          [
            "لغت",
            "lu-ghat",
            "lu-ghat",
            "dar lu-ghat"
          ],
          [
            "خوی",
            "khoy",
            "khoy",
            "khoy wa aa-dat raa go-yand"
          ],
          [
            "و",
            "wa",
            "wa",
            "khoy wa aa-dat raa go-yand"
          ],
          [
            "عادت",
            "aa-dat",
            "aa-dat",
            "khoy wa aa-dat raa go-yand"
          ],
          [
            "را",
            "raa",
            "raa",
            "khoy wa aa-dat raa go-yand"
          ],
          [
            "گویند",
            "go-yand",
            "go-yand",
            "khoy wa aa-dat raa go-yand",
            "guf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar is-ti-laah"
          ],
          [
            "اصطلاح",
            "is-ti-laah",
            "is-ti-laah",
            "dar is-ti-laah"
          ],
          [
            "عبارت",
            "i-baa-rat",
            "i-baa-rat",
            "i-baa-rat az"
          ],
          [
            "از",
            "az",
            "az",
            "i-baa-rat az"
          ],
          [
            "اعمال",
            "aa-maa-li",
            "aa-maal",
            "aa-maa-li nay-kay"
          ],
          [
            "نیکی",
            "nay-kay",
            "nay-kay",
            "aa-maa-li nay-kay",
            "nay-ko"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "سر",
            "sar",
            "sar",
            "sar may-za-nad",
            "sar za-dan"
          ],
          [
            "می‌زند.",
            "may-za-nad",
            "may-za-nad",
            "sar may-za-nad",
            "za-dan"
          ]
        ]
      },
      {
        "say": "in-saa-ni khoob wa mu-sul-maan baa-yad daa-raa-yi khul-qi nay-ko baa-shad wa az bar-khord wa raf-taa-ri zisht wa naa-pa-sand bi-par-hay-zad.",
        "mean": "A good Muslim person should have good character and keep away from ugly and improper ways of treating people and behaving.",
        "words": [
          [
            "انسان",
            "in-saa-ni",
            "in-saan",
            "in-saa-ni mu-sul-maan"
          ],
          [
            "خوب",
            "khoob",
            "khoob"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مسلمان",
            "mu-sul-maan",
            "mu-sul-maan",
            "in-saa-ni mu-sul-maan"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi",
            "daa-raa-yi khul-qi nay-ko"
          ],
          [
            "خُلق",
            "khul-qi",
            "khulq",
            "khul-qi nay-ko",
            "daa-raa-yi khul-qi nay-ko"
          ],
          [
            "نیکو",
            "nay-ko",
            "nay-ko",
            "khul-qi nay-ko",
            "daa-raa-yi khul-qi nay-ko"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "برخورد",
            "bar-khord",
            "bar-khord"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رفتار",
            "raf-taa-ri",
            "raf-taar",
            "raf-taa-ri zisht wa naa-pa-sand"
          ],
          [
            "زشت",
            "zisht",
            "zisht",
            "raf-taa-ri zisht wa naa-pa-sand"
          ],
          [
            "و",
            "wa",
            "wa",
            "raf-taa-ri zisht wa naa-pa-sand"
          ],
          [
            "ناپسند",
            "naa-pa-sand",
            "naa-pa-sand",
            "raf-taa-ri zisht wa naa-pa-sand"
          ],
          [
            "بپرهیزد.",
            "bi-par-hay-zad",
            "bi-par-hay-zad",
            "par-hay-zee-dan"
          ]
        ]
      },
      {
        "say": "i-maam mu-ham-ma-di gha-zaa-lee dar ki-taa-bi “kee-mee-yaa-yi sa-aa-dat” khud ni-gaash-ta ast: “bi-daan ki ay-zad ta-aa-laa bar ra-soo-li maq-bool sal-lal-laa-hu a-lay-hi wa sal-lam sa-naa ba khul-qi nay-ko guft ki: wa-in-na-ka la-a-laa khu-lu-qin a-zeem.”",
        "mean": "Imam Muhammad al-Ghazali wrote in his book The Alchemy of Happiness: “Know that God the Most High praised the accepted Messenger (peace and blessings of God be upon him) for his good character, saying: And indeed you have a great character.”",
        "words": [
          [
            "امام",
            "i-maam",
            "i-maam",
            "i-maam mu-ham-ma-di gha-zaa-lee"
          ],
          [
            "محمد",
            "mu-ham-ma-di",
            "mu-ham-mad",
            "i-maam mu-ham-ma-di gha-zaa-lee"
          ],
          [
            "غزالی",
            "gha-zaa-lee",
            "gha-zaa-lee",
            "i-maam mu-ham-ma-di gha-zaa-lee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کتاب",
            "ki-taa-bi",
            "ki-taab"
          ],
          [
            "«کیمیای",
            "kee-mee-yaa-yi",
            "kee-mee-yaa",
            "kee-mee-yaa-yi sa-aa-dat"
          ],
          [
            "سعادت»",
            "sa-aa-dat",
            "sa-aa-dat",
            "kee-mee-yaa-yi sa-aa-dat"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "نگاشته",
            "ni-gaash-ta",
            "ni-gaash-ta",
            "ni-gaash-ta ast",
            "ni-gaash-tan"
          ],
          [
            "است:",
            "ast",
            "ast",
            "ni-gaash-ta ast"
          ],
          [
            "«بدان",
            "bi-daan",
            "bi-daan",
            "daa-nis-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ایزد",
            "ay-zad",
            "ay-zad",
            "ay-zad ta-aa-laa"
          ],
          [
            "تعالی",
            "ta-aa-laa",
            "ta-aa-laa",
            "ay-zad ta-aa-laa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "رسول",
            "ra-soo-li",
            "ra-sool",
            "ra-soo-li maq-bool"
          ],
          [
            "مقبول",
            "maq-bool",
            "maq-bool",
            "ra-soo-li maq-bool"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "ثنا",
            "sa-naa",
            "sa-naa",
            "sa-naa ... guft",
            "sa-naa guf-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خُلق",
            "khul-qi",
            "khulq",
            "khul-qi nay-ko"
          ],
          [
            "نیکو",
            "nay-ko",
            "nay-ko",
            "khul-qi nay-ko"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "sa-naa ... guft",
            "guf-tan"
          ],
          [
            "که:",
            "ki",
            "ki"
          ],
          [
            "وَإِنَّکَ",
            "wa-in-na-ka",
            "wa-in-na-ka",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "لَعَلیٰ",
            "la-a-laa",
            "la-a-laa",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "خُلُقٍ",
            "khu-lu-qin",
            "khu-lu-qin",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ],
          [
            "عَظِیْمٍ.»",
            "a-zeem",
            "a-zeem",
            "wa-in-na-ka la-a-laa khu-lu-qin a-zeem"
          ]
        ]
      }
    ],
    [
      {
        "say": "pa-yaam-ba-ri khu-daa far-moo-da ast: “bu-ith-tu li-u-tam-mi-ma ma-kaa-ri-ma al-akh-laaq” (al-mus-tad-rak (al-haa-kim) nay-shaa-poo-ree, yak ha-zaa-ru du-sa-du bees-tu chaar), man ba-raa-yi it-maam wa ik-maa-li ma-kaa-ri-mi akh-laaq fi-ris-taa-da shu-da-am.",
        "mean": "The Prophet of God said: “I was sent to complete the noble qualities of character” [al-Mustadrak (al-Hakim) of Nishapur, 1224], that is, I have been sent to complete and perfect the noble qualities of character.",
        "words": [
          [
            "پیامبر",
            "pa-yaam-ba-ri",
            "pa-yaam-bar",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "فرموده",
            "far-moo-da",
            "far-moo-da",
            "far-moo-da ast",
            "far-moo-dan"
          ],
          [
            "است:",
            "ast",
            "ast",
            "far-moo-da ast"
          ],
          [
            "«بُعِثْتُ",
            "bu-ith-tu",
            "bu-ith-tu",
            "bu-ith-tu li-u-tam-mi-ma ma-kaa-ri-ma al-akh-laaq"
          ],
          [
            "لِاُتَّمِمَ",
            "li-u-tam-mi-ma",
            "li-u-tam-mi-ma",
            "bu-ith-tu li-u-tam-mi-ma ma-kaa-ri-ma al-akh-laaq"
          ],
          [
            "مَکارَم",
            "ma-kaa-ri-ma",
            "ma-kaa-ri-ma",
            "bu-ith-tu li-u-tam-mi-ma ma-kaa-ri-ma al-akh-laaq"
          ],
          [
            "الاَخْلَاقِ»",
            "al-akh-laaq",
            "al-akh-laaq",
            "bu-ith-tu li-u-tam-mi-ma ma-kaa-ri-ma al-akh-laaq"
          ],
          [
            "[المستدرک",
            "al-mus-tad-rak",
            "al-mus-tad-rak"
          ],
          [
            "(الحاکم)",
            "al-haa-kim",
            "al-haa-kim",
            "al-haa-kim nay-shaa-poo-ree"
          ],
          [
            "نیشاپوری،",
            "nay-shaa-poo-ree",
            "nay-shaa-poo-ree",
            "al-haa-kim nay-shaa-poo-ree"
          ],
          [
            "۱۲۲۴]،",
            "yak ha-zaa-ru du-sa-du bees-tu chaar",
            "yak ha-zaa-ru du-sa-du bees-tu chaar"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "اتمام",
            "it-maam",
            "it-maam",
            "it-maam wa ik-maal"
          ],
          [
            "و",
            "wa",
            "wa",
            "it-maam wa ik-maal"
          ],
          [
            "اکمال",
            "ik-maa-li",
            "ik-maal",
            "it-maam wa ik-maal"
          ],
          [
            "مکارم",
            "ma-kaa-ri-mi",
            "ma-kaa-rim",
            "ma-kaa-ri-mi akh-laaq"
          ],
          [
            "اخلاق",
            "akh-laaq",
            "akh-laaq",
            "ma-kaa-ri-mi akh-laaq"
          ],
          [
            "فرستاده",
            "fi-ris-taa-da",
            "fi-ris-taa-da",
            "fi-ris-taa-da shu-da-am",
            "fi-ris-taa-dan"
          ],
          [
            "شده‌ام.",
            "shu-da-am",
            "shu-da-am",
            "fi-ris-taa-da shu-da-am",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "ka-say naz-di ra-soo-li khu-daa aa-mad wa pur-seed: “deen chees?”",
        "mean": "Someone came to the Messenger of God and asked: “What is religion?”",
        "words": [
          [
            "کسی",
            "ka-say",
            "ka-say"
          ],
          [
            "نزد",
            "naz-di",
            "nazd"
          ],
          [
            "رسول",
            "ra-soo-li",
            "ra-sool",
            "ra-soo-li khu-daa"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "ra-soo-li khu-daa"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پرسید:",
            "pur-seed",
            "pur-seed",
            "pur-see-dan"
          ],
          [
            "«دین",
            "deen",
            "deen",
            "deen chees"
          ],
          [
            "چیست؟»",
            "chees",
            "chees",
            "deen chees"
          ]
        ]
      },
      {
        "say": "aan haz-rat sal-lal-laa-hu a-lay-hi wa sal-lam far-moo-dand: “khul-qi nay-ko.”",
        "mean": "He (peace and blessings of God be upon him) said: “Good character.”",
        "words": [
          [
            "آن",
            "aan",
            "aan",
            "aan haz-rat"
          ],
          [
            "حضرت",
            "haz-rat",
            "haz-rat",
            "aan haz-rat"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "فرمودند:",
            "far-moo-dand",
            "far-moo-dand",
            "far-moo-dan"
          ],
          [
            "«خلق",
            "khul-qi",
            "khulq",
            "khul-qi nay-ko"
          ],
          [
            "نیکو.»",
            "nay-ko",
            "nay-ko",
            "khul-qi nay-ko"
          ]
        ]
      },
      {
        "say": "ham-chu-neen az aan haz-rat sal-lal-laa-hu a-lay-hi wa sal-lam su-aal shud: “faa-zil-ta-reen aa-maal chees?”",
        "mean": "He (peace and blessings of God be upon him) was also asked: “What is the best of deeds?”",
        "words": [
          [
            "همچنین",
            "ham-chu-neen",
            "ham-chu-neen"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن",
            "aan",
            "aan",
            "aan haz-rat"
          ],
          [
            "حضرت",
            "haz-rat",
            "haz-rat",
            "aan haz-rat"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "سؤال",
            "su-aal",
            "su-aal",
            "su-aal shud",
            "su-aal shu-dan"
          ],
          [
            "شد:",
            "shud",
            "shud",
            "su-aal shud",
            "shu-dan"
          ],
          [
            "«فاضل‌ترین",
            "faa-zil-ta-reen",
            "faa-zil-ta-reen",
            "faa-zil-ta-reen aa-maal"
          ],
          [
            "اعمال",
            "aa-maal",
            "aa-maal",
            "faa-zil-ta-reen aa-maal"
          ],
          [
            "چیست؟»",
            "chees",
            "chees"
          ]
        ]
      },
      {
        "say": "guf-tand: “khul-qi nay-ko.”",
        "mean": "He said: “Good character.”",
        "words": [
          [
            "گفتند:",
            "guf-tand",
            "guf-tand",
            "guf-tan"
          ],
          [
            "«خلق",
            "khul-qi",
            "khulq",
            "khul-qi nay-ko"
          ],
          [
            "نیکو.»",
            "nay-ko",
            "nay-ko",
            "khul-qi nay-ko"
          ]
        ]
      },
      {
        "say": "az haz-ra-ti bee-bee aa-yi-sha-yi sid-dee-qa ra-zee-yal-laa-hu an-haa dar-baa-ra-yi akh-laa-qi pay-gham-bar sal-lal-laa-hu a-lay-hi wa sal-lam jo-yaa shu-dand, dar paa-sukh guft: kaa-na khu-lu-qu-hu al-qur-aan.",
        "mean": "People asked Lady Aisha the Truthful (may God be pleased with her) about the Prophet’s character (peace and blessings of God be upon him), and in answer she said: “His character was the Quran.”",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "حضرت",
            "haz-ra-ti",
            "haz-rat",
            "haz-ra-ti bee-bee aa-yi-sha-yi sid-dee-qa"
          ],
          [
            "بی‌بی",
            "bee-bee",
            "bee-bee",
            "haz-ra-ti bee-bee aa-yi-sha-yi sid-dee-qa"
          ],
          [
            "عایشهٔ",
            "aa-yi-sha-yi",
            "aa-yi-sha",
            "haz-ra-ti bee-bee aa-yi-sha-yi sid-dee-qa"
          ],
          [
            "صدیقه",
            "sid-dee-qa",
            "sid-dee-qa",
            "haz-ra-ti bee-bee aa-yi-sha-yi sid-dee-qa"
          ],
          [
            "رضی‌الله‌عنها",
            "ra-zee-yal-laa-hu an-haa",
            "ra-zee-yal-laa-hu an-haa"
          ],
          [
            "دربارهٔ",
            "dar-baa-ra-yi",
            "dar-baa-ra-yi"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi pay-gham-bar"
          ],
          [
            "پیغمبر",
            "pay-gham-bar",
            "pay-gham-bar",
            "akh-laa-qi pay-gham-bar"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "جویا",
            "jo-yaa",
            "jo-yaa",
            "jo-yaa shu-dand",
            "jo-yaa shu-dan"
          ],
          [
            "شدند،",
            "shu-dand",
            "shu-dand",
            "jo-yaa shu-dand",
            "shu-dan"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar paa-sukh"
          ],
          [
            "پاسخ",
            "paa-sukh",
            "paa-sukh",
            "dar paa-sukh"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "کَانَ",
            "kaa-na",
            "kaa-na",
            "kaa-na khu-lu-qu-hu al-qur-aan"
          ],
          [
            "خُلُقُه",
            "khu-lu-qu-hu",
            "khu-lu-qu-hu",
            "kaa-na khu-lu-qu-hu al-qur-aan"
          ],
          [
            "القرآن.",
            "al-qur-aan",
            "al-qur-aan",
            "kaa-na khu-lu-qu-hu al-qur-aan"
          ]
        ]
      },
      {
        "say": "yaa-nee qur-aan, akh-laa-qi oo bood.",
        "mean": "That is, the Quran was his character.",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "قرآن،",
            "qur-aan",
            "qur-aan"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "بود.",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "yaa-nee har chi akh-laa-qi nay-ko dar qur-aan hast dar see-ra-ti pa-yaam-bar wu-jood daash-ta ast.",
        "mean": "That is, whatever good character there is in the Quran was there in the Prophet’s way of life.",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "هر",
            "har",
            "har",
            "har chi"
          ],
          [
            "چه",
            "chi",
            "chi",
            "har chi"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi nay-ko"
          ],
          [
            "نیکو",
            "nay-ko",
            "nay-ko",
            "akh-laa-qi nay-ko"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قرآن",
            "qur-aan",
            "qur-aan"
          ],
          [
            "هست",
            "hast",
            "hast",
            "bu-dan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سیرت",
            "see-ra-ti",
            "see-rat",
            "see-ra-ti pa-yaam-bar"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar",
            "see-ra-ti pa-yaam-bar"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood",
            "wu-jood daash-ta ast",
            "wu-jood daash-tan"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "wu-jood daash-ta ast",
            "daash-tan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "wu-jood daash-ta ast"
          ]
        ]
      },
      {
        "say": "shay-khi mus-li-hud-deen sa-dee chi zay-baa su-roo-da ast:",
        "mean": "How beautifully Sheikh Muslihuddin Sa’di has put it in a poem:",
        "words": [
          [
            "شیخ",
            "shay-khi",
            "shaykh",
            "shay-khi mus-li-hud-deen sa-dee"
          ],
          [
            "مصلح‌الدین",
            "mus-li-hud-deen",
            "mus-li-hud-deen",
            "shay-khi mus-li-hud-deen sa-dee"
          ],
          [
            "سعدی",
            "sa-dee",
            "sa-dee",
            "shay-khi mus-li-hud-deen sa-dee"
          ],
          [
            "چه",
            "chi",
            "chi",
            "chi zay-baa"
          ],
          [
            "زیبا",
            "zay-baa",
            "zay-baa",
            "chi zay-baa"
          ],
          [
            "سروده",
            "su-roo-da",
            "su-roo-da",
            "su-roo-da ast",
            "su-roo-dan"
          ],
          [
            "است:",
            "ast",
            "ast",
            "su-roo-da ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "khul-qi khush khalq raa shi-kaar ku-nad",
        "mean": "A pleasant nature wins people over;",
        "words": [
          [
            "خُلق",
            "khul-qi",
            "khulq",
            "khul-qi khush"
          ],
          [
            "خوش",
            "khush",
            "khush",
            "khul-qi khush"
          ],
          [
            "خَلق",
            "khalq",
            "khalq"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "شکار",
            "shi-kaar",
            "shi-kaar",
            "shi-kaar ku-nad",
            "shi-kaar kar-dan"
          ],
          [
            "کند",
            "ku-nad",
            "ku-nad",
            "shi-kaar ku-nad",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "aql bih-tar az een chi kaar ku-nad",
        "mean": "what could good sense do better than this?",
        "words": [
          [
            "عقل",
            "aql",
            "aql"
          ],
          [
            "بهتر",
            "bih-tar",
            "bih-tar",
            "bih-tar az een"
          ],
          [
            "از",
            "az",
            "az",
            "bih-tar az een"
          ],
          [
            "این",
            "een",
            "een",
            "bih-tar az een"
          ],
          [
            "چه",
            "chi",
            "chi",
            "chi kaar ku-nad"
          ],
          [
            "کار",
            "kaar",
            "kaar",
            "chi kaar ku-nad"
          ],
          [
            "کند",
            "ku-nad",
            "ku-nad",
            "chi kaar ku-nad",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "in-saa-ni mu-sul-maan wa sha-raa-fat-mand daa-raa-yi akh-laa-qi ha-mee-da ast wa dar khaa-na-waa-da, mak-tab wa jaa-mi-a baa ham-naw-aa-ni khaysh mu-taa-bi-qi ir-shaa-daa-ti i-laa-hee wa fa-raa-mee-ni sha-ree-a-ti ghar-raa-yi mu-ham-ma-dee sal-lal-laa-hu a-lay-hi wa sal-lam a-mal may-ku-nad wa dar ri-faah wa aa-baa-daa-nee-yi jaa-mi-a sa-heem may-sha-wad wa dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad wa az zish-tee wa bad-kho-yee may-par-hay-zad;",
        "mean": "An honorable Muslim person has praiseworthy character, and in the family, at school and in society acts toward fellow human beings according to God’s teachings and the commands of the shining religious law of Muhammad (peace and blessings of God be upon him), takes part in the well-being and prosperity of society, serves God’s creatures, and keeps away from ugly deeds and bad temper;",
        "words": [
          [
            "انسان",
            "in-saa-ni",
            "in-saan",
            "in-saa-ni mu-sul-maan"
          ],
          [
            "مسلمان",
            "mu-sul-maan",
            "mu-sul-maan",
            "in-saa-ni mu-sul-maan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرافتمند",
            "sha-raa-fat-mand",
            "sha-raa-fat-mand"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi ha-mee-da"
          ],
          [
            "حمیده",
            "ha-mee-da",
            "ha-mee-da",
            "akh-laa-qi ha-mee-da"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خانواده،",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "مکتب",
            "mak-tab",
            "mak-tab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "هم‌نوعان",
            "ham-naw-aa-ni",
            "ham-naw-aan",
            "ham-naw-aa-ni khaysh"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh",
            "ham-naw-aa-ni khaysh"
          ],
          [
            "مطابق",
            "mu-taa-bi-qi",
            "mu-taa-biq"
          ],
          [
            "ارشادات",
            "ir-shaa-daa-ti",
            "ir-shaa-daat",
            "ir-shaa-daa-ti i-laa-hee"
          ],
          [
            "الهی",
            "i-laa-hee",
            "i-laa-hee",
            "ir-shaa-daa-ti i-laa-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرامین",
            "fa-raa-mee-ni",
            "fa-raa-meen",
            "fa-raa-mee-ni sha-ree-at"
          ],
          [
            "شریعت",
            "sha-ree-a-ti",
            "sha-ree-at",
            "fa-raa-mee-ni sha-ree-at",
            "sha-ree-a-ti ghar-raa-yi mu-ham-ma-dee"
          ],
          [
            "غرای",
            "ghar-raa-yi",
            "ghar-raa",
            "sha-ree-a-ti ghar-raa-yi mu-ham-ma-dee"
          ],
          [
            "محمدی",
            "mu-ham-ma-dee",
            "mu-ham-ma-dee",
            "sha-ree-a-ti ghar-raa-yi mu-ham-ma-dee"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "عمل",
            "a-mal",
            "a-mal",
            "a-mal may-ku-nad",
            "a-mal kar-dan"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "a-mal may-ku-nad",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "رفاه",
            "ri-faah",
            "ri-faah",
            "ri-faah wa aa-baa-daa-nee-yi jaa-mi-a"
          ],
          [
            "و",
            "wa",
            "wa",
            "ri-faah wa aa-baa-daa-nee-yi jaa-mi-a"
          ],
          [
            "آبادانی",
            "aa-baa-daa-nee-yi",
            "aa-baa-daa-nee",
            "ri-faah wa aa-baa-daa-nee-yi jaa-mi-a"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a",
            "ri-faah wa aa-baa-daa-nee-yi jaa-mi-a"
          ],
          [
            "سهیم",
            "sa-heem",
            "sa-heem",
            "sa-heem may-sha-wad",
            "sa-heem shu-dan"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "sa-heem may-sha-wad",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad"
          ],
          [
            "خدمت",
            "khid-ma-ti",
            "khid-mat",
            "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad"
          ],
          [
            "مخلوق",
            "makh-loo-qi",
            "makh-looq",
            "makh-loo-qi khu-daa",
            "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "makh-loo-qi khu-daa",
            "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad",
            "qa-raar may-gee-rad",
            "qa-raar gi-rif-tan"
          ],
          [
            "می‌گیرد",
            "may-gee-rad",
            "may-gee-rad",
            "dar khid-ma-ti makh-loo-qi khu-daa qa-raar may-gee-rad",
            "qa-raar may-gee-rad",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "زشتی",
            "zish-tee",
            "zish-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بدخویی",
            "bad-kho-yee",
            "bad-kho-yee"
          ],
          [
            "می‌پرهیزد؛",
            "may-par-hay-zad",
            "may-par-hay-zad",
            "par-hay-zee-dan"
          ]
        ]
      },
      {
        "say": "zee-raa akh-laa-qi nay-kost ki jaa-mi-a wa af-raa-di aan raa ba sar man-zi-li sa-aa-dat may-ra-saa-nad.",
        "mean": "because it is good character that brings society and its members to happiness.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi nay-kost"
          ],
          [
            "نیکوست",
            "nay-kost",
            "nay-kost",
            "akh-laa-qi nay-kost",
            "nay-ko"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "جامعه",
            "jaa-mi-a",
            "jaa-mi-a"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "افراد",
            "af-raa-di",
            "af-raad",
            "af-raa-di aan"
          ],
          [
            "آن",
            "aan",
            "aan",
            "af-raa-di aan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba sar-man-zi-li sa-aa-dat may-ra-saa-nad"
          ],
          [
            "سر",
            "sar",
            "sar-man-zil",
            "ba sar-man-zi-li sa-aa-dat may-ra-saa-nad"
          ],
          [
            "منزل",
            "man-zi-li",
            "sar-man-zil",
            "ba sar-man-zi-li sa-aa-dat may-ra-saa-nad"
          ],
          [
            "سعادت",
            "sa-aa-dat",
            "sa-aa-dat",
            "ba sar-man-zi-li sa-aa-dat may-ra-saa-nad"
          ],
          [
            "می‌رساند.",
            "may-ra-saa-nad",
            "may-ra-saa-nad",
            "ba sar-man-zi-li sa-aa-dat may-ra-saa-nad",
            "ra-saan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maa baa-yad khul-qi nay-ko raa az pa-yaam-bar sal-lal-laa-hu a-lay-hi wa sal-lam bi-yaa-mo-zaym:",
        "mean": "We should learn good character from the Prophet (peace and blessings of God be upon him):",
        "words": [
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "خلق",
            "khul-qi",
            "khulq",
            "khul-qi nay-ko"
          ],
          [
            "نیکو",
            "nay-ko",
            "nay-ko",
            "khul-qi nay-ko"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "بیاموزیم:",
            "bi-yaa-mo-zaym",
            "bi-yaa-mo-zaym",
            "aa-mokh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "“pee-ra-za-ni ya-hoo-dee-yay bood pa-yaam-ba-ri khu-daa raa baa an-daakh-ta-ni khaa-kis-tar wa khas wa khaa-shaak a-zi-yat may-kard,",
        "mean": "“There was a Jewish old woman who kept harassing the Prophet of God by throwing ash and rubbish at him.",
        "words": [
          [
            "«پیرزن",
            "pee-ra-za-ni",
            "pee-ra-zan",
            "pee-ra-za-ni ya-hoo-dee-yay bood"
          ],
          [
            "یهودی‌یی",
            "ya-hoo-dee-yay",
            "ya-hoo-dee-yay",
            "pee-ra-za-ni ya-hoo-dee-yay bood",
            "ya-hoo-dee"
          ],
          [
            "بود",
            "bood",
            "bood",
            "pee-ra-za-ni ya-hoo-dee-yay bood",
            "bu-dan"
          ],
          [
            "پیامبر",
            "pa-yaam-ba-ri",
            "pa-yaam-bar",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "انداختن",
            "an-daakh-ta-ni",
            "an-daakh-tan"
          ],
          [
            "خاکستر",
            "khaa-kis-tar",
            "khaa-kis-tar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خس",
            "khas",
            "khas",
            "khas wa khaa-shaak"
          ],
          [
            "و",
            "wa",
            "wa",
            "khas wa khaa-shaak"
          ],
          [
            "خاشاک",
            "khaa-shaak",
            "khaa-shaak",
            "khas wa khaa-shaak"
          ],
          [
            "اذیت",
            "a-zi-yat",
            "a-zi-yat",
            "a-zi-yat may-kard",
            "a-zi-yat kar-dan"
          ],
          [
            "می‌کرد،",
            "may-kard",
            "may-kard",
            "a-zi-yat may-kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "chand ro-zay pa-yaam-bar sal-lal-laa-hu a-lay-hi wa sal-lam maw-ri-di aa-zaar wa a-zi-yat pee-ra-zan qa-raar na-gi-rif-tand,",
        "mean": "For a few days the Prophet (peace and blessings of God be upon him) was not troubled or harassed by the old woman;",
        "words": [
          [
            "چند",
            "chand",
            "chand",
            "chand ro-zay"
          ],
          [
            "روزی",
            "ro-zay",
            "ro-zay",
            "chand ro-zay",
            "roz"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar"
          ],
          [
            "(ص)",
            "sal-lal-laa-hu a-lay-hi wa sal-lam",
            "sal-lal-laa-hu a-lay-hi wa sal-lam"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand"
          ],
          [
            "آزار",
            "aa-zaar",
            "aa-zaar",
            "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand"
          ],
          [
            "و",
            "wa",
            "wa",
            "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand"
          ],
          [
            "اذیت",
            "a-zi-yat",
            "a-zi-yat",
            "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand"
          ],
          [
            "پیرزن",
            "pee-ra-zan",
            "pee-ra-zan"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand",
            "qa-raar na-gi-rif-tand",
            "qa-raar gi-rif-tan"
          ],
          [
            "نگرفتند،",
            "na-gi-rif-tand",
            "na-gi-rif-tand",
            "maw-ri-di aa-zaar wa a-zi-yat qa-raar na-gi-rif-tand",
            "qa-raar na-gi-rif-tand",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "pa-yaam-ba-ri khu-daa ta-aj-jub kar-dand wa az ah-li ma-hal-la jo-yaa-yi ah-waal shu-dand.",
        "mean": "the Prophet of God was surprised and asked the people of the neighborhood how she was.",
        "words": [
          [
            "پیامبر",
            "pa-yaam-ba-ri",
            "pa-yaam-bar",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "تعجب",
            "ta-aj-jub",
            "ta-aj-jub",
            "ta-aj-jub kar-dand",
            "ta-aj-jub kar-dan"
          ],
          [
            "کردند",
            "kar-dand",
            "kar-dand",
            "ta-aj-jub kar-dand",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اهل",
            "ah-li",
            "ahl",
            "ah-li ma-hal-la"
          ],
          [
            "محله",
            "ma-hal-la",
            "ma-hal-la",
            "ah-li ma-hal-la"
          ],
          [
            "جویای",
            "jo-yaa-yi",
            "jo-yaa",
            "jo-yaa-yi ah-waal shu-dand",
            "jo-yaa-yi ah-waal shu-dan"
          ],
          [
            "احوال",
            "ah-waal",
            "ah-waal",
            "jo-yaa-yi ah-waal shu-dand",
            "jo-yaa-yi ah-waal shu-dan"
          ],
          [
            "شدند.",
            "shu-dand",
            "shu-dand",
            "jo-yaa-yi ah-waal shu-dand",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "mar-dum guf-tand: aan pee-ra-zan bee-maar ast,",
        "mean": "People said: that old woman is sick.",
        "words": [
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "گفتند:",
            "guf-tand",
            "guf-tand",
            "guf-tan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "پیرزن",
            "pee-ra-zan",
            "pee-ra-zan"
          ],
          [
            "بیمار",
            "bee-maar",
            "bee-maar"
          ],
          [
            "است،",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "pa-yaam-ba-ri khu-daa ba i-yaa-da-ti way raft,",
        "mean": "The Prophet of God went to visit her in her sickness.",
        "words": [
          [
            "پیامبر",
            "pa-yaam-ba-ri",
            "pa-yaam-bar",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "pa-yaam-ba-ri khu-daa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba i-yaa-da-ti way raft"
          ],
          [
            "عیادت",
            "i-yaa-da-ti",
            "i-yaa-dat",
            "ba i-yaa-da-ti way raft"
          ],
          [
            "وی",
            "way",
            "way",
            "ba i-yaa-da-ti way raft"
          ],
          [
            "رفت،",
            "raft",
            "raft",
            "ba i-yaa-da-ti way raft",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "waq-tay pee-ra-zan chashm khud raa baaz kard, deed ki ha-maan pa-yaam-ba-ri khu-daa ast ki har roz baa reekh-ta-ni khaa-kis-tar wa khas wa khaa-shaak bar sar wa ro-yi mu-baa-rak-shaan oo raa a-zi-yat may-kard,",
        "mean": "When the old woman opened her eyes, she saw that it was that same Prophet of God whose blessed head and face she had been harassing every day by dumping ash and rubbish on them.",
        "words": [
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "پیرزن",
            "pee-ra-zan",
            "pee-ra-zan"
          ],
          [
            "چشم",
            "chashm",
            "chashm"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz kard",
            "baaz kar-dan"
          ],
          [
            "کرد،",
            "kard",
            "kard",
            "baaz kard",
            "kar-dan"
          ],
          [
            "دید",
            "deed",
            "deed",
            "dee-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan",
            "ha-maan pa-yaam-ba-ri khu-daa ast"
          ],
          [
            "پیامبر",
            "pa-yaam-ba-ri",
            "pa-yaam-bar",
            "ha-maan pa-yaam-ba-ri khu-daa ast"
          ],
          [
            "خدا",
            "khu-daa",
            "khu-daa",
            "ha-maan pa-yaam-ba-ri khu-daa ast"
          ],
          [
            "است",
            "ast",
            "ast",
            "ha-maan pa-yaam-ba-ri khu-daa ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "هر",
            "har",
            "har",
            "har roz"
          ],
          [
            "روز",
            "roz",
            "roz",
            "har roz"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "ریختن",
            "reekh-ta-ni",
            "reekh-tan"
          ],
          [
            "خاکستر",
            "khaa-kis-tar",
            "khaa-kis-tar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خس",
            "khas",
            "khas",
            "khas wa khaa-shaak"
          ],
          [
            "و",
            "wa",
            "wa",
            "khas wa khaa-shaak"
          ],
          [
            "خاشاک",
            "khaa-shaak",
            "khaa-shaak",
            "khas wa khaa-shaak"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "سر",
            "sar",
            "sar",
            "sar wa roy"
          ],
          [
            "و",
            "wa",
            "wa",
            "sar wa roy"
          ],
          [
            "روی",
            "ro-yi",
            "roy",
            "sar wa roy"
          ],
          [
            "مبارک‌شان",
            "mu-baa-rak-shaan",
            "mu-baa-rak-shaan",
            "mu-baa-rak"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "اذیت",
            "a-zi-yat",
            "a-zi-yat",
            "a-zi-yat may-kard",
            "a-zi-yat kar-dan"
          ],
          [
            "می‌کرد،",
            "may-kard",
            "may-kard",
            "a-zi-yat may-kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "ha-maan bood ki ka-li-ma-yi tay-yi-ba khaand wa mu-sul-maan shud.",
        "mean": "Right then she said the good word and became a Muslim.",
        "words": [
          [
            "همان",
            "ha-maan",
            "ha-maan",
            "ha-maan bood ki"
          ],
          [
            "بود",
            "bood",
            "bood",
            "ha-maan bood ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "ha-maan bood ki"
          ],
          [
            "کلمهٔ",
            "ka-li-ma-yi",
            "ka-li-ma",
            "ka-li-ma-yi tay-yi-ba"
          ],
          [
            "طیِّبه",
            "tay-yi-ba",
            "tay-yi-ba",
            "ka-li-ma-yi tay-yi-ba"
          ],
          [
            "خواند",
            "khaand",
            "khaand",
            "khaan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مسلمان",
            "mu-sul-maan",
            "mu-sul-maan",
            "mu-sul-maan shud",
            "mu-sul-maan shu-dan"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "mu-sul-maan shud",
            "mu-sul-maan shu-dan"
          ]
        ]
      },
      {
        "say": "een ast akh-laa-qi pa-yaam-bar ki hat-taa dush-ma-naan az dee-dan-shaan tah-ti ta-seer qa-raar gi-rif-ta ee-maan may-aa-war-dand.",
        "mean": "This is the character of the Prophet: even enemies, moved by seeing him, came to believe.",
        "words": [
          [
            "این",
            "een",
            "een",
            "een ast"
          ],
          [
            "است",
            "ast",
            "ast",
            "een ast"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq",
            "akh-laa-qi pa-yaam-bar"
          ],
          [
            "پیامبر",
            "pa-yaam-bar",
            "pa-yaam-bar",
            "akh-laa-qi pa-yaam-bar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "دشمنان",
            "dush-ma-naan",
            "dush-ma-naan",
            "dush-man"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دیدن‌شان",
            "dee-dan-shaan",
            "dee-dan-shaan",
            "dee-dan"
          ],
          [
            "تحت",
            "tah-ti",
            "tah-ti ta-seer",
            "tah-ti ta-seer qa-raar gi-rif-ta"
          ],
          [
            "تأثیر",
            "ta-seer",
            "ta-seer",
            "tah-ti ta-seer",
            "tah-ti ta-seer qa-raar gi-rif-ta"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "tah-ti ta-seer qa-raar gi-rif-ta",
            "qa-raar gi-rif-tan"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "tah-ti ta-seer qa-raar gi-rif-ta",
            "gi-rif-tan"
          ],
          [
            "ایمان",
            "ee-maan",
            "ee-maan",
            "ee-maan may-aa-war-dand",
            "ee-maan aa-war-dan"
          ],
          [
            "می‌آوردند.",
            "may-aa-war-dand",
            "may-aa-war-dand",
            "ee-maan may-aa-war-dand",
            "ee-maan aa-war-dan"
          ]
        ]
      }
    ]
  ]
});
