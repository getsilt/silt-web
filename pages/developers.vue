<template>
  <section class="page-side-nav">
    <nav>
      <a
        @click="activeSection = 'sdk'"
        :class="{ active: activeSection === 'sdk' }"
        >SDK Integration</a
      >
      <a
        @click="activeSection = 'api'"
        :class="{ active: activeSection === 'api' }"
        >API Integration</a
      >
    </nav>
    <DocumentationSdk v-if="activeSection === 'sdk'" />
    <DocumentationApi v-if="activeSection === 'api'" />
  </section>
</template>
<script>
import DocumentationApi from "~/components/DocumentationApi.vue";
import DocumentationSdk from "~/components/DocumentationSdk.vue";
export default {
  components: {
    DocumentationApi,
    DocumentationSdk
  },
  nuxtI18n: {
    paths: {
      en: "/developers", // -> accessible at /about-us (no prefix since it's the default locale)
      fr: "/developers", // -> accessible at /fr/a-propos
      es: "/developers", // -> accessible at /es/sobre
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: "SDK & API Integration with Silt Digital ID & KYC",
      meta: [
        {
          hid:
            "Integrate with you app in a few minutes with the SDK, or create your own KYC experience with the API.",
          name:
            "Integrate with you app in a few minutes with the SDK, or create your own KYC experience with the API.",
          content:
            "Integrate with you app in a few minutes with the SDK, or create your own KYC experience with the API.",
        },
      ],
    };
  },
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      activeSection: "sdk",
      activeTab: "ios",
      apiDocUrl: "https://app.swaggerhub.com/apis-docs/Silt/Silt-API/1.0.1",
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>