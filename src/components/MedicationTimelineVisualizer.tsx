import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Brain, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Info, 
  ChevronRight, 
  HelpCircle,
  Copy,
  Check,
  Printer,
  Smile,
  ArrowRight
} from 'lucide-react';

interface TimelineStage {
  id: string;
  weekLabel: string;
  title: string;
  subtitle: string;
  biologicalAction: string;
  expectedSymptoms: string[];
  normalSideEffects: string[];
  goldenRule: string;
  reassurance: string;
  iconColor: string;
}

const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 'week1',
    weekLabel: '1. Hafta (1 - 7. Gün)',
    title: 'Biyolojik Adaptasyon & Reseptör Alışma Evresi',
    subtitle: 'İlaç sinapslara ulaşır, beden yeni kimyasal dengeye alışmaya başlar.',
    biologicalAction: 'İlaç sinaptik boşluktaki serotonin ve noradrenalin geri alım pompalarını hemen bloke eder. Ancak beynin post-sinaptik reseptörleri henüz bu artışa adapte olmamıştır (down-regulation henüz başlamadı). Bu nedenle duygudurumda henüz bir düzelme hissedilmez.',
    expectedSymptoms: [
      'Henüz depresyon veya anksiyete hafiflemiş hissettirmez (bu tamamen normaldir).',
      'Zihinde hemen bir "sihirli değişim" olmaması ilacın işe yaramadığı anlamına gelmez.'
    ],
    normalSideEffects: [
      'Hafif mide bulantısı veya midede kazınma (bağırsaklarımızda yoğun serotonin reseptörü vardır)',
      'Hafif baş ağrısı veya başta ağırlık hissi',
      'Hafif esneme, ağız kuruluğu veya sersemlik',
      'İlk 3-4 gün hafif iç huzursuzluğu (anksiyetenin ilk günlerde hafif kıpırdanması doğaldır)'
    ],
    goldenRule: 'Bu ilk haftadaki hafif yan etkiler ilacın çalıştığını gösterir ve en geç 7-10 gün içinde kendiliğinden geçer. İlacı ASLA bu evrede bırakmayın!',
    reassurance: 'Mide bulantısını önlemek için ilacınızı tok karnına (tercihen kahvaltı sonrası) bir bardak dolusu su ile alınız.',
    iconColor: 'text-amber-600'
  },
  {
    id: 'week2_3',
    weekLabel: '2. - 3. Hafta (8 - 21. Gün)',
    title: 'Nöroplastisite Başlangıcı & Bedenin Rahatlaması',
    subtitle: 'Yan etkiler hızla kaybolur, uyku ve iştah ritmi toparlanmaya başlar.',
    biologicalAction: 'Beyin hücrelerinde BDNF (Beyin Kaynaklı Nörotrofik Faktör) gen ekspresyonu artar. Nöronlar arasındaki yeni sinaptik bağlantılar (nöroplastisite) filizlenmeye başlar. Vücut ilaca tamamen alışmıştır.',
    expectedSymptoms: [
      'Gece uykuları daha düzenli ve dinlendirici hale gelmeye başlar.',
      'İştahtaki aşırı tıkanma veya aşırı yeme dalgalanmaları dengelenir.',
      'Sabahları yataktan kalkarken hissedilen kurşun gibi ağırlık hafifler.'
    ],
    normalSideEffects: [
      'İlk haftadaki bulantı ve baş ağrısı %80-90 oranında tamamen silinir.',
      'Bazen canlı rüyalar görülebilir (derin REM uykusunun toparlandığına işarettir).'
    ],
    goldenRule: 'Duygularınız henüz tam neşeli olmayabilir, ancak bedensel enerjiniz toparlanmaktadır. Bu evre iyileşmenin temel köprü evresidir.',
    reassurance: 'Kendinize nazik davranın. Gün içinde 20 dakikalık hafif tempolu yürüyüşler nöroplastisiteyi iki katına çıkarır.',
    iconColor: 'text-blue-600'
  },
  {
    id: 'week4_6',
    weekLabel: '4. - 6. Hafta (22 - 42. Gün)',
    title: 'Klinik İyileşme (Terapötik Yanıt) & Zihinsel Berraklık',
    subtitle: 'Karamsar sis perdesi dağılır, hayattan keyif alma hissi geri döner.',
    biologicalAction: 'Prefrontal korteks ile amigdala (korku ve kriz merkezi) arasındaki iletişim güçlenir. Stres hormonu kortizol dengelenir. Hipokampustaki nöronal yenilenme belirginleşir.',
    expectedSymptoms: [
      'Zihni sürekli meşgul eden felaket senaryoları ve takıntılı düşünceler susmaya başlar.',
      'Eski hobilerinize ve sevdiklerinize karşı ilgi, merak ve istek yeniden uyanır.',
      'Geleceğe dair umutsuzluk ve çaresizlik hissi yerini çözüm odaklı düşünceye bırakır.',
      'Çevrenizdekiler "yüzüne renk geldi, daha canlı görünüyorsun" demeye başlar.'
    ],
    normalSideEffects: [
      'Yan etkiler neredeyse tamamen kaybolmuştur. Bazı hastalarda hafif cinsel istekte gecikme olabilir; bu durumu kontrol randevunuzda hekiminizle paylaşabilirsiniz.'
    ],
    goldenRule: '4-6. haftanın sonunda hekiminizle kontrol randevunuza gidin. Dozun yeterli olup olmadığına birlikte karar verilir.',
    reassurance: 'Tebrikler! Bilimsel tedavinin en zorlu ilk aşamasını sabırla aştınız ve beyniniz iyileşme sinyallerini kalıcı hale getiriyor.',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'month2_6',
    weekLabel: '2. - 6. Ay ve Sonrası (Koruma Evresi)',
    title: 'Tam İyileşme (Remisyon) & Koruyucu Sağlamlaştırma',
    subtitle: 'Nüksü önleme dönemi: Beynin nöronal haritasının kalıcı onarımı.',
    biologicalAction: 'Sinaptik bağlantılar konsolide olur, beynin stresle başa çıkma rezervi güçlenir.',
    expectedSymptoms: [
      'Kişi kendini tamamen "eski sağlıklı ve üretken haline" dönmüş hisseder.',
      'Duygusal dalgalanmalar karşısında psikolojik dayanıklılık (rezilyans) artmıştır.'
    ],
    normalSideEffects: [
      'İlaç günlük rutinin sıradan ve sorunsuz bir parçası haline gelmiştir.'
    ],
    goldenRule: 'EN KRİTİK KLİNİK KURAL: "Kendimi çok iyi hissediyorum, artık ilaca ihtiyacım yok" diyerek ilacı aniden kesmek, hastalığın tekrarlama riskini 4 KAT ARTIRIR! İlk atakta en az 6-9 ay koruyucu tedaviye hekim kontrolünde devam edilmelidir.',
    reassurance: 'İlacı bırakma zamanı geldiğinde doktorunuz dozu haftalara yayarak yavaşça azaltacak ve hiçbir kesilme sıkıntısı yaşamadan tedaviyi tamamlayacaksınız.',
    iconColor: 'text-purple-600'
  }
];

export const MedicationTimelineVisualizer: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [copiedMemo, setCopiedMemo] = useState(false);

  const activeStage = TIMELINE_STAGES[selectedStageIndex];

  const handleCopySummary = () => {
    const text = `💊 PSİKİYATRİ İLACI KULLANIM REHBERİ (ZAMAN ÇİZELGESİ)
${activeStage.weekLabel} - ${activeStage.title}
• Biyolojik Süreç: ${activeStage.biologicalAction}
• Beklenenler: ${activeStage.expectedSymptoms.join(' ')}
• Geçici Yan Etkiler: ${activeStage.normalSideEffects.join(' ')}
• Altın Kural: ${activeStage.goldenRule}
*Kaynak: Türkiye Psikiyatri Derneği (TPD) & APA Kanıt Kılavuzları`;

    navigator.clipboard.writeText(text);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
          <Calendar className="w-4 h-4 text-emerald-600" />
          <span>Viral Hasta Aracı #3 • Görsel İyileşme & Yan Etki Zaman Çizelgesi</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1">
          Hafta Hafta Psikiyatri İlaç Yolculuğum & Bedenim
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl leading-relaxed">
          "İlaç beni kötü mü yapıyor?", "Ne zaman iyi hissedeceğim?", "Yan etkiler ne zaman geçecek?" 
          sorularının bilimsel cevabı. Beyninizin nöroplastisite adımlarını hafta hafta keşfedin.
        </p>

        {/* Timeline Slider Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-neutral-100">
          {TIMELINE_STAGES.map((stage, idx) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setSelectedStageIndex(idx)}
              className={`p-3 rounded-lg text-left transition-all border cursor-pointer select-none ${
                selectedStageIndex === idx
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-2 ring-neutral-900/10'
                  : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
              }`}
            >
              <div className="text-[10px] font-mono font-bold uppercase opacity-80">
                {idx + 1}. AŞAMA
              </div>
              <div className="text-xs font-bold truncate mt-0.5">
                {stage.weekLabel}
              </div>
              <div className={`text-[10px] truncate mt-0.5 ${selectedStageIndex === idx ? 'text-neutral-300' : 'text-neutral-500'}`}>
                {stage.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Stage Detailed Card */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs space-y-0">
        {/* Stage Header */}
        <div className="px-5 py-4 bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-200 border border-neutral-700 font-mono text-[10px] font-bold rounded">
                Aşama {selectedStageIndex + 1} / 4
              </span>
              <span className="text-xs font-bold text-amber-400 font-mono">
                {activeStage.weekLabel}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">
              {activeStage.title}
            </h3>
            <p className="text-xs text-neutral-300 mt-0.5">
              {activeStage.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
          >
            {copiedMemo ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedMemo ? 'Kopyalandı!' : 'Özeti Kopyala'}</span>
          </button>
        </div>

        {/* Stage Content Grid */}
        <div className="p-5 space-y-5">
          {/* Biological Mechanism Card */}
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-mono uppercase">
              <Brain className="w-4 h-4 text-neutral-800" />
              <span>Beyinde ve Nöronlarda Ne Oluyor? (Biyolojik Mekanizma)</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {activeStage.biologicalAction}
            </p>
          </div>

          {/* Two-Column: What you feel vs Normal Side Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* What to expect */}
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 font-mono uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Ruh Halinde ve Bedeninizde Hissedecekleriniz:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-emerald-800">
                {activeStage.expectedSymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Temporary Side Effects */}
            <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 font-mono uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Olası Geçici Yan Etkiler (Zararsız & Geçicidir):</span>
              </div>
              <ul className="space-y-1.5 text-xs text-amber-800">
                {activeStage.normalSideEffects.map((side, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{side}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Golden Rule Highlight Box */}
          <div className="p-4 bg-neutral-900 text-white rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Bu Evrenin Altın Kuralı:</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-100 font-medium leading-relaxed">
              {activeStage.goldenRule}
            </p>
            <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>{activeStage.reassurance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side-Effect Triage Quick Interactive Checker */}
      <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-neutral-800" />
          <span>Yan Etki Triajı: "Normal mi, Yoksa Acilen Doktora mı Gitmeliyim?"</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Green Column: Normal / Expected */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 font-mono uppercase">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>🟢 Normal & Geçici Belirtiler (Telaşlanmayın):</span>
            </div>
            <ul className="space-y-1 text-emerald-800 list-disc list-inside leading-relaxed">
              <li>İlk 10 gün hafif mide bulantısı veya iştah azalması</li>
              <li>Sabahları hafif ağız kuruluğu (bol su içiniz)</li>
              <li>İlk günlerde hafif uykuya dalma gecikmesi veya canlı rüyalar</li>
              <li>Hafif baş dönmesi veya sersemlik (yavaşça ayağa kalkınız)</li>
            </ul>
            <p className="text-[11px] text-emerald-700 italic pt-1 border-t border-emerald-200">
              Bu belirtiler beyninizin ilaca uyum sağladığını gösterir ve genellikle 2. haftada tamamen kaybolur.
            </p>
          </div>

          {/* Red Column: Red Flags */}
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 font-mono uppercase">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>🔴 Kırmızı Bayraklar (Vakit Kaybetmeden Başvurun):</span>
            </div>
            <ul className="space-y-1 text-rose-800 list-disc list-inside leading-relaxed">
              <li>Yaygın ve hızla yayılan cilt döküntüsü, kaşıntı ve soyulma (Stevens-Johnson şüphesi)</li>
              <li>Yüksek ateş, kaslarda tahta gibi sertlik ve terleme (NMS / Toksisite)</li>
              <li>Aşırı hızlı kalp çarpıntısı, bayılma veya göz kararması (Senkop)</li>
              <li>Ani gelişen aşırı saldırganlık veya kendine zarar verme düşünceleri</li>
            </ul>
            <p className="text-[11px] text-rose-700 italic pt-1 border-t border-rose-200 font-bold">
              Bu belirtilerden biri varsa ilacı hemen kesip en yakın acil servise veya doktorunuza başvurunuz.
            </p>
          </div>
        </div>

        {/* Forgotten Dose Rule */}
        <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg flex items-start gap-2 text-xs text-neutral-700">
          <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-neutral-900">İlacımı Unutursam Ne Yapmalıyım?</strong>
            <p className="text-neutral-600 mt-0.5 leading-relaxed">
              Eğer ilacınızı unuttuysanız ve bir sonraki dozun vaktine çok az kalmadıysa, hatırlar hatırlamaz alınız. 
              Ancak bir sonraki doz saati yaklaştıysa, o dozu atlayıp normal rutininizden devam ediniz. 
              <strong>Asla çift doz almayınız!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
