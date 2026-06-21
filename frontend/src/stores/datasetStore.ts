import { create } from "zustand";

export type DataPoint = {
  x: number;     // normalized 0–1
  y: number;     // normalized 0–1
  label: number; // class label
};

type DatasetState = {
  points: DataPoint[];          // full dataset
  trainSplit: number;           // percentage (0–100)
  setPoints: (pts: DataPoint[]) => void;
  setTrainSplit: (v: number) => void;

  // Helpers
  getTrainData: () => DataPoint[];
  getTestData: () => DataPoint[];
};

export const useDatasetStore = create<DatasetState>((set, get) => ({
  points: [],
  trainSplit: 80,

  setPoints: (pts) => set({ points: pts }),
  setTrainSplit: (v) => set({ trainSplit: v }),

  getTrainData: () => {
    const { points, trainSplit } = get();
    const cutoff = Math.floor((trainSplit / 100) * points.length);
    return points.slice(0, cutoff);
  },

  getTestData: () => {
    const { points, trainSplit } = get();
    const cutoff = Math.floor((trainSplit / 100) * points.length);
    return points.slice(cutoff);
  }
}));
