import React from 'react';
import { 
  Zap, 
  Repeat, 
  BookOpen, 
  Award, 
  Activity, 
  Flame,
  Users
} from 'lucide-react';
import { NavSection } from '../types';

interface ViralFeaturesBannerProps {
  userMode: 'patient' | 'professional';
  onNavigateSection: (section: NavSection) => void;
  onOpenPatientTab?: (tabId: string) => void;
  onSwitchUserMode: (mode: 'patient' | 'professional') => void;
}

export const ViralFeaturesBanner: React.FC<ViralFeaturesBannerProps> = ({
  userMode,
  onNavigateSection,
  onSwitchUserMode
}) => {
  const viralTools = [
    {
      id: 'family',
      label: 'Aile & Yakınlar Rehberi',
      icon: <Users className="w-3.5 h-3.5 text-purple-500 shrink-0" />,
      action: () => {
        onSwitchUserMode('patient');
      }
    },
    {
      id: 'interactions',
      label: 'İlaç-Besin Etkileşimi',
      icon: <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />,
      action: () => {
        onSwitchUserMode('professional');
        onNavigateSection('tables');
      }
    },
    {
      id: 'switching',
      label: 'Doz Eşdeğerliği (CPZ)',
      icon: <Repeat className="w-3.5 h-3.5 text-blue-500 shrink-0" />,
      action: () => {
        onSwitchUserMode('professional');
        onNavigateSection('tables');
      }
    },
    {
      id: 'facts',
      label: '50 Kritik Bilgi (WHO/TPD/APA)',
      icon: <BookOpen className="w-3.5 h-3.5 text-emerald-500 shrink-0" />,
      action: () => {
        onSwitchUserMode('patient');
      }
    },
    {
      id: 'cases',
      label: 'Klinik Vaka Testi',
      icon: <Award className="w-3.5 h-3.5 text-purple-500 shrink-0" />,
      action: () => {
        onSwitchUserMode('professional');
        onNavigateSection('tables');
      }
    },
    {
      id: 'qtc',
      label: 'QTc & Klerens Hesaplayıcı',
      icon: <Activity className="w-3.5 h-3.5 text-rose-500 shrink-0" />,
      action: () => {
        onSwitchUserMode('professional');
        onNavigateSection('tables');
      }
    }
  ];

  return (
    /* Ultra-compact Sleek Micro-Bar (Tactile & Dark mode enabled) */
    <div className="bg-white/95 dark:bg-[#111215]/95 backdrop-blur-xs border border-neutral-200/90 dark:border-neutral-800 rounded-lg px-2.5 py-1.5 flex items-center justify-between gap-2 shadow-2xs transition-colors">
      <div className="flex items-center gap-1.5 shrink-0 text-xs font-bold text-neutral-800 dark:text-neutral-200 font-mono">
        <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-400 animate-pulse" />
        <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400">Hızlı Araçlar:</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
        {viralTools.map((tool) => (
          <button
            key={tool.id}
            type="button"
            onClick={tool.action}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-900 dark:hover:bg-neutral-100 text-neutral-700 dark:text-neutral-300 hover:text-white dark:hover:text-neutral-950 border border-neutral-200 dark:border-neutral-750 hover:border-neutral-900 dark:hover:border-neutral-300 text-[11px] font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 select-none shadow-2xs active:translate-y-[1px] active:scale-[0.98]"
          >
            {tool.icon}
            <span>{tool.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
