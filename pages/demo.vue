<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title">{{ $t("demo_claim1") }}</h1>
        <h4 class="subtitle">{{ $t("demo_claim2") }}</h4>
        <h4 class="subtitle">{{ $t("demo_claim3") }}</h4>
        <form id="form" @submit.prevent>
          <input
            class="large"
            :placeholder="$t('demo_email_company_placeholder')"
            type="email"
            name="email"
            v-model="email"
          />
          <!-- <button class="primary" :disabled="status === 'loading'">
            {{ $t("btn_cta_demo") }}
          </button> -->
          <button :disabled="status === 'loading'" @click="onSubmit($event)">
            {{ $t(`email_send`) }}
          </button>
        </form>
        <span
          v-if="status !== 'unsent'"
          class="email-response"
          :class="status"
          >{{ $t(`emailResponse_${status}`) }}</span
        >
        <span
          v-if="emailErrors && this.email"
          class="email-response error"
        >
          {{ $t(this.emailErrors) }}
        </span>
      </div>
      <div class="claim-side-img screenshots-container align-top">
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
  </div>
</template>

<script>
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
      if (this.emailHasErrors(this.email)) return;
      if (this.status === "loading") return;
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
