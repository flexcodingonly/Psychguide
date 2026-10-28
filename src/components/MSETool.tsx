import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Copy, 
  Check, 
  RotateCcw, 
  FileText, 
  CheckSquare, 
  Square, 
  Sparkles, 
  AlertTriangle, 
  Scale, 
  BookOpen, 
  GitCompare, 
  Search,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Layers,
  HeartPulse
} from 'lucide-react';
import { 
  MSE_DATA, 
  TURKISH_MEDICOLEGAL_DATA, 
  DIAGNOSTIC_TENSION_POINTS_DATA, 
  MSE_DOCUMENTATION_ERRORS_DATA, 
  MSE_CASE_EXAMPLES_DATA, 
  MSE_RED_FLAGS_DATA,
  PROFESSOR_FULL_TEMPLATE 
} from '../data/mseData';
import { GeometricDiamondCornerOrnament } from './MedicalThemeDecorations';

type MSETutorialTab = 'generator' | 'tension_points' | 'red_flags' | 'medicolegal' | 'case_examples' | 'glossary';

export const MSETool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MSETutorialTab>('generator');
  const [copied, setCopied] = useState(false);
  const [copiedCaseId, setCopiedCaseId] = useState<string | null>(null);
  const [glossarySearch, setGlossarySearch] = useState('');
  const [tensionSearch, setTensionSearch] = useState('');

  // Store selected terms per category: { [groupId: string]: string[] }
  const [selections, setSelections] = useState<Record<string, string[]>>({
    consciousness_attention: ['Alert / Tam Uyanık / Çevresel farkındalık tam (Puan 0)'],
    appearance: ['Görünür yaş kronolojik yaşla uyumlu / Genel beden durumu iyi (Puan 0)', 'Göz teması doğal ve sürdürülebilir (Puan 0)'],
    psychomotor_catatonia: ['Psikomotor aktivite olağan / Doğal devinim (Puan 0)'],
    speech_language: ['Doğal hız, miktar, ses tonu ve akıcılıkta (Puan 0)'],
    mood_affect: ['Duygudurum Ötimik (Dengeli / Olağan) (Puan 0)', 'Duygulanım: Tam Aralık ve Reaktif (Puan 0)'],
    thought_process: ['Lineer ve Hedefe Yönelik (Goal-directed) (Puan 0)'],
    thought_content_delusions: ['Sanrısal içerik saptanmadı / Gerçeklik testi tam (Puan 0)'],
    perception: ['Algısal bozukluk tariflemiyor / İllüzyon-Varsanı yok (Puan 0)'],
    cognition_neuropsychiatry: ['Yönelim 4 alanda tam (Kişi, Yer, Zaman, Durum) (Puan 0)', 'Anlık Kayıt Tam (3/3 Kelime) (Puan 0)'],
    insight_judgment_legal: ['İçgörü Tam (Bilişsel ve Duygusal Kabul - Derece 6) (Puan 0)', 'Yargılama Sağlam (Gerçek Yaşam ve Hipotetik) (Puan 0)']
  });

  const toggleOption = (groupId: string, term: string) => {
    const current = selections[groupId] || [];
    if (current.includes(term)) {
      setSelections({
        ...selections,
        [groupId]: current.filter(t => t !== term)
      });
    } else {
      setSelections({
        ...selections,
        [groupId]: [...current, term]
      });
    }
  };

  const handleSetNormalBaseline = () => {
    setSelections({
      consciousness_attention: ['Alert / Tam Uyanık / Çevresel farkındalık tam (Puan 0)'],
      appearance: ['Görünür yaş kronolojik yaşla uyumlu / Genel beden durumu iyi (Puan 0)', 'Göz teması doğal ve sürdürülebilir (Puan 0)'],
      psychomotor_catatonia: ['Psikomotor aktivite olağan / Doğal devinim (Puan 0)'],
      speech_language: ['Doğal hız, miktar, ses tonu ve akıcılıkta (Puan 0)'],
      mood_affect: ['Duygudurum Ötimik (Dengeli / Olağan) (Puan 0)', 'Duygulanım: Tam Aralık ve Reaktif (Puan 0)'],
      thought_process: ['Lineer ve Hedefe Yönelik (Goal-directed) (Puan 0)'],
      thought_content_delusions: ['Sanrısal içerik saptanmadı / Gerçeklik testi tam (Puan 0)'],
      perception: ['Algısal bozukluk tariflemiyor / İllüzyon-Varsanı yok (Puan 0)'],
      cognition_neuropsychiatry: ['Yönelim 4 alanda tam (Kişi, Yer, Zaman, Durum) (Puan 0)', 'Anlık Kayıt Tam (3/3 Kelime) (Puan 0)'],
      insight_judgment_legal: ['İçgörü Tam (Bilişsel ve Duygusal Kabul - Derece 6) (Puan 0)', 'Yargılama Sağlam (Gerçek Yaşam ve Hipotetik) (Puan 0)']
    });
  };

  const handleSetManiaProfile = () => {
    setSelections({
      consciousness_attention: ['Alert / Tam Uyanık / Çevresel farkındalık tam (Puan 0)', 'Dikkat: Kolay Çeldirilebilirlik (Distractibility) (Puan 2)'],
      appearance: ['Aşırı gösterişli / Flamboyant / Manik giyim (Puan 2)', 'Göz teması delici / Aşırı sabit / İntrüzif (Puan 2)', 'Aşırı aşinalık / Overfamiliarity / İntrüzivite (Puan 2)'],
      psychomotor_catatonia: ['Psikomotor ajitasyon / Pacing (Puan 2-3)'],
      speech_language: ['Basınçlı Konuşma (Pressure of speech / Logore) (Puan 2)', 'Kelimeler Arası Ses Uyumları (Clang Association) (Puan 2)'],
      mood_affect: ['Duygudurum Öforik / Taşkın / Elate (Puan 2)', 'Duygulanım: Labil / Oynak (Puan 2)'],
      thought_process: ['Fikir Uçuşması (Flight of Ideas) (Puan 2)', 'Teğetsellik (Tangentiality) (Puan 2)'],
      thought_content_delusions: ['Grandiyöz (Büyüklük) Sanrısı (Puan 2)', 'Referans Fikirleri / Referans Sanrısı (Puan 2)'],
      perception: ['Algısal bozukluk tariflemiyor / İllüzyon-Varsanı yok (Puan 0)'],
      cognition_neuropsychiatry: ['Yönelim 4 alanda tam (Kişi, Yer, Zaman, Durum) (Puan 0)', 'Çalışma Belleği / Seri İşlemler Bozuk (Puan 2)'],
      insight_judgment_legal: ['İçgörü Yok / İnkar (Derece 1) (Puan 3)', 'Yargılama Belirgin Bozulmuş (Gerçek Yaşam Hataları) (Puan 3)', 'TMK 405 Alarmı (Akıl Hastalığı Nedeniyle Kısıtlama İhtiyacı) (Puan 3)']
    });
  };

  const handleSetDeliriumProfile = () => {
    setSelections({
      consciousness_attention: ['Somnolans (Uyuşukluk / Uykuya eğilim) (Puan 2)', 'Akut Fluktuasyon (Dalgalanma - Delirium Alarmı!) (Puan 3)', 'Bilinçte Bulanıklık / Clouding of Consciousness (Puan 2)', 'Dikkat: Sürdürülen dikkat bozuk (Sustained Attention Deficit) (Puan 2)'],
      appearance: ['Olduğundan yaşlı / Kaşektik / Frajil görünüm (Puan 2)', 'Göz teması kısıtlı / Kaçınan (Puan 1-2)'],
      psychomotor_catatonia: ['Psikomotor ajitasyon / Pacing (Puan 2-3)'],
      speech_language: ['Yanıt Latansı Belirgin Uzamış (Puan 2)', 'Dizartrik / Peltek Artikülasyon (Puan 2)'],
      mood_affect: ['Duygudurum Disforik / İçsel Huzursuzluk (Puan 2)', 'Duygulanım: Labil / Oynak (Puan 2)'],
      thought_process: ['Çağrışım Gevşemesi (Loose Associations / Derailment) (Puan 2-3)', 'İnkoherans / Kelime Salatası (Word Salad) (Puan 3)'],
      thought_content_delusions: ['Persekütuar (Kötülük Görme) Sanrısı (Puan 2-3)'],
      perception: ['Görsel Varsanı (Formed / İnsan-Hayvan Figürleri) (Puan 2-3)', 'İllüzyon (Yanılsama) (Puan 1)'],
      cognition_neuropsychiatry: ['Zaman Yönelimi Bozuk (Puan 2)', 'Yer ve Mekan Yönelimi Bozuk (Puan 2)', 'Gecikmeli Geri Çağırma Bozuk (5 Dakika Sonra Recall) (Puan 2)'],
      insight_judgment_legal: ['İçgörü Yok / İnkar (Derece 1) (Puan 3)', 'Karar Verme Kapasitesi Kısıtlı (Decision-specific) (Puan 2-3)']
    });
  };

  const handleSetCatatoniaProfile = () => {
    setSelections({
      consciousness_attention: ['Alert / Tam Uyanık / Çevresel farkındalık tam (Puan 0)'],
      appearance: ['Öz bakım belirgin bozulmuş / Hijyen ihmali (Puan 2)', 'Boş / Vacant bakış (Puan 2)', 'Yüz ifadesi hipomimik / amimik (Puan 2)'],
      psychomotor_catatonia: ['Katatoni: Mutizm ve Staring (BFCRS Pozitif) (Puan 3)', 'Katatoni: Balmumu Esnekliği (Waxy Flexibility) / Katalepsi (Puan 3)', 'Katatoni: Negativizm / Gegenhalten (Karşı Koyma) (Puan 3)'],
      speech_language: ['Konuşma Miktarı Yoksul (Poverty of Speech / Aloji) (Puan 2)'],
      mood_affect: ['Duygulanım: Düzleşmiş (Flat Affect) (Puan 3)', 'Non-reaktif Duygulanım (Puan 2)'],
      thought_process: ['Düşünce Yavaşlaması / Düşünce Yoksulluğu (Puan 2)'],
      thought_content_delusions: ['Nihilistik Sanrı / Cotard Sendromu (Puan 3)'],
      perception: ['Algısal bozukluk tariflemiyor / İllüzyon-Varsanı yok (Puan 0)'],
      cognition_neuropsychiatry: ['Yönelim 4 alanda tam (Kişi, Yer, Zaman, Durum) (Puan 0)'],
      insight_judgment_legal: ['Karar Verme Kapasitesi Kısıtlı (Decision-specific) (Puan 2-3)']
    });
  };

  const handleClearAll = () => {
    const empty: Record<string, string[]> = {};
    MSE_DATA.forEach(g => {
      empty[g.id] = [];
    });
    setSelections(empty);
  };

  const generateFormattedNote = () => {
    const lines: string[] = [
      'RUHSAL DURUM MUAYENESİ (MENTAL STATUS EXAMINATION - MSE)',
      'Düzenlenme Tarihi: ' + new Date().toLocaleDateString('tr-TR') + ' ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      'Klinik Standart: Türk Psikiyatri Derneği, Sağlık Bakanlığı Demans Protokolü, DSM-5-TR, ICD-11',
      'Derecelendirme Çıpası: 0 (Normal/Korunmuş), 1 (Hafif sapma), 2 (Belirgin sapma), 3 (Ağır/Acil sapma)',
      '--------------------------------------------------------------------------------'
    ];

    let hasAnySelection = false;

    MSE_DATA.forEach(group => {
      const selected = selections[group.id] || [];
      if (selected.length > 0) {
        hasAnySelection = true;
        lines.push(`[${group.title.toUpperCase()}]`);
        selected.forEach(term => {
          const opt = group.options.find(o => o.term === term);
          lines.push(` • ${term}`);
          if (opt?.sampleSentence) {
            lines.push(`   Epikriz Cümlesi: "${opt.sampleSentence}"`);
          }
        });
        lines.push('');
      }
    });

    if (!hasAnySelection) {
      lines.push('Herhangi bir kategori işaretlenmedi. Lütfen sol panelden klinik bulguları seçin.');
    }

    lines.push('--------------------------------------------------------------------------------');
    lines.push('MEDİKOLEGAL & DİNAMİK FORMÜLASYON NOTU:');
    lines.push('Klinik izlenim, risk boyutu, karar verme yeterliği ve TMK/TCK ilgili maddeleri bağlamında değerlendirilmiştir.');
    lines.push('Raporlayan Hekim / Servis: PSYCHDS Klinik Psikiyatri Rehberi');

    return lines.join('\n');
  };

  const handleCopyNote = () => {
    navigator.clipboard.writeText(generateFormattedNote());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCase = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCaseId(id);
    setTimeout(() => setCopiedCaseId(null), 2000);
  };

  const allGlossaryTerms = MSE_DATA.flatMap(g => 
    g.options.map(opt => ({
      ...opt,
      categoryTitle: g.title
    }))
  ).filter(item => 
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    (item.sampleSentence && item.sampleSentence.toLowerCase().includes(glossarySearch.toLowerCase()))
  );

  const filteredTensionPoints = DIAGNOSTIC_TENSION_POINTS_DATA.filter(tp =>
    tp.issue.toLowerCase().includes(tensionSearch.toLowerCase()) ||
    tp.patternA.toLowerCase().includes(tensionSearch.toLowerCase()) ||
    tp.patternB.toLowerCase().includes(tensionSearch.toLowerCase()) ||
    tp.highYieldDistinction.toLowerCase().includes(tensionSearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header Card */}
      <div className="border border-neutral-200 bg-white p-5 sm:p-6 text-neutral-900 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-xl">
        <GeometricDiamondCornerOrnament className="absolute -top-4 -right-4 hidden sm:block" />
        <div>
          <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xs font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
            <ClipboardCheck className="w-4 h-4 text-white" />
            <span>Master MSE & Deskriptif Psikopatoloji Atlası</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1 tracking-tight font-display">
            Ruhsal Durum Muayenesi (MSE)
          </h1>
          <p className="text-sm text-neutral-700 mt-1 max-w-3xl leading-relaxed">
            Davranış, konuşma, duygulanım, düşünce, algı, biliş, içgörü ve yargılamayı örnekleyen yapılandırılmış klinik inceleme ve epikriz aracı.
          </p>
        </div>

        {/* 4-Step Anchor Badge */}
        <div className="bg-white border border-neutral-200 p-3 rounded-lg flex items-center gap-3 shrink-0">
          <div className="text-right border-r border-neutral-200 pr-3 font-mono text-[11px]">
            <span className="text-neutral-500 block">Ortak 4 Basamaklı</span>
            <span className="text-neutral-900 font-bold">Klinik Çıpa</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-neutral-500 font-bold" title="0: Korunmuş / Olağan">0</span>
            <span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-300 text-neutral-700 font-bold" title="1: Hafif sapma / Kısmen sınırlı">1</span>
            <span className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 text-white font-bold" title="2: Belirgin sapma / Açık bozulma">2</span>
            <span className="px-1.5 py-0.5 bg-black text-white font-bold shadow-xs" title="3: Ağır / Acil sapma">3</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-3">
        {[
          { id: 'generator', label: 'İnteraktif Not Oluşturucu', icon: <FileText className="w-3.5 h-3.5" /> },
          { id: 'tension_points', label: 'İnce Ayırıcılar (Diagnostic Tension)', icon: <GitCompare className="w-3.5 h-3.5" /> },
          { id: 'red_flags', label: 'Kritik Bayraklar & Acil Akışlar', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
          { id: 'medicolegal', label: 'Türk Hukuku (TMK & TCK)', icon: <Scale className="w-3.5 h-3.5" /> },
          { id: 'case_examples', label: 'Örnek Olgular (Tam Formlar)', icon: <Layers className="w-3.5 h-3.5" /> },
          { id: 'glossary', label: 'Semiyoloji Atlası & Sözlük', icon: <BookOpen className="w-3.5 h-3.5" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border rounded-lg ${
              activeTab === tab.id
                ? 'bg-white border-white text-black shadow-md'
                : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: GENERATOR */}
      {activeTab === 'generator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Checkboxes */}
          <div className="lg:col-span-7 space-y-4">
            {/* Quick Profile Buttons */}
            <div className="p-4 bg-white border border-neutral-200 space-y-3 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-neutral-500 font-bold">Hızlı Klinik Profiller:</span>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Tümünü Sıfırla</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={handleSetNormalBaseline}
                  className="px-2.5 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer text-center rounded-lg shadow-xs"
                >
                  Ötimik / Normal
                </button>
                <button
                  type="button"
                  onClick={handleSetManiaProfile}
                  className="px-2.5 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer text-center rounded-lg shadow-xs"
                >
                  Akut Mani
                </button>
                <button
                  type="button"
                  onClick={handleSetDeliriumProfile}
                  className="px-2.5 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer text-center rounded-lg shadow-xs"
                >
                  Delirium
                </button>
                <button
                  type="button"
                  onClick={handleSetCatatoniaProfile}
                  className="px-2.5 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer text-center rounded-lg shadow-xs"
                >
                  Katatoni
                </button>
              </div>
            </div>

            {/* 10 Detailed Category Cards */}
            <div className="space-y-4">
              {MSE_DATA.map((group) => {
                const groupSelected = selections[group.id] || [];
                return (
                  <div key={group.id} className="bg-white border border-neutral-200 shadow-sm p-4 space-y-3 rounded-xl">
                    <div className="flex items-start justify-between gap-2 border-b border-neutral-200 pb-2">
                      <div>
                        <h3 className="font-bold text-sm text-neutral-900 flex items-center gap-2 font-display">
                          <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                          {group.title}
                        </h3>
                        <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">{group.description}</p>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-900 bg-neutral-100 border border-neutral-300 px-2 py-0.5 shrink-0 rounded-lg">
                        {groupSelected.length} seçildi
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {group.options.map((option, idx) => {
                        const isChecked = groupSelected.includes(option.term);
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleOption(group.id, option.term)}
                            className={`p-2.5 border transition-all cursor-pointer flex items-start gap-3 select-none rounded-lg ${
                              isChecked
                                ? 'bg-neutral-100 border-neutral-900 text-neutral-900 shadow-xs'
                                : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900'
                            }`}
                          >
                            <button
                              type="button"
                              className="mt-0.5 shrink-0 text-neutral-800"
                            >
                              {isChecked ? <CheckSquare className="w-4 h-4 text-neutral-900" /> : <Square className="w-4 h-4 text-neutral-400" />}
                            </button>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className={`text-xs font-semibold ${isChecked ? 'text-neutral-900 font-bold' : 'text-neutral-800'}`}>
                                  {option.term}
                                </span>
                                {option.anchorScore !== undefined && (
                                  <span className={`font-mono text-[10px] px-1.5 py-0.2 border rounded-lg ${
                                    option.anchorScore === 3 ? 'bg-black text-white border-black font-bold shadow-xs]' :
                                    option.anchorScore === 2 ? 'bg-neutral-800 text-white border-neutral-600' :
                                    option.anchorScore === 1 ? 'bg-neutral-100 text-neutral-800 border-neutral-300' :
                                    'bg-neutral-50 text-neutral-600 border-neutral-200'
                                  }`}>
                                    Çıpa: {option.anchorScore}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                                {option.definition}
                              </p>
                              {option.sampleSentence && (
                                <p className="text-[11px] text-neutral-700 font-mono italic mt-1.5 bg-white p-1.5 border-l-2 border-white rounded-lg">
                                  "{option.sampleSentence}"
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Real-time Live Generated Professional Note */}
          <div className="lg:col-span-5 sticky top-20 space-y-4">
            <div className="p-4 bg-white border border-neutral-200 shadow-2xl space-y-3 rounded-xl">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neutral-800" />
                  <h3 className="font-bold text-sm text-neutral-900 font-mono uppercase">
                    Canlı Epikriz Metni
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleCopyNote}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer shadow-sm rounded-lg"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black" />}
                  <span>{copied ? 'Kopyalandı!' : 'Metni Kopyala'}</span>
                </button>
              </div>

              <textarea
                readOnly
                value={generateFormattedNote()}
                rows={22}
                className="w-full bg-white border border-neutral-200 p-3.5 font-mono text-[11px] text-neutral-800 leading-relaxed focus:outline-none resize-none selection:bg-white selection:text-black rounded-lg"
              />

              <div className="p-3 bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-500 space-y-1 rounded-lg">
                <span className="font-bold text-neutral-900 block">Klinik Not Yazım İlkesi:</span>
                <p className="leading-relaxed">
                  İyi bir MSE notunda terimler yalnızca adlandırılmaz; fenomen operasyonelleştirilir. "Affekt uygunsuz" yerine neye göre uygunsuz olduğu; "içgörü yok" yerine hangi boyutta farkındalığın bozulduğu yazılmalıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DIAGNOSTIC TENSION POINTS */}
      {activeTab === 'tension_points' && (
        <div className="space-y-6">
          <div className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
            <div className="flex items-center gap-2 text-neutral-900">
              <ShieldAlert className="w-5 h-5 text-neutral-800" />
              <h3 className="font-bold text-base text-neutral-900 font-display">
                Sık Yapılan Belgeleme Hataları vs. Profesör Düzeyi Yazım
              </h3>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Türk klinik ve adli pratiğinde en sık karşılaşılan belgeleme yetersizlikleri ve bunları standart, savunulabilir hale getiren doğru yazım kalıpları.
            </p>

            <div className="overflow-x-auto border border-neutral-200 mt-3 rounded-lg">
              <table className="min-w-full text-xs text-left divide-y divide-neutral-200 font-sans">
                <thead className="bg-neutral-50 text-neutral-700 font-mono font-bold uppercase text-[11px]">
                  <tr>
                    <th className="px-4 py-3 w-1/4 text-neutral-900">Sık Hata (Yetersiz)</th>
                    <th className="px-4 py-3 w-1/3 text-neutral-500">Neden Sorun?</th>
                    <th className="px-4 py-3 text-neutral-900">Daha İyi Profesör Yazımı (Örnek)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {MSE_DOCUMENTATION_ERRORS_DATA.map((err, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-mono font-bold text-neutral-900 bg-white">{err.commonError}</td>
                      <td className="px-4 py-3 text-neutral-500 leading-relaxed">{err.whyProblematic}</td>
                      <td className="px-4 py-3 text-neutral-900 font-medium bg-white font-mono text-[11px] leading-relaxed">
                        {err.betterPractice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Diagnostic Tension Points Filter List */}
          <div className="p-5 bg-white border border-neutral-200 space-y-4 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-neutral-900">
                <GitCompare className="w-5 h-5 text-neutral-800" />
                <h3 className="font-bold text-base text-neutral-900 font-display">
                  Tanısal Gerilim Noktaları (Diagnostic Tension Points)
                </h3>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Gerilim konusu ara..."
                  value={tensionSearch}
                  onChange={(e) => setTensionSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-lg"
                />
              </div>
            </div>

            <div className="overflow-x-auto border border-neutral-200 rounded-lg">
              <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
                <thead className="bg-neutral-50 text-neutral-700 font-mono font-bold uppercase text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Klinik İkilem</th>
                    <th className="px-4 py-3">Örüntü A</th>
                    <th className="px-4 py-3">Örüntü B</th>
                    <th className="px-4 py-3 text-neutral-900 font-bold">MSE'de Yüksek Getirili Ayrım</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-700">
                  {filteredTensionPoints.map((tp, idx) => (
                    <tr key={idx} className="hover:bg-neutral-100/60">
                      <td className="px-4 py-3 font-bold text-neutral-900 font-display">{tp.issue}</td>
                      <td className="px-4 py-3 text-neutral-500">{tp.patternA}</td>
                      <td className="px-4 py-3 text-neutral-500">{tp.patternB}</td>
                      <td className="px-4 py-3 text-neutral-900 font-medium bg-white leading-relaxed">{tp.highYieldDistinction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RED FLAGS & ACUTE WORKFLOWS */}
      {activeTab === 'red_flags' && (
        <div className="space-y-6">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-neutral-900 font-display">Acil Kırmızı Bayraklar ve Eylemler</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Ruhsal durum muayenesinde aşağıdaki bulgular saptandığında rutin poliklinik akışı durdurulmalı; acil organik dışlama veya güvenlik protokolü devreye sokulmalıdır.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MSE_RED_FLAGS_DATA.map((rf, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="font-mono text-[11px] font-bold text-neutral-900 uppercase tracking-wider">
                    {rf.title}
                  </span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_6px_#ffffff]" />
                </div>
                <div className="text-xs space-y-2">
                  <div>
                    <strong className="text-neutral-500 block mb-0.5 font-mono text-[10px] uppercase">Şüphelenilecek Durum / Risk:</strong>
                    <p className="text-neutral-700 font-bold">{rf.suspectedSyndrome}</p>
                  </div>
                  <div>
                    <strong className="text-neutral-900 block mb-0.5 font-mono text-[10px] uppercase">Acil Müdahale Adımı:</strong>
                    <p className="text-neutral-800 font-medium bg-neutral-50 p-2.5 border border-neutral-300 rounded-lg">
                      {rf.immediateAction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: TURKISH MEDICOLEGAL FRAMEWORK */}
      {activeTab === 'medicolegal' && (
        <div className="space-y-6">
          <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 rounded-lg">
            <h4 className="font-bold text-neutral-900 font-display">Türk Medeni Kanunu (TMK) ve Türk Ceza Kanunu (TCK) Bağlamında MSE</h4>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              Mahkemeler ve adli merciler önünde hekimin düzenlediği MSE notu, vesayet, kısıtlama, hukuki ehliyet ve cezai sorumluluk değerlendirmesinde temel delildir.
            </p>
          </div>

          <div className="space-y-4">
            {TURKISH_MEDICOLEGAL_DATA.map((ml, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 space-y-3 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-2 gap-1">
                  <span className="font-mono font-bold text-sm text-neutral-900 bg-neutral-50 px-2.5 py-1 border border-neutral-300 rounded-lg">
                    {ml.norm}
                  </span>
                  <span className="text-xs text-neutral-500">Yasal Norm & Kapsam</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">{ml.situation}</p>
                <div className="bg-white p-3 border border-neutral-200 space-y-1 rounded-lg">
                  <span className="font-mono font-bold text-[10px] text-neutral-900 uppercase block">
                    Kritik Belgeleme Kuralı:
                  </span>
                  <p className="text-neutral-700 font-mono text-[11px] leading-relaxed">
                    {ml.mseDocumentation}
                  </p>
                </div>
                <div className="bg-neutral-50 p-2.5 border border-neutral-300 rounded-lg">
                  <span className="font-mono font-bold text-[10px] text-neutral-700 uppercase block mb-0.5">Önerilen Rapor Dili:</span>
                  <p className="text-xs text-neutral-800 italic">{ml.recommendedReportLanguage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: CASE EXAMPLES */}
      {activeTab === 'case_examples' && (
        <div className="space-y-6">
          <div className="space-y-4">
            {MSE_CASE_EXAMPLES_DATA.map((c) => (
              <div key={c.id} className="p-5 bg-white border border-neutral-200 space-y-4 rounded-xl shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-3 gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-500">{c.clinicalImpression}</span>
                    <h4 className="text-base font-bold text-neutral-900 font-display">{c.title}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{c.vignette}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCase(c.id, c.fullMSE)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer rounded-lg self-start sm:self-auto shrink-0"
                  >
                    {copiedCaseId === c.id ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black" />}
                    <span>{copiedCaseId === c.id ? 'Kopyalandı' : 'Örnek Notu Kopyala'}</span>
                  </button>
                </div>

                <div className="bg-white p-4 border border-neutral-200 rounded-lg font-mono text-xs text-neutral-700 whitespace-pre-wrap leading-relaxed">
                  {c.fullMSE}
                </div>

                <div className="bg-neutral-50 p-3 border border-neutral-300 rounded-lg">
                  <span className="font-mono font-bold text-[10px] text-neutral-900 uppercase block mb-1">
                    Akut Klinik Eylem & Yönetim:
                  </span>
                  <p className="text-neutral-800 text-xs leading-relaxed">{c.acuteAction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: GLOSSARY */}
      {activeTab === 'glossary' && (
        <div className="space-y-4">
          <div className="p-4 bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-lg">
            <div>
              <h4 className="font-bold text-sm text-neutral-900 font-display">Deskriptif Psikopatoloji Sözlüğü</h4>
              <p className="text-xs text-neutral-500">Tüm MSE terimleri ve klinik karşılıkları</p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Terim veya tanım ara..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allGlossaryTerms.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors space-y-2 rounded-lg">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-neutral-900 font-display flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                    <span>{item.term}</span>
                  </h5>
                  {item.anchorScore !== undefined && (
                    <span className={`font-mono text-[10px] px-1.5 py-0.2 border rounded-lg ${
                      item.anchorScore === 3 ? 'bg-black text-white border-black font-bold' :
                      item.anchorScore === 2 ? 'bg-neutral-800 text-white border-neutral-600' :
                      'bg-neutral-100 text-neutral-700 border-neutral-200'
                    }`}>
                      Çıpa: {item.anchorScore}
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">{item.definition}</p>
                {item.sampleSentence && (
                  <div className="bg-neutral-50 p-2.5 border-l-2 border-neutral-800 text-[11px] font-mono text-neutral-800 rounded-r-lg">
                    "{item.sampleSentence}"
                  </div>
                )}
                <div className="pt-1 text-[10px] font-mono text-neutral-500">
                  Kategori: {item.categoryTitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
