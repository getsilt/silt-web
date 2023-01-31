<template>
  <div class="fw-container--dark">
    <section class="container-md">
      <div class="section-headers">
        <span class="tag">{{ $t("kyb_problem_section") }}</span>
        <h4>{{ $t("kyb_problem_title") }}</h4>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
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

<style lang="sass" scoped></style>
