import React, { useState } from 'react';
import { SlideItem } from '../data/slidesData';
import { InteractiveFlowSimulator } from './InteractiveFlowSimulator';
import { PersonalMappingAudit } from './PersonalMappingAudit';
import {
  VoidParadoxArtwork,
  FranklTriadArtwork,
  ReframingPrismArtwork
} from './GraphicArtworks';
import {
  Sparkles,
  Compass,
  Layers,
  HeartHandshake,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Brain,
  Quote,
  GraduationCap,
  Play,
  BookOpen,
  Award,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface SlideVisualizerProps {
  slide: SlideItem;
  theme?: 'dark' | 'light';
  onStartPresentation?: () => void;
  onOpenNotes?: () => void;
  onJumpToSlide?: (index: number) => void;
  onOpenOverview?: () => void;
}

export const SlideVisualizer: React.FC<SlideVisualizerProps> = ({
  slide,
  theme = 'dark',
  onStartPresentation,
  onOpenNotes,
  onJumpToSlide,
  onOpenOverview,
}) => {
  const [selectedCardIdx, setSelectedCardIdx] = useState<number | null>(0);
  const [activeLayer, setActiveLayer] = useState<'noetica' | 'psiquica' | 'somatica'>('noetica');
  const [activeHeroPillar, setActiveHeroPillar] = useState<'noetica' | 'perma' | 'lideranca'>('noetica');
  const [paradoxView, setParadoxView] = useState<'both' | 'excess' | 'void'>('both');
  const isLight = theme === 'light';

  switch (slide.visualType) {
    case 'hero':
      return (
        <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4 gap-5 lg:gap-7">
          {/* Top Academic Tagging Banner (Full Width) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-700/20">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold border shadow-sm ${
                isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-300' : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40 neon-glow-cyan'
              }`}>
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                MBA EM PSICOLOGIA POSITIVA E INTELIGÊNCIA EMOCIONAL
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold border ${
                isLight ? 'bg-purple-100 text-purple-900 border-purple-200' : 'bg-purple-950/70 text-purple-300 border-purple-500/30'
              }`}>
                UNIP – UNIVERSIDADE PAULISTA
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold border ${
                isLight ? 'bg-emerald-100 text-emerald-900 border-emerald-200' : 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
              }`}>
                TRABALHO DE CONCLUSÃO DE MÓDULO (TCC)
              </span>
            </div>

            <div className="hidden xl:flex items-center gap-2">
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border ${
                isLight ? 'bg-slate-100 text-slate-700 border-slate-300' : 'bg-slate-900/80 text-slate-400 border-slate-800'
              }`}>
                DEFESA ACADÊMICA • 2026
              </span>
            </div>
          </div>

          {/* Majestic Panoramic 2-Column Responsive Body (Utilizes 100% of Screen Width) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch flex-1 my-auto w-full">
            {/* Left Column (7 cols): Grand Headline, Context, Pillars & Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-extrabold border ${
                  isLight ? 'bg-cyan-50 text-cyan-800 border-cyan-200' : 'bg-cyan-950/70 text-cyan-400 border-cyan-700/50'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  GESTÃO ESTRATÉGICA & DESENVOLVIMENTO HUMANO
                </div>

                <h1 className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] font-display ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  Vazio Existencial & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
                    Falta de Sentido
                  </span>{' '}
                  na Contemporaneidade
                </h1>

                <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-normal ${
                  isLight ? 'text-slate-700' : 'text-slate-200'
                }`}>
                  Uma reflexão profunda e estruturada conectando a{' '}
                  <strong className={isLight ? 'text-cyan-800 font-bold' : 'text-cyan-400 font-bold'}>
                    Logoterapia de Viktor Frankl
                  </strong>{' '}
                  e a{' '}
                  <strong className={isLight ? 'text-purple-800 font-bold' : 'text-purple-400 font-bold'}>
                    Psicologia Positiva de Martin Seligman
                  </strong>{' '}
                  para a restauração do propósito e da liderança autêntica.
                </p>
              </div>

              {/* 3 Interactive Theoretical Pillars Selector */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                  Pilares Estratégicos da Defesa:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setActiveHeroPillar('noetica')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      activeHeroPillar === 'noetica'
                        ? isLight
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-md ring-2 ring-cyan-400/30'
                          : 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400/40'
                        : isLight
                          ? 'bg-white border-slate-200 text-slate-700 hover:border-cyan-300'
                          : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <span className="text-xs font-mono font-bold uppercase text-cyan-500">Pilar 01</span>
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold leading-snug">
                      Logoterapia & Sentido da Vida
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      Dimensão noética, livre-arbítrio e autotranscendência.
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveHeroPillar('perma')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      activeHeroPillar === 'perma'
                        ? isLight
                          ? 'bg-purple-50 border-purple-500 text-purple-950 shadow-md ring-2 ring-purple-400/30'
                          : 'bg-purple-950/60 border-purple-400 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/40'
                        : isLight
                          ? 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'
                          : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                      <span className="text-xs font-mono font-bold uppercase text-purple-500">Pilar 02</span>
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold leading-snug">
                      Psicologia Positiva & Flow
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      Modelo PERMA, forças pessoais e canal de fluxo.
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveHeroPillar('lideranca')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      activeHeroPillar === 'lideranca'
                        ? isLight
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-md ring-2 ring-emerald-400/30'
                          : 'bg-emerald-950/60 border-emerald-400 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40'
                        : isLight
                          ? 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'
                          : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono font-bold uppercase text-emerald-500">Pilar 03</span>
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold leading-snug">
                      Gestão & Liderança com Sentido
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      Mapeamento existencial e coerência estratégica.
                    </p>
                  </button>
                </div>
              </div>

              {/* Academic Credentials (Dual Side-by-Side Glass Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isLight ? 'bg-white border-purple-200 shadow-sm' : 'bg-slate-900/80 border-purple-500/30'
                }`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                      Orientação Acadêmica
                    </span>
                  </div>
                  <p className={`text-base sm:text-lg font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Profª. Flávia Vasconcelos
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Docente do Módulo • UNIP</p>
                </div>

                <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isLight ? 'bg-white border-emerald-200 shadow-sm' : 'bg-slate-900/80 border-emerald-500/30'
                }`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Autores do Trabalho
                    </span>
                  </div>
                  <p className={`text-sm sm:text-base font-bold leading-snug ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Fabiana Cavassan Nogueira • Rodrigo Muniz Tognareli • Viviane Tasso
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">MBA em Psicologia Positiva & Inteligência Emocional</p>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {onStartPresentation && (
                  <button
                    onClick={onStartPresentation}
                    className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>Iniciar Apresentação</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
                {onOpenNotes && (
                  <button
                    onClick={onOpenNotes}
                    className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl border text-sm sm:text-base font-bold transition-all ${
                      isLight
                        ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                        : 'bg-slate-900/80 border-slate-700 text-slate-200 hover:border-purple-400'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span>Roteiro da Defesa</span>
                  </button>
                )}
                {onOpenOverview && (
                  <button
                    onClick={onOpenOverview}
                    className={`flex items-center gap-2 px-4 py-3.5 rounded-2xl border text-xs sm:text-sm font-mono font-bold transition-all ${
                      isLight
                        ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>14 Slides</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column (5 cols): High-Impact Holographic 3D Interactive Console */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className={`w-full h-full rounded-3xl border p-5 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-xl transition-all ${
                isLight
                  ? 'bg-white/90 border-cyan-300/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
                  : 'bg-[#080d1a]/85 border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.12)]'
              }`}>
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-extrabold uppercase text-cyan-400 tracking-wider">
                      CONCEITO NOÉTICO TRIDIMENSIONAL
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    FRANKL & SELIGMAN
                  </span>
                </div>

                {/* Central Interactive Atomic Graphic Diagram */}
                <div className="py-4 my-auto relative flex flex-col items-center justify-center">
                  <svg className="w-64 h-52 sm:w-72 sm:h-60" viewBox="0 0 300 240" fill="none">
                    <defs>
                      <radialGradient id="noeticCenterGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
                        <stop offset="60%" stopColor="#0284c7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="ringCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                      <linearGradient id="ringPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                      <linearGradient id="ringRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>

                    {/* Outer Coordinate Grid Lines */}
                    <circle cx="150" cy="120" r="105" stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="150" cy="120" r="75" stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeWidth="1" strokeDasharray="2 2" />

                    {/* Orbital Ring 1: Dimensão Noética (Cyan) */}
                    <ellipse
                      cx="150"
                      cy="120"
                      rx="110"
                      ry="48"
                      transform="rotate(-25 150 120)"
                      stroke="url(#ringCyanGrad)"
                      strokeWidth={activeHeroPillar === 'noetica' ? '2.8' : '1.8'}
                      strokeOpacity={activeHeroPillar === 'noetica' ? '1' : '0.6'}
                      className="transition-all duration-300"
                    />

                    {/* Orbital Ring 2: Dimensão Psíquica (Purple) */}
                    <ellipse
                      cx="150"
                      cy="120"
                      rx="105"
                      ry="46"
                      transform="rotate(35 150 120)"
                      stroke="url(#ringPurpleGrad)"
                      strokeWidth={activeHeroPillar === 'perma' ? '2.8' : '1.8'}
                      strokeOpacity={activeHeroPillar === 'perma' ? '1' : '0.6'}
                      className="transition-all duration-300"
                    />

                    {/* Orbital Ring 3: Dimensão Somática / Gestão (Emerald) */}
                    <ellipse
                      cx="150"
                      cy="120"
                      rx="98"
                      ry="44"
                      transform="rotate(90 150 120)"
                      stroke="url(#ringRoseGrad)"
                      strokeWidth={activeHeroPillar === 'lideranca' ? '2.8' : '1.8'}
                      strokeOpacity={activeHeroPillar === 'lideranca' ? '1' : '0.6'}
                      className="transition-all duration-300"
                    />

                    {/* Orbiting Satellite Nodes */}
                    <circle cx="55" cy="80" r="4.5" fill="#00f0ff" className="drop-shadow-[0_0_8px_#00f0ff]" />
                    <circle cx="245" cy="160" r="4" fill="#c084fc" className="drop-shadow-[0_0_8px_#c084fc]" />
                    <circle cx="150" cy="22" r="4" fill="#34d399" className="drop-shadow-[0_0_8px_#34d399]" />
                    <circle cx="195" cy="65" r="3" fill="#f59e0b" />

                    {/* Central Glowing Diamond (O Núcleo Noético / Espírito) */}
                    <circle cx="150" cy="120" r="34" fill="url(#noeticCenterGlow)" />
                    <polygon
                      points="150,96 174,120 150,144 126,120"
                      fill="#00f0ff"
                      fillOpacity="0.95"
                      className="drop-shadow-[0_0_15px_#00f0ff]"
                    />
                    <circle cx="150" cy="120" r="6" fill="#ffffff" />
                  </svg>

                  {/* Dimension Indicator Label */}
                  <div className="text-center mt-1">
                    <p className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-wider text-cyan-400">
                      {activeHeroPillar === 'noetica' && 'NÚCLEO NOÉTICO • LIVRE-ARBÍTRIO & SENTIDO'}
                      {activeHeroPillar === 'perma' && 'MODELO PERMA • ENGAJAMENTO & FLOW'}
                      {activeHeroPillar === 'lideranca' && 'GESTÃO ESTRATÉGICA • COERÊNCIA & AÇÃO'}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {activeHeroPillar === 'noetica' && 'A dimensão especificamente humana que transcende o corpo e os condicionamentos.'}
                      {activeHeroPillar === 'perma' && 'Cultivo ativo de emoções positivas, forças de caráter e significado autêntico.'}
                      {activeHeroPillar === 'lideranca' && 'Liderança orientada a propósito, alinhamento de valores e superação do vazio.'}
                    </p>
                  </div>
                </div>

                {/* Theoretical Quote Callout inside HUD */}
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm transition-all ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-black/60 border-slate-800 text-slate-200'
                }`}>
                  <p className="italic font-serif leading-relaxed text-center">
                    {activeHeroPillar === 'noetica' && '"O ser humano é um ser em busca de sentido, não apenas de prazer ou sucesso."'}
                    {activeHeroPillar === 'perma' && '"A felicidade autêntica decorre da identificação e cultivo das forças mais nobres."'}
                    {activeHeroPillar === 'lideranca' && '"Quem possui uma razão autêntica para agir supera qualquer tempestade estratégica."'}
                  </p>
                  <p className="text-center font-mono text-[11px] font-bold text-cyan-500 mt-1.5">
                    {activeHeroPillar === 'noetica' && 'Viktor Frankl • Em Busca de Sentido'}
                    {activeHeroPillar === 'perma' && 'Martin Seligman • Felicidade Autêntica'}
                    {activeHeroPillar === 'lideranca' && 'MBA UNIP • Gestão Estratégica & Inteligência Emocional'}
                  </p>
                </div>

                {/* HUD Interactive Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-700/20 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Target className="w-3.5 h-3.5" />
                    Interação 3D Ativa
                  </span>
                  <span>Arraste para rotacionar o modelo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panoramic Bottom Ribbon: Epigraph & Direct-Jump Chapter Chips (Full Width) */}
          <div className={`p-3.5 sm:p-4 rounded-2xl border backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm ${
            isLight
              ? 'bg-white/80 border-slate-300 text-slate-800 shadow-sm'
              : 'bg-[#080d1a]/80 border-slate-800 text-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <Quote className="w-4 h-4 text-cyan-400 shrink-0" />
              <p className="italic font-serif leading-snug">
                "Quem tem um porquê para viver pode suportar quase qualquer como."
                <span className="text-xs font-mono font-bold text-cyan-500 not-italic ml-2">
                  — Viktor Emil Frankl
                </span>
              </p>
            </div>

            {/* Quick jump to defense key moments */}
            {onJumpToSlide && (
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-0.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase font-bold hidden xl:inline shrink-0 mr-1">
                  Atalhos:
                </span>
                <button
                  onClick={() => onJumpToSlide(1)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-900/80 hover:bg-cyan-950 border-slate-800 hover:border-cyan-500 text-slate-300'
                  }`}
                >
                  01. Paradoxo
                </button>
                <button
                  onClick={() => onJumpToSlide(3)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-900/80 hover:bg-cyan-950 border-slate-800 hover:border-cyan-500 text-slate-300'
                  }`}
                >
                  04. Dimensão Noética
                </button>
                <button
                  onClick={() => onJumpToSlide(6)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-900/80 hover:bg-purple-950 border-slate-800 hover:border-purple-500 text-slate-300'
                  }`}
                >
                  07. PERMA & Seligman
                </button>
                <button
                  onClick={() => onJumpToSlide(8)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-900/80 hover:bg-emerald-950 border-slate-800 hover:border-emerald-500 text-slate-300'
                  }`}
                >
                  09. Estado de Flow
                </button>
                <button
                  onClick={() => onJumpToSlide(9)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-900/80 hover:bg-cyan-950 border-slate-800 hover:border-cyan-500 text-slate-300'
                  }`}
                >
                  10. Mapeamento
                </button>
                <button
                  onClick={() => onJumpToSlide(11)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-900/80 hover:bg-purple-950 border-slate-800 hover:border-purple-500 text-slate-300'
                  }`}
                >
                  12. Liderança
                </button>
              </div>
            )}
          </div>
        </div>
      );

    case 'paradox':
      return (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-1">
            <span className={`text-sm font-mono font-bold ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Filtro Analítico da Contemporaneidade:
            </span>
            <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
              isLight ? 'bg-slate-200/80 border-slate-300' : 'bg-black/50 border-slate-800'
            }`}>
              <button
                onClick={() => setParadoxView('both')}
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-lg transition-all font-semibold ${
                  paradoxView === 'both' ? 'bg-cyan-500 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Visão Completa
              </button>
              <button
                onClick={() => setParadoxView('excess')}
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-lg transition-all font-semibold ${
                  paradoxView === 'excess' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Hiperabundância
              </button>
              <button
                onClick={() => setParadoxView('void')}
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-lg transition-all font-semibold ${
                  paradoxView === 'void' ? 'bg-rose-950 text-rose-300 border border-rose-700 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                O Vácuo Real
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Abundância Externa */}
            {(paradoxView === 'both' || paradoxView === 'excess') && (
              <div className={`${paradoxView === 'both' ? 'lg:col-span-4' : 'lg:col-span-6'} p-6 sm:p-7 rounded-3xl border transition-all ${
                isLight ? 'bg-white border-cyan-200 shadow-md' : 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-cyan-500/30'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                    isLight ? 'bg-cyan-100 text-cyan-800 border border-cyan-300' : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                  }`}>
                    A PROMESSA CONTEMPORÂNEA
                  </span>
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Abundância & Hiperconexão
                </h3>
                <ul className="space-y-3.5 text-sm sm:text-base leading-relaxed">
                  <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Acesso sem precedentes a informações, produtos globais, carreiras e escolhas de vida.</span>
                  </li>
                  <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Redes sociais projetando vidas perfeitas, gerando a ilusão de sucesso contínuo para todos.</span>
                  </li>
                  <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Pressão para demonstrar produtividade, conquistas e felicidade o tempo todo.</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Center Vector Artwork */}
            {paradoxView === 'both' && (
              <div className={`lg:col-span-4 p-5 rounded-3xl border flex flex-col items-center justify-center ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#080b12] border-slate-800'
              }`}>
                <VoidParadoxArtwork isLight={isLight} className="max-w-[340px]" />
              </div>
            )}

            {/* Right: O Vazio Oculto */}
            {(paradoxView === 'both' || paradoxView === 'void') && (
              <div className={`${paradoxView === 'both' ? 'lg:col-span-4' : 'lg:col-span-6'} p-6 sm:p-7 rounded-3xl border transition-all ${
                isLight ? 'bg-white border-rose-200 shadow-md' : 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-rose-500/30'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                    isLight ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-rose-950 text-rose-300 border border-rose-800'
                  }`}>
                    O SINTOMA ONTOLÓGICO
                  </span>
                  <Activity className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  O Vácuo Existencial Real
                </h3>
                <ul className="space-y-3.5 text-sm sm:text-base leading-relaxed">
                  <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>Sensação persistente de estar vivendo no automático, repetindo roteiros pré-definidos por outros.</span>
                  </li>
                  <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>Autoestima refém de aplausos externos, gerando fragilidade emocional e ansiedade crônica.</span>
                  </li>
                  <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>Falta de resposta clara para: <em>"O que realmente desejo para minha vida e qual o sentido do que faço?"</em></span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Strategic Insight Box */}
          <div className={`p-5 sm:p-6 rounded-3xl border flex items-center gap-4 ${
            isLight ? 'bg-cyan-50 border-cyan-200 text-slate-800' : 'bg-slate-900/90 border-cyan-500/30 text-slate-200'
          }`}>
            <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-500 shrink-0">
              <Compass className="w-7 h-7" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              <strong className={isLight ? 'text-slate-900' : 'text-white'}>Pergunta Central do TCC:</strong> "Por que, em meio a tantas possibilidades de escolha, acesso à informação, desenvolvimento e consumo, ainda é tão comum encontrar pessoas que não sabem o que realmente desejam para suas vidas ou qual é o sentido daquilo que fazem?"
            </p>
          </div>
        </div>
      );

    case 'pillars':
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* 3 Interactive Pillar Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {slide.keyPoints.map((point, idx) => {
                const isSelected = selectedCardIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedCardIdx(idx)}
                    className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between select-none shadow-sm ${
                      isSelected
                        ? isLight
                          ? 'bg-cyan-50 border-cyan-400 ring-2 ring-cyan-400 text-slate-900 shadow-lg'
                          : 'bg-cyan-950/50 border-cyan-400 neon-glow-cyan ring-1 ring-cyan-400 text-white'
                        : isLight
                          ? 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                          : 'bg-[#0b0e16]/80 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                          isLight ? 'bg-cyan-100 text-cyan-800 border-cyan-200' : 'bg-black/60 text-cyan-300 border-cyan-900'
                        }`}>
                          {point.badge}
                        </span>
                        <span className="text-base font-mono font-extrabold text-cyan-500">0{idx + 1}</span>
                      </div>
                      <h4 className={`text-lg font-bold mb-3 leading-snug ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}>
                        {point.title}
                      </h4>
                      <p className="text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700/20 text-xs font-mono text-cyan-500 font-bold flex items-center justify-between">
                      <span>{isSelected ? '★ Pilar Selecionado' : 'Clique para focar'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vector Illustration & Synthesis */}
            <div className={`lg:col-span-4 p-6 rounded-3xl border flex flex-col items-center ${
              isLight ? 'bg-white border-emerald-200 shadow-md' : 'bg-[#090d16] border-emerald-500/40 neon-glow-emerald'
            }`}>
              <FranklTriadArtwork isLight={isLight} className="max-w-[320px]" />
              <div className={`p-4 rounded-xl border mt-3 text-center w-full ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/50 border-slate-800'
              }`}>
                <span className="text-xs font-mono uppercase text-emerald-500 font-bold block mb-1">
                  Princípio da Autotranscendência
                </span>
                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  "O sentido não é encontrado apenas olhando para dentro de si, mas frequentemente ao se voltar para algo ou alguém que ultrapassa os próprios interesses." (Frankl, 2008)
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'noetic-layers':
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Layer Selector Stack */}
            <div className="lg:col-span-7 space-y-4">
              {/* Layer 3: Noética */}
              <div
                onClick={() => setActiveLayer('noetica')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  activeLayer === 'noetica'
                    ? isLight
                      ? 'bg-cyan-50 border-cyan-400 ring-2 ring-cyan-400 shadow-md'
                      : 'bg-gradient-to-r from-cyan-950/60 to-slate-900 border-cyan-400 neon-glow-cyan ring-1 ring-cyan-400'
                    : isLight
                      ? 'bg-white border-slate-200 opacity-70 hover:opacity-100'
                      : 'bg-slate-900/60 border-slate-800 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-500 font-mono text-sm font-bold border border-cyan-500/40 shrink-0">
                  3. NOÉTICA
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-base font-bold ${isLight ? 'text-cyan-900' : 'text-cyan-300'}`}>
                      Dimensão Noética (Espiritual Laica)
                    </h4>
                    <span className="text-xs font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-bold">
                      LIBERDADE & SENTIDO
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    Consciência moral, autodistanciamento, liberdade interior diante das circunstâncias, responsabilidade e capacidade de buscar sentido. Não se refere a religião, mas ao especificamente humano.
                  </p>
                </div>
              </div>

              {/* Layer 2: Psíquica */}
              <div
                onClick={() => setActiveLayer('psiquica')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  activeLayer === 'psiquica'
                    ? isLight
                      ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400 shadow-md'
                      : 'bg-gradient-to-r from-amber-950/60 to-slate-900 border-amber-400 neon-glow-amber ring-1 ring-amber-400'
                    : isLight
                      ? 'bg-white border-slate-200 opacity-70 hover:opacity-100'
                      : 'bg-slate-900/60 border-slate-800 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-500 font-mono text-sm font-bold border border-amber-500/40 shrink-0">
                  2. PSÍQUICA
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-base font-bold ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                      Dimensão Psíquica (Mente & Emoção)
                    </h4>
                    <span className="text-xs font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-bold">
                      CONDICIONAMENTOS
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    Impulsos emocionais, traços de personalidade, temperamento, traumas e condicionamentos sociais. É a esfera psicológica que pode ser observada e regulada pela dimensão noética.
                  </p>
                </div>
              </div>

              {/* Layer 1: Somática */}
              <div
                onClick={() => setActiveLayer('somatica')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  activeLayer === 'somatica'
                    ? isLight
                      ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400 shadow-md'
                      : 'bg-gradient-to-r from-rose-950/60 to-slate-900 border-rose-400 ring-1 ring-rose-400'
                    : isLight
                      ? 'bg-white border-slate-200 opacity-70 hover:opacity-100'
                      : 'bg-slate-900/60 border-slate-800 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="p-3 rounded-xl bg-rose-500/20 text-rose-500 font-mono text-sm font-bold border border-rose-500/40 shrink-0">
                  1. SOMÁTICA
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-base font-bold ${isLight ? 'text-rose-900' : 'text-rose-300'}`}>
                      Dimensão Somática (Biológica)
                    </h4>
                    <span className="text-xs font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-bold">
                      FISIOLOGIA
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    Corpo físico, carga genética, neuroquímica e respostas celulares. Sujeita a limitações biológicas e adoecimento físico.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Detailed Inspection Box */}
            <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between shadow-2xl ${
              isLight ? 'bg-white border-cyan-200' : 'bg-[#0a0d16] border-cyan-500/40 neon-glow-cyan'
            }`}>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-500 font-bold block mb-2">
                  Diagnóstico da Ontologia Dimensional de Frankl
                </span>
                <h4 className={`text-xl font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {activeLayer === 'noetica' && 'O Núcleo Noético (Indestrutível)'}
                  {activeLayer === 'psiquica' && 'O Filtro Psíquico (Condicionado)'}
                  {activeLayer === 'somatica' && 'O Veículo Somático (Biológico)'}
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed mb-5 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                  {activeLayer === 'noetica' &&
                    'Frankl defende que o espírito humano nunca adoece no sentido biológico. Mesmo na enfermidade grave, a capacidade noética de se posicionar diante da dor permanece como o refúgio inatacável da dignidade humana.'}
                  {activeLayer === 'psiquica' &&
                    'As emoções e pensamentos funcionam como o clima atmosférico: tempestades passageiras. O autodistanciamento noético permite testemunhar o medo ou a ansiedade sem ser escravizado por eles.'}
                  {activeLayer === 'somatica' &&
                    'O corpo biológico possui limites reais inescapáveis (sono, fadiga, vulnerabilidade celular). Cuidar do corpo é indispensável, mas a realização humana demanda o salto noético de propósito.'}
                </p>
              </div>

              <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                isLight ? 'bg-cyan-50 border-cyan-200 text-cyan-900' : 'bg-black/50 border-slate-800 text-cyan-300'
              }`}>
                💡 <strong>Lição Executiva para a Liderança:</strong> O líder maduro opera na dimensão noética: não reage por impulso visceral ao estresse de mercado, mas delibera com base em valores inegociáveis.
              </div>
            </div>
          </div>
        </div>
      );

    case 'happiness-triad':
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vida Agradável */}
            <div className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
              isLight ? 'bg-white border-amber-200 shadow-md' : 'bg-gradient-to-b from-amber-950/20 to-slate-900 border-amber-500/30 hover:border-amber-400'
            }`}>
              <div>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                  isLight ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-amber-950 text-amber-300 border-amber-800'
                }`}>
                  NÍVEL 1 • HEDONISMO
                </span>
                <h4 className={`text-lg sm:text-xl font-bold mt-3 mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  A Vida Agradável
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Emoções positivas e apreciação da alegria, gratidão e tranquilidade. Momentos de convivência com pessoas queridas, contato com a natureza e valorização de pequenas conquistas.
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-slate-700/20 text-xs text-amber-500 font-mono font-bold">
                Risco: Adaptação hedônica rápida.
              </div>
            </div>

            {/* Vida Engajada */}
            <div className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
              isLight ? 'bg-white border-cyan-300 shadow-md ring-1 ring-cyan-200' : 'bg-gradient-to-b from-cyan-950/20 to-slate-900 border-cyan-500/40 neon-glow-cyan hover:border-cyan-300'
            }`}>
              <div>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                  isLight ? 'bg-cyan-100 text-cyan-800 border-cyan-200' : 'bg-cyan-950 text-cyan-300 border-cyan-800'
                }`}>
                  NÍVEL 2 • EUDAIMONIA
                </span>
                <h4 className={`text-lg sm:text-xl font-bold mt-3 mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  A Vida Engajada
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Uso das próprias capacidades e forças pessoais em atividades que exigem habilidades, concentração e geram o estado de Flow. A pessoa participa ativamente de seu desenvolvimento.
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-slate-700/20 text-xs text-cyan-500 font-mono font-bold">
                Alavanca: Foco e forças de caráter (VIA).
              </div>
            </div>

            {/* Vida Significativa */}
            <div className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
              isLight ? 'bg-white border-purple-300 shadow-md ring-1 ring-purple-200' : 'bg-gradient-to-b from-purple-950/20 to-slate-900 border-purple-500/40 neon-glow-purple hover:border-purple-300'
            }`}>
              <div>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                  isLight ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-purple-950 text-purple-300 border-purple-800'
                }`}>
                  NÍVEL 3 • TRANSCENDÊNCIA
                </span>
                <h4 className={`text-lg sm:text-xl font-bold mt-3 mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  A Vida Significativa
                </h4>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Conexão com algo que ultrapassa os interesses individuais imediatos: a família, o trabalho com propósito, a educação, a comunidade ou a espiritualidade.
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-slate-700/20 text-xs text-purple-500 font-mono font-bold">
                Cura Existencial: Sentido duradouro.
              </div>
            </div>
          </div>

          <div className={`p-5 sm:p-6 rounded-3xl border text-sm sm:text-base flex items-center gap-3.5 ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800 text-slate-200'
          }`}>
            <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 shrink-0" />
            <span>
              <strong>Síntese de Martin Seligman (2004):</strong> Uma pessoa pode ter prazer e conquistas, mas ainda sentir falta de sentido. Da mesma forma, pode realizar atividades difíceis sem deixar de reconhecer o valor do que constrói.
            </span>
          </div>
        </div>
      );

    case 'perma-comparison':
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2004 Felicidade Autêntica */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isLight ? 'bg-white border-cyan-200 shadow-md' : 'bg-[#090c14] border-cyan-500/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-cyan-500">MODELO ORIGINAL (2004)</span>
                <span className="text-xs font-mono text-slate-400 font-semibold">Authentic Happiness</span>
              </div>
              <h4 className={`text-xl font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Tríade da Felicidade Autêntica
              </h4>
              <p className={`text-sm leading-relaxed mb-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Foco primordial na "Satisfação com a Vida" através de 3 caminhos complementares:
              </p>
              <div className="space-y-3 text-sm">
                <div className={`p-3.5 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/90 border-slate-800 text-slate-200'
                }`}>
                  <strong>1. Vida Agradável:</strong> Emoções positivas (alegria, gratidão, paz).
                </div>
                <div className={`p-3.5 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/90 border-slate-800 text-slate-200'
                }`}>
                  <strong>2. Vida Engajada:</strong> Uso das forças pessoais e estado de Flow.
                </div>
                <div className={`p-3.5 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/90 border-slate-800 text-slate-200'
                }`}>
                  <strong>3. Vida Significativa:</strong> Conexão com algo maior que o ego.
                </div>
              </div>
            </div>

            {/* 2011 Modelo PERMA */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isLight ? 'bg-white border-purple-300 shadow-md ring-1 ring-purple-200' : 'bg-[#090c14] border-purple-500/40 neon-glow-purple'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-purple-500">MODELO EXPANDIDO (2011)</span>
                <span className="text-xs font-mono text-slate-400 font-semibold">Flourish</span>
              </div>
              <h4 className={`text-xl font-bold mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Modelo PERMA de Florescimento
              </h4>
              <p className={`text-sm leading-relaxed mb-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Superação do conceito univariado: 5 pilares autônomos de bem-estar:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className={`p-3 rounded-xl border ${
                  isLight ? 'bg-purple-50 border-purple-200 text-purple-900' : 'bg-purple-950/40 border-purple-800/40 text-purple-200'
                }`}>
                  <strong>P:</strong> Positive Emotion
                </div>
                <div className={`p-3 rounded-xl border ${
                  isLight ? 'bg-cyan-50 border-cyan-200 text-cyan-900' : 'bg-cyan-950/40 border-cyan-800/40 text-cyan-200'
                }`}>
                  <strong>E:</strong> Engagement (Flow)
                </div>
                <div className={`p-3 rounded-xl border sm:col-span-2 ${
                  isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-emerald-950/40 border-emerald-800/40 text-emerald-200'
                }`}>
                  <strong>R:</strong> Positive Relationships (Vínculos Positivos) ★ <em>Adição de 2011</em>
                </div>
                <div className={`p-3 rounded-xl border ${
                  isLight ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-amber-950/40 border-amber-800/40 text-amber-200'
                }`}>
                  <strong>M:</strong> Meaning (Sentido)
                </div>
                <div className={`p-3 rounded-xl border ${
                  isLight ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-rose-950/40 border-rose-800/40 text-rose-200'
                }`}>
                  <strong>A:</strong> Accomplishment (Realização) ★ <em>Adição de 2011</em>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border text-sm sm:text-base leading-relaxed ${
            isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-slate-900/90 border-slate-700/80 text-slate-200'
          }`}>
            <strong className={isLight ? 'text-slate-950' : 'text-white'}>Atenção Conceitual Exigida no Texto da UNIP:</strong> "A tríade da felicidade autêntica e o modelo PERMA são propostas relacionadas, mas não devem ser confundidas." (Seligman, 2004; 2011).
          </div>
        </div>
      );

    case 'flow-interactive':
      return <InteractiveFlowSimulator theme={theme} />;

    case 'mapping-interactive':
      return <PersonalMappingAudit theme={theme} />;

    case 'reframing-matrix':
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className={`p-5 sm:p-6 rounded-3xl border ${
                isLight ? 'bg-white border-rose-200 shadow-sm' : 'bg-slate-900/80 border-rose-500/30'
              }`}>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isLight ? 'bg-rose-100 text-rose-800' : 'bg-rose-950 text-rose-300'
                }`}>
                  O INEVITÁVEL
                </span>
                <h4 className={`text-base font-bold mt-2.5 mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  A Tríade Trágica
                </h4>
                <p className={`text-sm leading-relaxed mb-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Frankl identificou três aspectos inescapáveis da existência humana: o Sofrimento/Dor, a Culpa e a Morte.
                </p>
                <div className="text-xs font-mono text-rose-500 font-bold">
                  Resposta: Atitude ética.
                </div>
              </div>

              <div className={`p-5 sm:p-6 rounded-3xl border ${
                isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-slate-900/80 border-amber-500/30'
              }`}>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isLight ? 'bg-amber-100 text-amber-800' : 'bg-amber-950 text-amber-300'
                }`}>
                  O FILTRO ÉTICO
                </span>
                <h4 className={`text-base font-bold mt-2.5 mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Anti-Positividade
                </h4>
                <p className={`text-sm leading-relaxed mb-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Ressignificar não é fingir que a dor não existe nem justificar injustiças ou romantizar sofrimento.
                </p>
                <div className="text-xs font-mono text-amber-600 font-bold">
                  Respeito ao tempo e luto.
                </div>
              </div>

              <div className={`p-5 sm:p-6 rounded-3xl border ${
                isLight ? 'bg-white border-emerald-300 shadow-md ring-1 ring-emerald-200' : 'bg-slate-900/80 border-emerald-500/40 neon-glow-emerald'
              }`}>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950 text-emerald-300'
                }`}>
                  TRANSCENDÊNCIA
                </span>
                <h4 className={`text-base font-bold mt-2.5 mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Crescimento Noético
                </h4>
                <p className={`text-sm leading-relaxed mb-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Descobrir forças latentes: uma experiência difícil não precisa determinar todas as escolhas futuras.
                </p>
                <div className="text-xs font-mono text-emerald-600 font-bold">
                  Construção de sentido.
                </div>
              </div>
            </div>

            {/* Vector Illustration */}
            <div className={`lg:col-span-5 p-6 rounded-3xl border flex flex-col items-center ${
              isLight ? 'bg-white border-purple-200 shadow-md' : 'bg-[#080b12] border-purple-500/30 neon-glow-purple'
            }`}>
              <ReframingPrismArtwork isLight={isLight} className="max-w-[340px]" />
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-center justify-between flex-wrap gap-4 ${
            isLight ? 'bg-cyan-50 border-cyan-200 text-slate-800' : 'bg-[#0a0d16] border-cyan-500/30 text-slate-200'
          }`}>
            <span className="text-sm font-bold text-cyan-600 font-mono">
              Fluxo da Ressignificação Estratégica:
            </span>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-mono flex-wrap">
              <span className="px-3 py-1 bg-slate-700/20 rounded font-semibold">1. Acolhimento do Fato</span>
              <ArrowRight className="w-4 h-4 text-cyan-500" />
              <span className="px-3 py-1 bg-slate-700/20 rounded font-semibold">2. Autodistanciamento</span>
              <ArrowRight className="w-4 h-4 text-cyan-500" />
              <span className="px-3 py-1 bg-slate-700/20 rounded font-semibold">3. Novos Aprendizados</span>
              <ArrowRight className="w-4 h-4 text-cyan-500" />
              <span className="px-3 py-1 bg-cyan-500 text-black rounded font-bold">
                4. Ação com Sentido
              </span>
            </div>
          </div>
        </div>
      );

    case 'synthesis-quadrant':
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isLight ? 'bg-white border-purple-200 shadow-md' : 'bg-gradient-to-br from-purple-950/30 to-slate-900 border-purple-500/40 neon-glow-purple'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-500" />
                <h4 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Logoterapia (Viktor Frankl)
                </h4>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                  <span><strong>Foco:</strong> A Vontade de Sentido e a Dimensão Noética.</span>
                </li>
                <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                  <span><strong>Pergunta Central:</strong> "Qual o sentido e a responsabilidade nesta situação concreta?"</span>
                </li>
                <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                  <span><strong>Potência:</strong> Resiliência existencial, sobriedade ética e autotranscendência.</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isLight ? 'bg-white border-cyan-200 shadow-md' : 'bg-gradient-to-br from-cyan-950/30 to-slate-900 border-cyan-500/40 neon-glow-cyan'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-500" />
                <h4 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Psicologia Positiva (Martin Seligman)
                </h4>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                  <span><strong>Foco:</strong> Florescimento (Flourish), Forças de Caráter e Modelo PERMA.</span>
                </li>
                <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                  <span><strong>Pergunta Central:</strong> "Como utilizar meus pontos fortes para maximizar engajamento e bem-estar?"</span>
                </li>
                <li className={`flex items-start gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                  <span><strong>Potência:</strong> Mensuração científica, ampliação de recursos cognitivos e vitalidade diária.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`p-6 rounded-3xl border text-center ${
            isLight ? 'bg-gradient-to-r from-purple-50 via-cyan-50 to-emerald-50 border-slate-300 text-slate-800' : 'bg-gradient-to-r from-purple-950/40 via-cyan-950/40 to-emerald-950/40 border-white/20 text-slate-100'
          }`}>
            <h5 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-500 font-bold mb-2">
              O Vértice de Integração do TCC
            </h5>
            <p className="text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
              O Sentido (Frankl) direciona a bússola; as Forças e o Flow (Seligman & Csikszentmihalyi) fornecem a propulsão. Viver com sentido é unir a consciência noética à execução engajada.
            </p>
          </div>
        </div>
      );

    case 'leadership-playbook':
      return (
        <div className="space-y-6">
          <div className={`p-5 rounded-2xl border text-sm sm:text-base leading-relaxed ${
            isLight ? 'bg-cyan-50 border-cyan-200 text-slate-800' : 'bg-slate-900/90 border-cyan-500/30 text-slate-300'
          }`}>
            <strong className="text-cyan-500">Perspectiva da Gestão Estratégica:</strong> Como transferir os preceitos do TCC para a liderança corporativa de alta performance, retenção de talentos e saúde organizacional sustentável.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
              isLight ? 'bg-white border-cyan-200 shadow-md' : 'bg-[#090d16] border-cyan-500/30 hover:border-cyan-400'
            }`}>
              <div>
                <div className="p-3 w-fit rounded-xl bg-cyan-500/20 text-cyan-500 mb-3.5 group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className={`text-base sm:text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Sensemaking Corporativo
                </h4>
                <p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Conectar metas técnicas ao propósito existencial da empresa. Colaboradores que compreendem o "porquê" superam qualquer obstáculo de mercado.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-500 font-bold pt-3 border-t border-slate-700/20">
                Pilar Frankliano (Propósito)
              </span>
            </div>

            <div className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
              isLight ? 'bg-white border-emerald-200 shadow-md' : 'bg-[#090d16] border-emerald-500/30 hover:border-emerald-400'
            }`}>
              <div>
                <div className="p-3 w-fit rounded-xl bg-emerald-500/20 text-emerald-500 mb-3.5 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className={`text-base sm:text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Arquitetura de Flow
                </h4>
                <p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Equalização permanente entre complexidade do projeto e habilidade dos colaboradores, eliminando o burnout por ansiedade e o tédio crônico.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-500 font-bold pt-3 border-t border-slate-700/20">
                Pilar Csikszentmihalyi (Engajamento)
              </span>
            </div>

            <div className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
              isLight ? 'bg-white border-purple-200 shadow-md' : 'bg-[#090d16] border-purple-500/30 hover:border-purple-400'
            }`}>
              <div>
                <div className="p-3 w-fit rounded-xl bg-purple-500/20 text-purple-500 mb-3.5 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className={`text-base sm:text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Gestão por Forças (VIA)
                </h4>
                <p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Alocação de talentos onde suas virtudes naturais são potencializadas, promovendo florescimento, segurança psicológica e inovação contínua.
                </p>
              </div>
              <span className="text-xs font-mono text-purple-500 font-bold pt-3 border-t border-slate-700/20">
                Pilar Seligman (Florescimento)
              </span>
            </div>
          </div>
        </div>
      );

    case 'conclusion-vision':
      return (
        <div className="space-y-6">
          <div className={`p-8 sm:p-10 rounded-3xl border text-center max-w-4xl mx-auto ${
            isLight ? 'bg-white border-cyan-300 shadow-xl' : 'bg-gradient-to-b from-[#0a0f1c] to-[#06080d] border-cyan-500/40 neon-glow-cyan'
          }`}>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-500 font-bold block mb-2.5">
              SÍNTESE DO TRABALHO DE CONCLUSÃO
            </span>
            <h3 className={`text-2xl sm:text-4xl font-extrabold font-display mb-4 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              "O sentido da vida não é algo inventado, <br />
              mas algo <span className="text-cyan-500">descoberto</span> a cada situação."
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}>
              Uma vida plena não é a ausência de dor ou dificuldades, mas a posse incontestável de razões para continuar, da capacidade de aprender com a adversidade e da coerência diária com nossos valores inegociáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className={`p-6 rounded-2xl border text-center ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <span className="text-cyan-500 font-mono text-xl font-extrabold block mb-1">01</span>
              <h5 className={`text-base font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Autodistanciamento</h5>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Não somos reféns das nossas emoções ou pressões sociais. Podemos escolher nossa atitude consciente.
              </p>
            </div>
            <div className={`p-6 rounded-2xl border text-center ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <span className="text-purple-500 font-mono text-xl font-extrabold block mb-1">02</span>
              <h5 className={`text-base font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Autotranscendência</h5>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                O sentido revela-se quando servimos a algo maior que nossa vaidade ou interesses egoicos imediatos.
              </p>
            </div>
            <div className={`p-6 rounded-2xl border text-center ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <span className="text-emerald-500 font-mono text-xl font-extrabold block mb-1">03</span>
              <h5 className={`text-base font-bold mb-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>Engajamento com Forças</h5>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Mobilizar forças de caráter no presente para transformar reflexão em ação transformadora e duradoura.
              </p>
            </div>
          </div>
        </div>
      );

    case 'academic-references':
      return (
        <div className="space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            isLight ? 'bg-white border-slate-200 shadow-md' : 'bg-slate-900/80 border-slate-800'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-cyan-500" />
              <h4 className={`text-lg sm:text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Referências Bibliográficas Normatizadas
              </h4>
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-mono leading-relaxed">
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-black/40 border-slate-800 text-slate-300'
              }`}>
                <strong>CSIKSZENTMIHALYI, Mihaly.</strong> <em>Flow: the psychology of optimal experience.</em> New York: Harper & Row, 1990.
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-black/40 border-slate-800 text-slate-300'
              }`}>
                <strong>FRANKL, Viktor E.</strong> <em>Em busca de sentido: um psicólogo no campo de concentração.</em> Petrópolis, RJ: Vozes, 2008.
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-black/40 border-slate-800 text-slate-300'
              }`}>
                <strong>PEREIRA, Ivo Studart.</strong> A vontade de sentido na obra de Viktor Frankl. <em>Psicologia USP</em>, São Paulo, v. 18, n. 1, p. 125-136, 2007.
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-black/40 border-slate-800 text-slate-300'
              }`}>
                <strong>SELIGMAN, Martin E. P.</strong> <em>Authentic happiness: using the new positive psychology to realize your potential for lasting fulfillment.</em> New York: Free Press, 2004.
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-black/40 border-slate-800 text-slate-300'
              }`}>
                <strong>SELIGMAN, Martin E. P.</strong> <em>Flourish: a visionary new understanding of happiness and well-being.</em> New York: Free Press, 2011.
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border flex items-center justify-between flex-wrap gap-4 ${
            isLight ? 'bg-gradient-to-r from-purple-50 to-cyan-50 border-purple-200 text-slate-900' : 'bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border-purple-500/30 text-white'
          }`}>
            <div>
              <p className="text-base font-bold">UNIP – Universidade Paulista</p>
              <p className="text-xs sm:text-sm text-slate-400">MBA em Psicologia Positiva e Inteligência Emocional • 2026</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-cyan-500 font-bold block">Orientadora</span>
              <span className="text-base font-bold">Profª. Flávia Vasconcelos</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
