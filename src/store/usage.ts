import { create } from "zustand";

interface BearState {
  usage: number;
  increase: (by: number) => void;
  descrease: (by: number) => void;
}

export const useUsageStore = create<BearState>()((set) => ({
  usage: 3,
  increase: (by) => set((state) => ({ usage: state.usage + by })),
  descrease: (by) => set((state) => ({ usage: state.usage - by })),
}));
