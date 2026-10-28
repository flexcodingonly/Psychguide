import { ClinicalScale } from '../../types';

export const SCHEMA_SCALES: ClinicalScale[] = [
  {
    id: 'yso_kf3',
    code: 'YSÖ-KF3',
    name: 'Young Şema Ölçeği (YSÖ-KF3)',
    category: 'Şema Ölçekleri',
    targetCondition: 'Erken Dönem Uyumsuz Şemaların (Terk Edilme, Kusurluluk, Başarısızlık vb.) Kapsamlı Taraması',
    description: 'Şema Terapinin temel tanı aracı olan, 5 şema alanında (Ayrılma ve Reddedilme, Zedelenmiş Özerklik, Zedelenmiş Sınırlar, Başkaları Yönelimlilik, Aşırı Tetikte Olma) uluslararası altın standart kısa form.',
    timeframe: 'Tüm yaşam boyu kalıcı inançlar',
    questions: [
      { id: 1, subscale: 'Terk Edilme', text: 'Önem verdiğim insanların beni bir gün bırakıp gideceğinden korkarım', options: [{ label: '1: Benim için tamamen yanlış', value: 1 }, { label: '2: Çoğunlukla yanlış', value: 2 }, { label: '3: Kısmen doğru', value: 3 }, { label: '4: Oldukça doğru', value: 4 }, { label: '5: Çoğunlukla doğru', value: 5 }, { label: '6: Beni mükemmel anlatıyor', value: 6 }] },
      { id: 2, subscale: 'Kuşkuculuk / Kötüye Kullanılma', text: 'İnsanların arkamdan iş çevireceğini veya beni sömüreceğini hissederim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }] },
      { id: 3, subscale: 'Duygusal Yoksunluk', text: 'Kimsenin beni gerçekten derinden anlayacağını, seveceğini ve sarılacağını düşünmüyorum', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }] },
      { id: 4, subscale: 'Kusurluluk / Utanç', text: 'Gerçek benliğimi görselerdi beni kimse sevemezdi, içimde büyük bir kusur var', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }] },
      { id: 5, subscale: 'Sosyal İzolasyon', text: 'Hiçbir gruba ait değilim, her zaman dışarıda kalan yabancı gibiyim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }] },
      { id: 6, subscale: 'Başarısızlık', text: 'İş ve okul hayatında başkalarına göre çok daha beceriksiz ve yetersizim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }] },
      { id: 7, subscale: 'Yüksek Standartlar', text: 'Her şeyi mükemmel yapmalıyım, en küçük kusura tahammülüm yoktur', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }] }
    ],
    interpretation: [
      { minScore: 7, maxScore: 14, severity: 'Normal / Sağlıklı Şema Düzeyi', actionAdvice: 'Kişinin erken dönem uyumsuz şemaları aktif değildir. Sağlıklı yetişkin modu baskındır.' },
      { minScore: 15, maxScore: 28, severity: 'Orta Düzeyde Şema Tetiklenmesi', actionAdvice: 'Belirli alanlarda (duygusal yoksunluk / terk edilme) incinmiş çocuk modu tetikleniyor. Bireysel Şema Terapi önerilir.' },
      { minScore: 29, maxScore: 42, severity: 'Ağır Çoklu Uyumsuz Şema Ağı', actionAdvice: 'Kişilik işlevselliğini bozan yaygın erken dönem uyumsuz şemalar. Yaşantısal teknikler (imajinasyonla yeniden senaryolaştırma, sandalye diyaloğu) içeren kapsamlı Şema Terapi.' }
    ],
    reference: 'Young JE, Klosko JS, Weishaar ME. Schema Therapy: A Practitioner\'s Guide. 2003; Soygüt G, et al. YSÖ-KF3 Türkçe uyarlama: 2009.'
  },
  {
    id: 'bcsl',
    code: 'BCSL',
    name: 'Bilişsel Çarpıtmalar Soru Listesi (BCSL)',
    category: 'Şema Ölçekleri',
    targetCondition: 'Bilişsel Hatalar (Hep ya da Hiç, Zihin Okuma, Felaketleştirme, Aşırı Genelleme)',
    description: 'Bilişsel Terapide tanımlanan otomatik düşünce çarpıtmalarının sıklığını ve inanılırlık derecesini ölçen klinik liste.',
    timeframe: 'Son 1 ay boyunca',
    questions: [
      { id: 1, text: 'Hep ya da Hiç Düşüncesi: Bir şey kusursuz değilse tamamen berbat ve başarısızdır', options: [{ label: '1: Asla aklıma gelmez', value: 1 }, { label: '2: Nadiren', value: 2 }, { label: '3: Bazen', value: 3 }, { label: '4: Sık sık', value: 4 }, { label: '5: Neredeyse her zaman', value: 5 }] },
      { id: 2, text: 'Zihin Okuma: İnsanların benim hakkımda kötü şeyler düşündüğünü hiçbir kanıt olmadan bilirim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 3, text: 'Felaketleştirme: Ufak bir aksilikte en kötü senaryonun gerçekleşeceğine inanırım', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 4, text: '-Meli / -Malı Cümleleri: Kendime ve başkalarına karşı katı "asla yapmamalıyım / mutlaka yapmalı" kurallarım vardır', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 5, text: 'Kişiselleştirme: Benim kontrolümde olmayan kötü olayların suçlusu olarak kendimi görürüm', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 6, text: 'Aşırı Genelleme: Bir kez ters giden bir şeyin her zaman ters gideceğini düşünürüm', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] }
    ],
    interpretation: [
      { minScore: 6, maxScore: 12, severity: 'Gerçekçi / Esnek Düşünce Yapısı', actionAdvice: 'Bilişsel esneklik yüksek; çarpıtmalar sınırlı.' },
      { minScore: 13, maxScore: 21, severity: 'Orta Düzey Bilişsel Çarpıtma Eğilimi', actionAdvice: 'Stres altında otomatik düşünce tuzaklarına düşme. BDT otomatik düşünce kayıt formu (3 sütun tekniği) önerilir.' },
      { minScore: 22, maxScore: 30, severity: 'Yoğun Bilişsel Çarpıtmalar', actionAdvice: 'Katı bilişsel filtreler depresyon ve kaygıyı besliyor. BDT bilişsel yeniden yapılandırma ve kanıt inceleme çalışmaları.' }
    ],
    reference: 'Beck AT. Cognitive Therapy of Depression. 1979; Leahy RL. Cognitive Therapy Techniques. 2003.'
  },
  {
    id: 'pbq_kf',
    code: 'PBQ-KF',
    name: 'Kişilik İnançları Ölçeği - Kısa Form (PBQ-KF)',
    category: 'Şema Ölçekleri',
    targetCondition: 'Kişilik Bozukluklarına Özgü Temel Çekirdek İnançlar',
    description: 'Kaçıngan, bağımlı, obsesif-kompulsif, pasif-agresif, paranoid, antisosyal, narsisistik, histriyonik ve sınırda (borderline) temel inançları ölçen Beck BDT envanteri.',
    timeframe: 'Genel yaşam inançları',
    questions: [
      { id: 1, subscale: 'Kaçıngan', text: 'İnsanlar beni gerçekten tanırlarsa benden hoşlanmazlar ve uzaklaşırlar', options: [{ label: '0: Hiç inanmıyorum', value: 0 }, { label: '1: Çok az', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Çok inanıyorum', value: 3 }, { label: '4: Tamamen inanıyorum', value: 4 }] },
      { id: 2, subscale: 'Bağımlı', text: 'Kararlarımı verebilmek ve hayatımı sürdürmek için mutlaka güçlü birine ihtiyacım var', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 3, subscale: 'Obsesif', text: 'En ufak bir hata felakettir; her şey tam bir düzen ve kontrol altında olmalıdır', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 4, subscale: 'Paranoid', text: 'İnsanların gizli amaçları vardır; fırsat bulurlarsa beni arkamdan vururlar', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 5, subscale: 'Narsisistik', text: 'Ben sıradan insanlardan çok daha özel ve üstünüm, ayrıcalıklı muameleyi hak ediyorum', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 6, subscale: 'Borderline', text: 'Eninde sonunda en sevdiklerim beni terk edecek ve yapayalnız kalacağım', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 6, severity: 'Uyumlu Kişilik İnançları', actionAdvice: 'Rijit kişilik inançları saptanmadı.' },
      { minScore: 7, maxScore: 14, severity: 'Orta Düzeyde Şematik İnançlar', actionAdvice: 'Belirli boyutlarda (bağımlılık/kaçınganlık) yükselme. Bilişsel Davranışçı Terapi.' },
      { minScore: 15, maxScore: 24, severity: 'Yüksek Rijit Kişilik İnançları (Eksen II Yatkınlığı)', actionAdvice: 'Kişilik bozukluğu örüntüsü. Uzun süreli Şema Terapi veya Diyalektik Davranış Terapisi (DBT).' }
    ],
    reference: 'Beck AT, Butler AC, Brown GK, et al. Dysfunctional beliefs discriminating personality disorders: PBQ-SF. Behav Res Ther. 2007; Taymur İ, et al. Türkçe geçerlik: 2014.'
  }
];
