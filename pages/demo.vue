<template>
  <div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script>
    <section class="claim-container">
      <div class="claim-info">
        <h2>{{ $t("demo_title") }}</h2>
        <h3>{{ $t("demo_kyb_title") }}</h3>
        <h4>{{ $t("demo_kyb_subtitle") }}</h4>
        <b>{{ $t("demo_kyb_claim_title") }}</b>
        <ol>
          <li v-for="claim of kybClaimsList" :key="claim" v-html="$t(claim)" />
        </ol>
        <h3>{{ $t("demo_kyc_title") }}</h3>
        <h4 class="subtitle__kyc-demo">
          {{ $t("demo_kyc_subtitle") }}
        </h4>
        <ul>
          <li v-for="claim of kycClaimsList" :key="claim" v-html="$t(claim)" />
        </ul>
      </div>
      <div class="claim-info right">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/andrea-silt/andrea-call?hide_landing_page_details=1&hide_gdpr_banner=1"
        />
      </div>
    </section>
  </div>
</template>

<script>
function isCalendlyEvent(e) {
  return (
    e.origin === "https://calendly.com" &&
    e.data.event &&
    e.data.event.indexOf("calendly.") === 0
  );
}
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
      title: `${this.$t("demo_title")} | Silt Digital ID & KYC`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("demo_title"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("demo_kyb_subtitle"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("demo_kyb_subtitle"),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    };
  },
  data() {
    return {
      kybClaimsList: [
        "demo_kyb_claim_1",
        "demo_kyb_claim_2",
        "demo_kyb_claim_3",
      ],
      kycClaimsList: [
        "demo_kyc_claim_1",
        "demo_kyc_claim_2",
        "demo_kyc_claim_3",
      ],
    };
  },
  mounted() {
    window.addEventListener("message", (e) => {
      if (isCalendlyEvent(e) && e.data.event === "calendly.event_scheduled") {
        this.$gtag_report_conversion();
      }
    });
  },

  methods: {},
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.claim-container
  align-items: flex-start
  position: relative
  .subtitle
    margin: 0 0 $spacing-md
    &__kyc-demo
      margin-bottom: 0

  .calendly-inline-widget
    min-width: 460px
    height: 900px

    @media(max-width: 768px)
      min-width: 350px
</style>
