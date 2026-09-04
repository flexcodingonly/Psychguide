import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Search, 
  CheckCircle2, 
  X, 
  Flame, 
  ArrowLeftRight,
  Info,
  Layers,
  ChevronDown,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  Filter,
  Globe,
  BookOpen,
  ArrowUpRight,
  Check
} from 'lucide-react';
import { DRUG_INTERACTIONS_DATA, CYP_ENZYMES_DATA } from '../data/interactionsData';
import { DrugInteraction, InteractionSeverity } from '../types';

export const InteractionChecker: React.FC = () => {
  // Main page view: 'page1_external' (Medscape & Academic Sites) or 'page2_internal' (Dahili Veritabanı & Araçlar)
  const [mainPage, setMainPage] = useState<'page1_external' | 'page2_internal'>('page1_external');

  // Internal tools sub-tab: 'dual' | 'table' | 'multicheck' | 'cyp'
  const [internalTab, setInternalTab] = useState<'dual' | 'table' | 'multicheck' | 'cyp'>('dual');

  // Dual drug selector state
  const [drugA, setDrugA] = useState<string>('Lityum');
  const [drugB, setDrugB] = useState<string>('NSAİİ (İbuprofen, Naproksen)');

  // Multi drug check state
  const [selectedMultiDrugs, setSelectedMultiDrugs] = useState<string[]>([
    'Lityum',
    'NSAİİ (İbuprofen, Naproksen)'
  ]);

  // Table filter state
  const [tableSearch, setTableSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'all' | InteractionSeverity>('all');
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

  // Expanded available drugs catalog
  const commonDrugList = [
    'Lityum',
    'Klozapin',
    'Fluoksetin',
    'Paroksetin',
    'Sertralin',
    'Essitalopram',
    'Sitalopram',
    'Venlafaksin',
    'Duloksetin',
    'Mirtazapin',
    'Bupropion',
    'Vortioksetin',
    'Agomelatin',
    'Valproat (Sodyum Valproat)',
    'Lamotrijin',
    'Karbamazepin',
    'Okskarbazepin',
    'Haloperidol',
    'Klorpromazin',
    'Olanzapin',
    'Ketiapin',
    'Aripiprazol',
    'Risperidon',
    'Paliperidon',
    'Ziprasidon',
    'Amisülprid',
    'Diazepam (Benzodiazepin)',
    'Alprazolam',
    'Lorazepam',
    'Klonazepam',
    'Moklobemid (MAOI)',
    'Metilfenidat (Ritalin / Concerta)',
    'Atomoksetin',
    'Modafinil',
    'Tramadol (Opioid Analjezik)',
    'NSAİİ (İbuprofen, Naproksen)',
    'Metoklopramid (Metpamid)',
    'Siprofloksasin (Kinolon Antibiyotik)',
    'Klaritromisin / Eritromisin',
    'Fluvoksamin',
    'Tamoksifen',
    'Kombine Oral Kontraseptifler',
    'ACE İnhibitörleri / ARB (Ramipril, Enalapril)',
    'Tiyazid Diüretikler (Hidroklorotiyazid)',
    'Loop Diüretikleri (Furosemid)',
    'Varfarin (Oral Antikoagülan)',
    'Ketokonazol / İtrakonazol (Azol Antifungaller)',
    'Rifampisin'
  ];

  // Quick preset pairs for fast clinical testing
  const presetPairs = [
    { nameA: 'Lityum', nameB: 'NSAİİ (İbuprofen, Naproksen)', label: 'Lityum + NSAİİ' },
    { nameA: 'Klozapin', nameB: 'Siprofloksasin (Kinolon Antibiyotik)', label: 'Klozapin + Siprofloksasin' },
    { nameA: 'SSRI / SNRI (Örn: Fluoksetin, Sertralin, Venlafaksin)', nameB: 'Tramadol (Opioid Analjezik)', label: 'SSRI + Tramadol' },
    { nameA: 'Valproat (Sodyum Valproat)', nameB: 'Lamotrijin', label: 'Valproat + Lamotrijin' },
    { nameA: 'Klozapin', nameB: 'Fluvoksamin', label: 'Klozapin + Fluvoksamin' },
    { nameA: 'Lityum', nameB: 'ACE İnhibitörleri / ARB (Ramipril, Enalapril)', label: 'Lityum + ACE İnhibitörü' },
    { nameA: 'Haloperidol', nameB: 'Metoklopramid (Metpamid)', label: 'Haloperidol + Metpamid' },
    { nameA: 'Karbamazepin', nameB: 'Kombine Oral Kontraseptifler', label: 'Karbamazepin + OKS' }
  ];

  // Swap drugs
  const handleSwapDrugs = () => {
    const temp = drugA;
    setDrugA(drugB);
    setDrugB(temp);
  };

  // Dual matching logic
  const findPairInteraction = (name1: string, name2: string): DrugInteraction | null => {
    const n1 = name1.toLowerCase();
    const n2 = name2.toLowerCase();

    const getCore = (s: string) => {
      if (s.includes('lityum')) return 'lityum';
      if (s.includes('klozapin')) return 'klozapin';
      if (s.includes('fluoksetin') || s.includes('paroksetin') || s.includes('sertralin') || s.includes('essitalopram') || s.includes('sitalopram') || s.includes('ssri') || s.includes('snri')) return 'ssri';
      if (s.includes('tramadol')) return 'tramadol';
      if (s.includes('nsaii') || s.includes('ibuprofen') || s.includes('naproksen')) return 'nsaii';
      if (s.includes('ace') || s.includes('arb') || s.includes('ramipril')) return 'ace';
      if (s.includes('tiyazid') || s.includes('hidroklorotiyazid')) return 'tiyazid';
      if (s.includes('valproat')) return 'valproat';
      if (s.includes('lamotrijin')) return 'lamotrijin';
      if (s.includes('karbamazepin')) return 'karbamazepin';
      if (s.includes('fluvoksamin')) return 'fluvoksamin';
      if (s.includes('siprofloksasin')) return 'siprofloksasin';
      if (s.includes('haloperidol')) return 'haloperidol';
      if (s.includes('metoklopramid') || s.includes('metpamid')) return 'metoklopramid';
      if (s.includes('tamoksifen')) return 'tamoksifen';
      if (s.includes('kontraseptif') || s.includes('oks')) return 'oks';
      if (s.includes('moklobemid') || s.includes('maoi')) return 'maoi';
      return s;
    };

    const c1 = getCore(n1);
    const c2 = getCore(n2);

    for (const item of DRUG_INTERACTIONS_DATA) {
      const a = item.drugA.toLowerCase();
      const b = item.drugB.toLowerCase();

      const matchesDirect = 
        (a.includes(c1) && b.includes(c2)) || 
        (a.includes(c2) && b.includes(c1));

      if (matchesDirect) return item;
    }
    return null;
  };

  const dualResult = useMemo(() => {
    return findPairInteraction(drugA, drugB);
  }, [drugA, drugB]);

  // Multi-drug pairs calculation
  const multiInteractions = useMemo(() => {
    const list: { pairA: string; pairB: string; interaction: DrugInteraction }[] = [];
    for (let i = 0; i < selectedMultiDrugs.length; i++) {
      for (let j = i + 1; j < selectedMultiDrugs.length; j++) {
        const found = findPairInteraction(selectedMultiDrugs[i], selectedMultiDrugs[j]);
        if (found) {
          list.push({
            pairA: selectedMultiDrugs[i],
            pairB: selectedMultiDrugs[j],
            interaction: found
          });
        }
      }
    }
    return list;
  }, [selectedMultiDrugs]);

  // Table filtering
  const filteredInteractions = useMemo(() => {
    return DRUG_INTERACTIONS_DATA.filter((item) => {
      const matchesSearch =
        item.drugA.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.drugB.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.title.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.mechanism.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.clinicalRisk.toLowerCase().includes(tableSearch.toLowerCase());

      const matchesSeverity =
        severityFilter === 'all' || item.severity === severityFilter;

      return matchesSearch && matchesSeverity;
    });
  }, [tableSearch, severityFilter]);

  const getSeverityBadge = (severity: InteractionSeverity) => {
    switch (severity) {
      case 'contraindicated':
        return {
          label: 'KONTRENDİKE (Ölümcül / Tehlikeli)',
          badgeClass: 'bg-red-950/80 text-red-400 border border-red-800',
          dotColor: 'bg-red-500',
          borderAccent: 'border-red-600'
        };
      case 'major':
        return {
          label: 'MAJÖR RİSK (Yakın İzlem / Doz Ayarı)',
          badgeClass: 'bg-red-900/50 text-red-300 border border-red-700',
          dotColor: 'bg-red-400',
          borderAccent: 'border-red-500'
        };
      case 'moderate':
        return {
          label: 'ORTA DÜZEY RİSK',
          badgeClass: 'bg-neutral-900 text-neutral-300 border border-neutral-700',
          dotColor: 'bg-neutral-400',
          borderAccent: 'border-neutral-700'
        };
      case 'minor':
      default:
        return {
          label: 'MİNÖR ETKİLEŞİM',
          badgeClass: 'bg-neutral-950 text-neutral-400 border border-neutral-800',
          dotColor: 'bg-neutral-500',
          borderAccent: 'border-neutral-800'
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6" id="interaction-checker-root">
      {/* Top Banner */}
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/60 border border-red-800/80 text-red-400 text-xs font-mono uppercase tracking-wider mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              İlaç Etkileşim & Toksisite Güvenliği
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Psikiyatrik İlaç Etkileşim Portalı
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-2xl leading-relaxed">
              Önerilen resmi Medscape Drug Interaction Checker kılavuzu, dahili çift/çoklu ilaç kontrolü ve 
              sitokrom P450 (CYP) metabolik izoenzim tabloları.
            </p>
          </div>
        </div>
      </div>

      {/* Main Two-Page Switcher */}
      <div className="flex border-b border-neutral-800 bg-[#101010] p-1 gap-2">
        <button
          onClick={() => setMainPage('page1_external')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            mainPage === 'page1_external'
              ? 'bg-red-600 text-white shadow-lg'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>1. SAYFA: Önerilen Dış Klinik Siteler (Medscape Checker)</span>
          <span className="hidden sm:inline-block text-[10px] bg-black/40 px-1.5 py-0.5 rounded uppercase tracking-wider">
            Öncelikli Başvuru
          </span>
        </button>

        <button
          onClick={() => setMainPage('page2_internal')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            mainPage === 'page2_internal'
              ? 'bg-red-600 text-white shadow-lg'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>2. SAYFA: Dahili Psikiyatri Etkileşim Aracı & Toplu Tablolar</span>
        </button>
      </div>

      {/* SAYFA 1: Medscape Drug Interaction Checker ve Akademik Siteler */}
      {mainPage === 'page1_external' && (
        <div className="space-y-6">
          {/* Main Medscape Recommendation Card */}
          <div className="border-2 border-red-600/80 bg-[#0f0f0f] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-wider">
                  <span>Önerilen Resmi Klinik Veritabanı</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Medscape Drug Interaction Checker
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Klinik pratikte on binlerce molekülün, psikiyatri ilaçlarının, dahiliye, kardiyoloji, nöroloji ve antibiyotiklerin 
                  tüm farmakokinetik (CYP, P-gp) ve farmakodinamik (QTc, Serotonin Sendromu, SSS Depresyonu) etkileşimlerini 
                  anlık olarak çoklu kombinasyon halinde denetleyen dünya çapındaki altın standarttır.
                </p>
                <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 font-mono">
                  <span className="flex items-center gap-1 text-red-400">
                    <Check className="w-4 h-4" /> Çoklu 10+ İlaç Kokteyli Desteği
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <Check className="w-4 h-4" /> Mekanizma & Klinik Kanıt Düzeyi
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <Check className="w-4 h-4" /> Ücretsiz ve Sürekli Güncel
                  </span>
                </div>
              </div>

              {/* Direct Open Action */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <a
                  href="https://reference.medscape.com/drug-interactionchecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-red-600/30 ring-2 ring-red-500/50 cursor-pointer"
                >
                  <span>Medscape Interaction Checker'ı Aç</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <div className="text-center text-[11px] text-neutral-500 font-mono">
                  reference.medscape.com/drug-interactionchecker
                </div>
              </div>
            </div>

            {/* How to use Medscape Guide */}
            <div className="mt-8 pt-6 border-t border-neutral-800/90">
              <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-red-500" />
                Medscape Etkileşim Denetleyicisi Nasıl Kullanılır? (Hızlı Kılavuz)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-[#161616] border border-neutral-800 space-y-1">
                  <span className="font-bold text-red-400 block">1. Jenerik İsimleri Yazın</span>
                  <p className="text-neutral-400 leading-relaxed">
                    Hastanın kullandığı tüm psikiyatrik ve genel tıbbi ilaçların etken maddelerini (örn: Fluoxetine, Olanzapine, Lithium, Ibuprofen) arama kutusuna ekleyin.
                  </p>
                </div>
                <div className="p-3 bg-[#161616] border border-neutral-800 space-y-1">
                  <span className="font-bold text-red-400 block">2. Risk Derecesini İnceleyin</span>
                  <p className="text-neutral-400 leading-relaxed">
                    Medscape sonuçları renk kodlu verir: <strong>Contraindicated</strong> (Kırmızı - Asla verme), <strong>Serious</strong> (Kırmızı/Turuncu - Alternatif seç), <strong>Monitor Closely</strong> (Sarı - Yakın izle).
                  </p>
                </div>
                <div className="p-3 bg-[#161616] border border-neutral-800 space-y-1">
                  <span className="font-bold text-red-400 block">3. Mekanizma & Çözüm Önerisi</span>
                  <p className="text-neutral-400 leading-relaxed">
                    Ayrıntıya tıklayarak CYP inhibisyonu mu, QTc uzaması mı yoksa renal atılım yarışması mı olduğunu görün ve güvenli doz modifikasyonunu uygulayın.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Gold Standard Clinical Drug Databases */}
          <div className="border border-neutral-800 bg-[#0d0d0d] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-red-500" />
                  Diğer Önerilen Akademik ve Klinik Etkileşim Kaynakları
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Çoklu polifarmasi durumlarında teyit amaçlı başvurulabilecek uluslararası otoriteler:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <a
                href="https://www.drugs.com/drug_interactions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#141414] border border-neutral-800 hover:border-red-600 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">Drugs.com</span>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-red-400 transition-colors">
                    Drugs.com Interaction Checker
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Tüketici ve profesyonel düzeyde ilaç-ilaç ve ilaç-besin etkileşimlerini derecelendiren kapsamlı veritabanı.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-red-500 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://crediblemeds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#141414] border border-neutral-800 hover:border-red-600 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">CredibleMeds</span>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-red-400 transition-colors">
                    QTc Uzaması & Torsades de Pointes
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Antipsikotik ve antidepresanların kardiyak aritmik risklerini sınıflandıran küresel resmi tescilli liste.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-red-500 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://drug-interactions.medicine.iu.edu/MainTable.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#141414] border border-neutral-800 hover:border-red-600 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">Indiana Univ</span>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-red-400 transition-colors">
                    Flockhart P450 Drug Interaction Table
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Sitokrom enzimlerinin güçlü, orta ve zayıf inhibitör/indükleyici ve substrat kanıt tablosu.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-red-500 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://www.hiv-druginteractions.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#141414] border border-neutral-800 hover:border-red-600 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">Liverpool Univ</span>
                  <h4 className="font-bold text-white text-sm mt-1 group-hover:text-red-400 transition-colors">
                    Liverpool Drug Interaction Group
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    HIV, Hepatit ve kompleks enfeksiyon ilaçları ile psikofarmakoloji etkileşim rehberleri.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-red-500 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SAYFA 2: Dahili Etkileşim Kontrol Aracı & Toplu Tablolar */}
      {mainPage === 'page2_internal' && (
        <div className="space-y-6">
          {/* Sub-tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-2">
            <button
              onClick={() => setInternalTab('dual')}
              className={`px-4 py-2 text-xs font-bold border transition-colors ${
                internalTab === 'dual'
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Çift İlaç Seçici (A + B)
            </button>
            <button
              onClick={() => setInternalTab('multicheck')}
              className={`px-4 py-2 text-xs font-bold border transition-colors ${
                internalTab === 'multicheck'
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Çoklu İlaç Kokteyli ({selectedMultiDrugs.length} Seçili)
            </button>
            <button
              onClick={() => setInternalTab('table')}
              className={`px-4 py-2 text-xs font-bold border transition-colors ${
                internalTab === 'table'
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Toplu Etkileşimler Veritabanı ({filteredInteractions.length})
            </button>
            <button
              onClick={() => setInternalTab('cyp')}
              className={`px-4 py-2 text-xs font-bold border transition-colors ${
                internalTab === 'cyp'
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Sitokrom P450 (CYP) Enzimleri
            </button>
          </div>

          {/* Sub-Tab 1: Çift İlaç Seçici */}
          {internalTab === 'dual' && (
            <div className="space-y-6">
              <div className="border border-neutral-800 bg-[#0f0f0f] p-5 sm:p-6">
                {/* Presets row */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    Kritik Klinik Kombinasyon Önayarları:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {presetPairs.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDrugA(p.nameA);
                          setDrugB(p.nameB);
                        }}
                        className={`px-2.5 py-1 text-xs border transition-colors cursor-pointer ${
                          drugA === p.nameA && drugB === p.nameB
                            ? 'bg-red-600 border-red-500 text-white font-bold'
                            : 'bg-[#141414] border-neutral-800 text-neutral-300 hover:border-neutral-600'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center pt-2">
                  <div className="md:col-span-5 space-y-1.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                      1. İlaç (İlaç A)
                    </label>
                    <select
                      value={drugA}
                      onChange={(e) => setDrugA(e.target.value)}
                      className="w-full bg-[#161616] border border-neutral-700 text-white text-xs sm:text-sm p-3 focus:outline-none focus:border-red-600"
                    >
                      {commonDrugList.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-1 flex justify-center pt-2 md:pt-6">
                    <button
                      onClick={handleSwapDrugs}
                      title="İlaçları Değiştir"
                      className="p-3 bg-neutral-900 border border-neutral-700 hover:border-red-600 text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      <ArrowLeftRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="md:col-span-5 space-y-1.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-400 inline-block" />
                      2. İlaç (İlaç B)
                    </label>
                    <select
                      value={drugB}
                      onChange={(e) => setDrugB(e.target.value)}
                      className="w-full bg-[#161616] border border-neutral-700 text-white text-xs sm:text-sm p-3 focus:outline-none focus:border-red-600"
                    >
                      {commonDrugList.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Result Area */}
              {dualResult ? (
                (() => {
                  const badge = getSeverityBadge(dualResult.severity);
                  return (
                    <div className={`border-2 ${badge.borderAccent} bg-[#111111] p-6 space-y-4 shadow-xl`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full ${badge.dotColor} animate-pulse`} />
                          <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider ${badge.badgeClass}`}>
                            {badge.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-neutral-500">
                          {dualResult.evidenceSource}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {dualResult.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 bg-black/60 border border-neutral-800 space-y-1.5">
                          <span className="text-red-400 font-mono uppercase font-bold tracking-wider block">
                            Farmakolojik Mekanizma
                          </span>
                          <p className="text-neutral-300 leading-relaxed">
                            {dualResult.mechanism}
                          </p>
                        </div>

                        <div className="p-4 bg-black/60 border border-neutral-800 space-y-1.5">
                          <span className="text-red-400 font-mono uppercase font-bold tracking-wider block">
                            Klinik Risk & Belirtiler
                          </span>
                          <p className="text-neutral-300 leading-relaxed">
                            {dualResult.clinicalRisk}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-red-950/30 border border-red-800/80 text-xs space-y-1.5">
                        <span className="text-red-400 font-bold uppercase tracking-wider flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-red-500" />
                          Önerilen Klinik Yönetim & Önlem
                        </span>
                        <p className="text-neutral-200 leading-relaxed">
                          {dualResult.management}
                        </p>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="p-6 border border-neutral-800 bg-[#0f0f0f] text-center space-y-2">
                  <ShieldCheck className="w-8 h-8 text-neutral-500 mx-auto" />
                  <p className="text-sm font-semibold text-neutral-300">
                    "{drugA}" ve "{drugB}" arasında dahili kritik kontrendikasyon saptanmadı veya listede bulunmuyor.
                  </p>
                  <p className="text-xs text-neutral-500 max-w-lg mx-auto">
                    Kombinasyonu doğrulamak ve tüm molekül veritabanını taramak için lütfen Sayfa 1'deki 
                    <strong> Medscape Drug Interaction Checker</strong> bağlantısını kullanınız.
                  </p>
                  <button
                    onClick={() => setMainPage('page1_external')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors mt-2"
                  >
                    <span>Medscape'de Kontrol Et</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Sub-Tab 2: Çoklu İlaç Kokteyli */}
          {internalTab === 'multicheck' && (
            <div className="space-y-6">
              <div className="border border-neutral-800 bg-[#0f0f0f] p-5">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                  Hastanın Güncel İlaçlarını Seçin (Listeden Ekleyin):
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 bg-[#121212] border border-neutral-800">
                  {commonDrugList.map((d) => {
                    const isSelected = selectedMultiDrugs.includes(d);
                    return (
                      <button
                        key={d}
                        onClick={() => {
                          setSelectedMultiDrugs((prev) =>
                            isSelected ? prev.filter((item) => item !== d) : [...prev, d]
                          );
                        }}
                        className={`px-2.5 py-1 text-xs border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-red-600 border-red-500 text-white font-bold'
                            : 'bg-[#181818] border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {isSelected ? `✓ ${d}` : `+ ${d}`}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                  <span>Seçilen İlaç Sayısı: <strong className="text-white">{selectedMultiDrugs.length}</strong></span>
                  <button
                    onClick={() => setSelectedMultiDrugs([])}
                    className="text-red-400 hover:underline"
                  >
                    Tümünü Temizle
                  </button>
                </div>
              </div>

              {/* Cross Match Results */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Tespit Edilen Çapraz Etkileşimler ({multiInteractions.length})
                </h4>

                {multiInteractions.map((item, idx) => {
                  const badge = getSeverityBadge(item.interaction.severity);
                  return (
                    <div key={idx} className="p-4 bg-[#111111] border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase ${badge.badgeClass}`}>
                            {badge.label}
                          </span>
                          <span className="text-sm font-bold text-white">
                            {item.pairA} ⚡ {item.pairB}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-300 font-semibold">
                        {item.interaction.title}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {item.interaction.management}
                      </p>
                    </div>
                  );
                })}

                {multiInteractions.length === 0 && (
                  <div className="p-6 border border-neutral-800 bg-[#0f0f0f] text-center text-xs text-neutral-400">
                    Seçili ilaçlar arasında dahili kritik etkileşim saptanmadı. Tüm kombinasyonlar için Medscape Drug Interaction Checker önerilir.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Sub-Tab 3: Toplu Etkileşimler Tablosu */}
          {internalTab === 'table' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="İlaç adı, toksisite veya mekanizma ara..."
                    value={tableSearch}
                    onChange={(e) => setTableSearch(e.target.value)}
                    className="w-full bg-[#111111] border border-neutral-800 pl-9 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div className="flex gap-1.5">
                  {(['all', 'contraindicated', 'major', 'moderate'] as const).map((sev) => (
                    <button
                      key={sev}
                      onClick={() => setSeverityFilter(sev)}
                      className={`px-3 py-1 text-xs border transition-colors ${
                        severityFilter === sev
                          ? 'bg-red-600 border-red-500 text-white font-bold'
                          : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {sev === 'all' ? 'Tümü' : sev === 'contraindicated' ? 'Kontrendike' : sev === 'major' ? 'Majör' : 'Orta'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="border border-neutral-800 bg-[#0f0f0f] overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#141414] text-neutral-300 uppercase font-mono border-b border-neutral-800">
                    <tr>
                      <th className="p-3">Risk</th>
                      <th className="p-3">İlaç A</th>
                      <th className="p-3">İlaç B</th>
                      <th className="p-3">Klinik Tablo & Risk</th>
                      <th className="p-3">Yönetim</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 text-neutral-300">
                    {filteredInteractions.map((item, idx) => {
                      const badge = getSeverityBadge(item.severity);
                      return (
                        <tr key={idx} className="hover:bg-neutral-900/60 transition-colors">
                          <td className="p-3 whitespace-nowrap">
                            <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase ${badge.badgeClass}`}>
                              {item.severity}
                            </span>
                          </td>
                          <td className="p-3 font-semibold text-white whitespace-nowrap">{item.drugA}</td>
                          <td className="p-3 font-semibold text-white whitespace-nowrap">{item.drugB}</td>
                          <td className="p-3">
                            <span className="font-bold text-red-400 block mb-0.5">{item.title}</span>
                            <span className="text-neutral-400 line-clamp-2">{item.clinicalRisk}</span>
                          </td>
                          <td className="p-3 text-neutral-300 line-clamp-2 max-w-xs">{item.management}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sub-Tab 4: CYP450 Enzim Tablosu */}
          {internalTab === 'cyp' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CYP_ENZYMES_DATA.map((cyp) => (
                  <div key={cyp.enzyme} className="border border-neutral-800 bg-[#0f0f0f] p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                      <h4 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                        <Zap className="w-4 h-4 text-red-500" />
                        {cyp.enzyme}
                      </h4>
                      <span className="text-xs text-neutral-500 font-mono">Sitokrom İzoenzimi</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {cyp.clinicalNote}
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#141414] border border-neutral-800">
                        <span className="text-red-400 font-bold block mb-1">Substratlar (Bu enzimle yıkılanlar):</span>
                        <div className="flex flex-wrap gap-1">
                          {cyp.substrates.map((s, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-200 text-[11px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#141414] border border-neutral-800">
                        <span className="text-amber-400 font-bold block mb-1">Güçlü İnhibitörler (Enzimi bloke eden / Kan düzeyini artıran):</span>
                        <div className="flex flex-wrap gap-1">
                          {cyp.inhibitorsStrong.map((inh, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-red-950/40 border border-red-900/60 text-red-300 text-[11px]">
                              {inh}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#141414] border border-neutral-800">
                        <span className="text-emerald-400 font-bold block mb-1">İndükleyiciler (Enzimi hızlandıran / İlacı etkisiz kılan):</span>
                        <div className="flex flex-wrap gap-1">
                          {cyp.inducers.map((ind, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[11px]">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
