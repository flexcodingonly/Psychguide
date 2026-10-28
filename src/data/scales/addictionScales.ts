import { ClinicalScale } from '../../types';

export const ADDICTION_SCALES: ClinicalScale[] = [
  {
    id: 'audit',
    code: 'AUDIT',
    name: 'Alkol Kullanım Bozuklukları Tanıma Testi (AUDIT)',
    category: 'Bağımlılık Ölçekleri',
    targetCondition: 'Tehlikeli ve Zararlı Alkol Kullanımı ile Bağımlılık Taraması',
    description: 'Dünya Sağlık Örgütü (DSÖ) tarafından geliştirilen, alkol tüketim miktarı, bağımlılık belirtileri ve alkole bağlı sorunları ölçen 10 maddelik uluslararası standart anket.',
    timeframe: 'Son 1 yıl boyunca',
    questions: [
      { id: 1, text: 'Ne sıklıkla alkol içeren bir içki içersiniz?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Ayda 1 veya daha az (1)', value: 1 }, { label: 'Ayda 2-4 kez (2)', value: 2 }, { label: 'Haftada 2-3 kez (3)', value: 3 }, { label: 'Haftada 4 veya daha fazla (4)', value: 4 }] },
      { id: 2, text: 'İçki içtiğiniz bir günde tipik olarak kaç kadeh/standart birim alkol alırsınız?', options: [{ label: '1 veya 2 (0)', value: 0 }, { label: '3 veya 4 (1)', value: 1 }, { label: '5 veya 6 (2)', value: 2 }, { label: '7-9 (3)', value: 3 }, { label: '10 veya daha fazla (4)', value: 4 }] },
      { id: 3, text: 'Bir oturuşta 6 veya daha fazla standart içkiyi ne sıklıkla içersiniz (Binge drinking)?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Ayda birden az (1)', value: 1 }, { label: 'Her ay (2)', value: 2 }, { label: 'Her hafta (3)', value: 3 }, { label: 'Neredeyse her gün (4)', value: 4 }] },
      { id: 4, text: 'İçmeye başladıktan sonra duramadığınızı ne sıklıkla fark ettiniz?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Ayda birden az (1)', value: 1 }, { label: 'Her ay (2)', value: 2 }, { label: 'Her hafta (3)', value: 3 }, { label: 'Neredeyse her gün (4)', value: 4 }] },
      { id: 5, text: 'İçki yüzünden normalde yapmanız beklenen bir işi yapamadığınız oldu mu?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Ayda birden az (1)', value: 1 }, { label: 'Her ay (2)', value: 2 }, { label: 'Her hafta (3)', value: 3 }, { label: 'Neredeyse her gün (4)', value: 4 }] },
      { id: 6, text: 'Ağır bir içki gecesinin ertesi sabahı kendinize gelebilmek için ilk iş içki içtiğiniz oldu mu?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Ayda birden az (1)', value: 1 }, { label: 'Her ay (2)', value: 2 }, { label: 'Her hafta (3)', value: 3 }, { label: 'Neredeyse her gün (4)', value: 4 }] },
      { id: 7, text: 'İçkiniz yüzünden sizin veya bir başkasının yaralandığı oldu mu?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet, ama son 1 yılda değil (2)', value: 2 }, { label: 'Evet, son 1 yıl içinde (4)', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Düşük Riskli Alkol Tüketimi', actionAdvice: 'Güvenli sınırlar içinde tüketim veya abstinans.' },
      { minScore: 8, maxScore: 15, severity: 'Tehlikeli ve Zararlı Düzeyde Alkol Kullanımı', actionAdvice: 'Kısa müdahale (Brief Intervention), alkolün zararları psiko-eğitimi ve motivasyonel görüşme.' },
      { minScore: 16, maxScore: 19, severity: 'Zararlı Alkol Kullanımı / Yüksek Bağımlılık Riski', actionAdvice: 'AMATEM / Bağımlılık polikliniği sevki, karaciğer enzimleri (GGT, AST/ALT) takibi ve motivasyonel terapi.' },
      { minScore: 20, maxScore: 28, severity: 'Ağır Alkol Bağımlılığı', actionAdvice: 'Tıbbi detoksifikasyon endikasyonu (yoksunluk nöbeti/delirium tremens riski). Akamprosat/Naltrekson idamesi.' }
    ],
    reference: 'Babor TF, et al. AUDIT: The Alcohol Use Disorders Identification Test: Guidelines for use in primary care. WHO; Saatcioğlu Ö, et al. Türkçe geçerlik: 2002.'
  },
  {
    id: 'ciwa',
    code: 'CIWA-Ar',
    name: 'CIWA-Ar Alkol Yoksunluğu Değerlendirme Ölçeği',
    category: 'Bağımlılık Ölçekleri',
    targetCondition: 'Akut Alkol Yoksunluk Şiddeti ve Semptom Tetiklemeli Benzodiazepin Tedavisi',
    description: 'Bulantı, titreme, terleme, anksiyete, ajitasyon, dokunsal/işitsel/görsel halüsinasyonlar ve oryantasyonu derecelendiren acil servis protokolü.',
    timeframe: 'Muayene anı (saatlik / 2 saatlik protokol)',
    questions: [
      { id: 1, text: 'Bulantı ve Kusma', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif bulantı, kusma yok', value: 1 }, { label: '4: Aralıklı bulantı ve öğürme', value: 4 }, { label: '7: Sürekli şiddetli bulantı ve sık kusma', value: 7 }] },
      { id: 2, text: 'Tremor (Kollar uzatıldığında el titremesi)', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hissedilmeyen, parmak uçlarında hafif', value: 1 }, { label: '4: Kollar uzatıldığında orta şiddette', value: 4 }, { label: '7: Kollar bükülüyken bile şiddetli kaba tremor', value: 7 }] },
      { id: 3, text: 'Paroksismal Terleme', options: [{ label: '0: Terleme yok', value: 0 }, { label: '1: Avuç içlerinde hafif nemlilik', value: 1 }, { label: '4: Alında belirgin boncuk boncuk ter', value: 4 }, { label: '7: Sırılsıklam terleme', value: 7 }] },
      { id: 4, text: 'Anksiyete', options: [{ label: '0: Sakin', value: 0 }, { label: '1: Hafif kaygılı', value: 1 }, { label: '4: Belirgin kaygılı, tetikte', value: 4 }, { label: '7: Akut panik ve dehşet hali', value: 7 }] },
      { id: 5, text: 'Ajitasyon / Motor Huzursuzluk', options: [{ label: '0: Normal aktivite', value: 0 }, { label: '1: Hafif huzursuz', value: 1 }, { label: '4: Yerinde duramıyor, sürekli kıpırdanıyor', value: 4 }, { label: '7: Sürekli gezinme, tutulamayan şiddetli eksitasyon', value: 7 }] },
      { id: 6, text: 'Dokunsal Algı Bozuklukları (Kaşınma, batma, deride böcek yürümesi hissi)', options: [{ label: '0: Yok', value: 0 }, { label: '1: Çok hafif batma/yanma', value: 1 }, { label: '4: Ciltte böcek geziniyor hissi', value: 4 }, { label: '7: Sürekli dayanılmaz dokunsal halüsinasyonlar', value: 7 }] },
      { id: 7, text: 'Oryantasyon ve Zihin Bulanıklığı', options: [{ label: '0: Tam oryante', value: 0 }, { label: '1: Tarihten emin değil', value: 1 }, { label: '2: Tarihi 2 günden fazla şaşırıyor', value: 2 }, { label: '3: Nerede olduğunu bilmiyor', value: 3 }, { label: '4: Kişi ve mekan oryantasyonu tamamen kayıp', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 9, severity: 'Hafif Yoksunluk', actionAdvice: 'Medikal sedasyon gerekmeyebilir. Destekleyici hidrasyon, Tiamin (B1 vitamini 100-250mg) ve yakın vital takibi.' },
      { minScore: 10, maxScore: 15, severity: 'Orta Düzey Alkol Yoksunluğu', actionAdvice: 'Semptom Tetiklemeli Benzodiazepin (Örn: Diazepam 10-20 mg oral) verilmelidir. 1-2 saat sonra tekrar puanlayınız.' },
      { minScore: 16, maxScore: 25, severity: 'Şiddetli Alkol Yoksunluğu', actionAdvice: 'Hastaneye yatış endikasyonu. Yüksek doz Diazepam protokolü; IV Tiamin, elektrolit ve aspirasyon önlemleri.' },
      { minScore: 26, maxScore: 46, severity: 'İleri Derecede Kritik Yoksunluk (Delirium Tremens Riski)', actionAdvice: 'ACİL TIBBİ ALARM: Delirium Tremens ve yoksunluk nöbeti riski çok yüksek. Yoğun bakım takibi ve agresif IV benzodiazepin titrasyonu.' }
    ],
    reference: 'Sullivan JT, Sykora K, Schneiderman J, et al. Assessment of alcohol withdrawal: The revised CIWA-Ar. Br J Addict. 1989.'
  },
  {
    id: 'dast10',
    code: 'DAST-10',
    name: 'Madde Kötüye Kullanımı Tarama Testi (DAST-10)',
    category: 'Bağımlılık Ölçekleri',
    targetCondition: 'Yasadışı ve Reçeteli Madde Kullanım Bozukluğu Taranması (Alkol Hariç)',
    description: 'Esrar, kokain, amfetamin, opioid veya reçeteli sedatiflerin kötüye kullanımına bağlı sonuçları ölçen 10 maddelik standart tarama ölçeği.',
    timeframe: 'Son 12 ay boyunca',
    questions: [
      { id: 1, text: 'Tıbbi nedenler dışında herhangi bir uyuşturucu/uyarıcı madde veya reçeteli ilaç kullandınız mı?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 2, text: 'Aynı anda birden fazla maddeyi kötüye kullandığınız oldu mu?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 3, text: 'Madde kullanmayı istediğiniz zaman durdurmakta her zaman zorlanır mısınız?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 4, text: 'Madde kullanımı nedeniyle hafıza kaybı veya kendinden geçme (blackout) yaşadınız mı?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 5, text: 'Madde kullanımınız yüzünden hiç suçluluk veya pişmanlık hissettiniz mi?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 6, text: 'Aileniz veya eşiniz madde kullanımınızdan şikayet etti mi?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 7, text: 'Madde elde etmek için yasadışı eylemlerde bulundunuz mu?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 8, text: 'Maddeyi kestiğinizde titreme, terleme, huzursuzluk gibi yoksunluk belirtileri yaşadınız mı?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 0, severity: 'Madde Kullanım Problemi Yok', actionAdvice: 'Madde kullanımı bildirilmedi.' },
      { minScore: 1, maxScore: 2, severity: 'Düşük Düzey Madde Riski', actionAdvice: 'Kısa bilgilendirme ve riskli davranışlar psiko-eğitimi.' },
      { minScore: 3, maxScore: 5, severity: 'Orta Düzey Madde Kötüye Kullanımı', actionAdvice: 'Klinik değerlendirme, toksikoloji idrar taraması ve motivasyonel görüşme.' },
      { minScore: 6, maxScore: 8, severity: 'Ağır Madde Bağımlılığı', actionAdvice: 'Yoğun AMATEM yatarak veya ayaktan bağımlılık tedavi programı; ikame tedavi (Buprenorfin vb.) değerlendirilmesi.' }
    ],
    reference: 'Skinner HA. The Drug Abuse Screening Test. Addict Behav. 1982; Evren C, et al. DAST-10 Türkçe geçerlik: 2013.'
  },
  {
    id: 'fnbt',
    code: 'FNBT',
    name: 'Fagerström Nikotin Bağımlılık Testi (FNBT)',
    category: 'Bağımlılık Ölçekleri',
    targetCondition: 'Fiziksel Tütün / Nikotin Bağımlılık Şiddeti',
    description: 'Sabah ilk sigarayı yakma süresi ve günlük sigara adedi üzerinden biyolojik nikotin bağımlılığını derecelendiren 6 maddelik standart ölçek.',
    timeframe: 'Mevcut günlük sigara içme alışkanlığı',
    questions: [
      { id: 1, text: 'Günün ilk sigarasını uyandıktan ne kadar sonra içersiniz (En kritik belirleyici!)?', options: [{ label: '60 dakikadan sonra (0)', value: 0 }, { label: '31-60 dakika içinde (1)', value: 1 }, { label: '6-30 dakika içinde (2)', value: 2 }, { label: 'İlk 5 dakika içinde (3)', value: 3 }] },
      { id: 2, text: 'Sigara içmenin yasak olduğu yerlerde (hastane, sinema, uçak vb.) zorlanır mısınız?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 3, text: 'Vazgeçmekte en çok zorlandığınız sigara hangisidir?', options: [{ label: 'Diğer herhangi biri (0)', value: 0 }, { label: 'Sabah ilk sigaram (1)', value: 1 }] },
      { id: 4, text: 'Günde kaç adet sigara içiyorsunuz?', options: [{ label: '10 veya daha az (0)', value: 0 }, { label: '11-20 adet (1 paket) (1)', value: 1 }, { label: '21-30 adet (2)', value: 2 }, { label: '31 veya daha fazla (3)', value: 3 }] },
      { id: 5, text: 'Sabahları günün diğer saatlerine göre daha sık mı içersiniz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 6, text: 'Yatakta kalacak kadar hasta olduğunuzda bile sigara içer misiniz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 3, severity: 'Düşük Derecede Nikotin Bağımlılığı', actionAdvice: 'Davranışsal telkin ve motivasyonla bırakma başarısı yüksektir. Nikotin replasmanı genellikle gerekmez.' },
      { minScore: 4, maxScore: 6, severity: 'Orta Derecede Nikotin Bağımlılığı', actionAdvice: 'Nikotin bandı/sakızı veya Bupropion/Vareniklin farmakoterapisi ile bırakma desteği önerilir.' },
      { minScore: 7, maxScore: 10, severity: 'Yüksek Derecede Fiziksel Nikotin Bağımlılığı', actionAdvice: 'Kuvvetli biyolojik bağımlılık. Kombine Nikotin Replasman Tedavisi (Bant + Sakız) veya Vareniklin tedavisi şarttır.' }
    ],
    reference: 'Heatherton TF, Kozlowski LT, Frecker RC, Fagerström KO. The Fagerström Test for Nicotine Dependence. Br J Addict. 1991; Uysal MA, et al. Türkçe standardizasyonu: 2004.'
  }
];
