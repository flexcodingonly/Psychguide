import React, { useState, useEffect, useRef } from 'react';
import {
  Brain,
  Zap,
  Activity,
  Wind,
  Shield,
  Layers,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Info,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Flame,
  Heart,
  Eye,
  Smile,
  Sliders,
  Volume2,
  BookOpen
} from 'lucide-react';

export const PsychologyInteractiveLab: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<
    'synapse' | 'cbt_loop' | 'breathing' | 'neuroplasticity' | 'mood_waves' | 'window_tolerance' | 'iceberg'
  >('synapse');

  return (
    <div className="space-y-6">
      {/* Lab Header Banner */}
      <div className="p-6 bg-gradient-to-r from-white via-[#fbfbfd] to-[#f5f5f7] border border-neutral-200 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-neutral-100 border border-neutral-300 text-[10px] font-mono text-neutral-700 font-bold uppercase tracking-wider rounded-lg">
              <Sparkles className="w-3 h-3 text-neutral-800 animate-spin" style={{ animationDuration: '6s' }} />
              <span>İnteraktif Görsel & Nöro-Psikoloji Laboratuvarı</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 font-display tracking-tight flex items-center gap-2.5">
              <Brain className="w-6 h-6 text-neutral-800" />
              <span>Zihnin, Beynin ve Tedavinin Görsel Simülasyonu</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 max-w-3xl leading-relaxed">
              Psikiyatri ilaçlarının sinapslarda nasıl çalıştığını, düşünce-duygu kısır döngüsünü, vagus sinirini, nöroplastisiteyi ve bilinçaltı savunma mekanizmalarını canlı animasyonlarla adım adım keşfedin.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-neutral-500 bg-neutral-50 px-3 py-1.5 border border-neutral-200 rounded-lg">
              ⚡ 7 İnteraktif Simülatör
            </span>
          </div>
        </div>

        {/* Sub-tabs selector for the animations */}
        <div className="mt-5 pt-4 border-t border-neutral-200 flex space-x-1.5 overflow-x-auto scrollbar-none pb-1">
          {[
            { id: 'synapse', label: '1. Sinaps & İlaç Mekanizması', icon: <Zap className="w-3.5 h-3.5" /> },
            { id: 'cbt_loop', label: '2. Bilişsel Kısır Döngü (BDT)', icon: <RotateCcw className="w-3.5 h-3.5" /> },
            { id: 'breathing', label: '3. Vagus & Sakinleştirici Nefes', icon: <Wind className="w-3.5 h-3.5" /> },
            { id: 'neuroplasticity', label: '4. Nöroplastisite (Beyin İyileşmesi)', icon: <Brain className="w-3.5 h-3.5" /> },
            { id: 'mood_waves', label: '5. Duygudurum Dalgaları', icon: <Activity className="w-3.5 h-3.5" /> },
            { id: 'window_tolerance', label: '6. Tolerans Penceresi', icon: <Sliders className="w-3.5 h-3.5" /> },
            { id: 'iceberg', label: '7. Bilinçaltı & Savunmalar', icon: <Layers className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveLabTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border rounded-lg shrink-0 select-none ${
                activeLabTab === tab.id
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE SIMULATION MODULE */}
      {activeLabTab === 'synapse' && <SynapticTransmissionSim />}
      {activeLabTab === 'cbt_loop' && <CbtCycleSimulator />}
      {activeLabTab === 'breathing' && <TacticalBreathingPacer />}
      {activeLabTab === 'neuroplasticity' && <NeuroplasticitySim />}
      {activeLabTab === 'mood_waves' && <AffectiveSpectrumWaveSim />}
      {activeLabTab === 'window_tolerance' && <WindowOfToleranceSim />}
      {activeLabTab === 'iceberg' && <DefenseIcebergExplorer />}
    </div>
  );
};

/* =========================================================================
   1. SYNAPTIC TRANSMISSION & DRUG MECHANISM SIMULATION
   ========================================================================= */
const SynapticTransmissionSim: React.FC = () => {
  const [mode, setMode] = useState<'normal' | 'depression' | 'ssri' | 'dopamine' | 'gaba'>('ssri');
  const [firingRate, setFiringRate] = useState<number>(3); // 1 to 5
  const [isPaused, setIsPaused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let frame = 0;

    // Particle pool for neurotransmitters
    interface TransmitterParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      life: number;
      type: 'serotonin' | 'dopamine' | 'gaba' | 'cl_ion';
      bound?: boolean;
    }

    const particles: TransmitterParticle[] = [];

    // Reuptake blockers (SSRI molecules)
    interface BlockerMolecule {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
    }
    const blockers: BlockerMolecule[] = [];

    const width = canvas.width;
    const height = canvas.height;

    const render = () => {
      frame++;

      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Presynaptic Terminal (top membrane)
      const cleftTop = height * 0.35;
      const cleftBottom = height * 0.65;

      // Draw Presynaptic Neuron
      ctx.beginPath();
      ctx.fillStyle = '#f1f5f9';
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.moveTo(0, 0);
      ctx.lineTo(width, 0);
      ctx.lineTo(width, cleftTop);
      ctx.bezierCurveTo(width * 0.75, cleftTop - 20, width * 0.25, cleftTop - 20, 0, cleftTop);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw Postsynaptic Neuron (bottom membrane)
      ctx.beginPath();
      ctx.fillStyle = '#e2e8f0';
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.moveTo(0, height);
      ctx.lineTo(width, height);
      ctx.lineTo(width, cleftBottom);
      ctx.bezierCurveTo(width * 0.75, cleftBottom + 20, width * 0.25, cleftBottom + 20, 0, cleftBottom);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Cleft label
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.font = '11px monospace';
      ctx.fillText('SİNAPTİK YARIK (SYNAPTIC CLEFT ~20 nm)', 15, cleftTop + (cleftBottom - cleftTop) / 2);

      // Draw Presynaptic Vesicles (floating in presynaptic terminal)
      const vesicleColor = mode === 'dopamine' ? '#38bdf8' : mode === 'gaba' ? '#a855f7' : '#ec4899';
      for (let i = 0; i < 6; i++) {
        const vx = 60 + i * 85;
        const vy = cleftTop - 60 + Math.sin(frame * 0.05 + i) * 6;
        ctx.beginPath();
        ctx.arc(vx, vy, 16, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.strokeStyle = vesicleColor;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Mini dots inside vesicle
        for (let d = 0; d < 5; d++) {
          const dx = vx + (Math.cos(d * 1.3) * 7);
          const dy = vy + (Math.sin(d * 1.3) * 7);
          ctx.beginPath();
          ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = vesicleColor;
          ctx.fill();
        }
      }

      // Draw Reuptake Transporters (SERT / DAT pumps on presynaptic membrane)
      const pumps = [
        { x: width * 0.2, y: cleftTop - 8 },
        { x: width * 0.45, y: cleftTop - 12 },
        { x: width * 0.8, y: cleftTop - 8 }
      ];

      pumps.forEach((pump, idx) => {
        ctx.save();
        ctx.translate(pump.x, pump.y);
        ctx.fillStyle = mode === 'ssri' ? '#ef4444' : '#64748b';
        ctx.strokeStyle = mode === 'ssri' ? '#fca5a5' : '#94a3b8';
        ctx.lineWidth = 2;
        ctx.fillRect(-14, -6, 28, 16);
        ctx.strokeRect(-14, -6, 28, 16);

        ctx.fillStyle = '#ffffff';
        ctx.font = '9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(mode === 'dopamine' ? 'DAT' : 'SERT', 0, 6);

        // If SSRI is active, draw drug blocking plug
        if (mode === 'ssri') {
          ctx.fillStyle = '#fbbf24';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(0, 16, 7, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#000000';
          ctx.font = '7px sans-serif';
          ctx.fillText('Rx', 0, 19);
        }
        ctx.restore();
      });

      // Draw Postsynaptic Receptors (5-HT2A, D2, GABA-A)
      const receptors = [
        { x: width * 0.15, y: cleftBottom + 8, label: mode === 'gaba' ? 'GABA-A' : mode === 'dopamine' ? 'D2-R' : '5-HT1A' },
        { x: width * 0.35, y: cleftBottom + 12, label: mode === 'gaba' ? 'GABA-A' : mode === 'dopamine' ? 'D1-R' : '5-HT2A' },
        { x: width * 0.65, y: cleftBottom + 12, label: mode === 'gaba' ? 'GABA-A' : mode === 'dopamine' ? 'D2-R' : '5-HT2C' },
        { x: width * 0.85, y: cleftBottom + 8, label: mode === 'gaba' ? 'GABA-A' : mode === 'dopamine' ? 'D3-R' : '5-HT7' }
      ];

      receptors.forEach((rec) => {
        ctx.save();
        ctx.translate(rec.x, rec.y);
        ctx.beginPath();
        // Cup shape receptor
        ctx.arc(0, -6, 12, 0, Math.PI);
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(rec.label, 0, 14);
        ctx.restore();
      });

      // Spawning new particles based on mode & firingRate
      const spawnInterval = mode === 'depression' ? 35 / firingRate : 12 / firingRate;
      if (!isPaused && frame % Math.max(2, Math.floor(spawnInterval)) === 0) {
        const spawnX = 40 + Math.random() * (width - 80);
        let pColor = '#ec4899'; // Serotonin pink
        let pType: TransmitterParticle['type'] = 'serotonin';

        if (mode === 'dopamine') {
          pColor = '#38bdf8'; // Dopamine electric cyan
          pType = 'dopamine';
        } else if (mode === 'gaba') {
          pColor = '#a855f7'; // GABA violet
          pType = 'gaba';
        }

        particles.push({
          x: spawnX,
          y: cleftTop + 4,
          vx: (Math.random() - 0.5) * 1.5,
          vy: 0.8 + Math.random() * 1.2,
          radius: 4,
          color: pColor,
          life: 0,
          type: pType
        });

        // In GABA mode, spawn Chloride Cl- entering postsynaptic
        if (mode === 'gaba' && Math.random() > 0.5) {
          particles.push({
            x: receptors[Math.floor(Math.random() * receptors.length)].x + (Math.random() - 0.5) * 10,
            y: cleftBottom + 10,
            vx: (Math.random() - 0.5) * 0.6,
            vy: 1.5 + Math.random(),
            radius: 3,
            color: '#10b981', // Chloride green
            life: 0,
            type: 'cl_ion'
          });
        }
      }

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (!isPaused) {
          p.x += p.vx;
          p.y += p.vy;
          p.life++;

          // Check if reabsorbed by reuptake pump (if not SSRI)
          if (mode !== 'ssri' && p.y <= cleftTop + 10) {
            pumps.forEach(pump => {
              if (Math.hypot(p.x - pump.x, p.y - pump.y) < 20) {
                p.life = 9999; // Reabsorbed!
              }
            });
          }

          // Check if reaching postsynaptic receptors
          if (p.y >= cleftBottom - 8 && p.type !== 'cl_ion') {
            receptors.forEach(rec => {
              if (Math.hypot(p.x - rec.x, p.y - rec.y) < 18) {
                p.bound = true;
                // Electrical flash downwards
                ctx.beginPath();
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 2;
                ctx.moveTo(rec.x, cleftBottom + 12);
                ctx.lineTo(rec.x + (Math.random() - 0.5) * 20, cleftBottom + 45);
                ctx.stroke();
              }
            });
          }
        }

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Remove old or out of bounds particles
        if (p.life > 180 || p.y > height || p.x < 0 || p.x > width) {
          particles.splice(i, 1);
        }
      }

      // Informative HUD overlay
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(width - 210, 10, 200, 70);
      ctx.strokeStyle = '#27272a';
      ctx.strokeRect(width - 210, 10, 200, 70);

      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.fillText(`Aktif Parçacık: ${particles.length}`, width - 195, 28);
      ctx.fillText(`Transporter Durumu: ${mode === 'ssri' ? 'BLOKE (SSRI)' : 'AÇIK (Geri Alım)'}`, width - 195, 45);
      ctx.fillStyle = mode === 'ssri' ? '#22c55e' : mode === 'depression' ? '#ef4444' : '#38bdf8';
      ctx.fillText(`Sinaptik Etki: ${
        mode === 'ssri' ? 'Serotonin Artışı + BDNF' : 
        mode === 'depression' ? 'Düşük İletim (Çökkünlük)' :
        mode === 'dopamine' ? 'Ödül & Hedef Motivasyonu' :
        mode === 'gaba' ? 'Hiperpolarizasyon (Sakinlik)' : 'Dengeli Homeostaz'
      }`, width - 195, 62);

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [mode, firingRate, isPaused]);

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Biyofiziksel Simülasyon
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Kimyasal Sinaps & İlaç Etki Dinamiği
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Antidepresanlar ve Nörotransmiterler Beyinde Nasıl Çalışır?
          </h3>
        </div>

        {/* Controls bar */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 border border-neutral-300 hover:border-neutral-500 text-neutral-800 text-xs font-bold rounded-lg cursor-pointer"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{isPaused ? 'Devam Et' : 'Durdur'}</span>
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 border border-neutral-300 text-xs rounded-lg">
            <span className="text-neutral-500 font-mono text-[11px]">Nöron Ateşleme:</span>
            <input
              type="range"
              min="1"
              max="5"
              value={firingRate}
              onChange={(e) => setFiringRate(Number(e.target.value))}
              className="w-16 accent-neutral-900 cursor-pointer"
            />
            <span className="font-mono text-neutral-900 text-[11px]">{firingRate}x</span>
          </div>
        </div>
      </div>

      {/* Mode Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {[
          { id: 'normal', label: '1. Normal Homeostaz', sub: 'Dengeli monoamin', color: 'border-neutral-300' },
          { id: 'depression', label: '2. Depresif Durum', sub: 'Eksik sinaptik iletim', color: 'border-red-900/50' },
          { id: 'ssri', label: '3. SSRI İlaç Etkisi', sub: 'Geri alım blokajı + BDNF', color: 'border-emerald-500' },
          { id: 'dopamine', label: '4. Dopamin Yolu', sub: 'Ödül & motivasyon', color: 'border-sky-500' },
          { id: 'gaba', label: '5. GABA & Anksiyolitik', sub: 'Cl- akışı & sakinleşme', color: 'border-purple-500' }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setMode(btn.id as any)}
            className={`p-2.5 text-left transition-all border rounded-lg cursor-pointer ${
              mode === btn.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <div className="text-xs font-bold leading-snug">{btn.label}</div>
            <div className={`text-[10px] font-mono mt-0.5 ${mode === btn.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
              {btn.sub}
            </div>
          </button>
        ))}
      </div>

      {/* Canvas Screen */}
      <div className="relative border border-neutral-200 bg-slate-50 rounded-lg overflow-hidden shadow-inner flex justify-center">
        <canvas
          ref={canvasRef}
          width={820}
          height={340}
          className="w-full max-w-[820px] h-[340px] block"
        />
      </div>

      {/* Scientific Explanation Card */}
      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900">
          <Info className="w-4 h-4 text-neutral-800" />
          <span>Klinik Mekanizma Analizi ({mode.toUpperCase()} Modu):</span>
        </div>
        <p className="text-xs text-neutral-700 leading-relaxed">
          {mode === 'ssri' && (
            <span>
              <strong>SSRI (Seçici Serotonin Geri Alım İnhibitörü):</strong> İlaç molekülleri (sarı fişler) presinaptik membrandaki <strong>SERT (Serotonin Transporter)</strong> pompalarına tutunarak serotoninin geri emilip yok edilmesini engeller. Böylece sinaptik aralıkta serotonin molekülleri birikir ve post-sinaptik 5-HT reseptörlerini uyarır. Bu uyarım hücre çekirdeğinde <strong>BDNF (Beyin Türevli Nörotrofik Faktör)</strong> genini aktifleştirerek sinir hücrelerinin büyümesini (nöroplastisite) tetikler. Bu nedenle antidepresanlar kişiliği değiştirmez veya uyuşturmaz; beynin kendini onarma fabrikasını çalıştırır.
            </span>
          )}
          {mode === 'depression' && (
            <span>
              <strong>Depresyonda Monoamin Hipotezi:</strong> Depresif atakta sinaptik yarığa salınan serotonin, dopamin veya noradrenalin miktarı düşüktür ve salınanlar da SERT pompalarıyla hızla geri emilir. Post-sinaptik nöron yeterli elektrik sinyali üretemez; kişi zihinsel yavaşlama, çökkünlük, anhedoni (zevk alamama) ve derin umutsuzluk hisseder.
            </span>
          )}
          {mode === 'normal' && (
            <span>
              <strong>Normal Sağlıklı Sinaptik Denge:</strong> Veziküllerden salınan serotonin molekülleri reseptörlere bağlanır, sinyal iletildikten sonra kontrollü biçimde geri alınarak homeostaz (iç denge) korunur.
            </span>
          )}
          {mode === 'dopamine' && (
            <span>
              <strong>Dopaminerjik Ödül & Hedef Devresi:</strong> Ventral tegmental alandan (VTA) prefrontal kortekse ve nükleus akkumbense uzanan yolaklar. Hedefe ulaşma hazzı, odaklanma, motivasyon ve canlılık dopamin moleküllerinin (mavi) D1 ve D2 reseptörlerini uyarmasıyla yönetilir. DEHB ve depresif ilgisizlikte bu yolaklar zayıflamıştır.
            </span>
          )}
          {mode === 'gaba' && (
            <span>
              <strong>GABA-A Reseptörü & Anksiyolitik Fren:</strong> GABA beynin ana "fren" (inhibitör) sistemidir. GABA veya benzodiazepinler GABA-A reseptörüne bağlandığında klorür iyon kanalları (yeşil) açılır. Hücre içine negatif yüklü Klorür (Cl-) akışı olur (hiperpolarizasyon). Nöronun uyarılabilirliği baskılanır; panik, çarpıntı ve kas gerginliği dakikalar içinde söner.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   2. BECK CBT VICIOUS LOOP & COGNITIVE REFRAMING ANIMATOR
   ========================================================================= */
const CbtCycleSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'panic' | 'social' | 'mdd' | 'ocd'>('panic');
  const [isReframed, setIsReframed] = useState<boolean>(false);

  const scenarios = {
    panic: {
      name: 'Panik Atak ve Beden Duyumu Döngüsü',
      trigger: 'Merdiven çıkarken hafif kalp çarpıntısı ve nefes sıkışması hissi',
      automaticThought: 'Kalp krizi geçiriyorum! Kontrolümü kaybedip burada öleceğim!',
      emotion: 'Akut Dehşet & Panik Kaygısı',
      emotionSeverity: isReframed ? 25 : 95,
      physicalReaction: isReframed ? 'Kalp hızı dengeleniyor, diyafram gevşiyor' : 'Adrenalin patlaması, taşikardi (145 bpm), titreme, hiperventilasyon',
      behavior: isReframed ? 'Olduğu yerde durup 4-7-8 nefesi almak, beden duyumunu kabullenmek' : 'Acil servise koşmak, ambulans çağırmak, kaçmak',
      reframedThought: 'Bu bir kalp krizi değil; sempatik sinir sistemimin yanlış alarmıdır. Daha önce onlarca kez oldu ve bana fiziksel zarar vermedi. 10 dakika içinde kendiliğinden geçecek.',
      cbtTechnique: 'Felaketleştirmeyi Çürütme & Beden Duyumuna Maruz Bırakma (Interoceptive Exposure)'
    },
    social: {
      name: 'Sosyal Fobi & Rezil Olma Kaygısı',
      trigger: 'Toplantıda veya sınıfta herkesin içinde konuşma sırasının gelmesi',
      automaticThought: 'Sesim titreyecek, yüzüm kızaracak ve herkes ne kadar beceriksiz olduğumu anlayacak.',
      emotion: 'Yoğun Sosyal Utanç ve Korku',
      emotionSeverity: isReframed ? 20 : 90,
      physicalReaction: isReframed ? 'Kaslar gevşek, ses tonu doğal' : 'Yanaklarda yanma, boğazda düğümlenme, ellerde buz kesme',
      behavior: isReframed ? 'Göz temasını koruyarak sade bir cümleyle fikrini söylemek' : 'Sırasını savuşturmak, izin isteyip tuvalete saklanmak, susmak',
      reframedThought: 'Herkes sunum yaparken biraz heyecanlanır, bu çok doğaldır. İnsanlar benim mükemmel olmamı değil, ne söylediğimi merak ediyor. Hata yapsam bile değerim düşmez.',
      cbtTechnique: 'Zihin Okuma Bilişsel Çarpıtmasını Kırma & Davranışsal Deney'
    },
    mdd: {
      name: 'Depresif Ruminasyon ve Atalet Sarmalı',
      trigger: 'İş yerinde veya okulda küçük bir proje hatası yapılması',
      automaticThought: 'Ben hiçbir şeyi doğru dürüst beceremem. Hayatım boyunca hep başarısız olacağım.',
      emotion: 'Derin Çaresizlik, Suçluluk ve Değersizlik',
      emotionSeverity: isReframed ? 30 : 92,
      physicalReaction: isReframed ? 'Beden ağırlığı kalktı, hafif canlanma' : 'Kurşun gibi ağırlaşmış kollar ve bacaklar, kronik bitkinlik',
      behavior: isReframed ? 'Hatanın somut çözümüne odaklanmak ve 15 dakika yürüyüşe çıkmak' : 'Perdeleri kapatıp yatağa girmek, telefonu kapatıp gün boyu yatmak',
      reframedThought: 'Bir işte hata yapmış olmam, hayatımın tümünde başarısız olduğum anlamına gelmez. Hata öğrenmenin parçasıdır; geçmişte başarıyla tamamladığım pek çok görev var.',
      cbtTechnique: 'Aşırı Genelleme Filtresini Kırma & Kademeli Aktivite Planlaması'
    },
    ocd: {
      name: 'OKB Bulaş Obsesyonu ve Kompulsiyon',
      trigger: 'Toplu taşımada veya hastanede kapı koluna çıplak elle dokunmak',
      automaticThought: 'Elime ölümcül bakteri bulaştı. Eve gidip herkesi zehirleyeceğim, benim yüzümden ölecekler!',
      emotion: 'Dayanılmaz İçsel Suçluluk ve Kirlenmişlik Gerilimi',
      emotionSeverity: isReframed ? 35 : 96,
      physicalReaction: isReframed ? 'Gerilim dalgası tepeye ulaştı ve plato çizip indi' : 'Göğüste sıkışma, deride kaşınma hissi, panik uyarılması',
      behavior: isReframed ? 'Elleri yıkamadan durmak; kaygının tepe noktasından sonra kendiliğinden düşmesini beklemek (TÖTE)' : 'Lavaboda elleri sabunla kanayana kadar 15 kez yıkamak',
      reframedThought: 'Düşünce ile eylem aynı şey değildir (Düşünce-Eylem Kaynaşması). Zihnime bulaşma korkusu gelmesi, gerçekten hasta olacağım anlamına gelmez. Rahatsızlığa tahammül edebilirim.',
      cbtTechnique: 'Tepki Önleme ile Maruz Bırakma (ERP) & Düşünce-Eylem Ayrımı'
    }
  };

  const curr = scenarios[selectedScenario];

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Bilişsel Davranışçı Terapi (BDT)
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Beck Bilişsel Formülasyon Modeli
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Düşünce ➔ Duygu ➔ Beden ➔ Davranış Kısır Döngüsü Nasıl Kırılır?
          </h3>
        </div>

        {/* Reframing Action Button */}
        <button
          onClick={() => setIsReframed(!isReframed)}
          className={`flex items-center gap-2 px-4 py-2 font-bold text-xs transition-all cursor-pointer rounded-lg ${
            isReframed
              ? 'bg-emerald-400 text-black shadow-[0_0_15px_rgba(52,211,153,0.4)]'
              : 'bg-white text-black hover:bg-neutral-200 shadow-xs]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{isReframed ? 'Döngü Kırıldı (Orijinal Haline Dön)' : '⚡ BDT ile Bilişsel Çerçeveleme Yap!'}</span>
        </button>
      </div>

      {/* Scenario Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {(Object.keys(scenarios) as (keyof typeof scenarios)[]).map((key) => (
          <button
            key={key}
            onClick={() => {
              setSelectedScenario(key);
              setIsReframed(false);
            }}
            className={`p-2.5 text-left transition-all border rounded-lg cursor-pointer ${
              selectedScenario === key
                ? 'bg-neutral-800 text-white border-white'
                : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <div className="text-xs font-bold leading-snug">{scenarios[key].name}</div>
          </button>
        ))}
      </div>

      {/* Interactive Loop Diagram */}
      <div className="p-6 bg-slate-50 border border-neutral-200 rounded-lg relative">
        {/* Animated Connection Lines / SVG */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch relative z-10">
          
          {/* Node 1: Tetikleyici Olay */}
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg flex flex-col justify-between space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                1. Olay (Tetikleyici)
              </span>
              <Activity className="w-3.5 h-3.5 text-neutral-800" />
            </div>
            <p className="text-xs text-neutral-800 font-medium leading-relaxed">
              "{curr.trigger}"
            </p>
            <div className="text-[9px] font-mono text-neutral-500">Çevresel ya da İçsel Durum</div>
          </div>

          {/* Node 2: Otomatik Düşünce */}
          <div className={`p-4 transition-all duration-500 border rounded-lg flex flex-col justify-between space-y-2 relative ${
            isReframed 
              ? 'bg-emerald-50 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
              : 'bg-red-50 border-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                isReframed ? 'text-emerald-700' : 'text-red-700'
              }`}>
                {isReframed ? '2. Alternatif / Dengeli Düşünce' : '2. Otomatik Olumsuz Düşünce'}
              </span>
              <Brain className={`w-3.5 h-3.5 ${isReframed ? 'text-emerald-700' : 'text-red-700'}`} />
            </div>
            <p className="text-xs text-neutral-900 font-semibold leading-relaxed italic">
              "{isReframed ? curr.reframedThought : curr.automaticThought}"
            </p>
            <div className={`text-[9px] font-mono font-medium ${isReframed ? 'text-emerald-700' : 'text-red-700'}`}>
              {isReframed ? '✓ Kanıta dayalı gerçekçi zihin' : '⚠️ Bilişsel Çarpıtma (Felaketleştirme)'}
            </div>
          </div>

          {/* Node 3: Duygu & Şiddet */}
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg flex flex-col justify-between space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                3. Duygusal Yanıt
              </span>
              <Heart className="w-3.5 h-3.5 text-neutral-800" />
            </div>
            <div className="text-xs text-neutral-900 font-bold">{curr.emotion}</div>
            
            {/* Severity bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-neutral-500">Şiddet:</span>
                <span className={`font-bold ${curr.emotionSeverity > 50 ? 'text-red-700' : 'text-emerald-700'}`}>
                  %{curr.emotionSeverity}
                </span>
              </div>
              <div className="w-full h-2 bg-neutral-100 border border-neutral-200 rounded-lg overflow-hidden">
                <div 
                  className={`h-full transition-all duration-700 ${
                    curr.emotionSeverity > 50 ? 'bg-red-500' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${curr.emotionSeverity}%` }}
                />
              </div>
            </div>
            <div className="text-[9px] font-mono text-neutral-500">Amigdala Aktivasyonu</div>
          </div>

          {/* Node 4: Beden Tepkisi */}
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg flex flex-col justify-between space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                4. Beden Tepkisi
              </span>
              <Activity className="w-3.5 h-3.5 text-neutral-800" />
            </div>
            <p className="text-xs text-neutral-800 leading-relaxed">
              {curr.physicalReaction}
            </p>
            <div className="text-[9px] font-mono text-neutral-500">
              {isReframed ? 'Parasempatik Fren Aktif' : 'Sempatik Savaş/Kaç Refleksi'}
            </div>
          </div>

          {/* Node 5: Davranış */}
          <div className={`p-4 transition-all duration-500 border rounded-lg flex flex-col justify-between space-y-2 relative ${
            isReframed 
              ? 'bg-emerald-50 border-emerald-500/60' 
              : 'bg-neutral-100/60 border-neutral-300'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                isReframed ? 'text-emerald-700' : 'text-neutral-700'
              }`}>
                5. Davranış
              </span>
              <CheckCircle2 className={`w-3.5 h-3.5 ${isReframed ? 'text-emerald-700' : 'text-neutral-500'}`} />
            </div>
            <p className="text-xs text-neutral-900 font-medium leading-relaxed">
              {curr.behavior}
            </p>
            <div className={`text-[9px] font-mono font-medium ${isReframed ? 'text-emerald-700' : 'text-amber-700'}`}>
              {isReframed ? '✓ Uyumlu & İyileştirici Eylem' : '⚠️ Kaçınma / Hastalığı Pekiştirme'}
            </div>
          </div>

        </div>

        {/* Dynamic Bottom Summary */}
        <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-neutral-700">
            <strong className="text-neutral-900">Uygulanan BDT Prensibi:</strong> {curr.cbtTechnique}
          </div>
          <div className="font-mono text-[11px] text-neutral-500">
            {isReframed ? '✨ Bilişsel yeniden çerçeveleme ile döngü başarıyla kırıldı!' : 'Kısır döngüyü kırmak için yukarıdaki butona tıklayın.'}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. TACTICAL BREATHING & VAGUS NERVE PACER
   ========================================================================= */
const TacticalBreathingPacer: React.FC = () => {
  const [technique, setTechnique] = useState<'478' | 'box' | 'sigh'>('478');
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  const configs = {
    '478': {
      title: '4-7-8 Sakinleştirici Solunum (Dr. Andrew Weil)',
      description: 'Parasempatik sistemi (vagus sinirini) anında devreye sokarak nabzı yavaşlatır, gece uykusuzluğu ve panik atak uyarılmasını yatıştırır.',
      phases: [
        { key: 'inhale', name: 'Burnundan Derin Nefes Al', duration: 4, instruction: 'Karnını şişirerek diyaframı doldur...' },
        { key: 'hold1', name: 'Nefesini Sakince Tut', duration: 7, instruction: 'Oksijen kanında dolaşırken zihnini serbest bırak...' },
        { key: 'exhale', name: 'Dudaklarını Büzerek Yavaşça Bırak', duration: 8, instruction: 'Vagus siniri uyarılıyor, kalp atışları yavaşlıyor...' }
      ]
    },
    box: {
      title: 'Kutu Solunumu (Box Breathing 4-4-4-4)',
      description: 'Navy SEAL ve kriz terapilerinde kullanılan, otonom sinir sistemini tam dengeye getiren taktiksel solunum ritmi.',
      phases: [
        { key: 'inhale', name: '4 Saniye Nefes Al', duration: 4, instruction: 'Derin, pürüzsüz ve sakin bir dolum...' },
        { key: 'hold1', name: '4 Saniye Tut', duration: 4, instruction: 'Bedenindeki sessizliğe odaklan...' },
        { key: 'exhale', name: '4 Saniye Nefes Ver', duration: 4, instruction: 'Tüm havayı tamamen boşalt...' },
        { key: 'hold2', name: '4 Saniye Boş Tut', duration: 4, instruction: 'Ciğerlerin boşken sakin kal...' }
      ]
    },
    sigh: {
      title: 'Fizyolojik İçe Çekiş (Physiological Sigh - Stanford / Huberman)',
      description: 'Sönmüş alveolleri (akciğer keseciklerini) yeniden açan, en hızlı akut anksiyete durdurucu solunum mekanizması.',
      phases: [
        { key: 'inhale', name: 'Burnundan Büyük Nefes Al (1. Adım)', duration: 3, instruction: 'Ciğerlerini neredeyse tamamen doldur...' },
        { key: 'hold1', name: 'Üstüne Hızlıca Biraz Daha Çek! (2. Adım)', duration: 2, instruction: 'Alveolleri maksimum aç...' },
        { key: 'exhale', name: 'Ağzından Uzun ve Yavaşça Bırak (Oh sesiyle)', duration: 6, instruction: 'Tüm karbondioksiti boşalt, omuzlarını düşür...' }
      ]
    }
  };

  const currConfig = configs[technique];

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Advance to next phase
        const phaseList = currConfig.phases;
        const currentIdx = phaseList.findIndex((p) => p.key === phase);
        const nextIdx = (currentIdx + 1) % phaseList.length;

        if (nextIdx === 0) {
          setCycleCount((c) => c + 1);
        }

        const nextPhase = phaseList[nextIdx];
        setPhase(nextPhase.key as any);
        return nextPhase.duration;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, phase, technique, currConfig]);

  const handleStart = () => {
    setIsRunning(true);
    setPhase(currConfig.phases[0].key as any);
    setSecondsLeft(currConfig.phases[0].duration);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCycleCount(0);
    setPhase(currConfig.phases[0].key as any);
    setSecondsLeft(currConfig.phases[0].duration);
  };

  const activePhaseObj = currConfig.phases.find((p) => p.key === phase) || currConfig.phases[0];

  // Visual scale calculation
  const getOrbScale = () => {
    if (!isRunning) return 1;
    if (phase === 'inhale') return 1.45;
    if (phase === 'hold1') return 1.45;
    if (phase === 'exhale') return 0.85;
    return 0.85;
  };

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Somatik Regülasyon
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Vagus Siniri & Parasempatik Aktivasyon
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Görsel & Rehberli Taktiksel Solunum Simülatörü
          </h3>
        </div>

        {/* Technique selection */}
        <div className="flex items-center gap-1.5">
          {(['478', 'box', 'sigh'] as (keyof typeof configs)[]).map((key) => (
            <button
              key={key}
              onClick={() => {
                setTechnique(key);
                setIsRunning(false);
                setCycleCount(0);
                setSecondsLeft(configs[key].phases[0].duration);
                setPhase(configs[key].phases[0].key as any);
              }}
              className={`px-3 py-1.5 text-xs font-semibold border rounded-lg transition-all cursor-pointer ${
                technique === key
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-200'
              }`}
            >
              {key === '478' ? '4-7-8 Tekniği' : key === 'box' ? 'Kutu (Box)' : 'Fizyolojik İçe Çekiş'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Breathing Visualizer Canvas / Orb */}
      <div className="p-8 bg-gradient-to-b from-[#fbfbfd] to-[#f5f5f7] border border-neutral-200 rounded-2xl flex flex-col items-center justify-center relative min-h-[380px] overflow-hidden shadow-xs">
        {/* Ambient Pulsing Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-80 h-80 rounded-full border border-neutral-400 animate-ping" style={{ animationDuration: '4s' }} />
          <div className="w-96 h-96 rounded-full border border-neutral-300" />
        </div>

        {/* Central Geometric Breathing Sphere */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full flex flex-col items-center justify-center relative transition-all ease-in-out shadow-xl cursor-pointer"
            style={{
              transform: `scale(${getOrbScale()})`,
              transitionDuration: phase === 'inhale' ? `${currConfig.phases[0].duration}s` : phase === 'exhale' ? `${currConfig.phases.find(p=>p.key==='exhale')?.duration || 6}s` : '0.4s',
              background: phase === 'inhale' 
                ? 'radial-gradient(circle, rgba(0,113,227,0.18) 0%, rgba(0,113,227,0.04) 70%, transparent 100%)'
                : phase === 'hold1'
                ? 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, rgba(147,51,234,0.04) 70%, transparent 100%)'
                : 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.04) 70%, transparent 100%)',
              border: '2px solid rgba(0,0,0,0.12)'
            }}
          >
            {/* Center seconds count */}
            <div className="text-4xl sm:text-5xl font-black font-mono text-neutral-900 tracking-tighter">
              {isRunning ? secondsLeft : 'HAZIR'}
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-800 mt-1 font-bold">
              {isRunning ? activePhaseObj.name : 'Başlatmak İçin Basın'}
            </div>
          </div>

          {/* Real-time instruction guidance */}
          <div className="mt-6 text-center space-y-1.5 max-w-md">
            <div className="text-sm font-semibold text-neutral-900">
              {isRunning ? activePhaseObj.instruction : currConfig.description}
            </div>
            <div className="text-xs font-mono text-neutral-500">
              {isRunning && `Tamamlanan Döngü: ${cycleCount} • Vagus Uyarımı: %${Math.min(100, 40 + cycleCount * 15)}`}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex items-center gap-3">
            {!isRunning ? (
              <button
                onClick={handleStart}
                className="flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white font-bold text-xs hover:bg-black transition-all cursor-pointer rounded-lg shadow-sm"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Nefes Seansını Başlat</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsRunning(false)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-black text-white font-bold text-xs rounded-lg cursor-pointer shadow-xs"
                >
                  <Pause className="w-4 h-4 text-white" />
                  <span>Durdur</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 font-bold text-xs rounded-lg cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-neutral-700" />
                  <span>Sıfırla</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Vagus Nerve Scientific Explanation */}
      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900">
          <Info className="w-4 h-4 text-neutral-800" />
          <span>Vagus Siniri (10. Kranial Sinir) Nörobiyolojisi:</span>
        </div>
        <p className="text-xs text-neutral-700 leading-relaxed">
          Nefes verirken diyafram yukarı doğru yükselir ve kalbin hacmi hafifçe küçülür. Kalpteki baroreseptörler bu basınç artışını tespit ederek beyne sinyal yollar. Beyin sapındaki <strong>Vagus Siniri</strong>, kalbe <strong>Asetilkolin (ACh)</strong> salgılatarak atım hızını derhal düşürür (Respiratuar Sinüs Aritmisi). Nefes verme süresini nefes alma süresinden uzun tutmak (örn: 4 saniye al, 8 saniye ver), beynin amigdala korku merkezine "Şu an güvendeyiz, tehlike yok" sinyalini ileten biyolojik bir acil frenidir.
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   4. NEUROPLASTICITY & SYNAPTOGENESIS CANVAS
   ========================================================================= */
const NeuroplasticitySim: React.FC = () => {
  const [synapseStrength, setSynapseStrength] = useState<number>(35); // 0 to 100
  const [activeInterventions, setActiveInterventions] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const interventions = [
    { id: 'therapy', name: 'Kanıta Dayalı Psikoterapi (BDT / Dinamik)', bdnf: +25, note: 'Yeni bilişsel patikalar inşa eder' },
    { id: 'sleep', name: 'Derin REM & NREM Uyku (7-8 Saat)', bdnf: +20, note: 'Glimfatik temizlik & hafıza pekiştirme' },
    { id: 'exercise', name: 'Aerobik Egzersiz & Doğa Yürüyüşü', bdnf: +20, note: 'Hipokampüste BDNF ve nörogenez' },
    { id: 'social', name: 'Güvenli Sosyal Bağ & Oksitosin', bdnf: +15, note: 'Amigdala aşırı uyarılmasını söndürür' },
    { id: 'meds', name: 'Düzenli İlaç Sürdürümü (En Az 6 Ay)', bdnf: +20, note: 'Nöronal sinaptik bağlantıları stabilize eder' }
  ];

  const handleToggleIntervention = (id: string, bdnfDelta: number) => {
    if (activeInterventions.includes(id)) {
      setActiveInterventions(prev => prev.filter(x => x !== id));
      setSynapseStrength(prev => Math.max(15, prev - bdnfDelta));
    } else {
      setActiveInterventions(prev => [...prev, id]);
      setSynapseStrength(prev => Math.min(100, prev + bdnfDelta));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    // Node graph for neurons
    interface NeuronNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }

    const nodes: NeuronNode[] = [];
    const nodeCount = 28;
    const width = canvas.width;
    const height = canvas.height;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: 30 + Math.random() * (width - 60),
        y: 30 + Math.random() * (height - 60),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 4 + Math.random() * 4,
        pulse: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      frame++;
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Move nodes slightly
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 20 || n.x > width - 20) n.vx *= -1;
        if (n.y < 20 || n.y > height - 20) n.vy *= -1;
        n.pulse += 0.04;
      });

      // Max connection distance depends on synapse strength
      const maxDist = 70 + (synapseStrength / 100) * 90;

      // Draw connections (axons/dendrites)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (synapseStrength / 100);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // Glowing color
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1 + (synapseStrength / 100) * 2;
            ctx.stroke();

            // Occasional action potential spark
            if (frame % 30 === 0 && Math.random() > 0.6) {
              const sparkProgress = (frame % 60) / 60;
              const sx = nodes[i].x + (nodes[j].x - nodes[i].x) * sparkProgress;
              const sy = nodes[i].y + (nodes[j].y - nodes[i].y) * sparkProgress;
              ctx.beginPath();
              ctx.arc(sx, sy, 3, 0, Math.PI * 2);
              ctx.fillStyle = '#ffffff';
              ctx.shadowColor = '#38bdf8';
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Draw nodes
      nodes.forEach((n, idx) => {
        const r = n.radius + Math.sin(n.pulse) * 1.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = idx % 3 === 0 ? '#38bdf8' : idx % 2 === 0 ? '#a855f7' : '#ec4899';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [synapseStrength]);

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Nörobiyolojik İyileşme
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Hebb Kuralı: "Birlikte Ateşlenen Nöronlar Birlikte Bağlanır"
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Nöroplastisite: Beyin İyileşirken Sinir Ağları Nasıl Yeniden Örülür?
          </h3>
        </div>

        {/* Strength Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 border border-neutral-300 text-xs rounded-lg">
          <span className="text-neutral-500 font-mono text-[11px]">Nöronal Ağ Gücü:</span>
          <span className="font-mono font-bold text-neutral-900 text-xs">%{synapseStrength}</span>
        </div>
      </div>

      {/* Interactive Interventions Checkboxes */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
          İyileşmeyi Hızlandıran Nöroplastik Faktörleri Ekleyin / Çıkarın:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {interventions.map((item) => {
            const isSelected = activeInterventions.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleToggleIntervention(item.id, item.bdnf)}
                className={`p-3 text-left border rounded-lg transition-all cursor-pointer flex items-start gap-2.5 ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                  isSelected ? 'bg-neutral-800 border-neutral-700 text-white' : 'border-neutral-400'
                }`}>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">{item.name}</div>
                  <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {item.note} (+%{item.bdnf} BDNF)
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Canvas Display */}
      <div className="relative border border-neutral-200 bg-slate-50 rounded-lg overflow-hidden flex justify-center shadow-inner">
        <canvas
          ref={canvasRef}
          width={820}
          height={320}
          className="w-full max-w-[820px] h-[320px] block"
        />
      </div>

      {/* Explanatory text */}
      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900">
          <Info className="w-4 h-4 text-neutral-800" />
          <span>Nöroplastisite Prensibi (TPD & Nöropsikiyatri):</span>
        </div>
        <p className="text-xs text-neutral-700 leading-relaxed">
          Geçmişte erişkin beyninin değişmez olduğu düşünülürdü. Günümüz nörobilimi kanıtlamıştır ki beyin; her yeni düşünceyle, her psikoterapi seansıyla ve her sağlıklı alışkanlıkla fiziksel olarak yeniden yapılanır (<strong>Nöroplastisite</strong>). Depresyon ve kronik travmada stres hormonu olan kortizol, hipokampüsteki dendritik dalları budar ve küçültür. Kanıta dayalı tedaviler (antidepresanlar, BDT, düzenli uyku ve egzersiz), <strong>BDNF (Beyin Türevli Nörotrofik Faktör)</strong> salgılatarak bu sinir ağlarının yeniden filizlenmesini ve güçlü yeni otobanlar kurmasını sağlar.
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   5. AFFECTIVE SPECTRUM WAVE OSCILLOSCOPE
   ========================================================================= */
const AffectiveSpectrumWaveSim: React.FC = () => {
  const [condition, setCondition] = useState<'euthymia' | 'mdd' | 'bipolar1' | 'bipolar2' | 'stabilized'>('bipolar1');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    const render = () => {
      offset += 1.5;

      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Grid Lines
      ctx.strokeStyle = '#18181b';
      ctx.lineWidth = 1;
      for (let y = 30; y < height; y += 35) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Euthymia Safe Zone (Greenish corridor)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.07)';
      ctx.fillRect(0, midY - 35, width, 70);

      // Baseline (Euthymia middle)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Threshold Labels
      ctx.font = '10px monospace';
      ctx.fillStyle = '#ef4444';
      ctx.fillText('▲ MANİ / HİPERAKTİVİTE EŞİĞİ', 15, 25);

      ctx.fillStyle = '#10b981';
      ctx.fillText('● SAĞLIKLI ÖTİMİ ARALIĞI (DOĞAL İNİŞ-ÇIKIŞLAR)', 15, midY - 40);

      ctx.fillStyle = '#38bdf8';
      ctx.fillText('▼ MAJÖR DEPRESYON EŞİĞİ', 15, height - 15);

      // Draw Wave Curve
      ctx.beginPath();
      ctx.lineWidth = 3;

      let waveColor = '#10b981';
      if (condition === 'bipolar1') waveColor = '#f59e0b';
      else if (condition === 'mdd') waveColor = '#38bdf8';
      else if (condition === 'bipolar2') waveColor = '#ec4899';
      else if (condition === 'stabilized') waveColor = '#22c55e';

      ctx.strokeStyle = waveColor;
      ctx.shadowColor = waveColor;
      ctx.shadowBlur = 10;

      for (let x = 0; x < width; x++) {
        let y = midY;
        const t = (x + offset) * 0.02;

        if (condition === 'euthymia') {
          // Normal mild wave
          y = midY + Math.sin(t) * 18 + Math.cos(t * 1.7) * 8;
        } else if (condition === 'mdd') {
          // Stuck in the deep bottom
          y = midY + 55 + Math.sin(t * 0.5) * 15;
        } else if (condition === 'bipolar1') {
          // Massive spikes (Mania) and deep crashes (Depression)
          y = midY + Math.sin(t * 0.6) * 85 + Math.cos(t * 1.2) * 15;
        } else if (condition === 'bipolar2') {
          // Moderate peak (hypomania) with deep prolonged depression
          const base = Math.sin(t * 0.5);
          y = midY + (base > 0 ? base * 40 : base * 75);
        } else if (condition === 'stabilized') {
          // Flattened into euthymia corridor
          y = midY + Math.sin(t * 0.8) * 22;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [condition]);

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Duygudurum Bozuklukları Spektrumu
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Osilatör Dalga Simülatörü
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Ötimi, Depresyon ve Bipolar Bozuklukta Dalgalanmaların Farkı Nedir?
          </h3>
        </div>
      </div>

      {/* Condition Switcher */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {[
          { id: 'euthymia', label: '1. Ötimi (Normal)', sub: 'Hafif insani iniş çıkış' },
          { id: 'mdd', label: '2. Majör Depresyon', sub: 'Sürekli derin çukur' },
          { id: 'bipolar1', label: '3. Bipolar I Bozukluk', sub: 'Mani fırtınası & çöküş' },
          { id: 'bipolar2', label: '4. Bipolar II Bozukluk', sub: 'Hipomani & derin çöküş' },
          { id: 'stabilized', label: '5. Lityum / Tedavi Sonrası', sub: 'Kararlı dengelenme' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setCondition(item.id as any)}
            className={`p-2.5 text-left border rounded-lg transition-all cursor-pointer ${
              condition === item.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <div className="text-xs font-bold leading-tight">{item.label}</div>
            <div className={`text-[10px] font-mono mt-0.5 ${condition === item.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
              {item.sub}
            </div>
          </button>
        ))}
      </div>

      {/* Canvas */}
      <div className="relative border border-neutral-200 bg-slate-50 rounded-lg overflow-hidden flex justify-center shadow-inner">
        <canvas
          ref={canvasRef}
          width={820}
          height={260}
          className="w-full max-w-[820px] h-[260px] block"
        />
      </div>

      {/* Clinical Guidance */}
      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900">
          <Info className="w-4 h-4 text-neutral-800" />
          <span>Klinik Dalga Yorumu:</span>
        </div>
        <p className="text-xs text-neutral-700 leading-relaxed">
          {condition === 'bipolar1' && (
            <span>
              <strong>Bipolar I Bozukluk:</strong> Dalga tepe noktalarında yeşil ötimi sınırını aşarak kırmızı <strong>Mani</strong> bölgesine fırlar. Bu dönemde uyku ihtiyacında dramatik azalma (günde 2 saat uykuyla enerjik hissetme), düşünce uçuşması, aşırı para harcama veya büyüklük fikirleri görülür. Bunu takip eden dönemde ise dalga hızla en alta (ağır depresyon) çakılır. Duygudurum dengeleyiciler bu yıkıcı genlik dalgalanmasını sakinleştirir.
            </span>
          )}
          {condition === 'stabilized' && (
            <span>
              <strong>Tedavi ile Dengeleme (Lityum / Antipsikotik):</strong> İlaçlar kişinin duygularını "robotlaştırmaz" veya "düzleştirmez"; yalnızca fırtınalı aşırı genliği (yıkıcı mani ve felç edici depresyonu) güvenli ve sağlıklı ötimi koridoruna (yeşil alan) hapseder. Kişi neşelenmeye ve üzülmeye devam eder, fakat hayatını yıkacak uçlara savrulmaz.
            </span>
          )}
          {condition === 'mdd' && (
            <span>
              <strong>Majör Depresif Dönem:</strong> Dalga hiçbir zaman yukarı çıkamaz; sürekli mavi çukurda sürüklenir. Kişi gün boyu süren çökkünlük, ilgi/istek kaybı, enerji tükenmesi ve suçluluk yaşar. Tedavi ile dalga basamak basamak yeşil koridora yükseltilir.
            </span>
          )}
          {condition === 'bipolar2' && (
            <span>
              <strong>Bipolar II:</strong> Mani kadar şiddetli olmayan <strong>Hipomani</strong> dönemleri (üretken, neşeli, hızlı dönemler) ile çok uzun süren ve intihar riski taşıyan derin depresif dönemlerin art arda gelmesidir.
            </span>
          )}
          {condition === 'euthymia' && (
            <span>
              <strong>Ötimi (Ruhsal Sağlık):</strong> Hayatın doğal seyrine uygun hafif dalgalanmalardır. Üzücü bir haberde hüzünlenmek, güzel bir başarıda sevinmek doğaldır; dalga yeşil koridor içinde serbestçe salınır.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   6. WINDOW OF TOLERANCE & POLYVAGAL SIMULATOR
   ========================================================================= */
const WindowOfToleranceSim: React.FC = () => {
  const [arousalLevel, setArousalLevel] = useState<number>(50); // 0 to 100

  // 0-30: Hypoarousal (Dorsal Vagal Shutdown)
  // 31-69: Window of Tolerance (Ventral Vagal Safety)
  // 70-100: Hyperarousal (Sympathetic Fight / Flight)

  const getZone = (val: number) => {
    if (val < 35) return 'hypo';
    if (val > 65) return 'hyper';
    return 'window';
  };

  const zone = getZone(arousalLevel);

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Dr. Stephen Porges & Dan Siegel
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Polivagal Teori & Sinir Sistemi Termometresi
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Tolerans Penceresi: Şu An Sinir Sisteminiz Hangi Modda?
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-neutral-500">Uyarılmışlık:</span>
          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
            zone === 'hyper' ? 'bg-red-50 text-red-800 border border-red-300' :
            zone === 'hypo' ? 'bg-sky-50 text-sky-800 border border-sky-300' :
            'bg-emerald-50 text-emerald-800 border border-emerald-300'
          }`}>
            {zone === 'hyper' ? 'HİPERAROUSAL (SAVAŞ/KAÇ)' : zone === 'hypo' ? 'HİPOAROUSAL (DONMA/ÇÖKÜŞ)' : 'TOLERANS PENCERESİNDE'}
          </span>
        </div>
      </div>

      {/* Interactive Slider Bar */}
      <div className="space-y-3 p-5 bg-neutral-50 border border-neutral-200 rounded-lg">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-sky-700 font-semibold">0: Donma / Uyuşma (Hipo)</span>
          <span className="text-emerald-700 font-bold">50: Dengeli / Bağlantıda (Ventral Vagal)</span>
          <span className="text-red-700 font-semibold">100: Panik / Öfke (Hiper)</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={arousalLevel}
          onChange={(e) => setArousalLevel(Number(e.target.value))}
          className="w-full h-3 bg-gradient-to-r from-sky-600 via-emerald-500 to-red-600 rounded-lg appearance-none cursor-pointer accent-neutral-900"
        />

        <div className="flex items-center justify-between text-[11px] text-neutral-500">
          <span>İmleci sürükleyerek mevcut içsel durumunuzu test edin.</span>
          <span className="font-mono text-neutral-900 font-bold">{arousalLevel} / 100</span>
        </div>
      </div>

      {/* Dynamic State Card */}
      <div className={`p-5 border transition-all duration-300 rounded-lg space-y-4 ${
        zone === 'hyper' ? 'bg-red-50 border-red-500/60' :
        zone === 'hypo' ? 'bg-sky-50 border-sky-500/60' :
        'bg-emerald-50 border-emerald-500/60'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`w-3 h-3 rounded-full animate-ping ${
              zone === 'hyper' ? 'bg-red-400' : zone === 'hypo' ? 'bg-sky-400' : 'bg-emerald-400'
            }`} />
            <h4 className="text-sm font-bold text-neutral-900 font-display">
              {zone === 'hyper' && '🔴 Hiperarousal (Sempatik Sistem Aşırı Yüklü — Savaş ya da Kaç)'}
              {zone === 'hypo' && '🔵 Hipoarousal (Dorsal Vagal Kapanma — Donma, Dissosiyasyon, Çöküş)'}
              {zone === 'window' && '🟢 Tolerans Penceresi (Ventral Vagal Sistem — Güvende, Sakin ve Odaklanmış)'}
            </h4>
          </div>

          <span className="text-xs font-mono text-neutral-500">
            {zone === 'hyper' ? 'Adrenalin & Kortizol Yüksek' : zone === 'hypo' ? 'Enerji Tükendi / Disosiyatif' : 'Homeostaz & Sosyal Katılım'}
          </span>
        </div>

        {/* Symptoms vs Grounding exercises */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-white border border-neutral-200 rounded-lg space-y-1.5">
            <div className="font-mono font-bold text-neutral-700 uppercase tracking-wider text-[10px]">
              Görülen Beden ve Zihin Belirtileri:
            </div>
            <p className="text-neutral-800 leading-relaxed">
              {zone === 'hyper' && 'Çarpıntı, panik hissi, kaslarda aşırı gerginlik, öfke patlamaları, soluksuz kalma, zihinde düşüncelerin yarışması, tehlike arama (hipervijilans).'}
              {zone === 'hypo' && 'Bedenin kurşun gibi ağırlaşması, duygusuzlaşma (hissizlik), dünyaya yabancılaşma (depersonalizasyon), konuşacak gücü bulamama, içe kapanma, utanç.'}
              {zone === 'window' && 'Duyguları regüle edebilme, mantıklı düşünebilme, empati kurabilme, bedenin gevşek ama uyanık olması, nefesin düzenli akması.'}
            </p>
          </div>

          <div className="p-3 bg-white border border-neutral-200 rounded-lg space-y-1.5">
            <div className="font-mono font-bold text-neutral-900 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-neutral-800" />
              <span>Önerilen Somatik / Psikolojik Müdahale:</span>
            </div>
            <p className="text-neutral-800 leading-relaxed">
              {zone === 'hyper' && '1) Yavaş nefes verme (4-7-8 veya Fizyolojik İçe Çekiş). 2) Avuç içlerine soğuk su çarpmak (Dalgıç Refleksi). 3) Ayak tabanlarını yere güçlüce basıp zeminin sağlamlığını hissetmek.'}
              {zone === 'hypo' && '1) Bedenin donmasını kırmak için hafif esneme ve kollarını sıvazlama. 2) 5-4-3-2-1 duyusal topraklanma (çevredeki 5 nesneyi yüksek sesle saymak). 3) Boyun ve omuzları yavaşça çevirerek odayı taramak.'}
              {zone === 'window' && 'Mevcut anın tadını çıkarın. Derinleşmek için şükran günlüğü yazabilir, yaratıcı işler üretebilir veya sevdiklerinizle derin sohbetler kurabilirsiniz.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   7. DEFENSE MECHANISMS & FREUDIAN ICEBERG EXPLORER
   ========================================================================= */
const DefenseIcebergExplorer: React.FC = () => {
  const [selectedDefense, setSelectedDefense] = useState<string>('projection');

  const defenses = [
    {
      id: 'projection',
      name: 'Yansıtma (Projection)',
      depth: 'Bilinçdışı',
      level: 'İlkel / Nevrotik Savunma',
      quote: 'Kendinde kabul edemediğin dürtüyü dışarıdaki insana atfetmek.',
      example: 'İçten içe arkadaşını kıskanan birinin, sürekli "Sen beni kıskanıyorsun, benim başarılarıma tahammülün yok!" diyerek suçlaması.',
      remedy: 'Kendi gölge yönlerimizi ve kusurlarımızı dürüstçe kabul etmek.'
    },
    {
      id: 'sublimation',
      name: 'Yüceltme (Sublimation)',
      depth: 'Bilinç & Bilinçönü',
      level: 'En Olgun (Adaptif) Savunma',
      quote: 'Yıkıcı dürtüleri toplum için faydalı, sanatsal veya üretken bir faaliyete dönüştürmek.',
      example: 'İçsel yoğun saldırganlık dürtüsü olan birinin başarılı bir boksör, cerrah veya heykeltıraş olarak enerjisini üretici biçimde akıtması.',
      remedy: 'Dürtüyü bastırmak yerine sanata, spora veya bilime kanalize etmek.'
    },
    {
      id: 'splitting',
      name: 'Bölme (Splitting)',
      depth: 'Derin Bilinçdışı',
      level: 'Sınırda (Borderline) Savunma',
      quote: 'İnsanları ya tamamen mükemmel (melek) ya da tamamen kötü (şeytan) olarak algılamak; gri tonları görememek.',
      example: 'Dün hekimini "hayatımı kurtaran mucizevi doktor" diye överken, bugün 5 dakika gecikti diye "dünyanın en beceriksiz ve kötü insanı" ilan etmek.',
      remedy: 'Bir insanın aynı anda hem iyi yönleri hem de hataları olabileceğini (Bütünsel Nesne İlişkisi) fark etmek.'
    },
    {
      id: 'rationalization',
      name: 'Mantığa Büründürme (Rationalization)',
      depth: 'Bilinçönü',
      level: 'Nevrotik Savunma',
      quote: 'Kabul edilemez bir başarısızlık veya hatayı akılcı kılıflarla haklı çıkarmak (Tilkinin uzanamadığı ciğere mundar demesi).',
      example: 'Sınava hiç çalışmayıp kaldığında "Zaten bu bölüm gereksizdi, hocalar da taraflı not veriyordu" demek.',
      remedy: 'Yüzleşme ve kendi sorumluluğumuzu cesaretle sahiplenmek.'
    },
    {
      id: 'reaction_formation',
      name: 'Karşıt Tepki Geliştirme (Reaction Formation)',
      depth: 'Bilinçdışı',
      level: 'Nevrotik Savunma',
      quote: 'Bilinçdışındaki rahatsız edici bir duygunun tam zıddı abartılı bir davranış sergilemek.',
      example: 'Kendisinden nefret ettiği bir iş arkadaşını gördüğünde aşırı sevecen davranıp boynuna sarılmak ve hediyelere boğmak.',
      remedy: 'Gerçek duygularımızın farkına varmak ve yapmacık aşırılıkları bırakmak.'
    },
    {
      id: 'repression',
      name: 'Bastırma (Repression)',
      depth: 'Derin Bilinçdışı',
      level: 'Temel Ego Savunması',
      quote: 'Acı veren anıyı veya dürtüyü bilincin farkındalığından okyanusun dibine itmek.',
      example: 'Çocuklukta yaşanan ağır bir trafik kazasının veya kaybın ayrıntılarını tamamen unutup hatırlayamamak.',
      remedy: 'Güvenli bir terapi ortamında acı veren duyguyu işleyerek entegre etmek.'
    }
  ];

  const curr = defenses.find(d => d.id === selectedDefense) || defenses[0];

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-lg space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-lg uppercase">
              Psikodinamik & Ego Savunmaları
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Freud & Kernberg Buzdağı Modeli
            </span>
          </div>
          <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
            Bilinçaltı Buzdağı ve Psikolojik Savunma Mekanizmaları
          </h3>
        </div>
      </div>

      {/* Graphical Iceberg SVG Representation */}
      <div className="relative border border-neutral-200 bg-gradient-to-b from-[#090d16] via-[#051329] to-[#010611] rounded-lg p-6 overflow-hidden min-h-[300px]">
        {/* Sky / Air Area */}
        <div className="absolute top-2 left-4 text-[11px] font-mono font-bold text-sky-200">
          ☁️ BİLİNÇ (SU ÜSTÜ — Görünen %10: Mantık, Kararlar, Şimdiki An)
        </div>

        {/* Water Surface Line */}
        <div className="absolute top-[38%] left-0 right-0 h-1 bg-cyan-400/50 shadow-[0_0_10px_#38bdf8] flex items-center justify-end px-4">
          <span className="text-[10px] font-mono text-cyan-200 bg-black/60 px-2 py-0.5 rounded-lg">
            Su Seviyesi: Bilinçönü Eşiği
          </span>
        </div>

        {/* Deep Ocean Area */}
        <div className="absolute bottom-3 left-4 text-[11px] font-mono font-bold text-blue-400">
          🌊 BİLİNÇDIŞI (DERİN OKYANUS — Görünmeyen %90: Bastırılmış Travmalar, Savunmalar, İlkel Dürtüler)
        </div>

        {/* Central Iceberg Polygon Shape */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4">
          <svg viewBox="0 0 500 240" className="w-full max-w-lg h-56 drop-shadow-2xl">
            {/* Iceberg polygon */}
            <polygon
              points="250,15 310,75 360,95 420,180 340,230 160,230 80,180 140,95 190,75"
              fill="url(#icebergGrad)"
              stroke="#67e8f9"
              strokeWidth="2"
            />
            {/* Underwater fade mask */}
            <defs>
              <linearGradient id="icebergGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="38%" stopColor="#cffafe" stopOpacity="0.8" />
                <stop offset="42%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Labels on iceberg */}
            <text x="250" y="55" fill="#000000" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              EGO & MANTIK
            </text>
            <text x="250" y="125" fill="#e0f2fe" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              SAVUNMALAR
            </text>
            <text x="250" y="195" fill="#93c5fd" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              İD, DÜRTÜLER & ÇATIŞMALAR
            </text>
          </svg>
        </div>
      </div>

      {/* Defense Mechanism Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {defenses.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDefense(d.id)}
            className={`p-2.5 text-left border rounded-lg transition-all cursor-pointer ${
              selectedDefense === d.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <div className="text-xs font-bold leading-tight">{d.name}</div>
            <div className={`text-[10px] font-mono mt-0.5 ${selectedDefense === d.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
              {d.depth}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Defense Details Card */}
      <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-neutral-900 font-display">
              {curr.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-200 text-neutral-800 border border-neutral-300 rounded-lg font-bold">
              {curr.level}
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-700 font-semibold">
            📍 Katman: {curr.depth}
          </span>
        </div>

        <blockquote className="text-xs sm:text-sm text-neutral-800 font-medium italic border-l-2 border-neutral-800 pl-3">
          "{curr.quote}"
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
            <div className="font-mono text-[10px] text-amber-800 uppercase font-bold">
              🎭 Günlük Hayattan Somut Örnek:
            </div>
            <p className="text-neutral-700 leading-relaxed">
              {curr.example}
            </p>
          </div>

          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1">
            <div className="font-mono text-[10px] text-emerald-800 uppercase font-bold">
              🌱 Psikolojik Büyüme & Çözüm Yolu:
            </div>
            <p className="text-neutral-700 leading-relaxed">
              {curr.remedy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
