<template>
  <div>
    <div class="section-headers">
      <h1 class="h2" v-html="$t('kyb_claim1')"></h1>
      <p v-html="$t('kyb_claim2')" />
    </div>
    <div class="card">
      <ChecksList :features="features" />
      <DemoButtons />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ChecksList from "../ChecksList.vue";
import DemoButtons from "../DemoButtons.vue";

export default Vue.extend({
  name: "KYBPricingPlan",
  data() {
    return {
      features: [
        {
          title: "business_pricing_kyb_check_11",
        },
        {
          title: "business_pricing_kyb_check_8",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_title",
        },
        {
          title: "kyb_solution_carousel_LLM_subtitle",
        },
        {
          title: "kyb_solution_carousel_database_subtitle",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_3",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_4",
        },
        {
          title: "business_pricing_kyb_check_6",
        },
        {
          title: "business_highlights_siltlist_title",
        },
        {
          title: "business_pricing_kyb_check_9",
        },
        {
          title: "business_pricing_kyb_check_10",
        },
        {
          title: "business_pricing_kyb_check_1",
        },
        {
          title: "business_pricing_kyb_check_2",
        },
        {
          title: "business_pricing_kyb_check_12",
        },
        {
          title: "business_pricing_kyb_check_13",
        },
        {
          title: "business_pricing_kyb_check_3",
        },
        {
          title: "business_pricing_kyb_check_7",
        },
      ],
    };
  },
  components: { ChecksList, DemoButtons },
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
  background: $bg-dark
</style>