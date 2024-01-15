<template>
  <ul class="content-list">
    <li
      v-for="feature of features"
      :key="feature.title"
      class="content-list-item"
    >
      <i class="fad fa-check-circle" />
      <span v-html="$t(feature.title)" />
    </li>
  </ul>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "ChecksList",
  props: { features: { required: true, type: Array } },
});
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

.content-list
  list-style: none
  padding: 0
  margin: 0
  display: flex
  flex-direction: row
  flex-wrap: wrap
  column-gap: 120px
  row-gap: $spacing-md
  justify-content: center
  @media (max-width: 768px)
    justify-content: flex-start
    text-align: left

  .content-list-item
    color: #fff
    i
      margin-right: $spacing-sm
</style>