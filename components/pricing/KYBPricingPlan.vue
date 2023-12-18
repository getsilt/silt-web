<template>
  <div>
    <div class="section-headers">
      <h1 class="h2" v-html="$t('kyb_claim1')"></h1>
      <p v-html="$t('kyb_claim2')" />
    </div>
    <div class="card">
      <ChecksList :features="features" />
      <nuxt-link :to="localePath({ name: 'demo' })">
        <button class="primary">{{ $t("btn_cta_book_demo") }}</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ChecksList from "../ChecksList.vue";

export default Vue.extend({
  name: "KYBPricingPlan",
  data() {
    return {
      features: [
        {
          title: "kyb_solution_carousel_LLM_subtitle",
        },
        {
          title: "kyb_solution_carousel_database_subtitle",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_subtitle",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_2",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_3",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_4",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_1",
        },
        {
          title: "kyb_solution_carousel_safety_title",
        },
        {
          title: "business_highlights_siltlist_title",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_title",
        },
        {
          title: "business_pricing_kyb_check_1",
        },
        {
          title: "business_pricing_kyb_check_2",
        },
        {
          title: "business_pricing_kyb_check_3",
        },
        {
          title: "business_pricing_kyb_check_5",
        },
        {
          title: "business_pricing_kyb_check_6",
        },
        {
          title: "business_pricing_kyb_check_7",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_title",
        },
      ],
    };
  },
  components: { ChecksList },
});
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

@media (max-width: 768px)
  .section-headers
    padding: $spacing-lg

.card
  margin: $spacing-lg
  display: flex
  flex-direction: column
  align-items: center
  gap: $spacing-xlg
</style>