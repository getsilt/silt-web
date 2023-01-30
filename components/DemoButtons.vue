<template>
  <div class="demo_cta__wrapper">
    <a target="_blank" href="https://dashboard.getsilt.com/welcome">
      <button>{{ $t("btn_cta_demo") }}</button>
    </a>
    <a target="_blank" href="https://app.meetzy.io/preview/3dfd0d2hgymu">
      <button class="secondary">{{ $t("btn_cta_book_demo") }}</button>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.demo_cta__wrapper
  a:first-child
    margin-right: $spacing-md
</style>
