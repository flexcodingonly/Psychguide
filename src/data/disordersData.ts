import { Disorder } from '../types';

export const DISORDERS_DATA: Disorder[] = [
  {
    id: 'mdd',
    name: 'Major Depresif Bozukluk (MDB)',
    category: 'Duygudurum Bozuklukları',
    dsmCode: '296.xx (F32/F33)',
    icd11Code: '6A70 / 6A71',
    summary: 'En az 2 hafta süren çökkün duygudurum veya ilgi/istek kaybı ile birlikte otonomik ve bilişsel semptom kümesi.',
    durationRequired: 'En az 2 ardışık hafta boyunca semptomların neredeyse her gün ve gün boyu sürmesi.',
    coreCriteria: [
      'Temel Belirti 1: Çökkün duygudurum (hüzün, boşluk, çaresizlik hissi veya gözlenmesi).',
      'Temel Belirti 2: Anhedoni (hemen tüm etkinliklere karşı belirgin ilgi ve zevk kaybı).',
      'Önemli kilo kaybı veya alımı / iştah azalması veya artması.',
      'Uykusuzluk (insomni: erken uyanma, terminal) veya aşırı uyku (hipersomni).',
      'Psikomotor ajitasyon veya retardasyon (başkalarınca gözlenebilir düzeyde).',
      'Halsizlik, bitkinlik ve enerji azlığı.',
      'Değersizlik veya aşırı/uygunsuz suçluluk duyguları.',
      'Düşünme veya konsantre olma yetisinde azalma, kararsızlık.',
      'Tekrarlayan ölüm düşünceleri, intihar planı veya girişimi (Kritik güvenlik değerlendirmesi).'
    ],
    exclusions: [
      'Belirtiler bir maddenin (örn. alkol, uyuşturucu, ilaç) fizyolojik etkilerine bağlanamaz.',
      'Belirtiler genel tıbbi bir duruma (örn. hipotiroidizm, B12 eksikliği, Cushing) bağlanamaz.',
      'Hiçbir zaman mani veya hipomani atağı yaşanmamış olması (bipolar bozukluk dışlanmalıdır).'
    ],
    subtypesOrSpecifiers: [
      'Anksiyeteli Sıkıntı ile (With anxious distress)',
      'Karma Özellikli (With mixed features - hipomanik belirtiler)',
      'Melankolik Özellikli (Sabah kötüleşmesi, erken uyanma, şiddetli psikomotor yavaşlama)',
      'Atipik Özellikli (Duygudurum tepkiselliği, kurşun felci, hipersomni, aşırı yeme, reddedilme duyarlılığı)',
      'Psikotik Özellikli (Duygudurumla uyumlu / uyumsuz hezeyan veya varsanılar)',
      'Peripartum Başlangıçlı (Gebelikte veya doğumdan sonraki 4 hafta içinde)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Bipolar Depresyon',
        distinguishingFeatures: 'Geçmişte en az 1 manik (Tip I) veya hipomanik (Tip II) dönem mevcuttur. Antidepresan monoterapisinden kaçınılmalıdır.'
      },
      {
        condition: 'Hipotiroidizm & Endokrin Bozukluklar',
        distinguishingFeatures: 'TSH yüksekliği, serbest T4 düşüklüğü, belirgin soğuk intoleransı, bradikardi, cilt kuruluğu.'
      },
      {
        condition: 'Normal Yas (Grief / Bereavement)',
        distinguishingFeatures: 'Dalgalar halinde gelir (acı dalgaları), benlik saygısı genellikle korunur, temel odak kaybedilen kişidir; MDB\'de yaygın değersizlik hissi hakimdir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'İkinci Kuşak Antidepresanlar (SSRI: Sertralin, Essitalopram; SNRI: Venlafaksin, Duloksetin). Yan etki profili ve komorbiditeye göre seçilir.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Bilişsel Davranışçı Terapi (BDT) veya Kişilerarası İlişkiler Terapisi (KİT) hafif-orta şiddette monoterapi, ağır olgularda kombine.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Biyolojik / Diğer',
        recommendation: 'Elektrokonvülsif Terapi (EKT): Şiddetli intihar riski, psikotik depresyon, yememe-içmeme ile katatoni veya tedaviye dirençte altın standart.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Akut fazda tedavi yanıtı 2-4. haftalarda başlar. Yeterli dozda en az 6-8 hafta beklenmeden etkisiz denmemelidir.',
      'Remisyon sağlandıktan sonra ilk atakta relapsı önlemek için idame tedavisi en az 6-9 ay sürdürülmelidir.',
      'Genç erişkinlerde (özellikle <25 yaş) antidepresan başlarken ilk 2-4 hafta intihar düşüncesi tetiklenmesi açısından yakın izlem gerekir.'
    ]
  },
  {
    id: 'bipolar',
    name: 'Bipolar I ve II Bozukluk',
    category: 'Duygudurum Bozuklukları',
    dsmCode: '296.4x - 296.89 (F31)',
    icd11Code: '6A60 / 6A61',
    summary: 'Taşkın, kabarmış veya irritabl duygudurum ve artmış amaca yönelik etkinlik atakları ile seyreden kronik döngüsel bozukluk.',
    durationRequired: 'Bipolar I (Mani): En az 1 hafta (veya yatış gerektiren herhangi bir süre). Bipolar II (Hipomani): En az 4 ardışık gün.',
    coreCriteria: [
      'Kabarmış, taşkın veya aşırı irritabl duygudurum ve amaca yönelik enerji artışı.',
      'Benlik saygısında abartılı artış veya grandiyözite (büyüklük fikirleri).',
      'Uyku gereksiniminde belirgin azalma (örn. 2-3 saat uykuyla dinlenmiş hissetme).',
      'Basınçlı konuşma (aşırı konuşkanlık, söz kesilememesi).',
      'Fikir uçuşması (flight of ideas) veya düşüncelerin yarışması sübjektif hissi.',
      'Aşırı dikkatsizlik ve kolay çelinebilirlik.',
      'Amaca yönelik etkinlikte artış (sosyal, iş, okul veya cinsel alanda) veya psikomotor ajitasyon.',
      'Kötü sonuçlar doğurma potansiyeli yüksek etkinliklere kontrolsüzce atılma (aşırı alışveriş, kumar, riskli cinsel davranışlar).'
    ],
    exclusions: [
      'Mani belirtileri madde kullanımına (kokain, amfetamin, steroid) veya başka tıbbi duruma (hipertiroidizm) bağlanamaz.',
      'Bipolar I tanısı için yaşam boyu tek bir manik atak yeterlidir (depresyon atağı şart değildir ancak sıklıkla görülür).',
      'Bipolar II tanısı için en az 1 hipomani atağı ve en az 1 major depresyon atağı bulunmalıdır; ASLA manik atak geçirilmemiş olmalıdır.'
    ],
    subtypesOrSpecifiers: [
      'Hızlı Döngülü (Rapid Cycling: Yılda ≥4 duygudurum atağı)',
      'Karma Özellikli (Mani/hipomani içinde depresif belirtiler veya tam tersi)',
      'Psikotik Özellikli (Mani döneminde büyüklük veya perseküsyon sanrıları)',
      'Anksiyeteli Sıkıntı ile (With anxious distress)',
      'Mevsimsel Örüntü Gösteren (Genellikle ilkbahar/yaz mani, sonbahar/kış depresyon)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Şizofreni / Şizoafektif Bozukluk',
        distinguishingFeatures: 'Şizoafektifte belirgin duygudurum belirtileri olmaksızın en az 2 hafta süren hezeyan veya varsanılar vardır.'
      },
      {
        condition: 'Borderline Kişilik Bozukluğu',
        distinguishingFeatures: 'Duygudurum dalgalanmaları saatler/günler içinde tetikleyicilerle (ilişkisel reddedilme) değişir; bipolar dönemler ise haftalar/aylar sürer.'
      },
      {
        condition: 'DEHB (Dikkat Eksikliği ve Hiperaktivite)',
        distinguishingFeatures: 'DEHB çocukluktan itibaren kronik ve kesintisizdir; bipolar bozukluk ise epizodiktir (dönemler arası ötimi vardır).'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Akut Mani: Lityum, Valproat, veya 2. Kuşak Antipsikotik (Ketiapin, Olanzapin, Risperidon, Aripiprazol). Şiddetli ajitasyonda kombinasyon.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Bipolar Depresyon: Ketiapin, Lurasidon, Kariprazin, veya Olanzapin-Fluoksetin kombinesi. Antidepresan monoterapisi KONTRENDİKEDİR.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Sosyal Ritim Terapisi (IPSRT) ve Aile Odaklı Terapi (FFT): Uyku-uyanıklık döngüsünün stabilizasyonu ve relaps tanıma.',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'Bipolar depresyonda antidepresan monoterapisi hızlı döngüyü tetikleyebilir veya manik kaymaya (switch) yol açabilir.',
      'Lityum intiharı önleyici (anti-suisidal) kanıtlanmış bağımsız etkisi olan yegane ajanlardan biridir.',
      'Valproat doğurganlık çağındaki kadınlarda teratojenite (nöral tüp defekti) ve polikistik over riski nedeniyle sıkı kontrendikasyon ve kılavuz kısıtlamalarına tabidir.'
    ]
  },
  {
    id: 'schizophrenia',
    name: 'Şizofreni ve Psikotik Bozukluklar',
    category: 'Psikotik Bozukluklar',
    dsmCode: '295.90 (F20.9)',
    icd11Code: '6A20',
    summary: 'Gerçeği değerlendirme yetisinde bozulma, pozitif semptomlar (sanrılar, halüsinasyonlar), negatif semptomlar ve bilişsel yıkımla karakterize kronik nörogelişimsel bozukluk.',
    durationRequired: 'En az 6 ay süren hastalık belirtileri (en az 1 ay aktif evre belirtisi içermelidir).',
    coreCriteria: [
      'Kriter A (En az ikisi bulunmalı, en az biri 1, 2 veya 3 olmalıdır):',
      '1. Sanrılar (Delüzyonlar: persekütif, referans, grandiyöz, erotomanik, somatik veya bizar).',
      '2. Halüsinasyonlar (Varsanılar: en sık işitsel - yorum yapan, emir veren veya tartışan sesler).',
      '3. Dezorganize (darmadağınık) konuşma (örn. çağrışım çözülmesi, teğetsellik, neolojizm).',
      '4. Belirgin dezorganize veya katatonik davranış.',
      '5. Negatif belirtiler (Duygusal küntleşme, avolisyon/isteksizlik, aloji/konuşma fakirliği, anhedoni, asosyallik).',
      'İşlevsellikte belirgin düşüş (iş, ilişkiler veya özbakım alanında).'
    ],
    exclusions: [
      'Şizoafektif bozukluk ve psikotik özellikli duygudurum bozuklukları dışlanmıştır.',
      'Madde kötüye kullanımı (esrar, metamfetamin, sentetik kannabinoid) veya genel tıbbi durum dışlanmıştır.',
      'Otizm spektrum bozukluğu öyküsü varsa, en az 1 ay belirgin sanrı veya varsanı bulunmalıdır.'
    ],
    subtypesOrSpecifiers: [
      'İlk Atak (Akut evre, kısmi remisyon, tam remisyon)',
      'Çoklu Ataklar (Akut alevlenme veya stabil dönem)',
      'Katatoni ile giden (Waxy flexibility, stupor, mutizm, ekopraksi)',
      'Semptom şiddet boyutları (Clinician-Rated Dimensions of Psychosis)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Maddeye Bağlı Psikotik Bozukluk',
        distinguishingFeatures: 'Toksikoloji taraması pozitiftir, madde arınmasıyla belirtiler genellikle 1 ay içinde geriler.'
      },
      {
        condition: 'Şizoafektif Bozukluk',
        distinguishingFeatures: 'Hastalığın aktif evresinde duygudurum atağı (depresyon/mani) bulunur; fakat en az 2 hafta boyunca duygudurum atağı OLMADAN sanrı/varsanı devam etmelidir.'
      },
      {
        condition: 'Sanrılı (Delüzyonel) Bozukluk',
        distinguishingFeatures: 'Sanrılar genellikle bizar değildir; halüsinasyonlar ve dezorganize konuşma veya belirgin negatif belirtiler YOKTUR.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'İkinci Kuşak (Atipik) Antipsikotikler: Aripiprazol, Risperidon, Olanzapin, Paliperidon. Tolerabilite ve metabolik risk profiline göre bireyselleştirilir.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Tedaviye Dirençli Şizofreni (TRP): İki farklı antipsikotiğin yeterli süre ve dozda denenmesine rağmen yanıtsızlıkta KLOZAPİN altın standarttır.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Psikososyal Beceriler Eğitimi, Psikoeğitim ve Bilişsel İyileştirme (Cognitive Remediation).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Tedaviye uyumsuzlukta Uzun Etkili Enjektabl (LAI / Depo) antipsikotikler relaps ve hastaneye yatış oranlarını dramatik biçimde düşürür.',
      'İlk psikotik atakta (FEP) D2 reseptör duyarlılığı yüksektir; düşük dozlarla başlanmalı ve ekstrapramidal yan etkiler yakından taranmalıdır.',
      'Negatif ve bilişsel semptomlar, uzun dönemli yeti yitiminin pozitif semptomlardan daha güçlü belirleyicisidir.'
    ]
  },
  {
    id: 'gad',
    name: 'Yaygın Anksiyete Bozukluğu (YAB)',
    category: 'Anksiyete Bozuklukları',
    dsmCode: '300.02 (F41.1)',
    icd11Code: '6B00',
    summary: 'Birçok olay veya etkinlik hakkında aşırı, kontrol edilemeyen endişe ve kuruntu ile birlikte somatik gerginlik semptomları.',
    durationRequired: 'En az 6 ay boyunca çoğu gün mevcut olması.',
    coreCriteria: [
      'Çeşitli konulara (sağlık, para, aile, iş) dair aşırı kaygı ve evham (beklenti anksiyetesi).',
      'Kişinin endişeyi kontrol etmekte zorlanması.',
      'Aşağıdaki 6 belirtiden en az üçünün eşlik etmesi (çocuklarda 1 tanesi yeterlidir):',
      '1. Huzursuzluk, aşırı gerginlik veya diken üstünde hissetme.',
      '2. Kolay yorulma.',
      '3. Konsantrasyon güçlüğü veya zihnin boşalması.',
      '4. İrritabilite (kolay öfkelenme).',
      '5. Kas gerginliği (kronik boyun/omuz/sırt ağrıları).',
      '6. Uyku bozukluğu (uykuya dalma güçlüğü, dinlendirmeyen uyku).'
    ],
    exclusions: [
      'Kaygı başka bir anksiyete bozukluğuna (örn. panik atağı geçirme korkusu, sosyal değerlendirilme endişesi) özgü değildir.',
      'Kafein aşırı tüketimi, hipertiroidizm, feokromositoma veya madde yoksunluğu dışlanmalıdır.'
    ],
    differentialDiagnosis: [
      {
        condition: 'Major Depresif Bozukluk',
        distinguishingFeatures: 'YAB\'da odak geleceğe yönelik felaket senaryolarıdır; MDB\'de geçmişe yönelik pişmanlık, suçluluk ve umutsuzluk öndedir.'
      },
      {
        condition: 'Panik Bozukluk',
        distinguishingFeatures: 'Panik bozuklukta ani paroksismal ataklar ve beklenti anksiyetesi vardır; YAB\'da serbest yüzen, sürekli bir endişe durumu hakimdir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'SSRI (Essitalopram, Paroksetin, Sertralin) veya SNRI (Venlafaksin, Duloksetin). Alternatif: Pregabalin.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Bilişsel Davranışçı Terapi (Belirsizliğe tahammülsüzlük ve bilişsel yeniden yapılandırma).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Benzodiazepinler akut krizde kısa süreli (2-4 hafta) verilebilir ancak bağımlılık, tolerans ve bilişsel küntleşme riski nedeniyle idame tedavide önerilmez.',
      'Anksiyolitik etkinin tam yerleşmesi 4-6 hafta sürebilir; başlangıçta geçici anksiyete artışını önlemek için düşük dozla başlanmalıdır.'
    ]
  },
  {
    id: 'panic',
    name: 'Panik Bozukluk ve Agorafobi',
    category: 'Anksiyete Bozuklukları',
    dsmCode: '300.01 (F41.0) / 300.22 (F40.00)',
    icd11Code: '6B01 / 6B02',
    summary: 'Beklenmedik tekrarlayan panik atakları ve atakların ardından gelen sürekli yeni bir atak geçirme kaygısı (beklenti anksiyetesi) veya davranış değişiklikleri.',
    durationRequired: 'En az 1 panik atağını takip eden 1 ay veya daha uzun süreli beklenti kaygısı veya uyumsuz kaçınma davranışı.',
    coreCriteria: [
      'Dakikalar içinde zirveye ulaşan yoğun korku veya dehşet atağı ile aşağıdaki 13 belirtiden en az dördü:',
      '1. Çarpıntı, kalp atışlarını duyumsama veya taşikardi.',
      '2. Terleme.',
      '3. Titreme veya sarsılma hissi.',
      '4. Nefes darlığı veya boğulma hissi.',
      '5. Soluğun tıkanması hissi (hava açlığı).',
      '6. Göğüs ağrısı veya göğüste sıkışma.',
      '7. Mide bulantısı veya karın ağrısı.',
      '8. Baş dönmesi, sersemlik, dengesizlik veya bayılacak gibi olma.',
      '9. Titreme, ürperme veya ateş basması hissi.',
      '10. Parestezi (uyuşma veya karıncalanma duyumu).',
      '11. Derealizasyon (gerçekdışılık) veya depersonalizasyon (kendine yabancılaşma).',
      '12. Kontrolü kaybetme veya çıldırma korkusu.',
      '13. Ölüm korkusu.'
    ],
    exclusions: [
      'Kardiyak nedenler (aritmi, mitral kapak prolapsusu, AKS), pulmoner emboli, hipertiroidizm, feokromositoma dışlanmalıdır.'
    ],
    differentialDiagnosis: [
      {
        condition: 'Akut Koroner Sendrom',
        distinguishingFeatures: 'EKG, kardiyak troponin ve kardiyovasküler risk faktörleri acil serviste değerlendirilmelidir.'
      },
      {
        condition: 'Sosyal Anksiyete Bozukluğu',
        distinguishingFeatures: 'Panik ataklar yalnızca sosyal değerlendirilme ve performans durumlarında tetiklenir; beklenmedik/spontan değildir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'SSRI\'lar (Sertralin, Paroksetin, Sitalopram, Essitalopram) veya SNRI (Venlafaksin). Doz aşamalı artırılmalıdır.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Panik Odaklı BDT (İç algısal maruz bırakma / interoceptive exposure ve felaketleştirici yorumların düzeltilmesi).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Panik hastaları sempatik uyarılmaya aşırı duyarlıdır; bu nedenle antidepresan tedavisi normal başlangıç dozunun yarısıyla (örn. Sertralin 25 mg) başlatılmalıdır.',
      'Agorafobi sıklıkla panik atağın komplikasyonu olarak gelişir (kaçmanın zor olabileceği kalabalık, köprü, toplu taşıma yerlerinden kaçınma).'
    ]
  },
  {
    id: 'ocd',
    name: 'Obsesif Kompulsif Bozukluk (OKB)',
    category: 'Obsesif-Kompulsif ve İlişkili Bozukluklar',
    dsmCode: '300.3 (F42)',
    icd11Code: '6B20',
    summary: 'İstenmeden gelen, yineleyici, rahatsız edici düşünceler (obsesyonlar) ve bunları nötralize etmek için yapılan yineleyici davranışlar veya zihinsel eylemler (kompulsiyonlar).',
    durationRequired: 'Obsesyon ve kompulsiyonların günde 1 saatten fazla zaman alması veya belirgin sıkıntıya / işlevsellik kaybına yol açması.',
    coreCriteria: [
      'Obsesyonlar: İstenç dışı gelen, kaygı veya sıkıntıya yol açan yineleyici dürtü, düşünce veya imgeler (örn. bulaşma, simetri/düzen, saldırganlık/zarar verme, kuşku, cinsel veya dini tabular).',
      'Kompulsiyonlar: Obsesyonun yarattığı anksiyeteyi azaltmak veya korkulan bir olayı önlemek amacıyla katı kurallara göre yapılan eylemler (yıkama/temizleme, kontrol etme, sayma, düzenleme, zihinsel tekrarlar).',
      'İçgörü Düzeyi Belirleyicisi: İyi/orta içgörülü, zayıf içgörülü, içgörüsüz/sanrısal inançlı.'
    ],
    exclusions: [
      'Aşırı endişeler YAB ile ilişkili değildir; anoreksiya nevrozada yeme ile, trikotilomanide saç yolma ile sınırlı değildir.'
    ],
    differentialDiagnosis: [
      {
        condition: 'Obsesif Kompulsif Kişilik Bozukluğu (OKKB)',
        distinguishingFeatures: 'OKKB ego-sintoniktir (kişi kurallarından memnundur, doğru olduğuna inanır); OKB ise ego-distoniktir (kişi düşüncelerinden muzdariptir).'
      },
      {
        condition: 'Psikotik Bozukluklar',
        distinguishingFeatures: 'İçgörüsüz OKB sanrıya benzeyebilir; ancak düşüncelerin zihne dışarıdan sokulduğu hissi (düşünce sokulması) şizofreniye özgüdür.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Yüksek Doz SSRI (Fluoksetin 60-80 mg, Sertralin 200 mg, Paroksetin 40-60 mg, Fluvoksamin 200-300 mg). Dirençte Klomipramin veya antipsikotik güçlendirmesi (Aripiprazol, Risperidon).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Maruz Bırakma ve Tepki Önleme (ERP - Exposure and Response Prevention): Altın standart psikoterapötik müdahale.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'OKB\'de antidepresan yanıtı depresyona kıyasla daha geç ortaya çıkar (en az 10-12 hafta tam doz gereklidir) ve depresyon dozlarının üzerinde yüksek dozlar gerektirir.',
      'PANDAS / PANS: Çocukluk çağında A grubu streptokok enfeksiyonu sonrası ani başlayan OKB ve tik belirtileri akılda tutulmalıdır.'
    ]
  },
  {
    id: 'ptsd',
    name: 'Travma Sonrası Stres Bozukluğu (TSSB)',
    category: 'Travma ve Stresörle İlişkili Bozukluklar',
    dsmCode: '309.81 (F43.10)',
    icd11Code: '6B40',
    summary: 'Gerçek veya tehdit edici ölüm, ağır yaralanma ya da cinsel şiddet olayına maruz kalmanın ardından gelişen yeniden yaşantılama, kaçınma, bilişsel/duygudurum değişiklikleri ve aşırı uyarılmışlık.',
    durationRequired: 'Belirtilerin travmatik olaydan sonra 1 aydan uzun sürmesi (ilk 1 ay içinde Akut Stres Bozukluğu adını alır).',
    coreCriteria: [
      'Kriter A: Travmatik olaya doğrudan maruz kalma, tanık olma, yakınının başına geldiğini öğrenme veya ayrıntılara aşırı maruz kalma.',
      'Kriter B (İstemsiz Girişim / Yeniden Yaşantılama): İstençdışı rahatsız edici anılar, travmatik kabuslar, dissosiyatif tepkiler (flashback\'ler), tetikleyicilerle yoğun psikolojik/fizyolojik tepki.',
      'Kriter C (Kaçınma): Travmayı anımsatan düşünce, anı veya dışsal uyarıcılardan (yer, kişi, konuşma) ısrarlı kaçınma.',
      'Kriter D (Olumsuz Değişiklikler): Travmanın önemli kısımlarını hatırlayamama, kendisi veya dünya hakkında abartılı olumsuz inançlar, yabancılaşma hissi, anhedoni.',
      'Kriter E (Uyarılmışlık ve Tepkisellikte Değişim): İrritabilite ve öfke patlamaları, pervasızca davranışlar, hipervijilans (aşırı tetikte olma), abartılı irkilme tepkisi, uyku bozukluğu.'
    ],
    exclusions: [
      'Maddenin fizyolojik etkilerine veya başka bir tıbbi duruma bağlanamaz.'
    ],
    differentialDiagnosis: [
      {
        condition: 'Akut Stres Bozukluğu',
        distinguishingFeatures: 'Belirtiler travmadan sonraki 3 gün ile 1 ay arasında mevcuttur; 1 ayı aşarsa TSSB tanısı alır.'
      },
      {
        condition: 'Uyum Bozukluğu',
        distinguishingFeatures: 'Stresör hayati tehlike içermeyen olağan yaşam olaylarıdır (boşanma, iş kaybı).'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Psikoterapi',
        recommendation: 'Travma Odaklı BDT (TF-CBT), Uzatılmış Maruz Bırakma (Prolonged Exposure) veya EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'SSRI\'lar (Sertralin, Paroksetin) veya SNRI (Venlafaksin). Travma kabusları için alfa-1 blokeri Prazosin.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'TSSB\'de benzodiazepin kullanımı kontrendike veya etkisiz kabul edilir; travma anısının işlenmesini bozar ve bağımlılık riskini artırır.',
      'Prazosin (alfa-1 adrenerjik antagonist) santral sempatik tonusu azaltarak travmatik kabusları ve uyku bölünmelerini belirgin şekilde azaltır.'
    ]
  },
  {
    id: 'adhd',
    name: 'Erişkin Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB)',
    category: 'Nörogelişimsel Bozukluklar',
    dsmCode: '314.0x (F90.x)',
    icd11Code: '6A05',
    summary: 'Gelişimsel düzeye uygun olmayan kalıcı dikkatsizlik, dağınıklık ve/veya hiperaktivite-dürtüsellik örüntüsü.',
    durationRequired: 'En az 6 ay sürmesi ve belirtilerin 12 yaşından önce başlamış olması gerekir (erişkinde en az 5 belirti yeterlidir).',
    coreCriteria: [
      'Dikkatsizlik Kümesi (Erişkinde en az 5 belirti):',
      'Detaylara dikkat edememe, iş veya projelerde dikkatsizce hatalar yapma.',
      'Görev veya etkinliklerde dikkati sürdürmekte zorlanma.',
      'Kendisiyle doğrudan konuşulurken dinlemiyormuş gibi görünme.',
      'Talimatları takip edememe, işyerinde başladığı işleri yarım bırakma.',
      'Görev ve aktiviteleri organize etmekte, planlamakta kronik güçlük.',
      'Sürekli zihinsel çaba gerektiren işlerden kaçınma veya erteleme (prokrastinasyon).',
      'Eşyaları kaybetme (anahtar, telefon, evrak, cüzdan).',
      'Dış uyaranlarla dikkatin kolayca dağılması.',
      'Günlük etkinliklerde unutkanlık (randevuları, faturaları unutma).',
      'Hiperaktivite ve Dürtüsellik Kümesi (Erişkinde en az 5 belirti):',
      'Otururken kıpırdanma, elleri ayakları oynatma, içsel huzursuzluk.',
      'Soru tamamlanmadan yanıtı yapıştırma, başkalarının sözünü kesme, sırasını bekleyememe.'
    ],
    exclusions: [
      'Belirtiler şizofreni veya başka bir psikotik bozukluk gidişinde ortaya çıkmamıştır; anksiyete veya duygudurum bozukluğu ile daha iyi açıklanamaz.'
    ],
    differentialDiagnosis: [
      {
        condition: 'Bipolar Bozukluk',
        distinguishingFeatures: 'DEHB süreklidir ve erken çocukluktan beri vardır; Bipolar bozukluk epizodiktir (ötimik bazal çizgi vardır).'
      },
      {
        condition: 'Madde Kullanım Bozukluğu',
        distinguishingFeatures: 'Erişkin DEHB hastaları sıklıkla kendilerini regüle etmek için aşırı kafein veya nikotin/uyarıcı kullanır; dikkatli ayrım yapılmalıdır.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Psikostimulanlar: Metilfenidat (kısa, orta veya uzun etkili OROS formları) veya Deksamfetamin/Lisdeksamfetamin. Yanıtsızlık veya bağımlılık riskinde Atomoksetin (SNRI).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Erişkin DEHB Odaklı Bilişsel Davranışçı Terapi (Zaman yönetimi, organizasyon, erteleme ile başa çıkma stratejileri).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Erişkinlerde hiperaktivite fiziksel koşuşturmadan ziyade zihinsel huzursuzluk, içsel gerginlik ve aşırı konuşmaya evrilir.',
      'Stimülan reçete etmeden önce kardiyovasküler öykü (ani ölüm, aritmi), tansiyon ve nabız mutlaka kontrol edilmelidir.'
    ]
  },
  {
    id: 'borderline',
    name: 'Sınırda (Borderline) Kişilik Bozukluğu',
    category: 'Kişilik Bozuklukları (Küme B)',
    dsmCode: '301.83 (F60.3)',
    icd11Code: '6D10 / Kişilik Güçlüğü',
    summary: 'Kişilerarası ilişkilerde, benlik algısında ve duygulanımda tutarsızlık ve belirgin dürtüsellik ile giden yaygın örüntü.',
    durationRequired: 'Erken erişkinlikte başlayan ve çeşitli koşullar altında ortaya çıkan yaygın örüntü.',
    coreCriteria: [
      'Aşağıdakilerden en az beşinin bulunması:',
      '1. Gerçek ya da hayali bir terk edilmeden kaçınmak için çılgınca çabalar.',
      '2. Gözünde aşırı büyütme (idealizasyon) ve değersizleştirme (devalüasyon) uçları arasında giden dengesiz ilişkiler (bölme / splitting).',
      '3. Kimlik karmaşası: Benlik algısında belirgin ve ısrarlı tutarsızlık.',
      '4. Kendine zarar verme potansiyeli yüksek en az iki alanda dürtüsellik (para harcama, cinsel ilişki, madde, tıkınırcasına yeme, pervasız araç kullanma).',
      '5. Tekrarlayan intihar davranışları, girişimleri veya kendine kıyım (kendini kesme, yakma).',
      '6. Duygulanımda belirgin tepkiselliğe bağlı instabilite (saatler süren yoğun disfori, anksiyete, öfke).',
      '7. Kronik boşluk duygusu.',
      '8. Uygunsuz yoğun öfke veya öfkeyi kontrol edememe.',
      '9. Strese bağlı geçici paranoit düşünceler veya şiddetli dissosiyatif belirtiler.'
    ],
    exclusions: [
      'Madde kötüye kullanımı veya organik beyin patolojisi etkileri dışlanmalıdır.'
    ],
    differentialDiagnosis: [
      {
        condition: 'Bipolar II Bozukluk',
        distinguishingFeatures: 'Bipolar duygudurum dönemleri haftalar/aylar sürer ve içsel biyolojik ritimlerle ilişkilidir; Borderline duygulanım dalgalanmaları dakikalar/saatler içinde ilişkisel tetikleyicilerle (terk edilme) tetiklenir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Psikoterapi',
        recommendation: 'Diyalektik Davranış Terapisi (DDT / DBT) - Altın standart. Alternatif: Mentalizasyon Temelli Terapi (MBT), Şema Terapi.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Hedef belirtiye yönelik destekleyici tedavi (Duygudurum dengesizliği için Lamotrijin/Valproat; dürtüsellik ve paranoit düşünceler için düşük doz atipik antipsikotik). FDA onaylı primer ilaç yoktur.',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'İlaç tedavisi primer tedavi değildir, sadece psikoterapiye katılımı artırmak için hedef semptom bazında kısa/orta vadeli kullanılmalıdır.',
      'Terapötik sınırların net, şeffaf ve tutarlı çizilmesi tedavi ittifakı ve intihar krizlerinin yönetiminde kritiktir.'
    ]
  },
  {
    id: 'delirium',
    name: 'Deliryum (Akut Konfüzyonel Durum)',
    category: 'Nörobilişsel Bozukluklar',
    dsmCode: '293.0 (F05)',
    icd11Code: '6D70',
    summary: 'Dikkat ve farkındalıkta akut başlangıçlı, dalgalanma gösteren bozulma ve bilişsel değişikliklerle seyreden tıbbi acil durum.',
    durationRequired: 'Kısa süre içinde (genellikle saatler veya birkaç gün) gelişir ve gün içinde dalgalanma eğilimindedir.',
    coreCriteria: [
      'Dikkatte bozulma (dikkati odaklama, sürdürme ve kaydırma yetisinde azalma) ve farkındalıkta azalma.',
      'Bilişte ek bozulma (bellek kusuru, yönelim bozukluğu, dil bozukluğu, algı bozukluğu - görsel illüzyon ve halüsinasyonlar).',
      'Akut başlangıç ve gün boyunca (özellikle gece "sundowning") dalgalı seyir.',
      'Doğrudan tıbbi durum, madde zehirlenmesi/yoksunluğu veya ilaç toksisitesinin fizyolojik sonucu olduğuna dair kanıt.'
    ],
    exclusions: [
      'Önceden var olan koma durumunda açıklanamaz; hafif evre demans deliryum için risk faktörüdür ancak deliryumla karıştırılmamalıdır.'
    ],
    subtypesOrSpecifiers: [
      'Hiperaktif (Ajitasyon, halüsinasyon, çekilme)',
      'Hipoaktif (Uyuşukluk, apati, sedasyon - en sık atlanan formdur)',
      'Karma Tip (Gündüz hipoaktif, gece hiperaktif)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Demans (Majör Nörobilişsel Bozukluk)',
        distinguishingFeatures: 'Demans aylar/yıllar içinde sinsi ilerler, dikkat erken evrede korunur; deliryum akut saatler/günler içinde başlar ve dikkat ilk bozulan alandır.'
      },
      {
        condition: 'Akut Psikoz',
        distinguishingFeatures: 'Psikozda yönelim ve dikkat genellikle korunur, görselden ziyade işitsel halüsinasyonlar öndedir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Biyolojik / Diğer',
        recommendation: 'Etiyolojinin Tespiti ve Düzeltilmesi (Enfeksiyon, elektrolit, hipoksi, idrar retansiyonu, antikolinerjik ilaçların kesilmesi).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Biyolojik / Diğer',
        recommendation: 'Çevresel ve Destekleyici Müdahaleler (Re-oryantasyon, gün ışığı, saat/takvim, gözlük/işitme cihazının takılması, uyku hijyeni).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Yalnızca şiddetli ajitasyon ve kendine/çevreye zarar riski varsa semptomatik düşük doz Haloperidol (0.5-1 mg) veya Olanzapin/Ketiapin. Benzodiazepinler (alkol yoksunluğu hariç) deliryumu kötüleştirir!',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'Deliryum mortalitesi yüksek bir tıbbi acildir ("beynin akut yetmezliği").',
      'Hipoaktif deliryum yaşlılarda sıklıkla depresyonla karıştırılır ve daha kötü prognoza sahiptir.',
      'Antikolinerjik yük (ilaç skoru) deliryumun en sık gözden kaçan nedenlerindendir.'
    ]
  },
  {
    id: 'bipolar2',
    name: 'Bipolar II Bozukluk (Hipomani + Depresyon)',
    category: 'Duygudurum Bozuklukları',
    dsmCode: '296.89 (F31.81)',
    icd11Code: '6A61',
    summary: 'En az bir hipomanik atak ve en az bir majör depresif atak ile karakterizedir; hiçbir zaman tam manik atak yaşanmamıştır.',
    durationRequired: 'Hipomani için en az 4 ardışık gün; Depresif atak için en az 2 hafta.',
    coreCriteria: [
      'En az 1 Hipomanik Atak (En az 4 gün süren kabarmış, taşkın veya irritabl duygudurum + amaca yönelik etkinlik artışı; işlevsellikte açık değişim ancak hastaneye yatış gerektirmez, psikotik özellik içermez).',
      'En az 1 Majör Depresif Atak (En az 2 hafta süren çökkün duygudurum veya anhedoni + en az 4 ek vejetatif/bilişsel semptom).',
      'Hiçbir zaman tam bir Manik Atak (en az 7 gün veya yatış gerektiren) geçirilmemiş olması.',
      'Semptomlar veya ataklar arası dalgalanma klinik açıdan belirgin sıkıntıya veya işlevsellikte bozulmaya yol açar.'
    ],
    exclusions: [
      'Ataklar şizoaffektif bozukluk, şizofreni veya diğer psikotik bozukluklarla daha iyi açıklanamaz.',
      'Belirtiler bir maddenin (örn. antidepresan kesilmesi, kokain, steroid) doğrudan fizyolojik etkilerine bağlanamaz.'
    ],
    subtypesOrSpecifiers: [
      'Mevcut Atak: Hipomanik / Depresif',
      'Anksiyeteli Sıkıntı ile (With Anxious Distress)',
      'Karma Özellikli (With Mixed Features)',
      'Hızlı Döngülü (Rapid Cycling: Yılda ≥4 atak)',
      'Mevsimsel Örüntülü (Seasonal Pattern)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Bipolar I Bozukluk',
        distinguishingFeatures: 'Bipolar I\'de en az 1 manik dönem vardır (≥7 gün veya hastaneye yatış veya psikotik özellik). Bipolar II\'de psikoz veya yatış hipomanide ASLA bulunmaz (varsa Bipolar I olur).'
      },
      {
        condition: 'Majör Depresif Bozukluk',
        distinguishingFeatures: 'MDB\'de hipomanik öykü yoktur. Antidepresan yanıtında taşkınlık/irritabilite sorgulanmalıdır.'
      },
      {
        condition: 'Sınırda (Borderline) Kişilik Bozukluğu',
        distinguishingFeatures: 'BPD\'de duygudurum saatler içinde stresörle değişir; Bipolar II atakları günlerce sürer ve otonomik semptomlar eşlik eder.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Bipolar II Akut Depresyon: Ketiapin (1. sıra kanıt düzeyi), Lurasidon, Lamotrijin veya Lityum.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'İdame Tedavi: Ketiapin, Lityum, Lamotrijin (özellikle depresif nüksleri önlemede etkin). Antidepresan monoterapisinden kesinlikle kaçınılmalıdır.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Bipolar II hastaları hayatlarının %50\'den fazlasını depresif semptomlarla geçirir; hipomanik atakları çoğunlukla "iyi ve üretken hissettiğim günler" olarak yorumlayıp hekime bildirmezler.',
      'İntihar riski Bipolar I ile eşit veya depresif sürenin uzunluğu nedeniyle daha yüksektir.'
    ]
  },
  {
    id: 'schizoaffective',
    name: 'Şizoaffektif Bozukluk',
    category: 'Psikotik Bozukluklar',
    dsmCode: '295.70 (F25.0 / F25.1)',
    icd11Code: '6A21',
    summary: 'Şizofreninin A ölçütü semptomları ile birlikte majör duygudurum atağının (depresif veya manik) eşzamanlı bulunduğu ve duygudurum atağı yokken en az 2 hafta süren sanrı/halüsinasyon dönemi olan bozukluk.',
    durationRequired: 'Duygudurum belirtileri olmaksızın en az 2 hafta boyunca belirgin sanrı veya varsanıların sürmesi.',
    coreCriteria: [
      'Kesintisiz bir hastalık dönemi sırasında majör duygudurum atağı (depresif veya manik) ile birlikte Şizofreni A ölçütünün karşılanması.',
      'Hastalığın ömür boyu süresi içinde, belirgin bir duygudurum atağının (depresif veya manik) bulunmadığı EN AZ 2 HAFTA süresince sanrılar veya varsanıların bulunması (Kilit Ölçüt).',
      'Majör duygudurum atağı ölçütlerini karşılayan belirtilerin, hastalığın aktif ve rezidüel dönemlerinin toplam süresinin çoğunluğunda bulunması.',
      'Madde veya genel tıbbi duruma bağlı olmama.'
    ],
    exclusions: [
      'Madde kötüye kullanımı veya genel tıbbi duruma bağlı değildir.'
    ],
    subtypesOrSpecifiers: [
      'Bipolar Tip (Bir manik veya karma atak varsa)',
      'Depresif Tip (Yalnızca majör depresif ataklar varsa)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Psikotik Özellikli Bipolar I veya Majör Depresyon',
        distinguishingFeatures: 'Psikotik duygudurum bozukluklarında psikoz SADECE duygudurum atağı varken görülür. Şizoaffektifte ise duygudurum düzeldiğinde en az 2 hafta psikoz tek başına devam eder.'
      },
      {
        condition: 'Şizofreni',
        distinguishingFeatures: 'Şizofrenide duygudurum atakları toplam hastalık süresinin azınlığında kalır.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Bipolar Tip: Paliperidon (FDA onaylı tek monoterapi) veya diğer ikinci kuşak antipsikotikler + Duygudurum dengeleyici (Lityum / Valproat).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Depresif Tip: Atipik Antipsikotik + Antidepresan kombinasyonu.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      }
    ],
    clinicalPearls: [
      'Klinik tanıda en kritik soru: "Duygudurumun tamamen normale döndüğü dönemlerde kulağına sesler gelmeye ya da takip edildiğin hissi devam etti mi?"'
    ]
  },
  {
    id: 'delusional',
    name: 'Sanrılı (Hezeyanlı) Bozukluk',
    category: 'Psikotik Bozukluklar',
    dsmCode: '297.1 (F22)',
    icd11Code: '6A24',
    summary: 'En az 1 ay süren bir veya daha fazla sanrının varlığı ile karakterize; şizofreni A ölçütünün karşılanmadığı ve sanrının etkisi dışında işlevselliğin belirgin bozulmadığı tablo.',
    durationRequired: 'En az 1 ay boyunca süren bir veya daha fazla sanrı.',
    coreCriteria: [
      'En az 1 ay süren bir veya daha fazla sanrının varlığı.',
      'Şizofreni A ölçütü hiçbir zaman karşılanmamıştır (sanrı konusuna uygun koku/dokunma varsanıları dışında belirgin işitsel/görsel varsanı yoktur).',
      'Sanrının veya sonuçlarının doğrudan etkisi dışında işlevsellik belirgin olarak bozulmamıştır ve davranışlar açıkça tuhaf ya da garip değildir.',
      'Varsa duygudurum atakları sanrılı dönemlerin süresine göre kısa sürmüştür.'
    ],
    exclusions: [
      'Madde, ilaç veya tıbbi duruma bağlı değildir.'
    ],
    subtypesOrSpecifiers: [
      'Erotomanik Tip (Yüksek statülü birinin kendine aşık olduğuna inanma)',
      'Büyüklük (Grandiöz) Tipi (Özel yetenek, keşif veya statü)',
      'Kıskançlık (Othello Sendromu) Tipi (Eşin sadakatsizliğine sarsılmaz inanç)',
      'Kötülük Görme (Persekütuvar) Tipi (En sık görülen form)',
      'Somatik Tip (Bedenin koktuğu, parazit olduğu, çürüdüğü sanrısı - Ekbom)',
      'Karma veya Belirlenmemiş Tip'
    ],
    differentialDiagnosis: [
      {
        condition: 'Paranoid Şizofreni',
        distinguishingFeatures: 'Şizofrenide bizar sanrılar, belirgin işitsel halüsinasyonlar, dağınık konuşma ve negatif semptomlar eşlik eder; sanrılı bozuklukta sanrılar daha sistematiktir ve genel kişilik/işlevsellik korunur.'
      },
      {
        condition: 'Demans (Alzheimer vb.)',
        distinguishingFeatures: 'Kognitif testlerde bozulma (MMSE/MoCA) eşlik eder.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'İkinci Kuşak Antipsikotikler (Aripiprazol, Risperidon, Paliperidon). Tedaviye uyum en büyük zorluktur; terapötik ittifak sanrıyı doğrudan sorgulamadan kurulmalıdır.',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'Hekim asla sanrıyı onaylamamalı ancak hastayla doğrudan inatlaşarak sanrıyı çürütmeye de çalışmamalıdır ("Bu durumun sizi ne kadar yorduğunu ve kaygılandırdığını anlıyorum" yaklaşımı).'
    ]
  },
  {
    id: 'pdd',
    name: 'İnatçı Depresif Bozukluk (Distimi)',
    category: 'Duygudurum Bozuklukları',
    dsmCode: '300.4 (F34.1)',
    icd11Code: '6A72',
    summary: 'En az 2 yıl boyunca (çocuk/ergenlerde 1 yıl) günün büyük bölümünde çökkün duygudurum ve kronik depresif semptomlar.',
    durationRequired: 'Erişkinlerde en az 2 yıl boyunca kesintisiz devam etmesi (semptomsuz dönem 2 ayı geçemez).',
    coreCriteria: [
      'En az 2 yıl boyunca günün büyük bölümünde, günlerin çoğunda çökkün duygudurum.',
      'Depresyondayken şunlardan en az ikisinin varlığı: İştah azalması/artması, insomni/hipersomni, düşük enerji/yorgunluk, düşük benlik saygısı, zayıf konsantrasyon/karar verme güçlüğü, umutsuzluk hissi.',
      '2 yıllık süre boyunca belirtilerin olmadığı dönem hiçbir zaman 2 aydan uzun sürmemiştir.',
      'Klinik olarak belirgin sıkıntı veya mesleki/toplumsal işlevsellikte bozulma.'
    ],
    exclusions: [
      'Hiçbir zaman manik veya hipomanik atak yaşanmamıştır.',
      'Tıbbi durum veya madde kullanımına bağlanamaz.'
    ],
    subtypesOrSpecifiers: [
      'Erken Başlangıçlı (21 yaşından önce)',
      'Geç Başlangıçlı (21 yaş ve sonrası)',
      'Sürekli Majör Depresif Atak ile ("Çifte Depresyon / Double Depression")'
    ],
    differentialDiagnosis: [
      {
        condition: 'Majör Depresif Bozukluk',
        distinguishingFeatures: 'MDB epizodiktir; distimi ise kişinin temel kişilik yapısı haline gelmiş gibi algılanan kronik, düşük şiddetli seyir gösterir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'SSRI veya SNRI antidepresanlar. Yanıt oranı epizodik MDB\'ye göre daha yavaş gelişebilir; en az 8-12 hafta beklenmelidir.',
        levelOfEvidence: 'Kanıt Düzeyi I'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Kişilerarası İlişkiler Terapisi (KİT) ve CBASP (Kognitif Davranışçı Kişilerarası Sistem Terapisi - kronik depresyon için özel geliştirilmiştir).',
        levelOfEvidence: 'Kanıt Düzeyi I'
      }
    ],
    clinicalPearls: [
      'Hastalar sıklıkla "Ben kendimi bildim bileli böyleyim, bu benim karakterim" derler; doğru farmakoterapi ve psikoterapi ile remisyon mümkündür.'
    ]
  },
  {
    id: 'social_anxiety',
    name: 'Sosyal Anksiyete Bozukluğu (Sosyal Fobi)',
    category: 'Anksiyete & Travma',
    dsmCode: '300.23 (F40.10)',
    icd11Code: '6B04',
    summary: 'Başkaları tarafından incelenebilecek olduğu bir ya da birden fazla toplumsal durumda belirgin korku ya da kaygı duyma.',
    durationRequired: 'Korku, kaygı veya kaçınma en az 6 aydır devam ediyor olmalıdır.',
    coreCriteria: [
      'Başkaları tarafından değerlendirilebilecek olduğu durumlara ilişkin belirgin korku veya kaygı (sosyal etkileşimler, gözlenme, başkaları önünde bir eylem gerçekleştirme).',
      'Birey, olumsuz olarak değerlendirilecek (küçük düşecek, mahcup olacak, reddedilecek) şekilde davranmaktan veya anksiyete belirtileri (kızarma, titreme, terleme) göstermekten korkar.',
      'Toplumsal durumlar neredeyse her zaman korku veya kaygı doğurur.',
      'Toplumsal durumlardan kaçınılır ya da yoğun korkuyla katlanılır.',
      'Korku veya kaygı, toplumsal durumun gerçek tehlikesiyle ve sosyokültürel bağlamla orantısızdır.'
    ],
    exclusions: [
      'Madde etkisi veya tıbbi duruma bağlanamaz; agorafobi, panik bozukluk veya beden algısı bozukluğu ile daha iyi açıklanamaz.'
    ],
    subtypesOrSpecifiers: [
      'Yalnızca Performans ile Kısıtlı (Topluluk önünde konuşma veya sunum yapma ile sınırlı)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Çekingen (Kaçıngan) Kişilik Bozukluğu',
        distinguishingFeatures: 'Çekingen KB daha yaygın, derin ve erken başlangıçlıdır; sıklıkla sosyal fobi ile komorbid seyreder ve spektrumun ağır ucu kabul edilir.'
      },
      {
        condition: 'Agorafobi',
        distinguishingFeatures: 'Agorafobide temel korku panik belirtileri geliştiğinde kaçamamak veya yardım bulamamaktır; sosyal fobide ise temel korku başkalarınca olumsuz değerlendirilmek/küçük düşmektir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Yaygın tip: SSRI (Sertralin, Paroksetin, Essitalopram) veya SNRI (Venlafaksin). Yalnızca performans tipi: Durumsal Beta-bloker (Propranolol 10-40 mg, olaydan 1 saat önce).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Sosyal Anksiyete için Bilişsel Davranışçı Terapi (Maruz bırakma / Exposure, video geribildirim, dikkat odaklama eğitimi).',
        levelOfEvidence: 'Kanıt Düzeyi I (Altın Standart)'
      }
    ],
    clinicalPearls: [
      'Performans anksiyetesinde düşük doz Propranolol periferik otonomik semptomları (titreme, taşikardi, terleme) bloke ederek performansı mükemmel korur; astım/bradikardi kontrendikasyonuna dikkat edilmelidir.'
    ]
  },
  {
    id: 'agoraphobia',
    name: 'Agorafobi',
    category: 'Anksiyete & Travma',
    dsmCode: '300.22 (F40.00)',
    icd11Code: '6B02',
    summary: 'Panik benzeri belirtiler veya çaresizlik durumunda kaçmanın zor olabileceği veya yardım sağlanamayabileceği 5 durumdan en az 2\'sinde belirgin korku veya kaygı duyma.',
    durationRequired: 'En az 6 aydır sürmesi.',
    coreCriteria: [
      'Şu 5 durumdan en az 2\'sinde belirgin korku veya kaygı:\n 1) Toplu taşıma araçlarını kullanma,\n 2) Açık alanlarda bulunma (otoparklar, köprüler),\n 3) Kapalı alanlarda bulunma (mağazalar, sinema),\n 4) Sırada bekleme veya kalabalıkta bulunma,\n 5) Tek başına evin dışında olma.',
      'Kaçmanın zor olabileceği veya panik benzeri belirtiler çıktığında yardım alamayacağı düşüncesiyle bu durumlardan kaçınma.',
      'Bu durumlar neredeyse her zaman korku/kaygı tetikler ve durumlardan kaçınılır ya da bir eşlikçiye ihtiyaç duyulur.'
    ],
    exclusions: [
      'Özgül fobi, sosyal fobi, OKB veya beden dismorfik bozukluğuna bağlanamaz.'
    ],
    subtypesOrSpecifiers: [
      'Panik Bozukluk Eşlik Eden / Etmeyen'
    ],
    differentialDiagnosis: [
      {
        condition: 'Panik Bozukluk',
        distinguishingFeatures: 'DSM-5\'te agorafobi bağımsız bir tanı olmuştur; panik atak olmaksızın da agorafobi gelişebilir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Psikoterapi',
        recommendation: 'İn vivo (Canlı) Aşamalı Maruz Bırakma Terapisi (Exposure).',
        levelOfEvidence: 'Kanıt Düzeyi I (En Etkili)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'SSRI (Sertralin, Essitalopram) veya SNRI.',
        levelOfEvidence: 'Kanıt Düzeyi I'
      }
    ],
    clinicalPearls: [
      'Agorafobide kaçınma davranışı ikincil pekiştireçlerle hızla kemikleşir; hastanın "güvenlik aracı" (su şişesi, yakını) kullanımı kademeli olarak bırakılmalıdır.'
    ]
  },
  {
    id: 'antisocial',
    name: 'Antisosyal Kişilik Bozukluğu (ASPD)',
    category: 'Kişilik Bozuklukları',
    dsmCode: '301.7 (F60.2)',
    icd11Code: '6D10 / 6D11',
    summary: '15 yaşından beri süregelen, başkalarının haklarını hiçe sayma ve çiğneme ile karakterize yaygın örüntü; en az 18 yaşında olma şartı.',
    durationRequired: '15 yaşından beri süregelmesi ve tanı konabilmesi için en az 18 yaşında olunması (15 yaşından önce davranım bozukluğu kanıtı şarttır).',
    coreCriteria: [
      'Şu 7 kriterden en az üçü:\n 1) Yasalara aykırı davranışlar sergileme ve tutuklanmaya yol açan eylemleri tekrarlama,\n 2) Kişisel çıkar veya zevk için sürekli yalan söyleme, takma isimler kullanma veya dolandırıcılık,\n 3) Dürtüsellik veya geleceği tasarlayamama,\n 4) Yineleyen kavgalar ve saldırganlıkla belirlenen hırçınlık,\n 5) Kendi veya başkalarının güvenliğini pervasızca hiçe sayma,\n 6) Bir işi sürekli götürememe veya mali yükümlülükleri yerine getirmeme (sorumsuzluk),\n 7) Başkasına zarar verdiğinde kayıtsız kalma veya rasyonelleştirme (vicdan azabı / pişmanlık duymama).',
      'Birey en az 18 yaşındadır.',
      '15 yaşından önce başlayan Davranım Bozukluğu (Conduct Disorder) kanıtı vardır.'
    ],
    exclusions: [
      'Yalnızca şizofreni veya bipolar mani gidişi sırasında ortaya çıkmaz.'
    ],
    subtypesOrSpecifiers: [
      'Psikopati Özellikli (Yüzeysel cazibe, empati yoksunluğu, pişmanlık eksikliği)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Madde Kullanım Bozuklukları',
        distinguishingFeatures: 'Madde bağımlılığında suç eylemleri çoğunlukla madde teminine yöneliktir; ASPD\'de remisyon döneminde de hak ihlalleri devam eder.'
      },
      {
        condition: 'Narsisistik Kişilik Bozukluğu',
        distinguishingFeatures: 'NPD\'de fiziksel şiddet ve yasal suç daha nadirdir; statü ve hayranlık arayışı öndedir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Psikoterapi',
        recommendation: 'Yapılandırılmış BDT veya Şema Terapi (Grup terapisinde kurallar net olmalı, suistimal ve manipülasyon sınırlandırılmalıdır).',
        levelOfEvidence: 'Kanıt Düzeyi II'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'ASPD için onaylı ilaç yoktur; eşlik eden agresyon ve dürtüsellik için Duygudurum Dengeleyiciler (Valproat, Lityum) veya Düşük Doz Atipik Antipsikotikler.',
        levelOfEvidence: 'Kanıt Düzeyi II / Semptomatik'
      }
    ],
    clinicalPearls: [
      '15 yaşından önce Davranım Bozukluğu öyküsü yoksa teknik olarak ASPD tanısı konamaz.',
      'Yeşil reçeteli ilaçlar (benzodiazepinler, uyarıcılar) suistimal ve satılma riski nedeniyle son derece katı sınırlanmalıdır.'
    ]
  },
  {
    id: 'anorexia',
    name: 'Anoreksiya Nervoza (AN)',
    category: 'Yeme Bozuklukları',
    dsmCode: '307.1 (F50.01 / F50.02)',
    icd11Code: '6B80',
    summary: 'Gereksinimlere göre enerji alımını kısıtlama, belirgin düşük vücut ağırlığı, kilo almaktan aşırı korkma ve beden imgesinde ciddi bozukluk.',
    durationRequired: 'En az 3 ay süresince kısıtlayıcı veya tıkınırcasına yeme/çıkarma davranışları.',
    coreCriteria: [
      'Yaş, cinsiyet, gelişimsel basamak ve fiziksel sağlık bağlamında belirgin düşük vücut ağırlığına yol açacak biçimde enerji alımının kısıtlanması (BKİ < 18.5 kg/m²).',
      'Belirgin düşük vücut ağırlığına rağmen kilo almaktan veya şişmanlamaktan aşırı korkma ya da kilo almayı engelleyici sürekli davranışlar.',
      'Bireyin vücut ağırlığını veya biçimini algılama şeklinde bozukluk, ağırlığın öz-değerlendirme üzerinde orantısız etkisi veya düşük kilonun ciddiyetini inkar etme.'
    ],
    exclusions: [
      'Kanser, hipertiroidi, malabsorpsiyon gibi kilo kaybına yol açan genel tıbbi durumların dışlanması.'
    ],
    subtypesOrSpecifiers: [
      'Kısıtlayıcı Tip (Son 3 ayda diyet, oruç ve aşırı egzersiz; tıkınma/çıkarma atağı yok)',
      'Tıkınırcasına Yiyip / Çıkaran Tip (Kusma, laksatif, diüretik suistimali)',
      'Ağırlık Şiddeti: Hafif (BKİ ≥17), Orta (16-16.99), Ağır (15-15.99), Aşırı Ağır (BKİ < 15)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Bulimiya Nervoza',
        distinguishingFeatures: 'Bulimiya hastalarının vücut ağırlığı NORMAL veya hafif fazladır (BKİ ≥ 18.5). Anoreksiya için düşük kilo şarttır.'
      },
      {
        condition: 'Majör Depresif Bozukluk',
        distinguishingFeatures: 'Depresyonda iştahsızlık vardır ancak kilo alma korkusu veya beden algı bozukluğu yoktur.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Biyolojik / Diğer',
        recommendation: 'Tıbbi Stabilizasyon ve Beslenme Rehabilitasyonu (Yeniden Besleme / Refeeding Sendromu - hipofosfatemi riskine dikkat!). Hedef haftalık 0.5-1 kg artış.',
        levelOfEvidence: 'Kanıt Düzeyi I (Hayati)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Ergenlerde Aile Temelli Tedavi (FBT / Maudsley Modeli); Erişkinlerde BDT-E (Yeme Bozuklukları için Geliştirilmiş BDT).',
        levelOfEvidence: 'Kanıt Düzeyi I (Altın Standart)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Dirençli olgularda ve kilo alımına eşlik eden yoğun obsesif kaygıda Olanzapin (2.5-10 mg) kanıtlanmış yarar sağlayabilir. Antidepresanlar düşük kiloda etkisizdir.',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'Anoreksiya psikiyatride mortalitesi en yüksek hastalıktır (kardiyak aritmiler, elektrolit dengesizliği, intihar).',
      'Refeeding Sendromu: Kronik açlıkta karbonhidrat aniden verilince insülin fırlar, fosfat/potasyum/magnezyum hücre içine kaçar ve fatal kardiyak arrest gelişir. Serum fosfatı yakından izlenmelidir!'
    ]
  },
  {
    id: 'bulimia',
    name: 'Bulimiya Nervoza (BN)',
    category: 'Yeme Bozuklukları',
    dsmCode: '307.51 (F50.2)',
    icd11Code: '6B81',
    summary: 'Yineleyen tıkınırcasına yeme nöbetleri ve kilo almayı önlemek için uygunsuz telafi edici davranışlar (kusma, laksatif, aşırı egzersiz).',
    durationRequired: 'Tıkınırcasına yeme ve telafi edici davranışların en az 3 ay boyunca haftada en az bir kez olması.',
    coreCriteria: [
      'Yineleyen tıkınırcasına yeme nöbetleri (Benzer sürede çoğu insanın yiyebileceğinden belirgin fazla miktarda yeme ve yeme kontrolünü kaybetme hissi).',
      'Kilo almayı önlemek için uygunsuz ödünleyici davranışlar (kendi kendini kusturma, laksatif, lavman, diüretik suistimali, aşırı egzersiz).',
      'Öz-değerlendirmenin vücut biçimi ve ağırlığından aşırı biçimde etkilenmesi.',
      'Bozukluk yalnızca anoreksiya nervoza dönemleri sırasında ortaya çıkmaz (BKİ normal sınırlardadır).'
    ],
    exclusions: [
      'Anoreksiya nervoza dışlanmalıdır (düşük kilo varsa tanı Anoreksiya tıkınan/çıkaran tip olur).'
    ],
    subtypesOrSpecifiers: [
      'Hafif (Haftada 1-3 telafi atağı)',
      'Orta (Haftada 4-7 atak)',
      'Ağır (Haftada 8-13 atak)',
      'Aşırı (Haftada ≥14 atak)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Tıkınırcasına Yeme Bozukluğu (BED)',
        distinguishingFeatures: 'BED\'de telafi edici çıkarma (kusma/laksatif) davranışları YOKTUR.'
      },
      {
        condition: 'Anoreksiya Nervoza',
        distinguishingFeatures: 'Bulimiya hastalarının vücut ağırlığı normal veya üzerindedir.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Fluoksetin Yüksek Doz (60 mg/gün) - FDA onaylı tek ilaçtır. Tıkınma ve çıkarma sıklığını %60-70 azaltır.',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Bilişsel Davranışçı Terapi (BDT-E) veya Kişilerarası İlişkiler Terapisi (KİT).',
        levelOfEvidence: 'Kanıt Düzeyi I (Altın Standart)'
      }
    ],
    clinicalPearls: [
      'Russell Belirtisi: Parmak sırtında dişlere çarpma sonucu oluşan kallus ve nedbe dokusu (gizli kusmanın fiziksel kanıtı).',
      'Kusmaya bağlı hipokalemik hipokloremik metabolik alkaloz, diş minesi erozyonu ve parotis bezi hipertrofisi (tükürük bezi şişmesi) tipiktir.',
      'Bupropion bulimiya ve anoreksiyada epileptik nöbet riskini artırdığı için KONTRENDİKEDİR!'
    ]
  },
  {
    id: 'somatic',
    name: 'Somatik Belirti Bozukluğu (SSD)',
    category: 'Somatoform & İlişkili',
    dsmCode: '300.82 (F45.1)',
    icd11Code: '6C20',
    summary: 'Sıkıntı veren veya günlük yaşamı aksatan bir veya daha fazla bedensel belirti ile bu belirtilere yönelik aşırı ve orantısız düşünce, kaygı ve davranışlar.',
    durationRequired: 'Herhangi bir bedensel belirti sürekli mevcut olmasa da belirtili olma durumu tipik olarak 6 aydan uzun sürer.',
    coreCriteria: [
      'Sıkıntı veren veya günlük yaşamı belirgin derecede aksatan bir veya daha fazla bedensel belirti.',
      'Bedensel belirtiler veya bunlarla ilişkili sağlık kaygılarıyla ilgili aşırı düşünce, duygu veya davranışlar:\n 1) Belirtilerin ciddiyetine ilişkin orantısız ve kalıcı düşünceler,\n 2) Sağlık veya belirtiler hakkında sürekli yüksek düzeyde anksiyete,\n 3) Bu belirtilere veya sağlık kaygılarına aşırı zaman ve enerji harcanması.',
      'Bedensel belirti tıbbi olarak açıklansın veya açıklanmasın bu tanı konabilir.'
    ],
    exclusions: [
      'Hastalık Kaygısı Bozukluğu (belirti yok veya minimaldir; sadece hastalık kapma korkusu vardır).'
    ],
    subtypesOrSpecifiers: [
      'Baskın Ağrı ile (Ağrı Bozukluğu)',
      'Kalıcı (Persistan - 6 aydan uzun şiddetli seyir)',
      'Hafif / Orta / Ağır'
    ],
    differentialDiagnosis: [
      {
        condition: 'Hastalık Kaygısı Bozukluğu (Hipokondriyazis)',
        distinguishingFeatures: 'Hastalık kaygısında ya hiç somatik belirti yoktur ya da çok hafiftir (örn. nabız sayma); Somatik Belirti Bozukluğunda ise hastayı tüketen gerçek bir bedensel belirti (ağrı, nefes darlığı, uyuşma) vardır.'
      },
      {
        condition: 'Konversiyon Bozukluğu (Fonksiyonel Nörolojik)',
        distinguishingFeatures: 'Nörolojik anatomik yollarla uyumsuz istemli motor veya duyusal kayıp (felç, yalancı nöbet) vardır.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Biyolojik / Diğer',
        recommendation: 'Tek Bir Birincil Hekimle Düzenli Randevular (Semptoma göre değil takvime bağlı örn. ayda 1 kontrol; gereksiz invaziv tetkik ve ameliyatların önlenmesi).',
        levelOfEvidence: 'Kanıt Düzeyi I (Temel Klinik İlke)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Somatik Belirtiler için BDT (Belirtilere odaklanmayı azaltma, aktivite çizelgeleme, bedensel duyumların felaketleştirilmesini yeniden yapılandırma).',
        levelOfEvidence: 'Kanıt Düzeyi I'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Eşlik eden anksiyete/depresyon veya santral ağrı sensitizasyonu için SNRI (Duloksetin, Milnasipran) veya Pregabalin.',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'Asla "Sizin hiçbir şeyiniz yok, hepsi psikolojik" denmemelidir; hastanın çektiği ağrı ve ıstırap tamamen gerçektir. Terapötik çerçeve "semptomları yok etmekten ziyade semptomla birlikte işlevselliği geri kazanmak" olmalıdır.'
    ]
  },
  {
    id: 'alcohol_use',
    name: 'Alkol Kullanım Bozukluğu (AUD)',
    category: 'Bağımlılık & Toksikoloji',
    dsmCode: '303.90 / 305.00 (F10.xx)',
    icd11Code: '6C40',
    summary: 'Klinik olarak belirgin bozulma veya sıkıntıya yol açan, son 12 aylık dönemde en az 2 kriterin karşılandığı problemli alkol kullanım örüntüsü.',
    durationRequired: 'Son 12 ay içinde en az 2 kriterin karşılanması.',
    coreCriteria: [
      '12 aylık dönemde şu 11 kriterden en az ikisi:\n 1) Tasarlandığından daha büyük miktarlarda veya uzun sürede alkol alma,\n 2) Bırakmak veya denetlemek için sürekli istek veya boşa çıkan çabalar,\n 3) Alkol elde etmek, kullanmak veya etkisinden kurtulmak için çok zaman harcama,\n 4) Şiddetli alkol aşermesi (craving),\n 5) İşte, okulda veya evdeki temel yükümlülükleri yerine getirememe,\n 6) Alkolün yol açtığı toplumsal/kişilerarası sorunlara rağmen kullanıma devam etme,\n 7) Önemli etkinlikleri alkol kullanımı yüzünden bırakma veya azaltma,\n 8) Fiziksel olarak tehlikeli durumlarda yineleyici biçimde alkol alma (örn. araç kullanma),\n 9) Fiziksel veya psikolojik soruna yol açtığını bilmesine rağmen sürdürme,\n 10) Tolerans gelişimi (aynı etki için belirgin artmış miktara ihtiyaç),\n 11) Yoksunluk (Withdrawal) belirtileri veya yoksunluğu gidermek için alkol/benzo alma.'
    ],
    exclusions: [
      'Sosyal veya kültürel kabul gören hafif kullanım kriterleri karşılamaz.'
    ],
    subtypesOrSpecifiers: [
      'Hafif (2-3 belirti)',
      'Orta (4-5 belirti)',
      'Ağır (6 veya daha fazla belirti)',
      'Erken Remisyonda (3-12 ay belirtisiz) / Sürekli Remisyonda (≥12 ay)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Bipolar Bozukluk ve Öz-Tedavi (Self-Medication)',
        distinguishingFeatures: 'Mani veya depresyon dönemlerinde aşırı alkol kullanımı sekonder olabilir; primer duygudurum atağının ayrımı esastır.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Farmakoterapi',
        recommendation: 'Nüks Önleme / Aşerme Azaltma: Naltrekson (50 mg/gün - opioid almayanlarda), Akamprosat (karaciğer yetmezliğinde güvenli), Disülfiram (kararlı ve motivasyonu yüksek hastalarda caydırıcı).',
        levelOfEvidence: 'Kanıt Düzeyi I (Güçlü)'
      },
      {
        category: 'Biyolojik / Diğer',
        recommendation: 'Akut Detoksifikasyon & Yoksunluk: Diazepam veya Klordiazepoksit (CIWA-Ar skoruna göre semptom tetiklemeli protokol). Wernicke ensefalopatisi profilaksisi için alkol/glukozdan ÖNCE yüksek doz IV Tiamin (B1 vitamini)!',
        levelOfEvidence: 'Kanıt Düzeyi I (Hayati)'
      },
      {
        category: 'Psikoterapi',
        recommendation: 'Motivasyonel Görüşme (Motivational Interviewing), BDT ve 12 Basamaklı Adsız Alkolikler (AA) desteği.',
        levelOfEvidence: 'Kanıt Düzeyi I'
      }
    ],
    clinicalPearls: [
      'Wernicke Triadı: Okülomotor bozukluk (oftalmopleji/nistagmus) + Ataksi + Konfüzyon. Asla glukozlu mayi vermeden önce Tiamin verilmesi unutulmamalıdır; glukoz mevcut tiamini tüketerek akut ölümcül Wernicke tablosunu tetikler!'
    ]
  },
  {
    id: 'insomnia',
    name: 'İnsomni (Uykusuzluk) Bozukluğu',
    category: 'Uyku-Uyanıklık Bozuklukları',
    dsmCode: '307.42 (F51.01)',
    icd11Code: '7A00',
    summary: 'Uyku için yeterli fırsat olmasına karşın uykuya dalma, uykuyu sürdürme veya sabah erken uyanmada güçlük ve gün içi işlevsellik bozulması.',
    durationRequired: 'Haftada en az 3 gece ortaya çıkması ve en az 3 aydır sürmesi.',
    coreCriteria: [
      'Aşağıdaki belirtilerden biri veya daha fazlası ile karakterize uyku miktarı veya kalitesinden belirgin yakınma:\n 1) Uykuya dalmada güçlük (çocuklarda yatıştırıcı olmadan uyuyamama),\n 2) Uykuyu sürdürmede güçlük (sık uyanma veya uyandıktan sonra tekrar dalamama),\n 3) Sabah erkenden uyanma ve tekrar uyuyamama (terminal insomni).',
      'Uyku bozukluğu gün içinde klinik açıdan belirgin sıkıntıya veya yorgunluk, dikkat azalması, irritabilite gibi işlevsellik bozulmasına yol açar.',
      'Uyku güçlüğü haftada en az 3 gece ortaya çıkar ve en az 3 aydır mevcuttur.',
      'Uyku için yeterli fırsat ve koşulların varlığına rağmen ortaya çıkar.'
    ],
    exclusions: [
      'Narkolepsi, obstrüktif uyku apnesi veya sirkadiyen ritim bozukluğuna bağlanamaz; madde etkisine bağlı değildir.'
    ],
    subtypesOrSpecifiers: [
      'Epizodik (1-3 ay)',
      'Kalıcı (≥3 ay)',
      'Tekrarlayıcı (Yılda ≥2 epizod)'
    ],
    differentialDiagnosis: [
      {
        condition: 'Obstrüktif Uyku Apne Sendromu (OUAS)',
        distinguishingFeatures: 'Horlama, tanıklı apne, sabah baş ağrısı ve aşırı gündüz uykululuğu öndedir. Polisomnografi gereklidir.'
      },
      {
        condition: 'Huzursuz Bacaklar Sendromu (RLS)',
        distinguishingFeatures: 'İstirahatle gelen bacaklarda karşı konulmaz hareket ettirme isteği ve hareketle rahatlama.'
      }
    ],
    firstLineTreatments: [
      {
        category: 'Psikoterapi',
        recommendation: 'İnsomni için Bilişsel Davranışçı Terapi (CBT-I): Uyku kısıtlaması, uyaran kontrolü, uyku hijyeni ve bilişsel yeniden yapılandırma.',
        levelOfEvidence: 'Kanıt Düzeyi I (Altın Standart - İlaçlardan Üstün)'
      },
      {
        category: 'Farmakoterapi',
        recommendation: 'Yalnızca kısa süreli akut krizde: Melatonin reseptör agonisti (Ramelteon), Düşük Doz Doksepin (3-6 mg), Z-ilaçları (Zopiklon, Zolpidem - max 2-4 hafta) veya Trazodon. Uzun süreli benzodiazepin kullanımından kaçınılmalıdır.',
        levelOfEvidence: 'Kanıt Düzeyi II'
      }
    ],
    clinicalPearls: [
      'Uyaran Kontrolünün Altın Kuralı: "Yatakta 20 dakika içinde uyuyamazsanız kalkın, loş ışıkta başka odaya geçin ve uykunuz gelene kadar yatağa dönmeyin. Yatak sadece uyku ve cinsellik içindir."'
    ]
  }
];
