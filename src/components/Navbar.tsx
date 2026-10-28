import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Table2, 
  BookOpen, 
  AlertTriangle, 
  Brain, 
  Library, 
  Search, 
  BookmarkCheck, 
  Menu, 
  X,
  Info,
  Activity,
  Stethoscope,
  Heart
} from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  onOpenSearch: () => void;
  savedBookmarksCount: number;
  onToggleBookmarks: () => void;
  onOpenAbout: () => void;
  portalMode?: 'patient' | 'professional';
  onTogglePortalMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  onOpenSearch,
  savedBookmarksCount,
  onToggleBookmarks,
  onOpenAbout,
  portalMode = 'professional',
  onTogglePortalMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavSection; label: string; shortLabel: string; icon: React.ReactNode; badge?: string }[] = [
    { 
      id: 'tables', 
      label: 'Tablolar & Hızlı Araçlar', 
      shortLabel: 'Tablolar & Araçlar', 
      icon: <Table2 className="w-4 h-4 text-neutral-800" />,
      badge: 'CYP & Doz'
    },
    { 
      id: 'assessment', 
      label: 'Değerlendirme & MSE', 
      shortLabel: 'Değerlendirme & MSE', 
      icon: <ClipboardCheck className="w-4 h-4 text-neutral-800" />,
      badge: 'MSE & Work-up'
    },
    { 
      id: 'disorders', 
      label: 'Tanılar', 
      shortLabel: 'Tanılar', 
      icon: <BookOpen className="w-4 h-4 text-neutral-800" />, 
      badge: 'DSM / ICD' 
    },
    { 
      id: 'treatments', 
      label: 'Tedaviler & İlaçlar', 
      shortLabel: 'Tedaviler & İlaçlar', 
      icon: <Activity className="w-4 h-4 text-neutral-800" />,
      badge: 'İlaç & Terapi'
    },
    { 
      id: 'emergency', 
      label: 'Acil Psikiyatri', 
      shortLabel: 'Acil Psikiyatri', 
      icon: <AlertTriangle className="w-4 h-4 text-neutral-800" />,
      badge: 'Kriz & NMS'
    },
    { 
      id: 'special_areas', 
      label: 'Diğer / Özel Alanlar', 
      shortLabel: 'Özel Alanlar', 
      icon: <Brain className="w-4 h-4 text-neutral-800" />,
      badge: 'CLP & Gebelik'
    },
    { 
      id: 'references', 
      label: 'Kaynakça', 
      shortLabel: 'Kaynaklar', 
      icon: <Library className="w-4 h-4 text-neutral-600" /> 
    }
  ];

  const handleSelect = (id: NavSection) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 text-neutral-900 shadow-xs">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Brand with Diamond Motif */}
          <div 
            onClick={() => handleSelect('tables')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 bg-neutral-900 border border-neutral-900 transform rotate-45 flex items-center justify-center shadow-xs group-hover:scale-105 transition-all">
                <div className="transform -rotate-45 text-white transition-colors">
                  <Stethoscope className="w-4 h-4" />
                </div>
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-neutral-900" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900 font-display">
                  PSYCH<span className="text-neutral-500 font-semibold">DS</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200 rounded-md">
                  Klinik Referans Portalı
                </span>
              </div>
              <p className="text-[10px] text-neutral-500 font-mono hidden md:block">
                Maudsley • Stahl • Kaplan & Sadock • Oxford • APA • TPD • WHO
              </p>
            </div>
          </div>

          {/* Quick Actions & Portal Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {onTogglePortalMode && (
              <button
                type="button"
                onClick={onTogglePortalMode}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-900 hover:bg-black text-white border border-neutral-900 transition-all cursor-pointer rounded-lg shadow-xs"
                title="Hasta / Profesyonel Modu Değiştir"
              >
                {portalMode === 'patient' ? (
                  <>
                    <Stethoscope className="w-3.5 h-3.5 text-neutral-800" />
                    <span className="hidden sm:inline">Hekim Moduna Geç</span>
                    <span className="sm:hidden">Hekim</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-3.5 h-3.5 text-neutral-800" />
                    <span className="hidden sm:inline">Hasta Rehberine Geç</span>
                    <span className="sm:hidden">Hasta</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 hover:border-neutral-300 transition-all cursor-pointer rounded-lg"
              title="Arama (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-neutral-700" />
              <span className="hidden sm:inline text-xs font-medium">Arama</span>
              <kbd className="hidden lg:inline-block px-1 text-[9px] font-mono text-neutral-600 bg-white border border-neutral-300 rounded">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={onToggleBookmarks}
              className="relative p-2 text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300 transition-colors cursor-pointer rounded-lg"
              title="Vizit & Sabitlenenler"
            >
              <BookmarkCheck className="w-4 h-4 text-neutral-800" />
              {savedBookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-[10px] font-bold text-white flex items-center justify-center font-mono rounded-full shadow-xs">
                  {savedBookmarksCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenAbout}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 hover:text-black border border-neutral-200 hover:border-neutral-300 transition-colors cursor-pointer rounded-lg"
              title="Sistem Hakkında & Referanslar"
            >
              <Info className="w-3.5 h-3.5 text-neutral-700" />
              <span className="hidden sm:inline font-medium">Hakkında</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 text-neutral-800 hover:text-black bg-neutral-100 border border-neutral-200 cursor-pointer rounded-lg"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-neutral-900" /> : <Menu className="w-4 h-4 text-neutral-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Menu */}
      {portalMode === 'professional' && (
        <div className="hidden md:block bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 overflow-x-auto py-1.5 scrollbar-none" aria-label="Tabs">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer rounded-lg ${
                      isActive
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-transparent text-neutral-600 hover:text-black hover:bg-neutral-100'
                    }`}
                  >
                    <span className={`text-[10px] font-mono ${isActive ? 'text-neutral-300' : 'text-neutral-400'}`}>0{idx + 1}.</span>
                    <span className={isActive ? 'text-white' : 'text-neutral-700'}>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 font-mono uppercase tracking-wider rounded ${
                        isActive 
                          ? 'bg-neutral-800 text-neutral-200 border border-neutral-700' 
                          : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Horizontal Quick-Scroll Bar */}
      {portalMode === 'professional' && (
        <div className="md:hidden bg-neutral-50 border-t border-neutral-200 overflow-x-auto scrollbar-none px-2 py-1.5 flex gap-1.5">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap transition-colors rounded-md ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-700'
                }`}
              >
                <span className={`font-mono text-[9px] ${isActive ? 'text-neutral-300' : 'text-neutral-400'}`}>#{idx + 1}</span>
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Mobile Full Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-4 pt-3 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2 py-1 border-b border-neutral-200 mb-2">
            PSİKİYATRİ KLİNİK MODÜLLERİ (1-6)
          </div>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold transition-colors cursor-pointer rounded-lg ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-50 border border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`font-mono text-xs ${isActive ? 'text-neutral-300' : 'text-neutral-400'}`}>0{idx + 1}.</span>
                  <span className={isActive ? 'text-white' : 'text-neutral-700'}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.5 font-mono rounded ${
                    isActive
                      ? 'bg-neutral-800 text-neutral-200'
                      : 'bg-neutral-200 text-neutral-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
