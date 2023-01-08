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
            <div slot="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.</div> 
          </expandable>
        </div>
        <div class="flex-col">
          <expandable
            :key="`uxfeature-${i}`"
            v-for="(feature, i) of uxTechfeatures"
            class="techfeatures_item"
          >
            <h5 slot="title">{{ $t(feature.title) }}</h5>
            <div slot="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.</div> 
          </expandable>
        </div>
      </div>
    </section>
    <!-- TECH FEATURES -->
    <!-- <section class="cards-wrapper_flex" id="techfeatures">
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
    </section> -->
    <!-- Assisted Picture Quality  -->
    <!-- <section>
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
              v-html="$t('business_differences_assistedPictureQuality_content')"
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
    </section> -->
  </div>
</template>

<script>
import gsap from "gsap";
import Expandable from "@/components/Expandable.vue";
export default {
  components: {Expandable},
  data() {
    return {
      email: "hello@getsilt.com",
      secTechfeatures: [
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
          icon: "fa-badge-check",
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_authenticity_title",
        },
        {
          icon: "fa-user-check",
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_biometric_title",
        },
      ],
      uxTechfeatures: [
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
  max-width: 1200px
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
