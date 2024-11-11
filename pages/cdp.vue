<template>
  <div>
    <hero />
    <TrustOf />
    <Benefits />
    <Solution />
  </div>
</template>

<script>
import gsap from "gsap";
import Hero from "@/components/cdp/hero.vue";
import TrustOf from "../components/TrustOf.vue";
import Benefits from "../components/cdp/benefits.vue";
import Solution from "../components/cdp/solution.vue";
import DemoButtons from "../components/DemoButtons.vue";

export default {
  components: {
    Hero,
    TrustOf,
    Benefits,
    Solution,
    DemoButtons,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_cdp_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_cdp_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_cdp_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_cdp_title"),
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
      const sections = ["#problem", "#solution", "#benefits"];
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
