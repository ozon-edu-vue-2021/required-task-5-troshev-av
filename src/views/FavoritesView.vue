<template>
  <div class="favorites-view container">
    <h1>Избранное</h1>

    <ui-loading :is-loading="isLoading">
      <div v-if="isVisiblePlaceholder">Нет избранных товаров</div>

      <product-list
        v-else
        format="grid"
        :list="favoritesCollection"
        @put-to-shopcart="putToShopcart($event)"
        @add-to-favorites="addToFavorites($event)"
        @remove-from-favorites="removeFromFavorites($event)"
      />
    </ui-loading>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import ProductList from "@/components/product/ProductList";
import UiLoading from "@/components/ui/UiLoading";

export default {
  name: "FavoritesView",
  components: {
    ProductList,
    UiLoading,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.products.isLoading,
    }),
    ...mapGetters({
      favoritesCollection: "products/favoritesCollection",
    }),

    hasProducts() {
      return this.favoritesCollection.length > 0;
    },
    isVisiblePlaceholder() {
      return !this.isLoading && !this.hasProducts;
    },
  },
  methods: {
    ...mapMutations({
      putToShopcart: "products/putToShopcart",
      addToFavorites: "products/addToFavorites",
      removeFromFavorites: "products/removeFromFavorites",
    }),
  },
};
</script>
