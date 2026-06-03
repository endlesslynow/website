import re
import sys
import json
import os

def split_into_sentences(text):
    # Split text into sentences using common Kurdish/English punctuation.
    # We want to split on . or ! or ? or ... (possibly followed by quotes » or ” or ")
    # but not split on abbreviations or decimal points.
    sentence_end = re.compile(r'(\.+»*|\!+»*|\?+»*|\.{3,}»*)\s+')
    
    parts = sentence_end.split(text)
    
    sentences = []
    i = 0
    while i < len(parts):
        sentence_body = parts[i].strip()
        if i + 1 < len(parts):
            punc = parts[i+1]
            i += 2
        else:
            punc = ""
            i += 1
            
        if sentence_body or punc:
            sentences.append(f"{sentence_body}{punc}")
            
    return sentences

def tag_markdown(input_path, output_path, translations_map=None):
    if not os.path.exists(input_path):
        print(f"Error: Input file {input_path} does not exist.")
        return
        
    with open(input_path, 'r', encoding='utf-8') as f:
        raw = f.read()
        
    # Standardize newlines
    text = raw.replace('\r\n', '\n')
    
    # Frontmatter extraction
    metadata = ""
    metadata_end = text.find('\n---\n')
    if metadata_end != -1:
        metadata = text[:metadata_end + 5]
        text = text[metadata_end + 5:]
        
    # Replace form feeds with double newlines to match the reader's parsing logic
    text = text.replace('\f', '\n\n')
    
    # Split into blocks/paragraphs
    blocks = re.split(r'\n\s*\n', text)
    
    output_blocks = []
    sentence_id = 1
    
    for block in blocks:
        t = re.sub(r'\n+', ' ', block).strip()
        if not t or t.isdigit():
            # Keep page numbers or empty lines as-is
            output_blocks.append(block)
            continue
            
        # Check if it's a heading
        is_heading = False
        m = re.match(r'^(#{1,6})\s+(.*)$', t)
        if m:
            is_heading = True
        elif len(t) <= 60 and t == t.upper() and any(c.isupper() for c in t):
            is_heading = True
            
        if is_heading:
            # Heading case: we treat the entire heading as one sentence.
            translation = ""
            if translations_map and str(sentence_id) in translations_map:
                translation = translations_map[str(sentence_id)]
            elif translations_map and f"s{sentence_id}" in translations_map:
                translation = translations_map[f"s{sentence_id}"]
            else:
                translation = f"[Translation pending for sentence {sentence_id}]"
                
            if m:
                hashes = m.group(1)
                heading_content = m.group(2).strip()
                # e.g., "1. ## Kurdish Heading" and "1. ## English Translation"
                kurdish_line = f"{sentence_id}. {hashes} {heading_content}"
                english_line = f"{sentence_id}. {hashes} {translation}"
            else:
                kurdish_line = f"{sentence_id}. {t}"
                english_line = f"{sentence_id}. {translation}"
                
            sentence_id += 1
            output_blocks.append(f"{kurdish_line}\n{english_line}")
        else:
            # Regular paragraph: split into sentences
            sentences = split_into_sentences(t)
            block_lines = []
            for s in sentences:
                translation = ""
                if translations_map and str(sentence_id) in translations_map:
                    translation = translations_map[str(sentence_id)]
                elif translations_map and f"s{sentence_id}" in translations_map:
                    translation = translations_map[f"s{sentence_id}"]
                else:
                    translation = f"[Translation pending for sentence {sentence_id}]"
                    
                kurdish_line = f"{sentence_id}. {s}"
                english_line = f"{sentence_id}. {translation}"
                block_lines.append(f"{kurdish_line}\n{english_line}")
                sentence_id += 1
                
            output_blocks.append("\n".join(block_lines))
            
    # Reassemble document
    final_text = metadata + "\n\n".join(output_blocks)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_text)
        
    print(f"Successfully processed {input_path} -> {output_path}")
    print(f"Total sentences processed: {sentence_id - 1}")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Generate numbered translation markdown book.")
    parser.add_argument("input_file", help="Path to the input markdown file")
    parser.add_argument("output_file", help="Path to save the output markdown file")
    parser.add_argument("--translations", help="Path to JSON file containing sentence_id -> translation mapping", default=None)
    
    args = parser.parse_args()
    
    translations = None
    if args.translations:
        with open(args.translations, 'r', encoding='utf-8') as f:
            translations = json.load(f)
            
    tag_markdown(args.input_file, args.output_file, translations)
