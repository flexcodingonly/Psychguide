import { ClinicalScale } from '../../types';

export const TRAUMA_SCALES: ClinicalScale[] = [
  {
    id: 'caps',
    code: 'CAPS-5',
    name: 'Klinisyen Tarafından Uygulanan TSSB Ölçeği (CAPS)',
    category: 'Travma Ölçekleri',
    targetCondition: 'Travma Sonrası Stres Bozukluğu (TSSB) Tanısı ve Semptom Şiddeti',
    description: 'DSM-5 TSSB tanı kriterlerinin 4 ana kümesini (Yeniden Deneyimleme, Kaçınma, Biliş ve Duygudurumda Olumsuz Değişiklikler, Aşırı Uyarılma) değerlendiren uluslararası altın standart.',
    timeframe: 'Son 1 ay boyunca',
    questions: [
      { id: 1, subscale: 'Yeniden Deneyimleme', text: 'Travmatik olayın istenmeyen, tekrarlayıcı ve rahatsız edici anıları (flashback / istila)', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif / ayda 1-2 kez', value: 1 }, { label: '2: Orta / haftada 1-2 kez', value: 2 }, { label: '3: Ağır / haftada birkaç kez', value: 3 }, { label: '4: Aşırı / neredeyse her gün', value: 4 }] },
      { id: 2, subscale: 'Yeniden Deneyimleme', text: 'Travmayla ilgili sıkıntı verici kabuslar veya rüyalar', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Her gece kabus', value: 4 }] },
      { id: 3, subscale: 'Kaçınma', text: 'Travmayı hatırlatan anı, düşünce veya duygulardan kaçınma çabası', options: [{ label: '0: Kaçınma yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Tam kaçınma', value: 4 }] },
      { id: 4, subscale: 'Kaçınma', text: 'Travmayı hatırlatan dış uyarıcılardan (kişiler, mekanlar, konuşmalar) kaçınma', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Hayatını kısıtlayıcı kaçınma', value: 4 }] },
      { id: 5, subscale: 'Biliş & Duygudurum', text: 'Kendisi veya dünya hakkında aşırı olumsuz inançlar ("Hiç kimseye güvenilmez", "Ben mahvoldum")', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Aşırı katı inanç', value: 4 }] },
      { id: 6, subscale: 'Aşırı Uyarılma', text: 'Aşırı tetikte olma (hipervijilans) veya sürekli tehlike bekleme', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Sürekli aşırı teyakkuz', value: 4 }] },
      { id: 7, subscale: 'Aşırı Uyarılma', text: 'Ani seslere veya beklenmedik hareketlere karşı abartılı irkilme tepkisi', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Ağır', value: 3 }, { label: '4: Şiddetli sıçrama ve panik', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Subklinik / TSSB Eşiği Altı', actionAdvice: 'TSSB tanı ölçütlerini karşılamıyor.' },
      { minScore: 6, maxScore: 12, severity: 'Hafif Derecede Travmatik Stres', actionAdvice: 'Travma odaklı destekleyici görüşme, uyku düzenlenmesi ve EMDR / BDT değerlendirmesi.' },
      { minScore: 13, maxScore: 20, severity: 'Orta Derecede TSSB', actionAdvice: 'Klinik TSSB. Sertralin veya Paroksetin farmakoterapisi + Travma Odaklı BDT veya EMDR.' },
      { minScore: 21, maxScore: 28, severity: 'Ağır / Kronik TSSB', actionAdvice: 'Kapsamlı travma tedavisi. Prazosin (kabuslar için), duygu düzenleme terapisi ve dissosiyatif özellik takibi.' }
    ],
    reference: 'Weathers FW, Bovin MJ, Lee DJ, et al. The Clinician-Administered PTSD Scale for DSM-5 (CAPS-5). Psychol Assess. 2018.'
  },
  {
    id: 'ctq28',
    code: 'CTQ-28',
    name: 'Çocukluk Çağı Travmaları Ölçeği (Kısa Form CTQ-28)',
    category: 'Travma Ölçekleri',
    targetCondition: 'Çocukluk Çağı İstismar ve İhmal Yaşantılarının Taranması',
    description: 'Duygusal istismar, fiziksel istismar, cinsel istismar, duygusal ihmal ve fiziksel ihmal alt boyutlarını 28 maddede geriye dönük tarayan standart ölçek.',
    timeframe: 'Çocukluk ve ergenlik dönemi (18 yaş öncesi)',
    questions: [
      { id: 1, subscale: 'Duygusal İstismar', text: 'Büyürken ailemden biri beni aşağılar, hakaret eder veya aptal/çirkin olduğumu söylerdi', options: [{ label: '1: Hiçbir zaman', value: 1 }, { label: '2: Nadiren', value: 2 }, { label: '3: Bazen', value: 3 }, { label: '4: Sık sık', value: 4 }, { label: '5: Çok sık', value: 5 }] },
      { id: 2, subscale: 'Fiziksel İstismar', text: 'Büyürken evdekiler beni canımı yakacak, vücudumda morluk veya yara bırakacak kadar döverdi', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 3, subscale: 'Cinsel İstismar', text: 'Büyürken bir yetişkin veya benden büyük biri bana istenmeyen cinsel şekillerde dokundu ya da dokunmaya zorladı', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
      { id: 4, subscale: 'Duygusal İhmal', text: 'Çocukken ailemde kendimi sevilen, korunan ve özel hissederdim (Ters Madde)', options: [{ label: '1: Çok sık (korunurdum)', value: 1 }, { label: '2: Sık sık', value: 2 }, { label: '3: Bazen', value: 3 }, { label: '4: Nadiren', value: 4 }, { label: '5: Hiçbir zaman sevilmezdim', value: 5 }] },
      { id: 5, subscale: 'Fiziksel İhmal', text: 'Çocukken yeterli yiyecek, temiz giysi bulamazdım veya doktora götürülmezdim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] }
    ],
    interpretation: [
      { minScore: 5, maxScore: 9, severity: 'Minimal / Travma Yok', actionAdvice: 'Belirgin çocukluk travması bildirilmedi.' },
      { minScore: 10, maxScore: 16, severity: 'Orta Düzeyde Çocukluk Travması', actionAdvice: 'Kişilerarası ilişkilerde ve duygusal regülasyonda travma kökenli zorluklar olabilir. Şema terapi odaklı yaklaşım.' },
      { minScore: 17, maxScore: 25, severity: 'Ağır Düzeyde Çocukluk İstismarı / İhmali', actionAdvice: 'Kompleks TSSB ve Borderline kişilik örüntüsü riski yüksek. Travma ve bağlanma odaklı uzun süreli psikoterapi endikedir.' }
    ],
    reference: 'Bernstein DP, Fink L. Childhood Trauma Questionnaire: A retrospective self-report manual. 1998; Şar V, et al. CTQ-28 Türkçe uyarlama: 2012.'
  },
  {
    id: 'dbgc',
    code: 'DBGÇ/DDIS',
    name: 'Dissosiyatif Bozukluklar İçin Görüşme Çizelgesi (DBGÇ / DDIS)',
    category: 'Travma Ölçekleri',
    targetCondition: 'Dissosiyatif Kimlik Bozukluğu, Depersonalizasyon ve Dissosiyatif Amnezi',
    description: 'Beden dışı deneyimler, zamanda kayıplar, içsel kimlik parçaları ve yabancılaşma semptomlarını DSM-5 kriterlerine göre araştıran yapılandırılmış görüşme çizelgesi.',
    timeframe: 'Yaşam boyu ve son dönemler',
    questions: [
      { id: 1, text: 'Zaman Kayıpları (Amnezi): Nereye gittiğinizi veya ne yaptığınızı hatırlayamadığınız saatler/günler oluyor mu?', options: [{ label: '0: Hayır, asla', value: 0 }, { label: '1: Nadiren / hafif unutkanlık', value: 1 }, { label: '2: Evet, belirgin saatleri ve olayları hiç hatırlamadığım oluyor', value: 2 }] },
      { id: 2, text: 'Depersonalizasyon: Kendinizi dışarıdan bir yabancı gibi veya bedeninizin dışından izliyormuş gibi hissetme', options: [{ label: '0: Asla', value: 0 }, { label: '1: Çok nadir yorgunken', value: 1 }, { label: '2: Sık sık bedenime yabancılaşma hissediyorum', value: 2 }] },
      { id: 3, text: 'Dereilizasyon: Çevrenin gerçek dışı, bir rüya, sis perdesi veya film sahnesi gibi görünmesi', options: [{ label: '0: Asla', value: 0 }, { label: '1: Nadiren', value: 1 }, { label: '2: Evet, dünya bana sık sık yapay ve sisli geliyor', value: 2 }] },
      { id: 4, text: 'İçsel Sesler / Çoklu Parçalar: Zihninizde birbirleriyle konuşan veya sizinle tartışan farklı kişilik parçaları / iç sesler var mı?', options: [{ label: '0: Hayır', value: 0 }, { label: '1: Kararsızlık anlarında iç konuşmalar', value: 1 }, { label: '2: Evet, benden bağımsız farklı yaş ve mizaçta içsel parçalar var', value: 2 }] },
      { id: 5, text: 'Eşyaların Sahipsizliği: Satın aldığınızı hatırlamadığınız giysiler veya yazdığınızı hatırlamadığınız notlar bulur musunuz?', options: [{ label: '0: Hayır', value: 0 }, { label: '1: Nadiren unutkanlıkla', value: 1 }, { label: '2: Evet, bana ait olmayan eşyaları odamda buluyorum', value: 2 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 2, severity: 'Normal Dissosiyatif Yaşantı', actionAdvice: 'Patolojik dissosiyasyon saptanmadı.' },
      { minScore: 3, maxScore: 5, severity: 'Hafif-Orta Derecede Dissosiyasyon', actionAdvice: 'Depersonalizasyon-derealizasyon sendromu. Topraklanma (grounding) teknikleri ve anksiyete yönetimi.' },
      { minScore: 6, maxScore: 10, severity: 'Yüksek Olasılıklı Dissosiyatif Kimlik Bozukluğu (DKB)', actionAdvice: 'İleri derecede yapısal dissosiyasyon. Deneyimli bir travma ve dissosiyasyon psikoterapisti tarafından aşamalı travma terapisi (faz odaklı terapi) yürütülmelidir.' }
    ],
    reference: 'Ross CA, et al. The Dissociative Disorders Interview Schedule. Am J Psychiatry. 1989; Şar V, et al. DBGÇ Türkçe geçerlik: 1996.'
  },
  {
    id: 'icg_yas',
    code: 'ICG',
    name: 'Komplike Yas Görüşme Ölçeği (ICG)',
    category: 'Travma Ölçekleri',
    targetCondition: 'Uzatılmış / Komplike Yas Bozukluğu Taraması',
    description: 'Bir kaybın ardından en az 12 ay geçmesine rağmen süren derin özlem, acı, inkar, öfke ve hayata yeniden uyum sağlayamama durumunu ölçen 19 maddelik ölçek.',
    timeframe: 'Kayıptan sonraki mevcut dönem',
    questions: [
      { id: 1, text: 'Kaybettiğim kişiye karşı içimi kavuran bir özlem ve hasret duyuyorum', options: [{ label: '0: Neredeyse hiç', value: 0 }, { label: '1: Nadiren', value: 1 }, { label: '2: Bazen', value: 2 }, { label: '3: Çoğu zaman', value: 3 }, { label: '4: Her an, dayanılmaz şekilde', value: 4 }] },
      { id: 2, text: 'Onun öldüğünü kabul etmekte büyük zorluk çekiyorum, sanki hala yaşıyormuş gibi geliyor', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 3, text: 'O öldüğünden beri hayatımın anlamsız ve bomboş olduğunu hissediyorum', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 4, text: 'Onunla birlikte kendimin bir parçasının da öldüğünü düşünüyorum', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] },
      { id: 5, text: 'Onun yokluğuna olan öfkemden veya isyanımdan kurtulamıyorum', options: [{ label: '0', value: 0 }, { label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 6, severity: 'Normal / Entegre Edilmiş Yas Süreci', actionAdvice: 'Sağlıklı yas dinamikleri; destekleyici sosyal çevre yeterlidir.' },
      { minScore: 7, maxScore: 12, severity: 'Riskli / Uzamış Yas Belirtileri', actionAdvice: 'Kaybın kabullenilmesinde tıkanma. Yas odaklı psikolojik danışmanlık ve duygusal ifade desteği.' },
      { minScore: 13, maxScore: 20, severity: 'Komplike Yas Bozukluğu (Prolonged Grief Disorder)', actionAdvice: 'Klinik Komplike Yas (DSM-5-TR PGD). Yapılandırılmış Komplike Yas Terapisi (CGT) ve eşlik eden majör depresyon için farmakoterapi.' }
    ],
    reference: 'Prigerson HG, Maciejewski PK, Reynolds CF, et al. Inventory of Complicated Grief. Psychiatry Res. 1995; Bildik T, et al. Türkçe standardizasyonu.'
  },
  {
    id: 'lec5',
    code: 'LEC-5',
    name: 'Yaşam Olayları Kontrol Listesi - 5 (LEC-5)',
    category: 'Travma Ölçekleri',
    targetCondition: 'TSSB Tanı Ölçütü A Kriteri Travmatik Yaşam Olayları Taraması',
    description: 'Doğal afet, yangın, ağır kaza, fiziksel saldırı, silahlı çatışma, cinsel taciz ve ani beklenmedik ölüm gibi 17 potansiyel travmatik olayı tarayan standart DSM-5 envanteri.',
    timeframe: 'Tüm yaşam boyu',
    questions: [
      { id: 1, text: 'Doğal afet (deprem, sel, kasırga, büyük yangın vb.)', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Tanık oldum (1)', value: 1 }, { label: 'Doğrudan başıma geldi (2)', value: 2 }] },
      { id: 2, text: 'Ciddi bir kaza (büyük trafik kazası, tren/uçak kazası, iş kazası)', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Tanık oldum (1)', value: 1 }, { label: 'Doğrudan başıma geldi (2)', value: 2 }] },
      { id: 3, text: 'Fiziksel saldırı (silah, bıçak, darp, rehin alınma vb.)', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Tanık oldum (1)', value: 1 }, { label: 'Doğrudan başıma geldi (2)', value: 2 }] },
      { id: 4, text: 'Cinsel saldırı veya tecavüz girişimi', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Öğrendim (1)', value: 1 }, { label: 'Doğrudan başıma geldi (2)', value: 2 }] },
      { id: 5, text: 'Savaş alanı, terör olayı veya askeri çatışma deneyimi', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Tanık oldum (1)', value: 1 }, { label: 'Doğrudan başıma geldi (2)', value: 2 }] },
      { id: 6, text: 'Ölümcül veya ağır bir hastalık/tıbbi operasyon teşhisi', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Yakınımda oldu (1)', value: 1 }, { label: 'Doğrudan başıma geldi (2)', value: 2 }] },
      { id: 7, text: 'Bir yakının ani, beklenmedik veya şiddet içeren ölümü', options: [{ label: 'Başıma gelmedi (0)', value: 0 }, { label: 'Haber aldım (1)', value: 1 }, { label: 'Doğrudan tanık oldum (2)', value: 2 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 2, severity: 'Düşük Travmatik Maruziyet', actionAdvice: 'Kritik travma öyküsü sınırlı.' },
      { minScore: 3, maxScore: 6, severity: 'Orta Düzey Travmatik Yaşam Olayı', actionAdvice: 'Travma öyküsü pozitif. CAPS-5 veya PCL-5 ile travma sonrası semptomlar taranmalıdır.' },
      { minScore: 7, maxScore: 14, severity: 'Çoklu / Kümülatif Travmatik Maruziyet', actionAdvice: 'Yüksek kümülatif travma yükü. Kompleks TSSB, dissosiyasyon ve intihar riski yönünden derinlemesine klinik inceleme şarttır.' }
    ],
    reference: 'Weathers FW, Blake DD, Schnurr PP, et al. The Life Events Checklist for DSM-5 (LEC-5). National Center for PTSD. 2013; Boysan M, et al. LEC Türkçe geçerlik: 2017.'
  }
];
