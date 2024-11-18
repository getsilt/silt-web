<template>
  <div>
    <footer>
      <section class="footer__wrapper">
        <div class="footer_logo">
          <img
            src="@/assets/img/logo/silt_logo_white.svg"
            width="75"
            height="40"
            :alt="$t('seo_document_scan')"
          />
          <p>{{ $t("footer_silt_what") }}</p>
        </div>
        <div class="footer__links">
          <h6>
            <nuxt-link :to="localePath({ name: 'kyb' })"
              >{{ $t("nav_feature_kyb") }}
            </nuxt-link>
          </h6>
          <h6>
            <nuxt-link :to="localePath({ name: 'kyc' })"
              >{{ $t("nav_feature_kyc") }}
            </nuxt-link>
          </h6>
          <h6>
            <nuxt-link :to="localePath({ name: 'cdp' })">
              {{ $t("nav_feature_cdp") }}
            </nuxt-link>
          </h6>
          <h6>
            <nuxt-link :to="localePath({ name: 'biocheck' })"
              >{{ $t("nav_feature_biocheck") }}
            </nuxt-link>
          </h6>
          <h6>
            <nuxt-link :to="localePath({ name: 'rules' })">
              {{ $t("nav_feature_rules") }}
            </nuxt-link>
          </h6>
          <h6>
            <nuxt-link
              :to="localePath({ name: 'misconduct' })"
              v-html="$t('nav_feature_misconduct')"
            />
          </h6>
          <h6>
            <nuxt-link :to="localePath({ name: 'aml' })"
              >{{ $t("nav_feature_aml") }}
            </nuxt-link>
          </h6>
        </div>
        <div class="footer__links">
          <h6>
            <nuxt-link :to="localePath({ name: 'developers' })"
              >{{ $t("global_documentation") }}
            </nuxt-link>
          </h6>
          <h6>
            <a href="/legal-notice" rel="nofollow">{{
              $t("global_legal_notice")
            }}</a>
          </h6>
          <h6>
            <a href="/privacy" rel="nofollow">{{
              $t("global_legal_privacy")
            }}</a>
          </h6>
          <h6>
            <a href="/cookies" rel="nofollow">{{
              $t("global_legal_cookies")
            }}</a>
          </h6>
          <h6>
            <nuxt-link :to="localePath({ name: 'faq' })"
              >{{ $t("FAQ_title") }}
            </nuxt-link>
          </h6>
        </div>
        <div class="footer__info">
          <span class="h6">{{ $t("footer_contact") }}</span>
          <p>hello@getsilt.com</p>
          <p>
            <a
              href="https://www.facebook.com/Silt-102186764702659/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="20"
                height="20"
                src="@/assets/img/icons/social_facebook.svg"
                alt="Facebook Silt page"
              />
            </a>
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
            <nuxt-link
              class="locale-link"
              :class="{ active: $i18n.locale === 'es' }"
              :to="switchLocalePath('es')"
              >ES</nuxt-link
            >
            <nuxt-link
              class="locale-link"
              :class="{ active: $i18n.locale === 'en' }"
              :to="switchLocalePath('en')"
              >EN</nuxt-link
            >
          </p>
        </div>
      </section>
      <p class="copyright">
        <i18n path="footer_copyright">
          <span slot="year">2024</span>
        </i18n>
      </p>
    </footer>
  </div>
</template>
<script>
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

footer
  margin-top: auto
  background: $color-black
  padding: $spacing-lg
  z-index: 1
  color: $color-grey-darken-1
  a, b
    text-decoration: none
    color: #ffffffcc
    &:hover
      color: #ffffffee
      text-decoration: underline
    &.locale-link
      color: #ffffff77
      &.active
        color: #ffffff
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

.footer__links
  a, b, a b
    color: #fff !important
</style>
