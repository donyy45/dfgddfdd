import React, { useState, useEffect } from 'react';
import { PARAGRAPHS_DATA } from './data/paragraphs';
import { Header } from './components/Header';
import { ContinuousView } from './components/ContinuousView';
import { SingleParagraphView } from './components/SingleParagraphView';
import { VocabularyBank } from './components/VocabularyBank';
import { FlashcardQuiz } from './components/FlashcardQuiz';
import { CustomAnalyzer } from './components/CustomAnalyzer';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'read' | 'single' | 'vocab' | 'quiz' | 'custom'>('read');
  const [singleViewIndex, setSingleViewIndex] = useState(0);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Bookmarks state (persisted in localStorage)
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('batman_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Mastered / Learned paragraphs (persisted in localStorage)
  const [masteredIds, setMasteredIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('batman_mastered');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('batman_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.warn('Failed to save bookmarks:', e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('batman_mastered', JSON.stringify(Array.from(masteredIds)));
    } catch (e) {
      console.warn('Failed to save mastered status:', e);
    }
  }, [masteredIds]);

  const handleToggleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleMastered = (id: number) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleJumpFromVocabToParagraph = (paragraphNumber: number) => {
    setSingleViewIndex(paragraphNumber - 1);
    setCurrentTab('single');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* 3-Zone Header Contract */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Study Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentTab === 'read' && (
          <ContinuousView
            paragraphs={PARAGRAPHS_DATA}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            speechRate={speechRate}
            setSpeechRate={setSpeechRate}
          />
        )}

        {currentTab === 'single' && (
          <SingleParagraphView
            paragraphs={PARAGRAPHS_DATA}
            currentIndex={singleViewIndex}
            setCurrentIndex={setSingleViewIndex}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            masteredIds={masteredIds}
            onToggleMastered={handleToggleMastered}
            speechRate={speechRate}
          />
        )}

        {currentTab === 'vocab' && (
          <VocabularyBank
            paragraphs={PARAGRAPHS_DATA}
            onJumpToParagraph={handleJumpFromVocabToParagraph}
          />
        )}

        {currentTab === 'quiz' && (
          <FlashcardQuiz paragraphs={PARAGRAPHS_DATA} />
        )}

        {currentTab === 'custom' && (
          <CustomAnalyzer />
        )}
      </main>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        paragraphs={PARAGRAPHS_DATA}
      />

      {/* Quiet Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span>Batman Begins Screenplay Study Studio</span>
            <span className="mx-2">·</span>
            <span>75 Paragraphs</span>
            <span className="mx-2">·</span>
            <span>All chunks &le; 150 words</span>
          </div>
          <div className="text-slate-600">
            Natural Arabic Translations · Key Vocabulary & Examples · Idiom & Slang Guide
          </div>
        </div>
      </footer>
    </div>
  );
}
