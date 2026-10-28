import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Wind,
  Eye,
  Hand,
  Volume2,
  Droplets,
  Heart,
  RotateCcw,
  Play,
  Pause,
  CheckCircle2,
  Smile,
  Shield,
  Activity,
  ChevronRight,
  X,
  Compass
} from 'lucide-react';

export const GroundingTechniques: React.FC = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>('54321');

  // State for 5-4-3-2-1
  const [checked54321, setChecked54321] = useState<Record<string, boolean>>({});

  // State for Box Breathing
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [breathTimer, setBreathTimer] = useState<number>(4);
  const [isBreathingActive, setIsBreathingActive] = useState<boolean>(false);
  const [cyclesCompleted, setCyclesCompleted] = useState<number>(0);

  // State for Butterfly Hug EMDR
  const [tapSide, setTapSide] = useState<'left' | 'right'>('left');
  const [isTappingActive, setIsTappingActive] = useState<boolean>(false);

  // Timer loop for box breathing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev <= 1) {
            setBreathPhase((currPhase) => {
              if (currPhase === 'inhale') return 'hold1';
              if (currPhase === 'hold1') return 'exhale';
              if (currPhase === 'exhale') return 'hold2';
              setCyclesCompleted((c) => c + 1);
              return 'inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreathingActive]);

  // Timer loop for Butterfly Hug
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTappingActive) {
      interval = setInterval(() => {
        setTapSide((prev) => (prev === 'left' ? 'right' : 'left'));
      }, 1100);
    }
    return () => clearInterval(interval);
  }, [isTappingActive]);

  const techniques = [
    {
      id: '54321',
      title: '5-4-3-2-1 Duyusal Çıpalama',
      subtitle: 'Düşünce fırtınasından çıkıp 5 duyuyla "şimdiye" dönün.',
      duration: '3 Dakika',
      badge: 'Duyusal Çapa',
      icon: <Eye className="w-4 h-4 text-neutral-800" />,
      color: 'border-neutral-900',
      evidence: 'APA & BDT: Aşırı uyarılmış amigdalayı duyusal korteks odaklanmasıyla yatıştırır.'
    },
    {
      id: 'box_breath',
      title: 'Kutu Nefesi (4-4-4-4 Pacing)',
      subtitle: 'Vagus sinirini uyararak kalp hızını ve panik atağı sakinleştirin.',
      duration: '2-4 Dakika',
      badge: 'Vagus Freni',
      icon: <Wind className="w-4 h-4 text-neutral-800" />,
      color: 'border-neutral-900',
      evidence: 'Navy SEAL & APA Protokolü: Kalp hızı değişkenliğini (HRV) anında artırır.'
    },
    {
      id: 'butterfly',
      title: 'Kelebek Kucaklaması (EMDR)',
      subtitle: 'Bilateral ritmik dokunuşla beynin iki lobunu dengeleyin.',
      duration: '2 Dakika',
      badge: 'Bilateral Stimülasyon',
      icon: <Heart className="w-4 h-4 text-neutral-800" />,
      color: 'border-neutral-900',
      evidence: 'EMDR Vakfı: Akut travmatik tetiklenme ve yoğun kaygıda merkezi sinir sistemini yatıştırır.'
    },
    {
      id: 'dive_reflex',
      title: 'Dalgıç Refleksi (Soğuk Su / TIPP)',
      subtitle: 'Yüze soğuk su uygulamasıyla biyolojik acil freni çekin.',
      duration: '30 Saniye',
      badge: 'Fizyolojik Şok',
      icon: <Droplets className="w-4 h-4 text-neutral-800" />,
      color: 'border-neutral-900',
      evidence: 'DBT (Diyalektik Davranış Terapisi): Kalp hızını dakikada 10-25 atım anında düşürür.'
    },
    {
      id: 'pmr',
      title: 'Jacobson Kas Gevşetme (PMR)',
      subtitle: 'Kasları 5 sn kasıp 10 sn serbest bırakarak beden alarmını kapatın.',
      duration: '4 Dakika',
      badge: 'Somatik Gevşeme',
      icon: <Activity className="w-4 h-4 text-neutral-800" />,
      color: 'border-neutral-900',
      evidence: 'TPD & Kılavuzlar: Sempatik tonusu düşürür, anksiyeteye bağlı baş ve boyun ağrılarını hafifletir.'
    },
    {
      id: 'cognitive_anchor',
      title: '"Şimdi ve Buradayım" Bilişsel Çapa',
      subtitle: 'Zihindeki felaket senaryolarına karşı 3 somut gerçeklik kuralı.',
      duration: '1 Dakika',
      badge: 'Bilişsel Çapa',
      icon: <Shield className="w-4 h-4 text-neutral-800" />,
      color: 'border-neutral-900',
      evidence: 'Bilişsel Terapi: Panik anında zihnin tehlike algısını nesnel kanıtla test eder.'
    }
  ];

  const steps54321 = [
    { id: 's5', num: 5, label: '5 Şey GÖR', desc: 'Odanızda veya çevrenizde bulunan 5 farklı nesneye bakın. Renklerine, gölgelerine veya geometrilerine odaklanın.' },
    { id: 's4', num: 4, label: '4 Şeye DOKUN', desc: 'Teninizin temas ettiği 4 dokuyu hissedin: Sandalyenin sertliği, pantolonunuzun kumaşı, ayağınızın yere basışı, elinizdeki masanın serinliği.' },
    { id: 's3', num: 3, label: '3 Ses DUY', desc: 'Çevrenizdeki ses katmanlarına kulak verin: Uzaktaki bir uğultu, saatin tıkırtısı veya kendi nefes alışverişinizin sesi.' },
    { id: 's2', num: 2, label: '2 Koku AL', desc: 'Burnunuza gelen 2 farklı kokuyu fark edin: Kıyafetinizdeki deterjan kokusu, kahve kokusu veya el sabunu.' },
    { id: 's1', num: 1, label: '1 Tat FARK ET', desc: 'Ağzınızdaki tadı veya derin bir nefesin boğazınızda bıraktığı serin temiz havayı hissedin.' }
  ];

  const count54321Done = Object.values(checked54321).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-5 bg-white border border-neutral-200 rounded-xl space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-md uppercase tracking-wider">
            Akut Regülasyon Araçları
          </span>
          <span className="text-xs text-neutral-500 font-mono">
            Psikolojik Dayanıklılık & Bedensel Çapalar
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
          Kaygı, Panik ve Stres Anında Grounding (Topraklanma) Teknikleri
        </h2>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
          Yoğun endişe, panik atak veya zihinsel kriz anlarında zihin geçmişin pişmanlığı ya da geleceğin felaket senaryolarına kilitlenir. <strong>Grounding teknikleri</strong>, sinir sistemini duyular ve nefes aracılığıyla "şimdi ve buradaki" güvenli alana geri bağlayan bilimsel araçlardır. Aşağıdaki kartlara tıklayarak interaktif adımları başlatabilirsiniz.
        </p>
      </div>

      {/* Clickable Small Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {techniques.map((tech) => {
          const isSelected = selectedTechnique === tech.id;
          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setSelectedTechnique(tech.id)}
              className={`p-3 border rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between space-y-2.5 group relative ${
                isSelected
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-2 ring-neutral-900 ring-offset-2'
                  : 'bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-800 hover:border-neutral-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-800'}`}>
                    {tech.icon}
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                    isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {tech.duration}
                  </span>
                </div>
                <h4 className={`text-xs font-bold font-display leading-tight ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                  {tech.title}
                </h4>
              </div>

              <div className="pt-2 border-t border-neutral-100/30 flex items-center justify-between text-[10px] font-mono">
                <span className={isSelected ? 'text-neutral-300' : 'text-neutral-500'}>
                  {tech.badge}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-white translate-x-0.5' : 'text-neutral-400 group-hover:translate-x-0.5'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Box with Soft Transitions */}
      {selectedTechnique && (
        <div className="p-5 sm:p-7 bg-white border border-neutral-200 rounded-xl space-y-5 shadow-sm transition-all duration-300">
          {/* Header of Active Tool */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-800 font-bold uppercase rounded-md">
                  Aktif Uygulama
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {techniques.find(t => t.id === selectedTechnique)?.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mt-1">
                {techniques.find(t => t.id === selectedTechnique)?.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                {techniques.find(t => t.id === selectedTechnique)?.subtitle}
              </p>
            </div>

            <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs text-neutral-700 max-w-sm">
              <span className="font-mono text-[10px] font-bold text-neutral-900 uppercase block mb-0.5">🔬 Bilimsel Kanıt:</span>
              <p className="text-[11px] leading-relaxed text-neutral-600">
                {techniques.find(t => t.id === selectedTechnique)?.evidence}
              </p>
            </div>
          </div>

          {/* 1. 5-4-3-2-1 Grounding View */}
          {selectedTechnique === '54321' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-600">
                <span>Tamamlanan Duyusal Çapalar: <strong>{count54321Done} / 5</strong></span>
                <button
                  type="button"
                  onClick={() => setChecked54321({})}
                  className="flex items-center gap-1 text-neutral-500 hover:text-black cursor-pointer font-bold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Sıfırla</span>
                </button>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
                <div
                  className="h-full bg-neutral-900 transition-all duration-500 rounded-full"
                  style={{ width: `${(count54321Done / 5) * 100}%` }}
                />
              </div>

              {/* Checklist items */}
              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {steps54321.map((st) => {
                  const isDone = !!checked54321[st.id];
                  return (
                    <div
                      key={st.id}
                      onClick={() => setChecked54321(prev => ({ ...prev, [st.id]: !prev[st.id] }))}
                      className={`p-3.5 border rounded-xl transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                        isDone
                          ? 'bg-neutral-50 border-neutral-300'
                          : 'bg-white border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50/50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isDone ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700 border border-neutral-300'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : st.num}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className={`text-xs sm:text-sm font-bold font-display ${isDone ? 'line-through text-neutral-500' : 'text-neutral-900'}`}>
                            {st.label}
                          </h4>
                          {isDone && (
                            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                              Tamamlandı
                            </span>
                          )}
                        </div>
                        <p className={`text-xs mt-0.5 leading-relaxed ${isDone ? 'text-neutral-400' : 'text-neutral-600'}`}>
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {count54321Done === 5 && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-950 text-xs flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="font-bold block">Tebrikler! 5 Duyusal Çapa Tamamlandı.</strong>
                    <span>Bedeniniz çevreye yeniden bağlandı. Şimdi burnunuzdan derin bir nefes alıp omuzlarınızı gevşetin.</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Box Breathing View */}
          {selectedTechnique === 'box_breath' && (
            <div className="flex flex-col items-center justify-center py-6 space-y-6">
              {/* Visual Breathing Circle */}
              <div className="relative flex items-center justify-center w-52 h-52">
                {/* Outer guide ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-200" />
                
                {/* Animated breathing circle */}
                <div
                  className={`rounded-full flex flex-col items-center justify-center transition-all duration-1000 select-none shadow-sm ${
                    breathPhase === 'inhale'
                      ? 'w-48 h-48 bg-neutral-900 text-white scale-105'
                      : breathPhase === 'hold1'
                      ? 'w-48 h-48 bg-neutral-800 text-white scale-105'
                      : breathPhase === 'exhale'
                      ? 'w-28 h-28 bg-neutral-700 text-white scale-90'
                      : 'w-28 h-28 bg-neutral-600 text-white scale-90'
                  }`}
                >
                  <span className="text-3xl font-black font-mono">
                    {breathTimer}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider font-display mt-0.5 text-center px-2">
                    {breathPhase === 'inhale'
                      ? 'Nefes Al'
                      : breathPhase === 'hold1'
                      ? 'İçinde Tut'
                      : breathPhase === 'exhale'
                      ? 'Yavaşça Ver'
                      : 'Boşlukta Kal'}
                  </span>
                </div>
              </div>

              {/* Status and controller */}
              <div className="text-center space-y-2">
                <div className="text-xs font-mono text-neutral-600">
                  Tamamlanan Döngü: <strong className="text-neutral-900">{cyclesCompleted}</strong>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-black text-white font-bold text-xs rounded-lg transition-all cursor-pointer shadow-xs"
                  >
                    {isBreathingActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isBreathingActive ? 'Durdur' : 'Nefes Seansını Başlat'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsBreathingActive(false);
                      setBreathTimer(4);
                      setBreathPhase('inhale');
                      setCyclesCompleted(0);
                    }}
                    className="p-2.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 rounded-lg cursor-pointer transition-colors"
                    title="Sıfırla"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="max-w-md text-center text-xs text-neutral-600 leading-relaxed font-sans">
                💡 <strong>İpucu:</strong> Burnunuzdan karnınızı şişirerek 4 saniyede nefes alın, 4 saniye tutun, ağzınızdan pipetten üfler gibi 4 saniyede yavaşça boşaltın ve 4 saniye bekleyin. 4 döngüden sonra otonom sinir sistemi gevşeme moduna geçer.
              </div>
            </div>
          )}

          {/* 3. Butterfly Hug (EMDR Bilateral Tapping) */}
          {selectedTechnique === 'butterfly' && (
            <div className="py-4 space-y-6 max-w-lg mx-auto">
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2 text-xs text-neutral-700">
                <strong className="text-neutral-900 font-bold block text-sm">Nasıl Uygulanır?</strong>
                <p>1. Kollarınızı göğsünüzün üzerinde çaprazlayın; elleriniz omuzlarınızın hemen altına veya köprücük kemiklerinize denk gelsin.</p>
                <p>2. Bir kelebeğin kanat çırpması gibi; önce sol elinizle, sonra sağ elinizle sırayla hafifçe ritmik vuruşlar (pat-pat) yapın.</p>
                <p>3. Gözlerinizi kapatın veya sabit bir noktaya bakın, derin ve sakin nefesler alın.</p>
              </div>

              {/* Interactive Left/Right rhythm visualizer */}
              <div className="p-6 bg-white border border-neutral-200 rounded-xl flex items-center justify-around">
                <div
                  className={`w-28 h-28 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border ${
                    isTappingActive && tapSide === 'left'
                      ? 'bg-neutral-900 text-white border-neutral-900 scale-105 shadow-md'
                      : 'bg-neutral-50 text-neutral-500 border-neutral-200'
                  }`}
                >
                  <Hand className="w-6 h-6 mb-1 rotate-12" />
                  <span className="text-xs font-bold font-mono">SOL VURUŞ</span>
                  <span className="text-[10px] font-mono mt-0.5">{isTappingActive && tapSide === 'left' ? '• AKTİF •' : 'Bekle'}</span>
                </div>

                <div className="text-neutral-300 font-black text-xl">⇄</div>

                <div
                  className={`w-28 h-28 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border ${
                    isTappingActive && tapSide === 'right'
                      ? 'bg-neutral-900 text-white border-neutral-900 scale-105 shadow-md'
                      : 'bg-neutral-50 text-neutral-500 border-neutral-200'
                  }`}
                >
                  <Hand className="w-6 h-6 mb-1 -rotate-12 scale-x-[-1]" />
                  <span className="text-xs font-bold font-mono">SAĞ VURUŞ</span>
                  <span className="text-[10px] font-mono mt-0.5">{isTappingActive && tapSide === 'right' ? '• AKTİF •' : 'Bekle'}</span>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsTappingActive(!isTappingActive)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-black text-white font-bold text-xs rounded-lg transition-all cursor-pointer shadow-xs"
                >
                  {isTappingActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTappingActive ? 'Ritim Seansını Durdur' : 'Kelebek Ritim Metronomunu Başlat'}</span>
                </button>
              </div>
            </div>
          )}

          {/* 4. Mammalian Dive Reflex / Cold Shock */}
          {selectedTechnique === 'dive_reflex' && (
            <div className="py-3 space-y-4 max-w-xl mx-auto">
              <div className="p-5 bg-sky-50 border border-sky-200 rounded-xl space-y-2 text-sky-950 text-xs">
                <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                  <Droplets className="w-4 h-4 text-sky-700" />
                  <span>Memeli Dalış Refleksi Nedir?</span>
                </div>
                <p className="leading-relaxed">
                  İnsan bedeni yüzünü soğuk suyla (özellikle göz altları ve elmacık kemikleri) temas ettirdiğinde, evrimsel olarak kalbin hızını ve oksijen tüketimini otomatik düşüren <strong>dalgıç refleksi</strong> tetiklenir. Bu fizyolojik refleks, panik atağın bedensel çarpıntısını saniyeler içinde kesmenin en hızlı yoludur.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { step: '1', title: 'Soğuk Su Hazırlayın', desc: 'Bir kaba soğuk su doldurun veya elinize buz küpleri alın ya da lavaboyu soğuk suyla akıtın.' },
                  { step: '2', title: 'Nefesinizi Tutup Eğilin', desc: 'Derin bir nefes alıp tutun ve yüzünüzü (özellikle burun ve göz çevresi) 10 ila 15 saniye soğuk suya batırın veya soğuk ıslak bir havluyu yüzünüze bastırın.' },
                  { step: '3', title: 'Fizyolojik Değişimi İzleyin', desc: 'Başınızı kaldırdığınızda vagus sinirinin kalbinizi yavaşlattığını ve zihninizdeki panik sisinin durulduğunu fark edeceksiniz.' }
                ].map((s) => (
                  <div key={s.step} className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg flex items-start gap-3 text-xs">
                    <span className="w-6 h-6 rounded-md bg-neutral-900 text-white font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-neutral-900">{s.title}</h4>
                      <p className="text-neutral-600 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PMR (Progressive Muscle Relaxation) */}
          {selectedTechnique === 'pmr' && (
            <div className="py-3 space-y-3 max-w-xl mx-auto text-xs">
              <p className="text-neutral-600 leading-relaxed">
                Beyin ile kaslar iki yönlü iletişim kurar: Zihin gerildiğinde kaslar kasılır; kaslar kasten tamamen gevşetildiğinde ise beyin "tehlike geçti" sinyali alır.
              </p>
              <div className="space-y-2">
                {[
                  { area: '1. Omuzlar & Boyun', action: 'Omuzlarınızı kulaklarınıza doğru var gücünüzle kaldırın, 5 saniye sıkın... Ve aniden tamamen serbest bırakın (10 sn nefes verin).' },
                  { area: '2. Eller & Kollar', action: 'İki elinizi yumruk yapın, kollarınızı gerin, 5 saniye tutun... Ve parmaklarınızı açıp gevşemenin akışını hissedin.' },
                  { area: '3. Yüz & Çene', action: 'Alnınızı kırıştırın, dişlerinizi sıkmadan çenenizi gerin, 5 saniye tutun... Ve yüzünüzün pürüzsüzleştiğini fark edin.' },
                  { area: '4. Karın & Bacaklar', action: 'Karnınızı içeri çekin, ayak parmaklarınızı kıvırın, 5 saniye kasın... Ve tüm gerginliği yere bırakın.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white border border-neutral-200 rounded-lg space-y-1">
                    <h4 className="font-bold text-neutral-900">{item.area}</h4>
                    <p className="text-neutral-600 leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Cognitive Anchor */}
          {selectedTechnique === 'cognitive_anchor' && (
            <div className="py-4 space-y-4 max-w-lg mx-auto text-xs">
              <div className="space-y-3">
                {[
                  { title: '1. "Şu An Güvendeyim"', text: 'Bedenimin yaşadığı bu yoğun duygu bir tehdit değil, beynimin yangın alarmının aşırı hassas çalışmasından ibarettir. Şu anda gerçek bir tehlike yok.' },
                  { title: '2. "Bu His Kalıcı Değil"', text: 'Panik ve yoğun kaygı bir dalga gibidir; doruk noktasına ulaşır ve biyolojik olarak en fazla 10-20 dakika içinde gücünü kaybeder. Dalganın geçmesine izin veriyorum.' },
                  { title: '3. "Kontrolümü Kaybetmiyorum"', text: 'Kalp atışlarım hızlandı çünkü bedenim beni korumaya programlı. Kalbim durmuyor, delirmeyeceğim. Yalnızca sakinleşmem için birkaç dakikaya ihtiyacım var.' }
                ].map((anchor, idx) => (
                  <div key={idx} className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-1">
                    <div className="font-bold text-sm text-neutral-900 font-display">
                      {anchor.title}
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      {anchor.text}
                    </p>
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
