<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('business_claim1')"></h1>
        <h4 class="subtitle" v-html="$t('business_claim2')">
          {{ $t("business_claim2") }}
        </h4>
        <a :href="`mailto:${getEmail()}`" target="_blank">
          <button class="primary">{{ $t("btn_cta_contact") }}</button>
        </a>
      </div>
      <div class="claim-side-img screenshots-container">
        <img
          class="screenshot login"
          src="@/assets/img/screenshots/personal-details.png"
          :alt="$t('seo_2')"
        />
        <img
          class="screenshot take-picture"
          src="@/assets/img/screenshots/take-picture.png"
          :alt="$t('seo_3')"
        />
        <img
          class="screenshot complete"
          src="@/assets/img/screenshots/complete.png"
          :alt="$t('seo_4')"
        />
      </div>
    </section>
  </div>
</template>

<script>
// Animate on scroll
var controllerHolder;
if (process.client) {
  //const ScrollMagic = require('~/plugins/scrollmagic');
}
export default {
  components: {
  },
  data() {
    return {
      email: "hello@getsilt.com",
    }
  },
  mounted() {
  },
  methods: {
    getEmail() {
      return this.email;
    },
  },
};
</script>

<style lang="sass" scoped>
.screenshots-container
  display: flex
  perspective: 300px
  overflow: visible
  width: 100%
  @media(min-width: 768px)
    width: auto
  img.screenshot
    flex: 1 1 auto
    min-width: 120px
    max-width: 180px
    align-self: center
    box-shadow: 2px 2px 20px -6px rgba(0,0,0,0.3)
    transform: rotateY(10deg)
    transition: 0.3s
    border-radius: 10px
    &:nth-child(1)
      transform: rotateY(7deg) translateX(50px)
    &:nth-child(2)
      transform: rotateY(7deg) translateX(20px)
    &:nth-child(3)
      transform: rotateY(7deg) translateX(0px)

    @media(min-width: 768px)
      &:nth-child(1)
        transform: rotateY(7deg) translateX(0px)
      &:nth-child(2)
        transform: rotateY(7deg) translateX(-70px)
      &:nth-child(3)
        transform: rotateY(7deg) translateX(-125px)
    // &:hover
    //   transform: rotateY(0) scale(1.2)
    //   z-index: 1
    //   transition: 0.3s
</style>
