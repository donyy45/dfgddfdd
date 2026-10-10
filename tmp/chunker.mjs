import * as fs from 'fs';

const raw = fs.readFileSync('/tmp/raw_transcript.txt', 'utf8');

// Split lines
const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const paragraphs = [];
let currentLines = [];
let currentCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const count = wordCount(line);

  // If adding this line would exceed 150 words, and we already have content, finalize current paragraph
  if (currentCount + count > 140 && currentLines.length > 0) {
    paragraphs.push(currentLines.join('\n'));
    currentLines = [line];
    currentCount = count;
  } else {
    currentLines.push(line);
    currentCount += count;
  }
}

if (currentLines.length > 0) {
  paragraphs.push(currentLines.join('\n'));
}

console.log('Total paragraphs created:', paragraphs.length);
paragraphs.forEach((p, idx) => {
  const wc = wordCount(p);
  console.log(`P${idx + 1}: ${wc} words | First line: "${p.split('\n')[0].slice(0, 40)}..."`);
  if (wc > 150) {
    console.error(`WARNING: P${idx + 1} exceeds 150 words (${wc})!`);
  }
});

fs.writeFileSync('/tmp/chunked_paragraphs.json', JSON.stringify(paragraphs, null, 2));
