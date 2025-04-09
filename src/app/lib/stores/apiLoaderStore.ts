import { create } from 'zustand';

interface ApiLoaderState {
  loadingCount: number;
  start: () => void;
  stop: () => void;
}

export const useApiLoaderStore = create<ApiLoaderState>((set) => ({
  loadingCount: 0,
  start: () => set((state) => ({ loadingCount: state.loadingCount + 1 })),
  stop: () => set((state) => ({
    loadingCount: Math.max(0, state.loadingCount - 1),
  })),
}));