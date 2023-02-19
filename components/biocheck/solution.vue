<template>
<div class="fw-container--dark">
  <section class="container-md">
    <div class="section-headers">
      <span class="tag">{{ $t("business_solution_section") }}</span>
    </div>
    <div class="card">
      <div class="article-container claim-container">
        <div class="claim-side-img">
          <template v-if="$root.$i18n.locale === 'es'">
            <img
              src="@/assets/img/illustrations/silt-workflow-biocheck_es.svg"
              :alt="$t('seo_document_scan')"
              width="270"
            />
          </template>
          <template v-else>
            <img
              src="@/assets/img/illustrations/silt-workflow-biocheck_en.svg"
              :alt="$t('seo_document_scan')"
              width="270"
            />
          </template>
        </div>
        <div class="claim-info top-claim-info">
          <h4>{{ $t("biocheck_solution_title") }}</h4>
          <p v-html="$t('biocheck_solution_content')" />
          <p class="centered-block integration-link">
            <demo-buttons class="dark"/>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "@/components/DemoButtons.vue";
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

.top-claim-info
  margin-bottom: 0
  margin-top: $spacing-xlg
</style>
