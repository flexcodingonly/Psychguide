import React, { useState, useMemo } from 'react';
import { 
  Repeat, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Calendar, 
  Clock, 
  ShieldAlert, 
  Zap, 
  Sparkles,
  Calculator,
  Layers,
  ChevronRight,
  TrendingDown,
  Pill
} from 'lucide-react';

interface AntidepressantSwitchRule {
  fromId: string;
  toId: string;
  strategy: 'direct' | 'cross_taper' | 'washout';
  strategyTitle: string;
  washoutDays: number;
  steps: {
    period: string;
    actionFrom: string;
    actionTo: string;
    notes?: string;
  }[];
  clinicalCaveats: string[];
  withdrawalRisk: 'low' | 'moderate' | 'high';
}

interface AntipsychoticEquivalent {
  id: string;
  name: string;
  genericName: string;
  ratioToCpz: number; // e.g. Haloperidol: 2 mg = 100 mg CPZ -> ratio = 0.02
  standardDoseRange: string;
  sedationLevel: 'Yüksek' | 'Orta' | 'Düşük';
  epsRisk: 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  metabolicRisk: 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
}

const ANTIPSYCHOTIC_EQUIVALENTS: AntipsychoticEquivalent[] = [
  { id: 'cpz', name: 'Klorpromazin (Thorazine - Referans)', genericName: 'Klorpromazin', ratioToCpz: 1.0, standardDoseRange: '200 - 600 mg/gün', sedationLevel: 'Yüksek', epsRisk: 'Orta', metabolicRisk: 'Orta' },
  { id: 'haloperidol', name: 'Haloperidol (Norodol)', genericName: 'Haloperidol', ratioToCpz: 0.02, standardDoseRange: '2 - 10 mg/gün', sedationLevel: 'Düşük', epsRisk: 'Yüksek', metabolicRisk: 'Çok Düşük' },
  { id: 'olanzapine', name: 'Olanzapin (Zyprexa, Rexapin)', genericName: 'Olanzapin', ratioToCpz: 0.05, standardDoseRange: '10 - 20 mg/gün', sedationLevel: 'Yüksek', epsRisk: 'Çok Düşük', metabolicRisk: 'Yüksek' },
  { id: 'risperidone', name: 'Risperidon (Risperdal)', genericName: 'Risperidon', ratioToCpz: 0.02, standardDoseRange: '2 - 6 mg/gün', sedationLevel: 'Düşük', epsRisk: 'Orta', metabolicRisk: 'Orta' },
  { id: 'quetiapine', name: 'Ketiapin (Seroquel, Cedrina)', genericName: 'Ketiapin', ratioToCpz: 0.75, standardDoseRange: '300 - 800 mg/gün', sedationLevel: 'Yüksek', epsRisk: 'Çok Düşük', metabolicRisk: 'Orta' },
  { id: 'aripiprazole', name: 'Aripiprazol (Abilify)', genericName: 'Aripiprazol', ratioToCpz: 0.075, standardDoseRange: '10 - 30 mg/gün', sedationLevel: 'Düşük', epsRisk: 'Düşük', metabolicRisk: 'Düşük' },
  { id: 'clozapine', name: 'Klozapin (Leponex - Dirençli)', genericName: 'Klozapin', ratioToCpz: 0.5, standardDoseRange: '200 - 600 mg/gün', sedationLevel: 'Yüksek', epsRisk: 'Çok Düşük', metabolicRisk: 'Yüksek' },
  { id: 'amisulpride', name: 'Amisülprid (Solian)', genericName: 'Amisülprid', ratioToCpz: 0.8, standardDoseRange: '400 - 800 mg/gün', sedationLevel: 'Düşük', epsRisk: 'Düşük', metabolicRisk: 'Düşük' }
];

const ANTIDEPRESSANTS = [
  { id: 'sertraline', name: 'Sertralin (Lustral)', halfLife: '26 saat', class: 'SSRI', defaultDose: '50-100 mg' },
  { id: 'escitalopram', name: 'Essitalopram (Cipralex)', halfLife: '30 saat', class: 'SSRI', defaultDose: '10-20 mg' },
  { id: 'fluoxetine', name: 'Fluoksetin (Prozac)', halfLife: '2-4 gün (Metabolit 7-15 gün)', class: 'SSRI', defaultDose: '20-40 mg' },
  { id: 'paroxetine', name: 'Paroksetin (Paxil)', halfLife: '21 saat', class: 'SSRI', defaultDose: '20-40 mg' },
  { id: 'venlafaxine', name: 'Venlafaksin (Efexor XR)', halfLife: '5-11 saat', class: 'SNRI', defaultDose: '75-225 mg' },
  { id: 'duloxetine', name: 'Duloksetin (Cymbalta)', halfLife: '12 saat', class: 'SNRI', defaultDose: '30-60 mg' },
  { id: 'vortioxetine', name: 'Vortioksetin (Brintellix)', halfLife: '66 saat', class: 'Multimodal', defaultDose: '10-20 mg' },
  { id: 'mirtazapine', name: 'Mirtazapin (Remeron)', halfLife: '20-40 saat', class: 'NaSSA', defaultDose: '15-45 mg' },
  { id: 'bupropion', name: 'Bupropion (Wellbutrin XL)', halfLife: '21 saat', class: 'NDRI', defaultDose: '150-300 mg' }
];

export const PsychotropicSwitchSimulator: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'antidepressant' | 'antipsychotic' | 'benzo'>('antidepressant');

  // Antidepressant switch states
  const [fromDrugId, setFromDrugId] = useState('sertraline');
  const [toDrugId, setToDrugId] = useState('venlafaxine');

  // Antipsychotic equivalence states
  const [sourceAntipsychoticId, setSourceAntipsychoticId] = useState('olanzapine');
  const [sourceDose, setSourceDose] = useState<number>(10);

  // Benzodiazepine Ashton taper states
  const [benzoDose, setBenzoDose] = useState<number>(1);
  const [benzoType, setBenzoType] = useState<'alprazolam' | 'lorazepam' | 'clonazepam'>('alprazolam');

  // Calculate Antidepressant Switching Strategy
  const switchGuidance = useMemo<AntidepressantSwitchRule>(() => {
    const isFromFluoxetine = fromDrugId === 'fluoxetine';
    const isFromParoxetineOrVenlafaxine = fromDrugId === 'paroxetine' || fromDrugId === 'venlafaxine';
    const isSameClass = 
      (fromDrugId === 'sertraline' && toDrugId === 'escitalopram') ||
      (fromDrugId === 'escitalopram' && toDrugId === 'sertraline');

    if (fromDrugId === toDrugId) {
      return {
        fromId: fromDrugId,
        toId: toDrugId,
        strategy: 'direct',
        strategyTitle: 'Aynı İlaç Seçildi',
        washoutDays: 0,
        steps: [
          {
            period: 'Aynı İlaç',
            actionFrom: 'Mevcut ilaca devam ediliyor.',
            actionTo: 'Farklı bir hedef ilaç seçiniz.'
          }
        ],
        clinicalCaveats: ['Lütfen farklı bir hedef antidepresan seçiniz.'],
        withdrawalRisk: 'low'
      };
    }

    if (isFromFluoxetine) {
      return {
        fromId: fromDrugId,
        toId: toDrugId,
        strategy: 'direct',
        strategyTitle: 'Kademesiz Doğrudan Geçiş (Fluoksetinin Kendi Kendine Azalan Yarı Ömrü)',
        washoutDays: 0,
        steps: [
          {
            period: '1. Gün',
            actionFrom: 'Fluoksetin tamamen kesilir.',
            actionTo: 'Yeni ilaca (örn. ' + toDrugId.toUpperCase() + ') standart başlangıç dozunda doğrudan başlanır.',
            notes: 'Fluoksetin ve aktif metaboliti norfluoksetinin yarı ömrü 1-2 haftadır; kanda kendiliğinden yavaşça azalarak doğal bir çapraz geçiş sağlar.'
          },
          {
            period: '1. - 2. Hafta',
            actionFrom: 'Eski ilaç artık alınmıyor.',
            actionTo: 'Yeni ilacın dozu klinik yanıta göre titre edilir.',
            notes: 'İlk 2 hafta boyunca serotonin sendromu ve ajitasyon belirtileri takip edilmelidir.'
          }
        ],
        clinicalCaveats: [
          'Fluoksetin güçlü bir CYP2D6 inhibitörüdür; vücuttan tamamen temizlenmesi 5-6 hafta sürer. Bu süreçte yeni ilacın kan seviyesi beklenenden biraz daha yüksek seyredebilir.',
          'Eğer hedef ilaç bir MAO İnhibitörü ise (örn. Moklobemid), mutlak suretle en az 5-6 HAFTA ARINMA (washout) süresi beklenmelidir!'
        ],
        withdrawalRisk: 'low'
      };
    }

    if (isSameClass) {
      return {
        fromId: fromDrugId,
        toId: toDrugId,
        strategy: 'direct',
        strategyTitle: 'Direkt Ertesi Gün Geçişi (Direct Switch)',
        washoutDays: 0,
        steps: [
          {
            period: '1. Gün',
            actionFrom: 'Eski SSRI son kez olağan dozunda alınır.',
            actionTo: 'Alınmıyor.'
          },
          {
            period: '2. Gün',
            actionFrom: 'Eski SSRI kesilir.',
            actionTo: 'Yeni SSRI eşdeğer dozda başlanır (Örn: Sertralin 50 mg -> Essitalopram 10 mg).',
            notes: 'Aynı etki mekanizmasına sahip oldukları için doğrudan ertesi gün geçişi güvenlidir ve kesilme sendromu oluşturmaz.'
          }
        ],
        clinicalCaveats: [
          'Aynı farmakolojik sınıf içinde doğrudan geçiş hastayı arınma sıkıntısından korur.',
          'Hafif gastrointestinal huzursuzluk olabilir ancak 3-5 günde geriler.'
        ],
        withdrawalRisk: 'low'
      };
    }

    // Default: Cross-Tapering (Çapraz Titrasyon)
    return {
      fromId: fromDrugId,
      toId: toDrugId,
      strategy: 'cross_taper',
      strategyTitle: 'Kademeli Çapraz Titrasyon (Cross-Tapering Protokolü)',
      washoutDays: 0,
      steps: [
        {
          period: '1. - 7. Gün (Hafta 1)',
          actionFrom: 'Mevcut ilaç dozu %50 oranında azaltılır (yarı doza inilir).',
          actionTo: 'Yeni ilaca en düşük başlangıç dozunda başlanır (çaprazlama).',
          notes: 'Hastanın çekilme belirtileri ve toleransı gözlemlenir.'
        },
        {
          period: '8. - 14. Gün (Hafta 2)',
          actionFrom: 'Eski ilaç dozu %25\'e indirilir veya gün aşırı alınarak tamamen kesilir.',
          actionTo: 'Yeni ilaç standart tedavi edici doza (orta doz) yükseltilir.',
          notes: 'Eski ilacın sonlandırılması tamamlanır.'
        },
        {
          period: '15. Gün ve Sonrası (Hafta 3+)',
          actionFrom: 'Eski ilaç tamamen sonlandırılmıştır.',
          actionTo: 'Yeni ilaç hedef terapötik dozuna titre edilir.',
          notes: 'Yeni ilacın klinik yanıtı 4-6 hafta içinde değerlendirilir.'
        }
      ],
      clinicalCaveats: [
        isFromParoxetineOrVenlafaxine 
          ? 'DİKKAT: Paroksetin ve Venlafaksin kısa yarı ömürlüdür; kesilme sendromu (FINISH belirtileri: elektrik çarpması hissi, baş dönmesi, anksiyete) yüksektir. Gerekirse titrasyon 3-4 haftaya yayılmalıdır.'
          : 'Çapraz titrasyon süresince hastada hafif sersemlik veya huzursuzluk oluşabilir; geçicidir.',
        'Serotonerjik çift yüklenmeye bağlı tremor, diyare veya ajitasyon olursa yeni ilacın dozu yavaşlatılmalıdır.'
      ],
      withdrawalRisk: isFromParoxetineOrVenlafaxine ? 'high' : 'moderate'
    };
  }, [fromDrugId, toDrugId]);

  // Antipsychotic CPZ calculation
  const calculatedEquivalents = useMemo(() => {
    const sourceObj = ANTIPSYCHOTIC_EQUIVALENTS.find(a => a.id === sourceAntipsychoticId);
    if (!sourceObj || !sourceDose || sourceDose <= 0) return [];

    // Calculate CPZ equivalent: (sourceDose / sourceObj.ratioToCpz) * 1.0 (since CPZ is 1.0)
    // Actually: 100 mg CPZ = (100 * ratio) mg drug.
    // e.g. Olanzapine ratio = 0.05 -> 100 mg CPZ = 5 mg Olanzapine.
    // Therefore CPZ equivalent = (dose / (100 * ratio)) * 100 = dose / ratio.
    const cpzEquivalent = Math.round(sourceDose / sourceObj.ratioToCpz);

    return ANTIPSYCHOTIC_EQUIVALENTS.map(target => {
      const targetDose = Math.round((cpzEquivalent * target.ratioToCpz) * 10) / 10;
      return {
        ...target,
        calculatedDose: targetDose,
        isSource: target.id === sourceAntipsychoticId
      };
    });
  }, [sourceAntipsychoticId, sourceDose]);

  // Benzodiazepine Diazepam equivalence
  const diazepamEquivalent = useMemo(() => {
    if (benzoType === 'alprazolam') return benzoDose * 10; // 1 mg Xanax = 10 mg Diazepam
    if (benzoType === 'lorazepam') return benzoDose * 5;   // 1 mg Ativan = 5 mg Diazepam
    if (benzoType === 'clonazepam') return benzoDose * 20; // 1 mg Rivotril = 20 mg Diazepam
    return 10;
  }, [benzoType, benzoDose]);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
          <Repeat className="w-4 h-4 text-neutral-900" />
          <span>Viral Klinik Araç #2 • Doz Eşdeğerliği & İlaç Değiştirme Simülatörü</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1">
          Psikotrop Değiştirme (Switching) & Eşdeğerlik Motoru
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl leading-relaxed">
          Maudsley Prescribing Guidelines ve CANMAT kılavuzlarına dayalı antidepresan çapraz titrasyon takvimi, 
          antipsikotik klorpromazin (CPZ) eşdeğer doz hesaplayıcısı ve Ashton diazepam arındırma protokolü.
        </p>

        {/* Sub-Tabs (Compact & Wrapped) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-100">
          {[
            { id: 'antidepressant', label: '1. Antidepresan Değiştirme', icon: <Repeat className="w-3.5 h-3.5" /> },
            { id: 'antipsychotic', label: '2. Antipsikotik CPZ Eşdeğerliği', icon: <Calculator className="w-3.5 h-3.5" /> },
            { id: 'benzo', label: '3. Benzodiazepin (Ashton)', icon: <TrendingDown className="w-3.5 h-3.5" /> }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs ${
                activeSubTab === tab.id
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

      {/* ========================================================
          1. ANTIDEPRESSANT SWITCHING TAB
          ======================================================== */}
      {activeSubTab === 'antidepressant' && (
        <div className="space-y-6">
          {/* Drug Selection Selectors */}
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-neutral-800" />
              <span>Değiştirilecek İlaç Çiftini Seçiniz:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* FROM Drug */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
                <span className="text-[11px] font-bold uppercase font-mono text-neutral-600 block">
                  A İLACI: Kesilecek Mevcut İlaç (Source)
                </span>
                <select
                  value={fromDrugId}
                  onChange={(e) => setFromDrugId(e.target.value)}
                  className="w-full p-2 bg-white border border-neutral-300 rounded-md text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  {ANTIDEPRESSANTS.map(ad => (
                    <option key={ad.id} value={ad.id}>
                      {ad.name} ({ad.class} • Yarı Ömür: {ad.halfLife})
                    </option>
                  ))}
                </select>
                <div className="text-[11px] text-neutral-500 flex justify-between">
                  <span>Sınıf: {ANTIDEPRESSANTS.find(a => a.id === fromDrugId)?.class}</span>
                  <span>Standart Doz: {ANTIDEPRESSANTS.find(a => a.id === fromDrugId)?.defaultDose}</span>
                </div>
              </div>

              {/* TO Drug */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
                <span className="text-[11px] font-bold uppercase font-mono text-neutral-600 block">
                  B İLACI: Başlanacak Hedef İlaç (Target)
                </span>
                <select
                  value={toDrugId}
                  onChange={(e) => setToDrugId(e.target.value)}
                  className="w-full p-2 bg-white border border-neutral-300 rounded-md text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  {ANTIDEPRESSANTS.map(ad => (
                    <option key={ad.id} value={ad.id}>
                      {ad.name} ({ad.class} • Doz: {ad.defaultDose})
                    </option>
                  ))}
                </select>
                <div className="text-[11px] text-neutral-500 flex justify-between">
                  <span>Sınıf: {ANTIDEPRESSANTS.find(a => a.id === toDrugId)?.class}</span>
                  <span>Yarı Ömür: {ANTIDEPRESSANTS.find(a => a.id === toDrugId)?.halfLife}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Switching Strategy Output */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs space-y-0">
            {/* Strategy Title Banner */}
            <div className="px-5 py-3.5 bg-neutral-900 text-white flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Önerilen Klinik Strateji (Maudsley & CANMAT)
                </span>
                <h4 className="text-base font-bold text-white flex items-center gap-2 mt-0.5">
                  <Repeat className="w-4 h-4 text-amber-400" />
                  <span>{switchGuidance.strategyTitle}</span>
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded ${
                  switchGuidance.withdrawalRisk === 'high' 
                    ? 'bg-rose-900 text-rose-200 border border-rose-700' 
                    : switchGuidance.withdrawalRisk === 'moderate'
                    ? 'bg-amber-900 text-amber-200 border border-amber-700'
                    : 'bg-emerald-900 text-emerald-200 border border-emerald-700'
                }`}>
                  Kesilme Riski: {switchGuidance.withdrawalRisk === 'high' ? 'YÜKSEK' : switchGuidance.withdrawalRisk === 'moderate' ? 'ORTA' : 'DÜŞÜK'}
                </span>
              </div>
            </div>

            {/* Step-by-Step Schedule */}
            <div className="p-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 font-mono block">
                🗓️ Adım Adım Titrasyon Takvimi:
              </span>

              <div className="space-y-3">
                {switchGuidance.steps.map((step, idx) => (
                  <div key={idx} className="border border-neutral-200 rounded-lg p-3.5 bg-neutral-50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-neutral-900 text-white text-[11px] font-mono font-bold rounded">
                        {step.period}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-md">
                        <span className="text-[10px] font-bold uppercase text-rose-800 font-mono block">
                          Eski İlaç ({ANTIDEPRESSANTS.find(a => a.id === fromDrugId)?.name.split(' ')[0]}):
                        </span>
                        <p className="text-rose-900 font-medium mt-0.5">{step.actionFrom}</p>
                      </div>

                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-md">
                        <span className="text-[10px] font-bold uppercase text-emerald-800 font-mono block">
                          Yeni İlaç ({ANTIDEPRESSANTS.find(a => a.id === toDrugId)?.name.split(' ')[0]}):
                        </span>
                        <p className="text-emerald-900 font-medium mt-0.5">{step.actionTo}</p>
                      </div>
                    </div>

                    {step.notes && (
                      <p className="text-[11px] text-neutral-600 italic">
                        💡 {step.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Caveats */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 font-mono uppercase">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Klinik Güvenlik Notları & FINISH Sendromu Uyarısı:</span>
                </div>
                <ul className="list-disc list-inside text-xs text-amber-800 space-y-1 leading-relaxed">
                  {switchGuidance.clinicalCaveats.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                  <li>
                    <strong>FINISH Belirtileri:</strong> Flu-like (Grip benzeri), Insomnia (Uykusuzluk), Nausea (Bulantı), Imbalance (Dengesizlik), Sensory (Elektrik çarpması hissi), Hyperarousal (Huzursuzluk). Belirtiler oluşursa titrasyon yavaşlatılmalıdır.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. ANTIPSYCHOTIC CPZ EQUIVALENCE TAB
          ======================================================== */}
      {activeSubTab === 'antipsychotic' && (
        <div className="space-y-6">
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-neutral-800" />
              <span>Antipsikotik Doz Girişi & Eşdeğerlik Dönüşümü:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Mevcut Antipsikotik İlaç:
                </label>
                <select
                  value={sourceAntipsychoticId}
                  onChange={(e) => setSourceAntipsychoticId(e.target.value)}
                  className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  {ANTIPSYCHOTIC_EQUIVALENTS.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Günlük Alınan Doz (mg/gün):
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={sourceDose}
                  onChange={(e) => setSourceDose(parseFloat(e.target.value) || 0)}
                  className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md text-xs font-bold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>
          </div>

          {/* Results Table */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
            <div className="px-5 py-3 bg-neutral-900 text-white flex items-center justify-between">
              <span className="text-xs font-bold font-mono">
                Hesaplanan Terapötik Eşdeğer Dozlar (CPZ = 100 mg Referansına Göre)
              </span>
              <span className="text-[11px] text-neutral-300 font-mono">
                Kaynak: Andreasen / Gardner Equivalence Consensus
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-100 text-neutral-700 border-b border-neutral-200 font-mono text-[11px]">
                  <tr>
                    <th className="p-3">Antipsikotik İlaç</th>
                    <th className="p-3 text-right">Eşdeğer Doz</th>
                    <th className="p-3">Klinik Doz Aralığı</th>
                    <th className="p-3 text-center">Sedasyon</th>
                    <th className="p-3 text-center">EPS Riski</th>
                    <th className="p-3 text-center">Metabolik Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {calculatedEquivalents.map(item => (
                    <tr 
                      key={item.id}
                      className={item.isSource ? 'bg-amber-50/70 font-semibold' : 'hover:bg-neutral-50'}
                    >
                      <td className="p-3">
                        <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                          <span>{item.name}</span>
                          {item.isSource && (
                            <span className="px-1.5 py-0.2 bg-amber-200 text-amber-900 font-mono text-[9px] rounded font-bold">
                              Giriş Yapılan
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        <span className="text-sm font-black font-mono text-neutral-900">
                          {item.calculatedDose} mg
                        </span>
                        <span className="text-[10px] text-neutral-500 block">/gün</span>
                      </td>
                      <td className="p-3 text-neutral-600 font-mono text-[11px]">
                        {item.standardDoseRange}
                      </td>
                      <td className="p-3 text-center">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          item.sedationLevel === 'Yüksek' ? 'bg-purple-100 text-purple-800' : 'bg-neutral-100 text-neutral-700'
                        }`}>
                          {item.sedationLevel}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          item.epsRisk === 'Yüksek' ? 'bg-rose-100 text-rose-800' : item.epsRisk === 'Orta' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {item.epsRisk}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          item.metabolicRisk === 'Yüksek' ? 'bg-rose-100 text-rose-800' : 'bg-neutral-100 text-neutral-700'
                        }`}>
                          {item.metabolicRisk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          3. BENZODIAZEPINE ASHTON TAPER TAB
          ======================================================== */}
      {activeSubTab === 'benzo' && (
        <div className="space-y-6">
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-neutral-800" />
              <span>Benzodiazepin Diazepam Eşdeğerliği & Ashton Tapering Hesaplayıcı</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Kullanılan Benzodiazepin Türü:
                </label>
                <select
                  value={benzoType}
                  onChange={(e) => setBenzoType(e.target.value as any)}
                  className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  <option value="alprazolam">Alprazolam (Xanax) - Kısa etkili, yüksek bağımlılık</option>
                  <option value="lorazepam">Lorazepam (Ativan) - Orta etkili</option>
                  <option value="clonazepam">Klonazepam (Rivotril) - Uzun-orta etkili antikonvülsan</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Günlük Toplam Alınan Doz (mg/gün):
                </label>
                <input
                  type="number"
                  min="0.25"
                  step="0.25"
                  value={benzoDose}
                  onChange={(e) => setBenzoDose(parseFloat(e.target.value) || 0)}
                  className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md text-xs font-bold focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>

            {/* Calculated Diazepam Equivalent Box */}
            <div className="p-4 bg-neutral-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Ashton Manueli Diazepam Eşdeğeri:
                </span>
                <div className="text-2xl font-black font-mono text-amber-400">
                  {benzoDose} mg {benzoType.toUpperCase()} ≈ {diazepamEquivalent} mg Diazepam
                </div>
              </div>
              <p className="text-xs text-neutral-300 max-w-xs leading-tight">
                Uzun yarı ömürlü Diazepam'a geçilerek dozun haftalık %10-25 oranında kademeli azaltılması nöbet ve rebound anksiyeteyi önler.
              </p>
            </div>

            {/* Ashton Weekly Schedule Card */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-mono block">
                Önerilen Haftalık Azaltma Takvimi (Ashton Kılavuzu):
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">1. - 2. HAFTA</span>
                  <div className="font-bold text-neutral-900 mt-1">Eşdeğer Diazepam'a Geçiş</div>
                  <p className="text-[11px] text-neutral-600 mt-0.5">{diazepamEquivalent} mg Diazepam/gün (bölünmüş doz)</p>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">3. - 4. HAFTA</span>
                  <div className="font-bold text-neutral-900 mt-1">%25 Azaltma</div>
                  <p className="text-[11px] text-neutral-600 mt-0.5">{Math.round(diazepamEquivalent * 0.75)} mg Diazepam/gün</p>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">5. - 6. HAFTA</span>
                  <div className="font-bold text-neutral-900 mt-1">%50 Azaltma</div>
                  <p className="text-[11px] text-neutral-600 mt-0.5">{Math.round(diazepamEquivalent * 0.5)} mg Diazepam/gün</p>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <span className="text-[10px] font-mono text-emerald-700 font-bold">7.+ HAFTA</span>
                  <div className="font-bold text-emerald-900 mt-1">Sonlandırma & Sıfırlama</div>
                  <p className="text-[11px] text-emerald-800 mt-0.5">2-2.5 mg/gün ile tamamen kesme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
