/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 6, book pages 34-35, PDF pages 41-42 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «اندکه» is written «اند که»; «کنارجوی» is written «کنار جوی»; «ازآن‌جا» is written «از آن‌جا»; «وهردو» is written «و هر دو»; «هردو» is written «هر دو»; «رسیدندکه» is written «رسیدند که»; «وگفت» is written «و گفت»; «ازحرص» is written «از حرص»; «زرکه» is written «زر که»; «هرسه» is written «هر سه»; «خواستندکه» is written «خواستند که»; «هریکی» is written «هر یکی»; «باشدکه» is written «باشد که»; «اندراین» is written «اندر این»; «دوکس» is written «دو کس»; «بازآید» is written «باز آید»; «بازآمد» is written «باز آمد»; «برآن‌جا» is written «بر آن‌جا»; «حذرکنید» is written «حذر کنید»; «شدکه» is written «شد که»; «اندرمال» is written «اندر مال»; «وگرد» is written «و گرد»; «قدرحاجت» is written «قدر حاجت»; «آخرهلاک» is written «آخر هلاک»; «ازخوردن» is written «از خوردن»; «اگرمرا» is written «اگر مرا»; «برکوه» is written «بر کوه»; «بردرخت» is written «بر درخت»; «برسرکوه» is written «بر سر کوه»; «برگذشته» is written «بر گذشته»; «پروبال» is written «پر و بال»; «اندرشکم» is written «اندر شکم»; «برگردن» is written «بر گردن»; «برپای» is written «بر پای».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-06',
  group: 'Dari · grade 9',
  label: 'Lesson 6',
  name: "zi-yaan-haa-yi aaz-man-dee",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_06.jpg',
    alt: "An ink drawing of al-Ghazali, an old man with a turban and a long beard."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_06.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "zi-yaan-haa":                      { fa: "زیان‌ها", mean: "harms, losses" },
    "aaz-man-dee":                      { fa: "آزمندی", mean: "greed" },
    "ri-waa-yat":                       { fa: "روایت", mean: "telling, a report" },
    "ri-waa-yat kar-da and":            { fa: "روایت کرده اند", mean: "they have told, it is told" },
    "ri-waa-yat kar-dan":               { fa: "روایت کردن", mean: "to tell, to report" },
    "kar-da":                           { fa: "کرده", mean: "done" },
    "kar-dan":                          { fa: "کردن", mean: "to do, to make" },
    "and":                              { fa: "اند", mean: "are; after a word like shu-da, have" },
    "ki":                               { fa: "که", mean: "that, which, who" },
    "mar-day":                          { fa: "مردی", mean: "a man" },
    "ba":                               { fa: "به", mean: "to" },
    "ee-saa":                           { fa: "عیسی", mean: "Jesus" },
    "a-lay-his-sa-laam":                { fa: "(ع)", mean: "peace be upon him - said after the name of a prophet; (ع) is short for it" },
    "guft":                             { fa: "گفت", mean: "said" },
    "guf-tan":                          { fa: "گفتن", mean: "to say, to tell" },
    "khaa-ham":                         { fa: "خواهم", mean: "I want" },
    "khaas-tan":                        { fa: "خواستن", mean: "to want" },
    "an-dar":                           { fa: "اندر", mean: "in (an old word for dar)" },
    "an-dar soh-ba-ti tu baa-sham":     { fa: "اندر صحبت تو باشم", mean: "be in your company" },
    "soh-bat":                          { fa: "صحبت", mean: "company; conversation" },
    "tu":                               { fa: "تو", mean: "you (one person)" },
    "baa-sham":                         { fa: "باشم", mean: "I be" },
    "bu-dan":                           { fa: "بودن", mean: "to be" },
    "baa":                              { fa: "با", mean: "with" },
    "way":                              { fa: "وی", mean: "he, she" },
    "ba ham":                           { fa: "به هم", mean: "together" },
    "ham":                              { fa: "هم", mean: "also, too" },
    "bi-raf-tand":                      { fa: "برفتند", mean: "went, set off" },
    "raf-tan":                          { fa: "رفتن", mean: "to go" },
    "taa":                              { fa: "تا", mean: "so that; until; to" },
    "ki-naar":                          { fa: "کنار", mean: "side, edge" },
    "joy":                              { fa: "جوی", mean: "stream" },
    "wa":                               { fa: "و", mean: "and" },
    "sih":                              { fa: "سه", mean: "three" },
    "naan":                             { fa: "نان", mean: "bread" },
    "daash-tand":                       { fa: "داشتند", mean: "had" },
    "daash-tan":                        { fa: "داشتن", mean: "to have" },
    "mard":                             { fa: "مرد", mean: "man" },
    "ya-kay":                           { fa: "یکی", mean: "one" },
    "bi-duz-deed":                      { fa: "بدزدید", mean: "stole" },
    "duz-dee-dan":                      { fa: "دزدیدن", mean: "to steal" },
    "ki-naa-ra":                        { fa: "کناره", mean: "coast, edge" },
    "joo":                              { fa: "جو", mean: "stream" },
    "shu-da":                           { fa: "شده", mean: "become; been" },
    "shu-dan":                          { fa: "شدن", mean: "to become" },
    "bood":                             { fa: "بود", mean: "was" },
    "choon":                            { fa: "چون", mean: "like, as; when; because" },
    "baaz":                             { fa: "باز", mean: "open" },
    "baaz aa-mad":                      { fa: "باز آمد", mean: "came back" },
    "baaz aa-ma-dan":                   { fa: "باز آمدن", mean: "to come back" },
    "aa-mad":                           { fa: "آمد", mean: "came" },
    "aa-ma-dan":                        { fa: "آمدن", mean: "to come" },
    "na-deed":                          { fa: "ندید", mean: "did not see" },
    "dee-dan":                          { fa: "دیدن", mean: "to see; seeing" },
    "bar-gi-rift":                      { fa: "برگرفت", mean: "took" },
    "bar-gi-rif-tan":                   { fa: "برگرفتن", mean: "to take up" },
    "na-daa-nam":                       { fa: "ندانم", mean: "I do not know" },
    "daa-nis-tan":                      { fa: "دانستن", mean: "to know" },
    "pas":                              { fa: "پس", mean: "then, so" },
    "az":                               { fa: "از", mean: "from, of" },
    "aan-jaa":                          { fa: "آن‌جا", mean: "there" },
    "bi-gu-zash-tand":                  { fa: "بگذشتند", mean: "passed on, went on" },
    "gu-zash-tan":                      { fa: "گذشتن", mean: "to pass" },
    "aa-ho-yay":                        { fa: "آهویی", mean: "a gazelle" },
    "ha-mee":                           { fa: "همی", mean: "(an old word showing an action going on) was …-ing" },
    "ha-mee aa-mad":                    { fa: "همی آمد", mean: "was coming" },
    "du":                               { fa: "دو", mean: "two" },
    "bach-cha":                         { fa: "بچه", mean: "young one, child" },
    "raa":                              { fa: "را", mean: "marks the object of the verb" },
    "aa-waaz":                          { fa: "آواز", mean: "sound, voice; song" },
    "aa-waaz daad":                     { fa: "آواز داد", mean: "called" },
    "aa-waaz daa-dan":                  { fa: "آواز دادن", mean: "to call" },
    "daad":                             { fa: "داد", mean: "gave" },
    "daa-dan":                          { fa: "دادن", mean: "to give" },
    "naz-deek":                         { fa: "نزدیک", mean: "near" },
    "bi-kusht":                         { fa: "بکشت", mean: "killed" },
    "kush-tan":                         { fa: "کشتن", mean: "to kill" },
    "an-dar waqt":                      { fa: "اندر وقت", mean: "at once" },
    "waqt":                             { fa: "وقت", mean: "time" },
    "bir-yaan":                         { fa: "بریان", mean: "roasted" },
    "shud":                             { fa: "شد", mean: "became; was" },
    "har":                              { fa: "هر", mean: "every" },
    "sayr":                             { fa: "سیر", mean: "journey" },
    "sayr bi-khor-dand":                { fa: "سیر بخوردند", mean: "ate their fill" },
    "bi-khor-dand":                     { fa: "بخوردند", mean: "ate" },
    "khor-dan":                         { fa: "خوردن", mean: "to eat; (with gham) to grieve" },
    "zin-da":                           { fa: "زنده", mean: "alive" },
    "shaw":                             { fa: "شو", mean: "become" },
    "far-maan":                         { fa: "فرمان", mean: "command" },
    "khu-daa":                          { fa: "خدا", mean: "God" },
    "ta-aa-laa":                        { fa: "تعالی", mean: "the Most High - said after God’s name" },
    "aan":                              { fa: "آن", mean: "that" },
    "bi-daan":                          { fa: "بدان", mean: "know (an order)" },
    "een":                              { fa: "این", mean: "this" },
    "mu-ji-za":                         { fa: "معجزه", mean: "miracle" },
    "na-mood":                          { fa: "نمود", mean: "showed; did" },
    "na-mo-dan":                        { fa: "نمودن", mean: "to do; to show; to seem" },
    "bi-go":                            { fa: "بگو", mean: "say, tell" },
    "ku-jaa":                           { fa: "کجا", mean: "where" },
    "roo-day":                          { fa: "رودی", mean: "a river" },
    "aab":                              { fa: "آب", mean: "water" },
    "ra-see-dand":                      { fa: "رسیدند", mean: "arrived" },
    "ra-see-dan":                       { fa: "رسیدن", mean: "to arrive, to reach" },
    "dast":                             { fa: "دست", mean: "hand" },
    "bi-gi-rift":                       { fa: "بگرفت", mean: "took" },
    "gi-rif-tan":                       { fa: "گرفتن", mean: "to take" },
    "har du":                           { fa: "هر دو", mean: "both" },
    "bar":                              { fa: "بر", mean: "on, upon" },
    "bar ro-yi aab":                    { fa: "بر روی آب", mean: "over the water" },
    "roy":                              { fa: "روی", mean: "face" },
    "ba-jaa-yay":                       { fa: "به‌جایی", mean: "to a place" },
    "rayg":                             { fa: "ریگ", mean: "sand" },
    "bi-si-yaar":                       { fa: "بسیار", mean: "much, very" },
    "jam":                              { fa: "جمع", mean: "gathered" },
    "jam kard":                         { fa: "جمع کرد", mean: "gathered" },
    "jam kar-dan":                      { fa: "جمع کردن", mean: "to gather" },
    "kard":                             { fa: "کرد", mean: "did, made" },
    "zar":                              { fa: "زر", mean: "gold" },
    "gar-dad":                          { fa: "گردد", mean: "become" },
    "gar-dee-dan":                      { fa: "گردیدن", mean: "to become, to turn" },
    "ha-ma":                            { fa: "همه", mean: "all, every" },
    "qis-mat":                          { fa: "قسمت", mean: "share, part" },
    "yak":                              { fa: "یک", mean: "one, a" },
    "ma-raa":                           { fa: "مرا", mean: "me; for me" },
    "daa-rad":                          { fa: "دارد", mean: "has" },
    "hirs":                             { fa: "حرص", mean: "greed" },
    "bi-deed":                          { fa: "بدید", mean: "saw" },
    "mu-qir":                           { fa: "مقر", mean: "confessing" },
    "mu-qir aa-mad":                    { fa: "مقر آمد", mean: "confessed" },
    "mu-qir aa-ma-dan":                 { fa: "مقر آمدن", mean: "to confess" },
    "man":                              { fa: "من", mean: "I" },
    "daa-ram":                          { fa: "دارم", mean: "I have" },
    "har sih":                          { fa: "هر سه", mean: "all three" },
    "bi-gu-zaasht":                     { fa: "بگذاشت", mean: "left" },
    "gu-zaash-tan":                     { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "bi-raft":                          { fa: "برفت", mean: "went away" },
    "fa-raa":                           { fa: "فرا", mean: "forth, beyond" },
    "fa-raa raa-hi way ra-see-dand":    { fa: "فرا راه وی رسیدند", mean: "came upon him on his way" },
    "raah":                             { fa: "راه", mean: "way, road" },
    "khaas-tand":                       { fa: "خواستند", mean: "wanted" },
    "bi-ku-shand":                      { fa: "بکشند", mean: "kill" },
    "bi-ba-rand":                       { fa: "ببرند", mean: "take away" },
    "bur-dan":                          { fa: "بردن", mean: "to take away, to carry" },
    "ma-ku-sheed":                      { fa: "مکشید", mean: "do not kill" },
    "har ya-kay":                       { fa: "هر یکی", mean: "each one" },
    "maa":                              { fa: "ما", mean: "we" },
    "see-ya-kay":                       { fa: "سیکی", mean: "a third (sih + ya-kay)" },
    "bar-gee-rad":                      { fa: "برگیرد", mean: "take" },
    "guf-tand":                         { fa: "گفتند", mean: "they said; here he said (plural for respect)" },
    "bi-fi-ris-taym":                   { fa: "بفرستیم", mean: "let us send" },
    "fi-ris-taa-dan":                   { fa: "فرستادن", mean: "to send" },
    "ta-aa-may":                        { fa: "طعامی", mean: "some food" },
    "aa-rad":                           { fa: "آرد", mean: "bring" },
    "aa-war-dan":                       { fa: "آوردن", mean: "to bring" },
    "bi-shud":                          { fa: "بشد", mean: "went (an old use of shud)" },
    "ta-aam":                           { fa: "طعام", mean: "food" },
    "kha-reed":                         { fa: "خرید", mean: "bought" },
    "kha-ree-dan":                      { fa: "خریدن", mean: "to buy" },
    "baa khaysh guft":                  { fa: "با خویش گفت", mean: "said to himself" },
    "khaysh":                           { fa: "خویش", mean: "own; self" },
    "af-sos":                           { fa: "افسوس", mean: "a pity; regret" },
    "baa-shad":                         { fa: "باشد", mean: "be, should be" },
    "za-hr":                            { fa: "زهر", mean: "poison" },
    "ku-nam":                           { fa: "کنم", mean: "I put; I do" },
    "ee-shaan":                         { fa: "ایشان", mean: "they" },
    "bi-kho-rand":                      { fa: "بخورند", mean: "eat" },
    "bi-mee-rand":                      { fa: "بمیرند", mean: "die" },
    "mur-dan":                          { fa: "مردن", mean: "to die" },
    "jum-la":                           { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "bar-gee-ram":                      { fa: "برگیرم", mean: "I take" },
    "kas":                              { fa: "کس", mean: "person" },
    "chi":                              { fa: "چه", mean: "what; how" },
    "boo-dast":                         { fa: "بودست", mean: "has been (boo-da ast)" },
    "baa-yad":                          { fa: "باید", mean: "must, should" },
    "aa-yad":                           { fa: "آید", mean: "comes" },
    "bi-ku-shaym":                      { fa: "بکشیم", mean: "let us kill" },
    "zar-haa":                          { fa: "زرها", mean: "gold, the gold coins" },
    "bar-gee-raym":                     { fa: "برگیریم", mean: "let us take" },
    "bi-kush-tand":                     { fa: "بکشتند", mean: "killed" },
    "bi-mur-dand":                      { fa: "بمردند", mean: "died" },
    "bi-maand":                         { fa: "بماند", mean: "remained" },
    "maan-dan":                         { fa: "ماندن", mean: "to remain, to stay" },
    "bi-gu-zasht":                      { fa: "بگذشت", mean: "passed by" },
    "deed":                             { fa: "دید", mean: "saw" },
    "kush-ta":                          { fa: "کشته", mean: "killed" },
    "yaa":                              { fa: "یا", mean: "or" },
    "yaa as-haab":                      { fa: "یا اصحاب", mean: "O companions" },
    "as-haab":                          { fa: "اصحاب", mean: "companions" },
    "dun-yaa":                          { fa: "دنیا", mean: "world" },
    "chu-neen":                         { fa: "چنین", mean: "so, like this" },
    "ha-zar":                           { fa: "حذر", mean: "caution, keeping away" },
    "ha-zar ku-need":                   { fa: "حذر کنید", mean: "beware" },
    "ha-zar kar-dan":                   { fa: "حذر کردن", mean: "to beware, to keep away" },
    "ku-need":                          { fa: "کنید", mean: "do (said to more than one)" },
    "hi-kaa-yat":                       { fa: "حکایت", mean: "story" },
    "ma-loom":                          { fa: "معلوم", mean: "clear, known" },
    "ma-loom shud":                     { fa: "معلوم شد", mean: "it became clear" },
    "ma-loom shu-dan":                  { fa: "معلوم شدن", mean: "to become clear" },
    "a-gar":                            { fa: "اگر", mean: "if" },
    "us-taad":                          { fa: "استاد", mean: "master, teacher" },
    "mu-az-zim":                        { fa: "معزم", mean: "snake charmer, one who says spells" },
    "aw-laa-tar":                       { fa: "اولی‌تر", mean: "better, more fitting" },
    "aw-laa-tar ki":                    { fa: "اولی‌تر که", mean: "it is better that" },
    "maal":                             { fa: "مال", mean: "wealth, property" },
    "na-ni-ga-rad":                     { fa: "ننگرد", mean: "does not look" },
    "ni-ga-ris-tan":                    { fa: "نگریستن", mean: "to look, to gaze" },
    "gird":                             { fa: "گرد", mean: "round (gird baad, a whirlwind)" },
    "gir-di way na-gar-dad":            { fa: "گرد وی نگردد", mean: "does not go near it" },
    "na-gar-dad":                       { fa: "نگردد", mean: "does not go (around); does not become" },
    "ma-gar":                           { fa: "مگر", mean: "except; unless" },
    "ba qad-ri haa-jat":                { fa: "به قدر حاجت", mean: "as much as is needed" },
    "qadr":                             { fa: "قدر", mean: "amount" },
    "haa-jat":                          { fa: "حاجت", mean: "need" },
    "maar":                             { fa: "مار", mean: "snake" },
    "maar af-saa":                      { fa: "مار افسا", mean: "a snake charmer" },
    "af-saa":                           { fa: "افسا", mean: "charming (maar af-saa, snake charmer)" },
    "aa-khir":                          { fa: "آخر", mean: "in the end; last" },
    "ha-laak":                          { fa: "هلاک", mean: "death, ruin" },
    "ba-dast":                          { fa: "به‌دست", mean: "in hand" },
    "ham-chu-naan":                     { fa: "همچنان", mean: "likewise, just so" },
    "ast":                              { fa: "است", mean: "is" },
    "say-yaa-day":                      { fa: "صیادی", mean: "a hunter" },
    "gun-jish-kay":                     { fa: "گنجشکی", mean: "a sparrow" },
    "khaa-hee":                         { fa: "خواهی", mean: "you want" },
    "bi-ku-sham":                       { fa: "بکشم", mean: "I kill" },
    "bi-kho-ram":                       { fa: "بخورم", mean: "I eat" },
    "chee-zay":                         { fa: "چیزی", mean: "something" },
    "na-yaa-yad":                       { fa: "نیاید", mean: "would not come" },
    "ra-haa":                           { fa: "رها", mean: "free, let go" },
    "ra-haa ku-nee":                    { fa: "رها کنی", mean: "let go" },
    "ra-haa kar-dan":                   { fa: "رها کردن", mean: "to leave, to release" },
    "ku-nee":                           { fa: "کنی", mean: "you do" },
    "su-khan":                          { fa: "سخن", mean: "speech, words" },
    "aa-mo-zam":                        { fa: "آموزم", mean: "I teach" },
    "aa-mokh-tan":                      { fa: "آموختن", mean: "to learn" },
    "bih-tar":                          { fa: "بهتر", mean: "better" },
    "bi-goy":                           { fa: "بگوی", mean: "say, tell" },
    "murgh":                            { fa: "مرغ", mean: "bird" },
    "dar":                              { fa: "در", mean: "in" },
    "dar aa-ghaaz":                     { fa: "در آغاز", mean: "at the start" },
    "aa-ghaaz":                         { fa: "آغاز", mean: "beginning" },
    "bi-go-yam":                        { fa: "بگویم", mean: "I say" },
    "koh":                              { fa: "کوه", mean: "mountain" },
    "sha-wam":                          { fa: "شوم", mean: "I go; I become" },
    "aw-wal":                           { fa: "اول", mean: "first" },
    "har-chi":                          { fa: "هرچه", mean: "whatever" },
    "has-rat":                          { fa: "حسرت", mean: "regret" },
    "has-rat ma-khor":                  { fa: "حسرت مخور", mean: "do not grieve" },
    "has-rat khor-dan":                 { fa: "حسرت خوردن", mean: "to grieve, to regret" },
    "ma-khor":                          { fa: "مخور", mean: "do not eat" },
    "di-rakht":                         { fa: "درخت", mean: "tree" },
    "bi-ni-shast":                      { fa: "بنشست", mean: "sat" },
    "ni-shas-tan":                      { fa: "نشستن", mean: "to sit" },
    "dee-ga-ray":                       { fa: "دیگری", mean: "someone else" },
    "mu-haal":                          { fa: "محال", mean: "impossible" },
    "har-giz":                          { fa: "هرگز", mean: "ever; with a no, never" },
    "baa-war":                          { fa: "باور", mean: "belief" },
    "baa-war ma-kun":                   { fa: "باور مکن", mean: "do not believe" },
    "baa-war kar-dan":                  { fa: "باور کردن", mean: "to believe" },
    "ma-kun":                           { fa: "مکن", mean: "do not do" },
    "pa-reed":                          { fa: "پرید", mean: "flew" },
    "pa-ree-dan":                       { fa: "پریدن", mean: "to fly, to jump" },
    "sar":                              { fa: "سر", mean: "head" },
    "ni-shast":                         { fa: "نشست", mean: "sat" },
    "ay":                               { fa: "ای", mean: "O (when calling someone)" },
    "bad-bakht":                        { fa: "بدبخت", mean: "wretch, unlucky one" },
    "bi-kush-tee":                      { fa: "بکشتی", mean: "had you killed" },
    "shi-kam":                          { fa: "شکم", mean: "belly" },
    "daa-na":                           { fa: "دانه", mean: "grain, bead" },
    "mur-waa-reed":                     { fa: "مروارید", mean: "pearl" },
    "beest":                            { fa: "بیست", mean: "twenty" },
    "mis-qaal":                         { fa: "مثقال", mean: "mithqal, a weight of about four and a half grams" },
    "ta-waan-ga-ray":                   { fa: "توانگری", mean: "a rich man" },
    "shu-dee":                          { fa: "شدی", mean: "you would have become" },
    "dar-way-shee":                     { fa: "درویشی", mean: "poverty" },
    "raah na-yaaf-tee":                 { fa: "راه نیافتی", mean: "would never have found its way" },
    "raah yaaf-tan":                    { fa: "راه یافتن", mean: "to find a way in" },
    "na-yaaf-tee":                      { fa: "نیافتی", mean: "would not have found" },
    "yaaf-tan":                         { fa: "یافتن", mean: "to find" },
    "an-gusht":                         { fa: "انگشت", mean: "finger" },
    "an-gusht dar dan-daan gi-rift":    { fa: "انگشت در دندان گرفت", mean: "bit his finger in regret - literally took a finger between his teeth" },
    "dan-daan":                         { fa: "دندان", mean: "tooth" },
    "gi-rift":                          { fa: "گرفت", mean: "took; began" },
    "da-reegh":                         { fa: "دریغ", mean: "regret" },
    "da-reegh wa has-rat ha-mee-khurd": { fa: "دریغ و حسرت همی‌خورد", mean: "was full of regret" },
    "ha-mee-khurd":                     { fa: "همی‌خورد", mean: "kept eating; (with has-rat) kept regretting" },
    "baar":                             { fa: "بار", mean: "time, occasion; load" },
    "sa-wum":                           { fa: "سوم", mean: "third" },
    "fa-raa-mosh":                      { fa: "فراموش", mean: "forgotten" },
    "fa-raa-mosh kar-dee":              { fa: "فراموش کردی", mean: "forgot" },
    "fa-raa-mosh kar-dan":              { fa: "فراموش کردن", mean: "to forget" },
    "kar-dee":                          { fa: "کردی", mean: "you did" },
    "guf-tam":                          { fa: "گفتم", mean: "I said" },
    "gu-zash-ta":                       { fa: "گذشته", mean: "the past; passed" },
    "an-doh":                           { fa: "اندوه", mean: "sorrow" },
    "an-doh ma-khor":                   { fa: "اندوه مخور", mean: "do not grieve" },
    "an-doh khor-dan":                  { fa: "اندوه خوردن", mean: "to grieve" },
    "par":                              { fa: "پر", mean: "feather; wing" },
    "baal":                             { fa: "بال", mean: "wing" },
    "gosht":                            { fa: "گوشت", mean: "flesh, meat" },
    "dah":                              { fa: "ده", mean: "ten" },
    "na-baa-shad":                      { fa: "نباشد", mean: "is not" },
    "chi-hil":                          { fa: "چهل", mean: "forty" },
    "chi-goo-na":                       { fa: "چگونه", mean: "how" },
    "soo-rat":                          { fa: "صورت", mean: "face, outward form" },
    "soo-rat ban-dad":                  { fa: "صورت بندد", mean: "could happen, could be" },
    "soo-rat bas-tan":                  { fa: "صورت بستن", mean: "to be possible, to take shape" },
    "ban-dad":                          { fa: "بندد", mean: "(with soo-rat) could happen" },
    "bas-tan":                          { fa: "بستن", mean: "to close, to tie" },
    "boo-dee":                          { fa: "بودی", mean: "had there been" },
    "gham":                             { fa: "غم", mean: "grief, sorrow" },
    "gham khor-dan":                    { fa: "غم خوردن", mean: "to grieve" },
    "faa-yi-da":                        { fa: "فایده", mean: "use, benefit" },
    "bi-guft":                          { fa: "بگفت", mean: "said" },
    "bi-pa-reed":                       { fa: "بپرید", mean: "flew away" },
    "ma-sal":                           { fa: "مثل", mean: "tale, proverb" },
    "ba-raa-yi":                        { fa: "برای", mean: "for" },
    "guf-ta":                           { fa: "گفته", mean: "said" },
    "guf-ta ha-mee-aa-yad":             { fa: "گفته همی‌آید", mean: "is told" },
    "ha-mee-aa-yad":                    { fa: "همی‌آید", mean: "comes; (with guf-ta) is told" },
    "sha-wad":                          { fa: "شود", mean: "become" },
    "ta-ma":                            { fa: "طمع", mean: "greed" },
    "pa-deed":                          { fa: "پدید", mean: "visible, appearing" },
    "pa-deed aa-yad":                   { fa: "پدید آید", mean: "appears" },
    "pa-deed aa-ma-dan":                { fa: "پدید آمدن", mean: "to appear" },
    "mu-haa-laat":                      { fa: "محالات", mean: "impossible things" },
    "baa-war ku-nand":                  { fa: "باور کنند", mean: "they believe" },
    "ku-nand":                          { fa: "کنند", mean: "they do" },
    "ib-nus-sam-maak":                  { fa: "ابن‌السماک", mean: "Ibn al-Sammak, a preacher of Kufa in the 700s" },
    "go-yad":                           { fa: "گوید", mean: "says" },
    "ra-sa-nay":                        { fa: "رسنی", mean: "a rope" },
    "gar-dan":                          { fa: "گردن", mean: "neck" },
    "ban-day":                          { fa: "بندی", mean: "a chain, a bond" },
    "paa":                              { fa: "پا", mean: "foot, leg" },
    "ra-san":                           { fa: "رسن", mean: "rope" },
    "khud":                             { fa: "خود", mean: "own; self" },
    "bay-roon":                         { fa: "بیرون", mean: "out" },
    "kun":                              { fa: "کن", mean: "do, make" },
    "band":                             { fa: "بند", mean: "bond, chain" },
    "bar-khay-zad":                     { fa: "برخیزد", mean: "rises; comes off" },
    "bar-khaas-tan":                    { fa: "برخاستن", mean: "to rise, to get up" }
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
    "say": "zi-yaan-haa-yi aaz-man-dee",
    "mean": "The harms of greed",
    "words": [
      [
        "زیان‌های",
        "zi-yaan-haa-yi",
        "zi-yaan-haa"
      ],
      [
        "آزمندی",
        "aaz-man-dee",
        "aaz-man-dee"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "...ri-waa-yat kar-da and ki mar-day ba ee-saa a-lay-his-sa-laam guft: khaa-ham ki an-dar soh-ba-ti tu baa-sham.",
        "mean": "…They tell that a man said to Jesus (peace be upon him): I want to be in your company.",
        "words": [
          [
            "...روایت",
            "ri-waa-yat",
            "ri-waa-yat",
            "ri-waa-yat kar-da and",
            "ri-waa-yat kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "ri-waa-yat kar-da and",
            "kar-dan",
            "ri-waa-yat kar-dan"
          ],
          [
            "اند",
            "and",
            "and",
            "ri-waa-yat kar-da and",
            "ri-waa-yat kar-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مردی",
            "mar-day",
            "mar-day"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "خواهم",
            "khaa-ham",
            "khaa-ham",
            "khaas-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar",
            "an-dar soh-ba-ti tu baa-sham"
          ],
          [
            "صحبت",
            "soh-ba-ti",
            "soh-bat",
            "an-dar soh-ba-ti tu baa-sham"
          ],
          [
            "تو",
            "tu",
            "tu",
            "an-dar soh-ba-ti tu baa-sham"
          ],
          [
            "باشم.",
            "baa-sham",
            "baa-sham",
            "an-dar soh-ba-ti tu baa-sham",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "baa way ba ham bi-raf-tand, taa ba ki-naa-ri joy,",
        "mean": "They set off together, as far as the bank of a stream,",
        "words": [
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
            "به",
            "ba",
            "ba",
            "ba ham"
          ],
          [
            "هم",
            "ham",
            "ham",
            "ba ham"
          ],
          [
            "برفتند،",
            "bi-raf-tand",
            "bi-raf-tand",
            "raf-tan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کنار",
            "ki-naa-ri",
            "ki-naar"
          ],
          [
            "جوی،",
            "joy",
            "joy"
          ]
        ]
      },
      {
        "say": "wa sih naan daash-tand, mard ya-kay bi-duz-deed wa ee-saa a-lay-his-sa-laam ba ki-naa-ra-yi joo shu-da bood;",
        "mean": "and they had three loaves of bread; the man stole one while Jesus (peace be upon him) had gone to the edge of the stream;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "نان",
            "naan",
            "naan"
          ],
          [
            "داشتند،",
            "daash-tand",
            "daash-tand",
            "daash-tan"
          ],
          [
            "مرد",
            "mard",
            "mard"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "بدزدید",
            "bi-duz-deed",
            "bi-duz-deed",
            "duz-dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کنارهٔ",
            "ki-naa-ra-yi",
            "ki-naa-ra"
          ],
          [
            "جو",
            "joo",
            "joo"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
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
        "say": "choon baaz aa-mad naan na-deed, guft: ki bar-gi-rift?",
        "mean": "when he came back he did not see the bread, and said: Who took it?",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz aa-mad",
            "baaz aa-ma-dan"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "baaz aa-mad",
            "aa-ma-dan",
            "baaz aa-ma-dan"
          ],
          [
            "نان",
            "naan",
            "naan"
          ],
          [
            "ندید،",
            "na-deed",
            "na-deed",
            "dee-dan"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "برگرفت؟",
            "bar-gi-rift",
            "bar-gi-rift",
            "bar-gi-rif-tan"
          ]
        ]
      },
      {
        "say": "guft: na-daa-nam;",
        "mean": "He said: I do not know.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "ندانم؛",
            "na-daa-nam",
            "na-daa-nam",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "pas az aan-jaa bi-gu-zash-tand, aa-ho-yay ha-mee aa-mad baa du bach-cha,",
        "mean": "Then they went on from there; a gazelle was coming with two young ones,",
        "words": [
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
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "بگذشتند،",
            "bi-gu-zash-tand",
            "bi-gu-zash-tand",
            "gu-zash-tan"
          ],
          [
            "آهویی",
            "aa-ho-yay",
            "aa-ho-yay"
          ],
          [
            "همی",
            "ha-mee",
            "ha-mee",
            "ha-mee aa-mad"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "ha-mee aa-mad",
            "aa-ma-dan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "بچه،",
            "bach-cha",
            "bach-cha"
          ]
        ]
      },
      {
        "say": "ee-saa a-lay-his-sa-laam ya-kay raa aa-waaz daad, naz-dee-ki way aa-mad, way raa bi-kusht wa an-dar waqt bir-yaan shud wa har du sayr bi-khor-dand;",
        "mean": "Jesus (peace be upon him) called one, it came near him, he killed it, at once it was roasted, and both of them ate their fill;",
        "words": [
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آواز",
            "aa-waaz",
            "aa-waaz",
            "aa-waaz daad",
            "aa-waaz daa-dan"
          ],
          [
            "داد،",
            "daad",
            "daad",
            "aa-waaz daad",
            "daa-dan",
            "aa-waaz daa-dan"
          ],
          [
            "نزدیک",
            "naz-dee-ki",
            "naz-deek"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "آمد،",
            "aa-mad",
            "aa-mad",
            "aa-ma-dan"
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
            "بکشت",
            "bi-kusht",
            "bi-kusht",
            "kush-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar",
            "an-dar waqt"
          ],
          [
            "وقت",
            "waqt",
            "waqt",
            "an-dar waqt"
          ],
          [
            "بریان",
            "bir-yaan",
            "bir-yaan"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "سیر",
            "sayr",
            "sayr",
            "sayr bi-khor-dand"
          ],
          [
            "بخوردند؛",
            "bi-khor-dand",
            "bi-khor-dand",
            "sayr bi-khor-dand",
            "khor-dan"
          ]
        ]
      },
      {
        "say": "pas guft: zin-da shaw, zin-da shud ba far-maa-ni khu-daa-yi ta-aa-laa,",
        "mean": "then he said: Come alive! And it came alive by the command of God the Most High.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "زنده",
            "zin-da",
            "zin-da"
          ],
          [
            "شو،",
            "shaw",
            "shaw",
            "shu-dan"
          ],
          [
            "زنده",
            "zin-da",
            "zin-da"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فرمان",
            "far-maa-ni",
            "far-maan"
          ],
          [
            "خدای",
            "khu-daa-yi",
            "khu-daa"
          ],
          [
            "تعالی،",
            "ta-aa-laa",
            "ta-aa-laa"
          ]
        ]
      },
      {
        "say": "pas aan mard raa guft bi-daan ki khu-daa-yi ta-aa-laa een mu-ji-za ba tu na-mood, bi-go taa naan ku-jaa shud?",
        "mean": "Then he said to that man: Know that God the Most High showed you this miracle; tell me, where did the bread go?",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "مرد",
            "mard",
            "mard"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "بدان",
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
            "خدای",
            "khu-daa-yi",
            "khu-daa"
          ],
          [
            "تعالی",
            "ta-aa-laa",
            "ta-aa-laa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "معجزه",
            "mu-ji-za",
            "mu-ji-za"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "نمود،",
            "na-mood",
            "na-mood",
            "na-mo-dan"
          ],
          [
            "بگو",
            "bi-go",
            "bi-go",
            "guf-tan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "نان",
            "naan",
            "naan"
          ],
          [
            "کجا",
            "ku-jaa",
            "ku-jaa"
          ],
          [
            "شد؟",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "guft na-daa-nam.",
        "mean": "He said: I do not know.",
        "words": [
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "ندانم.",
            "na-daa-nam",
            "na-daa-nam",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "az aan-jaa bi-raf-tand ba roo-day aab ra-see-dand.",
        "mean": "They went on from there and came to a river.",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "برفتند",
            "bi-raf-tand",
            "bi-raf-tand",
            "raf-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "رودی",
            "roo-day",
            "roo-day"
          ],
          [
            "آب",
            "aab",
            "aab"
          ],
          [
            "رسیدند.",
            "ra-see-dand",
            "ra-see-dand",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "ee-saa a-lay-his-sa-laam das-ti way bi-gi-rift wa har du bar ro-yi aab bi-gu-zash-tand,",
        "mean": "Jesus (peace be upon him) took his hand and both of them crossed over the water,",
        "words": [
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "بگرفت",
            "bi-gi-rift",
            "bi-gi-rift",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هر",
            "har",
            "har",
            "har du"
          ],
          [
            "دو",
            "du",
            "du",
            "har du"
          ],
          [
            "بر",
            "bar",
            "bar",
            "bar ro-yi aab"
          ],
          [
            "روی",
            "ro-yi",
            "roy",
            "bar ro-yi aab"
          ],
          [
            "آب",
            "aab",
            "aab",
            "bar ro-yi aab"
          ],
          [
            "بگذشتند،",
            "bi-gu-zash-tand",
            "bi-gu-zash-tand",
            "gu-zash-tan"
          ]
        ]
      },
      {
        "say": "guft bi-daan ki khu-daa-yi een mu-ji-za ba tu na-mood, bi-go taa naan ku-jaa shud?",
        "mean": "and he said: Know that God showed you this miracle; tell me, where did the bread go?",
        "words": [
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "بدان",
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
            "خدای",
            "khu-daa-yi",
            "khu-daa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "معجزه",
            "mu-ji-za",
            "mu-ji-za"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "نمود،",
            "na-mood",
            "na-mood",
            "na-mo-dan"
          ],
          [
            "بگو",
            "bi-go",
            "bi-go",
            "guf-tan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "نان",
            "naan",
            "naan"
          ],
          [
            "کجا",
            "ku-jaa",
            "ku-jaa"
          ],
          [
            "شد؟",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "guft na-daa-nam,",
        "mean": "He said: I do not know.",
        "words": [
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "ندانم،",
            "na-daa-nam",
            "na-daa-nam",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "az aan-jaa bi-raf-tand wa ba-jaa-yay ra-see-dand ki ray-gi bi-si-yaar bood,",
        "mean": "They went on from there and came to a place where there was a lot of sand;",
        "words": [
          [
            "از",
            "az",
            "az"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "برفتند",
            "bi-raf-tand",
            "bi-raf-tand",
            "raf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "به‌جایی",
            "ba-jaa-yay",
            "ba-jaa-yay"
          ],
          [
            "رسیدند",
            "ra-see-dand",
            "ra-see-dand",
            "ra-see-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ریگ",
            "ray-gi",
            "rayg"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "بود،",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "ee-saa a-lay-his-sa-laam aan rayg jam kard wa guft ba far-maa-ni khu-daa-yi zar gar-dad,",
        "mean": "Jesus (peace be upon him) gathered that sand and said: By God's command, let it become gold.",
        "words": [
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "ریگ",
            "rayg",
            "rayg"
          ],
          [
            "جمع",
            "jam",
            "jam",
            "jam kard",
            "jam kar-dan"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "jam kard",
            "kar-dan",
            "jam kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "فرمان",
            "far-maa-ni",
            "far-maan"
          ],
          [
            "خدای",
            "khu-daa-yi",
            "khu-daa"
          ],
          [
            "زر",
            "zar",
            "zar"
          ],
          [
            "گردد،",
            "gar-dad",
            "gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "ha-ma zar shud,",
        "mean": "It all became gold;",
        "words": [
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "زر",
            "zar",
            "zar"
          ],
          [
            "شد،",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "pas sih qis-mat kard wa guft: yak qis-mat ma-raa wa yak qis-mat tu raa wa yak qis-mat aan raa ki naan daa-rad,",
        "mean": "then he made three shares and said: One share for me, one share for you, and one share for whoever has the bread.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "قسمت",
            "qis-mat",
            "qis-mat"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "قسمت",
            "qis-mat",
            "qis-mat"
          ],
          [
            "مرا",
            "ma-raa",
            "ma-raa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "قسمت",
            "qis-mat",
            "qis-mat"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "قسمت",
            "qis-mat",
            "qis-mat"
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
            "که",
            "ki",
            "ki"
          ],
          [
            "نان",
            "naan",
            "naan"
          ],
          [
            "دارد،",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "mard az hir-si zar ki bi-deed mu-qir aa-mad ki naan man daa-ram,",
        "mean": "Out of greed for the gold he saw, the man confessed: I have the bread.",
        "words": [
          [
            "مرد",
            "mard",
            "mard"
          ],
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
            "زر",
            "zar",
            "zar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بدید",
            "bi-deed",
            "bi-deed",
            "dee-dan"
          ],
          [
            "مقر",
            "mu-qir",
            "mu-qir",
            "mu-qir aa-mad",
            "mu-qir aa-ma-dan"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "mu-qir aa-mad",
            "aa-ma-dan",
            "mu-qir aa-ma-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "نان",
            "naan",
            "naan"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "دارم،",
            "daa-ram",
            "daa-ram",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "ee-saa a-lay-his-sa-laam guft har sih tu raa wa ba way bi-gu-zaasht wa bi-raft,",
        "mean": "Jesus (peace be upon him) said: All three are yours, and he left them to him and went away.",
        "words": [
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "هر",
            "har",
            "har",
            "har sih"
          ],
          [
            "سه",
            "sih",
            "sih",
            "har sih"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "را",
            "raa",
            "raa"
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
            "بگذاشت",
            "bi-gu-zaasht",
            "bi-gu-zaasht",
            "gu-zaash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "برفت،",
            "bi-raft",
            "bi-raft",
            "raf-tan"
          ]
        ]
      },
      {
        "say": "du mard fa-raa raa-hi way ra-see-dand wa khaas-tand ki way raa bi-ku-shand wa zar bi-ba-rand,",
        "mean": "Two men came upon him on his way and wanted to kill him and take the gold;",
        "words": [
          [
            "دو",
            "du",
            "du"
          ],
          [
            "مرد",
            "mard",
            "mard"
          ],
          [
            "فرا",
            "fa-raa",
            "fa-raa",
            "fa-raa raa-hi way ra-see-dand"
          ],
          [
            "راه",
            "raa-hi",
            "raah",
            "fa-raa raa-hi way ra-see-dand"
          ],
          [
            "وی",
            "way",
            "way",
            "fa-raa raa-hi way ra-see-dand"
          ],
          [
            "رسیدند",
            "ra-see-dand",
            "ra-see-dand",
            "fa-raa raa-hi way ra-see-dand",
            "ra-see-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خواستند",
            "khaas-tand",
            "khaas-tand",
            "khaas-tan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "بکشند",
            "bi-ku-shand",
            "bi-ku-shand",
            "kush-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زر",
            "zar",
            "zar"
          ],
          [
            "ببرند،",
            "bi-ba-rand",
            "bi-ba-rand",
            "bur-dan"
          ]
        ]
      },
      {
        "say": "guft ma-raa ma-ku-sheed wa har ya-kay az maa see-ya-kay bar-gee-rad,",
        "mean": "he said: Do not kill me; let each of us take a third.",
        "words": [
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "مرا",
            "ma-raa",
            "ma-raa"
          ],
          [
            "مکشید",
            "ma-ku-sheed",
            "ma-ku-sheed",
            "kush-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هر",
            "har",
            "har",
            "har ya-kay"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay",
            "har ya-kay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "سیکی",
            "see-ya-kay",
            "see-ya-kay"
          ],
          [
            "برگیرد،",
            "bar-gee-rad",
            "bar-gee-rad",
            "bar-gi-rif-tan"
          ]
        ]
      },
      {
        "say": "pas guf-tand ya-kay raa bi-fi-ris-taym taa maa raa ta-aa-may aa-rad.",
        "mean": "Then they said: Let us send one of us to bring us some food.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "گفتند",
            "guf-tand",
            "guf-tand",
            "guf-tan"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بفرستیم",
            "bi-fi-ris-taym",
            "bi-fi-ris-taym",
            "fi-ris-taa-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "طعامی",
            "ta-aa-may",
            "ta-aa-may"
          ],
          [
            "آرد.",
            "aa-rad",
            "aa-rad",
            "aa-war-dan"
          ]
        ]
      },
      {
        "say": "een mard bi-shud wa ta-aam kha-reed wa baa khaysh guft af-sos baa-shad ki een zar bi-ba-rand,",
        "mean": "This man went and bought food and said to himself: What a pity if they take this gold;",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "مرد",
            "mard",
            "mard"
          ],
          [
            "بشد",
            "bi-shud",
            "bi-shud",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "طعام",
            "ta-aam",
            "ta-aam"
          ],
          [
            "خرید",
            "kha-reed",
            "kha-reed",
            "kha-ree-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "با",
            "baa",
            "baa",
            "baa khaysh guft"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh",
            "baa khaysh guft"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "baa khaysh guft",
            "guf-tan"
          ],
          [
            "افسوس",
            "af-sos",
            "af-sos"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "زر",
            "zar",
            "zar"
          ],
          [
            "ببرند،",
            "bi-ba-rand",
            "bi-ba-rand",
            "bur-dan"
          ]
        ]
      },
      {
        "say": "man za-hr an-dar een ta-aam ku-nam taa ee-shaan bi-kho-rand wa bi-mee-rand wa man jum-la zar bar-gee-ram,",
        "mean": "I will put poison in this food so that they eat it and die, and I will take all the gold.",
        "words": [
          [
            "من",
            "man",
            "man"
          ],
          [
            "زهر",
            "za-hr",
            "za-hr"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "طعام",
            "ta-aam",
            "ta-aam"
          ],
          [
            "کنم",
            "ku-nam",
            "ku-nam",
            "kar-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "بخورند",
            "bi-kho-rand",
            "bi-kho-rand",
            "khor-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بمیرند",
            "bi-mee-rand",
            "bi-mee-rand",
            "mur-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "جمله",
            "jum-la",
            "jum-la"
          ],
          [
            "زر",
            "zar",
            "zar"
          ],
          [
            "برگیرم،",
            "bar-gee-ram",
            "bar-gee-ram",
            "bar-gi-rif-tan"
          ]
        ]
      },
      {
        "say": "wa aan du kas guf-tand chi boo-dast ki zar ba way baa-yad daad;",
        "mean": "And those two said: Why should the gold be given to him?",
        "words": [
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
            "دو",
            "du",
            "du"
          ],
          [
            "کس",
            "kas",
            "kas"
          ],
          [
            "گفتند",
            "guf-tand",
            "guf-tand",
            "guf-tan"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "بودست",
            "boo-dast",
            "boo-dast",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "زر",
            "zar",
            "zar"
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
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "داد؛",
            "daad",
            "daad",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "choon baaz aa-yad way raa bi-ku-shaym wa zar-haa bar-gee-raym;",
        "mean": "When he comes back, let us kill him and take the gold.",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "باز",
            "baaz",
            "baaz"
          ],
          [
            "آید",
            "aa-yad",
            "aa-yad",
            "aa-ma-dan"
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
            "بکشیم",
            "bi-ku-shaym",
            "bi-ku-shaym",
            "kush-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زرها",
            "zar-haa",
            "zar-haa"
          ],
          [
            "برگیریم؛",
            "bar-gee-raym",
            "bar-gee-raym",
            "bar-gi-rif-tan"
          ]
        ]
      },
      {
        "say": "choon baaz aa-mad way raa bi-kush-tand wa ee-shaan har du ta-aam bi-khor-dand wa bi-mur-dand,",
        "mean": "When he came back they killed him, and both of them ate the food and died;",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "باز",
            "baaz",
            "baaz",
            "baaz aa-mad",
            "baaz aa-ma-dan"
          ],
          [
            "آمد",
            "aa-mad",
            "aa-mad",
            "baaz aa-mad",
            "aa-ma-dan",
            "baaz aa-ma-dan"
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
            "بکشتند",
            "bi-kush-tand",
            "bi-kush-tand",
            "kush-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
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
            "طعام",
            "ta-aam",
            "ta-aam"
          ],
          [
            "بخوردند",
            "bi-khor-dand",
            "bi-khor-dand",
            "khor-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بمردند،",
            "bi-mur-dand",
            "bi-mur-dand",
            "mur-dan"
          ]
        ]
      },
      {
        "say": "zar-haa bi-maand,",
        "mean": "the gold was left there.",
        "words": [
          [
            "زرها",
            "zar-haa",
            "zar-haa"
          ],
          [
            "بماند،",
            "bi-maand",
            "bi-maand",
            "maan-dan"
          ]
        ]
      },
      {
        "say": "ee-saa a-lay-his-sa-laam bar aan-jaa bi-gu-zasht zar jum-la aan-jaa deed wa har sih kush-ta,",
        "mean": "Jesus (peace be upon him) passed by there and saw all the gold there and all three killed;",
        "words": [
          [
            "عیسی",
            "ee-saa",
            "ee-saa"
          ],
          [
            "(ع)",
            "a-lay-his-sa-laam",
            "a-lay-his-sa-laam"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "بگذشت",
            "bi-gu-zasht",
            "bi-gu-zasht",
            "gu-zash-tan"
          ],
          [
            "زر",
            "zar",
            "zar"
          ],
          [
            "جمله",
            "jum-la",
            "jum-la"
          ],
          [
            "آن‌جا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "دید",
            "deed",
            "deed",
            "dee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "کشته،",
            "kush-ta",
            "kush-ta",
            "kush-tan"
          ]
        ]
      },
      {
        "say": "guft: yaa as-haab, dun-yaa chu-neen baa-shad az way ha-zar ku-need;",
        "mean": "he said: O companions, this is what the world is like; beware of it.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "یا",
            "yaa",
            "yaa",
            "yaa as-haab"
          ],
          [
            "اصحاب،",
            "as-haab",
            "as-haab",
            "yaa as-haab"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "حذر",
            "ha-zar",
            "ha-zar",
            "ha-zar ku-need",
            "ha-zar kar-dan"
          ],
          [
            "کنید؛",
            "ku-need",
            "ku-need",
            "ha-zar ku-need",
            "kar-dan",
            "ha-zar kar-dan"
          ]
        ]
      },
      {
        "say": "pas az een hi-kaa-yat ma-loom shud ki a-gar us-taad baa-shad wa mu-az-zim baa-shad aw-laa-tar ki an-dar maal na-ni-ga-rad wa gir-di way na-gar-dad;",
        "mean": "So this story shows that even a master, even a snake charmer, had better not look at wealth or go near it,",
        "words": [
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
            "این",
            "een",
            "een"
          ],
          [
            "حکایت",
            "hi-kaa-yat",
            "hi-kaa-yat"
          ],
          [
            "معلوم",
            "ma-loom",
            "ma-loom",
            "ma-loom shud",
            "ma-loom shu-dan"
          ],
          [
            "شد",
            "shud",
            "shud",
            "ma-loom shud",
            "shu-dan",
            "ma-loom shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "استاد",
            "us-taad",
            "us-taad"
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
            "معزم",
            "mu-az-zim",
            "mu-az-zim"
          ],
          [
            "باشد",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "اولی‌تر",
            "aw-laa-tar",
            "aw-laa-tar",
            "aw-laa-tar ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "aw-laa-tar ki"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "مال",
            "maal",
            "maal"
          ],
          [
            "ننگرد",
            "na-ni-ga-rad",
            "na-ni-ga-rad",
            "ni-ga-ris-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گرد",
            "gir-di",
            "gird",
            "gir-di way na-gar-dad"
          ],
          [
            "وی",
            "way",
            "way",
            "gir-di way na-gar-dad"
          ],
          [
            "نگردد؛",
            "na-gar-dad",
            "na-gar-dad",
            "gir-di way na-gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "ma-gar ba qad-ri haa-jat ki maar af-saa raa aa-khir ha-laak ba-das-ti maar bood....",
        "mean": "except as much as he needs, for in the end the snake charmer dies at the hand of the snake….",
        "words": [
          [
            "مگر",
            "ma-gar",
            "ma-gar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba qad-ri haa-jat"
          ],
          [
            "قدر",
            "qad-ri",
            "qadr",
            "ba qad-ri haa-jat"
          ],
          [
            "حاجت",
            "haa-jat",
            "haa-jat",
            "ba qad-ri haa-jat"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مار",
            "maar",
            "maar",
            "maar af-saa"
          ],
          [
            "افسا",
            "af-saa",
            "af-saa",
            "maar af-saa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "آخر",
            "aa-khir",
            "aa-khir"
          ],
          [
            "هلاک",
            "ha-laak",
            "ha-laak"
          ],
          [
            "به‌دست",
            "ba-das-ti",
            "ba-dast"
          ],
          [
            "مار",
            "maar",
            "maar"
          ],
          [
            "بود....",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ham-chu-naan ast ki say-yaa-day gun-jish-kay bi-gi-rift, guft: ma-raa chi khaa-hee kard?",
        "mean": "It is like this: a hunter caught a sparrow, and the sparrow said: What will you do with me?",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
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
            "صیادی",
            "say-yaa-day",
            "say-yaa-day"
          ],
          [
            "گنجشکی",
            "gun-jish-kay",
            "gun-jish-kay"
          ],
          [
            "بگرفت،",
            "bi-gi-rift",
            "bi-gi-rift",
            "gi-rif-tan"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "مرا",
            "ma-raa",
            "ma-raa"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "خواهی",
            "khaa-hee",
            "khaa-hee",
            "khaas-tan"
          ],
          [
            "کرد؟",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "guft: bi-ku-sham wa bi-kho-ram.",
        "mean": "He said: I will kill you and eat you.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "بکشم",
            "bi-ku-sham",
            "bi-ku-sham",
            "kush-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بخورم.",
            "bi-kho-ram",
            "bi-kho-ram",
            "khor-dan"
          ]
        ]
      },
      {
        "say": "guft: az khor-da-ni man chee-zay na-yaa-yad, a-gar ma-raa ra-haa ku-nee sih su-khan ba tu aa-mo-zam ki tu raa bih-tar az khor-da-ni man,",
        "mean": "It said: Nothing will come of eating me; if you let me go, I will teach you three sayings that are better for you than eating me.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "خوردن",
            "khor-da-ni",
            "khor-dan"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "چیزی",
            "chee-zay",
            "chee-zay"
          ],
          [
            "نیاید،",
            "na-yaa-yad",
            "na-yaa-yad",
            "aa-ma-dan"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "مرا",
            "ma-raa",
            "ma-raa"
          ],
          [
            "رها",
            "ra-haa",
            "ra-haa",
            "ra-haa ku-nee",
            "ra-haa kar-dan"
          ],
          [
            "کنی",
            "ku-nee",
            "ku-nee",
            "ra-haa ku-nee",
            "kar-dan",
            "ra-haa kar-dan"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "آموزم",
            "aa-mo-zam",
            "aa-mo-zam",
            "aa-mokh-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بهتر",
            "bih-tar",
            "bih-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "خوردن",
            "khor-da-ni",
            "khor-dan"
          ],
          [
            "من،",
            "man",
            "man"
          ]
        ]
      },
      {
        "say": "guft: bi-goy,",
        "mean": "He said: Tell them.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "بگوی،",
            "bi-goy",
            "bi-goy",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "murgh guft: yak su-khan dar aa-ghaaz bi-go-yam wa ya-kay aan waqt ki ma-raa ra-haa ku-nee wa ya-kay aan waqt ki bar koh sha-wam,",
        "mean": "The bird said: I will tell one saying at the start, one when you let me go, and one when I reach the mountain.",
        "words": [
          [
            "مرغ",
            "murgh",
            "murgh"
          ],
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar aa-ghaaz"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz",
            "dar aa-ghaaz"
          ],
          [
            "بگویم",
            "bi-go-yam",
            "bi-go-yam",
            "guf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "وقت",
            "waqt",
            "waqt"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مرا",
            "ma-raa",
            "ma-raa"
          ],
          [
            "رها",
            "ra-haa",
            "ra-haa"
          ],
          [
            "کنی",
            "ku-nee",
            "ku-nee",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "وقت",
            "waqt",
            "waqt"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "کوه",
            "koh",
            "koh"
          ],
          [
            "شوم،",
            "sha-wam",
            "sha-wam",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "guft: aw-wal bi-goy,",
        "mean": "He said: Tell the first.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "اول",
            "aw-wal",
            "aw-wal"
          ],
          [
            "بگوی،",
            "bi-goy",
            "bi-goy",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "guft: har-chi az das-ti tu bi-shud bi-daan has-rat ma-khor,",
        "mean": "It said: Do not grieve over whatever has slipped from your hands.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "هرچه",
            "har-chi",
            "har-chi"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "بشد",
            "bi-shud",
            "bi-shud",
            "shu-dan"
          ],
          [
            "بدان",
            "bi-daan",
            "bi-daan",
            "daa-nis-tan"
          ],
          [
            "حسرت",
            "has-rat",
            "has-rat",
            "has-rat ma-khor",
            "has-rat khor-dan"
          ],
          [
            "مخور،",
            "ma-khor",
            "ma-khor",
            "has-rat ma-khor",
            "khor-dan",
            "has-rat khor-dan"
          ]
        ]
      },
      {
        "say": "ra-haa kard wa bar di-rakht bi-ni-shast,",
        "mean": "He let it go, and it sat on a tree.",
        "words": [
          [
            "رها",
            "ra-haa",
            "ra-haa"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
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
            "درخت",
            "di-rakht",
            "di-rakht"
          ],
          [
            "بنشست،",
            "bi-ni-shast",
            "bi-ni-shast",
            "ni-shas-tan"
          ]
        ]
      },
      {
        "say": "guft: dee-ga-ray bi-goy,",
        "mean": "He said: Tell another.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "بگوی،",
            "bi-goy",
            "bi-goy",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "guft: mu-haal har-giz baa-war ma-kun wa pa-reed wa bar sa-ri koh ni-shast",
        "mean": "It said: Never believe the impossible; and it flew off and sat on top of the mountain,",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "محال",
            "mu-haal",
            "mu-haal"
          ],
          [
            "هرگز",
            "har-giz",
            "har-giz"
          ],
          [
            "باور",
            "baa-war",
            "baa-war",
            "baa-war ma-kun",
            "baa-war kar-dan"
          ],
          [
            "مکن",
            "ma-kun",
            "ma-kun",
            "baa-war ma-kun",
            "kar-dan",
            "baa-war kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پرید",
            "pa-reed",
            "pa-reed",
            "pa-ree-dan"
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
            "سر",
            "sa-ri",
            "sar"
          ],
          [
            "کوه",
            "koh",
            "koh"
          ],
          [
            "نشست",
            "ni-shast",
            "ni-shast",
            "ni-shas-tan"
          ]
        ]
      },
      {
        "say": "wa guft ay bad-bakht a-gar ma-raa bi-kush-tee an-dar shi-ka-mi man du daa-na-yi mur-waa-reed bood har ya-kay beest mis-qaal,",
        "mean": "and said: O wretch, if you had killed me — there were two pearls in my belly, each of twenty mithqals;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "ای",
            "ay",
            "ay"
          ],
          [
            "بدبخت",
            "bad-bakht",
            "bad-bakht"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "مرا",
            "ma-raa",
            "ma-raa"
          ],
          [
            "بکشتی",
            "bi-kush-tee",
            "bi-kush-tee",
            "kush-tan"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "شکم",
            "shi-ka-mi",
            "shi-kam"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "دانهٔ",
            "daa-na-yi",
            "daa-na"
          ],
          [
            "مروارید",
            "mur-waa-reed",
            "mur-waa-reed"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "بیست",
            "beest",
            "beest"
          ],
          [
            "مثقال،",
            "mis-qaal",
            "mis-qaal"
          ]
        ]
      },
      {
        "say": "ta-waan-ga-ray shu-dee ki har-giz dar-way-shee ba tu raah na-yaaf-tee.",
        "mean": "you would have become so rich that poverty would never have found its way to you.",
        "words": [
          [
            "توانگری",
            "ta-waan-ga-ray",
            "ta-waan-ga-ray"
          ],
          [
            "شدی",
            "shu-dee",
            "shu-dee",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "هرگز",
            "har-giz",
            "har-giz"
          ],
          [
            "درویشی",
            "dar-way-shee",
            "dar-way-shee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "راه",
            "raah",
            "raah",
            "raah na-yaaf-tee",
            "raah yaaf-tan"
          ],
          [
            "نیافتی.",
            "na-yaaf-tee",
            "na-yaaf-tee",
            "raah na-yaaf-tee",
            "yaaf-tan",
            "raah yaaf-tan"
          ]
        ]
      },
      {
        "say": "mard an-gusht dar dan-daan gi-rift wa da-reegh wa has-rat ha-mee-khurd.",
        "mean": "The man bit his finger and was full of regret.",
        "words": [
          [
            "مرد",
            "mard",
            "mard"
          ],
          [
            "انگشت",
            "an-gusht",
            "an-gusht",
            "an-gusht dar dan-daan gi-rift"
          ],
          [
            "در",
            "dar",
            "dar",
            "an-gusht dar dan-daan gi-rift"
          ],
          [
            "دندان",
            "dan-daan",
            "dan-daan",
            "an-gusht dar dan-daan gi-rift"
          ],
          [
            "گرفت",
            "gi-rift",
            "gi-rift",
            "an-gusht dar dan-daan gi-rift",
            "gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دریغ",
            "da-reegh",
            "da-reegh",
            "da-reegh wa has-rat ha-mee-khurd"
          ],
          [
            "و",
            "wa",
            "wa",
            "da-reegh wa has-rat ha-mee-khurd"
          ],
          [
            "حسرت",
            "has-rat",
            "has-rat",
            "da-reegh wa has-rat ha-mee-khurd"
          ],
          [
            "همی‌خورد.",
            "ha-mee-khurd",
            "ha-mee-khurd",
            "da-reegh wa has-rat ha-mee-khurd",
            "khor-dan"
          ]
        ]
      },
      {
        "say": "guft: baa-ri sa-wum bi-goy,",
        "mean": "He said: Tell the third.",
        "words": [
          [
            "گفت:",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "بار",
            "baa-ri",
            "baar"
          ],
          [
            "سوم",
            "sa-wum",
            "sa-wum"
          ],
          [
            "بگوی،",
            "bi-goy",
            "bi-goy",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "guft tu aan du su-khan fa-raa-mosh kar-dee sa-wum chi ku-nee?",
        "mean": "It said: You have forgotten those two sayings; what will you do with a third?",
        "words": [
          [
            "گفت",
            "guft",
            "guft",
            "guf-tan"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "فراموش",
            "fa-raa-mosh",
            "fa-raa-mosh",
            "fa-raa-mosh kar-dee",
            "fa-raa-mosh kar-dan"
          ],
          [
            "کردی",
            "kar-dee",
            "kar-dee",
            "fa-raa-mosh kar-dee",
            "kar-dan",
            "fa-raa-mosh kar-dan"
          ],
          [
            "سوم",
            "sa-wum",
            "sa-wum"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "کنی؟",
            "ku-nee",
            "ku-nee",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "tu raa guf-tam bar gu-zash-ta an-doh ma-khor wa guf-tam mu-haal baa-war ma-kun,",
        "mean": "I told you not to grieve over what is past, and I told you not to believe the impossible;",
        "words": [
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "گفتم",
            "guf-tam",
            "guf-tam",
            "guf-tan"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "گذشته",
            "gu-zash-ta",
            "gu-zash-ta",
            "gu-zash-tan"
          ],
          [
            "اندوه",
            "an-doh",
            "an-doh",
            "an-doh ma-khor",
            "an-doh khor-dan"
          ],
          [
            "مخور",
            "ma-khor",
            "ma-khor",
            "an-doh ma-khor",
            "khor-dan",
            "an-doh khor-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گفتم",
            "guf-tam",
            "guf-tam",
            "guf-tan"
          ],
          [
            "محال",
            "mu-haal",
            "mu-haal"
          ],
          [
            "باور",
            "baa-war",
            "baa-war"
          ],
          [
            "مکن،",
            "ma-kun",
            "ma-kun",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "bi-daan ki par wa baal wa gosh-ti man dah mis-qaal na-baa-shad, an-dar shi-ka-mi man du mur-waa-ree-di chi-hil mis-qaal chi-goo-na soo-rat ban-dad?",
        "mean": "know that my feathers, wings and flesh do not weigh ten mithqals; how could there be two pearls of forty mithqals in my belly?",
        "words": [
          [
            "بدان",
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
            "پر",
            "par",
            "par"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بال",
            "baal",
            "baal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گوشت",
            "gosh-ti",
            "gosht"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "ده",
            "dah",
            "dah"
          ],
          [
            "مثقال",
            "mis-qaal",
            "mis-qaal"
          ],
          [
            "نباشد،",
            "na-baa-shad",
            "na-baa-shad",
            "bu-dan"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "شکم",
            "shi-ka-mi",
            "shi-kam"
          ],
          [
            "من",
            "man",
            "man"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "مروارید",
            "mur-waa-ree-di",
            "mur-waa-reed"
          ],
          [
            "چهل",
            "chi-hil",
            "chi-hil"
          ],
          [
            "مثقال",
            "mis-qaal",
            "mis-qaal"
          ],
          [
            "چگونه",
            "chi-goo-na",
            "chi-goo-na"
          ],
          [
            "صورت",
            "soo-rat",
            "soo-rat",
            "soo-rat ban-dad",
            "soo-rat bas-tan"
          ],
          [
            "بندد؟",
            "ban-dad",
            "ban-dad",
            "soo-rat ban-dad",
            "bas-tan",
            "soo-rat bas-tan"
          ]
        ]
      },
      {
        "say": "wa a-gar boo-dee choon az das-ti tu bi-shud gham khor-dan chi faa-yi-da?",
        "mean": "And even if there were, since they have slipped from your hands, what use is grieving?",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "بودی",
            "boo-dee",
            "boo-dee",
            "bu-dan"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "تو",
            "tu",
            "tu"
          ],
          [
            "بشد",
            "bi-shud",
            "bi-shud",
            "shu-dan"
          ],
          [
            "غم",
            "gham",
            "gham",
            "gham khor-dan"
          ],
          [
            "خوردن",
            "khor-dan",
            "khor-dan",
            "gham khor-dan"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "فایده؟",
            "faa-yi-da",
            "faa-yi-da"
          ]
        ]
      },
      {
        "say": "een bi-guft wa bi-pa-reed;",
        "mean": "It said this and flew away;",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "بگفت",
            "bi-guft",
            "bi-guft",
            "guf-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بپرید؛",
            "bi-pa-reed",
            "bi-pa-reed",
            "pa-ree-dan"
          ]
        ]
      },
      {
        "say": "wa een ma-sal ba-raa-yi aan guf-ta ha-mee-aa-yad taa ma-loom sha-wad ki choon ta-ma pa-deed aa-yad, ha-ma mu-haa-laat baa-war ku-nand.",
        "mean": "and this tale is told so that it becomes clear that when greed appears, people believe every impossible thing.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "مثل",
            "ma-sal",
            "ma-sal"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "گفته",
            "guf-ta",
            "guf-ta",
            "guf-ta ha-mee-aa-yad",
            "guf-tan"
          ],
          [
            "همی‌آید",
            "ha-mee-aa-yad",
            "ha-mee-aa-yad",
            "guf-ta ha-mee-aa-yad",
            "aa-ma-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "معلوم",
            "ma-loom",
            "ma-loom"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "طمع",
            "ta-ma",
            "ta-ma"
          ],
          [
            "پدید",
            "pa-deed",
            "pa-deed",
            "pa-deed aa-yad",
            "pa-deed aa-ma-dan"
          ],
          [
            "آید،",
            "aa-yad",
            "aa-yad",
            "pa-deed aa-yad",
            "aa-ma-dan",
            "pa-deed aa-ma-dan"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "محالات",
            "mu-haa-laat",
            "mu-haa-laat"
          ],
          [
            "باور",
            "baa-war",
            "baa-war",
            "baa-war ku-nand",
            "baa-war kar-dan"
          ],
          [
            "کنند.",
            "ku-nand",
            "ku-nand",
            "baa-war ku-nand",
            "kar-dan",
            "baa-war kar-dan"
          ]
        ]
      },
      {
        "say": "wa ib-nus-sam-maak go-yad: ta-ma ra-sa-nay ast bar gar-dan wa ban-day ast bar paa-yi,",
        "mean": "And Ibn al-Sammak says: Greed is a rope on the neck and a chain on the foot;",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ابن‌السماک",
            "ib-nus-sam-maak",
            "ib-nus-sam-maak"
          ],
          [
            "گوید:",
            "go-yad",
            "go-yad",
            "guf-tan"
          ],
          [
            "طمع",
            "ta-ma",
            "ta-ma"
          ],
          [
            "رسنی",
            "ra-sa-nay",
            "ra-sa-nay"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "گردن",
            "gar-dan",
            "gar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بندی",
            "ban-day",
            "ban-day"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "پای،",
            "paa-yi",
            "paa"
          ]
        ]
      },
      {
        "say": "ra-san az gar-da-ni khud bay-roon kun taa band az paa-yi bar-khay-zad.",
        "mean": "take the rope off your neck so that the chain comes off your foot.",
        "words": [
          [
            "رسن",
            "ra-san",
            "ra-san"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "گردن",
            "gar-da-ni",
            "gar-dan"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "بیرون",
            "bay-roon",
            "bay-roon"
          ],
          [
            "کن",
            "kun",
            "kun",
            "kar-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "بند",
            "band",
            "band"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ],
          [
            "برخیزد.",
            "bar-khay-zad",
            "bar-khay-zad",
            "bar-khaas-tan"
          ]
        ]
      }
    ]
  ]
});
