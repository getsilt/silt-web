<template>
  <section>
    <div class="header-wrapper">
      <consent-cookies/>
      <div class="header-bar">
        <div class="logo">
          <nuxt-link :to="localePath({ name: 'business' })">
            <img src="@/assets/img/logo/silt_blue.svg" :alt="$t('silt_name')" />
          </nuxt-link>
        </div>
        <nuxt-link
          class="demo-button"
          :to="localePath({ name: 'demo' })"
          @click.native="closeNav()"
        >
          <button class="small">{{ $t("btn_cta_navBar_demo") }}</button>
        </nuxt-link>
        <div
          class="hamburger-button"
          @click="openednav = !openednav"
          :class="{ opened: openednav }"
        >
          <span></span>
        </div>
      </div>
      <nav :class="{ opened: openednav }">
        <div class="nav-links">
          <nuxt-link
            :to="localePath({ name: 'users' })"
            @click.native="closeNav()"
          >
            {{ $t("nav_link_users") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath({ name: 'business' })"
            @click.native="closeNav()"
          >
            {{ $t("nav_link_business") }}
          </nuxt-link>
          <nuxt-link
            :to="localePath({ name: 'pricing' })"
            @click.native="closeNav()"
          >
            {{ $t("nav_link_pricing") }}
          </nuxt-link>
          <nuxt-link
            class="demo-button"
            :to="localePath({ name: 'demo' })"
            @click.native="closeNav()"
          >
            <button class="small">{{ $t("btn_cta_navBar_demo") }}</button>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      openednav: false
    };
  },
  mounted() {
    this.$consentCookies.show();
  },
  methods: {
    closeNav() {
      this.openednav = false;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
section
  position: fixed
  top: 0
  left: 0
  width: 100%
  background: #fff
  margin: 0
  padding: 0
  z-index: 100
  display: flex
  justify-content: center
.header-wrapper
  margin: 0
  padding: 0
  position: relative
  z-index: 100
  display: flex
  max-width: 1400px
  padding: 0
  width: 100%
  @media (min-width: 768px)
    padding: 0 50px
  .header-bar
    position: relative
    padding: 20px 30px
    background: #fff
    display: flex
    justify-content: space-between
    align-items: center
    z-index: 90
    height: 70px
    flex: 1 1 auto
    &>*:not(:last-child)
      margin-right: $spacing-sm
    .logo
      font-size: 60px
      flex: 0 0 auto
      // max-width: 50%
      display: flex
      align-items: stretch
      max-height: 30px
      a
        height: 30px
        flex: 1 1 auto
      img
        max-width: 100%
        width: auto
        margin: 0
        height: 100%
        display: block
    .hamburger-button
      display: block
      position: relative
      height: 20px
      width: 24px
      flex: 0 0 auto
      @media (min-width: 768px)
        display: none

      span, &:after, &:before
        content: ''
        position: absolute
        display: block
        background: $color-grey
        border-radius: 3px
        height: 4px
        width: 24px
        top: 8px
        left: 0
        transition: transform ease .3s, top ease .3s .3s
        transform: rotate(0)
      &:after
        top: 16px
      &:before
        top: 0px

      &.opened
        &> *, &:before, &:after
          transition: top ease .3s, transform ease .3s .3s
        span
          top: 8px
          transform: rotate(-45deg)
        &:after
          top: 8px
          transform: rotate(-45deg)
        &:before
          top: 8px
          transform: rotate(45deg)

  nav
    flex: 0 0 auto
    display: flex
    align-items: center
    z-index: 70
    background: #fff
    width: 100%
    position: absolute
    top: 0
    left: 0
    text-align: right
    padding-top: 70px
    transform: translateY(calc(-100% - 70px))
    transition: all .5s cubic-bezier(0.1,0,.58,1) 0.3s

    @media (min-width: 768px)
      transform: none
      position: relative
      display: flex
      padding: 0
      flex: 1 1 auto
      background: none

    &.opened
      transform: translateY(0)
      transition: all .5s cubic-bezier(0,0,.58,1)
    .nav-links
      margin-left: auto
      flex: 1 1 auto
      display: flex
      flex-direction: column

      @media (min-width: 768px)
        transform: none
        flex-direction: row
        flex: 0 0 auto
        align-items: center

      a
        text-decoration: none
        color: $color-grey
        transition: 0.3s
        padding: $spacing-md $spacing-lg
        width: 100%
        &:hover
          color: $color-black

    @media (min-width: 768px)
      .nav-links
        &>*, &>a
          width: auto
          padding: $spacing-sm $spacing-md

@keyframes opennav
  0%
    translateY(calc(-100% - 70px))
  30%
    transform: translateY(6px)
  45%
    transform: translateY(-4px)
  60%
    transform: translateY(2px)
  80%
    transform: translateY(-2px)
  100%
    transform: translateY(0)

@keyframes closenav
  0%
    transform: translateY(0)
  30%
    transform: translateY(-2px)
  45%
    transform: translateY(2px)
  60%
    transform: translateY(-4px)
  80%
    transform: translateY(6px)
  100%
    transform: translateY(calc(-100% - 70px))

nav
  .demo-button
    display: none

@media (min-width: 768px)
  .header-bar
    .demo-button
      display: none
  nav
    .demo-button
      display: inherit
</style>
