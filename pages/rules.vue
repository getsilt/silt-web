<template>
  <div>
    <hero />
    <benefits />
    <solution />
  </div>
</template>

<script>
import DemoButtons from "../components/DemoButtons.vue";
import Hero from "./rules/hero.vue";
import Benefits from "./rules/benefits.vue";
import Solution from "./rules/solution.vue";

export default {
  nuxtI18n: {
    paths: {
      en: "/rules", // -> accessible at / (no prefix since it's the default locale)
      es: "/rules",
    },
  },
  components: {
    DemoButtons,
    Hero,
    Benefits,
    Solution,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("nav_feature_rules"),
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
          content: this.$t("nav_feature_rules"),
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

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 700px

.claim-info-wrapper.differences
  display: flex
  align-items: center

</style>
