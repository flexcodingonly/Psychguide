import React, { useState } from 'react';
import { 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check, 
  RotateCcw, 
  ShieldAlert, 
  Calendar, 
  Clock, 
  Sparkles,
  Info,
  Pill,
  GitBranch
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface SwitchDrug {
  id: string;
  name: string;
  class: 'SSRI' | 'SNRI' | 'NDRI' | 'NaSSA' | 'Multimodal' | 'RIMA' | 'TCA' | 'Antipsikotik';
  halfLife: string;
  cypMajor: string;
  defaultDoses: number[];
  unit: string;
}

const SWITCH_DRUGS: SwitchDrug[] = [
  { id: 'escitalopram', name: 'Essitalopram (Cipralex, Citoles)', class: 'SSRI', halfLife: '27-32 saat', cypMajor: 'CYP2C19, CYP3A4', defaultDoses: [5, 10, 15, 20], unit: 'mg' },
  { id: 'sertraline', name: 'Sertralin (Lustral, Selectra)', class: 'SSRI', halfLife: '26 saat', cypMajor: 'CYP2B6, CYP2C19', defaultDoses: [25, 50, 100, 150, 200], unit: 'mg' },
  { id: 'fluoxetine', name: 'Fluoksetin (Prozac, Deprex)', class: 'SSRI', halfLife: 'Norfluoksetin ile 7-15 gün (Çok Uzun!)', cypMajor: 'CYP2D6 Güçlü İnhibitörü', defaultDoses: [20, 40, 60], unit: 'mg' },
  { id: 'paroxetine', name: 'Paroksetin (Paxil, Seroxat)', class: 'SSRI', halfLife: '21 saat (Kısa - Yüksek Kesilme Riski)', cypMajor: 'CYP2D6 Güçlü İnhibitörü', defaultDoses: [10, 20, 30, 40], unit: 'mg' },
  { id: 'citalopram', name: 'Sitalopram (Cipram)', class: 'SSRI', halfLife: '36 saat', cypMajor: 'CYP2C19 (QTc riski)', defaultDoses: [10, 20, 40], unit: 'mg' },
  { id: 'venlafaxine', name: 'Venlafaksin XR (Efexor, Venegis)', class: 'SNRI', halfLife: 'ODV ile 11 saat (Kısa - Kesilme Şiddetli)', cypMajor: 'CYP2D6', defaultDoses: [37.5, 75, 150, 225], unit: 'mg' },
  { id: 'duloxetine', name: 'Duloksetin (Cymbalta, Duxet)', class: 'SNRI', halfLife: '12 saat', cypMajor: 'CYP1A2, CYP2D6', defaultDoses: [30, 60, 90, 120], unit: 'mg' },
  { id: 'vortioxetine', name: 'Vortioksetin (Brintellix)', class: 'Multimodal', halfLife: '66 saat', cypMajor: 'CYP2D6', defaultDoses: [5, 10, 15, 20], unit: 'mg' },
  { id: 'bupropion', name: 'Bupropion XL (Wellbutrin)', class: 'NDRI', halfLife: '21 saat', cypMajor: 'CYP2B6', defaultDoses: [150, 300], unit: 'mg' },
  { id: 'mirtazapine', name: 'Mirtazapin (Remeron, Redepra)', class: 'NaSSA', halfLife: '20-40 saat', cypMajor: 'CYP2D6, CYP3A4, CYP1A2', defaultDoses: [15, 30, 45], unit: 'mg' },
  { id: 'moclobemide', name: 'Moklobemid (Aurorix)', class: 'RIMA', halfLife: '1-2 saat (MAO-A İnhibitörü)', cypMajor: 'CYP2C19', defaultDoses: [150, 300, 600], unit: 'mg' },
  { id: 'aripiprazole', name: 'Aripiprazol (Abilify)', class: 'Antipsikotik', halfLife: '75 saat (Parsiyel Agonist)', cypMajor: 'CYP2D6, CYP3A4', defaultDoses: [5, 10, 15, 20, 30], unit: 'mg' },
  { id: 'olanzapine', name: 'Olanzapin (Zyprexa)', class: 'Antipsikotik', halfLife: '30 saat', cypMajor: 'CYP1A2', defaultDoses: [5, 10, 15, 20], unit: 'mg' },
  { id: 'quetiapine', name: 'Ketiapin (Seroquel)', class: 'Antipsikotik', halfLife: '7 saat', cypMajor: 'CYP3A4', defaultDoses: [50, 100, 200, 300, 600], unit: 'mg' },
  { id: 'risperidone', name: 'Risperidon (Risperdal)', class: 'Antipsikotik', halfLife: '24 saat', cypMajor: 'CYP2D6', defaultDoses: [1, 2, 3, 4, 6], unit: 'mg' }
];

export const CrossTitrationEngine: React.FC = () => {
  const [fromDrugId, setFromDrugId] = useState<string>('escitalopram');
  const [toDrugId, setToDrugId] = useState<string>('duloxetine');
  const [fromDose, setFromDose] = useState<number>(20);
  const [toDose, setToDose] = useState<number>(60);
  const [copied, setCopied] = useState<boolean>(false);

  const fromDrug = SWITCH_DRUGS.find(d => d.id === fromDrugId) || SWITCH_DRUGS[0];
  const toDrug = SWITCH_DRUGS.find(d => d.id === toDrugId) || SWITCH_DRUGS[1];

  // Calculate switch strategy and day-by-day plan
  const getSwitchStrategy = () => {
    // 1. MAOI Danger Rules
    if (fromDrug.class === 'RIMA' || toDrug.class === 'RIMA') {
      if (fromDrug.id === 'fluoxetine' && toDrug.class === 'RIMA') {
        return {
          method: 'Zorunlu Uzun Yıkama Süresi (Wash-out)',
          riskLevel: 'Kritik Kırmızı Alarm',
          danger: 'Fluoksetin aktif metaboliti (norfluoksetin) 7-15 gün yarı ömre sahiptir. Moklobemid başlanmadan önce EN AZ 5 HAFTA beklenmelidir! Aksi halde ölümcül Serotonin Sendromu gelişir.',
          steps: [
            { period: '1. Hafta', drugA: `${fromDose} mg -> Kesilir`, drugB: '0 mg (Başlanmaz)', note: 'Fluoksetin tamamen sonlandırılır.' },
            { period: '2. - 5. Hafta (35 gün)', drugA: '0 mg (Yıkama Devam Ediyor)', drugB: '0 mg (Başlanmaz)', note: '5 haftalık tam wash-out beklenir.' },
            { period: '6. Hafta', drugA: '0 mg', drugB: `150 mg/gün ile başlanır`, note: 'Moklobemid güvenle titre edilebilir.' }
          ]
        };
      }
      if (fromDrug.class !== 'RIMA' && toDrug.class === 'RIMA') {
        return {
          method: 'Zorunlu Yıkama Süresi (Wash-out)',
          riskLevel: 'Kritik Kırmızı Alarm',
          danger: 'Serotonerjik ilaçtan MAOI (RIMA) grubuna geçerken en az 2 hafta (14 gün) bekleme süresi şarttır.',
          steps: [
            { period: '1-7. Gün', drugA: `${Math.round(fromDose / 2)} mg/gün`, drugB: '0 mg', note: 'İlaç A kademeli azaltılır ve kesilir.' },
            { period: '8-21. Gün (14 gün)', drugA: '0 mg (Yıkama)', drugB: '0 mg', note: 'Tam 2 haftalık wash-out beklenir.' },
            { period: '22. Gün+', drugA: '0 mg', drugB: `${toDose} mg/gün`, note: 'Hedef MAOI başlanır.' }
          ]
        };
      }
      if (fromDrug.class === 'RIMA' && toDrug.class !== 'RIMA') {
        return {
          method: 'Kısa Yıkama Süresi (24-48 Saat)',
          riskLevel: 'Yüksek Dikkat',
          danger: 'Moklobemid reversibl bir inhibitördür. İlaç kesildikten sonra 24-48 saat beklemek yeni serotonerjik ilaca geçmek için yeterlidir.',
          steps: [
            { period: '1. Gün', drugA: 'Kesilir', drugB: '0 mg', note: 'Moklobemid son dozu alınır.' },
            { period: '2. Gün', drugA: '0 mg (24 saat bekleme)', drugB: '0 mg', note: 'Yıkama süresi.' },
            { period: '3. Gün+', drugA: '0 mg', drugB: `${Math.min(toDose, toDrug.defaultDoses[0] * 2)} mg`, note: 'Düşük dozla başlanarak titre edilir.' }
          ]
        };
      }
    }

    // 2. Fluoxetine to another SSRI/SNRI
    if (fromDrug.id === 'fluoxetine') {
      return {
        method: 'Doğrudan Geçiş / Gecikmeli Başlama (Taper Gerekmez)',
        riskLevel: 'Özel Farmakokinetik Kolaylık',
        danger: 'Fluoksetin kendi kendine doğal taper yapar (norfluoksetin haftalarca vücutta kalır). Kademeli azaltmaya gerek yoktur.',
        steps: [
          { period: '1. Gün', drugA: 'Fluoksetin Kesilir', drugB: '0 mg', note: 'Fluoksetin aniden kesilebilir; kendi uzun yarı ömrü çekilme sendromunu önler.' },
          { period: '2-4. Gün', drugA: '0 mg', drugB: `${toDrug.defaultDoses[0]} mg/gün`, note: `${toDrug.name} düşük başlangıç dozuyla başlanır.` },
          { period: '5-14. Gün', drugA: '0 mg', drugB: `${toDose} mg/gün`, note: 'Hedef doza güvenle titre edilir.' }
        ]
      };
    }

    // 3. Same Class SSRI -> SSRI Switch
    if (fromDrug.class === 'SSRI' && toDrug.class === 'SSRI') {
      return {
        method: 'Doğrudan Geçiş (Direct Switch) veya 3-4 Günlük Hızlı Çapraz',
        riskLevel: 'Düşük Risk / Yaygın Klinik Yol',
        danger: 'Her iki ilaç da benzer mekanizmaya sahiptir. Düşük-orta dozlarda ertesi gün doğrudan geçiş güvenlidir; yüksek dozda 3-4 günlük kademeli çapraz önerilir.',
        steps: [
          { period: '1-3. Gün', drugA: `${Math.round(fromDose * 0.5)} mg/gün`, drugB: `${toDrug.defaultDoses[0]} mg/gün`, note: 'Mevcut ilaç yarıya indirilir, hedef ilaç başlangıç dozuyla eklenir.' },
          { period: '4-7. Gün', drugA: '0 mg (Tamamen Kesilir)', drugB: `${Math.round(toDose * 0.7)} mg/gün`, note: 'İlaç A tamamen kesilir, İlaç B dozu artırılır.' },
          { period: '8. Gün+', drugA: '0 mg', drugB: `${toDose} mg/gün`, note: 'Hedef terapötik doza ulaşılır.' }
        ]
      };
    }

    // 4. Paroxetine or Venlafaxine to another drug (High Discontinuation Risk!)
    if (fromDrug.id === 'paroxetine' || fromDrug.id === 'venlafaxine') {
      return {
        method: 'Yavaş Çapraz Titrasyon (Conservative Cross-Tapering)',
        riskLevel: 'Yüksek Kesilme / Yoksunluk Riski',
        danger: `${fromDrug.name} kısa yarı ömürlüdür. Ani kesilirse şiddetli FINISH sendromu (elektrik çarpması hissi, baş dönmesi, bulantı, aşırı anksiyete) yaşanır. Kademeli düşüş şarttır!`,
        steps: [
          { period: '1-4. Gün', drugA: `${Math.round(fromDose * 0.75)} mg/gün`, drugB: `${toDrug.defaultDoses[0]} mg/gün`, note: 'Mevcut ilaç %25 azaltılır, hedef ilaç düşük dozda eklenir.' },
          { period: '5-8. Gün', drugA: `${Math.round(fromDose * 0.5)} mg/gün`, drugB: `${Math.round(toDose * 0.5)} mg/gün`, note: 'Mevcut ilaç yarıya iner, hedef ilaç orta doza çıkarılır.' },
          { period: '9-12. Gün', drugA: `${Math.round(fromDose * 0.25)} mg/gün`, drugB: `${toDose} mg/gün`, note: 'Mevcut ilaç sonlandırma dozuna iner.' },
          { period: '13. Gün+', drugA: '0 mg (Kesildi)', drugB: `${toDose} mg/gün`, note: 'Yalnızca hedef ilaçla idameye devam edilir.' }
        ]
      };
    }

    // 5. Antipsychotic to Antipsychotic (e.g. Olanzapine -> Aripiprazole)
    if (fromDrug.class === 'Antipsikotik' && toDrug.class === 'Antipsikotik') {
      const isToPartial = toDrug.id === 'aripiprazole';
      return {
        method: isToPartial ? 'Kademeli Çapraz (Parsiyel Agonist Titrasyonu)' : 'Standart Kademeli Çapraz Titrasyon',
        riskLevel: 'Orta Düzey / Titiz Takip',
        danger: isToPartial 
          ? 'Aripiprazol D2 parsiyel agonistidir. Önceki antipsikotik aniden kesilirse geçici ajitasyon/psikoz alevlenmesi veya akatizi görülebilir. Eski ilaç yavaş yavaş kesilmelidir.'
          : 'Dopaminerjik geri tepme ve antikolinerjik yoksunluk (özellikle Ketiapin/Olanzapin sonrası) riskine dikkat edilmelidir.',
        steps: [
          { period: '1-7. Gün (1. Hafta)', drugA: `${fromDose} mg (Tam Doz Devam)`, drugB: `${toDrug.defaultDoses[0]} mg/gün`, note: 'Eski ilaç tam doz sürdürülürken yeni ilaç düşük dozda eklenir.' },
          { period: '8-14. Gün (2. Hafta)', drugA: `${Math.round(fromDose * 0.5)} mg/gün`, drugB: `${Math.round(toDose * 0.6)} mg/gün`, note: 'Eski ilaç yarıya indirilir, yeni ilaç orta doza yükseltilir.' },
          { period: '15-21. Gün (3. Hafta)', drugA: `${Math.round(fromDose * 0.25)} mg/gün`, drugB: `${toDose} mg/gün`, note: 'Eski ilaç çeyrek doza indirilir, yeni ilaç hedef doza ulaşır.' },
          { period: '22. Gün+', drugA: '0 mg (Tamamen Kesildi)', drugB: `${toDose} mg/gün`, note: 'Yalnızca yeni antipsikotik tedavisi sürdürülür.' }
        ]
      };
    }

    // 6. General Cross-Tapering
    return {
      method: 'Kademeli Çapraz Titrasyon (Cross-Tapering)',
      riskLevel: 'Standart Klinik Prosedür',
      danger: 'İki ilacın serotonerjik etkileşimi ve CYP metabolizması eş zamanlı izlenmelidir.',
      steps: [
        { period: '1-4. Gün', drugA: `${Math.round(fromDose * 0.5)} mg/gün`, drugB: `${toDrug.defaultDoses[0]} mg/gün`, note: 'Mevcut ilaç %50 azaltılır, hedef ilaç düşük dozda başlanır.' },
        { period: '5-8. Gün', drugA: `${Math.round(fromDose * 0.25)} mg/gün`, drugB: `${Math.round(toDose * 0.75)} mg/gün`, note: 'Mevcut ilaç %25\'e indirilir, hedef ilaç artırılır.' },
        { period: '9. Gün+', drugA: '0 mg (Kesildi)', drugB: `${toDose} mg/gün`, note: 'Hedef ilaç tam doza ulaştırılarak idameye geçilir.' }
      ]
    };
  };

  const plan = getSwitchStrategy();

  const handleCopySchedule = async () => {
    const text = `=== PSİKİYATRİK İLAÇ GEÇİŞ (SWITCH) PROTOKOLÜ ===\n` +
      `Mevcut İlaç: ${fromDrug.name} (${fromDose} ${fromDrug.unit})\n` +
      `Hedef İlaç: ${toDrug.name} (${toDose} ${toDrug.unit})\n` +
      `Geçiş Yöntemi: ${plan.method}\n` +
      `Risk Düzeyi: ${plan.riskLevel}\n\n` +
      `ÖNEMLİ KLİNİK UYARI:\n${plan.danger}\n\n` +
      `GÜN GÜN KULLANIM TAKVİMİ:\n` +
      plan.steps.map(s => `[${s.period}]\n  • ${fromDrug.name}: ${s.drugA}\n  • ${toDrug.name}: ${s.drugB}\n  Açıklama: ${s.note}`).join('\n\n') +
      `\n\nKaynak: CANMAT 2023 / APA / Maudsley Prescribing Guidelines 14th Ed. / PSYCHDS Switch Engine`;

    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-xl shadow-md border border-neutral-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-800 border border-neutral-600 text-[10px] font-mono font-bold uppercase rounded text-neutral-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Klinisyen Hızlı Araç • Maudsley & CANMAT</span>
            </div>
            <h2 className="text-xl font-black font-display tracking-tight text-white">
              Psikotrop İlaç Değişimi & Çapraz Titrasyon Simülatörü (Cross-Switch)
            </h2>
            <p className="text-xs text-neutral-300 max-w-2xl">
              Antidepresanlar ve antipsikotikler arası geçişlerde kesilme sendromunu ve Serotonin Sendromunu önleyen, 
              yarı ömür ve CYP uyumlu gün gün doz takvimi.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySchedule}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white text-black hover:bg-neutral-100 font-semibold text-xs rounded-lg transition-all shrink-0 cursor-pointer shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-800" />}
            <span>{copied ? 'Takvim Kopyalandı' : 'Takvimi Epkrize Kopyala'}</span>
          </button>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From Drug */}
        <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-red-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              1. Mevcut İlaç (Kesilecek / Azaltılacak)
            </span>
            <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              {fromDrug.class}
            </span>
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-700 block mb-1">İlaç Seçimi</label>
            <select
              value={fromDrugId}
              onChange={(e) => {
                const newId = e.target.value;
                setFromDrugId(newId);
                const d = SWITCH_DRUGS.find(x => x.id === newId);
                if (d) setFromDose(d.defaultDoses[Math.floor(d.defaultDoses.length / 2)]);
              }}
              className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-medium text-neutral-900"
            >
              {SWITCH_DRUGS.map(d => (
                <option key={d.id} value={d.id}>{d.name} [{d.class}]</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-neutral-700">Mevcut Günlük Doz</label>
              <span className="text-xs font-mono font-bold text-neutral-900">{fromDose} {fromDrug.unit}/gün</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {fromDrug.defaultDoses.map(dose => (
                <button
                  key={dose}
                  type="button"
                  onClick={() => setFromDose(dose)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold border rounded transition-all cursor-pointer ${
                    fromDose === dose
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {dose} {fromDrug.unit}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500 space-y-0.5">
            <div><strong className="text-neutral-700">Yarı Ömür:</strong> {fromDrug.halfLife}</div>
            <div><strong className="text-neutral-700">CYP Yolağı:</strong> {fromDrug.cypMajor}</div>
          </div>
        </div>

        {/* To Drug */}
        <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-emerald-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              2. Hedef İlaç (Başlanacak / Yükseltilecek)
            </span>
            <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              {toDrug.class}
            </span>
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-700 block mb-1">İlaç Seçimi</label>
            <select
              value={toDrugId}
              onChange={(e) => {
                const newId = e.target.value;
                setToDrugId(newId);
                const d = SWITCH_DRUGS.find(x => x.id === newId);
                if (d) setToDose(d.defaultDoses[Math.floor(d.defaultDoses.length / 2)]);
              }}
              className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-medium text-neutral-900"
            >
              {SWITCH_DRUGS.map(d => (
                <option key={d.id} value={d.id}>{d.name} [{d.class}]</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-neutral-700">Hedeflenen İdame Doz</label>
              <span className="text-xs font-mono font-bold text-neutral-900">{toDose} {toDrug.unit}/gün</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {toDrug.defaultDoses.map(dose => (
                <button
                  key={dose}
                  type="button"
                  onClick={() => setToDose(dose)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold border rounded transition-all cursor-pointer ${
                    toDose === dose
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {dose} {toDrug.unit}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500 space-y-0.5">
            <div><strong className="text-neutral-700">Yarı Ömür:</strong> {toDrug.halfLife}</div>
            <div><strong className="text-neutral-700">CYP Yolağı:</strong> {toDrug.cypMajor}</div>
          </div>
        </div>
      </div>

      {/* Strategy Alert Box */}
      <div className={`p-4 border rounded-xl space-y-2 ${
        plan.riskLevel.includes('Kırmızı') 
          ? 'bg-red-50 border-red-300 text-red-950' 
          : plan.riskLevel.includes('Yüksek') 
          ? 'bg-amber-50 border-amber-300 text-amber-950' 
          : 'bg-neutral-50 border-neutral-300 text-neutral-900'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className={`w-4 h-4 ${plan.riskLevel.includes('Kırmızı') ? 'text-red-700' : 'text-amber-700'}`} />
            <span className="font-bold text-xs uppercase font-mono tracking-wider">
              Önerilen Strateji: {plan.method}
            </span>
          </div>
          <span className={`px-2 py-0.5 text-[10px] font-bold font-mono rounded ${
            plan.riskLevel.includes('Kırmızı') ? 'bg-red-200 text-red-900' : 'bg-neutral-200 text-neutral-800'
          }`}>
            {plan.riskLevel}
          </span>
        </div>
        <p className="text-xs leading-relaxed font-normal">
          {plan.danger}
        </p>
      </div>

      {/* Day by Day Calendar Table */}
      <div className="border border-neutral-200 bg-white rounded-xl overflow-hidden shadow-xs">
        <div className="p-3.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neutral-800" />
            <h3 className="text-xs font-bold font-mono uppercase text-neutral-900">
              Gün Gün Uygulama ve Dozaj Titrasyon Takvimi
            </h3>
          </div>
          <span className="text-[11px] text-neutral-500 font-mono">
            {plan.steps.length} Aşamalı Protokol
          </span>
        </div>

        <div className="divide-y divide-neutral-200">
          {plan.steps.map((step, idx) => (
            <div key={idx} className="p-4 hover:bg-neutral-50/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="w-36 shrink-0">
                <span className="inline-block px-2.5 py-1 bg-neutral-900 text-white font-mono text-xs font-bold rounded">
                  {step.period}
                </span>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-red-50/60 border border-red-200/80 rounded-lg">
                  <span className="text-[10px] font-mono text-red-700 font-bold block">{fromDrug.name}</span>
                  <span className="font-bold text-neutral-900 text-sm">{step.drugA}</span>
                </div>
                <div className="p-2.5 bg-emerald-50/60 border border-emerald-200/80 rounded-lg">
                  <span className="text-[10px] font-mono text-emerald-800 font-bold block">{toDrug.name}</span>
                  <span className="font-bold text-neutral-900 text-sm">{step.drugB}</span>
                </div>
              </div>

              <div className="md:w-64 shrink-0 text-xs text-neutral-600 bg-neutral-50 p-2 rounded border border-neutral-200">
                <strong className="text-neutral-800 block text-[11px] mb-0.5">Klinik Not:</strong>
                {step.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Warning Pearls */}
      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2 text-xs text-neutral-700">
        <div className="flex items-center gap-1.5 font-bold text-neutral-900">
          <Info className="w-4 h-4 text-neutral-800" />
          <span>Klinik Geçiş İlkeleri (Maudsley Prescribing Guidelines):</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-neutral-600 pl-1">
          <li><strong>FINISH Sendromu:</strong> Paroksetin ve Venlafaksin ani kesildiğinde 24-48 saatte baş dönmesi, elektrik çarpması (brain zaps), uykusuzluk ve anksiyete gelişir; doz kademeli azaltılmalıdır.</li>
          <li><strong>Serotonin Sendromu Taraması:</strong> Özellikle iki serotonerjik ajan birlikte verilirken ajitasyon, hiperrefleksi, klonus, terleme ve hipertermi takip edilmelidir.</li>
          <li><strong>Aripiprazol Geçişi:</strong> D2 parsiyel agonisti olduğu için mevcut antipsikotik aniden kesilirse akatizi veya psikoz alevlenmesi görülebilir; eski ilaç 2-3 hafta yavaşça çekilmelidir.</li>
        </ul>
      </div>
    </div>
  );
};
