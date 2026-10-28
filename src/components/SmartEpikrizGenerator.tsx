import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Stethoscope, 
  ShieldAlert, 
  Calendar,
  Layers,
  Info
} from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

type TemplateType = 'initial_visit' | 'followup' | 'emergency_safety' | 'suicide_safet' | 'consultation_clp' | 'involuntary_admission';

export const SmartEpikrizGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('initial_visit');
  const [patientInitials, setPatientInitials] = useState<string>('A.K.');
  const [patientAgeGender, setPatientAgeGender] = useState<string>('32 Yaşında, Kadın');
  const [diagnosis, setDiagnosis] = useState<string>('Majör Depresif Bozukluk (Tekrarlayan, Orta Şiddette, F33.1)');
  const [mseMood, setMseMood] = useState<string>('Çökkün, anhedonik, kederli');
  const [suicideRiskLevel, setSuicideRiskLevel] = useState<string>('Düşük (Aktif plan ve niyet yok, pasif ölüm arzusu mevcut, koruyucu faktörler yüksek)');
  const [treatmentPlan, setTreatmentPlan] = useState<string>('Essitalopram 10 mg/gün (sabah tok), Bilişsel Davranışçı Terapi (BDT) randevusu, 3 hafta sonra poliklinik kontrolü.');
  const [clinicalNotes, setClinicalNotes] = useState<string>('Hasta uykuya dalmakta güçlük, sabah erken uyanma ve enerji azlığı tarifliyor. İlaç yan etkileri (ilk hafta hafif bulantı/baş ağrısı) ve 2-4 haftalık etki başlangıcı hakkında bilgilendirildi.');
  const [copied, setCopied] = useState<boolean>(false);

  const generateReportText = () => {
    const today = new Date().toLocaleDateString('tr-TR');

    if (selectedTemplate === 'initial_visit') {
      return `=== T.C. SAĞLIK BAKANLIĞI PSİKİYATRİ POLİKLİNİK İLK MUAYENE EPİKRİZİ ===
Tarih: ${today}
Protokol / Hasta Kodu: ${patientInitials} (${patientAgeGender})

1. ŞİKAYET VE ÖYKÜ (ANAMNEZ):
Hasta polikliniğimize ruhsal yakınmalar nedeniyle başvurmuştur.
Klinik Özeti: ${clinicalNotes}

2. RUHSAL DURUM MUAYENESİ (MSE):
• Genel Görünüm ve Davranış: Yaşıyla uyumlu, özbakımı doğal, göz teması kurulabiliyor.
• Duygulanım (Affekt) ve Duygudurum (Mood): ${mseMood}.
• Konuşma ve Düşünce Süreci: Konuşma hızı ve tonu doğal, çağrışımlar amaca yönelik.
• Düşünce İçeriği: Aktif hezeyan (sanrı) saptanmadı.
• Algı: Aktif varsanı (halüsinasyon) tariflenmedi.
• Bilişsel İşlevler: Kişi, yer, zaman oryantasyonu tam. Dikkat ve bellek doğal.
• İçgörü ve Yargılama: Hastalık içgörüsü tam, tedaviye istekli.

3. RİSK DEĞERLENDİRMESİ (SAFE-T):
• İntihar ve Kendine Zarar Riski: ${suicideRiskLevel}
• Şiddet ve Başkalarına Zarar Riski: Yok.

4. TANI (ICD-11 / DSM-5-TR):
${diagnosis}

5. TEDAVİ PLANI VE ÖNERİLER:
• Farmakoterapi: ${treatmentPlan}
• Psiko-eğitim: İlacın düzenli kullanımı, alkolden kaçınma ve acil durumlarda 112/acil servise başvuru bilgisi verildi.
• Kontrol Planı: Planlanan kontrol randevusunda yanıt değerlendirilecektir.

Kaşe / İmza: Psikiyatri Uzmanı Dr.`;
    }

    if (selectedTemplate === 'followup') {
      return `=== PSİKİYATRİ POLİKLİNİK KONTROL & TEDAVİ YANIT EPİKRİZİ ===
Tarih: ${today}
Hasta: ${patientInitials} (${patientAgeGender})
Tanı: ${diagnosis}

1. KONTROL DEĞERLENDİRMESİ & SEMPTOM SEYRİ:
${clinicalNotes}

2. TEDAVİ YANITI VE TOLERABİLİTE:
• İlaç Uyumu: Düzenli kullanıyor.
• Yan Etki Sorgulaması: Ciddi yan etki (QTc uzaması, akatizi, alerji) bildirilmedi.
• MSE Özeti: Duygudurum ${mseMood}. Bilişsel işlevler stabil.
• İntihar Riski: ${suicideRiskLevel}.

3. KARAR VE İDAME PLANI:
${treatmentPlan}

Kaşe / İmza: Psikiyatri Uzmanı Dr.`;
    }

    if (selectedTemplate === 'suicide_safet') {
      return `=== SAFE-T İNTİHAR RİSK DEĞERLENDİRME & GÜVENLİK PROTOKOLÜ ===
Tarih / Saat: ${today}
Hasta: ${patientInitials} (${patientAgeGender})

1. BELİRLENEN RİSK FAKTÖRLERİ:
• Özkıyım Düşüncesi / Niyeti: ${suicideRiskLevel}
• Çaresizlik ve Umutsuzluk Düzeyi: Değerlendirildi.
• Madde / Alkol Kötüye Kullanımı: Sorgulandı.
• Ailede İntihar Öyküsü: Bilgi alındı.

2. BELİRLENEN KORUYUCU FAKTÖRLER:
• Aile ve sosyal destek sistemi mevcut.
• Yaşam amaçları ve inanç bağları koruyucu düzeyde.
• Sağlık profesyoneline yardım arayışında bulundu.

3. GÜVENLİK PLANI (STANLEY-BROWN PROTOKOLÜ):
1. Kriz anında evdeki kesici/delici alet ve ilaçlar aile yakını kontrolüne verildi.
2. Acil kriz anında aranacak telefonlar paylaşıldı: 112 Acil Yardım.
3. Hasta ve refakatçisine yalnız kalmaması konusunda kesin sözlü bilgilendirme yapıldı.
4. Tedavi ve İzlem: ${treatmentPlan}

Kaşe / İmza: Psikiyatri Uzmanı Dr.`;
    }

    if (selectedTemplate === 'consultation_clp') {
      return `=== KONSÜLTASYON-LİYEZON PSİKİYATRİSİ (CLP) CEVAP NOTU ===
Tarih: ${today}
Konsültasyon İstenen Servis: Dahiliye / Cerrahi
Hasta: ${patientInitials} (${patientAgeGender})

1. KONSÜLTASYON NEDENİ:
Klinik serviste yatan hastanın ajitasyon / konfüzyon / depresif belirtiler açısından değerlendirilmesi.

2. KLİNİK VE MSE DEĞERLENDİRMESİ:
${clinicalNotes}
MSE: Duygudurum ${mseMood}. Oryantasyon ve dikkat durumu gözden geçirildi.

3. TANI & KANAAT:
${diagnosis}

4. İLAÇ ETKİLEŞİMİ & TEDAVİ ÖNERİLERİ:
• Mevcut primer tıbbi tedaviyle (antibiyotik, antikoagülan vb.) CYP etkileşimi ve QTc aralığı kontrol edildi.
• Önerilen Psikotrop: ${treatmentPlan}
• Vital bulgular ve elektrolit (Na, K, Mg) dengesi takip edilmelidir.
• İhtiyaç halinde tekrar konsülte edilmesi uygundur.

Kaşe / İmza: Psikiyatri Uzmanı Dr.`;
    }

    // Involuntary admission
    return `=== T.C. MEDENİ KANUN 432 İSTEMSİZ YATIŞ / GÖZLEM KANAAT RAPORU ===
Tarih: ${today}
Hasta: ${patientInitials} (${patientAgeGender})

1. TIBBİ DEĞERLENDİRME:
Hasta ${clinicalNotes} tablosuyla getirilmiştir.
Ruhsal Durum Muayenesi (MSE): Gerçeği değerlendirme yetisi ileri derecede bozulmuş olup, ağır psikotik / manik eksitasyon tablosundadır. Hastanın hastalık içgörüsü YOKTUR.

2. GEREKÇE:
Kişinin mevcut ağır psikiyatrik tablosu nedeniyle kendisine (özkıyım / özbakım yetersizliği) ve/veya çevresine (şiddet / saldırganlık) ciddi ve yakın tehlike oluşturduğu tespit edilmiştir. Ayaktan tedavi uyumu imkansızdır.

3. KANAAT:
Türk Medeni Kanunu'nun 432. maddesi kapsamında, toplum ve hasta güvenliği açısından kapalı psikiyatri servisinde İSTEMSİZ YATIŞ VE TEDAVİSİ (Korumacı Yatış) tıbben zorunlu ve ivedidir.

Kaşe / İmza: Psikiyatri Uzmanı Dr.`;
  };

  const handleCopy = async () => {
    const text = generateReportText();
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-xl shadow-md border border-neutral-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-800 border border-neutral-600 text-[10px] font-mono font-bold uppercase rounded text-neutral-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Klinisyen Zaman Tasarrufu • EMR & HBYS Uyumlu</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
              Akıllı Epikriz & Klinik Rapor Şablonları Motoru
            </h2>
            <p className="text-xs text-neutral-300 max-w-2xl">
              Poliklinik ilk muayene, kontrol epikrizi, SAFE-T intihar güvenlik planı, CLP konsültasyon ve TMK 432 istemsiz yatış notunu tek tıkla yapılandırıp panoya kopyalayın.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-white text-black hover:bg-neutral-100 font-bold text-xs rounded-lg transition-all shrink-0 cursor-pointer shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-900" />}
            <span>{copied ? 'Rapor Panoya Kopyalandı' : 'Epikrizi Kopyala (Ctrl+C)'}</span>
          </button>
        </div>
      </div>

      {/* Template Type Selector */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'initial_visit', label: '1. Poliklinik İlk Muayene' },
          { id: 'followup', label: '2. Kontrol & İlaç Yanıt Epikrizi' },
          { id: 'suicide_safet', label: '3. SAFE-T İntihar Güvenlik Belgesi' },
          { id: 'consultation_clp', label: '4. CLP Konsültasyon Cevap Notu' },
          { id: 'involuntary_admission', label: '5. TMK 432 İstemsiz Yatış Raporu' }
        ].map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedTemplate(t.id as TemplateType)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              selectedTemplate === t.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs font-bold'
                : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Quick Input Fields */}
      <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-3 shadow-xs">
        <h3 className="text-xs font-bold font-mono uppercase text-neutral-700 flex items-center gap-1.5">
          <Stethoscope className="w-4 h-4 text-neutral-800" />
          <span>Hızlı Klinik Parametreler (Otomatik Not Entegrasyonu)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Hasta Kod / Baş Harfleri</label>
            <input
              type="text"
              value={patientInitials}
              onChange={(e) => setPatientInitials(e.target.value)}
              className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-mono"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Yaş & Cinsiyet</label>
            <input
              type="text"
              value={patientAgeGender}
              onChange={(e) => setPatientAgeGender(e.target.value)}
              className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold text-neutral-600 block mb-1">İntihar Risk Düzeyi (SAFE-T)</label>
            <select
              value={suicideRiskLevel}
              onChange={(e) => setSuicideRiskLevel(e.target.value)}
              className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900"
            >
              <option value="Düşük (Aktif plan ve niyet yok, koruyucu faktörler güçlü)">Düşük Risk</option>
              <option value="Orta (Belirli düşünceler var, niyet belirsiz, güvenlik planı yapıldı)">Orta Risk (Güvenlik Planı)</option>
              <option value="Yüksek (Aktif intihar planı ve yöntemi mevcut, yatış endikasyonu)">Yüksek Risk (Yatış)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Tanı (DSM-5 / ICD-11)</label>
            <input
              type="text"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 font-semibold"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Duygulanım / MSE Bulgusu</label>
            <input
              type="text"
              value={mseMood}
              onChange={(e) => setMseMood(e.target.value)}
              className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900"
            />
          </div>
        </div>

        <div>
          <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Tedavi Planı & Reçete Edilen İlaç</label>
          <input
            type="text"
            value={treatmentPlan}
            onChange={(e) => setTreatmentPlan(e.target.value)}
            className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900"
          />
        </div>

        <div>
          <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Klinik Notlar / Anamnez Detayı</label>
          <textarea
            rows={2}
            value={clinicalNotes}
            onChange={(e) => setClinicalNotes(e.target.value)}
            className="w-full p-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 resize-none"
          />
        </div>
      </div>

      {/* Generated Report Preview Area */}
      <div className="border border-neutral-200 bg-white rounded-xl overflow-hidden shadow-xs">
        <div className="p-3 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-neutral-700 uppercase flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-neutral-900" />
            <span>Oluşturulan Canlı Epikriz Metni (HBYS / E-Nabız / Epikriz Formatı)</span>
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs font-bold text-neutral-900 hover:text-black flex items-center gap-1 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>Kopyala</span>
          </button>
        </div>

        <pre className="p-5 text-xs font-mono text-neutral-800 whitespace-pre-wrap leading-relaxed bg-[#fbfbfd] max-h-96 overflow-y-auto select-all">
          {generateReportText()}
        </pre>
      </div>
    </div>
  );
};
