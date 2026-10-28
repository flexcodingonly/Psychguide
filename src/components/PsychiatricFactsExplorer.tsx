import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Shuffle, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  BookOpen, 
  Search, 
  Filter, 
  Copy, 
  Check, 
  Share2, 
  Layers, 
  CheckCircle2, 
  Info,
  ExternalLink,
  Flame,
  Award,
  Globe
} from 'lucide-react';
import { PSYCHIATRIC_FACTS_50, PsychiatricFact } from '../data/psychiatricFactsData';

export const PsychiatricFactsExplorer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOrg, setSelectedOrg] = useState<'ALL' | 'WHO' | 'TPD' | 'APA'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllList, setShowAllList] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filter facts based on organization, category, and search query
  const filteredFacts = useMemo(() => {
    return PSYCHIATRIC_FACTS_50.filter(item => {
      if (selectedOrg !== 'ALL' && item.org !== selectedOrg) return false;
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchFact = item.fact.toLowerCase().includes(q);
        const matchDoc = item.sourceDoc.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        if (!matchTitle && !matchFact && !matchDoc && !matchCategory) return false;
      }
      return true;
    });
  }, [selectedOrg, selectedCategory, searchQuery]);

  // Ensure currentIndex is in bounds of filteredFacts
  const safeIndex = filteredFacts.length > 0 ? (currentIndex % filteredFacts.length) : 0;
  const currentFact: PsychiatricFact | undefined = filteredFacts[safeIndex];

  // Randomize / Shuffle
  const handleShuffle = () => {
    if (filteredFacts.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * filteredFacts.length);
    if (nextIdx === safeIndex) {
      nextIdx = (nextIdx + 1) % filteredFacts.length;
    }
    setCurrentIndex(nextIdx);
  };

  const handleNext = () => {
    if (filteredFacts.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredFacts.length);
  };

  const handlePrev = () => {
    if (filteredFacts.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredFacts.length) % filteredFacts.length);
  };

  const handleCopyFact = (fact: PsychiatricFact) => {
    const text = `📌 PSİKİYATRİ GERÇEĞİ #${fact.id} - ${fact.title}
"${fact.fact}"
• Ne Anlama Geliyor?: ${fact.implication}
• Resmi Kaynak: ${fact.orgName} (${fact.org}) - ${fact.sourceDoc}`;
    navigator.clipboard.writeText(text);
    setCopiedId(fact.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories = [
    'ALL',
    'Depresyon',
    'Bipolar',
    'Anksiyete & Panik',
    'Psikoz & Şizofreni',
    'İlaçlar & Tedavi',
    'Bağımlılık',
    'Kriz & İntihar Önleme',
    'Nörobiyoloji & Uyku'
  ];

  const getOrgBadge = (org: PsychiatricFact['org']) => {
    switch (org) {
      case 'WHO':
        return {
          label: 'DSÖ / WHO',
          full: 'Dünya Sağlık Örgütü',
          badgeClass: 'bg-blue-100 text-blue-900 border-blue-300'
        };
      case 'TPD':
        return {
          label: 'TPD',
          full: 'Türkiye Psikiyatri Derneği',
          badgeClass: 'bg-rose-100 text-rose-900 border-rose-300'
        };
      case 'APA':
        return {
          label: 'APA',
          full: 'American Psychiatric Association',
          badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
        };
    }
  };

  return (
    <div className="space-y-4">
      {/* Container Header */}
      <div className="bg-white border border-neutral-200/90 rounded-xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase rounded">
                Kanıta Dayalı 50 Bilgi
              </span>
              <span className="text-xs font-bold font-mono text-neutral-600 uppercase tracking-wider">
                WHO • TPD • APA Konsensüsü
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1 font-display">
              Ruh Sağlığında 50 Kritik Bilgi & Bilimsel Gerçek
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed max-w-3xl">
              Dünya Sağlık Örgütü (WHO), Türkiye Psikiyatri Derneği (TPD) ve Amerikan Psikiyatri Birliği (APA) 
              resmi kılavuzlarından derlenmiş 50 temel psikiyatri gerçeğini karıştırın, filtreleyin ve inceleyin.
            </p>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={handleShuffle}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white hover:bg-black font-semibold text-xs rounded-lg transition-all cursor-pointer shadow-xs select-none"
              title="Rastgele Farklı Bir Bilgi Getir"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-400" />
              <span>Rastgele Bilgi 🎲</span>
            </button>

            <button
              type="button"
              onClick={() => setShowAllList(prev => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 font-semibold text-xs rounded-lg transition-all cursor-pointer select-none"
            >
              <Layers className="w-3.5 h-3.5 text-neutral-700" />
              <span>{showAllList ? 'Tekli Moda Dön' : 'Tüm 50\'yi Gör'}</span>
            </button>
          </div>
        </div>

        {/* Organization & Category Filter Bar */}
        <div className="pt-2 border-t border-neutral-100 space-y-2">
          {/* Org Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase mr-1">
              Kaynak:
            </span>
            {[
              { id: 'ALL', label: `Tüm Kaynaklar (50)` },
              { id: 'WHO', label: `DSÖ / WHO (${PSYCHIATRIC_FACTS_50.filter(f => f.org === 'WHO').length})` },
              { id: 'TPD', label: `TPD (${PSYCHIATRIC_FACTS_50.filter(f => f.org === 'TPD').length})` },
              { id: 'APA', label: `APA (${PSYCHIATRIC_FACTS_50.filter(f => f.org === 'APA').length})` }
            ].map((orgItem) => (
              <button
                key={orgItem.id}
                type="button"
                onClick={() => {
                  setSelectedOrg(orgItem.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer select-none ${
                  selectedOrg === orgItem.id
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-2xs'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                }`}
              >
                {orgItem.label}
              </button>
            ))}
          </div>

          {/* Category Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
            <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentIndex(0);
                  }}
                  className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full whitespace-nowrap transition-all border cursor-pointer shrink-0 select-none ${
                    selectedCategory === cat
                      ? 'bg-neutral-800 text-white border-neutral-800'
                      : 'bg-white hover:bg-neutral-50 text-neutral-600 border-neutral-200'
                  }`}
                >
                  {cat === 'ALL' ? 'Tüm Konular' : cat}
                </button>
              ))}
            </div>

            {/* Quick search input */}
            <div className="relative shrink-0 w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                placeholder="50 bilgi içinde ara..."
                className="w-full pl-8 pr-2.5 py-1 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          SINGLE ROTATABLE CARD VIEW (DEFAULT)
          ======================================================== */}
      {!showAllList && currentFact && (
        <div className="bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-xs space-y-0 transition-all">
          {/* Card Top Navigation & Metadata */}
          <div className="px-4 sm:px-5 py-3 bg-neutral-50 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-neutral-900">
                Bilgi #{currentFact.id} <span className="text-neutral-500 font-normal">/ 50</span>
              </span>
              <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${getOrgBadge(currentFact.org).badgeClass}`}>
                {getOrgBadge(currentFact.org).full}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200 rounded">
                {currentFact.category}
              </span>
            </div>

            {/* Next / Previous Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 bg-white hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-md transition-colors cursor-pointer text-neutral-700"
                title="Önceki Bilgi"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-semibold text-neutral-600 px-1">
                {safeIndex + 1} / {filteredFacts.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 bg-white hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-md transition-colors cursor-pointer text-neutral-700"
                title="Sonraki Bilgi"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card Content Body */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug flex items-start gap-2">
                <Quote className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{currentFact.title}</span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium mt-2 pl-7">
                {currentFact.fact}
              </p>
            </div>

            {/* Implication / Practical Takeaway */}
            <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Klinik & Yaşamsal Anlamı (Ne Anlama Geliyor?):</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {currentFact.implication}
              </p>
            </div>

            {/* Footer with Source & Copy */}
            <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-600">
                <BookOpen className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span><strong>Resmi Belge:</strong> {currentFact.sourceDoc}</span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => handleCopyFact(currentFact)}
                  className="flex items-center gap-1 px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-semibold rounded-md transition-colors cursor-pointer"
                >
                  {copiedId === currentFact.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === currentFact.id ? 'Kopyalandı!' : 'Bilgiyi Kopyala'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredFacts.length === 0 && (
        <div className="bg-white border border-dashed border-neutral-300 p-8 rounded-xl text-center space-y-2">
          <Info className="w-8 h-8 text-neutral-400 mx-auto" />
          <div className="text-sm font-bold text-neutral-800">Eşleşen bilgi bulunamadı</div>
          <p className="text-xs text-neutral-500">
            Arama terimini veya filtre seçimlerini temizleyerek tekrar deneyin.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedOrg('ALL');
              setSelectedCategory('ALL');
              setSearchQuery('');
            }}
            className="px-3 py-1 bg-neutral-900 text-white text-xs font-semibold rounded-md mt-2 cursor-pointer"
          >
            Filtreleri Sıfırla
          </button>
        </div>
      )}

      {/* ========================================================
          FULL 50 FACTS GRID VIEW (WHEN EXPANDED)
          ======================================================== */}
      {showAllList && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1 text-xs text-neutral-500">
            <span>Listelenen Bilgi: {filteredFacts.length} / 50</span>
            <span className="font-mono">Tüm kayıtlar WHO, TPD ve APA kılavuzlarından doğrulanmıştır.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredFacts.map((fact) => {
              const orgMeta = getOrgBadge(fact.org);
              return (
                <div
                  key={fact.id}
                  className="bg-white border border-neutral-200 rounded-xl p-4 shadow-2xs space-y-2.5 flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-neutral-900">#{fact.id}</span>
                        <span className={`px-1.5 py-0.2 text-[9px] font-mono font-bold rounded border ${orgMeta.badgeClass}`}>
                          {fact.org}
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200">
                        {fact.category}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                      {fact.title}
                    </h4>

                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {fact.fact}
                    </p>

                    <div className="p-2 bg-neutral-50 border border-neutral-200/80 rounded-md text-[11px] text-neutral-700 leading-tight">
                      <strong className="text-neutral-900 font-mono text-[10px] uppercase block mb-0.5">Önem:</strong>
                      {fact.implication}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span className="truncate max-w-[200px]" title={fact.sourceDoc}>{fact.sourceDoc}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyFact(fact)}
                      className="hover:text-neutral-900 cursor-pointer font-bold shrink-0 ml-1"
                    >
                      {copiedId === fact.id ? '✓ Kopyalandı' : 'Kopyala'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
