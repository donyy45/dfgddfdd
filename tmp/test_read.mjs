import * as fs from 'fs';

const rawChunks = JSON.parse(fs.readFileSync('/tmp/chunked_paragraphs.json', 'utf8'));

// We will create the generator with exact rich annotations for each paragraph
console.log('Read', rawChunks.length, 'chunks.');
