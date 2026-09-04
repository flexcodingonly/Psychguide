import { 
  MSEOptionGroup, 
  MedicolegalItem, 
  DiagnosticTensionPoint, 
  DocumentationCorrection, 
  MSECaseExample 
} from '../types';

/**
 * 1. ÇEKİRDEK RUHSAL DURUM MUAYENESİ (MSE) SEÇENEK GRUPLARI
 * 4 Basamaklı Çıpa (0: Olağan/Korunmuş, 1: Hafif sapma, 2: Belirgin sapma, 3: Ağır/Acil sapma)
 * Operasyonel tanımlar ve doğrudan kopyalanabilir profesör not cümleleri.
 */
export const MSE_DATA: MSEOptionGroup[] = [
  {
    id: 'consciousness_attention',
    title: '1. Bilinç, Uyanıklık, Farkındalık ve Dikkat (Consciousness & Attention)',
    description: 'Uyanıklık düzeyi, dalgalanma (fluktuasyon), odaklanma ve dikkatin sürdürülebilmesi.',
    options: [
      {
        term: 'Alert / Tam Uyanık / Çevresel farkındalık tam (Puan 0)',
        definition: 'Spontan uyanık, çevresel uyaranlara uygun yanıtlı ve görüşmeye tam katılıyor.',
        sampleSentence: 'Görüşme boyunca alert, çevresel farkındalığı ve spontan etkileşimi korunmuştu.',
        anchorScore: 0
      },
      {
        term: 'Hiperuyanıklık (Hyperarousal / Hypervigilance) (Puan 1)',
        definition: 'Uyanıklık düzeyi ve çevresel uyaranlara reaktivite belirgin artmış, startle refleksi canlı.',
        sampleSentence: 'Uyanıklık düzeyi artmış, çevresel uyaranlara aşırı reaktif ve hypervigilant görünümdeydi.',
        anchorScore: 1
      },
      {
        term: 'Somnolans (Uyuşukluk / Uykuya eğilim) (Puan 2)',
        definition: 'Sözel veya hafif dokunsal uyarıyla kolayca uyanır, uyarı kesildiğinde tekrar uyur.',
        sampleSentence: 'Belirgin somnolandı; sözel uyaranla kolayca uyanıyor ancak uyarı kesildiğinde yeniden uykuya eğilim gösteriyordu.',
        anchorScore: 2
      },
      {
        term: 'Letarji / Obtundasyon (Puan 2-3)',
        definition: 'Spontan etkileşim az, dikkat kısa, yanıtlar yavaş, daha güçlü uyarı gereksinimi var.',
        sampleSentence: 'Letarjik/obtunde görünümde; güçlü uyarıyla kısa süreli etkileşime giriyor, dikkati sürdüremiyordu.',
        anchorScore: 2
      },
      {
        term: 'Bilinç Stuporu (Bilinç Düzeyi İleri Baskılanma) (Puan 3)',
        definition: 'Ağrılı uyarana ancak minimal yanıt alınan ileri düzey bilinç baskılanması (katatonik stupordan medikal ayrım gerekir).',
        sampleSentence: 'Bilinç düzeyi stuporöz; güçlü ve ağrılı uyaranlara minimal yanıtlıydı.',
        anchorScore: 3
      },
      {
        term: 'Bilinçte Bulanıklık / Clouding of Consciousness (Puan 2)',
        definition: 'Farkındalık, dikkat ve bilişin netliğinin azalması; çevrenin zihinsel olarak "sisli" algılanması.',
        sampleSentence: 'Bilinçte bulanıklık izlenimi vardı; çevresel farkındalık ve dikkat netliği azalmıştı.',
        anchorScore: 2
      },
      {
        term: 'Akut Fluktuasyon (Dalgalanma - Delirium Alarmı!) (Puan 3)',
        definition: 'Uyanıklık ve dikkat saatler hatta dakikalar içinde değişkenlik gösteriyor (delirium lehine yüksek getirili bulgu).',
        sampleSentence: 'Görüşme sırasında uyanıklık ve dikkat belirgin dalgalanma gösterdi; fluktuan seyir mevcuttu.',
        anchorScore: 3
      },
      {
        term: 'Dikkat: Sürdürülen dikkat bozuk (Sustained Attention Deficit) (Puan 2)',
        definition: 'Ayları tersten sayma veya seri görevleri sürdürememe, birkaç adımdan sonra odağı kaybetme.',
        sampleSentence: 'Sürdürülen dikkat belirgin bozuk; ayları tersten sayma görevini birkaç adımdan sonra kaybetti.',
        anchorScore: 2
      },
      {
        term: 'Dikkat: Kolay Çeldirilebilirlik (Distractibility) (Puan 2)',
        definition: 'İlgisiz dış veya iç uyaranların dikkati hızla ele geçirmesi (mani, DEHB, erken delirium).',
        sampleSentence: 'Dikkati çevresel uyaranlarla kolayca dağılıyor; görüşme hedefini sürdürmekte zorlanıyordu.',
        anchorScore: 2
      }
    ]
  },
  {
    id: 'appearance',
    title: '2. Genel Görünüm ve Davranış (Appearance & General Behavior)',
    description: 'Kronolojik yaş uyumu, frajilite, öz bakım, giyim, göz teması, yüz ifadesi ve tutum.',
    options: [
      {
        term: 'Görünür yaş kronolojik yaşla uyumlu / Genel beden durumu iyi (Puan 0)',
        definition: 'Biyolojik yaşıyla uyumlu, hidrasyon ve beslenme durumu kabaca korunmuş.',
        sampleSentence: 'Görünür yaşı biyolojik yaşıyla uyumluydu; beslenme ve hidrasyon durumu kabaca korunmuş izlendi.',
        anchorScore: 0
      },
      {
        term: 'Olduğundan yaşlı / Kaşektik / Frajil görünüm (Puan 2)',
        definition: 'Kronik hastalık, ağır depresyon, kaşeksi, dehidratasyon, self-neglect izlenimi.',
        sampleSentence: 'Görünür yaşı kronolojik yaşına göre belirgin yaşlı; kaşektik ve düşkün beden durumundaydı.',
        anchorScore: 2
      },
      {
        term: 'Öz bakım belirgin bozulmuş / Hijyen ihmali (Puan 2)',
        definition: 'Saç, sakal, tırnak, diş bakımı yetersiz, kirli giysiler, beden kokusu belirgin (sosyal ihmal, psikoz, ağır depresyon).',
        sampleSentence: 'Öz bakımı belirgin bozulmuş; kıyafetleri kirli ve beden kokusu belirgindi.',
        anchorScore: 2
      },
      {
        term: 'Giyim mevsime ve bağlama uygunsuz (Puan 2)',
        definition: 'Sıcak havada çok katmanlı kalın giyim veya kışın çıplaklık; tuhaflık veya disinhibisyon.',
        sampleSentence: 'Giyimi mevsim ve ortama belirgin uygunsuz; sıcak havaya rağmen çok katmanlı kıyafetler giymişti.',
        anchorScore: 2
      },
      {
        term: 'Aşırı gösterişli / Flamboyant / Manik giyim (Puan 2)',
        definition: 'Aşırı parlak renkler, abartılı aksesuarlar, bazale göre dikkat çekiciliğin çarpıcı artışı.',
        sampleSentence: 'Görünümü belirgin gösterişli; aksesuar ve kıyafet seçimi bazaline göre artmış dikkat çekicilikteydi.',
        anchorScore: 2
      },
      {
        term: 'Paranoid gizlenme (Concealment / Saklanma) (Puan 2)',
        definition: 'Şapka, güneş gözlüğü, maske ile yüzünü gizleme, telefon kameralarını bantlama, kapıya dönük oturma.',
        sampleSentence: 'Görüşme boyunca çevresel izlenmeye karşı belirgin korunma davranışları ve saklanma sergiledi.',
        anchorScore: 2
      },
      {
        term: 'Göz teması doğal ve sürdürülebilir (Puan 0)',
        definition: 'Görüşmeciyle rahat, sosyal ritme uygun, karşılıklı ve esnek göz teması.',
        sampleSentence: 'Göz teması doğal, sosyal ritme uygun ve görüşme boyunca sürdürülebilirdi.',
        anchorScore: 0
      },
      {
        term: 'Göz teması kısıtlı / Kaçınan (Puan 1-2)',
        definition: 'Gözlerini kaçıran, yere bakan, doğrudan temastan çekinen (anksiyete, utanç, otizm, depresyon).',
        sampleSentence: 'Göz teması kısıtlı ancak gerektiğinde kurulabilir ve kısa süreli sürdürülebilirdi.',
        anchorScore: 1
      },
      {
        term: 'Göz teması delici / Aşırı sabit / İntrüzif (Puan 2)',
        definition: 'Sosyal ritimden kopuk, uzun, kesintisiz, tehditkar veya test edici bakışlar (mani, psikoz).',
        sampleSentence: 'Göz teması aşırı sabit ve intrüzifti; sosyal olarak beklenen bakış kırılmaları azalmıştı.',
        anchorScore: 2
      },
      {
        term: 'Boş / Vacant bakış (Puan 2)',
        definition: 'Sosyal ve emosyonel karşılıklılıktan yoksun, çevreye düşük bağlı donuk bakış (katatoni, negatif psikoz, demans).',
        sampleSentence: 'Bakışları çoğunlukla boş ve çevresel etkileşime düşük yanıtlıydı.',
        anchorScore: 2
      },
      {
        term: 'Yüz ifadesi hipomimik / amimik (Puan 2)',
        definition: 'Yüz kaslarının ve spontan mimik repertuarının belirgin azalması (Parkinsonizm, negatif belirti, depresyon).',
        sampleSentence: 'Yüz ifadesi hipomimikti; mimik ve jest repertuarı belirgin azalmıştı.',
        anchorScore: 2
      },
      {
        term: 'Görüşmeye tutumu: Guarded / Ketum (Puan 2)',
        definition: 'Sorulara kısa, koruyucu yanıtlar verme, bilgi saklama, "bunu neden soruyorsunuz" şüphesi.',
        sampleSentence: 'Görüşmede belirgin guarded; özellikle sanrısal temalarda bilgi paylaşımını bilinçli sınırladı.',
        anchorScore: 2
      },
      {
        term: 'Görüşmeye tutumu: Hostil / Saldırgan (Puan 2-3)',
        definition: 'Sözlü veya beden diliyle tehdit, küçümseme, provokatif veya öfkeli tutum.',
        sampleSentence: 'Tutumu belirgin hostil; ses tonunu yükseltme ve tehditkâr beden dili izlendi.',
        anchorScore: 3
      },
      {
        term: 'Aşırı aşinalık / Overfamiliarity / İntrüzivite (Puan 2)',
        definition: 'Sosyal sınırları hızla azaltma, uygunsuz samimiyet, söz kesme, kişisel alana girme (mani, frontal sendrom).',
        sampleSentence: 'Görüşmeciyle sosyal sınırları hızlı azaltan aşırı aşina ve intrüzif tutum sergiledi.',
        anchorScore: 2
      }
    ]
  },
  {
    id: 'psychomotor_catatonia',
    title: '3. Psikomotor Aktivite, Anormal Hareketler ve Katatoni (Motor & Catatonia)',
    description: 'Ajitasyon, retardasyon, akatizi, katatonik bulgular (BFCRS) ve ekstrapiramidal motor belirtiler.',
    options: [
      {
        term: 'Psikomotor aktivite olağan / Doğal devinim (Puan 0)',
        definition: 'Hareket miktarı, hızı ve beden dili bağlama ve duygulanıma uygun.',
        sampleSentence: 'Psikomotor aktivite olağan sınırlarda; spontan hareket başlatma ve jestler doğaldı.',
        anchorScore: 0
      },
      {
        term: 'Psikomotor ajitasyon / Pacing (Puan 2-3)',
        definition: 'Amaçlı veya amaçsız motor aktivite artışı, yerinde duramama, sık ayağa kalkma, volta atma.',
        sampleSentence: 'Psikomotor aktivite belirgin artmış; yerinde durmakta güçlük ve sık pacing izlendi.',
        anchorScore: 2
      },
      {
        term: 'Psikomotor retardasyon (Yavaşlama) (Puan 2)',
        definition: 'Spontan hareket, jest, mimik ve yanıt verme hızında belirgin ağırlık (melankolik depresyon).',
        sampleSentence: 'Psikomotor aktivite belirgin retarde; hareket başlatma ve yanıt verme hızı azalmıştı.',
        anchorScore: 2
      },
      {
        term: 'Akatizi (İçsel Motor Huzursuzluk) (Puan 2)',
        definition: 'Özellikle bacaklarda sübjektif motor huzursuzluk hissi, oturamama, sürekli ayak sallama (ilaç yan etkisi).',
        sampleSentence: 'Belirgin içsel huzursuzluk ve oturamama ile uyumlu akatizi bulguları izlendi.',
        anchorScore: 2
      },
      {
        term: 'Parkinsonizm / Bradikinezi / Rijidite (Puan 2)',
        definition: 'Hareketlerin yavaş ve küçük amplitüdlü olması, kaslarda kurşun boru/dişli çark rijiditesi, istirahat tremoru.',
        sampleSentence: 'Bradikinezi, hipomimi ve ekstremitelerde belirgin rijidite ile parkinsonian motor bulgular mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Tremor (İstirahat / Postüral / Kaba) (Puan 1-2)',
        definition: 'İstirahatte kaba para sayma tremoru veya postüral ince tremor (lityum, valproat, alkol yoksunluğu).',
        sampleSentence: 'Ellerde ince postüral / kaba istirahat tremoru izlendi.',
        anchorScore: 1
      },
      {
        term: 'Akut Distoni / Okülojirik Kriz (Acil!) (Puan 3)',
        definition: 'Sürekli veya aralıklı kas kasılmasıyla boynun arkaya bükülmesi (tortikollis) veya gözlerin yukarı kilitlenmesi.',
        sampleSentence: 'Dopamin antagonisti maruziyeti sonrası akut distonik postür ve okülojirik kriz gözlendi.',
        anchorScore: 3
      },
      {
        term: 'Tardif Diskinezi (Oro-bukko-lingual istemsiz hareket) (Puan 2)',
        definition: 'Kronik D2 blokajı sonrası dil çıkarma, çiğneme, dudak büzme, gövde salınımı (AIMS değerlendirmesi gerekir).',
        sampleSentence: 'Oro-bukko-lingual bölgede tardif diskinezi ile uyumlu koreoatetoid istemsiz hareketler izlendi.',
        anchorScore: 2
      },
      {
        term: 'Katatoni: Mutizm ve Staring (BFCRS Pozitif) (Puan 3)',
        definition: 'Spontan konuşmanın olmaması ve gözlerin uzun süre sabit bir noktaya dikilmesi.',
        sampleSentence: 'Spontan konuşma yoktu (mutizm); uzun süreli çevreye tepkisiz sabit bakış (staring) mevcuttu.',
        anchorScore: 3
      },
      {
        term: 'Katatoni: Balmumu Esnekliği (Waxy Flexibility) / Katalepsi (Puan 3)',
        definition: 'Ekstremitelerin muayenecinin verdiği pozisyonu plastik bir dirençle koruması.',
        sampleSentence: 'Ekstremitede balmumu esnekliği (waxy flexibility) ve verilen anormal postürü uzun süre koruma (katalepsi) izlendi.',
        anchorScore: 3
      },
      {
        term: 'Katatoni: Negativizm / Gegenhalten (Karşı Koyma) (Puan 3)',
        definition: 'Talimatlara veya pasif harekete karşı istemsiz, uygulanan kuvvetle artan direnç gösterme.',
        sampleSentence: 'Muayene talimatlarına ve pasif harekete karşı belirgin negativizm ve gegenhalten direnci izlendi.',
        anchorScore: 3
      },
      {
        term: 'Katatoni: Otomatik İtaat (Mitgehen) / Ekolali / Ekopraksi (Puan 3)',
        definition: 'En hafif dokunuşla yönelme (mitgehen), klinisyenin sözlerini (ekolali) veya hareketlerini (ekopraksi) istemsiz kopyalama.',
        sampleSentence: 'Minimal yönlendirmeyle aşırı motor eşlik (mitgehen) ve sözcükleri aynen yankılama (ekolali) izlendi.',
        anchorScore: 3
      }
    ]
  },
  {
    id: 'speech_language',
    title: '4. Konuşma ve Dil Psikopatolojisi (Speech & Language)',
    description: 'Konuşma miktarı, hızı, tonu, basınçlılığı, yanıt latansı, akıcılık ve artikülasyon.',
    options: [
      {
        term: 'Doğal hız, miktar, ses tonu ve akıcılıkta (Puan 0)',
        definition: 'Spontan, anlaşılır, modüle olabilen, prosodisi korunmuş konuşma.',
        sampleSentence: 'Konuşma miktarı yeterli, hızı normal, ses tonu modüle ve artikülasyonu akıcıydı.',
        anchorScore: 0
      },
      {
        term: 'Basınçlı Konuşma (Pressure of speech / Logore) (Puan 2)',
        definition: 'Konuşma hızı ve miktarı belirgin artmış, yüksek volümlü, kesilmesi ve durdurulması güç (akut mani).',
        sampleSentence: 'Konuşma belirgin basınçlı, hızlı ve araya girilmesi/kesilmesi güç nitelikteydi.',
        anchorScore: 2
      },
      {
        term: 'Konuşma Miktarı Yoksul (Poverty of Speech / Aloji) (Puan 2)',
        definition: 'Spontan konuşma yok denecek kadar az; sorulara yalnızca tek kelimelik veya heceli kısa yanıtlar verme.',
        sampleSentence: 'Spontan konuşma miktarı ileri derecede azalmıştı; açık uçlu sorulara kısa ve yoksul yanıtlar verdi.',
        anchorScore: 2
      },
      {
        term: 'İçerik Yoksulluğu (Poverty of Content) (Puan 2)',
        definition: 'Konuşma miktarı yeterli görünse de aktarılan anlamlı bilgi içeriği ve soyutlama son derece düşük.',
        sampleSentence: 'Konuşma miktarı yeterli görünse de bilgi taşıyan içerik belirgin derecede yoksuldu.',
        anchorScore: 2
      },
      {
        term: 'Yanıt Latansı Belirgin Uzamış (Puan 2)',
        definition: 'Sorunun sorulması ile hastanın yanıt vermeye başlaması arasında patolojik gecikme (depresyon, psikotik içe çekilme, stupor).',
        sampleSentence: 'Sorulara yanıt verme latansı belirgin uzamıştı; her yanıt öncesi uzun duraklamalar gözlendi.',
        anchorScore: 2
      },
      {
        term: 'Monoton / Düzleşmiş Prosodi (Aprozodi) (Puan 2)',
        definition: 'Duygusal melodinin, ses perdesi değişimlerinin ve vurgunun kaybolması (Parkinsonizm, negatif şizofreni).',
        sampleSentence: 'Konuşma monoton ve düşük melodik varyasyonluydu; emosyonel prosodi düzleşmişti.',
        anchorScore: 2
      },
      {
        term: 'Dizartrik / Peltek Artikülasyon (Puan 2)',
        definition: 'Dil mekaniğinde ve artikülasyonda motor bozulma (intoksikasyon, lityum toksisitesi, inme).',
        sampleSentence: 'Konuşma belirgin dizartrikti; sözcük artikülasyonu motor açıdan bozulmuştu.',
        anchorScore: 2
      },
      {
        term: 'Kelime Bulma Güçlüğü / Anomi (Puan 1-2)',
        definition: 'Hedef kelimeyi hatırlayamama, dolaylı tarif kullanma veya duraksama (nörokognitif bozukluk, afazi).',
        sampleSentence: 'Konuşmada belirgin sözcük bulma güçlüğü ve anomik duraksamalar izlendi.',
        anchorScore: 1
      },
      {
        term: 'Neolojizm / Kişiye Özgü Sözcükler (Puan 2)',
        definition: 'Sözlükte olmayan, hastanın kendi ürettiği ve sadece kendisine anlam ifade eden uydurma kelimeler.',
        sampleSentence: 'Konuşma akışı içinde kişiye özgü anlamlar yüklediği neolojizmler kullandı.',
        anchorScore: 2
      },
      {
        term: 'Kelimeler Arası Ses Uyumları (Clang Association) (Puan 2)',
        definition: 'Sözcüklerin anlam yerine kafiye, ritim ve fonetik benzerlik üzerinden seçilmesi (akut mani).',
        sampleSentence: 'Çağrışımlar anlamsal bağ yerine ses benzerliği ve uyak (clang association) üzerinden ilerliyordu.',
        anchorScore: 2
      }
    ]
  },
  {
    id: 'mood_affect',
    title: '5. Duygudurum ve Duygulanım Atlası (Mood & Affect)',
    description: 'Duygudurum (Mood): Hastanın kendi sözüyle sürdürülen içsel iklim. Duygulanım (Affect): Klinisyenin gözlediği anlık dışavurum.',
    options: [
      {
        term: 'Duygudurum Ötimik (Dengeli / Olağan) (Puan 0)',
        definition: 'Patolojik çökkünlük, öfori veya anksiyetenin olmadığı nötr duygudurum.',
        sampleSentence: 'Duygudurumunu dengeli olarak tarif ediyor; belirgin patolojik mood bildirimi saptanmadı.',
        anchorScore: 0
      },
      {
        term: 'Duygudurum Depresif / Çökkün ("Karanlık ve Boş") (Puan 2)',
        definition: 'Kederli, umutsuz, boşluk hissi ve karamsarlığın hakim olduğu içsel yaşantı.',
        sampleSentence: 'Duygudurumunu "sürekli ağlamaklı ve içim bomboş" olarak tarif ediyor; depresif mood mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Duygudurum Öforik / Taşkın / Elate (Puan 2)',
        definition: 'Koşullarla uyumsuz aşırı iyilik, coşku, şişinmiş özgüven ve yüksek enerji yaşantısı.',
        sampleSentence: 'Duygudurumunu "olağanüstü güçlü ve harika" olarak tarifliyor; öforik/elate mood izlendi.',
        anchorScore: 2
      },
      {
        term: 'Duygudurum İrritabl / Tersleyici / Tahammülsüz (Puan 2)',
        definition: 'Frustrasyon toleransı düşük, kolayca öfkelenen, çabuk parlayan içsel iklim.',
        sampleSentence: 'Duygudurum baskın olarak irritabldı; düşük frustrasyon toleransı ve gerginlik mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Duygudurum Disforik / İçsel Huzursuzluk (Puan 2)',
        definition: 'Hoşnutsuzluk, tedirginlik, gerilim ve kederin karışımı (karma durumlar, yoksunluk).',
        sampleSentence: 'Duygudurum disforik; belirgin içsel huzursuzluk, gerginlik ve hoşnutsuzluk mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Duygulanım: Tam Aralık ve Reaktif (Puan 0)',
        definition: 'Görüşme içeriğine uygun değişen geniş duygusal repertuar; uygun zamanlarda gülümser ve hüzünlenir.',
        sampleSentence: 'Duygulanım tam aralıkta, görüşme içeriğine reaktif ve bildirilen duygudurumla uyumluydu.',
        anchorScore: 0
      },
      {
        term: 'Duygulanım: Küntleşmiş (Blunted Affect) (Puan 2)',
        definition: 'Yüz ifadesi, mimikler ve jestlerdeki duygusal ifadenin belirgin azalması.',
        sampleSentence: 'Duygulanım belirgin künt; yüz, prosodi ve jestlerde emosyonel amplitüd azalmıştı.',
        anchorScore: 2
      },
      {
        term: 'Duygulanım: Düzleşmiş (Flat Affect) (Puan 3)',
        definition: 'Neredeyse hiçbir duygusal dışavurumun olmaması; donuk yüz, tekdüze ses, hareketsiz jestler.',
        sampleSentence: 'Duygulanım neredeyse düz; emosyonel dışavurum çok minimaldi (flat affect).',
        anchorScore: 3
      },
      {
        term: 'Duygulanım: Labil / Oynak (Puan 2)',
        definition: 'Dakikalar içinde ağlamadan gülmeye veya öfkeye kontrolsüz ve hızlı kaymalar (mani, BKB, psödobulber).',
        sampleSentence: 'Duygulanım belirgin labildi; dakikalar içinde gözyaşından öforiye hızlı geçişler izlendi.',
        anchorScore: 2
      },
      {
        term: 'Duygulanım: Uygunsuz / İnkonkruent (Inappropriate) (Puan 2-3)',
        definition: 'Duygusal ifadenin konuşulan içerikle bağlamsal zıtlığı (örn. kayıp veya tehdit anlatırken kıkırdama).',
        sampleSentence: 'Yakınının vefatını anlatırken kıkırdaması içerikle belirgin uygunsuzdu (inappropriate affect).',
        anchorScore: 3
      },
      {
        term: 'Non-reaktif Duygulanım (Puan 2)',
        definition: 'Olumlu veya olumsuz içerik değişikliklerine karşı hiçbir modülasyon göstermeme (melankoli).',
        sampleSentence: 'Olumlu veya olumsuz uyaranlara reaktivitesi belirgin azalmıştı; non-reaktif duygulanım izlendi.',
        anchorScore: 2
      }
    ]
  },
  {
    id: 'thought_process',
    title: '6. Düşünce Akışı ve Biçimi (Thought Process & Formal Thought Disorder)',
    description: 'Düşüncelerin organizasyonu, bağlantı gücü, hızı ve hedefe yönelikliği.',
    options: [
      {
        term: 'Lineer ve Hedefe Yönelik (Goal-directed) (Puan 0)',
        definition: 'Düşünceler mantıksal sıra içinde ilerler, soruya doğrudan ve açık yanıt verilir.',
        sampleSentence: 'Düşünce süreci lineer, mantıksal ve hedefe yönelikti; çağrışımları düzenliydi.',
        anchorScore: 0
      },
      {
        term: 'Çevresellik (Circumstantiality) (Puan 1)',
        definition: 'Aşırı gereksiz ayrıntılara ve yan yollara sapar, dinleyiciyi yorar ancak sonunda hedefe/soruya döner.',
        sampleSentence: 'Yanıtları çevresel ayrıntılara sapmakla birlikte eninde sonunda ana soruya geri dönüyordu.',
        anchorScore: 1
      },
      {
        term: 'Teğetsellik (Tangentiality) (Puan 2)',
        definition: 'Soruyla ilişkili bir noktadan başlar ancak giderek uzaklaşır ve ana hedefe asla geri dönmez.',
        sampleSentence: 'Yanıtları teğetseldi; sorunun hedefinden sapıyor ve asıl soruya doğrudan dönmüyordu.',
        anchorScore: 2
      },
      {
        term: 'Çağrışım Gevşemesi (Loose Associations / Derailment) (Puan 2-3)',
        definition: 'Cümleler veya fikirler arasındaki mantıksal köprülerin çözülmesi; kavramsal sıçramalar.',
        sampleSentence: 'Çağrışımları gevşemişti; ardışık fikirler ve cümleler arasındaki mantıksal bağ belirgin zayıftı.',
        anchorScore: 2
      },
      {
        term: 'Fikir Uçuşması (Flight of Ideas) (Puan 2)',
        definition: 'Düşünce akışı aşırı hızlanmıştır; fikirler ses benzerliği veya yüzeysel bağlarla hızla atlar (akut mani).',
        sampleSentence: 'Düşünce akışı hızlanmış; hızlı fakat yüzeysel çağrışımlarla fikir uçuşması belirgindi.',
        anchorScore: 2
      },
      {
        term: 'Düşünce Blokajı (Thought Blocking) (Puan 2)',
        definition: 'Konuşmanın ortasında düşünce akışının aniden durması ve zihnin boşaldığının belirtilmesi.',
        sampleSentence: 'Cümle ortasında ani düşünce blokajı yaşadı; ne söyleyeceğini kaybettiğini belirtti.',
        anchorScore: 2
      },
      {
        term: 'Düşünce Yavaşlaması / Düşünce Yoksulluğu (Puan 2)',
        definition: 'Fikir üretim hızının ve çeşitliliğinin belirgin azalması (ağır depresyon, negatif belirtiler).',
        sampleSentence: 'Düşünce üretimi belirgin fakirdi; yanıtlar kısa ve düşük zihinsel içerikliydi.',
        anchorScore: 2
      },
      {
        term: 'Perseverasyon (Puan 2)',
        definition: 'Soru veya konu değişmesine rağmen önceki temayı veya yanıtı ısrarla sürdürme (frontal/bilişsel patoloji).',
        sampleSentence: 'Konu ve sorular değişmesine rağmen önceki tema üzerinde belirgin perseverasyon gösterdi.',
        anchorScore: 2
      },
      {
        term: 'İllojiklik (Illogicality) (Puan 2)',
        definition: 'Öncüller ile sonuçlar arasındaki muhakeme ve çıkarım zincirinin formel olarak geçersiz olması.',
        sampleSentence: 'Düşünce akışında belirgin illojik çıkarımlar ve geçersiz muhakeme zincirleri mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'İnkoherans / Kelime Salatası (Word Salad) (Puan 3)',
        definition: 'Sözdiziminin ve anlamsal yapının tamamen çökmesi; dinleyicinin hiçbir anlam çıkaramaması.',
        sampleSentence: 'Söylem yer yer word-salad düzeyinde inkoheran ve bütünüyle takip edilemez nitelikteydi.',
        anchorScore: 3
      }
    ]
  },
  {
    id: 'thought_content_delusions',
    title: '7. Düşünce İçeriği, Sanrılar ve Obsesyonlar (Thought Content & Delusions)',
    description: 'Sanrılar, delüzyon yapısı (conviction, penetrasyon), obsesyonlar, aşırı değerli fikirler, intihar/şiddet riski.',
    options: [
      {
        term: 'Sanrısal içerik saptanmadı / Gerçeklik testi tam (Puan 0)',
        definition: 'Gerçek dışı sabit inanç veya aşırı değerli fikir saptanmadı.',
        sampleSentence: 'Düşünce içeriğinde persekütuar, referans, grandiyöz veya somatik sanrı saptanmadı.',
        anchorScore: 0
      },
      {
        term: 'Persekütuar (Kötülük Görme) Sanrısı (Puan 2-3)',
        definition: 'Kişinin izlendiği, kendisine komplo kurulduğu veya zehirleneceği yönünde sarsılmaz inanç.',
        sampleSentence: 'Düşünce içeriğinde sistematize, davranışsal korunma önlemlerine yol açan persekütuar sanrılar mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Referans Fikirleri / Referans Sanrısı (Puan 2)',
        definition: 'Televizyonun, internetin veya yabancıların kendisine özel mesaj verdiğine inanma.',
        sampleSentence: 'Medya ve çevresel olayların kendisine özel mesaj verdiğine ilişkin referans sanrıları mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Grandiyöz (Büyüklük) Sanrısı (Puan 2)',
        definition: 'Özel güçler, olağanüstü zenginlik, peygamberlik veya özel ilahi/teknolojik görev atfı.',
        sampleSentence: 'Kendisine olağanüstü güç, buluş ve görev atfeden yüksek convictionlı grandiyöz sanrılar mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Passivite / Kontrol Sanrıları (Made Acts / Impulses) (Puan 3)',
        definition: 'Duygu, dürtü veya hareketlerinin dış güçler tarafından yönetildiği/yaptırıldığı hissi (Schneiderian).',
        sampleSentence: 'Eylemlerinin ve bedeninin dış güçlerce kontrol edildiğine ilişkin passivite sanrıları tarifledi.',
        anchorScore: 3
      },
      {
        term: 'Düşünce Sokulması / Çekilmesi / Yayınlanması (Puan 3)',
        definition: 'Zihnine dışarıdan düşünce konduğu (insertion), çalındığı (withdrawal) veya etrafa yayıldığı (broadcasting) inancı.',
        sampleSentence: 'Düşüncelerinin zihnine zorla yerleştirildiği ve çevresindekilerce duyulabildiği inancı (broadcasting) mevcuttu.',
        anchorScore: 3
      },
      {
        term: 'Nihilistik Sanrı / Cotard Sendromu (Puan 3)',
        definition: 'Organlarının yok olduğu, öldüğü veya dünyanın bittiği inancı (ağır psikotik depresyon, açlık/dehidratasyon acili).',
        sampleSentence: 'Organlarının çürüdüğü ve kendisinin aslında ölü olduğuna ilişkin Cotard sendromu benzeri nihilistik sanrılar vardı.',
        anchorScore: 3
      },
      {
        term: 'Kıskançlık Sanrısı / Othello Sendromu (Puan 2-3)',
        definition: 'Partnerin sadakatsizliğine dair kanıta dayanmayan sarsılmaz inanç (şiddet ve cinayet riski taşır!).',
        sampleSentence: 'Partnerinin sadakatsizliğine ilişkin, ikna edilemeyen yüksek convictionlı delüzyonel kıskançlık mevcuttu.',
        anchorScore: 3
      },
      {
        term: 'Ego-distonik Obsesyonlar ve Kompulsiyonlar (Puan 2)',
        definition: 'İstenmeden gelen, rahatsız edici kuşkular/imgeler ve bunları nötralize eden zihinsel/fiziksel ritüeller.',
        sampleSentence: 'Kirlenme ve zarar verme temalı ego-distonik obsesyonlar ile kontrol kompulsiyonları mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Aşırı Değerli Fikir (Overvalued Idea) (Puan 1-2)',
        definition: 'Benlikle uyumlu, güçlü biçimde benimsenen ancak tam sanrısal kesinlik taşımayan inanç.',
        sampleSentence: 'Beden ağırlığı etrafında aşırı değerli fikir düzeyinde inanç mevcuttu; gerçeklik testi kısmen korunmuştu.',
        anchorScore: 1
      },
      {
        term: 'Pasif Ölüm İsteği (Aktif Plan Yok) (Puan 1-2)',
        definition: '"Keşke uyusam da uyanmasam" şeklinde ölüm arzusu, ancak aktif plan/niyet yok.',
        sampleSentence: 'Pasif ölüm isteği tariflemekte; ancak aktif intihar niyeti, planı veya preparatuvar davranış bildirmemektedir.',
        anchorScore: 1
      },
      {
        term: 'Aktif İntihar Düşüncesi / Planı / Niyeti (Acil Yatış & Gözlem!) (Puan 3)',
        definition: 'Ölme arzusu, yöntem, organize plan, veda hazırlığı ve kararlı niyet mevcudiyeti.',
        sampleSentence: 'Aktif intihar düşüncesi, organize yöntem ve belirgin niyet mevcuttur; akut risk yüksek kabul edildi.',
        anchorScore: 3
      },
      {
        term: 'Homisidal (Başkasına Zarar Verme) Düşüncesi / Planı (Acil Güvenlik!) (Puan 3)',
        definition: 'Belirli bir şahsa yönelik öldürme düşüncesi, intikam planı ve araca erişim.',
        sampleSentence: 'Belirli bir hedefe yönelik öldürme düşüncesi ve araca erişim mevcuttur; başkasına zarar verme riski acildir.',
        anchorScore: 3
      }
    ]
  },
  {
    id: 'perception',
    title: '8. Algı Bozuklukları Atlası (Perception & Hallucinations)',
    description: 'İşitsel (akoazm, AVH, emir), görsel, taktil (formikasyon), koku/tat, illüzyon ve depersonalizasyon/derealizasyon.',
    options: [
      {
        term: 'Algısal bozukluk tariflemiyor / İllüzyon-Varsanı yok (Puan 0)',
        definition: 'Dış uyaran olmadan algısal yaşantı saptanmadı.',
        sampleSentence: 'İşitsel, görsel, taktil veya olfaktör varsanı tariflemedi; algısal bozukluk saptanmadı.',
        anchorScore: 0
      },
      {
        term: 'Elementer İşitsel Varsanı (Akoazm / Acoasm) (Puan 1-2)',
        definition: 'Sözcük içermeyen tıkırtı, uğultu, çınlama, patlama, ıslık veya zil sesleri (tinnitus ve temporal lezyon ayrılmalı).',
        sampleSentence: 'Dış uyaran olmaksızın tıklama/uğultu biçiminde elementer işitsel varsanılar (akoazmlar) tarifledi.',
        anchorScore: 1
      },
      {
        term: 'İşitsel Sözel Varsanı (AVH - 2. Tekil Şahıs Eleştirel) (Puan 2-3)',
        definition: 'Hastaya doğrudan "sen kötüsün, ölmelisin" şeklinde hitap eden sesler.',
        sampleSentence: 'İkinci tekil şahısta kendisine doğrudan hitap eden, eleştirel işitsel sözel varsanılar tarifledi.',
        anchorScore: 2
      },
      {
        term: 'İşitsel Sözel Varsanı (3. Şahıs / Tartışan / Yorum Yapan) (Puan 2-3)',
        definition: 'Hasta hakkında konuşan sesler (discussing) veya yaptığı işleri canlı anlatan sesler (running commentary).',
        sampleSentence: 'Kendisinden üçüncü şahıs olarak bahseden ve eylemlerini eşzamanlı yorumlayan işitsel sesler tarifledi.',
        anchorScore: 3
      },
      {
        term: 'Buyurucu İşitsel Varsanı (Command Hallucination - Yüksek Risk!) (Puan 3)',
        definition: 'Kişiye kendisine veya başkasına zarar vermesini emreden sesler (uyma eğilimi acil risktir).',
        sampleSentence: 'Kendisine zarar vermesini emreden buyurucu işitsel varsanılar mevcut; seslerin otoritesi yüksek algılanıyor.',
        anchorScore: 3
      },
      {
        term: 'Düşünce Yankılanması (Gedankenlautwerden / Thought Echo) (Puan 2-3)',
        definition: 'Kendi düşündüğü şeyleri eşzamanlı veya hemen sonrasında sesli olarak duyma yaşantısı.',
        sampleSentence: 'Düşüncelerini sesli olarak işittiği Gedankenlautwerden / thought-echo fenomeni tarifledi.',
        anchorScore: 2
      },
      {
        term: 'Görsel Varsanı (Formed / İnsan-Hayvan Figürleri) (Puan 2-3)',
        definition: 'Gerçekte olmayan insan, gölge, böcek veya sahne görme (delirium, Lewy cisimcikli demans, intoksikasyon alarmı).',
        sampleSentence: 'Odanın köşesinde insan figürleri ve böcekler görme şeklinde canlı görsel varsanılar mevcuttu.',
        anchorScore: 2
      },
      {
        term: 'Taktil Varsanı / Formikasyon (Puan 2)',
        definition: 'Ciltte veya deri altında böceklerin gezdiği hissi (alkol yoksunluğu, kokain/stimulant, delusional infestation).',
        sampleSentence: 'Cildi üzerinde parazitlerin gezindiği hissi şeklinde taktil varsanılar (formikasyon) tarifledi.',
        anchorScore: 2
      },
      {
        term: 'Olfaktör / Gustatuar Varsanı (Temporal Lob Alarmı!) (Puan 2)',
        definition: 'Yanık, çürük veya metalik koku/tat algısı (temporal lob epilepsisi öncelikle dışlanmalıdır).',
        sampleSentence: 'Dış kaynak olmaksızın yanık kokusu algıladığı olfaktör varsanılar tarifledi; nörolojik inceleme planlandı.',
        anchorScore: 2
      },
      {
        term: 'İllüzyon (Yanılsama) (Puan 1)',
        definition: 'Gerçek bir dış uyaranın yanlış algılanması (örn. loş ışıkta askıyı insan sanma; delirium/anksiyete).',
        sampleSentence: 'Gerçek çevresel gölgelerin insan silüeti olarak yanlış algılandığı görsel illüzyonlar mevcuttu.',
        anchorScore: 1
      },
      {
        term: 'Depersonalizasyon / Derealizasyon (Puan 1-2)',
        definition: 'Bedenine dışarıdan bakıyormuş gibi yabancılaşma / Çevrenin rüya gibi, sisli, yapay ve uzak hissedilmesi.',
        sampleSentence: 'Kendisini bedeninin dışından izliyormuş hissi (depersonalizasyon) ve çevrenin sisli algılanması mevcuttu.',
        anchorScore: 1
      }
    ]
  },
  {
    id: 'cognition_neuropsychiatry',
    title: '9. Bilişsel İşlevler, Bellek ve Nöropsikiyatri (Cognition & Bedside Battery)',
    description: 'Yönelim (durumsal dahil), anlık kayıt (3/3), çalışma belleği, gecikmeli hatırlama, dil, yürütücü işlevler, praksi/gnozi.',
    options: [
      {
        term: 'Yönelim 4 alanda tam (Kişi, Yer, Zaman, Durum) (Puan 0)',
        definition: 'Kişi kim olduğunu, nerede olduğunu, tarihi ve hastanede bulunma nedenini eksiksiz biliyor.',
        sampleSentence: 'Kişi, yer, zaman ve durumsal yönelimi tam; çevresel oryantasyonu korunmuştu.',
        anchorScore: 0
      },
      {
        term: 'Zaman Yönelimi Bozuk (Puan 2)',
        definition: 'Günü, ayı, yılı veya mevsimi bilememe (organik ensefalopati, deliryum veya demansın erken bulgusu).',
        sampleSentence: 'Kişi ve yer yönelimi tam olmakla birlikte, gün ve ay yönelimi bozuktu.',
        anchorScore: 2
      },
      {
        term: 'Yer ve Mekan Yönelimi Bozuk (Puan 2)',
        definition: 'Bulunduğu hastaneyi veya şehri bilememe, evinde olduğunu sanma.',
        sampleSentence: 'Hastanede bulunduğunu kavrayamadı; yer yönelimi belirgin bozuktu.',
        anchorScore: 2
      },
      {
        term: 'Durumsal Yönelim Bozuk (Puan 2)',
        definition: 'Zaman ve yer bilinse dahi muayenede veya hastanede bulunma amacını sanrısal yorumlama.',
        sampleSentence: 'Zaman ve yer yönelimi tam olmasına karşın, hastaneye yatış nedenine dair durumsal yönelimi sanrısaldı.',
        anchorScore: 2
      },
      {
        term: 'Anlık Kayıt Tam (3/3 Kelime) (Puan 0)',
        definition: 'Verilen üç kelimeyi anında ve sorunsuz tekrarlayabilme.',
        sampleSentence: 'Üç kelimeyi anında 3/3 kaydedebildi; anlık kayıt işlevi sağlamdı.',
        anchorScore: 0
      },
      {
        term: 'Gecikmeli Geri Çağırma Bozuk (5 Dakika Sonra Recall) (Puan 2)',
        definition: '5 dakika sonra 3 kelimeden hiçbirini veya yalnızca birini hatırlayabilme (amnestik sendrom, Alzheimer).',
        sampleSentence: '5. dakikada serbest hatırlamada 0/3 kelime hatırladı; kategori ipucuyla da performans düzelmedi.',
        anchorScore: 2
      },
      {
        term: 'Çalışma Belleği / Seri İşlemler Bozuk (Puan 2)',
        definition: 'Geriye doğru 7\'şer çıkarma veya "DÜNYA" kelimesini tersten hecelemede ardışık hatalar yapma.',
        sampleSentence: 'Çalışma belleği görevlerinde (100\'den geriye 7\'şer çıkarma) belirgin hata ve perseverasyon gösterdi.',
        anchorScore: 2
      },
      {
        term: 'Yürütücü İşlev Bozukluğu (Executive Dysfunction) (Puan 2)',
        definition: 'Saat çizme testinde sayı yerleşimi ve akrep/yelkovan hatası; planlama ve sıralama kusuru.',
        sampleSentence: 'Saat çiziminde sayı yerleşimi ve kolları konumlandırmada belirgin yürütücü organizasyon hatası izlendi.',
        anchorScore: 2
      },
      {
        term: 'Soyut Düşünme: Somut / Literal Yanıtlar (Puan 2)',
        definition: 'Atasözlerini ve benzerlikleri soyutlayamama, yalnızca harfi harfine somut düzeyde yorumlama.',
        sampleSentence: 'Benzerlikler ve atasözü görevlerinde soyutlama yapamadı; belirgin somut (literal) yanıtlar verdi.',
        anchorScore: 2
      },
      {
        term: 'Konstrüksiyonel / İdeomotor Apraksi (Puan 2)',
        definition: 'Motor güç tam olmasına rağmen basit pentagon/küp kopyalayamama veya öğrenilmiş jesti yapamama.',
        sampleSentence: 'Küp ve iç içe geçmiş beşgen çiziminde belirgin konstrüksiyonel apraksi bulguları izlendi.',
        anchorScore: 2
      }
    ]
  },
  {
    id: 'insight_judgment_legal',
    title: '10. İçgörü, Yargılama ve Medikolegal Kapasite (Insight, Judgment & Legal)',
    description: 'Hastalık farkındalığı, tedaviye atıf, karar verme kapasitesi ve TMK/TCK bağlamı.',
    options: [
      {
        term: 'İçgörü Tam (Bilişsel ve Duygusal Kabul - Derece 6) (Puan 0)',
        definition: 'Ruhsal bir hastalığı olduğunu, semptomların kökenini ve tedavi gerekliliğini tam kabul ediyor.',
        sampleSentence: 'Hastalık farkındalığı tam; belirtilerini hastalığına atfedebiliyor ve tedavi gereksinimini açıkça kabul ediyor.',
        anchorScore: 0
      },
      {
        term: 'Entelektüel İçgörü (Kısmi Farkındalık - Derece 4) (Puan 1)',
        definition: 'Hasta olduğunu teorik olarak söyler ancak bunu pratik yaşamına ve tedavi uyumuna yansıtmaz.',
        sampleSentence: 'Hastalığına ilişkin entelektüel farkındalığı kısmen var; ancak emosyonel içgörü ve davranışsal kabul sınırlı.',
        anchorScore: 1
      },
      {
        term: 'İçgörü Yok / İnkar (Derece 1) (Puan 3)',
        definition: 'Hasta olduğunu bütünüyle reddeder; yaşantılarını dış dünyaya ve komploya bağlar.',
        sampleSentence: 'Hastalığını ve tedavi gereksinimini bütünüyle reddediyor; içgörü saptanmadı.',
        anchorScore: 3
      },
      {
        term: 'Yargılama Sağlam (Gerçek Yaşam ve Hipotetik) (Puan 0)',
        definition: 'Eylemlerinin olası sonuçlarını doğru tartar, güvenli ve gerçekçi kararlar alır.',
        sampleSentence: 'Yakın dönem kararları ve hipotetik muhakemesi emniyetli ve gerçeklikle uyumluydu.',
        anchorScore: 0
      },
      {
        term: 'Yargılama Belirgin Bozulmuş (Gerçek Yaşam Hataları) (Puan 3)',
        definition: 'Kontrolsüz para harcama, borçlanma, evi terk etme, saldırganlık, can güvenliğini hiçe sayma.',
        sampleSentence: 'Yakın dönem kontrolsüz harcama, uykusuz araç kullanma ve agresyon nedeniyle yargılama belirgin bozulmuştu.',
        anchorScore: 3
      },
      {
        term: 'Karar Verme Kapasitesi Kısıtlı (Decision-specific) (Puan 2-3)',
        definition: 'Önerilen tıbbi tedavinin risklerini, yararlarını ve tedavisizliğin sonuçlarını tartma yetisi bozulmuş.',
        sampleSentence: 'Önerilen yatış ve tedavinin sonuçlarını kavrama ve rasyonel akıl yürütme kapasitesi bozulmuştur.',
        anchorScore: 3
      },
      {
        term: 'TMK 405 Alarmı (Akıl Hastalığı Nedeniyle Kısıtlama İhtiyacı) (Puan 3)',
        definition: 'Kişinin işlerini görememesi, sürekli yardıma muhtaç olması veya başkalarının güvenliği için tehlike oluşturması.',
        sampleSentence: 'Mevcut klinik tablo işlerini görme ve güvenli karar verme yetisini ağır bozmuş olup TMK 405 değerlendirmesi gerektirebilir.',
        anchorScore: 3
      },
      {
        term: 'TMK 432 Alarmı (Koruma Amaçlı Özgürlüğün Kısıtlanması) (Puan 3)',
        definition: 'Toplum için tehlike oluşturan ve başka türlü korunması sağlanamayan akıl hastalığı/bağımlılık tablosu.',
        sampleSentence: 'Toplum ve kendisi için acil tehlike varlığı ve daha az kısıtlayıcı alternatif bulunmaması nedeniyle TMK 432 kapsamında ele alındı.',
        anchorScore: 3
      }
    ]
  }
];

/**
 * 2. TÜRK MEVZUATI VE MEDİKOLEGAL REHBER (TMK, TCK, HASTA HAKLARI)
 */
export const TURKISH_MEDICOLEGAL_DATA: MedicolegalItem[] = [
  {
    norm: 'TMK 405',
    situation: 'Akıl hastalığı / akıl zayıflığı nedeniyle işlerini görememe, sürekli yardıma ihtiyaç duyma veya başkalarının güvenliği için tehlike oluşturma.',
    mseDocumentation: 'Gerçeklik değerlendirmesi, yürütücü işlev, günlük yaşam aktiviteleri (ADL/IADL), mali ve kişisel karar hataları, tehlikelilik.',
    recommendedReportLanguage: 'Mevcut belirtiler kişinin işlerini görme ve güvenli karar verme kapasitesini belirgin etkilemektedir; TMK 405 kapsamında hukuki değerlendirme ihtiyacı doğurabilecek nitelikte klinik bozulma izlenmektedir.'
  },
  {
    norm: 'TMK 406',
    situation: 'Savurganlık, alkol veya uyuşturucu madde bağımlılığı, kötü yaşam tarzı / kötü yönetim nedeniyle kendini veya ailesini darlığa/yoksulluğa düşürme tehlikesi.',
    mseDocumentation: 'Madde bağımlılığının sürekliliği, mali/ailesel yıkım, öz bakım ihtiyacı, güvenlik tehdidi.',
    recommendedReportLanguage: 'Alkol/madde kullanım bozukluğu işlevsel ve ekonomik yıkım ile ilişkilidir; TMK 406 bakımından kısıtlama değerlendirmesi gerektirebilir.'
  },
  {
    norm: 'TMK 409',
    situation: 'Kısıtlama öncesi usul: Akıl hastalığı veya zayıflığı temelinde kısıtlama için yalnız MSE yetmez, resmî sağlık kurulu raporu şarttır.',
    mseDocumentation: 'Dinlenme, sağlık kurulu ihtiyacı, objektif bilişsel/psikiyatrik test sonuçları.',
    recommendedReportLanguage: 'Akıl hastalığı/zayıflığı temelinde kısıtlama değerlendirmesinde resmî sağlık kurulu raporu yasal zorunluluktur.'
  },
  {
    norm: 'TMK 426',
    situation: 'Acil ve özgül temsil ihtiyacı (menfaat çatışması veya temsil boşluğu).',
    mseDocumentation: 'Hızla çözülmesi gereken acil iş, temsil boşluğu, miras/dava bağlamı.',
    recommendedReportLanguage: 'Tam vesayet yerine belirli bir işlem için kayyım gereksinimi doğurabilecek temsil boşluğu mevcuttur.'
  },
  {
    norm: 'TMK 429',
    situation: 'Tam kısıtlama gerekmeyen ancak belirli işlemlerde (dava, taşınmaz alım-satımı, borçlanma) ehliyeti sınırlandırma ihtiyacı (Yasal Danışmanlık).',
    mseDocumentation: 'Özellikle mali, taşınmaz, kıymetli evrak ve borçlandırıcı işlem muhakemesi.',
    recommendedReportLanguage: 'Fiil ehliyetinin tümden kaldırılması yerine belirli işlemler bakımından yasal danışmanlık ile desteklenmesi gereği doğabilir.'
  },
  {
    norm: 'TMK 432',
    situation: 'Toplum için tehlike oluşturan, kişisel korunması başka türlü sağlanamayan akıl hastalığı/bağımlılık (Koruma Amaçlı Özgürlüğün Kısıtlanması).',
    mseDocumentation: 'Tehlikelilik, alternatiflerin yetersizliği, kişisel korunma ihtiyacı, çevreye külfet.',
    recommendedReportLanguage: 'Toplum ve kişinin korunması bakımından daha az kısıtlayıcı seçenekler yetersiz görünmektedir; TMK 432 yönünden değerlendirme gerekebilir.'
  },
  {
    norm: 'TCK 32',
    situation: 'Ceza sorumluluğu: Akıl hastalığı nedeniyle işlediği fiilin hukuki anlam ve sonuçlarını algılayamama veya davranışlarını yönlendirme yeteneğinin önemli derecede azalması.',
    mseDocumentation: 'Fiilin anlam ve sonuçlarını algılama, davranışı yönlendirme yetisi, psikotik motivasyon.',
    recommendedReportLanguage: 'Klinik değerlendirme, ceza sorumluluğuna ilişkin nihai hukuki kanaat yerine, algılama ve yönlendirme yetilerinin ruhsal durumdan etkilenme derecesini ortaya koyar.'
  },
  {
    norm: 'TCK 34',
    situation: 'İradi olarak alınan alkol veya uyuşturucu madde etkisi altında suç işlenmesi (TCK 32 korumasından yararlanamaz).',
    mseDocumentation: 'Olay anı intoksikasyon ile süreğen kalıcı psikotik bozukluğun net ayrımı.',
    recommendedReportLanguage: 'Olay anı geçici madde etkilenmesi ile süreğen ruhsal bozukluk ayrımı ayrıca yapılmalıdır.'
  },
  {
    norm: 'TCK 57',
    situation: 'Akıl hastalarına ve belirli bağımlılık durumlarına özgü güvenlik tedbirleri (Yüksek güvenlikli sağlık kurumunda koruma ve tedavi).',
    mseDocumentation: 'Tehlikelilik, psikiyatrik tedavi gereksinimi, toplum güvenliği riski.',
    recommendedReportLanguage: 'Tedavi ve korunma gereksinimi adli eksende güvenlik tedbiri (TCK 57) kapsamında ayrıca değerlendirilebilir.'
  },
  {
    norm: 'Hasta Hakları Yön. 24-25',
    situation: 'Tıbbi müdahale için rıza esastır. Ancak hayati tehlike arz eden acil hallerde rıza şartı aranmaksızın müdahale edilir.',
    mseDocumentation: 'Karar verme yeterliği, rıza verebilme durumu, acil hayati tehdit varlığı.',
    recommendedReportLanguage: 'Tıbbi müdahale için rıza kapasitesi değerlendirildi; acil hayatî tehdit varlığında gecikmeksizin tıbbi müdahale uygulandı.'
  }
];

/**
 * 3. DIAGNOSTIC TENSION POINTS - MSE ÜZERİNDEN İNCE AYIRICILAR (30+ AYIRIM)
 */
export const DIAGNOSTIC_TENSION_POINTS_DATA: DiagnosticTensionPoint[] = [
  {
    issue: 'Circumstantiality (Çevresellik) vs Tangentiality (Teğetsellik)',
    patternA: 'Aşırı ayrıntıya sapar, dinleyiciyi yorar; ancak sonunda hedefe/ana soruya döner.',
    patternB: 'Sorudan sapar, yan yollara girer ve asıl amaca/soruya asla geri dönmez.',
    highYieldDistinction: 'Yanıtın finalde ana soruyu gerçekten karşılayıp karşılamadığı belirleyicidir.'
  },
  {
    issue: 'Flight of Ideas (Fikir Uçuşması) vs Loose Associations (Çağrışım Gevşemesi)',
    patternA: 'Çok hızlı düşünce akışı; fikirler arası ses veya yüzeysel bağlar genelde izlenebilir.',
    patternB: 'Fikirler ve cümleler arasındaki mantıksal ve kavramsal bağ tamamen çözülür.',
    highYieldDistinction: 'Hız mı primer (mani), yoksa kavramsal mantık çözülmesi mi (şizofreni)?'
  },
  {
    issue: 'Racing Thoughts (Yarışan Düşünceler) vs Pressure of Speech (Basınçlı Konuşma)',
    patternA: 'Öznel zihinsel hızlanma hissi ("kafamın içi çok hızlı akıyor").',
    patternB: 'Gözlemlenen motor-sözel konuşma hızının artması, araya girilememesi.',
    highYieldDistinction: 'İçsel zihinsel yaşantı ile gözlemlenen konuşma çıkışı ayrı kaydedilmelidir.'
  },
  {
    issue: 'Thought Blocking (Düşünce Blokajı) vs Retrieval Pause (Kelime Hatırlama Duraklaması)',
    patternA: 'Cümle ortasında akış aniden durur, düşünce tamamen yok olur/silinir.',
    patternB: 'Kişi hedef kelimeyi veya anıyı arar, duraklar ama konuşma amacı ve hedefi korunur.',
    highYieldDistinction: 'Zihnin aniden boşalması (psikoz) ile kelime arama gecikmesi (bilişsel/anksiyete) ayrımı.'
  },
  {
    issue: 'Obsession (Obsesyon) vs Delusion (Sanrı / Hezeyan)',
    patternA: 'İntrüzif, tekrarlayıcı, çoğu kez ego-distonik; direnç veya nötralizasyon ritüeli doğurur.',
    patternB: 'Yüksek conviction (kesin inanç), ego-sintonik, karşı kanıtla sarsılmaz gerçeklik kabulü.',
    highYieldDistinction: 'Ego ilişkisi (yabancı mı), conviction derecesi ve alternatif açıklamaya açıklık.'
  },
  {
    issue: 'Overvalued Idea (Aşırı Değerli Fikir) vs Delusion (Sanrı)',
    patternA: 'Güçlü, kimlikle uyumlu, tartışmaya sınırlı açık, tam sanrısal kesinlik taşımayan kanı.',
    patternB: 'Sabit, karşı kanıta tamamen dirençli, gerçeklik değerlendirmesi bozulmuş inanç.',
    highYieldDistinction: 'İkna edilebilirlik ve reality testing (gerçeklik sınaması) derecesi.'
  },
  {
    issue: 'Depressive Rumination vs Obsession',
    patternA: 'Geçmiş kayıplar, hatalar ve keder üzerine döner; ego-sintonik ve pasif zihinsel meşguliyettir.',
    patternB: 'İstenmeyen, yabancı (ego-distonik), akut kaygı üreten ve kompulsiyonla nötralize edilen düşüncedir.',
    highYieldDistinction: 'Ruminasyon geçmişe ve kedere yöneliktir; obsesyon intrüzif ve ritüel tetikleyicidir.'
  },
  {
    issue: 'Worry (Endişe) vs Obsession (Obsesyon)',
    patternA: 'Geleceğe dönük gerçek yaşam kaygıları (para, sağlık, iş) etrafında sözlü zincirleme düşünce.',
    patternB: 'Daha tuhaf, tabu, büyüsel veya mantık dışı içerik; kompulsiyon ve düşünce-eylem kaynaşması eşlik eder.',
    highYieldDistinction: 'Worry gerçekçi alanlara yayılır; obsesyon daha intrüzif ve ritüelle bağlantılıdır.'
  },
  {
    issue: 'Akoazm (Elementer İşitsel Varsanı) vs Tinnitus (Kulak Çınlaması)',
    patternA: 'Dış uyaran olmadan algılanan tıkırtı, uğultu, ıslık, patlama; psikiyatrik veya auralı olabilir.',
    patternB: 'Sürekli tiz çınlama/uğultu; sıklıkla otolojik, işitme kaybı veya koklear kaynaklıdır.',
    highYieldDistinction: 'Tek taraflılık, işitme kaybı varlığı ve odyolojik değerlendirme ile ayrılır.'
  },
  {
    issue: 'Auditory Illusion (İllüzyon) vs AVH (İşitsel Sözel Varsanı)',
    patternA: 'Gerçek bir dış ses (klima, rüzgar) konuşma veya fısıltı olarak yanlış yorumlanır.',
    patternB: 'Ortamda hiçbir dış ses uyaranı yokken bağımsız sesler işitilir.',
    highYieldDistinction: 'Gerçek bir fiziksel ses kaynağının bulunup bulunmadığı sorgulanır.'
  },
  {
    issue: 'Functional Hallucination vs Illusion',
    patternA: 'Gerçek uyaran doğru algılanır ve onunla eşzamanlı ek bir varsanı başlar (su akarken sesler konuşur).',
    patternB: 'Gerçek uyaran doğrudan başka bir şey olarak yanlış algılanır (su sesi doğrudan fısıltı sanılır).',
    highYieldDistinction: 'Gerçek uyaranın doğru algılanıp algılanmadığı ve ek bir algının eşlik edip etmediği.'
  },
  {
    issue: 'Pseudohallucination vs Hallucination',
    patternA: 'Tarihsel olarak içsel lokalizasyonlu (zihinde) veya gerçeklik değerlendirmesi kısmen korunmuş algı.',
    patternB: 'Dış uzamda lokalize, duyusal canlılığı tam olan gerçek algı benzeri yaşantı.',
    highYieldDistinction: 'Modern pratikte belirsiz terim yerine lokalizasyon (iç/dış) ve içgörü ayrı yazılmalıdır.'
  },
  {
    issue: 'Flashback vs Visual Hallucination (Görsel Varsanı)',
    patternA: 'Travmatik olayın görüntülerinin otonom uyarılma ve "şimdi oluyormuş" hissiyle yeniden yaşanması.',
    patternB: 'Geçmiş travmayla doğrudan ilişkisi olmayan, dış uyaran olmaksızın gelişen yeni görsel algı.',
    highYieldDistinction: 'Travma içeriği, tetikleyiciler ve multimodal yeniden yaşantılama (re-experiencing).'
  },
  {
    issue: 'Lilliputian Hallucination vs Micropsia',
    patternA: 'Dış uyaran yokken minyatür insan/hayvan figürleri görülür.',
    patternB: 'Gerçekte var olan fiziksel nesneler normalden küçük boyutta algılanır (Alice in Wonderland).',
    highYieldDistinction: 'Gerçek bir dış nesnenin var olup olmadığı (varsanı vs. görsel distorsiyon).'
  },
  {
    issue: 'Autoscopy vs Heautoscopy',
    patternA: 'Kendi bedeninin kopyasını dışarıda görür; benlik/perspektif kendi fiziksel bedeninde kalır.',
    patternB: 'Kendi çiftini görür ve "hangisi benim?" özdeşleşmesi bölünür veya belirsizleşir.',
    highYieldDistinction: '"Siz hangisiydiniz?" sorusuyla perspektif lokalizasyonunun sorgulanması.'
  },
  {
    issue: 'Depersonalization vs Schizophrenia Self-Disorder',
    patternA: 'Kendine yabancılaşma hissi; gerçeklik testi korunur ("biliyorum aslında benim ama yabancı gibi").',
    patternB: 'Düşünce sahipliğinin (ownership) veya eyleyiciliğin (agency) temelden bozulması (passivite).',
    highYieldDistinction: 'Dış güç atfı (passivity), ipseity bozukluğu ve gerçeklik değerlendirmesinin varlığı.'
  },
  {
    issue: 'Negative Symptoms vs Depression',
    patternA: 'Avolisyon, aloji, duygusal küntleşme; öznel üzüntü veya keder şart değildir.',
    patternB: 'Çökkün duygudurum, umutsuzluk, suçluluk, diurnal dalgalanma ve ağlama isteği baskındır.',
    highYieldDistinction: 'Duygudurum kalitesi (keder var mı) ve affekt reaktivitesi ayırt edicidir.'
  },
  {
    issue: 'Negative Symptoms vs Antipsychotic Parkinsonism',
    patternA: 'Spontan motivasyon ve duygusal ifadenin içsel kaybı (primer patoloji).',
    patternB: 'Bradikinezi, maske yüz, rijidite ve istirahat tremoru (dopaminerjik blokaj yan etkisi).',
    highYieldDistinction: 'Kas tonusu muayenesi (rijidite) ve nörolojik motor inceleme.'
  },
  {
    issue: 'Borderline Lability vs Bipolar Mood Episode',
    patternA: 'Dakikalar-saatler içinde kişilerarası tetikleyicilerle (terk edilme) hızlı duygusal kaymalar.',
    patternB: 'Günler-haftalar süren, uyku ihtiyacında azalma ve taşkın enerjiyle giden sendromal epizod.',
    highYieldDistinction: 'Zaman mimarisi (dakika-saat vs. gün-hafta) ve sirkadiyen uyku ihtiyacı azalması.'
  },
  {
    issue: 'ADHD vs Hypomania',
    patternA: 'Çocukluktan beri süreğen kronik dikkat dağınıklığı, kıpırdanma ve dürtüsellik (trait).',
    patternB: 'Hastanın bazaline göre belirgin dönemsel (episodik) enerji artışı ve uyku ihtiyacı azalması (state).',
    highYieldDistinction: 'Baseline değişimi var mı, uyku ihtiyacı yorulmaksızın azaldı mı?'
  },
  {
    issue: 'Delirium vs Primer Psikoz',
    patternA: 'Akut başlangıç (saatler/günler), belirgin dalgalı dikkat ve uyanıklık bozukluğu, yönelim kaybı.',
    patternB: 'Daha sinsi başlangıç, uyanıklık ve dikkat görece stabil, yönelim sıklıkla korunmuş.',
    highYieldDistinction: 'Dikkat testi + gün içi fluktuasyon + tıbbi/organik etiyoloji taraması.'
  },
  {
    issue: 'Catatonia vs Ağır Melankolik Depresyon',
    patternA: 'Waxy flexibility, katalepsi, negativizm, ekofenomenler, mutizm, staring.',
    patternB: 'Psikomotor yavaşlama, derin keder, suçluluk; ancak katatonik spesifik motor direnç yoktur.',
    highYieldDistinction: 'Aktif BFCRS bedside manevraları (katalepsi, mitgehen, waxy flexibility).'
  },
  {
    issue: 'Akatizi vs Anksiyete',
    patternA: 'Bacaklarda içsel hareket etme zorunluluğu, oturamama, pacing (ilaçla zamansal ilişki).',
    patternB: 'Kognitif endişe, felaket beklentisi ve somatik gerginlik (hareket zorunluluğu şart değil).',
    highYieldDistinction: '"Hareket etmezseniz ne oluyor?" sorusu ve antipsikotik başlama/artış zamanlaması.'
  },
  {
    issue: 'Capgras Syndrome vs Prosopagnosia',
    patternA: 'Yakın kişinin yüzü tanınır ancak onun fiziksel bir sahtekâr/ikiz olduğuna inanılır (sanrısal).',
    patternB: 'Yüzün özellikleri algılanamaz/tanınamaz, ancak sesinden kişi hemen tanınır (nörolojik kortikal).',
    highYieldDistinction: 'Yüzün tanınması tam mıdır yoksa kimlik inancı mı bozulmuştur?'
  },
  {
    issue: 'Somatic Hallucination vs Somatic Delusion',
    patternA: 'Beden içinde gerçek bir fiziksel olay yaşantılanır (organların dönmesi, kesilme hissi).',
    patternB: 'Bedende bir hastalık veya kusur olduğuna dair karşı kanıta dirençli inanç mevcuttur.',
    highYieldDistinction: '"Bunu fiziksel olarak hissediyor musunuz, yoksa böyle olduğuna mı inanıyorsunuz?"'
  },
  {
    issue: 'Formication vs Delusional Infestation (Ekbom)',
    patternA: 'Deri üzerinde veya altında böceklerin gezindiği duyusal hissidir (algısal taktil fenomen).',
    patternB: 'Deri altında parazitlerin yaşadığına dair sarsılmaz sabit inançtır (delüzyonel düşünce).',
    highYieldDistinction: 'Duyusal yaşantı ile inanç boyutu ayrı ayrı sorgulanır ve belgelenir.'
  }
];

/**
 * 4. SIK YAPILAN BELGELEME HATALARI VE PROFESÖR DÜZEYİNDE YAZIM
 */
export const MSE_DOCUMENTATION_ERRORS_DATA: DocumentationCorrection[] = [
  {
    commonError: '"Oryante, koopere"',
    whyProblematic: 'Davranış, dikkat, risk, konuşma, düşünce akışı ve içeriği hiç görünmez; medikolegal açıdan sıfır değer taşır.',
    betterPractice: 'En az 6-8 çekirdek başlıkla kısa ama operasyonel MSE yaz (Bilinç, Davranış, Konuşma, Mood/Affect, Düşünce, Algı, Yönelim/Biliş, İçgörü/Yargılama).'
  },
  {
    commonError: '"Affect uygunsuz"',
    whyProblematic: 'Uygunsuzluğun hangi eksende olduğu belirsizdir (mood ile mi, konuşulan konuyla mı?).',
    betterPractice: '"Yakınının ölümünü anlatırken gülümsemesi anlatı içeriğiyle belirgin uygunsuzdu."'
  },
  {
    commonError: '"İçgörü yok"',
    whyProblematic: 'İçgörünün hangi boyutunun bozulduğu anlaşılmaz; ikili (var/yok) etiket klinik derinlik taşımaz.',
    betterPractice: '"Hastalığını ve tedavi gereksinimini kabul etmiyor; işitsel yaşantılarını tamamen dışsal gerçeklik olarak atfediyor."'
  },
  {
    commonError: '"Yargılama kötü"',
    whyProblematic: 'Davranışsal kanıt ve örnek yoktur; soyut bir klinisyen kanaati olarak kalır.',
    betterPractice: '"Son 48 saatte kontrolsüz harcama ve uykusuz araç kullanma kararları nedeniyle gerçek yaşam yargılaması belirgin bozulmuştu."'
  },
  {
    commonError: '"Sanrı saptanmadı / Sanrı yok"',
    whyProblematic: 'Doğrudan sorgulama yapılmadan yüzeysel kanaat olarak yazılır.',
    betterPractice: '"Perseküsyon, referans, grandiyözlük, kıskançlık ve somatik sanrı açısından doğrudan sorguda belirti saptanmadı."'
  },
  {
    commonError: '"Halüsinasyon yok"',
    whyProblematic: 'Modalite (işitsel, görsel, taktil), akoazm ve buyuruculuk atlanır.',
    betterPractice: '"İşitsel, görsel, taktil veya olfaktör varsanı tariflemedi; çevreye yanıt veren (responding to internal stimuli) davranış gözlenmedi."'
  },
  {
    commonError: '"MMSE normal / Biliş tam"',
    whyProblematic: 'Erken hafif kognitif bozukluk (HKB) veya yüksek eğitimli hastalarda tarama testi normal çıkabilir.',
    betterPractice: '"Kısa tarama testi normal olmakla birlikte yüksek premorbid rezerv ve kollateral yakınmalar nedeniyle ileri nöropsikolojik test planlandı."'
  },
  {
    commonError: '"Suicidal değil"',
    whyProblematic: 'Pasif ölüm isteği, yöntem, plan, niyet ve preparatuvar davranışlar sorgulanmadan tek kelimelik etiket kullanılır.',
    betterPractice: '"Pasif ölüm isteği mevcut; aktif fikir, plan, niyet ve hazırlık davranışı reddedildi; araç erişimi yok, yardım arama kapasitesi korunmuş."'
  }
];

/**
 * 5. ÖRNEK OLGULAR VE TAM DOLDURULMUŞ MSE FORMLARI
 */
export const MSE_CASE_EXAMPLES_DATA: MSECaseExample[] = [
  {
    id: 'case_mania_psychosis',
    title: 'Vaka 1: Manik ve Psikotik Özellikler',
    vignette: '29 yaşında erkek hasta; 5 gündür neredeyse hiç uyumama, taşkın para harcama, aileye "dünyayı kurtaracak yazılım geliştirdiğini ve devlet başkanlarının kendisini takip ettiğini" söyleme nedeniyle getiriliyor.',
    fullMSE: `Bilinç/Uyanıklık: Alert. Dikkati çevresel uyaranlarla kolay dağılıyor; hedef uyaranı sürdürmekte güçlük çekiyor.
Görünüm ve Davranış: Yaşından genç gösteren, parlak ve abartılı giyimli, öz bakımı iyi. Göz teması aşırı delici ve intrüzif. Psikomotor aktivite belirgin artmış; yerinde durmakta zorlanıyor, odada pacing yapıyor. Görüşmeye yüzeysel işbirliği gösteriyor ancak sürekli söz kesiyor.
Konuşma: Miktar artmış, hız belirgin artmış, ses yüksek ve basınçlı (pressure of speech); araya girilmesi ve kesilmesi güç.
Duygudurum: "Harika, tarihe geçeceğim."
Duygulanım: Öforik-irritabl kalitede; yoğunluğu yüksek; aralığı geniş; labil; dış uyaranlara aşırı reaktif; bildirilen duygudurumla uyumlu.
Düşünce Süreci: Fikir uçuşması, teğetsellik; zaman zaman ses benzerliklerine (clang association) kayan çağrışımlar.
Düşünce İçeriği: Grandiyöz ve referans içerikli sistematize sanrılar mevcut. Pasif/aktif intihar düşüncesi yok. Eleştirilince öfkelenme artıyor; belirli hedefe yönelik öldürme planı bildirilmedi.
Algı: İşitsel/görsel varsanı tariflemiyor; çevreye yanıt veren davranış izlenmedi.
Biliş: Kişi-yer-zaman yönelimi tam; ancak durumsal yönelim sanrısal misyonla çarpıtılmış. Dikkat ve yürütücü kontrol bozulmuş.
İçgörü: Hastalığını reddediyor (Derece 1); tedavi gereksinimini kabul etmiyor.
Yargılama: Yakın dönem kontrolsüz harcama, uykusuz araç kullanma ve aileyle şiddetli çatışmalar nedeniyle belirgin bozulmuş.
Güvenirlik/İşbirliği: Öykü orta güvenilirlikte; taşkınlık ve grandiyözite nedeniyle abartma olası.`,
    clinicalImpression: 'Psikotik özellikli mani ile uyumlu akut tablo; finansal, sosyal ve davranışsal risk yüksek.',
    shortNotation: 'Affect: euphoric/irritable, high intensity, broad range, labile. TP: Flight of ideas + tangentiality. Insight: absent (poor); judgment: impaired.',
    acuteAction: 'Kapalı psikiyatri servisine yatış endikasyonu, antipsikotik + duygudurum dengeleyici protokolü, acil sedasyon ve hidrasyon planı.'
  },
  {
    id: 'case_delirium',
    title: 'Vaka 2: Delirium (Dahiliye Konsültasyonu)',
    vignette: '76 yaşında kadın hasta; dahiliye servisinde pnömoni tedavisi sırasında son 24 saatte dalıp gitme, "odada böcekler ve yabancılar var" deme ve gece-gündüz döngüsü tersine dönmesi nedeniyle konsülte ediliyor.',
    fullMSE: `Bilinç/Uyanıklık: Dalgalanan uyanıklık düzeyi; görüşme başında letarjik, sözel uyaranla açılıyor. Bilinçte belirgin bulanıklık (clouding) mevcut.
Görünüm ve Davranış: Öz bakım yatırıldığı hastane koşulları içinde orta. Göz teması kısa süreli ve kaçamak. Psikomotor aktivite dönemsel huzursuzluk ve ardından yavaşlama biçiminde dalgalanıyor.
Konuşma: Yanıt latansı belirgin uzamış; konuşma hacmi düşük, cümleler kısa ve yer yer anlaşılmaz.
Duygudurum: Net öznel duygu ifadesi güvenilir alınamadı; korkulu gözlerle "korkuyorum" diyebildi.
Duygulanım: Korkulu/disforik kalitede; yoğunluğu orta; aralığı dar; labil; içeriğe kısmen reaktif.
Düşünce Süreci: Dezorganize ve kolayca dağılan akış; hedefe yönelim korunmuyor.
Düşünce İçeriği: Sabit sistematize sanrı saptanmadı; çevresel tehdit ve yanlış yorumlamalar (tehlike algısı) mevcut.
Algı: Duvarda ve çarşafta böcek görme tarifli canlı görsel varsanılar (zoopsi) ve perdeyi insan sanma tarzında illüzyonlar mevcut.
Biliş: Kişi yönelimi korunmuş; yer ve zaman yönelimi bozuk. Ayları tersten sayamadı. 4AT Skoru: 8 (Delirium lehine). CAM: Pozitif.
İçgörü: Mevcut değil; yaşantılarını o anki fiziksel gerçeklik kabul ediyor.
Yargılama: Mevcut klinik tablo nedeniyle güvenilir biçimde değerlendirilemedi.
Güvenirlik/İşbirliği: Düşük güvenilirlikte; akut dikkat ve bilinç bozulması belirgin.`,
    clinicalImpression: 'Delirium lehine akut başlangıçlı, fluktuan dikkat ve farkındalık bozukluğu; tıbbi etiyoloji öncelikle araştırılmalıdır.',
    acuteAction: 'Vital bulgular, kan şekeri, SpO2, elektrolitler, ilaç listesi (antikolinerjik yük taraması), enfeksiyon belirteçleri ve çevresel güvenlik düzenlemesi.'
  },
  {
    id: 'case_catatonia',
    title: 'Vaka 3: Katatoni (Akut Psikiyatri)',
    vignette: '34 yaşında kadın hasta; 3 gündür hiç konuşmama, yatağında uzun süre sabit pozisyonda hareketsiz kalma ve oral sıvı/besin alımını bütünüyle reddetme nedeniyle yakınlarınca getiriliyor.',
    fullMSE: `Bilinç/Uyanıklık: Alert görünümlü; ancak çevreyle spontan etkileşim yok denecek kadar az.
Görünüm ve Davranış: Saç ve öz bakım ihmal edilmiş, ağız mukozası kuru. Görüşme boyunca uzun süreli sabit bakış (staring) ve hareketsizlik. Zaman zaman anormal bir kol postürünü dakikalarca sürdürüyor (posturing).
Psikomotor: Pasif harekete karşı hafif ve plastik direnç (waxy flexibility / balmumu esnekliği). Muayene talimatlarına pasif direnç ve negativizm gösteriyor.
Konuşma: Spontan veya soruya yanıt şeklinde konuşma yok; mutizm düzeyinde.
Duygudurum: Doğrudan değerlendirilemedi; baş sallamayla "kötü" olduğunu ima etti.
Duygulanım: Belirgin kısıtlı ve donuk; düşük yoğunluklu; minimal reaktif.
Düşünce Süreci: Mutizm nedeniyle doğrudan değerlendirilemedi.
Düşünce İçeriği: Sınırlı mimik ve jestlerle umutsuzluk düşündüren içerik; açık sanrısal içerik değerlendirilemedi.
Algı: Varsanı lehine gözlemsel veri saptanmadı.
Biliş: Yönelim kaba olarak korunmuş görünüyor; ancak dikkat ve bellek testleri mutizm nedeniyle yapılamadı.
İçgörü/Yargılama: Bu aşamada güvenilir değerlendirilemedi.
BFCRS Taraması: İlk 14 maddede mutizm (3), staring (2), posturing (2), negativizm (2), withdrawal (3) nedeniyle pozitif (Toplam tarama: 12).`,
    clinicalImpression: 'Katatoni lehine klinik sendrom; dehidratasyon, malnütrisyon, bası yarası ve DVT komplikasyon riski yüksek.',
    acuteAction: 'Katatonik tablo komplikasyon riski nedeniyle acil kabul edildi; acil damar yolu, IV hidrasyon, CK, elektrolitler, Lorazepam challenge testi ve EKT hattı değerlendirildi.'
  }
];

/**
 * 6. KIRMIZI BAYRAKLAR & ACİL EYLEM PROTOKOLLERİ
 */
export const MSE_RED_FLAGS_DATA = [
  {
    title: 'Akut Dalgalanan Dikkat + Dezoryantasyon',
    suspectedSyndrome: 'DELIRIUM',
    immediateAction: 'Vital parametreler, parmak ucu kan şekeri, SpO2, ilaç listesi (antikolinerjik/sedatif), enfeksiyon taraması (TİT, Akciğer grafisi), 4AT/CAM testi, tıbbi servis konsültasyonu.'
  },
  {
    title: 'Görsel / Taktil Varsanı + Kaba Tremor + Otonomik Hiperaktivite',
    suspectedSyndrome: 'ALKOL YOKSUNLUĞU / DELİRYUM TREMENS',
    immediateAction: 'CIWA-Ar skoru, parenteral Tiamin (B1) 100-500 mg (Glukozdan ÖNCE!), benzodiazepin protokolü (Diazepam/Lorazepam), tıbbi monitorizasyon, yatış.'
  },
  {
    title: 'Bradipne + Miyozis + Bilinç Baskılanması (Klasik Triad)',
    suspectedSyndrome: 'OPİOİD AŞIRI DOZU / TOKSİSİTE',
    immediateAction: 'Hava yolu güvenliği (ABC), acil Nalokson (0.4 - 2 mg IV/IM/Nasal), solunum desteği, yoğun bakım hazırlığı.'
  },
  {
    title: 'Mutizm + Staring + Posturing + Balmumu Esnekliği / Negativizm',
    suspectedSyndrome: 'KATATONİ (Malign Katatoni / NMS Riski)',
    immediateAction: 'BFCRS tarama testi, ateş ve otonom instabilite kontrolü, serum CK düzeyi, Lorazepam challenge (1-2 mg IV/SL), EKT olanaklarının erken hazırlanması.'
  },
  {
    title: 'Buyurucu Varsanı + Aktif İntihar/Öldürme Niyeti + Silaha/Araca Erişim',
    suspectedSyndrome: 'YÜKSEK AKUT İNTİHAR / ŞİDDET RİSKİ',
    immediateAction: 'Hastayı asla yalnız bırakmama, tehlikeli eşyalardan arındırma, sürekli birebir gözlem (1:1 observation), acil yatış, adli/idari bildirim ve güvenlik protokolü.'
  },
  {
    title: 'Yeni Nöbet / Fokal Nörolojik Defisit / Hızlı Bilişsel Çöküş',
    suspectedSyndrome: 'ORGANİK / NÖROLOJİK PATOLOJİ (İnme, Tümör, Otoimmün)',
    immediateAction: 'Acil Beyin BT / Beyin MRG, nöroloji konsültasyonu, otoimmün ensefalit ve metabolik paneller.'
  },
  {
    title: 'Geç Başlangıçlı İlk Psikoz (>40 Yaş) + Görsel/Olfaktör Varsanı',
    suspectedSyndrome: 'ORGANİK / NÖRODEJENERATİF ETİYOLOJİ',
    immediateAction: 'Genişletilmiş medikal laboratuvar (B12, Folat, TSH, VDRL/RPR, ANA), nörogörüntüleme (MRG), EEG incelemesi.'
  }
];

/**
 * 7. STANDART TÜRKÇE PROFESÖR DÜZEYİ YAZIM ŞABLONU
 */
export const PROFESSOR_FULL_TEMPLATE = `Ruhsal Durum Muayenesi (Mental Status Examination):

Görüşme Bağlamı:
Hasta [Acil servis / Poliklinik / Konsültasyon / Yatan hasta] ortamında, [kendi isteğiyle / ailesiyle / adli kollukla] değerlendirildi. Bilgi kaynağı [hasta / yakını / dosya]; kollateral bilgi [alındı / alınamadı].

Bilinç ve Dikkat:
Görüşme sırasında [Alert / Somnolent / Letarjik / Stuporöz]. Bilinçte fluktuasyon [yok / fluktuan seyir izlendi]. Dikkat [ayları tersten sayma / seri 7] ile değerlendirildi; sonuç [korunmuş / bozuk]. Çeldirilebilirlik [yok / belirgin artmış]. Yönelim: Kişi [tam], Yer [tam], Zaman [tam / gün-ay bozuk], Durum [tam / sanrısal].

Genel Görünüm ve Davranış:
Görünür yaşı biyolojik yaşıyla [uyumlu / belirgin yaşlı]. Beslenme ve hidrasyon durumu [korunmuş / kaşektik]. Öz bakımı ve hijyeni [tam / belirgin ihmal edilmiş]. Giyimi mevsim, yaş ve ortama [uygun / uygunsuz / gösterişli / tuhaf]. Göz teması [doğal / kısıtlı / delici / donuk]. Yüz ifadesi [doğal / hipomimik / grimacing]. Postür ve yürüyüşü [doğal / çökük / parkinsonian / katatonik]. Görüşmeye tutumu [işbirlikçi / guarded / hostil / overfamiliar]; interpersonal sınır farkındalığı [korunmuş / disinhibe].

Psikomotor ve Motor Bulgular:
Psikomotor aktivite [olağan / retarde / ajite / pacing]. Anormal istemsiz hareket [tremor / distoni / diskinezi / tik] saptanmadı/izlendi. Katatoni taramasında mutizm, staring, posturing, balmumu esnekliği, negativizm [negatif / pozitif].

Konuşma ve Dil:
Konuşma miktarı [yeterli / artmış / azalmış-aloji], hızı [normal / basınçlı / yavaş], ses şiddeti [modüle / kısık / yüksek], prosodisi [doğal / monoton-aprozodi], yanıt latansı [olağan / uzamış]. Artikülasyon ve akıcılık [doğal / dizartrik].

Duygudurum (Mood):
Hastanın kendi ifadesiyle: "[Buraya hastanın sözü tırnak içinde yazılır]". Baskın mood kalitesi [ötimik / depresif / öforik / irritabl / disforik].

Duygulanım (Affect):
Duygulanım [ötimik / disforik / anksiyöz / öforik] kalitede; yoğunluğu [orta / yüksek / künt]; aralığı [tam / daralmış / düz]; reaktivitesi [reaktif / non-reaktif]; stabilitesi [stabil / labil]; görüşme içeriğiyle uygunluğu [uygun / uygunsuz-inkonkruent]; bildirilen duygudurum ile [uyumlu / uyumsuz].

Düşünce Süreci (Thought Process):
Düşünce süreci [lineer ve hedefe yönelik / çevresel / teğetsel / çağrışımları gevşemiş / fikir uçuşması / düşünce blokajı / inkoheran].

Düşünce İçeriği (Thought Content):
Sanrısal içerik (persekütuar / referans / grandiyöz / somatik / kıskançlık / nihilistik / kontrol-passivite) açısından [saptanmadı / mevcuttur; conviction yüksek, davranışsal penetrasyonu belirgin]. Obsesyon, kompulsiyon, aşırı değerli fikir [yok / mevcuttur].
İntihar Değerlendirmesi: Pasif ölüm isteği [yok / var]; aktif intihar düşüncesi [yok / var]; yöntem [belirtilmedi / ...]; plan ve niyet [yok / kararlı]; preparatuvar davranış [yok]; koruyucu etkenler [aile, inanç, tedavi bağı].
Başkasına Zarar Verme (Homisidalite): Hedef, niyet, plan veya silah erişimi [saptanmadı / mevcuttur].

Algı (Perception):
İşitsel (akoazm / sözel AVH / buyurucu), görsel, taktil, olfaktör varsanı [tariflenmedi / mevcuttur]. İllüzyon [yok]. Depersonalizasyon / derealizasyon [yok].

Bilişsel İşlevler (Cognitive Bedside):
Anlık kayıt [3/3]. 5 dakika gecikmeli hatırlama [3/3]. Çalışma belleği [korunmuş]. Yürütücü işlevler (saat çizme, soyutlama atasözü) [korunmuş / somut]. SMMT / MoCA skoru: [ /30].

İçgörü ve Yargılama:
İçgörü düzeyi: [Tam (Derece 6) / Kısmi / Yok (İnkar)]. Semptomlarını hastalığa atfetme [mevcut / yok]. Tedavi gereksinimi kabulü [var / reddediyor].
Yargılama: Yakın dönem gerçek yaşam kararları ve hipotetik muhakemesi [sağlam / kontrolsüz harcama ve risk alma nedeniyle bozulmuş].

Güvenirlik:
Öykü iç tutarlılığı ve kollateral uyumu açısından [yüksek / orta / düşük] derecede güvenilirdir. Sınırlayan etkenler: [yok / psikotik yorumlama / dikkat kusuru].`;
