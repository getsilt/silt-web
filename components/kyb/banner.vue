<template>
  <div class="fw-container kyb-banner bg-gradient-1">
    <section>
      <div class="kyb-banner-wrapper">
        <div class="kyb-banner-titles">
          <h3>{{ $t("kyb_call_to_action_title") }}</h3>
          <p class="subtitle">{{ $t("kyb_call_to_action_subtitle") }}</p>
        </div>
        <nuxt-link :to="localePath({ name: 'demo' })">
          <button class="primary">
            {{ $t("btn_cta_book_demo") }}
          </button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      email: "hello@getsilt.com",
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    getEmail() {
      return this.email;
    },
    startFirstAnimationScene: (_this) => {
      const sections = ["#solution"];
      let tm = {};
      for (let section of sections) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        });
        tl.from(section, {
          duration: 1,
          scale: 1,
          y: 100,
          opacity: 0,
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.kyb-banner
  // background: $color-primary
  z-index: 1
  .kyb-banner-wrapper
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-around
    .kyb-banner-titles
      color: #fff
      h3
        color: #fff
        margin-bottom: 0
</style>
