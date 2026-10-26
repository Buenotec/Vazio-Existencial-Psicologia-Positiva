import React from 'react';

// Pristine vector illustrations and diagrams with responsive high-legibility typography & dual theme support

export const NoeticCubeArtwork: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = '',
  isLight = false,
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 460 340" className="w-full h-auto drop-shadow-[0_0_25px_rgba(0,240,255,0.35)]">
      <defs>
        <linearGradient id="cyanNeon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="purpleNeon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#a855f7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background ambient circular grid */}
      <circle cx="230" cy="160" r="125" fill="none" stroke={isLight ? '#cbd5e1' : '#1e293b'} strokeWidth="1.5" strokeDasharray="5 7" />
      <circle cx="230" cy="160" r="90" fill="none" stroke={isLight ? '#94a3b8' : '#334155'} strokeWidth="1.5" />
      <circle cx="230" cy="160" r="55" fill="url(#coreGlow)" />

      {/* Concentric Noetic Orbit Rings */}
      <ellipse cx="230" cy="160" rx="145" ry="50" fill="none" stroke="#00f0ff" strokeWidth="2.2" filter="url(#glow)" transform="rotate(-25 230 160)" />
      <ellipse cx="230" cy="160" rx="125" ry="45" fill="none" stroke="#a855f7" strokeWidth="2.0" filter="url(#glow)" transform="rotate(35 230 160)" />
      <ellipse cx="230" cy="160" rx="100" ry="36" fill="none" stroke="#10b981" strokeWidth="1.8" filter="url(#glow)" transform="rotate(-65 230 160)" />

      {/* Central Core (The Noetic Dimension / Self) */}
      <polygon points="230,110 275,160 230,210 185,160" fill="url(#cyanNeon)" stroke="#00f0ff" strokeWidth="2.5" filter="url(#glow)" />
      <circle cx="230" cy="160" r="10" fill="#ffffff" filter="url(#glow)" />

      {/* Orbiting particles */}
      <circle cx="115" cy="125" r="5" fill="#00f0ff" filter="url(#glow)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="345" cy="195" r="5" fill="#a855f7" filter="url(#glow)">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="265" cy="85" r="4.5" fill="#10b981" filter="url(#glow)" />
      <circle cx="195" cy="235" r="4.5" fill="#f59e0b" filter="url(#glow)" />

      {/* High-legibility Annotations */}
      <text
        x="230"
        y="305"
        textAnchor="middle"
        fill={isLight ? '#0f172a' : '#f1f5f9'}
        fontSize="14"
        fontWeight="bold"
        fontFamily="Space Grotesk, sans-serif"
        letterSpacing="2"
      >
        NÚCLEO NOÉTICO • LIVRE-ARBÍTRIO & SENTIDO
      </text>
      <text
        x="230"
        y="325"
        textAnchor="middle"
        fill={isLight ? '#475569' : '#94a3b8'}
        fontSize="12"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        A dimensão especificamente humana que transcende o corpo e os condicionamentos
      </text>
    </svg>
  </div>
);

export const VoidParadoxArtwork: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = '',
  isLight = false,
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 460 280" className="w-full h-auto drop-shadow-[0_0_20px_rgba(244,63,94,0.25)]">
      <defs>
        <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#881337" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Left side: Hyper-connection network */}
      <g>
        <circle cx="85" cy="75" r="22" fill={isLight ? '#e0f2fe' : '#0f172a'} stroke="#0284c7" strokeWidth="2" />
        <circle cx="155" cy="55" r="18" fill={isLight ? '#e0f2fe' : '#0f172a'} stroke="#0284c7" strokeWidth="1.5" />
        <circle cx="140" cy="125" r="20" fill={isLight ? '#f3e8ff' : '#0f172a'} stroke="#9333ea" strokeWidth="2" />
        <circle cx="75" cy="155" r="18" fill={isLight ? '#e0f2fe' : '#0f172a'} stroke="#0284c7" strokeWidth="1.5" />
        <line x1="85" y1="75" x2="155" y2="55" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="85" y1="75" x2="140" y2="125" stroke="#0284c7" strokeWidth="1.8" />
        <line x1="75" y1="155" x2="140" y2="125" stroke="#9333ea" strokeWidth="1.8" />
        <text
          x="110"
          y="215"
          textAnchor="middle"
          fill={isLight ? '#0369a1' : '#38bdf8'}
          fontSize="14"
          fontWeight="bold"
          fontFamily="JetBrains Mono, monospace"
        >
          EXCESSO DE DADOS
        </text>
        <text
          x="110"
          y="235"
          textAnchor="middle"
          fill={isLight ? '#64748b' : '#94a3b8'}
          fontSize="12"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          Hiperconexão externa
        </text>
      </g>

      {/* Center divider: The existential gap */}
      <line x1="230" y1="25" x2="230" y2="200" stroke={isLight ? '#94a3b8' : '#334155'} strokeWidth="2" strokeDasharray="6 6" />

      {/* Right side: The Inner Void */}
      <g>
        <circle cx="335" cy="110" r="62" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeDasharray="5 5" />
        <circle cx="335" cy="110" r="46" fill={isLight ? '#ffe4e6' : '#090d16'} stroke="#f43f5e" strokeWidth="2.2" />
        <circle cx="335" cy="110" r="20" fill="url(#redGlow)" />
        <text
          x="335" y="115"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="13"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="bold"
        >
          VÁCUO
        </text>
        <text
          x="335"
          y="215"
          textAnchor="middle"
          fill="#e11d48"
          fontSize="14"
          fontWeight="bold"
          fontFamily="JetBrains Mono, monospace"
        >
          FALTA DE SENTIDO
        </text>
        <text
          x="335"
          y="235"
          textAnchor="middle"
          fill={isLight ? '#64748b' : '#94a3b8'}
          fontSize="12"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          Vontade frustrada
        </text>
      </g>

      {/* Bottom explanation */}
      <text
        x="230"
        y="268"
        textAnchor="middle"
        fill={isLight ? '#1e293b' : '#e2e8f0'}
        fontSize="13"
        fontWeight="600"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        O abismo entre os dados externos e a interioridade noética
      </text>
    </svg>
  </div>
);

export const FranklTriadArtwork: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = '',
  isLight = false,
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 420 290" className="w-full h-auto drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">
      <defs>
        <linearGradient id="triadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#064e3b" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Triangle connection */}
      <polygon points="210,45 340,215 80,215" fill="url(#triadGrad)" stroke="#10b981" strokeWidth="2.2" strokeDasharray="5 3" />

      {/* Vertex 1: Liberdade da Vontade */}
      <circle cx="210" cy="45" r="26" fill={isLight ? '#ffffff' : '#090d16'} stroke="#0284c7" strokeWidth="2.5" />
      <text x="210" y="50" textAnchor="middle" fill="#0284c7" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono, monospace">01</text>
      <text x="210" y="16" textAnchor="middle" fill={isLight ? '#0f172a' : '#e0f2fe'} fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">Liberdade da Vontade</text>

      {/* Vertex 2: Vontade de Sentido */}
      <circle cx="340" cy="215" r="26" fill={isLight ? '#ffffff' : '#090d16'} stroke="#a855f7" strokeWidth="2.5" />
      <text x="340" y="220" textAnchor="middle" fill="#a855f7" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono, monospace">02</text>
      <text x="340" y="258" textAnchor="middle" fill={isLight ? '#0f172a' : '#f3e8ff'} fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">Vontade de Sentido</text>

      {/* Vertex 3: Sentido da Vida */}
      <circle cx="80" cy="215" r="26" fill={isLight ? '#ffffff' : '#090d16'} stroke="#10b981" strokeWidth="2.5" />
      <text x="80" y="220" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono, monospace">03</text>
      <text x="80" y="258" textAnchor="middle" fill={isLight ? '#0f172a' : '#d1fae5'} fontSize="13" fontFamily="Space Grotesk, sans-serif" fontWeight="bold">Sentido da Vida</text>

      {/* Central Core: Autotranscendência */}
      <circle cx="210" cy="160" r="34" fill={isLight ? '#fef3c7' : '#111827'} stroke="#f59e0b" strokeWidth="2.5" />
      <text x="210" y="157" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono, monospace">AUTO-</text>
      <text x="210" y="170" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono, monospace">TRANSCENDÊNCIA</text>
    </svg>
  </div>
);

export const ReframingPrismArtwork: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = '',
  isLight = false,
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 460 250" className="w-full h-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
      <defs>
        <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isLight ? '#f3e8ff' : '#ffffff'} stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Incident dark beam (Crisis / Suffering) */}
      <line x1="30" y1="125" x2="195" y2="125" stroke="#f43f5e" strokeWidth="3.5" />
      <text x="105" y="110" textAnchor="middle" fill="#e11d48" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono, monospace">
        CRISE / ADVERSIDADE
      </text>

      {/* The Noetic Prism (Conscious Attitude) */}
      <polygon points="230,35 285,195 175,195" fill="url(#prismGrad)" stroke="#a855f7" strokeWidth="3" />
      <text x="230" y="150" textAnchor="middle" fill={isLight ? '#0f172a' : '#ffffff'} fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono, monospace">
        ATITUDE
      </text>
      <text x="230" y="167" textAnchor="middle" fill="#9333ea" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono, monospace">
        NOÉTICA
      </text>

      {/* Refracted meaningful light beams */}
      <line x1="250" y1="120" x2="415" y2="65" stroke="#00f0ff" strokeWidth="3" />
      <text x="365" y="55" fill="#0284c7" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono, monospace">Novo Aprendizado</text>

      <line x1="250" y1="125" x2="415" y2="125" stroke="#10b981" strokeWidth="3" />
      <text x="365" y="115" fill="#059669" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono, monospace">Resiliência Noética</text>

      <line x1="250" y1="130" x2="415" y2="185" stroke="#f59e0b" strokeWidth="3" />
      <text x="365" y="200" fill="#d97706" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono, monospace">Sentido Renovado</text>
    </svg>
  </div>
);
