<template>
  <section>
    <div class="faqs">
      <h3 class="faq-header">{{ $t(headerCopy) }}</h3>
      <div :id="`faqs-expandable-${_uid}`" class="flex-col faqs-expandible">
        <Expandable
          v-for="(faq, i) of faqsList"
          :key="`generalFAQ-${i}`"
          class="expandable-faqs"
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
import gsap from "gsap";
import Expandable from "./Expandable.vue";

export default {
  components: { Expandable },
  props: {
    faqsList: { required: true, type: Array },
    headerCopy: {
      required: false,
      type: String,
      default: "FAQ_subtitle_general",
    },
  },
  data() {
    return {
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
    startFirstAnimationScene() {
      const triggerId = `#faqs-expandable-${this._uid}`;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: triggerId,
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from(`${triggerId} .expandable-faqs`, {
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

.faqs
  max-width: 600px
  margin: auto
.faq-header
  text-align: center

.faqs-expandible
  gap: $spacing-md

h2
  font-size: 1.2rem
  @media (min-width:768px)
    font-size: 1.1rem
</style>
