import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  Copy, 
  Check, 
  ShieldAlert, 
  Clock,
  BookOpen,
  Search,
  Layers,
  Filter,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart3
} from 'lucide-react';
import { SCALES_DATA, SCALE_CATEGORIES } from '../data/scalesData';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';
import { copyToClipboard } from '../utils/clipboard';

interface ScalesViewProps {
  selectedScaleId?: string;
}

export const ScalesView: React.FC<ScalesViewProps> = ({ selectedScaleId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeScaleId, setActiveScaleId] = useState<string>(
    selectedScaleId || SCALES_DATA[0].id
  );

  useEffect(() => {
    if (selectedScaleId) {
      setActiveScaleId(selectedScaleId);
    }
  }, [selectedScaleId]);

  const [answers, setAnswers] = useState<Record<string, Record<number, number>>>({});
  const [copied, setCopied] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: SCALES_DATA.length };
    SCALES_DATA.forEach(scale => {
      counts[scale.category] = (counts[scale.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered scales
  const filteredScales = useMemo(() => {
    return SCALES_DATA.filter(scale => {
      const matchesCategory = selectedCategory === 'all' || scale.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        scale.code.toLowerCase().includes(q) ||
        scale.name.toLowerCase().includes(q) ||
        scale.targetCondition.toLowerCase().includes(q) ||
        scale.description.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Ensure active scale exists
  const activeScale = useMemo(() => {
    const found = SCALES_DATA.find(s => s.id === activeScaleId);
    if (found) return found;
    return filteredScales[0] || SCALES_DATA[0];
  }, [activeScaleId, filteredScales]);

  const scaleAnswers = answers[activeScale.id] || {};

  const handleSelectOption = (questionIndex: number, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [activeScale.id]: {
        ...(prev[activeScale.id] || {}),
        [questionIndex]: score
      }
    }));
  };

  const handleResetScale = () => {
    setAnswers(prev => ({
      ...prev,
      [activeScale.id]: {}
    }));
  };

  // Quick fill simulator (for rapid clinical testing)
  const handleSimulateCase = (level: 'min' | 'mild' | 'severe') => {
    const newAnswers: Record<number, number> = {};
    activeScale.questions.forEach((q, idx) => {
      const options = q.options;
      if (level === 'min') {
        newAnswers[idx] = options[0].value;
      } else if (level === 'mild') {
        const midIdx = Math.min(1, options.length - 1);
        newAnswers[idx] = options[midIdx].value;
      } else {
        const maxIdx = options.length - 1;
        newAnswers[idx] = options[maxIdx].value;
      }
    });
    setAnswers(prev => ({
      ...prev,
      [activeScale.id]: newAnswers
    }));
  };

  const scoreValues = Object.values(scaleAnswers) as number[];
  const totalScore = scoreValues.reduce((sum, val) => sum + val, 0);
  const answeredCount = Object.keys(scaleAnswers).length;

  const matchedRange = activeScale.interpretation.find(
    r => totalScore >= r.minScore && totalScore <= r.maxScore
  );

interface SubscaleData {
  total: number;
  count: number;
  maxPossible: number;
}

  // Subscale breakdown if present
  const subscaleScores = useMemo<Record<string, SubscaleData>>(() => {
    const subs: Record<string, SubscaleData> = {};
    activeScale.questions.forEach((q, idx) => {
      if (q.subscale) {
        if (!subs[q.subscale]) {
          subs[q.subscale] = { total: 0, count: 0, maxPossible: 0 };
        }
        const val = scaleAnswers[idx] ?? 0;
        subs[q.subscale].total += val;
        subs[q.subscale].count += 1;
        const maxOpt = Math.max(...q.options.map(o => o.value));
        subs[q.subscale].maxPossible += maxOpt;
      }
    });
    return subs;
  }, [activeScale, scaleAnswers]);

  // Special item-level alarms
  const phq9Item9Score = activeScale.id === 'phq9' ? scaleAnswers[8] : undefined;
  const edsdoItem10Score = activeScale.id === 'edsdo' ? scaleAnswers[9] : undefined;
  const bssSuicideAlert = activeScale.id === 'bss' && (scaleAnswers[3] > 0 || scaleAnswers[7] > 0);
  const bestSelfHarmAlert = activeScale.id === 'borderline_best' && (scaleAnswers[3] > 1);

  const handleCopyResult = async () => {
    let subscaleText = '';
    const subEntries: [string, SubscaleData][] = Object.entries(subscaleScores);
    if (subEntries.length > 0) {
      subscaleText = '\n--- Alt Ölçek Puanları ---\n' + 
        subEntries.map(([name, data]) => `• ${name}: ${data.total} / ${data.maxPossible}`).join('\n') + '\n';
    }

    let criticalAlerts = '';
    if (phq9Item9Score !== undefined && phq9Item9Score > 0) {
      criticalAlerts += `\n⚠️ DİKKAT: PHQ-9 9. Madde (Özkıyım düşüncesi) Puanı: ${phq9Item9Score} (Acil klinik güvenlik değerlendirmesi gerekir)\n`;
    }
    if (edsdoItem10Score !== undefined && edsdoItem10Score > 0) {
      criticalAlerts += `\n⚠️ DİKKAT: EDSDÖ 10. Madde (Kendine zarar verme düşüncesi) Puanı: ${edsdoItem10Score} (Acil perinatal güvenlik değerlendirmesi)\n`;
    }
    if (bssSuicideAlert) {
      criticalAlerts += `\n⚠️ DİKKAT: BSS İntihar Niyeti ve Eylemi pozitif bildirim (Yakın güvenlik protokolü)\n`;
    }

    const text = `=== PSİKİYATRİK KLİNİK ÖLÇEK RAPORU ===\n` +
      `Ölçek: [${activeScale.code}] ${activeScale.name}\n` +
      `Kategori: ${activeScale.category}\n` +
      `Hedef Durum: ${activeScale.targetCondition}\n` +
      `Değerlendirme Penceresi: ${activeScale.timeframe}\n` +
      `Cevaplanan Soru: ${answeredCount} / ${activeScale.questions.length}\n` +
      `Toplam Puan: ${totalScore}\n` +
      subscaleText +
      `Klinik Şiddet Düzeyi: ${matchedRange?.severity || 'Kısmi Değerlendirme'}\n` +
      `Klinik Eylem & Öneri: ${matchedRange?.actionAdvice || 'Değerlendirme sürdürülüyor'}\n` +
      criticalAlerts +
      `Tarih / Saat: ${new Date().toLocaleString('tr-TR')}\n` +
      `Literatür Kaynağı: ${activeScale.reference}`;

    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Compact Top Banner */}
      <div className="border border-neutral-200/80 bg-white/95 backdrop-blur-xs px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-2xs flex flex-col gap-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/70">
              <Calculator className="w-3.5 h-3.5 text-neutral-900" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">Bölüm 3</span>
                <span className="text-neutral-300">•</span>
                <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                  Psikometrik & Klinik Derecelendirme Ölçekleri
                </h2>
              </div>
              <p className="text-[11px] text-neutral-500 line-clamp-1 max-w-2xl leading-normal">
                {SCALES_DATA.length} Ölçek: PHQ-9, GAD-7, MADRS, HAM-D, PANSS, Y-BOCS, MoCA, BFCRS ve tam skorlama.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium border border-neutral-200/80">
              {SCALES_DATA.length} Standart Ölçek
            </span>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="flex items-center gap-2 pt-1 border-t border-neutral-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ölçek adı, kod (örn: BFCRS, MADRS, HAM-D, PANSS, Y-BOCS, CAPS, AUDIT, MMSE), hastalık veya anahtar kelime ara..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-3 py-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 bg-neutral-100 border border-neutral-300 rounded-lg"
            >
              Temizle
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs (Scrollable Bar) */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 uppercase tracking-wider px-1">
          <Filter className="w-3.5 h-3.5 text-neutral-800" />
          <span>Kategorik Filtreler</span>
        </div>

        <div className="flex space-x-1.5 overflow-x-auto bg-white p-2 border border-neutral-200 scrollbar-none rounded-lg touch-pan-x">
          {SCALE_CATEGORIES.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border rounded-lg shrink-0 select-none ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
                }`}
              >
                <span>{cat.shortLabel}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scale Selector Horizontal Buttons */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-neutral-500 px-1 font-mono">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-neutral-800" />
            <span>Listelenen Ölçekler ({filteredScales.length})</span>
          </span>
          {searchQuery && (
            <span className="text-neutral-900 font-semibold text-[11px]">"{searchQuery}" için sonuçlar</span>
          )}
        </div>

        <div className="flex space-x-1.5 overflow-x-auto bg-white p-2 border border-neutral-200 scrollbar-none rounded-lg touch-pan-x">
          {filteredScales.map((scale) => {
            const isActive = scale.id === activeScale.id;
            const hasAnswers = answers[scale.id] && Object.keys(answers[scale.id]).length > 0;
            return (
              <button
                key={scale.id}
                type="button"
                onClick={() => setActiveScaleId(scale.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border rounded-lg shrink-0 select-none ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : hasAnswers
                    ? 'text-neutral-900 bg-neutral-100 border-neutral-400 font-bold'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100 bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <span className="font-mono">{scale.code}</span>
                <span className="hidden md:inline text-neutral-500 font-normal">({scale.targetCondition.slice(0, 26)}...)</span>
                {hasAnswers && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400" title="Cevaplandı" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Master Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Questions List */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 p-5 sm:p-6 space-y-6 rounded-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b border-neutral-200 pb-4 gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">{activeScale.name}</h2>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-lg">
                  {activeScale.code}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200 rounded-lg">
                  {activeScale.category}
                </span>
              </div>
              <p className="text-xs text-neutral-700 mt-1.5 leading-relaxed">{activeScale.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mt-2.5 text-xs font-medium text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-800" />
                  <span>Değerlendirme Penceresi: <strong className="text-neutral-800">{activeScale.timeframe}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-neutral-800" />
                  <span>Hedef Endikasyon: <strong className="text-neutral-800">{activeScale.targetCondition}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Reset */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-neutral-500 border border-neutral-200 bg-white p-1 rounded-lg">
                <span className="px-1 text-neutral-500">Hızlı Simüle:</span>
                <button
                  type="button"
                  onClick={() => handleSimulateCase('min')}
                  className="px-1.5 py-0.5 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-800 rounded-lg"
                  title="Tümünü Sıfır / Normal doldur"
                >
                  Min
                </button>
                <button
                  type="button"
                  onClick={() => handleSimulateCase('mild')}
                  className="px-1.5 py-0.5 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-800 rounded-lg"
                  title="Orta Düzey doldur"
                >
                  Orta
                </button>
                <button
                  type="button"
                  onClick={() => handleSimulateCase('severe')}
                  className="px-1.5 py-0.5 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-800 rounded-lg"
                  title="Maksimal / Ağır doldur"
                >
                  Maks
                </button>
              </div>

              <button
                type="button"
                onClick={handleResetScale}
                className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 bg-neutral-100 border border-neutral-200 hover:border-neutral-400 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Sıfırla</span>
              </button>
            </div>
          </div>

          {/* Scale Questions */}
          <div className="space-y-4">
            {activeScale.questions.map((q, qIdx) => {
              const selectedValue = scaleAnswers[qIdx];
              return (
                <div 
                  key={q.id} 
                  className={`p-4 border transition-all rounded-lg ${
                    selectedValue !== undefined
                      ? 'bg-neutral-50 border-neutral-600'
                      : 'bg-white border-neutral-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 font-display">
                      <span className="text-neutral-900 font-mono font-bold mr-1.5">{q.id}.</span>
                      {q.text}
                    </p>
                    {q.subscale && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-300 shrink-0 rounded-lg">
                        {q.subscale}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {q.options.map((opt) => {
                      const isSelected = selectedValue === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelectOption(qIdx, opt.value)}
                          className={`p-2.5 text-xs font-medium border text-center transition-all cursor-pointer rounded-lg ${
                            isSelected
                              ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                              : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300 hover:text-black'
                          }`}
                        >
                          <span className="block text-[11px] leading-tight">{opt.label}</span>
                          <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-neutral-300 font-semibold' : 'text-neutral-500'}`}>
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

          <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-200 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-neutral-800" />
            <span>Referans Kaynak: {activeScale.reference}</span>
          </div>
        </div>

        {/* Right Column: Dynamic Score & Interpretation */}
        <div className="lg:col-span-4 sticky top-6 space-y-4">
          <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 font-mono">
                Puanlama & Klinik Yorum
              </span>
              <span className="text-xs font-mono px-2 py-0.5 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-lg">
                {answeredCount}/{activeScale.questions.length} Cevaplandı
              </span>
            </div>

            {/* Total Score Display */}
            <div className="p-4 bg-white border border-neutral-200 text-center space-y-1 rounded-lg">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">Toplam Puan</span>
              <div className="text-4xl font-extrabold text-neutral-900 font-mono tracking-tight">
                {totalScore}
              </div>
              <p className="text-xs font-bold text-neutral-800">
                {matchedRange?.severity || 'Ölçek Dolduruluyor...'}
              </p>
            </div>

            {/* Subscale Breakdown (if available) */}
            {Object.keys(subscaleScores).length > 0 && (
              <div className="p-3 bg-white border border-neutral-200 rounded-lg space-y-2">
                <span className="text-[11px] font-mono font-bold text-neutral-900 uppercase block">
                  Alt Ölçek Dağılımı:
                </span>
                <div className="space-y-1.5">
                  {Object.entries(subscaleScores).map(([subName, data]: [string, SubscaleData]) => (
                    <div key={subName} className="flex items-center justify-between text-xs">
                      <span className="text-neutral-500">{subName}:</span>
                      <span className="font-mono font-bold text-neutral-900">
                        {data.total} <span className="text-neutral-500 font-normal">/ {data.maxPossible}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suicide / Safety Alerts */}
            {phq9Item9Score !== undefined && phq9Item9Score > 0 && (
              <div className="p-3.5 bg-neutral-50 border border-neutral-300 text-neutral-800 space-y-1 rounded-lg">
                <div className="flex items-center gap-1.5 font-bold text-xs text-neutral-900">
                  <ShieldAlert className="w-4 h-4 text-neutral-800" />
                  <span>ÖZKIYIM RİSKİ ALARMI (9. Madde)</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-700">
                  Hasta kendine zarar verme veya ölüm düşünceleri bildirmiştir (Puan: {phq9Item9Score}). Acil detaylı intihar riski ve güvenlik planı değerlendirmesi zorunludur!
                </p>
              </div>
            )}

            {edsdoItem10Score !== undefined && edsdoItem10Score > 0 && (
              <div className="p-3.5 bg-neutral-50 border border-neutral-300 text-neutral-800 space-y-1 rounded-lg">
                <div className="flex items-center gap-1.5 font-bold text-xs text-neutral-900">
                  <ShieldAlert className="w-4 h-4 text-neutral-800" />
                  <span>PERİNATAL ACİL GÜVENLİK ALARMI (10. Madde)</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-700">
                  Anne kendine veya bebeğe zarar verme düşünceleri bildirmiştir. Acil psikiyatrik kriz değerlendirmesi şarttır!
                </p>
              </div>
            )}

            {bssSuicideAlert && (
              <div className="p-3.5 bg-neutral-50 border border-neutral-300 text-neutral-800 space-y-1 rounded-lg">
                <div className="flex items-center gap-1.5 font-bold text-xs text-neutral-900">
                  <ShieldAlert className="w-4 h-4 text-neutral-800" />
                  <span>AKTİF İNTİHAR PLANI / GİRİŞİM RİSKİ</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-700">
                  Hastada aktif yöntem veya hazırlık davranışı bildirilmiştir. 112 / kapalı servis yatışı ve refakat gereklidir!
                </p>
              </div>
            )}

            {/* Detailed Clinical Interpretation */}
            {matchedRange && (
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-neutral-500 block mb-0.5 font-mono text-[10px] uppercase">Klinik Tablo:</span>
                  <p className="text-neutral-800 leading-relaxed bg-white p-2.5 border border-neutral-200 rounded-lg">
                    {matchedRange.severity}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-neutral-900 block mb-0.5 font-mono text-[10px] uppercase">Kılavuz Tedavi Önerisi:</span>
                  <p className="text-neutral-800 leading-relaxed bg-neutral-50 p-2.5 border border-neutral-300 font-medium rounded-lg">
                    {matchedRange.actionAdvice}
                  </p>
                </div>
              </div>
            )}

            {/* Scoring Thresholds Legend */}
            <div className="border-t border-neutral-200 pt-3">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2 font-mono">
                Kesme Puanları & Aralıklar:
              </span>
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1 scrollbar-none">
                {activeScale.interpretation.map((range, idx) => {
                  const isCurrent = totalScore >= range.minScore && totalScore <= range.maxScore;
                  return (
                    <div
                      key={idx}
                      className={`px-2.5 py-1 text-[11px] flex items-center justify-between rounded-lg ${
                        isCurrent
                          ? 'bg-neutral-900 text-white font-bold border border-neutral-900 shadow-xs'
                          : 'text-neutral-600 bg-white'
                      }`}
                    >
                      <span>{range.minScore} - {range.maxScore} Puan:</span>
                      <span className={`font-medium truncate max-w-[170px] ${isCurrent ? 'text-white' : 'text-neutral-700'}`} title={range.severity}>
                        {range.severity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopyResult}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold bg-white hover:bg-neutral-200 text-black transition-colors cursor-pointer shadow-xs] rounded-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black" />
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
