<template>
  <section id="usecases">
    <div class="section-headers">
      <span class="tag">{{ $t("business_usecases_section") }}</span>
      <h2>{{ $t("business_usecases_title") }}</h2>
    </div>
    <div class="flex-row usecase-wrapper">
      <div class="usecase-titles">
        <h3
          v-for="usecase in usecases"
          :key="`usecase-title-${usecase.title}`"
          :class="{ active: usecase.title == activeUsecase }"
          @click="activeUsecase = usecase.title"
        >
          {{ $t(usecase.title) }}
        </h3>
      </div>
      <template v-for="usecase in usecases">
        <div
          v-if="usecase.title == activeUsecase"
          :key="`usecase-body-${usecase.title}`"
          class="usecase-body"
        >
          <h4>{{ $t(usecase.subtitle) }}</h4>
          <p>{{ $t(usecase.content) }}</p>
          <div class="usecase-body_feature-tags">
            <template v-for="tag in usecase.tags">
              <router-link
                :key="`feature-tags-${tag}`"
                :to="{ name: featureTags[tag].route }"
                v-html="$t(`${featureTags[tag].title}`)"
              >
              </router-link>
            </template>
          </div>
        </div>
      </template>
    </div>
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
      activeUsecase: "business_usecases_fintech_section",
      featureTags: {
        KYC: { title: this.$t("nav_feature_kyc"), route: "kyc" },
        KYB: { title: "KYB", route: "kyb" },
        AML: { title: "AML/PEP", route: "aml" },
        Biocheck: { title: this.$t("nav_feature_biocheck"), route: "biocheck" },
        Misconduct: {
          title: this.$t("nav_feature_misconduct"),
          route: "misconduct",
        },
      },
      usecases: [
        {
          icon: "fa-university",
          title: "business_usecases_fintech_section",
          subtitle: "business_usecases_fintech_title",
          content: "business_usecases_fintech_body",
          tags: ["KYC", "KYB", "Biocheck", "Misconduct", "AML"],
        },
        {
          icon: "fa-expand-arrows", //fa-recycle
          title: "business_usecases_mobility_section",
          subtitle: "business_usecases_mobility_title",
          content: "business_usecases_mobility_body",
          tags: ["KYC", "Misconduct", "Biocheck"],
        },
        {
          icon: "fa-comments-alt-dollar",
          title: "business_usecases_marketplaces_section",
          subtitle: "business_usecases_marketplaces_title",
          content: "business_usecases_marketplaces_body",
          tags: ["KYC", "Misconduct", "Biocheck"],
        },
        {
          icon: "fa-dice",
          title: "business_usecases_gaming_section",
          subtitle: "business_usecases_gaming_title",
          content: "business_usecases_gaming_body",
          tags: ["KYC", "Misconduct", "AML", "Biocheck"],
        },
        {
          icon: "fa-arrows",
          title: "business_usecases_massive_hires_section",
          subtitle: "business_usecases_massive_hires_title",
          content: "business_usecases_massive_hires_body",
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
  flex: 1 1 40%
  & > *
    color: $color-grey-darken-1
    cursor: pointer
    transition: 0.3s ease-in-out
    &:hover
      color: var(--text-secondary)
      transition: 0.3s ease-in-out
  & > *.active
    color: var(--text-primary)
.usecase-wrapper
  flex-wrap: wrap
  justify-content: center
.usecase-body
  flex: 1 1 50%
  padding: $spacing-lg
  padding-top: 0
  max-width: -webkit-fill-available
  .demo_cta__wrapper
    margin-top: $spacing-xlg
  .usecase-body_feature-tags
    & > *
      margin-right: $spacing-lg
</style>
