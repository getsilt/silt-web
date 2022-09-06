<template>
  <div class="demo_cta__wrapper">
    <nuxt-link :to="localePath({ name: 'demo' })">
      <button>{{ $t("btn_cta_demo") }}</button>
    </nuxt-link>
    <a
      target="_blank"
      class="bold-link demo-link"
      href="https://app.meetzy.io/preview/3dfd0d2hgymu"
      >{{ $t("btn_cta_book_demo") }}</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>