import { ClinicalScale } from '../../types';

export const COGNITIVE_SCALES: ClinicalScale[] = [
  {
    id: 'dusunce_ozellikleri',
    code: 'DÖÖ',
    name: 'Düşünce Özellikleri Ölçeği (Bilişsel Çarpıtmalar & TAF)',
    category: 'Bilişsel Değerlendirme Ölçekleri',
    targetCondition: 'Ruminasyon, Obsesif Şüphe ve Düşünce-Eylem Kaynaşması (TAF)',
    description: 'Kişinin kendi düşüncelerine atfettiği ahlaki önem, zihinsel ruminasyon ve düşüncelerin gerçekliği etkileyeceği (büyüsel düşünme) inancını ölçen ölçek.',
    timeframe: 'Genel düşünce alışkanlıkları',
    questions: [
      { id: 1, text: 'Aklımdan kötü bir şey geçirmek, o kötü şeyi fiilen yapmak kadar günahtır / ahlaksızcadır (Ahlaki TAF)', options: [{ label: '1: Hiç katılmıyorum', value: 1 }, { label: '2: Biraz', value: 2 }, { label: '3: Orta derecede', value: 3 }, { label: '4: Oldukça', value: 4 }, { label: '5: Tamamen katılıyorum', value: 5 }] },
      { id: 2, text: 'Bir yakınımın kaza geçireceğini düşünürsem, bu düşüncem onun kaza yapma ihtimalini artırır (Olasılık TAF)', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 3, text: 'Geçmişte yaptığım bir hatayı saatlerce, günlerce zihnimde tekrar tekrar evirip çeviririm (Ruminasyon)', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 4, text: 'Zihnime gelen tüm düşünceleri kontrol etmek ve istenmeyenleri tamamen silmek zorundayım', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 5, text: 'Zihnimde bir şüphe varsa, o şüphe kesinleşene kadar başka hiçbir şeye odaklanamam', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] }
    ],
    interpretation: [
      { minScore: 5, maxScore: 10, severity: 'Normal Bilişsel Ayrışma (Metakognisyon)', actionAdvice: 'Kişi düşünceleriyle arasına mesafe koyabilmekte, düşünceyi eylemden ayırt edebilmektedir.' },
      { minScore: 11, maxScore: 17, severity: 'Orta Düzey Düşünce-Eylem Kaynaşması ve Ruminasyon', actionAdvice: 'Depresyon ve anksiyeteyi uzatan zihinsel geviş getirme. Metakognitif Terapi (MCT) teknikleri.' },
      { minScore: 18, maxScore: 25, severity: 'Şiddetli Büyüsel İnanç ve Düşünce Baskılama', actionAdvice: 'OKB ve anksiyete krizlerini tetikleyen yoğun düşünce füzyonu. Düşünce kabulü ve defüzyon (bilişsel ayrışma) çalışmaları.' }
    ],
    reference: 'Shafran R, Thordarson DS, Rachman S. Thought-action fusion in obsessive compulsive disorder. J Anxiety Disord. 1996; Yorulmaz O, et al. Türkçe standardizasyonu.'
  }
];
