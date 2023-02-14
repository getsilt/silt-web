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
          <h2>{{$t("global_free")}}</h2>
          <h6>&nbsp;</h6>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_upto", { amount: 50 }) }}
          {{ $t("business_pricing_verificationsMonth") }}
        </p>
        <p>
            <ul class="checklist">
                <li v-for="feature of features" :key="feature.title">{{$t(feature.title)}}</li>
            </ul>
        </p>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_minimum", { amount: "0€" }) }}
        </p>
        <p class="pepaml hint">{{ $t("business_pricing_PEPAML") }}</p>
        <demo-buttons class="vertical"/>
      </div>
      <!-- PAYED -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <h2>0,5€</h2>
          <h6>/ {{ $t("global_verification") }}</h6>
        </div>
        <p class="pricing-plan_upto">
          {{
            $t("business_pricing_between", {
              amountLow: "50",
              amountUp: "1.000",
            })
          }}
          {{ $t("business_pricing_verificationsMonth") }}
        </p>
        <p>
            <ul class="checklist">
                <li v-for="feature of features" :key="feature.title">{{$t(feature.title)}}</li>
            </ul>
        </p>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_minimum", { amount: "49€" }) }}
        </p>
        <p class="pepaml hint">{{ $t("business_pricing_PEPAML") }}</p>
        <demo-buttons class="vertical"/>
      </div>
      <!-- PREMIUM -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <h2>{{ $t("business_pricing_startingFrom", { amount: "0,2€" }) }}</h2>
          <h6>/ {{ $t("global_verification") }}</h6>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_moreThan", { amount: "10.000" }) }}
          {{ $t("business_pricing_verificationsMonth") }}
        </p>
        <p>
            <ul class="checklist">
                <li v-for="feature of features" :key="feature.title">{{$t(feature.title)}}</li>
            </ul>
        </p>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_minimum", { amount: "500€" }) }}
        </p>
        <p class="pepaml hint">{{ $t("business_pricing_PEPAML") }}</p>
        <div class="demo_cta__wrapper vertical">
          <a :href="`mailto:${getEmail()}`" target="_blank">
            <button class="accent">{{ $t("global_contactUs") }}</button>
          </a>
          <a
            target="_blank"
            href="https://app.meetzy.io/preview/3dfd0d2hgymu"
            >
            <button class="secondary">{{ $t("btn_cta_book_demo") }}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DemoButtons from "../components/DemoButtons.vue";
// Animate on scroll
// var controllerHolder;
export default {
  components: { DemoButtons },
  nuxtI18n: {
    paths: {
      en: "/pricing", // -> accessible at / (no prefix since it's the default locale)
      es: "/precios", // -> accessible at /es/sobre
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: `${this.$t("nav_link_pricing")}`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("nav_link_pricing"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("business_pricing_content"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_pricing_content"),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
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
    h2,h3,h4,h5,h6
      margin-top: 1rem
      margin-bottom: 0.5rem
      &_price
        h6
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

.pricing-plan:last-child
  background: $color-grey-lighten-3
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
</style>