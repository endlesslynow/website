/* Grade 9 Dari textbook (Afghanistan, Ministry of Education, 1399 / 2020),
   lesson 19, book pages 122-124, PDF pages 129-131 of G9-Dr-Dari.pdf.
   The Persian is the book's; its footnote numbers are left out. Changes from
   the printed text: «و...لازمهٔ» is written «و... لازمهٔ»; «هرخانواده» is written «هر خانواده»; «درعرصهٔ» is written «در عرصهٔ»; «دیگرخانواده‌ها» is written «دیگر خانواده‌ها»; «وخرج» is written «و خرج»; «بهتراست» is written «بهتر است»; «در آمد» is written «درآمد»; «درتثمیر» is written «در تثمیر»; «درحفظ» is written «در حفظ»; «تارخنهٔ» is written «تا رخنهٔ»; «درکنار» is written «در کنار»; «درامد» is written «درآمد»; «تهی دستی» is written «تهی‌دستی»; «بهره وری» is written «بهره‌وری»; «بازهم» is written «باز هم»; «نمی‌تواندکه» is written «نمی‌تواند که»; «صرفه جویی» is written «صرفه‌جویی»; «میانه روی» is written «میانه‌روی»; «اختیارکنند» is written «اختیار کنند»; «همین گونه» is written «همین‌گونه»; «مصرف کننده‌گان» is written «مصرف‌کننده‌گان»; «دست نگری» is written «دست‌نگری»; «بایدکرد» is written «باید کرد»; «توان فرسای» is written «توان‌فرسای»; «بار عایت» is written «با رعایت»; «اضافه خرجی» is written «اضافه‌خرجی».
   Every pronunciation, meaning and English line was written for this reader,
   in Kabul Dari read aloud, in Onion Skin's letters (see "sounds"). Made by
   tools/make_grade9_readings.py; change that script's files, not this one. */
READINGS.push({
  id: 'grade9-19',
  group: 'Dari · grade 9',
  label: 'Lesson 19',
  name: "as-baa-bi ma-ee-shat",
  pdf: 'G9-Dr-Dari.pdf',

  picture: {
    src: 'pictures/grade9_19.jpg',
    alt: "A row of black paper figures holding hands and casting long shadows."
  },

  // The lesson read aloud. Until a recording is given, the file is not
  // there and the player stays hidden.
  audio: 'audio/grade9_19.js',

  // Every word and phrase the slips show. The key is the pronunciation.
  words: {
    "as-baab":                 { fa: "اسباب", mean: "things, equipment" },
    "ma-ee-shat":              { fa: "معیشت", mean: "livelihood" },
    "khaa-na-waa-da":          { fa: "خانواده", mean: "family" },
    "nu-khus-teen":            { fa: "نخستین", mean: "first" },
    "wa":                      { fa: "و", mean: "and" },
    "saa-da-ta-reen":          { fa: "ساده‌ترین", mean: "simplest" },
    "saakh-taar":              { fa: "ساختار", mean: "structure" },
    "ij-ti-maa-ee":            { fa: "اجتماعی", mean: "social" },
    "ast":                     { fa: "است", mean: "is" },
    "ki":                      { fa: "که", mean: "that, which, who" },
    "ham-aa-nand":             { fa: "همانند", mean: "like, similar to" },
    "saa-yir":                 { fa: "سایر", mean: "other" },
    "waa-hid-haa-yi":          { fa: "واحدهای", mean: "units" },
    "jaa-mi-a":                { fa: "جامعه", mean: "society" },
    "in-saa-nee":              { fa: "انسانی", mean: "human" },
    "daa-raa-yi":              { fa: "دارای", mean: "having, possessing" },
    "nazm":                    { fa: "نظم", mean: "verse, order" },
    "qaa-noon":                { fa: "قانون", mean: "law" },
    "daash-tan":               { fa: "داشتن", mean: "to have" },
    "far-hang":                { fa: "فرهنگ", mean: "culture" },
    "akh-laaq":                { fa: "اخلاق", mean: "character, manners, morals" },
    "a-da-bee-yaat":           { fa: "ادبیات", mean: "literature" },
    "mu-naa-si-baat":          { fa: "مناسبات", mean: "relations" },
    "iq-ti-saad":              { fa: "اقتصاد", mean: "economy" },
    "way-zha":                 { fa: "ویژه", mean: "special (ba way-zha, especially)" },
    "laa-zi-ma":               { fa: "لازمه", mean: "requirement, necessary part" },
    "har":                     { fa: "هر", mean: "every" },
    "ba":                      { fa: "به", mean: "to" },
    "ba-yaan":                 { fa: "بیان", mean: "expression" },
    "dee-gar":                 { fa: "دیگر", mean: "other; more; anymore" },
    "zan-jee-ra-yee":          { fa: "زنجیره‌یی", mean: "a chain, linked" },
    "az":                      { fa: "از", mean: "from, of" },
    "sil-si-la":               { fa: "سلسله", mean: "series" },
    "ij-ti-maa":               { fa: "اجتماع", mean: "society" },
    "yak":                     { fa: "یک", mean: "one, a" },
    "dih-ka-da":               { fa: "دهکده", mean: "village" },
    "shah-rak":                { fa: "شهرک", mean: "town" },
    "shahr":                   { fa: "شهر", mean: "city, town" },
    "yaa":                     { fa: "یا", mean: "or" },
    "ki-sha-ree":              { fa: "کشوری", mean: "a country" },
    "dar":                     { fa: "در", mean: "in" },
    "sar-za-meen":             { fa: "سرزمین", mean: "land, country" },
    "zeest":                   { fa: "زیست", mean: "living, life" },
    "baa-ha-mee":              { fa: "باهمی", mean: "together, shared" },
    "daa-rand":                { fa: "دارند", mean: "have" },
    "uzw":                     { fa: "عضو", mean: "member" },
    "aan":                     { fa: "آن", mean: "that" },
    "raa":                     { fa: "را", mean: "marks the object of the verb" },
    "naam":                    { fa: "نام", mean: "name" },
    "shahr-wand":              { fa: "شهروند", mean: "citizen" },
    "yaad":                    { fa: "یاد", mean: "memory, mention" },
    "may-na-maa-yand":         { fa: "می‌نمایند", mean: "seem, look" },
    "na-mo-dan":               { fa: "نمودن", mean: "to do; to show; to seem" },
    "ta-bee-ee":               { fa: "طبیعی", mean: "natural, naturally" },
    "bar":                     { fa: "بر", mean: "on, upon" },
    "chi-go-na-gee":           { fa: "چگونه‌گی", mean: "manner, condition" },
    "ha-yaat":                 { fa: "حیات", mean: "life" },
    "shahr-wan-daan":          { fa: "شهروندان", mean: "citizens" },
    "khaa-na-waa-da-haa-yi":   { fa: "خانواده‌های", mean: "families" },
    "ta-seer":                 { fa: "تأثیر", mean: "effect, influence" },
    "may-gu-zaa-rad":          { fa: "می‌گذارد", mean: "puts, leaves" },
    "gu-zaash-tan":            { fa: "گذاشتن", mean: "to put, to place, to leave" },
    "am-maa":                  { fa: "اما", mean: "but" },
    "een":                     { fa: "این", mean: "this" },
    "ta-seer-gu-zaa-ree":      { fa: "تأثیرگذاری", mean: "influence" },
    "besh":                    { fa: "بیش", mean: "more" },
    "ha-ma":                   { fa: "همه", mean: "all, every" },
    "ar-sa":                   { fa: "عرصه", mean: "field, arena" },
    "mash-hood":               { fa: "مشهود", mean: "visible, evident" },
    "pas":                     { fa: "پس", mean: "then, so" },
    "ba-raa-yi":               { fa: "برای", mean: "for" },
    "ham":                     { fa: "هم", mean: "also, too" },
    "daa-khil":                { fa: "داخل", mean: "inside" },
    "pay-wand":                { fa: "پیوند", mean: "joining, mending" },
    "baa":                     { fa: "با", mean: "with" },
    "khaa-na-waa-da-haa":      { fa: "خانواده‌ها", mean: "families" },
    "khoob":                   { fa: "خوب", mean: "good" },
    "daash-ta":                { fa: "داشته", mean: "had" },
    "baa-shad":                { fa: "باشد", mean: "be, should be" },
    "bu-dan":                  { fa: "بودن", mean: "to be" },
    "naa-gu-zeer":             { fa: "ناگزیر", mean: "obliged, inevitably" },
    "ma-saa-yil":              { fa: "مسایل", mean: "issues, matters" },
    "dakhl":                   { fa: "دخل", mean: "income" },
    "kharj":                   { fa: "خرج", mean: "expenditure, spending" },
    "ta-naa-sub":              { fa: "تناسب", mean: "balance, proportion" },
    "dar-aa-mad":              { fa: "درآمد", mean: "income, earnings" },
    "mas-raf":                 { fa: "مصرف", mean: "use, consumption" },
    "roo-zaa-na":              { fa: "روزانه", mean: "daily" },
    "maa-haa-na":              { fa: "ماهانه", mean: "monthly" },
    "saa-laa-na":              { fa: "سالانه", mean: "yearly, annually" },
    "khaysh":                  { fa: "خویش", mean: "own; self" },
    "aa-gaa-hee":              { fa: "آگاهی", mean: "awareness, knowledge" },
    "ni-zaa-rat":              { fa: "نظارت", mean: "oversight" },
    "kaa-mil":                 { fa: "کامل", mean: "full, complete" },
    "aan-haa-yee":             { fa: "آن‌هایی", mean: "those who" },
    "mas-a-la":                { fa: "مسأله", mean: "issue, matter" },
    "bee-ta-wa-juh":           { fa: "بی‌توجه", mean: "inattentive" },
    "boo-da-and":              { fa: "بوده‌اند", mean: "have been" },
    "juz":                     { fa: "جز", mean: "except" },
    "pa-ray-shaa-nee":         { fa: "پریشانی", mean: "distress" },
    "faqr":                    { fa: "فقر", mean: "poverty" },
    "dar-ba-da-ree":           { fa: "دربدری", mean: "homelessness, wandering" },
    "haa-si-lee":              { fa: "حاصلی", mean: "a result, any gain" },
    "na-daash-ta-and":         { fa: "نداشته‌اند", mean: "have not had" },
    "taj-ru-ba":               { fa: "تجربه", mean: "experience" },
    "ni-shaan":                { fa: "نشان", mean: "sign, show" },
    "daa-da":                  { fa: "داده", mean: "given" },
    "daa-dan":                 { fa: "دادن", mean: "to give" },
    "khaa-na-waa-da-haa-yee":  { fa: "خانواده‌هایی", mean: "families that" },
    "mu-ta-wa-sit":            { fa: "متوسط", mean: "average" },
    "baa-laa":                 { fa: "بالا", mean: "top, height" },
    "waz-shaan":               { fa: "وضع‌شان", mean: "their condition" },
    "ma-raa-tib":              { fa: "مراتب", mean: "duties, ranks" },
    "bad-tar":                 { fa: "بدتر", mean: "worse" },
    "aa-yid":                  { fa: "عاید", mean: "income" },
    "hi-saab":                 { fa: "حساب", mean: "calculation, account" },
    "shu-da":                  { fa: "شده", mean: "become; been" },
    "shu-dan":                 { fa: "شدن", mean: "to become" },
    "maw-zoo":                 { fa: "موضوع", mean: "subject, point" },
    "a-zaa":                   { fa: "اعضا", mean: "members" },
    "ha-may-sha":              { fa: "همیشه", mean: "always" },
    "pay-was-ta":              { fa: "پیوسته", mean: "joined, connected" },
    "un-waan":                 { fa: "عنوان", mean: "title, capacity (ba un-waan, as)" },
    "amr":                     { fa: "امر", mean: "order, command" },
    "fa-raa-geer":             { fa: "فراگیر", mean: "broad, comprehensive" },
    "mat-rah":                 { fa: "مطرح", mean: "raised, under discussion" },
    "bih-tar":                 { fa: "بهتر", mean: "better" },
    "maw-rid":                 { fa: "مورد", mean: "object, case" },
    "tarh-haa-yi":             { fa: "طرح‌های", mean: "discussions, plans" },
    "mu-toon":                 { fa: "متون", mean: "texts" },
    "qa-deem":                 { fa: "قدیم", mean: "old, ancient" },
    "faa-ri-see":              { fa: "فارسی", mean: "Persian" },
    "jum-la":                  { fa: "جمله", mean: "sentence; all (az aan jum-la, among them)" },
    "ki-taab":                 { fa: "کتاب", mean: "book" },
    "ma-roof":                 { fa: "معروف", mean: "famous" },
    "ka-lee-la":               { fa: "کلیله", mean: "Kalila" },
    "dim-na-yi":               { fa: "دمنهٔ", mean: "Dimna, with ezafe" },
    "bah-raam-shaa-hee":       { fa: "بهرامشاهی", mean: "of Bahramshah" },
    "ta-waj-juh":              { fa: "توجه", mean: "attention" },
    "baa-sheem":               { fa: "باشیم", mean: "we may be, let us be" },
    "kasb":                    { fa: "کسب", mean: "gaining, acquisition" },
    "pay-sha":                 { fa: "پیشه", mean: "trade, profession" },
    "maal":                    { fa: "مال", mean: "wealth, property" },
    "nah-wa-yi":               { fa: "نحوهٔ", mean: "manner, way" },
    "chu-neen":                { fa: "چنین", mean: "so, like this" },
    "rosh-nee":                { fa: "روشنی", mean: "light, clarification" },
    "an-daakh-ta":             { fa: "انداخته", mean: "cast, shed" },
    "an-daakh-tan":            { fa: "انداختن", mean: "throwing; to throw" },
    "baa-zar-gaa-nee":         { fa: "بازرگانی", mean: "merchant, trade" },
    "bood":                    { fa: "بود", mean: "was" },
    "bi-si-yaar":              { fa: "بسیار", mean: "much, very" },
    "oo":                      { fa: "او", mean: "he, she; his, her" },
    "far-zan-daan":            { fa: "فرزندان", mean: "children, sons" },
    "ra-see-dand":             { fa: "رسیدند", mean: "arrived" },
    "ra-see-dan":              { fa: "رسیدن", mean: "to arrive, to reach" },
    "hir-fat":                 { fa: "حرفت", mean: "trade, craft" },
    "e-raaz":                  { fa: "اعراض", mean: "turning away" },
    "na-mo-dand":              { fa: "نمودند", mean: "they did" },
    "dast":                    { fa: "دست", mean: "hand" },
    "is-raaf":                 { fa: "اسراف", mean: "waste, extravagance" },
    "pa-dar":                  { fa: "پدر", mean: "father" },
    "da-raaz":                 { fa: "دراز", mean: "long" },
    "kar-dand":                { fa: "کردند", mean: "they did" },
    "kar-dan":                 { fa: "کردن", mean: "to do, to make" },
    "maw-i-zat":               { fa: "موعظت", mean: "admonition, advice" },
    "ma-laa-ma-ti":            { fa: "ملامتِ", mean: "rebuke" },
    "ee-shaan":                { fa: "ایشان", mean: "they" },
    "waa-jib":                 { fa: "واجب", mean: "necessary, obligatory" },
    "deed":                    { fa: "دید", mean: "saw" },
    "dee-dan":                 { fa: "دیدن", mean: "to see; seeing" },
    "as-naa-yi":               { fa: "اثنای", mean: "course, midst" },
    "guft":                    { fa: "گفت", mean: "said" },
    "guf-tan":                 { fa: "گفتن", mean: "to say, to tell" },
    "ay":                      { fa: "ای", mean: "O (when calling someone)" },
    "ahl":                     { fa: "اهل", mean: "people (of a place)" },
    "dun-yaa":                 { fa: "دنیا", mean: "world" },
    "jo-yaan":                 { fa: "جویان", mean: "seekers" },
    "sih":                     { fa: "سه", mean: "three" },
    "rut-ba-tand":             { fa: "رتبتند", mean: "are ranks" },
    "bi-daan":                 { fa: "بدان", mean: "know (an order)" },
    "daa-nis-tan":             { fa: "دانستن", mean: "to know" },
    "na-ra-sand":              { fa: "نرسند", mean: "do not reach" },
    "ma-gar":                  { fa: "مگر", mean: "except; unless" },
    "chi-haar":                { fa: "چهار", mean: "four" },
    "khas-lat":                { fa: "خصلت", mean: "habit, trait" },
    "taa-li-band":             { fa: "طالبند", mean: "they seek" },
    "fa-raa-khee":             { fa: "فراخی", mean: "ease, abundance" },
    "rif-at":                  { fa: "رفعت", mean: "elevation, high rank" },
    "man-zi-lat":              { fa: "منزلت", mean: "standing, rank" },
    "sa-waab":                 { fa: "ثواب", mean: "reward" },
    "aa-khi-rat":              { fa: "آخرت", mean: "the next world" },
    "na-maa-yad":              { fa: "نماید", mean: "make; do" },
    "nuh":                     { fa: "نه", mean: "nine" },
    "ta-waa-nad":              { fa: "تواند", mean: "can" },
    "ta-waa-nis-tan":          { fa: "توانستن", mean: "to be able, can" },
    "saakht":                  { fa: "ساخت", mean: "made" },
    "saakh-tan":               { fa: "ساختن", mean: "to make, to build" },
    "dee-ga-raan":             { fa: "دیگران", mean: "others" },
    "ta-a-hud":                { fa: "تعهد", mean: "support, responsibility" },
    "daasht":                  { fa: "داشت", mean: "had" },
    "a-gar":                   { fa: "اگر", mean: "if" },
    "ba-dast":                 { fa: "به‌دست", mean: "in hand" },
    "aa-rad":                  { fa: "آرد", mean: "bring" },
    "aa-war-dan":              { fa: "آوردن", mean: "to bring" },
    "tas-meer":                { fa: "تثمیر", mean: "increasing, making productive" },
    "ghaf-lat":                { fa: "غفلت", mean: "neglect" },
    "war-zad":                 { fa: "ورزد", mean: "practices, does" },
    "war-zee-dan":             { fa: "ورزیدن", mean: "to practice; (with da-reegh) to hold back" },
    "zood":                    { fa: "زود", mean: "soon" },
    "dar-wesh":                { fa: "درویش", mean: "poor person, dervish" },
    "sha-wad":                 { fa: "شود", mean: "become" },
    "ka-say":                  { fa: "کسی", mean: "someone" },
    "ran-jash":                { fa: "رنجش", mean: "its difficulty, distress" },
    "an-dar":                  { fa: "اندر", mean: "in (an old word for dar)" },
    "ni-gaah":                 { fa: "نگاه", mean: "look, gaze" },
    "chu-naan-ki":             { fa: "چنان‌که", mean: "as, for example" },
    "sur-ma":                  { fa: "سرمه", mean: "kohl" },
    "chi":                     { fa: "چه", mean: "what; how" },
    "an-dak":                  { fa: "اندک", mean: "little" },
    "it-ti-faaq":              { fa: "اتفاق", mean: "agreement, event" },
    "uf-tad":                  { fa: "افتد", mean: "falls, occurs" },
    "uf-taa-dan":              { fa: "افتادن", mean: "to fall" },
    "aa-khir":                 { fa: "آخر", mean: "in the end; last" },
    "fa-naa":                  { fa: "فنا", mean: "disappearance, destruction" },
    "pa-zee-rad":              { fa: "پذیرد", mean: "accepts, comes to" },
    "pa-zee-ruf-tan":          { fa: "پذیرفتن", mean: "to accept" },
    "cho":                     { fa: "چو", mean: "like (short for choon)" },
    "gee-ree":                 { fa: "گیری", mean: "you take" },
    "gi-rif-tan":              { fa: "گرفتن", mean: "to take" },
    "koh":                     { fa: "کوه", mean: "mountain" },
    "na-ni-hee":               { fa: "ننهی", mean: "you do not put" },
    "ni-haa-dan":              { fa: "نهادن", mean: "to put, to place" },
    "ba-jaa":                  { fa: "به‌جا", mean: "in place" },
    "sar-an-jaam":             { fa: "سرانجام", mean: "finally, in the end" },
    "aa-yad":                  { fa: "آید", mean: "comes" },
    "aa-ma-dan":               { fa: "آمدن", mean: "to come" },
    "za":                      { fa: "ز", mean: "from (short for az)" },
    "paa":                     { fa: "پا", mean: "foot, leg" },
    "hifz":                    { fa: "حفظ", mean: "keeping, guarding" },
    "jid":                     { fa: "جد", mean: "serious effort" },
    "na-na-maa-yad":           { fa: "ننماید", mean: "does not do" },
    "bee-wajh":                { fa: "بی‌وجه", mean: "without reason" },
    "ku-nad":                  { fa: "کند", mean: "does" },
    "pa-shay-maa-nee":         { fa: "پشیمانی", mean: "regret" },
    "zu-baan":                 { fa: "زبان", mean: "language; tongue" },
    "ta'n":                    { fa: "طعن", mean: "reproach, taunt" },
    "way":                     { fa: "وی", mean: "he, she" },
    "gu-shaa-da":              { fa: "گشاده", mean: "open" },
    "ma-waa-zi":               { fa: "مواضع", mean: "places, cases" },
    "hu-qooq":                 { fa: "حقوق", mean: "rights" },
    "im-saak":                 { fa: "امساک", mean: "withholding" },
    "naa-mar-ee":              { fa: "نامرعی", mean: "not observed" },
    "daa-rad":                 { fa: "دارد", mean: "has" },
    "dar-way-shee":            { fa: "درویشی", mean: "poverty" },
    "laz-zaat":                { fa: "لذات", mean: "pleasures" },
    "mah-room":                { fa: "محروم", mean: "deprived" },
    "ma-qaa-deer":             { fa: "مقادیر", mean: "decrees, quantities" },
    "aa-si-maa-nee":           { fa: "آسمانی", mean: "heavenly" },
    "ha-waa-dis":              { fa: "حوادث", mean: "cases, events" },
    "rooz-gaar":               { fa: "روزگار", mean: "time, era" },
    "ma'rez":                  { fa: "معرض", mean: "exposure, place" },
    "taf-ri-qa":               { fa: "تفرقه", mean: "dispersal" },
    "choon":                   { fa: "چون", mean: "like, as; when; because" },
    "haw-zee":                 { fa: "حوضی", mean: "a pool" },
    "aab":                     { fa: "آب", mean: "water" },
    "may-aa-yad":              { fa: "می‌آید", mean: "comes" },
    "an-daa-za-yi":            { fa: "اندازهٔ", mean: "measure, amount" },
    "mad-khal":                { fa: "مدخل", mean: "entrance" },
    "makh-ra-jee":             { fa: "مخرجی", mean: "an outlet" },
    "na-baa-shad":             { fa: "نباشد", mean: "is not" },
    "laa-ja-ram":              { fa: "لاجرم", mean: "inevitably" },
    "ja-waa-nib":              { fa: "جوانب", mean: "sides" },
    "raah":                    { fa: "راه", mean: "way, road" },
    "jo-yad":                  { fa: "جوید", mean: "may seek, benefit" },
    "jus-tan":                 { fa: "جستن", mean: "to seek, to look for" },
    "bi-ta-raa-bad":           { fa: "بترابد", mean: "overflows" },
    "ta-raa-bee-dan":          { fa: "ترابیدن", mean: "to overflow" },
    "taa":                     { fa: "تا", mean: "so that; until; to" },
    "rakh-na-yi":              { fa: "رخنهٔ", mean: "breach, opening" },
    "bu-zurg":                 { fa: "بزرگ", mean: "big, great" },
    "ta-maa-mee":              { fa: "تمامی", mean: "all, entirety" },
    "naa-cheez":               { fa: "ناچیز", mean: "nothing, insignificant" },
    "gar-dad":                 { fa: "گردد", mean: "become" },
    "gar-dee-dan":             { fa: "گردیدن", mean: "to become, to turn" },
    "pand":                    { fa: "پند", mean: "counsel" },
    "nayk-tar":                { fa: "نیکوتر", mean: "better, best" },
    "bi-shi-no-dand":          { fa: "بشنودند", mean: "they heard" },
    "shi-nee-dan":             { fa: "شنیدن", mean: "to hear" },
    "ma-naa-fi":               { fa: "منافع", mean: "interests, benefits" },
    "ghaa-yat":                { fa: "غایت", mean: "fullest extent" },
    "bi-shi-naakh-tand":       { fa: "بشناختند", mean: "they recognized" },
    "shi-naakh-tan":           { fa: "شناختن", mean: "to know, recognize" },
    "bi-raa-dar":              { fa: "برادر", mean: "brother" },
    "mih-tar":                 { fa: "مهتر", mean: "lord, noble" },
    "roy":                     { fa: "روی", mean: "face" },
    "ti-jaa-rat":              { fa: "تجارت", mean: "trade" },
    "aa-war-da":               { fa: "آورده", mean: "brought" },
    "sa-fa-ree":               { fa: "سفری", mean: "a journey" },
    "door-dast":               { fa: "دوردست", mean: "distant" },
    "ikh-ti-yaar":             { fa: "اختیار", mean: "choice, choosing" },
    "kard":                    { fa: "کرد", mean: "did, made" },
    "maf-ho-mee":              { fa: "مفهومی", mean: "a meaning, lesson" },
    "matn":                    { fa: "متن", mean: "text" },
    "haa-sil":                 { fa: "حاصل", mean: "obtained; result" },
    "may-sha-wad":             { fa: "می‌شود", mean: "becomes" },
    "ki-naar":                 { fa: "کنار", mean: "side, edge" },
    "ur-za-yi":                { fa: "عرضهٔ", mean: "offering, supply" },
    "kaar":                    { fa: "کار", mean: "work, a job" },
    "akz":                     { fa: "اخذ", mean: "receiving, taking" },
    "ma-aash":                 { fa: "معاش", mean: "salary, livelihood" },
    "bar-naa-ma":              { fa: "برنامه", mean: "plan" },
    "tan-zeem":                { fa: "تنظیم", mean: "arranging, organization" },
    "ikh-ti-saas":             { fa: "اختصاص", mean: "allocation" },
    "ma-jaa-ree":              { fa: "مجاری", mean: "channels" },
    "mu-him-ta-reen":          { fa: "مهمترین", mean: "most important" },
    "raah-kaar-haa-yee":       { fa: "راهکارهایی", mean: "methods, solutions" },
    "paa-yeen":                { fa: "پایین", mean: "lower; Payin (in names)" },
    "tu-hee-das-tee":          { fa: "تهی‌دستی", mean: "poverty, destitution" },
    "na-jaat":                 { fa: "نجات", mean: "salvation, rescue" },
    "may-di-had":              { fa: "می‌دهد", mean: "gives" },
    "im-roz":                  { fa: "امروز", mean: "today" },
    "ta-maam":                 { fa: "تمام", mean: "all, entire" },
    "za-mee-na-haa":           { fa: "زمینه‌ها", mean: "fields, areas" },
    "faq-daan":                { fa: "فقدان", mean: "lack, absence" },
    "a-dam":                   { fa: "عدم", mean: "lack, nonexistence" },
    "ri-aa-yat":               { fa: "رعایت", mean: "observing, keeping to" },
    "mo-jib":                  { fa: "موجب", mean: "cause" },
    "su-qoot":                 { fa: "سقوط", mean: "collapse, fall" },
    "bu-zurg-ta-reen":         { fa: "بزرگترین", mean: "largest, greatest" },
    "ko-chak-ta-reen":         { fa: "کوچکترین", mean: "smallest" },
    "saakh-taar-haa-yi":       { fa: "ساختارهای", mean: "structures" },
    "hat-taa":                 { fa: "حتا", mean: "even" },
    "aa-moz-gaa-ree":          { fa: "آموزگاری", mean: "a teacher" },
    "bi-doon":                 { fa: "بدون", mean: "without" },
    "muf-ra-daat":             { fa: "مفردات", mean: "subjects" },
    "p-laan":                  { fa: "پلان", mean: "plan" },
    "dars":                    { fa: "درس", mean: "lesson" },
    "i-raa-a":                 { fa: "ارائه", mean: "presenting, offering" },
    "may-par-daa-zad":         { fa: "می‌پردازد", mean: "busies himself (with ba)" },
    "par-daakh-tan":           { fa: "پرداختن", mean: "to busy oneself (with ba), to take up; to pay" },
    "bah-ra-wa-ree":           { fa: "بهره‌وری", mean: "benefiting, use" },
    "daa-nish":                { fa: "دانش", mean: "knowledge" },
    "fahm":                    { fa: "فهم", mean: "understanding" },
    "baaz":                    { fa: "باز", mean: "open" },
    "na-may-ta-waa-nad":       { fa: "نمی‌تواند", mean: "cannot" },
    "mu-al-lim":               { fa: "معلم", mean: "teacher" },
    "mu-waf-faq":              { fa: "موفق", mean: "successful" },
    "neez":                    { fa: "نیز", mean: "also, too" },
    "na-baa-yad":              { fa: "نباید", mean: "must not" },
    "mas-a-la-yi":             { fa: "مسألهٔ", mean: "issue, matter" },
    "na-zar":                  { fa: "نظر", mean: "sight, view; opinion" },
    "door":                    { fa: "دور", mean: "far" },
    "baa-shand":               { fa: "باشند", mean: "be" },
    "sir-fa-jo-yee":           { fa: "صرفه‌جویی", mean: "saving, thrift" },
    "ya-kay":                  { fa: "یکی", mean: "one" },
    "raah-haa-yee":            { fa: "راه‌هایی", mean: "ways" },
    "mum-kin":                 { fa: "ممکن", mean: "possible; perhaps" },
    "khud":                    { fa: "خود", mean: "own; self" },
    "ih-ti-yaaj":              { fa: "احتیاج", mean: "need" },
    "di-had":                  { fa: "دهد", mean: "give" },
    "ma-sa-lan":               { fa: "مثلاً", mean: "for example" },
    "may-ta-waa-nand":         { fa: "می‌توانند", mean: "can" },
    "gha-zaa":                 { fa: "غذا", mean: "food" },
    "li-baas":                 { fa: "لباس", mean: "clothes" },
    "mod":                     { fa: "مود", mean: "fashion" },
    "fi-shin":                 { fa: "فیشن", mean: "fashion" },
    "mih-maan-daa-ree":        { fa: "مهمانداری", mean: "entertaining guests, hospitality" },
    "mi-yaa-na-ra-wee":        { fa: "میانه‌روی", mean: "moderation" },
    "ku-nand":                 { fa: "کنند", mean: "they do" },
    "doo-ray":                 { fa: "دوری", mean: "far (door + -ay, a: “a far …”)" },
    "ri-qaa-bat-haa-yi":       { fa: "رقابت‌های", mean: "competitions" },
    "naa-saa-lim":             { fa: "ناسالم", mean: "unhealthy" },
    "po-lee":                  { fa: "پولی", mean: "financial, monetary" },
    "na-maa-yish":             { fa: "نمایش", mean: "display, show" },
    "mih-maan-daa-ree-haa-yi": { fa: "مهمانداری‌های", mean: "acts of hospitality" },
    "bee-lu-zoom":             { fa: "بی‌لزوم", mean: "unnecessary" },
    "am-saal":                 { fa: "امثال", mean: "the like" },
    "een-haa":                 { fa: "این‌ها", mean: "these" },
    "tang-das-tee":            { fa: "تنگدستی", mean: "poverty, hardship" },
    "khaa-had":                { fa: "خواهد", mean: "will" },
    "khaas-tan":               { fa: "خواستن", mean: "to want" },
    "jang":                    { fa: "جنگ", mean: "war" },
    "khu-shoo-nat":            { fa: "خشونت", mean: "violence" },
    "bee-kaa-ree":             { fa: "بیکاری", mean: "unemployment" },
    "sa-far-haa":              { fa: "سفرها", mean: "journeys" },
    "ghay-ri-za-ro-ree":       { fa: "غیرضروری", mean: "unnecessary" },
    "zi-yaan-baar":            { fa: "زیانبار", mean: "harmful" },
    "ha-meen-goo-na":          { fa: "همین‌گونه", mean: "likewise, in the same way" },
    "ta-as-sub":               { fa: "تعصب", mean: "prejudice" },
    "ji-law-gee-ree":          { fa: "جلوگیری", mean: "prevention, stopping" },
    "aa-zaa-dee":              { fa: "آزادی", mean: "freedom" },
    "nis-waan":                { fa: "نسوان", mean: "women" },
    "haq":                     { fa: "حق", mean: "right" },
    "bar-khay":                { fa: "برخی", mean: "some" },
    "khu-soos":                { fa: "خصوص", mean: "especially, respect" },
    "za-naan":                 { fa: "زنان", mean: "women" },
    "dukh-ta-raan":            { fa: "دختران", mean: "girls, daughters" },
    "ja-waan":                 { fa: "جوان", mean: "young" },
    "a-waa-mil":               { fa: "عوامل", mean: "causes, factors" },
    "bad-bakh-tee":            { fa: "بدبختی", mean: "misery" },
    "zee-raa":                 { fa: "زیرا", mean: "because" },
    "ta-daad":                 { fa: "تعداد", mean: "number" },
    "aa-naa-nay":              { fa: "آنانی", mean: "those (who)" },
    "may-ku-nand":             { fa: "می‌کنند", mean: "they do" },
    "baysh-tar":               { fa: "بیشتر", mean: "more" },
    "ka-saa-nay":              { fa: "کسانی", mean: "people (who)" },
    "may-ku-nad":              { fa: "می‌کند", mean: "does, makes" },
    "kaar-ku-naan":            { fa: "کارکنان", mean: "workers" },
    "mas-raf-ku-nan-da-gaan":  { fa: "مصرف‌کننده‌گان", mean: "users, consumers" },
    "za-eef":                  { fa: "ضعیف", mean: "weak" },
    "may-saa-zad":             { fa: "می‌سازد", mean: "makes" },
    "ham-chu-neen":            { fa: "همچنین", mean: "also, likewise" },
    "fa-raa-mosh":             { fa: "فراموش", mean: "forgotten" },
    "na-sha-wad":              { fa: "نشود", mean: "does not become, may not" },
    "tam-ba-lee":              { fa: "تنبلی", mean: "laziness" },
    "e-ti-maad":               { fa: "اعتماد", mean: "trust" },
    "maghz":                   { fa: "مغز", mean: "brain, mind" },
    "baa-zo-yi":               { fa: "بازوی", mean: "arm, strength" },
    "tak-ya":                  { fa: "تکیه", mean: "leaning" },
    "im-daad":                 { fa: "امداد", mean: "aid, assistance" },
    "gah-gaah":                { fa: "گهگاه", mean: "sometimes" },
    "khaa-tir":                { fa: "خاطر", mean: "mind, memory" },
    "qat":                     { fa: "قطع", mean: "cutting" },
    "naa-ga-haa-nee":          { fa: "ناگهانی", mean: "sudden" },
    "ji-hat":                  { fa: "جهت", mean: "direction" },
    "ee-jaad":                 { fa: "ایجاد", mean: "creating, setting up" },
    "roo-hee-ya-yi":           { fa: "روحیهٔ", mean: "spirit, morale" },
    "dast-ni-ga-ree":          { fa: "دست‌نگری", mean: "dependence on others" },
    "in-saan":                 { fa: "انسان", mean: "a person, a human being" },
    "baa-is":                  { fa: "باعث", mean: "cause" },
    "may-gar-dad":             { fa: "می‌گردد", mean: "becomes, turns" },
    "ta-keed":                 { fa: "تأکید", mean: "emphasis" },
    "maw-joo-di-yat":          { fa: "موجودیت", mean: "existence, presence" },
    "e-tee-yaad":              { fa: "اعتیاد", mean: "addiction" },
    "si-girt":                 { fa: "سگرت", mean: "cigarette" },
    "nas-waar":                { fa: "نسوار", mean: "snuff" },
    "aa-seeb":                 { fa: "آسیب", mean: "harm, injury" },
    "fa-raa-waan":             { fa: "فراوان", mean: "abundant, great" },
    "bee-ta-wa-ju-hee":        { fa: "بی‌توجهی", mean: "neglect" },
    "na-zaa-fat":              { fa: "نظافت", mean: "cleanliness, cleaning" },
    "shu-yoo":                 { fa: "شیوع", mean: "spread" },
    "am-raaz":                 { fa: "امراض", mean: "diseases" },
    "pool":                    { fa: "پول", mean: "money" },
    "za-ro-ree-yaat":          { fa: "ضروریات", mean: "necessities" },
    "ta-daa-wee":              { fa: "تداوی", mean: "treatment" },
    "rang":                    { fa: "رنگ", mean: "color" },
    "zar-dee":                 { fa: "زردی", mean: "yellowness, pallor" },
    "mil-lee":                 { fa: "ملی", mean: "national" },
    "ja-haa-nay":              { fa: "جهانی", mean: "a world" },
    "maa-ya":                  { fa: "مایه", mean: "means, capital" },
    "ha-qaa-rat":              { fa: "حقارت", mean: "humiliation" },
    "shar-min-da-gee":         { fa: "شرمنده‌گی", mean: "shame" },
    "pin-daash-ta":            { fa: "پنداشته", mean: "regarded, considered" },
    "pin-daash-tan":           { fa: "پنداشتن", mean: "to suppose, consider" },
    "ja-waa-mi":               { fa: "جوامع", mean: "societies" },
    "mu-raf-fah":              { fa: "مرفه", mean: "prosperous" },
    "fa-qeer":                 { fa: "فقیر", mean: "poor" },
    "mu-khaa-tab":             { fa: "مخاطب", mean: "addressed" },
    "qa-raar":                 { fa: "قرار", mean: "place, rest" },
    "gee-rad":                 { fa: "گیرد", mean: "take; (with qa-raar) be placed" },
    "sakht":                   { fa: "سخت", mean: "hard, severe" },
    "mu-ta-sir":               { fa: "متأثر", mean: "affected" },
    "shaa-kee":                { fa: "شاکی", mean: "offended, complaining" },
    "shud":                    { fa: "شد", mean: "became; was" },
    "ba-naa-ba-raan":          { fa: "بنابراین", mean: "therefore" },
    "ee-jaab":                 { fa: "ایجاب", mean: "requiring" },
    "may-na-maa-yad":          { fa: "می‌نماید", mean: "does; shows" },
    "maa":                     { fa: "ما", mean: "we" },
    "sat-h":                   { fa: "سطح", mean: "level" },
    "miq-yaas":                { fa: "مقیاس", mean: "scale" },
    "kish-war":                { fa: "کشور", mean: "country" },
    "bad-bakh-tee-haa-st":     { fa: "بدبختی‌هاست", mean: "are misfortunes" },
    "pa-da-rood":              { fa: "پدرود", mean: "farewell" },
    "bi-go-yeem":              { fa: "بگوییم", mean: "let us say" },
    "baa-yad":                 { fa: "باید", mean: "must, should" },
    "mee-raas":                { fa: "میراث", mean: "inheritance" },
    "nan-geen":                { fa: "ننگین", mean: "shameful" },
    "faa-si-la":               { fa: "فاصله", mean: "distance" },
    "bi-gee-reem":             { fa: "بگیریم", mean: "we may take, distance ourselves" },
    "ja-waab":                 { fa: "جواب", mean: "answer" },
    "ro-shan":                 { fa: "روشن", mean: "bright, light" },
    "naa-han-jaa-ree-haa-yi":  { fa: "ناهنجاری‌های", mean: "irregularities, harmful practices" },
    "ta-waan-far-saa-yi":      { fa: "توان‌فرسای", mean: "exhausting, destructive" },
    "ij-ti-naab":              { fa: "اجتناب", mean: "avoidance" },
    "na-mood":                 { fa: "نمود", mean: "showed; did" },
    "gi-leem":                 { fa: "گلیم", mean: "rug" },
    "luq-ma":                  { fa: "لقمه", mean: "bite, morsel" },
    "da-haan":                 { fa: "دهان", mean: "mouth" },
    "ba-raa-bar":              { fa: "برابر", mean: "front (dar ba-raa-bar-i, toward, before); equal" },
    "ku-naym":                 { fa: "کنیم", mean: "we do" },
    "laa-zim":                 { fa: "لازم", mean: "necessary" },
    "rah-ba-ree":              { fa: "رهبری", mean: "leadership, management" },
    "bu-zur-gaan":             { fa: "بزرگان", mean: "great people" },
    "uh-da":                   { fa: "عهده", mean: "charge, responsibility" },
    "har-goo-na":              { fa: "هرگونه", mean: "every kind of" },
    "i-zaa-fa-khar-jee":       { fa: "اضافه‌خرجی", mean: "extra spending" },
    "tab-zeer":                { fa: "تبذیر", mean: "squandering" },
    "ni-haa-yat":              { fa: "نهایت", mean: "end, ultimately" },
    "bee-bar-naa-ma-gee":      { fa: "بی‌برنامه‌گی", mean: "lack of planning" },
    "par-heez":                { fa: "پرهیز", mean: "avoidance" },
    "ghayr":                   { fa: "غیر", mean: "other than, someone else" },
    "shaa-hid":                { fa: "شاهد", mean: "witness" },
    "sa-aa-dat":               { fa: "سعادت", mean: "happiness" },
    "na-khaa-heem":            { fa: "نخواهیم", mean: "we will not" },
    "pa-da-raan":              { fa: "پدران", mean: "fathers, parents" },
    "maa-da-raan":             { fa: "مادران", mean: "mothers, parents" },
    "a-laa-qa-mand":           { fa: "علاقمند", mean: "interested, wishing" },
    "and":                     { fa: "اند", mean: "are; after a word like shu-da, have" },
    "gul":                     { fa: "گل", mean: "Gul; flower" },
    "lab-khand":               { fa: "لبخند", mean: "smile" },
    "la-baan":                 { fa: "لبان", mean: "lips" },
    "far-zan-daan-shaan":      { fa: "فرزندان‌شان", mean: "their children" },
    "na-khush-kad":            { fa: "نخشکد", mean: "may not dry" },
    "khush-kee-dan":           { fa: "خشکیدن", mean: "to dry" },
    "ragh-bat":                { fa: "رغبت", mean: "desire, wish" },
    "qaa-mat":                 { fa: "قامت", mean: "stature" },
    "maa-da-raan-shaan":       { fa: "مادران‌شان", mean: "their mothers" },
    "zayr":                    { fa: "زیر", mean: "under" },
    "baar":                    { fa: "بار", mean: "time, occasion; load" },
    "sang-geen":               { fa: "سنگین", mean: "heavy" },
    "qarz":                    { fa: "قرض", mean: "debt" },
    "kham":                    { fa: "خم", mean: "bent" },
    "ta-aa-dul":               { fa: "تعادل", mean: "balance" },
    "aa-qi-bat-an-de-shee":    { fa: "عاقبت‌اندیشی", mean: "foresight" },
    "u-moor":                  { fa: "امور", mean: "matters" },
    "na-maa-yand":             { fa: "نمایند", mean: "do" }
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
    "say": "as-baa-bi ma-ee-shat",
    "mean": "Means of making a living",
    "words": [
      [
        "اسباب",
        "as-baa-bi",
        "as-baab"
      ],
      [
        "معیشت",
        "ma-ee-shat",
        "ma-ee-shat"
      ]
    ]
  },

  paragraphs: [
    [
      {
        "say": "khaa-na-waa-da, nu-khus-teen wa saa-da-ta-reen saakh-taa-ri ij-ti-maa-ee ast ki ham-aa-nan-di saa-yi-ri waa-hid-haa-yi-yi jaa-mi-a-yi in-saa-nee daa-raa-yi nazm wa qaa-noon ast.",
        "mean": "The family is the first and simplest social structure and, like the other units of human society, has order and rules.",
        "words": [
          [
            "خانواده،",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "نخستین",
            "nu-khus-teen",
            "nu-khus-teen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ساده‌ترین",
            "saa-da-ta-reen",
            "saa-da-ta-reen"
          ],
          [
            "ساختار",
            "saakh-taa-ri",
            "saakh-taar"
          ],
          [
            "اجتماعی",
            "ij-ti-maa-ee",
            "ij-ti-maa-ee"
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
            "همانند",
            "ham-aa-nan-di",
            "ham-aa-nand"
          ],
          [
            "سایر",
            "saa-yi-ri",
            "saa-yir"
          ],
          [
            "واحدهای",
            "waa-hid-haa-yi-yi",
            "waa-hid-haa-yi"
          ],
          [
            "جامعهٔ",
            "jaa-mi-a-yi",
            "jaa-mi-a"
          ],
          [
            "انسانی",
            "in-saa-nee",
            "in-saa-nee"
          ],
          [
            "دارای",
            "daa-raa-yi",
            "daa-raa-yi"
          ],
          [
            "نظم",
            "nazm",
            "nazm"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "قانون",
            "qaa-noon",
            "qaa-noon"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "daash-ta-ni far-hang, akh-laaq, a-da-bee-yaat, mu-naa-si-baat wa iq-ti-saa-di way-zha wa... laa-zi-ma-yi har khaa-na-waa-da ast;",
        "mean": "Every family needs its own culture, ethics, literature, relationships and economy.",
        "words": [
          [
            "داشتن",
            "daash-ta-ni",
            "daash-tan"
          ],
          [
            "فرهنگ،",
            "far-hang",
            "far-hang"
          ],
          [
            "اخلاق،",
            "akh-laaq",
            "akh-laaq"
          ],
          [
            "ادبیات،",
            "a-da-bee-yaat",
            "a-da-bee-yaat"
          ],
          [
            "مناسبات",
            "mu-naa-si-baat",
            "mu-naa-si-baat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اقتصاد",
            "iq-ti-saa-di",
            "iq-ti-saad"
          ],
          [
            "ویژه",
            "way-zha",
            "way-zha"
          ],
          [
            "و...",
            "wa",
            "wa"
          ],
          [
            "لازمهٔ",
            "laa-zi-ma-yi",
            "laa-zi-ma"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ba ba-yaa-ni dee-gar khaa-na-waa-da zan-jee-ra-yee ast az sil-si-la-yi ij-ti-maa-yi yak dih-ka-da, shah-rak, shahr wa yaa ki-sha-ree ki dar yak sar-za-meen zees-ti baa-ha-mee daa-rand",
        "mean": "In other words, the family is a link in the chain of a village, town, city or country whose people live together in one land,",
        "words": [
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "بیان",
            "ba-yaa-ni",
            "ba-yaan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "زنجیره‌یی",
            "zan-jee-ra-yee",
            "zan-jee-ra-yee"
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
            "سلسلهٔ",
            "sil-si-la-yi",
            "sil-si-la"
          ],
          [
            "اجتماع",
            "ij-ti-maa-yi",
            "ij-ti-maa"
          ],
          [
            "یک",
            "yak",
            "yak"
          ],
          [
            "دهکده،",
            "dih-ka-da",
            "dih-ka-da"
          ],
          [
            "شهرک،",
            "shah-rak",
            "shah-rak"
          ],
          [
            "شهر",
            "shahr",
            "shahr"
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
            "کشوری",
            "ki-sha-ree",
            "ki-sha-ree"
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
            "یک",
            "yak",
            "yak"
          ],
          [
            "سرزمین",
            "sar-za-meen",
            "sar-za-meen"
          ],
          [
            "زیست",
            "zees-ti",
            "zeest"
          ],
          [
            "باهمی",
            "baa-ha-mee",
            "baa-ha-mee"
          ],
          [
            "دارند",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "wa har uz-wi aan raa ba naa-mi shahr-wand yaad may-na-maa-yand.",
        "mean": "and each member is called a citizen.",
        "words": [
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
            "عضو",
            "uz-wi",
            "uzw"
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
            "شهروند",
            "shahr-wand",
            "shahr-wand"
          ],
          [
            "یاد",
            "yaad",
            "yaad"
          ],
          [
            "می‌نمایند.",
            "may-na-maa-yand",
            "may-na-maa-yand",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "ta-bee-ee ast ki har shahr-wand yaa khaa-na-waa-da bar chi-go-na-gee-yi ha-yaa-ti shahr-wan-daan wa khaa-na-waa-da-haa-yi-yi dee-gar ta-seer may-gu-zaa-rad;",
        "mean": "Naturally, every citizen or family affects the lives of other citizens and families,",
        "words": [
          [
            "طبیعی",
            "ta-bee-ee",
            "ta-bee-ee"
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
            "هر",
            "har",
            "har"
          ],
          [
            "شهروند",
            "shahr-wand",
            "shahr-wand"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "چگونه‌گی",
            "chi-go-na-gee-yi",
            "chi-go-na-gee"
          ],
          [
            "حیات",
            "ha-yaa-ti",
            "ha-yaat"
          ],
          [
            "شهروندان",
            "shahr-wan-daan",
            "shahr-wan-daan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خانواده‌های",
            "khaa-na-waa-da-haa-yi-yi",
            "khaa-na-waa-da-haa-yi"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "تأثیر",
            "ta-seer",
            "ta-seer"
          ],
          [
            "می‌گذارد؛",
            "may-gu-zaa-rad",
            "may-gu-zaa-rad",
            "gu-zaash-tan"
          ]
        ]
      },
      {
        "say": "am-maa een ta-seer-gu-zaa-ree besh az ha-ma dar ar-sa-yi iq-ti-saad mash-hood ast;",
        "mean": "but this influence is most visible in the economy.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "این",
            "een",
            "een"
          ],
          [
            "تأثیرگذاری",
            "ta-seer-gu-zaa-ree",
            "ta-seer-gu-zaa-ree"
          ],
          [
            "بیش",
            "besh",
            "besh"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "عرصهٔ",
            "ar-sa-yi",
            "ar-sa"
          ],
          [
            "اقتصاد",
            "iq-ti-saad",
            "iq-ti-saad"
          ],
          [
            "مشهود",
            "mash-hood",
            "mash-hood"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "pas ba-raa-yi een ki har khaa-na-waa-da ham dar daa-khil wa ham dar pay-wand baa dee-gar khaa-na-waa-da-haa ta-seer-gu-zaa-ree-yi khoob daash-ta baa-shad, naa-gu-zeer ast ki ba ma-saa-yi-li dakhl wa kharj wa ta-naa-su-bi dar-aa-mad wa mas-ra-fi roo-zaa-na, maa-haa-na wa saa-laa-na-yi khaysh aa-gaa-hee wa ni-zaa-ra-ti kaa-mil daash-ta baa-shad.",
        "mean": "Therefore, for a family to have a good influence both within itself and in its relations with other families, it must fully understand and oversee its income and expenditure and the balance of its daily, monthly and annual earnings and spending.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
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
            "هر",
            "har",
            "har"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "در",
            "dar",
            "dar"
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
            "هم",
            "ham",
            "ham"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "پیوند",
            "pay-wand",
            "pay-wand"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "تأثیرگذاری",
            "ta-seer-gu-zaa-ree-yi",
            "ta-seer-gu-zaa-ree"
          ],
          [
            "خوب",
            "khoob",
            "khoob"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "باشد،",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ],
          [
            "ناگزیر",
            "naa-gu-zeer",
            "naa-gu-zeer"
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
            "مسایل",
            "ma-saa-yi-li",
            "ma-saa-yil"
          ],
          [
            "دخل",
            "dakhl",
            "dakhl"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خرج",
            "kharj",
            "kharj"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تناسب",
            "ta-naa-su-bi",
            "ta-naa-sub"
          ],
          [
            "درآمد",
            "dar-aa-mad",
            "dar-aa-mad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "روزانه،",
            "roo-zaa-na",
            "roo-zaa-na"
          ],
          [
            "ماهانه",
            "maa-haa-na",
            "maa-haa-na"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سالانهٔ",
            "saa-laa-na-yi",
            "saa-laa-na"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "آگاهی",
            "aa-gaa-hee",
            "aa-gaa-hee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نظارت",
            "ni-zaa-ra-ti",
            "ni-zaa-rat"
          ],
          [
            "کامل",
            "kaa-mil",
            "kaa-mil"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
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
        "say": "aan-haa-yee ki ba een mas-a-la bee-ta-wa-juh boo-da-and, juz pa-ray-shaa-nee, faqr wa dar-ba-da-ree haa-si-lee na-daash-ta-and.",
        "mean": "Those who have ignored this matter have gained nothing but distress, poverty and homelessness.",
        "words": [
          [
            "آن‌هایی",
            "aan-haa-yee",
            "aan-haa-yee"
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
            "این",
            "een",
            "een"
          ],
          [
            "مسأله",
            "mas-a-la",
            "mas-a-la"
          ],
          [
            "بی‌توجه",
            "bee-ta-wa-juh",
            "bee-ta-wa-juh"
          ],
          [
            "بوده‌اند،",
            "boo-da-and",
            "boo-da-and",
            "bu-dan"
          ],
          [
            "جز",
            "juz",
            "juz"
          ],
          [
            "پریشانی،",
            "pa-ray-shaa-nee",
            "pa-ray-shaa-nee"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دربدری",
            "dar-ba-da-ree",
            "dar-ba-da-ree"
          ],
          [
            "حاصلی",
            "haa-si-lee",
            "haa-si-lee"
          ],
          [
            "نداشته‌اند.",
            "na-daash-ta-and",
            "na-daash-ta-and",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "taj-ru-ba ni-shaan daa-da ast, khaa-na-waa-da-haa-yee ki dar-aa-ma-di mu-ta-wa-sit wa mas-ra-fi baa-laa daa-rand; waz-shaan ba ma-raa-tib bad-tar az khaa-na-waa-da-haa-yee ast ki aa-yi-di mu-ta-wa-sit wa mas-ra-fi hi-saab shu-da daa-rand.",
        "mean": "Experience shows that families with an average income and high spending are much worse off than families with an average income and carefully calculated spending.",
        "words": [
          [
            "تجربه",
            "taj-ru-ba",
            "taj-ru-ba"
          ],
          [
            "نشان",
            "ni-shaan",
            "ni-shaan"
          ],
          [
            "داده",
            "daa-da",
            "daa-da",
            "daa-dan"
          ],
          [
            "است،",
            "ast",
            "ast"
          ],
          [
            "خانواده‌هایی",
            "khaa-na-waa-da-haa-yee",
            "khaa-na-waa-da-haa-yee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "درآمد",
            "dar-aa-ma-di",
            "dar-aa-mad"
          ],
          [
            "متوسط",
            "mu-ta-wa-sit",
            "mu-ta-wa-sit"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "بالا",
            "baa-laa",
            "baa-laa"
          ],
          [
            "دارند؛",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ],
          [
            "وضع‌شان",
            "waz-shaan",
            "waz-shaan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مراتب",
            "ma-raa-tib",
            "ma-raa-tib"
          ],
          [
            "بدتر",
            "bad-tar",
            "bad-tar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "خانواده‌هایی",
            "khaa-na-waa-da-haa-yee",
            "khaa-na-waa-da-haa-yee"
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
            "عاید",
            "aa-yi-di",
            "aa-yid"
          ],
          [
            "متوسط",
            "mu-ta-wa-sit",
            "mu-ta-wa-sit"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "حساب",
            "hi-saab",
            "hi-saab"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "دارند.",
            "daa-rand",
            "daa-rand",
            "daash-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "az een ki maw-zoo-yi ta-naa-su-bi dar-aa-mad wa mas-ra-fi a-zaa-yi khaa-na-waa-da ha-may-sha wa pay-was-ta ba un-waa-ni yak am-ri fa-raa-geer mat-rah ast;",
        "mean": "Since balancing the income and spending of family members is always a broad concern,",
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
            "که",
            "ki",
            "ki"
          ],
          [
            "موضوع",
            "maw-zoo-yi",
            "maw-zoo"
          ],
          [
            "تناسب",
            "ta-naa-su-bi",
            "ta-naa-sub"
          ],
          [
            "درآمد",
            "dar-aa-mad",
            "dar-aa-mad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "اعضای",
            "a-zaa-yi",
            "a-zaa"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
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
            "یک",
            "yak",
            "yak"
          ],
          [
            "امر",
            "am-ri",
            "amr"
          ],
          [
            "فراگیر",
            "fa-raa-geer",
            "fa-raa-geer"
          ],
          [
            "مطرح",
            "mat-rah",
            "mat-rah"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "bih-tar ast ki dar een maw-rid ba tarh-haa-yi-yi mu-too-ni qa-dee-mi faa-ri-see, az jum-la ba ki-taa-bi ma-roo-fi ka-lee-la wa dim-na-yi bah-raam-shaa-hee ta-waj-juh daash-ta baa-sheem ki dar maw-ri-di kasb, pay-sha, dar-aa-ma-di maal wa nah-wa-yi mas-ra-fi aan chu-neen rosh-nee an-daakh-ta ast:",
        "mean": "it is helpful to consider the discussions in old Persian texts, including the famous Kalila and Dimna of Bahramshah, which explains earning, work, acquiring wealth and how to spend it as follows:",
        "words": [
          [
            "بهتر",
            "bih-tar",
            "bih-tar"
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
            "این",
            "een",
            "een"
          ],
          [
            "مورد",
            "maw-rid",
            "maw-rid"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "طرح‌های",
            "tarh-haa-yi-yi",
            "tarh-haa-yi"
          ],
          [
            "متون",
            "mu-too-ni",
            "mu-toon"
          ],
          [
            "قدیم",
            "qa-dee-mi",
            "qa-deem"
          ],
          [
            "فارسی،",
            "faa-ri-see",
            "faa-ri-see"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جمله",
            "jum-la",
            "jum-la"
          ],
          [
            "به",
            "ba",
            "ba"
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
            "کلیله",
            "ka-lee-la",
            "ka-lee-la"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دمنهٔ",
            "dim-na-yi",
            "dim-na-yi"
          ],
          [
            "بهرامشاهی",
            "bah-raam-shaa-hee",
            "bah-raam-shaa-hee"
          ],
          [
            "توجه",
            "ta-waj-juh",
            "ta-waj-juh"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "باشیم",
            "baa-sheem",
            "baa-sheem",
            "bu-dan"
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
            "مورد",
            "maw-ri-di",
            "maw-rid"
          ],
          [
            "کسب،",
            "kasb",
            "kasb"
          ],
          [
            "پیشه،",
            "pay-sha",
            "pay-sha"
          ],
          [
            "درآمد",
            "dar-aa-ma-di",
            "dar-aa-mad"
          ],
          [
            "مال",
            "maal",
            "maal"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نحوهٔ",
            "nah-wa-yi",
            "nah-wa-yi"
          ],
          [
            "مصرف",
            "mas-ra-fi",
            "mas-raf"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "چنین",
            "chu-neen",
            "chu-neen"
          ],
          [
            "روشنی",
            "rosh-nee",
            "rosh-nee"
          ],
          [
            "انداخته",
            "an-daakh-ta",
            "an-daakh-ta",
            "an-daakh-tan"
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
        "say": "“baa-zar-gaa-nee bood bi-si-yaar maal, wa oo raa far-zan-daan dar ra-see-dand, wa az kasb wa hir-fat e-raaz na-mo-dand, wa das-ti is-raaf ba maa-li pa-dar da-raaz kar-dand.",
        "mean": "“There was a very wealthy merchant whose children came of age, turned away from work and trade, and stretched out the hand of wastefulness toward their father's wealth.",
        "words": [
          [
            "«بازرگانی",
            "baa-zar-gaa-nee",
            "baa-zar-gaa-nee"
          ],
          [
            "بود",
            "bood",
            "bood",
            "bu-dan"
          ],
          [
            "بسیار",
            "bi-si-yaar",
            "bi-si-yaar"
          ],
          [
            "مال،",
            "maal",
            "maal"
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
            "فرزندان",
            "far-zan-daan",
            "far-zan-daan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "رسیدند،",
            "ra-see-dand",
            "ra-see-dand",
            "ra-see-dan"
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
            "کسب",
            "kasb",
            "kasb"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حرفت",
            "hir-fat",
            "hir-fat"
          ],
          [
            "اعراض",
            "e-raaz",
            "e-raaz"
          ],
          [
            "نمودند،",
            "na-mo-dand",
            "na-mo-dand",
            "na-mo-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دست",
            "das-ti",
            "dast"
          ],
          [
            "اسراف",
            "is-raaf",
            "is-raaf"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مال",
            "maa-li",
            "maal"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "دراز",
            "da-raaz",
            "da-raaz"
          ],
          [
            "کردند.",
            "kar-dand",
            "kar-dand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "pa-dar maw-i-zat wa ma-laa-ma-ti ee-shaan waa-jib deed wa dar as-naa-yi-yi aan guft: ay far-zan-daan! ah-li dun-yaa jo-yaa-ni sih rut-ba-tand wa bi-daan na-ra-sand ma-gar ba chi-haar khas-lat;",
        "mean": "The father considered it necessary to advise and rebuke them and said in the course of it: ‘Children! Those who seek worldly success seek three ranks, which cannot be reached except through four qualities.",
        "words": [
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "موعظت",
            "maw-i-zat",
            "maw-i-zat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ملامتِ",
            "ma-laa-ma-ti",
            "ma-laa-ma-ti"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "واجب",
            "waa-jib",
            "waa-jib"
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
            "در",
            "dar",
            "dar"
          ],
          [
            "اثنای",
            "as-naa-yi-yi",
            "as-naa-yi"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "گفت:",
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
            "فرزندان!",
            "far-zan-daan",
            "far-zan-daan"
          ],
          [
            "اهل",
            "ah-li",
            "ahl"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
          ],
          [
            "جویان",
            "jo-yaa-ni",
            "jo-yaan"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "رتبتند",
            "rut-ba-tand",
            "rut-ba-tand"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بدان",
            "bi-daan",
            "bi-daan",
            "daa-nis-tan"
          ],
          [
            "نرسند",
            "na-ra-sand",
            "na-ra-sand",
            "ra-see-dan"
          ],
          [
            "مگر",
            "ma-gar",
            "ma-gar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "چهار",
            "chi-haar",
            "chi-haar"
          ],
          [
            "خصلت؛",
            "khas-lat",
            "khas-lat"
          ]
        ]
      },
      {
        "say": "am-maa aan sih ki taa-li-band fa-raa-khee-yi ma-ee-shat wa rif-a-ti man-zi-lat wa ra-see-dan ba sa-waa-bi aa-khi-rat ast.",
        "mean": "The three things they seek are ease of livelihood, high standing and the reward of the next world.",
        "words": [
          [
            "اما",
            "am-maa",
            "am-maa"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "سه",
            "sih",
            "sih"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "طالبند",
            "taa-li-band",
            "taa-li-band"
          ],
          [
            "فراخی",
            "fa-raa-khee-yi",
            "fa-raa-khee"
          ],
          [
            "معیشت",
            "ma-ee-shat",
            "ma-ee-shat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رفعت",
            "rif-a-ti",
            "rif-at"
          ],
          [
            "منزلت",
            "man-zi-lat",
            "man-zi-lat"
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
            "ثواب",
            "sa-waa-bi",
            "sa-waab"
          ],
          [
            "آخرت",
            "aa-khi-rat",
            "aa-khi-rat"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "har ki az kasb wa hir-fat e-raaz na-maa-yad nuh as-baa-bi ma-ee-sha-ti khaysh ta-waa-nad saakht wa nuh dee-ga-raan raa dar ta-a-hud ta-waa-nad daasht",
        "mean": "Whoever turns away from earning and a trade can neither provide the means of their own livelihood nor support others.",
        "words": [
          [
            "هر",
            "har",
            "har"
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
            "کسب",
            "kasb",
            "kasb"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حرفت",
            "hir-fat",
            "hir-fat"
          ],
          [
            "اعراض",
            "e-raaz",
            "e-raaz"
          ],
          [
            "نماید",
            "na-maa-yad",
            "na-maa-yad",
            "na-mo-dan"
          ],
          [
            "نه",
            "nuh",
            "nuh"
          ],
          [
            "اسباب",
            "as-baa-bi",
            "as-baab"
          ],
          [
            "معیشت",
            "ma-ee-sha-ti",
            "ma-ee-shat"
          ],
          [
            "خویش",
            "khaysh",
            "khaysh"
          ],
          [
            "تواند",
            "ta-waa-nad",
            "ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "ساخت",
            "saakht",
            "saakht",
            "saakh-tan"
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
            "دیگران",
            "dee-ga-raan",
            "dee-ga-raan"
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
            "تعهد",
            "ta-a-hud",
            "ta-a-hud"
          ],
          [
            "تواند",
            "ta-waa-nad",
            "ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "داشت",
            "daasht",
            "daasht",
            "daash-tan"
          ]
        ]
      },
      {
        "say": "wa a-gar maal ba-dast aa-rad wa dar tas-mee-ri aan ghaf-lat war-zad, zood dar-wesh sha-wad.",
        "mean": "If someone gains wealth but neglects to increase it, they will soon become poor.",
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
            "مال",
            "maal",
            "maal"
          ],
          [
            "به‌دست",
            "ba-dast",
            "ba-dast"
          ],
          [
            "آرد",
            "aa-rad",
            "aa-rad",
            "aa-war-dan"
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
            "تثمیر",
            "tas-mee-ri",
            "tas-meer"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "غفلت",
            "ghaf-lat",
            "ghaf-lat"
          ],
          [
            "ورزد،",
            "war-zad",
            "war-zad",
            "war-zee-dan"
          ],
          [
            "زود",
            "zood",
            "zood"
          ],
          [
            "درویش",
            "dar-wesh",
            "dar-wesh"
          ],
          [
            "شود.",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maal raa har ka-say ba dast aa-rad",
        "mean": "Anyone can acquire wealth;",
        "words": [
          [
            "مال",
            "maal",
            "maal"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "کسی",
            "ka-say",
            "ka-say"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "دست",
            "dast",
            "dast"
          ],
          [
            "آرد",
            "aa-rad",
            "aa-rad",
            "aa-war-dan"
          ]
        ]
      },
      {
        "say": "ran-jash an-dar ni-gaah daash-tan ast",
        "mean": "the difficulty lies in preserving it.",
        "words": [
          [
            "رنجش",
            "ran-jash",
            "ran-jash"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "نگاه",
            "ni-gaah",
            "ni-gaah"
          ],
          [
            "داشتن",
            "daash-tan",
            "daash-tan"
          ],
          [
            "است",
            "ast",
            "ast"
          ]
        ]
      }
    ],
    [
      {
        "say": "chu-naan-ki khar-ji sur-ma a-gar chi an-dak an-dak it-ti-faaq uf-tad; aa-khir fa-naa pa-zee-rad.",
        "mean": "Just as kohl is gradually used up when a little is spent at a time, wealth too will eventually disappear.",
        "words": [
          [
            "چنان‌که",
            "chu-naan-ki",
            "chu-naan-ki"
          ],
          [
            "خرج",
            "khar-ji",
            "kharj"
          ],
          [
            "سرمه",
            "sur-ma",
            "sur-ma"
          ],
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "اندک",
            "an-dak",
            "an-dak"
          ],
          [
            "اندک",
            "an-dak",
            "an-dak"
          ],
          [
            "اتفاق",
            "it-ti-faaq",
            "it-ti-faaq"
          ],
          [
            "افتد؛",
            "uf-tad",
            "uf-tad",
            "uf-taa-dan"
          ],
          [
            "آخر",
            "aa-khir",
            "aa-khir"
          ],
          [
            "فنا",
            "fa-naa",
            "fa-naa"
          ],
          [
            "پذیرد.",
            "pa-zee-rad",
            "pa-zee-rad",
            "pa-zee-ruf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "cho bar gee-ree az koh wa na-ni-hee ba-jaa-yi",
        "mean": "If you take from a mountain and put nothing back,",
        "words": [
          [
            "چو",
            "cho",
            "cho"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "گیری",
            "gee-ree",
            "gee-ree",
            "gi-rif-tan"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "کوه",
            "koh",
            "koh"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "ننهی",
            "na-ni-hee",
            "na-ni-hee",
            "ni-haa-dan"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ]
        ]
      },
      {
        "say": "sar-an-jaam koh an-dar aa-yad za paa-yi",
        "mean": "in the end even the mountain will be brought down.",
        "words": [
          [
            "سرانجام",
            "sar-an-jaam",
            "sar-an-jaam"
          ],
          [
            "کوه",
            "koh",
            "koh"
          ],
          [
            "اندر",
            "an-dar",
            "an-dar"
          ],
          [
            "آید",
            "aa-yad",
            "aa-yad",
            "aa-ma-dan"
          ],
          [
            "ز",
            "za",
            "za"
          ],
          [
            "پای",
            "paa-yi",
            "paa"
          ]
        ]
      }
    ],
    [
      {
        "say": "wa a-gar dar hifz wa tas-meer jid na-na-maa-yad wa khar-ji aan bee-wajh ku-nad; pa-shay-maa-nee aa-rad wa zu-baa-ni ta'n dar way gu-shaa-da sha-wad",
        "mean": "If a person makes no serious effort to preserve and increase wealth and spends it without reason, regret follows and people speak reproachfully of them.",
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
            "در",
            "dar",
            "dar"
          ],
          [
            "حفظ",
            "hifz",
            "hifz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تثمیر",
            "tas-meer",
            "tas-meer"
          ],
          [
            "جد",
            "jid",
            "jid"
          ],
          [
            "ننماید",
            "na-na-maa-yad",
            "na-na-maa-yad",
            "na-mo-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خرج",
            "khar-ji",
            "kharj"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "بی‌وجه",
            "bee-wajh",
            "bee-wajh"
          ],
          [
            "کند؛",
            "ku-nad",
            "ku-nad",
            "kar-dan"
          ],
          [
            "پشیمانی",
            "pa-shay-maa-nee",
            "pa-shay-maa-nee"
          ],
          [
            "آرد",
            "aa-rad",
            "aa-rad",
            "aa-war-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "زبان",
            "zu-baa-ni",
            "zu-baan"
          ],
          [
            "طعن",
            "ta'n",
            "ta'n"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "وی",
            "way",
            "way"
          ],
          [
            "گشاده",
            "gu-shaa-da",
            "gu-shaa-da"
          ],
          [
            "شود",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "wa a-gar ma-waa-zi-yi hu-qooq ba im-saak, naa-mar-ee daa-rad ba man-zi-la-ti dar-way-shee baa-shad az laz-zaa-ti dun-yaa mah-room",
        "mean": "But if a person withholds what is rightfully due and fails to observe those obligations, they are like a pauper, deprived of life's pleasures.",
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
            "مواضع",
            "ma-waa-zi-yi",
            "ma-waa-zi"
          ],
          [
            "حقوق",
            "hu-qooq",
            "hu-qooq"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "امساک،",
            "im-saak",
            "im-saak"
          ],
          [
            "نامرعی",
            "naa-mar-ee",
            "naa-mar-ee"
          ],
          [
            "دارد",
            "daa-rad",
            "daa-rad",
            "daash-tan"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "منزلت",
            "man-zi-la-ti",
            "man-zi-lat"
          ],
          [
            "درویشی",
            "dar-way-shee",
            "dar-way-shee"
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
            "لذات",
            "laz-zaa-ti",
            "laz-zaat"
          ],
          [
            "دنیا",
            "dun-yaa",
            "dun-yaa"
          ],
          [
            "محروم",
            "mah-room",
            "mah-room"
          ]
        ]
      },
      {
        "say": "wa baa een ha-ma, ma-qaa-dee-ri aa-si-maa-nee wa ha-waa-di-si rooz-gaar aan raa dar ma're-zi taf-ri-qa aa-rad;",
        "mean": "Even then, heavenly decrees and the accidents of life may expose the wealth to dispersal.",
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
            "این",
            "een",
            "een"
          ],
          [
            "همه،",
            "ha-ma",
            "ha-ma"
          ],
          [
            "مقادیر",
            "ma-qaa-dee-ri",
            "ma-qaa-deer"
          ],
          [
            "آسمانی",
            "aa-si-maa-nee",
            "aa-si-maa-nee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "حوادث",
            "ha-waa-di-si",
            "ha-waa-dis"
          ],
          [
            "روزگار",
            "rooz-gaar",
            "rooz-gaar"
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
            "معرض",
            "ma're-zi",
            "ma'rez"
          ],
          [
            "تفرقه",
            "taf-ri-qa",
            "taf-ri-qa"
          ],
          [
            "آرد؛",
            "aa-rad",
            "aa-rad",
            "aa-war-dan"
          ]
        ]
      },
      {
        "say": "choon haw-zee ki pay-was-ta aab dar way may-aa-yad wa aan raa bar an-daa-za-yi mad-khal, makh-ra-jee na-baa-shad, laa-ja-ram az ja-waa-nib raah jo-yad wa bi-ta-raa-bad taa rakh-na-yi bu-zurg uf-tad wa ta-maa-mee-yi aan naa-cheez gar-dad;",
        "mean": "It is like a pool into which water continually flows but which has no outlet proportionate to its inlet: the water must seek a way out at the sides and overflow until a large breach opens and all of it is lost.",
        "words": [
          [
            "چون",
            "choon",
            "choon"
          ],
          [
            "حوضی",
            "haw-zee",
            "haw-zee"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "پیوسته",
            "pay-was-ta",
            "pay-was-ta"
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
            "وی",
            "way",
            "way"
          ],
          [
            "می‌آید",
            "may-aa-yad",
            "may-aa-yad",
            "aa-ma-dan"
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
            "را",
            "raa",
            "raa"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "اندازهٔ",
            "an-daa-za-yi",
            "an-daa-za-yi"
          ],
          [
            "مدخل،",
            "mad-khal",
            "mad-khal"
          ],
          [
            "مخرجی",
            "makh-ra-jee",
            "makh-ra-jee"
          ],
          [
            "نباشد،",
            "na-baa-shad",
            "na-baa-shad",
            "bu-dan"
          ],
          [
            "لاجرم",
            "laa-ja-ram",
            "laa-ja-ram"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "جوانب",
            "ja-waa-nib",
            "ja-waa-nib"
          ],
          [
            "راه",
            "raah",
            "raah"
          ],
          [
            "جوید",
            "jo-yad",
            "jo-yad",
            "jus-tan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بترابد",
            "bi-ta-raa-bad",
            "bi-ta-raa-bad",
            "ta-raa-bee-dan"
          ],
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "رخنهٔ",
            "rakh-na-yi",
            "rakh-na-yi"
          ],
          [
            "بزرگ",
            "bu-zurg",
            "bu-zurg"
          ],
          [
            "افتد",
            "uf-tad",
            "uf-tad",
            "uf-taa-dan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تمامی",
            "ta-maa-mee-yi",
            "ta-maa-mee"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "ناچیز",
            "naa-cheez",
            "naa-cheez"
          ],
          [
            "گردد؛",
            "gar-dad",
            "gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "pas aan far-zan-daan pan-di pa-dar wa maw-i-za-ti oo har chi nayk-tar bi-shi-no-dand wa ma-naa-fi-yi aan ba ghaa-yat bi-shi-naakh-tand",
        "mean": "The children listened as well as they could to their father's counsel and fully understood its benefits,",
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
            "فرزندان",
            "far-zan-daan",
            "far-zan-daan"
          ],
          [
            "پند",
            "pan-di",
            "pand"
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
            "موعظت",
            "maw-i-za-ti",
            "maw-i-zat"
          ],
          [
            "او",
            "oo",
            "oo"
          ],
          [
            "هر",
            "har",
            "har"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "نیکوتر",
            "nayk-tar",
            "nayk-tar"
          ],
          [
            "بشنودند",
            "bi-shi-no-dand",
            "bi-shi-no-dand",
            "shi-nee-dan"
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
            "غایت",
            "ghaa-yat",
            "ghaa-yat"
          ],
          [
            "بشناختند",
            "bi-shi-naakh-tand",
            "bi-shi-naakh-tand",
            "shi-naakh-tan"
          ]
        ]
      },
      {
        "say": "wa bi-raa-da-ri mih-ta-ri ee-shaan roy ba ti-jaa-rat aa-war-da sa-fa-ree-yi door-dast ikh-ti-yaar kard....”",
        "mean": "and their elder brother turned to trade and chose a distant journey.”",
        "words": [
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "برادر",
            "bi-raa-da-ri",
            "bi-raa-dar"
          ],
          [
            "مهتر",
            "mih-ta-ri",
            "mih-tar"
          ],
          [
            "ایشان",
            "ee-shaan",
            "ee-shaan"
          ],
          [
            "روی",
            "roy",
            "roy"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "تجارت",
            "ti-jaa-rat",
            "ti-jaa-rat"
          ],
          [
            "آورده",
            "aa-war-da",
            "aa-war-da",
            "aa-war-dan"
          ],
          [
            "سفری",
            "sa-fa-ree-yi",
            "sa-fa-ree"
          ],
          [
            "دوردست",
            "door-dast",
            "door-dast"
          ],
          [
            "اختیار",
            "ikh-ti-yaar",
            "ikh-ti-yaar"
          ],
          [
            "کرد....»",
            "kard",
            "kard",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "maf-ho-mee ki az mat-ni baa-laa haa-sil may-sha-wad; een ast ki dar ki-naa-ri ur-za-yi kaar wa ak-zi hu-qooq wa ma-aash, daash-ta-ni bar-naa-ma wa tan-zeem wa ikh-ti-saa-si aa-yid ba ma-jaa-ree-yi mas-raf, az mu-him-ta-reen raah-kaar-haa-yee ast ki yak khaa-na-waa-da-yi daa-raa-yi-yi dar-aa-ma-di paa-yeen raa az tu-hee-das-tee wa faqr na-jaat may-di-had.",
        "mean": "The lesson of the passage is that alongside offering one's labor and receiving wages and salary, planning, organization and allocating income to its proper channels of spending are among the most important ways to save a low-income family from destitution and poverty.",
        "words": [
          [
            "مفهومی",
            "maf-ho-mee",
            "maf-ho-mee"
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
            "متن",
            "mat-ni",
            "matn"
          ],
          [
            "بالا",
            "baa-laa",
            "baa-laa"
          ],
          [
            "حاصل",
            "haa-sil",
            "haa-sil"
          ],
          [
            "می‌شود؛",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
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
            "عرضهٔ",
            "ur-za-yi",
            "ur-za-yi"
          ],
          [
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اخذ",
            "ak-zi",
            "akz"
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
            "معاش،",
            "ma-aash",
            "ma-aash"
          ],
          [
            "داشتن",
            "daash-ta-ni",
            "daash-tan"
          ],
          [
            "برنامه",
            "bar-naa-ma",
            "bar-naa-ma"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تنظیم",
            "tan-zeem",
            "tan-zeem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اختصاص",
            "ikh-ti-saa-si",
            "ikh-ti-saas"
          ],
          [
            "عاید",
            "aa-yid",
            "aa-yid"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مجاری",
            "ma-jaa-ree-yi",
            "ma-jaa-ree"
          ],
          [
            "مصرف،",
            "mas-raf",
            "mas-raf"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "مهمترین",
            "mu-him-ta-reen",
            "mu-him-ta-reen"
          ],
          [
            "راهکارهایی",
            "raah-kaar-haa-yee",
            "raah-kaar-haa-yee"
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
            "یک",
            "yak",
            "yak"
          ],
          [
            "خانوادهٔ",
            "khaa-na-waa-da-yi",
            "khaa-na-waa-da"
          ],
          [
            "دارای",
            "daa-raa-yi-yi",
            "daa-raa-yi"
          ],
          [
            "درآمد",
            "dar-aa-ma-di",
            "dar-aa-mad"
          ],
          [
            "پایین",
            "paa-yeen",
            "paa-yeen"
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
            "تهی‌دستی",
            "tu-hee-das-tee",
            "tu-hee-das-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "نجات",
            "na-jaat",
            "na-jaat"
          ],
          [
            "می‌دهد.",
            "may-di-had",
            "may-di-had",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "dun-yaa-yi im-roz dar ta-maa-mi za-mee-na-haa besh az ha-ma, dun-yaa-yi bar-naa-ma ast;",
        "mean": "Today's world is, above all, a world of planning in every field.",
        "words": [
          [
            "دنیای",
            "dun-yaa-yi",
            "dun-yaa"
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
            "تمام",
            "ta-maa-mi",
            "ta-maam"
          ],
          [
            "زمینه‌ها",
            "za-mee-na-haa",
            "za-mee-na-haa"
          ],
          [
            "بیش",
            "besh",
            "besh"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "همه،",
            "ha-ma",
            "ha-ma"
          ],
          [
            "دنیای",
            "dun-yaa-yi",
            "dun-yaa"
          ],
          [
            "برنامه",
            "bar-naa-ma",
            "bar-naa-ma"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "faq-daa-ni bar-naa-ma wa a-da-mi ri-aa-ya-ti ta-naa-sub, mo-ji-bi su-qoo-ti bu-zurg-ta-reen wa ko-chak-ta-reen saakh-taar-haa-yi-yi in-saa-nee ast.",
        "mean": "A lack of planning and failure to maintain balance cause the collapse of the greatest and smallest human structures.",
        "words": [
          [
            "فقدان",
            "faq-daa-ni",
            "faq-daan"
          ],
          [
            "برنامه",
            "bar-naa-ma",
            "bar-naa-ma"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عدم",
            "a-da-mi",
            "a-dam"
          ],
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "تناسب،",
            "ta-naa-sub",
            "ta-naa-sub"
          ],
          [
            "موجب",
            "mo-ji-bi",
            "mo-jib"
          ],
          [
            "سقوط",
            "su-qoo-ti",
            "su-qoot"
          ],
          [
            "بزرگترین",
            "bu-zurg-ta-reen",
            "bu-zurg-ta-reen"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "کوچکترین",
            "ko-chak-ta-reen",
            "ko-chak-ta-reen"
          ],
          [
            "ساختارهای",
            "saakh-taar-haa-yi-yi",
            "saakh-taar-haa-yi"
          ],
          [
            "انسانی",
            "in-saa-nee",
            "in-saa-nee"
          ],
          [
            "است.",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "hat-taa aa-moz-gaa-ree ki bi-doo-ni ri-aa-ya-ti muf-ra-daat wa p-laa-ni dars, ba i-raa-a-yi dars may-par-daa-zad; baa ha-ma-yi bah-ra-wa-ree az daa-nish wa fahm baaz ham na-may-ta-waa-nad ki mu-al-li-mi mu-waf-faq baa-shad;",
        "mean": "Even a teacher who presents a lesson without following the syllabus and lesson plan cannot be successful, despite all their knowledge and understanding.",
        "words": [
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "آموزگاری",
            "aa-moz-gaa-ree",
            "aa-moz-gaa-ree"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "بدون",
            "bi-doo-ni",
            "bi-doon"
          ],
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "مفردات",
            "muf-ra-daat",
            "muf-ra-daat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "پلان",
            "p-laa-ni",
            "p-laan"
          ],
          [
            "درس،",
            "dars",
            "dars"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "ارائهٔ",
            "i-raa-a-yi",
            "i-raa-a"
          ],
          [
            "درس",
            "dars",
            "dars"
          ],
          [
            "می‌پردازد؛",
            "may-par-daa-zad",
            "may-par-daa-zad",
            "par-daakh-tan"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "بهره‌وری",
            "bah-ra-wa-ree",
            "bah-ra-wa-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "دانش",
            "daa-nish",
            "daa-nish"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فهم",
            "fahm",
            "fahm"
          ],
          [
            "باز",
            "baaz",
            "baaz"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "نمی‌تواند",
            "na-may-ta-waa-nad",
            "na-may-ta-waa-nad",
            "ta-waa-nis-tan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "معلم",
            "mu-al-li-mi",
            "mu-al-lim"
          ],
          [
            "موفق",
            "mu-waf-faq",
            "mu-waf-faq"
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
        "say": "pas khaa-na-waa-da-haa neez na-baa-yad mas-a-la-yi ta-naa-su-bi dar-aa-mad wa mas-raf raa az na-zar door daash-ta baa-shand.",
        "mean": "Families, too, must not lose sight of balancing income and spending.",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "نباید",
            "na-baa-yad",
            "na-baa-yad"
          ],
          [
            "مسألهٔ",
            "mas-a-la-yi",
            "mas-a-la-yi"
          ],
          [
            "تناسب",
            "ta-naa-su-bi",
            "ta-naa-sub"
          ],
          [
            "درآمد",
            "dar-aa-mad",
            "dar-aa-mad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف",
            "mas-raf",
            "mas-raf"
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
            "نظر",
            "na-zar",
            "na-zar"
          ],
          [
            "دور",
            "door",
            "door"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "باشند.",
            "baa-shand",
            "baa-shand",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "sir-fa-jo-yee ya-kay az raah-haa-yee ast ki khaa-na-waa-da mum-kin ast baa ri-aa-ya-ti aan khud raa az ih-ti-yaaj na-jaat di-had;",
        "mean": "Saving is one way a family can rescue itself from need.",
        "words": [
          [
            "صرفه‌جویی",
            "sir-fa-jo-yee",
            "sir-fa-jo-yee"
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
            "راه‌هایی",
            "raah-haa-yee",
            "raah-haa-yee"
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
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
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
            "با",
            "baa",
            "baa"
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
            "az"
          ],
          [
            "احتیاج",
            "ih-ti-yaaj",
            "ih-ti-yaaj"
          ],
          [
            "نجات",
            "na-jaat",
            "na-jaat"
          ],
          [
            "دهد؛",
            "di-had",
            "di-had",
            "daa-dan"
          ]
        ]
      },
      {
        "say": "ma-sa-lan a-zaa-yi khaa-na-waa-da may-ta-waa-nand ba-jaa-yi is-raaf dar gha-zaa, li-baas, mod wa fi-shin, mih-maan-daa-ree wa... mi-yaa-na-ra-wee raa ikh-ti-yaar ku-nand.",
        "mean": "For example, family members can choose moderation instead of extravagance in food, clothes, fashion, entertaining guests and other things.",
        "words": [
          [
            "مثلاً",
            "ma-sa-lan",
            "ma-sa-lan"
          ],
          [
            "اعضای",
            "a-zaa-yi",
            "a-zaa"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "می‌توانند",
            "may-ta-waa-nand",
            "may-ta-waa-nand",
            "ta-waa-nis-tan"
          ],
          [
            "به‌جای",
            "ba-jaa-yi",
            "ba-jaa"
          ],
          [
            "اسراف",
            "is-raaf",
            "is-raaf"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غذا،",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "لباس،",
            "li-baas",
            "li-baas"
          ],
          [
            "مود",
            "mod",
            "mod"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فیشن،",
            "fi-shin",
            "fi-shin"
          ],
          [
            "مهمانداری",
            "mih-maan-daa-ree",
            "mih-maan-daa-ree"
          ],
          [
            "و...",
            "wa",
            "wa"
          ],
          [
            "میانه‌روی",
            "mi-yaa-na-ra-wee",
            "mi-yaa-na-ra-wee"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "اختیار",
            "ikh-ti-yaar",
            "ikh-ti-yaar"
          ],
          [
            "کنند.",
            "ku-nand",
            "ku-nand",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "doo-ray az ri-qaa-bat-haa-yi-yi naa-saa-li-mi po-lee wa na-maa-yish, mih-maan-daa-ree-haa-yi-yi bee-lu-zoom wa am-saa-li een-haa neez as-baa-bi na-jaa-ti khaa-na-waa-da-haa az faqr wa tang-das-tee khaa-had bood.",
        "mean": "Avoiding unhealthy financial competition and display, unnecessary hospitality and similar practices will also help save families from poverty and hardship.",
        "words": [
          [
            "دوری",
            "doo-ray",
            "doo-ray"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "رقابت‌های",
            "ri-qaa-bat-haa-yi-yi",
            "ri-qaa-bat-haa-yi"
          ],
          [
            "ناسالم",
            "naa-saa-li-mi",
            "naa-saa-lim"
          ],
          [
            "پولی",
            "po-lee",
            "po-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نمایش،",
            "na-maa-yish",
            "na-maa-yish"
          ],
          [
            "مهمانداری‌های",
            "mih-maan-daa-ree-haa-yi-yi",
            "mih-maan-daa-ree-haa-yi"
          ],
          [
            "بی‌لزوم",
            "bee-lu-zoom",
            "bee-lu-zoom"
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
            "این‌ها",
            "een-haa",
            "een-haa"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "اسباب",
            "as-baa-bi",
            "as-baab"
          ],
          [
            "نجات",
            "na-jaa-ti",
            "na-jaat"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تنگدستی",
            "tang-das-tee",
            "tang-das-tee"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
          ],
          [
            "بود.",
            "bood",
            "bood",
            "bu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "jang wa khu-shoo-nat ham dar ki-naa-ri bee-kaa-ree wa sa-far-haa-yi ghay-ri-za-ro-ree ba-raa-yi iq-ti-saa-di khaa-na-waa-da zi-yaan-baar ast;",
        "mean": "War and violence, together with unemployment and unnecessary travel, also damage a family's economy.",
        "words": [
          [
            "جنگ",
            "jang",
            "jang"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "خشونت",
            "khu-shoo-nat",
            "khu-shoo-nat"
          ],
          [
            "هم",
            "ham",
            "ham"
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
            "بیکاری",
            "bee-kaa-ree",
            "bee-kaa-ree"
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
            "غیرضروری",
            "ghay-ri-za-ro-ree",
            "ghay-ri-za-ro-ree"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "اقتصاد",
            "iq-ti-saa-di",
            "iq-ti-saad"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "زیانبار",
            "zi-yaan-baar",
            "zi-yaan-baar"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "ha-meen-goo-na ta-as-sub wa ji-law-gee-ree az aa-zaa-dee-yi nis-waan wa gi-rif-ta-ni ha-qi kaa-ri bar-khay az a-zaa-yi khaa-na-waa-da ba khu-soos za-naan wa dukh-ta-raa-ni ja-waan ya-kay dee-gar az a-waa-mi-li faqr wa bad-bakh-tee-yi khaa-na-waa-da ast;",
        "mean": "Likewise, prejudice, restricting women's freedom, and denying some family members - especially women and young girls - the right to work are other causes of family poverty and misery.",
        "words": [
          [
            "همین‌گونه",
            "ha-meen-goo-na",
            "ha-meen-goo-na"
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
            "جلوگیری",
            "ji-law-gee-ree",
            "ji-law-gee-ree"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "آزادی",
            "aa-zaa-dee-yi",
            "aa-zaa-dee"
          ],
          [
            "نسوان",
            "nis-waan",
            "nis-waan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "گرفتن",
            "gi-rif-ta-ni",
            "gi-rif-tan"
          ],
          [
            "حق",
            "ha-qi",
            "haq"
          ],
          [
            "کار",
            "kaa-ri",
            "kaar"
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
            "اعضای",
            "a-zaa-yi",
            "a-zaa"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خصوص",
            "khu-soos",
            "khu-soos"
          ],
          [
            "زنان",
            "za-naan",
            "za-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "دختران",
            "dukh-ta-raa-ni",
            "dukh-ta-raan"
          ],
          [
            "جوان",
            "ja-waan",
            "ja-waan"
          ],
          [
            "یکی",
            "ya-kay",
            "ya-kay"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "عوامل",
            "a-waa-mi-li",
            "a-waa-mil"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بدبختی",
            "bad-bakh-tee-yi",
            "bad-bakh-tee"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "zee-raa ta-daa-di aa-naa-nay ki kaar may-na-maa-yand an-dak, wa ta-daa-di aa-naa-nay ki mas-raf may-ku-nand, baysh-tar az ka-saa-nay ast ki kaar may-ku-nad",
        "mean": "because the number of those who work is small while the number who consume is greater,",
        "words": [
          [
            "زیرا",
            "zee-raa",
            "zee-raa"
          ],
          [
            "تعداد",
            "ta-daa-di",
            "ta-daad"
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
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "می‌نمایند",
            "may-na-maa-yand",
            "may-na-maa-yand",
            "na-mo-dan"
          ],
          [
            "اندک،",
            "an-dak",
            "an-dak"
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
            "مصرف",
            "mas-raf",
            "mas-raf"
          ],
          [
            "می‌کنند،",
            "may-ku-nand",
            "may-ku-nand",
            "kar-dan"
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
            "کسانی",
            "ka-saa-nay",
            "ka-saa-nay"
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
            "کار",
            "kaar",
            "kaar"
          ],
          [
            "می‌کند",
            "may-ku-nad",
            "may-ku-nad",
            "kar-dan"
          ]
        ]
      },
      {
        "say": "wa een a-da-mi ta-naa-su-bi kaar-ku-naan wa mas-raf-ku-nan-da-gaan, iq-ti-saa-di khaa-na-waa-da raa za-eef may-saa-zad;",
        "mean": "and this imbalance between workers and consumers weakens the family economy.",
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
            "عدم",
            "a-da-mi",
            "a-dam"
          ],
          [
            "تناسب",
            "ta-naa-su-bi",
            "ta-naa-sub"
          ],
          [
            "کارکنان",
            "kaar-ku-naan",
            "kaar-ku-naan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف‌کننده‌گان،",
            "mas-raf-ku-nan-da-gaan",
            "mas-raf-ku-nan-da-gaan"
          ],
          [
            "اقتصاد",
            "iq-ti-saa-di",
            "iq-ti-saad"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "ضعیف",
            "za-eef",
            "za-eef"
          ],
          [
            "می‌سازد؛",
            "may-saa-zad",
            "may-saa-zad",
            "saakh-tan"
          ]
        ]
      },
      {
        "say": "ham-chu-neen fa-raa-mosh na-sha-wad ki ghaf-lat wa tam-ba-lee wa a-da-mi e-ti-maad ba maghz wa baa-zo-yi-yi khud wa tak-ya ba im-daa-di dee-ga-raan, gah-gaah ba khaa-ti-ri qa-ti naa-ga-haa-nee yaa ba ji-ha-ti ee-jaa-di roo-hee-ya-yi dast-ni-ga-ree-yi aan dar in-saan, baa-i-si faqr wa tang-das-tee-yi khaa-na-waa-da-haa may-gar-dad.",
        "mean": "It should also not be forgotten that carelessness, laziness, lack of trust in one's own mind and strength, and dependence on help from others sometimes cause family poverty, whether because the help suddenly stops or because it creates a spirit of dependence.",
        "words": [
          [
            "همچنین",
            "ham-chu-neen",
            "ham-chu-neen"
          ],
          [
            "فراموش",
            "fa-raa-mosh",
            "fa-raa-mosh"
          ],
          [
            "نشود",
            "na-sha-wad",
            "na-sha-wad",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "غفلت",
            "ghaf-lat",
            "ghaf-lat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تنبلی",
            "tam-ba-lee",
            "tam-ba-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عدم",
            "a-da-mi",
            "a-dam"
          ],
          [
            "اعتماد",
            "e-ti-maad",
            "e-ti-maad"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "مغز",
            "maghz",
            "maghz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "بازوی",
            "baa-zo-yi-yi",
            "baa-zo-yi"
          ],
          [
            "خود",
            "khud",
            "khud"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تکیه",
            "tak-ya",
            "tak-ya"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "امداد",
            "im-daa-di",
            "im-daad"
          ],
          [
            "دیگران،",
            "dee-ga-raan",
            "dee-ga-raan"
          ],
          [
            "گهگاه",
            "gah-gaah",
            "gah-gaah"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خاطر",
            "khaa-ti-ri",
            "khaa-tir"
          ],
          [
            "قطع",
            "qa-ti",
            "qat"
          ],
          [
            "ناگهانی",
            "naa-ga-haa-nee",
            "naa-ga-haa-nee"
          ],
          [
            "یا",
            "yaa",
            "yaa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "جهت",
            "ji-ha-ti",
            "ji-hat"
          ],
          [
            "ایجاد",
            "ee-jaa-di",
            "ee-jaad"
          ],
          [
            "روحیهٔ",
            "roo-hee-ya-yi",
            "roo-hee-ya-yi"
          ],
          [
            "دست‌نگری",
            "dast-ni-ga-ree-yi",
            "dast-ni-ga-ree"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "انسان،",
            "in-saan",
            "in-saan"
          ],
          [
            "باعث",
            "baa-i-si",
            "baa-is"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "تنگدستی",
            "tang-das-tee-yi",
            "tang-das-tee"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "می‌گردد.",
            "may-gar-dad",
            "may-gar-dad",
            "gar-dee-dan"
          ]
        ]
      },
      {
        "say": "ta-keed may-sha-wad ki maw-joo-di-ya-ti e-tee-yaad hat-taa ba si-girt wa nas-waar ham ba-raa-yi iq-ti-saa-di khaa-na-waa-da aa-see-bi fa-raa-waan daa-rad.",
        "mean": "It must be stressed that the presence of addiction, even to cigarettes and snuff, greatly harms the family economy.",
        "words": [
          [
            "تأکید",
            "ta-keed",
            "ta-keed"
          ],
          [
            "می‌شود",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "موجودیت",
            "maw-joo-di-ya-ti",
            "maw-joo-di-yat"
          ],
          [
            "اعتیاد",
            "e-tee-yaad",
            "e-tee-yaad"
          ],
          [
            "حتا",
            "hat-taa",
            "hat-taa"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "سگرت",
            "si-girt",
            "si-girt"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "نسوار",
            "nas-waar",
            "nas-waar"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "اقتصاد",
            "iq-ti-saa-di",
            "iq-ti-saad"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "آسیب",
            "aa-see-bi",
            "aa-seeb"
          ],
          [
            "فراوان",
            "fa-raa-waan",
            "fa-raa-waan"
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
        "say": "bee-ta-wa-ju-hee ba na-zaa-fat neez mo-ji-bi shu-yoo-yi am-raaz wa ikh-ti-saa-si naa-ga-haa-nee-yi pool gha-zaa, li-baas wa saa-yi-ri za-ro-ree-yaat ba-raa-yi ta-daa-wee, as-baa-bi tang-das-tee wa rang zar-dee-yi a-zaa-yi khaa-na-waa-da may-sha-wad.",
        "mean": "Neglecting cleanliness also spreads disease and forces money intended for food, clothing and other necessities to be suddenly spent on treatment, causing poverty and making family members pale and sickly.",
        "words": [
          [
            "بی‌توجهی",
            "bee-ta-wa-ju-hee",
            "bee-ta-wa-ju-hee"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "نظافت",
            "na-zaa-fat",
            "na-zaa-fat"
          ],
          [
            "نیز",
            "neez",
            "neez"
          ],
          [
            "موجب",
            "mo-ji-bi",
            "mo-jib"
          ],
          [
            "شیوع",
            "shu-yoo-yi",
            "shu-yoo"
          ],
          [
            "امراض",
            "am-raaz",
            "am-raaz"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "اختصاص",
            "ikh-ti-saa-si",
            "ikh-ti-saas"
          ],
          [
            "ناگهانی",
            "naa-ga-haa-nee-yi",
            "naa-ga-haa-nee"
          ],
          [
            "پولِ",
            "pool",
            "pool"
          ],
          [
            "غذا،",
            "gha-zaa",
            "gha-zaa"
          ],
          [
            "لباس",
            "li-baas",
            "li-baas"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "سایر",
            "saa-yi-ri",
            "saa-yir"
          ],
          [
            "ضروریات",
            "za-ro-ree-yaat",
            "za-ro-ree-yaat"
          ],
          [
            "برای",
            "ba-raa-yi",
            "ba-raa-yi"
          ],
          [
            "تداوی،",
            "ta-daa-wee",
            "ta-daa-wee"
          ],
          [
            "اسباب",
            "as-baa-bi",
            "as-baab"
          ],
          [
            "تنگدستی",
            "tang-das-tee",
            "tang-das-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "رنگ",
            "rang",
            "rang"
          ],
          [
            "زردی",
            "zar-dee-yi",
            "zar-dee"
          ],
          [
            "اعضای",
            "a-zaa-yi",
            "a-zaa"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "می‌شود.",
            "may-sha-wad",
            "may-sha-wad",
            "shu-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "baa ta-waj-juh ba ma-saa-yi-li baa-laa, faqr dar far-han-gi mil-lee wa ja-haa-nay, ha-may-sha maa-ya-yi ha-qaa-rat wa shar-min-da-gee pin-daash-ta shu-da ast;",
        "mean": "In view of the points above, poverty has always been regarded as a cause of humiliation and shame in national and global culture.",
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
            "مسایل",
            "ma-saa-yi-li",
            "ma-saa-yil"
          ],
          [
            "بالا،",
            "baa-laa",
            "baa-laa"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "فرهنگ",
            "far-han-gi",
            "far-hang"
          ],
          [
            "ملی",
            "mil-lee",
            "mil-lee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "جهانی،",
            "ja-haa-nay",
            "ja-haa-nay"
          ],
          [
            "همیشه",
            "ha-may-sha",
            "ha-may-sha"
          ],
          [
            "مایهٔ",
            "maa-ya-yi",
            "maa-ya"
          ],
          [
            "حقارت",
            "ha-qaa-rat",
            "ha-qaa-rat"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شرمنده‌گی",
            "shar-min-da-gee",
            "shar-min-da-gee"
          ],
          [
            "پنداشته",
            "pin-daash-ta",
            "pin-daash-ta",
            "pin-daash-tan"
          ],
          [
            "شده",
            "shu-da",
            "shu-da",
            "shu-dan"
          ],
          [
            "است؛",
            "ast",
            "ast"
          ]
        ]
      },
      {
        "say": "a-gar dar ja-waa-mi-yi mu-raf-fah ka-say ba naa-mi fa-qeer mu-khaa-tab qa-raar gee-rad sakht mu-ta-sir wa shaa-kee khaa-had shud;",
        "mean": "If someone in a prosperous society is addressed as poor, they will be deeply hurt and offended.",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "جوامع",
            "ja-waa-mi-yi",
            "ja-waa-mi"
          ],
          [
            "مرفه",
            "mu-raf-fah",
            "mu-raf-fah"
          ],
          [
            "کسی",
            "ka-say",
            "ka-say"
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
            "فقیر",
            "fa-qeer",
            "fa-qeer"
          ],
          [
            "مخاطب",
            "mu-khaa-tab",
            "mu-khaa-tab"
          ],
          [
            "قرار",
            "qa-raar",
            "qa-raar"
          ],
          [
            "گیرد",
            "gee-rad",
            "gee-rad",
            "gi-rif-tan"
          ],
          [
            "سخت",
            "sakht",
            "sakht"
          ],
          [
            "متأثر",
            "mu-ta-sir",
            "mu-ta-sir"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "شاکی",
            "shaa-kee",
            "shaa-kee"
          ],
          [
            "خواهد",
            "khaa-had",
            "khaa-had",
            "khaas-tan"
          ],
          [
            "شد؛",
            "shud",
            "shud",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "ba-naa-ba-raan ee-jaab may-na-maa-yad ki maa ham dar sat-h-i khaa-na-waa-da wa ham dar miq-yaa-si kish-war baa tang-das-tee wa faqr ki maa-ya-yi bad-bakh-tee-haa-st pa-da-rood bi-go-yeem.",
        "mean": "Therefore, at both family and national level, we must bid farewell to poverty and destitution, which cause misery.",
        "words": [
          [
            "بنابراین",
            "ba-naa-ba-raan",
            "ba-naa-ba-raan"
          ],
          [
            "ایجاب",
            "ee-jaab",
            "ee-jaab"
          ],
          [
            "می‌نماید",
            "may-na-maa-yad",
            "may-na-maa-yad",
            "na-mo-dan"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "هم",
            "ham",
            "ham"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "سطح",
            "sat-h-i",
            "sat-h"
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
            "هم",
            "ham",
            "ham"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "مقیاس",
            "miq-yaa-si",
            "miq-yaas"
          ],
          [
            "کشور",
            "kish-war",
            "kish-war"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "تنگدستی",
            "tang-das-tee",
            "tang-das-tee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "فقر",
            "faqr",
            "faqr"
          ],
          [
            "که",
            "ki",
            "ki"
          ],
          [
            "مایهٔ",
            "maa-ya-yi",
            "maa-ya"
          ],
          [
            "بدبختی‌هاست",
            "bad-bakh-tee-haa-st",
            "bad-bakh-tee-haa-st"
          ],
          [
            "پدرود",
            "pa-da-rood",
            "pa-da-rood"
          ],
          [
            "بگوییم.",
            "bi-go-yeem",
            "bi-go-yeem",
            "guf-tan"
          ]
        ]
      }
    ],
    [
      {
        "say": "pas chi baa-yad kard ki az een mee-raa-si nan-geen faa-si-la bi-gee-reem?",
        "mean": "What then must we do to distance ourselves from this shameful inheritance?",
        "words": [
          [
            "پس",
            "pas",
            "pas"
          ],
          [
            "چه",
            "chi",
            "chi"
          ],
          [
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "کرد",
            "kard",
            "kard",
            "kar-dan"
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
            "این",
            "een",
            "een"
          ],
          [
            "میراث",
            "mee-raa-si",
            "mee-raas"
          ],
          [
            "ننگین",
            "nan-geen",
            "nan-geen"
          ],
          [
            "فاصله",
            "faa-si-la",
            "faa-si-la"
          ],
          [
            "بگیریم؟",
            "bi-gee-reem",
            "bi-gee-reem",
            "gi-rif-tan"
          ]
        ]
      },
      {
        "say": "ja-waab ro-shan ast, wa aan een ki baa-yad az ta-maa-mi naa-han-jaa-ree-haa-yi-yi ta-waan-far-saa-yi-yi iq-ti-saad ij-ti-naab na-mood.",
        "mean": "The answer is clear: we must avoid all the destructive irregularities in the economy.",
        "words": [
          [
            "جواب",
            "ja-waab",
            "ja-waab"
          ],
          [
            "روشن",
            "ro-shan",
            "ro-shan"
          ],
          [
            "است،",
            "ast",
            "ast"
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
            "باید",
            "baa-yad",
            "baa-yad"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "تمام",
            "ta-maa-mi",
            "ta-maam"
          ],
          [
            "ناهنجاری‌های",
            "naa-han-jaa-ree-haa-yi-yi",
            "naa-han-jaa-ree-haa-yi"
          ],
          [
            "توان‌فرسای",
            "ta-waan-far-saa-yi-yi",
            "ta-waan-far-saa-yi"
          ],
          [
            "اقتصاد",
            "iq-ti-saad",
            "iq-ti-saad"
          ],
          [
            "اجتناب",
            "ij-ti-naab",
            "ij-ti-naab"
          ],
          [
            "نمود.",
            "na-mood",
            "na-mood",
            "na-mo-dan"
          ]
        ]
      },
      {
        "say": "dakhl raa ba an-daa-za-yi kharj, paa raa ba an-daa-za-yi gi-leem wa luq-ma raa ba an-daa-za-yi da-haan ba-raa-bar ku-naym.",
        "mean": "We must match income to spending, stretch our feet only as far as the rug, and size the bite to the mouth.",
        "words": [
          [
            "دخل",
            "dakhl",
            "dakhl"
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
            "اندازهٔ",
            "an-daa-za-yi",
            "an-daa-za-yi"
          ],
          [
            "خرج،",
            "kharj",
            "kharj"
          ],
          [
            "پا",
            "paa",
            "paa"
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
            "اندازهٔ",
            "an-daa-za-yi",
            "an-daa-za-yi"
          ],
          [
            "گلیم",
            "gi-leem",
            "gi-leem"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "لقمه",
            "luq-ma",
            "luq-ma"
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
            "اندازهٔ",
            "an-daa-za-yi",
            "an-daa-za-yi"
          ],
          [
            "دهان",
            "da-haan",
            "da-haan"
          ],
          [
            "برابر",
            "ba-raa-bar",
            "ba-raa-bar"
          ],
          [
            "کنیم.",
            "ku-naym",
            "ku-naym",
            "kar-dan"
          ]
        ]
      }
    ],
    [
      {
        "say": "ba-naa-ba-raan, laa-zim ast ki rah-ba-ree-yi iq-ti-saa-di khaa-na-waa-da-haa raa pa-dar yaa ya-kay az bu-zur-gaa-ni dee-gar ba uh-da daash-ta baa-shad,",
        "mean": "The father or another elder should therefore take charge of managing the family economy,",
        "words": [
          [
            "بنابراین،",
            "ba-naa-ba-raan",
            "ba-naa-ba-raan"
          ],
          [
            "لازم",
            "laa-zim",
            "laa-zim"
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
            "رهبری",
            "rah-ba-ree-yi",
            "rah-ba-ree"
          ],
          [
            "اقتصاد",
            "iq-ti-saa-di",
            "iq-ti-saad"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "را",
            "raa",
            "raa"
          ],
          [
            "پدر",
            "pa-dar",
            "pa-dar"
          ],
          [
            "یا",
            "yaa",
            "yaa"
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
            "بزرگان",
            "bu-zur-gaa-ni",
            "bu-zur-gaan"
          ],
          [
            "دیگر",
            "dee-gar",
            "dee-gar"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "عهده",
            "uh-da",
            "uh-da"
          ],
          [
            "داشته",
            "daash-ta",
            "daash-ta",
            "daash-tan"
          ],
          [
            "باشد،",
            "baa-shad",
            "baa-shad",
            "bu-dan"
          ]
        ]
      },
      {
        "say": "taa baa ri-aa-ya-ti ta-naa-su-bi dar-aa-mad wa mas-raf, az har-goo-na i-zaa-fa-khar-jee, is-raaf, tab-zeer wa dar ni-haa-yat bee-bar-naa-ma-gee par-heez sha-wad.",
        "mean": "so that, by balancing income and spending, every kind of extra expense, waste, squandering and ultimately lack of planning is avoided.",
        "words": [
          [
            "تا",
            "taa",
            "taa"
          ],
          [
            "با",
            "baa",
            "baa"
          ],
          [
            "رعایت",
            "ri-aa-ya-ti",
            "ri-aa-yat"
          ],
          [
            "تناسب",
            "ta-naa-su-bi",
            "ta-naa-sub"
          ],
          [
            "درآمد",
            "dar-aa-mad",
            "dar-aa-mad"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مصرف،",
            "mas-raf",
            "mas-raf"
          ],
          [
            "از",
            "az",
            "az"
          ],
          [
            "هرگونه",
            "har-goo-na",
            "har-goo-na"
          ],
          [
            "اضافه‌خرجی،",
            "i-zaa-fa-khar-jee",
            "i-zaa-fa-khar-jee"
          ],
          [
            "اسراف،",
            "is-raaf",
            "is-raaf"
          ],
          [
            "تبذیر",
            "tab-zeer",
            "tab-zeer"
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
            "نهایت",
            "ni-haa-yat",
            "ni-haa-yat"
          ],
          [
            "بی‌برنامه‌گی",
            "bee-bar-naa-ma-gee",
            "bee-bar-naa-ma-gee"
          ],
          [
            "پرهیز",
            "par-heez",
            "par-heez"
          ],
          [
            "شود.",
            "sha-wad",
            "sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "dar ghay-ri aan maa shaa-hi-di sa-aa-da-ti khaa-na-waa-da-haa na-khaa-heem bood,",
        "mean": "Otherwise we will not see families prosper.",
        "words": [
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "غیر",
            "ghay-ri",
            "ghayr"
          ],
          [
            "آن",
            "aan",
            "aan"
          ],
          [
            "ما",
            "maa",
            "maa"
          ],
          [
            "شاهد",
            "shaa-hi-di",
            "shaa-hid"
          ],
          [
            "سعادت",
            "sa-aa-da-ti",
            "sa-aa-dat"
          ],
          [
            "خانواده‌ها",
            "khaa-na-waa-da-haa",
            "khaa-na-waa-da-haa"
          ],
          [
            "نخواهیم",
            "na-khaa-heem",
            "na-khaa-heem",
            "khaas-tan"
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
        "say": "a-gar pa-da-raan wa maa-da-raan, a-laa-qa-man-di aan and ki gu-li lab-khand bar la-baa-ni far-zan-daan-shaan na-khush-kad",
        "mean": "If parents want the flower of a smile not to dry on their children's lips,",
        "words": [
          [
            "اگر",
            "a-gar",
            "a-gar"
          ],
          [
            "پدران",
            "pa-da-raan",
            "pa-da-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادران،",
            "maa-da-raan",
            "maa-da-raan"
          ],
          [
            "علاقمند",
            "a-laa-qa-man-di",
            "a-laa-qa-mand"
          ],
          [
            "آن",
            "aan",
            "aan"
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
            "گل",
            "gu-li",
            "gul"
          ],
          [
            "لبخند",
            "lab-khand",
            "lab-khand"
          ],
          [
            "بر",
            "bar",
            "bar"
          ],
          [
            "لبان",
            "la-baa-ni",
            "la-baan"
          ],
          [
            "فرزندان‌شان",
            "far-zan-daan-shaan",
            "far-zan-daan-shaan"
          ],
          [
            "نخشکد",
            "na-khush-kad",
            "na-khush-kad",
            "khush-kee-dan"
          ]
        ]
      },
      {
        "say": "wa a-gar far-zan-daan ragh-bat daa-rand ki qaa-ma-ti pa-da-raan wa maa-da-raan-shaan dar zay-ri baa-ri sang-gee-ni qarz kham na-sha-wad;",
        "mean": "and if children wish their parents not to bend under a heavy burden of debt,",
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
            "فرزندان",
            "far-zan-daan",
            "far-zan-daan"
          ],
          [
            "رغبت",
            "ragh-bat",
            "ragh-bat"
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
            "قامت",
            "qaa-ma-ti",
            "qaa-mat"
          ],
          [
            "پدران",
            "pa-da-raan",
            "pa-da-raan"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "مادران‌شان",
            "maa-da-raan-shaan",
            "maa-da-raan-shaan"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "زیر",
            "zay-ri",
            "zayr"
          ],
          [
            "بار",
            "baa-ri",
            "baar"
          ],
          [
            "سنگین",
            "sang-gee-ni",
            "sang-geen"
          ],
          [
            "قرض",
            "qarz",
            "qarz"
          ],
          [
            "خم",
            "kham",
            "kham"
          ],
          [
            "نشود؛",
            "na-sha-wad",
            "na-sha-wad",
            "shu-dan"
          ]
        ]
      },
      {
        "say": "mas-a-la-yi ta-aa-dul, sir-fa-jo-yee wa aa-qi-bat-an-de-shee raa dar ha-ma-yi u-moor ba khu-soos dar am-ri iq-ti-saa-di khaa-na-waa-da ri-aa-yat na-maa-yand.",
        "mean": "they should observe balance, thrift and foresight in every matter, especially the family economy.",
        "words": [
          [
            "مسألهٔ",
            "mas-a-la-yi",
            "mas-a-la-yi"
          ],
          [
            "تعادل،",
            "ta-aa-dul",
            "ta-aa-dul"
          ],
          [
            "صرفه‌جویی",
            "sir-fa-jo-yee",
            "sir-fa-jo-yee"
          ],
          [
            "و",
            "wa",
            "wa"
          ],
          [
            "عاقبت‌اندیشی",
            "aa-qi-bat-an-de-shee",
            "aa-qi-bat-an-de-shee"
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
            "همهٔ",
            "ha-ma-yi",
            "ha-ma"
          ],
          [
            "امور",
            "u-moor",
            "u-moor"
          ],
          [
            "به",
            "ba",
            "ba"
          ],
          [
            "خصوص",
            "khu-soos",
            "khu-soos"
          ],
          [
            "در",
            "dar",
            "dar"
          ],
          [
            "امر",
            "am-ri",
            "amr"
          ],
          [
            "اقتصاد",
            "iq-ti-saa-di",
            "iq-ti-saad"
          ],
          [
            "خانواده",
            "khaa-na-waa-da",
            "khaa-na-waa-da"
          ],
          [
            "رعایت",
            "ri-aa-yat",
            "ri-aa-yat"
          ],
          [
            "نمایند.",
            "na-maa-yand",
            "na-maa-yand",
            "na-mo-dan"
          ]
        ]
      }
    ]
  ]
});
