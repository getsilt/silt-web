<template>
  <div class="container" id="pricing">
    <div class="tabs-wrapper tabs-wrapper--background">
      <div class="tab-wrapper">
        <v-tab
          activeTabName="KYC"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h2 class="seo_header">KYC</h2>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="KYB"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h2 class="seo_header">KYB</h2>
        </v-tab>
      </div>
    </div>
    <KYCPricingPlan v-if="featuredTab === 'KYC'" />
    <KYBPricingPlan v-else />
    <Faqs v-if="featuredTab === 'KYC'" />
  </div>
</template>
<script>
import VTab from "@/components/VTab.vue";
import KYCPricingPlan from "../components/pricing/KYCPricingPlan.vue";
import KYBPricingPlan from "../components/pricing/KYBPricingPlan.vue";
import Faqs from "../components/pricing/faqs.vue";
// Animate on scroll
// var controllerHolder;
export default {
  components: {
    VTab,
    KYCPricingPlan,
    KYBPricingPlan,
    Faqs,
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
      featuredTab: "KYC",
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

.tabs-wrapper
  margin: auto
  margin-top: $spacing-xlg
  width: fit-content
  .tab.active,:hover
    background: $color-primary
    border-radius: $radius-md
    .seo_header
      color: #fff
      border-radius: $radius-md
</style>
