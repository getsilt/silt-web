<template>
  <div>
    <form id="form" @submit.prevent>
      <input
        class="large"
        placeholder="Email"
        type="email"
        name="email"
        v-model="email"
      />
      <!-- <button class="primary" :disabled="status === 'loading'">
            {{ $t("btn_cta_demo") }}
          </button> -->
      <button @click="onSubmit($event)">{{ $t(`email_send`) }}</button>
    </form>
    <span v-if="status !== 'unsent'" class="email-response" :class="status">{{
      $t(`emailResponse_${status}`)
    }}</span>
  </div>
</template>

<script>
import EmailApi from "@/lib/emailService";
export default {
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      email: "",
      status: "unsent",
    };
  },
  methods: {
    getEmail() {
      return this.siltEmail;
    },
    onSubmit(e) {
      e.preventDefault();
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6Lfx2FgaAAAAAPiGduuGdvK9Ea2u5wonpACVBwEx", {
            action: "submit",
          })
          .then((token) => {
            this.submitForm(e, token);
          });
      });
    },
    async submitForm(e, token) {
      //6Lfx2FgaAAAAAPiGduuGdvK9Ea2u5wonpACVBwEx
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
          userLang,
          token: token,
        });
        this.status = "success";
      } catch (error) {
        this.status = "error";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

form
  margin-top: $spacing-md
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-self: stretch
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
