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
    <div class="claim-info">
      <h1 class="title" v-html="$t('business_hero_kyc_title')" />
      <h4 class="subtitle" v-html="$t('business_hero_kyc_subtitle')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img">
      <img class="phone-svg" src="@/assets/media/phone.svg" alt="device" />
      <video class="phone-video" autoplay loop muted>
        <source src="@/assets/media/sign-up.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
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
.claim-side-img
  position: relative
  .phone-svg
    position: absolute
    top: -9px
    left: -10px
    z-index: 999
    height: auto
    width: 252px
  .phone-video
    width: 230px
    border-radius: 30px
</style>