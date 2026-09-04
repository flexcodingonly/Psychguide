import React, { useState } from 'react';
import { DEFENSE_MECHANISMS_DATA, PSYCHODYNAMIC_SCHOOLS_DATA } from '../data/psychodynamicsData';
import { Search, ShieldAlert, Sparkles, Brain, BookOpen, Layers, HeartHandshake, Eye } from 'lucide-react';

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
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/60 border border-red-800/80 text-red-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Brain className="w-3.5 h-3.5" />
              Klinik Psikodinamik Psikiyatri
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Psikodinamik Yaklaşım & Savunma Mekanizmaları
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-2xl leading-relaxed">
              Freud, Melanie Klein, Winnicott, Kernberg ve Kohut ekseninde ego savunma düzenekleri,
              kişilik örgütlenmeleri, aktarım yönetimi ve psikodinamik vaka formülasyonu.
            </p>
          </div>

          <div className="flex bg-neutral-900 p-1 border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('defenses')}
              className={`px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'defenses'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Savunma Mekanizmaları
            </button>
            <button
              onClick={() => setActiveTab('theories')}
              className={`px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'theories'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ekoller & Aktarım
            </button>
            <button
              onClick={() => setActiveTab('formulation')}
              className={`px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'formulation'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
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
                className="w-full bg-[#111111] border border-neutral-800 pl-9 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Level selector */}
            <div className="flex flex-wrap gap-1.5">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-2.5 py-1 text-xs border transition-colors ${
                    selectedLevel === lvl.id
                      ? 'bg-red-600 border-red-500 text-white font-medium'
                      : 'bg-[#111111] border-neutral-800 text-neutral-400 hover:text-neutral-200'
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
              const isMature = def.level.includes('Olgun');

              const badgeColor = isPrimitive
                ? 'border-red-800/80 bg-red-950/40 text-red-400'
                : isImmature
                ? 'border-amber-800/80 bg-amber-950/40 text-amber-400'
                : isNeurotic
                ? 'border-neutral-700 bg-neutral-900 text-neutral-300'
                : 'border-emerald-800/80 bg-emerald-950/40 text-emerald-400';

              return (
                <div
                  key={def.id}
                  className={`border transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-[#141414] border-red-600/70 shadow-lg ring-1 ring-red-600/30'
                      : 'bg-[#0f0f0f] border-neutral-800/90 hover:border-neutral-700'
                  } p-5`}
                  onClick={() => setExpandedDefenseId(isExpanded ? null : def.id)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base tracking-wide">
                          {def.turkishName}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">
                          ({def.name})
                        </span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 text-[11px] font-medium border mt-1.5 ${badgeColor}`}>
                        {def.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                    {def.definition}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-3 text-xs">
                      <div className="p-3 bg-black/60 border border-neutral-800/80">
                        <span className="font-semibold text-red-400 uppercase tracking-wider block mb-1">
                          Klinik Örnek & Tezahür:
                        </span>
                        <p className="text-neutral-300 italic leading-relaxed">
                          "{def.clinicalExample}"
                        </p>
                      </div>

                      <div>
                        <span className="font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                          İlişkili Klinik Durumlar:
                        </span>
                        <p className="text-neutral-200">
                          {def.associatedPathology}
                        </p>
                      </div>

                      <div className="p-3 bg-red-950/20 border border-red-900/40">
                        <span className="font-semibold text-red-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                          <HeartHandshake className="w-3.5 h-3.5" />
                          Hekim Yaklaşımı & Terapötik Müdahale:
                        </span>
                        <p className="text-neutral-300 leading-relaxed">
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
            <div className="p-8 text-center border border-neutral-800 bg-[#0d0d0d] text-neutral-400">
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
                className="border border-neutral-800 bg-[#0d0d0d] p-5 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-start justify-between pb-3 border-b border-neutral-800">
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight">
                      {school.title}
                    </h3>
                    <p className="text-xs text-red-400 font-mono mt-0.5">
                      Öncü Kuramcılar: {school.theorists}
                    </p>
                  </div>
                  <Layers className="w-5 h-5 text-neutral-500" />
                </div>

                <div className="mt-4 space-y-4">
                  {school.coreConcepts.map((concept, idx) => (
                    <div key={idx} className="p-3 bg-[#131313] border border-neutral-800/80">
                      <h4 className="font-semibold text-sm text-neutral-200 flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3 h-3 text-red-500" />
                        {concept.term}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-2">
                        {concept.explanation}
                      </p>
                      <div className="text-xs border-l-2 border-red-600 pl-2 text-neutral-300 bg-neutral-900/50 py-1">
                        <span className="text-red-400 font-semibold">Klinik Yansıma: </span>
                        {concept.clinicalApplication}
                      </div>
                    </div>
                  ))}

                  <div className="p-3 bg-red-950/20 border border-red-900/40 text-xs">
                    <span className="text-red-400 font-bold block mb-1">
                      Klinik Psikiyatrideki Yeri:
                    </span>
                    <p className="text-neutral-300 leading-relaxed">
                      {school.clinicalRelevanceInPsychiatry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Section: Kernberg Kişilik Örgütlenmesi Karşılaştırma Tablosu */}
          <div className="border border-neutral-800 bg-[#0d0d0d] p-5">
            <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              Otto Kernberg Yapısal Kişilik Örgütlenmeleri Karşılaştırma Matrisi
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-800">
                <thead className="bg-[#151515] text-neutral-300 uppercase tracking-wider font-mono border-b border-neutral-800">
                  <tr>
                    <th className="p-3">Yapısal Boyut</th>
                    <th className="p-3 text-emerald-400">Nevrotik Düzey</th>
                    <th className="p-3 text-amber-400">Borderline Düzey</th>
                    <th className="p-3 text-red-400">Psikotik Düzey</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-300">
                  <tr>
                    <td className="p-3 font-semibold text-white">Kimlik Bütünlüğü</td>
                    <td className="p-3">Bütünleşmiş kimlik (Kendilik ve ötekiler tutarlı algılanır)</td>
                    <td className="p-3">Kimlik Difüzyonu (Parçalı, çelişkili, boşluk hissi)</td>
                    <td className="p-3">Kimlik Kaybı (Kendilik ile nesne sınırları erimiş)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Savunma Düzeneği</td>
                    <td className="p-3">Olgun ve Nevrotik (Bastırma, Yalıtma, Karşıt Tepki)</td>
                    <td className="p-3">İlkel (Bölme / Splitting, Yansıtmalı Özdeşim, Eyleme Vurma)</td>
                    <td className="p-3">İlkel (İnkar, Yansıtma, Parçalanma)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Gerçeklik Değerlendirmesi</td>
                    <td className="p-3">Tamamen korunmuş</td>
                    <td className="p-3">Korunmuş (Yoğun stres/duygulanım altında geçici bozulabilir)</td>
                    <td className="p-3">Ciddi düzeyde bozulmuş (Hezeyanlar, Halüsinasyonlar)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Terapötik Hedef</td>
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
        <div className="border border-neutral-800 bg-[#0d0d0d] p-6 space-y-6 text-white">
          <div className="border-b border-neutral-800 pb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-500" />
              Psikiyatride 4 Boyutlu Psikodinamik Vaka Formülasyonu
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Yalnızca DSM tanı kodlaması yapmak yerine hastanın "Neden şimdi?", "Hangi karakter zemininde?",
              ve "Hangi çatışma nedeniyle?" hastalandığını gösteren klinik harita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 bg-[#141414] border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-red-950 border border-red-700 flex items-center justify-center text-xs">1</span>
                Tetikleyici Faktör & Güncel Kriz
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Belirtilerin aniden tetiklendiği sembolik olay (terk edilme, terfi, emeklilik, hastalık, kayıp).
                Olayın hastanın çocukluk çatışmaları ve kırılganlıklarıyla sembolik rezonansı nedir?
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-red-950 border border-red-700 flex items-center justify-center text-xs">2</span>
                Çekirdek Çatışma (CCRT Modeli)
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                <strong>İstek (Wish):</strong> Hastanın başkalarından arzuladığı şey (örn. "Beni koşulsuz sevsinler").<br />
                <strong>Ötekinin Yanıtı (RO):</strong> Beklediği/algıladığı tepki (örn. "Beni sömürecek ve aşağılayacaklar").<br />
                <strong>Kendiliğin Yanıtı (RS):</strong> Çatışmaya verdiği tepki (örn. "Geri çekilip derin depresyona giriyorum").
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-red-950 border border-red-700 flex items-center justify-center text-xs">3</span>
                Karakter Yapısı & Savunma Aygıtı
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Hangi ego savunmalarını baskın olarak kullanıyor? (İlkel bölme ve eyleme vurma mı, yoksa obsesif yalıtma ve rasyonalizasyon mu?)
                Kişilik örgütlenmesi düzeyi (Nevrotik - Borderline - Psikotik).
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-red-950 border border-red-700 flex items-center justify-center text-xs">4</span>
                Terapötik İlişki & Karşı-Aktarım Tuzakları
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
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
