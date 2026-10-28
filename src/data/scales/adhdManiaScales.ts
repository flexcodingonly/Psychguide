import { ClinicalScale } from '../../types';

export const ADHD_MANIA_SCALES: ClinicalScale[] = [
  {
    id: 'asrs',
    code: 'ASRS-v1.1',
    name: 'Erişkin DEHB Öz-Bildirim Ölçeği (ASRS)',
    category: 'DEHB Ölçekleri',
    targetCondition: 'Yetişkin Dikkat Eksikliği ve Hiperaktivite Bozukluğu Taraması',
    description: 'Dünya Sağlık Örgütü (DSÖ) işbirliğiyle geliştirilen, yetişkinlerde dikkat dağınıklığı, erteleme ve motor huzursuzluğu tarayan standart ölçek.',
    timeframe: 'Son 6 ay boyunca',
    questions: [
      { id: 1, text: 'Bir işin en zor kısımlarını bitirdikten sonra detayları tamamlamakta ne sıklıkla zorlanırsınız?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Nadiren (1)', value: 1 }, { label: 'Bazen (2)', value: 2 }, { label: 'Sık sık (3)', value: 3 }, { label: 'Çok sık (4)', value: 4 }] },
      { id: 2, text: 'Düzen gerektiren bir iş yaparken işleri sıraya koymakta ne sıklıkla zorlanırsınız?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Nadiren (1)', value: 1 }, { label: 'Bazen (2)', value: 2 }, { label: 'Sık sık (3)', value: 3 }, { label: 'Çok sık (4)', value: 4 }] },
      { id: 3, text: 'Randevularınızı veya yapmanız gereken şeyleri ne sıklıkla unutursunuz?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Nadiren (1)', value: 1 }, { label: 'Bazen (2)', value: 2 }, { label: 'Sık sık (3)', value: 3 }, { label: 'Çok sık (4)', value: 4 }] },
      { id: 4, text: 'Çok fazla düşünmeyi gerektiren bir işe başlamaktan ne sıklıkla kaçınır veya ertelersiniz?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Nadiren (1)', value: 1 }, { label: 'Bazen (2)', value: 2 }, { label: 'Sık sık (3)', value: 3 }, { label: 'Çok sık (4)', value: 4 }] },
      { id: 5, text: 'Uzun süre oturmanız gerektiğinde ellerinizi, ayaklarınızı kıpırdatmadan durmakta ne sıklıkla zorlanırsınız?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Nadiren (1)', value: 1 }, { label: 'Bazen (2)', value: 2 }, { label: 'Sık sık (3)', value: 3 }, { label: 'Çok sık (4)', value: 4 }] },
      { id: 6, text: 'Kendinizi bir motor tarafından sürülüyormuş gibi aşırı aktif ve bir şeyler yapmak zorunda ne sıklıkla hissedersiniz?', options: [{ label: 'Hiçbir zaman (0)', value: 0 }, { label: 'Nadiren (1)', value: 1 }, { label: 'Bazen (2)', value: 2 }, { label: 'Sık sık (3)', value: 3 }, { label: 'Çok sık (4)', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 8, severity: 'Negatif Tarama / DEHB Olasılığı Düşük', actionAdvice: 'Yetişkin DEHB semptom eşiğinin altında.' },
      { minScore: 9, maxScore: 13, severity: 'Sınırda Düzey', actionAdvice: 'Sınırda dikkat veya erteleme şikayetleri. Çocukluk çağı karneleri ve gelişim öyküsü taranmalıdır.' },
      { minScore: 14, maxScore: 24, severity: 'Pozitif Tarama (Yüksek DEHB Tutarlılığı)', actionAdvice: 'Erişkin DEHB için güçlü klinik şüphe. DIVA-5 yapılandırılmış tanısal görüşmesi ve psikostimülan (Metilfenidat vb.) / Atomoksetin değerlendirmesi.' }
    ],
    reference: 'Kessler RC, Adler L, Ames M, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS). Psychol Med. 2005; Doğan S, et al. Türkçe geçerlik: 2009.'
  },
  {
    id: 'ymrs',
    code: 'YMRS',
    name: 'Young Mani Derecelendirme Ölçeği (YMRS)',
    category: 'Mani Ölçekleri',
    targetCondition: 'Bipolar Bozuklukta Manik / Hipomanik Epizot Şiddeti',
    description: 'Yükselmiş duygudurum, artmış motor enerji, cinsel ilgi artışı, uyku gereksiniminde azalma, fikir uçuşması ve hezeyanları 11 maddede ölçen uluslararası altın standart.',
    timeframe: 'Son 48 saatlik klinik durum ve görüşme anı',
    questions: [
      { id: 1, text: 'Yükselmiş Duygudurum: Neşeli, iyimser, uygunsuz kahkaha, öfori', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif veya sorulduğunda iyimser', value: 1 }, { label: '2: Belirgin neşeli, şakacı, ortamla uyumsuz', value: 2 }, { label: '3: Aşırı yükselmiş, uygunsuz espriler', value: 3 }, { label: '4: Tam öforik mani hali', value: 4 }] },
      { id: 2, text: 'Artmış Motor Enerji ve Aktivite: Aşırı canlılık, yerinde duramama, hedefe yönelik aşırı planlar', options: [{ label: '0: Normal aktivite', value: 0 }, { label: '1: Canlı, hareketli', value: 1 }, { label: '2: Aşırı enerjik, günde 18 saat durmaksızın koşturma', value: 2 }, { label: '3: Ajite, sakinleştirilemeyen motor huzursuzluk', value: 3 }, { label: '4: Tam motor eksitasyon, durdurulamaz', value: 4 }] },
      { id: 3, text: 'Cinsel İlgi: Cinsel istekte, fantezilerde veya flörtöz davranışlarda artış', options: [{ label: '0: Normal', value: 0 }, { label: '1: Hafif artış', value: 1 }, { label: '2: Belirgin artış, cinsel konularda serbest konuşma', value: 2 }, { label: '3: Spontan cinsel teklifler veya cinsel taşkınlık', value: 3 }, { label: '4: Ağır hiperseksüalite, uygunsuz cinsel eylemler', value: 4 }] },
      { id: 4, text: 'Uyku Gereksiniminde Azalma: Az uyumasına rağmen kendini dinç ve aşırı enerjik hissetme', options: [{ label: '0: Uyku gereksinimi normal', value: 0 }, { label: '1: Normalden 1 saat az uyuyor', value: 1 }, { label: '2: Normalden 2 saat az uyuyor', value: 2 }, { label: '3: Gecede 2-4 saat uyuyor ve hiç yorgun hissetmiyor', value: 3 }, { label: '4: Günlerdir hiç uyumuyor ve yorgunluk hissetmiyor', value: 4 }] },
      { id: 5, text: 'İrritabilite / Sinirlilik (Çift Puanlı)', options: [{ label: '0: Yok', value: 0 }, { label: '2: Sorulduğunda gergin olduğunu söylüyor', value: 2 }, { label: '4: Görüşme sırasında belirgin terslenme, öfke parlamaları', value: 4 }, { label: '6: Sürekli kavgacı, personele ve hekime düşmanca tutum', value: 6 }, { label: '8: Şiddet eğilimi, eşyaları fırlatma, zapt edilememe', value: 8 }] },
      { id: 6, text: 'Konuşma Miktarı ve Hızı: Basınçlı konuşma, söz kesilememe', options: [{ label: '0: Normal hız ve miktar', value: 0 }, { label: '1: Biraz konuşkan', value: 1 }, { label: '2: Sürekli ve yüksek sesle konuşuyor, araya girilebiliyor', value: 2 }, { label: '3: Basınçlı ve durdurulamaz konuşma (logorrhea)', value: 3 }, { label: '4: Kesintisiz bağırma, konuşmaktan boğazı tahriş olmuş', value: 4 }] },
      { id: 7, text: 'Düşünce Bozukluğu / Fikir Uçuşması: Çağrışımlarda hızlanma, konudan konuya atlama', options: [{ label: '0: Normal düşünce akışı', value: 0 }, { label: '1: Çağrışımlar hızlı', value: 1 }, { label: '2: Konudan konuya atlıyor ama takip edilebiliyor', value: 2 }, { label: '3: Fikir uçuşması, kafiye yapma (klang çağrışım)', value: 3 }, { label: '4: Tam enkoherans, anlaşılamaz düşünce salatası', value: 4 }] },
      { id: 8, text: 'Büyüklük (Grandiyözite) Fikirleri (Çift Puanlı)', options: [{ label: '0: Yok', value: 0 }, { label: '2: Kendine aşırı güven, olağanüstü projeler', value: 2 }, { label: '4: Gerçekçi olmayan zenginlik/güç iddiaları', value: 4 }, { label: '6: Paranoid/grandiyöz hezeyanlar (Peygamberlik, gizli ajanlık)', value: 6 }, { label: '8: Tam megalomanik psikoz', value: 8 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 12, severity: 'Ötimik / Hipomani Eşiği Altı', actionAdvice: 'Mani bulgusu yok veya tedaviyle ötimiye ulaşılmış.' },
      { minScore: 13, maxScore: 19, severity: 'Hipomani / Hafif Manik Epizot', actionAdvice: 'Klinik hipomani. Duygudurum düzenleyici (Lityum/Valproat) dozu kontrol edilmeli; uyku acilen regüle edilmelidir.' },
      { minScore: 20, maxScore: 29, severity: 'Orta Düzeyde Mani', actionAdvice: 'Akut manik dönem. Atipik antipsikotik (Olanzapin/Ketiapin/Aripiprazol) başlanması veya doz artırımı.' },
      { minScore: 30, maxScore: 40, severity: 'Ağır / Psikotik Özellikli Mani', actionAdvice: 'KIRMIZI ALARM: Acil kapalı servis yatışı. Sedatif antipsikotik + IM destek; hasta ve çevresi için güvenlik tedbirleri şarttır.' }
    ],
    reference: 'Young RC, Biggs JT, Ziegler VE, Meyer DA. A rating scale for mania: Reliability, validity and sensitivity. Br J Psychiatry. 1978; Karadağ F, et al. Türkçe geçerlik: 2002.'
  }
];
