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
        <div id="meetzy-engine" />
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
  mounted() {
    this.meetzy();
  },

  methods: {
    meetzy() {
      document.dispatchEvent(new CustomEvent("meetzy-refresh", {}));
      document.addEventListener("meetzy-form-submitted", (e) => {
        window.lintrk('track', { conversion_id: 14836770 });
        console.log("Form successfully submitted")
        // gtag_report_conversion();
      });
    },
  },
};
</script>
