<template>
  <div>
    <hero />
    <benefits />
    <solution />
    <Faqs />
  </div>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import Hero from "@/components/rules/hero.vue";
import Benefits from "@/components/rules/benefits.vue";
import Solution from "@/components/rules/solution.vue";
import Faqs from "../components/rules/faqs.vue";

export default {
  components: {
    DemoButtons,
    Hero,
    Benefits,
    Solution,
    Faqs,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_rules_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_rules_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_rules_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_rules_title"),
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
