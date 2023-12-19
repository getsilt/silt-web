<template>
  <div class="checkbox-wrapper">
    <div
      class="checkbox-outlined"
      :class="{ active: isSelected }"
      @click="$emit('onCheckboxChange')"
    >
      <i v-if="isSelected" class="fad fa-check checkbox-selected" />
    </div>
    <span>{{ $t(`${checkBoxText}`) }}</span>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "PriceCalculatorCheckbox",
  props: {
    checkBoxText: { required: true, type: String },
    isSelected: { required: true, type: Boolean },
  },
  data() {
    return {};
  },
});
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'
.checkbox-wrapper
  display: flex
  .checkbox-outlined
    border-radius: 5px
    width: 18px
    height: 18px
    position: relative
    border: 1px solid $color-primary
    margin-right: $spacing-sm
    &.active
      background: $color-primary
    &:hover
      cursor: pointer
    .checkbox-selected
      position: absolute
      top: 3px
      left: 3px
      font-size: 10px
      color: #fff
</style>