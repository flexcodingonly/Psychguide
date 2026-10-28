import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Wind, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Copy, 
  Check, 
  RotateCcw, 
  Sparkles,
  AlertTriangle,
  Eye,
  Hand,
  Volume2,
  Smile,
  Compass,
  ArrowRight,
  Flame,
  Info
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const PanicRescueView: React.FC = () => {
  // Breathing Technique: '4-7-8' | 'box' | 'sigh'
  const [breathingMode, setBreathingMode] = useState<'4-7-8' | 'box' | 'sigh'>('4-7-8');
  const [isBreathingActive, setIsBreathingActive] = useState<boolean>(true);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'hold2'>('inhale');
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState<number>(4);
  const [completedCycles, setCompletedCycles] = useState<number>(0);

  // 5-4-3-2-1 Grounding state
  const [groundingChecks, setGroundingChecks] = useState<Record<string, boolean>>({});
  const [copiedEmergencyMsg, setCopiedEmergencyMsg] = useState<boolean>(false);

  // Breathing loop timer
  useEffect(() => {
    if (!isBreathingActive) return;

    const timer = setInterval(() => {
      setPhaseSecondsLeft(prev => {
        if (prev > 1) return prev - 1;

        // Transition phases based on technique
        if (breathingMode === '4-7-8') {
          if (breathPhase === 'inhale') {
            setBreathPhase('hold');
            return 7;
          } else if (breathPhase === 'hold') {
            setBreathPhase('exhale');
            return 8;
          } else {
            setBreathPhase('inhale');
            setCompletedCycles(c => c + 1);
            return 4;
          }
        } else if (breathingMode === 'box') {
          if (breathPhase === 'inhale') {
            setBreathPhase('hold');
            return 4;
          } else if (breathPhase === 'hold') {
            setBreathPhase('exhale');
            return 4;
          } else if (breathPhase === 'exhale') {
            setBreathPhase('hold2');
            return 4;
          } else {
            setBreathPhase('inhale');
            setCompletedCycles(c => c + 1);
            return 4;
          }
        } else {
          // Physiological sigh: Inhale 3s -> Inhale top-up 1s -> Exhale 6s
          if (breathPhase === 'inhale') {
            setBreathPhase('hold');
            return 1;
          } else if (breathPhase === 'hold') {
            setBreathPhase('exhale');
            return 6;
          } else {
            setBreathPhase('inhale');
            setCompletedCycles(c => c + 1);
            return 3;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isBreathingActive, breathPhase, breathingMode]);

  const handleToggleCheck = (key: string) => {
    setGroundingChecks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleCopySupportMessage = async () => {
    const text = 'Merhaba, şu anda yoğun bir panik/anksiyete atağı geçiriyorum. Tıbbi olarak güvendeyim ve durumun geçici olduğunu biliyorum; ancak sakinleşene kadar sesini duymak veya yanımda olduğunu bilmek bana iyi gelir. Lütfen beni arayabilir misin?';
    await copyToClipboard(text);
    setCopiedEmergencyMsg(true);
    setTimeout(() => setCopiedEmergencyMsg(false), 2500);
  };

  const getPhaseInstruction = () => {
    if (breathingMode === 'sigh') {
      if (breathPhase === 'inhale') return { label: 'Derin Nefes Al (Burnundan)', color: 'text-neutral-900', scale: 'scale-125' };
      if (breathPhase === 'hold') return { label: 'Üzerine Bir Yudum Daha Çek!', color: 'text-neutral-900', scale: 'scale-130' };
      return { label: 'Ağzından Yavaşça Bırak...', color: 'text-neutral-700', scale: 'scale-90' };
    }
    if (breathPhase === 'inhale') return { label: 'Burnundan Derin Nefes Al', color: 'text-neutral-900', scale: 'scale-125' };
    if (breathPhase === 'hold' || breathPhase === 'hold2') return { label: 'Nefesini Rahatça Tut', color: 'text-neutral-800', scale: 'scale-125' };
    return { label: 'Dudaklarını Büzerek Yavaşça Ver', color: 'text-neutral-600', scale: 'scale-90' };
  };

  const phaseInfo = getPhaseInstruction();

  return (
    <div className="space-y-6">
      {/* Top Calming Message */}
      <div className="p-5 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white rounded-xl shadow-md border border-neutral-700 text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase rounded-full text-white">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Şu Anda Tamamen Güvendesiniz</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
          Acil Panik & Kriz Rahatlama Alanı (Panic SOS)
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Yaşadığınız çarpıntı, nefes darlığı ve dehşet hissi beyninizin amigdala merkezinin verdiği yanlış bir alarmdır. 
          Bedeniniz tehlikede değildir. Kalp krizi geçirmeniz veya delirme ihtimaliniz biyolojik olarak sıfırdır.
        </p>
      </div>

      {/* 1. Visual Breathing Pacer Studio */}
      <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-xs flex flex-col items-center text-center space-y-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => { setBreathingMode('4-7-8'); setBreathPhase('inhale'); setPhaseSecondsLeft(4); }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              breathingMode === '4-7-8'
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            4-7-8 Rahatlama Solunumu (Önerilen)
          </button>
          <button
            type="button"
            onClick={() => { setBreathingMode('box'); setBreathPhase('inhale'); setPhaseSecondsLeft(4); }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              breathingMode === 'box'
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            Kutu Solunumu (4-4-4-4 Box Breathing)
          </button>
          <button
            type="button"
            onClick={() => { setBreathingMode('sigh'); setBreathPhase('inhale'); setPhaseSecondsLeft(3); }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              breathingMode === 'sigh'
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            Fizyolojik İçe Çekiş (Hızlı Sıfırlama)
          </button>
        </div>

        {/* Breathing Circle Visualization */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center my-4 select-none">
          {/* Animated pulse halo */}
          <div className={`absolute inset-0 rounded-full border-2 border-neutral-300 transition-all duration-1000 ease-in-out ${phaseInfo.scale} ${
            breathPhase === 'inhale' ? 'bg-neutral-100/80 border-neutral-900' : breathPhase === 'exhale' ? 'bg-neutral-50 border-neutral-400' : 'bg-neutral-200/50 border-neutral-800'
          }`} />

          {/* Inner ring */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
            <span className="text-4xl sm:text-5xl font-black font-mono text-neutral-900">
              {phaseSecondsLeft}
            </span>
            <span className="text-xs font-bold tracking-tight px-3 py-1 bg-white border border-neutral-300 text-neutral-800 rounded-full shadow-xs">
              {phaseInfo.label}
            </span>
            <span className="text-[10px] font-mono text-neutral-500 pt-1">
              Tamamlanan Döngü: {completedCycles}
            </span>
          </div>
        </div>

        {/* Play/Pause Control */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsBreathingActive(prev => !prev)}
            className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-all cursor-pointer shadow-xs"
          >
            {isBreathingActive ? 'Nefes Pacer\'ını Duraklat' : 'Solunumu Başlat'}
          </button>
          <button
            type="button"
            onClick={() => { setCompletedCycles(0); setPhaseSecondsLeft(4); setBreathPhase('inhale'); }}
            className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium rounded-lg transition-all cursor-pointer border border-neutral-200"
          >
            Sıfırla
          </button>
        </div>
      </div>

      {/* 2. 5-4-3-2-1 Sensory Grounding Technique */}
      <div className="p-5 bg-white border border-neutral-200 rounded-xl space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-neutral-800" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900 font-display">
                5-4-3-2-1 Duyusal Topraklama (Grounding) Listesi
              </h3>
              <p className="text-xs text-neutral-500">
                Zihninizi içsel panik düşüncelerinden çıkarıp şu anki fiziksel odaya sabitlemek için sırayla tıklayın:
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-neutral-700 bg-neutral-100 px-2 py-1 rounded">
            {Object.values(groundingChecks).filter(Boolean).length} / 5 Tamamlandı
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { key: 'g5', num: '5', icon: <Eye className="w-4 h-4 text-neutral-800" />, label: 'GÖRDÜĞÜN 5 ŞEY', desc: 'Odadaki kapı kolu, lamba, ayakkabı, saat, pencere gibi 5 nesneyi gözünle seç.' },
            { key: 'g4', num: '4', icon: <Hand className="w-4 h-4 text-neutral-800" />, label: 'DOKUNDUĞUN 4 ŞEY', desc: 'Kot kumaşı, masanın soğukluğu, telefonun kenarı, saç tellerin gibi 4 yüzeye dokun.' },
            { key: 'g3', num: '3', icon: <Volume2 className="w-4 h-4 text-neutral-800" />, label: 'DUYDUĞUN 3 SES', desc: 'Kendi nefes sesin, dışarıdan gelen trafik gürültüsü, buzdolabı uğultusu gibi 3 sesi dinle.' },
            { key: 'g2', num: '2', icon: <Wind className="w-4 h-4 text-neutral-800" />, label: 'KOKLADIĞIN 2 KOKU', desc: 'Ceketinin kokusu, odadaki hava veya kahve kokusunu burnunla derin çek.' },
            { key: 'g1', num: '1', icon: <Smile className="w-4 h-4 text-neutral-800" />, label: 'TATTIĞIN 1 TAT', desc: 'Ağzındaki nane tadı, suyun serinliği veya dilini damağına bastırarak o hissi fark et.' }
          ].map(item => {
            const isDone = groundingChecks[item.key];
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleToggleCheck(item.key)}
                className={`p-3.5 border rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 select-none ${
                  isDone
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    isDone ? 'bg-white text-black' : 'bg-neutral-200 text-neutral-900'
                  }`}>
                    {item.num}
                  </div>
                  {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : item.icon}
                </div>
                <div>
                  <span className={`text-[11px] font-bold block ${isDone ? 'text-white' : 'text-neutral-900'}`}>
                    {item.label}
                  </span>
                  <p className={`text-[10px] leading-tight mt-1 line-clamp-3 ${isDone ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Neurobiological Reassurance Cards & SOS Action */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Reassurance facts */}
        <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-2.5 shadow-xs">
          <h4 className="text-xs font-bold text-neutral-900 uppercase font-mono flex items-center gap-2">
            <Info className="w-4 h-4 text-neutral-800" />
            <span>Tıbbi Nörobiyolojik Gerçekler</span>
          </h4>
          <ul className="text-xs space-y-2 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
              <span><strong>Adrenalin Eğrisi:</strong> Panik atak anında salgılanan adrenalin kanda ortalama 10 dakika içinde metabolize edilir ve azalır. Atak sonsuza kadar sürmez.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
              <span><strong>Kalp Krizi Değildir:</strong> Kalp hızının dakikada 120-140 olması tehlikeli bir aritmi değil, spor yaparken olduğu gibi kalbin sağlıklı bir stres yanıtıdır.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
              <span><strong>Bayılmayacaksınız:</strong> Panik atak esnasında tansiyon düşmez, aksine hafifçe yükselir. Bayılmak için tansiyonun ani düşmesi gerekir; bu nedenle bayılma riski yoktur.</span>
            </li>
          </ul>
        </div>

        {/* SOS Action & Support Messenger */}
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-3 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase font-mono flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-neutral-800" />
              <span>Kriz Destek & Yakınına Haber Ver</span>
            </h4>
            <p className="text-xs text-neutral-600 mt-1">
              Bir yakınınızdan destek almak isterseniz, durumu açıklayan sakinleştirici mesajı tek tıkla kopyalayıp WhatsApp veya SMS ile gönderebilirsiniz:
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySupportMessage}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-all cursor-pointer shadow-xs"
          >
            {copiedEmergencyMsg ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedEmergencyMsg ? 'Mesaj Kopyalandı!' : 'Yakınıma Göndermek İçin Destek Mesajını Kopyala'}</span>
          </button>

          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-700">
            <span>Acil Yardım: <strong className="text-neutral-900">112</strong></span>
            <span>Randevu: <strong className="text-neutral-900">182 (MHRS)</strong></span>
            <span>Bağımlılık: <strong className="text-neutral-900">115 (YEDAM)</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
