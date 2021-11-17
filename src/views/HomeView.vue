<template>
  <div class="home-view container">
    <h1>Список товаров</h1>

    <product-list
      :list="productsCollection"
      format="grid"
      :is-loading="isLoading"
      @put-to-shopcart="putToShopcart($event)"
      @add-to-favorites="addToFavorites($event)"
      @remove-from-favorites="removeFromFavorites($event)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

import ProductList from "@/components/product/ProductList";

export default {
  name: "HomeView",
  components: {
    ProductList,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.products.isLoading,
    }),
    ...mapGetters({
      productsCollection: "products/collection",
    }),
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
