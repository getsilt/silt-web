<template>
  <div class="fw-container--dark">
    <section class="container" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_solutions_section") }}</span>
        <h2 v-html="$t('solutions_title')" class="color_blue_text" />
      </div>
      <div class="products-container">
        <div class="products-wrapper">
          <article
            @click="$router.push({ name: 'kyb' })"
            class="card"
            :class="{ active: activeFeature === 'KYB' }"
          >
            <div class="article-container" @mouseover="activeFeature = 'KYB'">
              <div class="article-header-wrapper">
                <h3 class="text-gradient-2">{{ $t("kyb_title") }}</h3>
                <i class="fad fa-lg fa-arrow-right" />
              </div>
              <div class="solutions-body-wrapper">
                <h2>{{ $t("solutions_kyb_title") }}</h2>
                <div class="solutions-body-wrapper__checklist">
                  <p>{{ $t("solutions_kyb_body") }}</p>
                  <ChecksList :features="KYBFeatures" />
                </div>
              </div>
              <h6 class="link">
                <a href="/kyb">
                  {{ $t("solutions_kyb_link") }}
                </a>
                <i class="fad fa-arrow-right" />
              </h6>
            </div>
          </article>
          <article
            @click="$router.push({ name: 'kyc' })"
            class="card"
            :class="{ active: activeFeature === 'KYC' }"
          >
            <div class="article-container" @mouseover="activeFeature = 'KYC'">
              <div class="article-header-wrapper">
                <h3 class="text-gradient-2">{{ $t("kyc_title") }}</h3>
                <i class="fad fa-lg fa-arrow-right" />
              </div>
              <div class="solutions-body-wrapper">
                <h2>{{ $t("solutions_kyc_title") }}</h2>
                <div class="solutions-body-wrapper__checklist">
                  <p>{{ $t("solutions_kyc_body") }}</p>
                  <ChecksList :features="KYCFeatures" />
                </div>
              </div>
              <h6 class="link">
                <a href="/kyc">
                  {{ $t("solutions_kyc_link") }}
                </a>
                <i class="fad fa-arrow-right" />
              </h6>
            </div>
          </article>
        </div>
        <article @click="$router.push({ name: 'demo' })" class="card dark">
          <div class="article-container">
            <h3 class="text-gradient-2">{{ $t("cdp_title") }}</h3>
            <h2>{{ $t("solutions_kyb_body_list_cdp") }}</h2>
            <p>{{ $t("solutions_cdp_body") }}</p>
            <h6 class="link">
              <a href="/demo">
                {{ $t("solutions_cdp_link") }}
              </a>
              <i class="fad fa-arrow-right" />
            </h6>
          </div>
        </article>
      </div>
      <DemoButtons class="products-demo-buttons" :dark="true" />
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "../DemoButtons.vue";
import ChecksList from "../ChecksList.vue";
export default {
  components: { DemoButtons, ChecksList },
  data() {
    return {
      activeFeature: "KYB",
      KYBFeatures: [
        {
          title: "solutions_kyb_body_list_kyb",
        },
        {
          title: "solutions_kyb_body_list_ubo_discovery",
        },
        {
          title: "solutions_kyb_body_list_ubo_verification",
        },
        {
          title: "solutions_body_list_aml",
        },
        {
          title: "solutions_kyb_body_list_government_info",
        },
        {
          title: "solutions_kyb_body_list_cdp",
        },
        {
          title: "solutions_kyc_body_list_kyc",
        },
      ],
      KYCFeatures: [
        {
          title: "solutions_kyc_body_list_kyc",
        },
        {
          title: "solutions_body_list_aml",
        },
        {
          title: "solutions_body_list_pep",
        },
        {
          title: "solutions_body_list_proof_of_address",
        },
        {
          title: "solutions_body_list_misconduct_list",
        },
        {
          title: "solutions_body_list_rules",
        },
      ],
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    startFirstAnimationScene: (_this) => {
      const sections = ["#howto"];
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

.products-container
  display: flex
  flex-direction: column
  gap: $spacing-md
  .card
    background: $linear-gradient-2
    font-family: $font-body
    color: #fff
    display: flex
    flex-direction: column
    transition: 0.3s ease-in-out
    padding: 0
    cursor: pointer
    .article-container
      padding: $spacing-xlg
      background-clip: padding-box
      border-radius: $radius-lg
      border: 3px solid rgba(0,0,0,0.4)
      position: relative
      transition: 0.3s ease-in-out
      overflow-x: hidden
    &.dark
      .article-container
        background: $bg-dark-lighten-2
        background-clip: padding-box
        border: 3px solid rgba(0,0,0,0.7)


    &:not(.dark)
      &:before
        transition: 0.3s ease-in-out
        content: ''
        position: absolute
        height: 100%
        width: 100%
        transform: scale(0.94)
        background: $linear-gradient-1
        filter: blur(50px)
        z-index: -1
      &:after
        content: ''
        position: absolute
        right: 0
        top: 0
        height: 300px
        width: 300px
        transform: scale(0.92)
        background: $color-accent
        filter: blur(50px)
        z-index: -1
        animation: linear pulse 5s infinite
        animation-play-state: paused
      .article-container
        background: #ffffffdd
        background-clip: padding-box

      &:hover
        transition: 0.3s ease-in-out
        &:before
          transition: 0.3s ease-in-out
          transform: scale(0.98)
        &:after
          animation-play-state: running
        .article-container
          transition: 0.3s ease-in-out
          background: #ffffffee
          background-clip: padding-box

    .solutions-body-wrapper
      color: $bg-dark-lighten-2
      margin-bottom: $spacing-md
      h2
        color: $bg-dark-lighten-1
        margin-bottom: 0
      p
        max-width: 350px
        flex: 0 0 auto
      .solutions-body-wrapper__checklist
        display: flex
        flex-direction: row
        justify-content: space-between

        .content-list
          flex: 0 0 auto
          display: flex
          flex-direction: column
          gap: $spacing-sm
          background: $color-grey-darken-3
          padding: $spacing-md
          border-radius: $radius-lg 0 0 $radius-lg
          transform: translateX(200px)
          opacity: 0
          padding-right: 80px
          animation: ease-in-out offsetXOut 0.5s backwards

  .article-container
    text-align: left
    flex: 1 1 auto
    display: flex
    flex-direction: column
    h2,h3,h6
      margin-bottom: $spacing-xsm

    .link
      margin-top: auto
      a
        color: $color-primary
      i
        margin-left: $spacing-sm

    .article-header-wrapper
      display: flex
      justify-content: space-between
      align-items: center
      i
        display: none
      @media (max-width:768px)
        i
          display: initial
    .text-gradient-2
      width: fit-content
  .products-wrapper
    display: flex
    flex-direction: row
    gap: $spacing-md
    @media (max-width:768px)
      flex-direction: column
      .card
        .solutions-body-wrapper
          .solutions-body-wrapper__checklist
            flex-direction: column
            .content-list
              transform: translateX(83px)
              opacity: 1
    &>*
      flex: 1 1 20%
    .card
      transition: 0.3s ease-in-out
      &.active
        flex-grow: 2
        i
          display: initial
        .content-list
          animation: ease-in-out offsetX 0.5s forwards
.products-demo-buttons
  margin: $spacing-md 0 0


@keyframes pulse
  0%
    transform: translateY(7%) translateX(0)
  50%
    transform: translateY(85%) translateX(-10%)
  75%
    transform: translateY(50%) translateX(-15%)
  100%
    transform: translateY(7%) translateX(0)

@keyframes offsetX
  0%
    transform: translateX(200px)
    opacity: 0
  50%
    transform: translateX(60px)
    opacity: 1
  70%
    transform: translateX(87px)
    opacity: 1
  100%
    transform: translateX(83px)
    opacity: 1
  
@keyframes offsetXOut
  0%
    transform: translateX(83px)
    opacity: 1
  100%
    transform: translateX(200px)
    opacity: 0
</style>
