import React from 'react';
import { X, ShieldAlert, BookOpen, Stethoscope, Sparkles, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { MedicalBrandLogo } from './MedicalThemeDecorations';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-3">
            <MedicalBrandLogo size="md" showText={false} />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold tracking-tight text-neutral-900 font-display">
                  PSYCH<span className="text-black">DS</span>
                </h2>
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono font-bold bg-neutral-100 border border-neutral-200 text-neutral-800 rounded-md">
                  Klinik Bilgi Rehberi
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-sans">
                Klinik Psikiyatri ve Psikofarmakoloji Rehberi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Statement */}
          <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-2 rounded-lg">
            <h3 className="font-bold text-neutral-900 text-base font-display">
              PSYCHDS Klinik Psikiyatri ve Psikofarmakoloji Rehberi
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Maudsley Prescribing Guidelines, Stahl, Kaplan & Sadock, Oxford, DSM-5-TR, APA, WHO ve TPD kılavuzları referans alınarak eğitim ve klinik başvuru amacıyla yapılandırılmıştır.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold rounded-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              Kanıta Dayalı Algoritmalar
            </div>
          </div>

          {/* Academic References Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
              <span className="font-bold text-neutral-900 block mb-1">Kaplan & Sadock, Oxford & DSM-5-TR</span>
              <p className="text-neutral-600 leading-relaxed">
                22 ana psikiyatrik bozukluğun tam tanı ölçütleri, dışlama kriterleri, belirti süreleri ve ayırıcı tanıları.
              </p>
            </div>

            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
              <span className="font-bold text-neutral-900 block mb-1">CANMAT & Maudsley Kılavuzları</span>
              <p className="text-neutral-600 leading-relaxed">
                Akademik 1. basamak, 2. basamak ve dirençli olgu algoritma basamakları, güçlendirme ve doz aralıkları.
              </p>
            </div>

            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
              <span className="font-bold text-neutral-900 block mb-1">Medscape & CYP450 Entegre</span>
              <p className="text-neutral-600 leading-relaxed">
                Önerilen resmi Medscape Drug Interaction Checker bağlantısı, çift/çoklu ilaç kokteyli ve izoenzim haritaları.
              </p>
            </div>

            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
              <span className="font-bold text-neutral-900 block mb-1">Yaygın Bozukluklar Klinik Ölçekleri</span>
              <p className="text-neutral-600 leading-relaxed">
                PHQ-9, GAD-7, MDQ, Y-BOCS, PC-PTSD-5, CIWA-Ar, C-SSRS, BSL-23, ISI, SCOFF, MMSE interaktif puanlayıcıları.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 space-y-1.5 rounded-lg">
            <div className="flex items-center gap-1.5 text-neutral-900 font-semibold">
              <ShieldAlert className="w-4 h-4 text-neutral-800" />
              <span>Yasal & Tıbbi Bilgilendirme</span>
            </div>
            <p className="leading-relaxed">
              © 2026 PSYCHDS. Yalnızca eğitim, farkındalık ve bilimsel klinik kılavuz referansı amaçlıdır. 
              Doğrudan tıbbi teşhis, konsültasyon veya resmi tedavi kararı yerine geçmez.
            </p>
          </div>

          {/* Author Credit Badge */}
          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-black shadow-xs" />
              <span className="text-xs text-neutral-600 font-medium">
                Geliştirici & Editör:
              </span>
              <span className="text-xs font-bold text-neutral-900 font-display bg-neutral-100 px-2.5 py-1 border border-neutral-200 rounded-md">
                Dr. Doğuş Sönmez
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold bg-black hover:bg-neutral-800 text-white rounded-lg shadow-xs transition-all cursor-pointer"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
