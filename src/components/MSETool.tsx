import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Copy, 
  Check, 
  RotateCcw, 
  FileText, 
  Info, 
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
    lines.push('Raporlayan Hekim / Servis: PSYCHDS Klinik & Akademik Karar Destek Sistemi');

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
      <div className="border border-neutral-800 bg-[#0d0d0d] p-5 sm:p-6 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs font-mono uppercase tracking-wider">
            <ClipboardCheck className="w-4 h-4 text-red-500" />
            <span>Master MSE & Deskriptif Psikopatoloji Atlası</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
            Ruhsal Durum Muayenesi (MSE)
          </h1>
          <p className="text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            Yalnızca "oryante, koopere" yazılan bir alan değil; davranış, konuşma, duygulanım, düşünce, algı, biliş, içgörü ve yargılamayı aynı anda örnekleyen profesör düzeyinde yapılandırılmış inceleme aracı.
          </p>
        </div>

        {/* 4-Step Anchor Badge */}
        <div className="bg-black border border-neutral-800 p-3 rounded-none flex items-center gap-3 shrink-0">
          <div className="text-right border-r border-neutral-800 pr-3 font-mono text-[11px]">
            <span className="text-neutral-400 block">Ortak 4 Basamaklı</span>
            <span className="text-red-400 font-bold">Klinik Çıpa</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 font-bold" title="0: Korunmuş / Olağan">0</span>
            <span className="px-1.5 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-400 font-bold" title="1: Hafif sapma / Kısmen sınırlı">1</span>
            <span className="px-1.5 py-0.5 bg-red-950 border border-red-800 text-red-300 font-bold" title="2: Belirgin sapma / Açık bozulma">2</span>
            <span className="px-1.5 py-0.5 bg-red-600 text-white font-bold" title="3: Ağır / Acil sapma">3</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('generator')}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
            activeTab === 'generator'
              ? 'bg-red-600 border-red-500 text-white shadow-md'
              : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>İnteraktif Not Oluşturucu</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('tension_points')}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
            activeTab === 'tension_points'
              ? 'bg-red-600 border-red-500 text-white shadow-md'
              : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          <GitCompare className="w-3.5 h-3.5" />
          <span>İnce Ayırıcılar (Diagnostic Tension)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('red_flags')}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
            activeTab === 'red_flags'
              ? 'bg-red-600 border-red-500 text-white shadow-md'
              : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Kırmızı Bayraklar & Acil Akışlar</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('medicolegal')}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
            activeTab === 'medicolegal'
              ? 'bg-red-600 border-red-500 text-white shadow-md'
              : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Türk Hukuku (TMK & TCK)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('case_examples')}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
            activeTab === 'case_examples'
              ? 'bg-red-600 border-red-500 text-white shadow-md'
              : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Örnek Olgular (Tam Formlar)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('glossary')}
          className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer border ${
            activeTab === 'glossary'
              ? 'bg-red-600 border-red-500 text-white shadow-md'
              : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Semiyoloji Atlası & Sözlük</span>
        </button>
      </div>

      {/* TAB 1: GENERATOR */}
      {activeTab === 'generator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Checkboxes */}
          <div className="lg:col-span-7 space-y-4">
            {/* Quick Profile Buttons */}
            <div className="p-4 bg-[#0d0d0d] border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-neutral-400 font-bold">Hızlı Klinik Profiller:</span>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Tümünü Sıfırla</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={handleSetNormalBaseline}
                  className="px-2.5 py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer text-center"
                >
                  Ötimik / Normal
                </button>
                <button
                  type="button"
                  onClick={handleSetManiaProfile}
                  className="px-2.5 py-2 text-xs font-bold text-red-200 bg-red-950/40 hover:bg-red-950/70 border border-red-800 transition-colors cursor-pointer text-center"
                >
                  Akut Mani
                </button>
                <button
                  type="button"
                  onClick={handleSetDeliriumProfile}
                  className="px-2.5 py-2 text-xs font-bold text-yellow-200 bg-yellow-950/30 hover:bg-yellow-950/60 border border-yellow-800 transition-colors cursor-pointer text-center"
                >
                  Delirium
                </button>
                <button
                  type="button"
                  onClick={handleSetCatatoniaProfile}
                  className="px-2.5 py-2 text-xs font-bold text-purple-200 bg-purple-950/30 hover:bg-purple-950/60 border border-purple-800 transition-colors cursor-pointer text-center"
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
                  <div key={group.id} className="bg-[#0d0d0d] border border-neutral-800 shadow-sm p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2 border-b border-neutral-800 pb-2">
                      <div>
                        <h3 className="font-bold text-sm text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                          {group.title}
                        </h3>
                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{group.description}</p>
                      </div>
                      <span className="font-mono text-[10px] text-red-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 shrink-0">
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
                            className={`p-2.5 border transition-all cursor-pointer flex items-start gap-3 select-none ${
                              isChecked
                                ? 'bg-red-950/20 border-red-700 text-white'
                                : 'bg-black/60 border-neutral-800/80 text-neutral-300 hover:border-neutral-700 hover:text-white'
                            }`}
                          >
                            <button
                              type="button"
                              className="mt-0.5 shrink-0 text-red-500"
                            >
                              {isChecked ? <CheckSquare className="w-4 h-4 text-red-500" /> : <Square className="w-4 h-4 text-neutral-600" />}
                            </button>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className={`text-xs font-bold ${isChecked ? 'text-red-300' : 'text-neutral-200'}`}>
                                  {option.term}
                                </span>
                                {option.anchorScore !== undefined && (
                                  <span className={`font-mono text-[10px] px-1.5 py-0.2 border ${
                                    option.anchorScore === 3 ? 'bg-red-600 text-white border-red-500 font-bold' :
                                    option.anchorScore === 2 ? 'bg-red-950 text-red-300 border-red-800' :
                                    option.anchorScore === 1 ? 'bg-neutral-900 text-neutral-400 border-neutral-700' :
                                    'bg-black text-neutral-400 border-neutral-800'
                                  }`}>
                                    Çıpa: {option.anchorScore}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                                {option.definition}
                              </p>
                              {option.sampleSentence && (
                                <p className="text-[11px] text-neutral-300 font-mono italic mt-1.5 bg-neutral-950 p-1.5 border-l-2 border-red-600">
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
            <div className="p-4 bg-[#0d0d0d] border border-neutral-800 shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-red-500" />
                  <h3 className="font-bold text-sm text-white font-mono uppercase">
                    Canlı Epikriz Metni
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleCopyNote}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
                  <span>{copied ? 'Kopyalandı!' : 'Metni Kopyala'}</span>
                </button>
              </div>

              <textarea
                readOnly
                value={generateFormattedNote()}
                rows={22}
                className="w-full bg-black border border-neutral-800 p-3.5 font-mono text-[11px] text-neutral-200 leading-relaxed focus:outline-none resize-none selection:bg-red-900 selection:text-white"
              />

              <div className="p-3 bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-400 space-y-1">
                <span className="font-bold text-neutral-200 block">Klinik Not Yazım İlkesi:</span>
                <p className="leading-relaxed">
                  İyi bir MSE notunda terimler yalnızca adlandırılmaz; fenomen operasyonelleştirilir. "Affekt uygunsuz" yerine neye göre uygunsuz olduğu; "içgörü yok" yerine hangi boyutta farkındalığın bozulduğu yazılmalıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DIAGNOSTIC TENSION POINTS & DOCUMENTATION ERRORS */}
      {activeTab === 'tension_points' && (
        <div className="space-y-6">
          {/* Documentation Errors Comparison Table */}
          <div className="p-5 bg-[#0d0d0d] border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-red-500">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-base text-white">
                Sık Yapılan Belgeleme Hataları vs. Profesör Düzeyi Yazım
              </h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Türk klinik ve adli pratiğinde en sık karşılaşılan belgeleme yetersizlikleri ve bunları standart, savunulabilir hale getiren doğru yazım kalıpları.
            </p>

            <div className="overflow-x-auto border border-neutral-800 mt-3">
              <table className="min-w-full text-xs text-left divide-y divide-neutral-800 font-sans">
                <thead className="bg-[#141414] text-neutral-300 font-mono font-bold uppercase text-[11px]">
                  <tr>
                    <th className="px-4 py-3 w-1/4 text-red-400">Sık Hata (Yetersiz)</th>
                    <th className="px-4 py-3 w-1/3 text-neutral-400">Neden Sorun?</th>
                    <th className="px-4 py-3 text-white">Daha İyi Profesör Yazımı (Örnek)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-300">
                  {MSE_DOCUMENTATION_ERRORS_DATA.map((err, idx) => (
                    <tr key={idx} className="hover:bg-neutral-900/40">
                      <td className="px-4 py-3 font-mono font-bold text-red-300 bg-red-950/10">{err.commonError}</td>
                      <td className="px-4 py-3 text-neutral-400 leading-relaxed">{err.whyProblematic}</td>
                      <td className="px-4 py-3 text-white font-medium bg-neutral-950 font-mono text-[11px] leading-relaxed">
                        {err.betterPractice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Diagnostic Tension Points Matrix */}
          <div className="p-5 bg-[#0d0d0d] border border-neutral-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <GitCompare className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-base text-white">
                    Diagnostic Tension Points - MSE Üzerinden İnce Ayırıcılar
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Aynı veya benzer görünen fenomenlerin altında yatan farklı mekanizmaları ayırmak için pratik kılavuz (30+ İkili Ayrım).
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="İkili ayrım ara (örn. obsesyon, akoazm)..."
                  value={tensionSearch}
                  onChange={(e) => setTensionSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-black border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="overflow-x-auto border border-neutral-800">
              <table className="min-w-full text-xs text-left divide-y divide-neutral-800">
                <thead className="bg-[#141414] text-neutral-300 font-mono font-bold uppercase text-[11px]">
                  <tr>
                    <th className="px-4 py-3 w-1/4">Gerilim Noktası</th>
                    <th className="px-4 py-3 w-1/4 text-neutral-200">Birinci Örüntü</th>
                    <th className="px-4 py-3 w-1/4 text-neutral-200">İkinci Örüntü</th>
                    <th className="px-4 py-3 text-red-400 font-bold">MSE'de Yüksek Getirili Ayrım</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-300">
                  {filteredTensionPoints.map((tp, idx) => (
                    <tr key={idx} className="hover:bg-neutral-900/40">
                      <td className="px-4 py-3 font-bold text-white bg-black/40">{tp.issue}</td>
                      <td className="px-4 py-3 text-neutral-300 leading-relaxed">{tp.patternA}</td>
                      <td className="px-4 py-3 text-neutral-300 leading-relaxed bg-neutral-950">{tp.patternB}</td>
                      <td className="px-4 py-3 text-red-200 font-medium bg-red-950/20 leading-relaxed">{tp.highYieldDistinction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RED FLAGS & ACUTE FLOWS */}
      {activeTab === 'red_flags' && (
        <div className="space-y-6">
          <div className="p-4 bg-red-950/30 border border-red-800/80 text-xs sm:text-sm text-red-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-sm">Kırmızı Bayraklar ve Acil Müdahale Protokolü</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Ruhsal durum muayenesinde tespit edilen akut dikkat fluktuasyonu, mutizm, stupor, yüksek öldürücülükte intihar planı veya fokal nörolojik bulgular rutin poliklinik akışını durduran ve anında acil işlem gerektiren durumlardır.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MSE_RED_FLAGS_DATA.map((rf, idx) => (
              <div key={idx} className="p-5 bg-[#0d0d0d] border border-neutral-800 space-y-3 shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-800 pb-2">
                  <span className="font-mono text-[11px] font-bold text-red-500 uppercase tracking-wider">
                    ÖN OLASI: {rf.suspectedSyndrome}
                  </span>
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                </div>

                <h3 className="font-bold text-sm text-white leading-snug">
                  {rf.title}
                </h3>

                <div className="p-3 bg-black border border-neutral-800/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                    Anında Yapılacaklar:
                  </span>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    {rf.immediateAction}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Flowcharts for Delirium and Catatonia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Delirium Flowchart */}
            <div className="p-5 bg-[#0d0d0d] border border-neutral-800 space-y-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-red-500" />
                Delirium Hızlı Değerlendirme Algoritması (CAM & 4AT)
              </h3>
              <div className="bg-black p-4 border border-neutral-800 text-xs font-mono space-y-2 text-neutral-300">
                <div className="text-red-400 font-bold">1. Akut zihinsel durum değişikliği var mı?</div>
                <div className="pl-3 border-l-2 border-neutral-700">➔ Gün içi dalgalanma (fluktuasyon) var mı? (Evet/Hayır)</div>
                <div className="text-red-400 font-bold">2. Dikkat bozuk mu? (Inattention)</div>
                <div className="pl-3 border-l-2 border-neutral-700">➔ Ayları tersten sayma veya 4AT testi uygula.</div>
                <div className="text-white bg-neutral-900 p-2 border border-neutral-800 font-bold">
                  4AT Skoru ≥ 4 veya CAM Pozitif ise: DELIRIUM OLASI!
                </div>
                <div className="text-[11px] text-neutral-400 pt-1">
                  İşlem: Vital bulgular, parmak ucu glukoz, SpO2, ilaç listesi (antikolinerjik yük), enfeksiyon/metabolik neden araştırması.
                </div>
              </div>
            </div>

            {/* Catatonia Flowchart */}
            <div className="p-5 bg-[#0d0d0d] border border-neutral-800 space-y-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                Katatoni Hızlı Değerlendirme Algoritması (BFCRS)
              </h3>
              <div className="bg-black p-4 border border-neutral-800 text-xs font-mono space-y-2 text-neutral-300">
                <div className="text-red-400 font-bold">1. Çekirdek bulgular: Mutizm, Staring, Posturing, Negativizm</div>
                <div className="pl-3 border-l-2 border-neutral-700">➔ Bush-Francis Catatonia Rating Scale (BFCRS) ilk 14 maddede ≥ 2 bulgu var mı?</div>
                <div className="text-red-400 font-bold">2. Ateş / Otonom instabilite / Rijidite / CK artışı var mı?</div>
                <div className="pl-3 border-l-2 border-red-800 text-red-300">➔ EVET ise: Malign Katatoni veya NMS ACİLİ!</div>
                <div className="pl-3 border-l-2 border-neutral-700 text-neutral-400">➔ HAYIR ise: Lorazepam challenge testi (1-2 mg IV/SL) ve hızlı uzman değerlendirmesi.</div>
                <div className="text-[11px] text-neutral-400 pt-1">
                  İşlem: Oral beslenme kesilmesi durumunda acil hidrasyon, DVT profilaksisi ve erken EKT hazırlığı.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TURKISH MEDICOLEGAL & CAPACITY */}
      {activeTab === 'medicolegal' && (
        <div className="space-y-6">
          <div className="p-4 bg-neutral-900/60 border border-neutral-800 text-xs sm:text-sm text-neutral-200">
            <h4 className="font-bold text-white text-sm">Türk Medeni Kanunu (TMK) ve Ceza Kanunu (TCK) Çerçevesi</h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              MSE notu tıbbi olduğu kadar adli ve medikolegal bir belgedir. Hekim kesin hukuki hüküm dili ("kısıtlanmalıdır") yerine, klinik olguları ve karar verme kapasitesindeki etkilenmeyi objektif dille belgelendirmelidir.
            </p>
          </div>

          <div className="space-y-4">
            {TURKISH_MEDICOLEGAL_DATA.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-[#0d0d0d] border border-neutral-800 space-y-3 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-red-500 bg-black px-2.5 py-1 border border-neutral-800">
                      {item.norm}
                    </span>
                    <span className="font-bold text-sm text-white">{item.situation}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-black p-3 border border-neutral-800/80 space-y-1">
                    <span className="font-mono font-bold text-[10px] text-neutral-400 uppercase block">
                      MSE'de Özellikle Belgelenecekler:
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{item.mseDocumentation}</p>
                  </div>

                  <div className="bg-red-950/15 p-3 border border-red-900/50 space-y-1">
                    <span className="font-mono font-bold text-[10px] text-red-400 uppercase block">
                      Önerilen Resmî Rapor Dili:
                    </span>
                    <p className="text-white font-mono text-[11px] leading-relaxed italic">
                      "{item.recommendedReportLanguage}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: CASE EXAMPLES */}
      {activeTab === 'case_examples' && (
        <div className="space-y-6">
          <div className="p-4 bg-[#0d0d0d] border border-neutral-800 text-xs sm:text-sm text-neutral-300">
            <h4 className="font-bold text-white text-sm">Eğitim ve Klinik Başvuru: Tam Doldurulmuş MSE Olguları</h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Farklı klinik tablolarda (Mani, Delirium, Katatoni) profesör düzeyinde belgelenmiş vaka vinyetleri, tam MSE formları ve klinik izlenimler.
            </p>
          </div>

          <div className="space-y-6">
            {MSE_CASE_EXAMPLES_DATA.map((c) => (
              <div key={c.id} className="p-5 bg-[#0d0d0d] border border-neutral-800 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                  <div>
                    <h3 className="font-bold text-base text-white">{c.title}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5 italic">{c.vignette}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCase(c.id, c.fullMSE)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedCaseId === c.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCaseId === c.id ? 'Kopyalandı!' : 'Tam MSE\'yi Kopyala'}</span>
                  </button>
                </div>

                <div className="bg-black p-4 border border-neutral-800 font-mono text-xs text-neutral-200 whitespace-pre-wrap leading-relaxed">
                  {c.fullMSE}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#141414] p-3 border border-neutral-800">
                    <span className="font-mono font-bold text-[10px] text-neutral-400 uppercase block mb-1">
                      Klinik İzlenim:
                    </span>
                    <p className="text-neutral-200">{c.clinicalImpression}</p>
                  </div>
                  {c.acuteAction && (
                    <div className="bg-red-950/20 p-3 border border-red-800/60">
                      <span className="font-mono font-bold text-[10px] text-red-400 uppercase block mb-1">
                        Akut Eylem:
                      </span>
                      <p className="text-white">{c.acuteAction}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: SEMIYOLOJI ATLASI & SÖZLÜK */}
      {activeTab === 'glossary' && (
        <div className="p-5 bg-[#0d0d0d] border border-neutral-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-neutral-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white">
                Deskriptif Psikopatoloji & Semiyoloji Sözlüğü
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Klinik terimlerin operasyonel tanımları, ayırıcı tanı bağlamları ve doğrudan kopyalanabilir profesör not cümleleri.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Terim veya tanım ara..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-black border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allGlossaryTerms.map((item, idx) => (
              <div key={idx} className="p-4 bg-black border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {item.term}
                  </h4>
                  {item.anchorScore !== undefined && (
                    <span className={`font-mono text-[10px] px-1.5 py-0.2 border ${
                      item.anchorScore === 3 ? 'bg-red-600 text-white border-red-500 font-bold' :
                      item.anchorScore === 2 ? 'bg-red-950 text-red-300 border-red-800' :
                      item.anchorScore === 1 ? 'bg-neutral-900 text-neutral-400 border-neutral-700' :
                      'bg-black text-neutral-400 border-neutral-800'
                    }`}>
                      Çıpa: {item.anchorScore}
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.definition}
                </p>

                {item.sampleSentence && (
                  <div className="bg-[#121212] p-2 border-l-2 border-red-600 text-[11px] font-mono text-neutral-300">
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
