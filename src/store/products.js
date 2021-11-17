import Vue from "vue";

import { fetchProducts } from "@/services/products";

export default {
  namespaced: true,
  state: () => ({
    list: [],
    shopcart: {
      // [id]: count
    },
    favorites: [
      // id
    ],
    isLoading: false,
  }),
  getters: {
    collection: ({ list, shopcart, favorites }) =>
      list.map((product) => {
        const productId = product.id;

        return {
          product,
          counter: shopcart[productId] || 0,
          favorite: favorites.includes(productId),
        };
      }),

    shopcartCollection: (_state, { collection }) =>
      collection.filter(({ counter }) => counter > 0),

    shopcartTotalCount: (_state, { shopcartCollection }) =>
      shopcartCollection.reduce((sum, { counter }) => sum + counter, 0),

    shopcartTotalSum: (_state, { shopcartCollection }) =>
      shopcartCollection.reduce(
        (sum, { product, counter }) => sum + product.cost * counter,
        0
      ),

    favoritesCollection: (_state, { collection }) =>
      collection.filter(({ favorite }) => favorite),

    favoritesTotalCount: (_state, { favoritesCollection }) =>
      favoritesCollection.length,
  },
  mutations: {
    setLoadingState(state, value) {
      state.isLoading = value;
    },
    setList(state, value) {
      state.list = value;
    },
    putToShopcart({ shopcart }, { id, count }) {
      if (count <= 0) Vue.delete(shopcart, id);
      else Vue.set(shopcart, id, count);
    },
    addToFavorites({ favorites }, id) {
      favorites.push(id);
    },
    removeFromFavorites(state, id) {
      state.favorites = state.favorites.filter((item) => item !== id);
    },
  },
  actions: {
    async load({ commit }) {
      commit("setLoadingState", true);

      try {
        const goods = await fetchProducts();
        commit("setList", goods);
      } finally {
        commit("setLoadingState", false);
      }
    },
  },
};
