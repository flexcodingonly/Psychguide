import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { QuickSearchModal } from './components/QuickSearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { AboutModal } from './components/AboutModal';
import { GuidelinesView } from './components/GuidelinesView';
import { DisordersView } from './components/DisordersView';
import { InteractionChecker } from './components/InteractionChecker';
import { MSETool } from './components/MSETool';
import { ClinicalTablesView } from './components/ClinicalTablesView';
import { ScalesView } from './components/ScalesView';
import { PsychodynamicsView } from './components/PsychodynamicsView';
import { AcademicReferencesView } from './components/AcademicReferencesView';
import { NavSection } from './types';
import { 
  Menu, 
  Search, 
  BookmarkCheck, 
  Stethoscope, 
  Info, 
  Compass, 
  ShieldAlert, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function App() {
  // Default to 1st section: Mental Status Exam as requested
  const [activeSection, setActiveSection] = useState<NavSection>('mse');
  const [selectedGuidelineId, setSelectedGuidelineId] = useState<string | undefined>(undefined);
  const [selectedDisorderId, setSelectedDisorderId] = useState<string | undefined>(undefined);
  const [selectedScaleId, setSelectedScaleId] = useState<string | undefined>(undefined);
  
  // Modals and Drawer state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bookmarks state with localStorage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('psychds_bookmarks');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return ['mdd-canmat', 'bipolar-canmat', 'mdd', 'bipolar1'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('psychds_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // fallback
    }
  }, [bookmarkedIds]);

  // Global keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleRemoveBookmark = (id: string) => {
    setBookmarkedIds(prev => prev.filter(item => item !== id));
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  const handleNavigate = (section: NavSection, targetId?: string) => {
    setActiveSection(section);
    if (section === 'guidelines' && targetId) {
      setSelectedGuidelineId(targetId);
    } else if (section === 'disorders' && targetId) {
      setSelectedDisorderId(targetId);
    } else if (section === 'scales' && targetId) {
      setSelectedScaleId(targetId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionTitles: Record<NavSection, { title: string; subtitle: string }> = {
    mse: {
      title: '1. RDM Muayene (Mental Status Exam)',
      subtitle: 'Psikiyatrik Semiyoloji & Dinamik Muayene Notu'
    },
    tables: {
      title: '2. Klinik Tablolar & Toksisite',
      subtitle: 'NMS/Serotonin Ayırıcı Tanı & Doz Eşdeğerlikleri'
    },
    disorders: {
      title: '3. Tanı Ölçütleri (DSM-5-TR)',
      subtitle: '17+ Ana Psikiyatrik Tablo & Ayırıcı Kriterler'
    },
    interactions: {
      title: '4. İlaç Etkileşimleri',
      subtitle: 'Medscape Çevrimiçi Araç & Dahili CYP450 Analizi'
    },
    scales: {
      title: '5. Klinik Ölçekler',
      subtitle: 'Yaygın Psikiyatrik Bozukluklar İçin İnteraktif Ölçekler'
    },
    psychodynamics: {
      title: '6. Psikodinamik Bölüm',
      subtitle: 'Savunma Mekanizmaları & Dinamik Formülasyon'
    },
    guidelines: {
      title: '7. Kılavuzlar & Algoritmalar',
      subtitle: 'PsychDB, CANMAT & Maudsley Basamakları'
    },
    references: {
      title: '8. Kaynakça & Literatür',
      subtitle: 'Akademik Kılavuzlar, FDA Uyarıları & Kanıt Düzeyleri'
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-red-600 selection:text-white flex flex-col">
      {/* Side-by-Side Persistent Menu for Desktop + Mobile Drawer */}
      <Sidebar
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        savedBookmarksCount={bookmarkedIds.length}
        onToggleBookmarks={() => setIsBookmarksOpen(prev => !prev)}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area (offset on lg by sidebar width 72 = 18rem) */}
      <div className="lg:pl-72 flex-1 flex flex-col min-w-0">
        {/* Mobile Header Bar */}
        <header className="lg:hidden sticky top-0 z-40 bg-[#0d0d0d] border-b border-neutral-800 px-4 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div 
              onClick={() => {
                setActiveSection('mse');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-7 h-7 bg-red-950 border border-red-600/80 text-red-500 flex items-center justify-center font-bold">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base tracking-wider text-white font-mono">PSYCHDS</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
              title="Arama (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-red-500" />
            </button>

            <button
              onClick={() => setIsBookmarksOpen(true)}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer relative"
              title="Sabitler"
            >
              <BookmarkCheck className="w-4 h-4 text-red-500" />
              {bookmarkedIds.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-600" />
              )}
            </button>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
              title="Hakkında"
            >
              <Info className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </header>

        {/* Desktop Top Sub-header / Status Strip */}
        <div className="hidden lg:flex items-center justify-between px-8 py-3 bg-[#0d0d0d] border-b border-neutral-800/80 text-xs">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="text-red-500 font-bold font-mono">PSYCHDS</span>
            <span>/</span>
            <span className="text-white font-medium">{sectionTitles[activeSection].title}</span>
            <span className="text-neutral-600 hidden xl:inline">—</span>
            <span className="text-neutral-500 hidden xl:inline">{sectionTitles[activeSection].subtitle}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-red-500" />
              <span>Hızlı Arama</span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-400">
                Ctrl+K
              </kbd>
            </button>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <Info className="w-3.5 h-3.5 text-red-500" />
              <span>Hakkında</span>
            </button>
          </div>
        </div>

        {/* Active Content Module */}
        <main className="flex-1">
          {activeSection === 'mse' && (
            <MSETool />
          )}

          {activeSection === 'tables' && (
            <ClinicalTablesView />
          )}

          {activeSection === 'disorders' && (
            <DisordersView
              selectedDisorderId={selectedDisorderId}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activeSection === 'interactions' && (
            <InteractionChecker />
          )}

          {activeSection === 'scales' && (
            <ScalesView selectedScaleId={selectedScaleId} />
          )}

          {activeSection === 'psychodynamics' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <PsychodynamicsView />
            </div>
          )}

          {activeSection === 'guidelines' && (
            <GuidelinesView
              selectedGuidelineId={selectedGuidelineId}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activeSection === 'references' && (
            <AcademicReferencesView />
          )}
        </main>

        {/* Global Footer (Black, White, Red with requested credentials & quotes) */}
        <footer className="mt-16 bg-[#0d0d0d] border-t border-neutral-800 text-neutral-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-red-950 border border-red-600/80 text-red-500 flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">
                    PSYCHDS Klinik & Akademik Psikiyatri Karar Destek Sistemi
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    PsychDB, DSM-5-TR, CANMAT & Maudsley Prescribing Guidelines referans alınarak yapılandırılmıştır.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black border border-neutral-800 text-red-400 font-mono">
                  <Compass className="w-3.5 h-3.5 text-red-500" />
                  <span>Kanıta Dayalı Algoritmalar</span>
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black border border-neutral-800 text-neutral-300 font-mono">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                  <span>DSM-5-TR & Medscape</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-neutral-400 leading-relaxed">
                  © 2026 PSYCHDS. Yalnızca tıp hekimleri, asistanlar ve tıp öğrencileri için klinik eğitim ve karar destek başvuru kaynağıdır.
                </p>
                <p className="font-bold text-white text-xs font-mono">
                  Dr. Doğuş Sönmez tarafından hazırlanmıştır.
                </p>
              </div>

              <button
                onClick={() => setIsAboutOpen(true)}
                className="px-3 py-1.5 bg-black hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-mono text-xs transition-colors cursor-pointer shrink-0"
              >
                Hakkında & Detaylar
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Modals & Drawers */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onRemoveBookmark={handleRemoveBookmark}
        onNavigate={handleNavigate}
        onClearAll={handleClearAllBookmarks}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
