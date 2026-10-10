import React, { useState } from 'react';
import { Play, Copy, Check, FileText, Sparkles } from 'lucide-react';

export const CustomAnalyzer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [analyzedChunks, setAnalyzedChunks] = useState<
    { id: number; english: string; wordCount: number }[]
  >([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const sampleScene = `JOKER: To them, you're just a freak, like me! They need you right now, but when they don't, they'll cast you out, like a leper! You see, their morals, their code, it's a bad joke. Dropped at the first sign of trouble. They're only as good as the world allows them to be. I'll show you. When the chips are down, these... these civilized people, they'll eat each other. See, I'm not a monster. I'm just ahead of the curve.

BATMAN: Where's Dent?

JOKER: You have all these rules, and you think they'll save you!

BATMAN: I have one rule.

JOKER: Oh, then that's the rule you'll have to break to know the truth.

BATMAN: Which is?

JOKER: The only sensible way to live in this world is without rules. And tonight, you're gonna break your one rule.`;

  const handleProcess = () => {
    if (!inputText.trim()) return;

    // Divide into paragraphs of <= 150 words each
    const lines = inputText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const chunks: { id: number; english: string; wordCount: number }[] = [];

    let currentLines: string[] = [];
    let currentWords = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const wordsInLine = line.split(/\s+/).filter(Boolean).length;

      if (currentWords + wordsInLine > 140 && currentLines.length > 0) {
        chunks.push({
          id: chunks.length + 1,
          english: currentLines.join('\n'),
          wordCount: currentWords,
        });
        currentLines = [line];
        currentWords = wordsInLine;
      } else {
        currentLines.push(line);
        currentWords += wordsInLine;
      }
    }

    if (currentLines.length > 0) {
      chunks.push({
        id: chunks.length + 1,
        english: currentLines.join('\n'),
        wordCount: currentWords,
      });
    }

    setAnalyzedChunks(chunks);
  };

  const handleCopyChunk = (chunk: { id: number; english: string; wordCount: number }) => {
    const text = `Paragraph ${chunk.id}\n\nEnglish:\n${chunk.english}\n\nWord Count: ${chunk.wordCount} words (<= 150 max)`;
    navigator.clipboard.writeText(text);
    setCopiedIndex(chunk.id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Introduction Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Custom Movie Transcript Chunker & Analyzer
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Paste any movie transcript or dialogue here. The tool partitions it into sequential paragraphs of no more than 150 words each, preserving speaker order and dialogue integrity.
            </p>
          </div>
          <button
            onClick={() => {
              setInputText(sampleScene);
            }}
            className="px-3 py-1.5 text-xs text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Load Sample Scene</span>
          </button>
        </div>

        {/* Text Input */}
        <div className="mt-4">
          <textarea
            rows={8}
            placeholder="Paste your English movie transcript or dialogue here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 text-xs sm:text-sm font-mono leading-relaxed resize-y"
          />
        </div>

        {/* Action Button */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {inputText.trim() ? inputText.trim().split(/\s+/).filter(Boolean).length : 0} total words
          </span>
          <button
            onClick={handleProcess}
            disabled={!inputText.trim()}
            className="px-5 py-2 text-xs font-semibold bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Divide into Paragraphs (&le; 150 words)</span>
          </button>
        </div>
      </div>

      {/* Results */}
      {analyzedChunks.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Result: Divided into {analyzedChunks.length} Paragraphs</span>
            </h2>
            <span className="text-xs text-slate-500">Each paragraph &le; 150 words</span>
          </div>

          <div className="space-y-4">
            {analyzedChunks.map((chunk) => (
              <div
                key={chunk.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">
                      Paragraph {chunk.id}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      {chunk.wordCount} words (under 150 limit)
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyChunk(chunk)}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 bg-slate-950 rounded-lg border border-slate-800 cursor-pointer"
                  >
                    {copiedIndex === chunk.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 font-mono whitespace-pre-line leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/40">
                  {chunk.english}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
