import { create } from "zustand";

type User = {
  id?: number;
  email?: string;
  name?: string;
  // password?: string;
};

interface UserState {
  user: User;
  setUser: (userState: User) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: {},
  setUser: (userState) => set((state) => ({ user: userState })),
  resetUser: () => set({ user: {} }),
}));
