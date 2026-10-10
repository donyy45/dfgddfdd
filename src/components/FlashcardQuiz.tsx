import React, { useState, useMemo } from 'react';
import { Volume2, RotateCw, CheckCircle2, XCircle, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { ScriptParagraph, VocabItem } from '../data/paragraphs';
import { speechService } from '../utils/speech';

interface FlashcardQuizProps {
  paragraphs: ScriptParagraph[];
}

export const FlashcardQuiz: React.FC<FlashcardQuizProps> = ({ paragraphs }) => {
  const [mode, setMode] = useState<'flashcards' | 'quiz'>('flashcards');

  // Flatten all vocabulary words
  const allVocabList: (VocabItem & { paragraphNumber: number })[] = useMemo(() => {
    const list: (VocabItem & { paragraphNumber: number })[] = [];
    paragraphs.forEach((p) => {
      p.vocabulary.forEach((v) => {
        list.push({ ...v, paragraphNumber: p.paragraphNumber });
      });
    });
    return list;
  }, [paragraphs]);

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<
    {
      word: string;
      correctArabic: string;
      options: string[];
      example: string;
      paragraphNumber: number;
    }[]
  >([]);
  const [quizStep, setQuizStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Generate 5 random quiz questions
  const startNewQuiz = () => {
    if (allVocabList.length < 4) return;
    const shuffled = [...allVocabList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    const questions = selected.map((target) => {
      // Pick 3 random wrong options
      const otherVocab = allVocabList
        .filter((v) => v.word !== target.word && v.arabicMeaning !== target.arabicMeaning)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = [target.arabicMeaning, ...otherVocab.map((v) => v.arabicMeaning)].sort(
        () => 0.5 - Math.random()
      );

      return {
        word: target.word,
        correctArabic: target.arabicMeaning,
        options,
        example: target.example,
        paragraphNumber: target.paragraphNumber,
      };
    });

    setQuizQuestions(questions);
    setQuizStep(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    if (currentCardIndex < allVocabList.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(allVocabList.length - 1);
    }
  };

  const handleSelectQuizAnswer = (option: string) => {
    if (selectedAnswer !== null) return; // already answered
    setSelectedAnswer(option);
    const currentQ = quizQuestions[quizStep];
    if (option === currentQ.correctArabic) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const currentFlashcard = allVocabList[currentCardIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Mode Switcher */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setMode('flashcards')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              mode === 'flashcards'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Study Flashcards
          </button>
          <button
            onClick={() => {
              setMode('quiz');
              if (quizQuestions.length === 0) startNewQuiz();
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              mode === 'quiz'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Vocabulary Quiz
          </button>
        </div>
      </div>

      {mode === 'flashcards' ? (
        /* Flashcards Mode */
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs text-slate-500 font-mono">
              Card {currentCardIndex + 1} of {allVocabList.length} · Paragraph{' '}
              {currentFlashcard?.paragraphNumber}
            </span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[260px] bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300 shadow-xl select-none"
          >
            <div className="w-full flex items-center justify-between text-xs text-slate-500">
              <span>{isFlipped ? 'Arabic Translation' : 'English Term'}</span>
              <span className="flex items-center gap-1 text-slate-400">
                <RotateCw className="w-3.5 h-3.5" /> Click to flip
              </span>
            </div>

            {!isFlipped ? (
              /* Front: English */
              <div className="my-auto space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight">
                  {currentFlashcard?.word}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speechService.speak(currentFlashcard?.word || '', 0.85);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full text-xs transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Listen
                </button>
              </div>
            ) : (
              /* Back: Arabic & Example */
              <div className="my-auto space-y-4 w-full">
                <div
                  dir="rtl"
                  className="text-xl sm:text-2xl font-bold text-white font-arabic leading-relaxed"
                >
                  {currentFlashcard?.arabicMeaning}
                </div>
                <div className="text-xs text-slate-400 italic bg-slate-950/70 p-3 rounded-lg border border-slate-800/80 max-w-lg mx-auto">
                  <span className="text-slate-500 not-italic font-medium">Example: </span>
                  &ldquo;{currentFlashcard?.example}&rdquo;
                </div>
              </div>
            )}

            <div className="text-xs text-slate-500">
              Mastered this session: {masteredCount}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Previous Card
            </button>

            <button
              onClick={() => {
                setMasteredCount((prev) => prev + 1);
                handleNextCard();
              }}
              className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>I Know This!</span>
            </button>

            <button
              onClick={handleNextCard}
              className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Next Card
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Mode */
        <div className="space-y-6">
          {!quizFinished && quizQuestions.length > 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              {/* Question Header */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  Question {quizStep + 1} of {quizQuestions.length}
                </span>
                <span className="font-mono">Score: {quizScore}</span>
              </div>

              {/* Word Prompt */}
              <div className="text-center py-4 border-b border-slate-800">
                <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">
                  What is the correct Arabic meaning of:
                </span>
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-bold text-amber-300">
                    {quizQuestions[quizStep]?.word}
                  </h2>
                  <button
                    onClick={() =>
                      speechService.speak(quizQuestions[quizStep]?.word || '', 0.85)
                    }
                    className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" dir="rtl">
                {quizQuestions[quizStep]?.options.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === quizQuestions[quizStep].correctArabic;

                  let style =
                    'bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-200';
                  if (selectedAnswer !== null) {
                    if (isCorrect) {
                      style = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                    } else if (isSelected) {
                      style = 'bg-red-950/60 border-red-500 text-red-200';
                    } else {
                      style = 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`p-4 rounded-xl border text-sm font-arabic font-medium transition-all text-right cursor-pointer ${style}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Next */}
              {selectedAnswer !== null && (
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400 italic">
                    Example: &ldquo;{quizQuestions[quizStep].example}&rdquo;
                  </div>
                  <button
                    onClick={handleNextQuizQuestion}
                    className="px-4 py-2 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>{quizStep < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed Results */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-xl">
              <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
              <div>
                <h2 className="text-2xl font-bold text-white">Quiz Completed!</h2>
                <p className="text-sm text-slate-400 mt-1">
                  You scored <span className="font-bold text-amber-400">{quizScore}</span> out of{' '}
                  <span className="font-bold">{quizQuestions.length}</span>!
                </p>
              </div>

              <div className="w-full bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-xs text-slate-300">
                {quizScore === quizQuestions.length ? (
                  <span className="text-emerald-400 font-semibold">
                    Outstanding! You have mastered these Batman Begins script expressions!
                  </span>
                ) : (
                  <span>Great effort! Continue practicing to solidify your vocabulary mastery.</span>
                )}
              </div>

              <button
                onClick={startNewQuiz}
                className="px-6 py-2.5 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Try Another Quiz</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
