export interface SpecialAreaSubtopic {
  id: string;
  title: string;
  category: 'Konsültasyon-Liyezon (CLP)' | 'Bağımlılık Psikiyatrisi' | 'Çocuk ve Ergen' | 'Geriatrik Psikiyatri' | 'Gebelik ve Emzirme' | 'Uyku Bozuklukları' | 'Nöropsikiyatri' | 'Adli Psikiyatri & Hukuk';
  summary: string;
  corePrinciples: string[];
  clinicalMatrix: {
    label: string;
    description: string;
    recommendation: string;
  }[];
  highYieldPearls: string[];
  legalOrProtocolReference: string;
}

export const SPECIAL_AREAS_DATA: SpecialAreaSubtopic[] = [
  {
    id: 'clp-medicine',
    title: 'Konsültasyon-Liyezon Psikiyatrisi (CLP)',
    category: 'Konsültasyon-Liyezon (CLP)',
    summary: 'Genel tıp servislerinde (dahiliye, cerrahi, yoğun bakım, onkoloji) yatan hastalarda psikiyatrik semptomların yönetimi, preoperatif değerlendirme, steroid psikozu ve kapasite değerlendirmesi.',
    corePrinciples: [
      'Organik dışlama her zaman birinci basamaktır (vital bulgular, enfeksiyon, elektrolit, oksijenasyon).',
      'İlaç seçiminde kardiyotoksisite (QTc), karaciğer/böbrek klerensi ve polifarmasi etkileşimleri gözetilmelidir.',
      'Aydınlatılmış onam ve tedaviye ret durumunda karar verme yeterliği spesifik olarak değerlendirilmelidir.'
    ],
    clinicalMatrix: [
      {
        label: 'Steroid Kaynaklı Psikoz / Mani',
        description: 'Yüksek doz kortikosteroid (Prednizolon >40 mg/gün) kullanımı sırasında gelişen akut mani, öfori veya paranoid psikoz.',
        recommendation: 'Mümkünse steroid dozu azaltılır. Semptomatik kontrol için düşük doz Atipik Antipsikotikler (Olanzapin 2.5-5 mg veya Risperidon 1 mg) ilk tercihtir.'
      },
      {
        label: 'Kardiyak Hastalık & Post-MI Depresyon',
        description: 'Miyokard enfarktüsü sonrası depresyon mortaliteyi 2-3 kat artırır. QTc uzaması ve trombosit agregasyonu riski vardır.',
        recommendation: 'İlk tercih SERTRALİN (SADHART çalışması kanıtlı kardiyovasküler güvenlik profili). Sitalopram ve Essitalopramdan yüksek dozlarda QTc uzaması nedeniyle kaçınılmalıdır.'
      },
      {
        label: 'Kanser ve Onkolojik Palyatif Bakım',
        description: 'Depresyon, anhedoni, iştahsızlık, ağrı ve bulantı tablosu.',
        recommendation: 'MİRTAZAPİN (iştah açıcı, bulantı önleyici ve sedatif etkisi nedeniyle idealdir). Halsizlik ve psikomotor retardasyon için Metilfenidat (düşük doz 2.5-5 mg sabah) hızlı etki için kullanılabilir.'
      }
    ],
    highYieldPearls: [
      'Karaciğer yetmezliği olan hastada benzodiazepin gerekiyorsa: L-O-T kuralı (Lorazepam, Oksazepam, Temazepam) - hepatik glukuronidasyonla atılırlar, CYP\'ye bağımlı değillerdir.',
      'Cerrahi öncesi Lityum 24-48 saat önce kesilmelidir (nöromüsküler blokerlerin etkisini uzatır ve ameliyat sırası sıvı kayıplarında toksisite riski yüksektir).'
    ],
    legalOrProtocolReference: 'Academy of Consultation-Liaison Psychiatry (ACLP) & EAPM Guidelines'
  },
  {
    id: 'addiction-psychiatry',
    title: 'Bağımlılık Psikiyatrisi & Toksikoloji',
    category: 'Bağımlılık Psikiyatrisi',
    summary: 'Alkol, opioid, kannabinoid ve stimülan kullanım bozukluklarında kanıta dayalı sürdürüm tedavileri, idrar tarama pencereleri ve nüks önleme farmakoterapileri.',
    corePrinciples: [
      'Bağımlılık biyopsikososyal kronik bir beyin hastalığıdır; biyolojik idame tedavileri (MAT) mortaliteyi en çok düşüren yaklaşımdır.',
      'İdrar toksikoloji sonuçları klinik tabloyla birlikte yorumlanmalıdır (yanlış pozitiflikler: örn. sertralin/benzodiazepin, efedrin/amfetamin).',
      'Nüks (relaps) durumlarında ceza yerine tedavi planı revizyonu esastır.'
    ],
    clinicalMatrix: [
      {
        label: 'Alkol Bağımlılığı Nüks Önleme',
        description: 'Detoksifikasyon sonrası aşermeyi (craving) azaltma ve alkolsüzlüğü sürdürme.',
        recommendation: '1. Tercih: AKAMPROSAT (3x666 mg, glutamat modülasyonu, KC yetmezliğinde güvenli) veya NALTREKSON (50 mg/gün oral, opioid kullanmıyorsa!). Karaciğer enzim yüksekliğinde Akamprosat tercih edilir.'
      },
      {
        label: 'Opioid Kullanım Bozukluğu İdamesi (MAT)',
        description: 'Eroin veya reçeteli opioid bağımlılığında aşerme ve aşırı doz ölümünü önleme.',
        recommendation: 'BUPRENORFİN/NALOKSON (Suboxone) dilaltı film. Parsiyel agonisttir, tavan etkisi nedeniyle solunum depresyonu riski düşüktür. Tam yoksunluk başlamadan verilmemelidir.'
      },
      {
        label: 'İdrarda Madde Saptanma Pencereleri',
        description: 'Rutin immunoassay idrar tarama testlerinde maddelerin pozitif kalma süreleri.',
        recommendation: 'Alkol (EtG): 24-72 saat; Benzodiazepinler: 3-30 gün (klorazepat/diazepam uzun kalır); Esrar (THC): Tek kullanımda 3 gün, kronik yoğun kullanımda 30 güne kadar; Amfetaminler: 2-4 gün; Kokain: 2-3 gün.'
      }
    ],
    highYieldPearls: [
      'Disülfiram (Antabus) başlanmadan önce hastanın son 12-24 saatte alkol almadığından kesinlikle emin olunmalı ve gizli alkol içeren maddeler (kolonya, sirke, öksürük şurubu) konusunda hasta bilgilendirilmelidir.',
      'Naltrekson alan bir hasta acil cerrahiye girerse standart opioid analjezikler yetersiz kalır; çok yüksek doz veya non-opioid multimodal anestezi gerektirir.'
    ],
    legalOrProtocolReference: 'ASAM (American Society of Addiction Medicine) & Sağlık Bakanlığı AMATEM Protokolü'
  },
  {
    id: 'child-adolescent',
    title: 'Çocuk ve Ergen Psikiyatrisi',
    category: 'Çocuk ve Ergen',
    summary: 'Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB), Otizm Spektrum Bozukluğu, Ergenlikte Depresyon/Anksiyete ve FDA SSRI "Black Box" intihar düşüncesi uyarısı yönetimi.',
    corePrinciples: [
      'Çocuk ve ergenlerde ilaç tedavisi daima aile eğitimi, okul yapılandırması ve psikoterapi ile birlikte yürütülmelidir.',
      'Stimülan tedavisi öncesinde mutlaka kardiyak öykü (ani ölüm, senkop) ve büyüme parametreleri (boy, kilo) kaydedilmelidir.',
      'Pediatrik grupta off-label ilaç kullanımında veli aydınlatılmış onamı yazılı olarak alınmalıdır.'
    ],
    clinicalMatrix: [
      {
        label: 'DEHB Farmakoterapisi',
        description: 'Okul başarısızlığı, impulsivite ve dikkat dağınıklığı.',
        recommendation: '1. Tercih: METİLFENİDAT (Kısa veya uzun salınımlı preparatlar: Ritalin, Concerta, Medikinet). Yanıtsızlık veya tike yol açarsa non-stimülan: ATOMOKSETİN (Strattera) veya GUANFASİN.'
      },
      {
        label: 'Ergen Depresyonu & SSRI "Black Box" Uyarısı',
        description: 'Çocuk ve genç erişkinlerde (<25 yaş) SSRI başlandıktan sonraki ilk haftalarda intihar düşüncesinde paradoksal artış riski.',
        recommendation: 'Pediatrik depresyonda FDA onaylı tek SSRI: FLUOKSETİN (ardından Essitalopram). İlaç başlandıktan sonraki ilk 4 hafta haftalık kontrollerle hasta ve aile yakın takip edilmelidir.'
      },
      {
        label: 'Otizmde İrritabilite ve Öfke Nöbetleri',
        description: 'Öz kıyım, saldırganlık ve şiddetli ajitasyon nöbetleri.',
        recommendation: 'FDA onaylı ajanlar: RİSPERİDON (≥5 yaş) ve ARİPİPRAZOL (≥6 yaş). Metabolik parametreler ve prolaktin düzenli izlenmelidir.'
      }
    ],
    highYieldPearls: [
      'Stimülanlar iştahı baskılayabilir; ilacın yemeklerden SONRA verilmesi ve hafta sonu "ilaç tatilleri" (drug holidays) büyüme eğrisini korumada uygulanabilir.',
      'Ergenlerde bipolar bozukluk sıklıkla depresif atakla başlar; aile öyküsü pozitif olan bir ergene SSRI başlarken manik kayma riski çok yakından izlenmelidir.'
    ],
    legalOrProtocolReference: 'AACAP (American Academy of Child and Adolescent Psychiatry) Practice Parameters'
  },
  {
    id: 'geriatric-psychiatry',
    title: 'Geriatrik Psikiyatri & Demans',
    category: 'Geriatrik Psikiyatri',
    summary: 'Yaşlı popülasyonda farmakokinetik değişiklikler, Beers Kriterleri, Antikolinerjik Bilişsel Yük (ACB), Demansın Davranışsal ve Psikolojik Belirtileri (BPSD).',
    corePrinciples: [
      '"Start Low, Go Slow, but Aim High Enough": Başlangıç dozu genç yetişkin dozunun 1/3 - 1/2\'si olmalı, titrasyon yavaş yapılmalı ancak hedeflenen terapötik doza ulaşılmalıdır.',
      'Antikolinerjik yük bilişsel yıkımı ve düşme riskini katlar; antikolinerjik ilaçlar en aza indirilmelidir.',
      'Demans hastalarında antipsikotiklerin kardiyovasküler/serebrovasküler olay ve mortalite riskini (Black Box Warning) artırdığı hasta yakınıyla paylaşılmalıdır.'
    ],
    clinicalMatrix: [
      {
        label: 'Demansın Davranışsal Belirtileri (BPSD)',
        description: 'Alzheimer veya vasküler demansta ajitasyon, bağırma, şüphecilik ve gece huzursuzluğu.',
        recommendation: 'Önce non-farmakolojik çevresel düzenleme. İlaç zorunluysa FDA onaylı BREXPIPRAZOL veya çok düşük doz Risperidon (0.25 - 0.5 mg/gün). En kısa süre kullanılmalı ve periyodik kesilme denenmelidir.'
      },
      {
        label: 'Yaşlıda Antidepresan Seçimi',
        description: 'Hiponatremi (SIADH) ve düşme riski en aza indirilmelidir.',
        recommendation: 'İlk seçenekler: ESSİTALOPRAM veya SERTRALİN. İştahsızlık ve uyku bozukluğu eşlik ediyorsa MİRTAZAPİN. Hiponatremi için ilk 2-4 haftada serum sodyumu kontrol edilmelidir.'
      },
      {
        label: 'Beers Kriterlerine Göre Kaçınılacaklar',
        description: 'Yaşlılarda yüksek riskli psikotropik ilaçlar.',
        recommendation: 'Trisiklik antidepresanlar (Amitriptilin), Tersiyer aminler, Biperiden, Uzun etkili benzodiazepinler (Diazepam, Klonazepam), Z-ilaçlar (Zopiklon - kognitif bozulma ve kırık riski).'
      }
    ],
    highYieldPearls: [
      'Lewy Cisimli Demansı veya Parkinson Demansı olan bir yaşlıya Haloperidol gibi tipik antipsikotik verilmesi ÖLÜMCÜL AKUT AKİNEZİ ve nöroleptik duyarlılık reaksiyonuna yol açar.',
      'Geriatride ani başlayan davranış değişikliği daima idrar yolu enfeksiyonu veya kabızlık (fekal impaksiyon) taranmasını gerektirir.'
    ],
    legalOrProtocolReference: 'AGS Beers Criteria 2023 & IPA (International Psychogeriatric Association) Guidelines'
  },
  {
    id: 'perinatal-pregnancy',
    title: 'Perinatal Psikiyatri (Gebelik ve Emzirme)',
    category: 'Gebelik ve Emzirme',
    summary: 'Gebelikte psikotrop kullanımı, organogenez dönemi riskleri, teratojenite, neonatal adaptasyon sendromu, emzirme güvenliği ve postpartum psikoz acili.',
    corePrinciples: [
      'Tedavi edilmemiş maternal psikiyatrik hastalık (depresyon, mani, psikoz) fetal gelişim ve anne sağlığı üzerinde ilaç tedavisinden daha büyük risk taşır.',
      'Monoterapi ve en düşük etkili doz esastır; çoklu ilaç kombinasyonlarından kaçınılmalıdır.',
      'Valproat gebelikte KESİNLİKLE KONTRENDİKEDİR (nöral tüp defekti ve IQ kaybı).'
    ],
    clinicalMatrix: [
      {
        label: 'Gebelikte Antidepresan Seçimi',
        description: 'Majör depresyon ve anksiyete bozukluğu idamesi.',
        recommendation: 'En çok veri birikimi olan ajanlar: SERTRALİN ve SİTALOPRAM. Paroksetinden (kardiyak kardiyovasküler septum defekti riski nedeniyle) 1. trimesterde kaçınılmalıdır. Doğum sonrası hafif Neonatal Adaptasyon Sendromu izlenir.'
      },
      {
        label: 'Bipolar Bozukluk ve Lityum Yönetimi',
        description: 'Ebstein anomalisi riski (tahmini 1/1000, tarihsel abartının aksine düşüktür).',
        recommendation: 'Yüksek nüks riskli bipolar gebede lityuma devam edilebilir. 1. trimesterde 16-18. haftalarda Fetal Ekokardiyografi önerilir. Doğum eyleminde dehidratasyon ve renal klerens düşüşü nedeniyle lityum dozu azaltılmalı/kesilmelidir.'
      },
      {
        label: 'Emzirme Dönemi Güvenliği',
        description: 'Anne sütüne geçen rölatif bebek dozu (RID - Relative Infant Dose).',
        recommendation: 'RID < %10 ise güvenli kabul edilir. SERTRALİN (anne sütüne en az geçen SSRI). Emzirmede KLOZAPİN (agranülositoz riski) ve LİTYUM (bebek böbreği immatüritesi) önerilmez.'
      },
      {
        label: 'Postpartum Psikoz (Tıbbi Acil)',
        description: 'Doğum sonrası ilk 2-4 haftada akut başlangıçlı konfüzyon, delüzyonel inançlar ve infantisit/özkıyım riski.',
        recommendation: 'HAYATİ ACİLDİR. Bebekten derhal güvenli ayrılma, acil psikiyatri yatışı, atipik antipsikotikler ve lityum. Dirençli veya katatonik olgularda birinci basamak EKT\'dir.'
      }
    ],
    highYieldPearls: [
      'Valproat doğurganlık çağındaki hiçbir kadına ilk basamakta reçete edilmemelidir (Teratojenite riski %10, kognitif kayıp riski %30-40).',
      'Gebeliğin 3. trimesterinde plazma hacmi ve renal klirens arttığı için lityum veya antidepresan kan düzeyleri düşebilir; doz artırımı gerekebilir, doğum sonrası hemen eski doza inilmelidir.'
    ],
    legalOrProtocolReference: 'ACOG Practice Bulletin & Motherisk Perinatal Guidelines'
  },
  {
    id: 'sleep-disorders',
    title: 'Uyku Bozuklukları & İnsomni Algoritması',
    category: 'Uyku Bozuklukları',
    summary: 'Kronik insomni tanı ve tedavisi, BDT-I (İnsomni Bilişsel Davranışçı Terapisi), hipnotik ilaçların rasyonel kullanımı ve huzursuz bacaklar sendromu.',
    corePrinciples: [
      'Kronik insomnide ALTIN STANDART tedavi BDT-I\'dir (CBT-I); ilaçlar yalnızca kısa süreli (2-4 hafta) kriz köprüsü olmalıdır.',
      'Uyku hijyeni tek başına yeterli bir tedavi değildir; uyku kısıtlaması (sleep restriction) ve stimulus kontrolü gereklidir.',
      'Sedatif benzodiazepinler ve Z-ilaçlar bağımlılık, rebound insomni ve mimari bozulma (REM/derin uyku azalması) yapar.'
    ],
    clinicalMatrix: [
      {
        label: 'Kronik İnsomni Tedavi Basamakları',
        description: 'Haftada en az 3 gece, 3 aydan uzun süren uykuya dalamama veya sürdürememe.',
        recommendation: '1. Basamak: BDT-I (Yatakta kalış süresini kısıtlama, uyuyamayınca yataktan çıkma). 2. Basamak: Düşük doz sedatif antidepresanlar (Trazodon 25-50 mg, Mirtazapin 7.5-15 mg) veya Melatonin reseptör agonistleri.'
      },
      {
        label: 'Huzursuz Bacaklar Sendromu (RLS / Willis-Ekbom)',
        description: 'İstirahatle artan, hareketle azalan bacaklarda karşı konulmaz hareket ettirme isteği.',
        recommendation: 'Önce Serum Ferritin kontrolü (Ferritin <75 ng/mL ise demir replasmanı şarttır). Farmakoterapi: Alfa-2-delta ligandları (Gabapentin veya Pregabalin). Dopamin agonistleri augmentasyon riski nedeniyle 2. plandadır.'
      },
      {
        label: 'REM Uykusu Davranış Bozukluğu (RBD)',
        description: 'Rüyaları yaşama (rüya sırasında tekmeleme, yumruklama), REM atonisinin kaybı.',
        recommendation: 'Sinükleinopati (Parkinson, Lewy Cisimli Demans) öncüsü olabilir. Tedavi: Düşük doz KLONAZEPAM (0.5 - 1 mg) veya MELATONİN (3 - 10 mg).'
      }
    ],
    highYieldPearls: [
      'SSRI ve SNRI\'lar huzursuz bacaklar sendromunu (RLS) ve periyodik bacak hareketlerini (PLMD) belirgin şekilde tetikleyebilir veya şiddetlendirebilir.',
      'Mirtazapinin sedatif etkisi düşük dozlarda (7.5 - 15 mg, güçlü H1 blokajı) yüksek dozlarına (30 - 45 mg, noradrenerjik aktivite artışı) kıyasla daha belirgindir.'
    ],
    legalOrProtocolReference: 'AASM (American Academy of Sleep Medicine) Clinical Practice Guidelines'
  },
  {
    id: 'neuropsychiatry',
    title: 'Nöropsikiyatri & Organik Sendromlar',
    category: 'Nöropsikiyatri',
    summary: 'Frontal lob sendromları, İnme Sonrası Depresyon (PSD), Parkinson Hastalığı Psikozu, Temporal Lob Epilepsisi ve Normal Basınçlı Hidrosefali.',
    corePrinciples: [
      'Geç yaşta (>40 yaş) ilk kez ortaya çıkan psikoz veya kişilik değişikliği aksi kanıtlanana kadar nörolojik/organik kökenlidir.',
      'Fokal nörolojik defisit, istemsiz hareketler ve kognitif disfonksiyon detaylı taranmalıdır.',
      'Nörodejeneratif hastalıklarda standart antipsikotik dozları tolere edilemez; minimal dozlar kullanılmalıdır.'
    ],
    clinicalMatrix: [
      {
        label: 'Parkinson Hastalığı Psikozu (PDP)',
        description: 'Dopaminerjik tedavi altındaki Parkinson hastasında gelişen görsel varsanılar ve persekütuar sanrılar.',
        recommendation: '1. Tercih: PİMAVANSERİN (seçici 5-HT2A invers agonisti, motor fonksiyonları bozmaz). Alternatif: KETİAPİN (12.5 - 50 mg) veya çok düşük doz KLOZAPİN (6.25 - 25 mg).'
      },
      {
        label: 'İnme Sonrası Depresyon (Post-Stroke Depression)',
        description: 'Serebrovasküler olay sonrası hastaların %30-40\'ında gelişen ve rehabilitasyon başarısını düşüren tablo.',
        recommendation: 'Erken başlanan SSRI tedavisi (Essitalopram veya Sertralin) hem depresyonu düzeltir hem de nöroplastisiteyi destekler.'
      },
      {
        label: 'Normal Basınçlı Hidrosefali (NPH / Hakim Triadı)',
        description: 'Triad: 1. Yürüme bozukluğu (manyetik/apraksik), 2. İdrar inkontinansı, 3. Subkortikal demans.',
        recommendation: 'Tanı: Kraniyal MRG (ventrikülomegali, Evans indeksi >0.3) ve Lomber Ponksiyon Tap Testi (30-50 ml BOS boşaltımı sonrası yürümenin düzelmesi). Tedavi: Şant cerrahisi.'
      }
    ],
    highYieldPearls: [
      'Orbitofrontal korteks lezyonları disinhibisyon, hiperoralite ve fevri davranışlara yol açarken; Dorsolateral prefrontal korteks lezyonları apati, yürütücü işlev bozukluğu ve planlama kaybı yapar.',
      'Anti-NMDA Reseptör Ensefaliti: Genç kadınlarda ani başlayan psikoz, katatoni, ajitasyon, otonom instabilite ve hipoventilasyon ile seyreder. Over teratomu taranmalıdır.'
    ],
    legalOrProtocolReference: 'British Neuropsychiatry Association (BNPA) & International Neuropsychiatric Association'
  },
  {
    id: 'forensic-psychiatry',
    title: 'Adli Psikiyatri ve Türk Hukuk Mevzuatı',
    category: 'Adli Psikiyatri & Hukuk',
    summary: 'Türk Medeni Kanunu (TMK) vesayet ve kısıtlama maddeleri, TMK 432 zorunlu yatış, Türk Ceza Kanunu (TCK) m. 32 ceza ehliyeti, TCK 57 güvenlik tedbirleri ve resmî raporlama ilkeleri.',
    corePrinciples: [
      'Hekim kesin hukuki karar makamı değildir; hekim tıbbi bulguları, hastalığın ayırt etme gücünü ve yönlendirme yeteneğini bildirir, kararı hâkim/mahkeme verir.',
      'Vesayet altına alma (kısıtlama) için resmi sağlık kurulu raporu şarttır (TMK 409).',
      'Koruma amacıyla özgürlüğün kısıtlanması (zorunlu yatış) yalnızca hastanın kendine veya çevreye ağır tehlike oluşturduğu ve başka çare kalmadığı hallerde uygulanır (TMK 432).'
    ],
    clinicalMatrix: [
      {
        label: 'TMK Madde 405 (Akıl Hastalığı / Zayıflığı Nedeniyle Kısıtlama)',
        description: 'İşlerini göremeyen, sürekli yardım gereken veya başkalarının güvenliğini tehlikeye sokan ergin kişi kısıtlanır.',
        recommendation: 'Klinik MSE\'de yönelim, gerçeği değerlendirme, karar verme kapasitesi ve hastalığın sürekliliği belgelenmelidir.'
      },
      {
        label: 'TMK Madde 432 (Koruma Amacıyla Özgürlüğün Kısıtlanması - Zorunlu Yatış)',
        description: 'Akıl hastalığı, akıl zayıflığı, alkol/uyuşturucu madde bağımlılığı nedeniyle toplum için tehlike oluşturan ve bakımı başka türlü sağlanamayan kişinin kuruma yerleştirilmesi.',
        recommendation: 'Acil serviste güvenlik riski varsa hekim geçici tutma kararı verebilir ve derhal Sulh Hukuk Mahkemesine bildirim yapılır.'
      },
      {
        label: 'TCK Madde 32 (Ceza Sorumluluğu)',
        description: '1. Fıkra: Fiilin hukuki anlam ve sonuçlarını algılayamayan veya davranışlarını yönlendirme yeteneği önemli derecede azalmış kişiye CEZA VERİLMEZ, TCK 57 uyarınca Yüksek Güvenlikli Sağlık Kurumunda tedavi uygulanır.',
        recommendation: 'Suçun doğrudan psikotik delüzyonun etkisiyle işlenip işlenmediği (illiyet bağı) adli psikiyatrik muayenede kanıtlanmalıdır.'
      }
    ],
    highYieldPearls: [
      'TCK Madde 34: İradi olarak alınan alkol veya uyuşturucu madde etkisi altında işlenen suçlarda ceza sorumluluğu TAMDIR (kusur azalmaz).',
      'Resmi raporlarda "Hasta vesayet altına alınmalıdır" gibi yargısal emir dili yerine; "Hastalığı nedeniyle kendi işlerini görecek durumda olmadığı, fiil ehliyetini kaybettiği ve Türk Medeni Kanunu hükümlerince vesayet altına alınmasının tıbben uygun olduğu" şeklinde klinik görüş bildirilmelidir.'
    ],
    legalOrProtocolReference: 'Türk Medeni Kanunu (4721 sayılı Kanun) & Türk Ceza Kanunu (5237 sayılı Kanun)'
  }
];
