<template>
  <transition
    name="fade"
    mode="out-in"
    leave-active-class="ui-placeholder_leave-active"
  >
    <div v-if="isLoading" class="ui-placeholder" key="placeholder">
      {{ placeholder }}
    </div>

    <div v-else class="ui-placeholder" key="slot">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "UiPlaceholder",
  props: {
    placeholder: {
      type: String,
      default: "Загрузка...",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.ui-placeholder_leave-active {
  transition-delay: 0.5s;
}
</style>
