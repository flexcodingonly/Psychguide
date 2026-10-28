import React, { useState, useMemo } from 'react';
import { 
  Pill, 
  Search, 
  Clock, 
  Activity, 
  FlaskConical, 
  ShieldAlert, 
  Sparkles, 
  Baby, 
  Bookmark, 
  BookmarkCheck,
  Copy,
  Check,
  AlertTriangle
} from 'lucide-react';
import { MEDICATIONS_DATA } from '../data/medicationsData';
import { Medication } from '../types';
import { copyToClipboard } from '../utils/clipboard';
import { GeometricDiamondCornerOrnament, MedicalDiamondCluster } from './MedicalThemeDecorations';

interface MedicationsViewProps {
  selectedMedicationId?: string;
  bookmarkedIds?: string[];
  onToggleBookmark?: (id: string, type: 'disorder' | 'medication' | 'guideline') => void;
}

export const MedicationsView: React.FC<MedicationsViewProps> = ({
  selectedMedicationId,
  bookmarkedIds = [],
  onToggleBookmark = (_id: string, _type?: string) => {}
}) => {
  const [activeMedId, setActiveMedId] = useState<string>(
    selectedMedicationId || MEDICATIONS_DATA[0]?.id || ''
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('Tümü');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  React.useEffect(() => {
    if (selectedMedicationId) {
      setActiveMedId(selectedMedicationId);
    }
  }, [selectedMedicationId]);

  const drugClasses = useMemo(() => {
    const classes = Array.from(new Set(MEDICATIONS_DATA.map((m) => m.drugClass)));
    return ['Tümü', ...classes];
  }, []);

  const filteredMeds = useMemo(() => {
    return MEDICATIONS_DATA.filter((med) => {
      const matchesClass = selectedClass === 'Tümü' || med.drugClass === selectedClass;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        med.genericName.toLowerCase().includes(q) ||
        med.drugClass.toLowerCase().includes(q) ||
        med.brandNamesTR.some((b) => b.toLowerCase().includes(q)) ||
        med.indications.some((ind) => ind.toLowerCase().includes(q));
      return matchesClass && matchesSearch;
    });
  }, [searchQuery, selectedClass]);

  const activeMed = useMemo(() => {
    return (
      MEDICATIONS_DATA.find((m) => m.id === activeMedId) ||
      filteredMeds[0] ||
      MEDICATIONS_DATA[0]
    );
  }, [activeMedId, filteredMeds]);

  const isBookmarked = (bookmarkedIds || []).includes(activeMed.id);

  const handleCopyMed = async (med: Medication) => {
    const text =
      `PSYCHDS İlaç Monografı: ${med.genericName} (${med.drugClass})\n` +
      `TR Ticari İsimler: ${med.brandNamesTR.join(', ')}\n` +
      `Başlangıç Dozu: ${med.startingDose}\n` +
      `Hedef Terapötik Doz: ${med.targetDose}\n` +
      `Maksimum Doz: ${med.maxDose}\n` +
      `Yarılanma Ömrü: ${med.halfLife}\n` +
      `Laboratuvar / İzlem: ${med.monitoringLabs.join(' | ')}\n` +
      `Kaynak: PSYCHDS`;

    await copyToClipboard(text);
    setCopiedId(med.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header Banner */}
      <div className="border border-neutral-200 bg-white p-5 sm:p-6 text-neutral-900 relative overflow-hidden shadow-2xl rounded-xl">
        <GeometricDiamondCornerOrnament className="absolute -top-4 -right-4 hidden sm:block" />
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
              <Pill className="w-4 h-4 text-neutral-800" />
              <span>Psikofarmakoloji & Klinik İlaç Rehberi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1 tracking-tight font-display">
              Psikotrop İlaç Formüleri & Reçeteleme Kılavuzu
            </h1>
            <p className="text-sm text-neutral-700 mt-1 max-w-2xl leading-relaxed">
              Başlangıç, hedef ve tavan dozlar, yarılanma ömürleri, reseptör bağlanma profilleri, laboratuvar izlem protokolleri ve güvenli kullanım uyarıları.
            </p>
          </div>
          <div className="hidden lg:block">
            <MedicalDiamondCluster />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-lg border border-neutral-200 shadow-xl flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Jenerik veya marka (örn: Lustral, Leponex)..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 rounded-lg focus:outline-none focus:border-neutral-900"
          />
        </div>

        {/* Drug Class Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          {drugClasses.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                selectedClass === cls
                  ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                  : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
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
            <div className="p-6 text-center text-neutral-500 bg-white rounded-lg border border-neutral-200 text-xs">
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
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider font-mono ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-500'
                    }`}>
                      {med.drugClass}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasBookmark && <BookmarkCheck className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-600'}`} />}
                      <span className={`text-[10px] font-medium font-mono ${
                        isSelected ? 'text-neutral-200' : 'text-neutral-500'
                      }`}>
                        Hedef: {med.targetDose.split(' ')[0]} mg
                      </span>
                    </div>
                  </div>
                  <h3 className={`font-bold text-sm mt-1 font-display ${
                    isSelected ? 'text-white font-bold' : 'text-neutral-900'
                  }`}>
                    {med.genericName}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {med.brandNamesTR.slice(0, 3).map((brand, idx) => (
                      <span key={idx} className={`text-[10px] px-1.5 py-0.5 rounded-lg border ${
                        isSelected
                          ? 'bg-neutral-800 text-white border-neutral-700'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                      }`}>
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
        <div className="lg:col-span-8 bg-white rounded-xl border border-neutral-200 shadow-2xl overflow-hidden text-neutral-900">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-neutral-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-800 font-mono">
                  {activeMed.drugClass}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-neutral-800" />
                  Yarılanma Ömrü (t½): {activeMed.halfLife}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleBookmark(activeMed.id, 'medication')}
                  className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:text-black hover:bg-neutral-200'
                  }`}
                  title={isBookmarked ? 'Vizit Listesinden Çıkar' : 'Vizit Listesine Ekle'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyMed(activeMed)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-neutral-100 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer"
                >
                  {copiedId === activeMed.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-neutral-800" />
                      <span className="text-neutral-900 font-semibold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>İlaç Özetini Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight font-display">
              {activeMed.genericName}
            </h2>

            {/* Turkish Brand Names */}
            <div className="mt-2.5 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-neutral-500 font-medium">Türkiye Ticari İsimleri:</span>
              {activeMed.brandNamesTR.map((brand, idx) => (
                <span key={idx} className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono">
                  {brand}
                </span>
              ))}
            </div>

            {/* Indications */}
            <div className="mt-3 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-neutral-500 font-medium">Temel Endikasyonlar:</span>
              {activeMed.indications.map((ind, idx) => (
                <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Dosing Three-Column Card */}
          <div className="p-5 sm:p-6 border-b border-neutral-200 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5 font-mono">
              <Activity className="w-4 h-4 text-neutral-800" />
              <span>Dozaj ve Titrasyon Kılavuzu</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-white border border-neutral-200">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Başlangıç Dozu</span>
                <p className="text-base font-bold text-neutral-900 mt-1 font-mono">{activeMed.startingDose}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Tolerabiliteye göre ilk gün / hafta</p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-300 shadow-sm">
                <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider font-mono">Hedef Terapötik Doz</span>
                <p className="text-base font-bold text-neutral-900 mt-1 font-mono">{activeMed.targetDose}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Klinik etkinliğin sağlandığı aralık</p>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-neutral-200">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Maksimum Güvenli Doz</span>
                <p className="text-base font-bold text-neutral-900 mt-1 font-mono">{activeMed.maxDose}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Toksisite ve yan etki sınırı</p>
              </div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-5 sm:p-6 space-y-6">
            {/* Receptor Profile Table */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5 font-mono">
                <FlaskConical className="w-4 h-4 text-neutral-800" />
                <span>Reseptör Bağlanma Profili & Klinik Yansıması (Stahl)</span>
              </h3>
              <div className="overflow-x-auto border border-neutral-200 rounded-lg">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-neutral-100 text-neutral-700 font-semibold border-b border-neutral-200 font-mono uppercase tracking-wider">
                    <tr>
                      <th className="px-3 py-2.5">Hedef Reseptör / Taşıyıcı</th>
                      <th className="px-3 py-2.5">Bağlanma Afinitesi</th>
                      <th className="px-3 py-2.5">Klinik Etki / Yan Etki Açıklaması</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    {activeMed.receptorProfile.map((rec, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                        <td className="px-3 py-2.5 font-bold text-neutral-900 font-mono">{rec.target}</td>
                        <td className="px-3 py-2.5">
                          <span className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold font-mono border ${
                            rec.affinity === 'Çok Yüksek' ? 'bg-neutral-900 text-white border-neutral-900' :
                            rec.affinity === 'Yüksek' ? 'bg-neutral-200 text-neutral-900 border-neutral-300' :
                            rec.affinity === 'Orta' ? 'bg-neutral-100 text-neutral-700 border-neutral-200' : 'bg-white text-neutral-600 border-neutral-200'
                          }`}>
                            {rec.affinity}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-neutral-700 leading-relaxed">{rec.clinicalEffect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Black Box Warning if exists */}
            {activeMed.blackBoxWarnings && activeMed.blackBoxWarnings.length > 0 && (
              <div className="p-4 rounded-lg bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-neutral-900 mb-2 font-mono uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-neutral-800" />
                  <span>KARA KUTU UYARISI (FDA / EMA Black Box Warning)</span>
                </div>
                <ul className="space-y-1 list-disc list-inside">
                  {activeMed.blackBoxWarnings.map((warn, idx) => (
                    <li key={idx} className="leading-relaxed font-medium text-neutral-700">{warn}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Monitoring Labs & Side Effects 2-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Monitoring Labs */}
              <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-1.5 font-mono">
                  <Activity className="w-4 h-4 text-neutral-800" />
                  <span>Laboratuvar & Klinik İzlem Gereksinimleri</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-700">
                  {activeMed.monitoringLabs.map((lab, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-neutral-900 font-bold">•</span>
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Side Effects */}
              <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 flex items-center gap-1.5 font-mono">
                  <AlertTriangle className="w-4 h-4 text-neutral-800" />
                  <span>Sık Görülen Yan Etkiler</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeMed.commonSideEffects.map((eff, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700">
                      {eff}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pregnancy & CYP Metabolism */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg border border-neutral-200 bg-white flex items-start gap-2.5">
                <Baby className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-neutral-900 block mb-0.5">Gebelik ve Emzirme:</span>
                  <span className="text-neutral-700 leading-relaxed">{activeMed.pregnancyLactation}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-200 bg-white flex items-start gap-2.5">
                <FlaskConical className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-neutral-900 block mb-0.5">Metabolizma Enzimleri (CYP450 / Glukuronidasyon):</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {activeMed.metabolismEnzymes.map((enz, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded-lg bg-neutral-100 text-neutral-800 font-mono text-[10px] font-semibold border border-neutral-300">
                        {enz}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Pearls */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                <Sparkles className="w-4 h-4 text-neutral-800" />
                <span>Klinik İpuçları & Reçeteleme İncelikleri</span>
              </div>
              {activeMed.clinicalPearls.map((pearl, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-800 flex items-start gap-2">
                  <span className="text-neutral-900 font-bold">💡</span>
                  <span className="leading-relaxed">{pearl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
