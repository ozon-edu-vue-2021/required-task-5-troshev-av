<template>
  <UiSummary title="Ваша корзина" :details="details">
    <template #action>
      <UiButton label="Оформить заказ" @click="_emitOrderRequest()" />
    </template>
  </UiSummary>
</template>

<script>
import UiButton from "./ui/UiButton";
import UiSummary from "./ui/UiSummary";

import { toFormattedCurrency } from "@/utils/format";

export default {
  name: "ShopcartSummary",
  components: {
    UiButton,
    UiSummary,
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    sum: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    details() {
      return [
        { label: "Кол-во товаров", value: this.count },
        { label: "Общая сумма", value: toFormattedCurrency(this.sum) },
      ];
    },
  },
  methods: {
    _emitOrderRequest() {
      this.$emit("order");
    },
  },
};
</script>
