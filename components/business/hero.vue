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
    <div class="hero-wrapper">
      <div class="hero-header_wrapper">
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
      <video-verification-demo class="claim-side-img" />
    </div>
  </section>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import VideoVerificationDemo from "../VideoVerificationDemo.vue";
export default {
  components: { DemoButtons, VideoVerificationDemo },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.claim-side-img
  display: flex
  flex-wrap: wrap
  justify-content: center
  @media (max-width: 768px)
    margin: auto
    margin-bottom: $spacing-xlg
    flex-direction: column
</style>
