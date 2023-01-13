<template>
  <div>
    <hero />
    <benefits />
    <solution />
    <tech-features />
    <integration />
    <usecases />
  </div>
</template>

<script>
import DemoButtons from "../../components/DemoButtons.vue";
import Hero from "./hero.vue";
import Benefits from "./benefits.vue";
import Solution from "./solution/index.vue";
import Integration from "./integration.vue";
import TechFeatures from "./tech-features.vue";
import Usecases from "./usecases.vue";

export default {
  nuxtI18n: {
    paths: {
      en: "/", // -> accessible at / (no prefix since it's the default locale)
      es: "/",
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

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 700px

.claim-info-wrapper.differences
  display: flex
  align-items: center

.bg-shadow__wrapper
  position: absolute
  z-index: -1
  top: 0
  right: 0

  .bg-shadow
    position: relative
    width: 60vw
    height: auto
    margin: 0px
</style>
