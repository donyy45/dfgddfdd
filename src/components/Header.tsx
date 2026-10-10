import React from 'react';
import { Download } from 'lucide-react';

interface HeaderProps {
  currentTab: 'read' | 'single' | 'vocab' | 'quiz' | 'custom';
  onSelectTab: (tab: 'read' | 'single' | 'vocab' | 'quiz' | 'custom') => void;
  onOpenExportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenExportModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onSelectTab('read')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2 whitespace-nowrap shrink-0">
            <span className="text-amber-500 font-black">CinemaLingo</span>
            <span className="text-slate-500 font-normal text-sm hidden sm:inline">Batman Begins</span>
          </span>
        </button>

        {/* Zone 2: 4-5 Nav Links (Single line, text with subtle hover) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <button
            onClick={() => onSelectTab('read')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentTab === 'read'
                ? 'text-amber-400 border-b-2 border-amber-500 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            All Paragraphs
          </button>
          <button
            onClick={() => onSelectTab('single')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentTab === 'single'
                ? 'text-amber-400 border-b-2 border-amber-500 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Study Mode
          </button>
          <button
            onClick={() => onSelectTab('vocab')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentTab === 'vocab'
                ? 'text-amber-400 border-b-2 border-amber-500 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Vocabulary Bank
          </button>
          <button
            onClick={() => onSelectTab('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentTab === 'quiz'
                ? 'text-amber-400 border-b-2 border-amber-500 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Quiz & Cards
          </button>
          <button
            onClick={() => onSelectTab('custom')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentTab === 'custom'
                ? 'text-amber-400 border-b-2 border-amber-500 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Custom Script
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export Script</span>
          </button>
        </div>
      </div>

      {/* Mobile nav row */}
      <div className="flex md:hidden items-center justify-between gap-1 overflow-x-auto pt-3 mt-2 border-t border-slate-900 text-xs">
        <button
          onClick={() => onSelectTab('read')}
          className={`px-3 py-1.5 whitespace-nowrap rounded-md ${
            currentTab === 'read' ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-400'
          }`}
        >
          All 75
        </button>
        <button
          onClick={() => onSelectTab('single')}
          className={`px-3 py-1.5 whitespace-nowrap rounded-md ${
            currentTab === 'single' ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-400'
          }`}
        >
          Study Mode
        </button>
        <button
          onClick={() => onSelectTab('vocab')}
          className={`px-3 py-1.5 whitespace-nowrap rounded-md ${
            currentTab === 'vocab' ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-400'
          }`}
        >
          Vocabulary
        </button>
        <button
          onClick={() => onSelectTab('quiz')}
          className={`px-3 py-1.5 whitespace-nowrap rounded-md ${
            currentTab === 'quiz' ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-400'
          }`}
        >
          Quiz
        </button>
        <button
          onClick={() => onSelectTab('custom')}
          className={`px-3 py-1.5 whitespace-nowrap rounded-md ${
            currentTab === 'custom' ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-400'
          }`}
        >
          Custom
        </button>
      </div>
    </header>
  );
};
