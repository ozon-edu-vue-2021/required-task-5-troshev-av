<template>
  <ui-button
    v-if="!isVisibleCounter"
    label="В корзину"
    size="small"
    @click="_emitValue(1)"
  />

  <ui-select v-else v-model="innerValue" :options="counterOptions" />
</template>

<script>
import UiButton from "@/components/ui/UiButton";
import UiSelect from "@/components/ui/UiSelect";

export default {
  name: "ProductCartForm",
  components: {
    UiButton,
    UiSelect,
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
      default: 10,
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value?.toString();
      },
      set(value) {
        this._emitValue(+value);
      },
    },
    isVisibleCounter() {
      return this.value > 0;
    },
    counterOptions() {
      const { min, max } = this;
      const length = max - min + 1;

      return Array.from({ length }, (_el, index) => {
        const value = `${min + index}`;
        return { label: value, value };
      });
    },
  },
  methods: {
    _emitValue(value) {
      this.$emit("change", value);
    },
  },
};
</script>
