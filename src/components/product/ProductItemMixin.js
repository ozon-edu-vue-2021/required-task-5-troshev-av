import { toFormattedCurrency } from "@/utils/format";
import { PRODUCT_OBJECT_VALIDATOR } from "@/utils/const";

export default {
  props: {
    product: {
      type: Object,
      required: true,
      validator: PRODUCT_OBJECT_VALIDATOR,
    },
    count: {
      type: Number,
      default: 0,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedCost() {
      return toFormattedCurrency(this.product.cost);
    },
  },
  methods: {
    toggleFavoriteStatus() {
      this.$emit("update:is-favorite", !this.isFavorite);
    },
    putToShopcart(value) {
      this.$emit("update:count", value);
    },
  },
};
