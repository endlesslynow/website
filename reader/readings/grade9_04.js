/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 4, book pages 20-23, PDF pages 27-30 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «اوجولا نگاه» is written «او جولانگاه»; «کار زارهای» is written «کارزارهای»; «عمر و برادرش» is written «عمرو برادرش»; «و زیدن» is written «وزیدن»; «بر زن» is written «برزن»; «تا زنده» is written «تازنده»; «رستا خیز» is written «رستاخیز»; «نا خدای» is written «ناخدای»; «نا قوسی» is written «ناقوسی»; «با میان» is written «بامیان»; «بکورهٔ» is written «به کورهٔ»; «رود بار» is written «رودبار»; «نا بیناست» is written «نابیناست».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-04',
  group: 'Dari · grade 9',
  label: 'Lesson 4',
  name: "far-zan-di roy-gar",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_04.jpg',
    alt: "A painting of a pale birch trunk and bare branches in a snowy landscape."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_04.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "far-zand":                                    { fa: "فرزند", mean: "child, son" },
    "roy-gar":                                     { fa: "رویگر", mean: "coppersmith" },
    "koo-ra":                                      { fa: "کوره", mean: "furnace" },
    "aa-tash":                                     { fa: "آتش", mean: "fire" },
    "shu-la":                                      { fa: "شعله", mean: "flame" },
    "shu-la war":                                  { fa: "شعله ور", mean: "aflame, blazing" },
    "war":                                         { fa: "ور", mean: "-bearing, full of (shu-la war, aflame)" },
    "ast":                                         { fa: "است", mean: "is" },
    "wa":                                          { fa: "و", mean: "and" },
    "chash-maan":                                  { fa: "چشمان", mean: "eyes" },
    "si-yaa":                                      { fa: "سیاه", mean: "black" },
    "raq-see-dan":                                 { fa: "رقصیدن", mean: "dancing; to dance" },
    "zu-baan-haa":                                 { fa: "زبان‌ها", mean: "tongues; languages" },
    "so-zaan":                                     { fa: "سوزان", mean: "burning" },
    "aan":                                         { fa: "آن", mean: "that" },
    "raa":                                         { fa: "را", mean: "marks the object of the verb" },
    "may-ni-ga-rad":                               { fa: "می‌نگرد", mean: "looks, gazes" },
    "ni-ga-ris-tan":                               { fa: "نگریستن", mean: "to look, to gaze" },
    "duk-ka":                                      { fa: "دکه", mean: "shop, stall" },
    "taa-reek":                                    { fa: "تاریک", mean: "dark" },
    "az":                                          { fa: "از", mean: "from, of" },
    "fu-rogh":                                     { fa: "فروغ", mean: "glow, light" },
    "gul-goon":                                    { fa: "گلگون", mean: "rosy, red as a rose" },
    "gul-goon may-gar-dad":                        { fa: "گلگون می‌گردد", mean: "turns rosy" },
    "gul-goon gar-dee-dan":                        { fa: "گلگون گردیدن", mean: "to turn rosy red" },
    "may-gar-dad":                                 { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":                                 { fa: "گردیدن", mean: "to become, to turn" },
    "ha-seer":                                     { fa: "حصیر", mean: "reed mat" },
    "baa":                                         { fa: "با", mean: "with" },
    "koo-za":                                      { fa: "کوزه", mean: "water jug" },
    "aab":                                         { fa: "آب", mean: "water" },
    "dar":                                         { fa: "در", mean: "in" },
    "kunj":                                        { fa: "کنج", mean: "corner" },
    "kul-ba":                                      { fa: "کلبه", mean: "hut" },
    "mu-haq-qar":                                  { fa: "محقر", mean: "humble, poor" },
    "jil-wa":                                      { fa: "جلوه", mean: "display, splendor" },
    "jil-wa may-di-had":                           { fa: "جلوه می‌دهد", mean: "shows, lights up" },
    "jil-wa daa-dan":                              { fa: "جلوه دادن", mean: "to show, to make appear" },
    "may-di-had":                                  { fa: "می‌دهد", mean: "gives" },
    "daa-dan":                                     { fa: "دادن", mean: "to give" },
    "dar#door":                                    { fa: "در", say: "dar", mean: "door" },
    "bas-ta":                                      { fa: "بسته", mean: "closed; has closed" },
    "bas-tan":                                     { fa: "بستن", mean: "to close, to tie" },
    "am-maa":                                      { fa: "اما", mean: "but" },
    "khud":                                        { fa: "خود", mean: "own; self" },
    "bas-ta na-may-ta-waa-nad":                    { fa: "بسته نمی‌تواند", mean: "cannot close - Dari puts the -a form of a verb before “can”" },
    "na-may-ta-waa-nad":                           { fa: "نمی‌تواند", mean: "cannot" },
    "ta-waa-nis-tan":                              { fa: "توانستن", mean: "to be able, can" },
    "khaab":                                       { fa: "خواب", mean: "sleep" },
    "een":                                         { fa: "این", mean: "this" },
    "zaa-wi-ya":                                   { fa: "زاویه", mean: "corner, angle" },
    "nee-ma":                                      { fa: "نیمه", mean: "half" },
    "nee-ma way-raan":                             { fa: "نیمه ویران", mean: "half-ruined" },
    "way-raan":                                    { fa: "ویران", mean: "ruined" },
    "na-may-aa-yad":                               { fa: "نمی‌آید", mean: "does not come" },
    "aa-ma-dan":                                   { fa: "آمدن", mean: "to come" },
    "way":                                         { fa: "وی", mean: "he, she" },
    "an-day-sha-haa":                              { fa: "اندیشه‌ها", mean: "thoughts" },
    "door":                                        { fa: "دور", mean: "far" },
    "door wa da-raaz":                             { fa: "دور و دراز", mean: "long, far-reaching" },
    "da-raaz":                                     { fa: "دراز", mean: "long" },
    "na-may-ra-haa-nad":                           { fa: "نمی‌رهاند", mean: "does not free" },
    "ra-haan-dan":                                 { fa: "رهاندن", mean: "to free, to rescue" },
    "ro":                                          { fa: "رو", mean: "face" },
    "ro ba ro-yi":                                 { fa: "رو به روی", mean: "facing, opposite" },
    "ba":                                          { fa: "به", mean: "to" },
    "roy":                                         { fa: "روی", mean: "face" },
    "bar":                                         { fa: "بر", mean: "on, upon" },
    "suf-fa":                                      { fa: "صفه", mean: "raised platform, bench" },
    "bu-lan-day":                                  { fa: "بلندی", mean: "high (bu-land + -ay, a: “a high …”)" },
    "ni-shas-ta":                                  { fa: "نشسته", mean: "sitting, seated" },
    "ni-shas-tan":                                 { fa: "نشستن", mean: "to sit" },
    "paa-haa":                                     { fa: "پاها", mean: "feet, legs" },
    "aa-waykh-ta":                                 { fa: "آویخته", mean: "hung down" },
    "aa-waykh-tan":                                { fa: "آویختن", mean: "to hang" },
    "dast-haa":                                    { fa: "دست‌ها", mean: "hands" },
    "khas-ta":                                     { fa: "خسته", mean: "tired" },
    "pur":                                         { fa: "پر", mean: "full" },
    "pur aa-ba-la-yi":                             { fa: "پر آبلهٔ", mean: "blistered, covered in blisters" },
    "aa-ba-la":                                    { fa: "آبله", mean: "blister" },
    "khaysh":                                      { fa: "خویش", mean: "own; self" },
    "a-qab":                                       { fa: "عقب", mean: "back, behind" },
    "za-meen":                                     { fa: "زمین", mean: "ground, earth" },
    "ni-haa-da":                                   { fa: "نهاده", mean: "put, placed" },
    "ni-haa-dan":                                  { fa: "نهادن", mean: "to put, to place" },
    "aan-haa":                                     { fa: "آن‌ها", mean: "they, them" },
    "tak-ya":                                      { fa: "تکیه", mean: "leaning" },
    "tak-ya daa-da":                               { fa: "تکیه داده", mean: "has leaned" },
    "tak-ya daa-dan":                              { fa: "تکیه دادن", mean: "to lean" },
    "daa-da":                                      { fa: "داده", mean: "given" },
    "chash-maa-nash":                              { fa: "چشمانش", mean: "his eyes" },
    "choon":                                       { fa: "چون", mean: "like, as; when; because" },
    "paa-ra-haa":                                  { fa: "پاره‌ها", mean: "pieces" },
    "zu-ghaal":                                    { fa: "زغال", mean: "coal" },
    "bu-raaq":                                     { fa: "براق", mean: "shining, glossy" },
    "mi-yaan":                                     { fa: "میان", mean: "middle, among" },
    "mu-zha-haa":                                  { fa: "مژه‌ها", mean: "eyelashes" },
    "bar gash-ta":                                 { fa: "بر گشته", mean: "curled back" },
    "gash-ta":                                     { fa: "گشته", mean: "turned" },
    "gash-tan":                                    { fa: "گشتن", mean: "to become; to turn; to wander" },
    "akh-gar":                                     { fa: "اخگر", mean: "ember" },
    "fu-ro-zaan":                                  { fa: "فروزان", mean: "glowing" },
    "sa-pay-da":                                   { fa: "سپیده", mean: "whiteness; dawn" },
    "khaa-kis-tar":                                { fa: "خاکستر", mean: "ash" },
    "chi":                                         { fa: "چه", mean: "what; how" },
    "may-jo-yad":                                  { fa: "می‌جوید", mean: "looks for" },
    "jus-tan":                                     { fa: "جستن", mean: "to seek, to look for" },
    "a-raq":                                       { fa: "عرق", mean: "sweat" },
    "daa-na-haa":                                  { fa: "دانه‌ها", mean: "grains, beads" },
    "mur-waa-reed":                                { fa: "مروارید", mean: "pearl" },
    "ja-been":                                     { fa: "جبین", mean: "forehead, brow" },
    "ku-shaa-da":                                  { fa: "کشاده", mean: "open, broad" },
    "gan-dum-goo-nash":                            { fa: "گندم‌گونش", mean: "his wheat-colored" },
    "may-da-rakh-shad":                            { fa: "می‌درخشد", mean: "shines" },
    "da-rakh-shee-dan":                            { fa: "درخشیدن", mean: "to shine" },
    "tu":                                          { fa: "تو", mean: "you (one person)" },
    "tu go-yee":                                   { fa: "تو گویی", mean: "as if - literally you would say" },
    "go-yee":                                      { fa: "گویی", mean: "you would say" },
    "khaa-mo-shee":                                { fa: "خاموشی", mean: "silence" },
    "su-koon":                                     { fa: "سکون", mean: "stillness" },
    "neez":                                        { fa: "نیز", mean: "also, too" },
    "kaar":                                        { fa: "کار", mean: "work, a job" },
    "dush-waa-ray":                                { fa: "دشواری", mean: "difficult (dush-waar + -ay, a: “a difficult …”)" },
    "may-par-daa-zad":                             { fa: "می‌پردازد", mean: "busies himself (with ba)" },
    "par-daakh-tan":                               { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "yaa":                                         { fa: "یا", mean: "or" },
    "ha-reef":                                     { fa: "حریف", mean: "opponent" },
    "ta-waa-naa-yay":                              { fa: "توانایی", mean: "strong (ta-waa-naa + -ay, a: “a strong …”)" },
    "may-sa-tay-zad":                              { fa: "می‌ستیزد", mean: "fights" },
    "sa-tay-zee-dan":                              { fa: "ستیزیدن", mean: "to fight" },
    "a-gar":                                       { fa: "اگر", mean: "if" },
    "a-gar chi":                                   { fa: "اگر چه", mean: "although" },
    "ki-naar":                                     { fa: "کنار", mean: "side, edge" },
    "wa-lay":                                      { fa: "ولی", mean: "but" },
    "dee-da-gaa-nash":                             { fa: "دیده‌گانش", mean: "his eyes" },
    "chu-naan":                                    { fa: "چنان", mean: "so, such, in such a way" },
    "ki":                                          { fa: "که", mean: "that, which, who" },
    "chashm-an-daaz":                              { fa: "چشم‌انداز", mean: "view" },
    "doo-ray":                                     { fa: "دوری", mean: "far (door + -ay, a: “a far …”)" },
    "u-fuq":                                       { fa: "افق", mean: "horizon" },
    "aq-saa":                                      { fa: "اقصا", mean: "the farthest part" },
    "sah-raa":                                     { fa: "صحرا", mean: "desert" },
    "ni-ga-raan":                                  { fa: "نگران", mean: "gazing, watching; worried" },
    "ni-ga-raan baa-shad":                         { fa: "نگران باشد", mean: "were gazing" },
    "ni-ga-raan bu-dan":                           { fa: "نگران بودن", mean: "to gaze; to be worried" },
    "baa-shad":                                    { fa: "باشد", mean: "be, should be" },
    "bu-dan":                                      { fa: "بودن", mean: "to be" },
    "baad":                                        { fa: "باد", mean: "wind" },
    "sees-taan":                                   { fa: "سیستان", mean: "Sistan, a region in southwest Afghanistan and east Iran" },
    "wa-zish":                                     { fa: "وزش", mean: "blowing" },
    "laa-yan-qa-ti":                               { fa: "لاینقطع", mean: "endless, unbroken" },
    "koy":                                         { fa: "کوی", mean: "street, lane" },
    "koy wa bar-zan":                              { fa: "کوی و برزن", mean: "the streets and quarters" },
    "bar-zan":                                     { fa: "برزن", mean: "quarter of a town" },
    "ghur-rish":                                   { fa: "غرش", mean: "roar" },
    "ghur-rish daa-rad":                           { fa: "غرش دارد", mean: "roars - literally has a roar" },
    "ghur-rish daash-tan":                         { fa: "غرش داشتن", mean: "to roar" },
    "daa-rad":                                     { fa: "دارد", mean: "has" },
    "daash-tan":                                   { fa: "داشتن", mean: "to have" },
    "ji-daar-haa":                                 { fa: "جدارها", mean: "walls" },
    "naa-zuk":                                     { fa: "نازک", mean: "thin, delicate" },
    "may-lar-zaa-nad":                             { fa: "می‌لرزاند", mean: "shakes" },
    "lar-zaan-dan":                                { fa: "لرزاندن", mean: "to shake" },
    "aa-waaz":                                     { fa: "آواز", mean: "sound, voice; song" },
    "paa":                                         { fa: "پا", mean: "foot, leg" },
    "aa-khi-reen":                                 { fa: "آخرین", mean: "last" },
    "das-ta":                                      { fa: "دسته", mean: "group, band" },
    "shab":                                        { fa: "شب", mean: "night" },
    "shab gar-daan":                               { fa: "شب گردان", mean: "the night watchmen" },
    "gar-daan":                                    { fa: "گردان", mean: "going around (shab gar-daan, night watchman)" },
    "khaa-mosh":                                   { fa: "خاموش", mean: "silent; out (of a fire)" },
    "khaa-mosh may-sha-wad":                       { fa: "خاموش می‌شود", mean: "falls silent" },
    "khaa-mosh shu-dan":                           { fa: "خاموش شدن", mean: "to fall silent, to go out" },
    "may-sha-wad":                                 { fa: "می‌شود", mean: "becomes" },
    "shu-dan":                                     { fa: "شدن", mean: "to become" },
    "ba juz":                                      { fa: "به جز", mean: "except" },
    "juz":                                         { fa: "جز", mean: "except" },
    "naa-la":                                      { fa: "ناله", mean: "moan, wail" },
    "sa-daa-yay":                                  { fa: "صدایی", mean: "a sound" },
    "bar na-may-khay-zad":                         { fa: "بر نمی‌خیزد", mean: "does not rise" },
    "bar-khaas-tan":                               { fa: "برخاستن", mean: "to rise, to get up" },
    "na-may-khay-zad":                             { fa: "نمی‌خیزد", mean: "does not rise" },
    "tan-haa":                                     { fa: "تنها", mean: "only; alone" },
    "im-shab":                                     { fa: "امشب", mean: "tonight" },
    "daa-wa-ree":                                  { fa: "داوری", mean: "judging, ruling" },
    "daa-wa-ree may-ku-nad":                       { fa: "داوری می‌کند", mean: "judges, rules" },
    "daa-wa-ree kar-dan":                          { fa: "داوری کردن", mean: "to judge" },
    "may-ku-nad":                                  { fa: "می‌کند", mean: "does, makes" },
    "kar-dan":                                     { fa: "کردن", mean: "to do, to make" },
    "su-toon-haa":                                 { fa: "ستون‌ها", mean: "pillars, columns" },
    "rayg":                                        { fa: "ریگ", mean: "sand" },
    "push-ta-yay":                                 { fa: "پشته‌یی", mean: "a mound, a dune (push-ta + -ay, a)" },
    "dee-gar":                                     { fa: "دیگر", mean: "other; more; anymore" },
    "naql":                                        { fa: "نقل", mean: "moving, carrying" },
    "naql may-di-had":                             { fa: "نقل می‌دهد", mean: "moves, carries" },
    "naql daa-dan":                                { fa: "نقل دادن", mean: "to move" },
    "haa-moon":                                    { fa: "هامون", mean: "plain, flat land" },
    "mawj-haa":                                    { fa: "موج‌ها", mean: "waves" },
    "bu-land":                                     { fa: "بلند", mean: "high, tall, loud" },
    "may-an-gay-zad":                              { fa: "می‌انگیزد", mean: "raises, stirs up" },
    "an-gaykh-tan":                                { fa: "انگیختن", mean: "to raise, to stir up" },
    "da-rakh-shan-da":                             { fa: "درخشنده", mean: "shining" },
    "ha-noz":                                      { fa: "هنوز", mean: "still, yet" },
    "ba so-yi":                                    { fa: "به سوی", mean: "toward" },
    "so":                                          { fa: "سو", mean: "side, direction" },
    "ni-ga-raan ast":                              { fa: "نگران است", mean: "is gazing" },
    "az mi-yaa-ni":                                { fa: "از میان", mean: "from among, through" },
    "zu-baa-na-haa":                               { fa: "زبانه‌ها", mean: "flames" },
    "bi-yaa-baan-haa":                             { fa: "بیابان‌ها", mean: "deserts" },
    "bay-paa-yaan":                                { fa: "بی‌پایان", mean: "endless" },
    "koh-haa":                                     { fa: "کوه‌ها", mean: "mountains" },
    "dih-ka-da-haa":                               { fa: "دهکده‌ها", mean: "villages" },
    "ba na-zar may-aa-yad":                        { fa: "به نظر می‌آید", mean: "appear, can be seen" },
    "ba na-zar aa-ma-dan":                         { fa: "به نظر آمدن", mean: "to appear, to seem" },
    "na-zar":                                      { fa: "نظر", mean: "sight, view; opinion" },
    "may-aa-yad":                                  { fa: "می‌آید", mean: "comes" },
    "mar-daan":                                    { fa: "مردان", mean: "men" },
    "za-naan":                                     { fa: "زنان", mean: "women" },
    "ki-shaa-warz":                                { fa: "کشاورز", mean: "farmer" },
    "chih-ra-haa":                                 { fa: "چهره‌ها", mean: "faces" },
    "maa-tam-za-da":                               { fa: "ماتم‌زده", mean: "grief-stricken" },
    "pay-kar-haa":                                 { fa: "پیکرها", mean: "bodies" },
    "naa-ta-waan":                                 { fa: "ناتوان", mean: "weak" },
    "dee-da":                                      { fa: "دیده", mean: "seen; eye" },
    "dee-da may-sha-wand":                         { fa: "دیده می‌شوند", mean: "are seen" },
    "dee-dan":                                     { fa: "دیدن", mean: "to see; seeing" },
    "dee-da shu-dan":                              { fa: "دیده شدن", mean: "to be seen" },
    "may-sha-wand":                                { fa: "می‌شوند", mean: "become, are" },
    "baaz":                                        { fa: "باز", mean: "open" },
    "nay-za-haa":                                  { fa: "نیزه‌ها", mean: "spears" },
    "sa-waa-raan":                                 { fa: "سواران", mean: "horsemen, riders" },
    "taa-zan-da":                                  { fa: "تازنده", mean: "galloping, charging" },
    "garm":                                        { fa: "گرم", mean: "hot, warm" },
    "ja-haa-nay":                                  { fa: "جهانی", mean: "a world" },
    "jil-wa-gar":                                  { fa: "جلوه‌گر", mean: "showing, on display" },
    "jil-wa-gar ast":                              { fa: "جلوه‌گر است", mean: "appears, is displayed" },
    "ma-naa-zir":                                  { fa: "مناظر", mean: "scenes, views" },
    "mukh-ta-li-fa":                               { fa: "مختلفه", mean: "various, different" },
    "zin-da-gaa-nee":                              { fa: "زنده‌گانی", mean: "life" },
    "si-jis-taan":                                 { fa: "سجستان", mean: "Sijistan, an old name of Sistan" },
    "na-mo-daar":                                  { fa: "نمودار", mean: "visible" },
    "na-mo-daar ast":                              { fa: "نمودار است", mean: "can be seen, appears" },
    "mard":                                        { fa: "مرد", mean: "man" },
    "aa-yee-na":                                   { fa: "آیینه", mean: "mirror" },
    "si-kan-dar":                                  { fa: "سکندر", mean: "Alexander the Great, whose mirror was said to show the whole world" },
    "bood":                                        { fa: "بود", mean: "was" },
    "jaam":                                        { fa: "جام", mean: "cup, goblet" },
    "jaa-mi ja-haan na-maa-yi jam-sheed":          { fa: "جام جهان نمای جمشید", mean: "the world-showing cup of Jamshid, a legendary king who saw the whole world in his cup" },
    "ja-haan":                                     { fa: "جهان", mean: "world" },
    "na-maay":                                     { fa: "نمای", mean: "showing (ja-haan na-maay, world-showing)" },
    "jam-sheed":                                   { fa: "جمشید", mean: "Jamshid, a legendary king of old Iran" },
    "dun-yaa":                                     { fa: "دنیا", mean: "world" },
    "bu-zurg":                                     { fa: "بزرگ", mean: "big, great" },
    "kul-ba-yay":                                  { fa: "کلبه‌یی", mean: "a hut" },
    "ik-ti-faa":                                   { fa: "اکتفا", mean: "making do, being content" },
    "ik-ti-faa kar-da":                            { fa: "اکتفا کرده", mean: "has made do" },
    "ik-ti-faa kar-dan":                           { fa: "اکتفا کردن", mean: "to make do with, to be content with" },
    "kar-da":                                      { fa: "کرده", mean: "done" },
    "ha-ma":                                       { fa: "همه", mean: "all, every" },
    "kaar-haa":                                    { fa: "کارها", mean: "works, jobs" },
    "roy-ga-ree":                                  { fa: "رویگری", mean: "coppersmithing" },
    "par-daakh-ta":                                { fa: "پرداخته", mean: "taken up" },
    "par-daakh-ta ast":                            { fa: "پرداخته است", mean: "has taken up" },
    "an-do-dan":                                   { fa: "اندودن", mean: "coating, painting over" },
    "al-waan":                                     { fa: "الوان", mean: "colors" },
    "ro-shan":                                     { fa: "روشن", mean: "bright, light" },
    "aj-saam":                                     { fa: "اجسام", mean: "objects, bodies" },
    "neest":                                       { fa: "نیست", mean: "is not" },
    "pay-sha":                                     { fa: "پیشه", mean: "trade, profession" },
    "bu-zur-gaan":                                 { fa: "بزرگان", mean: "great people" },
    "na-may-baa-shad":                             { fa: "نمی‌باشد", mean: "is not" },
    "taa":                                         { fa: "تا", mean: "so that; until; to" },
    "chand":                                       { fa: "چند", mean: "a few; how many" },
    "mu-lam-ma-ay":                                { fa: "ملمعی", mean: "a gilded thing (mu-lam-ma + -ay)" },
    "zay-baa":                                     { fa: "زیبا", mean: "beautiful" },
    "char-keen":                                   { fa: "چرکین", mean: "dirty" },
    "paa-kee-za":                                  { fa: "پاکیزه", mean: "clean" },
    "kuh-na":                                      { fa: "کهنه", mean: "old, worn out" },
    "naw":                                         { fa: "نو", mean: "new" },
    "jil-wa di-had":                               { fa: "جلوه دهد", mean: "make appear" },
    "di-had":                                      { fa: "دهد", mean: "give" },
    "oo":                                          { fa: "او", mean: "he, she; his, her" },
    "ba-raa-yi":                                   { fa: "برای", mean: "for" },
    "i-laam":                                      { fa: "اعلام", mean: "announcing, proclaiming" },
    "ha-qee-qat":                                  { fa: "حقیقت", mean: "truth" },
    "aa-fa-ree-da":                                { fa: "آفریده", mean: "created" },
    "aa-fa-ree-da shu-da":                         { fa: "آفریده شده", mean: "was created" },
    "aa-fa-ree-dan":                               { fa: "آفریدن", mean: "to create" },
    "shu-da":                                      { fa: "شده", mean: "become; been" },
    "kaa-khay":                                    { fa: "کاخی", mean: "a palace" },
    "bar af-raa-zad":                              { fa: "بر افرازد", mean: "raise" },
    "bar-af-raash-tan":                            { fa: "برافراشتن", mean: "to raise up" },
    "af-raa-zad":                                  { fa: "افرازد", mean: "raises" },
    "bay-chaa-ra-gaan":                            { fa: "بیچاره‌گان", mean: "the helpless, poor people" },
    "pa-naah":                                     { fa: "پناه", mean: "shelter, refuge" },
    "pa-naah baa-shad":                            { fa: "پناه باشد", mean: "be a shelter" },
    "mash-a-lay":                                  { fa: "مشعلی", mean: "a torch" },
    "bi-yaf-ro-zad":                               { fa: "بیفروزد", mean: "light, kindle" },
    "af-rokh-tan":                                 { fa: "افروختن", mean: "to light, to kindle" },
    "aa-waa-ra-gaan":                              { fa: "آواره‌گان", mean: "wanderers, homeless people" },
    "man-zil":                                     { fa: "منزل", mean: "stage, destination; home" },
    "man-zi-li maq-sood":                          { fa: "منزل مقصود", mean: "the destination, one's goal" },
    "maq-sood":                                    { fa: "مقصود", mean: "aim, goal" },
    "bi-ra-saa-nad":                               { fa: "برساند", mean: "bring" },
    "ra-saan-dan":                                 { fa: "رساندن", mean: "to bring, to deliver" },
    "shaa-yad":                                    { fa: "شاید", mean: "perhaps" },
    "saf-faar":                                    { fa: "صفار", mean: "coppersmith; here Ya’qub the coppersmith, who founded the Saffarid kingdom in 861" },
    "nu-khus-teen":                                { fa: "نخستین", mean: "first" },
    "mar-ha-la":                                   { fa: "مرحله", mean: "stage" },
    "majd":                                        { fa: "مجد", mean: "glory" },
    "bu-zur-gee":                                  { fa: "بزرگی", mean: "greatness" },
    "baa-yad":                                     { fa: "باید", mean: "must, should" },
    "gaa-may":                                     { fa: "گامی", mean: "a step" },
    "fa-raa":                                      { fa: "فرا", mean: "forth, beyond" },
    "fa-raa tar":                                  { fa: "فرا تر", mean: "further, beyond" },
    "tar":                                         { fa: "تر", mean: "more, -er" },
    "gu-zaa-rad":                                  { fa: "گذارد", mean: "put; take (a step)" },
    "gu-zaash-tan":                                { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "gha-ree-wan-da":                              { fa: "غریونده", mean: "roaring" },
    "sa-haa-ree":                                  { fa: "صحاری", mean: "deserts" },
    "kish-war":                                    { fa: "کشور", mean: "country" },
    "bi-pay-maa-yad":                              { fa: "بپیماید", mean: "cross, travel over" },
    "pay-mo-dan":                                  { fa: "پیمودن", mean: "to travel over, to measure" },
    "dar-waa-za":                                  { fa: "دروازه", mean: "gate" },
    "shahr-haa":                                   { fa: "شهرها", mean: "cities" },
    "bi-gu-shaa-yad":                              { fa: "بگشاید", mean: "open" },
    "gu-sho-dan":                                  { fa: "گشودن", mean: "to open" },
    "qal-a":                                       { fa: "قلعه", mean: "fortress, castle" },
    "za-ranj":                                     { fa: "زرنج", mean: "Zaranj, the capital of Sistan" },
    "bar-aa-yad":                                  { fa: "برآید", mean: "go up, rise" },
    "bar-aa-ma-dan":                               { fa: "برآمدن", mean: "to go up; to go out" },
    "taa chand":                                   { fa: "تا چند", mean: "how long" },
    "di-yaar":                                     { fa: "دیار", mean: "land, country" },
    "jaw-laan-gaah":                               { fa: "جولانگاه", mean: "a field for roaming, a playground" },
    "jaah":                                        { fa: "جاه", mean: "rank, high position" },
    "jaah ta-la-baa-ni":                           { fa: "جاه طلبان", mean: "ambitious people" },
    "ta-la-baan":                                  { fa: "طلبان", mean: "seekers (jaah ta-la-baan, seekers of rank)" },
    "a-rab":                                       { fa: "عرب", mean: "Arab, the Arabs" },
    "a-jam":                                       { fa: "عجم", mean: "non-Arabs, the Persians" },
    "gar-dad":                                     { fa: "گردد", mean: "become" },
    "taa-kay":                                     { fa: "تاکی", mean: "until when, how long" },
    "kaar-zaar-haa":                               { fa: "کارزارها", mean: "battles" },
    "mu-look":                                     { fa: "ملوک", mean: "kings" },
    "mu-look ut-ta-waa-yif":                       { fa: "ملوک الطوایف", mean: "petty kings, local rulers each with his own small kingdom" },
    "ut-ta-waa-yif":                               { fa: "الطوایف", mean: "of the tribes, of the regions" },
    "khoon":                                       { fa: "خون", mean: "blood" },
    "far-zan-daan":                                { fa: "فرزندان", mean: "children, sons" },
    "heer-mand":                                   { fa: "هیرمند", mean: "the Helmand, the river of Sistan" },
    "ba ha-dar rood":                              { fa: "به هدر رود", mean: "be wasted" },
    "ba ha-dar raf-tan":                           { fa: "به هدر رفتن", mean: "to go to waste" },
    "ha-dar":                                      { fa: "هدر", mean: "waste" },
    "rood":                                        { fa: "رود", mean: "river" },
    "saa-lih":                                     { fa: "صالح", mean: "Salih, a rebel leader in Sistan" },
    "han-gaa-ma-yay":                              { fa: "هنگامه‌یی", mean: "an uproar" },
    "bar paa daash-ta":                            { fa: "بر پا داشته", mean: "has stirred up" },
    "bar-paa daash-tan":                           { fa: "برپا داشتن", mean: "to raise, to stir up" },
    "daash-ta":                                    { fa: "داشته", mean: "had" },
    "jaah ta-lab":                                 { fa: "جاه طلب", mean: "ambitious" },
    "ta-lab":                                      { fa: "طلب", mean: "seeking" },
    "har":                                         { fa: "هر", mean: "every" },
    "so-yay":                                      { fa: "سویی", mean: "a direction" },
    "may-taa-zad":                                 { fa: "می‌تازد", mean: "charges, gallops" },
    "taakh-tan":                                   { fa: "تاختن", mean: "to charge, to gallop" },
    "gaah":                                        { fa: "گاه", mean: "sometimes; time, place" },
    "haa-ki-mi-yat":                               { fa: "حاکمیت", mean: "rule" },
    "maw-rid":                                     { fa: "مورد", mean: "object, case" },
    "maw-ri-di ha-ma-laa-tash qa-raar may-di-had": { fa: "مورد حملاتش قرار می‌دهد", mean: "attacks - literally makes (it) the object of his attacks" },
    "ha-ma-laa-tash":                              { fa: "حملاتش", mean: "his attacks" },
    "qa-raar":                                     { fa: "قرار", mean: "place, rest" },
    "za-maa-nay":                                  { fa: "زمانی", mean: "at times; a time" },
    "aa-saa-yish":                                 { fa: "آسایش", mean: "peace, comfort" },
    "aa-raam":                                     { fa: "آرام", mean: "calm, quiet" },
    "bar-ham":                                     { fa: "برهم", mean: "upset, in disorder" },
    "bar-ham may-za-nad":                          { fa: "برهم می‌زند", mean: "upsets, disturbs" },
    "bar-ham za-dan":                              { fa: "برهم زدن", mean: "to upset, to disturb" },
    "may-za-nad":                                  { fa: "می‌زند", mean: "hits" },
    "za-dan":                                      { fa: "زدن", mean: "to hit" },
    "sar-gar-daan":                                { fa: "سرگردان", mean: "wandering, lost" },
    "gird":                                        { fa: "گرد", mean: "round (gird baad, a whirlwind)" },
    "gird baa-di":                                 { fa: "گرد باد", mean: "a whirlwind" },
    "aa-waa-ra":                                   { fa: "آواره", mean: "wanderer, homeless" },
    "naa-bee-naast":                               { fa: "نابیناست", mean: "is blind (naa-bee-naa + ast)" },
    "rah-si-paar":                                 { fa: "رهسپار", mean: "setting out" },
    "rah-si-paar may-gar-dad":                     { fa: "رهسپار می‌گردد", mean: "sets out, goes" },
    "rah-si-paar gar-dee-dan":                     { fa: "رهسپار گردیدن", mean: "to set out" },
    "aa-sho-bay":                                  { fa: "آشوبی", mean: "trouble, unrest (with -ay, a)" },
    "za-mee-nay":                                  { fa: "زمینی", mean: "a land, a piece of ground" },
    "qa-dam":                                      { fa: "قدم", mean: "step, foot" },
    "qa-dam gu-zaa-rad":                           { fa: "قدم گذارد", mean: "sets foot" },
    "qa-dam gu-zaash-tan":                         { fa: "قدم گذاشتن", mean: "to set foot" },
    "sho-ray":                                     { fa: "شوری", mean: "an uproar, excitement" },
    "bar may-khay-zad":                            { fa: "بر می‌خیزد", mean: "rises" },
    "may-khay-zad":                                { fa: "می‌خیزد", mean: "rises" },
    "dih-qaa-naan":                                { fa: "دهقانان", mean: "farmers, peasants" },
    "na-may-daa-nand":                             { fa: "نمی‌دانند", mean: "do not know" },
    "daa-nis-tan":                                 { fa: "دانستن", mean: "to know" },
    "sar-na-wisht-shaan":                          { fa: "سرنوشت‌شان", mean: "their fate" },
    "chees":                                       { fa: "چیست", mean: "what is" },
    "aa-maal":                                     { fa: "اعمال", mean: "deeds, actions" },
    "sul-ta":                                      { fa: "سلطه", mean: "rule, domination" },
    "ab-baa-si-yaan":                              { fa: "عباسیان", mean: "the Abbasids, the caliphs who ruled from Baghdad" },
    "khas-ta shu-da and":                          { fa: "خسته شده اند", mean: "they have grown tired" },
    "khas-ta shu-dan":                             { fa: "خسته شدن", mean: "to get tired" },
    "and":                                         { fa: "اند", mean: "are; after a word like shu-da, have" },
    "too-faan":                                    { fa: "توفان", mean: "storm" },
    "sar-baaz":                                    { fa: "سرباز", mean: "soldier" },
    "too-faa-nee":                                 { fa: "توفانی", mean: "stormy" },
    "ha-raa-saa-nand":                             { fa: "هراسانند", mean: "are afraid" },
    "dee-roz":                                     { fa: "دیروز", mean: "yesterday" },
    "taa-hir":                                     { fa: "طاهر", mean: "Tahir, a general who founded the Tahirid kingdom in Khorasan in 821" },
    "nay-shaa-poor":                               { fa: "نیشاپور", mean: "Nishapur, a city in Khorasan" },
    "dee-da-gaan":                                 { fa: "دیده‌گان", mean: "eyes" },
    "khee-ra":                                     { fa: "خیره", mean: "dazzled; staring" },
    "khee-ra may-gar-daa-need":                    { fa: "خیره می‌گردانید", mean: "dazzled" },
    "khee-ra gar-daa-nee-dan":                     { fa: "خیره گردانیدن", mean: "to dazzle" },
    "may-gar-daa-need":                            { fa: "می‌گردانید", mean: "made, turned" },
    "gar-daa-nee-dan":                             { fa: "گردانیدن", mean: "to turn, to make" },
    "mar-du-maan":                                 { fa: "مردمان", mean: "people" },
    "khu-raa-saan":                                { fa: "خراسان", mean: "Khorasan, the old name of northern Afghanistan and northeast Iran" },
    "may-shi-taaf-tand":                           { fa: "می‌شتافتند", mean: "hurried" },
    "shi-taaf-tan":                                { fa: "شتافتن", mean: "to hurry" },
    "ra-haa-nan-da":                               { fa: "رهاننده", mean: "savior, rescuer" },
    "may-khaan-dand":                              { fa: "می‌خواندند", mean: "called; read" },
    "khaan-dan":                                   { fa: "خواندن", mean: "to read, to recite" },
    "im-roz":                                      { fa: "امروز", mean: "today" },
    "chashm":                                      { fa: "چشم", mean: "eye" },
    "ja-haan bee-nash":                            { fa: "جهان بینش", mean: "his world-seeing (eye)" },
    "bee-nash":                                    { fa: "بینش", mean: "seeing (ja-haan been, world-seeing) + -ash, his" },
    "ni-ga-raan neest":                            { fa: "نگران نیست", mean: "is not watching" },
    "raad":                                        { fa: "راد", mean: "noble, generous" },
    "raad mar-di":                                 { fa: "راد مرد", mean: "the noble man, the hero" },
    "po-shang":                                    { fa: "پوشنگ", mean: "Pushang, a town near Herat where Tahir was born" },
    "ha-yaat":                                     { fa: "حیات", mean: "life" },
    "pur shor":                                    { fa: "پر شور", mean: "passionate, full of fire" },
    "shor":                                        { fa: "شور", mean: "passion, excitement" },
    "pur ham-ha-ma-yi":                            { fa: "پر همهمهٔ", mean: "full of tumult" },
    "ham-ha-ma":                                   { fa: "همهمه", mean: "din, tumult" },
    "ba paa-yaan ra-saa-nee-da":                   { fa: "به پایان رسانیده", mean: "has brought to an end" },
    "ba paa-yaan ra-saan-dan":                     { fa: "به پایان رساندن", mean: "to bring to an end" },
    "paa-yaan":                                    { fa: "پایان", mean: "end" },
    "ra-saa-nee-da":                               { fa: "رسانیده", mean: "brought" },
    "chan-gaal":                                   { fa: "چنگال", mean: "claws" },
    "marg":                                        { fa: "مرگ", mean: "death" },
    "too-maar":                                    { fa: "طومار", mean: "scroll" },
    "baa if-ti-khaa-rash":                         { fa: "با افتخارش", mean: "his glorious" },
    "if-ti-khaa-rash":                             { fa: "افتخارش", mean: "his glory" },
    "da-ree-da":                                   { fa: "دریده", mean: "torn" },
    "da-ree-dan":                                  { fa: "دریدن", mean: "to tear" },
    "pi-sa-raan":                                  { fa: "پسران", mean: "sons" },
    "nay-roo":                                     { fa: "نیرو", mean: "strength, power" },
    "ja-haan-daa-ree":                             { fa: "جهانداری", mean: "ruling the world, kingship" },
    "na-daa-rand":                                 { fa: "ندارند", mean: "do not have" },
    "aw-rang":                                     { fa: "اورنگ", mean: "throne" },
    "koo-chak":                                    { fa: "کوچک", mean: "small" },
    "koo-chak may-na-maa-yand":                    { fa: "کوچک می‌نمایند", mean: "look small" },
    "koo-chak na-mo-dan":                          { fa: "کوچک نمودن", mean: "to look small" },
    "may-na-maa-yand":                             { fa: "می‌نمایند", mean: "seem, look" },
    "na-mo-dan":                                   { fa: "نمودن", mean: "to do; to show; to seem" },
    "pi-sar":                                      { fa: "پسر", mean: "son, boy" },
    "mu-ta-waj-jih":                               { fa: "متوجه", mean: "turned toward; paying attention" },
    "mu-ta-waj-jih ast":                           { fa: "متوجه است", mean: "is turned (toward)" },
    "ja-bee-nash":                                 { fa: "جبینش", mean: "his forehead" },
    "may-ta-raa-wad":                              { fa: "می‌تراود", mean: "seeps" },
    "ta-raa-wee-dan":                              { fa: "تراویدن", mean: "to seep, to ooze" },
    "na-fa-sash":                                  { fa: "نفسش", mean: "his breath" },
    "sha-deed":                                    { fa: "شدید", mean: "strong, heavy" },
    "sha-deed tar":                                { fa: "شدید تر", mean: "heavier, stronger" },
    "gu-maan":                                     { fa: "گمان", mean: "thought, guess" },
    "gu-maan may-ku-nad":                          { fa: "گمان می‌کند", mean: "he imagines" },
    "gu-maan kar-dan":                             { fa: "گمان کردن", mean: "to think, to suppose" },
    "naa-la-yay":                                  { fa: "ناله‌یی", mean: "a moan" },
    "ba go-shi oo may-ra-sad":                     { fa: "به گوش او می‌رسد", mean: "reaches his ears" },
    "ba gosh ra-see-dan":                          { fa: "به گوش رسیدن", mean: "to be heard" },
    "gosh":                                        { fa: "گوش", mean: "ear" },
    "may-ra-sad":                                  { fa: "می‌رسد", mean: "arrives, reaches" },
    "ra-see-dan":                                  { fa: "رسیدن", mean: "to arrive, to reach" },
    "ni-daa-yay":                                  { fa: "ندایی", mean: "a call" },
    "may-shi-na-wad":                              { fa: "می‌شنود", mean: "hears" },
    "shi-nee-dan":                                 { fa: "شنیدن", mean: "to hear" },
    "lam-ha":                                      { fa: "لمحه", mean: "moment" },
    "sa-daa":                                      { fa: "صدا", mean: "sound, voice" },
    "bu-land-tar":                                 { fa: "بلندتر", mean: "louder, higher" },
    "bu-land-tar may-gar-dad":                     { fa: "بلندتر می‌گردد", mean: "grows louder" },
    "lah-za-yay":                                  { fa: "لحظه‌یی", mean: "a moment" },
    "na-may-gu-za-rad":                            { fa: "نمی‌گذرد", mean: "does not pass" },
    "gu-zash-tan":                                 { fa: "گذشتن", mean: "to pass" },
    "tund":                                        { fa: "تند", mean: "fast, strong" },
    "tund baad":                                   { fa: "تند باد", mean: "a gale, a strong wind" },
    "ja-haan gee-rash":                            { fa: "جهان گیرش", mean: "its world-seizing" },
    "gee-rash":                                    { fa: "گیرش", mean: "seizing (ja-haan geer, world-seizing) + -ash, its" },
    "baar":                                        { fa: "بار", mean: "time, occasion; load" },
    "baar dee-gar":                                { fa: "بار دیگر", mean: "once more" },
    "ghul-ghu-la":                                 { fa: "غلغله", mean: "din, uproar" },
    "ho-way-daa":                                  { fa: "هویدا", mean: "clear, visible" },
    "ho-way-daa may-gar-dad":                      { fa: "هویدا می‌گردد", mean: "comes clear" },
    "ho-way-daa gar-dee-dan":                      { fa: "هویدا گردیدن", mean: "to appear, to become clear" },
    "ba khaa-tir may-aa-wa-rad":                   { fa: "به خاطر می‌آورد", mean: "remembers" },
    "ba khaa-tir aa-war-dan":                      { fa: "به خاطر آوردن", mean: "to remember" },
    "khaa-tir":                                    { fa: "خاطر", mean: "mind, memory" },
    "may-aa-wa-rad":                               { fa: "می‌آورد", mean: "brings" },
    "aa-war-dan":                                  { fa: "آوردن", mean: "to bring" },
    "koo-da-kee":                                  { fa: "کودکی", mean: "childhood" },
    "gaah gaah":                                   { fa: "گاه گاه", mean: "now and then" },
    "shu-baa-nee":                                 { fa: "شبانی", mean: "shepherding" },
    "may-bar-aa-mad":                              { fa: "می‌برآمد", mean: "used to go out" },
    "id-da":                                       { fa: "عده", mean: "number, group" },
    "mah-dood":                                    { fa: "محدود", mean: "limited, few" },
    "gos-fan-daan":                                { fa: "گوسفندان", mean: "sheep" },
    "pa-dar":                                      { fa: "پدر", mean: "father" },
    "gaa-hay":                                     { fa: "گاهی", mean: "sometimes" },
    "amr#name":                                    { fa: "عمرو", say: "amr", mean: "Amr, Ya’qub’s brother" },
    "bi-raa-da-rash":                              { fa: "برادرش", mean: "his brother" },
    "ham-raah":                                    { fa: "همراه", mean: "together, along" },
    "ham-raah may-bood":                           { fa: "همراه می‌بود", mean: "went along" },
    "ham-raah bu-dan":                             { fa: "همراه بودن", mean: "to go along, to be with" },
    "may-bood":                                    { fa: "می‌بود", mean: "would be, used to be" },
    "na-haar":                                     { fa: "نهار", mean: "lunch" },
    "may-ra-saa-need":                             { fa: "می‌رسانید", mean: "brought" },
    "ro-zay":                                      { fa: "روزی", mean: "a day (roz + -ay)" },
    "tund-baad":                                   { fa: "تندباد", mean: "gale" },
    "wa-zee-dan":                                  { fa: "وزیدن", mean: "to blow" },
    "wa-zee-dan gi-rift":                          { fa: "وزیدن گرفت", mean: "began to blow" },
    "gi-rift":                                     { fa: "گرفت", mean: "took; began" },
    "gi-rif-tan":                                  { fa: "گرفتن", mean: "to take" },
    "ha-waa":                                      { fa: "هوا", mean: "air, weather" },
    "taa-reek shud":                               { fa: "تاریک شد", mean: "grew dark" },
    "shud":                                        { fa: "شد", mean: "became; was" },
    "sar-dee":                                     { fa: "سردی", mean: "cold, coldness" },
    "mu-sal-lat":                                  { fa: "مسلط", mean: "in control, dominant" },
    "mu-sal-lat gasht":                            { fa: "مسلط گشت", mean: "took hold" },
    "mu-sal-lat gash-tan":                         { fa: "مسلط گشتن", mean: "to take hold, to take over" },
    "gasht":                                       { fa: "گشت", mean: "became" },
    "rayg-is-taan":                                { fa: "ریگستان", mean: "sand dunes, sandy desert" },
    "pur wal-wa-la":                               { fa: "پر ولوله", mean: "roaring, full of uproar" },
    "wal-wa-la":                                   { fa: "ولوله", mean: "uproar, roar" },
    "ki-naa-ray":                                  { fa: "کناری", mean: "a corner, a side" },
    "kha-zee-da":                                  { fa: "خزیده", mean: "crept" },
    "kha-zee-da boo-dand":                         { fa: "خزیده بودند", mean: "had crept" },
    "kha-zee-dan":                                 { fa: "خزیدن", mean: "to creep, to crawl" },
    "boo-dand":                                    { fa: "بودند", mean: "were" },
    "raah":                                        { fa: "راه", mean: "way, road" },
    "raah gum kar-da":                             { fa: "راه گم کرده", mean: "having lost the way" },
    "raah gum kar-dan":                            { fa: "راه گم کردن", mean: "to lose one's way" },
    "gum":                                         { fa: "گم", mean: "lost" },
    "naa-ga-haan":                                 { fa: "ناگهان", mean: "suddenly" },
    "na-heef":                                     { fa: "نحیف", mean: "thin, feeble" },
    "naa-ta-waa-nay":                              { fa: "ناتوانی", mean: "weak (naa-ta-waan + -ay, a: “a weak …”)" },
    "bar-khaas-ta":                                { fa: "برخاسته", mean: "risen" },
    "ya-sash":                                     { fa: "یأسش", mean: "his despair" },
    "u-meed":                                      { fa: "امید", mean: "hope" },
    "mu-bad-dal":                                  { fa: "مبدل", mean: "changed, turned" },
    "mu-bad-dal saakht":                           { fa: "مبدل ساخت", mean: "turned (into)" },
    "mu-bad-dal saakh-tan":                        { fa: "مبدل ساختن", mean: "to turn into" },
    "saakht":                                      { fa: "ساخت", mean: "made" },
    "saakh-tan":                                   { fa: "ساختن", mean: "to make, to build" },
    "bay-ikh-ti-yaar":                             { fa: "بی‌اختیار", mean: "without thinking, helplessly" },
    "ba ha-ra-kat aa-mad":                         { fa: "به حرکت آمد", mean: "set off" },
    "ba ha-ra-kat aa-ma-dan":                      { fa: "به حرکت آمدن", mean: "to start moving" },
    "ha-ra-kat":                                   { fa: "حرکت", mean: "movement" },
    "aa-mad":                                      { fa: "آمد", mean: "came" },
    "rah-si-paar shud":                            { fa: "رهسپار شد", mean: "headed" },
    "rah-si-paar shu-dan":                         { fa: "رهسپار شدن", mean: "to set out" },
    "taa aan ki":                                  { fa: "تا آن که", mean: "until" },
    "ra-seed":                                     { fa: "رسید", mean: "arrived, reached" },
    "ba hi-daa-ya-ti way":                         { fa: "به هدایت وی", mean: "guided by him" },
    "hi-daa-yat":                                  { fa: "هدایت", mean: "guidance" },
    "ba jaa-ni-bi":                                { fa: "به جانب", mean: "toward" },
    "jaa-nib":                                     { fa: "جانب", mean: "side, direction" },
    "dih-ka-da":                                   { fa: "دهکده", mean: "village" },
    "ra-waa-na":                                   { fa: "روانه", mean: "on the way, setting out" },
    "ra-waa-na gar-deed":                          { fa: "روانه گردید", mean: "set out" },
    "ra-waa-na gar-dee-dan":                       { fa: "روانه گردیدن", mean: "to set out" },
    "gar-deed":                                    { fa: "گردید", mean: "became" },
    "ra-haa-yee":                                  { fa: "رهایی", mean: "freedom, escape" },
    "ra-haa-yee yaaft":                            { fa: "رهایی یافت", mean: "escaped" },
    "ra-haa-yee yaaf-tan":                         { fa: "رهایی یافتن", mean: "to be freed, to escape" },
    "yaaft":                                       { fa: "یافت", mean: "found" },
    "yaaf-tan":                                    { fa: "یافتن", mean: "to find" },
    "aa-waa-zay":                                  { fa: "آوازی", mean: "a voice, a sound" },
    "ba gosh may-ra-sad":                          { fa: "به گوش می‌رسد", mean: "is heard" },
    "khaysh-tan":                                  { fa: "خویشتن", mean: "oneself" },
    "may-khaa-nad":                                { fa: "می‌خواند", mean: "calls; reads" },
    "een baar":                                    { fa: "این بار", mean: "this time" },
    "hay-bat-naak":                                { fa: "هیبت‌ناک", mean: "awe-inspiring" },
    "gee-ran-da":                                  { fa: "گیرنده", mean: "gripping" },
    "ha-ya-jaan":                                  { fa: "هیجان", mean: "excitement" },
    "ha-ya-jaan an-gayz":                          { fa: "هیجان انگیز", mean: "thrilling" },
    "an-gayz":                                     { fa: "انگیز", mean: "stirring (ha-ya-jaan an-gayz, thrilling)" },
    "dil":                                         { fa: "دل", mean: "heart" },
    "dil gu-daaz":                                 { fa: "دل گداز", mean: "heart-melting" },
    "gu-daaz":                                     { fa: "گداز", mean: "melting (dil gu-daaz, heart-melting)" },
    "ja-haan-geer":                                { fa: "جهان‌گیر", mean: "world-filling, world-conquering" },
    "aa-waaz-haa":                                 { fa: "آوازها", mean: "voices, sounds" },
    "bu-land tar":                                 { fa: "بلند تر", mean: "louder, higher" },
    "baad-haa":                                    { fa: "بادها", mean: "winds" },
    "jum-bish":                                    { fa: "جنبش", mean: "movement" },
    "rayg-haa":                                    { fa: "ریگ‌ها", mean: "sands" },
    "mu-sal-lat gar-dee-da":                       { fa: "مسلط گردیده", mean: "has risen above" },
    "mu-sal-lat gar-dee-dan":                      { fa: "مسلط گردیدن", mean: "to take over, to rise above" },
    "gar-dee-da":                                  { fa: "گردیده", mean: "become" },
    "pa-raa-gan-da":                               { fa: "پراگنده", mean: "scattered, spread" },
    "pa-raa-gan-da may-sha-wad":                   { fa: "پراگنده می‌شود", mean: "spreads" },
    "pa-raa-gan-da shu-dan":                       { fa: "پراگنده شدن", mean: "to scatter, to spread" },
    "seet":                                        { fa: "صیت", mean: "cry; fame" },
    "go-sha":                                      { fa: "گوشه", mean: "corner" },
    "go-sha wa ki-naa-ray":                        { fa: "گوشه و کناری", mean: "every nook and corner" },
    "na-fooz":                                     { fa: "نفوذ", mean: "getting in, influence" },
    "na-fooz may-na-maa-yad":                      { fa: "نفوذ می‌نماید", mean: "reaches into" },
    "na-fooz na-mo-dan":                           { fa: "نفوذ نمودن", mean: "to get into, to penetrate" },
    "may-na-maa-yad":                              { fa: "می‌نماید", mean: "does; shows" },
    "paa-sa-baa-naan":                             { fa: "پاسبانان", mean: "guards" },
    "qasr":                                        { fa: "قصر", mean: "palace" },
    "u-ma-raa":                                    { fa: "امرا", mean: "princes, emirs" },
    "rood-baar":                                   { fa: "رودبار", mean: "Rudbar, a district of Sistan on the Helmand" },
    "hat-taa":                                     { fa: "حتا", mean: "even" },
    "saf-faa-ree":                                 { fa: "صفاری", mean: "of the coppersmith" },
    "ni-daa":                                      { fa: "ندا", mean: "call" },
    "yaa-wa-ree":                                  { fa: "یاوری", mean: "help" },
    "di-yaa-rash":                                 { fa: "دیارش", mean: "his land" },
    "da-wat":                                      { fa: "دعوت", mean: "invitation, call" },
    "da-wat may-na-maa-yad":                       { fa: "دعوت می‌نماید", mean: "calls, invites" },
    "da-wat na-mo-dan":                            { fa: "دعوت نمودن", mean: "to invite" },
    "tark":                                        { fa: "ترک", mean: "leaving" },
    "amr":                                         { fa: "امر", mean: "order, command" },
    "amr may-di-had":                              { fa: "امر می‌دهد", mean: "orders" },
    "amr daa-dan":                                 { fa: "امر دادن", mean: "to order" },
    "khud daa-ree":                                { fa: "خود داری", mean: "holding back, self-restraint" },
    "daa-ree":                                     { fa: "داری", mean: "keeping (khud daa-ree, holding oneself back)" },
    "mu-haal":                                     { fa: "محال", mean: "impossible" },
    "mu-qaa-bil":                                  { fa: "مقابل", mean: "front; against" },
    "ras-taa-khayz":                               { fa: "رستاخیز", mean: "uprising; the day of resurrection" },
    "mu-qaa-wa-mat":                               { fa: "مقاومت", mean: "resistance" },
    "mu-qaa-wa-mat na-may-ta-waa-nad":             { fa: "مقاومت نمی‌تواند", mean: "cannot resist" },
    "bar khay-zad":                                { fa: "بر خیزد", mean: "rise up" },
    "khay-zad":                                    { fa: "خیزد", mean: "rise" },
    "ba dee-ga-ray bi-gu-zaa-rad":                 { fa: "به دیگری بگذارد", mean: "leave to someone else" },
    "dee-ga-ray":                                  { fa: "دیگری", mean: "someone else" },
    "bi-gu-zaa-rad":                               { fa: "بگذارد", mean: "leave, put" },
    "maw-ja-haa":                                  { fa: "موجه‌ها", mean: "waves" },
    "bi-ghal-tad":                                 { fa: "بغلتد", mean: "roll" },
    "ghal-tee-dan":                                { fa: "غلتیدن", mean: "to roll" },
    "naa-khu-daa":                                 { fa: "ناخدا", mean: "ship’s captain" },
    "maa-hi-ray":                                  { fa: "ماهری", mean: "skilled (maa-hir + -ay, a: “a skilled …”)" },
    "sa-fee-na":                                   { fa: "سفینه", mean: "ship" },
    "mar-dum":                                     { fa: "مردم", mean: "people" },
    "dar-yaa":                                     { fa: "دریا", mean: "sea; river" },
    "sahm-geen":                                   { fa: "سهمگین", mean: "terrible, fearsome" },
    "bi-raa-nad":                                  { fa: "براند", mean: "drive, steer" },
    "raan-dan":                                    { fa: "راندن", mean: "to drive, to steer" },
    "saa-hil":                                     { fa: "ساحل", mean: "shore" },
    "amn":                                         { fa: "امن", mean: "safe" },
    "ki-naa-ra":                                   { fa: "کناره", mean: "coast, edge" },
    "aa-zaa-dee":                                  { fa: "آزادی", mean: "freedom" },
    "bi-ka-shaa-nad":                              { fa: "بکشاند", mean: "draw, bring" },
    "ka-shaan-dan":                                { fa: "کشاندن", mean: "to pull, to draw" },
    "tang-naa":                                    { fa: "تنگنا", mean: "narrow place" },
    "ni-gaah":                                     { fa: "نگاه", mean: "look, gaze" },
    "him-mat":                                     { fa: "همت", mean: "ambition, high purpose" },
    "aa-lee":                                      { fa: "عالی", mean: "high, excellent" },
    "fa-zaa":                                      { fa: "فضا", mean: "space, air" },
    "bay-ka-raan":                                 { fa: "بی‌کران", mean: "boundless" },
    "aar-zoo-haa":                                 { fa: "آرزوها", mean: "wishes, hopes" },
    "bu-land par-waa-zi":                          { fa: "بلند پرواز", mean: "soaring, high-flying" },
    "par-waaz":                                    { fa: "پرواز", mean: "flight" },
    "ar-sa":                                       { fa: "عرصه", mean: "field, arena" },
    "mar-day":                                     { fa: "مردی", mean: "a man" },
    "ja-waab":                                     { fa: "جواب", mean: "answer" },
    "ja-waab go-yad":                              { fa: "جواب گوید", mean: "answer" },
    "ja-waab guf-tan":                             { fa: "جواب گفتن", mean: "to answer" },
    "go-yad":                                      { fa: "گوید", mean: "says" },
    "guf-tan":                                     { fa: "گفتن", mean: "to say, to tell" },
    "kaar gaa-hi":                                 { fa: "کار گاه", mean: "a workshop" },
    "ba a-mal par-daa-zad":                        { fa: "به عمل پردازد", mean: "set to work" },
    "ba a-mal par-daakh-tan":                      { fa: "به عمل پرداختن", mean: "to set to work" },
    "a-mal":                                       { fa: "عمل", mean: "action, deed" },
    "par-daa-zad":                                 { fa: "پردازد", mean: "busies himself (with ba)" },
    "had-daad":                                    { fa: "حداد", mean: "blacksmith" },
    "chee-ra":                                     { fa: "چیره", mean: "skilled; in control" },
    "chee-ra das-tay":                             { fa: "چیره دستی", mean: "a skilled (one)" },
    "das-tay":                                     { fa: "دستی", mean: "hand (dast + -ay)" },
    "aa-han":                                      { fa: "آهن", mean: "iron" },
    "sard":                                        { fa: "سرد", mean: "cold" },
    "may-ko-bad":                                  { fa: "می‌کوبد", mean: "beats, hammers" },
    "ko-bee-dan":                                  { fa: "کوبیدن", mean: "to beat, to hammer" },
    "aa-ta-sheen":                                 { fa: "آتشین", mean: "fiery, red-hot" },
    "aa-ta-sheen may-gar-daa-nad":                 { fa: "آتشین می‌گرداند", mean: "makes red-hot" },
    "may-gar-daa-nad":                             { fa: "می‌گرداند", mean: "turns, makes" },
    "gar-daan-dan":                                { fa: "گرداندن", mean: "to turn, to make" },
    "aan-gaah":                                    { fa: "آنگاه", mean: "then" },
    "naa-qoo-say":                                 { fa: "ناقوسی", mean: "a bell" },
    "may-saa-zad":                                 { fa: "می‌سازد", mean: "makes" },
    "saa-li-yaan":                                 { fa: "سالیان", mean: "years" },
    "wal-wa-la an-daa-zad":                        { fa: "ولوله اندازد", mean: "make a clamor" },
    "wal-wa-la an-daakh-tan":                      { fa: "ولوله انداختن", mean: "to cause an uproar" },
    "an-daa-zad":                                  { fa: "اندازد", mean: "throw; cause" },
    "an-daakh-tan":                                { fa: "انداختن", mean: "throwing; to throw" },
    "baa-yist":                                    { fa: "بایست", mean: "must, had to" },
    "to-da":                                       { fa: "توده", mean: "mass, heap" },
    "mu-ta-far-riq":                               { fa: "متفرق", mean: "scattered" },
    "kut-la":                                      { fa: "کتله", mean: "mass, body" },
    "mut-ta-hid":                                  { fa: "متحد", mean: "united" },
    "pay-was-ta":                                  { fa: "پیوسته", mean: "joined, connected" },
    "mu-bad-dal gar-daa-nad":                      { fa: "مبدل گرداند", mean: "turn (into)" },
    "mu-bad-dal gar-daan-dan":                     { fa: "مبدل گرداندن", mean: "to turn into" },
    "gar-daa-nad":                                 { fa: "گرداند", mean: "turn, make" },
    "see-tash":                                    { fa: "صیتش", mean: "its cry, its fame" },
    "aa-faa-qay":                                  { fa: "آفاقی", mean: "horizons (aa-faaq + -ay)" },
    "door dast":                                   { fa: "دور دست", mean: "far away, distant" },
    "dast":                                        { fa: "دست", mean: "hand" },
    "pa-raa-gan-da sha-wad":                       { fa: "پراگنده شود", mean: "spreads" },
    "sha-wad":                                     { fa: "شود", mean: "become" },
    "saal-haa":                                    { fa: "سال‌ها", mean: "years" },
    "ta-nee-nash":                                 { fa: "طنینش", mean: "its echo" },
    "ki-shaa-war-zaan":                            { fa: "کشاورزان", mean: "farmers" },
    "ki-naa-ra-haa":                               { fa: "کناره‌ها", mean: "banks, shores" },
    "dij-la":                                      { fa: "دجله", mean: "the Tigris, the river of Baghdad" },
    "kha-raa-ba-haa":                              { fa: "خرابه‌ها", mean: "ruins" },
    "ma-daa-yin":                                  { fa: "مداین", mean: "Ctesiphon, the old Persian capital near Baghdad" },
    "bish-na-wand":                                { fa: "بشنوند", mean: "hear" },
    "af-soon":                                     { fa: "افسون", mean: "spell, magic" },
    "bar-ha-ma-naan":                              { fa: "برهمنان", mean: "Brahmins, Hindu priests" },
    "kaa-bul":                                     { fa: "کابل", mean: "Kabul" },
    "ghaz-na":                                     { fa: "غزنه", mean: "Ghazni" },
    "bi-shi-ka-nad":                               { fa: "بشکند", mean: "break" },
    "shi-kas-tan":                                 { fa: "شکستن", mean: "to break" },
    "af-sur-da":                                   { fa: "افسرده", mean: "sad, gloomy" },
    "khaa-kis-tar ni-shee-ni":                     { fa: "خاکستر نشین", mean: "sitting in ashes, miserable" },
    "ni-sheen":                                    { fa: "نشین", mean: "sitting (in words like khaa-kis-tar ni-sheen, sitting in ashes)" },
    "saa-maan":                                    { fa: "سامان", mean: "land, region" },
    "za-waa-yaa":                                  { fa: "زوایا", mean: "corners" },
    "rah-baa-ni-yat":                              { fa: "رهبانیت", mean: "the life of monks" },
    "may-daan":                                    { fa: "میدان", mean: "field, square" },
    "ha-qee-qee":                                  { fa: "حقیقی", mean: "real, true" },
    "khur-sheed":                                  { fa: "خورشید", mean: "sun" },
    "khaa-wa-ree":                                 { fa: "خاوری", mean: "eastern" },
    "mash-al":                                     { fa: "مشعل", mean: "torch" },
    "ta-waa-naa":                                  { fa: "توانا", mean: "strong, able" },
    "but-ka-da":                                   { fa: "بتکده", mean: "idol temple" },
    "baa-mi-yaan":                                 { fa: "بامیان", mean: "Bamiyan" },
    "rah-na-moon":                                 { fa: "رهنمون", mean: "guiding" },
    "rah-na-moon gar-daa-nad":                     { fa: "رهنمون گرداند", mean: "carry, lead the way with" },
    "sa-har-gaa-hay":                              { fa: "سحرگاهی", mean: "a dawn; each dawn (sa-har-gaah + -ay)" },
    "peer":                                        { fa: "پیر", mean: "old" },
    "ja-waan":                                     { fa: "جوان", mean: "young" },
    "das-ti ni-yaaz":                              { fa: "دست نیاز", mean: "a hand of need" },
    "ni-yaaz":                                     { fa: "نیاز", mean: "need" },
    "daa-maan":                                    { fa: "دامان", mean: "hem; lap" },
    "as-naam":                                     { fa: "اصنام", mean: "idols" },
    "koh-pay-kar":                                 { fa: "کوه‌پیکر", mean: "mountain-sized" },
    "da-raaz na-na-maa-yand":                      { fa: "دراز ننمایند", mean: "do not stretch out" },
    "da-raaz na-mo-dan":                           { fa: "دراز نمودن", mean: "to stretch out" },
    "na-na-maa-yand":                              { fa: "ننمایند", mean: "do not do" },
    "pay-raa-ya":                                  { fa: "پیرایه", mean: "ornament" },
    "khee-ra na-gar-dand":                         { fa: "خیره نگردند", mean: "are not dazzled" },
    "khee-ra gar-dee-dan":                         { fa: "خیره گردیدن", mean: "to be dazzled" },
    "na-gar-dand":                                 { fa: "نگردند", mean: "do not become" },
    "zaa-bul":                                     { fa: "زابل", mean: "Zabul, a land east of Sistan" },
    "ahl":                                         { fa: "اهل", mean: "people (of a place)" },
    "koh-saa-raan":                                { fa: "کهساران", mean: "mountains, mountain lands" },
    "ghar-cha":                                    { fa: "غرچه", mean: "Gharchistan, the mountain land of the upper Murghab river" },
    "u-boo-di-yat":                                { fa: "عبودیت", mean: "slavery, servitude" },
    "bay-gaa-na-gaan":                             { fa: "بیگانه‌گان", mean: "foreigners, strangers" },
    "pa-ras-tish":                                 { fa: "پرستش", mean: "worship" },
    "aw-haam":                                     { fa: "اوهام", mean: "illusions, superstitions" },
    "ra-haa-yee bakh-shad":                        { fa: "رهایی بخشد", mean: "free" },
    "ra-haa-yee bakh-shee-dan":                    { fa: "رهایی بخشیدن", mean: "to set free" },
    "bakh-shad":                                   { fa: "بخشد", mean: "give, grant" },
    "bakh-shee-dan":                               { fa: "بخشیدن", mean: "to give, to grant; to forgive" },
    "aa-zaad":                                     { fa: "آزاد", mean: "free" },
    "aa-zaad gar-daa-nad":                         { fa: "آزاد گرداند", mean: "make free" },
    "zee-raa":                                     { fa: "زیرا", mean: "because" },
    "mar-mooz":                                    { fa: "مرموز", mean: "mysterious" }
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
    "say": "far-zan-di roy-gar",
    "mean": "The Coppersmith's Son",
    "words": [
      [
        "فرزند",
        "far-zan-di",
        "far-zand"
      ],
      [
        "رویگر",
        "roy-gar",
        "roy-gar"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "koo-ra-yi aa-tash shu-la war ast wa chash-maa-ni si-yaa, raq-see-da-ni zu-baan-haa-yi so-zaa-ni aan raa may-ni-ga-rad.",
        "mean": "The furnace fire is blazing, and black eyes watch the dance of its burning tongues.",
        "words": [
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "آتش",
            "aa-tash",
            "aa-tash"
          ],
          [
            "شعله",
            "shu-la",
            "shu-la",
            "shu-la war"
          ],
          [
            "ور",
            "war",
            "war",
            "shu-la war"
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
            "چشمان",
            "chash-maa-ni",
            "chash-maan"
          ],
          [
            "سیاه،",
            "si-yaa",
            "si-yaa"
          ],
          [
            "رقصیدن",
            "raq-see-da-ni",
            "raq-see-dan"
          ],
          [
            "زبان‌های",
            "zu-baan-haa-yi",
            "zu-baan-haa"
          ],
          [
            "سوزان",
            "so-zaa-ni",
            "so-zaan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌نگرد.",
            "may-ni-ga-rad",
            "may-ni-ga-rad",
            "ni-ga-ris-tan"
          ]
        ]
      },
      {
        "say": "duk-ka-yi taa-reek az fu-ro-ghi aan gul-goon may-gar-dad wa ha-see-ri roy-gar raa baa koo-za-yi aab dar kun-ji aan kul-ba-yi mu-haq-qar jil-wa may-di-had.",
        "mean": "The dark shop turns rosy in its glow, and it lights up the coppersmith's reed mat, with a jug of water, in the corner of that humble hut.",
        "words": [
          [
            "دکهٔ",
            "duk-ka-yi",
            "duk-ka"
          ],
          [
            "تاریک",
            "taa-reek",
            "taa-reek"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "فروغ",
            "fu-ro-ghi",
            "fu-rogh"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "گلگون",
            "gul-goon",
            "gul-goon",
            "gul-goon may-gar-dad",
            "gul-goon gar-dee-dan"
          ],
          [
            "می‌گردد",
            "may-gar-dad",
            "may-gar-dad",
            "gul-goon may-gar-dad",
            "gar-dee-dan",
            "gul-goon gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حصیر",
            "ha-see-ri",
            "ha-seer"
          ],
          [
            "رویگر",
            "roy-gar",
            "roy-gar"
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
            "کوزهٔ",
            "koo-za-yi",
            "koo-za"
          ],
          [
            "آب",
            "aab",
            "aab"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کنج",
            "kun-ji",
            "kunj"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "کلبهٔ",
            "kul-ba-yi",
            "kul-ba"
          ],
          [
            "محقر",
            "mu-haq-qar",
            "mu-haq-qar"
          ],
          [
            "جلوه",
            "jil-wa",
            "jil-wa",
            "jil-wa may-di-had",
            "jil-wa daa-dan"
          ],
          [
            "می‌دهد.",
            "may-di-had",
            "may-di-had",
            "jil-wa may-di-had",
            "daa-dan",
            "jil-wa daa-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "far-zan-di roy-gar da-ri duk-ka raa bas-ta;",
        "mean": "The coppersmith's son has closed the door of the shop;",
        "words": [
          [
            "فرزند",
            "far-zan-di",
            "far-zand"
          ],
          [
            "رویگر",
            "roy-gar",
            "roy-gar"
          ],
          [
            "در",
            "da-ri",
            "dar#door"
          ],
          [
            "دکه",
            "duk-ka",
            "duk-ka"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بسته؛",
            "bas-ta",
            "bas-ta",
            "bas-tan"
          ]
        ]
      },
      {
        "say": "am-maa chash-maa-ni khud raa bas-ta na-may-ta-waa-nad.",
        "mean": "but he cannot close his eyes.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "چشمان",
            "chash-maa-ni",
            "chash-maan"
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
            "بسته",
            "bas-ta",
            "bas-ta",
            "bas-ta na-may-ta-waa-nad",
            "bas-tan"
          ],
          [
            "نمی‌تواند.",
            "na-may-ta-waa-nad",
            "na-may-ta-waa-nad",
            "bas-ta na-may-ta-waa-nad",
            "ta-waa-nis-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "khaab dar een zaa-wi-ya-yi nee-ma way-raan na-may-aa-yad wa way raa az an-day-sha-haa-yi door wa da-raaz na-may-ra-haa-nad.",
        "mean": "Sleep does not come in this half-ruined corner, and it does not free him from his long, far-reaching thoughts.",
        "words": [
          [
            "خواب",
            "khaab",
            "khaab"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "زاویهٔ",
            "zaa-wi-ya-yi",
            "zaa-wi-ya"
          ],
          [
            "نیمه",
            "nee-ma",
            "nee-ma",
            "nee-ma way-raan"
          ],
          [
            "ویران",
            "way-raan",
            "way-raan",
            "nee-ma way-raan"
          ],
          [
            "نمی‌آید",
            "na-may-aa-yad",
            "na-may-aa-yad",
            "aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وی",
            "way",
            "way"
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
            "اندیشه‌های",
            "an-day-sha-haa-yi",
            "an-day-sha-haa"
          ],
          [
            "دور",
            "door",
            "door",
            "door wa da-raaz"
          ],
          [
            "و",
            "wa",
            "wa",
            "door wa da-raaz"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz",
            "door wa da-raaz"
          ],
          [
            "نمی‌رهاند.",
            "na-may-ra-haa-nad",
            "na-may-ra-haa-nad",
            "ra-haan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ro ba ro-yi koo-ra-yi so-zaan, bar suf-fa-yi bu-lan-day ni-shas-ta paa-haa raa aa-waykh-ta,",
        "mean": "Facing the burning furnace, he sits on a high bench with his feet hanging down;",
        "words": [
          [
            "رو",
            "ro",
            "ro",
            "ro ba ro-yi"
          ],
          [
            "به",
            "ba",
            "ba",
            "ro ba ro-yi"
          ],
          [
            "روی",
            "ro-yi",
            "roy",
            "ro ba ro-yi"
          ],
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "سوزان،",
            "so-zaan",
            "so-zaan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "صفهٔ",
            "suf-fa-yi",
            "suf-fa"
          ],
          [
            "بلندی",
            "bu-lan-day",
            "bu-lan-day"
          ],
          [
            "نشسته",
            "ni-shas-ta",
            "ni-shas-ta",
            "ni-shas-tan"
          ],
          [
            "پاها",
            "paa-haa",
            "paa-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آویخته،",
            "aa-waykh-ta",
            "aa-waykh-ta",
            "aa-waykh-tan"
          ]
        ]
      },
      {
        "say": "dast-haa-yi khas-ta wa pur aa-ba-la-yi si-yaa-yi khaysh raa dar a-qab ba ro-yi za-meen ni-haa-da wa bar aan-haa tak-ya daa-da",
        "mean": "he has put his tired, blistered black hands on the ground behind him and leans on them,",
        "words": [
          [
            "دست‌های",
            "dast-haa-yi",
            "dast-haa"
          ],
          [
            "خسته",
            "khas-ta",
            "khas-ta"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پر",
            "pur",
            "pur",
            "pur aa-ba-la-yi"
          ],
          [
            "آبلهٔ",
            "aa-ba-la-yi",
            "aa-ba-la",
            "pur aa-ba-la-yi"
          ],
          [
            "سیاه",
            "si-yaa-yi",
            "si-yaa"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
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
            "عقب",
            "a-qab",
            "a-qab"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "روی",
            "ro-yi",
            "roy"
          ],
          [
            "زمین",
            "za-meen",
            "za-meen"
          ],
          [
            "نهاده",
            "ni-haa-da",
            "ni-haa-da",
            "ni-haa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "تکیه",
            "tak-ya",
            "tak-ya",
            "tak-ya daa-da",
            "tak-ya daa-dan"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "tak-ya daa-da",
            "daa-dan",
            "tak-ya daa-dan"
          ]
        ]
      },
      {
        "say": "wa chash-maa-nash choon paa-ra-haa-yi zu-ghaa-li bu-raaq dar mi-yaa-ni mu-zha-haa-yi bar gash-ta, bar aan akh-ga-ri fu-ro-zaan may-ni-ga-rad.",
        "mean": "and his eyes, like pieces of shining coal among their curled lashes, gaze at those glowing embers.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چشمانش",
            "chash-maa-nash",
            "chash-maa-nash"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "پاره‌های",
            "paa-ra-haa-yi",
            "paa-ra-haa"
          ],
          [
            "زغال",
            "zu-ghaa-li",
            "zu-ghaal"
          ],
          [
            "براق",
            "bu-raaq",
            "bu-raaq"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "مژه‌های",
            "mu-zha-haa-yi",
            "mu-zha-haa"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar gash-ta"
          ],
          [
            "گشته،",
            "gash-ta",
            "gash-ta",
            "bar gash-ta",
            "gash-tan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "اخگر",
            "akh-ga-ri",
            "akh-gar"
          ],
          [
            "فروزان",
            "fu-ro-zaan",
            "fu-ro-zaan"
          ],
          [
            "می‌نگرد.",
            "may-ni-ga-rad",
            "may-ni-ga-rad",
            "ni-ga-ris-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "wa dar sa-pay-da-yi khaa-kis-tar chi may-jo-yad?",
        "mean": "And what is he looking for in the whiteness of the ash?",
        "words": [
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
            "سپیدهٔ",
            "sa-pay-da-yi",
            "sa-pay-da"
          ],
          [
            "خاکستر",
            "khaa-kis-tar",
            "khaa-kis-tar"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "می‌جوید؟",
            "may-jo-yad",
            "may-jo-yad",
            "jus-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "a-raq choon daa-na-haa-yi mur-waa-reed bar ja-bee-ni ku-shaa-da-yi gan-dum-goo-nash may-da-rakh-shad,",
        "mean": "Sweat shines like pearls on his broad, wheat-colored brow,",
        "words": [
          [
            "عرق",
            "a-raq",
            "a-raq"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "دانه‌های",
            "daa-na-haa-yi",
            "daa-na-haa"
          ],
          [
            "مُروارید",
            "mur-waa-reed",
            "mur-waa-reed"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "جبین",
            "ja-bee-ni",
            "ja-been"
          ],
          [
            "کشادهٔ",
            "ku-shaa-da-yi",
            "ku-shaa-da"
          ],
          [
            "گندم‌گونش",
            "gan-dum-goo-nash",
            "gan-dum-goo-nash"
          ],
          [
            "می‌درخشد،",
            "may-da-rakh-shad",
            "may-da-rakh-shad",
            "da-rakh-shee-dan"
          ]
        ]
      },
      {
        "say": "tu go-yee dar khaa-mo-shee wa su-koon neez ba kaa-ri dush-waa-ray may-par-daa-zad wa yaa baa ha-ree-fi ta-waa-naa-yay may-sa-tay-zad;",
        "mean": "as if even in silence and stillness he were busy with hard work, or fighting a strong opponent;",
        "words": [
          [
            "تو",
            "tu",
            "tu",
            "tu go-yee"
          ],
          [
            "گویی",
            "go-yee",
            "go-yee",
            "tu go-yee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خاموشی",
            "khaa-mo-shee",
            "khaa-mo-shee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سکون",
            "su-koon",
            "su-koon"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "دشواری",
            "dush-waa-ray",
            "dush-waa-ray"
          ],
          [
            "می‌پردازد",
            "may-par-daa-zad",
            "may-par-daa-zad",
            "par-daakh-tan"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "حریف",
            "ha-ree-fi",
            "ha-reef"
          ],
          [
            "توانایی",
            "ta-waa-naa-yay",
            "ta-waa-naa-yay"
          ],
          [
            "می‌ستیزد؛",
            "may-sa-tay-zad",
            "may-sa-tay-zad",
            "sa-tay-zee-dan"
          ]
        ]
      },
      {
        "say": "a-gar chi koo-ra-yi aa-tash dar ki-naa-ri way ast;",
        "mean": "although the furnace fire is beside him,",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar",
            "a-gar chi"
          ],
          [
            "چه",
            "chi",
            "chi",
            "a-gar chi"
          ],
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "آتش",
            "aa-tash",
            "aa-tash"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "wa-lay dee-da-gaa-nash chu-naan may-ni-ga-rad ki ba chashm-an-daa-zi doo-ray dar u-fuq wa aq-saa-yi sah-raa ni-ga-raan baa-shad.",
        "mean": "his eyes look as if they were gazing at a far view on the horizon and the farthest reaches of the desert.",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "دیده‌گانش",
            "dee-da-gaa-nash",
            "dee-da-gaa-nash"
          ],
          [
            "چنان",
            "chu-naan",
            "chu-naan"
          ],
          [
            "می‌نگرد",
            "may-ni-ga-rad",
            "may-ni-ga-rad",
            "ni-ga-ris-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "چشم‌انداز",
            "chashm-an-daa-zi",
            "chashm-an-daaz"
          ],
          [
            "دوری",
            "doo-ray",
            "doo-ray"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "افق",
            "u-fuq",
            "u-fuq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اقصای",
            "aq-saa-yi",
            "aq-saa"
          ],
          [
            "صحرا",
            "sah-raa",
            "sah-raa"
          ],
          [
            "نگران",
            "ni-ga-raan",
            "ni-ga-raan",
            "ni-ga-raan baa-shad",
            "ni-ga-raan bu-dan"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "ni-ga-raan baa-shad",
            "bu-dan",
            "ni-ga-raan bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "baa-di sees-taan baa wa-zi-shi laa-yan-qa-ti-yi khaysh dar koy wa bar-zan ghur-rish daa-rad wa ji-daar-haa-yi naa-zu-ki duk-ka-yi roy-gar raa may-lar-zaa-nad.",
        "mean": "The wind of Sistan, with its endless blowing, roars through the streets and quarters and shakes the thin walls of the coppersmith's shop.",
        "words": [
          [
            "باد",
            "baa-di",
            "baad"
          ],
          [
            "سیستان",
            "sees-taan",
            "sees-taan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "وزش",
            "wa-zi-shi",
            "wa-zish"
          ],
          [
            "لاینقطع",
            "laa-yan-qa-ti-yi",
            "laa-yan-qa-ti"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کوی",
            "koy",
            "koy",
            "koy wa bar-zan"
          ],
          [
            "و",
            "wa",
            "wa",
            "koy wa bar-zan"
          ],
          [
            "برزن",
            "bar-zan",
            "bar-zan",
            "koy wa bar-zan"
          ],
          [
            "غرش",
            "ghur-rish",
            "ghur-rish",
            "ghur-rish daa-rad",
            "ghur-rish daash-tan"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "ghur-rish daa-rad",
            "daash-tan",
            "ghur-rish daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جدار‌های",
            "ji-daar-haa-yi",
            "ji-daar-haa"
          ],
          [
            "نازک",
            "naa-zu-ki",
            "naa-zuk"
          ],
          [
            "دکهٔ",
            "duk-ka-yi",
            "duk-ka"
          ],
          [
            "رویگر",
            "roy-gar",
            "roy-gar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌لرزاند.",
            "may-lar-zaa-nad",
            "may-lar-zaa-nad",
            "lar-zaan-dan"
          ]
        ]
      },
      {
        "say": "aa-waa-zi paa-yi aa-khi-reen das-ta-yi shab gar-daan khaa-mosh may-sha-wad wa ba juz naa-la-yi baad sa-daa-yay bar na-may-khay-zad.",
        "mean": "The footsteps of the last band of night watchmen fall silent, and no sound rises except the moaning of the wind.",
        "words": [
          [
            "آواز",
            "aa-waa-zi",
            "aa-waaz"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ],
          [
            "آخرین",
            "aa-khi-reen",
            "aa-khi-reen"
          ],
          [
            "دستهٔ",
            "das-ta-yi",
            "das-ta"
          ],
          [
            "شب",
            "shab",
            "shab",
            "shab gar-daan"
          ],
          [
            "گردان",
            "gar-daan",
            "gar-daan",
            "shab gar-daan"
          ],
          [
            "خاموش",
            "khaa-mosh",
            "khaa-mosh",
            "khaa-mosh may-sha-wad",
            "khaa-mosh shu-dan"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "khaa-mosh may-sha-wad",
            "shu-dan",
            "khaa-mosh shu-dan"
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
            "ba juz"
          ],
          [
            "جز",
            "juz",
            "juz",
            "ba juz"
          ],
          [
            "نالهٔ",
            "naa-la-yi",
            "naa-la"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "صدایی",
            "sa-daa-yay",
            "sa-daa-yay"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar na-may-khay-zad",
            "bar-khaas-tan"
          ],
          [
            "نمی‌خیزد.",
            "na-may-khay-zad",
            "na-may-khay-zad",
            "bar na-may-khay-zad",
            "bar-khaas-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "tan-haa baad, im-shab dar een sah-raa daa-wa-ree may-ku-nad, su-toon-haa-yi rayg raa az push-ta-yay ba push-ta-yay dee-gar naql may-di-had wa dar haa-moon mawj-haa-yi bu-land may-an-gay-zad.",
        "mean": "Only the wind rules in this desert tonight; it carries pillars of sand from one dune to another and raises high waves on the plain.",
        "words": [
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "باد،",
            "baad",
            "baad"
          ],
          [
            "امشب",
            "im-shab",
            "im-shab"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "صحرا",
            "sah-raa",
            "sah-raa"
          ],
          [
            "داوری",
            "daa-wa-ree",
            "daa-wa-ree",
            "daa-wa-ree may-ku-nad",
            "daa-wa-ree kar-dan"
          ],
          [
            "می‌کند،",
            "may-ku-nad",
            "may-ku-nad",
            "daa-wa-ree may-ku-nad",
            "kar-dan",
            "daa-wa-ree kar-dan"
          ],
          [
            "ستون‌های",
            "su-toon-haa-yi",
            "su-toon-haa"
          ],
          [
            "ریگ",
            "rayg",
            "rayg"
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
            "پشتهٔ",
            "push-ta-yay",
            "push-ta-yay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "پشته‌یی",
            "push-ta-yay",
            "push-ta-yay"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "نقل",
            "naql",
            "naql",
            "naql may-di-had",
            "naql daa-dan"
          ],
          [
            "می‌دهد",
            "may-di-had",
            "may-di-had",
            "naql may-di-had",
            "daa-dan",
            "naql daa-dan"
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
            "هامون",
            "haa-moon",
            "haa-moon"
          ],
          [
            "موج‌های",
            "mawj-haa-yi",
            "mawj-haa"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land"
          ],
          [
            "می‌انگیزد.",
            "may-an-gay-zad",
            "may-an-gay-zad",
            "an-gaykh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "chash-maa-ni da-rakh-shan-da, ha-noz ba so-yi aa-tash ni-ga-raan ast.",
        "mean": "The shining eyes are still gazing toward the fire.",
        "words": [
          [
            "چشمان",
            "chash-maa-ni",
            "chash-maan"
          ],
          [
            "درخشنده،",
            "da-rakh-shan-da",
            "da-rakh-shan-da"
          ],
          [
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba so-yi"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "ba so-yi"
          ],
          [
            "آتش",
            "aa-tash",
            "aa-tash"
          ],
          [
            "نگران",
            "ni-ga-raan",
            "ni-ga-raan",
            "ni-ga-raan ast"
          ],
          [
            "است.",
            "ast",
            "ast",
            "ni-ga-raan ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "az mi-yaa-ni zu-baa-na-haa-yi aa-tash, bi-yaa-baan-haa-yi bay-paa-yaan, koh-haa-yi bu-land wa dih-ka-da-haa-yi way-raan ba na-zar may-aa-yad.",
        "mean": "Through the flames, endless deserts, high mountains and ruined villages appear.",
        "words": [
          [
            "از",
            "az",
            "az",
            "az mi-yaa-ni"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan",
            "az mi-yaa-ni"
          ],
          [
            "زبانه‌های",
            "zu-baa-na-haa-yi",
            "zu-baa-na-haa"
          ],
          [
            "آتش،",
            "aa-tash",
            "aa-tash"
          ],
          [
            "بیابان‌های",
            "bi-yaa-baan-haa-yi",
            "bi-yaa-baan-haa"
          ],
          [
            "بی‌پایان،",
            "bay-paa-yaan",
            "bay-paa-yaan"
          ],
          [
            "کوه‌های",
            "koh-haa-yi",
            "koh-haa"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دهکده‌های",
            "dih-ka-da-haa-yi",
            "dih-ka-da-haa"
          ],
          [
            "ویران",
            "way-raan",
            "way-raan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba na-zar may-aa-yad",
            "ba na-zar aa-ma-dan"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar",
            "ba na-zar may-aa-yad",
            "ba na-zar aa-ma-dan"
          ],
          [
            "می‌آید.",
            "may-aa-yad",
            "may-aa-yad",
            "ba na-zar may-aa-yad",
            "aa-ma-dan",
            "ba na-zar aa-ma-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mar-daan wa za-naa-ni ki-shaa-warz baa chih-ra-haa-yi maa-tam-za-da wa pay-kar-haa-yi naa-ta-waan dee-da may-sha-wand.",
        "mean": "Farming men and women are seen, with grief-stricken faces and weak bodies.",
        "words": [
          [
            "مردان",
            "mar-daan",
            "mar-daan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زنان",
            "za-naa-ni",
            "za-naan"
          ],
          [
            "کشاورز",
            "ki-shaa-warz",
            "ki-shaa-warz"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "چهره‌های",
            "chih-ra-haa-yi",
            "chih-ra-haa"
          ],
          [
            "ماتم‌زده",
            "maa-tam-za-da",
            "maa-tam-za-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیکر‌های",
            "pay-kar-haa-yi",
            "pay-kar-haa"
          ],
          [
            "ناتوان",
            "naa-ta-waan",
            "naa-ta-waan"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-da may-sha-wand",
            "dee-dan",
            "dee-da shu-dan"
          ],
          [
            "می‌شوند.",
            "may-sha-wand",
            "may-sha-wand",
            "dee-da may-sha-wand",
            "shu-dan",
            "dee-da shu-dan"
          ]
        ]
      },
      {
        "say": "wa baaz nay-za-haa-yi bu-lan-di sa-waa-raa-ni taa-zan-da, may-da-rakh-shad.",
        "mean": "And again the long spears of galloping horsemen glitter.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "باز",
            "baaz",
            "baaz"
          ],
          [
            "نیزه‌های",
            "nay-za-haa-yi",
            "nay-za-haa"
          ],
          [
            "بلند",
            "bu-lan-di",
            "bu-land"
          ],
          [
            "سواران",
            "sa-waa-raa-ni",
            "sa-waa-raan"
          ],
          [
            "تازنده،",
            "taa-zan-da",
            "taa-zan-da"
          ],
          [
            "می‌درخشد.",
            "may-da-rakh-shad",
            "may-da-rakh-shad",
            "da-rakh-shee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar aan koo-ra-yi garm, ja-haa-nay jil-wa-gar ast.",
        "mean": "In that hot furnace a whole world appears.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "گرم،",
            "garm",
            "garm"
          ],
          [
            "جهانی",
            "ja-haa-nay",
            "ja-haa-nay"
          ],
          [
            "جلوه‌گر",
            "jil-wa-gar",
            "jil-wa-gar",
            "jil-wa-gar ast"
          ],
          [
            "است.",
            "ast",
            "ast",
            "jil-wa-gar ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar aan aa-ta-shi so-zaan ma-naa-zi-ri mukh-ta-li-fa-yi zin-da-gaa-nee-yi si-jis-taan na-mo-daar ast.",
        "mean": "In that burning fire the many scenes of life in Sistan can be seen.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "آتش",
            "aa-ta-shi",
            "aa-tash"
          ],
          [
            "سوزان",
            "so-zaan",
            "so-zaan"
          ],
          [
            "مناظر",
            "ma-naa-zi-ri",
            "ma-naa-zir"
          ],
          [
            "مختلفهٔ",
            "mukh-ta-li-fa-yi",
            "mukh-ta-li-fa"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee-yi",
            "zin-da-gaa-nee"
          ],
          [
            "سجستان",
            "si-jis-taan",
            "si-jis-taan"
          ],
          [
            "نمودار",
            "na-mo-daar",
            "na-mo-daar",
            "na-mo-daar ast"
          ],
          [
            "است.",
            "ast",
            "ast",
            "na-mo-daar ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "aa-ta-shi koo-ra-yi mar-di roy-gar, aa-yee-na-yi si-kan-dar bood wa jaa-mi ja-haan na-maa-yi jam-sheed.",
        "mean": "The fire in the coppersmith's furnace was Alexander's mirror and Jamshid's world-showing cup.",
        "words": [
          [
            "آتش",
            "aa-ta-shi",
            "aa-tash"
          ],
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "مرد",
            "mar-di",
            "mard"
          ],
          [
            "رویگر،",
            "roy-gar",
            "roy-gar"
          ],
          [
            "آیینهٔ",
            "aa-yee-na-yi",
            "aa-yee-na"
          ],
          [
            "سکندر",
            "si-kan-dar",
            "si-kan-dar"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جام",
            "jaa-mi",
            "jaam",
            "jaa-mi ja-haan na-maa-yi jam-sheed"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan",
            "jaa-mi ja-haan na-maa-yi jam-sheed"
          ],
          [
            "نمای",
            "na-maa-yi",
            "na-maay",
            "jaa-mi ja-haan na-maa-yi jam-sheed"
          ],
          [
            "جمشید.",
            "jam-sheed",
            "jam-sheed",
            "jaa-mi ja-haan na-maa-yi jam-sheed"
          ]
        ]
      }
    ],
    [
      {
        "say": "az een dun-yaa-yi bu-zurg, way ba kul-ba-yay ik-ti-faa kar-da wa az ha-ma kaar-haa ba roy-ga-ree par-daakh-ta ast,",
        "mean": "Out of this great world he has made do with a hut, and of all trades he has taken up coppersmithing;",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دنیای",
            "dun-yaa-yi",
            "dun-yaa"
          ],
          [
            "بزرگ،",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کلبه‌یی",
            "kul-ba-yay",
            "kul-ba-yay"
          ],
          [
            "اکتفا",
            "ik-ti-faa",
            "ik-ti-faa",
            "ik-ti-faa kar-da",
            "ik-ti-faa kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "ik-ti-faa kar-da",
            "kar-dan",
            "ik-ti-faa kar-dan"
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
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "کارها",
            "kaar-haa",
            "kaar-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "رویگری",
            "roy-ga-ree",
            "roy-ga-ree"
          ],
          [
            "پرداخته",
            "par-daakh-ta",
            "par-daakh-ta",
            "par-daakh-ta ast",
            "par-daakh-tan"
          ],
          [
            "است،",
            "ast",
            "ast",
            "par-daakh-ta ast",
            "par-daakh-tan"
          ]
        ]
      },
      {
        "say": "zin-da-gaa-nee, an-do-da-ni al-waa-ni ro-shan bar aj-saa-mi taa-reek neest wa roy-ga-ree pay-sha-yi bu-zur-gaan na-may-baa-shad taa chand mu-lam-ma-ay raa zay-baa, char-keen raa paa-kee-za wa kuh-na raa naw jil-wa di-had.",
        "mean": "but life is not painting bright colors over dark things, and coppersmithing is no trade for great men, making a few gilded things look beautiful, the dirty clean and the old new.",
        "words": [
          [
            "زنده‌گانی،",
            "zin-da-gaa-nee",
            "zin-da-gaa-nee"
          ],
          [
            "اندودن",
            "an-do-da-ni",
            "an-do-dan"
          ],
          [
            "الوان",
            "al-waa-ni",
            "al-waan"
          ],
          [
            "روشن",
            "ro-shan",
            "ro-shan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "اجسام",
            "aj-saa-mi",
            "aj-saam"
          ],
          [
            "تاریک",
            "taa-reek",
            "taa-reek"
          ],
          [
            "نیست",
            "neest",
            "neest",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رویگری",
            "roy-ga-ree",
            "roy-ga-ree"
          ],
          [
            "پیشهٔ",
            "pay-sha-yi",
            "pay-sha"
          ],
          [
            "بزرگان",
            "bu-zur-gaan",
            "bu-zur-gaan"
          ],
          [
            "نمی‌باشد",
            "na-may-baa-shad",
            "na-may-baa-shad",
            "bu-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "چند",
            "chand",
            "chand"
          ],
          [
            "ملمعی",
            "mu-lam-ma-ay",
            "mu-lam-ma-ay"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "زیبا،",
            "zay-baa",
            "zay-baa"
          ],
          [
            "چرکین",
            "char-keen",
            "char-keen"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پاکیزه",
            "paa-kee-za",
            "paa-kee-za"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کهنه",
            "kuh-na",
            "kuh-na"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نو",
            "naw",
            "naw"
          ],
          [
            "جلوه",
            "jil-wa",
            "jil-wa",
            "jil-wa di-had",
            "jil-wa daa-dan"
          ],
          [
            "دهد.",
            "di-had",
            "di-had",
            "jil-wa di-had",
            "daa-dan",
            "jil-wa daa-dan"
          ]
        ]
      },
      {
        "say": "oo ba-raa-yi i-laa-mi ha-qee-qat aa-fa-ree-da shu-da kaa-khay bar af-raa-zad ki bay-chaa-ra-gaan raa pa-naah baa-shad, wa mash-a-lay bi-yaf-ro-zad taa aa-waa-ra-gaan raa ba man-zi-li maq-sood bi-ra-saa-nad.",
        "mean": "He was created to proclaim the truth, to raise a palace that would shelter the helpless, and to light a torch that would bring the homeless to their goal.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "اعلام",
            "i-laa-mi",
            "i-laam"
          ],
          [
            "حقیقت",
            "ha-qee-qat",
            "ha-qee-qat"
          ],
          [
            "آفریده",
            "aa-fa-ree-da",
            "aa-fa-ree-da",
            "aa-fa-ree-da shu-da",
            "aa-fa-ree-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "aa-fa-ree-da shu-da",
            "shu-dan",
            "aa-fa-ree-dan"
          ],
          [
            "کاخی",
            "kaa-khay",
            "kaa-khay"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar af-raa-zad",
            "bar-af-raash-tan"
          ],
          [
            "افرازد",
            "af-raa-zad",
            "af-raa-zad",
            "bar af-raa-zad",
            "bar-af-raash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بیچاره‌گان",
            "bay-chaa-ra-gaan",
            "bay-chaa-ra-gaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پناه",
            "pa-naah",
            "pa-naah",
            "pa-naah baa-shad"
          ],
          [
            "باشد،",
            "baa-shad",
            "baa-shad",
            "pa-naah baa-shad",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مشعلی",
            "mash-a-lay",
            "mash-a-lay"
          ],
          [
            "بیفروزد",
            "bi-yaf-ro-zad",
            "bi-yaf-ro-zad",
            "af-rokh-tan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "آواره‌گان",
            "aa-waa-ra-gaan",
            "aa-waa-ra-gaan"
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
            "منزل",
            "man-zi-li",
            "man-zil",
            "man-zi-li maq-sood"
          ],
          [
            "مقصود",
            "maq-sood",
            "maq-sood",
            "man-zi-li maq-sood"
          ],
          [
            "برساند.",
            "bi-ra-saa-nad",
            "bi-ra-saa-nad",
            "ra-saan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "shaa-yad kul-ba-yi saf-faar nu-khus-teen mar-ha-la-yi majd wa bu-zur-gee baa-shad;",
        "mean": "Perhaps the coppersmith's hut is the first stage of glory and greatness;",
        "words": [
          [
            "شاید",
            "shaa-yad",
            "shaa-yad"
          ],
          [
            "کلبهٔ",
            "kul-ba-yi",
            "kul-ba"
          ],
          [
            "صفار",
            "saf-faar",
            "saf-faar"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "مرحلهٔ",
            "mar-ha-la-yi",
            "mar-ha-la"
          ],
          [
            "مجد",
            "majd",
            "majd"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بزرگی",
            "bu-zur-gee",
            "bu-zur-gee"
          ],
          [
            "باشد؛",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "am-maa baa-yad gaa-may az aan fa-raa tar gu-zaa-rad wa choon baa-di gha-ree-wan-da-yi sees-taan, sa-haa-ree-yi aan kish-war raa bi-pay-maa-yad, dar-waa-za-yi shahr-haa raa bi-gu-shaa-yad wa bar qal-a-yi za-ranj bar-aa-yad.",
        "mean": "but he must take a step beyond it, and like the roaring wind of Sistan cross the deserts of that country, open the gates of the cities and climb onto the fortress of Zaranj.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "گامی",
            "gaa-may",
            "gaa-may"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "فرا",
            "fa-raa",
            "fa-raa",
            "fa-raa tar"
          ],
          [
            "تر",
            "tar",
            "tar",
            "fa-raa tar"
          ],
          [
            "گذارد",
            "gu-zaa-rad",
            "gu-zaa-rad",
            "gu-zaash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "باد",
            "baa-di",
            "baad"
          ],
          [
            "غریوندهٔ",
            "gha-ree-wan-da-yi",
            "gha-ree-wan-da"
          ],
          [
            "سیستان،",
            "sees-taan",
            "sees-taan"
          ],
          [
            "صحاری",
            "sa-haa-ree-yi",
            "sa-haa-ree"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بپیماید،",
            "bi-pay-maa-yad",
            "bi-pay-maa-yad",
            "pay-mo-dan"
          ],
          [
            "دروازهٔ",
            "dar-waa-za-yi",
            "dar-waa-za"
          ],
          [
            "شهر‌ها",
            "shahr-haa",
            "shahr-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بگشاید",
            "bi-gu-shaa-yad",
            "bi-gu-shaa-yad",
            "gu-sho-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "قلعهٔ",
            "qal-a-yi",
            "qal-a"
          ],
          [
            "زرنج",
            "za-ranj",
            "za-ranj"
          ],
          [
            "برآید.",
            "bar-aa-yad",
            "bar-aa-yad",
            "bar-aa-ma-dan"
          ]
        ]
      },
      {
        "say": "taa chand di-yaa-ri oo jaw-laan-gaa-hi jaah ta-la-baa-ni a-rab wa a-jam gar-dad.",
        "mean": "How long shall his land be the playground of ambitious Arabs and Persians?",
        "words": [
          [
            "تا",
            "taa",
            "taa",
            "taa chand"
          ],
          [
            "چند",
            "chand",
            "chand",
            "taa chand"
          ],
          [
            "دیار",
            "di-yaa-ri",
            "di-yaar"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "جولانگاه",
            "jaw-laan-gaa-hi",
            "jaw-laan-gaah"
          ],
          [
            "جاه",
            "jaah",
            "jaah",
            "jaah ta-la-baa-ni"
          ],
          [
            "طلبان",
            "ta-la-baa-ni",
            "ta-la-baan",
            "jaah ta-la-baa-ni"
          ],
          [
            "عرب",
            "a-rab",
            "a-rab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عجم",
            "a-jam",
            "a-jam"
          ],
          [
            "گردد.",
            "gar-dad",
            "gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "taa-kay dar kaar-zaar-haa-yi mu-look ut-ta-waa-yif khoo-ni far-zan-daa-ni heer-mand ba ha-dar rood.",
        "mean": "How long shall the blood of the sons of the Helmand be wasted in the battles of petty kings?",
        "words": [
          [
            "تاکی",
            "taa-kay",
            "taa-kay"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کارزارهای",
            "kaar-zaar-haa-yi",
            "kaar-zaar-haa"
          ],
          [
            "ملوک",
            "mu-look",
            "mu-look",
            "mu-look ut-ta-waa-yif"
          ],
          [
            "الطوایف",
            "ut-ta-waa-yif",
            "ut-ta-waa-yif",
            "mu-look ut-ta-waa-yif"
          ],
          [
            "خون",
            "khoo-ni",
            "khoon"
          ],
          [
            "فرزندان",
            "far-zan-daa-ni",
            "far-zan-daan"
          ],
          [
            "هیرمند",
            "heer-mand",
            "heer-mand"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ha-dar rood",
            "ba ha-dar raf-tan"
          ],
          [
            "هدر",
            "ha-dar",
            "ha-dar",
            "ba ha-dar rood",
            "ba ha-dar raf-tan"
          ],
          [
            "رود.",
            "rood",
            "rood",
            "ba ha-dar rood",
            "ba ha-dar raf-tan"
          ]
        ]
      },
      {
        "say": "saa-lih dar sees-taan han-gaa-ma-yay bar paa daash-ta.",
        "mean": "Salih has stirred up an uproar in Sistan.",
        "words": [
          [
            "صالح",
            "saa-lih",
            "saa-lih"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سیستان",
            "sees-taan",
            "sees-taan"
          ],
          [
            "هنگامه‌یی",
            "han-gaa-ma-yay",
            "han-gaa-ma-yay"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar paa daash-ta",
            "bar-paa daash-tan"
          ],
          [
            "پا",
            "paa",
            "paa",
            "bar paa daash-ta",
            "bar-paa daash-tan"
          ],
          [
            "داشته.",
            "daash-ta",
            "daash-ta",
            "bar paa daash-ta",
            "daash-tan",
            "bar-paa daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "aan mar-di jaah ta-lab ba har so-yay may-taa-zad;",
        "mean": "That ambitious man charges in every direction;",
        "words": [
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "مرد",
            "mar-di",
            "mard"
          ],
          [
            "جاه",
            "jaah",
            "jaah",
            "jaah ta-lab"
          ],
          [
            "طلب",
            "ta-lab",
            "ta-lab",
            "jaah ta-lab"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "سویی",
            "so-yay",
            "so-yay"
          ],
          [
            "می‌تازد؛",
            "may-taa-zad",
            "may-taa-zad",
            "taakh-tan"
          ]
        ]
      },
      {
        "say": "gaah haa-ki-mi-ya-ti a-rab raa maw-ri-di ha-ma-laa-tash qa-raar may-di-had wa za-maa-nay aa-saa-yi-shi dih-ka-da-haa-yi aa-raam raa bar-ham may-za-nad.",
        "mean": "sometimes he attacks Arab rule, and sometimes he upsets the peace of quiet villages.",
        "words": [
          [
            "گاه",
            "gaah",
            "gaah"
          ],
          [
            "حاکمیت",
            "haa-ki-mi-ya-ti",
            "haa-ki-mi-yat"
          ],
          [
            "عرب",
            "a-rab",
            "a-rab"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di ha-ma-laa-tash qa-raar may-di-had"
          ],
          [
            "حملاتش",
            "ha-ma-laa-tash",
            "ha-ma-laa-tash",
            "maw-ri-di ha-ma-laa-tash qa-raar may-di-had"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di ha-ma-laa-tash qa-raar may-di-had"
          ],
          [
            "می‌دهد",
            "may-di-had",
            "may-di-had",
            "maw-ri-di ha-ma-laa-tash qa-raar may-di-had",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زمانی",
            "za-maa-nay",
            "za-maa-nay"
          ],
          [
            "آسایش",
            "aa-saa-yi-shi",
            "aa-saa-yish"
          ],
          [
            "دهکده‌های",
            "dih-ka-da-haa-yi",
            "dih-ka-da-haa"
          ],
          [
            "آرام",
            "aa-raam",
            "aa-raam"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "برهم",
            "bar-ham",
            "bar-ham",
            "bar-ham may-za-nad",
            "bar-ham za-dan"
          ],
          [
            "می‌زند.",
            "may-za-nad",
            "may-za-nad",
            "bar-ham may-za-nad",
            "za-dan",
            "bar-ham za-dan"
          ]
        ]
      },
      {
        "say": "aan mar-di sar-gar-daan choon gird baa-di sah-raa-yi si-jis-taan aa-waa-ra-yi naa-bee-naast.",
        "mean": "That wandering man is a blind vagrant, like a whirlwind of the Sistan desert.",
        "words": [
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "مرد",
            "mar-di",
            "mard"
          ],
          [
            "سرگردان",
            "sar-gar-daan",
            "sar-gar-daan"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "گرد",
            "gird",
            "gird",
            "gird baa-di"
          ],
          [
            "باد",
            "baa-di",
            "baad",
            "gird baa-di"
          ],
          [
            "صحرای",
            "sah-raa-yi",
            "sah-raa"
          ],
          [
            "سجستان",
            "si-jis-taan",
            "si-jis-taan"
          ],
          [
            "آوارهٔ",
            "aa-waa-ra-yi",
            "aa-waa-ra"
          ],
          [
            "نابیناست.",
            "naa-bee-naast",
            "naa-bee-naast"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba har so rah-si-paar may-gar-dad, aa-sho-bay may-an-gay-zad wa ba har za-mee-nay qa-dam gu-zaa-rad, sho-ray bar may-khay-zad;",
        "mean": "Wherever he goes he stirs up trouble, and on whatever land he sets foot an uproar rises;",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "سو",
            "so",
            "so"
          ],
          [
            "رهسپار",
            "rah-si-paar",
            "rah-si-paar",
            "rah-si-paar may-gar-dad",
            "rah-si-paar gar-dee-dan"
          ],
          [
            "می‌گردد،",
            "may-gar-dad",
            "may-gar-dad",
            "rah-si-paar may-gar-dad",
            "gar-dee-dan",
            "rah-si-paar gar-dee-dan"
          ],
          [
            "آشوبی",
            "aa-sho-bay",
            "aa-sho-bay"
          ],
          [
            "می‌انگیزد",
            "may-an-gay-zad",
            "may-an-gay-zad",
            "an-gaykh-tan"
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
            "هر",
            "har",
            "har"
          ],
          [
            "زمینی",
            "za-mee-nay",
            "za-mee-nay"
          ],
          [
            "قدم",
            "qa-dam",
            "qa-dam",
            "qa-dam gu-zaa-rad",
            "qa-dam gu-zaash-tan"
          ],
          [
            "گذارد،",
            "gu-zaa-rad",
            "gu-zaa-rad",
            "qa-dam gu-zaa-rad",
            "gu-zaash-tan",
            "qa-dam gu-zaash-tan"
          ],
          [
            "شوری",
            "sho-ray",
            "sho-ray"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar may-khay-zad",
            "bar-khaas-tan"
          ],
          [
            "می‌خیزد؛",
            "may-khay-zad",
            "may-khay-zad",
            "bar may-khay-zad",
            "bar-khaas-tan"
          ]
        ]
      },
      {
        "say": "dih-qaa-naan na-may-daa-nand sar-na-wisht-shaan chees?",
        "mean": "the farmers do not know what their fate is.",
        "words": [
          [
            "دهقانان",
            "dih-qaa-naan",
            "dih-qaa-naan"
          ],
          [
            "نمی‌دانند",
            "na-may-daa-nand",
            "na-may-daa-nand",
            "daa-nis-tan"
          ],
          [
            "سرنوشت‌شان",
            "sar-na-wisht-shaan",
            "sar-na-wisht-shaan"
          ],
          [
            "چیست؟",
            "chees",
            "chees"
          ]
        ]
      }
    ],
    [
      {
        "say": "az aa-maa-li a-rab wa sul-ta-yi ab-baa-si-yaan khas-ta shu-da and;",
        "mean": "They are tired of the Arabs' deeds and the rule of the Abbasids;",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "اعمال",
            "aa-maa-li",
            "aa-maal"
          ],
          [
            "عرب",
            "a-rab",
            "a-rab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سلطهٔ",
            "sul-ta-yi",
            "sul-ta"
          ],
          [
            "عباسیان",
            "ab-baa-si-yaan",
            "ab-baa-si-yaan"
          ],
          [
            "خسته",
            "khas-ta",
            "khas-ta",
            "khas-ta shu-da and",
            "khas-ta shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "khas-ta shu-da and",
            "shu-dan",
            "khas-ta shu-dan"
          ],
          [
            "اند؛",
            "and",
            "and",
            "khas-ta shu-da and",
            "khas-ta shu-dan"
          ]
        ]
      },
      {
        "say": "wa-lay az too-faa-ni aan sar-baa-zi too-faa-nee neez ha-raa-saa-nand.",
        "mean": "but they are also afraid of the storm of that stormy soldier.",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "توفان",
            "too-faa-ni",
            "too-faan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "سرباز",
            "sar-baa-zi",
            "sar-baaz"
          ],
          [
            "توفانی",
            "too-faa-nee",
            "too-faa-nee"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "هراسانند.",
            "ha-raa-saa-nand",
            "ha-raa-saa-nand"
          ]
        ]
      }
    ],
    [
      {
        "say": "dee-roz taa-hir dar nay-shaa-poor dee-da-gaan raa ba khud khee-ra may-gar-daa-need.",
        "mean": "Yesterday Tahir in Nishapur drew all eyes to himself.",
        "words": [
          [
            "دیروز",
            "dee-roz",
            "dee-roz"
          ],
          [
            "طاهر",
            "taa-hir",
            "taa-hir"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "نیشاپور",
            "nay-shaa-poor",
            "nay-shaa-poor"
          ],
          [
            "دیده‌گان",
            "dee-da-gaan",
            "dee-da-gaan"
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "خیره",
            "khee-ra",
            "khee-ra",
            "khee-ra may-gar-daa-need",
            "khee-ra gar-daa-nee-dan"
          ],
          [
            "می‌گردانید.",
            "may-gar-daa-need",
            "may-gar-daa-need",
            "khee-ra may-gar-daa-need",
            "gar-daa-nee-dan",
            "khee-ra gar-daa-nee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "mar-du-maa-ni khu-raa-saan ba so-yi way may-shi-taaf-tand wa oo raa ra-haa-nan-da-yi khud may-khaan-dand;",
        "mean": "The people of Khorasan hurried toward him and called him their savior;",
        "words": [
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "خراسان",
            "khu-raa-saan",
            "khu-raa-saan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سوی",
            "so-yi",
            "so"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "می‌شتافتند",
            "may-shi-taaf-tand",
            "may-shi-taaf-tand",
            "shi-taaf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "رهانندهٔ",
            "ra-haa-nan-da-yi",
            "ra-haa-nan-da"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "می‌خواندند؛",
            "may-khaan-dand",
            "may-khaan-dand",
            "khaan-dan"
          ]
        ]
      },
      {
        "say": "wa-lay im-roz chash-mi ja-haan bee-nash ni-ga-raan neest.",
        "mean": "but today his world-seeing eye watches no more.",
        "words": [
          [
            "ولی",
            "wa-lay",
            "wa-lay"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "چشم",
            "chash-mi",
            "chashm"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan",
            "ja-haan bee-nash"
          ],
          [
            "بینش",
            "bee-nash",
            "bee-nash",
            "ja-haan bee-nash"
          ],
          [
            "نگران",
            "ni-ga-raan",
            "ni-ga-raan",
            "ni-ga-raan neest"
          ],
          [
            "نیست.",
            "neest",
            "neest",
            "ni-ga-raan neest",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "raad mar-di po-shang ha-yaa-ti pur shor wa pur ham-ha-ma-yi khaysh raa ba paa-yaan ra-saa-nee-da wa chan-gaa-li marg too-maa-ri zin-da-gaa-nee-yi baa if-ti-khaa-rash raa da-ree-da.",
        "mean": "The noble man of Pushang has brought his passionate, eventful life to an end, and the claws of death have torn up the scroll of his glorious life.",
        "words": [
          [
            "راد",
            "raad",
            "raad",
            "raad mar-di"
          ],
          [
            "مرد",
            "mar-di",
            "mard",
            "raad mar-di"
          ],
          [
            "پوشنگ",
            "po-shang",
            "po-shang"
          ],
          [
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "پر",
            "pur",
            "pur",
            "pur shor"
          ],
          [
            "شور",
            "shor",
            "shor",
            "pur shor"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پر",
            "pur",
            "pur",
            "pur ham-ha-ma-yi"
          ],
          [
            "همهمهٔ",
            "ham-ha-ma-yi",
            "ham-ha-ma",
            "pur ham-ha-ma-yi"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
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
            "ba paa-yaan ra-saa-nee-da",
            "ba paa-yaan ra-saan-dan"
          ],
          [
            "پایان",
            "paa-yaan",
            "paa-yaan",
            "ba paa-yaan ra-saa-nee-da",
            "ba paa-yaan ra-saan-dan"
          ],
          [
            "رسانیده",
            "ra-saa-nee-da",
            "ra-saa-nee-da",
            "ba paa-yaan ra-saa-nee-da",
            "ra-saan-dan",
            "ba paa-yaan ra-saan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چنگال",
            "chan-gaa-li",
            "chan-gaal"
          ],
          [
            "مرگ",
            "marg",
            "marg"
          ],
          [
            "طومار",
            "too-maa-ri",
            "too-maar"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee-yi",
            "zin-da-gaa-nee"
          ],
          [
            "با",
            "baa",
            "baa",
            "baa if-ti-khaa-rash"
          ],
          [
            "افتخارش",
            "if-ti-khaa-rash",
            "if-ti-khaa-rash",
            "baa if-ti-khaa-rash"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "دریده.",
            "da-ree-da",
            "da-ree-da",
            "da-ree-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pi-sa-raa-ni oo nay-roo-yi ja-haan-daa-ree na-daa-rand wa bar aw-ran-gi khu-raa-saan, koo-chak may-na-maa-yand.",
        "mean": "His sons do not have the strength to rule, and they look small on the throne of Khorasan.",
        "words": [
          [
            "پسران",
            "pi-sa-raa-ni",
            "pi-sa-raan"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نیروی",
            "nay-roo-yi",
            "nay-roo"
          ],
          [
            "جهانداری",
            "ja-haan-daa-ree",
            "ja-haan-daa-ree"
          ],
          [
            "ندارند",
            "na-daa-rand",
            "na-daa-rand",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "اورنگ",
            "aw-ran-gi",
            "aw-rang"
          ],
          [
            "خراسان،",
            "khu-raa-saan",
            "khu-raa-saan"
          ],
          [
            "کوچک",
            "koo-chak",
            "koo-chak",
            "koo-chak may-na-maa-yand",
            "koo-chak na-mo-dan"
          ],
          [
            "می‌نمایند.",
            "may-na-maa-yand",
            "may-na-maa-yand",
            "koo-chak may-na-maa-yand",
            "na-mo-dan",
            "koo-chak na-mo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ha-noz chash-maa-ni pi-sa-ri saf-faar ba koo-ra-yi fu-ro-zaan mu-ta-waj-jih ast.",
        "mean": "The eyes of the coppersmith's son are still turned toward the glowing furnace.",
        "words": [
          [
            "هنوز",
            "ha-noz",
            "ha-noz"
          ],
          [
            "چشمان",
            "chash-maa-ni",
            "chash-maan"
          ],
          [
            "پسر",
            "pi-sa-ri",
            "pi-sar"
          ],
          [
            "صفار",
            "saf-faar",
            "saf-faar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "فروزان",
            "fu-ro-zaan",
            "fu-ro-zaan"
          ],
          [
            "متوجه",
            "mu-ta-waj-jih",
            "mu-ta-waj-jih",
            "mu-ta-waj-jih ast"
          ],
          [
            "است.",
            "ast",
            "ast",
            "mu-ta-waj-jih ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "a-raq az ja-bee-nash may-ta-raa-wad wa na-fa-sash sha-deed tar may-gar-dad.",
        "mean": "Sweat seeps from his brow, and his breathing grows heavier.",
        "words": [
          [
            "عرق",
            "a-raq",
            "a-raq"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جبینش",
            "ja-bee-nash",
            "ja-bee-nash"
          ],
          [
            "می‌تراود",
            "may-ta-raa-wad",
            "may-ta-raa-wad",
            "ta-raa-wee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نفسش",
            "na-fa-sash",
            "na-fa-sash"
          ],
          [
            "شدید",
            "sha-deed",
            "sha-deed",
            "sha-deed tar"
          ],
          [
            "تر",
            "tar",
            "tar",
            "sha-deed tar"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "gu-maan may-ku-nad, az ghur-ri-shi baad naa-la-yay ba go-shi oo may-ra-sad wa ni-daa-yay may-shi-na-wad",
        "mean": "He imagines that a moan reaches his ears from the roar of the wind, and he hears a call;",
        "words": [
          [
            "گمان",
            "gu-maan",
            "gu-maan",
            "gu-maan may-ku-nad",
            "gu-maan kar-dan"
          ],
          [
            "می‌کند،",
            "may-ku-nad",
            "may-ku-nad",
            "gu-maan may-ku-nad",
            "kar-dan",
            "gu-maan kar-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "غرش",
            "ghur-ri-shi",
            "ghur-rish"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "ناله‌یی",
            "naa-la-yay",
            "naa-la-yay"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba go-shi oo may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "گوش",
            "go-shi",
            "gosh",
            "ba go-shi oo may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "او",
            "oo",
            "oo",
            "ba go-shi oo may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "می‌رسد",
            "may-ra-sad",
            "may-ra-sad",
            "ba go-shi oo may-ra-sad",
            "ra-see-dan",
            "ba gosh ra-see-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ندایی",
            "ni-daa-yay",
            "ni-daa-yay"
          ],
          [
            "می‌شنود",
            "may-shi-na-wad",
            "may-shi-na-wad",
            "shi-nee-dan"
          ]
        ]
      },
      {
        "say": "har lam-ha, aan sa-daa bu-land-tar may-gar-dad wa baaz baa aa-waa-zi baad khaa-mosh may-sha-wad,",
        "mean": "every moment that voice grows louder, and then dies away again in the sound of the wind;",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "لمحه،",
            "lam-ha",
            "lam-ha"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "صدا",
            "sa-daa",
            "sa-daa"
          ],
          [
            "بلندتر",
            "bu-land-tar",
            "bu-land-tar",
            "bu-land-tar may-gar-dad"
          ],
          [
            "می‌گردد",
            "may-gar-dad",
            "may-gar-dad",
            "bu-land-tar may-gar-dad",
            "gar-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "باز",
            "baaz",
            "baaz"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "آواز",
            "aa-waa-zi",
            "aa-waaz"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "خاموش",
            "khaa-mosh",
            "khaa-mosh",
            "khaa-mosh may-sha-wad",
            "khaa-mosh shu-dan"
          ],
          [
            "می‌شود،",
            "may-sha-wad",
            "may-sha-wad",
            "khaa-mosh may-sha-wad",
            "shu-dan",
            "khaa-mosh shu-dan"
          ]
        ]
      },
      {
        "say": "lah-za-yay na-may-gu-za-rad ki tund baad baa aa-waa-zi ja-haan gee-rash baar dee-gar bar may-khay-zad wa aan sa-daa dar ghul-ghu-la-yi aan ho-way-daa may-gar-dad.",
        "mean": "not a moment passes before the gale rises once more with its world-seizing sound, and that voice comes clear in its din.",
        "words": [
          [
            "لحظه‌یی",
            "lah-za-yay",
            "lah-za-yay"
          ],
          [
            "نمی‌گذرد",
            "na-may-gu-za-rad",
            "na-may-gu-za-rad",
            "gu-zash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تند",
            "tund",
            "tund",
            "tund baad"
          ],
          [
            "باد",
            "baad",
            "baad",
            "tund baad"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "آواز",
            "aa-waa-zi",
            "aa-waaz"
          ],
          [
            "جهان",
            "ja-haan",
            "ja-haan",
            "ja-haan gee-rash"
          ],
          [
            "گیرش",
            "gee-rash",
            "gee-rash",
            "ja-haan gee-rash"
          ],
          [
            "بار",
            "baar",
            "baar",
            "baar dee-gar"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar",
            "baar dee-gar"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar may-khay-zad",
            "bar-khaas-tan"
          ],
          [
            "می‌خیزد",
            "may-khay-zad",
            "may-khay-zad",
            "bar may-khay-zad",
            "bar-khaas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "صدا",
            "sa-daa",
            "sa-daa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غلغلهٔ",
            "ghul-ghu-la-yi",
            "ghul-ghu-la"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "هویدا",
            "ho-way-daa",
            "ho-way-daa",
            "ho-way-daa may-gar-dad",
            "ho-way-daa gar-dee-dan"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "ho-way-daa may-gar-dad",
            "gar-dee-dan",
            "ho-way-daa gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "far-zan-di roy-gar ba khaa-tir may-aa-wa-rad ki dar koo-da-kee gaah gaah ba shu-baa-nee may-bar-aa-mad wa id-da-yi mah-doo-di gos-fan-daa-ni pa-dar raa ba sah-raa may-aa-wa-rad.",
        "mean": "The coppersmith's son remembers that as a child he sometimes went out as a shepherd and brought his father's few sheep to the desert.",
        "words": [
          [
            "فرزند",
            "far-zan-di",
            "far-zand"
          ],
          [
            "رویگر",
            "roy-gar",
            "roy-gar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba khaa-tir may-aa-wa-rad",
            "ba khaa-tir aa-war-dan"
          ],
          [
            "خاطر",
            "khaa-tir",
            "khaa-tir",
            "ba khaa-tir may-aa-wa-rad",
            "ba khaa-tir aa-war-dan"
          ],
          [
            "می‌آورد",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "ba khaa-tir may-aa-wa-rad",
            "aa-war-dan",
            "ba khaa-tir aa-war-dan"
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
            "کودکی",
            "koo-da-kee",
            "koo-da-kee"
          ],
          [
            "گاه",
            "gaah",
            "gaah",
            "gaah gaah"
          ],
          [
            "گاه",
            "gaah",
            "gaah",
            "gaah gaah"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شبانی",
            "shu-baa-nee",
            "shu-baa-nee"
          ],
          [
            "می‌برآمد",
            "may-bar-aa-mad",
            "may-bar-aa-mad",
            "bar-aa-ma-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عدهٔ",
            "id-da-yi",
            "id-da"
          ],
          [
            "محدود",
            "mah-doo-di",
            "mah-dood"
          ],
          [
            "گوسفندان",
            "gos-fan-daa-ni",
            "gos-fan-daan"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
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
            "صحرا",
            "sah-raa",
            "sah-raa"
          ],
          [
            "می‌آورد.",
            "may-aa-wa-rad",
            "may-aa-wa-rad",
            "aa-war-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "gaa-hay amr bi-raa-da-rash baa way ham-raah may-bood wa za-maa-nay na-haar raa dar sah-raa ba way may-ra-saa-need.",
        "mean": "Sometimes Amr, his brother, went with him, and at times brought him his lunch in the desert.",
        "words": [
          [
            "گاهی",
            "gaa-hay",
            "gaa-hay"
          ],
          [
            "عمرو",
            "amr",
            "amr#name"
          ],
          [
            "برادرش",
            "bi-raa-da-rash",
            "bi-raa-da-rash"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "همراه",
            "ham-raah",
            "ham-raah",
            "ham-raah may-bood",
            "ham-raah bu-dan"
          ],
          [
            "می‌بود",
            "may-bood",
            "may-bood",
            "ham-raah may-bood",
            "bu-dan",
            "ham-raah bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زمانی",
            "za-maa-nay",
            "za-maa-nay"
          ],
          [
            "نهار",
            "na-haar",
            "na-haar"
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
            "صحرا",
            "sah-raa",
            "sah-raa"
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
            "می‌رسانید.",
            "may-ra-saa-need",
            "may-ra-saa-need",
            "ra-saan-dan"
          ]
        ]
      },
      {
        "say": "ro-zay tund-baad wa-zee-dan gi-rift wa ha-waa taa-reek shud,",
        "mean": "One day a gale began to blow and the air grew dark;",
        "words": [
          [
            "روزی",
            "ro-zay",
            "ro-zay"
          ],
          [
            "تندباد",
            "tund-baad",
            "tund-baad"
          ],
          [
            "وزیدن",
            "wa-zee-dan",
            "wa-zee-dan",
            "wa-zee-dan gi-rift"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "wa-zee-dan gi-rift",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هوا",
            "ha-waa",
            "ha-waa"
          ],
          [
            "تاریک",
            "taa-reek",
            "taa-reek",
            "taa-reek shud"
          ],
          [
            "شد،",
            "shud",
            "shud",
            "taa-reek shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "sar-dee bar sah-raa mu-sal-lat gasht,",
        "mean": "cold took hold of the desert;",
        "words": [
          [
            "سردی",
            "sar-dee",
            "sar-dee"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "صحرا",
            "sah-raa",
            "sah-raa"
          ],
          [
            "مسلط",
            "mu-sal-lat",
            "mu-sal-lat",
            "mu-sal-lat gasht",
            "mu-sal-lat gash-tan"
          ],
          [
            "گشت،",
            "gasht",
            "gasht",
            "mu-sal-lat gasht",
            "gash-tan",
            "mu-sal-lat gash-tan"
          ]
        ]
      },
      {
        "say": "way wa gos-fan-daan dar rayg-is-taa-ni pur wal-wa-la ba ki-naa-ray kha-zee-da boo-dand, raah gum kar-da",
        "mean": "he and the sheep had crept into a corner of the roaring sand dunes, having lost their way,",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گوسفندان",
            "gos-fan-daan",
            "gos-fan-daan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ریگستان",
            "rayg-is-taa-ni",
            "rayg-is-taan"
          ],
          [
            "پر",
            "pur",
            "pur",
            "pur wal-wa-la"
          ],
          [
            "ولوله",
            "wal-wa-la",
            "wal-wa-la",
            "pur wal-wa-la"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کناری",
            "ki-naa-ray",
            "ki-naa-ray"
          ],
          [
            "خزیده",
            "kha-zee-da",
            "kha-zee-da",
            "kha-zee-da boo-dand",
            "kha-zee-dan"
          ],
          [
            "بودند،",
            "boo-dand",
            "boo-dand",
            "kha-zee-da boo-dand",
            "bu-dan",
            "kha-zee-dan"
          ],
          [
            "راه",
            "raah",
            "raah",
            "raah gum kar-da",
            "raah gum kar-dan"
          ],
          [
            "گم",
            "gum",
            "gum",
            "raah gum kar-da",
            "raah gum kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "raah gum kar-da",
            "kar-dan",
            "raah gum kar-dan"
          ]
        ]
      },
      {
        "say": "wa naa-ga-haan aa-waa-zi na-heef wa naa-ta-waa-nay dar ghur-ri-shi baad bar-khaas-ta wa ya-sash raa ba u-meed mu-bad-dal saakht.",
        "mean": "and suddenly a thin, weak voice rose in the roar of the wind and turned his despair into hope.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناگهان",
            "naa-ga-haan",
            "naa-ga-haan"
          ],
          [
            "آواز",
            "aa-waa-zi",
            "aa-waaz"
          ],
          [
            "نحیف",
            "na-heef",
            "na-heef"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناتوانی",
            "naa-ta-waa-nay",
            "naa-ta-waa-nay"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غرش",
            "ghur-ri-shi",
            "ghur-rish"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "برخاسته",
            "bar-khaas-ta",
            "bar-khaas-ta",
            "bar-khaas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یأسش",
            "ya-sash",
            "ya-sash"
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
            "امید",
            "u-meed",
            "u-meed"
          ],
          [
            "مبدل",
            "mu-bad-dal",
            "mu-bad-dal",
            "mu-bad-dal saakht",
            "mu-bad-dal saakh-tan"
          ],
          [
            "ساخت.",
            "saakht",
            "saakht",
            "mu-bad-dal saakht",
            "saakh-tan",
            "mu-bad-dal saakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "bay-ikh-ti-yaar baa gos-fan-daan ba ha-ra-kat aa-mad wa ba so-yi aan aa-waaz rah-si-paar shud, taa aan ki ba amr ra-seed wa ba hi-daa-ya-ti way ba jaa-ni-bi dih-ka-da ra-waa-na gar-deed wa az too-faa-ni marg ra-haa-yee yaaft.",
        "mean": "Without thinking he set off with the sheep and headed toward that voice, until he reached Amr, and guided by him he set out toward the village and escaped the storm of death.",
        "words": [
          [
            "بی‌اختیار",
            "bay-ikh-ti-yaar",
            "bay-ikh-ti-yaar"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "گوسفندان",
            "gos-fan-daan",
            "gos-fan-daan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ha-ra-kat aa-mad",
            "ba ha-ra-kat aa-ma-dan"
          ],
          [
            "حرکت",
            "ha-ra-kat",
            "ha-ra-kat",
            "ba ha-ra-kat aa-mad",
            "ba ha-ra-kat aa-ma-dan"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "ba ha-ra-kat aa-mad",
            "aa-ma-dan",
            "ba ha-ra-kat aa-ma-dan"
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
            "سوی",
            "so-yi",
            "so"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "آواز",
            "aa-waaz",
            "aa-waaz"
          ],
          [
            "رهسپار",
            "rah-si-paar",
            "rah-si-paar",
            "rah-si-paar shud",
            "rah-si-paar shu-dan"
          ],
          [
            "شد،",
            "shud",
            "shud",
            "rah-si-paar shud",
            "shu-dan",
            "rah-si-paar shu-dan"
          ],
          [
            "تا",
            "taa",
            "taa",
            "taa aan ki"
          ],
          [
            "آن",
            "aan",
            "aan",
            "taa aan ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "taa aan ki"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عمرو",
            "amr",
            "amr#name"
          ],
          [
            "رسید",
            "ra-seed",
            "ra-seed",
            "ra-see-dan"
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
            "ba hi-daa-ya-ti way"
          ],
          [
            "هدایت",
            "hi-daa-ya-ti",
            "hi-daa-yat",
            "ba hi-daa-ya-ti way"
          ],
          [
            "وی",
            "way",
            "way",
            "ba hi-daa-ya-ti way"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba jaa-ni-bi"
          ],
          [
            "جانب",
            "jaa-ni-bi",
            "jaa-nib",
            "ba jaa-ni-bi"
          ],
          [
            "دهکده",
            "dih-ka-da",
            "dih-ka-da"
          ],
          [
            "روانه",
            "ra-waa-na",
            "ra-waa-na",
            "ra-waa-na gar-deed",
            "ra-waa-na gar-dee-dan"
          ],
          [
            "گردید",
            "gar-deed",
            "gar-deed",
            "ra-waa-na gar-deed",
            "gar-dee-dan",
            "ra-waa-na gar-dee-dan"
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
            "توفان",
            "too-faa-ni",
            "too-faan"
          ],
          [
            "مرگ",
            "marg",
            "marg"
          ],
          [
            "رهایی",
            "ra-haa-yee",
            "ra-haa-yee",
            "ra-haa-yee yaaft",
            "ra-haa-yee yaaf-tan"
          ],
          [
            "یافت.",
            "yaaft",
            "yaaft",
            "ra-haa-yee yaaft",
            "yaaf-tan",
            "ra-haa-yee yaaf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "im-shab neez az ghur-ri-shi baad chu-naan aa-waa-zay ba gosh may-ra-sad wa way raa ba khaysh-tan may-khaa-nad;",
        "mean": "Tonight too such a voice is heard in the roar of the wind, and it calls him to itself;",
        "words": [
          [
            "امشب",
            "im-shab",
            "im-shab"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "غرش",
            "ghur-ri-shi",
            "ghur-rish"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "چنان",
            "chu-naan",
            "chu-naan"
          ],
          [
            "آوازی",
            "aa-waa-zay",
            "aa-waa-zay"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba gosh may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "گوش",
            "gosh",
            "gosh",
            "ba gosh may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "می‌رسد",
            "may-ra-sad",
            "may-ra-sad",
            "ba gosh may-ra-sad",
            "ra-see-dan",
            "ba gosh ra-see-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وی",
            "way",
            "way"
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
            "خویشتن",
            "khaysh-tan",
            "khaysh-tan"
          ],
          [
            "می‌خواند؛",
            "may-khaa-nad",
            "may-khaa-nad",
            "khaan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "am-maa een baar aa-waa-zi na-heef wa naa-ta-waa-ni am-ri koo-chak neest.",
        "mean": "but this time it is not the thin, weak voice of little Amr.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "این",
            "een",
            "een",
            "een baar"
          ],
          [
            "بار",
            "baar",
            "baar",
            "een baar"
          ],
          [
            "آواز",
            "aa-waa-zi",
            "aa-waaz"
          ],
          [
            "نحیف",
            "na-heef",
            "na-heef"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناتوان",
            "naa-ta-waa-ni",
            "naa-ta-waan"
          ],
          [
            "عمرو",
            "am-ri",
            "amr#name"
          ],
          [
            "کوچک",
            "koo-chak",
            "koo-chak"
          ],
          [
            "نیست.",
            "neest",
            "neest",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "een baar ni-daa-yay ast hay-bat-naak, gee-ran-da wa ha-ya-jaan an-gayz,",
        "mean": "This time it is a call, awe-inspiring, gripping and thrilling;",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "بار",
            "baar",
            "baar"
          ],
          [
            "ندایی",
            "ni-daa-yay",
            "ni-daa-yay"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "هیبت‌ناک،",
            "hay-bat-naak",
            "hay-bat-naak"
          ],
          [
            "گیرنده",
            "gee-ran-da",
            "gee-ran-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هیجان",
            "ha-ya-jaan",
            "ha-ya-jaan",
            "ha-ya-jaan an-gayz"
          ],
          [
            "انگیز،",
            "an-gayz",
            "an-gayz",
            "ha-ya-jaan an-gayz"
          ]
        ]
      },
      {
        "say": "een baar aa-waa-zay ast dil gu-daaz, bu-land wa ja-haan-geer wa az ha-ma aa-waaz-haa-yi too-faa-nee bu-land tar ast.",
        "mean": "this time it is a voice that melts the heart, loud and world-filling, louder than all the voices of the storm.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "بار",
            "baar",
            "baar"
          ],
          [
            "آوازی",
            "aa-waa-zay",
            "aa-waa-zay"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "دل",
            "dil",
            "dil",
            "dil gu-daaz"
          ],
          [
            "گداز،",
            "gu-daaz",
            "gu-daaz",
            "dil gu-daaz"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهان‌گیر",
            "ja-haan-geer",
            "ja-haan-geer"
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
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "آواز‌های",
            "aa-waaz-haa-yi",
            "aa-waaz-haa"
          ],
          [
            "توفانی",
            "too-faa-nee",
            "too-faa-nee"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land",
            "bu-land tar"
          ],
          [
            "تر",
            "tar",
            "tar",
            "bu-land tar"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "bar ham-ha-ma-yi baad-haa wa jum-bi-shi rayg-haa mu-sal-lat gar-dee-da wa ba har so-yay pa-raa-gan-da may-sha-wad;",
        "mean": "It rises above the din of the winds and the movement of the sands, and spreads in every direction;",
        "words": [
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "همهمهٔ",
            "ham-ha-ma-yi",
            "ham-ha-ma"
          ],
          [
            "بادها",
            "baad-haa",
            "baad-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جنبش",
            "jum-bi-shi",
            "jum-bish"
          ],
          [
            "ریگ‌ها",
            "rayg-haa",
            "rayg-haa"
          ],
          [
            "مسلط",
            "mu-sal-lat",
            "mu-sal-lat",
            "mu-sal-lat gar-dee-da",
            "mu-sal-lat gar-dee-dan"
          ],
          [
            "گردیده",
            "gar-dee-da",
            "gar-dee-da",
            "mu-sal-lat gar-dee-da",
            "gar-dee-dan",
            "mu-sal-lat gar-dee-dan"
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
            "هر",
            "har",
            "har"
          ],
          [
            "سویی",
            "so-yay",
            "so-yay"
          ],
          [
            "پراگنده",
            "pa-raa-gan-da",
            "pa-raa-gan-da",
            "pa-raa-gan-da may-sha-wad",
            "pa-raa-gan-da shu-dan"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "pa-raa-gan-da may-sha-wad",
            "shu-dan",
            "pa-raa-gan-da shu-dan"
          ]
        ]
      },
      {
        "say": "een see-ti ja-haan-geer dar har go-sha wa ki-naa-ray na-fooz may-na-maa-yad.",
        "mean": "this world-filling cry reaches into every nook and corner.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "صیت",
            "see-ti",
            "seet"
          ],
          [
            "جهانگیر",
            "ja-haan-geer",
            "ja-haan-geer"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "گوشه",
            "go-sha",
            "go-sha",
            "go-sha wa ki-naa-ray"
          ],
          [
            "و",
            "wa",
            "wa",
            "go-sha wa ki-naa-ray"
          ],
          [
            "کناری",
            "ki-naa-ray",
            "ki-naa-ray",
            "go-sha wa ki-naa-ray"
          ],
          [
            "نفوذ",
            "na-fooz",
            "na-fooz",
            "na-fooz may-na-maa-yad",
            "na-fooz na-mo-dan"
          ],
          [
            "می‌نماید.",
            "may-na-maa-yad",
            "may-na-maa-yad",
            "na-fooz may-na-maa-yad",
            "na-mo-dan",
            "na-fooz na-mo-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar qal-a-yi paa-sa-baa-naa-ni heer-mand wa qas-ri u-ma-raa dar dih-ka-da-haa-yi si-jis-taan wa sa-haa-ree-yi rood-baar wa hat-taa dar kul-ba-yi saf-faa-ree ba gosh may-ra-sad.",
        "mean": "It is heard in the fortress of the guards of the Helmand, in the palace of the princes, in the villages of Sistan and the deserts of Rudbar, and even in the coppersmith's hut.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قلعهٔ",
            "qal-a-yi",
            "qal-a"
          ],
          [
            "پاسبانان",
            "paa-sa-baa-naa-ni",
            "paa-sa-baa-naan"
          ],
          [
            "هیرمند",
            "heer-mand",
            "heer-mand"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قصر",
            "qas-ri",
            "qasr"
          ],
          [
            "امرا",
            "u-ma-raa",
            "u-ma-raa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دهکده‌های",
            "dih-ka-da-haa-yi",
            "dih-ka-da-haa"
          ],
          [
            "سجستان",
            "si-jis-taan",
            "si-jis-taan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صحاری",
            "sa-haa-ree-yi",
            "sa-haa-ree"
          ],
          [
            "رودبار",
            "rood-baar",
            "rood-baar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کلبه",
            "kul-ba-yi",
            "kul-ba"
          ],
          [
            "صفاری",
            "saf-faa-ree",
            "saf-faa-ree"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba gosh may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "گوش",
            "gosh",
            "gosh",
            "ba gosh may-ra-sad",
            "ba gosh ra-see-dan"
          ],
          [
            "می‌رسد.",
            "may-ra-sad",
            "may-ra-sad",
            "ba gosh may-ra-sad",
            "ra-see-dan",
            "ba gosh ra-see-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "een ni-daa, way raa ba khud may-khaa-nad.",
        "mean": "This call calls him to itself.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "ندا،",
            "ni-daa",
            "ni-daa"
          ],
          [
            "وی",
            "way",
            "way"
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
            "خود",
            "khud",
            "khud"
          ],
          [
            "می‌خواند.",
            "may-khaa-nad",
            "may-khaa-nad",
            "khaan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "oo raa ba yaa-wa-ree-yi mar-du-maa-ni di-yaa-rash da-wat may-na-maa-yad wa ba tar-ki duk-ka-yi roy-ga-ree amr may-di-had.",
        "mean": "It calls him to help the people of his land and orders him to leave the coppersmith's shop.",
        "words": [
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
            "به",
            "ba",
            "ba"
          ],
          [
            "یاوری",
            "yaa-wa-ree-yi",
            "yaa-wa-ree"
          ],
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "دیارش",
            "di-yaa-rash",
            "di-yaa-rash"
          ],
          [
            "دعوت",
            "da-wat",
            "da-wat",
            "da-wat may-na-maa-yad",
            "da-wat na-mo-dan"
          ],
          [
            "می‌نماید",
            "may-na-maa-yad",
            "may-na-maa-yad",
            "da-wat may-na-maa-yad",
            "na-mo-dan",
            "da-wat na-mo-dan"
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
            "ترک",
            "tar-ki",
            "tark"
          ],
          [
            "دکهٔ",
            "duk-ka-yi",
            "duk-ka"
          ],
          [
            "رویگری",
            "roy-ga-ree",
            "roy-ga-ree"
          ],
          [
            "امر",
            "amr",
            "amr",
            "amr may-di-had",
            "amr daa-dan"
          ],
          [
            "می‌دهد.",
            "may-di-had",
            "may-di-had",
            "amr may-di-had",
            "daa-dan",
            "amr daa-dan"
          ]
        ]
      },
      {
        "say": "dee-gar khud daa-ree mu-haal ast wa ba mu-qaa-bi-li een sa-daa-yi ras-taa-khayz, mu-qaa-wa-mat na-may-ta-waa-nad.",
        "mean": "Holding back is no longer possible, and he cannot resist this call of the day of uprising.",
        "words": [
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "خود",
            "khud",
            "khud",
            "khud daa-ree"
          ],
          [
            "داری",
            "daa-ree",
            "daa-ree",
            "khud daa-ree"
          ],
          [
            "محال",
            "mu-haal",
            "mu-haal"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "مقابل",
            "mu-qaa-bi-li",
            "mu-qaa-bil"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "صدای",
            "sa-daa-yi",
            "sa-daa"
          ],
          [
            "رستاخیز،",
            "ras-taa-khayz",
            "ras-taa-khayz"
          ],
          [
            "مقاومت",
            "mu-qaa-wa-mat",
            "mu-qaa-wa-mat",
            "mu-qaa-wa-mat na-may-ta-waa-nad"
          ],
          [
            "نمی‌تواند.",
            "na-may-ta-waa-nad",
            "na-may-ta-waa-nad",
            "mu-qaa-wa-mat na-may-ta-waa-nad",
            "ta-waa-nis-tan"
          ]
        ]
      },
      {
        "say": "baa-yad bar khay-zad koo-ra-yi fu-ro-zaan raa ba dee-ga-ray bi-gu-zaa-rad wa dar maw-ja-haa-yi si-jis-taa-ni too-faa-nee bi-ghal-tad.",
        "mean": "He must rise, leave the glowing furnace to someone else, and plunge into the waves of stormy Sistan.",
        "words": [
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar khay-zad",
            "bar-khaas-tan"
          ],
          [
            "خیزد",
            "khay-zad",
            "khay-zad",
            "bar khay-zad",
            "bar-khaas-tan"
          ],
          [
            "کورهٔ",
            "koo-ra-yi",
            "koo-ra"
          ],
          [
            "فروزان",
            "fu-ro-zaan",
            "fu-ro-zaan"
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
            "ba dee-ga-ray bi-gu-zaa-rad"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray",
            "ba dee-ga-ray bi-gu-zaa-rad"
          ],
          [
            "بگذارد",
            "bi-gu-zaa-rad",
            "bi-gu-zaa-rad",
            "ba dee-ga-ray bi-gu-zaa-rad",
            "gu-zaash-tan"
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
            "موجه‌های",
            "maw-ja-haa-yi",
            "maw-ja-haa"
          ],
          [
            "سجستان",
            "si-jis-taa-ni",
            "si-jis-taan"
          ],
          [
            "توفانی",
            "too-faa-nee",
            "too-faa-nee"
          ],
          [
            "بغلتد.",
            "bi-ghal-tad",
            "bi-ghal-tad",
            "ghal-tee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "choon naa-khu-daa-yi maa-hi-ray sa-fee-na-yi zin-da-gaa-nee-yi mar-dum raa dar een dar-yaa-yi sahm-geen bi-raa-nad wa ba saa-hi-li amn wa ki-naa-ra-yi aa-zaa-dee bi-ka-shaa-nad.",
        "mean": "Like a skilled captain he must steer the ship of the people's life across this terrible sea and bring it to the safe shore and the coast of freedom.",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "ناخدای",
            "naa-khu-daa-yi",
            "naa-khu-daa"
          ],
          [
            "ماهری",
            "maa-hi-ray",
            "maa-hi-ray"
          ],
          [
            "سفینهٔ",
            "sa-fee-na-yi",
            "sa-fee-na"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee-yi",
            "zin-da-gaa-nee"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
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
            "این",
            "een",
            "een"
          ],
          [
            "دریای",
            "dar-yaa-yi",
            "dar-yaa"
          ],
          [
            "سهمگین",
            "sahm-geen",
            "sahm-geen"
          ],
          [
            "براند",
            "bi-raa-nad",
            "bi-raa-nad",
            "raan-dan"
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
            "ساحل",
            "saa-hi-li",
            "saa-hil"
          ],
          [
            "امن",
            "amn",
            "amn"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کنارهٔ",
            "ki-naa-ra-yi",
            "ki-naa-ra"
          ],
          [
            "آزادی",
            "aa-zaa-dee",
            "aa-zaa-dee"
          ],
          [
            "بکشاند.",
            "bi-ka-shaa-nad",
            "bi-ka-shaa-nad",
            "ka-shaan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "tang-naa-yi kul-ba-yi roy-gar choon ni-gaa-hi him-ma-ti aa-lee wa fa-zaa-yi bay-ka-raa-ni aar-zoo-haa-yi bu-land par-waa-zi oo neest.",
        "mean": "The narrow hut of the coppersmith does not match the reach of his high ambition and the boundless space of his soaring hopes.",
        "words": [
          [
            "تنگنای",
            "tang-naa-yi",
            "tang-naa"
          ],
          [
            "کلبهٔ",
            "kul-ba-yi",
            "kul-ba"
          ],
          [
            "رویگر",
            "roy-gar",
            "roy-gar"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "نگاه",
            "ni-gaa-hi",
            "ni-gaah"
          ],
          [
            "همت",
            "him-ma-ti",
            "him-mat"
          ],
          [
            "عالی",
            "aa-lee",
            "aa-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فضای",
            "fa-zaa-yi",
            "fa-zaa"
          ],
          [
            "بی‌کران",
            "bay-ka-raa-ni",
            "bay-ka-raan"
          ],
          [
            "آرزو‌های",
            "aar-zoo-haa-yi",
            "aar-zoo-haa"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land",
            "bu-land par-waa-zi"
          ],
          [
            "پرواز",
            "par-waa-zi",
            "par-waaz",
            "bu-land par-waa-zi"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نیست.",
            "neest",
            "neest",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ar-sa-yi jum-bi-shi way kish-wa-ri bu-zurg wa sa-haa-ree-yi bay-paa-yaan ast.",
        "mean": "His field of action is a great country and endless deserts.",
        "words": [
          [
            "عرصهٔ",
            "ar-sa-yi",
            "ar-sa"
          ],
          [
            "جنبش",
            "jum-bi-shi",
            "jum-bish"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "کشور",
            "kish-wa-ri",
            "kish-war"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صحاری",
            "sa-haa-ree-yi",
            "sa-haa-ree"
          ],
          [
            "بی‌پایان",
            "bay-paa-yaan",
            "bay-paa-yaan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "oo aan mar-day ast ki ni-daa-yi mar-du-maa-ni een di-yaar raa ja-waab go-yad wa dar kaar gaa-hi zin-da-gaa-nee ba a-mal par-daa-zad.",
        "mean": "He is the man who will answer the call of the people of this land and set to work in the workshop of life.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "مردی",
            "mar-day",
            "mar-day"
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
            "ندای",
            "ni-daa-yi",
            "ni-daa"
          ],
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دیار",
            "di-yaar",
            "di-yaar"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "جواب",
            "ja-waab",
            "ja-waab",
            "ja-waab go-yad",
            "ja-waab guf-tan"
          ],
          [
            "گوید",
            "go-yad",
            "go-yad",
            "ja-waab go-yad",
            "guf-tan",
            "ja-waab guf-tan"
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
            "کار",
            "kaar",
            "kaar",
            "kaar gaa-hi"
          ],
          [
            "گاه",
            "gaa-hi",
            "gaah",
            "kaar gaa-hi"
          ],
          [
            "زنده‌گانی",
            "zin-da-gaa-nee",
            "zin-da-gaa-nee"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba a-mal par-daa-zad",
            "ba a-mal par-daakh-tan"
          ],
          [
            "عمل",
            "a-mal",
            "a-mal",
            "ba a-mal par-daa-zad",
            "ba a-mal par-daakh-tan"
          ],
          [
            "پردازد.",
            "par-daa-zad",
            "par-daa-zad",
            "ba a-mal par-daa-zad",
            "par-daakh-tan",
            "ba a-mal par-daakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "choon had-daa-di chee-ra das-tay ki aa-ha-ni sard raa may-ko-bad wa aa-ta-sheen may-gar-daa-nad wa aan-gaah az aan paa-ra-haa-yi fu-ro-zaan naa-qoo-say bu-zurg may-saa-zad taa saa-li-yaa-ni da-raaz dar fa-zaa-yi bay-ka-raan wal-wa-la an-daa-zad.",
        "mean": "Like a skilled blacksmith who beats cold iron and makes it red-hot, and then out of those glowing pieces makes a great bell to ring out for long years in the boundless sky,",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "حداد",
            "had-daa-di",
            "had-daad"
          ],
          [
            "چیره",
            "chee-ra",
            "chee-ra",
            "chee-ra das-tay"
          ],
          [
            "دستی",
            "das-tay",
            "das-tay",
            "chee-ra das-tay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "آهن",
            "aa-ha-ni",
            "aa-han"
          ],
          [
            "سرد",
            "sard",
            "sard"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌کوبد",
            "may-ko-bad",
            "may-ko-bad",
            "ko-bee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آتشین",
            "aa-ta-sheen",
            "aa-ta-sheen",
            "aa-ta-sheen may-gar-daa-nad"
          ],
          [
            "می‌گرداند",
            "may-gar-daa-nad",
            "may-gar-daa-nad",
            "aa-ta-sheen may-gar-daa-nad",
            "gar-daan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آنگاه",
            "aan-gaah",
            "aan-gaah"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "پاره‌های",
            "paa-ra-haa-yi",
            "paa-ra-haa"
          ],
          [
            "فروزان",
            "fu-ro-zaan",
            "fu-ro-zaan"
          ],
          [
            "ناقوسی",
            "naa-qoo-say",
            "naa-qoo-say"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "می‌سازد",
            "may-saa-zad",
            "may-saa-zad",
            "saakh-tan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "سالیان",
            "saa-li-yaa-ni",
            "saa-li-yaan"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "فضای",
            "fa-zaa-yi",
            "fa-zaa"
          ],
          [
            "بی‌کران",
            "bay-ka-raan",
            "bay-ka-raan"
          ],
          [
            "ولوله",
            "wal-wa-la",
            "wal-wa-la",
            "wal-wa-la an-daa-zad",
            "wal-wa-la an-daakh-tan"
          ],
          [
            "اندازد.",
            "an-daa-zad",
            "an-daa-zad",
            "wal-wa-la an-daa-zad",
            "an-daakh-tan",
            "wal-wa-la an-daakh-tan"
          ]
        ]
      },
      {
        "say": "way neez baa-yist to-da-yi mar-du-maa-ni mu-ta-far-riq wa khaa-mosh raa ba kut-la-yi mut-ta-hid wa pay-was-ta mu-bad-dal gar-daa-nad ki see-tash dar aa-faa-qay door dast pa-raa-gan-da sha-wad wa saal-haa ta-nee-nash raa ki-shaa-war-zaan dar ki-naa-ra-haa-yi dij-la wa kha-raa-ba-haa-yi ma-daa-yin bish-na-wand.",
        "mean": "he too must turn the scattered and silent mass of the people into one united body, whose cry spreads to distant horizons, and whose echo the farmers on the banks of the Tigris and in the ruins of Ctesiphon will hear for years.",
        "words": [
          [
            "وی",
            "way",
            "way"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "بایست",
            "baa-yist",
            "baa-yist"
          ],
          [
            "تودهٔ",
            "to-da-yi",
            "to-da"
          ],
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "متفرق",
            "mu-ta-far-riq",
            "mu-ta-far-riq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خاموش",
            "khaa-mosh",
            "khaa-mosh"
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
            "کتلهٔ",
            "kut-la-yi",
            "kut-la"
          ],
          [
            "متحد",
            "mut-ta-hid",
            "mut-ta-hid"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیوسته",
            "pay-was-ta",
            "pay-was-ta"
          ],
          [
            "مبدل",
            "mu-bad-dal",
            "mu-bad-dal",
            "mu-bad-dal gar-daa-nad",
            "mu-bad-dal gar-daan-dan"
          ],
          [
            "گرداند",
            "gar-daa-nad",
            "gar-daa-nad",
            "mu-bad-dal gar-daa-nad",
            "gar-daan-dan",
            "mu-bad-dal gar-daan-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "صیتش",
            "see-tash",
            "see-tash"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "آفاقی",
            "aa-faa-qay",
            "aa-faa-qay"
          ],
          [
            "دور",
            "door",
            "door",
            "door dast"
          ],
          [
            "دست",
            "dast",
            "dast",
            "door dast"
          ],
          [
            "پراگنده",
            "pa-raa-gan-da",
            "pa-raa-gan-da",
            "pa-raa-gan-da sha-wad",
            "pa-raa-gan-da shu-dan"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "pa-raa-gan-da sha-wad",
            "shu-dan",
            "pa-raa-gan-da shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سال‌ها",
            "saal-haa",
            "saal-haa"
          ],
          [
            "طنینش",
            "ta-nee-nash",
            "ta-nee-nash"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کشاورزان",
            "ki-shaa-war-zaan",
            "ki-shaa-war-zaan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کناره‌های",
            "ki-naa-ra-haa-yi",
            "ki-naa-ra-haa"
          ],
          [
            "دجله",
            "dij-la",
            "dij-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خرابه‌های",
            "kha-raa-ba-haa-yi",
            "kha-raa-ba-haa"
          ],
          [
            "مداین",
            "ma-daa-yin",
            "ma-daa-yin"
          ],
          [
            "بشنوند.",
            "bish-na-wand",
            "bish-na-wand",
            "shi-nee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "oo baa-yad af-soo-ni bar-ha-ma-naa-ni kaa-bul wa ghaz-na raa bi-shi-ka-nad wa mar-du-maa-ni af-sur-da wa khaa-kis-tar ni-shee-ni aan saa-maan raa az za-waa-yaa-yi taa-ree-ki rah-baa-ni-yat dar may-daa-ni ha-yaa-ti ha-qee-qee wa fu-ro-ghi khur-shee-di khaa-wa-ree bi-ka-shaa-nad.",
        "mean": "He must break the spell of the Brahmins of Kabul and Ghazni, and draw the sad, ash-sitting people of that land out of the dark corners of monkish life into the field of real life and the light of the eastern sun.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "افسون",
            "af-soo-ni",
            "af-soon"
          ],
          [
            "برهمنان",
            "bar-ha-ma-naa-ni",
            "bar-ha-ma-naan"
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
            "غزنه",
            "ghaz-na",
            "ghaz-na"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بشکند",
            "bi-shi-ka-nad",
            "bi-shi-ka-nad",
            "shi-kas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مردمان",
            "mar-du-maa-ni",
            "mar-du-maan"
          ],
          [
            "افسرده",
            "af-sur-da",
            "af-sur-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خاکستر",
            "khaa-kis-tar",
            "khaa-kis-tar",
            "khaa-kis-tar ni-shee-ni"
          ],
          [
            "نشین",
            "ni-shee-ni",
            "ni-sheen",
            "khaa-kis-tar ni-shee-ni"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "سامان",
            "saa-maan",
            "saa-maan"
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
            "زوایای",
            "za-waa-yaa-yi",
            "za-waa-yaa"
          ],
          [
            "تاریک",
            "taa-ree-ki",
            "taa-reek"
          ],
          [
            "رهبانیت",
            "rah-baa-ni-yat",
            "rah-baa-ni-yat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "میدان",
            "may-daa-ni",
            "may-daan"
          ],
          [
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "حقیقی",
            "ha-qee-qee",
            "ha-qee-qee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فروغ",
            "fu-ro-ghi",
            "fu-rogh"
          ],
          [
            "خورشید",
            "khur-shee-di",
            "khur-sheed"
          ],
          [
            "خاوری",
            "khaa-wa-ree",
            "khaa-wa-ree"
          ],
          [
            "بکشاند.",
            "bi-ka-shaa-nad",
            "bi-ka-shaa-nad",
            "ka-shaan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "oo baa-yad mash-a-li ha-qee-qat raa baa das-ti ta-waa-naa dar but-ka-da-yi baa-mi-yaan rah-na-moon gar-daa-nad taa har sa-har-gaa-hay peer wa ja-waan das-ti ni-yaaz ba daa-maa-ni aan as-naa-mi koh-pay-ka-ri khaa-mosh da-raaz na-na-maa-yand wa az pay-raa-ya-yi aan-haa khee-ra na-gar-dand.",
        "mean": "He must carry the torch of truth with a strong hand into the idol temple of Bamiyan, so that every dawn old and young no longer stretch out a hand of need to the hem of those silent, mountain-sized idols, and are not dazzled by their ornaments.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "مشعل",
            "mash-a-li",
            "mash-al"
          ],
          [
            "حقیقت",
            "ha-qee-qat",
            "ha-qee-qat"
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
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "توانا",
            "ta-waa-naa",
            "ta-waa-naa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بتکدهٔ",
            "but-ka-da-yi",
            "but-ka-da"
          ],
          [
            "بامیان",
            "baa-mi-yaan",
            "baa-mi-yaan"
          ],
          [
            "رهنمون",
            "rah-na-moon",
            "rah-na-moon",
            "rah-na-moon gar-daa-nad"
          ],
          [
            "گرداند",
            "gar-daa-nad",
            "gar-daa-nad",
            "rah-na-moon gar-daa-nad",
            "gar-daan-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "سحرگاهی",
            "sa-har-gaa-hay",
            "sa-har-gaa-hay"
          ],
          [
            "پیر",
            "peer",
            "peer"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جوان",
            "ja-waan",
            "ja-waan"
          ],
          [
            "دست",
            "das-ti",
            "dast",
            "das-ti ni-yaaz"
          ],
          [
            "نیاز",
            "ni-yaaz",
            "ni-yaaz",
            "das-ti ni-yaaz"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دامان",
            "daa-maa-ni",
            "daa-maan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "اصنام",
            "as-naa-mi",
            "as-naam"
          ],
          [
            "کوه‌پیکر",
            "koh-pay-ka-ri",
            "koh-pay-kar"
          ],
          [
            "خاموش",
            "khaa-mosh",
            "khaa-mosh"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz",
            "da-raaz na-na-maa-yand",
            "da-raaz na-mo-dan"
          ],
          [
            "ننمایند",
            "na-na-maa-yand",
            "na-na-maa-yand",
            "da-raaz na-na-maa-yand",
            "na-mo-dan",
            "da-raaz na-mo-dan"
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
            "پیرایهٔ",
            "pay-raa-ya-yi",
            "pay-raa-ya"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "خیره",
            "khee-ra",
            "khee-ra",
            "khee-ra na-gar-dand",
            "khee-ra gar-dee-dan"
          ],
          [
            "نگردند.",
            "na-gar-dand",
            "na-gar-dand",
            "khee-ra na-gar-dand",
            "gar-dee-dan",
            "khee-ra gar-dee-dan"
          ]
        ]
      },
      {
        "say": "oo baa-yad sa-haa-ree-yi si-jis-taan wa zaa-bul wa ah-li koh-saa-raa-ni ghar-cha wa kaa-bul raa az u-boo-di-ya-ti bay-gaa-na-gaan wa pa-ras-ti-shi aw-haam ra-haa-yee bakh-shad wa choon khaysh-tan aa-zaad gar-daa-nad.",
        "mean": "He must free the deserts of Sistan and Zabul and the people of the mountains of Gharchistan and Kabul from slavery to foreigners and the worship of illusions, and make them free like himself.",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "صحاری",
            "sa-haa-ree-yi",
            "sa-haa-ree"
          ],
          [
            "سجستان",
            "si-jis-taan",
            "si-jis-taan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زابل",
            "zaa-bul",
            "zaa-bul"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اهل",
            "ah-li",
            "ahl"
          ],
          [
            "کهساران",
            "koh-saa-raa-ni",
            "koh-saa-raan"
          ],
          [
            "غرچه",
            "ghar-cha",
            "ghar-cha"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
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
            "عبودیت",
            "u-boo-di-ya-ti",
            "u-boo-di-yat"
          ],
          [
            "بیگانه‌گان",
            "bay-gaa-na-gaan",
            "bay-gaa-na-gaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پرستش",
            "pa-ras-ti-shi",
            "pa-ras-tish"
          ],
          [
            "اوهام",
            "aw-haam",
            "aw-haam"
          ],
          [
            "رهایی",
            "ra-haa-yee",
            "ra-haa-yee",
            "ra-haa-yee bakh-shad",
            "ra-haa-yee bakh-shee-dan"
          ],
          [
            "بخشد",
            "bakh-shad",
            "bakh-shad",
            "ra-haa-yee bakh-shad",
            "bakh-shee-dan",
            "ra-haa-yee bakh-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "خویشتن",
            "khaysh-tan",
            "khaysh-tan"
          ],
          [
            "آزاد",
            "aa-zaad",
            "aa-zaad",
            "aa-zaad gar-daa-nad"
          ],
          [
            "گرداند.",
            "gar-daa-nad",
            "gar-daa-nad",
            "aa-zaad gar-daa-nad",
            "gar-daan-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "een ha-ma kaa-ri way ast;",
        "mean": "All this is his work;",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "zee-raa tan-haa aan ni-daa-yi mar-mooz raa oo az ghur-ri-shi baad-haa-yi sees-taan may-shi-na-wad.",
        "mean": "because only he hears that mysterious call in the roar of the winds of Sistan.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "ندای",
            "ni-daa-yi",
            "ni-daa"
          ],
          [
            "مرموز",
            "mar-mooz",
            "mar-mooz"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "غرش",
            "ghur-ri-shi",
            "ghur-rish"
          ],
          [
            "باد‌های",
            "baad-haa-yi",
            "baad-haa"
          ],
          [
            "سیستان",
            "sees-taan",
            "sees-taan"
          ],
          [
            "می‌شنود.",
            "may-shi-na-wad",
            "may-shi-na-wad",
            "shi-nee-dan"
          ]
        ]
      }
    ]
  ]
});
