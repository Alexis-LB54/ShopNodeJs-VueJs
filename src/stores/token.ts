import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    token: "",
  }),
  persist: true,
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    setToken(tk: string) {
      this.token === tk;
    },
    setRefreshToken(rtk: string) {
      this.token === rtk;
    },
  },
});