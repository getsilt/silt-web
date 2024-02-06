<template>
  <div>
    <hero />
    <TrustOf />
    <benefits />
    <Products />
    <usecases />
  </div>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import Hero from "@/components/business/hero.vue";
import Benefits from "@/components/business/benefits.vue";
import Solution from "@/components/business/solution/index.vue";
import Integration from "@/components/business/integration.vue";
import TechFeatures from "@/components/business/tech-features.vue";
import Usecases from "@/components/business/usecases.vue";
import TrustOf from "../components/TrustOf.vue";
import Products from "../components/business/products.vue";

export default {
  components: {
    DemoButtons,
    Hero,
    Benefits,
    Solution,
    Integration,
    TechFeatures,
    Usecases,
    TrustOf,
    Products,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_homepage_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_homepage_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_homepage_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_homepage_title"),
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
