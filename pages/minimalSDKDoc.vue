<template>
  <section class="developers-minimal">
    <DocumentationSdk />
  </section>
</template>
<script>
import DocumentationSdk from "~/components/DocumentationSdk.vue";
export default {
  components: {
    DocumentationSdk,
  },
  layout: 'minimalDoc',
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: "SDK & API Integration with Silt Digital ID & KYC",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Integrate with you app in a few minutes with the SDK, or create your own KYC experience with the API.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Integrate with you app in a few minutes with the SDK, or create your own KYC experience with the API.",
        },
      ],
    };
  },
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      activeTab: "ios",
      apiDocUrl: "https://app.swaggerhub.com/apis-docs/Silt/Silt-API/1.0.1",
    };
  },
};
</script>

<style lang="sass" >
@import "@/assets/sass/vars.sass"
section.developers-minimal
  font-size: 1rem

  td
    padding: $spacing-sm
    padding-bottom: $spacing-md

  tr
    &>*:not(first-child)
      padding-left: $spacing-sm
      vertical-align: baseline
  th
    text-align: left
    color: #333
    font-family: $font-bold
</style>