import React, { useState } from 'react';
import { 
  Pill, 
  Search, 
  AlertTriangle, 
  Activity, 
  Clock, 
  FlaskConical, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck,
  ShieldAlert,
  Sparkles,
  Baby
} from 'lucide-react';
import { MEDICATIONS_DATA } from '../data/medicationsData';
import { Medication } from '../types';

interface MedicationsViewProps {
  selectedMedicationId?: string;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string, type: 'disorder' | 'medication') => void;
}

export const MedicationsView: React.FC<MedicationsViewProps> = ({
  selectedMedicationId,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [activeMedId, setActiveMedId] = useState<string>(
    selectedMedicationId || MEDICATIONS_DATA[0].id
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('Hepsi');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Drug classes
  const drugClasses = ['Hepsi', ...Array.from(new Set(MEDICATIONS_DATA.map(m => m.drugClass)))];

  // Filtered meds
  const filteredMeds = MEDICATIONS_DATA.filter(med => {
    const matchesClass = selectedClass === 'Hepsi' || med.drugClass === selectedClass;
    const matchesSearch = 
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.brandNamesTR.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      med.indications.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesClass && matchesSearch;
  });

  const activeMed = MEDICATIONS_DATA.find(m => m.id === activeMedId) || filteredMeds[0] || MEDICATIONS_DATA[0];
  const isBookmarked = bookmarkedIds.includes(activeMed.id);

  const handleCopyMed = (med: Medication) => {
    const text = `== ${med.genericName} (TR Markalar: ${med.brandNamesTR.join(', ')}) ==\n` +
      `Sınıf: ${med.drugClass}\n` +
      `Başlangıç Dozu: ${med.startingDose}\n` +
      `Hedef Terapötik Doz: ${med.targetDose}\n` +
      `Maksimum Doz: ${med.maxDose}\n` +
      `Yarılanma Ömrü: ${med.halfLife}\n` +
      `Laboratuvar / İzlem: ${med.monitoringLabs.join(' | ')}\n` +
      `Kaynak: PsikiyatriDB`;

    navigator.clipboard.writeText(text);
    setCopiedId(med.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-700 font-semibold text-xs uppercase tracking-wider">
            <Pill className="w-4 h-4" />
            <span>Psikofarmakoloji & Klinik İlaç Rehberi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            Psikotrop İlaç Formüleri & Reçeteleme Kılavuzu
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Başlangıç, hedef ve tavan dozlar, yarılanma ömürleri, reseptör bağlanma profilleri, laboratuvar izlem protokolleri ve kara kutu uyarıları.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs mb-6 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Jenerik veya marka (örn: Lustral, Leponex)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        {/* Drug Class Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          {drugClasses.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedClass === cls
                  ? 'bg-blue-700 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Master-Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredMeds.length === 0 ? (
            <div className="p-6 text-center text-slate-500 bg-white rounded-xl border border-slate-200 text-xs">
              Aramanızla eşleşen psikotrop ilaç bulunamadı.
            </div>
          ) : (
            filteredMeds.map((med) => {
              const isSelected = activeMed.id === med.id;
              const hasBookmark = bookmarkedIds.includes(med.id);
              return (
                <div
                  key={med.id}
                  onClick={() => {
                    setActiveMedId(med.id);
                    if (window.innerWidth < 1024) {
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-600 shadow-xs ring-1 ring-blue-600/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-700 font-mono">
                      {med.drugClass}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasBookmark && <BookmarkCheck className="w-3.5 h-3.5 text-blue-600" />}
                      <span className="text-[10px] text-slate-500 font-medium">
                        Hedef: {med.targetDose.split(' ')[0]} mg
                      </span>
                    </div>
                  </div>
                  <h3 className={`font-bold text-sm mt-1 ${isSelected ? 'text-blue-950' : 'text-slate-900'}`}>
                    {med.genericName}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {med.brandNamesTR.slice(0, 3).map((brand, idx) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Detail Card */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-200 bg-linear-to-r from-blue-50/50 to-white">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                  {activeMed.drugClass}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-slate-500" />
                  Yarılanma Ömrü (t½): {activeMed.halfLife}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleBookmark(activeMed.id, 'medication')}
                  className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                  title={isBookmarked ? 'Vizit Listesinden Çıkar' : 'Vizit Listesine Ekle'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyMed(activeMed)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                >
                  {copiedId === activeMed.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>İlaç Özetini Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {activeMed.genericName}
            </h2>

            {/* Turkish Brand Names */}
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500 font-medium">Türkiye Ticari İsimleri:</span>
              {activeMed.brandNamesTR.map((brand, idx) => (
                <span key={idx} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-300 text-slate-800">
                  {brand}
                </span>
              ))}
            </div>

            {/* Indications */}
            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-500 font-medium">Temel Endikasyonlar:</span>
              {activeMed.indications.map((ind, idx) => (
                <span key={idx} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Dosing Three-Column Card */}
          <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>Dozaj ve Titrasyon Kılavuzu</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Başlangıç Dozu</span>
                <p className="text-sm font-bold text-slate-900 mt-1">{activeMed.startingDose}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Tolerabiliteye göre ilk gün / hafta</p>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 shadow-2xs">
                <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">Hedef Terapötik Doz</span>
                <p className="text-sm font-bold text-blue-950 mt-1">{activeMed.targetDose}</p>
                <p className="text-[11px] text-blue-700/80 mt-0.5">Klinik etkinliğin sağlandığı aralık</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-semibold text-red-600 uppercase tracking-wider">Maksimum Güvenli Doz</span>
                <p className="text-sm font-bold text-slate-900 mt-1">{activeMed.maxDose}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Toksisite ve yan etki sınırı</p>
              </div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-5 sm:p-6 space-y-6">
            {/* Receptor Profile Table */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-blue-600" />
                <span>Reseptör Bağlanma Profili & Klinik Yansıması (Stahl)</span>
              </h3>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="px-3 py-2">Hedef Reseptör / Taşıyıcı</th>
                      <th className="px-3 py-2">Bağlanma Afinitesi</th>
                      <th className="px-3 py-2">Klinik Etki / Yan Etki Açıklaması</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {activeMed.receptorProfile.map((rec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-3 py-2.5 font-bold text-slate-900">{rec.target}</td>
                        <td className="px-3 py-2.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            rec.affinity === 'Çok Yüksek' ? 'bg-purple-100 text-purple-800' :
                            rec.affinity === 'Yüksek' ? 'bg-blue-100 text-blue-800' :
                            rec.affinity === 'Orta' ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {rec.affinity}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-slate-700">{rec.clinicalEffect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Black Box Warning if exists */}
            {activeMed.blackBoxWarnings && activeMed.blackBoxWarnings.length > 0 && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950">
                <div className="flex items-center gap-2 font-bold text-red-800 mb-2">
                  <ShieldAlert className="w-4 h-4 text-red-600" />
                  <span>KARA KUTU UYARISI (FDA / EMA Black Box Warning)</span>
                </div>
                <ul className="space-y-1 list-disc list-inside">
                  {activeMed.blackBoxWarnings.map((warn, idx) => (
                    <li key={idx} className="leading-relaxed font-medium">{warn}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Monitoring Labs & Side Effects 2-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Monitoring Labs */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-teal-600" />
                  <span>Laboratuvar & Klinik İzlem Gereksinimleri</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeMed.monitoringLabs.map((lab, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Side Effects */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Sık Görülen Yan Etkiler</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeMed.commonSideEffects.map((eff, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded bg-white border border-slate-200 text-slate-700">
                      {eff}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pregnancy & CYP Metabolism */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-white flex items-start gap-2.5">
                <Baby className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Gebelik ve Emzirme:</span>
                  <span className="text-slate-600 leading-relaxed">{activeMed.pregnancyLactation}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-white flex items-start gap-2.5">
                <FlaskConical className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Metabolizma Enzimleri (CYP450 / Glukuronidasyon):</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {activeMed.metabolismEnzymes.map((enz, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-800 font-mono text-[10px] font-semibold border border-indigo-200">
                        {enz}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Pearls */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Klinik İpuçları & Reçeteleme İncelikleri</span>
              </div>
              {activeMed.clinicalPearls.map((pearl, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-2">
                  <span className="text-blue-700 font-bold">💡</span>
                  <span>{pearl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
