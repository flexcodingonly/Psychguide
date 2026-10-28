import React, { useState } from 'react';
import { 
  Pill, 
  Scale, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Info, 
  TrendingDown, 
  Activity,
  Heart,
  Moon,
  Zap,
  Weight
} from 'lucide-react';

interface DrugProfile {
  id: string;
  name: string;
  class: string;
  weightEffect: { level: 'Kilo Kaybı' | 'Nötr' | 'Hafif Artış' | 'Yüksek Artış'; note: string };
  sedationEffect: { level: 'Uykusuzluk / Uyarıcı' | 'Nötr' | 'Hafif Sedasyon' | 'Ağır Sedasyon'; note: string };
  sexualDysfunction: { level: 'Çok Düşük (<%10)' | 'Düşük-Orta' | 'Yüksek (%40-70)'; note: string };
  qtcRisk: { level: 'Çok Düşük' | 'Orta (Doza Bağlı)' | 'Yüksek'; note: string };
  withdrawalRisk: { level: 'Düşük (Kendi Kendine Taper)' | 'Orta' | 'Çok Yüksek (Şiddetli FINISH)'; note: string };
  taperingAdvice: string;
}

const COMPARISON_DRUGS: DrugProfile[] = [
  {
    id: 'escitalopram',
    name: 'Essitalopram (Cipralex, Citoles)',
    class: 'SSRI',
    weightEffect: { level: 'Nötr', note: 'İştah üzerinde belirgin etkisi genellikle yoktur; uzun dönemde hafif kilo alımı olabilir.' },
    sedationEffect: { level: 'Nötr', note: 'Genellikle gündüz alınır, bazı hastalarda ilk hafta hafif uyku hali yapabilir.' },
    sexualDysfunction: { level: 'Yüksek (%40-70)', note: 'Libido azalması ve orgazm gecikmesi sık görülen sınıf etkisidir.' },
    qtcRisk: { level: 'Orta (Doza Bağlı)', note: '>20 mg/gün dozlarda QTc uzaması riski nedeniyle 20 mg üst sınır önerilir.' },
    withdrawalRisk: { level: 'Orta', note: 'Ani kesilirse 2-3 günde baş dönmesi ve anksiyete görülebilir; 2-4 haftada azaltılmalıdır.' },
    taperingAdvice: '20 mg -> 15 mg (2 hafta) -> 10 mg (2 hafta) -> 5 mg (2 hafta) -> Gün aşırı 5 mg -> Kesilme.'
  },
  {
    id: 'sertraline',
    name: 'Sertralin (Lustral, Selectra)',
    class: 'SSRI',
    weightEffect: { level: 'Nötr', note: 'Kilo açısından oldukça nötrdür; kardiyovasküler güvenlik profili en yüksek antidepresandır.' },
    sedationEffect: { level: 'Nötr', note: 'Hafif dopamin geri alım etkisi nedeniyle hafif aktive edici olabilir; sabah alınması önerilir.' },
    sexualDysfunction: { level: 'Yüksek (%40-70)', note: 'Ejakülasyon gecikmesi sıktır.' },
    qtcRisk: { level: 'Çok Düşük', note: 'Kardiyak açıdan miyokard enfarktüsü sonrası altın standart güvenli ajandır (SADHART çalışması).' },
    withdrawalRisk: { level: 'Orta', note: 'Kademeli haftalık azaltma ile kesilme sendromu yönetilebilir.' },
    taperingAdvice: '100 mg -> 75 mg (2 hafta) -> 50 mg (2 hafta) -> 25 mg (2 hafta) -> Kesilme.'
  },
  {
    id: 'bupropion',
    name: 'Bupropion XL (Wellbutrin)',
    class: 'NDRI (Noradrenalin-Dopamin)',
    weightEffect: { level: 'Kilo Kaybı', note: 'İştahı azaltır; kilo aldırmayan, aksine kilo kaybı sağlayan ender antidepresanlardandır.' },
    sedationEffect: { level: 'Uykusuzluk / Uyarıcı', note: 'Uyarıcı etki gösterir, enerji verir. Akşam alınırsa uykusuzluk yapar; sabah alınmalıdır.' },
    sexualDysfunction: { level: 'Çok Düşük (<%10)', note: 'Cinsel işlev bozukluğu yapmaz, aksine libido ve orgazmı artırabilir (SSRI yan etkisi tedavisinde eklenir).' },
    qtcRisk: { level: 'Çok Düşük', note: 'QTc üzerinde klinik etkisi yoktur; ancak konvülsiyon eşiğini düşürebilir.' },
    withdrawalRisk: { level: 'Düşük (Kendi Kendine Taper)', note: 'Serotonerjik kesilme sendromu yapmaz; çekilme semptomları hafiftir.' },
    taperingAdvice: '300 mg -> 150 mg (2-3 hafta) -> Kesilme.'
  },
  {
    id: 'mirtazapine',
    name: 'Mirtazapin (Remeron, Redepra)',
    class: 'NaSSA (Noradrenerjik & Spesifik Serotonerjik)',
    weightEffect: { level: 'Yüksek Artış', note: 'Güçlü H1 histamin blokajı ve 5-HT2C etkisiyle karbonhidrat aşermesi ve belirgin kilo alımı yapar.' },
    sedationEffect: { level: 'Ağır Sedasyon', note: 'Çok güçlü uyku yapıcıdır. Düşük dozlarda (7.5-15 mg) antihistaminik etkisiyle sedasyon daha belirgindir.' },
    sexualDysfunction: { level: 'Çok Düşük (<%10)', note: '5-HT2 blokajı sayesinde cinsel yan etki oranı son derece düşüktür.' },
    qtcRisk: { level: 'Çok Düşük', note: 'Kardiyak açıdan güvenli kabul edilir.' },
    withdrawalRisk: { level: 'Orta', note: 'Rebound uykusuzluk ve anksiyete yapabilir; yavaş azaltılmalıdır.' },
    taperingAdvice: '30 mg -> 15 mg (2 hafta) -> 7.5 mg (2 hafta) -> Kesilme.'
  },
  {
    id: 'venlafaxine',
    name: 'Venlafaksin XR (Efexor)',
    class: 'SNRI (Serotonin-Noradrenalin)',
    weightEffect: { level: 'Nötr', note: 'Genellikle kilo açısından nötrdür.' },
    sedationEffect: { level: 'Uykusuzluk / Uyarıcı', note: 'Noradrenerjik uyarılma ile enerji artışı ve tansiyon yüksekliği yapabilir.' },
    sexualDysfunction: { level: 'Yüksek (%40-70)', note: 'Hem serotonin hem noradrenalin etkisiyle cinsel disfonksiyon sıktır.' },
    qtcRisk: { level: 'Çok Düşük', note: 'Yüksek dozlarda kan basıncı takibi gerektirir.' },
    withdrawalRisk: { level: 'Çok Yüksek (Şiddetli FINISH)', note: 'Yarılanma ömrü çok kısadır! Bir doz bile unutulsa baş dönmesi, elektrik çarpması (brain zaps) ve bulantı başlar.' },
    taperingAdvice: 'Hiperbolik taper şarttır: 150 mg -> 75 mg (3 hafta) -> 37.5 mg (3 hafta) -> Kapsül granülleri sayılarak azaltılmalıdır.'
  },
  {
    id: 'vortioxetine',
    name: 'Vortioksetin (Brintellix)',
    class: 'Multimodal Serotonerjik',
    weightEffect: { level: 'Nötr', note: 'Kilo üzerinde minimal veya sıfır etki.' },
    sedationEffect: { level: 'Nötr', note: 'Bilişsel işlevleri (dikkat, işlem hızı) güçlendirici pro-kognitif etkisi vardır; uyku yapmaz.' },
    sexualDysfunction: { level: 'Düşük-Orta', note: 'Plaseboya yakın cinsel tolerabiliteye sahiptir (%15-20 dolayında).' },
    qtcRisk: { level: 'Çok Düşük', note: 'Kardiyak repolarizasyonu etkilemez.' },
    withdrawalRisk: { level: 'Düşük (Kendi Kendine Taper)', note: '66 saatlik uzun yarı ömrü sayesinde kesilme sendromu riski düşüktür.' },
    taperingAdvice: '20 mg -> 10 mg (2 hafta) -> 5 mg (2 hafta) -> Kesilme.'
  }
];

export const MedicationComparisonTapering: React.FC = () => {
  const [drugAId, setDrugAId] = useState<string>('escitalopram');
  const [drugBId, setDrugBId] = useState<string>('bupropion');
  const [drugCId, setDrugCId] = useState<string>('mirtazapine');

  const drugA = COMPARISON_DRUGS.find(d => d.id === drugAId) || COMPARISON_DRUGS[0];
  const drugB = COMPARISON_DRUGS.find(d => d.id === drugBId) || COMPARISON_DRUGS[2];
  const drugC = COMPARISON_DRUGS.find(d => d.id === drugCId) || COMPARISON_DRUGS[3];

  const getBadgeStyle = (level: string) => {
    if (level.includes('Kayıp') || level.includes('Çok Düşük')) {
      return 'bg-emerald-50 text-emerald-900 border-emerald-300 font-bold';
    }
    if (level.includes('Nötr') || level.includes('Düşük')) {
      return 'bg-neutral-100 text-neutral-800 border-neutral-300';
    }
    if (level.includes('Orta') || level.includes('Hafif')) {
      return 'bg-amber-50 text-amber-900 border-amber-300';
    }
    return 'bg-red-50 text-red-900 border-red-300 font-bold';
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-xl shadow-md border border-neutral-700">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-800 border border-neutral-600 text-[10px] font-mono font-bold uppercase rounded text-neutral-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Klinisyen & Hasta Ortak Karar Aracı</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
            İlaç Yan Etki Karşılaştırıcı & Güvenli Bırakma (Tapering) Pusulası
          </h2>
          <p className="text-xs text-neutral-300 max-w-3xl">
            Kilo artışı, uyku/sedasyon, cinsel yan etkiler ve kesilme sendromu risklerini 3 ilacı yan yana koyarak karşılaştırın. 
            Lancet Psychiatry (Horowitz & Taylor) hiperbolik doz azaltma rehberiyle güvenli bırakma protokolünü öğrenin.
          </p>
        </div>
      </div>

      {/* Selectors for 3 Drugs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 bg-white border border-neutral-200 rounded-xl space-y-1 shadow-xs">
          <label className="text-[11px] font-mono uppercase font-bold text-neutral-500 block">1. İlaç</label>
          <select
            value={drugAId}
            onChange={(e) => setDrugAId(e.target.value)}
            className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-bold"
          >
            {COMPARISON_DRUGS.map(d => (
              <option key={d.id} value={d.id}>{d.name} [{d.class}]</option>
            ))}
          </select>
        </div>

        <div className="p-3 bg-white border border-neutral-200 rounded-xl space-y-1 shadow-xs">
          <label className="text-[11px] font-mono uppercase font-bold text-neutral-500 block">2. İlaç</label>
          <select
            value={drugBId}
            onChange={(e) => setDrugBId(e.target.value)}
            className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-bold"
          >
            {COMPARISON_DRUGS.map(d => (
              <option key={d.id} value={d.id}>{d.name} [{d.class}]</option>
            ))}
          </select>
        </div>

        <div className="p-3 bg-white border border-neutral-200 rounded-xl space-y-1 shadow-xs">
          <label className="text-[11px] font-mono uppercase font-bold text-neutral-500 block">3. İlaç</label>
          <select
            value={drugCId}
            onChange={(e) => setDrugCId(e.target.value)}
            className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-bold"
          >
            {COMPARISON_DRUGS.map(d => (
              <option key={d.id} value={d.id}>{d.name} [{d.class}]</option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-side Comparison Matrix Table */}
      <div className="border border-neutral-200 bg-white rounded-xl overflow-hidden shadow-xs">
        <div className="p-3.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <h3 className="text-xs font-bold font-mono uppercase text-neutral-900 flex items-center gap-2">
            <Scale className="w-4 h-4 text-neutral-800" />
            <span>Klinik Yan Etki & Risk Karşılaştırma Matrisi</span>
          </h3>
          <span className="text-[11px] text-neutral-500 font-mono">Biyopsikososyal Profil</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-[#fbfbfd]">
                <th className="p-3.5 font-mono uppercase text-[11px] text-neutral-500 w-1/4">Klinik Boyut</th>
                <th className="p-3.5 font-bold text-neutral-900 w-1/4 border-l border-neutral-200">{drugA.name}</th>
                <th className="p-3.5 font-bold text-neutral-900 w-1/4 border-l border-neutral-200">{drugB.name}</th>
                <th className="p-3.5 font-bold text-neutral-900 w-1/4 border-l border-neutral-200">{drugC.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {/* Weight */}
              <tr>
                <td className="p-3.5 font-semibold text-neutral-800 bg-neutral-50/50 flex items-center gap-1.5">
                  <Weight className="w-4 h-4 text-neutral-700" />
                  <span>Kilo Değişimi & İştah</span>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugA.weightEffect.level)}`}>
                    {drugA.weightEffect.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugA.weightEffect.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugB.weightEffect.level)}`}>
                    {drugB.weightEffect.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugB.weightEffect.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugC.weightEffect.level)}`}>
                    {drugC.weightEffect.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugC.weightEffect.note}</p>
                </td>
              </tr>

              {/* Sedation */}
              <tr>
                <td className="p-3.5 font-semibold text-neutral-800 bg-neutral-50/50 flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-neutral-700" />
                  <span>Sedasyon / Uyku Etkisi</span>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugA.sedationEffect.level)}`}>
                    {drugA.sedationEffect.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugA.sedationEffect.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugB.sedationEffect.level)}`}>
                    {drugB.sedationEffect.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugB.sedationEffect.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugC.sedationEffect.level)}`}>
                    {drugC.sedationEffect.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugC.sedationEffect.note}</p>
                </td>
              </tr>

              {/* Sexual dysfunction */}
              <tr>
                <td className="p-3.5 font-semibold text-neutral-800 bg-neutral-50/50 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-neutral-700" />
                  <span>Cinsel Yan Etki Oranı</span>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugA.sexualDysfunction.level)}`}>
                    {drugA.sexualDysfunction.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugA.sexualDysfunction.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugB.sexualDysfunction.level)}`}>
                    {drugB.sexualDysfunction.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugB.sexualDysfunction.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugC.sexualDysfunction.level)}`}>
                    {drugC.sexualDysfunction.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugC.sexualDysfunction.note}</p>
                </td>
              </tr>

              {/* Withdrawal / Discontinuation */}
              <tr>
                <td className="p-3.5 font-semibold text-neutral-800 bg-neutral-50/50 flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 text-neutral-700" />
                  <span>Kesilme (FINISH) Riski</span>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugA.withdrawalRisk.level)}`}>
                    {drugA.withdrawalRisk.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugA.withdrawalRisk.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugB.withdrawalRisk.level)}`}>
                    {drugB.withdrawalRisk.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugB.withdrawalRisk.note}</p>
                </td>
                <td className="p-3.5 border-l border-neutral-200">
                  <span className={`px-2 py-0.5 rounded text-[11px] border block w-fit mb-1 ${getBadgeStyle(drugC.withdrawalRisk.level)}`}>
                    {drugC.withdrawalRisk.level}
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-tight">{drugC.withdrawalRisk.note}</p>
                </td>
              </tr>

              {/* Tapering schedule advice */}
              <tr>
                <td className="p-3.5 font-semibold text-neutral-800 bg-neutral-50/50 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-neutral-700" />
                  <span>Güvenli Doz Azaltma (Taper)</span>
                </td>
                <td className="p-3.5 border-l border-neutral-200 font-mono text-[11px] text-neutral-800 bg-neutral-50/30">
                  {drugA.taperingAdvice}
                </td>
                <td className="p-3.5 border-l border-neutral-200 font-mono text-[11px] text-neutral-800 bg-neutral-50/30">
                  {drugB.taperingAdvice}
                </td>
                <td className="p-3.5 border-l border-neutral-200 font-mono text-[11px] text-neutral-800 bg-neutral-50/30">
                  {drugC.taperingAdvice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Hiperbolik Tapering & Lancet Psychiatry Rehberi */}
      <div className="p-5 bg-white border border-neutral-200 rounded-xl space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-neutral-900">
          <Info className="w-4 h-4 text-neutral-800" />
          <span>Altın Standart: Horowitz & Taylor Hiperbolik Doz Düşürme İlkesi (Lancet Psychiatry 2019)</span>
        </div>
        <p className="text-xs text-neutral-700 leading-relaxed">
          Beyindeki serotonin taşıyıcısı (SERT) doluluk eğrisi lineer değil hiperboliktir. 
          Örneğin 20 mg Essitalopram'dan 10 mg'a inildiğinde reseptör doluluğu yalnızca %80'den %70'e düşerken; 
          5 mg'dan 0 mg'a inildiğinde reseptör doluluğu aniden %60'tan %0'a çakılır! 
          Bu nedenle hastaların "ilaç bırakırken en çok son miligramlarda sarsılması" farmakolojik bir gerçektir.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
            <strong className="text-neutral-900 block mb-1">1. %10 Kuralı:</strong>
            Her doz düşüşü, ilacın başlangıç dozunun değil; o anki mevcut dozun %10-25'i kadar olmalıdır.
          </div>
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
            <strong className="text-neutral-900 block mb-1">2. 2-4 Hafta Bekleme:</strong>
            Her doz azaltımından sonra beynin yeni reseptör dengesine uyum sağlaması için en az 2 ila 4 hafta beklenmelidir.
          </div>
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
            <strong className="text-neutral-900 block mb-1">3. FINISH Sendromu:</strong>
            Grip benzeri his, elektrik çarpması (brain zaps), bulantı veya ağlama krizleri nüks değil kesilme sendromudur; doz geçici olarak bir önceki basamağa yükseltilmelidir.
          </div>
        </div>
      </div>
    </div>
  );
};
