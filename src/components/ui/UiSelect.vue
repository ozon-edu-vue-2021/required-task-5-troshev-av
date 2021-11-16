<template>
  <select ref="field" class="ui-select" :value="value" v-on="fieldListeners">
    <option
      v-for="option in options"
      :key="`${option.value}-${option.key}`"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
import { ARRAY_PROP_DEFAULT, OPTIONS_PROP_VALIDATOR } from "@/utils/const";

export default {
  name: "UiSelect",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: ARRAY_PROP_DEFAULT,
      validator: OPTIONS_PROP_VALIDATOR,
    },
  },
  computed: {
    fieldListeners() {
      return {
        change: (event) => {
          const value = event.target.value;
          this.$emit("change", value);
        },
        focus: (event) => {
          this.$emit("focus", event);
        },
        blur: (event) => {
          this.$emit("blur", event);
        },
      };
    },
  },
};
</script>

<style>
.ui-select {
  --select-border-hsl: var(--silver-hsl);

  border: 2px solid hsl(var(--select-border-hsl));
  border-radius: 0.25rem;
  padding: 0 1rem;
  width: 100%;
  min-height: 2.5rem;
  box-sizing: border-box;
  background-color: hsl(var(--white-hsl));
  cursor: pointer;
  transition: border-color 0.15s ease;
}
</style>
