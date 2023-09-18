<template>
  <!-- Unique advantage  -->
  <div class="fw-container--dark">
    <div class="section-headers">
      <span class="tag">{{ $t("business_solution_section") }}</span>
      <h2 class="tag" v-html="$t('kyb_solution_title')" />
      <h2>{{ $t("kyb_solution_subtitle_1") }}</h2>
      <p class="subtitle" v-html="$t('kyb_solution_subtitle_2')" />
    </div>
    <section class="">
      <featured-features />
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import VTab from "@/components/VTab.vue";
import Card from "@/components/Card.vue";
import DemoButtons from "@/components/DemoButtons.vue";
import FeaturedFeatures from "./fetaured-features.vue";

export default {
  components: {
    VTab,
    Card,
    DemoButtons,
    FeaturedFeatures,
  },
  data() {
    return {
      email: "hello@getsilt.com",
      uniqueBenefits: [
        {
          icon: "fa-calendar-exclamation fa-3x",
          title: "business_benefits_updatedDocs_title",
          content: "business_benefits_updatedDocs_content",
        },
        {
          icon: "fa-badge-sheriff fa-3x",
          title: "business_benefits_list_title",
          content: "business_benefits_list_content",
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
      const sections = ["#unique-benefits"];
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
</style>
