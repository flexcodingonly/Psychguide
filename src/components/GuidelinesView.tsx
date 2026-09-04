import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  ChevronRight,
  Clock,
  BookOpen
} from 'lucide-react';
import { CLINICAL_GUIDELINES_DATA } from '../data/guidelinesData';
import { ClinicalGuideline } from '../types';

interface GuidelinesViewProps {
  selectedGuidelineId?: string;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string, type: 'guideline' | 'disorder' | 'medication') => void;
}

export const GuidelinesView: React.FC<GuidelinesViewProps> = ({
  selectedGuidelineId,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [activeGuidelineId, setActiveGuidelineId] = useState<string>(
    selectedGuidelineId || CLINICAL_GUIDELINES_DATA[0].id
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'algorithm' | 'workup' | 'resistance' | 'populations' | 'pearls'>('algorithm');

  const categories = ['Hepsi', ...Array.from(new Set(CLINICAL_GUIDELINES_DATA.map(g => g.category)))];

  const filteredGuidelines = CLINICAL_GUIDELINES_DATA.filter(g => {
    const matchesCategory = selectedCategory === 'Hepsi' || g.category === selectedCategory;
    const matchesSearch = 
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.sourceReference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.algorithmSteps.some(s => 
        s.stepTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.options.some(o => o.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCategory && matchesSearch;
  });

  const activeGuideline = CLINICAL_GUIDELINES_DATA.find(g => g.id === activeGuidelineId) || filteredGuidelines[0] || CLINICAL_GUIDELINES_DATA[0];

  const handleCopyGuideline = (guideline: ClinicalGuideline) => {
    const text = `=== ${guideline.title} ===\n` +
      `Kaynak: ${guideline.sourceReference} (${guideline.lastUpdated})\n\n` +
      `Özet: ${guideline.executiveSummary}\n\n` +
      `TEMEL İLKELER:\n${guideline.corePrinciples.map(p => `• ${p}`).join('\n')}\n\n` +
      `ALGORİTMA ADIMLARI:\n` +
      guideline.algorithmSteps.map(s => 
        `[Adım ${s.stepNumber}: ${s.stepTitle}]\n` +
        `Öneri: ${s.recommendation} (${s.evidenceGrade})\n` +
        `Seçenekler: ${s.options.map(o => `${o.name} - ${o.dosageGuide}`).join('; ')}\n` +
        `Değişim Öncesi Süre: ${s.durationBeforeSwitch}\n`
      ).join('\n') +
      `\nKlinik İnciler:\n${guideline.clinicalPearls.map(p => `• ${p}`).join('\n')}\n\n` +
      `PSYCHDS Klinik Karar Destek`;

    navigator.clipboard.writeText(text);
    setCopiedId(guideline.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isBookmarked = bookmarkedIds.includes(activeGuideline.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-semibold text-xs font-mono uppercase tracking-wider">
              <Compass className="w-4 h-4 text-red-500" />
              <span>Kanıta Dayalı Psikiyatri Kılavuzları & Algoritmalar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
              Klinik Uygulama ve Tedavi Rehberleri (PsychDB & CANMAT)
            </h1>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              Basamaklı tedavi protokolleri, augmentasyon stratejileri, tedaviye direnç kriterleri ve klinik karar algoritmaları.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => handleCopyGuideline(activeGuideline)}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#151515] hover:bg-neutral-800 text-neutral-200 text-xs font-semibold border border-neutral-800 transition-colors shadow-sm cursor-pointer"
            >
              {copiedId === activeGuideline.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-red-400 font-bold">Kılavuz Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Kılavuzu Kopyala</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onToggleBookmark(activeGuideline.id, 'guideline')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border transition-colors shadow-sm cursor-pointer ${
                isBookmarked
                  ? 'bg-red-950/70 border-red-600/80 text-red-300'
                  : 'bg-[#151515] hover:bg-neutral-800 border-neutral-800 text-neutral-300'
              }`}
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-red-500" />
                  <span>Listemde</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Rehberi Sabitle</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Sidebar + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Guidelines List & Filter */}
        <div className="lg:col-span-4 bg-[#0d0d0d] border border-neutral-800 shadow-md p-4 space-y-4">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Kılavuz veya ilaç ara (örn. Lityum, Mani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151515] border border-neutral-800 pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] font-bold transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-red-600 text-white border-red-500 shadow-sm'
                      : 'bg-[#151515] text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Guidelines list */}
          <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredGuidelines.length === 0 ? (
              <div className="p-6 text-center text-xs text-neutral-500">
                Aramanızla eşleşen klinik rehber bulunamadı.
              </div>
            ) : (
              filteredGuidelines.map((guideline) => {
                const isSelected = guideline.id === activeGuideline.id;
                const bookmarked = bookmarkedIds.includes(guideline.id);

                return (
                  <button
                    key={guideline.id}
                    onClick={() => {
                      setActiveGuidelineId(guideline.id);
                    }}
                    className={`w-full text-left p-3 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#161616] border-red-600 shadow-md'
                        : 'bg-[#111111] hover:bg-[#161616] border-neutral-800/80 text-neutral-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-neutral-900 text-red-400 border border-neutral-800 font-mono">
                            {guideline.category}
                          </span>
                          {bookmarked && (
                            <BookmarkCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          )}
                        </div>
                        <h3 className={`text-xs sm:text-sm font-semibold truncate ${
                          isSelected ? 'text-white font-bold' : 'text-neutral-200'
                        }`}>
                          {guideline.shortTitle}
                        </h3>
                        <p className="text-[11px] text-neutral-400 line-clamp-2 mt-0.5">
                          {guideline.sourceReference}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 mt-1 ${
                        isSelected ? 'text-red-500' : 'text-neutral-600'
                      }`} />
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Active Guideline Details */}
        <div className="lg:col-span-8 bg-[#0d0d0d] border border-neutral-800 shadow-md p-5 sm:p-7 space-y-6">
          {/* Header & Meta */}
          <div className="border-b border-neutral-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-red-950/80 text-red-400 border border-red-700/50 font-mono">
                {activeGuideline.category}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono font-medium bg-[#141414] text-neutral-300 border border-neutral-800">
                {activeGuideline.sourceReference}
              </span>
              <span className="px-2 py-0.5 text-[11px] text-neutral-400 bg-black border border-neutral-800 font-mono">
                {activeGuideline.lastUpdated}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeGuideline.title}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed bg-[#121212] p-3.5 border border-neutral-800">
              <strong className="text-red-400">Yönetici Özeti: </strong>
              {activeGuideline.executiveSummary}
            </p>
          </div>

          {/* Sub-tabs Navigation */}
          <div className="flex border-b border-neutral-800 overflow-x-auto gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('algorithm')}
              className={`py-2 px-3 text-xs font-bold border-b-2 transition-colors shrink-0 cursor-pointer ${
                activeTab === 'algorithm'
                  ? 'border-red-600 text-red-500'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Tedavi Algoritması ({activeGuideline.algorithmSteps.length} Adım)</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('workup')}
              className={`py-2 px-3 text-xs font-bold border-b-2 transition-colors shrink-0 cursor-pointer ${
                activeTab === 'workup'
                  ? 'border-red-600 text-red-500'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Tanısal Tetkikler & İlkeler</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('resistance')}
              className={`py-2 px-3 text-xs font-bold border-b-2 transition-colors shrink-0 cursor-pointer ${
                activeTab === 'resistance'
                  ? 'border-red-600 text-red-500'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Direnç Yönetimi & TRD</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('populations')}
              className={`py-2 px-3 text-xs font-bold border-b-2 transition-colors shrink-0 cursor-pointer ${
                activeTab === 'populations'
                  ? 'border-red-600 text-red-500'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Özel Popülasyonlar</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('pearls')}
              className={`py-2 px-3 text-xs font-bold border-b-2 transition-colors shrink-0 cursor-pointer ${
                activeTab === 'pearls'
                  ? 'border-red-600 text-red-500'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Klinik İnciler</span>
              </div>
            </button>
          </div>

          {/* Tab 1: Algorithm Steps */}
          {activeTab === 'algorithm' && (
            <div className="space-y-6">
              {activeGuideline.algorithmSteps.map((step) => (
                <div 
                  key={step.stepNumber}
                  className="border border-neutral-800 bg-[#101010] p-5 space-y-4 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-red-600 text-white font-extrabold flex items-center justify-center text-xs font-mono">
                        {step.stepNumber}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {step.stepTitle}
                      </h3>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 font-mono font-bold bg-neutral-900 text-red-400 border border-neutral-800 self-start sm:self-auto">
                      {step.evidenceGrade}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-300">
                    <span className="text-neutral-400 font-semibold">Endikasyon: </span>
                    {step.indication}
                  </div>

                  <div className="p-3 bg-red-950/40 border border-red-800/60 text-xs text-red-200 leading-relaxed font-medium">
                    <strong className="text-red-400">Rehber Önerisi: </strong>
                    {step.recommendation}
                  </div>

                  {/* Options Cards */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block font-mono">
                      Önerilen Ajanlar ve Doz Şeması:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.options.map((opt, idx) => (
                        <div 
                          key={idx}
                          className="p-3 bg-[#141414] border border-neutral-800 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-white">{opt.name}</h4>
                            <span className="text-[10px] px-1.5 py-0.5 bg-black text-neutral-400 border border-neutral-800 font-mono">
                              {opt.classType}
                            </span>
                          </div>
                          <p className="text-[11px] text-red-400 font-mono">
                            {opt.dosageGuide}
                          </p>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            {opt.clinicalNote}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Decision Points */}
                  <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>Değişim Öncesi Değerlendirme Süresi: <strong className="text-neutral-200">{step.durationBeforeSwitch}</strong></span>
                    </div>
                  </div>

                  {step.decisionPoints.length > 0 && (
                    <div className="bg-[#141414] p-3 border border-neutral-800 text-xs space-y-1">
                      <span className="font-bold text-neutral-400 block mb-1 font-mono">Karar Noktaları & Sonraki Adım:</span>
                      {step.decisionPoints.map((dp, dpIdx) => (
                        <div key={dpIdx} className="flex items-start gap-1.5 text-neutral-300 text-[11px]">
                          <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span>{dp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Diagnostic Workup & Principles */}
          {activeTab === 'workup' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 font-mono">
                  <Stethoscope className="w-4 h-4 text-red-500" />
                  <span>Başlangıçta İstenmesi Gereken Rutin Tetkikler</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeGuideline.diagnosticWorkup.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2.5 p-3 bg-[#121212] border border-neutral-800 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 font-mono">
                  <BookOpen className="w-4 h-4 text-red-500" />
                  <span>Temel Klinik Tedavi İlkeleri</span>
                </h3>
                <div className="space-y-2">
                  {activeGuideline.corePrinciples.map((principle, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-[#121212] border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2"
                    >
                      <span className="w-5 h-5 bg-black border border-neutral-700 text-red-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 font-mono">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Resistance Management */}
          {activeTab === 'resistance' && (
            <div className="space-y-5">
              <div className="p-4 bg-red-950/40 border border-red-800/60 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Tedaviye Direnç Tanımı</span>
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {activeGuideline.treatmentResistance.definition}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-3 font-mono">
                  Direnç Saptandığında İzlenecek Adımlar:
                </h4>
                <div className="space-y-2">
                  {activeGuideline.treatmentResistance.nextSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-[#121212] border border-neutral-800 text-xs text-neutral-200 flex items-start gap-2.5"
                    >
                      <ArrowRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Special Populations */}
          {activeTab === 'populations' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeGuideline.specialPopulations.map((pop, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-[#121212] border border-neutral-800 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <h4 className="text-xs font-bold text-white">{pop.population}</h4>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {pop.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Clinical Pearls */}
          {activeTab === 'pearls' && (
            <div className="space-y-3">
              {activeGuideline.clinicalPearls.map((pearl, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-[#121212] border border-red-900/40 flex items-start gap-3"
                >
                  <Sparkles className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                    {pearl}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
