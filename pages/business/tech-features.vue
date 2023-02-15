<template>
  <div class="fw-container">
    <div class="section-headers">
      <span class="tag">{{ $t("features_title") }}</span>
      <h2 v-html="$t('features_subtitle')" class="features_subtitle" />
    </div>
    <!-- TECH FEATURES -->
    <section class="tech-features_wrapper" id="techfeatures">
      <div class="tech-features_list">
        <div class="flex-col">
          <expandable
            :key="`techfeature-${i}`"
            v-for="(feature, i) of secTechfeatures"
            class="techfeatures_item"
          >
            <h5
              v-html="$t(feature.title)"
              slot="title"
              class="feature_security_title color_accent_text"
            />
            <div slot="body">
              {{ $t(feature.body) }}
            </div>
          </expandable>
        </div>
        <div class="flex-col">
          <expandable
            :key="`uxfeature-${i}`"
            v-for="(feature, i) of uxTechfeatures"
            class="techfeatures_item"
          >
            <h5
              v-html="$t(feature.title)"
              slot="title"
              class="feature_ux_title color_blue_text"
            />
            <div slot="body">
              {{ $t(feature.body) }}
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
          title: "features_security_video_selfie_liveness_detection_title",
          body: "features_security_video_selfie_liveness_detection_body",
        },
        {
          icon: "fa-heartbeat",
          title: "features_security_selfie_forgery_title",
          body: "features_security_selfie_forgery_detector_body",
        },
        {
          icon: "fa-user-check",
          title: "features_security_expired_documents_title",
          body: "features_security_expired_documents_body",
        },
        {
          icon: "fa-badge-check",
          title: "features_security_document_forgery_detector_title",
          body: "features_security_document_forgery_detector_body",
        },
        {
          icon: "fa-badge-check",
          title: "features_security_biometric_verification_title",
          body: "features_security_biometric_verification_body",
        },
        {
          icon: "fa-badge-check",
          title: "features_security_misconduct_list_title",
          body: "features_security_misconduct_list_body",
        },
        {
          icon: "fa-badge-check",
          title: "features_security_rules_title",
          body: "features_security_rules_body",
        },
      ],
      uxTechfeatures: [
        {
          icon: "fa-id-card scan-icon",
          title: "features_ux_digital_identity_title",
          body: "features_ux_digital_identity_body",
        },
        {
          icon: "fa-badge-check",
          title: "features_ux_document_photos_native_camera_title",
          body: "features_ux_document_photos_native_camera_body",
        },
        {
          icon: "fa-badge-check",
          title: "features_ux_image_quality_feedback_title",
          body: "features_ux_image_quality_feedback_body",
        },
        {
          icon: "fa-user-check",
          title: "features_ux_document_verification_title",
          body: "features_ux_document_verification_body",
        },
        {
          icon: "fa-user-check",
          title: "features_ux_accepted_documents_title",
          body: "features_ux_accepted_documents_body",
        },
        {
          icon: "fa-user-check",
          title: "features_ux_customization_title",
          body: "features_ux_customization_body",
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
