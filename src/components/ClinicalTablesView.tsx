import React, { useState } from 'react';
import { 
  Table2, 
  Flame, 
  ArrowRightLeft, 
  ShieldAlert, 
  Activity, 
  Clock, 
  Calculator,
  Sparkles,
  AlertOctagon,
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { 
  EMERGENCY_DIFFERENTIAL_DATA, 
  ANTIPSYCHOTIC_EQUIVALENCE_DATA, 
  ANTIDEPRESSANT_SWITCH_DATA,
  CLOZAPINE_ANC_PROTOCOL,
  LITHIUM_LEVEL_PROTOCOL,
  BENZODIAZEPINE_DATA 
} from '../data/clinicalTablesData';

export const ClinicalTablesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'emergency' | 'antipsychotic' | 'switch' | 'clozapine' | 'lithium' | 'benzo'>('emergency');
  
  // Antipsychotic calculator state
  const [calcDrug, setCalcDrug] = useState<string>('Olanzapin');
  const [calcDose, setCalcDose] = useState<number>(10);

  // Compute CPZ equivalent dose
  const sourceAP = ANTIPSYCHOTIC_EQUIVALENCE_DATA.find(a => a.genericName.toLowerCase().includes(calcDrug.toLowerCase())) || ANTIPSYCHOTIC_EQUIVALENCE_DATA[1];
  const cpzRatio = 100 / sourceAP.chlorpromazineEq;
  const computedCpz = Math.round(calcDose * cpzRatio);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 text-red-500 font-semibold text-xs font-mono uppercase tracking-wider">
          <Table2 className="w-4 h-4 text-red-500" />
          <span>Hızlı Başvuru Klinik Tabloları & Hesaplayıcılar</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
          Klinik Karar Destek Tabloları
        </h1>
        <p className="text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
          Nöbet ve poliklinik pratiğinde en sık ihtiyaç duyulan acil toksisite ayırıcı tanıları, antipsikotik ve benzodiazepin eşdeğerlikleri, antidepresan değişim protokolleri.
        </p>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex space-x-1.5 overflow-x-auto bg-[#101010] p-2 border border-neutral-800 scrollbar-none">
        {[
          { id: 'emergency', label: 'Acil Toksisiteler (NMS vs Serotonin)', icon: <Flame className="w-4 h-4 text-red-500" /> },
          { id: 'antipsychotic', label: 'Antipsikotik Eşdeğerlikleri & Hesaplayıcı', icon: <Calculator className="w-4 h-4 text-red-400" /> },
          { id: 'switch', label: 'Antidepresan Değişim Algoritması', icon: <ArrowRightLeft className="w-4 h-4 text-red-400" /> },
          { id: 'clozapine', label: 'Klozapin ANC Protokolü', icon: <ShieldAlert className="w-4 h-4 text-red-500" /> },
          { id: 'lithium', label: 'Lityum Düzeyi & Toksisite', icon: <Activity className="w-4 h-4 text-red-400" /> },
          { id: 'benzo', label: 'Benzodiazepin Eşdeğerliği', icon: <Clock className="w-4 h-4 text-neutral-400" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
              activeTab === tab.id
                ? 'bg-red-600 text-white border-red-500 shadow-md'
                : 'bg-[#141414] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 1. Emergency Differential Tab */}
      {activeTab === 'emergency' && (
        <div className="space-y-4">
          <div className="p-4 bg-red-950/30 border border-red-800/60 text-xs sm:text-sm text-red-200 flex items-start gap-3">
            <AlertOctagon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white">Hayati Psikiyatrik Toksisitelerin Ayırıcı Tanısı</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Nöroleptik Malign Sendrom (NMS), Serotonin Sendromu, Antikolinerjik Toksisite ve Malign Hipertermi klinikte birbirini taklit edebilir. Tanıda kilit noktalar: <strong>refleksler (hiperrefleksi/klonus vs rijidite)</strong>, <strong>terleme durumu (kupkuru cilt vs terli cilt)</strong> ve <strong>pupil çapı</strong>dır.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto bg-[#0d0d0d] border border-neutral-800 shadow-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-[#141414] text-neutral-300 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3 w-44">Klinik Özellik</th>
                  <th className="px-4 py-3 bg-red-950/40 text-red-300">Serotonin Sendromu</th>
                  <th className="px-4 py-3 bg-neutral-900 text-white">Nöroleptik Malign Sendrom (NMS)</th>
                  <th className="px-4 py-3 bg-[#181818] text-neutral-300">Antikolinerjik Toksisite</th>
                  <th className="px-4 py-3">Malign Hipertermi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                {EMERGENCY_DIFFERENTIAL_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40">
                    <td className="px-4 py-3 font-bold text-white">{row.feature}</td>
                    <td className="px-4 py-3 bg-red-950/10 text-red-200 font-medium leading-relaxed">{row.serotoninSyndrome}</td>
                    <td className="px-4 py-3 bg-neutral-950 text-white font-medium leading-relaxed">{row.nms}</td>
                    <td className="px-4 py-3 bg-black text-neutral-300 font-medium leading-relaxed">{row.anticholinergicToxicity}</td>
                    <td className="px-4 py-3 text-neutral-300 leading-relaxed">{row.malignantHyperthermia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. Antipsychotic Equivalence Tab & Interactive Calculator */}
      {activeTab === 'antipsychotic' && (
        <div className="space-y-6">
          {/* Interactive Calculator Card */}
          <div className="p-5 bg-[#0d0d0d] border border-neutral-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-sm text-white">
                İnteraktif Antipsikotik Eşdeğer Doz Hesaplayıcı
              </h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Herhangi bir antipsikotik dozunu girin; Klorpromazin (CPZ 100 mg) ve Olanzapin eşdeğerlerini ve diğer antipsikotiklerin karşılık gelen yaklaşık dozlarını anında görün.
            </p>

            <div className="flex flex-wrap items-center gap-4 bg-black p-4 border border-neutral-800">
              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase font-mono mb-1">Kaynak İlaç</label>
                <select
                  value={calcDrug}
                  onChange={(e) => setCalcDrug(e.target.value)}
                  className="px-3 py-2 text-xs font-semibold bg-[#161616] border border-neutral-700 text-white focus:outline-none focus:border-red-600"
                >
                  {ANTIPSYCHOTIC_EQUIVALENCE_DATA.map((ap) => (
                    <option key={ap.genericName} value={ap.genericName.split(' ')[0]}>
                      {ap.genericName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase font-mono mb-1">Günlük Doz (mg)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={calcDose}
                  onChange={(e) => setCalcDose(Math.max(0.1, parseFloat(e.target.value) || 0))}
                  className="w-24 px-3 py-2 text-xs font-semibold bg-[#161616] border border-neutral-700 text-white font-mono focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="sm:ml-auto flex items-center gap-4 bg-[#141414] px-4 py-2.5 border border-neutral-800">
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">CPZ Eşdeğeri:</span>
                  <span className="text-base font-extrabold text-red-400 font-mono">~{computedCpz} mg</span>
                </div>
                <div className="h-6 w-px bg-neutral-700" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Olanzapin Eşdeğeri:</span>
                  <span className="text-base font-extrabold text-white font-mono">~{(computedCpz / 20).toFixed(1)} mg</span>
                </div>
              </div>
            </div>

            {/* Live conversion cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {ANTIPSYCHOTIC_EQUIVALENCE_DATA.map((ap) => {
                const equivDose = ((computedCpz / 100) * ap.chlorpromazineEq).toFixed(1);
                return (
                  <div key={ap.genericName} className="p-2.5 bg-black border border-neutral-800 text-center">
                    <span className="text-[11px] font-semibold text-neutral-400 block truncate">{ap.genericName.split(' ')[0]}</span>
                    <span className="text-sm font-bold text-red-400 font-mono">{equivDose} mg</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Reference Table */}
          <div className="overflow-x-auto bg-[#0d0d0d] border border-neutral-800 shadow-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-[#141414] text-neutral-300 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">Antipsikotik</th>
                  <th className="px-4 py-3">CPZ 100 mg Eşdeğeri</th>
                  <th className="px-4 py-3">Olanzapin Eşdeğeri</th>
                  <th className="px-4 py-3">Sedasyon</th>
                  <th className="px-4 py-3">EPS Riski</th>
                  <th className="px-4 py-3">Metabolik Risk</th>
                  <th className="px-4 py-3">Prolaktin Yükselmesi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                {ANTIPSYCHOTIC_EQUIVALENCE_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40">
                    <td className="px-4 py-3 font-bold text-white">{item.genericName}</td>
                    <td className="px-4 py-3 font-mono font-bold text-red-400">{item.chlorpromazineEq} mg</td>
                    <td className="px-4 py-3 font-mono text-neutral-300">{item.olanzapineEq} mg</td>
                    <td className="px-4 py-3">{item.sedation}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold border ${
                        item.epsRisk === 'Çok Yüksek' ? 'bg-red-950 text-red-300 border-red-800' :
                        item.epsRisk === 'Yüksek' ? 'bg-red-900/40 text-red-300 border-red-700' :
                        item.epsRisk === 'Çok Düşük' ? 'bg-neutral-900 text-neutral-300 border-neutral-700' : 'bg-black text-neutral-400 border-neutral-800'
                      }`}>
                        {item.epsRisk}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold border ${
                        item.metabolicRisk === 'Çok Yüksek' ? 'bg-red-950 text-red-300 border-red-800' :
                        item.metabolicRisk === 'Yüksek' ? 'bg-red-900/40 text-red-300 border-red-700' :
                        item.metabolicRisk === 'Düşük' ? 'bg-neutral-900 text-neutral-300 border-neutral-700' : 'bg-black text-neutral-400 border-neutral-800'
                      }`}>
                        {item.metabolicRisk}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold border ${
                        item.prolactinElevation === 'Çok Yüksek' ? 'bg-red-950 text-red-300 border-red-800' :
                        item.prolactinElevation.includes('Düşürür') ? 'bg-neutral-900 text-white border-neutral-700 font-bold' : 'bg-black text-neutral-400 border-neutral-800'
                      }`}>
                        {item.prolactinElevation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. Antidepressant Switch Algorithm */}
      {activeTab === 'switch' && (
        <div className="space-y-4">
          {/* Recommended Global Gold-Standard Switch Tool Banner */}
          <div className="p-5 bg-[#101010] border-2 border-red-700 shadow-xl space-y-3 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-red-950 border border-red-800 text-red-400 shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                    KLİNİK TAVSİYE & İNTERAKTİF DIŞ KAYNAK
                  </span>
                  <h4 className="font-bold text-base text-white mt-0.5">
                    PsychiatryNet: SwitchAntidepressants İnteraktif Kılavuzu
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                    Kenniscentrum Psychiatrie (Hollanda) tarafından hazırlanan bu platform, iki antidepresan arasındaki geçiş stratejilerini (doz düşürme, çapraz titrasyon, washout süreleri ve serotonin sendromu risklerini) molekül bazında hesaplayan uluslararası referans sistemidir.
                  </p>
                </div>
              </div>

              <a
                href="https://wiki.psychiatrienet.nl/wiki/SwitchAntidepressants"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs font-mono uppercase transition-colors shrink-0 shadow-md"
              >
                <span>Switch Kılavuzunu Aç</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            <div className="pt-2 border-t border-neutral-800 flex flex-wrap items-center gap-4 text-[11px] font-mono text-neutral-400">
              <span>➔ Resmi Bağlantı: <strong className="text-neutral-200">wiki.psychiatrienet.nl/wiki/SwitchAntidepressants</strong></span>
              <span className="hidden sm:inline text-neutral-700">|</span>
              <span>Kanıta Dayalı Farmakokinetik Matris</span>
            </div>
          </div>

          <div className="p-4 bg-red-950/20 border border-red-800/60 text-xs sm:text-sm text-red-200">
            <h4 className="font-bold text-white">Antidepresan Değişim (Switching) Genel İlkeleri</h4>
            <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
              Amaç hem çekilme (discontinuation) semptomlarını önlemek hem de serotonerjik toksisiteden kaçınmaktır. 
              <strong> Kural:</strong> MAOI içeren tüm geçişlerde katı bekleme (washout) süresi uygulanmalıdır (Örn: Fluoksetin sonrası MAOI için en az 5 hafta bekleme).
            </p>
          </div>

          <div className="space-y-3">
            {ANTIDEPRESSANT_SWITCH_DATA.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#0d0d0d] border border-neutral-800 shadow-sm space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{item.fromClass}</span>
                    <span className="text-xs text-red-500 font-bold">➔</span>
                    <span className="font-bold text-sm text-red-400">{item.toClass}</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 border ${
                    item.strategy.includes('Washout') ? 'bg-red-950 text-red-300 border-red-800' :
                    item.strategy.includes('Çapraz') ? 'bg-neutral-900 text-white border-neutral-700' : 'bg-black text-neutral-300 border-neutral-800'
                  }`}>
                    {item.strategy}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.instructions}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Clozapine Protocol */}
      {activeTab === 'clozapine' && (
        <div className="space-y-4">
          <div className="p-4 bg-red-950/30 border border-red-800/60 text-xs sm:text-sm text-red-200">
            <h3 className="font-bold text-white">{CLOZAPINE_ANC_PROTOCOL.title}</h3>
            <p className="text-xs text-neutral-300 mt-1">{CLOZAPINE_ANC_PROTOCOL.summary}</p>
            <p className="text-xs font-semibold text-red-400 mt-2">İzlem Sıklığı: {CLOZAPINE_ANC_PROTOCOL.frequency}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {CLOZAPINE_ANC_PROTOCOL.zones.map((zone, idx) => (
              <div
                key={idx}
                className={`p-4 border space-y-2 ${
                  zone.color.includes('Yeşil') ? 'bg-[#101010] border-neutral-700' :
                  zone.color.includes('Sarı') ? 'bg-neutral-900 border-neutral-600' : 'bg-red-950/40 border-red-800 ring-1 ring-red-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">{zone.color}</span>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-black border border-neutral-700 text-white">
                    {zone.ancRange}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-neutral-300 leading-relaxed">
                  <strong className="text-white">Eylem:</strong> {zone.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Lithium Protocol */}
      {activeTab === 'lithium' && (
        <div className="space-y-4">
          <div className="p-4 bg-red-950/30 border border-red-800/60 text-xs sm:text-sm text-red-200">
            <h3 className="font-bold text-white">{LITHIUM_LEVEL_PROTOCOL.title}</h3>
            <p className="text-xs text-neutral-300 mt-1 font-medium">⚠️ {LITHIUM_LEVEL_PROTOCOL.samplingTime}</p>
          </div>

          <div className="space-y-2.5">
            {LITHIUM_LEVEL_PROTOCOL.levels.map((lvl, idx) => (
              <div key={idx} className="p-4 bg-[#0d0d0d] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-bold px-2.5 py-0.5 bg-black text-red-400 border border-neutral-800">
                      {lvl.range}
                    </span>
                    <span className="font-bold text-sm text-white">{lvl.status}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{lvl.clinicalNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Benzodiazepine Equivalence */}
      {activeTab === 'benzo' && (
        <div className="space-y-4">
          <div className="p-4 bg-[#0d0d0d] border border-neutral-800 text-xs sm:text-sm text-neutral-300">
            <h4 className="font-bold text-white">Benzodiazepin Doz Eşdeğerliği ve Ashton Kademeli Kesme İlkeleri</h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Tüm dozlar <strong>Diazepam 10 mg</strong> eşdeğeri olarak verilmiştir. Bağımlılık gelişmiş hastalarda kısa etkili ajanlar (Alprazolam, Lorazepam) önce uzun etkili eşdeğer Diazepam dozuna çevrilir ve 1-2 haftalık aralıklarla %10-25 azaltılır.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#0d0d0d] border border-neutral-800 shadow-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-[#141414] text-neutral-300 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">İlaç Adı</th>
                  <th className="px-4 py-3">Diazepam 10 mg Eşdeğeri</th>
                  <th className="px-4 py-3">Yarı Ömrü (t½)</th>
                  <th className="px-4 py-3">Etki Başlangıcı</th>
                  <th className="px-4 py-3">Aktif Metabolit</th>
                  <th className="px-4 py-3">Klinik Kullanım Özelliği</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                {BENZODIAZEPINE_DATA.map((b, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40">
                    <td className="px-4 py-3 font-bold text-white">{b.name}</td>
                    <td className="px-4 py-3 font-mono font-bold text-red-400">{b.equivalentDose} mg</td>
                    <td className="px-4 py-3 text-neutral-300">{b.halfLifeHours}</td>
                    <td className="px-4 py-3 text-neutral-300">{b.onset}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-[10px] font-bold border ${
                        b.activeMetabolite ? 'bg-red-950 text-red-300 border-red-800' : 'bg-black text-neutral-400 border-neutral-800'
                      }`}>
                        {b.activeMetabolite ? 'Var' : 'Yok'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-300 leading-relaxed">{b.clinicalUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
