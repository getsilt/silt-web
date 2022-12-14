<template>
  <div
    class="tab"
    @click="$emit('onActiveTabChange', activeTabName)"
    :class="{ active: activeTabName === isSelected }"
  >
    <slot />
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "v-tab",
  props: {
    activeTabName: { required: true },
    isSelected: { require: true },
  },
});
</script>
