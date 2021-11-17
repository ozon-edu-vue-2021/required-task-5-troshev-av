import Vue from "vue";
import Vuex from "vuex";

import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async init({ dispatch }) {
      try {
        await dispatch("products/load");
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: { products },
});
