<template>
  <div class="main-wrapper">
    <Header />
    <div class="main-content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      title: `${this.$t("business_claim1")} | Silt Digital ID & KYC`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("business_claim1")
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("business_claim2")
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_claim2")
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    };
  }
};
</script>
<style lang="sass" scoped>

</style>