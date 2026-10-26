import React from 'react';
import { SlideItem } from '../data/slidesData';
import { X, Grid, ArrowRight } from 'lucide-react';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideItem[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-[#080b12] border border-cyan-500/40 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.2)] flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Grid className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Mapa Geral da Apresentação • 14 Slides Estratégicos
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of Slides */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slides.map((s, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={s.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 group flex flex-col justify-between h-44 ${
                  isCurrent
                    ? 'bg-cyan-950/40 border-cyan-400 neon-glow-cyan ring-1 ring-cyan-400'
                    : 'bg-[#0e121d]/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-300 border border-slate-700">
                      SLIDE {String(s.number).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 truncate max-w-[100px]">
                      {s.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-normal">
                    {s.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{s.speakerNotes.duration}</span>
                  <span className="flex items-center gap-1 group-hover:text-cyan-300">
                    Acessar <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
