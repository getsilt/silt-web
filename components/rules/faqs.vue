<template>
  <section>
    <div class="rules-faqs">
      <h3 class="faq-header">{{ $t("FAQ_subtitle_general") }}</h3>
      <div id="rules-faqs-expandable" class="flex-col rules-faqs-expandible">
        <Expandable
          v-for="(faq, i) of generalFAQs"
          :key="`generalFAQ-${i}`"
          class="expandable-rules-faqs"
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
          title: "faq_rules_implement_new_rule_question",
          body: "faq_rules_implement_new_rule_answer",
        },
        {
          title: "faq_rules_number_of_rules_question",
          body: "faq_rules_number_of_rules_answer",
        },
        {
          title: "faq_rules_deactivate_rule_question",
          body: "faq_rules_deactivate_rule_answer",
        },
        {
          title: "faq_rules_affect_entire_company_question",
          body: "faq_rules_affect_entire_company_answer",
        },
        {
          title: "faq_rules_user_flagged_question",
          body: "faq_rules_user_flagged_answer",
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
            trigger: "#rules-faqs-expandable",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#rules-faqs-expandable .expandable-rules-faqs", {
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

.rules-faqs
    max-width: 600px
    margin: auto
.faq-header
    text-align: center

.rules-faqs-expandible
    gap: $spacing-md

h2
    font-size: 1.2rem
    @media (min-width:768px)
        font-size: 1.1rem
</style>
