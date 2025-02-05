<template>
  <div>
    <hero />
    <solution />
    <Faqs />
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "@/components/DemoButtons.vue";
import Hero from "@/components/misconduct/hero.vue";
import Solution from "@/components/misconduct/solution.vue";
import Faqs from "../components/misconduct/faqs.vue";
export default {
  components: { DemoButtons, Hero, Solution, Faqs },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_misconduct_title"),
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_misconduct_title"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_misconduct_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_misdconduct_metadescription"),
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
