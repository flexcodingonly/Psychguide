import { ClinicalScale } from '../../types';

export const ANXIETY_SCALES: ClinicalScale[] = [
  {
    id: 'gad7',
    code: 'GAD-7',
    name: 'Yaygın Anksiyete Bozukluğu Ölçeği (GAD-7)',
    category: 'Anksiyete Ölçekleri',
    targetCondition: 'Yaygın Anksiyete Bozukluğu Taraması ve Şiddeti',
    description: 'Anksiyete ve kaygı düzeyini değerlendirmede dünya çapında kullanılan pratik 7 maddelik klinik altın standart.',
    timeframe: 'Son 2 hafta boyunca',
    questions: [
      { id: 1, text: 'Kendini sinirli, kaygılı veya çok gergin hissetme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 2, text: 'Kaygılanmayı durduramama veya kontrol edememe', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 3, text: 'Farklı şeyler hakkında çok fazla kaygılanma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 4, text: 'Rahatlamakta ve gevşemekte zorlanma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 5, text: 'Hareketsiz oturamayacak kadar huzursuz hissetme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 6, text: 'Kolayca canı sıkılma veya çabuk öfkelenme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] },
      { id: 7, text: 'Sanki korkunç bir şey olacakmış gibi korku hissetme', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Birkaç gün (1)', value: 1 }, { label: 'Günlerin yarısından fazla (2)', value: 2 }, { label: 'Neredeyse her gün (3)', value: 3 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 4, severity: 'Minimal Anksiyete', actionAdvice: 'Klinik eşiğin altında. Rutin izlem önerilir.' },
      { minScore: 5, maxScore: 9, severity: 'Hafif Anksiyete', actionAdvice: 'Hafif anksiyete; stres yönetimi, uyku hijyeni ve psiko-eğitim uygundur.' },
      { minScore: 10, maxScore: 14, severity: 'Orta Düzey Anksiyete (Klinik Kesme Puanı)', actionAdvice: 'Klinik YAB için kesme puanı (≥10). Aktif BDT veya SSRI farmakoterapisi başlanmalıdır.' },
      { minScore: 15, maxScore: 21, severity: 'Ağır Anksiyete', actionAdvice: 'Şiddetli tablo; kombine farmakoterapi ve psikoterapi değerlendirilmeli, ek tanılar taranmalıdır.' }
    ],
    reference: 'Spitzer RL, Kroenke K, Williams JB, Löwe B. A brief measure for assessing generalized anxiety disorder: The GAD-7. Arch Intern Med. 2006.'
  },
  {
    id: 'bai',
    code: 'BAI',
    name: 'Beck Anksiyete Ölçeği (BAI)',
    category: 'Anksiyete Ölçekleri',
    targetCondition: 'Somatik ve Bilişsel Anksiyete Şiddetinin Taranması',
    description: 'Depresyondan bağımsız olarak anksiyetenin özellikle bedensel ve subjektif uyarılma belirtilerini (çarpıntı, titreme, baş dönmesi) ölçen 21 maddelik standart ölçek.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Bedenin herhangi bir yerinde uyuşma veya karıncalanma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 2, text: 'Sıcak basmaları veya ürpermeler', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 3, text: 'Bacaklarda titreme veya dermansızlık', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 4, text: 'Gevşeyememe, rahatlayamama', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 5, text: 'Çok kötü bir şey olacak korkusu', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 6, text: 'Baş dönmesi veya sersemlik hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 7, text: 'Kalp çarpıntısı veya kalbin hızla atması', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 8, text: 'Dengeyi kaybetme veya sendeleme hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 9, text: 'Dehşete kapılma hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] },
      { id: 10, text: 'Nefes darlığı, tıkanma hissi', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Hafif (1)', value: 1 }, { label: 'Orta (2)', value: 2 }, { label: 'Şiddetli (3)', value: 3 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Minimal Anksiyete', actionAdvice: 'Normal sınırda otonomik uyarılma. Tedavi gerekmez.' },
      { minScore: 8, maxScore: 15, severity: 'Hafif Düzey Anksiyete', actionAdvice: 'Hafif kaygı. Gevşeme egzersizleri, kafein kısıtlaması ve psiko-eğitim uygundur.' },
      { minScore: 16, maxScore: 25, severity: 'Orta Düzey Anksiyete', actionAdvice: 'Klinik düzeyde bozukluk. Bilişsel Davranışçı Terapi ve/veya SSRI/SNRI farmakoterapisi endikedir.' },
      { minScore: 26, maxScore: 30, severity: 'Şiddetli Anksiyete', actionAdvice: 'Ağır panik/anksiyete tablosu. Acil anksiyolitik tedavi planı, yakın takip ve yapılandırılmış psikiyatri protokolü gerektirir.' }
    ],
    reference: 'Beck AT, Epstein N, Brown G, Steer RA. An inventory for measuring clinical anxiety: Psychometric properties. J Consult Clin Psychol. 1988; Ulusoy M, et al. Türkçe geçerlik: 1998.'
  },
  {
    id: 'hama',
    code: 'HAM-A',
    name: 'Hamilton Anksiyete Değerlendirme Ölçeği (HAM-A)',
    category: 'Anksiyete Ölçekleri',
    targetCondition: 'Klinisyen Derecelendirmeli Psişik ve Somatik Anksiyete Şiddeti',
    description: 'Anksiyetenin bilişsel (psişik) ve kardiyovasküler, gastrointestinal, nöromüsküler (somatik) bileşenlerini değerlendiren 14 maddelik referans ölçek.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Kaygılı Ruh Hali: Endişeler, en kötüyü bekleme, korkulu beklenti, sinirlilik', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli (panik)', value: 4 }] },
      { id: 2, text: 'Gerginlik: İrkilme hissi, yorgunluk, ağlama nöbetleri, titreme, rahatlayamama', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli', value: 4 }] },
      { id: 3, text: 'Korkular: Karanlıktan, yabancılardan, yalnız kalmaktan, kalabalıktan korkma', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli', value: 4 }] },
      { id: 4, text: 'Uykusuzluk: Uykuya dalamama, bölünmüş uyku, dinlendirmeyen uyku, kabuslar', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli', value: 4 }] },
      { id: 5, text: 'Bilişsel Belirtiler: Konsantrasyon güçlüğü, unutkanlık, zihnin boşalması', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli', value: 4 }] },
      { id: 6, text: 'Kardiyovasküler Belirtiler: Taşikardi, çarpıntı, göğüs ağrısı, damar zonklaması', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli', value: 4 }] },
      { id: 7, text: 'Gastrointestinal Belirtiler: Yutma güçlüğü, midede gaz/yanma, spazm, ishal', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Çok şiddetli', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Normal / Semptomsuz', actionAdvice: 'Klinik anksiyete saptanmadı.' },
      { minScore: 8, maxScore: 14, severity: 'Hafif Derecede Anksiyete', actionAdvice: 'Hafif düzey. Psikoeğitim ve gevşeme teknikleri önerilir.' },
      { minScore: 15, maxScore: 23, severity: 'Orta Derecede Anksiyete', actionAdvice: 'Klinik tedavi endikasyonu (farmakoterapi ve/veya BDT). Yanıt takibi yapılmalıdır.' },
      { minScore: 24, maxScore: 28, severity: 'Ağır Derecede Anksiyete', actionAdvice: 'Şiddetli bozukluk. Yoğun tıbbi ve psikiyatrik müdahale, gerekirse kısa süreli benzodiazepin köprüsü eşliğinde SSRI başlanması.' }
    ],
    reference: 'Hamilton M. The assessment of anxiety states by rating. Br J Med Psychol. 1959; Yazıcı G, et al. HAM-A Türkçe standardizasyonu: 1998.'
  },
  {
    id: 'pdss',
    code: 'PDSS',
    name: 'Panik Bozukluğu Şiddet Ölçeği (PDSS)',
    category: 'Anksiyete Ölçekleri',
    targetCondition: 'Panik Bozukluğu Şiddeti ve Tedavi Yanıtı (Klinisyen Dereceli)',
    description: 'Atak sıklığı, atak sırasındaki distres, beklenti anksiyetesi, agorafobik kaçınma, beden duyumlarından kaçınma ve iş/sosyal bozulmayı içeren 7 maddelik standart ölçüm.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      { id: 1, text: 'Panik atakların sıklığı', options: [{ label: '0: Hiç atak yok', value: 0 }, { label: '1: 1 tam veya sınırlı atak', value: 1 }, { label: '2: 2-3 atak', value: 2 }, { label: '3: 4-6 atak', value: 3 }, { label: '4: Günde birden fazla atak', value: 4 }] },
      { id: 2, text: 'Ataklar sırasındaki sıkıntı ve dehşet hissi', options: [{ label: '0: Atak yok', value: 0 }, { label: '1: Hafif sıkıntı', value: 1 }, { label: '2: Orta derecede sıkıntı', value: 2 }, { label: '3: Şiddetli dehşet', value: 3 }, { label: '4: Aşırı, dayanılmaz dehşet', value: 4 }] },
      { id: 3, text: 'Başka bir atak geleceğine dair beklenti kaygısı', options: [{ label: '0: Yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Neredeyse sürekli', value: 4 }] },
      { id: 4, text: 'Agorafobik kaçınma (korkulan yerlere gidememe)', options: [{ label: '0: Kaçınma yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Yaygın ve eve kapatıcı', value: 4 }] },
      { id: 5, text: 'Panik benzeri beden duyumlarından kaçınma (egzersiz, kahve, merdiven çıkma vb.)', options: [{ label: '0: Kaçınma yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Tüm fiziksel aktivitelerden kaçınma', value: 4 }] },
      { id: 6, text: 'İş veya mesleki işlevsellikte bozulma', options: [{ label: '0: Bozulma yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: İşi bırakma / çalışamama', value: 4 }] },
      { id: 7, text: 'Sosyal yaşamda bozulma', options: [{ label: '0: Bozulma yok', value: 0 }, { label: '1: Hafif', value: 1 }, { label: '2: Orta', value: 2 }, { label: '3: Şiddetli', value: 3 }, { label: '4: Sosyal ilişkilerin tamamen kesilmesi', value: 4 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Normal / Remisyon', actionAdvice: 'Panik bozukluğu remisyonda veya kontrol altında.' },
      { minScore: 6, maxScore: 10, severity: 'Hafif Düzeyde Panik Bozukluğu', actionAdvice: 'Klinik eşik sınırında. BDT panik kontrol protokolü faydalıdır.' },
      { minScore: 11, maxScore: 15, severity: 'Orta Derecede Panik Bozukluğu', actionAdvice: 'Belirgin bozukluk. Antidepresan tedavi (SSRI/SNRI) ve interoseptif maruz bırakma.' },
      { minScore: 16, maxScore: 28, severity: 'Ağır Derecede Panik Bozukluğu', actionAdvice: 'Şiddetli kriz. Kapsamlı farmakoterapi, acil güvenlik planlaması ve kombine BDT.' }
    ],
    reference: 'Shear MK, Brown TA, Barlow DH, et al. Multicenter collaborative panic disorder severity scale. Am J Psychiatry. 1997; Monkul ES, et al. PDSS Türkçe geçerlik: 2004.'
  },
  {
    id: 'phq15',
    code: 'PHQ-15',
    name: 'Hasta Sağlığı Anketi — Somatik Semptom (PHQ-15)',
    category: 'Anksiyete Ölçekleri',
    targetCondition: 'Somatizasyon ve Bedensel Belirti Bozukluğu Şiddeti',
    description: 'Baş ağrısı, sırt ağrısı, nefes darlığı, baş dönmesi, çarpıntı ve gaz gibi son 4 haftadaki 15 bedensel semptomun şiddetini tarayan uluslararası ölçek.',
    timeframe: 'Son 4 hafta boyunca',
    questions: [
      { id: 1, text: 'Mide ağrısı veya kramplar', options: [{ label: 'Hiç rahatsız etmedi (0)', value: 0 }, { label: 'Biraz rahatsız etti (1)', value: 1 }, { label: 'Çok rahatsız etti (2)', value: 2 }] },
      { id: 2, text: 'Sırt ağrısı', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 3, text: 'Kollarda, bacaklarda veya eklemlerde ağrı', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 4, text: 'Baş ağrıları', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 5, text: 'Göğüs ağrısı', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 6, text: 'Baş dönmesi veya bayılacak gibi olma', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 7, text: 'Kalp çarpıntısı veya kalbin hızlı çarpması', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 8, text: 'Nefes darlığı', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 9, text: 'Kabızlık, gaz veya bağırsak spazmları', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] },
      { id: 10, text: 'Kendini sürekli yorgun hissetme veya enerjinin olmaması', options: [{ label: 'Hiç (0)', value: 0 }, { label: 'Biraz (1)', value: 1 }, { label: 'Çok (2)', value: 2 }] }
    ],
    interpretation: [
      { minScore: 0, maxScore: 4, severity: 'Minimal Somatik Semptom', actionAdvice: 'Normal bedensel varyasyonlar. Somatizasyon riski düşüktür.' },
      { minScore: 5, maxScore: 9, severity: 'Hafif Düzeyde Somatizasyon', actionAdvice: 'Hafif bedensel yakınmalar. Gereksiz invaziv tıbbi tetkiklerden kaçınılmalı, stres faktörleri konuşulmalıdır.' },
      { minScore: 10, maxScore: 14, severity: 'Orta Düzeyde Bedensel Belirti Bozukluğu', actionAdvice: 'Klinik düzeyde somatizasyon. Somatizasyona yönelik BDT ve hekim alışverişini (doctor-shopping) önleme stratejisi.' },
      { minScore: 15, maxScore: 20, severity: 'Ağır Derecede Somatik Semptom Şiddeti', actionAdvice: 'Şiddetli bedensel belirti bozukluğu. Düzenli tek hekim viziti, fonksiyonel iyileşme odaklı BDT ve antidepresan tedavisi.' }
    ],
    reference: 'Kroenke K, Spitzer RL, Williams JB. The PHQ-15: Validity of a new measure for evaluating the severity of somatic symptoms. Psychosom Med. 2002.'
  },
  {
    id: 'sascr',
    code: 'SASC-R',
    name: 'Çocuklar İçin Sosyal Anksiyete Ölçeği (SASC-R)',
    category: 'Anksiyete Ölçekleri',
    targetCondition: 'Çocuk ve Ergenlerde Sosyal Fobi ve Akran Kaygısı',
    description: 'Olumsuz değerlendirilme korkusu, yeni ortamlarda sosyal kaçınma ve genel sosyal içe kapanmayı ölçen 18 maddelik çocuk ölçeği.',
    timeframe: 'Genel okul ve arkadaş ortamları',
    questions: [
      { id: 1, text: 'Diğer çocukların benimle alay etmesinden veya dalga geçmesinden korkarım', options: [{ label: '1: Hiç doğru değil', value: 1 }, { label: '2: Bazen doğru', value: 2 }, { label: '3: Çoğu zaman doğru', value: 3 }] },
      { id: 2, text: 'Tanımadığım çocuklarla veya yetişkinlerle konuşurken utangaç olurum', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 3, text: 'Diğer çocukların hakkımda ne düşündüğü beni çok endişelendirir', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 4, text: 'Sınıfta tahtaya kalkmaktan veya sesli okumaktan çekinirim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 5, text: 'Bir gruba katılırken çocukların beni istemeyeceğinden korkarım', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
      { id: 6, text: 'Arkadaşlarımla birlikteyken sessiz kalmayı tercih ederim', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] }
    ],
    interpretation: [
      { minScore: 6, maxScore: 9, severity: 'Normal Sosyal Gelişim', actionAdvice: 'Akran ilişkilerinde olağan uyum düzeyi.' },
      { minScore: 10, maxScore: 13, severity: 'Orta Düzey Akran Çekingenliği', actionAdvice: 'Sosyal beceri eğitimi, okul rehberliği ve destekleyici aktiviteler.' },
      { minScore: 14, maxScore: 18, severity: 'Klinik Sosyal Anksiyete Bozukluğu', actionAdvice: 'Çocuk ve Ergen Psikiyatrisi değerlendirmesi; BDT sosyal beceri ve maruz bırakma programı.' }
    ],
    reference: 'La Greca AM, Stone WL. Social Anxiety Scale for Children-Revised. J Clin Child Psychol. 1993; Aydın A, et al. Türkçe standardizasyonu: 2002.'
  }
];
