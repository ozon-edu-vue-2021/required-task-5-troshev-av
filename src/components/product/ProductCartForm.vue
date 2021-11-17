<template>
  <ui-button
    v-if="!isVisibleCounter"
    label="В корзину"
    size="small"
    @click="_emitValue(1)"
  />

  <ui-stepper
    v-else
    :value="value"
    :min="min"
    :max="max"
    @change="_emitValue($event)"
  />
</template>

<script>
import UiButton from "@/components/ui/UiButton";
import UiStepper from "@/components/ui/UiStepper";

import { MAX_PRODUCT_COUNTER } from "@/utils/const";

export default {
  name: "ProductCartForm",
  components: {
    UiButton,
    UiStepper,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: MAX_PRODUCT_COUNTER,
    },
  },
  computed: {
    isVisibleCounter() {
      return this.value > 0;
    },
  },
  methods: {
    _emitValue(value) {
      this.$emit("change", value);
    },
  },
};
</script>
