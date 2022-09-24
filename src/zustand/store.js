import create from "zustand";

export const useStore = create((set) => ({
  accessToken: '',
  setAccessToken: (a) => set((state) => ({ accessToken: state.accessToken = a })),

}));