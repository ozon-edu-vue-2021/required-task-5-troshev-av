<template>
  <div class="ui-stepper">
    <button
      class="ui-stepper__btn"
      :class="{
        'ui-stepper__btn_disabled': isDisabledDecrease,
      }"
      :disabled="isDisabledDecrease"
      tabindex="-1"
      @click="setValue(value - 1)"
    >
      <minus-icon />
    </button>

    <input
      class="ui-stepper__field"
      ref="field"
      type="number"
      :value="value"
      :step="step"
      :min="min"
      :max="max"
      inputmode="decimal"
      @change="setValue($event.target.value)"
    />

    <button
      class="ui-stepper__btn"
      :class="{
        'ui-stepper__btn_disabled': isDisabledIncrease,
      }"
      :disabled="isDisabledIncrease"
      tabindex="-1"
      @click="setValue(value + 1)"
    >
      <plus-icon />
    </button>
  </div>
</template>

<script>
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

export default {
  name: "UiStepper",
  components: {
    MinusIcon,
    PlusIcon,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    default: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isDisabledDecrease() {
      return this.value <= this.min;
    },
    isDisabledIncrease() {
      return this.value >= this.max;
    },

    trueDefaultValue() {
      let value = this.default;

      value = Math.max(value, this.min);
      value = Math.min(value, this.max);

      console.log(value);

      return value;
    },
  },
  methods: {
    _normalizeValue(value) {
      value = +value;

      if (isNaN(value)) return this.trueDefaultValue;

      const remainder = value % this.step;

      if (remainder > 0) value -= remainder;
      if (value < this.min) value = this.min;
      if (value > this.max) value = this.max;

      return value;
    },
    _emitValue(value) {
      this.$emit("change", value);
    },

    setValue(value) {
      value = this._normalizeValue(value);
      this._emitValue(value);

      this.$refs.field.value = value;
    },
  },
};
</script>

<style>
.ui-stepper {
  display: flex;
  border: 2px solid hsl(var(--silver-hsl));
  border-radius: 0.25rem;
  width: 100%;
  min-height: 2.5rem;
  box-sizing: border-box;
  background-color: hsl(var(--white-hsl));
  cursor: pointer;
}

.ui-stepper__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  width: 2.5rem;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

.ui-stepper__btn_disabled {
  opacity: 0.5;
  cursor: default;
}

.ui-stepper__field {
  flex: 1 1 auto;
  border: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  text-align: center;
  color: inherit;
  background-color: transparent;
  outline: none;
}

.ui-stepper__field {
  -moz-appearance: textfield;
}

.ui-stepper__field::-webkit-outer-spin-button,
.ui-stepper__field::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
