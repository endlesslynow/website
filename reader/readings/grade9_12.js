/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 12, book pages 72-73, PDF pages 79-80 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «۱۲۵۵ه.» is written «۱۲۵۵ ه.»; «۱۳۲۰ه.» is written «۱۳۲۰ ه.»; «امیرعبدالرحمان» is written «امیر عبدالرحمان»; «سیّدمشرب» is written «سیّد مشرب»; «سیدمشرب» is written «سید مشرب»; «مح‌ارم» is written «محارم»; «بسم االله» is written «بسم الله»; «ماکی» is written «ما کی»; «چوتصویر» is written «چو تصویر»; «رف‌ت» is written «رفت».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-12',
  group: 'Dari · grade 9',
  label: 'Lesson 12',
  name: "makh-fee-yi ba-dakh-shee",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_12.jpg',
    alt: "A pencil drawing of a young woman in a white headscarf."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_12.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "makh-fee":                               { fa: "مخفی", mean: "Makhfi, a pen name meaning hidden" },
    "ba-dakh-shee":                           { fa: "بدخشی", mean: "of Badakhshan" },
    "shaah-bay-gum":                          { fa: "شاه‌بیگم", mean: "Shah Begum" },
    "say-yi-da":                              { fa: "سیّده", mean: "Sayyida, a title for a woman descended from the Prophet" },
    "az":                                     { fa: "از", mean: "from, of" },
    "shaa-i-raan":                            { fa: "شاعران", mean: "poets" },
    "ma-roof":                                { fa: "معروف", mean: "famous" },
    "zu-baan":                                { fa: "زبان", mean: "language; tongue" },
    "da-ree":                                 { fa: "دری", mean: "Dari, the Persian of Afghanistan" },
    "dar":                                    { fa: "در", mean: "in" },
    "af-ghaa-nis-taan":                       { fa: "افغانستان", mean: "Afghanistan" },
    "bood":                                   { fa: "بود", mean: "was" },
    "bu-dan":                                 { fa: "بودن", mean: "to be" },
    "naam":                                   { fa: "نام", mean: "name" },
    "maw-soof":                               { fa: "موصوف", mean: "the person described, she or he" },
    "la-qa-bash":                             { fa: "لقبش", mean: "her title" },
    "wa":                                     { fa: "و", mean: "and" },
    "ta-khal-lus":                            { fa: "تخلص", mean: "pen name" },
    "ta-khal-lus may-kard":                   { fa: "تخلص می‌کرد", mean: "used as his pen name" },
    "ta-khal-lus kar-dan":                    { fa: "تخلص کردن", mean: "to use a pen name" },
    "may-kard":                               { fa: "می‌کرد", mean: "used to do, kept doing" },
    "kar-dan":                                { fa: "کردن", mean: "to do, to make" },
    "way":                                    { fa: "وی", mean: "he, she" },
    "saal":                                   { fa: "سال", mean: "year" },
    "yak ha-zaa-ru du-sa-du pan-jaa-hu panj": { fa: "۱۲۵۵", mean: "1255" },
    "hij-ree":                                { fa: "ه", mean: "short for hij-ree, of the Islamic calendar" },
    "hij-ree sham-see":                       { fa: "ه ش", mean: "Hijri Shamsi, of the solar calendar" },
    "sham-see":                               { fa: "ش", mean: "short for sham-see, solar (of the Afghan solar calendar)" },
    "shahr":                                  { fa: "شهر", mean: "city, town" },
    "khulm":                                  { fa: "خُلم", mean: "Khulm, a town in Samangan in northern Afghanistan" },
    "ta-wal-lud":                             { fa: "تولد", mean: "birth" },
    "ta-wal-lud gar-deed":                    { fa: "تولد گردید", mean: "was born" },
    "ta-wal-lud gar-dee-dan":                 { fa: "تولد گردیدن", mean: "to be born" },
    "gar-deed":                               { fa: "گردید", mean: "became" },
    "gar-dee-dan":                            { fa: "گردیدن", mean: "to become, to turn" },
    "ha-noz":                                 { fa: "هنوز", mean: "still, yet" },
    "du":                                     { fa: "دو", mean: "two" },
    "saa-la":                                 { fa: "ساله", mean: "years old" },
    "na-shu-da":                              { fa: "نشده", mean: "not become" },
    "shu-dan":                                { fa: "شدن", mean: "to become" },
    "ki":                                     { fa: "که", mean: "that, which, who" },
    "pa-dar":                                 { fa: "پدر", mean: "father" },
    "khud":                                   { fa: "خود", mean: "own; self" },
    "raa":                                    { fa: "را", mean: "marks the object of the verb" },
    "az dast daad":                           { fa: "از دست داد", mean: "lost" },
    "dast":                                   { fa: "دست", mean: "hand" },
    "daad":                                   { fa: "داد", mean: "gave" },
    "daa-dan":                                { fa: "دادن", mean: "to give" },
    "oo":                                     { fa: "او", mean: "he, she; his, her" },
    "chi-haar":                               { fa: "چهار", mean: "four" },
    "saa-la-gee":                             { fa: "ساله‌گی", mean: "the age of (chi-haar saa-la-gee, the age of four)" },
    "ba":                                     { fa: "به", mean: "to" },
    "ba-dakh-shaan":                          { fa: "بدخشان", mean: "Badakhshan, the mountain province of northeast Afghanistan" },
    "bar-gasht":                              { fa: "برگشت", mean: "went back" },
    "bar-gash-tan":                           { fa: "برگشتن", mean: "to go back, to return" },
    "choon":                                  { fa: "چون", mean: "like, as; when; because" },
    "a-meer":                                 { fa: "امیر", mean: "emir, prince; also part of names" },
    "ab-dur-rah-maan-khaan":                  { fa: "عبدالرحمان‌خان", mean: "Abdur Rahman Khan, emir of Afghanistan from 1880 to 1901" },
    "i-qaa-mat":                              { fa: "اقامت", mean: "staying, residence" },
    "daa-yim":                                { fa: "دایم", mean: "permanent" },
    "far-zan-daan":                           { fa: "فرزندان", mean: "children, sons" },
    "shaah":                                  { fa: "شاه", mean: "king, shah; part of names" },
    "shaah mah-moo-di aa-jiz":                { fa: "شاه محمود عاجز", mean: "Shah Mahmud Ajiz, a poet" },
    "mah-mood":                               { fa: "محمود", mean: "Mahmud" },
    "aa-jiz":                                 { fa: "عاجز", mean: "Ajiz, a pen name meaning helpless" },
    "beem":                                   { fa: "بیم", mean: "fear" },
    "beem daasht":                            { fa: "بیم داشت", mean: "feared" },
    "beem daash-tan":                         { fa: "بیم داشتن", mean: "to fear" },
    "daasht":                                 { fa: "داشت", mean: "had" },
    "daash-tan":                              { fa: "داشتن", mean: "to have" },
    "az ha-meen ro":                          { fa: "از همین رو", mean: "for this reason" },
    "ha-meen":                                { fa: "همین", mean: "this very, this same" },
    "ro":                                     { fa: "رو", mean: "face" },
    "aa-naan":                                { fa: "آنان", mean: "they, them" },
    "kaa-bul":                                { fa: "کابل", mean: "Kabul" },
    "tab-eed":                                { fa: "تبعید", mean: "exile" },
    "tab-eed na-mood":                        { fa: "تبعید نمود", mean: "exiled" },
    "tab-eed na-mo-dan":                      { fa: "تبعید نمودن", mean: "to exile" },
    "na-mood":                                { fa: "نمود", mean: "showed; did" },
    "na-mo-dan":                              { fa: "نمودن", mean: "to do; to show; to seem" },
    "baa":                                    { fa: "با", mean: "with" },
    "khaa-na-waa-da":                         { fa: "خانواده", mean: "family" },
    "khaysh":                                 { fa: "خویش", mean: "own; self" },
    "mud-dat":                                { fa: "مدت", mean: "period (mud-dat-i, for)" },
    "yak":                                    { fa: "یک", mean: "one, a" },
    "kun-duz":                                { fa: "کندز", mean: "Kunduz, a city in northern Afghanistan" },
    "baad#after":                             { fa: "بعد", say: "baad", mean: "after, then" },
    "yak ha-zaa-ru sih-sad":                  { fa: "۱۳۰۰", mean: "1300" },
    "fi-ris-taa-da":                          { fa: "فرستاده", mean: "sent" },
    "fi-ris-taa-da shud":                     { fa: "فرستاده شد", mean: "was sent" },
    "fi-ris-taa-dan":                         { fa: "فرستادن", mean: "to send" },
    "fi-ris-taa-da shu-dan":                  { fa: "فرستاده شدن", mean: "to be sent" },
    "shud":                                   { fa: "شد", mean: "became; was" },
    "sih":                                    { fa: "سه", mean: "three" },
    "maah":                                   { fa: "ماه", mean: "month; moon" },
    "kan-da-haar":                            { fa: "کندهار", mean: "Kandahar" },
    "tab-eed gar-deed":                       { fa: "تبعید گردید", mean: "was exiled" },
    "beest":                                  { fa: "بیست", mean: "twenty" },
    "khaa-na-waa-da-ash":                     { fa: "خانواده‌اش", mean: "her family" },
    "si-pa-ree":                              { fa: "سپری", mean: "spent, passed" },
    "si-pa-ree kard":                         { fa: "سپری کرد", mean: "spent" },
    "si-pa-ree kar-dan":                      { fa: "سپری کردن", mean: "to spend (time)" },
    "kard":                                   { fa: "کرد", mean: "did, made" },
    "ma-kaa-tib":                             { fa: "مکاتب", mean: "schools" },
    "khu-soo-see":                            { fa: "خصوصی", mean: "private" },
    "dee-nee":                                { fa: "دینی", mean: "religious" },
    "ba aa-mo-zish par-daakht":               { fa: "به آموزش پرداخت", mean: "took up her studies" },
    "aa-mo-zish":                             { fa: "آموزش", mean: "study, education" },
    "par-daakht":                             { fa: "پرداخت", mean: "took up" },
    "par-daakh-tan":                          { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "qur-aan":                                { fa: "قرآن", mean: "the Quran" },
    "ka-reem":                                { fa: "کریم", mean: "noble, holy (qur-aa-ni ka-reem, the Holy Quran)" },
    "panj":                                   { fa: "پنج", mean: "five" },
    "panj ki-taab":                           { fa: "پنج کتاب", mean: "the Five Books, an old schoolbook of religion and verse" },
    "ki-taab":                                { fa: "کتاب", mean: "book" },
    "haa-fiz":                                { fa: "حافظ", mean: "Hafiz, the poet of Shiraz; one who knows the Quran by heart" },
    "gu-lis-taan":                            { fa: "گلستان", mean: "the Gulistan, Sa'di's book of stories; a rose garden" },
    "bos-taan":                               { fa: "بوستان", mean: "the Bustan, Sa'di's book of poems; a garden" },
    "sa-dee":                                 { fa: "سعدی", mean: "Sa’di, the Persian poet from Shiraz who died about 1292" },
    "kul-li-yaat":                            { fa: "کلیات", mean: "collected works" },
    "bay-dil":                                { fa: "بیدل", mean: "Bedil, a Persian poet of India who died in 1720" },
    "kaa-fi-ya":                              { fa: "کافیه", mean: "the Kafiya, a book of Arabic grammar" },
    "mukh-ta-sar":                            { fa: "مختصر", mean: "the Mukhtasar, a short schoolbook; short" },
    "bil-sham-sa":                            { fa: "بالشمه", mean: "the Bi-l-shamsa, a schoolbook of logic" },
    "muf-ra-daat":                            { fa: "مفردات", mean: "subjects" },
    "ma-daa-ris":                             { fa: "مدارس", mean: "schools, religious schools" },
    "aan":                                    { fa: "آن", mean: "that" },
    "aan za-maan":                            { fa: "آن زمان", mean: "that time" },
    "za-maan":                                { fa: "زمان", mean: "time" },
    "shaa-mil":                               { fa: "شامل", mean: "including" },
    "fa-raa-gi-rift":                         { fa: "فراگرفت", mean: "learned (the book's note: learned)" },
    "fa-raa-gi-rif-tan":                      { fa: "فراگرفتن", mean: "to learn" },
    "chu-naan-ki":                            { fa: "چنان‌که", mean: "as, for example" },
    "khu-dash":                               { fa: "خودش", mean: "herself, himself" },
    "guf-ta":                                 { fa: "گفته", mean: "said" },
    "guf-tan":                                { fa: "گفتن", mean: "to say, to tell" },
    "ast":                                    { fa: "است", mean: "is" },
    "man":                                    { fa: "من", mean: "I" },
    "khurd-saa-lee":                          { fa: "خوردسالی", mean: "childhood" },
    "za-heen":                                { fa: "ذهین", mean: "clever" },
    "boo-dam":                                { fa: "بودم", mean: "I was" },
    "nazd":                                   { fa: "نزد", mean: "to, at the side of (a person)" },
    "bi-raa-da-ram":                          { fa: "برادرم", mean: "my brother" },
    "meer-mah-mood":                          { fa: "میرمحمود", mean: "Mir Mahmud" },
    "meer-mah-mood shaa-hi gham-geen":        { fa: "میرمحمود شاه غمگین", mean: "Mir Mahmud Shah Ghamgin, her brother, a poet" },
    "gham-geen":                              { fa: "غمگین", mean: "sad" },
    "shu-roo":                                { fa: "شروع", mean: "beginning" },
    "shu-roo ba dars kar-dam":                { fa: "شروع به درس کردم", mean: "began my lessons" },
    "dars":                                   { fa: "درس", mean: "lesson" },
    "kar-dam":                                { fa: "کردم", mean: "I did" },
    "ba paa-yaan ra-saa-nee-dam":             { fa: "به پایان رسانیدم", mean: "I finished" },
    "ba paa-yaan ra-saan-dan":                { fa: "به پایان رساندن", mean: "to bring to an end" },
    "paa-yaan":                               { fa: "پایان", mean: "end" },
    "ra-saa-nee-dam":                         { fa: "رسانیدم", mean: "I brought (to)" },
    "ra-saan-dan":                            { fa: "رساندن", mean: "to bring, to deliver" },
    "sa-waad":                                { fa: "سواد", mean: "reading and writing" },
    "sa-waad pay-daa na-mo-dam":              { fa: "سواد پیدا نمودم", mean: "I learned to read and write" },
    "pay-daa":                                { fa: "پیدا", mean: "found, visible" },
    "na-mo-dam":                              { fa: "نمودم", mean: "I did" },
    "yoo-suf":                                { fa: "یوسف", mean: "Yusuf, Joseph" },
    "yoo-suf zu-lay-khaa-yi jaa-mee":         { fa: "یوسف زلیخای جامی", mean: "Jami's Yusuf and Zulaykha, a long poem" },
    "zu-lay-khaa":                            { fa: "زلیخا", mean: "Zulaykha, the wife of Potiphar in the story of Joseph" },
    "jaa-mee":                                { fa: "جامی", mean: "Jami, a Persian poet of Herat who died in 1492" },
    "dars gi-rif-tam":                        { fa: "درس گرفتم", mean: "I studied" },
    "dars gi-rif-tan":                        { fa: "درس گرفتن", mean: "to study" },
    "gi-rif-tam":                             { fa: "گرفتم", mean: "I took" },
    "gi-rif-tan":                             { fa: "گرفتن", mean: "to take" },
    "ha-ma":                                  { fa: "همه", mean: "all, every" },
    "ki-taab-haa":                            { fa: "کتاب‌ها", mean: "books" },
    "a-da-bee":                               { fa: "ادبی", mean: "literary" },
    "khaan-dam":                              { fa: "خواندم", mean: "I read" },
    "khaan-dan":                              { fa: "خواندن", mean: "to read, to recite" },
    "yak ha-zaa-ru sih-sa-du beest":          { fa: "۱۳۲۰", mean: "1320" },
    "bi-raa-dar":                             { fa: "برادر", mean: "brother" },
    "mih-ra-baa-nash":                        { fa: "مهربانش", mean: "her kind" },
    "ya-gaa-na":                              { fa: "یگانه", mean: "only, sole" },
    "yaa-war":                                { fa: "یاور", mean: "helper" },
    "wa-faat":                                { fa: "وفات", mean: "death" },
    "ab-dur-rah-maan":                        { fa: "عبدالرحمان", mean: "Abdur Rahman" },
    "khaan":                                  { fa: "خان", mean: "khan, a title; part of names" },
    "ba qud-rat ra-see-da-ni":                { fa: "به قدرت رسیدن", mean: "coming to power" },
    "qud-rat":                                { fa: "قدرت", mean: "power" },
    "ra-see-dan":                             { fa: "رسیدن", mean: "to arrive, to reach" },
    "far-zan-daa-nash":                       { fa: "فرزندانش", mean: "his children, his sons" },
    "sar-na-wisht":                           { fa: "سرنوشت", mean: "fate" },
    "dee-ga-ray":                             { fa: "دیگری", mean: "someone else" },
    "pay-daa kard":                           { fa: "پیدا کرد", mean: "found" },
    "di-gar-goo-nee":                         { fa: "دگرگونی", mean: "change" },
    "mus-bi-tay":                             { fa: "مثبتی", mean: "positive, good (with -ay)" },
    "zin-da-gee":                             { fa: "زنده‌گی", mean: "life" },
    "aan-haa":                                { fa: "آن‌ها", mean: "they, them" },
    "pa-deed":                                { fa: "پدید", mean: "visible, appearing" },
    "pa-deed aa-mad":                         { fa: "پدید آمد", mean: "came about" },
    "aa-mad":                                 { fa: "آمد", mean: "came" },
    "aa-ma-dan":                              { fa: "آمدن", mean: "to come" },
    "saal-haa":                               { fa: "سال‌ها", mean: "years" },
    "yaa":                                    { fa: "یا", mean: "or" },
    "shaa-yad":                               { fa: "شاید", mean: "perhaps" },
    "say-yid":                                { fa: "سیّد", mean: "Sayyid, a title for a man descended from the Prophet" },
    "mash-rab":                               { fa: "مشرب", mean: "Mashrab" },
    "koo-da-kee":                             { fa: "کودکی", mean: "childhood" },
    "naam-zad":                               { fa: "نامزد", mean: "engaged (to be married)" },
    "dee-daar":                               { fa: "دیدار", mean: "meeting" },
    "dee-daar daash-ta":                      { fa: "دیدار داشته", mean: "had met" },
    "daash-ta":                               { fa: "داشته", mean: "had" },
    "dil":                                    { fa: "دل", mean: "heart" },
    "dil baakh-ta bood":                      { fa: "دل باخته بود", mean: "had lost her heart" },
    "dil baakh-tan":                          { fa: "دل باختن", mean: "to fall in love" },
    "baakh-ta":                               { fa: "باخته", mean: "lost" },
    "baakh-tan":                              { fa: "باختن", mean: "to lose; (with dil) to fall in love" },
    "har":                                    { fa: "هر", mean: "every" },
    "aa-tash":                                { fa: "آتش", mean: "fire" },
    "mu-hab-bat":                             { fa: "محبت", mean: "love, affection" },
    "yak-dee-gar":                            { fa: "یک‌دیگر", mean: "each other" },
    "may-sokh-tand":                          { fa: "می‌سوختند", mean: "burned" },
    "sokh-tan":                               { fa: "سوختن", mean: "to burn" },
    "haa-lat":                                { fa: "حالت", mean: "state" },
    "roo-hee":                                { fa: "روحی", mean: "of the spirit, mental" },
    "dard":                                   { fa: "درد", mean: "pain" },
    "ish-ti-yaaq":                            { fa: "اشتیاق", mean: "longing" },
    "di-gar-goon":                            { fa: "دگرگون", mean: "changed, upset" },
    "gar-dee-da":                             { fa: "گردیده", mean: "become" },
    "gham":                                   { fa: "غم", mean: "grief, sorrow" },
    "ta-wa-am":                               { fa: "توأم", mean: "together (ta-wa-am baa, together with)" },
    "ta-wa-am baa":                           { fa: "توأم با", mean: "together with" },
    "ta-as-sub":                              { fa: "تعصب", mean: "prejudice" },
    "sakht-gee-ree":                          { fa: "سخت‌گیری", mean: "strictness" },
    "khaa-na-waa-da-gee":                     { fa: "خانواده‌گی", mean: "of the family" },
    "ran-joor":                               { fa: "رنجور", mean: "ill, suffering" },
    "chu-neen":                               { fa: "چنین", mean: "so, like this" },
    "waz-ay":                                 { fa: "وضعی", mean: "a state (waz + -ay)" },
    "bur-dand":                               { fa: "بردند", mean: "took, carried" },
    "bur-dan":                                { fa: "بردن", mean: "to take away, to carry" },
    "bee-maa-ree-ash":                        { fa: "بیماری‌اش", mean: "his illness" },
    "aan-jaa":                                { fa: "آن‌جا", mean: "there" },
    "shid-dat":                               { fa: "شدت", mean: "strength, severity" },
    "shid-dat na-mood":                       { fa: "شدت نمود", mean: "grew worse" },
    "taa":                                    { fa: "تا", mean: "so that; until; to" },
    "taa een-ki":                             { fa: "تا این‌که", mean: "until" },
    "een-ki":                                 { fa: "این‌که", mean: "that (taa een-ki, until)" },
    "hij-raan":                               { fa: "هجران", mean: "separation" },
    "mah-boob":                               { fa: "محبوب", mean: "beloved" },
    "jaan":                                   { fa: "جان", mean: "soul, life" },
    "jaan ba jaan aa-fa-reen si-purd":        { fa: "جان به جان آفرین سپرد", mean: "died - literally gave his soul to the Creator of souls (the book's note: died)" },
    "aa-fa-reen":                             { fa: "آفرین", mean: "creator (jaan aa-fa-reen, the Creator of souls)" },
    "si-purd":                                { fa: "سپرد", mean: "gave over" },
    "si-pur-dan":                             { fa: "سپردن", mean: "to give over, to entrust" },
    "kha-bar":                                { fa: "خبر", mean: "news, word" },
    "marg":                                   { fa: "مرگ", mean: "death" },
    "ham-choon":                              { fa: "همچون", mean: "like" },
    "pay-kaan":                               { fa: "پیکان", mean: "arrowhead" },
    "qalb":                                   { fa: "قلب", mean: "heart" },
    "ni-shaa-na":                             { fa: "نشانه", mean: "target; sign" },
    "ni-shaa-na gi-rift":                     { fa: "نشانه گرفت", mean: "struck - literally took as its target" },
    "ni-shaa-na gi-rif-tan":                  { fa: "نشانه گرفتن", mean: "to aim at" },
    "gi-rift":                                { fa: "گرفت", mean: "took; began" },
    "paa-ra":                                 { fa: "پاره", mean: "torn; piece" },
    "paa-ra paa-ra kard":                     { fa: "پاره پاره کرد", mean: "tore to pieces" },
    "tan-haa-yee-haa":                        { fa: "تنهایی‌ها", mean: "lonelinesses" },
    "gham-haa-yash":                          { fa: "غم‌هایش", mean: "her sorrows" },
    "ru-baa-ee":                              { fa: "رباعی", mean: "quatrain, a poem of four half-lines" },
    "zay-baa":                                { fa: "زیبا", mean: "beautiful" },
    "su-roo-da":                              { fa: "سروده", mean: "written (a poem)" },
    "su-roo-dan":                             { fa: "سرودن", mean: "to write a poem" },
    "far-yaad":                               { fa: "فریاد", mean: "alas; a cry" },
    "ja-haan":                                { fa: "جهان", mean: "world" },
    "pur":                                    { fa: "پر", mean: "full" },
    "pur ar-maan":                            { fa: "پر ارمان", mean: "full of longing" },
    "ar-maan":                                { fa: "ارمان", mean: "longing, unfulfilled wish" },
    "raf-tam":                                { fa: "رفتم", mean: "I went, I left" },
    "raf-tan":                                { fa: "رفتن", mean: "to go" },
    "gul":                                    { fa: "گل", mean: "Gul; flower" },
    "na-gi-rif-ta":                           { fa: "نگرفته", mean: "not taken" },
    "zeen":                                   { fa: "زین", mean: "from this (za + een)" },
    "na-gu-shaa-da":                          { fa: "نگشاده", mean: "not having opened" },
    "gu-sho-dan":                             { fa: "گشودن", mean: "to open" },
    "la-bay":                                 { fa: "لبی", mean: "a lip (lab + -ay)" },
    "khan-da":                                { fa: "خنده", mean: "laughter" },
    "jawr":                                   { fa: "جور", mean: "cruelty" },
    "fa-lak":                                 { fa: "فلک", mean: "the sky, the heavens" },
    "daagh":                                  { fa: "داغ", mean: "scar, burn" },
    "dee-da":                                 { fa: "دیده", mean: "seen; eye" },
    "dee-dan":                                { fa: "دیدن", mean: "to see; seeing" },
    "gir-yaan":                               { fa: "گریان", mean: "weeping" },
    "if-fat":                                 { fa: "عفت", mean: "chastity" },
    "paak-daa-ma-nee":                        { fa: "پاکدامنی", mean: "purity" },
    "way-zha-yay":                            { fa: "ویژه‌یی", mean: "special (way-zha + -ay)" },
    "zees-ta":                                { fa: "زیسته", mean: "lived" },
    "zees-tan":                               { fa: "زیستن", mean: "to live" },
    "kaa-mi-lan":                             { fa: "کاملاً", mean: "fully, completely" },
    "hi-jaab":                                { fa: "حجاب", mean: "veil, modest covering" },
    "juz":                                    { fa: "جز", mean: "except" },
    "ma-haa-rim":                             { fa: "محارم", mean: "close family, the relatives before whom a woman may be unveiled" },
    "dee-ga-raan":                            { fa: "دیگران", mean: "others" },
    "ro may-po-sheed":                        { fa: "رو می‌پوشید", mean: "covered her face" },
    "may-po-sheed":                           { fa: "می‌پوشید", mean: "covered" },
    "po-shee-dan":                            { fa: "پوشیدن", mean: "putting on, wearing" },
    "een":                                    { fa: "این", mean: "this" },
    "daw-ra":                                 { fa: "دوره", mean: "period" },
    "baysh-tar":                              { fa: "بیشتر", mean: "more" },
    "ti-laa-wat":                             { fa: "تلاوت", mean: "reciting (the Quran)" },
    "a-daa":                                  { fa: "ادا", mean: "performing, saying" },
    "na-maaz-haa":                            { fa: "نمازها", mean: "prayers" },
    "panj-gaa-na":                            { fa: "پنجگانه", mean: "five daily" },
    "na-waa-fil":                             { fa: "نوافل", mean: "extra prayers" },
    "ro-za":                                  { fa: "روزه", mean: "fasting" },
    "i-baa-dat":                              { fa: "عبادت", mean: "worship" },
    "yak ha-zaa-ru sih-sa-du chi-hi-lu du":   { fa: "۱۳۴۲", mean: "1342" },
    "hash-taa-du panj":                       { fa: "۸۵", mean: "85" },
    "wa-faat na-mood":                        { fa: "وفات نمود", mean: "died" },
    "qar-ya":                                 { fa: "قریه", mean: "village" },
    "aa-baa-yee-ash":                         { fa: "آبایی‌اش", mean: "her ancestral" },
    "qa-ra":                                  { fa: "قره", mean: "Qara (in the name Qara Qozi)" },
    "qa-ra qo-zee-yi ar-go":                  { fa: "قره قوزی ارگو", mean: "Qara Qozi in Argu, a village in Badakhshan" },
    "qo-zee":                                 { fa: "قوزی", mean: "Qozi (in the name Qara Qozi)" },
    "ar-go":                                  { fa: "ارگو", mean: "Argu, a district of Badakhshan" },
    "dafn":                                   { fa: "دفن", mean: "burial" },
    "dafn gar-deed":                          { fa: "دفن گردید", mean: "was buried" },
    "dafn gar-dee-dan":                       { fa: "دفن گردیدن", mean: "to be buried" },
    "ak-noon":                                { fa: "اکنون", mean: "now" },
    "na-mo-na":                               { fa: "نمونه", mean: "sample, example" },
    "ka-laam":                                { fa: "کلام", mean: "speech; poetry" },
    "aash-naa":                               { fa: "آشنا", mean: "familiar, known" },
    "aash-naa may-sha-waym":                  { fa: "آشنا می‌شویم", mean: "let us get to know" },
    "may-sha-waym":                           { fa: "می‌شویم", mean: "we become" },
    "qaa-bil":                                { fa: "قابل", mean: "able, fit (qaa-bil-i is-ti-faa-da, usable)" },
    "qaa-bi-li yaad-aa-wa-ree ast":           { fa: "قابل یادآوری است", mean: "it is worth mentioning" },
    "yaad-aa-wa-ree":                         { fa: "یادآوری", mean: "mentioning, reminding" },
    "shaa-ir":                                { fa: "شاعر", mean: "poet" },
    "ba naa-mi":                              { fa: "به نام", mean: "by the name of, called" },
    "zay-bun-ni-saa":                         { fa: "زیب‌النساء", mean: "Zeb-un-Nisa, a poet, daughter of the emperor Aurangzeb" },
    "wu-jood":                                { fa: "وجود", mean: "existence" },
    "daa-rad":                                { fa: "دارد", mean: "has" },
    "dukh-tar":                               { fa: "دختر", mean: "daughter, girl" },
    "aw-rang":                                { fa: "اورنگ", mean: "throne" },
    "aw-rang zay-bi":                         { fa: "اورنگ زیب", mean: "Aurangzeb" },
    "zayb":                                   { fa: "زیب", mean: "Zeb (in the name Aurangzeb)" },
    "mu-gho-lee":                             { fa: "مغولی", mean: "Mughal" },
    "may-baa-shad":                           { fa: "می‌باشد", mean: "is" },
    "hamd":                                   { fa: "حمد", mean: "praise of God" },
    "bism":                                   { fa: "بسم", mean: "in the name of" },
    "bism al-laah":                           { fa: "بسم الله", mean: "in the name of God" },
    "al-laah":                                { fa: "الله", mean: "God (Allah)" },
    "ay":                                     { fa: "ای", mean: "O (when calling someone)" },
    "qaa-sir":                                { fa: "قاصر", mean: "too weak, falling short" },
    "si-faa-tat":                             { fa: "صفاتت", mean: "your qualities" },
    "maa":                                    { fa: "ما", mean: "we" },
    "kay":                                    { fa: "کی", mean: "how; when" },
    "dar kho-ri":                             { fa: "در خور", mean: "worthy of" },
    "khor":                                   { fa: "خور", mean: "(dar khor, worthy)" },
    "sa-naa":                                 { fa: "ثنا", mean: "praise" },
    "tu":                                     { fa: "تو", mean: "you (one person)" },
    "baa-shad":                               { fa: "باشد", mean: "be, should be" },
    "ba-yaan":                                { fa: "بیان", mean: "expression" },
    "zaat":                                   { fa: "ذات", mean: "being, essence" },
    "cho":                                    { fa: "چو", mean: "like (short for choon)" },
    "tas-weer":                               { fa: "تصویر", mean: "picture" },
    "may-ra-seem":                            { fa: "می‌رسیم", mean: "we reach" },
    "aash-kaar":                              { fa: "آشکار", mean: "revealed, open" },
    "na-gar-dad":                             { fa: "نگردد", mean: "does not go (around); does not become" },
    "ni-haan":                                { fa: "نهان", mean: "hidden" },
    "hirs":                                   { fa: "حرص", mean: "greed" },
    "daa-na":                                 { fa: "دانه", mean: "grain, bead" },
    "qa-fas":                                 { fa: "قفس", mean: "cage" },
    "has-teem":                               { fa: "هستیم", mean: "we are" },
    "war-na":                                 { fa: "ورنه", mean: "otherwise" },
    "awj":                                    { fa: "اوج", mean: "top, height" },
    "haft":                                   { fa: "هفت", mean: "seven" },
    "charkh":                                 { fa: "چرخ", mean: "wheel; the heavens" },
    "bu-land":                                { fa: "بلند", mean: "high, tall, loud" },
    "aa-shi-yaan":                            { fa: "آشیان", mean: "nest" },
    "nuh":                                    { fa: "نه", mean: "nine" },
    "laa-yiq":                                { fa: "لایق", mean: "worthy" },
    "bi-hish-teem":                           { fa: "بهشتیم", mean: "of paradise we are (bi-hisht + eem)" },
    "ja-heem":                                { fa: "جحیم", mean: "hell" },
    "chi":                                    { fa: "چه", mean: "what; how" },
    "eem":                                    { fa: "ایم", mean: "we are" },
    "umr":                                    { fa: "عمر", mean: "life, lifetime" },
    "a-zeez":                                 { fa: "عزیز", mean: "Aziz; dear" },
    "sar":                                    { fa: "سر", mean: "head" },
    "saw-daa":                                { fa: "سودا", mean: "dream, passion; trade" },
    "khaam":                                  { fa: "خام", mean: "raw, foolish" },
    "raft":                                   { fa: "رفت", mean: "went" },
    "ma-taa":                                 { fa: "متاع", mean: "goods" },
    "ya's":                                   { fa: "یأس", mean: "despair" },
    "sa-ra-sar":                              { fa: "سراسر", mean: "all over, entirely" },
    "du-kaan":                                { fa: "دکان", mean: "shop" },
    "ee-maan":                                { fa: "ایمان", mean: "faith" },
    "ma-kun":                                 { fa: "مکن", mean: "do not do" },
    "za":                                     { fa: "ز", mean: "from (short for az)" },
    "bay-chaa-ra-at":                         { fa: "بیچاره‌ات", mean: "your poor" },
    "da-reegh":                               { fa: "دریغ", mean: "regret" },
    "yaa rab":                                { fa: "یا رب", mean: "O Lord" },
    "rab":                                    { fa: "رب", mean: "Lord" },
    "da-may":                                 { fa: "دمی", mean: "a moment" },
    "may-ba-ree":                             { fa: "می‌بری", mean: "you take" },
    "tan":                                    { fa: "تن", mean: "body" },
    "ra-waan":                                { fa: "روان", mean: "soul; flowing" }
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
    "say": "makh-fee-yi ba-dakh-shee",
    "mean": "Makhfi Badakhshi",
    "words": [
      [
        "مخفی",
        "makh-fee-yi",
        "makh-fee"
      ],
      [
        "بدخشی",
        "ba-dakh-shee",
        "ba-dakh-shee"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "shaah-bay-gum say-yi-da makh-fee-yi ba-dakh-shee az shaa-i-raa-ni ma-roo-fi zu-baa-ni da-ree dar af-ghaa-nis-taan bood.",
        "mean": "Shah Begum Sayyida Makhfi Badakhshi was one of the famous poets of the Dari language in Afghanistan.",
        "words": [
          [
            "شاه‌بیگم",
            "shaah-bay-gum",
            "shaah-bay-gum"
          ],
          [
            "سیّده",
            "say-yi-da",
            "say-yi-da"
          ],
          [
            "مخفی",
            "makh-fee-yi",
            "makh-fee"
          ],
          [
            "بدخشی",
            "ba-dakh-shee",
            "ba-dakh-shee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شاعران",
            "shaa-i-raa-ni",
            "shaa-i-raan"
          ],
          [
            "معروف",
            "ma-roo-fi",
            "ma-roof"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "دری",
            "da-ree",
            "da-ree"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "افغانستان",
            "af-ghaa-nis-taan",
            "af-ghaa-nis-taan"
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
        "say": "naa-mi maw-soof, shaah-bay-gum, la-qa-bash say-yi-da wa makh-fee-yi ba-dakh-shee ta-khal-lus may-kard.",
        "mean": "Her name was Shah Begum, her title was Sayyida, and she used the pen name Makhfi Badakhshi.",
        "words": [
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "موصوف،",
            "maw-soof",
            "maw-soof"
          ],
          [
            "شاه‌بیگم،",
            "shaah-bay-gum",
            "shaah-bay-gum"
          ],
          [
            "لقبش",
            "la-qa-bash",
            "la-qa-bash"
          ],
          [
            "سیّده",
            "say-yi-da",
            "say-yi-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مخفی",
            "makh-fee-yi",
            "makh-fee"
          ],
          [
            "بدخشی",
            "ba-dakh-shee",
            "ba-dakh-shee"
          ],
          [
            "تخلص",
            "ta-khal-lus",
            "ta-khal-lus",
            "ta-khal-lus may-kard",
            "ta-khal-lus kar-dan"
          ],
          [
            "می‌کرد.",
            "may-kard",
            "may-kard",
            "ta-khal-lus may-kard",
            "kar-dan",
            "ta-khal-lus kar-dan"
          ]
        ]
      },
      {
        "say": "way dar saa-li yak ha-zaa-ru du-sa-du pan-jaa-hu panj hij-ree. sham-see. dar shah-ri khulm ta-wal-lud gar-deed.",
        "mean": "She was born in the year 1255 of the solar calendar (1876) in the town of Khulm.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۲۵۵",
            "yak ha-zaa-ru du-sa-du pan-jaa-hu panj",
            "yak ha-zaa-ru du-sa-du pan-jaa-hu panj"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree sham-see"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see",
            "hij-ree sham-see"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شهر",
            "shah-ri",
            "shahr"
          ],
          [
            "خُلم",
            "khulm",
            "khulm"
          ],
          [
            "تولد",
            "ta-wal-lud",
            "ta-wal-lud",
            "ta-wal-lud gar-deed",
            "ta-wal-lud gar-dee-dan"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "ta-wal-lud gar-deed",
            "gar-dee-dan",
            "ta-wal-lud gar-dee-dan"
          ]
        ]
      },
      {
        "say": "shaah-bay-gum ha-noz du saa-la na-shu-da bood ki pa-da-ri khud raa az dast daad.",
        "mean": "Shah Begum was not yet two years old when she lost her father.",
        "words": [
          [
            "شاه‌بیگم",
            "shaah-bay-gum",
            "shaah-bay-gum"
          ],
          [
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "ساله",
            "saa-la",
            "saa-la"
          ],
          [
            "نشده",
            "na-shu-da",
            "na-shu-da",
            "shu-dan"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پدر",
            "pa-da-ri",
            "pa-dar"
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
            "از",
            "az",
            "az",
            "az dast daad"
          ],
          [
            "دست",
            "dast",
            "dast",
            "az dast daad"
          ],
          [
            "داد.",
            "daad",
            "daad",
            "az dast daad",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "oo dar chi-haar saa-la-gee ba ba-dakh-shaan bar-gasht;",
        "mean": "At the age of four she went back to Badakhshan;",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "چهار",
            "chi-haar",
            "chi-haar"
          ],
          [
            "ساله‌گی",
            "saa-la-gee",
            "saa-la-gee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بدخشان",
            "ba-dakh-shaan",
            "ba-dakh-shaan"
          ],
          [
            "برگشت؛",
            "bar-gasht",
            "bar-gasht",
            "bar-gash-tan"
          ]
        ]
      },
      {
        "say": "choon a-meer ab-dur-rah-maan-khaan az i-qaa-ma-ti daa-yi-mi far-zan-daa-ni shaah mah-moo-di aa-jiz pa-da-ri makh-fee-yi ba-dakh-shee dar ba-dakh-shaan beem daasht;",
        "mean": "because Amir Abdur Rahman Khan feared the permanent stay in Badakhshan of the children of Shah Mahmud Ajiz, Makhfi Badakhshi's father,",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "عبدالرحمان‌خان",
            "ab-dur-rah-maan-khaan",
            "ab-dur-rah-maan-khaan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اقامت",
            "i-qaa-ma-ti",
            "i-qaa-mat"
          ],
          [
            "دایم",
            "daa-yi-mi",
            "daa-yim"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "شاه",
            "shaah",
            "shaah",
            "shaah mah-moo-di aa-jiz"
          ],
          [
            "محمود",
            "mah-moo-di",
            "mah-mood",
            "shaah mah-moo-di aa-jiz"
          ],
          [
            "عاجز",
            "aa-jiz",
            "aa-jiz",
            "shaah mah-moo-di aa-jiz"
          ],
          [
            "پدر",
            "pa-da-ri",
            "pa-dar"
          ],
          [
            "مخفی",
            "makh-fee-yi",
            "makh-fee"
          ],
          [
            "بدخشی",
            "ba-dakh-shee",
            "ba-dakh-shee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بدخشان",
            "ba-dakh-shaan",
            "ba-dakh-shaan"
          ],
          [
            "بیم",
            "beem",
            "beem",
            "beem daasht",
            "beem daash-tan"
          ],
          [
            "داشت؛",
            "daasht",
            "daasht",
            "beem daasht",
            "daash-tan",
            "beem daash-tan"
          ]
        ]
      },
      {
        "say": "az ha-meen ro aa-naan raa ba kaa-bul tab-eed na-mood wa makh-fee baa khaa-na-waa-da-yi khaysh mud-da-ti yak saal dar kun-duz wa baad dar saa-li yak ha-zaa-ru sih-sad hij-ree. sham-see. ba kaa-bul fi-ris-taa-da shud.",
        "mean": "for this reason he exiled them to Kabul, and Makhfi spent one year in Kunduz with her family, and then in 1300 (1921) she was sent to Kabul.",
        "words": [
          [
            "از",
            "az",
            "az",
            "az ha-meen ro"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen",
            "az ha-meen ro"
          ],
          [
            "رو",
            "ro",
            "ro",
            "az ha-meen ro"
          ],
          [
            "آنان",
            "aa-naan",
            "aa-naan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "تبعید",
            "tab-eed",
            "tab-eed",
            "tab-eed na-mood",
            "tab-eed na-mo-dan"
          ],
          [
            "نمود",
            "na-mood",
            "na-mood",
            "tab-eed na-mood",
            "na-mo-dan",
            "tab-eed na-mo-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "خانوادهٔ",
            "khaa-na-waa-da-yi",
            "khaa-na-waa-da"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "مدت",
            "mud-da-ti",
            "mud-dat"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "سال",
            "saal",
            "saal"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کندز",
            "kun-duz",
            "kun-duz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بعد",
            "baad",
            "baad#after"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۳۰۰",
            "yak ha-zaa-ru sih-sad",
            "yak ha-zaa-ru sih-sad"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree sham-see"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see",
            "hij-ree sham-see"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "فرستاده",
            "fi-ris-taa-da",
            "fi-ris-taa-da",
            "fi-ris-taa-da shud",
            "fi-ris-taa-dan",
            "fi-ris-taa-da shu-dan"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "fi-ris-taa-da shud",
            "shu-dan",
            "fi-ris-taa-da shu-dan"
          ]
        ]
      },
      {
        "say": "oo baad az sih maah i-qaa-mat dar kaa-bul ba kan-da-haar tab-eed gar-deed wa mud-da-ti beest saal raa baa khaa-na-waa-da-ash dar shah-ri kan-da-haar si-pa-ree kard.",
        "mean": "After three months in Kabul she was exiled to Kandahar, and she spent twenty years with her family in the city of Kandahar.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "بعد",
            "baad",
            "baad#after"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "ماه",
            "maah",
            "maah"
          ],
          [
            "اقامت",
            "i-qaa-mat",
            "i-qaa-mat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کندهار",
            "kan-da-haar",
            "kan-da-haar"
          ],
          [
            "تبعید",
            "tab-eed",
            "tab-eed",
            "tab-eed gar-deed"
          ],
          [
            "گردید",
            "gar-deed",
            "gar-deed",
            "tab-eed gar-deed",
            "gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مدت",
            "mud-da-ti",
            "mud-dat"
          ],
          [
            "بیست",
            "beest",
            "beest"
          ],
          [
            "سال",
            "saal",
            "saal"
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
            "خانواده‌اش",
            "khaa-na-waa-da-ash",
            "khaa-na-waa-da-ash"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شهر",
            "shah-ri",
            "shahr"
          ],
          [
            "کندهار",
            "kan-da-haar",
            "kan-da-haar"
          ],
          [
            "سپری",
            "si-pa-ree",
            "si-pa-ree",
            "si-pa-ree kard",
            "si-pa-ree kar-dan"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "si-pa-ree kard",
            "kar-dan",
            "si-pa-ree kar-dan"
          ]
        ]
      },
      {
        "say": "makh-fee dar ma-kaa-ti-bi khu-soo-see-yi dee-nee ba aa-mo-zish par-daakht wa qur-aa-ni ka-reem, panj ki-taab, haa-fiz, gu-lis-taan wa bos-taa-ni sa-dee, kul-li-yaa-ti bay-dil, kaa-fi-ya, mukh-ta-sar wa bil-sham-sa raa ki dar muf-ra-daa-ti ma-daa-ri-si khu-soo-see-yi aan za-maan shaa-mil bood. fa-raa-gi-rift;",
        "mean": "Makhfi studied in private religious schools, and she learned the Holy Quran, the Five Books, Hafiz, Sa'di's Gulistan and Bustan, the collected poems of Bedil, the Kafiya, the Mukhtasar and the Bi-l-shamsa, which were among the subjects of the private schools of that time,",
        "words": [
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مکاتب",
            "ma-kaa-ti-bi",
            "ma-kaa-tib"
          ],
          [
            "خصوصی",
            "khu-soo-see-yi",
            "khu-soo-see"
          ],
          [
            "دینی",
            "dee-nee",
            "dee-nee"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba aa-mo-zish par-daakht"
          ],
          [
            "آموزش",
            "aa-mo-zish",
            "aa-mo-zish",
            "ba aa-mo-zish par-daakht"
          ],
          [
            "پرداخت",
            "par-daakht",
            "par-daakht",
            "ba aa-mo-zish par-daakht",
            "par-daakh-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قرآن",
            "qur-aa-ni",
            "qur-aan"
          ],
          [
            "کریم،",
            "ka-reem",
            "ka-reem"
          ],
          [
            "پنج",
            "panj",
            "panj",
            "panj ki-taab"
          ],
          [
            "کتاب،",
            "ki-taab",
            "ki-taab",
            "panj ki-taab"
          ],
          [
            "حافظ،",
            "haa-fiz",
            "haa-fiz"
          ],
          [
            "گلستان",
            "gu-lis-taan",
            "gu-lis-taan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بوستان",
            "bos-taa-ni",
            "bos-taan"
          ],
          [
            "سعدی،",
            "sa-dee",
            "sa-dee"
          ],
          [
            "کلیات",
            "kul-li-yaa-ti",
            "kul-li-yaat"
          ],
          [
            "بیدل،",
            "bay-dil",
            "bay-dil"
          ],
          [
            "کافیه،",
            "kaa-fi-ya",
            "kaa-fi-ya"
          ],
          [
            "مختصر",
            "mukh-ta-sar",
            "mukh-ta-sar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بالشمه",
            "bil-sham-sa",
            "bil-sham-sa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مفردات",
            "muf-ra-daa-ti",
            "muf-ra-daat"
          ],
          [
            "مدارس",
            "ma-daa-ri-si",
            "ma-daa-ris"
          ],
          [
            "خصوصی",
            "khu-soo-see-yi",
            "khu-soo-see"
          ],
          [
            "آن",
            "aan",
            "aan",
            "aan za-maan"
          ],
          [
            "زمان",
            "za-maan",
            "za-maan",
            "aan za-maan"
          ],
          [
            "شامل",
            "shaa-mil",
            "shaa-mil"
          ],
          [
            "بود.",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "فراگرفت؛",
            "fa-raa-gi-rift",
            "fa-raa-gi-rift",
            "fa-raa-gi-rif-tan"
          ]
        ]
      },
      {
        "say": "chu-naan-ki khu-dash guf-ta ast: “man dar khurd-saa-lee za-heen boo-dam; naz-di bi-raa-da-ram meer-mah-mood shaa-hi gham-geen shu-roo ba dars kar-dam; qur-aa-ni ka-reem raa dar sih maah ba paa-yaan ra-saa-nee-dam; sa-waad pay-daa na-mo-dam; yoo-suf zu-lay-khaa-yi jaa-mee wa gu-lis-taan raa dars gi-rif-tam wa baad ha-ma ki-taab-haa-yi a-da-bee raa khaan-dam”",
        "mean": "as she herself said: “As a child I was clever; I began my lessons with my brother Mir Mahmud Shah Ghamgin; I finished the Holy Quran in three months; I learned to read and write; I studied Jami's Yusuf and Zulaykha and the Gulistan, and then I read all the literary books.”",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "خودش",
            "khu-dash",
            "khu-dash"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-tan"
          ],
          [
            "است:",
            "ast",
            "ast"
          ],
          [
            "«من",
            "man",
            "man"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خوردسالی",
            "khurd-saa-lee",
            "khurd-saa-lee"
          ],
          [
            "ذهین",
            "za-heen",
            "za-heen"
          ],
          [
            "بودم؛",
            "boo-dam",
            "boo-dam",
            "bu-dan"
          ],
          [
            "نزد",
            "naz-di",
            "nazd"
          ],
          [
            "برادرم",
            "bi-raa-da-ram",
            "bi-raa-da-ram"
          ],
          [
            "میرمحمود",
            "meer-mah-mood",
            "meer-mah-mood",
            "meer-mah-mood shaa-hi gham-geen"
          ],
          [
            "شاه",
            "shaa-hi",
            "shaah",
            "meer-mah-mood shaa-hi gham-geen"
          ],
          [
            "غمگین",
            "gham-geen",
            "gham-geen",
            "meer-mah-mood shaa-hi gham-geen"
          ],
          [
            "شروع",
            "shu-roo",
            "shu-roo",
            "shu-roo ba dars kar-dam"
          ],
          [
            "به",
            "ba",
            "ba",
            "shu-roo ba dars kar-dam"
          ],
          [
            "درس",
            "dars",
            "dars",
            "shu-roo ba dars kar-dam"
          ],
          [
            "کردم؛",
            "kar-dam",
            "kar-dam",
            "shu-roo ba dars kar-dam",
            "kar-dan"
          ],
          [
            "قرآن",
            "qur-aa-ni",
            "qur-aan"
          ],
          [
            "کریم",
            "ka-reem",
            "ka-reem"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "ماه",
            "maah",
            "maah"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba paa-yaan ra-saa-nee-dam",
            "ba paa-yaan ra-saan-dan"
          ],
          [
            "پایان",
            "paa-yaan",
            "paa-yaan",
            "ba paa-yaan ra-saa-nee-dam",
            "ba paa-yaan ra-saan-dan"
          ],
          [
            "رسانیدم؛",
            "ra-saa-nee-dam",
            "ra-saa-nee-dam",
            "ba paa-yaan ra-saa-nee-dam",
            "ra-saan-dan",
            "ba paa-yaan ra-saan-dan"
          ],
          [
            "سواد",
            "sa-waad",
            "sa-waad",
            "sa-waad pay-daa na-mo-dam"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "sa-waad pay-daa na-mo-dam"
          ],
          [
            "نمودم؛",
            "na-mo-dam",
            "na-mo-dam",
            "sa-waad pay-daa na-mo-dam",
            "na-mo-dan"
          ],
          [
            "یوسف",
            "yoo-suf",
            "yoo-suf",
            "yoo-suf zu-lay-khaa-yi jaa-mee"
          ],
          [
            "زلیخای",
            "zu-lay-khaa-yi",
            "zu-lay-khaa",
            "yoo-suf zu-lay-khaa-yi jaa-mee"
          ],
          [
            "جامی",
            "jaa-mee",
            "jaa-mee",
            "yoo-suf zu-lay-khaa-yi jaa-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گلستان",
            "gu-lis-taan",
            "gu-lis-taan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "درس",
            "dars",
            "dars",
            "dars gi-rif-tam",
            "dars gi-rif-tan"
          ],
          [
            "گرفتم",
            "gi-rif-tam",
            "gi-rif-tam",
            "dars gi-rif-tam",
            "gi-rif-tan",
            "dars gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بعد",
            "baad",
            "baad#after"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "کتاب‌های",
            "ki-taab-haa-yi",
            "ki-taab-haa"
          ],
          [
            "ادبی",
            "a-da-bee",
            "a-da-bee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "خواندم»",
            "khaan-dam",
            "khaan-dam",
            "khaan-dan"
          ]
        ]
      },
      {
        "say": "makh-fee dar saa-li yak ha-zaa-ru sih-sa-du beest hij-ree. sham-see. bi-raa-da-ri mih-ra-baa-nash raa ki ya-gaa-na yaa-wa-ri way bood az dast daad.",
        "mean": "In 1320 (1941) Makhfi lost her kind brother, who was her only helper.",
        "words": [
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۳۲۰",
            "yak ha-zaa-ru sih-sa-du beest",
            "yak ha-zaa-ru sih-sa-du beest"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree sham-see"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see",
            "hij-ree sham-see"
          ],
          [
            "برادر",
            "bi-raa-da-ri",
            "bi-raa-dar"
          ],
          [
            "مهربانش",
            "mih-ra-baa-nash",
            "mih-ra-baa-nash"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "یگانه",
            "ya-gaa-na",
            "ya-gaa-na"
          ],
          [
            "یاور",
            "yaa-wa-ri",
            "yaa-war"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "از",
            "az",
            "az",
            "az dast daad"
          ],
          [
            "دست",
            "dast",
            "dast",
            "az dast daad"
          ],
          [
            "داد.",
            "daad",
            "daad",
            "az dast daad",
            "daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "khaa-na-waa-da-yi makh-fee baa wa-faa-ti a-meer ab-dur-rah-maan khaan wa ba qud-rat ra-see-da-ni far-zan-daa-nash sar-na-wish-ti dee-ga-ray pay-daa kard wa di-gar-goo-nee-yi mus-bi-tay dar zin-da-gee-yi aan-haa pa-deed aa-mad.",
        "mean": "With the death of Amir Abdur Rahman Khan and the coming to power of his sons, Makhfi's family met a different fate, and a good change came into their lives.",
        "words": [
          [
            "خانوادهٔ",
            "khaa-na-waa-da-yi",
            "khaa-na-waa-da"
          ],
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "وفات",
            "wa-faa-ti",
            "wa-faat"
          ],
          [
            "امیر",
            "a-meer",
            "a-meer"
          ],
          [
            "عبدالرحمان",
            "ab-dur-rah-maan",
            "ab-dur-rah-maan"
          ],
          [
            "خان",
            "khaan",
            "khaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba qud-rat ra-see-da-ni"
          ],
          [
            "قدرت",
            "qud-rat",
            "qud-rat",
            "ba qud-rat ra-see-da-ni"
          ],
          [
            "رسیدن",
            "ra-see-da-ni",
            "ra-see-dan",
            "ba qud-rat ra-see-da-ni"
          ],
          [
            "فرزندانش",
            "far-zan-daa-nash",
            "far-zan-daa-nash"
          ],
          [
            "سرنوشت",
            "sar-na-wish-ti",
            "sar-na-wisht"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "pay-daa kard"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "pay-daa kard",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دگرگونی",
            "di-gar-goo-nee-yi",
            "di-gar-goo-nee"
          ],
          [
            "مثبتی",
            "mus-bi-tay",
            "mus-bi-tay"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "پدید",
            "pa-deed",
            "pa-deed",
            "pa-deed aa-mad"
          ],
          [
            "آمد.",
            "aa-mad",
            "aa-mad",
            "pa-deed aa-mad",
            "aa-ma-dan"
          ]
        ]
      },
      {
        "say": "say-yi-da makh-fee-yi ba-dakh-shee dar saal-haa-yi i-qaa-mat dar kaa-bul wa yaa shaa-yad dar kan-da-haar bood ki baa say-yid mash-rab ki az koo-da-kee baa oo naam-zad bood, dee-daar daash-ta wa ba way dil baakh-ta bood,",
        "mean": "It was during her years in Kabul, or perhaps in Kandahar, that Sayyida Makhfi Badakhshi met Sayyid Mashrab, to whom she had been engaged since childhood, and lost her heart to him;",
        "words": [
          [
            "سیّده",
            "say-yi-da",
            "say-yi-da"
          ],
          [
            "مخفی",
            "makh-fee-yi",
            "makh-fee"
          ],
          [
            "بدخشی",
            "ba-dakh-shee",
            "ba-dakh-shee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سال‌های",
            "saal-haa-yi",
            "saal-haa"
          ],
          [
            "اقامت",
            "i-qaa-mat",
            "i-qaa-mat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "شاید",
            "shaa-yad",
            "shaa-yad"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کندهار",
            "kan-da-haar",
            "kan-da-haar"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "سیّد",
            "say-yid",
            "say-yid"
          ],
          [
            "مشرب",
            "mash-rab",
            "mash-rab"
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
            "کودکی",
            "koo-da-kee",
            "koo-da-kee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نامزد",
            "naam-zad",
            "naam-zad"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "دیدار",
            "dee-daar",
            "dee-daar",
            "dee-daar daash-ta"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "dee-daar daash-ta",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "دل",
            "dil",
            "dil",
            "dil baakh-ta bood",
            "dil baakh-tan"
          ],
          [
            "باخته",
            "baakh-ta",
            "baakh-ta",
            "dil baakh-ta bood",
            "baakh-tan",
            "dil baakh-tan"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "dil baakh-ta bood",
            "bu-dan",
            "dil baakh-tan"
          ]
        ]
      },
      {
        "say": "har du dar aa-ta-shi mu-hab-ba-ti yak-dee-gar may-sokh-tand wa haa-la-ti roo-hee-yi say-yid mash-rab az dar-di ish-ti-yaa-qi makh-fee di-gar-goon gar-dee-da wa gha-mi mu-hab-bat ta-wa-am baa ta-as-sub wa sakht-gee-ree-yi khaa-na-waa-da-gee, oo raa ran-joor kard",
        "mean": "both burned in the fire of love for each other; Sayyid Mashrab's state of mind was shaken by the pain of longing for Makhfi, and the grief of love, together with his family's prejudice and strictness, made him ill.",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آتش",
            "aa-ta-shi",
            "aa-tash"
          ],
          [
            "محبت",
            "mu-hab-ba-ti",
            "mu-hab-bat"
          ],
          [
            "یکدیگر",
            "yak-dee-gar",
            "yak-dee-gar"
          ],
          [
            "می‌سوختند",
            "may-sokh-tand",
            "may-sokh-tand",
            "sokh-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حالت",
            "haa-la-ti",
            "haa-lat"
          ],
          [
            "روحی",
            "roo-hee-yi",
            "roo-hee"
          ],
          [
            "سید",
            "say-yid",
            "say-yid"
          ],
          [
            "مشرب",
            "mash-rab",
            "mash-rab"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "درد",
            "dar-di",
            "dard"
          ],
          [
            "اشتیاق",
            "ish-ti-yaa-qi",
            "ish-ti-yaaq"
          ],
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "دگرگون",
            "di-gar-goon",
            "di-gar-goon"
          ],
          [
            "گردیده",
            "gar-dee-da",
            "gar-dee-da",
            "gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غم",
            "gha-mi",
            "gham"
          ],
          [
            "محبت",
            "mu-hab-bat",
            "mu-hab-bat"
          ],
          [
            "توأم",
            "ta-wa-am",
            "ta-wa-am",
            "ta-wa-am baa"
          ],
          [
            "با",
            "baa",
            "baa",
            "ta-wa-am baa"
          ],
          [
            "تعصب",
            "ta-as-sub",
            "ta-as-sub"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سخت‌گیری",
            "sakht-gee-ree-yi",
            "sakht-gee-ree"
          ],
          [
            "خانواده‌گی،",
            "khaa-na-waa-da-gee",
            "khaa-na-waa-da-gee"
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
            "رنجور",
            "ran-joor",
            "ran-joor"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "baa chu-neen waz-ay say-yid mash-rab raa ba ba-dakh-shaan bur-dand.",
        "mean": "In this state they took Sayyid Mashrab to Badakhshan.",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "وضعی",
            "waz-ay",
            "waz-ay"
          ],
          [
            "سید",
            "say-yid",
            "say-yid"
          ],
          [
            "مشرب",
            "mash-rab",
            "mash-rab"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بدخشان",
            "ba-dakh-shaan",
            "ba-dakh-shaan"
          ],
          [
            "بردند.",
            "bur-dand",
            "bur-dand",
            "bur-dan"
          ]
        ]
      },
      {
        "say": "bee-maa-ree-ash dar aan-jaa shid-dat na-mood taa een-ki az shid-da-ti ish-ti-yaaq wa hij-raa-ni mah-boob, jaan ba jaan aa-fa-reen si-purd.",
        "mean": "There his illness grew worse, until, from the strength of his longing and separation from his beloved, he gave his soul to its Creator.",
        "words": [
          [
            "بیماری‌اش",
            "bee-maa-ree-ash",
            "bee-maa-ree-ash"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "شدت",
            "shid-dat",
            "shid-dat",
            "shid-dat na-mood"
          ],
          [
            "نمود",
            "na-mood",
            "na-mood",
            "shid-dat na-mood",
            "na-mo-dan"
          ],
          [
            "تا",
            "taa",
            "taa",
            "taa een-ki"
          ],
          [
            "این‌که",
            "een-ki",
            "een-ki",
            "taa een-ki"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شدت",
            "shid-da-ti",
            "shid-dat"
          ],
          [
            "اشتیاق",
            "ish-ti-yaaq",
            "ish-ti-yaaq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هجران",
            "hij-raa-ni",
            "hij-raan"
          ],
          [
            "محبوب،",
            "mah-boob",
            "mah-boob"
          ],
          [
            "جان",
            "jaan",
            "jaan",
            "jaan ba jaan aa-fa-reen si-purd"
          ],
          [
            "به",
            "ba",
            "ba",
            "jaan ba jaan aa-fa-reen si-purd"
          ],
          [
            "جان",
            "jaan",
            "jaan",
            "jaan ba jaan aa-fa-reen si-purd"
          ],
          [
            "آفرین",
            "aa-fa-reen",
            "aa-fa-reen",
            "jaan ba jaan aa-fa-reen si-purd"
          ],
          [
            "سپرد.",
            "si-purd",
            "si-purd",
            "jaan ba jaan aa-fa-reen si-purd",
            "si-pur-dan"
          ]
        ]
      },
      {
        "say": "kha-ba-ri mar-gi say-yid mash-rab ham-choon pay-kaan, qal-bi makh-fee raa ni-shaa-na gi-rift wa paa-ra paa-ra kard.",
        "mean": "The news of Sayyid Mashrab's death struck Makhfi's heart like an arrowhead and tore it to pieces.",
        "words": [
          [
            "خبر",
            "kha-ba-ri",
            "kha-bar"
          ],
          [
            "مرگ",
            "mar-gi",
            "marg"
          ],
          [
            "سید",
            "say-yid",
            "say-yid"
          ],
          [
            "مشرب",
            "mash-rab",
            "mash-rab"
          ],
          [
            "همچون",
            "ham-choon",
            "ham-choon"
          ],
          [
            "پیکان،",
            "pay-kaan",
            "pay-kaan"
          ],
          [
            "قلب",
            "qal-bi",
            "qalb"
          ],
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نشانه",
            "ni-shaa-na",
            "ni-shaa-na",
            "ni-shaa-na gi-rift",
            "ni-shaa-na gi-rif-tan"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "ni-shaa-na gi-rift",
            "gi-rif-tan",
            "ni-shaa-na gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پاره",
            "paa-ra",
            "paa-ra",
            "paa-ra paa-ra kard"
          ],
          [
            "پاره",
            "paa-ra",
            "paa-ra",
            "paa-ra paa-ra kard"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "paa-ra paa-ra kard",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "makh-fee tan-haa-yee-haa wa gham-haa-yash raa dar yak ru-baa-ee-yi zay-baa su-roo-da ast:",
        "mean": "Makhfi put her loneliness and sorrows into a beautiful quatrain:",
        "words": [
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "تنهایی‌ها",
            "tan-haa-yee-haa",
            "tan-haa-yee-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غم‌هایش",
            "gham-haa-yash",
            "gham-haa-yash"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "رباعی",
            "ru-baa-ee-yi",
            "ru-baa-ee"
          ],
          [
            "زیبا",
            "zay-baa",
            "zay-baa"
          ],
          [
            "سروده",
            "su-roo-da",
            "su-roo-da",
            "su-roo-dan"
          ],
          [
            "است:",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "far-yaad ki az ja-haa-ni pur ar-maan raf-tam",
        "mean": "Alas, I have left this world full of longing;",
        "words": [
          [
            "فریاد",
            "far-yaad",
            "far-yaad"
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
            "جهان",
            "ja-haa-ni",
            "ja-haan"
          ],
          [
            "پر",
            "pur",
            "pur",
            "pur ar-maan"
          ],
          [
            "ارمان",
            "ar-maan",
            "ar-maan",
            "pur ar-maan"
          ],
          [
            "رفتم",
            "raf-tam",
            "raf-tam",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "yak gul na-gi-rif-ta wa zeen gu-lis-taan raf-tam",
        "mean": "I have left this garden without picking a single flower.",
        "words": [
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "گل",
            "gul",
            "gul"
          ],
          [
            "نگرفته",
            "na-gi-rif-ta",
            "na-gi-rif-ta",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زین",
            "zeen",
            "zeen"
          ],
          [
            "گلستان",
            "gu-lis-taan",
            "gu-lis-taan"
          ],
          [
            "رفتم",
            "raf-tam",
            "raf-tam",
            "raf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "na-gu-shaa-da la-bay ba khan-da az jaw-ri fa-lak",
        "mean": "Without once opening my lips to laugh, because of the cruelty of heaven,",
        "words": [
          [
            "نگشاده",
            "na-gu-shaa-da",
            "na-gu-shaa-da",
            "gu-sho-dan"
          ],
          [
            "لبی",
            "la-bay",
            "la-bay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خنده",
            "khan-da",
            "khan-da"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جور",
            "jaw-ri",
            "jawr"
          ],
          [
            "فلک",
            "fa-lak",
            "fa-lak"
          ]
        ]
      },
      {
        "say": "baa daa-ghi dil wa dee-da-yi gir-yaan raf-tam",
        "mean": "I have left with a scarred heart and weeping eyes.",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "داغ",
            "daa-ghi",
            "daagh"
          ],
          [
            "دل",
            "dil",
            "dil"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیدهٔ",
            "dee-da-yi",
            "dee-da",
            "dee-dan"
          ],
          [
            "گریان",
            "gir-yaan",
            "gir-yaan"
          ],
          [
            "رفتم",
            "raf-tam",
            "raf-tam",
            "raf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "makh-fee dar zin-da-gee-yi khud baa if-fat wa paak-daa-ma-nee-yi way-zha-yay zees-ta ast.",
        "mean": "Makhfi lived her life with a special chastity and purity.",
        "words": [
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زنده‌گی",
            "zin-da-gee-yi",
            "zin-da-gee"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "عفت",
            "if-fat",
            "if-fat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پاکدامنی",
            "paak-daa-ma-nee-yi",
            "paak-daa-ma-nee"
          ],
          [
            "ویژه‌یی",
            "way-zha-yay",
            "way-zha-yay"
          ],
          [
            "زیسته",
            "zees-ta",
            "zees-ta",
            "zees-tan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "way kaa-mi-lan dar hi-jaab bood.",
        "mean": "She was fully veiled.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "کاملاً",
            "kaa-mi-lan",
            "kaa-mi-lan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "حجاب",
            "hi-jaab",
            "hi-jaab"
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
        "say": "oo juz az ma-haa-ri-mi khaysh, az dee-ga-raan ro may-po-sheed.",
        "mean": "She covered her face from everyone except her close family.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "جز",
            "juz",
            "juz"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "محارم",
            "ma-haa-ri-mi",
            "ma-haa-rim"
          ],
          [
            "خویش،",
            "khaysh",
            "khaysh"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "رو",
            "ro",
            "ro",
            "ro may-po-sheed"
          ],
          [
            "می‌پوشید.",
            "may-po-sheed",
            "may-po-sheed",
            "ro may-po-sheed",
            "po-shee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "makh-fee een daw-ra raa baysh-tar baa ti-laa-wa-ti qur-aan, a-daa-yi na-maaz-haa-yi panj-gaa-na, na-waa-fil, ro-za wa i-baa-dat si-pa-ree may-kard.",
        "mean": "Makhfi spent this period mostly reciting the Quran, saying the five daily prayers and extra prayers, fasting and worship.",
        "words": [
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دوره",
            "daw-ra",
            "daw-ra"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تلاوت",
            "ti-laa-wa-ti",
            "ti-laa-wat"
          ],
          [
            "قرآن،",
            "qur-aan",
            "qur-aan"
          ],
          [
            "ادای",
            "a-daa-yi",
            "a-daa"
          ],
          [
            "نمازهای",
            "na-maaz-haa-yi",
            "na-maaz-haa"
          ],
          [
            "پنجگانه،",
            "panj-gaa-na",
            "panj-gaa-na"
          ],
          [
            "نوافل،",
            "na-waa-fil",
            "na-waa-fil"
          ],
          [
            "روزه",
            "ro-za",
            "ro-za"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عبادت",
            "i-baa-dat",
            "i-baa-dat"
          ],
          [
            "سپری",
            "si-pa-ree",
            "si-pa-ree"
          ],
          [
            "می‌کرد.",
            "may-kard",
            "may-kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "shaah-bay-gum say-yi-da makh-fee-yi ba-dakh-shee ba saa-li yak ha-zaa-ru sih-sa-du chi-hi-lu du hij-ree. sham-see. dar hash-taa-du panj saa-la-gee dar ba-dakh-shaan wa-faat na-mood wa dar qar-ya-yi aa-baa-yee-ash “qa-ra qo-zee-yi ar-go” dafn gar-deed;",
        "mean": "Shah Begum Sayyida Makhfi Badakhshi died in Badakhshan in 1342 (1963), at the age of 85, and was buried in her ancestral village, Qara Qozi in Argu;",
        "words": [
          [
            "شاه‌بیگم",
            "shaah-bay-gum",
            "shaah-bay-gum"
          ],
          [
            "سیّده",
            "say-yi-da",
            "say-yi-da"
          ],
          [
            "مخفی",
            "makh-fee-yi",
            "makh-fee"
          ],
          [
            "بدخشی",
            "ba-dakh-shee",
            "ba-dakh-shee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۳۴۲",
            "yak ha-zaa-ru sih-sa-du chi-hi-lu du",
            "yak ha-zaa-ru sih-sa-du chi-hi-lu du"
          ],
          [
            "ه.",
            "hij-ree",
            "hij-ree",
            "hij-ree sham-see"
          ],
          [
            "ش.",
            "sham-see",
            "sham-see",
            "hij-ree sham-see"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "۸۵",
            "hash-taa-du panj",
            "hash-taa-du panj"
          ],
          [
            "ساله‌گی",
            "saa-la-gee",
            "saa-la-gee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بدخشان",
            "ba-dakh-shaan",
            "ba-dakh-shaan"
          ],
          [
            "وفات",
            "wa-faat",
            "wa-faat",
            "wa-faat na-mood"
          ],
          [
            "نمود",
            "na-mood",
            "na-mood",
            "wa-faat na-mood",
            "na-mo-dan"
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
            "قریهٔ",
            "qar-ya-yi",
            "qar-ya"
          ],
          [
            "آبایی‌اش",
            "aa-baa-yee-ash",
            "aa-baa-yee-ash"
          ],
          [
            "«قره",
            "qa-ra",
            "qa-ra",
            "qa-ra qo-zee-yi ar-go"
          ],
          [
            "قوزی",
            "qo-zee-yi",
            "qo-zee",
            "qa-ra qo-zee-yi ar-go"
          ],
          [
            "ارگو»",
            "ar-go",
            "ar-go",
            "qa-ra qo-zee-yi ar-go"
          ],
          [
            "دفن",
            "dafn",
            "dafn",
            "dafn gar-deed",
            "dafn gar-dee-dan"
          ],
          [
            "گردید؛",
            "gar-deed",
            "gar-deed",
            "dafn gar-deed",
            "gar-dee-dan",
            "dafn gar-dee-dan"
          ]
        ]
      },
      {
        "say": "ak-noon baa na-mo-na-yi ka-laa-mi makh-fee-yi ba-dakh-shee aash-naa may-sha-waym.",
        "mean": "now let us get to know a sample of Makhfi Badakhshi's poetry.",
        "words": [
          [
            "اکنون",
            "ak-noon",
            "ak-noon"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "نمونهٔ",
            "na-mo-na-yi",
            "na-mo-na"
          ],
          [
            "کلام",
            "ka-laa-mi",
            "ka-laam"
          ],
          [
            "مخفی",
            "makh-fee-yi",
            "makh-fee"
          ],
          [
            "بدخشی",
            "ba-dakh-shee",
            "ba-dakh-shee"
          ],
          [
            "آشنا",
            "aash-naa",
            "aash-naa",
            "aash-naa may-sha-waym"
          ],
          [
            "می‌شویم.",
            "may-sha-waym",
            "may-sha-waym",
            "aash-naa may-sha-waym",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "qaa-bi-li yaad-aa-wa-ree ast ki shaa-i-ri dee-ga-ray dar zu-baa-ni da-ree ba naa-mi zay-bun-ni-saa makh-fee wu-jood daa-rad ki dukh-ta-ri aw-rang zay-bi shaa-hi mu-gho-lee may-baa-shad.",
        "mean": "It is worth mentioning that there is another poet in the Dari language named Zeb-un-Nisa Makhfi, who was the daughter of Aurangzeb, the Mughal emperor.",
        "words": [
          [
            "قابل",
            "qaa-bi-li",
            "qaa-bil",
            "qaa-bi-li yaad-aa-wa-ree ast"
          ],
          [
            "یادآوری",
            "yaad-aa-wa-ree",
            "yaad-aa-wa-ree",
            "qaa-bi-li yaad-aa-wa-ree ast"
          ],
          [
            "است",
            "ast",
            "ast",
            "qaa-bi-li yaad-aa-wa-ree ast"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "شاعر",
            "shaa-i-ri",
            "shaa-ir"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "دری",
            "da-ree",
            "da-ree"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba naa-mi"
          ],
          [
            "نام",
            "naa-mi",
            "naam",
            "ba naa-mi"
          ],
          [
            "زیب‌النساء",
            "zay-bun-ni-saa",
            "zay-bun-ni-saa"
          ],
          [
            "مخفی",
            "makh-fee",
            "makh-fee"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دختر",
            "dukh-ta-ri",
            "dukh-tar"
          ],
          [
            "اورنگ",
            "aw-rang",
            "aw-rang",
            "aw-rang zay-bi"
          ],
          [
            "زیب",
            "zay-bi",
            "zayb",
            "aw-rang zay-bi"
          ],
          [
            "شاه",
            "shaa-hi",
            "shaah"
          ],
          [
            "مغولی",
            "mu-gho-lee",
            "mu-gho-lee"
          ],
          [
            "می‌باشد.",
            "may-baa-shad",
            "may-baa-shad",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "hamd wa bism al-laah",
        "mean": "Praise of God, and In the Name of God",
        "words": [
          [
            "حمد",
            "hamd",
            "hamd"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بسم",
            "bism",
            "bism",
            "bism al-laah"
          ],
          [
            "الله",
            "al-laah",
            "al-laah",
            "bism al-laah"
          ]
        ]
      }
    ],
    [
      {
        "say": "ay qaa-sir az a-daa-yi si-faa-tat zu-baa-ni maa",
        "mean": "O You, whose qualities our tongue is too weak to tell,",
        "words": [
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "قاصر",
            "qaa-sir",
            "qaa-sir"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ادای",
            "a-daa-yi",
            "a-daa"
          ],
          [
            "صفاتت",
            "si-faa-tat",
            "si-faa-tat"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      },
      {
        "say": "kay dar kho-ri sa-naa-yi tu baa-shad ba-yaa-ni maa",
        "mean": "how could our words be worthy of Your praise?",
        "words": [
          [
            "کی",
            "kay",
            "kay"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar kho-ri"
          ],
          [
            "خور",
            "kho-ri",
            "khor",
            "dar kho-ri"
          ],
          [
            "ثنای",
            "sa-naa-yi",
            "sa-naa"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "بیان",
            "ba-yaa-ni",
            "ba-yaan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      }
    ],
    [
      {
        "say": "maa kay ba zaa-ti khaysh cho tas-weer may-ra-seem",
        "mean": "How could we, like a picture, reach our own being,",
        "words": [
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "کی",
            "kay",
            "kay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ذات",
            "zaa-ti",
            "zaat"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "چو",
            "cho",
            "cho"
          ],
          [
            "تصویر",
            "tas-weer",
            "tas-weer"
          ],
          [
            "می‌رسیم",
            "may-ra-seem",
            "may-ra-seem",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "taa az tu aash-kaar na-gar-dad ni-haa-ni maa",
        "mean": "unless You reveal what is hidden in us?",
        "words": [
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "آشکار",
            "aash-kaar",
            "aash-kaar"
          ],
          [
            "نگردد",
            "na-gar-dad",
            "na-gar-dad",
            "gar-dee-dan"
          ],
          [
            "نهان",
            "ni-haa-ni",
            "ni-haan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      }
    ],
    [
      {
        "say": "az hir-si daa-na dar qa-fas has-teem war-na bood",
        "mean": "Out of greed for grain we are in a cage; otherwise",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "حرص",
            "hir-si",
            "hirs"
          ],
          [
            "دانه",
            "daa-na",
            "daa-na"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قفس",
            "qa-fas",
            "qa-fas"
          ],
          [
            "هستیم",
            "has-teem",
            "has-teem",
            "bu-dan"
          ],
          [
            "ورنه",
            "war-na",
            "war-na"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "dar aw-ji haft char-khi bu-land aa-shi-yaa-ni maa",
        "mean": "our nest would be high at the top of the seven heavens.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اوج",
            "aw-ji",
            "awj"
          ],
          [
            "هفت",
            "haft",
            "haft"
          ],
          [
            "چرخ",
            "char-khi",
            "charkh"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land"
          ],
          [
            "آشیان",
            "aa-shi-yaa-ni",
            "aa-shi-yaan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      }
    ],
    [
      {
        "say": "nuh laa-yi-qi bi-hish-teem wa nuh dar kho-ri ja-heem",
        "mean": "We are worthy neither of paradise nor of hell;",
        "words": [
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "لایق",
            "laa-yi-qi",
            "laa-yiq"
          ],
          [
            "بهشتیم",
            "bi-hish-teem",
            "bi-hish-teem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar kho-ri"
          ],
          [
            "خور",
            "kho-ri",
            "khor",
            "dar kho-ri"
          ],
          [
            "جحیم",
            "ja-heem",
            "ja-heem"
          ]
        ]
      },
      {
        "say": "maa khud chi eem taa chi bood een wa aa-ni maa",
        "mean": "what are we ourselves, that this or that should be ours?",
        "words": [
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "ایم",
            "eem",
            "eem"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن",
            "aa-ni",
            "aan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      }
    ],
    [
      {
        "say": "um-ri a-zeez dar sa-ri saw-daa-yi khaam raft",
        "mean": "Our dear life went chasing foolish dreams;",
        "words": [
          [
            "عمر",
            "um-ri",
            "umr"
          ],
          [
            "عزیز",
            "a-zeez",
            "a-zeez"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سر",
            "sa-ri",
            "sar"
          ],
          [
            "سودای",
            "saw-daa-yi",
            "saw-daa"
          ],
          [
            "خام",
            "khaam",
            "khaam"
          ],
          [
            "رفت",
            "raft",
            "raft",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "daa-rad ma-taa-yi ya's sa-ra-sar du-kaa-ni maa",
        "mean": "our whole shop holds nothing but the goods of despair.",
        "words": [
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "متاع",
            "ma-taa-yi",
            "ma-taa"
          ],
          [
            "یأس",
            "ya's",
            "ya's"
          ],
          [
            "سراسر",
            "sa-ra-sar",
            "sa-ra-sar"
          ],
          [
            "دکان",
            "du-kaa-ni",
            "du-kaan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      }
    ],
    [
      {
        "say": "ee-maan ma-kun za “makh-fee” bay-chaa-ra-at da-reegh",
        "mean": "Do not keep faith from Your poor Makhfi,",
        "words": [
          [
            "ایمان",
            "ee-maan",
            "ee-maan"
          ],
          [
            "مکن",
            "ma-kun",
            "ma-kun",
            "kar-dan"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "«مخفی»",
            "makh-fee",
            "makh-fee"
          ],
          [
            "بیچاره‌ات",
            "bay-chaa-ra-at",
            "bay-chaa-ra-at"
          ],
          [
            "دریغ",
            "da-reegh",
            "da-reegh"
          ]
        ]
      },
      {
        "say": "yaa rab da-may ki may-ba-ree az tan ra-waa-ni maa",
        "mean": "O Lord, at the moment You take the soul from our body.",
        "words": [
          [
            "یا",
            "yaa",
            "yaa",
            "yaa rab"
          ],
          [
            "رب",
            "rab",
            "rab",
            "yaa rab"
          ],
          [
            "دمی",
            "da-may",
            "da-may"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "می‌بری",
            "may-ba-ree",
            "may-ba-ree",
            "bur-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "تن",
            "tan",
            "tan"
          ],
          [
            "روان",
            "ra-waa-ni",
            "ra-waan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ]
        ]
      }
    ]
  ]
});
