<template>
  <section class="claim-container">
    <div class="claim-info">
      <h1 class="title" v-html="$t('business_hero_aml_title')" />
      <h4 class="subtitle" v-html="$t('business_hero_aml_subtitle')" />
      <demo-buttons />
    </div>
    <div
      v-if="$root.$i18n.locale === 'es'"
      class="claim-side-img screenshots-container"
    >
      <img
        src="@/assets/img/illustrations/aml_flow_es.svg"
        :alt="$t('seo_3')"
        width="300"
      />
    </div>
    <div v-else class="claim-side-img screenshots-container">
      <img
        src="@/assets/img/illustrations/aml_flow_en.svg"
        :alt="$t('seo_3')"
        width="300"
      />
    </div>
  </section>
</template>

<script>
import DemoButtons from "../../components/DemoButtons.vue";
export default {
  components: { DemoButtons },
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

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 700px
</style>
