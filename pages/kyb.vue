<template>
  <div>
    <hero />
    <TrustOf />
    <benefits />
    <solution />
    <banner />
    <integration />
    <faqs />
  </div>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import Hero from "@/components/kyb/hero.vue";
import Problem from "@/components/kyb/problem.vue";
import Benefits from "@/components/kyb/benefits.vue";
import Solution from "@/components/kyb/solution/index.vue";
import Integration from "@/components/business/integration.vue";
import Banner from "@/components/kyb/banner.vue";
import TrustOf from "../components/TrustOf.vue";
import Faqs from "../components/kyb/faqs.vue";

export default {
  components: {
    DemoButtons,
    Hero,
    Problem,
    Benefits,
    Solution,
    Integration,
    Banner,
    TrustOf,
    Faqs,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_kyb_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_kyb_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_kyb_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_kyb_title"),
        },
      ],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      benefits: [
        {
          icon: "fa-lightbulb-dollar fa-3x",
          title: "kyb_benefit_scale_title",
          content: "kyb_benefit_scale_content",
        },
        {
          icon: "fa-sack-dollar fa-3x",
          title: "kyb_benefit_income_title",
          content: "kyb_benefit_income_content",
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

<style lang="sass" scoped></style>
