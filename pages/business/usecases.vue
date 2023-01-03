<template>
  <section class="features-wrapper" id="usecases">
    <div class="section-headers">
      <span class="tag">{{ $t("business_usecases_section") }}</span>
      <h2>{{ $t("business_usecases_title") }}</h2>
      <p>{{ $t("business_usecases_content") }}</p>
    </div>
    <div class="features-container">
      <div
        class="features-item"
        v-for="usecase in usecases"
        :key="usecase.title"
      >
        <i class="fad fa-2x" :class="usecase.icon"></i>
        <h4>{{ $t(usecase.title) }}</h4>
      </div>
    </div>
    <demo-buttons />
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      email: "hello@getsilt.com",
      usecases: [
        {
          //img: require('assets/img/icons/credit-card.svg'),
          icon: "fa-university",
          title: "business_usecases_neobank",
        },
        {
          icon: "fa-expand-arrows", //fa-recycle
          // img: require('assets/img/icons/money-bag.svg'),
          title: "business_usecases_sharing",
        },
        {
          icon: "fa-comments-alt-dollar",
          // img: require('assets/img/icons/invest.svg'),
          title: "business_usecases_p2p",
        },
        {
          icon: "fa-dice",
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_usecases_gaming",
        },
        {
          icon: "fa-arrows", //fa-chart-network fa-rocket
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_usecases_contract",
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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#usecases .features-container",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#usecases .features-item", {
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
</style>
