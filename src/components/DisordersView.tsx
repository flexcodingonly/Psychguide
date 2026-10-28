import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck,
  Copy,
  Check
} from 'lucide-react';
import { DISORDERS_DATA } from '../data/disordersData';
import { Disorder } from '../types';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';

interface DisordersViewProps {
  selectedDisorderId?: string;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string, type: 'disorder' | 'medication' | 'guideline') => void;
}

export const DisordersView: React.FC<DisordersViewProps> = ({
  selectedDisorderId,
  bookmarkedIds = [],
  onToggleBookmark
}) => {
  const [activeDisorderId, setActiveDisorderId] = useState<string>(
    selectedDisorderId || DISORDERS_DATA[0]?.id || ''
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [activeTab, setActiveTab] = useState<'criteria' | 'differential' | 'treatment' | 'pearls'>('criteria');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync if selectedDisorderId prop changes externally
  React.useEffect(() => {
    if (selectedDisorderId) {
      setActiveDisorderId(selectedDisorderId);
    }
  }, [selectedDisorderId]);

  // Unique categories for filter pills
  const categories = useMemo(() => {
    const cats = Array.from(new Set(DISORDERS_DATA.map((d) => d.category)));
    return ['Tümü', ...cats];
  }, []);

  // Filtered disorders list
  const filteredDisorders = useMemo(() => {
    return DISORDERS_DATA.filter((disorder) => {
      const matchesCategory =
        selectedCategory === 'Tümü' || disorder.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        disorder.name.toLowerCase().includes(q) ||
        disorder.dsmCode.toLowerCase().includes(q) ||
        disorder.icd11Code.toLowerCase().includes(q) ||
        disorder.summary.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeDisorder = useMemo(() => {
    return (
      DISORDERS_DATA.find((d) => d.id === activeDisorderId) ||
      filteredDisorders[0] ||
      DISORDERS_DATA[0]
    );
  }, [activeDisorderId, filteredDisorders]);

  const handleCopyCriteria = (disorder: Disorder) => {
    const text = `PSYCHDS Tanı Notu:
Tanı: ${disorder.name} (DSM-5-TR: ${disorder.dsmCode} | ICD-11: ${disorder.icd11Code})
Süre Kriteri: ${disorder.durationRequired}
Özet: ${disorder.summary}

Temel Kriterler:
${disorder.coreCriteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}

Dışlama:
${disorder.exclusions.map((e) => `- ${e}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopiedId(disorder.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isBookmarked = (bookmarkedIds || []).includes(activeDisorder.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
            <BookOpen className="w-3.5 h-3.5 text-neutral-900" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">DSM-5-TR</span>
              <span className="text-neutral-300">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                Tanı Ölçütleri & Ayırıcı Tanı Kılavuzu
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
              22 Ana Tanı: Tam semptom kriterleri, süre şartları, dışlama kuralları ve ayırıcı tanı tabloları.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium border border-neutral-200/80">
            22 Klinik Tanı
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3 sm:p-4 border border-neutral-200 shadow-xl flex flex-col md:flex-row gap-3 items-center justify-between rounded-xl">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tanı veya DSM kodu ara..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-lg"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          <Filter className="w-3.5 h-3.5 text-neutral-500 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border rounded-lg ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-50 text-neutral-600 hover:text-black hover:bg-neutral-100 border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Master-Detail Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Disorders Sidebar List */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredDisorders.length === 0 ? (
            <div className="p-6 text-center text-neutral-500 bg-white border border-neutral-200 text-xs rounded-lg">
              Aramanızla eşleşen tanı ölçütü bulunamadı.
            </div>
          ) : (
            filteredDisorders.map((disorder) => {
              const isSelected = activeDisorder.id === disorder.id;
              const hasBookmark = bookmarkedIds.includes(disorder.id);
              return (
                <div
                  key={disorder.id}
                  onClick={() => {
                    setActiveDisorderId(disorder.id);
                    if (window.innerWidth < 1024) {
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }
                  }}
                  className={`p-3.5 border transition-all cursor-pointer text-left rounded-lg ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider font-mono ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-500'
                    }`}>
                      {disorder.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasBookmark && <BookmarkCheck className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-600'}`} />}
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 border rounded-lg ${
                        isSelected 
                          ? 'bg-neutral-800 text-white border-neutral-700' 
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                      }`}>
                        {disorder.dsmCode}
                      </span>
                    </div>
                  </div>
                  <h3 className={`font-semibold text-sm mt-1 line-clamp-1 font-display ${
                    isSelected ? 'text-white font-bold' : 'text-neutral-900'
                  }`}>
                    {disorder.name}
                  </h3>
                  <p className={`text-xs line-clamp-2 mt-1 ${
                    isSelected ? 'text-neutral-300' : 'text-neutral-500'
                  }`}>
                    {disorder.summary}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Full Detail Card */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 shadow-2xl overflow-hidden rounded-xl">
          {/* Header of Active Disorder */}
          <div className="p-5 sm:p-6 border-b border-neutral-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono rounded-lg">
                  DSM-5-TR: {activeDisorder.dsmCode}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200 font-mono rounded-lg">
                  ICD-11: {activeDisorder.icd11Code}
                </span>
                <span className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200 font-medium rounded-lg">
                  {activeDisorder.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleBookmark(activeDisorder.id, 'disorder')}
                  className={`p-2 border transition-colors cursor-pointer rounded-lg ${
                    isBookmarked
                      ? 'bg-black text-white border-black'
                      : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                  title={isBookmarked ? 'Vizit Listesinden Çıkar' : 'Vizit Listesine Ekle'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyCriteria(activeDisorder)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-neutral-100 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 transition-colors cursor-pointer rounded-lg"
                  title="Epikriz formatında kopyala"
                >
                  {copiedId === activeDisorder.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-neutral-800" />
                      <span className="text-neutral-900 font-semibold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Tanıyı Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-display">
              {activeDisorder.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed">
              {activeDisorder.summary}
            </p>

            {/* Time / Duration callout */}
            <div className="mt-3 p-3 bg-neutral-50 border border-neutral-300 flex items-center gap-2 text-xs text-neutral-800 rounded-lg">
              <AlertCircle className="w-4 h-4 text-neutral-800 shrink-0" />
              <span><strong>Zaman & Süre Kriteri:</strong> {activeDisorder.durationRequired}</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-neutral-200 bg-white px-4 sm:px-6 overflow-x-auto scrollbar-none gap-2">
            <button
              onClick={() => setActiveTab('criteria')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'criteria'
                  ? 'border-white text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Tanı Ölçütleri & Belirleyiciler
            </button>
            <button
              onClick={() => setActiveTab('differential')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'differential'
                  ? 'border-white text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Ayırıcı Tanı Tablosu ({activeDisorder.differentialDiagnosis.length})
            </button>
            <button
              onClick={() => setActiveTab('treatment')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'treatment'
                  ? 'border-white text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              İlk Seçenek Tedaviler ({activeDisorder.firstLineTreatments.length})
            </button>
            <button
              onClick={() => setActiveTab('pearls')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'pearls'
                  ? 'border-white text-neutral-900 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Klinik İpuçları (Pearls)
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 sm:p-6">
            {/* Criteria Tab */}
            {activeTab === 'criteria' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-neutral-800" />
                    <span>Temel Tanı Kriterleri (DSM-5-TR)</span>
                  </h3>
                  <div className="space-y-2">
                    {activeDisorder.coreCriteria.map((criterion, idx) => (
                      <div key={idx} className="p-3 bg-white border border-neutral-200 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 rounded-lg">
                        <span className="w-5 h-5 bg-neutral-100 text-neutral-900 font-semibold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-neutral-300 rounded-lg font-mono">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2 flex items-center gap-1.5 font-mono">
                    <AlertCircle className="w-4 h-4 text-neutral-800" />
                    <span>Dışlama Kriterleri (Exclusions)</span>
                  </h3>
                  <div className="space-y-1.5">
                    {activeDisorder.exclusions.map((exclusion, idx) => (
                      <div key={idx} className="p-2.5 bg-neutral-50 border border-neutral-300 text-xs text-neutral-800 flex items-start gap-2 rounded-lg">
                        <span className="font-bold text-neutral-900 shrink-0">!</span>
                        <span>{exclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtypes & Specifiers */}
                {activeDisorder.subtypesOrSpecifiers && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 font-mono">
                      Klinik Belirleyiciler & Alt Tipler (Specifiers)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeDisorder.subtypesOrSpecifiers.map((sub, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-neutral-50 text-neutral-700 border border-neutral-200 text-xs font-medium rounded-lg">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Differential Diagnosis Tab */}
            {activeTab === 'differential' && (
              <div className="space-y-3">
                <p className="text-xs text-neutral-500 mb-3">
                  Poliklinik ve acilde en sık karışabilen diğer klinik tablolar ve ayırt edici kilit özellikler:
                </p>
                {activeDisorder.differentialDiagnosis.map((item, idx) => (
                  <div key={idx} className="p-3.5 border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors rounded-lg">
                    <h4 className="font-semibold text-sm text-neutral-900 flex items-center gap-2 font-display">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      <span>{item.condition}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-700 mt-1.5 leading-relaxed pl-4">
                      {item.distinguishingFeatures}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Treatment Tab */}
            {activeTab === 'treatment' && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-500 mb-2">
                  Uluslararası kanıta dayalı psikiyatri kılavuzlarına (APA, CANMAT, NICE, WFSBP) göre birinci basamak öneriler:
                </p>
                {activeDisorder.firstLineTreatments.map((treatment, idx) => (
                  <div key={idx} className="p-4 border border-neutral-200 bg-white space-y-2 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-2.5 py-0.5 border border-neutral-300 rounded-lg font-mono">
                        {treatment.category}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 border border-neutral-200 flex items-center gap-1 rounded-lg">
                        <ShieldCheck className="w-3 h-3 text-neutral-800" />
                        {treatment.levelOfEvidence}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                      {treatment.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Clinical Pearls Tab */}
            {activeTab === 'pearls' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2 font-mono">
                  <Sparkles className="w-4 h-4 text-neutral-800" />
                  <span>Klinik Pratik İpuçları & Hekim Notları</span>
                </div>
                {activeDisorder.clinicalPearls.map((pearl, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-800 flex items-start gap-2.5 leading-relaxed rounded-lg">
                    <span className="w-5 h-5 bg-neutral-100 text-neutral-900 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-neutral-300 rounded-lg">
                      💡
                    </span>
                    <span>{pearl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
