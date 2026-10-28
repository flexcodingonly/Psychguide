import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  ShieldAlert, 
  Info, 
  Search, 
  Zap, 
  RefreshCw, 
  Check, 
  Sparkles,
  Dna,
  Coffee,
  Wine,
  Pill,
  HeartCrack,
  Flame,
  ArrowRight
} from 'lucide-react';

export interface SubstanceItem {
  id: string;
  name: string;
  genericName: string;
  category: 'ssri_snri' | 'antipsychotic' | 'mood_stabilizer' | 'benzo' | 'medical_otc' | 'lifestyle';
  categoryLabel: string;
  cypRole?: string;
  description: string;
}

export interface InteractionRule {
  substance1: string;
  substance2: string;
  severity: 'contraindicated' | 'high' | 'moderate' | 'mild';
  title: string;
  mechanism: string;
  clinicalImpact: string;
  recommendation: string;
  evidenceSource: string;
}

export const SUBSTANCE_DATABASE: SubstanceItem[] = [
  // SSRI / SNRI
  { id: 'sertraline', name: 'Sertralin (Lustral, Selectra)', genericName: 'Sertralin', category: 'ssri_snri', categoryLabel: 'SSRI Antidepresan', cypRole: 'Hafif CYP2D6 inhibitörü', description: 'Geniş spektrumlu SSRI, güvenli kardiyak profil.' },
  { id: 'escitalopram', name: 'Essitalopram (Cipralex, Citoles)', genericName: 'Essitalopram', category: 'ssri_snri', categoryLabel: 'SSRI Antidepresan', cypRole: 'Minimal CYP etkisi', description: 'En seçici SSRI, yüksek dozda doza bağımlı QTc riski.' },
  { id: 'fluoxetine', name: 'Fluoksetin (Prozac, Deprex)', genericName: 'Fluoksetin', category: 'ssri_snri', categoryLabel: 'SSRI Antidepresan', cypRole: 'Güçlü CYP2D6 & CYP2C19 inhibitörü', description: 'Uzun yarı ömürlü SSRI, enzim inhibisyonu 5-6 hafta sürer.' },
  { id: 'paroxetine', name: 'Paroksetin (Paxil, Seroxat)', genericName: 'Paroksetin', category: 'ssri_snri', categoryLabel: 'SSRI Antidepresan', cypRole: 'En güçlü CYP2D6 inhibitörü', description: 'Antikolinerjik etkisi en yüksek SSRI, kesilme semptomları belirgin.' },
  { id: 'venlafaxine', name: 'Venlafaksin (Efexor XR)', genericName: 'Venlafaksin', category: 'ssri_snri', categoryLabel: 'SNRI Antidepresan', cypRole: 'CYP2D6 substratı', description: 'Yüksek dozda (>150mg) noradrenalin ve tansiyon artışı.' },
  { id: 'duloxetine', name: 'Duloksetin (Cymbalta, Duxet)', genericName: 'Duloksetin', category: 'ssri_snri', categoryLabel: 'SNRI Antidepresan', cypRole: 'Orta CYP2D6 inhibitörü', description: 'Ağrı ve fibromiyalji endikasyonlu SNRI.' },

  // Antipsychotics
  { id: 'quetiapine', name: 'Ketiapin (Seroquel, Cedrina)', genericName: 'Ketiapin', category: 'antipsychotic', categoryLabel: 'Atipik Antipsikotik', cypRole: 'CYP3A4 ana substratı', description: 'Sedatif, metabolik izlem gerektiren atipik antipsikotik.' },
  { id: 'olanzapine', name: 'Olanzapin (Zyprexa, Rexapin)', genericName: 'Olanzapin', category: 'antipsychotic', categoryLabel: 'Atipik Antipsikotik', cypRole: 'CYP1A2 substratı (Sigara düşürür)', description: 'Metabolik risk ve kilo artışı yüksek, güçlü antipsikotik.' },
  { id: 'aripiprazole', name: 'Aripiprazol (Abilify)', genericName: 'Aripiprazol', category: 'antipsychotic', categoryLabel: 'Atipik Antipsikotik', cypRole: 'CYP2D6 & CYP3A4 substratı', description: 'Dopamin kısmi agonisti, prolaktin düşürücü etki.' },
  { id: 'clozapine', name: 'Klozapin (Leponex)', genericName: 'Klozapin', category: 'antipsychotic', categoryLabel: 'Atipik Antipsikotik (Dirençli)', cypRole: 'CYP1A2 ana substratı', description: 'Dirençli şizofreni ilacı. Agranülositoz ve nöbet riski.' },
  { id: 'haloperidol', name: 'Haloperidol (Norodol)', genericName: 'Haloperidol', category: 'antipsychotic', categoryLabel: 'Tipik Antipsikotik', cypRole: 'CYP2D6 & CYP3A4', description: 'Yüksek potensli tipik antipsikotik, belirgin EPS ve QTc riski.' },

  // Mood Stabilizers
  { id: 'lithium', name: 'Lityum (Lithuril)', genericName: 'Lityum Karbonat', category: 'mood_stabilizer', categoryLabel: 'Duygudurum Dengeleyici', cypRole: 'CYP metabolizması YOK (Renal atılır)', description: 'Dar terapötik aralık (0.6-1.0 mEq/L). NSAID/Tiyazid ile toksisite!' },
  { id: 'valproate', name: 'Valproat (Depakin)', genericName: 'Sodyum Valproat', category: 'mood_stabilizer', categoryLabel: 'Duygudurum Dengeleyici', cypRole: 'CYP2C9 & UGT inhibitörü', description: 'Lamotrijin düzeyini 2 katına çıkarır (Stevens-Johnson riski).' },
  { id: 'lamotrigine', name: 'Lamotrijin (Lamictal)', genericName: 'Lamotrijin', category: 'mood_stabilizer', categoryLabel: 'Duygudurum Dengeleyici', cypRole: 'Glukuronidasyon (UGT1A4)', description: 'Bipolar depresyonda etkili, cilt döküntüsü (SJS) için yavaş titrasyon.' },
  { id: 'carbamazepine', name: 'Karbamazepin (Tegretol)', genericName: 'Karbamazepin', category: 'mood_stabilizer', categoryLabel: 'Duygudurum Dengeleyici', cypRole: 'Güçlü CYP3A4 / Pan-enzim indükleyicisi', description: 'Kendi metabolizmasını ve diğer onlarca ilacı hızlandırır.' },

  // Benzodiazepines
  { id: 'diazepam', name: 'Diazepam (Diazem, Nervium)', genericName: 'Diazepam', category: 'benzo', categoryLabel: 'Benzodiazepin', cypRole: 'CYP2C19 & CYP3A4 substratı', description: 'Uzun etkili, sedatif ve kas gevşetici.' },
  { id: 'alprazolam', name: 'Alprazolam (Xanax)', genericName: 'Alprazolam', category: 'benzo', categoryLabel: 'Benzodiazepin', cypRole: 'CYP3A4 substratı', description: 'Kısa etkili, yüksek bağımlılık ve rebound anksiyete riski.' },
  { id: 'clonazepam', name: 'Klonazepam (Rivotril)', genericName: 'Klonazepam', category: 'benzo', categoryLabel: 'Benzodiazepin', cypRole: 'CYP3A4 substratı', description: 'Orta-uzun etkili antikonvülsan benzodiazepin.' },

  // Common Medical & OTC
  { id: 'nsaid', name: 'İbuprofen / Naproksen (Arveles, Apranax, Brufen)', genericName: 'NSAID Ağrı Kesiciler', category: 'medical_otc', categoryLabel: 'Ağrı Kesici / Antiinflamatuar', cypRole: 'Renal prostaglandin inhibisyonu', description: 'Trombosit fonksiyonunu bozar, böbrek perfüzyonunu düşürür.' },
  { id: 'tramadol', name: 'Tramadol (Contramal)', genericName: 'Tramadol', category: 'medical_otc', categoryLabel: 'Opioid + Serotonerjik Analjezik', cypRole: 'CYP2D6 substratı', description: 'Serotonin ve noradrenalin geri alımını da inhibe eder.' },
  { id: 'omeprazole', name: 'Omeprazol (Losec, Prilosec)', genericName: 'Omeprazol', category: 'medical_otc', categoryLabel: 'Mide Koruyucu (PPI)', cypRole: 'CYP2C19 inhibitörü', description: 'Essitalopram ve sitalopram düzeyini artırabilir.' },

  // Everyday Food / Substance Radar
  { id: 'grapefruit', name: 'Greyfurt / Greyfurt Suyu (Besin)', genericName: 'Greyfurt Furanokumarinleri', category: 'lifestyle', categoryLabel: 'Besin Maddesi', cypRole: 'Bağırsak CYP3A4 İrreversibl İnhibitörü', description: 'Bağırsak duvarındaki CYP3A4 enzimini günlerce bloke eder.' },
  { id: 'alcohol', name: 'Alkol (Etanol)', genericName: 'Alkol', category: 'lifestyle', categoryLabel: 'Madde / İçecek', cypRole: 'Akut CYP inhibisyonu, Kronik CYP2E1 indüksiyonu', description: 'Santral sinir sistemi depresanı, solunum depresyonu riski.' },
  { id: 'caffeine', name: 'Kafein (Kahve, Enerji İçeceği, Çay)', genericName: 'Kafein', category: 'lifestyle', categoryLabel: 'Uyarıcı İçecek', cypRole: 'CYP1A2 substratı & Adenozin antagonisti', description: 'Lityum atılımını hızlandırır, anksiyete ve taşikardiyi tetikler.' },
  { id: 'smoking', name: 'Sigara / Tütün (Nikotin + Katran)', genericName: 'Tütün Polisiklik Hidrokarbonları', category: 'lifestyle', categoryLabel: 'Yaşam Tarzı / Madde', cypRole: 'Güçlü CYP1A2 İndükleyicisi', description: 'Dumanındaki hidrokarbonlar karaciğer CYP1A2 enzimini 2 kat hızlandırır!' },
  { id: 'st_johns_wort', name: 'Sarı Kantaron (St. John\'s Wort - Bitkisel Çay)', genericName: 'Hypericum perforatum', category: 'lifestyle', categoryLabel: 'Bitkisel Destek / Çay', cypRole: 'Güçlü CYP3A4 & P-gp İndükleyicisi + Serotonerjik', description: 'Ciddi serotonin sendromu ve ilaç temizleme riski taşır.' }
];

export const INTERACTION_RULES: InteractionRule[] = [
  // LITHIUM INTERACTIONS
  {
    substance1: 'lithium',
    substance2: 'nsaid',
    severity: 'contraindicated',
    title: 'Lityum Toksisitesi ve Akut Böbrek Hasarı Riski',
    mechanism: 'NSAID\'ler (İbuprofen, Naproksen, Diklofenak) renal prostaglandin sentezini inhibe ederek afferent arteriyol vazokonstrüksiyonuna ve lityum renal klerensinde %30-60 düşüşe yol açar.',
    clinicalImpact: 'Lityum kan seviyesi hızla toksik düzeye (>1.5-2.0 mEq/L) fırlayabilir; tremor, ataksi, konfüzyon, nöbet ve böbrek yetmezliği gelişebilir.',
    recommendation: 'Lityum kullanan hastalarda klasik NSAID\'lerden kesinlikle kaçının. Ağrı veya ateş için ilk seçenek PARASEtamol (asetaminofen) kullanılmalıdır. Zorunlu hallerde lityum dozu %50 azaltılarak serum düzeyi sıkı izlenmelidir.',
    evidenceSource: 'Maudsley Prescribing Guidelines, 14th Ed. & APA Bipolar Guidelines'
  },
  {
    substance1: 'lithium',
    substance2: 'caffeine',
    severity: 'moderate',
    title: 'Kafein ve Lityum Düzeyinde Dalgalanma (Ters Etki)',
    mechanism: 'Kafein böbreklerden sodyum ve su atılımı ile birlikte lityum klerensini belirgin şekilde artırır.',
    clinicalImpact: 'Düzenli yüksek kahve tüketen bir hasta aniden kahveyi bırakırsa, lityum atılımı yavaşlar ve Lityum kan düzeyi aniden toksik seviyeye yükselebilir! Aşırı kahve tüketimi ise lityum düzeyini düşürüp manik nükse yol açabilir.',
    recommendation: 'Hastanın günlük kafein alım miktarını stabil tutması öğütlenmelidir. Ani kahve bırakma veya aşırı enerji içeceği yüklemesi durumunda serum lityum düzeyi kontrol edilmelidir.',
    evidenceSource: 'UpToDate: Lithium Drug Interactions & Renal Clearance'
  },

  // GRAPEFRUIT INTERACTIONS
  {
    substance1: 'quetiapine',
    substance2: 'grapefruit',
    severity: 'high',
    title: 'Ketiapin Düzeyinde 2 ila 4 Kat Artış (CYP3A4 Blokajı)',
    mechanism: 'Greyfurt içeriğindeki furanokumarinler bağırsak epitelindeki CYP3A4 enzimini kalıcı olarak inaktive eder. Ketiapinin ilk geçiş metabolizması bloke olur.',
    clinicalImpact: 'Ketiapinin plazma konsantrasyonu hızla yükselir. Aşırı sedasyon, derin hipotansiyon, senkop ve doza bağımlı QTc uzaması riski katlanır.',
    recommendation: 'Ketiapin (ve benzeri CYP3A4 substratı ilaçlar) kullanan bireyler kesinlikle greyfurt veya greyfurt suyu tüketmemelidir. Tek bir bardak greyfurt suyu dahi enzimi 48-72 saat baskılayabilir.',
    evidenceSource: 'FDA Drug Safety Communication & Clinical Pharmacokinetics'
  },
  {
    substance1: 'alprazolam',
    substance2: 'grapefruit',
    severity: 'moderate',
    title: 'Alprazolam Yarı Ömründe Uzama ve Derin Sedasyon',
    mechanism: 'Alprazolam CYP3A4 ile metabolize edilir; greyfurt enzimi baskılayarak ilacın atılımını belirgin geciktirir.',
    clinicalImpact: 'Ertesi gün aşırı uyuşukluk, motor koordinasyon kaybı, düşme ve bilişsel bulanıklık riski artar.',
    recommendation: 'Greyfurttan kaçının veya alternatif narenciyeler (portakal, mandalina CYP3A4\'ü bloke etmez) tercih edin.',
    evidenceSource: 'British National Formulary (BNF)'
  },

  // SEROTONIN SYNDROME INTERACTIONS
  {
    substance1: 'sertraline',
    substance2: 'tramadol',
    severity: 'contraindicated',
    title: 'Ölümcül Serotonin Sendromu ve Nöbet Eşiğinde Düşüş',
    mechanism: 'Tramadol hem güçlü bir serotonin ve noradrenalin geri alım inhibitörüdür hem de metaboliti üzerinden etki gösterir. SSRI ile birleştiğinde sinaptik aralıkta serotonin patlaması oluşur.',
    clinicalImpact: 'Hunter kriterlerine göre hipertermi, klonus, ajitasyon, terleme, hiperrefleksi ve nöbetlerle karakterize acil Serotonin Sendromu riski yüksektir.',
    recommendation: 'SSRI veya SNRI kullanan hastalarda Tramadol KONTRENDİKEDİR. Ağrı kontrolü için serotonerjik olmayan alternatif analjezikler (Parasetamol, zayıf non-serotonerjik ajanlar) seçilmelidir.',
    evidenceSource: 'WHO Pharmacovigilance & Hunter Serotonin Toxicity Criteria'
  },
  {
    substance1: 'escitalopram',
    substance2: 'tramadol',
    severity: 'contraindicated',
    title: 'Serotonin Sendromu & QTc Katlanması',
    mechanism: 'Çift serotonerjik yükleme ve her iki ilacın kardiyak repolarizasyonu geciktirici potansiyeli.',
    clinicalImpact: 'Serotonin toksisitesi ve Torsades de Pointes / aritmi riski belirgin şekilde yükselir.',
    recommendation: 'Bu kombinasyondan kaçınınız.',
    evidenceSource: 'AHA / ACC Circulation Guideline'
  },
  {
    substance1: 'fluoxetine',
    substance2: 'tramadol',
    severity: 'contraindicated',
    title: 'Şiddetli Serotonin Toksisitesi + CYP2D6 Blokajı',
    mechanism: 'Fluoksetin güçlü bir CYP2D6 inhibitörüdür. Tramadolün O-desmetiltramadol dönüşümünü engellerken serotonerjik toksisiteyi tavana çıkarır.',
    clinicalImpact: 'Yüksek serotonin sendromu ve konvülsiyon riski.',
    recommendation: 'Kombinasyon kesinlikle önerilmez.',
    evidenceSource: 'Maudsley Prescribing Guidelines'
  },
  {
    substance1: 'sertraline',
    substance2: 'st_johns_wort',
    severity: 'contraindicated',
    title: 'Bitkisel Çay Tuzağı: Sarı Kantaron ile Serotonin Krizi',
    mechanism: 'Sarı kantaron (Hypericum) hiperforin ve hiperisin içeriğiyle santral serotonin geri alımını bloke eder. Reçeteli SSRI ile üst üste biner.',
    clinicalImpact: 'Toplumda "doğal ve zararsız" sanılan bu kombinasyon şiddetli serotonin sendromuna neden olarak yoğun bakım yatışına yol açabilir.',
    recommendation: 'Antidepresan kullanırken Sarı Kantaron içeren çay, ekstre veya takviyeleri kesinlikle almayınız.',
    evidenceSource: 'TPD & Cochrane Database of Systematic Reviews'
  },

  // GI BLEEDING RISKS (SSRI + NSAID)
  {
    substance1: 'sertraline',
    substance2: 'nsaid',
    severity: 'high',
    title: 'Gastrointestinal Kanama Riski 3 ila 5 Kat Artar',
    mechanism: 'Trombositler pıhtılaşma için kandan serotonin toplar. SSRI\'lar trombosit içi serotonin deposunu tüketerek hemostazı bozar. NSAID\'ler ise COX-1 inhibisyonu ile mide koruyucu mukozasını zayıflatır.',
    clinicalImpact: 'Üst gastrointestinal sistem (GİS) kanaması, mide ülseri ve melena riski özellikle 60 yaş üstü bireylerde dramatik yükselir.',
    recommendation: 'Kronik veya sık NSAID gereksinimi olan hastalara mutlak suretle bir Proton Pompa İnhibitörü (PPI - örn. Pantoprazol) eklenmeli veya alternatif analjezikler değerlendirilmelidir.',
    evidenceSource: 'BMJ Meta-Analysis: SSRIs and Gastrointestinal Bleeding'
  },
  {
    substance1: 'escitalopram',
    substance2: 'nsaid',
    severity: 'high',
    title: 'Trombosit Disfonksiyonu & Mide Kanaması Riski',
    mechanism: 'SSRI kaynaklı trombosit hemostaz defekti + NSAID gastrik mukoza erozyonu.',
    clinicalImpact: 'Mide kanaması riski 3-4 kat artış gösterir.',
    recommendation: 'Birlikte kullanım gerekiyorsa mide koruyucu PPI profilaksisi düşünülmelidir.',
    evidenceSource: 'APA Practice Guidelines'
  },

  // SMOKING & CYP1A2 INDUCTION (CLOZAPINE & OLANZAPINE)
  {
    substance1: 'clozapine',
    substance2: 'smoking',
    severity: 'high',
    title: 'Sigara Katranı Klozapin Kan Düzeyini %50 Düşürür (Nüks Tehlikesi)',
    mechanism: 'Tütün dumanındaki aromatik hidrokarbonlar karaciğer CYP1A2 enzimini şiddetle uyarır (indükler). Nikotin değil, katran dumanı bu etkiyi yapar.',
    clinicalImpact: 'Günde 1 paket sigara içen hastada klozapin kan düzeyi yarı yarıya düşer. EN TEHLİKELİSİ: Hasta hastaneye yattığında veya sigarayı aniden bıraktığında CYP1A2 indüksiyonu durur; klozapin kan düzeyi 2 katına çıkarak nöbet, agranülositoz ve solunum arresti yapabilir!',
    recommendation: 'Sigara içme miktarındaki herhangi bir değişiklik (bırakma veya başlama) durumunda klozapin kan düzeyi acilen ölçülmeli ve doz hekim tarafından yeniden ayarlanmalıdır.',
    evidenceSource: 'FDA Boxed Warning & Maudsley Guidelines'
  },
  {
    substance1: 'olanzapine',
    substance2: 'smoking',
    severity: 'moderate',
    title: 'Sigara İçimi Olanzapin Düzeyini Azaltır',
    mechanism: 'CYP1A2 indüksiyonu ile olanzapin karaciğerden daha hızlı temizlenir.',
    clinicalImpact: 'Sigara içen hastalarda terapötik etkiyi yakalamak için %30-50 daha yüksek olanzapin dozu gerekebilir. Sigarayı bırakınca aşırı sedasyon gelişebilir.',
    recommendation: 'Sigara alışkanlığı değiştiğinde olanzapin dozu hekimce gözden geçirilmelidir.',
    evidenceSource: 'Clinical Pharmacokinetics of Olanzapine'
  },

  // ALCOHOL COMBINATIONS
  {
    substance1: 'diazepam',
    substance2: 'alcohol',
    severity: 'contraindicated',
    title: 'Ölümcül Solunum Depresyonu ve Koma (GABA Potansiyalizasyonu)',
    mechanism: 'Hem benzodiazepinler hem de alkol GABA-A reseptörünün allosterik modülatörüdür. Birlikte alındıklarında beyin sapındaki solunum merkezini felç ederler.',
    clinicalImpact: 'Aşırı sedasyon, koma, aspirasyon ve ölümcül solunum arresti. Acil servislerde en sık ölüm nedenlerinden biridir.',
    recommendation: 'Benzodiazepin kullanan hastalar KESİNLİKLE alkol almamalıdır. Eşlik eden kullanım acil tıbbi durumdur.',
    evidenceSource: 'CDC Guidelines & Emergency Medicine Toxicology'
  },
  {
    substance1: 'alprazolam',
    substance2: 'alcohol',
    severity: 'contraindicated',
    title: 'Sinerjistik SSS Baskılanması & Solunum Arresti',
    mechanism: 'GABAerjik transmisyonun aşırı aktivasyonu ve solunum merkezinin durması.',
    clinicalImpact: 'Bilinç kaybı, derin koma ve mortalite.',
    recommendation: 'Kombinasyon kesinlikle yasaktır.',
    evidenceSource: 'FDA Black Box Warning'
  },
  {
    substance1: 'quetiapine',
    substance2: 'alcohol',
    severity: 'high',
    title: 'Şiddetli Sedasyon, Ortostatik Hipotansiyon ve Düşmeler',
    mechanism: 'Santral sinir sistemi depresyonunun katlanması ve alfa-1 adrenerjik blokaj ile kan basıncının aniden çökmesi.',
    clinicalImpact: 'Ağır baş dönmesi, bayılma, kafa travması ile sonuçlanan düşmeler ve bilişsel ketlenme.',
    recommendation: 'Ketiapin ile birlikte alkol tüketimi önerilmez.',
    evidenceSource: 'APA & TPD Kılavuzları'
  },

  // VALPROATE & LAMOTRIGINE (STEVENS-JOHNSON SYNDROME)
  {
    substance1: 'valproate',
    substance2: 'lamotrigine',
    severity: 'high',
    title: 'Lamotrijin Düzeyinde 2 Kat Artış ve Stevens-Johnson Sendromu (SJS)',
    mechanism: 'Valproat, lamotrijinin glukuronidasyon metabolizmasını (UGT1A4) güçlü şekilde inhibe eder. Lamotrijinin yarı ömrü 24 saatten yaklaşık 60 saate fırlar!',
    clinicalImpact: 'Hayati tehlike arz eden toksik epidermal nekroliz ve Stevens-Johnson cilt döküntüsü riski dramatik şekilde artar.',
    recommendation: 'Eğer bu iki ilaç birlikte kullanılacaksa, standart Lamotrijin titrasyon dozu YARIYA İNDİRİLMELİDİR (Günde 25 mg yerine gün aşırı 25 mg ile başlanmalı ve çok yavaş artırılmalıdır).',
    evidenceSource: 'FDA Black Box Warning & Maudsley Prescribing Guidelines'
  },

  // FLUOXETINE / PAROXETINE + RISPERIDONE / ARIPIPRAZOLE
  {
    substance1: 'fluoxetine',
    substance2: 'aripiprazole',
    severity: 'moderate',
    title: 'CYP2D6 İnhibisyonu: Aripiprazol Düzeyi İki Katına Çıkar',
    mechanism: 'Fluoksetin güçlü bir CYP2D6 inhibitörüdür. Aripiprazolün karaciğer klirensini yarı yarıya düşürür.',
    clinicalImpact: 'Artmış akatizi (içsel kıpır kıpırlık hissi), ajitasyon ve sedasyon.',
    recommendation: 'Aripiprazol dozu %50 oranında azaltılmalı ve akatizi belirtileri yakından izlenmelidir.',
    evidenceSource: 'Abilify Prescribing Information (FDA)'
  },
  {
    substance1: 'paroxetine',
    substance2: 'aripiprazole',
    severity: 'moderate',
    title: 'Aripiprazol Klirensinde Düşüş ve Akatizi Riski',
    mechanism: 'Paroksetin en güçlü CYP2D6 inhibitörüdür; aripiprazol plazma seviyesini 2 kat artırır.',
    clinicalImpact: 'Akatizi, huzursuzluk ve EPS artışı.',
    recommendation: 'Aripiprazol dozu yarıya düşürülerek titre edilmelidir.',
    evidenceSource: 'CANMAT Bipolar Guidelines'
  },

  // CARBAMAZEPINE PAN-INDUCTION
  {
    substance1: 'carbamazepine',
    substance2: 'quetiapine',
    severity: 'high',
    title: 'Ketiapin Düzeyinde %80 Düşüş (Pan-Enzim İndüksiyonu)',
    mechanism: 'Karbamazepin en güçlü hepatik CYP3A4 indükleyicilerinden biridir. Ketiapinin yıkımını dramatik hızlandırır.',
    clinicalImpact: 'Ketiapin plazma konsantrasyonu tedavi edici seviyenin çok altına düşer; psikotik veya manik nüks gelişir.',
    recommendation: 'Bu iki ilacın birlikte kullanımından kaçınılmalıdır. Ketiapin yerine karbamazepinden etkilenmeyen alternatif ajanlar tercih edilmelidir.',
    evidenceSource: 'Clinical Pharmacokinetics & Maudsley'
  },
  {
    substance1: 'carbamazepine',
    substance2: 'clozapine',
    severity: 'contraindicated',
    title: 'Kemik İliği Baskılanması & Ölümcül Agranülositoz',
    mechanism: 'Her iki ilaç da kemik iliği toksisitesi ve nötrofil baskılanması yapma potansiyeline sahiptir.',
    clinicalImpact: 'Agranülositoz (nötrofil sayısının sıfıra yaklaşması) ve sepsis riski katlanır.',
    recommendation: 'Klozapin ile Karbamazepinin birlikte kullanımı MUTLAK KONTRENDİKEDİR.',
    evidenceSource: 'FDA Clozapine REMS & International Consensus Guidelines'
  },

  // OMEPRAZOLE & ESCITALOPRAM
  {
    substance1: 'escitalopram',
    substance2: 'omeprazole',
    severity: 'moderate',
    title: 'CYP2C19 İnhibisyonu: Essitalopram Düzeyi %50 Artar (QTc Riski)',
    mechanism: 'Omeprazol hepatik CYP2C19 enzimini inhibe eder. Essitalopram bu enzimle temizlenir.',
    clinicalImpact: 'Essitalopram kan seviyesi yükselerek kardiyak repolarizasyonu geciktirebilir ve QTc süresini uzatabilir.',
    recommendation: 'Birlikte kullanımda essitalopram maksimum günlük dozu 10 mg ile sınırlandırılmalı veya CYP2C19\'u inhibe etmeyen alternatif mide koruyucu (örn. Pantoprazol) seçilmelidir.',
    evidenceSource: 'FDA Drug Safety Communication on Citalopram/Escitalopram'
  }
];

export const DrugInteractionChecker: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['sertraline', 'nsaid']);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSeverity, setFilterSeverity] = useState<'all' | 'contraindicated' | 'high' | 'moderate'>('all');

  // Toggle selection
  const handleToggleSubstance = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectPreset = (preset: string[]) => {
    setSelectedIds(preset);
  };

  // Find all matched interactions between selected substances
  const matchedInteractions = useMemo(() => {
    const list: InteractionRule[] = [];
    if (selectedIds.length < 2) return list;

    for (let i = 0; i < selectedIds.length; i++) {
      for (let j = i + 1; j < selectedIds.length; j++) {
        const id1 = selectedIds[i];
        const id2 = selectedIds[j];

        const match = INTERACTION_RULES.find(rule => 
          (rule.substance1 === id1 && rule.substance2 === id2) ||
          (rule.substance1 === id2 && rule.substance2 === id1)
        );

        if (match) {
          list.push(match);
        }
      }
    }
    return list;
  }, [selectedIds]);

  const filteredInteractions = useMemo(() => {
    if (filterSeverity === 'all') return matchedInteractions;
    return matchedInteractions.filter(r => r.severity === filterSeverity);
  }, [matchedInteractions, filterSeverity]);

  // Filtered substance list for selector
  const filteredSubstances = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return SUBSTANCE_DATABASE;
    return SUBSTANCE_DATABASE.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.genericName.toLowerCase().includes(q) ||
      s.categoryLabel.toLowerCase().includes(q) ||
      (s.cypRole && s.cypRole.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const getSeverityBadge = (severity: InteractionRule['severity']) => {
    switch (severity) {
      case 'contraindicated':
        return {
          bg: 'bg-rose-50 border-rose-300 text-rose-800',
          dot: 'bg-rose-600',
          label: '🔴 KESİNLİKLE KONTRENDİKE / HAYATİ TEHLİKE',
          desc: 'Birlikte kullanılmamalıdır, hayati risk taşır.'
        };
      case 'high':
        return {
          bg: 'bg-amber-50 border-amber-300 text-amber-800',
          dot: 'bg-amber-600',
          label: '🟠 YÜKSEK KLİNİK RİSK / ÖNLEM GEREKLİ',
          desc: 'Doz ayarlaması veya yakın izlem zorunludur.'
        };
      case 'moderate':
        return {
          bg: 'bg-blue-50 border-blue-300 text-blue-800',
          dot: 'bg-blue-600',
          label: '🟡 ORTA RİSK / MONITORİZE EDİN',
          desc: 'Klinik takip ve hasta bilgilendirmesi önerilir.'
        };
      default:
        return {
          bg: 'bg-emerald-50 border-emerald-300 text-emerald-800',
          dot: 'bg-emerald-600',
          label: '🟢 DÜŞÜK RİSK / GÜVENLİ',
          desc: 'Belirgin farmakokinetik engel saptanmadı.'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Viral Klinik Araç #1 • İlaç-İlaç & Besin Etkileşim Radarı</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1">
              Akıllı İlaç, Madde & Besin Etkileşim Matrisi
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl">
              Psikiyatrik ilaçlar, sık kullanılan ağrı kesiciler (NSAID), mide koruyucular ve günlük yaşam faktörlerini 
              (Greyfurt, Alkol, Kahve/Kafein, Sigara, Sarı Kantaron) seçerek olası CYP yarışmalarını, serotonin toksisitesini 
              ve kardiyak riskleri anında analiz edin.
            </p>
          </div>

          {/* Quick Clear Button */}
          {selectedIds.length > 0 && (
            <button
              onClick={() => setSelectedIds([])}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 self-start md:self-auto"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Seçimleri Sıfırla ({selectedIds.length})</span>
            </button>
          )}
        </div>

        {/* Popular Preset Scenarios (High Viral Interest) */}
        <div className="pt-2 border-t border-neutral-100">
          <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>En Sık Karşılaşılan Kritik Senaryolar (Tek Tıkla Dene):</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: '🔴 Lityum + Ağrı Kesici (İbuprofen)', ids: ['lithium', 'nsaid'] },
              { label: '🔴 SSRI + Tramadol (Serotonin Sendromu)', ids: ['sertraline', 'tramadol'] },
              { label: '🟠 Ketiapin + Greyfurt Suyu', ids: ['quetiapine', 'grapefruit'] },
              { label: '🔴 Benzodiazepin + Alkol', ids: ['diazepam', 'alcohol'] },
              { label: '🟠 Sigara Bırakma & Klozapin Toksisitesi', ids: ['clozapine', 'smoking'] },
              { label: '🟠 Valproat + Lamotrijin (Stevens-Johnson)', ids: ['valproate', 'lamotrigine'] },
              { label: '🔴 Sarı Kantaron Çayı + Antidepresan', ids: ['sertraline', 'st_johns_wort'] },
              { label: '🟡 Lityum + Kahve / Kafein', ids: ['lithium', 'caffeine'] },
              { label: '🟠 SSRI + Mide Kanaması (NSAID)', ids: ['escitalopram', 'nsaid'] },
              { label: '🟡 Essitalopram + Omeprazol (QTc)', ids: ['escitalopram', 'omeprazole'] }
            ].map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPreset(p.ids)}
                className="px-2.5 py-1 text-[11px] font-medium bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-md transition-colors cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Left Selector, Right Interaction Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Substance Selection (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-neutral-200 p-4 rounded-xl shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-neutral-800" />
              <span>İlaç & Madde Seçimi ({selectedIds.length} seçildi)</span>
            </h3>
            <span className="text-[11px] font-mono text-neutral-500">
              Min. 2 seçim yapın
            </span>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="İlaç veya madde ara (örn: ketiapin, greyfurt, lityum)..."
              className="w-full pl-9 pr-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800"
            />
          </div>

          {/* Selected Pills Active Bar */}
          {selectedIds.length > 0 && (
            <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Seçili Öğeler:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedIds.map(id => {
                  const item = SUBSTANCE_DATABASE.find(s => s.id === id);
                  if (!item) return null;
                  return (
                    <span 
                      key={id} 
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-900 text-white text-[11px] font-medium rounded-md"
                    >
                      <span>{item.genericName}</span>
                      <button
                        type="button"
                        onClick={() => handleToggleSubstance(id)}
                        className="hover:text-neutral-300 cursor-pointer ml-0.5 text-xs font-bold"
                        aria-label="Kaldır"
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Substance List Grouped */}
          <div className="max-h-[500px] overflow-y-auto space-y-1.5 pr-1 text-xs">
            {filteredSubstances.map(item => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => handleToggleSubstance(item.id)}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-2 select-none ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-800'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs truncate">{item.name}</span>
                      {item.category === 'lifestyle' && (
                        <span className={`px-1.5 py-0.2 font-mono text-[9px] rounded font-semibold ${
                          isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-amber-100 text-amber-800'
                        }`}>
                          Besin/Madde
                        </span>
                      )}
                    </div>
                    <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {item.cypRole || item.categoryLabel}
                    </div>
                  </div>

                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-white border-white text-neutral-900' : 'border-neutral-300 bg-white'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interaction Analysis & Findings (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Header & Filter */}
          <div className="bg-white border border-neutral-200 p-4 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Etkileşim Analiz Raporu ({matchedInteractions.length} etkileşim bulundu)</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Seçilen {selectedIds.length} etken madde arasındaki ikili kombinasyonlar
              </p>
            </div>

            {/* Filter Severity Tabs */}
            {matchedInteractions.length > 0 && (
              <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg text-[11px] font-medium shrink-0">
                <button
                  type="button"
                  onClick={() => setFilterSeverity('all')}
                  className={`px-2 py-0.5 rounded cursor-pointer ${filterSeverity === 'all' ? 'bg-white font-bold text-neutral-900 shadow-xs' : 'text-neutral-600'}`}
                >
                  Tümü ({matchedInteractions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterSeverity('contraindicated')}
                  className={`px-2 py-0.5 rounded cursor-pointer ${filterSeverity === 'contraindicated' ? 'bg-rose-100 font-bold text-rose-800' : 'text-neutral-600'}`}
                >
                  Kontrendike
                </button>
                <button
                  type="button"
                  onClick={() => setFilterSeverity('high')}
                  className={`px-2 py-0.5 rounded cursor-pointer ${filterSeverity === 'high' ? 'bg-amber-100 font-bold text-amber-800' : 'text-neutral-600'}`}
                >
                  Yüksek Risk
                </button>
              </div>
            )}
          </div>

          {/* Empty / Instruction State */}
          {selectedIds.length < 2 && (
            <div className="bg-white border border-dashed border-neutral-300 p-8 rounded-xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-100 mx-auto flex items-center justify-center text-neutral-500">
                <Pill className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-neutral-800">
                Etkileşimleri görmek için sol taraftan en az 2 etken madde seçin
              </h4>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                Yukarıdaki "En Sık Karşılaşılan Kritik Senaryolar" butonlarına tıklayarak da hazır kombinasyonları tek hamlede test edebilirsiniz.
              </p>
            </div>
          )}

          {/* No Interaction Detected for Selected Pair */}
          {selectedIds.length >= 2 && matchedInteractions.length === 0 && (
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Belirgin Majör Farmakokinetik Etkileşim Saptanmadı</span>
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Seçilen maddeler arasında veri tabanımızda kayıtlı doğrudan kontrendike veya majör düzeyde toksik bir etkileşim bulunamadı. 
                Bununla birlikte, hastaya özgü böbrek/karaciğer fonksiyonları, QTc süresi ve bireysel tolerans her zaman hekim tarafından değerlendirilmelidir.
              </p>
            </div>
          )}

          {/* Interaction Cards */}
          <div className="space-y-4">
            {filteredInteractions.map((item, idx) => {
              const badge = getSeverityBadge(item.severity);
              const sub1 = SUBSTANCE_DATABASE.find(s => s.id === item.substance1);
              const sub2 = SUBSTANCE_DATABASE.find(s => s.id === item.substance2);

              return (
                <div 
                  key={idx} 
                  className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs space-y-0"
                >
                  {/* Card Header */}
                  <div className={`px-4 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 ${badge.bg}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${badge.dot}`} />
                      <span className="text-xs font-mono font-bold tracking-tight">
                        {badge.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800">
                      <span>{sub1?.genericName || item.substance1}</span>
                      <span className="text-neutral-400 font-normal">+</span>
                      <span>{sub2?.genericName || item.substance2}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 space-y-3 text-xs">
                    <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                      {item.title}
                    </h4>

                    {/* Mechanism */}
                    <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-700 font-mono uppercase">
                        <Dna className="w-3.5 h-3.5 text-neutral-600" />
                        <span>Farmakokinetik Mekanizma:</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed">
                        {item.mechanism}
                      </p>
                    </div>

                    {/* Clinical Impact */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider">
                        Klinik Tehdit & Belirtiler:
                      </span>
                      <p className="text-neutral-700 leading-relaxed">
                        {item.clinicalImpact}
                      </p>
                    </div>

                    {/* Actionable Clinical Recommendation */}
                    <div className="p-3 bg-neutral-900 text-white rounded-lg space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 font-mono uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Klinik Eylem & Hekim Tavsiyesi:</span>
                      </div>
                      <p className="text-neutral-200 leading-relaxed font-sans text-xs">
                        {item.recommendation}
                      </p>
                    </div>

                    {/* Evidence Source Footer */}
                    <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                      <span>Kanıt: {item.evidenceSource}</span>
                      <span className="text-neutral-400">ICD-11 / DSM-5 Uyumlu</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
