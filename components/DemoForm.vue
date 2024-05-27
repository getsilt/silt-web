<template>
  <div class="form-wrapper">
    <form id="form" @submit.prevent>
      <input
        class="large"
        placeholder="Email"
        type="email"
        name="email"
        v-model="email"
      />
      <button :disabled="status === 'loading'" @click="onSubmit($event)">
        {{ $t(`email_send`) }}
      </button>
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
      var userLang = navigator.language || navigator.userLanguage;
      this.status = "loading";
      try {
        await EmailApi.sendEmail({
          email: this.email,
          subject: "Silt Demo request",
          userLang,
          token: token,
        });
        this.$nuxt.$options.$gtag_report_conversion();
        window.lintrk("track", { conversion_id: 14836770 });
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
.form-wrapper
  display: flex
  flex-direction: column
  margin-top: $spacing-md
  width: 100%
  max-width: 500px
form
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-self: stretch
  align-items: flex-start

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
  padding: $spacing-sm
  background: rgba($color-primary, 0.15)
  border-radius: $radius-md
  margin-top: $spacing-md
  flex: 0 0 auto
  &.unsent
    opacity: 0

  &.loading, &.error, &.success
    opacity: 1

  &.success
    color: $color-primary

  &.error
    background: rgba($color-error, 0.15)
    color: $color-error
</style>
