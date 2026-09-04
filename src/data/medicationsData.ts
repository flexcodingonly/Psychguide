import { Medication } from '../types';

export const MEDICATIONS_DATA: Medication[] = [
  {
    id: 'sertraline',
    genericName: 'Sertralin',
    brandNamesTR: ['Lustral', 'Selectra', 'Seralin', 'Zoloft'],
    drugClass: 'SSRI',
    indications: ['Major Depresif Bozukluk', 'OKB', 'Panik Bozukluk', 'TSSB', 'Sosyal Anksiyete', 'PMDB'],
    startingDose: '50 mg/gün (Panikte 25 mg)',
    targetDose: '50 - 150 mg/gün',
    maxDose: '200 mg/gün (Dirençli OKB\'de bazen 250-300 mg)',
    halfLife: '26 saat (Aktif metabolit N-desmetilsertralin: 60-100 saat)',
    metabolismEnzymes: ['CYP2B6', 'CYP2C19', 'CYP2D6', 'CYP3A4 (hafif)'],
    receptorProfile: [
      { target: 'SERT (Serotonin Taşıyıcı)', affinity: 'Çok Yüksek', clinicalEffect: 'Antidepresan ve anksiyolitik temel etki' },
      { target: 'DAT (Dopamin Taşıyıcı)', affinity: 'Orta', clinicalEffect: 'Düşük düzeyde dopaminerjik canlandırıcı etki (apatiyi azaltabilir)' },
      { target: 'Sigma-1', affinity: 'Düşük', clinicalEffect: 'Anksiyolitik regülasyon' }
    ],
    commonSideEffects: ['Mide bulantısı / dispepsi', 'Gevşek dışkı / diyare (sık)', 'Uykusuzluk / huzursuzluk', 'Cinsel işlev bozukluğu (ejakülasyon gecikmesi, libido azalması)', 'Başağrısı'],
    blackBoxWarnings: ['Çocuk ve genç erişkinlerde (<24 yaş) tedavinin ilk haftalarında intihar düşüncesi izlemi.'],
    monitoringLabs: ['Başlangıçta rutin biyokimya; yaşlılarda hiponatremi riski (SIADH) açısından serum Na takibi.'],
    pregnancyLactation: 'Emzirme döneminde en düşük anne sütü geçiş oranına sahip SSRI\'lardan biridir (tercih edilir). Gebelikte Kategori C.',
    clinicalPearls: [
      'Gastrointestinal yan etkileri ("Sertraline = Squirt-raline") diğer SSRI\'lara göre biraz daha sıktır; tok karnına alınması bulantıyı belirgin azaltır.',
      'Kardiyak güvenliği yüksektir; SADHART çalışmasında post-MI koroner arter hastalarında güvenilirliği kanıtlanmıştır.'
    ]
  },
  {
    id: 'escitalopram',
    genericName: 'Essitalopram',
    brandNamesTR: ['Cipralex', 'Secita', 'Citoles', 'Eslopram'],
    drugClass: 'SSRI',
    indications: ['Major Depresif Bozukluk', 'Yaygın Anksiyete Bozukluğu', 'Panik Bozukluk', 'Sosyal Anksiyete', 'OKB'],
    startingDose: '10 mg/gün (Yaşlılarda/panikte 5 mg)',
    targetDose: '10 - 20 mg/gün',
    maxDose: '20 mg/gün (Yaşlılarda ve hepatik yetmezlikte 10 mg)',
    halfLife: '27 - 32 saat',
    metabolismEnzymes: ['CYP2C19', 'CYP3A4', 'CYP2D6'],
    receptorProfile: [
      { target: 'SERT (Allosterik & Primer Bağlanma)', affinity: 'Çok Yüksek', clinicalEffect: 'En saf SSRI (en yüksek SERT selektivitesi)' }
    ],
    commonSideEffects: ['Bulantı', 'Uykululuk veya uykusuzluk', 'Terleme', 'Cinsel işlev bozukluğu', 'Yorgunluk'],
    blackBoxWarnings: ['Gençlerde intihar riski izlemi.'],
    monitoringLabs: ['Yüksek dozlarda ve riskli hastalarda EKG (QTc kontrolü), serum elektrolitleri (Na, K, Mg).'],
    pregnancyLactation: 'Gebelikte Kategori C. Anne sütüne orta düzeyde geçer.',
    clinicalPearls: [
      'Sitalopramın S-enantiomeridir. R-enantiomerinin bloke edici etkisi ortadan kaldırıldığı için saf ve hızlı etkilidir.',
      'Doz ilişkili QTc uzaması riski nedeniyle FDA ve EMA tarafından 20 mg tavan doz olarak önerilir (>60 yaş 10 mg).'
    ]
  },
  {
    id: 'fluoxetine',
    genericName: 'Fluoksetin',
    brandNamesTR: ['Prozac', 'Depreks', 'Fulsac', 'Zedprex'],
    drugClass: 'SSRI',
    indications: ['Major Depresyon', 'OKB', 'Bulimiya Nervoza', 'Panik Bozukluk', 'Bipolar Depresyon (Olanzapin ile kombine)'],
    startingDose: '20 mg/gün sabah',
    targetDose: '20 - 40 mg/gün',
    maxDose: '80 mg/gün (Bulimiya ve OKB\'de)',
    halfLife: 'Fluoksetin: 2-4 gün; Aktif metabolit Norfluoksetin: 7-15 gün!',
    metabolismEnzymes: ['CYP2D6 (Güçlü inhibitör!)', 'CYP2C9/2C19 haffif-orta'],
    receptorProfile: [
      { target: 'SERT', affinity: 'Çok Yüksek', clinicalEffect: 'Serotonerjik geri alım inhibisyonu' },
      { target: '5-HT2C Antagonizması', affinity: 'Orta', clinicalEffect: 'Noradrenalin ve dopamin salınımı artışı (uyarıcı/aktive edici profil)' }
    ],
    commonSideEffects: ['Anksiyete ve ajitasyon (ilk günlerde)', 'Uykusuzluk', 'İştah azalması ve kilo kaybı', 'Tremor', 'Cinsel işlev bozukluğu'],
    blackBoxWarnings: ['Gençlerde intihar izlemi.'],
    monitoringLabs: ['Rutin taramalar; diyabetiklerde kan şekeri takibi (glisemik kontrolü düzeltebilir).'],
    pregnancyLactation: 'Gebelikte en çok veri olan SSRI\'lardan biridir, ancak uzun yarılanma ömrü nedeniyle yenidoğanda geçici çekilme belirtisi yapabilir.',
    clinicalPearls: [
      'Uzun yarı ömrü sayesinde ilacı almayı unutan hastalarda kesilme sendromu (discontinuation syndrome) en az görülen SSRI\'dır.',
      'Güçlü bir CYP2D6 inhibitörüdür! Tamoksifen (ön ilacın aktifleşmesini önler), TSA\'lar, beta-blokerler ve antipsikotiklerle ciddi etkileşime girer.'
    ]
  },
  {
    id: 'venlafaxine',
    genericName: 'Venlafaksin',
    brandNamesTR: ['Efexor XR', 'Veniba', 'Venegis', 'Efectin'],
    drugClass: 'SNRI',
    indications: ['Major Depresif Bozukluk', 'Yaygın Anksiyete Bozukluğu', 'Sosyal Fobi', 'Panik Bozukluk', 'Nöropatik Ağrı'],
    startingDose: '37.5 - 75 mg/gün XR',
    targetDose: '150 - 225 mg/gün',
    maxDose: '375 mg/gün (yatan hastalarda)',
    halfLife: 'Venlafaksin: 5 saat; Aktif metabolit Desvenlafaksin: 11 saat',
    metabolismEnzymes: ['CYP2D6 (Desvenlafaksine dönüşür)', 'CYP3A4'],
    receptorProfile: [
      { target: 'SERT', affinity: 'Çok Yüksek', clinicalEffect: 'Düşük dozlarda (<150 mg) baskın serotonerjik etki' },
      { target: 'NET (Noradrenalin Taşıyıcı)', affinity: 'Orta', clinicalEffect: 'Orta-yüksek dozlarda (≥150 mg) adrenerjik aktivite artışı' },
      { target: 'DAT', affinity: 'Çok Düşük', clinicalEffect: 'Çok yüksek dozlarda zayıf dopaminerjik etki' }
    ],
    commonSideEffects: ['Bulantı', 'Kan basıncı artışı (hipertansiyon)', 'Aşırı terleme', 'Taşikardi', 'Uykusuzluk', 'Cinsel disfonksiyon'],
    blackBoxWarnings: ['Gençlerde intihar düşüncesi riski.'],
    monitoringLabs: ['Düzenli kan basıncı (tansiyon) ve nabız ölçümü (özellikle ≥150-225 mg dozlarında).'],
    pregnancyLactation: 'Gebelikte Kategori C. Fetal risk/yarar oranı gözetilmelidir.',
    clinicalPearls: [
      'Doz bağımlı etki mekanizması gösterir: <150 mg dozlarda esasen SSRI gibi davranır, ≥150 mg dozlarda NET inhibisyonu devreye girer.',
      'Aniden kesildiğinde çok şiddetli "elektrik çarpması hissi" (brain zaps), baş dönmesi ve anksiyete ile giden kesilme sendromu yapar; haftalar içinde kademeli azaltılmalıdır.'
    ]
  },
  {
    id: 'duloxetine',
    genericName: 'Duloksetin',
    brandNamesTR: ['Cymbalta', 'Duxet', 'Dyloxia', 'Nexetin'],
    drugClass: 'SNRI',
    indications: ['Major Depresif Bozukluk', 'Yaygın Anksiyete Bozukluğu', 'Diyabetik Nöropatik Ağrı', 'Fibromiyalji', 'Kronik Kas-İskelet Ağrısı'],
    startingDose: '30 mg/gün (Bulantıyı azaltmak için 1 hafta), ardından 60 mg/gün',
    targetDose: '60 mg/gün',
    maxDose: '120 mg/gün (60 mg üstünde ağrıda ek fayda sınırlıdır)',
    halfLife: '12 saat',
    metabolismEnzymes: ['CYP1A2', 'CYP2D6 (orta düzeyde inhibitör)'],
    receptorProfile: [
      { target: 'SERT', affinity: 'Çok Yüksek', clinicalEffect: 'Dengeli serotonerjik inhibisyon' },
      { target: 'NET', affinity: 'Yüksek', clinicalEffect: 'Başlangıç dozlarından itibaren anlamlı noradrenerjik inhibisyon ve spinal inen ağrı yolaklarını baskılama' }
    ],
    commonSideEffects: ['Bulantı (en sık)', 'Ağız kuruluğu', 'Kabızlık', 'Uykululuk veya uykusuzluk', 'Terleme', 'Karaciğer enzim yükselmesi'],
    blackBoxWarnings: ['Gençlerde intihar riski.'],
    monitoringLabs: ['Karaciğer fonksiyon testleri (ALT/AST), kan basıncı takibi.'],
    pregnancyLactation: 'Gebelikte Kategori C. Kronik karaciğer hastalığı veya alkol bağımlılığı olanlarda önerilmez.',
    clinicalPearls: [
      'Depresyon ve anksiyeteye eşlik eden kronik ağrısı, fibromiyaljisi veya diyabetik nöropatisi olan hastalarda ilk tercihlerdendir.',
      'Hepatotoksisite riski nedeniyle kronik karaciğer yetmezliğinde KONTRENDİKEDİR.'
    ]
  },
  {
    id: 'bupropion',
    genericName: 'Bupropion',
    brandNamesTR: ['Wellbutrin XL', 'Zyban'],
    drugClass: 'Diğer Antidepresan',
    indications: ['Major Depresif Bozukluk', 'Mevsimsel Duygudurum Bozukluğu', 'Sigara Bırakma Tedavisi', 'DEHB (endikasyon dışı)'],
    startingDose: '150 mg/gün sabah XL',
    targetDose: '150 - 300 mg/gün',
    maxDose: '300 - 450 mg/gün (Nöbet riski nedeniyle tek dozda >300 mg verilmez)',
    halfLife: 'Bupropion: 14-21 saat; Aktif metabolit Hidroksibupropion: 20-37 saat',
    metabolismEnzymes: ['CYP2B6', 'CYP2D6 (Güçlü inhibitör!)'],
    receptorProfile: [
      { target: 'DAT (Dopamin Taşıyıcı)', affinity: 'Orta', clinicalEffect: 'Ödül yolağını aktive eder, motivasyon ve enerji artışı' },
      { target: 'NET (Noradrenalin Taşıyıcı)', affinity: 'Orta', clinicalEffect: 'Uyanıklık, dikkat ve konsantrasyon artışı' },
      { target: 'Nikotinik Asetilkolin Reseptörleri', affinity: 'Yüksek', clinicalEffect: 'Sigara bırakmada aşermeyi ve yoksunluğu baskılama' }
    ],
    commonSideEffects: ['Uykusuzluk (akşam alınmamalıdır)', 'Ağız kuruluğu', 'Baş ağrısı', 'Ajitasyon / anksiyete', 'Tremor', 'Kilo kaybı'],
    blackBoxWarnings: ['Anoreksiya ve bulimiya nervoza öyküsü olanlarda ve epilepsi hastalarında nöbet eşiğini düşürdüğü için KONTRENDİKEDİR!'],
    monitoringLabs: ['Kan basıncı ve nabız (özellikle hipertansiflerde).'],
    pregnancyLactation: 'Gebelikte Kategori C. Nöbet öyküsü olanlarda kesinlikle kontrendikedir.',
    clinicalPearls: [
      'Cinsel işlev bozukluğu (libido kaybı, anorgazmi) yapmaz; hatta SSRI kaynaklı cinsel yan etkileri düzeltmek için güçlendirme olarak sıkça eklenir.',
      'Kilo alımı yapmaz, aksine hafif kilo kaybına yol açabilir.'
    ]
  },
  {
    id: 'mirtazapine',
    genericName: 'Mirtazapin',
    brandNamesTR: ['Remeron', 'Zestat', 'Redepra', 'Mirtaron'],
    drugClass: 'Diğer Antidepresan',
    indications: ['Major Depresif Bozukluk (özellikle belirgin uykusuzluk ve iştahsızlık eşlik eden)', 'Dirençli Depresyon kombinasyonu'],
    startingDose: '15 mg/gün gece yatarken',
    targetDose: '30 - 45 mg/gün',
    maxDose: '45 mg/gün',
    halfLife: '20 - 40 saat',
    metabolismEnzymes: ['CYP1A2', 'CYP2D6', 'CYP3A4'],
    receptorProfile: [
      { target: 'Santral Presinaptik Alfa-2 Antagonizması', affinity: 'Çok Yüksek', clinicalEffect: 'Noradrenalin ve 5-HT1A üzerinden serotonin salınımında artış' },
      { target: 'H1 (Histamin) Reseptörü', affinity: 'Çok Yüksek', clinicalEffect: 'Güçlü sedasyon, uyku kalitesini artırma ve iştah açılması' },
      { target: '5-HT2A & 5-HT2C Antagonizması', affinity: 'Yüksek', clinicalEffect: 'Cinsel yan etkileri önler, anksiyeteyi azaltır' },
      { target: '5-HT3 Antagonizması', affinity: 'Yüksek', clinicalEffect: 'Güçlü anti-emetik (bulantıyı önleyici) etki' }
    ],
    commonSideEffects: ['Sedasyon ve gündüz uyku hali', 'İştah artışı ve karbonhidrat aşermesi', 'Kilo alımı', 'Ağız kuruluğu', 'Baş dönmesi'],
    blackBoxWarnings: ['Gençlerde intihar riski takibi.'],
    monitoringLabs: ['Açlık kan şekeri, lipid paneli ve kilo takibi.'],
    pregnancyLactation: 'Gebelikte Kategori C.',
    clinicalPearls: [
      'Paradoksal doz-sedasyon ilişkisi: Düşük dozlarda (7.5-15 mg) H1 antihistaminik etkisi baskındır ve çok güçlü sedasyon yapar; doz 30-45 mg\'a çıktığında noradrenerjik transmisyon artar ve sedasyon hafifleyebilir.',
      'Venlafaksin ile kombinasyonuna ("California Rocket Fuel") tedaviye dirençli depresyonda sıklıkla başvurulur.'
    ]
  },
  {
    id: 'olanzapine',
    genericName: 'Olanzapin',
    brandNamesTR: ['Zyprexa', 'Rexapin', 'Ozaprin', 'Zypadhera (Depo)'],
    drugClass: 'Atipik Antipsikotik (2./3. Kuşak)',
    indications: ['Şizofreni', 'Bipolar Akut Manik veya Karma Atak', 'Bipolar İdame Tedavisi', 'Dirençli Depresyon (Fluoksetin ile kombine)', 'Ajitasyon'],
    startingDose: '5 - 10 mg/gün gece',
    targetDose: '10 - 20 mg/gün',
    maxDose: '20 mg/gün (bazı kılavuzlarda dirençte 30 mg)',
    halfLife: '21 - 54 saat (ortalama 30 saat)',
    metabolismEnzymes: ['CYP1A2 (Sigara içimi klerensi %40-50 artırır!)', 'UGT1A4'],
    receptorProfile: [
      { target: '5-HT2A', affinity: 'Çok Yüksek', clinicalEffect: 'Negatif semptomlar ve EPS riskini azaltma' },
      { target: 'D2', affinity: 'Yüksek', clinicalEffect: 'Antipsikotik ve antimanik etkinlik' },
      { target: 'H1', affinity: 'Çok Yüksek', clinicalEffect: 'Ağır sedasyon ve belirgin kilo alımı' },
      { target: 'M1-M5 (Muskarinik)', affinity: 'Yüksek', clinicalEffect: 'Antikolinerjik yan etkiler (ağız kuruluğu, kabızlık)' }
    ],
    commonSideEffects: ['Hızlı ve belirgin kilo alımı', 'Metabolik sendrom (dislipidemi, insülin direnci, tip 2 DM)', 'Sedasyon', 'Ortostatik hipotansiyon', 'Hafif EPS (yüksek dozlarda)'],
    blackBoxWarnings: ['Demansı olan yaşlı hastalarda inme ve mortalite artışı riski.'],
    monitoringLabs: ['Açlık kan şekeri, HbA1c, açlık lipid profili, kilo/vücut kitle indeksi, bel çevresi (başlangıç, 1. ay, 3. ay ve 6 ayda bir).'],
    pregnancyLactation: 'Gebelikte Kategori C. Gebelik diyabeti riski yakın takip edilmelidir.',
    clinicalPearls: [
      'En güçlü antipsikotik ve antimanik etkinlik gösteren atipiklerden biridir; ancak en yüksek metabolik risk (kilo ve diyabet) profiline sahiptir.',
      'Sigara içimi CYP1A2 enzimini indükleyerek olanzapin kan düzeyini yarı yarıya düşürür. Hasta sigarayı bıraktığında olanzapin toksisitesi gelişebilir!'
    ]
  },
  {
    id: 'quetiapine',
    genericName: 'Ketiapin',
    brandNamesTR: ['Seroquel', 'Cedrina', 'Gyrex', 'Ketiap'],
    drugClass: 'Atipik Antipsikotik (2./3. Kuşak)',
    indications: ['Şizofreni', 'Bipolar Akut Mani', 'Bipolar Depresyon (tek başına kanıtlanmış)', 'Bipolar İdame', 'MDB Güçlendirme Tedavisi'],
    startingDose: 'Mani/Şizofrenide 50-100 mg; Bipolar Depresyonda 50 mg XR gece',
    targetDose: 'Bipolar depresyon: 300 mg/gün; Şizofreni/Mani: 400 - 800 mg/gün',
    maxDose: '800 mg/gün',
    halfLife: 'Ketiapin: 6-7 saat; Aktif metabolit Norketiapin: 12 saat',
    metabolismEnzymes: ['CYP3A4'],
    receptorProfile: [
      { target: 'H1', affinity: 'Çok Yüksek', clinicalEffect: 'Düşük dozlarda (25-50 mg) bile güçlü hipnosedatif etki' },
      { target: 'NET İnhibisyonu (Norketiapin üzerinden)', affinity: 'Yüksek', clinicalEffect: 'Bipolar depresyonda ve unipolar depresyonda antidepresan etkinlik' },
      { target: '5-HT2A', affinity: 'Yüksek', clinicalEffect: 'Antidepresan/anxiolitik katkı, EPS profilini koruma' },
      { target: 'D2', affinity: 'Düşük', clinicalEffect: 'Hızlı ayrılma (Hit-and-Run); EPS ve prolaktin yükselme riski neredeyse sıfıra yakındır' }
    ],
    commonSideEffects: ['Sedasyon / uyku hali', 'Ortostatik hipotansiyon ve refleks taşikardi (alfa-1 blokajı)', 'Kilo alımı ve hipertrigliseridemi', 'Ağız kuruluğu'],
    blackBoxWarnings: ['Demanslı yaşlılarda mortalite artışı; gençlerde antidepresan kullanımıyla ilişkili intihar izlemi.'],
    monitoringLabs: ['Açlık glukozu, lipid paneli, kan basıncı, kilo, başlangıçta ve periyodik katarakt/göz muayenesi.'],
    pregnancyLactation: 'Gebelikte Kategori C.',
    clinicalPearls: [
      'D2 reseptöründen hızla ayrıldığı için ("loose binding") Parkinson hastalarında veya Lewy cisimcikli demansta psikoz geliştiğinde Klozapin ile birlikte en güvenli tercihtir.',
      'Doz aralıkları fonksiyona göre radikal değişir: 25-50 mg sadece antihistaminik (sedatif); 150-300 mg antidepresan/anxiolitik; 400-800 mg antipsikotik/antimanik.'
    ]
  },
  {
    id: 'risperidone',
    genericName: 'Risperidon',
    brandNamesTR: ['Risperdal', 'Rizap', 'Ricus'],
    drugClass: 'Atipik Antipsikotik (2./3. Kuşak)',
    indications: ['Şizofreni', 'Bipolar Akut Manik Dönem', 'Otizmde İrritabilite ve Agresyon', 'Demans ile ilişkili şiddetli ajitasyon (kısa süreli)'],
    startingDose: '1 - 2 mg/gün',
    targetDose: '2 - 6 mg/gün',
    maxDose: '6 - 8 mg/gün (≥6 mg dozlarda tipik antipsikotik gibi EPS riski artar)',
    halfLife: 'Risperidon: 3 saat; Aktif metabolit Paliperidon (9-OH-risperidon): 24 saat',
    metabolismEnzymes: ['CYP2D6 (Paliperidona dönüştürür)', 'CYP3A4'],
    receptorProfile: [
      { target: '5-HT2A', affinity: 'Çok Yüksek', clinicalEffect: 'Negatif semptomlara etki' },
      { target: 'D2', affinity: 'Çok Yüksek', clinicalEffect: 'Güçlü pozitif semptom kontrolü' },
      { target: 'Alfa-1 ve Alfa-2', affinity: 'Yüksek', clinicalEffect: 'Ortostatik hipotansiyon' }
    ],
    commonSideEffects: ['Hiperprolaktinemi (galaktore, amenore, jinekomasti, cinsel disfonksiyon)', 'Ekstrapramidal semptomlar (özellikle >4-6 mg/gün)', 'Kilo alımı', 'Sedasyon'],
    blackBoxWarnings: ['Demanslı yaşlılarda mortalite artışı.'],
    monitoringLabs: ['Serum prolaktin düzeyi (semptomatik hastalarda), metabolik panel, kemik mineral yoğunluğu (kronik hiperprolaktinemide).'],
    pregnancyLactation: 'Gebelikte Kategori C.',
    clinicalPearls: [
      'Atipik antipsikotikler arasında prolaktini en çok yükselten ajandır (tüberoinfundibuler D2 reseptörlerine güçlü afinite ve kan-beyin bariyeri dışına yüksek penetrasyon).',
      'Uzun etkili enjeksiyon formu (Risperdal Consta) uyumsuz hastalarda çok etkilidir.'
    ]
  },
  {
    id: 'aripiprazole',
    genericName: 'Aripiprazol',
    brandNamesTR: ['Abilify', 'Aripa', 'Zedprex', 'Abizol'],
    drugClass: 'Atipik Antipsikotik (2./3. Kuşak)',
    indications: ['Şizofreni', 'Bipolar Mani ve İdame', 'Major Depresif Bozukluk Güçlendirme', 'Tourette Bozukluğu', 'Otizmde İrritabilite'],
    startingDose: '10 - 15 mg/gün (MDB güçlendirmede 2-5 mg/gün)',
    targetDose: '15 - 30 mg/gün (MDB\'de 5-10 mg/gün)',
    maxDose: '30 mg/gün',
    halfLife: '75 saat (Aktif metabolit Dehidroaripiprazol: 94 saat)',
    metabolismEnzymes: ['CYP2D6', 'CYP3A4'],
    receptorProfile: [
      { target: 'D2 Kısmi Agonisti (Parsiyel Agonist)', affinity: 'Çok Yüksek', clinicalEffect: 'Hiperdopaminerjik alanlarda (mezolimbik) blokaj, hipodopaminerjik alanlarda (mezokortikal) stimülasyon' },
      { target: '5-HT1A Kısmi Agonisti', affinity: 'Yüksek', clinicalEffect: 'Anksiyolitik ve antidepresan güçlendirme' },
      { target: '5-HT2A Antagonisti', affinity: 'Yüksek', clinicalEffect: 'EPS koruyucu' }
    ],
    commonSideEffects: ['Akatizi (içsel huzursuzluk, yerinde duramama - en sık erken yan etki)', 'Bulantı / kusma', 'Uykusuzluk / huzursuzluk', 'Baş ağrısı'],
    blackBoxWarnings: ['Demanslı yaşlılarda mortalite; antidepresan eklemede gençlerde intihar riski.'],
    monitoringLabs: ['Metabolik panel (lipid ve glukoz üzerine etkisi nötre yakındır).'],
    pregnancyLactation: 'Gebelikte Kategori C. Prolaktini düşürebilir (emzirmeyi baskılayabilir).',
    clinicalPearls: [
      'Metabolik açıdan en temiz (en az kilo aldıran, lipid ve şekeri bozmayan) ve prolaktini yükseltmeyip aksine D2 parsiyel agonizmiyle düşüren antipsikotiktir.',
      'Başlangıçta akatizi yapabilir; yavaş doz titrasyonu, propranolol veya geçici benzodiazepin ile yönetilebilir.'
    ]
  },
  {
    id: 'clozapine',
    genericName: 'Klozapin',
    brandNamesTR: ['Leponex', 'Clonex'],
    drugClass: 'Atipik Antipsikotik (2./3. Kuşak)',
    indications: ['Tedaviye Dirençli Şizofreni (en az 2 antipsikotiğe yanıtsızlık)', 'Şizofrenide Tekrarlayan İntihar Davranışının Azaltılması', 'Dirençli Şiddetli Tardif Diskinezi'],
    startingDose: '12.5 mg günde bir veya iki kez (çok yavaş titrasyon)',
    targetDose: '300 - 450 mg/gün',
    maxDose: '900 mg/gün',
    halfLife: '12 saat',
    metabolismEnzymes: ['CYP1A2 (ana yol)', 'CYP2D6', 'CYP3A4', 'CYP2C19'],
    receptorProfile: [
      { target: 'D4 > 5-HT2A > D2', affinity: 'Çok Yüksek', clinicalEffect: 'D2 afinitesi düşüktür; neredeyse hiç EPS veya hiperprolaktinemi yapmaz' },
      { target: 'M1 (Muskarinik)', affinity: 'Çok Yüksek', clinicalEffect: 'Paradoksal aşırı gece tükürük salgısı (hipersalivasyon) ve ağır kabızlık' },
      { target: 'H1', affinity: 'Çok Yüksek', clinicalEffect: 'Ağır sedasyon ve kilo alımı' },
      { target: 'Alfa-1', affinity: 'Çok Yüksek', clinicalEffect: 'Şiddetli ortostatik hipotansiyon ve senkop riski' }
    ],
    commonSideEffects: ['Agranülositoz / nötropeni (ölümcül olabilir)', 'Gece hipersalivasyonu (yastığa salya akması)', 'Ağır paralitik ileus / kabızlık', 'Sedasyon', 'Kilo alımı ve metabolik sendrom', 'Miyokardit ve kardiyomiyopati', 'Nöbet eşiğinde düşme (doz ilişkili)'],
    blackBoxWarnings: [
      '1. Şiddetli nötropeni ve agranülositoz (Sıkı ANC takibi zorunludur!).',
      '2. Miyokardit ve kardiyomiyopati (ilk haftalarda troponin, CRP, EKG takibi).',
      '3. Nöbet riski (özellikle >600 mg/gün).',
      '4. Gastrointestinal hipomobilite ve paralitik ileus.',
      '5. Demanslı yaşlılarda mortalite artışı.'
    ],
    monitoringLabs: [
      'Mutlak Nötrofil Sayısı (ANC): İlk 18 hafta her hafta, ardından 18-52. haftalar 2 haftada bir, sonrasında 4 haftada bir ömür boyu.',
      'Kardiyak belirteçler (Troponin I/T, CRP, BNP) ve EKG başlangıçta ve ilk ay haftalık.',
      'Metabolik profil, barsak hareketleri sıklığı takibi.'
    ],
    pregnancyLactation: 'Gebelikte Kategori B. Emzirme KONTRENDİKEDİR (agranülositoz riski).',
    clinicalPearls: [
      'Psikiyatride etkinliği diğer tüm antipsikotiklerden üstün kanıtlanmış tek antipsikotiktir; intiharı ve hastaneye yatışları belirgin azaltır.',
      'Kabızlık hafife alınmamalıdır! Klozapine bağlı paralitik ileus mortalitesi, agranülositoz mortalitesinden daha sıktır. Rutin laksatif profilaksisi sıklıkla gerekir.'
    ]
  },
  {
    id: 'lithium',
    genericName: 'Lityum Karbonat',
    brandNamesTR: ['Lithuril'],
    drugClass: 'Duygudurum Dengeleyici',
    indications: ['Bipolar Bozukluk Akut Mani', 'Bipolar Bozukluk İdame (Ötimi Koruma)', 'Bipolar Depresyon', 'Tedaviye Dirençli MDB Güçlendirme', 'İntihar Riskinin Azaltılması'],
    startingDose: '300 - 600 mg/gün (kan düzeyine göre titre edilir)',
    targetDose: 'Akut Mani: 0.8 - 1.2 mEq/L; İdame: 0.6 - 0.8 mEq/L',
    maxDose: 'Terapötik kan düzeyine göre belirlenir (Genellikle >1.5 mEq/L TOKSİK, >2.0 mEq/L ACİL DİYALİZ ENDİKASYONU)',
    halfLife: '18 - 24 saat (yaşlılarda veya böbrek yetmezliğinde 36 saate uzar)',
    metabolismEnzymes: ['Karaciğerde metabolize EDİLMEZ! Tamamen böbreklerden glomerüler filtrasyonla atılır.'],
    receptorProfile: [
      { target: 'İnositol Monofosfataz (IMPaz) & GSK-3beta İnhibisyonu', affinity: 'Yüksek', clinicalEffect: 'Hücre içi sinyal iletiminin modülasyonu ve nöroproteksiyon' },
      { target: 'GABAerjik İletim Artışı & Glutamaterjik İletim Azalması', affinity: 'Yüksek', clinicalEffect: 'Duygudurum stabilizasyonu' }
    ],
    commonSideEffects: ['İnce el tremoru', 'Poliüri ve polidipsi (nefrojenik diyabetes insipidus)', 'Kilo alımı', 'Bulantı ve diyare', 'Hipotiroidizm ve guatr', 'Akne ve psöriyazis alevlenmesi'],
    blackBoxWarnings: ['Dar terapötik indeks! Toksisite belirtileri ve serum lityum düzeyi yakın takip edilmelidir.'],
    monitoringLabs: [
      'Lityum kan düzeyi (son dozdan tam 12 saat sonra trough düzeyi ölçülür).',
      'Serum kreatinin, eGFR, üre ve tam idrar tahlili (yılda en az 2 kez).',
      'TSH ve serbest T4 (yılda 1-2 kez).',
      'Serum kalsiyum (hiperparatiroidizm riski için).',
      'EKG (T dalgası düzleşmesi/inversiyonu veya sinüs disfonksiyonu).'
    ],
    pregnancyLactation: 'Ebstein anomalisi (triküspit kapak) riski ilk trimesterde mevcuttur (ancak mutlak risk ~%0.1-0.2 gibi düşüktür). Emzirmede süte yüksek geçer, önerilmez.',
    clinicalPearls: [
      'Lityum klerensini azaltıp kan düzeyini ölümcül seviyelere çıkaran 3 temel ilaç grubu: NSAİİ (İbuprofen, Naproksen), Tiyazid Diüretikler, ACE İnhibitörleri / ARB\'ler.',
      'Sıvı kaybı, aşırı terleme, kusma, ishal ve tuz kısıtlaması lityum toksisitesini tetikler.'
    ]
  },
  {
    id: 'valproate',
    genericName: 'Sodyum Valproat / Divalproeks',
    brandNamesTR: ['Depakin', 'Convulex'],
    drugClass: 'Duygudurum Dengeleyici',
    indications: ['Bipolar Bozukluk Akut Mani', 'Bipolar Karma Ataklar ve Hızlı Döngülü Formlar', 'Bipolar İdame', 'Epilepsi', 'Migren Profilaksisi'],
    startingDose: '500 - 750 mg/gün (Akut manide oral yükleme 20-30 mg/kg)',
    targetDose: '50 - 100 mcg/mL (veya bazen 125 mcg/mL) serum kan düzeyi',
    maxDose: 'Serum düzeyine göre (genellikle 2500 - 3000 mg/gün)',
    halfLife: '9 - 16 saat',
    metabolismEnzymes: ['Karaciğer glukuronidasyonu ve mitokondriyal beta-oksidasyon; CYP2C9 (hafif)', 'CYP enzimlerini inhibe eder (Lamotrijin düzeyini 2 katına çıkarır!)'],
    receptorProfile: [
      { target: 'GABA Transaminaz İnhibisyonu & GABA Sentez Artışı', affinity: 'Yüksek', clinicalEffect: 'Santral GABAerjik inhibisyon artışı' },
      { target: 'Voltaj Kapılı Sodyum Kanalları Blokajı', affinity: 'Yüksek', clinicalEffect: 'Nöronal aşırı uyarılabilirliğin baskılanması' }
    ],
    commonSideEffects: ['Kilo alımı', 'Geçici saç dökülmesi (alopesi - çinko/selenyum verilebilir)', 'Hafif el tremoru', 'Gastrointestinal rahatsızlık', 'Trombositopeni', 'Sedasyon'],
    blackBoxWarnings: [
      '1. Fetal malformasyonlar (Nöral tüp defektleri %1-2, kraniyofasiyal defektler, IQ puanı düşüşü) nedeniyle doğurganlık çağındaki kadınlarda kontrendikedir.',
      '2. Fulminan hepatotoksisite (özellikle <2 yaş çocuklarda ve metabolik hastalığı olanlarda).',
      '3. Hayatı tehdit eden akut pankreatit.'
    ],
    monitoringLabs: ['Terapötik kan düzeyi (hedef: 50-100 mcg/mL), Karaciğer Fonksiyon Testleri (AST/ALT), Tam Kan Sayımı (Trombosit), Gebelik testi (beta-hCG).'],
    pregnancyLactation: 'Gebelikte Kategori X / Yüksek Teratojen! Kesinlikle kaçınılmalıdır.',
    clinicalPearls: [
      'Lamotrijin ile birlikte başlanacaksa, lamotrijin başlangıç ve artırım dozu YARIYA indirilmelidir çünkü valproat lamotrijin klerensini bloke eder ve toksik epidermal nekroliz (TEN/SJS) riskini artırır.',
      'Karaciğer enzimleri normal olsa dahi hiperamonyemik ensefalopati yapabilir (uyuklama, kafa karışıklığı olursa serum amonyak düzeyi bakılmalıdır).'
    ]
  },
  {
    id: 'lamotrigine',
    genericName: 'Lamotrijin',
    brandNamesTR: ['Lamictal', 'Lameptil', 'Hepitec'],
    drugClass: 'Duygudurum Dengeleyici',
    indications: ['Bipolar I Bozuklukta Depresif Atakların Önlenmesi (İdame)', 'Bipolar Depresyon', 'Fokal ve Jeneralize Nöbetler'],
    startingDose: '25 mg/gün (2 hafta boyunca tek doz)',
    targetDose: '100 - 200 mg/gün (Valproat ile 100 mg; Karbamazepin ile 400 mg)',
    maxDose: '200 mg/gün (monoterapi), 400 mg (enzim indükleyicilerle)',
    halfLife: '25 - 30 saat (Valproat ile 60 saate uzar; Karbamazepin ile 15 saate iner)',
    metabolismEnzymes: ['Hepatik glukuronidasyon (UGT1A4)'],
    receptorProfile: [
      { target: 'Voltaj Kapılı Sodyum Kanal Blokajı', affinity: 'Yüksek', clinicalEffect: 'Presinaptik glutamat salınımının inhibisyonu' },
      { target: 'Voltaj Bağımlı Kalsiyum Kanalları Modülasyonu', affinity: 'Orta', clinicalEffect: 'Nöronal membran stabilizasyonu' }
    ],
    commonSideEffects: ['Benign cilt döküntüsü (%10)', 'Baş dönmesi', 'Baş ağrısı', 'Uykusuzluk veya uyku hali', 'Bulanık görme'],
    blackBoxWarnings: ['Stevens-Johnson Sendromu (SJS) ve Toksik Epidermal Nekroliz (TEN) dahil hayatı tehdit edici ciddi cilt döküntüleri.'],
    monitoringLabs: ['Cilt muayenesi (özellikle ilk 8 hafta döküntü, ateş, mukozal tutulum izlemi).'],
    pregnancyLactation: 'Gebelikte Kategori C. Doğum kontrol hapları (östrojen) lamotrijin klerensini iki katına çıkarır ve kan düzeyini %50 düşürür!',
    clinicalPearls: [
      'Bipolar depresyonun önlenmesinde mükemmel bir ajandır; ancak akut mani tedavisinde ETKİSİ YOKTUR.',
      'Ölümcül SJS riskini önlemek için titrasyon çok yavaş yapılmalıdır: 1-2. hafta: 25 mg/g; 3-4. hafta: 50 mg/g; 5. hafta: 100 mg/g; 6. hafta: 200 mg/g.'
    ]
  },
  {
    id: 'haloperidol',
    genericName: 'Haloperidol',
    brandNamesTR: ['Norodol', 'Haldol'],
    drugClass: 'Tipik Antipsikotik (1. Kuşak)',
    indications: ['Akut Psikotik Bozukluklar', 'Şizofreni', 'Ağır Psikomotor Ajitasyon ve Deliryum', 'Tourette Sendromu (Tikler)', 'Dirençli Hıçkırık'],
    startingDose: 'Oral: 1.5 - 5 mg/gün; Akut Ajitasyon İM: 2.5 - 5 mg',
    targetDose: '4 - 10 mg/gün',
    maxDose: '20 mg/gün (yüksek dozlar ek etkinlik sağlamaz, yalnızca EPS riskini fırlar)',
    halfLife: '12 - 36 saat',
    metabolismEnzymes: ['CYP2D6', 'CYP3A4'],
    receptorProfile: [
      { target: 'D2 Reseptör Blokajı', affinity: 'Son Derece Yüksek', clinicalEffect: 'Çok güçlü pozitif semptom kontrolü ve yüksek EPS potansiyeli' },
      { target: 'H1 & M1 Blokajı', affinity: 'Çok Düşük', clinicalEffect: 'Kilo alımı ve sedasyon azdır' }
    ],
    commonSideEffects: ['Akut distoni (tortikolis, okülojirik kriz)', 'Parkinsonizm (rijidite, bradikinezi, maske yüz)', 'Akatizi', 'Tardif diskinezi (uzun dönemde)', 'Hiperprolaktinemi', 'QTc uzaması'],
    blackBoxWarnings: ['Demanslı yaşlılarda ölüm riski artışı; İV uygulamada QTc uzaması ve Torsades de Pointes riski (sürekli kardiyak monitorizasyon gerekir).'],
    monitoringLabs: ['EKG (QTc ölçümü), anormal istemsiz hareket ölçeği (AIMS - her 6 ayda bir), prolaktin.'],
    pregnancyLactation: 'Gebelikte Kategori C.',
    clinicalPearls: [
      'Yüksek potensli tipik antipsikotik prototipidir. Metabolik yan etkileri düşüktür ancak ekstrapiramidal yan etki (EPS) riski en yüksek ajandır.',
      'Genç erkeklerde ilk dozlarda gelişebilecek akut distonik reaksiyona karşı Biperiden (Akineton) ampul her zaman hazır bulundurulmalıdır.'
    ]
  },
  {
    id: 'diazepam',
    genericName: 'Diazepam',
    brandNamesTR: ['Diazem', 'Nervium', 'Valium'],
    drugClass: 'Benzodiazepin',
    indications: ['Akut Şiddetli Anksiyete', 'Panik Atak Kriz Yönetimi', 'Status Epilepticus', 'Alkol Yoksunluk Deliryumu (DT) Profilaksi ve Tedavisi', 'Kas Spazmı'],
    startingDose: '2 - 5 mg günde 1-3 kez (Akut alkol yoksunluğunda CIWA protokolüyle 10-20 mg)',
    targetDose: '5 - 15 mg/gün (kısa süreli)',
    maxDose: '40 mg/gün',
    halfLife: 'Diazepam: 20-50 saat; Aktif metabolit Nordiazepam (Desmetildiazepam): 36 - 200 saat!',
    metabolismEnzymes: ['CYP2C19', 'CYP3A4'],
    receptorProfile: [
      { target: 'GABA-A Reseptörü (Alfa-1, Alfa-2, Alfa-3, Alfa-5 alt birimleri)', affinity: 'Çok Yüksek', clinicalEffect: 'Klor kanal açılma frekansını artırarak güçlü sedatif, anksiyolitik, miyorelaksan ve antikonvülzan etki' }
    ],
    commonSideEffects: ['Sedasyon ve uyuşukluk', 'Psikomotor koordinasyon bozukluğu ve ataksi', 'Anterograd amnezi', 'Tolerans ve fiziksel bağımlılık', 'Rebound anksiyete'],
    blackBoxWarnings: ['Opioidlerle birlikte kullanımda derin sedasyon, solunum depresyonu, koma ve ölüm riski!'],
    monitoringLabs: ['Solunum hızı ve sedasyon derinliği (özellikle İV uygulamalarda veya yaşlılarda).'],
    pregnancyLactation: 'Gebelikte Kategori D (Yenidoğanda \'floppy infant\' sendromu ve yoksunluk). Emzirmede süte geçer.',
    clinicalPearls: [
      'Çok yüksek lipofilitesi nedeniyle oral alındığında dakikalar içinde hızla beyne geçer ve hızlı anksiyolitik etki başlatır.',
      'Uzun yarı ömrü nedeniyle alkol yoksunluğunda ve diğer benzodiazepinlerin (örn. alprazolam, lorazepam) kademeli kesilmesinde (tapering) referans altın standarttır.'
    ]
  },
  {
    id: 'methylphenidate',
    genericName: 'Metilfenidat',
    brandNamesTR: ['Concerta (OROS)', 'Ritalin', 'Medikinet', 'Consup'],
    drugClass: 'DEHB İlacı',
    indications: ['Dikkat Eksikliği ve Hiperaktivite Bozukluğu (Çocuk, Ergen ve Erişkin)', 'Narkolepsi'],
    startingDose: 'Erişkinde: 18 mg/gün (Concerta OROS) veya 10 mg/gün (Ritalin IR)',
    targetDose: '36 - 54 mg/gün OROS (veya 0.5 - 1 mg/kg/gün)',
    maxDose: 'Erişkinde 72 - 80 mg/gün (Ritalin için 60 mg)',
    halfLife: 'Kısa etkili IR: 2-3 saat; OROS uzatılmış salım: 12 saat süren klinik etkinlik',
    metabolismEnzymes: ['Hepatik sitoplazmik karboksilesteraz CES1A1 (CYP enzimlerine bağımlı değildir)'],
    receptorProfile: [
      { target: 'DAT (Dopamin Taşıyıcı)', affinity: 'Çok Yüksek', clinicalEffect: 'Prefrontal kortekste dopamin geri alımını bloke eder' },
      { target: 'NET (Noradrenalin Taşıyıcı)', affinity: 'Yüksek', clinicalEffect: 'Prefrontal kortekste uyanıklık ve yürütücü işlevleri artırır' }
    ],
    commonSideEffects: ['İştahsızlık ve kilo kaybı', 'Uykusuzluk', 'Baş ağrısı', 'Kan basıncı artışı ve taşikardi', 'Huzursuzluk ve ağız kuruluğu'],
    blackBoxWarnings: ['Kötüye kullanım ve bağımlılık potansiyeli (Kırmızı reçeteye tabidir). Ağır kardiyovasküler patolojilerde ani kardiyak ölüm riski.'],
    monitoringLabs: ['Başlangıçta ve düzenli aralıklarla kan basıncı (tansiyon), istirahat nabzı, EKG ve kilo/boy persentili.'],
    pregnancyLactation: 'Gebelikte Kategori C. Glokom ve belirgin tirotoksikozda kontrendikedir.',
    clinicalPearls: [
      'OROS teknolojisi (Concerta) gün boyu trifazik salım yaparak tek dozda 12 saatlik kesintisiz odaklanma sağlar ve kötüye kullanım potansiyelini düşürür.',
      'Terapötik dozlarda amfetaminler gibi veziküler dopamin deşarjına yol açmaz; yalnızca taşıyıcıları (DAT/NET) inhibe ettiği için doğru kullanımda nörotoksik değildir.'
    ]
  }
];
