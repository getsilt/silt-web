<template>
  <div class="demo__wrapper">
    <div
      v-if="$route.query['campaign-landing'] === 'true'"
      id="meetzy-engine"
    />
    <template v-else>
      <div class="demo_cta__wrapper">
        <a target="_blank" href="https://dashboard.getsilt.com/welcome">
          <button class="primary icon">
            {{ $t("btn_cta_demo") }}<i class="simple-arrow"></i>
          </button>
        </a>
        <nuxt-link :to="localePath({ name: 'demo' })">
          <button class="secondary">{{ $t("btn_cta_book_demo") }}</button>
        </nuxt-link>
      </div>
    </template>
    <div class="hint_benefit">
      <i class="fad fa-check-circle"></i>{{ $t("global_hint_benefits") }}
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
  methods: {
    loadMeetzy() {
      if (this.$route.query["campaign-landing"] === "true") {
        document.dispatchEvent(new CustomEvent("meetzy-refresh", {}));
        document.addEventListener("meetzy-form-submitted", (e) => {
          gtag_report_conversion();
          window.lintrk("track", { conversion_id: 12492010 });
        });
      }
    },
  },
  mounted() {
    this.loadMeetzy();
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

  button.secondary
    border-color: $bg-dark-lighten-2
    background: $bg-dark-lighten-2
    color: #fff
    &:hover
      background: rgba($bg-dark-lighten-2, 0.9)
</style>
