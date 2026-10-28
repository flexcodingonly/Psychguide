import React, { useState } from 'react';
import { 
  FolderGit2, 
  Stethoscope, 
  ShieldCheck, 
  Baby, 
  Users, 
  Heart, 
  Moon, 
  BrainCircuit, 
  Scale, 
  Sparkles
} from 'lucide-react';
import { SPECIAL_AREAS_DATA } from '../data/specialAreasData';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';

export const SpecialAreasView: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(SPECIAL_AREAS_DATA[0].id);

  const currentArea = SPECIAL_AREAS_DATA.find(a => a.id === selectedAreaId) || SPECIAL_AREAS_DATA[0];

  const getAreaIcon = (category: string) => {
    switch (category) {
      case 'Konsültasyon-Liyezon (CLP)': return <Stethoscope className="w-4 h-4 text-neutral-800" />;
      case 'Bağımlılık Psikiyatrisi': return <ShieldCheck className="w-4 h-4 text-neutral-800" />;
      case 'Çocuk ve Ergen': return <Baby className="w-4 h-4 text-neutral-800" />;
      case 'Geriatrik Psikiyatri': return <Users className="w-4 h-4 text-neutral-800" />;
      case 'Gebelik ve Emzirme': return <Heart className="w-4 h-4 text-neutral-800" />;
      case 'Uyku Bozuklukları': return <Moon className="w-4 h-4 text-neutral-800" />;
      case 'Nöropsikiyatri': return <BrainCircuit className="w-4 h-4 text-neutral-800" />;
      case 'Adli Psikiyatri & Hukuk': return <Scale className="w-4 h-4 text-neutral-800" />;
      default: return <FolderGit2 className="w-4 h-4 text-neutral-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Header */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
            <FolderGit2 className="w-3.5 h-3.5 text-neutral-900" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Bölüm 6</span>
              <span className="text-neutral-300">•</span>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                Özel Popülasyonlar & Yan Alanlar
              </h2>
            </div>
            <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
              CLP, Bağımlılık, Çocuk-Ergen, Geriatri, Gebelik/Emzirme, Uyku, Nöropsikiyatri ve Adli Psikiyatri.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium border border-neutral-200/80">
            8 Özel Disiplin
          </span>
        </div>
      </div>

      {/* Horizontal Category Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {SPECIAL_AREAS_DATA.map((area) => {
          const isSelected = selectedAreaId === area.id;
          return (
            <button
              key={area.id}
              onClick={() => setSelectedAreaId(area.id)}
              className={`flex flex-col items-center justify-center p-3 border text-center transition-all cursor-pointer rounded-lg ${
                isSelected
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs font-bold'
                  : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-black hover:border-neutral-300'
              }`}
            >
              <div className="mb-1.5">{getAreaIcon(area.category)}</div>
              <span className={`text-[11px] leading-tight line-clamp-2 ${isSelected ? 'text-white font-bold' : 'text-neutral-700'}`}>
                {area.category.replace(' (CLP)', '').replace(' & Hukuk', '')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Card View */}
      <div className="bg-white border border-neutral-200 p-5 sm:p-6 space-y-6 shadow-2xl rounded-xl">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-neutral-900 uppercase flex items-center gap-1.5">
              {getAreaIcon(currentArea.category)}
              <span>{currentArea.category}</span>
            </span>
            <span className="text-[11px] font-mono text-neutral-700 bg-neutral-50 px-2.5 py-1 border border-neutral-200 rounded-lg">
              Kılavuz Referansı: {currentArea.legalOrProtocolReference}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1.5 font-display">{currentArea.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-800 mt-2 leading-relaxed bg-white p-3 border border-neutral-200 rounded-lg">
            {currentArea.summary}
          </p>
        </div>

        {/* Core Principles */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase font-bold text-neutral-700">
            Temel Klinik İlkeler & Yaklaşım
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {currentArea.corePrinciples.map((cp, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 bg-white border border-neutral-200 text-xs text-neutral-800 rounded-lg">
                <span className="text-neutral-900 font-bold shrink-0">✔</span>
                <span className="leading-relaxed">{cp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Matrix / Specific Sub-Entities */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase font-bold text-neutral-900">
            Klinik Durum Matrisi & Kanıta Dayalı Öneriler
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentArea.clinicalMatrix.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-neutral-200 space-y-2 flex flex-col justify-between rounded-lg">
                <div>
                  <h5 className="font-bold text-sm text-neutral-900 font-display">{item.label}</h5>
                  <p className="text-xs text-neutral-700 mt-1 leading-relaxed">{item.description}</p>
                </div>
                <div className="p-2.5 bg-neutral-50 border border-neutral-300 text-xs text-neutral-800 mt-3 rounded-lg">
                  <strong className="text-neutral-900 block font-mono text-[10px] uppercase mb-0.5">Öneri / Protokol:</strong>
                  {item.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Yield Pearls */}
        <div className="p-4 bg-white border border-neutral-200 space-y-2 rounded-lg">
          <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-neutral-800" />
            <span>Yüksek Getirili Klinik İnciler (High-Yield Pearls)</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-neutral-700 list-disc list-inside">
            {currentArea.highYieldPearls.map((pearl, idx) => (
              <li key={idx} className="leading-relaxed">{pearl}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
