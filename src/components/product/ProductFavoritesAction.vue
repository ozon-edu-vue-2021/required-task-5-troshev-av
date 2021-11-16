<template>
  <button class="product-favorites-action" @click="_emitClick($event)">
    <component :is="iconTagName" class="product-favorites-action__icon" />
  </button>
</template>

<script>
import FavoriteIcon from "../icons/FavoriteIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";

export default {
  name: "ProductFavoritesAction",
  components: {
    FavoriteIcon,
    FavoriteOutlineIcon,
  },
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconTagName() {
      return this.isFavorite ? "favorite-icon" : "favorite-outline-icon";
    },
  },
  methods: {
    _emitClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style>
.product-favorites-action {
  position: relative;
  height: 2rem;
  width: 2rem;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

.product-favorites-action__icon {
  position: absolute;
  left: 50%;
  top: 50%;
  color: hsl(var(--danger-hsl));
  transform: translate(-50%, -50%);
}
</style>
