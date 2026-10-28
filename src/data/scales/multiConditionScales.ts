import { ClinicalScale } from '../../types';

export const MULTI_CONDITION_SCALES: ClinicalScale[] = [
  {
    id: 'bfcrs',
    code: 'BFCRS',
    name: 'Bush-Francis Katatoni Derecelendirme Ölçeği (BFCRS)',
    category: 'Çoklu Durum Ölçekleri',
    targetCondition: 'Katatoni Taraması ve Şiddet Değerlendirmesi',
    description: 'Katatonik sendromun taranması (ilk 14 madde tarama, toplam 23 madde tam şiddet ölçeği). Lorazepam testi ve EKT yanıt takibinde altın standarttır.',
    timeframe: 'Muayene anı ve son 24 saat',
    questions: [
      {
        id: 1,
        text: 'Eksitasyon / Ajitasyon: Amaca yönelik olmayan aşırı motor aktivite, çevreye yanıt vermeyen hiperaktivite',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Hafif (zaman zaman huzursuzluk/hiperaktivite)', value: 1 },
          { label: '2: Orta (sürekli amaca yönelik olmayan motor aktivite, sakinleştirilebilir)', value: 2 },
          { label: '3: Ağır (şiddetli, zapt edilemez eksitasyon, tükenme riski)', value: 3 }
        ]
      },
      {
        id: 2,
        text: 'Hareketsizlik / Stupor: Motor yanıtsızlık, uyarılara belirgin tepkisizlik, donakalma',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Azalmış hareket ve spontan aktivite', value: 1 },
          { label: '2: Güçlü uyarılara minimal yanıt, neredeyse hareketsiz', value: 2 },
          { label: '3: Tam yanıtsız stupor (ağrılı uyarana dahi motor tepki yok)', value: 3 }
        ]
      },
      {
        id: 3,
        text: 'Mutizm: Sözel yanıtsızlık veya aşırı azalmış konuşma',
        options: [
          { label: '0: Yok (normal sözel iletişim)', value: 0 },
          { label: '1: Çok az, fısıltıyla veya gecikmeli tek heceli yanıt', value: 1 },
          { label: '2: Nadiren anlaşılamayan mırıltı veya fısıltı', value: 2 },
          { label: '3: Tam konuşmama / mutizm', value: 3 }
        ]
      },
      {
        id: 4,
        text: 'Bakakalma (Staring): Sabit, donuk bakış, göz kırpmada belirgin azalma',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Azalmış göz teması, donuk bakış (<1 dakika)', value: 1 },
          { label: '2: Sabit donuk bakış (1-5 dakika)', value: 2 },
          { label: '3: Kesintisiz sabit bakakalma (>5 dakika)', value: 3 }
        ]
      },
      {
        id: 5,
        text: 'Postür Alma (Katalepsi): Yerçekimine karşı verilen veya spontan garip postürü uzun süre koruma',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Spontan garip postür (<1 dakika)', value: 1 },
          { label: '2: Katalepsi (1-5 dakika sürdürme)', value: 2 },
          { label: '3: Ağır katalepsi / tuhaf postür (>5 dakika koruma)', value: 3 }
        ]
      },
      {
        id: 6,
        text: 'Balmumu Esnekliği (Waxy Flexibility): Ekstremitelerin hafif dirençle bükülebilmesi ve verilen pozisyonda kalması',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Hafif plastik direnç hissi', value: 1 },
          { label: '2: Belirgin balmumu esnekliği (kol/bacak verilen açıda durur)', value: 2 },
          { label: '3: Tam balmumu esnekliği / belirgin sert plastik kıvam', value: 3 }
        ]
      },
      {
        id: 7,
        text: 'Negativizm: Talimatlara direnç gösterme veya tam tersi hareketi yapma',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Hafif direnç veya gecikmeli uyum', value: 1 },
          { label: '2: Muayeneye açık fiziksel/sözel karşı koyma', value: 2 },
          { label: '3: Şiddetli negativizm (gözlerini sıkar, kollarını kilitler, talimatın zıddını yapar)', value: 3 }
        ]
      },
      {
        id: 8,
        text: 'Yankı Belirtileri (Ekolali / Ekopraksi): Muayene edenin sözlerini veya hareketlerini otomatik tekrar etme',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Ara sıra kelime veya mimik taklidi', value: 1 },
          { label: '2: Belirgin ve sık ekolali/ekopraksi', value: 2 },
          { label: '3: Sürekli, otomatik ve durdurulamaz yankılama', value: 3 }
        ]
      },
      {
        id: 9,
        text: 'Otonomik İnstabilite / Ateş: Ateş, taşikardi, labil tansiyon, terleme (Malign Katatoni riski)',
        options: [
          { label: '0: Normal vital bulgular', value: 0 },
          { label: '1: Hafif nabız veya tansiyon değişkenliği', value: 1 },
          { label: '2: Taşikardi (>100) veya persistan hipertansiyon', value: 2 },
          { label: '3: Belirgin otonomik fırtına (Ateş >38°C, aşırı labil kan basıncı, taşikardi)', value: 3 }
        ]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 2, severity: 'Katatoni Şüphesi Düşük', actionAdvice: 'Rutin klinik gözlem. Katatoni tanısı için tarama maddelerinden en az 2 pozitif bulgu gereklidir.' },
      { minScore: 3, maxScore: 7, severity: 'Pozitif Katatoni Taraması (Hafif-Orta)', actionAdvice: 'Katatoni olası. 1-2 mg IV/IM Lorazepam Challenge testi planlanmalı. Antipsikotikler derhal kesilmelidir (NMS tetikleme riski).' },
      { minScore: 8, maxScore: 16, severity: 'Belirgin Katatonik Sendrom', actionAdvice: 'Yüksek doz Lorazepam protokolü (6-16 mg/gün titre edilerek). Hidrasyon, DVT proflaksisi ve aspirasyon önlemleri alınmalıdır.' },
      { minScore: 17, maxScore: 27, severity: 'Şiddetli / Malign Katatoni Riski', actionAdvice: 'Acil EKT konsültasyonu (hayat kurtarıcı). Yoğun bakım izlemi, CK, böbrek fonksiyonları ve otonomik bulgular saatlik takip edilmelidir.' }
    ],
    reference: 'Bush G, Fink M, Petrides G, et al. Catatonia. I. Rating scale and standardized examination. Acta Psychiatr Scand. 1996.'
  },
  {
    id: 'cgi',
    code: 'CGI',
    name: 'Klinik Global İzlenim Ölçeği (CGI)',
    category: 'Çoklu Durum Ölçekleri',
    targetCondition: 'Tüm Psikiyatrik Bozukluklarda Global Hastalık Şiddeti ve İyileşme Düzeyi',
    description: 'Klinisyenin tecrübesine dayanarak hastanın mevcut genel durumunu (CGI-S) ve tedaviye yanıt seyrini (CGI-I) 1-7 puan arasında objektifleştiren uluslararası referans ölçek.',
    timeframe: 'Mevcut muayene ve tedavi başlangıcına kıyasla',
    questions: [
      {
        id: 1,
        text: 'CGI-S (Hastalık Şiddeti): Klinisyenin klinik deneyimine dayanarak, hastanın mevcut zihinsel rahatsızlığı şu anda ne kadar ağırdır?',
        options: [
          { label: '1: Normal, hiç hasta değil', value: 1 },
          { label: '2: Sınırda zihinsel rahatsızlık', value: 2 },
          { label: '3: Hafif düzeyde hasta', value: 3 },
          { label: '4: Orta derecede hasta', value: 4 },
          { label: '5: Belirgin derecede hasta', value: 5 },
          { label: '6: Ağır derecede hasta', value: 6 },
          { label: '7: En ağır derecede hasta vakalar arasında', value: 7 }
        ]
      },
      {
        id: 2,
        text: 'CGI-I (Global İyileşme): Tedavi başlangıcına göre hastanın genel durumundaki net değişim nedir?',
        options: [
          { label: '1: Çok fazla düzeldi (büyük oranda semptomsuz ve işlevsel)', value: 1 },
          { label: '2: Belirgin düzeldi (belirgin klinik fayda)', value: 2 },
          { label: '3: Minimal düzeldi (hafif klinik iyileşme, yetersiz)', value: 3 },
          { label: '4: Değişiklik yok (durum stabil)', value: 4 },
          { label: '5: Minimal kötüleşti', value: 5 },
          { label: '6: Belirgin kötüleşti', value: 6 },
          { label: '7: Çok fazla kötüleşti (klinik kriz)', value: 7 }
        ]
      }
    ],
    interpretation: [
      { minScore: 2, maxScore: 4, severity: 'Normal / Sınırda Hastalık - Yüksek İyileşme', actionAdvice: 'Tedaviye tam klinik yanıt veya remisyon. Mevcut idame rejimini sürdürünüz.' },
      { minScore: 5, maxScore: 8, severity: 'Hafif-Orta Düzeyde Hastalık / Kısmi Yanıt', actionAdvice: 'Parsiyel yanıt veya hafif bozukluk. Doz optimizasyonu veya psikoterapi eklenmesi değerlendirilmelidir.' },
      { minScore: 9, maxScore: 11, severity: 'Belirgin Hastalık / Yetersiz Yanıt', actionAdvice: 'Yetersiz tedavi yanıtı. İlaç değişimi (switch) veya augmentasyon stratejileri uygulanmalıdır.' },
      { minScore: 12, maxScore: 14, severity: 'Ağır Hastalık / Klinik Bozulma', actionAdvice: 'Tedavi direnci veya akut kötüleşme. Acil tedavi revizyonu, yatış endikasyonu ve yakın risk değerlendirmesi şarttır.' }
    ],
    reference: 'Guy W. ECDEU Assessment Manual for Psychopharmacology. US DHEW, NIMH; 1976.'
  },
  {
    id: 'ddo',
    code: 'DDÖ',
    name: 'Deliryum Derecelendirme Ölçeği (DDÖ / DRS-R-98)',
    category: 'Çoklu Durum Ölçekleri',
    targetCondition: 'Deliryum Tanısı, Şiddeti ve Demanstan Ayırıcı Tanı',
    description: 'Bilinç dalgalanması, dikkat kusuru, algı bozukluğu, psikomotor aktivite ve uyku-uyanıklık döngüsünü içeren klinisyen derecelendirmeli deliryum ölçeği.',
    timeframe: 'Son 24 saatlik klinik gözlem',
    questions: [
      {
        id: 1,
        text: 'Uyku-Uyanıklık Döngüsü Bozukluğu',
        options: [
          { label: '0: Normal uyku düzeni', value: 0 },
          { label: '1: Gece hafif uykusuzluk veya gündüz şekerlemesi', value: 1 },
          { label: '2: Gece/gündüz döngüsünün belirgin tersine dönmesi', value: 2 },
          { label: '3: Ağır uyku-uyanıklık parçalanması, günlerce uykusuzluk', value: 3 }
        ]
      },
      {
        id: 2,
        text: 'Algı Bozuklukları ve Halüsinasyonlar',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Yanılsamalar (illüzyonlar - gölgeleri insan sanma vb.)', value: 1 },
          { label: '2: Canlı görsel halüsinasyonlar veya dokunsal duyumlar', value: 2 },
          { label: '3: Sürekli ve korkutucu multisensöryel halüsinasyonlar', value: 3 }
        ]
      },
      {
        id: 3,
        text: 'Sanrılar (Hezeyanlar): Genellikle geçici, parçalı ve paranoid içerik',
        options: [
          { label: '0: Yok', value: 0 },
          { label: '1: Şüphecilik veya geçici yanlış inanç', value: 1 },
          { label: '2: Parçalı, değişken hezeyanlar (zehirlenme, kaçırılma korkusu)', value: 2 },
          { label: '3: Karmaşık, yoğun ve davranışa yansıyan persekütif sanrılar', value: 3 }
        ]
      },
      {
        id: 4,
        text: 'Duygulanım Labilitesi: Uygunsuz korku, öfke, öfori arasında ani geçişler',
        options: [
          { label: '0: Normal duygulanım', value: 0 },
          { label: '1: Hafif duygusal değişkenlik', value: 1 },
          { label: '2: Belirgin ve ani korku, anksiyete veya ağlama nöbetleri', value: 2 },
          { label: '3: Ağır ajitasyon ve şiddetli duygusal fırtınalar', value: 3 }
        ]
      },
      {
        id: 5,
        text: 'Motor Davranış: Hipoaktif (letarjik) veya Hiperaktif (amaçsız huzursuzluk, kateter çekme)',
        options: [
          { label: '0: Normal motor aktivite', value: 0 },
          { label: '1: Hafif huzursuzluk veya hafif yavaşlama', value: 1 },
          { label: '2: Belirgin ajitasyon, tüpleri çekme veya aşırı hipoaktivite', value: 2 },
          { label: '3: Ağır motor eksitasyon veya komaya yakın stupor', value: 3 }
        ]
      },
      {
        id: 6,
        text: 'Dikkat ve Konsantrasyon Bozukluğu: Dikkati odaklayamama, sürdürememe ve kaydıramama',
        options: [
          { label: '0: Normal dikkat', value: 0 },
          { label: '1: Hafif dikkat dağınıklığı, soruyu tekrarlatır', value: 1 },
          { label: '2: Belirgin dikkat kusuru, konuyu sıkça kaybeder', value: 2 },
          { label: '3: Dikkati hiçbir şekilde odaklayamaz, iletişime geçilemez', value: 3 }
        ]
      },
      {
        id: 7,
        text: 'Dalgalı Seyir (Fluctuation): Belirtilerin gün içinde iyileşip kötüleşmesi (akşamları artış)',
        options: [
          { label: '0: Belirti yok veya tamamen stabil', value: 0 },
          { label: '1: Gün içinde hafif dalgalanma', value: 1 },
          { label: '2: Belirgin berrak aralıklar ve kötüleşme dönemleri (sundowning)', value: 2 },
          { label: '3: Saatler içinde dramatik dalgalanmalar', value: 3 }
        ]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Normal / Deliryum Düşük', actionAdvice: 'Deliryum bulgusu saptanmadı. Kırılgan hastalarda risk faktörlerini (ilaçlar, elektrolit, enfeksiyon) takip ediniz.' },
      { minScore: 6, maxScore: 11, severity: 'Hafif / Şüpheli Deliryum', actionAdvice: 'Klinik deliryum eşiği. Altta yatan organik nedeni (idrar yolu enfeksiyonu, hipoksi, sedatifler, antikolinerjikler) araştırınız.' },
      { minScore: 12, maxScore: 16, severity: 'Belirgin Deliryum', actionAdvice: 'Kesin klinik deliryum. Non-farmakolojik çevre düzenlemesi (saat, ışıklandırma, tanıdık refakatçi). Gerekirse düşük doz haloperidol veya ketiyapin.' },
      { minScore: 17, maxScore: 21, severity: 'Ağır / Yaşamı Tehdit Eden Deliryum', actionAdvice: 'Tıbbi acil durum. Vital instabilite, metabolik kriz veya intrakraniyal patoloji ekarte edilmeli; yoğun tıbbi izlem başlatılmalıdır.' }
    ],
    reference: 'Trzepacz PT, Mittal D, Torres R, et al. Validation of the Delirium Rating Scale-Revised-98 (DRS-R-98). J Neuropsychiatry Clin Neurosci. 2001.'
  },
  {
    id: 'hado',
    code: 'HADÖ',
    name: 'Hastane Anksiyete ve Depresyon Ölçeği (HADÖ / HADS)',
    category: 'Çoklu Durum Ölçekleri',
    targetCondition: 'Genel Tıp ve Psikiyatri Hastalarında Anksiyete ve Depresyon Alt Boyutları',
    description: 'Bedensel hastalıkların eşlik ettiği durumlarda somatik belirtileri dışlayarak saf psikolojik anksiyete ve depresyon şiddetini ayrı alt skorlarla ölçen 14 maddelik altın standart ölçek.',
    timeframe: 'Geçen hafta boyunca',
    questions: [
      { id: 1, subscale: 'Anksiyete', text: 'Kendimi gergin ya da patlayacak gibi hissediyorum', options: [{ label: 'Çoğu zaman', value: 3 }, { label: 'Birçok zaman', value: 2 }, { label: 'Zaman zaman', value: 1 }, { label: 'Hiçbir zaman', value: 0 }] },
      { id: 2, subscale: 'Depresyon', text: 'Eskiden zevk aldığım şeylerden hala zevk alıyorum', options: [{ label: 'Kesinlikle eskisi kadar', value: 0 }, { label: 'Pek eskisi kadar değil', value: 1 }, { label: 'Yalnızca biraz', value: 2 }, { label: 'Neredeyse hiç', value: 3 }] },
      { id: 3, subscale: 'Anksiyete', text: 'Sanki kötü bir şey olacakmış gibi bir korkuya kapılıyorum', options: [{ label: 'Çok kesin ve oldukça şiddetli', value: 3 }, { label: 'Evet ama çok şiddetli değil', value: 2 }, { label: 'Biraz ama beni tasalandırmıyor', value: 1 }, { label: 'Hiçbir zaman', value: 0 }] },
      { id: 4, subscale: 'Depresyon', text: 'Gülebiliyorum ve olayların komik yanlarını görebiliyorum', options: [{ label: 'Her zaman olduğu kadar', value: 0 }, { label: 'Şimdi pek o kadar değil', value: 1 }, { label: 'Kesinlikle şimdi o kadar değil', value: 2 }, { label: 'Artık hiç değil', value: 3 }] },
      { id: 5, subscale: 'Anksiyete', text: 'Aklımdan endişe verici düşünceler geçiyor', options: [{ label: 'Zamanın çoğunda', value: 3 }, { label: 'Birçok zaman', value: 2 }, { label: 'Zaman zaman', value: 1 }, { label: 'Yalnızca ara sıra', value: 0 }] },
      { id: 6, subscale: 'Depresyon', text: 'Kendimi neşeli hissediyorum', options: [{ label: 'Hiçbir zaman', value: 3 }, { label: 'Sık değil', value: 2 }, { label: 'Bazen', value: 1 }, { label: 'Çoğu zaman', value: 0 }] },
      { id: 7, subscale: 'Anksiyete', text: 'Rahat rahat oturabiliyorum ve gevşeyebiliyorum', options: [{ label: 'Kesinlikle', value: 0 }, { label: 'Genellikle', value: 1 }, { label: 'Pek sık değil', value: 2 }, { label: 'Hiçbir zaman', value: 3 }] },
      { id: 8, subscale: 'Depresyon', text: 'Sanki her şey yavaşlamış gibi hissediyorum', options: [{ label: 'Neredeyse her zaman', value: 3 }, { label: 'Çok sık', value: 2 }, { label: 'Bazen', value: 1 }, { label: 'Hiçbir zaman', value: 0 }] },
      { id: 9, subscale: 'Anksiyete', text: 'Karnımın içinde kelebekler uçuşuyor gibi bir his veya huzursuzluk duyuyorum', options: [{ label: 'Hiçbir zaman', value: 0 }, { label: 'Bazen', value: 1 }, { label: 'Oldukça sık', value: 2 }, { label: 'Çok sık', value: 3 }] },
      { id: 10, subscale: 'Depresyon', text: 'Dış görünüşüme ilgimi kaybettim', options: [{ label: 'Tamamen', value: 3 }, { label: 'Gerektiği kadar ilgilenmiyorum', value: 2 }, { label: 'Pek o kadar özen göstermiyorum', value: 1 }, { label: 'Eskisi kadar özen gösteriyorum', value: 0 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Normal Düzey (Semptom Yok)', actionAdvice: 'Klinik eşiğin altında. Özgül anksiyete veya depresyon müdahalesi gerekmemektedir.' },
      { minScore: 8, maxScore: 10, severity: 'Sınırda Düzey (Hafif Şüphe)', actionAdvice: 'Sınırda klinik durum. Alt ölçekleri (anksiyete ve depresyon) ayrı ayrı inceleyiniz; destekleyici görüşme planlayınız.' },
      { minScore: 11, maxScore: 18, severity: 'Anlamlı Klinik Anksiyete / Depresyon', actionAdvice: 'Klinik düzeyde bozukluk mevcuttur (Türkiye kesme puanı: Anksiyete 10/11, Depresyon 7/8). Farmakoterapi veya BDT endikedir.' },
      { minScore: 19, maxScore: 30, severity: 'Ağır Anksiyete ve Depresyon Komorbiditesi', actionAdvice: 'Şiddetli tablo. İntihar riski taranmalı, psikiyatrik konsültasyon ve kombine tedavi başlatılmalıdır.' }
    ],
    reference: 'Zigmond AS, Snaith RP. The hospital anxiety and depression scale. Acta Psychiatr Scand. 1983; Aydemir Ö. Türkçe geçerlilik güvenilirlik: Türk Psikiyatri Dergisi. 1997.'
  },
  {
    id: 'scl90',
    code: 'SCL-90-R',
    name: 'SCL-90-R Psikolojik Belirti Tarama Listesi (SCL-90-R)',
    category: 'Çoklu Durum Ölçekleri',
    targetCondition: 'Çok Boyutlu Psikopatoloji Taraması ve Genel Semptom İndeksi (GSI)',
    description: 'Somatizasyon, obsesif-kompulsif, kişilerarası duyarlık, depresyon, anksiyete, öfke-düşmanlık, fobik anksiyete, paranoid düşünce ve psikotizm boyutlarını tarayan kapsamlı klinik envanter.',
    timeframe: 'Son 7 gün boyunca',
    questions: [
      { id: 1, subscale: 'Somatizasyon', text: 'Baş ağrıları ve boyun gerginlikleri', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 2, subscale: 'Obsesif', text: 'Zihninizi meşgul eden, kurtulamadığınız istenmeyen düşünceler', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 3, subscale: 'Kişilerarası Duyarlık', text: 'İnsanların sizi eleştirmesine veya yargılamasına aşırı duyarlık', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 4, subscale: 'Depresyon', text: 'Geleceğe ilişkin umutsuzluk ve karamsarlık hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 5, subscale: 'Anksiyete', text: 'Aniden ortaya çıkan nedensiz panik veya dehşet hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 6, subscale: 'Öfke-Düşmanlık', text: 'Kontrol edemediğiniz öfke patlamaları veya eşyalara zarar verme isteği', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 7, subscale: 'Fobik Anksiyete', text: 'Açık alanlarda, kalabalıkta veya toplu taşımada duyulan yoğun korku', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 8, subscale: 'Paranoid Düşünce', text: 'İnsanların arkanızdan konuştuğu veya size zarar vermek istediği hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 9, subscale: 'Psikotizm', text: 'Başkalarının duymadığı sesler duyma veya düşüncelerinizin kontrol edildiği inancı', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] },
      { id: 10, subscale: 'Ek Belirtiler', text: 'Uykuya dalamama veya sık sık kabuslarla uyanma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Çok az (1)', value: 1 }, { label: 'Orta derecede (2)', value: 2 }, { label: 'Oldukça fazla (3)', value: 3 }, { label: 'İleri derecede (4)', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 9, severity: 'Normal Psikolojik Belirti Düzeyi', actionAdvice: 'Genel popülasyon normları içinde. Belirgin psikopatolojik distres saptanmadı.' },
      { minScore: 10, maxScore: 19, severity: 'Hafif-Orta Derecede Psikolojik Distres', actionAdvice: 'Belirli boyutlarda (depresyon/anksiyete) yükselme olabilir. Destekleyici psikoterapi veya stres yönetimi önerilir.' },
      { minScore: 20, maxScore: 29, severity: 'Yüksek Psikopatoloji Düzeyi (GSI Pozitif)', actionAdvice: 'Klinik eşiğin üzerinde global semptom yükü. Ayrıntılı psikiyatrik değerlendirme ve yapılandırılmış tedavi şarttır.' },
      { minScore: 30, maxScore: 40, severity: 'Ağır Çoklu Psikopatolojik Tablo', actionAdvice: 'Acil kapsamlı klinik ve psikotik/paranoid risk değerlendirmesi, farmakoterapi ve multidisipliner takip gerektirir.' }
    ],
    reference: 'Derogatis LR. SCL-90-R: Administration, Scoring and Procedures Manual. 1994; Dağ İ. SCL-90-R Türkçe standardizasyonu: Türk Psikiyatri Dergisi. 1991.'
  },
  {
    id: 'mmse',
    code: 'SMMT',
    name: 'Standardize Mini Mental Test (SMMT / MMSE)',
    category: 'Çoklu Durum Ölçekleri',
    targetCondition: 'Bilişsel Bozulma, Demans Evrelemesi ve Deliryum Ayırıcı Tanısı',
    description: 'Yönelim, kayıt hafızası, dikkat/hesaplama, hatırlama ve lisan alanlarını 30 puan üzerinden değerlendiren uluslararası en yaygın kognitif tarama testi.',
    timeframe: 'Muayene anı',
    questions: [
      {
        id: 1,
        text: 'Zaman Yönelimi (5 Puan): Yıl, Mevsim, Ay, Gün, Tarih sorgulanır',
        options: [
          { label: '0: Hiçbirini bilemedi', value: 0 },
          { label: '1: Yalnızca 1 tanesini bildi', value: 1 },
          { label: '2: 2 tanesini bildi', value: 2 },
          { label: '3: 3 tanesini bildi', value: 3 },
          { label: '4: 4 tanesini bildi', value: 4 },
          { label: '5: Hepsini eksiksiz bildi (5/5)', value: 5 }
        ]
      },
      {
        id: 2,
        text: 'Mekan Yönelimi (5 Puan): Ülke, Şehir, İlçe, Bulunulan Bina / Hastane, Bulunulan Kat',
        options: [
          { label: '0: Hiçbirini bilemedi', value: 0 },
          { label: '1: 1 tanesini bildi', value: 1 },
          { label: '2: 2 tanesini bildi', value: 2 },
          { label: '3: 3 tanesini bildi', value: 3 },
          { label: '4: 4 tanesini bildi', value: 4 },
          { label: '5: Hepsini eksiksiz bildi (5/5)', value: 5 }
        ]
      },
      {
        id: 3,
        text: 'Kayıt Belleği (3 Puan): Üç ilgisiz kelime söylenir (örn: Elma, Masa, Para) ve tekrarlaması istenir',
        options: [
          { label: '0: Hiçbir kelimeyi tekrarlayamadı', value: 0 },
          { label: '1: Yalnızca 1 kelime', value: 1 },
          { label: '2: 2 kelime', value: 2 },
          { label: '3: 3 kelimeyi eksiksiz tekrarladı (3/3)', value: 3 }
        ]
      },
      {
        id: 4,
        text: 'Dikkat ve Hesaplama (5 Puan): 100’den geriye 7’şer çıkarma (93, 86, 79, 72, 65) ya da "DÜNYA" kelimesini tersten heceletme',
        options: [
          { label: '0: Hiç doğru adım yok', value: 0 },
          { label: '1: 1 doğru adım', value: 1 },
          { label: '2: 2 doğru adım', value: 2 },
          { label: '3: 3 doğru adım', value: 3 },
          { label: '4: 4 doğru adım', value: 4 },
          { label: '5: 5 doğru adım (5/5)', value: 5 }
        ]
      },
      {
        id: 5,
        text: 'Gecikmiş Hatırlama (3 Puan): Biraz önce öğrenilen 3 kelime (Elma, Masa, Para) ipucu verilmeden sorulur',
        options: [
          { label: '0: Hiçbirini hatırlayamadı', value: 0 },
          { label: '1: 1 kelimeyi hatırladı', value: 1 },
          { label: '2: 2 kelimeyi hatırladı', value: 2 },
          { label: '3: 3 kelimeyi de tam hatırladı (3/3)', value: 3 }
        ]
      },
      {
        id: 6,
        text: 'Lisan & Görsel-Mekansal (9 Puan): İki nesne adlandırma (saat, kalem), emre uyma ("Al, katla, yere koy"), cümle yazma ve kesişen beşgen çizimi',
        options: [
          { label: '0: Hiçbirini yapamadı', value: 0 },
          { label: '3: Ağır başarısızlık (1-3 görev)', value: 3 },
          { label: '6: Kısmi başarı (4-6 görev)', value: 6 },
          { label: '8: 7-8 görevi başardı', value: 8 },
          { label: '9: Hepsini eksiksiz tamamladı (9/9)', value: 9 }
        ]
      }
    ],
    interpretation: [
      { minScore: 24, maxScore: 30, severity: 'Normal Bilişsel Düzey', actionAdvice: 'Klinik demans bulgusu saptanmadı. Yüksek eğitimlilerde erken hafif bilişsel bozukluk şüphesinde MoCA uygulanması önerilir.' },
      { minScore: 18, maxScore: 23, severity: 'Hafif Derecede Bilişsel Bozulma (Erken Evre Demans)', actionAdvice: 'Erken evre demans / MBO şüphesi. B12, TSH, Kraniyal MRG görüntülemesi ve nöropsikolojik test bataryası planlanmalıdır.' },
      { minScore: 10, maxScore: 17, severity: 'Orta Derecede Demans', actionAdvice: 'Belirgin işlev kaybı. Kolinesteraz inhibitörleri (Donepezil/Rivastigmin/Galantamin) veya Memantin tedavisi başlanmalıdır; vesayet değerlendirilmelidir.' },
      { minScore: 0, maxScore: 9, severity: 'İleri / Ağır Derecede Demans', actionAdvice: 'Tam bakım bağımlılığı. Güvenlik tedbirleri, yutma ve aspirasyon izlemi, palyatif bakım desteği gerektirir.' }
    ],
    reference: 'Folstein MF, Folstein SE, McHugh PR. "Mini-mental state". J Psychiatr Res. 1975; Güngen C, et al. SMMT Türkçe standardizasyonu: Türk Psikiyatri Dergisi. 2002.'
  }
];
