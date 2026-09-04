import { ClinicalScale } from '../types';

export const SCALES_DATA: ClinicalScale[] = [
  {
    id: 'phq9',
    code: 'PHQ-9',
    name: 'Hasta Sağlık Anketi-9 (Depresyon Ölçeği)',
    targetCondition: 'Major Depresif Bozukluk Şiddeti ve Tarama',
    description: 'Son 2 hafta içinde hastanın ne sıklıkla depresif belirtiler yaşadığını ölçen uluslararası geçerli 9 maddelik ölçek.',
    timeframe: 'Son 2 hafta boyunca',
    questions: [
      {
        id: 1,
        text: 'İş yapmaya karşı ilgi veya zevk duyamama',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 2,
        text: 'Kendini moralsiz, kederli veya umutsuz hissetme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 3,
        text: 'Uykuya dalmakta veya uykuyu sürdürmekte zorluk çekme ya da çok fazla uyuma',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 4,
        text: 'Kendini yorgun hissetme veya enerjisinin az olması',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 5,
        text: 'İştahın azalması ya da aşırı yemek yeme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 6,
        text: 'Kendini kötü hissetme ya da kendisini bir başarısızlık olarak görme veya ailesini hayal kırıklığına uğrattığını hissetme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 7,
        text: 'Gazete okumak veya televizyon izlemek gibi şeylere odaklanmakta zorlanma',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 8,
        text: 'Başkalarının fark edebileceği kadar yavaş hareket etme veya konuşma ya da tam tersine huzursuzca fazla kıpırdanıp gezinme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 9,
        text: 'Ölmüş olmanın daha iyi olacağını düşünme ya da kendine bir şekilde zarar vermeyi düşünme (Acil Değerlendirme!)',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 4, severity: 'Minimal / Depresyon Yok', actionAdvice: 'Klinik müdahale gerektirmez. Rutin takip önerilir.' },
      { minScore: 5, maxScore: 9, severity: 'Hafif Depresyon', actionAdvice: 'Klinik izlem; psikoeğitim ve destekleyici yaklaşımlar uygundur.' },
      { minScore: 10, maxScore: 14, severity: 'Orta Düzey Depresyon', actionAdvice: 'Psikoterapi (BDT) veya antidepresan tedavisi başlanması düşünülmelidir.' },
      { minScore: 15, maxScore: 19, severity: 'Orta-Ağır Depresyon', actionAdvice: 'Aktif antidepresan tedavisi ve/veya psikoterapi kombinasyonu endikedir.' },
      { minScore: 20, maxScore: 27, severity: 'Ağır Depresyon', actionAdvice: 'Acil psikiyatrik müdahale, farmakoterapi, güvenlik planlaması ve gerekirse yatış değerlendirmesi.' }
    ],
    reference: 'Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001.'
  },
  {
    id: 'gad7',
    code: 'GAD-7',
    name: 'Yaygın Anksiyete Bozukluğu-7 Ölçeği',
    targetCondition: 'Anksiyete Şiddeti ve Belirti Düzeyi',
    description: 'Anksiyete ve kaygı düzeyini değerlendirmede dünya çapında kullanılan pratik klinik ölçek.',
    timeframe: 'Son 2 hafta boyunca',
    questions: [
      {
        id: 1,
        text: 'Kendini sinirli, kaygılı veya çok gergin hissetme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 2,
        text: 'Kaygılanmayı durduramama veya kontrol edememe',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 3,
        text: 'Farklı şeyler hakkında çok fazla kaygılanma',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 4,
        text: 'Rahatlamakta ve gevşemekte zorlanma',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 5,
        text: 'Hareketsiz oturamayacak kadar huzursuz hissetme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 6,
        text: 'Kolayca canının sıkılması ya da kolay sinirlenme',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      },
      {
        id: 7,
        text: 'Korkunç bir şey olacakmış gibi hissetme ve korkuya kapılma',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Birkaç gün', value: 1 }, { label: 'Günlerin yarısından fazla', value: 2 }, { label: 'Neredeyse her gün', value: 3 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 4, severity: 'Minimal Anksiyete', actionAdvice: 'Rutin klinik takip.' },
      { minScore: 5, maxScore: 9, severity: 'Hafif Anksiyete', actionAdvice: 'İzlem, gevşeme teknikleri, uyku hijyeni eğitimi.' },
      { minScore: 10, maxScore: 14, severity: 'Orta Düzey Anksiyete (Klinik Eşik)', actionAdvice: 'Yaygın Anksiyete Bozukluğu açısından ileri değerlendirme; BDT veya SSRI/SNRI başlanması önerilir.' },
      { minScore: 15, maxScore: 21, severity: 'Şiddetli Anksiyete', actionAdvice: 'Kapsamlı farmakolojik ve psikoterapötik müdahale gereklidir.' }
    ],
    reference: 'Spitzer RL, Kroenke K, Williams JB, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006.'
  },
  {
    id: 'asrs',
    code: 'ASRS-v1.1',
    name: 'Erişkin DEHB Kendi Bildirim Ölçeği (Kısa Form)',
    targetCondition: 'Erişkin Dikkat Eksikliği ve Hiperaktivite Bozukluğu Taraması',
    description: 'Dünya Sağlık Örgütü (WHO) tarafından geliştirilen 6 soruluk resmi tarama formu.',
    timeframe: 'Son 6 ay boyunca',
    questions: [
      {
        id: 1,
        text: 'Bir projenin zor kısımlarını bitirdikten sonra detayları tamamlamakta ne sıklıkla zorluk çekersiniz?',
        options: [{ label: 'Asla', value: 0 }, { label: 'Nadiren', value: 0 }, { label: 'Bazen', value: 1 }, { label: 'Sık sık', value: 1 }, { label: 'Çok sık', value: 1 }]
      },
      {
        id: 2,
        text: 'Düzen gerektiren bir iş yaparken işleri sıraya koymakta ne sıklıkla güçlük çekersiniz?',
        options: [{ label: 'Asla', value: 0 }, { label: 'Nadiren', value: 0 }, { label: 'Bazen', value: 1 }, { label: 'Sık sık', value: 1 }, { label: 'Çok sık', value: 1 }]
      },
      {
        id: 3,
        text: 'Randevularınızı veya yerine getirmeniz gereken sorumlulukları ne sıklıkla unutursunuz?',
        options: [{ label: 'Asla', value: 0 }, { label: 'Nadiren', value: 0 }, { label: 'Bazen', value: 1 }, { label: 'Sık sık', value: 1 }, { label: 'Çok sık', value: 1 }]
      },
      {
        id: 4,
        text: 'Çok fazla düşünme gerektiren bir işe başlamaktan ne sıklıkla kaçınır veya ertelersiniz?',
        options: [{ label: 'Asla', value: 0 }, { label: 'Nadiren', value: 0 }, { label: 'Bazen', value: 0 }, { label: 'Sık sık', value: 1 }, { label: 'Çok sık', value: 1 }]
      },
      {
        id: 5,
        text: 'Uzun süre oturmanız gerektiğinde ellerinizi veya ayaklarınızı kıpırdatmadan durmakta ne sıklıkla zorlanırsınız?',
        options: [{ label: 'Asla', value: 0 }, { label: 'Nadiren', value: 0 }, { label: 'Bazen', value: 0 }, { label: 'Sık sık', value: 1 }, { label: 'Çok sık', value: 1 }]
      },
      {
        id: 6,
        text: 'Kendinizi ne sıklıkla aşırı aktif ve sanki bir motor tarafından sürükleniyormuş gibi hissedersiniz?',
        options: [{ label: 'Asla', value: 0 }, { label: 'Nadiren', value: 0 }, { label: 'Bazen', value: 0 }, { label: 'Sık sık', value: 1 }, { label: 'Çok sık', value: 1 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 3, severity: 'DEHB Olasılığı Düşük', actionAdvice: 'Mevcut belirtiler erişkin DEHB tarama eşiğini karşılamamaktadır.' },
      { minScore: 4, maxScore: 6, severity: 'Pozitif Tarama (DEHB Şüphesi Yüksek)', actionAdvice: 'Kişi WHO ASRS tarama eşiğini aşmıştır. Ayrıntılı gelişimsel öykü ve klinik DEHB değerlendirmesi yapılmalıdır.' }
    ],
    reference: 'Kessler RC, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS). Psychol Med. 2005.'
  },
  {
    id: 'mdq',
    code: 'MDQ',
    name: 'Duygudurum Bozuklukları Anketi (Mood Disorder Questionnaire)',
    targetCondition: 'Bipolar Bozukluk (Mani / Hipomani Taraması)',
    description: 'Bipolar spektrum bozukluklarını (Bipolar I, Bipolar II) tek uçlu depresyondan ayırt etmek için geliştirilmiş altın standart tarama aracı.',
    timeframe: 'Ömür boyu herhangi bir dönem',
    questions: [
      {
        id: 1,
        text: 'Kendinizi öyle iyi, hiperaktif ya da taşkın hissettiniz mi ki diğer insanlar normal olmadığınızı düşündü ya da başınız belaya girdi?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 2,
        text: 'Öyle sinirli veya öfkeliydiniz ki insanlara bağırdınız ya da kavga veya tartışma başlattınız mı?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 3,
        text: 'Kendinize her zamankinden çok daha fazla güvendiğiniz oldu mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 4,
        text: 'Normalden çok daha az uyudunuz ve yine de uykusuzluk hissetmediniz mi?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 5,
        text: 'Her zamankinden çok daha fazla ve hızlı konuştunuz mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 6,
        text: 'Düşünceler zihninizden yarışır gibi çok hızlı geçti mi?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 7,
        text: 'Çevrenizde olan bitenlerle dikkatiniz o kadar kolay dağıldı mı ki yaptığınız işe odaklanamadınız?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 8,
        text: 'Her zamankinden çok daha fazla enerjiniz oldu mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 9,
        text: 'Her zamankinden çok daha aktif olup birden fazla işe giriştiniz mi?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 10,
        text: 'Her zamankinden çok daha dışa dönük, sosyal veya telefonla insanları arar oldunuz mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 11,
        text: 'Cinselliğe ilginiz her zamankinden belirgin biçimde daha fazla oldu mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 12,
        text: 'Sizin için alışılmadık veya riskli (aşırı para harcama, pervasızca araç sürme, düşüncesiz yatırımlar) davranışlarda bulundunuz mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 13,
        text: 'Bu davranışlar aynı zaman dilimi içinde birlikte meydana geldi mi ve orta/ciddi sorunlara yol açtı mı?',
        options: [{ label: 'Sorun yok / Farklı zamanlar', value: 0 }, { label: 'Aynı dönemde + Sorun yarattı', value: 1 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 6, severity: 'Negatif Bipolar Tarama', actionAdvice: 'Bipolar spektrum olasılığı düşüktür; ancak klinik şüphe varsa hipomanik dönemler hasta yakınından da sorgulanmalıdır.' },
      { minScore: 7, maxScore: 13, severity: 'Pozitif Bipolar Spektrum Taraması (≥7 Evet)', actionAdvice: 'Bipolar bozukluk (Tip I veya II) açısından yüksek risk! Antidepresan monoterapisinden kesinlikle kaçınılmalı, duygudurum dengeleyici değerlendirilmelidir.' }
    ],
    reference: 'Hirschfeld RM, Williams JB, Spitzer RL, et al. Development and validation of a screening instrument for bipolar spectrum disorder: the Mood Disorder Questionnaire. Am J Psychiatry. 2000.'
  },
  {
    id: 'ybocs',
    code: 'Y-BOCS',
    name: 'Yale-Brown Obsesyon Kompulsiyon Derecelendirme Ölçeği (Kısa Form)',
    targetCondition: 'Obsesif-Kompulsif Bozukluk (OKB) Şiddeti',
    description: 'Obsesyon ve kompulsiyonların kapladığı zaman, işlevselliğe etkisi, yarattığı sıkıntı ve direnme/denetim derecesini ölçen altın standart ölçek.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      {
        id: 1,
        text: 'Obsesif düşünceler gününüzün ne kadar zamanını alıyor?',
        options: [{ label: 'Hiç (0 saat)', value: 0 }, { label: 'Hafif (<1 saat/gün)', value: 1 }, { label: 'Orta (1-3 saat/gün)', value: 2 }, { label: 'Ağır (3-8 saat/gün)', value: 3 }, { label: 'Çok Ağır (>8 saat/gün)', value: 4 }]
      },
      {
        id: 2,
        text: 'Obsesif düşünceleriniz günlük yaşamınızı ve ilişkilerinizi ne kadar aksatıyor?',
        options: [{ label: 'Hiç aksatmıyor', value: 0 }, { label: 'Hafif aksatıyor', value: 1 }, { label: 'Belirgin ama yönetilebilir', value: 2 }, { label: 'Ciddi biçimde bozuyor', value: 3 }, { label: 'Tamamen işlevsiz kılıyor', value: 4 }]
      },
      {
        id: 3,
        text: 'Obsesif düşünceler sizde ne kadar sıkıntı ve kaygı yaratıyor?',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Hafif ve nadiren sıkıntı', value: 1 }, { label: 'Orta düzeyde sıkıntı', value: 2 }, { label: 'Şiddetli ve yıpratıcı', value: 3 }, { label: 'Sürekli ve dayanılmaz', value: 4 }]
      },
      {
        id: 4,
        text: 'Kompulsif davranışları (yıkama, kontrol etme, sayma vb.) uygulamak için ne kadar zaman harcıyorsunuz?',
        options: [{ label: 'Hiç (0 saat)', value: 0 }, { label: 'Hafif (<1 saat/gün)', value: 1 }, { label: 'Orta (1-3 saat/gün)', value: 2 }, { label: 'Ağır (3-8 saat/gün)', value: 3 }, { label: 'Çok Ağır (>8 saat/gün)', value: 4 }]
      },
      {
        id: 5,
        text: 'Kompulsif davranışlarınızı durdurma veya denetleme konusunda kontrolünüz ne düzeyde?',
        options: [{ label: 'Tam kontrolüm var', value: 0 }, { label: 'Büyük ölçüde kontrol edebiliyorum', value: 1 }, { label: 'Orta düzeyde, zorlanıyorum', value: 2 }, { label: 'Çok zayıf denetim', value: 3 }, { label: 'Hiç kontrol edemiyorum', value: 4 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Subklinik / Minimal OKB', actionAdvice: 'Rutin klinik izlem veya hafif psikoeğitim.' },
      { minScore: 8, maxScore: 13, severity: 'Hafif Düzey OKB', actionAdvice: 'ERP (Tepki Önleme ile Maruz Bırakma) BDT psikoterapisi veya birinci basamak SSRI.' },
      { minScore: 14, maxScore: 17, severity: 'Orta Düzey OKB', actionAdvice: 'Yüksek doz SSRI (örn. Sertralin 200 mg, Fluoksetin 60-80 mg) + BDT (ERP) kombinasyonu.' },
      { minScore: 18, maxScore: 20, severity: 'Şiddetli / Dirençli OKB', actionAdvice: 'Maksimum doz SSRI/Klomipramin + Antipsikotik güçlendirme (Aripiprazol/Risperidon) ve yoğun BDT programı.' }
    ],
    reference: 'Goodman WK, Price LH, Rasmussen SA, et al. The Yale-Brown Obsessive Compulsive Scale. I. Development, use, and reliability. Arch Gen Psychiatry. 1989.'
  },
  {
    id: 'pcptsd5',
    code: 'PC-PTSD-5',
    name: 'Birinci Basamak TSSB Tarama Ölçeği (PC-PTSD-5)',
    targetCondition: 'Travma Sonrası Stres Bozukluğu (TSSB)',
    description: 'Yaşamı tehdit eden travmatik bir olaya maruz kalan bireylerde DSM-5 TSSB semptomlarını saptayan 5 maddelik geçerli klinik ölçek.',
    timeframe: 'Son 1 ay içinde',
    questions: [
      {
        id: 1,
        text: 'Travmatik olay hakkında kabuslar gördünüz mü veya düşünmek istemediğiniz halde zihninize zorla giren anılar yaşadınız mı? (Yeniden Yaşantılama)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 2,
        text: 'Olayı hatırlatan durumlar, yerler, insanlar veya düşüncelerden kaçınmak için özel çaba gösterdiniz mi? (Kaçınma)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 3,
        text: 'Sürekli tetikte, temkinli veya kolayca irkilir bir halde oldunuz mu? (Aşırı Uyarılmışlık)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 4,
        text: 'Kendinizi hissizleşmiş, başkalarından veya çevrenizden kopmuş/yabancılaşmış hissettiniz mi? (Duygusal Küntleşme)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 5,
        text: 'Kendinizi, başkalarını veya dünyayı tamamen güvensiz görüp aşırı suçluluk ya da öfke duydunuz mu? (Bilişsel Değişiklik)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 2, severity: 'Negatif TSSB Taraması', actionAdvice: 'TSSB tanısı olası görünmemektedir; destekleyici yaklaşım sürdürülür.' },
      { minScore: 3, maxScore: 5, severity: 'Pozitif TSSB Taraması (≥3 Evet)', actionAdvice: 'Klinik TSSB değerlendirmesi gereklidir! Travma Odaklı BDT, EMDR terapisi veya SSRI (Sertralin/Paroksetin) tedavisi planlanmalıdır.' }
    ],
    reference: 'Prins A, Bovin MJ, Smolenski DJ, et al. The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5): development and evaluation. J Gen Intern Med. 2016.'
  },
  {
    id: 'audit',
    code: 'AUDIT-C',
    name: 'Alkol Kullanım Bozuklukları Tanıma Testi (AUDIT-C)',
    targetCondition: 'Riskli Alkol Kullanımı ve Bağımlılık',
    description: 'Dünya Sağlık Örgütü (WHO) tarafından geliştirilen, tehlikeli ve zararlı alkol tüketimini saptayan 3 maddelik konsantre klinik tarama ölçeği.',
    timeframe: 'Son 1 yıl boyunca',
    questions: [
      {
        id: 1,
        text: 'Ne sıklıkla alkol içeren bir içki tüketirsiniz?',
        options: [{ label: 'Hiçbir zaman', value: 0 }, { label: 'Ayda 1 veya daha az', value: 1 }, { label: 'Ayda 2-4 kez', value: 2 }, { label: 'Haftada 2-3 kez', value: 3 }, { label: 'Haftada 4 veya daha fazla', value: 4 }]
      },
      {
        id: 2,
        text: 'Alkol aldığınız tipik bir günde kaç standart kadeh içersiniz?',
        options: [{ label: '1 veya 2', value: 0 }, { label: '3 veya 4', value: 1 }, { label: '5 veya 6', value: 2 }, { label: '7 ila 9', value: 3 }, { label: '10 veya daha fazla', value: 4 }]
      },
      {
        id: 3,
        text: 'Tek bir oturumda 6 veya daha fazla standart kadeh alkolü ne sıklıkla tüketirsiniz? (Aşırı Alkol Alma / Binge)',
        options: [{ label: 'Hiçbir zaman', value: 0 }, { label: 'Aydan az', value: 1 }, { label: 'Ayda bir', value: 2 }, { label: 'Haftada bir', value: 3 }, { label: 'Hemen hemen her gün', value: 4 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 3, severity: 'Düşük Riskli Tüketim', actionAdvice: 'Sağlıklı sınırlar içinde tüketim; standart sağlık bilgisi verilir.' },
      { minScore: 4, maxScore: 7, severity: 'Riskli / Zararlı Alkol Tüketimi (Kadın ≥3, Erkek ≥4)', actionAdvice: 'Kısa müdahale (Brief Intervention), motivasyonel görüşme ve tüketimi azaltma hedefleri belirlenmelidir.' },
      { minScore: 8, maxScore: 12, severity: 'Yüksek Bağımlılık Riski', actionAdvice: 'Ayrıntılı bağımlılık muayenesi, detoksifikasyon ihtiyacı (CIWA-Ar), karaciğer paneli ve medikal nüks önleme (Naltrekson/Akamprosat).' }
    ],
    reference: 'Bush K, Kivlahan DR, McDonell MB, et al. The AUDIT alcohol consumption questions (AUDIT-C). Arch Intern Med. 1998.'
  },
  {
    id: 'ciwa',
    code: 'CIWA-Ar',
    name: 'Klinik Alkol Yoksunluğu Değerlendirme Envanteri (CIWA-Ar)',
    targetCondition: 'Akut Alkol Yoksunluğu Sendromu & Deliryum Tremens Riski',
    description: 'Alkol kesilmesinde semptom tetiklemeli benzodiazepin protokolünü (Diazepam) yönetmek ve deliryum tremensi önlemek için kullanılan acil klinik ölçek.',
    timeframe: 'Şu anki muayene anı',
    questions: [
      {
        id: 1,
        text: 'Bulantı ve Kusma (0: Yok, 3: Sürekli kusma ve öğürme)',
        options: [{ label: 'Yok (0)', value: 0 }, { label: 'Hafif bulantı (1)', value: 1 }, { label: 'Aralıklı kusma/öğürme (2)', value: 2 }, { label: 'Sürekli şiddetli kusma (3)', value: 3 }]
      },
      {
        id: 2,
        text: 'Titreme / Tremor (Kollar öne uzatılmış, parmaklar açık)',
        options: [{ label: 'Tremor yok', value: 0 }, { label: 'Hafif parmak ucu tremoru', value: 1 }, { label: 'Belirgin el tremoru', value: 2 }, { label: 'Tüm gövdede şiddetli kaba tremor', value: 3 }]
      },
      {
        id: 3,
        text: 'Paroksismal Terleme',
        options: [{ label: 'Terleme yok', value: 0 }, { label: 'Avuç içleri nemli', value: 1 }, { label: 'Alında belirgin ter damlaları', value: 2 }, { label: 'Sırılsıklam terleme (şiddetli)', value: 3 }]
      },
      {
        id: 4,
        text: 'Anksiyete ve İçsel Huzursuzluk',
        options: [{ label: 'Sakin / Anksiyete yok', value: 0 }, { label: 'Hafif kaygılı', value: 1 }, { label: 'Orta derecede huzursuz', value: 2 }, { label: 'Akut panik / dehşet hali', value: 3 }]
      },
      {
        id: 5,
        text: 'Ajitasyon ve Motor Huzursuzluk',
        options: [{ label: 'Normal aktivite', value: 0 }, { label: 'Biraz huzursuz kıpırdanma', value: 1 }, { label: 'Oturamıyor, sürekli geziniyor', value: 2 }, { label: 'Şiddetli ajitasyon / saldırganlık', value: 3 }]
      },
      {
        id: 6,
        text: 'Görsel / İşitsel Bozukluklar ve Halüsinasyonlar',
        options: [{ label: 'Yok', value: 0 }, { label: 'Işığa/sese hafif hassasiyet', value: 1 }, { label: 'Korkutucu illüzyonlar', value: 2 }, { label: 'Açık halüsinasyonlar (böcek görme vb.)', value: 3 }]
      },
      {
        id: 7,
        text: 'Oryantasyon ve Bilinç Bozukluğu (Gün, yer, kişi sorgulanır)',
        options: [{ label: 'Tam oryante (0)', value: 0 }, { label: 'Tarihte 1-2 gün belirsiz (1)', value: 1 }, { label: 'Yıl veya yeri karıştırıyor (2)', value: 2 }, { label: 'Tam dezoryante / Deliryum Tremens (3)', value: 3 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 5, severity: 'Hafif Yoksunluk', actionAdvice: 'Destekleyici bakım, hidrasyon, Tiamin 100 mg IV/IM. Genellikle benzodiazepin gerektirmez.' },
      { minScore: 6, maxScore: 11, severity: 'Orta Düzey Yoksunluk', actionAdvice: 'Semptom tetiklemeli Diazepam 10-20 mg PO verilmeli ve 1-2 saatte bir CIWA tekrarlanmalıdır.' },
      { minScore: 12, maxScore: 21, severity: 'Şiddetli Yoksunluk / Deliryum Tremens Riski', actionAdvice: 'ACİL! Yataklı servis/YBÜ izlemi. Yüksek doz Diazepam (10-20 mg IV/PO her saat başı), IV Tiamin, elektrolit düzeltilmesi.' }
    ],
    reference: 'Sullivan JT, Sykora K, Schneiderman J, et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict. 1989.'
  },
  {
    id: 'cssrs',
    code: 'C-SSRS',
    name: 'Columbia İntihar Şiddetini Değerlendirme Ölçeği (C-SSRS Screener)',
    targetCondition: 'İntihar Düşüncesi ve Davranış Riski Taraması',
    description: 'Klinik ortamda intihar düşüncesi şiddetini ve eyleme geçme niyetini katmanlı olarak değerlendiren küresel standart güvenlik ölçeği.',
    timeframe: 'Son 1 ay ve ömür boyu',
    questions: [
      {
        id: 1,
        text: 'Ölmüş olmayı ya da uyuyup bir daha uyanmamayı dilediğiniz oldu mu? (Pasif İntihar Düşüncesi)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 2,
        text: 'Kendinizi öldürmeyi düşündünüz mü? (Aktif İntihar Düşüncesi)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 2 }]
      },
      {
        id: 3,
        text: 'Bunu nasıl yapabileceğinize dair bir yöntem/yol aklınızdan geçti mi? (Yöntem)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 3 }]
      },
      {
        id: 4,
        text: 'Bu düşünceleri eyleme geçirme niyetiniz veya isteğiniz oldu mu? (Niyet)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 4 }]
      },
      {
        id: 5,
        text: 'Bunu gerçekleştirmek için belirli bir plan tasarladınız mı? (Spesifik Plan)',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 5 }]
      },
      {
        id: 6,
        text: 'Geçmişte ya da son dönemde hayatınıza son vermek için bir girişimde bulundunuz mu veya hazırlık yaptınız mı?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 5 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 1, severity: 'Düşük Risk', actionAdvice: 'Rutin klinik destek ve psikoeğitim; acil kriz hattı bilgisi paylaşımı.' },
      { minScore: 2, maxScore: 3, severity: 'Orta Düzey Risk', actionAdvice: 'Güvenlik planlaması yapılmalı, öldürücü araçlar (silah, ilaç stoğu) aile tarafından uzaklaştırılmalı, sık vizit planlanmalıdır.' },
      { minScore: 4, maxScore: 20, severity: 'YÜKSEK / İMMİNENT İNTİHAR RİSKİ', actionAdvice: 'KIRMIZI ALARM! Hasta yalnız bırakılmamalıdır. Acil psikiyatri konsültasyonu ve kapalı servis yatış değerlendirmesi zorunludur.' }
    ],
    reference: 'Posner K, Brown GK, Stanley B, et al. The Columbia-Suicide Severity Rating Scale: initial validity and internal consistency findings. Am J Psychiatry. 2011.'
  },
  {
    id: 'bsl23',
    code: 'BSL-23',
    name: 'Borderline Semptom Listesi Kısa Formu (BSL-23)',
    targetCondition: 'Sınırda (Borderline) Kişilik Bozukluğu Şiddeti',
    description: 'Duygulanım dalgalanması, kimlik karmaşası, boşluk hissi ve kendine zarar verme dürtülerini ölçen 6 temel madde.',
    timeframe: 'Son 1 hafta boyunca',
    questions: [
      {
        id: 1,
        text: 'Terk edilmekten veya yalnız kalmaktan dehşet derecesinde korktum',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı', value: 4 }]
      },
      {
        id: 2,
        text: 'İçimde derin, katlanılmaz ve tarif edilemez bir boşluk hissettim',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı', value: 4 }]
      },
      {
        id: 3,
        text: 'Duygularım saatler içinde yoğun coşku, öfke, hüzün veya anksiyete arasında fırtına gibi değişti',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı', value: 4 }]
      },
      {
        id: 4,
        text: 'Kendime zarar verme (kesme, yakma, aşırı doz alma) dürtüsü yaşadım',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı', value: 4 }]
      },
      {
        id: 5,
        text: 'Öfkemi kontrol etmekte zorlandım veya şiddetli öfke patlamaları yaşadım',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı', value: 4 }]
      },
      {
        id: 6,
        text: 'İnsanları bir anda mükemmel görüp kısa süre sonra tamamen değersiz/kötü hissettim (Bölme / Splitting)',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı', value: 4 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 6, severity: 'Düşük Borderline Şiddeti', actionAdvice: 'Belirgin patoloji yok veya remisyonda.' },
      { minScore: 7, maxScore: 14, severity: 'Orta Düzey BPD Belirtileri', actionAdvice: 'Diyalektik Davranış Terapisi (DBT) veya Şema Terapi önerilir.' },
      { minScore: 15, maxScore: 24, severity: 'Ağır Borderline Belirtileri & Kriz', actionAdvice: 'Kriz güvenliği planlaması, yoğun DBT beceri eğitimi; afektif dalgalanma için Düşük Doz Atipik AP veya Lamotrijin.' }
    ],
    reference: 'Bohus M, Kleindienst N, Limberger MF, et al. The short version of the Borderline Symptom List (BSL-23). J Pers Disord. 2009.'
  },
  {
    id: 'isi',
    code: 'ISI',
    name: 'İnsomni Şiddet İndeksi (Insomnia Severity Index)',
    targetCondition: 'İnsomni (Uykusuzluk Bozukluğu)',
    description: 'Uykuya dalma, sürdürme, sabah erken uyanma ve günlük işlevsellik bozulmasını değerlendiren 7 maddelik klinik indeks.',
    timeframe: 'Son 2 hafta boyunca',
    questions: [
      {
        id: 1,
        text: 'Uykuya dalma güçlüğünün şiddeti',
        options: [{ label: 'Yok', value: 0 }, { label: 'Hafif', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Şiddetli', value: 3 }, { label: 'Çok Şiddetli', value: 4 }]
      },
      {
        id: 2,
        text: 'Uykuyu sürdürme (gece uyanma) güçlüğünün şiddeti',
        options: [{ label: 'Yok', value: 0 }, { label: 'Hafif', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Şiddetli', value: 3 }, { label: 'Çok Şiddetli', value: 4 }]
      },
      {
        id: 3,
        text: 'Sabah çok erken uyanma sorununun şiddeti',
        options: [{ label: 'Yok', value: 0 }, { label: 'Hafif', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Şiddetli', value: 3 }, { label: 'Çok Şiddetli', value: 4 }]
      },
      {
        id: 4,
        text: 'Mevcut uyku düzeninizden ne kadar tatminsizsiniz?',
        options: [{ label: 'Çok tatminim', value: 0 }, { label: 'Tatminim', value: 1 }, { label: 'Kısmen tatminsizim', value: 2 }, { label: 'Tatminsizim', value: 3 }, { label: 'Hiç tatmin değilim', value: 4 }]
      },
      {
        id: 5,
        text: 'Uyku sorununuz günlük işlevselliğinizi (yorgunluk, dikkat, iş performansı) ne kadar etkiliyor?',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı derecede', value: 4 }]
      },
      {
        id: 6,
        text: 'Uyku sorununuzun yaşam kalitenizi düşürdüğü başkaları tarafından ne kadar fark ediliyor?',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı derecede', value: 4 }]
      },
      {
        id: 7,
        text: 'Mevcut uyku sorununuz hakkında ne kadar kaygılanıyor veya sıkıntı duyuyorsunuz?',
        options: [{ label: 'Hiç', value: 0 }, { label: 'Biraz', value: 1 }, { label: 'Orta', value: 2 }, { label: 'Çok', value: 3 }, { label: 'Aşırı derecede', value: 4 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 7, severity: 'Klinik Olarak Anlamlı Uykusuzluk Yok', actionAdvice: 'Rutin uyku hijyeni önerileri yeterlidir.' },
      { minScore: 8, maxScore: 14, severity: 'Eşik Düzeyde İnsomni', actionAdvice: 'Uyku hijyeni, kısıtlayıcı uyaran kontrolü ve kafein/ekran düzenlemesi.' },
      { minScore: 15, maxScore: 21, severity: 'Orta Şiddette Klinik İnsomni', actionAdvice: 'İnsomni için BDT (CBT-I) birinci sıra tedavidir; uyku kısıtlaması uygulanmalıdır.' },
      { minScore: 22, maxScore: 28, severity: 'Ağır Düzeyde Klinik İnsomni', actionAdvice: 'Yoğun CBT-I + Gerekirse kısa süreli (2-4 hafta) farmakoterapi (Melatonin reseptör agonisti/Z-ilaç/Trazodon).' }
    ],
    reference: 'Morin CM, Belleville G, Bélanger L, et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep. 2011.'
  },
  {
    id: 'scoff',
    code: 'SCOFF',
    name: 'SCOFF Yeme Bozuklukları Tarama Anketi',
    targetCondition: 'Anoreksiya Nervoza ve Bulimiya Nervoza',
    description: 'Yeme bozukluklarını birinci basamak ve poliklinikte hızla taramak için geliştirilmiş 5 soruluk yüksek duyarlılıklı anket.',
    timeframe: 'Son 3 ay boyunca',
    questions: [
      {
        id: 1,
        text: 'Rahatsız edici derecede tok hissettiğiniz için kendinizi kusturduğunuz (Sick) oluyor mu?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 2,
        text: 'Ne kadar yediğiniz üzerindeki denetiminizi kaybettiğinizden (Control) endişeleniyor musunuz?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 3,
        text: 'Son 3 ay içinde 6 kilodan fazla (One stone / ~6 kg) kilo kaybettiniz mi?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 4,
        text: 'Diğer insanlar çok zayıf olduğunuzu söylerken siz kendinizi şişman (Fat) buluyor musunuz?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      },
      {
        id: 5,
        text: 'Yiyeceklerin (Food) hayatınızı tamamen yönettiğini söyler misiniz?',
        options: [{ label: 'Hayır', value: 0 }, { label: 'Evet', value: 1 }]
      }
    ],
    interpretation: [
      { minScore: 0, maxScore: 1, severity: 'Düşük Yeme Bozukluğu Riski', actionAdvice: 'Yeme bozukluğu olası değildir.' },
      { minScore: 2, maxScore: 5, severity: 'Pozitif Yeme Bozukluğu Taraması (≥2 Evet)', actionAdvice: 'Anoreksiya veya Bulimiya açısından yüksek olasılık! BKİ ölçümü, biyokimya/elektrolit paneli, EKG ve yeme bozuklukları uzman hekim değerlendirmesi gerekir.' }
    ],
    reference: 'Morgan JF, Reid F, Lacey JH. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ. 1999.'
  },
  {
    id: 'mmse',
    code: 'SMMT / MMSE',
    name: 'Standardize Mini Mental Test (Kısa Kognitif Tarama)',
    targetCondition: 'Deliryum, Hafif Kognitif Bozukluk ve Demans Taraması',
    description: 'Yönelim, kayıt hafızası, dikkat/hesaplama, hatırlama ve lisan işlevlerini nesnel olarak ölçen 30 puanlık klinik araç.',
    timeframe: 'Muayene anı',
    questions: [
      {
        id: 1,
        text: 'Zaman Yönelimi (Yıl, Mevsim, Ay, Gün, Tarih - her doğru 1 puan)',
        options: [{ label: '0-1 doğru', value: 0 }, { label: '2-3 doğru', value: 2 }, { label: '4 doğru', value: 4 }, { label: '5/5 tam doğru', value: 5 }]
      },
      {
        id: 2,
        text: 'Mekan Yönelimi (Ülke, İl, İlçe, Hastane/Bina, Kat - her doğru 1 puan)',
        options: [{ label: '0-1 doğru', value: 0 }, { label: '2-3 doğru', value: 2 }, { label: '4 doğru', value: 4 }, { label: '5/5 tam doğru', value: 5 }]
      },
      {
        id: 3,
        text: 'Kayıt Hafızası (Masa, Bayrak, Elma - 3 kelimeyi tekrarlama)',
        options: [{ label: '0 kelime', value: 0 }, { label: '1 kelime', value: 1 }, { label: '2 kelime', value: 2 }, { label: '3 kelime tam doğru', value: 3 }]
      },
      {
        id: 4,
        text: 'Dikkat ve Hesaplama (100\'den geriye 7\'şer çıkarma: 93, 86, 79, 72, 65)',
        options: [{ label: '0-1 çıkarma doğru', value: 1 }, { label: '2-3 çıkarma doğru', value: 3 }, { label: '4-5 çıkarma tam doğru', value: 5 }]
      },
      {
        id: 5,
        text: 'Gecikmiş Hatırlama (Daha önce söylenen 3 kelimeyi tekrar sorma)',
        options: [{ label: '0 kelime hatırladı', value: 0 }, { label: '1 kelime hatırladı', value: 1 }, { label: '2 kelime hatırladı', value: 2 }, { label: '3 kelime tam hatırladı', value: 3 }]
      },
      {
        id: 6,
        text: 'Lisan & Görsel-Mekansal (Saat/Kalem adlandırma, 3 aşamalı emir, kesişen beşgen çizimi)',
        options: [{ label: '0-3 puan', value: 3 }, { label: '4-6 puan', value: 6 }, { label: '7-9 puan tam doğru', value: 9 }]
      }
    ],
    interpretation: [
      { minScore: 24, maxScore: 30, severity: 'Normal Bilişsel İşlev', actionAdvice: 'Belirgin kognitif kayıp saptanmadı. Subjektif yakınma varsa 6 ay sonra takip.' },
      { minScore: 18, maxScore: 23, severity: 'Hafif Kognitif Bozukluk / Erken Demans', actionAdvice: 'Kranial MR/BT, B12, Folat, TSH, VDRL testleri ve ayrıntılı nöropsikolojik test bataryası.' },
      { minScore: 0, maxScore: 17, severity: 'Orta-Ağır Kognitif Bozulma / Deliryum', actionAdvice: 'Akut başlangıçlı ise ACİL DELİRYUM araştırması; sinsi ilerlemişse nöroloji/psikiyatri ortak demans tedavisi (AChE inhibitörleri, Memantin).' }
    ],
    reference: 'Folstein MF, Folstein SE, McHugh PR. "Mini-mental state". A practical method for grading the cognitive state of patients for the clinician. J Psychiatr Res. 1975.'
  }
];
