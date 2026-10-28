import React, { useState } from 'react';
import { 
  Heart, 
  Droplets, 
  Activity, 
  Scale, 
  Clock, 
  Wine, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Copy, 
  Check, 
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const ClinicalCalculators: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<
    'qtc' | 'crcl' | 'lithium' | 'metabolic' | 'benzo_taper' | 'alcohol' | 'response'
  >('qtc');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ==========================================
  // 1. QTc STATE & CALCULATIONS
  // ==========================================
  const [qtInputMode, setQtInputMode] = useState<'ms' | 'squares'>('squares'); // default squares as requested!
  const [paperSpeed, setPaperSpeed] = useState<25 | 50>(25); // mm/s
  const [gender, setGender] = useState<'male' | 'female'>('male');
  
  // Direct MS inputs
  const [qtMsInput, setQtMsInput] = useState<number>(420);
  const [hrInput, setHrInput] = useState<number>(75);

  // Square count inputs
  const [qtSmallSquares, setQtSmallSquares] = useState<number>(10.5); // 10.5 small squares * 40ms = 420 ms
  const [rrInputType, setRrInputType] = useState<'small_squares' | 'large_squares' | 'hr'>('large_squares');
  const [rrLargeSquares, setRrLargeSquares] = useState<number>(4.0); // 4 large squares = 75 bpm
  const [rrSmallSquares, setRrSmallSquares] = useState<number>(20);
  const [baselineQtc, setBaselineQtc] = useState<number | ''>('');

  // Square conversion factors
  const msPerSmallSquare = paperSpeed === 25 ? 40 : 20;

  // Effective QT in ms
  const effectiveQt = qtInputMode === 'ms' 
    ? (qtMsInput || 0) 
    : Math.round(qtSmallSquares * msPerSmallSquare);

  // Effective Heart Rate
  let effectiveHr = hrInput || 75;
  if (qtInputMode === 'squares') {
    if (rrInputType === 'hr') {
      effectiveHr = hrInput || 75;
    } else if (rrInputType === 'large_squares') {
      const squares = rrLargeSquares || 4;
      effectiveHr = Math.round((paperSpeed === 25 ? 300 : 600) / squares);
    } else {
      const squares = rrSmallSquares || 20;
      effectiveHr = Math.round((paperSpeed === 25 ? 1500 : 3000) / squares);
    }
  }

  // RR interval in seconds
  const rrSeconds = 60 / Math.max(20, effectiveHr);

  // QTc Bazett: QT / sqrt(RR)
  const qtcBazett = Math.round(effectiveQt / Math.sqrt(rrSeconds));
  // QTc Fridericia: QT / cbrt(RR)
  const qtcFridericia = Math.round(effectiveQt / Math.cbrt(rrSeconds));
  // Framingham: QT + 154 * (1 - RR)
  const qtcFramingham = Math.round(effectiveQt + 154 * (1 - rrSeconds));
  // Hodges: QT + 1.75 * (HR - 60)
  const qtcHodges = Math.round(effectiveQt + 1.75 * (effectiveHr - 60));

  // Primary reference is Fridericia (FDA & Cardiology recommended), secondary is Bazett
  const evaluatedQtc = qtcFridericia;
  const upperLimitNormal = gender === 'male' ? 430 : 450;
  const borderlineLimit = gender === 'male' ? 450 : 470;

  let qtcSeverity: 'normal' | 'borderline' | 'prolonged' | 'danger' = 'normal';
  if (evaluatedQtc > 500) {
    qtcSeverity = 'danger';
  } else if (evaluatedQtc > borderlineLimit) {
    qtcSeverity = 'prolonged';
  } else if (evaluatedQtc > upperLimitNormal) {
    qtcSeverity = 'borderline';
  } else {
    qtcSeverity = 'normal';
  }

  // Delta QTc calculation if baseline entered
  const deltaQtc = baselineQtc !== '' && !isNaN(Number(baselineQtc)) 
    ? evaluatedQtc - Number(baselineQtc) 
    : null;

  const isDeltaDanger = deltaQtc !== null && deltaQtc >= 60;

  // ==========================================
  // 2. COCKCROFT-GAULT CrCl STATE
  // ==========================================
  const [cgAge, setCgAge] = useState<number>(62);
  const [cgWeight, setCgWeight] = useState<number>(68);
  const [cgCreatinine, setCgCreatinine] = useState<number>(1.1);
  const [cgGender, setCgGender] = useState<'male' | 'female'>('male');

  const crclBase = ((140 - cgAge) * cgWeight) / (72 * (cgCreatinine || 1));
  const crcl = Math.round(cgGender === 'female' ? crclBase * 0.85 : crclBase);

  // ==========================================
  // 3. LITHIUM DOSE & LEVEL PREDICTOR
  // ==========================================
  const [liCurrentDose, setLiCurrentDose] = useState<number>(900); // mg/day
  const [liCurrentLevel, setLiCurrentLevel] = useState<number>(0.55); // mEq/L
  const [liTargetLevel, setLiTargetLevel] = useState<number>(0.80); // mEq/L
  
  // Linear prediction: New Dose = Current Dose * (Target Level / Current Level)
  const liPredictedDose = liCurrentLevel > 0 
    ? Math.round((liCurrentDose * (liTargetLevel / liCurrentLevel)) / 150) * 150 
    : liCurrentDose;

  // ==========================================
  // 4. METABOLIC SYNDROME & BMI
  // ==========================================
  const [bmiHeight, setBmiHeight] = useState<number>(172);
  const [bmiWeight, setBmiWeight] = useState<number>(84);
  const [waistCirc, setWaistCirc] = useState<boolean>(true); // >102cm M, >88cm F
  const [tgHigh, setTgHigh] = useState<boolean>(true); // >=150 mg/dL
  const [hdlLow, setHdlLow] = useState<boolean>(false); // <40 M, <50 F
  const [bpHigh, setBpHigh] = useState<boolean>(true); // >=130/85
  const [fpgHigh, setFpgHigh] = useState<boolean>(false); // >=100 mg/dL

  const heightM = (bmiHeight || 170) / 100;
  const bmiValue = Number(((bmiWeight || 70) / (heightM * heightM)).toFixed(1));
  const metabolicCriteriaCount = [waistCirc, tgHigh, hdlLow, bpHigh, fpgHigh].filter(Boolean).length;
  const hasMetabolicSyndrome = metabolicCriteriaCount >= 3;

  // ==========================================
  // 5. BENZODIAZEPINE ASHTON TAPER
  // ==========================================
  const [benzoDrug, setBenzoDrug] = useState<'alprazolam' | 'clonazepam' | 'lorazepam' | 'diazepam'>('alprazolam');
  const [benzoDose, setBenzoDose] = useState<number>(1.5);
  const [taperSpeed, setTaperSpeed] = useState<'standard' | 'slow'>('standard');

  const benzoEquivFactors: Record<string, number> = {
    alprazolam: 20, // 0.5 mg alprazolam = 10 mg diazepam => 1 mg = 20 mg diazepam
    clonazepam: 20, // 0.5 mg clonazepam = 10 mg diazepam => 1 mg = 20 mg diazepam
    lorazepam: 10,  // 1 mg lorazepam = 10 mg diazepam => 1 mg = 10 mg diazepam
    diazepam: 1     // 10 mg diazepam = 10 mg diazepam
  };

  const diazepamEquiv = Math.round(benzoDose * benzoEquivFactors[benzoDrug] * 10) / 10;
  const weeksToTaper = taperSpeed === 'standard' 
    ? Math.max(4, Math.ceil(diazepamEquiv / 2)) 
    : Math.max(8, Math.ceil(diazepamEquiv / 1));

  // ==========================================
  // 6. ALCOHOL INTAKE & TOXICITY
  // ==========================================
  const [beerCount, setBeerCount] = useState<number>(3); // 50cl (5% ABV) ~ 20g
  const [wineCount, setWineCount] = useState<number>(0); // 150ml (12% ABV) ~ 14g
  const [spiritsCount, setSpiritsCount] = useState<number>(0); // 50ml (40% ABV) ~ 16g

  const totalGramsAlcohol = Math.round(
    (beerCount * 20) + (wineCount * 14) + (spiritsCount * 16)
  );
  const standardDrinks = Number((totalGramsAlcohol / 10).toFixed(1)); // 1 standard drink = 10g pure alcohol

  // ==========================================
  // 7. CLINICAL SCALE RESPONSE & REMISSION
  // ==========================================
  const [selectedScale, setSelectedScale] = useState<'phq9' | 'madrs' | 'hamd' | 'ybocs'>('phq9');
  const [preScore, setPreScore] = useState<number>(19);
  const [postScore, setPostScore] = useState<number>(8);

  const percentReduction = preScore > 0 
    ? Math.round(((preScore - postScore) / preScore) * 100) 
    : 0;

  const remissionThresholds: Record<string, number> = {
    phq9: 4,
    madrs: 10,
    hamd: 7,
    ybocs: 12
  };
  const isRemission = postScore <= remissionThresholds[selectedScale];
  const isResponse = percentReduction >= 50;

  // Clipboard copy handler
  const handleCopy = async (text: string, id: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Compact Calculator Sub-navigation tabs (Wrapped & Fully Visible) */}
      <div className="bg-white/95 backdrop-blur-xs border border-neutral-200/90 rounded-lg p-1.5 flex flex-wrap items-center gap-1.5 shadow-2xs">
        {[
          { id: 'qtc', label: '1. QTc (EKG)', icon: <Heart className="w-3.5 h-3.5 text-rose-500" /> },
          { id: 'crcl', label: '2. CrCl (Böbrek)', icon: <Droplets className="w-3.5 h-3.5 text-blue-500" /> },
          { id: 'lithium', label: '3. Lityum Dozu', icon: <Activity className="w-3.5 h-3.5 text-amber-500" /> },
          { id: 'metabolic', label: '4. VKI & Metabolik', icon: <Scale className="w-3.5 h-3.5 text-purple-500" /> },
          { id: 'benzo_taper', label: '5. Benzo (Ashton)', icon: <Clock className="w-3.5 h-3.5 text-neutral-600" /> },
          { id: 'alcohol', label: '6. Alkol Riski', icon: <Wine className="w-3.5 h-3.5 text-red-400" /> },
          { id: 'response', label: '7. Yanıt / Remisyon', icon: <TrendingDown className="w-3.5 h-3.5 text-emerald-500" /> }
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveCalc(item.id as any)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs ${
              activeCalc === item.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 hover:bg-neutral-900 text-neutral-700 hover:text-white border-neutral-200 hover:border-neutral-900'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* ========================================================
          1. QTc CALCULATOR (DETAILED WITH SQUARES & DUAL FORMULAS)
          ======================================================== */}
      {activeCalc === 'qtc' && (
        <div className="space-y-5">
          <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-3">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-neutral-800" />
                <div>
                  <h2 className="font-bold text-base text-neutral-900 font-display">
                    İleri Düzey QTc Hesaplayıcı (Fridericia, Bazett & EKG Kare Sayısı)
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Kardiyoloji & FDA altın standardı <strong>Fridericia (QTcF)</strong> ve klinik rutin <strong>Bazett (QTcB)</strong> formülleri. EKG kağıdındaki küçük/büyük kare sayısıyla doğrudan hesaplama imkanı.
                  </p>
                </div>
              </div>

              {/* Mode Switch Pills */}
              <div className="flex items-center bg-neutral-50 p-1 border border-neutral-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => setQtInputMode('squares')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                    qtInputMode === 'squares'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  📐 EKG Kare Sayısından
                </button>
                <button
                  type="button"
                  onClick={() => setQtInputMode('ms')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                    qtInputMode === 'ms'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  ⏱️ Milisaniye (ms) Girişi
                </button>
              </div>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white p-4 border border-neutral-200 rounded-lg">
              {/* Gender */}
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                  Hasta Cinsiyeti
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as any)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none focus:border-neutral-500 rounded-lg"
                >
                  <option value="male">Erkek (Eşik: &gt;430/450 ms)</option>
                  <option value="female">Kadın (Eşik: &gt;450/470 ms)</option>
                </select>
              </div>

              {/* Paper speed (for square mode) */}
              {qtInputMode === 'squares' && (
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                    EKG Kağıt Hızı
                  </label>
                  <select
                    value={paperSpeed}
                    onChange={(e) => setPaperSpeed(Number(e.target.value) as any)}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none focus:border-neutral-500 rounded-lg"
                  >
                    <option value={25}>Standart: 25 mm/s (1 kk = 40 ms)</option>
                    <option value={50}>Hızlı: 50 mm/s (1 kk = 20 ms)</option>
                  </select>
                </div>
              )}

              {/* QT Input: Squares vs MS */}
              {qtInputMode === 'squares' ? (
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                      QT Aralığı (Küçük Kare)
                    </label>
                    <span className="text-[10px] font-mono text-neutral-700">={effectiveQt} ms</span>
                  </div>
                  <input
                    type="number"
                    step="0.5"
                    min="2"
                    max="30"
                    value={qtSmallSquares}
                    onChange={(e) => setQtSmallSquares(Math.max(1, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none focus:border-neutral-500 rounded-lg"
                    placeholder="örn: 10.5"
                  />
                  <span className="text-[9px] text-neutral-500">Q başlangıcından T bitişine küçük kare sayısı</span>
                </div>
              ) : (
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                    QT Aralığı (ms)
                  </label>
                  <input
                    type="number"
                    step="10"
                    min="150"
                    max="900"
                    value={qtMsInput}
                    onChange={(e) => setQtMsInput(Math.max(100, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none focus:border-neutral-500 rounded-lg"
                  />
                </div>
              )}

              {/* RR Input / Heart Rate */}
              {qtInputMode === 'squares' ? (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase font-bold">
                      R-R Aralığı / Kalp Hızı
                    </label>
                    <span className="text-[10px] font-mono text-neutral-700">={effectiveHr} bpm</span>
                  </div>
                  <div className="flex gap-1.5 mb-1">
                    <select
                      value={rrInputType}
                      onChange={(e) => setRrInputType(e.target.value as any)}
                      className="w-2/5 px-1.5 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-mono text-neutral-700 focus:outline-none rounded-lg"
                    >
                      <option value="large_squares">Büyük Kare</option>
                      <option value="small_squares">Küçük Kare</option>
                      <option value="hr">Nabız (KAH)</option>
                    </select>

                    {rrInputType === 'large_squares' && (
                      <input
                        type="number"
                        step="0.2"
                        min="1"
                        max="15"
                        value={rrLargeSquares}
                        onChange={(e) => setRrLargeSquares(Math.max(0.5, parseFloat(e.target.value) || 0))}
                        className="w-3/5 px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
                        placeholder="örn: 4"
                      />
                    )}
                    {rrInputType === 'small_squares' && (
                      <input
                        type="number"
                        step="1"
                        min="5"
                        max="60"
                        value={rrSmallSquares}
                        onChange={(e) => setRrSmallSquares(Math.max(3, parseFloat(e.target.value) || 0))}
                        className="w-3/5 px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
                        placeholder="örn: 20"
                      />
                    )}
                    {rrInputType === 'hr' && (
                      <input
                        type="number"
                        step="1"
                        min="30"
                        max="220"
                        value={hrInput}
                        onChange={(e) => setHrInput(Math.max(20, parseFloat(e.target.value) || 0))}
                        className="w-3/5 px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
                      />
                    )}
                  </div>
                  <span className="text-[9px] text-neutral-500">
                    {rrInputType === 'large_squares' ? '300 / Büyük kare = KAH' : rrInputType === 'small_squares' ? '1500 / Küçük kare = KAH' : 'Doğrudan dakikadaki nabız'}
                  </span>
                </div>
              ) : (
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                    Kalp Hızı (KAH / Nabız)
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="30"
                    max="220"
                    value={hrInput}
                    onChange={(e) => setHrInput(Math.max(20, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none focus:border-neutral-500 rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Optional Baseline QTc for Delta Calculation */}
            <div className="flex flex-wrap items-center gap-3 bg-white p-3 border border-neutral-200 rounded-lg text-xs">
              <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                <span>İlaç Öncesi Bazal QTc (Varsa):</span>
              </div>
              <input
                type="number"
                placeholder="örn: 410 ms"
                value={baselineQtc}
                onChange={(e) => setBaselineQtc(e.target.value === '' ? '' : parseFloat(e.target.value))}
                className="w-28 px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
              {deltaQtc !== null && (
                <div className={`font-mono font-bold flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border ${
                  deltaQtc >= 60 
                    ? 'bg-red-50 text-red-800 border-red-300 animate-pulse' 
                    : deltaQtc >= 30 
                    ? 'bg-amber-50 text-amber-900 border-amber-300' 
                    : 'bg-neutral-100 text-neutral-800 border-neutral-200'
                }`}>
                  <span>ΔQTc Artışı: +{deltaQtc} ms</span>
                  {deltaQtc >= 60 && <span>⚠️ KRİTİK ARTIŞ (&gt;60 ms)!</span>}
                </div>
              )}
            </div>

            {/* Main Result Cards: Fridericia vs Bazett */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Fridericia (Recommended) */}
              <div className="p-4 bg-white border-2 border-neutral-900 rounded-lg relative shadow-xs">
                <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-neutral-900 text-white text-[9px] font-mono font-bold uppercase rounded-md">
                  Altın Standart (FDA)
                </div>
                <div className="text-[11px] font-mono text-neutral-500">Fridericia (QTcF):</div>
                <div className="text-3xl font-mono font-black text-neutral-900 mt-1">
                  {qtcFridericia} <span className="text-sm font-normal text-neutral-500">ms</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  Formül: QT / ∛RR (Taşikardi ve bradikardide en doğru sonucu verir).
                </p>
              </div>

              {/* Bazett */}
              <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                <div className="text-[11px] font-mono text-neutral-500">Bazett (QTcB):</div>
                <div className="text-3xl font-mono font-bold text-neutral-800 mt-1">
                  {qtcBazett} <span className="text-sm font-normal text-neutral-500">ms</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  Formül: QT / √RR (KAH &gt;85 iken aşırı yüksek, &lt;60 iken düşük gösterir).
                </p>
              </div>

              {/* Framingham */}
              <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                <div className="text-[11px] font-mono text-neutral-500">Framingham (QTcLc):</div>
                <div className="text-2xl font-mono font-bold text-neutral-700 mt-1">
                  {qtcFramingham} <span className="text-xs font-normal text-neutral-500">ms</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  Doğrusal regresyon formülü: QT + 0.154(1-RR).
                </p>
              </div>

              {/* Hodges */}
              <div className="p-4 bg-white border border-neutral-200 rounded-lg">
                <div className="text-[11px] font-mono text-neutral-500">Hodges (QTcH):</div>
                <div className="text-2xl font-mono font-bold text-neutral-700 mt-1">
                  {qtcHodges} <span className="text-xs font-normal text-neutral-500">ms</span>
                </div>
                <p className="text-[10px] text-neutral-500 mt-1 leading-tight">
                  Formül: QT + 1.75(KAH - 60).
                </p>
              </div>
            </div>

            {/* Clinical Evaluation Banner */}
            <div className={`p-4 border rounded-lg ${
              qtcSeverity === 'danger' || isDeltaDanger
                ? 'bg-red-50 border-red-300 text-red-900'
                : qtcSeverity === 'prolonged'
                ? 'bg-amber-50 border-amber-300 text-amber-950'
                : qtcSeverity === 'borderline'
                ? 'bg-neutral-100 border-neutral-300 text-neutral-900'
                : 'bg-emerald-50 border-emerald-300 text-emerald-950'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {qtcSeverity === 'danger' || isDeltaDanger ? (
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 animate-bounce" />
                    ) : qtcSeverity === 'normal' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    ) : (
                      <Info className="w-5 h-5 text-amber-700 shrink-0" />
                    )}
                    <span className="font-bold text-sm tracking-wide uppercase font-mono">
                      {qtcSeverity === 'danger' || isDeltaDanger
                        ? '🚨 KRİTİK UZAMIŞ QTc / TORSADES DE POINTES (TdP) RİSKİ'
                        : qtcSeverity === 'prolonged'
                        ? '⚠️ UZAMIŞ QTc ARALIĞI (YAKIN İZLEM GEREKİR)'
                        : qtcSeverity === 'borderline'
                        ? 'SINIRDA (BORDERLINE) QTc ARALIĞI'
                        : '✅ NORMAL QTc ARALIĞI'}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed opacity-90 pl-7">
                    {qtcSeverity === 'danger' || isDeltaDanger
                      ? 'QTc >500 ms veya bazalden >60 ms artış ölümcül ventriküler aritmi (TdP) riskini belirgin artırır. Şüpheli psikotrop ilaç (sitolopram, essitolopram, haloperidol, ziprasidon) derhal kesilmeli veya dozu azaltılmalıdır. Serum K+ (>4.0 mEq/L) ve Mg2+ (>2.0 mg/dL) replasmanı yapılmalı ve kardiyoloji konsültasyonu istenmelidir.'
                      : qtcSeverity === 'prolonged'
                      ? `${gender === 'male' ? 'Erkek (>450 ms)' : 'Kadın (>470 ms)'} için patolojik eşik aşılmıştır. İlaç artışları durdurulmalı, EKG haftalık tekrarlanmalı, elektrolitler kontrol edilmeli ve konkomitan QTc uzatıcı veya CYP inhibitörü ajanlar sorgulanmalıdır.`
                      : qtcSeverity === 'borderline'
                      ? `${gender === 'male' ? 'Erkek (430-450 ms)' : 'Kadın (450-470 ms)'} sınır aralığındadır. Başka bir QTc uzatan ilaç eklenirken dikkatli olunmalı, hipokalemi/hipomagnezemi ekarte edilmelidir.`
                      : `${gender === 'male' ? 'Erkek (≤430 ms)' : 'Kadın (≤450 ms)'} normal fizyolojik aralıktadır. Terapötik dozlarda güvenle devam edilebilir.`}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const text = `=== EKG QTc HESAPLAMA RAPORU ===\n` +
                      `Cinsiyet: ${gender === 'male' ? 'Erkek' : 'Kadın'}\n` +
                      `Ham QT: ${effectiveQt} ms | Kalp Hızı: ${effectiveHr} bpm (RR: ${rrSeconds.toFixed(2)} s)\n` +
                      `Fridericia (QTcF): ${qtcFridericia} ms [Altın Standart]\n` +
                      `Bazett (QTcB): ${qtcBazett} ms\n` +
                      (deltaQtc !== null ? `Bazalden Artış (ΔQTc): +${deltaQtc} ms\n` : '') +
                      `Değerlendirme: ${qtcSeverity.toUpperCase()}\n` +
                      `Kaynak: PSYCHDS Klinik Psikiyatri Rehberi`;
                    handleCopy(text, 'qtc');
                  }}
                  className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono flex items-center gap-1.5 shrink-0 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedId === 'qtc' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'qtc' ? 'Kopyalandı' : 'Raporu Kopyala'}</span>
                </button>
              </div>
            </div>

            {/* Quick Reference Table for Squares */}
            <div className="overflow-x-auto bg-white border border-neutral-200 p-3 rounded-lg text-xs">
              <div className="font-bold text-neutral-800 font-mono mb-2 text-[11px] uppercase">
                📐 EKG Kağıdı Hızlı Hatırlatıcı (25 mm/s standart):
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-neutral-700 font-mono text-[11px]">
                <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-2xs">
                  <span className="text-neutral-500 block text-[10px]">1 KÜÇÜK KARE (1 mm):</span>
                  <span className="text-neutral-900 font-bold">40 milisaniye (0.04 s)</span>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-2xs">
                  <span className="text-neutral-500 block text-[10px]">1 BÜYÜK KARE (5 mm):</span>
                  <span className="text-neutral-900 font-bold">200 milisaniye (0.20 s)</span>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-2xs">
                  <span className="text-neutral-500 block text-[10px]">10 KÜÇÜK KARE:</span>
                  <span className="text-neutral-900 font-bold">400 milisaniye</span>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-2xs">
                  <span className="text-neutral-500 block text-[10px]">12.5 KÜÇÜK KARE:</span>
                  <span className="text-red-600 font-bold">500 ms (KRİTİK EŞİK)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. COCKCROFT-GAULT CrCl & RENAL DRUG DOSING
          ======================================================== */}
      {activeCalc === 'crcl' && (
        <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
          <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
            <Droplets className="w-5 h-5 text-neutral-800" />
            <div>
              <h2 className="font-bold text-base text-neutral-900 font-display">
                Kreatinin Klerensi (Cockcroft-Gault) & Psikotrop Böbrek Doz Rehberi
              </h2>
              <p className="text-xs text-neutral-500">
                Lityum, Gabapentin, Pregabalin, Paliperidon ve Amisülprid gibi böbrekten atılan ajanlar için doz ayarlama kılavuzu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Yaş (Yıl)</label>
              <input
                type="number"
                min="18"
                max="120"
                value={cgAge}
                onChange={(e) => setCgAge(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Ağırlık (kg)</label>
              <input
                type="number"
                min="30"
                max="250"
                value={cgWeight}
                onChange={(e) => setCgWeight(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Serum Kreatinin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                min="0.2"
                max="15"
                value={cgCreatinine}
                onChange={(e) => setCgCreatinine(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Cinsiyet</label>
              <select
                value={cgGender}
                onChange={(e) => setCgGender(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
              >
                <option value="male">Erkek</option>
                <option value="female">Kadın (× 0.85)</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-white border border-neutral-200 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-500">Hesaplanan Kreatinin Klerensi (CrCl):</div>
              <div className="text-3xl font-mono font-black text-neutral-900 mt-0.5">
                {crcl} <span className="text-sm font-normal text-neutral-500">mL/dk</span>
              </div>
            </div>
            <div className={`px-4 py-2 border text-xs font-mono font-bold rounded-lg ${
              crcl >= 90 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
              crcl >= 60 ? 'bg-neutral-100 text-neutral-800 border-neutral-300' :
              crcl >= 30 ? 'bg-amber-50 text-amber-900 border-amber-300' :
              'bg-red-50 text-red-900 border-red-300'
            }`}>
              {crcl >= 90 ? 'Evre 1: Normal Böbrek Fonksiyonu (≥90 mL/dk)' :
               crcl >= 60 ? 'Evre 2: Hafif Klerens Azalması (60-89 mL/dk)' :
               crcl >= 30 ? 'Evre 3: Orta Düzey Yetmezlik (30-59 mL/dk) - Doz Azalt!' :
               crcl >= 15 ? 'Evre 4: Ağır Böbrek Yetmezliği (15-29 mL/dk) - Yüksek Toksisite!' :
               'Evre 5: Son Dönem Renal Yetmezlik (<15 mL/dk)'}
            </div>
          </div>

          {/* Action Table for this CrCl */}
          <div className="overflow-x-auto bg-white border border-neutral-200 rounded-lg">
            <table className="min-w-full text-xs text-left divide-y divide-neutral-200">
              <thead className="bg-neutral-50 text-neutral-700 font-mono font-bold uppercase text-[10px]">
                <tr>
                  <th className="px-4 py-2.5">İlaç</th>
                  <th className="px-4 py-2.5">Mevcut CrCl ({crcl} mL/dk) İçin Doz Kararı</th>
                  <th className="px-4 py-2.5">Kritik Uyarı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-700">
                <tr className="hover:bg-neutral-100/50">
                  <td className="px-4 py-2.5 font-bold text-neutral-900">Lityum (Li2CO3)</td>
                  <td className="px-4 py-2.5 font-mono text-neutral-900">
                    {crcl >= 60 ? 'Tam standart doz (kan düzeyi izlemi ile)' :
                     crcl >= 30 ? '%50 - %75 Doz (örn: 600 mg yerine 300-450 mg/gün)' :
                     crcl >= 15 ? '%25 - %50 Doz (yakın kan düzeyi takibi)' :
                     'KONTRENDİKE (Diyaliz hariç verilmemelidir)'}
                  </td>
                  <td className="px-4 py-2.5 text-neutral-500">NSAİİ, ADEİ ve diüretikler lityum düzeyini toksik seviyeye fırlatır!</td>
                </tr>
                <tr className="hover:bg-neutral-100/50">
                  <td className="px-4 py-2.5 font-bold text-neutral-900">Gabapentin</td>
                  <td className="px-4 py-2.5 font-mono text-neutral-900">
                    {crcl >= 60 ? '900 - 3600 mg/gün (3 doza bölünmüş)' :
                     crcl >= 30 ? '400 - 1400 mg/gün (2 doza bölünmüş)' :
                     crcl >= 15 ? '200 - 700 mg/gün (tek doz)' :
                     '100 - 300 mg gün aşırı (diyaliz sonrası ek 100-200 mg)'}
                  </td>
                  <td className="px-4 py-2.5 text-neutral-500">Doz azaltılmazsa miyoklonus ve ağır sedasyon gelişir.</td>
                </tr>
                <tr className="hover:bg-neutral-100/50">
                  <td className="px-4 py-2.5 font-bold text-neutral-900">Pregabalin</td>
                  <td className="px-4 py-2.5 font-mono text-neutral-900">
                    {crcl >= 60 ? '150 - 600 mg/gün' :
                     crcl >= 30 ? '75 - 300 mg/gün (%50 azaltım)' :
                     crcl >= 15 ? '25 - 150 mg/gün (%75 azaltım)' :
                     '25 - 75 mg/gün (tek doz)'}
                  </td>
                  <td className="px-4 py-2.5 text-neutral-500">Tamamen değişmeden böbrekten atılır.</td>
                </tr>
                <tr className="hover:bg-neutral-100/50">
                  <td className="px-4 py-2.5 font-bold text-neutral-900">Paliperidon</td>
                  <td className="px-4 py-2.5 font-mono text-neutral-900">
                    {crcl >= 80 ? '3 - 12 mg/gün' :
                     crcl >= 50 ? 'Maksimum 6 mg/gün' :
                     crcl >= 30 ? 'Maksimum 3 mg/gün' :
                     'Önerilmez (CrCl <30 mL/dk)'}
                  </td>
                  <td className="px-4 py-2.5 text-neutral-500">Aktif metabolit böbrekle atılır.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================
          3. LITHIUM DOSE & LEVEL PREDICTOR
          ======================================================== */}
      {activeCalc === 'lithium' && (
        <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
          <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
            <Activity className="w-5 h-5 text-neutral-800" />
            <div>
              <h2 className="font-bold text-base text-neutral-900 font-display">
                Lityum Lineer Farmakokinetik Hedef Doz & Düzey Hesaplayıcı
              </h2>
              <p className="text-xs text-neutral-500">
                Lityum düz bir doğrusal (lineer) kinetik gösterir. Mevcut kararlı durum düzeyine göre hedef kan düzeyine ulaşmak için gereken yaklaşık günlük dozu öngörür.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                Mevcut Günlük Doz (mg/gün)
              </label>
              <input
                type="number"
                step="150"
                min="150"
                max="2400"
                value={liCurrentDose}
                onChange={(e) => setLiCurrentDose(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                Ölçülen Serum Düzeyi (mEq/L veya mmol/L)
              </label>
              <input
                type="number"
                step="0.05"
                min="0.1"
                max="3.0"
                value={liCurrentLevel}
                onChange={(e) => setLiCurrentLevel(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
              <span className="text-[9px] text-neutral-500 block mt-0.5">*Son akşam dozundan tam 12 saat sonra alınan kan</span>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                Hedeflenen Serum Düzeyi
              </label>
              <select
                value={liTargetLevel}
                onChange={(e) => setLiTargetLevel(parseFloat(e.target.value))}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
              >
                <option value={0.80}>0.80 mEq/L (Akut Mani / Standart İdame)</option>
                <option value={1.00}>1.00 mEq/L (Dirençli Akut Manik Dönem)</option>
                <option value={0.65}>0.65 mEq/L (Uzun Dönem İdame / Koruma)</option>
                <option value={0.50}>0.50 mEq/L (Geriatrik / Hassas Hasta)</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-white border-2 border-white rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-500">Hedeflenen {liTargetLevel} mEq/L Düzeyi İçin Önerilen Yeni Doz:</div>
              <div className="text-3xl font-mono font-black text-neutral-900 mt-1">
                ≈ {liPredictedDose} <span className="text-sm font-normal text-neutral-500">mg/gün</span>
              </div>
              <p className="text-[11px] text-neutral-500 mt-1">
                (Türkiye'de 300 mg kapsüller/tabletler halinde bulunur: Yaklaşık {Math.round(liPredictedDose / 300)} × 300 mg tablet/gün)
              </p>
            </div>

            <div className="text-right space-y-1 text-xs font-mono text-neutral-700">
              <div>Akut Mani Hedefi: <strong className="text-neutral-900">0.80 - 1.20 mEq/L</strong></div>
              <div>İdame Koruma Hedefi: <strong className="text-neutral-900">0.60 - 0.80 mEq/L</strong></div>
              <div className="text-red-700 font-bold">⚠️ Toksisite Başlangıcı: &gt; 1.50 mEq/L</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          4. METABOLIC SYNDROME & BMI (ATP III)
          ======================================================== */}
      {activeCalc === 'metabolic' && (
        <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
          <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
            <Scale className="w-5 h-5 text-neutral-800" />
            <div>
              <h2 className="font-bold text-base text-neutral-900 font-display">
                Vücut Kitle İndeksi (VKI) & Metabolik Sendrom Kriterleri (NCEP ATP III)
              </h2>
              <p className="text-xs text-neutral-500">
                Özellikle Olanzapin ve Klozapin tedavisi alan hastalarda metabolik riskin tespiti ve takibi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* BMI Calculator */}
            <div className="p-4 bg-white border border-neutral-200 space-y-3 rounded-lg">
              <div className="font-bold text-xs text-neutral-900 uppercase font-mono">1. VKI (BMI) Hesabı</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase">Boy (cm)</label>
                  <input
                    type="number"
                    value={bmiHeight}
                    onChange={(e) => setBmiHeight(parseFloat(e.target.value) || 0)}
                    className="w-full mt-1 px-3 py-1.5 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase">Kilo (kg)</label>
                  <input
                    type="number"
                    value={bmiWeight}
                    onChange={(e) => setBmiWeight(parseFloat(e.target.value) || 0)}
                    className="w-full mt-1 px-3 py-1.5 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
                  />
                </div>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200 flex items-center justify-between rounded-lg">
                <span className="text-xs text-neutral-500 font-mono">VKI Değeri:</span>
                <span className={`text-xl font-mono font-bold ${
                  bmiValue >= 30 ? 'text-red-700' : bmiValue >= 25 ? 'text-amber-700' : 'text-emerald-700'
                }`}>
                  {bmiValue} kg/m² ({bmiValue >= 30 ? 'Obez' : bmiValue >= 25 ? 'Fazla Kilolu' : 'Normal'})
                </span>
              </div>
            </div>

            {/* ATP III 5 Criteria Checklist */}
            <div className="p-4 bg-white border border-neutral-200 space-y-2.5 rounded-lg">
              <div className="font-bold text-xs text-neutral-900 uppercase font-mono flex items-center justify-between">
                <span>2. ATP III Metabolik Kriterleri (En az 3 kriter = Tanı)</span>
                <span className="font-bold text-neutral-900">{metabolicCriteriaCount} / 5</span>
              </div>

              {[
                { label: 'Bel Çevresi Genişliği (>102 cm erkek, >88 cm kadın)', state: waistCirc, set: setWaistCirc },
                { label: 'Trigliserid Yüksekliği (≥ 150 mg/dL veya tedavi)', state: tgHigh, set: setTgHigh },
                { label: 'HDL Düşüklüğü (< 40 mg/dL erkek, < 50 mg/dL kadın)', state: hdlLow, set: setHdlLow },
                { label: 'Kan Basıncı Yüksekliği (≥ 130/85 mmHg veya antihipertansif)', state: bpHigh, set: setBpHigh },
                { label: 'Açlık Kan Şekeri Yüksekliği (≥ 100 mg/dL veya antidiyabetik)', state: fpgHigh, set: setFpgHigh }
              ].map((crit, idx) => (
                <label key={idx} className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={crit.state}
                    onChange={(e) => crit.set(e.target.checked)}
                    className="w-4 h-4 rounded-2xs accent-neutral-900"
                  />
                  <span>{crit.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={`p-4 border rounded-lg font-mono text-xs flex items-center justify-between ${
            hasMetabolicSyndrome ? 'bg-red-50 border-red-300 text-red-900' : 'bg-neutral-100 border-neutral-200 text-neutral-800'
          }`}>
            <div>
              <strong>Değerlendirme: </strong>
              {hasMetabolicSyndrome 
                ? '⚠️ METABOLİK SENDROM MEVCUT (≥3 kriter karşılandı). Olanzapin/Klozapin başlanması risklidir; Aripiprazol, Lurasidon veya Ziprasidon gibi metabolik nötr ajanlar tercih edilmelidir.'
                : 'Metabolik sendrom tanı kriteri karşılanmadı (<3 kriter). Yılda bir rutin takip önerilir.'}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          5. BENZODIAZEPINE ASHTON TAPER CALCULATOR
          ======================================================== */}
      {activeCalc === 'benzo_taper' && (
        <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
          <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
            <Clock className="w-5 h-5 text-neutral-800" />
            <div>
              <h2 className="font-bold text-base text-neutral-900 font-display">
                Benzodiazepin Ashton Azaltım (Tapering) Planlayıcısı
              </h2>
              <p className="text-xs text-neutral-500">
                Bağımlılık ve yoksunluk nöbetlerini önlemek için uzun etkili Diazepam eşdeğerine çevirerek kademeli bırakma takvimi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Mevcut İlaç</label>
              <select
                value={benzoDrug}
                onChange={(e) => setBenzoDrug(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
              >
                <option value="alprazolam">Alprazolam (Xanax) [0.5 mg = 10 mg Diazepam]</option>
                <option value="clonazepam">Klonazepam (Rivotril) [0.5 mg = 10 mg Diazepam]</option>
                <option value="lorazepam">Lorazepam (Ativan) [1 mg = 10 mg Diazepam]</option>
                <option value="diazepam">Diazepam (Nervium/Diazem)</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Günlük Alınan Doz (mg)</label>
              <input
                type="number"
                step="0.25"
                min="0.25"
                max="20"
                value={benzoDose}
                onChange={(e) => setBenzoDose(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Azaltım Hızı</label>
              <select
                value={taperSpeed}
                onChange={(e) => setTaperSpeed(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
              >
                <option value="standard">Standart (%10 - %20 haftalık - 1-2 mg diazepam/hafta)</option>
                <option value="slow">Yavaş / Hassas (%5 - %10 haftalık - 0.5-1 mg diazepam/hafta)</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-white border border-neutral-200 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-500">Diazepam 10 mg Doz Eşdeğeri:</div>
              <div className="text-2xl font-mono font-bold text-neutral-900 mt-0.5">
                ≈ {diazepamEquiv} mg/gün Diazepam
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-500">Tahmini Bırakma Süresi:</div>
              <div className="text-2xl font-mono font-bold text-neutral-900 mt-0.5">
                ≈ {weeksToTaper} Hafta ({Math.round(weeksToTaper / 4)} Ay)
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            * <strong>Altın Kural:</strong> Son 5 mg diazepam altına inildiğinde yoksunluk anksiyetesi artabileceğinden adımlar 0.5 - 1 mg'lık düşüşlerle 2-3 haftada bir yapılmalıdır. Asla ani kesilmemelidir (status epilepticus ve deliryum riski).
          </p>
        </div>
      )}

      {/* ========================================================
          6. ALCOHOL INTAKE & TOXICITY RISK
          ======================================================== */}
      {activeCalc === 'alcohol' && (
        <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
          <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
            <Wine className="w-5 h-5 text-neutral-800" />
            <div>
              <h2 className="font-bold text-base text-neutral-900 font-display">
                Alkol Standart İçecek, Gram Alkol & Toksisite Riski Hesaplayıcı
              </h2>
              <p className="text-xs text-neutral-500">
                Klinik öyküde tüketilen alkol miktarını nesnel gram/birim değerine çevirerek yoksunluk (CIWA-Ar) ve Wernicke-Korsakoff riskini belirleme.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                Bira (50 cl - %5 Alkol) Adet
              </label>
              <input
                type="number"
                min="0"
                max="30"
                value={beerCount}
                onChange={(e) => setBeerCount(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
              />
              <span className="text-[10px] text-neutral-500 font-mono">1 şişe ≈ 20 g saf alkol</span>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                Şarap (1 Kadeh / 150 ml - %12) Adet
              </label>
              <input
                type="number"
                min="0"
                max="30"
                value={wineCount}
                onChange={(e) => setWineCount(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
              />
              <span className="text-[10px] text-neutral-500 font-mono">1 kadeh ≈ 14 g saf alkol</span>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">
                Rakı / Votka / Viski (Tek / 40 ml - %40) Adet
              </label>
              <input
                type="number"
                min="0"
                max="30"
                value={spiritsCount}
                onChange={(e) => setSpiritsCount(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs rounded-lg"
              />
              <span className="text-[10px] text-neutral-500 font-mono">1 tek ≈ 16 g saf alkol</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-neutral-200 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-500">Toplam Alınan Saf Alkol:</div>
              <div className="text-2xl font-mono font-bold text-neutral-900 mt-0.5">
                {totalGramsAlcohol} g <span className="text-sm font-normal text-neutral-500">({standardDrinks} Standart Kadeh)</span>
              </div>
            </div>
            <div className={`px-4 py-2 border text-xs font-mono font-bold rounded-lg ${
              totalGramsAlcohol >= 80 ? 'bg-red-50 text-red-900 border-red-300' :
              totalGramsAlcohol >= 40 ? 'bg-amber-50 text-amber-900 border-amber-300' :
              'bg-neutral-100 text-neutral-800 border-neutral-200'
            }`}>
              {totalGramsAlcohol >= 80 ? '🚨 YÜKSEK RİSK: Ağır Tüketim (Akut Deliryum Tremens & Nöbet Riski!)' :
               totalGramsAlcohol >= 40 ? '⚠️ ZARARLI KULLANIM / TOKSİK DÜZEY' :
               'Hafif / Düşük Riskli Seviye'}
            </div>
          </div>

          {totalGramsAlcohol >= 60 && (
            <div className="p-3 bg-red-50 border border-red-300 text-red-900 text-xs rounded-lg space-y-1">
              <strong>Klinik Acil Öneri:</strong>
              <p>Wernicke Ensefalopatisini önlemek için glukozlu mayi takılmadan ÖNCE mutlaka <strong>Tiamin (B1 Vitamini) 100 - 500 mg IV/IM</strong> uygulanmalıdır.</p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          7. RESPONSE & REMISSION CALCULATOR
          ======================================================== */}
      {activeCalc === 'response' && (
        <div className="p-5 bg-white border border-neutral-200 shadow-2xl space-y-4 rounded-xl">
          <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
            <TrendingDown className="w-5 h-5 text-neutral-800" />
            <div>
              <h2 className="font-bold text-base text-neutral-900 font-display">
                Psikometrik Ölçek Tedavi Yanıtı (% Response) & Remisyon Hesaplayıcı
              </h2>
              <p className="text-xs text-neutral-500">
                Antidepresan veya antipsikotik tedavinin klinik yanıtını (en az %50 düşüş) ve tam remisyonunu objektif olarak doğrulayın.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Kullanılan Ölçek</label>
              <select
                value={selectedScale}
                onChange={(e) => setSelectedScale(e.target.value as any)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
              >
                <option value="phq9">PHQ-9 Depresyon (Remisyon ≤ 4)</option>
                <option value="madrs">MADRS Depresyon (Remisyon ≤ 10)</option>
                <option value="hamd">HAM-D-17 (Remisyon ≤ 7)</option>
                <option value="ybocs">Y-BOCS OKB (Remisyon ≤ 12)</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Tedavi Öncesi Bazal Puan</label>
              <input
                type="number"
                min="1"
                max="60"
                value={preScore}
                onChange={(e) => setPreScore(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1">Tedavi Sonrası Güncel Puan</label>
              <input
                type="number"
                min="0"
                max="60"
                value={postScore}
                onChange={(e) => setPostScore(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-lg"
              />
            </div>
          </div>

          <div className="p-4 bg-white border border-neutral-200 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-500">Semptom Azalma Oranı:</div>
              <div className="text-3xl font-mono font-black text-neutral-900 mt-0.5">
                %{percentReduction} <span className="text-sm font-normal text-neutral-500">Düşüş</span>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <div className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border ${
                isResponse ? 'bg-emerald-50 text-emerald-900 border-emerald-300' : 'bg-neutral-100 text-neutral-600 border-neutral-200'
              }`}>
                {isResponse ? '✅ KLİNİK YANIT MEVCUT (≥ %50 Düşüş)' : '❌ Yetersiz Yanıt (< %50 Düşüş)'}
              </div>
              <div className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border ${
                isRemission ? 'bg-emerald-100 text-emerald-950 border-emerald-400 font-bold' : 'bg-neutral-100 text-neutral-600 border-neutral-200'
              }`}>
                {isRemission ? '🌟 TAM REMİSYONDA (Eşik Altı Semptom)' : 'Henüz Tam Remisyonda Değil'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
