<template>
  <footer>
    <section class="footer__wrapper">
      <div class="footer_logo">
          <img src="@/assets/img/logo/silt_blue.svg" height="40" :alt="$t('seo_9')">
          <p>{{$t('footer_silt_what')}}</p>
      </div>
      <div class="footer__info">
        <span class="h6">{{$t('footer_contact')}}</span>
        <p>hello@getsilt.com</p>
        <p><a href="https://www.facebook.com/Silt-102186764702659/" target="_blank"><img height="20" src="@/assets/img/icons/social_facebook.svg" alt="Facebook Silt page"></a></p>
      </div>
    </section>
    <p class="copyright">
        <i18n path="footer_copyright">
          <span slot="year">2020</span>
        </i18n>
      </p>
  </footer>
</template>

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
  .footer__info
    max-width: 300px
    display: flex
    flex-direction: column
    justify-content: flex-end
</style>
