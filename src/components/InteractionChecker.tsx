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
    { label: 'Lityum + NSAİİ', nameA: 'Lityum', nameB: 'NSAİİ (İbuprofen, Naproksen)' },
    { label: 'Lityum + ACE/ARB', nameA: 'Lityum', nameB: 'ACE İnhibitörleri / ARB (Ramipril, Enalapril)' },
    { label: 'Lityum + Tiyazid', nameA: 'Lityum', nameB: 'Tiyazid Diüretikler (Hidroklorotiyazid)' },
    { label: 'Klozapin + Fluvoksamin', nameA: 'Klozapin', nameB: 'Fluvoksamin' },
    { label: 'Klozapin + Siprofloksasin', nameA: 'Klozapin', nameB: 'Siprofloksasin (Kinolon Antibiyotik)' },
    { label: 'Klozapin + Karbamazepin', nameA: 'Klozapin', nameB: 'Karbamazepin' },
    { label: 'SSRI + MAOI (Moklobemid)', nameA: 'Fluoksetin', nameB: 'Moklobemid (MAOI)' },
    { label: 'SSRI + Tramadol', nameA: 'Sertralin', nameB: 'Tramadol (Opioid Analjezik)' },
    { label: 'Paroksetin + Tamoksifen', nameA: 'Paroksetin', nameB: 'Tamoksifen' },
    { label: 'Valproat + Lamotrijin', nameA: 'Valproat (Sodyum Valproat)', nameB: 'Lamotrijin' },
    { label: 'Haloperidol + Metoklopramid', nameA: 'Haloperidol', nameB: 'Metoklopramid (Metpamid)' },
    { label: 'Karbamazepin + OKS', nameA: 'Karbamazepin', nameB: 'Kombine Oral Kontraseptifler' }
  ];

  // Lookup dual interaction
  const dualResult = useMemo(() => {
    return DRUG_INTERACTIONS_DATA.find((item) => {
      const match1 = item.drugA.toLowerCase() === drugA.toLowerCase() && item.drugB.toLowerCase() === drugB.toLowerCase();
      const match2 = item.drugA.toLowerCase() === drugB.toLowerCase() && item.drugB.toLowerCase() === drugA.toLowerCase();
      return match1 || match2;
    });
  }, [drugA, drugB]);

  // Lookup multi-drug intersections
  const multiInteractions = useMemo(() => {
    if (selectedMultiDrugs.length < 2) return [];
    const results: { pairA: string; pairB: string; interaction: DrugInteraction }[] = [];

    for (let i = 0; i < selectedMultiDrugs.length; i++) {
      for (let j = i + 1; j < selectedMultiDrugs.length; j++) {
        const dA = selectedMultiDrugs[i];
        const dB = selectedMultiDrugs[j];

        const found = DRUG_INTERACTIONS_DATA.find((item) => {
          const m1 = item.drugA.toLowerCase() === dA.toLowerCase() && item.drugB.toLowerCase() === dB.toLowerCase();
          const m2 = item.drugA.toLowerCase() === dB.toLowerCase() && item.drugB.toLowerCase() === dA.toLowerCase();
          return m1 || m2;
        });

        if (found) {
          results.push({ pairA: dA, pairB: dB, interaction: found });
        }
      }
    }
    return results;
  }, [selectedMultiDrugs]);

  // Filtered table
  const filteredInteractions = useMemo(() => {
    return DRUG_INTERACTIONS_DATA.filter((item) => {
      const matchesSearch =
        item.drugA.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.drugB.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.title.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.mechanism.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.clinicalRisk.toLowerCase().includes(tableSearch.toLowerCase());

      const matchesSeverity = severityFilter === 'all' || item.severity === severityFilter;

      return matchesSearch && matchesSeverity;
    });
  }, [tableSearch, severityFilter]);

  const handleSwapDrugs = () => {
    const temp = drugA;
    setDrugA(drugB);
    setDrugB(temp);
  };

  const getSeverityBadge = (sev: InteractionSeverity) => {
    switch (sev) {
      case 'contraindicated':
        return {
          label: 'Kontrendike / Kaçınılmalı',
          badgeClass: 'bg-red-50 text-red-800 border border-red-300 font-bold',
          dotColor: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]',
          borderAccent: 'border-red-600'
        };
      case 'major':
        return {
          label: 'Majör Risk / Yakın İzlem & Doz Modifikasyonu',
          badgeClass: 'bg-amber-50 text-amber-900 border border-amber-300 font-bold',
          dotColor: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]',
          borderAccent: 'border-amber-600'
        };
      case 'moderate':
        return {
          label: 'Orta Derece Risk / Dikkatli İzlem',
          badgeClass: 'bg-neutral-100 text-neutral-800 border border-neutral-300',
          dotColor: 'bg-neutral-300 shadow-xs]',
          borderAccent: 'border-neutral-300'
        };
      default:
        return {
          label: 'Minör / Bilinen Risk Yok',
          badgeClass: 'bg-neutral-100 text-neutral-500 border border-neutral-200',
          dotColor: 'bg-neutral-500',
          borderAccent: 'border-neutral-200'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="border border-neutral-200 bg-white p-5 sm:p-6 text-neutral-900 relative overflow-hidden shadow-2xl rounded-lg">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs font-mono uppercase tracking-wider mb-2 rounded-lg">
              <ShieldAlert className="w-3.5 h-3.5 text-neutral-800" />
              İlaç Etkileşim & Toksisite Güvenliği
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 font-display">
              Psikiyatrik İlaç Etkileşim Portalı
            </h1>
            <p className="text-neutral-700 text-sm mt-1 max-w-2xl leading-relaxed">
              Önerilen resmi Medscape Drug Interaction Checker kılavuzu, dahili çift/çoklu ilaç kontrolü ve 
              sitokrom P450 (CYP) metabolik izoenzim tabloları.
            </p>
          </div>
        </div>
      </div>

      {/* Main Two-Page Switcher */}
      <div className="flex border-b border-neutral-200 bg-white p-1 gap-2 rounded-lg">
        <button
          onClick={() => setMainPage('page1_external')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer rounded-lg ${
            mainPage === 'page1_external'
              ? 'bg-white text-black shadow-xs]'
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>1. SAYFA: Önerilen Dış Klinik Siteler (Medscape Checker)</span>
          <span className="hidden sm:inline-block text-[10px] bg-black/40 px-1.5 py-0.5 uppercase tracking-wider">
            Öncelikli Başvuru
          </span>
        </button>

        <button
          onClick={() => setMainPage('page2_internal')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer rounded-lg ${
            mainPage === 'page2_internal'
              ? 'bg-white text-black shadow-xs]'
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
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
          <div className="border border-neutral-300 bg-white p-6 sm:p-8 relative overflow-hidden shadow-2xl rounded-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded-lg">
                  <span>Önerilen Resmi Klinik Veritabanı</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight font-display">
                  Medscape Drug Interaction Checker
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Klinik pratikte on binlerce molekülün, psikiyatri ilaçlarının, dahiliye, kardiyoloji, nöroloji ve antibiyotiklerin 
                  tüm farmakokinetik (CYP, P-gp) ve farmakodinamik (QTc, Serotonin Sendromu, SSS Depresyonu) etkileşimlerini 
                  anlık olarak çoklu kombinasyon halinde denetleyen dünya çapındaki altın standarttır.
                </p>
                <div className="text-xs text-neutral-700 flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 font-mono">
                  <span className="flex items-center gap-1 text-neutral-800">
                    <Check className="w-4 h-4 text-neutral-900" /> Çoklu 10+ İlaç Kokteyli Desteği
                  </span>
                  <span className="flex items-center gap-1 text-neutral-800">
                    <Check className="w-4 h-4 text-neutral-900" /> Mekanizma & Klinik Kanıt Düzeyi
                  </span>
                  <span className="flex items-center gap-1 text-neutral-800">
                    <Check className="w-4 h-4 text-neutral-900" /> Ücretsiz ve Sürekli Güncel
                  </span>
                </div>
              </div>

              {/* Direct Open Action */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <a
                  href="https://reference.medscape.com/drug-interactionchecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-neutral-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xs cursor-pointer rounded-lg"
                >
                  <span>Medscape Interaction Checker'ı Aç</span>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </a>

                <div className="text-center text-[11px] text-neutral-500 font-mono">
                  reference.medscape.com/drug-interactionchecker
                </div>
              </div>
            </div>

            {/* How to use Medscape Guide */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-neutral-800" />
                Medscape Etkileşim Denetleyicisi Nasıl Kullanılır? (Hızlı Kılavuz)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                  <span className="font-bold text-neutral-900 block">1. Jenerik İsimleri Yazın</span>
                  <p className="text-neutral-500 leading-relaxed">
                    Hastanın kullandığı tüm psikiyatrik ve genel tıbbi ilaçların etken maddelerini (örn: Fluoxetine, Olanzapine, Lithium, Ibuprofen) arama kutusuna ekleyin.
                  </p>
                </div>
                <div className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                  <span className="font-bold text-neutral-900 block">2. Risk Derecesini İnceleyin</span>
                  <p className="text-neutral-500 leading-relaxed">
                    Medscape sonuçları renk kodlu verir: <strong>Contraindicated</strong> (Kritik kontrendike), <strong>Serious</strong> (Ciddi risk - alternatif seç), <strong>Monitor Closely</strong> (Yakın izle).
                  </p>
                </div>
                <div className="p-3 bg-white border border-neutral-200 space-y-1 rounded-lg">
                  <span className="font-bold text-neutral-900 block">3. Mekanizma & Çözüm Önerisi</span>
                  <p className="text-neutral-500 leading-relaxed">
                    Ayrıntıya tıklayarak CYP inhibisyonu mu, QTc uzaması mı yoksa renal atılım yarışması mı olduğunu görün ve güvenli doz modifikasyonunu uygulayın.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Gold Standard Clinical Drug Databases */}
          <div className="border border-neutral-200 bg-white p-6 space-y-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2 font-display">
                  <ExternalLink className="w-4 h-4 text-neutral-800" />
                  Diğer Önerilen Akademik ve Klinik Etkileşim Kaynakları
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Çoklu polifarmasi durumlarında teyit amaçlı başvurulabilecek uluslararası otoriteler:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <a
                href="https://www.drugs.com/drug_interactions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-neutral-200 hover:border-neutral-500 transition-all group flex flex-col justify-between rounded-lg"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">Drugs.com</span>
                  <h4 className="font-bold text-neutral-900 text-sm mt-1 group-hover:text-neutral-800 transition-colors">
                    Drugs.com Interaction Checker
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Tüketici ve profesyonel düzeyde ilaç-ilaç ve ilaç-besin etkileşimlerini derecelendiren kapsamlı veritabanı.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-neutral-900 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://crediblemeds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-neutral-200 hover:border-neutral-500 transition-all group flex flex-col justify-between rounded-lg"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">CredibleMeds</span>
                  <h4 className="font-bold text-neutral-900 text-sm mt-1 group-hover:text-neutral-800 transition-colors">
                    QTc Uzaması & Torsades de Pointes
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Antipsikotik ve antidepresanların kardiyak aritmik risklerini sınıflandıran küresel resmi tescilli liste.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-neutral-900 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://drug-interactions.medicine.iu.edu/MainTable.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-neutral-200 hover:border-neutral-500 transition-all group flex flex-col justify-between rounded-lg"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">Indiana Univ</span>
                  <h4 className="font-bold text-neutral-900 text-sm mt-1 group-hover:text-neutral-800 transition-colors">
                    Flockhart P450 Drug Interaction Table
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Sitokrom enzimlerinin güçlü, orta ve zayıf inhibitör/indükleyici ve substrat kanıt tablosu.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-neutral-900 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="https://www.hiv-druginteractions.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-neutral-200 hover:border-neutral-500 transition-all group flex flex-col justify-between rounded-lg"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">Liverpool Univ</span>
                  <h4 className="font-bold text-neutral-900 text-sm mt-1 group-hover:text-neutral-800 transition-colors">
                    Liverpool Drug Interaction Group
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Antiviral, immünsüpresif ve psikiyatri ilaçlarının polifarmasi kılavuzları.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs text-neutral-900 font-semibold gap-1">
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SAYFA 2: Dahili Psikiyatri Etkileşim Aracı & Toplu Tablolar */}
      {mainPage === 'page2_internal' && (
        <div className="space-y-6">
          {/* Sub Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-3">
            <button
              onClick={() => setInternalTab('dual')}
              className={`px-4 py-2 text-xs font-bold border transition-colors rounded-lg ${
                internalTab === 'dual'
                  ? 'bg-white border-white text-black font-black'
                  : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Çift İlaç Seçici (A + B)
            </button>
            <button
              onClick={() => setInternalTab('multicheck')}
              className={`px-4 py-2 text-xs font-bold border transition-colors rounded-lg ${
                internalTab === 'multicheck'
                  ? 'bg-white border-white text-black font-black'
                  : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Çoklu İlaç Kokteyli ({selectedMultiDrugs.length} Seçili)
            </button>
            <button
              onClick={() => setInternalTab('table')}
              className={`px-4 py-2 text-xs font-bold border transition-colors rounded-lg ${
                internalTab === 'table'
                  ? 'bg-white border-white text-black font-black'
                  : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Tüm Kritik Etkileşimler Tablosu ({filteredInteractions.length})
            </button>
            <button
              onClick={() => setInternalTab('cyp')}
              className={`px-4 py-2 text-xs font-bold border transition-colors rounded-lg ${
                internalTab === 'cyp'
                  ? 'bg-white border-white text-black font-black'
                  : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Sitokrom P450 (CYP) Enzimleri
            </button>
          </div>

          {/* Sub-Tab 1: Çift İlaç Seçici */}
          {internalTab === 'dual' && (
            <div className="space-y-6">
              <div className="border border-neutral-200 bg-white p-5 sm:p-6 rounded-lg">
                {/* Presets row */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-neutral-700 uppercase tracking-wider block mb-2 font-bold">
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
                        className={`px-2.5 py-1 text-xs border transition-colors cursor-pointer rounded-lg ${
                          drugA === p.nameA && drugB === p.nameB
                            ? 'bg-white border-white text-black font-bold'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-500'
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
                    <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white inline-block shadow-[0_0_6px_#ffffff]" />
                      1. İlaç (İlaç A)
                    </label>
                    <select
                      value={drugA}
                      onChange={(e) => setDrugA(e.target.value)}
                      className="w-full bg-white border border-neutral-200 text-neutral-900 text-xs sm:text-sm p-3 focus:outline-none focus:border-neutral-900 rounded-lg"
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
                      className="p-3 bg-neutral-100 border border-neutral-200 hover:border-neutral-400 text-neutral-800 hover:text-black transition-all cursor-pointer rounded-lg shadow-xs"
                    >
                      <ArrowLeftRight className="w-4 h-4 text-neutral-800" />
                    </button>
                  </div>

                  <div className="md:col-span-5 space-y-1.5">
                    <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-400 inline-block" />
                      2. İlaç (İlaç B)
                    </label>
                    <select
                      value={drugB}
                      onChange={(e) => setDrugB(e.target.value)}
                      className="w-full bg-white border border-neutral-200 text-neutral-900 text-xs sm:text-sm p-3 focus:outline-none focus:border-neutral-900 rounded-lg"
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
                    <div className={`border-2 ${badge.borderAccent} bg-white p-6 space-y-4 shadow-xl rounded-lg`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full ${badge.dotColor} animate-pulse`} />
                          <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-lg ${badge.badgeClass}`}>
                            {badge.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-neutral-500">
                          {dualResult.evidenceSource}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-neutral-900 tracking-tight font-display">
                        {dualResult.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 bg-white border border-neutral-200 space-y-1.5 rounded-lg">
                          <span className="text-neutral-900 font-mono uppercase font-bold tracking-wider block">
                            Farmakolojik Mekanizma
                          </span>
                          <p className="text-neutral-700 leading-relaxed">
                            {dualResult.mechanism}
                          </p>
                        </div>

                        <div className="p-4 bg-white border border-neutral-200 space-y-1.5 rounded-lg">
                          <span className="text-neutral-900 font-mono uppercase font-bold tracking-wider block">
                            Klinik Risk & Belirtiler
                          </span>
                          <p className="text-neutral-700 leading-relaxed">
                            {dualResult.clinicalRisk}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs space-y-1.5 rounded-lg">
                        <span className="text-neutral-900 font-bold uppercase tracking-wider flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-neutral-800" />
                          Önerilen Klinik Yönetim & Önlem
                        </span>
                        <p className="text-neutral-800 leading-relaxed">
                          {dualResult.management}
                        </p>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="p-6 border border-neutral-200 bg-white text-center space-y-2 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-neutral-500 mx-auto" />
                  <p className="text-sm font-semibold text-neutral-800">
                    "{drugA}" ve "{drugB}" arasında dahili kritik kontrendikasyon saptanmadı veya listede bulunmuyor.
                  </p>
                  <p className="text-xs text-neutral-500 max-w-lg mx-auto">
                    Kombinasyonu doğrulamak ve tüm molekül veritabanını taramak için lütfen Sayfa 1'deki 
                    <strong> Medscape Drug Interaction Checker</strong> bağlantısını kullanınız.
                  </p>
                  <button
                    onClick={() => setMainPage('page1_external')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white hover:bg-neutral-200 text-black font-semibold transition-colors mt-2 rounded-lg cursor-pointer"
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
              <div className="border border-neutral-200 bg-white p-5 rounded-lg">
                <span className="text-xs font-mono text-neutral-900 uppercase tracking-wider block mb-3 font-bold">
                  Hastanın Güncel İlaçlarını Seçin (Listeden Ekleyin):
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 bg-white border border-neutral-200 rounded-lg">
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
                        className={`px-2.5 py-1 text-xs border transition-colors cursor-pointer rounded-lg ${
                          isSelected
                            ? 'bg-neutral-900 border-neutral-900 text-white font-bold shadow-xs'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400'
                        }`}
                      >
                        {isSelected ? `✓ ${d}` : `+ ${d}`}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                  <span>Seçilen İlaç Sayısı: <strong className="text-neutral-900">{selectedMultiDrugs.length}</strong></span>
                  <button
                    onClick={() => setSelectedMultiDrugs([])}
                    className="text-neutral-700 hover:text-black hover:underline cursor-pointer font-bold"
                  >
                    Tümünü Temizle
                  </button>
                </div>
              </div>

              {/* Cross Match Results */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                  Tespit Edilen Çapraz Etkileşimler ({multiInteractions.length})
                </h4>

                {multiInteractions.map((item, idx) => {
                  const badge = getSeverityBadge(item.interaction.severity);
                  return (
                    <div key={idx} className="p-4 bg-white border border-neutral-200 space-y-2 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded-lg ${badge.badgeClass}`}>
                            {badge.label}
                          </span>
                          <span className="text-sm font-bold text-neutral-900">
                            {item.pairA} ⚡ {item.pairB}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-800 font-semibold">
                        {item.interaction.title}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {item.interaction.management}
                      </p>
                    </div>
                  );
                })}

                {multiInteractions.length === 0 && (
                  <div className="p-6 border border-neutral-200 bg-white text-center text-xs text-neutral-500 rounded-lg">
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
                    className="w-full bg-white border border-neutral-200 pl-9 pr-4 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-lg"
                  />
                </div>

                <div className="flex gap-1.5">
                  {(['all', 'contraindicated', 'major', 'moderate'] as const).map((sev) => (
                    <button
                      key={sev}
                      onClick={() => setSeverityFilter(sev)}
                      className={`px-3 py-1 text-xs border transition-colors rounded-lg cursor-pointer ${
                        severityFilter === sev
                          ? 'bg-white border-white text-black font-bold'
                          : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900'
                      }`}
                    >
                      {sev === 'all' ? 'Tümü' : sev === 'contraindicated' ? 'Kontrendike' : sev === 'major' ? 'Majör' : 'Orta'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="border border-neutral-200 bg-white overflow-x-auto rounded-lg">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white text-neutral-900 uppercase font-mono border-b border-neutral-200">
                    <tr>
                      <th className="p-3">Risk</th>
                      <th className="p-3">İlaç A</th>
                      <th className="p-3">İlaç B</th>
                      <th className="p-3">Klinik Tablo & Risk</th>
                      <th className="p-3">Yönetim</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 text-neutral-700">
                    {filteredInteractions.map((item, idx) => {
                      const badge = getSeverityBadge(item.severity);
                      return (
                        <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                          <td className="p-3 whitespace-nowrap">
                            <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded-lg ${badge.badgeClass}`}>
                              {item.severity}
                            </span>
                          </td>
                          <td className="p-3 font-semibold text-neutral-900 whitespace-nowrap">{item.drugA}</td>
                          <td className="p-3 font-semibold text-neutral-900 whitespace-nowrap">{item.drugB}</td>
                          <td className="p-3">
                            <span className="font-bold text-neutral-900 block mb-0.5">{item.title}</span>
                            <span className="text-neutral-500 line-clamp-2">{item.clinicalRisk}</span>
                          </td>
                          <td className="p-3 text-neutral-700 line-clamp-2 max-w-xs">{item.management}</td>
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
                  <div key={cyp.enzyme} className="border border-neutral-200 bg-white p-5 space-y-3 rounded-lg">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                      <h4 className="text-lg font-bold text-neutral-900 font-mono flex items-center gap-2">
                        <Zap className="w-4 h-4 text-neutral-800" />
                        {cyp.enzyme}
                      </h4>
                      <span className="text-xs text-neutral-500 font-mono">Sitokrom İzoenzimi</span>
                    </div>

                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {cyp.clinicalNote}
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-white border border-neutral-200 rounded-lg">
                        <span className="text-neutral-900 font-bold block mb-1">Substratlar (Bu enzimle yıkılanlar):</span>
                        <div className="flex flex-wrap gap-1">
                          {cyp.substrates.map((s, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-800 text-[11px] rounded-lg">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-2.5 bg-white border border-neutral-200 rounded-lg">
                        <span className="text-neutral-900 font-bold block mb-1">Güçlü İnhibitörler (Enzimi bloke eden / Kan düzeyini artıran):</span>
                        <div className="flex flex-wrap gap-1">
                          {cyp.inhibitorsStrong.map((inh, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-900 font-semibold text-[11px] rounded-lg">
                              {inh}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-2.5 bg-white border border-neutral-200 rounded-lg">
                        <span className="text-neutral-900 font-bold block mb-1">İndükleyiciler (Enzimi hızlandıran / İlacı etkisiz kılan):</span>
                        <div className="flex flex-wrap gap-1">
                          {cyp.inducers.map((ind, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-700 text-[11px] rounded-lg">
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
