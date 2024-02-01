<template>
  <div class="fw-container--dark">
    <section class="container-md" id="rules-solution">
      <div class="section-headers">
        <span class="tag">{{ $t("business_solution_section") }}</span>
        <h2>{{ $t("business_solution_rules_page_title") }}</h2>
      </div>
      <div class="card">
        <div class="article-container claim-container">
          <div class="claim-side-img">
            <template>
              <img
                src="@/assets/img/illustrations/rules_flow.svg"
                :alt="$t('seo_document_scan')"
                width="500"
              />
            </template>
          </div>
          <div class="claim-info top-claim-info">
            <p>{{ $t("business_solution_rules_page_content") }}</p>
            <p class="centered-block integration-link">
              <demo-buttons class="dark" />
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "../../components/DemoButtons.vue";
export default {
  components: { DemoButtons },
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
      const sections = ["#rules-solution"];
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

.integration-link
  margin-top: $spacing-xlg
  .with-arrow
    position: relative
    &:after, &:before
      transition: 0.2s ease-in-out
      opacity: 0
      transform: translateX(0%)
      position: absolute
      right: 0
      font-family: "Font Awesome 5 Duotone"
      content: "\f061"
      color: #2963ff
      &:hover:after
        transition: 0.2s ease-in-out
        opacity: 1
        transform: translateX(100%)
</style>
