export interface PsychotherapyItem {
  id: string;
  name: string;
  shortName: string;
  primaryIndications: string[];
  keyMechanisms: string[];
  coreTechniques: {
    techniqueName: string;
    description: string;
    exampleInClinic: string;
  }[];
  durationAndStructure: string;
  clinicalPearls: string[];
}

export const PSYCHOTHERAPY_DATA: PsychotherapyItem[] = [
  {
    id: 'cbt',
    name: 'Bilişsel Davranışçı Terapi (BDT)',
    shortName: 'BDT / CBT',
    primaryIndications: ['Majör Depresif Bozukluk', 'Yaygın Anksiyete', 'Panik Bozukluk', 'OKB', 'Sosyal Anksiyete', 'İnsomni (BDT-I)'],
    keyMechanisms: [
      'Bilişsel Üçlü (Kendilik, Dünya ve Gelecek algısı)',
      'Otomatik olumsuz düşüncelerin ve bilişsel çarpıtmaların (ya hep ya hiç, felaketleştirme) yakalanması',
      'Davranışsal aktivasyon ve kaçınma döngülerinin kırılması'
    ],
    coreTechniques: [
      {
        techniqueName: 'Düşünce Kaydı (Thought Record - Sokratik Sorgulama)',
        description: 'Tetikleyici durum, otomatik düşünce, duygu ve düşünceyi destekleyen/çürüten kanıtların listelenmesi.',
        exampleInClinic: '"Bu düşüncenin %100 doğru olduğuna dair elinizdeki somut kanıt nedir? En kötü ne olabilir ve bununla nasıl başa çıkarsınız?"'
      },
      {
        techniqueName: 'Davranışsal Aktivasyon (Behavioral Activation)',
        description: 'Anhedoni ve geri çekilmeyi kırmak için keyif ve ustalık (mastery & pleasure) veren etkinliklerin planlanması.',
        exampleInClinic: 'Haftalık etkinlik çizelgesi hazırlayarak hastanın yataktan çıkıp küçük görevleri puanlaması.'
      },
      {
        techniqueName: 'Maruz Bırakma (Exposure) & Tepki Önleme (ERP)',
        description: 'Kaygı uyandıran uyaranla kaçmadan yüzleşme ve kompulsif rahatlama davranışını engelleme.',
        exampleInClinic: 'OKB\'de bulaşma korkusuyla elleri yıkamadan 30 dakika bekleyerek anksiyetenin doğal sönmesini (habitüasyon) deneyimleme.'
      }
    ],
    durationAndStructure: 'Genellikle 12 - 20 seans (haftada 1 seans, 50 dakika). Yapılandırılmış, ev ödevi odaklı ve "şimdi ve burada" ilkesine dayalıdır.',
    clinicalPearls: [
      'Hafif-orta şiddette depresyonda tek başına BDT, farmakoterapi kadar etkilidir ve nüks oranları ilaç kesilmesine kıyasla daha düşüktür.',
      'Ağır psikotik veya melankolik depresyonda hasta biyolojik olarak bilişsel yeniden yapılandırmaya odaklanamaz; önce farmakoterapi ile nöroplastisite sağlanmalıdır.'
    ]
  },
  {
    id: 'dbt',
    name: 'Diyalektik Davranış Terapisi (DBT)',
    shortName: 'DBT',
    primaryIndications: ['Sınırda (Borderline) Kişilik Bozukluğu', 'Kronik İntihar Düşüncesi & Kendine Zarar Verme', 'Şiddetli Duygu Düzensizliği', 'Yeme Bozuklukları'],
    keyMechanisms: [
      'Biyososyal Model (Biyolojik duygusal kırılganlık + Geçersiz kılıcı çevre)',
      'Diyalektik felsefe: Koşulsuz Kabul (Validasyon) ile Değişimin sentezi',
      'Duygu regülasyon kapasitesinin ve sıkıntıya toleransın artırılması'
    ],
    coreTechniques: [
      {
        techniqueName: 'Bilinçli Farkındalık (Mindfulness - Akıllı Zihin / Wise Mind)',
        description: 'Duygusal zihin ile Mantıklı zihnin dengelenerek sezgisel bilgeliğe ulaşılması.',
        exampleInClinic: '"Şu an hissettiğiniz öfkeyi yargılamadan sadece vücudunuzda nerede hissettiğinizi gözlemleyin."'
      },
      {
        techniqueName: 'TIPP Becerileri (Kriz Anında Sıkıntı Toleransı)',
        description: 'Sıcaklık (Temperature - yüze buz uygulama), Yoğun Egzersiz (Intense exercise), Tempolu Solunum (Paced breathing), Aşamalı Kas Gevşetme (Paired muscle relaxation).',
        exampleInClinic: 'Yoğun kendine zarar verme dürtüsü geldiğinde yüze 30 saniye buzlu su tutarak dalış refleksini (parasempatik aktivasyonu) tetikleme.'
      },
      {
        techniqueName: 'DEAR MAN (Kişilerarası Etkililik)',
        description: 'İlişkilerde haklarını talep etme ve çatışmaları sınır koyarak yönetme akronimi.',
        exampleInClinic: 'Describe (Tanımla), Express (İfade et), Assert (Net isteğini söyle), Reinforce (Ödüllendir).'
      }
    ],
    durationAndStructure: 'Kapsamlı DBT: Bireysel terapi (haftada 1) + DBT Beceri Eğitimi Grubu (haftada 2 saat) + Telefonla kriz koçluğu. En az 1 yıl sürer.',
    clinicalPearls: [
      'Sınırda kişilikte intihar girişimlerini ve acil servis başvurularını %50\'den fazla azalttığı randomize kontrollü çalışmalarla kanıtlanmış tek altın standart psikoterapidir.'
    ]
  },
  {
    id: 'act',
    name: 'Kabul ve Kararlılık Terapisi (ACT)',
    shortName: 'ACT',
    primaryIndications: ['Kronik Ağrı / Somatizasyon', 'Dirençli Anksiyete & Depresyon', 'Psikozda Semptom Başa Çıkma', 'Tükenmişlik'],
    keyMechanisms: [
      'Psikolojik Esneklik Modeli (Hexaflex)',
      'İstenmeyen içsel deneyimlerle (acı, kaygı) savaşmak yerine onları kabul etme',
      'Bilişsel Ayrışma (Cognitive Defusion): Düşüncelerin gerçek değil, sadece birer zihinsel olay olduğunun fark edilmesi'
    ],
    coreTechniques: [
      {
        techniqueName: 'Bilişsel Ayrışma (Defusion)',
        description: 'Düşünceyle özdeşleşmek yerine düşünceyi dışarıdan bir yaprak, bulut gibi izlemek.',
        exampleInClinic: '"Ben yetersizim" demek yerine, "Şu an zihnimin bana yetersiz olduğuma dair bir hikaye anlattığını fark ediyorum" cümlesini kullanmak.'
      },
      {
        techniqueName: 'Değerler Odaklı Eylem (Committed Action)',
        description: 'Kaygı ve korku var olsa bile kişinin kendi temel değerleri (aile, üretim, dürüstlük) doğrultusunda adım atması.',
        exampleInClinic: '"Korkunuz sizinle aynı arabada arka koltukta oturabilir, ama direksiyonu onun eline vermek zorunda değilsiniz."'
      }
    ],
    durationAndStructure: '8 - 16 seanslık esnek format. Metaforlar ve yaşantısal egzersizler ağırlıktadır.',
    clinicalPearls: [
      'ACT belirtiyi doğrudan yok etmeyi hedeflemez; belirti devam etse dahi kişinin yaşam kalitesini ve anlamlı eylemlerini artırarak belirtinin gücünü kırar.'
    ]
  }
];

export interface NeuromodulationProcedure {
  name: string;
  modality: 'EKT (Elektrokonvülsif Terapi)' | 'rTMS (Tekrarlayan Transkraniyal Manyetik Uyarım)' | 'Ketamin & Esketamin';
  keyIndications: string[];
  mechanismOfAction: string;
  protocolAndDosing: string;
  efficacyRate: string;
  adverseEffectsAndManagement: string;
  contraindications: string[];
}

export const NEUROMODULATION_DATA: NeuromodulationProcedure[] = [
  {
    name: 'Elektrokonvülsif Terapi (EKT)',
    modality: 'EKT (Elektrokonvülsif Terapi)',
    keyIndications: [
      'Ağır Psikotik veya Katatonik Depresyon',
      'Yüksek İntihar Riski ve Oral Alımı Tamamen Reddeden Hastalar',
      'Malign Katatoni ve Nöroleptik Malign Sendrom',
      'İlaca Dirençli Ağır Bipolar Manik Atak',
      'Gebelikte ağır psikiyatrik tablolarda en güvenli acil seçenek'
    ],
    mechanismOfAction: 'Genel anestezi altında kraniyuma uygulanan elektrik akımıyla jeneralize epileptik nöbet oluşturulması. BDNF ve nöroplastisite patlaması, nörotransmitter duyarlılığının sıfırlanması ve limbik devrelerin senkronizasyonu.',
    protocolAndDosing: 'Anestezi: Propofol/Etomidat + Kas gevşetici: Süksinilkolin (0.5-1 mg/kg). Elektrot yerleşimi: Unilateral (daha az hafıza yan etkisi) veya Bilateral (daha hızlı yanıt). Hedef nöbet süresi: Motor nöbet ≥20-25 sn, EEG nöbeti ≥30 sn. Haftada 2-3 seans, toplam 6-12 seans.',
    efficacyRate: '%70 - 85 yanıt oranı (Psikiyatrideki en yüksek etkinlik oranına sahip tedavidir).',
    adverseEffectsAndManagement: 'Post-iktal konfüzyon (saatler içinde geriler), anterograd ve retrograd amnezi (haftalar/aylar içinde büyük oranda toparlar), baş ağrısı ve kas ağrıları (parasetamol verilir).',
    contraindications: [
      'Mutlak kontrendikasyon YOKTUR.',
      'Rölatif yüksek riskler: İntrakraniyal kitle ve artmış KİBAS (fıtıklaşma riski), yakın zamanda geçirilmiş MI (<3 ay), serebral anevrizma, kontrolsüz feokromositoma.'
    ]
  },
  {
    name: 'Tekrarlayan Transkraniyal Manyetik Uyarım (rTMS)',
    modality: 'rTMS (Tekrarlayan Transkraniyal Manyetik Uyarım)',
    keyIndications: [
      'Tedaviye Dirençli Majör Depresif Bozukluk (en az 1-2 antidepresana yanıtsız)',
      'Obsesif Kompulsif Bozukluk (OKB - Derin dTMS başlığı ile)',
      'Antidepresan yan etkilerini tolere edemeyen hastalar'
    ],
    mechanismOfAction: 'Zamanla değişen güçlü manyetik alan darbeleri (1.5 - 3 Tesla) ile kortekste elektriksel akım indüklenmesi. Sol DLPFC (Dorsolateral Prefrontal Korteks) 10-20 Hz ile uyarılır (hipoaktiviteyi düzeltir); Sağ DLPFC 1 Hz ile inhibe edilir.',
    protocolAndDosing: 'Anestezi GEREKMEZ, hasta uyanıktır. Seans süresi: Klasik protokolde 20-37 dakika; modern iTBS (intermittent theta-burst) protokolünde sadece 3 dakika! Haftada 5 gün, 4-6 hafta boyunca (toplam 20-30 seans).',
    efficacyRate: '%50 - 60 klinik yanıt, %30 - 35 tam remisyon.',
    adverseEffectsAndManagement: 'Kafa derisinde uygulama yerinde geçici batma/ağrı (%20-30), hafif gerilim tipi baş ağrısı. Nöbet tetikleme riski son derece nadirdir (<1/10.000).',
    contraindications: [
      'Baş/boyun bölgesinde ferromanyetik metal implantlar (koklear implant, anevrizma klipleri, mermi çekirdeği vb.). Dental dolgular engel değildir.',
      'İntrakraniyal elektrotlar veya kalp pili (göğüs mesafesine göre değerlendirilir).'
    ]
  },
  {
    name: 'İntranazal Esketamin (Spravato) ve İV Ketamin',
    modality: 'Ketamin & Esketamin',
    keyIndications: [
      'Tedaviye Dirençli Depresyon (TRD)',
      'Akut İntihar Düşüncesi veya Davranışı Olan Depresyon Hastaları (Acil antisuimodal etki)'
    ],
    mechanismOfAction: 'Non-kompetitif NMDA reseptör antagonizması. GABAerjik internöronların disinhibisyonu sonucu ani glutamat dalgası ve AMPA reseptör aktivasyonu; dakikalar/saatler içinde mTOR yolağını tetikleyerek yeni sinaptik bağlantılar oluşturur.',
    protocolAndDosing: 'Spravato (Esketamin): 28 mg\'lık nazal cihazlar (56 mg veya 84 mg doz). Uygulama sonrası hasta klinikte EN AZ 2 SAAT tansiyon ve disosiasyon takibinde tutulmalıdır. İlk 4 hafta: Haftada 2 gün; 5-8. haftalar: Haftada 1 gün; ardından 2 haftada bir idame.',
    efficacyRate: 'Uygulamadan 4 ila 24 saat sonra hızla başlayan antidepresan yanıt (%60-70).',
    adverseEffectsAndManagement: 'Geçici disosiasyon (kendini bedeninden ayrılmış hissetme - 60-90 dk içinde geçer), kan basıncında geçici yükselme (ortalama +15-20 mmHg), bulantı, baş dönmesi.',
    contraindications: [
      'Anevrizmal vasküler hastalık (torasik/abdominal aort anevrizması, intrakraniyal anevrizma)',
      'Geçirilmiş intraserebral kanama öyküsü',
      'Kontrolsüz ağır hipertansiyon'
    ]
  }
];

export interface SideEffectManagement {
  syndrome: string;
  culpritDrugs: string[];
  clinicalPresentation: string;
  firstLineAction: string;
  pharmacologicalAntidote: string;
}

export const SIDE_EFFECT_MANAGEMENT_DATA: SideEffectManagement[] = [
  {
    syndrome: 'Akut Distonik Reaksiyon',
    culpritDrugs: ['Yüksek potensli tipik antipsikotikler (Haloperidol, Flufenazin)', 'Risperidon', 'Metoklopramid'],
    clinicalPresentation: 'İlaç alımından sonraki ilk 24-72 saatte ani başlayan boyun kasılması (tortikolis), gözlerin yukarı dikilmesi (okülojirik kriz), çene kilitlenmesi veya laringospazm.',
    firstLineAction: 'Hasta ve yakını sakinleştirilir (psikotik tablo sanılmamalıdır). Hava yolu açıklığı kontrol edilir.',
    pharmacologicalAntidote: 'BİPERİDEN (Akineton) 5 mg IM veya yavaş IV enjeksiyon (dakikalar içinde dramatik olarak çözer). Gerekirse 30 dk sonra tekrarlanır. Ardından 3-7 gün oral Biperiden (2-4 mg/gün) profilaksisi verilir.'
  },
  {
    syndrome: 'Akatizi (İçsel Huzursuzluk & Motor Yerinde Duramama)',
    culpritDrugs: ['Aripiprazol (özellikle hızlı titrasyonda)', 'Haloperidol', 'Risperidon', 'Lurasidon'],
    clinicalPresentation: 'Bacaklarda dayanılmaz huzursuzluk hissi, sürekli volta atma, oturunca ayağını sallama. HASTA İÇSEL ÇILGINLIK VE AJİTASYON TARİF EDER (sıklıkla psikotik ajitasyonla karıştırılıp antipsikotik dozu artırılır ve intihar riski fırlar!).',
    firstLineAction: 'Antipsikotik dozu derhal azaltılır veya daha düşük akatizi riskli ajana (Ketiapin, Olanzapin) geçilir.',
    pharmacologicalAntidote: '1. Tercih: PROPRANOLOL (20 - 80 mg/gün bölünmüş dozlarda - bradikardi/astım kontrolü ile). 2. Tercih: Kısa süreli düşük doz Benzodiazepin (Lorazepam 1-2 mg) veya Siproheptadin / Mirtazapin (7.5-15 mg).'
  },
  {
    syndrome: 'Antipsikotik Kaynaklı Parkinsonizm',
    culpritDrugs: ['Haloperidol', 'Yüksek doz Risperidon (>4-6 mg)', 'Paliperidon'],
    clinicalPresentation: 'Bradikinezi (hareketlerde yavaşlama), yüzde donuk ifade (maske yüz), küçük adımlarla yürüme, dinlenim tremoru (para sayma tremoru), dişli çark rijiditesi.',
    firstLineAction: 'Antipsikotik dozu düşürülür.',
    pharmacologicalAntidote: 'Oral BİPERİDEN (2 - 6 mg/gün bölünmüş) veya AMANTADİN (100 - 200 mg/gün). 3 ay sonra ilacın kesilmesi denenmelidir (kalıcı antikolinerjik bilişsel zararı önlemek için).'
  },
  {
    syndrome: 'Tardif Diskinezi (TD)',
    culpritDrugs: ['Yıllarca süren tipik ve atipik antipsikotik kullanımı (özellikle yaşlı kadın hastalar)'],
    clinicalPresentation: 'Ağız, dil ve dudaklarda istemsiz çiğneme, dudak şapırdatma, dil çıkarma (fly-catcher tongue), parmaklarda piyano çalma hareketleri. Uykuda kaybolur, stresle artar.',
    firstLineAction: 'Antipsikotik dozu KLOZAPİNe veya ketiapine çevrilmelidir. DİKKAT: Antikolinerjikler (Biperiden) tardif diskineziyi DAHA DA KÖTÜLEŞTİRİR!',
    pharmacologicalAntidote: 'VMAT-2 İnhibitörleri: DEUTETRABENAZİN veya VALBENAZİN (FDA onaylı altın standart). Ulaşılamıyorsa Yüksek doz E Vitamini veya Ginkgo Biloba.'
  },
  {
    syndrome: 'Hiperprolaktinemi & Galaktore / Amenore',
    culpritDrugs: ['Risperidon', 'Paliperidon', 'Amisülprid', 'Haloperidol'],
    clinicalPresentation: 'Kadınlarda memeden süt gelmesi (galaktore), adet kesilmesi (amenore), infertilite, uzun vadede osteoporoz; erkeklerde jinekomasti, libido kaybı ve erektil disfonksiyon.',
    firstLineAction: 'Serum Prolaktin düzeyi ölçülür (>200 ng/mL ise prolaktinoma dışlamak için Hipofiz MRG istenir).',
    pharmacologicalAntidote: 'Antipsikotik ARİPİPRAZOL (düşük doz 2.5-5 mg augmentasyonu prolaktini hızla düşürür; D2 parsiyel agonizması sayesinde) veya Ketiapine geçiş.'
  }
];
