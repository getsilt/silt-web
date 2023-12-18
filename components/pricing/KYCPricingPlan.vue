<template>
  <div>
    <div class="section-headers">
      <h1 class="h2">{{ $t("business_pricing_title") }}</h1>
      <p>{{ $t("business_pricing_content") }}</p>
    </div>
    <div class="card">
      <div>
        <div class="pricing-plan_price">
          <h2>0,50€</h2>
          <h6>/ {{ $t("global_userVerification") }}</h6>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_min_quote") }}
          <b>199€</b>
          / {{ $t("business_pricing_month") }}
        </p>
        <p>
          {{ $t("global_amount_month", { amount: 1 }) }}
          <b>{{ $t("global_free") }}</b>
        </p>
      </div>
      <ChecksList :features="features" />
      <DemoButtons />
    </div>
    <div class="tabs-wrapper tab-md tab-squared">
      <div class="tab-wrapper">
        <VTab
          activeTabName="pricing"
          @onActiveTabChange="activeTabName = $event"
          :isSelected="activeTabName"
        >
          <span>{{ $t("calculator_price_list_tab_title") }}</span>
        </VTab>
      </div>
      <div class="tab-wrapper">
        <VTab
          activeTabName="calculator"
          @onActiveTabChange="activeTabName = $event"
          :isSelected="activeTabName"
        >
          <span>{{ $t("calculator_calculator_tab_title") }}</span>
        </VTab>
      </div>
    </div>
    <PricingTable v-if="activeTabName === 'pricing'" />
    <PriceCalculator v-if="activeTabName === 'calculator'" />
  </div>
</template>
<script>
import Vue from "vue";
import PricingTable from "./PricingTable.vue";
import DemoButtons from "../DemoButtons.vue";
import VTab from "../VTab.vue";
import PriceCalculator from "./PriceCalculator.vue";
import ChecksList from "../ChecksList.vue";

export default Vue.extend({
  name: "KYCPricingPlan",
  data() {
    return {
      activeTabName: "pricing",
      features: [
        {
          title: "business_highlights_autoverification_title",
        },
        {
          title: "business_highlights_digitalIdentity_title",
        },
        {
          title: "business_highlights_dataExtraction_title",
        },
        {
          title: "business_highlights_pictureQuality_title",
        },
        {
          title: "business_highlights_faceRecognition_title",
        },
        {
          title: "business_highlights_authenticity_title",
        },
        {
          title: "business_highlights_3DFace_title",
        },
        {
          title: "business_highlights_liveness_title",
        },
        {
          title: "business_highlights_siltlist_title",
        },
        {
          title: "business_highlights_updated_title",
        },
      ],
    };
  },
  components: { PricingTable, DemoButtons, VTab, PriceCalculator, ChecksList },
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
  .pricing-plan_price
    display: flex
    justify-content: center
    align-items: flex-end
    h2,h6
      margin-bottom: 0
.pricing-plans_container
  display: flex
  justify-content: center
  flex-wrap: wrap
  width: 100%

.pepaml, .checklist
  max-width: 500px
  text-align: left
  font-size: 0.9rem
  color: $color-grey-lighten-1

.checklist
  padding-left: 0

.tabs-wrapper
  justify-content: center
  margin: $spacing-lg 0
.tab-wrapper:last-child
  margin-right: 0
.tab-wrapper
  margin-right: $spacing-md
</style>