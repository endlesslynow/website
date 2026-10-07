/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 8, book pages 46-47, PDF pages 53-54 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «درطرف» is written «در طرف»; «اگرسی‌ونه» is written «اگر سی‌ونه»; «آنانیکه» is written «آنانی که»; garbled letters are typed from the page as «گردد؛ خداوند در قرآن کریم گفته است: فَلاَ تَقُل لَّهُمَآ أُفٍّ وَلاَ تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا کَرِیمًا [الاسراء: ۲۳].».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-08',
  group: 'Dari · grade 9',
  label: 'Lesson 8',
  name: "a-waa-tif wa ih-saa-saat",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_08.jpg',
    alt: "An abstract painting of tangled colored lines, with faces half hidden among them."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_08.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "a-waa-tif":                                                                                { fa: "عواطف", mean: "emotions" },
    "wa":                                                                                       { fa: "و", mean: "and" },
    "ih-saa-saat":                                                                              { fa: "احساسات", mean: "feelings" },
    "jam":                                                                                      { fa: "جمع", mean: "gathered" },
    "aa-ti-fa":                                                                                 { fa: "عاطفه", mean: "emotion" },
    "ast":                                                                                      { fa: "است", mean: "is" },
    "ba":                                                                                       { fa: "به", mean: "to" },
    "ba ma-naa-yi":                                                                             { fa: "به معنای", mean: "meaning" },
    "ma-naa":                                                                                   { fa: "معنا", mean: "meaning" },
    "gu-raa-yish":                                                                              { fa: "گرایش", mean: "inclination, leaning" },
    "in-i-taa-fay":                                                                             { fa: "انعطافی", mean: "an attachment, a bending (in-i-taaf + -ay)" },
    "ki":                                                                                       { fa: "که", mean: "that, which, who" },
    "bayn":                                                                                     { fa: "بین", mean: "between" },
    "fard":                                                                                     { fa: "فرد", mean: "person, individual" },
    "maw-jood":                                                                                 { fa: "موجود", mean: "being, creature" },
    "maw-rid":                                                                                  { fa: "مورد", mean: "object, case" },
    "maw-ri-di ta-waj-ju-hi way":                                                               { fa: "مورد توجه وی", mean: "cared about by him - literally the object of his attention" },
    "ta-waj-juh":                                                                               { fa: "توجه", mean: "attention" },
    "way":                                                                                      { fa: "وی", mean: "he, she" },
    "bar-qa-raar":                                                                              { fa: "برقرار", mean: "set up, established" },
    "bar-qa-raar may-gar-dad":                                                                  { fa: "برقرار می‌گردد", mean: "forms, is set up" },
    "bar-qa-raar gar-dee-dan":                                                                  { fa: "برقرار گردیدن", mean: "to be set up" },
    "may-gar-dad":                                                                              { fa: "می‌گردد", mean: "becomes, turns" },
    "gar-dee-dan":                                                                              { fa: "گردیدن", mean: "to become, to turn" },
    "az":                                                                                       { fa: "از", mean: "from, of" },
    "aan":                                                                                      { fa: "آن", mean: "that" },
    "ih-saas":                                                                                  { fa: "احساس", mean: "feeling" },
    "neez":                                                                                     { fa: "نیز", mean: "also, too" },
    "ta-beer":                                                                                  { fa: "تعبیر", mean: "expression, calling" },
    "ta-beer may-sha-wad":                                                                      { fa: "تعبیر می‌شود", mean: "is called" },
    "ta-beer shu-dan":                                                                          { fa: "تعبیر شدن", mean: "to be expressed, to be called" },
    "may-sha-wad":                                                                              { fa: "می‌شود", mean: "becomes" },
    "shu-dan":                                                                                  { fa: "شدن", mean: "to become" },
    "aa-mil":                                                                                   { fa: "عامل", mean: "cause, factor" },
    "chu-neen":                                                                                 { fa: "چنین", mean: "so, like this" },
    "gu-raa-yi-shay":                                                                           { fa: "گرایشی", mean: "an inclination (gu-raa-yish + -ay)" },
    "az yak so":                                                                                { fa: "از یک سو", mean: "on one hand" },
    "yak":                                                                                      { fa: "یک", mean: "one, a" },
    "so":                                                                                       { fa: "سو", mean: "side, direction" },
    "is-ti-daad-haa":                                                                           { fa: "استعدادها", mean: "talents, gifts" },
    "ra-waa-nee":                                                                               { fa: "روانی", mean: "mental" },
    "haa-lat":                                                                                  { fa: "حالت", mean: "state" },
    "in-fi-aa-lee":                                                                             { fa: "انفعالی", mean: "sensitive, responding" },
    "az so-yi dee-gar":                                                                         { fa: "از سوی دیگر", mean: "on the other hand" },
    "dee-gar":                                                                                  { fa: "دیگر", mean: "other; more; anymore" },
    "sha-raa-yit":                                                                              { fa: "شرایط", mean: "conditions" },
    "khu-soo-si-yaat":                                                                          { fa: "خصوصیات", mean: "qualities" },
    "jaa-zi-ba-yay":                                                                            { fa: "جاذبه‌یی", mean: "an attraction" },
    "dar":                                                                                      { fa: "در", mean: "in" },
    "ta-raf":                                                                                   { fa: "طرف", mean: "side; the other person" },
    "mu-qaa-bil":                                                                               { fa: "مقابل", mean: "front; against" },
    "wu-jood":                                                                                  { fa: "وجود", mean: "existence" },
    "wu-jood daa-rad":                                                                          { fa: "وجود دارد", mean: "exists" },
    "wu-jood daash-tan":                                                                        { fa: "وجود داشتن", mean: "to exist, to be there" },
    "daa-rad":                                                                                  { fa: "دارد", mean: "has" },
    "daash-tan":                                                                                { fa: "داشتن", mean: "to have" },
    "ha-yaat":                                                                                  { fa: "حیات", mean: "life" },
    "ba-shar":                                                                                  { fa: "بشر", mean: "humankind" },
    "qabl":                                                                                     { fa: "قبل", mean: "before" },
    "aql":                                                                                      { fa: "عقل", mean: "reason, good sense" },
    "id-raak":                                                                                  { fa: "ادراک", mean: "understanding" },
    "zaa-hir":                                                                                  { fa: "ظاهر", mean: "visible, appearing" },
    "zaa-hir may-sha-wad":                                                                      { fa: "ظاهر می‌شود", mean: "appears" },
    "zaa-hir shu-dan":                                                                          { fa: "ظاهر شدن", mean: "to appear" },
    "nu-khus-teen":                                                                             { fa: "نخستین", mean: "first" },
    "roz-haa":                                                                                  { fa: "روزها", mean: "days" },
    "zin-da-gee":                                                                               { fa: "زنده‌گی", mean: "life" },
    "baaz":                                                                                     { fa: "باز", mean: "open" },
    "baaz may-gar-dad":                                                                         { fa: "باز می‌گردد", mean: "goes back" },
    "baaz gar-dee-dan":                                                                         { fa: "باز گردیدن", mean: "to go back, to return" },
    "az een-roo":                                                                               { fa: "از این‌رو", mean: "therefore, for this reason" },
    "een-roo":                                                                                  { fa: "این‌رو", mean: "this reason (az een-roo, so)" },
    "ta-seer":                                                                                  { fa: "تأثیر", mean: "effect, influence" },
    "a-mal":                                                                                    { fa: "عمل", mean: "action, deed" },
    "saa-yir":                                                                                  { fa: "سایر", mean: "other" },
    "a-waa-mil":                                                                                { fa: "عوامل", mean: "causes, factors" },
    "an-gay-za-haa":                                                                            { fa: "انگیزه‌ها", mean: "motives" },
    "nay-roo-mand-tar":                                                                         { fa: "نیرومندتر", mean: "stronger" },
    "baa-yad":                                                                                  { fa: "باید", mean: "must, should" },
    "ham-waa-ra":                                                                               { fa: "همواره", mean: "always" },
    "taht":                                                                                     { fa: "تحت", mean: "under" },
    "tah-ti kun-trol":                                                                          { fa: "تحت کنترول", mean: "under control" },
    "kun-trol":                                                                                 { fa: "کنترول", mean: "control" },
    "pa-ra-wa-rish":                                                                            { fa: "پرورش", mean: "raising, developing" },
    "way-zha":                                                                                  { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "qa-raar":                                                                                  { fa: "قرار", mean: "place, rest" },
    "qa-raar gee-rad":                                                                          { fa: "قرار گیرد", mean: "be placed" },
    "qa-raar gi-rif-tan":                                                                       { fa: "قرار گرفتن", mean: "to be placed; to come to be (in a state)" },
    "gee-rad":                                                                                  { fa: "گیرد", mean: "take; (with qa-raar) be placed" },
    "gi-rif-tan":                                                                               { fa: "گرفتن", mean: "to take" },
    "shaa-gir-daan":                                                                            { fa: "شاگردان", mean: "students" },
    "a-zeez":                                                                                   { fa: "عزیز", mean: "Aziz; dear" },
    "ha-ma":                                                                                    { fa: "همه", mean: "all, every" },
    "maa":                                                                                      { fa: "ما", mean: "we" },
    "in-saan-haa":                                                                              { fa: "انسان‌ها", mean: "people, human beings" },
    "in-saan":                                                                                  { fa: "انسان", mean: "a person, a human being" },
    "shaa-dee-haa":                                                                             { fa: "شادی‌ها", mean: "joys" },
    "gham-haa":                                                                                 { fa: "غم‌ها", mean: "sorrows" },
    "tars-haa":                                                                                 { fa: "ترس‌ها", mean: "fears" },
    "ni-ga-raa-nee-haa":                                                                        { fa: "نگرانی‌ها", mean: "worries" },
    "aar-zoo-haa-yay":                                                                          { fa: "آرزوهایی", mean: "wishes" },
    "daa-raym":                                                                                 { fa: "داریم", mean: "we have" },
    "may-go-yand":                                                                              { fa: "می‌گویند", mean: "they say; they call" },
    "guf-tan":                                                                                  { fa: "گفتن", mean: "to say, to tell" },
    "waq-tay":                                                                                  { fa: "وقتی", mean: "when" },
    "maa-da-ray":                                                                               { fa: "مادری", mean: "a mother" },
    "soo-rat":                                                                                  { fa: "صورت", mean: "face, outward form" },
    "far-zand":                                                                                 { fa: "فرزند", mean: "child, son" },
    "khud":                                                                                     { fa: "خود", mean: "own; self" },
    "lab-khand":                                                                                { fa: "لبخند", mean: "smile" },
    "lab-khand may-za-nad":                                                                     { fa: "لبخند می‌زند", mean: "smiles" },
    "lab-khand za-dan":                                                                         { fa: "لبخند زدن", mean: "to smile" },
    "may-za-nad":                                                                               { fa: "می‌زند", mean: "hits" },
    "za-dan":                                                                                   { fa: "زدن", mean: "to hit" },
    "raa":                                                                                      { fa: "را", mean: "marks the object of the verb" },
    "nis-bat":                                                                                  { fa: "نسبت", mean: "relation (nis-bat ba, toward)" },
    "nis-bat ba":                                                                               { fa: "نسبت به", mean: "toward" },
    "oo":                                                                                       { fa: "او", mean: "he, she; his, her" },
    "ni-shaan":                                                                                 { fa: "نشان", mean: "sign, show" },
    "ni-shaan may-di-had":                                                                      { fa: "نشان می‌دهد", mean: "shows" },
    "ni-shaan daa-dan":                                                                         { fa: "نشان دادن", mean: "to show" },
    "may-di-had":                                                                               { fa: "می‌دهد", mean: "gives" },
    "daa-dan":                                                                                  { fa: "دادن", mean: "to give" },
    "shu-maa":                                                                                  { fa: "شما", mean: "you (more than one, or polite)" },
    "naa-ma-yay":                                                                               { fa: "نامه‌یی", mean: "a letter" },
    "dos-taan":                                                                                 { fa: "دوستان", mean: "friends" },
    "may-na-wee-seed":                                                                          { fa: "می‌نویسید", mean: "you write" },
    "na-wish-tan":                                                                              { fa: "نوشتن", mean: "to write" },
    "ka-say":                                                                                   { fa: "کسی", mean: "someone" },
    "ta-shak-kur":                                                                              { fa: "تشکر", mean: "thanks" },
    "ta-shak-kur may-ku-need":                                                                  { fa: "تشکر می‌کنید", mean: "you thank" },
    "ta-shak-kur kar-dan":                                                                      { fa: "تشکر کردن", mean: "to thank" },
    "may-ku-need":                                                                              { fa: "می‌کنید", mean: "you do" },
    "kar-dan":                                                                                  { fa: "کردن", mean: "to do, to make" },
    "ni-shaan daa-da eed":                                                                      { fa: "نشان داده اید", mean: "you have shown" },
    "daa-da":                                                                                   { fa: "داده", mean: "given" },
    "eed":                                                                                      { fa: "اید", mean: "you are; after a word like daa-da, you have" },
    "mu-waf-faq":                                                                               { fa: "موفق", mean: "successful" },
    "du-rust":                                                                                  { fa: "درست", mean: "right, correct" },
    "ba kaar bi-ba-rad":                                                                        { fa: "به کار ببرد", mean: "use" },
    "ba kaar bur-dan":                                                                          { fa: "به کار بردن", mean: "to use" },
    "kaar":                                                                                     { fa: "کار", mean: "work, a job" },
    "bi-ba-rad":                                                                                { fa: "ببرد", mean: "carry; (with ba kaar) use" },
    "bur-dan":                                                                                  { fa: "بردن", mean: "to take away, to carry" },
    "nuh":                                                                                      { fa: "نه", mean: "nine" },
    "nuh een ki":                                                                               { fa: "نه این که", mean: "rather than" },
    "een":                                                                                      { fa: "این", mean: "this" },
    "sar-kob":                                                                                  { fa: "سرکوب", mean: "suppression" },
    "sar-kob ku-nad":                                                                           { fa: "سرکوب کند", mean: "suppress" },
    "sar-kob kar-dan":                                                                          { fa: "سرکوب کردن", mean: "to suppress" },
    "ku-nad":                                                                                   { fa: "کند", mean: "does" },
    "tawr":                                                                                     { fa: "طور", mean: "way, manner (tawr-i ma-sal, for example)" },
    "tawr mi-saal":                                                                             { fa: "طور مثال", mean: "for example" },
    "mi-saal":                                                                                  { fa: "مثال", mean: "example" },
    "a-gar":                                                                                    { fa: "اگر", mean: "if" },
    "dee-ga-raan":                                                                              { fa: "دیگران", mean: "others" },
    "a-zi-yat":                                                                                 { fa: "اذیت", mean: "harm, trouble" },
    "a-zi-yat kar-da":                                                                          { fa: "اذیت کرده", mean: "having bothered" },
    "a-zi-yat kar-dan":                                                                         { fa: "اذیت کردن", mean: "to trouble, to harass" },
    "kar-da":                                                                                   { fa: "کرده", mean: "done" },
    "khash-ma-geen":                                                                            { fa: "خشمگین", mean: "angry" },
    "khash-ma-geen na-maa-yad":                                                                 { fa: "خشمگین نماید", mean: "make angry" },
    "na-maa-yad":                                                                               { fa: "نماید", mean: "make; do" },
    "na-mo-dan":                                                                                { fa: "نمودن", mean: "to do; to show; to seem" },
    "bi-ta-waa-nad":                                                                            { fa: "بتواند", mean: "be able" },
    "ta-waa-nis-tan":                                                                           { fa: "توانستن", mean: "to be able, can" },
    "bar":                                                                                      { fa: "بر", mean: "on, upon" },
    "khashm":                                                                                   { fa: "خشم", mean: "anger" },
    "gha-zab":                                                                                  { fa: "غضب", mean: "rage" },
    "gha-la-ba":                                                                                { fa: "غلبه", mean: "overcoming" },
    "gha-la-ba yaa-bad":                                                                        { fa: "غلبه یابد", mean: "overcome" },
    "gha-la-ba yaaf-tan":                                                                       { fa: "غلبه یافتن", mean: "to overcome" },
    "yaa-bad":                                                                                  { fa: "یابد", mean: "find; (with gha-la-ba) overcome" },
    "yaaf-tan":                                                                                 { fa: "یافتن", mean: "to find" },
    "zee-raa":                                                                                  { fa: "زیرا", mean: "because" },
    "mi-haar":                                                                                  { fa: "مهار", mean: "reins, control" },
    "az das-ti in-saan khaa-rij may-ku-nad":                                                    { fa: "از دست انسان خارج می‌کند", mean: "takes out of a person's hands" },
    "khaa-rij kar-dan":                                                                         { fa: "خارج کردن", mean: "to take out" },
    "dast":                                                                                     { fa: "دست", mean: "hand" },
    "khaa-rij":                                                                                 { fa: "خارج", mean: "outside, out" },
    "may-ku-nad":                                                                               { fa: "می‌کند", mean: "does, makes" },
    "mum-kin":                                                                                  { fa: "ممکن", mean: "possible; perhaps" },
    "dast ba kaa-ray bi-za-nad":                                                                { fa: "دست به کاری بزند", mean: "does something - literally puts a hand to a deed" },
    "dast za-dan":                                                                              { fa: "دست زدن", mean: "to set about" },
    "kaa-ray":                                                                                  { fa: "کاری", mean: "a deed, something" },
    "bi-za-nad":                                                                                { fa: "بزند", mean: "hit; (with dast) set about" },
    "baad-haa#later":                                                                           { fa: "بعدها", say: "baad-haa", mean: "later" },
    "pa-shay-maan":                                                                             { fa: "پشیمان", mean: "sorry, regretful" },
    "pa-shay-maan sha-wad":                                                                     { fa: "پشیمان شود", mean: "regrets" },
    "pa-shay-maan shu-dan":                                                                     { fa: "پشیمان شدن", mean: "to regret" },
    "sha-wad":                                                                                  { fa: "شود", mean: "become" },
    "naa-kho-shee-haa":                                                                         { fa: "ناخوشی‌ها", mean: "unhappy times" },
    "har":                                                                                      { fa: "هر", mean: "every" },
    "du":                                                                                       { fa: "دو", mean: "two" },
    "kun-trol gar-dad":                                                                         { fa: "کنترول گردد", mean: "be controlled" },
    "gar-dad":                                                                                  { fa: "گردد", mean: "become" },
    "gham-geen":                                                                                { fa: "غمگین", mean: "sad" },
    "gham-geen may-sha-waym":                                                                   { fa: "غمگین می‌شویم", mean: "become sad" },
    "may-sha-waym":                                                                             { fa: "می‌شویم", mean: "we become" },
    "yaa":                                                                                      { fa: "یا", mean: "or" },
    "du-chaar":                                                                                 { fa: "دچار", mean: "caught (by), suffering" },
    "du-chaa-ri shi-kast may-sha-waym":                                                         { fa: "دچار شکست می‌شویم", mean: "suffer a defeat" },
    "shi-kast":                                                                                 { fa: "شکست", mean: "broke" },
    "shi-kas-tan":                                                                              { fa: "شکستن", mean: "to break" },
    "na-baa-yad":                                                                               { fa: "نباید", mean: "must not" },
    "naa":                                                                                      { fa: "نا", mean: "not, un- (a prefix)" },
    "naa u-meed sha-waym":                                                                      { fa: "نا امید شویم", mean: "lose hope" },
    "naa u-meed shu-dan":                                                                       { fa: "نا امید شدن", mean: "to lose hope" },
    "u-meed":                                                                                   { fa: "امید", mean: "hope" },
    "sha-waym":                                                                                 { fa: "شویم", mean: "we become" },
    "bal-ki":                                                                                   { fa: "بلکه", mean: "but rather" },
    "raah":                                                                                     { fa: "راه", mean: "way, road" },
    "u-boor":                                                                                   { fa: "عبور", mean: "crossing, passing" },
    "ra-see-dan":                                                                               { fa: "رسیدن", mean: "to arrive, to reach" },
    "mu-waf-fa-qi-yat":                                                                         { fa: "موفقیت", mean: "success" },
    "pay-daa":                                                                                  { fa: "پیدا", mean: "found, visible" },
    "pay-daa ku-naym":                                                                          { fa: "پیدا کنیم", mean: "find" },
    "pay-daa kar-dan":                                                                          { fa: "پیدا کردن", mean: "to find" },
    "ku-naym":                                                                                  { fa: "کنیم", mean: "we do" },
    "maw-laa-naa":                                                                              { fa: "مولانا", mean: "Mawlana, our master, a title of Rumi" },
    "maw-laa-naa-yi ja-laal-ud-dee-ni mu-ham-ma-di bal-khee":                                   { fa: "مولانا جلال‌الدین محمد بلخی", mean: "Mawlana Jalaluddin Muhammad Balkhi, the poet known in the West as Rumi" },
    "ja-laal-ud-deen":                                                                          { fa: "جلال‌الدین", mean: "Jalaluddin" },
    "mu-ham-mad":                                                                               { fa: "محمد", mean: "Muhammad" },
    "bal-khee":                                                                                 { fa: "بلخی", mean: "of Balkh" },
    "may-go-yad":                                                                               { fa: "می‌گوید", mean: "says" },
    "naw-mee-dee":                                                                              { fa: "نومیدی", mean: "hopelessness" },
    "ma-raw":                                                                                   { fa: "مرو", mean: "do not go" },
    "raf-tan":                                                                                  { fa: "رفتن", mean: "to go" },
    "u-meed-haast":                                                                             { fa: "امیدهاست", mean: "there are hopes (u-meed-haa + ast)" },
    "taa-ree-kee":                                                                              { fa: "تاریکی", mean: "darkness" },
    "khur-sheed-haast":                                                                         { fa: "خورشیدهاست", mean: "there are suns (khur-sheed-haa + ast)" },
    "bu-zur-gee":                                                                               { fa: "بزرگی", mean: "greatness" },
    "chi":                                                                                      { fa: "چه", mean: "what; how" },
    "zay-baa":                                                                                  { fa: "زیبا", mean: "beautiful" },
    "guf-ta":                                                                                   { fa: "گفته", mean: "said" },
    "chi-hil":                                                                                  { fa: "چهل", mean: "forty" },
    "ka-leed":                                                                                  { fa: "کلید", mean: "key" },
    "daa-reed":                                                                                 { fa: "دارید", mean: "you have" },
    "see-yu-nuh":                                                                               { fa: "سی‌ونه", mean: "thirty-nine" },
    "qufl-taan":                                                                                { fa: "قفل‌تان", mean: "your lock" },
    "baaz na-kard":                                                                             { fa: "باز نکرد", mean: "did not open" },
    "baaz kar-dan":                                                                             { fa: "باز کردن", mean: "to open" },
    "na-kard":                                                                                  { fa: "نکرد", mean: "did not do" },
    "naa u-meed ma-sha-weed":                                                                   { fa: "نا امید مشوید", mean: "do not lose hope" },
    "ma-sha-weed":                                                                              { fa: "مشوید", mean: "do not become (said to more than one)" },
    "baa":                                                                                      { fa: "با", mean: "with" },
    "aa-khi-reen":                                                                              { fa: "آخرین", mean: "last" },
    "dar#door":                                                                                 { fa: "در", say: "dar", mean: "door" },
    "da-ri taan":                                                                               { fa: "درِ تان", mean: "your door" },
    "taan":                                                                                     { fa: "تان", mean: "your (said to more than one)" },
    "baaz sha-wad":                                                                             { fa: "باز شود", mean: "opens" },
    "baaz shu-dan":                                                                             { fa: "باز شدن", mean: "to open" },
    "dar har soo-rat":                                                                          { fa: "در هر صورت", mean: "in any case" },
    "i'-ti-daal":                                                                               { fa: "اعتدال", mean: "moderation" },
    "ri-aa-yat":                                                                                { fa: "رعایت", mean: "observing, keeping to" },
    "ri-aa-yat ku-nad":                                                                         { fa: "رعایت کند", mean: "keep to" },
    "ri-aa-yat kar-dan":                                                                        { fa: "رعایت کردن", mean: "to observe, to keep to" },
    "hat-taa":                                                                                  { fa: "حتا", mean: "even" },
    "mu-hab-bat":                                                                               { fa: "محبت", mean: "love, affection" },
    "dos-tee":                                                                                  { fa: "دوستی", mean: "friendship" },
    "if-raat":                                                                                  { fa: "افراط", mean: "going too far, excess" },
    "na-pay-maa-yad":                                                                           { fa: "نپیماید", mean: "should not travel" },
    "pay-mo-dan":                                                                               { fa: "پیمودن", mean: "to travel over, to measure" },
    "yaa-nee":                                                                                  { fa: "یعنی", mean: "that is, it means" },
    "aan qadr":                                                                                 { fa: "آن قدر", mean: "so much" },
    "qadr":                                                                                     { fa: "قدر", mean: "amount" },
    "if-raat ku-naym":                                                                          { fa: "افراط کنیم", mean: "go too far" },
    "if-raat kar-dan":                                                                          { fa: "افراط کردن", mean: "to go too far" },
    "az dast daa-dan":                                                                          { fa: "از دست دادن", mean: "to lose" },
    "du-chaa-ri mush-kil sha-waym":                                                             { fa: "دچار مشکل شویم", mean: "get into trouble" },
    "mush-kil":                                                                                 { fa: "مشکل", mean: "hard, difficult" },
    "mu-heet":                                                                                  { fa: "محیط", mean: "surroundings, setting" },
    "khaa-na-waa-da":                                                                           { fa: "خانواده", mean: "family" },
    "mi-haar ku-naym":                                                                          { fa: "مهار کنیم", mean: "rein in" },
    "mi-haar kar-dan":                                                                          { fa: "مهار کردن", mean: "to rein in, to control" },
    "ma-sa-lan":                                                                                { fa: "مثلاً", mean: "for example" },
    "sa-daa":                                                                                   { fa: "صدا", mean: "sound, voice" },
    "sa-daa-yi maan":                                                                           { fa: "صدای مان", mean: "our voice" },
    "maan":                                                                                     { fa: "مان", mean: "our" },
    "dar mu-qaa-bi-li":                                                                         { fa: "در مقابل", mean: "in front of" },
    "pa-dar":                                                                                   { fa: "پدر", mean: "father" },
    "maa-dar":                                                                                  { fa: "مادر", mean: "mother" },
    "bu-land":                                                                                  { fa: "بلند", mean: "high, tall, loud" },
    "bu-land na-ku-naym":                                                                       { fa: "بلند نکنیم", mean: "not raise" },
    "na-ku-naym":                                                                               { fa: "نکنیم", mean: "let us not do" },
    "ka-li-ma-yay":                                                                             { fa: "کلمه‌یی", mean: "a word" },
    "bar zu-baan na-yaa-wa-raym":                                                               { fa: "بر زبان نیاوریم", mean: "not say" },
    "bar zu-baan aa-war-dan":                                                                   { fa: "بر زبان آوردن", mean: "to say, to utter" },
    "zu-baan":                                                                                  { fa: "زبان", mean: "language; tongue" },
    "na-yaa-wa-raym":                                                                           { fa: "نیاوریم", mean: "let us not bring" },
    "aa-war-dan":                                                                               { fa: "آوردن", mean: "to bring" },
    "mo-jib":                                                                                   { fa: "موجب", mean: "cause" },
    "mo-ji-bi naa-raa-ha-tee-yi aan-haa gar-dad":                                               { fa: "موجب ناراحتی آن‌ها گردد", mean: "upsets them - literally becomes the cause of their unhappiness" },
    "naa-raa-ha-tee":                                                                           { fa: "ناراحتی", mean: "unhappiness, being upset" },
    "aan-haa":                                                                                  { fa: "آن‌ها", mean: "they, them" },
    "khu-daa-wand":                                                                             { fa: "خداوند", mean: "God, the Lord" },
    "qur-aan":                                                                                  { fa: "قرآن", mean: "the Quran" },
    "ka-reem":                                                                                  { fa: "کریم", mean: "noble, holy (qur-aa-ni ka-reem, the Holy Quran)" },
    "fa-laa":                                                                                   { fa: "فَلاَ", mean: "Arabic: so … not" },
    "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man": { fa: "فَلاَ تَقُل لَّهُمَآ أُفٍّ وَلاَ تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا کَرِیمًا", mean: "Arabic, from the Quran: so do not say “uff” to them, nor scold them, but speak to them with kind words" },
    "ta-qul":                                                                                   { fa: "تَقُل", mean: "Arabic: say" },
    "la-hu-maa":                                                                                { fa: "لَّهُمَا", mean: "Arabic: to them (two people)" },
    "uf-fin":                                                                                   { fa: "أُفٍّ", mean: "Arabic: “uff”, a sound of annoyance" },
    "wa-laa":                                                                                   { fa: "وَلاَ", mean: "Arabic: and do not" },
    "tan-har-hu-maa":                                                                           { fa: "تَنْهَرْهُمَا", mean: "Arabic: scold them (two people)" },
    "wa-qul":                                                                                   { fa: "وَقُل", mean: "Arabic: and say" },
    "qaw-lan":                                                                                  { fa: "قَوْلًا", mean: "Arabic: words, speech" },
    "ka-ree-man":                                                                               { fa: "کَرِیمًا", mean: "Arabic: kind, noble" },
    "al-is-raa":                                                                                { fa: "الاسراء", mean: "al-Isra, the Night Journey, sura 17 of the Quran" },
    "bees-tu sih":                                                                              { fa: "۲۳", mean: "23" },
    "tar-ju-ma":                                                                                { fa: "ترجمه", mean: "translation" },
    "pas":                                                                                      { fa: "پس", mean: "then, so" },
    "ma-go":                                                                                    { fa: "مگو", mean: "do not say" },
    "ee-shaan":                                                                                 { fa: "ایشان", mean: "they" },
    "uff":                                                                                      { fa: "افُ", mean: "uff, a sound of annoyance" },
    "baang":                                                                                    { fa: "بانگ", mean: "shout" },
    "baang ma-zan":                                                                             { fa: "بانگ مزن", mean: "do not shout" },
    "baang za-dan":                                                                             { fa: "بانگ زدن", mean: "to shout" },
    "ma-zan":                                                                                   { fa: "مزن", mean: "do not hit; (with baang) do not shout" },
    "bi-go":                                                                                    { fa: "بگو", mean: "say, tell" },
    "su-khan":                                                                                  { fa: "سخن", mean: "speech, words" },
    "nay-ko":                                                                                   { fa: "نیکو", mean: "good, fine" },
    "maa-da-ru-maan":                                                                           { fa: "مادرمان", mean: "our mother" },
    "khoo-bee":                                                                                 { fa: "خوبی", mean: "goodness" },
    "ra'-fat":                                                                                  { fa: "رأفت", mean: "tenderness" },
    "rah-mat":                                                                                  { fa: "رحمت", mean: "mercy" },
    "mih-ra-baa-nee":                                                                           { fa: "مهربانی", mean: "kindness" },
    "paysh":                                                                                    { fa: "پیش", mean: "front; forward" },
    "paysh aa-yaym":                                                                            { fa: "پیش آییم", mean: "treat" },
    "paysh aa-ma-dan":                                                                          { fa: "پیش آمدن", mean: "to treat, to behave toward" },
    "aa-yaym":                                                                                  { fa: "آییم", mean: "let us come; (with paysh) let us treat" },
    "aa-ma-dan":                                                                                { fa: "آمدن", mean: "to come" },
    "wa bil-waa-li-day-ni ih-saa-naa":                                                          { fa: "و بالوالدین احسانا", mean: "Arabic, from the Quran: and be good to your parents" },
    "bil-waa-li-day-ni":                                                                        { fa: "بالوالدین", mean: "Arabic: to parents" },
    "ih-saa-naa":                                                                               { fa: "احسانا", mean: "Arabic: kindness, goodness" },
    "nay-kay":                                                                                  { fa: "نیکی", mean: "good; the -ay points ahead to «که», which" },
    "nay-kay ku-naym":                                                                          { fa: "نیکی کنیم", mean: "do good" },
    "nay-kay kar-dan":                                                                          { fa: "نیکی کردن", mean: "to do good" },
    "kho-shaa":                                                                                 { fa: "خوشا", mean: "happy, how good" },
    "kho-shaa ba haa-li":                                                                       { fa: "خوشا به حال", mean: "happy are" },
    "haal":                                                                                     { fa: "حال", mean: "state, condition" },
    "ka-saa-nay":                                                                               { fa: "کسانی", mean: "people (who)" },
    "ha-may-sha":                                                                               { fa: "همیشه", mean: "always" },
    "ih-saa-saat-shaan":                                                                        { fa: "احساسات‌شان", mean: "their feelings" },
    "kun-trol may-ku-nand":                                                                     { fa: "کنترول می‌کنند", mean: "control" },
    "kun-trol kar-dan":                                                                         { fa: "کنترول کردن", mean: "to control" },
    "may-ku-nand":                                                                              { fa: "می‌کنند", mean: "they do" },
    "and":                                                                                      { fa: "اند", mean: "are; after a word like shu-da, have" },
    "aa-naa-nay":                                                                               { fa: "آنانی", mean: "those (who)" },
    "maa-da-rash-shaan":                                                                        { fa: "مادرشان", mean: "their mother" },
    "nay-kay may-ku-nand":                                                                      { fa: "نیکی می‌کنند", mean: "do good" },
    "ham":                                                                                      { fa: "هم", mean: "also, too" },
    "bar zu-baan na-may-aa-wa-rand":                                                            { fa: "بر زبان نمی‌آورند", mean: "do not say" },
    "na-may-aa-wa-rand":                                                                        { fa: "نمی‌آورند", mean: "do not bring" },
    "waay":                                                                                     { fa: "وای", mean: "woe" },
    "waay bar haa-li":                                                                          { fa: "وای بر حال", mean: "woe to" },
    "kun-trol na-may-ku-nand":                                                                  { fa: "کنترول نمی‌کنند", mean: "do not control" },
    "na-may-ku-nand":                                                                           { fa: "نمی‌کنند", mean: "do not do" },
    "dar ba-raa-ba-ri":                                                                         { fa: "در برابر", mean: "in front of, in the presence of" },
    "ba-raa-bar":                                                                               { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "sakh-tee":                                                                                 { fa: "سختی", mean: "harshness, hardship" },
    "zish-tee":                                                                                 { fa: "زشتی", mean: "ugliness, bad deeds" },
    "paysh may-aa-yand":                                                                        { fa: "پیش می‌آیند", mean: "behave" },
    "may-aa-yand":                                                                              { fa: "می‌آیند", mean: "come; (with paysh) behave" },
    "dar na-tee-ja":                                                                            { fa: "در نتیجه", mean: "as a result" },
    "na-tee-ja":                                                                                { fa: "نتیجه", mean: "result" },
    "at-raaf":                                                                                  { fa: "اطراف", mean: "sides, surroundings" },
    "at-raaf wa ak-naaf":                                                                       { fa: "اطراف و اکناف", mean: "all around" },
    "ak-naaf":                                                                                  { fa: "اکناف", mean: "sides, all around" },
    "talkh":                                                                                    { fa: "تلخ", mean: "bitter" },
    "talkh wa naa-gu-waar":                                                                     { fa: "تلخ و ناگوار", mean: "bitter and unpleasant" },
    "naa-gu-waar":                                                                              { fa: "ناگوار", mean: "unpleasant" },
    "may-saa-zand":                                                                             { fa: "می‌سازند", mean: "make" },
    "saakh-tan":                                                                                { fa: "ساختن", mean: "to make, to build" },
    "aa-ti-fee":                                                                                { fa: "عاطفی", mean: "emotional" },
    "az na-za-ri":                                                                              { fa: "از نظر", mean: "in the view of" },
    "na-zar":                                                                                   { fa: "نظر", mean: "sight, view; opinion" },
    "ra-waan-shi-naa-saan":                                                                     { fa: "روان‌شناسان", mean: "psychologists" },
    "mu-ar-ri-bi-yaan":                                                                         { fa: "مربیان", mean: "educators" },
    "amr":                                                                                      { fa: "امر", mean: "order, command" },
    "mu-him":                                                                                   { fa: "مهم", mean: "important" },
    "ta-laq-qee":                                                                               { fa: "تلقی", mean: "consideration, regarding" },
    "ta-laq-qee shu-da ast":                                                                    { fa: "تلقی شده است", mean: "has been considered" },
    "ta-laq-qee shu-dan":                                                                       { fa: "تلقی شدن", mean: "to be considered" },
    "shu-da":                                                                                   { fa: "شده", mean: "become; been" },
    "ham-chu-naan":                                                                             { fa: "همچنان", mean: "likewise, just so" },
    "ham-chu-naan ki":                                                                          { fa: "همچنان که", mean: "just as" },
    "aa-yaat":                                                                                  { fa: "آیات", mean: "verses (of the Quran)" },
    "a-haa-dees":                                                                               { fa: "احادیث", mean: "the Prophet's sayings" },
    "ri-waa-yaat":                                                                              { fa: "روایات", mean: "reports, traditions" },
    "ma-baa-his":                                                                               { fa: "مباحث", mean: "discussions, topics" },
    "tar-bi-ya-tee":                                                                            { fa: "تربیتی", mean: "of education" },
    "is-laam":                                                                                  { fa: "اسلام", mean: "Islam" },
    "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had":                             { fa: "مورد توجه کامل و دقیق قرار می‌دهد", mean: "gives full and careful attention to" },
    "kaa-mil":                                                                                  { fa: "کامل", mean: "full, complete" },
    "da-qeeq":                                                                                  { fa: "دقیق", mean: "careful, exact" },
    "rah-na-mood-haa":                                                                          { fa: "رهنمودها", mean: "guidance, pieces of advice" },
    "ar-zish-man-day":                                                                          { fa: "ارزشمندی", mean: "valuable (with -ay)" },
    "i-raa-a":                                                                                  { fa: "ارائه", mean: "presenting, offering" },
    "i-raa-a may-ku-nad":                                                                       { fa: "ارائه می‌کند", mean: "offers" },
    "i-raa-a kar-dan":                                                                          { fa: "ارائه کردن", mean: "to offer, to present" },
    "aa-yaa-tay":                                                                               { fa: "آیاتی", mean: "verses (which)" },
    "ma-wad-dat":                                                                               { fa: "مودت", mean: "affection" },
    "a-daa-lat":                                                                                { fa: "عدالت", mean: "justice" },
    "in-i-taaf":                                                                                { fa: "انعطاف", mean: "gentleness, flexibility" },
    "qa-saa-wat":                                                                               { fa: "قساوت", mean: "harshness" },
    "it-mee-naan":                                                                              { fa: "اطمینان", mean: "calm, trust" },
    "iz-ti-raab":                                                                               { fa: "اضطراب", mean: "anxiety" },
    "hub":                                                                                      { fa: "حب", mean: "love" },
    "zay-baa-yee":                                                                              { fa: "زیبایی", mean: "beauty" },
    "maa-nand":                                                                                 { fa: "مانند", mean: "like" },
    "su-khan may-go-yad":                                                                       { fa: "سخن می‌گوید", mean: "speak" },
    "su-khan guf-tan":                                                                          { fa: "سخن گفتن", mean: "to speak" },
    "may-ta-waa-nad":                                                                           { fa: "می‌تواند", mean: "can" },
    "baad#after":                                                                               { fa: "بعد", say: "baad", mean: "after, then" },
    "maf-hoom":                                                                                 { fa: "مفهوم", mean: "sense, meaning" },
    "aam":                                                                                      { fa: "عام", mean: "general" },
    "naa-zir":                                                                                  { fa: "ناظر", mean: "looking at, relating to" },
    "naa-zir baa-shad":                                                                         { fa: "ناظر باشد", mean: "relate (to)" },
    "baa-shad":                                                                                 { fa: "باشد", mean: "be, should be" },
    "bu-dan":                                                                                   { fa: "بودن", mean: "to be" },
    "tar-bi-yat":                                                                               { fa: "تربیت", mean: "training, upbringing" },
    "hi-daa-yat":                                                                               { fa: "هدایت", mean: "guidance" },
    "shi-gu-faa-saa-zee":                                                                       { fa: "شگوفاسازی", mean: "making flower, developing" },
    "bah-ra-gee-ree":                                                                           { fa: "بهره‌گیری", mean: "making use" },
    "ba maw-qa":                                                                                { fa: "به موقع", mean: "at the right time" },
    "maw-qa":                                                                                   { fa: "موقع", mean: "time, moment (ba maw-qa, at the right time)" },
    "dar ji-ha-ti":                                                                             { fa: "در جهت", mean: "in the direction of" },
    "ji-hat":                                                                                   { fa: "جهت", mean: "direction" },
    "mat-loob":                                                                                 { fa: "مطلوب", mean: "desired, good" },
    "khayr":                                                                                    { fa: "خیر", mean: "good, good deeds" },
    "sa-aa-dat":                                                                                { fa: "سعادت", mean: "happiness" },
    "is-laa-mee":                                                                               { fa: "اسلامی", mean: "Islamic" },
    "hu-qooq":                                                                                  { fa: "حقوق", mean: "rights" },
    "zan":                                                                                      { fa: "زن", mean: "woman; wife" },
    "am-saal":                                                                                  { fa: "امثال", mean: "the like" },
    "chi-haar":                                                                                 { fa: "چهار", mean: "four" },
    "chi-haar cho-bi":                                                                          { fa: "چهار چوب", mean: "framework" },
    "chob":                                                                                     { fa: "چوب", mean: "wood, stick" },
    "taw-si-ya":                                                                                { fa: "توصیه", mean: "recommendation" },
    "taw-si-ya may-ku-nad":                                                                     { fa: "توصیه می‌کند", mean: "recommends" },
    "taw-si-ya kar-dan":                                                                        { fa: "توصیه کردن", mean: "to recommend" },
    "gha-ree-za":                                                                               { fa: "غریزه", mean: "instinct" },
    "sa-laah":                                                                                  { fa: "صلاح", mean: "good, well-being" },
    "rushd":                                                                                    { fa: "رشد", mean: "growth" },
    "ka-maal":                                                                                  { fa: "کمال", mean: "perfection" },
    "ba khid-mat may-gee-rad":                                                                  { fa: "به خدمت می‌گیرد", mean: "puts to work" },
    "khid-mat":                                                                                 { fa: "خدمت", mean: "service" },
    "may-gee-rad":                                                                              { fa: "می‌گیرد", mean: "takes" },
    "kun-trol ku-nan-da":                                                                       { fa: "کنترول کننده", mean: "controlling" },
    "ku-nan-da":                                                                                { fa: "کننده", mean: "doing (ha-ra-kat ku-nan-da, moving)" },
    "maa-ni":                                                                                   { fa: "مانع", mean: "obstacle; preventing" },
    "khaa-rij shu-dan":                                                                         { fa: "خارج شدن", mean: "leaving" },
    "ta-reeq":                                                                                  { fa: "طریق", mean: "way, path" }
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
    "say": "a-waa-tif wa ih-saa-saat",
    "mean": "Emotions and feelings",
    "words": [
      [
        "عواطف",
        "a-waa-tif",
        "a-waa-tif"
      ],
      [
        "و",
        "wa",
        "wa"
      ],
      [
        "احساسات",
        "ih-saa-saat",
        "ih-saa-saat"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "a-waa-tif ja-mi aa-ti-fa ast.",
        "mean": "Awatif, emotions, is the plural of atifa, emotion.",
        "words": [
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "جمع",
            "ja-mi",
            "jam"
          ],
          [
            "عاطفه",
            "aa-ti-fa",
            "aa-ti-fa"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "aa-ti-fa ba ma-naa-yi gu-raa-yish wa in-i-taa-fay ast ki bay-ni fard wa maw-joo-di maw-ri-di ta-waj-ju-hi way bar-qa-raar may-gar-dad wa az aan ba ih-saas neez ta-beer may-sha-wad.",
        "mean": "Emotion means an inclination and attachment that forms between a person and a being they care about, and it is also called feeling.",
        "words": [
          [
            "عاطفه",
            "aa-ti-fa",
            "aa-ti-fa"
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
            "گرایش",
            "gu-raa-yish",
            "gu-raa-yish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انعطافی",
            "in-i-taa-fay",
            "in-i-taa-fay"
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
            "بین",
            "bay-ni",
            "bayn"
          ],
          [
            "فرد",
            "fard",
            "fard"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "موجود",
            "maw-joo-di",
            "maw-jood"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di ta-waj-ju-hi way"
          ],
          [
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh",
            "maw-ri-di ta-waj-ju-hi way"
          ],
          [
            "وی",
            "way",
            "way",
            "maw-ri-di ta-waj-ju-hi way"
          ],
          [
            "برقرار",
            "bar-qa-raar",
            "bar-qa-raar",
            "bar-qa-raar may-gar-dad",
            "bar-qa-raar gar-dee-dan"
          ],
          [
            "می‌گردد",
            "may-gar-dad",
            "may-gar-dad",
            "bar-qa-raar may-gar-dad",
            "gar-dee-dan",
            "bar-qa-raar gar-dee-dan"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "احساس",
            "ih-saas",
            "ih-saas"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "تعبیر",
            "ta-beer",
            "ta-beer",
            "ta-beer may-sha-wad",
            "ta-beer shu-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "ta-beer may-sha-wad",
            "shu-dan",
            "ta-beer shu-dan"
          ]
        ]
      },
      {
        "say": "aa-mi-li chu-neen gu-raa-yi-shay az yak so is-ti-daad-haa-yi ra-waa-nee wa haa-la-ti in-fi-aa-lee-yi fard ast wa az so-yi dee-gar, sha-raa-yit wa khu-soo-si-yaat wa jaa-zi-ba-yay ast ki dar ta-ra-fi mu-qaa-bil wu-jood daa-rad.",
        "mean": "The cause of such an inclination is, on one hand, the person's mental gifts and sensitivity, and on the other hand, the qualities and attraction found in the other side.",
        "words": [
          [
            "عامل",
            "aa-mi-li",
            "aa-mil"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "گرایشی",
            "gu-raa-yi-shay",
            "gu-raa-yi-shay"
          ],
          [
            "از",
            "az",
            "az",
            "az yak so"
          ],
          [
            "یک",
            "yak",
            "yak",
            "az yak so"
          ],
          [
            "سو",
            "so",
            "so",
            "az yak so"
          ],
          [
            "استعدادهای",
            "is-ti-daad-haa-yi",
            "is-ti-daad-haa"
          ],
          [
            "روانی",
            "ra-waa-nee",
            "ra-waa-nee"
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
            "انفعالی",
            "in-fi-aa-lee-yi",
            "in-fi-aa-lee"
          ],
          [
            "فرد",
            "fard",
            "fard"
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
            "az",
            "az so-yi dee-gar"
          ],
          [
            "سوی",
            "so-yi",
            "so",
            "az so-yi dee-gar"
          ],
          [
            "دیگر،",
            "dee-gar",
            "dee-gar",
            "az so-yi dee-gar"
          ],
          [
            "شرایط",
            "sha-raa-yit",
            "sha-raa-yit"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خصوصیات",
            "khu-soo-si-yaat",
            "khu-soo-si-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جاذبه‌یی",
            "jaa-zi-ba-yay",
            "jaa-zi-ba-yay"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "طرف",
            "ta-ra-fi",
            "ta-raf"
          ],
          [
            "مقابل",
            "mu-qaa-bil",
            "mu-qaa-bil"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood",
            "wu-jood daa-rad",
            "wu-jood daash-tan"
          ],
          [
            "دارد.",
            "daa-rad",
            "daa-rad",
            "wu-jood daa-rad",
            "daash-tan",
            "wu-jood daash-tan"
          ]
        ]
      },
      {
        "say": "aa-ti-fa wa ih-saas dar ha-yaa-ti ba-shar qabl az aql wa id-raak, zaa-hir may-sha-wad wa ba nu-khus-teen roz-haa-yi zin-da-gee baaz may-gar-dad;",
        "mean": "Emotion and feeling appear in human life before reason and understanding, and go back to the first days of life;",
        "words": [
          [
            "عاطفه",
            "aa-ti-fa",
            "aa-ti-fa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساس",
            "ih-saas",
            "ih-saas"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "قبل",
            "qabl",
            "qabl"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "عقل",
            "aql",
            "aql"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ادراک،",
            "id-raak",
            "id-raak"
          ],
          [
            "ظاهر",
            "zaa-hir",
            "zaa-hir",
            "zaa-hir may-sha-wad",
            "zaa-hir shu-dan"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "zaa-hir may-sha-wad",
            "shu-dan",
            "zaa-hir shu-dan"
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
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "روزهای",
            "roz-haa-yi",
            "roz-haa"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz may-gar-dad",
            "baaz gar-dee-dan"
          ],
          [
            "می‌گردد؛",
            "may-gar-dad",
            "may-gar-dad",
            "baaz may-gar-dad",
            "gar-dee-dan",
            "baaz gar-dee-dan"
          ]
        ]
      },
      {
        "say": "az een-roo ta-see-ri aa-ti-fa dar a-mal neez az saa-yi-ri a-waa-mil wa an-gay-za-haa nay-roo-mand-tar ast wa baa-yad ham-waa-ra tah-ti kun-trol wa pa-ra-wa-ri-shi way-zha qa-raar gee-rad.",
        "mean": "so the effect of emotion on action is stronger than other causes and motives, and it must always be kept under control and given special training.",
        "words": [
          [
            "از",
            "az",
            "az",
            "az een-roo"
          ],
          [
            "این‌رو",
            "een-roo",
            "een-roo",
            "az een-roo"
          ],
          [
            "تأثیر",
            "ta-see-ri",
            "ta-seer"
          ],
          [
            "عاطفه",
            "aa-ti-fa",
            "aa-ti-fa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "عمل",
            "a-mal",
            "a-mal"
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
            "سایر",
            "saa-yi-ri",
            "saa-yir"
          ],
          [
            "عوامل",
            "a-waa-mil",
            "a-waa-mil"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انگیزه‌ها",
            "an-gay-za-haa",
            "an-gay-za-haa"
          ],
          [
            "نیرومندتر",
            "nay-roo-mand-tar",
            "nay-roo-mand-tar"
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
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "همواره",
            "ham-waa-ra",
            "ham-waa-ra"
          ],
          [
            "تحت",
            "tah-ti",
            "taht",
            "tah-ti kun-trol"
          ],
          [
            "کنترول",
            "kun-trol",
            "kun-trol",
            "tah-ti kun-trol"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پرورش",
            "pa-ra-wa-ri-shi",
            "pa-ra-wa-rish"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "qa-raar gee-rad",
            "qa-raar gi-rif-tan"
          ],
          [
            "گیرد.",
            "gee-rad",
            "gee-rad",
            "qa-raar gee-rad",
            "gi-rif-tan",
            "qa-raar gi-rif-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "shaa-gir-daa-ni a-zeez, ha-ma-yi maa in-saan-haa dar zin-da-gee, shaa-dee-haa, gham-haa, tars-haa, ni-ga-raa-nee-haa wa aar-zoo-haa-yay daa-raym ki ba aan a-waa-tif wa ih-saa-saat may-go-yand.",
        "mean": "Dear students, all of us humans have joys, sorrows, fears, worries and wishes in life, and these are called emotions and feelings.",
        "words": [
          [
            "شاگردان",
            "shaa-gir-daa-ni",
            "shaa-gir-daan"
          ],
          [
            "عزیز،",
            "a-zeez",
            "a-zeez"
          ],
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "انسان‌ها",
            "in-saan-haa",
            "in-saan-haa",
            "in-saan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زنده‌گی،",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "شادی‌ها،",
            "shaa-dee-haa",
            "shaa-dee-haa"
          ],
          [
            "غم‌ها،",
            "gham-haa",
            "gham-haa"
          ],
          [
            "ترس‌ها،",
            "tars-haa",
            "tars-haa"
          ],
          [
            "نگرانی‌ها",
            "ni-ga-raa-nee-haa",
            "ni-ga-raa-nee-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آرزوهایی",
            "aar-zoo-haa-yay",
            "aar-zoo-haa-yay"
          ],
          [
            "داریم",
            "daa-raym",
            "daa-raym",
            "daash-tan"
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
            "آن",
            "aan",
            "aan"
          ],
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات",
            "ih-saa-saat",
            "ih-saa-saat"
          ],
          [
            "می‌گویند.",
            "may-go-yand",
            "may-go-yand",
            "guf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "waq-tay maa-da-ray ba soo-ra-ti far-zan-di khud lab-khand may-za-nad, a-waa-tif wa ih-saa-saa-ti khud raa nis-bat ba oo ni-shaan may-di-had.",
        "mean": "When a mother smiles at her child's face, she shows her emotions and feelings toward the child.",
        "words": [
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "مادری",
            "maa-da-ray",
            "maa-da-ray"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat"
          ],
          [
            "فرزند",
            "far-zan-di",
            "far-zand"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "لبخند",
            "lab-khand",
            "lab-khand",
            "lab-khand may-za-nad",
            "lab-khand za-dan"
          ],
          [
            "می‌زند،",
            "may-za-nad",
            "may-za-nad",
            "lab-khand may-za-nad",
            "za-dan",
            "lab-khand za-dan"
          ],
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات",
            "ih-saa-saa-ti",
            "ih-saa-saat"
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
            "نسبت",
            "nis-bat",
            "nis-bat",
            "nis-bat ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "nis-bat ba"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan",
            "ni-shaan may-di-had",
            "ni-shaan daa-dan"
          ],
          [
            "می‌دهد.",
            "may-di-had",
            "may-di-had",
            "ni-shaan may-di-had",
            "daa-dan",
            "ni-shaan daa-dan"
          ]
        ]
      },
      {
        "say": "waq-tay shu-maa naa-ma-yay ba dos-taan may-na-wee-seed wa az ka-say ta-shak-kur may-ku-need, a-waa-tif wa ih-saa-saa-ti khud raa nis-bat ba oo ni-shaan daa-da eed.",
        "mean": "When you write a letter to friends and thank someone, you have shown your emotions and feelings toward them.",
        "words": [
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "شما",
            "shu-maa",
            "shu-maa"
          ],
          [
            "نامه‌یی",
            "naa-ma-yay",
            "naa-ma-yay"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دوستان",
            "dos-taan",
            "dos-taan"
          ],
          [
            "می‌نویسید",
            "may-na-wee-seed",
            "may-na-wee-seed",
            "na-wish-tan"
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
            "کسی",
            "ka-say",
            "ka-say"
          ],
          [
            "تشکر",
            "ta-shak-kur",
            "ta-shak-kur",
            "ta-shak-kur may-ku-need",
            "ta-shak-kur kar-dan"
          ],
          [
            "می‌کنید،",
            "may-ku-need",
            "may-ku-need",
            "ta-shak-kur may-ku-need",
            "kar-dan",
            "ta-shak-kur kar-dan"
          ],
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات",
            "ih-saa-saa-ti",
            "ih-saa-saat"
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
            "نسبت",
            "nis-bat",
            "nis-bat",
            "nis-bat ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "nis-bat ba"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan",
            "ni-shaan daa-da eed"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "ni-shaan daa-da eed",
            "daa-dan"
          ],
          [
            "اید.",
            "eed",
            "eed",
            "ni-shaan daa-da eed"
          ]
        ]
      },
      {
        "say": "in-saa-ni mu-waf-faq ka-say ast ki ih-saa-saat wa a-waa-ti-fi khud raa du-rust ba kaar bi-ba-rad, nuh een ki sar-kob ku-nad;",
        "mean": "A successful person is one who uses their feelings and emotions rightly, rather than suppressing them;",
        "words": [
          [
            "انسان",
            "in-saa-ni",
            "in-saan"
          ],
          [
            "موفق",
            "mu-waf-faq",
            "mu-waf-faq"
          ],
          [
            "کسی",
            "ka-say",
            "ka-say"
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
            "احساسات",
            "ih-saa-saat",
            "ih-saa-saat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عواطف",
            "a-waa-ti-fi",
            "a-waa-tif"
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
            "درست",
            "du-rust",
            "du-rust"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba kaar bi-ba-rad",
            "ba kaar bur-dan"
          ],
          [
            "کار",
            "kaar",
            "kaar",
            "ba kaar bi-ba-rad",
            "ba kaar bur-dan"
          ],
          [
            "ببرد،",
            "bi-ba-rad",
            "bi-ba-rad",
            "ba kaar bi-ba-rad",
            "bur-dan",
            "ba kaar bur-dan"
          ],
          [
            "نه",
            "nuh",
            "nuh",
            "nuh een ki"
          ],
          [
            "این",
            "een",
            "een",
            "nuh een ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "nuh een ki"
          ],
          [
            "سرکوب",
            "sar-kob",
            "sar-kob",
            "sar-kob ku-nad",
            "sar-kob kar-dan"
          ],
          [
            "کند؛",
            "ku-nad",
            "ku-nad",
            "sar-kob ku-nad",
            "kar-dan",
            "sar-kob kar-dan"
          ]
        ]
      },
      {
        "say": "tawr mi-saal: a-gar dee-ga-raan oo raa a-zi-yat kar-da wa khash-ma-geen na-maa-yad, bi-ta-waa-nad bar khashm wa gha-za-bi khud gha-la-ba yaa-bad;",
        "mean": "for example, if others bother them and make them angry, they should be able to overcome their anger and rage,",
        "words": [
          [
            "طور",
            "tawr",
            "tawr",
            "tawr mi-saal"
          ],
          [
            "مثال:",
            "mi-saal",
            "mi-saal",
            "tawr mi-saal"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
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
            "a-zi-yat kar-da",
            "a-zi-yat kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "a-zi-yat kar-da",
            "kar-dan",
            "a-zi-yat kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خشمگین",
            "khash-ma-geen",
            "khash-ma-geen",
            "khash-ma-geen na-maa-yad"
          ],
          [
            "نماید،",
            "na-maa-yad",
            "na-maa-yad",
            "khash-ma-geen na-maa-yad",
            "na-mo-dan"
          ],
          [
            "بتواند",
            "bi-ta-waa-nad",
            "bi-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "خشم",
            "khashm",
            "khashm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غضب",
            "gha-za-bi",
            "gha-zab"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "غلبه",
            "gha-la-ba",
            "gha-la-ba",
            "gha-la-ba yaa-bad",
            "gha-la-ba yaaf-tan"
          ],
          [
            "یابد؛",
            "yaa-bad",
            "yaa-bad",
            "gha-la-ba yaa-bad",
            "yaaf-tan",
            "gha-la-ba yaaf-tan"
          ]
        ]
      },
      {
        "say": "zee-raa khashm wa gha-zab mi-haa-ri aql raa az das-ti in-saan khaa-rij may-ku-nad wa mum-kin ast in-saan dast ba kaa-ray bi-za-nad ki baad-haa pa-shay-maan sha-wad.",
        "mean": "because anger and rage take the reins of reason out of a person's hands, and a person may do something they later regret.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "خشم",
            "khashm",
            "khashm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غضب",
            "gha-zab",
            "gha-zab"
          ],
          [
            "مهار",
            "mi-haa-ri",
            "mi-haar"
          ],
          [
            "عقل",
            "aql",
            "aql"
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
            "az das-ti in-saan khaa-rij may-ku-nad",
            "khaa-rij kar-dan"
          ],
          [
            "دست",
            "das-ti",
            "dast",
            "az das-ti in-saan khaa-rij may-ku-nad",
            "khaa-rij kar-dan"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan",
            "az das-ti in-saan khaa-rij may-ku-nad",
            "khaa-rij kar-dan"
          ],
          [
            "خارج",
            "khaa-rij",
            "khaa-rij",
            "az das-ti in-saan khaa-rij may-ku-nad",
            "khaa-rij kar-dan"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "az das-ti in-saan khaa-rij may-ku-nad",
            "kar-dan",
            "khaa-rij kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ممکن",
            "mum-kin",
            "mum-kin"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "دست",
            "dast",
            "dast",
            "dast ba kaa-ray bi-za-nad",
            "dast za-dan"
          ],
          [
            "به",
            "ba",
            "ba",
            "dast ba kaa-ray bi-za-nad",
            "dast za-dan"
          ],
          [
            "کاری",
            "kaa-ray",
            "kaa-ray",
            "dast ba kaa-ray bi-za-nad",
            "dast za-dan"
          ],
          [
            "بزند",
            "bi-za-nad",
            "bi-za-nad",
            "dast ba kaa-ray bi-za-nad",
            "za-dan",
            "dast za-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بعدها",
            "baad-haa",
            "baad-haa#later"
          ],
          [
            "پشیمان",
            "pa-shay-maan",
            "pa-shay-maan",
            "pa-shay-maan sha-wad",
            "pa-shay-maan shu-dan"
          ],
          [
            "شود.",
            "sha-wad",
            "sha-wad",
            "pa-shay-maan sha-wad",
            "shu-dan",
            "pa-shay-maan shu-dan"
          ]
        ]
      },
      {
        "say": "a-waa-tif wa ih-saa-saat dar shaa-dee-haa wa naa-kho-shee-haa har du baa-yad kun-trol gar-dad.",
        "mean": "Emotions and feelings must be controlled both in joys and in sorrows.",
        "words": [
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات",
            "ih-saa-saat",
            "ih-saa-saat"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "شادی‌ها",
            "shaa-dee-haa",
            "shaa-dee-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ناخوشی‌ها",
            "naa-kho-shee-haa",
            "naa-kho-shee-haa"
          ],
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
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "کنترول",
            "kun-trol",
            "kun-trol",
            "kun-trol gar-dad"
          ],
          [
            "گردد.",
            "gar-dad",
            "gar-dad",
            "kun-trol gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "waq-tay maa gham-geen may-sha-waym yaa du-chaa-ri shi-kast may-sha-waym na-baa-yad naa u-meed sha-waym;",
        "mean": "When we become sad or suffer a defeat, we must not lose hope;",
        "words": [
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "غمگین",
            "gham-geen",
            "gham-geen",
            "gham-geen may-sha-waym"
          ],
          [
            "می‌شویم",
            "may-sha-waym",
            "may-sha-waym",
            "gham-geen may-sha-waym",
            "shu-dan"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "دچار",
            "du-chaa-ri",
            "du-chaar",
            "du-chaa-ri shi-kast may-sha-waym"
          ],
          [
            "شکست",
            "shi-kast",
            "shi-kast",
            "du-chaa-ri shi-kast may-sha-waym",
            "shi-kas-tan"
          ],
          [
            "می‌شویم",
            "may-sha-waym",
            "may-sha-waym",
            "du-chaa-ri shi-kast may-sha-waym",
            "shu-dan"
          ],
          [
            "نباید",
            "na-baa-yad",
            "na-baa-yad"
          ],
          [
            "نا",
            "naa",
            "naa",
            "naa u-meed sha-waym",
            "naa u-meed shu-dan"
          ],
          [
            "امید",
            "u-meed",
            "u-meed",
            "naa u-meed sha-waym",
            "naa u-meed shu-dan"
          ],
          [
            "شویم؛",
            "sha-waym",
            "sha-waym",
            "naa u-meed sha-waym",
            "shu-dan",
            "naa u-meed shu-dan"
          ]
        ]
      },
      {
        "say": "bal-ki baa-yad raa-hi u-boor az shi-kast wa ra-see-dan ba mu-waf-fa-qi-yat raa pay-daa ku-naym.",
        "mean": "rather, we must find the way past defeat to success.",
        "words": [
          [
            "بلکه",
            "bal-ki",
            "bal-ki"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "عبور",
            "u-boor",
            "u-boor"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شکست",
            "shi-kast",
            "shi-kast",
            "shi-kas-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رسیدن",
            "ra-see-dan",
            "ra-see-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "موفقیت",
            "mu-waf-fa-qi-yat",
            "mu-waf-fa-qi-yat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa",
            "pay-daa ku-naym",
            "pay-daa kar-dan"
          ],
          [
            "کنیم.",
            "ku-naym",
            "ku-naym",
            "pay-daa ku-naym",
            "kar-dan",
            "pay-daa kar-dan"
          ]
        ]
      },
      {
        "say": "maw-laa-naa-yi ja-laal-ud-dee-ni mu-ham-ma-di bal-khee may-go-yad:",
        "mean": "Mawlana Jalaluddin Muhammad Balkhi says:",
        "words": [
          [
            "مولانا",
            "maw-laa-naa-yi",
            "maw-laa-naa",
            "maw-laa-naa-yi ja-laal-ud-dee-ni mu-ham-ma-di bal-khee"
          ],
          [
            "جلال‌الدین",
            "ja-laal-ud-dee-ni",
            "ja-laal-ud-deen",
            "maw-laa-naa-yi ja-laal-ud-dee-ni mu-ham-ma-di bal-khee"
          ],
          [
            "محمد",
            "mu-ham-ma-di",
            "mu-ham-mad",
            "maw-laa-naa-yi ja-laal-ud-dee-ni mu-ham-ma-di bal-khee"
          ],
          [
            "بلخی",
            "bal-khee",
            "bal-khee",
            "maw-laa-naa-yi ja-laal-ud-dee-ni mu-ham-ma-di bal-khee"
          ],
          [
            "می‌گوید:",
            "may-go-yad",
            "may-go-yad",
            "guf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "so-yi naw-mee-dee ma-raw u-meed-haast",
        "mean": "Do not go toward hopelessness; there are hopes.",
        "words": [
          [
            "سوی",
            "so-yi",
            "so"
          ],
          [
            "نومیدی",
            "naw-mee-dee",
            "naw-mee-dee"
          ],
          [
            "مرو",
            "ma-raw",
            "ma-raw",
            "raf-tan"
          ],
          [
            "امیدهاست",
            "u-meed-haast",
            "u-meed-haast"
          ]
        ]
      },
      {
        "say": "so-yi taa-ree-kee ma-raw khur-sheed-haast",
        "mean": "Do not go toward darkness; there are suns.",
        "words": [
          [
            "سوی",
            "so-yi",
            "so"
          ],
          [
            "تاریکی",
            "taa-ree-kee",
            "taa-ree-kee"
          ],
          [
            "مرو",
            "ma-raw",
            "ma-raw",
            "raf-tan"
          ],
          [
            "خورشیدهاست",
            "khur-sheed-haast",
            "khur-sheed-haast"
          ]
        ]
      }
    ],
    [
      {
        "say": "bu-zur-gee, chi zay-baa guf-ta ast:",
        "mean": "A great man has put it beautifully:",
        "words": [
          [
            "بزرگی،",
            "bu-zur-gee",
            "bu-zur-gee"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "زیبا",
            "zay-baa",
            "zay-baa"
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
          ]
        ]
      }
    ],
    [
      {
        "say": "chi-hil ka-leed daa-reed, a-gar see-yu-nuh ka-leed, qufl-taan raa baaz na-kard, naa u-meed ma-sha-weed, mum-kin baa aa-khi-reen ka-leed da-ri taan baaz sha-wad.",
        "mean": "You have forty keys; if thirty-nine keys did not open your lock, do not lose hope; your door may open with the last key.",
        "words": [
          [
            "چهل",
            "chi-hil",
            "chi-hil"
          ],
          [
            "کلید",
            "ka-leed",
            "ka-leed"
          ],
          [
            "دارید،",
            "daa-reed",
            "daa-reed",
            "daash-tan"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "سی‌ونه",
            "see-yu-nuh",
            "see-yu-nuh"
          ],
          [
            "کلید،",
            "ka-leed",
            "ka-leed"
          ],
          [
            "قفل‌تان",
            "qufl-taan",
            "qufl-taan"
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
            "baaz na-kard",
            "baaz kar-dan"
          ],
          [
            "نکرد،",
            "na-kard",
            "na-kard",
            "baaz na-kard",
            "kar-dan",
            "baaz kar-dan"
          ],
          [
            "نا",
            "naa",
            "naa",
            "naa u-meed ma-sha-weed"
          ],
          [
            "امید",
            "u-meed",
            "u-meed",
            "naa u-meed ma-sha-weed"
          ],
          [
            "مشوید،",
            "ma-sha-weed",
            "ma-sha-weed",
            "naa u-meed ma-sha-weed",
            "shu-dan"
          ],
          [
            "ممکن",
            "mum-kin",
            "mum-kin"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "آخرین",
            "aa-khi-reen",
            "aa-khi-reen"
          ],
          [
            "کلید",
            "ka-leed",
            "ka-leed"
          ],
          [
            "درِ",
            "da-ri",
            "dar#door",
            "da-ri taan"
          ],
          [
            "تان",
            "taan",
            "taan",
            "da-ri taan"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz sha-wad",
            "baaz shu-dan"
          ],
          [
            "شود.",
            "sha-wad",
            "sha-wad",
            "baaz sha-wad",
            "shu-dan",
            "baaz shu-dan"
          ]
        ]
      },
      {
        "say": "in-saan dar har soo-rat baa-yad i'-ti-daal raa ri-aa-yat ku-nad, hat-taa dar mu-hab-bat wa dos-tee neez raa-hi if-raat raa na-pay-maa-yad;",
        "mean": "A person must keep to moderation in every case; even in love and friendship they should not go to extremes;",
        "words": [
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar har soo-rat"
          ],
          [
            "هر",
            "har",
            "har",
            "dar har soo-rat"
          ],
          [
            "صورت",
            "soo-rat",
            "soo-rat",
            "dar har soo-rat"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "اعتدال",
            "i'-ti-daal",
            "i'-ti-daal"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "رعایت",
            "ri-aa-yat",
            "ri-aa-yat",
            "ri-aa-yat ku-nad",
            "ri-aa-yat kar-dan"
          ],
          [
            "کند،",
            "ku-nad",
            "ku-nad",
            "ri-aa-yat ku-nad",
            "kar-dan",
            "ri-aa-yat kar-dan"
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
            "محبت",
            "mu-hab-bat",
            "mu-hab-bat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دوستی",
            "dos-tee",
            "dos-tee"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "راه",
            "raa-hi",
            "raah"
          ],
          [
            "افراط",
            "if-raat",
            "if-raat"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نپیماید؛",
            "na-pay-maa-yad",
            "na-pay-maa-yad",
            "pay-mo-dan"
          ]
        ]
      },
      {
        "say": "yaa-nee dar dos-tee na-baa-yad aan qadr if-raat ku-naym ki baa az dast daa-dan aan du-chaa-ri mush-kil sha-waym.",
        "mean": "that is, in friendship we should not go so far that losing it would put us in trouble.",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "دوستی",
            "dos-tee",
            "dos-tee"
          ],
          [
            "نباید",
            "na-baa-yad",
            "na-baa-yad"
          ],
          [
            "آن",
            "aan",
            "aan",
            "aan qadr"
          ],
          [
            "قدر",
            "qadr",
            "qadr",
            "aan qadr"
          ],
          [
            "افراط",
            "if-raat",
            "if-raat",
            "if-raat ku-naym",
            "if-raat kar-dan"
          ],
          [
            "کنیم",
            "ku-naym",
            "ku-naym",
            "if-raat ku-naym",
            "kar-dan",
            "if-raat kar-dan"
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
            "از",
            "az",
            "az",
            "az dast daa-dan"
          ],
          [
            "دست",
            "dast",
            "dast",
            "az dast daa-dan"
          ],
          [
            "دادن",
            "daa-dan",
            "daa-dan",
            "az dast daa-dan"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "دچار",
            "du-chaa-ri",
            "du-chaar",
            "du-chaa-ri mush-kil sha-waym"
          ],
          [
            "مشکل",
            "mush-kil",
            "mush-kil",
            "du-chaa-ri mush-kil sha-waym"
          ],
          [
            "شویم.",
            "sha-waym",
            "sha-waym",
            "du-chaa-ri mush-kil sha-waym",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "dar mu-hee-ti khaa-na-waa-da neez a-waa-tif wa ih-saa-saa-ti khud raa baa-yad mi-haar ku-naym;",
        "mean": "In the family too we must rein in our emotions and feelings;",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "محیط",
            "mu-hee-ti",
            "mu-heet"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات",
            "ih-saa-saa-ti",
            "ih-saa-saat"
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
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "مهار",
            "mi-haar",
            "mi-haar",
            "mi-haar ku-naym",
            "mi-haar kar-dan"
          ],
          [
            "کنیم؛",
            "ku-naym",
            "ku-naym",
            "mi-haar ku-naym",
            "kar-dan",
            "mi-haar kar-dan"
          ]
        ]
      },
      {
        "say": "ma-sa-lan: sa-daa-yi maan raa dar mu-qaa-bi-li pa-dar wa maa-dar bu-land na-ku-naym wa ka-li-ma-yay raa bar zu-baan na-yaa-wa-raym ki mo-ji-bi naa-raa-ha-tee-yi aan-haa gar-dad;",
        "mean": "for example, we should not raise our voice in front of our father and mother, nor say a word that upsets them;",
        "words": [
          [
            "مثلاً:",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "صدای",
            "sa-daa-yi",
            "sa-daa",
            "sa-daa-yi maan"
          ],
          [
            "مان",
            "maan",
            "maan",
            "sa-daa-yi maan"
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
            "dar mu-qaa-bi-li"
          ],
          [
            "مقابل",
            "mu-qaa-bi-li",
            "mu-qaa-bil",
            "dar mu-qaa-bi-li"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادر",
            "maa-dar",
            "maa-dar"
          ],
          [
            "بلند",
            "bu-land",
            "bu-land",
            "bu-land na-ku-naym"
          ],
          [
            "نکنیم",
            "na-ku-naym",
            "na-ku-naym",
            "bu-land na-ku-naym",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کلمه‌یی",
            "ka-li-ma-yay",
            "ka-li-ma-yay"
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
            "bar zu-baan na-yaa-wa-raym",
            "bar zu-baan aa-war-dan"
          ],
          [
            "زبان",
            "zu-baan",
            "zu-baan",
            "bar zu-baan na-yaa-wa-raym",
            "bar zu-baan aa-war-dan"
          ],
          [
            "نیاوریم",
            "na-yaa-wa-raym",
            "na-yaa-wa-raym",
            "bar zu-baan na-yaa-wa-raym",
            "aa-war-dan",
            "bar zu-baan aa-war-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "موجب",
            "mo-ji-bi",
            "mo-jib",
            "mo-ji-bi naa-raa-ha-tee-yi aan-haa gar-dad"
          ],
          [
            "ناراحتی",
            "naa-raa-ha-tee-yi",
            "naa-raa-ha-tee",
            "mo-ji-bi naa-raa-ha-tee-yi aan-haa gar-dad"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa",
            "mo-ji-bi naa-raa-ha-tee-yi aan-haa gar-dad"
          ],
          [
            "گردد؛",
            "gar-dad",
            "gar-dad",
            "mo-ji-bi naa-raa-ha-tee-yi aan-haa gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "khu-daa-wand dar qur-aa-ni ka-reem guf-ta ast: fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man (al-is-raa: bees-tu sih).",
        "mean": "God has said in the Holy Quran: “So do not say ‘uff’ to them, nor scold them, but speak to them with kind words” [al-Isra 23].",
        "words": [
          [
            "خداوند",
            "khu-daa-wand",
            "khu-daa-wand"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "فَلاَ",
            "fa-laa",
            "fa-laa",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "تَقُل",
            "ta-qul",
            "ta-qul",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "لَّهُمَآ",
            "la-hu-maa",
            "la-hu-maa",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "أُفٍّ",
            "uf-fin",
            "uf-fin",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "وَلاَ",
            "wa-laa",
            "wa-laa",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "تَنْهَرْهُمَا",
            "tan-har-hu-maa",
            "tan-har-hu-maa",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "وَقُل",
            "wa-qul",
            "wa-qul",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "لَّهُمَا",
            "la-hu-maa",
            "la-hu-maa",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "قَوْلًا",
            "qaw-lan",
            "qaw-lan",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "کَرِیمًا",
            "ka-ree-man",
            "ka-ree-man",
            "fa-laa ta-qul la-hu-maa uf-fin wa-laa tan-har-hu-maa wa-qul la-hu-maa qaw-lan ka-ree-man"
          ],
          [
            "[الاسراء:",
            "al-is-raa",
            "al-is-raa"
          ],
          [
            "۲۳].",
            "bees-tu sih",
            "bees-tu sih"
          ]
        ]
      }
    ],
    [
      {
        "say": "tar-ju-ma: pas ma-go ee-shaan raa uff wa baang ma-zan bar ee-shaan wa bi-go baa ee-shaan su-kha-ni nay-ko.",
        "mean": "Translation: So do not say “uff” to them, do not shout at them, and speak kind words to them.",
        "words": [
          [
            "ترجمه:",
            "tar-ju-ma",
            "tar-ju-ma"
          ],
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "مگو",
            "ma-go",
            "ma-go",
            "guf-tan"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "افُ",
            "uff",
            "uff"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بانگ",
            "baang",
            "baang",
            "baang ma-zan",
            "baang za-dan"
          ],
          [
            "مزن",
            "ma-zan",
            "ma-zan",
            "baang ma-zan",
            "za-dan",
            "baang za-dan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بگو",
            "bi-go",
            "bi-go",
            "guf-tan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "سخن",
            "su-kha-ni",
            "su-khan"
          ],
          [
            "نیکو.",
            "nay-ko",
            "nay-ko"
          ]
        ]
      }
    ],
    [
      {
        "say": "wa baa pa-dar wa maa-da-ru-maan baa khoo-bee, ra'-fat, rah-mat wa mih-ra-baa-nee paysh aa-yaym.",
        "mean": "And let us treat our father and mother with goodness, tenderness, mercy and kindness.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادرمان",
            "maa-da-ru-maan",
            "maa-da-ru-maan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "خوبی،",
            "khoo-bee",
            "khoo-bee"
          ],
          [
            "رأفت،",
            "ra'-fat",
            "ra'-fat"
          ],
          [
            "رحمت",
            "rah-mat",
            "rah-mat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مهربانی",
            "mih-ra-baa-nee",
            "mih-ra-baa-nee"
          ],
          [
            "پیش",
            "paysh",
            "paysh",
            "paysh aa-yaym",
            "paysh aa-ma-dan"
          ],
          [
            "آییم.",
            "aa-yaym",
            "aa-yaym",
            "paysh aa-yaym",
            "aa-ma-dan",
            "paysh aa-ma-dan"
          ]
        ]
      },
      {
        "say": "wa bil-waa-li-day-ni ih-saa-naa.",
        "mean": "“And be good to your parents.”",
        "words": [
          [
            "و",
            "wa",
            "wa",
            "wa bil-waa-li-day-ni ih-saa-naa"
          ],
          [
            "بالوالدین",
            "bil-waa-li-day-ni",
            "bil-waa-li-day-ni",
            "wa bil-waa-li-day-ni ih-saa-naa"
          ],
          [
            "احسانا.",
            "ih-saa-naa",
            "ih-saa-naa",
            "wa bil-waa-li-day-ni ih-saa-naa"
          ]
        ]
      },
      {
        "say": "wa baa pa-dar wa maa-dar nay-kay ku-naym.",
        "mean": "And let us do good to our father and mother.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادر",
            "maa-dar",
            "maa-dar"
          ],
          [
            "نیکی",
            "nay-kay",
            "nay-kay",
            "nay-kay ku-naym",
            "nay-kay kar-dan"
          ],
          [
            "کنیم.",
            "ku-naym",
            "ku-naym",
            "nay-kay ku-naym",
            "kar-dan",
            "nay-kay kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "kho-shaa ba haa-li ka-saa-nay ki ha-may-sha a-waa-tif wa ih-saa-saat-shaan raa kun-trol may-ku-nand!",
        "mean": "Happy are those who always control their emotions and feelings!",
        "words": [
          [
            "خوشا",
            "kho-shaa",
            "kho-shaa",
            "kho-shaa ba haa-li"
          ],
          [
            "به",
            "ba",
            "ba",
            "kho-shaa ba haa-li"
          ],
          [
            "حال",
            "haa-li",
            "haal",
            "kho-shaa ba haa-li"
          ],
          [
            "کسانی",
            "ka-saa-nay",
            "ka-saa-nay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات‌شان",
            "ih-saa-saat-shaan",
            "ih-saa-saat-shaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کنترول",
            "kun-trol",
            "kun-trol",
            "kun-trol may-ku-nand",
            "kun-trol kar-dan"
          ],
          [
            "می‌کنند!",
            "may-ku-nand",
            "may-ku-nand",
            "kun-trol may-ku-nand",
            "kar-dan",
            "kun-trol kar-dan"
          ]
        ]
      },
      {
        "say": "wa chi in-saan-haa-yi khoo-bee and aa-naa-nay ki baa pa-dar wa maa-da-rash-shaan nay-kay may-ku-nand!",
        "mean": "And what good people are those who do good to their father and mother!",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "انسان‌های",
            "in-saan-haa-yi",
            "in-saan-haa",
            "in-saan"
          ],
          [
            "خوبی",
            "khoo-bee",
            "khoo-bee"
          ],
          [
            "اند",
            "and",
            "and"
          ],
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
            "با",
            "baa",
            "baa"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادرشان",
            "maa-da-rash-shaan",
            "maa-da-rash-shaan"
          ],
          [
            "نیکی",
            "nay-kay",
            "nay-kay",
            "nay-kay may-ku-nand",
            "nay-kay kar-dan"
          ],
          [
            "می‌کنند!",
            "may-ku-nand",
            "may-ku-nand",
            "nay-kay may-ku-nand",
            "kar-dan",
            "nay-kay kar-dan"
          ]
        ]
      },
      {
        "say": "wa hat-taa uff raa ham bar zu-baan na-may-aa-wa-rand",
        "mean": "and who do not even say “uff”.",
        "words": [
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
            "افُ",
            "uff",
            "uff"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar zu-baan na-may-aa-wa-rand",
            "bar zu-baan aa-war-dan"
          ],
          [
            "زبان",
            "zu-baan",
            "zu-baan",
            "bar zu-baan na-may-aa-wa-rand",
            "bar zu-baan aa-war-dan"
          ],
          [
            "نمی‌آورند",
            "na-may-aa-wa-rand",
            "na-may-aa-wa-rand",
            "bar zu-baan na-may-aa-wa-rand",
            "aa-war-dan",
            "bar zu-baan aa-war-dan"
          ]
        ]
      },
      {
        "say": "wa waay bar haa-li ka-saa-nay ki a-waa-tif wa ih-saa-saat-shaan raa kun-trol na-may-ku-nand wa dar ba-raa-ba-ri pa-dar wa maa-dar wa dee-ga-raan az sakh-tee wa zish-tee paysh may-aa-yand",
        "mean": "And woe to those who do not control their emotions and feelings, and treat their father, mother and others harshly and rudely,",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وای",
            "waay",
            "waay",
            "waay bar haa-li"
          ],
          [
            "بر",
            "bar",
            "bar",
            "waay bar haa-li"
          ],
          [
            "حال",
            "haa-li",
            "haal",
            "waay bar haa-li"
          ],
          [
            "کسانی",
            "ka-saa-nay",
            "ka-saa-nay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "عواطف",
            "a-waa-tif",
            "a-waa-tif"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احساسات‌شان",
            "ih-saa-saat-shaan",
            "ih-saa-saat-shaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "کنترول",
            "kun-trol",
            "kun-trol",
            "kun-trol na-may-ku-nand"
          ],
          [
            "نمی‌کنند",
            "na-may-ku-nand",
            "na-may-ku-nand",
            "kun-trol na-may-ku-nand",
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
            "dar",
            "dar ba-raa-ba-ri"
          ],
          [
            "برابر",
            "ba-raa-ba-ri",
            "ba-raa-bar",
            "dar ba-raa-ba-ri"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادر",
            "maa-dar",
            "maa-dar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "سختی",
            "sakh-tee",
            "sakh-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زشتی",
            "zish-tee",
            "zish-tee"
          ],
          [
            "پیش",
            "paysh",
            "paysh",
            "paysh may-aa-yand",
            "paysh aa-ma-dan"
          ],
          [
            "می‌آیند",
            "may-aa-yand",
            "may-aa-yand",
            "paysh may-aa-yand",
            "aa-ma-dan",
            "paysh aa-ma-dan"
          ]
        ]
      },
      {
        "say": "wa dar na-tee-ja zin-da-gee raa dar khaa-na-waa-da wa mu-hee-ti at-raaf wa ak-naaf talkh wa naa-gu-waar may-saa-zand.",
        "mean": "and as a result make life bitter and unpleasant in the family and all around them.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar na-tee-ja"
          ],
          [
            "نتیجه",
            "na-tee-ja",
            "na-tee-ja",
            "dar na-tee-ja"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
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
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "محیط",
            "mu-hee-ti",
            "mu-heet"
          ],
          [
            "اطراف",
            "at-raaf",
            "at-raaf",
            "at-raaf wa ak-naaf"
          ],
          [
            "و",
            "wa",
            "wa",
            "at-raaf wa ak-naaf"
          ],
          [
            "اکناف",
            "ak-naaf",
            "ak-naaf",
            "at-raaf wa ak-naaf"
          ],
          [
            "تلخ",
            "talkh",
            "talkh",
            "talkh wa naa-gu-waar"
          ],
          [
            "و",
            "wa",
            "wa",
            "talkh wa naa-gu-waar"
          ],
          [
            "ناگوار",
            "naa-gu-waar",
            "naa-gu-waar",
            "talkh wa naa-gu-waar"
          ],
          [
            "می‌سازند.",
            "may-saa-zand",
            "may-saa-zand",
            "saakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pa-ra-wa-ri-shi aa-ti-fee ham-waa-ra az na-za-ri ra-waan-shi-naa-saan wa mu-ar-ri-bi-yaan am-ri mu-him ta-laq-qee shu-da ast;",
        "mean": "Training of the emotions has always been considered important by psychologists and educators,",
        "words": [
          [
            "پرورش",
            "pa-ra-wa-ri-shi",
            "pa-ra-wa-rish"
          ],
          [
            "عاطفی",
            "aa-ti-fee",
            "aa-ti-fee"
          ],
          [
            "همواره",
            "ham-waa-ra",
            "ham-waa-ra"
          ],
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
            "روان‌شناسان",
            "ra-waan-shi-naa-saan",
            "ra-waan-shi-naa-saan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مربیان",
            "mu-ar-ri-bi-yaan",
            "mu-ar-ri-bi-yaan"
          ],
          [
            "امر",
            "am-ri",
            "amr"
          ],
          [
            "مهم",
            "mu-him",
            "mu-him"
          ],
          [
            "تلقی",
            "ta-laq-qee",
            "ta-laq-qee",
            "ta-laq-qee shu-da ast",
            "ta-laq-qee shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "ta-laq-qee shu-da ast",
            "shu-dan",
            "ta-laq-qee shu-dan"
          ],
          [
            "است؛",
            "ast",
            "ast",
            "ta-laq-qee shu-da ast",
            "ta-laq-qee shu-dan"
          ]
        ]
      },
      {
        "say": "ham-chu-naan ki aa-yaat wa a-haa-dees wa ri-waa-yaat wa ma-baa-hi-si tar-bi-ya-tee-yi is-laam neez aan raa maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had wa rah-na-mood-haa-yi ar-zish-man-day raa i-raa-a may-ku-nad.",
        "mean": "just as the verses of the Quran, the sayings of the Prophet, the reports and the teachings of Islam also give it full and careful attention and offer valuable guidance.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan",
            "ham-chu-naan ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "ham-chu-naan ki"
          ],
          [
            "آیات",
            "aa-yaat",
            "aa-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "احادیث",
            "a-haa-dees",
            "a-haa-dees"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "روایات",
            "ri-waa-yaat",
            "ri-waa-yaat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مباحث",
            "ma-baa-hi-si",
            "ma-baa-his"
          ],
          [
            "تربیتی",
            "tar-bi-ya-tee-yi",
            "tar-bi-ya-tee"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "نیز",
            "neez",
            "neez"
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
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had"
          ],
          [
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had"
          ],
          [
            "کامل",
            "kaa-mil",
            "kaa-mil",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had"
          ],
          [
            "و",
            "wa",
            "wa",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had"
          ],
          [
            "دقیق",
            "da-qeeq",
            "da-qeeq",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had"
          ],
          [
            "می‌دهد",
            "may-di-had",
            "may-di-had",
            "maw-ri-di ta-waj-ju-hi kaa-mil wa da-qeeq qa-raar may-di-had",
            "daa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رهنمودهای",
            "rah-na-mood-haa-yi",
            "rah-na-mood-haa"
          ],
          [
            "ارزشمندی",
            "ar-zish-man-day",
            "ar-zish-man-day"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "ارائه",
            "i-raa-a",
            "i-raa-a",
            "i-raa-a may-ku-nad",
            "i-raa-a kar-dan"
          ],
          [
            "می‌کند.",
            "may-ku-nad",
            "may-ku-nad",
            "i-raa-a may-ku-nad",
            "kar-dan",
            "i-raa-a kar-dan"
          ]
        ]
      },
      {
        "say": "aa-yaa-tay ki az ma-wad-dat, mu-hab-bat wa a-daa-lat, in-i-taaf wa qa-saa-wat, it-mee-naan wa iz-ti-raab, hub wa zay-baa-yee wa maa-nan-di aan su-khan may-go-yad, may-ta-waa-nad ba baa-di aa-ti-fee baa maf-hoo-mi aa-mi aan naa-zir baa-shad.",
        "mean": "The verses that speak of affection, love and justice, gentleness and harshness, calm and anxiety, love and beauty and the like can relate to the emotional side in its general sense.",
        "words": [
          [
            "آیاتی",
            "aa-yaa-tay",
            "aa-yaa-tay"
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
            "مودت،",
            "ma-wad-dat",
            "ma-wad-dat"
          ],
          [
            "محبت",
            "mu-hab-bat",
            "mu-hab-bat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عدالت،",
            "a-daa-lat",
            "a-daa-lat"
          ],
          [
            "انعطاف",
            "in-i-taaf",
            "in-i-taaf"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قساوت،",
            "qa-saa-wat",
            "qa-saa-wat"
          ],
          [
            "اطمینان",
            "it-mee-naan",
            "it-mee-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اضطراب،",
            "iz-ti-raab",
            "iz-ti-raab"
          ],
          [
            "حب",
            "hub",
            "hub"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زیبایی",
            "zay-baa-yee",
            "zay-baa-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مانند",
            "maa-nan-di",
            "maa-nand"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan",
            "su-khan may-go-yad",
            "su-khan guf-tan"
          ],
          [
            "می‌گوید،",
            "may-go-yad",
            "may-go-yad",
            "su-khan may-go-yad",
            "guf-tan",
            "su-khan guf-tan"
          ],
          [
            "می‌تواند",
            "may-ta-waa-nad",
            "may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بعد",
            "baa-di",
            "baad#after"
          ],
          [
            "عاطفی",
            "aa-ti-fee",
            "aa-ti-fee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "مفهوم",
            "maf-hoo-mi",
            "maf-hoom"
          ],
          [
            "عام",
            "aa-mi",
            "aam"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "ناظر",
            "naa-zir",
            "naa-zir",
            "naa-zir baa-shad"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "naa-zir baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "tar-bi-ya-ti aa-ti-fee ba ma-naa-yi hi-daa-yat wa kun-tro-li ih-saa-saat wa shi-gu-faa-saa-zee wa bah-ra-gee-ree-yi ba maw-qa az aan-haa dar ji-ha-ti mat-loob, yaa-nee khayr wa sa-aa-da-ti in-saan ast;",
        "mean": "Emotional training means guiding and controlling the feelings, developing them and using them at the right time in a good direction, that is, for the good and happiness of people;",
        "words": [
          [
            "تربیت",
            "tar-bi-ya-ti",
            "tar-bi-yat"
          ],
          [
            "عاطفی",
            "aa-ti-fee",
            "aa-ti-fee"
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
            "هدایت",
            "hi-daa-yat",
            "hi-daa-yat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کنترول",
            "kun-tro-li",
            "kun-trol"
          ],
          [
            "احساسات",
            "ih-saa-saat",
            "ih-saa-saat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شگوفاسازی",
            "shi-gu-faa-saa-zee",
            "shi-gu-faa-saa-zee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بهره‌گیری",
            "bah-ra-gee-ree-yi",
            "bah-ra-gee-ree"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba maw-qa"
          ],
          [
            "موقع",
            "maw-qa",
            "maw-qa",
            "ba maw-qa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar ji-ha-ti"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat",
            "dar ji-ha-ti"
          ],
          [
            "مطلوب،",
            "mat-loob",
            "mat-loob"
          ],
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "خیر",
            "khayr",
            "khayr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سعادت",
            "sa-aa-da-ti",
            "sa-aa-dat"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ma-sa-lan: tar-bi-ya-ti is-laa-mee ri-aa-ya-ti hu-qoo-qi zan wa far-zand wa am-saa-li aan raa dar chi-haar cho-bi is-laam taw-si-ya may-ku-nad wa aan gha-ree-za raa dar ji-ha-ti sa-laah, rushd wa ka-maa-li in-saan ba khid-mat may-gee-rad",
        "mean": "for example, Islamic training recommends respecting the rights of wife and children and the like within the framework of Islam, and puts that instinct to work for the good, growth and perfection of people,",
        "words": [
          [
            "مثلاً:",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "تربیت",
            "tar-bi-ya-ti",
            "tar-bi-yat"
          ],
          [
            "اسلامی",
            "is-laa-mee",
            "is-laa-mee"
          ],
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "زن",
            "zan",
            "zan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرزند",
            "far-zand",
            "far-zand"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امثال",
            "am-saa-li",
            "am-saal"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "چهار",
            "chi-haar",
            "chi-haar",
            "chi-haar cho-bi"
          ],
          [
            "چوب",
            "cho-bi",
            "chob",
            "chi-haar cho-bi"
          ],
          [
            "اسلام",
            "is-laam",
            "is-laam"
          ],
          [
            "توصیه",
            "taw-si-ya",
            "taw-si-ya",
            "taw-si-ya may-ku-nad",
            "taw-si-ya kar-dan"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "taw-si-ya may-ku-nad",
            "kar-dan",
            "taw-si-ya kar-dan"
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
            "غریزه",
            "gha-ree-za",
            "gha-ree-za"
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
            "dar ji-ha-ti"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat",
            "dar ji-ha-ti"
          ],
          [
            "صلاح،",
            "sa-laah",
            "sa-laah"
          ],
          [
            "رشد",
            "rushd",
            "rushd"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کمال",
            "ka-maa-li",
            "ka-maal"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba khid-mat may-gee-rad"
          ],
          [
            "خدمت",
            "khid-mat",
            "khid-mat",
            "ba khid-mat may-gee-rad"
          ],
          [
            "می‌گیرد",
            "may-gee-rad",
            "may-gee-rad",
            "ba khid-mat may-gee-rad",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "wa baa a-waa-mi-li kun-trol ku-nan-da, maa-ni-yi khaa-rij shu-dan az ta-ree-qi i'-ti-daal may-sha-wad.",
        "mean": "and with controlling factors it prevents leaving the path of moderation.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "عوامل",
            "a-waa-mi-li",
            "a-waa-mil"
          ],
          [
            "کنترول",
            "kun-trol",
            "kun-trol",
            "kun-trol ku-nan-da"
          ],
          [
            "کننده،",
            "ku-nan-da",
            "ku-nan-da",
            "kun-trol ku-nan-da"
          ],
          [
            "مانع",
            "maa-ni-yi",
            "maa-ni"
          ],
          [
            "خارج",
            "khaa-rij",
            "khaa-rij",
            "khaa-rij shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "khaa-rij shu-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq"
          ],
          [
            "اعتدال",
            "i'-ti-daal",
            "i'-ti-daal"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      }
    ]
  ]
});
