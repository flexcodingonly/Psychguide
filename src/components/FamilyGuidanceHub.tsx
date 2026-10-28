import React, { useState } from 'react';
import {
  Heart,
  Users,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Share2,
  ShieldAlert,
  Sparkles,
  PhoneCall,
  Clock,
  HelpCircle,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  MessageSquareHeart,
  FileCheck2
} from 'lucide-react';

export const FamilyGuidanceHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'communication' | 'crises' | 'faq' | 'letter'>('communication');
  const [copiedShareText, setCopiedShareText] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [selectedCrisisScenario, setSelectedCrisisScenario] = useState<number>(0);

  // Communication: What to say vs What NEVER to say
  const communicationRules = [
    {
      topic: 'Depresyon & Çökkünlük Yaşayan Yakınınıza',
      harmful: 'Kafana takma, herkesin dertleri var, haline şükret, iradenle yataktan kalkmalısın.',
      harmfulReason: 'Bunu duyan hasta kendisini nankör, yetersiz ve suçlu hisseder; beyindeki biyokimyasal dopamin/serotonin yetersizliğini iradeyle yenemez.',
      helpful: 'Yalnız değilsin. Bu bir irade zayıflığı değil, tedavi edilebilir biyolojik bir hastalık. Neler hissettiğini anlamak zor olsa da canının ne kadar yandığını görüyorum ve her adımda senin yanındayım.',
      helpfulReason: 'Yargılanma korkusunu yok eder, hastanın kendini güvende hissetmesini sağlar ve hekime başvurma motivasyonunu 3 kat artırır.'
    },
    {
      topic: 'Panik Atak ve Şiddetli Kaygı Anında',
      harmful: 'Sakin ol bir şeyin yok, kendi kendini kuruyorsun, hastaneye gitmeye gerek yok abartma.',
      harmfulReason: 'Atak anındaki kişi bedensel olarak gerçek bir ölüm veya kalp krizi dehşeti yaşar; "abartıyorsun" demek panik seviyesini tırmandırır.',
      helpful: 'Korktuğunu biliyorum ama güvendesin. Bu bedenin sahte bir alarmı. Kalbin sağlam, nefes alabiliyorsun. 10-15 dakika içinde bu hormonlar tükenecek ve beden yatışacak. Gel birlikte yavaşça 4 saniye nefes alıp 6 saniyede verelim.',
      helpfulReason: 'Fizyolojik gerçekliği onaylar, panik döngüsünün süresini netleştirir ve sempatik sinir sistemini vagal uyarım ile yatıştırır.'
    },
    {
      topic: 'İlaç Kullanmayı Reddeden Yakınınıza',
      harmful: 'Bu ilaçları içmezsen seni hastaneye kilitlerler, deli muamelesi görmek istemiyorsan hemen yut!',
      harmfulReason: 'Tehdit ve damgalama (stigma), hastada hekime ve ilaçlara karşı kalıcı paranoyak direnç geliştirir.',
      helpful: 'İlaçların yan etkilerinden veya bağımlılık yapmasından endişe ettiğini anlıyorum. Ancak tansiyon veya diyabet hastası gibi beynin de desteğe ihtiyacı var. Gel korkularını hekimimizle açıkça konuşalım, gerekirse dozu ya da ilacı değiştirmesini isteyelim.',
      helpfulReason: 'Hastanın kontrol hissini elinden almaz, korkularını valide eder ve hekim-hasta ittifakını güçlendirir.'
    },
    {
      topic: 'Bipolar Mani veya Aşırı Taşkınlık Döneminde',
      harmful: 'Yine delirdin, saçmalıyorsun, seni hemen tımarhaneye kapatacağız!',
      harmfulReason: 'Manik hasta öfke patlaması yaşayabilir veya evi terk edebilir; doğrudan çatışma krizi büyütür.',
      helpful: 'Son birkaç gündür uykun çok azaldı ve enerjin çok yüksek. Bu durumun seni ve geleceğini riske atacak kararlar almandan endişe ediyorum. Gel doktorumuzla kısa bir kontrol randevusu alalım, uyku düzenini birlikte toparlayalım.',
      helpfulReason: 'Kişiliğe değil uyku ve biyolojik ritme odaklanır; suçlamadan tıbbi desteğe yönlendirir.'
    }
  ];

  // 4 Critical Crisis Scenarios for Families
  const crisisScenarios = [
    {
      title: '1. İntihar Düşüncesi veya Veda İmaları',
      badge: 'Acil Kırmızı Hat',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      description: 'Yakınınız "Artık kimseye yük olmayacağım", "Gidiyorum, hakkınızı helal edin" gibi veda sözleri söylüyorsa ya da eşyalarını dağıtıyorsa:',
      actions: [
        'Asla Yalnız Bırakmayın: Odayı, balkonu veya çevredeki kesici/ilaç gibi riskli nesneleri sessizce güvene alın.',
        'Soru Sormaktan Korkmayın: "Kendine zarar vermeyi mi düşünüyorsun?" diye sormak intiharı tetiklemez; aksine hastanın zihnindeki devasa yalnızlık yükünü hafifletir.',
        'Derhal 112\'yi Arayın: Hayati risk taşıyan durumlarda gecikmeden 112 Acil Ambulans servisini arayarak en yakın psikiyatri acil servisine nakil sağlayın.'
      ]
    },
    {
      title: '2. Yakınım Tedaviye Gitmeyi Kesinlikle Reddediyor',
      badge: 'Hayati İkna',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      description: 'Hastalığı kabul etmeyen, "Ben deli değilim" diyerek randevuyu reddeden bir yakına nasıl yaklaşılır?',
      actions: [
        'Tanı Üzerinden Değil, Şikayet Üzerinden Gidin: "Depresyondasın / hastasın" demek yerine "Son zamanlarda uykuların çok bozuldu, enerjin düştü; gel bir kan tahlili ve uyku kontrolü için hekime gidelim" deyin.',
        'Saygı Duyduğu Bir Aile Büyüğünü Dahil Edin: Çatışmalı olmadığınız, fikirlerine güvendiği bir aile dostundan ricada bulunun.',
        'Önce Siz Hekimle Görüşün: Yakınınız gelmiyorsa bile aile olarak bir psikiyatri uzmanına gidip durum hakkında klinik strateji danışabilirsiniz.'
      ]
    },
    {
      title: '3. Gerçekle Bağı Kopma (Psikoz & Hezeyan & TMK 432)',
      badge: 'Tıbbi & Hukuki Bilgi',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      description: 'Yakınınız takip edildiğine, kameralarla izlendiğine inanıyor veya gaipten sesler duyuyorsa:',
      actions: [
        'Hezeyanlarıyla Tartışmayın: "Saçmalama kimse seni izlemiyor" demek hastanın size olan güvenini sıfırlar. "Senin çok korktuğunu görebiliyorum, güvende olman için yanındayım" diyerek duyguyu onaylayın.',
        'Türk Medeni Kanunu Madde 432 (Zorunlu Yatış): Kişi kendisine veya çevresine belirgin tehlike yaratıyorsa ve tedaviyi reddediyorsa, Sulh Hukuk Hakimliği veya 112 Acil hekim kararı ile koruma amacıyla zorunlu hastane yatışı yasal bir haktır.',
        'Sakin Bir Ses Tonu Kullanın: Ani hareketlerden ve kalabalık baskısından kaçının.'
      ]
    },
    {
      title: '4. Hasta Yakını Olarak Tükenmişlik (Caregiver Burnout)',
      badge: 'Aileye Öz Bakım',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      description: 'Aylardır bir yakınınızın hastalığıyla ilgilenirken kendinizi bitkin, çaresiz ve öfkeli mi hissediyorsunuz?',
      actions: [
        'Uçaktaki Oksijen Maskesi Kuralı: Siz tükenirseniz hastanıza yardımcı olamazsınız. Kendi uykunuzu, beslenmenizi ve sosyal molalarınızı asla ertelemeyin.',
        'Sorumluluğu Tek Başınıza Taşımayın: Ailenin diğer fertleri veya profesyonel destekle bakım yükünü bölüşün.',
        'Öfkenizden Dolayı Suçluluk Duymayın: Bazen öfke hissetmek insanidir; öfkeniz yakınınızın şahsına değil, hastalığın getirdiği zorlayıcı yüke yöneliktir.'
      ]
    }
  ];

  // High-Intent Google Search Questions (SEO & Family Guidance)
  const googleTrendingQuestions = [
    {
      q: 'Depresyondaki bir yakınıma aile olarak nasıl davranmalıyız?',
      a: 'En büyük hata hastayı "hadi kalk, gez, bir şeyin yok" diye zorlamaktır. Depresyon beynin ödül merkezinin biyolojik olarak duraklamasıdır. Ailenin görevi hastayı sürekli neşelendirmeye çalışmak değil; varlığını yargılamadan kabul etmek, düzenli beslenme ve uyku saatlerine şefkatle destek olmak ve psikiyatri kontrollerini takip etmektir.'
    },
    {
      q: 'Zorunlu psikiyatrik yatış kanunen nasıl yapılır (TMK 432)?',
      a: 'Türk Medeni Kanunu\'nun 432. maddesi gereğince; akıl hastalığı, akıl zayıflığı, alkol veya uyuşturucu bağımlılığı sebebiyle kendisi veya toplum için tehlike oluşturan kişilerin tedavisi için yetkili Sulh Hukuk Mahkemesi veya acil durumlarda resmi sağlık kurulu raporuyla psikiyatri servisine sevki gerçekleştirilebilir. Bu süreç ailenin cezalandırması değil, hastanın yaşam hakkını koruma tedbiridir.'
    },
    {
      q: 'Antidepresanlar ve psikiyatri ilaçları beyinde kalıcı hasar veya kısırlık yapar mı?',
      a: 'Hayır, bilimsel araştırmalar bunun tam aksini kanıtlamıştır. Tedavi edilmeyen kronik depresyon ve ağır stres, beyinde hafıza merkezi olan hipokampüs hacmini küçültür. Antidepresanlar ise BDNF (Beyin Türevi Nörotrofik Faktör) üretimini artırarak nöronların yeniden büyümesini ve onarılmasını sağlar. Kısırlık yapmazlar; hekim kontrolünde güvenle kullanılırlar.'
    },
    {
      q: 'Yakınımın bipolar atağı geçirdiğini önceden nasıl anlayabiliriz?',
      a: 'Bipolar bozuklukta atağın en önemli "erken uyarı sinyali" uyku ihtiyacındaki azalmadır. Yakınınız 3-4 saat uyuyup "hiç uykum yok, çok zindeyim" diyorsa, konuşma hızı belirgin arttıysa ve plansız harcamalar yapmaya başladıysa mani atağı başlamaktadır. Bu aşamada hekimle iletişime geçilerek koruyucu doz ayarlamasıyla atak hastaneye yatmadan önlenebilir.'
    },
    {
      q: 'Psikiyatrist ile psikolog arasındaki fark nedir, hangisine başvurmalıyız?',
      a: 'Psikiyatrist, 6 yıllık Tıp Fakültesi bitirip üzerine 4 yıl Psikiyatri uzmanlık eğitimi almış bir tıp doktorudur; biyolojik hastalık tanısı koyar, tetkik ve beyin görüntüleme ister, ilaç ve psikoterapi uygular. Klinik psikolog ise Psikoloji lisansı ve klinik yüksek lisansı yapmış uzmandır; psikoterapi ve psikometrik testler uygular fakat ilaç reçete edemez. Ağır çökkünlük, intihar riski, hezeyan veya işlev kaybında ilk başvuru mutlaka psikiyatri hekimine olmalıdır.'
    }
  ];

  const handleShareSummary = () => {
    const textToCopy = `🏥 PSYCHDS AİLE VE HASTA YAKINI KLİNİK REHBERİ (Dr. Doğuş Sönmez)
📌 1. Kural: Ruhsal rahatsızlıklar bir karakter zaafı değil, beynin biyolojik ve tedavi edilebilir hastalıklarıdır.
📌 2. İletişim: Yakınınıza "Kafana takma / iradenle yen" demeyin. "Yalnız değilsin, bu tıbbi bir durum ve birlikte atlatacağız" deyin.
📌 3. İlaçlar: Hekim kontrolündeki psikiyatri ilaçları bağımlılık yapmaz, beynin biyokimyasal dengesini onarır.
📌 4. Acil Kriz Hatları: Hayati tehlikede 112 Acil, randevu için 182 MHRS, bağımlılıkta 115 YEDAM.
Detaylı Kılavuz: https://ais-pre-db7o6dm5ieo2ftplwqkmvl-615853755795.europe-west2.run.app/`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedShareText(true);
    setTimeout(() => setCopiedShareText(false), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Humanizing Doctor's Warm Introduction Card */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-white via-neutral-50 to-neutral-100/60 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-850 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl shadow-xs relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center shrink-0 shadow-xs">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 rounded-md">
                  Hasta Yakınları & Aile Kılavuzu
                </span>
                <span className="text-neutral-400 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-neutral-500 font-mono hidden sm:inline">Klinik Psikoeğitim</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-display mt-0.5">
                Aile Bilgilendirme, Empatik İletişim & Kriz Yönetimi
              </h2>
            </div>
          </div>

          {/* Quick Share to Family Button */}
          <button
            onClick={handleShareSummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-750 text-neutral-800 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 font-semibold text-xs rounded-lg transition-all shadow-2xs active:translate-y-[1px] cursor-pointer"
            title="WhatsApp ve Aile Grubu İçin Özet Metni Kopyala"
          >
            {copiedShareText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 font-bold">Kopyalandı!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Aile Rehberini Kopyala / Paylaş</span>
              </>
            )}
          </button>
        </div>

        {/* Doctor's Sincere Open Letter to Families */}
        <div className="mt-4 p-4 bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 rounded-xl space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white font-display">
            <MessageSquareHeart className="w-4 h-4 text-rose-500" />
            <span>Dr. Doğuş Sönmez'den Ailelere Açık Not: "Yalnız Değilsiniz"</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            "Klinik pratiğimde psikiyatri odasının kapısını çalan hastalar kadar; koridorda gözlerinde çaresizlik, korku ve derin bir suçlulukla bekleyen anne-babaları, eşleri ve kardeşleri çok iyi bilirim. Ruhsal bir hastalıkla yaşayan bir yakına sahip olmak hem büyük bir sevgi hem de yıpratıcı bir sabır sınavıdır. Ancak şunu bilin: <strong>Bu bir karakter kusuru değil, biyolojik bir beyin rahatsızlığıdır.</strong> Tıpkı kırık bir kemiğe 'iradenle kaynat' diyemeyeceğimiz gibi, çökmüş bir beyin kimyasına da 'gayret et' diyemeyiz. Doğru hekim kontrolü, sabırlı aile desteği ve bilimsel ilaçlarla <strong>hastalarımızın %85'inden fazlası eski sağlıklı yaşamına dönmektedir</strong>. Bu rehber ailenize şefkatli bir yol feneri olsun."
          </p>
          <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 pt-1 border-t border-neutral-100 dark:border-neutral-800">
            <span className="font-mono">Dr. Doğuş Sönmez • Psikiyatri Hekimi & Klinik Araştırmacı</span>
            <span className="font-mono text-neutral-400">TPD / APA Standartları</span>
          </div>
        </div>
      </div>

      {/* Sub-navigation inside Family Hub */}
      <div className="bg-neutral-100/80 dark:bg-neutral-900/90 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-1">
        {[
          { id: 'communication', label: '1. Ne Söylenmeli? vs. Ne Söylenmemeli?' },
          { id: 'crises', label: '2. Aile İçin 4 Kriz Algoritması' },
          { id: 'faq', label: '3. Google Trend Aile Soruları (SSS)' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as any)}
            className={`flex-1 min-w-[150px] py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center ${
              activeCategory === tab.id
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-2xs font-bold border border-neutral-200/80 dark:border-neutral-700'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. Ne Söylenmeli? vs. Ne Söylenmemeli? */}
      {activeCategory === 'communication' && (
        <div className="space-y-3.5">
          <div className="p-3.5 bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-xl flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
            <div className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <strong className="font-bold text-neutral-900 dark:text-white">Aile İletişiminin İyileştirici Gücü:</strong> Yanlış seçilmiş iyi niyetli bir cümle hastayı içine kapatabilirken, empatik ve yargılamayan bir yaklaşım beynin güvenlik merkezini (amigdala) dakikalar içinde sakinleştirir.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {communicationRules.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-xl p-4 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{item.topic}</span>
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded">
                    Klinik Kılavuz
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Harmful Box */}
                  <div className="p-3 bg-rose-50/80 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 dark:text-rose-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>NE SÖYLENMEMELİ? (Zararlı Yaklaşım)</span>
                    </div>
                    <p className="text-xs font-medium text-rose-900 dark:text-rose-300 italic leading-snug">
                      "{item.harmful}"
                    </p>
                    <p className="text-[11px] text-rose-700 dark:text-rose-400 pt-1 border-t border-rose-200/60 dark:border-rose-900/30">
                      <strong>Neden Zararlı?</strong> {item.harmfulReason}
                    </p>
                  </div>

                  {/* Helpful Box */}
                  <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>NE SÖYLENMELİ? (İyileştirici Yaklaşım)</span>
                    </div>
                    <p className="text-xs font-medium text-emerald-900 dark:text-emerald-300 italic leading-snug">
                      "{item.helpful}"
                    </p>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 pt-1 border-t border-emerald-200/60 dark:border-emerald-900/30">
                      <strong>Klinik Etki:</strong> {item.helpfulReason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Aile İçin 4 Kriz Algoritması */}
      {activeCategory === 'crises' && (
        <div className="space-y-3.5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {crisisScenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCrisisScenario(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedCrisisScenario === idx
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-xs font-bold'
                    : 'bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                <div className="text-[10px] font-mono opacity-80 mb-0.5">Senaryo {idx + 1}</div>
                <div className="text-xs font-bold truncate leading-tight">{sc.title.split('.')[1] || sc.title}</div>
              </button>
            ))}
          </div>

          {/* Active Scenario Card */}
          {crisisScenarios[selectedCrisisScenario] && (
            <div className="p-4 sm:p-5 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-xl space-y-3.5 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-3">
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${crisisScenarios[selectedCrisisScenario].badgeColor}`}>
                    {crisisScenarios[selectedCrisisScenario].badge}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mt-1">
                    {crisisScenarios[selectedCrisisScenario].title}
                  </h3>
                </div>
                <span className="text-xs text-neutral-500 font-mono">
                  Protokol Adımı {selectedCrisisScenario + 1} / 4
                </span>
              </div>

              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {crisisScenarios[selectedCrisisScenario].description}
              </p>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-neutral-900 dark:text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Ailenin Adım Adım Yapması Gerekenler:</span>
                </div>
                {crisisScenarios[selectedCrisisScenario].actions.map((act, actIdx) => (
                  <div
                    key={actIdx}
                    className="p-3 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/70 dark:border-neutral-750 rounded-lg flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {actIdx + 1}
                    </span>
                    <p className="flex-1">{act}</p>
                  </div>
                ))}
              </div>

              {selectedCrisisScenario === 0 && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-lg flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-rose-900 dark:text-rose-300 font-medium">
                    <PhoneCall className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Hayati tehlike ve intihar riskinde vakit kaybetmeden arayın:</span>
                  </div>
                  <a
                    href="tel:112"
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-md shrink-0 shadow-2xs"
                  >
                    112 Acil Ara
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. Google Trend Sıkça Sorulan Aile Soruları (SSS) */}
      {activeCategory === 'faq' && (
        <div className="space-y-3">
          <div className="p-3.5 bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/80 dark:border-neutral-800 rounded-xl space-y-1">
            <h3 className="text-xs font-bold text-neutral-900 dark:text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Google Aramalarında En Sık Sorulan Aile Soruları & Kanıta Dayalı Yanıtlar</span>
            </h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Ailelerin psikiyatri polikliniklerinde hekime en çok yönelttiği sorular, Maudsley ve TPD ilkeleri doğrultusunda yanıtlanmıştır.
            </p>
          </div>

          <div className="space-y-2">
            {googleTrendingQuestions.map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-xl overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        {item.q}
                      </h4>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-neutral-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                      <p>{item.a}</p>
                      <div className="mt-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                        <span>Kaynak: TPD & Maudsley Prescribing Guidelines</span>
                        <span>Dr. Doğuş Sönmez Değerlendirmesi</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
