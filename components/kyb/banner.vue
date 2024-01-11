<template>
  <div class="fw-container kyb-banner bg-gradient-1">
    <div class="kyb-banner-wrapper highlight-container">
      <h3>{{ $t("kyb_call_to_action_title") }}</h3>
      <p class="subtitle">{{ $t("kyb_call_to_action_subtitle") }}</p>
      <ChecksList :features="features" />
      <DemoButtons :dark="true"/>
    </div>
  </div>
</template>

<script>
import DemoButtons from "../DemoButtons.vue";
import gsap from "gsap";
import ChecksList from "../ChecksList.vue";
export default {
  components: { ChecksList, DemoButtons },
  data() {
    return {
      email: "hello@getsilt.com",
      features: [
        {
          title: "kyb_call_to_action_check_list_1",
        },
        {
          title: "kyb_call_to_action_check_list_2",
        },
        {
          title: "kyb_call_to_action_check_list_3",
        },
        {
          title: "kyb_call_to_action_check_list_4",
        },
        {
          title: "kyb_call_to_action_check_list_5",
        },
        {
          title: "kyb_call_to_action_check_list_6",
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
      const sections = ["#solution"];
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

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.kyb-banner
  // background: $color-primary
  z-index: 1
  .kyb-banner-wrapper
    display: flex
    flex-direction: column
    align-items: center
    gap: $spacing-md
</style>
