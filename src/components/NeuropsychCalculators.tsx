import React, { useState } from 'react';
import {
  Brain,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  Activity,
  Zap,
  Info,
  Layers,
  HeartPulse,
  Droplets,
  Scale
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const NeuropsychCalculators: React.FC = () => {
  const [activeSubCalc, setActiveSubCalc] = useState<
    'clozapine' | 'acb' | 'nms_hunter' | 'hyponatremia' | 'aims' | 'moca_mmse'
  >('clozapine');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ==========================================
  // 1. CLOZAPINE ANC CALCULATOR STATE
  // ==========================================
  const [wbc, setWbc] = useState<number>(5.8); // 10^3/mcL or k/uL
  const [neutrophils, setNeutrophils] = useState<number>(56); // %
  const [bands, setBands] = useState<number>(2); // %
  const [isBen, setIsBen] = useState<boolean>(false); // Benign Ethnic Neutropenia

  const calculatedAnc = Math.round((wbc * 1000 * (neutrophils + bands)) / 100);

  let ancCategory: 'normal' | 'mild' | 'moderate' | 'severe' = 'normal';
  let ancAction = '';
  let ancSeverityText = '';

  if (!isBen) {
    if (calculatedAnc >= 1500) {
      ancCategory = 'normal';
      ancSeverityText = 'Normal ANC (≥ 1500 /mcL)';
      ancAction = 'Klozapin tedavisine devam edilebilir. Rutin protokol izlemi (ilk 6 ay haftalık, 6-12 ay iki haftada bir, sonrasında ayda bir CBC).';
    } else if (calculatedAnc >= 1000) {
      ancCategory = 'mild';
      ancSeverityText = 'Hafif Nötropeni (1000 - 1499 /mcL)';
      ancAction = 'Klozapin tedavisine devam edilebilir. Haftada 3 kez tam kan sayımı (CBC) izlenmelidir. Ateş, boğaz ağrısı ve enfeksiyon semptomları yakından sorgulanmalıdır.';
    } else if (calculatedAnc >= 500) {
      ancCategory = 'moderate';
      ancSeverityText = 'Orta Derecede Nötropeni (500 - 999 /mcL)';
      ancAction = 'KLOZAPİN ACİLEN KESİLMELİDİR. Günlük CBC izlemi yapılmalı; enfeksiyon belirtileri araştırılmalı; hematoloji konsültasyonu istenmelidir. ANC ≥ 1000 olana kadar ilaç yeniden başlanamaz.';
    } else {
      ancCategory = 'severe';
      ancSeverityText = 'Ağır Nötropeni / AGRANÜLOSİTOZ (< 500 /mcL)';
      ancAction = 'KIRMIZI ALARM: KLOZAPİN DERHAL KESİLMELİDİR. Hematolojiye acil sevk, koruyucu izolasyon, G-CSF (Granülosit Koloni Uyarıcı Faktör - Filgrastim) endikasyonu. Klozapin bir daha ASLA başlanamaz (Ömür boyu mutlak kontrendikasyon).';
    }
  } else {
    // Benign Ethnic Neutropenia thresholds
    if (calculatedAnc >= 1000) {
      ancCategory = 'normal';
      ancSeverityText = 'BEN İçin Normal ANC (≥ 1000 /mcL)';
      ancAction = 'BEN tanılı hastada tedaviye devam edilir. Rutin izlem protokolü sürdürülür.';
    } else if (calculatedAnc >= 500) {
      ancCategory = 'mild';
      ancSeverityText = 'BEN Hafif Nötropeni (500 - 999 /mcL)';
      ancAction = 'Klozapine devam edilebilir; haftada 3 kez CBC izlemi yapılır; hematoloji onaylı BEN takibi.';
    } else {
      ancCategory = 'severe';
      ancSeverityText = 'BEN Ağır Nötropeni / Agranülositoz (< 500 /mcL)';
      ancAction = 'KLOZAPİN ACİLEN DURDURULMALIDIR. Günlük CBC takibi ve acil hematolojik müdahale.';
    }
  }

  // ==========================================
  // 2. ANTICHOLINERGIC BURDEN (ACB / ARS)
  // ==========================================
  const ACB_DRUGS: { name: string; score: 1 | 2 | 3; category: string }[] = [
    // Score 3
    { name: 'Amitriptilin', score: 3, category: 'TCA Antidepresan' },
    { name: 'Klomipramin', score: 3, category: 'TCA Antidepresan' },
    { name: 'Doksepin', score: 3, category: 'TCA Antidepresan' },
    { name: 'Biperiden (Akineton)', score: 3, category: 'Antiparkinson' },
    { name: 'Triheksifenidil', score: 3, category: 'Antiparkinson' },
    { name: 'Hidroksizin (Atarax)', score: 3, category: 'Antihistaminik' },
    { name: 'Difenhidramin', score: 3, category: 'Antihistaminik' },
    { name: 'Klorpromazin (Largactil)', score: 3, category: 'Tipik Antipsikotik' },
    { name: 'Oksibutinin', score: 3, category: 'Ürolojik Antispazmodik' },
    { name: 'Solifenasin', score: 3, category: 'Ürolojik Antispazmodik' },
    // Score 2
    { name: 'Klozapin (Leponex)', score: 2, category: 'Atipik Antipsikotik' },
    { name: 'Olanzapin (Zyprexa)', score: 2, category: 'Atipik Antipsikotik' },
    { name: 'Lityum', score: 2, category: 'Duygudurum Düzenleyici' },
    { name: 'Baklofen', score: 2, category: 'Kas Gevşetici' },
    { name: 'Karbamazepin (Tegretol)', score: 2, category: 'Antiepileptik' },
    // Score 1
    { name: 'Ketiapin (Seroquel)', score: 1, category: 'Atipik Antipsikotik' },
    { name: 'Risperidon (Risperdal)', score: 1, category: 'Atipik Antipsikotik' },
    { name: 'Aripiprazol (Abilify)', score: 1, category: 'Atipik Antipsikotik' },
    { name: 'Haloperidol (Noridol)', score: 1, category: 'Tipik Antipsikotik' },
    { name: 'Paroksetin (Paxil)', score: 1, category: 'SSRI' },
    { name: 'Nortriptilin', score: 1, category: 'TCA' },
    { name: 'Diazepam', score: 1, category: 'Benzodiazepin' },
    { name: 'Alprazolam', score: 1, category: 'Benzodiazepin' },
    { name: 'Furosemid (Lasix)', score: 1, category: 'Diüretik' },
    { name: 'Atenolol', score: 1, category: 'Beta Bloker' }
  ];

  const [selectedAcbDrugs, setSelectedAcbDrugs] = useState<string[]>(['Ketiapin (Seroquel)']);

  const totalAcbScore = selectedAcbDrugs.reduce((sum, drugName) => {
    const item = ACB_DRUGS.find(d => d.name === drugName);
    return sum + (item?.score || 0);
  }, 0);

  const toggleAcbDrug = (drugName: string) => {
    if (selectedAcbDrugs.includes(drugName)) {
      setSelectedAcbDrugs(selectedAcbDrugs.filter(d => d !== drugName));
    } else {
      setSelectedAcbDrugs([...selectedAcbDrugs, drugName]);
    }
  };

  // ==========================================
  // 3. NMS VS SEROTONIN SYNDROME (HUNTER & LEVENSON)
  // ==========================================
  const [spontaneousClonus, setSpontaneousClonus] = useState<boolean>(false);
  const [inducibleClonus, setInducibleClonus] = useState<boolean>(false);
  const [ocularClonus, setOcularClonus] = useState<boolean>(false);
  const [agitationOrDiaphoresis, setAgitationOrDiaphoresis] = useState<boolean>(false);
  const [tremorPlusHyperreflexia, setTremorPlusHyperreflexia] = useState<boolean>(false);
  const [hypertoniaPlusFever, setHypertoniaPlusFever] = useState<boolean>(false);

  // NMS Levenson inputs
  const [leadPipeRigidity, setLeadPipeRigidity] = useState<boolean>(false);
  const [highFever, setHighFever] = useState<boolean>(false); // >38.5 C
  const [elevatedCpk, setElevatedCpk] = useState<boolean>(false); // CK > 1000
  const [autonomicInstability, setAutonomicInstability] = useState<boolean>(false);
  const [alteredMentalState, setAlteredMentalState] = useState<boolean>(false);
  const [leukocytosis, setLeukocytosis] = useState<boolean>(false);

  // Hunter Criteria Calculation
  const isHunterPositive = 
    spontaneousClonus ||
    (inducibleClonus && agitationOrDiaphoresis) ||
    (ocularClonus && agitationOrDiaphoresis) ||
    tremorPlusHyperreflexia ||
    (hypertoniaPlusFever && (ocularClonus || inducibleClonus));

  // Levenson NMS Calculation
  const nmsMajorCount = [leadPipeRigidity, highFever, elevatedCpk].filter(Boolean).length;
  const nmsMinorCount = [autonomicInstability, alteredMentalState, leukocytosis].filter(Boolean).length;
  const isNmsProbable = (nmsMajorCount === 3) || (nmsMajorCount >= 2 && nmsMinorCount >= 2);

  // ==========================================
  // 4. HYPONATREMIA & SIADH (SSRI/CARBAMAZEPINE)
  // ==========================================
  const [serumSodium, setSerumSodium] = useState<number>(124); // mEq/L
  const [serumGlucose, setSerumGlucose] = useState<number>(100); // mg/dL
  const [patientWeight, setPatientWeight] = useState<number>(70); // kg
  const [patientSex, setPatientSex] = useState<'male' | 'female'>('male');
  const [patientAgeGroup, setPatientAgeGroup] = useState<'adult' | 'elderly'>('elderly');

  const correctedSodium = Math.round(serumSodium + 0.016 * Math.max(0, serumGlucose - 100));

  let tbwFraction = 0.6;
  if (patientSex === 'male') {
    tbwFraction = patientAgeGroup === 'elderly' ? 0.5 : 0.6;
  } else {
    tbwFraction = patientAgeGroup === 'elderly' ? 0.45 : 0.5;
  }
  const totalBodyWater = Math.round(patientWeight * tbwFraction);
  // Free water deficit to reach target 130: TBW * ((Na / 130) - 1)
  const freeWaterExcessLiters = correctedSodium < 130 
    ? Math.abs(Math.round(totalBodyWater * (1 - (correctedSodium / 130)) * 10) / 10)
    : 0;

  // Maximum safe 24-hour correction
  const max24hCorrectionMeq = 8; // to prevent Osmotic Demyelination Syndrome (ODS / CPM)

  // ==========================================
  // 5. AIMS TARDIVE DYSKINESIA
  // ==========================================
  const [aimsScores, setAimsScores] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]); // 7 movement items
  const AIMS_ITEMS = [
    '1. Yüz ve Dudak İfadeleri (puckering, grimacing, çiğneme benzeri hareketler)',
    '2. Dil Hareketleri (dili dışarı çıkarma, yuvarlama, ağız içinde sürekli oynatma)',
    '3. Çene Hareketleri (istemsiz lateral çene kaymaları, diş gıcırdatma)',
    '4. Üst Ekstremiteler (ellerde piyano çalar gibi parmak hareketleri, kol tikleri)',
    '5. Alt Ekstremiteler (ayak parmaklarında kıpırdanma, diz vurma, istemsiz adımlar)',
    '6. Gövde Hareketleri (pelvis sallanması, gövdede bükülme, omuz silkme)',
    '7. Global Şiddet (Muayene edenin genel istemsiz hareket şiddeti kanaati)'
  ];

  const handleAimsChange = (index: number, val: number) => {
    const updated = [...aimsScores];
    updated[index] = val;
    setAimsScores(updated);
  };

  const totalAimsScore = aimsScores.reduce((a, b) => a + b, 0);
  const itemsWithModerateOrSevere = aimsScores.filter(s => s >= 3).length;
  const itemsWithMild = aimsScores.filter(s => s === 2).length;
  const isAimsPositive = itemsWithModerateOrSevere >= 1 || itemsWithMild >= 2;

  // ==========================================
  // 6. MOCA TO MMSE CONVERSION
  // ==========================================
  const [mocaInput, setMocaInput] = useState<number>(22);
  // Lawton & Monsch conversion table / regression:
  // MMSE ≈ 0.8 * MoCA + 6.5 (bounded 0 to 30)
  const estimatedMmse = Math.min(30, Math.max(0, Math.round(0.78 * mocaInput + 6.8)));

  let cognitiveStage = '';
  if (mocaInput >= 26) {
    cognitiveStage = 'Normal Bilişsel İşlev (Skor ≥ 26)';
  } else if (mocaInput >= 18) {
    cognitiveStage = 'Hafif Bilişsel Bozukluk (MBO / MCI) veya Erken Demans';
  } else if (mocaInput >= 10) {
    cognitiveStage = 'Orta Derecede Demans';
  } else {
    cognitiveStage = 'İleri / Ağır Derecede Demans';
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-5 bg-white border border-neutral-200 text-neutral-900 rounded-xl shadow-2xl">
        <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold">
          <Brain className="w-4 h-4 text-neutral-800" />
          <span>İleri Düzey Nöropsikiyatri & Psikofarmakoloji Hesaplayıcıları</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-display mt-1 text-neutral-900">
          Nöropsikiyatrik Hesaplama & Toksisite Analiz Araçları
        </h2>
        <p className="text-xs text-neutral-700 mt-1 max-w-3xl leading-relaxed">
          Klozapin Mutlak Nötrofil Sayısı (ANC) ve agranülositoz protokolü, Antikolinerjik Bilişsel Yük (ACB), 
          NMS vs Serotonin Sendromu Hunter/Levenson ayrımı, SIADH sodyum düzeltme limiti (ODS koruması), 
          AIMS Tardif Diskinezi skoru ve MoCA-MMSE kognitif dönüşümü.
        </p>

        {/* Compact Sub-Nav Pills (Wrapped & Fully Visible) */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-neutral-200">
          {[
            { id: 'clozapine', label: '1. Klozapin ANC', icon: <ShieldAlert className="w-3.5 h-3.5 text-rose-500" /> },
            { id: 'acb', label: '2. Antikolinerjik (ACB)', icon: <Layers className="w-3.5 h-3.5 text-blue-500" /> },
            { id: 'nms_hunter', label: '3. NMS vs Serotonin', icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> },
            { id: 'hyponatremia', label: '4. Hiponatremi (SIADH)', icon: <Droplets className="w-3.5 h-3.5 text-blue-400" /> },
            { id: 'aims', label: '5. AIMS Diskinezi', icon: <Activity className="w-3.5 h-3.5 text-purple-500" /> },
            { id: 'moca_mmse', label: '6. MoCA ↔ MMSE', icon: <Brain className="w-3.5 h-3.5 text-emerald-500" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubCalc(tab.id as any)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs ${
                activeSubCalc === tab.id
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-50 hover:bg-neutral-900 text-neutral-700 hover:text-white border-neutral-200 hover:border-neutral-900'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ====================================================
          1. CLOZAPINE ANC CALCULATOR
          ==================================================== */}
      {activeSubCalc === 'clozapine' && (
        <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-neutral-800" />
                <span>Klozapin Mutlak Nötrofil Sayısı (ANC) ve Güvenlik Protokolü</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Formül: ANC = Toplam Lökosit (WBC) × (% Nötrofil + % Çomak/Bant) ÷ 100
              </p>
            </div>
            <button
              onClick={() => {
                const report = `=== KLOZAPİN ANC & AGRANÜLOSİTOZ ANALİZ RAPORU ===\n` +
                  `Toplam Lökosit (WBC): ${wbc} x10^3/mcL\n` +
                  `Parçalı Nötrofil: %${neutrophils}\n` +
                  `Çomak / Bant: %${bands}\n` +
                  `BEN (Benign Etnik Nötropeni): ${isBen ? 'Evet (BEN Protokolü)' : 'Hayır (Standart Protokol)'}\n` +
                  `Hesaplanan ANC: ${calculatedAnc} /mcL\n` +
                  `Risk Durumu: ${ancSeverityText}\n` +
                  `Klinik Eylem: ${ancAction}\n` +
                  `Tarih: ${new Date().toLocaleString('tr-TR')}\n` +
                  `Kaynak: TPD & FDA Clozapine REMS Guidelines`;
                handleCopy(report, 'clozapine');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-neutral-100 hover:bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-lg transition-colors"
            >
              {copiedId === 'clozapine' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'clozapine' ? 'Kopyalandı' : 'Raporu Kopyala'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">
                WBC (Toplam Lökosit)
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="50"
                  value={wbc}
                  onChange={(e) => setWbc(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-l-xs"
                />
                <span className="px-2.5 py-2 bg-neutral-100 border-y border-r border-neutral-200 text-neutral-500 font-mono text-[11px] rounded-r-xs">
                  x10³/µL
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">
                % Parçalı Nötrofil
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={neutrophils}
                  onChange={(e) => setNeutrophils(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-l-xs"
                />
                <span className="px-2.5 py-2 bg-neutral-100 border-y border-r border-neutral-200 text-neutral-500 font-mono text-[11px] rounded-r-xs">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">
                % Çomak (Bant)
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={bands}
                  onChange={(e) => setBands(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-l-xs"
                />
                <span className="px-2.5 py-2 bg-neutral-100 border-y border-r border-neutral-200 text-neutral-500 font-mono text-[11px] rounded-r-xs">
                  %
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 rounded-lg cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isBen}
                  onChange={(e) => setIsBen(e.target.checked)}
                  className="w-4 h-4 rounded-lg accent-neutral-900"
                />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-neutral-900 block">BEN Tanısı</span>
                  <span className="text-neutral-500 text-[10px]">Benign Etnik Nötropeni</span>
                </div>
              </label>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            <div className="md:col-span-4 p-4 bg-white border border-neutral-200 rounded-lg text-center flex flex-col justify-center space-y-1">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase">Hesaplanan ANC</span>
              <div className="text-4xl font-extrabold font-mono text-neutral-900">
                {calculatedAnc}
                <span className="text-sm font-normal text-neutral-500 ml-1">/µL</span>
              </div>
              <span className="text-xs font-bold text-neutral-700">{ancSeverityText}</span>
            </div>

            <div className="md:col-span-8 p-4 bg-white border border-neutral-200 rounded-lg space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-900 uppercase block">
                Zorunlu Klinik Eylem ve Protokol:
              </span>
              <p className="text-xs text-neutral-800 leading-relaxed bg-neutral-100 p-3 border border-neutral-300 rounded-lg">
                {ancAction}
              </p>
              <div className="text-[11px] text-neutral-500 flex items-center gap-2 pt-1">
                <Info className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                <span>
                  Klozapin başlanırken bazal ANC ≥ 1500 /mcL (BEN için ≥ 1000) olmalıdır. İlk 6 ay her hafta tam kan sayımı zorunludur.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          2. ANTICHOLINERGIC BURDEN (ACB / ARS)
          ==================================================== */}
      {activeSubCalc === 'acb' && (
        <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-neutral-800" />
                <span>Antikolinerjik Bilişsel Yük Ölçeği (ACB / ARS Score)</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Kümülatif antikolinerjik yük; yaşlılarda deliryum, düşme, kognitif gerileme ve demans riskini doğrudan artırır.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-neutral-500 block">Kümülatif ACB Puanı:</span>
              <span className="text-2xl font-black font-mono text-neutral-900">{totalAcbScore} Puan</span>
            </div>
          </div>

          {/* Severity Banner */}
          <div className={`p-4 border text-xs rounded-lg flex items-center justify-between gap-3 ${
            totalAcbScore >= 3
              ? 'bg-neutral-100 border-neutral-600 text-neutral-900 font-bold'
              : totalAcbScore >= 1
              ? 'bg-neutral-100 border-neutral-300 text-neutral-800'
              : 'bg-white border-neutral-200 text-neutral-500'
          }`}>
            <div>
              <span className="font-mono uppercase font-bold block">
                {totalAcbScore >= 3 ? '🚨 YÜKSEK ANTİKOLİNERJİK YÜK (Skor ≥ 3)' :
                 totalAcbScore >= 1 ? '⚠️ DÜŞÜK-ORTA ANTİKOLİNERJİK YÜK (Skor 1-2)' :
                 '✅ MİNİMAL / ANTİKOLİNERJİK YÜK YOK (Skor 0)'}
              </span>
              <p className="text-[11px] font-normal text-neutral-700 mt-0.5">
                {totalAcbScore >= 3
                  ? 'Her 1 puanlık artış demans gelişme riskini %10, deliryum sıklığını %50 artırır. İlaç depresseptrasyonu (doz azaltma/değiştirme) acilen planlanmalıdır.'
                  : totalAcbScore >= 1
                  ? 'Hafif kognitif yavaşlama, ağız kuruluğu, kabızlık ve idrar retansiyonu riski. Yeni antikolinerjik ajan eklenmesinden kaçınılmalıdır.'
                  : 'Hastanın reçetesinde anlamlı antikolinerjik yük oluşturan ilaç saptanmadı.'}
              </p>
            </div>
          </div>

          {/* Drug Selection Pills by Score */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-900 uppercase block mb-2">
                3 Puanlık İlaçlar (Şiddetli Antikolinerjik):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ACB_DRUGS.filter(d => d.score === 3).map(drug => {
                  const isSelected = selectedAcbDrugs.includes(drug.name);
                  return (
                    <button
                      key={drug.name}
                      type="button"
                      onClick={() => toggleAcbDrug(drug.name)}
                      className={`px-2.5 py-1.5 text-xs font-semibold border rounded-lg transition-all ${
                        isSelected
                          ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
                      }`}
                    >
                      <span>{drug.name}</span>
                      <span className="text-[10px] ml-1 opacity-70">({drug.category})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-neutral-700 uppercase block mb-2">
                2 Puanlık İlaçlar (Orta Düzey Antikolinerjik):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ACB_DRUGS.filter(d => d.score === 2).map(drug => {
                  const isSelected = selectedAcbDrugs.includes(drug.name);
                  return (
                    <button
                      key={drug.name}
                      type="button"
                      onClick={() => toggleAcbDrug(drug.name)}
                      className={`px-2.5 py-1.5 text-xs font-semibold border rounded-lg transition-all ${
                        isSelected
                          ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
                      }`}
                    >
                      <span>{drug.name}</span>
                      <span className="text-[10px] ml-1 opacity-70">({drug.category})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase block mb-2">
                1 Puanlık İlaçlar (Düşük Antikolinerjik):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ACB_DRUGS.filter(d => d.score === 1).map(drug => {
                  const isSelected = selectedAcbDrugs.includes(drug.name);
                  return (
                    <button
                      key={drug.name}
                      type="button"
                      onClick={() => toggleAcbDrug(drug.name)}
                      className={`px-2.5 py-1.5 text-xs font-semibold border rounded-lg transition-all ${
                        isSelected
                          ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
                      }`}
                    >
                      <span>{drug.name}</span>
                      <span className="text-[10px] ml-1 opacity-70">({drug.category})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          3. NMS VS SEROTONIN SYNDROME (HUNTER & LEVENSON)
          ==================================================== */}
      {activeSubCalc === 'nms_hunter' && (
        <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
          <div className="border-b border-neutral-200 pb-3">
            <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
              <Zap className="w-4 h-4 text-neutral-800" />
              <span>Nöroleptik Malign Sendrom (NMS) vs Serotonin Sendromu Ayırıcı Tanısı</span>
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Hunter Toksisite Kriterleri (Serotonin Sendromu için %84 duyarlık, %97 özgüllük) ve Levenson Kriterleri (NMS).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Hunter Criteria (Serotonin Syndrome) */}
            <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
                  Hunter Serotonin Sendromu Kriterleri
                </span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg border ${
                  isHunterPositive ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs' : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                }`}>
                  {isHunterPositive ? 'POZİTİF (Serotonerjik Toksisite)' : 'Negatif'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { label: 'Spontan Klonus (Kendiliğinden ayak bileği/patella ritmik atımı)', val: spontaneousClonus, set: setSpontaneousClonus },
                  { label: 'İndüklenebilir Klonus (Dorsifleksiyon ile tetiklenen klonus)', val: inducibleClonus, set: setInducibleClonus },
                  { label: 'Oküler Klonus (İstemsiz ritmik göz hareketleri)', val: ocularClonus, set: setOcularClonus },
                  { label: 'Ajitasyon veya Diaforez (Aşırı terleme)', val: agitationOrDiaphoresis, set: setAgitationOrDiaphoresis },
                  { label: 'Tremor + Canlı Refleksler (Hiperrefleksi)', val: tremorPlusHyperreflexia, set: setTremorPlusHyperreflexia },
                  { label: 'Hipertoni + Ateş > 38°C', val: hypertoniaPlusFever, set: setHypertoniaPlusFever }
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-lg cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={item.val}
                      onChange={(e) => item.set(e.target.checked)}
                      className="w-4 h-4 accent-neutral-900 rounded-lg"
                    />
                    <span className="text-neutral-700">{item.label}</span>
                  </label>
                ))}
              </div>

              {isHunterPositive && (
                <div className="p-3 bg-neutral-100 border border-neutral-300 text-xs text-neutral-800 rounded-lg space-y-1">
                  <strong className="text-neutral-900 block font-mono">SEROTONİN SENDROMU PROTOKOLÜ:</strong>
                  <p>1. Tüm serotonerjik ilaçları (SSRI, SNRI, Triptan, Tramadol, Linezolid) derhal kesin.</p>
                  <p>2. IV hidrasyon ve sedasyon için Benzodiazepin (Lorazepam 1-2 mg IV).</p>
                  <p>3. Orta-Ağır vakada 5-HT2A antagonisti <strong>Siproheptadin (Cyproheptadine 12 mg yükleme, ardından 2 saatte bir 2 mg)</strong>.</p>
                </div>
              )}
            </div>

            {/* Levenson NMS Criteria */}
            <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
                  Levenson NMS (Nöroleptik Malign) Kriterleri
                </span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg border ${
                  isNmsProbable ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs' : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                }`}>
                  {isNmsProbable ? 'POZİTİF (NMS Olasılığı Yüksek)' : 'Negatif'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold block">Majör Kriterler:</span>
                {[
                  { label: 'Kurşun Boru Rijiditesi (Lead-pipe generalized rigidity)', val: leadPipeRigidity, set: setLeadPipeRigidity },
                  { label: 'Hipertermi / Yüksek Ateş (> 38.5°C)', val: highFever, set: setHighFever },
                  { label: 'Serum Kreatin Kinaz (CK) Yüksekliği (> 1000 IU/L)', val: elevatedCpk, set: setElevatedCpk }
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-lg cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={item.val}
                      onChange={(e) => item.set(e.target.checked)}
                      className="w-4 h-4 accent-neutral-900 rounded-lg"
                    />
                    <span className="text-neutral-800 font-medium">{item.label}</span>
                  </label>
                ))}

                <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold block pt-1">Minör Kriterler:</span>
                {[
                  { label: 'Otonomik İnstabilite (Taşikardi / Labil Kan Basıncı / Terleme)', val: autonomicInstability, set: setAutonomicInstability },
                  { label: 'Bilinç Bozukluğu / Konfüzyon / Stupor', val: alteredMentalState, set: setAlteredMentalState },
                  { label: 'Lökositoz (WBC > 12.000 /mcL)', val: leukocytosis, set: setLeukocytosis }
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-lg cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={item.val}
                      onChange={(e) => item.set(e.target.checked)}
                      className="w-4 h-4 accent-neutral-900 rounded-lg"
                    />
                    <span className="text-neutral-700">{item.label}</span>
                  </label>
                ))}
              </div>

              {isNmsProbable && (
                <div className="p-3 bg-neutral-100 border border-neutral-300 text-xs text-neutral-800 rounded-lg space-y-1">
                  <strong className="text-neutral-900 block font-mono">NMS ACİL MÜDAHALE PROTOKOLÜ:</strong>
                  <p>1. Tüm dopamin blokerlerini (antipsikotikler, metoklopramid) acilen durdurun.</p>
                  <p>2. Yoğun bakım takibi, agresif hidrasyon ve rhabdomiyoliz için idrar alkalinizasyonu.</p>
                  <p>3. Dopamin agonisti <strong>Bromokriptin (2.5 - 10 mg TID)</strong> veya <strong>Dantrolen (1-2.5 mg/kg IV)</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          4. HYPONATREMIA & SIADH (SSRI/CARBAMAZEPINE)
          ==================================================== */}
      {activeSubCalc === 'hyponatremia' && (
        <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
          <div className="border-b border-neutral-200 pb-3">
            <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
              <Droplets className="w-4 h-4 text-neutral-800" />
              <span>Psikotrop Kaynaklı Hiponatremi / SIADH ve Güvenli Düzeltme Hızı</span>
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              SSRI, SNRI, Karbamazepin ve Okskarbazepin kullanan yaşlı hastalarda santral pontin miyelinolizisi (ODS) önlemek için 24 saatlik güvenli sodyum artış limiti.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-white p-4 border border-neutral-200 rounded-lg">
            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">Serum Sodyum (Na)</label>
              <div className="flex items-center">
                <input
                  type="number"
                  min="90"
                  max="160"
                  value={serumSodium}
                  onChange={(e) => setSerumSodium(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-l-xs"
                />
                <span className="px-2.5 py-2 bg-neutral-100 border-y border-r border-neutral-200 text-neutral-500 font-mono text-[11px] rounded-r-xs">mEq/L</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">Serum Glukoz</label>
              <div className="flex items-center">
                <input
                  type="number"
                  min="40"
                  max="1000"
                  value={serumGlucose}
                  onChange={(e) => setSerumGlucose(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-l-xs"
                />
                <span className="px-2.5 py-2 bg-neutral-100 border-y border-r border-neutral-200 text-neutral-500 font-mono text-[11px] rounded-r-xs">mg/dL</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">Vücut Ağırlığı</label>
              <div className="flex items-center">
                <input
                  type="number"
                  min="30"
                  max="200"
                  value={patientWeight}
                  onChange={(e) => setPatientWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-xs focus:outline-none rounded-l-xs"
                />
                <span className="px-2.5 py-2 bg-neutral-100 border-y border-r border-neutral-200 text-neutral-500 font-mono text-[11px] rounded-r-xs">kg</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-neutral-500 uppercase font-bold mb-1">Demografi</label>
              <div className="grid grid-cols-2 gap-1">
                <select
                  value={patientSex}
                  onChange={(e) => setPatientSex(e.target.value as any)}
                  className="px-2 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
                >
                  <option value="male">Erkek</option>
                  <option value="female">Kadın</option>
                </select>
                <select
                  value={patientAgeGroup}
                  onChange={(e) => setPatientAgeGroup(e.target.value as any)}
                  className="px-2 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-semibold focus:outline-none rounded-lg"
                >
                  <option value="elderly">Yaşlı (≥65)</option>
                  <option value="adult">Genç / Yetişkin</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-neutral-200 rounded-lg text-center space-y-1">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase">Düzeltilmiş Sodyum</span>
              <div className="text-3xl font-extrabold font-mono text-neutral-900">
                {correctedSodium} <span className="text-sm font-normal text-neutral-500">mEq/L</span>
              </div>
              <span className={`text-xs font-bold ${
                correctedSodium < 125 ? 'text-red-600 font-extrabold' : correctedSodium < 130 ? 'text-amber-700' : 'text-neutral-700'
              }`}>
                {correctedSodium < 120 ? 'Ağır / Kritik Hiponatremi' :
                 correctedSodium < 125 ? 'Orta-Ağır Hiponatremi' :
                 correctedSodium < 135 ? 'Hafif Hiponatremi' : 'Normal Sodyum'}
              </span>
            </div>

            <div className="p-4 bg-white border border-neutral-200 rounded-lg text-center space-y-1">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase">Tahmini Serbest Su Fazlalığı</span>
              <div className="text-3xl font-extrabold font-mono text-neutral-900">
                {freeWaterExcessLiters} <span className="text-sm font-normal text-neutral-500">Litre</span>
              </div>
              <span className="text-xs text-neutral-500">Toplam Vücut Suyu: {totalBodyWater} L</span>
            </div>

            <div className="p-4 bg-neutral-100 border border-neutral-300 text-neutral-800 rounded-lg space-y-1">
              <span className="text-xs font-mono font-bold uppercase block text-neutral-800">
                24 Saatlik Maksimum Güvenli Düzeltme:
              </span>
              <div className="text-2xl font-black font-mono text-neutral-900">
                En fazla {max24hCorrectionMeq} mEq/L / 24 saat
              </div>
              <p className="text-[11px] text-neutral-700 leading-tight">
                Hedef: {Math.min(130, correctedSodium + max24hCorrectionMeq)} mEq/L'yi geçmemelidir! Hızlı düzeltme <strong>Santral Pontin Miyelinolizis</strong> ile sonuçlanır.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          5. AIMS TARDIVE DYSKINESIA CALCULATOR
          ==================================================== */}
      {activeSubCalc === 'aims' && (
        <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                <Activity className="w-4 h-4 text-neutral-800" />
                <span>AIMS (Abnormal Involuntary Movement Scale) Tardif Diskinezi Hesaplayıcı</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Kriter: En az 2 alanda 2 (Hafif) puan VEYA en az 1 alanda 3 (Orta) veya 4 (Ağır) puan pozitif kabul edilir.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-neutral-500 block">Toplam AIMS:</span>
              <span className="text-2xl font-black font-mono text-neutral-900">{totalAimsScore} / 28</span>
            </div>
          </div>

          <div className={`p-3.5 border rounded-lg text-xs flex items-center justify-between ${
            isAimsPositive ? 'bg-neutral-100 border-neutral-600 text-neutral-900 font-bold' : 'bg-white border-neutral-200 text-neutral-700'
          }`}>
            <span>
              {isAimsPositive ? '⚠️ POZİTİF TARDİF DİSKİNEZİ KRİTERİ KARŞILANDI' : '✅ Tardif Diskinezi Kriteri Negatif'}
            </span>
            <span className="text-[11px] font-normal text-neutral-700">
              {isAimsPositive ? 'VMAT2 inhibitörü (Valbenazin/Deutetrabenazin) veya Klozapin geçişi değerlendirilmelidir.' : 'Rutin 6 aylık AIMS taramasına devam ediniz.'}
            </span>
          </div>

          <div className="space-y-2.5">
            {AIMS_ITEMS.map((itemText, idx) => (
              <div key={idx} className="p-3 bg-white border border-neutral-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs text-neutral-800 font-medium">{itemText}</span>
                <div className="flex items-center gap-1 shrink-0">
                  {[0, 1, 2, 3, 4].map(scoreVal => (
                    <button
                      key={scoreVal}
                      type="button"
                      onClick={() => handleAimsChange(idx, scoreVal)}
                      className={`w-9 h-7 text-xs font-mono font-bold border rounded-lg transition-all ${
                        aimsScores[idx] === scoreVal
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
                      }`}
                    >
                      {scoreVal}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================
          6. MOCA TO MMSE CONVERSION
          ==================================================== */}
      {activeSubCalc === 'moca_mmse' && (
        <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl shadow-2xl">
          <div className="border-b border-neutral-200 pb-3">
            <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
              <Brain className="w-4 h-4 text-neutral-800" />
              <span>MoCA ↔ MMSE Kognitif Eşdeğerlik Dönüşümü & Demans Evreleme</span>
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Lawton & Monsch formülü üzerinden Montreal Cognitive Assessment (MoCA) puanını Mini-Mental Test (MMSE) eşdeğerine dönüştürür.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
            <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-2">
              <label className="block text-xs font-mono text-neutral-500 uppercase font-bold">
                MoCA Puanı (0 - 30)
              </label>
              <input
                type="number"
                min="0"
                max="30"
                value={mocaInput}
                onChange={(e) => setMocaInput(Math.min(30, Math.max(0, parseInt(e.target.value) || 0)))}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-900 font-mono text-lg font-bold focus:outline-none rounded-lg"
              />
              <span className="text-[11px] text-neutral-500 block">Eğitim &lt; 12 yıl ise +1 puan eklenmelidir.</span>
            </div>

            <div className="p-4 bg-white border border-neutral-200 rounded-lg text-center space-y-1">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase">Tahmini MMSE Eşdeğeri</span>
              <div className="text-4xl font-extrabold font-mono text-neutral-900">
                {estimatedMmse} <span className="text-sm font-normal text-neutral-500">/ 30</span>
              </div>
              <span className="text-xs text-neutral-500 font-mono">Dönüşüm: Lawton & Monsch</span>
            </div>

            <div className="p-4 bg-white border border-neutral-200 rounded-lg space-y-1">
              <span className="text-xs font-mono font-bold text-neutral-900 uppercase block">Bilişsel Evre:</span>
              <div className="text-sm font-bold text-neutral-900 font-display">
                {cognitiveStage}
              </div>
              <p className="text-[11px] text-neutral-500 mt-1">
                {mocaInput < 26 ? 'Hafif bilişsel bozukluk şüphesinde MoCA, MMSE\'ye göre yönetici işlevler ve yürütücü dikkat alanında daha yüksek duyarlığa (%90 vs %18) sahiptir.' : 'Normal bilişsel performans.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
