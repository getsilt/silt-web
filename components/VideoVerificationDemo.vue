<template>
  <div>
    <div class="phone-video-wrapper">
      <img class="phone-svg" src="@/assets/media/phone.svg" alt="device" />
      <video class="phone-video" autoplay loop muted>
        <source src="@/assets/media/sign-up.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="video-demo-animation-wrapper" id="video-demo-wrapper">
      <div v-show="startAnimation" class="video-demo-copies">
        <h6
          class="color_primary_text"
          v-html="$t(`${currentVideoVerificationDemoHeader}`)"
        />
        <div class="video-demo-animation-copies-wrapper">
          <p>{{ $t("video_check_title") }}</p>
          <TransitionGroup name="offsetX">
            <p
              :key="currentVideoVerificationDemoCopy"
              class="video-demo-animation-text"
              v-html="$t(`${currentVideoVerificationDemoCopy}`)"
            />
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "video-verification-demo",
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
      if (this.startAnimation) {
        clearInterval(this.intervalIdCopies);
        clearInterval(this.intervalIdHeaders);

        this.currentVideoVerificationDemoCopyIndex = 0;
        this.currentVideoVerificationDemoHeaderIndex = 0;

        this.startVideoVerificationDemoAnimationHeaders();
        this.startVideoVerificationDemoAnimationCopies();
      }
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
          x: 75,
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
    restartAnimation() {
      clearInterval(this.intervalIdAnimation);

      this.intervalIdAnimation = setInterval(() => {
        setTimeout(() => {
          this.startAnimation = true;
          this.startFirstAnimationScene(this);
        }, 6000);
        setTimeout(() => {
          this.startAnimation = false;
        }, 28000);
      }, 36000);
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
    this.restartAnimation();
  },
  beforeUnmount() {
    clearInterval(this.intervalIdCopies);
    clearInterval(this.intervalIdHeaders);
    clearInterval(this.intervalIdAnimation);
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.video-demo-animation-wrapper
  display: flex
  flex-direction: column
  width: 325px
  min-height: 150px
  padding: $spacing-md
  align-items: flex-start
  text-align: left
  margin-right: -325px

  .offsetX
    &-move
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out

    &-leave-active
      transition: opacity 0.4s linear, transform 0.4s cubic-bezier(.5, 0, .7, .4)
      transition-delay: calc(0.1s * (2 - 1))

    &-enter-active
      transition: opacity 0.5s linear, transform 0.5s cubic-bezier(.5, 1, 1, 1)
      transition-delay: 1s

    &-enter,
    &-leave-to
      opacity: 0

    &-enter
      transform: translateX(-0.2em)
    &-leave-to
      transform: translateX(1em)

  h6
    margin-bottom: 0

  .video-demo-animation-copies-wrapper
    display: flex
    margin-top: 10px

    p
      margin: 0

    .video-demo-animation-text
      margin: 0 8px

.phone-video-wrapper
  position: relative
  .phone-svg
    position: relative
    top: -9px
    z-index: 999
    height: auto
    width: 252px
  .phone-video
    width: 230px
    border-radius: 30px
    position: absolute
    left: 10px

.claim-info-wrapper.differences
  display: flex
  align-items: center
</style>
