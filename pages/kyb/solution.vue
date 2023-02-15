<template>
  <div class="fw-container">
    <section class="container-md">
      <div class="section-headers">
        <span class="tag">{{ $t("business_solution_section") }}</span>
        <h2>{{ $t("kyb_solution_title") }}</h2>
      </div>
      <div class="card">
        <div class="article-container claim-container">
          <div class="claim-side-img">
            <template v-if="$root.$i18n.locale === 'es'">
              <img
                src="@/assets/img/illustrations/kyb_flow_es.svg"
                :alt="$t('seo_3')"
                width="300"
              />
            </template>
            <template v-else>
              <img
                src="@/assets/img/illustrations/kyb_flow_en.svg"
                :alt="$t('seo_3')"
                width="300"
              />
            </template>
          </div>
          <div class="claim-info top-claim-info">
            <p>{{ $t("kyb_solution_content1") }}</p>
            <p>{{ $t("kyb_solution_content2") }}</p>
            <p>
              <b>{{ $t("kyb_solution_compliant") }}</b>
            </p>
            <p class="centered-block integration-link">
              <demo-buttons />
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
