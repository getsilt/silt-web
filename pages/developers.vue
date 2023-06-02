<template>
  <section class="developers page-side-nav">
    <nav>
      <a
        @click="activeSection = 'sdk'"
        :class="{ active: activeSection === 'sdk' }"
        >SDK Integration</a
      >
      <a
        @click="activeSection = 'status'"
        :class="{ active: activeSection === 'status' }"
        >Get user status info</a
      >
    </nav>
    <DocumentationSdk v-if="activeSection === 'sdk'" />
    <DocumentationStatus v-if="activeSection === 'status'" />
  </section>
</template>
<script>
import DocumentationSdk from "@/components/DocumentationSdk.vue";
import DocumentationStatus from "@/components/DocumentationStatus.vue"
export default {
  components: {
    DocumentationSdk,
    DocumentationStatus
  },
  nuxtI18n: {
    paths: {
      en: "/developers", // -> accessible at /about-us (no prefix since it's the default locale)
      es: "/developers", // -> accessible at /es/sobre
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_developers_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_developers_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_developers_metadescription"),
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
  created() {
    if (this.$router.currentRoute.query.minimal === true) this.minimal = true;
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/vars.sass"
.developers
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
