<template>
  <section class="fw-container">
    <!-- PRODUCT BENEFITS -->
    <div id="benefits">
      <div class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_benefits_section") }}</span>
          <h2>{{ $t("homepage_benefits_h2") }}</h2>
          <p
            class="subtitle"
            v-html="$t('business_benefits_landing_subtitle')"
          />
        </div>
        <div class="list-wrapper pins">
          <card
            v-for="benefit in benefits"
            :key="benefit.title"
            class="card--w-sm"
          >
            <div class="article-container" slot="body">
              <span class="colored article-container-kpi">
                {{ benefit.kpi }}
              </span>
              <h4 class="colored">{{ $t(`${benefit.title}`) }}</h4>
              <p>{{ $t(benefit.content) }}</p>
            </div>
          </card>
        </div>
      </div>
      <DemoButtons class="benefits-demo-buttons" />
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import Card from "@/components/Card.vue";
import DemoButtons from "../DemoButtons.vue";

export default {
  components: { Card, DemoButtons },
  data() {
    return {
      email: "hello@getsilt.com",
      benefits: [
        {
          title: "business_benefits_cac_title",
          content: "business_benefits_cac_body",
          kpi: "+60%",
        },
        {
          title: "business_benefits_onboarding_title",
          content: "business_benefits_onboarding_body",
          kpi: "92%",
        },
        {
          title: "business_benefits_costs_title",
          content: "business_benefits_costs_content",
          kpi: "56%",
        },
        {
          title: "business_benefits_fraud_title",
          content: "business_benefits_fraud_body",
          kpi: "99%",
        },
      ],
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
      const sections = ["#benefits"];
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
.article-icon-container
  margin-top: $spacing-sm
  margin-bottom: $spacing-lg
.article-container
  &-kpi
    font-size: 3.2rem
    font-family: $font-bold
    margin-bottom: $spacing-sm

.benefits-demo-buttons
  margin: $spacing-md 0

.colored
  transition: 0.3s ease-in-out
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  -moz-background-clip: text
  -moz-text-fill-color: transparent
  background-size: 300%
  background-position: 100%
  background-repeat: repeat
  background-image: linear-gradient(45deg, rgba(48,50,205,1) 0%, rgba(48,104,255,1) 70%, rgba(108,176,255,1) 100%)
</style>
