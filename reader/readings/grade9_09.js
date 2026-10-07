/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 9, book pages 52-56, PDF pages 59-63 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «موجوات» is written «موجودات»; «اندکه» is written «اند که»; «دیگرآن راکه» is written «دیگر آن را که»; «هستندکه» is written «هستند که»; «دارندکه» is written «دارند که»; «تکثرکند» is written «تکثر کند»; «وگیاهان» is written «و گیاهان»; «غالباْ» is written «غالباً»; «تکثرمی‌کند» is written «تکثر می‌کند»; «نمی‌شود‌؛» is written «نمی‌شود؛»; «مبتلاشدن» is written «مبتلا شدن»; «باغذا» is written «با غذا»; «مثلاٌ» is written «مثلاً»; «درخاک ازطریق» is written «در خاک از طریق»; «مارا» is written «ما را»; «درمجموع» is written «در مجموع»; «وآن» is written «و آن»; «دونوع» is written «دو نوع»; «کارشده» is written «کار شده»; «یادشده» is written «یاد شده»; «قرارذیل» is written «قرار ذیل»; «درجاهای» is written «در جاهای»; «درلوازم» is written «در لوازم»; «مواد‌غذایی» is written «مواد غذایی»; «قرارگیرد» is written «قرار گیرد»; «انتی بیوتیک‌ها» is written «انتی‌بیوتیک‌ها»; «هردو باهم» is written «هر دو با هم»; «باتحقیق وپژوهش» is written «با تحقیق و پژوهش»; «برروی» is written «بر روی».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-09',
  group: 'Dari · grade 9',
  label: 'Lesson 9',
  name: "maw-joo-di koo-chak, dush-ma-ni bu-zurg",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_09.jpg',
    alt: "A cartoon of three angry germs, one of them holding a gun."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_09.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "maw-jood":                                                                { fa: "موجود", mean: "being, creature" },
    "koo-chak":                                                                { fa: "کوچک", mean: "small" },
    "dush-man":                                                                { fa: "دشمن", mean: "an enemy" },
    "bu-zurg":                                                                 { fa: "بزرگ", mean: "big, great" },
    "maw-joo-daat":                                                            { fa: "موجودات", mean: "creatures, beings" },
    "zar-ra-bee-nee":                                                          { fa: "ذره‌بینی", mean: "microscopic" },
    "wa":                                                                      { fa: "و", mean: "and" },
    "ko-cha-kee":                                                              { fa: "کوچکی", mean: "small" },
    "ki":                                                                      { fa: "که", mean: "that, which, who" },
    "ha-may-sha":                                                              { fa: "همیشه", mean: "always" },
    "ha-ma":                                                                   { fa: "همه", mean: "all, every" },
    "ha-ma jaa":                                                               { fa: "همه جا", mean: "everywhere" },
    "jaa":                                                                     { fa: "جا", mean: "place" },
    "dar":                                                                     { fa: "در", mean: "in" },
    "sha-raa-yit":                                                             { fa: "شرایط", mean: "conditions" },
    "at-raaf":                                                                 { fa: "اطراف", mean: "sides, surroundings" },
    "maa":                                                                     { fa: "ما", mean: "we" },
    "ka-meen":                                                                 { fa: "کمین", mean: "ambush, a place of hiding" },
    "ka-meen gi-rif-ta":                                                       { fa: "کمین گرفته", mean: "lying in wait" },
    "ka-meen gi-rif-tan":                                                      { fa: "کمین گرفتن", mean: "to lie in wait" },
    "gi-rif-ta":                                                               { fa: "گرفته", mean: "taken; having taken" },
    "gi-rif-tan":                                                              { fa: "گرفتن", mean: "to take" },
    "mun-ta-zir":                                                              { fa: "منتظر", mean: "waiting" },
    "ba-dast":                                                                 { fa: "به‌دست", mean: "in hand" },
    "ba-dast aa-war-dan":                                                      { fa: "به‌دست آوردن", mean: "getting" },
    "aa-war-dan":                                                              { fa: "آوردن", mean: "to bring" },
    "fur-sat":                                                                 { fa: "فرصت", mean: "opportunity, chance" },
    "ham-la":                                                                  { fa: "حمله", mean: "attack" },
    "ba":                                                                      { fa: "به", mean: "to" },
    "may-baa-shand":                                                           { fa: "می‌باشند", mean: "are" },
    "bu-dan":                                                                  { fa: "بودن", mean: "to be" },
    "mak-roob":                                                                { fa: "مکروب", mean: "microbe, germ" },
    "naa-mee-da":                                                              { fa: "نامیده", mean: "named, called" },
    "naa-mee-da may-sha-wand":                                                 { fa: "نامیده می‌شوند", mean: "are called" },
    "naa-mee-dan":                                                             { fa: "نامیدن", mean: "to name, to call" },
    "naa-mee-da shu-dan":                                                      { fa: "نامیده شدن", mean: "to be called" },
    "may-sha-wand":                                                            { fa: "می‌شوند", mean: "become, are" },
    "shu-dan":                                                                 { fa: "شدن", mean: "to become" },
    "een":                                                                     { fa: "این", mean: "this" },
    "ba qa-dree":                                                              { fa: "به قدری", mean: "so" },
    "qa-dree":                                                                 { fa: "قدری", mean: "an amount (ba qa-dree, so much)" },
    "and":                                                                     { fa: "اند", mean: "are; after a word like shu-da, have" },
    "na-may-sha-wad":                                                          { fa: "نمی‌شود", mean: "cannot be, does not become" },
    "aan-haa":                                                                 { fa: "آن‌ها", mean: "they, them" },
    "raa":                                                                     { fa: "را", mean: "marks the object of the verb" },
    "baa":                                                                     { fa: "با", mean: "with" },
    "chashm":                                                                  { fa: "چشم", mean: "eye" },
    "mu-shaa-hi-da":                                                           { fa: "مشاهده", mean: "seeing" },
    "mu-shaa-hi-da na-mood":                                                   { fa: "مشاهده نمود", mean: "see" },
    "mu-shaa-hi-da na-mo-dan":                                                 { fa: "مشاهده نمودن", mean: "to see, to observe" },
    "na-mood":                                                                 { fa: "نمود", mean: "showed; did" },
    "na-mo-dan":                                                               { fa: "نمودن", mean: "to do; to show; to seem" },
    "az-een-roo":                                                              { fa: "ازین‌رو", mean: "therefore, for this reason" },
    "ba-raa-yi":                                                               { fa: "برای", mean: "for" },
    "az":                                                                      { fa: "از", mean: "from, of" },
    "mak-ros-kob":                                                             { fa: "مکروسکوب", mean: "microscope" },
    "is-ti-faa-da":                                                            { fa: "استفاده", mean: "use" },
    "is-ti-faa-da may-sha-wad":                                                { fa: "استفاده می‌شود", mean: "is used" },
    "is-ti-faa-da shu-dan":                                                    { fa: "استفاده شدن", mean: "to be used" },
    "may-sha-wad":                                                             { fa: "می‌شود", mean: "becomes" },
    "har-chand":                                                               { fa: "هرچند", mean: "although" },
    "waa-zha":                                                                 { fa: "واژه", mean: "word" },
    "yak":                                                                     { fa: "یک", mean: "one, a" },
    "is-ti-laah":                                                              { fa: "اصطلاح", mean: "a term" },
    "kul-lee":                                                                 { fa: "کلی", mean: "general" },
    "ghayr-il-mee":                                                            { fa: "غیرعلمی", mean: "unscientific" },
    "ast":                                                                     { fa: "است", mean: "is" },
    "am-maa":                                                                  { fa: "اما", mean: "but" },
    "zu-baan":                                                                 { fa: "زبان", mean: "language; tongue" },
    "mu-haa-wi-ra-yee":                                                        { fa: "محاوره‌یی", mean: "colloquial, used in everyday speech" },
    "baysh-tar":                                                               { fa: "بیشتر", mean: "more" },
    "baak-ti-ree-haa":                                                         { fa: "باکتری‌ها", mean: "bacteria" },
    "wee-roos-haa":                                                            { fa: "ویروس‌ها", mean: "viruses" },
    "fun-jee-haa":                                                             { fa: "فنجی‌ها", mean: "fungi" },
    "pro-to-zo-aa-haa":                                                        { fa: "پروتوزواها", mean: "protozoa" },
    "an-waa":                                                                  { fa: "انواع", mean: "kinds" },
    "dee-gar":                                                                 { fa: "دیگر", mean: "other; more; anymore" },
    "aan":                                                                     { fa: "آن", mean: "that" },
    "sa-bab":                                                                  { fa: "سبب", mean: "cause, reason" },
    "sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand":                 { fa: "سبب تولید امراض گوناگون می‌گردند", mean: "cause various diseases" },
    "taw-leed":                                                                { fa: "تولید", mean: "production, producing" },
    "am-raaz":                                                                 { fa: "امراض", mean: "diseases" },
    "goo-naa-goon":                                                            { fa: "گوناگون", mean: "various" },
    "may-gar-dand":                                                            { fa: "می‌گردند", mean: "become, turn" },
    "gar-dee-dan":                                                             { fa: "گردیدن", mean: "to become, to turn" },
    "may-go-yand":                                                             { fa: "می‌گویند", mean: "they say; they call" },
    "guf-tan":                                                                 { fa: "گفتن", mean: "to say, to tell" },
    "mak-roob-haa":                                                            { fa: "مکروب‌ها", mean: "microbes, germs" },
    "daa-raa-yi":                                                              { fa: "دارای", mean: "having, possessing" },
    "ash-kaal":                                                                { fa: "اشکال", mean: "shapes, forms" },
    "mukh-ta-li-fee":                                                          { fa: "مختلفی", mean: "different, various" },
    "has-tand":                                                                { fa: "هستند", mean: "are" },
    "khud":                                                                    { fa: "خود", mean: "own; self" },
    "she-wa-haa-yi":                                                           { fa: "شیوه‌های", mean: "ways, methods" },
    "ba-jaa":                                                                  { fa: "به‌جا", mean: "in place" },
    "in-ti-qaal":                                                              { fa: "انتقال", mean: "moving, passing on" },
    "in-ti-qaal may-di-hand":                                                  { fa: "انتقال می‌دهند", mean: "move" },
    "in-ti-qaal daa-dan":                                                      { fa: "انتقال دادن", mean: "to move, to carry" },
    "may-di-hand":                                                             { fa: "می‌دهند", mean: "give" },
    "daa-dan":                                                                 { fa: "دادن", mean: "to give" },
    "mi-yaan":                                                                 { fa: "میان", mean: "middle, among" },
    "aab":                                                                     { fa: "آب", mean: "water" },
    "baad":                                                                    { fa: "باد", mean: "wind" },
    "khaak":                                                                   { fa: "خاک", mean: "dust, earth" },
    "ha-waa":                                                                  { fa: "هوا", mean: "air, weather" },
    "ma-waad":                                                                 { fa: "مواد", mean: "materials, things" },
    "gha-zaa-yee":                                                             { fa: "غذایی", mean: "of food, nutritional" },
    "naa-paak":                                                                { fa: "ناپاک", mean: "dirty, unclean" },
    "li-baas":                                                                 { fa: "لباس", mean: "clothes" },
    "sab-zee-haa-yi":                                                          { fa: "سبزی‌های", mean: "vegetables" },
    "naa-shus-ta":                                                             { fa: "ناشسته", mean: "unwashed" },
    "shus-tan":                                                                { fa: "شستن", mean: "washing; to wash" },
    "khu-laa-sa":                                                              { fa: "خلاصه", mean: "in short; summary" },
    "wu-jood":                                                                 { fa: "وجود", mean: "existence" },
    "daa-rand":                                                                { fa: "دارند", mean: "have" },
    "daash-tan":                                                               { fa: "داشتن", mean: "to have" },
    "ba wa-see-la-yi":                                                         { fa: "به وسیلهٔ", mean: "by means of" },
    "wa-see-la-yi":                                                            { fa: "وسیلهٔ", mean: "means, instrument" },
    "ma-gas":                                                                  { fa: "مگس", mean: "fly" },
    "kayk":                                                                    { fa: "کَیک", mean: "flea" },
    "shi-pish":                                                                { fa: "شپش", mean: "louse, lice" },
    "pa-sha":                                                                  { fa: "پشه", mean: "mosquito" },
    "ha-sha-raat":                                                             { fa: "حشرات", mean: "insects" },
    "ha-ya-waa-naat":                                                          { fa: "حیوانات", mean: "animals" },
    "in-ti-qaal yaaf-ta":                                                      { fa: "انتقال یافته", mean: "being carried" },
    "in-ti-qaal yaaf-tan":                                                     { fa: "انتقال یافتن", mean: "to be carried" },
    "yaaf-ta":                                                                 { fa: "یافته", mean: "found; having been carried" },
    "yaaf-tan":                                                                { fa: "یافتن", mean: "to find" },
    "baa-is":                                                                  { fa: "باعث", mean: "cause" },
    "baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand":                  { fa: "باعث ایجاد امراض گوناگون می‌گردند", mean: "cause various diseases" },
    "ee-jaad":                                                                 { fa: "ایجاد", mean: "creating, setting up" },
    "naw-ee":                                                                  { fa: "نوعی", mean: "a kind, one kind" },
    "wee-roos":                                                                { fa: "ویروس", mean: "virus" },
    "naam":                                                                    { fa: "نام", mean: "name" },
    "naam daa-rad":                                                            { fa: "نام دارد", mean: "is called" },
    "naam daash-tan":                                                          { fa: "نام داشتن", mean: "to be called, to have the name" },
    "daa-rad":                                                                 { fa: "دارد", mean: "has" },
    "bi-si-yaar":                                                              { fa: "بسیار", mean: "much, very" },
    "ko-chak-tar":                                                             { fa: "کوچکتر", mean: "smaller" },
    "baak-ti-ree-haa-st":                                                      { fa: "باکتری‌هاست", mean: "is bacteria, are bacteria" },
    "mu-heet":                                                                 { fa: "محیط", mean: "surroundings, setting" },
    "aa-zaad":                                                                 { fa: "آزاد", mean: "free" },
    "zin-da":                                                                  { fa: "زنده", mean: "alive" },
    "na-may-maa-nad":                                                          { fa: "نمی‌ماند", mean: "does not remain" },
    "maan-dan":                                                                { fa: "ماندن", mean: "to remain, to stay" },
    "fa-qat":                                                                  { fa: "فقط", mean: "only" },
    "daa-khil":                                                                { fa: "داخل", mean: "inside" },
    "huj-ra-haa-yi":                                                           { fa: "حجره‌های", mean: "cells" },
    "may-ta-waa-nad":                                                          { fa: "می‌تواند", mean: "can" },
    "ta-waa-nis-tan":                                                          { fa: "توانستن", mean: "to be able, can" },
    "ta-kaa-sur":                                                              { fa: "تکثر", mean: "multiplying, reproduction" },
    "ta-kaa-sur ku-nad":                                                       { fa: "تکثر کند", mean: "multiply" },
    "ta-kaa-sur kar-dan":                                                      { fa: "تکثر کردن", mean: "to multiply" },
    "ku-nad":                                                                  { fa: "کند", mean: "does" },
    "kar-dan":                                                                 { fa: "کردن", mean: "to do, to make" },
    "jaa-na-wa-raan":                                                          { fa: "جانوران", mean: "animals, living creatures" },
    "gi-yaa-haan":                                                             { fa: "گیاهان", mean: "plants" },
    "mub-ta-laa":                                                              { fa: "مبتلا", mean: "infected with, suffering from" },
    "mub-ta-laa ba":                                                           { fa: "مبتلا به", mean: "infected with, suffering from" },
    "mukh-ta-lif":                                                             { fa: "مختلف", mean: "different, various" },
    "na-maa-yad":                                                              { fa: "نماید", mean: "make; do" },
    "gu-roh":                                                                  { fa: "گروه", mean: "group" },
    "dee-ga-ray":                                                              { fa: "دیگری", mean: "someone else" },
    "yak huj-ra-yee":                                                          { fa: "یک حجره‌یی", mean: "one-celled" },
    "huj-ra-yee":                                                              { fa: "حجره‌یی", mean: "celled, consisting of cells" },
    "zar-ra":                                                                  { fa: "ذره", mean: "particle" },
    "zar-ra bee-nee":                                                          { fa: "ذره بینی", mean: "microscopic" },
    "bee-nee":                                                                 { fa: "بینی", mean: "seeing; nose" },
    "po-shish":                                                                { fa: "پوشش", mean: "covering" },
    "bay-roo-nee":                                                             { fa: "بیرونی", mean: "outward" },
    "nis-ba-tan":                                                              { fa: "نسبتاً", mean: "relatively, fairly" },
    "za-khee-mee":                                                             { fa: "ضخیمی", mean: "thick" },
    "i-haa-ta":                                                                { fa: "احاطه", mean: "surrounding" },
    "i-haa-ta kar-da ast":                                                     { fa: "احاطه کرده است", mean: "has surrounded" },
    "i-haa-ta kar-dan":                                                        { fa: "احاطه کردن", mean: "to surround" },
    "kar-da":                                                                  { fa: "کرده", mean: "done" },
    "nis-bat":                                                                 { fa: "نسبت", mean: "relation (nis-bat ba, toward)" },
    "bu-zurg-tar":                                                             { fa: "بزرگتر", mean: "bigger, larger" },
    "ghaa-li-ban":                                                             { fa: "غالباً", mean: "mostly, usually" },
    "mo-jib":                                                                  { fa: "موجب", mean: "cause" },
    "fa-aa-lee-yat-haa-yi":                                                    { fa: "فعالیت‌های", mean: "activities" },
    "mu-feed":                                                                 { fa: "مفید", mean: "useful, beneficial" },
    "maa-nand":                                                                { fa: "مانند", mean: "like" },
    "ta-kham-mur":                                                             { fa: "تخمر", mean: "fermentation" },
    "kha-meer":                                                                { fa: "خمیر", mean: "dough" },
    "naan":                                                                    { fa: "نان", mean: "bread" },
    "tab-deel":                                                                { fa: "تبدیل", mean: "changing, turning into" },
    "tab-deel kar-dan":                                                        { fa: "تبدیل کردن", mean: "turning (into)" },
    "sheer":                                                                   { fa: "شیر", mean: "milk" },
    "maast":                                                                   { fa: "ماست", mean: "yogurt" },
    "tursh":                                                                   { fa: "ترش", mean: "sour; souring" },
    "saakh-tan":                                                               { fa: "ساختن", mean: "to make, to build" },
    "sir-ka":                                                                  { fa: "سرکه", mean: "vinegar" },
    "tur-shee":                                                                { fa: "ترشی", mean: "pickles; sourness" },
    "ta-daad":                                                                 { fa: "تعداد", mean: "number" },
    "ka-mee":                                                                  { fa: "کمی", mean: "a small amount, few" },
    "in-saan-haa":                                                             { fa: "انسان‌ها", mean: "people, human beings" },
    "in-saan":                                                                 { fa: "انسان", mean: "a person, a human being" },
    "taw-lee-di bee-maa-ree may-ku-nand":                                      { fa: "تولید بیماری می‌کنند", mean: "cause disease" },
    "bee-maa-ree":                                                             { fa: "بیماری", mean: "illness, disease" },
    "may-ku-nand":                                                             { fa: "می‌کنند", mean: "they do" },
    "ba-tawr":                                                                 { fa: "به‌طور", mean: "in the way of" },
    "ba-tawr kul-lee":                                                         { fa: "به‌طور کلی", mean: "in general" },
    "bi-doon":                                                                 { fa: "بدون", mean: "without" },
    "fa-aa-lee-yat":                                                           { fa: "فعالیت", mean: "activity" },
    "ha-yaat":                                                                 { fa: "حیات", mean: "life" },
    "bar":                                                                     { fa: "بر", mean: "on, upon" },
    "roy":                                                                     { fa: "روی", mean: "face" },
    "za-meen":                                                                 { fa: "زمین", mean: "ground, earth" },
    "mukh-tal":                                                                { fa: "مختل", mean: "disrupted, out of order" },
    "mukh-tal may-gar-dad":                                                    { fa: "مختل می‌گردد", mean: "would break down" },
    "mukh-tal gar-dee-dan":                                                    { fa: "مختل گردیدن", mean: "to be disrupted" },
    "may-gar-dad":                                                             { fa: "می‌گردد", mean: "becomes, turns" },
    "mak-roob-haa-yee":                                                        { fa: "مکروب‌هایی", mean: "microbes that, some microbes" },
    "tu-fay-lee":                                                              { fa: "طفیلی", mean: "parasitic; parasite" },
    "yaa-nee":                                                                 { fa: "یعنی", mean: "that is, it means" },
    "ba-dan":                                                                  { fa: "بدن", mean: "body" },
    "jaan-daa-raan":                                                           { fa: "جانداران", mean: "living things" },
    "ba sar may-ba-rand":                                                      { fa: "به سر می‌برند", mean: "live" },
    "ba sar bur-dan":                                                          { fa: "به سر بردن", mean: "to live, to spend time" },
    "sar":                                                                     { fa: "سر", mean: "head" },
    "may-ba-rand":                                                             { fa: "می‌برند", mean: "take, carry; spend" },
    "bur-dan":                                                                 { fa: "بردن", mean: "to take away, to carry" },
    "gha-zaa":                                                                 { fa: "غذا", mean: "food" },
    "ba-dast may-aa-wa-rand":                                                  { fa: "به‌دست می‌آورند", mean: "get" },
    "may-aa-wa-rand":                                                          { fa: "می‌آورند", mean: "bring" },
    "zee-raa":                                                                 { fa: "زیرا", mean: "because" },
    "khu-dish-aan":                                                            { fa: "خودشان", mean: "themselves" },
    "na-may-ta-waa-nand":                                                      { fa: "نمی‌توانند", mean: "cannot" },
    "sabz":                                                                    { fa: "سبز", mean: "green" },
    "gha-zaa-yi":                                                              { fa: "غذای", mean: "food, with ezafe" },
    "maw-rid":                                                                 { fa: "مورد", mean: "object, case" },
    "maw-ri-di ni-yaa-zi shaan":                                               { fa: "مورد نیاز شان", mean: "that they need" },
    "ni-yaaz":                                                                 { fa: "نیاز", mean: "need" },
    "shaan":                                                                   { fa: "شان", mean: "their" },
    "bi-saa-zand":                                                             { fa: "بسازند", mean: "may make, make" },
    "ba-naa-ba-raan":                                                          { fa: "بنابراین", mean: "therefore" },
    "baa-yad":                                                                 { fa: "باید", mean: "must, should" },
    "ba-taw-ri mus-ta-qeem":                                                   { fa: "به‌طور مستقیم", mean: "directly" },
    "mus-ta-qeem":                                                             { fa: "مستقیم", mean: "direct, directly" },
    "yaa":                                                                     { fa: "یا", mean: "or" },
    "ghay-ri-mus-ta-qeem":                                                     { fa: "غیر‌مستقیم", mean: "indirect, indirectly" },
    "ba-dast aa-wa-rand":                                                      { fa: "به‌دست آورند", mean: "get" },
    "aa-wa-rand":                                                              { fa: "آورند", mean: "may bring, get" },
    "pas":                                                                     { fa: "پس", mean: "then, so" },
    "pas az aan-ki":                                                           { fa: "پس از آن‌که", mean: "after" },
    "aan-ki":                                                                  { fa: "آن‌که", mean: "that, when" },
    "mu-naa-si-bee":                                                           { fa: "مناسبی", mean: "suitable" },
    "waa-rid":                                                                 { fa: "وارد", mean: "entering, entered" },
    "waa-rid shu-dand":                                                        { fa: "وارد شدند", mean: "entered" },
    "waa-rid shu-dan":                                                         { fa: "وارد شدن", mean: "to enter" },
    "shu-dand":                                                                { fa: "شدند", mean: "they became" },
    "ba sur-at":                                                               { fa: "به سرعت", mean: "quickly" },
    "sur-at":                                                                  { fa: "سرعت", mean: "speed" },
    "ta-kaa-sur may-ku-nand":                                                  { fa: "تکثر می‌کنند", mean: "multiply" },
    "a-gar":                                                                   { fa: "اگر", mean: "if" },
    "chee-zay":                                                                { fa: "چیزی", mean: "something" },
    "jilaw":                                                                   { fa: "جلو", mean: "in front; prevention" },
    "na-gee-rad":                                                              { fa: "نگیرد", mean: "does not take, does not stop" },
    "raa-haa":                                                                 { fa: "راه‌ها", mean: "paths, roads" },
    "aa-seeb":                                                                 { fa: "آسیب", mean: "harm, injury" },
    "aa-seeb may-ra-saa-nand":                                                 { fa: "آسیب می‌رسانند", mean: "do harm" },
    "aa-seeb ra-saan-dan":                                                     { fa: "آسیب رساندن", mean: "to harm" },
    "may-ra-saa-nand":                                                         { fa: "می‌رسانند", mean: "cause, bring" },
    "ra-saan-dan":                                                             { fa: "رساندن", mean: "to bring, to deliver" },
    "ya-kay":                                                                  { fa: "یکی", mean: "one" },
    "daa-khi-lee":                                                             { fa: "داخلی", mean: "internal, inner" },
    "hu-ja-raat":                                                              { fa: "حجرات", mean: "cells" },
    "may-kho-rand":                                                            { fa: "می‌خورند", mean: "eat" },
    "khor-dan":                                                                { fa: "خوردن", mean: "to eat; (with gham) to grieve" },
    "ma-laa-ri-yaa":                                                           { fa: "ملاریا", mean: "malaria" },
    "ka-ra-wi-yaat":                                                           { fa: "کرویات", mean: "corpuscles, blood cells" },
    "ka-ra-wi-yaa-ti sur-khi khoon":                                           { fa: "کرویات سرخ خون", mean: "the red blood cells" },
    "surkh":                                                                   { fa: "سرخ", mean: "red" },
    "khoon":                                                                   { fa: "خون", mean: "blood" },
    "ta-kaa-sur may-ku-nad":                                                   { fa: "تکثر می‌کند", mean: "multiplies" },
    "may-ku-nad":                                                              { fa: "می‌کند", mean: "does, makes" },
    "az bayn may-ba-rad":                                                      { fa: "از بین می‌برد", mean: "destroys" },
    "az bayn bur-dan":                                                         { fa: "از بین بردن", mean: "to destroy" },
    "bayn":                                                                    { fa: "بین", mean: "between" },
    "may-ba-rad":                                                              { fa: "می‌برد", mean: "takes, carries" },
    "ma-naa-bi":                                                               { fa: "منابع", mean: "sources" },
    "nu-khus-teen":                                                            { fa: "نخستین", mean: "first" },
    "jaa-haa-yee":                                                             { fa: "جاهایی", mean: "places that, some places" },
    "mak-roob-haa-yi":                                                         { fa: "مکروب‌های", mean: "microbes, with ezafe" },
    "ma-reez":                                                                 { fa: "مریض", mean: "ill, sick" },
    "ma-reez ku-nan-da":                                                       { fa: "مریض کننده", mean: "disease-causing" },
    "ku-nan-da":                                                               { fa: "کننده", mean: "doing (ha-ra-kat ku-nan-da, moving)" },
    "sar-chash-ma":                                                            { fa: "سرچشمه", mean: "source, origin" },
    "sar-chash-ma gi-rif-ta":                                                  { fa: "سرچشمه گرفته", mean: "arising" },
    "sar-chash-ma gi-rif-tan":                                                 { fa: "سرچشمه گرفتن", mean: "to arise, to spring" },
    "waa-ri-di ba-dan may-sha-wand":                                           { fa: "وارد بدن می‌شوند", mean: "enter the body" },
    "ba naa-mi":                                                               { fa: "به نام", mean: "by the name of, called" },
    "yaad":                                                                    { fa: "یاد", mean: "memory, mention" },
    "yaad may-sha-wad":                                                        { fa: "یاد می‌شود", mean: "are called" },
    "yaad shu-dan":                                                            { fa: "یاد شدن", mean: "to be called, to be mentioned" },
    "sih":                                                                     { fa: "سه", mean: "three" },
    "das-ta":                                                                  { fa: "دسته", mean: "group, band" },
    "taq-seem":                                                                { fa: "تقسیم", mean: "division, dividing" },
    "taq-seem may-sha-wand":                                                   { fa: "تقسیم می‌شوند", mean: "are divided" },
    "taq-seem shu-dan":                                                        { fa: "تقسیم شدن", mean: "to be divided" },
    "yak#digit":                                                               { fa: "۱", say: "yak", mean: "one" },
    "ba-zay":                                                                  { fa: "بعضی", mean: "some" },
    "sur-kha-kaan":                                                            { fa: "سرخکان", mean: "measles" },
    "chee-chak":                                                               { fa: "چیچک", mean: "smallpox" },
    "makh-soos":                                                               { fa: "مخصوص", mean: "special" },
    "dee-da":                                                                  { fa: "دیده", mean: "seen; eye" },
    "dee-da na-may-sha-wad":                                                   { fa: "دیده نمی‌شود", mean: "is not seen" },
    "dee-dan":                                                                 { fa: "دیدن", mean: "to see; seeing" },
    "mak-roo-bee":                                                             { fa: "مکروبی", mean: "a microbe, a germ" },
    "zaa-yin-da-yi":                                                           { fa: "زایندهٔ", mean: "producing, causing" },
    "goo-na":                                                                  { fa: "گونه", mean: "kind, type" },
    "tan-haa":                                                                 { fa: "تنها", mean: "only; alone" },
    "ta-waa-fuq":                                                              { fa: "توافق", mean: "agreement; adapting" },
    "ta-waa-fuq daa-da ast":                                                   { fa: "توافق داده است", mean: "has adapted" },
    "ta-waa-fuq daa-dan":                                                      { fa: "توافق دادن", mean: "to adapt, to fit" },
    "daa-da":                                                                  { fa: "داده", mean: "given" },
    "ya-gaa-na":                                                               { fa: "یگانه", mean: "only, sole" },
    "man-ba":                                                                  { fa: "منبع", mean: "source" },
    "daa-nis-ta":                                                              { fa: "دانسته", mean: "known; considered" },
    "daa-nis-ta may-sha-wad":                                                  { fa: "دانسته می‌شود", mean: "is considered" },
    "daa-nis-tan":                                                             { fa: "دانستن", mean: "to know" },
    "daa-nis-ta shu-dan":                                                      { fa: "دانسته شدن", mean: "to be considered" },
    "mub-ta-laa shu-dan":                                                      { fa: "مبتلا شدن", mean: "catching" },
    "waq-tay":                                                                 { fa: "وقتی", mean: "when" },
    "mu-saa-id":                                                               { fa: "مساعد", mean: "favorable, suitable" },
    "mu-saa-id may-sha-wad":                                                   { fa: "مساعد می‌شود", mean: "becomes favorable" },
    "shakhs":                                                                  { fa: "شخص", mean: "person" },
    "saa-lim":                                                                 { fa: "سالم", mean: "healthy" },
    "far-dee":                                                                 { fa: "فردی", mean: "personal" },
    "aa-loo-da":                                                               { fa: "آلوده", mean: "dirty, infected" },
    "wa-saa-yi-lee":                                                           { fa: "وسایلی", mean: "things, equipment" },
    "ta-was-sut":                                                              { fa: "توسط", mean: "by, through" },
    "oo":                                                                      { fa: "او", mean: "he, she; his, her" },
    "aa-loo-da shu-da baa-shad":                                               { fa: "آلوده شده باشد", mean: "has been dirtied, has been infected" },
    "shu-da":                                                                  { fa: "شده", mean: "become; been" },
    "baa-shad":                                                                { fa: "باشد", mean: "be, should be" },
    "ta-maas":                                                                 { fa: "تماس", mean: "contact" },
    "ta-maas haa-sil na-maa-yad":                                              { fa: "تماس حاصل نماید", mean: "comes into contact" },
    "ta-maas haa-sil na-mo-dan":                                               { fa: "تماس حاصل نمودن", mean: "to come into contact" },
    "haa-sil":                                                                 { fa: "حاصل", mean: "obtained; result" },
    "bis-tar":                                                                 { fa: "بستر", mean: "bedding; bed" },
    "zarf":                                                                    { fa: "ظرف", mean: "dish, container" },
    "du#digit":                                                                { fa: "۲", say: "du", mean: "two" },
    "bar-khay":                                                                { fa: "برخی", mean: "some" },
    "mub-ta-laa may-gar-dad":                                                  { fa: "مبتلا می‌گردد", mean: "catches" },
    "gi-yaa-hee":                                                              { fa: "گیاهی", mean: "plant, of plants" },
    "hay-waa-nee":                                                             { fa: "حیوانی", mean: "animal, of animals" },
    "az ta-ree-qi":                                                            { fa: "از طریق", mean: "by way of, through" },
    "ta-reeq":                                                                 { fa: "طریق", mean: "way, path" },
    "si-raa-yat":                                                              { fa: "سرایت", mean: "spreading, infection" },
    "si-raa-yat may-ku-nad":                                                   { fa: "سرایت می‌کند", mean: "spread" },
    "si-raa-yat kar-dan":                                                      { fa: "سرایت کردن", mean: "to spread, to infect" },
    "ma-sa-lan":                                                               { fa: "مثلاً", mean: "for example" },
    "ma-raz":                                                                  { fa: "مرض", mean: "disease" },
    "aa-meeb":                                                                 { fa: "آمیب", mean: "amoeba" },
    "fi-laa-jeel":                                                             { fa: "فلاجیل", mean: "giardia, flagellate" },
    "az a-sa-ri":                                                              { fa: "از اثر", mean: "as a result of" },
    "a-sar":                                                                   { fa: "اثر", mean: "work (of writing or art)" },
    "no-shee-dan":                                                             { fa: "نوشیدن", mean: "drinking; to drink" },
    "ghay-ri-si-hee":                                                          { fa: "غیرصحی", mean: "unhealthy, unhygienic" },
    "ba mi-yaan may-aa-yad":                                                   { fa: "به میان می‌آید", mean: "comes about" },
    "ba mi-yaan aa-ma-dan":                                                    { fa: "به میان آمدن", mean: "to come about" },
    "may-aa-yad":                                                              { fa: "می‌آید", mean: "comes" },
    "aa-ma-dan":                                                               { fa: "آمدن", mean: "to come" },
    "gaa-hay":                                                                 { fa: "گاهی", mean: "sometimes" },
    "neez":                                                                    { fa: "نیز", mean: "also, too" },
    "neesh":                                                                   { fa: "نیش", mean: "sting, bite" },
    "neesh za-dan":                                                            { fa: "نیش زدن", mean: "stinging, biting" },
    "za-dan":                                                                  { fa: "زدن", mean: "to hit" },
    "ha-sha-ra":                                                               { fa: "حشره", mean: "insect" },
    "mun-ta-qil":                                                              { fa: "منتقل", mean: "transferred, passed on" },
    "mun-ta-qil may-sha-wad":                                                  { fa: "منتقل می‌شود", mean: "is passed on" },
    "mun-ta-qil shu-dan":                                                      { fa: "منتقل شدن", mean: "to be passed on" },
    "saal-daa-na":                                                             { fa: "سالدانه", mean: "leishmaniasis, oriental sore" },
    "pa-sha-yi":                                                               { fa: "پشهٔ", mean: "mosquito, with ezafe" },
    "neesh za-da-ni":                                                          { fa: "نیش زدن", mean: "the bite of" },
    "aa-mil":                                                                  { fa: "عامل", mean: "cause, factor" },
    "taa-oon":                                                                 { fa: "طاعون", mean: "plague" },
    "moosh":                                                                   { fa: "موش", mean: "mouse, rat" },
    "ham-chu-naan":                                                            { fa: "همچنان", mean: "likewise, just so" },
    "ka-na":                                                                   { fa: "کنه", mean: "tick" },
    "jaan-daar":                                                               { fa: "جاندار", mean: "living thing, animal" },
    "neesh may-za-nand":                                                       { fa: "نیش می‌زنند", mean: "bite" },
    "may-za-nand":                                                             { fa: "می‌زنند", mean: "strike, bite" },
    "may-ma-kand":                                                             { fa: "می‌مکند", mean: "suck" },
    "ma-kee-dan":                                                              { fa: "مکیدن", mean: "to suck" },
    "waa-rid may-ku-nand":                                                     { fa: "وارد می‌کنند", mean: "take in" },
    "waa-rid kar-dan":                                                         { fa: "وارد کردن", mean: "to bring in" },
    "si-pas":                                                                  { fa: "سپس", mean: "then, later" },
    "hin-gaa-mee":                                                             { fa: "هنگامی", mean: "a time, when" },
    "hin-gaa-mee ki":                                                          { fa: "هنگامی که", mean: "when" },
    "ha-meen":                                                                 { fa: "همین", mean: "this very, this same" },
    "fard":                                                                    { fa: "فرد", mean: "person, individual" },
    "saa-li-mee":                                                              { fa: "سالمی", mean: "a healthy person" },
    "ta-daa-dee":                                                              { fa: "تعدادی", mean: "a number, some" },
    "way":                                                                     { fa: "وی", mean: "he, she" },
    "daa-khil may-saa-zand":                                                   { fa: "داخل می‌سازند", mean: "put in" },
    "daa-khil saakh-tan":                                                      { fa: "داخل ساختن", mean: "to put in" },
    "may-saa-zand":                                                            { fa: "می‌سازند", mean: "make" },
    "ha-meen-jaa":                                                             { fa: "همین‌جا", mean: "right here, from here" },
    "aa-ghaaz":                                                                { fa: "آغاز", mean: "beginning" },
    "aa-ghaaz may-yaa-bad":                                                    { fa: "آغاز می‌یابد", mean: "begins" },
    "aa-ghaaz yaaf-tan":                                                       { fa: "آغاز یافتن", mean: "to begin" },
    "may-yaa-bad":                                                             { fa: "می‌یابد", mean: "finds; begins" },
    "guft":                                                                    { fa: "گفت", mean: "said" },
    "maa-dar-kayk":                                                            { fa: "مادرکَیک", mean: "bedbug" },
    "az jum-la-yi":                                                            { fa: "از جملهٔ", mean: "among, one of" },
    "jum-la":                                                                  { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "fa-aal-ta-reen":                                                          { fa: "فعال‌ترین", mean: "most active" },
    "in-ti-qaal di-han-da-gaa-ni":                                             { fa: "انتقال دهنده‌گان", mean: "carriers" },
    "di-han-da-gaan":                                                          { fa: "دهنده‌گان", mean: "givers, carriers" },
    "ba-dan-shaan":                                                            { fa: "بدن‌شان", mean: "their bodies" },
    "khaa-rij":                                                                { fa: "خارج", mean: "outside, out" },
    "aa-loo-da ba":                                                            { fa: "آلوده به", mean: "dirtied with, infected with" },
    "mak-roob-haa-st":                                                         { fa: "مکروب‌هاست", mean: "is microbes, are microbes" },
    "zu-roof":                                                                 { fa: "ظروف", mean: "dishes, containers" },
    "gha-zaa-kho-ree":                                                         { fa: "غذاخوری", mean: "for eating, dining" },
    "ta-maas yaa-band":                                                        { fa: "تماس یابند", mean: "touch" },
    "ta-maas yaaf-tan":                                                        { fa: "تماس یافتن", mean: "to come into contact" },
    "yaa-band":                                                                { fa: "یابند", mean: "find, come into" },
    "aan-jaa":                                                                 { fa: "آن‌جا", mean: "there" },
    "ra-haa":                                                                  { fa: "رها", mean: "free, let go" },
    "ra-haa may-ku-nand":                                                      { fa: "رها می‌کنند", mean: "leave" },
    "ra-haa kar-dan":                                                          { fa: "رها کردن", mean: "to leave, to release" },
    "kam-ta-reen":                                                             { fa: "کمترین", mean: "least, smallest" },
    "aa-ri-za-yi":                                                             { fa: "عارضهٔ", mean: "harm, complication" },
    "ta-sa-mum":                                                               { fa: "تسمم", mean: "poisoning" },
    "ta-sa-mu-mi gha-zaa-yee":                                                 { fa: "تسمم غذایی", mean: "food poisoning" },
    "fa-laj":                                                                  { fa: "فلج", mean: "paralysis, polio" },
    "fa-la-ji at-faal":                                                        { fa: "فلج اطفال", mean: "polio" },
    "at-faal":                                                                 { fa: "اطفال", mean: "children" },
    "ma-ra-zi mu-har-ra-qa":                                                   { fa: "مرض محرقه", mean: "typhoid fever" },
    "mu-har-ra-qa":                                                            { fa: "محرقه", mean: "typhoid fever" },
    "sih#digit":                                                               { fa: "۳", say: "sih", mean: "three" },
    "su-wo-meen":                                                              { fa: "سومین", mean: "third" },
    "ta-bee-at":                                                               { fa: "طبیعت", mean: "nature" },
    "aj-saam":                                                                 { fa: "اجسام", mean: "objects, bodies" },
    "bee-jaan":                                                                { fa: "بیجان", mean: "lifeless" },
    "bi-yuf-teem":                                                             { fa: "بیفتیم", mean: "we fall" },
    "uf-taa-dan":                                                              { fa: "افتادن", mean: "to fall" },
    "qis-ma-tee":                                                              { fa: "قسمتی", mean: "a part" },
    "zakh-mee":                                                                { fa: "زخمی", mean: "wounded" },
    "zakh-mee sha-wad":                                                        { fa: "زخمی شود", mean: "is wounded" },
    "sha-wad":                                                                 { fa: "شود", mean: "become" },
    "mum-kin":                                                                 { fa: "ممکن", mean: "possible; perhaps" },
    "ha-maan":                                                                 { fa: "همان", mean: "that same, the very" },
    "qis-mat":                                                                 { fa: "قسمت", mean: "share, part" },
    "zakh-mee shu-da":                                                         { fa: "زخمی شده", mean: "wounded" },
    "waa-ri-di ba-da-ni maa sha-wand":                                         { fa: "وارد بدن ما شوند", mean: "enter our body" },
    "sha-wand":                                                                { fa: "شوند", mean: "become; be" },
    "tee-taa-noos":                                                            { fa: "تیتانوس", mean: "tetanus" },
    "mub-ta-laa baa-saa-zand":                                                 { fa: "مبتلا سازند", mean: "infect" },
    "mub-ta-laa saakh-tan":                                                    { fa: "مبتلا ساختن", mean: "to infect" },
    "baa-saa-zand":                                                            { fa: "سازند", mean: "may make, cause" },
    "rawsh-haa-yi":                                                            { fa: "روش‌های", mean: "methods, ways" },
    "di-faa-ee":                                                               { fa: "دفاعی", mean: "defensive, of defense" },
    "shar":                                                                    { fa: "شر", mean: "harm, evil" },
    "dar a-maan bi-maand":                                                     { fa: "در امان بماند", mean: "stays safe" },
    "dar a-maan maan-dan":                                                     { fa: "در امان ماندن", mean: "to stay safe" },
    "a-maan":                                                                  { fa: "امان", mean: "safety, protection" },
    "bi-maand":                                                                { fa: "بماند", mean: "remained" },
    "bee-maa-ree-haa-yi":                                                      { fa: "بیماری‌های", mean: "illnesses, diseases" },
    "ba su-raa-ghi maa na-yaa-yad":                                            { fa: "به سراغ ما نیاید", mean: "do not come to us" },
    "su-raagh":                                                                { fa: "سراغ", mean: "seeking; coming to" },
    "na-yaa-yad":                                                              { fa: "نیاید", mean: "would not come" },
    "raah-haa-yee":                                                            { fa: "راه‌هایی", mean: "ways" },
    "dar maj-moo":                                                             { fa: "در مجموع", mean: "all together" },
    "maj-moo":                                                                 { fa: "مجموع", mean: "total, whole" },
    "yaad may-ku-nand":                                                        { fa: "یاد می‌کنند", mean: "they call" },
    "yaad kar-dan":                                                            { fa: "یاد کردن", mean: "to call, to mention" },
    "du":                                                                      { fa: "دو", mean: "two" },
    "du naw":                                                                  { fa: "دو نوع", mean: "two kinds" },
    "naw#type":                                                                { fa: "نوع", say: "naw", mean: "kind, type" },
    "ba soo-ra-ti ta-bee-ee":                                                  { fa: "به صورت طبیعی", mean: "naturally" },
    "soo-rat":                                                                 { fa: "صورت", mean: "face, outward form" },
    "ta-bee-ee":                                                               { fa: "طبیعی", mean: "natural, naturally" },
    "fa-aal":                                                                  { fa: "فعال", mean: "active" },
    "sees-tim":                                                                { fa: "سیستم", mean: "system" },
    "i-baa-rat":                                                               { fa: "عبارت", mean: "an expression" },
    "i-baa-rat ast az":                                                        { fa: "عبارت است از", mean: "is, consists of" },
    "az-aa-yee":                                                               { fa: "اعضایی", mean: "organs, members" },
    "ba shar-hi zayr":                                                         { fa: "به شرح زیر", mean: "as follows" },
    "sharh":                                                                   { fa: "شرح", mean: "explanation; as follows" },
    "zayr":                                                                    { fa: "زیر", mean: "under" },
    "poost":                                                                   { fa: "پوست", mean: "skin" },
    "wa-zaa-yif":                                                              { fa: "وظایف", mean: "duties, functions" },
    "um-da-yi":                                                                { fa: "عمدهٔ", mean: "main, major" },
    "maa-ni":                                                                  { fa: "مانع", mean: "obstacle; preventing" },
    "wu-rood":                                                                 { fa: "ورود", mean: "entry, entering" },
    "zi-yaa-dee":                                                              { fa: "زیادی", mean: "many, a great amount" },
    "daa-khil shu-dan":                                                        { fa: "داخل شدن", mean: "getting in" },
    "ta-laash":                                                                { fa: "تلاش", mean: "effort, trying" },
    "ta-laash may-ku-nand":                                                    { fa: "تلاش می‌کنند", mean: "try" },
    "ta-laash kar-dan":                                                        { fa: "تلاش کردن", mean: "to try" },
    "raah-ban-daan":                                                           { fa: "راه‌بندان", mean: "roadblock, blockage" },
    "mu-waa-jih":                                                              { fa: "مواجه", mean: "faced with" },
    "mu-waa-jih shu-da":                                                       { fa: "مواجه شده", mean: "having met" },
    "mu-waa-jih shu-dan":                                                      { fa: "مواجه شدن", mean: "to meet, to face" },
    "daa-khil gar-dand":                                                       { fa: "داخل گردند", mean: "get in" },
    "gar-dand":                                                                { fa: "گردند", mean: "become, enter" },
    "ghi-shaa-yi":                                                             { fa: "غشای", mean: "membrane, with ezafe" },
    "mu-khaa-tee":                                                             { fa: "مخاطی", mean: "mucous" },
    "i-baa-rat az":                                                            { fa: "عبارت از", mean: "consisting of, meaning" },
    "huf-ra-haa-yi":                                                           { fa: "حفره‌های", mean: "cavities" },
    "da-haan":                                                                 { fa: "دهان", mean: "mouth" },
    "halq":                                                                    { fa: "حلق", mean: "throat" },
    "ma-ree":                                                                  { fa: "مری", mean: "gullet, esophagus" },
    "may-baa-shad":                                                            { fa: "می‌باشد", mean: "is" },
    "maa-da-yi":                                                               { fa: "مادهٔ", mean: "substance, material" },
    "chas-paa-na-kee":                                                         { fa: "چسپناکی", mean: "sticky" },
    "sha-beeh":                                                                { fa: "شبیه", mean: "similar to, like" },
    "po-shee-da":                                                              { fa: "پوشیده", mean: "covered" },
    "po-shee-da boo-da":                                                       { fa: "پوشیده بوده", mean: "has been covered" },
    "po-shee-dan":                                                             { fa: "پوشیدن", mean: "putting on, wearing" },
    "boo-da":                                                                  { fa: "بوده", mean: "has been" },
    "maa-da":                                                                  { fa: "ماده", mean: "substance, material" },
    "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad": { fa: "باعث جلوگیری ورود مکروب‌ها به بدن می‌شود", mean: "keeps microbes from getting into the body" },
    "ji-law-gee-ree":                                                          { fa: "جلوگیری", mean: "prevention, stopping" },
    "mi-da":                                                                   { fa: "معده", mean: "stomach" },
    "waa-rid may-sha-wand":                                                    { fa: "وارد می‌شوند", mean: "get in" },
    "tay-zaa-bee":                                                             { fa: "تیزابی", mean: "acidic; an acid" },
    "taw-leed may-sha-wad":                                                    { fa: "تولید می‌شود", mean: "is made" },
    "taw-leed shu-dan":                                                        { fa: "تولید شدن", mean: "to be produced" },
    "az bayn may-ra-wand":                                                     { fa: "از بین می‌روند", mean: "are destroyed" },
    "az bayn raf-tan":                                                         { fa: "از بین رفتن", mean: "to be destroyed" },
    "may-ra-wand":                                                             { fa: "می‌روند", mean: "go" },
    "raf-tan":                                                                 { fa: "رفتن", mean: "to go" },
    "ka-ra-wi-yaa-ti sa-fee-di khoon":                                         { fa: "کرویات سفید خون", mean: "the white blood cells" },
    "sa-feed":                                                                 { fa: "سفید", mean: "white" },
    "zakhm":                                                                   { fa: "زخم", mean: "wound" },
    "ha-maan-jaa-yee":                                                         { fa: "همان‌جایی", mean: "that same place where" },
    "qud-rat":                                                                 { fa: "قدرت", mean: "power" },
    "kaar-aa-yee":                                                             { fa: "کارآیی", mean: "ability to work, effectiveness" },
    "az dast daa-da ast":                                                      { fa: "از دست داده است", mean: "has lost" },
    "az dast daa-dan":                                                         { fa: "از دست دادن", mean: "to lose" },
    "dast":                                                                    { fa: "دست", mean: "hand" },
    "waa-ri-di ba-dan may-gar-dand":                                           { fa: "وارد بدن می‌گردند", mean: "enter the body" },
    "dast ba kaar shu-da":                                                     { fa: "دست به کار شده", mean: "setting to work" },
    "kaar":                                                                    { fa: "کار", mean: "work, a job" },
    "tar-shuh":                                                                { fa: "ترشح", mean: "secretion, giving off" },
    "ku-shan-da-yi":                                                           { fa: "کشندهٔ", mean: "killing, deadly" },
    "aa-ghaaz may-ku-nand":                                                    { fa: "آغاز می‌کنند", mean: "begin" },
    "aa-ghaaz kar-dan":                                                        { fa: "آغاز کردن", mean: "to begin" },
    "al-bat-ta":                                                               { fa: "البته", mean: "of course" },
    "yaad shu-da":                                                             { fa: "یاد شده", mean: "mentioned" },
    "az bayn bi-ba-rad":                                                       { fa: "از بین ببرد", mean: "destroy" },
    "bi-ba-rad":                                                               { fa: "ببرد", mean: "carry; (with ba kaar) use" },
    "nuh":                                                                     { fa: "نه", mean: "nine" },
    "du-wo-meen":                                                              { fa: "دومین", mean: "second" },
    "taq-seem may-sha-wad":                                                    { fa: "تقسیم می‌شود", mean: "is divided" },
    "wi-qaa-ya-wee":                                                           { fa: "وقایوی", mean: "preventive" },
    "mu-aa-la-ja-wee":                                                         { fa: "معالجوی", mean: "curative, for treatment" },
    "ri-aa-yat":                                                               { fa: "رعایت", mean: "observing, keeping to" },
    "tat-beeq":                                                                { fa: "تطبیق", mean: "carrying out, applying" },
    "sil-si-la":                                                               { fa: "سلسله", mean: "series" },
    "bar-naa-ma-haa":                                                          { fa: "برنامه‌ها", mean: "programs, measures" },
    "ji-hat":                                                                  { fa: "جهت", mean: "direction" },
    "pesh-gee-ree":                                                            { fa: "پیشگیری", mean: "prevention" },
    "aa-loo-da shu-dan":                                                       { fa: "آلوده شدن", mean: "getting infected" },
    "mu-him-ta-reen":                                                          { fa: "مهمترین", mean: "most important" },
    "qa-raar":                                                                 { fa: "قرار", mean: "place, rest" },
    "qa-raa-ri zayl":                                                          { fa: "قرار ذیل", mean: "as follows" },
    "zayl":                                                                    { fa: "ذیل", mean: "below, following" },
    "waak-seen-haa-yi":                                                        { fa: "واکسین‌های", mean: "vaccines" },
    "maw-ri-di ni-yaa-zi ba-dan":                                              { fa: "مورد نیاز بدن", mean: "that the body needs" },
    "mu-taa-biq":                                                              { fa: "مطابق", mean: "according to" },
    "bar-naa-ma-haa-yi":                                                       { fa: "برنامه‌های", mean: "programs, measures" },
    "si-hee":                                                                  { fa: "صحی", mean: "healthy, hygienic, medical" },
    "doo-ray":                                                                 { fa: "دوری", mean: "far (door + -ay, a: “a far …”)" },
    "doo-ray gu-zee-dan":                                                      { fa: "دوری گزیدن", mean: "keeping away" },
    "gu-zee-dan":                                                              { fa: "گزیدن", mean: "to choose" },
    "taa":                                                                     { fa: "تا", mean: "so that; until; to" },
    "taa ha-di mum-kin":                                                       { fa: "تا حد ممکن", mean: "as far as possible" },
    "had":                                                                     { fa: "حد", mean: "extent, limit" },
    "zid":                                                                     { fa: "ضد", mean: "anti-, against" },
    "zid u-foo-nee ku-nan-da":                                                 { fa: "ضد عفونی کننده", mean: "disinfectant" },
    "u-foo-nee":                                                               { fa: "عفونی", mean: "infectious, infected" },
    "jaa-haa":                                                                 { fa: "جاها", mean: "places" },
    "laa-zim":                                                                 { fa: "لازم", mean: "necessary" },
    "da-waa-paa-shee":                                                         { fa: "دواپاشی", mean: "spraying insecticide" },
    "fas-lee":                                                                 { fa: "فصلی", mean: "seasonal" },
    "ma-naa-zil":                                                              { fa: "منازل", mean: "homes, houses" },
    "mas-koo-nee":                                                             { fa: "مسکونی", mean: "residential" },
    "daf":                                                                     { fa: "دفع", mean: "removal, repelling" },
    "ha-sha-raa-tee":                                                          { fa: "حشراتی", mean: "insects that, some insects" },
    "az qa-beel":                                                              { fa: "از قبیل", mean: "such as" },
    "qa-beel":                                                                 { fa: "قبیل", mean: "kind (az qa-beel, such as)" },
    "khasak":                                                                  { fa: "خسک", mean: "tick, small parasite" },
    "na-zaa-fat":                                                              { fa: "نظافت", mean: "cleanliness, cleaning" },
    "paa-kee":                                                                 { fa: "پاکی", mean: "cleaning (maa-yin paa-kee, mine clearance)" },
    "da-qeeq":                                                                 { fa: "دقیق", mean: "careful, exact" },
    "la-waa-zim":                                                              { fa: "لوازم", mean: "items, equipment" },
    "as-baab":                                                                 { fa: "اسباب", mean: "things, equipment" },
    "khaa-na":                                                                 { fa: "خانه", mean: "house, home" },
    "aash-paz-khaa-na":                                                        { fa: "آشپزخانه", mean: "kitchen" },
    "ba khu-soos":                                                             { fa: "به خصوص", mean: "especially" },
    "khu-soos":                                                                { fa: "خصوص", mean: "especially, respect" },
    "zarf-haa-yi":                                                             { fa: "ظرف‌های", mean: "dishes, containers" },
    "dast-haa":                                                                { fa: "دست‌ها", mean: "hands" },
    "ba way-zha":                                                              { fa: "به ویژه", mean: "especially" },
    "way-zha":                                                                 { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "han-gaam":                                                                { fa: "هنگام", mean: "time (han-gaam-i, at the time of)" },
    "dast-gee-ra-yi":                                                          { fa: "دستگیرهٔ", mean: "handle, with ezafe" },
    "dar-waa-za":                                                              { fa: "دروازه", mean: "gate" },
    "tash-naab":                                                               { fa: "تشناب", mean: "toilet" },
    "baank-noot-haa":                                                          { fa: "بانکنوت‌ها", mean: "banknotes" },
    "sik-ka-haa-yi":                                                           { fa: "سکه‌های", mean: "coins" },
    "fi-li-zee":                                                               { fa: "فلزی", mean: "metal" },
    "dast-gee-ra":                                                             { fa: "دستگیره", mean: "handle" },
    "sir-wees-haa-yi":                                                         { fa: "سرویس‌های", mean: "services, vehicles" },
    "shah-ree":                                                                { fa: "شهری", mean: "urban, city" },
    "ta-waj-juh":                                                              { fa: "توجه", mean: "attention" },
    "jid-dee":                                                                 { fa: "جدی", mean: "serious, seriously" },
    "aa-shaa-mee-da-nee":                                                      { fa: "آشامیدنی", mean: "drinking, drinkable" },
    "sab-zee-haa":                                                             { fa: "سبزی‌ها", mean: "vegetables" },
    "may-wa-haa-yi":                                                           { fa: "میوه‌های", mean: "fruits" },
    "taa-za":                                                                  { fa: "تازه", mean: "fresh" },
    "mu-saab":                                                                 { fa: "مصاب", mean: "afflicted, infected" },
    "mu-saab shu-dan":                                                         { fa: "مصاب شدن", mean: "falling ill" },
    "taj-weez":                                                                { fa: "تجویز", mean: "prescription, prescribing" },
    "daak-tar":                                                                { fa: "داکتر", mean: "doctor" },
    "an-tee-bee-yo-teek-haa":                                                  { fa: "انتی‌بیوتیک‌ها", mean: "antibiotics" },
    "zid mak-roo-bee":                                                         { fa: "ضد مکروبی", mean: "antimicrobial" },
    "maw-ri-di is-ti-faa-da qa-raar gee-rad":                                  { fa: "مورد استفاده قرار گیرد", mean: "be used" },
    "gee-rad":                                                                 { fa: "گیرد", mean: "take; (with qa-raar) be placed" },
    "gu-roo-hee":                                                              { fa: "گروهی", mean: "a group, a kind" },
    "da-waa-haa-st":                                                           { fa: "دواهاست", mean: "are medicines" },
    "za-maa-nay":                                                              { fa: "زمانی", mean: "at times; a time" },
    "kee-mee-yaa-wee":                                                         { fa: "کیمیاوی", mean: "chemical" },
    "ham":                                                                     { fa: "هم", mean: "also, too" },
    "tar-keeb":                                                                { fa: "ترکیب", mean: "compound, composition" },
    "har":                                                                     { fa: "هر", mean: "every" },
    "du-rust":                                                                 { fa: "درست", mean: "right, correct" },
    "du-rust shu-da":                                                          { fa: "درست شده", mean: "have been made" },
    "du-rust shu-dan":                                                         { fa: "درست شدن", mean: "to be made" },
    "an-tee-bee-yo-teek":                                                      { fa: "انتی‌بیوتیک", mean: "antibiotic" },
    "daa-nish-man-dee":                                                        { fa: "دانشمندی", mean: "a scientist" },
    "fi-lim-ing":                                                              { fa: "فلمینگ", mean: "Fleming" },
    "ta-hay-ya":                                                               { fa: "تهیه", mean: "preparation, producing" },
    "ta-hay-ya shud":                                                          { fa: "تهیه شد", mean: "was prepared" },
    "ta-hay-ya shu-dan":                                                       { fa: "تهیه شدن", mean: "to be prepared" },
    "shud":                                                                    { fa: "شد", mean: "became; was" },
    "tah-qeeq":                                                                { fa: "تحقیق", mean: "research" },
    "pa-zho-hish":                                                             { fa: "پژوهش", mean: "research, investigation" },
    "rushd":                                                                   { fa: "رشد", mean: "growth" },
    "rushd daa-dan":                                                           { fa: "رشد دادن", mean: "growing" },
    "po-pinak":                                                                { fa: "پوپنک", mean: "mold" },
    "pi-nee":                                                                  { fa: "پنی", mean: "peni-, from Penicillium" },
    "see-leem":                                                                { fa: "سیلیم", mean: "cillium, from Penicillium" },
    "maa-da-yee":                                                              { fa: "ماده‌یی", mean: "a substance" },
    "saakht":                                                                  { fa: "ساخت", mean: "made" },
    "khaa-see-yat":                                                            { fa: "خاصیت", mean: "property, quality" },
    "qa-wee":                                                                  { fa: "قوی", mean: "strong" },
    "mak-roob-ku-shee":                                                        { fa: "مکروب‌کشی", mean: "germ-killing" },
    "bood":                                                                    { fa: "بود", mean: "was" },
    "pi-nee see-leen":                                                         { fa: "پنی سیلین", mean: "penicillin" },
    "see-leen":                                                                { fa: "سیلین", mean: "cillin" },
    "naam gu-zaasht":                                                          { fa: "نام گذاشت", mean: "named" },
    "naam gu-zaash-tan":                                                       { fa: "نام گذاشتن", mean: "to name" },
    "gu-zaasht":                                                               { fa: "گذاشت", mean: "put, named" },
    "gu-zaash-tan":                                                            { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "im-roz":                                                                  { fa: "امروز", mean: "today" },
    "dar-maan":                                                                { fa: "درمان", mean: "treatment, cure" }
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
    "say": "maw-joo-di koo-chak, dush-ma-ni bu-zurg",
    "mean": "A small creature, a big enemy",
    "words": [
      [
        "موجود",
        "maw-joo-di",
        "maw-jood"
      ],
      [
        "کوچک،",
        "koo-chak",
        "koo-chak"
      ],
      [
        "دشمن",
        "dush-ma-ni",
        "dush-man"
      ],
      [
        "بزرگ",
        "bu-zurg",
        "bu-zurg"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "maw-joo-daa-ti zar-ra-bee-nee wa ko-cha-kee ki ha-may-sha, ha-ma jaa wa dar ha-ma sha-raa-yit dar at-raa-fi maa ka-meen gi-rif-ta wa mun-ta-zi-ri ba-dast aa-war-dan fur-sa-ti ham-la ba maa may-baa-shand; mak-roob naa-mee-da may-sha-wand.",
        "mean": "The tiny, microscopic creatures that are always lying in wait around us, everywhere and in every condition, waiting for a chance to attack us, are called microbes.",
        "words": [
          [
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "ذره‌بینی",
            "zar-ra-bee-nee",
            "zar-ra-bee-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کوچکی",
            "ko-cha-kee",
            "ko-cha-kee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "همیشه،",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma",
            "ha-ma jaa"
          ],
          [
            "جا",
            "jaa",
            "jaa",
            "ha-ma jaa"
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
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "شرایط",
            "sha-raa-yit",
            "sha-raa-yit"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "اطراف",
            "at-raa-fi",
            "at-raaf"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "کمین",
            "ka-meen",
            "ka-meen",
            "ka-meen gi-rif-ta",
            "ka-meen gi-rif-tan"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "ka-meen gi-rif-ta",
            "gi-rif-tan",
            "ka-meen gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "منتظر",
            "mun-ta-zi-ri",
            "mun-ta-zir"
          ],
          [
            "به‌دست",
            "ba-dast",
            "ba-dast",
            "ba-dast aa-war-dan"
          ],
          [
            "آوردن",
            "aa-war-dan",
            "aa-war-dan",
            "ba-dast aa-war-dan"
          ],
          [
            "فرصت",
            "fur-sa-ti",
            "fur-sat"
          ],
          [
            "حمله",
            "ham-la",
            "ham-la"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "می‌باشند؛",
            "may-baa-shand",
            "may-baa-shand",
            "bu-dan"
          ],
          [
            "مکروب",
            "mak-roob",
            "mak-roob"
          ],
          [
            "نامیده",
            "naa-mee-da",
            "naa-mee-da",
            "naa-mee-da may-sha-wand",
            "naa-mee-dan",
            "naa-mee-da shu-dan"
          ],
          [
            "می‌شوند.",
            "may-sha-wand",
            "may-sha-wand",
            "naa-mee-da may-sha-wand",
            "shu-dan",
            "naa-mee-da shu-dan"
          ]
        ]
      },
      {
        "say": "een maw-joo-daat ba qa-dree koo-chak and ki na-may-sha-wad aan-haa raa baa chashm mu-shaa-hi-da na-mood, az-een-roo ba-raa-yi mu-shaa-hi-da-yi aan-haa az mak-ros-kob is-ti-faa-da may-sha-wad.",
        "mean": "These creatures are so small that they cannot be seen with the eye, so a microscope is used to see them.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "موجودات",
            "maw-joo-daat",
            "maw-joo-daat"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba qa-dree"
          ],
          [
            "قدری",
            "qa-dree",
            "qa-dree",
            "ba qa-dree"
          ],
          [
            "کوچک",
            "koo-chak",
            "koo-chak"
          ],
          [
            "اند",
            "and",
            "and"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "نمی‌شود",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "shu-dan"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
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
            "چشم",
            "chashm",
            "chashm"
          ],
          [
            "مشاهده",
            "mu-shaa-hi-da",
            "mu-shaa-hi-da",
            "mu-shaa-hi-da na-mood",
            "mu-shaa-hi-da na-mo-dan"
          ],
          [
            "نمود،",
            "na-mood",
            "na-mood",
            "mu-shaa-hi-da na-mood",
            "na-mo-dan",
            "mu-shaa-hi-da na-mo-dan"
          ],
          [
            "ازین‌رو",
            "az-een-roo",
            "az-een-roo"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "مشاهدهٔ",
            "mu-shaa-hi-da-yi",
            "mu-shaa-hi-da"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مکروسکوب",
            "mak-ros-kob",
            "mak-ros-kob"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "is-ti-faa-da may-sha-wad",
            "is-ti-faa-da shu-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "is-ti-faa-da may-sha-wad",
            "shu-dan",
            "is-ti-faa-da shu-dan"
          ]
        ]
      },
      {
        "say": "har-chand waa-zha-yi mak-roob yak is-ti-laa-hi kul-lee wa ghayr-il-mee ast;",
        "mean": "Although the word microbe is a general, unscientific term,",
        "words": [
          [
            "هرچند",
            "har-chand",
            "har-chand"
          ],
          [
            "واژهٔ",
            "waa-zha-yi",
            "waa-zha"
          ],
          [
            "مکروب",
            "mak-roob",
            "mak-roob"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "اصطلاح",
            "is-ti-laa-hi",
            "is-ti-laah"
          ],
          [
            "کلی",
            "kul-lee",
            "kul-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غیرعلمی",
            "ghayr-il-mee",
            "ghayr-il-mee"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "am-maa dar zu-baa-ni mu-haa-wi-ra-yee baysh-tar baak-ti-ree-haa, wee-roos-haa, fun-jee-haa, pro-to-zo-aa-haa wa an-waa-yi dee-gar aan raa ki sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand, mak-roob may-go-yand.",
        "mean": "in everyday speech bacteria, viruses, fungi, protozoa and their other kinds that cause various diseases are mostly called microbes.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
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
            "محاوره‌یی",
            "mu-haa-wi-ra-yee",
            "mu-haa-wi-ra-yee"
          ],
          [
            "بیشتر",
            "baysh-tar",
            "baysh-tar"
          ],
          [
            "باکتری‌ها،",
            "baak-ti-ree-haa",
            "baak-ti-ree-haa"
          ],
          [
            "ویروس‌ها،",
            "wee-roos-haa",
            "wee-roos-haa"
          ],
          [
            "فنجی‌ها،",
            "fun-jee-haa",
            "fun-jee-haa"
          ],
          [
            "پروتوزواها",
            "pro-to-zo-aa-haa",
            "pro-to-zo-aa-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
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
            "سبب",
            "sa-ba-bi",
            "sa-bab",
            "sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "تولید",
            "taw-lee-di",
            "taw-leed",
            "sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "امراض",
            "am-raa-zi",
            "am-raaz",
            "sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon",
            "sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "می‌گردند،",
            "may-gar-dand",
            "may-gar-dand",
            "sa-ba-bi taw-lee-di am-raa-zi goo-naa-goon may-gar-dand",
            "gar-dee-dan"
          ],
          [
            "مکروب",
            "mak-roob",
            "mak-roob"
          ],
          [
            "می‌گویند.",
            "may-go-yand",
            "may-go-yand",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "mak-roob-haa daa-raa-yi an-waa wa ash-kaa-li mukh-ta-li-fee has-tand ki khud raa baa she-wa-haa-yi-yi goo-naa-goon az yak jaa ba-jaa-yi dee-gar in-ti-qaal may-di-hand.",
        "mean": "Microbes come in many different kinds and shapes, and they move themselves from one place to another in various ways.",
        "words": [
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "انواع",
            "an-waa",
            "an-waa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اشکال",
            "ash-kaa-li",
            "ash-kaal"
          ],
          [
            "مختلفی",
            "mukh-ta-li-fee",
            "mukh-ta-li-fee"
          ],
          [
            "هستند",
            "has-tand",
            "has-tand",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "شیوه‌های",
            "she-wa-haa-yi-yi",
            "she-wa-haa-yi"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "انتقال",
            "in-ti-qaal",
            "in-ti-qaal",
            "in-ti-qaal may-di-hand",
            "in-ti-qaal daa-dan"
          ],
          [
            "می‌دهند.",
            "may-di-hand",
            "may-di-hand",
            "in-ti-qaal may-di-hand",
            "daa-dan",
            "in-ti-qaal daa-dan"
          ]
        ]
      },
      {
        "say": "aan-haa dar mi-yaa-ni aab, baad, khaak, ha-waa, ma-waa-di gha-zaa-yee-yi naa-paak, li-baas, sab-zee-haa-yi-yi naa-shus-ta wa khu-laa-sa dar ha-ma jaa wu-jood daa-rand ki ba wa-see-la-yi aab, baad, khaak, ma-gas, kayk, shi-pish, pa-sha, ha-sha-raat wa ha-ya-waa-naa-ti koo-chak in-ti-qaal yaaf-ta baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand.",
        "mean": "They are in water, wind, soil, air, dirty food, clothes, unwashed vegetables, in short everywhere, and carried by water, wind, soil, flies, fleas, lice, mosquitoes, insects and small animals, they cause various diseases.",
        "words": [
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
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
            "آب،",
            "aab",
            "aab"
          ],
          [
            "باد،",
            "baad",
            "baad"
          ],
          [
            "خاک،",
            "khaak",
            "khaak"
          ],
          [
            "هوا،",
            "ha-waa",
            "ha-waa"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "غذایی",
            "gha-zaa-yee-yi",
            "gha-zaa-yee"
          ],
          [
            "ناپاک،",
            "naa-paak",
            "naa-paak"
          ],
          [
            "لباس،",
            "li-baas",
            "li-baas"
          ],
          [
            "سبزی‌های",
            "sab-zee-haa-yi-yi",
            "sab-zee-haa-yi"
          ],
          [
            "ناشسته",
            "naa-shus-ta",
            "naa-shus-ta",
            "shus-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خلاصه",
            "khu-laa-sa",
            "khu-laa-sa"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "جا",
            "jaa",
            "jaa"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood"
          ],
          [
            "دارند",
            "daa-rand",
            "daa-rand",
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
            "ba",
            "ba wa-see-la-yi"
          ],
          [
            "وسیلهٔ",
            "wa-see-la-yi",
            "wa-see-la-yi",
            "ba wa-see-la-yi"
          ],
          [
            "آب،",
            "aab",
            "aab"
          ],
          [
            "باد،",
            "baad",
            "baad"
          ],
          [
            "خاک،",
            "khaak",
            "khaak"
          ],
          [
            "مگس،",
            "ma-gas",
            "ma-gas"
          ],
          [
            "کَیک،",
            "kayk",
            "kayk"
          ],
          [
            "شپش،",
            "shi-pish",
            "shi-pish"
          ],
          [
            "پشه،",
            "pa-sha",
            "pa-sha"
          ],
          [
            "حشرات",
            "ha-sha-raat",
            "ha-sha-raat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حیوانات",
            "ha-ya-waa-naa-ti",
            "ha-ya-waa-naat"
          ],
          [
            "کوچک",
            "koo-chak",
            "koo-chak"
          ],
          [
            "انتقال",
            "in-ti-qaal",
            "in-ti-qaal",
            "in-ti-qaal yaaf-ta",
            "in-ti-qaal yaaf-tan"
          ],
          [
            "یافته",
            "yaaf-ta",
            "yaaf-ta",
            "in-ti-qaal yaaf-ta",
            "yaaf-tan",
            "in-ti-qaal yaaf-tan"
          ],
          [
            "باعث",
            "baa-i-si",
            "baa-is",
            "baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "ایجاد",
            "ee-jaa-di",
            "ee-jaad",
            "baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "امراض",
            "am-raa-zi",
            "am-raaz",
            "baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon",
            "baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand"
          ],
          [
            "می‌گردند.",
            "may-gar-dand",
            "may-gar-dand",
            "baa-i-si ee-jaa-di am-raa-zi goo-naa-goon may-gar-dand",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "naw-ee az aan-haa wee-roos naam daa-rad ki bi-si-yaar ko-chak-tar az baak-ti-ree-haa-st wa dar mu-hee-ti aa-zaad zin-da na-may-maa-nad.",
        "mean": "One kind of them is called a virus; it is much smaller than bacteria and does not stay alive in the open.",
        "words": [
          [
            "نوعی",
            "naw-ee",
            "naw-ee"
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
            "ویروس",
            "wee-roos",
            "wee-roos"
          ],
          [
            "نام",
            "naam",
            "naam",
            "naam daa-rad",
            "naam daash-tan"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "naam daa-rad",
            "daash-tan",
            "naam daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "کوچکتر",
            "ko-chak-tar",
            "ko-chak-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "باکتری‌هاست",
            "baak-ti-ree-haa-st",
            "baak-ti-ree-haa-st"
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
            "محیط",
            "mu-hee-ti",
            "mu-heet"
          ],
          [
            "آزاد",
            "aa-zaad",
            "aa-zaad"
          ],
          [
            "زنده",
            "zin-da",
            "zin-da"
          ],
          [
            "نمی‌ماند.",
            "na-may-maa-nad",
            "na-may-maa-nad",
            "maan-dan"
          ]
        ]
      },
      {
        "say": "wee-roos fa-qat daa-khi-li huj-ra-haa-yi-yi zin-da-yi maw-joo-daa-ti dee-gar may-ta-waa-nad ta-kaa-sur ku-nad wa jaa-na-wa-raan wa gi-yaa-haan raa mub-ta-laa ba am-raa-zi mukh-ta-lif na-maa-yad.",
        "mean": "A virus can multiply only inside the living cells of other creatures, and it infects animals and plants with various diseases.",
        "words": [
          [
            "ویروس",
            "wee-roos",
            "wee-roos"
          ],
          [
            "فقط",
            "fa-qat",
            "fa-qat"
          ],
          [
            "داخل",
            "daa-khi-li",
            "daa-khil"
          ],
          [
            "حجره‌های",
            "huj-ra-haa-yi-yi",
            "huj-ra-haa-yi"
          ],
          [
            "زندهٔ",
            "zin-da-yi",
            "zin-da"
          ],
          [
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "می‌تواند",
            "may-ta-waa-nad",
            "may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "تکثر",
            "ta-kaa-sur",
            "ta-kaa-sur",
            "ta-kaa-sur ku-nad",
            "ta-kaa-sur kar-dan"
          ],
          [
            "کند",
            "ku-nad",
            "ku-nad",
            "ta-kaa-sur ku-nad",
            "kar-dan",
            "ta-kaa-sur kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جانوران",
            "jaa-na-wa-raan",
            "jaa-na-wa-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گیاهان",
            "gi-yaa-haan",
            "gi-yaa-haan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "مبتلا",
            "mub-ta-laa",
            "mub-ta-laa",
            "mub-ta-laa ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "mub-ta-laa ba"
          ],
          [
            "امراض",
            "am-raa-zi",
            "am-raaz"
          ],
          [
            "مختلف",
            "mukh-ta-lif",
            "mukh-ta-lif"
          ],
          [
            "نماید.",
            "na-maa-yad",
            "na-maa-yad",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "baak-ti-ree-haa gu-ro-hi dee-ga-ray az een maw-joo-daa-ti yak huj-ra-yee zar-ra bee-nee has-tand ki po-shi-shi bay-roo-nee-yi nis-ba-tan za-khee-mee aan-haa raa i-haa-ta kar-da ast.",
        "mean": "Bacteria are another group of these microscopic one-celled creatures, surrounded by a fairly thick outer covering.",
        "words": [
          [
            "باکتری‌ها",
            "baak-ti-ree-haa",
            "baak-ti-ree-haa"
          ],
          [
            "گروه",
            "gu-ro-hi",
            "gu-roh"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
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
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "یک",
            "yak",
            "yak",
            "yak huj-ra-yee"
          ],
          [
            "حجره‌یی",
            "huj-ra-yee",
            "huj-ra-yee",
            "yak huj-ra-yee"
          ],
          [
            "ذره",
            "zar-ra",
            "zar-ra",
            "zar-ra bee-nee"
          ],
          [
            "بینی",
            "bee-nee",
            "bee-nee",
            "zar-ra bee-nee"
          ],
          [
            "هستند",
            "has-tand",
            "has-tand",
            "bu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پوشش",
            "po-shi-shi",
            "po-shish"
          ],
          [
            "بیرونی",
            "bay-roo-nee-yi",
            "bay-roo-nee"
          ],
          [
            "نسبتاً",
            "nis-ba-tan",
            "nis-ba-tan"
          ],
          [
            "ضخیمی",
            "za-khee-mee",
            "za-khee-mee"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "احاطه",
            "i-haa-ta",
            "i-haa-ta",
            "i-haa-ta kar-da ast",
            "i-haa-ta kar-dan"
          ],
          [
            "کرده",
            "kar-da",
            "kar-da",
            "i-haa-ta kar-da ast",
            "kar-dan",
            "i-haa-ta kar-dan"
          ],
          [
            "است.",
            "ast",
            "ast",
            "i-haa-ta kar-da ast",
            "i-haa-ta kar-dan"
          ]
        ]
      },
      {
        "say": "baak-ti-ree-haa nis-bat ba wee-roos-haa bu-zurg-tar has-tand wa ghaa-li-ban mo-ji-bi fa-aa-lee-yat-haa-yi-yi mu-feed may-sha-wand;",
        "mean": "Bacteria are bigger than viruses and mostly do useful work;",
        "words": [
          [
            "باکتری‌ها",
            "baak-ti-ree-haa",
            "baak-ti-ree-haa"
          ],
          [
            "نسبت",
            "nis-bat",
            "nis-bat"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ویروس‌ها",
            "wee-roos-haa",
            "wee-roos-haa"
          ],
          [
            "بزرگتر",
            "bu-zurg-tar",
            "bu-zurg-tar"
          ],
          [
            "هستند",
            "has-tand",
            "has-tand",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غالباً",
            "ghaa-li-ban",
            "ghaa-li-ban"
          ],
          [
            "موجب",
            "mo-ji-bi",
            "mo-jib"
          ],
          [
            "فعالیت‌های",
            "fa-aa-lee-yat-haa-yi-yi",
            "fa-aa-lee-yat-haa-yi"
          ],
          [
            "مفید",
            "mu-feed",
            "mu-feed"
          ],
          [
            "می‌شوند؛",
            "may-sha-wand",
            "may-sha-wand",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "maa-nand: ta-kham-mu-ri kha-mee-ri naan, tab-deel kar-dan sheer ba maast, tursh saakh-ta-ni sir-ka wa tur-shee wa....",
        "mean": "for example, making bread dough rise, turning milk into yogurt, souring vinegar and pickles, and so on.",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "تخمر",
            "ta-kham-mu-ri",
            "ta-kham-mur"
          ],
          [
            "خمیر",
            "kha-mee-ri",
            "kha-meer"
          ],
          [
            "نان،",
            "naan",
            "naan"
          ],
          [
            "تبدیل",
            "tab-deel",
            "tab-deel",
            "tab-deel kar-dan"
          ],
          [
            "کردن",
            "kar-dan",
            "kar-dan",
            "tab-deel kar-dan"
          ],
          [
            "شیر",
            "sheer",
            "sheer"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ماست،",
            "maast",
            "maast"
          ],
          [
            "ترش",
            "tursh",
            "tursh"
          ],
          [
            "ساختن",
            "saakh-ta-ni",
            "saakh-tan"
          ],
          [
            "سرکه",
            "sir-ka",
            "sir-ka"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ترشی",
            "tur-shee",
            "tur-shee"
          ],
          [
            "و....",
            "wa",
            "wa"
          ]
        ]
      },
      {
        "say": "ta-daa-di ka-mee az aan-haa dar in-saan-haa, ha-ya-waa-naat wa gi-yaa-haan taw-lee-di bee-maa-ree may-ku-nand;",
        "mean": "Only a small number of them cause disease in people, animals and plants;",
        "words": [
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "کمی",
            "ka-mee",
            "ka-mee"
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
            "dar"
          ],
          [
            "انسان‌ها،",
            "in-saan-haa",
            "in-saan-haa",
            "in-saan"
          ],
          [
            "حیوانات",
            "ha-ya-waa-naat",
            "ha-ya-waa-naat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گیاهان",
            "gi-yaa-haan",
            "gi-yaa-haan"
          ],
          [
            "تولید",
            "taw-lee-di",
            "taw-leed",
            "taw-lee-di bee-maa-ree may-ku-nand"
          ],
          [
            "بیماری",
            "bee-maa-ree",
            "bee-maa-ree",
            "taw-lee-di bee-maa-ree may-ku-nand"
          ],
          [
            "می‌کنند؛",
            "may-ku-nand",
            "may-ku-nand",
            "taw-lee-di bee-maa-ree may-ku-nand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "ba-tawr kul-lee bi-doo-ni fa-aa-lee-ya-ti aan-haa, ha-yaat bar ro-yi za-meen mukh-tal may-gar-dad.",
        "mean": "in general, without their activity, life on earth would break down.",
        "words": [
          [
            "به‌طور",
            "ba-tawr",
            "ba-tawr",
            "ba-tawr kul-lee"
          ],
          [
            "کلی",
            "kul-lee",
            "kul-lee",
            "ba-tawr kul-lee"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "فعالیت",
            "fa-aa-lee-ya-ti",
            "fa-aa-lee-yat"
          ],
          [
            "آن‌ها،",
            "aan-haa",
            "aan-haa"
          ],
          [
            "حیات",
            "ha-yaat",
            "ha-yaat"
          ],
          [
            "بر",
            "bar",
            "bar"
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
            "مختل",
            "mukh-tal",
            "mukh-tal",
            "mukh-tal may-gar-dad",
            "mukh-tal gar-dee-dan"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "mukh-tal may-gar-dad",
            "gar-dee-dan",
            "mukh-tal gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "baysh-ta-ri mak-roob-haa-yee ki taw-lee-di bee-maa-ree may-ku-nand, tu-fay-lee has-tand;",
        "mean": "Most microbes that cause disease are parasites;",
        "words": [
          [
            "بیشتر",
            "baysh-ta-ri",
            "baysh-tar"
          ],
          [
            "مکروب‌هایی",
            "mak-roob-haa-yee",
            "mak-roob-haa-yee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تولید",
            "taw-lee-di",
            "taw-leed",
            "taw-lee-di bee-maa-ree may-ku-nand"
          ],
          [
            "بیماری",
            "bee-maa-ree",
            "bee-maa-ree",
            "taw-lee-di bee-maa-ree may-ku-nand"
          ],
          [
            "می‌کنند،",
            "may-ku-nand",
            "may-ku-nand",
            "taw-lee-di bee-maa-ree may-ku-nand",
            "kar-dan"
          ],
          [
            "طفیلی",
            "tu-fay-lee",
            "tu-fay-lee"
          ],
          [
            "هستند؛",
            "has-tand",
            "has-tand",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "yaa-nee dar ba-da-ni jaan-daa-raa-ni dee-gar ba sar may-ba-rand wa az aan-haa gha-zaa ba-dast may-aa-wa-rand;",
        "mean": "that is, they live in the bodies of other living things and get food from them,",
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
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "جانداران",
            "jaan-daa-raa-ni",
            "jaan-daa-raan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba sar may-ba-rand",
            "ba sar bur-dan"
          ],
          [
            "سر",
            "sar",
            "sar",
            "ba sar may-ba-rand",
            "ba sar bur-dan"
          ],
          [
            "می‌برند",
            "may-ba-rand",
            "may-ba-rand",
            "ba sar may-ba-rand",
            "bur-dan",
            "ba sar bur-dan"
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
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "غذا",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "به‌دست",
            "ba-dast",
            "ba-dast",
            "ba-dast may-aa-wa-rand",
            "ba-dast aa-war-dan"
          ],
          [
            "می‌آورند؛",
            "may-aa-wa-rand",
            "may-aa-wa-rand",
            "ba-dast may-aa-wa-rand",
            "aa-war-dan",
            "ba-dast aa-war-dan"
          ]
        ]
      },
      {
        "say": "zee-raa khu-dish-aan na-may-ta-waa-nand maa-nan-di gi-yaa-haa-ni sabz, gha-zaa-yi maw-ri-di ni-yaa-zi shaan raa bi-saa-zand;",
        "mean": "because they themselves cannot make the food they need, as green plants do;",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "خودشان",
            "khu-dish-aan",
            "khu-dish-aan"
          ],
          [
            "نمی‌توانند",
            "na-may-ta-waa-nand",
            "na-may-ta-waa-nand",
            "ta-waa-nis-tan"
          ],
          [
            "مانند",
            "maa-nan-di",
            "maa-nand"
          ],
          [
            "گیاهان",
            "gi-yaa-haa-ni",
            "gi-yaa-haan"
          ],
          [
            "سبز،",
            "sabz",
            "sabz"
          ],
          [
            "غذای",
            "gha-zaa-yi",
            "gha-zaa-yi"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di ni-yaa-zi shaan"
          ],
          [
            "نیاز",
            "ni-yaa-zi",
            "ni-yaaz",
            "maw-ri-di ni-yaa-zi shaan"
          ],
          [
            "شان",
            "shaan",
            "shaan",
            "maw-ri-di ni-yaa-zi shaan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بسازند؛",
            "bi-saa-zand",
            "bi-saa-zand",
            "saakh-tan"
          ]
        ]
      },
      {
        "say": "ba-naa-ba-raan baa-yad gha-zaa-yi khud raa ba-taw-ri mus-ta-qeem yaa ghay-ri-mus-ta-qeem az maw-joo-daa-ti zin-da-yi dee-gar ba-dast aa-wa-rand;",
        "mean": "so they must get their food directly or indirectly from other living creatures.",
        "words": [
          [
            "بنابراین",
            "ba-naa-ba-raan",
            "ba-naa-ba-raan"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "غذای",
            "gha-zaa-yi",
            "gha-zaa-yi"
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
            "به‌طور",
            "ba-taw-ri",
            "ba-tawr",
            "ba-taw-ri mus-ta-qeem"
          ],
          [
            "مستقیم",
            "mus-ta-qeem",
            "mus-ta-qeem",
            "ba-taw-ri mus-ta-qeem"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "غیر‌مستقیم",
            "ghay-ri-mus-ta-qeem",
            "ghay-ri-mus-ta-qeem"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "موجودات",
            "maw-joo-daa-ti",
            "maw-joo-daat"
          ],
          [
            "زندهٔ",
            "zin-da-yi",
            "zin-da"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به‌دست",
            "ba-dast",
            "ba-dast",
            "ba-dast aa-wa-rand"
          ],
          [
            "آورند؛",
            "aa-wa-rand",
            "aa-wa-rand",
            "ba-dast aa-wa-rand",
            "aa-war-dan"
          ]
        ]
      },
      {
        "say": "pas az aan-ki mak-roob-haa ba-jaa-yi mu-naa-si-bee az ba-dan waa-rid shu-dand; ba sur-at ta-kaa-sur may-ku-nand",
        "mean": "After microbes have entered a suitable place in the body, they multiply quickly,",
        "words": [
          [
            "پس",
            "pas",
            "pas",
            "pas az aan-ki"
          ],
          [
            "از",
            "az",
            "az",
            "pas az aan-ki"
          ],
          [
            "آن‌که",
            "aan-ki",
            "aan-ki",
            "pas az aan-ki"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ],
          [
            "مناسبی",
            "mu-naa-si-bee",
            "mu-naa-si-bee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan"
          ],
          [
            "وارد",
            "waa-rid",
            "waa-rid",
            "waa-rid shu-dand",
            "waa-rid shu-dan"
          ],
          [
            "شدند؛",
            "shu-dand",
            "shu-dand",
            "waa-rid shu-dand",
            "shu-dan",
            "waa-rid shu-dan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba sur-at"
          ],
          [
            "سرعت",
            "sur-at",
            "sur-at",
            "ba sur-at"
          ],
          [
            "تکثر",
            "ta-kaa-sur",
            "ta-kaa-sur",
            "ta-kaa-sur may-ku-nand"
          ],
          [
            "می‌کنند",
            "may-ku-nand",
            "may-ku-nand",
            "ta-kaa-sur may-ku-nand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "wa a-gar chee-zay jila-wi ta-kaa-su-ri aan-haa raa na-gee-rad, az raa-haa-yi goo-naa-goon ba ba-dan aa-seeb may-ra-saa-nand.",
        "mean": "and if nothing stops them multiplying, they harm the body in various ways.",
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
            "چیزی",
            "chee-zay",
            "chee-zay"
          ],
          [
            "جلو",
            "jila-wi",
            "jilaw"
          ],
          [
            "تکثر",
            "ta-kaa-su-ri",
            "ta-kaa-sur"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نگیرد،",
            "na-gee-rad",
            "na-gee-rad",
            "gi-rif-tan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "راه‌های",
            "raa-haa-yi",
            "raa-haa"
          ],
          [
            "گوناگون",
            "goo-naa-goon",
            "goo-naa-goon"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan"
          ],
          [
            "آسیب",
            "aa-seeb",
            "aa-seeb",
            "aa-seeb may-ra-saa-nand",
            "aa-seeb ra-saan-dan"
          ],
          [
            "می‌رسانند.",
            "may-ra-saa-nand",
            "may-ra-saa-nand",
            "aa-seeb may-ra-saa-nand",
            "ra-saan-dan",
            "aa-seeb ra-saan-dan"
          ]
        ]
      },
      {
        "say": "ya-kay az raa-haa een ast ki ma-waa-di daa-khi-lee-yi hu-ja-raa-ti ba-dan raa ba-jaa-yi gha-zaa may-kho-rand;",
        "mean": "One of the ways is that they eat the material inside the body's cells as food;",
        "words": [
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
            "راه‌ها",
            "raa-haa",
            "raa-haa"
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
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "داخلی",
            "daa-khi-lee-yi",
            "daa-khi-lee"
          ],
          [
            "حجرات",
            "hu-ja-raa-ti",
            "hu-ja-raat"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ],
          [
            "غذا",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "می‌خورند؛",
            "may-kho-rand",
            "may-kho-rand",
            "khor-dan"
          ]
        ]
      },
      {
        "say": "maa-nand: mak-roo-bi ma-laa-ri-yaa ki dar ka-ra-wi-yaa-ti sur-khi khoon ta-kaa-sur may-ku-nad wa aan-haa raa az bayn may-ba-rad.",
        "mean": "for example, the malaria microbe, which multiplies in the red blood cells and destroys them.",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "مکروب",
            "mak-roo-bi",
            "mak-roob"
          ],
          [
            "ملاریا",
            "ma-laa-ri-yaa",
            "ma-laa-ri-yaa"
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
            "کرویات",
            "ka-ra-wi-yaa-ti",
            "ka-ra-wi-yaat",
            "ka-ra-wi-yaa-ti sur-khi khoon"
          ],
          [
            "سرخ",
            "sur-khi",
            "surkh",
            "ka-ra-wi-yaa-ti sur-khi khoon"
          ],
          [
            "خون",
            "khoon",
            "khoon",
            "ka-ra-wi-yaa-ti sur-khi khoon"
          ],
          [
            "تکثر",
            "ta-kaa-sur",
            "ta-kaa-sur",
            "ta-kaa-sur may-ku-nad"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "ta-kaa-sur may-ku-nad",
            "kar-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
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
            "az bayn may-ba-rad",
            "az bayn bur-dan"
          ],
          [
            "بین",
            "bayn",
            "bayn",
            "az bayn may-ba-rad",
            "az bayn bur-dan"
          ],
          [
            "می‌برد.",
            "may-ba-rad",
            "may-ba-rad",
            "az bayn may-ba-rad",
            "bur-dan",
            "az bayn bur-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ma-naa-bi-yi in-ti-qaa-li mak-roob-haa",
        "mean": "How microbes spread",
        "words": [
          [
            "منابع",
            "ma-naa-bi-yi",
            "ma-naa-bi"
          ],
          [
            "انتقال",
            "in-ti-qaa-li",
            "in-ti-qaal"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ]
        ]
      }
    ],
    [
      {
        "say": "nu-khus-teen jaa-haa-yee ki mak-roob-haa-yi-yi ma-reez ku-nan-da az aan sar-chash-ma gi-rif-ta wa waa-ri-di ba-dan may-sha-wand, ba naa-mi “ma-naa-bi-yi in-ti-qaa-li mak-roob-haa” yaad may-sha-wad.",
        "mean": "The first places where disease-causing microbes come from before entering the body are called “the sources of microbes”.",
        "words": [
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "جاهایی",
            "jaa-haa-yee",
            "jaa-haa-yee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مکروب‌های",
            "mak-roob-haa-yi-yi",
            "mak-roob-haa-yi"
          ],
          [
            "مریض",
            "ma-reez",
            "ma-reez",
            "ma-reez ku-nan-da"
          ],
          [
            "کننده",
            "ku-nan-da",
            "ku-nan-da",
            "ma-reez ku-nan-da"
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
            "سرچشمه",
            "sar-chash-ma",
            "sar-chash-ma",
            "sar-chash-ma gi-rif-ta",
            "sar-chash-ma gi-rif-tan"
          ],
          [
            "گرفته",
            "gi-rif-ta",
            "gi-rif-ta",
            "sar-chash-ma gi-rif-ta",
            "gi-rif-tan",
            "sar-chash-ma gi-rif-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid",
            "waa-ri-di ba-dan may-sha-wand"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan",
            "waa-ri-di ba-dan may-sha-wand"
          ],
          [
            "می‌شوند،",
            "may-sha-wand",
            "may-sha-wand",
            "waa-ri-di ba-dan may-sha-wand",
            "shu-dan"
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
            "«منابع",
            "ma-naa-bi-yi",
            "ma-naa-bi"
          ],
          [
            "انتقال",
            "in-ti-qaa-li",
            "in-ti-qaal"
          ],
          [
            "مکروب‌ها»",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "یاد",
            "yaad",
            "yaad",
            "yaad may-sha-wad",
            "yaad shu-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "yaad may-sha-wad",
            "shu-dan",
            "yaad shu-dan"
          ]
        ]
      },
      {
        "say": "een ma-naa-bi ba sih das-ta taq-seem may-sha-wand:",
        "mean": "These sources are divided into three groups:",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "منابع",
            "ma-naa-bi",
            "ma-naa-bi"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "دسته",
            "das-ta",
            "das-ta"
          ],
          [
            "تقسیم",
            "taq-seem",
            "taq-seem",
            "taq-seem may-sha-wand",
            "taq-seem shu-dan"
          ],
          [
            "می‌شوند:",
            "may-sha-wand",
            "may-sha-wand",
            "taq-seem may-sha-wand",
            "shu-dan",
            "taq-seem shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "yak. ba-zay az am-raaz maa-nan-di sur-kha-kaan wa chee-chak makh-soo-si in-saan ast wa dar jaan-daa-raa-ni dee-gar dee-da na-may-sha-wad;",
        "mean": "1. Some diseases, such as measles and smallpox, belong to people only and are not seen in other living things,",
        "words": [
          [
            "۱.",
            "yak",
            "yak#digit"
          ],
          [
            "بعضی",
            "ba-zay",
            "ba-zay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "مانند",
            "maa-nan-di",
            "maa-nand"
          ],
          [
            "سرخکان",
            "sur-kha-kaan",
            "sur-kha-kaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "چیچک",
            "chee-chak",
            "chee-chak"
          ],
          [
            "مخصوص",
            "makh-soo-si",
            "makh-soos"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
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
            "جانداران",
            "jaan-daa-raa-ni",
            "jaan-daa-raan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "دیده",
            "dee-da",
            "dee-da",
            "dee-da na-may-sha-wad",
            "dee-dan"
          ],
          [
            "نمی‌شود؛",
            "na-may-sha-wad",
            "na-may-sha-wad",
            "dee-da na-may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "zee-raa mak-roo-bee ki zaa-yin-da-yi een goo-na am-raaz ast, khud raa tan-haa baa sha-raa-yi-ti ba-da-ni in-saan ta-waa-fuq daa-da ast;",
        "mean": "because the microbe that causes such diseases has adapted itself only to the conditions of the human body;",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "مکروبی",
            "mak-roo-bee",
            "mak-roo-bee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "زایندهٔ",
            "zaa-yin-da-yi",
            "zaa-yin-da-yi"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "گونه",
            "goo-na",
            "goo-na"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "است،",
            "ast",
            "ast"
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
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "شرایط",
            "sha-raa-yi-ti",
            "sha-raa-yit"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "توافق",
            "ta-waa-fuq",
            "ta-waa-fuq",
            "ta-waa-fuq daa-da ast",
            "ta-waa-fuq daa-dan"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "ta-waa-fuq daa-da ast",
            "daa-dan",
            "ta-waa-fuq daa-dan"
          ],
          [
            "است؛",
            "ast",
            "ast",
            "ta-waa-fuq daa-da ast",
            "ta-waa-fuq daa-dan"
          ]
        ]
      },
      {
        "say": "pas khu-di in-saan ya-gaa-na man-ba-yi een goo-na am-raaz daa-nis-ta may-sha-wad;",
        "mean": "so people themselves are considered the only source of such diseases;",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "خود",
            "khu-di",
            "khud"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "یگانه",
            "ya-gaa-na",
            "ya-gaa-na"
          ],
          [
            "منبع",
            "man-ba-yi",
            "man-ba"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "گونه",
            "goo-na",
            "goo-na"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "دانسته",
            "daa-nis-ta",
            "daa-nis-ta",
            "daa-nis-ta may-sha-wad",
            "daa-nis-tan",
            "daa-nis-ta shu-dan"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "daa-nis-ta may-sha-wad",
            "shu-dan",
            "daa-nis-ta shu-dan"
          ]
        ]
      },
      {
        "say": "ba-naa-ba-raan sha-raa-yi-ti in-ti-qaal wa mub-ta-laa shu-dan ba een goo-na am-raaz waq-tay mu-saa-id may-sha-wad ki shakh-si saa-lim baa far-dee aa-loo-da wa yaa wa-saa-yi-lee ki ta-was-su-ti oo aa-loo-da shu-da baa-shad; ta-maas haa-sil na-maa-yad;",
        "mean": "so the conditions for spreading and catching such diseases arise when a healthy person comes into contact with an infected person, or with things that person has infected,",
        "words": [
          [
            "بنابراین",
            "ba-naa-ba-raan",
            "ba-naa-ba-raan"
          ],
          [
            "شرایط",
            "sha-raa-yi-ti",
            "sha-raa-yit"
          ],
          [
            "انتقال",
            "in-ti-qaal",
            "in-ti-qaal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مبتلا",
            "mub-ta-laa",
            "mub-ta-laa",
            "mub-ta-laa shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "mub-ta-laa shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "گونه",
            "goo-na",
            "goo-na"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "مساعد",
            "mu-saa-id",
            "mu-saa-id",
            "mu-saa-id may-sha-wad"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "mu-saa-id may-sha-wad",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "شخص",
            "shakh-si",
            "shakhs"
          ],
          [
            "سالم",
            "saa-lim",
            "saa-lim"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "فردی",
            "far-dee",
            "far-dee"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da"
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
            "وسایلی",
            "wa-saa-yi-lee",
            "wa-saa-yi-lee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da",
            "aa-loo-da shu-da baa-shad"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "aa-loo-da shu-da baa-shad",
            "shu-dan"
          ],
          [
            "باشد؛",
            "baa-shad",
            "baa-shad",
            "aa-loo-da shu-da baa-shad",
            "bu-dan"
          ],
          [
            "تماس",
            "ta-maas",
            "ta-maas",
            "ta-maas haa-sil na-maa-yad",
            "ta-maas haa-sil na-mo-dan"
          ],
          [
            "حاصل",
            "haa-sil",
            "haa-sil",
            "ta-maas haa-sil na-maa-yad",
            "ta-maas haa-sil na-mo-dan"
          ],
          [
            "نماید؛",
            "na-maa-yad",
            "na-maa-yad",
            "ta-maas haa-sil na-maa-yad",
            "na-mo-dan",
            "ta-maas haa-sil na-mo-dan"
          ]
        ]
      },
      {
        "say": "maa-nand: li-baas, gha-zaa, bis-tar wa zarf.",
        "mean": "such as clothes, food, bedding and dishes.",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "لباس،",
            "li-baas",
            "li-baas"
          ],
          [
            "غذا،",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "بستر",
            "bis-tar",
            "bis-tar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ظرف.",
            "zarf",
            "zarf"
          ]
        ]
      }
    ],
    [
      {
        "say": "du. bar-khay az am-raa-zi dee-gar ki in-saan ba aan-haa mub-ta-laa may-gar-dad; ma-naa-bi-yi gi-yaa-hee wa hay-waa-nee daa-rand.",
        "mean": "2. Some other diseases that people catch come from plants and animals.",
        "words": [
          [
            "۲.",
            "du",
            "du#digit"
          ],
          [
            "برخی",
            "bar-khay",
            "bar-khay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "امراض",
            "am-raa-zi",
            "am-raaz"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "مبتلا",
            "mub-ta-laa",
            "mub-ta-laa",
            "mub-ta-laa may-gar-dad"
          ],
          [
            "می‌گردد؛",
            "may-gar-dad",
            "may-gar-dad",
            "mub-ta-laa may-gar-dad",
            "gar-dee-dan"
          ],
          [
            "منابع",
            "ma-naa-bi-yi",
            "ma-naa-bi"
          ],
          [
            "گیاهی",
            "gi-yaa-hee",
            "gi-yaa-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حیوانی",
            "hay-waa-nee",
            "hay-waa-nee"
          ],
          [
            "دارند.",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "yaa-nee een goo-na am-raaz az ta-ree-qi jaan-daa-raan wa gi-yaa-haa-ni aa-loo-da ba in-saan si-raa-yat may-ku-nad;",
        "mean": "That is, such diseases spread to people through infected living things and plants;",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "گونه",
            "goo-na",
            "goo-na"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "جانداران",
            "jaan-daa-raan",
            "jaan-daa-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گیاهان",
            "gi-yaa-haa-ni",
            "gi-yaa-haan"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "سرایت",
            "si-raa-yat",
            "si-raa-yat",
            "si-raa-yat may-ku-nad",
            "si-raa-yat kar-dan"
          ],
          [
            "می‌کند؛",
            "may-ku-nad",
            "may-ku-nad",
            "si-raa-yat may-ku-nad",
            "kar-dan",
            "si-raa-yat kar-dan"
          ]
        ]
      },
      {
        "say": "ma-sa-lan: mub-ta-laa shu-dan ba ma-ra-zi aa-meeb wa fi-laa-jeel az a-sa-ri no-shee-da-ni aa-bi ghay-ri-si-hee wa yaa khor-da-ni sab-zee-haa-yi-yi naa-paak ba mi-yaan may-aa-yad.",
        "mean": "for example, catching amoebic dysentery and giardia comes from drinking unclean water or eating dirty vegetables.",
        "words": [
          [
            "مثلاً:",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "مبتلا",
            "mub-ta-laa",
            "mub-ta-laa",
            "mub-ta-laa shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "mub-ta-laa shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مرض",
            "ma-ra-zi",
            "ma-raz"
          ],
          [
            "آمیب",
            "aa-meeb",
            "aa-meeb"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فلاجیل",
            "fi-laa-jeel",
            "fi-laa-jeel"
          ],
          [
            "از",
            "az",
            "az",
            "az a-sa-ri"
          ],
          [
            "اثر",
            "a-sa-ri",
            "a-sar",
            "az a-sa-ri"
          ],
          [
            "نوشیدن",
            "no-shee-da-ni",
            "no-shee-dan"
          ],
          [
            "آب",
            "aa-bi",
            "aab"
          ],
          [
            "غیرصحی",
            "ghay-ri-si-hee",
            "ghay-ri-si-hee"
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
            "خوردن",
            "khor-da-ni",
            "khor-dan"
          ],
          [
            "سبزی‌های",
            "sab-zee-haa-yi-yi",
            "sab-zee-haa-yi"
          ],
          [
            "ناپاک",
            "naa-paak",
            "naa-paak"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba mi-yaan may-aa-yad",
            "ba mi-yaan aa-ma-dan"
          ],
          [
            "میان",
            "mi-yaan",
            "mi-yaan",
            "ba mi-yaan may-aa-yad",
            "ba mi-yaan aa-ma-dan"
          ],
          [
            "می‌آید.",
            "may-aa-yad",
            "may-aa-yad",
            "ba mi-yaan may-aa-yad",
            "aa-ma-dan",
            "ba mi-yaan aa-ma-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "gaa-hay neez mak-roob az ta-ree-qi neesh za-dan yak ha-sha-ra ba in-saan mun-ta-qil may-sha-wad;",
        "mean": "Sometimes too a microbe passes to a person through the bite of an insect;",
        "words": [
          [
            "گاهی",
            "gaa-hay",
            "gaa-hay"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "مکروب",
            "mak-roob",
            "mak-roob"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "نیش",
            "neesh",
            "neesh",
            "neesh za-dan"
          ],
          [
            "زدن",
            "za-dan",
            "za-dan",
            "neesh za-dan"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "حشره",
            "ha-sha-ra",
            "ha-sha-ra"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "منتقل",
            "mun-ta-qil",
            "mun-ta-qil",
            "mun-ta-qil may-sha-wad",
            "mun-ta-qil shu-dan"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "mun-ta-qil may-sha-wad",
            "shu-dan",
            "mun-ta-qil shu-dan"
          ]
        ]
      },
      {
        "say": "maa-nand: in-ti-qaa-li mak-roo-bi saal-daa-na ta-was-su-ti pa-sha-yi saal-daa-na wa yaa neesh za-da-ni kayk ki aa-mi-li in-ti-qaa-li mak-roo-bi taa-oon az moosh ba in-saan ast;",
        "mean": "for example, the spreading of the leishmaniasis microbe by the sand fly, or the bite of the flea, which carries the microbe of plague from rats to people;",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "انتقال",
            "in-ti-qaa-li",
            "in-ti-qaal"
          ],
          [
            "مکروب",
            "mak-roo-bi",
            "mak-roob"
          ],
          [
            "سالدانه",
            "saal-daa-na",
            "saal-daa-na"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "پشهٔ",
            "pa-sha-yi",
            "pa-sha-yi"
          ],
          [
            "سالدانه",
            "saal-daa-na",
            "saal-daa-na"
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
            "نیش",
            "neesh",
            "neesh",
            "neesh za-da-ni"
          ],
          [
            "زدن",
            "za-da-ni",
            "za-dan",
            "neesh za-da-ni"
          ],
          [
            "کَیک",
            "kayk",
            "kayk"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "عامل",
            "aa-mi-li",
            "aa-mil"
          ],
          [
            "انتقال",
            "in-ti-qaa-li",
            "in-ti-qaal"
          ],
          [
            "مکروب",
            "mak-roo-bi",
            "mak-roob"
          ],
          [
            "طاعون",
            "taa-oon",
            "taa-oon"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "موش",
            "moosh",
            "moosh"
          ],
          [
            "به",
            "ba",
            "ba"
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
        "say": "ham-chu-naan pa-sha, kayk, ka-na wa shi-pish waq-tay yak jaan-daa-ri aa-loo-da raa neesh may-za-nand wa khoo-ni aan raa may-ma-kand; mak-roob raa ba ba-da-ni khud waa-rid may-ku-nand;",
        "mean": "likewise, when mosquitoes, fleas, ticks and lice bite an infected creature and suck its blood, they take the microbe into their own bodies;",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "پشه،",
            "pa-sha",
            "pa-sha"
          ],
          [
            "کَیک،",
            "kayk",
            "kayk"
          ],
          [
            "کنه",
            "ka-na",
            "ka-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شپش",
            "shi-pish",
            "shi-pish"
          ],
          [
            "وقتی",
            "waq-tay",
            "waq-tay"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "جاندار",
            "jaan-daa-ri",
            "jaan-daar"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نیش",
            "neesh",
            "neesh",
            "neesh may-za-nand",
            "neesh za-dan"
          ],
          [
            "می‌زنند",
            "may-za-nand",
            "may-za-nand",
            "neesh may-za-nand",
            "za-dan",
            "neesh za-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خون",
            "khoo-ni",
            "khoon"
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
            "می‌مکند؛",
            "may-ma-kand",
            "may-ma-kand",
            "ma-kee-dan"
          ],
          [
            "مکروب",
            "mak-roob",
            "mak-roob"
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
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "وارد",
            "waa-rid",
            "waa-rid",
            "waa-rid may-ku-nand",
            "waa-rid kar-dan"
          ],
          [
            "می‌کنند؛",
            "may-ku-nand",
            "may-ku-nand",
            "waa-rid may-ku-nand",
            "kar-dan",
            "waa-rid kar-dan"
          ]
        ]
      },
      {
        "say": "si-pas hin-gaa-mee ki ha-meen ha-sha-raat far-di saa-li-mee raa neesh may-za-nand, ta-daa-dee az aan mak-roob-haa raa ba ba-da-ni way daa-khil may-saa-zand wa az ha-meen-jaa ma-raz aa-ghaaz may-yaa-bad.",
        "mean": "then, when these same insects bite a healthy person, they put some of those microbes into his body, and from there the disease begins.",
        "words": [
          [
            "سپس",
            "si-pas",
            "si-pas"
          ],
          [
            "هنگامی",
            "hin-gaa-mee",
            "hin-gaa-mee",
            "hin-gaa-mee ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "hin-gaa-mee ki"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "حشرات",
            "ha-sha-raat",
            "ha-sha-raat"
          ],
          [
            "فرد",
            "far-di",
            "fard"
          ],
          [
            "سالمی",
            "saa-li-mee",
            "saa-li-mee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "نیش",
            "neesh",
            "neesh",
            "neesh may-za-nand",
            "neesh za-dan"
          ],
          [
            "می‌زنند،",
            "may-za-nand",
            "may-za-nand",
            "neesh may-za-nand",
            "za-dan",
            "neesh za-dan"
          ],
          [
            "تعدادی",
            "ta-daa-dee",
            "ta-daa-dee"
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
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
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
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil",
            "daa-khil may-saa-zand",
            "daa-khil saakh-tan"
          ],
          [
            "می‌سازند",
            "may-saa-zand",
            "may-saa-zand",
            "daa-khil may-saa-zand",
            "saakh-tan",
            "daa-khil saakh-tan"
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
            "همین‌جا",
            "ha-meen-jaa",
            "ha-meen-jaa"
          ],
          [
            "مرض",
            "ma-raz",
            "ma-raz"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz",
            "aa-ghaaz may-yaa-bad",
            "aa-ghaaz yaaf-tan"
          ],
          [
            "می‌یابد.",
            "may-yaa-bad",
            "may-yaa-bad",
            "aa-ghaaz may-yaa-bad",
            "yaaf-tan",
            "aa-ghaaz yaaf-tan"
          ]
        ]
      },
      {
        "say": "baa-yad guft ki ma-gas wa maa-dar-kayk az jum-la-yi fa-aal-ta-reen an-waa-yi in-ti-qaal di-han-da-gaa-ni am-raaz and;",
        "mean": "It must be said that flies and bedbugs are among the most active carriers of disease,",
        "words": [
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "گفت",
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
            "مگس",
            "ma-gas",
            "ma-gas"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادرکَیک",
            "maa-dar-kayk",
            "maa-dar-kayk"
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
            "فعال‌ترین",
            "fa-aal-ta-reen",
            "fa-aal-ta-reen"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "انتقال",
            "in-ti-qaal",
            "in-ti-qaal",
            "in-ti-qaal di-han-da-gaa-ni"
          ],
          [
            "دهنده‌گان",
            "di-han-da-gaa-ni",
            "di-han-da-gaan",
            "in-ti-qaal di-han-da-gaa-ni"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "اند؛",
            "and",
            "and"
          ]
        ]
      },
      {
        "say": "zee-raa ha-may-sha ba-dan-shaan az daa-khil wa khaa-rij aa-loo-da ba mak-roob-haa-st.",
        "mean": "because their bodies are always covered with microbes, inside and out.",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "بدن‌شان",
            "ba-dan-shaan",
            "ba-dan-shaan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خارج",
            "khaa-rij",
            "khaa-rij"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da",
            "aa-loo-da ba"
          ],
          [
            "به",
            "ba",
            "ba",
            "aa-loo-da ba"
          ],
          [
            "مکروب‌هاست.",
            "mak-roob-haa-st",
            "mak-roob-haa-st"
          ]
        ]
      },
      {
        "say": "hin-gaa-mee ki baa gha-zaa yaa zu-roo-fi gha-zaa-kho-ree ta-maas yaa-band, ta-daa-dee az mak-roob-haa raa dar aan-jaa ra-haa may-ku-nand.",
        "mean": "When they touch food or dishes, they leave some microbes there,",
        "words": [
          [
            "هنگامی",
            "hin-gaa-mee",
            "hin-gaa-mee",
            "hin-gaa-mee ki"
          ],
          [
            "که",
            "ki",
            "ki",
            "hin-gaa-mee ki"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "غذا",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "ظروف",
            "zu-roo-fi",
            "zu-roof"
          ],
          [
            "غذاخوری",
            "gha-zaa-kho-ree",
            "gha-zaa-kho-ree"
          ],
          [
            "تماس",
            "ta-maas",
            "ta-maas",
            "ta-maas yaa-band",
            "ta-maas yaaf-tan"
          ],
          [
            "یابند،",
            "yaa-band",
            "yaa-band",
            "ta-maas yaa-band",
            "yaaf-tan",
            "ta-maas yaaf-tan"
          ],
          [
            "تعدادی",
            "ta-daa-dee",
            "ta-daa-dee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
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
            "آنجا",
            "aan-jaa",
            "aan-jaa"
          ],
          [
            "رها",
            "ra-haa",
            "ra-haa",
            "ra-haa may-ku-nand",
            "ra-haa kar-dan"
          ],
          [
            "می‌کنند.",
            "may-ku-nand",
            "may-ku-nand",
            "ra-haa may-ku-nand",
            "kar-dan",
            "ra-haa kar-dan"
          ]
        ]
      },
      {
        "say": "ki kam-ta-reen aa-ri-za-yi aan ta-sa-mu-mi gha-zaa-yee, fa-la-ji at-faal wa ma-ra-zi mu-har-ra-qa ast.",
        "mean": "and the least of the harm they do is food poisoning, polio and typhoid.",
        "words": [
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "کمترین",
            "kam-ta-reen",
            "kam-ta-reen"
          ],
          [
            "عارضهٔ",
            "aa-ri-za-yi",
            "aa-ri-za-yi"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "تسمم",
            "ta-sa-mu-mi",
            "ta-sa-mum",
            "ta-sa-mu-mi gha-zaa-yee"
          ],
          [
            "غذایی،",
            "gha-zaa-yee",
            "gha-zaa-yee",
            "ta-sa-mu-mi gha-zaa-yee"
          ],
          [
            "فلج",
            "fa-la-ji",
            "fa-laj",
            "fa-la-ji at-faal"
          ],
          [
            "اطفال",
            "at-faal",
            "at-faal",
            "fa-la-ji at-faal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مرض",
            "ma-ra-zi",
            "ma-raz",
            "ma-ra-zi mu-har-ra-qa"
          ],
          [
            "محرقه",
            "mu-har-ra-qa",
            "mu-har-ra-qa",
            "ma-ra-zi mu-har-ra-qa"
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
        "say": "sih. su-wo-meen man-ba-yi in-ti-qaa-li mak-roob-haa ta-bee-at wa aj-saa-mi bee-jaan ast;",
        "mean": "3. The third source of microbes is nature and lifeless things,",
        "words": [
          [
            "۳.",
            "sih",
            "sih#digit"
          ],
          [
            "سومین",
            "su-wo-meen",
            "su-wo-meen"
          ],
          [
            "منبع",
            "man-ba-yi",
            "man-ba"
          ],
          [
            "انتقال",
            "in-ti-qaa-li",
            "in-ti-qaal"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "طبیعت",
            "ta-bee-at",
            "ta-bee-at"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجسام",
            "aj-saa-mi",
            "aj-saam"
          ],
          [
            "بیجان",
            "bee-jaan",
            "bee-jaan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "maa-nand: ha-waa, khaak, aab, baad wa....",
        "mean": "such as air, soil, water, wind and so on.",
        "words": [
          [
            "مانند:",
            "maa-nand",
            "maa-nand"
          ],
          [
            "هوا،",
            "ha-waa",
            "ha-waa"
          ],
          [
            "خاک،",
            "khaak",
            "khaak"
          ],
          [
            "آب،",
            "aab",
            "aab"
          ],
          [
            "باد",
            "baad",
            "baad"
          ],
          [
            "و....",
            "wa",
            "wa"
          ]
        ]
      },
      {
        "say": "ma-sa-lan: hin-gaa-mee ki ba za-meen bi-yuf-teem wa qis-ma-tee az ba-da-ni maa zakh-mee sha-wad, mum-kin ast mak-roob-haa-yi-yi maw-jood dar khaak az ta-ree-qi ha-maan qis-ma-ti zakh-mee shu-da waa-ri-di ba-da-ni maa sha-wand wa maa raa ba ma-ra-zi tee-taa-noos wa yaa am-raa-zi dee-ga-ray mub-ta-laa baa-saa-zand.",
        "mean": "For example, when we fall to the ground and part of our body is wounded, microbes in the soil may enter our body through that wounded part and give us tetanus or other diseases.",
        "words": [
          [
            "مثلاً:",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "هنگامی",
            "hin-gaa-mee",
            "hin-gaa-mee"
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
            "زمین",
            "za-meen",
            "za-meen"
          ],
          [
            "بیفتیم",
            "bi-yuf-teem",
            "bi-yuf-teem",
            "uf-taa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قسمتی",
            "qis-ma-tee",
            "qis-ma-tee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "زخمی",
            "zakh-mee",
            "zakh-mee",
            "zakh-mee sha-wad"
          ],
          [
            "شود،",
            "sha-wad",
            "sha-wad",
            "zakh-mee sha-wad",
            "shu-dan"
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
            "مکروب‌های",
            "mak-roob-haa-yi-yi",
            "mak-roob-haa-yi"
          ],
          [
            "موجود",
            "maw-jood",
            "maw-jood"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "خاک",
            "khaak",
            "khaak"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "همان",
            "ha-maan",
            "ha-maan"
          ],
          [
            "قسمت",
            "qis-ma-ti",
            "qis-mat"
          ],
          [
            "زخمی",
            "zakh-mee",
            "zakh-mee",
            "zakh-mee shu-da"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "zakh-mee shu-da",
            "shu-dan"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid",
            "waa-ri-di ba-da-ni maa sha-wand"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan",
            "waa-ri-di ba-da-ni maa sha-wand"
          ],
          [
            "ما",
            "maa",
            "maa",
            "waa-ri-di ba-da-ni maa sha-wand"
          ],
          [
            "شوند",
            "sha-wand",
            "sha-wand",
            "waa-ri-di ba-da-ni maa sha-wand",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
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
            "به",
            "ba",
            "ba"
          ],
          [
            "مرض",
            "ma-ra-zi",
            "ma-raz"
          ],
          [
            "تیتانوس",
            "tee-taa-noos",
            "tee-taa-noos"
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
            "امراض",
            "am-raa-zi",
            "am-raaz"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "مبتلا",
            "mub-ta-laa",
            "mub-ta-laa",
            "mub-ta-laa baa-saa-zand",
            "mub-ta-laa saakh-tan"
          ],
          [
            "سازند.",
            "baa-saa-zand",
            "baa-saa-zand",
            "mub-ta-laa baa-saa-zand",
            "saakh-tan",
            "mub-ta-laa saakh-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "rawsh-haa-yi-yi di-faa-ee",
        "mean": "Ways of defense",
        "words": [
          [
            "روش‌های",
            "rawsh-haa-yi-yi",
            "rawsh-haa-yi"
          ],
          [
            "دفاعی",
            "di-faa-ee",
            "di-faa-ee"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba-raa-yi een ki ba-da-ni maa az sha-ri mak-roob-haa dar a-maan bi-maand wa bee-maa-ree-haa-yi-yi goo-naa-goon ba su-raa-ghi maa na-yaa-yad, raah-haa-yee wu-jood daa-rad ki aan raa dar maj-moo ba naa-mi “rawsh-haa-yi-yi di-faa-ee” yaad may-ku-nand wa aan du naw ast:",
        "mean": "So that our body stays safe from the harm of microbes and various illnesses do not come to us, there are ways that are all together called “ways of defense”, and they are of two kinds:",
        "words": [
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "شر",
            "sha-ri",
            "shar"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "در",
            "dar",
            "dar",
            "dar a-maan bi-maand",
            "dar a-maan maan-dan"
          ],
          [
            "امان",
            "a-maan",
            "a-maan",
            "dar a-maan bi-maand",
            "dar a-maan maan-dan"
          ],
          [
            "بماند",
            "bi-maand",
            "bi-maand",
            "dar a-maan bi-maand",
            "maan-dan",
            "dar a-maan maan-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بیماری‌های",
            "bee-maa-ree-haa-yi-yi",
            "bee-maa-ree-haa-yi"
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
            "ba su-raa-ghi maa na-yaa-yad"
          ],
          [
            "سراغ",
            "su-raa-ghi",
            "su-raagh",
            "ba su-raa-ghi maa na-yaa-yad"
          ],
          [
            "ما",
            "maa",
            "maa",
            "ba su-raa-ghi maa na-yaa-yad"
          ],
          [
            "نیاید،",
            "na-yaa-yad",
            "na-yaa-yad",
            "ba su-raa-ghi maa na-yaa-yad",
            "aa-ma-dan"
          ],
          [
            "راه‌هایی",
            "raah-haa-yee",
            "raah-haa-yee"
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
            "dar",
            "dar maj-moo"
          ],
          [
            "مجموع",
            "maj-moo",
            "maj-moo",
            "dar maj-moo"
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
            "«روش‌های",
            "rawsh-haa-yi-yi",
            "rawsh-haa-yi"
          ],
          [
            "دفاعی»",
            "di-faa-ee",
            "di-faa-ee"
          ],
          [
            "یاد",
            "yaad",
            "yaad",
            "yaad may-ku-nand",
            "yaad kar-dan"
          ],
          [
            "می‌کنند",
            "may-ku-nand",
            "may-ku-nand",
            "yaad may-ku-nand",
            "kar-dan",
            "yaad kar-dan"
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
            "دو",
            "du",
            "du",
            "du naw"
          ],
          [
            "نوع",
            "naw",
            "naw#type",
            "du naw"
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
        "say": "yak. nu-khus-teen na-wi aan ki ba soo-ra-ti ta-bee-ee dar ba-da-ni maa fa-aal ast ba naa-mi “sees-ti-mi di-faa-ee-yi ba-dan” yaad may-sha-wad wa aan i-baa-rat ast az fa-aa-lee-yat-haa-yi-yi az-aa-yee dar ba-dan ba shar-hi zayr:",
        "mean": "1. The first kind, which works naturally in our body, is called “the body's defense system”, and it is the work of these organs in the body, as follows:",
        "words": [
          [
            "۱.",
            "yak",
            "yak#digit"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba soo-ra-ti ta-bee-ee"
          ],
          [
            "صورت",
            "soo-ra-ti",
            "soo-rat",
            "ba soo-ra-ti ta-bee-ee"
          ],
          [
            "طبیعی",
            "ta-bee-ee",
            "ta-bee-ee",
            "ba soo-ra-ti ta-bee-ee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "فعال",
            "fa-aal",
            "fa-aal"
          ],
          [
            "است",
            "ast",
            "ast"
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
            "«سیستم",
            "sees-ti-mi",
            "sees-tim"
          ],
          [
            "دفاعی",
            "di-faa-ee-yi",
            "di-faa-ee"
          ],
          [
            "بدن»",
            "ba-dan",
            "ba-dan"
          ],
          [
            "یاد",
            "yaad",
            "yaad",
            "yaad may-sha-wad",
            "yaad shu-dan"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "yaad may-sha-wad",
            "shu-dan",
            "yaad shu-dan"
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
            "عبارت",
            "i-baa-rat",
            "i-baa-rat",
            "i-baa-rat ast az"
          ],
          [
            "است",
            "ast",
            "ast",
            "i-baa-rat ast az"
          ],
          [
            "از",
            "az",
            "az",
            "i-baa-rat ast az"
          ],
          [
            "فعالیت‌های",
            "fa-aa-lee-yat-haa-yi-yi",
            "fa-aa-lee-yat-haa-yi"
          ],
          [
            "اعضایی",
            "az-aa-yee",
            "az-aa-yee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba shar-hi zayr"
          ],
          [
            "شرح",
            "shar-hi",
            "sharh",
            "ba shar-hi zayr"
          ],
          [
            "زیر:",
            "zayr",
            "zayr",
            "ba shar-hi zayr"
          ]
        ]
      }
    ],
    [
      {
        "say": "poost: ya-kay az wa-zaa-yi-fi um-da-yi poos-ti saa-lim een ast ki maa-ni-yi wu-roo-di mak-roob-haa ba ba-da-ni in-saan may-sha-wad;",
        "mean": "Skin: one of the main tasks of healthy skin is to stop microbes from entering the human body;",
        "words": [
          [
            "پوست:",
            "poost",
            "poost"
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
            "وظایف",
            "wa-zaa-yi-fi",
            "wa-zaa-yif"
          ],
          [
            "عمدهٔ",
            "um-da-yi",
            "um-da-yi"
          ],
          [
            "پوست",
            "poos-ti",
            "poost"
          ],
          [
            "سالم",
            "saa-lim",
            "saa-lim"
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
            "مانع",
            "maa-ni-yi",
            "maa-ni"
          ],
          [
            "ورود",
            "wu-roo-di",
            "wu-rood"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "az-een-roo ta-daa-di zi-yaa-dee az mak-roob-haa hin-gaa-mee ki ba-raa-yi daa-khil shu-dan ba ba-da-ni in-saan ta-laash may-ku-nand, baa raah-ban-daan mu-waa-jih shu-da wa na-may-ta-waa-nand daa-khil gar-dand.",
        "mean": "so when many microbes try to get into the human body, they meet a roadblock and cannot get in.",
        "words": [
          [
            "ازین‌رو",
            "az-een-roo",
            "az-een-roo"
          ],
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "زیادی",
            "zi-yaa-dee",
            "zi-yaa-dee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "هنگامی",
            "hin-gaa-mee",
            "hin-gaa-mee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil",
            "daa-khil shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "daa-khil shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بدن",
            "ba-da-ni",
            "ba-dan"
          ],
          [
            "انسان",
            "in-saan",
            "in-saan"
          ],
          [
            "تلاش",
            "ta-laash",
            "ta-laash",
            "ta-laash may-ku-nand",
            "ta-laash kar-dan"
          ],
          [
            "می‌کنند،",
            "may-ku-nand",
            "may-ku-nand",
            "ta-laash may-ku-nand",
            "kar-dan",
            "ta-laash kar-dan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "راه‌بندان",
            "raah-ban-daan",
            "raah-ban-daan"
          ],
          [
            "مواجه",
            "mu-waa-jih",
            "mu-waa-jih",
            "mu-waa-jih shu-da",
            "mu-waa-jih shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "mu-waa-jih shu-da",
            "shu-dan",
            "mu-waa-jih shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمی‌توانند",
            "na-may-ta-waa-nand",
            "na-may-ta-waa-nand",
            "ta-waa-nis-tan"
          ],
          [
            "داخل",
            "daa-khil",
            "daa-khil",
            "daa-khil gar-dand"
          ],
          [
            "گردند.",
            "gar-dand",
            "gar-dand",
            "daa-khil gar-dand",
            "gar-dee-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ghi-shaa-yi mu-khaa-tee: ghi-shaa-yi mu-khaa-tee i-baa-rat az po-shi-shi daa-khi-lee-yi huf-ra-haa-yi-yi da-haan, bee-nee, halq wa ma-ree may-baa-shad ki ha-may-sha baa maa-da-yi chas-paa-na-kee (sha-bee-hi aa-bi da-haan) po-shee-da boo-da",
        "mean": "Mucous membrane: the mucous membrane is the inner lining of the mouth, nose, throat and gullet, which is always covered with a sticky substance (like spit),",
        "words": [
          [
            "غشای",
            "ghi-shaa-yi",
            "ghi-shaa-yi"
          ],
          [
            "مخاطی:",
            "mu-khaa-tee",
            "mu-khaa-tee"
          ],
          [
            "غشای",
            "ghi-shaa-yi",
            "ghi-shaa-yi"
          ],
          [
            "مخاطی",
            "mu-khaa-tee",
            "mu-khaa-tee"
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
            "پوشش",
            "po-shi-shi",
            "po-shish"
          ],
          [
            "داخلی",
            "daa-khi-lee-yi",
            "daa-khi-lee"
          ],
          [
            "حفره‌های",
            "huf-ra-haa-yi-yi",
            "huf-ra-haa-yi"
          ],
          [
            "دهان،",
            "da-haan",
            "da-haan"
          ],
          [
            "بینی،",
            "bee-nee",
            "bee-nee"
          ],
          [
            "حلق",
            "halq",
            "halq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مری",
            "ma-ree",
            "ma-ree"
          ],
          [
            "می‌باشد",
            "may-baa-shad",
            "may-baa-shad",
            "bu-dan"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "مادهٔ",
            "maa-da-yi",
            "maa-da-yi"
          ],
          [
            "چسپناکی",
            "chas-paa-na-kee",
            "chas-paa-na-kee"
          ],
          [
            "(شبیه",
            "sha-bee-hi",
            "sha-beeh"
          ],
          [
            "آب",
            "aa-bi",
            "aab"
          ],
          [
            "دهان)",
            "da-haan",
            "da-haan"
          ],
          [
            "پوشیده",
            "po-shee-da",
            "po-shee-da",
            "po-shee-da boo-da",
            "po-shee-dan"
          ],
          [
            "بوده",
            "boo-da",
            "boo-da",
            "po-shee-da boo-da",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "wa een maa-da baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad;",
        "mean": "and this substance keeps microbes from getting into the body;",
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
            "ماده",
            "maa-da",
            "maa-da"
          ],
          [
            "باعث",
            "baa-i-si",
            "baa-is",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad"
          ],
          [
            "جلوگیری",
            "ji-law-gee-ree-yi",
            "ji-law-gee-ree",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad"
          ],
          [
            "ورود",
            "wu-roo-di",
            "wu-rood",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad"
          ],
          [
            "به",
            "ba",
            "ba",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "baa-i-si ji-law-gee-ree-yi wu-roo-di mak-roob-haa ba ba-dan may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "ham-chu-naan mak-roob-haa-yi-yi dee-ga-ray ki az ta-ree-qi aab wa gha-zaa ba mi-da waa-rid may-sha-wand, ta-was-su-ti tay-zaa-bee ki dar mi-da taw-leed may-sha-wad az bayn may-ra-wand.",
        "mean": "also, other microbes that get into the stomach with water and food are destroyed by an acid that is made in the stomach.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "مکروب‌های",
            "mak-roob-haa-yi-yi",
            "mak-roob-haa-yi"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "آب",
            "aab",
            "aab"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "غذا",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "معده",
            "mi-da",
            "mi-da"
          ],
          [
            "وارد",
            "waa-rid",
            "waa-rid",
            "waa-rid may-sha-wand",
            "waa-rid shu-dan"
          ],
          [
            "می‌شوند،",
            "may-sha-wand",
            "may-sha-wand",
            "waa-rid may-sha-wand",
            "shu-dan",
            "waa-rid shu-dan"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "تیزابی",
            "tay-zaa-bee",
            "tay-zaa-bee"
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
            "معده",
            "mi-da",
            "mi-da"
          ],
          [
            "تولید",
            "taw-leed",
            "taw-leed",
            "taw-leed may-sha-wad",
            "taw-leed shu-dan"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "taw-leed may-sha-wad",
            "shu-dan",
            "taw-leed shu-dan"
          ],
          [
            "از",
            "az",
            "az",
            "az bayn may-ra-wand",
            "az bayn raf-tan"
          ],
          [
            "بین",
            "bayn",
            "bayn",
            "az bayn may-ra-wand",
            "az bayn raf-tan"
          ],
          [
            "می‌روند.",
            "may-ra-wand",
            "may-ra-wand",
            "az bayn may-ra-wand",
            "raf-tan",
            "az bayn raf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ka-ra-wi-yaa-ti sa-fee-di khoon: gaa-hay bar-khay az mak-roob-haa az ta-ree-qi zakhm wa az ha-maan-jaa-yee ki poost qud-ra-ti kaar-aa-yee-yi khud raa az dast daa-da ast, waa-ri-di ba-dan may-gar-dand.",
        "mean": "White blood cells: sometimes some microbes enter the body through a wound, where the skin has lost its power to work.",
        "words": [
          [
            "کرویات",
            "ka-ra-wi-yaa-ti",
            "ka-ra-wi-yaat",
            "ka-ra-wi-yaa-ti sa-fee-di khoon"
          ],
          [
            "سفید",
            "sa-fee-di",
            "sa-feed",
            "ka-ra-wi-yaa-ti sa-fee-di khoon"
          ],
          [
            "خون:",
            "khoon",
            "khoon",
            "ka-ra-wi-yaa-ti sa-fee-di khoon"
          ],
          [
            "گاهی",
            "gaa-hay",
            "gaa-hay"
          ],
          [
            "برخی",
            "bar-khay",
            "bar-khay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "از",
            "az",
            "az",
            "az ta-ree-qi"
          ],
          [
            "طریق",
            "ta-ree-qi",
            "ta-reeq",
            "az ta-ree-qi"
          ],
          [
            "زخم",
            "zakhm",
            "zakhm"
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
            "همان‌جایی",
            "ha-maan-jaa-yee",
            "ha-maan-jaa-yee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پوست",
            "poost",
            "poost"
          ],
          [
            "قدرت",
            "qud-ra-ti",
            "qud-rat"
          ],
          [
            "کارآیی",
            "kaar-aa-yee-yi",
            "kaar-aa-yee"
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
            "az dast daa-da ast",
            "az dast daa-dan"
          ],
          [
            "دست",
            "dast",
            "dast",
            "az dast daa-da ast",
            "az dast daa-dan"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "az dast daa-da ast",
            "daa-dan",
            "az dast daa-dan"
          ],
          [
            "است،",
            "ast",
            "ast",
            "az dast daa-da ast",
            "az dast daa-dan"
          ],
          [
            "وارد",
            "waa-ri-di",
            "waa-rid",
            "waa-ri-di ba-dan may-gar-dand"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan",
            "waa-ri-di ba-dan may-gar-dand"
          ],
          [
            "می‌گردند.",
            "may-gar-dand",
            "may-gar-dand",
            "waa-ri-di ba-dan may-gar-dand",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "dar een soo-rat ka-ra-wi-yaa-ti sa-fee-di khoon, dast ba kaar shu-da ta-daa-dee az aan-haa mak-roob-haa raa may-kho-rand wa ta-daa-di dee-ga-ray ba tar-shu-hi ma-waa-di ku-shan-da-yi mak-roob aa-ghaaz may-ku-nand;",
        "mean": "In that case the white blood cells set to work: some of them eat the microbes, and others begin to give off substances that kill microbes;",
        "words": [
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
            "صورت",
            "soo-rat",
            "soo-rat"
          ],
          [
            "کرویات",
            "ka-ra-wi-yaa-ti",
            "ka-ra-wi-yaat"
          ],
          [
            "سفید",
            "sa-fee-di",
            "sa-feed"
          ],
          [
            "خون،",
            "khoon",
            "khoon"
          ],
          [
            "دست",
            "dast",
            "dast",
            "dast ba kaar shu-da"
          ],
          [
            "به",
            "ba",
            "ba",
            "dast ba kaar shu-da"
          ],
          [
            "کار",
            "kaar",
            "kaar",
            "dast ba kaar shu-da"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "dast ba kaar shu-da",
            "shu-dan"
          ],
          [
            "تعدادی",
            "ta-daa-dee",
            "ta-daa-dee"
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
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "می‌خورند",
            "may-kho-rand",
            "may-kho-rand",
            "khor-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
          ],
          [
            "دیگری",
            "dee-ga-ray",
            "dee-ga-ray"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ترشح",
            "tar-shu-hi",
            "tar-shuh"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "کشندهٔ",
            "ku-shan-da-yi",
            "ku-shan-da-yi"
          ],
          [
            "مکروب",
            "mak-roob",
            "mak-roob"
          ],
          [
            "آغاز",
            "aa-ghaaz",
            "aa-ghaaz",
            "aa-ghaaz may-ku-nand",
            "aa-ghaaz kar-dan"
          ],
          [
            "می‌کنند؛",
            "may-ku-nand",
            "may-ku-nand",
            "aa-ghaaz may-ku-nand",
            "kar-dan",
            "aa-ghaaz kar-dan"
          ]
        ]
      },
      {
        "say": "al-bat-ta ma-waa-di yaad shu-da may-ta-waa-nad ba-zay az an-waa-yi mak-roob-haa raa az bayn bi-ba-rad nuh ha-ma-yi aan-haa raa.",
        "mean": "of course these substances can destroy some kinds of microbes, not all of them.",
        "words": [
          [
            "البته",
            "al-bat-ta",
            "al-bat-ta"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "یاد",
            "yaad",
            "yaad",
            "yaad shu-da"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "yaad shu-da",
            "shu-dan"
          ],
          [
            "می‌تواند",
            "may-ta-waa-nad",
            "may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "بعضی",
            "ba-zay",
            "ba-zay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
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
            "az bayn bi-ba-rad"
          ],
          [
            "بین",
            "bayn",
            "bayn",
            "az bayn bi-ba-rad"
          ],
          [
            "ببرد",
            "bi-ba-rad",
            "bi-ba-rad",
            "az bayn bi-ba-rad",
            "bur-dan"
          ],
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "آن‌ها",
            "aan-haa",
            "aan-haa"
          ],
          [
            "را.",
            "raa",
            "raa"
          ]
        ]
      }
    ],
    [
      {
        "say": "du. du-wo-meen na-wi rawsh-haa-yi-yi di-faa-ee neez ba du das-ta taq-seem may-sha-wad, wi-qaa-ya-wee wa mu-aa-la-ja-wee:",
        "mean": "2. The second kind of defense is also divided into two groups, preventive and curative:",
        "words": [
          [
            "۲.",
            "du",
            "du#digit"
          ],
          [
            "دومین",
            "du-wo-meen",
            "du-wo-meen"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "روش‌های",
            "rawsh-haa-yi-yi",
            "rawsh-haa-yi"
          ],
          [
            "دفاعی",
            "di-faa-ee",
            "di-faa-ee"
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
            "دو",
            "du",
            "du"
          ],
          [
            "دسته",
            "das-ta",
            "das-ta"
          ],
          [
            "تقسیم",
            "taq-seem",
            "taq-seem",
            "taq-seem may-sha-wad"
          ],
          [
            "می‌شود،",
            "may-sha-wad",
            "may-sha-wad",
            "taq-seem may-sha-wad",
            "shu-dan"
          ],
          [
            "وقایوی",
            "wi-qaa-ya-wee",
            "wi-qaa-ya-wee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "معالجوی:",
            "mu-aa-la-ja-wee",
            "mu-aa-la-ja-wee"
          ]
        ]
      }
    ],
    [
      {
        "say": "rawsh-haa-yi-yi wi-qaa-ya-wee: i-baa-rat ast az ri-aa-yat wa tat-bee-qi yak sil-si-la az bar-naa-ma-haa ji-ha-ti pesh-gee-ree az aa-loo-da shu-dan ba an-waa-yi mak-roob-haa.",
        "mean": "Preventive ways: following and carrying out a series of steps to prevent infection by all kinds of microbes.",
        "words": [
          [
            "روش‌های",
            "rawsh-haa-yi-yi",
            "rawsh-haa-yi"
          ],
          [
            "وقایوی:",
            "wi-qaa-ya-wee",
            "wi-qaa-ya-wee"
          ],
          [
            "عبارت",
            "i-baa-rat",
            "i-baa-rat",
            "i-baa-rat ast az"
          ],
          [
            "است",
            "ast",
            "ast",
            "i-baa-rat ast az"
          ],
          [
            "از",
            "az",
            "az",
            "i-baa-rat ast az"
          ],
          [
            "رعایت",
            "ri-aa-yat",
            "ri-aa-yat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تطبیق",
            "tat-bee-qi",
            "tat-beeq"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "سلسله",
            "sil-si-la",
            "sil-si-la"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "برنامه‌ها",
            "bar-naa-ma-haa",
            "bar-naa-ma-haa"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat"
          ],
          [
            "پیشگیری",
            "pesh-gee-ree",
            "pesh-gee-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da",
            "aa-loo-da shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "aa-loo-da shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "مکروب‌ها.",
            "mak-roob-haa",
            "mak-roob-haa"
          ]
        ]
      }
    ],
    [
      {
        "say": "mu-him-ta-reen raa-haa-yi pesh-gee-ree az aa-loo-da shu-dan ba an-waa-yi mak-roob-haa qa-raa-ri zayl ast:",
        "mean": "The most important ways to prevent infection by all kinds of microbes are as follows:",
        "words": [
          [
            "مهمترین",
            "mu-him-ta-reen",
            "mu-him-ta-reen"
          ],
          [
            "راه‌های",
            "raa-haa-yi",
            "raa-haa"
          ],
          [
            "پیشگیری",
            "pesh-gee-ree",
            "pesh-gee-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آلوده",
            "aa-loo-da",
            "aa-loo-da",
            "aa-loo-da shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "aa-loo-da shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "انواع",
            "an-waa-yi",
            "an-waa"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "قرار",
            "qa-raa-ri",
            "qa-raar",
            "qa-raa-ri zayl"
          ],
          [
            "ذیل",
            "zayl",
            "zayl",
            "qa-raa-ri zayl"
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
        "say": "tat-bee-qi waak-seen-haa-yi-yi maw-ri-di ni-yaa-zi ba-dan mu-taa-bi-qi bar-naa-ma-haa-yi-yi si-hee.",
        "mean": "Giving the vaccines the body needs, according to health programs.",
        "words": [
          [
            "تطبیق",
            "tat-bee-qi",
            "tat-beeq"
          ],
          [
            "واکسین‌های",
            "waak-seen-haa-yi-yi",
            "waak-seen-haa-yi"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di ni-yaa-zi ba-dan"
          ],
          [
            "نیاز",
            "ni-yaa-zi",
            "ni-yaaz",
            "maw-ri-di ni-yaa-zi ba-dan"
          ],
          [
            "بدن",
            "ba-dan",
            "ba-dan",
            "maw-ri-di ni-yaa-zi ba-dan"
          ],
          [
            "مطابق",
            "mu-taa-bi-qi",
            "mu-taa-biq"
          ],
          [
            "برنامه‌های",
            "bar-naa-ma-haa-yi-yi",
            "bar-naa-ma-haa-yi"
          ],
          [
            "صحی.",
            "si-hee",
            "si-hee"
          ]
        ]
      }
    ],
    [
      {
        "say": "doo-ray gu-zee-dan az ma-naa-bi-yi in-ti-qaa-li mak-roob-haa taa ha-di mum-kin.",
        "mean": "Keeping away from the sources of microbes as far as possible.",
        "words": [
          [
            "دوری",
            "doo-ray",
            "doo-ray",
            "doo-ray gu-zee-dan"
          ],
          [
            "گزیدن",
            "gu-zee-dan",
            "gu-zee-dan",
            "doo-ray gu-zee-dan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "منابع",
            "ma-naa-bi-yi",
            "ma-naa-bi"
          ],
          [
            "انتقال",
            "in-ti-qaa-li",
            "in-ti-qaal"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "تا",
            "taa",
            "taa",
            "taa ha-di mum-kin"
          ],
          [
            "حد",
            "ha-di",
            "had",
            "taa ha-di mum-kin"
          ],
          [
            "ممکن.",
            "mum-kin",
            "mum-kin",
            "taa ha-di mum-kin"
          ]
        ]
      }
    ],
    [
      {
        "say": "is-ti-faa-da az ma-waa-di makh-soo-si zid u-foo-nee ku-nan-da dar jaa-haa-yi laa-zim.",
        "mean": "Using special disinfectants where needed.",
        "words": [
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "مخصوص",
            "makh-soo-si",
            "makh-soos"
          ],
          [
            "ضد",
            "zid",
            "zid",
            "zid u-foo-nee ku-nan-da"
          ],
          [
            "عفونی",
            "u-foo-nee",
            "u-foo-nee",
            "zid u-foo-nee ku-nan-da"
          ],
          [
            "کننده",
            "ku-nan-da",
            "ku-nan-da",
            "zid u-foo-nee ku-nan-da"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "جاهای",
            "jaa-haa-yi",
            "jaa-haa"
          ],
          [
            "لازم.",
            "laa-zim",
            "laa-zim"
          ]
        ]
      }
    ],
    [
      {
        "say": "da-waa-paa-shee-yi fas-lee-yi ma-naa-zi-li mas-koo-nee ji-ha-ti da-fi ha-sha-raa-tee; az qa-beel: kayk, maa-dar-kayk, khasak, ka-na, shi-pish wa....",
        "mean": "Spraying homes with insecticide each season to get rid of insects such as fleas, bedbugs, cockroaches, ticks, lice and so on.",
        "words": [
          [
            "دواپاشی",
            "da-waa-paa-shee-yi",
            "da-waa-paa-shee"
          ],
          [
            "فصلی",
            "fas-lee-yi",
            "fas-lee"
          ],
          [
            "منازل",
            "ma-naa-zi-li",
            "ma-naa-zil"
          ],
          [
            "مسکونی",
            "mas-koo-nee",
            "mas-koo-nee"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat"
          ],
          [
            "دفع",
            "da-fi",
            "daf"
          ],
          [
            "حشراتی؛",
            "ha-sha-raa-tee",
            "ha-sha-raa-tee"
          ],
          [
            "از",
            "az",
            "az",
            "az qa-beel"
          ],
          [
            "قبیل:",
            "qa-beel",
            "qa-beel",
            "az qa-beel"
          ],
          [
            "کَیک،",
            "kayk",
            "kayk"
          ],
          [
            "مادرکَیک،",
            "maa-dar-kayk",
            "maa-dar-kayk"
          ],
          [
            "خسک،",
            "khasak",
            "khasak"
          ],
          [
            "کنه،",
            "ka-na",
            "ka-na"
          ],
          [
            "شپش",
            "shi-pish",
            "shi-pish"
          ],
          [
            "و....",
            "wa",
            "wa"
          ]
        ]
      }
    ],
    [
      {
        "say": "ri-aa-ya-ti na-zaa-fat wa paa-kee-yi da-qeeq dar la-waa-zim wa as-baa-bi khaa-na wa aash-paz-khaa-na ba khu-soos zarf-haa-yi-yi gha-zaa-kho-ree;",
        "mean": "Keeping household things and the kitchen carefully clean, especially the dishes;",
        "words": [
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "نظافت",
            "na-zaa-fat",
            "na-zaa-fat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پاکی",
            "paa-kee-yi",
            "paa-kee"
          ],
          [
            "دقیق",
            "da-qeeq",
            "da-qeeq"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "لوازم",
            "la-waa-zim",
            "la-waa-zim"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اسباب",
            "as-baa-bi",
            "as-baab"
          ],
          [
            "خانه",
            "khaa-na",
            "khaa-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آشپزخانه",
            "aash-paz-khaa-na",
            "aash-paz-khaa-na"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba khu-soos"
          ],
          [
            "خصوص",
            "khu-soos",
            "khu-soos",
            "ba khu-soos"
          ],
          [
            "ظرف‌های",
            "zarf-haa-yi-yi",
            "zarf-haa-yi"
          ],
          [
            "غذاخوری؛",
            "gha-zaa-kho-ree",
            "gha-zaa-kho-ree"
          ]
        ]
      },
      {
        "say": "ham-chu-naan shus-ta-ni dast-haa ba way-zha han-gaa-mi ta-maas baa: dast-gee-ra-yi dar-waa-za-yi tash-naab, baank-noot-haa wa sik-ka-haa-yi-yi fi-li-zee, dast-gee-ra-yi sir-wees-haa-yi-yi shah-ree wa....",
        "mean": "also washing the hands, especially after touching the handle of the toilet door, banknotes and metal coins, the handles of city buses and so on.",
        "words": [
          [
            "همچنان",
            "ham-chu-naan",
            "ham-chu-naan"
          ],
          [
            "شستن",
            "shus-ta-ni",
            "shus-tan"
          ],
          [
            "دست‌ها",
            "dast-haa",
            "dast-haa"
          ],
          [
            "به",
            "ba",
            "ba",
            "ba way-zha"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha",
            "ba way-zha"
          ],
          [
            "هنگام",
            "han-gaa-mi",
            "han-gaam"
          ],
          [
            "تماس",
            "ta-maas",
            "ta-maas"
          ],
          [
            "با:",
            "baa",
            "baa"
          ],
          [
            "دستگیرهٔ",
            "dast-gee-ra-yi",
            "dast-gee-ra-yi"
          ],
          [
            "دروازهٔ",
            "dar-waa-za-yi",
            "dar-waa-za"
          ],
          [
            "تشناب،",
            "tash-naab",
            "tash-naab"
          ],
          [
            "بانکنوت‌ها",
            "baank-noot-haa",
            "baank-noot-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سکه‌های",
            "sik-ka-haa-yi-yi",
            "sik-ka-haa-yi"
          ],
          [
            "فلزی،",
            "fi-li-zee",
            "fi-li-zee"
          ],
          [
            "دستگیره",
            "dast-gee-ra-yi",
            "dast-gee-ra"
          ],
          [
            "سرویس‌های",
            "sir-wees-haa-yi-yi",
            "sir-wees-haa-yi"
          ],
          [
            "شهری",
            "shah-ree",
            "shah-ree"
          ],
          [
            "و....",
            "wa",
            "wa"
          ]
        ]
      }
    ],
    [
      {
        "say": "ta-waj-ju-hi jid-dee ba si-hee bu-da-ni aa-bi aa-shaa-mee-da-nee, ma-waa-di gha-zaa-yee, sab-zee-haa wa may-wa-haa-yi-yi taa-za.",
        "mean": "Paying serious attention to the cleanness of drinking water, food, vegetables and fresh fruit.",
        "words": [
          [
            "توجه",
            "ta-waj-ju-hi",
            "ta-waj-juh"
          ],
          [
            "جدی",
            "jid-dee",
            "jid-dee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "صحی",
            "si-hee",
            "si-hee"
          ],
          [
            "بودن",
            "bu-da-ni",
            "bu-dan"
          ],
          [
            "آب",
            "aa-bi",
            "aab"
          ],
          [
            "آشامیدنی،",
            "aa-shaa-mee-da-nee",
            "aa-shaa-mee-da-nee"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "غذایی،",
            "gha-zaa-yee",
            "gha-zaa-yee"
          ],
          [
            "سبزی‌ها",
            "sab-zee-haa",
            "sab-zee-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "میوه‌های",
            "may-wa-haa-yi-yi",
            "may-wa-haa-yi"
          ],
          [
            "تازه.",
            "taa-za",
            "taa-za"
          ]
        ]
      }
    ],
    [
      {
        "say": "rawsh-haa-yi-yi mu-aa-la-ja-wee: aan ast ki pas az mu-saab shu-dan ba ya-kay az am-raa-zi mak-roo-bee, baa taj-wee-zi daak-tar, an-tee-bee-yo-teek-haa wa ma-waa-di zid mak-roo-bee dee-gar maw-ri-di is-ti-faa-da qa-raar gee-rad;",
        "mean": "Curative ways: after falling ill with one of the microbial diseases, antibiotics and other antimicrobial medicines are used, as a doctor prescribes;",
        "words": [
          [
            "روش‌های",
            "rawsh-haa-yi-yi",
            "rawsh-haa-yi"
          ],
          [
            "معالجوی:",
            "mu-aa-la-ja-wee",
            "mu-aa-la-ja-wee"
          ],
          [
            "آن",
            "aan",
            "aan"
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
            "مصاب",
            "mu-saab",
            "mu-saab",
            "mu-saab shu-dan"
          ],
          [
            "شدن",
            "shu-dan",
            "shu-dan",
            "mu-saab shu-dan"
          ],
          [
            "به",
            "ba",
            "ba"
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
            "امراض",
            "am-raa-zi",
            "am-raaz"
          ],
          [
            "مکروبی،",
            "mak-roo-bee",
            "mak-roo-bee"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تجویز",
            "taj-wee-zi",
            "taj-weez"
          ],
          [
            "داکتر،",
            "daak-tar",
            "daak-tar"
          ],
          [
            "انتی‌بیوتیک‌ها",
            "an-tee-bee-yo-teek-haa",
            "an-tee-bee-yo-teek-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "ضد",
            "zid",
            "zid",
            "zid mak-roo-bee"
          ],
          [
            "مکروبی",
            "mak-roo-bee",
            "mak-roo-bee",
            "zid mak-roo-bee"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid",
            "maw-ri-di is-ti-faa-da qa-raar gee-rad"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "maw-ri-di is-ti-faa-da qa-raar gee-rad"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar",
            "maw-ri-di is-ti-faa-da qa-raar gee-rad"
          ],
          [
            "گیرد؛",
            "gee-rad",
            "gee-rad",
            "maw-ri-di is-ti-faa-da qa-raar gee-rad",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "al-bat-ta an-tee-bee-yo-teek-haa naa-mi gu-roo-hee az da-waa-haa-st ki gaa-hay az gi-yaa-haan, za-maa-nay az ma-waa-di kee-mee-yaa-wee wa gaa-hay ham az tar-kee-bi har du baa ham du-rust shu-da wa ji-ha-ti az bayn bur-dan mak-roob-haa is-ti-faa-da may-sha-wad.",
        "mean": "of course, antibiotics are the name of a group of medicines made sometimes from plants, sometimes from chemicals, and sometimes from the two together, and used to destroy microbes.",
        "words": [
          [
            "البته",
            "al-bat-ta",
            "al-bat-ta"
          ],
          [
            "انتی‌بیوتیک‌ها",
            "an-tee-bee-yo-teek-haa",
            "an-tee-bee-yo-teek-haa"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "گروهی",
            "gu-roo-hee",
            "gu-roo-hee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دواهاست",
            "da-waa-haa-st",
            "da-waa-haa-st"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "گاهی",
            "gaa-hay",
            "gaa-hay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "گیاهان،",
            "gi-yaa-haan",
            "gi-yaa-haan"
          ],
          [
            "زمانی",
            "za-maa-nay",
            "za-maa-nay"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "کیمیاوی",
            "kee-mee-yaa-wee",
            "kee-mee-yaa-wee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گاهی",
            "gaa-hay",
            "gaa-hay"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "ترکیب",
            "tar-kee-bi",
            "tar-keeb"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "درست",
            "du-rust",
            "du-rust",
            "du-rust shu-da",
            "du-rust shu-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "du-rust shu-da",
            "shu-dan",
            "du-rust shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat"
          ],
          [
            "از",
            "az",
            "az",
            "az bayn bur-dan"
          ],
          [
            "بین",
            "bayn",
            "bayn",
            "az bayn bur-dan"
          ],
          [
            "بردن",
            "bur-dan",
            "bur-dan",
            "az bayn bur-dan"
          ],
          [
            "مکروب‌ها",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "is-ti-faa-da may-sha-wad",
            "is-ti-faa-da shu-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "is-ti-faa-da may-sha-wad",
            "shu-dan",
            "is-ti-faa-da shu-dan"
          ]
        ]
      },
      {
        "say": "nu-khus-teen an-tee-bee-yo-teek ta-was-su-ti daa-nish-man-dee ba naa-mi fi-lim-ing ta-hay-ya shud.",
        "mean": "The first antibiotic was made by a scientist named Fleming.",
        "words": [
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "انتی‌بیوتیک",
            "an-tee-bee-yo-teek",
            "an-tee-bee-yo-teek"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "دانشمندی",
            "daa-nish-man-dee",
            "daa-nish-man-dee"
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
            "فلمینگ",
            "fi-lim-ing",
            "fi-lim-ing"
          ],
          [
            "تهیه",
            "ta-hay-ya",
            "ta-hay-ya",
            "ta-hay-ya shud",
            "ta-hay-ya shu-dan"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "ta-hay-ya shud",
            "shu-dan",
            "ta-hay-ya shu-dan"
          ]
        ]
      },
      {
        "say": "oo baa tah-qeeq wa pa-zho-hish bar ro-yi mak-roob-haa, wa rushd daa-dan naw-ee az po-pina-ki sabz (pi-nee see-leem) maa-da-yee saakht ki khaa-see-ya-ti qa-wee-yi mak-roob-ku-shee dar aan maw-jood bood",
        "mean": "By research and study of microbes, and by growing a kind of green mold (penicillium), he made a substance that had a strong power to kill microbes,",
        "words": [
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تحقیق",
            "tah-qeeq",
            "tah-qeeq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پژوهش",
            "pa-zho-hish",
            "pa-zho-hish"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "روی",
            "ro-yi",
            "roy"
          ],
          [
            "مکروب‌ها،",
            "mak-roob-haa",
            "mak-roob-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رشد",
            "rushd",
            "rushd",
            "rushd daa-dan"
          ],
          [
            "دادن",
            "daa-dan",
            "daa-dan",
            "rushd daa-dan"
          ],
          [
            "نوعی",
            "naw-ee",
            "naw-ee"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پوپنک",
            "po-pina-ki",
            "po-pinak"
          ],
          [
            "سبز",
            "sabz",
            "sabz"
          ],
          [
            "(پنی",
            "pi-nee",
            "pi-nee"
          ],
          [
            "سیلیم)",
            "see-leem",
            "see-leem"
          ],
          [
            "ماده‌یی",
            "maa-da-yee",
            "maa-da-yee"
          ],
          [
            "ساخت",
            "saakht",
            "saakht",
            "saakh-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "خاصیت",
            "khaa-see-ya-ti",
            "khaa-see-yat"
          ],
          [
            "قوی",
            "qa-wee-yi",
            "qa-wee"
          ],
          [
            "مکروب‌کشی",
            "mak-roob-ku-shee",
            "mak-roob-ku-shee"
          ],
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
            "موجود",
            "maw-jood",
            "maw-jood"
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
        "say": "wa aan raa pi-nee see-leen naam gu-zaasht ki taa im-roz dar dar-maa-ni bee-maa-ree-haa-yi-yi mak-roo-bee az aan is-ti-faa-da may-sha-wad.",
        "mean": "and he named it penicillin, which is used to this day to treat microbial diseases.",
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
            "را",
            "raa",
            "raa"
          ],
          [
            "پنی",
            "pi-nee",
            "pi-nee",
            "pi-nee see-leen"
          ],
          [
            "سیلین",
            "see-leen",
            "see-leen",
            "pi-nee see-leen"
          ],
          [
            "نام",
            "naam",
            "naam",
            "naam gu-zaasht",
            "naam gu-zaash-tan"
          ],
          [
            "گذاشت",
            "gu-zaasht",
            "gu-zaasht",
            "naam gu-zaasht",
            "gu-zaash-tan",
            "naam gu-zaash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "امروز",
            "im-roz",
            "im-roz"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "درمان",
            "dar-maa-ni",
            "dar-maan"
          ],
          [
            "بیماری‌های",
            "bee-maa-ree-haa-yi-yi",
            "bee-maa-ree-haa-yi"
          ],
          [
            "مکروبی",
            "mak-roo-bee",
            "mak-roo-bee"
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
            "استفاده",
            "is-ti-faa-da",
            "is-ti-faa-da",
            "is-ti-faa-da may-sha-wad",
            "is-ti-faa-da shu-dan"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "is-ti-faa-da may-sha-wad",
            "shu-dan",
            "is-ti-faa-da shu-dan"
          ]
        ]
      }
    ]
  ]
});
