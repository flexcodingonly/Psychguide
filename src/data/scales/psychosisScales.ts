import { ClinicalScale } from '../../types';

export const PSYCHOSIS_SCALES: ClinicalScale[] = [
  {
    id: 'icgoru',
    code: 'SAI',
    name: 'İçgörü Değerlendirme Ölçeği (SAI / SUMD)',
    category: 'Psikoz Ölçekleri',
    targetCondition: 'Ruhsal Hastalığın Farkında Olma, Belirtileri Tanıma ve Tedavi Uyumu',
    description: 'Psikotik ve bipolar hastalarda hastalığın farkında olma, semptomları patolojik kabul etme ve ilaç uyumu kararlılığını ölçen 8 maddelik içgörü ölçeği.',
    timeframe: 'Klinik görüşme anı',
    questions: [
      { id: 1, text: 'Ruhsal bir hastalığı veya sorunu olduğunu kabul etme', options: [{ label: '0: Hiç kabul etmiyor (tam inkar)', value: 0 }, { label: '1: Kısmen veya tereddütlü kabul ediyor', value: 1 }, { label: '2: Ruhsal hastalığı olduğunu tam olarak biliyor ve kabul ediyor', value: 2 }] },
      { id: 2, text: 'Yaşadığı sıra dışı algı ve inançların (sanrı/halüsinasyon) hastalığa bağlı olduğunu ayırt edebilme', options: [{ label: '0: Gerçek olduğuna kesin inanıyor', value: 0 }, { label: '1: Bazen şüphe duyuyor veya başkalarının bunu hastalık gördüğünü biliyor', value: 1 }, { label: '2: Belirtilerin beyninden/hastalığından kaynaklandığını tam biliyor', value: 2 }] },
      { id: 3, text: 'İlaç tedavisinin gerekliliğini ve faydasını onaylama', options: [{ label: '0: İlacı reddediyor, gereksiz ve zararlı görüyor', value: 0 }, { label: '1: Yalnızca baskı ile veya isteksiz kabul ediyor', value: 1 }, { label: '2: İlaçların iyileşmesi için vazgeçilmez olduğunu biliyor', value: 2 }] },
      { id: 4, text: 'Gelecekte nüks belirtileri olursa hekime başvurma bilinci', options: [{ label: '0: Asla hekime gitmeyeceğini söylüyor', value: 0 }, { label: '1: Yakınları ısrar ederse gidebilir', value: 1 }, { label: '2: Kendi isteğiyle doktora başvuracağını ifade ediyor', value: 2 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 2, severity: 'Tam İçgörü Yokluğu (Anosognozi)', actionAdvice: 'Hastalık inkarı ve yüksek tedavi uyumsuzluğu riski. İstemsiz yatış, depo/uzun etkili antipsikotik (LAI) düşünülmelidir.' },
      { minScore: 3, maxScore: 5, severity: 'Kısmi / Entelektüel İçgörü', actionAdvice: 'Hastalığı kavramsal olarak biliyor ancak duygusal/davranışsal olarak tam içselleştirememiş. İçgörü artırıcı psikoeğitim uygulanmalıdır.' },
      { minScore: 6, maxScore: 8, severity: 'Tam / Gerçek İçgörü', actionAdvice: 'Mükemmel içgörü düzeyi. Tedavi uyumu yüksek; nüks erken uyarı belirtileri planı hazırlanmalıdır.' }
    ],
    reference: 'David AS. Insight and psychosis. Br J Psychiatry. 1990; Amador XF, et al. Scale to Assess Unawareness of Mental Disorder (SUMD). 1993.'
  },
  {
    id: 'bprs',
    code: 'BPRS',
    name: 'Kısa Psikiyatrik Değerlendirme Ölçeği (BPRS)',
    category: 'Psikoz Ölçekleri',
    targetCondition: 'Majör Psikiyatrik Bozukluklarda Şiddet ve Antipsikotik Tedavi Yanıtı',
    description: 'Somatik kaygı, anksiyete, duygusal içe çekilme, kavramsal dağınıklık, suçluluk duyguları, hezeyanlar ve halüsinasyonları içeren 18 maddelik referans klinisyen ölçeği.',
    timeframe: 'Son 2-3 gün ve görüşme anı',
    questions: [
      { id: 1, text: 'Kavramsal Dağınıklık: Düşünce sürecinde teğetsellik, çağrışım çözüklüğü, enkoherans', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-Ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır (kelime salatası)', value: 7 }] },
      { id: 2, text: 'Şüphecilik / Kötülük Görme İnancı (Perseküsyon)', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-Ağır', value: 5 }, { label: '6: Ağır hezeyan', value: 6 }, { label: '7: Aşırı persekütif hezeyan', value: 7 }] },
      { id: 3, text: 'Halüsinatuar Davranış: İşitsel, görsel veya dokunsal halüsinasyonlara yanıt verme', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-Ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Sürekli seslerle konuşma', value: 7 }] },
      { id: 4, text: 'Büyüklük (Grandiyözite) Fikirleri: Olağanüstü güçler, zenginlik veya ilahi görev inancı', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-Ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 5, text: 'Duygusal Küntlük: Yüz ifadesi, mimikler ve ses tonunda donukluk', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-Ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Tam duygusal donukluk', value: 7 }] },
      { id: 6, text: 'Düşmanca Tutum (Hostilite): Muayene edene ve personele karşı öfke, saldırganlık ve hakaret', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-Ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Şiddet davranışı', value: 7 }] }
    ],
    interpretation: [
      { minScore: 6, maxScore: 12, severity: 'Normal / Minimal Belirti', actionAdvice: 'Klinik remisyon veya hafif rezidüel belirtiler.' },
      { minScore: 13, maxScore: 24, severity: 'Hafif-Orta Derecede Psikopatoloji', actionAdvice: 'Antipsikotik dozu gözden geçirilmeli; yan etkiler ve uyum taranmalıdır.' },
      { minScore: 25, maxScore: 36, severity: 'Belirgin Psikotik Tablo', actionAdvice: 'Aktif psikotik alevlenme. Antipsikotik titrasyonu, sedasyon ve yakın klinik güvenlik.' },
      { minScore: 37, maxScore: 42, severity: 'Şiddetli Akut Psikotik Kriz', actionAdvice: 'Acil yatış, IM antipsikotik/lorazepam kombinasyonu ve agresyon protokolü.' }
    ],
    reference: 'Overall JE, Gorham DR. The Brief Psychiatric Rating Scale (BPRS). Psychol Rep. 1962.'
  },
  {
    id: 'panss',
    code: 'PANSS',
    name: 'Pozitif ve Negatif Sendrom Ölçeği (PANSS)',
    category: 'Psikoz Ölçekleri',
    targetCondition: 'Şizofreni ve Psikotik Bozukluklarda Pozitif, Negatif ve Genel Belirti Şiddeti',
    description: 'Pozitif Sendrom (P1-P7), Negatif Sendrom (N1-N7) ve Genel Psikopatoloji (G1-G16) olmak üzere 30 maddeden oluşan psikoz araştırmalarında altın standart ölçek.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, subscale: 'Pozitif', text: 'P1: Sanrılar (Hezeyanlar) - Gerçeğe aykırı, sarsılmaz yanlış inançlar', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 2, subscale: 'Pozitif', text: 'P2: Kavramsal Dağınıklık - Düşünce akışı ve organizasyonunda bozulma', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 3, subscale: 'Pozitif', text: 'P3: Halüsinasyonlar - Dış uyarana bağlı olmayan algılar (işitsel sesler vb.)', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 4, subscale: 'Negatif', text: 'N1: Künt Duygulanım - Yüz mimikleri ve duygu ifadesinde azalma', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 5, subscale: 'Negatif', text: 'N2: Duygusal İçe Çekilme - İnsanlarla duygusal bağ kuramama', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 6, subscale: 'Negatif', text: 'N4: Pasif-Apatik Sosyal İçe Çekilme - Sosyal ilişkilerden tamamen kopma', options: [{ label: '1: Yok', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır', value: 7 }] },
      { id: 7, subscale: 'Genel', text: 'G12: İçgörü Yokluğu - Hastalığını inkar etme ve tedaviyi reddetme', options: [{ label: '1: Yok (tam içgörü)', value: 1 }, { label: '2: Çok hafif', value: 2 }, { label: '3: Hafif', value: 3 }, { label: '4: Orta', value: 4 }, { label: '5: Orta-ağır', value: 5 }, { label: '6: Ağır', value: 6 }, { label: '7: Çok ağır (tam inkar)', value: 7 }] }
    ],
    interpretation: [
      { minScore: 7, maxScore: 14, severity: 'Normal / Minimal Rezidüel Psikoz', actionAdvice: 'Stabil idame evresi. Pozitif belirtiler kontrol altındadır.' },
      { minScore: 15, maxScore: 28, severity: 'Orta Derecede Psikotik Sendrom', actionAdvice: 'Klinik semptom yükü mevcuttur. Antipsikotik doz optimizasyonu ve negatif semptomlar için sosyal beceri terapisi.' },
      { minScore: 29, maxScore: 49, severity: 'Ağır Pozitif ve Negatif Psikotik Tablo', actionAdvice: 'Akut alevlenme veya tedaviye direnç (Klozapin endikasyonu düşünülmeli).' }
    ],
    reference: 'Kay SR, Fiszbein A, Opler LA. The Positive and Negative Syndrome Scale (PANSS) for schizophrenia. Schizophr Bull. 1987; Kostakoğlu A, et al. PANSS Türkçe uyarlama: 1999.'
  }
];
