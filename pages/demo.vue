<template>
  <div>
    <section class="claim-container">
      <div class="claim-info">
        <h2 class="">{{ $t("demo_claim1") }}</h2>
        <div class="bullet-wrapper">
          <h4 class="subtitle">{{ $t("demo_claim2") }}</h4>
        </div>
        <div class="bullet-wrapper">
          <h4 class="subtitle">{{ $t("demo_claim3") }}</h4>
        </div>
      </div>
      <div class="claim-info right">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/andrea-silt?hide_landing_page_details=1&hide_gdpr_banner=1"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: "/demo", // -> accessible at /about-us (no prefix since it's the default locale)
      fr: "/demo", // -> accessible at /fr/a-propos
      es: "/demo", // -> accessible at /es/sobre
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: `${this.$t("demo_claim1")} | Silt Digital ID & KYC`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("demo_claim1"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("demo_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("demo_claim2"),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    };
  },
  mounted() {},

  methods: {},
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.claim-container
  align-items: flex-start
  position: relative
  .calendly-inline-widget
    min-width: 460px
    height: 700px
</style>

