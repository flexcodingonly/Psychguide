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
import { GeometricDiamondCornerOrnament, MedicalDiamondCluster } from './MedicalThemeDecorations';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
            <Library className="w-3.5 h-3.5 text-neutral-900" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Bölüm 8</span>
              <span className="text-neutral-300">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                Akademik Kaynakça & Literatür
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
              STAR*D, CATIE, STEP-BD, CANMAT, Maudsley, APA & WFSBP kanıta dayalı klinik referanslar.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium border border-neutral-200/80">
            Hakemli Kılavuzlar
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3.5 border border-neutral-200 shadow-md flex flex-col sm:flex-row gap-3 items-center justify-between rounded-lg">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Yazar, başlık veya çalışma ara (STAR*D, Maudsley)..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors rounded-lg"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors border cursor-pointer rounded-lg ${
                categoryFilter === cat
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-50 text-neutral-600 hover:text-black hover:bg-neutral-100 border-neutral-200 hover:border-neutral-300'
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
            className="p-5 bg-white border border-neutral-200 shadow-xl flex flex-col justify-between space-y-4 hover:border-neutral-400 transition-colors rounded-xl"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-800 bg-neutral-50 px-2 py-0.5 border border-neutral-300 rounded-lg">
                  {ref.category}
                </span>
                <span className="text-xs font-mono text-neutral-500 font-bold">
                  {ref.year}
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-neutral-900 leading-snug font-display">
                {ref.title}
              </h3>

              <p className="text-xs font-mono text-neutral-700">
                {ref.authors} — <span className="italic text-neutral-500 font-sans">{ref.journalOrPublisher}</span>
              </p>

              <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                {ref.summary}
              </p>

              <div className="p-3 bg-white border border-neutral-200 text-xs text-neutral-700 rounded-lg">
                <span className="font-bold text-neutral-900 block mb-0.5">📌 Klinik Pratikteki Yeri:</span>
                <span>{ref.relevance}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => handleCopyCitation(ref)}
                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 font-medium cursor-pointer"
              >
                {copiedId === ref.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-neutral-800" />
                    <span className="text-neutral-900 font-semibold">Alıntı Kopyalandı</span>
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
                  className="flex items-center gap-1 text-xs text-neutral-700 hover:text-neutral-900 font-semibold"
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
