import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
  showLabel = false
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`btn-tactile inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold select-none cursor-pointer transition-all ${
        isDark
          ? 'bg-neutral-800 hover:bg-neutral-700 text-amber-300 border-neutral-700 hover:border-neutral-500 shadow-2xs'
          : 'bg-white hover:bg-neutral-50 text-neutral-700 hover:text-black border-neutral-200/90 hover:border-neutral-400 shadow-2xs'
      } ${className}`}
      title={isDark ? 'Açık Temaya Geç (Light Mode)' : 'Koyu Temaya Geç (Dark Mode)'}
      aria-label={isDark ? 'Açık Temaya Geç' : 'Koyu Temaya Geç'}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          {showLabel && <span className="text-[11px] font-sans font-medium">Açık</span>}
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
          {showLabel && <span className="text-[11px] font-sans font-medium text-neutral-700">Koyu</span>}
        </>
      )}
    </button>
  );
};
