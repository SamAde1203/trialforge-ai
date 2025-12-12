export type TrialParams = {
  n_patients: number;
  weeks: number;
  endpoint: 'hba1c' | 'weight' | 'glucose' | 'custom';
  arms: { name: string; effect_size: number }[];
  baseline: number;
  sd: number;
  alpha?: number;
};

export type ConsortData = {
  assessed: number;
  randomized: number;
  completed: number;
  analyzed: number;
};

export type SimulationResult = {
  power: number;
  powerCI: [number, number];
  avgDropouts: number;
  nPerArm: number;
  consort: ConsortData;
  simulations: number;
  timestamp: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  meta: {
    timestamp: string;
    version: string;
    simulationCount?: number;
  };
};