import json
import re

with open('/tmp/chunked_paragraphs.json', 'r', encoding='utf-8') as f:
    chunks = json.load(f)

print(f"Total chunks loaded: {len(chunks)}")
for i, c in enumerate(chunks):
    words = len(re.findall(r'\S+', c))
    first_line = c.split('\n')[0][:50]
    print(f"P{i+1}: {words} words | {first_line}")
