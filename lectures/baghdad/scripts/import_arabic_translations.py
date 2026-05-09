from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import export_translation_markdown as export_md


SCRIPT_DIR = Path(__file__).resolve().parent
BAGHDAD_DIR = SCRIPT_DIR.parent
RETURNED_DIR = BAGHDAD_DIR / "translation-md" / "returned-md-files" / "arabic"
OUTPUT_FILE = BAGHDAD_DIR / "data" / "baghdad-i18n.ar.js"

MANUAL_ARABIC_TRANSLATIONS = {
    "html.div.aria-label.001": "اختيار اللغة",
    "html.button.aria-label.002": "الإنجليزية",
    "html.button.aria-label.003": "العربية",
    "html.button.aria-label.004": "الانتقال إلى الخط الزمني",
    "html.img.alt.027": "الكنيس الكبير في بغداد",
    "html.img.alt.028": "جامع السراي في بغداد قرب الحي الإداري العثماني",
    "html.img.alt.029": "باب الطلسم، بوابة الطلسم في بغداد",
    "html.img.alt.030": "خريطة خطوط الجبهة في الحرب العراقية الإيرانية",
    "html.img.alt.031": "كنيسة سيدة النجاة في بغداد، كما تُستذكر بعد هجوم عام 2010",
    "website.text.046": "2019 - الحاضر",
    "website.text.047": "من إعداد زكريا هوبكنز",
    "website.text.048": "من إعداد زكريا هوبكنز",
    "website.text.049": "المزيد عن",
    "timeline.modern.phase-01.mandate-monarchy-and-the-first-modern-ruptures.event-07.the-wathba-and-the-beginning-of-the-jewish-exodus.image.alt": "متظاهرون في بغداد خلال احتجاجات الوثبة",
    "timeline.modern.phase-01.mandate-monarchy-and-the-first-modern-ruptures.event-07.the-wathba-and-the-beginning-of-the-jewish-exodus.image.caption": "الوثبة وبداية الخروج اليهودي",
    "more-info.dhimma-system.title": "نظام الذمة",
    "more-info.dhimma-system.date": "766",
    "more-info.dhimma-system.content.p01": "في ظل القانون الإسلامي في بغداد، كان نظام الذمة، أو نظام أهل الذمة، ينظم وضع غير المسلمين مثل اليهود والمسيحيين، ويجعلهم أقلية محمية.",
    "more-info.dhimma-system.content.p02": "بصفتهم من أهل الذمة، أُعفي هؤلاء السكان من الخدمة العسكرية ومُنحوا حرية ممارسة دينهم. وفي مقابل هذه الحماية، كان عليهم دفع ضرائب منتظمة للدولة، ولا سيما ضريبة الأرض والجزية، وهي ضريبة رؤوس كانت تُفرض بمقادير مختلفة.",
    "more-info.dhimma-system.content.p03": "ورغم هذه الحماية، عاش أهل الذمة بوصفهم مواطنين من درجة أدنى وخضعوا لقواعد اجتماعية محددة. فعلى سبيل المثال، كانوا ملزمين قانونيا بأن يلبسوا لباسا يميزهم عن الأغلبية المسلمة، ولا سيما من خلال غطاء الرأس.",
    "more-info.dhimma-system.content.p04": "تفكك هذا النظام في نهاية المطاف خلال القرون المتأخرة من الحكم العثماني. فقد أُلغيت ضريبة الجزية التقليدية على غير المسلمين ضمن إصلاحات التنظيمات الليبرالية بين عامي 1839 و1876. ثم أُلغي وضع الذمة الرسمي بالكامل عام 1908 بعد ثورة تركيا الفتاة. ومثلت هذه الثورة نقطة تحول استثنائية في تاريخ المدينة، إذ منحت غير المسلمين المواطنة الكاملة، وسمحت ليهود بغداد ولغيرهم من الأقليات بالوقوف على قدم المساواة سياسيا مع المسلمين للمرة الأولى.",
    "more-info.christians-baghdad.title": "مسيحيو بغداد",
    "more-info.christians-baghdad.date": "2010",
    "more-info.christians-baghdad.content.p01": "عاش رهبان نسطوريون في المنطقة قبل تأسيس بغداد، بل إنهم نصحوا الخليفة المنصور بشأن مناخ الموقع الملائم. وخلال القرن الثامن، كانت بغداد مدينة بالغة الأهمية إلى درجة أنها كان يمكن أن تنافس روما بوصفها عاصمة للمسيحية العالمية.",
    "more-info.christians-baghdad.content.p02": "ازدهر المسيحيون في ظل الخلافة العباسية، ولا سيما في حي الشماسية في شرق بغداد، حيث كثرت الأديرة والكنائس. ومنح العباسيون البطريرك النسطوري سلطة رسمية على جميع المسيحيين في الخلافة، في نطاق امتد من مصر إلى آسيا الوسطى. وكان المسيحيون موضع تقدير كبير بسبب خبرتهم العلمية والطبية؛ فقد قدمت أسرة بختيشوع المسيحية السريانية أطباء البلاط لأكثر من 250 عاما، وكان حنين بن إسحاق المسيحي النسطوري عميد علماء العباسيين وكبير المترجمين في بيت الحكمة ببغداد. كما كانت الأديرة المسيحية مراكز ترفيه محببة، تقدم الخمر سرا للبغداديين في سهرات الشرب الليلية.",
    "more-info.christians-baghdad.content.p03": "أثناء الخراب الهائل الذي حل ببغداد على يد المغول عام 1258، كان المسيحيون، ومعهم اليهود، الجماعتين الوحيدتين اللتين استثناهما هولاكو خان صراحة من القتل. وكان لهولاكو أم وزوجة مسيحيتان، فمنح البطريرك النسطوري أحد قصور الخليفة وقطعة أرض كبيرة داخل حرم الخليفة لبناء كنيسة. ولا يزال المبنى قائما في شارع الخلفاء حتى اليوم. غير أن هذا الوضع المميز، وسلوك بعض المسيحيين مثل الجورجيين الذين شاركوا بحماسة في قتل المسلمين، أثارا لاحقا ردة فعل إسلامية. وأدى ذلك إلى اضطرابات وسجن رجال دين ثم نفي البطريرك النسطوري إلى أربيل في أواخر القرن الثالث عشر.",
    "more-info.christians-baghdad.content.p04": "في القرون التالية، شهدت الجماعة تغيرات داخلية، مثل الانشقاق عام 1552 الذي أنشأ الكنيسة الكلدانية، كما شهدت وصول بعثات كاثوليكية أوروبية مثل الكبوشيين والكرمليين. وبحلول القرن التاسع عشر، تمتع مسيحيو بغداد بدرجة نادرة من التسامح مقارنة بمدن إسلامية أخرى، حتى إنهم سُمح لهم بركوب الخيل إلى جانب المسلمين. وكان حي بارز يسمى عقد النصارى يضم الأديرة وبيوت المسيحيين الأثرياء. وبحلول عام 1917، بلغ عدد السكان المسيحيين في بغداد نحو 12 ألفا.",
    "more-info.christians-baghdad.content.p05": "لكن القرنين العشرين والحادي والعشرين حملا مآسي قاسية. ففي عام 1933، قتل الجيش العراقي أكثر من 300 مسيحي آشوري في قرية سميل، وزُينت أقواس النصر في بغداد بالبطيخ ليحاكي رؤوس الآشوريين المقطوعة.",
    "more-info.christians-baghdad.content.p06": "بعد الغزو الذي قادته الولايات المتحدة عام 2003، واجه مسيحيو بغداد موجة كارثية من العنف الطائفي. فتعرضت الكنائس للتفجير المنظم، وأُحرقت متاجر يملكها مسيحيون، ووزع متطرفون منشورات تحذر المسيحيين من الاستمرار في إفساد المجتمع الإسلامي. وبحلول عام 2010، كان ما يقدر بنحو 300 ألف من أصل 400 ألف مسيحي في بغداد قد فروا من العاصمة. وفي واحد من أفظع الهجمات، اقتحم مسلحون مرتبطون بالقاعدة كنيسة سيدة النجاة للسريان الكاثوليك في تشرين الأول 2010، واحتجزوا رهائن وقتلوا 58 شخصا، بينهم كاهنان. واليوم يبلغ عدد الجماعة المسيحية الباقية، التي تضم كلدانا وآشوريين وأرثوذكسا وكاثوليكا أرمن، نحو 100 ألف في عموم البلاد، متمسكة بإيمانها القديم رغم حملة متواصلة من الخطف والتعذيب والاغتيالات.",
}

TIMELINE_VARIABLES = [
    "BAGHDAD_FOUNDATION_PHASES",
    "BAGHDAD_GOLDEN_AGE_PHASES",
    "BAGHDAD_MONGOL_SIEGE_PHASES",
    "BAGHDAD_STAGNATION_PHASES",
    "BAGHDAD_OTTOMAN_PHASES",
    "BAGHDAD_MODERN_PHASES",
    "BAGHDAD_PROTEST_PHASES",
]


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


def write_text(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8", newline="\n")


def clean_translation(value: str) -> str:
    value = value.strip()
    value = re.sub(r"\A```(?:markdown|md)?\s*", "", value, flags=re.I)
    value = re.sub(r"\s*```\s*\Z", "", value)
    value = re.sub(r"\A--- START OF FILE [^-]+---\s*", "", value)
    value = re.sub(r"\s*--- END OF FILE [^-]+---\s*\Z", "", value)
    return value.strip()


def parse_returned_entries(returned_dir: Path = RETURNED_DIR) -> dict[str, dict[str, str]]:
    entries: dict[str, dict[str, str]] = {}
    entry_re = re.compile(r"^##\s+\d{3}\.\s+(.+?)\s*$", re.M)
    files = sorted(returned_dir.glob("*_part_*.md"))
    if not files:
        raise FileNotFoundError(f"No returned translation part files found in {returned_dir}")

    for path in files:
        text = read_text(path)
        matches = list(entry_re.finditer(text))
        for index, match in enumerate(matches):
            entry_id = match.group(1).strip()
            block_start = match.end()
            block_end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
            block = text[block_start:block_end]
            original_match = re.search(
                r"Original:\s*\n```text\s*\n(.*?)\n```",
                block,
                flags=re.S,
            )
            translation_match = re.search(
                r"Arabic translation:\s*\n```text\s*\n(.*?)\n```",
                block,
                flags=re.S,
            )
            if not translation_match:
                continue
            translation = clean_translation(translation_match.group(1))
            if translation:
                entries[entry_id] = {
                    "original": clean_translation(original_match.group(1)) if original_match else "",
                    "translation": translation,
                }
    return entries


def parse_returned_translations(returned_dir: Path = RETURNED_DIR) -> dict[str, str]:
    return {
        entry_id: entry["translation"]
        for entry_id, entry in parse_returned_entries(returned_dir).items()
    }


def translated(translations: dict[str, str], entry_id: str, fallback: str) -> str:
    return translations.get(entry_id, fallback)


def parse_timeline_arrays() -> dict[str, list[dict[str, object]]]:
    text = read_text(export_md.EVENTS_FILE)
    result: dict[str, list[dict[str, object]]] = {}
    for variable, start, end in export_md.variable_ranges(text):
        if variable not in TIMELINE_VARIABLES:
            continue
        array_start = text.find("[", start, end)
        array_end = export_md.find_matching(text, array_start) if array_start != -1 else -1
        if array_start == -1 or array_end == -1:
            continue
        array_text = re.sub(r",(\s*[\]}])", r"\1", text[array_start : array_end + 1])
        result[variable] = json.loads(array_text)
    return result


def build_timeline(translations: dict[str, str]) -> dict[str, list[dict[str, object]]]:
    timeline = parse_timeline_arrays()

    for variable, phases in timeline.items():
        section = export_md.EVENT_SECTIONS.get(variable)
        if not section:
            continue
        section_slug, _section_label = section
        for phase_index, phase in enumerate(phases, 1):
            phase_title = str(phase.get("title") or "")
            phase_slug = export_md.slugify(phase_title or f"phase-{phase_index}", f"phase-{phase_index}")
            phase_title_id = f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.title"
            phase_description_id = f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.description"
            if "title" in phase:
                phase["title"] = translated(translations, phase_title_id, str(phase["title"]))
            if "description" in phase:
                phase["description"] = translated(translations, phase_description_id, str(phase["description"]))

            for event_index, event in enumerate(phase.get("events") or [], 1):
                if not isinstance(event, dict):
                    continue
                event_title = str(event.get("title") or "")
                event_slug = export_md.slugify(event_title or f"event-{event_index}", f"event-{event_index}")
                base_id = f"timeline.{section_slug}.phase-{phase_index:02d}.{phase_slug}.event-{event_index:02d}.{event_slug}"
                for field_name in ("date", "title", "description", "mediaPlaceholder"):
                    if field_name in event and event[field_name]:
                        event[f"{field_name}"] = translated(
                            translations,
                            f"{base_id}.{export_md.slugify(field_name)}",
                            str(event[field_name]),
                        )
                image = event.get("image")
                if isinstance(image, dict):
                    for image_field in ("alt", "caption"):
                        if image_field in image and image[image_field]:
                            image[image_field] = translated(
                                translations,
                                f"{base_id}.image.{image_field}",
                                str(image[image_field]),
                            )
    return timeline


def build_detail_cards(translations: dict[str, str]) -> dict[str, dict[str, object]]:
    text = read_text(export_md.DETAIL_CARDS_FILE)
    cards: dict[str, dict[str, object]] = {}

    for match in re.finditer(r'"([a-z][a-z0-9-]*)"\s*:\s*\{', text):
        card_id = match.group(1)
        card_start = match.end() - 1
        card_end = export_md.find_matching(text, card_start)
        if card_end == -1:
            continue
        block = text[card_start : card_end + 1]
        title = export_md.property_string(block, "title") or card_id
        date = export_md.property_string(block, "date") or ""
        content: list[str] = []

        content_match = re.search(r"\bcontent\s*:\s*\[", block)
        if content_match:
            array_start = card_start + content_match.end() - 1
            array_end = export_md.find_matching(text, array_start)
            if array_end != -1:
                array_text = text[array_start : array_end + 1]
                content = [
                    export_md.decode_js_string(paragraph_match.group(1), '"')
                    for paragraph_match in re.finditer(r'"((?:[^"\\]|\\.)*)"', array_text, flags=re.S)
                ]

        cards[card_id] = {
            "title": translated(translations, f"more-info.{card_id}.title", title),
            "date": translated(translations, f"more-info.{card_id}.date", date),
            "content": [
                translated(translations, f"more-info.{card_id}.content.p{index:02d}", paragraph)
                for index, paragraph in enumerate(content, 1)
            ],
        }
    return cards


def build_static_maps(
    returned_entries: dict[str, dict[str, str]],
    manual_translations: dict[str, str] | None = None,
) -> tuple[dict[str, str], dict[str, str]]:
    text_by_original: dict[str, str] = {}
    alt_by_original: dict[str, str] = {}
    for entry_id, entry in returned_entries.items():
        original = entry.get("original", "")
        translation = entry.get("translation", "")
        if not original or not translation:
            continue
        if entry_id.startswith("website.text.") or re.match(r"^html\.(?!img\.alt\.).+", entry_id):
            text_by_original.setdefault(original, translation)
        if entry_id.startswith("html.img.alt.") or ".image.alt" in entry_id:
            alt_by_original.setdefault(original, translation)
    for source_entry in export_md.collect_entries():
        if not manual_translations or source_entry.entry_id not in manual_translations:
            continue
        translation = manual_translations[source_entry.entry_id]
        if source_entry.category == "website-text":
            text_by_original.setdefault(source_entry.original, translation)
        elif source_entry.category == "image-alt-text":
            alt_by_original.setdefault(source_entry.original, translation)
    return text_by_original, alt_by_original


def build_sidebar(translations: dict[str, str]) -> dict[str, object]:
    text = read_text(export_md.TIMELINE_JS_FILE)
    headings = {
        "entity": translations.get("sidebar.heading.powers", "Powers"),
        "ruler": translations.get("sidebar.heading.rulers", "Rulers"),
    }
    eras: list[dict[str, str]] = []
    rulers: list[dict[str, str]] = []

    for array_name, item_kind, fields, output in (
        ("eras", "era", ("label", "years"), eras),
        ("rulers", "ruler", ("name", "years"), rulers),
    ):
        array_match = re.search(rf"\bvar\s+{array_name}\s*=\s*\[", text)
        if not array_match:
            continue
        array_start = array_match.end() - 1
        array_end = export_md.find_matching(text, array_start)
        if array_end == -1:
            continue
        for item_index, (obj_start, obj_end) in enumerate(
            export_md.iter_top_level_objects(text, array_start + 1, array_end),
            1,
        ):
            block = text[obj_start:obj_end]
            label = export_md.property_string(block, fields[0]) or f"{item_kind} {item_index}"
            item_slug = export_md.slugify(label, f"{item_kind}-{item_index}")
            translated_item: dict[str, str] = {}
            for field_name in fields:
                value = export_md.property_string(block, field_name) or ""
                entry_id = f"sidebar.{item_kind}.{item_index:03d}.{item_slug}.{export_md.slugify(field_name)}"
                translated_item[field_name] = translated(translations, entry_id, value)
            output.append(translated_item)

    return {"headings": headings, "eras": eras, "rulers": rulers}


def main() -> int:
    returned_entries = parse_returned_entries()
    translations = dict(MANUAL_ARABIC_TRANSLATIONS)
    translations.update({
        entry_id: entry["translation"]
        for entry_id, entry in returned_entries.items()
    })
    expected_ids = {entry.entry_id for entry in export_md.collect_entries()}
    missing = sorted(expected_ids - set(translations))
    static_text_by_original, image_alt_by_original = build_static_maps(
        returned_entries,
        MANUAL_ARABIC_TRANSLATIONS,
    )

    payload = {
        "language": "ar",
        "translationsById": translations,
        "staticTextByOriginal": static_text_by_original,
        "imageAltByOriginal": image_alt_by_original,
        "timeline": build_timeline(translations),
        "detailCards": build_detail_cards(translations),
        "sidebar": build_sidebar(translations),
        "missingTranslationIds": missing,
    }

    js = (
        "/* Generated by scripts/import_arabic_translations.py. Do not edit by hand. */\n"
        "window.BAGHDAD_I18N_AR = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n"
    )
    write_text(OUTPUT_FILE, js)
    print(f"Wrote {OUTPUT_FILE}")
    print(f"Loaded {len(translations)} Arabic translations")
    print(f"Missing {len(missing)} translation IDs")
    if missing:
        for entry_id in missing[:20]:
            print(f"  missing: {entry_id}")
        if len(missing) > 20:
            print(f"  ... and {len(missing) - 20} more")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
