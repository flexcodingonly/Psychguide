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
  ArrowUpRight,
  Heart,
  Repeat,
  Sparkles,
  Users
} from 'lucide-react';
import { NavSection } from '../types';
import { MedicalBrandLogo } from './MedicalThemeDecorations';
import { ThemeToggle } from './ThemeToggle';

interface SidebarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  savedBookmarksCount: number;
  onToggleBookmarks: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  userMode: 'patient' | 'professional';
  onSwitchMode: (mode: 'patient' | 'professional') => void;
  onOpenPortalSelect: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  onOpenSearch,
  onOpenAbout,
  savedBookmarksCount,
  onToggleBookmarks,
  isMobileOpen,
  onCloseMobile,
  userMode,
  onSwitchMode,
  onOpenPortalSelect,
  theme,
  onToggleTheme
}) => {
  const navItems: { 
    id: NavSection; 
    orderNumber: number;
    label: string; 
    subLabel: string;
    icon: React.ReactNode; 
    badge?: string; 
  }[] = [
    { 
      id: 'tables', 
      orderNumber: 1,
      label: 'Tablolar & Hızlı Araçlar', 
      subLabel: 'Hesaplayıcılar, QTc, CrCl, CYP, İzlem',
      icon: <Table2 className="w-4 h-4" />, 
      badge: 'Araçlar' 
    },
    { 
      id: 'assessment', 
      orderNumber: 2,
      label: 'Değerlendirme & MSE', 
      subLabel: 'Görüşme, MSE Atlası, Risk, Work-up',
      icon: <ClipboardCheck className="w-4 h-4" />, 
      badge: 'MSE' 
    },
    { 
      id: 'scales', 
      orderNumber: 3,
      label: 'Klinik Ölçekler', 
      subLabel: 'Valide Psikiyatrik Ölçekler & Canlı Skorlama',
      icon: <Calculator className="w-4 h-4" />, 
      badge: 'Ölçekler' 
    },
    { 
      id: 'disorders', 
      orderNumber: 4,
      label: 'Tanılar', 
      subLabel: 'Hastalık Rehberleri, DSM & ICD',
      icon: <BookOpen className="w-4 h-4" />, 
      badge: 'Tanılar' 
    },
    { 
      id: 'treatments', 
      orderNumber: 5,
      label: 'Tedaviler & İlaçlar', 
      subLabel: 'İlaçlar, Psikoterapiler, EKT, Algoritmalar',
      icon: <Stethoscope className="w-4 h-4" />, 
      badge: 'Tedavi' 
    },
    { 
      id: 'emergency', 
      orderNumber: 6,
      label: 'Acil Psikiyatri', 
      subLabel: 'Ajitasyon, Katatoni, Delirium, NMS',
      icon: <AlertTriangle className="w-4 h-4" />, 
      badge: 'Acil' 
    },
    { 
      id: 'special_areas', 
      orderNumber: 7,
      label: 'Diğer / Özel Alanlar', 
      subLabel: 'CLP, Bağımlılık, Geriatri, Gebelik',
      icon: <Layers className="w-4 h-4" />, 
      badge: 'Özel' 
    },
    { 
      id: 'references', 
      orderNumber: 8,
      label: 'Kaynakça & Literatür', 
      subLabel: 'Maudsley, Stahl, Kaplan, Oxford, APA, WHO, TPD',
      icon: <Library className="w-4 h-4" />, 
      badge: 'Referans' 
    }
  ];

  const handleNav = (id: NavSection) => {
    if (userMode !== 'professional') {
      onSwitchMode('professional');
    }
    onSelectSection(id);
    onCloseMobile();
  };

  const navContent = (
    <div className="flex flex-col h-full bg-[#fbfbfd]/95 dark:bg-[#0c0d0f] text-neutral-900 dark:text-neutral-100 border-r border-neutral-200/80 dark:border-neutral-800 relative">
      {/* Brand Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-[#111215]/90 backdrop-blur-md relative z-10">
        <div className="flex items-center justify-between">
          <div 
            onClick={() => {
              if (userMode === 'professional') {
                handleNav('tables');
              } else {
                onCloseMobile();
              }
            }}
            className="cursor-pointer"
          >
            <MedicalBrandLogo size="md" showText={true} />
          </div>

          {/* Mobile close button */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Mode Switcher (Hasta / Hekim) */}
        <div className="mt-4 p-1.5 bg-[#f5f5f7] dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-1.5 shadow-2xs">
          <div className="flex items-center justify-between px-1 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider">
            <span>Aktif Portal:</span>
            <button
              onClick={onOpenPortalSelect}
              className="text-neutral-900 dark:text-neutral-200 font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Repeat className="w-3 h-3" /> Değiştir
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => {
                onSwitchMode('patient');
                onCloseMobile();
              }}
              className={`py-2 px-2 text-xs font-semibold transition-all rounded-md cursor-pointer flex flex-col items-center gap-1 active:scale-[0.98] ${
                userMode === 'patient'
                  ? 'bg-white dark:bg-neutral-800 text-black dark:text-white font-bold shadow-xs border border-neutral-300/80 dark:border-neutral-700'
                  : 'bg-white/40 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${userMode === 'patient' ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`} />
              <span className="text-[10px] leading-tight text-center">Sağlık Profesyoneli Değilim</span>
            </button>

            <button
              onClick={() => {
                onSwitchMode('professional');
                onCloseMobile();
              }}
              className={`py-2 px-2 text-xs font-semibold transition-all rounded-md cursor-pointer flex flex-col items-center gap-1 active:scale-[0.98] ${
                userMode === 'professional'
                  ? 'bg-white dark:bg-neutral-800 text-black dark:text-white font-bold shadow-xs border border-neutral-300/80 dark:border-neutral-700'
                  : 'bg-white/40 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800'
              }`}
            >
              <Stethoscope className={`w-3.5 h-3.5 ${userMode === 'professional' ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`} />
              <span className="text-[10px] leading-tight text-center">Sağlık Profesyoneliyim</span>
            </button>
          </div>
        </div>

        {/* Global Quick Action Buttons inside Sidebar */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              onOpenSearch();
              onCloseMobile();
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-xs font-medium transition-all shadow-2xs active:translate-y-[1px] cursor-pointer rounded-lg"
            title="Arama (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
            <span>Hızlı Ara</span>
          </button>

          <button
            onClick={() => {
              onToggleBookmarks();
              onCloseMobile();
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-xs font-medium transition-all shadow-2xs active:translate-y-[1px] cursor-pointer relative rounded-lg"
            title="Sabitlenenler"
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
            <span>Sabitler</span>
            {savedBookmarksCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold font-mono shadow-xs">
                {savedBookmarksCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
        {userMode === 'patient' ? (
          <div className="space-y-3 p-2">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 px-1 py-1">
              <span>Bireysel & Aile Rehberi</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            </div>

            <div className="p-3 bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Psikiyatri Bilgileri & Kanıtlar</span>
              </div>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                WHO, TPD ve APA kılavuzları, 50 kritik gerçek, sık görülen hastalıklar ve mitler.
              </p>
            </div>

            <div className="p-3 bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                <Users className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Aile & Yakınlar Danışma</span>
              </div>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Ne söylenmeli / ne söylenmemeli, 4 kriz senaryosu, TMK 432 zorunlu yatış ve Google SSS.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onSwitchMode('professional');
                  onCloseMobile();
                }}
                className="w-full py-2.5 px-3 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black text-xs font-bold uppercase tracking-wider transition-all rounded-lg cursor-pointer flex items-center justify-center gap-2 shadow-xs active:translate-y-[1px]"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Sağlık Profesyoneli Moduna Geç</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 px-3 py-2">
              <span>Klinik Modüller</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            </div>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left p-3 flex items-start gap-3 transition-all cursor-pointer rounded-lg active:scale-[0.99] ${
                    isActive
                      ? 'bg-black dark:bg-white text-white dark:text-neutral-950 shadow-xs font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/70 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700/60'
                  }`}
                >
                  <div className={`mt-0.5 shrink-0 ${isActive ? 'text-white dark:text-neutral-950' : 'text-neutral-500 dark:text-neutral-400'}`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-xs font-bold truncate ${isActive ? 'text-white dark:text-neutral-950 font-display' : 'text-neutral-900 dark:text-neutral-200'}`}>
                        <span className={`font-mono mr-1.5 ${isActive ? 'text-white/80 dark:text-neutral-700' : 'text-neutral-500 dark:text-neutral-400'}`}>
                          {item.orderNumber}.
                        </span>
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className={`text-[9px] px-1.5 py-0.2 font-mono uppercase tracking-wider shrink-0 rounded ${
                          isActive 
                            ? 'bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-950 font-semibold' 
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-neutral-300 dark:text-neutral-700 font-medium' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {item.subLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </>
        )}
      </div>

      {/* Sidebar Footer Credit, Theme Toggle & About Trigger */}
      <div className="p-4 border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#0c0d0f] space-y-2.5 relative z-10">
        <div className="flex items-center justify-between gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} showLabel={true} className="flex-1 justify-center py-2 text-xs" />
          <button
            onClick={() => {
              onOpenAbout();
              onCloseMobile();
            }}
            className="p-2 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg shadow-2xs cursor-pointer transition-colors active:scale-95"
            title="Sistem Hakkında & Kılavuzlar"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Dr. Doğuş Sönmez Credit Card */}
        <div className="p-3 bg-neutral-50 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-xs" />
              <span className="text-[10px] uppercase font-mono text-neutral-600 dark:text-neutral-400 tracking-wider font-semibold">
                Geliştirici & Editör:
              </span>
            </div>
            {/* Small diamond dot */}
            <div className="w-1.5 h-1.5 bg-black dark:bg-white transform rotate-45" />
          </div>
          <div className="font-bold text-xs text-neutral-900 dark:text-white mt-1 font-display tracking-wide flex items-center justify-between">
            <span>Dr. Doğuş Sönmez</span>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">© 2026</span>
          </div>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">
            Klinik Psikiyatri & Psikofarmakoloji Rehberi
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar (Side-by-side) */}
      <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-30 shadow-sm">
        {navContent}
      </aside>

      {/* Mobile Drawer Backdrop and Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex animate-in fade-in duration-200">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
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
