<template>
  <section class="claim-container">
    <div class="claim-info">
      <h1 class="title" v-html="$t('business_hero_rules_title')" />
      <h4 class="subtitle" v-html="$t('business_hero_rules_subtitle')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img screenshots-container">
      <img
        class="screenshot take-picture"
        src="@/assets/img/screenshots/screenshot_selfie_es.jpg"
        :alt="$t('seo_3')"
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
