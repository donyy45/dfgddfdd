import React, { useState } from 'react';
import { Volume2, VolumeX, Copy, Check, Eye, EyeOff, Bookmark, BookmarkCheck } from 'lucide-react';
import { ScriptParagraph, VocabItem, NoteItem } from '../data/paragraphs';
import { formatParagraphMarkdown } from '../utils/exportMarkdown';
import { speechService } from '../utils/speech';

interface ParagraphCardProps {
  paragraph: ScriptParagraph;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: number) => void;
  speechRate?: number;
}

export const ParagraphCard: React.FC<ParagraphCardProps> = ({
  paragraph,
  isBookmarked = false,
  onToggleBookmark,
  speechRate = 1.0,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showArabic, setShowArabic] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeVocabWord, setActiveVocabWord] = useState<string | null>(null);

  const handlePlayAudio = () => {
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speechService.speak(
        paragraph.english,
        speechRate,
        undefined,
        () => setIsPlaying(false),
        () => setIsPlaying(false)
      );
    }
  };

  const handleSpeakWord = (word: string) => {
    speechService.speak(word, 0.85);
  };

  const handleCopy = () => {
    const text = formatParagraphMarkdown(paragraph);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      id={`paragraph-${paragraph.paragraphNumber}`}
      className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-700/80 shadow-md"
    >
      {/* Top Bar: Editorial Numbering & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <span className="text-base font-bold text-white tracking-tight">
            Paragraph {paragraph.paragraphNumber}
          </span>
          <span className="text-xs text-slate-500 font-mono tabular-nums">
            {paragraph.wordCount} words <span className="text-slate-600">/ 150 max</span>
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Read Aloud */}
          <button
            onClick={handlePlayAudio}
            title={isPlaying ? 'Stop audio' : 'Listen in English'}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen</span>
              </>
            )}
          </button>

          {/* Toggle Arabic */}
          <button
            onClick={() => setShowArabic(!showArabic)}
            title={showArabic ? 'Hide Arabic translation' : 'Show Arabic translation'}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
          >
            {showArabic ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Hide Arabic</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Show Arabic</span>
              </>
            )}
          </button>

          {/* Copy Markdown */}
          <button
            onClick={handleCopy}
            title="Copy as formatted markdown"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>

          {/* Bookmark */}
          {onToggleBookmark && (
            <button
              onClick={() => onToggleBookmark(paragraph.id)}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark for review'}
              className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 space-y-6">
        {/* Section 1: English Dialogue */}
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
            English:
          </div>
          <div className="text-base text-slate-100 font-normal leading-relaxed whitespace-pre-line bg-slate-950/60 p-4 rounded-lg border border-slate-800/50">
            {paragraph.english}
          </div>
        </div>

        {/* Section 2: Arabic Translation */}
        {showArabic && (
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-500/90 mb-2 flex items-center justify-between">
              <span>Arabic Translation:</span>
              <span className="text-xs font-normal text-slate-500 font-arabic">الترجمة العربية الدقيقة</span>
            </div>
            <div
              dir="rtl"
              className="text-base sm:text-lg text-slate-200 font-normal leading-loose whitespace-pre-line bg-amber-950/10 p-4 rounded-lg border border-amber-900/30 font-arabic text-right selection:bg-amber-500/20"
            >
              {paragraph.arabicTranslation}
            </div>
          </div>
        )}

        {/* Section 3: Key Vocabulary & Expressions */}
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-2">
            <span>Key Vocabulary & Expressions:</span>
            <span className="text-xs text-slate-600 font-mono">({paragraph.vocabulary.length} items)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {paragraph.vocabulary.map((vocab: VocabItem, idx: number) => (
              <div
                key={idx}
                className="bg-slate-950/50 border border-slate-800/80 rounded-lg p-3 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-300 text-sm">{vocab.word}</span>
                    <button
                      onClick={() => handleSpeakWord(vocab.word)}
                      title="Listen to pronunciation"
                      className="text-slate-500 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span
                    dir="rtl"
                    className="text-xs text-slate-300 font-arabic font-medium bg-slate-800/50 px-2 py-0.5 rounded"
                  >
                    {vocab.arabicMeaning}
                  </span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed italic border-t border-slate-800/40 pt-1.5 mt-1">
                  <span className="text-slate-500 not-italic font-medium">Example: </span>
                  &ldquo;{vocab.example}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Notes (Idioms, Phrasal Verbs, Slang, Cultural References) */}
        {paragraph.notes && paragraph.notes.length > 0 && (
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              Notes (if any):
            </div>
            <div className="space-y-2">
              {paragraph.notes.map((note: NoteItem, idx: number) => {
                const label =
                  note.type === 'idiom'
                    ? 'تعبير اصطلاحي (Idiom)'
                    : note.type === 'phrasal_verb'
                    ? 'فعل مركب (Phrasal Verb)'
                    : note.type === 'slang'
                    ? 'لغة عامية (Slang)'
                    : note.type === 'cultural'
                    ? 'مرجع سينمائي / ثقافي'
                    : 'ملاحظة لغوية';

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/40 border border-slate-800/50 rounded-lg p-3 text-xs"
                  >
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-semibold text-slate-200">{note.term}</span>
                      <span className="text-[11px] text-amber-400/90 font-arabic">({label})</span>
                    </div>
                    <div
                      dir="rtl"
                      className="text-slate-300 font-arabic leading-relaxed sm:text-right flex-1"
                    >
                      {note.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
