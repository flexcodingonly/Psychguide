export interface AntipsychoticEquivalence {
  genericName: string;
  chlorpromazineEq: number; // mg equivalent to Chlorpromazine 100 mg
  olanzapineEq: number;     // mg equivalent to Olanzapine 5 mg
  sedation: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  epsRisk: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  metabolicRisk: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  prolactinElevation: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük' | 'Düşürür (Agonist)';
}

export const ANTIPSYCHOTIC_EQUIVALENCE_DATA: AntipsychoticEquivalence[] = [
  {
    genericName: 'Klorpromazin (Referans)',
    chlorpromazineEq: 100,
    olanzapineEq: 5,
    sedation: 'Çok Yüksek',
    epsRisk: 'Orta',
    metabolicRisk: 'Yüksek',
    prolactinElevation: 'Orta'
  },
  {
    genericName: 'Haloperidol',
    chlorpromazineEq: 2,
    olanzapineEq: 2,
    sedation: 'Düşük',
    epsRisk: 'Çok Yüksek',
    metabolicRisk: 'Düşük',
    prolactinElevation: 'Yüksek'
  },
  {
    genericName: 'Olanzapin',
    chlorpromazineEq: 5,
    olanzapineEq: 5,
    sedation: 'Yüksek',
    epsRisk: 'Düşük',
    metabolicRisk: 'Çok Yüksek',
    prolactinElevation: 'Düşük'
  },
  {
    genericName: 'Risperidon',
    chlorpromazineEq: 2,
    olanzapineEq: 2,
    sedation: 'Orta',
    epsRisk: 'Yüksek',
    metabolicRisk: 'Orta',
    prolactinElevation: 'Çok Yüksek'
  },
  {
    genericName: 'Ketiapin',
    chlorpromazineEq: 150,
    olanzapineEq: 150,
    sedation: 'Çok Yüksek',
    epsRisk: 'Çok Düşük',
    metabolicRisk: 'Yüksek',
    prolactinElevation: 'Çok Düşük'
  },
  {
    genericName: 'Aripiprazol',
    chlorpromazineEq: 7.5,
    olanzapineEq: 7.5,
    sedation: 'Düşük',
    epsRisk: 'Düşük',
    metabolicRisk: 'Düşük',
    prolactinElevation: 'Düşürür (Agonist)'
  },
  {
    genericName: 'Klozapin',
    chlorpromazineEq: 100,
    olanzapineEq: 100,
    sedation: 'Çok Yüksek',
    epsRisk: 'Çok Düşük',
    metabolicRisk: 'Çok Yüksek',
    prolactinElevation: 'Çok Düşük'
  },
  {
    genericName: 'Paliperidon',
    chlorpromazineEq: 2,
    olanzapineEq: 2,
    sedation: 'Düşük',
    epsRisk: 'Orta',
    metabolicRisk: 'Orta',
    prolactinElevation: 'Çok Yüksek'
  },
  {
    genericName: 'Ziprasidon',
    chlorpromazineEq: 40,
    olanzapineEq: 40,
    sedation: 'Orta',
    epsRisk: 'Orta',
    metabolicRisk: 'Düşük',
    prolactinElevation: 'Orta'
  },
  {
    genericName: 'Amisülprid',
    chlorpromazineEq: 100,
    olanzapineEq: 100,
    sedation: 'Düşük',
    epsRisk: 'Orta',
    metabolicRisk: 'Düşük',
    prolactinElevation: 'Çok Yüksek'
  }
];

export interface EmergencyDifferentialRow {
  feature: string;
  serotoninSyndrome: string;
  nms: string;
  anticholinergicToxicity: string;
  malignantHyperthermia: string;
}

export const EMERGENCY_DIFFERENTIAL_DATA: EmergencyDifferentialRow[] = [
  {
    feature: 'Tetikleyici Ajanlar',
    serotoninSyndrome: 'SSRI, SNRI, MAOI, Tramadol, Triptanlar, Linezolid, MDMA',
    nms: 'D2 antagonistleri (Tipik & Atipik Antipsikotikler, Metoklopramid) veya Dopaminerjik ilacın (Levodopa) aniden kesilmesi',
    anticholinergicToxicity: 'Antihistaminikler, Trisiklik Antidepresanlar (TSA), Biperiden, Atropin, Skopolamin',
    malignantHyperthermia: 'Uçucu inhalasyon anestezikleri (Halotan, Sevofluran), Süksinilkolin'
  },
  {
    feature: 'Başlangıç Süresi',
    serotoninSyndrome: 'Hızlı (saatler içinde: <24 saatte gelişir)',
    nms: 'Sinsi ve yavaş (1-3 gün ila 1-2 hafta içinde)',
    anticholinergicToxicity: 'Hızlı (1-2 saat içinde)',
    malignantHyperthermia: 'Peroperatif anında veya dakikalar/saatler içinde'
  },
  {
    feature: 'Kas Tonusu ve Nöromüsküler Bulgular',
    serotoninSyndrome: 'Alt ekstremitede belirgin KLONUS (spontan/oküler), hiperrefleksi, titreme/tremor',
    nms: 'Ağır "Kurşun Boru" (Lead-pipe) jeneralize rijidite, bradikinezi, azalmış refleksler',
    anticholinergicToxicity: 'Miyoklonus veya fasikülasyon olabilir; rijidite YOKTUR',
    malignantHyperthermia: 'Şiddetli jeneralize rijidite (özellikle masseter kas spazmı)'
  },
  {
    feature: 'Pupiller (Göz Bebeği)',
    serotoninSyndrome: 'Midriyatik (Genişlemiş pupil)',
    nms: 'Genellikle normal boyutta',
    anticholinergicToxicity: 'Aşırı genişlemiş ve ışığa yanıtsız midriyazis ("Kör köstebek")',
    malignantHyperthermia: 'Değişken / Normal'
  },
  {
    feature: 'Deri ve Mukozalar',
    serotoninSyndrome: 'AŞIRI TERLEME (Diyaforez), ılık ve nemli cilt',
    nms: 'Soluk, terli (diyaforez) veya kuru',
    anticholinergicToxicity: 'KUPKURU CİLT VE MUKOZALAR, kuru kızarık cilt ("Kırmızı pancar, Kuru kemik")',
    malignantHyperthermia: 'Siyanotik, benekli, terli veya kuru cilt'
  },
  {
    feature: 'Barsak Sesleri',
    serotoninSyndrome: 'HİPERAKTİF barsak sesleri, sulu ishal, karın krampları',
    nms: 'Hipoaktif veya normal barsak sesleri',
    anticholinergicToxicity: 'HİPOAKTİF VEYA KAYBOLMUŞ barsak sesleri, paralitik ileus, idrar retansiyonu',
    malignantHyperthermia: 'Hipoaktif'
  },
  {
    feature: 'Laboratuvar Bulguları',
    serotoninSyndrome: 'Hafif-orta lökositoz ve CK artışı; metabolik asidoz',
    nms: 'AŞIRI YÜKSEK CK (>1.000 - 100.000 U/L), belirgin lökositoz (WBC 15.000-30.000), miyoglobinüri',
    anticholinergicToxicity: 'Genellikle normal biyokimya (ağır olgularda rabdomiyoliz)',
    malignantHyperthermia: 'Aşırı yüksek CK, hiperkalemi, ağır respiratuar ve metabolik asidoz'
  },
  {
    feature: 'Özgül Tedavi / Panzehir',
    serotoninSyndrome: 'İlaçların acil kesilmesi + SİPROHEPTADİN (oral 5-HT2A antagonisti) + Benzodiazepinler + Aktif soğutma',
    nms: 'İlacın kesilmesi + BROMOKRİPTİN (Dopamin agonisti) veya DANTROLEN + Yoğun bakımda agresif hidrasyon',
    anticholinergicToxicity: 'FİZOSTİGMİN (Santral kolinesteraz inhibitörü - EKG\'de QRS <100ms ise) + Soğutma + Kateterizasyon',
    malignantHyperthermia: 'DANTROLEN Sodyum (İV 2.5 mg/kg bolus) + %100 Oksijen + Hiperventilasyon'
  }
];

export interface AntidepressantSwitchStrategy {
  fromClass: string;
  toClass: string;
  strategy: 'Doğrudan Geçiş (Direct Switch)' | 'Çapraz Azaltma (Cross-Taper)' | 'Yıkama Süresi Gerekir (Washout)';
  washoutDays: number;
  instructions: string;
}

export const ANTIDEPRESSANT_SWITCH_DATA: AntidepressantSwitchStrategy[] = [
  {
    fromClass: 'SSRI (Örn. Sertralin, Essitalopram)',
    toClass: 'Başka bir SSRI',
    strategy: 'Doğrudan Geçiş (Direct Switch)',
    washoutDays: 0,
    instructions: 'Düşük-orta dozlarda doğrudan ertesi gün eşdeğer dozda diğer SSRI\'a geçilebilir. Yüksek dozlarda 3-5 gün içinde kademeli azaltılarak geçilmesi önerilir.'
  },
  {
    fromClass: 'SSRI (Fluoksetin hariç)',
    toClass: 'SNRI (Venlafaksin, Duloksetin)',
    strategy: 'Çapraz Azaltma (Cross-Taper)',
    washoutDays: 0,
    instructions: 'İlk ilacın dozu 1-2 hafta içinde yarıya indirilip kesilirken, yeni SNRI ilacı düşük dozda eşzamanlı olarak başlanıp hedef doza titre edilir.'
  },
  {
    fromClass: 'Fluoksetin',
    toClass: 'Herhangi bir Antidepressant (SSRI / SNRI / TSA)',
    strategy: 'Doğrudan Geçiş (Direct Switch)',
    washoutDays: 0,
    instructions: 'Fluoksetinin aktif metaboliti norfluoksetinin yarı ömrü 1-2 hafta olduğundan, fluoksetin kesildiği gün diğer ilaç düşük dozda başlanabilir; fluoksetin kandan yavaşça temizlenirken yeni ilaç titre edilir.'
  },
  {
    fromClass: 'Herhangi bir SSRI / SNRI / TSA',
    toClass: 'MAO İnhibitörü (Moklobemid, Tranilsipromin)',
    strategy: 'Yıkama Süresi Gerekir (Washout)',
    washoutDays: 14,
    instructions: 'ÖLÜMCÜL SEROTONİN SENDROMUNU ÖNLEMEK İÇİN: Standart SSRI ve SNRI\'lar için en az 14 GÜN (2 hafta) tam ilaçsız bekleme süresi şarttır! FLUOKSETİN için ise bu süre EN AZ 5 HAFTA (35 gün) olmalıdır!'
  },
  {
    fromClass: 'MAO İnhibitörü',
    toClass: 'SSRI / SNRI / TSA',
    strategy: 'Yıkama Süresi Gerekir (Washout)',
    washoutDays: 14,
    instructions: 'MAO enziminin vücutta yeniden sentezlenmesi için MAOI kesildikten sonra EN AZ 14 GÜN (Moklobemid için reversibl olduğundan 24-48 saat) beklenmelidir.'
  },
  {
    fromClass: 'SSRI / SNRI',
    toClass: 'Vortioksetin',
    strategy: 'Doğrudan Geçiş (Direct Switch)',
    washoutDays: 0,
    instructions: 'Düşük-orta doz SSRI ertesi gün 10 mg Vortioksetin ile doğrudan değiştirilebilir.'
  }
];

export interface BenzodiazepineEquivalence {
  name: string;
  equivalentDose: number; // mg equivalent to Diazepam 10 mg
  halfLifeHours: string;
  onset: 'Çok Hızlı' | 'Hızlı' | 'Orta' | 'Yavaş';
  activeMetabolite: boolean;
  clinicalUse: string;
}

export const BENZODIAZEPINE_DATA: BenzodiazepineEquivalence[] = [
  {
    name: 'Diazepam (Diazem)',
    equivalentDose: 10,
    halfLifeHours: '20 - 100 saat (metabolitle)',
    onset: 'Hızlı',
    activeMetabolite: true,
    clinicalUse: 'Alkol yoksunluğu, status epileptikus, diğer benzodiazepinlerin kademeli kesilmesinde (Aston protokolü) altın standart.'
  },
  {
    name: 'Alprazolam (Xanax)',
    equivalentDose: 0.5,
    halfLifeHours: '11 - 15 saat',
    onset: 'Çok Hızlı',
    activeMetabolite: false,
    clinicalUse: 'Akut panik atak krizleri. Kısa yarı ömrü ve hızlı etkisi nedeniyle bağımlılık ve tolerans potansiyeli en yüksek ajandır.'
  },
  {
    name: 'Lorazepam (Ativan)',
    equivalentDose: 1,
    halfLifeHours: '10 - 20 saat',
    onset: 'Orta',
    activeMetabolite: false,
    clinicalUse: 'Direkt glukuronidasyonla atılır; karaciğer yetmezliğinde, hepatik sirozda ve yaşlılarda en güvenli benzodiazepindir ("LOT" kuralı: Lorazepam, Oxazepam, Temazepam).'
  },
  {
    name: 'Klonazepam (Rivotril)',
    equivalentDose: 0.5,
    halfLifeHours: '30 - 40 saat',
    onset: 'Orta',
    activeMetabolite: false,
    clinicalUse: 'Mani ajitasyonu, REM uyku davranış bozukluğu, dirençli anksiyete, antikonvülzan profilaksi.'
  }
];

export const CLOZAPINE_ANC_PROTOCOL = {
  title: 'Klozapin Mutlak Nötrofil Sayısı (ANC / ANS) İzlem Protokolü',
  summary: 'Agranülositoz ve nötropeni riskini önlemek için zorunlu laboratuvar kılavuzu.',
  frequency: 'İlk 18 hafta her hafta; 18-52. haftalar 2 haftada bir; 1 yıldan sonra stabilse ayda bir kez ömür boyu.',
  zones: [
    {
      color: 'Yeşil (Normal)',
      ancRange: 'ANC ≥ 1500 /mm³ (Benign Etnik Nötropenisi - BEN olanlarda ≥ 1000)',
      action: 'Tedaviye tam doz devam edilir. Rutin periyodik izleme devam edilir.'
    },
    {
      color: 'Sarı (Hafif Nötropeni)',
      ancRange: 'ANC 1000 - 1499 /mm³ (BEN olanlarda 500 - 999)',
      action: 'Tedaviye devam edilir ancak haftada 3 kez ANC kontrolü yapılır. Enfeksiyon belirtileri (ateş, boğaz ağrısı) yakından taranır. Hematoloji konsültasyonu düşünülür.'
    },
    {
      color: 'Kırmızı (Şiddetli Nötropeni / Agranülositoz)',
      ancRange: 'ANC < 1000 /mm³ (BEN olanlarda < 500)',
      action: 'KLOZAPİN DERHAL KESİLİR! Kesinlikle yeniden başlanmaz (re-challenge kontrendikedir). Hasta koruyucu izolasyona alınır, hematoloji konsültasyonu istenir, G-CSF (Granülosit Koloni Uyarıcı Faktör) tedavisi değerlendirilir.'
    }
  ]
};

export const LITHIUM_LEVEL_PROTOCOL = {
  title: 'Serum Lityum Kan Düzeyi ve Toksisite Yönetim Kılavuzu',
  samplingTime: 'Son dozdan TAM 12 SAAT SONRA (12. saat trough düzeyi) kan alınmalıdır.',
  levels: [
    {
      range: '0.6 - 0.8 mEq/L',
      status: 'Terapötik İdame Hedefi',
      clinicalNote: 'Uzun dönem koruyucu idame tedavisi için optimal aralık. Nörotoksisite ve renal hasar riski düşüktür.'
    },
    {
      range: '0.8 - 1.2 mEq/L',
      status: 'Akut Manik Atak Hedefi',
      clinicalNote: 'Akut taşkın mani tablosunu yatıştırmak için hedeflenen aralık. Yan etkiler (tremor, bulantı) daha sıktır.'
    },
    {
      range: '1.2 - 1.5 mEq/L',
      status: 'Uyarı Eşiği / Sınırda Yüksek',
      clinicalNote: 'Doz ayarlaması gerekir. Yakın takip. İnce tremor kalınlaşabilir, halsizlik, hafif bulantı/kusma.'
    },
    {
      range: '1.5 - 2.0 mEq/L',
      status: 'Hafif - Orta Derece Toksisite',
      clinicalNote: 'KABA EL TREMORU, dizartri (peltek konuşma), ataksi (dengesizlik), nistagmus, hiperrefleksi, belirgin gastrointestinal semptomlar.'
    },
    {
      range: '> 2.0 - 2.5 mEq/L',
      status: 'Ağır Hayatı Tehdit Eden Toksisite',
      clinicalNote: 'Kardiyak aritmiler, hipotansiyon, epileptik nöbetler, koma, oligüri ve böbrek yetmezliği.'
    },
    {
      range: '> 2.5 mEq/L veya semptomatik böbrek yetmezliği',
      status: 'ACİL HEMODİYALİZ ENDİKASYONU',
      clinicalNote: 'Diyalizle lityum hızla kandan temizlenir; hücre içinden kana sekonder geri dönüş (rebound) olabileceğinden seri düzey takibi gerekir.'
    }
  ]
};

export interface QtcRiskItem {
  drug: string;
  drugClass: string;
  credibleMedsCategory: 'Bilinen TdP Riski (Known Risk)' | 'Olası TdP Riski (Possible Risk)' | 'Koşullu TdP Riski (Conditional Risk)';
  meanQcProlongation: string;
  clinicalRecommendation: string;
}

export const QTC_RISK_DATA: QtcRiskItem[] = [
  {
    drug: 'Sitalopram / Essitalopram',
    drugClass: 'SSRI',
    credibleMedsCategory: 'Bilinen TdP Riski (Known Risk)',
    meanQcProlongation: '+10 ila +18 ms (özellikle >40 mg sitalopram veya >20 mg essitalopram)',
    clinicalRecommendation: 'FDA uyarısı: Sitalopram >40 mg/gün (yaşlıda >20 mg) önerilmez. Bazal EKG ve elektrolit (K, Mg) takibi şarttır.'
  },
  {
    drug: 'Haloperidol (özellikle IV)',
    drugClass: 'Tipik Antipsikotik',
    credibleMedsCategory: 'Bilinen TdP Riski (Known Risk)',
    meanQcProlongation: '+15 ila +30 ms (IV formda ölümcül TdP riski çok yüksektir)',
    clinicalRecommendation: 'IV Haloperidol uygulanacaksa sürekli EKG monitörizasyonu zorunludur. Oral ve IM formda risk daha düşüktür.'
  },
  {
    drug: 'Tioridazin / Pimozid / Ziprasidon',
    drugClass: 'Tipik / Atipik Antipsikotik',
    credibleMedsCategory: 'Bilinen TdP Riski (Known Risk)',
    meanQcProlongation: '+15 ila +22 ms',
    clinicalRecommendation: 'Tioridazin yüksek TdP nedeniyle kullanımdan kalkmıştır. Ziprasidon diğer yeni kuşaklara göre daha çok uzatır; kardiyak öyküsü olanda kaçınılmalıdır.'
  },
  {
    drug: 'Trisiklik Antidepresanlar (Amitriptilin, Klomipramin)',
    drugClass: 'TSA',
    credibleMedsCategory: 'Bilinen TdP Riski (Known Risk)',
    meanQcProlongation: '+15 ila +25 ms (ayrıca QRS genişlemesi yapar)',
    clinicalRecommendation: 'Geniş spektrumlu kardiyotoksik etki (Na kanal blokajı). Yaşlıda veya kardiyak hastada SSRI\'lar tercih edilmelidir.'
  },
  {
    drug: 'Ketiapin / Olanzapin / Risperidon',
    drugClass: 'Atipik Antipsikotik',
    credibleMedsCategory: 'Olası TdP Riski (Possible Risk)',
    meanQcProlongation: '+5 ila +12 ms',
    clinicalRecommendation: 'Monoterapide terapötik dozda risk düşüktür. Hipokalemi, hipomagnezemi veya CYP inhibitörleri eşliğinde risk artar.'
  },
  {
    drug: 'Aripiprazol / Lurasidon',
    drugClass: 'Atipik Antipsikotik',
    credibleMedsCategory: 'Koşullu TdP Riski (Conditional Risk)',
    meanQcProlongation: '0 ila +4 ms (Kardiyak açıdan en güvenliler)',
    clinicalRecommendation: 'QTc uzaması riski en düşük antipsikotiklerdir. Kardiyak komorbiditesi olanlarda ilk tercihlerdendir.'
  }
];

export interface RenalHepaticAdjustment {
  drug: string;
  classType: string;
  renalDosing: string;
  hepaticDosing: string;
  keyRule: string;
}

export const RENAL_HEPATIC_DATA: RenalHepaticAdjustment[] = [
  {
    drug: 'Lityum',
    classType: 'Duygudurum Dengeleyici',
    renalDosing: 'CrCl 50-80: %50-75 doz; CrCl 10-50: %25-50 doz; CrCl <10 ise KONTRENDİKE veya diyalizle yakın takip.',
    hepaticDosing: 'Doz ayarlaması gerekmez (tamamen böbrekten değişmeden atılır).',
    keyRule: 'Renal yetmezlikte toksisite ölümcüldür. Sıkı TDM ve GFR takibi zorunludur.'
  },
  {
    drug: 'Valproat (Depakin)',
    classType: 'Duygudurum Dengeleyici',
    renalDosing: 'Doz ayarlaması gerekmez (serbest fraksiyon artabilir, serbest düzey bakılabilir).',
    hepaticDosing: 'Akut hepatit, belirgin karaciğer yetmezliği veya Child-Pugh C\'de KESİNLİKLE KONTRENDİKEDİR.',
    keyRule: 'Hepatotoksisite ve hiperamonyemi riski nedeniyle KCFT (AST/ALT/Bilirubin) rutin taranmalıdır.'
  },
  {
    drug: 'Paliperidon',
    classType: 'Atipik Antipsikotik',
    renalDosing: 'CrCl 50-80: Maks 6 mg/gün; CrCl 10-50: Maks 3 mg/gün; CrCl <10 ise önerilmez.',
    hepaticDosing: 'Hafif-orta yetmezlikte doz ayarı gerekmez; Child-Pugh C\'de dikkatli olunmalıdır.',
    keyRule: '%60 böbrekten değişmeden atılır; risperidona kıyasla renal fonksiyona daha bağımlıdır.'
  },
  {
    drug: 'Duloksetin',
    classType: 'SNRI',
    renalDosing: 'CrCl <30 ml/dk (Son dönem böbrek hastalığı) durumunda KULLANILMAMALIDIR.',
    hepaticDosing: 'Kronik karaciğer hastalığı veya sirozda KESİNLİKLE KONTRENDİKEDİR.',
    keyRule: 'Hepatik yetmezlikte plazma konsantrasyonu aşırı yükselir ve karaciğer hasarını tetikleyebilir.'
  },
  {
    drug: 'Gabapentin / Pregabalin',
    classType: 'GABA Analoğu / Anksiyolitik',
    renalDosing: 'CrCl <60 ml/dk\'da doz %50; CrCl <30\'da %75 azaltılmalıdır. Diyaliz hastalarında diyaliz sonrası ek doz verilir.',
    hepaticDosing: 'Karaciğerde metabolize olmaz; hepatik yetmezlikte tam doz verilebilir.',
    keyRule: 'Böbrekten atılır. Yaşlıda doz azaltılmazsa miyoklonus, derin sedasyon ve solunum arresti gelişebilir.'
  },
  {
    drug: 'Benzodiazepinler (Lorazepam / Oksazepam)',
    classType: 'Benzodiazepin',
    renalDosing: 'Aktif metaboliti olmayan (Lorazepam) tercih edilmeli, orta dozlar verilmelidir.',
    hepaticDosing: 'Karaciğer yetmezliğinde tek güvenli grup (LOT: Lorazepam, Oxazepam, Temazepam).',
    keyRule: 'Diazepam ve klonazepam gibi CYP\'ye bağımlı ve uzun etkili BZD\'ler sirozda hepatik komayı tetikler.'
  }
];

export interface CypMatrixRow {
  enzyme: string;
  majorSubstrates: string[];
  strongInhibitors: string[];
  strongInducers: string[];
  clinicalSignificance: string;
}

export const CYP_MATRIX_DATA: CypMatrixRow[] = [
  {
    enzyme: 'CYP1A2',
    majorSubstrates: ['Klozapin', 'Olanzapin', 'Duloksetin', 'Agomelatin', 'Teofilin'],
    strongInhibitors: ['Fluvoksamin', 'Siprofloksasin (Cipro)'],
    strongInducers: ['Tütün / Sigara dumanı (Polisiklik aromatik hidrokarbonlar)', 'Karbamazepin'],
    clinicalSignificance: 'Sigarayı bırakan hastada klozapin düzeyi %50-100 fırlar (toksisite riski). Fluvoksamin + Klozapin kombinasyonu ölümcüldür.'
  },
  {
    enzyme: 'CYP2D6',
    majorSubstrates: ['Risperidon', 'Aripiprazol', 'Haloperidol', 'Venlafaksin', 'Atomoksetin', 'Metoprolol'],
    strongInhibitors: ['Fluoksetin', 'Paroksetin', 'Bupropion', 'Kinidin'],
    strongInducers: ['Klasik olarak indüklenemez (Genetik polimorfizm esastır: Yavaş / Hızlı metabolize ediciler)'],
    clinicalSignificance: 'Fluoksetin veya Paroksetin alan hastaya Risperidon eklenirse belirgin EPS ve hiperprolaktinemi ortaya çıkar.'
  },
  {
    enzyme: 'CYP3A4',
    majorSubstrates: ['Ketiapin', 'Aripiprazol', 'Zolpidem', 'Alprazolam', 'Midazolam', 'Sertralin'],
    strongInhibitors: ['Ketokonazol / İtrakonazol', 'Klaritromisin', 'Greyfurt suyu'],
    strongInducers: ['Karbamazepin', 'Rifampisin', 'Sarı Kantaron (St. John\'s Wort)', 'Fenitoin'],
    clinicalSignificance: 'Vücuttaki ilaçların %50\'si bu enzimle yıkılır. Karbamazepin başlandığında Ketiapin seviyesi %80 düşer, yetersiz yanıt oluşur.'
  },
  {
    enzyme: 'CYP2C19',
    majorSubstrates: ['Sitalopram', 'Essitalopram', 'Sertralin', 'Diazepam'],
    strongInhibitors: ['Fluvoksamin', 'Omeprazol / Esomeprazol', 'Flukonazol'],
    strongInducers: ['Rifampisin', 'Karbamazepin'],
    clinicalSignificance: 'Omeprazol (Proton pompası inhibitörü) alan hastada sitalopram kan düzeyi 2 katına çıkar; QTc uzaması riski katlanır.'
  }
];

export const METABOLIC_MONITORING_PROTOCOL = {
  title: 'Antipsikotik İlaçlarda Metabolik Sendrom İzlem Takvimi (ADA / APA)',
  description: 'İkinci kuşak antipsikotiklerde kilo alımı, diyabet ve dislipidemi tarama protokolü.',
  schedule: [
    { parameter: 'Kişisel & Ailevi Öykü', baseline: 'Var', week4: '-', week8: '-', week12: '-', annually: 'Yılda bir' },
    { parameter: 'Kilo & Vücut Kitle İndeksi (BMI)', baseline: 'Var', week4: 'Var', week8: 'Var', week12: 'Var', annually: '3 ayda bir' },
    { parameter: 'Bel Çevresi', baseline: 'Var', week4: '-', week8: '-', week12: '-', annually: 'Yılda bir' },
    { parameter: 'Kan Basıncı (Tansiyon)', baseline: 'Var', week4: '-', week8: '-', week12: 'Var', annually: 'Yılda bir' },
    { parameter: 'Açlık Kan Şekeri (AKŞ / HbA1c)', baseline: 'Var', week4: '-', week8: '-', week12: 'Var', annually: 'Yılda bir' },
    { parameter: 'Açlık Lipid Profili (Kolesterol, Trigliserid)', baseline: 'Var', week4: '-', week8: '-', week12: 'Var', annually: 'Yılda bir (riskte 6 ayda bir)' }
  ]
};

