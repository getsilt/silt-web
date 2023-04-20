<template>
  <div class="fw-container container" id="faq">
    <div class="section-headers">
      <h1>{{ $t("FAQ_title_2") }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: "/faq", // -> accessible at / (no prefix since it's the default locale)
      es: "/faq",
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("FAQ_title"),
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
          content: this.$t("nav_feature_aml"),
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
</style>
