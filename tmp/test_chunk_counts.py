# -*- coding: utf-8 -*-
import json
import re

with open('/tmp/chunked_paragraphs.json', 'r', encoding='utf-8') as f:
    chunks = json.load(f)

print(f"Loaded {len(chunks)} chunks.")
