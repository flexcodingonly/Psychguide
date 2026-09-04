import { DrugInteraction, CypEnzymeProfile } from '../types';

export const DRUG_INTERACTIONS_DATA: DrugInteraction[] = [
  {
    drugA: 'SSRI / SNRI (Örn: Fluoksetin, Sertralin, Venlafaksin)',
    drugB: 'MAO İnhibitörleri (Örn: Moklobemid, Tranilsipromin, Linezolid, Metilen Mavisi)',
    severity: 'contraindicated',
    title: 'Ölümcül Serotonin Sendromu Riski',
    mechanism: 'MAO enziminin serotonin yıkımını durdurması ile SSRI/SNRI\'ların geri alımı bloke etmesinin sinerjistik birleşimi, sinaptik aralıkta devasa serotonin birikimine yol açar.',
    clinicalRisk: 'Hipertermi (ateş >40°C), klonus (özellikle spontan ve oküler klonus), mental durum değişikliği, kas rijiditesi, rabdomiyoliz ve kardiyovasküler kollaps/ölüm.',
    management: 'Kombinasyon KESİNLİKLE KONTRENDİKEDİR! İlaç geçişinde mutlaka yıkama (washout) süresine uyulmalıdır (Fluoksetin için 5 hafta, diğer SSRI/SNRI\'lar için 2 hafta, MAOI\'den SSRI\'a geçerken en az 2 hafta).',
    evidenceSource: 'Maudsley Prescribing Guidelines (14th Ed) & FDA Black Box'
  },
  {
    drugA: 'Lityum',
    drugB: 'NSAİİ (İbuprofen, Naproksen, Diklofenak, Meloksikam, Selekoksib)',
    severity: 'major',
    title: 'Lityum Klerensinde Azalma ve Şiddetli Lityum Toksisitesi',
    mechanism: 'NSAİİ\'ler renal prostaglandin sentezini bloke ederek renal kan akımını ve glomerüler filtrasyon hızını (GFR) düşürür; proksimal tübüllerde sodyum ve lityum geri emilimini artırır.',
    clinicalRisk: 'Serum lityum düzeyinde %30 ila %60 arasında öngörülemeyen ani yükselme, kaba el tremoru, ataksi, nistagmus, disartri, konfüzyon, oligüri, nöbet ve akut böbrek hasarı.',
    management: 'Ağrı kesici veya antipiretik gerektiğinde ilk tercih olarak PARASETAMOL (Asetaminofen) veya düşük doz Asetilsalisilik Asit kullanılmalıdır. NSAİİ zorunluysa lityum dozu %30-50 azaltılmalı ve haftalık lityum kan düzeyi bakılmalıdır.',
    evidenceSource: 'Stahl\'s Prescriber\'s Guide & CANMAT Bipolar Guidelines'
  },
  {
    drugA: 'Lityum',
    drugB: 'ACE İnhibitörleri ve ARB\'ler (Ramipril, Enalapril, Perindopril, Kandesartan, Losartan)',
    severity: 'major',
    title: 'Gecikmiş Lityum Toksisitesi',
    mechanism: 'Efferent arteriyoler dilatasyon ile glomerüler filtrasyon basıncını ve renal perfüzyonu düşürerek böbrekten lityum atılımını belirgin şekilde azaltırlar.',
    clinicalRisk: 'Etkileşim yavaş gelişir (1-4 hafta içinde sinsice birikir). İntoksikasyon, bilinç bulanıklığı, kalıcı nörolojik hasar (SILENT sendromu).',
    management: 'Kombinasyon başlanacaksa lityum dozu yarıya indirilmeli, serum kreatinin, elektrolitler ve lityum düzeyleri haftalık takip edilmelidir. Alternatif antihipertansif olarak dihidropiridin grubu kalsiyum kanal blokeri (Amlodipin) tercih edilebilir.',
    evidenceSource: 'British National Formulary (BNF) & UpToDate'
  },
  {
    drugA: 'Lityum',
    drugB: 'Tiyazid ve Benzeri Diüretikler (Hidroklorotiyazid, İndapamid, Klortalidon)',
    severity: 'contraindicated',
    title: 'Şiddetli Lityum Tutulumu ve Akut Toksisite',
    mechanism: 'Distal tübülde Na reabsorpsiyonunu inhibe ederek volüm kontraksiyonuna ve sekonder hiperaldosteronizme yol açar; proksimal tübülden lityum geri emilimi dramatik olarak artar.',
    clinicalRisk: 'Serum lityum seviyesinde %40-%70 artış ve hızlı toksisite semptomları.',
    management: 'Kombinasyondan kesinlikle kaçınılmalıdır! Diüretik gerekiyorsa Loop diüretikleri (Furosemid) tiyazidlere göre lityumu daha az etkiler ancak yine de çok yakın monitorizasyon gerektirir.',
    evidenceSource: 'American Journal of Psychiatry & Maudsley Guidelines'
  },
  {
    drugA: 'Klozapin',
    drugB: 'Fluvoksamin',
    severity: 'contraindicated',
    title: 'Ölümcül Klozapin Toksisitesi (CYP1A2 Güçlü İnhibisyonu)',
    mechanism: 'Fluvoksamin, klozapinin majör metabolik yolağı olan CYP1A2 enzimini aşırı güçlü şekilde bloke eder.',
    clinicalRisk: 'Klozapin kan konsantrasyonu 5 ila 10 KATına çıkar! Şiddetli sedasyon, epileptik nöbetler, paralitik ileus, kardiyak aritmi, aspirasyon pnömonisi ve solunum arresti.',
    management: 'Kombinasyon kural olarak KONTRENDİKEDİR! Eğer deneysel olarak klozapin dozunu düşük tutmak için bilerek kombine edilmiyorsa (özel süpervizyon altında), asla birlikte verilmemelidir.',
    evidenceSource: 'The Lancet Psychiatry & FDA Klozapin Prospektüsü'
  },
  {
    drugA: 'Klozapin',
    drugB: 'Karbamazepin',
    severity: 'contraindicated',
    title: 'Sinerjistik Kemik İliği Supresyonu ve Agranülositoz',
    mechanism: 'Her iki ilaç da bağımsız olarak kemik iliğinde granülopoezi baskılama potansiyeline sahiptir; kombine edildiklerinde risk katlanarak artar. Ayrıca karbamazepin CYP3A4 ve CYP1A2\'yi indükleyerek klozapin düzeyini düşürür.',
    clinicalRisk: 'Geri dönüşümsüz agranülositoz, nötropenik sepsis ve ölüm.',
    management: 'KESİNLİKLE KONTRENDİKEDİR! Klozapin kullanan hastada duygudurum dengeleyici gerekiyorsa Lityum (aynı zamanda granülosit sayısını artırır) veya Valproat tercih edilmelidir.',
    evidenceSource: 'Maudsley Prescribing Guidelines (14th Ed)'
  },
  {
    drugA: 'Valproat (Sodyum Valproat / Divalproeks)',
    drugB: 'Lamotrijin',
    severity: 'major',
    title: 'Stevens-Johnson Sendromu (SJS) / Toksik Epidermal Nekroliz Riski',
    mechanism: 'Valproat, lamotrijinin hepatik glukuronidasyonunu (UGT1A4) inhibe eder ve lamotrijinin yarı ömrünü 30 saatten 60-70 saate çıkararak kan seviyesini 2 katından fazlaya katlar.',
    clinicalRisk: 'Hayati tehlike oluşturan yaygın büllöz nekrotik cilt reaksiyonları (SJS/TEN), DRESS sendromu.',
    management: 'Birlikte kullanılacaksa Lamotrijin başlangıç dozu ve titrasyon hızı NORMALİN YARISINA İNDİRİLMELİDİR: 1-2. hafta: Gün aşırı 25 mg (veya günde 12.5 mg); 3-4. hafta: günde 25 mg; 5-6. hafta: günde 50 mg; hedef: en fazla 100 mg/gün.',
    evidenceSource: 'GlaxoSmithKline Lamictal Prescribing Information'
  },
  {
    drugA: 'Paroksetin / Fluoksetin',
    drugB: 'Tamoksifen',
    severity: 'contraindicated',
    title: 'Tamoksifen Tedavisinin Başarısızlığı ve Meme Kanseri Relapsı',
    mechanism: 'Tamoksifen bir ön-ilaçtır (prodrug); aktif antikanser metaboliti olan \'Endoksifen\'e dönüşebilmesi için karaciğer CYP2D6 enzimine mutlak ihtiyaç duyar. Paroksetin ve fluoksetin ise bilinen en güçlü CYP2D6 inhibitörleridir.',
    clinicalRisk: 'Endoksifen serum düzeyi %70-80 oranında çöker; meme kanseri nüksü ve mortalite riski belirgin artar.',
    management: 'Tamoksifen alan meme kanseri hastalarında depresyon veya sıcak basmaları için ASLA Paroksetin veya Fluoksetin kullanılmamalıdır! CYP2D6 üzerinde minimal etkisi olan VENLAFAKSİN, ESSİTALOPRAM veya SERTRALİN tercih edilmelidir.',
    evidenceSource: 'BMJ Landmark Cohort Studies & ASCO Guidelines'
  },
  {
    drugA: 'Karbamazepin',
    drugB: 'Kombine Oral Kontraseptifler (Doğum Kontrol Hapları)',
    severity: 'major',
    title: 'Kontraseptif Başarısızlık ve İstenmeyen Gebelik',
    mechanism: 'Karbamazepin çok güçlü bir hepatik mikrozomal enzim (özellikle CYP3A4) indükleyicisidir; östrojen ve progestin hormonlarının hepatik metabolizmasını hızlandırarak plazma konsantrasyonlarını kritik seviyenin altına düşürür.',
    clinicalRisk: 'Beklenmeyen ovulasyon, menstrüel düzensizlik ve karbamazepinin teratojenik riskine rağmen istenmeyen gebelik oluşması.',
    management: 'Hastalara kombine OKS yerine intrauterin araç (RİA/spiral - bakırlı veya levonorgestrelli) veya bariyer yöntemleri önerilmelidir. Hormonal implant veya standart doz haplar koruyucu değildir.',
    evidenceSource: 'WHO Medical Eligibility Criteria for Contraceptive Use'
  },
  {
    drugA: 'Benzodiazepinler (Örn: Diazepam, Alprazolam, Klonazepam)',
    drugB: 'Opioid Analjezikler (Morfin, Fentanil, Tramadol, Oksikodon, Metadon)',
    severity: 'contraindicated',
    title: 'Ölümcül Solunum Depresyonu ve Koma',
    mechanism: 'Beyin sapındaki solunum merkezinde hem GABA-A reseptörleri üzerinden hem de mu-opioid reseptörleri üzerinden eşzamanlı sinerjistik santral solunum dürtüsü baskılanması.',
    clinicalRisk: 'Ağır hipoksi, hiperkapnik koma, solunum arresti ve ölüm.',
    management: 'Birlikte rutin reçete edilmemelidir. Kaçınılmaz durumlarda en düşük efektif dozlar, sınırlı süreyle verilmeli ve hastanın yakınları Nalokson kiti kullanımı konusunda eğitilmelidir.',
    evidenceSource: 'FDA Black Box Warning (2016)'
  },
  {
    drugA: 'Sitalopram / Essitalopram / Haloperidol',
    drugB: 'Diğer QTc Uzatan İlaçlar (Amiodaron, Sotalol, Metadon, Levofloksasin, Moksifloksasin)',
    severity: 'major',
    title: 'QTc Aralığında Aşırı Uzama ve Torsades de Pointes (TdP)',
    mechanism: 'Miyokardiyal hERG potasyum kanallarının (IKr akımı) sinerjistik blokajı ile ventriküler repolarizasyonun uzaması.',
    clinicalRisk: 'Polimorfik ventriküler taşikardi (Torsades de Pointes), senkop, ventriküler fibrilasyon ve ani kardiyak arrest.',
    management: 'QTc > 500 ms veya bazale göre > 60 ms uzama varsa doz azaltılmalı veya ilaç kesilmelidir. Serum potasyum (>4.0 mEq/L) ve magnezyum (>2.0 mg/dL) normallerde tutulmalıdır.',
    evidenceSource: 'CredibleMeds QTc Risk Stratification Database'
  },
  {
    drugA: 'SSRI / SNRI Antidepresanlar',
    drugB: 'NSAİİ / Aspirin / Antikoagülanlar (Varfarin, NOAK\'lar)',
    severity: 'moderate',
    title: 'Gastrointestinal Sistem (GİS) Kanama Riski Artışı',
    mechanism: 'Trombositler kendi serotoninlerini sentezleyemez, plazmadan SERT aracılığıyla alırlar. SSRI\'lar trombosit içi serotonin deposunu tüketerek trombosit agregasyonunu bozar; NSAİİ\'lerin mukozal eroziv etkisiyle birleştiğinde kanama riski 3-4 kat artar.',
    clinicalRisk: 'Üst GİS kanaması, melena, hematemez, cerrahi girişimlerde artmış kanama.',
    management: 'Yüksek riskli hastalarda (yaş >65, ülser öyküsü) profilaktik Proton Pompa İnhibitörü (PPI: Pantoprazol) eklenmelidir.',
    evidenceSource: 'Gastroenterology & Cochrane Database'
  },
  {
    drugA: 'Klozapin',
    drugB: 'Siprofloksasin (Kinolon Antibiyotik)',
    severity: 'contraindicated',
    title: 'Akut Klozapin Toksisitesi ve Nöbet Riski (CYP1A2 İnhibisyonu)',
    mechanism: 'Siprofloksasin güçlü bir hepatik CYP1A2 inhibitörüdür; klozapin klerensini %50\'den fazla bloke eder.',
    clinicalRisk: 'Klozapin serum düzeyinin 2-3 katına çıkması; şiddetli sedasyon, ataksi, hipersalivasyon, epileptik nöbetler, aspirasyon riski ve kardiyotoksisite.',
    management: 'Klozapin alan bir hastada enfeksiyon için antibiyotik gerektiğinde SİPROFLOKSASİNDEN KESİNLİKLE KAÇINILMALIDIR! Amoksisilin/Klavulanik asit, Seftriakson veya Azitromisin gibi CYP1A2\'yi etkilemeyen ajanlar tercih edilmelidir.',
    evidenceSource: 'American Journal of Psychiatry & Maudsley Guidelines'
  },
  {
    drugA: 'SSRI / SNRI (Sertralin, Fluoksetin, Paroksetin, Venlafaksin)',
    drugB: 'Tramadol (Opioid Analjezik)',
    severity: 'contraindicated',
    title: 'Ağır Serotonin Sendromu ve Nöbet Eşiği Çökmesi',
    mechanism: 'Tramadol hem bir mü-opioid agonisti hem de santral serotonin ve noradrenalin geri alım inhibitörüdür. SSRI/SNRI ile kombine edildiğinde çift mekanizmalı aşırı serotonin yükü oluşturur ve nöbet eşiğini düşürür.',
    clinicalRisk: 'Spontan klonus, ajitasyon, hipertermi, terleme, otonomik dengesizlik ve epileptik nöbetler.',
    management: 'SSRI/SNRI alan hastalarda analjezik olarak Tramadolden kaçınılmalıdır. Parasetamol, düşük doz kodein veya NSAİİ (mide koruyucu ile) tercih edilmelidir.',
    evidenceSource: 'FDA Drug Safety Communication & UpToDate'
  },
  {
    drugA: 'Haloperidol / Antipsikotikler',
    drugB: 'Metoklopramid (Metpamid) / Domperidon',
    severity: 'major',
    title: 'Sinerjistik D2 Blokajı ve Şiddetli Akut Distoni / NMS Riski',
    mechanism: 'Metoklopramid kan-beyin bariyerini geçen güçlü bir dopamin D2 reseptör antagonistidir. Antipsikotiklerle eşzamanlı verildiğinde santral nigrostriatal D2 blokajı tolere edilemez seviyelere çıkar.',
    clinicalRisk: 'Gözlerin yukarı kayması (okülojirik kriz), opistotonus, akut laringeal distoni (boğulma riski), şiddetli parkinsonizm ve Nöroleptik Malign Sendrom (NMS).',
    management: 'Bulantı/kusması olan psikiyatri hastalarında Metoklopramid yerine D2 reseptörünü bloke etmeyen ONDANSETRON (5-HT3 antagonisti) tercih edilmelidir.',
    evidenceSource: 'British Journal of Clinical Pharmacology'
  },
  {
    drugA: 'Karbamazepin',
    drugB: 'Valproat (Sodyum Valproat)',
    severity: 'major',
    title: 'Karbamazepin-10,11-Epoksit Toksisitesi ve Valproat Düzeyinde Düşüş',
    mechanism: 'Valproat, karbamazepinin aktif ve toksik metaboliti olan karbamazepin-10,11-epoksitin metabolizmasını inhibe eder. Aynı zamanda karbamazepin CYP indüksiyonu ile valproat klerensini hızlandırır.',
    clinicalRisk: 'Rutin kan testinde karbamazepin düzeyi "normal" görünse dahi toksik epoksit metaboliti birikir: Şiddetli baş dönmesi, diplopi, ataksi, bulantı ve kusma.',
    management: 'Birlikte kullanılacaksa karbamazepin dozu düşürülmeli, serum serbest karbamazepin ve epoksit metaboliti takip edilmelidir.',
    evidenceSource: 'Epilepsia & Clinical Pharmacokinetics'
  },
  {
    drugA: 'Fluoksetin / Paroksetin',
    drugB: 'Risperidon',
    severity: 'major',
    title: 'Risperidon Plazma Konsantrasyonunda 3-4 Kat Artış ve Ağır EPS',
    mechanism: 'Fluoksetin ve Paroksetin, Risperidonun 9-hidroksirisperidona (paliperidon) dönüşümünü sağlayan majör enzim olan CYP2D6\'yı güçlü şekilde inhibe eder.',
    clinicalRisk: 'Akut distoni, akatizi, parkinsonizm ve aşırı prolaktin yükselmesi (galaktore, amenore).',
    management: 'Kombinasyon gerekiyorsa Risperidon dozu %50 azaltılmalı ya da CYP2D6\'yı inhibe etmeyen Sertralin veya Essitalopram tercih edilmelidir.',
    evidenceSource: 'Stahl\'s Essential Psychopharmacology'
  }
];

export const CYP_ENZYMES_DATA: CypEnzymeProfile[] = [
  {
    enzyme: 'CYP1A2',
    substrates: ['Klozapin', 'Olanzapin', 'Duloksetin', 'Fluvoksamin', 'Teofilin', 'Kafein', 'Mirtazapin (kısmen)'],
    inhibitorsStrong: ['Fluvoksamin (Çok güçlü!)', 'Siprofloksasin (Kinolon)'],
    inhibitorsModerate: ['Oral Kontraseptifler', 'Simetidin', 'Amiodaron'],
    inducers: ['Tütün / Sigara dumanındaki polisiklik aromatik hidrokarbonlar (nikotin değil duman!)', 'Omeprazol', 'Karbamazepin', 'Mangalda pişmiş et'],
    clinicalNote: 'Sigara içen bir şizofreni hastasında klozapin ve olanzapin klerensi %40-50 artar (daha yüksek doz gerekir). Hasta sigarayı aniden bıraktığında klozapin düzeyi fırlar ve toksisite gelişir!'
  },
  {
    enzyme: 'CYP2D6',
    substrates: ['Risperidon', 'Aripiprazol', 'Haloperidol', 'Venlafaksin', 'Duloksetin', 'Vortioksetin', 'Klomipramin', 'Metoprolol', 'Kodein (ön-ilaç)'],
    inhibitorsStrong: ['Fluoksetin', 'Paroksetin', 'Bupropion', 'Kinidin'],
    inhibitorsModerate: ['Duloksetin', 'Sertralin (yüksek doz)', 'Terbinafin'],
    inducers: ['Klasik enzim indükleyicilerden etkilenmez (genetik polimorfizm belirleyicidir)'],
    clinicalNote: 'Toplumda genetik polimorfizm çok yaygındır (%7-10 yavaş metabolize edici / poor metabolizers). Fluoksetin veya Paroksetin başlandığında diğer psikotrop ilaçların kan düzeyleri 2-4 katına çıkabilir.'
  },
  {
    enzyme: 'CYP3A4',
    substrates: ['Ketiapin', 'Aripiprazol', 'Lurasidon', 'Alprazolam', 'Diazepam', 'Buspiron', 'Sertralin', 'Zolpidem', 'Statinler (Atorvastatin, Simvastatin)'],
    inhibitorsStrong: ['Ketokonazol / İtrakonazol', 'Klaritromisin', 'Greyfurt suyu (yüksek miktarda)', 'Ritonavir'],
    inhibitorsModerate: ['Diltiazem', 'Verapamil', 'Fluvoksamin', 'Eritromisin'],
    inducers: ['Karbamazepin', 'Fenitoin', 'Rifampisin', 'St. John\'s Wort (Sarı Kantaron)', 'Fenobarbital'],
    clinicalNote: 'Karbamazepin güçlü bir CYP3A4 oto-indükleyicisidir; Ketiapin, Aripiprazol ve oral kontraseptif düzeylerini dramatik biçimde düşürür.'
  },
  {
    enzyme: 'CYP2C19',
    substrates: ['Essitalopram', 'Sitalopram', 'Sertralin', 'Diazepam', 'Klomipramin', 'Moklobemid'],
    inhibitorsStrong: ['Fluvoksamin', 'Omeprazol / Esomeprazol', 'Tiklopidin'],
    inhibitorsModerate: ['Fluoksetin'],
    inducers: ['Rifampisin', 'Karbamazepin'],
    clinicalNote: 'Omeprazol ile Essitalopram veya Sitalopram birlikte kullanıldığında QT uzaması riski artar. PPI gerekiyorsa CYP2C19\'u daha az inhibe eden Pantoprazol tercih edilmelidir.'
  }
];
