import { defineStore } from "pinia";

export const useListeCourse = defineStore({
  id: "articleClient",
  state: () => ({
    list: [  
    ],
  }),
  persist: true,
  getters: {
    getList: (state) => state.list,
  },
  actions: {
    increment() {
    },
  },
});
