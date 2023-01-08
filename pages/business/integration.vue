<template>
  <!-- DEVELOPERS -->
  <div class="fw-container--dark">
    <section class="container-md" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_howto_section") }}</span>
        <h2>{{ $t("business_howto_title") }}</h2>
      </div>
      <div class="integration-container">
        <article class="card">
          <div class="article-container">
            <div class="article-icon-container">
              <i class="fad fa-link fa-2x"></i>
            </div>
            <h4>Link</h4>
            <p>{{ $t("business_howto_content1") }}</p>
          </div>
        </article>
        <article class="card">
          <div class="article-container">
            <div class="article-icon-container">
              <i class="fad fa-cogs fa-2x"></i>
            </div>
            <h4>SDK</h4>
            <p>{{ $t("business_howto_content2") }}</p>
          </div>
        </article>
      </div>
      <p class="centered-block">
        <a href="/developers" class="bold-link link-with-arrow">{{
          $t("business_howto_content4")
        }}</a>
      </p>
    </section>
  </div>
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
@import "@/assets/sass/vars.sass"
.integration-container
  display: flex
  &>*
    flex: 1 1 50%
    margin-right: $spacing-md
  &>*:last-child
    margin-right: 0

.link-with-arrow
  position: relative
  &:after, &:before
    transition: 0.2s ease-in-out
    opacity: 0
    transform: translateX(0%)
    position: absolute
    right: 0
    font-family: "Font Awesome 5 Duotone"
    content: "\f061"
    color: #2963ff
  &:before
    content: "\10f061"
    color: rgba(41, 99, 255, 0.5)
  &:hover:after, &:hover:before
    transition: 0.2s ease-in-out
    opacity: 1
    transform: translateX(100%)
</style>
