<template>
  <div class="product-cell">
    <div class="product-cell__preview">
      <img
        class="product-cell__picture"
        :src="product.preview"
        :alt="product.name"
      />

      <product-favorites-action
        class="product-cell__favorites-action"
        :is-favorite="isFavorite"
        @click="toggleFavoriteStatus()"
      />
    </div>

    <div class="product-cell__cost">{{ formattedCost }}</div>

    <div class="product-cell__name">{{ product.name }}</div>

    <div class="product-cell__action">
      <product-cart-form :value="count" @change="putToShopcart($event)" />
    </div>
  </div>
</template>

<script>
import ProductCartForm from "./ProductCartForm";
import ProductFavoritesAction from "./ProductFavoritesAction";

import ProductItemMixin from "./ProductItemMixin";

export default {
  name: "ProductCell",
  mixins: [ProductItemMixin],
  components: {
    ProductCartForm,
    ProductFavoritesAction,
  },
};
</script>

<style>
.product-cell {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-cell__preview {
  position: relative;
  padding-bottom: 0.5rem;
}

.product-cell__picture {
  border-radius: 0.5rem;
  width: 100%;
  vertical-align: middle;
}

.product-cell__favorites-action {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.product-cell__cost {
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1;
}

.product-cell__name {
  font-size: 1.125em;
}
</style>
