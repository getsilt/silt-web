<template>
  <div>
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title">
          {{ $t("business_benefits_list_title") }}
        </h1>
        <h4 class="subtitle">
          {{ $t("business_benefits_list_content") }}
        </h4>
        <demo-buttons />
      </div>
      <div class="claim-side-img screenshots-container">
        <div class="">
          <img
            class=""
            src="@/assets/img/illustrations/watch_list_diagram_flow.png"
            :alt="$t('seo_3')"
            width="300"
          />
        </div>
      </div>
    </section>
    <div class="fw-container--dark" id="problem">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("biocheck_problem_section") }}</span>
          <h4>{{ $t("misconduct_problem_title") }}</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "../components/DemoButtons.vue";
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
      const sections = ["#problem", "#solution"];
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
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 450px

.screenshot
  min-width: 120px
  max-width: 240px
  box-shadow: $box-shadow-1
.claim-info-wrapper.differences
  display: flex
  align-items: center
</style>
