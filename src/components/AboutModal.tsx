import React from 'react';
import { X, ShieldAlert, BookOpen, Stethoscope, Sparkles, Award, ExternalLink, CheckCircle } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0d0d0d] border border-neutral-800 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Crimson accent line at top */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-neutral-900 w-full" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-600/80 text-red-500 flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight text-white">
                  PSYCHDS
                </h2>
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono font-bold bg-red-600 text-white">
                  Klinik Karar Destek
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Klinik & Akademik Psikiyatri Bilgi Sistemi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Statement */}
          <div className="p-4 bg-[#141414] border-l-4 border-red-600 border border-neutral-800 space-y-2">
            <h3 className="font-bold text-white text-base">
              PSYCHDS Klinik & Akademik Psikiyatri Karar Destek Sistemi
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              PsychDB, DSM-5-TR, CANMAT & Maudsley Prescribing Guidelines referans alınarak yapılandırılmıştır.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-950/50 border border-red-800/80 text-red-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              Kanıta Dayalı Algoritmalar
            </div>
          </div>

          {/* Academic References Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#111111] border border-neutral-800">
              <span className="font-bold text-red-400 block mb-1">PsychDB & DSM-5-TR</span>
              <p className="text-neutral-400 leading-relaxed">
                20+ ana psikiyatrik bozukluğun tam tanı ölçütleri, dışlama kriterleri, belirti süreleri ve ayırıcı tanıları.
              </p>
            </div>

            <div className="p-3 bg-[#111111] border border-neutral-800">
              <span className="font-bold text-red-400 block mb-1">CANMAT & Maudsley Kılavuzları</span>
              <p className="text-neutral-400 leading-relaxed">
                Akademik 1. basamak, 2. basamak ve dirençli olgu algoritma basamakları, güçlendirme ve doz aralıkları.
              </p>
            </div>

            <div className="p-3 bg-[#111111] border border-neutral-800">
              <span className="font-bold text-red-400 block mb-1">Medscape & CYP450 Entegre</span>
              <p className="text-neutral-400 leading-relaxed">
                Önerilen resmi Medscape Drug Interaction Checker bağlantısı, çift/çoklu ilaç kokteyli ve izoenzim haritaları.
              </p>
            </div>

            <div className="p-3 bg-[#111111] border border-neutral-800">
              <span className="font-bold text-red-400 block mb-1">Yaygın Bozukluklar Klinik Ölçekleri</span>
              <p className="text-neutral-400 leading-relaxed">
                PHQ-9, GAD-7, MDQ, Y-BOCS, PC-PTSD-5, CIWA-Ar, C-SSRS, BSL-23, ISI, SCOFF, MMSE interaktif puanlayıcıları.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-black border border-neutral-800 text-xs text-neutral-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-neutral-200 font-semibold">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span>Yasal & Tıbbi Bilgilendirme</span>
            </div>
            <p className="leading-relaxed">
              © 2026 PSYCHDS. Yalnızca tıp hekimleri, asistanlar ve tıp öğrencileri için klinik eğitim ve karar destek başvuru kaynağıdır. 
              Klinik kararlar hastanın bireysel durumu, laboratuvar verileri ve hekimin bağımsız klinik muhakemesi ile verilmelidir.
            </p>
          </div>

          {/* Author Credit Badge */}
          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs text-neutral-300 font-medium">
                Geliştirici & Editör:
              </span>
              <span className="text-xs font-bold text-white font-mono bg-neutral-900 px-2 py-1 border border-neutral-700">
                Dr. Doğuş Sönmez
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
