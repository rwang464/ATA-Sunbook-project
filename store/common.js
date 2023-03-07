import axios from "axios";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    currency: "CAD",
    destinations: [],
    //    destinationName:[],
  }),
  getters: {
    destinationData: (state) =>
      state.destinations.map((destinations) => ({
        destinationName: destinations.destinationName,
      })),
  },
  actions: {
    async getDestinations() {
      try {
        const destination = await axios.get("/api/v1/taxonomy/destinations");
        this.destinations = destination.data.data;

        console.log("success");
      } catch (error) {
        console.log(error);
      }
    },
    setCurrency(code) {
      this.currency = code;
      console.log("aaa->", this, code);
      //   commit("currency", code);
    },
  },
  mutations: {
    increment(state) {
      // mutate state
      state.count++;
    },
    currency(state, code) {
      state.currency = code;
    },
  },
});
