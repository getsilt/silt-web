<template>
  <div>
    <div class="section-headers">
      <h1 class="h2">{{ $t("business_pricing_title") }}</h1>
      <p>{{ $t("business_pricing_content") }}</p>
    </div>
    <div class="pricing-plans_container">
      <!-- FREE -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <h2>{{ $t("global_free") }}</h2>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_period", { amount: 1 }) }}
        </p>
        <ul class="checklist">
          <li v-for="feature of features" :key="feature.title">
            {{ $t(feature.title) }}
          </li>
        </ul>
      </div>
      <!-- PAYED -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <h2>0,50€</h2>
          <h6>/ {{ $t("global_userVerification") }}</h6>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_min_quote") }}
          <b>199€</b>
          / {{ $t("business_pricing_month") }}
        </p>
        <ul class="checklist">
          <li v-for="feature of features" :key="feature.title">
            {{ $t(feature.title) }}
          </li>
        </ul>
      </div>
    </div>
    <DemoButtons />
    <div class="card">
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <div class="pricing-kyc-card-content">
        <ul class="pricing-kyc-card-content-list">
          <li>
            <i class="fad fa-check-circle"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li>
            <i class="fad fa-check-circle"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </ul>
        <ul class="pricing-kyc-card-content-list">
          <li>
            <i class="fad fa-check-circle"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li>
            <i class="fad fa-check-circle"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </ul>
        <ul class="pricing-kyc-card-content-list">
          <li>
            <i class="fad fa-check-circle"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li>
            <i class="fad fa-check-circle"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </ul>
      </div>
      <nuxt-link :to="localePath({ name: 'demo' })">
        <button class="primary">{{ $t("btn_cta_book_demo") }}</button>
      </nuxt-link>
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
    <PricingCalculator v-if="activeTabName === 'calculator'" />
  </div>
</template>
<script>
import Vue from "vue";
import PricingCalculator from "./PricingCalculator.vue";
import PricingTable from "./PricingTable.vue";
import DemoButtons from "../DemoButtons.vue";
import VTab from "../VTab.vue";

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
  components: { PricingCalculator, PricingTable, DemoButtons, VTab },
});
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

@media (max-width: 768px)
    .section-headers
        padding: $spacing-lg

.card
    margin: $spacing-lg
    .primary
        margin: auto
    .pricing-kyc-card-content
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        margin: $spacing-xlg 0
        .pricing-kyc-card-content-list
            list-style: none
            padding: 0
            margin: 0
.pricing-plans_container
    display: flex
    justify-content: center
    flex-wrap: wrap
    width: 100%
.pricing-plan
    flex: 0 1 auto
    border-radius: $radius-md
    padding: $spacing-lg
    margin: 2%
    max-width: 380px
    display: flex
    flex-direction: column
    justify-content: space-between
    .pricing-plan_upto
        flex: 1 1 auto
    h2,h3,h4,h5,h6
        margin-top: 1rem
        margin-bottom: 0.5rem
    .pricing-plan_price
        display: flex
        flex-wrap: wrap
        align-items: flex-end
    h6
        margin-left: $spacing-md
        margin-top: 0
    span
        font-size: 36px
        line-height: 52px
        font-family: $font-bold
        color: #333333
    p
        color: $color-grey-lighten-1
        margin: $spacing-sm 0 $spacing-md 0
        text-align: left
    .button__wrapper
        text-align: left
    button
        margin: auto
        margin-top: $spacing-md
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