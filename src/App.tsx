/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_DATA } from './data/slidesData';
import { ThreeCanvas } from './components/ThreeCanvas';
import { SlideVisualizer } from './components/SlideVisualizer';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { PrintSlidesView } from './components/PrintSlidesView';
import { AudioPlayerDrawer } from './components/AudioPlayerDrawer';
import { classicalAudio, CLASSICAL_TRACKS } from './utils/classicalAudio';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Grid,
  Volume2,
  VolumeX,
  Printer,
  Sparkles,
  Layers,
  GraduationCap,
  Play,
  Pause,
  Award,
  HelpCircle,
  Eye,
  Box,
  Music,
  Radio,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresenterNotesOpen, setIsPresenterNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isPrintModeOpen, setIsPrintModeOpen] = useState(false);
  const [isAudioDrawerOpen, setIsAudioDrawerOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(classicalAudio.getIsPlaying());
  const [currentTrack, setCurrentTrack] = useState(classicalAudio.getCurrentTrack());
  const [is3DVisible, setIs3DVisible] = useState(true);
  const [is3DBackgroundMode, setIs3DBackgroundMode] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const nextSlide = currentSlideIndex < totalSlides - 1 ? SLIDES_DATA[currentSlideIndex + 1] : undefined;
  const isLight = theme === 'light';

  // Toggle theme class on HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  // Listen to classical audio state changes
  useEffect(() => {
    classicalAudio.onStateChange = (playing, trackId) => {
      setIsPlayingAudio(playing);
      const t = CLASSICAL_TRACKS.find((tr) => tr.id === trackId);
      if (t) setCurrentTrack(t);
    };
  }, []);

  // Slide navigation with classical audio key note & smooth 3D transition
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setSlideDirection(index > currentSlideIndex ? 'next' : 'prev');
      setCurrentSlideIndex(index);
      classicalAudio.playClassicalKey('gentle');

      // Trigger celebratory confetti on last slide (Slide 14)
      if (index === totalSlides - 1) {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#a855f7', '#10b981', '#f59e0b'],
        });
      }
    }
  }, [totalSlides, currentSlideIndex]);

  const nextSlideAction = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, totalSlides, goToSlide]);

  const prevSlideAction = useCallback(() => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, goToSlide]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Classical audio toggle
  const toggleAudio = () => {
    classicalAudio.togglePlay();
    setIsPlayingAudio(classicalAudio.getIsPlaying());
  };

  // Theme toggle
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlideAction();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlideAction();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsPresenterNotesOpen((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleAudio();
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        setIsAudioDrawerOpen((prev) => !prev);
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsPrintModeOpen((prev) => !prev);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      } else if (e.key === '?') {
        setShowKeyboardHelp((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlideAction, prevSlideAction, goToSlide, totalSlides]);

  // Auto-play timer
  useEffect(() => {
    let timer: number;
    if (autoPlay) {
      timer = window.setInterval(() => {
        if (currentSlideIndex < totalSlides - 1) {
          goToSlide(currentSlideIndex + 1);
        } else {
          setAutoPlay(false);
        }
      }, 12000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, currentSlideIndex, totalSlides, goToSlide]);

  return (
    <div className={`relative w-screen h-screen flex flex-col justify-between overflow-hidden select-none transition-colors duration-300 ${
      isLight ? 'bg-[#f1f5f9] text-slate-800' : 'bg-[#06070a] text-slate-100'
    }`}>
      {/* Dynamic Background 3D Canvas / Particles with enhanced presence on Hero */}
      {is3DVisible && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 pointer-events-auto ${
            currentSlideIndex === 0
              ? isLight ? 'opacity-40' : 'opacity-65'
              : is3DBackgroundMode ? (isLight ? 'opacity-20' : 'opacity-35') : 'opacity-80'
          }`}
        >
          <ThreeCanvas mode={currentSlide.threeMode} theme={theme} />
        </div>
      )}

      {/* Cyber Grid & Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* TOP HEADER / EXECUTIVE STATUS BAR */}
      <header className={`relative z-20 px-4 sm:px-8 py-3.5 border-b backdrop-blur-md flex items-center justify-between gap-4 transition-colors ${
        isLight ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-[#07090e]/85 border-white/10'
      }`}>
        {/* Left: Academic Course Branding */}
        <div className="flex items-center gap-3.5">
          <div className={`p-2 rounded-xl border ${
            isLight ? 'bg-cyan-100 text-cyan-800 border-cyan-200' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
          }`}>
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-extrabold tracking-wide font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                UNIP
              </span>
              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${
                isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-300' : 'bg-cyan-950 text-cyan-300 border-cyan-800/50'
              }`}>
                MBA PSICOLOGIA POSITIVA & INTELIGÊNCIA EMOCIONAL
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block font-medium">
              Orientação: Profª. Flávia Vasconcelos • Defesa de TCC
            </p>
          </div>
        </div>

        {/* Center: Slide Jump Dropdown with large font */}
        <div className="hidden md:flex items-center gap-2">
          <select
            value={currentSlideIndex}
            onChange={(e) => goToSlide(Number(e.target.value))}
            className={`text-xs sm:text-sm font-mono font-semibold rounded-xl px-3.5 py-2 border focus:outline-none transition-colors ${
              isLight
                ? 'bg-slate-50 border-slate-300 text-slate-800 focus:border-cyan-500'
                : 'bg-[#0c101a] border-cyan-500/40 text-cyan-300 focus:border-cyan-400'
            }`}
          >
            {SLIDES_DATA.map((s, idx) => (
              <option key={s.id} value={idx}>
                {String(s.number).padStart(2, '0')}. {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Action Buttons Dock */}
        <div className="flex items-center gap-2">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all ${
              isLight
                ? 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
                : 'bg-slate-900/90 text-amber-400 border-slate-700 hover:border-amber-400'
            }`}
            title={isLight ? 'Alternar para Tema Escuro (Atalho: T)' : 'Alternar para Tema Claro (Atalho: T)'}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Classical Music Suite Controller Button */}
          <div className={`flex items-center rounded-xl border p-0.5 ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900/90 border-emerald-500/30'
          }`}>
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-lg text-xs transition-colors ${
                isPlayingAudio ? 'bg-emerald-500 text-black' : 'text-slate-400 hover:text-emerald-500'
              }`}
              title={isPlayingAudio ? 'Pausar Música Clássica (Atalho: M)' : 'Tocar Música Clássica (Atalho: M)'}
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 fill-current" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsAudioDrawerOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-300 hover:opacity-80 transition-opacity"
              title="Abrir Suíte Instrumental (Atalho: S)"
            >
              <Music className="w-3.5 h-3.5" />
              <span className="hidden xl:inline truncate max-w-[130px]">
                {currentTrack.title}
              </span>
            </button>
          </div>

          {/* Slide Overview Grid */}
          <button
            onClick={() => setIsOverviewOpen(true)}
            className={`p-2.5 rounded-xl border transition-colors ${
              isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:text-cyan-300'
            }`}
            title="Visão Geral de Todos os Slides (Atalho: G)"
          >
            <Grid className="w-4 h-4" />
          </button>

          {/* Speaker Notes */}
          <button
            onClick={() => setIsPresenterNotesOpen(true)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${
              isLight
                ? 'bg-purple-100 border-purple-300 text-purple-900 hover:bg-purple-200'
                : 'bg-purple-950/50 border-purple-500/40 text-purple-300 hover:bg-purple-900/60'
            }`}
            title="Roteiro do Apresentador & Anotações (Atalho: N)"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden lg:inline">Roteiro</span>
          </button>

          {/* 3D Background Toggle */}
          <button
            onClick={() => setIs3DVisible(!is3DVisible)}
            className={`p-2.5 rounded-xl border transition-colors ${
              is3DVisible
                ? isLight
                  ? 'bg-cyan-100 border-cyan-300 text-cyan-800'
                  : 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300'
                : 'bg-slate-800/40 border-slate-700 text-slate-400'
            }`}
            title="Alternar Visualizador 3D"
          >
            <Box className="w-4 h-4" />
          </button>

          {/* PDF / Print Mode */}
          <button
            onClick={() => setIsPrintModeOpen(true)}
            className={`p-2.5 rounded-xl border transition-colors ${
              isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title="Exportar em PDF / Imprimir Apresentação (Atalho: P)"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className={`p-2.5 rounded-xl border transition-colors ${
              isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title="Tela Cheia (Atalho: F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* CENTRAL STAGE WITH TRUE 3D SPATIAL SLIDE TRANSITION */}
      <main
        style={{ perspective: 1400, transformStyle: 'preserve-3d' }}
        className={`relative z-10 flex-1 w-full mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-5 flex flex-col justify-between overflow-y-auto no-scrollbar transition-all ${
          currentSlideIndex === 0 ? 'max-w-[1850px]' : 'max-w-[1650px]'
        }`}
      >
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={currentSlide.id}
            custom={slideDirection}
            variants={{
              enter: (dir: 'next' | 'prev') => ({
                opacity: 0,
                rotateY: dir === 'next' ? 24 : -24,
                z: -180,
                x: dir === 'next' ? 80 : -80,
                scale: 0.93,
                filter: 'blur(6px)',
              }),
              center: {
                opacity: 1,
                rotateY: 0,
                z: 0,
                x: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.52,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
              exit: (dir: 'next' | 'prev') => ({
                opacity: 0,
                rotateY: dir === 'next' ? -24 : 24,
                z: -180,
                x: dir === 'next' ? -80 : 80,
                scale: 0.93,
                filter: 'blur(6px)',
                transition: {
                  duration: 0.42,
                  ease: [0.16, 1, 0.3, 1],
                },
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformStyle: 'preserve-3d' }}
            className="flex-1 flex flex-col justify-between w-full"
          >
            {/* Slide Identification Header (shown when not on hero slide) */}
            {currentSlide.visualType !== 'hero' && (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/20 pb-4"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className={`text-xs font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-md border ${
                      isLight ? 'bg-cyan-100 text-cyan-900 border-cyan-300' : 'bg-cyan-950/90 text-cyan-300 border-cyan-700/60'
                    }`}>
                      {currentSlide.section}
                    </span>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-md border ${
                      isLight ? 'bg-purple-100 text-purple-900 border-purple-200' : 'bg-purple-950/60 text-purple-300 border-purple-800/40'
                    }`}>
                      {currentSlide.category}
                    </span>
                    {currentSlide.academicRef && (
                      <span className="text-xs font-mono text-slate-500 hidden md:inline font-semibold">
                        Ref: {currentSlide.academicRef}
                      </span>
                    )}
                  </div>
                  <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight leading-snug ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    {currentSlide.title}
                  </h2>
                  <p className={`text-sm sm:text-base font-normal mt-1 ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {currentSlide.subtitle}
                  </p>
                </div>

                {/* Slide Index Badge */}
                <div className="self-start sm:self-center">
                  <span className={`text-base font-mono font-extrabold px-4 py-1.5 rounded-xl border shadow-sm ${
                    isLight ? 'bg-white text-cyan-800 border-cyan-300' : 'bg-slate-900/90 text-cyan-400 border-cyan-500/40'
                  }`}>
                    {String(currentSlide.number).padStart(2, '0')}{' '}
                    <span className="text-slate-500 font-normal">/ {String(totalSlides).padStart(2, '0')}</span>
                  </span>
                </div>
              </motion.div>
            )}

            {/* Dynamic Visual Model Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-1 my-auto flex flex-col justify-center w-full"
            >
              <SlideVisualizer
                slide={currentSlide}
                theme={theme}
                onStartPresentation={() => nextSlideAction()}
                onOpenNotes={() => setIsPresenterNotesOpen(true)}
                onJumpToSlide={(idx) => goToSlide(idx)}
                onOpenOverview={() => setIsOverviewOpen(true)}
              />
            </motion.div>

            {/* Bottom Strategic Takeaway (when available) */}
            {currentSlide.visualType !== 'hero' && currentSlide.strategicQuote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className={`mt-5 p-4 rounded-2xl border flex items-center justify-between flex-wrap gap-3 text-sm ${
                  isLight ? 'bg-white border-slate-200 text-slate-800 shadow-sm' : 'bg-black/50 border-slate-800 text-slate-200'
                }`}
              >
                <p className="italic font-serif leading-relaxed">
                  "{currentSlide.strategicQuote.text}"
                </p>
                <span className="text-xs font-mono text-cyan-500 font-bold">
                  — {currentSlide.strategicQuote.author}
                </span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* BOTTOM UNIFIED NAVIGATION DOCK */}
      <footer className={`relative z-20 px-4 sm:px-8 py-3 border-t backdrop-blur-md flex flex-col gap-2.5 transition-colors ${
        isLight ? 'bg-white/95 border-slate-200' : 'bg-[#07090e]/95 border-white/10'
      }`}>
        {/* Progress Bar */}
        <div className="w-full bg-slate-700/20 h-2 rounded-full overflow-hidden border border-slate-600/20">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_12px_#00f0ff]"
            animate={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>

        {/* Dock Controls */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Left: Navigation Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={prevSlideAction}
              disabled={currentSlideIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs sm:text-sm font-bold transition-all disabled:opacity-40 disabled:pointer-events-none ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-500/50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={nextSlideAction}
              disabled={currentSlideIndex === totalSlides - 1}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:pointer-events-none text-black text-xs sm:text-sm font-extrabold transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center: Slide Pills */}
          <div className="hidden lg:flex items-center gap-1.5">
            {SLIDES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex
                    ? 'w-8 bg-cyan-500 shadow-[0_0_10px_#00f0ff]'
                    : isLight
                      ? 'w-2 bg-slate-300 hover:bg-slate-400'
                      : 'w-2 bg-slate-800 hover:bg-slate-600'
                }`}
                title={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right: Quick Helpers */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span className="hidden sm:inline">
              Navegue com <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>← / →</strong> ou <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>Espaço</strong>
            </span>
            <button
              onClick={() => setShowKeyboardHelp(true)}
              className="p-1 hover:text-cyan-500 transition-colors"
              title="Ver todos os atalhos de teclado"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS & DRAWERS */}
      <AudioPlayerDrawer
        isOpen={isAudioDrawerOpen}
        onClose={() => setIsAudioDrawerOpen(false)}
      />

      <PresenterNotesModal
        isOpen={isPresenterNotesOpen}
        onClose={() => setIsPresenterNotesOpen(false)}
        slide={currentSlide}
        nextSlide={nextSlide}
        currentIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onSelectSlide={goToSlide}
      />

      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={SLIDES_DATA}
        currentIndex={currentSlideIndex}
        onSelectSlide={goToSlide}
      />

      {isPrintModeOpen && (
        <PrintSlidesView onClose={() => setIsPrintModeOpen(false)} />
      )}

      {showKeyboardHelp && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-2xl p-6 shadow-2xl border ${
            isLight ? 'bg-white border-slate-300 text-slate-800' : 'bg-[#090c14] border-cyan-500/40 text-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/20 mb-4">
              <h3 className="text-base font-bold">Atalhos da Apresentação</h3>
              <button
                onClick={() => setShowKeyboardHelp(false)}
                className="text-slate-400 hover:text-rose-500 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2.5 text-xs font-mono">
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Avançar Slide</span>
                <span className="text-cyan-500 font-bold">→ / Espaço / Enter</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Slide Anterior</span>
                <span className="text-cyan-500 font-bold">← / Backspace</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Modo Tela Cheia</span>
                <span className="text-cyan-500 font-bold">F</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Alternar Tema Claro / Escuro</span>
                <span className="text-cyan-500 font-bold">T</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Suíte de Música Clássica</span>
                <span className="text-cyan-500 font-bold">S</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Tocar / Pausar Música</span>
                <span className="text-cyan-500 font-bold">M</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Roteiro do Apresentador</span>
                <span className="text-cyan-400 font-bold">N</span>
              </div>
              <div className={`flex justify-between p-2 rounded border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span>Mosaico Geral de Slides</span>
                <span className="text-cyan-400 font-bold">G</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
