export type NavSection = 
  | 'mse'
  | 'tables'
  | 'disorders'
  | 'interactions'
  | 'scales'
  | 'psychodynamics'
  | 'guidelines'
  | 'references';

export interface GuidelineAlgorithmStep {
  stepNumber: number;
  stepTitle: string;
  indication: string;
  recommendation: string;
  evidenceGrade: string;
  options: {
    name: string;
    classType: string;
    dosageGuide: string;
    clinicalNote: string;
  }[];
  durationBeforeSwitch: string;
  decisionPoints: string[];
}

export interface ClinicalGuideline {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Duygudurum Bozuklukları' | 'Psikotik Bozukluklar' | 'Anksiyete & Travma' | 'Nörogelişimsel' | 'Acil Psikiyatri & Kriz' | 'Bağımlılık & Toksikoloji' | 'Özel Popülasyonlar';
  sourceReference: string; // e.g. "CANMAT 2023 / APA 2024 / PsychDB Clinical Guide"
  lastUpdated: string;
  diagnosticWorkup: string[]; // Rutin tetkikler, TSH, B12, EKG vb.
  executiveSummary: string;
  corePrinciples: string[];
  algorithmSteps: GuidelineAlgorithmStep[];
  augmentationStrategies?: {
    strategyName: string;
    evidence: string;
    indication: string;
    regimen: string;
  }[];
  treatmentResistance: {
    definition: string;
    nextSteps: string[];
  };
  specialPopulations: {
    population: string;
    recommendation: string;
  }[];
  clinicalPearls: string[];
}

export interface Disorder {
  id: string;
  name: string;
  category: string;
  dsmCode: string;
  icd11Code: string;
  summary: string;
  coreCriteria: string[];
  durationRequired: string;
  exclusions: string[];
  subtypesOrSpecifiers?: string[];
  differentialDiagnosis: {
    condition: string;
    distinguishingFeatures: string;
  }[];
  firstLineTreatments: {
    category: 'Farmakoterapi' | 'Psikoterapi' | 'Biyolojik / Diğer';
    recommendation: string;
    levelOfEvidence: string;
  }[];
  clinicalPearls: string[];
}

export interface Medication {
  id: string;
  genericName: string;
  brandNamesTR: string[];
  drugClass: 
    | 'SSRI'
    | 'SNRI'
    | 'Atipik Antipsikotik (2./3. Kuşak)'
    | 'Tipik Antipsikotik (1. Kuşak)'
    | 'Duygudurum Dengeleyici'
    | 'Trisiklik Antidepresan (TSA)'
    | 'MAOI'
    | 'Diğer Antidepresan'
    | 'Benzodiazepin'
    | 'Non-Benzodiazepin Hipnotik'
    | 'DEHB İlacı'
    | 'Antikolinerjik / Düzeltici';
  indications: string[];
  startingDose: string;
  targetDose: string;
  maxDose: string;
  halfLife: string;
  metabolismEnzymes: string[];
  receptorProfile: {
    target: string;
    affinity: 'Son Derece Yüksek' | 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük' | 'Yok';
    clinicalEffect: string;
  }[];
  commonSideEffects: string[];
  blackBoxWarnings?: string[];
  monitoringLabs: string[];
  pregnancyLactation: string;
  clinicalPearls: string[];
}

export type InteractionSeverity = 'contraindicated' | 'major' | 'moderate' | 'minor';

export interface DrugInteraction {
  drugA: string;
  drugB: string;
  severity: InteractionSeverity;
  title: string;
  mechanism: string;
  clinicalRisk: string;
  management: string;
  evidenceSource: string;
}

export interface CypEnzymeProfile {
  enzyme: string;
  substrates: string[];
  inhibitorsStrong: string[];
  inhibitorsModerate: string[];
  inducers: string[];
  clinicalNote: string;
}

export interface MSEOptionGroup {
  id: string;
  title: string;
  description: string;
  options: {
    term: string;
    definition: string;
    clinicalSignificance?: string;
    sampleSentence?: string;
    anchorScore?: 0 | 1 | 2 | 3;
  }[];
}

export interface MedicolegalItem {
  norm: string;
  situation: string;
  mseDocumentation: string;
  recommendedReportLanguage: string;
}

export interface DiagnosticTensionPoint {
  issue: string;
  patternA: string;
  patternB: string;
  highYieldDistinction: string;
}

export interface DocumentationCorrection {
  commonError: string;
  whyProblematic: string;
  betterPractice: string;
}

export interface MSECaseExample {
  id: string;
  title: string;
  vignette: string;
  fullMSE: string;
  clinicalImpression: string;
  shortNotation?: string;
  acuteAction?: string;
}

export interface ClinicalScaleQuestion {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

export interface ClinicalScale {
  id: string;
  code: string;
  name: string;
  targetCondition: string;
  description: string;
  timeframe: string;
  questions: ClinicalScaleQuestion[];
  interpretation: {
    minScore: number;
    maxScore: number;
    severity: string;
    actionAdvice: string;
  }[];
  reference: string;
}

export interface AcademicReference {
  id: string;
  title: string;
  authors: string;
  journalOrPublisher: string;
  year: number;
  category: 'Kılavuz' | 'Temel Kitap' | 'Dönüm Noktası Klinik Çalışma (RCT)' | 'Meta-Analiz';
  summary: string;
  doiOrLink?: string;
  relevance: string;
}

export interface AntipsychoticEquivalence {
  genericName: string;
  chlorpromazineEq: number;
  olanzapineEq?: number;
  typicalDailyDoseRange?: string;
  sedation: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  epsRisk: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  metabolicRisk: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük';
  prolactinElevation: 'Çok Yüksek' | 'Yüksek' | 'Orta' | 'Düşük' | 'Çok Düşük' | 'Düşürür (Agonist)';
}

export interface EmergencyDifferentialRow {
  feature: string;
  serotoninSyndrome: string;
  nms: string;
  anticholinergicToxicity: string;
  malignantHyperthermia: string;
}

export interface AntidepressantSwitchStrategy {
  fromClass: string;
  toClass: string;
  strategy: 'Doğrudan Geçiş (Direct Switch)' | 'Çapraz Azaltma (Cross-Taper)' | 'Yıkama Süresi Gerekir (Washout)';
  washoutDays: number;
  instructions: string;
}

export interface BenzodiazepineEquivalence {
  name: string;
  equivalentDose: number;
  halfLifeHours: string;
  onset: 'Çok Hızlı' | 'Hızlı' | 'Orta' | 'Yavaş';
  activeMetabolite: boolean;
  clinicalUse: string;
}

export interface DefenseMechanism {
  id: string;
  name: string;
  turkishName: string;
  level: 'İlkel (Patolojik / Narsistik)' | 'İmmatür (Olgunlaşmamış)' | 'Nevrotik (Ara Düzey)' | 'Olgun (Matür)';
  definition: string;
  clinicalExample: string;
  associatedPathology: string;
  therapeuticApproach: string;
}

export interface PsychodynamicSchool {
  id: string;
  title: string;
  theorists: string;
  coreConcepts: {
    term: string;
    explanation: string;
    clinicalApplication: string;
  }[];
  clinicalRelevanceInPsychiatry: string;
}
