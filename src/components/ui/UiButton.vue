<template>
  <button
    class="ui-button"
    :class="[`ui-button_size_${size}`]"
    :type="type"
    v-on="buttonListeners"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].includes(value);
      },
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "small"].includes(value);
      },
    },
  },
  computed: {
    buttonListeners() {
      return {
        click: (event) => {
          this.$emit("click", event);
        },
      };
    },
  },
};
</script>

<style>
.ui-button {
  --button-height: 3rem;
  --button-padding-x: 1rem;
  --button-text-size: 1.2em;
  --button-background-hsl: var(--primary-hsl);

  border: none;
  border-radius: 0.25rem;
  padding: 0 var(--button-padding-x);
  height: var(--button-height);
  box-sizing: border-box;
  font-size: var(--button-text-size);
  font-weight: 700;
  color: hsl(var(--white-hsl));
  background-color: hsl(var(--button-background-hsl));
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease;
}

.ui-button_size_small {
  --button-padding-x: 0.75rem;
  --button-height: 2.5rem;
  --button-text-size: 1em;
}

.ui-button:hover,
.ui-button:focus-visible {
  --button-background-hsl: var(--primary-dark-hsl);
}

.ui-button:active {
  --button-background-hsl: var(--primary-extra-dark-hsl);
}
</style>
