<template>
  <div>
    <hero />
    <TrustOf />
    <Benefits />
    <Solution />
    <Faqs />
  </div>
</template>

<script>
import Hero from "@/components/cdp/hero.vue";
import TrustOf from "../components/TrustOf.vue";
import Benefits from "../components/cdp/benefits.vue";
import Solution from "../components/cdp/solution.vue";
import DemoButtons from "../components/DemoButtons.vue";
import Faqs from "../components/cdp/faqs.vue";

export default {
  components: {
    Hero,
    TrustOf,
    Benefits,
    Solution,
    DemoButtons,
    Faqs,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_cdp_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_cdp_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_cdp_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_cdp_title"),
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

<style lang="sass" scoped></style>
