# Afrin timeline: text to translate

Languages: Kurmanji and Arabic. Exported 2026-11-08.

Source quotes, quote citations, and source references are excluded. They should stay as written.

The text below is copied exactly from the current files. No English wording has been rewritten, corrected, or shortened. The website files have not been changed by this export.

## How to use this file

- Fill in only the requested language slots. A missing slot means that language already has different text.
- Keep each entry ID, field name, and location. Repeated text appears once, with all its locations listed.
- The main list contains titles, descriptions, captions, and interface labels still copied from English. Different existing text is treated as translated; its accuracy has not been reviewed.
- Names, descriptive image credits, and date abbreviations have separate review sections. Keep names and license identifiers as written when no translation is needed.
- Do not translate or change source quotations, citations, bibliographic references, date numbers, filenames, URLs, language names on the language picker, or language codes.
- Text embedded inside map images is outside this text export. The hidden climate and historical-era columns are also excluded.

## Summary

| Section | Unique entries | Kurmanji slots | Arabic slots |
| --- | ---: | ---: | ---: |
| Interface | 4 | 4 | 4 |
| Event titles and descriptions | 907 | 907 | 907 |
| Image captions | 191 | 191 | 191 |
| Image credit wording to review | 40 | 40 | 40 |
| Names to review | 124 | 124 | 0 |
| Date labels to review | 3 | 3 | 3 |

## Files and locations

- English: `timelineData.js`
- Kurmanji: `timelinedata_kurdish.js`
- Arabic: `timelinedata_arabic.js`
- Interface: `afrintimeline.html` (`COPY.kurdish` holds the Kurmanji labels).

Data locations use zero-based array indexes. For example, `columns[0].events[0].mainEvent` points to the corresponding field in each language file. Event dates and titles are included as additional checks. Recheck indexes if events are later inserted or reordered.

File SHA-256 hashes at export:

- `timelineData.js`: `be55a712358adb0032a745f1a1d816cdf2d61ece40ef6eeb72a09089488fa952`
- `timelinedata_kurdish.js`: `a152792ffca4849ceb851d897a4bc96b5433790a3a28f7a33628d051bcd81251`
- `timelinedata_arabic.js`: `10c3e808694ef2ea72cc8ed65c6379500daa9bb1adf7511a0284c3d4097b78b9`
- `afrintimeline.html`: `8fb7478358ceea2a103b4a58c50986e031ac7fbd740ba07b7f000b3f78a72ec6`

## Interface

### UI-0001

**Field:** `COPY.english.title`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html: COPY.*.title`

**Notes:** The existing translated titles do not include the newer beta-version wording. Update the translated title, preserving its existing meaning.

**Current source text:**

```text
Historical Timeline of Afrin (Beta Version - Best Viewed on Desktop)
```

**Existing Kurmanji text:**

```text
Kronolojiya Dîrokî ya Efrînê
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Existing Arabic text:**

```text
الجدول الزمني التاريخي لعفرين
```

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### UI-0002

**Field:** `HTML title`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html: <title>`

**Notes:** This is the browser-tab title. It is currently a shared English string; keep the translations here for when the tab title follows the selected language.

**Current source text:**

```text
Historical Timeline of Afrin (Beta Version)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### UI-0003

**Field:** `visible label`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html:1035`
- `afrintimeline.html:2564`

**Notes:** Translate the wording; keep the person name as written.

**Current source text:**

```text
Created by Zachariah Hopkins
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### UI-0004

**Field:** `visible label`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html:1689`

**Notes:** This is the link label under an event photo, not a quotation or bibliographic citation.

**Current source text:**

```text
source
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->


## Event titles and descriptions

### TEXT-0001

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[0].mainEvent` — Afrin-Specific Events; startDate=-2700; endDate=-2000; Alalakh Established

**Current source text:**

```text
Alalakh Established
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0002

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[0].additionalInfo` — Afrin-Specific Events; startDate=-2700; endDate=-2000; Alalakh Established

**Current source text:**

```text
The founding of Alalakh is dated differently by the sources. Eli, following the archaeology of his day, places the establishment of the kingdom of Alalakh in the Amuq plain at 2700 BCE. The current excavations put the city's earliest explored levels, XVII and XVI, at the start of the Middle Bronze Age, around 2000 BCE, and read the Early Bronze Age remains at Tell Tayinat nearby as the older centre, with settlement shifting to Tell Atchana around the transition between the two periods.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0003

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[1].mainEvent` — Afrin-Specific Events; startDate=-2000; endDate=-1200; Alalakh is the capital of the Kingdom of Mukish

**Current source text:**

```text
Alalakh is the capital of the Kingdom of Mukish
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0004

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[1].additionalInfo` — Afrin-Specific Events; startDate=-2000; endDate=-1200; Alalakh is the capital of the Kingdom of Mukish

**Current source text:**

```text
Alalakh/Tell Atchana functioned as the capital of a local kingdom named Mukish in the Middle and Late Bronze Age, broadly ca. 2000-1200 BCE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0005

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[2].mainEvent` — Afrin-Specific Events; startDate=-1800; endDate=(none); Alalakh under Yamḫad as the capital of Mukiš

**Current source text:**

```text
Alalakh under Yamḫad as the capital of Mukiš
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0006

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[2].additionalInfo` — Afrin-Specific Events; startDate=-1800; endDate=(none); Alalakh under Yamḫad as the capital of Mukiš

**Current source text:**

```text
Alalakh was under the reign of Yarim-lim as capital of the city-state of Mukiš and vassal to Yamhad.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0007

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[3].mainEvent` — Afrin-Specific Events; startDate=-1750; endDate=(none); Rebellion at Irride and the transfer of Alalakh to Yarim-Lim

**Current source text:**

```text
Rebellion at Irride and the transfer of Alalakh to Yarim-Lim
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0008

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[3].additionalInfo` — Afrin-Specific Events; startDate=-1750; endDate=(none); Rebellion at Irride and the transfer of Alalakh to Yarim-Lim

**Current source text:**

```text
Later in the 18th century BCE, a rebellion against Abba-El of Yamhad was suppressed at Irride (probably in northwestern Mesopotamia.) Irride was captured or destroyed and Alalakh was transferred back to Yarim-Lim in exchange for Irride.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0009

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[4].mainEvent` — Afrin-Specific Events; startDate=-1700; endDate=(none); Ammitaqum of Alalakh begins using the title king

**Current source text:**

```text
Ammitaqum of Alalakh begins using the title king
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0010

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[4].additionalInfo` — Afrin-Specific Events; startDate=-1700; endDate=(none); Ammitaqum of Alalakh begins using the title king

**Current source text:**

```text
The Level VII tablets from Alalakh show Ammitaqum, its local ruler under the kings of Yamhad, bearing the royal title in date formulas of his own. One such year formula names Ammitaqum as king on the occasion of an Eblaite marriage alliance for his son. The usage points to a strong and increasingly independent local standing.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0011

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[5].mainEvent` — Afrin-Specific Events; startDate=-1620; endDate=(none); Destruction of Alalakh Level VII by Hattusili I

**Current source text:**

```text
Destruction of Alalakh Level VII by Hattusili I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0012

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[5].additionalInfo` — Afrin-Specific Events; startDate=-1620; endDate=(none); Destruction of Alalakh Level VII by Hattusili I

**Current source text:**

```text
Destruction of Alalakh Level VII came with Hattusili I's (a Hittite king's) second Syrian campaign.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0013

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[6].mainEvent` — Afrin-Specific Events; startDate=-1595; endDate=-1447; Mitanni Empire Influence in Alalakh

**Current source text:**

```text
Mitanni Empire Influence in Alalakh
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0014

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[6].additionalInfo` — Afrin-Specific Events; startDate=-1595; endDate=-1447; Mitanni Empire Influence in Alalakh

**Current source text:**

```text
Mitanni phase at Alalakh to 1595-1447 BCE and cites seals, a temple, and figurines as evidence that Alalakh belonged to the Mitanni sphere.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0015

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[7].mainEvent` — Afrin-Specific Events; startDate=-1500; endDate=-1450; The Level IV palace archives and tablet corpus

**Current source text:**

```text
The Level IV palace archives and tablet corpus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0016

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[7].additionalInfo` — Afrin-Specific Events; startDate=-1500; endDate=-1450; The Level IV palace archives and tablet corpus

**Current source text:**

```text
Level IV of Alalakh produced an important palace archive whose texts are a major source for the political and administrative history of Alalakh and Mukiš.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0017

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[8].mainEvent` — Afrin-Specific Events; startDate=-1450; endDate=(none); Idrimi’s return and rule at Alalakh

**Current source text:**

```text
Idrimi’s return and rule at Alalakh
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0018

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[8].additionalInfo` — Afrin-Specific Events; startDate=-1450; endDate=(none); Idrimi’s return and rule at Alalakh

**Current source text:**

```text
Idrimi seized Alalakh, swore loyalty to Mittani, and ruled there as a king. He focused on palace building, caring for the inhabitants of his kingdom, and attending to the city's religious cult - the regular offerings and temple service owed to its gods.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0019

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[9].mainEvent` — Afrin-Specific Events; startDate=-1450; endDate=(none); The Statue of Idrimi and its inscription

**Current source text:**

```text
The Statue of Idrimi and its inscription
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0020

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[9].additionalInfo` — Afrin-Specific Events; startDate=-1450; endDate=(none); The Statue of Idrimi and its inscription

**Current source text:**

```text
The Statue of Idrimi from Alalakh carried a long body inscription and a shorter cheek inscription and became a major source for understanding Late Bronze Syria. The inscription tells the story of Idrimi's exile and return described in the previous card.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0021

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[10].mainEvent` — Afrin-Specific Events; startDate=-1447; endDate=(none); Alalakh under Mitanni suzerainty after the 1447 BCE Egyptian campaign

**Current source text:**

```text
Alalakh under Mitanni suzerainty after the 1447 BCE Egyptian campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0022

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[10].additionalInfo` — Afrin-Specific Events; startDate=-1447; endDate=(none); Alalakh under Mitanni suzerainty after the 1447 BCE Egyptian campaign

**Current source text:**

```text
In 1447 BCE Thutmose III of the Egyptian 18th Dynasty reached the Euphrates, but the sources used here do not support firm Egyptian control of Alalakh and instead place it under Mitanni suzerainty.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0023

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[11].mainEvent` — Afrin-Specific Events; startDate=-1441; endDate=(none); Alalakh in the annals of Thutmose III

**Current source text:**

```text
Alalakh in the annals of Thutmose III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0024

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[11].additionalInfo` — Afrin-Specific Events; startDate=-1441; endDate=(none); Alalakh in the annals of Thutmose III

**Current source text:**

```text
Scholars note a single Egyptian reference to Alalakh in Thutmose III's 38th year which shows some kind of Egyptian connection ranging from a trade agreement to gift giving but doesn't seem to show actual control.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0025

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[12].mainEvent` — Afrin-Specific Events; startDate=-1370; endDate=-1346; Northwestern Syria integrated into the Hittite Empire

**Current source text:**

```text
Northwestern Syria integrated into the Hittite Empire
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0026

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[12].additionalInfo` — Afrin-Specific Events; startDate=-1370; endDate=-1346; Northwestern Syria integrated into the Hittite Empire

**Current source text:**

```text
Northwestern Syria was integrated into the Hittite Empire under King Šuppiluliuma I.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0027

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[13].mainEvent` — Afrin-Specific Events; startDate=-1350; endDate=(none); Šuppiluliuma I's conquest of Mukiš and the end of Level IV Alalakh

**Current source text:**

```text
Šuppiluliuma I's conquest of Mukiš and the end of Level IV Alalakh
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0028

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[13].additionalInfo` — Afrin-Specific Events; startDate=-1350; endDate=(none); Šuppiluliuma I's conquest of Mukiš and the end of Level IV Alalakh

**Current source text:**

```text
The end of Alalakh Level IV is tied to Hittite conquest under Šuppiluliuma I, after which Mukiš (Alalakh) came under Hittite rule.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0029

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[14].mainEvent` — Afrin-Specific Events; startDate=-1347; endDate=-1283; Temple at Alalakh (Tell Atchana) constructed with Lion Orthostats

**Current source text:**

```text
Temple at Alalakh (Tell Atchana) constructed with Lion Orthostats
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0030

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[14].additionalInfo` — Afrin-Specific Events; startDate=-1347; endDate=-1283; Temple at Alalakh (Tell Atchana) constructed with Lion Orthostats

**Current source text:**

```text
“The main temple of Alalakh, dated to the final kingdom period (1347-1283 BCE), was decorated with 'basalt lions'.”
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0031

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[15].mainEvent` — Afrin-Specific Events; startDate=-1340; endDate=-1330; The Hittite treaty and revolt phase after conquest

**Current source text:**

```text
The Hittite treaty and revolt phase after conquest
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0032

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[15].additionalInfo` — Afrin-Specific Events; startDate=-1340; endDate=-1330; The Hittite treaty and revolt phase after conquest

**Current source text:**

```text
After Šuppiluliuma I’s conquest of Mukiš and the seizure of Alalakh, a treaty with Mukiš is attested under Šuppiluliuma. Later a rebellion occured which involved Mukiš, Nuḫašše, and Niya.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0033

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[16].mainEvent` — Afrin-Specific Events; startDate=-1320; endDate=-1313; Alalakh Collapses

**Current source text:**

```text
Alalakh Collapses
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0034

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[16].additionalInfo` — Afrin-Specific Events; startDate=-1320; endDate=-1313; Alalakh Collapses

**Current source text:**

```text
Alalakh ceased to exist as a city around 1320/1313 BCE, after which only a Hittite stronghold occupied part of the site.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0035

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[17].mainEvent` — Afrin-Specific Events; startDate=-1300; endDate=(none); Ain Dara Temple Built

**Current source text:**

```text
Ain Dara Temple Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0036

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[17].additionalInfo` — Afrin-Specific Events; startDate=-1300; endDate=(none); Ain Dara Temple Built

**Current source text:**

```text
The great basalt temple at 'Ain Dara (Girê Endar) was built around 1300 BCE. According to the excavator Ali Abu Assaf it stood, with rebuildings, for some 550 years, until about 740 BCE. Decorated with lions, sphinxes and giant carved footprints, it is famous as the closest known architectural parallel to Solomon's Temple in Jerusalem.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0037

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[18].mainEvent` — Afrin-Specific Events; startDate=-1280; endDate=(none); Rebellions Against Hittites in Alalakh and Aleppo

**Current source text:**

```text
Rebellions Against Hittites in Alalakh and Aleppo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0038

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[18].additionalInfo` — Afrin-Specific Events; startDate=-1280; endDate=(none); Rebellions Against Hittites in Alalakh and Aleppo

**Current source text:**

```text
Revolts against Hittites broke out in Aleppo and Alalakh in 1280 BCE, but Alalakh did not escape Hittite rule.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0039

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[19].mainEvent` — Afrin-Specific Events; startDate=-1200; endDate=(none); Final Late Bronze Age Destruction at Alalakh

**Current source text:**

```text
Final Late Bronze Age Destruction at Alalakh
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0040

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[19].additionalInfo` — Afrin-Specific Events; startDate=-1200; endDate=(none); Final Late Bronze Age Destruction at Alalakh

**Current source text:**

```text
A final violent destruction struck Alalakh amid the collapse of the Bronze Age world. Eli writes that the Sea Peoples plundered the Hittite capital, that Syria with Aleppo and Carchemish fell into their hands, and that Alalakh fell in 1194 BCE and was never rebuilt. Fink's stratigraphic synthesis instead has Alalakh cease to exist as a city already around 1320 or 1313 BCE, so the accounts differ on how the end came.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0041

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[20].mainEvent` — Afrin-Specific Events; startDate=-883; endDate=(none); Zamwa Assyrian Campaign

**Current source text:**

```text
Zamwa Assyrian Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0042

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[20].additionalInfo` — Afrin-Specific Events; startDate=-883; endDate=(none); Zamwa Assyrian Campaign

**Current source text:**

```text
In 883 BCE the Assyrians attacked the principality of Amka in the land of Zamwa, near Mount Judi far to the east of Afrin, destroying its fortress, killing dozens of its people and driving the rest into exile. Eli, citing Diakonoff's history of Media, connects this event to the Amka tribe of Çiyayê Kurmênc, whose name is derived from that principality - a tradition that would tie one of the region's oldest tribes to the Assyrian wars of the ninth century BCE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0043

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[21].mainEvent` — Afrin-Specific Events; startDate=-870; endDate=(none); Patina/Unqi in the Afrin-Azaz corridor

**Current source text:**

```text
Patina/Unqi in the Afrin-Azaz corridor
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0044

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[21].additionalInfo` — Afrin-Specific Events; startDate=-870; endDate=(none); Patina/Unqi in the Afrin-Azaz corridor

**Current source text:**

```text
By the ninth century BCE, Assyrian campaign accounts place Patina or Unqi on the route from Hazazu, (Azaz), across the Afrin River to the Kingdom of Kunulua, the royal city of Lubarna. This shows that the Afrin area lay within Kingdom of Kunulua’s sphere at this time.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0045

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[22].mainEvent` — Afrin-Specific Events; startDate=-858; endDate=(none); Hazazu/Azaz attested as an Assyrian campaign target

**Current source text:**

```text
Hazazu/Azaz attested as an Assyrian campaign target
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0046

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[22].additionalInfo` — Afrin-Specific Events; startDate=-858; endDate=(none); Hazazu/Azaz attested as an Assyrian campaign target

**Current source text:**

```text
Hazazu (Azaz) appears as part of the Neo-Hittite state of Patina and as an Assyrian campaign target in the ninth century BCE. The annals of Ashurnasirpal II march from the Euphrates to the Orontes by way of Hazazu and the river Apre, the modern Afrin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0047

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[23].mainEvent` — Afrin-Specific Events; startDate=-800; endDate=(none); Bit-Agusi influence extended into the Afrin region

**Current source text:**

```text
Bit-Agusi influence extended into the Afrin region
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0048

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[23].additionalInfo` — Afrin-Specific Events; startDate=-800; endDate=(none); Bit-Agusi influence extended into the Afrin region

**Current source text:**

```text
By the early eighth century BCE, evidence indicates that Arpad and Bit-Agusi had extended influence into the former Patina or Unqi zone, with Tell Rifaat in the western Afrin valley identified by some scholars as Arpad.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0049

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[24].mainEvent` — Afrin-Specific Events; startDate=-800; endDate=(none); Girê Endar Iron Age Horizon

**Current source text:**

```text
Girê Endar Iron Age Horizon
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0050

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[24].additionalInfo` — Afrin-Specific Events; startDate=-800; endDate=(none); Girê Endar Iron Age Horizon

**Current source text:**

```text
Girê Endar, or 'Ain Dara, was still in use during the Iron Age, especially on its lower mound. The survey evidence puts the end of the Iron Age occupation in the eighth century BCE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0051

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[25].mainEvent` — Afrin-Specific Events; startDate=-738; endDate=(none); Assyrian Deportees Settled in Unqi

**Current source text:**

```text
Assyrian Deportees Settled in Unqi
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0052

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[25].additionalInfo` — Afrin-Specific Events; startDate=-738; endDate=(none); Assyrian Deportees Settled in Unqi

**Current source text:**

```text
After the Assyrian conquest of Unqi in 738 BCE, the empire's routine resettlement policy filled the cities of the new province with deportees. Tiglath-pileser's annals record 600 captives of the city Amlatu of the Damunu tribe and 5,400 captives of the city Dēr settled in Kunalia and the other cities of the province.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0053

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[26].mainEvent` — Afrin-Specific Events; startDate=-738; endDate=(none); Tiglath-pileser III conquers Unqi and captures Kunulua or Kinalia

**Current source text:**

```text
Tiglath-pileser III conquers Unqi and captures Kunulua or Kinalia
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0054

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[26].additionalInfo` — Afrin-Specific Events; startDate=-738; endDate=(none); Tiglath-pileser III conquers Unqi and captures Kunulua or Kinalia

**Current source text:**

```text
In 738 BCE, in his second western campaign, Tiglath-pileser III of Assyria seized the rebellious kingdom of Unqi and captured its royal city Kunulua (Kinalia). The conquered kingdom was turned into an Assyrian province called Kullania after the name of its capital, where an Assyrian governor resided from then on.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0055

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[27].mainEvent` — Afrin-Specific Events; startDate=-600; endDate=-300; Persian-Period Presence at Girê Endar

**Current source text:**

```text
Persian-Period Presence at Girê Endar
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0056

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[27].additionalInfo` — Afrin-Specific Events; startDate=-600; endDate=-300; Persian-Period Presence at Girê Endar

**Current source text:**

```text
'Ain Dara or Girê Endar are associated with Persian-period male Persian Rider figurines, with remains identified as Persian and Zoroastrian, placing Persian-period presence at the site within a sixth to fourth century BCE horizon.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0057

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[28].mainEvent` — Afrin-Specific Events; startDate=-550; endDate=-330; Ahura Mazda Stone at Girê Endar

**Current source text:**

```text
Ahura Mazda Stone at Girê Endar
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0058

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[28].additionalInfo` — Afrin-Specific Events; startDate=-550; endDate=-330; Ahura Mazda Stone at Girê Endar

**Current source text:**

```text
A small glass stone carved with the Zoroastrian sky god Ahura Mazda, shown, as usual, as a man merged with a winged sun, was found at Girê Endar ('Ain Dara) in the site's fifth Achaemenid level. Eli cites the find from the proceedings of an international conference on the history of Syria. The Achaemenid period runs from the sixth to the fourth century BCE, and the find belongs to that era.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0059

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[29].mainEvent` — Afrin-Specific Events; startDate=-539; endDate=(none); Persian Rule Reaches the Girê Endar Region

**Current source text:**

```text
Persian Rule Reaches the Girê Endar Region
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0060

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[29].additionalInfo` — Afrin-Specific Events; startDate=-539; endDate=(none); Persian Rule Reaches the Girê Endar Region

**Current source text:**

```text
In 539 BCE Syria came under Persian Achaemenid rule, and local scholarship identifies Persian and Zoroastrian remains at Girê Endar. The archaeological synthesis treats the Achaemenid evidence at 'Ain Dara cautiously.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0061

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[30].mainEvent` — Afrin-Specific Events; startDate=-401; endDate=(none); Sacred fish on the Chalos/Afrin river are attested

**Current source text:**

```text
Sacred fish on the Chalos/Afrin river are attested
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0062

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[30].additionalInfo` — Afrin-Specific Events; startDate=-401; endDate=(none); Sacred fish on the Chalos/Afrin river are attested

**Current source text:**

```text
Xenophon and later academic sources attest sacred fish on the Chalos river, attribute the practice to Syrians, and note a later identification of Chalos with the Afrin. Dr. Mohammad Abdo Ali notes a possible connection to Yezidis, who also have a fish taboo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0063

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[31].mainEvent` — Afrin-Specific Events; startDate=-312; endDate=-64; Siros Greek Era

**Current source text:**

```text
Siros Greek Era
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0064

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[31].additionalInfo` — Afrin-Specific Events; startDate=-312; endDate=-64; Siros Greek Era

**Current source text:**

```text
Sîros (Cyrrhus) belonged to the Greek and Seleucid world from its foundation until the Roman takeover. Eli writes that the city was established under Seleucus Nicator (312-280 BCE), grew quickly, minted coins, and became a centre for the cults of Athena and Zeus. In 83 BCE Tigranes the Great of Armenia seized it, and in 69 BCE the Romans took it from him.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0065

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[32].mainEvent` — Afrin-Specific Events; startDate=-301; endDate=(none); Founding of Cyrrhus (Nebi Huri)

**Current source text:**

```text
Founding of Cyrrhus (Nebi Huri)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0066

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[32].additionalInfo` — Afrin-Specific Events; startDate=-301; endDate=(none); Founding of Cyrrhus (Nebi Huri)

**Current source text:**

```text
Cyrrhus, the ruin site of Nebi Huri (Sîros), was probably founded by Seleucus I Nicator after he received the region in 301 BCE. Cohen concludes that the city was named for the homonymous city of Kyrrhos in Macedonia and included Macedonians in its founding population, though the exact foundation date is not certain. An older tradition ties the name to the Persian king Kurush, Cyrus the Great, and Procopius preserves a story that Jews returning from the Babylonian captivity named the city in his honor. Eli follows that tradition and places the foundation in the mid-first millennium BCE. Cohen doubts the story and notes that no pre-Hellenistic remains have been found at the site.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0067

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[33].mainEvent` — Afrin-Specific Events; startDate=-300; endDate=(none); Jindires as Hellenistic Gindaros

**Current source text:**

```text
Jindires as Hellenistic Gindaros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0068

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[33].additionalInfo` — Afrin-Specific Events; startDate=-300; endDate=(none); Jindires as Hellenistic Gindaros

**Current source text:**

```text
Modern Jindires preserves the Hellenistic name Gindaros, a town founded in the early Hellenistic period and laid out on a Greek street grid. A dedication found in Macedonia in 1977 showed Gindaros to be a Macedonian settlement, its name carried over from the homeland like that of neighbouring Kyrrhos. Facella, following Norbert Kramer, concludes that most of the settlers were Greek or Macedonian, possibly soldiers, and that an indigenous component probably joined them over time.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0069

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[34].mainEvent` — Afrin-Specific Events; startDate=-100; endDate=-1; Girê Endar Declines

**Current source text:**

```text
Girê Endar Declines
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0070

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[34].additionalInfo` — Afrin-Specific Events; startDate=-100; endDate=-1; Girê Endar Declines

**Current source text:**

```text
'Ain Dara (Girê Endar) yielded abundant material from the last three centuries BCE but little or nothing from the first centuries of Roman control. The town evidently emptied out over the last century BCE, the decades when Tigranes and then Rome took Syria. The sources record a gradual decline rather than a single fall.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0071

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[35].mainEvent` — Afrin-Specific Events; startDate=-83; endDate=(none); Tigranes takes Syria and Antioch

**Current source text:**

```text
Tigranes takes Syria and Antioch
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0072

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[35].additionalInfo` — Afrin-Specific Events; startDate=-83; endDate=(none); Tigranes takes Syria and Antioch

**Current source text:**

```text
In 83 BCE Tigranes (King of Armenia) entered Syria, took Antioch, and remained in power there until 69 BCE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0073

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[36].mainEvent` — Afrin-Specific Events; startDate=-64; endDate=(none); Pompey Syrian Campaign

**Current source text:**

```text
Pompey Syrian Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0074

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[36].additionalInfo` — Afrin-Specific Events; startDate=-64; endDate=(none); Pompey Syrian Campaign

**Current source text:**

```text
After the Roman commander Pompey crossed into Syria in 64 BCE, Sîros (Cyrrhus) became part of a Roman province. One passage of Eli's book writes the year as 64 CE, while his main account of the annexation gives 64 BCE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0075

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[37].mainEvent` — Afrin-Specific Events; startDate=-64; endDate=(none); Roman Legions Quartered at Sîros

**Current source text:**

```text
Roman Legions Quartered at Sîros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0076

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[37].additionalInfo` — Afrin-Specific Events; startDate=-64; endDate=(none); Roman Legions Quartered at Sîros

**Current source text:**

```text
After the Roman annexation of Syria, Cyrrhus served as a Roman army base. The Legio X Fretensis had its winter quarters there in 18 CE, as Tacitus records, and Eli adds that the Legio IV Flavia was stationed there later. Tate notes that armies marching from Antioch to the Euphrates rounded Jebel Sim'an by way of Cyrrhus, where the Tenth Legion was quartered.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0077

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[38].mainEvent` — Afrin-Specific Events; startDate=-40; endDate=(none); Persian-Roman Wars in the Siros Region

**Current source text:**

```text
Persian-Roman Wars in the Siros Region
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0078

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[38].additionalInfo` — Afrin-Specific Events; startDate=-40; endDate=(none); Persian-Roman Wars in the Siros Region

**Current source text:**

```text
When the Parthians overran Syria in 40 BCE, the Sîros region saw hard fighting between them and the Romans. Eli's book calls them Persians and counts twelve wars between Rome and the Arsacid Parthian state fought on Kurdish soil before 224 CE. The occupation ended in 38 BCE, when the Roman general Publius Ventidius crushed the Parthian invasion and the crown prince Pacorus was killed.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0079

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[39].mainEvent` — Afrin-Specific Events; startDate=100; endDate=200; Kilotê Temple Period

**Current source text:**

```text
Kilotê Temple Period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0080

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[39].additionalInfo` — Afrin-Specific Events; startDate=100; endDate=200; Kilotê Temple Period

**Current source text:**

```text
A pagan temple stood at Kela Kilotê, on a hill west of the village of Kilotê, in the first or second century CE. In the fifth century, through Mar Maron's mission, a church was built on the temple's ruins.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0081

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[40].mainEvent` — Afrin-Specific Events; startDate=100; endDate=200; Roman Bridges in the Afrin Area

**Current source text:**

```text
Roman Bridges in the Afrin Area
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0082

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[40].additionalInfo` — Afrin-Specific Events; startDate=100; endDate=200; Roman Bridges in the Afrin Area

**Current source text:**

```text
The two oldest bridges in the district are Roman, built in the first or second century CE. One, 120 meters long, crosses the Sabun Suyu east of Nebi Huri, and the other, 92 meters long, crosses the Afrin river nearby. Both were still carrying traffic in Eli's day. Eli also records a bridge near Meydankê, now under the lake, which the Syrian Geographical Dictionary calls Roman.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0083

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[41].mainEvent` — Afrin-Specific Events; startDate=200; endDate=299; Dêrmişmiş Roman Burial Chamber

**Current source text:**

```text
Dêrmişmiş Roman Burial Chamber
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0084

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[41].additionalInfo` — Afrin-Specific Events; startDate=200; endDate=299; Dêrmişmiş Roman Burial Chamber

**Current source text:**

```text
Dêrmişmiş, on Mount Lêlûn west of Basilê, preserves an underground Roman burial chamber of the third century CE, together with a monastery tower, two sixth-century churches, a Byzantine villa, cisterns and rock-cut presses.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0085

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[42].mainEvent` — Afrin-Specific Events; startDate=200; endDate=299; Nabi Hori Tomb Construction

**Current source text:**

```text
Nabi Hori Tomb Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0086

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[42].additionalInfo` — Afrin-Specific Events; startDate=200; endDate=299; Nabi Hori Tomb Construction

**Current source text:**

```text
A Roman tower tomb of the third century CE stands at Nebi Huri (Cyrrhus). In 1859 the Nabi Hori mosque was built onto it and the tower became the minaret. Archaeologists consider it the grave of a Roman officer; Ibn al-Shihna records the local tradition that it is the grave of Uriah (Orya), after whom Nebi Huri is named.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0087

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[43].mainEvent` — Afrin-Specific Events; startDate=202; endDate=203; Berad Shops Built

**Current source text:**

```text
Berad Shops Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0088

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[43].additionalInfo` — Afrin-Specific Events; startDate=202; endDate=203; Berad Shops Built

**Current source text:**

```text
Several shops at Berad (ancient Kaprobarada) are dated to 202-203 CE. Tchalenko describes the site as already prosperous in the second and third centuries, with a temple, baths, a mausoleum, an andron and shops belonging to an olive-oil industry.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0089

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[44].mainEvent` — Afrin-Specific Events; startDate=224; endDate=(none); Kefer Nebo Press

**Current source text:**

```text
Kefer Nebo Press
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0090

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[44].additionalInfo` — Afrin-Specific Events; startDate=224; endDate=(none); Kefer Nebo Press

**Current source text:**

```text
An olive-oil press at Kefer Nebo, which originally belonged to the village temple of the god Nebo, is dated by inscription to 224 CE. Tchalenko notes it was built by the same crew that had put up the village inn in 207/208.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0091

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[45].mainEvent` — Afrin-Specific Events; startDate=228; endDate=(none); Zoroastrian State Religion

**Current source text:**

```text
Zoroastrian State Religion
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0092

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[45].additionalInfo` — Afrin-Specific Events; startDate=228; endDate=(none); Zoroastrian State Religion

**Current source text:**

```text
Eli records that in 228 CE Zoroastrianism became the official religion of the Persian empire. The Sasanians had taken the Persian throne from the Arsacids in 224 CE. The change mattered locally, since Zoroastrian-linked finds and traditions occur in the Afrin area, from the Ahura Mazda stone at Girê Endar to later Yezidi practice.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0093

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[46].mainEvent` — Afrin-Specific Events; startDate=243; endDate=(none); Kilotê Buildings Dated

**Current source text:**

```text
Kilotê Buildings Dated
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0094

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[46].additionalInfo` — Afrin-Specific Events; startDate=243; endDate=(none); Kilotê Buildings Dated

**Current source text:**

```text
Buildings at Kilotê bear dated inscriptions including 243 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0095

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[47].mainEvent` — Afrin-Specific Events; startDate=257; endDate=(none); Sassanid Siros Capture

**Current source text:**

```text
Sassanid Siros Capture
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0096

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[47].additionalInfo` — Afrin-Specific Events; startDate=257; endDate=(none); Sassanid Siros Capture

**Current source text:**

```text
According to Eli, after the Sasanian family took the Persian throne, they turned their forces on Syria and in 257 CE captured Sîros and Antioch, but the Romans soon drove them out. For the Sasanian accession Eli writes 227 CE in this passage, while elsewhere his book gives 224 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0097

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[48].mainEvent` — Afrin-Specific Events; startDate=306; endDate=337; Jindires Church Founded

**Current source text:**

```text
Jindires Church Founded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0098

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[48].additionalInfo` — Afrin-Specific Events; startDate=306; endDate=337; Jindires Church Founded

**Current source text:**

```text
Historical sources cited by Eli make Jindires (Cindirês) a cradle of Christian monasticism in the first Christian centuries, and say that at the end of Constantine's reign (306-337 CE) a disciple of Mar Yolyenus of Edessa built a large church at Jindires.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0099

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[49].mainEvent` — Afrin-Specific Events; startDate=313; endDate=(none); Birckê Façade Inscriptions

**Current source text:**

```text
Birckê Façade Inscriptions
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0100

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[49].additionalInfo` — Afrin-Specific Events; startDate=313; endDate=(none); Birckê Façade Inscriptions

**Current source text:**

```text
Birckê Terpê (Bircilqazê), a small village of the Şêrewa district, has a tower and a church of 393 CE, and house façades carved with the dates 313 and 494 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0101

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[50].mainEvent` — Afrin-Specific Events; startDate=340; endDate=352; Birc Church Built

**Current source text:**

```text
Birc Church Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0102

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[50].additionalInfo` — Afrin-Specific Events; startDate=340; endDate=352; Birc Church Built

**Current source text:**

```text
The small church at Birc Hêderê was built between 340 and 352 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0103

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[51].mainEvent` — Afrin-Specific Events; startDate=347; endDate=(none); Maron's Birth

**Current source text:**

```text
Maron's Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0104

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[51].additionalInfo` — Afrin-Specific Events; startDate=347; endDate=(none); Maron's Birth

**Current source text:**

```text
Mar Maron, founder of the Maronite movement, lived from 347 to 410 CE. Eli, following Bûlis Yetîm, places his life in the Afrin river country between Azaz and Kilis, within the diocese of Cyrrhus. He converted the people of Mount Lêlûn from the worship of the Assyrian god Nebo, died at Kefer Nebo, and is believed to be buried at Berad.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0105

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[52].mainEvent` — Afrin-Specific Events; startDate=372; endDate=(none); Fafirtîn Church Construction

**Current source text:**

```text
Fafirtîn Church Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0106

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[52].additionalInfo` — Afrin-Specific Events; startDate=372; endDate=(none); Fafirtîn Church Construction

**Current source text:**

```text
The church at Fafirtîn is dated to 372 CE. Its inscription is the oldest known inscription of a Christian church in northern Syria, only four years later than the restoration of the pagan temple of El Hosn, and Eli calls it one of the oldest dated churches anywhere.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0107

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[53].mainEvent` — Afrin-Specific Events; startDate=376; endDate=(none); Kilotê Building Dates

**Current source text:**

```text
Kilotê Building Dates
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0108

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[53].additionalInfo` — Afrin-Specific Events; startDate=376; endDate=(none); Kilotê Building Dates

**Current source text:**

```text
Buildings at Kilotê bear dated inscriptions including 376 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0109

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[54].mainEvent` — Afrin-Specific Events; startDate=389; endDate=(none); Mar Sem'an Born

**Current source text:**

```text
Mar Sem'an Born
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0110

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[54].additionalInfo` — Afrin-Specific Events; startDate=389; endDate=(none); Mar Sem'an Born

**Current source text:**

```text
Mar Sem'an was born in 389 CE in the village of Sîs/Şîsa, believed to be near present-day Islahiye, within the wider Çiyayê Kurmênc region.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0111

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[55].mainEvent` — Afrin-Specific Events; startDate=393; endDate=(none); Birckê Tower Rising

**Current source text:**

```text
Birckê Tower Rising
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0112

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[55].additionalInfo` — Afrin-Specific Events; startDate=393; endDate=(none); Birckê Tower Rising

**Current source text:**

```text
A tower and a church dated to 393 CE stand in the village of Birckê Terpê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0113

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[56].mainEvent` — Afrin-Specific Events; startDate=393; endDate=(none); Tawdora's Birth

**Current source text:**

```text
Tawdora's Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0114

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[56].additionalInfo` — Afrin-Specific Events; startDate=393; endDate=(none); Tawdora's Birth

**Current source text:**

```text
Mitran Tawdora (Theodoret) was born in 393 CE in the city of Antioch. From the age of seven he practiced monastic life.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0115

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[57].mainEvent` — Afrin-Specific Events; startDate=398; endDate=(none); Kefer Nebo Church Built

**Current source text:**

```text
Kefer Nebo Church Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0116

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[57].additionalInfo` — Afrin-Specific Events; startDate=398; endDate=(none); Kefer Nebo Church Built

**Current source text:**

```text
Thanks to Mar Maron, the people of Mount Lêlûn abandoned the worship of the Assyrian god Nebo and became Christians. They smashed the idols, toppled the statue of Nebo, demolished the idol shrine, and in 398 CE built the church of Kefer Nebo with its stones. Eli calls it the oldest church, though elsewhere he dates the Fafirtîn church earlier, to 372 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0117

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[58].mainEvent` — Afrin-Specific Events; startDate=399; endDate=402; Julian's Church Built

**Current source text:**

```text
Julian's Church Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0118

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[58].additionalInfo` — Afrin-Specific Events; startDate=399; endDate=402; Julian's Church Built

**Current source text:**

```text
The church of Julian the Engineer at Berad was built between 399 and 402 CE, apparently over an old pagan shrine, and ranked third in size after the churches of Sem'an and Qirentine.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0119

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[59].mainEvent` — Afrin-Specific Events; startDate=400; endDate=600; Xirabî Christian Period

**Current source text:**

```text
Xirabî Christian Period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0120

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[59].additionalInfo` — Afrin-Specific Events; startDate=400; endDate=600; Xirabî Christian Period

**Current source text:**

```text
Xirabî Şemsê flourished in the Christian era between the fourth and sixth centuries CE and has churches from the fourth and sixth centuries.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0121

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[60].mainEvent` — Afrin-Specific Events; startDate=410; endDate=(none); Maron's Death

**Current source text:**

```text
Maron's Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0122

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[60].additionalInfo` — Afrin-Specific Events; startDate=410; endDate=(none); Maron's Death

**Current source text:**

```text
Mar Maron (347-410 CE) died in 410 CE at Kefer Nebo and is believed to have been buried at Berad.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0123

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[61].mainEvent` — Afrin-Specific Events; startDate=423; endDate=(none); Tawdora Becomes Bishop of Sîros

**Current source text:**

```text
Tawdora Becomes Bishop of Sîros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0124

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[61].additionalInfo` — Afrin-Specific Events; startDate=423; endDate=(none); Tawdora Becomes Bishop of Sîros

**Current source text:**

```text
In 423 CE the priest Tawdora (Theodoret) became bishop of Sîros and remained there nearly thirty years. His diocese was large, with about 800 churches and prosperous villages attached to it. His later book, the Religious History, preserves much of what is known about the district in that age.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0125

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[62].mainEvent` — Afrin-Specific Events; startDate=444; endDate=(none); Tawdora Writes the Religious History

**Current source text:**

```text
Tawdora Writes the Religious History
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0126

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[62].additionalInfo` — Afrin-Specific Events; startDate=444; endDate=(none); Tawdora Writes the Religious History

**Current source text:**

```text
In 444 CE Tawdora wrote his most important book, the Religious History. In it he describes in detail the villages of his diocese and the city of Sîros, and records the lives of 75 people of the district famous for their piety. The book also preserves a first-hand account of Mar Sem'an the Stylite, written while Sem'an was still alive. Tawdora writes that the Persians, the Medes, the Scots and the Ethiopians all knew of him.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0127

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[63].mainEvent` — Afrin-Specific Events; startDate=459; endDate=(none); Mar Sem'an Dies

**Current source text:**

```text
Mar Sem'an Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0128

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[63].additionalInfo` — Afrin-Specific Events; startDate=459; endDate=(none); Mar Sem'an Dies

**Current source text:**

```text
After 37 years on his pillar, Mar Sem'an died on Sunday, 26 July 459 CE. To protect the body, the Metropolitan of Antioch came with a battalion of soldiers and escorted the bier down through the village of Şadêr, and from there a great caravan carried it to Antioch, where he was buried on the first day of September. A short time later the body was moved to Constantinople and buried there. After his death the people broke his pillar into pieces for blessing and carried them to their homes.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0129

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[64].mainEvent` — Afrin-Specific Events; startDate=466; endDate=(none); Tawdora's Death Recorded

**Current source text:**

```text
Tawdora's Death Recorded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0130

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[64].additionalInfo` — Afrin-Specific Events; startDate=466; endDate=(none); Tawdora's Death Recorded

**Current source text:**

```text
Mitran Tawdora died in 466 CE. Eli gives his life span as 393 to 466 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0131

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[65].mainEvent` — Afrin-Specific Events; startDate=476; endDate=490; Original Simeon Church

**Current source text:**

```text
Original Simeon Church
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0132

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[65].additionalInfo` — Afrin-Specific Events; startDate=476; endDate=490; Original Simeon Church

**Current source text:**

```text
The church of Mar Sem'an, built cross-shaped around his pillar and described as the largest church in the world, was constructed between 476 and 490 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0133

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[66].mainEvent` — Afrin-Specific Events; startDate=491; endDate=(none); Basûfan Church Built

**Current source text:**

```text
Basûfan Church Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0134

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[66].additionalInfo` — Afrin-Specific Events; startDate=491; endDate=(none); Basûfan Church Built

**Current source text:**

```text
Among the remains at Basûfan is a church from the year 491 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0135

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[67].mainEvent` — Afrin-Specific Events; startDate=492; endDate=(none); Kilotê Church Construction

**Current source text:**

```text
Kilotê Church Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0136

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[67].additionalInfo` — Afrin-Specific Events; startDate=492; endDate=(none); Kilotê Church Construction

**Current source text:**

```text
The eastern of the two churches at Kilotê was built in 492 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0137

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[68].mainEvent` — Afrin-Specific Events; startDate=494; endDate=(none); Birckê Facades Dated

**Current source text:**

```text
Birckê Facades Dated
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0138

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[68].additionalInfo` — Afrin-Specific Events; startDate=494; endDate=(none); Birckê Facades Dated

**Current source text:**

```text
The dates 313 and 494 CE are inscribed on some house facades in Birckê Terpê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0139

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[69].mainEvent` — Afrin-Specific Events; startDate=496; endDate=(none); Berad Residences Built

**Current source text:**

```text
Berad Residences Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0140

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[69].additionalInfo` — Afrin-Specific Events; startDate=496; endDate=(none); Berad Residences Built

**Current source text:**

```text
The official residences in the northwest section of Berad were built in 496 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0141

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[70].mainEvent` — Afrin-Specific Events; startDate=500; endDate=600; Jindires Byzantine Structures (6th Century Levels)

**Current source text:**

```text
Jindires Byzantine Structures (6th Century Levels)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0142

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[70].additionalInfo` — Afrin-Specific Events; startDate=500; endDate=600; Jindires Byzantine Structures (6th Century Levels)

**Current source text:**

```text
Excavation levels 3 and 4 at the mound of Jindires contained foundations of large buildings, ceramics, oil lamps, and coins recording the Byzantine sixth century CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0143

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[71].mainEvent` — Afrin-Specific Events; startDate=500; endDate=1450; Qîbar Bridge Established

**Current source text:**

```text
Qîbar Bridge Established
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0144

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[71].additionalInfo` — Afrin-Specific Events; startDate=500; endDate=1450; Qîbar Bridge Established

**Current source text:**

```text
A bridge called the Qîbar bridge, named after Elî Qîbar, owner of the Qîbar castle, stood over the Afrin river in the Middle Ages. The historian Ibn al-Shihna mentions it, and Eli suggests it may go back to the Roman road from Antioch to Nizib. In the Ottoman period many travellers' inns stood at the bridge site, where the city of Afrin now is.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0145

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[72].mainEvent` — Afrin-Specific Events; startDate=525; endDate=(none); Kefer Nebo Complex

**Current source text:**

```text
Kefer Nebo Complex
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0146

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[72].additionalInfo` — Afrin-Specific Events; startDate=525; endDate=(none); Kefer Nebo Complex

**Current source text:**

```text
In 525 CE the Christians built at Kefer Nebo a church, a tower, a monastery building for the monks, and a large hotel for pilgrims and guests.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0147

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[73].mainEvent` — Afrin-Specific Events; startDate=532; endDate=(none); Sîros Peace Treaty

**Current source text:**

```text
Sîros Peace Treaty
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0148

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[73].additionalInfo` — Afrin-Specific Events; startDate=532; endDate=(none); Sîros Peace Treaty

**Current source text:**

```text
The Persian raids on the Sîros area stopped with the treaty of 532 CE between the Persians and the Byzantines, though the Persians later broke it.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0149

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[74].mainEvent` — Afrin-Specific Events; startDate=540; endDate=(none); Sîros First Destruction

**Current source text:**

```text
Sîros First Destruction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0150

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[74].additionalInfo` — Afrin-Specific Events; startDate=540; endDate=(none); Sîros First Destruction

**Current source text:**

```text
Sîros was destroyed for the first time in 540 CE as a result of the Persian-Byzantine wars.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0151

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[75].mainEvent` — Afrin-Specific Events; startDate=541; endDate=(none); Western Berad Church

**Current source text:**

```text
Western Berad Church
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0152

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[75].additionalInfo` — Afrin-Specific Events; startDate=541; endDate=(none); Western Berad Church

**Current source text:**

```text
One of the two churches in the western quarters of Berad dates from 541 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0153

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[76].mainEvent` — Afrin-Specific Events; startDate=545; endDate=(none); Kilotê Building Period

**Current source text:**

```text
Kilotê Building Period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0154

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[76].additionalInfo` — Afrin-Specific Events; startDate=545; endDate=(none); Kilotê Building Period

**Current source text:**

```text
Buildings at Kilotê carry inscribed dates including the year 545 CE (alongside 243 and 376 CE).
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0155

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[77].mainEvent` — Afrin-Specific Events; startDate=550; endDate=(none); Telanissos Memorial Church

**Current source text:**

```text
Telanissos Memorial Church
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0156

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[77].additionalInfo` — Afrin-Specific Events; startDate=550; endDate=(none); Telanissos Memorial Church

**Current source text:**

```text
A small church in the south of Telanissos (Dêr Sem'an) was built in honor of Mar Sem'an in 550 CE and still partly stands.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0157

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[78].mainEvent` — Afrin-Specific Events; startDate=573; endDate=(none); Kimar Second Church

**Current source text:**

```text
Kimar Second Church
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0158

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[78].additionalInfo` — Afrin-Specific Events; startDate=573; endDate=(none); Kimar Second Church

**Current source text:**

```text
The second church of Kimar, in the southeast of the village, was built in 573 CE; two peacocks are depicted on its dome.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0159

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[79].mainEvent` — Afrin-Specific Events; startDate=574; endDate=(none); Second Siros Destruction

**Current source text:**

```text
Second Siros Destruction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0160

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[79].additionalInfo` — Afrin-Specific Events; startDate=574; endDate=(none); Second Siros Destruction

**Current source text:**

```text
Sîros was destroyed for the second time in 574 CE as a result of the Persian-Byzantine wars.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0161

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[80].mainEvent` — Afrin-Specific Events; startDate=600; endDate=(none); Persian Village Devastation

**Current source text:**

```text
Persian Village Devastation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0162

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[80].additionalInfo` — Afrin-Specific Events; startDate=600; endDate=(none); Persian Village Devastation

**Current source text:**

```text
At the beginning of the seventh century CE, the Persians in one of their attacks burned many villages, cut down trees, ruined agriculture, and left the district devastated.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0163

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[81].mainEvent` — Afrin-Specific Events; startDate=600; endDate=630; Persian attacks on Kurmanj Mountains

**Current source text:**

```text
Persian attacks on Kurmanj Mountains
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0164

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[81].additionalInfo` — Afrin-Specific Events; startDate=600; endDate=630; Persian attacks on Kurmanj Mountains

**Current source text:**

```text
Fierce Roman/Byzantine-Persian wars were fought over the Çiyayê Kurmênc and Sem'an districts, with a devastating Persian attack at the start of the seventh century; the Persians were finally expelled by Heraclius in 630 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0165

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[82].mainEvent` — Afrin-Specific Events; startDate=633; endDate=(none); Mar Aqûbê Birth

**Current source text:**

```text
Mar Aqûbê Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0166

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[82].additionalInfo` — Afrin-Specific Events; startDate=633; endDate=(none); Mar Aqûbê Birth

**Current source text:**

```text
Mar Aqûbê Rihawî (633-708 CE) was born at 'Êndaba in Cûmê, per Michael the Great; the site lies about 4 km east of the village of Coqê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0167

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[83].mainEvent` — Afrin-Specific Events; startDate=636; endDate=(none); Muslim Conquest of Cûmê, Antioch and Sîros

**Current source text:**

```text
Muslim Conquest of Cûmê, Antioch and Sîros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0168

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[83].additionalInfo` — Afrin-Specific Events; startDate=636; endDate=(none); Muslim Conquest of Cûmê, Antioch and Sîros

**Current source text:**

```text
In 636 CE the horsemen of Abu 'Ubayda took the villages of the Cûmê plain and the city of Antioch. They then marched on Sîros, and after an agreement with the city's priest, concluded in the village of Şerqîna, they entered Sîros without a fight and seized all its districts. Eli notes that a Kurdish village named Şerqiya still stands near Sîros.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0169

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[84].mainEvent` — Afrin-Specific Events; startDate=637; endDate=(none); Muslims Take the Whole Sîros District

**Current source text:**

```text
Muslims Take the Whole Sîros District
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0170

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[84].additionalInfo` — Afrin-Specific Events; startDate=637; endDate=(none); Muslims Take the Whole Sîros District

**Current source text:**

```text
In 637 CE the forces of Abu 'Ubayda, led by Habib bin Maslama al-Fihri, went north and occupied the city of Circim (Marash) on Mount al-Likam. With that conquest the Muslims held the whole Sîros district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0171

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[85].mainEvent` — Afrin-Specific Events; startDate=637; endDate=(none); Sîros Jizya Agreement

**Current source text:**

```text
Sîros Jizya Agreement
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0172

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[85].additionalInfo` — Afrin-Specific Events; startDate=637; endDate=(none); Sîros Jizya Agreement

**Current source text:**

```text
In 637 CE the Muslim forces under 'Eyad bin 'Ebid Ĝenem took control of the villages of Cûmê, and the city of Sîros was handed over upon payment of the jizya. The agreement protected the people's lives and the religious freedom of the Christians. Eli gives this account with a different year and commander from the 636 CE conquest narrative.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0173

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[86].mainEvent` — Afrin-Specific Events; startDate=652; endDate=(none); Shrine of Abdurrahman bin 'Awf

**Current source text:**

```text
Shrine of Abdurrahman bin 'Awf
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0174

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[86].additionalInfo` — Afrin-Specific Events; startDate=652; endDate=(none); Shrine of Abdurrahman bin 'Awf

**Current source text:**

```text
A famous shrine attributed to the Companion Abdurrahman bin 'Awf stands north of the village that bears his name, Şêx Ebdurehman. An ancient tell rises beside the shrine, next to an old cemetery and an abundant spring. The building is spacious and made up of two parts. In its western room is a tomb, and beside it stood an old stone inscribed in Ottoman naming the maqam of Abdurrahman bin 'Awf. The shrine's guardian told Eli that Abdurrahman bin 'Awf, whose dates he gave as 581 to 652 CE, was wounded here and that the shrine was built for him. Eli notes that no historical sources record the Companion being wounded in these parts or reaching the region, so the attribution rests on the shrine tradition.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0175

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[87].mainEvent` — Afrin-Specific Events; startDate=707; endDate=(none); Jarajima (Circim) Christians Settled in Hawar and Lelun Mountains

**Current source text:**

```text
Jarajima (Circim) Christians Settled in Hawar and Lelun Mountains
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0176

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[87].additionalInfo` — Afrin-Specific Events; startDate=707; endDate=(none); Jarajima (Circim) Christians Settled in Hawar and Lelun Mountains

**Current source text:**

```text
In 707 CE the caliph Walid Ibn Abd al-Malik sent a force against the city of Circim, demolished it, and resettled its Christian inhabitants, the Jarajima, in the Hawar and Lelun mountains of the Afrin district, at Tîzîna of Hemq, and partly in the Homs district. Eli calls them Hittite Circimîs and writes that the Hawar and Lelun mountains became a new homeland for them. Renderings of the name as Circassian rest on a mistranslation of Circimî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0177

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[88].mainEvent` — Afrin-Specific Events; startDate=708; endDate=(none); Mar Aqûbê Death

**Current source text:**

```text
Mar Aqûbê Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0178

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[88].additionalInfo` — Afrin-Specific Events; startDate=708; endDate=(none); Mar Aqûbê Death

**Current source text:**

```text
Mar Aqûbê Rihawî returned to Til'eda, died there in 708 CE, and was buried in its great church.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0179

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[89].mainEvent` — Afrin-Specific Events; startDate=900; endDate=1300; Gradual Decline of Greek and Syriac Christian Presence in the Siros Region

**Current source text:**

```text
Gradual Decline of Greek and Syriac Christian Presence in the Siros Region
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0180

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[89].additionalInfo` — Afrin-Specific Events; startDate=900; endDate=1300; Gradual Decline of Greek and Syriac Christian Presence in the Siros Region

**Current source text:**

```text
Rather than a single large-scale departure around 900 CE, the sources show a long fading. Syriac and Greek inscriptions continue at Qal'at Sim'an as late as 978 or 979, and Greek gave way to Syriac as the written language from the late seventh century. Christian communal life in the Sîros district continued until it ended under the Mamluks, and by the end of the thirteenth century no Christians remained in the district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0181

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[90].mainEvent` — Afrin-Specific Events; startDate=900; endDate=1000; Kela Kilotê Fortification

**Current source text:**

```text
Kela Kilotê Fortification
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0182

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[90].additionalInfo` — Afrin-Specific Events; startDate=900; endDate=1000; Kela Kilotê Fortification

**Current source text:**

```text
In the tenth century CE a rampart was built around the hilltop church at Kilotê, and it became a military base known as the fortress. Eli places this in the time of the wars of the Crusaders and the Hamdanids. His account of the Sem'an church describes the tenth-century fighting in the district as between the Hamdanids and the Byzantines.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0183

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[91].mainEvent` — Afrin-Specific Events; startDate=905; endDate=(none); Byzantine Siros Capture

**Current source text:**

```text
Byzantine Siros Capture
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0184

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[91].additionalInfo` — Afrin-Specific Events; startDate=905; endDate=(none); Byzantine Siros Capture

**Current source text:**

```text
In 905 CE the Byzantines took Sîros. Later the Crusaders laid hands on it, gave it the name Corice, and made its district a lordship attached to the county of Edessa.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0185

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[92].mainEvent` — Afrin-Specific Events; startDate=922; endDate=(none); Patriarch Yûheneyê Çaran Dies

**Current source text:**

```text
Patriarch Yûheneyê Çaran Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0186

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[92].additionalInfo` — Afrin-Specific Events; startDate=922; endDate=(none); Patriarch Yûheneyê Çaran Dies

**Current source text:**

```text
Patriarch Yûheneyê Çaran (John IV), one of the stylite patriarchs from Kurzêla in the Cûmê plain, died at Serê Kaniyê in 922 CE and was buried in the great church there.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0187

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[93].mainEvent` — Afrin-Specific Events; startDate=950; endDate=(none); Nikephoros Tower Project

**Current source text:**

```text
Nikephoros Tower Project
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0188

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[93].additionalInfo` — Afrin-Specific Events; startDate=950; endDate=(none); Nikephoros Tower Project

**Current source text:**

```text
In the middle of the tenth century CE, after prevailing over the Hamdanids of Aleppo, Nikephoros the Byzantine took control of the Sem'an church and built a rampart of 27 towers, turning it into the fortress known as Kela Sem'anê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0189

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[94].mainEvent` — Afrin-Specific Events; startDate=954; endDate=(none); Patriarch Yûheneyê Şeşan Becomes Patriarch

**Current source text:**

```text
Patriarch Yûheneyê Şeşan Becomes Patriarch
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0190

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[94].additionalInfo` — Afrin-Specific Events; startDate=954; endDate=(none); Patriarch Yûheneyê Şeşan Becomes Patriarch

**Current source text:**

```text
Patriarch Yûheneyê Şeşan (John VI), a stylite of Kurzêla in the Cûmê plain, was elected Patriarch in 954 CE. He held the seat for two and a half years and died at Entab.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0191

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[95].mainEvent` — Afrin-Specific Events; startDate=957; endDate=(none); Patriarch Şeşan Dies

**Current source text:**

```text
Patriarch Şeşan Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0192

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[95].additionalInfo` — Afrin-Specific Events; startDate=957; endDate=(none); Patriarch Şeşan Dies

**Current source text:**

```text
Patriarch Yûheneyê Şeşan died at Entab around 957 CE, after two and a half years as Patriarch.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0193

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[96].mainEvent` — Afrin-Specific Events; startDate=962; endDate=985; Saman Castle Victory

**Current source text:**

```text
Saman Castle Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0194

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[96].additionalInfo` — Afrin-Specific Events; startDate=962; endDate=985; Saman Castle Victory

**Current source text:**

```text
Between 962 and 985 CE, amid the Hamdanid-Byzantine struggle over Aleppo and Antioch, Se'id Eddewle took the fortress of Sem'an from the Byzantines; a detailed passage dates the capture to 985 CE, when its monks were killed or sold.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0195

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[97].mainEvent` — Afrin-Specific Events; startDate=969; endDate=(none); Byzantine Endar Conquest

**Current source text:**

```text
Byzantine Endar Conquest
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0196

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[97].additionalInfo` — Afrin-Specific Events; startDate=969; endDate=(none); Byzantine Endar Conquest

**Current source text:**

```text
In 969 CE the Byzantines took Endar from the Hamdanids, after which the town flourished again with official buildings, oil presses, bread ovens, and iron-smelting furnaces.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0197

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[98].mainEvent` — Afrin-Specific Events; startDate=1076; endDate=(none); Geilani Birth

**Current source text:**

```text
Geilani Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0198

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[98].additionalInfo` — Afrin-Specific Events; startDate=1076; endDate=(none); Geilani Birth

**Current source text:**

```text
Sheikh Abdilqadir Gêlanî, founder of the Qadiri order, was born in 1076 CE in the town of Ceylan south of the Caspian Sea; the source cites historical sources calling him a Kurd.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0199

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[99].mainEvent` — Afrin-Specific Events; startDate=1084; endDate=(none); Seljuk Battle at the Afrin River

**Current source text:**

```text
Seljuk Battle at the Afrin River
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0200

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[99].additionalInfo` — Afrin-Specific Events; startDate=1084; endDate=(none); Seljuk Battle at the Afrin River

**Current source text:**

```text
In 1084 CE the Seljuk sultan Silêman son of Qetlemîş took Antioch from the Byzantines. In the same year a battle broke out between him and Mislim son of Qurêş al-Aqili at Bîra Rahil, the village of Kurzêlê by the Afrin river, and Mislim was killed. Yaqut al-Hamawi places the killing at Kurzêlê in 1086 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0201

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[100].mainEvent` — Afrin-Specific Events; startDate=1100; endDate=(none); Endar Zoroastrian Settlement

**Current source text:**

```text
Endar Zoroastrian Settlement
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0202

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[100].additionalInfo` — Afrin-Specific Events; startDate=1100; endDate=(none); Endar Zoroastrian Settlement

**Current source text:**

```text
Zoroastrian Kurds are documented in the village of Endarê in the twelfth century CE, attested through the tradition of Hogir of Endarê, grandson of a Zoroastrian priest.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0203

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[101].mainEvent` — Afrin-Specific Events; startDate=1118; endDate=(none); Al-Rifai's Birth

**Current source text:**

```text
Al-Rifai's Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0204

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[101].additionalInfo` — Afrin-Specific Events; startDate=1118; endDate=(none); Al-Rifai's Birth

**Current source text:**

```text
Sheikh Ahmed Muhyiddin al-Rifa'i, founder of the Rifa'i order, was born in 1118 CE in southern Iraq.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0205

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[102].mainEvent` — Afrin-Specific Events; startDate=1122; endDate=(none); Battle at "Efrin hill" between Seljuk and Antioch

**Current source text:**

```text
Battle at "Efrin hill" between Seljuk and Antioch
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0206

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[102].additionalInfo` — Afrin-Specific Events; startDate=1122; endDate=(none); Battle at "Efrin hill" between Seljuk and Antioch

**Current source text:**

```text
A battle took place in 1122 CE at the place called the hill of Afrin between the Emir of Antioch, the son of Bohemond, and Ilghazi the Artuqid, the Seljuk Emir of Mardin. Eli cites al-Akhbar al-Saniyya for the year and suggests the hill may be the hill of Basûtê. An academic study of Artuqid and Crusader relations dates the famous battle on the Afrin to 28 June 1119.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0207

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[103].mainEvent` — Afrin-Specific Events; startDate=1140; endDate=(none); Sîros Earthquake Damage

**Current source text:**

```text
Sîros Earthquake Damage
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0208

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[103].additionalInfo` — Afrin-Specific Events; startDate=1140; endDate=(none); Sîros Earthquake Damage

**Current source text:**

```text
A major earthquake in 1140 CE damaged what remained of the city of Sîros.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0209

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[104].mainEvent` — Afrin-Specific Events; startDate=1145; endDate=(none); Hogir's Ruha Campaign

**Current source text:**

```text
Hogir's Ruha Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0210

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[104].additionalInfo` — Afrin-Specific Events; startDate=1145; endDate=(none); Hogir's Ruha Campaign

**Current source text:**

```text
Hogir, grandson of a Zoroastrian priest of the hill of Endarê, led a group of Imad al-Din Zengi's soldiers in the recapture of Ruha (Edessa) from the Crusaders (dated 1145 CE by the same book) and was killed with his companions by a Crusader force on the way back.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0211

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[105].mainEvent` — Afrin-Specific Events; startDate=1150; endDate=(none); Zengi Captures Sîros

**Current source text:**

```text
Zengi Captures Sîros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0212

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[105].additionalInfo` — Afrin-Specific Events; startDate=1150; endDate=(none); Zengi Captures Sîros

**Current source text:**

```text
In 1150 CE, after the leader Joscelin had been taken captive by some inhabitants of the district, Nur al-Din Zengi captured Sîros and took control of the surrounding castles such as Azaz and Rawendan. Eli calls Joscelin a Byzantine leader.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0213

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[106].mainEvent` — Afrin-Specific Events; startDate=1157; endDate=(none); Sîros Strategic Destruction

**Current source text:**

```text
Sîros Strategic Destruction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0214

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[106].additionalInfo` — Afrin-Specific Events; startDate=1157; endDate=(none); Sîros Strategic Destruction

**Current source text:**

```text
In 1157 CE Nur al-Din ordered the destruction of Sîros to keep it from falling to the Crusaders; the city was demolished and completely abandoned.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0215

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[107].mainEvent` — Afrin-Specific Events; startDate=1166; endDate=(none); Geilani's Death

**Current source text:**

```text
Geilani's Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0216

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[107].additionalInfo` — Afrin-Specific Events; startDate=1166; endDate=(none); Geilani's Death

**Current source text:**

```text
Sheikh Abdulqadir Gêlanî (al-Jilani), founder of the Qadiri order, died in 1166 CE by the life span Eli gives. A footnote in the same book says he lived in Baghdad and passed away in 1165 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0217

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[108].mainEvent` — Afrin-Specific Events; startDate=1182; endDate=(none); Al-Rifai's Death

**Current source text:**

```text
Al-Rifai's Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0218

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[108].additionalInfo` — Afrin-Specific Events; startDate=1182; endDate=(none); Al-Rifai's Death

**Current source text:**

```text
Sheikh Ahmed Muhyiddin al-Rifa'i, founder of the Rifa'i order, died in 1182 CE in southern Iraq.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0219

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[109].mainEvent` — Afrin-Specific Events; startDate=1200; endDate=1700; Basûtê Mendi Control

**Current source text:**

```text
Basûtê Mendi Control
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0220

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[109].additionalInfo` — Afrin-Specific Events; startDate=1200; endDate=1700; Basûtê Mendi Control

**Current source text:**

```text
From the Ayyubid period the Mendî family controlled the Cûmê district including Basûtê, and its rule there lasted until the beginning of the 17th century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0221

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[110].mainEvent` — Afrin-Specific Events; startDate=1200; endDate=1300; Canpolat Castle Revival

**Current source text:**

```text
Canpolat Castle Revival
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0222

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[110].additionalInfo` — Afrin-Specific Events; startDate=1200; endDate=1300; Canpolat Castle Revival

**Current source text:**

```text
The Canpolat castle on Mount Parsê was revived and used by the Kurdish Mendî family in the thirteenth century CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0223

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[111].mainEvent` — Afrin-Specific Events; startDate=1200; endDate=1516; Kilis Emirate Defense

**Current source text:**

```text
Kilis Emirate Defense
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0224

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[111].additionalInfo` — Afrin-Specific Events; startDate=1200; endDate=1516; Kilis Emirate Defense

**Current source text:**

```text
The Kurdish Mendî princes, later carrying the Canpolat name, defended the independence of their Kilis emirate against the Mamluk rulers of Aleppo from the thirteenth century until the Ottoman conquest of 1516. Under Ehmed Beg the emirate refused to come under the Mamluks' hand, and in the days of Qasim Beg it beat back a Mamluk-backed attempt to replace him with Sheikh Izdîn the Yezidi.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0225

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[112].mainEvent` — Afrin-Specific Events; startDate=1200; endDate=1300; Mendi Kurdish Rule

**Current source text:**

```text
Mendi Kurdish Rule
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0226

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[112].additionalInfo` — Afrin-Specific Events; startDate=1200; endDate=1300; Mendi Kurdish Rule

**Current source text:**

```text
The Kurdish Mendî family, granted the Qusayr area by the Ayyubids, founded the emirate of Kilis and Azaz and ruled the Cûmê plain, Çiyayê Kurmênc, Azaz and Kilis through the 13th century, passing the throne from Mend to Ereb Beg, Cemal and Ehmed.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0227

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[113].mainEvent` — Afrin-Specific Events; startDate=1200; endDate=(none); Yezidi Religion Spreads in Çiyayê Kurmênc

**Current source text:**

```text
Yezidi Religion Spreads in Çiyayê Kurmênc
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0228

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[113].additionalInfo` — Afrin-Specific Events; startDate=1200; endDate=(none); Yezidi Religion Spreads in Çiyayê Kurmênc

**Current source text:**

```text
In the thirteenth century CE the Yezidi religion in its familiar form reached the Sîros triangle and spread widely among the Kurds of the district, especially in the villages of the Cûmê plain and Mount Lêlûn. The Yezidi Kurds of Cûmê later gathered around Emir Mend, whose emirate rose in those same districts.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0229

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[114].mainEvent` — Afrin-Specific Events; startDate=1245; endDate=(none); Basûtê Aleppo Clash

**Current source text:**

```text
Basûtê Aleppo Clash
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0230

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[114].additionalInfo` — Afrin-Specific Events; startDate=1245; endDate=(none); Basûtê Aleppo Clash

**Current source text:**

```text
In 1245 the horsemen of the lord of Basûtê clashed with forces from Aleppo; Turkmen horsemen from Aleppo defeated them and took the lord of Basûtê captive to Aleppo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0231

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[115].mainEvent` — Afrin-Specific Events; startDate=1246; endDate=(none); Azaz Great Mosque Built

**Current source text:**

```text
Azaz Great Mosque Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0232

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[115].additionalInfo` — Afrin-Specific Events; startDate=1246; endDate=(none); Azaz Great Mosque Built

**Current source text:**

```text
The Great Mosque of Azaz was built in 644 AH, which is 1246 CE, under the Ayyubid sultan Yusuf son of Muhammad son of Ghazi son of Ayyub. The Arabic inscription on its door records the sultan's name and the date.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0233

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[116].mainEvent` — Afrin-Specific Events; startDate=1314; endDate=(none); Altunbugha Column Transfer

**Current source text:**

```text
Altunbugha Column Transfer
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0234

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[116].additionalInfo` — Afrin-Specific Events; startDate=1314; endDate=(none); Altunbugha Column Transfer

**Current source text:**

```text
In 1314 CE the Mamluk governor of Aleppo, 'Ala al-Din Altunbugha, used great columns taken from the ruins of Sîros to build a mosque in Aleppo at Meydan Reş.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0235

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[117].mainEvent` — Afrin-Specific Events; startDate=1380; endDate=(none); Mendi Independence End

**Current source text:**

```text
Mendi Independence End
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0236

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[117].additionalInfo` — Afrin-Specific Events; startDate=1380; endDate=(none); Mendi Independence End

**Current source text:**

```text
The Mend emirate under Ehmed Beg remained independent until 1380 CE; the Mendî emirs continued to defend their independence under the Burji Mamluks afterwards.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0237

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[118].mainEvent` — Afrin-Specific Events; startDate=1380; endDate=(none); Yazidi Leadership Replacement Attempt

**Current source text:**

```text
Yazidi Leadership Replacement Attempt
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0238

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[118].additionalInfo` — Afrin-Specific Events; startDate=1380; endDate=(none); Yazidi Leadership Replacement Attempt

**Current source text:**

```text
During the late Burji Mamluk period the Mamluks tried to replace Qasim Beg Mendî, emir of Kilis, with Sheikh Izdîn the Yezidi; the attack on Kilis failed and Qasim Beg preserved the emirate's independence.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0239

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[119].mainEvent` — Afrin-Specific Events; startDate=1400; endDate=(none); Şikak Afrin Settlement

**Current source text:**

```text
Şikak Afrin Settlement
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0240

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[119].additionalInfo` — Afrin-Specific Events; startDate=1400; endDate=(none); Şikak Afrin Settlement

**Current source text:**

```text
By Şikak tradition, the tribe's first settlement in the Afrin region was Xirabî Şera, inhabited since the beginning of the 15th century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0241

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[120].mainEvent` — Afrin-Specific Events; startDate=1402; endDate=(none); Basûtê Castle Ruins

**Current source text:**

```text
Basûtê Castle Ruins
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0242

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[120].additionalInfo` — Afrin-Specific Events; startDate=1402; endDate=(none); Basûtê Castle Ruins

**Current source text:**

```text
The historian Ibn al-Shihna (1402-1485) reported in al-Durr al-Muntakhab that the castle of Basûtê had fallen into ruin and become an insignificant village.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0243

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[121].mainEvent` — Afrin-Specific Events; startDate=1500; endDate=1600; Amka Tribe Arrival in Çiyayê Kurmênc

**Current source text:**

```text
Amka Tribe Arrival in Çiyayê Kurmênc
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0244

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[121].additionalInfo` — Afrin-Specific Events; startDate=1500; endDate=1600; Amka Tribe Arrival in Çiyayê Kurmênc

**Current source text:**

```text
The sources date the arrival of the Amka, one of the district's oldest tribes, in different ways. Wasfi Zakariya writes that they were once nomads on the Persian borders and that the Ottoman Sultan Selim moved them and settled them in Çiyayê Kurmênc, writing their name as 'Amiqi. The tradition of the Şorbe family has an Amkî chief named Çamo already holding the Sêmalka area of Mount Hawar when the Şorbe arrived in the middle of the sixteenth century. Lescot calls the Amka the oldest tribe in Çiyayê Kurmênc, originally of the Qizilbash confession and later Sunni, and presumes they settled there from around the seventeenth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0245

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[122].mainEvent` — Afrin-Specific Events; startDate=1500; endDate=(none); Basûtê Castle Reconstruction

**Current source text:**

```text
Basûtê Castle Reconstruction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0246

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[122].additionalInfo` — Afrin-Specific Events; startDate=1500; endDate=(none); Basûtê Castle Reconstruction

**Current source text:**

```text
In the 16th century the Kurds rebuilt the castle of Basûtê, which then remained in Kurdish family hands for about three hundred years.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0247

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[123].mainEvent` — Afrin-Specific Events; startDate=1500; endDate=(none); Kurdish Settlement at the Sem'an Castle

**Current source text:**

```text
Kurdish Settlement at the Sem'an Castle
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0248

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[123].additionalInfo` — Afrin-Specific Events; startDate=1500; endDate=(none); Kurdish Settlement at the Sem'an Castle

**Current source text:**

```text
In the sixteenth century a Kurd of standing settled in the Sem'an castle and added a two-storey building over the eastern section of the great church.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0249

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[124].mainEvent` — Afrin-Specific Events; startDate=1500; endDate=(none); Sasun Emirate Formation

**Current source text:**

```text
Sasun Emirate Formation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0250

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[124].additionalInfo` — Afrin-Specific Events; startDate=1500; endDate=(none); Sasun Emirate Formation

**Current source text:**

```text
The Kurdish emirate of Sasun, associated with the line of Mir 'Ezdîn and known as 'Ezo/'Ezê/Hezo, was established in the fifteenth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0251

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[125].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Canpolat's Istanbul Journey

**Current source text:**

```text
Canpolat's Istanbul Journey
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0252

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[125].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Canpolat's Istanbul Journey

**Current source text:**

```text
After the 1516 conquest, Qasim Beg travelled to Istanbul with the Sultan's caravan, taking along his twelve-year-old son Canpolat.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0253

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[126].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Circassian Begs Submit

**Current source text:**

```text
Circassian Begs Submit
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0254

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[126].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Circassian Begs Submit

**Current source text:**

```text
In 1516 Qasim Beg and Khayri Beg the Circassian submitted to Sultan Selim I, asking to come under his banner before the campaign against the Mamluks.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0255

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[127].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Habib Castle Execution

**Current source text:**

```text
Habib Castle Execution
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0256

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[127].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Habib Castle Execution

**Current source text:**

```text
Qaraja Pasha summoned Habib, brother of Qasim Beg, to Aleppo and killed him on the accusation that he had taken nine wives together. Another account preserved by Eli says Emir Habib son of Erebo was hanged at the foot of the citadel of Aleppo because the House of Sheikh Mend was Yezidi.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0257

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[128].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Habib's Kurdish Control

**Current source text:**

```text
Habib's Kurdish Control
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0258

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[128].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Habib's Kurdish Control

**Current source text:**

```text
After Qasim Beg's death, his brother Habib took control of the Kurds of the region.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0259

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[129].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Izdin Yazidi Influences Ahmed

**Current source text:**

```text
Izdin Yazidi Influences Ahmed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0260

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[129].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Izdin Yazidi Influences Ahmed

**Current source text:**

```text
Sheikh Izdîn the Yezidi persuaded Ahmed son of Ja'far (Qaraja Pasha), Ottoman emir of the sanjak of Aleppo, to slander Qasim Beg before the Sultan's counselors.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0261

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[130].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Izdin's Kurdish Leadership

**Current source text:**

```text
Izdin's Kurdish Leadership
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0262

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[130].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Izdin's Kurdish Leadership

**Current source text:**

```text
Sultan Selim handed the leadership of the Kurds (the emirate) to Sheikh Izdîn after the deaths of Qasim Beg and Habib.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0263

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[131].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=1520; Kilis Emirate Loses Independence

**Current source text:**

```text
Kilis Emirate Loses Independence
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0264

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[131].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=1520; Kilis Emirate Loses Independence

**Current source text:**

```text
When Sheikh Izdîn died, no one among his children and kinsmen was judged worthy to rule the Kurds, so the independence of the Kilis emirate was cut off and it passed to the sultanic domains of Antakya. Its governance was handed to Muhammad Beg, of the dynasty of the Kurdish rulers of Hasankeyf.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0265

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[132].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Marj Dabiq Battle

**Current source text:**

```text
Marj Dabiq Battle
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0266

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[132].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Marj Dabiq Battle

**Current source text:**

```text
The battle of Marj Dabiq between the Ottomans and the Mamluks was fought in 1516 on the plain that lies about 13 km from the Canpolat castle. The Ottoman victory gave them the whole Eastern Mediterranean and opened the Ottoman era in the district, which lasted until 1918.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0267

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[133].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=1607; Ottoman Kilis Alliance

**Current source text:**

```text
Ottoman Kilis Alliance
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0268

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[133].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=1607; Ottoman Kilis Alliance

**Current source text:**

```text
From 1516 the Kilis emirate stood under Ottoman rule, with the Canpolat princes maintaining relations with the Ottoman authority; Canpolat Beg received the province of Kilis hereditarily and the family kept its rights until the Canpolad defeat of 1607.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0269

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[134].mainEvent` — Afrin-Specific Events; startDate=1516; endDate=(none); Qasim's Execution Ordered

**Current source text:**

```text
Qasim's Execution Ordered
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0270

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[134].additionalInfo` — Afrin-Specific Events; startDate=1516; endDate=(none); Qasim's Execution Ordered

**Current source text:**

```text
Following the slander campaign, the Sultan's order for Qasim Beg's execution was issued; his son Canpolat was kept and educated in Sultan Selim's palace.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0271

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[135].mainEvent` — Afrin-Specific Events; startDate=1520; endDate=1566; Badlisi Tribes Arrive

**Current source text:**

```text
Badlisi Tribes Arrive
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0272

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[135].additionalInfo` — Afrin-Specific Events; startDate=1520; endDate=1566; Badlisi Tribes Arrive

**Current source text:**

```text
Eli connects groups in the Afrin district to the tribes of Bitlis. The name of the Bûd may be tied to the Kurdish Bûdkî tribe, which the Sharafnama counts among the tribes of Bitlis in the time of Sultan Suleiman the Lawgiver. The Rojkî, in the villages of Şêxorz, Se'rîncek, Birîmce and Diraqliya, carry the name of the tribe of Sharafkhan Bidlisi himself. The connection rests on names and remains tentative.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0273

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[136].mainEvent` — Afrin-Specific Events; startDate=1543; endDate=(none); Mawlawi Tekke Construction

**Current source text:**

```text
Mawlawi Tekke Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0274

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[136].additionalInfo` — Afrin-Specific Events; startDate=1543; endDate=(none); Mawlawi Tekke Construction

**Current source text:**

```text
In 1543 Ali Agha, mayor of Kilis, built a Mawlawi tekke in the city.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0275

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[137].mainEvent` — Afrin-Specific Events; startDate=1550; endDate=(none); Shorbeh Family Settlement

**Current source text:**

```text
Shorbeh Family Settlement
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0276

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[137].additionalInfo` — Afrin-Specific Events; startDate=1550; endDate=(none); Shorbeh Family Settlement

**Current source text:**

```text
The Şorbe family arrived in the mid-16th century from the Heyman region of central Anatolia, settling with their flocks on the southern face of Mount Hawar.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0277

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[138].mainEvent` — Afrin-Specific Events; startDate=1553; endDate=(none); Canpolet Mosque Built

**Current source text:**

```text
Canpolet Mosque Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0278

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[138].additionalInfo` — Afrin-Specific Events; startDate=1553; endDate=(none); Canpolet Mosque Built

**Current source text:**

```text
The Canpolat Mosque was built in the city of Kilis in 1553.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0279

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[139].mainEvent` — Afrin-Specific Events; startDate=1572; endDate=(none); Canpolat Beg Dies

**Current source text:**

```text
Canpolat Beg Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0280

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[139].additionalInfo` — Afrin-Specific Events; startDate=1572; endDate=(none); Canpolat Beg Dies

**Current source text:**

```text
Canpolat Beg died in 1572, at an age between 90 and 100 years, leaving many children. According to his testament and a sultanic order, his son Ja'far received the robe of the emirate.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0281

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[140].mainEvent` — Afrin-Specific Events; startDate=1574; endDate=(none); Konya Family Migration

**Current source text:**

```text
Konya Family Migration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0282

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[140].additionalInfo` — Afrin-Specific Events; startDate=1574; endDate=(none); Konya Family Migration

**Current source text:**

```text
By family tradition, Haji Omer's forefathers moved from the environs of Konya about 450 years before the book's writing, settling first at Kêla or Qocanli near Kilis.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0283

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[141].mainEvent` — Afrin-Specific Events; startDate=1576; endDate=1579; Habib Beg Balis Province Transfer

**Current source text:**

```text
Habib Beg Balis Province Transfer
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0284

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[141].additionalInfo` — Afrin-Specific Events; startDate=1576; endDate=1579; Habib Beg Balis Province Transfer

**Current source text:**

```text
Habib Beg was granted the province of Balis, previously in the hands of his brother Husein Beg, in the years following Ja'far Beg's death in 1576.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0285

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[142].mainEvent` — Afrin-Specific Events; startDate=1576; endDate=(none); Ja'far Beg's Death on Campaign

**Current source text:**

```text
Ja'far Beg's Death on Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0286

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[142].additionalInfo` — Afrin-Specific Events; startDate=1576; endDate=(none); Ja'far Beg's Death on Campaign

**Current source text:**

```text
In 1576, four years after receiving the emirate, Ja'far Beg joined the campaign of the commander Mustafa Pasha toward the Şirvan region. When he reached the Qaracadagh mountain between Siverek and Amed he fell from his horse and lost his life.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0287

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[143].mainEvent` — Afrin-Specific Events; startDate=1579; endDate=(none); Hussein Beg Kilis Authority Shift

**Current source text:**

```text
Hussein Beg Kilis Authority Shift
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0288

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[143].additionalInfo` — Afrin-Specific Events; startDate=1579; endDate=(none); Hussein Beg Kilis Authority Shift

**Current source text:**

```text
Habib Beg lost control of Kilis after three years, and the headship was handed to his brother Husein Beg, who long ruled Kilis as a virtually independent emirate.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0289

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[144].mainEvent` — Afrin-Specific Events; startDate=1596; endDate=(none); Sharafname Historical Documentation

**Current source text:**

```text
Sharafname Historical Documentation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0290

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[144].additionalInfo` — Afrin-Specific Events; startDate=1596; endDate=(none); Sharafname Historical Documentation

**Current source text:**

```text
In 1596 Sharafkhan Bidlisi wrote the Sharafnama, which documents the history of the Mend (Kilis) emirate from an informed contemporary position.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0291

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[145].mainEvent` — Afrin-Specific Events; startDate=1600; endDate=1700; Canpolat Castle Abandonment

**Current source text:**

```text
Canpolat Castle Abandonment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0292

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[145].additionalInfo` — Afrin-Specific Events; startDate=1600; endDate=1700; Canpolat Castle Abandonment

**Current source text:**

```text
With the spread of gunpowder and firearms, the Canpolat castle lost its usefulness, was abandoned and later fell into ruin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0293

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[146].mainEvent` — Afrin-Specific Events; startDate=1600; endDate=1700; Mendi Emirate Period

**Current source text:**

```text
Mendi Emirate Period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0294

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[146].additionalInfo` — Afrin-Specific Events; startDate=1600; endDate=1700; Mendi Emirate Period

**Current source text:**

```text
The Mendî family ruled Kilis, Azaz, the Mountain of the Kurds (Çiyayê Kurmênc) and Cûmê as an independent emirate until the early 17th century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0295

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[147].mainEvent` — Afrin-Specific Events; startDate=1607; endDate=(none); Canpolat Rebellion Crushed

**Current source text:**

```text
Canpolat Rebellion Crushed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0296

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[147].additionalInfo` — Afrin-Specific Events; startDate=1607; endDate=(none); Canpolat Rebellion Crushed

**Current source text:**

```text
In November 1607 the Kurdish Canpolad rebellion against the Ottomans was crushed: Ali Pasha Canpolad's army was defeated near Belen with around 27,000 soldiers killed.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0297

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[148].mainEvent` — Afrin-Specific Events; startDate=1607; endDate=1918; Kurdish Tribal Uprisings

**Current source text:**

```text
Kurdish Tribal Uprisings
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0298

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[148].additionalInfo` — Afrin-Specific Events; startDate=1607; endDate=1918; Kurdish Tribal Uprisings

**Current source text:**

```text
From the fall of the Canpolads in 1607 until the end of Ottoman rule, Kurdish tribal leaders of the region - the Gênc family, the Reşî chiefs (Weli Agha, Khalil Agha), Hesen Efendi and the 'Umê family - repeatedly rose against or defied Ottoman authority, particularly in the 19th century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0299

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[149].mainEvent` — Afrin-Specific Events; startDate=1611; endDate=(none); Canpolad Dynasty Ends

**Current source text:**

```text
Canpolad Dynasty Ends
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0300

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[149].additionalInfo` — Afrin-Specific Events; startDate=1611; endDate=(none); Canpolad Dynasty Ends

**Current source text:**

```text
Ali Pasha Canpolad, the last emir of the Mendî family, was killed at the fortress of Belgrade around 1611, after his defeat in 1607, and his head was sent to Istanbul. Al-Ghazzi writes that he had risen against the state again and was killed for that. With his death the Kurdish emirate of Kilis came to an end, and the Mendî family, its rulers for four hundred years, was removed from the political stage.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0301

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[150].mainEvent` — Afrin-Specific Events; startDate=1620; endDate=1737; Robari Rule at Basûtê

**Current source text:**

```text
Robari Rule at Basûtê
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0302

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[150].additionalInfo` — Afrin-Specific Events; startDate=1620; endDate=1737; Robari Rule at Basûtê

**Current source text:**

```text
Lescot relates that after Ali Pasha the Canpolad was killed, a Kurd of the Berwarî tribe, of the Robarî branch, who held high standing in Istanbul, was sent to Kilis as ruler in 1620. His sons and grandsons settled in Çiyayê Kurmênc, made the castle of Basûtê their seat, and brought the bend of the Afrin river under their hand. Their rule there lasted about a hundred years, until the Gênc took the castle from them around 1737.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0303

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[151].mainEvent` — Afrin-Specific Events; startDate=1620; endDate=(none); Topele House Construction (circa 1620 CE, Eastern-Calendar Year 1032)

**Current source text:**

```text
Topele House Construction (circa 1620 CE, Eastern-Calendar Year 1032)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0304

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[151].additionalInfo` — Afrin-Specific Events; startDate=1620; endDate=(none); Topele House Construction (circa 1620 CE, Eastern-Calendar Year 1032)

**Current source text:**

```text
A house at Topelê Mehmûd in the Bilbil area carries the construction date March 1032 in Ottoman script, a year of the Eastern solar calendar. Eli notes that the Eastern year 1412 corresponded to 2002 CE, which places the house about 382 years earlier, around 1620 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0305

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[152].mainEvent` — Afrin-Specific Events; startDate=1624; endDate=(none); Umîkê Authority Established

**Current source text:**

```text
Umîkê Authority Established
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0306

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[152].additionalInfo` — Afrin-Specific Events; startDate=1624; endDate=(none); Umîkê Authority Established

**Current source text:**

```text
'Umîkê Kalê (Kal Agha) established a regional authority over many tribal groups of Çiyayê Kurmênc under nominal Ottoman rule, before its destruction in the early eighteenth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0307

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[153].mainEvent` — Afrin-Specific Events; startDate=1624; endDate=(none); Umîkê Meraş Rule

**Current source text:**

```text
Umîkê Meraş Rule
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0308

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[153].additionalInfo` — Afrin-Specific Events; startDate=1624; endDate=(none); Umîkê Meraş Rule

**Current source text:**

```text
By family tradition, the house of 'Umîkê ruled the Maraş region about four hundred years before the book's writing (around the early 17th century), before being driven out by the Ottomans.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0309

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[154].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=1800; Basûtê Castle Era

**Current source text:**

```text
Basûtê Castle Era
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0310

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[154].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=1800; Basûtê Castle Era

**Current source text:**

```text
In the 18th century the Basûtê castle was ruled by Kurdish tribal families (the Robarî, then the Gênc and Omer Agha families), with an estimated population of 2,000-3,000 people.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0311

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[155].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=1900; Dina Tribe Dominance in Cûmê and Lêlûn

**Current source text:**

```text
Dina Tribe Dominance in Cûmê and Lêlûn
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0312

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[155].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=1900; Dina Tribe Dominance in Cûmê and Lêlûn

**Current source text:**

```text
Throughout the eighteenth and nineteenth centuries the Dina were the largest and most powerful tribe in the Cûmê plain and on Mount Lêlûn. The Dina are Yezidis by religion, and their villages spread across the Cûmê plain along the left bank of the Afrin river and over a large part of Mount Lêlûn.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0313

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[156].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=(none); Dîkê Tribe Leadership

**Current source text:**

```text
Dîkê Tribe Leadership
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0314

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[156].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=(none); Dîkê Tribe Leadership

**Current source text:**

```text
In the late seventeenth century the Dîkê family, under its chief Cîhangîr, led the Amka tribe; after Cîhangîr's killing the leadership passed to the Êĥûka family.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0315

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[157].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=(none); Hesen Efendi Rises

**Current source text:**

```text
Hesen Efendi Rises
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0316

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[157].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=(none); Hesen Efendi Rises

**Current source text:**

```text
Hesen Efendi emerged as a significant figure in the Afrin region at the beginning of the eighteenth century and received the robe of Baybegî (Kurkê Baybegîtiyê) from the Ottoman state.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0317

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[158].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=(none); Paşe Title Origins

**Current source text:**

```text
Paşe Title Origins
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0318

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[158].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=(none); Paşe Title Origins

**Current source text:**

```text
The Paşe designation among the Şikak of the Afrin region appears to have been received from the Ottoman state at the beginning of the eighteenth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0319

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[159].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=(none); Reshi Regional Control

**Current source text:**

```text
Reshi Regional Control
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0320

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[159].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=(none); Reshi Regional Control

**Current source text:**

```text
In the eighteenth century the Reşî tribe, led by Haji Omer's family, held sway in the districts of Kilis and Cûmê (Jumah).
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0321

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[160].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=(none); Tribal Migration Period

**Current source text:**

```text
Tribal Migration Period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0322

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[160].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=(none); Tribal Migration Period

**Current source text:**

```text
The Şikak, Şêxan (Sheikhan) and Oqçe Ezdîn (Biyan) tribes were relative newcomers to the mountain, present around Kilis and the Afrin district by the early 18th century, having come from Eastern Kurdistan, Birecik and the Reşwan lands south of Malatya.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0323

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[161].mainEvent` — Afrin-Specific Events; startDate=1700; endDate=(none); Umîkê Authority Destroyed

**Current source text:**

```text
Umîkê Authority Destroyed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0324

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[161].additionalInfo` — Afrin-Specific Events; startDate=1700; endDate=(none); Umîkê Authority Destroyed

**Current source text:**

```text
At the beginning of the eighteenth century the Ottoman Empire, helped by the Şêxan tribe, destroyed the authority of 'Umîkê Kalê; his family scattered to the surrounding areas.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0325

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[162].mainEvent` — Afrin-Specific Events; startDate=1701; endDate=(none); Êĥoka Family Ascension

**Current source text:**

```text
Êĥoka Family Ascension
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0326

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[162].additionalInfo` — Afrin-Specific Events; startDate=1701; endDate=(none); Êĥoka Family Ascension

**Current source text:**

```text
At the beginning of the eighteenth century the Êĥoka family of Qêsim took the leadership of the Amka tribe, under whom the Amka held sway between Kilis and the Amuq plain.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0327

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[163].mainEvent` — Afrin-Specific Events; startDate=1724; endDate=1736; Ashiq Rule in Kilis

**Current source text:**

```text
Ashiq Rule in Kilis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0328

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[163].additionalInfo` — Afrin-Specific Events; startDate=1724; endDate=1736; Ashiq Rule in Kilis

**Current source text:**

```text
In 1724 the headship of the government of Kilis was handed by proxy to Ashiqli Ali Agha, called Ali Agha the Ashiq. Many problems arose in his time and the people of Kilis rose against him. The History of Kilis gives his rule as 1724 to 1736, while another passage in Eli says the headship was handed for two years. During that rule the Robarî leaders Isma'il Agha and Abdin Agha also rose against the ruler of Kilis, and a large force sent by the governor of Aleppo killed them both.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0329

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[164].mainEvent` — Afrin-Specific Events; startDate=1736; endDate=1737; Gênc Family Arrives and Takes Basûtê

**Current source text:**

```text
Gênc Family Arrives and Takes Basûtê
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0330

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[164].additionalInfo` — Afrin-Specific Events; startDate=1736; endDate=1737; Gênc Family Arrives and Takes Basûtê

**Current source text:**

```text
In 1737 a group of Kurds known as the Gêncî came to Çiyayê Kurmênc from the direction of the Konya district. Lescot dates their coming to 1736 and their seizure of the Basûtê castle from the Robarî to the Hijri year 1150, which is 1737 or 1738. A popular saying adds that when the Gênc first came to the Cûmê plain they asked leave of the Qedûr family of the Hesen Efendi house of Keferdelê, which then held sway in those parts. In 1740 their leader Betal Agha took power in Kilis as well.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0331

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[165].mainEvent` — Afrin-Specific Events; startDate=1736; endDate=(none); Kurdish Kilis Raids

**Current source text:**

```text
Kurdish Kilis Raids
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0332

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[165].additionalInfo` — Afrin-Specific Events; startDate=1736; endDate=(none); Kurdish Kilis Raids

**Current source text:**

```text
In 1736 the Kurds of Çiyayê Kurmênc twice crossed into Kilis, causing great damage and carrying off a hundred inhabitants as captives.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0333

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[166].mainEvent` — Afrin-Specific Events; startDate=1740; endDate=1808; Genc Kilis Control

**Current source text:**

```text
Genc Kilis Control
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0334

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[166].additionalInfo` — Afrin-Specific Events; startDate=1740; endDate=1808; Genc Kilis Control

**Current source text:**

```text
The Gênc family's involvement in the rule of Kilis ran from Betal Agha's takeover in 1740 to Omer Agha's loss of the city and failed attempt to regain it in 1808, with many interruptions.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0335

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[167].mainEvent` — Afrin-Specific Events; startDate=1742; endDate=(none); Haji Omer Becomes Derebeg

**Current source text:**

```text
Haji Omer Becomes Derebeg
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0336

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[167].additionalInfo` — Afrin-Specific Events; startDate=1742; endDate=(none); Haji Omer Becomes Derebeg

**Current source text:**

```text
Haji Omer, a leader of the Reşwan tribe living at Qocanli near Kilis, received the title of Derebeg, and the Ottoman state entrusted the lordship of the Mountain of the Kurds to him. It stayed in his hands until his death. Eli gives the year as 1742 in the family chapter and, citing Qadiri's History of Kilis, as 1743.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0337

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[168].mainEvent` — Afrin-Specific Events; startDate=1750; endDate=1825; Genc-Omer Coalition

**Current source text:**

```text
Genc-Omer Coalition
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0338

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[168].additionalInfo` — Afrin-Specific Events; startDate=1750; endDate=1825; Genc-Omer Coalition

**Current source text:**

```text
The Gênc and Omer Agha families ruled the Basûtê castle in the second half of the eighteenth century and the first quarter of the nineteenth (roughly 1750-1825).
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0339

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[169].mainEvent` — Afrin-Specific Events; startDate=1750; endDate=1850; Shexi Tribal Conflicts

**Current source text:**

```text
Shexi Tribal Conflicts
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0340

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[169].additionalInfo` — Afrin-Specific Events; startDate=1750; endDate=1850; Shexi Tribal Conflicts

**Current source text:**

```text
From the eighteenth century to the mid-nineteenth, the Şêxan tribe repeatedly fought the Reşî and Biyan tribes, until the Şêxan victory of the 1850s.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0341

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[170].mainEvent` — Afrin-Specific Events; startDate=1759; endDate=(none); Berbene House Built

**Current source text:**

```text
Berbene House Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0342

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[170].additionalInfo` — Afrin-Specific Events; startDate=1759; endDate=(none); Berbene House Built

**Current source text:**

```text
A house in the village of Berbenê carries the building date 1173 of the Hijra, which corresponds to 1759 or 1760 CE. Eli lists it among the district's older dated houses, alongside nineteenth-century houses at Maratê and Gundê Mezin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0343

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[171].mainEvent` — Afrin-Specific Events; startDate=1770; endDate=1800; Genc-Efendi Conflict

**Current source text:**

```text
Genc-Efendi Conflict
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0344

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[171].additionalInfo` — Afrin-Specific Events; startDate=1770; endDate=1800; Genc-Efendi Conflict

**Current source text:**

```text
In the last third of the eighteenth century conflicts arose between the Gênc family and the Qedûr family of the Hesen Efendi house, which had held sway in the Cûmê plain when the Gênc first arrived.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0345

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[172].mainEvent` — Afrin-Specific Events; startDate=1774; endDate=(none); Reshi Tribe Census

**Current source text:**

```text
Reshi Tribe Census
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0346

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[172].additionalInfo` — Afrin-Specific Events; startDate=1774; endDate=(none); Reshi Tribe Census

**Current source text:**

```text
In 1774 Niebuhr reported a tribe of 12,000 tents wintering around Aleppo, which Lerch identifies (tentatively) with the Reşwan/Reşî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0347

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[173].mainEvent` — Afrin-Specific Events; startDate=1779; endDate=(none); Sheikh Khalid Birth

**Current source text:**

```text
Sheikh Khalid Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0348

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[173].additionalInfo` — Afrin-Specific Events; startDate=1779; endDate=(none); Sheikh Khalid Birth

**Current source text:**

```text
Sheikh Khalid al-Shahrazuri, the Kurdish sheikh who later introduced the Naqshbandi order to the Middle East, was born in 1779.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0349

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[174].mainEvent` — Afrin-Specific Events; startDate=1786; endDate=(none); Khalil Agha House

**Current source text:**

```text
Khalil Agha House
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0350

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[174].additionalInfo` — Afrin-Specific Events; startDate=1786; endDate=(none); Khalil Agha House

**Current source text:**

```text
The house of Khalil Agha in the village of Basilê carries a dated facade inscription of 1200 AH / 1786 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0351

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[175].mainEvent` — Afrin-Specific Events; startDate=1793; endDate=(none); Hesen Efendi's Rebellion and Execution

**Current source text:**

```text
Hesen Efendi's Rebellion and Execution
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0352

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[175].additionalInfo` — Afrin-Specific Events; startDate=1793; endDate=(none); Hesen Efendi's Rebellion and Execution

**Current source text:**

```text
In 1793 Hesen Efendi rose against the Ottoman authority and laid his hand on some areas of Çiyayê Kurmênc. For a short time he displayed independence and collected tribute from the districts around Aleppo. In the end the governor of Aleppo captured him by a ruse and hanged him at Serê Kaniyê, the village of Kefercenê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0353

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[176].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=(none); Bilbil Battle Aftermath

**Current source text:**

```text
Bilbil Battle Aftermath
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0354

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[176].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=(none); Bilbil Battle Aftermath

**Current source text:**

```text
The battle of Bilbil, fought near the town of Bilbil between the Şêxan tribes and the Biyaniyên Reşî at the beginning of the nineteenth century, cost the Şêxan leader Bekir Agha his life.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0355

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[177].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=(none); Ceqilme Family Emerges

**Current source text:**

```text
Ceqilme Family Emerges
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0356

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[177].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=(none); Ceqilme Family Emerges

**Current source text:**

```text
The Mala Çêqilme, an old family of the Şêxan tribe, became prominent in the nineteenth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0357

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[178].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=1900; Kurmanc Social Transformation

**Current source text:**

```text
Kurmanc Social Transformation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0358

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[178].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=1900; Kurmanc Social Transformation

**Current source text:**

```text
In the nineteenth century, Kurmanc Mountain society passed from tribal relations to new social structures. The strengthening of central Ottoman rule and the abolition of the independent local emirates removed the old chiefs, and a new aristocracy of landowning men of wealth formed in their place. Lescot was struck by how far the tribal bonds had decayed. Populations like the Biyan and Şêxan, cohesive enough to make war on each other less than a century earlier, were by his day on the road to disappearance.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0359

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[179].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=(none); Ottoman Biyan Period

**Current source text:**

```text
Ottoman Biyan Period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0360

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[179].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=(none); Ottoman Biyan Period

**Current source text:**

```text
The Biyan, a branch of the Reşî tribe, appear in Ottoman documents under the names Oqçe 'Ezdîn, Oqçe 'Ezenlî and 'Ezê. The nineteenth-century scholar Lerch counted the tribe at 500 households, with its home near Kilis.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0361

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[180].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=(none); Ottoman Decline in Region

**Current source text:**

```text
Ottoman Decline in Region
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0362

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[180].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=(none); Ottoman Decline in Region

**Current source text:**

```text
Around the turn of the nineteenth century Ottoman authority in the Afrin region was weak, obliging the state to appease powerful local families such as the 'Umê and 'Umer Sefûna houses.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0363

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[181].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=(none); Êmir-Êĥûka Conflict

**Current source text:**

```text
Êmir-Êĥûka Conflict
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0364

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[181].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=(none); Êmir-Êĥûka Conflict

**Current source text:**

```text
In the late eighteenth and early nineteenth centuries the Êmir and Êĥûka families fought for years over the leadership of the Amka tribe.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0365

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[182].mainEvent` — Afrin-Specific Events; startDate=1800; endDate=(none); Şikak conflict with Ottomans

**Current source text:**

```text
Şikak conflict with Ottomans
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0366

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[182].additionalInfo` — Afrin-Specific Events; startDate=1800; endDate=(none); Şikak conflict with Ottomans

**Current source text:**

```text
Relations between the Şikak tribe and the Ottoman authorities in the Afrin region were mostly hostile, with many armed incidents, including the arrest and exile to Egypt of the Şikak leader Ali Beg.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0367

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[183].mainEvent` — Afrin-Specific Events; startDate=1801; endDate=(none); Kilis Power Struggle

**Current source text:**

```text
Kilis Power Struggle
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0368

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[183].additionalInfo` — Afrin-Specific Events; startDate=1801; endDate=(none); Kilis Power Struggle

**Current source text:**

```text
In 1801 Mustafa Beg son of Topel took over the rule of Kilis and built up a complete emirate, but he oppressed the inhabitants so heavily that the people rose and killed him. In the same year Kilis was handed to Omer Agha of the 'Umê family, but a former ruler, Sma'îl Agha, known as Agha Me'cun, seized the city from him. Eli suggests Agha Me'cun may be the ancestor of the Me'cun family of the village of Qitmê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0369

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[184].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=1832; Betal Agha II Rules from Basûtê

**Current source text:**

```text
Betal Agha II Rules from Basûtê
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0370

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[184].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=1832; Betal Agha II Rules from Basûtê

**Current source text:**

```text
Betal Agha the Second, son of Betal Agha the Gênc, who had once ruled Kilis, ruled from the Basûtê castle over the Cûmê plain and the regions of Çiyayê Kurmênc and Sem'an. He gathered the Kurds of those parts around himself, especially the Yezidis, and his main force was drawn from the men of the Dina tribe. He stretched his hand to the surroundings of Aleppo, took tribute from them, and acted as if he were separate from the Ottoman state. His rule lasted until his death in 1832. One passage in Eli places his Dina force at the beginning of the eighteenth century, though the same book dates his killing to 1832.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0371

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[185].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=(none); Brothers Settlement Division

**Current source text:**

```text
Brothers Settlement Division
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0372

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[185].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=(none); Brothers Settlement Division

**Current source text:**

```text
After Omer Agha's death, his eldest son Betal settled in the village of Celemê while his son Îbiş settled in the village of Îska.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0373

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[186].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=1830; Mala Ume Expansion

**Current source text:**

```text
Mala Ume Expansion
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0374

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[186].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=1830; Mala Ume Expansion

**Current source text:**

```text
From 1808 the 'Umê family expanded over the southern Cûmê plain, gathered the largely Yezidi villagers of the Dina tribe around itself, took the castles of Basûtê and Sem'an, and levied tribute up to the outskirts of Aleppo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0375

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[187].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=(none); Mihemed Qasim Death

**Current source text:**

```text
Mihemed Qasim Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0376

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[187].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=(none); Mihemed Qasim Death

**Current source text:**

```text
Mihemed, son of Qasim Agha of the Haji 'Umer zade family, died in 1223 AH / 1808 CE, as recorded on his gravestone at Sêwiya.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0377

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[188].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=1839; Omer Agha Meets the Sultan

**Current source text:**

```text
Omer Agha Meets the Sultan
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0378

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[188].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=1839; Omer Agha Meets the Sultan

**Current source text:**

```text
The 'Umê family relate that when the Ottoman Sultan Mahmud the Second, who reigned from 1808 to 1839, was passing through the north of the Çiyayê Kurmênc district, Omer Agha set out, met the Sultan's caravan near the town of Islahiye, and asked for an audience with him.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0379

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[189].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=(none); Omer Axa Control Attempt in Kilis

**Current source text:**

```text
Omer Axa Control Attempt in Kilis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0380

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[189].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=(none); Omer Axa Control Attempt in Kilis

**Current source text:**

```text
In 1808 Omer Agha attempted to retake control of Kilis, besieging it for three months, but failed and returned to the Cûmê plain.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0381

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[190].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=(none); Ottoman Attack on Sêwiya

**Current source text:**

```text
Ottoman Attack on Sêwiya
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0382

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[190].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=(none); Ottoman Attack on Sêwiya

**Current source text:**

```text
At the beginning of the nineteenth century Ottoman troops carried out a great attack on the village of Sêwiya and killed about forty of its people. Some of the victims' graves are still at Sêwiya, with dates of 1223 to 1225 AH, which is 1808 to 1810 CE. The 'Umîkê family say their people were killed in the wars with the Şêxan tribe and with the Ottoman soldiers.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0383

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[191].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=(none); Qisla Fortress Built

**Current source text:**

```text
Qisla Fortress Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0384

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[191].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=(none); Qisla Fortress Built

**Current source text:**

```text
After Omer Agha's failed attempt on Kilis, the 'Umê family took control of the southern Cûmê plain and built a protected garrison beside the village of Hemamê, known as Qişla Omer Axa.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0385

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[192].mainEvent` — Afrin-Specific Events; startDate=1808; endDate=(none); Teqilke Castle Construction

**Current source text:**

```text
Teqilke Castle Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0386

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[192].additionalInfo` — Afrin-Specific Events; startDate=1808; endDate=(none); Teqilke Castle Construction

**Current source text:**

```text
The 'Umê family repaired the ancient structure known as Kela Teqilkê on Mount Lêlûn east of the village of Îska and made it their headquarters.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0387

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[193].mainEvent` — Afrin-Specific Events; startDate=1810; endDate=(none); Ehmed Umer Death

**Current source text:**

```text
Ehmed Umer Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0388

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[193].additionalInfo` — Afrin-Specific Events; startDate=1810; endDate=(none); Ehmed Umer Death

**Current source text:**

```text
Ehmed, son of 'Umer Agha of the Haji 'Umer zade family, died in 1225 AH / 1810 CE, as recorded on his gravestone at Sêwiya.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0389

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[194].mainEvent` — Afrin-Specific Events; startDate=1810; endDate=(none); Zize Mother Death

**Current source text:**

```text
Zize Mother Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0390

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[194].additionalInfo` — Afrin-Specific Events; startDate=1810; endDate=(none); Zize Mother Death

**Current source text:**

```text
Zîzê, mother of Ehmed Agha, died in 1225 AH, which is 1810 or 1811 CE, as recorded on her gravestone at Sêwiya. The 'Umîkê family say their people were killed in the wars with the Şêxan tribe and with the Ottoman soldiers.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0391

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[195].mainEvent` — Afrin-Specific Events; startDate=1814; endDate=(none); Shorbeh Hill Executions

**Current source text:**

```text
Shorbeh Hill Executions
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0392

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[195].additionalInfo` — Afrin-Specific Events; startDate=1814; endDate=(none); Shorbeh Hill Executions

**Current source text:**

```text
Several men of the Şorbe family were executed by the Ottoman state, many of them reportedly hanged on the hill of Bîrê between the villages of Şorbe and Germrûk.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0393

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[196].mainEvent` — Afrin-Specific Events; startDate=1814; endDate=(none); Shorbeh Leader Dies

**Current source text:**

```text
Shorbeh Leader Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0394

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[196].additionalInfo` — Afrin-Specific Events; startDate=1814; endDate=(none); Shorbeh Leader Dies

**Current source text:**

```text
Mihemed Emîn Agha of the Şorbe family died in 1230 AH / 1814 CE, as recorded on his gravestone.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0395

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[197].mainEvent` — Afrin-Specific Events; startDate=1818; endDate=(none); Ibrahim Axa Death

**Current source text:**

```text
Ibrahim Axa Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0396

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[197].additionalInfo` — Afrin-Specific Events; startDate=1818; endDate=(none); Ibrahim Axa Death

**Current source text:**

```text
Îbrahîm Agha died in 1234 AH / 1818 CE, as recorded on his gravestone in the Sêwiya cemetery.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0397

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[198].mainEvent` — Afrin-Specific Events; startDate=1823; endDate=(none); Wali Opposition Failed

**Current source text:**

```text
Wali Opposition Failed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0398

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[198].additionalInfo` — Afrin-Specific Events; startDate=1823; endDate=(none); Wali Opposition Failed

**Current source text:**

```text
In 1823 Ibrahim Pasha of Antep, ruler of Kilis, wanting to strengthen his rule, sent his soldiers against Çiyayê Kurmênc to remove Weli Agha from the field, but he did not prevail in the fight.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0399

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[199].mainEvent` — Afrin-Specific Events; startDate=1824; endDate=(none); Sheikh Mihemed Birth

**Current source text:**

```text
Sheikh Mihemed Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0400

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[199].additionalInfo` — Afrin-Specific Events; startDate=1824; endDate=(none); Sheikh Mihemed Birth

**Current source text:**

```text
Sheikh Mihemed, of the Bablît sheikhs and father of Sheikh Ebdilhenan, was born in 1824 according to his Ottoman identity paper.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0401

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[200].mainEvent` — Afrin-Specific Events; startDate=1826; endDate=(none); Shahrazori Sheikh Death

**Current source text:**

```text
Shahrazori Sheikh Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0402

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[200].additionalInfo` — Afrin-Specific Events; startDate=1826; endDate=(none); Shahrazori Sheikh Death

**Current source text:**

```text
Sheikh Khalid al-Shahrazuri, who brought the Naqshbandi order into the Middle East, died in 1826.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0403

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[201].mainEvent` — Afrin-Specific Events; startDate=1830; endDate=(none); Egyptian Syria Occupation

**Current source text:**

```text
Egyptian Syria Occupation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0404

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[201].additionalInfo` — Afrin-Specific Events; startDate=1830; endDate=(none); Egyptian Syria Occupation

**Current source text:**

```text
Ibrahim Pasha, son of Muhammad Ali Pasha of Egypt, occupied Syria and pushed the Ottomans into western Anatolia in the early 1830s.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0405

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[202].mainEvent` — Afrin-Specific Events; startDate=1830; endDate=(none); Mihemed Betal Birth

**Current source text:**

```text
Mihemed Betal Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0406

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[202].additionalInfo` — Afrin-Specific Events; startDate=1830; endDate=(none); Mihemed Betal Birth

**Current source text:**

```text
Mihemed, son of Betal Agha II and ancestor of the present Gênc family, was born around 1830.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0407

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[203].mainEvent` — Afrin-Specific Events; startDate=1832; endDate=(none); Betal Agha II Hanged in Aleppo

**Current source text:**

```text
Betal Agha II Hanged in Aleppo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0408

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[203].additionalInfo` — Afrin-Specific Events; startDate=1832; endDate=(none); Betal Agha II Hanged in Aleppo

**Current source text:**

```text
In 1832 Ibrahim Pasha, through mediators who claimed to want reconciliation, invited Betal Agha the Second to Aleppo and treacherously hanged him below the citadel, together with his son Îbiş and his attendant 'Eliyê Şindî of the village of Maratê. Their bodies were buried outside Aleppo. With his death his power in the Cûmê plain collapsed.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0409

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[204].mainEvent` — Afrin-Specific Events; startDate=1832; endDate=(none); Robari Expansion Era

**Current source text:**

```text
Robari Expansion Era
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0410

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[204].additionalInfo` — Afrin-Specific Events; startDate=1832; endDate=(none); Robari Expansion Era

**Current source text:**

```text
After Betal Agha the Second was killed in 1832 and his power in the Cûmê plain collapsed, the Robarî breathed again. They laid their hands on parts of the Cûmê plain and Şêrewa and on districts with Arab inhabitants such as Niblê, Tininb, Dêrcimêl and Tilrifad, reaching the areas by the Quweiq river north and east of Aleppo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0411

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[205].mainEvent` — Afrin-Specific Events; startDate=1836; endDate=(none); Kilis Property Dispute

**Current source text:**

```text
Kilis Property Dispute
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0412

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[205].additionalInfo` — Afrin-Specific Events; startDate=1836; endDate=(none); Kilis Property Dispute

**Current source text:**

```text
In 1836 Zêneb Xatûn, Weli Agha's wife, visited the Kilis council to reclaim part of Weli Agha's confiscated properties and had some returned to her.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0413

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[206].mainEvent` — Afrin-Specific Events; startDate=1839; endDate=1861; Sinjar Yazidi Campaign

**Current source text:**

```text
Sinjar Yazidi Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0414

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[206].additionalInfo` — Afrin-Specific Events; startDate=1839; endDate=1861; Sinjar Yazidi Campaign

**Current source text:**

```text
In the time of Sultan Abdulmejid, who reigned from 1839 to 1861, Weli Agha led a campaign against the Yezidis of Sinjar as the condition of his Ottoman pardon, and he carried it through successfully.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0415

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[207].mainEvent` — Afrin-Specific Events; startDate=1849; endDate=(none); Kurdish Leader Death

**Current source text:**

```text
Kurdish Leader Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0416

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[207].additionalInfo` — Afrin-Specific Events; startDate=1849; endDate=(none); Kurdish Leader Death

**Current source text:**

```text
Mihemed, son of Haji Ali the Kurd, died in the month of Rajab 1266 AH / 1849 CE, as recorded on his gravestone at the Henên shrine cemetery.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0417

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[208].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=1900; Afrin Arab Settlement

**Current source text:**

```text
Afrin Arab Settlement
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0418

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[208].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=1900; Afrin Arab Settlement

**Current source text:**

```text
Arab settlement in the Afrin region began with individual families arriving between the first half of the nineteenth century and the beginning of the twentieth.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0419

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[209].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=(none); Biyan Leadership Change

**Current source text:**

```text
Biyan Leadership Change
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0420

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[209].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=(none); Biyan Leadership Change

**Current source text:**

```text
From the mid-nineteenth century the Sheikh Sim'el family took over the leadership of the Biyan region.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0421

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[210].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=(none); Mihmedian Land Grant

**Current source text:**

```text
Mihmedian Land Grant
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0422

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[210].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=(none); Mihmedian Land Grant

**Current source text:**

```text
In the mid-nineteenth century the Mihmedians' ancestors received the lands between Kefirsefrê and Cindirês as a grant from Hewe Xatûn of the 'Umê family for standing with her against Khalil Agha.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0423

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[211].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=1900; Niemi Settlement Wave

**Current source text:**

```text
Niemi Settlement Wave
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0424

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[211].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=1900; Niemi Settlement Wave

**Current source text:**

```text
The first wave of Arab settlement began with families from the Ni'êmî tribe, followed by the Cês and then the 'Umêrat tribes, arriving household by household.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0425

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[212].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=(none); Shexi Tribal Victory

**Current source text:**

```text
Shexi Tribal Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0426

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[212].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=(none); Shexi Tribal Victory

**Current source text:**

```text
In 1850 the final battle between the Reşî and Amka tribes on one side and the Şêxan, helped by the Ottomans, on the other ended in a Şêxan victory that reached as far as Bilbil. Two Şêxan leaders fell in it, Bekir Agha son of Reş Agha and his brother Omer Agha, and they were buried in the cemetery of Gir beside Reco. Eli's passage prints the year as 1850 or 1952, the second figure clearly a misprint. Lescot also gives 1850 for the last war.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0427

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[213].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=(none); Tribal Assassination Crisis

**Current source text:**

```text
Tribal Assassination Crisis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0428

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[213].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=(none); Tribal Assassination Crisis

**Current source text:**

```text
In the mid-nineteenth century, conflict between the Şikak and Amka tribes culminated in the assassination of Şorbe Agha by a Şikakî man, with suspected involvement of the Ottoman governor of Aleppo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0429

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[214].mainEvent` — Afrin-Specific Events; startDate=1850; endDate=(none); Umerat Tribe Migration

**Current source text:**

```text
Umerat Tribe Migration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0430

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[214].additionalInfo` — Afrin-Specific Events; startDate=1850; endDate=(none); Umerat Tribe Migration

**Current source text:**

```text
The 'Umêrat tribe probably began settling in the Afrin region in the second half of the nineteenth century, and is recorded there in the 1904 Ottoman yearbook.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0431

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[215].mainEvent` — Afrin-Specific Events; startDate=1852; endDate=(none); Wali Memorial Poem

**Current source text:**

```text
Wali Memorial Poem
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0432

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[215].additionalInfo` — Afrin-Specific Events; startDate=1852; endDate=(none); Wali Memorial Poem

**Current source text:**

```text
The poem by Heqî Efendi commemorating Weli Agha's death carries the date 1269 AH, equated with 1852 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0433

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[216].mainEvent` — Afrin-Specific Events; startDate=1853; endDate=(none); Wali Kilis Death

**Current source text:**

```text
Wali Kilis Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0434

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[216].additionalInfo` — Afrin-Specific Events; startDate=1853; endDate=(none); Wali Kilis Death

**Current source text:**

```text
Weli Agha died in 1853 after ruling Kilis for ten years.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0435

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[217].mainEvent` — Afrin-Specific Events; startDate=1854; endDate=(none); Kilis Becomes a Qaymaqamlik

**Current source text:**

```text
Kilis Becomes a Qaymaqamlik
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0436

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[217].additionalInfo` — Afrin-Specific Events; startDate=1854; endDate=(none); Kilis Becomes a Qaymaqamlik

**Current source text:**

```text
In 1854 Kilis became a Qaymaqamlik, an administrative district governed by a qaymaqam, with Habib Pasha as its first qaymaqam. Because of Khalil Agha's power he could not carry out his duties, and little by little Khalil Agha rose even against the state.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0437

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[218].mainEvent` — Afrin-Specific Events; startDate=1854; endDate=(none); Xelil Military Battle

**Current source text:**

```text
Xelil Military Battle
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0438

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[218].additionalInfo` — Afrin-Specific Events; startDate=1854; endDate=(none); Xelil Military Battle

**Current source text:**

```text
State troops fought a day-long battle with Khalil Agha's forces beside the villages of Qernebiyê, Çeqela and Quzêniyê, defeating them and forcing Khalil Agha's surrender.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0439

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[219].mainEvent` — Afrin-Specific Events; startDate=1859; endDate=(none); Nebî Horî Mosque Built

**Current source text:**

```text
Nebî Horî Mosque Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0440

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[219].additionalInfo` — Afrin-Specific Events; startDate=1859; endDate=(none); Nebî Horî Mosque Built

**Current source text:**

```text
In 1859 a mosque was built in the courtyard of the Roman tower tomb at Sîros, beside the shrine of Nebî Horî. The hexagonal tower, the tomb of a Roman commander about ten metres high, serves as its minaret. The inhabitants of the surrounding villages perform their Friday and feast-day prayers there.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0441

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[220].mainEvent` — Afrin-Specific Events; startDate=1861; endDate=(none); Rrewwas Author Death

**Current source text:**

```text
Rrewwas Author Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0442

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[220].additionalInfo` — Afrin-Specific Events; startDate=1861; endDate=(none); Rrewwas Author Death

**Current source text:**

```text
Mihemed Elî El-Rrewwas, author of Bewarêq El-Ĥeqayêq, died in 1861.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0443

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[221].mainEvent` — Afrin-Specific Events; startDate=1866; endDate=(none); Dervish Aleppo Campaign

**Current source text:**

```text
Dervish Aleppo Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0444

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[221].additionalInfo` — Afrin-Specific Events; startDate=1866; endDate=(none); Dervish Aleppo Campaign

**Current source text:**

```text
Dervish, governor of Aleppo, personally led a large force against Khalil Agha in Çiyayê Kurmênc, obtaining his surrender shortly before his exile and death in 1866.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0445

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[222].mainEvent` — Afrin-Specific Events; startDate=1866; endDate=(none); Heyder Agha Birth

**Current source text:**

```text
Heyder Agha Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0446

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[222].additionalInfo` — Afrin-Specific Events; startDate=1866; endDate=(none); Heyder Agha Birth

**Current source text:**

```text
Elî Heyder, later known as Heyder Agha (1866-1921), was born in 1866 to Omer Agha of the 'Umê family.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0447

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[223].mainEvent` — Afrin-Specific Events; startDate=1866; endDate=(none); Sheikh Leadership Transition

**Current source text:**

```text
Sheikh Leadership Transition
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0448

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[223].additionalInfo` — Afrin-Specific Events; startDate=1866; endDate=(none); Sheikh Leadership Transition

**Current source text:**

```text
After Khalil Agha's death in 1866, the regional leadership passed to Sheikh Sim'el, a religious man of the Biyan branch and Khalil Agha's son-in-law.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0449

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[224].mainEvent` — Afrin-Specific Events; startDate=1866; endDate=(none); Xelil Cholera Death

**Current source text:**

```text
Xelil Cholera Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0450

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[224].additionalInfo` — Afrin-Specific Events; startDate=1866; endDate=(none); Xelil Cholera Death

**Current source text:**

```text
Qadiri's History of Kilis says Khalil Agha died in 1866 of cholera at the age of 27, in exile. Another account holds that the state killed him in the village of Qeyebaşê in the Islahiye area. Eli finds the second account the likelier, since the Ottoman authority was notorious for such deeds against its opponents.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0451

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[225].mainEvent` — Afrin-Specific Events; startDate=1868; endDate=(none); Iskenderun Road Project

**Current source text:**

```text
Iskenderun Road Project
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0452

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[225].additionalInfo` — Afrin-Specific Events; startDate=1868; endDate=(none); Iskenderun Road Project

**Current source text:**

```text
In 1868 the Ottoman state decided to open a road between Aleppo and Iskenderun passing through Kela Gobelê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0453

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[226].mainEvent` — Afrin-Specific Events; startDate=1880; endDate=(none); Zêdiyê Bridge Founded

**Current source text:**

```text
Zêdiyê Bridge Founded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0454

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[226].additionalInfo` — Afrin-Specific Events; startDate=1880; endDate=(none); Zêdiyê Bridge Founded

**Current source text:**

```text
On the second day of the Feast of Sacrifice in 1298 AH, which is 1880 CE, the governor of Aleppo Cemil Pasha laid the foundation stone of a great stone bridge over the Afrin river by the village of Zêdiyê in the Cûmê area. It was built in one year under the province's chief engineer, Qustentin Madirdis Efendi, and opened on the Feast of Sacrifice of 1299 AH. Al-Ghazzi's account of the bridge carries the date 1300 AH, which is 1882 CE.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0455

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[227].mainEvent` — Afrin-Specific Events; startDate=1882; endDate=(none); Afrin Bridge Opening

**Current source text:**

```text
Afrin Bridge Opening
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0456

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[227].additionalInfo` — Afrin-Specific Events; startDate=1882; endDate=(none); Afrin Bridge Opening

**Current source text:**

```text
In 1882 an opening ceremony was held for the new road and the bridge over the Afrin river at the site of the city of Afrin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0457

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[228].mainEvent` — Afrin-Specific Events; startDate=1882; endDate=(none); Kilis Road Construction

**Current source text:**

```text
Kilis Road Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0458

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[228].additionalInfo` — Afrin-Specific Events; startDate=1882; endDate=(none); Kilis Road Construction

**Current source text:**

```text
In 1882 construction began on a road between Kilis and Iskenderun, starting from Qitmê and passing through Afrin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0459

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[229].mainEvent` — Afrin-Specific Events; startDate=1882; endDate=(none); Land registration

**Current source text:**

```text
Land registration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0460

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[229].additionalInfo` — Afrin-Specific Events; startDate=1882; endDate=(none); Land registration

**Current source text:**

```text
In 1882 the boundaries of lands in the Syrian provinces were determined and registered.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0461

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[230].mainEvent` — Afrin-Specific Events; startDate=1882; endDate=(none); Sultan Shrine Inscription

**Current source text:**

```text
Sultan Shrine Inscription
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0462

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[230].additionalInfo` — Afrin-Specific Events; startDate=1882; endDate=(none); Sultan Shrine Inscription

**Current source text:**

```text
The door of the Sultan Sheikh Mus shrine carries an Ottoman-script inscription with the date 1300 AH (1882 CE) and the name Şêxmûsê 'Enzelî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0463

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[231].mainEvent` — Afrin-Specific Events; startDate=1885; endDate=(none); Roman Tower Renovation

**Current source text:**

```text
Roman Tower Renovation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0464

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[231].additionalInfo` — Afrin-Specific Events; startDate=1885; endDate=(none); Roman Tower Renovation

**Current source text:**

```text
A shrine was built in the small room under the Roman tower tomb at Sîros. The date of its construction, 1303 AH, which is 1885 CE, is written there.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0465

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[232].mainEvent` — Afrin-Specific Events; startDate=1890; endDate=(none); Afrin Agha Recognition

**Current source text:**

```text
Afrin Agha Recognition
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0466

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[232].additionalInfo` — Afrin-Specific Events; startDate=1890; endDate=(none); Afrin Agha Recognition

**Current source text:**

```text
Xelîl, son of Seydoyê Mîmê, was born in 1877 and was recognized with the title of Agha at the end of the nineteenth century, after the sons of Mîmê had grown rich and bought the village of Kanîgewrk.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0467

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[233].mainEvent` — Afrin-Specific Events; startDate=1890; endDate=(none); Dera Governor Appointment

**Current source text:**

```text
Dera Governor Appointment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0468

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[233].additionalInfo` — Afrin-Specific Events; startDate=1890; endDate=(none); Dera Governor Appointment

**Current source text:**

```text
At the end of the nineteenth century Mihemed Nuri Pasha of the 'Umer Sefûna family served as governor of the Der'a district, which is now in southern Syria. He was the only member of the family to receive a high post from the Ottoman state.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0469

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[234].mainEvent` — Afrin-Specific Events; startDate=1890; endDate=(none); Dina Lords Emerge

**Current source text:**

```text
Dina Lords Emerge
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0470

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[234].additionalInfo` — Afrin-Specific Events; startDate=1890; endDate=(none); Dina Lords Emerge

**Current source text:**

```text
At the end of the nineteenth century some members of the Dina tribe from the village of Xezîwê began to be recognized with the title of Agha. Before that the Dina had gathered around the Gênc house.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0471

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[235].mainEvent` — Afrin-Specific Events; startDate=1894; endDate=(none); Mirza Beg Dies

**Current source text:**

```text
Mirza Beg Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0472

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[235].additionalInfo` — Afrin-Specific Events; startDate=1894; endDate=(none); Mirza Beg Dies

**Current source text:**

```text
Mirza Beg, Emir (Prince) of the Yezidis, died in 1894.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0473

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[236].mainEvent` — Afrin-Specific Events; startDate=1898; endDate=(none); German Bridge Construction

**Current source text:**

```text
German Bridge Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0474

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[236].additionalInfo` — Afrin-Specific Events; startDate=1898; endDate=(none); German Bridge Construction

**Current source text:**

```text
In 1898 the Germans built a new bridge at the site of the city of Afrin; it stood until a flood destroyed it in 1974.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0475

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[237].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=1920; Armenian Refugee Settlement

**Current source text:**

```text
Armenian Refugee Settlement
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0476

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[237].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=1920; Armenian Refugee Settlement

**Current source text:**

```text
About 200 Armenian families fleeing the massacres of the Turkish army settled in Afrin in the early twentieth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0477

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[238].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Bobeni Tribe Migration

**Current source text:**

```text
Bobeni Tribe Migration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0478

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[238].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Bobeni Tribe Migration

**Current source text:**

```text
The Bobenî, an Arab tribal group from the Raqqa region, began settling in the Çiyayê Kurmênc district from the beginning of the twentieth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0479

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[239].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Cefer Family Rises

**Current source text:**

```text
Cefer Family Rises
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0480

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[239].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Cefer Family Rises

**Current source text:**

```text
The Mala Ce'fer family of the Şêxan emerged at the end of the nineteenth century and became prominent at the beginning of the twentieth.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0481

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[240].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Dike Family Ascension

**Current source text:**

```text
Dike Family Ascension
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0482

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[240].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Dike Family Ascension

**Current source text:**

```text
From the beginning of the twentieth century the Dîkê family regained the leadership of the Amka tribe, probably with the help of the Sheikh Sim'el family.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0483

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[241].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Kefirsefre Lords Elevated

**Current source text:**

```text
Kefirsefre Lords Elevated
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0484

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[241].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Kefirsefre Lords Elevated

**Current source text:**

```text
From the beginning of the twentieth century the lords of Kefirsefrê began to be recognized with the title of Agha.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0485

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[242].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Kor Ehmed Emerges

**Current source text:**

```text
Kor Ehmed Emerges
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0486

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[242].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Kor Ehmed Emerges

**Current source text:**

```text
The Mala Kor Ehmed (Mala Mistikê) family emerged at the end of the nineteenth century and the beginning of the twentieth.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0487

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[243].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Memila House Construction

**Current source text:**

```text
Memila House Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0488

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[243].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Memila House Construction

**Current source text:**

```text
The house in Me'mila in which Xelîl, son of Ehmedê Xelîl, still lives was built in 1900.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0489

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[244].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Qernebiye Village Leadership

**Current source text:**

```text
Qernebiye Village Leadership
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0490

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[244].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Qernebiye Village Leadership

**Current source text:**

```text
At the beginning of the twentieth century the Milĥim Zade family and Mûrad Agha Haji Omer lived in Qernebiyê village as leaders of the Haji Omer family.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0491

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[245].mainEvent` — Afrin-Specific Events; startDate=1900; endDate=(none); Sheikh Simel Appointment

**Current source text:**

```text
Sheikh Simel Appointment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0492

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[245].additionalInfo` — Afrin-Specific Events; startDate=1900; endDate=(none); Sheikh Simel Appointment

**Current source text:**

```text
Around the turn of the twentieth century the Sheikh Sim'el family's influence rose and Ahmed Sheikh Sim'el became a member of the Kilis administration.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0493

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[246].mainEvent` — Afrin-Specific Events; startDate=1903; endDate=(none); Dike Guesthouse Built

**Current source text:**

```text
Dike Guesthouse Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0494

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[246].additionalInfo` — Afrin-Specific Events; startDate=1903; endDate=(none); Dike Guesthouse Built

**Current source text:**

```text
The guesthouse of Seydê Dîkê in Dîkê village was built in 1903.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0495

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[247].mainEvent` — Afrin-Specific Events; startDate=1904; endDate=(none); Ottoman Arab Census

**Current source text:**

```text
Ottoman Arab Census
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0496

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[247].additionalInfo` — Afrin-Specific Events; startDate=1904; endDate=(none); Ottoman Arab Census

**Current source text:**

```text
The 1904 Ottoman yearbook of Aleppo province records the first census of Arabs in the region: 500 tents with 4000 Arabs from the 'Umêrat, Micademî, 'Icêl and Bettoş tribes in the districts of Kilis, Minbic, Sem'an and adjoining areas.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0497

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[248].mainEvent` — Afrin-Specific Events; startDate=1907; endDate=(none); Kefer Nebo Visit by Father Henry

**Current source text:**

```text
Kefer Nebo Visit by Father Henry
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0498

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[248].additionalInfo` — Afrin-Specific Events; startDate=1907; endDate=(none); Kefer Nebo Visit by Father Henry

**Current source text:**

```text
Father Henry Lamans visited Kefer Nebo in 1907 and described the woodland around the village.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0499

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[249].mainEvent` — Afrin-Specific Events; startDate=1911; endDate=(none); Afrin Railway Construction

**Current source text:**

```text
Afrin Railway Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0500

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[249].additionalInfo` — Afrin-Specific Events; startDate=1911; endDate=(none); Afrin Railway Construction

**Current source text:**

```text
The railway through the Afrin area was laid in 1911-1912, as dated on its iron posts.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0501

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[250].mainEvent` — Afrin-Specific Events; startDate=1913; endDate=(none); Husfatik Son Dies

**Current source text:**

```text
Husfatik Son Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0502

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[250].additionalInfo` — Afrin-Specific Events; startDate=1913; endDate=(none); Husfatik Son Dies

**Current source text:**

```text
Xelîl, son of Ĥusfatîk from the village of Gabeleka, a member of the secretive Qilûmpe association, died in 1913.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0503

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[251].mainEvent` — Afrin-Specific Events; startDate=1914; endDate=1918; Menan Front Service

**Current source text:**

```text
Menan Front Service
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0504

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[251].additionalInfo` — Afrin-Specific Events; startDate=1914; endDate=1918; Menan Front Service

**Current source text:**

```text
Menan Niyazî served as an Ottoman officer in the First World War on the Iraq front.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0505

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[252].mainEvent` — Afrin-Specific Events; startDate=1914; endDate=1918; Osmane Bolshevik Conversion

**Current source text:**

```text
Osmane Bolshevik Conversion
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0506

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[252].additionalInfo` — Afrin-Specific Events; startDate=1914; endDate=1918; Osmane Bolshevik Conversion

**Current source text:**

```text
Osmanê Hido of the Afrin region was captured during the First World War and influenced by Bolshevik ideas during his captivity.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0507

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[253].mainEvent` — Afrin-Specific Events; startDate=1915; endDate=(none); Ahmed Agha Marriage

**Current source text:**

```text
Ahmed Agha Marriage
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0508

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[253].additionalInfo` — Afrin-Specific Events; startDate=1915; endDate=(none); Ahmed Agha Marriage

**Current source text:**

```text
Ahmed Agha, son of Sheikh Sim'el, married the niece of Mir'î Pasha, governor of Aleppo, in 1915.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0509

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[254].mainEvent` — Afrin-Specific Events; startDate=1916; endDate=(none); Ahmed Sheikh Sim'el Dies

**Current source text:**

```text
Ahmed Sheikh Sim'el Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0510

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[254].additionalInfo` — Afrin-Specific Events; startDate=1916; endDate=(none); Ahmed Sheikh Sim'el Dies

**Current source text:**

```text
Ahmed, son of Sheikh Sim'el and a member of the governing body of Kilis, died in 1916.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0511

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[255].mainEvent` — Afrin-Specific Events; startDate=1918; endDate=(none); Ottoman Empire Collapses

**Current source text:**

```text
Ottoman Empire Collapses
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0512

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[255].additionalInfo` — Afrin-Specific Events; startDate=1918; endDate=(none); Ottoman Empire Collapses

**Current source text:**

```text
At the end of the First World War in 1918 the Ottoman Empire collapsed and Allied forces entered the eastern Mediterranean region.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0513

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[256].mainEvent` — Afrin-Specific Events; startDate=1918; endDate=(none); Sheikh Hussein Born

**Current source text:**

```text
Sheikh Hussein Born
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0514

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[256].additionalInfo` — Afrin-Specific Events; startDate=1918; endDate=(none); Sheikh Hussein Born

**Current source text:**

```text
Sheikh Husên, son of 'Elî, was born in 1918 in the village of Upper Kork (Korkê Jorin).
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0515

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[257].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); Attack on Mabeta Repelled

**Current source text:**

```text
Attack on Mabeta Repelled
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0516

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[257].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); Attack on Mabeta Repelled

**Current source text:**

```text
In 1919 people from the villages of Dargirê and Mîrka attacked the village of Mabeta, which follows the Alevi creed. They besieged the village and killed a man. Henan Agha of the Sheikh Sim'el family then came with some militiamen to the aid of the Mabetans and drove the attackers back.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0517

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[258].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); Commander Seqîb's Raid and Death

**Current source text:**

```text
Commander Seqîb's Raid and Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0518

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[258].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); Commander Seqîb's Raid and Death

**Current source text:**

```text
Seqîb, one of the commanders of the Qiwayê Millî, attacked the Qurtqulaq railway station north of Afrin. Afterwards he was killed in a clash with the French forces by the village of Bêlê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0519

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[259].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); First Bullet Against the French

**Current source text:**

```text
First Bullet Against the French
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0520

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[259].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); First Bullet Against the French

**Current source text:**

```text
The first bullet fired against the French forces in all of Syria was fired in the Afrin district in 1919, by the hand of Miĥê Îbşaşê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0521

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[260].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); French Forces Enter Çiyayê Kurmênc

**Current source text:**

```text
French Forces Enter Çiyayê Kurmênc
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0522

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[260].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); French Forces Enter Çiyayê Kurmênc

**Current source text:**

```text
In October 1919 the French forces took over the province of Aleppo from the English, who had held it since the end of 1918. The French then crossed into Çiyayê Kurmênc from two directions, one from the side of Meydan Ekbez and one from the side of Ĥemamê and Cindirês. The two columns met at the Qitmê railway station and made it their main base.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0523

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[261].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); Ibrahim Axa Resistance

**Current source text:**

```text
Ibrahim Axa Resistance
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0524

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[261].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); Ibrahim Axa Resistance

**Current source text:**

```text
Îbram (Ibrahim) Agha, leader of the 'Umer Sefûna family, was one of the leaders of the Qiwayê Millî in Çiyayê Kurmênc and raised a fierce resistance against the French army from their arrival in 1919. He had about three hundred armed men, and the areas of Heştiya and Xastiya were under his control.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0525

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[262].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); Ibrahim Henano Forms His Army

**Current source text:**

```text
Ibrahim Henano Forms His Army
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0526

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[262].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); Ibrahim Henano Forms His Army

**Current source text:**

```text
In 1919 the Kurdish leader Ibrahim Henano created an army and an authority in northern Syria, with the town of Rihaniye as the centre of his rule. Henano and his men carried out more than 27 attacks against the French forces in the districts of Antioch and Jabal Zawiya.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0527

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[263].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=(none); Qitmê Becomes the French Base

**Current source text:**

```text
Qitmê Becomes the French Base
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0528

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[263].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=(none); Qitmê Becomes the French Base

**Current source text:**

```text
The French made the railway station of the village of Qitmê, in the Şikak area, their administrative and military base in the district. Afterwards they moved their administrative centre to the village of Meydankê, also in the Şikak area.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0529

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[264].mainEvent` — Afrin-Specific Events; startDate=1919; endDate=1921; Qiwayi Milli Created

**Current source text:**

```text
Qiwayi Milli Created
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0530

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[264].additionalInfo` — Afrin-Specific Events; startDate=1919; endDate=1921; Qiwayi Milli Created

**Current source text:**

```text
After the Ottoman defeat, Mustafa Kemal founded the Qîwayî Millî (Çete) irregular forces. Several notables of Çiyayê Kurmênc took part in the force's founding meeting.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0531

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[265].mainEvent` — Afrin-Specific Events; startDate=1920; endDate=1930; Cemil Market Opens

**Current source text:**

```text
Cemil Market Opens
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0532

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[265].additionalInfo` — Afrin-Specific Events; startDate=1920; endDate=1930; Cemil Market Opens

**Current source text:**

```text
Cemîl Axa Çirûsî headed the Afrin municipality from the late 1920s to the mid-1930s, and the Afrin weekly market opened in this period. Eli's chapter on markets dates the opening to spring 1927, under mayor Cemîl Bafî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0533

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[266].mainEvent` — Afrin-Specific Events; startDate=1920; endDate=(none); French Mandate Begins

**Current source text:**

```text
French Mandate Begins
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0534

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[266].additionalInfo` — Afrin-Specific Events; startDate=1920; endDate=(none); French Mandate Begins

**Current source text:**

```text
With the beginning of the French Mandate period in the Afrin region, Goçer fighters, among them Mihê Îbşaşê, Îbê Cindêr and Silêman Pîşo, fought the French forces. In those years they had become the real rulers in the Çiyayê Kurmênc region.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0535

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[267].mainEvent` — Afrin-Specific Events; startDate=1920; endDate=1929; Kurdish Migration Period (Arab-nationalist claim)
- `columns[0].events[299].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=1939; Kurdish Migration Period (Arab-nationalist claim)

**Current source text:**

```text
Kurdish Migration Period (Arab-nationalist claim)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0536

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[267].additionalInfo` — Afrin-Specific Events; startDate=1920; endDate=1929; Kurdish Migration Period (Arab-nationalist claim)

**Current source text:**

```text
Arab nationalist circles in Syria have claimed that the Kurdish presence in the district is new, the result of a migration from Turkey in the 1920s. Eli records the claim and sets against it the district's much older Kurdish history.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0537

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[268].mainEvent` — Afrin-Specific Events; startDate=1921; endDate=(none); Ankara Agreement Divides the Mountain

**Current source text:**

```text
Ankara Agreement Divides the Mountain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0538

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[268].additionalInfo` — Afrin-Specific Events; startDate=1921; endDate=(none); Ankara Agreement Divides the Mountain

**Current source text:**

```text
With the Franklin-Bouillon agreement signed at Ankara in October 1921, the fighting between France and Turkey ended and the new border was drawn through the middle of the Kurd Dagh. The Kurdish population of the district was permanently divided between the new states of Turkey and Syria, and families were cut off from pastures, fields and properties that now lay in foreign territory.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0539

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[269].mainEvent` — Afrin-Specific Events; startDate=1921; endDate=(none); Heyder Agha Dies

**Current source text:**

```text
Heyder Agha Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0540

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[269].additionalInfo` — Afrin-Specific Events; startDate=1921; endDate=(none); Heyder Agha Dies

**Current source text:**

```text
Heyder Agha of the 'Umê family died in 1921. Two sons survived him, Omer (Feydî) Agha and Ruf'et Agha.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0541

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[270].mainEvent` — Afrin-Specific Events; startDate=1921; endDate=1923; Kurdish Resistance Continues

**Current source text:**

```text
Kurdish Resistance Continues
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0542

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[270].additionalInfo` — Afrin-Specific Events; startDate=1921; endDate=1923; Kurdish Resistance Continues

**Current source text:**

```text
After Mustafa Kemal withdrew his support, which the Kurds of the district saw as a betrayal, armed resistance to the French in the mountain continued for more than two years, into 1922 and 1923.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0543

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[271].mainEvent` — Afrin-Specific Events; startDate=1921; endDate=(none); Wadi al-Nishab Train Ambush

**Current source text:**

```text
Wadi al-Nishab Train Ambush
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0544

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[271].additionalInfo` — Afrin-Specific Events; startDate=1921; endDate=(none); Wadi al-Nishab Train Ambush

**Current source text:**

```text
In 1921 fighters led by Seydo Axa Dîko, together with Ehmedê Rûtê and Eslan Axa, cut the railway line in the valley known as Kali Tero or Wadi al-Nishab. A train carrying French soldiers derailed, and the soldiers aboard were killed, captured or wounded. The valley is remembered in Afrin as a sacred place of the resistance.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0545

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[272].mainEvent` — Afrin-Specific Events; startDate=1922; endDate=(none); Bekir Agha Imprisonment

**Current source text:**

```text
Bekir Agha Imprisonment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0546

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[272].additionalInfo` — Afrin-Specific Events; startDate=1922; endDate=(none); Bekir Agha Imprisonment

**Current source text:**

```text
Bekir Agha of Senarê, son of Haj Mustafa, was captured by the French. He died in 1922 in the Khan Istanbul prison in Aleppo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0547

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[273].mainEvent` — Afrin-Specific Events; startDate=1922; endDate=(none); District of Chiyaye Kurmanc Established

**Current source text:**

```text
District of Chiyaye Kurmanc Established
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0548

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[273].additionalInfo` — Afrin-Specific Events; startDate=1922; endDate=(none); District of Chiyaye Kurmanc Established

**Current source text:**

```text
By decree no. 33 of the State of Aleppo, dated September 1922, the district (qeza) of Çiyayê Kurmênc, also written Kurdaĝ, was formally established. It brought the Kurdish villages of the mountain, of Lêlûn and of the Cûmê plain together in one district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0549

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[274].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Afrin Administration Established

**Current source text:**

```text
Afrin Administration Established
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0550

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[274].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Afrin Administration Established

**Current source text:**

```text
From 1923 the French began building the civil administration buildings of the Çiyayê Kurmênc district at the site of present-day Afrin city, which became the new district centre.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0551

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[275].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Aslan Mountain Resistance

**Current source text:**

```text
Aslan Mountain Resistance
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0552

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[275].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Aslan Mountain Resistance

**Current source text:**

```text
Eslan Agha of the Şorbe family kept up armed resistance on Mount Hawar until the end of 1923.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0553

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[276].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Bilbil Director Appointment

**Current source text:**

```text
Bilbil Director Appointment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0554

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[276].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Bilbil Director Appointment

**Current source text:**

```text
In 1923 Menan Axa Îsmaîl zade became director of the Bilbil region, succeeding its first director, Ebdilĝenî Ĝezal.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0555

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[277].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Ehmede Rute captured

**Current source text:**

```text
Ehmede Rute captured
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0556

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[277].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Ehmede Rute captured

**Current source text:**

```text
In late 1923 Ehmedê Rûtê was captured and imprisoned by the French. He escaped with the help of a Kurdish policeman and crossed into Turkey.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0557

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[278].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Ehmede Rute's village bombarded

**Current source text:**

```text
Ehmede Rute's village bombarded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0558

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[278].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Ehmede Rute's village bombarded

**Current source text:**

```text
In late 1923 French artillery bombarded Ehmedê Rûtê's village from the Qurtqulaq railway station, demolished his house and burned his property.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0559

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[279].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); French attack local resisters

**Current source text:**

```text
French attack local resisters
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0560

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[279].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); French attack local resisters

**Current source text:**

```text
At the end of 1923 the French mounted a large assault on Ehmedê Rûtê and Eslan Agha, the last resistance leaders, who had refused the amnesty and kept fighting.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0561

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[280].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=1924; French crossing of Chiyaye Kurmanc aftermath

**Current source text:**

```text
French crossing of Chiyaye Kurmanc aftermath
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0562

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[280].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=1924; French crossing of Chiyaye Kurmanc aftermath

**Current source text:**

```text
After about three years of resistance, the French took control of Çiyayê Kurmênc on agreed terms. The terms included a full amnesty, Turkish as the official language of the district, and the creation of the Kurdaĝ qeza.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0563

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[281].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=1938; Kor Reshit Agha militia

**Current source text:**

```text
Kor Reshit Agha militia
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0564

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[281].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=1938; Kor Reshit Agha militia

**Current source text:**

```text
Kor Reşît Axa of the Şêx Sim'el family raised an armed militia called the Milis in French service. The force carried out security duties across the district from the early Mandate years to the late 1930s, and Kor Reşît drew the monthly pay of a thousand militiamen from the French.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0565

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[282].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Meho Îbo Şaşo Assassinated

**Current source text:**

```text
Meho Îbo Şaşo Assassinated
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0566

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[282].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Meho Îbo Şaşo Assassinated

**Current source text:**

```text
Meho Îbo Şaşo, born in 1881 in Baska village near Raco, organized the first armed group against the French occupation in the Afrin region and is credited with firing the first shot against the French in Syria. He fought alongside the Hananu revolt and later operated from the Qazqli mountains north of Jindires. In 1923 he was treacherously killed in a cave of Mount Qazqli near the village of Tatran.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0567

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[283].mainEvent` — Afrin-Specific Events; startDate=1923; endDate=(none); Şêx Tribal Recognition

**Current source text:**

```text
Şêx Tribal Recognition
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0568

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[283].additionalInfo` — Afrin-Specific Events; startDate=1923; endDate=(none); Şêx Tribal Recognition

**Current source text:**

```text
In 1923 the writer Cemîl Kinê recorded Henîf Axa of the Hec Xelîl Şêxî family as leader of the Şêxan tribe.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0569

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[284].mainEvent` — Afrin-Specific Events; startDate=1924; endDate=1925; Kurmanc District Formation

**Current source text:**

```text
Kurmanc District Formation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0570

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[284].additionalInfo` — Afrin-Specific Events; startDate=1924; endDate=1925; Kurmanc District Formation

**Current source text:**

```text
In 1924 and 1925, during the early French administration, Mabeta served as the administrative centre of the Çiyayê Kurmênc district before the seat moved to present-day Afrin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0571

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[285].mainEvent` — Afrin-Specific Events; startDate=1925; endDate=(none); Government Complex Completed

**Current source text:**

```text
Government Complex Completed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0572

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[285].additionalInfo` — Afrin-Specific Events; startDate=1925; endDate=(none); Government Complex Completed

**Current source text:**

```text
The Afrin police station, the prison and a two-storey, 24-room government building (seray) were completed in 1925.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0573

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[286].mainEvent` — Afrin-Specific Events; startDate=1925; endDate=(none); Kor Reşît Refuses Sheikh Said's Envoy

**Current source text:**

```text
Kor Reşît Refuses Sheikh Said's Envoy
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0574

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[286].additionalInfo` — Afrin-Specific Events; startDate=1925; endDate=(none); Kor Reşît Refuses Sheikh Said's Envoy

**Current source text:**

```text
During the 1925 Sheikh Said uprising, an envoy from the revolt's leadership came to Kor Reşît and asked him to demolish the Heşargê railway bridge, to cut the Turkish army's path toward Kurdistan. Kor Reşît instead informed the French, and the envoy was put in the Aleppo prison. The envoy, a former Ottoman officer known as Birûsk, later attempted to assassinate Atatürk.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0575

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[287].mainEvent` — Afrin-Specific Events; startDate=1925; endDate=(none); Piran Kurdish Uprising

**Current source text:**

```text
Piran Kurdish Uprising
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0576

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[287].additionalInfo` — Afrin-Specific Events; startDate=1925; endDate=(none); Piran Kurdish Uprising

**Current source text:**

```text
Sheikh Said of Piran led the 1925 Kurdish uprising in Turkey, one of the Naqshbandi-led revolts against state repression. Some participants later took refuge in Syria, among them men who settled in the Afrin district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0577

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[288].mainEvent` — Afrin-Specific Events; startDate=1925; endDate=(none); Roman Roads Survey

**Current source text:**

```text
Roman Roads Survey
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0578

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[288].additionalInfo` — Afrin-Specific Events; startDate=1925; endDate=(none); Roman Roads Survey

**Current source text:**

```text
The French aerial-survey pioneer Antoine Poidebard began mapping the Roman roads of Syria in 1925, work that continued to 1942. Eli uses his map, under the Kurmanji spelling A.Biwadorbar, to trace the old roads across Mounts Kurmênc and Lêlûn.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0579

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[289].mainEvent` — Afrin-Specific Events; startDate=1925; endDate=(none); Sîros Archaeological Excavation

**Current source text:**

```text
Sîros Archaeological Excavation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0580

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[289].additionalInfo` — Afrin-Specific Events; startDate=1925; endDate=(none); Sîros Archaeological Excavation

**Current source text:**

```text
In 1925 Henri Seyrig, head of the French archaeological institute in Beirut, began work at Sîros (Cyrrhus, Nebi Horî) that continued over seven summers. The systematic Cyrrhus expedition under Edmond Frézouls followed in 1952.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0581

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[290].mainEvent` — Afrin-Specific Events; startDate=1926; endDate=(none); First Yezidi School Opens

**Current source text:**

```text
First Yezidi School Opens
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0582

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[290].additionalInfo` — Afrin-Specific Events; startDate=1926; endDate=(none); First Yezidi School Opens

**Current source text:**

```text
In 1926 Darwîş Şemo, the Yezidi leader of the village of Qibar and a member of the Khoybûn movement, opened the first Yezidi school in the Kurd Dagh inside his own house. The teacher, Khidr Jum'a, was brought from Iraq.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0583

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[291].mainEvent` — Afrin-Specific Events; startDate=1926; endDate=(none); Henan Family Document

**Current source text:**

```text
Henan Family Document
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0584

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[291].additionalInfo` — Afrin-Specific Events; startDate=1926; endDate=(none); Henan Family Document

**Current source text:**

```text
A document from 1926, held by the family of Şêx Ebdilhenan, names him head of the Şêxan tribe. It carries the seals of district mukhtars and notables and of the French advisor of Çiyayê Kurmênc.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0585

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[292].mainEvent` — Afrin-Specific Events; startDate=1926; endDate=(none); Rute Amnesty Return

**Current source text:**

```text
Rute Amnesty Return
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0586

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[292].additionalInfo` — Afrin-Specific Events; startDate=1926; endDate=(none); Rute Amnesty Return

**Current source text:**

```text
After a general French amnesty in 1926, Ehmedê Rûtê returned from Turkey to his village.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0587

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[293].mainEvent` — Afrin-Specific Events; startDate=1927; endDate=(none); Afrin Winery Founded

**Current source text:**

```text
Afrin Winery Founded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0588

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[293].additionalInfo` — Afrin-Specific Events; startDate=1927; endDate=(none); Afrin Winery Founded

**Current source text:**

```text
A winery was established at Afrin in 1927 and was still working when Eli wrote.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0589

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[294].mainEvent` — Afrin-Specific Events; startDate=1927; endDate=(none); Primary School Construction

**Current source text:**

```text
Primary School Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0590

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[294].additionalInfo` — Afrin-Specific Events; startDate=1927; endDate=(none); Primary School Construction

**Current source text:**

```text
The first primary school building in Afrin was completed in 1927.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0591

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[295].mainEvent` — Afrin-Specific Events; startDate=1928; endDate=(none); Darwîş Şemo Killed

**Current source text:**

```text
Darwîş Şemo Killed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0592

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[295].additionalInfo` — Afrin-Specific Events; startDate=1928; endDate=(none); Darwîş Şemo Killed

**Current source text:**

```text
Darwîş Şemo, the Yezidi leader of Qibar who had turned partisan against the French and gone to the mountains, was killed in blood revenge in 1928. His son Cemîl Axa became the community's new leader in the political sense.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0593

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[296].mainEvent` — Afrin-Specific Events; startDate=1928; endDate=(none); Kor Reşît Enters Constituent Assembly

**Current source text:**

```text
Kor Reşît Enters Constituent Assembly
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0594

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[296].additionalInfo` — Afrin-Specific Events; startDate=1928; endDate=(none); Kor Reşît Enters Constituent Assembly

**Current source text:**

```text
In April 1928 a seventy-member Constituent Assembly was elected in Syria to draft the constitution. Kor Reşît of the Şêx Sim'el family represented the Çiyayê Kurmênc district in it.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0595

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[297].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=(none); Doxru Publication Ends

**Current source text:**

```text
Doxru Publication Ends
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0596

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[297].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=(none); Doxru Publication Ends

**Current source text:**

```text
The Ottoman-language newspaper Doxru Yol, published in Aleppo by Nûrî, son of Şêx Mihemedê Gênc, ceased publication in 1930 when the Aleppo authorities banned it.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0597

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[298].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=(none); Jindires Base Establishment

**Current source text:**

```text
Jindires Base Establishment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0598

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[298].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=(none); Jindires Base Establishment

**Current source text:**

```text
In the 1930s a French army detachment set up its base on the northern and eastern summit of the Jindires tell.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0599

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[299].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=1939; Kurdish Migration Period (Arab-nationalist claim)

**Current source text:**

```text
Arab nationalists later claimed that the Kurds of Afrin were recent migrants who crossed from Turkey in the 1930s. Researchers of the district's history, Eli among them, trace the Kurdish presence back to the Middle Ages.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0600

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[300].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=(none); Mabeta Murid Conflict

**Current source text:**

```text
Mabeta Murid Conflict
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0601

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[300].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=(none); Mabeta Murid Conflict

**Current source text:**

```text
In the 1930s the Alawi town of Mabeta was the target of a defamatory rumour spread by the Mirûds, which contributed to Alawi departures from the district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0602

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[301].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=(none); Marate Leadership Change

**Current source text:**

```text
Marate Leadership Change
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0603

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[301].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=(none); Marate Leadership Change

**Current source text:**

```text
In the 1930s Mihemed Nûrî Paşa was the headman of Marate village. He knew the district's family and tribal affairs well and served as an informant for Roger Lescot.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0604

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[302].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=(none); Murud Movement Emerges

**Current source text:**

```text
Murud Movement Emerges
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0605

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[302].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=(none); Murud Movement Emerges

**Current source text:**

```text
The Murud (Mirûd) movement led by Şêx Îbrahîm Xelîl Sowûq Oĝlo emerged in Çiyayê Kurmênc at the end of 1930. From the outset it clashed with the Şêx Sim'el and Dîkê families.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0606

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[303].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=(none); Qesim Village Attack

**Current source text:**

```text
Qesim Village Attack
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0607

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[303].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=(none); Qesim Village Attack

**Current source text:**

```text
During the Murud conflicts a group of Mirûds attacked the house of Seydê Dîkê in Qêsim village, intending to kill him. The villagers drove them off and killed two of the attackers.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0608

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[304].mainEvent` — Afrin-Specific Events; startDate=1930; endDate=1939; Turkish annexation attempt of Kurd Mountain

**Current source text:**

```text
Turkish annexation attempt of Kurd Mountain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0609

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[304].additionalInfo` — Afrin-Specific Events; startDate=1930; endDate=1939; Turkish annexation attempt of Kurd Mountain

**Current source text:**

```text
Through the 1930s the Turkish state repeatedly tried to attach the Çiyayê Kurmênc qeza to the Sanjak of Alexandretta, and in 1936 it pressed district leaders to display pro-Turkish loyalties. In 1939 the Sanjak alone went to Turkey.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0610

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[305].mainEvent` — Afrin-Specific Events; startDate=1931; endDate=(none); Meydana Mosque Construction

**Current source text:**

```text
Meydana Mosque Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0611

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[305].additionalInfo` — Afrin-Specific Events; startDate=1931; endDate=(none); Meydana Mosque Construction

**Current source text:**

```text
The Meydana mosque was built in 1931 by the Sheikh of the Mirûds, Îbrahîm Xelîl.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0612

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[306].mainEvent` — Afrin-Specific Events; startDate=1932; endDate=(none); Ewnî Electoral Victory

**Current source text:**

```text
Ewnî Electoral Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0613

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[306].additionalInfo` — Afrin-Specific Events; startDate=1932; endDate=(none); Ewnî Electoral Victory

**Current source text:**

```text
In Syria's first parliamentary elections, the Şêxan leader Husên 'Ewnî won the Çiyayê Kurmênc seat with Mirûd support.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0614

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[307].mainEvent` — Afrin-Specific Events; startDate=1932; endDate=(none); Niyazî Parliamentary Election

**Current source text:**

```text
Niyazî Parliamentary Election
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0615

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[307].additionalInfo` — Afrin-Specific Events; startDate=1932; endDate=(none); Niyazî Parliamentary Election

**Current source text:**

```text
In 1932 Menan Niyazî of the Çirûsan branch of the Şikaka aghas, from Sêceraz, was elected to the Syrian parliament for the Ezaz district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0616

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[308].mainEvent` — Afrin-Specific Events; startDate=1932; endDate=(none); Registry Office Appointment

**Current source text:**

```text
Registry Office Appointment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0617

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[308].additionalInfo` — Afrin-Specific Events; startDate=1932; endDate=(none); Registry Office Appointment

**Current source text:**

```text
In 1932 Xoce Reşîtê 'Elî Qehwe (Mihemed Reşad) of Turindê became the first head of the Population Registry Office in Afrin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0618

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[309].mainEvent` — Afrin-Specific Events; startDate=1932; endDate=(none); Syrian Parliament Opens

**Current source text:**

```text
Syrian Parliament Opens
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0619

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[309].additionalInfo` — Afrin-Specific Events; startDate=1932; endDate=(none); Syrian Parliament Opens

**Current source text:**

```text
In 1932 the French Mandate authorities allowed parliamentary elections in Syria, and Çiyayê Kurmênc took part.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0620

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[310].mainEvent` — Afrin-Specific Events; startDate=1932; endDate=(none); Yazidi Census Registration

**Current source text:**

```text
Yazidi Census Registration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0621

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[310].additionalInfo` — Afrin-Specific Events; startDate=1932; endDate=(none); Yazidi Census Registration

**Current source text:**

```text
The first Yezidi census under the French Mandate was taken in 1932. Identity cards issued to Yezidis that year were marked Syrian, Yezidi, Kurdish.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0622

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[311].mainEvent` — Afrin-Specific Events; startDate=1933; endDate=(none); Hemdo Kakhre Birth

**Current source text:**

```text
Hemdo Kakhre Birth
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0623

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[311].additionalInfo` — Afrin-Specific Events; startDate=1933; endDate=(none); Hemdo Kakhre Birth

**Current source text:**

```text
The religious scholar Îbrahîm Xelîl Hemdo was born in 1933 in Kaxrê village.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0624

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[312].mainEvent` — Afrin-Specific Events; startDate=1933; endDate=(none); Naqshbandi Connection Established

**Current source text:**

```text
Naqshbandi Connection Established
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0625

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[312].additionalInfo` — Afrin-Specific Events; startDate=1933; endDate=(none); Naqshbandi Connection Established

**Current source text:**

```text
In 1933 Sheikh Husên, the later Naqshbandi leader of Çiyayê Kurmênc, entered the Naqshbandi order under his guide Sheikh Ehmedê Namî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0626

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[313].mainEvent` — Afrin-Specific Events; startDate=1933; endDate=1936; Yezidi Mir Visits Qibar

**Current source text:**

```text
Yezidi Mir Visits Qibar
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0627

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[313].additionalInfo` — Afrin-Specific Events; startDate=1933; endDate=1936; Yezidi Mir Visits Qibar

**Current source text:**

```text
Afrin's Yezidis kept up their ties with the Yezidi heartland under the Mandate. Mir Sa'id Beg spent a few days in the village of Qibar in 1933, and Dawud al-Dawud paraded through the village in 1936.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0628

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[314].mainEvent` — Afrin-Specific Events; startDate=1934; endDate=(none); Bedriye Identity Documentation

**Current source text:**

```text
Bedriye Identity Documentation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0629

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[314].additionalInfo` — Afrin-Specific Events; startDate=1934; endDate=(none); Bedriye Identity Documentation

**Current source text:**

```text
An identity card issued in 1934 to Bedriye of Kîmar village recorded her as Yezidi, Syrian and Kurdish.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0630

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[315].mainEvent` — Afrin-Specific Events; startDate=1934; endDate=1935; Resûl Hec Reşît Hanged in Beirut

**Current source text:**

```text
Resûl Hec Reşît Hanged in Beirut
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0631

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[315].additionalInfo` — Afrin-Specific Events; startDate=1934; endDate=1935; Resûl Hec Reşît Hanged in Beirut

**Current source text:**

```text
Resûlê Hec Reşît of 'Elendara village near Raco, a village teacher born in 1905, sold his fields to buy weapons and gathered men to drive the French out of the country. After a first clash with French militiamen near Zerka village, a French force threatened to burn 'Elendara unless he surrendered. He gave himself up, and in 1935 he was hanged in Beirut. His companions Osmanê Hemo and Sîno died in prison under life sentences.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0632

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[316].mainEvent` — Afrin-Specific Events; startDate=1935; endDate=(none); Afrin Militia Incident

**Current source text:**

```text
Afrin Militia Incident
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0633

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[316].additionalInfo` — Afrin-Specific Events; startDate=1935; endDate=(none); Afrin Militia Incident

**Current source text:**

```text
In 1935 the French militia chief Êĥo Zêno, formerly a well-known brigand, was invited to the house of Cemîl Axa, then mayor of Afrin, and was killed as he was being seen off. Suspicion fell on the mayor and the French connection.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0634

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[317].mainEvent` — Afrin-Specific Events; startDate=1935; endDate=(none); Ibrahim Axa Assassination

**Current source text:**

```text
Ibrahim Axa Assassination
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0635

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[317].additionalInfo` — Afrin-Specific Events; startDate=1935; endDate=(none); Ibrahim Axa Assassination

**Current source text:**

```text
Ibrahim (Îbram) Agha was treacherously killed, together with his son and his man Soro, between the villages of Maratê and Dargirê during the French Mandate era, after his support for the Mirûdan movement. The sources give no exact year. The movement's armed phase ran from the mid-1930s to 1939.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0636

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[318].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=(none); Ewnî Second Victory

**Current source text:**

```text
Ewnî Second Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0637

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[318].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=(none); Ewnî Second Victory

**Current source text:**

```text
In the 1936 elections Husên 'Ewnî again won the Çiyayê Kurmênc parliamentary seat with Mirûd support.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0638

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[319].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=1938; Hat Burning Ceremony

**Current source text:**

```text
Hat Burning Ceremony
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0639

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[319].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=1938; Hat Burning Ceremony

**Current source text:**

```text
A religious fatwa spread in the district and forbade wearing the Turkish hats. The collected caps were burned in the presence of chiefs of the Şêx Sim'el and Dîkê families and of French representatives.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0640

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[320].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=(none); Jabal Qaymaqam Appointment

**Current source text:**

```text
Jabal Qaymaqam Appointment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0641

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[320].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=(none); Jabal Qaymaqam Appointment

**Current source text:**

```text
In 1936 the French appointed a Turk, Namiq Beg, as Qaymaqam of the Çiyayê Kurmênc district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0642

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[321].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=(none); Meydank Autonomy Proposal

**Current source text:**

```text
Meydank Autonomy Proposal
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0643

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[321].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=(none); Meydank Autonomy Proposal

**Current source text:**

```text
At a 1936 meeting of the district aghas in Meydankê village, the French representative proposed an autonomous region for Çiyayê Kurmênc like that of Iskenderun. Family rivalries, and fear that the Şêx Sim'el family would head it, led the aghas to reject the proposal.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0644

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[322].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=(none); Muridin Greet the Paris Delegation

**Current source text:**

```text
Muridin Greet the Paris Delegation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0645

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[322].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=(none); Muridin Greet the Paris Delegation

**Current source text:**

```text
When the Syrian national delegation returned from the 1936 Paris negotiations, its arrival at Afrin on the Orient Express was greeted by hundreds of Muridin led by Ali Ghalib, one of the movement's leaders. The scene showed the movement's ties to the National Bloc.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0646

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[323].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=(none); National Bloc Election

**Current source text:**

```text
National Bloc Election
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0647

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[323].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=(none); National Bloc Election

**Current source text:**

```text
In the 1936 elections Husên 'Ewnî won the Çiyayê Kurmênc seat as a supporter of the Syrian National Bloc (Kitla Wetenî).
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0648

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[324].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=(none); Syrian Federal Division

**Current source text:**

```text
Syrian Federal Division
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0649

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[324].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=(none); Syrian Federal Division

**Current source text:**

```text
After the 1936 Paris negotiations failed, France again divided Syria into federal states, among them the Alawite, Druze, Damascus, Lebanon and Aleppo states. The Sanjak of Alexandretta was a special region within the Aleppo state.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0650

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[325].mainEvent` — Afrin-Specific Events; startDate=1936; endDate=1938; Turkish Hat Campaign

**Current source text:**

```text
Turkish Hat Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0651

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[325].additionalInfo` — Afrin-Specific Events; startDate=1936; endDate=1938; Turkish Hat Campaign

**Current source text:**

```text
As part of the Turkish bid to attach Çiyayê Kurmênc to the Sanjak of Alexandretta, the Hatay leader Tayfur Sükmen (Teyfûr Mirsel Oĝlo) had the Antep army chief Heyder Beg send about 20,000 Turkish hats to the villages of Dêrsiwan and Qêsim, so that the district would appear pro-Turkish.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0652

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[326].mainEvent` — Afrin-Specific Events; startDate=1937; endDate=(none); Diyarbekiri Dersim Participation

**Current source text:**

```text
Diyarbekiri Dersim Participation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0653

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[326].additionalInfo` — Afrin-Specific Events; startDate=1937; endDate=(none); Diyarbekiri Dersim Participation

**Current source text:**

```text
Nûriddîn Diyarbekirî, a Naqshbandi believer who later settled in Afrin, took part in the Kurdish revolts of 1925 and in the Dersim uprising of 1937 before taking refuge in Syria.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0654

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[327].mainEvent` — Afrin-Specific Events; startDate=1937; endDate=(none); Mûse Axa Assassination

**Current source text:**

```text
Mûse Axa Assassination
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0655

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[327].additionalInfo` — Afrin-Specific Events; startDate=1937; endDate=(none); Mûse Axa Assassination

**Current source text:**

```text
Mûse Axa of the Reş Axa family of Meydana, an opponent of the Murud movement, was killed by the Mirûds in 1937.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0656

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[328].mainEvent` — Afrin-Specific Events; startDate=1937; endDate=(none); Salahiddin Mosque Construction

**Current source text:**

```text
Salahiddin Mosque Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0657

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[328].additionalInfo` — Afrin-Specific Events; startDate=1937; endDate=(none); Salahiddin Mosque Construction

**Current source text:**

```text
The Selahiddin mosque in Afrin city was built in 1937 with money from Xelîl Axa of the Seydê Mîmê family, as the minaret inscription records.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0658

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[329].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Cindo Village Siege

**Current source text:**

```text
Cindo Village Siege
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0659

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[329].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Cindo Village Siege

**Current source text:**

```text
In 1938 the Şikaka village of Qestela Elî Cindo came under siege by the Mirûds.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0660

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[330].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Dêrsimî Bedirxani Alliance

**Current source text:**

```text
Dêrsimî Bedirxani Alliance
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0661

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[330].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Dêrsimî Bedirxani Alliance

**Current source text:**

```text
Around the 1938 Sanjak referendum, Dr. Nûrî Dêrsimî, backed by the Bedirxanis and notably Kamîran Beg, worked through the Goçer leaders of the Aleppo region, including Afrin, against Kemalist Turkish policy.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0662

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[331].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Gomîtê Village Destruction

**Current source text:**

```text
Gomîtê Village Destruction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0663

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[331].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Gomîtê Village Destruction

**Current source text:**

```text
In 1938 the Turks demolished the border village of Gomîtê and expelled its inhabitants, on the grounds that it stood too close to the frontier.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0664

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[332].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Goçer Sanjak Vote

**Current source text:**

```text
Goçer Sanjak Vote
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0665

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[332].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Goçer Sanjak Vote

**Current source text:**

```text
In the 1938 referendum on the Sanjak of Alexandretta, the Goçer (nomad) leaders of the Afrin region voted for the Sanjak to remain within Syria.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0666

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[333].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Kor Reshit Attack

**Current source text:**

```text
Kor Reshit Attack
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0667

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[333].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Kor Reshit Attack

**Current source text:**

```text
Kor Reşît was the foremost enemy of the Murud movement, and the Sheikh of the Mirûds declared his blood licit. In 1938 Kor Reşît was wounded in an assassination attempt in Afrin city by a Mirûd from Xilaka village, and in the Murud attacks some of his men were killed. His brother Ce'fer was killed near Bilbil the following year.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0668

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[334].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Seydê Hat Burning

**Current source text:**

```text
Seydê Hat Burning
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0669

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[334].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Seydê Hat Burning

**Current source text:**

```text
In 1938 the Kemalists sent Seydê Dîkê the caps that were the symbol of Atatürkism, to distribute among the people of the district. With French help he burned them on the village dunghill.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0670

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[335].mainEvent` — Afrin-Specific Events; startDate=1938; endDate=(none); Sheikh Evdi Murder

**Current source text:**

```text
Sheikh Evdi Murder
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0671

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[335].additionalInfo` — Afrin-Specific Events; startDate=1938; endDate=(none); Sheikh Evdi Murder

**Current source text:**

```text
In 1938, during the Murud conflicts, the Mirûds killed the brother of Şêx Evdî of the Meydankê sheikhs, a former çete member.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0672

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[336].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); Aslan Agha Exile

**Current source text:**

```text
Aslan Agha Exile
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0673

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[336].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); Aslan Agha Exile

**Current source text:**

```text
In 1939 a death sentence was issued against Eslan Agha for his support of the Murud movement. He fled to Turkey and stayed there until an amnesty in 1941.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0674

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[337].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); Bilbil Agha Assassination

**Current source text:**

```text
Bilbil Agha Assassination
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0675

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[337].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); Bilbil Agha Assassination

**Current source text:**

```text
In 1939, during the Murud conflicts, Ce'fer (Ja'fer) Axa of the Şêx Sim'el family, a son of Ehmed Axa, was killed near Bilbil at the hands of the Mirûds. His brother Kor Reşît had survived an assassination attempt in Afrin city a year earlier.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0676

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[338].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); Club of Kurdish Youth Founded

**Current source text:**

```text
Club of Kurdish Youth Founded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0677

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[338].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); Club of Kurdish Youth Founded

**Current source text:**

```text
In 1939 young educated men from villages across the district founded the Nadiya Ciwanên Kurd, the Club of Kurdish Youth, in Afrin, on an openly Kurdish national basis. The French advisor summoned the members on 6 September 1939 and offered them money and weapons, apparently to turn the club against the Murud movement. A French intelligence agent had joined its ranks, the members stayed away from the next meeting, and the club dissolved within weeks.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0678

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[339].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); French give Alexandretta to Turkey

**Current source text:**

```text
French give Alexandretta to Turkey
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0679

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[339].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); French give Alexandretta to Turkey

**Current source text:**

```text
In 1939 France ceded the Sanjak of Alexandretta (Hatay) to Turkey, and with it the northern part of the mountain. The Afrin side remained in Syria.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0680

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[340].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=1942; Ibrahim Village Education

**Current source text:**

```text
Ibrahim Village Education
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0681

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[340].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=1942; Ibrahim Village Education

**Current source text:**

```text
Îbrahîm Xelîl Hemdo studied under his village teacher from 1939 to 1942.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0682

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[341].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); Kor Reşît Dies

**Current source text:**

```text
Kor Reşît Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0683

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[341].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); Kor Reşît Dies

**Current source text:**

```text
Kor Reşît (Reşîtê Ehmed Axa) of the Şêx Sim'el family, the district's dominant strongman, founder of its Milis militia and its representative in the 1928 Constituent Assembly, died in 1939 at the Continental Hotel in Aleppo. He was buried at the tomb of the Henan shrine.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0684

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[342].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); Mirud Border Crossing

**Current source text:**

```text
Mirud Border Crossing
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0685

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[342].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); Mirud Border Crossing

**Current source text:**

```text
In 1939 the French sent a large force backed by warplanes against the Mirûds. Unable to resist, most Mirûd fighters crossed into Turkey with their families, and the movement's armed phase ended.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0686

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[343].mainEvent` — Afrin-Specific Events; startDate=1939; endDate=(none); Murud Armed Campaign Crushed

**Current source text:**

```text
Murud Armed Campaign Crushed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0687

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[343].additionalInfo` — Afrin-Specific Events; startDate=1939; endDate=(none); Murud Armed Campaign Crushed

**Current source text:**

```text
The armed activity of the Mirûds had spread through all the mountain areas. In March 1939 the French sent a large force with artillery and warplanes against the Murud villages and bases. A British consular report counted 96 light bombs dropped on Murud villages in a single day that March, and by the summer the armed campaign had collapsed.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0688

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[344].mainEvent` — Afrin-Specific Events; startDate=1940; endDate=1950; Armenian Aleppo Migration

**Current source text:**

```text
Armenian Aleppo Migration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0689

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[344].additionalInfo` — Afrin-Specific Events; startDate=1940; endDate=1950; Armenian Aleppo Migration

**Current source text:**

```text
Most of Afrin's roughly 200 Armenian families, settled there after the genocide, moved to Aleppo in the 1940s and 1950s. Some went on to Armenia.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0690

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[345].mainEvent` — Afrin-Specific Events; startDate=1940; endDate=(none); Goçer Pastoral Life

**Current source text:**

```text
Goçer Pastoral Life
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0691

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[345].additionalInfo` — Afrin-Specific Events; startDate=1940; endDate=(none); Goçer Pastoral Life

**Current source text:**

```text
Until the 1940s the Goçer (nomads) of the Afrin region raised sheep and preferred to live in tents.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0692

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[346].mainEvent` — Afrin-Specific Events; startDate=1940; endDate=(none); Mirud Amnesty Declared

**Current source text:**

```text
Mirud Amnesty Declared
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0693

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[346].additionalInfo` — Afrin-Specific Events; startDate=1940; endDate=(none); Mirud Amnesty Declared

**Current source text:**

```text
A general amnesty allowed most of the Mirûds to return to their homes and villages after the movement's defeat. Eli dates it to about 1940 and 1941, and those who stayed behind returned when the French left Syria.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0694

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[347].mainEvent` — Afrin-Specific Events; startDate=1940; endDate=(none); Nuri Pasha Dies

**Current source text:**

```text
Nuri Pasha Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0695

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[347].additionalInfo` — Afrin-Specific Events; startDate=1940; endDate=(none); Nuri Pasha Dies

**Current source text:**

```text
Mihemed Nûrî Paşa of Marate died in the 1940s. He himself said that his name and title came from his maternal uncle, who had been governor of Der'a at the end of the nineteenth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0696

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[348].mainEvent` — Afrin-Specific Events; startDate=1940; endDate=(none); Sheikh Ahmed Dies

**Current source text:**

```text
Sheikh Ahmed Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0697

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[348].additionalInfo` — Afrin-Specific Events; startDate=1940; endDate=(none); Sheikh Ahmed Dies

**Current source text:**

```text
Sheikh Ehmedê Namî died in 1940. Sheikh Husên then continued his Naqshbandi discipleship under Sheikh Ebdela Daĝistanî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0698

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[349].mainEvent` — Afrin-Specific Events; startDate=1941; endDate=1946; Allied Occupation Begins

**Current source text:**

```text
Allied Occupation Begins
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0699

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[349].additionalInfo` — Afrin-Specific Events; startDate=1941; endDate=1946; Allied Occupation Begins

**Current source text:**

```text
In June and July 1941 the Allies took Syria from Vichy France in a five-week campaign, and Afrin came under Allied occupation. British, Australian, New Zealand, Indian and Transjordanian units were garrisoned in the district during the war, the border became a watched military zone, and the railway crossing at Meydan Ekbez was closely controlled. The last foreign troops left Syria on 15 April 1946.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0700

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[350].mainEvent` — Afrin-Specific Events; startDate=1941; endDate=(none); Aslan Agha Returns

**Current source text:**

```text
Aslan Agha Returns
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0701

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[350].additionalInfo` — Afrin-Specific Events; startDate=1941; endDate=(none); Aslan Agha Returns

**Current source text:**

```text
Under the 1941 general amnesty for the Mirûds, Eslan Agha returned from Turkey to his village.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0702

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[351].mainEvent` — Afrin-Specific Events; startDate=1941; endDate=(none); Australian Soldiers Riot in Afrin

**Current source text:**

```text
Australian Soldiers Riot in Afrin
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0703

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[351].additionalInfo` — Afrin-Specific Events; startDate=1941; endDate=(none); Australian Soldiers Riot in Afrin

**Current source text:**

```text
Around Christmas 1941 Australian soldiers stationed at Afrin and Azaz got drunk on several consecutive days and rioted in the two towns. They assaulted passers-by and a night watchman, stole from greengrocers and knocked on private houses at night.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0704

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[352].mainEvent` — Afrin-Specific Events; startDate=1941; endDate=1945; Kifir Bridge Construction

**Current source text:**

```text
Kifir Bridge Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0705

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[352].additionalInfo` — Afrin-Specific Events; startDate=1941; endDate=1945; Kifir Bridge Construction

**Current source text:**

```text
During the Second World War the British built a bridge beside Kifêr village. It served traffic between the Sem'an area, the Hemq plain and the Afrin area.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0706

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[353].mainEvent` — Afrin-Specific Events; startDate=1942; endDate=(none); Afrin Hunger March

**Current source text:**

```text
Afrin Hunger March
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0707

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[353].additionalInfo` — Afrin-Specific Events; startDate=1942; endDate=(none); Afrin Hunger March

**Current source text:**

```text
On 2 October 1942 the scarcity of wheat brought women and children onto the streets of Afrin. They marched to the Serail to complain to the Qaymaqam, in a protest that almost closed the market. In the same week the governor of Aleppo had ordered the grain stored in Afrin's depot transferred to Aleppo.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0708

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[354].mainEvent` — Afrin-Specific Events; startDate=1942; endDate=1943; Famine in the Mountain Villages

**Current source text:**

```text
Famine in the Mountain Villages
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0709

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[354].additionalInfo` — Afrin-Specific Events; startDate=1942; endDate=1943; Famine in the Mountain Villages

**Current source text:**

```text
In the winter of 1942 to 1943 famine struck the poor mountain villages around Raco, Bilbil and Meydan Ekbez, where failed harvests and the wartime grain regime left people without food, and many villagers died. A British officer patrolling near Raco in February 1943 recorded more than twenty corpses at a single village. Fayiq Axa took the distribution of grain from the Afrin depot into his own hands, but the quantities were not enough.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0710

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[355].mainEvent` — Afrin-Specific Events; startDate=1942; endDate=(none); Roman Roads Mapped

**Current source text:**

```text
Roman Roads Mapped
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0711

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[355].additionalInfo` — Afrin-Specific Events; startDate=1942; endDate=(none); Roman Roads Mapped

**Current source text:**

```text
Antoine Poidebard completed his mapping of the Roman roads of Syria in 1942, work he had begun in 1925.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0712

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[356].mainEvent` — Afrin-Specific Events; startDate=1944; endDate=(none); Market Protest Against Identity Checks

**Current source text:**

```text
Market Protest Against Identity Checks
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0713

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[356].additionalInfo` — Afrin-Specific Events; startDate=1944; endDate=(none); Market Protest Against Identity Checks

**Current source text:**

```text
Wartime identity checks in the border district reached their peak in 1944, and even the Qaymaqam and the head of the municipality were not exempt. At a raid in Afrin on 14 April 1944 the controls were so thorough that boys gathered in the market in a demonstration against the imposition.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0714

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[357].mainEvent` — Afrin-Specific Events; startDate=1947; endDate=(none); Henan Parliamentary Victory

**Current source text:**

```text
Henan Parliamentary Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0715

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[357].additionalInfo` — Afrin-Specific Events; startDate=1947; endDate=(none); Henan Parliamentary Victory

**Current source text:**

```text
In 1947 Henan Axa of the Şikaka aghas was elected to the Syrian parliament for the Ezaz district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0716

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[358].mainEvent` — Afrin-Specific Events; startDate=1947; endDate=1993; Robari Political Era

**Current source text:**

```text
Robari Political Era
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0717

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[358].additionalInfo` — Afrin-Specific Events; startDate=1947; endDate=1993; Robari Political Era

**Current source text:**

```text
The Robarî family held sustained political representation from Arif Robarî's 1947 parliamentary win to the end of Esmet Robarî's twenty years in the People's Council in 1993.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0718

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[359].mainEvent` — Afrin-Specific Events; startDate=1947; endDate=(none); Robari Wins Parliament

**Current source text:**

```text
Robari Wins Parliament
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0719

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[359].additionalInfo` — Afrin-Specific Events; startDate=1947; endDate=(none); Robari Wins Parliament

**Current source text:**

```text
In 1947 Mihemed Arif Robarî, head of the local National Bloc branch, was elected to the Syrian parliament.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0720

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[360].mainEvent` — Afrin-Specific Events; startDate=1947; endDate=(none); Rufet Electoral Campaign

**Current source text:**

```text
Rufet Electoral Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0721

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[360].additionalInfo` — Afrin-Specific Events; startDate=1947; endDate=(none); Rufet Electoral Campaign

**Current source text:**

```text
In 1947 Ruf'et, son of Heyder Axa, stood for the 'Umê family as a candidate in the Syrian elections.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0722

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[361].mainEvent` — Afrin-Specific Events; startDate=1947; endDate=(none); Sheikh Henif Assassinated

**Current source text:**

```text
Sheikh Henif Assassinated
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0723

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[361].additionalInfo` — Afrin-Specific Events; startDate=1947; endDate=(none); Sheikh Henif Assassinated

**Current source text:**

```text
In 1947, in the days of the Syrian parliamentary elections, the Mirûd leader and candidate Şêx Henîf was shot dead in Afrin city while campaigning. Blame fell on the Şêx Sim'el family.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0724

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[362].mainEvent` — Afrin-Specific Events; startDate=1947; endDate=(none); Xelîl Parliamentary Victory

**Current source text:**

```text
Xelîl Parliamentary Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0725

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[362].additionalInfo` — Afrin-Specific Events; startDate=1947; endDate=(none); Xelîl Parliamentary Victory

**Current source text:**

```text
In the direct elections of June 1947, Xelîl Axa of the Seydê Mîmê family won a Çiyayê Kurmênc seat in the Syrian parliament, alongside Arif Robarî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0726

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[363].mainEvent` — Afrin-Specific Events; startDate=1949; endDate=(none); Betel Represents Kurmanc

**Current source text:**

```text
Betel Represents Kurmanc
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0727

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[363].additionalInfo` — Afrin-Specific Events; startDate=1949; endDate=(none); Betel Represents Kurmanc

**Current source text:**

```text
In the elections at the end of 1949, Mistefa Betal Ehmed of the Gênc line became a member of the Syrian parliament for the Kurmênc region, together with Fayêq Menan Şêx Sma'îl Zade.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0728

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[364].mainEvent` — Afrin-Specific Events; startDate=1949; endDate=(none); Elî Xalib Killed in Antep

**Current source text:**

```text
Elî Xalib Killed in Antep
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0729

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[364].additionalInfo` — Afrin-Specific Events; startDate=1949; endDate=(none); Elî Xalib Killed in Antep

**Current source text:**

```text
Elî Xalib (Ali Ghalib), the commander who had led the Murud movement's fighters and greeted the Paris delegation at Afrin in 1936, was killed in the city of Antep in 1949, in unclear circumstances, at the hand of his own son Emîn. Eli records suspicions that the Sheikh's circle or the Turkish state stood behind the killing.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0730

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[365].mainEvent` — Afrin-Specific Events; startDate=1949; endDate=(none); Khalil Completes School

**Current source text:**

```text
Khalil Completes School
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0731

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[365].additionalInfo` — Afrin-Specific Events; startDate=1949; endDate=(none); Khalil Completes School

**Current source text:**

```text
Îbrahîm Xelîl Hemdo completed primary school in Afrin in 1949.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0732

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[366].mainEvent` — Afrin-Specific Events; startDate=1949; endDate=(none); Reform Society Blocked

**Current source text:**

```text
Reform Society Blocked
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0733

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[366].additionalInfo` — Afrin-Specific Events; startDate=1949; endDate=(none); Reform Society Blocked

**Current source text:**

```text
On 15 December 1949 Ehmed Ce'fer Şêx Sma'îl, the lawyer Osman Mihemed Osman and Bîlal Mistefa petitioned the Qaymaqam of Afrin to found a Reform Society based in Afrin, to improve the district's economic, cultural and social conditions, care for its orphans and teach its children. The Qaymaqam told them his orders gave no path to approval and warned that they risked fifteen years in prison, so the founders gave up.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0734

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[367].mainEvent` — Afrin-Specific Events; startDate=1949; endDate=(none); Sheikh Hanif Dies

**Current source text:**

```text
Sheikh Hanif Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0735

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[367].additionalInfo` — Afrin-Specific Events; startDate=1949; endDate=(none); Sheikh Hanif Dies

**Current source text:**

```text
After Şêx Henîf was killed, leadership of the Mirûds passed to Reşîtê Îbo, then to Xocê Qorta, and then to Mûse Ne'san. Eli dates the killing to the 1947 election days in one passage and to 1949 in another.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0736

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[368].mainEvent` — Afrin-Specific Events; startDate=1950; endDate=(none); 4th Wave Arab Migration

**Current source text:**

```text
4th Wave Arab Migration
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0737

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[368].additionalInfo` — Afrin-Specific Events; startDate=1950; endDate=(none); 4th Wave Arab Migration

**Current source text:**

```text
A fourth wave of Arab settlement began after the 1950s, as Arabs from Sem'an-district villages such as Niblê, Darazê and Ĥeyanê moved to Afrin town for trade.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0738

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[369].mainEvent` — Afrin-Specific Events; startDate=1950; endDate=1959; Abdul Hannan Shrine Mosque

**Current source text:**

```text
Abdul Hannan Shrine Mosque
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0739

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[369].additionalInfo` — Afrin-Specific Events; startDate=1950; endDate=1959; Abdul Hannan Shrine Mosque

**Current source text:**

```text
In the 1950s Nûrî Dêrsimî built the mosque of the Evdilhenan (Abdul Hannan) shrine.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0740

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[370].mainEvent` — Afrin-Specific Events; startDate=1950; endDate=(none); Castle Historic Preservation

**Current source text:**

```text
Castle Historic Preservation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0741

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[370].additionalInfo` — Afrin-Specific Events; startDate=1950; endDate=(none); Castle Historic Preservation

**Current source text:**

```text
Around the mid-twentieth century the state evacuated the last inhabitants of the castle of Sem'an (Saint Simeon) and protected it as an important historical site.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0742

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[371].mainEvent` — Afrin-Specific Events; startDate=1950; endDate=1960; Communist Ideology Spreads

**Current source text:**

```text
Communist Ideology Spreads
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0743

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[371].additionalInfo` — Afrin-Specific Events; startDate=1950; endDate=1960; Communist Ideology Spreads

**Current source text:**

```text
In the second half of the twentieth century most of the Hesen Efendi family became known for Communism, and many of its young people were active in the party.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0744

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[372].mainEvent` — Afrin-Specific Events; startDate=1950; endDate=1953; Communist Party Reaches Afrin

**Current source text:**

```text
Communist Party Reaches Afrin
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0745

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[372].additionalInfo` — Afrin-Specific Events; startDate=1950; endDate=1953; Communist Party Reaches Afrin

**Current source text:**

```text
The Syrian Communist Party reached Çiyayê Kurmênc in 1950 through the poet Cegerxwîn, who approached the members of Afrin's Cultural Society. Reşît Hemo and Şewket Ne'san joined the party in 1952. In 1953 the party founded a Peasants' Union in the district to defend landless farmers and smallholders, and its organizations spread quickly among the poor.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0746

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[373].mainEvent` — Afrin-Specific Events; startDate=1950; endDate=(none); Merchant Road Era

**Current source text:**

```text
Merchant Road Era
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0747

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[373].additionalInfo` — Afrin-Specific Events; startDate=1950; endDate=(none); Merchant Road Era

**Current source text:**

```text
The road from Antakya through Hemamê and Cindirêsê, known as the Merchants' Road (Rêka Bazirgana), remained an important route until the mid-twentieth century.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0748

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[374].mainEvent` — Afrin-Specific Events; startDate=1951; endDate=1952; Cultural Society Founded and Crushed

**Current source text:**

```text
Cultural Society Founded and Crushed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0749

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[374].additionalInfo` — Afrin-Specific Events; startDate=1951; endDate=1952; Cultural Society Founded and Crushed

**Current source text:**

```text
In 1951 Reşît Hemo, Şewket Ne'san and Îbrahîm Qadir founded the Cultural Society (Komela Rewşenbîrî) in Çiyayê Kurmênc, to spread learning among the people and to resist Turkish encroachment in the district. In the summer of 1952 its leading members were arrested and held for two months in the Mezzeh prison in Damascus, until Fayiq Axa's standing with President Adib Shishakli freed them, and the school the society had opened in Afrin was closed. At the society's last meeting, in Hopka village, the poet Cegerxwîn steered many of its members toward the Communist Party.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0750

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[375].mainEvent` — Afrin-Specific Events; startDate=1952; endDate=1995; Cyrrhus Expedition Begins

**Current source text:**

```text
Cyrrhus Expedition Begins
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0751

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[375].additionalInfo` — Afrin-Specific Events; startDate=1952; endDate=1995; Cyrrhus Expedition Begins

**Current source text:**

```text
Systematic exploration of Cyrrhus (Nebi Horî) began in 1952 with a French archaeological expedition directed by Edmond Frézouls and established by Henri Seyrig of the French Institute in Beirut. The mission studied the theatre, the churches, the main street and the fortifications, and it continued, later under the University of Strasbourg, until 1995.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0752

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[376].mainEvent` — Afrin-Specific Events; startDate=1952; endDate=(none); Khalil Completes Studies

**Current source text:**

```text
Khalil Completes Studies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0753

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[376].additionalInfo` — Afrin-Specific Events; startDate=1952; endDate=(none); Khalil Completes Studies

**Current source text:**

```text
Îbrahîm Xelîl Hemdo finished middle school in Aleppo in 1952.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0754

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[377].mainEvent` — Afrin-Specific Events; startDate=1952; endDate=(none); Şêxefendî Îbrahîm Xelîl Killed

**Current source text:**

```text
Şêxefendî Îbrahîm Xelîl Killed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0755

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[377].additionalInfo` — Afrin-Specific Events; startDate=1952; endDate=(none); Şêxefendî Îbrahîm Xelîl Killed

**Current source text:**

```text
Şêxefendî Îbrahîm Xelîl Sowûq Oĝlo, the leader of the Murud movement, had been settled by the Turkish authorities in Manisa after his last cross-border attacks in 1940. He kept his ties to the Mirûds until he was killed in 1952. Eli calls the circumstances unclear, and The Kurds in Syria records that he was killed in a dispute with a Turkish family. Leadership of the remaining Mirûds passed to Mûse Ne'san, who returned from Turkey.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0756

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[378].mainEvent` — Afrin-Specific Events; startDate=1954; endDate=(none); Ehmedê Electoral Loss

**Current source text:**

```text
Ehmedê Electoral Loss
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0757

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[378].additionalInfo` — Afrin-Specific Events; startDate=1954; endDate=(none); Ehmedê Electoral Loss

**Current source text:**

```text
Ehmedê Xelîl of the Ce'fer family ran in the 1954 elections and did not win.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0758

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[379].mainEvent` — Afrin-Specific Events; startDate=1954; endDate=(none); Heyder Electoral Campaign

**Current source text:**

```text
Heyder Electoral Campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0759

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[379].additionalInfo` — Afrin-Specific Events; startDate=1954; endDate=(none); Heyder Electoral Campaign

**Current source text:**

```text
In 1954 Heyder Agha, son of Ruf'et Agha, stood for the 'Umê family in the Syrian elections.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0760

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[380].mainEvent` — Afrin-Specific Events; startDate=1954; endDate=(none); Tell Andar Expedition

**Current source text:**

```text
Tell Andar Expedition
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0761

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[380].additionalInfo` — Afrin-Specific Events; startDate=1954; endDate=(none); Tell Andar Expedition

**Current source text:**

```text
In 1954 a Syrian expedition carried out archaeological research at the tell of 'Ain Dara (Girê Endarê). The site's importance had been recognized that year, when a massive basalt lion statue was discovered by accident.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0762

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[381].mainEvent` — Afrin-Specific Events; startDate=1954; endDate=(none); Triple Parliamentary Victory

**Current source text:**

```text
Triple Parliamentary Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0763

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[381].additionalInfo` — Afrin-Specific Events; startDate=1954; endDate=(none); Triple Parliamentary Victory

**Current source text:**

```text
In the 1954 elections Fayêq Menan Şêx Sma'îl Zade, Ezet Xelîl of Be'dîna and Ehmedê Ce'fer won the Afrin parliamentary seats.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0764

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[382].mainEvent` — Afrin-Specific Events; startDate=1954; endDate=(none); Çirûsî Electoral Defeat

**Current source text:**

```text
Çirûsî Electoral Defeat
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0765

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[382].additionalInfo` — Afrin-Specific Events; startDate=1954; endDate=(none); Çirûsî Electoral Defeat

**Current source text:**

```text
Elî Ekremê Çirûsî ran for parliament in 1954 and did not win.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0766

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[383].mainEvent` — Afrin-Specific Events; startDate=1955; endDate=(none); Ba'ath Party Reaches Afrin

**Current source text:**

```text
Ba'ath Party Reaches Afrin
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0767

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[383].additionalInfo` — Afrin-Specific Events; startDate=1955; endDate=(none); Ba'ath Party Reaches Afrin

**Current source text:**

```text
The Ba'ath Party first reached the district in the mid-1950s through Fayez Ismail. Dr. Mistefa Nûrî became the first Ba'ath member in the Afrin region and headed its first cell, whose members came from Merwaniyê, Marate, Kefersefrê, Me'mila, Firêriyê and Cilbirê.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0768

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[384].mainEvent` — Afrin-Specific Events; startDate=1955; endDate=1959; Khalil Becomes Imam

**Current source text:**

```text
Khalil Becomes Imam
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0769

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[384].additionalInfo` — Afrin-Specific Events; startDate=1955; endDate=1959; Khalil Becomes Imam

**Current source text:**

```text
From 1955 to 1959 Îbrahîm Xelîl Hemdo served as imam and preacher of his village mosque.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0770

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[385].mainEvent` — Afrin-Specific Events; startDate=1955; endDate=(none); Khalil Joins Communists

**Current source text:**

```text
Khalil Joins Communists
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0771

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[385].additionalInfo` — Afrin-Specific Events; startDate=1955; endDate=(none); Khalil Joins Communists

**Current source text:**

```text
In his youth Îbrahîm Xelîl Hemdo worked in the Communist Party, until 1955, before turning to religious duties.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0772

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[386].mainEvent` — Afrin-Specific Events; startDate=1958; endDate=1961; Afrin District Officially Renamed

**Current source text:**

```text
Afrin District Officially Renamed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0773

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[386].additionalInfo` — Afrin-Specific Events; startDate=1958; endDate=1961; Afrin District Officially Renamed

**Current source text:**

```text
During the Syrian-Egyptian union of 1958 to 1961 the district was officially renamed the Afrin District, the name used in official documents since.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0774

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[387].mainEvent` — Afrin-Specific Events; startDate=1958; endDate=(none); Robari Regional Victory

**Current source text:**

```text
Robari Regional Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0775

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[387].additionalInfo` — Afrin-Specific Events; startDate=1958; endDate=(none); Robari Regional Victory

**Current source text:**

```text
In 1958 Mihemed Zihnî Robarî became a member of the Syrian Region parliament during the Syria-Egypt union.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0776

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[388].mainEvent` — Afrin-Specific Events; startDate=1960; endDate=(none); Afrin Urban Expansion

**Current source text:**

```text
Afrin Urban Expansion
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0777

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[388].additionalInfo` — Afrin-Specific Events; startDate=1960; endDate=(none); Afrin Urban Expansion

**Current source text:**

```text
From the end of the 1960s Afrin city grew quickly, as many new residents settled and new neighbourhoods opened.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0778

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[389].mainEvent` — Afrin-Specific Events; startDate=1960; endDate=(none); Agricultural Reform Implementation

**Current source text:**

```text
Agricultural Reform Implementation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0779

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[389].additionalInfo` — Afrin-Specific Events; startDate=1960; endDate=(none); Agricultural Reform Implementation

**Current source text:**

```text
Under the agricultural-reform law of the early 1960s, the state took over most of the lands of Mihemed Axa, son of Xelîl Axa of the Seydê Mîmê family, and of his children.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0780

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[390].mainEvent` — Afrin-Specific Events; startDate=1960; endDate=(none); Eastern Arabs Settle

**Current source text:**

```text
Eastern Arabs Settle
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0781

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[390].additionalInfo` — Afrin-Specific Events; startDate=1960; endDate=(none); Eastern Arabs Settle

**Current source text:**

```text
A third wave of Arab settlement came with the agricultural reform of the 1960s, when Arab families from the desert east of Aleppo were given land in the district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0782

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[391].mainEvent` — Afrin-Specific Events; startDate=1960; endDate=(none); Suleiman Joins Station

**Current source text:**

```text
Suleiman Joins Station
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0783

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[391].additionalInfo` — Afrin-Specific Events; startDate=1960; endDate=(none); Suleiman Joins Station

**Current source text:**

```text
In the 1960s Silêman, a zurna player from Turindê village, went to work at the Damascus radio station.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0784

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[392].mainEvent` — Afrin-Specific Events; startDate=1960; endDate=(none); Şamî Administers Awqaf

**Current source text:**

```text
Şamî Administers Awqaf
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0785

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[392].additionalInfo` — Afrin-Specific Events; startDate=1960; endDate=(none); Şamî Administers Awqaf

**Current source text:**

```text
In the 1960s the administration of the awqaf (religious endowments) in Afrin passed to Mihemedê Şamî.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0786

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[393].mainEvent` — Afrin-Specific Events; startDate=1961; endDate=(none); Khoja Supports Kurdistan

**Current source text:**

```text
Khoja Supports Kurdistan
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0787

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[393].additionalInfo` — Afrin-Specific Events; startDate=1961; endDate=(none); Khoja Supports Kurdistan

**Current source text:**

```text
In 1961 Muhammad Ali Khoja of Mabeta, a founder of the Kurdish Democratic Party in Syria, joined the revolution in Iraqi Kurdistan.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0788

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[394].mainEvent` — Afrin-Specific Events; startDate=1961; endDate=1962; Nûrî Joins Council

**Current source text:**

```text
Nûrî Joins Council
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0789

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[394].additionalInfo` — Afrin-Specific Events; startDate=1961; endDate=1962; Nûrî Joins Council

**Current source text:**

```text
In 1961 and 1962 the lawyer Mihemed Nûrî Arif of the Robarî family served as a member of the Syrian council of deputies.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0790

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[395].mainEvent` — Afrin-Specific Events; startDate=1961; endDate=(none); Robari Term Ends

**Current source text:**

```text
Robari Term Ends
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0791

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[395].additionalInfo` — Afrin-Specific Events; startDate=1961; endDate=(none); Robari Term Ends

**Current source text:**

```text
Mihemed Zihnî Robarî's term in the Syrian Region parliament ended in 1961 with the break-up of the Syria-Egypt union.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0792

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[396].mainEvent` — Afrin-Specific Events; startDate=1961; endDate=(none); Çirûsî Second Defeat

**Current source text:**

```text
Çirûsî Second Defeat
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0793

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[396].additionalInfo` — Afrin-Specific Events; startDate=1961; endDate=(none); Çirûsî Second Defeat

**Current source text:**

```text
Elî Ekremê Çirûsî ran for parliament again in 1961 and did not win.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0794

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[397].mainEvent` — Afrin-Specific Events; startDate=1963; endDate=1966; Mistefa Nûrî Becomes Ba'ath Mayor

**Current source text:**

```text
Mistefa Nûrî Becomes Ba'ath Mayor
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0795

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[397].additionalInfo` — Afrin-Specific Events; startDate=1963; endDate=1966; Mistefa Nûrî Becomes Ba'ath Mayor

**Current source text:**

```text
After the Ba'ath came to power in 1963, its organization in the Afrin region was revived. Dr. Mistefa Nûrî headed the party's joint branch for the Afrin and Ezaz districts and became head of the Afrin municipality. After the internal party coup of 1966 he was expelled from both the party and the municipality.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0796

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[398].mainEvent` — Afrin-Specific Events; startDate=1964; endDate=(none); Dersimi Shrine Development

**Current source text:**

```text
Dersimi Shrine Development
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0797

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[398].additionalInfo` — Afrin-Specific Events; startDate=1964; endDate=(none); Dersimi Shrine Development

**Current source text:**

```text
In 1964 Nûrî Dêrsimî added a building and a minaret to the Henan shrine, turning it into a mosque, and prepared graves there for himself and his wife.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0798

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[399].mainEvent` — Afrin-Specific Events; startDate=1965; endDate=(none); Khoja Damascus Burial

**Current source text:**

```text
Khoja Damascus Burial
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0799

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[399].additionalInfo` — Afrin-Specific Events; startDate=1965; endDate=(none); Khoja Damascus Burial

**Current source text:**

```text
Muhammad Ali Khoja died in 1965 and was buried in Damascus.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0800

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[400].mainEvent` — Afrin-Specific Events; startDate=1968; endDate=(none); Tell Andar Temple

**Current source text:**

```text
Tell Andar Temple
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0801

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[400].additionalInfo` — Afrin-Specific Events; startDate=1968; endDate=(none); Tell Andar Temple

**Current source text:**

```text
The temple at Tell Andar ('Ain Dara) came to light at the end of the 1960s. Systematic excavation of the temple followed under Ali Abu Assaf from 1976.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0802

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[401].mainEvent` — Afrin-Specific Events; startDate=1970; endDate=(none); Feyo Leader Dies

**Current source text:**

```text
Feyo Leader Dies
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0803

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[401].additionalInfo` — Afrin-Specific Events; startDate=1970; endDate=(none); Feyo Leader Dies

**Current source text:**

```text
Gênco Ehmo Feyo, a well-known man of the Goçer Feyo family in Afrin city, died in the 1970s.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0804

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[402].mainEvent` — Afrin-Specific Events; startDate=1970; endDate=(none); Kurdish Leadership Exodus

**Current source text:**

```text
Kurdish Leadership Exodus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0805

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[402].additionalInfo` — Afrin-Specific Events; startDate=1970; endDate=(none); Kurdish Leadership Exodus

**Current source text:**

```text
By the end of the 1970s the religious ties that had brought Alawi Dede leaders from Kurdistan to the Mabeta area came to an end.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0806

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[403].mainEvent` — Afrin-Specific Events; startDate=1971; endDate=(none); Cemîlê Prison Term

**Current source text:**

```text
Cemîlê Prison Term
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0807

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[403].additionalInfo` — Afrin-Specific Events; startDate=1971; endDate=(none); Cemîlê Prison Term

**Current source text:**

```text
In 1971 Cemîlê Êĥo of Çêqilme travelled with other Syrian Kurds to Iraqi Kurdistan. They were arrested and held for several months in Baghdad's Nihaye prison.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0808

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[404].mainEvent` — Afrin-Specific Events; startDate=1973; endDate=(none); Daghistani Succession

**Current source text:**

```text
Daghistani Succession
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0809

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[404].additionalInfo` — Afrin-Specific Events; startDate=1973; endDate=(none); Daghistani Succession

**Current source text:**

```text
On the death of Sheikh Abdullah Daghistani in 1973, Sheikh Husên became leader of the Naqshbandi order in Çiyayê Kurmênc.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0810

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[405].mainEvent` — Afrin-Specific Events; startDate=1973; endDate=(none); Dersimi's Death

**Current source text:**

```text
Dersimi's Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0811

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[405].additionalInfo` — Afrin-Specific Events; startDate=1973; endDate=(none); Dersimi's Death

**Current source text:**

```text
The Kurdish militant and writer Nûrî Dêrsimî died on 22 August 1973.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0812

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[406].mainEvent` — Afrin-Specific Events; startDate=1973; endDate=1981; Mehmûd Communist Representative

**Current source text:**

```text
Mehmûd Communist Representative
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0813

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[406].additionalInfo` — Afrin-Specific Events; startDate=1973; endDate=1981; Mehmûd Communist Representative

**Current source text:**

```text
Wehîd Mehmûd, Afrin's best-known Communist, sat in the Syrian People's Council for the Communist Party twice, in 1973 and again in 1981.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0814

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[407].mainEvent` — Afrin-Specific Events; startDate=1973; endDate=(none); Robari Council Tenure

**Current source text:**

```text
Robari Council Tenure
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0815

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[407].additionalInfo` — Afrin-Specific Events; startDate=1973; endDate=(none); Robari Council Tenure

**Current source text:**

```text
In 1973 the lawyer Esmet Robarî began twenty years as a member of the Syrian People's Council.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0816

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[408].mainEvent` — Afrin-Specific Events; startDate=1973; endDate=(none); Tayîrê Council Election

**Current source text:**

```text
Tayîrê Council Election
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0817

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[408].additionalInfo` — Afrin-Specific Events; startDate=1973; endDate=(none); Tayîrê Council Election

**Current source text:**

```text
In 1973 Tayîrê Dîkê was elected to the Aleppo Provincial Council through the Kurdish political movement. He was re-elected in 1977 and served until 1981.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0818

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[409].mainEvent` — Afrin-Specific Events; startDate=1974; endDate=(none); Afrin Bridge Collapse

**Current source text:**

```text
Afrin Bridge Collapse
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0819

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[409].additionalInfo` — Afrin-Specific Events; startDate=1974; endDate=(none); Afrin Bridge Collapse

**Current source text:**

```text
The bridge built by the Germans at Afrin in 1898 collapsed in a flood on 16 February 1974.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0820

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[410].mainEvent` — Afrin-Specific Events; startDate=1975; endDate=(none); Afrin Bridge Construction

**Current source text:**

```text
Afrin Bridge Construction
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0821

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[410].additionalInfo` — Afrin-Specific Events; startDate=1975; endDate=(none); Afrin Bridge Construction

**Current source text:**

```text
A new bridge over the Afrin river in Afrin city was built in 1975.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0822

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[411].mainEvent` — Afrin-Specific Events; startDate=1975; endDate=(none); District Regions Created

**Current source text:**

```text
District Regions Created
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0823

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[411].additionalInfo` — Afrin-Specific Events; startDate=1975; endDate=(none); District Regions Created

**Current source text:**

```text
In 1975 three new sub-districts were created within the Afrin district, namely Mabeta, Şiyê and Şera.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0824

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[412].mainEvent` — Afrin-Specific Events; startDate=1976; endDate=1986; Abu Assaf Excavates Ain Dara Temple

**Current source text:**

```text
Abu Assaf Excavates Ain Dara Temple
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0825

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[412].additionalInfo` — Afrin-Specific Events; startDate=1976; endDate=1986; Abu Assaf Excavates Ain Dara Temple

**Current source text:**

```text
After soundings by the Damascus antiquities department under Seirafi in 1956, 1962 and 1964, Ali Abu Assaf directed the major excavations of Tell 'Ain Dara in 1976 and from 1978 to 1986. These campaigns uncovered the Iron Age temple with its basalt lions, sphinxes and giant footprints carved in the limestone threshold.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0826

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[413].mainEvent` — Afrin-Specific Events; startDate=1976; endDate=(none); Simo Council Victory

**Current source text:**

```text
Simo Council Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0827

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[413].additionalInfo` — Afrin-Specific Events; startDate=1976; endDate=(none); Simo Council Victory

**Current source text:**

```text
In 1976 Enwer Simo of the Simo family won election to the Aleppo Provincial Council through the Kurdish national movement.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0828

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[414].mainEvent` — Afrin-Specific Events; startDate=1976; endDate=(none); Xelîl Council Victory

**Current source text:**

```text
Xelîl Council Victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0829

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[414].additionalInfo` — Afrin-Specific Events; startDate=1976; endDate=(none); Xelîl Council Victory

**Current source text:**

```text
In 1976 Xelîl of the Mistikê family of Be'dîna won election to the Aleppo Provincial Council for the Afrin district.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0830

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[415].mainEvent` — Afrin-Specific Events; startDate=1977; endDate=(none); Mountain Name Arabization

**Current source text:**

```text
Mountain Name Arabization
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0831

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[415].additionalInfo` — Afrin-Specific Events; startDate=1977; endDate=(none); Mountain Name Arabization

**Current source text:**

```text
In 1977 most place-names in Çiyayê Kurmênc were Arabized under Interior Ministry Directive no. 15801, and the mountain itself was renamed Jabal Halab, the Mountain of Aleppo, though it lies more than 60 km from the city.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0832

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[416].mainEvent` — Afrin-Specific Events; startDate=1978; endDate=(none); First Pirina Factory Founded

**Current source text:**

```text
First Pirina Factory Founded
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0833

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[416].additionalInfo` — Afrin-Specific Events; startDate=1978; endDate=(none); First Pirina Factory Founded

**Current source text:**

```text
The first factory processing pirina, the pressed residue of the olive mills, was founded in Çiyayê Kurmênc in 1978 in cooperative form. About thirteen private pirina factories later followed in the district, whose annual pirina output Eli puts at around 120,000 tons.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0834

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[417].mainEvent` — Afrin-Specific Events; startDate=1981; endDate=(none); Tayîrê Term Ends

**Current source text:**

```text
Tayîrê Term Ends
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0835

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[417].additionalInfo` — Afrin-Specific Events; startDate=1981; endDate=(none); Tayîrê Term Ends

**Current source text:**

```text
Tayîrê Dîkê's second consecutive term on the Aleppo Provincial Council ended in 1981.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0836

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[418].mainEvent` — Afrin-Specific Events; startDate=1983; endDate=(none); Khalil Afrin Return

**Current source text:**

```text
Khalil Afrin Return
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0837

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[418].additionalInfo` — Afrin-Specific Events; startDate=1983; endDate=(none); Khalil Afrin Return

**Current source text:**

```text
Îbrahîm Xelîl Hemdo returned to Afrin city in 1983 after teaching in Saudi Arabia.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0838

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[419].mainEvent` — Afrin-Specific Events; startDate=1983; endDate=1991; Khalil Religious Teaching

**Current source text:**

```text
Khalil Religious Teaching
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0839

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[419].additionalInfo` — Afrin-Specific Events; startDate=1983; endDate=1991; Khalil Religious Teaching

**Current source text:**

```text
From 1983 to 1991 Îbrahîm Xelîl Hemdo taught religious studies in the schools of Afrin.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0840

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[420].mainEvent` — Afrin-Specific Events; startDate=1984; endDate=(none); Ehmedê Death

**Current source text:**

```text
Ehmedê Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0841

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[420].additionalInfo` — Afrin-Specific Events; startDate=1984; endDate=(none); Ehmedê Death

**Current source text:**

```text
Ehmedê Xelîl, a well-known man of the Ce'fer family of Me'mila, died in 1984.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0842

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[421].mainEvent` — Afrin-Specific Events; startDate=1985; endDate=(none); Hussein Afrin Relocation

**Current source text:**

```text
Hussein Afrin Relocation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0843

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[421].additionalInfo` — Afrin-Specific Events; startDate=1985; endDate=(none); Hussein Afrin Relocation

**Current source text:**

```text
Sheikh Husên, the Naqshbandi leader, moved to Afrin city in 1985. There he performed the dhikr with his followers on Mondays and Thursdays.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0844

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[422].mainEvent` — Afrin-Specific Events; startDate=1985; endDate=(none); Second Bridge Built

**Current source text:**

```text
Second Bridge Built
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0845

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[422].additionalInfo` — Afrin-Specific Events; startDate=1985; endDate=(none); Second Bridge Built

**Current source text:**

```text
A second bridge over the Afrin river in Afrin city was built in 1985.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0846

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[423].mainEvent` — Afrin-Specific Events; startDate=1986; endDate=1998; Betal Council Service

**Current source text:**

```text
Betal Council Service
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0847

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[423].additionalInfo` — Afrin-Specific Events; startDate=1986; endDate=1998; Betal Council Service

**Current source text:**

```text
From 1986 to 1998 Betal of the Seydê Mîmê family represented the Afrin district in the Syrian People's Council for the Ba'ath Party.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0848

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[424].mainEvent` — Afrin-Specific Events; startDate=1986; endDate=(none); Newroz Crackdown in Afrin

**Current source text:**

```text
Newroz Crackdown in Afrin
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0849

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[424].additionalInfo` — Afrin-Specific Events; startDate=1986; endDate=(none); Newroz Crackdown in Afrin

**Current source text:**

```text
When the regime banned Newroz celebrations in 1986, the ban drew more Kurds into the festival and made it political. On 21 March 1986 Kurdish youth in Afrin took to the streets. Three Kurds were killed and eighty were arrested.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0850

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[425].mainEvent` — Afrin-Specific Events; startDate=1987; endDate=(none); Cemîl Death

**Current source text:**

```text
Cemîl Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0851

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[425].additionalInfo` — Afrin-Specific Events; startDate=1987; endDate=(none); Cemîl Death

**Current source text:**

```text
Cemîl Axa Çirûsî, the former mayor of Afrin, died in 1987.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0852

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[426].mainEvent` — Afrin-Specific Events; startDate=1988; endDate=(none); Duderiyê Cave Discovery

**Current source text:**

```text
Duderiyê Cave Discovery
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0853

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[426].additionalInfo` — Afrin-Specific Events; startDate=1988; endDate=(none); Duderiyê Cave Discovery

**Current source text:**

```text
In 1988 a Japanese archaeological mission identified the Duderiyê cave on Mount Lêlûn as an excavation site, and it began digging in 1989.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0854

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[427].mainEvent` — Afrin-Specific Events; startDate=1990; endDate=(none); Afrin Elects Six Kurdish Independents

**Current source text:**

```text
Afrin Elects Six Kurdish Independents
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0855

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[427].additionalInfo` — Afrin-Specific Events; startDate=1990; endDate=(none); Afrin Elects Six Kurdish Independents

**Current source text:**

```text
In the parliamentary elections of May 1990 the regime allowed independent candidates to run, and six deputies from the ranks of the PKK were elected from Afrin as independents. The result showed the movement's dominance in the region, where it had displaced the older Kurdish parties during the 1980s.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0856

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[428].mainEvent` — Afrin-Specific Events; startDate=1990; endDate=(none); Reco Road Development

**Current source text:**

```text
Reco Road Development
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0857

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[428].additionalInfo` — Afrin-Specific Events; startDate=1990; endDate=(none); Reco Road Development

**Current source text:**

```text
From the start of the 1990s a major building boom began in Afrin, including multi-storey development along both sides of the Reco road.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0858

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[429].mainEvent` — Afrin-Specific Events; startDate=1993; endDate=(none); Duderiyê Findings Published

**Current source text:**

```text
Duderiyê Findings Published
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0859

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[429].additionalInfo` — Afrin-Specific Events; startDate=1993; endDate=(none); Duderiyê Findings Published

**Current source text:**

```text
In 1993 the Japanese archaeological mission published its findings from the Duderiyê cave in a report in Japan.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0860

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[430].mainEvent` — Afrin-Specific Events; startDate=1993; endDate=1996; Jindires Tell Excavation

**Current source text:**

```text
Jindires Tell Excavation
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0861

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[430].additionalInfo` — Afrin-Specific Events; startDate=1993; endDate=1996; Jindires Tell Excavation

**Current source text:**

```text
From 1993 to 1996 a joint Syrian-German expedition excavated the Jindires tell, uncovering an area of 3,150 square metres.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0862

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[431].mainEvent` — Afrin-Specific Events; startDate=1993; endDate=(none); Kurdish Poetry Festival

**Current source text:**

```text
Kurdish Poetry Festival
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0863

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[431].additionalInfo` — Afrin-Specific Events; startDate=1993; endDate=(none); Kurdish Poetry Festival

**Current source text:**

```text
The first Kurdish poetry festival was held in October 1993 on the Roman theatre of Nebî Horî (Cyrrhus).
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0864

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[432].mainEvent` — Afrin-Specific Events; startDate=1993; endDate=(none); Neanderthal Skeleton Found

**Current source text:**

```text
Neanderthal Skeleton Found
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0865

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[432].additionalInfo` — Afrin-Specific Events; startDate=1993; endDate=(none); Neanderthal Skeleton Found

**Current source text:**

```text
In the summer of 1993 the skeleton of a Neanderthal child was found in the Duderiyê cave. It is the most complete Neanderthal child skeleton found anywhere in the world, and its bones are dated to about 100,000 years ago.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0866

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[433].mainEvent` — Afrin-Specific Events; startDate=1993; endDate=(none); Robari Service Ends

**Current source text:**

```text
Robari Service Ends
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0867

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[433].additionalInfo` — Afrin-Specific Events; startDate=1993; endDate=(none); Robari Service Ends

**Current source text:**

```text
Esmet Robarî's twenty years in the Syrian People's Council, begun in 1973, ended around 1993.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0868

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[434].mainEvent` — Afrin-Specific Events; startDate=1994; endDate=1998; Ain Dara Conservation Project

**Current source text:**

```text
Ain Dara Conservation Project
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0869

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[434].additionalInfo` — Afrin-Specific Events; startDate=1994; endDate=1998; Ain Dara Conservation Project

**Current source text:**

```text
From 1994 to 1998 the Syrian antiquities directorate and the National Research Institute for Cultural Properties in Tokyo carried out conservation and restoration work at 'Ain Dara. In that project the basalt lion statue was restored.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0870

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[435].mainEvent` — Afrin-Specific Events; startDate=1994; endDate=(none); Bekir Burial

**Current source text:**

```text
Bekir Burial
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0871

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[435].additionalInfo` — Afrin-Specific Events; startDate=1994; endDate=(none); Bekir Burial

**Current source text:**

```text
Mihemed Bekir of the Simo family, a politician and writer, died in 1994 and was buried in the Çeqelê Ortê cemetery.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0872

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[436].mainEvent` — Afrin-Specific Events; startDate=1994; endDate=(none); Feride Death

**Current source text:**

```text
Feride Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0873

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[436].additionalInfo` — Afrin-Specific Events; startDate=1994; endDate=(none); Feride Death

**Current source text:**

```text
Ferîde Hanim, the wife of Nûrî Dêrsimî, died in 1994.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0874

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[437].mainEvent` — Afrin-Specific Events; startDate=1994; endDate=(none); Husên Death

**Current source text:**

```text
Husên Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0875

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[437].additionalInfo` — Afrin-Specific Events; startDate=1994; endDate=(none); Husên Death

**Current source text:**

```text
Husên 'Ewnî, the Şêxan leader and former deputy for Çiyayê Kurmênc, died in 1994 at the age of 90.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0876

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[438].mainEvent` — Afrin-Specific Events; startDate=1994; endDate=(none); Mabeta Population Count

**Current source text:**

```text
Mabeta Population Count
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0877

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[438].additionalInfo` — Afrin-Specific Events; startDate=1994; endDate=(none); Mabeta Population Count

**Current source text:**

```text
The 1994 census recorded 1,974 residents in the town of Mabeta.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0878

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[439].mainEvent` — Afrin-Specific Events; startDate=1995; endDate=(none); Yazidi Census Conducted

**Current source text:**

```text
Yazidi Census Conducted
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0879

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[439].additionalInfo` — Afrin-Specific Events; startDate=1995; endDate=(none); Yazidi Census Conducted

**Current source text:**

```text
In 1995 an informal census made with Sheikh Husên's help counted 677 Yezidi households, roughly 5,000 people, in the Afrin region.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0880

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[440].mainEvent` — Afrin-Specific Events; startDate=1996; endDate=(none); Jindires Bronze Discovery

**Current source text:**

```text
Jindires Bronze Discovery
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0881

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[440].additionalInfo` — Afrin-Specific Events; startDate=1996; endDate=(none); Jindires Bronze Discovery

**Current source text:**

```text
In 1996, during construction of the market 200 metres north of the Jindires tell, bronze and metal artifacts were discovered.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0882

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[441].mainEvent` — Afrin-Specific Events; startDate=1996; endDate=(none); Çirûsî Death

**Current source text:**

```text
Çirûsî Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0883

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[441].additionalInfo` — Afrin-Specific Events; startDate=1996; endDate=(none); Çirûsî Death

**Current source text:**

```text
Dr. Ehmedê Çirûsî, a Kurdish intellectual of the Şikaka Çirûsan, died in 1996.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0884

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[442].mainEvent` — Afrin-Specific Events; startDate=1997; endDate=(none); Sheikh Is Death

**Current source text:**

```text
Sheikh Is Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0885

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[442].additionalInfo` — Afrin-Specific Events; startDate=1997; endDate=(none); Sheikh Is Death

**Current source text:**

```text
Şêx Îs of the Qadirî sheikhs of Meydankê died in 1997. With his death the sheikh tradition at Meydankê ended.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0886

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[443].mainEvent` — Afrin-Specific Events; startDate=1998; endDate=(none); Arab Census Initiative

**Current source text:**

```text
Arab Census Initiative
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0887

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[443].additionalInfo` — Afrin-Specific Events; startDate=1998; endDate=(none); Arab Census Initiative

**Current source text:**

```text
In 1998 Eli made an approximate census of the Afrin district's Arab population and recorded its tribal structure.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0888

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[444].mainEvent` — Afrin-Specific Events; startDate=1998; endDate=(none); Henan Dhikr Permission

**Current source text:**

```text
Henan Dhikr Permission
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0889

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[444].additionalInfo` — Afrin-Specific Events; startDate=1998; endDate=(none); Henan Dhikr Permission

**Current source text:**

```text
In 1998 the family of Şêx Ebdilhenan of Bablîtê received official permission from the Aleppo awqaf for their dhikr corner.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0890

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[445].mainEvent` — Afrin-Specific Events; startDate=1998; endDate=(none); Hussein Zawiya Approval

**Current source text:**

```text
Hussein Zawiya Approval
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0891

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[445].additionalInfo` — Afrin-Specific Events; startDate=1998; endDate=(none); Hussein Zawiya Approval

**Current source text:**

```text
In 1998 Sheikh Husên received approval for a religious zawiya from the Aleppo awqaf.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0892

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[446].mainEvent` — Afrin-Specific Events; startDate=1998; endDate=(none); Kemal Council Appointment

**Current source text:**

```text
Kemal Council Appointment
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0893

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[446].additionalInfo` — Afrin-Specific Events; startDate=1998; endDate=(none); Kemal Council Appointment

**Current source text:**

```text
In 1998 Kemal of the 'Umê family became a member of the Syrian People's Council.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0894

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[447].mainEvent` — Afrin-Specific Events; startDate=1998; endDate=(none); Topele House Abandoned

**Current source text:**

```text
Topele House Abandoned
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0895

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[447].additionalInfo` — Afrin-Specific Events; startDate=1998; endDate=(none); Topele House Abandoned

**Current source text:**

```text
On a 1998 visit, the old house in Topele Mahmud village, dated 1032 in the Eastern calendar, stood closed and abandoned. Its owner Xelîlê Mehmûd had moved to the town of Bilbil.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0896

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[448].mainEvent` — Afrin-Specific Events; startDate=1999; endDate=(none); Öcalan Abduction Protests

**Current source text:**

```text
Öcalan Abduction Protests
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0897

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[448].additionalInfo` — Afrin-Specific Events; startDate=1999; endDate=(none); Öcalan Abduction Protests

**Current source text:**

```text
Under the Adana agreement of October 1998 Syria expelled Abdullah Öcalan and closed the PKK camps. After Öcalan was abducted in Kenya and brought to Turkey, young PKK followers in Afrin mounted fierce protests against the regime in February 1999, the first such protests in Afrin since 1986.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0898

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[449].mainEvent` — Afrin-Specific Events; startDate=2000; endDate=(none); Kirif Population Survey

**Current source text:**

```text
Kirif Population Survey
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0899

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[449].additionalInfo` — Afrin-Specific Events; startDate=2000; endDate=(none); Kirif Population Survey

**Current source text:**

```text
Around 2000, about 2,000 Kirîfs, a distinct Kurdish group, remained in the Afrin district. They lived in the towns of Afrin and Jindires and in villages such as Kefir Safra, Burj and Kora.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0900

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[450].mainEvent` — Afrin-Specific Events; startDate=2000; endDate=(none); Sheikh Abdilhenan Death

**Current source text:**

```text
Sheikh Abdilhenan Death
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0901

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[450].additionalInfo` — Afrin-Specific Events; startDate=2000; endDate=(none); Sheikh Abdilhenan Death

**Current source text:**

```text
Şêx Ebdilhenan of Bablîtê, sheikh of the Rifa'î and Qadirî order, died in 2000. His eldest son Ebdilqadir succeeded him.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0902

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[451].mainEvent` — Afrin-Specific Events; startDate=2000; endDate=(none); Yazidi Population 10,000

**Current source text:**

```text
Yazidi Population 10,000
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0903

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[451].additionalInfo` — Afrin-Specific Events; startDate=2000; endDate=(none); Yazidi Population 10,000

**Current source text:**

```text
By 2000 the district's Yezidi population, over half of it displaced, exceeded 10,000 in total. Those remaining lived mainly in about twenty villages of the Cûmê plain, with families in Afrin and Jindires.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0904

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[452].mainEvent` — Afrin-Specific Events; startDate=2001; endDate=(none); Afrin Population 80,000

**Current source text:**

```text
Afrin Population 80,000
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0905

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[452].additionalInfo` — Afrin-Specific Events; startDate=2001; endDate=(none); Afrin Population 80,000

**Current source text:**

```text
At the end of 2001 the Afrin municipality estimated the town's population at 80,000, while the population register recorded 43,076.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0906

**Field:** `mainEvent`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[453].mainEvent` — Afrin-Specific Events; startDate=2002; endDate=(none); Berad Maronite Festival

**Current source text:**

```text
Berad Maronite Festival
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### TEXT-0907

**Field:** `additionalInfo`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[453].additionalInfo` — Afrin-Specific Events; startDate=2002; endDate=(none); Berad Maronite Festival

**Current source text:**

```text
On 4 May 2002 the first Maronite festival in memory of Mar Maron was held at Berad, with a pledge to repeat it annually.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->


## Image captions

### CAPTION-0001

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[0].photo.caption` — Afrin-Specific Events; startDate=-2700; endDate=-2000; Alalakh Established

**Current source text:**

```text
Alalakh's location in modern Syria
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0002

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[1].photo.caption` — Afrin-Specific Events; startDate=-2000; endDate=-1200; Alalakh is the capital of the Kingdom of Mukish

**Current source text:**

```text
Alalakh location
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0003

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[2].photo.caption` — Afrin-Specific Events; startDate=-1800; endDate=(none); Alalakh under Yamḫad as the capital of Mukiš

**Current source text:**

```text
Yamhad at its greatest extent c. 1752 BC
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0004

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[3].photo.caption` — Afrin-Specific Events; startDate=-1750; endDate=(none); Rebellion at Irride and the transfer of Alalakh to Yarim-Lim

**Current source text:**

```text
Royal Seal of Abba-El I of Yamhad
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0005

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[4].photo.caption` — Afrin-Specific Events; startDate=-1700; endDate=(none); Ammitaqum of Alalakh begins using the title king

**Current source text:**

```text
Legal case from Niqmi-Epuh to the king of Alalakh concerning the legacy of two houses
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0006

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[5].photo.caption` — Afrin-Specific Events; startDate=-1620; endDate=(none); Destruction of Alalakh Level VII by Hattusili I

**Current source text:**

```text
A map of the Hittite Old Kingdom
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0007

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[6].photo.caption` — Afrin-Specific Events; startDate=-1595; endDate=-1447; Mitanni Empire Influence in Alalakh

**Current source text:**

```text
Kingdom of Mitanni at its greatest extent under Barattarna c. 1490 BC
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0008

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[7].photo.caption` — Afrin-Specific Events; startDate=-1500; endDate=-1450; The Level IV palace archives and tablet corpus

**Current source text:**

```text
Recreation of Palace of Alalakh/Tell Atchana, Level IV, Late Bronze Age
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0009

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[8].photo.caption` — Afrin-Specific Events; startDate=-1450; endDate=(none); Idrimi’s return and rule at Alalakh

**Current source text:**

```text
The Statue of Idrimi.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0010

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[9].photo.caption` — Afrin-Specific Events; startDate=-1450; endDate=(none); The Statue of Idrimi and its inscription

**Current source text:**

```text
Inscription on the cheek of the statue
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0011

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[10].photo.caption` — Afrin-Specific Events; startDate=-1447; endDate=(none); Alalakh under Mitanni suzerainty after the 1447 BCE Egyptian campaign

**Current source text:**

```text
Ancient Egyptian empire under Thutmose III (reigned 1479–25 BCE)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0012

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[11].photo.caption` — Afrin-Specific Events; startDate=-1441; endDate=(none); Alalakh in the annals of Thutmose III

**Current source text:**

```text
Statue of Thutmosis III in the Kunsthistorisches Museum in Vienna
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0013

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[12].photo.caption` — Afrin-Specific Events; startDate=-1370; endDate=-1346; Northwestern Syria integrated into the Hittite Empire

**Current source text:**

```text
Colossal two-tonne, 1.5 metre tall, statue of Hittite King Suppiluliuma in Hatay Museum
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0014

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[13].photo.caption` — Afrin-Specific Events; startDate=-1350; endDate=(none); Šuppiluliuma I's conquest of Mukiš and the end of Level IV Alalakh

**Current source text:**

```text
Šuppiluliuma I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0015

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[14].photo.caption` — Afrin-Specific Events; startDate=-1347; endDate=-1283; Temple at Alalakh (Tell Atchana) constructed with Lion Orthostats

**Current source text:**

```text
Lion statues uncovered during excavations
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0016

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[15].photo.caption` — Afrin-Specific Events; startDate=-1340; endDate=-1330; The Hittite treaty and revolt phase after conquest

**Current source text:**

```text
CTH 136 is a fragment of the treaty
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0017

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[16].photo.caption` — Afrin-Specific Events; startDate=-1320; endDate=-1313; Alalakh Collapses
- `columns[0].events[18].photo.caption` — Afrin-Specific Events; startDate=-1280; endDate=(none); Rebellions Against Hittites in Alalakh and Aleppo

**Current source text:**

```text
Alalakh today
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0018

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[17].photo.caption` — Afrin-Specific Events; startDate=-1300; endDate=(none); Ain Dara Temple Built

**Current source text:**

```text
General view of the basalt temple remains at 'Ain Dara
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0019

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[19].photo.caption` — Afrin-Specific Events; startDate=-1200; endDate=(none); Final Late Bronze Age Destruction at Alalakh

**Current source text:**

```text
Level VII Gateway
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0020

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[20].photo.caption` — Afrin-Specific Events; startDate=-883; endDate=(none); Zamwa Assyrian Campaign

**Current source text:**

```text
Assyrian Empire during this period
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0021

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[21].photo.caption` — Afrin-Specific Events; startDate=-870; endDate=(none); Patina/Unqi in the Afrin-Azaz corridor

**Current source text:**

```text
Map of the Neo-Hittite states, including Pattin/Unqi
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0022

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[22].photo.caption` — Afrin-Specific Events; startDate=-858; endDate=(none); Hazazu/Azaz attested as an Assyrian campaign target

**Current source text:**

```text
Pattin(a)/Unqi and its capital Kinalua among the Neo-Hittite states
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0023

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[23].photo.caption` — Afrin-Specific Events; startDate=-800; endDate=(none); Bit-Agusi influence extended into the Afrin region

**Current source text:**

```text
Suppiluliuma was Unqi
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0024

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[24].photo.caption` — Afrin-Specific Events; startDate=-800; endDate=(none); Girê Endar Iron Age Horizon

**Current source text:**

```text
Ein Dara in modern times
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0025

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[25].photo.caption` — Afrin-Specific Events; startDate=-738; endDate=(none); Assyrian Deportees Settled in Unqi

**Current source text:**

```text
A map of the Neo-Assyrian Empire before (purple) and after (purple and blue) Tiglath-Pileser's reign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0026

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[26].photo.caption` — Afrin-Specific Events; startDate=-738; endDate=(none); Tiglath-pileser III conquers Unqi and captures Kunulua or Kinalia

**Current source text:**

```text
Tiglath-Pileser III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0027

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[27].photo.caption` — Afrin-Specific Events; startDate=-600; endDate=-300; Persian-Period Presence at Girê Endar

**Current source text:**

```text
Terracotta statuette of a horseman with Persian features, found in Cyprus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0028

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[28].photo.caption` — Afrin-Specific Events; startDate=-550; endDate=-330; Ahura Mazda Stone at Girê Endar

**Current source text:**

```text
Sassassinid relief at Naqsh-e Rustam showing Ahura Mazda presenting the diadem of sovereignty to Ardashir I.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0029

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[29].photo.caption` — Afrin-Specific Events; startDate=-539; endDate=(none); Persian Rule Reaches the Girê Endar Region

**Current source text:**

```text
Persian/Achaemenid Empire
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0030

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[30].photo.caption` — Afrin-Specific Events; startDate=-401; endDate=(none); Sacred fish on the Chalos/Afrin river are attested

**Current source text:**

```text
Xenophon
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0031

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[31].photo.caption` — Afrin-Specific Events; startDate=-312; endDate=-64; Siros Greek Era

**Current source text:**

```text
Map featuring Cyrrhestica
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0032

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[32].photo.caption` — Afrin-Specific Events; startDate=-301; endDate=(none); Founding of Cyrrhus (Nebi Huri)

**Current source text:**

```text
The Greek town of Siros from which the capital, Siros was named after
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0033

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[33].photo.caption` — Afrin-Specific Events; startDate=-300; endDate=(none); Jindires as Hellenistic Gindaros

**Current source text:**

```text
Jindires 2018
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0034

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[34].photo.caption` — Afrin-Specific Events; startDate=-100; endDate=-1; Girê Endar Declines

**Current source text:**

```text
Basalt lion at the 'Ain Dara (Girê Endar) temple
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0035

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[35].photo.caption` — Afrin-Specific Events; startDate=-83; endDate=(none); Tigranes takes Syria and Antioch

**Current source text:**

```text
Tigranes
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0036

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[36].photo.caption` — Afrin-Specific Events; startDate=-64; endDate=(none); Pompey Syrian Campaign

**Current source text:**

```text
Pompey
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0037

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[37].photo.caption` — Afrin-Specific Events; startDate=-64; endDate=(none); Roman Legions Quartered at Sîros

**Current source text:**

```text
Roman theatre at Cyrrhus (Nebi Huri)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0038

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[38].photo.caption` — Afrin-Specific Events; startDate=-40; endDate=(none); Persian-Roman Wars in the Siros Region

**Current source text:**

```text
The Parthian Empire at its greatest extent, ca. 40 BCE, when Parthian forces overran Syria
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0039

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[39].photo.caption` — Afrin-Specific Events; startDate=100; endDate=200; Kilotê Temple Period

**Current source text:**

```text
Temple-church at Qalat Kalota (Kela Kilotê), south façade
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0040

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[40].photo.caption` — Afrin-Specific Events; startDate=100; endDate=200; Roman Bridges in the Afrin Area

**Current source text:**

```text
Roman bridge over the Sabun Suyu near Nebi Huri
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0041

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[41].photo.caption` — Afrin-Specific Events; startDate=200; endDate=299; Dêrmişmiş Roman Burial Chamber

**Current source text:**

```text
Roman tomb at Deir Mishmish (Dêrmişmiş)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0042

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[42].photo.caption` — Afrin-Specific Events; startDate=200; endDate=299; Nabi Hori Tomb Construction

**Current source text:**

```text
Roman tower tomb at Nebi Huri (Cyrrhus), later the mosque minaret
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0043

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[43].photo.caption` — Afrin-Specific Events; startDate=202; endDate=203; Berad Shops Built

**Current source text:**

```text
General view of Barad (ancient Kaprobarada)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0044

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[44].photo.caption` — Afrin-Specific Events; startDate=224; endDate=(none); Kefer Nebo Press

**Current source text:**

```text
Kafr Nabo (Kefer Nebo) on Jebel Sem'an
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0045

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[45].photo.caption` — Afrin-Specific Events; startDate=228; endDate=(none); Zoroastrian State Religion

**Current source text:**

```text
Investiture relief of Ardashir I, founder of the Sasanian dynasty, at Naqsh-e Rostam
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0046

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[46].photo.caption` — Afrin-Specific Events; startDate=243; endDate=(none); Kilotê Buildings Dated

**Current source text:**

```text
Dwelling portico at Kalota (Kilotê)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0047

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[47].photo.caption` — Afrin-Specific Events; startDate=257; endDate=(none); Sassanid Siros Capture

**Current source text:**

```text
Rock relief of the Sasanian king Shapur I triumphing over Roman emperors
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0048

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[50].photo.caption` — Afrin-Specific Events; startDate=340; endDate=352; Birc Church Built

**Current source text:**

```text
Chancel arch of the church at Burj Haidar (Birc Hêderê)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0049

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[51].photo.caption` — Afrin-Specific Events; startDate=347; endDate=(none); Maron's Birth

**Current source text:**

```text
Icon of Mar Maron
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0050

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[52].photo.caption` — Afrin-Specific Events; startDate=372; endDate=(none); Fafirtîn Church Construction

**Current source text:**

```text
Apse of the church at Fafertin (Fafirtîn), dated 372 CE
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0051

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[53].photo.caption` — Afrin-Specific Events; startDate=376; endDate=(none); Kilotê Building Dates

**Current source text:**

```text
Column shaft at Kalota (Kilotê)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0052

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[54].photo.caption` — Afrin-Specific Events; startDate=389; endDate=(none); Mar Sem'an Born

**Current source text:**

```text
Icon of Mar Sem'an (Simeon Stylites)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0053

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[56].photo.caption` — Afrin-Specific Events; startDate=393; endDate=(none); Tawdora's Birth

**Current source text:**

```text
Engraving of Tawdora (Theodoret), bishop of Cyrrhus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0054

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[57].photo.caption` — Afrin-Specific Events; startDate=398; endDate=(none); Kefer Nebo Church Built

**Current source text:**

```text
Apse of the church at Kafr Nabo (Kefer Nebo)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0055

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[58].photo.caption` — Afrin-Specific Events; startDate=399; endDate=402; Julian's Church Built

**Current source text:**

```text
Chapel apse of the church of Julianos at Barad (Berad)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0056

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[59].photo.caption` — Afrin-Specific Events; startDate=400; endDate=600; Xirabî Christian Period

**Current source text:**

```text
The basilica of Kharab Shams (Xirabî Şemsê)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0057

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[60].photo.caption` — Afrin-Specific Events; startDate=410; endDate=(none); Maron's Death

**Current source text:**

```text
Northern basilica at Brad (Berad), where Mar Maron is believed to be buried
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0058

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[61].photo.caption` — Afrin-Specific Events; startDate=423; endDate=(none); Tawdora Becomes Bishop of Sîros

**Current source text:**

```text
Ruins of Cyrrhus (Sîros), seat of Tawdora's diocese
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0059

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[62].photo.caption` — Afrin-Specific Events; startDate=444; endDate=(none); Tawdora Writes the Religious History

**Current source text:**

```text
Manuscript page of a work by Theodoret of Cyrrhus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0060

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[63].photo.caption` — Afrin-Specific Events; startDate=459; endDate=(none); Mar Sem'an Dies

**Current source text:**

```text
Remains of Mar Sem'an's pillar at Qal'at Sim'an
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0061

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[64].photo.caption` — Afrin-Specific Events; startDate=466; endDate=(none); Tawdora's Death Recorded

**Current source text:**

```text
Theodoret of Cyrrhus in a 1584 engraving
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0062

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[65].photo.caption` — Afrin-Specific Events; startDate=476; endDate=490; Original Simeon Church

**Current source text:**

```text
Façade of the church of Mar Sem'an (Qal'at Sim'an)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0063

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[66].photo.caption` — Afrin-Specific Events; startDate=491; endDate=(none); Basûfan Church Built

**Current source text:**

```text
Church of St Phocas (491 CE) at Basûfan, photographed by Gertrude Bell
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0064

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[67].photo.caption` — Afrin-Specific Events; startDate=492; endDate=(none); Kilotê Church Construction

**Current source text:**

```text
South façade of the east church at Kalota (Kilotê), built 492 CE
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0065

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[69].photo.caption` — Afrin-Specific Events; startDate=496; endDate=(none); Berad Residences Built

**Current source text:**

```text
Portico of a residence at Barad (Berad)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0066

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[71].photo.caption` — Afrin-Specific Events; startDate=500; endDate=1450; Qîbar Bridge Established

**Current source text:**

```text
Old bridge over the Afrin river near Nebi Huri
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0067

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[72].photo.caption` — Afrin-Specific Events; startDate=525; endDate=(none); Kefer Nebo Complex

**Current source text:**

```text
Remains of the church complex at Kafr Nabo (Kefer Nebo)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0068

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[73].photo.caption` — Afrin-Specific Events; startDate=532; endDate=(none); Sîros Peace Treaty

**Current source text:**

```text
Emperor Justinian I, who concluded the 532 treaty with Persia (San Vitale mosaic)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0069

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[74].photo.caption` — Afrin-Specific Events; startDate=540; endDate=(none); Sîros First Destruction

**Current source text:**

```text
Plate of Khosrow I Anushirvan, whose forces destroyed Sîros in 540
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0070

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[75].photo.caption` — Afrin-Specific Events; startDate=541; endDate=(none); Western Berad Church

**Current source text:**

```text
West portal of a church at Barad (Berad)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0071

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[76].photo.caption` — Afrin-Specific Events; startDate=545; endDate=(none); Kilotê Building Period

**Current source text:**

```text
General view of Kalota (Kilotê) from the southwest
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0072

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[77].photo.caption` — Afrin-Specific Events; startDate=550; endDate=(none); Telanissos Memorial Church

**Current source text:**

```text
Ruins at Deir Sem'an (Telanissos)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0073

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[78].photo.caption` — Afrin-Specific Events; startDate=573; endDate=(none); Kimar Second Church

**Current source text:**

```text
Chancel arch of the east church at Kimar
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0074

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[79].photo.caption` — Afrin-Specific Events; startDate=574; endDate=(none); Second Siros Destruction

**Current source text:**

```text
Ruins of Cyrrhus (Sîros)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0075

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[80].photo.caption` — Afrin-Specific Events; startDate=600; endDate=(none); Persian Village Devastation

**Current source text:**

```text
Map of the Byzantine-Persian campaigns of 611-624 CE
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0076

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[81].photo.caption` — Afrin-Specific Events; startDate=600; endDate=630; Persian attacks on Kurmanj Mountains

**Current source text:**

```text
Coin of Emperor Heraclius, who expelled the Persians from Syria
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0077

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[83].photo.caption` — Afrin-Specific Events; startDate=636; endDate=(none); Muslim Conquest of Cûmê, Antioch and Sîros

**Current source text:**

```text
Map of the Muslim conquest of the Levant
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0078

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[84].photo.caption` — Afrin-Specific Events; startDate=637; endDate=(none); Muslims Take the Whole Sîros District

**Current source text:**

```text
Mosaics in the Kahramanmaraş museum, ancient Germanicia (Circim/Marash)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0079

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[85].photo.caption` — Afrin-Specific Events; startDate=637; endDate=(none); Sîros Jizya Agreement

**Current source text:**

```text
Roman bridge at Cyrrhus (Sîros)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0080

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[86].photo.caption` — Afrin-Specific Events; startDate=652; endDate=(none); Shrine of Abdurrahman bin 'Awf

**Current source text:**

```text
Calligraphy of the name Abdurrahman bin 'Awf in the Prophet's Mosque
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0081

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[87].photo.caption` — Afrin-Specific Events; startDate=707; endDate=(none); Jarajima (Circim) Christians Settled in Hawar and Lelun Mountains

**Current source text:**

```text
Gold dinar of Caliph al-Walid I, who resettled the Jarajima in 707 CE
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0082

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[89].photo.caption` — Afrin-Specific Events; startDate=900; endDate=1300; Gradual Decline of Greek and Syriac Christian Presence in the Siros Region

**Current source text:**

```text
Qal'at Sim'an, where Syriac and Greek inscriptions continue into the late tenth century
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0083

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[90].photo.caption` — Afrin-Specific Events; startDate=900; endDate=1000; Kela Kilotê Fortification

**Current source text:**

```text
The fortified temple-church hill of Qalat Kalota (Kela Kilotê)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0084

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[91].photo.caption` — Afrin-Specific Events; startDate=905; endDate=(none); Byzantine Siros Capture

**Current source text:**

```text
Nebi Huri (Cyrrhus), called Corice by the Crusaders
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0085

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[92].photo.caption` — Afrin-Specific Events; startDate=922; endDate=(none); Patriarch Yûheneyê Çaran Dies

**Current source text:**

```text
Serê Kaniyê (Ras al-'Ayn), where Patriarch John IV died and was buried
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0086

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[93].photo.caption` — Afrin-Specific Events; startDate=950; endDate=(none); Nikephoros Tower Project

**Current source text:**

```text
The Byzantine emperor Nikephoros II Phokas
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0087

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[95].photo.caption` — Afrin-Specific Events; startDate=957; endDate=(none); Patriarch Şeşan Dies

**Current source text:**

```text
The citadel of Entab (Gaziantep), where Patriarch Yûheneyê Şeşan died
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0088

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[96].photo.caption` — Afrin-Specific Events; startDate=962; endDate=985; Saman Castle Victory

**Current source text:**

```text
Qal'at Sem'an, the fortress of Sem'an
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0089

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[97].photo.caption` — Afrin-Specific Events; startDate=969; endDate=(none); Byzantine Endar Conquest

**Current source text:**

```text
The mound of 'Ain Dara (Endar)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0090

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[98].photo.caption` — Afrin-Specific Events; startDate=1076; endDate=(none); Geilani Birth

**Current source text:**

```text
Depiction of Sheikh Abdilqadir Gêlanî
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0091

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[99].photo.caption` — Afrin-Specific Events; startDate=1084; endDate=(none); Seljuk Battle at the Afrin River

**Current source text:**

```text
The Afrin river near 'Ain Dara
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0092

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[100].photo.caption` — Afrin-Specific Events; startDate=1100; endDate=(none); Endar Zoroastrian Settlement

**Current source text:**

```text
Sphinx at the 'Ain Dara (Endarê) temple
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0093

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[101].photo.caption` — Afrin-Specific Events; startDate=1118; endDate=(none); Al-Rifai's Birth

**Current source text:**

```text
Al-Rifai Mosque in Cairo, of the Rifa'i order
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0094

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[102].photo.caption` — Afrin-Specific Events; startDate=1122; endDate=(none); Battle at "Efrin hill" between Seljuk and Antioch

**Current source text:**

```text
Coin of the Artuqid dynasty
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0095

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[103].photo.caption` — Afrin-Specific Events; startDate=1140; endDate=(none); Sîros Earthquake Damage

**Current source text:**

```text
Remains at Sîros (Nebi Huri)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0096

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[104].photo.caption` — Afrin-Specific Events; startDate=1145; endDate=(none); Hogir's Ruha Campaign

**Current source text:**

```text
The citadel of Ruha (Urfa/Edessa)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0097

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[105].photo.caption` — Afrin-Specific Events; startDate=1150; endDate=(none); Zengi Captures Sîros

**Current source text:**

```text
Dome of Nur al-Din's madrasa in Damascus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0098

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[106].photo.caption` — Afrin-Specific Events; startDate=1157; endDate=(none); Sîros Strategic Destruction

**Current source text:**

```text
The abandoned site of Sîros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0099

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[107].photo.caption` — Afrin-Specific Events; startDate=1166; endDate=(none); Geilani's Death

**Current source text:**

```text
Shrine of Abdilqadir Gêlanî in Baghdad, 1920s
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0100

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[108].photo.caption` — Afrin-Specific Events; startDate=1182; endDate=(none); Al-Rifai's Death

**Current source text:**

```text
Mausoleum in the Al-Rifai Mosque, Cairo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0101

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[109].photo.caption` — Afrin-Specific Events; startDate=1200; endDate=1700; Basûtê Mendi Control

**Current source text:**

```text
Basûtê (Basuta) village
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0102

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[111].photo.caption` — Afrin-Specific Events; startDate=1200; endDate=1516; Kilis Emirate Defense

**Current source text:**

```text
Ottoman-era doorway in Kilis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0103

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[113].photo.caption` — Afrin-Specific Events; startDate=1200; endDate=(none); Yezidi Religion Spreads in Çiyayê Kurmênc

**Current source text:**

```text
A Yezidi priest at Lalish
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0104

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[114].photo.caption` — Afrin-Specific Events; startDate=1245; endDate=(none); Basûtê Aleppo Clash

**Current source text:**

```text
The citadel of Aleppo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0105

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[116].photo.caption` — Afrin-Specific Events; startDate=1314; endDate=(none); Altunbugha Column Transfer

**Current source text:**

```text
The Altunbogha mosque in Aleppo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0106

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[117].photo.caption` — Afrin-Specific Events; startDate=1380; endDate=(none); Mendi Independence End

**Current source text:**

```text
Map of the Mamluk Sultanate
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0107

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[123].photo.caption` — Afrin-Specific Events; startDate=1500; endDate=(none); Kurdish Settlement at the Sem'an Castle

**Current source text:**

```text
The church of Mar Sem'an (Qal'at Sim'an)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0108

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[124].photo.caption` — Afrin-Specific Events; startDate=1500; endDate=(none); Sasun Emirate Formation

**Current source text:**

```text
The mountains of Sasun
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0109

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[125].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=(none); Canpolat's Istanbul Journey

**Current source text:**

```text
Istanbul in a 16th-century miniature by Matrakçı Nasuh
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0110

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[126].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=(none); Circassian Begs Submit

**Current source text:**

```text
Sultan Selim I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0111

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[127].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=(none); Habib Castle Execution

**Current source text:**

```text
The citadel of Aleppo, where Habib was summoned and killed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0112

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[129].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=(none); Izdin Yazidi Influences Ahmed

**Current source text:**

```text
Aleppo around 1537, in a miniature by Matrakçı Nasuh
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0113

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[131].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=1520; Kilis Emirate Loses Independence

**Current source text:**

```text
Mosque minaret in Kilis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0114

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[132].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=(none); Marj Dabiq Battle

**Current source text:**

```text
The battle of Marj Dabiq in a 1524 Ottoman miniature
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0115

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[133].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=1607; Ottoman Kilis Alliance

**Current source text:**

```text
The Ottoman Empire in 1566
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0116

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[134].photo.caption` — Afrin-Specific Events; startDate=1516; endDate=(none); Qasim's Execution Ordered

**Current source text:**

```text
Topkapı Palace, where Canpolat was kept and educated
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0117

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[135].photo.caption` — Afrin-Specific Events; startDate=1520; endDate=1566; Badlisi Tribes Arrive

**Current source text:**

```text
Bitlis, origin of the Badlisi tribes
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0118

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[136].photo.caption` — Afrin-Specific Events; startDate=1543; endDate=(none); Mawlawi Tekke Construction

**Current source text:**

```text
The Mevlevihane (Mawlawi tekke) of Kilis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0119

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[138].photo.caption` — Afrin-Specific Events; startDate=1553; endDate=(none); Canpolet Mosque Built

**Current source text:**

```text
Interior of the Tekke (Canbolat Paşa) Mosque in Kilis, built 1553
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0120

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[140].photo.caption` — Afrin-Specific Events; startDate=1574; endDate=(none); Konya Family Migration

**Current source text:**

```text
The Alaeddin Mosque in Konya
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0121

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[141].photo.caption` — Afrin-Specific Events; startDate=1576; endDate=1579; Habib Beg Balis Province Transfer

**Current source text:**

```text
Byzantine tower at Balis (Barbalissos) on the Euphrates
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0122

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[142].photo.caption` — Afrin-Specific Events; startDate=1576; endDate=(none); Ja'far Beg's Death on Campaign

**Current source text:**

```text
The court of Mustafa Pasha, commander of the Şirvan campaign, in a Şeca'atname miniature
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0123

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[143].photo.caption` — Afrin-Specific Events; startDate=1579; endDate=(none); Hussein Beg Kilis Authority Shift
- `columns[0].events[217].photo.caption` — Afrin-Specific Events; startDate=1854; endDate=(none); Kilis Becomes a Qaymaqamlik

**Current source text:**

```text
Ottoman-era building in Kilis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0124

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[144].photo.caption` — Afrin-Specific Events; startDate=1596; endDate=(none); Sharafname Historical Documentation

**Current source text:**

```text
Manuscript of the Sharafnama of Sharafkhan Bidlisi (British Library)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0125

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[147].photo.caption` — Afrin-Specific Events; startDate=1607; endDate=(none); Canpolat Rebellion Crushed

**Current source text:**

```text
The Belen region, where the Canpolad rebellion was crushed in 1607
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0126

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[149].photo.caption` — Afrin-Specific Events; startDate=1611; endDate=(none); Canpolad Dynasty Ends

**Current source text:**

```text
The fortress of Belgrade, where Ali Pasha Canpolad was killed
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0127

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[153].photo.caption` — Afrin-Specific Events; startDate=1624; endDate=(none); Umîkê Meraş Rule

**Current source text:**

```text
The citadel of Maraş
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0128

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[155].photo.caption` — Afrin-Specific Events; startDate=1700; endDate=1900; Dina Tribe Dominance in Cûmê and Lêlûn

**Current source text:**

```text
Historical depiction of Yezidis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0129

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[160].photo.caption` — Afrin-Specific Events; startDate=1700; endDate=(none); Tribal Migration Period

**Current source text:**

```text
Kurdish nomads
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0130

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[167].photo.caption` — Afrin-Specific Events; startDate=1742; endDate=(none); Haji Omer Becomes Derebeg

**Current source text:**

```text
An Ottoman firman (sultanic decree)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0131

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[172].photo.caption` — Afrin-Specific Events; startDate=1774; endDate=(none); Reshi Tribe Census

**Current source text:**

```text
Carsten Niebuhr, who reported the tribe of 12,000 tents in 1774
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0132

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[173].photo.caption` — Afrin-Specific Events; startDate=1779; endDate=(none); Sheikh Khalid Birth

**Current source text:**

```text
Depiction of Sheikh Khalid al-Shahrazuri (Mawlana Khalid)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0133

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[180].photo.caption` — Afrin-Specific Events; startDate=1800; endDate=(none); Ottoman Decline in Region

**Current source text:**

```text
Sultan Selim III, in whose era Ottoman authority in the region weakened
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0134

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[188].photo.caption` — Afrin-Specific Events; startDate=1808; endDate=1839; Omer Agha Meets the Sultan

**Current source text:**

```text
Sultan Mahmud II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0135

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[201].photo.caption` — Afrin-Specific Events; startDate=1830; endDate=(none); Egyptian Syria Occupation

**Current source text:**

```text
Ibrahim Pasha of Egypt, who occupied Syria in the 1830s
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0136

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[203].photo.caption` — Afrin-Specific Events; startDate=1832; endDate=(none); Betal Agha II Hanged in Aleppo

**Current source text:**

```text
The citadel of Aleppo, below which Betal Agha II was hanged
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0137

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[206].photo.caption` — Afrin-Specific Events; startDate=1839; endDate=1861; Sinjar Yazidi Campaign

**Current source text:**

```text
Mount Sinjar, target of the campaign against the Yezidis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0138

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[219].photo.caption` — Afrin-Specific Events; startDate=1859; endDate=(none); Nebî Horî Mosque Built

**Current source text:**

```text
The tower tomb and shrine of Nebî Horî at Sîros
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0139

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[225].photo.caption` — Afrin-Specific Events; startDate=1868; endDate=(none); Iskenderun Road Project

**Current source text:**

```text
Alexandretta (Iskenderun) from the sea, early 20th century
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0140

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[226].photo.caption` — Afrin-Specific Events; startDate=1880; endDate=(none); Zêdiyê Bridge Founded

**Current source text:**

```text
Afrin (Solange Ory fonds)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0141

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[227].photo.caption` — Afrin-Specific Events; startDate=1882; endDate=(none); Afrin Bridge Opening

**Current source text:**

```text
The city of Afrin from the south
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0142

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[231].photo.caption` — Afrin-Specific Events; startDate=1885; endDate=(none); Roman Tower Renovation

**Current source text:**

```text
The Nebi Huri shrine area
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0143

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[233].photo.caption` — Afrin-Specific Events; startDate=1890; endDate=(none); Dera Governor Appointment

**Current source text:**

```text
The Hauran and Der'a region in an 1888 map
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0144

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[237].photo.caption` — Afrin-Specific Events; startDate=1900; endDate=1920; Armenian Refugee Settlement

**Current source text:**

```text
Armenian refugees in relief tents at Aintab, early twentieth century
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0145

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[247].photo.caption` — Afrin-Specific Events; startDate=1904; endDate=(none); Ottoman Arab Census

**Current source text:**

```text
Map of the Aleppo vilayet (Cuinet, 1892)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0146

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[248].photo.caption` — Afrin-Specific Events; startDate=1907; endDate=(none); Kefer Nebo Visit by Father Henry

**Current source text:**

```text
Father Henri Lammens
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0147

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[249].photo.caption` — Afrin-Specific Events; startDate=1911; endDate=(none); Afrin Railway Construction

**Current source text:**

```text
Construction camp of the Baghdad railway, early 1900s
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0148

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[251].photo.caption` — Afrin-Specific Events; startDate=1914; endDate=1918; Menan Front Service

**Current source text:**

```text
The Mesopotamian front in the First World War
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0149

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[255].photo.caption` — Afrin-Specific Events; startDate=1918; endDate=(none); Ottoman Empire Collapses

**Current source text:**

```text
Allied occupation troops in Istanbul after the Ottoman collapse
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0150

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[260].photo.caption` — Afrin-Specific Events; startDate=1919; endDate=(none); French Forces Enter Çiyayê Kurmênc

**Current source text:**

```text
French forces in Syria, 1920
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0151

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[262].photo.caption` — Afrin-Specific Events; startDate=1919; endDate=(none); Ibrahim Henano Forms His Army

**Current source text:**

```text
Ibrahim Henano (Hananu)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0152

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[263].photo.caption` — Afrin-Specific Events; startDate=1919; endDate=(none); Qitmê Becomes the French Base

**Current source text:**

```text
The railway station of Qitmê (Qatma), the first French base in the district
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0153

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[264].photo.caption` — Afrin-Specific Events; startDate=1919; endDate=1921; Qiwayi Milli Created

**Current source text:**

```text
Monument to the Kuva-yi Milliye
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0154

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[266].photo.caption` — Afrin-Specific Events; startDate=1920; endDate=(none); French Mandate Begins

**Current source text:**

```text
General Gouraud, first French High Commissioner of the Levant, 1921
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0155

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[268].photo.caption` — Afrin-Specific Events; startDate=1921; endDate=(none); Ankara Agreement Divides the Mountain

**Current source text:**

```text
Mustafa Kemal with the French diplomat Franklin-Bouillon at Ankara, 1921
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0156

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[271].photo.caption` — Afrin-Specific Events; startDate=1921; endDate=(none); Wadi al-Nishab Train Ambush

**Current source text:**

```text
A bridge on the Baghdad railway line in Syria
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0157

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[273].photo.caption` — Afrin-Specific Events; startDate=1922; endDate=(none); District of Chiyaye Kurmanc Established

**Current source text:**

```text
The Afrin (Çiyayê Kurmênc / Kurdaĝ) district
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0158

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[287].photo.caption` — Afrin-Specific Events; startDate=1925; endDate=(none); Piran Kurdish Uprising

**Current source text:**

```text
Map of the 1925 Sheikh Said uprising
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0159

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[289].photo.caption` — Afrin-Specific Events; startDate=1925; endDate=(none); Sîros Archaeological Excavation

**Current source text:**

```text
The excavated theatre of Cyrrhus (Sîros)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0160

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[290].photo.caption` — Afrin-Specific Events; startDate=1926; endDate=(none); First Yezidi School Opens

**Current source text:**

```text
The Khoybûn league, 1927
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0161

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[304].photo.caption` — Afrin-Specific Events; startDate=1930; endDate=1939; Turkish annexation attempt of Kurd Mountain

**Current source text:**

```text
The Sanjak of Alexandretta
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0162

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[309].photo.caption` — Afrin-Specific Events; startDate=1932; endDate=(none); Syrian Parliament Opens

**Current source text:**

```text
The Syrian parliament building in Damascus
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0163

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[313].photo.caption` — Afrin-Specific Events; startDate=1933; endDate=1936; Yezidi Mir Visits Qibar

**Current source text:**

```text
Ruins of the mansion of the Yezidi Mir Sa'id Beg at Baadre
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0164

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[322].photo.caption` — Afrin-Specific Events; startDate=1936; endDate=(none); Muridin Greet the Paris Delegation

**Current source text:**

```text
The Syrian delegation signing the 1936 Franco-Syrian treaty in Paris
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0165

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[323].photo.caption` — Afrin-Specific Events; startDate=1936; endDate=(none); National Bloc Election

**Current source text:**

```text
The 1936 general strike in Syria, which preceded the National Bloc's electoral victory
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0166

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[324].photo.caption` — Afrin-Specific Events; startDate=1936; endDate=(none); Syrian Federal Division

**Current source text:**

```text
Map of the states of the French Mandate
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0167

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[325].photo.caption` — Afrin-Specific Events; startDate=1936; endDate=1938; Turkish Hat Campaign

**Current source text:**

```text
Tayfur Sökmen, leader of the Hatay annexation campaign
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0168

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[326].photo.caption` — Afrin-Specific Events; startDate=1937; endDate=(none); Diyarbekiri Dersim Participation

**Current source text:**

```text
Seyid Riza, leader of the Dersim uprising, with his sons
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0169

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[330].photo.caption` — Afrin-Specific Events; startDate=1938; endDate=(none); Dêrsimî Bedirxani Alliance

**Current source text:**

```text
Dr. Nûrî Dêrsimî
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0170

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[332].photo.caption` — Afrin-Specific Events; startDate=1938; endDate=(none); Goçer Sanjak Vote

**Current source text:**

```text
The short-lived Hatay State created after the 1938 referendum
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0171

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[339].photo.caption` — Afrin-Specific Events; startDate=1939; endDate=(none); French give Alexandretta to Turkey

**Current source text:**

```text
Turkish stamp of 1939 marking the annexation of Hatay
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0172

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[344].photo.caption` — Afrin-Specific Events; startDate=1940; endDate=1950; Armenian Aleppo Migration

**Current source text:**

```text
The Armenian quarter of Aleppo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0173

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[348].photo.caption` — Afrin-Specific Events; startDate=1940; endDate=(none); Sheikh Ahmed Dies

**Current source text:**

```text
Sheikh Abdullah al-Daghestani
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0174

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[349].photo.caption` — Afrin-Specific Events; startDate=1941; endDate=1946; Allied Occupation Begins

**Current source text:**

```text
Free French and Australian troops in northern Syria, 1941
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0175

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[351].photo.caption` — Afrin-Specific Events; startDate=1941; endDate=(none); Australian Soldiers Riot in Afrin

**Current source text:**

```text
Australian and Allied commanders in Syria, 1941
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0176

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[370].photo.caption` — Afrin-Specific Events; startDate=1950; endDate=(none); Castle Historic Preservation

**Current source text:**

```text
The castle of Sem'an (Saint Simeon), preserved as a historic site
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0177

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[372].photo.caption` — Afrin-Specific Events; startDate=1950; endDate=1953; Communist Party Reaches Afrin

**Current source text:**

```text
The poet Cegerxwîn
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0178

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[375].photo.caption` — Afrin-Specific Events; startDate=1952; endDate=1995; Cyrrhus Expedition Begins

**Current source text:**

```text
The theatre of Cyrrhus, uncovered by the French expedition
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0179

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[380].photo.caption` — Afrin-Specific Events; startDate=1954; endDate=(none); Tell Andar Expedition

**Current source text:**

```text
Remains at the tell of 'Ain Dara
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0180

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[383].photo.caption` — Afrin-Specific Events; startDate=1955; endDate=(none); Ba'ath Party Reaches Afrin

**Current source text:**

```text
Michel Aflaq, founder of the Ba'ath party
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0181

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[386].photo.caption` — Afrin-Specific Events; startDate=1958; endDate=1961; Afrin District Officially Renamed

**Current source text:**

```text
The United Arab Republic (1958-1961)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0182

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[393].photo.caption` — Afrin-Specific Events; startDate=1961; endDate=(none); Khoja Supports Kurdistan

**Current source text:**

```text
Mustafa Barzani, leader of the revolution in Iraqi Kurdistan
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0183

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[400].photo.caption` — Afrin-Specific Events; startDate=1968; endDate=(none); Tell Andar Temple

**Current source text:**

```text
Toppled basalt lion at the 'Ain Dara temple
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0184

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[412].photo.caption` — Afrin-Specific Events; startDate=1976; endDate=1986; Abu Assaf Excavates Ain Dara Temple

**Current source text:**

```text
The giant footprints at the 'Ain Dara temple
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0185

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[416].photo.caption` — Afrin-Specific Events; startDate=1978; endDate=(none); First Pirina Factory Founded

**Current source text:**

```text
Olive picking in the Levant, 1942
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0186

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[424].photo.caption` — Afrin-Specific Events; startDate=1986; endDate=(none); Newroz Crackdown in Afrin

**Current source text:**

```text
Newroz flame lighting
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0187

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[426].photo.caption` — Afrin-Specific Events; startDate=1988; endDate=(none); Duderiyê Cave Discovery

**Current source text:**

```text
The Dederiyeh Neanderthal child (reconstruction)
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0188

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[431].photo.caption` — Afrin-Specific Events; startDate=1993; endDate=(none); Kurdish Poetry Festival

**Current source text:**

```text
The Roman theatre of Nebî Horî, site of the first Kurdish poetry festival
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0189

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[432].photo.caption` — Afrin-Specific Events; startDate=1993; endDate=(none); Neanderthal Skeleton Found

**Current source text:**

```text
The Neanderthal child skeleton found in the Duderiyê (Dederiyeh) cave
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0190

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[448].photo.caption` — Afrin-Specific Events; startDate=1999; endDate=(none); Öcalan Abduction Protests

**Current source text:**

```text
Abdullah Öcalan
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CAPTION-0191

**Field:** `photo.caption`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[453].photo.caption` — Afrin-Specific Events; startDate=2002; endDate=(none); Berad Maronite Festival

**Current source text:**

```text
Remains at Berad (Brad), site of the Maronite festival
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->


## Image credit wording to review

### CREDIT-0001

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[8].photo.credit` — Afrin-Specific Events; startDate=-1450; endDate=(none); Idrimi’s return and rule at Alalakh

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Photo by Tracey Howe for Making Light.
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0002

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[12].photo.credit` — Afrin-Specific Events; startDate=-1370; endDate=-1346; Northwestern Syria integrated into the Hittite Empire
- `columns[0].events[24].photo.credit` — Afrin-Specific Events; startDate=-800; endDate=(none); Girê Endar Iron Age Horizon

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
unknown
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0003

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[14].photo.credit` — Afrin-Specific Events; startDate=-1347; endDate=-1283; Temple at Alalakh (Tell Atchana) constructed with Lion Orthostats

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
unpublished photo at UCL Special Collections
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0004

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[51].photo.credit` — Afrin-Specific Events; startDate=347; endDate=(none); Maron's Birth
- `columns[0].events[81].photo.credit` — Afrin-Specific Events; startDate=600; endDate=630; Persian attacks on Kurmanj Mountains
- `columns[0].events[83].photo.credit` — Afrin-Specific Events; startDate=636; endDate=(none); Muslim Conquest of Cûmê, Antioch and Sîros
- `columns[0].events[107].photo.credit` — Afrin-Specific Events; startDate=1166; endDate=(none); Geilani's Death
- `columns[0].events[155].photo.credit` — Afrin-Specific Events; startDate=1700; endDate=1900; Dina Tribe Dominance in Cûmê and Lêlûn
- `columns[0].events[268].photo.credit` — Afrin-Specific Events; startDate=1921; endDate=(none); Ankara Agreement Divides the Mountain
- `columns[0].events[304].photo.credit` — Afrin-Specific Events; startDate=1930; endDate=1939; Turkish annexation attempt of Kurd Mountain
- `columns[0].events[309].photo.credit` — Afrin-Specific Events; startDate=1932; endDate=(none); Syrian Parliament Opens
- `columns[0].events[323].photo.credit` — Afrin-Specific Events; startDate=1936; endDate=(none); National Bloc Election
- `columns[0].events[325].photo.credit` — Afrin-Specific Events; startDate=1936; endDate=1938; Turkish Hat Campaign
- `columns[0].events[326].photo.credit` — Afrin-Specific Events; startDate=1937; endDate=(none); Diyarbekiri Dersim Participation
- `columns[0].events[330].photo.credit` — Afrin-Specific Events; startDate=1938; endDate=(none); Dêrsimî Bedirxani Alliance
- `columns[0].events[383].photo.credit` — Afrin-Specific Events; startDate=1955; endDate=(none); Ba'ath Party Reaches Afrin

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Unknown authorUnknown author, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0005

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[56].photo.credit` — Afrin-Specific Events; startDate=393; endDate=(none); Tawdora's Birth
- `columns[0].events[247].photo.credit` — Afrin-Specific Events; startDate=1904; endDate=(none); Ottoman Arab Census

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0006

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[62].photo.credit` — Afrin-Specific Events; startDate=444; endDate=(none); Tawdora Writes the Religious History

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Theodoret of Cyrus (original text), Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0007

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[63].photo.credit` — Afrin-Specific Events; startDate=459; endDate=(none); Mar Sem'an Dies
- `columns[0].events[141].photo.credit` — Afrin-Specific Events; startDate=1576; endDate=1579; Habib Beg Balis Province Transfer

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
James Gordon from Los Angeles, California, USA, CC BY 2.0
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0008

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[66].photo.credit` — Afrin-Specific Events; startDate=491; endDate=(none); Basûfan Church Built

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Gertrude Bell, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0009

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[80].photo.credit` — Afrin-Specific Events; startDate=600; endDate=(none); Persian Village Devastation

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Mohammad Adil. Original uploader was Mohammad adil at en.wikipedia, CC BY-SA 3.0
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0010

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[92].photo.credit` — Afrin-Specific Events; startDate=922; endDate=(none); Patriarch Yûheneyê Çaran Dies

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Voice of America News, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0011

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[93].photo.credit` — Afrin-Specific Events; startDate=950; endDate=(none); Nikephoros Tower Project

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Unknown Byzantine scribes, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0012

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[98].photo.credit` — Afrin-Specific Events; startDate=1076; endDate=(none); Geilani Birth

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Christies.com, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0013

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[104].photo.credit` — Afrin-Specific Events; startDate=1145; endDate=(none); Hogir's Ruha Campaign

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Brejnev, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0014

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[111].photo.credit` — Afrin-Specific Events; startDate=1200; endDate=1516; Kilis Emirate Defense
- `columns[0].events[131].photo.credit` — Afrin-Specific Events; startDate=1516; endDate=1520; Kilis Emirate Loses Independence
- `columns[0].events[138].photo.credit` — Afrin-Specific Events; startDate=1553; endDate=(none); Canpolet Mosque Built
- `columns[0].events[143].photo.credit` — Afrin-Specific Events; startDate=1579; endDate=(none); Hussein Beg Kilis Authority Shift
- `columns[0].events[217].photo.credit` — Afrin-Specific Events; startDate=1854; endDate=(none); Kilis Becomes a Qaymaqamlik

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Adam Jones from Kelowna, BC, Canada, CC BY-SA 2.0
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0015

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[117].photo.credit` — Afrin-Specific Events; startDate=1380; endDate=(none); Mendi Independence End

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
User:Historian of the arab peoples, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0016

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[125].photo.credit` — Afrin-Specific Events; startDate=1516; endDate=(none); Canpolat's Istanbul Journey
- `columns[0].events[129].photo.credit` — Afrin-Specific Events; startDate=1516; endDate=(none); Izdin Yazidi Influences Ahmed

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Matrakçı Nasuh, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0017

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[126].photo.credit` — Afrin-Specific Events; startDate=1516; endDate=(none); Circassian Begs Submit

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Claude du Bosc, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0018

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[132].photo.credit` — Afrin-Specific Events; startDate=1516; endDate=(none); Marj Dabiq Battle

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
1524, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0019

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[142].photo.credit` — Afrin-Specific Events; startDate=1576; endDate=(none); Ja'far Beg's Death on Campaign

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Asafi Dal Mehmed Çelebi, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0020

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[144].photo.credit` — Afrin-Specific Events; startDate=1596; endDate=(none); Sharafname Historical Documentation

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Unspecified, CC0
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0021

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[167].photo.credit` — Afrin-Specific Events; startDate=1742; endDate=(none); Haji Omer Becomes Derebeg

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Abdül Hamid II, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0022

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[180].photo.credit` — Afrin-Specific Events; startDate=1800; endDate=(none); Ottoman Decline in Region

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Christian Schule, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0023

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[188].photo.credit` — Afrin-Specific Events; startDate=1808; endDate=1839; Omer Agha Meets the Sultan

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Athanasios Karantz(ou)las Details on Google Art Project, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0024

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[201].photo.credit` — Afrin-Specific Events; startDate=1830; endDate=(none); Egyptian Syria Occupation

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Henri Daniel Plattel (1803-59), Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0025

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[225].photo.credit` — Afrin-Specific Events; startDate=1868; endDate=(none); Iskenderun Road Project
- `columns[0].events[249].photo.credit` — Afrin-Specific Events; startDate=1911; endDate=(none); Afrin Railway Construction

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Matson Collection, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0026

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[233].photo.credit` — Afrin-Specific Events; startDate=1890; endDate=(none); Dera Governor Appointment

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Edward Weller / Gottlieb Schumacher, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0027

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[237].photo.credit` — Afrin-Specific Events; startDate=1900; endDate=1920; Armenian Refugee Settlement

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Bain News Service, publisher, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0028

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[248].photo.credit` — Afrin-Specific Events; startDate=1907; endDate=(none); Kefer Nebo Visit by Father Henry

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Henri Lammens

(Life time: 1862-1937), Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0029

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[251].photo.credit` — Afrin-Specific Events; startDate=1914; endDate=1918; Menan Front Service

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
British official photographer, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0030

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[255].photo.credit` — Afrin-Specific Events; startDate=1918; endDate=(none); Ottoman Empire Collapses

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
NA, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0031

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[260].photo.credit` — Afrin-Specific Events; startDate=1919; endDate=(none); French Forces Enter Çiyayê Kurmênc

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
unknown army photopgrapher, France, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0032

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[262].photo.credit` — Afrin-Specific Events; startDate=1919; endDate=(none); Ibrahim Henano Forms His Army

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Not credited, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0033

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[322].photo.credit` — Afrin-Specific Events; startDate=1936; endDate=(none); Muridin Greet the Paris Delegation

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Historian, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0034

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[339].photo.credit` — Afrin-Specific Events; startDate=1939; endDate=(none); French give Alexandretta to Turkey

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Meraklı bir zat, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0035

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[349].photo.credit` — Afrin-Specific Events; startDate=1941; endDate=1946; Allied Occupation Begins

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Frank Hurley, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0036

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[351].photo.credit` — Afrin-Specific Events; startDate=1941; endDate=(none); Australian Soldiers Riot in Afrin

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
George Silk, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0037

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[386].photo.credit` — Afrin-Specific Events; startDate=1958; endDate=1961; Afrin District Officially Renamed

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Arab Hafez at English Wikipedia, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0038

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[393].photo.credit` — Afrin-Specific Events; startDate=1961; endDate=(none); Khoja Supports Kurdistan

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Барзанский фотограф.

Original uploader was Павел Шехтман at ru.wikipedia, Public domain
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0039

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[416].photo.credit` — Afrin-Specific Events; startDate=1978; endDate=(none); First Pirina Factory Founded

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Tom Beazley, published by aussiejeff, CC BY 2.0
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### CREDIT-0040

**Field:** `photo.credit`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `columns[0].events[426].photo.credit` — Afrin-Specific Events; startDate=1988; endDate=(none); Duderiyê Cave Discovery
- `columns[0].events[432].photo.credit` — Afrin-Specific Events; startDate=1993; endDate=(none); Neanderthal Skeleton Found

**Notes:** Translate descriptive wording only. Preserve author names, usernames, organization names, URLs, and license identifiers such as CC BY-SA 4.0. Do not correct the source wording in this export.

**Current source text:**

```text
Ryan Somma from Occoquan, USA, CC BY-SA 2.0
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->


## Names to review

### NAME-0001

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[2].events[46].mainEvent` — Afrin Under; startDate=-2240; endDate=-2231; Ebla
- `columns[2].events[47].mainEvent` — Afrin Under; startDate=-2230; endDate=-2221; Ebla
- `columns[2].events[48].mainEvent` — Afrin Under; startDate=-2220; endDate=-2211; Ebla
- `columns[2].events[49].mainEvent` — Afrin Under; startDate=-2210; endDate=-2201; Ebla
- `columns[2].events[50].mainEvent` — Afrin Under; startDate=-2200; endDate=-2191; Ebla
- `columns[2].events[51].mainEvent` — Afrin Under; startDate=-2190; endDate=-2181; Ebla
- `columns[2].events[52].mainEvent` — Afrin Under; startDate=-2180; endDate=-2171; Ebla
- `columns[2].events[53].mainEvent` — Afrin Under; startDate=-2170; endDate=-2161; Ebla
- `columns[2].events[54].mainEvent` — Afrin Under; startDate=-2160; endDate=-2151; Ebla
- `columns[2].events[55].mainEvent` — Afrin Under; startDate=-2150; endDate=-2141; Ebla
- `columns[2].events[56].mainEvent` — Afrin Under; startDate=-2140; endDate=-2131; Ebla
- `columns[2].events[57].mainEvent` — Afrin Under; startDate=-2130; endDate=-2121; Ebla
- `columns[2].events[58].mainEvent` — Afrin Under; startDate=-2120; endDate=-2111; Ebla
- `columns[2].events[59].mainEvent` — Afrin Under; startDate=-2110; endDate=-2101; Ebla
- `columns[2].events[60].mainEvent` — Afrin Under; startDate=-2100; endDate=-2091; Ebla
- `columns[2].events[61].mainEvent` — Afrin Under; startDate=-2090; endDate=-2081; Ebla
- `columns[2].events[62].mainEvent` — Afrin Under; startDate=-2080; endDate=-2071; Ebla
- `columns[2].events[63].mainEvent` — Afrin Under; startDate=-2070; endDate=-2061; Ebla
- `columns[2].events[64].mainEvent` — Afrin Under; startDate=-2060; endDate=-2051; Ebla
- `columns[2].events[65].mainEvent` — Afrin Under; startDate=-2050; endDate=-2041; Ebla
- `columns[2].events[66].mainEvent` — Afrin Under; startDate=-2040; endDate=-2031; Ebla
- `columns[2].events[67].mainEvent` — Afrin Under; startDate=-2030; endDate=-2021; Ebla
- `columns[2].events[68].mainEvent` — Afrin Under; startDate=-2020; endDate=-2011; Ebla
- `columns[2].events[69].mainEvent` — Afrin Under; startDate=-2010; endDate=-2001; Ebla

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ebla
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0002

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[2].events[70].mainEvent` — Afrin Under; startDate=-2000; endDate=-1991; Yamhad
- `columns[2].events[71].mainEvent` — Afrin Under; startDate=-1990; endDate=-1981; Yamhad
- `columns[2].events[72].mainEvent` — Afrin Under; startDate=-1980; endDate=-1971; Yamhad
- `columns[2].events[73].mainEvent` — Afrin Under; startDate=-1970; endDate=-1961; Yamhad
- `columns[2].events[74].mainEvent` — Afrin Under; startDate=-1960; endDate=-1951; Yamhad
- `columns[2].events[75].mainEvent` — Afrin Under; startDate=-1950; endDate=-1941; Yamhad
- `columns[2].events[76].mainEvent` — Afrin Under; startDate=-1940; endDate=-1931; Yamhad
- `columns[2].events[77].mainEvent` — Afrin Under; startDate=-1930; endDate=-1921; Yamhad
- `columns[2].events[78].mainEvent` — Afrin Under; startDate=-1920; endDate=-1911; Yamhad
- `columns[2].events[79].mainEvent` — Afrin Under; startDate=-1910; endDate=-1901; Yamhad
- `columns[2].events[80].mainEvent` — Afrin Under; startDate=-1900; endDate=-1891; Yamhad
- `columns[2].events[81].mainEvent` — Afrin Under; startDate=-1890; endDate=-1881; Yamhad
- `columns[2].events[82].mainEvent` — Afrin Under; startDate=-1880; endDate=-1871; Yamhad
- `columns[2].events[83].mainEvent` — Afrin Under; startDate=-1870; endDate=-1861; Yamhad
- `columns[2].events[84].mainEvent` — Afrin Under; startDate=-1860; endDate=-1851; Yamhad
- `columns[2].events[85].mainEvent` — Afrin Under; startDate=-1850; endDate=-1841; Yamhad
- `columns[2].events[86].mainEvent` — Afrin Under; startDate=-1840; endDate=-1831; Yamhad
- `columns[2].events[87].mainEvent` — Afrin Under; startDate=-1830; endDate=-1821; Yamhad
- `columns[2].events[88].mainEvent` — Afrin Under; startDate=-1820; endDate=-1811; Yamhad
- `columns[2].events[89].mainEvent` — Afrin Under; startDate=-1810; endDate=-1801; Yamhad
- `columns[2].events[90].mainEvent` — Afrin Under; startDate=-1800; endDate=-1791; Yamhad
- `columns[2].events[91].mainEvent` — Afrin Under; startDate=-1790; endDate=-1781; Yamhad
- `columns[2].events[92].mainEvent` — Afrin Under; startDate=-1780; endDate=-1771; Yamhad
- `columns[2].events[93].mainEvent` — Afrin Under; startDate=-1770; endDate=-1761; Yamhad
- `columns[2].events[94].mainEvent` — Afrin Under; startDate=-1760; endDate=-1751; Yamhad
- `columns[2].events[95].mainEvent` — Afrin Under; startDate=-1750; endDate=-1741; Yamhad
- `columns[2].events[96].mainEvent` — Afrin Under; startDate=-1740; endDate=-1731; Yamhad
- `columns[2].events[97].mainEvent` — Afrin Under; startDate=-1730; endDate=-1721; Yamhad
- `columns[2].events[98].mainEvent` — Afrin Under; startDate=-1720; endDate=-1711; Yamhad
- `columns[2].events[99].mainEvent` — Afrin Under; startDate=-1710; endDate=-1701; Yamhad
- `columns[2].events[100].mainEvent` — Afrin Under; startDate=-1700; endDate=-1691; Yamhad
- `columns[2].events[101].mainEvent` — Afrin Under; startDate=-1690; endDate=-1681; Yamhad
- `columns[2].events[102].mainEvent` — Afrin Under; startDate=-1680; endDate=-1671; Yamhad
- `columns[2].events[103].mainEvent` — Afrin Under; startDate=-1670; endDate=-1661; Yamhad
- `columns[2].events[104].mainEvent` — Afrin Under; startDate=-1660; endDate=-1651; Yamhad
- `columns[2].events[105].mainEvent` — Afrin Under; startDate=-1650; endDate=-1641; Yamhad
- `columns[2].events[106].mainEvent` — Afrin Under; startDate=-1640; endDate=-1631; Yamhad
- `columns[2].events[107].mainEvent` — Afrin Under; startDate=-1630; endDate=-1621; Yamhad
- `columns[2].events[108].mainEvent` — Afrin Under; startDate=-1620; endDate=-1611; Yamhad
- `columns[2].events[109].mainEvent` — Afrin Under; startDate=-1610; endDate=-1601; Yamhad
- `columns[2].events[110].mainEvent` — Afrin Under; startDate=-1600; endDate=-1591; Yamhad
- `columns[2].events[111].mainEvent` — Afrin Under; startDate=-1590; endDate=-1581; Yamhad
- `columns[2].events[112].mainEvent` — Afrin Under; startDate=-1580; endDate=-1571; Yamhad

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Yamhad
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0003

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[1].mainEvent` — Egypt; startDate=-2649; endDate=-2630; Zanakht

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Zanakht
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0004

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[2].mainEvent` — Egypt; startDate=-2630; endDate=-2611; Djoser

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Djoser
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0005

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[3].mainEvent` — Egypt; startDate=-2611; endDate=-2605; Sekhemkhet

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sekhemkhet
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0006

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[4].mainEvent` — Egypt; startDate=-2605; endDate=-2599; Khaba

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Khaba
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0007

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[5].mainEvent` — Egypt; startDate=-2599; endDate=-2575; Huni

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Huni
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0008

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[7].mainEvent` — Egypt; startDate=-2575; endDate=-2551; Snefru

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Snefru
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0009

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[8].mainEvent` — Egypt; startDate=-2551; endDate=-2528; Khufu

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Khufu
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0010

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[9].mainEvent` — Egypt; startDate=-2528; endDate=-2520; Djedefre

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Djedefre
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0011

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[10].mainEvent` — Egypt; startDate=-2520; endDate=-2494; Khafre

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Khafre
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0012

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[11].mainEvent` — Egypt; startDate=-2494; endDate=-2490; Nebka II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Nebka II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0013

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[12].mainEvent` — Egypt; startDate=-2490; endDate=-2472; Menkaure

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Menkaure
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0014

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[13].mainEvent` — Egypt; startDate=-2472; endDate=-2467; Shepseskaf

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Shepseskaf
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0015

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[14].mainEvent` — Egypt; startDate=-2467; endDate=-2465; Thamphthis

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Thamphthis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0016

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[16].mainEvent` — Egypt; startDate=-2465; endDate=-2458; Userkaf

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Userkaf
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0017

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[17].mainEvent` — Egypt; startDate=-2458; endDate=-2446; Sahure

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sahure
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0018

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[18].mainEvent` — Egypt; startDate=-2446; endDate=-2438; Neferirkare

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Neferirkare
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0019

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[19].mainEvent` — Egypt; startDate=-2438; endDate=-2431; Shepseskare

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Shepseskare
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0020

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[20].mainEvent` — Egypt; startDate=-2431; endDate=-2420; Neferefre

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Neferefre
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0021

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[21].mainEvent` — Egypt; startDate=-2420; endDate=-2389; Niuserre

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Niuserre
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0022

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[22].mainEvent` — Egypt; startDate=-2389; endDate=-2381; Menkauhor

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Menkauhor
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0023

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[23].mainEvent` — Egypt; startDate=-2381; endDate=-2353; Isesi

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Isesi
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0024

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[24].mainEvent` — Egypt; startDate=-2353; endDate=-2323; Unis

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Unis
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0025

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[26].mainEvent` — Egypt; startDate=-2323; endDate=-2291; Teti

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Teti
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0026

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[27].mainEvent` — Egypt; startDate=-2291; endDate=-2289; Userkare

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Userkare
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0027

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[28].mainEvent` — Egypt; startDate=-2289; endDate=-2255; Pepi I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Pepi I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0028

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[29].mainEvent` — Egypt; startDate=-2255; endDate=-2246; Merenre I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Merenre I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0029

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[30].mainEvent` — Egypt; startDate=-2246; endDate=-2152; Pepi II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Pepi II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0030

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[31].mainEvent` — Egypt; startDate=-2152; endDate=-2152; Merenre II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Merenre II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0031

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[32].mainEvent` — Egypt; startDate=-2152; endDate=-2150; Netjerkare Siptah

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Netjerkare Siptah
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0032

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[35].mainEvent` — Egypt; startDate=-2124; endDate=-2120; Mentuhotep I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Mentuhotep I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0033

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[36].mainEvent` — Egypt; startDate=-2120; endDate=-2108; Intef I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Intef I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0034

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[37].mainEvent` — Egypt; startDate=-2108; endDate=-2059; Intef II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Intef II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0035

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[38].mainEvent` — Egypt; startDate=-2059; endDate=-2051; Intef III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Intef III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0036

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[39].mainEvent` — Egypt; startDate=-2051; endDate=-2030; Mentuhotep II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Mentuhotep II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0037

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[42].mainEvent` — Egypt; startDate=-2000; endDate=-1988; Mentuhotep III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Mentuhotep III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0038

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[43].mainEvent` — Egypt; startDate=-1985; endDate=-1985; Qakare Intef

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Qakare Intef
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0039

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[44].mainEvent` — Egypt; startDate=-1985; endDate=-1985; Sekhentibre

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sekhentibre
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0040

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[45].mainEvent` — Egypt; startDate=-1985; endDate=-1985; Menekhkare

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Menekhkare
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0041

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[46].mainEvent` — Egypt; startDate=-1988; endDate=-1981; Mentuhotep IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Mentuhotep IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0042

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[48].mainEvent` — Egypt; startDate=-1981; endDate=-1952; Amenemhat I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenemhat I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0043

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[49].mainEvent` — Egypt; startDate=-1961; endDate=-1917; Senwosret I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Senwosret I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0044

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[50].mainEvent` — Egypt; startDate=-1919; endDate=-1885; Amenemhat II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenemhat II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0045

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[51].mainEvent` — Egypt; startDate=-1887; endDate=-1878; Senwosret II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Senwosret II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0046

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[52].mainEvent` — Egypt; startDate=-1878; endDate=-1840; Senwosret III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Senwosret III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0047

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[53].mainEvent` — Egypt; startDate=-1859; endDate=-1813; Amenemhat III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenemhat III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0048

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[54].mainEvent` — Egypt; startDate=-1814; endDate=-1805; Amenemhat IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenemhat IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0049

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[55].mainEvent` — Egypt; startDate=-1805; endDate=-1802; Nefrusobek

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Nefrusobek
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0050

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[59].mainEvent` — Egypt; startDate=-1560; endDate=-1560; Tao I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Tao I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0051

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[60].mainEvent` — Egypt; startDate=-1560; endDate=-1560; Tao II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Tao II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0052

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[61].mainEvent` — Egypt; startDate=-1552; endDate=-1550; Kamose

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Kamose
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0053

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[63].mainEvent` — Egypt; startDate=-1550; endDate=-1525; Ahmose

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ahmose
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0054

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[64].mainEvent` — Egypt; startDate=-1525; endDate=-1504; Amenhotep I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenhotep I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0055

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[65].mainEvent` — Egypt; startDate=-1504; endDate=-1492; Thutmose I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Thutmose I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0056

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[66].mainEvent` — Egypt; startDate=-1492; endDate=-1479; Thutmose II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Thutmose II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0057

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[67].mainEvent` — Egypt; startDate=-1479; endDate=-1425; Thutmose III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Thutmose III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0058

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[69].mainEvent` — Egypt; startDate=-1473; endDate=-1458; Hatshepsut

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Hatshepsut
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0059

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[70].mainEvent` — Egypt; startDate=-1427; endDate=-1400; Amenhotep II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenhotep II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0060

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[71].mainEvent` — Egypt; startDate=-1400; endDate=-1390; Thutmose IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Thutmose IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0061

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[72].mainEvent` — Egypt; startDate=-1390; endDate=-1352; Amenhotep III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenhotep III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0062

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[73].mainEvent` — Egypt; startDate=-1353; endDate=-1349; Amenhotep IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenhotep IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0063

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[74].mainEvent` — Egypt; startDate=-1349; endDate=-1336; Akhenaten

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Akhenaten
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0064

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[75].mainEvent` — Egypt; startDate=-1338; endDate=-1336; Neferneferuaton

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Neferneferuaton
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0065

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[76].mainEvent` — Egypt; startDate=-1336; endDate=-1336; Smenkhkare

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Smenkhkare
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0066

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[77].mainEvent` — Egypt; startDate=-1336; endDate=-1327; Tutankhamun

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Tutankhamun
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0067

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[78].mainEvent` — Egypt; startDate=-1327; endDate=-1323; Aya

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Aya
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0068

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[79].mainEvent` — Egypt; startDate=-1323; endDate=-1295; Haremhab

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Haremhab
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0069

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[81].mainEvent` — Egypt; startDate=-1295; endDate=-1294; Ramesses I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0070

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[82].mainEvent` — Egypt; startDate=-1294; endDate=-1279; Seti I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Seti I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0071

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[83].mainEvent` — Egypt; startDate=-1279; endDate=-1213; Ramesses II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0072

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[84].mainEvent` — Egypt; startDate=-1213; endDate=-1203; Merneptah

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Merneptah
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0073

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[85].mainEvent` — Egypt; startDate=-1203; endDate=-1200; Amenmesse

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenmesse
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0074

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[86].mainEvent` — Egypt; startDate=-1200; endDate=-1194; Seti II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Seti II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0075

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[87].mainEvent` — Egypt; startDate=-1194; endDate=-1188; Siptah

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Siptah
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0076

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[88].mainEvent` — Egypt; startDate=-1188; endDate=-1186; Tawosret

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Tawosret
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0077

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[90].mainEvent` — Egypt; startDate=-1186; endDate=-1184; Sethnakht

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sethnakht
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0078

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[91].mainEvent` — Egypt; startDate=-1184; endDate=-1153; Ramesses III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0079

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[92].mainEvent` — Egypt; startDate=-1153; endDate=-1147; Ramesses IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0080

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[93].mainEvent` — Egypt; startDate=-1147; endDate=-1143; Ramesses V

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses V
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0081

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[94].mainEvent` — Egypt; startDate=-1143; endDate=-1136; Ramesses VI

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses VI
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0082

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[95].mainEvent` — Egypt; startDate=-1136; endDate=-1129; Ramesses VII

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses VII
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0083

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[96].mainEvent` — Egypt; startDate=-1129; endDate=-1126; Ramesses VIII

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses VIII
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0084

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[97].mainEvent` — Egypt; startDate=-1126; endDate=-1108; Ramesses IX

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses IX
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0085

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[98].mainEvent` — Egypt; startDate=-1108; endDate=-1099; Ramesses X

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses X
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0086

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[99].mainEvent` — Egypt; startDate=-1099; endDate=-1070; Ramesses XI

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Ramesses XI
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0087

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[104].mainEvent` — Egypt; startDate=-1070; endDate=-1044; Smendes

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Smendes
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0088

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[109].mainEvent` — Egypt; startDate=-1044; endDate=-1040; Amenemnisu

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenemnisu
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0089

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[110].mainEvent` — Egypt; startDate=-1040; endDate=-992; Psusennes I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Psusennes I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0090

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[111].mainEvent` — Egypt; startDate=-993; endDate=-984; Amenemope

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Amenemope
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0091

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[115].mainEvent` — Egypt; startDate=-978; endDate=-959; Siamun

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Siamun
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0092

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[117].mainEvent` — Egypt; startDate=-959; endDate=-945; Psusennes II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Psusennes II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0093

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[119].mainEvent` — Egypt; startDate=-945; endDate=-924; Sheshonq I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sheshonq I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0094

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[120].mainEvent` — Egypt; startDate=-924; endDate=-889; Osorkon I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Osorkon I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0095

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[121].mainEvent` — Egypt; startDate=-890; endDate=-890; Sheshonq II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sheshonq II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0096

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[122].mainEvent` — Egypt; startDate=-889; endDate=-874; Takelot I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Takelot I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0097

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[123].mainEvent` — Egypt; startDate=-874; endDate=-850; Osorkon II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Osorkon II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0098

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[124].mainEvent` — Egypt; startDate=-865; endDate=-865; Harsiese

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Harsiese
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0099

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[125].mainEvent` — Egypt; startDate=-850; endDate=-825; Takelot II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Takelot II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0100

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[126].mainEvent` — Egypt; startDate=-825; endDate=-773; Sheshonq III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sheshonq III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0101

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[127].mainEvent` — Egypt; startDate=-773; endDate=-767; Pami

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Pami
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0102

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[128].mainEvent` — Egypt; startDate=-767; endDate=-730; Sheshonq V

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sheshonq V
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0103

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[129].mainEvent` — Egypt; startDate=-730; endDate=-712; Osorkon IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Osorkon IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0104

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[131].mainEvent` — Egypt; startDate=-818; endDate=-793; Pedubaste I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Pedubaste I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0105

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[132].mainEvent` — Egypt; startDate=-800; endDate=-800; Iuput I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Iuput I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0106

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[133].mainEvent` — Egypt; startDate=-793; endDate=-787; Sheshonq IV

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Sheshonq IV
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0107

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[134].mainEvent` — Egypt; startDate=-787; endDate=-759; Osorkon III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Osorkon III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0108

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[135].mainEvent` — Egypt; startDate=-764; endDate=-757; Takelot III

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Takelot III
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0109

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[136].mainEvent` — Egypt; startDate=-757; endDate=-754; Rudamun

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Rudamun
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0110

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[137].mainEvent` — Egypt; startDate=-754; endDate=-712; Iuput II

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Iuput II
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0111

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[138].mainEvent` — Egypt; startDate=-740; endDate=-725; Peftjaubast

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Peftjaubast
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0112

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[139].mainEvent` — Egypt; startDate=-740; endDate=-740; Namlot

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Namlot
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0113

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[140].mainEvent` — Egypt; startDate=-720; endDate=-720; Thutemhat

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Thutemhat
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0114

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[142].mainEvent` — Egypt; startDate=-724; endDate=-717; Tefnakht

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Tefnakht
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0115

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[143].mainEvent` — Egypt; startDate=-717; endDate=-712; Bakenrenef

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Bakenrenef
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0116

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[145].mainEvent` — Egypt; startDate=-743; endDate=-712; Piye

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Piye
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0117

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[146].mainEvent` — Egypt; startDate=-712; endDate=-698; Shabaqo

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Shabaqo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0118

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[147].mainEvent` — Egypt; startDate=-698; endDate=-690; Shebitqo

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Shebitqo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0119

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[148].mainEvent` — Egypt; startDate=-690; endDate=-664; Taharqo

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Taharqo
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0120

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[149].mainEvent` — Egypt; startDate=-664; endDate=-653; Tanutamani

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Tanutamani
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0121

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[162].mainEvent` — Egypt; startDate=-486; endDate=-466; Xerxes I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Xerxes I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0122

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[163].mainEvent` — Egypt; startDate=-465; endDate=-424; Artaxerxes I

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Artaxerxes I
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0123

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[182].mainEvent` — Egypt; startDate=-365; endDate=-360; Teos

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Teos
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### NAME-0124

**Field:** `mainEvent`

**Needed for:** Kurmanji

**Locations:**

- `columns[4].events[187].mainEvent` — Egypt; startDate=-338; endDate=-336; Arses

**Notes:** This is a place or ruler name. Keep the existing spelling if it is already appropriate in Kurmanji; do not invent a translation.

**Current source text:**

```text
Arses
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->


## Date labels to review

### ERA-0001

**Field:** `display abbreviation`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html: formatYear().era and search era display`

**Notes:** Choose a local display abbreviation, or keep the existing abbreviation if preferred. Stored date values and search option values must stay unchanged.

**Current source text:**

```text
BCE
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### ERA-0002

**Field:** `display abbreviation`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html: formatYear().era and search era display`

**Notes:** Choose a local display abbreviation, or keep the existing abbreviation if preferred. Stored date values and search option values must stay unchanged.

**Current source text:**

```text
CE
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

### ERA-0003

**Field:** `display abbreviation`

**Needed for:** Kurmanji, Arabic

**Locations:**

- `afrintimeline.html: year-header display`

**Notes:** Choose a local display abbreviation, or keep the existing abbreviation if preferred. Stored date values and search option values must stay unchanged.

**Current source text:**

```text
AD
```

**Kurmanji translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->

**Arabic translation:**

<!-- Add translation here, or KEEP for review items that should stay as written. -->
