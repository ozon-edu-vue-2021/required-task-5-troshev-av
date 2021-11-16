<template>
  <ui-loading class="product-list" :is-loading="isLoading">
    <div
      class="product-list__list"
      :class="[`product-list__list_${format}`]"
      key="list"
    >
      <component
        v-for="item in list"
        :key="item.product.id"
        :is="itemTag"
        :product="item.product"
        :count="item.counter"
        :is-favorite="item.favorite"
        @update:count="_putToShopcart(item.product.id, $event)"
        @update:is-favorite="_setFavoritesStatus(item.product.id, $event)"
      />
    </div>
  </ui-loading>
</template>

<script>
import ProductCartForm from "./ProductCartForm";
import ProductCell from "./ProductCell";
import ProductFavoritesAction from "./ProductFavoritesAction";
import ProductRow from "./ProductRow";
import UiLoading from "../ui/UiLoading";

import { ARRAY_PROP_DEFAULT, PRODUCT_LIST_FORMAT_DEFAULT } from "@/utils/const";

export default {
  name: "ProductList",
  components: {
    ProductCartForm,
    ProductCell,
    ProductFavoritesAction,
    ProductRow,
    UiLoading,
  },
  props: {
    list: {
      type: Array,
      default: ARRAY_PROP_DEFAULT,
    },
    format: {
      type: String,
      default: PRODUCT_LIST_FORMAT_DEFAULT,
      validator: (value) => value === "list" || value === "grid",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    itemTag() {
      return this.format === "grid" ? "product-cell" : "product-row";
    },
  },
  methods: {
    _putToShopcart(id, count) {
      this.$emit("put-to-shopcart", { id, count });
    },
    _setFavoritesStatus(id, value) {
      const eventName = value ? "add-to-favorites" : "remove-from-favorites";
      this.$emit(eventName, id);
    },
  },
};
</script>

<style>
.product-list__list {
  --product-list-columns-length: 1;
  --product-list-gutter-y: var(--gutter);

  display: grid;
  grid-template-columns: repeat(var(--product-list-columns-length), 1fr);
  gap: var(--product-list-gutter-y) var(--gutter);
}

.product-list__list_grid {
  --product-list-columns-length: 3;
  --product-list-gutter-y: var(--gutter-xl);
}
</style>
