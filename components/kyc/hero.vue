<template>
  <section class="claim-container">
    <div class="bg-shadow__wrapper">
      <div class="bg-shadow__container">
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_kyc')"
          width="700"
          height="500"
        />
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_kyc')"
          width="700"
          height="500"
        />
      </div>
    </div>
    <div class="hero-wrapper">
      <div class="hero-header_wrapper">
        <h1 class="title" v-html="$t('business_hero_kyc_title')" />
        <h4 class="subtitle" v-html="$t('business_hero_kyc_subtitle')" />
        <demo-buttons />
      </div>
      <video-verification-demo class="claim-side-img" />
    </div>
  </section>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import VideoVerificationDemo from "../VideoVerificationDemo.vue";
export default {
  components: { DemoButtons, VideoVerificationDemo },
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
.claim-side-img
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin-left: 38%
  @media (max-width: 768px)
    margin: auto
</style>