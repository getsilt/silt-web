<template>
  <div>
    <hero />
    <benefits />
    <solution />
    <banner />
    <integration />
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "@/components/DemoButtons.vue";
import Hero from "@/components/kyb/hero.vue";
import Problem from "@/components/kyb/problem.vue";
import Benefits from "@/components/kyb/benefits.vue";
import Solution from "@/components/kyb/solution/index.vue";
import Integration from "@/components/business/integration.vue";
import Banner from "@/components/kyb/banner.vue";

export default {
  components: {
    DemoButtons,
    Hero,
    Problem,
    Benefits,
    Solution,
    Integration,
    Banner,
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("seo_kyb_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo_kyb_metadescription"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo_kyb_metadescription"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo_kyb_title"),
        },
      ],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      benefits: [
        {
          icon: "fa-lightbulb-dollar fa-3x",
          title: "kyb_benefit_scale_title",
          content: "kyb_benefit_scale_content",
        },
        {
          icon: "fa-sack-dollar fa-3x",
          title: "kyb_benefit_income_title",
          content: "kyb_benefit_income_content",
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
