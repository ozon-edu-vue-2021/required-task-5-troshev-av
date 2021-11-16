<template>
  <div class="product-row">
    <div class="product-row__preview">
      <img
        class="product-row__picture"
        :src="product.preview"
        :alt="product.name"
      />
    </div>

    <div class="product-row__favorites-action">
      <product-favorites-action
        :is-favorite="isFavorite"
        @click="toggleFavoriteStatus()"
      />
    </div>

    <div class="product-row__name">{{ product.name }}</div>

    <div class="product-row__cost">{{ formattedCost }}</div>

    <div class="product-row__action">
      <product-cart-form :value="count" @change="putToShopcart($event)" />
    </div>
  </div>
</template>

<script>
import ProductCartForm from "./ProductCartForm";
import ProductFavoritesAction from "./ProductFavoritesAction";

import ProductItemMixin from "./ProductItemMixin";

export default {
  name: "ProductRow",
  mixins: [ProductItemMixin],
  components: {
    ProductCartForm,
    ProductFavoritesAction,
  },
};
</script>

<style>
.product-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.product-row__preview {
  width: 5rem;
  flex-shrink: 0;
}

.product-row__picture {
  border-radius: 0.5rem;
  width: 100%;
  vertical-align: middle;
}

.product-row__name {
  flex-grow: 1;
  font-size: 1.25em;
}

.product-row__cost {
  min-width: 5rem;
  font-weight: 700;
  white-space: nowrap;
}

.product-row__action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 7rem;
}
</style>
