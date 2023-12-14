<template>
  <div>
    <div class="section-headers">
      <h1 class="h2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <p>{{ $t("business_pricing_content") }}</p>
      <nuxt-link :to="localePath({ name: 'demo' })">
        <button class="primary">{{ $t("btn_cta_book_demo") }}</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "KYBPricingPlan",
  data() {
    return {};
  },
});
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

@media (max-width: 768px)
    .section-headers
        padding: $spacing-lg

.primary
    margin-top: $spacing-xlg
</style>