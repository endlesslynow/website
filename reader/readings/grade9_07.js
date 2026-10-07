/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 7, book pages 40-42, PDF pages 47-49 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «درسیستان» is written «در سیستان»; «درکابل» is written «در کابل»; «درمکالمه» is written «در مکالمه»; «درپیش» is written «در پیش»; «ادهم(رح)» is written «ادهم (رح)»; «عربی«فتی»» is written «عربی «فتی»»; «ترکیه«آخی»» is written «ترکیه «آخی»»; «النهر«غازی»» is written «النهر «غازی»».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-07',
  group: 'Dari · grade 9',
  label: 'Lesson 7',
  name: "ay-yaa-raan wa kaa-ka-haa",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_07.jpg',
    alt: "A sketch of men in turbans fighting with raised swords and sticks."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_07.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "ay-yaa-raan":                                     { fa: "عیاران", mean: "ayyars" },
    "wa":                                              { fa: "و", mean: "and" },
    "kaa-ka-haa":                                      { fa: "کاکه‌ها", mean: "kakas, the tough, honorable young men of old Kabul" },
    "waa-zha":                                         { fa: "واژه", mean: "word" },
    "ay-yaar":                                         { fa: "عیار", mean: "ayyar: a bold, chivalrous young man who defended the weak, sometimes as an outlaw" },
    "dar":                                             { fa: "در", mean: "in" },
    "za-maa-na-haa":                                   { fa: "زمانه‌ها", mean: "times, ages" },
    "mukh-ta-lif":                                     { fa: "مختلف", mean: "different, various" },
    "aan-ham":                                         { fa: "آن‌هم", mean: "and that too, especially" },
    "mu-aa-ma-la-haa":                                 { fa: "معامله‌ها", mean: "dealings" },
    "ij-ti-maa-ee":                                    { fa: "اجتماعی", mean: "social" },
    "ba":                                              { fa: "به", mean: "to" },
    "ma-naa-haa":                                      { fa: "معناها", mean: "meanings" },
    "goo-naa-goon":                                    { fa: "گوناگون", mean: "various" },
    "ba kaar may-raf-ta ast":                          { fa: "به کار می‌رفته است", mean: "has been used" },
    "ba kaar raf-tan":                                 { fa: "به کار رفتن", mean: "to be used" },
    "kaar":                                            { fa: "کار", mean: "work, a job" },
    "may-raf-ta":                                      { fa: "می‌رفته", mean: "used to go" },
    "raf-tan":                                         { fa: "رفتن", mean: "to go" },
    "ast":                                             { fa: "است", mean: "is" },
    "aa-naa-nay":                                      { fa: "آنانی", mean: "those (who)" },
    "ki":                                              { fa: "که", mean: "that, which, who" },
    "qud-rat-mand":                                    { fa: "قدرتمند", mean: "powerful" },
    "zaa-lim":                                         { fa: "ظالم", mean: "cruel, unjust" },
    "sit-am-gar":                                      { fa: "ستمگر", mean: "oppressor, oppressive" },
    "boo-dand":                                        { fa: "بودند", mean: "were" },
    "bu-dan":                                          { fa: "بودن", mean: "to be" },
    "az":                                              { fa: "از", mean: "from, of" },
    "haych-goo-na":                                    { fa: "هیچ‌گونه", mean: "any kind of; with a no, no kind of" },
    "zulm":                                            { fa: "ظلم", mean: "oppression, injustice" },
    "dar maw-ri-di":                                   { fa: "در مورد", mean: "regarding, toward" },
    "maw-rid":                                         { fa: "مورد", mean: "object, case" },
    "ham-naw-aan":                                     { fa: "هم‌نوعان", mean: "fellow human beings" },
    "khaysh":                                          { fa: "خویش", mean: "own; self" },
    "da-reegh":                                        { fa: "دریغ", mean: "regret" },
    "da-reegh na-may-war-zee-dand":                    { fa: "دریغ نمی‌ورزیدند", mean: "did not hold back" },
    "da-reegh war-zee-dan":                            { fa: "دریغ ورزیدن", mean: "to hold back" },
    "na-may-war-zee-dand":                             { fa: "نمی‌ورزیدند", mean: "did not hold back; did not practice" },
    "war-zee-dan":                                     { fa: "ورزیدن", mean: "to practice; (with da-reegh) to hold back" },
    "ha-may-sha":                                      { fa: "همیشه", mean: "always" },
    "khashm":                                          { fa: "خشم", mean: "anger" },
    "ja-waan-mar-daan":                                { fa: "جوان‌مردان", mean: "chivalrous young men" },
    "qa-raar":                                         { fa: "قرار", mean: "place, rest" },
    "qa-raar may-gi-rif-tand":                         { fa: "قرار می‌گرفتند", mean: "came to be, became" },
    "qa-raar gi-rif-tan":                              { fa: "قرار گرفتن", mean: "to be placed; to come to be (in a state)" },
    "may-gi-rif-tand":                                 { fa: "می‌گرفتند", mean: "took; (with qa-raar) came to be" },
    "gi-rif-tan":                                      { fa: "گرفتن", mean: "to take" },
    "az na-za-ri":                                     { fa: "از نظر", mean: "in the view of" },
    "na-zar":                                          { fa: "نظر", mean: "sight, view; opinion" },
    "maz-loo-maan":                                    { fa: "مظلومان", mean: "the oppressed" },
    "sit-am-dee-da-gaan":                              { fa: "ستم‌دیده‌گان", mean: "the wronged" },
    "haa-mee":                                         { fa: "حامی", mean: "defender" },
    "push-ti-baan":                                    { fa: "پشتیبان", mean: "supporter" },
    "guf-ta":                                          { fa: "گفته", mean: "said" },
    "guf-ta may-shud":                                 { fa: "گفته می‌شد", mean: "was said, was called" },
    "guf-tan":                                         { fa: "گفتن", mean: "to say, to tell" },
    "guf-ta shu-dan":                                  { fa: "گفته شدن", mean: "to be said" },
    "may-shud":                                        { fa: "می‌شد", mean: "became; was" },
    "shu-dan":                                         { fa: "شدن", mean: "to become" },
    "ham-chu-naan":                                    { fa: "همچنان", mean: "likewise, just so" },
    "ba ma-naa-yi":                                    { fa: "به معنای", mean: "meaning" },
    "ma-naa":                                          { fa: "معنا", mean: "meaning" },
    "mard":                                            { fa: "مرد", mean: "man" },
    "bi-si-yaar":                                      { fa: "بسیار", mean: "much, very" },
    "ha-ra-kat":                                       { fa: "حرکت", mean: "movement" },
    "ha-ra-kat ku-nan-da":                             { fa: "حرکت کننده", mean: "active, moving" },
    "ku-nan-da":                                       { fa: "کننده", mean: "doing (ha-ra-kat ku-nan-da, moving)" },
    "rind":                                            { fa: "رند", mean: "sharp, clever; a free spirit" },
    "tayz-fahm":                                       { fa: "تیزفهم", mean: "quick-witted" },
    "baa":                                             { fa: "با", mean: "with" },
    "baa hosh":                                        { fa: "با هوش", mean: "clever" },
    "hosh":                                            { fa: "هوش", mean: "intelligence" },
    "may-baa-shad":                                    { fa: "می‌باشد", mean: "is" },
    "ya-kay":                                          { fa: "یکی", mean: "one" },
    "naam-haa":                                        { fa: "نام‌ها", mean: "names" },
    "shayr":                                           { fa: "شیر", mean: "lion" },
    "neez":                                            { fa: "نیز", mean: "also, too" },
    "ja-waan-mar-dee":                                 { fa: "جوان‌مردی", mean: "chivalry" },
    "az li-haa-zi":                                    { fa: "از لحاظ", mean: "from the point of view of" },
    "li-haaz":                                         { fa: "لحاظ", mean: "point of view" },
    "ir-faa-nee":                                      { fa: "عرفانی", mean: "mystical, Sufi" },
    "daa-raa-yi":                                      { fa: "دارای", mean: "having, possessing" },
    "saa-bi-qa":                                       { fa: "سابقه", mean: "history, background" },
    "taa-ree-khee":                                    { fa: "تاریخی", mean: "historical" },
    "haz-rat":                                         { fa: "حضرت", mean: "his holiness - a title of respect" },
    "haz-ra-ti ib-raa-hee-mi ad-ham":                  { fa: "حضرت ابراهیم ادهم", mean: "Ibrahim Adham, a prince of Balkh who became a famous Sufi" },
    "ib-raa-heem":                                     { fa: "ابراهیم", mean: "Ibrahim" },
    "ad-ham":                                          { fa: "ادهم", mean: "Adham" },
    "ra-hi-ma-hul-laah":                               { fa: "(رح)", mean: "God have mercy on him - said after the name of a holy man; (رح) is short for it" },
    "may-ra-sad":                                      { fa: "می‌رسد", mean: "arrives, reaches" },
    "ra-see-dan":                                      { fa: "رسیدن", mean: "to arrive, to reach" },
    "fu-tuw-wat":                                      { fa: "فتوت", mean: "futuwwat, the code of chivalry of the Sufis and ayyars" },
    "ta-saw-wuf":                                      { fa: "تصوف", mean: "Sufism" },
    "pay-wand":                                        { fa: "پیوند", mean: "joining, mending" },
    "khay-lee":                                        { fa: "خیلی", mean: "very" },
    "naz-deek":                                        { fa: "نزدیک", mean: "near" },
    "daa-rad":                                         { fa: "دارد", mean: "has" },
    "daash-tan":                                       { fa: "داشتن", mean: "to have" },
    "lafz":                                            { fa: "لفظ", mean: "word" },
    "fa-taa":                                          { fa: "فتی", mean: "fata, Arabic for a young man; a chivalrous man" },
    "hasht":                                           { fa: "هشت", mean: "eight" },
    "jaa":                                             { fa: "جا", mean: "place" },
    "qur-aan":                                         { fa: "قرآن", mean: "the Quran" },
    "ka-reem":                                         { fa: "کریم", mean: "noble, holy (qur-aa-ni ka-reem, the Holy Quran)" },
    "aa-ma-da":                                        { fa: "آمده", mean: "come" },
    "aa-ma-dan":                                       { fa: "آمدن", mean: "to come" },
    "aan":                                             { fa: "آن", mean: "that" },
    "mar-daa-na-gee":                                  { fa: "مردانه‌گی", mean: "manliness" },
    "i-raa-da":                                        { fa: "اراده", mean: "will, intention" },
    "i-raa-da shu-da ast":                             { fa: "اراده شده است", mean: "is meant" },
    "i-raa-da shu-dan":                                { fa: "اراده شدن", mean: "to be meant" },
    "shu-da":                                          { fa: "شده", mean: "become; been" },
    "kaa-ka":                                          { fa: "کاکه", mean: "kaka, a tough, honorable young man of old Kabul" },
    "aw-saaf":                                         { fa: "اوصاف", mean: "qualities" },
    "een":                                             { fa: "این", mean: "this" },
    "ta-waj-juh":                                      { fa: "توجه", mean: "attention" },
    "aan-haa":                                         { fa: "آن‌ها", mean: "they, them" },
    "u-moor":                                          { fa: "امور", mean: "matters" },
    "da-roo-nee":                                      { fa: "درونی", mean: "inner" },
    "baysh-tar":                                       { fa: "بیشتر", mean: "more" },
    "bay-roo-nee":                                     { fa: "بیرونی", mean: "outward" },
    "u-sool":                                          { fa: "اصول", mean: "rules, principles" },
    "akh-laaq":                                        { fa: "اخلاق", mean: "character, manners, morals" },
    "raaz-daa-ree":                                    { fa: "رازداری", mean: "keeping secrets" },
    "raas-tee":                                        { fa: "راستی", mean: "truthfulness" },
    "si-daa-qat":                                      { fa: "صداقت", mean: "honesty" },
    "yaa-ree":                                         { fa: "یاری", mean: "help" },
    "dar-maan-da-gaan":                                { fa: "درمانده‌گان", mean: "the helpless" },
    "if-fat":                                          { fa: "عفت", mean: "chastity" },
    "paak-daa-ma-nee":                                 { fa: "پاکدامنی", mean: "purity" },
    "fi-daa-kaa-ree":                                  { fa: "فداکاری", mean: "self-sacrifice" },
    "a-mal":                                           { fa: "عمل", mean: "action, deed" },
    "a-mal ba qawl wa wa-da":                          { fa: "عمل به قول و وعده", mean: "keeping one's word and promises" },
    "qawl":                                            { fa: "قول", mean: "word, promise" },
    "wa-da":                                           { fa: "وعده", mean: "promise" },
    "a-maa-nat-daa-ree":                               { fa: "امانت‌داری", mean: "trustworthiness" },
    "sabr":                                            { fa: "صبر", mean: "patience" },
    "sha-kee-baa-yee":                                 { fa: "شکیبایی", mean: "endurance" },
    "sa-khaa-wat":                                     { fa: "سخاوت", mean: "generosity" },
    "mu-ruw-wat":                                      { fa: "مروت", mean: "kindness, humanity" },
    "sha-jaa-at":                                      { fa: "شجاعت", mean: "courage" },
    "deen":                                            { fa: "دین", mean: "religion" },
    "ha-yaa":                                          { fa: "حیا", mean: "modesty" },
    "aql":                                             { fa: "عقل", mean: "reason, good sense" },
    "a-zaa":                                           { fa: "اعضا", mean: "members" },
    "gu-roh":                                          { fa: "گروه", mean: "group" },
    "yaa":                                             { fa: "یا", mean: "or" },
    "das-ta-haa":                                      { fa: "دسته‌ها", mean: "bands, groups" },
    "mi-yaan":                                         { fa: "میان", mean: "middle, among" },
    "mar-dum":                                         { fa: "مردم", mean: "people" },
    "bar-khaas-ta":                                    { fa: "برخاسته", mean: "risen" },
    "bar-khaas-tan":                                   { fa: "برخاستن", mean: "to rise, to get up" },
    "mu-ta-shak-kil":                                  { fa: "متشکل", mean: "made up (with az, of)" },
    "mu-ta-shak-kil az":                               { fa: "متشکل از", mean: "made up of" },
    "qishr":                                           { fa: "قشر", mean: "class, layer" },
    "naa-daar":                                        { fa: "نادار", mean: "poor" },
    "jaa-mi-a":                                        { fa: "جامعه", mean: "society" },
    "ja-waa-naan":                                     { fa: "جوانان", mean: "young people" },
    "pur-shor":                                        { fa: "پرشور", mean: "passionate" },
    "dar ayn haal":                                    { fa: "در عین حال", mean: "at the same time" },
    "ayn":                                             { fa: "عین", mean: "very same (dar ayn-i haal, at the same time)" },
    "haal":                                            { fa: "حال", mean: "state, condition" },
    "naa-raa-zee":                                     { fa: "ناراضی", mean: "unhappy, displeased" },
    "aw-zaa":                                          { fa: "اوضاع", mean: "the state of things" },
    "ra-ee-saan":                                      { fa: "رئیسان", mean: "leaders, heads" },
    "raa":                                             { fa: "را", mean: "marks the object of the verb" },
    "a-naa-ween":                                      { fa: "عناوین", mean: "titles" },
    "peer":                                            { fa: "پیر", mean: "old" },
    "us-taad":                                         { fa: "استاد", mean: "master, teacher" },
    "sar-hang":                                        { fa: "سرهنگ", mean: "sarhang, colonel; a leader's title" },
    "pa-dar-ahd":                                      { fa: "پدرعهد", mean: "padar-ahd, father of the pledge, a leader's title" },
    "may-naa-mee-dand":                                { fa: "می‌نامیدند", mean: "called, named" },
    "naa-mee-dan":                                     { fa: "نامیدن", mean: "to name, to call" },
    "ah-daaf":                                         { fa: "اهداف", mean: "aims" },
    "das-ta":                                          { fa: "دسته", mean: "group, band" },
    "gu-roh-haa":                                      { fa: "گروه‌ها", mean: "groups" },
    "mu-ta-faa-wit":                                   { fa: "متفاوت", mean: "different" },
    "bood":                                            { fa: "بود", mean: "was" },
    "ma-naa-fi":                                       { fa: "منافع", mean: "interests, benefits" },
    "man-ti-qa":                                       { fa: "منطقه", mean: "area, region" },
    "man-ti-qa yee":                                   { fa: "منطقه یی", mean: "regional" },
    "yee":                                             { fa: "یی", mean: "-ee, making a word that describes (man-ti-qa yee, regional)" },
    "ma-hal-lee":                                      { fa: "محلی", mean: "local" },
    "tar-jeeh":                                        { fa: "ترجیح", mean: "preference" },
    "tar-jeeh may-daa-dand":                           { fa: "ترجیح می‌دادند", mean: "put first, preferred" },
    "tar-jeeh daa-dan":                                { fa: "ترجیح دادن", mean: "to prefer" },
    "may-daa-dand":                                    { fa: "می‌دادند", mean: "gave" },
    "daa-dan":                                         { fa: "دادن", mean: "to give" },
    "daa-wa-ta-lab":                                   { fa: "داوطلب", mean: "volunteer" },
    "uz-wi-yat":                                       { fa: "عضویت", mean: "membership" },
    "sha-raa-yit":                                     { fa: "شرایط", mean: "conditions" },
    "khaas":                                           { fa: "خاص", mean: "special" },
    "pa-zee-ruf-ta":                                   { fa: "پذیرفته", mean: "accepted" },
    "pa-zee-ruf-ta may-shud":                          { fa: "پذیرفته می‌شد", mean: "was accepted" },
    "pa-zee-ruf-tan":                                  { fa: "پذیرفتن", mean: "to accept" },
    "pa-zee-ruf-ta shu-dan":                           { fa: "پذیرفته شدن", mean: "to be accepted" },
    "oo":                                              { fa: "او", mean: "he, she; his, her" },
    "ahd-naa-ma":                                      { fa: "عهدنامه", mean: "written pledge" },
    "ahd-naa-ma may-daad":                             { fa: "عهدنامه می‌داد", mean: "gave a written pledge" },
    "may-daad":                                        { fa: "می‌داد", mean: "gave" },
    "du-aa":                                           { fa: "دعا", mean: "prayer" },
    "mar-boot":                                        { fa: "مربوط", mean: "proper, related" },
    "baa-laa-yash":                                    { fa: "بالایش", mean: "over him" },
    "khaan-da":                                        { fa: "خوانده", mean: "read" },
    "khaan-da may-shud":                               { fa: "خوانده می‌شد", mean: "was read" },
    "khaan-dan":                                       { fa: "خواندن", mean: "to read, to recite" },
    "khaan-da shu-dan":                                { fa: "خوانده شدن", mean: "to be read" },
    "ka-mar":                                          { fa: "کمر", mean: "waist; belt" },
    "ka-ma-ri way raa may-bas-tand":                   { fa: "کمر وی را می‌بستند", mean: "they tied a belt around his waist" },
    "way":                                             { fa: "وی", mean: "he, she" },
    "may-bas-tand":                                    { fa: "می‌بستند", mean: "tied" },
    "bas-tan":                                         { fa: "بستن", mean: "to close, to tie" },
    "pas":                                             { fa: "پس", mean: "then, so" },
    "pas az":                                          { fa: "پس از", mean: "after" },
    "cha-shee-dan":                                    { fa: "چشیدن", mean: "tasting" },
    "na-mak":                                          { fa: "نمک", mean: "salt" },
    "aa-bay":                                          { fa: "آبی", mean: "some water" },
    "ma-raa-tib":                                      { fa: "مراتب", mean: "duties, ranks" },
    "sa-khaa":                                         { fa: "سخا", mean: "generosity" },
    "sa-faa":                                          { fa: "صفا", mean: "sincerity, purity" },
    "wa-faa":                                          { fa: "وفا", mean: "loyalty" },
    "bar":                                             { fa: "بر", mean: "on, upon" },
    "bar zim-ma-yi oo may-gu-zaash-tand":              { fa: "بر ذمهٔ او می‌گذاشتند", mean: "they made him responsible for - literally put on his account" },
    "zim-ma":                                          { fa: "ذمه", mean: "responsibility, account" },
    "may-gu-zaash-tand":                               { fa: "می‌گذاشتند", mean: "put, placed" },
    "gu-zaash-tan":                                    { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "po-shee-dan":                                     { fa: "پوشیدن", mean: "putting on, wearing" },
    "jaa-ma":                                          { fa: "جامه", mean: "garment" },
    "makh-soos":                                       { fa: "مخصوص", mean: "special" },
    "ahl":                                             { fa: "اهل", mean: "people (of a place)" },
    "ba shu-maar may-raft":                            { fa: "به شمار می‌رفت", mean: "was counted" },
    "ba shu-maar raf-tan":                             { fa: "به شمار رفتن", mean: "to be counted" },
    "shu-maar":                                        { fa: "شمار", mean: "count, number" },
    "may-raft":                                        { fa: "می‌رفت", mean: "went" },
    "za-maa-nay":                                      { fa: "زمانی", mean: "at times; a time" },
    "za-maa-nay ki":                                   { fa: "زمانی که", mean: "when" },
    "af-ghaa-nis-taan":                                { fa: "افغانستان", mean: "Afghanistan" },
    "fa-aal":                                          { fa: "فعال", mean: "active" },
    "fa-aal gar-dee-dand":                             { fa: "فعال گردیدند", mean: "became active" },
    "gar-dee-dand":                                    { fa: "گردیدند", mean: "became" },
    "gar-dee-dan":                                     { fa: "گردیدن", mean: "to become, to turn" },
    "naam":                                            { fa: "نام", mean: "name" },
    "khud":                                            { fa: "خود", mean: "own; self" },
    "gi-rif-tand":                                     { fa: "گرفتند", mean: "took" },
    "na-zar ba":                                       { fa: "نظر به", mean: "because of, in view of" },
    "ba shak-li si-yaa-see dar-aa-ma-dand":            { fa: "به شکل سیاسی درآمدند", mean: "took a political form" },
    "shakl":                                           { fa: "شکل", mean: "form, shape" },
    "si-yaa-see":                                      { fa: "سیاسی", mean: "political" },
    "dar-aa-ma-dand":                                  { fa: "درآمدند", mean: "came into, took (a form)" },
    "dar-aa-ma-dan":                                   { fa: "درآمدن", mean: "to come in; to take a form" },
    "kaar-naa-ma-haa":                                 { fa: "کارنامه‌ها", mean: "deeds, records" },
    "gharb":                                           { fa: "غرب", mean: "west" },
    "kish-war":                                        { fa: "کشور", mean: "country" },
    "sees-taan":                                       { fa: "سیستان", mean: "Sistan, a region in southwest Afghanistan and east Iran" },
    "neem-roz":                                        { fa: "نیمروز", mean: "Nimroz, the Afghan province of Sistan" },
    "mash-hoor":                                       { fa: "مشهور", mean: "famous, known" },
    "chu-naan-ki":                                     { fa: "چنان‌که", mean: "as, for example" },
    "yaa-qoob":                                        { fa: "یعقوب", mean: "Ya'qub" },
    "yaa-qoo-bi lay-si saf-faar":                      { fa: "یعقوب لیث صفار", mean: "Ya'qub-i Layth the Coppersmith" },
    "lays":                                            { fa: "لیث", mean: "Layth" },
    "saf-faar":                                        { fa: "صفار", mean: "coppersmith; here Ya’qub the coppersmith, who founded the Saffarid kingdom in 861" },
    "mu-as-sis":                                       { fa: "مؤسس", mean: "founder" },
    "daw-lat":                                         { fa: "دولت", mean: "state, government" },
    "saf-faa-ree":                                     { fa: "صفاری", mean: "of the coppersmith" },
    "az jum-la-yi":                                    { fa: "از جملهٔ", mean: "among, one of" },
    "jum-la":                                          { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "kaa-bul":                                         { fa: "کابل", mean: "Kabul" },
    "ba naa-mi":                                       { fa: "به نام", mean: "by the name of, called" },
    "kan-da-haar":                                     { fa: "کندهار", mean: "Kandahar" },
    "ja-waan":                                         { fa: "جوان", mean: "young" },
    "yaad":                                            { fa: "یاد", mean: "memory, mention" },
    "yaad may-shu-dand":                               { fa: "یاد می‌شدند", mean: "were called" },
    "yaad shu-dan":                                    { fa: "یاد شدن", mean: "to be called, to be mentioned" },
    "may-shu-dand":                                    { fa: "می‌شدند", mean: "became; were" },
    "bach-cha":                                        { fa: "بچه", mean: "young one, child" },
    "bach-cha-yi aa-zar":                              { fa: "بچهٔ آذر", mean: "Bacha-yi Azar, a famous kaka" },
    "aa-zar":                                          { fa: "آذر", mean: "Azar" },
    "pay-ra-wee":                                      { fa: "پیروی", mean: "following" },
    "pay-ra-wee-yi bach-cha-yi a-dee":                 { fa: "پیروی بچهٔ ادی", mean: "Pirawi-yi Bacha-yi Adi, a famous kaka" },
    "a-dee":                                           { fa: "ادی", mean: "Adi" },
    "kaa-ka ta-laa":                                   { fa: "کاکه طلا", mean: "Kaka Tala, a famous kaka" },
    "ta-laa":                                          { fa: "طلا", mean: "gold; Tala, a name" },
    "kaa-ka nuq-ra":                                   { fa: "کاکه نقره", mean: "Kaka Nuqra, a famous kaka" },
    "nuq-ra":                                          { fa: "نقره", mean: "silver; Nuqra, a name" },
    "kaa-ka sha-koor":                                 { fa: "کاکه شکور", mean: "Kaka Shakur, a famous kaka" },
    "sha-koor":                                        { fa: "شکور", mean: "Shakur" },
    "a-zeez":                                          { fa: "عزیز", mean: "Aziz; dear" },
    "a-zee-zi lan-gar-za-meen":                        { fa: "عزیز لنگرزمین", mean: "Aziz Langarzamin, a famous kaka" },
    "lan-gar-za-meen":                                 { fa: "لنگرزمین", mean: "Langarzamin" },
    "soo-fee":                                         { fa: "صوفی", mean: "Sufi" },
    "soo-fee gha-nee":                                 { fa: "صوفی غنی", mean: "Sufi Ghani, a famous kaka" },
    "gha-nee":                                         { fa: "غنی", mean: "Ghani; rich" },
    "ma-shaa-heer":                                    { fa: "مشاهیر", mean: "famous people" },
    "qarn":                                            { fa: "قرن", mean: "century" },
    "qar-ni noz-da wa bees-tum":                       { fa: "قرن نزده و بیستم", mean: "the nineteenth and twentieth centuries" },
    "noz-da":                                          { fa: "نزده", mean: "nineteen" },
    "bees-tum":                                        { fa: "بیستم", mean: "twentieth" },
    "ta-daad":                                         { fa: "تعداد", mean: "number" },
    "chu-neen":                                        { fa: "چنین", mean: "so, like this" },
    "zi-yaad":                                         { fa: "زیاد", mean: "many, much" },
    "ja-waan mar-day":                                 { fa: "جوان مردی", mean: "chivalry" },
    "mar-day":                                         { fa: "مردی", mean: "a man" },
    "qawl wa zu-baan":                                 { fa: "قول و زبان", mean: "keeping one's word" },
    "zu-baan":                                         { fa: "زبان", mean: "language; tongue" },
    "ee-saar":                                         { fa: "ایثار", mean: "selflessness" },
    "az khud-gu-za-ree":                               { fa: "از خودگذری", mean: "self-sacrifice" },
    "khud-gu-za-ree":                                  { fa: "خودگذری", mean: "self-sacrifice" },
    "juz#part":                                        { fa: "جزء", say: "juz", mean: "part" },
    "ju-zi laa-yan-fak":                               { fa: "جزء لاینفک", mean: "an inseparable part" },
    "laa-yan-fak":                                     { fa: "لاینفک", mean: "inseparable" },
    "zin-da-gee-shaan":                                { fa: "زنده‌گی‌شان", mean: "their lives" },
    "gar-dee-da":                                      { fa: "گردیده", mean: "become" },
    "gar-dee-da bood":                                 { fa: "گردیده بود", mean: "had become" },
    "af-ghaan":                                        { fa: "افغان", mean: "Afghan" },
    "shu-maa":                                         { fa: "شما", mean: "you (more than one, or polite)" },
    "ham":                                             { fa: "هم", mean: "also, too" },
    "raah":                                            { fa: "راه", mean: "way, road" },
    "dar paysh gee-reed":                              { fa: "در پیش گیرید", mean: "take up" },
    "dar paysh gi-rif-tan":                            { fa: "در پیش گرفتن", mean: "to take up, to follow" },
    "paysh":                                           { fa: "پیش", mean: "front; forward" },
    "gee-reed":                                        { fa: "گیرید", mean: "take (said to more than one)" },
    "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed": { fa: "از در خدمت به مظلومان پیش آیید", mean: "come forward to serve the oppressed - literally come in by the door of service" },
    "dar#door":                                        { fa: "در", say: "dar", mean: "door" },
    "khid-mat":                                        { fa: "خدمت", mean: "service" },
    "aa-yeed":                                         { fa: "آیید", mean: "come (said to more than one)" },
    "nasl":                                            { fa: "نسل", mean: "generation" },
    "aa-yan-da":                                       { fa: "آینده", mean: "future, coming" },
    "ay-yaa-ree":                                      { fa: "عیاری", mean: "the ways of an ayyar, chivalry" },
    "bi-yaa-mo-zeed":                                  { fa: "بیاموزید", mean: "teach; learn (said to more than one)" },
    "aa-mokh-tan":                                     { fa: "آموختن", mean: "to learn" },
    "dar gu-zash-ta":                                  { fa: "در گذشته", mean: "in the past" },
    "gu-zash-ta":                                      { fa: "گذشته", mean: "the past; passed" },
    "gu-zash-tan":                                     { fa: "گذشتن", mean: "to pass" },
    "maa":                                             { fa: "ما", mean: "we" },
    "mash-hoo-ray":                                    { fa: "مشهوری", mean: "famous (mash-hoor + -ay)" },
    "daash-taym":                                      { fa: "داشتیم", mean: "we had" },
    "ra-heem":                                         { fa: "رحیم", mean: "Rahim" },
    "qay-yoom":                                        { fa: "قیوم", mean: "Qayum" },
    "gul":                                             { fa: "گل", mean: "Gul; flower" },
    "meer-zaa":                                        { fa: "میرزا", mean: "Mirza" },
    "koh-daa-man":                                     { fa: "کوهدامن", mean: "Kohdaman, an area north of Kabul" },
    "ish-ti-raak":                                     { fa: "اشتراک", mean: "taking part" },
    "ma-raa-sim":                                      { fa: "مراسم", mean: "ceremonies" },
    "kho-shee":                                        { fa: "خوشی", mean: "joy, celebration" },
    "gham":                                            { fa: "غم", mean: "grief, sorrow" },
    "maa-ya":                                          { fa: "مایه", mean: "means, capital" },
    "maa-ya-yi if-ti-khaar":                           { fa: "مایهٔ افتخار", mean: "a source of pride" },
    "if-ti-khaar":                                     { fa: "افتخار", mean: "pride, glory" },
    "har":                                             { fa: "هر", mean: "every" },
    "mih-maan-daar":                                   { fa: "مهماندار", mean: "host" },
    "iz-zat":                                          { fa: "عزت", mean: "honor" },
    "ih-ti-raam":                                      { fa: "احترام", mean: "respect" },
    "qaa-yil":                                         { fa: "قایل", mean: "holding, giving (respect)" },
    "qaa-yil boo-dand":                                { fa: "قایل بودند", mean: "gave, held" },
    "qaa-yil bu-dan":                                  { fa: "قایل بودن", mean: "to hold, to give" },
    "paa-yeen":                                        { fa: "پایین", mean: "lower; Payin (in names)" },
    "paa-yee-ni chaw-ki kaa-bul":                      { fa: "پایین چوک کابل", mean: "Payin Chawk, a quarter of old Kabul" },
    "chawk":                                           { fa: "چوک", mean: "market square" },
    "shor-baa-zaar":                                   { fa: "شوربازار", mean: "Shor Bazaar, a quarter of old Kabul" },
    "mu-raad-khaa-nee":                                { fa: "مرادخانی", mean: "Murad Khani, a quarter of old Kabul" },
    "chin-da-wul":                                     { fa: "چنداول", mean: "Chindawul, a quarter of old Kabul" },
    "hal-qa-haa":                                      { fa: "حلقه‌ها", mean: "circles" },
    "ju-daa-gaa-na":                                   { fa: "جداگانه", mean: "separate" },
    "a-la-hi-da":                                      { fa: "علیحده", mean: "separate" },
    "daash-tand":                                      { fa: "داشتند", mean: "had" },
    "jang-haa":                                        { fa: "جنگ‌ها", mean: "fights, wars" },
    "tan":                                             { fa: "تن", mean: "body" },
    "tan ba tan":                                      { fa: "تن به تن", mean: "hand-to-hand" },
    "ha-ree-faan":                                     { fa: "حریفان", mean: "rivals" },
    "kush-ta":                                         { fa: "کشته", mean: "killed" },
    "kush-tan":                                        { fa: "کشتن", mean: "to kill" },
    "zakh-mee":                                        { fa: "زخمی", mean: "wounded" },
    "i-daa-raat":                                      { fa: "ادارات", mean: "offices" },
    "daw-la-tee":                                      { fa: "دولتی", mean: "of the government" },
    "aa-gaah":                                         { fa: "آگاه", mean: "aware, informed" },
    "aa-gaah na-may-saakh-tand":                       { fa: "آگاه نمی‌ساختند", mean: "did not inform" },
    "aa-gaah saakh-tan":                               { fa: "آگاه ساختن", mean: "to inform" },
    "na-may-saakh-tand":                               { fa: "نمی‌ساختند", mean: "did not make" },
    "saakh-tan":                                       { fa: "ساختن", mean: "to make, to build" },
    "dar qis-ma-ti":                                   { fa: "در قسمت", mean: "regarding" },
    "qis-mat":                                         { fa: "قسمت", mean: "share, part" },
    "hal":                                             { fa: "حل", mean: "solving" },
    "mush-ki-laat":                                    { fa: "مشکلات", mean: "problems" },
    "iq-daam":                                         { fa: "اقدام", mean: "taking action" },
    "iq-daam may-kar-dand":                            { fa: "اقدام می‌کردند", mean: "took action" },
    "iq-daam kar-dan":                                 { fa: "اقدام کردن", mean: "to take action" },
    "may-kar-dand":                                    { fa: "می‌کردند", mean: "used to do" },
    "kar-dan":                                         { fa: "کردن", mean: "to do, to make" },
    "arz":                                             { fa: "عرض", mean: "petition" },
    "arz wa shi-kaa-yat":                              { fa: "عرض و شکایت", mean: "complaining" },
    "shi-kaa-yat":                                     { fa: "شکایت", mean: "complaint" },
    "nang":                                            { fa: "ننگ", mean: "shame" },
    "nang wa aar":                                     { fa: "ننگ و عار", mean: "a shame, a disgrace" },
    "aar":                                             { fa: "عار", mean: "disgrace" },
    "may-daa-nis-tand":                                { fa: "می‌دانستند", mean: "knew; considered" },
    "daa-nis-tan":                                     { fa: "دانستن", mean: "to know" },
    "li-baas":                                         { fa: "لباس", mean: "clothes" },
    "ba tan may-kar-dand":                             { fa: "به تن می‌کردند", mean: "wore" },
    "ba tan kar-dan":                                  { fa: "به تن کردن", mean: "to put on, to wear" },
    "das-taar":                                        { fa: "دستار", mean: "turban" },
    "da-raaz":                                         { fa: "دراز", mean: "long" },
    "taa":                                             { fa: "تا", mean: "so that; until; to" },
    "zaa-noo":                                         { fa: "زانو", mean: "knee" },
    "pay-zaar":                                        { fa: "پیزار", mean: "pizar, leather shoes with turned-up toes" },
    "pay-raa-han":                                     { fa: "پیراهن", mean: "shirt" },
    "pay-raa-han tum-baan":                            { fa: "پیراهن تنبان", mean: "the long shirt and loose trousers of Afghan dress" },
    "tum-baan":                                        { fa: "تنبان", mean: "loose trousers" },
    "paa-cha-haa":                                     { fa: "پاچه‌ها", mean: "trouser legs" },
    "nay-fa":                                          { fa: "نیفه", mean: "waistband; sewn band" },
    "nay-fa za-da":                                    { fa: "نیفه زده", mean: "hemmed, with a sewn band" },
    "za-da":                                           { fa: "زده", mean: "hit; put on" },
    "za-dan":                                          { fa: "زدن", mean: "to hit" },
    "khas-lat":                                        { fa: "خصلت", mean: "habit, trait" },
    "dee-gar":                                         { fa: "دیگر", mean: "other; more; anymore" },
    "an-jaam":                                         { fa: "انجام", mean: "doing, carrying out" },
    "khi-da-maat":                                     { fa: "خدمات", mean: "services" },
    "mush-kil":                                        { fa: "مشکل", mean: "hard, difficult" },
    "gasht":                                           { fa: "گشت", mean: "became" },
    "gasht wa gu-zaar":                                { fa: "گشت و گذار", mean: "wandering about" },
    "gash-tan":                                        { fa: "گشتن", mean: "to become; to turn; to wander" },
    "gu-zaar":                                         { fa: "گذار", mean: "passing (gasht wa gu-zaar, wandering about)" },
    "qab-ris-taan-haa":                                { fa: "قبرستان‌ها", mean: "graveyards" },
    "koh-haa":                                         { fa: "کوه‌ها", mean: "mountains" },
    "sa-far-haa":                                      { fa: "سفرها", mean: "journeys" },
    "door":                                            { fa: "دور", mean: "far" },
    "na-jaat":                                         { fa: "نجات", mean: "salvation, rescue" },
    "na-jaat daa-dan":                                 { fa: "نجات دادن", mean: "rescuing" },
    "za-ee-faan":                                      { fa: "ضعیفان", mean: "the weak" },
    "naa-ta-waa-naan":                                 { fa: "ناتوانان", mean: "the helpless" },
    "mu-see-bat":                                      { fa: "مصیبت", mean: "disaster" },
    "yak-dee-gar":                                     { fa: "یک‌دیگر", mean: "each other" },
    "mu-kaa-li-ma":                                    { fa: "مکالمه", mean: "conversation" },
    "shayr-bach-cha":                                  { fa: "شیربچه", mean: "lion cub" },
    "khi-taab":                                        { fa: "خطاب", mean: "addressing" },
    "khi-taab may-kar-dand":                           { fa: "خطاب می‌کردند", mean: "called, addressed" },
    "khi-taab kar-dan":                                { fa: "خطاب کردن", mean: "to address" },
    "pah-la-waa-nee":                                  { fa: "پهلوانی", mean: "wrestling" },
    "war-zish":                                        { fa: "ورزش", mean: "sport, exercise" },
    "chob-baa-zee":                                    { fa: "چوب‌بازی", mean: "stick fighting" },
    "aab-baa-zee":                                     { fa: "آب‌بازی", mean: "swimming" },
    "pi-yaa-da-ro-wee":                                { fa: "پیاده‌روی", mean: "walking" },
    "may-aa-mokh-tand":                                { fa: "می‌آموختند", mean: "learned" },
    "raf-taar":                                        { fa: "رفتار", mean: "behavior, conduct" },
    "khi-raa-maan":                                    { fa: "خرامان", mean: "swaggering, walking proudly" },
    "paak":                                            { fa: "پاک", mean: "clean" },
    "bar tan may-kar-dand":                            { fa: "بر تن می‌کردند", mean: "wore" },
    "paa-band":                                        { fa: "پابند", mean: "bound" },
    "nang wa naam":                                    { fa: "ننگ و نام", mean: "honor - literally shame and name" },
    "han-gaam":                                        { fa: "هنگام", mean: "time (han-gaam-i, at the time of)" },
    "za-ha-maat":                                      { fa: "زحمات", mean: "hardships" },
    "saa-bir":                                         { fa: "صابر", mean: "patient" },
    "hifz":                                            { fa: "حفظ", mean: "keeping, guarding" },
    "as-raar":                                         { fa: "اسرار", mean: "secrets" },
    "jaa-hid":                                         { fa: "جاهد", mean: "striving, hard-working" },
    "a-waa-khir":                                      { fa: "اواخر", mean: "the last part" },
    "beest":                                           { fa: "بیست", mean: "twenty" },
    "kaa-ka-gee":                                      { fa: "کاکه‌گی", mean: "being a kaka" },
    "mub-ta-zal":                                      { fa: "مبتذل", mean: "cheap, vulgar" },
    "mub-ta-zal shud":                                 { fa: "مبتذل شد", mean: "became cheapened" },
    "mub-ta-zal shu-dan":                              { fa: "مبتذل شدن", mean: "to become cheap, to lose its worth" },
    "shud":                                            { fa: "شد", mean: "became; was" },
    "ka-saa-nay":                                      { fa: "کسانی", mean: "people (who)" },
    "ism":                                             { fa: "اسم", mean: "name" },
    "ism wa ras-mi":                                   { fa: "اسم و رسم", mean: "the name and ways" },
    "rasm":                                            { fa: "رسم", mean: "custom, way" },
    "dar paysh gi-rif-tand":                           { fa: "در پیش گرفتند", mean: "took up" },
    "as-lan":                                          { fa: "اصلاً", mean: "at all" },
    "a-laa-yim":                                       { fa: "علایم", mean: "signs" },
    "khoy":                                            { fa: "خوی", mean: "nature, temper" },
    "see-rat":                                         { fa: "سیرت", mean: "way of life, conduct" },
    "na-daash-tand":                                   { fa: "نداشتند", mean: "did not have" },
    "kish-war-haa":                                    { fa: "کشورها", mean: "countries" },
    "a-ra-bee":                                        { fa: "عربی", mean: "Arab, Arabic" },
    "tur-ki-ya":                                       { fa: "ترکیه", mean: "Turkey" },
    "aa-khee":                                         { fa: "آخی", mean: "akhi, the Turkish name for a chivalrous man" },
    "maa-waa-ra":                                      { fa: "ماوراء", mean: "beyond" },
    "maa-waa-ra un-nahr":                              { fa: "ماوراء النهر", mean: "Transoxiana, the land beyond the Amu river" },
    "un-nahr":                                         { fa: "النهر", mean: "the river (maa-waa-ra un-nahr, Transoxiana)" },
    "ghaa-zee":                                        { fa: "غازی", mean: "ghazi, a warrior" },
    "ee-raan":                                         { fa: "ایران", mean: "Iran" },
    "daash":                                           { fa: "داش", mean: "dash, the Iranian name for a tough, honorable man" },
    "mash-dee":                                        { fa: "مشدی", mean: "mashdi, the Iranian name for a tough, honorable man" },
    "naa-mee-da":                                      { fa: "نامیده", mean: "named, called" },
    "naa-mee-da may-shu-dand":                         { fa: "نامیده می‌شدند", mean: "were called" },
    "naa-mee-da shu-dan":                              { fa: "نامیده شدن", mean: "to be called" }
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
    "say": "ay-yaa-raan wa kaa-ka-haa",
    "mean": "Ayyars and kakas",
    "words": [
      [
        "عیاران",
        "ay-yaa-raan",
        "ay-yaa-raan"
      ],
      [
        "و",
        "wa",
        "wa"
      ],
      [
        "کاکه‌ها",
        "kaa-ka-haa",
        "kaa-ka-haa"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "waa-zha-yi ay-yaar dar za-maa-na-haa-yi mukh-ta-lif aan-ham dar mu-aa-ma-la-haa-yi ij-ti-maa-ee ba ma-naa-haa-yi goo-naa-goon ba kaar may-raf-ta ast.",
        "mean": "The word ayyar has been used with various meanings in different times, especially in social dealings.",
        "words": [
          [
            "واژهٔ",
            "waa-zha-yi",
            "waa-zha"
          ],
          [
            "عیار",
            "ay-yaar",
            "ay-yaar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زمانه‌های",
            "za-maa-na-haa-yi",
            "za-maa-na-haa"
          ],
          [
            "مختلف",
            "mukh-ta-lif",
            "mukh-ta-lif"
          ],
          [
            "آن‌هم",
            "aan-ham",
            "aan-ham"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "معامله‌های",
            "mu-aa-ma-la-haa-yi",
            "mu-aa-ma-la-haa"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "معناهای",
            "ma-naa-haa-yi",
            "ma-naa-haa"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba kaar may-raf-ta ast",
            "ba kaar raf-tan"
          ],
          [
            "کار",
            "kaar",
            "kaar",
            "ba kaar may-raf-ta ast",
            "ba kaar raf-tan"
          ],
          [
            "می‌رفته",
            "may-raf-ta",
            "may-raf-ta",
            "ba kaar may-raf-ta ast",
            "raf-tan",
            "ba kaar raf-tan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "ba kaar may-raf-ta ast",
            "ba kaar raf-tan"
          ]
        ]
      },
      {
        "say": "aa-naa-nay ki qud-rat-mand, zaa-lim wa sit-am-gar boo-dand wa az haych-goo-na zulm dar maw-ri-di ham-naw-aa-ni khaysh da-reegh na-may-war-zee-dand;",
        "mean": "Those who were powerful, cruel and oppressive, and held back from no kind of oppression toward their fellow human beings,",
        "words": [
          [
            "آنانی",
            "aa-naa-nay",
            "aa-naa-nay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "قدرتمند،",
            "qud-rat-mand",
            "qud-rat-mand"
          ],
          [
            "ظالم",
            "zaa-lim",
            "zaa-lim"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ستمگر",
            "sit-am-gar",
            "sit-am-gar"
          ],
          [
            "بودند",
            "boo-dand",
            "boo-dand",
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
            "هیچ‌گونه",
            "haych-goo-na",
            "haych-goo-na"
          ],
          [
            "ظلم",
            "zulm",
            "zulm"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar maw-ri-di"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "dar maw-ri-di"
          ],
          [
            "هم‌نوعان",
            "ham-naw-aa-ni",
            "ham-naw-aan"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "دریغ",
            "da-reegh",
            "da-reegh",
            "da-reegh na-may-war-zee-dand",
            "da-reegh war-zee-dan"
          ],
          [
            "نمی‌ورزیدند؛",
            "na-may-war-zee-dand",
            "na-may-war-zee-dand",
            "da-reegh na-may-war-zee-dand",
            "war-zee-dan",
            "da-reegh war-zee-dan"
          ]
        ]
      },
      {
        "say": "ha-may-sha maw-ri-di khash-mi ay-yaa-raan wa kaa-ka-haa wa ja-waan-mar-daan qa-raar may-gi-rif-tand.",
        "mean": "always became the target of the anger of the ayyars, the kakas and the chivalrous young men.",
        "words": [
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "خشم",
            "khash-mi",
            "khashm"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جوان‌مردان",
            "ja-waan-mar-daan",
            "ja-waan-mar-daan"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar may-gi-rif-tand",
            "qa-raar gi-rif-tan"
          ],
          [
            "می‌گرفتند.",
            "may-gi-rif-tand",
            "may-gi-rif-tand",
            "qa-raar may-gi-rif-tand",
            "gi-rif-tan",
            "qa-raar gi-rif-tan"
          ]
        ]
      },
      {
        "say": "az na-za-ri maz-loo-maan wa sit-am-dee-da-gaan ay-yaar ba haa-mee wa push-ti-baa-ni maz-loo-maan guf-ta may-shud;",
        "mean": "In the eyes of the oppressed and wronged, ayyar was the name for a defender and supporter of the oppressed;",
        "words": [
          [
            "از",
            "az",
            "az",
            "az na-za-ri"
          ],
          [
            "نظر",
            "na-za-ri",
            "na-zar",
            "az na-za-ri"
          ],
          [
            "مظلومان",
            "maz-loo-maan",
            "maz-loo-maan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ستم‌دیده‌گان",
            "sit-am-dee-da-gaan",
            "sit-am-dee-da-gaan"
          ],
          [
            "عیار",
            "ay-yaar",
            "ay-yaar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "حامی",
            "haa-mee",
            "haa-mee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پشتیبان",
            "push-ti-baa-ni",
            "push-ti-baan"
          ],
          [
            "مظلومان",
            "maz-loo-maan",
            "maz-loo-maan"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-ta may-shud",
            "guf-tan",
            "guf-ta shu-dan"
          ],
          [
            "می‌شد؛",
            "may-shud",
            "may-shud",
            "guf-ta may-shud",
            "shu-dan",
            "guf-ta shu-dan"
          ]
        ]
      },
      {
        "say": "ham-chu-naan ay-yaar ba ma-naa-yi mar-di bi-si-yaar ha-ra-kat ku-nan-da, rind, tayz-fahm, baa hosh may-baa-shad wa ay-yaar ya-kay az naam-haa-yi shayr neez ast.",
        "mean": "ayyar also means a very active man, sharp and quick-witted and clever, and ayyar is also one of the names of the lion.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "عیار",
            "ay-yaar",
            "ay-yaar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba ma-naa-yi"
          ],
          [
            "معنای",
            "ma-naa-yi",
            "ma-naa",
            "ba ma-naa-yi"
          ],
          [
            "مرد",
            "mar-di",
            "mard"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "حرکت",
            "ha-ra-kat",
            "ha-ra-kat",
            "ha-ra-kat ku-nan-da"
          ],
          [
            "کننده،",
            "ku-nan-da",
            "ku-nan-da",
            "ha-ra-kat ku-nan-da"
          ],
          [
            "رند،",
            "rind",
            "rind"
          ],
          [
            "تیزفهم،",
            "tayz-fahm",
            "tayz-fahm"
          ],
          [
            "با",
            "baa",
            "baa",
            "baa hosh"
          ],
          [
            "هوش",
            "hosh",
            "hosh",
            "baa hosh"
          ],
          [
            "می‌باشد",
            "may-baa-shad",
            "may-baa-shad",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عیار",
            "ay-yaar",
            "ay-yaar"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "نام‌های",
            "naam-haa-yi",
            "naam-haa"
          ],
          [
            "شیر",
            "shayr",
            "shayr"
          ],
          [
            "نیز",
            "neez",
            "neez"
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
        "say": "ja-waan-mar-dee az li-haa-zi ir-faa-nee daa-raa-yi saa-bi-qa-yi taa-ree-khee ast ki ba haz-ra-ti ib-raa-hee-mi ad-ham ra-hi-ma-hul-laah may-ra-sad.",
        "mean": "In Sufism, chivalry has a history that goes back to Ibrahim Adham (God have mercy on him).",
        "words": [
          [
            "جوان‌مردی",
            "ja-waan-mar-dee",
            "ja-waan-mar-dee"
          ],
          [
            "از",
            "az",
            "az",
            "az li-haa-zi"
          ],
          [
            "لحاظ",
            "li-haa-zi",
            "li-haaz",
            "az li-haa-zi"
          ],
          [
            "عرفانی",
            "ir-faa-nee",
            "ir-faa-nee"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "سابقهٔ",
            "saa-bi-qa-yi",
            "saa-bi-qa"
          ],
          [
            "تاریخی",
            "taa-ree-khee",
            "taa-ree-khee"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "حضرت",
            "haz-ra-ti",
            "haz-rat",
            "haz-ra-ti ib-raa-hee-mi ad-ham"
          ],
          [
            "ابراهیم",
            "ib-raa-hee-mi",
            "ib-raa-heem",
            "haz-ra-ti ib-raa-hee-mi ad-ham"
          ],
          [
            "ادهم",
            "ad-ham",
            "ad-ham",
            "haz-ra-ti ib-raa-hee-mi ad-ham"
          ],
          [
            "(رح)",
            "ra-hi-ma-hul-laah",
            "ra-hi-ma-hul-laah"
          ],
          [
            "می‌رسد.",
            "may-ra-sad",
            "may-ra-sad",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "fu-tuw-wat wa ja-waan-mar-dee baa ta-saw-wuf pay-wan-di khay-lee naz-deek daa-rad.",
        "mean": "Futuwwat and chivalry are very closely tied to Sufism.",
        "words": [
          [
            "فتوت",
            "fu-tuw-wat",
            "fu-tuw-wat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جوانمردی",
            "ja-waan-mar-dee",
            "ja-waan-mar-dee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تصوف",
            "ta-saw-wuf",
            "ta-saw-wuf"
          ],
          [
            "پیوند",
            "pay-wan-di",
            "pay-wand"
          ],
          [
            "خیلی",
            "khay-lee",
            "khay-lee"
          ],
          [
            "نزدیک",
            "naz-deek",
            "naz-deek"
          ],
          [
            "دارد.",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "laf-zi fa-taa dar hasht jaa-yi qur-aa-ni ka-reem aa-ma-da ast wa az aan mar-daa-na-gee wa ja-waan-mar-dee i-raa-da shu-da ast.",
        "mean": "The word fata comes in eight places in the Holy Quran, and manliness and chivalry are meant by it.",
        "words": [
          [
            "لفظ",
            "laf-zi",
            "lafz"
          ],
          [
            "فتی",
            "fa-taa",
            "fa-taa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "هشت",
            "hasht",
            "hasht"
          ],
          [
            "جای",
            "jaa-yi",
            "jaa"
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
            "آمده",
            "aa-ma-da",
            "aa-ma-da",
            "aa-ma-dan"
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
            "مردانه‌گی",
            "mar-daa-na-gee",
            "mar-daa-na-gee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جوان‌مردی",
            "ja-waan-mar-dee",
            "ja-waan-mar-dee"
          ],
          [
            "اراده",
            "i-raa-da",
            "i-raa-da",
            "i-raa-da shu-da ast",
            "i-raa-da shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "i-raa-da shu-da ast",
            "shu-dan",
            "i-raa-da shu-dan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "i-raa-da shu-da ast",
            "i-raa-da shu-dan"
          ]
        ]
      },
      {
        "say": "fa-taa naz-deek ba ma-naa-yi ay-yaar wa kaa-ka ast.",
        "mean": "Fata is close in meaning to ayyar and kaka.",
        "words": [
          [
            "فتی",
            "fa-taa",
            "fa-taa"
          ],
          [
            "نزدیک",
            "naz-deek",
            "naz-deek"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "معنای",
            "ma-naa-yi",
            "ma-naa"
          ],
          [
            "عیار",
            "ay-yaar",
            "ay-yaar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کاکه",
            "kaa-ka",
            "kaa-ka"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "az aw-saa-fi ay-yaa-raan wa ja-waan-mar-daan ya-kay een ast ki ta-waj-ju-hi aan-haa ba u-moo-ri da-roo-nee baysh-tar az u-moo-ri bay-roo-nee ast.",
        "mean": "One quality of ayyars and chivalrous men is that they pay more attention to inner matters than to outward ones.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "اوصاف",
            "aw-saa-fi",
            "aw-saaf"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جوان‌مردان",
            "ja-waan-mar-daan",
            "ja-waan-mar-daan"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "این",
            "een",
            "een"
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
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "امور",
            "u-moo-ri",
            "u-moor"
          ],
          [
            "درونی",
            "da-roo-nee",
            "da-roo-nee"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "امور",
            "u-moo-ri",
            "u-moor"
          ],
          [
            "بیرونی",
            "bay-roo-nee",
            "bay-roo-nee"
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
        "say": "u-soo-li akh-laa-qi ay-yaa-raan",
        "mean": "The moral rules of the ayyars",
        "words": [
          [
            "اصول",
            "u-soo-li",
            "u-sool"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
          ]
        ]
      }
    ],
    [
      {
        "say": "raaz-daa-ree, raas-tee wa si-daa-qat, yaa-ree-yi dar-maan-da-gaan, if-fat wa paak-daa-ma-nee, fi-daa-kaa-ree, a-mal ba qawl wa wa-da, a-maa-nat-daa-ree, sabr wa sha-kee-baa-yee, sa-khaa-wat, mu-ruw-wat, sha-jaa-at, deen, ha-yaa wa aql az u-soo-li akh-laa-qi ay-yaa-raan ast.",
        "mean": "Keeping secrets, truthfulness and honesty, helping the helpless, chastity and purity, self-sacrifice, keeping one's word and promises, trustworthiness, patience and endurance, generosity, kindness, courage, faith, modesty and good sense are among the moral rules of the ayyars.",
        "words": [
          [
            "رازداری،",
            "raaz-daa-ree",
            "raaz-daa-ree"
          ],
          [
            "راستی",
            "raas-tee",
            "raas-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صداقت،",
            "si-daa-qat",
            "si-daa-qat"
          ],
          [
            "یاری",
            "yaa-ree-yi",
            "yaa-ree"
          ],
          [
            "درمانده‌گان،",
            "dar-maan-da-gaan",
            "dar-maan-da-gaan"
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
            "پاکدامنی،",
            "paak-daa-ma-nee",
            "paak-daa-ma-nee"
          ],
          [
            "فداکاری،",
            "fi-daa-kaa-ree",
            "fi-daa-kaa-ree"
          ],
          [
            "عمل",
            "a-mal",
            "a-mal",
            "a-mal ba qawl wa wa-da"
          ],
          [
            "به",
            "ba",
            "ba",
            "a-mal ba qawl wa wa-da"
          ],
          [
            "قول",
            "qawl",
            "qawl",
            "a-mal ba qawl wa wa-da"
          ],
          [
            "و",
            "wa",
            "wa",
            "a-mal ba qawl wa wa-da"
          ],
          [
            "وعده،",
            "wa-da",
            "wa-da",
            "a-mal ba qawl wa wa-da"
          ],
          [
            "امانت‌داری،",
            "a-maa-nat-daa-ree",
            "a-maa-nat-daa-ree"
          ],
          [
            "صبر",
            "sabr",
            "sabr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شکیبایی،",
            "sha-kee-baa-yee",
            "sha-kee-baa-yee"
          ],
          [
            "سخاوت،",
            "sa-khaa-wat",
            "sa-khaa-wat"
          ],
          [
            "مروت،",
            "mu-ruw-wat",
            "mu-ruw-wat"
          ],
          [
            "شجاعت،",
            "sha-jaa-at",
            "sha-jaa-at"
          ],
          [
            "دین،",
            "deen",
            "deen"
          ],
          [
            "حیا",
            "ha-yaa",
            "ha-yaa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عقل",
            "aql",
            "aql"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اصول",
            "u-soo-li",
            "u-sool"
          ],
          [
            "اخلاق",
            "akh-laa-qi",
            "akh-laaq"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
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
        "say": "a-zaa-yi een gu-roh wa yaa das-ta-haa az mi-yaa-ni mar-dum bar-khaas-ta wa mu-ta-shak-kil az qish-ri naa-daa-ri jaa-mi-a wa ja-waa-naa-ni pur-shor wa qud-rat-mand wa dar ayn haal naa-raa-zee az aw-zaa boo-dand.",
        "mean": "The members of this group, or these bands, rose from among the people and were made up of the poor class of society and of passionate, strong young men who were at the same time unhappy with the state of things.",
        "words": [
          [
            "اعضای",
            "a-zaa-yi",
            "a-zaa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "گروه",
            "gu-roh",
            "gu-roh"
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
            "دسته‌ها",
            "das-ta-haa",
            "das-ta-haa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "میان",
            "mi-yaa-ni",
            "mi-yaan"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
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
            "متشکل",
            "mu-ta-shak-kil",
            "mu-ta-shak-kil",
            "mu-ta-shak-kil az"
          ],
          [
            "از",
            "az",
            "az",
            "mu-ta-shak-kil az"
          ],
          [
            "قشر",
            "qish-ri",
            "qishr"
          ],
          [
            "نادار",
            "naa-daa-ri",
            "naa-daar"
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
            "جوانان",
            "ja-waa-naa-ni",
            "ja-waa-naan"
          ],
          [
            "پرشور",
            "pur-shor",
            "pur-shor"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قدرتمند",
            "qud-rat-mand",
            "qud-rat-mand"
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
            "dar ayn haal"
          ],
          [
            "عین",
            "ayn",
            "ayn",
            "dar ayn haal"
          ],
          [
            "حال",
            "haal",
            "haal",
            "dar ayn haal"
          ],
          [
            "ناراضی",
            "naa-raa-zee",
            "naa-raa-zee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اوضاع",
            "aw-zaa",
            "aw-zaa"
          ],
          [
            "بودند.",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ra-ee-saa-ni een das-ta-haa raa ba a-naa-wee-ni peer, us-taad, sar-hang wa pa-dar-ahd may-naa-mee-dand.",
        "mean": "The leaders of these bands were called by the titles pir, ustad, sarhang and padar-ahd.",
        "words": [
          [
            "رئیسان",
            "ra-ee-saa-ni",
            "ra-ee-saan"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دسته‌ها",
            "das-ta-haa",
            "das-ta-haa"
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
            "عناوین",
            "a-naa-wee-ni",
            "a-naa-ween"
          ],
          [
            "پیر،",
            "peer",
            "peer"
          ],
          [
            "استاد،",
            "us-taad",
            "us-taad"
          ],
          [
            "سرهنگ",
            "sar-hang",
            "sar-hang"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پدرعهد",
            "pa-dar-ahd",
            "pa-dar-ahd"
          ],
          [
            "می‌نامیدند.",
            "may-naa-mee-dand",
            "may-naa-mee-dand",
            "naa-mee-dan"
          ]
        ]
      },
      {
        "say": "ah-daa-fi een das-ta yaa gu-roh-haa mu-ta-faa-wit bood wa ma-naa-fi-yi man-ti-qa yee wa yaa ma-hal-lee-yi khaysh raa tar-jeeh may-daa-dand,",
        "mean": "The aims of these bands or groups differed, and they put their own regional or local interests first,",
        "words": [
          [
            "اهداف",
            "ah-daa-fi",
            "ah-daaf"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "دسته",
            "das-ta",
            "das-ta"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "گروه‌ها",
            "gu-roh-haa",
            "gu-roh-haa"
          ],
          [
            "متفاوت",
            "mu-ta-faa-wit",
            "mu-ta-faa-wit"
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
            "منافع",
            "ma-naa-fi-yi",
            "ma-naa-fi"
          ],
          [
            "منطقه",
            "man-ti-qa",
            "man-ti-qa",
            "man-ti-qa yee"
          ],
          [
            "یی",
            "yee",
            "yee",
            "man-ti-qa yee"
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
            "محلی",
            "ma-hal-lee-yi",
            "ma-hal-lee"
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
            "ترجیح",
            "tar-jeeh",
            "tar-jeeh",
            "tar-jeeh may-daa-dand",
            "tar-jeeh daa-dan"
          ],
          [
            "می‌دادند،",
            "may-daa-dand",
            "may-daa-dand",
            "tar-jeeh may-daa-dand",
            "daa-dan",
            "tar-jeeh daa-dan"
          ]
        ]
      },
      {
        "say": "wa daa-wa-ta-la-bi uz-wi-yat dar een das-ta-haa ba sha-raa-yi-ti khaas pa-zee-ruf-ta may-shud,",
        "mean": "and a volunteer for membership in these bands was accepted on special conditions:",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "داوطلب",
            "daa-wa-ta-la-bi",
            "daa-wa-ta-lab"
          ],
          [
            "عضویت",
            "uz-wi-yat",
            "uz-wi-yat"
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
            "دسته‌ها",
            "das-ta-haa",
            "das-ta-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "شرایط",
            "sha-raa-yi-ti",
            "sha-raa-yit"
          ],
          [
            "خاص",
            "khaas",
            "khaas"
          ],
          [
            "پذیرفته",
            "pa-zee-ruf-ta",
            "pa-zee-ruf-ta",
            "pa-zee-ruf-ta may-shud",
            "pa-zee-ruf-tan",
            "pa-zee-ruf-ta shu-dan"
          ],
          [
            "می‌شد،",
            "may-shud",
            "may-shud",
            "pa-zee-ruf-ta may-shud",
            "shu-dan",
            "pa-zee-ruf-ta shu-dan"
          ]
        ]
      },
      {
        "say": "oo ahd-naa-ma may-daad, du-aa-yi mar-boot baa-laa-yash khaan-da may-shud wa ka-ma-ri way raa may-bas-tand;",
        "mean": "he gave a written pledge, the proper prayer was read over him, and a belt was tied around his waist;",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "عهدنامه",
            "ahd-naa-ma",
            "ahd-naa-ma",
            "ahd-naa-ma may-daad"
          ],
          [
            "می‌داد،",
            "may-daad",
            "may-daad",
            "ahd-naa-ma may-daad",
            "daa-dan"
          ],
          [
            "دعای",
            "du-aa-yi",
            "du-aa"
          ],
          [
            "مربوط",
            "mar-boot",
            "mar-boot"
          ],
          [
            "بالایش",
            "baa-laa-yash",
            "baa-laa-yash"
          ],
          [
            "خوانده",
            "khaan-da",
            "khaan-da",
            "khaan-da may-shud",
            "khaan-dan",
            "khaan-da shu-dan"
          ],
          [
            "می‌شد",
            "may-shud",
            "may-shud",
            "khaan-da may-shud",
            "shu-dan",
            "khaan-da shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کمر",
            "ka-ma-ri",
            "ka-mar",
            "ka-ma-ri way raa may-bas-tand"
          ],
          [
            "وی",
            "way",
            "way",
            "ka-ma-ri way raa may-bas-tand"
          ],
          [
            "را",
            "raa",
            "raa",
            "ka-ma-ri way raa may-bas-tand"
          ],
          [
            "می‌بستند؛",
            "may-bas-tand",
            "may-bas-tand",
            "ka-ma-ri way raa may-bas-tand",
            "bas-tan"
          ]
        ]
      },
      {
        "say": "pas az cha-shee-da-ni na-mak wa aa-bay, ma-raa-ti-bi sa-khaa, sa-faa wa wa-faa raa bar zim-ma-yi oo may-gu-zaash-tand wa pas az po-shee-da-ni jaa-ma-yi makh-soos az ah-li “fu-tuw-wat” ba shu-maar may-raft.",
        "mean": "after he tasted salt and water, the duties of generosity, sincerity and loyalty were placed upon him, and after putting on the special garment he was counted among the people of futuwwat.",
        "words": [
          [
            "پس",
            "pas",
            "pas",
            "pas az"
          ],
          [
            "از",
            "az",
            "az",
            "pas az"
          ],
          [
            "چشیدن",
            "cha-shee-da-ni",
            "cha-shee-dan"
          ],
          [
            "نمک",
            "na-mak",
            "na-mak"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آبی،",
            "aa-bay",
            "aa-bay"
          ],
          [
            "مراتب",
            "ma-raa-ti-bi",
            "ma-raa-tib"
          ],
          [
            "سخا،",
            "sa-khaa",
            "sa-khaa"
          ],
          [
            "صفا",
            "sa-faa",
            "sa-faa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وفا",
            "wa-faa",
            "wa-faa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar zim-ma-yi oo may-gu-zaash-tand"
          ],
          [
            "ذمهٔ",
            "zim-ma-yi",
            "zim-ma",
            "bar zim-ma-yi oo may-gu-zaash-tand"
          ],
          [
            "او",
            "oo",
            "oo",
            "bar zim-ma-yi oo may-gu-zaash-tand"
          ],
          [
            "می‌گذاشتند",
            "may-gu-zaash-tand",
            "may-gu-zaash-tand",
            "bar zim-ma-yi oo may-gu-zaash-tand",
            "gu-zaash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پوشیدن",
            "po-shee-da-ni",
            "po-shee-dan"
          ],
          [
            "جامهٔ",
            "jaa-ma-yi",
            "jaa-ma"
          ],
          [
            "مخصوص",
            "makh-soos",
            "makh-soos"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "اهل",
            "ah-li",
            "ahl"
          ],
          [
            "«فتوت»",
            "fu-tuw-wat",
            "fu-tuw-wat"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shu-maar may-raft",
            "ba shu-maar raf-tan"
          ],
          [
            "شمار",
            "shu-maar",
            "shu-maar",
            "ba shu-maar may-raft",
            "ba shu-maar raf-tan"
          ],
          [
            "می‌رفت.",
            "may-raft",
            "may-raft",
            "ba shu-maar may-raft",
            "raf-tan",
            "ba shu-maar raf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "een gu-roh za-maa-nay ki dar af-ghaa-nis-taan fa-aal gar-dee-dand naa-mi “ay-yaa-raan” raa ba khud gi-rif-tand wa na-zar ba sha-raa-yi-ti ij-ti-maa-ee ba shak-li si-yaa-see dar-aa-ma-dand.",
        "mean": "When this group became active in Afghanistan, it took the name “ayyars”, and because of social conditions it took a political form.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "گروه",
            "gu-roh",
            "gu-roh"
          ],
          [
            "زمانی",
            "za-maa-nay",
            "za-maa-nay",
            "za-maa-nay ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "za-maa-nay ki"
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
            "فعال",
            "fa-aal",
            "fa-aal",
            "fa-aal gar-dee-dand"
          ],
          [
            "گردیدند",
            "gar-dee-dand",
            "gar-dee-dand",
            "fa-aal gar-dee-dand",
            "gar-dee-dan"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "«عیاران»",
            "ay-yaa-raan",
            "ay-yaa-raan"
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
            "گرفتند",
            "gi-rif-tand",
            "gi-rif-tand",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar",
            "na-zar ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "na-zar ba"
          ],
          [
            "شرایط",
            "sha-raa-yi-ti",
            "sha-raa-yit"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shak-li si-yaa-see dar-aa-ma-dand"
          ],
          [
            "شکل",
            "shak-li",
            "shakl",
            "ba shak-li si-yaa-see dar-aa-ma-dand"
          ],
          [
            "سیاسی",
            "si-yaa-see",
            "si-yaa-see",
            "ba shak-li si-yaa-see dar-aa-ma-dand"
          ],
          [
            "درآمدند.",
            "dar-aa-ma-dand",
            "dar-aa-ma-dand",
            "ba shak-li si-yaa-see dar-aa-ma-dand",
            "dar-aa-ma-dan"
          ]
        ]
      },
      {
        "say": "kaar-naa-ma-haa-yi ay-yaa-raa-ni ghar-bi kish-war dar sees-taan (neem-roz) mash-hoor bood;",
        "mean": "The deeds of the ayyars of the west of the country, in Sistan (Nimroz), were famous;",
        "words": [
          [
            "کارنامه‌های",
            "kaar-naa-ma-haa-yi",
            "kaar-naa-ma-haa"
          ],
          [
            "عیاران",
            "ay-yaa-raa-ni",
            "ay-yaa-raan"
          ],
          [
            "غرب",
            "ghar-bi",
            "gharb"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
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
            "(نیمروز)",
            "neem-roz",
            "neem-roz"
          ],
          [
            "مشهور",
            "mash-hoor",
            "mash-hoor"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "chu-naan-ki yaa-qoo-bi lay-si saf-faar mu-as-si-si daw-la-ti saf-faa-ree khud az jum-la-yi ay-yaa-raan bood;",
        "mean": "for example, Ya'qub-i Layth the Coppersmith, the founder of the Saffarid state, was himself one of the ayyars;",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "یعقوب",
            "yaa-qoo-bi",
            "yaa-qoob",
            "yaa-qoo-bi lay-si saf-faar"
          ],
          [
            "لیث",
            "lay-si",
            "lays",
            "yaa-qoo-bi lay-si saf-faar"
          ],
          [
            "صفار",
            "saf-faar",
            "saf-faar",
            "yaa-qoo-bi lay-si saf-faar"
          ],
          [
            "مؤسس",
            "mu-as-si-si",
            "mu-as-sis"
          ],
          [
            "دولت",
            "daw-la-ti",
            "daw-lat"
          ],
          [
            "صفاری",
            "saf-faa-ree",
            "saf-faa-ree"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "از",
            "az",
            "az",
            "az jum-la-yi"
          ],
          [
            "جملهٔ",
            "jum-la-yi",
            "jum-la",
            "az jum-la-yi"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
          ],
          [
            "بود؛",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ay-yaa-raan dar kaa-bul ba naa-mi “kaa-ka-haa” wa dar kan-da-haar ba naa-mi “ja-waan” yaad may-shu-dand.",
        "mean": "in Kabul the ayyars were called “kakas” and in Kandahar “jawan”.",
        "words": [
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
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
            "«کاکه‌ها»",
            "kaa-ka-haa",
            "kaa-ka-haa"
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
            "کندهار",
            "kan-da-haar",
            "kan-da-haar"
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
            "«جوان»",
            "ja-waan",
            "ja-waan"
          ],
          [
            "یاد",
            "yaad",
            "yaad",
            "yaad may-shu-dand",
            "yaad shu-dan"
          ],
          [
            "می‌شدند.",
            "may-shu-dand",
            "may-shu-dand",
            "yaad may-shu-dand",
            "shu-dan",
            "yaad shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "bach-cha-yi aa-zar, pay-ra-wee-yi bach-cha-yi a-dee, kaa-ka ta-laa, kaa-ka nuq-ra, kaa-ka sha-koor, a-zee-zi lan-gar-za-meen wa soo-fee gha-nee az ma-shaa-hee-ri ay-yaa-raan dar qar-ni noz-da wa bees-tum dar kaa-bul boo-dand.",
        "mean": "Bacha-yi Azar, Pirawi-yi Bacha-yi Adi, Kaka Tala, Kaka Nuqra, Kaka Shakur, Aziz Langarzamin and Sufi Ghani were among the famous ayyars of Kabul in the nineteenth and twentieth centuries.",
        "words": [
          [
            "بچهٔ",
            "bach-cha-yi",
            "bach-cha",
            "bach-cha-yi aa-zar"
          ],
          [
            "آذر،",
            "aa-zar",
            "aa-zar",
            "bach-cha-yi aa-zar"
          ],
          [
            "پیروی",
            "pay-ra-wee-yi",
            "pay-ra-wee",
            "pay-ra-wee-yi bach-cha-yi a-dee"
          ],
          [
            "بچهٔ",
            "bach-cha-yi",
            "bach-cha",
            "pay-ra-wee-yi bach-cha-yi a-dee"
          ],
          [
            "ادی،",
            "a-dee",
            "a-dee",
            "pay-ra-wee-yi bach-cha-yi a-dee"
          ],
          [
            "کاکه",
            "kaa-ka",
            "kaa-ka",
            "kaa-ka ta-laa"
          ],
          [
            "طلا،",
            "ta-laa",
            "ta-laa",
            "kaa-ka ta-laa"
          ],
          [
            "کاکه",
            "kaa-ka",
            "kaa-ka",
            "kaa-ka nuq-ra"
          ],
          [
            "نقره،",
            "nuq-ra",
            "nuq-ra",
            "kaa-ka nuq-ra"
          ],
          [
            "کاکه",
            "kaa-ka",
            "kaa-ka",
            "kaa-ka sha-koor"
          ],
          [
            "شکور،",
            "sha-koor",
            "sha-koor",
            "kaa-ka sha-koor"
          ],
          [
            "عزیز",
            "a-zee-zi",
            "a-zeez",
            "a-zee-zi lan-gar-za-meen"
          ],
          [
            "لنگرزمین",
            "lan-gar-za-meen",
            "lan-gar-za-meen",
            "a-zee-zi lan-gar-za-meen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "صوفی",
            "soo-fee",
            "soo-fee",
            "soo-fee gha-nee"
          ],
          [
            "غنی",
            "gha-nee",
            "gha-nee",
            "soo-fee gha-nee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مشاهیر",
            "ma-shaa-hee-ri",
            "ma-shaa-heer"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn",
            "qar-ni noz-da wa bees-tum"
          ],
          [
            "نزده",
            "noz-da",
            "noz-da",
            "qar-ni noz-da wa bees-tum"
          ],
          [
            "و",
            "wa",
            "wa",
            "qar-ni noz-da wa bees-tum"
          ],
          [
            "بیستم",
            "bees-tum",
            "bees-tum",
            "qar-ni noz-da wa bees-tum"
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
            "بودند.",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ta-daa-di chu-neen kaa-ka-haa wa ay-yaa-raan dar af-ghaa-nis-taan zi-yaad bood",
        "mean": "There were many such kakas and ayyars in Afghanistan.",
        "words": [
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عیاران",
            "ay-yaa-raan",
            "ay-yaa-raan"
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
            "زیاد",
            "zi-yaad",
            "zi-yaad"
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
        "say": "ja-waan mar-day, si-daa-qat, qawl wa zu-baan, ee-saar wa az khud-gu-za-ree ju-zi laa-yan-fak zin-da-gee-shaan gar-dee-da bood.",
        "mean": "Chivalry, honesty, keeping their word, selflessness and self-sacrifice had become an inseparable part of their lives.",
        "words": [
          [
            "جوان",
            "ja-waan",
            "ja-waan",
            "ja-waan mar-day"
          ],
          [
            "مردی،",
            "mar-day",
            "mar-day",
            "ja-waan mar-day"
          ],
          [
            "صداقت،",
            "si-daa-qat",
            "si-daa-qat"
          ],
          [
            "قول",
            "qawl",
            "qawl",
            "qawl wa zu-baan"
          ],
          [
            "و",
            "wa",
            "wa",
            "qawl wa zu-baan"
          ],
          [
            "زبان،",
            "zu-baan",
            "zu-baan",
            "qawl wa zu-baan"
          ],
          [
            "ایثار",
            "ee-saar",
            "ee-saar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az",
            "az khud-gu-za-ree"
          ],
          [
            "خودگذری",
            "khud-gu-za-ree",
            "khud-gu-za-ree",
            "az khud-gu-za-ree"
          ],
          [
            "جزء",
            "ju-zi",
            "juz#part",
            "ju-zi laa-yan-fak"
          ],
          [
            "لاینفک",
            "laa-yan-fak",
            "laa-yan-fak",
            "ju-zi laa-yan-fak"
          ],
          [
            "زنده‌گی‌شان",
            "zin-da-gee-shaan",
            "zin-da-gee-shaan"
          ],
          [
            "گردیده",
            "gar-dee-da",
            "gar-dee-da",
            "gar-dee-da bood",
            "gar-dee-dan"
          ],
          [
            "بود.",
            "bood",
            "bood",
            "gar-dee-da bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ja-waa-naa-ni af-ghaan shu-maa ham raa-hi fu-tuw-wat wa mar-daa-na-gee raa dar paysh gee-reed wa az da-ri khid-mat ba maz-loo-maan paysh aa-yeed wa ba nas-li aa-yan-da neez ay-yaa-ree wa fi-daa-kaa-ree bi-yaa-mo-zeed.",
        "mean": "Young Afghans, you too take up the path of futuwwat and manliness, come forward to serve the oppressed, and teach the next generation chivalry and self-sacrifice.",
        "words": [
          [
            "جوانان",
            "ja-waa-naa-ni",
            "ja-waa-naan"
          ],
          [
            "افغان",
            "af-ghaan",
            "af-ghaan"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "فتوت",
            "fu-tuw-wat",
            "fu-tuw-wat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مردانه‌گی",
            "mar-daa-na-gee",
            "mar-daa-na-gee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar paysh gee-reed",
            "dar paysh gi-rif-tan"
          ],
          [
            "پیش",
            "paysh",
            "paysh",
            "dar paysh gee-reed",
            "dar paysh gi-rif-tan"
          ],
          [
            "گیرید",
            "gee-reed",
            "gee-reed",
            "dar paysh gee-reed",
            "gi-rif-tan",
            "dar paysh gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "از",
            "az",
            "az",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed"
          ],
          [
            "در",
            "da-ri",
            "dar#door",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed"
          ],
          [
            "خدمت",
            "khid-mat",
            "khid-mat",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed"
          ],
          [
            "به",
            "ba",
            "ba",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed"
          ],
          [
            "مظلومان",
            "maz-loo-maan",
            "maz-loo-maan",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed"
          ],
          [
            "پیش",
            "paysh",
            "paysh",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed"
          ],
          [
            "آیید",
            "aa-yeed",
            "aa-yeed",
            "az da-ri khid-mat ba maz-loo-maan paysh aa-yeed",
            "aa-ma-dan"
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
            "نسل",
            "nas-li",
            "nasl"
          ],
          [
            "آینده",
            "aa-yan-da",
            "aa-yan-da"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "عیاری",
            "ay-yaa-ree",
            "ay-yaa-ree"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فداکاری",
            "fi-daa-kaa-ree",
            "fi-daa-kaa-ree"
          ],
          [
            "بیاموزید.",
            "bi-yaa-mo-zeed",
            "bi-yaa-mo-zeed",
            "aa-mokh-tan"
          ]
        ]
      },
      {
        "say": "dar gu-zash-ta maa kaa-ka-haa-yi mash-hoo-ray daash-taym;",
        "mean": "In the past we had famous kakas;",
        "words": [
          [
            "در",
            "dar",
            "dar",
            "dar gu-zash-ta"
          ],
          [
            "گذشته",
            "gu-zash-ta",
            "gu-zash-ta",
            "dar gu-zash-ta",
            "gu-zash-tan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "کاکه‌های",
            "kaa-ka-haa-yi",
            "kaa-ka-haa"
          ],
          [
            "مشهوری",
            "mash-hoo-ray",
            "mash-hoo-ray"
          ],
          [
            "داشتیم؛",
            "daash-taym",
            "daash-taym",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "chu-naan-ki kaa-ka-haa-yi qar-ni bees-tum ra-heem, qay-yoom, gul wa meer-zaa dar man-ti-qa-yi koh-daa-man mash-hoor boo-dand.",
        "mean": "for example, among the kakas of the twentieth century, Rahim, Qayum, Gul and Mirza were famous in the Kohdaman area.",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "کاکه‌های",
            "kaa-ka-haa-yi",
            "kaa-ka-haa"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "بیستم",
            "bees-tum",
            "bees-tum"
          ],
          [
            "رحیم،",
            "ra-heem",
            "ra-heem"
          ],
          [
            "قیوم،",
            "qay-yoom",
            "qay-yoom"
          ],
          [
            "گل",
            "gul",
            "gul"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "میرزا",
            "meer-zaa",
            "meer-zaa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "منطقهٔ",
            "man-ti-qa-yi",
            "man-ti-qa"
          ],
          [
            "کوهدامن",
            "koh-daa-man",
            "koh-daa-man"
          ],
          [
            "مشهور",
            "mash-hoor",
            "mash-hoor"
          ],
          [
            "بودند.",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ish-ti-raa-ki kaa-ka-haa dar ma-raa-si-mi kho-shee wa gham maa-ya-yi if-ti-khaar har mih-maan-daar bood wa ba kaa-ka-haa iz-zat wa ih-ti-raa-mi khaas qaa-yil boo-dand.",
        "mean": "Having kakas at celebrations and funerals was a source of pride for every host, and people gave kakas special honor and respect.",
        "words": [
          [
            "اشتراک",
            "ish-ti-raa-ki",
            "ish-ti-raak"
          ],
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مراسم",
            "ma-raa-si-mi",
            "ma-raa-sim"
          ],
          [
            "خوشی",
            "kho-shee",
            "kho-shee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غم",
            "gham",
            "gham"
          ],
          [
            "مایهٔ",
            "maa-ya-yi",
            "maa-ya",
            "maa-ya-yi if-ti-khaar"
          ],
          [
            "افتخار",
            "if-ti-khaar",
            "if-ti-khaar",
            "maa-ya-yi if-ti-khaar"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "مهماندار",
            "mih-maan-daar",
            "mih-maan-daar"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "عزت",
            "iz-zat",
            "iz-zat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احترام",
            "ih-ti-raa-mi",
            "ih-ti-raam"
          ],
          [
            "خاص",
            "khaas",
            "khaas"
          ],
          [
            "قایل",
            "qaa-yil",
            "qaa-yil",
            "qaa-yil boo-dand",
            "qaa-yil bu-dan"
          ],
          [
            "بودند.",
            "boo-dand",
            "boo-dand",
            "qaa-yil boo-dand",
            "bu-dan",
            "qaa-yil bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "kaa-ka-haa-yi kaa-bul dar paa-yee-ni chaw-ki kaa-bul, shor-baa-zaar, mu-raad-khaa-nee wa chin-da-wul hal-qa-haa-yi ju-daa-gaa-na wa ra-ee-saa-ni a-la-hi-da daash-tand",
        "mean": "The kakas of Kabul had separate circles and separate leaders in Payin Chawk, Shor Bazaar, Murad Khani and Chindawul,",
        "words": [
          [
            "کاکه‌های",
            "kaa-ka-haa-yi",
            "kaa-ka-haa"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "پایین",
            "paa-yee-ni",
            "paa-yeen",
            "paa-yee-ni chaw-ki kaa-bul"
          ],
          [
            "چوک",
            "chaw-ki",
            "chawk",
            "paa-yee-ni chaw-ki kaa-bul"
          ],
          [
            "کابل،",
            "kaa-bul",
            "kaa-bul",
            "paa-yee-ni chaw-ki kaa-bul"
          ],
          [
            "شوربازار،",
            "shor-baa-zaar",
            "shor-baa-zaar"
          ],
          [
            "مرادخانی",
            "mu-raad-khaa-nee",
            "mu-raad-khaa-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چنداول",
            "chin-da-wul",
            "chin-da-wul"
          ],
          [
            "حلقه‌های",
            "hal-qa-haa-yi",
            "hal-qa-haa"
          ],
          [
            "جداگانه",
            "ju-daa-gaa-na",
            "ju-daa-gaa-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رئیسان",
            "ra-ee-saa-ni",
            "ra-ee-saan"
          ],
          [
            "علیحده",
            "a-la-hi-da",
            "a-la-hi-da"
          ],
          [
            "داشتند",
            "daash-tand",
            "daash-tand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "wa dar jang-haa-yi tan ba tan baa ha-ree-faan az kush-ta wa yaa zakh-mee-yi khaysh i-daa-raa-ti daw-la-tee raa aa-gaah na-may-saakh-tand",
        "mean": "and in hand-to-hand fights with rivals they did not tell the government offices about their dead or wounded,",
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
            "جنگ‌های",
            "jang-haa-yi",
            "jang-haa"
          ],
          [
            "تن",
            "tan",
            "tan",
            "tan ba tan"
          ],
          [
            "به",
            "ba",
            "ba",
            "tan ba tan"
          ],
          [
            "تن",
            "tan",
            "tan",
            "tan ba tan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "حریفان",
            "ha-ree-faan",
            "ha-ree-faan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کشته",
            "kush-ta",
            "kush-ta",
            "kush-tan"
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
            "زخمی",
            "zakh-mee-yi",
            "zakh-mee"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "ادارات",
            "i-daa-raa-ti",
            "i-daa-raat"
          ],
          [
            "دولتی",
            "daw-la-tee",
            "daw-la-tee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آگاه",
            "aa-gaah",
            "aa-gaah",
            "aa-gaah na-may-saakh-tand",
            "aa-gaah saakh-tan"
          ],
          [
            "نمی‌ساختند",
            "na-may-saakh-tand",
            "na-may-saakh-tand",
            "aa-gaah na-may-saakh-tand",
            "saakh-tan",
            "aa-gaah saakh-tan"
          ]
        ]
      },
      {
        "say": "wa khud gu-roh-haa wa das-ta-haa dar qis-ma-ti ha-li mush-ki-laa-ti khaysh iq-daam may-kar-dand",
        "mean": "and the groups and bands acted by themselves to solve their own problems,",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "گروه‌ها",
            "gu-roh-haa",
            "gu-roh-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دسته‌ها",
            "das-ta-haa",
            "das-ta-haa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar qis-ma-ti"
          ],
          [
            "قسمت",
            "qis-ma-ti",
            "qis-mat",
            "dar qis-ma-ti"
          ],
          [
            "حل",
            "ha-li",
            "hal"
          ],
          [
            "مشکلات",
            "mush-ki-laa-ti",
            "mush-ki-laat"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "اقدام",
            "iq-daam",
            "iq-daam",
            "iq-daam may-kar-dand",
            "iq-daam kar-dan"
          ],
          [
            "می‌کردند",
            "may-kar-dand",
            "may-kar-dand",
            "iq-daam may-kar-dand",
            "kar-dan",
            "iq-daam kar-dan"
          ]
        ]
      },
      {
        "say": "wa arz wa shi-kaa-yat ba daw-lat raa nang wa aar may-daa-nis-tand.",
        "mean": "and they thought complaining to the government was shameful.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عرض",
            "arz",
            "arz",
            "arz wa shi-kaa-yat"
          ],
          [
            "و",
            "wa",
            "wa",
            "arz wa shi-kaa-yat"
          ],
          [
            "شکایت",
            "shi-kaa-yat",
            "shi-kaa-yat",
            "arz wa shi-kaa-yat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دولت",
            "daw-lat",
            "daw-lat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "ننگ",
            "nang",
            "nang",
            "nang wa aar"
          ],
          [
            "و",
            "wa",
            "wa",
            "nang wa aar"
          ],
          [
            "عار",
            "aar",
            "aar",
            "nang wa aar"
          ],
          [
            "می‌دانستند.",
            "may-daa-nis-tand",
            "may-daa-nis-tand",
            "daa-nis-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "kaa-ka-haa-yi kaa-bul li-baa-si makh-soos ba tan may-kar-dand, das-taa-ri da-raaz taa zaa-noo, pay-zaar, pay-raa-han tum-baan baa paa-cha-haa-yi nay-fa za-da ba tan may-kar-dand.",
        "mean": "The kakas of Kabul wore special clothes: a long turban reaching to the knees, pizar shoes, and a shirt and trousers with hemmed legs.",
        "words": [
          [
            "کاکه‌های",
            "kaa-ka-haa-yi",
            "kaa-ka-haa"
          ],
          [
            "کابل",
            "kaa-bul",
            "kaa-bul"
          ],
          [
            "لباس",
            "li-baa-si",
            "li-baas"
          ],
          [
            "مخصوص",
            "makh-soos",
            "makh-soos"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba tan may-kar-dand",
            "ba tan kar-dan"
          ],
          [
            "تن",
            "tan",
            "tan",
            "ba tan may-kar-dand",
            "ba tan kar-dan"
          ],
          [
            "می‌کردند،",
            "may-kar-dand",
            "may-kar-dand",
            "ba tan may-kar-dand",
            "kar-dan",
            "ba tan kar-dan"
          ],
          [
            "دستار",
            "das-taa-ri",
            "das-taar"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "زانو،",
            "zaa-noo",
            "zaa-noo"
          ],
          [
            "پیزار،",
            "pay-zaar",
            "pay-zaar"
          ],
          [
            "پیراهن",
            "pay-raa-han",
            "pay-raa-han",
            "pay-raa-han tum-baan"
          ],
          [
            "تنبان",
            "tum-baan",
            "tum-baan",
            "pay-raa-han tum-baan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "پاچه‌های",
            "paa-cha-haa-yi",
            "paa-cha-haa"
          ],
          [
            "نیفه",
            "nay-fa",
            "nay-fa",
            "nay-fa za-da"
          ],
          [
            "زده",
            "za-da",
            "za-da",
            "nay-fa za-da",
            "za-dan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba tan may-kar-dand",
            "ba tan kar-dan"
          ],
          [
            "تن",
            "tan",
            "tan",
            "ba tan may-kar-dand",
            "ba tan kar-dan"
          ],
          [
            "می‌کردند.",
            "may-kar-dand",
            "may-kar-dand",
            "ba tan may-kar-dand",
            "kar-dan",
            "ba tan kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "khas-la-ti dee-ga-ri kaa-ka-haa an-jaa-mi khi-da-maa-ti mush-kil, gasht wa gu-zaar dar qab-ris-taan-haa, koh-haa wa sa-far-haa-yi door wa na-jaat daa-dan za-ee-faan wa naa-ta-waa-naan az mu-see-bat bood",
        "mean": "Another habit of the kakas was doing hard services, wandering in graveyards and mountains, making long journeys, and rescuing the weak and helpless from disaster,",
        "words": [
          [
            "خصلت",
            "khas-la-ti",
            "khas-lat"
          ],
          [
            "دیگر",
            "dee-ga-ri",
            "dee-gar"
          ],
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "انجام",
            "an-jaa-mi",
            "an-jaam"
          ],
          [
            "خدمات",
            "khi-da-maa-ti",
            "khi-da-maat"
          ],
          [
            "مشکل،",
            "mush-kil",
            "mush-kil"
          ],
          [
            "گشت",
            "gasht",
            "gasht",
            "gasht wa gu-zaar",
            "gash-tan"
          ],
          [
            "و",
            "wa",
            "wa",
            "gasht wa gu-zaar"
          ],
          [
            "گذار",
            "gu-zaar",
            "gu-zaar",
            "gasht wa gu-zaar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قبرستان‌ها،",
            "qab-ris-taan-haa",
            "qab-ris-taan-haa"
          ],
          [
            "کوه‌ها",
            "koh-haa",
            "koh-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سفرهای",
            "sa-far-haa-yi",
            "sa-far-haa"
          ],
          [
            "دور",
            "door",
            "door"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نجات",
            "na-jaat",
            "na-jaat",
            "na-jaat daa-dan"
          ],
          [
            "دادن",
            "daa-dan",
            "daa-dan",
            "na-jaat daa-dan"
          ],
          [
            "ضعیفان",
            "za-ee-faan",
            "za-ee-faan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناتوانان",
            "naa-ta-waa-naan",
            "naa-ta-waa-naan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مصیبت",
            "mu-see-bat",
            "mu-see-bat"
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
        "say": "wa ha-may-sha yak-dee-gar raa dar mu-kaa-li-ma “shayr-bach-cha” khi-taab may-kar-dand.",
        "mean": "and in conversation they always called each other “lion cub”.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "یک‌دیگر",
            "yak-dee-gar",
            "yak-dee-gar"
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
            "مکالمه",
            "mu-kaa-li-ma",
            "mu-kaa-li-ma"
          ],
          [
            "«شیربچه»",
            "shayr-bach-cha",
            "shayr-bach-cha"
          ],
          [
            "خطاب",
            "khi-taab",
            "khi-taab",
            "khi-taab may-kar-dand",
            "khi-taab kar-dan"
          ],
          [
            "می‌کردند.",
            "may-kar-dand",
            "may-kar-dand",
            "khi-taab may-kar-dand",
            "kar-dan",
            "khi-taab kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pah-la-waa-nee, war-zish, chob-baa-zee, aab-baa-zee wa pi-yaa-da-ro-wee may-aa-mokh-tand.",
        "mean": "They learned wrestling, sports, stick fighting, swimming and walking.",
        "words": [
          [
            "پهلوانی،",
            "pah-la-waa-nee",
            "pah-la-waa-nee"
          ],
          [
            "ورزش،",
            "war-zish",
            "war-zish"
          ],
          [
            "چوب‌بازی،",
            "chob-baa-zee",
            "chob-baa-zee"
          ],
          [
            "آب‌بازی",
            "aab-baa-zee",
            "aab-baa-zee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پیاده‌روی",
            "pi-yaa-da-ro-wee",
            "pi-yaa-da-ro-wee"
          ],
          [
            "می‌آموختند.",
            "may-aa-mokh-tand",
            "may-aa-mokh-tand",
            "aa-mokh-tan"
          ]
        ]
      },
      {
        "say": "kaa-ka-haa raf-taa-ri makh-soos wa khi-raa-maan daash-tand wa li-baa-si paak bar tan may-kar-dand wa paa-ban-di nang wa naam boo-dand,",
        "mean": "Kakas had a special, swaggering walk, wore clean clothes, and were bound by honor;",
        "words": [
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "رفتار",
            "raf-taa-ri",
            "raf-taar"
          ],
          [
            "مخصوص",
            "makh-soos",
            "makh-soos"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خرامان",
            "khi-raa-maan",
            "khi-raa-maan"
          ],
          [
            "داشتند",
            "daash-tand",
            "daash-tand",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "لباس",
            "li-baa-si",
            "li-baas"
          ],
          [
            "پاک",
            "paak",
            "paak"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar tan may-kar-dand"
          ],
          [
            "تن",
            "tan",
            "tan",
            "bar tan may-kar-dand"
          ],
          [
            "می‌کردند",
            "may-kar-dand",
            "may-kar-dand",
            "bar tan may-kar-dand",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پابند",
            "paa-ban-di",
            "paa-band"
          ],
          [
            "ننگ",
            "nang",
            "nang",
            "nang wa naam"
          ],
          [
            "و",
            "wa",
            "wa",
            "nang wa naam"
          ],
          [
            "نام",
            "naam",
            "naam",
            "nang wa naam"
          ],
          [
            "بودند،",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "han-gaa-mi mush-ki-laat wa za-ha-maat saa-bir wa dar hif-zi as-raar, jaa-hid boo-dand.",
        "mean": "in times of trouble and hardship they were patient, and they worked hard at keeping secrets.",
        "words": [
          [
            "هنگام",
            "han-gaa-mi",
            "han-gaam"
          ],
          [
            "مشکلات",
            "mush-ki-laat",
            "mush-ki-laat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زحمات",
            "za-ha-maat",
            "za-ha-maat"
          ],
          [
            "صابر",
            "saa-bir",
            "saa-bir"
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
            "حفظ",
            "hif-zi",
            "hifz"
          ],
          [
            "اسرار،",
            "as-raar",
            "as-raar"
          ],
          [
            "جاهد",
            "jaa-hid",
            "jaa-hid"
          ],
          [
            "بودند.",
            "boo-dand",
            "boo-dand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar a-waa-khi-ri qar-ni beest kaa-ka-gee dar kaa-bul mub-ta-zal shud wa ka-saa-nay ism wa ras-mi kaa-ka-gee raa dar paysh gi-rif-tand ki as-lan a-laa-yim wa khoy wa see-ra-ti kaa-ka-haa raa na-daash-tand.",
        "mean": "At the end of the twentieth century being a kaka was cheapened in Kabul, and people who had none of the signs, nature or conduct of real kakas took up their name and ways.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اواخر",
            "a-waa-khi-ri",
            "a-waa-khir"
          ],
          [
            "قرن",
            "qar-ni",
            "qarn"
          ],
          [
            "بیست",
            "beest",
            "beest"
          ],
          [
            "کاکه‌گی",
            "kaa-ka-gee",
            "kaa-ka-gee"
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
            "مبتذل",
            "mub-ta-zal",
            "mub-ta-zal",
            "mub-ta-zal shud",
            "mub-ta-zal shu-dan"
          ],
          [
            "شد",
            "shud",
            "shud",
            "mub-ta-zal shud",
            "shu-dan",
            "mub-ta-zal shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کسانی",
            "ka-saa-nay",
            "ka-saa-nay"
          ],
          [
            "اسم",
            "ism",
            "ism",
            "ism wa ras-mi"
          ],
          [
            "و",
            "wa",
            "wa",
            "ism wa ras-mi"
          ],
          [
            "رسم",
            "ras-mi",
            "rasm",
            "ism wa ras-mi"
          ],
          [
            "کاکه‌گی",
            "kaa-ka-gee",
            "kaa-ka-gee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar paysh gi-rif-tand",
            "dar paysh gi-rif-tan"
          ],
          [
            "پیش",
            "paysh",
            "paysh",
            "dar paysh gi-rif-tand",
            "dar paysh gi-rif-tan"
          ],
          [
            "گرفتند",
            "gi-rif-tand",
            "gi-rif-tand",
            "dar paysh gi-rif-tand",
            "gi-rif-tan",
            "dar paysh gi-rif-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "اصلاً",
            "as-lan",
            "as-lan"
          ],
          [
            "علایم",
            "a-laa-yim",
            "a-laa-yim"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خوی",
            "khoy",
            "khoy"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سیرت",
            "see-ra-ti",
            "see-rat"
          ],
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نداشتند.",
            "na-daash-tand",
            "na-daash-tand",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "kaa-ka-haa dar kish-war-haa-yi a-ra-bee “fa-taa” dar tur-ki-ya “aa-khee” dar maa-waa-ra un-nahr “ghaa-zee” wa dar ee-raan “daash, mash-dee” naa-mee-da may-shu-dand.",
        "mean": "In the Arab countries kakas were called “fata”, in Turkey “akhi”, in Transoxiana “ghazi”, and in Iran “dash” or “mashdi”.",
        "words": [
          [
            "کاکه‌ها",
            "kaa-ka-haa",
            "kaa-ka-haa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "کشورهای",
            "kish-war-haa-yi",
            "kish-war-haa"
          ],
          [
            "عربی",
            "a-ra-bee",
            "a-ra-bee"
          ],
          [
            "«فتی»",
            "fa-taa",
            "fa-taa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ترکیه",
            "tur-ki-ya",
            "tur-ki-ya"
          ],
          [
            "«آخی»",
            "aa-khee",
            "aa-khee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ماوراء",
            "maa-waa-ra",
            "maa-waa-ra",
            "maa-waa-ra un-nahr"
          ],
          [
            "النهر",
            "un-nahr",
            "un-nahr",
            "maa-waa-ra un-nahr"
          ],
          [
            "«غازی»",
            "ghaa-zee",
            "ghaa-zee"
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
            "ایران",
            "ee-raan",
            "ee-raan"
          ],
          [
            "«داش،",
            "daash",
            "daash"
          ],
          [
            "مشدی»",
            "mash-dee",
            "mash-dee"
          ],
          [
            "نامیده",
            "naa-mee-da",
            "naa-mee-da",
            "naa-mee-da may-shu-dand",
            "naa-mee-dan",
            "naa-mee-da shu-dan"
          ],
          [
            "می‌شدند.",
            "may-shu-dand",
            "may-shu-dand",
            "naa-mee-da may-shu-dand",
            "shu-dan",
            "naa-mee-da shu-dan"
          ]
        ]
      }
    ]
  ]
});
