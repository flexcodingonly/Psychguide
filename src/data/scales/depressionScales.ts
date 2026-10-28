import { ClinicalScale } from '../../types';

export const DEPRESSION_SCALES: ClinicalScale[] = [
  {
    id: 'bss',
    code: 'BSS',
    name: 'Beck İntihar Düşüncesi Ölçeği (BSS)',
    category: 'Depresyon Ölçekleri',
    targetCondition: 'İntihar Düşüncesi, Niyeti ve Eyleme Geçme Riski',
    description: 'İntihar düşüncelerinin sıklığı, süresi, kontrol edilebilirliği, veda mektubu, hazırlık ve ölüm isteğini değerlendiren kritik güvenlik ölçeği.',
    timeframe: 'Son 1 hafta ve şu an',
    questions: [
      {
        id: 1,
        text: 'Yaşama Arzusu',
        options: [
          { label: '0: Orta dereceden güçlüye kadar', value: 0 },
          { label: '1: Zayıf', value: 1 },
          { label: '2: Hiç yok', value: 2 }
        ]
      },
      {
        id: 2,
        text: 'Ölme Arzusu',
        options: [
          { label: '0: Hiç yok', value: 0 },
          { label: '1: Zayıf', value: 1 },
          { label: '2: Orta dereceden güçlüye kadar', value: 2 }
        ]
      },
      {
        id: 3,
        text: 'Yaşam / Ölüm Nedenleri Dengesi',
        options: [
          { label: '0: Yaşamak için nedenler ölmek için olanlardan daha ağır basıyor', value: 0 },
          { label: '1: Her ikisi de birbirine eşit', value: 1 },
          { label: '2: Ölmek için nedenler yaşamak için olanlardan daha ağır basıyor', value: 2 }
        ]
      },
      {
        id: 4,
        text: 'Aktif İntihar Düşüncesi veya Girişimi İsteği',
        options: [
          { label: '0: Hiç yok', value: 0 },
          { label: '1: Zayıf', value: 1 },
          { label: '2: Orta dereceden güçlüye kadar', value: 2 }
        ]
      },
      {
        id: 5,
        text: 'Pasif İntihar Eğilimi (Örn: Kazara ölme, uyanmama arzusu, hayat kurtarıcı tedaviyi reddetme)',
        options: [
          { label: '0: Hayatımı kurtarmak için gereken önlemleri alırım', value: 0 },
          { label: '1: Yaşamı ya da ölümü şansa bırakırım', value: 1 },
          { label: '2: Hayatımı kurtaracak adımlardan kaçınırım (pasif ölüm arzusu)', value: 2 }
        ]
      },
      {
        id: 6,
        text: 'İntihar Düşüncelerinin Süresi ve Sıklığı',
        options: [
          { label: '0: Kısa, geçici dönemler', value: 0 },
          { label: '1: Uzun süren dönemler', value: 1 },
          { label: '2: Sürekli (neredeyse aralıksız)', value: 2 }
        ]
      },
      {
        id: 7,
        text: 'Düşüncelerin Kontrol Edilebilirliği',
        options: [
          { label: '0: Düşünceleri kolayca kontrol edebilirim', value: 0 },
          { label: '1: Kontrol etmekte biraz zorlanıyorum', value: 1 },
          { label: '2: Hiç kontrol edemiyorum, zihnime hücum ediyor', value: 2 }
        ]
      },
      {
        id: 8,
        text: 'Girişim İçin Planlama veya Yöntem Belirleme',
        options: [
          { label: '0: Hiçbir planım veya yöntemim yok', value: 0 },
          { label: '1: Bir yöntem düşündüm ancak detaylandırmadım', value: 1 },
          { label: '2: Belirli bir yöntem ve ayrıntılı bir planım var', value: 2 }
        ]
      },
      {
        id: 9,
        text: 'Yönteme Ulaşılabilirlik ve Girişim Cesareti',
        options: [
          { label: '0: Yöntem elimde yok veya cesaretim yok', value: 0 },
          { label: '1: Yönteme ulaşmak zaman alır / cesaretimden emin değilim', value: 1 },
          { label: '2: Yöntem/araç elimde hazır ve kendimi bunu yapmaya hazır hissediyorum', value: 2 }
        ]
      },
      {
        id: 10,
        text: 'Son Hazırlıklar (Veda mektubu, eşyaları dağıtma, vasiyet vb.)',
        options: [
          { label: '0: Hiçbiri yok', value: 0 },
          { label: '1: Aklımdan geçirdim veya kısmen planladım', value: 1 },
          { label: '2: Veda notu yazdım veya somut hazırlıkları tamamladım', value: 2 }
        ]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 2, severity: 'Düşük İntihar Riski', actionAdvice: 'Rutin klinik takip. Hastanın koruyucu faktörlerini (aile, inanç, gelecek hedefleri) güçlendiriniz.' },
      { minScore: 3, maxScore: 6, severity: 'Orta Düzey İntihar Riski', actionAdvice: 'Aktif güvenlik planı (Stanley-Brown Safety Plan) oluşturulmalıdır. İlaç miktarları kısıtlanmalı, yakın aile desteği sağlanmalıdır.' },
      { minScore: 7, maxScore: 12, severity: 'Yüksek İntihar Riski', actionAdvice: 'Acil psikiyatri uzman değerlendirmesi, gerekirse acil servis gözlemi veya yatış endikasyonu. Yalnız bırakılmamalıdır.' },
      { minScore: 13, maxScore: 20, severity: 'İleri Derecede Kritik Acil Risk (İntihar Krizi)', actionAdvice: 'KIRMIZI ALARM: Derhal 112 / kapalı psikiyatri servisi yatışı. Kesici/delici alet ve ilaç erişimi ivedilikle engellenmeli, 1\'e 1 sürekli refakat sağlanmalıdır.' }
    ],
    reference: 'Beck AT, Kovacs M, Weissman A. Assessment of suicidal intention: the Scale for Suicide Ideation. J Consult Clin Psychol. 1979; Dilbaz N, et al. BSS Türkçe geçerlik: 1995.'
  },
  {
    id: 'edsdo',
    code: 'EDSDÖ',
    name: 'Edinburgh Doğum Sonrası Depresyon Ölçeği (EDSDÖ / EPDS)',
    category: 'Depresyon Ölçekleri',
    targetCondition: 'Postpartum Depresyon ve Perinatal Duygudurum Bozukluğu',
    description: 'Doğum sonrası annelerde depresyon riskini belirlemek için geliştirilmiş 10 maddelik öz-bildirim ölçeği. Anne-bebek güvenliği için hayati önemdedir.',
    timeframe: 'Son 7 gün boyunca',
    questions: [
      { id: 1, text: 'Gülebiliyor ve olayların komik tarafını görebiliyorum', options: [{ label: 'Her zaman olduğu kadar', value: 0 }, { label: 'Şimdi pek o kadar değil', value: 1 }, { label: 'Kesinlikle şimdi o kadar değil', value: 2 }, { label: 'Artık hiç değil', value: 3 }] },
      { id: 2, text: 'Geleceğe heves ve zevkle bakabiliyorum', options: [{ label: 'Her zaman olduğu kadar', value: 0 }, { label: 'Eskisinden biraz daha az', value: 1 }, { label: 'Eskisinden kesinlikle daha az', value: 2 }, { label: 'Neredeyse hiç', value: 3 }] },
      { id: 3, text: 'Bir şeyler ters gittiğinde kendimi gereksiz yere suçluyorum', options: [{ label: 'Evet, çoğu zaman', value: 3 }, { label: 'Evet, bazen', value: 2 }, { label: 'Pek sık değil', value: 1 }, { label: 'Hayır, hiçbir zaman', value: 0 }] },
      { id: 4, text: 'Nedensiz yere kendimi endişeli veya kaygılı hissediyorum', options: [{ label: 'Hayır, hiç', value: 0 }, { label: 'Pek az', value: 1 }, { label: 'Evet, bazen', value: 2 }, { label: 'Evet, çok sık', value: 3 }] },
      { id: 5, text: 'İyi bir neden yokken içimi bir korku veya panik kaplıyor', options: [{ label: 'Evet, oldukça fazla', value: 3 }, { label: 'Evet, bazen', value: 2 }, { label: 'Pek sık değil', value: 1 }, { label: 'Hayır, hiç', value: 0 }] },
      { id: 6, text: 'Her şey üstüme üstüme geliyor, işlerin altından kalkamıyorum', options: [{ label: 'Evet, çoğu zaman baş edemiyorum', value: 3 }, { label: 'Bazen eskisi kadar iyi baş edemiyorum', value: 2 }, { label: 'Hayır, çoğu zaman baş edebiliyorum', value: 1 }, { label: 'Hayır, her zamanki gibi başa çıkıyorum', value: 0 }] },
      { id: 7, text: 'O kadar mutsuzum ki uyumakta zorlanıyorum', options: [{ label: 'Evet, çoğu zaman', value: 3 }, { label: 'Evet, bazen', value: 2 }, { label: 'Pek sık değil', value: 1 }, { label: 'Hayır, hiç', value: 0 }] },
      { id: 8, text: 'Kendimi üzüntülü veya perişan hissediyorum', options: [{ label: 'Evet, çoğu zaman', value: 3 }, { label: 'Evet, oldukça sık', value: 2 }, { label: 'Pek sık değil', value: 1 }, { label: 'Hayır, hiç', value: 0 }] },
      { id: 9, text: 'O kadar mutsuzum ki ağlıyorum', options: [{ label: 'Evet, çoğu zaman', value: 3 }, { label: 'Evet, oldukça sık', value: 2 }, { label: 'Yalnızca ara sıra', value: 1 }, { label: 'Hayır, asla', value: 0 }] },
      { id: 10, text: 'Kendime zarar verme düşüncesi aklıma geldi (Kritik 10. Soru!)', options: [{ label: 'Evet, oldukça sık', value: 3 }, { label: 'Bazen', value: 2 }, { label: 'Pek seyrek', value: 1 }, { label: 'Asla', value: 0 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 9, severity: 'Normal Perinatal Duygudurum', actionAdvice: 'Postpartum depresyon riski düşük. Rutin lohusalık ve pediatri takipleri yeterlidir.' },
      { minScore: 10, maxScore: 12, severity: 'Sınırda Postpartum Depresyon Riski', actionAdvice: 'Riskli grup. 2 hafta sonra ölçek tekrarlanmalı; anneye sosyal destek ve uyku düzeni sağlanmalıdır.' },
      { minScore: 13, maxScore: 30, severity: 'Klinik Postpartum Depresyon (Eşik Üstü)', actionAdvice: 'Türkiye kesme puanı (12/13) üzeri: Psikiyatrik değerlendirme endikedir. Emzirme uyumlu farmakoterapi (Sertralin vb.) ve BDT başlanmalıdır. 10. madde pozitifse acil güvenlik planı uygulanmalıdır.' }
    ],
    reference: 'Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: Development of the 10-item EPDS. Br J Psychiatry. 1987; Aydın N, et al. EPDS Türkçe geçerlik: 2004.'
  },
  {
    id: 'gds30',
    code: 'GDS-30',
    name: 'Geriatrik Depresyon Ölçeği (GDS-30)',
    category: 'Depresyon Ölçekleri',
    targetCondition: 'Yaşlılarda (65+ Yaş) Depresyon Taraması',
    description: 'Somatik semptomların yaşlanma veya tıbbi hastalıklardan kaynaklanan kafa karışıklığını önlemek için sadece psikolojik belirtilere odaklanan Evet/Hayır formatlı geriatrik ölçek.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Hayatınızdan temelde memnun musunuz?', options: [{ label: 'Evet (0)', value: 0 }, { label: 'Hayır (1)', value: 1 }] },
      { id: 2, text: 'Birçok faaliyet ve ilginizi bıraktınız mı?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 3, text: 'Hayatınızın boş olduğunu hissediyor musunuz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 4, text: 'Sık sık canınız sıkılır mı?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 5, text: 'Gelecekten umutlu musunuz?', options: [{ label: 'Evet (0)', value: 0 }, { label: 'Hayır (1)', value: 1 }] },
      { id: 6, text: 'Kafanızdan atamadığınız düşüncelerden rahatsız mısınız?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 7, text: 'Çoğu zaman neşeniz yerinde midir?', options: [{ label: 'Evet (0)', value: 0 }, { label: 'Hayır (1)', value: 1 }] },
      { id: 8, text: 'Başınıza kötü bir şey geleceğinden korkuyor musunuz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 9, text: 'Çoğu zaman kendinizi mutlu hisseder misiniz?', options: [{ label: 'Evet (0)', value: 0 }, { label: 'Hayır (1)', value: 1 }] },
      { id: 10, text: 'Sık sık kendinizi çaresiz hisseder misiniz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 11, text: 'Dışarı çıkıp yeni şeyler yapmak yerine evde oturmayı mı tercih edersiniz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 12, text: 'Hafızanızın yaşıtlarınıza göre daha kötü olduğunu düşünüyor musunuz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 13, text: 'Şu anda hayatta olmanın harika olduğunu düşünüyor musunuz?', options: [{ label: 'Evet (0)', value: 0 }, { label: 'Hayır (1)', value: 1 }] },
      { id: 14, text: 'Kendinizi değersiz hissediyor musunuz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] },
      { id: 15, text: 'Enerjinizin tükendiğini hissediyor musunuz?', options: [{ label: 'Hayır (0)', value: 0 }, { label: 'Evet (1)', value: 1 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Normal (Depresyon Yok)', actionAdvice: 'Geriatrik depresyon bulgusu saptanmadı. Yılda bir rutin tarama önerilir.' },
      { minScore: 6, maxScore: 9, severity: 'Hafif / Olası Depresyon', actionAdvice: 'Klinik değerlendirme gereklidir. Sosyal izolasyon, polifarmasi ve vitamin eksiklikleri (B12, Folat, D vit) araştırılmalıdır.' },
      { minScore: 10, maxScore: 15, severity: 'Kesin / Belirgin Depresyon (Psödo-demans riski)', actionAdvice: 'Klinik geriatrik depresyon. Bilişsel yalancı demans (psödodemans) tablosunu dışlamak için MMSE ile birlikte değerlendirilmeli, yaşlıya uygun antidepresan (Sertralin, Essitalopram) başlanmalıdır.' }
    ],
    reference: 'Yesavage JA, Brink TL, Rose TL, et al. Development and validation of a geriatric depression screening scale. J Psychiatr Res. 1982; Ertan T, et al. GDS-30 Türkçe standardizasyonu: 1997.'
  },
  {
    id: 'hamd',
    code: 'HAM-D',
    name: 'Hamilton Depresyon Derecelendirme Ölçeği (HAM-D-17)',
    category: 'Depresyon Ölçekleri',
    targetCondition: 'Klinisyen Tarafından Depresyon Şiddeti ve İlaç Yanıtının Ölçülmesi',
    description: 'Psikofarmakoloji araştırmalarında ve klinik pratikte antidepresan etkinliğini ve remisyonu objektifleştiren 17 maddelik altın standart klinisyen ölçeği.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Depresif Duygudurum (Keder, çaresizlik, değersizlik hissi)', options: [{ label: '0: Yok', value: 0 }, { label: '1: Yalnızca sorulduğunda belirtiyor', value: 1 }, { label: '2: Kendiliğinden sözel olarak ifade ediyor', value: 2 }, { label: '3: Sözel olmayan ipuçları (yüz ifadesi, ses tonu, ağlama)', value: 3 }, { label: '4: Sadece bu duyguları yaşıyor, başka duygu gösteremiyor', value: 4 }] },
      { id: 2, text: 'Suçluluk Duyguları', options: [{ label: '0: Yok', value: 0 }, { label: '1: Kendini kınama, başkalarını hayal kırıklığına uğrattığını düşünme', value: 1 }, { label: '2: Hatalar veya geçmiş günahlar üzerine aşırı kafa yorma', value: 2 }, { label: '3: Şimdiki hastalığı bir ceza olarak görme, hezeyanlı suçluluk', value: 3 }, { label: '4: Suçlayıcı veya lanetleyici işitsel halüsinasyonlar', value: 4 }] },
      { id: 3, text: 'İntihar Eğilimi', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hayatın yaşamaya değmediğini hissetme', value: 1 }, { label: '2: Ölmüş olmayı dileme ya da pasif ölüm düşünceleri', value: 2 }, { label: '3: İntihar düşünceleri veya tasarıları', value: 3 }, { label: '4: İntihar girişimleri', value: 4 }] },
      { id: 4, text: 'Erken İnsomni (Uykuya Dalma Güçlüğü)', options: [{ label: '0: Güçlük yok', value: 0 }, { label: '1: Ara sıra yarım saatten fazla sürede dalabilme', value: 1 }, { label: '2: Her gece uykuya dalmakta belirgin zorluk (>1 saat)', value: 2 }] },
      { id: 5, text: 'Orta İnsomni (Gece Uyanmaları)', options: [{ label: '0: Güçlük yok', value: 0 }, { label: '1: Gece huzursuz uyanmalar, kalkıp dolaşma', value: 1 }, { label: '2: Gece boyunca sık sık uyanma ve tekrar dalmakta zorlanma', value: 2 }] },
      { id: 6, text: 'Geç İnsomni (Erken Sabah Uyanması - Terminal İnsomni)', options: [{ label: '0: Yok', value: 0 }, { label: '1: Sabah olağandan erken uyanıp tekrar dalabilme', value: 1 }, { label: '2: Sabah çok erken saatte uyanıp bir daha hiç uyuyamama', value: 2 }] },
      { id: 7, text: 'İş ve Uğraşlar (İlgi ve enerji kaybı, işlevsellik)', options: [{ label: '0: Güçlük yok', value: 0 }, { label: '1: Yetersizlik hissi, işe başlamakta isteksizlik', value: 1 }, { label: '2: Hobilere ve işe karşı doğrudan ilgi kaybı', value: 2 }, { label: '3: Üretkenlikte belirgin azalma, işe gidememe', value: 3 }, { label: '4: Günlük öz-bakım aktivitelerini dahi yapamama', value: 4 }] },
      { id: 8, text: 'Psikomotor Yavaşlama (Düşünce, konuşma ve hareketlerde yavaşlama)', options: [{ label: '0: Normal konuşma ve hareket', value: 0 }, { label: '1: Görüşmede hafif yavaşlama', value: 1 }, { label: '2: Belirgin yavaş konuşma, monoton ses tonu', value: 2 }, { label: '3: Muayenenin çok güç ilerlemesi, uzun suskunluklar', value: 3 }, { label: '4: Tam stupor', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Normal / Klinik Remisyon (İyileşme)', actionAdvice: 'Depresif sendrom yok veya tedavi ile tam remisyona ulaşılmıştır (HAM-D ≤7).' },
      { minScore: 8, maxScore: 13, severity: 'Hafif Depresyon', actionAdvice: 'Hafif klinik depresyon. Destekleyici psikoterapi veya yaşam tarzı müdahaleleri.' },
      { minScore: 14, maxScore: 18, severity: 'Orta Derecede Depresyon', actionAdvice: 'Antidepresan tedavi veya BDT endikasyonu. Yanıt oranı (>%50 skor düşüşü) 4-6. haftalarda izlenmelidir.' },
      { minScore: 19, maxScore: 22, severity: 'Ağır Depresyon', actionAdvice: 'Aktif farmakoterapi ve psikoterapi kombinasyonu. İntihar ve psikotik belirtiler sorgulanmalıdır.' },
      { minScore: 23, maxScore: 30, severity: 'Çok Ağır Depresyon', actionAdvice: 'Yatış endikasyonu, psikotik özellik varsa antipsikotik eklenmesi, tedaviye dirençli vakalarda EKT planlanmalıdır.' }
    ],
    reference: 'Hamilton M. A rating scale for depression. J Neurol Neurosurg Psychiatry. 1960; Akdemir A, et al. HAM-D Türkçe geçerlik ve güvenirlik: 1996.'
  },
  {
    id: 'phq9',
    code: 'PHQ-9',
    name: 'Hasta Sağlığı Anketi-9 (PHQ-9)',
    category: 'Depresyon Ölçekleri',
    targetCondition: 'Major Depresif Bozukluk Şiddeti ve Tarama',
    description: 'DSM-5 majör depresyon tanı kriterlerini birebir karşılayan 9 maddelik uluslararası standart öz-bildirim ölçeği.',
    timeframe: 'Son 2 hafta boyunca',
    questions: [
      { id: 1, text: 'İş yapmaya karşı ilgi veya zevk duyamama', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 2, text: 'Kendini moralsiz, kederli veya umutsuz hissetme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 3, text: 'Uykuya dalmakta veya uykuyu sürdürmekte zorluk çekme ya da çok fazla uyuma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 4, text: 'Kendini yorgun hissetme veya enerjisinin az olması', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 5, text: 'İştahın azalması ya da aşırı yemek yeme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 6, text: 'Kendini kötü hissetme ya da kendisini bir başarısızlık olarak görme veya ailesini hayal kırıklığına uğrattığını hissetme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 7, text: 'Gazete okumak veya televizyon izlemek gibi şeylere odaklanmakta zorlanma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 8, text: 'Başkalarının fark edebileceği kadar yavaş hareket etme veya konuşma ya da tam tersine huzursuzca fazla kıpırdanıp gezinme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 9, text: 'Ölmüş olmanın daha iyi olacağını düşünme ya da kendine bir şekilde zarar vermeyi düşünme (Acil Değerlendirme!)', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 4, severity: 'Minimal / Depresyon Yok', actionAdvice: 'Klinik müdahale gerektirmez. Rutin takip önerilir.' },
      { minScore: 5, maxScore: 9, severity: 'Hafif Depresyon', actionAdvice: 'Klinik izlem; psikoeğitim ve destekleyici yaklaşımlar uygundur.' },
      { minScore: 10, maxScore: 14, severity: 'Orta Düzey Depresyon', actionAdvice: 'Psikoterapi (BDT) veya antidepresan tedavisi başlanması düşünülmelidir.' },
      { minScore: 15, maxScore: 19, severity: 'Orta-Ağır Depresyon', actionAdvice: 'Aktif antidepresan tedavisi ve/veya psikoterapi kombinasyonu endikedir.' },
      { minScore: 20, maxScore: 27, severity: 'Ağır Depresyon', actionAdvice: 'Acil psikiyatrik müdahale, farmakoterapi, güvenlik planlaması ve gerekirse yatış değerlendirmesi.' }
    ],
    reference: 'Kroenke K, Spitzer RL, Williams JB. The PHQ-9. J Gen Intern Med. 2001.'
  },
  {
    id: 'madrs',
    code: 'MADRS',
    name: 'Montgomery-Åsberg Depresyon Değerlendirme Ölçeği (MADRS)',
    category: 'Depresyon Ölçekleri',
    targetCondition: 'Tedavi Yanıtına Duyarlı Depresyon Şiddeti Ölçümü',
    description: 'Somatik semptomlardan arındırılmış, antidepresan tedavideki haftalık düzelmelere en duyarlı 10 maddelik klinisyen derecelendirme ölçeği.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Gözlenen Keder: Klinisyenin muayene sırasındaki yüz ifadesi, duruş ve konuşmadan edindiği keder izlenimi', options: [{ label: '0: Normal', value: 0 }, { label: '2: Kederli görünüyor ama uyarılınca canlanıyor', value: 2 }, { label: '4: Belirgin hüzünlü ve kederli', value: 4 }, { label: '6: Sürekli derin elem, donukluk veya çaresizlik ifadesi', value: 6 }] },
      { id: 2, text: 'Bildirilen Keder: Hastanın kendi ifadesiyle hissettiği keder ve içsel acı', options: [{ label: '0: Normal duygudurum', value: 0 }, { label: '2: Üzüntülü ama teselli edilebiliyor', value: 2 }, { label: '4: Yoğun keder ve ümitsizlik', value: 4 }, { label: '6: Katlanılamaz, sürekli içsel ızdırap ve acı', value: 6 }] },
      { id: 3, text: 'İçsel Gerilim: Huzursuzluk, kaygı ve içsel panik hissi', options: [{ label: '0: Sakin ve dingin', value: 0 }, { label: '2: Zaman zaman hafif gerginlik', value: 2 }, { label: '4: Sürekli huzursuzluk ve endişe hali', value: 4 }, { label: '6: Panik düzeyinde dayanılmaz gerilim ve dehşet', value: 6 }] },
      { id: 4, text: 'Uykunun Azalması: Toplam uyku süresinde olağana göre azalma', options: [{ label: '0: Olağan uyku süresi', value: 0 }, { label: '2: Uykuda hafif azalma (<1-2 saat)', value: 2 }, { label: '4: Belirgin uykusuzluk (>2 saat kayıp)', value: 4 }, { label: '6: Gece 2-3 saatten az uyuma veya tam uykusuzluk', value: 6 }] },
      { id: 5, text: 'İştah Azalması: Yemek yeme isteğinde ve tat almada azalma', options: [{ label: '0: Normal iştah', value: 0 }, { label: '2: Hafif iştahsızlık', value: 2 }, { label: '4: Yemek yemek için kendini zorlama', value: 4 }, { label: '6: Tam iştah kaybı, beslenmeyi reddetme', value: 6 }] },
      { id: 6, text: 'Konsantrasyon Güçlüğü: Düşünceleri toplama ve odaklanma zorluğu', options: [{ label: '0: Normal konsantrasyon', value: 0 }, { label: '2: Zaman zaman dikkat dağınıklığı', value: 2 }, { label: '4: Okumakta veya sohbette belirgin odaklanma güçlüğü', value: 4 }, { label: '6: Hiçbir şeye odaklanamama, zihinsel felç hali', value: 6 }] },
      { id: 7, text: 'Halsizlik ve İsteksizlik (Avolition): İşe başlama ve sürdürmede yavaşlık', options: [{ label: '0: Normal enerji düzeyi', value: 0 }, { label: '2: Günlük işlere başlarken hafif isteksizlik', value: 2 }, { label: '4: En basit işleri bile başlatmak için büyük çaba sarf etme', value: 4 }, { label: '6: Tam eylemsizlik, yatağa bağımlılık', value: 6 }] },
      { id: 8, text: 'Hissetme Yetisinin Kaybı (Anhedoni): Yakınlarına ve çevreye sevgi veya ilgi duyamama', options: [{ label: '0: Normal duygusal bağ kurabilme', value: 0 }, { label: '2: Sevdiklerine karşı ilgide hafif azalma', value: 2 }, { label: '4: Duygusal donukluk, hiçbir şey hissedememe hissi', value: 4 }, { label: '6: Tam duygusal paralizi, yakınlarına dahi sevgi duyamama ızdırabı', value: 6 }] },
      { id: 9, text: 'Karamsar Düşünceler: Başarısızlık, yetersizlik ve suçluluk düşünceleri', options: [{ label: '0: Karamsarlık yok', value: 0 }, { label: '2: Zaman zaman yetersizlik hissi', value: 2 }, { label: '4: Sürekli kendini suçlama ve geleceğe karamsar bakış', value: 4 }, { label: '6: Yıkım, iflas veya hak edilmiş ceza hezeyanları', value: 6 }] },
      { id: 10, text: 'İntihar Düşünceleri: Yaşamı sonlandırma düşüncesi ve hazırlığı', options: [{ label: '0: Yaşama isteği tam', value: 0 }, { label: '2: Hayatın yorucu olduğunu hissetme, pasif ölüm arzusu', value: 2 }, { label: '4: İntihar düşünceleri ama kesin plan yok', value: 4 }, { label: '6: Aktif intihar planı veya yakın zamanda girişim', value: 6 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 6, severity: 'Normal / Klinik Remisyon', actionAdvice: 'Remisyon eşiği (MADRS ≤10 tam klinik iyileşme kabul edilir). İdame tedaviye devam edilir.' },
      { minScore: 7, maxScore: 19, severity: 'Hafif Depresyon', actionAdvice: 'Hafif depresif epizot. Psikoterapi veya antidepresan monoterapisi düşünülmelidir.' },
      { minScore: 20, maxScore: 34, severity: 'Orta Derecede Depresyon', actionAdvice: 'Klinik depresyon. Hedef doza titrasyon; 4 haftada %50 yanıt alınamazsa tedavi modifikasyonu gerekir.' },
      { minScore: 35, maxScore: 60, severity: 'Ağır Depresyon', actionAdvice: 'Şiddetli depresyon. Yakın intihar kontrolü, kombine tedavi veya EKT endikasyonu acilen değerlendirilmelidir.' }
    ],
    reference: 'Montgomery SA, Åsberg M. A new depression scale designed to be sensitive to change. Br J Psychiatry. 1979.'
  }
];
