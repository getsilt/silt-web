<template>
  <section class="claim-container" >
    <!-- PRODUCT BENEFITS -->
    <div class="fw-container--light" id="benefits">
      <div class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_benefits_section") }}</span>
          <h2>{{ $t("business_benefits_title") }}</h2>
        </div>
        <div class="highlights-container pins">
          <article v-for="benefit in benefits" :key="benefit.title">
            <div class="article-container">
              <div class="article-icon-container">
                <i class="fad" :class="benefit.icon"></i>
              </div>
              <h4>{{ $t(benefit.title) }}</h4>
              <p>{{ $t(benefit.content) }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
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
          icon: "fa-rabbit-fast fa-3x",
          title: "business_benefits_time_title",
          content: "business_benefits_time_content",
        },
        {
          icon: "fa-sack-dollar fa-3x",
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

</style>
