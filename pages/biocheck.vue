<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('biocheck_claim1')" />
        <h4 class="subtitle" v-html="$t('biocheck_claim2')" />
        <demo-buttons />
      </div>
      <div class="claim-side-img screenshots-container">
        <div class="">
          <img
            class="screenshot take-picture"
            src="@/assets/img/screenshots/screenshot_selfie_es.jpg"
            :alt="$t('seo_3')"
          />
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <div class="fw-container--dark" id="problem">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("biocheck_problem_section") }}</span>
          <h4>{{ $t("biocheck_problem_title") }}</h4>
        </div>
      </section>
    </div>
    <section class="claim-wrapper" id="solution">
      <div class="claim-container left">
        <div class="claim-side-img diagram" id="diagram">
          <template v-if="$root.$i18n.locale === 'es'">
            <img
              class=""
              src="@/assets/img/illustrations/silt-workflow-biocheck_es.svg"
              :alt="$t('seo_3')"
              width="450"
              height="393"
            />
          </template>
          <template v-else>
            <img
              class=""
              src="@/assets/img/illustrations/silt-workflow-biocheck_en.svg"
              :alt="$t('seo_3')"
              width="350"
              height="393"
            />
          </template>
        </div>
        <div class="claim-info-wrapper differences">
          <div class="claim-info">
            <h3 class="title">
              {{ $t("biocheck_solution_title") }}
            </h3>
            <p v-html="$t('biocheck_solution_content')" />
            <demo-buttons />
          </div>
        </div>
      </div>
    </section>
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
