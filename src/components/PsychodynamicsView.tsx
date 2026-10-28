import React, { useState } from 'react';
import { DEFENSE_MECHANISMS_DATA, PSYCHODYNAMIC_SCHOOLS_DATA } from '../data/psychodynamicsData';
import { Search, ShieldAlert, Sparkles, Brain, BookOpen, Layers, HeartHandshake } from 'lucide-react';
import { GeometricDiamondCornerOrnament, NumberedDiamond } from './MedicalThemeDecorations';

export const PsychodynamicsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'defenses' | 'theories' | 'formulation'>('defenses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [expandedDefenseId, setExpandedDefenseId] = useState<string | null>('splitting');

  const levels = [
    { id: 'all', label: 'Tüm Düzeyler' },
    { id: 'İlkel (Patolojik / Narsistik)', label: 'İlkel / Patolojik' },
    { id: 'İmmatür (Olgunlaşmamış)', label: 'İmmatür' },
    { id: 'Nevrotik (Ara Düzey)', label: 'Nevrotik' },
    { id: 'Olgun (Matür)', label: 'Olgun / Matür' },
  ];

  const filteredDefenses = DEFENSE_MECHANISMS_DATA.filter((def) => {
    const matchesSearch =
      def.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      def.turkishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      def.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      def.associatedPathology.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || def.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6" id="psychodynamics-view-root">
      {/* Header Banner */}
      <div className="border border-neutral-200 bg-white p-5 sm:p-6 text-neutral-900 relative overflow-hidden shadow-2xl rounded-lg">
        <GeometricDiamondCornerOrnament className="absolute -top-4 -right-4 hidden sm:block text-neutral-700" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs font-mono uppercase tracking-wider mb-2 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
              <Brain className="w-3.5 h-3.5 text-neutral-800" />
              Klinik Psikodinamik Psikiyatri
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 font-display">
              Psikodinamik Yaklaşım & Savunma Mekanizmaları
            </h1>
            <p className="text-neutral-700 text-sm mt-1 max-w-2xl leading-relaxed">
              Freud, Melanie Klein, Winnicott, Kernberg ve Kohut ekseninde ego savunma düzenekleri,
              kişilik örgütlenmeleri, aktarım yönetimi ve psikodinamik vaka formülasyonu.
            </p>
          </div>

          <div className="flex bg-neutral-50 p-1 border border-neutral-200 self-start md:self-auto rounded-lg">
            <button
              onClick={() => setActiveTab('defenses')}
              className={`px-3 py-1.5 text-xs font-medium transition-all rounded-lg cursor-pointer ${
                activeTab === 'defenses'
                  ? 'bg-white text-black font-bold shadow'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Savunma Mekanizmaları
            </button>
            <button
              onClick={() => setActiveTab('theories')}
              className={`px-3 py-1.5 text-xs font-medium transition-all rounded-lg cursor-pointer ${
                activeTab === 'theories'
                  ? 'bg-white text-black font-bold shadow'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Ekoller & Aktarım
            </button>
            <button
              onClick={() => setActiveTab('formulation')}
              className={`px-3 py-1.5 text-xs font-medium transition-all rounded-lg cursor-pointer ${
                activeTab === 'formulation'
                  ? 'bg-white text-black font-bold shadow'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Vaka Formülasyonu
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Savunma Mekanizmaları */}
      {activeTab === 'defenses' && (
        <div className="space-y-4">
          {/* Controls bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Savunma adı, Türkçe karşılığı veya patoloji ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-neutral-200 pl-9 pr-4 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-lg"
              />
            </div>

            {/* Level selector */}
            <div className="flex flex-wrap gap-1.5">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-2.5 py-1 text-xs border transition-colors rounded-lg cursor-pointer ${
                    selectedLevel === lvl.id
                      ? 'bg-white border-white text-black font-bold'
                      : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Defenses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDefenses.map((def) => {
              const isExpanded = expandedDefenseId === def.id;
              const isPrimitive = def.level.includes('İlkel');
              const isImmature = def.level.includes('İmmatür');
              const isNeurotic = def.level.includes('Nevrotik');

              const badgeColor = isPrimitive
                ? 'border-neutral-300 bg-neutral-100 text-neutral-900 font-semibold'
                : isImmature
                ? 'border-neutral-300 bg-neutral-50 text-neutral-800'
                : isNeurotic
                ? 'border-neutral-200 bg-white text-neutral-700'
                : 'border-neutral-300 bg-neutral-100 text-neutral-800';

              return (
                <div
                  key={def.id}
                  className={`border transition-all cursor-pointer rounded-lg ${
                    isExpanded
                      ? 'bg-white border-neutral-500 shadow-xl ring-1 ring-white/20'
                      : 'bg-white border-neutral-200 hover:border-neutral-400'
                  } p-5`}
                  onClick={() => setExpandedDefenseId(isExpanded ? null : def.id)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-neutral-900 text-base tracking-wide font-display">
                          {def.turkishName}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">
                          ({def.name})
                        </span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium border mt-1.5 rounded-lg ${badgeColor}`}>
                        {def.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                    {def.definition}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-neutral-200 space-y-3 text-xs">
                      <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                        <span className="font-bold text-neutral-900 uppercase tracking-wider block mb-1">
                          Klinik Örnek & Tezahür:
                        </span>
                        <p className="text-neutral-700 italic leading-relaxed">
                          "{def.clinicalExample}"
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                          İlişkili Klinik Durumlar:
                        </span>
                        <p className="text-neutral-800">
                          {def.associatedPathology}
                        </p>
                      </div>

                      <div className="p-3 bg-neutral-50 border border-neutral-300 rounded-lg">
                        <span className="font-bold text-neutral-900 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                          <HeartHandshake className="w-3.5 h-3.5 text-neutral-800" />
                          Hekim Yaklaşımı & Terapötik Müdahale:
                        </span>
                        <p className="text-neutral-700 leading-relaxed">
                          {def.therapeuticApproach}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 text-[11px] text-neutral-500 flex justify-end">
                    {isExpanded ? 'Detayları Kapat ▲' : 'Klinik Örnek & Terapötik Yaklaşım ▼'}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDefenses.length === 0 && (
            <div className="p-8 text-center border border-neutral-200 bg-white text-neutral-500 rounded-lg">
              Arama kriterlerine uygun savunma mekanizması bulunamadı.
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Ekoller, Nesne İlişkileri & Aktarım */}
      {activeTab === 'theories' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PSYCHODYNAMIC_SCHOOLS_DATA.map((school) => (
              <div
                key={school.id}
                className="border border-neutral-200 bg-white p-5 hover:border-neutral-400 transition-colors rounded-lg"
              >
                <div className="flex items-start justify-between pb-3 border-b border-neutral-200">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg tracking-tight font-display">
                      {school.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      Öncü Kuramcılar: {school.theorists}
                    </p>
                  </div>
                  <Layers className="w-5 h-5 text-neutral-500" />
                </div>

                <div className="mt-4 space-y-4">
                  {school.coreConcepts.map((concept, idx) => (
                    <div key={idx} className="p-3 bg-white border border-neutral-200 rounded-lg">
                      <h4 className="font-semibold text-sm text-neutral-900 flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3 h-3 text-neutral-800" />
                        {concept.term}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed mb-2">
                        {concept.explanation}
                      </p>
                      <div className="text-xs border-l-2 border-white pl-2 text-neutral-700 bg-white py-1">
                        <span className="text-neutral-900 font-semibold">Klinik Yansıma: </span>
                        {concept.clinicalApplication}
                      </div>
                    </div>
                  ))}

                  <div className="p-3 bg-neutral-50 border border-neutral-200 text-xs rounded-lg">
                    <span className="text-neutral-900 font-bold block mb-1">
                      Klinik Psikiyatrideki Yeri:
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {school.clinicalRelevanceInPsychiatry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Section: Kernberg Kişilik Örgütlenmesi Karşılaştırma Tablosu */}
          <div className="border border-neutral-200 bg-white p-5 rounded-lg">
            <h3 className="font-bold text-neutral-900 text-base mb-3 flex items-center gap-2 font-display">
              <ShieldAlert className="w-4 h-4 text-neutral-800" />
              Otto Kernberg Yapısal Kişilik Örgütlenmeleri Karşılaştırma Matrisi
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-white text-neutral-800 uppercase tracking-wider font-mono border-b border-neutral-200">
                  <tr>
                    <th className="p-3">Yapısal Boyut</th>
                    <th className="p-3 text-neutral-900">Nevrotik Düzey</th>
                    <th className="p-3 text-neutral-800">Borderline Düzey</th>
                    <th className="p-3 text-neutral-700">Psikotik Düzey</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-700">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Kimlik Bütünlüğü</td>
                    <td className="p-3">Bütünleşmiş kimlik (Kendilik ve ötekiler tutarlı algılanır)</td>
                    <td className="p-3">Kimlik Difüzyonu (Parçalı, çelişkili, boşluk hissi)</td>
                    <td className="p-3">Kimlik Kaybı (Kendilik ile nesne sınırları erimiş)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Savunma Düzeneği</td>
                    <td className="p-3">Olgun ve Nevrotik (Bastırma, Yalıtma, Karşıt Tepki)</td>
                    <td className="p-3">İlkel (Bölme / Splitting, Yansıtmalı Özdeşim, Eyleme Vurma)</td>
                    <td className="p-3">İlkel (İnkar, Yansıtma, Parçalanma)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Gerçeklik Değerlendirmesi</td>
                    <td className="p-3">Tamamen korunmuş</td>
                    <td className="p-3">Korunmuş (Yoğun stres/duygulanım altında geçici bozulabilir)</td>
                    <td className="p-3">Ciddi düzeyde bozulmuş (Hezeyanlar, Halüsinasyonlar)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Terapötik Hedef</td>
                    <td className="p-3">İntrapsişik çatışmaları çözme, içgörü kazandırma</td>
                    <td className="p-3">Çerçeve koyma, bölmeyi yorumlama, duygu regülasyonu</td>
                    <td className="p-3">Destekleme, gerçeklik testi, antipsikotik koruma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Psikodinamik Vaka Formülasyonu Rehberi */}
      {activeTab === 'formulation' && (
        <div className="border border-neutral-200 bg-white p-6 space-y-6 text-neutral-900 rounded-lg">
          <div className="border-b border-neutral-200 pb-4">
            <h3 className="text-xl font-bold flex items-center gap-2 font-display">
              <BookOpen className="w-5 h-5 text-neutral-800" />
              Psikiyatride 4 Boyutlu Psikodinamik Vaka Formülasyonu
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Yalnızca DSM tanı kodlaması yapmak yerine hastanın "Neden şimdi?", "Hangi karakter zemininde?",
              ve "Hangi çatışma nedeniyle?" hastalandığını gösteren klinik harita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-lg">
              <div className="flex items-center gap-3 text-neutral-900 font-bold text-sm uppercase font-mono">
                <NumberedDiamond num={1} active={true} size="sm" />
                Tetikleyici Faktör & Güncel Kriz
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Belirtilerin aniden tetiklendiği sembolik olay (terk edilme, terfi, emeklilik, hastalık, kayıp).
                Olayın hastanın çocukluk çatışmaları ve kırılganlıklarıyla sembolik rezonansı nedir?
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-lg">
              <div className="flex items-center gap-3 text-neutral-900 font-bold text-sm uppercase font-mono">
                <NumberedDiamond num={2} active={true} size="sm" />
                Çekirdek Çatışma (CCRT Modeli)
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                <strong>İstek (Wish):</strong> Hastanın başkalarından arzuladığı şey (örn. "Beni koşulsuz sevsinler").<br />
                <strong>Ötekinin Yanıtı (RO):</strong> Beklediği/algıladığı tepki (örn. "Beni sömürecek ve aşağılayacaklar").<br />
                <strong>Kendiliğin Yanıtı (RS):</strong> Çatışmaya verdiği tepki (örn. "Geri çekilip derin depresyona giriyorum").
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-lg">
              <div className="flex items-center gap-3 text-neutral-900 font-bold text-sm uppercase font-mono">
                <NumberedDiamond num={3} active={true} size="sm" />
                Karakter Yapısı & Savunma Aygıtı
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Hangi ego savunmalarını baskın olarak kullanıyor? (İlkel bölme ve eyleme vurma mı, yoksa obsesif yalıtma ve rasyonalizasyon mu?)
                Kişilik örgütlenmesi düzeyi (Nevrotik - Borderline - Psikotik).
              </p>
            </div>

            <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-lg">
              <div className="flex items-center gap-3 text-neutral-900 font-bold text-sm uppercase font-mono">
                <NumberedDiamond num={4} active={true} size="sm" />
                Terapötik İlişki & Karşı-Aktarım Tuzakları
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Hasta hekimi nasıl konumlandırıyor (Aktarım: Suçlayıcı otorite mi, kurtarıcı mı)?
                Hekimde uyanan karşı-aktarım duyguları (öfke, aşırı korumacılık, bıkkınlık).
                Tedavi çerçevesinin (süre, vizit sıklığı, sınırlar) yapılandırılması.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
