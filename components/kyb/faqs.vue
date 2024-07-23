<template>
  <section>
    <h3 class="faq-headers">{{ $t("FAQ_subtitle_general") }}</h3>
    <div id="kyb-faqs-expandable" class="flex-col kyb-faqs-expandible">
      <Expandable
        v-for="(faq, i) of generalFAQs"
        :key="`generalFAQ-${i}`"
        class="expandable-kyb-faqs"
        :dark="isDark"
      >
        <h2 v-html="$t(faq.title)" slot="title" />
        <div slot="body" v-html="$t(faq.body)" />
      </Expandable>
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
          title: "FAQ_kyb_what_is_kyb_title",
          body: "FAQ_kyb_what_is_kyb_body",
        },
        {
          title: "FAQ_kyb_difference_kyb_and_kyc_title",
          body: "FAQ_kyb_difference_kyb_and_kyc_body",
        },
        {
          title: "FAQ_kyb_regulation_title",
          body: "FAQ_kyb_regulation_body",
        },
        {
          title: "FAQ_kyb_importance_in_compliance_title",
          body: "FAQ_kyb_importance_in_compliance_body",
        },
        {
          title: "FAQ_kyb_who_needs_it_title",
          body: "FAQ_kyb_who_needs_it_body",
        },
        {
          title: "FAQ_kyb_who_is_a_UBO_title",
          body: "FAQ_kyb_who_is_a_UBO_body",
        },
        {
          title: "FAQ_kyb_automated_kyb_processes_title",
          body: "FAQ_kyb_automated_kyb_processes_body",
        },
        {
          title: "FAQ_kyb_time_saved_title",
          body: "FAQ_kyb_time_saved_body",
        },
        {
          title: "FAQ_kyb_why_silts_kyb_title",
          body: "FAQ_kyb_why_silts_kyb_body",
        },
      ],
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
            trigger: "#kyb-faqs-expandable",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#kyb-faqs-expandable .expandable-kyb-faqs", {
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

.kyb-faqs-expandible
    gap: $spacing-md

    h2
        font-size: 1.2rem
        @media (min-width:768px)
            font-size: 1.1rem
</style>
