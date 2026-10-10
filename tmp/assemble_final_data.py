# -*- coding: utf-8 -*-
import sys, json, re

sys.path.append('tmp')
from data_part1 import data_part1
from data_part2 import data_part2
from data_part3 import data_part3
from data_part4 import data_part4

with open('/tmp/chunked_paragraphs.json') as f:
    chunks = json.load(f)

# Concatenate all parts
all_items = []
all_items.extend(data_part1)
all_items.extend(data_part2)
all_items.extend(data_part3)
all_items.extend(data_part4)

print(f"Total chunks: {len(chunks)}, Total candidate items: {len(all_items)}")

# We need exactly 75 items for chunks 0..74
# Let's slice or match the first 75 items
final_paragraphs = []
for i in range(len(chunks)):
    chunk_text = chunks[i]
    item = all_items[i] if i < len(all_items) else all_items[-1]
    
    # Calculate exact word count
    words = len(re.findall(r'\S+', chunk_text))
    
    final_paragraphs.append({
        "id": i + 1,
        "paragraphNumber": i + 1,
        "english": chunk_text,
        "arabicTranslation": item["arabic"].strip(),
        "vocabulary": item["vocab"],
        "notes": item["notes"],
        "wordCount": words
    })

print(f"Constructed {len(final_paragraphs)} final paragraphs.")

# Generate src/data/paragraphs.ts
ts_content = """export interface VocabItem {
  word: string;
  arabicMeaning: string;
  example: string;
}

export interface NoteItem {
  term: string;
  type: 'idiom' | 'phrasal_verb' | 'slang' | 'informal' | 'cultural' | 'pronunciation';
  explanation: string;
}

export interface ScriptParagraph {
  id: number;
  paragraphNumber: number;
  english: string;
  arabicTranslation: string;
  vocabulary: VocabItem[];
  notes: NoteItem[];
  wordCount: number;
}

export const PARAGRAPHS_DATA: ScriptParagraph[] = """ + json.dumps(final_paragraphs, ensure_ascii=False, indent=2) + """;
"""

with open('src/data/paragraphs.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully written to src/data/paragraphs.ts!")
