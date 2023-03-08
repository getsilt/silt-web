<template>
  <div>
    <hero />
    <benefits />
    <solution hidden-tab="kyb" />
    <tech-features />
    <integration />
  </div>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import Hero from "@/components/kyc/hero.vue";
import Benefits from "@/components/business/benefits.vue";
import Solution from "@/components/business/solution/index.vue";
import Integration from "@/components/business/integration.vue";
import TechFeatures from "@/components/business/tech-features.vue";
import Usecases from "@/components/business/usecases.vue";

export default {
  nuxtI18n: {
    paths: {
      en: "/kyc-user-verification", // -> accessible at / (no prefix since it's the default locale)
      es: "/kyc-verificacion-de-usuarios",
    },
  },
  components: {
    DemoButtons,
    Hero,
    Benefits,
    Solution,
    Integration,
    TechFeatures,
    Usecases,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("nav_feature_kyc"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("nav_feature_kyc"),
        },
      ],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
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
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px

.claim-info-wrapper.differences
  display: flex
  align-items: center

</style>
