<template>
  <div>
    <hero />
    <solution />
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "../components/DemoButtons.vue";
import Hero from "./misconduct/hero.vue";
import Solution from "./misconduct/solution.vue";
export default {
  components: { DemoButtons, Hero, Solution },
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
      const sections = ["#problem", "#solution"];
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
