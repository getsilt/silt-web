<template>
  <div class="fw-container container" id="pricing">
      <div class="section-headers">
        <h2>{{ $t("business_pricing_title") }}</h2>
        <p>{{ $t("business_pricing_content") }}</p>
      </div>

    <div class="pricing-plans_container">
    <!-- FREE -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <span>{{$t("global_free")}}</span>
          <p>&nbsp;</p>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_upto", { verifications: 50 }) }}
          <br />{{ $t("business_pricing_verificationsMonth") }}
        </p>
        <p>
            <ul class="checklist">
                <li v-for="feature of features" :key="feature.title">{{$t(feature.title)}}</li>
            </ul>
        </p>
        <p class="pepaml hint">{{ $t("business_pricing_PEPAML") }}</p>
        <a :href="`mailto:${getEmail()}`" target="_blank">
          <div class="button__wrapper">
            <button class="primary medium">{{ $t("global_contactUs") }}</button>
          </div>
        </a>
      </div>
      <!-- PAYED -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <span>1,5€</span>
          <p>/ {{ $t("global_verification") }}</p>
        </div>
        <p class="pricing-plan_upto">
          {{
            $t("business_pricing_between", {
              verificationsLow: "50",
              verificationsUp: "1.000",
            })
          }}
          <br />{{ $t("business_pricing_verificationsMonth") }}
        </p>
        <p>
            <ul class="checklist">
                <li v-for="feature of features" :key="feature.title">{{$t(feature.title)}}</li>
            </ul>
        </p>
        <p class="pepaml hint">{{ $t("business_pricing_PEPAML") }}</p>
        <a :href="`mailto:${getEmail()}`" target="_blank">
          <div class="button__wrapper">
            <button class="primary">{{ $t("global_contactUs") }}</button>
          </div>
        </a>
      </div>
      <!-- PREMIUM -->
      <div class="pricing-plan">
        <div class="pricing-plan_price">
          <span>{{ $t("global_contactUs") }}</span>
          <p>&nbsp;</p>
        </div>
        <p class="pricing-plan_upto">
          {{ $t("business_pricing_moreThan", { verifications: "1.000" }) }}
          <br />{{ $t("business_pricing_verificationsMonth") }}
        </p>
        <p>
            <ul class="checklist">
                <li v-for="feature of features" :key="feature.title">{{$t(feature.title)}}</li>
            </ul>
        </p>
        <p class="pepaml hint">{{ $t("business_pricing_PEPAML") }}</p>
        <a :href="`mailto:${getEmail()}`" target="_blank">
          <div class="button__wrapper">
            <button class="primary">{{ $t("global_contactUs") }}</button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// Animate on scroll
// var controllerHolder;
export default {
  nuxtI18n: {
    paths: {
      en: "/pricing", // -> accessible at / (no prefix since it's the default locale)
      es: "/precios", // -> accessible at /es/sobre
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      title: `${this.$t("business_pricing_title")} | Silt Digital ID & KYC`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("business_pricing_title")
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("business_pricing_content")
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_pricing_content")
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      features: [
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
          title: "business_highlights_noManagement_title",
        },
      ]
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
.pricing-plans_container
    display: flex
    justify-content: center
    flex-wrap: wrap
    width: 100%
.pricing-plan
    flex: 0 1 auto
    border-radius: 10px
    padding: $spacing-lg
    margin: 2%
    max-width: 350px
    &_price
        span
            line-height: 52px
            font-size: 48px
            font-family: $font-bold
            color: #333333

        p
            color: $color-grey-lighten-1
            margin: 0 0 $spacing-md 0
            text-align: left
    .button__wrapper
        text-align: left
        button
            margin: auto
            margin-top: $spacing-md
            width: 100%

.pricing-plan:last-child
    background: $color-grey-lighten-3
    .pricing-plan_price
        span
            font-size: 32px
.pepaml, .checklist,
    max-width: 500px
    text-align: left
    font-size: 13px
    color: $color-grey-lighten-1

.checklist
    padding-left: 0
</style>