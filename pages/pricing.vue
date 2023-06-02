<template>
  <div class="fw-container container" id="pricing">
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
          {{ $t("business_pricing_upto", { amount: 50 }) }}
          {{ $t("business_pricing_verificationsMonth") }}<br />
          {{ $t("business_pricing_period", { amount: 3 }) }}
        </p>
        <ul class="checklist">
          <li v-for="feature of features" :key="feature.title">
            {{ $t(feature.title) }}
          </li>
        </ul>
        <demo-buttons class="vertical" />
      </div>
      <!-- PAYED -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <h2>99€</h2>
          <h6>/ {{ $t("business_pricing_month") }}</h6>
        </div>
        <p class="pricing-plan_upto">
          {{
            $t("business_pricing_upto", {
              amount: "200",
            })
          }}
          {{ $t("business_pricing_verificationsMonth") }}
        </p>
        <ul class="checklist">
          <li v-for="feature of features" :key="feature.title">
            {{ $t(feature.title) }}
          </li>
        </ul>
        <demo-buttons class="vertical" />
      </div>
    </div>
    <div class="tabs-wrapper tab-md tab-squared">
      <div class="tab-wrapper">
        <v-tab
          activeTabName="calculator"
          @onActiveTabChange="activeTabName = $event"
          :isSelected="activeTabName"
        >
          <span>{{ $t("calculator_calculator_tab_title") }}</span>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="pricing"
          @onActiveTabChange="activeTabName = $event"
          :isSelected="activeTabName"
        >
          <span>{{ $t("calculator_price_list_tab_title") }}</span>
        </v-tab>
      </div>
    </div>
    <PricingTable v-if="activeTabName === 'pricing'" />
    <PricingCalculator v-if="activeTabName === 'calculator'" />
  </div>
</template>
<script>
import DemoButtons from "../components/DemoButtons.vue";
import PricingCalculator from "../components/pricing/PricingCalculator.vue";
import VTab from "@/components/VTab.vue";
import PricingTable from "../components/pricing/PricingTable.vue";
// Animate on scroll
// var controllerHolder;
export default {
  components: { DemoButtons, PricingTable, PricingCalculator, VTab },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: `${this.$t("seo_pricing_title")}`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_pricing_title"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_pricing_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_pricing_metadescription"),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      activeTabName: "calculator",
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
  methods: {
    getEmail() {
      return this.email;
    },
  },
};
</script>
<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

@media (max-width: 768px)
  .section-headers
    padding: $spacing-lg

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

.demo_cta__wrapper
  a
    margin: $spacing-sm

.tabs-wrapper
  justify-content: center
  margin-bottom: $spacing-lg
  .tab-wrapper:last-child
    margin-right: 0
  .tab-wrapper
    margin-right: $spacing-md
</style>
