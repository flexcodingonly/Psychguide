export interface EmergencyTopic {
  id: string;
  title: string;
  category: 'Ajitasyon & Şiddet' | 'Katatoni' | 'Delirium' | 'İntihar Krizi' | 'Yoksunluk Sendromları' | 'Toksisiteler & Sendromlar';
  urgencyLevel: 'Hayati Acil (Kırmızı)' | 'Yüksek Öncelikli (Sarı)' | 'Acil Değerlendirme';
  quickSummary: string;
  coreChecklist: string[];
  diagnosticCriteria: string[];
  firstLineManagement: {
    step: string;
    action: string;
    cautionNote?: string;
  }[];
  pharmacotherapyDosing: {
    drug: string;
    route: string;
    dose: string;
    frequency: string;
    pearl: string;
  }[];
  contraindicationsAndTraps: string[];
  monitoringParameters: string[];
}

export const EMERGENCY_TOPICS_DATA: EmergencyTopic[] = [
  {
    id: 'agitation-violence',
    title: 'Akut Ajitasyon ve Şiddet Yönetimi',
    category: 'Ajitasyon & Şiddet',
    urgencyLevel: 'Hayati Acil (Kırmızı)',
    quickSummary: 'Akut psikomotor ajitasyon, öfke patlaması ve saldırganlık riski olan hastalarda hiyerarşik güvenlik, sözlü yatıştırma (de-eskalasyon) ve gereğinde farmakolojik kısıtlama protokolü (BETA Konsensüsü).',
    coreChecklist: [
      'Personel güvenliği ve kaçış yolu açık tutuldu mu?',
      'Organik nedenler (hipoglisemi, hipoksi, intoksikasyon, kafa travması) dışlandı mı?',
      'Önce sözlü de-eskalasyon (verbal de-escalation) denendi mi?',
      'Hasta oral tedaviyi kabul ediyor mu (öncelik her zaman oralde)?',
      'Parenteral Olanzapin ile parenteral Benzodiazepin aynı anda KULLANILMADIĞINDAN emin olundu mu?'
    ],
    diagnosticCriteria: [
      'BETA (Project BETA) Agitation Consensus Kriterleri',
      'Richmond Agitation-Sedation Scale (RASS) skoru ≥ +2 (Ajite) veya +3 (Çok ajite)',
      'Gereksiz amaçsız motor hareketler, sözel tehdit, eşyalara zarar verme eğilimi'
    ],
    firstLineManagement: [
      {
        step: '1. Güvenlik & Sözlü Yatıştırma',
        action: 'Sakin, alçak ses tonu, göz teması aşırı sabitlenmeden mesafeli (en az 2 kol boyu). Seçenek sunma ("Sakinleşmeniz için oral bir tablet veya damla verebilirim").'
      },
      {
        step: '2. Tercih Edilen Oral Farmakoterapi',
        action: 'Oral çözünebilir Olanzapin (Zydis) 5-10 mg veya Risperidon 1-2 mg + Lorazepam 1-2 mg oral/sublingual.'
      },
      {
        step: '3. Zorunlu İntramüsküler (IM) Tedavi',
        action: 'Hasta oral reddediyorsa ve kendine/başkasına tehdit varsa: Haloperidol 5 mg IM + Lorazepam 2 mg IM (aynı enjektörde çekilebilir) VEYA Olanzapin 10 mg IM.',
        cautionNote: 'ÖNEMLİ KUTU UYARISI: IM Olanzapin ile IM Lorazepam arasında EN AZ 2 SAAT ara verilmelidir! Birlikte uygulanmaları fatal hipotansiyon, solunum arresti ve kardiyovasküler kollapsa yol açabilir.'
      }
    ],
    pharmacotherapyDosing: [
      {
        drug: 'Haloperidol + Lorazepam (Kombine)',
        route: 'İntramüsküler (IM)',
        dose: 'Haloperidol 5 mg + Lorazepam 2 mg',
        frequency: 'Gereğinde 30-60 dk sonra tekrar (Maks haloperidol: 20 mg/gün)',
        pearl: 'Ajitasyon için en kanıtlanmış kombinasyon. Haloperidol EPS riskini lorazepam azaltır, lorazepamın sedatif etkisi haloperidolün antipsikotik etkisini tamamlar.'
      },
      {
        drug: 'Olanzapin',
        route: 'İntramüsküler (IM)',
        dose: '10 mg IM (yaşlı/frajil: 2.5 - 5 mg)',
        frequency: '2 saat sonra gerekirse 5-10 mg tekrar (Maks: 30 mg/gün)',
        pearl: 'Benzodiazepin IM ile kesinlikle aynı anda yapılmaz. EKG ve tansiyon takibi gerektirir.'
      },
      {
        drug: 'Aripiprazol',
        route: 'İntramüsküler (IM)',
        dose: '9.75 mg IM',
        frequency: '2 saat sonra gerekirse tekrar (Maks: 30 mg/gün)',
        pearl: 'Aşırı sedasyon istenmeyen, hafif-orta ajitasyonda tercih edilir.'
      }
    ],
    contraindicationsAndTraps: [
      'Gereksiz fiziksel kısıtlama (fiziksel tespit en son çaredir ve göğüs basısı/asfiksi riski taşır).',
      'IM Diazepam uygulamak (diazepam IM emilimi düzensiz ve ağrılıdır; IM benzodiazepin gerekiyorsa tek tercih Lorazepam veya Midazolamdır).',
      'Akut sarhoşluk / alkol intoksikasyonunda yüksek doz benzodiazepin sedasyonu (solunum arresti riski).'
    ],
    monitoringParameters: [
      'Solunum sayısı ve SpO2 (özellikle sedasyon sonrası)',
      'Kan basıncı ve nabız (postural hipotansiyon riski)',
      'Akut distoni bulguları (gözlerde yukarı kayma, boyun kasılması - antidot: Biperiden 5 mg IM/IV)'
    ]
  },
  {
    id: 'catatonia-emergency',
    title: 'Akut Katatoni ve Malign Katatoni',
    category: 'Katatoni',
    urgencyLevel: 'Hayati Acil (Kırmızı)',
    quickSummary: 'Mutizm, stupor, posturing, balmumu esnekliği ve negativizm ile seyreden; malign forma dönüştüğünde otonom instabilite ve yüksek mortalite riski taşıyan acil nöropsikiyatrik sendrom.',
    coreChecklist: [
      'Ateş, otonom labilite, lökositoz ve kreatin kinaz (CK) ölçüldü mü?',
      'Bush-Francis Catatonia Rating Scale (BFCRS) taraması yapıldı mı (≥2 bulgu pozitif mi)?',
      'Antipsikotik ilaçlar DERHAL KESİLDİ Mİ (Antipsikotikler katatoniyi kötüleştirir ve Malign Katatoni / NMS\'ye çevirir)?',
      'Lorazepam Challenge Testi (1-2 mg IV/SL) uygulandı mı?'
    ],
    diagnosticCriteria: [
      'BFCRS (Bush-Francis) Kriterleri: 14 tarama maddesinden en az 2 tanesinin varlığı (Heyecan/Ajitasyon, Staring, Posturing, Katalepsi, Ekolali, Negativizm vb.)',
      'DSM-5-TR: Mutizm, Stupor, Balmumu Esnekliği, Stereotipi, Yüz Buruşturma dahil 12 belirtiden en az 3\'ü'
    ],
    firstLineManagement: [
      {
        step: '1. Antipsikotiklerin Tamamen Kesilmesi',
        action: 'Hasta psikotik bile olsa tüm nöroleptikler/antipsikotikler derhal kesilmelidir. Katatonide D2 blokajı ateşi ve rijiditeyi tırmandırır.'
      },
      {
        step: '2. Lorazepam Challenge Testi',
        action: '1-2 mg Lorazepam IV (veya SL/IM). 30-45 dakika beklenir. Katatoni bulgularında belirgin gerileme (%50+ düzelme) tanı koydurucudur ve tedaviye bu dozla devam edilir (Günlük 8-16 mg\'a kadar titre edilebilir).'
      },
      {
        step: '3. Erken Elektrokonvülsif Terapi (EKT) Hazırlığı',
        action: 'Malign Katatoni (ateş + otonom labilite), lorazepama 48-72 saatte yanıtsızlık veya oral alım kesilmesine bağlı dehidratasyon varlığında EKT hayat kurtarıcı birinci tercihtir.'
      }
    ],
    pharmacotherapyDosing: [
      {
        drug: 'Lorazepam',
        route: 'İntravenöz (IV) veya Sublingual (SL)',
        dose: 'Başlangıç: 1 - 2 mg bolus. İdame: 6 - 16 mg/gün (bölünmüş dozlarda)',
        frequency: 'Günde 3 - 4 kez',
        pearl: 'Katatoni hastaları şaşırtıcı derecede yüksek doz benzodiazepinleri sedatize olmadan tolere ederler (GABA-A reseptör hipofonksiyonu).'
      },
      {
        drug: 'Memantin / Amantadin (İkinci Basamak Destek)',
        route: 'Oral',
        dose: 'Memantin 10-20 mg/gün veya Amantadin 100-300 mg/gün',
        frequency: 'Günde 1-2 kez',
        pearl: 'NMDA reseptör antagonizması ile GABA/glutamat dengesini restore ederek lorazepam direncini kırabilir.'
      }
    ],
    contraindicationsAndTraps: [
      'Katatoniye antipsikotik vermek (EN ÖLÜMCÜL HATA!).',
      'Yetersiz lorazepam dozu verip "yanıtsız" kabul etmek (katatonide 2-4 mg yetmeyebilir, 8-16 mg gerekebilir).',
      'DVT ve Pulmoner Emboli profilaksisini unutmak (hareketsiz stupor hastalarında LMWH başlanmalıdır).'
    ],
    monitoringParameters: [
      'Günde 2 kez vücut ısısı ve vital bulgular',
      'Serum CK ve böbrek fonksiyon testleri (rabdomiyoliz takibi)',
      'Aldığı-çıkardığı sıvı dengesi ve beslenme takibi'
    ]
  },
  {
    id: 'delirium-acute',
    title: 'Akut Delirium (Konfüzyonel Durum)',
    category: 'Delirium',
    urgencyLevel: 'Hayati Acil (Kırmızı)',
    quickSummary: 'Akut başlangıçlı, gün içi dalgalanma gösteren dikkat ve bilinç bozukluğu. Daima altta yatan organik, metabolik, enfeksiyöz veya farmakolojik bir nedenin habercisidir.',
    coreChecklist: [
      'Akut başlangıç ve gün içi dalgalanma (fluktuasyon) var mı?',
      'Dikkat bozukluğu (ayları tersten sayma, 20\'den geriye sayma) pozitif mi?',
      'İlaç listesi taranarak antikolinerjik, sedatif veya opioid yükü değerlendirildi mi?',
      'I WATCH DEATH mnemonik etiyoloji taraması yapıldı mı?'
    ],
    diagnosticCriteria: [
      'CAM (Confusion Assessment Method) Pozitifliği: 1 (Akut başlangıç & Dalgalı seyir) + 2 (Dikkatsizlik) + [3 (Dezorganize düşünce) veya 4 (Bilinç düzeyinde değişme)]',
      '4AT Skoru ≥ 4 (Delirium Olası)'
    ],
    firstLineManagement: [
      {
        step: '1. Altta Yatan Organik Sebebin Düzeltilmesi',
        action: 'Enfeksiyon (İYE, pnömoni), elektrolit imbalansı (hiponatremi), hipoksi, dehidratasyon, konstipasyon veya idrar retansiyonu derhal saptanıp tedavi edilmelidir.'
      },
      {
        step: '2. Çevresel & Non-Farmakolojik Protokol (HELP Modeli)',
        action: 'Gündüz ışık, gece sessizlik, saat ve takvim görünür kılma, gözlük ve işitme cihazlarının takılması, tanıdık bir yakının refakati, gereksiz kateterlerin çekilmesi.'
      },
      {
        step: '3. Güvenlik Riski Halinde Minimal Farmakoterapi',
        action: 'Yalnızca hastanın tedaviyi çekip koparması veya kendine/başkasına zarar riski varsa: Düşük doz Haloperidol (0.5 - 1 mg oral/IM) veya Ketiapin (12.5 - 25 mg).'
      }
    ],
    pharmacotherapyDosing: [
      {
        drug: 'Haloperidol',
        route: 'Oral veya IM',
        dose: '0.25 - 0.5 mg (yaşlı/frajil) veya 1 - 2 mg (genç yetişkin)',
        frequency: 'Gereğinde 4-6 saatte bir (Maks: 2-5 mg/gün)',
        pearl: 'Sedasyon yapmaz, antikolinerjik etkisi en düşüktür. Parkinson/Lewy Cisimli Demansta KONTRENDİKEDİR.'
      },
      {
        drug: 'Ketiapin',
        route: 'Oral',
        dose: '12.5 - 25 mg',
        frequency: 'Gece veya günde 2 kez',
        pearl: 'Parkinson hastalığı veya Lewy Cisimli Demans zeminindeki deliriumda tercih edilecek antipsikotiktir.'
      }
    ],
    contraindicationsAndTraps: [
      'Deliriumda rutin olarak Benzodiazepin başlamak (Alkol veya BZD yoksunluğuna bağlı değilse benzodiazepinler deliriumu AĞIRLAŞTIRIR ve uzatır).',
      'Hipoaktif deliriumu (sessizce yatan, letarjik hasta) "depresyon" sanıp atlamak.'
    ],
    monitoringParameters: [
      'Oksijen saturasyonu ve kapiller kan şekeri',
      'Elektrolitler (Na, K, Ca), CRP, Tam İdrar Tetkiki',
      'EKG QTc aralığı (antipsikotik başlanacaksa)'
    ]
  },
  {
    id: 'suicide-crisis',
    title: 'Akut İntihar Krizi ve Yüksek Risk Yönetimi',
    category: 'İntihar Krizi',
    urgencyLevel: 'Hayati Acil (Kırmızı)',
    quickSummary: 'Ölüm düşünceleri, intihar planı, niyeti veya girişim hazırlığı olan hastalarda acil risk triyajı, çevre güvenliği, güvenlik planı ve yatış endikasyonları.',
    coreChecklist: [
      'Doğrudan ve net sorularla intihar düşüncesi, yöntemi, planı ve niyeti soruldu mu?',
      'Öldürücü araçlara erişim (ateşli silah, ilaç stoku, yüksek yerler) derhal kesildi mi?',
      'Psikoz eşliği (özellikle emredici varsanılar / commanding hallucinations) var mı?',
      'SAFE-T veya C-SSRS ile risk seviyesi yüksek olarak sınıflandırıldı mı?',
      'Hasta refakatsiz asla yalnız bırakılmayacak şekilde güvenlik önlemi alındı mı?'
    ],
    diagnosticCriteria: [
      'C-SSRS (Columbia Suicidality) Madde 4-5 pozitifliği (Niyet içeren aktif intihar düşüncesi / somut plan)',
      'Yakın zamanda intihar girişimi, umutsuzluk, şiddetli anhedoni, ağır ajitasyon / akatizi'
    ],
    firstLineManagement: [
      {
        step: '1. Anında Güvenliğin Sağlanması',
        action: 'Kesici-delici aletler, kemer, kablo ve ilaçlar uzaklaştırılır. 1:1 kesintisiz gözetim (gözlemci refakati) başlatılır.'
      },
      {
        step: '2. Yatış Kararı (Gönüllü veya TMK 432 Zorunlu)',
        action: 'Yüksek riskte yatış zorunludur. Hasta kabul etmezse TMK 432 uyarınca acil koruma amaçlı yatış süreci başlatılır ve adli bildirim yapılır.'
      },
      {
        step: '3. Kanıtlanmış Antisuimodal Tedavi',
        action: 'Bipolar bozukluk ve yineleyen depresyonda LİTYUM (uzun vadede intihar mortalitesini düşüren tek ilaç); şizofrenide KLOZAPİN; akut unipolar dirençli krizde KETAMİN / ESKETAMİN veya EKT.'
      }
    ],
    pharmacotherapyDosing: [
      {
        drug: 'Lityum Karbonat',
        route: 'Oral',
        dose: '600 - 900 mg/gün (Serum düzeyi 0.6 - 0.8 mEq/L)',
        frequency: 'Akşam tek doz veya bölünmüş',
        pearl: 'İntihar oranlarını kanıtlanmış olarak %60-80 oranında düşürür.'
      },
      {
        drug: 'Klozapin',
        route: 'Oral',
        dose: '100 - 400 mg/gün',
        frequency: 'Kademeli titrasyonla',
        pearl: 'FDA onaylı antisuimodal endikasyonu olan tek antipsikotiktir (özellikle şizofreni ve şizoafektifte).'
      },
      {
        drug: 'Ketamin / Esketamin',
        route: 'IV infüzyon (0.5 mg/kg 40 dk) veya İntranazal',
        dose: '0.5 mg/kg IV',
        frequency: 'Akut krizde tek doz veya haftada 2 kez',
        pearl: 'Saatler içinde intihar düşüncelerini hızla baskılayan hızlı etkili ajandır.'
      }
    ],
    contraindicationsAndTraps: [
      '"Sözleşme yaptık, intihar etmeyeceğine söz verdi" (İntihar sözleşmeleri kanıta dayalı değildir ve hukuki güvence sağlamaz).',
      'İntihar riski yüksek hastayı yalnız başına tetkike veya tuvalete göndermek.',
      'Yüksek dozda letal olan ilaçları (TSA, lityum) evde geniş kutularla hastanın eline reçete etmek.'
    ],
    monitoringParameters: [
      'Stanley-Brown Güvenlik Planlama Formu doldurulması',
      'Akut ajitasyon ve içsel huzursuzluk (akatizi) varlığı'
    ]
  },
  {
    id: 'withdrawal-syndromes',
    title: 'Akut Yoksunluk Sendromları (Alkol, BZD, Opioid)',
    category: 'Yoksunluk Sendromları',
    urgencyLevel: 'Hayati Acil (Kırmızı)',
    quickSummary: 'Alkol yoksunluğu ve Deliryum Tremens, Benzodiazepin yoksunluğu ve Opioid yoksunluğunda protokolize değerlendirme, nöbet önleme ve replasman stratejileri.',
    coreChecklist: [
      'Son madde/alkol kullanım saati ve miktarı öğrenildi mi?',
      'Alkol için CIWA-Ar skoru, Opioid için COWS skoru hesaplandı mı?',
      'Glukoz infüzyonundan ÖNCE TİAMİN (B1) 500 mg IV yapıldı mı (Wernicke Ensefalopatisi önleme)?',
      'Alkol yoksunluğunda Deliryum Tremens risk faktörleri (önceki nöbet, >65 yaş, komorbid hastalık) tarandı mı?'
    ],
    diagnosticCriteria: [
      'CIWA-Ar skoru ≥ 10 (Orta-ağır yoksunluk: Farmakoterapi endikasyonu), ≥ 15 (Ciddi yoksunluk)',
      'COWS skoru ≥ 13 (Orta şiddette opioid yoksunluğu: Buprenorfin başlama eşiği)'
    ],
    firstLineManagement: [
      {
        step: '1. Tiamin (B1 Vitamini) Yüklemesi',
        action: 'Tiamin 500 mg IV infüzyon (SF içinde 30 dk) günde 3 kez, en az 3-5 gün. KESİNLİKLE glukoz içeren mayilerden ÖNCE verilmelidir!'
      },
      {
        step: '2. Semptom Tetiklemeli Benzodiazepin Protokolü (Alkol/BZD)',
        action: 'CIWA-Ar ≥ 10 ise: Diazepam 10-20 mg oral (karaciğer yetmezliği varsa Lorazepam 2-4 mg oral/SL). 1-2 saatte bir CIWA-Ar skoruna göre tekrarlanır.'
      },
      {
        step: '3. Deliryum Tremens Acil Yönetimi',
        action: 'Vital instabilite, halüsinasyon ve konfüzyon geliştiğinde yoğun bakımda Diazepam IV (5-10 mg her 5-10 dakikada bir titre edilerek sakinleşene kadar) verilir.'
      }
    ],
    pharmacotherapyDosing: [
      {
        drug: 'Diazepam',
        route: 'Oral veya yavaş IV',
        dose: '10 - 20 mg oral (veya 5-10 mg yavaş IV)',
        frequency: 'CIWA-Ar ≥ 10 oldukça 1-2 saatte bir',
        pearl: 'Uzun yarı ömrü ve aktif metabolitleri sayesinde otomatik basamaklı kesilme (self-taper) sağlar.'
      },
      {
        drug: 'Lorazepam (Karaciğer Hasarlı Hastada)',
        route: 'Oral, SL veya IV',
        dose: '1 - 2 mg',
        frequency: 'CIWA-Ar ≥ 10 oldukça',
        pearl: 'Hepatik glukuronidasyonla atılır, aktif metaboliti yoktur. Sirozlu, hepatitli veya yaşlı hastalarda tercih edilir.'
      },
      {
        drug: 'Buprenorfin / Nalokson (Suboxone)',
        route: 'Sublingual (SL)',
        dose: 'Başlangıç: 2-4 mg SL (COWS ≥ 12-13 olduktan sonra!)',
        frequency: 'Gereğinde günde 8-16 mg\'a titre edilir',
        pearl: 'DİKKAT: Hasta henüz tam opioid yoksunluğuna girmeden erken verilirse parsiyel agonizma nedeniyle ŞİDDETLİ AKUT YOKSUNLUK (precipitated withdrawal) tetikler!'
      }
    ],
    contraindicationsAndTraps: [
      'Tiamin vermeden önce Dekstroz (Şekerli serum) takmak (kalan son tiamini tüketerek hastayı akut Wernicke-Korsakoff komasına sokar).',
      'Deliryum tremenste antipsikotik monoterapisi uygulamak (antipsikotikler nöbet eşiğini düşürür ve mortaliteyi artırır; BZD zorunludur).'
    ],
    monitoringParameters: [
      '2 saatte bir CIWA-Ar skoru',
      'Elektrolitler (özellikle Magnezyum ve Potasyum düşüklüğü aritmi riskini artırır)',
      'Tremor, terleme ve nabız takibi'
    ]
  },
  {
    id: 'toxicities-poisoning',
    title: 'İlaç Toksisiteleri (Lityum, TSA, Valproat)',
    category: 'Toksisiteler & Sendromlar',
    urgencyLevel: 'Hayati Acil (Kırmızı)',
    quickSummary: 'Lityum zehirlenmesi ve diyaliz kriterleri, Trisiklik Antidepresan (TSA) kardiyotoksisitesi ve Bikarbonat protokolü, Valproat hiperamonyemik ensefalopatisi.',
    coreChecklist: [
      'Lityum intoksikasyonunda serum düzeyi, GFR ve nörolojik semptomlar kontrol edildi mi?',
      'TSA aşırı dozunda EKG\'de QRS süresi (>100 ms) ve aVR\'de R dalgası (>3 mm) incelendi mi?',
      'Valproat kullanan konfüze hastada serum Amonyak düzeyi istendi mi?'
    ],
    diagnosticCriteria: [
      'Lityum Toksisitesi: Hafif (1.5-2.0 mEq/L: bulantı, kaba tremor), Orta (2.0-2.5 mEq/L: hiperrefleksi, ataksi, dizartri), Ağır (>2.5 mEq/L: nöbet, koma, SILENT sendromu)',
      'TSA Kardiyotoksisitesi: QRS > 100 ms (Ventriküler aritmi riski %26-30), QRS > 160 ms (Aritmi riski %50+)'
    ],
    firstLineManagement: [
      {
        step: '1. Lityum İntoksikasyonu Tedavisi',
        action: 'İlaç derhal kesilir. %0.9 NaCl (SF) ile agresif hidrasyon başlanır (sodyum yüklemesi lityum geri emilimini azaltır). Diüretik KESİNLİKLE VERİLMEZ.'
      },
      {
        step: '2. Lityum Hemodiyaliz Endikasyonları',
        action: 'Serum lityum > 4.0 mEq/L (her koşulda) VEYA böbrek yetmezliği / nörolojik bozulma eşliğinde serum lityum > 2.5 mEq/L ise ACİL HEMODİYALİZ uygulanır.'
      },
      {
        step: '3. TSA Zehirlenmesinde Sodyum Bikarbonat (NaHCO3)',
        action: 'EKG\'de QRS > 100 ms veya hipotansiyon varsa: Sodyum Bikarbonat 1-2 mEq/kg IV bolus (1-2 ampul %8.4 NaHCO3 2-3 dakikada verilir). Hedef arteriyel pH: 7.45 - 7.55 arasında tutulur.'
      }
    ],
    pharmacotherapyDosing: [
      {
        drug: 'Sodyum Bikarbonat (%8.4 NaHCO3)',
        route: 'İntravenöz (IV) Bolus ve İnfüzyon',
        dose: 'Bolus: 1-2 mEq/kg IV. İnfüzyon: 150 mEq NaHCO3 + 1000 ml %5 Dekstroz içinde 150-250 ml/saat',
        frequency: 'QRS daralana ve pH 7.50-7.55 olana kadar',
        pearl: 'Hızlı sodyum yükü miyokardiyal hızlı sodyum kanallarındaki TSA blokajını geri çevirir; alkalinizasyon ilacı nötral forma sokarak reseptörden ayırır.'
      },
      {
        drug: 'L-Karnitin (Levokarnitin)',
        route: 'IV veya Oral',
        dose: 'Yükleme: 50-100 mg/kg IV (Maks: 3 g). İdame: 50 mg/kg/gün bölünmüş',
        frequency: 'Günde 3-4 kez',
        pearl: 'Valproata bağlı hiperamonyemik ensefalopatide üre döngüsünü reaktive ederek amonyak düzeyini hızla düşürür.'
      }
    ],
    contraindicationsAndTraps: [
      'Lityum zehirlenmesinde atılımı artırmak için tiyazid veya furosemid vermek (felaketle sonuçlanır, lityumu tavan yaptırır).',
      'TSA zehirlenmesinde QRS uzamasını antidisritmiklerle (Flekainid, Prokainamid) tedavi etmeye kalkışmak (bunlar da Tip 1A/1C ajandır, kardiyotoksisiteyi öldürücü hale getirir; tek çözüm BİKARBONATTIR).'
    ],
    monitoringParameters: [
      'Lityum için 4-6 saatte bir serum lityum düzeyi ve elektrolitler',
      'TSA için sürekli kardiyak monitörizasyon ve seri EKG çekimi',
      'Arteriyel kan gazı (pH ve bikarbonat takibi)'
    ]
  }
];
