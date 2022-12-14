<template>
  <button
    class="v-button"
    :class="{
      loading: loading,
      'v-button-icon v-icon': icon,
      'v-button-flat': flat,
      'v-button-outline': outline,
      'v-button-link': link,
      small: small,
      large: large,
      color: color,
    }"
  >
    <div class="v-button__slot">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "v-button",
  props: {
    small: { required: false },
    large: { required: false },
    disabled: { required: false },
    loading: { required: false },
    icon: { required: false },
    flat: { required: false },
    outline: { required: false },
    link: { required: false },
    color: { required: false },
  },
});
</script>
