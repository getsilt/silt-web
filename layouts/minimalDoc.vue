<template>
  <div class="main-content">
    <nuxt />
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
    Footer,
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({
      addDirAttribute: true,
      addSeoAttributes: true,
    });
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      title: `Silt Digital ID & KYC | ${this.$t("business_claim1")}`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("business_claim1"),
        },
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
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    };
  },
};
</script>
<style lang="sass" scoped>
section
  margin: auto
  margin-top: -40px
  padding: 0
  
</style>