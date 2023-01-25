<template>
  <section class="fw-container light">
    <!-- PRODUCT BENEFITS -->
    <div id="benefits">
      <div class="highlights-wrapper">
        <div class="section-headers">
          <!-- TODO: Change copies and icons -->
          <span class="tag">{{ $t("business_benefits_section") }}</span>
          <h2>{{ $t("business_benefits_title") }}</h2>
          <p
            class="subtitle"
            v-html="$t('business_highlights_vanguardTech_content')"
          >
            {{ $t("business_highlights_vanguardTech_content") }}
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
          icon: "fa-funnel-dollar fa-2x",
          title: "business_benefits_cac_title",
          content: "business_benefits_cac_content",
        },
        {
          icon: "fa-rabbit-fast fa-2x",
          title: "business_benefits_time_title",
          content: "business_benefits_time_content",
        },
        {
          icon: "fa-sack-dollar fa-2x",
          title: "business_benefits_costs_title",
          content: "business_benefits_costs_content",
        },
        {
          icon: "fa-sack-dollar fa-2x",
          title: "business_benefits_costs_title",
          content: "business_benefits_costs_content",
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
