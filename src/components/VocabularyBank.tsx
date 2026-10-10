import React, { useState, useMemo } from 'react';
import { Search, Volume2, ArrowRight } from 'lucide-react';
import { ScriptParagraph } from '../data/paragraphs';
import { speechService } from '../utils/speech';

interface VocabularyBankProps {
  paragraphs: ScriptParagraph[];
  onJumpToParagraph: (paragraphNumber: number) => void;
}

interface FlattenedVocab {
  word: string;
  arabicMeaning: string;
  example: string;
  paragraphNumber: number;
  type: 'vocab' | 'idiom' | 'phrasal_verb' | 'slang' | 'cultural';
  noteExplanation?: string;
}

export const VocabularyBank: React.FC<VocabularyBankProps> = ({
  paragraphs,
  onJumpToParagraph,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'vocab' | 'idiom' | 'phrasal_verb' | 'slang'>('all');

  // Aggregate all vocabulary and notes across the 75 paragraphs
  const allItems: FlattenedVocab[] = useMemo(() => {
    const list: FlattenedVocab[] = [];

    paragraphs.forEach((p) => {
      // Add vocabulary items
      p.vocabulary.forEach((v) => {
        list.push({
          word: v.word,
          arabicMeaning: v.arabicMeaning,
          example: v.example,
          paragraphNumber: p.paragraphNumber,
          type: 'vocab',
        });
      });

      // Add notes as items
      p.notes.forEach((n) => {
        list.push({
          word: n.term,
          arabicMeaning: n.explanation,
          example: `Used in Paragraph ${p.paragraphNumber}`,
          paragraphNumber: p.paragraphNumber,
          type: (n.type as 'idiom' | 'phrasal_verb' | 'slang' | 'cultural') || 'vocab',
          noteExplanation: n.explanation,
        });
      });
    });

    return list;
  }, [paragraphs]);

  // Filter items
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      if (selectedFilter !== 'all') {
        if (selectedFilter === 'vocab' && item.type !== 'vocab') return false;
        if (selectedFilter === 'idiom' && item.type !== 'idiom') return false;
        if (selectedFilter === 'phrasal_verb' && item.type !== 'phrasal_verb') return false;
        if (selectedFilter === 'slang' && item.type !== 'slang') return false;
      }

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.word.toLowerCase().includes(q) ||
        item.arabicMeaning.includes(searchQuery) ||
        item.example.toLowerCase().includes(q)
      );
    });
  }, [allItems, selectedFilter, searchQuery]);

  const handleSpeak = (text: string) => {
    speechService.speak(text, 0.85);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Master Vocabulary & Idiom Bank
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Explore all {allItems.length} curated words, expressions, idioms, and slang from the movie screenplay.
        </p>

        {/* Search and Filters */}
        <div className="mt-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search words in English or Arabic (e.g. vigilante, انتقام, take on)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 border border-slate-800 rounded-lg text-xs overflow-x-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({allItems.length})
            </button>
            <button
              onClick={() => setSelectedFilter('vocab')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedFilter === 'vocab'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Key Words
            </button>
            <button
              onClick={() => setSelectedFilter('idiom')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedFilter === 'idiom'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Idioms
            </button>
            <button
              onClick={() => setSelectedFilter('phrasal_verb')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedFilter === 'phrasal_verb'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Phrasal Verbs
            </button>
            <button
              onClick={() => setSelectedFilter('slang')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedFilter === 'slang'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Slang
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, idx) => {
          const typeBadge =
            item.type === 'idiom'
              ? 'Idiom / تعبير اصطلاحي'
              : item.type === 'phrasal_verb'
              ? 'Phrasal Verb / فعل مركب'
              : item.type === 'slang'
              ? 'Slang / عامي'
              : item.type === 'cultural'
              ? 'Cultural / سينمائي'
              : 'Vocabulary';

          return (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-sm"
            >
              <div>
                {/* Header with Type & Audio */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {typeBadge}
                  </span>
                  <button
                    onClick={() => handleSpeak(item.word)}
                    title="Pronounce word"
                    className="p-1 text-slate-500 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Word & Arabic Translation */}
                <h3 className="text-base font-bold text-amber-300 mb-1">{item.word}</h3>
                <div dir="rtl" className="text-xs text-slate-200 font-arabic leading-relaxed mb-3 text-right">
                  {item.arabicMeaning}
                </div>

                {/* Example sentence */}
                <div className="text-xs text-slate-400 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/40 mb-3">
                  <span className="text-slate-500 not-italic font-medium">Example: </span>
                  &ldquo;{item.example}&rdquo;
                </div>
              </div>

              {/* Jump to Paragraph Link */}
              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">Paragraph {item.paragraphNumber}</span>
                <button
                  onClick={() => onJumpToParagraph(item.paragraphNumber)}
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
                >
                  <span>View in Script</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
