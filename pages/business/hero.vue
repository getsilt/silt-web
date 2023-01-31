<template>
  <section class="claim-container">
    <div class="bg-shadow__wrapper">
      <img
        class="bg-shadow"
        src="@/assets/img/illustrations/shadow.svg"
        :alt="$t('seo_1')"
        width="700"
        height="500"
      />
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
    <!-- TODO: Add Vídeo -->
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
import gsap from "gsap";
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
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 700px

.claim-info-wrapper.differences
  display: flex
  align-items: center

.bg-shadow__wrapper
  position: absolute
  z-index: -1
  top: -150px
  right: 0
  filter: blur(10px)
  opacity: 0.5

  .bg-shadow
    position: relative
    width: 60vw
    height: auto
    margin: 0px
</style>
