import React, { useState } from 'react';
import {
  Heart,
  AlertTriangle,
  HelpCircle,
  Shield,
  ShieldAlert,
  PhoneCall,
  Activity,
  CheckCircle2,
  ArrowRight,
  Brain,
  Quote,
  BookOpen,
  FileText,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Copy,
  Check,
  Users
} from 'lucide-react';

import { PsychiatricFactsExplorer } from './PsychiatricFactsExplorer';
import { FamilyGuidanceHub } from './FamilyGuidanceHub';

interface PatientGuideViewProps {
  onSwitchToProfessional: () => void;
}

export const PatientGuideView: React.FC<PatientGuideViewProps> = ({
  onSwitchToProfessional
}) => {
  // 5 Primary Formal Tabs:
  // 1. psychiatric_info (Unified: 50 Bilgi, Hastalıklar, Mitler & Gerçekler, TPD & APA Kanıtları)
  // 2. family_guide (Aile & Yakınlar Danışma Rehberi - Empatik İletişim, 4 Kriz Algoritması, Google SSS)
  // 3. meds_faq (İlaçlar SSS & Farmakoloji)
  // 4. prep_visit (Hekim Görüşmesine Hazırlık)
  // 5. emergencies (Acil Hatlar: 112, 182, YEDAM)
  const [activeTab, setActiveTab] = useState<
    'psychiatric_info' | 'family_guide' | 'meds_faq' | 'prep_visit' | 'emergencies'
  >('psychiatric_info');

  // Sub-tab inside the unified "Psikiyatri Bilgileri & Kanıtlar" section
  const [infoSubTab, setInfoSubTab] = useState<'facts' | 'disorders' | 'myths' | 'quotes'>('facts');

  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [copiedQuestions, setCopiedQuestions] = useState(false);
  const [expandedMyth, setExpandedMyth] = useState<number | null>(0);
  const [quoteFilter, setQuoteFilter] = useState<'all' | 'tpd' | 'apa' | 'meds' | 'therapy'>('all');
  const [selectedDisorderKey, setSelectedDisorderKey] = useState<
    'depression' | 'anxiety' | 'panic' | 'bipolar' | 'ocd' | 'adhd' | 'ptsd'
  >('depression');

  // Evidence-based Quotes from Türkiye Psikiyatri Derneği (TPD) & American Psychiatric Association (APA)
  const clinicalQuotes = [
    {
      id: 'tpd-1',
      org: 'TPD',
      orgTitle: 'Türkiye Psikiyatri Derneği',
      source: 'TPD Depresyon Tedavi Rehberi & Klinik Bilgilendirme',
      topic: 'İlaçlar & Bağımlılık Miti',
      category: 'meds',
      badge: 'Resmi Klinik İlke',
      quote: 'Psikiyatri hekimi kontrolünde reçete edilen antidepresan ve duygudurum dengeleyici ilaçlar kesinlikle uyuşturucu ya da bağımlılık yapıcı değildir. Bu ilaçlar kişinin iradesini elinden almaz veya kişiliğini değiştirmez; aksine hastalığın yarattığı biyokimyasal dengesizliği onararak kişinin kendi sağlıklı potansiyeline dönmesini sağlar.',
      implication: 'Hekim önerisiyle ilaç kullanmaktan çekinmeyin; ilaçlar bağımlılık yapmaz, beynin iyileşme mekanizmasını destekler.'
    },
    {
      id: 'apa-1',
      org: 'APA',
      orgTitle: 'American Psychiatric Association',
      source: 'APA Clinical Practice Guideline for MDD (American Psychiatric Association)',
      topic: 'Tedaviye Yanıt ve İyileşme Hedefi',
      category: 'apa',
      badge: 'Altın Standart Rehber',
      quote: 'Depresyon, psikiyatride en yüksek tedavi başarısına sahip tıbbi rahatsızlıklardan biridir. Doğru tanı ve kanıta dayalı kılavuz tedavileriyle hastaların %80 ila %90\'ı zaman içinde tedaviye belirgin ve kalıcı yanıt verir. Nihai amaç yalnızca semptomların hafiflemesi değil; tam düzelme (remisyon) ve eski yaşam kalitesine kavuşmaktır.',
      implication: 'Umutsuzluk hissi hastalığın bir semptomudur; bilimsel tedaviye başvurulduğunda iyileşme oranı son derece yüksektir.'
    },
    {
      id: 'tpd-2',
      org: 'TPD',
      orgTitle: 'Türkiye Psikiyatri Derneği',
      source: 'TPD Ruhsal Bozukluklar ve Biyopsikososyal Yaklaşım Bildirgesi',
      topic: 'İrade Yanılgısı ve Tıbbi Köken',
      category: 'tpd',
      badge: 'Konsensüs Raporu',
      quote: 'Ruhsal bozukluklar bir karakter zayıflığı, inanç eksikliği veya irade yetersizliği değildir. Tıpkı diyabet veya hipertansiyon gibi; genetik yatkınlık, beyin nörokimyası ve çevresel stres faktörlerinin etkileşimi sonucu ortaya çıkan gerçek ve tıbbi hastalıklardır. \'İradeyle geçer\' demek, kırık bir bacağa \'iradenle yürü\' demekle farksızdır.',
      implication: 'Kendinizi ya da bir yakınınızı suçlamayın. Profesyonel yardım aramak zayıflık değil, bilinçli bir adımdır.'
    },
    {
      id: 'apa-2',
      org: 'APA',
      orgTitle: 'American Psychiatric Association',
      source: 'APA Practice Guidelines & Diagnostic and Statistical Manual (DSM-5-TR)',
      topic: 'Psikoterapi vs. İlaç Entegrasyonu',
      category: 'therapy',
      badge: 'Kanıt Kanıtı (Level 1A)',
      quote: 'Hafif ve orta düzey depresyon ile anksiyete bozukluklarında kanıta dayalı psikoterapi (özellikle Bilişsel Davranışçı Terapi - BDT) ve farmakoterapi tek başlarına benzer etkinlik düzeyine sahiptir. Ancak orta-ağır şiddetteki tablolarda, bipolar bozuklukta ve yineleyici durumlarda ilaç tedavisi ile psikoterapinin kombine edilmesi nüks oranını en aza indiren en etkili yöntemdir.',
      implication: 'Hekiminiz hem ilaç hem de terapi öneriyorsa, ikisi birbirini tamamlayan güçlü bilimsel ortaklardır.'
    },
    {
      id: 'tpd-3',
      org: 'TPD',
      orgTitle: 'Türkiye Psikiyatri Derneği',
      source: 'TPD Depresyon ve Anksiyete Çalışma Birimi',
      topic: 'Koruyucu Tedavi Süresi ve Nüksün Önlenmesi',
      category: 'meds',
      badge: 'Klinik Kılavuz Kuralı',
      quote: 'Depresyon belirtileri tamamen düzeldikten sonra dahi, beynin nöroplastisite ve reseptör dengesini kalıcı hale getirmek için ilk atakta en az 6 ila 9 ay koruyucu tedaviye devam edilmelidir. İyileşir iyileşmez ilacı hekime sormadan bırakmak, hastalığın 1 yıl içinde nüksetme (tekrarlama) riskini 4 katına çıkarmaktadır.',
      implication: 'İyi hissetseniz dahi ilacı hekiminizle planlamadan birden kesmeyiniz; nüksü önleyen süreç koruyucu fazdır.'
    },
    {
      id: 'apa-3',
      org: 'APA',
      orgTitle: 'American Psychiatric Association',
      source: 'APA Patient Guidance on Panic Disorder & Anxiety',
      topic: 'Panik Atak ve Bedenin Acil Alarmı',
      category: 'apa',
      badge: 'Klinik Açıklama',
      quote: 'Panik atak sırasında yaşanan göğüs sıkışması, çarpıntı ve hava açlığı; bedenin otonom sempatik sinir sisteminin \'savaş ya da kaç\' mekanizmasının yanlış alarm vermesidir. Bu tablo son derece dehşet verici hissettirse de doğrudan kalbi durdurmaz, felç yapmaz veya akıl sağlığını kaybettirmez. Birkaç dakika içinde tepe noktasına ulaşıp kendiliğinden yatışır.',
      implication: 'Panik atak anında bedeninizin tehlikede olmadığını, yanlış bir biyolojik alarm çaldığını hatırlayın.'
    },
    {
      id: 'tpd-4',
      org: 'TPD',
      orgTitle: 'Türkiye Psikiyatri Derneği',
      source: 'TPD Damgalamayla Mücadele ve İnsan Hakları Komisyonu',
      topic: 'Damgalanma (Stigma) ve Yardım Arama',
      category: 'tpd',
      badge: 'Etik & Hak Bildirgesi',
      quote: 'Toplumdaki önyargılar ve yanlış tabular, ruhsal sıkıntı yaşayan bireylerin uzman hekime başvurmasını ortalama 2 ila 8 yıl geciktirmektedir. Psikiyatrik yardım almak temel bir sağlık hakkıdır ve tıbbi mahremiyet yasalar ve hekimlik meslek etiği kurallarıyla güvence altındadır.',
      implication: 'Ruh sağlığı sorunları gizlenmesi gereken bir ayıp değildir; her 4 kişiden biri hayatında bu süreci yaşamaktadır.'
    },
    {
      id: 'apa-4',
      org: 'APA',
      orgTitle: 'American Psychiatric Association',
      source: 'APA Practice Guideline for Bipolar Disorder & Mood Stabilizers',
      topic: 'Bipolar Bozuklukta Koruyucu Tedavi',
      category: 'apa',
      badge: 'Uzlaşı Raporu',
      quote: 'Bipolar bozuklukta duygudurum dengeleyiciler (örneğin Lityum, Valproat veya yeni nesil atipik antipsikotikler) hem mani hem de depresyon ataklarını önlemede uluslararası kılavuzların altın standardıdır. Düzenli hekim takibi ve düzenli uyku ritmi ile hastalar tamamen işlevsel, üretken ve dengeli bir yaşam sürdürebilir.',
      implication: 'Bipolar bozukluk kontrol edilebilir biyolojik bir durumdur; koruyucu tedavi ile ataklar tamamen durdurulabilir.'
    }
  ];

  // Myths vs Evidence Truths
  const mythsData = [
    {
      myth: 'Psikiyatri ilaçları insanı uyuşturur, robot gibi yapar ve kalıcı bağımlılık yaratır.',
      truth: 'Antidepresanlar, antipsikotikler ve duygudurum dengeleyiciler bağımlılık yapmaz. Doğru dozda verilen ilaç insanı uyuşturmaz; aksine hastalığın üzerinize örttüğü çökkünlük, sis veya aşırı korkuyu kaldırarak zihinsel berraklığınızı ve günlük enerjinizi geri kazandırır.',
      evidence: 'Türkiye Psikiyatri Derneği ve APA Depresyon Kılavuzu: SSRI/SNRI grubu ilaçlar tolerans ve kimyasal bağımlılık yapmaz. Hekimsiz aniden kesildiğinde görülen geçici huzursuzluk bağımlılık değil, "kesilme sendromu"dur.',
      keyFact: 'Bağımlılık yapmaz • Zihni köreltmez • Doğal mizacı bozmaz'
    },
    {
      myth: 'Depresyon bir hastalık değildir; kişi kafaya takmazsa, tatile çıkarsa veya iradesini zorlarsa geçer.',
      truth: 'Majör depresyon, beyindeki nörotrofik faktörlerin (BDNF), hipokampus hacminin ve nörotransmitter iletiminin etkilendiği somut bir biyolojik tablodur. "Kafaya takma" veya "tatile git" demek, enfeksiyonu olan birine "ateşini kafana takma" demek gibidir.',
      evidence: 'APA DSM-5-TR & TPD: Klinik depresyon nörobiyolojik bir hastalıktır. Profesyonel tedavi olmaksızın sadece moral vermek yetersiz kalır.',
      keyFact: 'Tıbbi bir tablodur • İrade zafiyeti değildir • Nörolojik mekanizması vardır'
    },
    {
      myth: 'Kendimi iyi hissettiğim gün ilacı hemen bırakabilirim; devam etmek boşuna kimyasal almaktır.',
      truth: 'İlacı erken kesmek, hastalığın nüksetmesine (tekrarlamasına) yol açan en yaygın klinik nedendir. İyilik hali ilacın çalıştığını gösterir. Beyindeki nöral ağların bu iyilik halini kalıcı kılması için ilk atakta en az 6-9 ay koruyucu sürdürüm şarttır.',
      evidence: 'Cochrane ve TPD Konsensüsü: Tedaviyi erken sonlandıran hastalarda nüks riski %50-70 iken, koruyucu süreyi tamamlayanlarda bu risk %15 seviyesine iner.',
      keyFact: 'İlk atakta 6-9 ay kuralı • Kademeli bırakılmalıdır • Hekimle planlanmalıdır'
    },
    {
      myth: 'Panik atak sırasında kalp krizi geçirebilirim, nefesim kesilip boğulabilirim ya da çıldırabilirim.',
      truth: 'Panik atak ne kadar korkutucu olursa olsun kalbi durdurmaz, akciğeri tıkamaz ve insanı delirtmez. Bedenin acil durum alarmı olan sempatik otonom sinir sistemi uyarılmıştır ve genellikle 10-20 dakika içinde fizyolojik olarak yatışır.',
      evidence: 'APA Practice Guidelines for Panic Disorder: Panik bozukluk hayati tehlike yaratmaz. Bilişsel Davranışçı Terapi (BDT) ve nefes egzersizleri ile kontrolü tamamen öğrenilebilir.',
      keyFact: 'Ölümcül değildir • Kalp krizi değildir • 10-20 dakikada yatışır'
    },
    {
      myth: 'Psikiyatriye başvurursam sicilime işler, iş bulamam veya geleceğim olumsuz etkilenir.',
      truth: 'Sağlık verileri T.C. Kişisel Verilerin Korunması Kanunu (KVKK) ve hekimlik meslek etiği ile korunan en üst düzey gizli verilerdir. Rutin psikiyatri muayeneleri adli bir suç kaydı oluşturmaz; kişinin sağlığını koruma hakkıdır.',
      evidence: 'TPD Hekimlik Etiği & TCK 136: Tıbbi muayene ve danışmanlık kayıtları hekim-hasta sırrı kapsamındadır, ilgisiz üçüncü şahıslarla paylaşılamaz.',
      keyFact: 'Adli sicil değildir • KVKK koruması altındadır • Hekim-hasta sırrıdır'
    },
    {
      myth: 'Sadece konuşarak iyileşemez miyim, ilaç içmek zorunda mıyım?',
      truth: 'Hafif ve orta düzey sorunlarda kanıta dayalı psikoterapi (BDT vb.) tek başına çok başarılıdır. Ancak biyolojik olarak ağır çökkünlük, bipolar bozukluk veya psikotik durumlarda ilaç tedavisi şarttır. İlaç beynin biyolojik yangısını söndürürken, psikoterapi baş etme becerilerini güçlendirir.',
      evidence: 'NICE Kılavuzları & APA: İkisi rakip değil; duruma göre tek başına veya birlikte kullanılan kanıta dayalı bilimsel araçlardır.',
      keyFact: 'Hafif tabloda terapi tek başına etkilidir • Ağır tabloda kombine edilir'
    }
  ];

  // Emergency contacts
  const emergencyContacts = [
    {
      name: '112 Acil Çağrı Merkezi',
      desc: 'Akut hayati tehlike, kendine veya başkasına zarar verme riski, aşırı ilaç alımı veya bilinç bulanıklığında 7/24 ücretsiz ambulans ve acil müdahale.',
      badge: 'Acil Yardım / 7-24',
      phone: '112'
    },
    {
      name: '182 MHRS (Hastane Randevu)',
      desc: 'Devlet hastaneleri, eğitim ve araştırma hastaneleri ile üniversite hastanelerinden psikiyatri poliklinik randevusu oluşturmak için.',
      badge: 'Poliklinik Randevu',
      phone: '182'
    },
    {
      name: 'Yeşilay Danışmanlık Merkezi (YEDAM)',
      desc: 'Alkol, tütün, madde, internet ve kumar bağımlılığı yaşayan kişiler ve aile yakınları için tamamen ücretsiz ve gizli klinik psikolojik destek.',
      badge: 'Bağımlılık Destek / Ücretsiz',
      phone: '115'
    },
    {
      name: 'Alo 183 Sosyal Destek Hattı',
      desc: 'Aile ve Sosyal Hizmetler Bakanlığı; kadın, çocuk, engelli, yaşlı ve aile bireylerine yönelik psikososyal rehberlik ve acil koruma yönlendirmesi.',
      badge: 'Psikososyal Destek',
      phone: '183'
    }
  ];

  // Comprehensive Disorders Guide with Prevalences and Biology
  const disordersData = {
    depression: {
      title: 'Majör Depresif Bozukluk (Klinik Depresyon)',
      subtitle: 'DSM-5-TR Kriterleri, Nörobiyolojisi ve Toplum Sıklığı',
      prevalence: 'Türkiye & Dünya Sıklığı: Yaşam Boyu %15 - %20 (Her 5 kişiden 1\'i).',
      demographics: 'Kadın / Erkek Oranı: ~2:1. Ortalama başlangıç yaşı: 25-35.',
      whoRank: 'Dünya Sağlık Örgütü (WHO) verilerine göre küresel çapta yeti yitimine (iş/sosyal kayba) en çok yol açan 1. sağlık sorunudur.',
      desc: 'Depresyon geçici bir can sıkıntısı, moral bozukluğu ya da irade zayıflığı değildir. Günün büyük bölümünde, en az 2 hafta boyunca süren derin çökkünlük, hiçbir şeyden zevk alamama (anhedoni), enerji tükenmesi ve suçluluk hissiyle seyreden tıbbi bir beyin hastalığıdır.',
      strikingFacts: [
        'Beyinde Nöroplastisite Kaybı: Depresyonda hafıza ve duygu merkezi olan Hipokampus hacmi küçülür; kılavuz tedavisi ve BDNF artışı ile bu nöral ağlar yeniden büyüyüp onarılır.',
        'En Yüksek Tedavi Başarısı: Psikiyatride tedaviye en iyi yanıt veren hastalıklardan biridir. Doğru tedaviyle hastaların %80\'inden fazlası tam iyileşir (remisyona girer).',
        'Fiziksel Belirtilerle Başlar: Hastaların %65\'i ilk olarak açıklanamayan baş ağrısı, boyun tutulması, sırt ağrısı veya mide krampları gibi bedensel şikayetlerle doktora başvurur.',
        'İradeyle Düzelmez: "Kafaya takma, tatile çık" demek, diyabet hastasına "insülin üretmeyi iradenle seç" demek kadar bilim dışıdır.'
      ],
      symptoms: [
        'Sürekli keder, içsel boşluk, hüzün ve moralsizlik hissi',
        'Zevk ve ilgi kaybı (Anhedoni - hiçbir şeyden tat alamama hali)',
        'İştah azalması veya tam tersine aşırı karbonhidrat yeme, kilo değişimi',
        'Uykusuzluk (özellikle sabah 04-05 gibi erken uyanıp uyuyamama) ya da aşırı uyuma',
        'Sürekli kronik tükenmişlik, küçük bir işi yaparken dahi felç olmuş gibi yorulma',
        'Değersizlik, kendini suçlama ve mantıksız vicdan azabı döngüsü',
        'Konsantrasyon bozukluğu, karar vermede felç olma ve unutkanlık',
        'Yaşamın anlamsızlaşması, ölüme dair tekrarlayan düşünceler'
      ],
      evidenceRecommendation: 'Maudsley, APA & TPD Kılavuzları: İlk basamakta SSRI/SNRI farmakoterapisi ve Bilişsel Davranışçı Terapi (BDT) altın standarttır. İlk atakta en az 6-9 ay koruyucu sürdürüm nüksü önler.',
      whenToSeeDoctor: 'Belirtiler kesintisiz 2 haftayı aştıysa veya günlük iş/aile hayatınızı aksatıyorsa vakit kaybetmeden psikiyatri polikliniğine başvurunuz.'
    },
    anxiety: {
      title: 'Yaygın Anksiyete Bozukluğu (YAB)',
      subtitle: 'Sürekli Kötü Bir Şey Olacak Hissi ve Otonom Hiperaktivite',
      prevalence: 'Toplumda yaşam boyu sıklığı %5 - %8 arasındadır.',
      demographics: 'Kadınlarda erkeklere göre 2 kat daha sıktır. Genellikle 20\'li yaşlarda yavaş başlangıç gösterir.',
      whoRank: 'Birinci basamak sağlık kuruluşlarına (aile hekimliği) en sık bedensel somatik yakınmalarla başvuran gruptur.',
      desc: 'Kişinin kontrol etmekte son derece zorlandığı; sağlık, aile, para ya da iş gibi gündelik konular hakkında en az 6 aydır süregelen aşırı, orantısız ve yıpratıcı bir endişe halidir.',
      strikingFacts: [
        'Aşırı Aktif Amigdala: Beyindeki "tehdit ve alarm radarı" olan Amigdala susturulamayan bir yangın dedektörü gibi sürekli sahte alarm üretir.',
        'Bedensel Yansıma: Anksiyete sadece zihinsel değildir; boyun-sırt kas sertliği, çene sıkma (bruksizm), huzursuz bağırsak (IBS) ve ellerde titreme ile seyreder.',
        'Erken Teşhis Gücü: İlaç ve bilişsel terapi kombinasyonu ile beynin prefrontal denetim mekanizması hızla yeniden güçlendirilebilir.'
      ],
      symptoms: [
        'Endişeyi ve felaket senaryolarını durduramama hissi',
        'Sürekli tetikte olma hali, huzursuzluk ve patlamaya hazır hissetme',
        'Kolay yorulma, kaslarda kronik gerginlik ve boyun-bel ağrıları',
        'Zihnin boşalması, konsantrasyon kuramama, dikkat dağınıklığı',
        'Uykuya dalmakta zorlanma (zihnin susmaması)',
        'Mide bulantısı, sık idrara çıkma, çarpıntı veya yutma güçlüğü'
      ],
      evidenceRecommendation: 'NICE, Oxford & TPD Kılavuzları: SSRI/SNRI grubu düzenli tedaviler ile Bilişsel Davranışçı Terapi (özellikle belirsizliğe tahammülsüzlük modülü) en güçlü kanıt düzeyine sahiptir.',
      whenToSeeDoctor: 'Kaygı ve endişeleriniz uyku kalitenizi bozuyor ve zihninizi durduramıyorsanız uzman hekime danışınız.'
    },
    panic: {
      title: 'Panik Bozukluk & Panik Ataklar',
      subtitle: 'Sempatik Sinir Sisteminin Yanlış Acil Durum Alarmı',
      prevalence: 'Yaşam boyu sıklık %3 - %5; tekil panik atak geçirme sıklığı toplumda %10-\'dur.',
      demographics: 'Genç erişkinlikte (20-30 yaş arası) pik yapar. Kadınlarda 2-3 kat daha yaygındır.',
      whoRank: 'Acil servislere "kalp krizi geçiriyorum" şüphesiyle yapılan kardiyolojik başvuruların %25-\'inin ardındaki asıl tıbbi tablodur.',
      desc: 'Aniden ortaya çıkan; dakikalar içinde doruk noktasına ulaşan, yoğun dehşet hissi, kalp çarpıntısı, nefes darlığı ve "ölüyorum / delireceğim / kalp krizi geçiriyorum" korkusuyla seyreden epizodik ataklardır.',
      strikingFacts: [
        'Ölümcül Değildir: Panik atak kalbi durdurmaz, damar tıkamaz, felç yapmaz veya akıl sağlığını kaybettirmez.',
        'Biyolojik Süre: Otonom sempatik sistemin boşalması 10-20 dakika içinde fizyolojik olarak tükenir ve beden kendiliğinden yatışır.',
        'Beklenti Kaygısı: Hastaları asıl kısıtlayan atak anı değil, "ya yine olursa" korkusuyla evden çıkamama (Agorafobi) döngüsüdür.'
      ],
      symptoms: [
        'Çarpıntı, kalbin çok hızlı veya sert atması',
        'Terleme, titreme veya sarsılma hissi',
        'Nefes darlığı, göğüste boğulma veya hava açlığı hissi',
        'Göğüs kafesinde baskı, ağrı veya batma hissi',
        'Baş dönmesi, sersemlik, düşecek gibi veya bayılacak gibi olma',
        'Gerçekdışılık (Derealizasyon) veya kendine yabancılaşma (Depersonalizasyon)',
        'Kontrolünü kaybetme veya çıldırma korkusu',
        'Ölüm korkusu (Kritik DSM-5 kriteri)'
      ],
      evidenceRecommendation: 'APA, Maudsley & TPD: SSRI/SNRI tedavisi ve panik BDT\'si ile agorafobik kaçınmaların kırılması vakaların %85-\'inde tam kontrol sağlar.',
      whenToSeeDoctor: 'Acil kardiyoloji muayenesinde organik patoloji saptanmadıysa ve ataklar tekrarlıyorsa doğrudan psikiyatri uzmanına gidiniz.'
    },
    bipolar: {
      title: 'Bipolar Bozukluk (İki Uçlu Duygudurum Bozukluğu)',
      subtitle: 'Mani, Hipomani ve Ağır Depresyon Salınımları',
      prevalence: 'Tip I ve Tip II toplamı toplumda yaklaşık %2 - %3 oranındadır.',
      demographics: 'Kadın ve erkeklerde eşit oranda görülür. Tipik başlangıç 18-25 yaş aralığıdır.',
      whoRank: 'Genç yaş grubunda küresel ekonomik ve üretkenlik kaybına yol açan en kritik nöropsikiyatrik tablolardan biridir.',
      desc: 'Kişinin duygudurumunun, enerjisinin ve aktivite düzeyinin olağan sınırların çok ötesine taştığı dönemler (Mani/Hipomani) ile derin çökkünlük (Depresyon) dönemleri arasında dalgalanmasıdır.',
      strikingFacts: [
        'Biyolojik Ritim Hassasiyeti: Bipolar beyin sirkadiyen ritimlere (özellikle uyku-uyanıklık döngüsüne) son derece duyarlıdır. 1 gece uykusuz kalmak mani atağını tetikleyebilir.',
        'Lityumun Mucizesi: 70 yıldır kullanılan doğal tuz Lityum, intihar riskini 6 kat düşüren ve beyinde gri maddeyi artıran kanıtlanmış tek ajandır.',
        'Tam İşlevsellik Mümkündür: Düzenli koruyucu tedavi kullanan bipolar bireyler iş, sanat ve akademik hayatta son derece başarılı ve dengeli bir ömür sürerler.'
      ],
      symptoms: [
        'Manik Dönem: Uyku ihtiyacında dramatik azalma (3 saat uyuyup bomba gibi hissetme)',
        'Manik Dönem: Fikir uçuşması, çok hızlı konuşma, düşüncelerin yarışması',
        'Manik Dönem: Aşırı büyüklük (grandiyözite) fikirleri, riskli yatırımlar ve para harcama',
        'Depresif Dönem: Yataktan çıkamama, konuşacak enerji bulamama, derin suçluluk',
        'Depresif Dönem: Hayattan tamamen kopma hissi ve yoğun anhedoni'
      ],
      evidenceRecommendation: 'CANMAT, Maudsley, APA & TPD Kılavuzları: Duygudurum dengeleyiciler (Lityum, Valproat) ve yeni nesil atipik ajanlar temel tedavidir. Tek başına antidepresan kullanımı atakları tetikleyebileceğinden hekimsiz asla alınmamalıdır.',
      whenToSeeDoctor: 'Duygudurumunuzda aşırı coşku, uyku ihtiyacında ani azalma veya derin çöküşler gözlemliyorsanız uzman hekim değerlendirmesi hayati önemdedir.'
    },
    ocd: {
      title: 'Obsesif Kompulsif Bozukluk (OKB & Takıntı)',
      subtitle: 'Kortiko-Striato-Talamo-Kortikal (CSTC) Döngü Kilitlenmesi',
      prevalence: 'Toplumda yaşam boyu sıklığı %2 - %3 düzeyindedir.',
      demographics: 'Erkeklerde çocukluk/ergenlikte, kadınlarda ise 20\'li yaşlarda başlama eğilimindedir.',
      whoRank: 'DSÖ tarafından hastaların günlük yaşam kalitesini en çok düşüren 10 tıbbi hastalıktan biri olarak listelenmiştir.',
      desc: 'Zihne istemsizce gelen, yoğun kaygı yaratan takıntılı düşünceler (Obsesyon) ve bu kaygıyı geçici olarak dindirmek için yapılan tekrarlayıcı ritüellerdir (Kompulsiyon).',
      strikingFacts: [
        'Kişilik Özelliği Değildir: Titizlik veya simetri sevgisi değildir; beynin "tamamlandı / güvendesin" sinyalini ileten devresinin biyolojik olarak takılmasıdır.',
        'Gizlilik Yılları: Hastalar utanç ve suçluluk nedeniyle takıntılarını ortalama 7-10 yıl boyunca yakınlarından ve hekimlerden gizlerler.',
        'Kompulsiyon Kaygıyı Besler: El yıkamak veya kontrol etmek anlık rahatlama sağlasa da beynin takıntı devresini daha da pekiştirir.'
      ],
      symptoms: [
        'Bulaşma ve kirlenme korkusu (kapı kolu, para, toksin takıntıları)',
        'Kuşku ve kontrol etme (ocak açık mı, kapı kilitli mi diye onlarca kez kontrol)',
        'Simetri, düzen, dokunma veya belirli sayılarda sayma zorlantısı',
        'Dini, cinsel veya saldırganlık içerikli kabul edilemez zihinsel görüntüler',
        'Yakınlarına zarar geleceğine dair mantık dışı felaket beklentisi'
      ],
      evidenceRecommendation: 'Maudsley, APA & TPD Kılavuzları: Yüksek doz SSRI farmakoterapisi ile Maruz Bırakma ve Tepkiyi Önleme (ERP - BDT) yönteminin birlikte uygulanması en başarılı klinik çözümdür.',
      whenToSeeDoctor: 'Tekrarlayan kontroller veya zihinsel şüpheler günde 1 saatten fazla vaktinizi alıyorsa uzman desteği alınız.'
    },
    adhd: {
      title: 'Yetişkin Dikkat Eksikliği ve Hiperaktivite (DEHB)',
      subtitle: 'Yürütücü İşlevler, Zaman Yönetimi ve Dopamin Düşüklüğü',
      prevalence: 'Çocuklukta %5 - %7, yetişkinlikte %2.5 - %4 oranında devam eder.',
      demographics: 'Erkeklerde dışa vuran hiperaktivite, kadınlarda ise içe dönük dikkat dağınıklığı nedeniyle kadınlarda geç tanı alır.',
      whoRank: 'Tedavi edilmemiş yetişkin DEHB; işten ayrılma riskini 3 kat, trafik kazası riskini 2-4 kat artırır.',
      desc: 'Çocukluktan itibaren var olan; dikkati sürdürme, işleri organize etme, erteleme (prokrastinasyon) ve dürtü kontrolünde belirgin güçlükle seyreden nörogelişimsel bir tablodur.',
      strikingFacts: [
        'Tembellik Değildir: DEHB karakter zayıflığı ya da irade eksikliği değil; prefrontal korteksteki dopamin taşınma farklılığıdır.',
        'Hiperfokus Yeteneği: DEHB\'li birey sıkıcı bir işte 5 dakika odaklanamazken, ilgisini çeken bir konuda 8 saat aralıksız dahi gibi çalışabilir.',
        'Tedaviyle Değişen Yaşam: İlaç tedavisiyle dikkat odağı saatler içinde berraklaşır ve hastaların hayat kalitesi dramatik olarak yükselir.'
      ],
      symptoms: [
        'Önemli görevleri sürekli erteleme ve son gece sabahlama',
        'Konuşmaları, toplantıları ve detayları dinlerken dalıp gitme',
        'Eşyaları sürekli kaybetme (telefon, cüzdan, gözlük, anahtar)',
        'Aynı anda birden fazla işe başlayıp hiçbirini bitirememe',
        'İçsel huzursuzluk, bacak sallama, sırada bekleyememe',
        'Dürtüsel kararlar ve ani para harcama eğilimi'
      ],
      evidenceRecommendation: 'CADDRA, Stahl & TPD Rehberleri: Hekim kontrolünde merkezi sinir sistemi düzenleyici veya non-stimülan ilaçlar ile DEHB bilişsel koçluğu son derece etkilidir.',
      whenToSeeDoctor: 'Unutkanlık ve organizasyon sorunları iş veya okul hayatınızı tehdit ediyorsa hekime başvurunuz.'
    },
    ptsd: {
      title: 'Travma Sonrası Stres Bozukluğu (TSSB)',
      subtitle: 'Ağır Travma, Flashbackler ve Amigdala Tetiklenmesi',
      prevalence: 'Ağır travma yaşayan bireylerin yaklaşık %10 ila %20\'sinde gelişir.',
      demographics: 'Deprem, kaza, savaş, saldırı veya ani kayıp sonrasında her yaşta görülebilir.',
      whoRank: 'Doğal afetler (örneğin depremler) sonrasında toplumda en sık takip edilen tablodur.',
      desc: 'Ölüm, ağır yaralanma veya cinsel şiddet tehdidi içeren travmatik bir olayın ardından; olayın zihinde yeniden yaşanması (flashback), kabuslar ve aşırı irkilme ile karakterizedir.',
      strikingFacts: [
        'Zaman Algısı Kopması: Normal anılar hipokampusta "geçmişte kaldı" olarak saklanırken, travmatik anı sanki "şu an yeniden yaşanıyormuş" gibi hissedilir.',
        'Tetikleyiciler: Olay anındaki bir koku, korna sesi ya da siren sesi amigdalayı tetikleyerek bedeni panik moduna sokabilir.',
        'EMDR Kanıtı: Göz hareketleriyle duyarsızlaştırma (EMDR) ve Travma Odaklı BDT ile anı güvenli arşive kaldırılır.'
      ],
      symptoms: [
        'Olay anının zihne kontrolsüzce hücum etmesi (Flashback)',
        'Travmayı hatırlatan mekanlardan, kişilerden veya konuşmalardan kaçınma',
        'Sürekli kabuslar ve geceleri ter içinde uyanma',
        'Aşırı irkilme tepkisi, ani seslerde yerinden sıçrama',
        'Duygusal hissizleşme ve geleceğe dair umutsuzluk'
      ],
      evidenceRecommendation: 'WHO, APA & TPD Kılavuzları: Travma Odaklı BDT, EMDR terapisi ve gerekirse SSRI farmakoterapisi birinci basamak bilimsel tedavidir.',
      whenToSeeDoctor: 'Travmatik olayın üzerinden 1 aydan fazla zaman geçmesine rağmen belirtiler azalmıyorsa uzmana danışınız.'
    }
  };

  // 5 Evidence-based questions for the doctor
  const doctorQuestions = [
    {
      num: 1,
      q: 'Belirtilerim tıbbi olarak hangi tanı veya durum ile açıklanabilir?',
      desc: 'Şikayetlerinizin klinik karşılığı hakkında net ve anlaşılır bilgi edinin.'
    },
    {
      num: 2,
      q: 'Önerdiğiniz tedavinin (ilaç/terapi) hedeflenen etki süresi nedir ve ilk olumlu belirtileri ne zaman beklemeliyim?',
      desc: 'İlacın 2-4 haftalık nöroplastisite sürecini hekiminizle birlikte takvime bağlayın.'
    },
    {
      num: 3,
      q: 'İlk 1-2 haftada karşılaşabileceğim olası geçici yan etkiler nelerdir ve bu etkiler olursa ne yapmalıyım?',
      desc: 'Hangi yan etkilerin olağan, hangilerinin acil değerlendirme gerektirdiğini öğrenin.'
    },
    {
      num: 4,
      q: 'Bu tedaviyi ne kadar süre kullanmamız planlanıyor ve ilk kontrol randevum ne zaman olmalıdır?',
      desc: 'Koruyucu fazın süresi (genellikle 6-9 ay) ve kontrol aralıkları hakkında yol haritanızı netleştirin.'
    },
    {
      num: 5,
      q: 'İlaç tedavisine ek olarak yaşam tarzı düzenlemeleri (uyku, egzersiz) ve psikoterapi desteği önerir misiniz?',
      desc: 'Biyopsikososyal yaklaşımın terapi ve yaşam tarzı ayağını hekiminizle konuşun.'
    }
  ];

  // Medication FAQs with high scientific detail
  const medicationFaqs = [
    {
      q: 'Antidepresanlar ve psikiyatri ilaçları bağımlılık yapar mı?',
      a: 'Kesinlikle hayır. Yaygın kullanılan antidepresanlar (SSRI, SNRI), antipsikotikler ve duygudurum dengeleyiciler kimyasal bağımlılık yapmaz, tolerans geliştirmez (aynı etki için dozu sürekli artırmak gerekmez). Hekime sormadan birdenbire kesildiğinde ortaya çıkabilen baş dönmesi, grip benzeri his veya huzursuzluk "kesilme sendromu"dur. Bu durum bağımlılık değil, reseptörlerin ani ilaç kesilmesine verdiği biyolojik tepkidir ve kademeli bırakıldığında hiç yaşanmaz.'
    },
    {
      q: 'İlacımı almaya başladım; neden ilk günden iyi hissetmiyorum?',
      a: 'Psikiyatri ilaçları ağrı kesiciler gibi anlık semptom baskılayıcı değildir. Beyinde nöronlar arası iletişimi sağlayan serotonin, noradrenalin düzeylerinin dengelenmesi ve asıl önemlisi yeni nöronal bağlantıların oluşması (nöroplastisite ve BDNF artışı) ortalama 2 ila 4 hafta sürer. İlk 1-2 haftada hafif mide bulantısı veya baş ağrısı gibi geçici yan etkiler olabilir; bu yan etkiler hızla azalırken tedavi edici esas etki 2-4. haftalarda başlar.'
    },
    {
      q: 'İlaçlar duygularımı köreltir mi veya kişiliğimi değiştirir mi?',
      a: 'Hayır. Doğru seçilmiş ve dozlanmış bir psikiyatri ilacı sizi robotlaştırmaz, uyuşturmaz veya karakterinizi değiştirmez. Aksine depresyonun üzerinize örttüğü çökkünlüğü, neşesizliği ve enerjisizliği kaldırarak kendi doğal canlılığınıza, espri yeteneğinize ve üretkenliğinize yeniden kavuşmanızı sağlar.'
    },
    {
      q: 'Hafif-orta depresyonda psikoterapi mi yoksa ilaç mı daha iyidir?',
      a: 'Her ikisi de kanıta dayalıdır. Hafif ve orta düzey vakalarda Bilişsel Davranışçı Terapi (BDT) tek başına ilaç kadar etkilidir. Ancak biyolojik kökenli, ağır depresyon veya bipolar bozukluk gibi durumlarda ilaç tedavisi vazgeçilmezdir. APA ve TPD konsensüsüne göre orta-ağır vakalarda ilaç ve psikoterapinin birlikte uygulanması en yüksek başarıyı sağlar.'
    },
    {
      q: 'Kendimi tamamen iyi hissettiğimde ilacı kendi başıma bırakabilir miyim?',
      a: 'Hayır, en sık yapılan ve nükse yol açan hata budur. Kendinizi iyi hissetmeniz ilacın işe yaradığını gösterir. Beyindeki nöral iyileşmenin kalıcı hale gelmesi için ilk atakta belirtiler tamamen düzeldikten sonra en az 6-9 ay koruyucu sürdürüm tedavisi gerekir. Bırakma kararı mutlaka hekimle birlikte verilmeli ve doz kademeli olarak azaltılmalıdır.'
    },
    {
      q: 'İlaç kullanırken alkol ve diğer maddeleri tüketebilir miyim?',
      a: 'Psikiyatri ilaçları karaciğerde metabolize edilir ve santral sinir sistemini etkiler. Alkol ise bir sinir sistemi baskılayıcıdır (depresandır); ilacın tedavi edici etkisini bozar, karaciğeri yorar ve ertesi gün anksiyete/depresyonu şiddetlendirir. Tedavi sürecinde alkolden uzak durulması uluslararası kılavuzlarca önemle tavsiye edilir.'
    }
  ];

  const handleCopyQuote = (quote: typeof clinicalQuotes[0]) => {
    const text = `"${quote.quote}"\n— ${quote.source} (${quote.orgTitle})\n[Kaynak: PSYCHDS Kanıta Dayalı Psikiyatri Rehberi]`;
    navigator.clipboard.writeText(text);
    setCopiedQuoteId(quote.id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const handleCopyQuestions = () => {
    const text = `PSİKİYATRİ HEKİM GÖRÜŞMESİNE HAZIRLIK SORULARI:\n` +
      doctorQuestions.map(item => `${item.num}. ${item.q}\n   (Açıklama: ${item.desc})`).join('\n\n') +
      `\n\nKaynak: PSYCHDS Kanıta Dayalı Rehber (TPD & APA Kılavuz İlkeleri)`;
    navigator.clipboard.writeText(text);
    setCopiedQuestions(true);
    setTimeout(() => setCopiedQuestions(false), 2500);
  };

  const filteredQuotes = clinicalQuotes.filter(item => {
    if (quoteFilter === 'all') return true;
    if (quoteFilter === 'tpd') return item.org === 'TPD';
    if (quoteFilter === 'apa') return item.org === 'APA';
    if (quoteFilter === 'meds') return item.category === 'meds';
    if (quoteFilter === 'therapy') return item.category === 'therapy';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Sleek Top Banner (Tactile & Dark Mode) */}
      <div className="bg-white/95 dark:bg-[#111215]/95 backdrop-blur-xs border border-neutral-200/90 dark:border-neutral-800 px-3.5 py-2.5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-2xs transition-colors">
        <div className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 min-w-0">
          <span className="px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-mono text-[10px] font-bold text-neutral-900 dark:text-neutral-100 rounded-md shrink-0">
            WHO • TPD • APA • Maudsley
          </span>
          <span className="truncate text-neutral-600 dark:text-neutral-400 hidden md:inline text-xs">
            Bireysel & Aile Rehberi: Bilimsel psikiyatri gerçekleri, klinik tanılar ve kriz hatları
          </span>
        </div>
        <button
          type="button"
          onClick={onSwitchToProfessional}
          className="flex items-center justify-center gap-1.5 px-3 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-black dark:hover:bg-neutral-100 font-semibold text-xs rounded-lg transition-all cursor-pointer shrink-0 self-end sm:self-auto shadow-2xs active:translate-y-[1px]"
        >
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Klinik Portala Geç</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Primary 5 Formal Tabs (Tactile) */}
      <div className="bg-white/95 dark:bg-[#111215]/95 backdrop-blur-xs border border-neutral-200/90 dark:border-neutral-800 rounded-xl p-1.5 flex flex-wrap items-center gap-1.5 shadow-2xs transition-colors">
        {[
          { id: 'psychiatric_info', label: '1. Psikiyatri Bilgileri & Kanıtlar', icon: <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> },
          { id: 'family_guide', label: '2. Aile & Yakınlar Danışma Rehberi', icon: <Users className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> },
          { id: 'meds_faq', label: '3. İlaçlar SSS & Farmakoloji', icon: <HelpCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> },
          { id: 'prep_visit', label: '4. Hekim Görüşmesine Hazırlık', icon: <FileText className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" /> },
          { id: 'emergencies', label: '5. Acil Kriz Hatları (112)', icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs active:translate-y-[1px] active:scale-[0.98] ${
              activeTab === tab.id
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-xs font-bold'
                : 'bg-neutral-50 dark:bg-neutral-900/90 hover:bg-neutral-900 dark:hover:bg-neutral-100 text-neutral-700 dark:text-neutral-300 hover:text-white dark:hover:text-neutral-950 border-neutral-200 dark:border-neutral-750 hover:border-neutral-900 dark:hover:border-neutral-300'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ========================================================
          1. MERGED MASTER TAB: PSİKİYATRİ BİLGİLERİ & KANITLAR
          (Combines: 50 Bilgi, Hastalıklar, Mitler & Gerçekler, TPD & APA Kanıtları)
          ======================================================== */}
      {activeTab === 'psychiatric_info' && (
        <div className="space-y-4">
          {/* Sub-selector Segmented Bar */}
          <div className="bg-neutral-100/80 dark:bg-neutral-900/90 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-1 transition-colors">
            {[
              { id: 'facts', label: '1. 50 Kritik Bilgi (WHO/TPD/APA)', count: '50 Bilgi' },
              { id: 'disorders', label: '2. Sık Görülen Hastalıklar', count: '7 Tablo' },
              { id: 'myths', label: '3. Mitler ve Gerçekler', count: '6 Bilimsel Gerçek' },
              { id: 'quotes', label: '4. TPD & APA İlkeleri', count: '8 Konsensüs' }
            ].map((sub) => (
              <button
                key={sub.id}
                type="button"
                onClick={() => setInfoSubTab(sub.id as any)}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer active:scale-[0.99] ${
                  infoSubTab === sub.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-2xs font-bold border border-neutral-200/60 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>{sub.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  infoSubTab === sub.id ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-mono' : 'text-neutral-400 dark:text-neutral-500'
                }`}>
                  {sub.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sub-Section 1: 50 Essential Psychiatric Facts */}
          {infoSubTab === 'facts' && (
            <div className="space-y-4">
              <PsychiatricFactsExplorer />
            </div>
          )}

          {/* Sub-Section 2: Sık Görülen Hastalıklar (Disorders) */}
          {infoSubTab === 'disorders' && (
            <div className="space-y-4">
              <div className="p-4 bg-white border border-neutral-200/80 rounded-xl shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-base font-bold text-neutral-900 font-display">
                      Sık Görülen Ruh Sağlığı Tabloları & Klinik Ölçütler
                    </h2>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                      Toplumdaki yaygınlıkları, başlangıç yaşları, nörobiyolojik mekanizmaları ve kanıta dayalı çözümleri inceleyin.
                    </p>
                  </div>
                </div>

                {/* Disorder Sub-selector Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-neutral-100">
                  {[
                    { key: 'depression', label: '1. Depresyon' },
                    { key: 'anxiety', label: '2. Anksiyete (YAB)' },
                    { key: 'panic', label: '3. Panik Bozukluk' },
                    { key: 'bipolar', label: '4. Bipolar Bozukluk' },
                    { key: 'ocd', label: '5. OKB & Takıntı' },
                    { key: 'adhd', label: '6. Yetişkin DEHB' },
                    { key: 'ptsd', label: '7. Travma (TSSB)' }
                  ].map((d) => (
                    <button
                      key={d.key}
                      type="button"
                      onClick={() => setSelectedDisorderKey(d.key as any)}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        selectedDisorderKey === d.key
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-2xs'
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Disorder Detail Card */}
              {(() => {
                const data = disordersData[selectedDisorderKey];
                return (
                  <div className="bg-white border border-neutral-200/80 rounded-xl p-5 space-y-5 shadow-2xs">
                    {/* Header */}
                    <div className="space-y-1.5 border-b border-neutral-200/70 pb-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-700 font-bold uppercase">
                        <span>DSM-5-TR Klinik Rehber</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                        {data.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium">
                        {data.subtitle}
                      </p>
                    </div>

                    {/* Prevalences & WHO ranking grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-lg space-y-1">
                        <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wide">
                          Toplum Sıklığı
                        </span>
                        <p className="text-xs font-semibold text-neutral-900">
                          {data.prevalence}
                        </p>
                      </div>

                      <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-lg space-y-1">
                        <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wide">
                          Demografik Dağılım
                        </span>
                        <p className="text-xs font-semibold text-neutral-900">
                          {data.demographics}
                        </p>
                      </div>

                      <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-lg space-y-1">
                        <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wide">
                          WHO Küresel Yük Sırası
                        </span>
                        <p className="text-xs font-semibold text-neutral-900">
                          {data.whoRank}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-4 bg-neutral-50/70 border border-neutral-200/70 rounded-xl text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {data.desc}
                    </div>

                    {/* Striking Scientific Facts */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-blue-600" />
                        <span>Nörobiyolojik Mekanizmalar & Çarpıcı Bilgiler</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {data.strikingFacts.map((fact, idx) => (
                          <div key={idx} className="p-3 bg-white border border-neutral-200/80 rounded-lg text-xs text-neutral-700 leading-relaxed shadow-2xs">
                            <span className="font-bold text-neutral-900 block mb-0.5">• {fact.split(':')[0]}:</span>
                            <span className="text-neutral-600">{fact.split(':')[1] || fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Symptoms List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase font-bold text-neutral-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tanı Ölçütleri & Temel Belirtiler</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {data.symptoms.map((sym, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2 bg-neutral-50/80 border border-neutral-200/60 rounded-md text-xs text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0 mt-1.5" />
                            <span>{sym}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Evidence Recommendation */}
                    <div className="p-3.5 bg-neutral-50 border border-neutral-200/80 rounded-xl space-y-1">
                      <span className="text-[10px] font-mono font-bold text-neutral-900 uppercase tracking-wide">
                        Kılavuz Tedavi Önerisi (APA & TPD Konsensüsü):
                      </span>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {data.evidenceRecommendation}
                      </p>
                    </div>

                    {/* When to see a doctor */}
                    <div className="p-3 bg-neutral-50 border border-neutral-200/70 rounded-lg text-xs text-neutral-700 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neutral-800 shrink-0" />
                      <div>
                        <strong className="text-neutral-900">Ne Zaman Randevu Alınmalı? </strong>
                        <span>{data.whenToSeeDoctor}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Sub-Section 3: Mitler ve Gerçekler (Myths) */}
          {infoSubTab === 'myths' && (
            <div className="space-y-4">
              <div className="p-4 bg-white border border-neutral-200/80 rounded-xl shadow-2xs space-y-1">
                <h2 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-neutral-800" />
                  <span>Psikiyatri Hakkında Yaygın Mitler vs. Bilimsel Gerçekler</span>
                </h2>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Toplumdaki tabular, damgalamalar ve yanlış bilgiler yerine uluslararası psikiyatri kılavuzlarının kanıt temelli gerçekleri.
                </p>
              </div>

              <div className="space-y-2.5">
                {mythsData.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedMyth(expandedMyth === idx ? null : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                          M{idx + 1}
                        </span>
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-neutral-900 block truncate">
                            MİT: "{item.myth}"
                          </span>
                          <span className="text-[11px] text-neutral-500 font-mono">
                            {item.keyFact}
                          </span>
                        </div>
                      </div>
                      {expandedMyth === idx ? (
                        <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                      )}
                    </button>

                    {expandedMyth === idx && (
                      <div className="p-4 pt-1 border-t border-neutral-100 space-y-3 bg-neutral-50/50">
                        <div className="p-3 bg-white border border-neutral-200/80 rounded-lg space-y-1 shadow-2xs">
                          <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wide">
                            ✓ BİLİMSEL GERÇEK:
                          </span>
                          <p className="text-xs text-neutral-800 leading-relaxed">
                            {item.truth}
                          </p>
                        </div>

                        <div className="p-3 bg-neutral-100/70 border border-neutral-200/60 rounded-lg space-y-0.5">
                          <span className="text-[10px] font-mono font-bold text-neutral-600 uppercase tracking-wide">
                            Akademik Kanıt Kaynağı:
                          </span>
                          <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                            {item.evidence}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-Section 4: TPD & APA İlkeleri (Quotes) */}
          {infoSubTab === 'quotes' && (
            <div className="space-y-4">
              <div className="p-4 bg-white border border-neutral-200/80 rounded-xl shadow-2xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                      <Quote className="w-4 h-4 text-neutral-800" />
                      <span>Türkiye Psikiyatri Derneği (TPD) & APA Kanıt ve Uzlaşı Konsensüsü</span>
                    </h2>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                      Psikiyatrinin köklü otoritelerinin kılavuzlarından, kamu bilgilendirme metinlerinden ve klinik uzlaşı raporlarından doğrudan alıntılar.
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                    {[
                      { id: 'all', label: 'Tümü' },
                      { id: 'tpd', label: 'TPD Alıntıları' },
                      { id: 'apa', label: 'APA Alıntıları' },
                      { id: 'meds', label: 'İlaç Tedavisi' },
                      { id: 'therapy', label: 'Psikoterapi' }
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setQuoteFilter(f.id as any)}
                        className={`px-2.5 py-1 text-[11px] font-semibold border rounded-lg transition-all cursor-pointer ${
                          quoteFilter === f.id
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-2xs'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredQuotes.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-neutral-200/80 rounded-xl flex flex-col justify-between space-y-3.5 shadow-2xs hover:border-neutral-400 transition-all"
                  >
                    <div className="space-y-2.5">
                      {/* Top Meta info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold uppercase tracking-wider bg-neutral-900 text-white">
                            {item.orgTitle}
                          </span>
                          <span className="text-[10px] text-neutral-500 font-mono">
                            {item.topic}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-md">
                          {item.badge}
                        </span>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed italic border-l-2 border-neutral-900 pl-3">
                        "{item.quote}"
                      </blockquote>

                      {/* Practical takeaway */}
                      <div className="p-2.5 bg-neutral-50 border border-neutral-200/70 rounded-lg space-y-1">
                        <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                          💡 Birey ve Yakınları İçin Önemi:
                        </div>
                        <p className="text-xs text-neutral-700 leading-relaxed">
                          {item.implication}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Source & Copy */}
                    <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-neutral-500 font-mono truncate max-w-[200px] sm:max-w-[280px]" title={item.source}>
                        {item.source}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleCopyQuote(item)}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 font-mono text-[11px] rounded-lg cursor-pointer transition-all"
                        title="Alıntıyı Kopyala"
                      >
                        {copiedQuoteId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            <span className="text-emerald-700 font-semibold">Kopyalandı</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-neutral-800" />
                            <span>Kopyala</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          2. FAMILY & CAREGIVERS GUIDANCE HUB (AİLE REHBERİ)
          Empatik İletişim, 4 Kriz Algoritması, Google Trend SSS
          ======================================================== */}
      {activeTab === 'family_guide' && (
        <FamilyGuidanceHub />
      )}

      {/* ========================================================
          3. MEDICATION FAQS TAB (İLAÇLAR SSS)
          ======================================================== */}
      {activeTab === 'meds_faq' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-200/80 rounded-xl shadow-2xs space-y-1">
            <h2 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-neutral-800" />
              <span>Psikiyatri İlaçları ve Tedavi Süreci Hakkında Sıkça Sorulan Sorular</span>
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Maudsley Prescribing Guidelines ve TPD kılavuzlarına göre hazırlanmış bilimsel psikofarmakoloji yanıtları.
            </p>
          </div>

          <div className="space-y-3">
            {medicationFaqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-white border border-neutral-200/80 rounded-xl space-y-2 shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded-md shrink-0">
                    S{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
                    {faq.q}
                  </h3>
                </div>
                <div className="text-xs text-neutral-700 leading-relaxed pl-8 pt-1 border-t border-neutral-100">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          3. PREPARING FOR VISIT TAB (DOKTORA SORULACAKLAR)
          ======================================================== */}
      {activeTab === 'prep_visit' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-200/80 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                <FileText className="w-4 h-4 text-neutral-800" />
                <span>Psikiyatri Hekim Görüşmesine Hazırlık ve Sorulacak 5 Kilit Soru</span>
              </h2>
              <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                Poliklinik randevusundan en yüksek klinik verimi almak ve tedavi yol haritanızı netleştirmek için hazırlanmış rehber.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyQuestions}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white font-mono text-xs rounded-lg cursor-pointer shrink-0 transition-all shadow-2xs self-start sm:self-auto"
            >
              {copiedQuestions ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedQuestions ? 'Kopyalandı' : 'Soruları Kopyala'}</span>
            </button>
          </div>

          <div className="space-y-3">
            {doctorQuestions.map((item) => (
              <div key={item.num} className="p-4 bg-white border border-neutral-200/80 rounded-xl space-y-1.5 shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      "{item.q}"
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      Neden Önemli? {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          4. EMERGENCY & CRISIS CONTACTS TAB (112, 182, YEDAM)
          ======================================================== */}
      {activeTab === 'emergencies' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-200/80 rounded-xl shadow-2xs space-y-1">
            <h2 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-rose-600" />
              <span>Resmi Kriz ve Acil Destek Hatları (Türkiye Geneli)</span>
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Acil hayati tehlike, kriz durumları, poliklinik randevuları ve bağımlılık danışmanlığı için ücretsiz resmi hatlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {emergencyContacts.map((contact, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-neutral-200/80 rounded-xl space-y-3 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded-md">
                      {contact.badge}
                    </span>
                    <span className="text-lg font-mono font-bold text-neutral-900">
                      {contact.phone}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900">
                    {contact.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {contact.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-mono">T.C. Resmi Hattı</span>
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Hemen Ara ({contact.phone})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
