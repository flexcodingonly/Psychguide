import React from 'react';
import { 
  ClipboardCheck, 
  Table2, 
  BookOpen, 
  AlertTriangle, 
  Calculator, 
  Layers, 
  Compass, 
  Library, 
  Search, 
  BookmarkCheck, 
  Stethoscope, 
  X, 
  Info,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { NavSection } from '../types';

interface SidebarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  savedBookmarksCount: number;
  onToggleBookmarks: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  onOpenSearch,
  onOpenAbout,
  savedBookmarksCount,
  onToggleBookmarks,
  isMobileOpen,
  onCloseMobile
}) => {
  // Ordered strictly as user requested:
  // 1: RDM Muayene (Mental Status Exam)
  // 2: Klinik Tablolar
  // 3: Tanı Ölçütleri (DSM-5-TR)
  // 4: İlaç Etkileşimleri (Medscape)
  // 5: Klinik Ölçekler
  // 6: Psikodinamik
  // 7: Kılavuzlar & Algoritmalar
  // 8: Kaynakça & Literatür
  const navItems: { 
    id: NavSection; 
    orderNumber: number;
    label: string; 
    subLabel: string;
    icon: React.ReactNode; 
    badge?: string; 
  }[] = [
    { 
      id: 'mse', 
      orderNumber: 1,
      label: 'RDM Muayene (Mental Status Exam)', 
      subLabel: 'Semiyoloji & Otomatik Not',
      icon: <ClipboardCheck className="w-4 h-4" />, 
      badge: 'MSE' 
    },
    { 
      id: 'tables', 
      orderNumber: 2,
      label: 'Klinik Tablolar', 
      subLabel: 'NMS/Serotonin, Eşdeğerlikler',
      icon: <Table2 className="w-4 h-4" />, 
      badge: 'Tablolar' 
    },
    { 
      id: 'disorders', 
      orderNumber: 3,
      label: 'Tanı Ölçütleri', 
      subLabel: 'Klinik Kriterler & Ayırıcı Tanı',
      icon: <BookOpen className="w-4 h-4" />, 
      badge: 'DSM-5-TR' 
    },
    { 
      id: 'interactions', 
      orderNumber: 4,
      label: 'İlaç Etkileşimleri', 
      subLabel: 'Medscape Checker & CYP',
      icon: <AlertTriangle className="w-4 h-4" />, 
      badge: 'Medscape' 
    },
    { 
      id: 'scales', 
      orderNumber: 5,
      label: 'Klinik Ölçekler', 
      subLabel: 'Yaygın Bozukluklar İnteraktif',
      icon: <Calculator className="w-4 h-4" />, 
      badge: '11 Ölçek' 
    },
    { 
      id: 'psychodynamics', 
      orderNumber: 6,
      label: 'Psikodinamik', 
      subLabel: 'Savunma Mekanizmaları & Ekoller',
      icon: <Layers className="w-4 h-4" />, 
      badge: 'Dinamik' 
    },
    { 
      id: 'guidelines', 
      orderNumber: 7,
      label: 'Kılavuzlar & Algoritmalar', 
      subLabel: 'CANMAT & Maudsley Basamakları',
      icon: <Compass className="w-4 h-4" />, 
      badge: 'PsychDB' 
    },
    { 
      id: 'references', 
      orderNumber: 8,
      label: 'Kaynakça & Literatür', 
      subLabel: 'APA, BAP, FDA, WFSBP',
      icon: <Library className="w-4 h-4" />, 
      badge: 'Referans' 
    }
  ];

  const handleNav = (id: NavSection) => {
    onSelectSection(id);
    onCloseMobile();
  };

  const navContent = (
    <div className="flex flex-col h-full bg-[#0a0a0a] text-white border-r border-neutral-800">
      {/* Brand Header */}
      <div className="p-5 border-b border-neutral-800 bg-[#0d0d0d]">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => handleNav('mse')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-red-950/70 border border-red-600/80 text-red-500 flex items-center justify-center font-black group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-white tracking-wider font-mono">PSYCHDS</span>
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              </div>
              <p className="text-[10px] text-neutral-400 font-mono">
                Klinik Karar Destek Sistemi
              </p>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Quick Action Buttons inside Sidebar */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              onOpenSearch();
              onCloseMobile();
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-[#141414] hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-colors cursor-pointer"
            title="Arama (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-red-500" />
            <span>Hızlı Ara</span>
          </button>

          <button
            onClick={() => {
              onToggleBookmarks();
              onCloseMobile();
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-[#141414] hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-colors cursor-pointer relative"
            title="Sabitlenenler"
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-red-500" />
            <span>Sabitler</span>
            {savedBookmarksCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[9px] font-bold font-mono">
                {savedBookmarksCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links (Strictly Ordered) */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 px-3 py-2">
          Ana Klinik Menü
        </div>

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full text-left p-3 flex items-start gap-3 transition-all cursor-pointer border-l-4 ${
                isActive
                  ? 'bg-[#171717] border-red-600 text-white shadow-lg'
                  : 'border-transparent text-neutral-400 hover:text-white hover:bg-[#121212]'
              }`}
            >
              <div className={`mt-0.5 shrink-0 ${isActive ? 'text-red-500' : 'text-neutral-500'}`}>
                {item.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-neutral-200'}`}>
                    <span className="text-red-500 font-mono mr-1.5">{item.orderNumber}.</span>
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 font-mono uppercase tracking-wider shrink-0 border ${
                      isActive 
                        ? 'bg-red-950 text-red-400 border-red-800' 
                        : 'bg-black text-neutral-500 border-neutral-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                  {item.subLabel}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Sidebar Footer Credit & About Trigger */}
      <div className="p-4 border-t border-neutral-800 bg-[#0d0d0d] space-y-3">
        <button
          onClick={() => {
            onOpenAbout();
            onCloseMobile();
          }}
          className="w-full flex items-center justify-between p-2.5 bg-[#141414] hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-red-500" />
            <span>Sistem Hakkında & Referanslar</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
        </button>

        {/* Dr. Doğuş Sönmez Credit Card */}
        <div className="p-3 bg-black border border-neutral-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] uppercase font-mono text-neutral-400 tracking-wider">
              Geliştirici & Editör:
            </span>
          </div>
          <div className="font-bold text-xs text-white mt-1 font-mono tracking-wide flex items-center justify-between">
            <span>Dr. Doğuş Sönmez</span>
            <span className="text-[10px] text-red-500">© 2026</span>
          </div>
          <p className="text-[10px] text-neutral-500 mt-0.5 leading-tight">
            Klinik & Akademik Psikiyatri Karar Destek
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar (Side-by-side) */}
      <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-30 shadow-2xl">
        {navContent}
      </aside>

      {/* Mobile Drawer Backdrop and Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex animate-in fade-in duration-200">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative w-4/5 max-w-sm h-full z-50 shadow-2xl">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};
