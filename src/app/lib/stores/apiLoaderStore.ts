import { create } from 'zustand';

interface ApiLoaderState {
  loadingCount: number;
  errorState: ErrorStateTypes;
  errMessage: string | null;
  start: () => void;
  stop: () => void;
  error: (errState: ErrorStateTypes, msg?: string) => void;
}

export enum ErrorStateTypes {
  NoError,
  Login,
  Other,
}

export const useApiLoaderStore = create<ApiLoaderState>((set) => ({
  loadingCount: 0,
  errorState: ErrorStateTypes.NoError,
  errMessage: null,
  start: () => set((state) => ({ loadingCount: state.loadingCount + 1 })),
  stop: () =>
    set((state) => ({
      loadingCount: Math.max(0, state.loadingCount - 1),
    })),
  error: (errState, msg) =>
    set(() => ({
      errorState: errState,
      errMessage: msg,
    })),
}));
