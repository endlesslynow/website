/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 22, book pages 142-143, PDF pages 149-150 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «است؛. اما» is written «است؛ اما»; «انتقال ناپذیری» is written «انتقال‌ناپذیری»; «نقل کرده اند» is written «نقل کرده‌اند»; «استقلال طلبانهٔ» is written «استقلال‌طلبانهٔ»; «نظر‌های» is written «نظرهای»; «قرارداده» is written «قرار داده»; «باهم» is written «با هم».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-22',
  group: 'Dari · grade 9',
  label: 'Lesson 22',
  name: "ku-mee-syoo-ni ja-haa-na-yi hu-qoo-qi ba-shar",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_22.jpg',
    alt: "A white dove flying over a blue globe encircled by laurel branches."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_22.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "ku-mee-syoon":                                     { fa: "کمیسیون", mean: "commission" },
    "ja-haa-nay":                                       { fa: "جهانی", mean: "a world" },
    "hu-qooq":                                          { fa: "حقوق", mean: "rights" },
    "ba-shar":                                          { fa: "بشر", mean: "humankind" },
    "ha-maan-go-na":                                    { fa: "همان‌گونه", mean: "in the same way, as" },
    "ki":                                               { fa: "که", mean: "that, which, who" },
    "pay-daa-st":                                       { fa: "پیداست", mean: "is evident, appears" },
    "az":                                               { fa: "از", mean: "from, of" },
    "du":                                               { fa: "دو", mean: "two" },
    "ka-li-ma":                                         { fa: "کلمه", mean: "a word" },
    "wa":                                               { fa: "و", mean: "and" },
    "tash-keel":                                        { fa: "تشکیل", mean: "formation; to form" },
    "shu-da":                                           { fa: "شده", mean: "become; been" },
    "shu-dan":                                          { fa: "شدن", mean: "to become" },
    "ast":                                              { fa: "است", mean: "is" },
    "i-baa-rat":                                        { fa: "عبارت", mean: "an expression" },
    "aan":                                              { fa: "آن", mean: "that" },
    "ta-waa-naa-yee-haa-yee":                           { fa: "توانایی‌هایی", mean: "some abilities, powers" },
    "ta-waa-naa-yay":                                   { fa: "توانایی", mean: "strong (ta-waa-naa + -ay, a: “a strong …”)" },
    "ba":                                               { fa: "به", mean: "to" },
    "i-raa-da":                                         { fa: "اراده", mean: "will, intention" },
    "ash-khaas":                                        { fa: "اشخاص", mean: "people" },
    "daa-da":                                           { fa: "داده", mean: "given" },
    "daa-dan":                                          { fa: "دادن", mean: "to give" },
    "na-maa-yaan-gar":                                  { fa: "نمایانگر", mean: "representing, showing" },
    "in-saan":                                          { fa: "انسان", mean: "a person, a human being" },
    "am-maa":                                           { fa: "اما", mean: "but" },
    "ba-tawr":                                          { fa: "به‌طور", mean: "in the way of" },
    "kul-lee":                                          { fa: "کلی", mean: "general" },
    "bu-nyaa-deen":                                     { fa: "بنیادین", mean: "fundamental" },
    "in-ti-qaal-naa-pa-zee-ree":                        { fa: "انتقال‌ناپذیری", mean: "inalienability" },
    "ba-raa-yi":                                        { fa: "برای", mean: "for" },
    "ha-yaat":                                          { fa: "حیات", mean: "life" },
    "naw#type":                                         { fa: "نوع", say: "naw", mean: "kind, type" },
    "a-saa-see":                                        { fa: "اساسی", mean: "basic" },
    "ta-laq-qee":                                       { fa: "تلقی", mean: "consideration, regarding" },
    "may-sha-wad":                                      { fa: "می‌شود", mean: "becomes" },
    "dee-gar":                                          { fa: "دیگر", mean: "other; more; anymore" },
    "haq-haa-yee":                                      { fa: "حق‌هایی", mean: "rights" },
    "haq":                                              { fa: "حق", mean: "right" },
    "laa-zi-ma":                                        { fa: "لازمه", mean: "requirement, necessary part" },
    "ta-bee-at":                                        { fa: "طبیعت", mean: "nature" },
    "hu-qoo-qee":                                       { fa: "حقوقی", mean: "rights; legal" },
    "paysh":                                            { fa: "پیش", mean: "front; forward" },
    "pay-daa-yish":                                     { fa: "پیدایش", mean: "appearance, development" },
    "daw-lat-haa":                                      { fa: "دولت‌ها", mean: "governments" },
    "daw-lat":                                          { fa: "دولت", mean: "state, government" },
    "wu-jood":                                          { fa: "وجود", mean: "existence" },
    "daash-ta":                                         { fa: "داشته", mean: "had" },
    "daash-tan":                                        { fa: "داشتن", mean: "to have" },
    "maa-fawq":                                         { fa: "مافوق", mean: "above, superior to" },
    "ha-meen":                                          { fa: "همین", mean: "this very, this same" },
    "ji-hat":                                           { fa: "جهت", mean: "direction" },
    "baa-yad":                                          { fa: "باید", mean: "must, should" },
    "raa":                                              { fa: "را", mean: "marks the object of the verb" },
    "muh-ta-ram":                                       { fa: "محترم", mean: "respected" },
    "shumur-da":                                        { fa: "شمرده", mean: "regarded, counted" },
    "shumur-dan":                                       { fa: "شمردن", mean: "to count, regard" },
    "laa-zim-ul-ij-raa":                                { fa: "لازم‌الاجرا", mean: "binding, enforceable" },
    "bi-daa-nand":                                      { fa: "بدانند", mean: "they should regard, know" },
    "daa-nis-tan":                                      { fa: "دانستن", mean: "to know" },
    "ham-chu-neen":                                     { fa: "همچنین", mean: "also, likewise" },
    "ta-reef":                                          { fa: "تعریف", mean: "definition" },
    "dee-ga-ray":                                       { fa: "دیگری", mean: "someone else" },
    "ki-taab":                                          { fa: "کتاب", mean: "book" },
    "ma-roof":                                          { fa: "معروف", mean: "famous" },
    "far-hang":                                         { fa: "فرهنگ", mean: "culture" },
    "fal-sa-fee":                                       { fa: "فلسفی", mean: "philosophical" },
    "vol-ter":                                          { fa: "ولتر", mean: "Voltaire" },
    "naql":                                             { fa: "نقل", mean: "moving, carrying" },
    "kar-da-and":                                       { fa: "کرده‌اند", mean: "they have done" },
    "kar-dan":                                          { fa: "کردن", mean: "to do, to make" },
    "guf-ta":                                           { fa: "گفته", mean: "said" },
    "guf-tan":                                          { fa: "گفتن", mean: "to say, to tell" },
    "yaa-nee":                                          { fa: "یعنی", mean: "that is, it means" },
    "jaan":                                             { fa: "جان", mean: "soul, life" },
    "maal":                                             { fa: "مال", mean: "wealth, property" },
    "aa-da-mee":                                        { fa: "آدمی", mean: "man, human being" },
    "aa-zaad":                                          { fa: "آزاد", mean: "free" },
    "baa-shad":                                         { fa: "باشد", mean: "be, should be" },
    "bu-dan":                                           { fa: "بودن", mean: "to be" },
    "oo":                                               { fa: "او", mean: "he, she; his, her" },
    "bi-ta-waa-nad":                                    { fa: "بتواند", mean: "be able" },
    "ta-waa-nis-tan":                                   { fa: "توانستن", mean: "to be able, can" },
    "zu-baan":                                          { fa: "زبان", mean: "language; tongue" },
    "qa-lam":                                           { fa: "قلم", mean: "pen" },
    "baa":                                              { fa: "با", mean: "with" },
    "dee-ga-raan":                                      { fa: "دیگران", mean: "others" },
    "su-khan":                                          { fa: "سخن", mean: "speech, words" },
    "bi-go-yad":                                        { fa: "بگوید", mean: "may say" },
    "na-ta-waan":                                       { fa: "نتوان", mean: "one cannot" },
    "ka-say":                                           { fa: "کسی", mean: "someone" },
    "bi-doon":                                          { fa: "بدون", mean: "without" },
    "hu-zoor":                                          { fa: "حضور", mean: "presence" },
    "yak":                                              { fa: "یک", mean: "one, a" },
    "hay-at":                                           { fa: "هیأت", mean: "panel, body" },
    "mun-si-fa-yi":                                     { fa: "منصفهٔ", mean: "impartial, jury" },
    "mun-si-fa":                                        { fa: "منصفه", mean: "impartial panel, jury" },
    "mu-ta-shak-kil":                                   { fa: "متشکل", mean: "made up (with az, of)" },
    "af-raad":                                          { fa: "افراد", mean: "individuals, members" },
    "mus-ta-qil":                                       { fa: "مستقل", mean: "independent" },
    "mu-jaa-zaat":                                      { fa: "مجازات", mean: "punishment" },
    "mah-koom":                                         { fa: "محکوم", mean: "condemned, convicted" },
    "kard":                                             { fa: "کرد", mean: "did, made" },
    "mah-koo-mee-yat":                                  { fa: "محکومیت", mean: "conviction" },
    "ji-zaa-yee":                                       { fa: "جزایی", mean: "criminal, penal" },
    "tibq":                                             { fa: "طبق", mean: "according to" },
    "mu-qar-ra-raat":                                   { fa: "مقررات", mean: "regulations" },
    "mu-qar-rar":                                       { fa: "مقرر", mean: "prescribed" },
    "qaa-noon":                                         { fa: "قانون", mean: "law" },
    "soo-rat":                                          { fa: "صورت", mean: "face, outward form" },
    "gee-rad":                                          { fa: "گیرد", mean: "take; (with qa-raar) be placed" },
    "gi-rif-tan":                                       { fa: "گرفتن", mean: "to take" },
    "een":                                              { fa: "این", mean: "this" },
    "haq-qee":                                          { fa: "حقی", mean: "a right" },
    "mukh-tas":                                         { fa: "مختص", mean: "particular, exclusive" },
    "maa":                                              { fa: "ما", mean: "we" },
    "in-saan-haa-st":                                   { fa: "انسان‌هاست", mean: "belongs to humans; humans are" },
    "in-saan-haa":                                      { fa: "انسان‌ها", mean: "people, human beings" },
    "juz#part":                                         { fa: "جزء", say: "juz", mean: "part" },
    "ta-bee-ee-ta-reen":                                { fa: "طبیعی‌ترین", mean: "most natural" },
    "ta-bee-ee":                                        { fa: "طبیعی", mean: "natural, naturally" },
    "maast":                                            { fa: "ماست", mean: "yogurt" },
    "heech":                                            { fa: "هیچ", mean: "none, no" },
    "qayd":                                             { fa: "قید", mean: "constraint, bond" },
    "ban-day":                                          { fa: "بندی", mean: "a chain, a bond" },
    "ri-aa-yat":                                        { fa: "رعایت", mean: "observing, keeping to" },
    "gar-dad":                                          { fa: "گردد", mean: "become" },
    "gar-dee-dan":                                      { fa: "گردیدن", mean: "to become, to turn" },
    "bi-ta-waa-neem":                                   { fa: "بتوانیم", mean: "we can" },
    "dar":                                              { fa: "در", mean: "in" },
    "zin-da-gee":                                       { fa: "زنده‌گی", mean: "life" },
    "mee-ku-neem":                                      { fa: "می‌کنیم", mean: "we do" },
    "baa-sheem":                                        { fa: "باشیم", mean: "we may be, let us be" },
    "aa-zaa-daa-na":                                    { fa: "آزادانه", mean: "freely" },
    "du-n-baal":                                        { fa: "دنبال", mean: "pursuit; following" },
    "ah-daaf":                                          { fa: "اهداف", mean: "aims" },
    "khaysh":                                           { fa: "خویش", mean: "own; self" },
    "raah":                                             { fa: "راه", mean: "way, road" },
    "uf-teem":                                          { fa: "افتیم", mean: "we set out, fall" },
    "uf-taa-dan":                                       { fa: "افتادن", mean: "to fall" },
    "su-kha-naan":                                      { fa: "سخنان", mean: "words, statements" },
    "ta-hi":                                            { fa: "تهِ", mean: "bottom of, depth of" },
    "dil":                                              { fa: "دل", mean: "heart" },
    "tar-see":                                          { fa: "ترسی", mean: "any fear, a fear" },
    "tars":                                             { fa: "ترس", mean: "fear" },
    "sa-raa-hat":                                       { fa: "صراحت", mean: "frankness" },
    "bar":                                              { fa: "بر", mean: "on, upon" },
    "la-baan":                                          { fa: "لبان", mean: "lips" },
    "jaa-ree":                                          { fa: "جاری", mean: "flowing; to utter" },
    "ku-naym":                                          { fa: "کنیم", mean: "we do" },
    "jan-ba-yi":                                        { fa: "جنبهٔ", mean: "aspect" },
    "jan-ba":                                           { fa: "جنبه", mean: "aspect" },
    "daa-rad":                                          { fa: "دارد", mean: "has" },
    "ka-daam":                                          { fa: "کدام", mean: "which, each (har ka-daam, each)" },
    "fard":                                             { fa: "فرد", mean: "person, individual" },
    "qawm":                                             { fa: "قوم", mean: "ethnic group, people" },
    "mil-lat":                                          { fa: "ملت", mean: "nation" },
    "kish-war":                                         { fa: "کشور", mean: "country" },
    "khaa-say":                                         { fa: "خاصی", mean: "special (khaas + -ay, a: “a special …”)" },
    "mad":                                              { fa: "مد", mean: "consideration, view" },
    "na-zar":                                           { fa: "نظر", mean: "sight, view; opinion" },
    "neest":                                            { fa: "نیست", mean: "is not" },
    "taa-reekh-cha-yi":                                 { fa: "تاریخچهٔ", mean: "history of" },
    "taa-reekh-cha":                                    { fa: "تاریخچه", mean: "brief history" },
    "tas-weeb":                                         { fa: "تصویب", mean: "adoption, approval" },
    "i'-laa-mee-ya-yi":                                 { fa: "اعلامیهٔ", mean: "declaration of" },
    "i'-laa-mee-ya":                                    { fa: "اعلامیه", mean: "declaration" },
    "i'-laa-mee-ya-haa-yi":                             { fa: "اعلامیه‌های", mean: "declarations" },
    "das-taa-war-dhaa-yi":                              { fa: "دستاوردهای", mean: "achievements" },
    "das-taa-ward":                                     { fa: "دستاورد", mean: "achievement" },
    "in-qi-laab":                                       { fa: "انقلاب", mean: "revolution" },
    "ka-beer":                                          { fa: "کبیر", mean: "great" },
    "fa-raa-na":                                        { fa: "فرانسه", mean: "France" },
    "af-kaar":                                          { fa: "افکار", mean: "thoughts, ideas" },
    "fikr":                                             { fa: "فکر", mean: "thought" },
    "mu-ta-fak-ki-raan":                                { fa: "متفکران", mean: "thinkers" },
    "mu-ta-fak-kir":                                    { fa: "متفکر", mean: "thinker" },
    "ing-lee-see":                                      { fa: "انگلیسی", mean: "English" },
    "fa-raa-na-wee":                                    { fa: "فرانسوی", mean: "French" },
    "ni-zaam":                                          { fa: "نظام", mean: "system" },
    "mash-roo-ta":                                      { fa: "مشروطه", mean: "constitutional" },
    "in-gi-lis-taan":                                   { fa: "انگلستان", mean: "England, Britain" },
    "jum-bish":                                         { fa: "جنبش", mean: "movement" },
    "is-tiq-laal-ta-la-baa-na-yi":                      { fa: "استقلال‌طلبانهٔ", mean: "pro-independence" },
    "is-tiq-laal-ta-la-baa-na":                         { fa: "استقلال‌طلبانه", mean: "pro-independence" },
    "mar-dum":                                          { fa: "مردم", mean: "people" },
    "am-ree-kaa":                                       { fa: "امریکا", mean: "America" },
    "ta-seer":                                          { fa: "تأثیر", mean: "effect, influence" },
    "pa-zee-ruf-ta":                                    { fa: "پذیرفته", mean: "accepted" },
    "pa-zee-ruf-tan":                                   { fa: "پذیرفتن", mean: "to accept" },
    "bood":                                             { fa: "بود", mean: "was" },
    "nuk-ta":                                           { fa: "نکته", mean: "point" },
    "ta-keed":                                          { fa: "تأکید", mean: "emphasis" },
    "daasht":                                           { fa: "داشت", mean: "had" },
    "qud-rat":                                          { fa: "قدرت", mean: "power" },
    "si-yaa-see":                                       { fa: "سیاسی", mean: "political" },
    "tan-haa":                                          { fa: "تنها", mean: "only; alone" },
    "za-maa-nay":                                       { fa: "زمانی", mean: "at times; a time" },
    "mash-roo-ee-yat":                                  { fa: "مشروعیت", mean: "legitimacy" },
    "khaast":                                           { fa: "خواست", mean: "wish, will" },
    "aa-ma-yi":                                         { fa: "عامهٔ", mean: "common people, public" },
    "ta-waj-juh":                                       { fa: "توجه", mean: "attention" },
    "asl":                                              { fa: "اصل", mean: "principle" },
    "ib-ti-daa":                                        { fa: "ابتدا", mean: "at first" },
    "mat-nee":                                          { fa: "متنی", mean: "a text" },
    "matn":                                             { fa: "متن", mean: "text" },
    "beest-o-shash#digit":                              { fa: "۲۶", say: "beest-o-shash", mean: "twenty-six" },
    "a-gust":                                           { fa: "اگست", mean: "August" },
    "he-zaar-o-haft-sad-o-hash-taad-o-noh-mee-laa-dee": { fa: "۱۷۸۹م", mean: "1789 AD" },
    "maj-lis":                                          { fa: "مجلس", mean: "council, assembly" },
    "ra-seed":                                          { fa: "رسید", mean: "arrived, reached" },
    "ra-see-dan":                                       { fa: "رسیدن", mean: "to arrive, to reach" },
    "un-waan":                                          { fa: "عنوان", mean: "title, capacity (ba un-waan, as)" },
    "dee-baa-cha-yi":                                   { fa: "دیباچهٔ", mean: "preamble of" },
    "dee-baa-cha":                                      { fa: "دیباچه", mean: "preamble" },
    "he-zaar-o-haft-sad-o-na-wad-o-yak-mee-laa-dee":    { fa: "۱۷۹۱م", mean: "1791 AD" },
    "maw-rid":                                          { fa: "مورد", mean: "object, case" },
    "qa-bool":                                          { fa: "قبول", mean: "acceptance" },
    "qa-raar":                                          { fa: "قرار", mean: "place, rest" },
    "gi-rift":                                          { fa: "گرفت", mean: "took; began" },
    "si-pas":                                           { fa: "سپس", mean: "then, later" },
    "see-u panj":                                       { fa: "۳۵", mean: "thirty-five" },
    "maa-da":                                           { fa: "ماده", mean: "substance, material" },
    "na-wish-ta":                                       { fa: "نوشته", mean: "written" },
    "na-wish-tan":                                      { fa: "نوشتن", mean: "to write" },
    "shud":                                             { fa: "شد", mean: "became; was" },
    "a-laa-wa":                                         { fa: "علاوه", mean: "addition (a-laa-wa bar, besides)" },
    "mak-la-fee-yat-haa-yi":                            { fa: "مکلفیت‌های", mean: "duties, obligations" },
    "mak-la-fee-yat":                                   { fa: "مکلفیت", mean: "duty, obligation" },
    "neez":                                             { fa: "نیز", mean: "also, too" },
    "ba-deen":                                          { fa: "بدین", mean: "by this, in this" },
    "tar-teeb":                                         { fa: "ترتیب", mean: "order, manner" },
    "mas-a-la-yi":                                      { fa: "مسألهٔ", mean: "issue, matter" },
    "aa-zaa-dee-haa":                                   { fa: "آزادی‌ها", mean: "freedoms" },
    "zoo-dee":                                          { fa: "زودی", mean: "soon" },
    "qa-waa-neen":                                      { fa: "قوانین", mean: "laws" },
    "kish-war-haa":                                     { fa: "کشورها", mean: "countries" },
    "pay-daa":                                          { fa: "پیدا", mean: "found, visible" },
    "pas":                                              { fa: "پس", mean: "then, so" },
    "jang":                                             { fa: "جنگ", mean: "war" },
    "du-wum":                                           { fa: "دوم", mean: "second" },
    "bi-naa":                                           { fa: "بنا", mean: "building" },
    "da-wat":                                           { fa: "دعوت", mean: "invitation, call" },
    "a-maa-ree-kaa":                                    { fa: "آمریکا", mean: "America, United States" },
    "shu-ra-wee":                                       { fa: "شوروی", mean: "Soviet Union" },
    "cheen":                                            { fa: "چین", mean: "China" },
    "beest-o-panj#digit":                               { fa: "۲۵", say: "beest-o-panj", mean: "twenty-five" },
    "ap-reel":                                          { fa: "اپریل", mean: "April" },
    "he-zaar-o-noh-sad-o-che-hil-o-panj-mee-laa-dee":   { fa: "۱۹۴۵م", mean: "1945 AD" },
    "kun-fi-raan-see":                                  { fa: "کنفرانسی", mean: "a conference" },
    "kun-fi-raans":                                     { fa: "کنفرانس", mean: "conference" },
    "shahr":                                            { fa: "شهر", mean: "city, town" },
    "saan-fraan-sees-ko-yi":                            { fa: "سانفرانسیسکوی", mean: "San Francisco's" },
    "saan-fraan-sees-ko":                               { fa: "سانفرانسیسکو", mean: "San Francisco" },
    "ee-yaa-laat":                                      { fa: "ایالات", mean: "states" },
    "mut-ta-hi-da-yi":                                  { fa: "متحدهٔ", mean: "united" },
    "mut-ta-hid":                                       { fa: "متحد", mean: "united" },
    "shir-kat":                                         { fa: "شرکت", mean: "participation" },
    "pan-jaah":                                         { fa: "پنجاه", mean: "fifty" },
    "a-saas-naa-ma-yi":                                 { fa: "اساسنامهٔ", mean: "charter, constitution of" },
    "a-saas-naa-ma":                                    { fa: "اساسنامه", mean: "charter, constitution" },
    "saa-zi-maan":                                      { fa: "سازمان", mean: "organization" },
    "mi-lal":                                           { fa: "ملل", mean: "nations" },
    "naam":                                             { fa: "نام", mean: "name" },
    "man-shoor":                                        { fa: "منشور", mean: "charter" },
    "gar-deed":                                         { fa: "گردید", mean: "became" },
    "maa-da-yi":                                        { fa: "مادهٔ", mean: "substance, material" },
    "shast-o-hasht#digit":                              { fa: "۶۸", say: "shast-o-hasht", mean: "sixty-eight" },
    "aa-ma-da":                                         { fa: "آمده", mean: "come" },
    "aa-ma-dan":                                        { fa: "آمدن", mean: "to come" },
    "shoo-raa":                                         { fa: "شورا", mean: "council, parliament" },
    "iq-ti-saa-dee":                                    { fa: "اقتصادی", mean: "economic" },
    "ij-ti-maa-ee":                                     { fa: "اجتماعی", mean: "social" },
    "ma-qaam":                                          { fa: "مقام", mean: "rank, position; musical mode" },
    "ya-kay":                                           { fa: "یکی", mean: "one" },
    "ni-haad-haa":                                      { fa: "نهادها", mean: "organizations" },
    "as-lee":                                           { fa: "اصلی", mean: "original, main" },
    "ku-mee-syoon-haa-yee":                             { fa: "کمیسیون‌هایی", mean: "commissions" },
    "ma-saa-yil":                                       { fa: "مسایل", mean: "issues, matters" },
    "tar-weej":                                         { fa: "ترویج", mean: "promotion" },
    "ta-sees":                                          { fa: "تأسیس", mean: "establishment" },
    "may-ku-nad":                                       { fa: "می‌کند", mean: "does, makes" },
    "ta-was-sut":                                       { fa: "توسط", mean: "by, through" },
    "maah":                                             { fa: "ماه", mean: "month; moon" },
    "fib-ra-waa-ree":                                   { fa: "فبروری", mean: "February" },
    "saal":                                             { fa: "سال", mean: "year" },
    "he-zaar-o-noh-sad-o-che-hil-o-shash-mee-laa-dee":  { fa: "۱۹۴۶م", mean: "1946 AD" },
    "ma-baa-his":                                       { fa: "مباحث", mean: "discussions, topics" },
    "naz-deek":                                         { fa: "نزدیک", mean: "near" },
    "tool":                                             { fa: "طول", mean: "length" },
    "ka-sheed":                                         { fa: "کشید", mean: "lasted; drew" },
    "ka-shee-dan":                                      { fa: "کشیدن", mean: "to pull; to bear" },
    "sar-an-jaam":                                      { fa: "سرانجام", mean: "finally, in the end" },
    "bahs":                                             { fa: "بحث", mean: "discussion, debate" },
    "ta-baa-dul":                                       { fa: "تبادل", mean: "exchange" },
    "na-zar-haa-yi":                                    { fa: "نظرهای", mean: "views, opinions" },
    "fa-raa-waan":                                      { fa: "فراوان", mean: "abundant, great" },
    "taa-reekh":                                        { fa: "تاریخ", mean: "history; date" },
    "da-hum":                                           { fa: "دهم", mean: "tenth" },
    "di-saam-ber":                                      { fa: "دسامبر", mean: "December" },
    "he-zaar-o-noh-sad-o-che-hil-o-hasht-mee-laa-dee":  { fa: "۱۹۴۸م", mean: "1948 AD" },
    "ra'y":                                             { fa: "رأی", mean: "vote, opinion" },
    "mu-khaa-li-fee":                                   { fa: "مخالفی", mean: "a dissenting, opposing" },
    "mu-khaa-lif":                                      { fa: "مخالف", mean: "opponent, critic" },
    "maj-ma":                                           { fa: "مجمع", mean: "assembly" },
    "u-moo-mee":                                        { fa: "عمومی", mean: "general, public" },
    "daa-raa-yi":                                       { fa: "دارای", mean: "having, possessing" },
    "see#digitplain":                                   { fa: "۳۰", say: "see", mean: "thirty" },
    "ha-daf":                                           { fa: "هدف", mean: "goal" },
    "khud":                                             { fa: "خود", mean: "own; self" },
    "aar-maan":                                         { fa: "آرمان", mean: "ideal, aspiration" },
    "mush-ta-rak":                                      { fa: "مشترک", mean: "common, shared" },
    "ta-maam":                                          { fa: "تمام", mean: "all, entire" },
    "mar-du-maan":                                      { fa: "مردمان", mean: "people" },
    "mil-lat-haa":                                      { fa: "ملت‌ها", mean: "nations" },
    "taa":                                              { fa: "تا", mean: "so that; until; to" },
    "ha-ma":                                            { fa: "همه", mean: "all, every" },
    "ku-mak":                                           { fa: "کمک", mean: "help" },
    "ta-leem":                                          { fa: "تعلیم", mean: "education" },
    "tar-bee-ya":                                       { fa: "تربیه", mean: "training, education" },
    "ham":                                              { fa: "هم", mean: "also, too" },
    "bi-koo-shand":                                     { fa: "بکوشند", mean: "they should strive" },
    "ko-shee-dan":                                      { fa: "کوشیدن", mean: "to try" },
    "gus-ta-rish":                                      { fa: "گسترش", mean: "expansion, spread" },
    "di-hand":                                          { fa: "دهند", mean: "they give" },
    "bar-khay":                                         { fa: "برخی", mean: "some" },
    "ma-waad":                                          { fa: "مواد", mean: "materials, things" },
    "mun-da-rij":                                       { fa: "مندرج", mean: "contained, included" },
    "maz-koor":                                         { fa: "مذکور", mean: "mentioned, known" },
    "chu-neen":                                         { fa: "چنین", mean: "so, like this" },
    "aw-wal":                                           { fa: "اول", mean: "first" },
    "dun-yaa":                                          { fa: "دنیا", mean: "world" },
    "may-aa-yand":                                      { fa: "می‌آیند", mean: "come; (with paysh) behave" },
    "li-haaz":                                          { fa: "لحاظ", mean: "point of view" },
    "hay-see-yat#dignity":                              { fa: "حیثیت", say: "hay-see-yat", mean: "dignity, standing" },
    "ba-raa-bar-and":                                   { fa: "برابرند", mean: "they are equal" },
    "ba-raa-bar":                                       { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "aql":                                              { fa: "عقل", mean: "reason, good sense" },
    "wuj-daan":                                         { fa: "وجدان", mean: "conscience" },
    "may-baa-shand":                                    { fa: "می‌باشند", mean: "are" },
    "yak-dee-gar":                                      { fa: "یک‌دیگر", mean: "each other" },
    "shay-wa":                                          { fa: "شیوه", mean: "style, way" },
    "ba-raa-da-ree":                                    { fa: "برادری", mean: "brotherhood" },
    "raf-taar":                                         { fa: "رفتار", mean: "behavior, conduct" },
    "ku-nand":                                          { fa: "کنند", mean: "they do" },
    "sa-wum":                                           { fa: "سوم", mean: "third" },
    "har":                                              { fa: "هر", mean: "every" },
    "kas":                                              { fa: "کس", mean: "person" },
    "aa-zaa-dee":                                       { fa: "آزادی", mean: "freedom" },
    "am-nee-yat":                                       { fa: "امنیت", mean: "security" },
    "shakh-see":                                        { fa: "شخصی", mean: "personal" },
    "da-waa-zda-hum":                                   { fa: "دوازدهم", mean: "twelfth" },
    "a-ha-dee":                                         { fa: "احدی", mean: "no one, anyone" },
    "khu-soo-see":                                      { fa: "خصوصی", mean: "private" },
    "u-moor":                                           { fa: "امور", mean: "matters" },
    "khaa-na-waa-da-gee":                               { fa: "خانواده‌گی", mean: "of the family" },
    "i-qaa-mat-gaah":                                   { fa: "اقامتگاه", mean: "residence, home" },
    "yaa":                                              { fa: "یا", mean: "or" },
    "mu-kaa-ti-baat":                                   { fa: "مکاتبات", mean: "correspondence" },
    "na-baa-yad":                                       { fa: "نباید", mean: "must not" },
    "mu-daa-khi-la-haa-yi":                             { fa: "مداخله‌های", mean: "interferences" },
    "mu-daa-khi-la":                                    { fa: "مداخله", mean: "interference" },
    "khud-sa-raa-na":                                   { fa: "خودسرانه", mean: "arbitrary" },
    "waa-qi":                                           { fa: "واقع", mean: "situated; becoming" },
    "sha-wad":                                          { fa: "شود", mean: "become" },
    "sha-raa-fat":                                      { fa: "شرافت", mean: "honor" },
    "ism":                                              { fa: "اسم", mean: "name" },
    "ras-mash":                                         { fa: "رسمش", mean: "his reputation, name" },
    "rasm":                                             { fa: "رسم", mean: "custom, way" },
    "ham-la":                                           { fa: "حمله", mean: "attack" },
    "mu-qaa-bil":                                       { fa: "مقابل", mean: "front; against" },
    "goo-na":                                           { fa: "گونه", mean: "kind, type" },
    "mu-daa-khi-laat":                                  { fa: "مداخلات", mean: "interferences" },
    "ha-ma-laat":                                       { fa: "حملات", mean: "attacks" },
    "hi-maa-yat":                                       { fa: "حمایت", mean: "protection, support" }
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
    "say": "ku-mee-syoo-ni ja-haa-na-yi hu-qoo-qi ba-shar",
    "mean": "The World Commission on Human Rights",
    "words": [
      [
        "کمیسیون",
        "ku-mee-syoo-ni",
        "ku-mee-syoon"
      ],
      [
        "جهانی",
        "ja-haa-na-yi",
        "ja-haa-nay"
      ],
      [
        "حقوق",
        "hu-qoo-qi",
        "hu-qooq"
      ],
      [
        "بشر",
        "ba-shar",
        "ba-shar"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "ha-maan-go-na ki pay-daa-st, hu-qoo-qi ba-shar az du ka-li-ma-yi “hu-qooq” wa “ba-shar” tash-keel shu-da ast.",
        "mean": "As is clear, “human rights” is made up of the two words “rights” and “human.”",
        "words": [
          [
            "همان‌گونه",
            "ha-maan-go-na",
            "ha-maan-go-na"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پیداست،",
            "pay-daa-st",
            "pay-daa-st"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دو",
            "du",
            "du"
          ],
          [
            "کلمهٔ",
            "ka-li-ma-yi",
            "ka-li-ma"
          ],
          [
            "«حقوق»",
            "hu-qooq",
            "hu-qooq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "«بشر»",
            "ba-shar",
            "ba-shar"
          ],
          [
            "تشکیل",
            "tash-keel",
            "tash-keel"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "hu-qooq i-baa-rat ast az aan ta-waa-naa-yee-haa-yee ki ba i-raa-da-yi ash-khaas daa-da shu-da ast.",
        "mean": "Rights are the powers granted to the will of individuals.",
        "words": [
          [
            "حقوق",
            "hu-qooq",
            "hu-qooq"
          ],
          [
            "عبارت",
            "i-baa-rat",
            "i-baa-rat"
          ],
          [
            "است",
            "ast",
            "ast"
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
            "توانایی‌هایی",
            "ta-waa-naa-yee-haa-yee",
            "ta-waa-naa-yee-haa-yee",
            "ta-waa-naa-yay"
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
            "ارادهٔ",
            "i-raa-da-yi",
            "i-raa-da"
          ],
          [
            "اشخاص",
            "ash-khaas",
            "ash-khaas"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "wa ba-shar na-maa-yaan-ga-ri in-saan ast; am-maa ba-taw-ri kul-lee hu-qoo-qi ba-shar i-baa-rat ast az hu-qoo-qi bu-nyaa-deen wa in-ti-qaal-naa-pa-zee-ree ki ba-raa-yi ha-yaa-ti na-wi ba-shar, a-saa-see ta-laq-qee may-sha-wad.",
        "mean": "“Human” represents humankind; in general, human rights are the fundamental, inalienable rights regarded as essential to the life of the human species.",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "نمایانگر",
            "na-maa-yaan-ga-ri",
            "na-maa-yaan-gar"
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
          ],
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "به‌طور",
            "ba-taw-ri",
            "ba-tawr"
          ],
          [
            "کلی",
            "kul-lee",
            "kul-lee"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "عبارت",
            "i-baa-rat",
            "i-baa-rat"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بنیادین",
            "bu-nyaa-deen",
            "bu-nyaa-deen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "انتقال‌ناپذیری",
            "in-ti-qaal-naa-pa-zee-ree",
            "in-ti-qaal-naa-pa-zee-ree"
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
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "نوع",
            "na-wi",
            "naw#type"
          ],
          [
            "بشر،",
            "ba-shar",
            "ba-shar"
          ],
          [
            "اساسی",
            "a-saa-see",
            "a-saa-see"
          ],
          [
            "تلقی",
            "ta-laq-qee",
            "ta-laq-qee"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "ba i-baa-ra-ti dee-gar: hu-qoo-qi ba-shar i-baa-rat ast az haq-haa-yee ki laa-zi-ma-yi ta-bee-a-ti in-saan ast;",
        "mean": "In other words, human rights are rights required by human nature.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عبارت",
            "i-baa-ra-ti",
            "i-baa-rat"
          ],
          [
            "دیگر:",
            "dee-gar",
            "dee-gar"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "عبارت",
            "i-baa-rat",
            "i-baa-rat"
          ],
          [
            "است",
            "ast",
            "ast"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حق‌هایی",
            "haq-haa-yee",
            "haq-haa-yee",
            "haq"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "لازمهٔ",
            "laa-zi-ma-yi",
            "laa-zi-ma"
          ],
          [
            "طبیعت",
            "ta-bee-a-ti",
            "ta-bee-at"
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
        "say": "hu-qoo-qee ki paysh az pay-daa-yi-shi daw-lat-haa wu-jood daash-ta wa maa-faw-qi aan ast;",
        "mean": "These rights existed before governments and stand above them.",
        "words": [
          [
            "حقوقی",
            "hu-qoo-qee",
            "hu-qoo-qee",
            "hu-qooq"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پیش",
            "paysh",
            "paysh"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "پیدایش",
            "pay-daa-yi-shi",
            "pay-daa-yish"
          ],
          [
            "دولت‌ها",
            "daw-lat-haa",
            "daw-lat-haa",
            "daw-lat"
          ],
          [
            "وجود",
            "wu-jood",
            "wu-jood"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مافوق",
            "maa-faw-qi",
            "maa-fawq"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ba ha-meen ji-hat daw-lat-haa baa-yad aan raa muh-ta-ram shumur-da wa laa-zim-ul-ij-raa bi-daa-nand;",
        "mean": "Governments must therefore respect them and regard them as binding.",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "همین",
            "ha-meen",
            "ha-meen"
          ],
          [
            "جهت",
            "ji-hat",
            "ji-hat"
          ],
          [
            "دولت‌ها",
            "daw-lat-haa",
            "daw-lat-haa",
            "daw-lat"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
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
            "محترم",
            "muh-ta-ram",
            "muh-ta-ram"
          ],
          [
            "شمرده",
            "shumur-da",
            "shumur-da",
            "shumur-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "لازم‌الاجرا",
            "laa-zim-ul-ij-raa",
            "laa-zim-ul-ij-raa"
          ],
          [
            "بدانند؛",
            "bi-daa-nand",
            "bi-daa-nand",
            "daa-nis-tan"
          ]
        ]
      },
      {
        "say": "ham-chu-neen ta-ree-fi dee-ga-ray az ki-taa-bi ma-roo-fi far-han-gi fal-sa-fee-yi “vol-ter” naql kar-da-and ki guf-ta ast:",
        "mean": "Another definition quoted from Voltaire's well-known Philosophical Dictionary says:",
        "words": [
          [
            "همچنین",
            "ham-chu-neen",
            "ham-chu-neen"
          ],
          [
            "تعریف",
            "ta-ree-fi",
            "ta-reef"
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
            "کتاب",
            "ki-taa-bi",
            "ki-taab"
          ],
          [
            "معروف",
            "ma-roo-fi",
            "ma-roof"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "فلسفی",
            "fal-sa-fee-yi",
            "fal-sa-fee"
          ],
          [
            "«ولتر»",
            "vol-ter",
            "vol-ter"
          ],
          [
            "نقل",
            "naql",
            "naql"
          ],
          [
            "کرده‌اند",
            "kar-da-and",
            "kar-da-and",
            "kar-dan"
          ],
          [
            "که",
            "ki",
            "ki"
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
      },
      {
        "say": "“hu-qoo-qi ba-shar yaa-nee aan ki jaan wa maa-li aa-da-mee, aa-zaad baa-shad wa oo bi-ta-waa-nad ba zu-baan wa qa-lam baa dee-ga-raan su-khan bi-go-yad.",
        "mean": "“Human rights mean that a person's life and property are free and that one can speak with others by tongue and pen.",
        "words": [
          [
            "«حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
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
            "جان",
            "jaan",
            "jaan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مال",
            "maa-li",
            "maal"
          ],
          [
            "آدمی،",
            "aa-da-mee",
            "aa-da-mee"
          ],
          [
            "آزاد",
            "aa-zaad",
            "aa-zaad"
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
            "او",
            "oo",
            "oo"
          ],
          [
            "بتواند",
            "bi-ta-waa-nad",
            "bi-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "زبان",
            "zu-baan",
            "zu-baan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قلم",
            "qa-lam",
            "qa-lam"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "سخن",
            "su-khan",
            "su-khan"
          ],
          [
            "بگوید.",
            "bi-go-yad",
            "bi-go-yad",
            "guf-tan"
          ]
        ]
      },
      {
        "say": "hu-qoo-qi ba-shar yaa-nee aan ki na-ta-waan ka-say raa bi-doo-ni hu-zoo-ri yak hay-a-ti mun-si-fa-yi-yi mu-ta-shak-kil az af-raa-di mus-ta-qil, ba mu-jaa-zaat mah-koom kard;",
        "mean": "Human rights mean that no one can be sentenced to punishment without an impartial jury made up of independent people.",
        "words": [
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
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
            "نتوان",
            "na-ta-waan",
            "na-ta-waan"
          ],
          [
            "کسی",
            "ka-say",
            "ka-say"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "حضور",
            "hu-zoo-ri",
            "hu-zoor"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "هیأت",
            "hay-a-ti",
            "hay-at"
          ],
          [
            "منصفهٔ",
            "mun-si-fa-yi-yi",
            "mun-si-fa-yi",
            "mun-si-fa"
          ],
          [
            "متشکل",
            "mu-ta-shak-kil",
            "mu-ta-shak-kil"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "افراد",
            "af-raa-di",
            "af-raad"
          ],
          [
            "مستقل،",
            "mus-ta-qil",
            "mus-ta-qil"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مجازات",
            "mu-jaa-zaat",
            "mu-jaa-zaat"
          ],
          [
            "محکوم",
            "mah-koom",
            "mah-koom"
          ],
          [
            "کرد؛",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "yaa-nee aan ki mah-koo-mee-ya-ti ji-zaa-yee baa-yad tib-qi mu-qar-ra-raa-ti qaa-noon soo-rat gee-rad...",
        "mean": "They mean that criminal conviction must take place according to legal rules.",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
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
            "محکومیت",
            "mah-koo-mee-ya-ti",
            "mah-koo-mee-yat"
          ],
          [
            "جزایی",
            "ji-zaa-yee",
            "ji-zaa-yee"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "طبق",
            "tib-qi",
            "tibq"
          ],
          [
            "مقررات",
            "mu-qar-ra-raa-ti",
            "mu-qar-ra-raat",
            "mu-qar-rar"
          ],
          [
            "قانون",
            "qaa-noon",
            "qaa-noon"
          ],
          [
            "صورت",
            "soo-rat",
            "soo-rat"
          ],
          [
            "گیرد...",
            "gee-rad",
            "gee-rad",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "hu-qoo-qi ba-shar yaa-nee een ki haq-qee ki mukh-ta-si maa in-saan-haa-st wa ju-zi ta-bee-ee-ta-reen hu-qoo-qi maast, bi-doo-ni heech qayd wa ban-day ri-aa-yat gar-dad,",
        "mean": "Human rights mean that the right belonging particularly to us as human beings, among our most natural rights, must be respected without restriction.",
        "words": [
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
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
            "که",
            "ki",
            "ki"
          ],
          [
            "حقی",
            "haq-qee",
            "haq-qee",
            "haq"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مختص",
            "mukh-ta-si",
            "mukh-tas"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "انسان‌هاست",
            "in-saan-haa-st",
            "in-saan-haa-st",
            "in-saan-haa"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جزء",
            "ju-zi",
            "juz#part"
          ],
          [
            "طبیعی‌ترین",
            "ta-bee-ee-ta-reen",
            "ta-bee-ee-ta-reen",
            "ta-bee-ee"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "ماست،",
            "maast",
            "maast"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "هیچ",
            "heech",
            "heech"
          ],
          [
            "قید",
            "qayd",
            "qayd"
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
            "رعایت",
            "ri-aa-yat",
            "ri-aa-yat"
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
        "say": "yaa-nee maa bi-ta-waa-neem dar ja-haa-nay ki zin-da-gee mee-ku-neem, aa-zaad baa-sheem wa aa-zaa-daa-na ba du-n-baa-li ah-daa-fi khaysh ba raah uf-teem;",
        "mean": "They mean that we can be free in the world where we live and freely pursue our goals.",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "بتوانیم",
            "bi-ta-waa-neem",
            "bi-ta-waa-neem",
            "ta-waa-nis-tan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "جهانی",
            "ja-haa-nay",
            "ja-haa-nay"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "زنده‌گی",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "می‌کنیم،",
            "mee-ku-neem",
            "mee-ku-neem",
            "kar-dan"
          ],
          [
            "آزاد",
            "aa-zaad",
            "aa-zaad"
          ],
          [
            "باشیم",
            "baa-sheem",
            "baa-sheem",
            "bu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزادانه",
            "aa-zaa-daa-na",
            "aa-zaa-daa-na"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دنبال",
            "du-n-baa-li",
            "du-n-baal"
          ],
          [
            "اهداف",
            "ah-daa-fi",
            "ah-daaf"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "راه",
            "raah",
            "raah"
          ],
          [
            "افتیم؛",
            "uf-teem",
            "uf-teem",
            "uf-taa-dan"
          ]
        ]
      },
      {
        "say": "yaa-nee bi-ta-waa-neem su-kha-naa-ni khaysh raa az ta-hi-yi dil, bi-doo-ni heech tar-see wa baa sa-raa-hat bar la-baan jaa-ree ku-naym.”",
        "mean": "They mean that we can speak our minds from the heart, without fear and with frankness.”",
        "words": [
          [
            "یعنی",
            "yaa-nee",
            "yaa-nee"
          ],
          [
            "بتوانیم",
            "bi-ta-waa-neem",
            "bi-ta-waa-neem",
            "ta-waa-nis-tan"
          ],
          [
            "سخنان",
            "su-kha-naa-ni",
            "su-kha-naan",
            "su-khan"
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
            "از",
            "az",
            "az"
          ],
          [
            "تهِ",
            "ta-hi-yi",
            "ta-hi"
          ],
          [
            "دل،",
            "dil",
            "dil"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "هیچ",
            "heech",
            "heech"
          ],
          [
            "ترسی",
            "tar-see",
            "tar-see",
            "tars"
          ],
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
            "صراحت",
            "sa-raa-hat",
            "sa-raa-hat"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "لبان",
            "la-baan",
            "la-baan"
          ],
          [
            "جاری",
            "jaa-ree",
            "jaa-ree"
          ],
          [
            "کنیم.»",
            "ku-naym",
            "ku-naym",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "pay-daa-st ki ta-ree-fi vol-ter az hu-qoo-qi ba-shar, jan-ba-yi-yi ja-haa-nay daa-rad wa ka-daam fard, qawm, mil-lat wa kish-wa-ri khaa-say mad na-zar neest.",
        "mean": "It is clear that Voltaire's definition of human rights is universal and does not concern any particular person, ethnic group, nation, or country.",
        "words": [
          [
            "پیداست",
            "pay-daa-st",
            "pay-daa-st"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "تعریف",
            "ta-ree-fi",
            "ta-reef"
          ],
          [
            "ولتر",
            "vol-ter",
            "vol-ter"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر،",
            "ba-shar",
            "ba-shar"
          ],
          [
            "جنبهٔ",
            "jan-ba-yi-yi",
            "jan-ba-yi",
            "jan-ba"
          ],
          [
            "جهانی",
            "ja-haa-nay",
            "ja-haa-nay"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کدام",
            "ka-daam",
            "ka-daam"
          ],
          [
            "فرد،",
            "fard",
            "fard"
          ],
          [
            "قوم،",
            "qawm",
            "qawm"
          ],
          [
            "ملت",
            "mil-lat",
            "mil-lat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کشور",
            "kish-wa-ri",
            "kish-war"
          ],
          [
            "خاصی",
            "khaa-say",
            "khaa-say"
          ],
          [
            "مد",
            "mad",
            "mad"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar"
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
        "say": "taa-reekh-cha-yi-yi tas-wee-bi i'-laa-mee-ya-yi-yi ja-haa-na-yi hu-qoo-qi ba-shar",
        "mean": "History of the adoption of the Universal Declaration of Human Rights",
        "words": [
          [
            "تاریخچهٔ",
            "taa-reekh-cha-yi-yi",
            "taa-reekh-cha-yi",
            "taa-reekh-cha"
          ],
          [
            "تصویب",
            "tas-wee-bi",
            "tas-weeb"
          ],
          [
            "اعلامیهٔ",
            "i'-laa-mee-ya-yi-yi",
            "i'-laa-mee-ya-yi",
            "i'-laa-mee-ya"
          ],
          [
            "جهانی",
            "ja-haa-na-yi",
            "ja-haa-nay"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ]
        ]
      }
    ],
    [
      {
        "say": "i'-laa-mee-ya-haa-yi-yi hu-qoo-qi ba-shar, az das-taa-war-dhaa-yi-yi in-qi-laa-bi ka-bee-ri fa-raa-na ast, ki az af-kaa-ri mu-ta-fak-ki-raa-ni ing-lee-see, fa-raa-na-wee, ni-zaa-mi mash-roo-ta-yi in-gi-lis-taan wa jum-bi-shi is-tiq-laal-ta-la-baa-na-yi-yi mar-du-mi am-ree-kaa ta-seer pa-zee-ruf-ta bood wa bar een nuk-ta ta-keed daasht ki qud-ra-ti si-yaa-see tan-haa za-maa-nay mash-roo-ee-yat daa-rad ki khaas-ti aa-ma-yi-yi mar-dum baa-shad.",
        "mean": "Declarations of human rights were achievements of the French Revolution, influenced by English and French thinkers, England's constitutional system, and the American independence movement; they stressed that political power is legitimate only when it reflects the people's general will.",
        "words": [
          [
            "اعلامیه‌های",
            "i'-laa-mee-ya-haa-yi-yi",
            "i'-laa-mee-ya-haa-yi",
            "i'-laa-mee-ya"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر،",
            "ba-shar",
            "ba-shar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دستاوردهای",
            "das-taa-war-dhaa-yi-yi",
            "das-taa-war-dhaa-yi",
            "das-taa-ward"
          ],
          [
            "انقلاب",
            "in-qi-laa-bi",
            "in-qi-laab"
          ],
          [
            "کبیر",
            "ka-bee-ri",
            "ka-beer"
          ],
          [
            "فرانسه",
            "fa-raa-na",
            "fa-raa-na"
          ],
          [
            "است،",
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
            "افکار",
            "af-kaa-ri",
            "af-kaar",
            "fikr"
          ],
          [
            "متفکران",
            "mu-ta-fak-ki-raa-ni",
            "mu-ta-fak-ki-raan",
            "mu-ta-fak-kir"
          ],
          [
            "انگلیسی،",
            "ing-lee-see",
            "ing-lee-see"
          ],
          [
            "فرانسوی،",
            "fa-raa-na-wee",
            "fa-raa-na-wee"
          ],
          [
            "نظام",
            "ni-zaa-mi",
            "ni-zaam"
          ],
          [
            "مشروطهٔ",
            "mash-roo-ta-yi",
            "mash-roo-ta"
          ],
          [
            "انگلستان",
            "in-gi-lis-taan",
            "in-gi-lis-taan"
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
            "استقلال‌طلبانهٔ",
            "is-tiq-laal-ta-la-baa-na-yi-yi",
            "is-tiq-laal-ta-la-baa-na-yi",
            "is-tiq-laal-ta-la-baa-na"
          ],
          [
            "مردم",
            "mar-du-mi",
            "mar-dum"
          ],
          [
            "امریکا",
            "am-ree-kaa",
            "am-ree-kaa"
          ],
          [
            "تأثیر",
            "ta-seer",
            "ta-seer"
          ],
          [
            "پذیرفته",
            "pa-zee-ruf-ta",
            "pa-zee-ruf-ta",
            "pa-zee-ruf-tan"
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
            "بر",
            "bar",
            "bar"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "نکته",
            "nuk-ta",
            "nuk-ta"
          ],
          [
            "تأکید",
            "ta-keed",
            "ta-keed"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "daash-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "قدرت",
            "qud-ra-ti",
            "qud-rat"
          ],
          [
            "سیاسی",
            "si-yaa-see",
            "si-yaa-see"
          ],
          [
            "تنها",
            "tan-haa",
            "tan-haa"
          ],
          [
            "زمانی",
            "za-maa-nay",
            "za-maa-nay"
          ],
          [
            "مشروعیت",
            "mash-roo-ee-yat",
            "mash-roo-ee-yat"
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
            "خواست",
            "khaas-ti",
            "khaast"
          ],
          [
            "عامهٔ",
            "aa-ma-yi-yi",
            "aa-ma-yi"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "باشد.",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "baa ta-waj-juh ba een asl, ib-ti-daa mat-nee dar beest-o-shash a-gust he-zaar-o-haft-sad-o-hash-taad-o-noh-mee-laa-dee. ba tas-wee-bi maj-li-si fa-raa-na ra-seed, ki ba un-waa-ni dee-baa-cha-yi-yi qaa-noo-ni a-saa-see-yi he-zaar-o-haft-sad-o-na-wad-o-yak-mee-laa-dee. maw-ri-di qa-bool qa-raar gi-rift;",
        "mean": "Based on this principle, a text was first approved by the French assembly on 26 August 1789 and accepted as the preamble to the 1791 constitution.",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh"
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
            "اصل،",
            "asl",
            "asl"
          ],
          [
            "ابتدا",
            "ib-ti-daa",
            "ib-ti-daa"
          ],
          [
            "متنی",
            "mat-nee",
            "mat-nee",
            "matn"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "۲۶",
            "beest-o-shash",
            "beest-o-shash#digit"
          ],
          [
            "اگست",
            "a-gust",
            "a-gust"
          ],
          [
            "۱۷۸۹م.",
            "he-zaar-o-haft-sad-o-hash-taad-o-noh-mee-laa-dee",
            "he-zaar-o-haft-sad-o-hash-taad-o-noh-mee-laa-dee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تصویب",
            "tas-wee-bi",
            "tas-weeb"
          ],
          [
            "مجلس",
            "maj-li-si",
            "maj-lis"
          ],
          [
            "فرانسه",
            "fa-raa-na",
            "fa-raa-na"
          ],
          [
            "رسید،",
            "ra-seed",
            "ra-seed",
            "ra-see-dan"
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
            "عنوان",
            "un-waa-ni",
            "un-waan"
          ],
          [
            "دیباچهٔ",
            "dee-baa-cha-yi-yi",
            "dee-baa-cha-yi",
            "dee-baa-cha"
          ],
          [
            "قانون",
            "qaa-noo-ni",
            "qaa-noon"
          ],
          [
            "اساسی",
            "a-saa-see-yi",
            "a-saa-see"
          ],
          [
            "۱۷۹۱م.",
            "he-zaar-o-haft-sad-o-na-wad-o-yak-mee-laa-dee",
            "he-zaar-o-haft-sad-o-na-wad-o-yak-mee-laa-dee"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "قبول",
            "qa-bool",
            "qa-bool"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "گرفت؛",
            "gi-rift",
            "gi-rift",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "si-pas mat-nee-yi dee-gar dar see-u panj maa-da ba un-waa-ni dee-baa-cha na-wish-ta shud ki a-laa-wa bar hu-qooq, ba mak-la-fee-yat-haa-yi-yi ba-shar neez na-zar daasht;",
        "mean": "Another text of thirty-five articles was then written as a preamble and addressed human duties as well as rights.",
        "words": [
          [
            "سپس",
            "si-pas",
            "si-pas"
          ],
          [
            "متنی",
            "mat-nee-yi",
            "mat-nee",
            "matn"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "۳۵",
            "see-u panj",
            "see-u panj"
          ],
          [
            "ماده",
            "maa-da",
            "maa-da"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عنوان",
            "un-waa-ni",
            "un-waan"
          ],
          [
            "دیباچه",
            "dee-baa-cha",
            "dee-baa-cha"
          ],
          [
            "نوشته",
            "na-wish-ta",
            "na-wish-ta",
            "na-wish-tan"
          ],
          [
            "شد",
            "shud",
            "shud",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "علاوه",
            "a-laa-wa",
            "a-laa-wa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "حقوق،",
            "hu-qooq",
            "hu-qooq"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مکلفیت‌های",
            "mak-la-fee-yat-haa-yi-yi",
            "mak-la-fee-yat-haa-yi",
            "mak-la-fee-yat"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "نظر",
            "na-zar",
            "na-zar"
          ],
          [
            "داشت؛",
            "daasht",
            "daasht",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "ba-deen tar-teeb mas-a-la-yi-yi hu-qooq wa aa-zaa-dee-haa, ba zoo-dee dar qa-waa-nee-ni a-saa-see-yi kish-war-haa-yi dee-gar neez raah pay-daa kard.",
        "mean": "Thus the question of rights and freedoms soon entered the constitutions of other countries.",
        "words": [
          [
            "بدین",
            "ba-deen",
            "ba-deen"
          ],
          [
            "ترتیب",
            "tar-teeb",
            "tar-teeb"
          ],
          [
            "مسألهٔ",
            "mas-a-la-yi-yi",
            "mas-a-la-yi"
          ],
          [
            "حقوق",
            "hu-qooq",
            "hu-qooq"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "آزادی‌ها،",
            "aa-zaa-dee-haa",
            "aa-zaa-dee-haa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "زودی",
            "zoo-dee",
            "zoo-dee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "قوانین",
            "qa-waa-nee-ni",
            "qa-waa-neen"
          ],
          [
            "اساسی",
            "a-saa-see-yi",
            "a-saa-see"
          ],
          [
            "کشورهای",
            "kish-war-haa-yi",
            "kish-war-haa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "راه",
            "raah",
            "raah"
          ],
          [
            "پیدا",
            "pay-daa",
            "pay-daa"
          ],
          [
            "کرد.",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "i'-laa-mee-ya-yi-yi ja-haa-na-yi hu-qoo-qi ba-shar",
        "mean": "The Universal Declaration of Human Rights",
        "words": [
          [
            "اعلامیهٔ",
            "i'-laa-mee-ya-yi-yi",
            "i'-laa-mee-ya-yi",
            "i'-laa-mee-ya"
          ],
          [
            "جهانی",
            "ja-haa-na-yi",
            "ja-haa-nay"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ]
        ]
      }
    ],
    [
      {
        "say": "pas az jan-gi ja-haa-na-yi du-wum, bi-naa bar da-wa-ti a-maa-ree-kaa, shu-ra-wee, in-gi-lis-taan, cheen wa fa-raa-na, dar beest-o-panj ap-reel he-zaar-o-noh-sad-o-che-hil-o-panj-mee-laa-dee. kun-fi-raan-see dar shah-ri saan-fraan-sees-ko-yi-yi ee-yaa-laa-ti mut-ta-hi-da-yi-yi am-ree-kaa, baa shir-ka-ti pan-jaah kish-war tash-keel shud.",
        "mean": "After the Second World War, at the invitation of the United States, the Soviet Union, Britain, China, and France, a conference of fifty countries met in San Francisco in the United States on 25 April 1945.",
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
            "جنگ",
            "jan-gi",
            "jang"
          ],
          [
            "جهانی",
            "ja-haa-na-yi",
            "ja-haa-nay"
          ],
          [
            "دوم،",
            "du-wum",
            "du-wum"
          ],
          [
            "بنا",
            "bi-naa",
            "bi-naa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "دعوت",
            "da-wa-ti",
            "da-wat"
          ],
          [
            "آمریکا،",
            "a-maa-ree-kaa",
            "a-maa-ree-kaa"
          ],
          [
            "شوروی،",
            "shu-ra-wee",
            "shu-ra-wee"
          ],
          [
            "انگلستان،",
            "in-gi-lis-taan",
            "in-gi-lis-taan"
          ],
          [
            "چین",
            "cheen",
            "cheen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فرانسه،",
            "fa-raa-na",
            "fa-raa-na"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "۲۵",
            "beest-o-panj",
            "beest-o-panj#digit"
          ],
          [
            "اپریل",
            "ap-reel",
            "ap-reel"
          ],
          [
            "۱۹۴۵م.",
            "he-zaar-o-noh-sad-o-che-hil-o-panj-mee-laa-dee",
            "he-zaar-o-noh-sad-o-che-hil-o-panj-mee-laa-dee"
          ],
          [
            "کنفرانسی",
            "kun-fi-raan-see",
            "kun-fi-raan-see",
            "kun-fi-raans"
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
            "سانفرانسیسکوی",
            "saan-fraan-sees-ko-yi-yi",
            "saan-fraan-sees-ko-yi",
            "saan-fraan-sees-ko"
          ],
          [
            "ایالات",
            "ee-yaa-laa-ti",
            "ee-yaa-laat"
          ],
          [
            "متحدهٔ",
            "mut-ta-hi-da-yi-yi",
            "mut-ta-hi-da-yi",
            "mut-ta-hid"
          ],
          [
            "امریکا،",
            "am-ree-kaa",
            "am-ree-kaa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "شرکت",
            "shir-ka-ti",
            "shir-kat"
          ],
          [
            "پنجاه",
            "pan-jaah",
            "pan-jaah"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
          ],
          [
            "تشکیل",
            "tash-keel",
            "tash-keel"
          ],
          [
            "شد.",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "dar een kun-fi-raans, a-saas-naa-ma-yi-yi saa-zi-maa-ni mi-la-li mut-ta-hid ba naa-mi “man-shoo-ri mi-la-li mut-ta-hid” tas-weeb gar-deed.",
        "mean": "At this conference, the United Nations charter was adopted under the name “Charter of the United Nations.”",
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
            "کنفرانس،",
            "kun-fi-raans",
            "kun-fi-raans"
          ],
          [
            "اساسنامهٔ",
            "a-saas-naa-ma-yi-yi",
            "a-saas-naa-ma-yi",
            "a-saas-naa-ma"
          ],
          [
            "سازمان",
            "saa-zi-maa-ni",
            "saa-zi-maan"
          ],
          [
            "ملل",
            "mi-la-li",
            "mi-lal"
          ],
          [
            "متحد",
            "mut-ta-hid",
            "mut-ta-hid"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نام",
            "naa-mi",
            "naam"
          ],
          [
            "«منشور",
            "man-shoo-ri",
            "man-shoor"
          ],
          [
            "ملل",
            "mi-la-li",
            "mi-lal"
          ],
          [
            "متحد»",
            "mut-ta-hid",
            "mut-ta-hid"
          ],
          [
            "تصویب",
            "tas-weeb",
            "tas-weeb"
          ],
          [
            "گردید.",
            "gar-deed",
            "gar-deed",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "dar maa-da-yi-yi shast-o-hasht een man-shoor aa-ma-da ast:",
        "mean": "Article 68 of the charter states:",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مادهٔ",
            "maa-da-yi-yi",
            "maa-da-yi"
          ],
          [
            "۶۸",
            "shast-o-hasht",
            "shast-o-hasht#digit"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "منشور",
            "man-shoor",
            "man-shoor"
          ],
          [
            "آمده",
            "aa-ma-da",
            "aa-ma-da",
            "aa-ma-dan"
          ],
          [
            "است:",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "“shoo-raa-yi iq-ti-saa-dee wa ij-ti-maa-ee, dar ma-qaa-mi ya-kay az ni-haad-haa-yi as-lee-yi saa-zi-maa-ni mi-la-li mut-ta-hid, ku-mee-syoon-haa-yee raa ba-raa-yi ma-saa-yi-li iq-ti-saa-dee, ij-ti-maa-ee wa tar-wee-ji hu-qoo-qi ba-shar ta-sees may-ku-nad.”",
        "mean": "“The Economic and Social Council, as one of the principal organs of the United Nations, establishes commissions for economic and social matters and for the promotion of human rights.”",
        "words": [
          [
            "«شورای",
            "shoo-raa-yi",
            "shoo-raa"
          ],
          [
            "اقتصادی",
            "iq-ti-saa-dee",
            "iq-ti-saa-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجتماعی،",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مقام",
            "ma-qaa-mi",
            "ma-qaam"
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
            "نهادهای",
            "ni-haad-haa-yi",
            "ni-haad-haa"
          ],
          [
            "اصلی",
            "as-lee-yi",
            "as-lee"
          ],
          [
            "سازمان",
            "saa-zi-maa-ni",
            "saa-zi-maan"
          ],
          [
            "ملل",
            "mi-la-li",
            "mi-lal"
          ],
          [
            "متحد،",
            "mut-ta-hid",
            "mut-ta-hid"
          ],
          [
            "کمیسیون‌هایی",
            "ku-mee-syoon-haa-yee",
            "ku-mee-syoon-haa-yee",
            "ku-mee-syoon"
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
            "مسایل",
            "ma-saa-yi-li",
            "ma-saa-yil"
          ],
          [
            "اقتصادی،",
            "iq-ti-saa-dee",
            "iq-ti-saa-dee"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ترویج",
            "tar-wee-ji",
            "tar-weej"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "تأسیس",
            "ta-sees",
            "ta-sees"
          ],
          [
            "می‌کند.»",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "baa ta-see-si ku-mee-syoo-ni hu-qoo-qi ba-shar, ta-was-su-ti shoo-raa-yi iq-ti-saa-dee wa ij-ti-maa-ee, dar maa-hi fib-ra-waa-ree-yi saa-li he-zaar-o-noh-sad-o-che-hil-o-shash-mee-laa-dee. ma-baa-hi-si hu-qoo-qi ba-shar dar een ku-mee-syoon naz-deek ba du saal tool ka-sheed wa sar-an-jaam pas az bahs wa ta-baa-du-li na-zar-haa-yi-yi fa-raa-waan, ba taa-ree-khi da-hu-mi di-saam-be-ri he-zaar-o-noh-sad-o-che-hil-o-hasht-mee-laa-dee. bi-doo-ni heech ra'-yi mu-khaa-li-fee ba tas-wee-bi maj-ma-yi u-moo-mee-yi saa-zi-maa-ni mi-la-li mut-ta-hid ra-seed.",
        "mean": "After the Human Rights Commission was established by the Economic and Social Council in February 1946, its discussions lasted nearly two years; after extensive debate and exchanges of views, the declaration was adopted by the UN General Assembly on 10 December 1948 without a dissenting vote.",
        "words": [
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تأسیس",
            "ta-see-si",
            "ta-sees"
          ],
          [
            "کمیسیون",
            "ku-mee-syoo-ni",
            "ku-mee-syoon"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر،",
            "ba-shar",
            "ba-shar"
          ],
          [
            "توسط",
            "ta-was-su-ti",
            "ta-was-sut"
          ],
          [
            "شورای",
            "shoo-raa-yi",
            "shoo-raa"
          ],
          [
            "اقتصادی",
            "iq-ti-saa-dee",
            "iq-ti-saa-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اجتماعی،",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "ماه",
            "maa-hi",
            "maah"
          ],
          [
            "فبروری",
            "fib-ra-waa-ree-yi",
            "fib-ra-waa-ree"
          ],
          [
            "سال",
            "saa-li",
            "saal"
          ],
          [
            "۱۹۴۶م.",
            "he-zaar-o-noh-sad-o-che-hil-o-shash-mee-laa-dee",
            "he-zaar-o-noh-sad-o-che-hil-o-shash-mee-laa-dee"
          ],
          [
            "مباحث",
            "ma-baa-hi-si",
            "ma-baa-his"
          ],
          [
            "حقوق",
            "hu-qoo-qi",
            "hu-qooq"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
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
            "کمیسیون",
            "ku-mee-syoon",
            "ku-mee-syoon"
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
            "دو",
            "du",
            "du"
          ],
          [
            "سال",
            "saal",
            "saal"
          ],
          [
            "طول",
            "tool",
            "tool"
          ],
          [
            "کشید",
            "ka-sheed",
            "ka-sheed",
            "ka-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سرانجام",
            "sar-an-jaam",
            "sar-an-jaam"
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
            "بحث",
            "bahs",
            "bahs"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تبادل",
            "ta-baa-du-li",
            "ta-baa-dul"
          ],
          [
            "نظرهای",
            "na-zar-haa-yi-yi",
            "na-zar-haa-yi",
            "na-zar"
          ],
          [
            "فراوان،",
            "fa-raa-waan",
            "fa-raa-waan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تاریخ",
            "taa-ree-khi",
            "taa-reekh"
          ],
          [
            "دهم",
            "da-hu-mi",
            "da-hum"
          ],
          [
            "دسامبر",
            "di-saam-be-ri",
            "di-saam-ber"
          ],
          [
            "۱۹۴۸م.",
            "he-zaar-o-noh-sad-o-che-hil-o-hasht-mee-laa-dee",
            "he-zaar-o-noh-sad-o-che-hil-o-hasht-mee-laa-dee"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "هیچ",
            "heech",
            "heech"
          ],
          [
            "رأی",
            "ra'-yi",
            "ra'y"
          ],
          [
            "مخالفی",
            "mu-khaa-li-fee",
            "mu-khaa-li-fee",
            "mu-khaa-lif"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تصویب",
            "tas-wee-bi",
            "tas-weeb"
          ],
          [
            "مجمع",
            "maj-ma-yi",
            "maj-ma"
          ],
          [
            "عمومی",
            "u-moo-mee-yi",
            "u-moo-mee"
          ],
          [
            "سازمان",
            "saa-zi-maa-ni",
            "saa-zi-maan"
          ],
          [
            "ملل",
            "mi-la-li",
            "mi-lal"
          ],
          [
            "متحد",
            "mut-ta-hid",
            "mut-ta-hid"
          ],
          [
            "رسید.",
            "ra-seed",
            "ra-seed",
            "ra-see-dan"
          ]
        ]
      },
      {
        "say": "een i'-laa-mee-ya ki daa-raa-yi see maa-da ast, ha-da-fi khud raa aar-maa-ni mush-ta-ra-ki ta-maa-mi mar-du-maan wa mil-lat-haa qa-raar daa-da ast;",
        "mean": "This thirty-article declaration sets as its goal the common ideal of all peoples and nations.",
        "words": [
          [
            "این",
            "een",
            "een"
          ],
          [
            "اعلامیه",
            "i'-laa-mee-ya",
            "i'-laa-mee-ya"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "۳۰",
            "see",
            "see#digitplain"
          ],
          [
            "ماده",
            "maa-da",
            "maa-da"
          ],
          [
            "است،",
            "ast",
            "ast"
          ],
          [
            "هدف",
            "ha-da-fi",
            "ha-daf"
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
            "آرمان",
            "aar-maa-ni",
            "aar-maan"
          ],
          [
            "مشترک",
            "mush-ta-ra-ki",
            "mush-ta-rak"
          ],
          [
            "تمام",
            "ta-maa-mi",
            "ta-maam"
          ],
          [
            "مردمان",
            "mar-du-maan",
            "mar-du-maan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ملت‌ها",
            "mil-lat-haa",
            "mil-lat-haa",
            "mil-lat"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "taa ha-ma-yi mar-dum ba ku-ma-ki ta-leem wa tar-bee-ya baa ham bi-koo-shand wa ri-aa-ya-ti aan raa gus-ta-rish di-hand;",
        "mean": "All people are to strive through education and training to broaden respect for it.",
        "words": [
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "مردم",
            "mar-dum",
            "mar-dum"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "کمک",
            "ku-ma-ki",
            "ku-mak"
          ],
          [
            "تعلیم",
            "ta-leem",
            "ta-leem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تربیه",
            "tar-bee-ya",
            "tar-bee-ya"
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
            "بکوشند",
            "bi-koo-shand",
            "bi-koo-shand",
            "ko-shee-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
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
            "گسترش",
            "gus-ta-rish",
            "gus-ta-rish"
          ],
          [
            "دهند؛",
            "di-hand",
            "di-hand",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "bar-khay az ma-waa-di mun-da-ri-ji i'-laa-mee-ya-yi-yi maz-koor, chu-neen ast:",
        "mean": "Some articles contained in the declaration are as follows:",
        "words": [
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
            "مواد",
            "ma-waa-di",
            "ma-waad"
          ],
          [
            "مندرج",
            "mun-da-ri-ji",
            "mun-da-rij"
          ],
          [
            "اعلامیهٔ",
            "i'-laa-mee-ya-yi-yi",
            "i'-laa-mee-ya-yi",
            "i'-laa-mee-ya"
          ],
          [
            "مذکور،",
            "maz-koor",
            "maz-koor"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
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
        "say": "maa-da-yi-yi aw-wal: ta-maa-mi af-raa-di ba-shar aa-zaad ba dun-yaa may-aa-yand wa az li-haa-zi hay-see-yat wa hu-qooq baa ham ba-raa-bar-and.",
        "mean": "Article 1: All human beings are born free and equal in dignity and rights.",
        "words": [
          [
            "مادهٔ",
            "maa-da-yi-yi",
            "maa-da-yi"
          ],
          [
            "اول:",
            "aw-wal",
            "aw-wal"
          ],
          [
            "تمام",
            "ta-maa-mi",
            "ta-maam"
          ],
          [
            "افراد",
            "af-raa-di",
            "af-raad"
          ],
          [
            "بشر",
            "ba-shar",
            "ba-shar"
          ],
          [
            "آزاد",
            "aa-zaad",
            "aa-zaad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
          ],
          [
            "می‌آیند",
            "may-aa-yand",
            "may-aa-yand",
            "aa-ma-dan"
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
            "لحاظ",
            "li-haa-zi",
            "li-haaz"
          ],
          [
            "حیثیت",
            "hay-see-yat",
            "hay-see-yat#dignity"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حقوق",
            "hu-qooq",
            "hu-qooq"
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
            "برابرند.",
            "ba-raa-bar-and",
            "ba-raa-bar-and",
            "ba-raa-bar"
          ]
        ]
      },
      {
        "say": "ha-ma daa-raa-yi aql wa wuj-daan may-baa-shand wa baa-yad baa yak-dee-gar baa shay-wa-yi ba-raa-da-ree raf-taar ku-nand.",
        "mean": "All possess reason and conscience and should treat one another in a spirit of brotherhood.",
        "words": [
          [
            "همه",
            "ha-ma",
            "ha-ma"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
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
            "وجدان",
            "wuj-daan",
            "wuj-daan"
          ],
          [
            "می‌باشند",
            "may-baa-shand",
            "may-baa-shand",
            "bu-dan"
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
            "با",
            "baa",
            "baa"
          ],
          [
            "یکدیگر",
            "yak-dee-gar",
            "yak-dee-gar"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "شیوهٔ",
            "shay-wa-yi",
            "shay-wa"
          ],
          [
            "برادری",
            "ba-raa-da-ree",
            "ba-raa-da-ree"
          ],
          [
            "رفتار",
            "raf-taar",
            "raf-taar"
          ],
          [
            "کنند.",
            "ku-nand",
            "ku-nand",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maa-da-yi-yi sa-wum: har kas ha-qi zin-da-gee, aa-zaa-dee wa am-nee-ya-ti shakh-see daa-rad.",
        "mean": "Article 3: Everyone has the right to life, liberty, and personal security.",
        "words": [
          [
            "مادهٔ",
            "maa-da-yi-yi",
            "maa-da-yi"
          ],
          [
            "سوم:",
            "sa-wum",
            "sa-wum"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "کس",
            "kas",
            "kas"
          ],
          [
            "حق",
            "ha-qi",
            "haq"
          ],
          [
            "زنده‌گی،",
            "zin-da-gee",
            "zin-da-gee"
          ],
          [
            "آزادی",
            "aa-zaa-dee",
            "aa-zaa-dee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "امنیت",
            "am-nee-ya-ti",
            "am-nee-yat"
          ],
          [
            "شخصی",
            "shakh-see",
            "shakh-see"
          ],
          [
            "دارد.",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maa-da-yi-yi da-waa-zda-hum: a-ha-dee dar zin-da-gee-yi khu-soo-see, u-moo-ri khaa-na-waa-da-gee, i-qaa-mat-gaah yaa mu-kaa-ti-baa-ti khud, na-baa-yad maw-ri-di mu-daa-khi-la-haa-yi-yi khud-sa-raa-na waa-qi sha-wad wa sha-raa-fat wa ism wa ras-mash na-baa-yad maw-ri-di ham-la qa-raar gee-rad.",
        "mean": "Article 12: No one shall be subjected to arbitrary interference with private life, family affairs, home, or correspondence, nor shall anyone's honor and reputation be attacked.",
        "words": [
          [
            "مادهٔ",
            "maa-da-yi-yi",
            "maa-da-yi"
          ],
          [
            "دوازدهم:",
            "da-waa-zda-hum",
            "da-waa-zda-hum"
          ],
          [
            "احدی",
            "a-ha-dee",
            "a-ha-dee"
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
            "خصوصی،",
            "khu-soo-see",
            "khu-soo-see"
          ],
          [
            "امور",
            "u-moo-ri",
            "u-moor"
          ],
          [
            "خانواده‌گی،",
            "khaa-na-waa-da-gee",
            "khaa-na-waa-da-gee"
          ],
          [
            "اقامتگاه",
            "i-qaa-mat-gaah",
            "i-qaa-mat-gaah"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "مکاتبات",
            "mu-kaa-ti-baa-ti",
            "mu-kaa-ti-baat"
          ],
          [
            "خود،",
            "khud",
            "khud"
          ],
          [
            "نباید",
            "na-baa-yad",
            "na-baa-yad"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "مداخله‌های",
            "mu-daa-khi-la-haa-yi-yi",
            "mu-daa-khi-la-haa-yi",
            "mu-daa-khi-la"
          ],
          [
            "خودسرانه",
            "khud-sa-raa-na",
            "khud-sa-raa-na"
          ],
          [
            "واقع",
            "waa-qi",
            "waa-qi"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرافت",
            "sha-raa-fat",
            "sha-raa-fat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اسم",
            "ism",
            "ism"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رسمش",
            "ras-mash",
            "ras-mash",
            "rasm"
          ],
          [
            "نباید",
            "na-baa-yad",
            "na-baa-yad"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "حمله",
            "ham-la",
            "ham-la"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "گیرد.",
            "gee-rad",
            "gee-rad",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "har kas haq daa-rad dar mu-qaa-bi-li een goo-na-yi mu-daa-khi-laat wa ha-ma-laat, maw-ri-di hi-maa-ya-ti qaa-noon qa-raar gee-rad.",
        "mean": "Everyone has the right to legal protection against such interference and attacks.",
        "words": [
          [
            "هر",
            "har",
            "har"
          ],
          [
            "کس",
            "kas",
            "kas"
          ],
          [
            "حق",
            "haq",
            "haq"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "گونه",
            "goo-na-yi",
            "goo-na"
          ],
          [
            "مداخلات",
            "mu-daa-khi-laat",
            "mu-daa-khi-laat",
            "mu-daa-khi-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حملات،",
            "ha-ma-laat",
            "ha-ma-laat",
            "ham-la"
          ],
          [
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "حمایت",
            "hi-maa-ya-ti",
            "hi-maa-yat"
          ],
          [
            "قانون",
            "qaa-noon",
            "qaa-noon"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "گیرد.",
            "gee-rad",
            "gee-rad",
            "gi-rif-tan"
          ]
        ]
      }
    ]
  ]
});
