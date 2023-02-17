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
            $t("business_pricing_between", {
              amountLow: "50",
              amountUp: "200",
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
    <div class="pricing_table__wrapper">
      <div class="pricing_table__container">
        <table>
          <th colspan="2">
            <h6>{{ $t("nav_feature_kyc") }}</h6>
          </th>
          <tr>
            <td>
              {{ $t("business_pricing_upto", { amount: 200 }) }}
              <span class="hint">{{
                $t("business_pricing_verificationsMonth")
              }}</span>
            </td>
            <td>
              <b>99€</b>
              <span class="hint">/ {{ $t("business_pricing_month") }}</span>
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_between", {
                  amountLow: "201",
                  amountUp: "1.000",
                })
              }}
              <span class="hint">{{
                $t("business_pricing_verificationsMonth")
              }}</span>
            </td>
            <td>
              <b>0,5€</b>
              <span class="hint"> / {{ $t("global_verification") }}</span>
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_between", {
                  amountLow: "1.000",
                  amountUp: "5.000",
                })
              }}
              <span class="hint">{{
                $t("business_pricing_verificationsMonth")
              }}</span>
            </td>
            <td>
              <b>0,4€</b
              ><span class="hint"> / {{ $t("global_verification") }}</span>
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_between", {
                  amountLow: "5.001",
                  amountUp: "10.000",
                })
              }}
              <span class="hint">{{
                $t("business_pricing_verificationsMonth")
              }}</span>
            </td>
            <td>
              <b>0,3€</b>
              <span class="hint"> / {{ $t("global_verification") }}</span>
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_moreThan", {
                  amount: "10.001",
                })
              }}
              <span class="hint">{{
                $t("business_pricing_verificationsMonth")
              }}</span>
            </td>
            <td>
              <b>0,2€</b>
              <span class="hint"> / {{ $t("global_verification") }}</span>
            </td>
          </tr>

          <th colspan="2">
            <h6>{{ $t("business_pricing_PEPAML") }}</h6>
          </th>

          <tr>
            <td>{{ $t("business_pricing_PEPAML") }}</td>
            <td>
              <b>0,25€</b> <span class="hint"> / {{ $t("global_check") }}</span>
            </td>
          </tr>

          <th colspan="2">
            <h6>{{ $t("nav_feature_biocheck") }}</h6>
          </th>
          <tr>
            <td>
              {{ $t("business_pricing_upto", { amount: "5.000" }) }}
              <span class="hint"
                >{{ $t("global_unique_user") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
            <td>
              <b>0,5€</b>
              <span class="hint">
                {{ $t("global_unique_user") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_between", {
                  amountLow: "5.001",
                  amountUp: "20.000",
                })
              }}
              <span class="hint"
                >{{ $t("global_unique_user") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
            <td>
              <b>0,4€</b>
              <span class="hint">
                {{ $t("global_unique_user") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_moreThan", {
                  amount: "20.001",
                })
              }}
              <span class="hint"
                >{{ $t("global_unique_user") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
            <td>
              <b>0,35€</b>
              <span class="hint">
                {{ $t("global_unique_user") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
          </tr>

          <th colspan="2">
            <h6>{{ $t("nav_feature_kyb") }}</h6>
          </th>
          <tr>
            <td>
              {{ $t("business_pricing_upto", { amount: "500" }) }}
              <span class="hint">/{{ $t("business_pricing_month") }}</span>
            </td>
            <td>
              <b>2,75€</b>
              <span class="hint">
                {{ $t("global_verified_company") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_between", {
                  amountLow: "501",
                  amountUp: "1.000",
                })
              }}
              <span class="hint">/ {{ $t("business_pricing_month") }}</span>
            </td>
            <td>
              <b>2,55€</b>
              <span class="hint">
                {{ $t("global_verified_company") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
          </tr>
          <tr>
            <td>
              {{
                $t("business_pricing_moreThan", {
                  amount: "1.001",
                })
              }}
              <span class="hint"> / {{ $t("business_pricing_month") }}</span>
            </td>
            <td>
              <b>2,35€</b>
              <span class="hint"
                >{{ $t("global_verified_company") }} /
                {{ $t("business_pricing_month") }}</span
              >
            </td>
          </tr>
        </table>
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

.pricing_table__wrapper
  display: flex
  flex-direction: column
  align-items: center
  .pricing_table__container
    padding: $spacing-lg
    background: var(--bg-secondary)
    border-radius: $radius-lg
    margin: auto

  h6
    margin-bottom: $spacing-sm
  table
    th
      padding-top: $spacing-sm
      text-align: left
    th:not(:first-child)
      padding-top: $spacing-xlg
    td
      padding: $spacing-xsm $spacing-md

    .hint
      text-transform: lowercase
</style>
