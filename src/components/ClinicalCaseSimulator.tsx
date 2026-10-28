import React, { useState } from 'react';
import { 
  Stethoscope, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  Sparkles, 
  AlertCircle, 
  FileText, 
  Activity, 
  Heart,
  Brain,
  ShieldAlert
} from 'lucide-react';

interface CaseOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

interface ClinicalInvestigation {
  id: string;
  name: string;
  result: string;
  isCritical: boolean;
}

interface ClinicalCase {
  id: string;
  title: string;
  patientProfile: string;
  chiefComplaint: string;
  historyOfPresentIllness: string;
  mseFindings: string[];
  investigations: ClinicalInvestigation[];
  question1: {
    prompt: string;
    options: CaseOption[];
  };
  question2: {
    prompt: string;
    options: CaseOption[];
  };
  clinicalTakeaway: string;
  guidelineReference: string;
}

const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case-1',
    title: 'Vaka 1: Acil Serviste Çarpıntı ve "Ölüyorum" Korkusu',
    patientProfile: '28 yaşında, kadın, mimar',
    chiefComplaint: '"Kalbim göğsümden fırlayacak gibi çarpıyor, nefes alamıyorum, öleceğimi sandım."',
    historyOfPresentIllness: 'Son 3 haftadır haftada 2-3 kez aniden gelen, yaklaşık 10-15 dakika süren şiddetli çarpıntı, göğüste baskı, ellerde uyuşma ve kontrolünü kaybetme hissi tarifliyor. Son atak metroda gerçekleşmiş ve acil servise getirilmiştir. Daha önce benzer şikayeti olmamış, son 1 aydır yoğun proje teslimi nedeniyle günde 4-5 kupa filtre kahve tükettiğini belirtiyor.',
    mseFindings: [
      'Görünüm: Yaşıyla uyumlu, ajite ve terli, sürekli nabzını kontrol ediyor.',
      'Duygudurum: Yoğun anksiyöz, korkulu ("Acaba kalp krizi mi geçiriyorum?").',
      'Düşünce İçeriği: Ölüm korkusu ve felaketleştirici bedensel kaygılar mevcut; psikotik içerik yok.',
      'Yönelim & Biliş: Tam oryante, içgörü mevcut.'
    ],
    investigations: [
      { id: 'ecg', name: '12 Derivasyonlu EKG', result: 'Sinüs taşikardisi (Nabız: 112/dk), iskemi veya aritmi yok, QTc normal (415 ms).', isCritical: true },
      { id: 'troponin', name: 'Kardiyak Troponin I & CK-MB', result: 'Negatif (<0.01 ng/mL). Akut koroner sendrom dışlandı.', isCritical: true },
      { id: 'tsh', name: 'TSH & Serbest T4', result: 'TSH: 1.85 mIU/L, sT4 normal. Tirotoksikoz dışlandı.', isCritical: true },
      { id: 'blood_gas', name: 'Arteryel/Venöz Kan Gazı', result: 'Hafif respiratuar alkaloz (pH: 7.48, pCO2: 31 mmHg), hiperventilasyona sekonder.', isCritical: false }
    ],
    question1: {
      prompt: 'Organik tetkikler tamamen normal sonuçlandığında, bu hastada en olası psikiyatrik tanı aşağıdakilerden hangisidir?',
      options: [
        {
          id: 'opt-1a',
          text: 'Panik Bozukluk (DSM-5)',
          isCorrect: true,
          explanation: 'Doğru! Beklenmedik tekrarlayıcı panik ataklar, ataklar sonrası en az 1 ay süren "yeniden atak geçirme" beklenti anksiyetesi ve organik tetkiklerin temiz olması Panik Bozukluk tanısını doğrular.'
        },
        {
          id: 'opt-1b',
          text: 'Feokromositoma (Adrenal Tümör)',
          isCorrect: false,
          explanation: 'Yanlış. Feokromositomada kalıcı dirençli hipertansiyon, şiddetli baş ağrısı ve terleme triadı görülür; ataklar genellikle dakikalarla sınırlı değildir.'
        },
        {
          id: 'opt-1c',
          text: 'Somatizasyon Bozukluğu',
          isCorrect: false,
          explanation: 'Yanlış. Somatizasyon bozukluğu çoklu sistemleri tutan kronik ağrı ve şikayetlerle seyreder; ani otonomik sempatik fırtına panik atağı işaret eder.'
        },
        {
          id: 'opt-1d',
          text: 'Yaygın Anksiyete Bozukluğu (YAB)',
          isCorrect: false,
          explanation: 'Yanlış. YAB ataklar halinde değil, en az 6 aydır süren yaygın ve süreğen endişe ile seyreder.'
        }
      ]
    },
    question2: {
      prompt: 'Bu hastada uluslararası kılavuzlara (APA & CANMAT) göre 1. sıra farmakolojik ve psikoterapötik tedavi yaklaşımı ne olmalıdır?',
      options: [
        {
          id: 'opt-2a',
          text: 'Yalnızca ihtiyaç halinde yüksek doz Alprazolam (Xanax) başlanıp hasta gönderilmelidir.',
          isCorrect: false,
          explanation: 'Yanlış. Benzodiazepin monoterapisi bağımlılık riski taşır ve panik bozukluğun altta yatan mekanizmasını tedavi etmez.'
        },
        {
          id: 'opt-2b',
          text: 'SSRI (Örn: Sertralin 25-50 mg) + Bilişsel Davranışçı Terapi (BDT) + Kafein kısıtlaması',
          isCorrect: true,
          explanation: 'Doğru! SSRI\'lar panik bozuklukta birinci basamak altın standarttır (başlangıçta paradoksal anksiyeteyi önlemek için düşük doz başlanıp titre edilir). BDT ile felaketleştirici bedensel algılar onarılır.'
        },
        {
          id: 'opt-2c',
          text: 'Hemen Atipik Antipsikotik (Ketiapin 300 mg) monoterapi başlanmalıdır.',
          isCorrect: false,
          explanation: 'Yanlış. Komplike olmayan panik bozuklukta antipsikotik ilk sıra tedavi değildir.'
        },
        {
          id: 'opt-2d',
          text: 'İlaç tedavisine gerek yoktur, hastaya sadece derin nefes alması söylenmelidir.',
          isCorrect: false,
          explanation: 'Yanlış. Yeti yitimine ve agorafobi gelişimine yol açan tekrarlayıcı panik ataklarda kanıta dayalı medikal/psikoterapötik tedavi endikedir.'
        }
      ]
    },
    clinicalTakeaway: 'Panik atakta acil serviste mutlaka kardiyak ve tiroid patolojileri dışlanmalı, ardından hastaya "kalbiniz sağlam, bu bedenin yanlış alarmıdır" güvencesi verilip SSRI + BDT protokolüne yönlendirilmelidir.',
    guidelineReference: 'APA Practice Guideline for the Treatment of Patients With Panic Disorder'
  },
  {
    id: 'case-2',
    title: 'Vaka 2: Dirençli Depresyon Sanılan Bipolar II Tuzağı',
    patientProfile: '34 yaşında, erkek, yazılım mühendisi',
    chiefComplaint: '"3 yıldır antidepresan kullanıyorum ama bir türlü tam iyileşemiyorum. İlacı artırınca aşırı sinirli ve uykusuz oluyorum."',
    historyOfPresentIllness: 'Hasta majör depresyon tanısıyla sırasıyla Essitalopram, Duloksetin ve Venlafaksin kullanmış. Kısmi fayda görse de sık sık çökkünlük atakları yaşamaya devam ediyor. Ayrıntılı sorgulandığında: 2 yıl önce 4-5 gün süren, günde sadece 2-3 saat uykuyla kendini "süper enerjik, zihni yarışır vaziyette" hissettiği, bankadan kredi çekip 3 farklı startup fikrine para yatırdığı bir dönem olduğu öğreniliyor.',
    mseFindings: [
      'Görünüm: Yorgun, göz teması zayıf, çökkün postür.',
      'Duygudurum: Disforik, irritabl (çabuk öfkelenen) ve anhedonik.',
      'Düşünce Akışı: Yavaşlamış, değersizlik ve suçluluk hisleri belirgin.',
      'Bilişsel Tarama: MDQ (Duygudurum Bozuklukları Ölçeği) pozitif (9/13 evet, eşzamanlı ve orta-ciddi problem bildirimi).'
    ],
    investigations: [
      { id: 'family_history', name: 'Aile Öyküsü Sorgulaması', result: 'Birinci derece teyzesinde intihar girişimi ve lityum kullanım öyküsü mevcut.', isCritical: true },
      { id: 'bipolar_screener', name: 'MDQ & HCL-32 Taraması', result: 'Hipomanik dönem kriterlerini karşılayan pozitif skor.', isCritical: true },
      { id: 'thyroid_panel', name: 'Tiroid Fonksiyon Testleri', result: 'Normal sınırlarda (Ötiroid).', isCritical: false }
    ],
    question1: {
      prompt: 'Bu hastanın klinik tablosu ve geçmiş hipomanik periyodu göz önüne alındığında gerçek tanı nedir?',
      options: [
        {
          id: 'opt-2a1',
          text: 'Tedaviye Dirençli Majör Depresyon (TRD)',
          isCorrect: false,
          explanation: 'Yanlış. Geçmişte hastaneye yatış gerektirmeyen ancak belirgin işlevsellik değişimi ve enerji artışı olan 4 günlük periyot Bipolar Spektrum göstergesidir.'
        },
        {
          id: 'opt-2a2',
          text: 'Bipolar II Bozukluk (Şu an Depresif Atakta)',
          isCorrect: true,
          explanation: 'Doğru! Bipolar II bozukluk, en az 1 majör depresif atak ve en az 1 hipomanik atak (en az 4 gün süren, mani şiddetinde olmayan) ile tanımlanır. Antidepresan monoterapi döngüyü hızlandırır ve irritabiliteyi artırır.'
        },
        {
          id: 'opt-2a3',
          text: 'Sınırda (Borderline) Kişilik Bozukluğu',
          isCorrect: false,
          explanation: 'Yanlış. Günler süren enerjik periyot ve net epizodik seyir öncelikle eksen-1 duygudurum epizodunu destekler.'
        },
        {
          id: 'opt-2a4',
          text: 'Şizoafektif Bozukluk',
          isCorrect: false,
          explanation: 'Yanlış. Duygudurum atakları dışında bağımsız psikotik belirti bulunmamaktadır.'
        }
      ]
    },
    question2: {
      prompt: 'Bu hastada en uygun klinik farmakoterapi adımı nedir?',
      options: [
        {
          id: 'opt-2b1',
          text: 'Venlafaksin dozu maksimum 375 mg/güne çıkarılmalıdır.',
          isCorrect: false,
          explanation: 'Yanlış! Bipolar depresyonda antidepresan dozunu artırmak manik kayma, hızlı döngülülük ve intihar riskini tetikler.'
        },
        {
          id: 'opt-2b2',
          text: 'Antidepresan kademeli azaltılarak kesilmeli; Lityum veya Lamotrijin / Ketiapin başlanmalıdır.',
          isCorrect: true,
          explanation: 'Doğru! CANMAT Bipolar Kılavuzu: Bipolar depresyonda birinci basamak ajanlar Ketiapin, Lityum veya Lamotrijindir. Antidepresan monoterapisi derhal sonlandırılmalıdır.'
        },
        {
          id: 'opt-2b3',
          text: 'Yalnızca psikoterapi uygulanmalı, hiçbir ilaç verilmemelidir.',
          isCorrect: false,
          explanation: 'Yanlış. Bipolar bozukluk biyolojik zeminli bir rahatsızlıktır; medikal duygudurum dengeleyici temel taştır.'
        }
      ]
    },
    clinicalTakeaway: 'Her dirençli depresyon hastasında mutlaka geçmişte en az 4 gün süren uyku ihtiyacında azalma ve para harcama dönemleri (hipomani) ve ailede bipolar öyküsü taranmalıdır.',
    guidelineReference: 'CANMAT and ISBD 2018 Guidelines for the Management of Patients with Bipolar Disorder'
  },
  {
    id: 'case-3',
    title: 'Vaka 3: Yaşlı Hastada Ani Başlayan Şaşkınlık ve Halüsinasyon',
    patientProfile: '76 yaşında, erkek, emekli öğretmen',
    chiefComplaint: '"Babam dün geceden beri odada yabancı adamlar gördüğünü söylüyor, nerede olduğunu bilmiyor."',
    historyOfPresentIllness: 'Kızı tarafından getirilen hasta 2 gün öncesine kadar kendi öz bakımını yapan, hafif unutkanlığı olan ancak bağımsız yaşayan biridir. 48 saat içinde hızla başlayan bilinç dalgalanması, gece uykusuzluk, gündüz sersemlik, duvarda böcekler ve yabancı insanlar görme şikayeti başlamıştır. Dikkatini bir konuya odaklayamamaktadır.',
    mseFindings: [
      'Bilinç: Fluktuasyon gösteriyor (dalgalı), uyanıklık düzeyi değişken.',
      'Dikkat: Ağır bozulmuş (Ayları tersten sayamıyor, 20\'den geriye saymada takılıyor).',
      'Algı: Görsel halüsinasyonlar tarifliyor ("Pencerede askerler var").',
      'Yönelim: Zaman ve yer oryantasyonu kayıp (Hastaneyi otel sanıyor).'
    ],
    investigations: [
      { id: 'tam_idrar', name: 'Tam İdrar Tahlili (TİT) & Mikroskopi', result: 'Bol lökosit, nitrit pozitif, bakteri kümeleri. Akut Üriner Sistem Enfeksiyonu!', isCritical: true },
      { id: 'crp_wbc', name: 'Tam Kan Sayımı & CRP', result: 'WBC: 14.500/uL, CRP: 68 mg/L (Belirgin enfektif yükselme).', isCritical: true },
      { id: 'electrolytes', name: 'Serum Sodyum & Potasyum', result: 'Sodyum: 131 mEq/L (Hafif hiponatremi).', isCritical: true },
      { id: 'brain_ct', name: 'Beyin BT (Akut)', result: 'Kronik iskemik mikrovasküler değişiklikler, akut kanama veya kitle yok.', isCritical: false }
    ],
    question1: {
      prompt: 'Bu klinik tablonun öncelikli tanısı nedir?',
      options: [
        {
          id: 'opt-3a1',
          text: 'Akut Deliryum (Üriner Sepsis Zemininde)',
          isCorrect: true,
          explanation: 'Doğru! Akut başlangıç, dalgalı seyir, dikkat bozukluğu ve altta yatan organik enfeksiyon (ÜSE) Deliryum tablosunun kardinal özellikleridir.'
        },
        {
          id: 'opt-3a2',
          text: 'Alzheimer Demansı',
          isCorrect: false,
          explanation: 'Yanlış. Demans aylar-yıllar içinde sinsi ve yavaş ilerler; 48 saat içinde akut deliryum benzeri tablo yapmaz.'
        },
        {
          id: 'opt-3a3',
          text: 'Geç Başlangıçlı Şizofreni',
          isCorrect: false,
          explanation: 'Yanlış. Şizofrenide bilinç ve oryantasyon dalgalanması olmaz, dikkat primer bozulmaz.'
        }
      ]
    },
    question2: {
      prompt: 'Bu hastada acil yönetimde İLK ve EN ÖNEMLİ adım nedir?',
      options: [
        {
          id: 'opt-3b1',
          text: 'Yüksek doz antikolinerjik ilaç veya sedatif benzodiazepin verilmelidir.',
          isCorrect: false,
          explanation: 'Yanlış! Benzodiazepinler ve antikolinerjikler yaşlılarda deliryumu derinleştirir ve mortaliteyi artırır.'
        },
        {
          id: 'opt-3b2',
          text: 'Altta yatan enfeksiyonun (ÜSE) derhal antibiyotikle tedavisi + hidrasyon + çevre oryantasyonu',
          isCorrect: true,
          explanation: 'Doğru! Deliryumun tedavisi tetikleyici tıbbi/organik nedenin (burada üriner enfeksiyon) düzeltilmesidir. Çevre aydınlatılmalı, yakınları yanında tutulmalıdır.'
        },
        {
          id: 'opt-3b3',
          text: 'Hastaya hemen demans ilacı (Donepezil) başlanıp eve gönderilmelidir.',
          isCorrect: false,
          explanation: 'Yanlış. Akut deliryum acil yatış ve dahili araştırma gerektiren tıbbi bir acildir.'
        }
      ]
    },
    clinicalTakeaway: 'Yaşlı bir hastada günler içinde gelişen halüsinasyon ve kafa karışıklığı daima organik bir tetikleyiciyi (özellikle İdrar Yolu Enfeksiyonu, pnömoni veya ilaç etkileşimini) işaret eder.',
    guidelineReference: 'NICE Clinical Guideline 103: Delirium: prevention, diagnosis and management'
  }
];

export const ClinicalCaseSimulator: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [revealedInvestigations, setRevealedInvestigations] = useState<string[]>([]);
  const [selectedAnswerQ1, setSelectedAnswerQ1] = useState<string | null>(null);
  const [selectedAnswerQ2, setSelectedAnswerQ2] = useState<string | null>(null);

  const currentCase = CLINICAL_CASES[activeCaseIndex];

  const handleRevealInvestigation = (id: string) => {
    if (!revealedInvestigations.includes(id)) {
      setRevealedInvestigations(prev => [...prev, id]);
    }
  };

  const handleResetCurrentCase = () => {
    setRevealedInvestigations([]);
    setSelectedAnswerQ1(null);
    setSelectedAnswerQ2(null);
  };

  const handleChangeCase = (index: number) => {
    setActiveCaseIndex(index);
    setRevealedInvestigations([]);
    setSelectedAnswerQ1(null);
    setSelectedAnswerQ2(null);
  };

  const isQ1Answered = selectedAnswerQ1 !== null;
  const isQ2Answered = selectedAnswerQ2 !== null;

  const chosenOptQ1 = currentCase.question1.options.find(o => o.id === selectedAnswerQ1);
  const chosenOptQ2 = currentCase.question2.options.find(o => o.id === selectedAnswerQ2);

  const isQ1Correct = chosenOptQ1?.isCorrect ?? false;
  const isQ2Correct = chosenOptQ2?.isCorrect ?? false;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
          <Award className="w-4 h-4 text-purple-600" />
          <span>Viral Eğitim Aracı #4 • İnteraktif Klinik Vaka & Teşhis Karar Simülatörü</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1">
          Klinik Vaka Mücadeleleri & Ayırıcı Tanı Laboratuvarı
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl leading-relaxed">
          Tıp öğrencileri, asistan hekimler ve ruh sağlığı profesyonelleri için gerçekçi hasta senaryoları. 
          Tetkikleri tıklayarak açın, ayırıcı tanıyı yapın ve kılavuzlara dayalı anında geri bildirim alın.
        </p>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
          {CLINICAL_CASES.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleChangeCase(idx)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
              }`}
            >
              <span>Vaka {idx + 1}: {c.title.split(':')[1]?.trim() || c.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vignette Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Patient Case History & MSE (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-purple-700 block">
                  HASTA PROFİLİ
                </span>
                <h3 className="text-base font-bold text-neutral-900">
                  {currentCase.patientProfile}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleResetCurrentCase}
                className="flex items-center gap-1 text-[11px] font-semibold text-neutral-500 hover:text-neutral-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Sıfırla</span>
              </button>
            </div>

            {/* Chief Complaint */}
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
              <span className="text-[10px] font-bold uppercase font-mono text-neutral-500">
                Başvuru Şikayeti (Anamnez):
              </span>
              <p className="text-xs font-semibold text-neutral-800 italic">
                {currentCase.chiefComplaint}
              </p>
            </div>

            {/* HPI */}
            <div className="space-y-1 text-xs">
              <span className="text-[11px] font-bold text-neutral-700 uppercase font-mono">
                Öykü & Klinik Gelişim:
              </span>
              <p className="text-neutral-700 leading-relaxed">
                {currentCase.historyOfPresentIllness}
              </p>
            </div>

            {/* MSE */}
            <div className="space-y-2 pt-2 border-t border-neutral-100 text-xs">
              <span className="text-[11px] font-bold text-neutral-700 uppercase font-mono flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-neutral-600" />
                <span>Ruhsal Durum Muayenesi (MSE) Bulguları:</span>
              </span>
              <ul className="space-y-1">
                {currentCase.mseFindings.map((finding, i) => (
                  <li key={i} className="text-neutral-700 bg-neutral-50/70 p-2 rounded border border-neutral-200/60 text-[11px]">
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Investigations / Tests (Interactive Reveal) */}
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-900 font-mono uppercase flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-neutral-800" />
                <span>İstenen Tetkikler & Laboratuvar (Sonuçları Görmek İçin Tıklayın):</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                {revealedInvestigations.length} / {currentCase.investigations.length} İncelendi
              </span>
            </div>

            <div className="space-y-2">
              {currentCase.investigations.map(inv => {
                const isRevealed = revealedInvestigations.includes(inv.id);
                return (
                  <div
                    key={inv.id}
                    onClick={() => handleRevealInvestigation(inv.id)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      isRevealed
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold">{inv.name}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isRevealed ? 'bg-neutral-800 text-amber-300' : 'bg-neutral-200 text-neutral-700'
                      }`}>
                        {isRevealed ? 'Sonuç Açıldı' : 'Sonucu Gör +'}
                      </span>
                    </div>

                    {isRevealed && (
                      <div className="mt-2 pt-2 border-t border-neutral-800 text-xs text-neutral-200 font-sans leading-relaxed">
                        {inv.result}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Diagnostic & Treatment Questions (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Question 1: Diagnosis */}
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono font-bold rounded">
                SORU 1
              </span>
              <span className="text-xs font-bold text-neutral-500 uppercase font-mono">
                Ayırıcı Tanı Aşaması
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
              {currentCase.question1.prompt}
            </h4>

            {/* Options */}
            <div className="space-y-2 pt-1">
              {currentCase.question1.options.map(opt => {
                const isSelected = selectedAnswerQ1 === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedAnswerQ1(opt.id)}
                    className={`w-full p-3 rounded-lg border text-left text-xs transition-all cursor-pointer select-none ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20'
                          : 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/20'
                        : 'bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold">{opt.text}</span>
                      {isSelected && (
                        opt.isCorrect 
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          : <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </div>

                    {isSelected && (
                      <p className={`mt-2 pt-2 border-t text-[11px] leading-relaxed ${
                        opt.isCorrect ? 'border-emerald-200 text-emerald-800' : 'border-rose-200 text-rose-800'
                      }`}>
                        {opt.explanation}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2: Clinical Management */}
          <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono font-bold rounded">
                SORU 2
              </span>
              <span className="text-xs font-bold text-neutral-500 uppercase font-mono">
                Tedavi & Yönetim Kararı
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
              {currentCase.question2.prompt}
            </h4>

            {/* Options */}
            <div className="space-y-2 pt-1">
              {currentCase.question2.options.map(opt => {
                const isSelected = selectedAnswerQ2 === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedAnswerQ2(opt.id)}
                    className={`w-full p-3 rounded-lg border text-left text-xs transition-all cursor-pointer select-none ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20'
                          : 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/20'
                        : 'bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold">{opt.text}</span>
                      {isSelected && (
                        opt.isCorrect 
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          : <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </div>

                    {isSelected && (
                      <p className={`mt-2 pt-2 border-t text-[11px] leading-relaxed ${
                        opt.isCorrect ? 'border-emerald-200 text-emerald-800' : 'border-rose-200 text-rose-800'
                      }`}>
                        {opt.explanation}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Summary & Gold Standard Citation */}
          {(isQ1Answered || isQ2Answered) && (
            <div className="p-4 bg-neutral-900 text-white rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 font-mono uppercase">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Uzman Klinik Özeti & Temel İlke:</span>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed">
                {currentCase.clinicalTakeaway}
              </p>
              <div className="pt-2 border-t border-neutral-800 text-[10px] text-neutral-400 font-mono">
                Kılavuz Dayanağı: {currentCase.guidelineReference}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
