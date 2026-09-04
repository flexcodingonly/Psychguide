import { DefenseMechanism, PsychodynamicSchool } from '../types';

export const DEFENSE_MECHANISMS_DATA: DefenseMechanism[] = [
  // 1. İlkel (Patolojik / Narsistik) Savunmalar
  {
    id: 'splitting',
    name: 'Splitting',
    turkishName: 'Bölme',
    level: 'İlkel (Patolojik / Narsistik)',
    definition: 'Kendilik ve nesne tasarımlarının ya da duygulanımların "tamamen iyi" veya "tamamen kötü" olarak iki zıt uca ayrılması; ambivalansın tolere edilememesi.',
    clinicalExample: 'Borderline kişilik bozukluğu olan bir hastanın bir gün psikiyatristini "dünyanın en harika doktoru" ilan ederken, bir sonraki vizitte en ufak bir sınır konulduğunda "beni kasten zehirlemeye çalışan bir canavar" olarak nitelemesi.',
    associatedPathology: 'Borderline Kişilik Bozukluğu, Şizoid Kişilik, Ağır Narsistik Patoloji.',
    therapeuticApproach: 'Klinisyenin sakin kalması, bölme girişimlerine dahil olmaması (sağlık ekibinde çatışma yaratılmasını önlemek), nötr ve tutarlı çerçeveyi koruyarak karşıt duyguların aynı kişiye ait olabileceğinin yavaşça entegrasyonu.'
  },
  {
    id: 'projective-identification',
    name: 'Projective Identification',
    turkishName: 'Yansıtmalı Özdeşim',
    level: 'İlkel (Patolojik / Narsistik)',
    definition: 'Bireyin kendi içinde tolere edemediği bir duyguyu ya da kendilik parçasını dışarıdaki nesneye yansıtması ve ardından o nesneyi bu duyguya uygun davranmaya bilinçdışı şekilde kışkırtması/baskılaması (Melanie Klein).',
    clinicalExample: 'Kendi bastırılmış öfkesini klinisyene yansıtan hastanın, klinisyeni sürekli provoke edip sabrını tüketmesi ve klinisyenin nihayet ses tonunu yükseltmesi üzerine hastanın "Gördünüz mü, siz de bana düşmansınız!" diyerek rahatlaması.',
    associatedPathology: 'Sınırda (Borderline) ve Paranoid Kişilik Örgütlenmeleri.',
    therapeuticApproach: 'Klinisyenin kendi karşı-aktarım duygularını (içinde yükselen beklenmedik öfke, çaresizlik, yetersizlik) tanıması; bu duyguları eyleme dökmeden (acting-in/out yapmadan) kapsayıcı (holding/containing) bir tutumla dönüştürmesi.'
  },
  {
    id: 'denial',
    name: 'Denial',
    turkishName: 'İnkar',
    level: 'İlkel (Patolojik / Narsistik)',
    definition: 'Dış gerçekliğin dayanılmaz, tehdit edici veya acı verici bir yönünün algılanmasının tamamen reddedilmesi.',
    clinicalExample: 'İleri evre kanser veya ağır dekompanse mani tablosundaki bir hastanın, "Ben sapasağlamım, burada tutulmam komplo" diyerek tedaviyi reddetmesi.',
    associatedPathology: 'Psikotik Bozukluklar, Mani, Ağır Bağımlılık, Yasın Şok Evresi.',
    therapeuticApproach: 'Hasta ile doğrudan çatışmaya girmeden gerçekliği nazikçe ama kararlı şekilde test etmek; direnci doğrudan kırmak yerine inkarın altındaki dehşet verici kaygıyı yatıştırmak.'
  },
  {
    id: 'projection',
    name: 'Projection',
    turkishName: 'Yansıtma',
    level: 'İlkel (Patolojik / Narsistik)',
    definition: 'Bireyin kendisinde kabul edemediği dürtü, istek veya kusurları bilinçdışı olarak başkalarına atfetmesi.',
    clinicalExample: 'Kendi içinde homoseksüel veya saldırgan dürtüleri olan bir kişinin, "Sokaktaki herkes bana cinsel amaçla bakıyor ve bana saldırmak istiyor" şeklinde paranoid hezeyanlar geliştirmesi.',
    associatedPathology: 'Paranoid Bozukluklar, Şizofreni, Paranoid Kişilik Bozukluğu.',
    therapeuticApproach: 'Hezeyanı doğrudan tartışmamak; hastanın hissettiği yoğun güvensizlik ve korku duygusuna odaklanmak ("Herkesin size karşı olduğunu hissetmek çok ürkütücü olmalı").'
  },

  // 2. İmmatür (Olgunlaşmamış) Savunmalar
  {
    id: 'acting-out',
    name: 'Acting Out',
    turkishName: 'Eyleme Vurma',
    level: 'İmmatür (Olgunlaşmamış)',
    definition: 'Dayanılmaz bir içsel gerilim veya çatışmanın, bilinçli düşünce ve duygu süreçlerinden geçirilmeden ani, dürtüsel bir eylemle boşaltılması.',
    clinicalExample: 'Terk edilme korkusu yaşayan hastanın seans sonrasında öfkesini konuşmak yerine bileklerine yüzeysel kesiler atması veya aşırı hız yapması.',
    associatedPathology: 'Antisosyal ve Borderline Kişilik Bozukluğu, Madde Kullanım Bozuklukları.',
    therapeuticApproach: 'Net sınırlar koymak (setting boundaries), kriz güvenliği planı oluşturmak ve hastaya "Duyguları eyleme vurmak yerine kelimelere dökme" kapasitesi kazandırmak.'
  },
  {
    id: 'passive-aggression',
    name: 'Passive Aggression',
    turkishName: 'Pasif-Agresyon',
    level: 'İmmatür (Olgunlaşmamış)',
    definition: 'Otoriteye veya başkalarına duyulan öfke ve düşmanlığın doğrudan değil; erteleme, unutma, inatçılık veya verimsizlik yoluyla dolaylı ifade edilmesi.',
    clinicalExample: 'Tedaviye gelmeyi kabul eden ancak her vizite 20 dakika geç gelen, ilaçlarını sürekli "unuttuğunu" söyleyen hasta.',
    associatedPathology: 'Depresyon, Kişilik Bozuklukları.',
    therapeuticApproach: 'Gizli öfkenin açıkça ve güvenli bir terapötik ortamda dile getirilmesini teşvik etmek, pasif direncin bedellerini fark ettirmek.'
  },
  {
    id: 'regression',
    name: 'Regression',
    turkishName: 'Regresyon (Gerileme)',
    level: 'İmmatür (Olgunlaşmamış)',
    definition: 'Ağır stres veya çatışma karşısında bireyin psikolojik gelişim evrelerinin daha erken, çocuksu ve bağımlı dönemlerindeki davranış kalıplarına dönmesi.',
    clinicalExample: 'Hastaneye yatırılan yetişkin bir hastanın kendi başına yemek yiyemeyeceğini söylemesi, bebeksi konuşması veya aşırı yapışkan tutum sergilemesi.',
    associatedPathology: 'Hastanede yatan tıbbi/cerrahi hastalar, Demans, Bağımlı Kişilik.',
    therapeuticApproach: 'Gereksiz bağımlılığı pekiştirmemek; hastanın özerkliğini ve yetişkin ego işlevlerini kademeli olarak güçlendirmek.'
  },
  {
    id: 'somatization',
    name: 'Somatization',
    turkishName: 'Somatizasyon (Bedenselleştirme)',
    level: 'İmmatür (Olgunlaşmamış)',
    definition: 'Çözümlenemeyen intrapsişik çatışmaların ve psikolojik sıkıntıların somatik fiziksel semptomlara dönüştürülmesi.',
    clinicalExample: 'Eşiyle çatışma yaşayan ve boşanmayı göze alamayan bir hastanın yoğun boyun ağrıları ve açıklanamayan parestezilerle acil servislere başvurması.',
    associatedPathology: 'Somatik Belirti Bozuklukları, Aleksitimi, Depresyon.',
    therapeuticApproach: 'Fiziksel semptomların gerçekliğini reddetmeden duygularla bedensel duyumlar arasındaki köprüyü kurmak; gereksiz invaziv tıbbi tetkikleri sınırlamak.'
  },

  // 3. Nevrotik (Ara Düzey) Savunmalar
  {
    id: 'repression',
    name: 'Repression',
    turkishName: 'Bastırma (Represyon)',
    level: 'Nevrotik (Ara Düzey)',
    definition: 'Kabul edilemez dürtü, anı veya duyguların BİLİNÇDIŞINA itilmesi ve orada tutulması (baskılamadan farkı istemsiz/bilinçdışı olmasıdır).',
    clinicalExample: 'Çocukluk çağında cinsel istismara uğramış bir hastanın bu olayı tamamen unutmuş olması ancak yetişkinlikte nedeni anlaşılamayan panik ataklar yaşaması.',
    associatedPathology: 'Konversiyon Bozukluğu, Anksiyete Bozuklukları, Nevrotik Tablolar.',
    therapeuticApproach: 'Dirençleri nazikçe analiz etmek; ego gücü geliştikçe bastırılmış malzemenin bilinç alanına gelmesine ve işlenmesine izin vermek.'
  },
  {
    id: 'reaction-formation',
    name: 'Reaction Formation',
    turkishName: 'Karşıt Tepki Oluşturma',
    level: 'Nevrotik (Ara Düzey)',
    definition: 'Kişinin kabul edilemez içsel dürtüsünün tam tersi yönde aşırı ve abartılı bir tutum/davranış sergilemesi.',
    clinicalExample: 'Kardeşine karşı bilinçdışı yoğun kıskançlık ve ölüm isteği duyan bir bireyin, kardeşine karşı aşırı koruyucu, boğucu ve endişeli bir sevgi gösterisi içine girmesi.',
    associatedPathology: 'Obsesif-Kompulsif Bozukluk, Obsesif-Kompulsif Kişilik Bozukluğu.',
    therapeuticApproach: 'Aşırı rijit davranışların altındaki gizli ambivalansı keşfetmek ve kişinin olumsuz duygularının da insani olduğunu kabul etmesine yardımcı olmak.'
  },
  {
    id: 'isolation-of-affect',
    name: 'Isolation of Affect',
    turkishName: 'Duygudan Yalıtma (İzolasyon)',
    level: 'Nevrotik (Ara Düzey)',
    definition: 'Bilişsel düşünce veya anının duygusal içeriğinden tamamen koparılması; olayın duygusuz, robotik bir biçimde anlatılması.',
    clinicalExample: 'Yakın zamanda trajik bir trafik kazasında tüm ailesini kaybeden bir cerrahın, olayı sanki bir tıbbi vaka raporu okur gibi sıfır duyguyla ve soğukkanlılıkla anlatması.',
    associatedPathology: 'OKB, Travma Sonrası Stres Bozukluğu.',
    therapeuticApproach: 'Hastanın duygusal temas kurmasına yardımcı olmak; "Bu olayı anlatırken şu an bedeninizde ne hissediyorsunuz?" şeklinde afektif köprüler kurmak.'
  },
  {
    id: 'displacement',
    name: 'Displacement',
    turkishName: 'Yer Değiştirme',
    level: 'Nevrotik (Ara Düzey)',
    definition: 'Bir kişiye veya duruma yönelik tehlikeli duygunun (genellikle öfke veya korku), daha az tehdit edici ve güvenli başka bir nesneye yönlendirilmesi.',
    clinicalExample: 'İş yerinde amirine öfkelenen ancak işini kaybetmekten korkan bir memurun, eve geldiğinde hiçbir neden yokken eşine veya evcil hayvanına bağırması.',
    associatedPathology: 'Fobiler, Yaygın Anksiyete, Öfke Kontrol Sorunları.',
    therapeuticApproach: 'Duygunun asıl kaynağını fark ettirmek ve doğrudan, asertif (güvenli) iletişim becerilerini geliştirmek.'
  },
  {
    id: 'rationalization',
    name: 'Rationalization',
    turkishName: 'Rasyonalizasyon (Akla Uydurma)',
    level: 'Nevrotik (Ara Düzey)',
    definition: 'Kabul edilemez davranış, duygu veya başarısızlıklar için mantıklı, toplumsal olarak kabul edilebilir fakat gerçek dışı gerekçeler üretilmesi.',
    clinicalExample: 'Sınava hiç çalışmayıp kalan öğrencinin "Zaten o hoca takıntılıydı, geçmem sisteme köle olmak demekti" diyerek içsel suçluluğu bertaraf etmesi.',
    associatedPathology: 'Nevrotik Çatışmalar, Narsistik Kırılganlık.',
    therapeuticApproach: 'Kendini aldatma kalıplarını yüzleştirmek, başarısızlığın getirdiği hüzün ve yetersizlik duygusunun güvenle yaşanmasına zemin hazırlamak.'
  },

  // 4. Olgun (Matür) Savunmalar
  {
    id: 'sublimation',
    name: 'Sublimation',
    turkishName: 'Süblimasyon (Yüceltme)',
    level: 'Olgun (Matür)',
    definition: 'Kabul edilemez içgüdüsel dürtülerin (özellikle saldırganlık veya libidonun) toplumsal ve kültürel olarak değerli, yapıcı ve yaratıcı kanallara yönlendirilmesi.',
    clinicalExample: 'Yoğun saldırganlık dürtüleri olan bir kişinin cerrah veya profesyonel dövüş sporcusu olarak hayat kurtarması ya da başarı kazanması.',
    associatedPathology: 'Sağlıklı psikolojik işlevsellik; patoloji oluşturmaz.',
    therapeuticApproach: 'Desteklenmeli ve teşvik edilmelidir.'
  },
  {
    id: 'humor',
    name: 'Humor',
    turkishName: 'Mizah',
    level: 'Olgun (Matür)',
    definition: 'Acı verici, tehdit edici veya utanç verici durumların olumsuz yönlerini inkar etmeksizin bunların komik ve eğlenceli yönlerini vurgulayarak gerilimi azaltma.',
    clinicalExample: 'Ağır bir ameliyata girmeden önce cerraha "Umarım bugün dinç uyanmışsınızdır, içeride unutulacak alet istemem" diyerek herkesi güldüren ve kaygısını yatıştıran hasta.',
    associatedPathology: 'Sağlıklı ego gücü göstergesi (alaycılık ve ironi ile karıştırılmamalıdır).',
    therapeuticApproach: 'Terapötik bağı güçlendirir; klinisyen hastanın mizahına uygun dozda eşlik edebilir.'
  },
  {
    id: 'altruism',
    name: 'Altruism',
    turkishName: 'Özgecilik (Fedakarlık)',
    level: 'Olgun (Matür)',
    definition: 'Kendi içsel acı ve çatışmalarını başkalarına karşılıksız yardım ederek, yapıcı destek sunarak yapıcı bir hazza dönüştürme.',
    clinicalExample: 'Kanser atlatan bir hastanın diğer kanser hastalarına destek grubu kurup gönüllü rehberlik yapması.',
    associatedPathology: 'Sağlıklı işlevsellik (Kişi kendi ihtiyaçlarını tamamen hiçe sayıp tükenmiyorsa).',
    therapeuticApproach: 'Güçlendirilmeli, sınırların dengeli kurulması gözetilmelidir.'
  },
  {
    id: 'suppression',
    name: 'Suppression',
    turkishName: 'Baskılama (Supresyon)',
    level: 'Olgun (Matür)',
    definition: 'Stres yaratan bir düşünce veya duyguyu bilinçli ve kasıtlı olarak erteleyip öncelikli göreve odaklanma (Bastırma/Represyondan farkı bilinçli olmasıdır).',
    clinicalExample: '"Şu an çok önemli bir sınavım var, ailevi sorunları sınavdan sonra saat 17:00\'de düşüneceğim" diyerek dikkatini toplayan birey.',
    associatedPathology: 'Yüksek ego kontrolü.',
    therapeuticApproach: 'Bilişsel ve adaptif stratejiler arasında desteklenir.'
  }
];

export const PSYCHODYNAMIC_SCHOOLS_DATA: PsychodynamicSchool[] = [
  {
    id: 'freud-structural',
    title: 'Yapısal & Topografik Model',
    theorists: 'Sigmund Freud, Anna Freud',
    coreConcepts: [
      {
        term: 'İd, Ego, Süperego',
        explanation: 'İd: Haz ilkesiyle çalışan, doğuştan gelen ilkel dürtüler. Ego: Gerçeklik ilkesiyle çalışan, id ile süperego ve dış dünya arasında hakemlik yapan yürütücü aygıt. Süperego: İçselleştirilmiş ahlaki normlar, suçluluk ve vicdan mekanizması.',
        clinicalApplication: 'Depresyondaki ağır suçluluk ve kendini kınama cezalandırıcı süperegonun egoya acımasız saldırısıdır. Manide ise ego süperegonun baskısını geçici olarak bertaraf etmiştir.'
      },
      {
        term: 'Bilinç, Ön-Bilinç, Bilinçdışı (Topografik Model)',
        explanation: 'Zihinsel içeriklerin farkındalık katmanları. Bilinçdışı bastırılmış çatışmaları barındırır ve rüyalar, dil sürçmeleri, somatik semptomlarla kendini belli eder.',
        clinicalApplication: 'Serbest çağrışım ve direnç analiziyle bilinçdışı malzemenin farkına varılması semptomların çözülmesini sağlar.'
      }
    ],
    clinicalRelevanceInPsychiatry: 'Psikiyatrik semptomların tesadüfi olmadığını, ruhsal aygıt içindeki uzlaşma oluşumları (compromise formation) olduğunu anlamayı sağlar.'
  },
  {
    id: 'object-relations',
    title: 'Nesne İlişkileri Kuramı',
    theorists: 'Melanie Klein, Donald Winnicott, Ronald Fairbairn, Otto Kernberg',
    coreConcepts: [
      {
        term: 'Paranoid-Şizoid ve Depresif Konum (Melanie Klein)',
        explanation: 'Paranoid-şizoid konumda bebek dünyayı bölme mekanizmasıyla "iyi meme" ve "kötü meme" olarak algılar ve yok edilme kaygısı taşır. Depresif konumda ise anne hem iyi hem kötü özellikleriyle bütünleşir; kaygı nesneye zarar vermiş olma suçluluğuna ve onarım (reparation) isteğine dönüşür.',
        clinicalApplication: 'Ağır regresyondaki psikotik ve borderline hastalar paranoid-şizoid konumda işlev görür; tedavi hedefi bütünleşmiş depresif konuma geçiştir.'
      },
      {
        term: 'Yeterince İyi Anne & Kucaklayıcı Çevre (D.W. Winnicott)',
        explanation: 'Bebeğin gelişimsel ihtiyaçlarına kusursuz değil fakat yeterli uyum sağlayan bakım veren. Kucaklayıcı çevre (holding environment) çocuğun gerçek kendilik geliştirmesine olanak tanır.',
        clinicalApplication: 'Terapistin ve psikiyatri servisinin kucaklayıcı ve güvenli ortam sağlaması, travmatik parçalanmış hastalar için temel terapötik zemindir.'
      },
      {
        term: 'Kişilik Örgütlenmeleri (Otto Kernberg)',
        explanation: 'Üç yapısal düzey: 1) Nevrotik (Bütünleşmiş kimlik, olgun savunmalar, korunmuş gerçeklik değerlendirmesi), 2) Borderline (Kimlik difüzyonu, ilkel savunmalar, değişken/stres altında sarsılan gerçeklik değerlendirmesi), 3) Psikotik (Kimlik kaybı, ilkel savunmalar, bozulmuş gerçeklik değerlendirmesi).',
        clinicalApplication: 'Diferansiyel tanı, intihar riski tahmini ve uygun psikoterapi türünün (Aktarım Odaklı Terapi / BDT / Destekleyici) seçiminde vazgeçilmez pusuladır.'
      }
    ],
    clinicalRelevanceInPsychiatry: 'Özellikle Borderline, Narsistik ve Şizoid hastalarla çalışırken poliklinik ilişkisindeki patolojileri çözümlemeyi sağlar.'
  },
  {
    id: 'self-psychology',
    title: 'Kendilik Psikolojisi (Self Psychology)',
    theorists: 'Heinz Kohut',
    coreConcepts: [
      {
        term: 'Kendilik Nesneleri (Selfobjects)',
        explanation: 'Bireyin psikolojik bütünlüğünü, özsaygısını ve canlılığını sürdürmek için başkalarını bir uzantısı gibi algılaması.',
        clinicalApplication: 'Narsistik bireyler başkalarını bağımsız varlıklar olarak değil, kendilerini onaylayan veya idealleştirilen aynalar olarak görürler.'
      },
      {
        term: 'Aynalama ve İdealleştirme İhtiyacı',
        explanation: 'Çocuğun büyüklük ve mükemmellik duygularının onaylanması (aynalama) ve sakin, güçlü bir figürle kaynaşma (idealleştirme) temel gelişimsel gereksinimlerdir.',
        clinicalApplication: 'Bu ihtiyaçlar karşılanmadığında narsistik kırılganlık, öfke patlamaları ve derin boşluk hissi gelişir.'
      }
    ],
    clinicalRelevanceInPsychiatry: 'Narsistik kişilik bozukluğu, boşluk ve anlamsızlık krizlerinin empatik eksende anlaşılması ve terapötik kırılmaların onarılmasında esastır.'
  },
  {
    id: 'clinical-transference',
    title: 'Aktarım & Karşı-Aktarım Yönetimi',
    theorists: 'Heinrich Racker, Paula Heimann, Glen Gabbard',
    coreConcepts: [
      {
        term: 'Aktarım (Transference)',
        explanation: 'Hastanın çocukluğundaki önemli nesnelerle (anne, baba) olan duygularını, arzularını ve beklentilerini klinisyene yöneltmesi.',
        clinicalApplication: 'Hasta hekime nedensiz bir öfke duyabilir ya da onu mucizevi bir kurtarıcı olarak görebilir. Bu durum şahsi değil, hastanın iç dünyasının yansımasıdır.'
      },
      {
        term: 'Karşı-Aktarım (Countertransference)',
        explanation: 'Klinisyenin hastanın aktarımına ve içsel dinamiklerine karşı bilinçli ve bilinçdışı geliştirdiği duygusal tepkiler.',
        clinicalApplication: 'Seans sırasında hekimin aniden hissettiği uykululuk, yoğun yetersizlik, öfke veya kurtarıcılık fantezileri hastanın iç dünyasını anlamak için bir tanı aracıdır.'
      }
    ],
    clinicalRelevanceInPsychiatry: 'Tükenmişliği (burnout) önler, klinisyenin sınır ihlallerini engeller ve zorlu hasta ilişkilerini tedavi edici işbirliğine dönüştürür.'
  }
];
