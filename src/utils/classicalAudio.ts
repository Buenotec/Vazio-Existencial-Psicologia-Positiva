// Procedural Classical & Instrumental Web Audio Synthesizer
// Provides realistic classical piano, string ensembles, and ambient classical motifs

export interface ClassicalTrack {
  id: string;
  title: string;
  composer: string;
  period: string;
  mood: string;
  tempoBpm: number;
  description: string;
}

export const CLASSICAL_TRACKS: ClassicalTrack[] = [
  {
    id: 'satie-gymnopedie',
    title: 'Gymnopédie No. 1',
    composer: 'Erik Satie',
    period: 'Impressionismo / Neoclássico',
    mood: 'Contemplativo & Melancólico',
    tempoBpm: 68,
    description: 'Harmonias etéreas em 3/4 com acordes suspensos que induzem reflexão noética profunda e desaceleração do estresse.',
  },
  {
    id: 'bach-prelude',
    title: 'Prelúdio em Dó Maior (BWV 846)',
    composer: 'Johann Sebastian Bach',
    period: 'Barroco Clássico',
    mood: 'Ordem, Clareza & Foco',
    tempoBpm: 84,
    description: 'Arpejos contínuos de precisão matemática que estimulam clareza cognitiva, ritmo de leitura e foco prolongado.',
  },
  {
    id: 'debussy-clair',
    title: 'Clair de Lune',
    composer: 'Claude Debussy',
    period: 'Impressionismo Francês',
    mood: 'Serenidade & Poesia',
    tempoBpm: 56,
    description: 'Frases sonoras fluidas e acordes aveludados inspirados na luz da lua, perfeitos para a digestão de conceitos existenciais.',
  },
  {
    id: 'cinematic-strings',
    title: 'Adagio Noético para Violoncelo & Cordas',
    composer: 'Arranjo Instrumental Contemporâneo',
    period: 'Música Neoclássica de Concerto',
    mood: 'Solene, Nobre & Inspirador',
    tempoBpm: 60,
    description: 'Camadas aveludadas de violoncelos e violinos em acordes solenes que evocam a superação dos desafios e a nobreza humana.',
  },
  {
    id: 'chopin-nocturne',
    title: 'Noturno em Mi Bemol (Op. 9 No. 2)',
    composer: 'Frédéric Chopin',
    period: 'Romantismo Clássico',
    mood: 'Sensibilidade & Elegância',
    tempoBpm: 64,
    description: 'Acompanhamento suave em compasso composto com melodia lírica que equilibra o rigor acadêmico com a inteligência emocional.',
  },
];

// Music Note frequencies (Hz)
const NOTES: Record<string, number> = {
  C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98.0, A2: 110.0, B2: 123.47,
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
  C4: 261.63, 'C#4': 277.18, D4: 293.66, 'D#4': 311.13, E4: 329.63, F4: 349.23, 'F#4': 369.99, G4: 392.0, 'G#4': 415.3, A4: 440.0, 'A#4': 466.16, B4: 493.88,
  C5: 523.25, 'C#5': 554.37, D5: 587.33, 'D#5': 622.25, E5: 659.25, F5: 698.46, 'F#5': 739.99, G5: 783.99, 'G#5': 830.61, A5: 880.0, 'A#5': 932.33, B5: 987.77,
  C6: 1046.5, D6: 1174.66, E6: 1318.51,
};

class ClassicalAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private currentTrackId: string = 'satie-gymnopedie';
  private loopTimeoutId: number | null = null;
  private volume: number = 0.45;
  private activeVoices: { osc: OscillatorNode; gain: GainNode }[] = [];
  public onStateChange?: (isPlaying: boolean, trackId: string) => void;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getCurrentTrack(): ClassicalTrack {
    return CLASSICAL_TRACKS.find((t) => t.id === this.currentTrackId) || CLASSICAL_TRACKS[0];
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Synthesize acoustic piano timbre (multiple harmonics + percussive attack + body resonance)
  private playPianoNote(noteFreq: number, time: number, duration: number, velocity: number = 0.5) {
    if (!this.ctx || !this.masterGain) return;

    // Fundamental & Harmonics
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const osc3 = this.ctx.createOscillator();

    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm wooden filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(noteFreq * 4, time);
    filter.frequency.exponentialRampToValueAtTime(Math.max(noteFreq * 1.5, 200), time + duration);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(noteFreq, time);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(noteFreq * 2, time);

    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(noteFreq * 3, time);

    const amp = velocity * 0.15;
    // Piano Attack & Decay Envelope
    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.linearRampToValueAtTime(amp, time + 0.015); // Fast hammer strike
    noteGain.gain.exponentialRampToValueAtTime(amp * 0.65, time + 0.15); // Initial drop
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration); // Natural resonance decay

    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc3.start(time);

    osc1.stop(time + duration);
    osc2.stop(time + duration);
    osc3.stop(time + duration);
  }

  // Synthesize bowed strings (warm saw + slow attack + vibrato)
  private playStringChord(freqs: number[], time: number, duration: number, velocity: number = 0.3) {
    if (!this.ctx || !this.masterGain) return;

    freqs.forEach((freq) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Subtle slow vibrato LFO
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(4.8, time);
      lfoGain.gain.setValueAtTime(1.5, time);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(time);
      lfo.stop(time + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(Math.min(freq * 3, 1400), time);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, time);

      const amp = velocity * 0.06;
      // Bowed string attack envelope
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(amp, time + 0.8);
      gain.gain.setValueAtTime(amp, time + duration - 0.9);
      gain.gain.linearRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + duration);
    });
  }

  // Schedule composition patterns
  private scheduleTrack(trackId: string) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime + 0.05;

    let loopDuration = 16; // default seconds

    if (trackId === 'satie-gymnopedie') {
      // Satie Gymnopedie No. 1 progression (Gmaj7 -> Dmaj7 -> Gmaj7 -> Dmaj7)
      loopDuration = 18;
      const beat = 1.0;

      // Bar 1: G bass + Bm chord
      this.playPianoNote(NOTES.G2, now + 0 * beat, 3.2, 0.7);
      this.playPianoNote(NOTES.B3, now + 1 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES.D4, now + 1 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES['F#4'], now + 1 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES.B3, now + 2 * beat, 1.8, 0.35);
      this.playPianoNote(NOTES.D4, now + 2 * beat, 1.8, 0.35);
      this.playPianoNote(NOTES['F#4'], now + 2 * beat, 1.8, 0.35);

      // Melody phrase 1
      this.playPianoNote(NOTES['F#5'], now + 0.5 * beat, 3.5, 0.65);
      this.playPianoNote(NOTES.E5, now + 3.0 * beat, 2.0, 0.6);

      // Bar 2: D bass + F#m chord
      this.playPianoNote(NOTES.D2, now + 3 * beat, 3.2, 0.7);
      this.playPianoNote(NOTES.A3, now + 4 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES['C#4'], now + 4 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES['F#4'], now + 4 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES.A3, now + 5 * beat, 1.8, 0.35);
      this.playPianoNote(NOTES['C#4'], now + 5 * beat, 1.8, 0.35);
      this.playPianoNote(NOTES['F#4'], now + 5 * beat, 1.8, 0.35);

      // Bar 3: G bass + Bm chord
      this.playPianoNote(NOTES.G2, now + 6 * beat, 3.2, 0.7);
      this.playPianoNote(NOTES.B3, now + 7 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES.D4, now + 7 * beat, 2.0, 0.4);
      this.playPianoNote(NOTES['F#4'], now + 7 * beat, 2.0, 0.4);

      // Melody phrase 2
      this.playPianoNote(NOTES.D5, now + 6.0 * beat, 3.0, 0.6);
      this.playPianoNote(NOTES['C#5'], now + 9.0 * beat, 3.0, 0.6);
      this.playPianoNote(NOTES.B4, now + 11.5 * beat, 3.5, 0.55);

      // Bar 4: D bass
      this.playPianoNote(NOTES.D2, now + 9 * beat, 3.5, 0.65);
      this.playPianoNote(NOTES.A3, now + 10 * beat, 2.2, 0.4);
      this.playPianoNote(NOTES['C#4'], now + 10 * beat, 2.2, 0.4);
      this.playPianoNote(NOTES['F#4'], now + 10 * beat, 2.2, 0.4);

      // Soft resolve
      this.playPianoNote(NOTES.A4, now + 14 * beat, 3.8, 0.5);

    } else if (trackId === 'bach-prelude') {
      // Bach Prelude in C Major arpeggios
      loopDuration = 14;
      const step = 0.22;

      const chords = [
        [NOTES.C3, NOTES.E3, NOTES.G3, NOTES.C4, NOTES.E4], // C
        [NOTES.C3, NOTES.D3, NOTES.A3, NOTES.D4, NOTES['F#4']], // D7/C
        [NOTES.B2, NOTES.D3, NOTES.G3, NOTES.D4, NOTES.F4], // G7/B
        [NOTES.C3, NOTES.E3, NOTES.G3, NOTES.C4, NOTES.E4], // C
        [NOTES.C3, NOTES.E3, NOTES.A3, NOTES.E4, NOTES.A4], // Am
      ];

      let t = 0;
      chords.forEach((c) => {
        // Pattern: [0, 1, 2, 3, 4, 2, 3, 4] repeated twice per chord
        for (let rep = 0; rep < 2; rep++) {
          const pattern = [c[0], c[1], c[2], c[3], c[4], c[2], c[3], c[4]];
          pattern.forEach((freq, idx) => {
            const vel = idx === 0 ? 0.7 : idx === 4 ? 0.55 : 0.4;
            this.playPianoNote(freq, now + t, 0.55, vel);
            t += step;
          });
        }
      });

    } else if (trackId === 'debussy-clair') {
      // Impressionist gentle chords
      loopDuration = 16;
      const b = 0.9;
      // Shimmering Db Major / Ab chords
      this.playPianoNote(NOTES.F4, now + 0 * b, 3.0, 0.5);
      this.playPianoNote(NOTES['G#4'], now + 0.3 * b, 3.0, 0.5);
      this.playPianoNote(NOTES.C5, now + 0.6 * b, 3.2, 0.55);
      this.playPianoNote(NOTES['D#5'], now + 1.2 * b, 3.0, 0.6);

      this.playPianoNote(NOTES['C#3'], now + 2.5 * b, 4.0, 0.6);
      this.playPianoNote(NOTES['G#3'], now + 3.2 * b, 3.0, 0.4);
      this.playPianoNote(NOTES.F4, now + 4.0 * b, 2.5, 0.45);

      this.playPianoNote(NOTES.C5, now + 6.0 * b, 3.0, 0.55);
      this.playPianoNote(NOTES['A#4'], now + 7.5 * b, 2.5, 0.5);
      this.playPianoNote(NOTES['G#4'], now + 9.0 * b, 3.5, 0.6);

      this.playPianoNote(NOTES['D#3'], now + 9.5 * b, 4.0, 0.6);
      this.playPianoNote(NOTES.F4, now + 11.5 * b, 3.0, 0.45);
      this.playPianoNote(NOTES.C5, now + 13.0 * b, 3.0, 0.5);

    } else if (trackId === 'cinematic-strings') {
      // Sustained strings chord progression
      loopDuration = 16;
      const duration = 4.0;

      // Chord 1: D Minor (D2, A2, D3, F3, A3)
      this.playStringChord([NOTES.D2, NOTES.A2, NOTES.F3, NOTES.A3], now + 0, duration + 0.5, 0.45);

      // Chord 2: Bb Major (Bb1, F2, D3, F3, Bb3)
      this.playStringChord([NOTES['A#2'], NOTES.F3, NOTES.D4, NOTES.F4], now + 4, duration + 0.5, 0.5);

      // Chord 3: F Major (F2, C3, A3, C4)
      this.playStringChord([NOTES.F2, NOTES.C3, NOTES.A3, NOTES.C4], now + 8, duration + 0.5, 0.5);

      // Chord 4: C Major / A Minor resolve (A2, E3, G3, C4)
      this.playStringChord([NOTES.A2, NOTES.E3, NOTES.G3, NOTES.C4], now + 12, duration + 0.5, 0.45);

    } else if (trackId === 'chopin-nocturne') {
      // Chopin Nocturne Op 9 No 2 rhythm
      loopDuration = 15;
      const beat = 0.5;

      // Bass note on 1, chords on 2 & 3
      const measures = [
        { bass: NOTES['D#3'], chord: [NOTES.G3, NOTES['A#3'], NOTES['D#4']] },
        { bass: NOTES.C3, chord: [NOTES['D#3'], NOTES.G3, NOTES.C4] },
        { bass: NOTES.F3, chord: [NOTES['G#3'], NOTES.C4, NOTES.F4] },
        { bass: NOTES['A#2'], chord: [NOTES.F3, NOTES['G#3'], NOTES.D4] },
      ];

      let t = 0;
      measures.forEach((m, mIdx) => {
        this.playPianoNote(m.bass, now + t, 2.5, 0.65);
        this.playPianoNote(m.chord[0], now + t + beat, 1.2, 0.35);
        this.playPianoNote(m.chord[1], now + t + beat, 1.2, 0.35);
        this.playPianoNote(m.chord[2], now + t + beat, 1.2, 0.35);

        this.playPianoNote(m.chord[0], now + t + 2 * beat, 1.2, 0.35);
        this.playPianoNote(m.chord[1], now + t + 2 * beat, 1.2, 0.35);
        this.playPianoNote(m.chord[2], now + t + 2 * beat, 1.2, 0.35);

        // Melody flourishes
        if (mIdx === 0) {
          this.playPianoNote(NOTES['A#4'], now + t + 0.5 * beat, 2.0, 0.6);
          this.playPianoNote(NOTES.G5, now + t + 2.5 * beat, 1.5, 0.55);
        } else if (mIdx === 1) {
          this.playPianoNote(NOTES.F5, now + t + 1.0 * beat, 2.0, 0.55);
        } else if (mIdx === 2) {
          this.playPianoNote(NOTES['D#5'], now + t + 0.5 * beat, 2.0, 0.6);
        }

        t += 3 * beat;
      });
    }

    // Schedule next cycle seamlessly
    this.loopTimeoutId = window.setTimeout(() => {
      if (this.isPlaying) {
        this.scheduleTrack(this.currentTrackId);
      }
    }, (loopDuration - 0.25) * 1000);
  }

  public play(trackId?: string) {
    this.init();
    if (trackId) {
      this.currentTrackId = trackId;
    }
    this.stopCurrentLoop();
    this.isPlaying = true;
    this.scheduleTrack(this.currentTrackId);
    this.onStateChange?.(true, this.currentTrackId);
  }

  public pause() {
    this.stopCurrentLoop();
    this.isPlaying = false;
    this.onStateChange?.(false, this.currentTrackId);
  }

  public togglePlay(trackId?: string) {
    if (this.isPlaying) {
      if (trackId && trackId !== this.currentTrackId) {
        this.play(trackId);
      } else {
        this.pause();
      }
    } else {
      this.play(trackId || this.currentTrackId);
    }
  }

  private stopCurrentLoop() {
    if (this.loopTimeoutId !== null) {
      clearTimeout(this.loopTimeoutId);
      this.loopTimeoutId = null;
    }
  }

  // Classical Sound FX for transitions
  public playClassicalKey(type: 'gentle' | 'chime' | 'harp' = 'gentle') {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      if (type === 'gentle') {
        // Delicate high piano chord (C5 + G5)
        this.playPianoNote(523.25, now, 0.8, 0.3);
        this.playPianoNote(783.99, now + 0.04, 0.9, 0.25);
      } else if (type === 'harp') {
        // Fast harp sweep
        [440, 554.37, 659.25, 880, 1108.7].forEach((f, i) => {
          this.playPianoNote(f, now + i * 0.035, 0.6, 0.35);
        });
      } else {
        // Crystal bell
        this.playPianoNote(1046.5, now, 1.2, 0.4);
      }
    } catch {
      // ignore
    }
  }
}

export const classicalAudio = new ClassicalAudioEngine();
