<template>
  <section class="claim-container">
    <div class="bg-shadow__wrapper">
      <div class="bg-shadow__container">
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_1')"
          width="700"
          height="500"
        />
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_1')"
          width="700"
          height="500"
        />
      </div>
    </div>
    <div class="claim-info">
      <h1 class="title" v-html="$t('business_claim1')" />
      <h4 class="subtitle" v-html="$t('business_hero_kyc_subtitle')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img screenshots-container">
      <div class="screenshot-container">
        <img
          class="screenshot login"
          src="@/assets/img/screenshots/screenshot_documentSelect_es.jpg"
          :alt="$t('seo_2')"
          width="180"
          height="353"
        />
      </div>
      <div class="screenshot-container">
        <img
          class="screenshot take-picture"
          src="@/assets/img/screenshots/screenshot_selfie_es.jpg"
          :alt="$t('seo_3')"
          width="180"
          height="353"
        />
      </div>
      <div class="screenshot-container">
        <img
          class="screenshot complete"
          src="@/assets/img/screenshots/screenshot_finish_es.jpg"
          :alt="$t('seo_4')"
          width="180"
          height="353"
        />
      </div>
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
