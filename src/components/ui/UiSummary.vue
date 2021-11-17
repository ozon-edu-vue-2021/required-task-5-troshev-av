<template>
  <div class="ui-summary">
    <div v-if="title" class="ui-summary__title ui-summary__unit">
      {{ title }}
    </div>

    <ul v-if="hasDetails" class="ui-summary__details-list ui-summary__unit">
      <li
        v-for="row in details"
        :key="`${row.value}-${row.label}`"
        class="ui-summary__details-item"
      >
        <span class="ui-summary__label">{{ row.label }}</span>
        <span class="ui-summary__value">{{ row.value }}</span>
      </li>
    </ul>

    <div v-if="$slots.action" class="ui-summary__action ui-summary__unit">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
import {
  ARRAY_PROP_DEFAULT,
  SUMMARY_DETAILS_PROP_VALIDATOR,
} from "@/utils/const";

export default {
  name: "UiSummary",
  props: {
    title: {
      type: String,
      default: null,
    },
    details: {
      type: Array,
      default: ARRAY_PROP_DEFAULT,
      validator: SUMMARY_DETAILS_PROP_VALIDATOR,
    },
  },
  computed: {
    hasDetails() {
      return this.details.length > 0;
    },
  },
};
</script>

<style>
.ui-summary {
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgb(0, 0, 0, 0.1);
}

.ui-summary__unit:nth-child(1n + 2) {
  margin-top: 1rem;
}

.ui-summary__title {
  font-size: 1.5em;
  font-weight: 700;
}

.ui-summary__details-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.ui-summary__details-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  white-space: nowrap;
}

.ui-summary__label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.ui-summary__value {
  margin-left: 1rem;
  font-weight: 700;
}

.ui-summary__action {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}
</style>
