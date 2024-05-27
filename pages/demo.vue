<template>
  <div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script>
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
    window.addEventListener("message", function(e) {
      if (isCalendlyEvent(e)) {
        /* Example to get the name of the event */
        console.log("Event name:", e.data.event);

        /* Example to get the payload of the event */
        console.log("Event details:", e.data.payload);
        // if(e.data.event === "calendly.event_scheduled") 
          this.gtag_report_conversion();
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
  .calendly-inline-widget
    min-width: 460px
    height: 900px

    @media(max-width: 768px)
      min-width: 350px
</style>
