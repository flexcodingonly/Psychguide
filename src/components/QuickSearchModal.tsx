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

  // Search in Guidelines
  const matchedGuidelines = useMemo(() => {
    if (!normalizedQuery) return [];
    return CLINICAL_GUIDELINES_DATA.filter(g => 
      g.title.toLowerCase().includes(normalizedQuery) ||
      g.shortTitle.toLowerCase().includes(normalizedQuery) ||
      g.category.toLowerCase().includes(normalizedQuery) ||
      g.sourceReference.toLowerCase().includes(normalizedQuery) ||
      g.executiveSummary.toLowerCase().includes(normalizedQuery) ||
      g.corePrinciples.some(p => p.toLowerCase().includes(normalizedQuery)) ||
      g.algorithmSteps.some(s => 
        s.stepTitle.toLowerCase().includes(normalizedQuery) ||
        s.recommendation.toLowerCase().includes(normalizedQuery) ||
        s.options.some(o => o.name.toLowerCase().includes(normalizedQuery) || o.clinicalNote.toLowerCase().includes(normalizedQuery))
      )
    ).slice(0, 4);
  }, [normalizedQuery]);

  // Search in Disorders
  const matchedDisorders = useMemo(() => {
    if (!normalizedQuery) return [];
    return DISORDERS_DATA.filter(d => 
      d.name.toLowerCase().includes(normalizedQuery) ||
      d.dsmCode.toLowerCase().includes(normalizedQuery) ||
      d.category.toLowerCase().includes(normalizedQuery) ||
      d.summary.toLowerCase().includes(normalizedQuery) ||
      d.coreCriteria.some(c => c.toLowerCase().includes(normalizedQuery)) ||
      d.differentialDiagnosis.some(diff => diff.condition.toLowerCase().includes(normalizedQuery) || diff.distinguishingFeatures.toLowerCase().includes(normalizedQuery))
    ).slice(0, 4);
  }, [normalizedQuery]);

  // Search in Interactions
  const matchedInteractions = useMemo(() => {
    if (!normalizedQuery) return [];
    return DRUG_INTERACTIONS_DATA.filter(i => 
      i.drugA.toLowerCase().includes(normalizedQuery) ||
      i.drugB.toLowerCase().includes(normalizedQuery) ||
      i.title.toLowerCase().includes(normalizedQuery) ||
      i.mechanism.toLowerCase().includes(normalizedQuery) ||
      i.clinicalRisk.toLowerCase().includes(normalizedQuery) ||
      i.management.toLowerCase().includes(normalizedQuery)
    ).slice(0, 4);
  }, [normalizedQuery]);

  // Search in MSE
  const matchedMseTerms = useMemo(() => {
    if (!normalizedQuery) return [];
    const list: { term: string; groupTitle: string; definition: string }[] = [];
    MSE_DATA.forEach(group => {
      group.options.forEach(opt => {
        if (
          opt.term.toLowerCase().includes(normalizedQuery) || 
          opt.definition.toLowerCase().includes(normalizedQuery) ||
          group.title.toLowerCase().includes(normalizedQuery)
        ) {
          if (list.length < 4) {
            list.push({ term: opt.term, groupTitle: group.title, definition: opt.definition });
          }
        }
      });
    });
    return list;
  }, [normalizedQuery]);

  // Search in Scales
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#0d0d0d] shadow-2xl border border-neutral-800 overflow-hidden text-white flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-neutral-800 bg-black flex items-center gap-3">
          <Search className="w-5 h-5 text-red-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Kılavuz, ilaç etkileşimi, semptom veya muayene terimi ara (örn. Lityum, Mani, Klonus, Yıkama süresi)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none text-white placeholder-neutral-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-neutral-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-700">
            ESC
          </kbd>
        </div>

        {/* Category Filters Bar */}
        <div className="px-4 py-2 border-b border-neutral-800 bg-[#111111] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-mono uppercase text-neutral-500 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" />
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
              className={`px-2.5 py-1 text-[11px] font-bold transition-colors whitespace-nowrap cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-black text-neutral-400 hover:text-white border-neutral-800'
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
              <div className="w-10 h-10 bg-red-950/60 border border-red-800 text-red-500 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-200">
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
                    className="text-[11px] px-2 py-1 bg-black hover:bg-neutral-900 text-neutral-400 hover:text-red-400 border border-neutral-800 transition-colors cursor-pointer"
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
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
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
                          onNavigate('guidelines', g.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-800 bg-[#121212] hover:border-red-600 transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400">
                              {g.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-red-950 text-red-400 border border-red-800 font-mono">
                              {g.sourceReference}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {g.executiveSummary}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-red-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Disorders Results */}
              {(selectedCategory === 'all' || selectedCategory === 'disorders') && matchedDisorders.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-red-500" />
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
                        className="w-full text-left p-3 border border-neutral-800 bg-[#121212] hover:border-red-600 transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400">
                              {d.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-700 font-mono">
                              {d.dsmCode}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {d.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-red-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactions Results */}
              {(selectedCategory === 'all' || selectedCategory === 'interactions') && matchedInteractions.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>İlaç Etkileşimleri & Toksisite ({matchedInteractions.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedInteractions.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          onNavigate('interactions');
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-800 bg-[#121212] hover:border-red-600 transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400">
                              {item.title}
                            </span>
                            <span className={`text-[10px] px-1.5 py-0.5 font-mono font-bold ${
                              item.severity === 'contraindicated' 
                                ? 'bg-red-950 text-red-300 border border-red-800' 
                                : 'bg-red-900/40 text-red-300 border border-red-700'
                            }`}>
                              {item.severity === 'contraindicated' ? 'KONTRENDİKE' : 'MAJÖR RİSK'}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {item.drugA} + {item.drugB}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-red-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* MSE Results */}
              {(selectedCategory === 'all' || selectedCategory === 'mse') && matchedMseTerms.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <ClipboardCheck className="w-3.5 h-3.5 text-red-500" />
                      <span>Ruhsal Durum Muayenesi (MSE) Terimleri ({matchedMseTerms.length})</span>
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedMseTerms.map((m, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          onNavigate('mse');
                          onClose();
                        }}
                        className="w-full text-left p-3 border border-neutral-800 bg-[#121212] hover:border-red-600 transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400">
                              {m.term}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-black text-neutral-400 border border-neutral-800">
                              {m.groupTitle}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {m.definition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-red-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Scales Results */}
              {(selectedCategory === 'all' || selectedCategory === 'scales') && matchedScales.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-red-500" />
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
                        className="w-full text-left p-3 border border-neutral-800 bg-[#121212] hover:border-red-600 transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400">
                              {s.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-red-950 text-red-400 border border-red-800 font-mono">
                              {s.code}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {s.targetCondition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-red-500 shrink-0" />
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
