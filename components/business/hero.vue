<template>
  <section class="claim-container">
    <div class="bg-shadow__wrapper">
      <div class="bg-shadow__container">
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_kyc')"
          width="700"
          height="500"
        />
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_kyc')"
          width="700"
          height="500"
        />
      </div>
    </div>
    <!-- CLAIMS -->
    <div class="claim-info">
      <h1 class="title">
        <span class="text-gradient-1 title-bold">
          {{ $t("business_claim_scale") }}
        </span>
        <br />
        <span v-html="$t('business_claim1')" />
      </h1>
      <h4 class="subtitle" v-html="$t('business_claim2')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img">
      <img class="phone-svg" src="@/assets/media/phone.svg" alt="device" />
      <video class="phone-video" autoplay loop muted>
        <source src="@/assets/media/sign-up.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="video-demo-animation-wrapper" id="video-demo-wrapper">
      <div v-show="startAnimation" class="video-demo-copies">
        <h6
          class="color_blue_text"
          v-html="$t(`${currentVideoVerificationDemoHeader}`)"
        />
        <div class="video-demo-animation-copies-wrapper">
          <p>{{ $t("video_check_title") }}</p>
          <p
            class="video-demo-animation-text"
            v-html="$t(`${currentVideoVerificationDemoCopy}`)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
import gsap from "gsap";
export default {
  components: { DemoButtons },
  data() {
    return {
      videoVerificationDemoCopies: [
        "video_check_documents",
        "video_check_blur",
        "video_check_occlusions",
        "video_check_glare",
        "video_check_spoof",
      ],
      videoVerificationDemoSelfieCopies: [
        "video_check_face",
        "video_check_liveness",
        "video_check_glare",
        "video_check_spoof",
        "video_check_liveness",
      ],
      videoVerificationDemoHeaders: [
        "video_picture_front",
        "video_picture_back",
        "video_check_selfie",
      ],
      currentVideoVerificationDemoCopyIndex: 0,
      currentVideoVerificationDemoHeaderIndex: 0,
      intervalIdCopies: null,
      intervalIdHeaders: null,
      intervalIdAnimation: null,
      startAnimation: false,
    };
  },
  watch: {
    startAnimation() {
      this.startVideoVerificationDemoAnimationHeaders();
      this.startVideoVerificationDemoAnimationCopies();
    },
  },
  computed: {
    currentVideoVerificationDemoCopy() {
      return this.currentVideoVerificationDemoHeaderIndex !== 2
        ? this.videoVerificationDemoCopies[
            this.currentVideoVerificationDemoCopyIndex
          ]
        : this.videoVerificationDemoSelfieCopies[
            this.currentVideoVerificationDemoCopyIndex
          ];
    },
    currentVideoVerificationDemoHeader() {
      return this.videoVerificationDemoHeaders[
        this.currentVideoVerificationDemoHeaderIndex
      ];
    },
  },
  methods: {
    startFirstAnimationScene: (_this) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#video-demo-wrapper",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#video-demo-wrapper .video-demo-copies", {
          duration: 1,
          scale: 1,
          y: 75,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });
    },
    startVideoVerificationDemoAnimationHeaders() {
      this.intervalIdHeaders = setInterval(() => {
        this.currentVideoVerificationDemoHeaderIndex =
          (this.currentVideoVerificationDemoHeaderIndex + 1) %
          this.videoVerificationDemoHeaders.length;
      }, 8000);
    },
    startVideoVerificationDemoAnimationCopies() {
      this.intervalIdCopies = setInterval(() => {
        this.currentVideoVerificationDemoCopyIndex =
          (this.currentVideoVerificationDemoCopyIndex + 1) %
          this.videoVerificationDemoCopies.length;
      }, 2000);
    },
  },
  mounted() {
    setTimeout(() => {
      this.startAnimation = true;
      this.startFirstAnimationScene(this);
    }, 6000);
    setTimeout(() => {
      this.startAnimation = false;
    }, 28000);
  },
  beforeUnmount() {
    clearInterval(this.intervalIdCopies);
    clearInterval(this.intervalIdHeaders);
    clearInterval(this.intervalIdAnimation);
  },
};
</script>

<style lang="sass" scoped>
.video-demo-animation-wrapper
  display: flex
  flex-direction: column
  width: 300px

  h6
    margin-bottom: 0

  @keyframes slide
    0%
      transform: translateX(100%)
      opacity: 0
    50%
      transform: translateX(0)
      opacity: 1

  .video-demo-animation-copies-wrapper
    display: flex

    .video-demo-animation-text
      margin-left: 8px
      white-space: nowrap
      overflow: hidden
      animation: slide 2s infinite

.claim-side-img
  position: relative
  .phone-svg
    position: relative
    top: -9px
    left: -10px
    z-index: 999
    height: auto
    width: 252px
  .phone-video
    width: 230px
    border-radius: 30px
    position: absolute
    left: 0

.claim-info-wrapper.differences
  display: flex
  align-items: center
</style>
