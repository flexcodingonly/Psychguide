import React, { useState } from 'react';
import { 
  FileText, 
  Brain, 
  ShieldAlert, 
  Stethoscope, 
  HelpCircle,
  ClipboardList
} from 'lucide-react';
import { 
  PSYCHIATRIC_INTERVIEW_GUIDELINES, 
  ORGANIC_WORKUP_DATA, 
  SUICIDE_RISK_MATRIX 
} from '../data/assessmentData';
import { MSETool } from './MSETool';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';

export const AssessmentMSEView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mse' | 'interview' | 'risk' | 'workup'>('mse');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
            <Brain className="w-3.5 h-3.5 text-neutral-900" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Bölüm 2</span>
              <span className="text-neutral-300">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                Değerlendirme & Ruhsal Durum Muayenesi (MSE)
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
              Görüşme teknikleri, MSE Atlası & Canlı Epikriz, SAFE-T intihar/şiddet analizi ve organik work-up panelleri.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium border border-neutral-200/80">
            Canlı Epikriz Destekli
          </span>
        </div>
      </div>

      {/* Compact Sub-Navigation Tabs (Wrapped & Fully Visible) */}
      <div className="bg-white/95 backdrop-blur-xs border border-neutral-200/90 rounded-lg p-1.5 flex flex-wrap items-center gap-1.5 shadow-2xs">
        {[
          { id: 'mse', label: '1. MSE & Epikriz', icon: <Brain className="w-3.5 h-3.5 text-purple-500" /> },
          { id: 'interview', label: '2. Klinik Görüşme', icon: <FileText className="w-3.5 h-3.5 text-blue-500" /> },
          { id: 'risk', label: '3. Risk (SAFE-T)', icon: <ShieldAlert className="w-3.5 h-3.5 text-rose-500" /> },
          { id: 'workup', label: '4. Organik Work-Up', icon: <Stethoscope className="w-3.5 h-3.5 text-emerald-500" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs ${
              activeTab === tab.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 hover:bg-neutral-900 text-neutral-700 hover:text-white border-neutral-200 hover:border-neutral-900'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab 1: MSE Master Tool */}
      {activeTab === 'mse' && (
        <div>
          <MSETool />
        </div>
      )}

      {/* Tab 2: Psychiatric Interview */}
      {activeTab === 'interview' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">Psikiyatrik Klinik Görüşme ve Anamnez Rehberi (Kaplan & Sadock ve APA Standardı)</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Terapötik ittifakın kurulmasından premorboid kişiliğe ve soygeçmiş risklerine kadar adım adım klinik sorgulama ilkeleri.
            </p>
          </div>

          <div className="space-y-4">
            {PSYCHIATRIC_INTERVIEW_GUIDELINES.map((guide, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl shadow-xl">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-xs font-mono font-bold text-neutral-500 uppercase">{guide.phase}</span>
                  <span className="text-xs font-bold text-neutral-900 font-display">{guide.title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div>
                    <h5 className="text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1.5 flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5 text-white" />
                      <span>Görüşme Hedefleri</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-neutral-700 list-disc list-inside">
                      {guide.goals.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1.5 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Kilit Sorular</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-neutral-700 italic">
                      {guide.keyQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-white border border-neutral-200 text-xs text-neutral-700 space-y-1 rounded-lg">
                  <span className="text-[10px] font-mono font-bold text-neutral-900 uppercase block">💡 Klinik İnciler & Tuzaklar:</span>
                  {guide.clinicalPearls.map((p, i) => (
                    <p key={i} className="text-neutral-500 leading-relaxed">• {p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Risk Assessment (SAFE-T & Suicide Risk Matrix) */}
      {activeTab === 'risk' && (
        <div className="space-y-6">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">İntihar ve Şiddet Risk Değerlendirmesi (SAFE-T Triyaj Matrisi)</h4>
            <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
              İntihar düşüncesi, planı ve eylem niyeti olan hastaların değerlendirilmesinde APA, Maudsley ve TPD kanıta dayalı klinik acil yaklaşım algoritması.
            </p>
          </div>

          {/* Risk Levels Summary Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SUICIDE_RISK_MATRIX.map((lvl, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 space-y-3 flex flex-col justify-between rounded-xl shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <span className="font-bold text-base text-neutral-900 font-display">{lvl.riskLevel}</span>
                    <span className="px-2 py-0.5 text-[10px] font-bold border rounded-lg bg-neutral-100 text-neutral-800 border-neutral-300">
                      {lvl.disposition}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block mb-1.5">
                      Klinik Özellikler & Risk Belirteçleri:
                    </span>
                    <ul className="space-y-1">
                      {lvl.clinicalFeatures.map((feat, i) => (
                        <li key={i} className="text-xs text-neutral-700 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-neutral-900 font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-white border border-neutral-200 text-xs space-y-1 rounded-lg">
                  <strong className="text-neutral-900 font-mono text-[10px] uppercase block">Klinik Eylem & Dispozisyon:</strong>
                  <p className="text-neutral-700 leading-relaxed">{lvl.recommendedAction}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stanley-Brown Safety Plan Guide */}
          <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl shadow-2xl">
            <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2 font-display">
              <ShieldAlert className="w-4 h-4 text-neutral-800" />
              <span>Stanley-Brown İntihar Güvenlik Planı (Safety Planning Intervention) 6 Adım</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                <span className="text-neutral-900 font-mono font-bold block mb-1">1. Erken Uyarı İşaretleri</span>
                <p className="text-neutral-500">Krizin yaklaştığını gösteren düşünceler, görüntüler, ruh hali ve davranışlar.</p>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                <span className="text-neutral-900 font-mono font-bold block mb-1">2. İçsel Başa Çıkma</span>
                <p className="text-neutral-500">Kimseyle konuşmadan dikkati dağıtacak aktiviteler (yürüyüş, müzik, derin nefes).</p>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                <span className="text-neutral-900 font-mono font-bold block mb-1">3. Sosyal Dikkat Dağıtıcılar</span>
                <p className="text-neutral-500">Dikkati dağıtabilecek sosyal mekanlar veya güvenli arkadaşlar.</p>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                <span className="text-neutral-900 font-mono font-bold block mb-1">4. Yardım İstenecek Yakınlar</span>
                <p className="text-neutral-500">Kriz anında durumun dürüstçe paylaşılabileceği aile fertleri ve dostlar.</p>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                <span className="text-neutral-900 font-mono font-bold block mb-1">5. Profesyonel ve Acil Destek</span>
                <p className="text-neutral-500">Terapist, hekim, 112 Acil ve kriz hattı telefon numaraları.</p>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                <span className="text-neutral-900 font-mono font-bold block mb-1">6. Çevrenin Güvenli Hale Getirilmesi</span>
                <p className="text-neutral-500">Evdeki zararlı araçların (ilaç kutuları, silah, kesiciler) kilit altına alınması.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Organic Work-Up */}
      {activeTab === 'workup' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">Psikiyatride Organik ve Tıbbi Work-Up (Etiyoloji Araştırma Panelleri)</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Her psikiyatrik başvuruda organik/medikal nedenler dışlanmalıdır. Atipik yaşta başlangıç, görsel halüsinasyonlar, kognitif dalgalanma veya tedaviye direnç durumunda ileri tetkikler zorunludur.
            </p>
          </div>

          <div className="space-y-4">
            {ORGANIC_WORKUP_DATA.map((panel, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 space-y-4 rounded-xl shadow-xl">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">Klinik Endikasyon & Senaryo:</span>
                  <h4 className="text-base font-bold text-neutral-900 mt-0.5 font-display">{panel.panelName}</h4>
                  <p className="text-xs text-neutral-500 mt-1">{panel.indication}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Mandatory Tests */}
                  <div className="space-y-2">
                    <h5 className="text-[11px] font-mono text-neutral-900 uppercase font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                      <span>Zorunlu Temel Tetkikler (Mandatory)</span>
                    </h5>
                    <div className="space-y-1.5">
                      {panel.mandatoryTests.map((t, i) => (
                        <div key={i} className="p-2 bg-white border border-neutral-200 text-xs rounded-lg">
                          <span className="font-bold text-neutral-800 block">{t.test}</span>
                          <span className="text-[11px] text-neutral-500">{t.rationale}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Extended Tests */}
                  <div className="space-y-2">
                    <h5 className="text-[11px] font-mono text-neutral-700 uppercase font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      <span>Genişletilmiş / İleri Tetkikler (Extended)</span>
                    </h5>
                    <div className="space-y-1.5">
                      {panel.extendedTests.map((t, i) => (
                        <div key={i} className="p-2 bg-white border border-neutral-200 text-xs rounded-lg">
                          <span className="font-bold text-neutral-700 block">{t.test}</span>
                          <span className="text-[11px] text-neutral-500">{t.rationale}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Neuroimaging & EEG */}
                {panel.neuroimagingAndEeg.length > 0 && (
                  <div className="p-3 bg-white border border-neutral-200 text-xs text-neutral-800 space-y-1.5 rounded-lg">
                    <span className="font-bold font-mono text-[11px] uppercase tracking-wider block text-neutral-900">
                      🧠 Nörogörüntüleme & EEG Endikasyon Kriterleri:
                    </span>
                    {panel.neuroimagingAndEeg.map((n, i) => (
                      <p key={i} className="text-neutral-700 leading-relaxed">
                        <strong className="text-neutral-900">{n.modality}:</strong> {n.indicationRule}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
