<template>
  <div class="shopcart-view container">
    <h1>Корзина</h1>

    <ui-loading :is-loading="isLoading">
      <div v-if="isVisiblePlaceholder">Корзина пуста</div>

      <div v-else class="shopcart-view__inner">
        <product-list
          :list="shopcartCollection"
          @put-to-shopcart="putToShopcart($event)"
          @add-to-favorites="addToFavorites($event)"
          @remove-from-favorites="removeFromFavorites($event)"
        />

        <aside>
          <ShopcartSummary
            class="shopcart-view__summary"
            :count="shopcartTotalCount"
            :sum="shopcartTotalSum"
            @order="order()"
          />
        </aside>
      </div>
    </ui-loading>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import ProductList from "@/components/product/ProductList";
import ShopcartSummary from "@/components/ShopcartSummary";
import UiLoading from "@/components/ui/UiLoading";

export default {
  name: "ShopcartView",
  components: {
    ProductList,
    ShopcartSummary,
    UiLoading,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.products.isLoading,
    }),
    ...mapGetters({
      shopcartCollection: "products/shopcartCollection",
      shopcartTotalCount: "products/shopcartTotalCount",
      shopcartTotalSum: "products/shopcartTotalSum",
    }),

    hasProducts() {
      return this.shopcartCollection.length > 0;
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

    order() {
      const records = this.shopcartCollection.map(
        ({ product, counter }) => `${product.name} x ${counter}`
      );

      alert(records.join(", "));
    },
  },
};
</script>

<style>
.shopcart-view__inner {
  display: grid;
  grid-template-columns: 1fr 20rem;
  gap: var(--gutter-xl);
}

.shopcart-view__summary {
  position: sticky;
  top: 1rem;
}
</style>
