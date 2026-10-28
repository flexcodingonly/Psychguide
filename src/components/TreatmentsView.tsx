import React, { useState } from 'react';
import { 
  Pill, 
  GitBranch, 
  Sparkles, 
  Zap, 
  HeartHandshake, 
  AlertTriangle 
} from 'lucide-react';
import { MedicationsView } from './MedicationsView';
import { GuidelinesView } from './GuidelinesView';
import { 
  PSYCHOTHERAPY_DATA, 
  NEUROMODULATION_DATA, 
  SIDE_EFFECT_MANAGEMENT_DATA 
} from '../data/treatmentsData';

interface TreatmentsViewProps {
  selectedMedicationId?: string;
  selectedGuidelineId?: string;
  bookmarkedIds?: string[];
  onToggleBookmark?: (id: string, type: 'disorder' | 'medication' | 'guideline') => void;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({
  selectedMedicationId,
  selectedGuidelineId,
  bookmarkedIds = [],
  onToggleBookmark = () => {}
}) => {
  const [activeTab, setActiveTab] = useState<'medications' | 'algorithms' | 'psychotherapy' | 'neuromodulation' | 'side_effects'>('medications');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
            <Pill className="w-3.5 h-3.5 text-neutral-900" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Bölüm 4</span>
              <span className="text-neutral-300">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                Tedaviler & Psikofarmakoloji (Treatments)
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
              Psikotrop monografları, kılavuz algoritmaları, psikoterapiler, nöromodülasyon (EKT/rTMS) ve yan etki yönetimi.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium border border-neutral-200/80">
            5 Tedavi Modülü
          </span>
        </div>
      </div>

      {/* Compact Sub-Navigation Tabs (Wrapped & Fully Visible) */}
      <div className="bg-white/95 backdrop-blur-xs border border-neutral-200/90 rounded-lg p-1.5 flex flex-wrap items-center gap-1.5 shadow-2xs">
        {[
          { id: 'medications', label: '1. İlaç Monografları', icon: <Pill className="w-3.5 h-3.5 text-blue-500" /> },
          { id: 'algorithms', label: '2. Kılavuz Algoritmaları', icon: <GitBranch className="w-3.5 h-3.5 text-purple-500" /> },
          { id: 'psychotherapy', label: '3. Psikoterapiler', icon: <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" /> },
          { id: 'neuromodulation', label: '4. Nöromodülasyon (EKT/TMS)', icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> },
          { id: 'side_effects', label: '5. Yan Etki Yönetimi', icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-500" /> }
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

      {/* 1. Medications Monographs */}
      {activeTab === 'medications' && (
        <div>
          <MedicationsView 
            selectedMedicationId={selectedMedicationId}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      )}

      {/* 2. Clinical Guideline Algorithms */}
      {activeTab === 'algorithms' && (
        <div>
          <GuidelinesView 
            selectedGuidelineId={selectedGuidelineId}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      )}

      {/* 3. Psychotherapy */}
      {activeTab === 'psychotherapy' && (
        <div className="space-y-6">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">Kanıta Dayalı Psikoterapiler & Klinik Uygulama İlkeleri</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Bilişsel Davranışçı Terapi (BDT), Diyalektik Davranış Terapisi (DBT) ve Kabul ve Kararlılık Terapisi (ACT) çekirdek mekanizmaları ve klinik vaka uygulama teknikleri.
            </p>
          </div>

          <div className="space-y-6">
            {PSYCHOTHERAPY_DATA.map((pt) => (
              <div key={pt.id} className="p-5 sm:p-6 bg-white border border-neutral-200 space-y-4 rounded-xl shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-3 gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">{pt.shortName}</span>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">{pt.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-900 bg-neutral-50 px-3 py-1 border border-neutral-200 rounded-lg">
                    {pt.durationAndStructure}
                  </span>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1.5">Temel Endikasyonlar:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pt.primaryIndications.map((ind, i) => (
                      <span key={i} className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 rounded-lg">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-neutral-500 uppercase font-bold mb-2">Çekirdek Klinik Teknikler:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {pt.coreTechniques.map((tech, i) => (
                      <div key={i} className="p-3 bg-white border border-neutral-200 space-y-1.5 rounded-lg">
                        <h5 className="font-bold text-xs text-neutral-900 font-display">{tech.techniqueName}</h5>
                        <p className="text-[11px] text-neutral-700 leading-relaxed">{tech.description}</p>
                        <div className="p-2 bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-500 italic rounded-lg">
                          {tech.exampleInClinic}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-white border border-neutral-200 text-xs text-neutral-700 space-y-1 rounded-lg">
                  <span className="font-bold text-neutral-900 block font-mono text-[10px] uppercase">💡 Maudsley & Stahl Klinik İnciler:</span>
                  {pt.clinicalPearls.map((pearl, i) => (
                    <p key={i} className="text-neutral-700 leading-relaxed">• {pearl}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Neuromodulation */}
      {activeTab === 'neuromodulation' && (
        <div className="space-y-6">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">Girişimsel Psikiyatri & Nöromodülasyon Protokolleri</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              İlaca dirençli depresyon, ağır katatoni ve akut intihar krizlerinde EKT, tekrarlayan TMS (rTMS) ve intravenöz/intranazal Ketamin protokolleri.
            </p>
          </div>

          <div className="space-y-6">
            {NEUROMODULATION_DATA.map((nm, idx) => (
              <div key={idx} className="p-5 sm:p-6 bg-white border border-neutral-200 space-y-4 rounded-xl shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-3 gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">{nm.modality}</span>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">{nm.name}</h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-900 bg-neutral-50 px-3 py-1 border border-neutral-300 rounded-lg">
                    Etkinlik: {nm.efficacyRate}
                  </span>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1.5">Öncelikli Endikasyonlar:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {nm.keyIndications.map((ind, i) => (
                      <span key={i} className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 rounded-lg">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                    <h5 className="font-bold text-neutral-800 font-mono text-[11px] uppercase">Etki Mekanizması:</h5>
                    <p className="text-neutral-500 leading-relaxed">{nm.mechanismOfAction}</p>
                  </div>

                  <div className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                    <h5 className="font-bold text-neutral-800 font-mono text-[11px] uppercase">Uygulama & Doz Protokolü:</h5>
                    <p className="text-neutral-500 leading-relaxed">{nm.protocolAndDosing}</p>
                  </div>
                </div>

                <div className="p-3 bg-white border border-neutral-200 text-xs space-y-1 rounded-lg">
                  <h5 className="font-bold text-neutral-900 font-mono text-[11px] uppercase">Yan Etkiler ve Kontrendikasyonlar:</h5>
                  <p className="text-neutral-700 leading-relaxed">{nm.adverseEffectsAndManagement}</p>
                  <p className="text-neutral-500 text-[11px] pt-1 leading-relaxed">
                    <strong>Kontrendikasyonlar:</strong> {nm.contraindications.join(' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Side Effect Management */}
      {activeTab === 'side_effects' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">Psikofarmakolojide Kritik Yan Etkilerin Yönetimi</h4>
            <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
              Ekstrapiramidal semptomlar (Akatizi, Akut Distoni, Tardif Diskinezi), hiperprolaktinemi ve antipsikotik kaynaklı metabolik kilo alımına kanıta dayalı müdahale algoritmaları.
            </p>
          </div>

          <div className="space-y-4">
            {SIDE_EFFECT_MANAGEMENT_DATA.map((se, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-2 gap-2">
                  <h4 className="font-bold text-base text-neutral-900 font-display">{se.syndrome}</h4>
                  <div className="flex flex-wrap gap-1">
                    {se.culpritDrugs.map((drug, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-lg">
                        {drug}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase font-bold block mb-1">Klinik Tablo & Ayırıcı Özellik:</span>
                    <p className="text-neutral-700 leading-relaxed">{se.clinicalPresentation}</p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-neutral-900 uppercase font-bold block mb-1">İlk Basamak Eylem:</span>
                    <p className="text-neutral-800 font-medium leading-relaxed">{se.firstLineAction}</p>
                  </div>
                </div>

                <div className="p-3 bg-white border border-neutral-200 text-xs rounded-lg">
                  <span className="text-neutral-900 font-mono font-bold block mb-0.5">Farmakolojik Antidot & Spesifik Tedavi:</span>
                  <p className="text-neutral-700 leading-relaxed">{se.pharmacologicalAntidote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
