import React, { useState, useEffect } from 'react';
import { SlideItem } from '../data/slidesData';
import {
  Clock,
  Target,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  X,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideItem;
  nextSlide?: SlideItem;
  currentIndex: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
  nextSlide,
  currentIndex,
  totalSlides,
  onSelectSlide,
}) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    let interval: number;
    if (timerRunning) {
      interval = window.setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const notes = slide.speakerNotes;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#090c14] border border-cyan-500/50 rounded-3xl shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col max-h-[92vh] overflow-hidden text-slate-100">
        {/* Header with Live Presenter Clock & Progress */}
        <div className="p-5 border-b border-white/10 bg-slate-900/80 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-mono text-xs font-bold tracking-wider">
              ROTEIRO DO APRESENTADOR • DEFESA MBA UNIP
            </span>
            <span className="text-sm font-mono text-slate-400 font-bold">
              Slide {currentIndex + 1} de {totalSlides}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Timer controls */}
            <div className="flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-xl border border-slate-700">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-base text-cyan-300 font-bold tracking-wider">
                {timeFormatted}
              </span>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-1 hover:text-cyan-300 text-slate-400 ml-1"
                title={timerRunning ? 'Pausar Cronômetro' : 'Iniciar Cronômetro'}
              >
                {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setSecondsElapsed(0)}
                className="p-1 hover:text-rose-400 text-slate-400"
                title="Zerar Cronômetro"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Large Legible Font */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-200">
          {/* Slide Overview Header */}
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1.5">
              {slide.category} • TEMPO SUGERIDO: {notes.duration}
            </span>
            <h2 className="text-2xl font-bold text-white font-display">
              {slide.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">{slide.subtitle}</p>
          </div>

          {/* Strategic Objective */}
          <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 flex items-start gap-4">
            <Target className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider block mb-1">
                Objetivo Retórico deste Slide
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                {notes.objective}
              </p>
            </div>
          </div>

          {/* Talking Points for the Speaker */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-mono text-purple-300 uppercase tracking-wider font-bold">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              Pontos-Chave para Falar (Roteiro Verbal)
            </div>
            <div className="space-y-2.5">
              {notes.talkingPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3.5 text-sm sm:text-base leading-relaxed"
                >
                  <span className="text-cyan-400 font-mono font-bold shrink-0 text-base">0{idx + 1}.</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Strategic Insight */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/40 flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider block mb-1">
                Toque do Especialista em Gestão Estratégica
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                "{notes.executiveInsight}"
              </p>
            </div>
          </div>

          {/* Anticipated Question from the Professor */}
          <div className="p-5 rounded-2xl bg-slate-900/95 border border-emerald-500/40 space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-emerald-400 uppercase tracking-wider font-bold">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              Possível Pergunta da Professora Flávia Vasconcelos & Resposta Recomendada
            </div>
            <p className="text-sm sm:text-base text-white font-semibold">
              Q: "{notes.potentialQuestion.question}"
            </p>
            <div className="p-4 rounded-xl bg-black/50 border border-slate-800 text-sm leading-relaxed">
              <strong className="text-emerald-300">Resposta Recomendada: </strong>
              {notes.potentialQuestion.answer}
            </div>
          </div>

          {/* Next Slide Preview */}
          {nextSlide && (
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-0.5">
                  Próximo Slide
                </span>
                <span className="text-sm font-bold text-white">
                  Slide {nextSlide.number}: {nextSlide.title}
                </span>
              </div>
              <button
                onClick={() => {
                  onSelectSlide(currentIndex + 1);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-700/60 text-xs sm:text-sm font-semibold transition-colors"
              >
                Avançar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
