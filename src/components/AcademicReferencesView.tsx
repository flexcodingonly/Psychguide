import React, { useState } from 'react';
import { 
  Library, 
  ExternalLink, 
  Copy, 
  Check, 
  Search
} from 'lucide-react';
import { ACADEMIC_REFERENCES_DATA } from '../data/referencesData';
import { AcademicReference } from '../types';

export const AcademicReferencesView: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('Hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Hepsi', ...Array.from(new Set(ACADEMIC_REFERENCES_DATA.map(r => r.category)))];

  const filteredReferences = ACADEMIC_REFERENCES_DATA.filter(ref => {
    const matchesCategory = categoryFilter === 'Hepsi' || ref.category === categoryFilter;
    const matchesSearch = 
      ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.relevance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyCitation = (ref: AcademicReference) => {
    const citation = `${ref.authors} (${ref.year}). ${ref.title}. ${ref.journalOrPublisher}. ${ref.doiOrLink || ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(ref.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 text-red-500 font-semibold text-xs font-mono uppercase tracking-wider">
          <Library className="w-4 h-4 text-red-500" />
          <span>Kanıta Dayalı Tıp & Bilimsel Literatür</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
          Akademik Kaynakça & Dönüm Noktası Çalışmalar
        </h1>
        <p className="text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
          PSYCHDS karar destek sistemindeki tüm tanı kriterleri, kılavuzlar, dozajlar, etkileşimler ve algoritmalar uluslararası hakemli kılavuzlara ve dönüm noktası randomize kontrollü çalışmalara (STAR*D, CATIE, STEP-BD, CANMAT, Maudsley) dayanmaktadır.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#101010] p-3.5 border border-neutral-800 shadow-md flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Yazar, başlık veya çalışma ara (STAR*D, Maudsley)..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#151515] border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors border cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-red-600 text-white border-red-500 shadow-sm'
                  : 'bg-[#151515] text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Reference Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReferences.map((ref) => (
          <div
            key={ref.id}
            className="p-5 bg-[#0d0d0d] border border-neutral-800 shadow-lg flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2 py-0.5 border border-red-800/80">
                  {ref.category}
                </span>
                <span className="text-xs font-mono text-neutral-400 font-bold">
                  {ref.year}
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                {ref.title}
              </h3>

              <p className="text-xs font-mono text-red-400">
                {ref.authors} — <span className="italic text-neutral-400 font-sans">{ref.journalOrPublisher}</span>
              </p>

              <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                {ref.summary}
              </p>

              <div className="p-3 bg-[#121212] border border-neutral-800 text-xs text-neutral-300">
                <span className="font-bold text-red-400 block mb-0.5">📌 Klinik Pratikteki Yeri:</span>
                <span>{ref.relevance}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => handleCopyCitation(ref)}
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-medium cursor-pointer"
              >
                {copiedId === ref.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-red-400 font-semibold">Alıntı Kopyalandı</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Kaynakçayı Kopyala (APA)</span>
                  </>
                )}
              </button>

              {ref.doiOrLink && (
                <a
                  href={ref.doiOrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-red-500 hover:text-red-400 font-semibold"
                >
                  <span>Yayına Git</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
