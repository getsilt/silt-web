<template id="switch-button">
  <div class="switch-button-control">
    <div
      class="switch-button-label-wrapper"
      :class="{ active: isEnabled }"
      @click="toggle"
    >
      <p class="switch-button-label">{{ leftCopy }}</p>
    </div>
    <div
      class="switch-button-label-wrapper"
      :class="{ active: !isEnabled }"
      @click="toggle"
    >
      <p class="switch-button-label">{{ rightCopy }}</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "VSwitch",
  model: {
    prop: "isEnabled",
    event: "toggle",
  },
  props: {
    isEnabled: { type: Boolean },
    leftCopy: { type: String },
    rightCopy: { type: String },
  },
  methods: {
    toggle() {
      this.$emit("toggle", !this.isEnabled);
    },
  },
});
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'
.switch-button-control
    display: flex
    width: fit-content
    justify-content: space-between
    background: rgba($color-primary, .2)
    border-radius: $radius-lg
    padding: 5px
    gap: 5px
    align-items: center
    .switch-button-label-wrapper
        transition: 0.3s ease-in-out
        border-radius: $radius-md
        padding: $spacing-xsm $spacing-md
        .switch-button-label
            font-family: $font-bold
            margin: 0 0 -2px
        &:hover
            cursor: pointer
            background: $color-primary
            .switch-button-label
                color: #fff
        &.active
            background: $color-primary
            .switch-button-label
                color: #fff
</style>