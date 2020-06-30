<template>
  <footer>
    <section class="footer__wrapper">
      <div class="footer_logo">
        <img
          src="@/assets/img/logo/silt_blue.svg"
          height="40"
          :alt="$t('seo_9')"
        />
        <p>{{ $t("footer_silt_what") }}</p>
      </div>
      <div class="footer__links">
        <p>
          <a href="/legal-notice" rel="nofollow">{{
            $t("global_legal_notice")
          }}</a>
        </p>
        <p>
          <a href="/privacy" rel="nofollow">{{ $t("global_legal_privacy") }}</a>
        </p>
        <p>
          <a href="/cookies" rel="nofollow">{{ $t("global_legal_cookies") }}</a>
        </p>
      </div>
      <div class="footer__info">
        <span class="h6">{{ $t("footer_contact") }}</span>
        <p>hello@getsilt.com</p>
        <p>
          <a
            href="https://www.facebook.com/Silt-102186764702659/"
            target="_blank"
            ><img
              height="20"
              src="@/assets/img/icons/social_facebook.svg"
              alt="Facebook Silt page"
          /></a>
        </p>
        <p>
          <a href="#" @click.stop="updateLocale('es')">ES</a>
          <a href="#" @click.stop="updateLocale('en')">EN</a>
        </p>
      </div>
    </section>
    <p class="copyright">
      <i18n path="footer_copyright">
        <span slot="year">2020</span>
      </i18n>
    </p>
  </footer>
</template>
<script>
import {setCookie} from "../lib/cookies";
export default {
  methods: {
    updateLocale(locale) {
      setCookie('i18n_redirected', locale)
      this.$root.$i18n.locale = locale
      this.$router.go()
    }
  }
}
</script>
<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
footer
  margin-top: auto
p
  margin: 10px 0
p.copyright
  font-size: 14px
  text-align: center
  color: #b2b2b2
.footer__wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  margin-top: 20px
  margin-bottom: 20px
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
    text-align: center
    p
      text-align: center
    @media (min-width: 768px)
      width: auto
      margin-top: auto
      text-align: left
      p, span
        text-align: left
</style>
