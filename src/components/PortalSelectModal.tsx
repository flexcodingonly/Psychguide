import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle,
  BookOpen,
  Calculator,
  Compass
} from 'lucide-react';
import { MedicalBrandLogo } from './MedicalThemeDecorations';

interface PortalSelectModalProps {
  isOpen: boolean;
  onSelectMode: (mode: 'patient' | 'professional') => void;
}

export const PortalSelectModal: React.FC<PortalSelectModalProps> = ({
  isOpen,
  onSelectMode
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="flex justify-center mb-2">
              <MedicalBrandLogo size="md" showText={false} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
              PSYCH<span className="text-black">DS</span> Rehberine Hoş Geldiniz
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Lütfen devam etmek istediğiniz kullanım amacını seçiniz. Dilediğiniz an ekranın üst kısmından bu seçimi değiştirebilirsiniz.
            </p>
          </div>

          {/* Dual Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Card 1: Non-Professional / Patient / Relative Guide */}
            <div 
              onClick={() => onSelectMode('patient')}
              className="p-6 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-neutral-900 transition-all cursor-pointer rounded-xl flex flex-col justify-between group space-y-5 shadow-xs hover:shadow-md relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:border-black transition-all shadow-xs">
                    <Heart className="w-5 h-5 text-neutral-900" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-200 border border-neutral-300 text-neutral-800 rounded uppercase tracking-wider font-bold">
                    Bireysel & Aile Rehberi
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 font-display group-hover:text-black transition-colors">
                    Sağlık Profesyoneli Değilim
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Bireyler, danışanlar ve hasta yakınları için Türkiye Psikiyatri Derneği (TPD) ve APA kanıtlarına dayalı, anlaşılır ve güvenilir rehber.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>TPD & APA resmi konsensüs alıntıları ve kanıtları</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>İlaç ve terapi mitleri vs bilimsel gerçekler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>Depresyon, panik atak, bipolar ve OKB belirtileri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>Psikiyatrik aciller, kriz hatları (112, 182, YEDAM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>Aile bilgilendirme, empatik iletişim ve kriz rehberi</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-2.5 px-4 bg-white group-hover:bg-neutral-900 text-neutral-900 group-hover:text-white font-bold text-xs border border-neutral-300 group-hover:border-neutral-900 transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Sağlık Profesyoneli Değilim (Rehber İle Başla)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Health Professional */}
            <div 
              onClick={() => onSelectMode('professional')}
              className="p-6 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-neutral-900 transition-all cursor-pointer rounded-xl flex flex-col justify-between group space-y-5 shadow-xs hover:shadow-md relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:border-black transition-all shadow-xs">
                    <Stethoscope className="w-5 h-5 text-neutral-900" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-black text-white font-bold rounded uppercase tracking-wider">
                    Sağlık Profesyoneliyim
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 font-display group-hover:text-black transition-colors">
                    Sağlık Profesyoneliyim
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Tıp hekimleri, asistanlar ve sağlık uzmanları için klinik farmakoloji, formüller, monograflar ve tanı algoritmaları.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>Klinik Hesaplayıcılar (QTc, CrCl, Lityum, Ashton)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>CYP450 Enzim Matrisi & İlaç Etkileşimleri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>Ruhsal Durum Muayenesi (MSE) & Raporlama</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>DSM-5-TR, CANMAT & Maudsley Kılavuzları</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-2.5 px-4 bg-black text-white font-bold text-xs border border-black transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:bg-neutral-800"
              >
                <span>Sağlık Profesyoneli Modülü İle Devam Et</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Footer notice */}
          <div className="text-center pt-2">
            <p className="text-[11px] text-neutral-500 font-mono">
              Dr. Doğuş Sönmez • Yalnızca eğitim ve bilgilendirme amaçlı akademik kaynaktır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
