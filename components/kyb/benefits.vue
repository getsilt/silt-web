<template>
  <section class="fw-container">
    <div class="highlights-wrapper">
      <div class="section-headers">
        <span class="tag">{{ $t("business_benefits_section") }}</span>
        <h2>{{ $t("kyb_benefit_title") }}</h2>
        <p class="subtitle" v-html="$t('kyb_benefit_subtitle')" />
      </div>
      <div class="list-wrapper pins">
        <card
          v-for="benefit in benefits"
          :key="benefit.title"
          class="card--w-sm"
        >
          <div class="article-container" slot="body">
            <h4 v-html="$t(`${benefit.title}`)" class="color_blue_text" />
            <p>{{ $t(benefit.content) }}</p>
          </div>
        </card>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      email: "hello@getsilt.com",
      benefits: [
        {
          title: "kyb_benefit_time_title",
          content: "kyb_benefit_time_content",
        },
        {
          title: "kyb_benefit_growth_title",
          content: "kyb_benefit_growth_content",
        },
        {
          title: "kyb_benefit_security_title",
          content: "kyb_benefit_security_content",
        },
        {
          title: "kyb_benefit_simplify_title",
          content: "kyb_benefit_simplify_content",
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

<style lang="sass" scoped></style>
