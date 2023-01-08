<template>
  <section id="usecases">
    <div class="section-headers">
      <span class="tag">{{ $t("business_usecases_section") }}</span>
      <h2>{{ $t("business_usecases_title") }}</h2>
      <!-- <p>{{ $t("business_usecases_content") }}</p> -->
    </div>

    <div class="flex-row">
      <div class="usecase-titles">
        <h2
          v-for="usecase in usecases"
          :key="`usecase-title-${usecase.title}`"
          :class="{ active: usecase.title == activeUsecase }"
          @click="activeUsecase = usecase.title"
        >
          {{ $t(usecase.title) }}
        </h2>
      </div>
      <template v-for="usecase in usecases">
        <div
          v-if="usecase.title == activeUsecase"
          :key="`usecase-body-${usecase.title}`"
          class="usecase-body"
        >
          <h3>{{ $t(usecase.subtitle) }}</h3>
          <p>{{ $t(usecase.content) }}</p>
          <div class="usecase-body_feature-tags">
            <template v-for="tag in usecase.tags">
              <router-link
                :key="`feature-tags-${tag}`"
                :to="{ name: featureTags[tag].route }"
                >{{ $t(featureTags[tag].title) }}</router-link
              >
            </template>
          </div>
          <demo-buttons />
        </div>
      </template>
    </div>
    <!-- <div class="features-container">
      <div
        class="features-item"
        v-for="usecase in usecases"
        :key="usecase.title"
      >
        <i class="fad fa-2x" :class="usecase.icon"></i>
        <h4>{{ $t(usecase.title) }}</h4>
      </div>
    </div> -->
  </section>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "@/components/DemoButtons.vue";
export default {
  components: { DemoButtons },
  data() {
    return {
      email: "hello@getsilt.com",
      activeUsecase: "business_usecases_neobank",
      featureTags: {
        KYC: { title: this.$t("nav_feature_kyc"), route: "business" },
        KYB: { title: "KYB", route: "kyb" },
        AML: { title: "AML/PEP", route: "business" },
        Biocheck: { title: this.$t("nav_feature_biocheck"), route: "biocheck" },
        Misconduct: {
          title: this.$t("nav_feature_misconduct"),
          route: "misconduct",
        },
      },
      usecases: [
        {
          icon: "fa-university",
          title: "business_usecases_neobank",
          subtitle: "business_usecases_neobank_subtitle",
          content: "business_usecases_neobank_content",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
          tags: ["KYC", "KYB", "Biocheck", "Misconduct", "AML"],
        },
        {
          icon: "fa-expand-arrows", //fa-recycle
          title: "business_usecases_sharing",
          subtitle: "business_usecases_sharing_subtitle",
          content: "business_usecases_sharing_content",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
          tags: ["KYC", "Misconduct", "Biocheck"],
        },
        {
          icon: "fa-comments-alt-dollar",
          title: "business_usecases_p2p",
          subtitle: "business_usecases_p2p_subtitle",
          content: "business_usecases_p2p_content",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
          tags: ["KYC", "Misconduct", "Biocheck"],
        },
        {
          icon: "fa-dice",
          title: "business_usecases_gaming",
          subtitle: "business_usecases_gaming_subtitle",
          content: "business_usecases_gaming_content",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
          tags: ["KYC", "Misconduct", "AML", "Biocheck"],
        },
        {
          icon: "fa-arrows", //fa-chart-network fa-rocket
          title: "business_usecases_contract",
          subtitle: "business_usecases_contract_subtitle",
          content: "business_usecases_contract_content",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
          tags: ["KYC", "KYB", "Misconduct", "Biocheck"],
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
@import "@/assets/sass/vars.sass"
.usecase-titles
  flex: 0 1 40%
  & > *
    color: $color-grey-darken-1
    cursor: pointer
    transition: 0.3s ease-in-out
    &:hover
      color: $color-grey-darken-3
      transition: 0.3s ease-in-out
  & > *.active
    color: $color-black
.usecase-body
  flex: 1 1 50%
  padding: $spacing-lg
  .demo_cta__wrapper
    margin-top: $spacing-xlg
  .usecase-body_feature-tags
    & > *
      margin-right: $spacing-lg
</style>
