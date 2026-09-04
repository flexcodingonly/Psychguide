import { AcademicReference } from '../types';

export const ACADEMIC_REFERENCES_DATA: AcademicReference[] = [
  {
    id: 'dsm5tr',
    title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
    authors: 'American Psychiatric Association (APA)',
    journalOrPublisher: 'American Psychiatric Association Publishing, Washington, DC',
    year: 2022,
    category: 'Temel Kitap',
    summary: 'Psikiyatrik tanıların uluslararası standart tanı ölçütleri, prevalans, ayırıcı tanı ve kodlama rehberidir. DSM-5-TR, 70\'ten fazla bozukluk için metin güncellemeleri ve yeni Uzamış Yas Bozukluğu tanısını içerir.',
    doiOrLink: 'https://doi.org/10.1176/appi.books.9780890425787',
    relevance: 'Tüm tanı kriterleri, alt tipler ve ayırıcı tanı maddelerinin birincil kaynağı.'
  },
  {
    id: 'stahl',
    title: 'Stahl\'s Essential Psychopharmacology: Neuroscientific Basis and Practical Applications (5th Edition)',
    authors: 'Stephen M. Stahl',
    journalOrPublisher: 'Cambridge University Press',
    year: 2021,
    category: 'Temel Kitap',
    summary: 'Psikotrop ilaçların etki mekanizmaları, sinaptik iletim, nörotransmiter devreleri, reseptör bağlanma afiniteleri ve farmakodinamik ilkelerin başucu kaynağı.',
    doiOrLink: 'https://www.cambridge.org/stahl',
    relevance: 'İlaç etki mekanizmaları, reseptör profilleri ve klinik farmakoloji temeli.'
  },
  {
    id: 'maudsley',
    title: 'The Maudsley Prescribing Guidelines in Psychiatry (14th Edition)',
    authors: 'David M. Taylor, Thomas R. E. Barnes, Allan H. Young',
    journalOrPublisher: 'Wiley-Blackwell',
    year: 2021,
    category: 'Kılavuz',
    summary: 'Dünya çapında psikiyatristlerin klinik pratikte ilaç dozu, yan etki yönetimi, laboratuvar izlemi ve etkileşimlerde en sık başvurduğu kanıta dayalı reçeteleme rehberi.',
    doiOrLink: 'https://www.wiley.com/en-us/The+Maudsley+Prescribing+Guidelines+in+Psychiatry',
    relevance: 'Klozapin ANC protokolü, Lityum yönetimi, QTc aralıkları ve ilaç değişim algoritmaları.'
  },
  {
    id: 'canmat_mdd',
    title: 'Canadian Network for Mood and Anxiety Treatments (CANMAT) Clinical Guidelines for MDD Management',
    authors: 'Lam RW, Kennedy SH, Parikh SV, et al.',
    journalOrPublisher: 'The Canadian Journal of Psychiatry',
    year: 2016,
    category: 'Kılavuz',
    summary: 'Major depresif bozukluğun akut, idame ve dirençli evrelerinde farmakoterapi, psikoterapi ve nörostimülasyon (EKT, rTMS) tedavi hiyerarşisi kanıt hiyerarşisiyle sunulur.',
    doiOrLink: 'https://doi.org/10.1177/0706743716659418',
    relevance: 'Depresyonda birinci basamak ajanlar ve kombinasyon stratejileri.'
  },
  {
    id: 'canmat_isbd_bipolar',
    title: 'CANMAT and ISBD 2018 Guidelines for the Management of Patients with Bipolar Disorder',
    authors: 'Yatham LN, Kennedy SH, Parikh SV, et al.',
    journalOrPublisher: 'Bipolar Disorders, 20(2), 97-170',
    year: 2018,
    category: 'Kılavuz',
    summary: 'Bipolar I ve II bozukluğun akut mani, akut depresyon ve idame evreleri için birinci, ikinci ve üçüncü basamak farmakoterapi önerileri.',
    doiOrLink: 'https://doi.org/10.1111/bdi.12609',
    relevance: 'Bipolar bozuklukta Lityum, Valproat, Ketiapin ve atipik antipsikotik basamakları.'
  },
  {
    id: 'stard_trial',
    title: 'Sequenced Treatment Alternatives to Relieve Depression (STAR*D) Study',
    authors: 'Rush AJ, Trivedi MH, Wisniewski SR, et al.',
    journalOrPublisher: 'American Journal of Psychiatry & NEJM',
    year: 2006,
    category: 'Dönüm Noktası Klinik Çalışma (RCT)',
    summary: 'Tedaviye dirençli depresyonda ardışık tedavi adımlarını inceleyen tarihteki en büyük bağımsız klinik çalışma (4000+ hasta). 1. basamak SSRI ile remisyon oranı ~%33, 4 basamak sonunda kümülatif remisyon ~%67 bulunmuştur.',
    doiOrLink: 'https://doi.org/10.1176/ajp.2006.163.11.1905',
    relevance: 'Antidepresan tedavi basamakları, güçlendirme ve değiştirme zamanlaması.'
  },
  {
    id: 'catie_trial',
    title: 'Effectiveness of Antipsychotic Drugs in Patients with Chronic Schizophrenia (CATIE Trial)',
    authors: 'Lieberman JA, Stroup TS, McEvoy JP, et al.',
    journalOrPublisher: 'New England Journal of Medicine, 353(12), 1209-1223',
    year: 2005,
    category: 'Dönüm Noktası Klinik Çalışma (RCT)',
    summary: 'Tipik (Perfenazin) ve atipik (Olanzapin, Ketiapin, Risperidon, Ziprasidon) antipsikotiklerin etkinlik, devamlılık ve metabolik yan etki profillerini karşılaştıran devlete bağlı bağımsız çalışma.',
    doiOrLink: 'https://doi.org/10.1056/NEJMoa051688',
    relevance: 'Antipsikotik ilaçların etkinlik ve metabolik bırakma oranları.'
  },
  {
    id: 'balance_trial',
    title: 'Lithium plus valproate combination therapy versus monotherapy for relapse prevention in bipolar I (BALANCE)',
    authors: 'Geddes JR, Goodwin GM, Rendell J, et al.',
    journalOrPublisher: 'The Lancet, 375(9712), 385-395',
    year: 2010,
    category: 'Dönüm Noktası Klinik Çalışma (RCT)',
    summary: 'Bipolar I bozukluk idame tedavisinde Lityum monoterapisinin Valproat monoterapisinden relapsı önlemede üstün olduğunu ve kombinasyon tedavisinin daha da etkili olduğunu gösteren dönüm noktası RKÇ.',
    doiOrLink: 'https://doi.org/10.1016/S0140-6736(09)61828-6',
    relevance: 'Bipolar idame tedavisinde Lityumun altın standart yeri.'
  }
];
