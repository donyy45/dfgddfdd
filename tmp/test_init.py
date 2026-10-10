# -*- coding: utf-8 -*-
import json
import re

with open('/tmp/chunked_paragraphs.json', 'r', encoding='utf-8') as f:
    raw_chunks = json.load(f)

print(f"Loaded {len(raw_chunks)} raw chunks.")
