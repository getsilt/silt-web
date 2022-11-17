<template>
  <div class="demo_cta__wrapper">
    <a href="https://dashboard.getsilt.com/welcome">
      <button class="demo-button">{{ $t("btn_cta_demo") }}</button>
    </a>
    <nuxt-link class="bold-link demo-link" :to="localePath({ name: 'demo' })">
      {{ $t("btn_cta_book_demo") }}
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
