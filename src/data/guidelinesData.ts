import { ClinicalGuideline } from '../types';

export const CLINICAL_GUIDELINES_DATA: ClinicalGuideline[] = [
  {
    id: 'mdd-guideline',
    title: 'Majör Depresif Bozukluk Tedavi Kılavuzu',
    shortTitle: 'MDD Kılavuzu',
    category: 'Duygudurum Bozuklukları',
    sourceReference: 'CANMAT 2023 / APA 2024 / PsychDB Clinical Algorithm',
    lastUpdated: '2024 (Güncel Kılavuz Konsensüsü)',
    executiveSummary: 'Majör depresyon tedavisinde ilk basamak antidepresan monoterapisi (SSRI/SNRI/Vortioksetin) ve eşzamanlı kanıta dayalı psikoterapidir (BDT). 4-6 haftalık yeterli doz denemesinde yanıt alınamazsa augmentasyon (atipik antipsikotik veya lityum) veya antidepresan sınıf değişimi uygulanır.',
    diagnosticWorkup: [
      'Tam Kan Sayımı (CBC) ve Sedimentasyon / CRP',
      'Tiroid Fonksiyon Testleri (TSH, Serbest T4) - Gizli hipotiroidi ekarte edilmeli',
      'Serum B12 Vitamini ve Folat düzeyi',
      'Açlık Kan Şekeri, Serum Elektrolitleri (Na, K, Ca) ve Karaciğer/Böbrek Fonksiyonları',
      'Gerekirse EKG (Özellikle QTc takibi, 50 yaş üstü veya kardiyovasküler risk taşıyan hastalar)'
    ],
    corePrinciples: [
      'Antidepresan etkinliğini değerlendirmek için en az 4-6 hafta terapötik hedef dozda beklenmelidir; erken kesilmemelidir.',
      'İlk 2 haftada klinik semptomlarda en az %20-25 gerileme olması 6-8. haftadaki nihai remisyonun en güçlü yordayıcısıdır.',
      'İlk epizodda remisyon sağlandıktan sonra nüksü önlemek için tedavi en az 6-9 ay aynı terapötik dozda sürdürülmelidir.',
      'Üç veya daha fazla epizod öyküsü olan, kronik depresyonlu veya yüksek özkıyım riskli hastalarda uzun dönem (yıllarca) idame farmakoterapisi önerilir.'
    ],
    algorithmSteps: [
      {
        stepNumber: 1,
        stepTitle: 'İlk Basamak: Monoterapi Başlangıcı',
        indication: 'Orta ve ağır şiddette unipolar majör depresyon',
        recommendation: 'Birinci basamak SSRI, SNRI, Vortioksetin veya Bupropion monoterapisi başlanması.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Essitalopram / Sertralin',
            classType: 'SSRI',
            dosageGuide: 'Essitalopram: 10-20 mg/gün; Sertralin: 50-200 mg/gün',
            clinicalNote: 'En yüksek tolerabilite ve kanıtlanmış etki dengesi. Sertralin kardiyovasküler riski olan ve gebelikte ilk seçenektir.'
          },
          {
            name: 'Venlafaksin / Duloksetin',
            classType: 'SNRI',
            dosageGuide: 'Venlafaksin XR: 75-225 mg/gün; Duloksetin: 30-60 mg/gün',
            clinicalNote: 'Ağrılı somatik yakınmaları, diyabetik nöropatisi veya fibromiyaljisi olan depresif hastalarda üstün etkinlik.'
          },
          {
            name: 'Vortioksetin',
            classType: 'Multimodal Antidepresan',
            dosageGuide: '10-20 mg/gün',
            clinicalNote: 'Bilişsel işlev bozukluğu (konsantrasyon ve bellek kaybı) ön planda olan ve cinsel yan etkiden kaçınılan hastalar.'
          },
          {
            name: 'Bupropion XL',
            classType: 'NDRI',
            dosageGuide: '150-300 mg/gün',
            clinicalNote: 'Hipoaktif, hipersomnik, apati ve kilo alımı olanlarda idealdir. Cinsel disfonksiyon yapmaz. Epilepsi ve yeme bozukluğunda KONTRENDİKE.'
          }
        ],
        durationBeforeSwitch: '4 - 6 Hafta (Terapötik hedef dozda)',
        decisionPoints: [
          'Tam Yanıt (HAM-D veya PHQ-9 azalması ≥ %50): İdame fazına geç, aynı dozda en az 6-9 ay devam et.',
          'Kısmi Yanıt (%25 - %49 azalma): Dozu tolere edilebilen maksimum sınıra yükselt veya Güçlendirme (Step 2) ekle.',
          'Yanıtsızlık (< %25 azalma): İlaç uyumunu doğrula; tanı ve bipolar spektrumu yeniden sorgula; sınıf dışı bir antidepresana geç.'
        ]
      },
      {
        stepNumber: 2,
        stepTitle: 'İkinci Basamak: Doz Artırımı veya Güçlendirme (Augmentasyon)',
        indication: 'Terapötik dozda 4-6 hafta denenmesine rağmen kısmi yanıt veren olgular',
        recommendation: 'Atipik antipsikotik (Aripiprazol, Ketiapin) veya Lityum ile güçlendirme yapılması.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Aripiprazol Augmentasyonu',
            classType: 'D2 Parsiyel Agonist',
            dosageGuide: '2 - 5 mg/gün (Maks 10 mg/gün)',
            clinicalNote: 'STAR*D verilerine göre en hızlı ve etkili augmentasyon stratejilerinden biridir. Akatizi açısından izlenmelidir.'
          },
          {
            name: 'Lityum Karbonat Augmentasyonu',
            classType: 'Duygudurum Dengeleyici',
            dosageGuide: '600-900 mg/gün (Hedef serum düzeyi: 0.6 - 0.8 mEq/L)',
            clinicalNote: 'Özkıyım riskini istatistiksel olarak azaltan kanıtlanmış tek güçlendirme ajanıdır. Renal ve tiroid takibi gereklidir.'
          },
          {
            name: 'Ketiapin XR Augmentasyonu',
            classType: 'Atipik Antipsikotik',
            dosageGuide: '150 - 300 mg/gün (Gece tek doz)',
            clinicalNote: 'Şiddetli uykusuzluk, anksiyete ve somatik gerginliği olan hastalarda tercih edilir. Metabolik izlem gerekir.'
          }
        ],
        durationBeforeSwitch: '2 - 4 Hafta (Güçlendirme ajanının etkisi genellikle 1-2 haftada başlar)',
        decisionPoints: [
          'Güçlendirme ile remisyon sağlandıysa mevcut kombinasyon en az 6-12 ay sürdürülür.',
          'Yanıtsızlık devam ediyorsa Tedaviye Dirençli Depresyon (TRD) protokolüne geçilir.'
        ]
      },
      {
        stepNumber: 3,
        stepTitle: 'Üçüncü Basamak: Tedaviye Dirençli Depresyon (TRD) Protokolü',
        indication: 'En az iki farklı sınıftan antidepresanın yeterli doz ve sürede denenmesine rağmen remisyon sağlanamaması',
        recommendation: 'Esketamin nazal sprey, EKT (Elektrokonvülsif Terapi) veya rTMS değerlendirmesi.',
        evidenceGrade: 'Düzey 1 (EKT en yüksek remisyon oranına sahiptir: %70-80)',
        options: [
          {
            name: 'Elektrokonvülsif Terapi (EKT)',
            classType: 'Nörostimülasyon',
            dosageGuide: 'Haftada 2-3 seans, toplam 6-12 seans (Bilateral veya Unilateral)',
            clinicalNote: 'Yüksek intihar riski, psikotik depresyon, katatoni, yemeyi-içmeyi reddeden ve TRD olgularında altın standarttır.'
          },
          {
            name: 'Esketamin (Spravato) Nazal Sprey',
            classType: 'NMDA Reseptör Antagonisti',
            dosageGuide: '56 mg veya 84 mg haftada 2 kez, oral antidepresan eşliğinde klinikte gözetim altında',
            clinicalNote: 'Hızlı başlangıçlı (saatler içinde) antidepresan etki. Uygulama sonrası 2 saat kan basıncı ve disosiasyon izlemi şarttır.'
          },
          {
            name: 'MAO İnhibitörleri (Moklobemid veya Tranilsipromin)',
            classType: 'Monoamin Oksidaz İnhibitörü',
            dosageGuide: 'Moklobemid: 300 - 600 mg/gün',
            clinicalNote: 'Atipik özellikli depresyonda (aşırı uyku, aşırı iştah, kurşun felci) oldukça etkilidir. Tiramin kısıtlaması ve ilaç etkileşimlerine dikkat.'
          }
        ],
        durationBeforeSwitch: 'Klinik yanıta göre 4-6 hafta',
        decisionPoints: [
          'Tedaviye dirençli olgularda tanı mutlaka revize edilmeli: Bipolar II, sınırda kişilik patolojisi, gizli alkol/madde kötüye kullanımı veya uyku apnesi araştırılmalıdır.'
        ]
      }
    ],
    treatmentResistance: {
      definition: 'Uygun doz ve sürede (en az 6 hafta) uygulanmış iki farklı farmakolojik sınıftan antidepresan tedavisine klinik yanıt alınamaması hali (STAR*D kriterleri).',
      nextSteps: [
        'Organik faktörleri yeniden dışla (Gizli Cushing, Hashimoto, SLE, B12 eksikliği, OSA).',
        'Hasta uyumunu doğrula (Kandaki ilaç düzeyleri veya yakınından doğrulama).',
        'Bipolar spektrum olasılığını sorgula (Hipomani öyküsü, ailede bipolarite varlığı).',
        'EKT veya Esketamin gibi ileri biyolojik tedavileri planla.'
      ]
    },
    specialPopulations: [
      {
        population: 'Gebelikte Depresyon',
        recommendation: 'İlk tercih Sertralindir (fetüse en düşük geçiş ve en geniş güvenlik verisi). Paroksetinden (kardiyak defekt riski) kaçınılmalıdır.'
      },
      {
        population: 'Geriatrik Depresyon',
        recommendation: 'Hipoosmolalite/hiponatremi riski nedeniyle Na takibi yapılmalıdır. Antikolinerjik yükü düşük olan Essitalopram veya Sertralin tercih edilmelidir.'
      },
      {
        population: 'Koroner Arter Hastalığı Olanlar',
        recommendation: 'Sertralin (SADHART çalışması kanıtlı) güvenle verilebilir. QTc uzatan veya kardiyotoksik olan TSA’lardan kesinlikle kaçınılmalıdır.'
      }
    ],
    clinicalPearls: [
      'Plasebo etkisi psikiyatride yüksektir; ancak 2. haftada hiç kıpırdama olmaması tedavinin başarısız olacağını %80 doğrulukla öngörür.',
      'Antidepresan dozu artırıldığında ilk düzelen enerji ve psikomotor hızdır; duygudurum ise 2-4 hafta sonra düzelir. Bu ara dönemde intihar enerjisi artabileceğinden yakın güvenlik izlemi şarttır.'
    ]
  },
  {
    id: 'bipolar-guideline',
    title: 'Bipolar Bozukluk Akut Mani ve İdame Tedavi Kılavuzu',
    shortTitle: 'Bipolar Bozukluk Kılavuzu',
    category: 'Duygudurum Bozuklukları',
    sourceReference: 'CANMAT / ISBD 2023 Guidelines & PsychDB Algorithm',
    lastUpdated: '2024 Güncellemesi',
    executiveSummary: 'Bipolar bozuklukta monoterapi antidepresan kullanımı kesinlikle kontrendikedir (hızlı döngülülük ve manik kayma riski). Akut manide birinci basamak Lityum, Divalproeks veya Atipik Antipsikotiklerdir. Uzun dönem idame tedavisinde Lityum intihar önleyici ve nöroprotektif etkisiyle altın standarttır.',
    diagnosticWorkup: [
      'Serum Lityum Düzeyi (Lityum başlanacaksa başlangıç Kreatinin, GFR, TSH, Kalsiyum, EKG ve Gebelik Testi)',
      'Valproat başlanacaksa: Karaciğer Enzimleri (AST, ALT), Tam Kan Sayımı (Trombosit sayımı) ve Gebelik Testi',
      'İdrarda Madde Taraması (Amfetamin, kokain, esrar kaynaklı sekonder maninin ekarte edilmesi)',
      'Metabolik Panel: Açlık Kan Şekeri, HbA1c ve Lipid Profili'
    ],
    corePrinciples: [
      'Akut manide hasta antidepresan kullanıyorsa derhal kesilmelidir!',
      'Hafif-orta manide monoterapi (Lityum, Valproat veya 2. Kuşak Antipsikotik) yeterli olabilirken, şiddetli veya psikotik manide ikili kombinasyon (Lityum/Valproat + Antipsikotik) başlanmalıdır.',
      'Bipolar depresyon tedavisinde monoterapi SSRI kullanılmaz! Yalnızca onaylı ajanlar (Ketiapin, Lurasidon, Olanzapin-Fluoksetin kombinasyonu, Kariprazin veya Lityum) tercih edilmelidir.',
      'İdame fazında monoterapi Lityum veya Lamotrijin (özellikle depresif nükslerin önlenmesinde) birinci basamaktır.'
    ],
    algorithmSteps: [
      {
        stepNumber: 1,
        stepTitle: 'Akut Mani ve Mikst Epizod Tedavisi',
        indication: 'DSM-5 kriterlerine göre mani veya hipomani epizodu',
        recommendation: 'Antidepresanları kes; Lityum veya Valproat + Atipik Antipsikotik (Olanzapin, Risperidon, Ketiapin veya Aripiprazol) başla.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Lityum Karbonat',
            classType: 'Klasik Duygudurum Dengeleyici',
            dosageGuide: 'Başlangıç 600-900 mg/gün; Akut manide hedef serum düzeyi: 0.8 - 1.2 mEq/L',
            clinicalNote: 'Öforik klasik manide, ailede lityum yanıtı olanlarda ve intihar riskinde en üstün seçenektir.'
          },
          {
            name: 'Sodyum Valproat / Divalproeks',
            classType: 'Antikonvülsan Duygudurum Dengeleyici',
            dosageGuide: '20 mg/kg/gün yükleme dozu; Hedef serum düzeyi: 50 - 100 mcg/mL',
            clinicalNote: 'Mikst epizodlarda, disforik manide, hızlı döngülü olgularda ve kafa travması/komorbid madde öyküsünde lityumdan daha etkilidir. Doğurganlık çağındaki kadınlarda teratojenite nedeniyle KONTRENDİKE.'
          },
          {
            name: 'Olanzapin / Risperidon / Ketiapin',
            classType: 'Atipik Antipsikotik',
            dosageGuide: 'Olanzapin: 10-20 mg/gün; Risperidon: 2-6 mg/gün; Ketiapin: 400-800 mg/gün',
            clinicalNote: 'Ajitasyon ve psikotik semptomları hızla baskılar (saatler-günler içinde etki).'
          }
        ],
        durationBeforeSwitch: '1 - 2 Hafta (Akut semptom kontrolü)',
        decisionPoints: [
          'Semptomlar kontrol altına alındıktan sonra remisyon sağlanırsa idame dozlarına titre edilir.',
          'Yetersiz yanıtta ikili kombinasyon (Lityum + Antipsikotik veya Valproat + Antipsikotik) denenir.'
        ]
      },
      {
        stepNumber: 2,
        stepTitle: 'Bipolar Depresyon Tedavisi',
        indication: 'Bipolar I veya Bipolar II bozukluk zemininde majör depresif epizod',
        recommendation: 'Ketiapin monoterapi, Lurasidon, Kariprazin veya Lityum; dirençli olgularda Lamotrijin eklenmesi.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Ketiapin (Seroquel / XR)',
            classType: 'Atipik Antipsikotik',
            dosageGuide: '300 mg/gün (Akut bipolar depresyon hedef dozu)',
            clinicalNote: 'Bipolar I ve II depresyonunda tek ajan olarak en yüksek kanıta sahip onaylı ilaçtır.'
          },
          {
            name: 'Lurasidon (Latuda)',
            classType: 'Atipik Antipsikotik',
            dosageGuide: '20 - 80 mg/gün (En az 350 kalorilik yemekle birlikte alınmalıdır)',
            clinicalNote: 'Metabolik nötr profil (kilo aldırmaz, sedasyon düşüktür). Gebelikte Kategori B (güvenli profil).'
          },
          {
            name: 'Lamotrijin (Lamictal)',
            classType: 'Antikonvülsan',
            dosageGuide: 'Başlangıç 25 mg/gün, 2 haftada bir yavaş titrasyon; Hedef: 100-200 mg/gün',
            clinicalNote: 'Stevens-Johnson sendromunu (SJS) önlemek için çok yavaş artırılmalıdır. Akut manide etkisizdir, ancak bipolar depresyonun önlenmesinde mükemmeldir.'
          }
        ],
        durationBeforeSwitch: '4 - 6 Hafta',
        decisionPoints: [
          'SSRI monoterapi ASLA verilmemelidir. Antidepresan gerekiyorsa MUTLAKA bir duygudurum dengeleyici (Lityum) eşliğinde verilmelidir.'
        ]
      },
      {
        stepNumber: 3,
        stepTitle: 'Uzun Dönem İdame Fazı',
        indication: 'Epizod sonrası profilaksi ve nükslerin önlenmesi',
        recommendation: 'Lityum monoterapisi (Hedef serum: 0.6 - 0.8 mEq/L) veya tolere edilen başarılı akut rejimin devamı.',
        evidenceGrade: 'Düzey 1 (Altın Standart)',
        options: [
          {
            name: 'Lityum Karbonat',
            classType: 'Duygudurum Dengeleyici',
            dosageGuide: 'Serum düzeyi: 0.6 - 0.8 mEq/L (Her 3-6 ayda bir kontrol)',
            clinicalNote: 'Mani ve depresyon nükslerini önler; intihar oranlarını %60-70 azaltır.'
          }
        ],
        durationBeforeSwitch: 'Yıllarca veya ömür boyu',
        decisionPoints: [
          'İlacın aniden kesilmesi manik "rebound" atağını tetikler. Kesilecekse aylar içinde kademeli azaltılmalıdır.'
        ]
      }
    ],
    treatmentResistance: {
      definition: 'Lityum ve Valproat terapötik düzeylerinde denenmesine ve atipik antipsikotik kombinasyonuna rağmen atakların tekrarlaması.',
      nextSteps: [
        'Tiroid otoantikorlarını (Anti-TPO) ve TSH düzeyini kontrol et (Hafif hipotiroidi bile döngüyü hızlandırır).',
        'Klozapin eklenmesini değerlendir (Dirençli bipolar olgularda güçlü antimanik etki).',
        'İdame EKT protokolünü düşünün.'
      ]
    },
    specialPopulations: [
      {
        population: 'Doğurganlık Çağındaki Kadınlar',
        recommendation: 'Valproat KESİNLİKLE reçete edilmemelidir (Spina bifida riski %1-2, polikistik over ve teratojenite). Lurasidon veya Lamotrijin tercih edilmelidir.'
      },
      {
        population: 'Böbrek Yetmezliği Olan Hastalar',
        recommendation: 'Lityum glomerüler filtrasyonla atıldığı için renal yetmezlikte kontrendikedir; Valproat veya Atipik Antipsikotikler tercih edilmelidir.'
      }
    ],
    clinicalPearls: [
      'Bir hastada unipolar depresyon düşünülüp antidepresan başlandığında hasta "günler içinde aşırı enerjik" oluyorsa veya mikst semptomlar (ajitasyon, uykusuzluk, yarışan düşünceler) gelişiyorsa bipolar spektrum alarmıdır!',
      'Lityum toksisitesi doza bağımlıdır: Dehidratasyon, tuzsuz diyet, NSAİİ (İbuprofen) ve ADE inhibitörleri serum lityumunu ölümcül düzeylere çıkarabilir.'
    ]
  },
  {
    id: 'schizophrenia-guideline',
    title: 'Şizofreni ve Psikoz Klinik Tedavi Kılavuzu',
    shortTitle: 'Şizofreni Kılavuzu',
    category: 'Psikotik Bozukluklar',
    sourceReference: 'APA 2023 Practice Guideline & PsychDB Consensus',
    lastUpdated: '2024 Güncellemesi',
    executiveSummary: 'Şizofreni tedavisinde temel amaç semptom remisyonu, nükslerin önlenmesi ve işlevselliğin korunmasıdır. İlk atak psikozda düşük doz 2. Kuşak Antipsikotik başlanır. Uyumsuzluk durumunda Uzun Etkili Enjekte Edilebilirler (LAI) hızla devreye sokulmalı; 2 başarısız antipsikotik denemesinden sonra vakit kaybetmeden KLOZAPİN başlanmalıdır.',
    diagnosticWorkup: [
      'İlk Atak Psikoz (FEP) için Kapsamlı Nörolojik / Organik Tarama',
      'Beyin MR veya BT (Özellikle atipik prezentasyon, ani başlangıç veya nörolojik defisit varsa)',
      'EEG (Kompleks parsiyel nöbet / temporal lob epilepsisi ekarte etmek için)',
      'Anti-NMDA Reseptör Ensefaliti Taraması (Genç kadın, ani psikoz, otonomik instabilite veya katatoni varsa)',
      'İdrarda Toksikoloji Taraması (Sentetik kannabinoid, metamfetamin, fensiklidin)',
      'Rutin Biyokimya, Lipid Profili, Açlık Glukozu, EKG (Bazal QTc ölçümü)'
    ],
    corePrinciples: [
      'Tedavi edilmemiş psikoz süresi (DUP - Duration of Untreated Psychosis) ne kadar kısa olursa prognoz ve beyin gri cevher kaybı o kadar az olur.',
      'İlk atakta hastalar antipsikotiklerin hem tedavi edici etkilerine hem de ekstrapiramidal yan etkilerine (akut distoni, akatizi) çok daha hassastır; bu nedenle düşük doz başlanmalıdır.',
      'Antipsikotik polifarmasisinden (aynı anda iki antipsikotik verme) kaçınılmalı, monoterapi hedeflenmelidir (Klozapin direnci veya LAI çapraz geçiş durumları hariç).',
      'Tedaviye direnç geliştiğinde (2 farklı antipsikotiğin 6 haftalık başarısızlığı) tek kanıtlanmış çözüm KLOZAPİN’dir.'
    ],
    algorithmSteps: [
      {
        stepNumber: 1,
        stepTitle: 'İlk Atak Psikoz (FEP): İkinci Kuşak Antipsikotik Monoterapisi',
        indication: 'İlk kez psikotik atak geçiren hasta',
        recommendation: 'Metabolik ve nörolojik yan etki profili dengeli bir 2. Kuşak Antipsikotik başlanması.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Aripiprazol (Abilify)',
            classType: 'D2 Parsiyel Agonist (3. Kuşak)',
            dosageGuide: 'Başlangıç 5-10 mg/gün; Hedef 10-15 mg/gün',
            clinicalNote: 'Kilo alımı, sedasyon ve prolaktin yükselmesi riski düşüktür. Akatizi açısından izlenmelidir.'
          },
          {
            name: 'Risperidon (Risperdal)',
            classType: 'D2 / 5-HT2A Antagonisti',
            dosageGuide: 'Başlangıç 1-2 mg/gün; Hedef 2-4 mg/gün (Maks 6 mg)',
            clinicalNote: 'Düşük maliyet, güçlü antipsikotik etki. Doz >4-6 mg üstüne çıktığında Tipik antipsikotikler gibi EPS ve hiperprolaktinemi yapar.'
          },
          {
            name: 'Olanzapin (Zyprexa)',
            classType: 'Multi-Acting Receptor Targeted Antipsychotic (MARTA)',
            dosageGuide: 'Başlangıç 5-10 mg/gün; Hedef 10-20 mg/gün',
            clinicalNote: 'Güçlü antipsikotik ve sedatif etki sağlar; ancak ilk 6 ayda ciddi kilo alımı ve metabolik sendrom riski vardır.'
          }
        ],
        durationBeforeSwitch: '4 - 6 Hafta (Terapötik dozda)',
        decisionPoints: [
          'Yetersiz yanıt veya tolere edilemeyen yan etki (örn. aşırı prolaktin, EPS): Başka bir reseptör profiline sahip 2. Kuşak Antipsikotiğe geç.',
          'İlaç uyumsuzluğu saptanırsa derhal Uzun Etkili Enjekte Edilebilir (Depo) formülasyona geçilmelidir.'
        ]
      },
      {
        stepNumber: 2,
        stepTitle: 'İkinci Basamak: Alternatif Antipsikotik veya Uzun Etkili Enjekte Edilebilir (LAI)',
        indication: 'İlk antipsikotiğe yanıtsızlık, tolere edilememe veya nüks',
        recommendation: 'Farklı bir mekanizmaya sahip antipsikotiğe geçiş veya uyum sorununda LAI uygulanması.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Paliperidon Palmitat (Xeplion / Trevicta)',
            classType: 'Uzun Etkili Enjekte Edilebilir (LAI)',
            dosageGuide: '1. Gün 150 mg deltoid, 8. Gün 100 mg deltoid yüklemesi; ardından ayda bir 75-100 mg idame',
            clinicalNote: 'Oral ilaç alma zorunluluğunu ortadan kaldırır; nüks ve hastaneye yatış oranlarını %70 azaltır.'
          },
          {
            name: 'Aripiprazol Monohidrat (Abilify Maintena)',
            classType: 'Aylık Depo Antipsikotik',
            dosageGuide: 'Ayda bir 400 mg gluteal/deltoid IM (İlk 14 gün oral aripiprazol ile örtüşme gerektirir)',
            clinicalNote: 'Metabolik güvenliği yüksek depo alternatifi.'
          }
        ],
        durationBeforeSwitch: '6 Hafta',
        decisionPoints: [
          'Hasta iki farklı antipsikotiği (en az 6 hafta, yeterli terapötik dozda) kullanmasına rağmen hezeyan ve halüsinasyonlar devam ediyorsa tanı: Tedaviye Dirençli Şizofreni (TRS) dir.'
        ]
      },
      {
        stepNumber: 3,
        stepTitle: 'Üçüncü Basamak: Tedaviye Dirençli Şizofrenide Klozapin',
        indication: 'En az 2 farklı antipsikotiğe dirençli şizofreni, inatçı intihar riski veya şiddet davranışı',
        recommendation: 'Zaman kaybetmeden KLOZAPİN başlanması (Altın Standart).',
        evidenceGrade: 'Düzey 1A (Dirençli şizofrenide üstünlüğü kanıtlanmış tek ilaç)',
        options: [
          {
            name: 'Klozapin (Leponex)',
            classType: 'Atipik Antipsikotik',
            dosageGuide: '12.5 mg başla; yavaş titre ederek 300 - 450 mg/gün (Hedef kan düzeyi: ≥ 350 ng/mL)',
            clinicalNote: 'Agranülositoz riski nedeniyle zorunlu ANC (Mutlak Nötrofil Sayısı) takibi gerektirir. EPS veya tardif diskinezi yapmaz.'
          }
        ],
        durationBeforeSwitch: 'En az 3 - 6 Ay (Klozapin yanıtı 6 aya kadar gecikebilir)',
        decisionPoints: [
          'Klozapin ANC < 1500/mm³ düşerse sarı zon; ANC < 1000/mm³ düşerse derhal kesilir (Kırmızı zon).'
        ]
      }
    ],
    treatmentResistance: {
      definition: 'Uygun doz ve sürede denenmiş en az 2 farklı antipsikotik tedavisine (biri ikinci kuşak olmak üzere) rağmen pozitif semptomların devam etmesi.',
      nextSteps: [
        'Zaman kaybetmeden KLOZAPİN protokolünü başlatın (Ortalama gecikme ne yazık ki dünyada 5 yıldır; geciktikçe yanıt oranı düşer).',
        'Klozapine kısmi yanıtta EKT augmentasyonu veya Aripiprazol eklenmesi (metabolik yan etkileri hafifletmek ve D2 parsiyel agonizmi için).'
      ]
    },
    specialPopulations: [
      {
        population: 'Yaşlı veya Demanslı Hastalar',
        recommendation: 'Kara kutu uyarısı: Demansa bağlı psikozda mortalite artışı! Minimum doz, kısa süre uygulanmalı; antikolinerjik yükten kaçınılmalıdır.'
      },
      {
        population: 'Tardif Diskinezi Gelişen Hastalar',
        recommendation: 'Mevcut antipsikotik hızla Klozapin veya Ketiapin gibi düşük D2 afiniteli ajana çevrilmeli; VMAT2 inhibitörleri (Valbenazin, Dötetrabenazin) değerlendirilmelidir.'
      }
    ],
    clinicalPearls: [
      'Antipsikotik etkinliğini sadece doza bağlamayın; D2 reseptör doluluğu %65-80 arasında terapötiktir, %80 üzerine çıktığında antipsikotik etki artmaz yalnızca EPS ve hiperprolaktinemi artar.',
      'Sigara dumanındaki polisiklik hidrokarbonlar CYP1A2’yi güçlü şekilde indükler. Günde 1 paket sigara içen bir hastada Klozapin ve Olanzapin kan düzeyleri yarı yarıya düşer; hasta sigarayı aniden bırakırsa toksisite gelişebilir!'
    ]
  },
  {
    id: 'anxiety-panic-guideline',
    title: 'Anksiyete ve Panik Bozukluk Tedavi Kılavuzu',
    shortTitle: 'Anksiyete & Panik Kılavuzu',
    category: 'Anksiyete & Travma',
    sourceReference: 'NICE Guidelines & PsychDB Clinical Practice Guide',
    lastUpdated: '2024 Güncellemesi',
    executiveSummary: 'Yaygın Anksiyete Bozukluğu (YAB) ve Panik Bozuklukta birinci basamak tedavi SSRI/SNRI grubu antidepresanlar ve Bilişsel Davranışçı Terapidir (BDT). Benzodiazepinler yalnızca ilk 2-4 haftalık köprüleme döneminde veya akut krizde kullanılmalı; bağımlılık riski nedeniyle kronik idame olarak önerilmemektedir.',
    diagnosticWorkup: [
      'Kardiyolojik Değerlendirme (Panik atakta göğüs ağrısı, taşikardi, mitral kapak prolapsusu veya aritmi dışlanması)',
      'Tiroid Fonksiyon Testleri (Hipertiroidi taraması)',
      'Feokromositoma veya Hipoglisemi Taraması (Atipik paroksismal otonomik deşarjlarda)',
      'Kafein ve Enerji İçeceği Tüketimi / Madde Kullanımı Öyküsü'
    ],
    corePrinciples: [
      'Anksiyete hastalarında antidepresan başlarken daima "Start Low, Go Slow" kuralı uygulanmalıdır: Normal başlangıç dozunun yarısı ile başlanmalı, ilk günlerdeki anksiyete alevlenmesi önlenmelidir.',
      'Panik atakların kontrol altına alınması ile beklenti anksiyetesinin ve agorafobik kaçınmanın kırılması farklı süreçlerdir; kaçınma için BDT veya maruz bırakma (exposure) şarttır.',
      'Benzodiazepinler hiçbir zaman tek başına uzun dönemli bir tedavi değildir.'
    ],
    algorithmSteps: [
      {
        stepNumber: 1,
        stepTitle: 'İlk Basamak: SSRI / SNRI ve Bilişsel Davranışçı Terapi',
        indication: 'Yaygın Anksiyete Bozukluğu, Panik Bozukluk veya Sosyal Anksiyete',
        recommendation: 'Yarım doz SSRI/SNRI ile başlanıp 1 hafta sonra tam doza çıkılması + BDT.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Sertralin / Essitalopram',
            classType: 'SSRI',
            dosageGuide: 'Sertralin: 25 mg başla, 50-100 mg/gün hedef; Essitalopram: 5 mg başla, 10-20 mg/gün',
            clinicalNote: 'Mükemmel güvenlik profili. İlk 1-2 hafta hafif ajitasyon veya bulantı görülebilir, hastaya önceden bilgi verilmelidir.'
          },
          {
            name: 'Venlafaksin XR / Duloksetin',
            classType: 'SNRI',
            dosageGuide: 'Venlafaksin XR: 37.5 mg başla, 75-225 mg/gün; Duloksetin: 30-60 mg/gün',
            clinicalNote: 'Özellikle kronik yaygın anksiyetede ve somatik ağrı eşlik ettiğinde birinci basamak onaylı ajandır.'
          }
        ],
        durationBeforeSwitch: '6 - 8 Hafta',
        decisionPoints: [
          'Akut şiddetli panik krizlerinde ilk 2 hafta sınırlı süreyle kısa etkili benzodiazepin (örn. Alprazolam 0.5 mg veya Lorazepam 1 mg) reçete edilebilir; 2-4 hafta içinde kesilmelidir.'
        ]
      },
      {
        stepNumber: 2,
        stepTitle: 'İkinci Basamak: Pregabalin veya Buspiron Eklemesi / Değişimi',
        indication: 'İlk basamak SSRI/SNRI ile yetersiz yanıt veya tolere edememe',
        recommendation: 'Pregabalin başlanması (YAB için Avrupa kılavuzlarında 1. basamak) veya Buspiron eklenmesi.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Pregabalin (Lyrica)',
            classType: 'Voltaj Kapılı Kalsiyum Kanal Alfa-2-Delta Ligandı',
            dosageGuide: '75 mg/gün başla; 150 - 300 mg/gün (Günde 2 dozda)',
            clinicalNote: 'Etkisi günler içinde başlar (hızlı anksiyolitik). SSRI’lar gibi 4 hafta bekleme süresi yoktur. Baş dönmesi ve suistimal potansiyeli izlenmelidir.'
          },
          {
            name: 'Buspiron',
            classType: '5-HT1A Parsiyel Agonisti',
            dosageGuide: '15 - 30 mg/gün (Günde 2-3 doza bölünerek)',
            clinicalNote: 'Sedasyon, bağımlılık veya tolerans yapmaz; ancak etkisi 2-4 haftada ortaya çıkar ve benzodiazepin geçmişi olanlarda yanıt düşüktür.'
          }
        ],
        durationBeforeSwitch: '4 - 6 Hafta',
        decisionPoints: [
          'Tedaviye dirençli olgularda düşük doz atipik antipsikotik (Ketiapin XR 50-150 mg) güçlendirmesi düşünülebilir.'
        ]
      }
    ],
    treatmentResistance: {
      definition: 'İki farklı SSRI/SNRI ve BDT kombinasyonuna rağmen panik atakların veya yaygın anksiyetenin sürmesi.',
      nextSteps: [
        'Kardiyak disritmileri (Holter EKG) ve tiroid disfonksiyonunu tekrar değerlendir.',
        'Gizli madde, kafein veya alkol kötüye kullanımını araştır (rebound anksiyete).',
        'Trisiklik Antidepresan (Klomipramin veya İmipramin) denemesini gündeme al.'
      ]
    },
    specialPopulations: [
      {
        population: 'Yaşlı Hastalar',
        recommendation: 'Benzodiazepinler deliryum, sedasyon ve kalça kırığı riskini 3 kat artırır! Kesinlikle kaçınılmalı veya çok düşük doz kısa etkili (Lorazepam) tercih edilmelidir.'
      }
    ],
    clinicalPearls: [
      'Panik atak sırasında hastanın kanındaki serbest kalsiyum miktarı hiperventilasyon ve solunumsal alkaloz nedeniyle düşer; parestezi ve tetani bu yüzdendir. Hastaya kese kağıdına soluma veya yavaş diyafram nefesi öğretilmelidir.',
      'Antidepresanı ilk gün 20 mg Escitalopram veya 100 mg Sertralin gibi tam doz başlayan hekimler hastayı acil servise "panik alevlenmesi" ile gönderir. Daima yarım dozla başlayın!'
    ]
  },
  {
    id: 'emergency-agitation-guideline',
    title: 'Acil Psikiyatri: Akut Ajitasyon ve Kriz Yönetimi',
    shortTitle: 'Acil Ajitasyon Yönetimi',
    category: 'Acil Psikiyatri & Kriz',
    sourceReference: 'Project BETA (Best practices in Evaluation and Treatment of Agitation) & PsychDB',
    lastUpdated: '2024 Konsensüsü',
    executiveSummary: 'Akut ajitasyon acil bir tıbbi ve psikiyatrik durumdur. İlk ve en önemli kural sözel de-eskalasyon (verbal de-escalation) ve güvenli ortam sağlamaktır. Farmakolojik müdahale gerektiğinde hasta ile işbirliği yapılarak oral ilaçlar öncelenmeli; reddedilmesi ve kendine/çevreye zarar riski halinde parenteral (IM) protokol uygulanmalıdır.',
    diagnosticWorkup: [
      'Hayati Bulguların Hızlı Ölçümü: Nabız, Kan Basıncı, Oksijen Satürasyonu, Ateş',
      'Parmak Ucu Kan Şekeri (Hipoglisemi agresyonun en sık taklitçisidir!)',
      'Pupil Muayenesi (Miyozis: Opioid toksisitesi; Midriyazis: Antikolinerjik, Sempatomimetik/Kokain)',
      'Organik Deliryum Taraması (Akut konfüzyon, dalgalı bilinç düzeyi)'
    ],
    corePrinciples: [
      'Ajitasyon tedavisinin amacı hastayı "bayıltmak" veya komaya sokmak değil, hastayı sakinleştirip güvenli iletişim kurabilmektir.',
      'Oral tedavi daima IM enjeksiyondan önceliklidir (hasta uyumu ve travmatizasyonu önlemek için).',
      '⚠️ KRİTİK UYARI: Parenteral İM Olanzapin ile parenteral İM Benzodiazepin (Lorazepam/Midazolam) AYNI ANDA UYGULANMAZ! Şiddetli hipotansiyon ve ölümcül solunum arresti yapabilir; aralarında en az 2 saat olmalıdır.'
    ],
    algorithmSteps: [
      {
        stepNumber: 1,
        stepTitle: 'Birinci Aşama: Sözel De-Eskalasyon ve Güvenlik',
        indication: 'Hafif-orta düzeyde huzursuzluk, ajitasyon başlangıcı',
        recommendation: 'Sakin tonlama, kişisel alan bırakma, tehditkar olmayan beden dili ve hastanın öfkesini doğrulama.',
        evidenceGrade: 'Düzey 1 (Project BETA Altın Kuralı)',
        options: [
          {
            name: 'Sözel İkna & Ortam Değişimi',
            classType: 'Davranışsal Müdahale',
            dosageGuide: 'Uygulama: 10 Temel Kural (2 kol boyu mesafe, çıkış kapısını kapatmama, göz temasını abartmama)',
            clinicalNote: 'Hastaya yiyecek, su veya sessiz bir oda teklif edilmesi ajitasyonu %50 olguda yatıştırır.'
          }
        ],
        durationBeforeSwitch: '15 - 30 Dakika',
        decisionPoints: [
          'Hasta sakinleşirse tanısal görüşmeye geçilir.',
          'Ajitasyon tırmanırsa oral farmakoterapi teklif edilir.'
        ]
      },
      {
        stepNumber: 2,
        stepTitle: 'İkinci Aşama: Oral / Ağızda Dağılan Sakinleştirici Tedavi',
        indication: 'Sözel iletişime yanıt vermeyen ancak oral ilacı kabul eden ajite hasta',
        recommendation: 'Ağızda dağılan tablet (ODT) veya oral solüsyon formunda atipik antipsikotik veya lorazepam.',
        evidenceGrade: 'Düzey 1 (Güçlü Kanıt)',
        options: [
          {
            name: 'Olanzapin ODT (Zydis)',
            classType: 'Atipik Antipsikotik ODT',
            dosageGuide: '5 - 10 mg oral/dil altı',
            clinicalNote: 'Hızlı emilir, sedatif ve anksiyolitik etkisi yüksektir. Ekstrapiramidal yan etki riski çok düşüktür.'
          },
          {
            name: 'Lorazepam Oral / Dil altı',
            classType: 'Benzodiazepin',
            dosageGuide: '1 - 2 mg sublingual',
            clinicalNote: 'Madde yoksunluğu veya belirsiz etiyolojili ajitasyonda en güvenli tercihtir.'
          },
          {
            name: 'Haloperidol + Lorazepam Oral',
            classType: 'Kombine Tedavi',
            dosageGuide: 'Haloperidol 5 mg + Lorazepam 2 mg oral',
            clinicalNote: 'Klasik sinerjik kombinasyon; antipsikotik etki ile sedasyonu birleştirir, EPS riskini düşürür.'
          }
        ],
        durationBeforeSwitch: '30 - 45 Dakika',
        decisionPoints: [
          'Hasta ilacı reddediyor ve şiddet/zarar verme davranışı gösteriyorsa parenteral aşamaya geçilir.'
        ]
      },
      {
        stepNumber: 3,
        stepTitle: 'Üçüncü Aşama: Parenteral (IM) Acil Sedasyon Protokolü',
        indication: 'Kendine veya başkalarına fiziksel zarar verme riski olan, oral tedaviyi reddeden ağır ajite hasta',
        recommendation: 'İntramüsküler Haloperidol + Lorazepam veya İM Olanzapin uygulanması.',
        evidenceGrade: 'Düzey 1 (Kanıtlanmış Acil Protokol)',
        options: [
          {
            name: 'Haloperidol 5 mg IM + Lorazepam 2 mg IM',
            classType: 'Altın Standart Parenteral Protokol',
            dosageGuide: 'Ayrı enjektörlerde IM uygulanır (Gerekirse 30-60 dk sonra tekrarlanabilir, 24 saatte maks 20 mg Halo)',
            clinicalNote: 'Dünyada en yaygın test edilmiş acil kombinasyonudur. Akut distoni gelişirse Biperiden (Akineton) 5 mg IM hazır bulundurulmalıdır.'
          },
          {
            name: 'Olanzapin 10 mg IM',
            classType: 'Atipik Antipsikotik İM',
            dosageGuide: '10 mg tek doz IM (Yaşlı veya zayıf hastalarda 5 mg)',
            clinicalNote: '⚠️ ASLA parenteral Benzodiazepin ile kombine edilmez! Solunum depresyonu riski.'
          }
        ],
        durationBeforeSwitch: '30 Dakika (Hayati bulgular ve bilinç düzeyi sürekli monitörize edilmelidir)',
        decisionPoints: [
          'Solunum sayısı <10/dk veya SpO2 <%92 düşerse oksijen desteği ve hava yolu güvenliği sağlanır.'
        ]
      }
    ],
    treatmentResistance: {
      definition: 'Parenteral iki doz müdahaleye rağmen yatışmayan şiddetli hiperaktif deliryum veya katatonik eksitasyon.',
      nextSteps: [
        'Etiyolojide intoksikasyon (Flakka, Bonzai, Metamfetamin, Fensiklidin) şüphesini derinleştir.',
        'Yoğun bakım koşullarında Midazolam veya Propofol infüzyonu için anestezi konsültasyonu isteyin.',
        'Katatonik eksitasyon ise acil EKT hayat kurtarıcıdır.'
      ]
    },
    specialPopulations: [
      {
        population: 'Yaşlı / Deliryumlu Hastalar',
        recommendation: 'Benzodiazepinler yaşlı deliryumunda paradoksal ajitasyonu artırır! Yalnızca çok düşük doz Haloperidol (0.5 - 1 mg oral/IM) veya Ketiapin (12.5 - 25 mg) tercih edilmelidir.'
      },
      {
        population: 'Alkol / Madde Yoksunluğu Ajitasyonu',
        recommendation: 'Antipsikotikler nöbet eşiğini düşürür! Bu grupta tek güvenli tercih Benzodiazepinlerdir (Diazepam veya Lorazepam).'
      }
    ],
    clinicalPearls: [
      'Ajite bir hastaya yaklaşırken asla odada kapı ile hasta arasına girmeyin; çıkış yolunu açık bırakın.',
      'Haloperidol IM sonrası gelişen boyunda kasılma, gözlerin yukarı kayması (okülojirik kriz) akut distonidir; hasta numara yapmıyordur. Tedavisi acil 1 ampul Biperiden (Akineton) IM veya IV yavaş enjeksiyondur.'
    ]
  },
  {
    id: 'alcohol-withdrawal-guideline',
    title: 'Alkol Yoksunluk Sendromu ve Delirium Tremens Kılavuzu',
    shortTitle: 'Alkol Yoksunluğu Kılavuzu',
    category: 'Bağımlılık & Toksikoloji',
    sourceReference: 'ASAM (American Society of Addiction Medicine) & PsychDB Guidelines',
    lastUpdated: '2024 Güncellemesi',
    executiveSummary: 'Alkol yoksunluğu potansiyel olarak ölümcül (mortalite %5-15) bir tıbbi acildir. Tedavinin temel taşı CIWA-Ar skoru bazlı semptom-tetiklemeli benzodiazepin protokolü ve Wernicke ensefalopatisini önlemek için glukozdan ÖNCE parenteral yüksek doz Tiamin (B1) verilmesidir.',
    diagnosticWorkup: [
      'CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol) Skorlaması',
      'Kan Alkol Düzeyi (KAD) ve Karaciğer Enzimleri (AST, ALT, GGT)',
      'Elektrolit Paneli: Magnezyum, Potasyum, Fosfat, Kalsiyum (Hipomagnezemi nöbet eşiğini düşürür!)',
      'Tam Kan Sayımı ve Koagülasyon Paneli (INR/PT - Siroz ve kanama diyatezi kontrolü)'
    ],
    corePrinciples: [
      '⚠️ KURAL 1: Hastaya herhangi bir dekstrozlu/glukozlu sıvı takılmadan ÖNCE mutlaka parenteral Tiamin (100-500 mg IV/IM) yapılmalıdır! Aksi takdirde glukoz metabolizması son tiamin depolarını tüketerek akut Wernicke-Korsakoff Ensefalopatisine yol açar.',
      'Semptom-tetiklemeli protokol (CIWA-Ar ≥ 10 olduğunda ilaç vermek), sabit doz protokolüne göre daha az kümülatif ilaç kullanımına ve daha kısa yatış süresine olanak tanır.',
      'Karaciğer yetmezliği veya sirozu olan hastalarda "LOT" kuralı geçerlidir: Yalnızca Lorazepam veya Oksazepam kullanılmalıdır (karaciğerde faz-1 oksidasyona uğramazlar).'
    ],
    algorithmSteps: [
      {
        stepNumber: 1,
        stepTitle: 'İlk Basamak: Tiamin Desteği ve Değerlendirme',
        indication: 'Son kadeh üzerinden 6-24 saat geçmiş, titreme, terleme, taşikardi başlayan hasta',
        recommendation: 'Tiamin 200-500 mg IV/IM başla + CIWA-Ar skorlaması yap.',
        evidenceGrade: 'Düzey 1 (Hayati Önemde)',
        options: [
          {
            name: 'Tiamin (B1 Vitamini)',
            classType: 'Esansiyel Vitamin',
            dosageGuide: '100 - 500 mg IV/IM günde 1-3 kez (İlk doz glukozdan ÖNCE verilmeli)',
            clinicalNote: 'Okülomotor felç, ataksi ve konfüzyondan oluşan Wernicke triadı olguların sadece üçte birinde tam görülür; şüphe anında derhal verilmelidir.'
          }
        ],
        durationBeforeSwitch: 'Hemen başlanmalıdır',
        decisionPoints: [
          'CIWA-Ar < 10 ise hafif yoksunluk: Destekleyici tedavi ve yakın takip.',
          'CIWA-Ar ≥ 10 ise orta-ağır yoksunluk: Benzodiazepin protokolünü başlat.'
        ]
      },
      {
        stepNumber: 2,
        stepTitle: 'İkinci Basamak: Semptom-Tetiklemeli Benzodiazepin Tedavisi',
        indication: 'CIWA-Ar skoru ≥ 10 veya yoksunluk nöbeti öyküsü olan hasta',
        recommendation: 'Diazepam veya Klordiazepoksit; Karaciğer yetmezliğinde Lorazepam verilmesi.',
        evidenceGrade: 'Düzey 1 (Altın Standart)',
        options: [
          {
            name: 'Diazepam (Diazem)',
            classType: 'Uzun Etkili Benzodiazepin',
            dosageGuide: '10 - 20 mg oral veya 5-10 mg yavaş IV (CIWA-Ar ≥ 10 oldukça 1-2 saatte bir tekrarlanır)',
            clinicalNote: 'Uzun yarı ömrü ve aktif metabolitleri sayesinde "kendi kendine kademeli kesilme" (self-tapering) etkisi sağlar; rebound nöbetleri önler.'
          },
          {
            name: 'Lorazepam (Ativan)',
            classType: 'Orta Etkili Benzodiazepin (LOT Grubu)',
            dosageGuide: '1 - 4 mg oral/IM/IV (Her 1-2 saatte bir CIWA-Ar ≥ 10 ise)',
            clinicalNote: 'Karaciğer fonksiyon testleri bozuk, sirotik veya yaşlı hastalarda birikme ve hepatik koma yapmaz; en güvenli tercihtir.'
          }
        ],
        durationBeforeSwitch: 'Yoksunluk semptomları yatışana kadar (genellikle 3-5 gün)',
        decisionPoints: [
          'Hasta kontrolsüz halüsinasyonlar, şiddetli ajitasyon ve otonomik instabiliteye girerse: Delirium Tremens protokolü uygulanır.'
        ]
      }
    ],
    treatmentResistance: {
      definition: 'Yüksek doz benzodiazepinlere (>50 mg diazepam eşdeğeri) rağmen kontrol altına alınamayan dirençli alkol yoksunluğu.',
      nextSteps: [
        'Fenobarbital (GABA-A reseptörünü benzodiazepinlerden farklı bir allosterik bölgeden açar ve glutamat NMDA reseptörünü bloke eder) yüklemesi yap.',
        'Yoğun bakımda Dexmedetomidin veya Propofol infüzyonu planla.'
      ]
    },
    specialPopulations: [
      {
        population: 'Karaciğer Sirozu Olan Hastalar',
        recommendation: 'Diazepam ve Klordiazepoksit kontrendikedir (yarı ömürleri günlerce uzar ve hepatik ensefalopatiyi tetikler). Sadece Lorazepam veya Oksazepam kullanılmalıdır.'
      }
    ],
    clinicalPearls: [
      'Alkol yoksunluk nöbetleri genellikle son kadehten sonraki 12-48 saat içinde ortaya çıkar ve jeneralize tonik-kloniktir. Antiepileptik ilaçlar (Fenitoin vb.) bu nöbetleri önlemede etkisizdir; tek koruyucu Benzodiazepinlerdir!',
      'Delirium Tremens (DT) ise tipik olarak 48-96 saat sonra başlar; mikropsuz görsel halüsinasyonlar (böcekler, küçük hayvanlar - lilliputian halüsinasyonlar) ve ağır taşikardi/hipertermi ile seyreder.'
    ]
  }
];
