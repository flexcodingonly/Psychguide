import { ClinicalScale } from '../types';
import { MULTI_CONDITION_SCALES } from './scales/multiConditionScales';
import { DEPRESSION_SCALES } from './scales/depressionScales';
import { ANXIETY_SCALES } from './scales/anxietyScales';
import { PSYCHOSIS_SCALES } from './scales/psychosisScales';
import { OCD_SCALES } from './scales/ocdScales';
import { TRAUMA_SCALES } from './scales/traumaScales';
import { ADDICTION_SCALES } from './scales/addictionScales';
import { SCHEMA_SCALES } from './scales/schemaScales';
import { COGNITIVE_SCALES } from './scales/cognitiveScales';
import { ADHD_MANIA_SCALES } from './scales/adhdManiaScales';
import { SEXUAL_FUNCTION_SCALES } from './scales/sexualFunctionScales';
import { PERSONALITY_SCALES } from './scales/personalityScales';

export const SCALES_DATA: ClinicalScale[] = [
  ...MULTI_CONDITION_SCALES,
  ...DEPRESSION_SCALES,
  ...ANXIETY_SCALES,
  ...PSYCHOSIS_SCALES,
  ...OCD_SCALES,
  ...TRAUMA_SCALES,
  ...ADDICTION_SCALES,
  ...SCHEMA_SCALES,
  ...COGNITIVE_SCALES,
  ...ADHD_MANIA_SCALES,
  ...SEXUAL_FUNCTION_SCALES,
  ...PERSONALITY_SCALES
];

export interface ScaleCategoryMeta {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
}

export const SCALE_CATEGORIES: ScaleCategoryMeta[] = [
  { id: 'all', name: 'Tüm Ölçekler', shortLabel: 'Tümü', description: 'Klinik pratikte en sık kullanılan valide psikiyatrik derecelendirme ve tarama ölçekleri' },
  { id: 'Çoklu Durum Ölçekleri', name: 'Çoklu Durum Ölçekleri', shortLabel: 'Çoklu Durum', description: 'BFCRS Katatoni, CGI, Deliryum DRS-R-98, HADS, SCL-90-R, SMMT/MMSE' },
  { id: 'Depresyon Ölçekleri', name: 'Depresyon Ölçekleri', shortLabel: 'Depresyon', description: 'PHQ-9, HAM-D-17, MADRS, Beck İntihar (BSS), Edinburgh Doğum Sonrası (EDSDÖ), Geriatrik (GDS-30)' },
  { id: 'Anksiyete Ölçekleri', name: 'Anksiyete Ölçekleri', shortLabel: 'Anksiyete', description: 'GAD-7, Beck Anksiyete (BAI), HAM-A, Panik Şiddet (PDSS), Somatizasyon (PHQ-15), Çocuk Sosyal Anksiyete (SASC-R)' },
  { id: 'Psikoz Ölçekleri', name: 'Psikoz Ölçekleri', shortLabel: 'Psikoz', description: 'İçgörü Değerlendirme (SAI), BPRS, Pozitif ve Negatif Sendrom Ölçeği (PANSS)' },
  { id: 'Obsesif Kompulsif Bozukluk (OKB) Ölçekleri', name: 'Obsesif Kompulsif Bozukluk (OKB)', shortLabel: 'OKB', description: 'Yale-Brown Obsesif Kompulsif Ölçeği (Y-BOCS) ve Çocuklar İçin (Ç-YBOCS)' },
  { id: 'Travma Ölçekleri', name: 'Travma Ölçekleri', shortLabel: 'Travma & Dissosiyasyon', description: 'CAPS-5 (TSSB), CTQ-28 Çocukluk Travması, DBGÇ Dissosiyasyon, Komplike Yas (ICG), LEC-5' },
  { id: 'Bağımlılık Ölçekleri', name: 'Bağımlılık Ölçekleri', shortLabel: 'Bağımlılık', description: 'AUDIT Alkol Taraması, CIWA-Ar Alkol Yoksunluğu, DAST-10 Madde Taraması, Fagerström (FNBT) Nikotin' },
  { id: 'Şema Ölçekleri', name: 'Şema Ölçekleri', shortLabel: 'Şema Terapisi', description: 'Young Şema Ölçeği (YSÖ-KF3), Bilişsel Çarpıtmalar (BCSL), Kişilik İnançları (PBQ-KF)' },
  { id: 'Bilişsel Değerlendirme Ölçekleri', name: 'Bilişsel Değerlendirme Ölçekleri', shortLabel: 'Bilişsel Değerlendirme', description: 'Düşünce Özellikleri Ölçeği (DÖÖ - TAF ve Ruminasyon)' },
  { id: 'DEHB Ölçekleri', name: 'DEHB Ölçekleri', shortLabel: 'DEHB', description: 'Erişkin DEHB Öz-Bildirim Ölçeği (ASRS-v1.1)' },
  { id: 'Mani Ölçekleri', name: 'Mani Ölçekleri', shortLabel: 'Mani / Bipolar', description: 'Young Mani Derecelendirme Ölçeği (YMRS-11)' },
  { id: 'Cinsel İşlev Ölçekleri', name: 'Cinsel İşlev Ölçekleri', shortLabel: 'Cinsel İşlev', description: 'Arizona Cinsel Yaşantılar Ölçeği (ACYÖ / ASEX - Antidepresan Yan Etkileri)' },
  { id: 'Kişilik Ölçekleri', name: 'Kişilik Ölçekleri', shortLabel: 'Kişilik Bozuklukları', description: 'Borderline Şiddet Değerlendirme (BEST), DSM-5 Kişilik Envanteri (PID-5)' }
];
