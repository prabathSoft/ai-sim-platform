import { create } from "zustand";

type ConfigState = {
  learningRate: number;
  epochs: number;
  batchSize: number;
  activation: string;
  setLearningRate: (v: number) => void;
  setEpochs: (v: number) => void;
  setBatchSize: (v: number) => void;
  setActivation: (v: string) => void;
};

export const useConfigStore = create<ConfigState>((set) => ({
  learningRate: 0.03,
  epochs: 20,
  batchSize: 10,
  activation: "tanh",

  setLearningRate: (v) => set({ learningRate: v }),
  setEpochs: (v) => set({ epochs: v }),
  setBatchSize: (v) => set({ batchSize: v }),
  setActivation: (v) => set({ activation: v })
}));
