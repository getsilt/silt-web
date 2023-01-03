<template>
  <section class="claim-container">
    <!-- TECH FEATURES -->
    <section class="features-wrapper" id="techfeatures">
      <div class="section-headers">
        <span class="tag">{{
          $t("business_highlights_vanguardTech_section")
        }}</span>
        <h2>{{ $t("business_highlights_vanguardTech_title") }}</h2>
        <p>{{ $t("business_highlights_vanguardTech_content") }}</p>
      </div>
      <div class="features-container">
        <div
          class="features-item"
          v-for="feature in techfeatures"
          :key="feature.title"
        >
          <i class="fad fa-2x" :class="feature.icon"></i>
          <h4>{{ $t(feature.title) }}</h4>
        </div>
      </div>
    </section>
    <!-- Assisted Picture Quality  -->
    <div class="fw-container--light">
      <section class="claim-wrapper">
        <div class="claim-container left">
          <div
            class="claim-side-img screenshots-container"
            id="assistedPictureQualityScreenshots"
          >
            <template v-if="$root.$i18n.locale === 'es'">
              <div class="screenshot-container">
                <img
                  id="screenshot-blurry"
                  class="screenshot lg screenshotPictureQuality"
                  src="@/assets/img/screenshots/screenshot_blurry_es.jpg"
                  :alt="$t('seo_1')"
                  width="220"
                  height="432"
                />
              </div>
              <div class="screenshot-container">
                <img
                  id="screenshot-mask"
                  class="screenshot lg screenshotPictureQuality"
                  src="@/assets/img/screenshots/screenshot_mask_es.jpg"
                  :alt="$t('seo_1')"
                  width="220"
                  height="432"
                />
              </div>
            </template>
            <template v-else>
              <div class="screenshot-container">
                <img
                  id="screenshot-blurry"
                  class="screenshot lg screenshotPictureQuality"
                  src="@/assets/img/screenshots/screenshot_blurry_en.jpg"
                  :alt="$t('seo_1')"
                  width="220"
                  height="432"
                />
              </div>
              <div class="screenshot-container">
                <img
                  id="screenshot-mask"
                  class="screenshot lg screenshotPictureQuality"
                  src="@/assets/img/screenshots/screenshot_mask_en.jpg"
                  :alt="$t('seo_1')"
                  width="220"
                  height="432"
                />
              </div>
            </template>
          </div>
          <div class="claim-info-wrapper" id="assistedPictureQuality">
            <div class="claim-info">
              <h3 class="title">
                {{ $t("business_differences_assistedPictureQuality_title") }}
              </h3>
              <p
                v-html="
                  $t('business_differences_assistedPictureQuality_content')
                "
              >
                {{ $t("business_differences_assistedPictureQuality_content") }}
              </p>
              <p
                v-html="
                  $t('business_differences_assistedPictureQuality_content2')
                "
              ></p>
              <demo-buttons />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      email: "hello@getsilt.com",
      techfeatures: [
        {
          icon: "fa-head-side scan-icon",
          // img: require('assets/img/icons/credit-card.svg'),
          title: "business_highlights_faceRecognition_title",
        },
        {
          icon: "fa-heartbeat",
          // img: require('assets/img/icons/money-bag.svg'),
          title: "business_highlights_liveness_title",
        },
        {
          icon: "fa-id-card scan-icon",
          // img: require('assets/img/icons/invest.svg'),
          title: "business_highlights_docscan_title",
        },
        {
          icon: "fa-badge-check",
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_authenticity_title",
        },
        {
          icon: "fa-user-check",
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_biometric_title",
        },
        // {
        //   icon: "",
        //   // img: require('assets/img/icons/graph-bars.svg'),
        //   title: "business_highlights_dashboard_title",
        // },
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
            trigger: "#techfeatures .features-container",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#techfeatures .features-item", {
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
</style>
