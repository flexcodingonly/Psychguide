import { ClinicalScale } from '../../types';

export const PERSONALITY_SCALES: ClinicalScale[] = [
  {
    id: 'borderline_best',
    code: 'BEST',
    name: 'Borderline Şiddet Değerlendirme Ölçeği (BEST)',
    category: 'Kişilik Ölçekleri',
    targetCondition: 'Sınırda (Borderline) Kişilik Bozukluğu Belirti Şiddeti ve Takibi',
    description: 'Duygusal dengesizlik, terk edilme korkusu, kendine zarar verme dürtüleri, öfke patlamaları ve boşluk hissini derecelendiren 15 maddelik haftalık izlem ve tanı ölçeği.',
    timeframe: 'Son 7 gün boyunca',
    questions: [
      { id: 1, text: 'Duygudurumunuz gün içinde veya günler arasında bir uçtan diğer uca şiddetle dalgalandı mı?', options: [{ label: '1: Hiç (0)', value: 0 }, { label: '2: Çok az (1)', value: 1 }, { label: '3: Orta derecede (2)', value: 2 }, { label: '4: Oldukça fazla (3)', value: 3 }, { label: '5: Aşırı derecede (4)', value: 4 }] },
      { id: 2, text: 'Önem verdiğiniz birinin sizi terk edeceği veya bırakacağı korkusunu yoğun şekilde yaşadınız mı?', options: [{ label: '1: Hiç (0)', value: 0 }, { label: '2: Çok az (1)', value: 1 }, { label: '3: Orta (2)', value: 2 }, { label: '4: Oldukça fazla (3)', value: 3 }, { label: '5: Aşırı (4)', value: 4 }] },
      { id: 3, text: 'İçinizde durdurulamaz bir öfke veya şiddetli öfke patlamaları hissettiniz mi?', options: [{ label: '1: Hiç (0)', value: 0 }, { label: '2: Çok az (1)', value: 1 }, { label: '3: Orta (2)', value: 2 }, { label: '4: Oldukça fazla (3)', value: 3 }, { label: '5: Aşırı (4)', value: 4 }] },
      { id: 4, text: 'Kendinize zarar verme (kesme, yakma, aşırı doz alma) veya intihar düşünceleriniz oldu mu?', options: [{ label: '1: Hiç (0)', value: 0 }, { label: '2: Çok az (1)', value: 1 }, { label: '3: Orta (2)', value: 2 }, { label: '4: Oldukça fazla (3)', value: 3 }, { label: '5: Aşırı (4)', value: 4 }] },
      { id: 5, text: 'İçinizde derin, acı veren bir boşluk ve anlamsızlık hissi oldu mu?', options: [{ label: '1: Hiç (0)', value: 0 }, { label: '2: Çok az (1)', value: 1 }, { label: '3: Orta (2)', value: 2 }, { label: '4: Oldukça fazla (3)', value: 3 }, { label: '5: Aşırı (4)', value: 4 }] },
      { id: 6, text: 'İnsanları aniden göklere çıkarıp ardından en küçük hayal kırıklığında tamamen yerin dibine soktunuz mu (Yarma - Splitting)?', options: [{ label: '1: Hiç (0)', value: 0 }, { label: '2: Çok az (1)', value: 1 }, { label: '3: Orta (2)', value: 2 }, { label: '4: Oldukça fazla (3)', value: 3 }, { label: '5: Aşırı (4)', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Normal / Minimal Borderline Özellik', actionAdvice: 'Klinik eşiğin altında duygusal dalgalanma.' },
      { minScore: 6, maxScore: 12, severity: 'Hafif-Orta Düzey Duygusal Düzensizlik', actionAdvice: 'Duygu regülasyonunda zorluklar. Duygu odaklı farkındalık ve BDT teknikleri.' },
      { minScore: 13, maxScore: 18, severity: 'Belirgin Sınırda Kişilik Tablosu', actionAdvice: 'Klinik Borderline Kişilik Bozukluğu. Diyalektik Davranış Terapisi (DBT) beceri eğitimi ve kriz planı oluşturulmalıdır.' },
      { minScore: 19, maxScore: 24, severity: 'Ağır Akut Sınırda Kriz / Kendine Zarar Riski', actionAdvice: 'YÜKSEK ACİL RİSK: Kendine zarar verme ve özkıyım kriz protokolü devreye sokulmalı; duygudurum düzenleyici/antipsikotik desteği ve yakın izlem sağlanmalıdır.' }
    ],
    reference: 'Pfohl B, et al. Borderline Evaluation of Severity Over Time (BEST). 2009; Alkan S, et al. BEST Türkçe geçerlik: 2015.'
  },
  {
    id: 'pid5',
    code: 'PID-5',
    name: 'DSM-5 için Kişilik Envanteri (PID-5) — Boyutsal Model',
    category: 'Kişilik Ölçekleri',
    targetCondition: 'DSM-5 Boyutsal Kişilik Özellikleri (Olumsuz Duygulanım, Kopukluk, Antagonizma, Disinhibisyon, Psikotizm)',
    description: 'DSM-5 Alternatif Kişilik Modeli Kriter B için geliştirilen, 5 üst alanda boyutsal kişilik patolojisini ve maladaptif kişilik örüntülerini ölçen uluslararası altın standart.',
    timeframe: 'Genel yaşam özellikleri ve süreğen kişilik yapısı',
    questions: [
      { id: 1, subscale: 'Olumsuz Duygulanım', text: 'Sürekli bir şeylerden endişelenirim ve kendimi kötü hissetmeye yatkınım', options: [{ label: '0: Çok yanlış / Sık sık yanlış', value: 0 }, { label: '1: Bazen ya da biraz yanlış', value: 1 }, { label: '2: Bazen ya da biraz doğru', value: 2 }, { label: '3: Çok doğru / Sık sık doğru', value: 3 }] },
      { id: 2, subscale: 'Kopukluk (Detachment)', text: 'İnsanlardan uzak durmayı ve yapayalnız kalmayı tercih ederim, sıcak bağ kurmaktan kaçınırım', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 3, subscale: 'Antagonizma (Düşmanlık)', text: 'İstediğimi elde etmek için insanları manipüle etmekten veya yalan söylemekten çekinmem', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 4, subscale: 'Disinhibisyon (Dürtüsellik)', text: 'Sonuçlarını hiç düşünmeden anlık heveslerimle hareket ederim ve kolayca sıkılırım', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 5, subscale: 'Psikotizm (Sıra Dışılık)', text: 'İnsanların tuhaf ve mantıksız bulduğu düşüncelerim ve olağanüstü algısal yaşantılarım olur', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 3, severity: 'Normal / Düşük Kişilik Özelliği Patolojisi', actionAdvice: 'Kişilik boyutları dengelidir.' },
      { minScore: 4, maxScore: 8, severity: 'Orta Düzey Boyutsal Kişilik Yatkınlığı', actionAdvice: 'Yükselen alana özgü (örn: Olumsuz Duygulanım veya Dürtüsellik) hedefe yönelik psikolojik müdahale.' },
      { minScore: 9, maxScore: 15, severity: 'Yüksek Derecede Patolojik Kişilik Boyutları', actionAdvice: 'DSM-5 Alternatif Model Kişilik Bozukluğu tanısı için kuvvetli kriter B pozitifliği. Uzun soluklu yapılandırılmış kişilik terapisi endikedir.' }
    ],
    reference: 'Krueger RF, Derringer J, Markon KE, et al. Initial construction of a maladaptive personality trait model and inventory for DSM-5. J Pers Assess. 2012; Akın S, et al. PID-5 Türkçe geçerlik: 2017.'
  }
];
