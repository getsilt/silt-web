<template>
  <div>
    <hero />
    <problem />
    <solution />
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "../components/DemoButtons.vue";
import Hero from "./biocheck/hero.vue";
import Problem from "./biocheck/problem.vue";
import Solution from "./biocheck/solution.vue";
export default {
  components: { DemoButtons, Hero, Problem, Solution },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_biocheck_title"),
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_biocheck_title"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_biocheck_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_mbiocheck_metadescription"),
        },
      ],
    };
  },
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
