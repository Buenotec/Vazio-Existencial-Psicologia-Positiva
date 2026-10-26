import React, { useState, useEffect } from 'react';
import { classicalAudio, CLASSICAL_TRACKS, ClassicalTrack } from '../utils/classicalAudio';
import {
  Music,
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  X,
  Radio,
  Sparkles,
  Sliders
} from 'lucide-react';

interface AudioPlayerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onTrackChange?: () => void;
}

export const AudioPlayerDrawer: React.FC<AudioPlayerDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(classicalAudio.getIsPlaying());
  const [currentTrack, setCurrentTrack] = useState<ClassicalTrack>(classicalAudio.getCurrentTrack());
  const [volume, setVolume] = useState<number>(classicalAudio.getVolume());

  useEffect(() => {
    classicalAudio.onStateChange = (playing, trackId) => {
      setIsPlaying(playing);
      const t = CLASSICAL_TRACKS.find((tr) => tr.id === trackId);
      if (t) setCurrentTrack(t);
    };
  }, []);

  if (!isOpen) return null;

  const handleTogglePlay = () => {
    classicalAudio.togglePlay();
    setIsPlaying(classicalAudio.getIsPlaying());
  };

  const handleSelectTrack = (track: ClassicalTrack) => {
    classicalAudio.play(track.id);
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    classicalAudio.setVolume(newVol);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#0a0d16] border border-cyan-500/40 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                Suíte Instrumental & Clássica
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  WEB AUDIO PROCEDURAL
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Músicas clássicas sintetizadas em tempo real para foco executivo e autoridade reflexiva
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Track Banner */}
        <div className="p-5 bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-purple-950/30 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200">
                {currentTrack.period}
              </span>
              <span className="text-xs font-mono text-cyan-300">
                {currentTrack.composer}
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">{currentTrack.title}</h4>
            <p className="text-xs text-slate-300 italic">{currentTrack.mood}</p>
          </div>

          {/* Equalizer animation when playing */}
          <div className="flex items-end gap-1 h-8 px-3 py-1 bg-black/40 rounded-lg border border-slate-800">
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className={`w-1 rounded-full bg-cyan-400 transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : 'h-1.5 opacity-30'
                }`}
                style={{
                  height: isPlaying ? `${(bar * 23) % 28 + 6}px` : '4px',
                  animationDelay: `${bar * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Player Controls */}
        <div className="p-4 bg-slate-900/40 border-b border-slate-800 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={handleTogglePlay}
              className="p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2 text-xs"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Pausar Áudio' : 'Tocar Agora'}</span>
            </button>

            <button
              onClick={() => {
                const nextIdx = (CLASSICAL_TRACKS.findIndex((t) => t.id === currentTrack.id) + 1) % CLASSICAL_TRACKS.length;
                handleSelectTrack(CLASSICAL_TRACKS[nextIdx]);
              }}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 text-xs transition-colors"
              title="Próxima Faixa Clássica"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-2.5 min-w-[200px]">
            <button
              onClick={() => handleVolumeChange(volume > 0 ? 0 : 0.45)}
              className="text-slate-400 hover:text-cyan-300"
            >
              {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-xs font-mono text-slate-400 w-8 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>

        {/* Track List */}
        <div className="p-4 max-h-[300px] overflow-y-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
            Repertório Instrumental Disponível
          </span>
          {CLASSICAL_TRACKS.map((track) => {
            const isSelected = track.id === currentTrack.id;
            return (
              <div
                key={track.id}
                onClick={() => handleSelectTrack(track)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-cyan-950/40 border-cyan-400 neon-glow-cyan text-white'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">{track.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">({track.composer})</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-1">
                    {track.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-slate-400 border border-slate-800">
                    {track.tempoBpm} BPM
                  </span>
                  {isSelected && isPlaying && (
                    <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
