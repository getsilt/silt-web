<template>
  <section class="fw-container">
    <div id="benefits">
      <div class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_benefits_section") }}</span>
          <h2>{{ $t("business_benefits_rules_title") }}</h2>
          <p class="subtitle" v-html="$t('business_benefits_rules_subtitle')" />
        </div>
        <div class="list-wrapper pins">
          <card
            v-for="benefit in benefits"
            :key="benefit.title"
            class="card--w-sm"
          >
            <div class="article-container" slot="body">
              <h4 v-html="$t(`${benefit.title}`)" class="color_primary_text" />
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
          title: "business_benefits_costs_title",
          content: "business_benefits_costs_content",
        },
        {
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
