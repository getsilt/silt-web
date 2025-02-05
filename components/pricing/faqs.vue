<template>
  <section>
    <div class="kyc-faqs">
      <h3 class="faq-header">{{ $t("FAQ_subtitle_general") }}</h3>
      <div id="kyc-faqs-expandable" class="flex-col kyc-faqs-expandible">
        <Expandable
          v-for="(faq, i) of generalFAQs"
          :key="`generalFAQ-${i}`"
          class="expandable-kyc-faqs"
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
          title: "faq_pricing_free_trial_question",
          body: "faq_pricing_free_trial_answer",
        },
        {
          title: "faq_pricing_incomplete_verification_question",
          body: "faq_pricing_incomplete_verification_answer",
        },
        {
          title: "faq_pricing_setup_charges_question",
          body: "faq_pricing_setup_charges_answer",
        },
        {
          title: "faq_pricing_commitment_question",
          body: "faq_pricing_commitment_answer",
        },
        {
          title: "faq_pricing_unitary_cost_question",
          body: "faq_pricing_unitary_cost_answer",
        },
        {
          title: "faq_pricing_difference_kyc_kyb_cdp_question",
          body: "faq_pricing_difference_kyc_kyb_cdp_answer",
        },
        {
          title: "faq_pricing_steps_to_start_question",
          body: "faq_pricing_steps_to_start_answer",
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
            trigger: "#kyc-faqs-expandable",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#kyc-faqs-expandable .expandable-kyc-faqs", {
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

.kyc-faqs
    max-width: 600px
    margin: auto
.faq-header
    text-align: center

.kyc-faqs-expandible
    gap: $spacing-md

h2
    font-size: 1.2rem
    @media (min-width:768px)
        font-size: 1.1rem
</style>
