<template>
  <section>
    <div class="misconduct-faqs">
      <h3 class="faq-header">{{ $t("FAQ_subtitle_general") }}</h3>
      <div
        id="misconduct-faqs-expandable"
        class="flex-col misconduct-faqs-expandible"
      >
        <Expandable
          v-for="(faq, i) of generalFAQs"
          :key="`generalFAQ-${i}`"
          class="expandable-misconduct-faqs"
          :dark="isDark"
        >
          <h2 v-html="$t(faq.title)" slot="title" />
          <div slot="body" v-html="$t(faq.body)" />
        </Expandable>
      </div>
    </div>
  </section>
</template>

<script>
import Expandable from "../Expandable.vue";
import gsap from "gsap";

export default {
  components: { Expandable },
  data() {
    return {
      generalFAQs: [
        {
          title: "faq_misconduct_list_how_does_it_work_question",
          body: "faq_misconduct_list_how_does_it_work_answer",
        },
        {
          title: "faq_misconduct_list_data_safety_question",
          body: "faq_misconduct_list_data_safety_answer",
        },
      ],
      isDark: false,
    };
  },
  created() {
    if (process.client) {
      this.isDark = localStorage.getItem("dark-theme") === "true";
    }
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    startFirstAnimationScene: (_this) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#misconduct-faqs-expandable",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#misconduct-faqs-expandable .expandable-misconduct-faqs", {
          duration: 1,
          scale: 1,
          y: 75,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.misconduct-faqs
    max-width: 600px
    margin: auto
.faq-header
    text-align: center

.misconduct-faqs-expandible
    gap: $spacing-md

h2
    font-size: 1.2rem
    @media (min-width:768px)
        font-size: 1.1rem
</style>
