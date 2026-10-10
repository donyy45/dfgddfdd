# -*- coding: utf-8 -*-
"""
Full dataset compiler for Batman Begins transcript study app.
Generates src/data/paragraphs.ts with all 75 paragraphs under 150 words each.
"""
import json
import re

with open('/tmp/chunked_paragraphs.json', 'r', encoding='utf-8') as f:
    chunks = json.load(f)

# We will construct a mapping of translations, vocabularies, and notes for all 75 chunks.
