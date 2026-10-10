import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ScriptParagraph } from '../data/paragraphs';
import { ParagraphCard } from './ParagraphCard';

interface SingleParagraphViewProps {
  paragraphs: ScriptParagraph[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  bookmarkedIds: Set<number>;
  onToggleBookmark: (id: number) => void;
  masteredIds: Set<number>;
  onToggleMastered: (id: number) => void;
  speechRate: number;
}

export const SingleParagraphView: React.FC<SingleParagraphViewProps> = ({
  paragraphs,
  currentIndex,
  setCurrentIndex,
  bookmarkedIds,
  onToggleBookmark,
  masteredIds,
  onToggleMastered,
  speechRate,
}) => {
  const currentParagraph = paragraphs[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < paragraphs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, paragraphs.length]);

  if (!currentParagraph) return null;

  const isMastered = masteredIds.has(currentParagraph.id);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Navigation Controller Bar */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
        {/* Step Indicator & Jump dropdown */}
        <div className="flex items-center gap-3">
          <div className="text-sm font-semibold text-white">
            Paragraph {currentParagraph.paragraphNumber} of {paragraphs.length}
          </div>
          <select
            value={currentIndex}
            onChange={(e) => setCurrentIndex(Number(e.target.value))}
            className="text-xs bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-amber-500 font-mono"
          >
            {paragraphs.map((p, idx) => (
              <option key={p.id} value={idx}>
                P{p.paragraphNumber}: {p.english.split('\n')[0].slice(0, 30)}...
              </option>
            ))}
          </select>
        </div>

        {/* Mastered Status Button */}
        <button
          onClick={() => onToggleMastered(currentParagraph.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            isMastered
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isMastered ? 'Marked as Learned' : 'Mark as Learned'}</span>
        </button>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === paragraphs.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-amber-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / paragraphs.length) * 100}%` }}
        />
      </div>

      {/* Focused Paragraph Card */}
      <ParagraphCard
        paragraph={currentParagraph}
        isBookmarked={bookmarkedIds.has(currentParagraph.id)}
        onToggleBookmark={onToggleBookmark}
        speechRate={speechRate}
      />

      {/* Navigation Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
        <span>Use Left/Right arrow keys on keyboard to switch paragraphs</span>
        <span>
          Learned: {masteredIds.size} / {paragraphs.length} ({Math.round((masteredIds.size / paragraphs.length) * 100)}%)
        </span>
      </div>
    </div>
  );
};
