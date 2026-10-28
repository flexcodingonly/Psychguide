import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Layers, 
  Stethoscope, 
  ShieldAlert, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck, 
  Copy, 
  Check, 
  ChevronRight, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import { CLINICAL_GUIDELINES_DATA } from '../data/guidelinesData';
import { ClinicalGuideline } from '../types';
import { copyToClipboard } from '../utils/clipboard';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';

interface GuidelinesViewProps {
  selectedGuidelineId?: string;
  bookmarkedIds?: string[];
  onToggleBookmark?: (id: string, type: 'disorder' | 'medication' | 'guideline') => void;
}

export const GuidelinesView: React.FC<GuidelinesViewProps> = ({
  selectedGuidelineId,
  bookmarkedIds = [],
  onToggleBookmark = (_id: string, _type?: string) => {}
}) => {
  const [activeGuidelineId, setActiveGuidelineId] = useState<string>(
    selectedGuidelineId || CLINICAL_GUIDELINES_DATA[0].id
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'algorithm' | 'workup' | 'resistance' | 'populations' | 'pearls'>('algorithm');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  React.useEffect(() => {
    if (selectedGuidelineId) {
      setActiveGuidelineId(selectedGuidelineId);
    }
  }, [selectedGuidelineId]);

  const categories = ['Hepsi', ...Array.from(new Set(CLINICAL_GUIDELINES_DATA.map(g => g.category)))];

  const filteredGuidelines = CLINICAL_GUIDELINES_DATA.filter(guideline => {
    const matchesCategory = selectedCategory === 'Hepsi' || guideline.category === selectedCategory;
    const matchesSearch = 
      guideline.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.algorithmSteps.some(step => 
        step.recommendation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        step.options.some(opt => opt.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCategory && matchesSearch;
  });

  const activeGuideline = CLINICAL_GUIDELINES_DATA.find(g => g.id === activeGuidelineId) || filteredGuidelines[0] || CLINICAL_GUIDELINES_DATA[0];

  const handleCopyGuideline = async (guideline: ClinicalGuideline) => {
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
      `PSYCHDS Klinik Psikiyatri Rehberi`;

    await copyToClipboard(text);
    setCopiedId(guideline.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isBookmarked = (bookmarkedIds || []).includes(activeGuideline.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header */}
      <div className="border border-neutral-200 bg-white p-5 sm:p-6 text-neutral-900 relative overflow-hidden shadow-2xl rounded-xl">
        <GeometricDiamondCornerOrnament className="absolute -top-4 -right-4 hidden sm:block" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs font-mono uppercase tracking-wider">
              <Compass className="w-4 h-4 text-neutral-800" />
              <span>Kanıta Dayalı Psikiyatri Kılavuzları & Algoritmalar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1 tracking-tight font-display">
              Klinik Uygulama ve Tedavi Rehberleri (Maudsley, APA, CANMAT & TPD)
            </h1>
            <p className="text-sm text-neutral-700 mt-1 max-w-2xl leading-relaxed">
              Basamaklı tedavi protokolleri, augmentasyon stratejileri, tedaviye direnç kriterleri ve klinik karar algoritmaları.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => handleCopyGuideline(activeGuideline)}
              className="flex items-center gap-1.5 px-3 py-2 bg-neutral-100 hover:bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200 hover:border-neutral-400 transition-colors shadow-sm cursor-pointer rounded-lg"
            >
              {copiedId === activeGuideline.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-neutral-800" />
                  <span className="text-neutral-900 font-bold">Kılavuz Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Kılavuzu Kopyala</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onToggleBookmark(activeGuideline.id, 'guideline')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border transition-colors shadow-sm cursor-pointer rounded-lg ${
                isBookmarked
                  ? 'bg-black text-white border-black'
                  : 'bg-neutral-100 hover:bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-black" />
                  <span>Listemde</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5 text-neutral-500" />
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
        <div className="lg:col-span-4 bg-white border border-neutral-200 shadow-xl p-4 space-y-4 rounded-xl">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Kılavuz veya ilaç ara (örn. Lityum, Mani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 pl-9 pr-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors rounded-lg"
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
                  className={`px-2.5 py-1 text-[11px] font-bold transition-colors cursor-pointer border rounded-lg ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-neutral-50 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border-neutral-200 hover:border-neutral-300'
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
                    className={`w-full text-left p-3 border transition-all cursor-pointer rounded-lg ${
                      isSelected
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                        : 'bg-white hover:bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 border font-mono rounded-lg ${
                            isSelected ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-neutral-100 text-neutral-700 border-neutral-200'
                          }`}>
                            {guideline.category}
                          </span>
                          {bookmarked && (
                            <BookmarkCheck className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-neutral-600'}`} />
                          )}
                        </div>
                        <h3 className={`text-xs sm:text-sm font-semibold truncate font-display ${
                          isSelected ? 'text-white font-bold' : 'text-neutral-900'
                        }`}>
                          {guideline.shortTitle}
                        </h3>
                        <p className={`text-[11px] line-clamp-2 mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {guideline.sourceReference}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 mt-1 ${
                        isSelected ? 'text-white' : 'text-neutral-400'
                      }`} />
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Active Guideline Details */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 shadow-xl p-5 sm:p-7 space-y-6 rounded-xl">
          {/* Header & Meta */}
          <div className="border-b border-neutral-200 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono rounded-lg">
                {activeGuideline.category}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono font-medium bg-neutral-100 text-neutral-700 border border-neutral-200 rounded-lg">
                {activeGuideline.sourceReference}
              </span>
              <span className="px-2 py-0.5 text-[11px] text-neutral-500 bg-neutral-50 border border-neutral-200 font-mono rounded-lg">
                {activeGuideline.lastUpdated}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display">
              {activeGuideline.title}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-800 mt-2 leading-relaxed bg-white p-3.5 border border-neutral-200 rounded-lg">
              <strong className="text-neutral-900">Yönetici Özeti: </strong>
              {activeGuideline.executiveSummary}
            </p>
          </div>

          {/* Sub-tabs Navigation */}
          <div className="flex border-b border-neutral-200 overflow-x-auto gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('algorithm')}
              className={`py-2 px-3 text-xs font-bold border-b-2 transition-colors shrink-0 cursor-pointer ${
                activeTab === 'algorithm'
                  ? 'border-neutral-900 text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
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
                  ? 'border-neutral-900 text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
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
                  ? 'border-neutral-900 text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
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
                  ? 'border-neutral-900 text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
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
                  ? 'border-neutral-900 text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
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
                  className="border border-neutral-200 bg-white p-5 space-y-4 shadow-lg rounded-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-white text-black font-extrabold flex items-center justify-center text-xs font-mono rounded-lg">
                        {step.stepNumber}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 font-display">
                        {step.stepTitle}
                      </h3>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 font-mono font-bold bg-neutral-100 text-neutral-800 border border-neutral-300 self-start sm:self-auto rounded-lg">
                      {step.evidenceGrade}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-700">
                    <span className="text-neutral-500 font-semibold">Endikasyon: </span>
                    {step.indication}
                  </div>

                  <div className="p-3 bg-neutral-50 border border-neutral-300 text-xs text-neutral-800 leading-relaxed font-medium rounded-lg">
                    <strong className="text-neutral-900">Rehber Önerisi: </strong>
                    {step.recommendation}
                  </div>

                  {/* Options Cards */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block font-mono">
                      Önerilen Ajanlar ve Doz Şeması:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.options.map((opt, idx) => (
                        <div 
                          key={idx}
                          className="p-3 bg-neutral-50 border border-neutral-200 text-xs space-y-1.5 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-neutral-900 font-display">{opt.name}</h4>
                            <span className="text-[10px] px-1.5 py-0.5 bg-white text-neutral-500 border border-neutral-200 font-mono rounded-lg">
                              {opt.classType}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-800 font-mono">
                            {opt.dosageGuide}
                          </p>
                          <p className="text-[11px] text-neutral-500 leading-normal">
                            {opt.clinicalNote}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Decision Points */}
                  <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500">
                      <Clock className="w-3.5 h-3.5 text-neutral-800" />
                      <span>Değişim Öncesi Değerlendirme Süresi: <strong className="text-neutral-800">{step.durationBeforeSwitch}</strong></span>
                    </div>
                  </div>

                  {step.decisionPoints.length > 0 && (
                    <div className="bg-neutral-50 p-3 border border-neutral-200 text-xs space-y-1 rounded-lg">
                      <span className="font-bold text-neutral-500 block mb-1 font-mono">Karar Noktaları & Sonraki Adım:</span>
                      {step.decisionPoints.map((dp, dpIdx) => (
                        <div key={dpIdx} className="flex items-start gap-1.5 text-neutral-700 text-[11px]">
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-800 shrink-0 mt-0.5" />
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
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2 font-mono">
                  <Stethoscope className="w-4 h-4 text-neutral-800" />
                  <span>Başlangıçta İstenmesi Gereken Rutin Tetkikler</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeGuideline.diagnosticWorkup.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2.5 p-3 bg-white border border-neutral-200 text-xs text-neutral-800 rounded-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-5">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2 font-mono">
                  <BookOpen className="w-4 h-4 text-neutral-800" />
                  <span>Temel Klinik Tedavi İlkeleri</span>
                </h3>
                <div className="space-y-2">
                  {activeGuideline.corePrinciples.map((principle, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-white border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2 rounded-lg"
                    >
                      <span className="w-5 h-5 bg-neutral-100 border border-neutral-300 text-neutral-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 font-mono rounded-lg">
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
              <div className="p-4 bg-neutral-50 border border-neutral-300 space-y-2 rounded-lg">
                <div className="flex items-center gap-2 text-neutral-900 font-bold text-xs uppercase tracking-wider font-mono">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Tedaviye Direnç Tanımı</span>
                </div>
                <p className="text-xs text-neutral-800 leading-relaxed">
                  {activeGuideline.treatmentResistance.definition}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-3 font-mono">
                  Direnç Saptandığında İzlenecek Adımlar:
                </h4>
                <div className="space-y-2">
                  {activeGuideline.treatmentResistance.nextSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-white border border-neutral-200 text-xs text-neutral-800 flex items-start gap-2.5 rounded-lg"
                    >
                      <ArrowRight className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
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
                    className="p-4 bg-white border border-neutral-200 space-y-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-neutral-800" />
                      <h4 className="text-xs font-bold text-neutral-900 font-display">{pop.population}</h4>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
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
                  className="p-4 bg-white border border-neutral-200 flex items-start gap-3 rounded-lg"
                >
                  <Sparkles className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
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
