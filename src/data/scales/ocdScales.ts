import { ClinicalScale } from '../../types';

export const OCD_SCALES: ClinicalScale[] = [
  {
    id: 'ybocs',
    code: 'Y-BOCS',
    name: 'Yale-Brown Obsesif Kompülsif Ölçeği (Y-BOCS)',
    category: 'Obsesif Kompulsif Bozukluk (OKB) Ölçekleri',
    targetCondition: 'OKB Şiddeti, Süresi, Distres ve Kontrol Düzeyi',
    description: 'Obsesyonların ve kompulsiyonların harcanan zaman, işlevselliğe etkisi, yarattığı sıkıntı, direnme çabası ve kontrol derecesini ölçen uluslararası altın standart derecelendirme ölçeği.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, subscale: 'Obsesyon', text: 'Obsesif düşüncelerle günde ne kadar zaman harcıyorsunuz?', options: [{ label: '0: Hiç (0 saat)', value: 0 }, { label: '1: Hafif (< 1 saat/gün)', value: 1 }, { label: '2: Orta (1-3 saat/gün)', value: 2 }, { label: '3: Ağır (3-8 saat/gün)', value: 3 }, { label: '4: Aşırı (> 8 saat/gün)', value: 4 }] },
      { id: 2, subscale: 'Obsesyon', text: 'Obsesif düşünceleriniz günlük iş ve sosyal yaşamınızı ne kadar engelliyor?', options: [{ label: '0: Hiç engellemiyor', value: 0 }, { label: '1: Hafif engelliyor', value: 1 }, { label: '2: Belirgin engelliyor ama yapılabilir', value: 2 }, { label: '3: Ağır derecede bozuyor', value: 3 }, { label: '4: Tamamen kilitliyor ve işlevsiz kılıyor', value: 4 }] },
      { id: 3, subscale: 'Obsesyon', text: 'Obsesif düşünceleriniz size ne kadar sıkıntı ve ızdırap veriyor?', options: [{ label: '0: Hiç', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta (rahatsız edici)', value: 2 }, { label: '3: Ağır (çok sıkıntı verici)', value: 3 }, { label: '4: Aşırı (dayanılmaz ızdırap)', value: 4 }] },
      { id: 4, subscale: 'Obsesyon', text: 'Obsesif düşüncelerinize ne kadar direnebiliyorsunuz?', options: [{ label: '0: Her zaman başarıyla direnirim', value: 0 }, { label: '1: Çoğu zaman direnirim', value: 1 }, { label: '2: Bazen direnirim', value: 2 }, { label: '3: Nadiren direnirim', value: 3 }, { label: '4: Hiç direnemem, teslim olurum', value: 4 }] },
      { id: 5, subscale: 'Obsesyon', text: 'Obsesif düşünceleriniz üzerinde ne kadar kontrole sahipsiniz?', options: [{ label: '0: Tam kontrole sahibim', value: 0 }, { label: '1: Çok kontrolüm var', value: 1 }, { label: '2: Orta derecede kontrolüm var', value: 2 }, { label: '3: Çok az kontrolüm var', value: 3 }, { label: '4: Hiçbir kontrolüm yok', value: 4 }] },
      { id: 6, subscale: 'Kompulsiyon', text: 'Kompulsif davranışlara (yıkama, kontrol, tekrarlama vb.) günde ne kadar zaman harcıyorsunuz?', options: [{ label: '0: Hiç (0 saat)', value: 0 }, { label: '1: Hafif (< 1 saat/gün)', value: 1 }, { label: '2: Orta (1-3 saat/gün)', value: 2 }, { label: '3: Ağır (3-8 saat/gün)', value: 3 }, { label: '4: Aşırı (> 8 saat/gün)', value: 4 }] },
      { id: 7, subscale: 'Kompulsiyon', text: 'Kompulsif davranışlarınızı yapmanız engellenirse ne kadar yoğun anksiyete yaşarsınız?', options: [{ label: '0: Hiç', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli panik', value: 3 }, { label: '4: Aşırı dayanılmaz dehşet', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Klinik Eşik Altı (Subklinik)', actionAdvice: 'Önemli klinik kısıtlılık yok. Rutin gözlem.' },
      { minScore: 8, maxScore: 15, severity: 'Hafif Düzeyde OKB', actionAdvice: 'Klinik OKB. Bilişsel Davranışçı Terapi (ERP) öncelikli tercih edilmelidir.' },
      { minScore: 16, maxScore: 23, severity: 'Orta Düzeyde OKB', actionAdvice: 'Aktif tedavi şarttır. Yüksek doz SSRI (Sertralin 200mg, Fluvoksamin 300mg vb.) ve haftalık ERP.' },
      { minScore: 24, maxScore: 28, severity: 'Ağır Derecede OKB', actionAdvice: 'Şiddetli bozukluk. Maksimal doz SSRI + Antipsikotik augmentasyonu (Aripiprazol 5-10mg veya Risperidon 1-2mg) + Yoğun BDT.' }
    ],
    reference: 'Goodman WK, Price LH, Rasmussen SA, et al. The Yale-Brown Obsessive Compulsive Scale. I. Development, use, and reliability. Arch Gen Psychiatry. 1989; Karamustafalıoğlu KO, et al. Türkçe geçerlik: 1993.'
  },
  {
    id: 'cybocs',
    code: 'Ç-YBOCS',
    name: 'Yale-Brown Obsesyon Kompülsiyon Ölçeği - Çocuklar İçin (Ç-YBOCS)',
    category: 'Obsesif Kompulsif Bozukluk (OKB) Ölçekleri',
    targetCondition: 'Çocuk ve Ergenlerde OKB Şiddeti ve Aile Katılımı',
    description: 'Yetişkin Y-BOCS ölçeğinin çocuk gelişim düzeyine ve aile içi ritüellere (aile akomodasyonu) uyarlanmış yarı-yapılandırılmış klinisyen görüşmesi.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Çocuğun takıntılı düşüncelerle geçirdiği zaman', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif (< 1 saat/gün)', value: 1 }, { label: '2: Orta (1-3 saat/gün)', value: 2 }, { label: '3: Ağır (3-8 saat/gün)', value: 3 }, { label: '4: Aşırı (> 8 saat/gün)', value: 4 }] },
      { id: 2, text: 'Okul başarısı, ödevler ve oyun aktivitelerindeki aksama', options: [{ label: '0: Aksamıyor', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Okula gidemez halde', value: 4 }] },
      { id: 3, text: 'Takıntılı düşünceler nedeniyle çocuğun yaşadığı sıkıntı ve ağlama', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli öfke ve ağlama krizleri', value: 3 }, { label: '4: Sürekli çaresizlik', value: 4 }] },
      { id: 4, text: 'Kompulsiyonlara harcanan zaman (el yıkama, kapı kontrolü, simetri vb.)', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif (< 1 saat)', value: 1 }, { label: '2: Orta (1-3 saat)', value: 2 }, { label: '3: Ağır (3-8 saat)', value: 3 }, { label: '4: Neredeyse tüm gün', value: 4 }] },
      { id: 5, text: 'Ailenin ritüellere dahil edilmesi (Anne-babaya sürekli soru sorma, ellerini yıkatma vb.)', options: [{ label: '0: Aile dahil edilmiyor', value: 0 }, { label: '1: Bazen sorular soruyor', value: 1 }, { label: '2: Aileyi ritüelleri yapmaya zorluyor', value: 2 }, { label: '3: Aile yaşamı çocuğun takıntılarına göre şekillenmiş', value: 3 }, { label: '4: Aile tamamen çocuğun ritüellerinin esiri olmuş', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Subklinik Çocuk OKB', actionAdvice: 'Hafif takıntılar. Ebeveyn rehberliği ve psiko-eğitim yeterlidir.' },
      { minScore: 6, maxScore: 11, severity: 'Hafif-Orta Düzey Çocuk OKB', actionAdvice: 'Çocuk ve Ergen BDT (ERP) protokolü; ailenin ritüelleri onaylamasını (akomodasyon) durdurma eğitimi.' },
      { minScore: 12, maxScore: 20, severity: 'Ağır Çocuk OKB Tablosu', actionAdvice: 'Çocuk ve Ergen Psikiyatrisi takibinde Sertralin veya Fluoksetin farmakoterapisi + Yoğunlaştırılmış aile katılımlı BDT.' }
    ],
    reference: 'Scahill L, Riddle MA, McSwiggin-Hardin M, et al. Children\'s Yale-Brown Obsessive Compulsive Scale. J Am Acad Child Adolesc Psychiatry. 1997; Yücel B, et al. Türkçe standardizasyonu.'
  }
];
