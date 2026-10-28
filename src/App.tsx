import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { QuickSearchModal } from './components/QuickSearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { AboutModal } from './components/AboutModal';
import { PortalSelectModal } from './components/PortalSelectModal';
import { PatientGuideView } from './components/PatientGuideView';
import { ClinicalTablesView } from './components/ClinicalTablesView';
import { AssessmentMSEView } from './components/AssessmentMSEView';
import { ScalesView } from './components/ScalesView';
import { DisordersView } from './components/DisordersView';
import { TreatmentsView } from './components/TreatmentsView';
import { EmergencyPsychiatryView } from './components/EmergencyPsychiatryView';
import { SpecialAreasView } from './components/SpecialAreasView';
import { AcademicReferencesView } from './components/AcademicReferencesView';
import { ViralFeaturesBanner } from './components/ViralFeaturesBanner';
import { NavSection } from './types';
import { 
  MedicalNetworkBackground, 
  MedicalBrandLogo, 
  SlidePresentationHeader
} from './components/MedicalThemeDecorations';
import { ThemeToggle } from './components/ThemeToggle';
import { 
  Menu, 
  Search, 
  BookmarkCheck, 
  Stethoscope, 
  Info, 
  Compass, 
  ShieldAlert, 
  Sparkles,
  Heart,
  Repeat
} from 'lucide-react';

export default function App() {
  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('psychds_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('psychds_theme', theme);
      
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', theme === 'dark' ? '#0c0d0f' : '#ffffff');
      }
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Dual Entrance / Portal Mode: 'patient' (Sağlık Profesyoneli Değilim / Bireysel Rehber) vs 'professional' (Sağlık Profesyoneliyim / Klinik Portal)
  const [userMode, setUserMode] = useState<'patient' | 'professional'>(() => {
    try {
      const savedMode = localStorage.getItem('psychds_user_mode');
      if (savedMode === 'patient' || savedMode === 'professional') {
        return savedMode;
      }
    } catch {
      // fallback
    }
    return 'professional';
  });

  // Modal to select mode on initial landing or when user requests switch
  const [isPortalSelectOpen, setIsPortalSelectOpen] = useState<boolean>(() => {
    try {
      const savedMode = localStorage.getItem('psychds_user_mode');
      return !savedMode; // If first visit, show selection modal
    } catch {
      return false;
    }
  });

  // Default to 1st section: Tablolar & Hızlı Araçlar as requested
  const [activeSection, setActiveSection] = useState<NavSection>('tables');
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

  const handleSelectUserMode = (mode: 'patient' | 'professional') => {
    setUserMode(mode);
    try {
      localStorage.setItem('psychds_user_mode', mode);
    } catch {
      // fallback
    }
    setIsPortalSelectOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    if (userMode !== 'professional') {
      setUserMode('professional');
      try {
        localStorage.setItem('psychds_user_mode', 'professional');
      } catch {
        // fallback
      }
    }
    setActiveSection(section);
    if (section === 'disorders' && targetId) {
      setSelectedDisorderId(targetId);
    }
    if (section === 'scales' && targetId) {
      setSelectedScaleId(targetId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionTitles: Record<NavSection, { title: string; subtitle: string }> = {
    tables: {
      title: '1. Tablolar & Hızlı Araçlar',
      subtitle: 'CYP Matrisi, Doz, QT Hesaplayıcı, Renal/Hepatik, Eşdeğerlikler & Pratik Hesaplayıcılar'
    },
    assessment: {
      title: '2. Değerlendirme & MSE',
      subtitle: 'Psikiyatrik Görüşme, MSE Atlası, SAFE-T Risk Değerlendirmesi & Organik Work-up'
    },
    scales: {
      title: '3. Klinik Ölçekler & Skorlama',
      subtitle: 'Valide Edilmiş Psikiyatrik Ölçekler, Kesme Puanları & Otomatik Klinik Yorumlama'
    },
    disorders: {
      title: '4. Tanılar',
      subtitle: 'Hastalık Rehberleri, Ayırıcı Tanı, Klinik Özellikler & DSM/ICD Özetleri'
    },
    treatments: {
      title: '5. Tedaviler & İlaçlar',
      subtitle: 'İlaç Monografları, Psikoterapiler, EKT/TMS/Ketamin, Algoritmalar & Yan Etki Yönetimi'
    },
    emergency: {
      title: '6. Acil Psikiyatri',
      subtitle: 'Ajitasyon, Katatoni, Delirium, İntihar, Yoksunluk, NMS, Serotonin Sendromu & Toksisiteler'
    },
    special_areas: {
      title: '7. Diğer / Özel Alanlar',
      subtitle: 'CLP, Bağımlılık, Çocuk-Ergen, Geriatri, Gebelik-Emzirme, Uyku, Nöropsikiyatri & Adli'
    },
    references: {
      title: '8. Kaynakça & Literatür',
      subtitle: 'Maudsley, Stahl, Kaplan & Sadock, Oxford, APA, WHO & TPD Kılavuzları'
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#090a0c] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col relative overflow-x-hidden transition-colors duration-150">
      {/* Background Constellation & Neural Network Pattern */}
      <MedicalNetworkBackground />

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
        userMode={userMode}
        onSwitchMode={handleSelectUserMode}
        onOpenPortalSelect={() => setIsPortalSelectOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area (offset on lg by sidebar width 72 = 18rem) */}
      <div className="lg:pl-72 flex-1 flex flex-col min-w-0 relative z-10">
        {/* Mobile Header Bar */}
        <header className="lg:hidden sticky top-0 z-40 bg-white/95 dark:bg-[#111215]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-3.5 py-2.5 flex items-center justify-between shadow-xs transition-colors">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 -ml-1 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer touch-manipulation transition-colors active:scale-95"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div 
              onClick={() => {
                if (userMode === 'professional') {
                  setActiveSection('tables');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <MedicalBrandLogo size="sm" showText={true} />
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Theme Toggle for Mobile */}
            <ThemeToggle theme={theme} onToggle={toggleTheme} showLabel={false} />

            {/* Quick Mode Toggle for Mobile */}
            <button
              onClick={() => handleSelectUserMode(userMode === 'patient' ? 'professional' : 'patient')}
              className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-[11px] font-bold text-neutral-800 dark:text-neutral-200 rounded-lg flex items-center gap-1 cursor-pointer active:scale-95 transition-all shadow-2xs"
              title="Portalı Değiştir"
            >
              {userMode === 'patient' ? (
                <>
                  <Stethoscope className="w-3 h-3 text-neutral-900 dark:text-neutral-100" />
                  <span>Profesyonel</span>
                </>
              ) : (
                <>
                  <Heart className="w-3 h-3 text-neutral-900 dark:text-neutral-100" />
                  <span>Bireysel</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer touch-manipulation transition-colors active:scale-95"
              title="Arama (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            </button>

            <button
              onClick={() => setIsBookmarksOpen(true)}
              className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer relative touch-manipulation transition-colors active:scale-95"
              title="Sabitler"
            >
              <BookmarkCheck className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
              {bookmarkedIds.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-black dark:bg-white shadow-xs" />
              )}
            </button>
          </div>
        </header>

        {/* Desktop Top Sub-header / Status Strip (Tactile & Clean) */}
        <div className="hidden lg:flex items-center justify-between px-6 xl:px-8 py-2.5 bg-white/90 dark:bg-[#111215]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 text-xs transition-colors">
          <div className="flex items-center gap-2.5 text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5 font-bold font-mono text-neutral-900 dark:text-white">
              <div className="w-1.5 h-1.5 bg-black dark:bg-white transform rotate-45" />
              <span>PSYCHDS</span>
            </div>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            
            {userMode === 'patient' ? (
              <>
                <span className="text-neutral-900 dark:text-white font-display font-semibold text-sm">Bireysel & Aile Psikiyatri Danışma Portalı</span>
                <span className="text-neutral-300 dark:text-neutral-700 hidden xl:inline">—</span>
                <span className="text-neutral-600 dark:text-neutral-400 hidden xl:inline font-sans">Dr. Doğuş Sönmez • Aile Rehberi, Empatik İletişim, TPD & APA İlkeleri, Kriz Hatları (112, 182)</span>
              </>
            ) : (
              <>
                <span className="text-neutral-900 dark:text-white font-display font-semibold text-sm">{sectionTitles[activeSection].title}</span>
                <span className="text-neutral-300 dark:text-neutral-700 hidden xl:inline">—</span>
                <span className="text-neutral-600 dark:text-neutral-400 hidden xl:inline font-sans">{sectionTitles[activeSection].subtitle}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 xl:gap-3">
            {/* Apple-style Segmented Switch */}
            <div className="flex items-center bg-[#f5f5f7] dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-0.5 rounded-lg shadow-2xs">
              <button
                onClick={() => handleSelectUserMode('patient')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold transition-all rounded-md cursor-pointer active:scale-[0.98] ${
                  userMode === 'patient'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white shadow-2xs font-bold border border-neutral-200/80 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Sağlık Profesyoneli Değilim</span>
              </button>
              <button
                onClick={() => handleSelectUserMode('professional')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold transition-all rounded-md cursor-pointer active:scale-[0.98] ${
                  userMode === 'professional'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white shadow-2xs font-bold border border-neutral-200/80 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Sağlık Profesyoneliyim</span>
              </button>
            </div>

            {/* Quick Search Button (Tactile) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all cursor-pointer rounded-lg shadow-2xs active:translate-y-[1px]"
            >
              <Search className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
              <span>Hızlı Arama</span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">
                Ctrl+K
              </kbd>
            </button>

            {/* Theme Toggle (Tactile Sun/Moon Switcher in Top Right) */}
            <ThemeToggle theme={theme} onToggle={toggleTheme} showLabel={true} />

            {/* About Modal Trigger */}
            <button
              onClick={() => setIsAboutOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all cursor-pointer rounded-lg shadow-2xs active:translate-y-[1px]"
            >
              <Info className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
              <span>Hakkında</span>
            </button>
          </div>
        </div>

        {/* Section Presentation Header (Professional Mode Only to keep Patient View Compact) */}
        {userMode === 'professional' && (
          <SlidePresentationHeader 
            title={sectionTitles[activeSection].title}
            subtitle={sectionTitles[activeSection].subtitle}
            badge="Klinik Psikiyatri Rehberi"
          />
        )}

        {/* Active Content Module */}
        <main className="flex-1 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 max-w-7xl mx-auto w-full space-y-3">
          {/* Quick Viral Tools Highlight Bar */}
          <ViralFeaturesBanner
            userMode={userMode}
            onNavigateSection={handleNavigate}
            onSwitchUserMode={handleSelectUserMode}
          />

          {userMode === 'patient' ? (
            <PatientGuideView onSwitchToProfessional={() => handleSelectUserMode('professional')} />
          ) : (
            <>
              {activeSection === 'tables' && (
                <ClinicalTablesView />
              )}

              {activeSection === 'assessment' && (
                <AssessmentMSEView />
              )}

              {activeSection === 'scales' && (
                <ScalesView selectedScaleId={selectedScaleId} />
              )}

              {activeSection === 'disorders' && (
                <DisordersView
                  selectedDisorderId={selectedDisorderId}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              )}

              {activeSection === 'treatments' && (
                <TreatmentsView 
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              )}

              {activeSection === 'emergency' && (
                <EmergencyPsychiatryView />
              )}

              {activeSection === 'special_areas' && (
                <SpecialAreasView />
              )}

              {activeSection === 'references' && (
                <AcademicReferencesView />
              )}
            </>
          )}
        </main>

        {/* Global Footer (Apple Minimalist White & Charcoal + Dark Mode) */}
        <footer className="mt-16 bg-[#f5f5f7] dark:bg-[#0c0d0f] border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
              <div className="flex items-center gap-3">
                <MedicalBrandLogo size="md" showText={false} />
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white font-display">
                    PSYCHDS Klinik & Akademik Psikiyatri Bilgi Portalı
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Maudsley, Stahl, Kaplan & Sadock, Oxford, DSM-5-TR, APA, WHO ve TPD kılavuzları referans alınarak yapılandırılmıştır.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <button
                  onClick={() => setIsPortalSelectOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono rounded-lg shadow-2xs transition-all active:translate-y-[1px] cursor-pointer"
                >
                  <Repeat className="w-3.5 h-3.5" />
                  <span>Portalı Değiştir (Bireysel / Sağlık Profesyoneli)</span>
                </button>

                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono rounded-lg shadow-2xs">
                  <Compass className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
                  <span>Kanıta Dayalı Algoritmalar</span>
                </span>

                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono rounded-lg shadow-2xs">
                  <ShieldAlert className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
                  <span>DSM-5-TR & Medscape</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  © 2026 PSYCHDS. Eğitim, farkındalık ve bilimsel klinik kılavuz başvuru kaynağıdır. Acil durumlarda 112'yi arayınız.
                </p>
                <div className="flex items-center gap-2 pt-0.5 justify-center sm:justify-start">
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-xs" />
                  <span className="text-xs font-bold text-neutral-900 dark:text-white font-display bg-white dark:bg-neutral-900 px-2.5 py-0.5 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-2xs">
                    Dr. Doğuş Sönmez tarafından hazırlanmıştır.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsAboutOpen(true)}
                className="px-3.5 py-1.5 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 font-mono text-xs transition-all active:translate-y-[1px] cursor-pointer shrink-0 rounded-lg shadow-2xs"
              >
                Hakkında & Detaylar
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Dual Entrance Gateway Modal */}
      <PortalSelectModal
        isOpen={isPortalSelectOpen}
        onSelectMode={handleSelectUserMode}
      />

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
