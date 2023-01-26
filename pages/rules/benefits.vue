<template>
  <section class="fw-container light">
    <!-- PRODUCT BENEFITS -->
    <div id="benefits">
      <div class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_benefits_section") }}</span>
          <h2>{{ $t("business_benefits_title") }}</h2>
          <p class="subtitle" v-html="$t('business_benefits_landing_subtitle')">
            {{ $t("business_benefits_landing_subtitle") }}
          </p>
        </div>
        <div class="list-wrapper pins">
          <card
            v-for="benefit in benefits"
            :key="benefit.title"
            class="card--w-sm"
          >
            <div class="article-container" slot="body">
              <div class="article-icon-container">
                <i class="fad" :class="benefit.icon"></i>
              </div>
              <h5>{{ $t(benefit.title) }}</h5>
              <p>{{ $t(benefit.content) }}</p>
            </div>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      email: "hello@getsilt.com",
      benefits: [
        {
          icon: "fa-receipt fa-2x",
          title: "business_benefits_compliance_title",
          content: "business_benefits_compliance_body",
        },
        {
          icon: "fa-badge-check fa-2x",
          title: "business_benefits_fraud_title",
          content: "business_benefits_fraud_body",
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
</style>
