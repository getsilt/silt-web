<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('demo_claim1')"></h1>
        <h4 class="subtitle">{{ $t("demo_claim2") }}</h4>
        <h4 class="subtitle">{{ $t("demo_claim3") }}</h4>
        <form id="form" @submit.prevent="submitForm($event)">
          <input
            class="large"
            placeholder="Email"
            type="email"
            name="email"
            v-model="email"
          />
          <button class="primary" :disabled="status === 'loading'">
            {{ $t("btn_cta_demo") }}
          </button>
        </form>
        <span class="email-response" :class="status">{{
          $t(`emailResponse_${status}`)
        }}</span>
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
import EmailApi from "@/lib/emailService";

// Animate on scroll
var controllerHolder;
if (process.client) {
  //const ScrollMagic = require('~/plugins/scrollmagic');
}
export default {
  components: {},
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      email: "",
      status: "unsent"
    };
  },
  mounted() {},
  methods: {
    getEmail() {
      return this.siltEmail;
    },
    async submitForm(e) {
      // const formElem = document.querySelector('form');
      // const formData = new FormData()
      // console.log(e.formData)
      // console.dir(formElem)
      // console.log(formData)
      var userLang = navigator.language || navigator.userLanguage;
      this.status = "loading";
      try {
        await EmailApi.sendEmail({
          email: this.email,
          subject: "Silt Demo request",
          userLang
        });
        this.status = "success";
      } catch (error) {
        this.status = "error";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
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

form
  margin-top: $spacing-md
  display: flex
  flex-wrap: wrap
  justify-content: center
  &>*
    flex: 1 1 auto

  @media (min-width: 768px)
    flex-wrap: nowrap
    button
      flex: 0 0 auto

.email-response
  margin-top: $spacing-md
  transition: 0.3s
  font-size: 18px
  &.unsent
    opacity: 0

  &.loading, &.error, &.success
    opacity: 1

  &.success
    color: $color-accent

  &.error
    color: $color-error
</style>
