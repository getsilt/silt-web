<template>
  <!-- DEVELOPERS -->
  <section class="highlights-wrapper" id="howto">
    <div class="section-headers">
      <span class="tag">{{ $t("business_howto_section") }}</span>
      <h2>{{ $t("business_howto_title") }}</h2>
    </div>
    <div class="highlights-container">
      <article>
        <div class="article-container">
          <div class="article-icon-container">
            <i class="fad fa-link fa-2x"></i>
          </div>
          <h4>Link</h4>
          <p>{{ $t("business_howto_content1") }}</p>
        </div>
      </article>
      <article>
        <div class="article-container">
          <div class="article-icon-container">
            <i class="fad fa-cogs fa-2x"></i>
          </div>
          <h4>SDK</h4>
          <p>{{ $t("business_howto_content2") }}</p>
        </div>
      </article>
      <article>
        <div class="article-container">
          <div class="article-icon-container">
            <i class="fad fa-network-wired fa-2x"></i>
          </div>
          <h4>API</h4>
          <p>{{ $t("business_howto_content3") }}</p>
        </div>
      </article>
    </div>
    <p class="centered-block">
      <a href="/developers" class="bold-link">{{
        $t("business_howto_content4")
      }}</a>
    </p>
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
      const sections = ["#howto"];
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
