<template>
  <div class="fw-container container" id="pricing">
    <VSwitch
      class="pricing-toggle"
      v-model="showKYCPricing"
      leftCopy="KYC"
      rightCopy="KYB"
    />
    <KYCPricingPlan v-if="showKYCPricing" />
    <KYBPricingPlan v-else />
  </div>
</template>
<script>
import VSwitch from "@/components/VSwitch.vue";
import KYCPricingPlan from "../components/pricing/KYCPricingPlan.vue";
import KYBPricingPlan from "../components/pricing/KYBPricingPlan.vue";
// Animate on scroll
// var controllerHolder;
export default {
  components: {
    VSwitch,
    KYCPricingPlan,
    KYBPricingPlan,
  },
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
      showKYCPricing: true,
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

.pricing-toggle
  margin: auto
  margin-top: $spacing-xlg
</style>
