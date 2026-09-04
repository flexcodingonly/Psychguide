import React, { useState } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  Copy, 
  Check, 
  ShieldAlert, 
  Clock,
  BookOpen
} from 'lucide-react';
import { SCALES_DATA } from '../data/scalesData';

interface ScalesViewProps {
  selectedScaleId?: string;
}

export const ScalesView: React.FC<ScalesViewProps> = ({ selectedScaleId }) => {
  const [activeScaleId, setActiveScaleId] = useState<string>(
    selectedScaleId || SCALES_DATA[0].id
  );

  // Store answers for each scale: { [scaleId: string]: { [questionIndex: number]: number } }
  const [answers, setAnswers] = useState<Record<string, Record<number, number>>>({});

  const [copied, setCopied] = useState(false);

  const activeScale = SCALES_DATA.find(s => s.id === activeScaleId) || SCALES_DATA[0];
  const scaleAnswers = answers[activeScale.id] || {};

  const handleSelectOption = (questionIndex: number, score: number) => {
    setAnswers({
      ...answers,
      [activeScale.id]: {
        ...scaleAnswers,
        [questionIndex]: score
      }
    });
  };

  const handleResetScale = () => {
    setAnswers({
      ...answers,
      [activeScale.id]: {}
    });
  };

  // Calculate total score safely
  const scoreValues = Object.values(scaleAnswers) as number[];
  const totalScore = scoreValues.reduce((sum, val) => sum + val, 0);
  const answeredCount = Object.keys(scaleAnswers).length;

  // Find matching scoring range from interpretation
  const matchedRange = activeScale.interpretation.find(
    r => totalScore >= r.minScore && totalScore <= r.maxScore
  );

  // Special alert: PHQ-9 Question 9 (Suicide ideation)
  const phq9Item9Score = activeScale.id === 'phq9' ? scaleAnswers[8] : undefined;

  const handleCopyResult = () => {
    const text = `=== ${activeScale.code}: ${activeScale.name} ===\n` +
      `Toplam Puan: ${totalScore} / ${activeScale.questions.length * 3}\n` +
      `Şiddet / Değerlendirme: ${matchedRange?.severity || 'Belirtilmedi'}\n` +
      `Klinik Eylem & Öneri: ${matchedRange?.actionAdvice || 'Belirtilmedi'}\n` +
      (phq9Item9Score !== undefined && phq9Item9Score > 0 ? `⚠️ DİKKAT: 9. Madde (Özkıyım düşüncesi) Puanı: ${phq9Item9Score} (Acil klinik güvenlik değerlendirmesi gerekir)\n` : '') +
      `Tarih: ${new Date().toLocaleDateString('tr-TR')}\n` +
      `Kaynak: PSYCHDS (${activeScale.reference})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 text-red-500 font-semibold text-xs font-mono uppercase tracking-wider">
          <Calculator className="w-4 h-4 text-red-500" />
          <span>En Yaygın Psikiyatrik Bozukluklar İçin Klinik Derecelendirme & Tanı Tarama Ölçekleri</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
          Psikometrik & Klinik Ölçekler
        </h1>
        <p className="text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
          Depresyon (PHQ-9), Anksiyete (GAD-7), DEHB (ASRS), Bipolar (MDQ), OKB (Y-BOCS), TSSB (PC-PTSD-5), Alkol (AUDIT-C), 
          Delirium Tremens (CIWA-Ar), İntihar (C-SSRS), Borderline (BSL-23), İnsomni (ISI), Yeme (SCOFF) ve Kognitif (MMSE) ölçekleri.
        </p>
      </div>

      {/* Scale Selector Tabs */}
      <div className="flex space-x-1.5 overflow-x-auto bg-[#101010] p-2 border border-neutral-800 scrollbar-none">
        {SCALES_DATA.map((scale) => {
          const isActive = scale.id === activeScale.id;
          return (
            <button
              key={scale.id}
              onClick={() => setActiveScaleId(scale.id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-red-600 text-white border-red-500 shadow-md'
                  : 'text-neutral-400 hover:text-white bg-[#141414] border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <span className="font-mono">{scale.code}</span>
              <span className="hidden sm:inline text-neutral-300 font-normal">({scale.targetCondition})</span>
            </button>
          );
        })}
      </div>

      {/* Master Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Questions List */}
        <div className="lg:col-span-8 bg-[#0d0d0d] border border-neutral-800 p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-neutral-800 pb-3 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">{activeScale.name}</h2>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-red-950 text-red-400 border border-red-800">
                  {activeScale.code}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{activeScale.description}</p>
              <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span>Değerlendirme Penceresi: <strong className="text-neutral-200">{activeScale.timeframe}</strong></span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetScale}
              className="flex items-center gap-1 text-xs text-neutral-400 hover:text-red-400 self-start sm:self-auto cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>

          {/* Scale Questions */}
          <div className="space-y-4">
            {activeScale.questions.map((q, qIdx) => {
              const selectedValue = scaleAnswers[qIdx];
              return (
                <div 
                  key={q.id} 
                  className={`p-4 border transition-all ${
                    selectedValue !== undefined
                      ? 'bg-[#151515] border-red-600/70'
                      : 'bg-[#111111] border-neutral-800'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-semibold text-neutral-200 mb-3">
                    <span className="text-red-400 font-mono font-bold mr-1.5">{q.id}.</span>
                    {q.text}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {q.options.map((opt) => {
                      const isSelected = selectedValue === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelectOption(qIdx, opt.value)}
                          className={`p-2.5 text-xs font-medium border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-red-600 text-white border-red-500 font-bold shadow-sm'
                              : 'bg-black text-neutral-300 border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700'
                          }`}
                        >
                          <span className="block text-[11px] leading-tight">{opt.label}</span>
                          <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-red-100' : 'text-neutral-500'}`}>
                            ({opt.value} puan)
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-800 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Referans Kaynak: {activeScale.reference}</span>
          </div>
        </div>

        {/* Right Column: Dynamic Score & Interpretation */}
        <div className="lg:col-span-4 sticky top-6 space-y-4">
          <div className="bg-[#0d0d0d] border border-neutral-800 p-5 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Puanlama & Klinik Yorum
              </span>
              <span className="text-xs font-mono px-2 py-0.5 bg-black border border-neutral-800 text-neutral-300">
                {answeredCount}/{activeScale.questions.length} Cevaplandı
              </span>
            </div>

            {/* Total Score Display */}
            <div className="p-4 bg-black border border-neutral-800 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">Toplam Puan</span>
              <div className="text-4xl font-extrabold text-white font-mono tracking-tight">
                {totalScore}
              </div>
              <p className="text-xs font-bold text-neutral-300">
                {matchedRange?.severity || 'Seçim Yapılıyor...'}
              </p>
            </div>

            {/* Suicide Risk Alert for PHQ-9 */}
            {phq9Item9Score !== undefined && phq9Item9Score > 0 && (
              <div className="p-3.5 bg-red-950/60 border border-red-800 text-red-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs text-red-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>ÖZKIYIM RİSKİ ALARMI (9. Madde)</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-300">
                  Hasta kendine zarar verme veya ölüm düşünceleri bildirmiştir (Puan: {phq9Item9Score}). Acil detaylı intihar riski ve güvenlik planı değerlendirmesi zorunludur!
                </p>
              </div>
            )}

            {/* Detailed Clinical Interpretation */}
            {matchedRange && (
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-neutral-400 block mb-0.5">Klinik Tablo:</span>
                  <p className="text-neutral-200 leading-relaxed bg-black p-2.5 border border-neutral-800">
                    {matchedRange.severity}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-red-400 block mb-0.5">Kılavuz Tedavi Önerisi:</span>
                  <p className="text-neutral-200 leading-relaxed bg-red-950/20 p-2.5 border border-red-900/60 font-medium">
                    {matchedRange.actionAdvice}
                  </p>
                </div>
              </div>
            )}

            {/* Scoring Thresholds Legend */}
            <div className="border-t border-neutral-800 pt-3">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                Kesme Puanları & Aralıklar:
              </span>
              <div className="space-y-1">
                {activeScale.interpretation.map((range, idx) => {
                  const isCurrent = totalScore >= range.minScore && totalScore <= range.maxScore;
                  return (
                    <div
                      key={idx}
                      className={`px-2.5 py-1 text-[11px] flex items-center justify-between ${
                        isCurrent
                          ? 'bg-red-950 text-red-300 font-bold border border-red-800'
                          : 'text-neutral-400 bg-black'
                      }`}
                    >
                      <span>{range.minScore} - {range.maxScore} Puan:</span>
                      <span className="font-medium text-neutral-300">{range.severity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopyResult}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Klinik Not Olarak Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Sonucu Epikrize Kopyala</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
