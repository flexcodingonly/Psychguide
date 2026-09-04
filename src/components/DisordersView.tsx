import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck,
  Filter
} from 'lucide-react';
import { DISORDERS_DATA } from '../data/disordersData';
import { Disorder } from '../types';

interface DisordersViewProps {
  selectedDisorderId?: string;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string, type: 'disorder' | 'medication') => void;
}

export const DisordersView: React.FC<DisordersViewProps> = ({
  selectedDisorderId,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [activeDisorderId, setActiveDisorderId] = useState<string>(
    selectedDisorderId || DISORDERS_DATA[0].id
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'criteria' | 'differential' | 'treatment' | 'pearls'>('criteria');

  // Categories list
  const categories = ['Hepsi', ...Array.from(new Set(DISORDERS_DATA.map(d => d.category)))];

  // Filtered disorders
  const filteredDisorders = DISORDERS_DATA.filter(disorder => {
    const matchesCategory = selectedCategory === 'Hepsi' || disorder.category === selectedCategory;
    const matchesSearch = 
      disorder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disorder.dsmCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disorder.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeDisorder = DISORDERS_DATA.find(d => d.id === activeDisorderId) || filteredDisorders[0] || DISORDERS_DATA[0];

  const handleCopyCriteria = (disorder: Disorder) => {
    const text = `== ${disorder.name} (DSM-5-TR: ${disorder.dsmCode} | ICD-11: ${disorder.icd11Code}) ==\n` +
      `Süre Kriteri: ${disorder.durationRequired}\n\n` +
      `Temel Ölçütler:\n${disorder.coreCriteria.map(c => `• ${c}`).join('\n')}\n\n` +
      `Dışlama Kriterleri:\n${disorder.exclusions.map(e => `• ${e}`).join('\n')}\n\n` +
      `Birinci Basamak Tedavi:\n${disorder.firstLineTreatments.map(t => `• [${t.category}] ${t.recommendation} (${t.levelOfEvidence})`).join('\n')}\n\n` +
      `Kaynak: PSYCHDS / DSM-5-TR`;

    navigator.clipboard.writeText(text);
    setCopiedId(disorder.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isBookmarked = bookmarkedIds.includes(activeDisorder.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Section Header */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl mb-6">
        <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider font-mono">
          <BookOpen className="w-4 h-4 text-red-500" />
          <span>DSM-5-TR Tanı Ölçütleri & Klinik Kılavuz (22 Ana Tanı)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
          Tanı Ölçütleri & Ayırıcı Tanı
        </h1>
        <p className="text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
          Her tanı için tam DSM-5-TR semptom kriterleri, süre şartları, organik ve madde dışlama kuralları, 
          ayırıcı tanı tablosu ve birinci basamak kanıta dayalı tedavi algoritmaları.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0f0f0f] p-3 sm:p-4 border border-neutral-800 shadow-xl mb-6 flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tanı veya DSM kodu ara..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-black border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          <Filter className="w-3.5 h-3.5 text-neutral-500 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white border-red-500'
                  : 'bg-[#141414] text-neutral-400 hover:text-white border-neutral-800'
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
            <div className="p-6 text-center text-neutral-500 bg-[#0d0d0d] border border-neutral-800 text-xs">
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
                  className={`p-3.5 border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#161616] border-red-600 shadow-md'
                      : 'bg-[#0e0e0e] border-neutral-800 hover:border-neutral-700 hover:bg-[#121212]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400 font-mono">
                      {disorder.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasBookmark && <BookmarkCheck className="w-3.5 h-3.5 text-red-500" />}
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-black text-neutral-300 border border-neutral-800">
                        {disorder.dsmCode}
                      </span>
                    </div>
                  </div>
                  <h3 className={`font-semibold text-sm mt-1 line-clamp-1 ${isSelected ? 'text-white font-bold' : 'text-neutral-200'}`}>
                    {disorder.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                    {disorder.summary}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Full Detail Card */}
        <div className="lg:col-span-8 bg-[#0d0d0d] border border-neutral-800 shadow-2xl overflow-hidden">
          {/* Header of Active Disorder */}
          <div className="p-5 sm:p-6 border-b border-neutral-800 bg-[#111111]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-red-950 text-red-400 border border-red-800 font-mono">
                  DSM-5-TR: {activeDisorder.dsmCode}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-black text-neutral-300 border border-neutral-800 font-mono">
                  ICD-11: {activeDisorder.icd11Code}
                </span>
                <span className="text-xs px-2.5 py-1 bg-neutral-900 text-neutral-300 border border-neutral-700 font-medium">
                  {activeDisorder.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleBookmark(activeDisorder.id, 'disorder')}
                  className={`p-2 border transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-red-950 border-red-600 text-red-400'
                      : 'bg-[#141414] text-neutral-300 border-neutral-700 hover:bg-neutral-800'
                  }`}
                  title={isBookmarked ? 'Vizit Listesinden Çıkar' : 'Vizit Listesine Ekle'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyCriteria(activeDisorder)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#141414] hover:bg-neutral-800 text-neutral-200 border border-neutral-700 transition-colors cursor-pointer"
                  title="Epikriz formatında kopyala"
                >
                  {copiedId === activeDisorder.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-red-400 font-semibold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Tanıyı Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeDisorder.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              {activeDisorder.summary}
            </p>

            {/* Time / Duration callout */}
            <div className="mt-3 p-3 bg-red-950/40 border border-red-900/60 flex items-center gap-2 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span><strong>Zaman & Süre Kriteri:</strong> {activeDisorder.durationRequired}</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-neutral-800 bg-[#0a0a0a] px-4 sm:px-6 overflow-x-auto scrollbar-none gap-2">
            <button
              onClick={() => setActiveTab('criteria')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'criteria'
                  ? 'border-red-600 text-white font-bold'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Tanı Ölçütleri & Belirleyiciler
            </button>
            <button
              onClick={() => setActiveTab('differential')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'differential'
                  ? 'border-red-600 text-white font-bold'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Ayırıcı Tanı Tablosu ({activeDisorder.differentialDiagnosis.length})
            </button>
            <button
              onClick={() => setActiveTab('treatment')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'treatment'
                  ? 'border-red-600 text-white font-bold'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              İlk Seçenek Tedaviler ({activeDisorder.firstLineTreatments.length})
            </button>
            <button
              onClick={() => setActiveTab('pearls')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'pearls'
                  ? 'border-red-600 text-white font-bold'
                  : 'border-transparent text-neutral-400 hover:text-white'
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
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Temel Tanı Kriterleri (DSM-5-TR)</span>
                  </h3>
                  <div className="space-y-2">
                    {activeDisorder.coreCriteria.map((criterion, idx) => (
                      <div key={idx} className="p-3 bg-black border border-neutral-800 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <span className="w-5 h-5 bg-[#1a1a1a] text-red-400 font-semibold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-neutral-700">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Dışlama Kriterleri (Exclusions)</span>
                  </h3>
                  <div className="space-y-1.5">
                    {activeDisorder.exclusions.map((exclusion, idx) => (
                      <div key={idx} className="p-2.5 bg-red-950/30 border border-red-900/60 text-xs text-red-200 flex items-start gap-2">
                        <span className="font-bold text-red-400 shrink-0">!</span>
                        <span>{exclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtypes & Specifiers */}
                {activeDisorder.subtypesOrSpecifiers && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Klinik Belirleyiciler & Alt Tipler (Specifiers)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeDisorder.subtypesOrSpecifiers.map((sub, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-black text-neutral-300 border border-neutral-800 text-xs font-medium">
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
                <p className="text-xs text-neutral-400 mb-3">
                  Poliklinik ve acilde en sık karışabilen diğer klinik tablolar ve ayırt edici kilit özellikler:
                </p>
                {activeDisorder.differentialDiagnosis.map((item, idx) => (
                  <div key={idx} className="p-3.5 border border-neutral-800 bg-black hover:bg-neutral-900/60 transition-colors">
                    <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span>{item.condition}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed pl-4">
                      {item.distinguishingFeatures}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Treatment Tab */}
            {activeTab === 'treatment' && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-400 mb-2">
                  Uluslararası kanıta dayalı psikiyatri kılavuzlarına (APA, CANMAT, NICE, WFSBP) göre birinci basamak öneriler:
                </p>
                {activeDisorder.firstLineTreatments.map((treatment, idx) => (
                  <div key={idx} className="p-4 border border-neutral-800 bg-black space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-2.5 py-0.5 border border-red-800/60">
                        {treatment.category}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-300 bg-neutral-900 px-2 py-0.5 border border-neutral-700 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-red-500" />
                        {treatment.levelOfEvidence}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                      {treatment.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Clinical Pearls Tab */}
            {activeTab === 'pearls' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Klinik Pratik İpuçları & Hekim Notları</span>
                </div>
                {activeDisorder.clinicalPearls.map((pearl, idx) => (
                  <div key={idx} className="p-3.5 bg-black border border-neutral-800 text-xs sm:text-sm text-neutral-200 flex items-start gap-2.5 leading-relaxed">
                    <span className="w-5 h-5 bg-[#181818] text-red-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-neutral-700">
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
