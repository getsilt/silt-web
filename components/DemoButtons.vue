<template>
  <div class="demo__wrapper">
    <div v-show="hasMeetzy" id="meetzy-engine" />
    <div v-show="!hasMeetzy" class="demo_cta__wrapper">
      <nuxt-link :to="localePath({ name: 'demo' })">
        <button class="primary" :class="{ light: dark }">
          {{ $t("btn_cta_book_demo") }}
          <div class="arrow"></div>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      default: false,
    },
  },
  data() {
    return {
      hasMeetzy: false,
      hasMeetzyLoaded: false,
    };
  },
  watch: {
    $route(to, from) {
      checkMeetzyLoad();
    },
  },
  methods: {
    loadMeetzy() {
      if (this.hasMeetzy && !this.hasMeetzyLoaded) {
        document.dispatchEvent(new CustomEvent("meetzy-refresh", {}));
        document.addEventListener("meetzy-form-submitted", (e) => {
          this.$gtag_report_conversion();
          window.lintrk("track", { conversion_id: 14836770 });
        });
        this.hasMeetzyLoaded = true;
      }
    },
    checkMeetzyLoad() {
      if (this.$route.query["campaign-landing"] === "true") {
        this.hasMeetzy = true;
        this.loadMeetzy();
      }
    },
  },
  mounted() {
    this.checkMeetzyLoad();
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.demo__wrapper
  display: flex
  flex-direction: column
  justify-content: center

.demo_cta__wrapper
  a
    margin: $spacing-sm

.hint_benefit
  font-family: $font-bold
  color: $color-grey-darken-1
  font-size: 14px
  text-align: center
  margin-top: $spacing-sm
  i
    color: $color-grey-darken-1
    margin-right: $spacing-sm
.demo__wrapper.dark
  button:not(.secondary)
    background: $color-grey-lighten-3
    color: $color-grey-darken-3
    border-color: $color-grey-lighten-3
    &:hover:not(.vsm-link):not(:disabled):not(.accent):not(.translucid):not(.secondary)
      background: #fff

button.primary
  .arrow
    display: block
    width: 0
    height: 20px
    transition: 0.3s ease-in-out
    &:after, &:before
      transition: 0.2s ease-in-out
      opacity: 0
      transform: translateX(-50%)
      position: absolute
      right: 20px
      font-family: 'Font Awesome 5 Duotone'
    &:after
      content: '\f061'
    &:before
      content: '\10f061'
  &:not(.deactivated):hover .arrow
    width: 30px
    transition: 0.3s ease-in-out
    &:after, &:before
      transition: 0.2s ease-in-out
      opacity: 1
      transform: translateX(0%)

  button.secondary
    border-color: $bg-dark-lighten-2
    background: $bg-dark-lighten-2
    color: #fff
    &:hover
      background: rgba($bg-dark-lighten-2, 0.9)
</style>
