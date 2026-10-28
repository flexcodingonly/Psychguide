import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Heart, 
  PhoneCall, 
  Save, 
  Printer, 
  Copy, 
  Check, 
  Sparkles, 
  AlertTriangle, 
  Info, 
  RefreshCw,
  UserCheck,
  Home,
  Brain,
  FileCheck2
} from 'lucide-react';

export interface SafetyPlanData {
  warningSigns: string[];
  internalCoping: string[];
  distractionPlacesPeople: string[];
  supportPeople: string[];
  professionalsAgencies: string[];
  safeEnvironment: string[];
}

const DEFAULT_PLAN: SafetyPlanData = {
  warningSigns: [
    'İçimde aniden yükselen yoğun sıkıntı, göğüste baskı hissi',
    'Zihnimde "hiçbir şey düzelmeyecek" veya "herkese yük oluyorum" düşünceleri',
    'Kendimi odama kapatma, kimseyle konuşmak istememe',
    'Uykunun tamamen bozulması veya geceleri yoğun ajitasyon'
  ],
  internalCoping: [
    '5-4-3-2-1 Grounding tekniğiyle etrafımdaki 5 nesneye odaklanmak',
    '4-7-8 ritmik diyafram nefesi almak (4 sn al, 7 sn tut, 8 sn ver)',
    'Yüzümü soğuk suyla yıkamak veya avucuma buz küpü almak (TIPP tekniği)',
    'Sakinleştirici enstrümantal bir müzik açıp 15 dakika uzanmak'
  ],
  distractionPlacesPeople: [
    'Hemen evden çıkıp kalabalık bir parkta veya caddede yürümek',
    'En yakın kahve dükkanına gidip insan sesleri arasında oturmak',
    'Kardeşimi veya arkadaşımı arayıp havadan sudan konuşmak'
  ],
  supportPeople: [
    'Annem / Babam (05xx xxx xx xx)',
    'En yakın arkadaşım (05xx xxx xx xx)',
    'Eşim / Partnerim (05xx xxx xx xx)'
  ],
  professionalsAgencies: [
    '112 Acil Çağrı Merkezi (7/24 Ücretsiz Ambulans & Hayati Aciller)',
    '182 MHRS (Merkezi Hekim Randevu Sistemi)',
    'Yeşilay Danışmanlık Merkezi YEDAM (115 - 7/24 Ücretsiz Psikolojik Destek)',
    'Doktorum / Psikiyatristim (Telefon veya Hastane Kliniği)'
  ],
  safeEnvironment: [
    'Evdeki tüm ilaçları güvenilir bir aile bireyine teslim etmek ve kilitli tutmak',
    'Zor anlarda yanımda yalnız kalmamak, güvendiğim birinin yanına gitmek',
    'Araba veya tehlikeli araç kullanmaktan kaçınmak'
  ]
};

export const SafetyPlanBuilder: React.FC = () => {
  const [plan, setPlan] = useState<SafetyPlanData>(() => {
    try {
      const saved = localStorage.getItem('psychds_safety_plan');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_PLAN;
  });

  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedPlan, setCopiedPlan] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // New item inputs
  const [newWarning, setNewWarning] = useState('');
  const [newCoping, setNewCoping] = useState('');
  const [newDistraction, setNewDistraction] = useState('');
  const [newSupport, setNewSupport] = useState('');
  const [newProfessional, setNewProfessional] = useState('');
  const [newSafeEnv, setNewSafeEnv] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('psychds_safety_plan', JSON.stringify(plan));
    } catch {
      // fallback
    }
  }, [plan]);

  const handleAddItem = (section: keyof SafetyPlanData, text: string, clearFn: (s: string) => void) => {
    if (!text.trim()) return;
    setPlan(prev => ({
      ...prev,
      [section]: [...prev[section], text.trim()]
    }));
    clearFn('');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleRemoveItem = (section: keyof SafetyPlanData, index: number) => {
    setPlan(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleResetToDefault = () => {
    if (window.confirm('Güvenlik planı şablonunu varsayılan Stanley-Brown önerilerine sıfırlamak istiyor musunuz?')) {
      setPlan(DEFAULT_PLAN);
    }
  };

  const handleCopyFormattedPlan = () => {
    const text = `📋 STANLEY-BROWN KİŞİSEL KRİZ & ACİL GÜVENLİK EYLEM PLANI
(Kanıta Dayalı Hayat Kurtaran Acil Baş Etme Rehberi)

1. BENİM ERKEN UYARI İŞARETLERİM:
${plan.warningSigns.map((w, i) => `  ${i + 1}. ${w}`).join('\n')}

2. KENDİ BAŞIMA YAPABİLECEĞİM İÇSEL BAŞ ETME & GROUNDING:
${plan.internalCoping.map((c, i) => `  ${i + 1}. ${c}`).join('\n')}

3. ZİHNİMİ DAĞITACAK GÜVENLİ ORTAMLAR & SOSYAL KİŞİLER:
${plan.distractionPlacesPeople.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}

4. ZOR DURUMDA DESTEK İSTEYEBİLECEĞİM GÜVENDİĞİM YAKINLARIM:
${plan.supportPeople.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}

5. ARAYABİLECEĞİM 7/24 PROFESYONEL ACİL HATLAR:
${plan.professionalsAgencies.map((p, i) => `  ${i + 1}. ${p}`).join('\n')}

6. ORTAMI GÜVENLİ HALE GETİRME ADIMLARI:
${plan.safeEnvironment.map((se, i) => `  ${i + 1}. ${se}`).join('\n')}

*Hatırlatma: Kriz hissi geçicidir. Yalnız değilsiniz; acil durumlarda 112'yi arayabilirsiniz.`;

    navigator.clipboard.writeText(text);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const stepsMeta = [
    { id: 'warningSigns', label: '1. Erken Uyarı İşaretleri', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { id: 'internalCoping', label: '2. İçsel Baş Etme Yolları', icon: <Brain className="w-3.5 h-3.5" /> },
    { id: 'distractionPlacesPeople', label: '3. Güvenli Ortamlar', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'supportPeople', label: '4. Destek Yakınlarım', icon: <UserCheck className="w-3.5 h-3.5" /> },
    { id: 'professionalsAgencies', label: '5. Profesyonel Acil Hatlar', icon: <PhoneCall className="w-3.5 h-3.5" /> },
    { id: 'safeEnvironment', label: '6. Çevre Güvenliği', icon: <ShieldAlert className="w-3.5 h-3.5" /> }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Viral Hayat Kurtarıcı Araç #5 • Stanley-Brown Güvenlik & Kriz Eylem Planı</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1">
              Kişisel Acil Güvenlik & Baş Etme Planı Oluşturucu
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl leading-relaxed">
              Dünya Sağlık Örgütü ve APA tarafından altın standart kabul edilen Stanley-Brown Kriz Müdahale Planı. 
              Zorlandığınız anlarda ne yapacağınızı önceden adım adım belirleyin; cihazınıza kaydedin, yazdırın veya cebinizde taşıyın.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={handleCopyFormattedPlan}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-white hover:bg-black text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              {copiedPlan ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPlan ? 'Kopyalandı!' : 'Planı Kopyala'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır</span>
            </button>

            <button
              type="button"
              onClick={handleResetToDefault}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-md cursor-pointer"
              title="Varsayılana Sıfırla"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Step Navigation Tabs (Compact & Wrapped) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-100">
          {stepsMeta.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap select-none shadow-2xs ${
                activeStep === idx
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-50 hover:bg-neutral-900 text-neutral-700 hover:text-white border-neutral-200 hover:border-neutral-900'
              }`}
            >
              {step.icon}
              <span>{step.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Step Content Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Step Editor (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* STEP 1: Warning Signs */}
          {activeStep === 0 && (
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 font-mono uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Adım 1: Benim Erken Uyarı İşaretlerim</span>
              </div>
              <p className="text-xs text-neutral-600">
                Kriz anı aniden patlamaz; önceden bedeninizde ve düşüncelerinizde uyarı sinyalleri verir. Sizi zorlayan tipik düşünce ve hisler nelerdir?
              </p>

              <div className="space-y-2">
                {plan.warningSigns.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs">
                    <span className="text-neutral-800">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('warningSigns', idx)}
                      className="text-neutral-400 hover:text-rose-600 font-bold ml-2 cursor-pointer text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Input */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newWarning}
                  onChange={(e) => setNewWarning(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('warningSigns', newWarning, setNewWarning)}
                  placeholder="Yeni bir erken uyarı sinyali ekleyin..."
                  className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem('warningSigns', newWarning, setNewWarning)}
                  className="px-3 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black cursor-pointer"
                >
                  Ekle
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Internal Coping */}
          {activeStep === 1 && (
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-mono uppercase">
                <Brain className="w-4 h-4 text-neutral-800" />
                <span>Adım 2: Kendi Başıma Yapabileceğim Baş Etme & Grounding</span>
              </div>
              <p className="text-xs text-neutral-600">
                Kimseye ihtiyaç duymadan, kendi başınıza yapabileceğiniz ve bedeninizi yatıştıran somut fiziksel/zihinsel egzersizler.
              </p>

              <div className="space-y-2">
                {plan.internalCoping.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs">
                    <span className="text-neutral-800">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('internalCoping', idx)}
                      className="text-neutral-400 hover:text-rose-600 font-bold ml-2 cursor-pointer text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newCoping}
                  onChange={(e) => setNewCoping(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('internalCoping', newCoping, setNewCoping)}
                  placeholder="Yeni bir sakinleşme/grounding yolu ekleyin..."
                  className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem('internalCoping', newCoping, setNewCoping)}
                  className="px-3 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black cursor-pointer"
                >
                  Ekle
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Distraction Places & People */}
          {activeStep === 2 && (
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-mono uppercase">
                <Home className="w-4 h-4 text-neutral-800" />
                <span>Adım 3: Zihnimi Dağıtacak Güvenli Ortamlar & Sosyal Alanlar</span>
              </div>
              <p className="text-xs text-neutral-600">
                Krizi konuşmak zorunda olmadan, sadece varlığıyla zihninizi dağıtacak mekanlar (park, kütüphane, kafe) ve kişiler.
              </p>

              <div className="space-y-2">
                {plan.distractionPlacesPeople.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs">
                    <span className="text-neutral-800">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('distractionPlacesPeople', idx)}
                      className="text-neutral-400 hover:text-rose-600 font-bold ml-2 cursor-pointer text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newDistraction}
                  onChange={(e) => setNewDistraction(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('distractionPlacesPeople', newDistraction, setNewDistraction)}
                  placeholder="Gidebileceğiniz bir yer veya arayabileceğiniz birini ekleyin..."
                  className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem('distractionPlacesPeople', newDistraction, setNewDistraction)}
                  className="px-3 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black cursor-pointer"
                >
                  Ekle
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Support People */}
          {activeStep === 3 && (
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-mono uppercase">
                <UserCheck className="w-4 h-4 text-neutral-800" />
                <span>Adım 4: Açıkça Yardım İsteyebileceğim Güvendiğim Yakınlarım</span>
              </div>
              <p className="text-xs text-neutral-600">
                Kriz anında "Şu an çok zorlanıyorum, desteğe ihtiyacım var" diyebileceğiniz ve sizi yargılamadan dinleyecek kişiler ve numaraları.
              </p>

              <div className="space-y-2">
                {plan.supportPeople.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs">
                    <span className="text-neutral-800">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('supportPeople', idx)}
                      className="text-neutral-400 hover:text-rose-600 font-bold ml-2 cursor-pointer text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newSupport}
                  onChange={(e) => setNewSupport(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('supportPeople', newSupport, setNewSupport)}
                  placeholder="İsim ve telefon numarası ekleyin (Örn: Abim - 0532...)..."
                  className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem('supportPeople', newSupport, setNewSupport)}
                  className="px-3 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black cursor-pointer"
                >
                  Ekle
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Professional Agencies */}
          {activeStep === 4 && (
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-700 font-mono uppercase">
                <PhoneCall className="w-4 h-4 text-rose-600" />
                <span>Adım 5: 7/24 Arayabileceğim Profesyonel Acil Destek Hatları</span>
              </div>
              <p className="text-xs text-neutral-600">
                Türkiye genelinde ve bulunduğunuz ildeki resmi, ücretsiz acil yardım hatları ve hekiminizin irtibatı.
              </p>

              <div className="space-y-2">
                {plan.professionalsAgencies.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs">
                    <span className="text-neutral-800">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('professionalsAgencies', idx)}
                      className="text-neutral-400 hover:text-rose-600 font-bold ml-2 cursor-pointer text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newProfessional}
                  onChange={(e) => setNewProfessional(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('professionalsAgencies', newProfessional, setNewProfessional)}
                  placeholder="Kurum adı veya klinik telefon ekleyin..."
                  className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem('professionalsAgencies', newProfessional, setNewProfessional)}
                  className="px-3 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black cursor-pointer"
                >
                  Ekle
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Safe Environment */}
          {activeStep === 5 && (
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-mono uppercase">
                <ShieldAlert className="w-4 h-4 text-neutral-800" />
                <span>Adım 6: Ortamı ve Çevremi Güvenli Hale Getirme</span>
              </div>
              <p className="text-xs text-neutral-600">
                Kriz dürtüsü yükseldiğinde kendinize zarar verme olasılığını sıfıra indirmek için fiziksel ortamı emniyete alma adımları.
              </p>

              <div className="space-y-2">
                {plan.safeEnvironment.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs">
                    <span className="text-neutral-800">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('safeEnvironment', idx)}
                      className="text-neutral-400 hover:text-rose-600 font-bold ml-2 cursor-pointer text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newSafeEnv}
                  onChange={(e) => setNewSafeEnv(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem('safeEnvironment', newSafeEnv, setNewSafeEnv)}
                  placeholder="Güvenlik adımı ekleyin (Örn: İlaçları kilit altına almak)..."
                  className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem('safeEnvironment', newSafeEnv, setNewSafeEnv)}
                  className="px-3 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black cursor-pointer"
                >
                  Ekle
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Formatted Wallet / Pocket Card Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-neutral-900 text-white p-5 rounded-xl shadow-md space-y-4 print:bg-white print:text-black">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-xs uppercase font-mono tracking-wider">
                  Cepte Taşıma Kartı Önizleme
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono">
                Gizli & Yerel Depolama
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] font-bold font-mono text-amber-400 uppercase block">
                  1. Uyarı Sinyallerim:
                </span>
                <p className="text-neutral-300 line-clamp-2 mt-0.5">
                  {plan.warningSigns.join(' • ') || 'Belirtilmedi'}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold font-mono text-emerald-400 uppercase block">
                  2. Kendi Başıma Baş Etme:
                </span>
                <p className="text-neutral-300 line-clamp-2 mt-0.5">
                  {plan.internalCoping.join(' • ') || 'Belirtilmedi'}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold font-mono text-blue-400 uppercase block">
                  3. Güvenli Yerler:
                </span>
                <p className="text-neutral-300 line-clamp-2 mt-0.5">
                  {plan.distractionPlacesPeople.join(' • ') || 'Belirtilmedi'}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold font-mono text-purple-400 uppercase block">
                  4. Destek Yakınlarım:
                </span>
                <p className="text-neutral-300 line-clamp-2 mt-0.5">
                  {plan.supportPeople.join(' • ') || 'Belirtilmedi'}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold font-mono text-rose-400 uppercase block">
                  5. 7/24 Acil Hatlar:
                </span>
                <p className="text-neutral-300 font-bold mt-0.5">
                  112 Acil • 182 MHRS • Yeşilay 115 YEDAM
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold font-mono text-neutral-400 uppercase block">
                  6. Ortam Güvenliği:
                </span>
                <p className="text-neutral-300 line-clamp-2 mt-0.5">
                  {plan.safeEnvironment.join(' • ') || 'Belirtilmedi'}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[10px] text-neutral-400 leading-tight">
              💡 Bu plan tarayıcınızın hafızasında şifrelenmeden sadece sizin cihazınızda saklanır. 
              İnternet bağlantısı olmasa dahi her zaman erişebilirsiniz.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
