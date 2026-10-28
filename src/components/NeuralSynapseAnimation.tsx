import React, { useState, useEffect } from 'react';
import {
  Brain,
  Sparkles,
  Activity,
  Zap,
  Info,
  Play,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  ArrowDown
} from 'lucide-react';

type SimulationState = 'normal' | 'depression' | 'treatment';
type NeurotransmitterType = 'serotonin' | 'dopamine' | 'gaba' | 'norepinephrine';

export const NeuralSynapseAnimation: React.FC = () => {
  const [simState, setSimState] = useState<SimulationState>('normal');
  const [transmitter, setTransmitter] = useState<NeurotransmitterType>('serotonin');
  const [isFiring, setIsFiring] = useState<boolean>(false);
  const [fireCount, setFireCount] = useState<number>(0);

  const transmitterDetails = {
    serotonin: {
      name: 'Serotonin (5-HT)',
      role: 'Duygudurum, İçsel Huzur, Uyku & Doyum',
      color: '#3b82f6', // blue
      accentBg: 'bg-blue-50 border-blue-200 text-blue-900',
      description: 'Duygusal dengeyi korur, dürtüselliği yatıştırır ve anksiyeteyi frenler. SSRI grubu ilaçlar bu sinapsı hedefler.'
    },
    dopamine: {
      name: 'Dopamin (DA)',
      role: 'Motivasyon, Ödül, Zevk Alma & Odaklanma',
      color: '#f59e0b', // amber
      accentBg: 'bg-amber-50 border-amber-200 text-amber-900',
      description: 'Girişkenlik ve haz sağlar. Eksikliğinde hayattan zevk alamama (anhedoni) ve odaklanma güçlüğü görülür.'
    },
    gaba: {
      name: 'GABA',
      role: 'Merkezi Sinir Sisteminin Doğal Freni & Sakinlik',
      color: '#10b981', // emerald
      accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      description: 'Aşırı uyarılmış sinirleri yatıştırır, kas gerginliğini azaltır ve zihinsel panik dalgalarını dengeler.'
    },
    norepinephrine: {
      name: 'Noradrenalin (NE)',
      role: 'Zihinsel Uyanıklık, Canlılık & Enerji',
      color: '#8b5cf6', // purple
      accentBg: 'bg-purple-50 border-purple-200 text-purple-900',
      description: 'Zihinsel enerjiyi ve dikkati yönetir. Çökkünlükteki halsizlik ve zihinsel yavaşlamanın dengelenmesinde rol oynar.'
    }
  };

  const handleFireImpulse = () => {
    setIsFiring(true);
    setFireCount(prev => prev + 1);
    setTimeout(() => {
      setIsFiring(false);
    }, 1800);
  };

  // Particle configuration based on state
  const particleCount = simState === 'depression' ? 4 : simState === 'treatment' ? 14 : 9;

  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="p-4 sm:p-5 border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-neutral-50/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-md uppercase tracking-wider">
              Nörobiyoloji Laboratuvarı
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              20 Nanometrelik Sinaptik Boşlukta İletim
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display mt-1">
            Nöral Bağlantı: Sinaps & İlaç Etki Mekanizması
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Beyindeki nöronlar birbirine fiziksel olarak dokunmaz. İletişim, sinaptik aralığa salınan biyokimyasal habercilerle gerçekleşir.
          </p>
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={handleFireImpulse}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold font-mono rounded-lg transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
        >
          <Zap className={`w-3.5 h-3.5 ${isFiring ? 'text-amber-400 animate-bounce' : 'text-white'}`} />
          <span>{isFiring ? 'Nöron Ateşlendi...' : 'Nöral Sinyal Gönder'}</span>
        </button>
      </div>

      {/* Control Switchers */}
      <div className="p-4 bg-white border-b border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* State selection */}
        <div>
          <label className="block text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
            1. Biyolojik Durum Modu:
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'normal', label: 'Sağlıklı Denge', icon: <CheckCircle2 className="w-3 h-3 text-emerald-600" /> },
              { id: 'depression', label: 'Depresyon & Stres', icon: <ShieldAlert className="w-3 h-3 text-amber-600" /> },
              { id: 'treatment', label: 'Tedavi (SSRI / İlaç)', icon: <TrendingUp className="w-3 h-3 text-blue-600" /> }
            ].map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setSimState(st.id as SimulationState)}
                className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                  simState === st.id
                    ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
                }`}
              >
                {st.icon}
                <span className="truncate">{st.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Transmitter selection */}
        <div>
          <label className="block text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
            2. Nörotransmitter Seçimi:
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {(['serotonin', 'dopamine', 'gaba', 'norepinephrine'] as NeurotransmitterType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTransmitter(t)}
                className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition-all truncate text-center cursor-pointer ${
                  transmitter === t
                    ? 'bg-neutral-900 text-white border-neutral-900 font-bold shadow-xs'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
                }`}
              >
                {t === 'serotonin' ? 'Serotonin' : t === 'dopamine' ? 'Dopamin' : t === 'gaba' ? 'GABA' : 'Noradrenalin'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Animated Canvas Area */}
      <div className="p-4 sm:p-6 bg-neutral-950 text-white relative overflow-hidden select-none">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Stage layout */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          {/* Pre-Synaptic Terminal (Axon Terminal / Gönderen Nöron) */}
          <div className="p-3.5 bg-neutral-900/90 border border-neutral-800 rounded-xl relative transition-all duration-300">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] font-bold text-neutral-300 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-neutral-400" />
                <span>PRE-SİNAPTİK NÖRON (Akson Terminali - Mesajı Gönderen)</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                Aksiyon Potansiyeli {isFiring ? '⚡ [Tetiklendi]' : '○ [Hazır]'}
              </span>
            </div>

            {/* Vesicles and reuptake pumps inside the axon terminal */}
            <div className="mt-3 flex items-center justify-between px-4 py-2 bg-neutral-950/70 border border-neutral-800/80 rounded-lg">
              {/* Vesicles */}
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-neutral-400 uppercase">Sinaptik Kesecikler:</span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <div
                      key={v}
                      className={`w-4 h-4 rounded-full border border-neutral-700 flex items-center justify-center transition-all ${
                        isFiring ? 'scale-110 bg-neutral-800 border-white' : 'bg-neutral-800/80'
                      }`}
                      style={{
                        boxShadow: isFiring ? `0 0 8px ${transmitterDetails[transmitter].color}` : 'none'
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: transmitterDetails[transmitter].color }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reuptake transporter status */}
              <div className="text-right space-y-0.5">
                <span className="text-[9px] font-mono text-neutral-400 uppercase">Geri Alım Pompası (SERT):</span>
                <div className="text-[11px] font-mono font-bold">
                  {simState === 'treatment' ? (
                    <span className="text-emerald-400 flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      İlaçla Kapatıldı (Bloke)
                    </span>
                  ) : simState === 'depression' ? (
                    <span className="text-amber-400 flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      Aşırı Hızlı Geri Alım
                    </span>
                  ) : (
                    <span className="text-neutral-300 flex items-center justify-end gap-1">
                      <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      Fizyolojik Denge
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Synaptic Cleft (20nm Boşluk) */}
          <div className="py-4 px-6 bg-neutral-900/40 border border-dashed border-neutral-800 rounded-xl relative min-h-[105px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>SİNAPTİK YARIK (20 nm Mesafe)</span>
              <span>Yoğunluk: {simState === 'depression' ? 'Düşük' : simState === 'treatment' ? 'Yüksek (Korunmuş)' : 'Dengeli'}</span>
            </div>

            {/* Floating neurotransmitter molecules */}
            <div className="relative h-14 flex items-center justify-around">
              {Array.from({ length: particleCount }).map((_, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center transition-all ${
                    idx % 4 === 0
                      ? 'animate-syn-drift-1'
                      : idx % 4 === 1
                      ? 'animate-syn-drift-2'
                      : idx % 4 === 2
                      ? 'animate-syn-drift-3'
                      : 'animate-syn-drift-4'
                  }`}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full shadow-sm"
                    style={{
                      backgroundColor: transmitterDetails[transmitter].color,
                      boxShadow: `0 0 10px ${transmitterDetails[transmitter].color}`
                    }}
                  />
                  <span className="text-[7px] font-mono text-neutral-400 mt-0.5">
                    {transmitter === 'serotonin' ? '5HT' : transmitter === 'dopamine' ? 'DA' : transmitter === 'gaba' ? 'GABA' : 'NE'}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-[9px] font-mono text-center text-neutral-500">
              {simState === 'treatment' ? (
                <span className="text-emerald-400 font-bold">
                  ✓ İlaç molekülleri geri alımı durdurdu; sinaptik aralıkta bollaşan haberciler reseptörleri canlandırıyor.
                </span>
              ) : simState === 'depression' ? (
                <span className="text-amber-400">
                  ⚠️ Kronik stres nedeniyle haberciler erkenden kayboluyor, alıcı hücreye yeterli sinyal ulaşamıyor.
                </span>
              ) : (
                <span className="text-neutral-400">
                  ○ Haberciler karşı nöron reseptörlerine bağlanarak elektriksel sinyali pürüzsüz iletiyor.
                </span>
              )}
            </div>
          </div>

          {/* Post-Synaptic Membrane (Dendrite / Alıcı Nöron) */}
          <div className="p-3.5 bg-neutral-900/90 border border-neutral-800 rounded-xl relative transition-all duration-300">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-mono text-[11px] font-bold text-neutral-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-neutral-400" />
                <span>POST-SİNAPTİK NÖRON (Dendrit Zarı - Mesajı Karşılayan)</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                Reseptör Durumu: {simState === 'depression' ? 'Düşük Yanıt' : 'Aktif Uyarım'}
              </span>
            </div>

            {/* Receptors row */}
            <div className="grid grid-cols-5 gap-2 pt-1">
              {[1, 2, 3, 4, 5].map((r) => (
                <div
                  key={r}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    simState === 'treatment' || isFiring
                      ? 'bg-neutral-800/90 border-neutral-600'
                      : simState === 'depression'
                      ? 'bg-neutral-950 border-neutral-800 opacity-60'
                      : 'bg-neutral-900 border-neutral-700'
                  }`}
                  style={{
                    borderColor: simState === 'treatment' || isFiring ? transmitterDetails[transmitter].color : undefined
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1 animate-pulse"
                    style={{ backgroundColor: transmitterDetails[transmitter].color }}
                  />
                  <div className="text-[8px] font-mono text-neutral-300">
                    Reseptör {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explanatory Clinical Callout Banner */}
      <div className="p-4 sm:p-5 bg-white space-y-3 text-xs leading-relaxed">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-neutral-100 rounded-lg text-neutral-800 shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="space-y-1 text-neutral-700">
            <h4 className="font-bold text-neutral-900 text-sm">
              {transmitterDetails[transmitter].name}: {transmitterDetails[transmitter].role}
            </h4>
            <p>
              {transmitterDetails[transmitter].description}
            </p>
          </div>
        </div>

        {/* Why medications take 2-4 weeks callout */}
        <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 space-y-1">
          <span className="font-mono text-[10px] font-bold text-neutral-900 uppercase tracking-wider block">
            💡 "Neden İlaçlar İlk Günden İyi Etmez, 2-4 Hafta Sürer?" (Nöroplastisite Gerçeği):
          </span>
          <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
            Antidepresanlar sinapstaki geri alım pompalarını ilk günden itibaren bloke etse de, klinik iyileşme için post-sinaptik reseptörlerin yeniden duyarlılaşması (down-regulation) ve beyinde yeni nöronal bağlantıların filizlenmesini sağlayan <strong>BDNF (Beyin Türevli Nörotrofik Faktör)</strong> genlerinin uyarılması gerekir. Bu biyolojik onarım süreci ortalama 2 ila 4 hafta alır.
          </p>
        </div>
      </div>
    </div>
  );
};
