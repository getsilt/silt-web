<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h2 class="">{{ $t("demo_claim1") }}</h2>
        <div class="bullet-wrapper">
          <i class="primary medium bg fad fa-camera"></i>
          <h4 class="subtitle">{{ $t("demo_claim2") }}</h4>
        </div>
        <div class="bullet-wrapper">
          <i class="primary medium bg fad fa-bolt"></i>
          <h4 class="subtitle">{{ $t("demo_claim3") }}</h4>
        </div>
      </div>
      <div class="claim-info right">
        <div class="card card--w-md">
          <h4>{{ $t("demo_form_title") }}</h4>
          <form id="form" ref="demoForm" @submit.prevent class="form--vertical">
            <label for="company_name">{{
              $t("demo_form_companyName_label")
            }}</label>
            <input
              :placeholder="$t('demo_form_companyName_placeholder')"
              type="text"
              name="company_name"
              required
              v-model="company_name"
            />
            <label for="country">{{ $t("demo_form_country_label") }}</label>
            <input
              :placeholder="$t('demo_form_country_placeholder')"
              type="text"
              name="country"
              required
              v-model="country"
            />
            <label for="email">{{ $t("demo_form_email_label") }}</label>
            <input
              :placeholder="$t('demo_email_company_placeholder')"
              type="email"
              name="email"
              required
              v-model="email"
            />
            <span
              :class="{ hidden: !(emailErrors && email) }"
              class="validation-error error"
            >
              {{ $t("demo_email_error_company") }}
            </span>
            <button
              :disabled="
                status === 'loading' || !country || !email || !company_name
              "
              class="submit h-captcha"
              data-sitekey="4118226d-2c43-4d3b-be2e-857befb9038d"
              @click="onSubmit($event)"
            >
            <!-- data-callback="onSubmit" -->
              {{ $t(`demo_form_submit`) }}
              <i class="arrow"></i>
            </button>
            <div
              class="h-captcha"
              data-sitekey="4118226d-2c43-4d3b-be2e-857befb9038d"
              data-theme="dark"
              data-error-callback="onError"
              data-size="invisible"
            ></div>
            <span
              v-if="status !== 'unsent'"
              class="email-response"
              :class="status"
              >{{ $t(`emailResponse_${status}`) }}</span
            >
          </form>
        </div>
        <p style="font-size: 0.8rem">
            This site is protected by hCaptcha and its
            <a href="https://www.hcaptcha.com/privacy">Privacy Policy</a> and
            <a href="https://www.hcaptcha.com/terms">Terms of Service</a> apply.
          </p>
      </div>
    </section>
  </div>
</template>

<script>
function gtag_report_conversion(url) {
  var callback = function () {
    console.log("submitted gtag");
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  console.log("submitting gtag");
  gtag("event", "conversion", {
    send_to: "AW-352683225/78NdCOjLjcgDENmJlqgB",
    event_callback: callback,
  });
  return false;
}
import EmailApi from "@/lib/emailService";
export default {
  nuxtI18n: {
    paths: {
      en: "/demo", // -> accessible at /about-us (no prefix since it's the default locale)
      fr: "/demo", // -> accessible at /fr/a-propos
      es: "/demo", // -> accessible at /es/sobre
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: `${this.$t("demo_claim1")} | Silt Digital ID & KYC`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("demo_claim1"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("demo_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("demo_claim2"),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    };
  },
  computed: {
    emailErrors() {
      return this.emailHasErrors(this.email);
    },
  },
  data() {
    return {
      siltEmail: "hello@getsilt.com",
      email: "",
      country: "",
      company_name: "",
      status: "unsent",
    };
  },
  mounted() {},
  methods: {
    emailHasErrors(email) {
      if (
        /^[a-zA-Z0-9_.+-]+@(?!(gmail|yahoo|hotmail|outlook|getsilt|siltapp|asdf))[a-zA-Z]{2,6}.*\.[a-zA-Z]{2,6}$/.test(
          email
        )
      ) {
        return false;
      }
      return "demo_email_error_company";
    },
    getEmail() {
      return this.siltEmail;
    },
    onSubmit(e) {
      e.preventDefault();
      if (this.emailHasErrors(this.email)) return;
      if (this.status === "loading") return;
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
          company_name: this.company_name,
          country: this.country,
          subject: `Silt Demo request <> ${this.company_name}`,
          userLang,
          token: token,
        });
        gtag_report_conversion();
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

.email-response, .validation-error
  margin: $spacing-sm 0
  transition: 0.3s
  &.unsent
    opacity: 0

  &.loading, &.error, &.success
    opacity: 1

  &.success
    color: $color-accent

  &.error
    color: $color-error

.validation-error
  margin-top: -$spacing-md

button.submit
  .arrow
    font-style: normal
    position: relative
    width: 16px
    height: 16px
    margin-left: $spacing-sm
    &:after, &:before
      transition: 0.2s ease-in-out
      opacity: 1
      transform: translateX(0%)
      right: 0
      position: absolute
      font-family: 'Font Awesome 5 Duotone'
    &:after
      content: '\f061'
      color: #ffffff
    &:before
      content: '\10f061'
      color: rgba(#ffffff, 0.5)
    &:not(.deactivated):hover
      color: #ffffff
      transition: 0.3s ease-in-out
      &:after, &:before
        transition: 0.2s ease-in-out
        opacity: 1
        transform: translateX(0%)
  &:not(:disabled):hover
    .arrow
      &:after, &:before
        transform: translateX(50%)
</style>
