import React, { useState } from 'react';
import { 
  Table2, 
  ShieldAlert, 
  Activity, 
  Clock, 
  Calculator,
  Heart, 
  Droplets, 
  Dna, 
  CalendarCheck
} from 'lucide-react';
import { 
  CLOZAPINE_ANC_PROTOCOL,
  LITHIUM_LEVEL_PROTOCOL,
  BENZODIAZEPINE_DATA,
  QTC_RISK_DATA,
  RENAL_HEPATIC_DATA,
  CYP_MATRIX_DATA,
  METABOLIC_MONITORING_PROTOCOL
} from '../data/clinicalTablesData';
import { ClinicalCalculators } from './ClinicalCalculators';
import { NeuropsychCalculators } from './NeuropsychCalculators';
import { DrugInteractionChecker } from './DrugInteractionChecker';
import { PsychotropicSwitchSimulator } from './PsychotropicSwitchSimulator';
import { ClinicalCaseSimulator } from './ClinicalCaseSimulator';
import { Brain, Zap, Repeat, Award } from 'lucide-react';

export const ClinicalTablesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'calculators' | 'interactions' | 'switching' | 'cases' | 'neuropsych' | 'qtc' | 'cyp' | 'renal_hepatic' | 'benzo' | 'monitoring'
  >('calculators');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 dark:border-neutral-800 bg-white/95 dark:bg-[#111215]/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-colors">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200/70 dark:border-neutral-700">
            <Table2 className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-mono">Bölüm 1</span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                Klinik Hesaplayıcılar & Tablolar (Clinical Tools)
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 max-w-2xl leading-normal">
              QTc, CrCl (Cockcroft-Gault), Lityum, Klozapin ANC, ACB bilişsel yük, Hunter Serotonin/NMS, SIADH ve kognitif testler.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-[11px] font-medium border border-neutral-200/80 dark:border-neutral-700">
            10 Klinik Araç
          </span>
        </div>
      </div>

      {/* Compact Sub-Navigation Tabs (Wrapped & Fully Visible like Hızlı Araçlar - Tactile) */}
      <div className="bg-white/95 dark:bg-[#111215]/95 backdrop-blur-xs border border-neutral-200/90 dark:border-neutral-800 rounded-lg p-1.5 flex flex-wrap items-center gap-1.5 shadow-2xs transition-colors">
        {[
          { id: 'calculators', label: '1. Hesaplayıcılar', icon: <Calculator className="w-3.5 h-3.5" /> },
          { id: 'interactions', label: '2. İlaç Etkileşim', icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> },
          { id: 'switching', label: '3. İlaç Değiştirme (CPZ)', icon: <Repeat className="w-3.5 h-3.5 text-blue-500" /> },
          { id: 'cases', label: '4. Klinik Vaka', icon: <Award className="w-3.5 h-3.5 text-purple-500" /> },
          { id: 'neuropsych', label: '5. Nöropsikiyatri', icon: <Brain className="w-3.5 h-3.5" /> },
          { id: 'qtc', label: '6. QTc Tablosu', icon: <Heart className="w-3.5 h-3.5 text-rose-500" /> },
          { id: 'cyp', label: '7. CYP450 Matrisi', icon: <Dna className="w-3.5 h-3.5" /> },
          { id: 'renal_hepatic', label: '8. Renal & Hepatik', icon: <Droplets className="w-3.5 h-3.5 text-blue-400" /> },
          { id: 'benzo', label: '9. Benzodiazepin', icon: <Clock className="w-3.5 h-3.5" /> },
          { id: 'monitoring', label: '10. İzlem & Monitoring', icon: <Activity className="w-3.5 h-3.5 text-emerald-500" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs active:translate-y-[1px] active:scale-[0.98] ${
              activeTab === tab.id
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-xs font-bold'
                : 'bg-neutral-50 dark:bg-neutral-900/90 hover:bg-neutral-900 dark:hover:bg-neutral-100 text-neutral-700 dark:text-neutral-300 hover:text-white dark:hover:text-neutral-950 border-neutral-200 dark:border-neutral-750 hover:border-neutral-900 dark:hover:border-neutral-300'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 1. Interactive Clinical Calculators (Primary Tab) */}
      {activeTab === 'calculators' && (
        <ClinicalCalculators />
      )}

      {/* 2. Drug-Drug & Food/Substance Interaction Radar */}
      {activeTab === 'interactions' && (
        <DrugInteractionChecker />
      )}

      {/* 3. Psychotropic Switch & Equivalence Simulator */}
      {activeTab === 'switching' && (
        <PsychotropicSwitchSimulator />
      )}

      {/* 4. Clinical Case Simulator */}
      {activeTab === 'cases' && (
        <ClinicalCaseSimulator />
      )}

      {/* 5. Neuropsychiatric Calculators */}
      {activeTab === 'neuropsych' && (
        <NeuropsychCalculators />
      )}

      {/* 2. QTc Cardiac Risk Matrix */}
      {activeTab === 'qtc' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-xl">
            <h4 className="font-bold text-neutral-900 font-display">Psikotroplarda QTc Uzaması ve Torsades de Pointes (TdP) Riski</h4>
            <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
              Bazal QTc eşikleri: Erkeklerde &gt;450 ms, Kadınlarda &gt;470 ms uzamış kabul edilir. <strong>QTc &gt;500 ms veya bazale göre &gt;60 ms uzama</strong> TdP ve ani kardiyak ölüm riskini katlar; ilacın acilen kesilmesi veya dozun azaltılması gerekir.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-neutral-200 shadow-2xl rounded-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-neutral-100 text-neutral-700 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">İlaç</th>
                  <th className="px-4 py-3">Sınıf</th>
                  <th className="px-4 py-3">CredibleMeds Kategorisi</th>
                  <th className="px-4 py-3">Ortalama QTc Uzaması</th>
                  <th className="px-4 py-3">Klinik Kılavuz & Öneri</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                {QTC_RISK_DATA.map((qt, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-4 py-3 font-bold text-neutral-900 font-display">{qt.drug}</td>
                    <td className="px-4 py-3 text-neutral-500">{qt.drugClass}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-[10px] font-bold border rounded-lg ${
                        qt.credibleMedsCategory.includes('Bilinen')
                          ? 'bg-red-50 text-red-800 border-red-300'
                          : qt.credibleMedsCategory.includes('Olası')
                          ? 'bg-amber-50 text-amber-900 border-amber-300'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      }`}>
                        {qt.credibleMedsCategory}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-neutral-900">{qt.meanQcProlongation}</td>
                    <td className="px-4 py-3 text-neutral-700 leading-relaxed">{qt.clinicalRecommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. CYP450 Enzyme Matrix */}
      {activeTab === 'cyp' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-xl">
            <h4 className="font-bold text-neutral-900 font-display">CYP450 Enzim Sistemi & Klinik Etkileşim Matrisi</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              İlaç metabolizmasını yöneten temel sitokrom P450 izoenzimleri, substratları, güçlü inhibitörleri ve indükleyicileri.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-neutral-200 shadow-2xl rounded-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-neutral-100 text-neutral-700 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3 w-28">Enzim</th>
                  <th className="px-4 py-3">Önemli Substratlar</th>
                  <th className="px-4 py-3 text-neutral-900">Güçlü İnhibitörler (Düzeyi Artırır)</th>
                  <th className="px-4 py-3 text-neutral-700">Güçlü İndükleyiciler (Düzeyi Düşürür)</th>
                  <th className="px-4 py-3">Klinik Kural / Tuzak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-700">
                {CYP_MATRIX_DATA.map((cyp, idx) => (
                  <tr key={idx} className="hover:bg-neutral-100/60 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-neutral-900">{cyp.enzyme}</td>
                    <td className="px-4 py-3 leading-relaxed">{cyp.majorSubstrates.join(', ')}</td>
                    <td className="px-4 py-3 text-neutral-900 font-semibold leading-relaxed">{cyp.strongInhibitors.join(', ')}</td>
                    <td className="px-4 py-3 text-neutral-700 font-semibold leading-relaxed">{cyp.strongInducers.join(', ')}</td>
                    <td className="px-4 py-3 text-neutral-500 leading-relaxed">{cyp.clinicalSignificance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. Renal & Hepatic Dosing */}
      {activeTab === 'renal_hepatic' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-xl">
            <h4 className="font-bold text-neutral-900 font-display">Böbrek ve Karaciğer Yetmezliğinde Psikotrop Doz Modifikasyonları</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Lityum, Gabapentin ve Pregabalin tamamen böbrekten atılırken; Duloksetin karaciğer yetmezliğinde kesinlikle kontrendikedir.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-neutral-200 shadow-2xl rounded-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-neutral-100 text-neutral-700 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">İlaç</th>
                  <th className="px-4 py-3">Grup</th>
                  <th className="px-4 py-3">Renal Doz Ayarlaması (CrCl / GFR)</th>
                  <th className="px-4 py-3">Hepatik Doz Ayarlaması (Child-Pugh)</th>
                  <th className="px-4 py-3">Altın Kural</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-700">
                {RENAL_HEPATIC_DATA.map((rh, idx) => (
                  <tr key={idx} className="hover:bg-neutral-100/60 transition-colors">
                    <td className="px-4 py-3 font-bold text-neutral-900 font-display">{rh.drug}</td>
                    <td className="px-4 py-3 text-neutral-500">{rh.classType}</td>
                    <td className="px-4 py-3 text-neutral-800 leading-relaxed">{rh.renalDosing}</td>
                    <td className="px-4 py-3 text-neutral-800 leading-relaxed">{rh.hepaticDosing}</td>
                    <td className="px-4 py-3 text-neutral-900 font-medium leading-relaxed">{rh.keyRule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. Benzodiazepine Equivalence */}
      {activeTab === 'benzo' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-xl">
            <h4 className="font-bold text-neutral-900 font-display">Benzodiazepin Doz Eşdeğerliği ve Klinik Özellikler</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Tüm dozlar <strong>Diazepam 10 mg</strong> eşdeğeri olarak verilmiştir. Karaciğer yetmezliğinde tek güvenli grup <strong>LOT (Lorazepam, Oksazepam, Temazepam)</strong> ajanlarıdır.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-neutral-200 shadow-2xl rounded-xl">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
              <thead className="bg-neutral-100 text-neutral-700 font-mono font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">İlaç Adı</th>
                  <th className="px-4 py-3">Diazepam 10 mg Eşdeğeri</th>
                  <th className="px-4 py-3">Yarı Ömrü (t½)</th>
                  <th className="px-4 py-3">Etki Başlangıcı</th>
                  <th className="px-4 py-3">Aktif Metabolit</th>
                  <th className="px-4 py-3">Klinik Kullanım Özelliği</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-700">
                {BENZODIAZEPINE_DATA.map((b, idx) => (
                  <tr key={idx} className="hover:bg-neutral-100/60 transition-colors">
                    <td className="px-4 py-3 font-bold text-neutral-900 font-display">{b.name}</td>
                    <td className="px-4 py-3 font-mono font-bold text-neutral-900">{b.equivalentDose} mg</td>
                    <td className="px-4 py-3 text-neutral-700">{b.halfLifeHours}</td>
                    <td className="px-4 py-3 text-neutral-700">{b.onset}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-[10px] font-bold border rounded-lg ${
                        b.activeMetabolite ? 'bg-neutral-800 text-white border-neutral-300' : 'bg-neutral-100 text-neutral-500 border-neutral-200'
                      }`}>
                        {b.activeMetabolite ? 'Var' : 'Yok'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-700 leading-relaxed">{b.clinicalUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. Monitoring Protocols */}
      {activeTab === 'monitoring' && (
        <div className="space-y-6">
          {/* Clozapine */}
          <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm font-mono">
              <ShieldAlert className="w-4 h-4 text-neutral-800" />
              <span>{CLOZAPINE_ANC_PROTOCOL.title}</span>
            </div>
            <p className="text-xs text-neutral-500 font-mono">İzlem Sıklığı: {CLOZAPINE_ANC_PROTOCOL.frequency}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CLOZAPINE_ANC_PROTOCOL.zones.map((zone, idx) => (
                <div key={idx} className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                  <div className="font-bold text-xs text-neutral-900 font-display">{zone.color}</div>
                  <div className="text-[11px] font-mono text-neutral-700">{zone.ancRange}</div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{zone.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lithium */}
          <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm font-mono">
              <Activity className="w-4 h-4 text-neutral-800" />
              <span>{LITHIUM_LEVEL_PROTOCOL.title}</span>
            </div>
            <p className="text-xs text-neutral-500 font-mono">⚠️ {LITHIUM_LEVEL_PROTOCOL.samplingTime}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {LITHIUM_LEVEL_PROTOCOL.levels.map((lvl, idx) => (
                <div key={idx} className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                  <div className="text-xs font-mono font-bold text-neutral-900">{lvl.range}</div>
                  <div className="text-xs font-bold text-neutral-800 font-display">{lvl.status}</div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{lvl.clinicalNote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metabolic monitoring */}
          <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm font-display">
              <CalendarCheck className="w-4 h-4 text-neutral-800" />
              <span>{METABOLIC_MONITORING_PROTOCOL.title}</span>
            </div>
            <p className="text-xs text-neutral-500">{METABOLIC_MONITORING_PROTOCOL.description}</p>
            <div className="overflow-x-auto bg-white border border-neutral-200 rounded-lg">
              <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
                <thead className="bg-neutral-50 text-neutral-700 font-mono font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-2.5">Parametre</th>
                    <th className="px-4 py-2.5">Başlangıç (0. Hafta)</th>
                    <th className="px-4 py-2.5">4. Hafta</th>
                    <th className="px-4 py-2.5">8. Hafta</th>
                    <th className="px-4 py-2.5">12. Hafta</th>
                    <th className="px-4 py-2.5 text-neutral-900">Yıllık Rutin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-700">
                  {METABOLIC_MONITORING_PROTOCOL.schedule.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-100/60">
                      <td className="px-4 py-2.5 font-bold text-neutral-900">{row.parameter}</td>
                      <td className="px-4 py-2.5 font-mono">{row.baseline}</td>
                      <td className="px-4 py-2.5 font-mono">{row.week4}</td>
                      <td className="px-4 py-2.5 font-mono">{row.week8}</td>
                      <td className="px-4 py-2.5 font-mono">{row.week12}</td>
                      <td className="px-4 py-2.5 font-mono text-neutral-900">{row.annually}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
