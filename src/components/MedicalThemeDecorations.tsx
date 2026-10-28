import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  Microscope, 
  Plus, 
  HeartPulse, 
  Brain, 
  Dna,
  Search,
  FileText
} from 'lucide-react';

/**
 * MedicalNetworkBackground:
 * Apple-style minimalist clean white canvas with the signature geometric
 * constellation / neural network mesh lines and nodes in subtle silver & graphite.
 */
export const MedicalNetworkBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Apple clean white / crisp off-white canvas */}
      <div className="absolute inset-0 bg-[#ffffff]" />
      
      {/* High-performance subtle ambient spotlights for depth */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(0,0,0,0.025) 0%, rgba(0,0,0,0.005) 45%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-10 w-[700px] h-[550px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.005) 50%, transparent 75%)' }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle at 30% 70%, rgba(0,0,0,0.02) 0%, transparent 65%)' }}
      />

      {/* SVG Constellation / Neural Network Mesh (Apple Minimalist Monochrome Silver/Graphite) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="appleLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#6e6e73" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d2d2d7" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Top-Right Neural Network Cluster */}
        <g className="hidden sm:block">
          <line x1="820" y1="50" x2="880" y2="120" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="880" y1="120" x2="940" y2="80" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="880" y1="120" x2="910" y2="220" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="940" y1="80" x2="980" y2="180" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="910" y1="220" x2="980" y2="180" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="910" y1="220" x2="850" y2="280" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="850" y1="280" x2="930" y2="350" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="930" y1="350" x2="990" y2="290" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="850" y1="280" x2="800" y2="380" stroke="url(#appleLineGrad)" strokeWidth="0.9" />

          {/* Clean Vector Nodes */}
          <circle cx="820" cy="50" r="2.5" fill="#86868b" />
          <circle cx="880" cy="120" r="3.5" fill="#1d1d1f" />
          <circle cx="940" cy="80" r="2.5" fill="#6e6e73" />
          <circle cx="910" cy="220" r="3" fill="#1d1d1f" />
          <circle cx="980" cy="180" r="2" fill="#86868b" />
          <circle cx="850" cy="280" r="3" fill="#1d1d1f" />
          <circle cx="930" cy="350" r="2.5" fill="#6e6e73" />
          <circle cx="990" cy="290" r="2" fill="#86868b" />
          <circle cx="800" cy="380" r="2" fill="#86868b" />
        </g>

        {/* Bottom-Right Complex Molecular / Constellation Plexus */}
        <g>
          <line x1="750" y1="820" x2="820" y2="760" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="820" y1="760" x2="890" y2="840" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="890" y1="840" x2="810" y2="920" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="810" y1="920" x2="750" y2="820" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="890" y1="840" x2="960" y2="780" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="960" y1="780" x2="980" y2="880" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="890" y1="840" x2="980" y2="880" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="810" y1="920" x2="880" y2="970" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="880" y1="970" x2="980" y2="880" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="750" y1="820" x2="680" y2="880" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="680" y1="880" x2="600" y2="820" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="600" y1="820" x2="670" y2="740" stroke="url(#appleLineGrad)" strokeWidth="1" />
          <line x1="670" y1="740" x2="750" y2="820" stroke="url(#appleLineGrad)" strokeWidth="1" />

          {/* Clean Nodes */}
          <circle cx="750" cy="820" r="3.5" fill="#1d1d1f" />
          <circle cx="820" cy="760" r="2.5" fill="#6e6e73" />
          <circle cx="890" cy="840" r="4" fill="#1d1d1f" />
          <circle cx="810" cy="920" r="3" fill="#424245" />
          <circle cx="960" cy="780" r="2.5" fill="#86868b" />
          <circle cx="980" cy="880" r="3.5" fill="#1d1d1f" />
          <circle cx="880" cy="970" r="2" fill="#86868b" />
          <circle cx="680" cy="880" r="2.5" fill="#6e6e73" />
          <circle cx="600" cy="820" r="2" fill="#86868b" />
          <circle cx="670" cy="740" r="2.5" fill="#424245" />
        </g>

        {/* Left Side Ambient Constellation */}
        <g className="hidden md:block">
          <line x1="20" y1="450" x2="60" y2="520" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="60" y1="520" x2="30" y2="600" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <line x1="60" y1="520" x2="110" y2="560" stroke="url(#appleLineGrad)" strokeWidth="0.9" />
          <circle cx="20" cy="450" r="2" fill="#86868b" />
          <circle cx="60" cy="520" r="3" fill="#1d1d1f" />
          <circle cx="30" cy="600" r="2" fill="#6e6e73" />
          <circle cx="110" cy="560" r="2.5" fill="#86868b" />
        </g>
      </svg>
    </div>
  );
};

/**
 * MedicalBrandLogo:
 * Iconic tilted glowing diamond emblem styled in Apple minimalist black & white.
 */
export const MedicalBrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; showText?: boolean }> = ({ 
  size = 'md',
  showText = true 
}) => {
  const boxDim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const iconDim = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Outer Diamond Frame with Apple clean aesthetic */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/5 blur-xs rounded-sm transform rotate-45 scale-110 group-hover:bg-black/10 transition-all" />
        
        <div className={`${boxDim} bg-white border border-neutral-300 transform rotate-45 flex items-center justify-center shadow-xs group-hover:border-black group-hover:shadow-sm transition-all`}>
          <div className="transform -rotate-45 text-black transition-colors">
            <Stethoscope className={iconDim} />
          </div>
        </div>

        {/* Small decorative corner node */}
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-black shadow-xs" />
      </div>

      {showText && (
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900 font-display">
              PSYCH<span className="text-black">DS</span>
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-black shadow-xs" />
          </div>
          <p className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 font-semibold">
            Klinik Psikiyatri Rehberi
          </p>
        </div>
      )}
    </div>
  );
};

export const MedicalDiamondCluster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      {/* Diamond 1: Cross */}
      <div className="w-9 h-9 bg-white border border-neutral-200 transform rotate-45 flex items-center justify-center shadow-xs hover:border-black hover:shadow-sm transition-all cursor-pointer">
        <Plus className="w-4 h-4 text-neutral-800 transform -rotate-45" />
      </div>

      {/* Diamond 2: Activity / Pulse */}
      <div className="w-9 h-9 bg-white border border-neutral-200 transform rotate-45 flex items-center justify-center shadow-xs hover:border-black hover:shadow-sm transition-all cursor-pointer">
        <Activity className="w-4 h-4 text-neutral-800 transform -rotate-45" />
      </div>

      {/* Diamond 3: Microscope */}
      <div className="w-9 h-9 bg-white border border-neutral-200 transform rotate-45 flex items-center justify-center shadow-xs hover:border-black hover:shadow-sm transition-all cursor-pointer">
        <Microscope className="w-4 h-4 text-neutral-800 transform -rotate-45" />
      </div>

      {/* Diamond 4: Stethoscope */}
      <div className="w-9 h-9 bg-white border border-neutral-200 transform rotate-45 flex items-center justify-center shadow-xs hover:border-black hover:shadow-sm transition-all cursor-pointer">
        <Stethoscope className="w-4 h-4 text-neutral-800 transform -rotate-45" />
      </div>
    </div>
  );
};

export const SlidePresentationHeader: React.FC<{
  title: string;
  subtitle: string;
  badge?: string;
}> = ({ title, subtitle, badge }) => {
  return (
    <div className="relative py-2 sm:py-2.5 border-b border-neutral-200/80 dark:border-neutral-800 bg-[#fbfbfd]/90 dark:bg-[#111215]/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 min-h-[30px]">
          <div className="flex items-center gap-2.5 min-w-0">
            {badge && (
              <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100/90 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 tracking-tight rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-emerald-400" />
                {badge}
              </span>
            )}
            <h1 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white tracking-tight truncate">
              {title}
            </h1>
            <span className="text-neutral-300 dark:text-neutral-700 hidden md:inline text-xs">•</span>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-normal truncate hidden md:inline max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 shrink-0 text-[11px] font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-500 dark:text-neutral-400 font-sans text-xs">Aktif Kılavuz Modülü</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NumberedDiamond: React.FC<{
  num: string | number;
  active?: boolean;
  size?: 'sm' | 'md';
}> = ({ num, active = false, size = 'md' }) => {
  const dim = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';
  const textDim = size === 'sm' ? 'text-[10px]' : 'text-xs';
  const formattedNum = typeof num === 'number' && num < 10 ? `0${num}` : `${num}`;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0 select-none">
      {/* 45-degree diamond container */}
      <div 
        className={`${dim} transform rotate-45 flex items-center justify-center transition-all duration-200 ${
          active
            ? 'bg-black border border-black shadow-xs'
            : 'bg-white border border-neutral-300 hover:border-black shadow-xs'
        }`}
      >
        {/* Unrotated number */}
        <span 
          className={`transform -rotate-45 font-mono font-bold ${textDim} ${
            active ? 'text-white' : 'text-neutral-900'
          }`}
        >
          {formattedNum}
        </span>
      </div>
    </div>
  );
};

export const GeometricDiamondCornerOrnament: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none relative ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25 hover:opacity-50 transition-opacity">
        {/* Outer Large Diamond */}
        <rect x="60" y="8" width="52" height="52" rx="2" transform="rotate(45 60 8)" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" />
        {/* Middle Diamond */}
        <rect x="60" y="20" width="36" height="36" rx="1" transform="rotate(45 60 20)" stroke="#6e6e73" strokeWidth="0.9" />
        {/* Inner Diamond */}
        <rect x="60" y="32" width="20" height="20" rx="1" transform="rotate(45 60 32)" fill="#f5f5f7" stroke="#000000" strokeWidth="0.9" />
        {/* Crosslines */}
        <line x1="60" y1="18" x2="60" y2="74" stroke="#86868b" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="32" y1="46" x2="88" y2="46" stroke="#86868b" strokeWidth="0.8" strokeOpacity="0.5" />
        {/* Corner dots */}
        <circle cx="60" cy="8" r="2.5" fill="#000000" />
        <circle cx="97" cy="45" r="2" fill="#6e6e73" />
        <circle cx="23" cy="45" r="2" fill="#6e6e73" />
        <circle cx="60" cy="82" r="2.5" fill="#000000" />
      </svg>
    </div>
  );
};

export const CasePresentationCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  badge?: string;
  className?: string;
}> = ({ icon, title, subtitle, children, badge, className = '' }) => {
  return (
    <div className={`relative bg-white border border-neutral-200/90 hover:border-neutral-400 p-5 rounded-xs shadow-xs hover:shadow-sm transition-all group ${className}`}>
      {/* Top subtle black accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent group-hover:via-neutral-900 transition-all" />

      {/* Header: Icon in halo ring */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-xs group-hover:border-neutral-900 transition-all">
              <div className="text-neutral-900">
                {icon}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-neutral-900 font-display">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[11px] text-neutral-500 font-normal">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {badge && (
          <span className="px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200 text-[10px] font-mono uppercase font-bold rounded-xs">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="text-xs text-neutral-700 space-y-2 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const TableOfContentsGrid: React.FC<{
  activeId: string;
  onSelect: (id: string) => void;
}> = ({ activeId, onSelect }) => {
  const sections = [
    { num: '01', id: 'tables', label: 'Tablolar & Hızlı Araçlar', desc: 'CYP450, QTc, eşdeğerlikler, doz hesaplayıcıları' },
    { num: '02', id: 'assessment', label: 'Değerlendirme & MSE', desc: 'Ruhsal durum muayenesi, risk değerlendirmesi, ölçekler' },
    { num: '03', id: 'disorders', label: 'Tanılar (DSM-5-TR)', desc: '20+ psikiyatrik bozukluk, tanı ölçütleri, ayırıcı tanı' },
    { num: '04', id: 'treatments', label: 'Tedaviler & İlaçlar', desc: 'İlaç monografları, algoritmalar, psikoterapiler, EKT' },
    { num: '05', id: 'emergency', label: 'Acil Psikiyatri', desc: 'Ajitasyon, katatoni, delirium, intihar, NMS, serotonin' },
    { num: '06', id: 'special_areas', label: 'Diğer / Özel Alanlar', desc: 'CLP, bağımlılık, çocuk-ergen, geriatri, gebelik' }
  ];

  return (
    <div className="relative bg-white border border-neutral-200 p-5 sm:p-6 mb-8 rounded-sm shadow-xs overflow-hidden">
      <GeometricDiamondCornerOrnament className="absolute -top-4 -right-4" />

      <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-neutral-900 transform rotate-45 shadow-xs" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 font-mono">
            Table of Contents // İçindekiler
          </h2>
        </div>
        <span className="text-[11px] font-mono text-neutral-500">
          6 Ana Klinik Modül
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => onSelect(sec.id)}
              className={`p-3 text-left flex items-start gap-3 transition-all cursor-pointer rounded-xs border group ${
                isActive
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-neutral-50 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100'
              }`}
            >
              <NumberedDiamond num={sec.num} active={isActive} size="md" />
              <div className="min-w-0 flex-1">
                <h4 className={`text-xs sm:text-sm font-bold font-display truncate transition-colors ${
                  isActive ? 'text-white font-extrabold' : 'text-neutral-900 group-hover:text-black'
                }`}>
                  {sec.label}
                </h4>
                <p className={`text-[11px] line-clamp-1 mt-0.5 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {sec.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
