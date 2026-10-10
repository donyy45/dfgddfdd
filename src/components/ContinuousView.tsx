import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUp, Sparkles, BookOpen } from 'lucide-react';
import { ScriptParagraph } from '../data/paragraphs';
import { ParagraphCard } from './ParagraphCard';

interface ContinuousViewProps {
  paragraphs: ScriptParagraph[];
  bookmarkedIds: Set<number>;
  onToggleBookmark: (id: number) => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
}

export const ContinuousView: React.FC<ContinuousViewProps> = ({
  paragraphs,
  bookmarkedIds,
  onToggleBookmark,
  speechRate,
  setSpeechRate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBookmarkOnly, setFilterBookmarkOnly] = useState(false);
  const [jumpParagraphNumber, setJumpParagraphNumber] = useState('');

  // Filter paragraphs based on search query and bookmarks
  const filteredParagraphs = useMemo(() => {
    return paragraphs.filter((p) => {
      if (filterBookmarkOnly && !bookmarkedIds.has(p.id)) {
        return false;
      }
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inEnglish = p.english.toLowerCase().includes(q);
      const inArabic = p.arabicTranslation.includes(searchQuery);
      const inVocab = p.vocabulary.some(
        (v) => v.word.toLowerCase().includes(q) || v.arabicMeaning.includes(searchQuery)
      );
      const inNotes = p.notes.some(
        (n) => n.term.toLowerCase().includes(q) || n.explanation.includes(searchQuery)
      );

      return inEnglish || inArabic || inVocab || inNotes;
    });
  }, [paragraphs, searchQuery, filterBookmarkOnly, bookmarkedIds]);

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpParagraphNumber, 10);
    if (!isNaN(num) && num >= 1 && num <= paragraphs.length) {
      const el = document.getElementById(`paragraph-${num}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {/* Overview & Quick Metrics Bar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Batman Begins — Complete Script Study</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Exact dialogue divided into {paragraphs.length} paragraphs (all ≤ 150 words) with Arabic translations, vocabulary with examples, and idiom notes.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 text-xs text-slate-400 border-t lg:border-t-0 border-slate-800 pt-3 lg:pt-0">
            <div>
              <div className="font-mono text-base font-bold text-amber-400 tabular-nums">
                {paragraphs.length}
              </div>
              <div className="text-[11px] text-slate-500">Paragraphs</div>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <div className="font-mono text-base font-bold text-slate-200 tabular-nums">
                ~4,200
              </div>
              <div className="text-[11px] text-slate-500">Total Words</div>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <div className="font-mono text-base font-bold text-emerald-400 tabular-nums">
                &le; 140
              </div>
              <div className="text-[11px] text-slate-500">Words / Chunk</div>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <div className="font-mono text-base font-bold text-amber-400 tabular-nums">
                {bookmarkedIds.size}
              </div>
              <div className="text-[11px] text-slate-500">Saved</div>
            </div>
          </div>
        </div>

        {/* Filter and Controls Toolbar */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search words, dialogue, Arabic translation, or idioms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/80 transition-colors"
            />
          </div>

          {/* Jump to Paragraph */}
          <form onSubmit={handleJump} className="flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden sm:inline">Jump to #</span>
            <input
              type="number"
              min={1}
              max={paragraphs.length}
              placeholder={`1-${paragraphs.length}`}
              value={jumpParagraphNumber}
              onChange={(e) => setJumpParagraphNumber(e.target.value)}
              className="w-20 px-2.5 py-1.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-slate-100 text-center focus:outline-none focus:border-amber-500/80 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Go
            </button>
          </form>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => setFilterBookmarkOnly(!filterBookmarkOnly)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
              filterBookmarkOnly
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Bookmarked Only ({bookmarkedIds.size})</span>
          </button>

          {/* Speech Rate Selector */}
          <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-950/80 border border-slate-800 rounded-lg p-1">
            <span className="px-2">Audio Speed:</span>
            {[0.75, 1.0, 1.25].map((rate) => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                  speechRate === rate
                    ? 'bg-amber-500/20 text-amber-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Paragraphs Stream */}
      {filteredParagraphs.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/30 border border-slate-800/60 rounded-xl p-8">
          <BookOpen className="w-8 h-8 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-300">No matching paragraphs found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search terms or clearing the bookmark filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterBookmarkOnly(false);
            }}
            className="mt-4 px-4 py-2 text-xs text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredParagraphs.map((paragraph) => (
            <ParagraphCard
              key={paragraph.id}
              paragraph={paragraph}
              isBookmarked={bookmarkedIds.has(paragraph.id)}
              onToggleBookmark={onToggleBookmark}
              speechRate={speechRate}
            />
          ))}
        </div>
      )}

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        title="Scroll to top"
        className="fixed bottom-6 right-6 p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer z-30"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
