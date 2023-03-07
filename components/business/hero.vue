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
    <!-- CLAIMS -->
    <div class="claim-info">
      <h1 class="title">
        <span class="text-gradient-1 title-bold">
          {{ $t("business_claim_scale") }}
        </span>
        <br />
        <span v-html="$t('business_claim1')" />
      </h1>
      <h4 class="subtitle" v-html="$t('business_claim2')" />

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
import gsap from "gsap";
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
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px

.claim-side-img
  position: relative
  .phone-svg
    position: absolute
    top: -10px
    left: -11px
    z-index: 999
    height: auto
    width: 274px
  .phone-video
    width: 250px
    border-radius: 30px

.claim-info-wrapper.differences
  display: flex
  align-items: center
</style>
