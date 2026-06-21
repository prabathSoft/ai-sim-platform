import { create } from "zustand";

type AlgorithmState = {
  selected: string | null;
  setSelected: (algo: string) => void;
};

export const useAlgorithmStore = create<AlgorithmState>((set) => ({
  selected: null,
  setSelected: (algo) => set({ selected: algo })
}));
