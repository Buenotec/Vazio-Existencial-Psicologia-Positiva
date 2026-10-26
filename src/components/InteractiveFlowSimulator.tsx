import React, { useState } from 'react';
import { Compass, Zap, AlertTriangle, Moon, CheckCircle2, Sliders } from 'lucide-react';

interface InteractiveFlowSimulatorProps {
  theme?: 'dark' | 'light';
}

export const InteractiveFlowSimulator: React.FC<InteractiveFlowSimulatorProps> = ({
  theme = 'dark',
}) => {
  const [challenge, setChallenge] = useState<number>(7);
  const [skill, setSkill] = useState<number>(8);
  const isLight = theme === 'light';

  const getState = (c: number, s: number) => {
    const diff = c - s;
    const avg = (c + s) / 2;

    if (Math.abs(diff) <= 2 && avg >= 6) {
      return {
        label: 'CANAL DO FLOW (Fluxo Ótimo)',
        status: 'flow',
        color: isLight ? 'text-cyan-700' : 'text-cyan-300',
        bg: isLight ? 'bg-cyan-50 border-cyan-300' : 'bg-cyan-500/15 border-cyan-500/40',
        desc: 'Absorção temporal completa, prazer intrínseco e desempenho de pico. Desafio complexo perfeitamente equalizado por alta competência técnica e noética.',
        strategicAction: 'Manter a cadência de complexidade crescente. O perigo futuro é a estagnação: conforme a habilidade atinge maestria, o desafio deve ser elevado para evitar a queda no tédio.',
        icon: Zap,
      };
    } else if (diff >= 3) {
      return {
        label: 'ZONA DE ANSIEDADE / ESTRESSE',
        status: 'anxiety',
        color: isLight ? 'text-rose-700' : 'text-rose-300',
        bg: isLight ? 'bg-rose-50 border-rose-300' : 'bg-rose-500/15 border-rose-500/40',
        desc: 'O desafio corporativo ou pessoal ultrapassa os recursos cognitivos e emocionais atuais. Gera sensação de vulnerabilidade e esgotamento.',
        strategicAction: 'Fracionar a meta em micro-entregas, buscar capacitação direcionada, delegar partes do escopo e fornecer suporte de mentoria estruturada.',
        icon: AlertTriangle,
      };
    } else if (diff <= -3 && s >= 6) {
      return {
        label: 'ZONA DE TÉDIO / SUBCAPACIDADE',
        status: 'boredom',
        color: isLight ? 'text-amber-800' : 'text-amber-300',
        bg: isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-500/15 border-amber-500/40',
        desc: 'Competência elevada operando em tarefas mecânicas ou subdimensionadas. Desperdiça potencial criativo e favorece a fuga mental para distrações.',
        strategicAction: 'Injetar autonomia decisória, atribuir projetos estratégicos de inovação ou convidar o profissional a atuar como mentor de novos líderes.',
        icon: Moon,
      };
    } else if (c <= 4 && s <= 4) {
      return {
        label: 'ZONA DE APATIA / DESENGAGAMENTO',
        status: 'apathy',
        color: isLight ? 'text-slate-700' : 'text-slate-300',
        bg: isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-800/40 border-slate-700/60',
        desc: 'Baixa exigência associada a baixa mobilização de talentos. O indivíduo opera no piloto automático mais puro, terreno fértil para o vácuo existencial.',
        strategicAction: 'Reconectar o indivíduo a propósitos noéticos, identificar forças de assinatura (VIA) e redefinir radicalmente os objetivos de carreira.',
        icon: Compass,
      };
    } else {
      return {
        label: 'ZONA DE EQUILÍBRIO MODERADO',
        status: 'moderate',
        color: isLight ? 'text-emerald-700' : 'text-emerald-300',
        bg: isLight ? 'bg-emerald-50 border-emerald-300' : 'bg-emerald-500/15 border-emerald-500/40',
        desc: 'Atividade confortável e controlada. Ausência de pânico, porém com potencial ainda latente para atingir patamares superiores de maestria.',
        strategicAction: 'Incentivar experimentação ousada sem medo de erros para transicionar ao Flow Pleno.',
        icon: CheckCircle2,
      };
    }
  };

  const currentState = getState(challenge, skill);
  const StateIcon = currentState.icon;

  const posX = (skill / 10) * 100;
  const posY = 100 - (challenge / 10) * 100;

  return (
    <div className={`w-full rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl transition-colors ${
      isLight ? 'bg-white/95 border border-slate-200 text-slate-800' : 'bg-[#0c0f17]/90 border border-cyan-500/30 text-white'
    }`}>
      <div className="flex items-center justify-between pb-5 border-b border-slate-700/30">
        <div className="flex items-center gap-3.5">
          <div className={`p-2.5 rounded-xl border ${
            isLight ? 'bg-cyan-100 text-cyan-700 border-cyan-200' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
          }`}>
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-wide">
              Simulador Interativo do Canal de Flow (Csikszentmihalyi)
            </h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Mapeie o ponto de equilíbrio dinâmico entre Nível de Desafio e Grau de Habilidade
            </p>
          </div>
        </div>
        <span className={`hidden sm:inline-flex px-3 py-1 text-xs font-mono font-bold rounded-full ${
          isLight ? 'bg-cyan-100 text-cyan-800 border border-cyan-300' : 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
        }`}>
          DIAGNÓSTICO ESTRATÉGICO
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
        {/* Interactive 2D Graph Visualizer */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className={`relative w-full aspect-square max-w-[380px] rounded-2xl overflow-hidden p-4 shadow-inner border ${
            isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#07090e] border-slate-700/60'
          }`}>
            {/* Background Zones */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30" />

            {/* Diagonal Flow Corridor */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-emerald-500/20 to-purple-500/15 pointer-events-none"
              style={{
                clipPath: 'polygon(15% 100%, 0% 85%, 85% 0%, 100% 15%)',
              }}
            />
            {/* Center Flow Axis Line */}
            <div className="absolute w-[141%] h-[1.5px] bg-cyan-400/50 rotate-45 origin-bottom-left bottom-0 left-0" />

            {/* Quadrant Labels */}
            <div className="absolute top-4 left-4 text-xs font-mono font-bold text-rose-500 bg-rose-950/20 px-2 py-1 rounded border border-rose-500/40">
              ANSIEDADE
            </div>
            <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400 font-bold bg-cyan-950/70 px-2.5 py-1 rounded border border-cyan-500/50 shadow-md">
              ★ FLOW CHANNEL
            </div>
            <div className="absolute bottom-4 left-4 text-xs font-mono text-slate-500 bg-slate-900/40 px-2 py-1 rounded border border-slate-700/40">
              APATIA
            </div>
            <div className="absolute bottom-4 right-4 text-xs font-mono font-bold text-amber-500 bg-amber-950/20 px-2 py-1 rounded border border-amber-500/40">
              TÉDIO
            </div>

            {/* Interactive Dynamic Marker */}
            <div
              className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_20px_#00f0ff] transition-all duration-300 pointer-events-none flex items-center justify-center"
              style={{
                left: `${Math.min(95, Math.max(5, posX))}%`,
                top: `${Math.min(95, Math.max(5, posY))}%`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>

            {/* Coordinate Lines */}
            <div
              className="absolute left-0 right-0 border-t border-dashed border-cyan-500/30 pointer-events-none"
              style={{ top: `${Math.min(95, Math.max(5, posY))}%` }}
            />
            <div
              className="absolute top-0 bottom-0 border-l border-dashed border-cyan-500/30 pointer-events-none"
              style={{ left: `${Math.min(95, Math.max(5, posX))}%` }}
            />
          </div>

          <div className="flex justify-between w-full max-w-[380px] text-xs font-mono font-semibold mt-3 px-2 text-slate-500">
            <span>Eixo X: Habilidade ({skill}/10)</span>
            <span>Eixo Y: Desafio ({challenge}/10)</span>
          </div>
        </div>

        {/* Sliders & Diagnostic Output */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="flex items-center gap-2 text-rose-500 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  Nível de Desafio / Complexidade:
                </span>
                <span className={`font-mono font-bold px-2.5 py-1 rounded border ${
                  isLight ? 'bg-rose-100 text-rose-800 border-rose-300' : 'bg-rose-950 text-rose-300 border-rose-800'
                }`}>
                  {challenge} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={challenge}
                onChange={(e) => setChallenge(Number(e.target.value))}
                className="w-full accent-rose-500 h-2.5 rounded-lg cursor-pointer bg-slate-700/50"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="flex items-center gap-2 text-emerald-500 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  Nível de Habilidade / Competência:
                </span>
                <span className={`font-mono font-bold px-2.5 py-1 rounded border ${
                  isLight ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                }`}>
                  {skill} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={skill}
                onChange={(e) => setSkill(Number(e.target.value))}
                className="w-full accent-emerald-500 h-2.5 rounded-lg cursor-pointer bg-slate-700/50"
              />
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <button
              onClick={() => { setChallenge(8); setSkill(8); }}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                isLight ? 'bg-cyan-50 border-cyan-300 text-cyan-800 hover:bg-cyan-100' : 'bg-cyan-950/70 border-cyan-700/60 text-cyan-300 hover:bg-cyan-900'
              }`}
            >
              Exemplo: Flow Pleno (8x8)
            </button>
            <button
              onClick={() => { setChallenge(9); setSkill(3); }}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                isLight ? 'bg-rose-50 border-rose-300 text-rose-800 hover:bg-rose-100' : 'bg-rose-950/70 border-rose-700/60 text-rose-300 hover:bg-rose-900'
              }`}
            >
              Sobrecarga/Ansiedade (9x3)
            </button>
            <button
              onClick={() => { setChallenge(2); setSkill(9); }}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100' : 'bg-amber-950/70 border-amber-700/60 text-amber-300 hover:bg-amber-900'
              }`}
            >
              Tédio Corporativo (2x9)
            </button>
          </div>

          {/* Diagnostic Card */}
          <div className={`p-5 rounded-2xl border ${currentState.bg} transition-all duration-300 shadow-sm`}>
            <div className="flex items-center gap-2.5 mb-2.5">
              <StateIcon className={`w-6 h-6 ${currentState.color}`} />
              <h5 className={`text-base font-bold tracking-wide ${currentState.color}`}>
                {currentState.label}
              </h5>
            </div>
            <p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {currentState.desc}
            </p>
            <div className="pt-3 border-t border-slate-700/20 text-sm">
              <strong className={isLight ? 'text-slate-900' : 'text-white'}>Recomendação Estratégica: </strong>
              <span className={isLight ? 'text-slate-600' : 'text-slate-300'}>{currentState.strategicAction}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
