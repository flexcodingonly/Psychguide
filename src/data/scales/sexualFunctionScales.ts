import { ClinicalScale } from '../../types';

export const SEXUAL_FUNCTION_SCALES: ClinicalScale[] = [
  {
    id: 'asex',
    code: 'ASEX',
    name: 'Arizona Cinsel Yaşantılar Ölçeği (ACYÖ / ASEX)',
    category: 'Cinsel İşlev Ölçekleri',
    targetCondition: 'Antidepresan/Psikotrop İlaç İlişkili Cinsel Disfonksiyon ve Libido Değerlendirmesi',
    description: 'Cinsel istek, uyarılma, fizyolojik ereksiyon/lubrikasyon, orgazma ulaşma ve orgazm doyumunu 5 maddede 1-6 Likert ölçeğinde ölçen altın standart klinik ölçek.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Cinsel isteğiniz ne kadar güçlüdür?', options: [{ label: '1: Aşırı güçlü', value: 1 }, { label: '2: Çok güçlü', value: 2 }, { label: '3: Biraz güçlü', value: 3 }, { label: '4: Biraz zayıf', value: 4 }, { label: '5: Çok zayıf', value: 5 }, { label: '6: Hiç cinsel istek yok', value: 6 }] },
      { id: 2, text: 'Ne kadar kolay cinsel olarak uyarılırsınız (tahrik olursunuz)?', options: [{ label: '1: Aşırı kolay', value: 1 }, { label: '2: Çok kolay', value: 2 }, { label: '3: Biraz kolay', value: 3 }, { label: '4: Biraz zor', value: 4 }, { label: '5: Çok zor', value: 5 }, { label: '6: Asla uyarılamıyorum', value: 6 }] },
      { id: 3, text: 'Cinsel birleşme için yeterli fizyolojik tepkiyi (erkeklerde ereksiyon, kadınlarda lubrikasyon/ıslanma) ne kadar kolay elde edip sürdürebiliyorsunuz?', options: [{ label: '1: Aşırı kolay ve tam yeterli', value: 1 }, { label: '2: Çok kolay', value: 2 }, { label: '3: Biraz kolay', value: 3 }, { label: '4: Biraz zor', value: 4 }, { label: '5: Çok zor', value: 5 }, { label: '6: Hiç olmuyor / tam disfonksiyon', value: 6 }] },
      { id: 4, text: 'Ne kadar kolay orgazma ulaşıyorsunuz?', options: [{ label: '1: Aşırı kolay', value: 1 }, { label: '2: Çok kolay', value: 2 }, { label: '3: Biraz kolay', value: 3 }, { label: '4: Biraz zor', value: 4 }, { label: '5: Çok zor', value: 5 }, { label: '6: Asla orgazm olamıyorum (anorgazmi)', value: 6 }] },
      { id: 5, text: 'Orgazmlarınız ne kadar tatmin edicidir?', options: [{ label: '1: Aşırı tatmin edici', value: 1 }, { label: '2: Çok tatmin edici', value: 2 }, { label: '3: Biraz tatmin edici', value: 3 }, { label: '4: Pek tatmin etmiyor', value: 4 }, { label: '5: Hiç tatmin etmiyor', value: 5 }, { label: '6: Orgazm olamıyorum', value: 6 }] }
    ],
    interpretation: [
      { minScore: 5, maxScore: 10, severity: 'Normal / Yüksek Cinsel İşlevsellik', actionAdvice: 'Cinsel işlev bozukluğu saptanmadı.' },
      { minScore: 11, maxScore: 18, severity: 'Sınırda Düzey Cinsel İşlevsellik', actionAdvice: 'Hafif libido azalması veya uyarılma gecikmesi. İlaç yan etkileri ve stres faktörleri sorgulanmalıdır.' },
      { minScore: 19, maxScore: 30, severity: 'Klinik Cinsel İşlev Bozukluğu (Pozitif ASEX)', actionAdvice: 'Klinik cinsel disfonksiyon kriteri pozitif (Toplam skor ≥19 VEYA herhangi bir maddede ≥5 VEYA herhangi üç maddede ≥4). SSRI kaynaklıysa Bupropion augmentasyonu veya Vortioksetin/Trintellix geçişi değerlendirilmelidir.' }
    ],
    reference: 'McGahuey CA, et al. The Arizona Sexual Experience Scale (ASEX): Reliability and validity. J Sex Marital Ther. 2000; Soykan A. ACYÖ Türkçe geçerlik ve güvenilirlik: 2004.'
  }
];
