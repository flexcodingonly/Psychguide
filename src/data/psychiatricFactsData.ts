export interface PsychiatricFact {
  id: number;
  title: string;
  fact: string;
  org: 'WHO' | 'TPD' | 'APA';
  orgName: string;
  sourceDoc: string;
  category: 'Depresyon' | 'Bipolar' | 'Anksiyete & Panik' | 'Psikoz & Şizofreni' | 'İlaçlar & Tedavi' | 'Bağımlılık' | 'Kriz & İntihar Önleme' | 'Nörobiyoloji & Uyku';
  implication: string;
}

export const PSYCHIATRIC_FACTS_50: PsychiatricFact[] = [
  // 1-10: DEPRESYON
  {
    id: 1,
    title: 'Küresel Yeti Yitiminde 1 Numaralı Neden',
    fact: 'Dünya Sağlık Örgütü (WHO) verilerine göre majör depresyon, dünya genelinde engellilik ve iş gücü kaybına (YLD - Years Lived with Disability) en çok yol açan 1 numaralı sağlık sorunudur.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Global Health Estimates & World Mental Health Report',
    category: 'Depresyon',
    implication: 'Depresyon geçici bir can sıkıntısı değil; kalp hastalığı ve diyabet kadar ciddi biyolojik ve işlevsel bir tıbbi tablodur.'
  },
  {
    id: 2,
    title: 'Yaşam Boyu Yaygınlık: Her 5 Kişiden Biri',
    fact: 'Epidemiyolojik çalışmalara göre toplumda her 5 kişiden biri (kadınlarda %20-25, erkeklerde %10-12) yaşamı boyunca en az bir kez klinik depresyon epizodu geçirir.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'DSM-5-TR Diagnostic Criteria & APA Practice Guidelines',
    category: 'Depresyon',
    implication: 'Depresyon son derece yaygındır; bu durumu yaşamak bireysel bir başarısızlık veya yalnızlık sebebi değildir.'
  },
  {
    id: 3,
    title: 'Tedavi Başarısı ve Remisyon Oranı: %80+',
    fact: 'American Psychiatric Association (APA) verilerine göre, kılavuzlara uygun kanıta dayalı medikal ve psikoterapötik tedavi alan majör depresyon hastalarının %80 ila %90\'ı tedaviye belirgin yanıt verir.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Guideline for the Treatment of Patients With Major Depressive Disorder',
    category: 'Depresyon',
    implication: 'Umutsuzluk hissi hastalığın bir semptomudur; doğru tedaviyle tam iyileşme (remisyon) oranı tıbbın en yüksek alanlarındandır.'
  },
  {
    id: 4,
    title: 'Koruyucu Tedavi Kuralı: En Az 6-9 Ay',
    fact: 'Türkiye Psikiyatri Derneği (TPD) kılavuzlarına göre, depresyon belirtileri tamamen düzeldikten sonra dahi ilk atakta en az 6 ila 9 ay koruyucu tedavi sürdürülmelidir.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Depresyon Sağaltım Kılavuzu',
    category: 'Depresyon',
    implication: 'İyileşir iyileşmez ilacı kesmek nüks riskini 4 kat artırır. Koruyucu tedavi, beynin sinaptik dengesini kalıcılaştırır.'
  },
  {
    id: 5,
    title: 'Fiziksel Belirtiler Depresyonu Maskeleyebilir',
    fact: 'DSÖ birinci basamak sağlık araştırmalarına göre, depresyon yaşayan bireylerin %69\'u hekime sadece fiziksel ağrı, kronik yorgunluk, baş ağrısı ve mide-bağırsak şikayetleriyle başvurmaktadır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Primary Care Mental Health Collaborative Study',
    category: 'Depresyon',
    implication: 'Tıbbi nedeni bulunamayan kronik vücut ağrıları ve tükenmişlik hissi altta yatan bir depresyonun işareti olabilir.'
  },
  {
    id: 6,
    title: 'Hipokampus Hacmi ve Nörogenez',
    fact: 'APA nörogörüntüleme verilerine göre, tedavi edilmeyen uzun süreli depresyonda hafıza merkezi hipokampus hacminde küçülme görülürken; antidepresan ve terapi sonrası BDNF salgısıyla yeni nöron oluşumu (nörogenez) başlar.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'American Journal of Psychiatry - Neuroplasticity & BDNF Consensus',
    category: 'Depresyon',
    implication: 'Psikiyatri tedavileri beyni köreltmez; tam aksine nöronal dallanmayı ve beyin hücre yenilenmesini tetikler.'
  },
  {
    id: 7,
    title: 'Postpartum Depresyon Her 7 Anneden Birinde Görülür',
    fact: 'Doğum sonrası depresyon (PPD), hormonal ve biyososyal dalgalanmalar nedeniyle yeni doğum yapan kadınların %10 ila %15\'ini (yaklaşık her 7 anneden birini) etkiler.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Maternal Mental Health Policy Paper',
    category: 'Depresyon',
    implication: 'Doğum sonrası hüzün ve çökkünlük "annelik yetersizliği" değildir; tedavi edilebilir tıbbi bir durumdur.'
  },
  {
    id: 8,
    title: 'Dirençli Depresyonda Kombinasyon ve Güçlendirme',
    fact: 'TPD ve APA kılavuzlarına göre, iki farklı antidepresana yeterli yanıt vermeyen tablolarda (TRD) Lityum veya düşük doz atipik antipsikotik eklenmesi (güçlendirme) remisyon şansını belirgin artırır.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Duygudurum Çalışma Birimi Konsensüs Metni',
    category: 'Depresyon',
    implication: 'İlk ilaçla düzelmeyen tablolarda çaresiz kalınmaz; kılavuzlarda tanımlı güçlü bilimsel kombinasyon basamakları mevcuttur.'
  },
  {
    id: 9,
    title: 'Egzersizin Nörokimyasal Antidepresan Etkisi',
    fact: 'Haftada en az 150 dakika orta tempolu aerobik egzersiz (tempolu yürüyüş), hafif ve orta düzey depresyonda beyin BDNF seviyesini yükselterek ilaç ve terapi kadar güçlü katkı sağlar.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Guidelines on Physical Activity and Mental Health',
    category: 'Depresyon',
    implication: 'Düzenli fiziksel aktivite, psikiyatrik iyileşmenin biyolojik hızlandırıcısıdır.'
  },
  {
    id: 10,
    title: 'Tedavi Başvurusundaki Gecikme 4 ila 8 Yıldır',
    fact: 'TPD ve DSÖ raporlarına göre, damgalanma (stigma) ve önyargılar nedeniyle depresyon yaşayan bireyler uzman psikiyatri hekimine ortalama 4 ila 8 yıl gecikmeyle başvurmaktadır.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Damgalamayla Mücadele Komisyonu Verileri',
    category: 'Depresyon',
    implication: 'Erken başvuru, hastalığın kronikleşmesini ve işlev kaybını önleyen en kritik adımdır.'
  },

  // 11-16: BİPOLAR BOZUKLUK
  {
    id: 11,
    title: 'Bipolar Bozukluk Biyolojik ve Genetik Bir Durumdur',
    fact: 'Bipolar bozukluğun genetik kalıtılabilirlik oranı %70-80 seviyesindedir. TPD bildirgesine göre bu oran tıpta tip-2 diyabet ve hipertansiyondan dahi daha yüksektir.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Bipolar Bozukluk Bilgilendirme Raporu',
    category: 'Bipolar',
    implication: 'Bipolar bozukluk karakter zayıflığı veya irade eksikliği değil, genetik kökenli bir beyin biyokimyası durumudur.'
  },
  {
    id: 12,
    title: 'Lityum: İntiharı Bağımsız Azaltan Kanıtlanmış Ajan',
    fact: 'Lityum, yalnızca maniyi ve depresyonu dengelemekle kalmaz; psikiyatride intihar riskini ve mortaliteyi bağımsız olarak azalttığı kanıtlanmış (Level 1A kanıt) yegane moleküllerden biridir.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Practice Guideline for the Treatment of Patients With Bipolar Disorder',
    category: 'Bipolar',
    implication: 'Lityum, bipolar bozukluğun uzun vadeli koruyucu tedavisinde uluslararası altın standarttır.'
  },
  {
    id: 13,
    title: 'Bipolar Depresyonda Antidepresan Monoterapi Tehlikesi',
    fact: 'TPD ve APA uzlaşı kararlarına göre, bipolar depresyonda tek başına antidepresan kullanılması mani atağını tetikleyebilir (manik kayma) ve hızlı döngülülüğe yol açabilir.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD İki Uçlu Bozukluk Kılavuzu',
    category: 'Bipolar',
    implication: 'Bipolar hastalarında duygudurum dengeleyici (Lityum, Lamotrijin veya Ketiapin) tedavinin omurgasını oluşturur.'
  },
  {
    id: 14,
    title: 'Uyku Hijyeni ve Sirkadiyen Ritim Hayatidir',
    fact: 'Bipolar atakların en güçlü biyolojik tetikleyicisi uykusuzluktur. Gece uykusundaki tek bir kesinti dahi beyin dopaminerjik duyarlılığını artırarak mani atağını başlatabilir.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Council on Research - Circadian Rhythms in Bipolar Illness',
    category: 'Bipolar',
    implication: 'Düzenli yatış ve kalkış saatleri, bipolar tedavisinde ilaç kadar kritik bir koruyucu kalkandır.'
  },
  {
    id: 15,
    title: 'Bipolar Bireyler Tam Üretken Yaşam Sürdürebilir',
    fact: 'Düzenli koruyucu tedavi alan bipolar bireylerin %75\'inden fazlası mesleki, akademik ve ailevi yaşamlarını tam işlevsellikle sürdürmektedir.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO mhGAP Intervention Guide',
    category: 'Bipolar',
    implication: 'Doğru tanı ve takip ile bipolar bozukluk başarıyla kontrol altına alınan kronik bir tablodur.'
  },
  {
    id: 16,
    title: 'Tanı Gecikmesi Ortalama 8-10 Yıldır',
    fact: 'Bipolar bozukluk başlangıçta sıklıkla sadece unipolar depresyon zannedilir. Hastaların doğru bipolar tanısı alması dünya genelinde ortalama 8 ila 10 yıl sürmektedir.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Global Mental Health Burden Survey',
    category: 'Bipolar',
    implication: 'Depresyon yaşayan bireylerde geçmişteki enerjik veya az uyunan dönemlerin hekime aktarılması tanı süresini hızlandırır.'
  },

  // 17-24: ANKSİYETE, PANİK & OKB
  {
    id: 17,
    title: 'Panik Atak Kalbi Durdurmaz, Felç Yapmaz',
    fact: 'Panik atak anındaki çarpıntı ve hava açlığı, sempatik sinir sisteminin "savaş ya da kaç" mekanizmasının yanlış alarmıdır. APA klinik verilerine göre doğrudan kalp durmasına veya ölüme yol açmaz.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Patient Guidance on Panic Disorder & Agoraphobia',
    category: 'Anksiyete & Panik',
    implication: 'Atak anında bedeniniz tehlikede değildir; biyolojik alarm birkaç dakika içinde tepe noktasına ulaşıp kendiliğinden yatışır.'
  },
  {
    id: 18,
    title: 'Anksiyete Bozuklukları Dünyada En Sık Görülen Ruhsal Sorundur',
    fact: 'DSÖ 2023 verilerine göre dünyada 301 milyondan fazla insan anksiyete bozukluklarıyla yaşamaktadır ve küresel düzeyde en yaygın psikiyatrik bozukluk grubudur.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO World Mental Health Report 2022 / 2023 Facts',
    category: 'Anksiyete & Panik',
    implication: 'Kaygı bozukluğu toplumda son derece yaygındır ve bilimsel yöntemlerle yüksek tedavi başarısına sahiptir.'
  },
  {
    id: 19,
    title: 'OKB Düşünceleri Kişinin Karakterini Yansıtmaz',
    fact: 'Obsesif Kompulsif Bozuklukta (OKB) akla gelen saldırganlık veya dini/cinsel takıntılı düşünceler "ego-distonik"tir; yani kişinin gerçek ahlakı ve arzularının tam zıttıdır.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Anksiyete ve OKB Çalışma Birimi Bülteni',
    category: 'Anksiyete & Panik',
    implication: 'Kötü bir düşüncenin aklınıza gelmesi kötü bir insan olduğunuzu göstermez; bu OKB\'nin biyolojik bir şakasıdır.'
  },
  {
    id: 20,
    title: 'OKB Tedavisinde Yüksek Doz ve Uzun Süre Gereksinimi',
    fact: 'TPD ve APA kılavuzlarına göre OKB tedavisinde antidepresan ilaçlar (SSRI), depresyondakine kıyasla daha yüksek dozlarda (örn. Sertralin 200 mg) ve en az 10-12 hafta beklenerek değerlendirilmelidir.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Practice Guideline for the Treatment of Patients With OCD',
    category: 'Anksiyete & Panik',
    implication: 'OKB tedavisinde sabır esastır; ilacın faydası genellikle 8. haftadan sonra belirginleşir.'
  },
  {
    id: 21,
    title: 'Bilişsel Davranışçı Terapi (BDT) ve Maruz Bırakma (ERP)',
    fact: 'OKB ve Panik Bozuklukta Maruz Bırakma ve Tepki Önleme (ERP) içeren Bilişsel Davranışçı Terapi, beyindeki orbitofrontal-striatal devreyi nörobiyolojik olarak yeniden yapılandırır.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Evidence-Based Psychotherapy Guidelines',
    category: 'Anksiyete & Panik',
    implication: 'Kaçınmak kaygıyı besler; uzman eşliğinde kontrollü yüzleşme beynin korku devresini kalıcı olarak sakinleştirir.'
  },
  {
    id: 22,
    title: 'Benzodiazepinler Panik Bozukluğun Kalıcı Tedavisi Değildir',
    fact: 'TPD ve APA kılavuzları, yeşil reçeteli yatıştırıcıların (Alprazolam, Diazepam) bağımlılık ve tolerans riski nedeniyle 2-4 haftadan uzun kullanılmaması gerektiğini belirtir. Asıl tedavi SSRI ve BDT\'dir.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Psikofarmakoloji Çalışma Birimi Raporu',
    category: 'Anksiyete & Panik',
    implication: 'Yatıştırıcılar sadece acil yangın söndürücüdür; evin tesisatını onaran kalıcı ilaçlar antidepresanlardır.'
  },
  {
    id: 23,
    title: 'Hiperventilasyon ve Karbondioksit Yanılgısı',
    fact: 'Panik anında hızlı ve yüzeysel nefes almak kandaki karbondioksiti aşırı düşürerek (respiratuar alkaloz) ellerde uyuşma, baş dönmesi ve hava açlığı hissini tetikler.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Clinical Manual of Anxiety Disorders',
    category: 'Anksiyete & Panik',
    implication: 'Panik anında derin nefes almaya çalışmak yerine nefes verme süresini uzatmak (örn. 4 saniye al, 7 saniye ver) bedeni sakinleştirir.'
  },
  {
    id: 24,
    title: 'Sosyal Anksiyete Bir "Utangaçlık" Değildir',
    fact: 'Sosyal Anksiyete Bozukluğu, kişinin eğitim, kariyer ve ilişkilerini felç edebilen; beyin amigdala hiperaktivitesi ile seyreden tıbbi bir rahatsızlıktır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO International Classification of Diseases (ICD-11)',
    category: 'Anksiyete & Panik',
    implication: 'Sosyal fobi kılavuz tedavileriyle (SSRI + BDT) tamamen gerileyebilen bir tablodur.'
  },

  // 25-30: PSİKOZ & ŞİZOFRENİ
  {
    id: 25,
    title: 'Şizofreni "Çift Kişilik" Demek Değildir',
    fact: 'Şizofreni toplumdaki en yaygın yanlış inancın aksine kesinlikle "çift kişilik" veya "bölünmüş kişilik" değildir. Düşünce, algı ve gerçekliği test etme yetisinin etkilendiği biyolojik bir beyin hastalığıdır.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Şizofreni Bilgilendirme ve Ayrımcılıkla Mücadele Dosyası',
    category: 'Psikoz & Şizofreni',
    implication: 'Popüler kültürdeki çift kişilik miti gerçeği yansıtmaz; şizofreni tıbbi tedaviye yanıt veren bir rahatsızlıktır.'
  },
  {
    id: 26,
    title: 'Şizofreni Hastaları Saldırgan Değil, Şiddet Kurbanıdır',
    fact: 'DSÖ ve APA istatistiklerine göre, şizofreni tanılı bireylerin şiddet uygulama oranı genel toplum ortalamasından yüksek değildir; aksine toplumda şiddete ve istismara maruz kalma riskleri 4 kat fazladır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Mental Health and Human Rights Fact Sheet',
    category: 'Psikoz & Şizofreni',
    implication: 'Ruhsal hastalıklardan korkmak ve damgalamak yerine bilimsel tedavi ve sosyal destek sunulmalıdır.'
  },
  {
    id: 27,
    title: 'Tedavi Edilmemiş Psikoz Süresi (DUP) ve Erken Müdahale',
    fact: 'İlk psikotik ataktan sonra tedaviye ne kadar erken başlanırsa (Tedavi Edilmemiş Psikoz Süresi ne kadar kısa olursa), beynin gri cevher kaybı o kadar önlenir ve tam iyileşme şansı o kadar artar.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Practice Guideline for the Treatment of Patients With Schizophrenia',
    category: 'Psikoz & Şizofreni',
    implication: 'İlk atakta şüphecilik, içe kapanma veya ses duyma belirtileri görüldüğünde vakit kaybetmeden hekime gidilmelidir.'
  },
  {
    id: 28,
    title: 'Dirençli Şizofrenide Altın Standart: Klozapin',
    fact: 'İki farklı antipsikotik ilaca yanıt vermeyen dirençli tablolarda Klozapin, semptomları yatıştırmada, intiharı önlemede ve hastaneye yatışları düşürmede uluslararası kılavuzların tek kanıtlanmış ilacıdır.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Clinical Guidelines & Cochrane Systematic Review on Clozapine',
    category: 'Psikoz & Şizofreni',
    implication: 'Dirençli psikozda düzenli kan sayımı takibiyle uygulanan Klozapin hayat kurtarıcı bir seçenektir.'
  },
  {
    id: 29,
    title: 'Uzun Etkili Depo Enjeksiyonlar Nüksü %60 Azaltır',
    fact: 'Ayda bir veya 3 ayda bir yapılan uzun etkili antipsikotik enjeksiyonlar (LAI), her gün hap içme stresini ortadan kaldırır ve nüks/hastaneye yatış oranlarını %60\'a varan düzeyde düşürür.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Şizofreni Tedavi Kılavuzu',
    category: 'Psikoz & Şizofreni',
    implication: 'Depo enjeksiyonlar ceza değildir; hastanın bağımsızlığını ve iyilik halini koruyan modern bir tedavi konforudur.'
  },
  {
    id: 30,
    title: 'Toplum Temelli Ruh Sağlığı ve Aile Desteği',
    fact: 'DSÖ araştırmalarına göre, sadece ilaç değil, ailenin hastalık hakkında eğitildiği (psikoeğitim) ve destekleyici iş ortamının sağlandığı durumlarda hastaların işlevselliği iki katına çıkmaktadır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Community Mental Health Services Network',
    category: 'Psikoz & Şizofreni',
    implication: 'İyileşme biyopsikososyaldir; sevgi, kabul ve bilimsel tedavi el ele yürür.'
  },

  // 31-38: İLAÇLAR & TEDAVİ GERÇEKLERİ
  {
    id: 31,
    title: 'Antidepresanlar Uyuşturucu veya Bağımlılık Yapıcı Değildir',
    fact: 'Türkiye Psikiyatri Derneği resmi açıklamasına göre: Hekim kontrolünde reçete edilen antidepresanlar tolerans geliştirmez, haz vermez ve kesinlikle bağımlılık yapmaz.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Psikiyatri İlaçları Hakkında Bilgilendirme Metni',
    category: 'İlaçlar & Tedavi',
    implication: 'İlacı hekime sormadan birden kesince yaşanan grip benzeri hisler bağımlılık değil, reseptörün "kesilme sendromu"dur.'
  },
  {
    id: 32,
    title: 'İlaçlar Kişiliği Değiştirmez, Hastalığı Onarır',
    fact: 'Psikiyatrik ilaçlar bireyin benliğini, karakterini veya yaratıcılığını yok etmez; hastalığın yarattığı biyokimyasal baskıyı kaldırarak kişinin kendi öz potansiyeline dönmesini sağlar.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Healthy Minds Consumer Insights',
    category: 'İlaçlar & Tedavi',
    implication: 'Tedavi sizi başkası yapmaz; hastalığın elinizden aldığı neşenizi ve üretkenliğinizi size geri kazandırır.'
  },
  {
    id: 33,
    title: 'Neden İlk 2 Hafta İlaç İşe Yaramıyor Gibi Hissedilir?',
    fact: 'Antidepresanlar sinapsta serotonini dakikalar içinde artırsa da, klinik düzelmenin başlaması beynin post-sinaptik reseptör duyarlılığını ayarlaması (down-regulation) için 2 ila 4 hafta sürer.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'Stahl\'s Essential Psychopharmacology & APA Consensus',
    category: 'İlaçlar & Tedavi',
    implication: 'İlk 1-2 haftada sabırlı olunmalıdır; beynin biyolojik yeniden yapılanması zaman ister.'
  },
  {
    id: 34,
    title: 'İlk Günlerdeki Mide Bulantısının Sebebi',
    fact: 'İnsan vücudundaki serotoninin %90\'dan fazlası beyinde değil, sindirim sisteminde bulunur. Bu nedenle antidepresan başlandığında bağırsaklardaki reseptörler nedeniyle ilk 3-7 gün hafif bulantı olması son derece doğaldır.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD İlaç Yan Etkileri ve Yönetimi Kılavuzu',
    category: 'İlaçlar & Tedavi',
    implication: 'İlacı tok karnına almak ve bol su içmek bulantıyı önler; bu yan etki genellikle 1 haftada kendiliğinden kaybolur.'
  },
  {
    id: 35,
    title: 'EKT (Elektrokonvülsif Terapi) Güvenli Tıbbi Bir İşlemdir',
    fact: 'Sinema filmlerinin yarattığı korku mitlerinin aksine EKT; anestezi ve kas gevşetici altında, saniyeler süren kontrollü bir beyin stimülasyonudur ve tıpta en yüksek etkinlik oranına (%85+) sahiptir.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Elektrokonvülsif Tedavi (EKT) Uygulama Rehberi',
    category: 'İlaçlar & Tedavi',
    implication: 'Özellikle ağır intihar riski, katatoni ve gebelikte bebeğe ilaç geçişini önlemede hayat kurtarıcı bir altın standarttır.'
  },
  {
    id: 36,
    title: 'Psikoterapi Beyin Yapısını Fiziksel Olarak Değiştirir',
    fact: 'Fonksiyonel beyin MR çalışmaları, başarılı bir psikoterapi sürecinin (BDT) prefrontal korteks ve amigdala arasındaki nöral bağlantıları tıpkı farmakoterapi gibi fiziksel olarak değiştirdiğini kanıtlamıştır.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'American Journal of Psychiatry - Neurobiology of Psychotherapy',
    category: 'İlaçlar & Tedavi',
    implication: 'Terapi sadece "konuşmak" değildir; beynin nöroplastisitesini aktive eden bilimsel bir tedavidir.'
  },
  {
    id: 37,
    title: 'Bitkisel Çaylar ve Destekler Zararsız Değildir',
    fact: 'Sarı kantaron (St. John\'s Wort) gibi bitkisel çaylar antidepresanlarla birlikte alındığında ölümcül Serotonin Sendromuna yol açabilir. Karbamazepin veya doğum kontrol haplarının etkisini sıfırlayabilir.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Monographs on Selected Medicinal Plants & Interactions',
    category: 'İlaçlar & Tedavi',
    implication: '"Doğal olan zararsızdır" yanılgısına düşmeyin; kullandığınız tüm bitkisel takviyeleri hekiminize bildiriniz.'
  },
  {
    id: 38,
    title: 'Genomik ve Kişiselleştirilmiş İlaç Seçimi',
    fact: 'Karaciğerdeki CYP450 enzim polimorfizmleri (CYP2D6, CYP2C19), bazı bireylerin ilaçları çok yavaş (toksisite riski) veya çok hızlı (tedaviye yanıtsızlık) metabolize etmesine neden olur.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Council on Psychopharmacology: Pharmacogenomics in Psychiatry',
    category: 'İlaçlar & Tedavi',
    implication: 'Bir ilacın komşunuza iyi gelip size iyi gelmemesi biyolojik enzim farklılıklarınızdan kaynaklanır.'
  },

  // 39-43: BAĞIMLILIK & ALKOL
  {
    id: 39,
    title: 'Bağımlılık Bir İrade Sorunu Değil, Beyin Hastalığıdır',
    fact: 'DSÖ ve APA bağımlılığı; beynin ventral tegmental alan (VTA) ve nükleus akkumbens dopamin ödül devresinin yapısal olarak bozulduğu kronik ve nükslerle seyreden tıbbi bir beyin hastalığı olarak tanımlar.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Neuroscience of Psychoactive Substance Use and Dependence',
    category: 'Bağımlılık',
    implication: '"İsteseydi bırakırdı" yaklaşımı yanlıştır; tıpkı astım veya diyabet gibi profesyonel tıbbi tedavi gerektirir.'
  },
  {
    id: 40,
    title: 'Alkol Yoksunluğu Ölümcül Olabilen Tıbbi Acildir',
    fact: 'Kronik alkol kullanımının aniden kesilmesi, Delirium Tremens ve yoksunluk nöbetlerine yol açarak yoğun bakım ihtiyacı doğurabilir. TPD kılavuzlarına göre alkol bırakma işlemi mutlaka hekim kontrolünde yapılmalıdır.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Alkol Kullanım Bozuklukları Tedavi Kılavuzu',
    category: 'Bağımlılık',
    implication: 'Ağır alkol kullanıcıları "kendi kendime bugün bıraktım" dememeli; tıbbi detoks protokolü almalıdır.'
  },
  {
    id: 41,
    title: 'Benzodiazepin Bağımlılığı ve Ashton Yavaş Azaltma Kuralı',
    fact: 'Yeşil reçeteli sakinleştiriciler uzun süre yüksek dozda kullanıldığında aniden kesilirse hayati tehlike arz eden yoksunluk nöbetleri gelişebilir; haftalık %10-25 kademeli azaltılmalıdır.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Benzodiazepine Task Force Report & Withdrawal Protocols',
    category: 'Bağımlılık',
    implication: 'Sakinleştirici ilaçlar asla aniden kesilmemeli, hekimle planlanarak basamak basamak azaltılmalıdır.'
  },
  {
    id: 42,
    title: 'Madde Bağımlılığında Erken Yaş Beyin Gelişimi',
    fact: 'İnsan beyninin mantık ve muhakeme merkezi olan prefrontal korteks 25 yaşına kadar gelişimini sürdürür. Ergenlikte madde veya alkole maruz kalmak beyin devrelerinde kalıcı hasar riskini katlar.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Adolescent Mental Health and Substance Use Report',
    category: 'Bağımlılık',
    implication: 'Gençlerin korunması, ömür boyu sürecek ruh sağlığının en büyük güvencesidir.'
  },
  {
    id: 43,
    title: 'İkili Tanı (Dual Diagnosis): Ruhsal Bozukluk ve Bağımlılık',
    fact: 'Bağımlılık yaşayan bireylerin en az %50\'sinde altta yatan tedavi edilmemiş bir DEHB, majör depresyon, bipolar bozukluk veya çocukluk çağı travması mevcuttur.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Diagnostic and Statistical Manual of Mental Disorders',
    category: 'Bağımlılık',
    implication: 'Kişi aslında acı veren içsel duygudurumunu uyuşturmaya çalışmaktadır; altta yatan psikiyatrik tablo tedavi edilmeden bağımlılık çözülemez.'
  },

  // 44-47: KRİZ & İNTİHARIN ÖNLENMESİ
  {
    id: 44,
    title: 'İntihardan Bahsetmek Riski Artırmaz, Azaltır',
    fact: 'Dünya Sağlık Örgütü ve TPD kılavuzlarına göre: Bir yakınınızla intihar düşünceleri hakkında açık, yargılamadan ve şefkatle konuşmak intihar fikrini tetiklemez; aksine kişinin yalnızlık hissini kırarak hayat kurtarır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Preventing Suicide: A Global Imperative',
    category: 'Kriz & İntihar Önleme',
    implication: 'Korkmadan sorun: "Kendine zarar vermeyi düşündüğün oluyor mu? Seni dinlemek ve yardım almak için yanındayım."'
  },
  {
    id: 45,
    title: 'İntihar Krizi Geçici Bir Nörobiyolojik Tünel Algısıdır',
    fact: 'Akut intihar krizi kalıcı bir istek değil; yoğun biyolojik stres altında beynin problem çözme yetisinin daraldığı ("tünel bakışı") geçici bir kriz dalgasıdır. Bu dalga doğru müdahaleyle atlatıldığında kişiler yaşama tutunur.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Practice Guideline for the Assessment and Treatment of Patients With Suicidal Behaviors',
    category: 'Kriz & İntihar Önleme',
    implication: 'O an hissettiğiniz dayanılmaz acı sonsuza dek sürmeyecek. Kriz anında 112 veya bir uzmandan hemen destek isteyin.'
  },
  {
    id: 46,
    title: 'Ölüm Araçlarına Erişimin Kısıtlanması Hayat Kurtarır',
    fact: 'DSÖ araştırmaları, yüksek riskli bireylerin çevresinden ilaçların ve kesici aletlerin uzaklaştırılmasının (çevre güvenliği) kriz anındaki fevri eylemleri önlemede dünya çapında en etkili yöntem olduğunu kanıtlamıştır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Means Restriction in Suicide Prevention Policy',
    category: 'Kriz & İntihar Önleme',
    implication: 'Stanley-Brown güvenlik planında ortamı güvenli hale getirmek en kritik basamaktır.'
  },
  {
    id: 47,
    title: 'İntihar Girişiminde Bulunanların %90\'ı Sonradan Yaşamı Seçer',
    fact: 'Uzun dönemli takip çalışmaları, bir intihar krizinden sağ kurtulan bireylerin %90\'ından fazlasının daha sonra hayatını intihar nedeniyle kaybetmediğini ve iyileştiğini göstermektedir.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'American Journal of Psychiatry Longitudinal Suicide Studies',
    category: 'Kriz & İntihar Önleme',
    implication: 'Kriz anı geçicidir; destek alındığında hayat yeniden kurulabilir.'
  },

  // 48-50: UYKU, BEYİN & NÖROBİYOLOJİ
  {
    id: 48,
    title: 'Uyku Beynin Toksik Atıkları Temizlediği Süreçtir',
    fact: 'Derin uyku sırasında beynin "Glimfatik Sistemi" aktive olur ve gün boyu biriken metabolik atıkları (beta-amiloid vb.) omurilik sıvısıyla dışarı yıkar. Kronik uykusuzluk psikiyatrik bozukluk riskini 3 kat artırır.',
    org: 'APA',
    orgName: 'American Psychiatric Association',
    sourceDoc: 'APA Sleep Disorders Guidance & Neuroscience Updates',
    category: 'Nörobiyoloji & Uyku',
    implication: 'Uyku lüks veya zaman kaybı değil; beynin kendini biyolojik olarak onardığı hayati bir temizlik seansıdır.'
  },
  {
    id: 49,
    title: 'Yetişkin Beyni Değişebilir: Yaşam Boyu Nöroplastisite',
    fact: 'Eski "ölen beyin hücresi yenilenmez" inancı yıkılmıştır. TPD ve APA nörobilim raporlarına göre yetişkin beyni dahi yeni öğrenmeler, terapi ve doğru tedaviyle yeni sinaptik yollar (nöroplastisite) inşa eder.',
    org: 'TPD',
    orgName: 'Türkiye Psikiyatri Derneği',
    sourceDoc: 'TPD Nörobilim ve Psikiyatri Kongresi Konsensüsü',
    category: 'Nörobiyoloji & Uyku',
    implication: 'Kaç yaşında olursanız olun beyniniz iyileşme, yeni alışkanlıklar edinme ve esneme kapasitesine sahiptir.'
  },
  {
    id: 50,
    title: 'Ruh Sağlığı Olmadan Genel Sağlık Olamaz (No Health Without Mental Health)',
    fact: 'Dünya Sağlık Örgütü kurucu anayasasında sağlık; "Sadece hastalık ve sakatlığın olmayışı değil, bedensel, ruhsal ve sosyal yönden tam bir iyilik halidir" şeklinde tanımlanmıştır.',
    org: 'WHO',
    orgName: 'Dünya Sağlık Örgütü',
    sourceDoc: 'WHO Constitution & Mental Health Action Plan',
    category: 'Nörobiyoloji & Uyku',
    implication: 'Beden sağlığınıza gösterdiğiniz özen ve saygıyı ruh sağlığınıza da gösterin; yardım istemek cesaretin göstergesidir.'
  }
];
