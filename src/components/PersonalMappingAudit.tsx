import React, { useState } from 'react';
import { Target, CheckSquare, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';

interface AuditItem {
  id: string;
  category: 'Valores' | 'Forças' | 'Engajamento' | 'Autotranscendência';
  question: string;
  weight: number;
}

const AUDIT_QUESTIONS: AuditItem[] = [
  {
    id: 'q1',
    category: 'Valores',
    question: 'Minha agenda semanal reflete com precisão os 3 valores que declaro como mais importantes?',
    weight: 25,
  },
  {
    id: 'q2',
    category: 'Forças',
    question: 'Utilizo deliberadamente minhas principais forças de assinatura (VIA) nas atividades que exerço?',
    weight: 25,
  },
  {
    id: 'q3',
    category: 'Engajamento',
    question: 'Experimento momentos regulares de foco imersivo (Flow) em vez de apenas cumprir obrigações mecânicas?',
    weight: 25,
  },
  {
    id: 'q4',
    category: 'Autotranscendência',
    question: 'Consigo identificar com clareza quem ou qual causa é positivamente beneficiada pelo meu trabalho diário?',
    weight: 25,
  },
];

interface PersonalMappingAuditProps {
  theme?: 'dark' | 'light';
}

export const PersonalMappingAudit: React.FC<PersonalMappingAuditProps> = ({
  theme = 'dark',
}) => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({
    q1: true,
    q2: true,
    q3: false,
    q4: true,
  });

  const isLight = theme === 'light';

  const toggleAnswer = (id: string) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const score = AUDIT_QUESTIONS.reduce((acc, q) => (answers[q.id] ? acc + q.weight : acc), 0);

  const getScoreProfile = (s: number) => {
    if (s === 100) {
      return {
        badge: 'ALINHAMENTO EXISTENCIAL PLENO (100%)',
        color: isLight ? 'text-emerald-700' : 'text-emerald-400',
        border: isLight ? 'border-emerald-300 bg-emerald-50' : 'border-emerald-500/40 bg-emerald-500/10',
        text: 'Alta coerência noética. As escolhas práticas estão em perfeita harmonia com os valores essenciais e o impacto comunitário.',
      };
    } else if (s >= 75) {
      return {
        badge: 'ALTO ALINHAMENTO COM GAPS PONTUAIS (75%)',
        color: isLight ? 'text-cyan-700' : 'text-cyan-400',
        border: isLight ? 'border-cyan-300 bg-cyan-50' : 'border-cyan-500/40 bg-cyan-500/10',
        text: 'Fundamentos sólidos de sentido. Identifique o pilar não assinalado para eliminar ruídos de rotina ou realocar energia.',
      };
    } else if (s >= 50) {
      return {
        badge: 'ALERTA DE DESALINHAMENTO MODERADO (50%)',
        color: isLight ? 'text-amber-700' : 'text-amber-400',
        border: isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/40 bg-amber-500/10',
        text: 'Sinal de vida operando parcialmente no piloto automático. Risco de frustração da vontade de sentido se não houver correção.',
      };
    } else {
      return {
        badge: 'VÁCUO EXISTENCIAL CRÍTICO (< 50%)',
        color: isLight ? 'text-rose-700' : 'text-rose-400',
        border: isLight ? 'border-rose-300 bg-rose-50' : 'border-rose-500/40 bg-rose-500/10',
        text: 'Desconexão significativa entre o que se valoriza e o que se pratica diariamente. Urgência de pausar para um mapeamento noético.',
      };
    }
  };

  const profile = getScoreProfile(score);

  return (
    <div className={`w-full rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl transition-colors ${
      isLight ? 'bg-white/95 border border-slate-200 text-slate-800' : 'bg-[#0c0f17]/90 border border-purple-500/30 text-white'
    }`}>
      <div className="flex items-center justify-between pb-5 border-b border-slate-700/30">
        <div className="flex items-center gap-3.5">
          <div className={`p-2.5 rounded-xl border ${
            isLight ? 'bg-purple-100 text-purple-700 border-purple-200' : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
          }`}>
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-wide">
              Matriz Prática de Mapeamento Pessoal & Auditoria de Coerência
            </h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Checklist estratégico fundamentado no Capítulo 7 para identificar gaps entre a vida real e a desejada
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className={`text-xs font-mono font-bold ${isLight ? 'text-purple-700' : 'text-purple-300'}`}>
            AUTO-AUDITORIA NOÉTICA
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Checklist with large text */}
        <div className="lg:col-span-7 space-y-3.5">
          {AUDIT_QUESTIONS.map((item) => {
            const isChecked = !!answers[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleAnswer(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isChecked
                    ? isLight
                      ? 'bg-purple-50 border-purple-400 text-purple-950 shadow-sm'
                      : 'bg-purple-950/40 border-purple-500/50 hover:border-purple-400 text-white'
                    : isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-600'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className={`mt-0.5 rounded ${isChecked ? 'text-purple-500' : 'text-slate-400'}`}>
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border ${
                      isLight ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-purple-950 text-purple-300 border-purple-800'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      Peso: +25%
                    </span>
                  </div>
                  <p className={`text-sm md:text-base leading-relaxed ${isChecked ? 'font-semibold' : ''}`}>
                    {item.question}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Score & Diagnostic Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div className={`border rounded-2xl p-6 text-center ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#07090e] border-slate-800'
          }`}>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Índice de Coerência Existencial
            </span>
            <div className="text-5xl font-extrabold font-mono mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {score}%
            </div>

            {/* Bar Indicator */}
            <div className="w-full bg-slate-700/30 h-3 rounded-full mt-4 overflow-hidden border border-slate-600/30">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          <div className={`p-5 rounded-2xl border ${profile.border}`}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className={`w-5 h-5 ${profile.color}`} />
              <span className={`text-sm font-bold tracking-wide ${profile.color}`}>
                {profile.badge}
              </span>
            </div>
            <p className={`text-sm leading-relaxed mb-3 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {profile.text}
            </p>
            <div className="text-xs text-slate-500 border-t border-slate-700/20 pt-3 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                "O autoconhecimento não deve ser compreendido como uma busca interminável por uma versão perfeita de si mesmo. Trata-se de um processo contínuo de rever escolhas quando necessário." (Texto base, Cap. 7)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
