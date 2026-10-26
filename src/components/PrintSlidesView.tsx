import React from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { SlideVisualizer } from './SlideVisualizer';

interface PrintSlidesViewProps {
  onClose: () => void;
}

export const PrintSlidesView: React.FC<PrintSlidesViewProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#06070a] overflow-y-auto p-4 sm:p-8">
      {/* Top Banner (hidden in print) */}
      <div className="no-print max-w-6xl mx-auto mb-8 p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 flex items-center justify-between flex-wrap gap-4 sticky top-4 z-50 shadow-2xl backdrop-blur-md">
        <div>
          <h2 className="text-lg font-bold text-white">Visualização de Impressão & Exportação em PDF</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Todos os 14 slides estruturados com fidelidade integral ao TCC (Use Ctrl+P / Cmd+P para Salvar como PDF)
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs sm:text-sm shadow-lg transition-colors"
          >
            Imprimir / Salvar em PDF
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm transition-colors"
          >
            Voltar à Apresentação
          </button>
        </div>
      </div>

      {/* Sequentially rendered slides with clean page-breaks */}
      <div className="max-w-6xl mx-auto space-y-14">
        {SLIDES_DATA.map((slide, idx) => (
          <div
            key={slide.id}
            className="slide-container bg-[#080b12] border border-slate-800 rounded-3xl p-8 sm:p-12 min-h-[680px] flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold">
                MBA PSICOLOGIA POSITIVA & INTELIGÊNCIA EMOCIONAL • UNIP
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold">
                SLIDE {String(idx + 1).padStart(2, '0')} / {SLIDES_DATA.length}
              </span>
            </div>

            {/* Slide Title */}
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1">
                {slide.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1.5">
                {slide.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400">{slide.subtitle}</p>
            </div>

            {/* Visual content */}
            <div className="flex-1 my-auto">
              <SlideVisualizer slide={slide} theme="dark" />
            </div>

            {/* Footer */}
            <div className="border-t border-slate-800 pt-4 mt-6 flex items-center justify-between text-xs sm:text-sm text-slate-400 font-mono">
              <span>Orientação: Profª. Flávia Vasconcelos</span>
              <span>Autores: Fabiana Nogueira • Rodrigo Tognareli • Viviane Tasso</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
