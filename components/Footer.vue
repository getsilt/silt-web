<template>
  <div>
    <section class="trust__wrapper">
      <h3>{{ $t("footer_trust") }}</h3>
      <div class="trust__logos">
        <img src="@/assets/img/logo/tech_bcn.png" alt="" style="height: 100px" />
        <img src="@/assets/img/logo/accio.png" alt="" />
        <img style="height: 100px" src="@/assets/img/logo/aefi.png" alt="" />
      </div>
    </section>
    <footer>
      <section class="footer__wrapper">
        <div class="footer_logo">
          <img
            src="@/assets/img/logo/silt_logo_white.svg"
            width="75"
            height="40"
            :alt="$t('seo_9')"
          />
          <p>{{ $t("footer_silt_what") }}</p>
        </div>
        <div class="footer__links">
          <p>
            <a href="/kyc">{{ $t("nav_feature_kyc") }}</a>
          </p>
          <p>
            <a href="/kyb">{{ $t("nav_feature_kyb") }}</a>
          </p>
          <p>
            <a href="/biocheck">{{ $t("nav_feature_biocheck") }}</a>
          </p>
          <p>
            <a href="/rules">{{ $t("nav_feature_rules") }}</a>
          </p>
          <p>
            <a href="/misconduct" v-html="$t('nav_feature_misconduct')" />
          </p>
          <p>
            <a href="/aml">{{ $t("nav_feature_aml") }}</a>
          </p>
        </div>
        <div class="footer__links">
          <p>
            <a href="/developers">{{ $t("global_documentation") }}</a>
          </p>
          <p>
            <a href="/legal-notice" rel="nofollow">{{
              $t("global_legal_notice")
            }}</a>
          </p>
          <p>
            <a href="/privacy" rel="nofollow">{{
              $t("global_legal_privacy")
            }}</a>
          </p>
          <p>
            <a href="/cookies" rel="nofollow">{{
              $t("global_legal_cookies")
            }}</a>
          </p>
        </div>
        <div class="footer__info">
          <span class="h6">{{ $t("footer_contact") }}</span>
          <p>hello@getsilt.com</p>
          <p>
            <a
              href="https://www.facebook.com/Silt-102186764702659/"
              target="_blank"
              rel="noreferrer"
              ><img
                width="20"
                height="20"
                src="@/assets/img/icons/social_facebook.svg"
                alt="Facebook Silt page"
            /></a>
            <a
              href="https://linkedin.com/company/silt-verifications"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="20"
                height="20"
                src="@/assets/img/icons/social_linkedin.svg"
                alt="LinkedIn Silt page"
              />
            </a>
          </p>
          <p>
            <a href="#" @click.stop="updateLocale('es')">ES</a>
            <a href="#" @click.stop="updateLocale('en')">EN</a>
          </p>
        </div>
      </section>
      <p class="copyright">
        <i18n path="footer_copyright">
          <span slot="year">2023</span>
        </i18n>
      </p>
    </footer>
  </div>
</template>
<script>
import { setCookie } from "../lib/cookies";

export default {
  methods: {
    updateLocale(locale) {
      this.$i18n.setLocale(locale);
      // ('i18n_redirected', locale)
      // this.$root.$i18n.locale = locale
      // this.$router.go(`/${locale}`)
    },
  },
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.trust__wrapper
  text-align: center
  background: var(--bg-secondary)
  padding: 30px
  margin: 0
  .trust__logos
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    padding: 20px
    img
      margin: 10px
      height: 80px
      max-height: 80px
      width: auto
      background: $color-grey-lighten-3
      padding: 20px
      border-radius: $radius-lg
@media (min-width: 768px)
  .trust__wrapper
    .trust__logos
      padding: 20px
      img
        max-height: 200px
        margin: 40px

footer
  margin-top: auto
  background: $color-black
  padding: $spacing-lg
  z-index: 1
  a
    text-decoration: none
    color: #ffffffcc
    &:hover
      color: #ffffffee
  .h6
    color: #ffffffcc
p
  margin: 10px 0
p.copyright
  font-size: 14px
  text-align: center
.footer__wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  margin-top: 20px
  margin-bottom: 20px
  align-items: flex-start
  h6
    margin: 10px 0
  p
    font-size: 16px
    text-align: left
  .footer_logo
    max-width: 300px
    img
      margin-bottom: $spacing-md
  .footer__info, .footer__links
    max-width: 300px
    display: flex
    flex-direction: column
    justify-content: flex-end
    width: 100%
    margin-top: $spacing-md
    text-align: left
</style>
