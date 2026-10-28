import React, { useState } from 'react';
import { 
  Flame, 
  AlertOctagon, 
  Syringe, 
  Activity, 
  FileCheck, 
  Zap, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import { EMERGENCY_TOPICS_DATA } from '../data/emergencyData';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';

export const EmergencyPsychiatryView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(EMERGENCY_TOPICS_DATA[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('Hepsi');

  const categories = ['Hepsi', 'Ajitasyon & Şiddet', 'Katatoni', 'Delirium', 'İntihar Krizi', 'Yoksunluk Sendromları', 'Toksisiteler & Sendromlar'];

  const filteredTopics = activeCategory === 'Hepsi'
    ? EMERGENCY_TOPICS_DATA
    : EMERGENCY_TOPICS_DATA.filter(t => t.category === activeCategory);

  const currentTopic = EMERGENCY_TOPICS_DATA.find(t => t.id === selectedTopicId) || EMERGENCY_TOPICS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
            <Flame className="w-3.5 h-3.5 text-neutral-900" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Bölüm 5</span>
              <span className="text-neutral-300">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                Acil Psikiyatri & Kriz Müdahale Rehberi
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
              Akut ajitasyon, katatoni lorazepam testi, deliryum protokolü, intihar krizi ve toksisiteler.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[11px] font-semibold border border-rose-200/70">
            Kritik Acil Protokolleri
          </span>
        </div>
      </div>

      {/* Category Filter Pills (Compact & Wrapped) */}
      <div className="flex flex-wrap items-center gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              const firstInCat = cat === 'Hepsi' 
                ? EMERGENCY_TOPICS_DATA[0] 
                : EMERGENCY_TOPICS_DATA.find(t => t.category === cat);
              if (firstInCat) setSelectedTopicId(firstInCat.id);
            }}
            className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-all border rounded-md cursor-pointer select-none shadow-2xs ${
              activeCategory === cat
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 hover:bg-neutral-900 text-neutral-700 hover:text-white border-neutral-200 hover:border-neutral-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Left Selector, Right Detailed Protocol */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Topic List */}
        <div className="lg:col-span-4 space-y-2.5">
          {filteredTopics.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-left p-4 border transition-all cursor-pointer rounded-lg ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 hover:text-black'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase ${
                    isSelected ? 'text-neutral-300' : 'text-neutral-500'
                  }`}>
                    {topic.category}
                  </span>
                  <span className={`px-2 py-0.5 text-[9px] font-bold border rounded-lg ${
                    isSelected 
                      ? 'bg-neutral-800 text-white border-neutral-700' 
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                  }`}>
                    {topic.urgencyLevel}
                  </span>
                </div>
                <h4 className={`font-bold text-sm mt-1 font-display ${
                  isSelected ? 'text-white font-bold' : 'text-neutral-900'
                }`}>
                  {topic.title}
                </h4>
                <p className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                  isSelected ? 'text-neutral-300' : 'text-neutral-500'
                }`}>
                  {topic.quickSummary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Topic Deep-Dive Protocol */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 p-5 sm:p-6 space-y-6 shadow-2xl rounded-xl">
          {/* Header */}
          <div className="border-b border-neutral-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase">{currentTopic.category}</span>
              <span className="px-2.5 py-1 text-xs font-bold bg-neutral-100 border border-neutral-300 text-neutral-800 rounded-lg">
                {currentTopic.urgencyLevel}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1.5 font-display">{currentTopic.title}</h2>
            <p className="text-xs sm:text-sm text-neutral-800 mt-2 leading-relaxed bg-white p-3 border border-neutral-200 rounded-lg">
              {currentTopic.quickSummary}
            </p>
          </div>

          {/* 1. Kilit Güvenlik Kontrol Listesi */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-neutral-800" />
              <span>İlk 5 Dakika Kilit Güvenlik Kontrol Listesi</span>
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {currentTopic.coreChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-white border border-neutral-200 text-xs text-neutral-800 rounded-lg">
                  <span className="text-neutral-900 font-bold shrink-0">■</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Tanı Kriterleri & Eşikler */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase font-bold text-neutral-700 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-neutral-800" />
              <span>Tanısal Eşikler & Skorlama Kriterleri</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-700 bg-white p-3.5 border border-neutral-200 list-disc list-inside rounded-lg">
              {currentTopic.diagnosticCriteria.map((crit, idx) => (
                <li key={idx} className="leading-relaxed">{crit}</li>
              ))}
            </ul>
          </div>

          {/* 3. Birinci Basamak Müdahale Adımları */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-neutral-800" />
              <span>Birinci Basamak Müdahale Adımları</span>
            </h4>
            <div className="space-y-2.5">
              {currentTopic.firstLineManagement.map((step, idx) => (
                <div key={idx} className="p-3.5 bg-white border border-neutral-200 space-y-1.5 rounded-lg">
                  <div className="font-bold text-xs text-neutral-900 font-display">{step.step}</div>
                  <p className="text-xs text-neutral-800 leading-relaxed">{step.action}</p>
                  {step.cautionNote && (
                    <div className="p-2.5 bg-neutral-100 border border-neutral-300 text-[11px] font-bold text-neutral-800 mt-1.5 rounded-lg">
                      ⚠️ {step.cautionNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Farmakoterapi Dozlama Tablosu */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 flex items-center gap-1.5">
              <Syringe className="w-4 h-4 text-neutral-800" />
              <span>Acil Farmakoterapi İlaç Doz Tablosu</span>
            </h4>
            <div className="overflow-x-auto border border-neutral-200 rounded-lg">
              <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
                <thead className="bg-neutral-50 text-neutral-700 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2.5">İlaç</th>
                    <th className="px-3 py-2.5">Yol</th>
                    <th className="px-3 py-2.5">Doz</th>
                    <th className="px-3 py-2.5">Sıklık</th>
                    <th className="px-3 py-2.5">Klinik Not & İnci</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-700 bg-white">
                  {currentTopic.pharmacotherapyDosing.map((d, idx) => (
                    <tr key={idx} className="hover:bg-neutral-100/60">
                      <td className="px-3 py-2.5 font-bold text-neutral-900 whitespace-nowrap">{d.drug}</td>
                      <td className="px-3 py-2.5 font-mono text-neutral-900 whitespace-nowrap">{d.route}</td>
                      <td className="px-3 py-2.5 font-mono text-neutral-900 whitespace-nowrap">{d.dose}</td>
                      <td className="px-3 py-2.5 text-neutral-500 whitespace-nowrap">{d.frequency}</td>
                      <td className="px-3 py-2.5 text-neutral-700 leading-relaxed">{d.pearl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Kontrendikasyonlar, Tuzaklar & İzlem Parametreleri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-white border border-neutral-200 space-y-1.5 rounded-lg">
              <h5 className="text-[11px] font-mono font-bold text-neutral-900 uppercase flex items-center gap-1">
                <AlertOctagon className="w-3.5 h-3.5 text-neutral-800" />
                <span>Kritik Tuzaklar & Kontrendikasyonlar</span>
              </h5>
              <ul className="space-y-1 text-xs text-neutral-700 list-disc list-inside">
                {currentTopic.contraindicationsAndTraps.map((trap, idx) => (
                  <li key={idx} className="leading-relaxed">{trap}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-white border border-neutral-200 space-y-1.5 rounded-lg">
              <h5 className="text-[11px] font-mono font-bold text-neutral-700 uppercase flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>Takip & Vital Monitorizasyon</span>
              </h5>
              <ul className="space-y-1 text-xs text-neutral-500 list-disc list-inside">
                {currentTopic.monitoringParameters.map((mon, idx) => (
                  <li key={idx} className="leading-relaxed">{mon}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
