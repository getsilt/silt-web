<template>
  <div class="fw-container--dark">
    <!-- TECH FEATURES -->
    <section class="tech-features_wrapper" id="techfeatures">
      <div class="claim-info">
        <h3 class="title">
          {{ $t("business_differences_title") }}
        </h3>
      </div>

      <div class="tech-features_list">
        <div class="flex-col">
          <expandable
            :key="`techfeature-${i}`"
            v-for="(feature, i) of secTechfeatures"
            class="techfeatures_item"
          >
            <h5 slot="title">{{ $t(feature.title) }}</h5>
            <div slot="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque
              quae veniam numquam voluptatum at. Officia fugiat quo accusamus
              praesentium tenetur.
            </div>
          </expandable>
        </div>
        <div class="flex-col">
          <expandable
            :key="`uxfeature-${i}`"
            v-for="(feature, i) of uxTechfeatures"
            class="techfeatures_item"
          >
            <h5 slot="title">{{ $t(feature.title) }}</h5>
            <div slot="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque
              quae veniam numquam voluptatum at. Officia fugiat quo accusamus
              praesentium tenetur.
            </div>
          </expandable>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import Expandable from "@/components/Expandable.vue";
export default {
  components: { Expandable },
  data() {
    return {
      email: "hello@getsilt.com",
      secTechfeatures: [
        {
          icon: "fa-head-side scan-icon",
          title: "business_highlights_faceRecognition_title",
        },
        {
          icon: "fa-heartbeat",
          title: "business_highlights_liveness_title",
        },
        {
          icon: "fa-badge-check",
          title: "business_highlights_authenticity_title",
        },
        {
          icon: "fa-user-check",
          title: "business_highlights_biometric_title",
        },
      ],
      uxTechfeatures: [
        {
          icon: "fa-id-card scan-icon",
          title: "business_highlights_docscan_title",
        },
        {
          icon: "fa-badge-check",
          title: "business_highlights_authenticity_title",
        },
        {
          icon: "fa-user-check",
          title: "business_highlights_biometric_title",
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
            trigger: "#techfeatures .tech-features_list",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#techfeatures .techfeatures_item", {
          duration: 1,
          scale: 1,
          y: 75,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#assistedPictureQualityScreenshots",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#assistedPictureQualityScreenshots", {
          duration: 0.5,
          perspective: 0,
          ease: "power2.out",
        })
        .from(".screenshotPictureQuality", {
          duration: 1,
          scale: 1,
          x: -100,
          rotateY: 0,
          opacity: 0,
          stagger: -0.2,
          ease: "power2.out",
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
section.tech-features_wrapper
  padding: $spacing-lg
  max-width: 1600px
  display: flex
  flex-direction: column
  .tech-features_list
    display: flex
    & > *
      flex: 1 1 auto
      & > *
        margin-bottom: $spacing-md
      &:not(:last-child)
        margin-right: $spacing-md
</style>
