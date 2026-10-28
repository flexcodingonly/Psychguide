import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  Compass, 
  AlertTriangle, 
  ClipboardCheck, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Filter 
} from 'lucide-react';
import { DISORDERS_DATA } from '../data/disordersData';
import { CLINICAL_GUIDELINES_DATA } from '../data/guidelinesData';
import { DRUG_INTERACTIONS_DATA } from '../data/interactionsData';
import { MSE_DATA } from '../data/mseData';
import { SCALES_DATA } from '../data/scalesData';
import { NavSection } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: NavSection, targetId?: string) => void;
}

type SearchCategory = 'all' | 'guidelines' | 'disorders' | 'interactions' | 'mse' | 'scales';

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedCategory('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const normalizedQuery = query.toLowerCase().trim();

  const matchedGuidelines = useMemo(() => {
    if (!normalizedQuery) return [];
    return CLINICAL_GUIDELINES_DATA.filter(g => 
      g.title.toLowerCase().includes(normalizedQuery) ||
      g.shortTitle?.toLowerCase().includes(normalizedQuery) ||
      g.category.toLowerCase().includes(normalizedQuery) ||
      g.sourceReference.toLowerCase().includes(normalizedQuery) ||
      g.executiveSummary.toLowerCase().includes(normalizedQuery)
    ).slice(0, 5);
  }, [normalizedQuery]);

  const matchedDisorders = useMemo(() => {
    if (!normalizedQuery) return [];
    return DISORDERS_DATA.filter(d => 
      d.name.toLowerCase().includes(normalizedQuery) ||
      d.category.toLowerCase().includes(normalizedQuery) ||
      d.dsmCode.toLowerCase().includes(normalizedQuery) ||
      d.summary.toLowerCase().includes(normalizedQuery)
    ).slice(0, 5);
  }, [normalizedQuery]);

  const matchedInteractions = useMemo(() => {
    if (!normalizedQuery) return [];
    return DRUG_INTERACTIONS_DATA.filter(i => 
      i.title.toLowerCase().includes(normalizedQuery) ||
      i.drugA.toLowerCase().includes(normalizedQuery) ||
      i.drugB.toLowerCase().includes(normalizedQuery) ||
      i.clinicalRisk.toLowerCase().includes(normalizedQuery) ||
      i.mechanism.toLowerCase().includes(normalizedQuery)
    ).slice(0, 4);
  }, [normalizedQuery]);

  const matchedMseTerms = useMemo(() => {
    if (!normalizedQuery) return [];
    const results: { term: string; definition: string; groupTitle: string }[] = [];
    MSE_DATA.forEach(g => {
      g.options.forEach(item => {
        if (
          item.term.toLowerCase().includes(normalizedQuery) ||
          item.definition.toLowerCase().includes(normalizedQuery)
        ) {
          results.push({
            term: item.term,
            definition: item.definition,
            groupTitle: g.title
          });
        }
      });
    });
    return results.slice(0, 4);
  }, [normalizedQuery]);

  const matchedScales = useMemo(() => {
    if (!normalizedQuery) return [];
    return SCALES_DATA.filter(s =>
      s.code.toLowerCase().includes(normalizedQuery) ||
      s.name.toLowerCase().includes(normalizedQuery) ||
      s.targetCondition.toLowerCase().includes(normalizedQuery)
    ).slice(0, 3);
  }, [normalizedQuery]);

  const totalResults = 
    matchedGuidelines.length + 
    matchedDisorders.length + 
    matchedInteractions.length + 
    matchedMseTerms.length + 
    matchedScales.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-start justify-center pt-12 sm:pt-20 px-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white shadow-2xl border border-neutral-200 overflow-hidden text-neutral-900 flex flex-col max-h-[85vh] rounded-xl">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-neutral-200 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Kılavuz, ilaç etkileşimi, semptom veya muayene terimi ara (örn. Lityum, Mani, Klonus, Yıkama süresi)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none text-neutral-900 placeholder-neutral-400 text-sm sm:text-base focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-neutral-600 bg-neutral-100 border border-neutral-200 rounded">
            ESC
          </kbd>
        </div>

        {/* Category Filters Bar */}
        <div className="px-4 py-2.5 border-b border-neutral-200 bg-[#f5f5f7] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-mono uppercase text-neutral-500 mr-1 flex items-center gap-1 font-semibold">
            <Filter className="w-3 h-3 text-neutral-700" />
            <span>Filtre:</span>
          </span>
          {[
            { id: 'all', label: 'Tümü' },
            { id: 'guidelines', label: 'Rehberler' },
            { id: 'disorders', label: 'Tanılar' },
            { id: 'interactions', label: 'Etkileşimler' },
            { id: 'mse', label: 'Ruhsal Muayene' },
            { id: 'scales', label: 'Ölçekler' }
          ].map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as SearchCategory)}
              className={`px-3 py-1 text-[11px] font-semibold transition-all whitespace-nowrap cursor-pointer rounded-md border ${
                selectedCategory === cat.id
                  ? 'bg-black border-black text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-black border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {!query ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-10 h-10 bg-neutral-100 border border-neutral-300 text-neutral-900 flex items-center justify-center mx-auto transform rotate-45 shadow-xs">
                <Sparkles className="w-5 h-5 transform -rotate-45" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-neutral-900 font-display">
                Gelişmiş Akademik Psikiyatri Arama Portalı
              </p>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                İlaç adları (örn: Klozapin, Lityum, Valproat), klinik semptomlar (katatoni, akatizi, mani) veya kılavuz algoritmalarını hızla arayın.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
                {['CANMAT Depresyon', 'Lityum NSAİİ', 'Klozapin Toksisitesi', 'Bipolar Mani Algoritması', 'Serotonin Sendromu', 'Akatizi'].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="text-[11px] px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-black border border-neutral-200 transition-all cursor-pointer rounded-md"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-xs text-neutral-500">
              &quot;{query}&quot; ile eşleşen bir kılavuz, tanı veya ilaç etkileşimi bulunamadı.
            </div>
          ) : (
            <>
              {/* Guidelines Results */}
              {(selectedCategory === 'all' || selectedCategory === 'guidelines') && matchedGuidelines.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Klinik Tedavi Kılavuzları & Algoritmalar ({matchedGuidelines.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedGuidelines.map(g => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => {
                          onNavigate('treatments', g.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-200 bg-neutral-50 hover:border-neutral-400 hover:bg-white transition-all cursor-pointer flex items-center justify-between group rounded-lg shadow-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black font-display">
                              {g.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-white text-neutral-700 border border-neutral-200 font-mono rounded">
                              {g.sourceReference}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                            {g.executiveSummary}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Disorders Results */}
              {(selectedCategory === 'all' || selectedCategory === 'disorders') && matchedDisorders.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-neutral-800" />
                      <span>DSM-5-TR Tanı Ölçütleri ({matchedDisorders.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedDisorders.map(d => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => {
                          onNavigate('disorders', d.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-200 bg-neutral-50 hover:border-neutral-400 hover:bg-white transition-all cursor-pointer flex items-center justify-between group rounded-lg shadow-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black font-display">
                              {d.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-white text-neutral-700 border border-neutral-200 font-mono rounded">
                              {d.dsmCode}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                            {d.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactions Results */}
              {(selectedCategory === 'all' || selectedCategory === 'interactions') && matchedInteractions.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      <span>İlaç Etkileşimleri & Toksisite ({matchedInteractions.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedInteractions.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          onNavigate('tables');
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-200 bg-neutral-50 hover:border-neutral-400 hover:bg-white transition-all cursor-pointer flex items-center justify-between group rounded-lg shadow-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black font-display">
                              {item.title}
                            </span>
                            <span className={`text-[10px] px-1.5 py-0.5 font-mono font-bold rounded ${
                              item.severity === 'contraindicated' 
                                ? 'bg-red-600 text-white font-bold' 
                                : 'bg-neutral-200 text-neutral-800'
                            }`}>
                              {item.severity === 'contraindicated' ? 'KONTRENDİKE' : 'MAJÖR RİSK'}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                            {item.drugA} + {item.drugB}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* MSE Results */}
              {(selectedCategory === 'all' || selectedCategory === 'mse') && matchedMseTerms.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <ClipboardCheck className="w-3.5 h-3.5 text-neutral-800" />
                      <span>Ruhsal Durum Muayenesi (MSE) Terimleri ({matchedMseTerms.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedMseTerms.map((m, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          onNavigate('assessment');
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-200 bg-neutral-50 hover:border-neutral-400 hover:bg-white transition-all cursor-pointer flex items-center justify-between group rounded-lg shadow-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black font-display">
                              {m.term}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-white text-neutral-600 border border-neutral-200 font-mono rounded">
                              {m.groupTitle}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                            {m.definition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Scales Results */}
              {(selectedCategory === 'all' || selectedCategory === 'scales') && matchedScales.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-neutral-800" />
                      <span>Klinik Psikiyatri Ölçekleri ({matchedScales.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedScales.map(s => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          onNavigate('scales', s.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-200 bg-neutral-50 hover:border-neutral-400 hover:bg-white transition-all cursor-pointer flex items-center justify-between group rounded-lg shadow-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black font-display">
                              {s.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-white text-neutral-700 border border-neutral-200 font-mono rounded">
                              {s.code}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                            {s.targetCondition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
