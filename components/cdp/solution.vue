<template>
  <div class="fw-container--dark">
    <div id="solution">
      <div class="section-headers">
        <span class="tag">{{ $t("business_solution_section") }}</span>
        <h2>
          <span class="text-gradient-1 title-bold">
            {{ $t("cdppage_solution_h2") }}
          </span>
        </h2>
        <h3 class="subtitle" v-html="$t('cdppage_solution_h3')" />
        <Card class="card">
          <div class="article-container solution_wrapper" slot="body">
            <div>
              <span class="color_accent_text"><b>99%</b></span>
              <span class="color_accent_text">
                <b>{{ $t("global_accuracy") }}</b>
              </span>
            </div>
            <span>
              {{ $t("cdp_solution_accuracy_body") }}
            </span>
          </div>
        </Card>
        <div class="solution_wrapper">
          <h4 class="solution_wrapper__book-a-demo">
            {{ $t("book_a_demo_cdp") }}
          </h4>
          <DemoButtons :dark="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
import DemoButtons from "../DemoButtons.vue";
import gsap from "gsap";

export default {
  components: { Card, DemoButtons },
  data() {
    return {};
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
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

.card
  margin-bottom: $spacing-xlg

.color_accent_text
  font-size: 2rem
  font-family: $font-bold
  margin-bottom: $spacing-sm

.solution_wrapper
  display: flex
  flex-direction: row
  gap: $spacing-xlg
  text-align: left
  justify-content: space-between
  width: 100%
  &__book-a-demo
    max-width: 400px
</style>
