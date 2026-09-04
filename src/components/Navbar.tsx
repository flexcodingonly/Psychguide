import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Table2, 
  BookOpen, 
  AlertTriangle, 
  Calculator, 
  Brain, 
  Compass, 
  Library, 
  Search, 
  BookmarkCheck, 
  Menu, 
  X,
  Info,
  Activity
} from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  onOpenSearch: () => void;
  savedBookmarksCount: number;
  onToggleBookmarks: () => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  onOpenSearch,
  savedBookmarksCount,
  onToggleBookmarks,
  onOpenAbout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact requested ordering:
  // 1. RDM Muayene (Mental Status Exam)
  // 2. Klinik Tablolar
  // 3. Tanı Ölçütleri (DSM-5-TR)
  // 4. İlaç Etkileşimi (Medscape & Dahili)
  // 5. Klinik Ölçekler (Yaygın Bozukluklar)
  // 6. Psikodinamik (Savunma Mekanizmaları)
  // + Kılavuzlar & Kaynakça
  const navItems: { id: NavSection; label: string; shortLabel: string; icon: React.ReactNode; badge?: string }[] = [
    { 
      id: 'mse', 
      label: 'RDM Muayene (Mental Status Exam)', 
      shortLabel: 'RDM Muayene', 
      icon: <ClipboardCheck className="w-4 h-4 text-red-500" />,
      badge: 'RDM'
    },
    { 
      id: 'tables', 
      label: 'Klinik Tablolar', 
      shortLabel: 'Tablolar', 
      icon: <Table2 className="w-4 h-4 text-neutral-300" />,
      badge: 'Acil & Lab'
    },
    { 
      id: 'disorders', 
      label: 'Tanı Ölçütleri', 
      shortLabel: 'Tanı Ölçütleri', 
      icon: <BookOpen className="w-4 h-4 text-neutral-300" />, 
      badge: 'DSM-5-TR' 
    },
    { 
      id: 'interactions', 
      label: 'İlaç Etkileşimi', 
      shortLabel: 'İlaç Etkileşimi', 
      icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
      badge: 'Medscape & CYP'
    },
    { 
      id: 'scales', 
      label: 'Klinik Ölçekler', 
      shortLabel: 'Ölçekler', 
      icon: <Calculator className="w-4 h-4 text-neutral-300" />,
      badge: '12+ Ölçek'
    },
    { 
      id: 'psychodynamics', 
      label: 'Psikodinamik', 
      shortLabel: 'Psikodinamik', 
      icon: <Brain className="w-4 h-4 text-red-400" />,
      badge: 'Savunmalar'
    },
    { 
      id: 'guidelines', 
      label: 'Kılavuzlar & Algoritmalar', 
      shortLabel: 'Kılavuzlar', 
      icon: <Compass className="w-4 h-4 text-neutral-400" />, 
      badge: 'CANMAT' 
    },
    { 
      id: 'references', 
      label: 'Kaynakça', 
      shortLabel: 'Kaynaklar', 
      icon: <Library className="w-4 h-4 text-neutral-400" /> 
    }
  ];

  const handleSelect = (id: NavSection) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-neutral-800 text-white shadow-2xl">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleSelect('mse')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 bg-red-600 text-white flex items-center justify-center font-black shadow-lg group-hover:bg-red-700 transition-colors">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-mono">
                  PSYCH<span className="text-red-600">DS</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800">
                  Klinik Karar Destek
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-mono hidden md:block">
                PsychDB • DSM-5-TR • CANMAT • Maudsley • Medscape
              </p>
            </div>
          </div>

          {/* Quick Actions: Search, Bookmarks, About, Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-[#121212] hover:bg-[#1a1a1a] text-neutral-300 border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer"
              title="Arama (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-red-500" />
              <span className="hidden sm:inline text-xs">Arama</span>
              <kbd className="hidden lg:inline-block px-1 text-[9px] font-mono text-neutral-400 bg-black border border-neutral-800">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={onToggleBookmarks}
              className="relative p-2 text-neutral-300 hover:text-white bg-[#121212] hover:bg-[#1a1a1a] border border-neutral-800 transition-colors cursor-pointer"
              title="Vizit & Sabitlenenler"
            >
              <BookmarkCheck className="w-4 h-4 text-red-500" />
              {savedBookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-[10px] font-bold text-white flex items-center justify-center font-mono">
                  {savedBookmarksCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenAbout}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs bg-[#141414] hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
              title="Sistem Hakkında & Referanslar"
            >
              <Info className="w-3.5 h-3.5 text-red-500" />
              <span className="hidden sm:inline font-medium">Hakkında</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 text-neutral-300 hover:text-white bg-[#121212] border border-neutral-800 cursor-pointer"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-red-500" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Menu (Yan Yana Menü) */}
      <div className="hidden md:block bg-[#0a0a0a] border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto py-1.5 scrollbar-none" aria-label="Tabs">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-red-600 border-red-500 text-white shadow-md'
                      : 'bg-transparent border-transparent text-neutral-400 hover:text-white hover:bg-neutral-900/90'
                  }`}
                >
                  <span className="text-[10px] font-mono opacity-60">0{idx + 1}.</span>
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 font-mono uppercase tracking-wider ${
                      isActive 
                        ? 'bg-black text-white border border-red-400' 
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
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

      {/* Mobile Horizontal Quick-Scroll Bar (Her an erişilebilir yatay bar) */}
      <div className="md:hidden bg-[#0a0a0a] border-t border-neutral-800 overflow-x-auto scrollbar-none px-2 py-1.5 flex gap-1.5">
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold whitespace-nowrap transition-colors border ${
                isActive
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-[#121212] border-neutral-800 text-neutral-400'
              }`}
            >
              <span className="font-mono text-[9px] opacity-70">#{idx + 1}</span>
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Full Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2 py-1 border-b border-neutral-800 mb-2">
            PSİKİYATRİ KLİNİK MODÜLLERİ (1-6)
          </div>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-red-600 border-red-500 text-white'
                    : 'bg-[#0f0f0f] border-neutral-800/80 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs opacity-60">0{idx + 1}.</span>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] px-1.5 py-0.5 font-mono bg-black text-neutral-300 border border-neutral-800">
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

