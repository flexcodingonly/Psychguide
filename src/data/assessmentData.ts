export interface InterviewGuideline {
  phase: string;
  title: string;
  goals: string[];
  keyQuestions: string[];
  clinicalPearls: string[];
}

export const PSYCHIATRIC_INTERVIEW_GUIDELINES: InterviewGuideline[] = [
  {
    phase: '1. Karşılama ve Çerçeve (0-5. dk)',
    title: 'Güven Ortamı, Terapötik İttifak ve Çerçevenin Çizilmesi',
    goals: [
      'Hastanın kaygısını azaltmak ve görüşme amacını netleştirmek',
      'Gizlilik sınırlarını (kendine veya başkasına doğrudan zarar hariç) bildirmek',
      'Görüşme süresini (örn: 45-50 dakika) baştan tanımlamak'
    ],
    keyQuestions: [
      '"Sizi bugün buraya getiren temel neden nedir? Neler yaşıyorsunuz?"',
      '"Kendi isteğinizle mi geldiniz, yoksa bir yakınınızın ısrarı ile mi?"',
      '"Bugünkü görüşmemizden beklentiniz nedir?"'
    ],
    clinicalPearls: [
      'İlk 3-5 dakika hastanın sözünü kesmeden, açık uçlu sorularla serbestçe konuşmasına izin verin; tanısal ipuçlarının çoğu bu kesintisiz spontan anlatımda gizlidir.',
      'Paranoid veya kuşkucu hastalarda doğrudan göz temasını uzun süre sabitlemekten ve arkası dönük not almaktan kaçının.'
    ]
  },
  {
    phase: '2. Şimdiki Hastalık Öyküsü (HPI)',
    title: 'Şikayetlerin Başlangıcı, Tetikleyiciler ve Seyri',
    goals: [
      'Belirtilerin akut mu sinsi mi başladığını belirlemek',
      'Yaşam olayları, kayıplar, travmalar veya madde kullanımıyla zamansal ilişkiyi kurmak',
      'Önceki dönemdeki en iyi işlevsellik düzeyini (premorboid durum) anlamak'
    ],
    keyQuestions: [
      '"Bu şikayetler tam olarak ne zaman başladı? Öncesinde hayatınız nasıldı?"',
      '"Belirtiler günün belirli saatlerinde değişiyor mu (sabahları daha mı kötü)?"',
      '"İş, okul ve sosyal ilişkilerinizi bu durum nasıl etkiledi?"'
    ],
    clinicalPearls: [
      'Depresyon sorgularken biyolojik ve nörovejetatif belirtileri (erken sabah uyanması, iştah kaybı, libido azalması, diurnal duygudurum dalgalanması) mutlaka spesifik olarak sorgulayın.'
    ]
  },
  {
    phase: '3. Psikiyatrik Özgeçmiş ve Soygeçmiş',
    title: 'Geçmiş Epizotlar, İlaç Yanıtları ve Genetik Yük',
    goals: [
      'Önceki depresif, manik veya psikotik dönemleri ve hastane yatışlarını ortaya çıkarmak',
      'Daha önce kullanılan psikotrop ilaçlar, dozları ve yetersiz yanıt/yan etki nedenleri',
      'Birinci ve ikinci derece akrabalarda intihar, alkol/madde veya psikiyatrik tanı öyküsü'
    ],
    keyQuestions: [
      '"Daha önce benzer bir dönem yaşadınız mı? O dönemde ne tür tedaviler gördünüz?"',
      '"Hiç 3-4 gün boyunca çok az uyuyup kendinizi aşırı enerjik, para harcayan veya projeler üreten hissettiğiniz oldu mu (hipomani taraması)?"',
      '"Ailenizde veya akrabalarınızda ruhsal tedavi gören veya canına kıyan oldu mu?"'
    ],
    clinicalPearls: [
      'Unipolar depresyon tanısıyla gelen her hastada mutlaka geçmişte hipomani (aşırı konuşkanlık, artmış libido, hedefe yönelik aşırı aktivite) taranmalıdır; aksi halde başlanacak antidepresan manik kaymaya veya hızlı döngülülüğe yol açar.'
    ]
  },
  {
    phase: '4. Tıbbi Özgeçmiş ve Madde Taraması',
    title: 'Organik Komorbiditeler, İlaçlar ve Madde Kullanımı',
    goals: [
      'Tiroid disfonksiyonu, nörolojik hastalıklar (epilepsi, inme), diyabet ve kardiyak durumları saptamak',
      'Reçeteli ve reçetesiz tüm ilaçları (steroidler, beta-blokerler, oral kontraseptifler) sorgulamak',
      'Alkol, esrar, kokain, amfetamin, kafein ve nikotin miktarını yargılayıcı olmayan dille netleştirmek'
    ],
    keyQuestions: [
      '"Düzenli kullandığınız herhangi bir tansiyon, guatr veya mide ilacı var mı?"',
      '"Gerginliği yatıştırmak veya uyumak için alkol ya da başka maddelerden yararlanıyor musunuz?"'
    ],
    clinicalPearls: [
      'Madde kullanımını "Kullanıyor musunuz?" yerine normalleştirici soru kalıbıyla sorun: "Haftada kaç birim alkol alırsınız?" veya "Arkadaş ortamında esrar veya benzeri maddeler denediğiniz oldu mu?"'
    ]
  }
];

export interface WorkupPanel {
  panelName: string;
  indication: string;
  mandatoryTests: {
    test: string;
    rationale: string;
  }[];
  extendedTests: {
    test: string;
    rationale: string;
  }[];
  neuroimagingAndEeg: {
    modality: string;
    indicationRule: string;
  }[];
}

export const ORGANIC_WORKUP_DATA: WorkupPanel[] = [
  {
    panelName: 'İlk Psikotik Atak (FEP - First Episode Psychosis)',
    indication: 'Hayatında ilk kez psikotik semptomlar (hezeyan, halüsinasyon, dezorganizasyon) gösteren hasta.',
    mandatoryTests: [
      { test: 'Tam Kan Sayımı (Hemogram)', rationale: 'Enfeksiyon, anemi ve lösemi/lenfoma taraması' },
      { test: 'Serum Elektrolitleri (Na, K, Ca, Mg)', rationale: 'Hiponatremi, hiperkalsemi (psikoz ve konfüzyon yapabilir)' },
      { test: 'Açlık Kan Şekeri, Üre, Kreatinin', rationale: 'Üremi, diyabetik ketoasidoz ve böbrek fonksiyonu' },
      { test: 'Karaciğer Fonksiyon Testleri (AST, ALT, Bilirubin)', rationale: 'Hepatik ensefalopati ve antipsikotik öncesi bazal değer' },
      { test: 'TSH ve Serbest T4', rationale: 'Miksödem deliryumu, hipertiroidizm ilişkili psikoz' },
      { test: 'Vitamin B12 ve Folat', rationale: 'Subakut kombine dejenerasyon ve megaloblastik psikoz' },
      { test: 'İdrarda Kapsamlı Madde Toksikolojisi', rationale: 'Sentetik kannabinoid, metamfetamin, kokain intoksikasyonu' },
      { test: 'Sifiliz Serolojisi (VDRL / RPR)', rationale: 'Nörosifiliz (General Parezis) ekarte edilmesi' }
    ],
    extendedTests: [
      { test: 'Anti-TPO / Anti-Tiroglobulin', rationale: 'Hashimoto Ensefalopatisi (Steroid duyarlı ensefalopati)' },
      { test: 'Anti-NMDA Reseptör ve Otoimmün Ensefalit Paneli (BOS/Serum)', rationale: 'Özellikle genç kadın, hızlı başlangıç, disotonomi veya katatoni varsa' },
      { test: 'Serum Seruloplazmin ve 24 Saatlik İdrar Bakırı', rationale: 'Wilson Hastalığı (özellikle <35 yaş, tremor, atipik psikoz, Kayser-Fleischer halkası)' },
      { test: 'HIV Serolojisi (Anti-HIV)', rationale: 'HIV ilişkili nörokognitif bozukluk ve CNS oportunistik enfeksiyonları' }
    ],
    neuroimagingAndEeg: [
      { modality: 'Kraniyal MRG (Kontrastsız & Kontrastlı)', indicationRule: 'İlk psikotik atakta KANITLANMIŞ STANDART: İntrakraniyal kitle, demiyelinizan plaklar veya temporal lob patolojilerini dışlamak için en az bir kez çekilmelidir.' },
      { modality: 'Rutin ve Uyku Yoksunluklu EEG', indicationRule: 'Bilinçte dalgalanma, koku/tat varsanıları (uncinate fits) veya konfüzyon varsa epileptik aktiviteyi dışlamak için istenir.' }
    ]
  },
  {
    panelName: 'Akut Delirium ve Hızlı Bilişsel Yıkım',
    indication: 'Bilinç dalgalanması, akut dikkatsizlik veya günler/haftalar içinde gelişen demansiyel tablo.',
    mandatoryTests: [
      { test: 'Tam İdrar Tetkiki (TİT) ve İdrar Kültürü', rationale: 'Yaşlılarda asemptomatik İYE deliriumun en sık 1. nedenidir' },
      { test: 'Arteriyel / Venöz Kan Gazı (SpO2, pO2, pCO2)', rationale: 'Hipoksi ve hiperkapnik ensefalopati (KOAH alevlenmesi)' },
      { test: 'Elektrolitler & Düzeltilmiş Kalsiyum', rationale: 'Maligniteye bağlı hiperkalsemi veya hiponatremi' },
      { test: 'C-Reaktif Protein (CRP) ve Prokalsitonin', rationale: 'Gizli sepsis ve sistemik enflamasyon' },
      { test: 'EKG', rationale: 'Sessiz miyokard enfarktüsü veya aritmiler' }
    ],
    extendedTests: [
      { test: 'Lomber Ponksiyon (BOS Basıncı, Hücre, Biyokimya, Viral PCR)', rationale: 'Ateş, meninks irritasyon bulguları veya açıklanamayan nörolojik defisit varlığında' },
      { test: 'Otoantikorlar (ANA, Anti-dsDNA, Anti-Ro/La)', rationale: 'Lupus Serebriti (SLE CNS tutulumu)' }
    ],
    neuroimagingAndEeg: [
      { modality: 'Beyin BT (Akut Kontrastsız)', indicationRule: 'Akut fokal nörolojik defisit, kafa travması öyküsü veya antikoagülan kullanan yaşlıda subdural hematomu dışlamak için ilk 1 saatte çekilmelidir.' },
      { modality: 'EEG', indicationRule: 'Non-konvülzif Status Epileptikus (NCSE) şüphesinde (özellikle komatöz veya yanıtsız dalgın yaşlılarda) hayat kurtarıcıdır.' }
    ]
  },
  {
    panelName: 'İlk Manik Atak (İlk Kez Ortaya Çıkan Bipolar Spektrum)',
    indication: 'Hayatında ilk kez aşırı enerjiklik, grandiyözite, uykusuzluk ve psikomotor hızlanma gösteren hasta (özellikle >40 yaş).',
    mandatoryTests: [
      { test: 'İdrar Madde Paneli (Stimülanlar)', rationale: 'Metamfetamin, kokain, reçeteli amfetamin (Adderall/Ritalin kötüye kullanımı)' },
      { test: 'Tiroid Paneli (sT3, sT4, TSH)', rationale: 'Tirotoksikozun manik tabloyu taklit etmesi' },
      { test: 'İlaç Düzeyi Taraması', rationale: 'Kortikosteroid, INH (İzoniyazid) veya dopaminerjik ilaç kullanımı sorgulanması' }
    ],
    extendedTests: [
      { test: 'Otoimmün ve Vaskülit Taraması', rationale: 'Merkezi sinir sistemi vaskülitleri geç başlangıçlı mani ile prezente olabilir' }
    ],
    neuroimagingAndEeg: [
      { modality: 'Kraniyal MRG', indicationRule: '40 yaş üzeri ilk manik atakta sağ hemisfer, frontal veya bazal ganglion lezyonlarını (sekonder mani) dışlamak için ZORUNLUDUR.' }
    ]
  }
];

export interface SuicideRiskAssessmentMatrix {
  riskLevel: 'Düşük Risk' | 'Orta Risk' | 'Yüksek / Kritik Risk';
  clinicalFeatures: string[];
  recommendedAction: string;
  disposition: string;
}

export const SUICIDE_RISK_MATRIX: SuicideRiskAssessmentMatrix[] = [
  {
    riskLevel: 'Düşük Risk',
    clinicalFeatures: [
      'Pasif ölüm isteği ("Keşke uyusam uyanmasam")',
      'Somut plan veya niyet YOK',
      'Belirgin koruyucu faktörler var (çocuklar, inanç, geleceğe dair umut)',
      'İyi sosyal destek ağı ve işbirliği kurabilen hasta'
    ],
    recommendedAction: 'Ayaktan yakın takip randevusu (3-7 gün içinde). Güvenlik planı (Stanley-Brown) oluşturulması. Kriz telefon numaralarının (112, 182) verilmesi. Sınırlı kutuyla ilaç reçetesi.',
    disposition: 'Ayaktan Poliklinik Takibi'
  },
  {
    riskLevel: 'Orta Risk',
    clinicalFeatures: [
      'Aktif intihar düşüncesi var ancak somut eylem planı veya acil niyeti yok',
      'Belirgin umutsuzluk, anhedoni veya kronik fiziksel ağrı',
      'Geçmişte intihar girişimi öyküsü var (ancak son dönemde değil)',
      'Sınırlı koruyucu faktörler'
    ],
    recommendedAction: 'Günübirlik veya 48 saat içinde kontrol. Aile bireylerinin bilgilendirilmesi ve evde öldürücü araçların (ilaçlar, silahlar) kilit altına alınması. Yoğun psikoterapötik destek. Yatış opsiyonu tartışılmalı.',
    disposition: 'Sıkı Ayaktan İzlem veya Gönüllü Yatış Değerlendirmesi'
  },
  {
    riskLevel: 'Yüksek / Kritik Risk',
    clinicalFeatures: [
      'Aktif intihar niyeti ve SOMUT PLAN (yöntem belirlenmiş, veda mektubu, hazırlık yapılmış)',
      'Öldürücü araçlara doğrudan erişim imkanı',
      'Ağır ajitasyon, akatizi, dayanılmaz psişik acı ("psychache")',
      'Psikotik belirtiler (özellikle kendine zarar vermesini emreden işitsel varsanılar)',
      'Sosyal desteğin tamamen yokluğu veya hastanın iletişimi reddetmesi'
    ],
    recommendedAction: 'HASTA ASLA YALNIZ BIRAKILMAZ (tuvalete bile refakatsiz gidemez). Kesici delici aletler uzaklaştırılır. Psikiyatri kliniğine ACİL YATIŞ. Hasta reddederse TMK 432 gereği zorunlu yatış ve adli bildirim.',
    disposition: 'Acil Kapalı Psikiyatri Kliniğine Yatış'
  }
];
