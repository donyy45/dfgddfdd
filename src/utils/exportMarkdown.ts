import { ScriptParagraph } from '../data/paragraphs';

/**
 * Format a single paragraph to the exact template requested by the user:
 * 
 * Paragraph N
 * 
 * English:
 * ...
 * 
 * Arabic Translation:
 * ...
 * 
 * Key Vocabulary & Expressions:
 * - word/expression → Arabic meaning
 * - Example: ...
 * 
 * Notes (if any):
 * - ...
 */
export function formatParagraphMarkdown(p: ScriptParagraph): string {
  let md = `Paragraph ${p.paragraphNumber}\n\n`;
  md += `English:\n${p.english}\n\n`;
  md += `Arabic Translation:\n${p.arabicTranslation}\n\n`;

  md += `Key Vocabulary & Expressions:\n\n`;
  if (p.vocabulary && p.vocabulary.length > 0) {
    p.vocabulary.forEach((v) => {
      md += `- ${v.word} → ${v.arabicMeaning}\n`;
      md += `  Example: ${v.example}\n`;
    });
  } else {
    md += `- (None specified)\n`;
  }
  md += `\n`;

  md += `Notes (if any):\n\n`;
  if (p.notes && p.notes.length > 0) {
    p.notes.forEach((n) => {
      const typeLabel = n.type === 'idiom' ? '[Idiom]'
        : n.type === 'phrasal_verb' ? '[Phrasal Verb]'
        : n.type === 'slang' ? '[Slang]'
        : n.type === 'cultural' ? '[Cultural Reference]'
        : n.type === 'pronunciation' ? '[Pronunciation]'
        : '[Note]';
      md += `- ${n.term} ${typeLabel}: ${n.explanation}\n`;
    });
  } else {
    md += `- None\n`;
  }

  return md;
}

/**
 * Format all paragraphs into one full Markdown document
 */
export function formatFullScriptMarkdown(paragraphs: ScriptParagraph[]): string {
  let fullMd = `# Batman Begins — English Study Script Guide\n`;
  fullMd += `Total Paragraphs: ${paragraphs.length} (Max 150 words each)\n`;
  fullMd += `Formatted according to instructions: English, Arabic Translation, Key Vocabulary & Expressions, and Notes.\n\n`;
  fullMd += `---\n\n`;

  paragraphs.forEach((p, idx) => {
    fullMd += formatParagraphMarkdown(p);
    if (idx < paragraphs.length - 1) {
      fullMd += `\n---\n\n`;
    }
  });

  return fullMd;
}

/**
 * Download a string as a file
 */
export function downloadFile(content: string, filename: string, mimeType: string = 'text/markdown') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
