import React, { useState, useMemo } from 'react';
import { X, Copy, Check, Download, FileText } from 'lucide-react';
import { ScriptParagraph } from '../data/paragraphs';
import { formatFullScriptMarkdown, downloadFile } from '../utils/exportMarkdown';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  paragraphs: ScriptParagraph[];
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  paragraphs,
}) => {
  const [copied, setCopied] = useState(false);

  const fullMarkdown = useMemo(() => {
    return formatFullScriptMarkdown(paragraphs);
  }, [paragraphs]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    downloadFile(fullMarkdown, 'batman_begins_study_guide.md');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-bold text-white">
              Export Formatted Transcript (All {paragraphs.length} Paragraphs)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info & Action Controls */}
        <div className="px-6 py-3 border-b border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400">
            Formatted strictly per requirements: Paragraph numbers, English dialogue, Arabic translations, Key Vocabulary with examples, and Notes.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Full Guide</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy All Markdown</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md File</span>
            </button>
          </div>
        </div>

        {/* Text Preview */}
        <div className="p-6 flex-1 overflow-y-auto bg-slate-950/80 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
          {fullMarkdown}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-500">
          <span>{fullMarkdown.length.toLocaleString()} characters · Ready for Obsidian, Notion, or Markdown readers</span>
          <button
            onClick={onClose}
            className="px-3 py-1 text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
