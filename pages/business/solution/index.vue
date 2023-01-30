<template>
  <!-- Unique advantage  -->
  <div class="fw-container--dark">
    <div class="section-headers">
      <span class="tag">{{
        $t("business_highlights_vanguardTech_section")
      }}</span>
      <h2>{{ $t("business_highlights_vanguardTech_title") }}</h2>
      <p>{{ $t("business_highlights_vanguardTech_content") }}</p>
    </div>
    <section class="">
      <featured-features :hidden-tab="hiddenTab" />
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
  props: {
    hiddenTab: {
      required: false,
    },
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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#features .features-container",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#features .features-item", {
          duration: 0.2,
          scale: 1,
          y: 75,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });
    },
  },
};
</script>

<style lang="sass" scoped></style>
