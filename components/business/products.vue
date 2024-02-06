<template>
  <div class="fw-container--dark">
    <section class="container" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_howto_section") }}</span>
        <h2 v-html="$t('business_howto_title')" class="color_blue_text" />
      </div>
      <div class="products-container">
        <div class="products-wrapper">
          <article
            @click="$router.push({ name: 'kyb' })"
            class="card bg-gradient-3"
            :class="{ active: activeFeature === 'KYB' }"
          >
            <div class="article-container" @mouseover="activeFeature = 'KYB'">
              <div class="article-header-wrapper">
                <h3 class="text-gradient-2">{{ $t("kyb_title") }}</h3>
                <i class="fad fa-lg fa-arrow-right" />
              </div>
              <div class="solutions-body-wrapper">
                <h3>{{ $t("solutions_kyb_title") }}</h3>
                <div class="solutions-body-wrapper__checklist">
                  <p>{{ $t("solutions_kyb_body") }}</p>
                  <Transition name="offsetX">
                    <ChecksList
                      v-if="activeFeature === 'KYB'"
                      :features="KYBFeatures"
                    />
                  </Transition>
                </div>
              </div>
              <h6 class="link">
                <a href="/kyb" rel="nofollow">
                  {{ $t("solutions_kyb_link") }}
                </a>
                <i class="fad fa-arrow-right" />
              </h6>
            </div>
          </article>
          <article
            @click="$router.push({ name: 'kyc' })"
            class="card bg-gradient-3"
            :class="{ active: activeFeature === 'KYC' }"
          >
            <div class="article-container" @mouseover="activeFeature = 'KYC'">
              <div class="article-header-wrapper">
                <h3 class="text-gradient-2">{{ $t("kyc_title") }}</h3>
                <i class="fad fa-lg fa-arrow-right" />
              </div>
              <div class="solutions-body-wrapper">
                <h3>{{ $t("solutions_kyc_title") }}</h3>
                <div class="solutions-body-wrapper__checklist">
                  <p>{{ $t("solutions_kyc_body") }}</p>
                  <Transition name="offsetX">
                    <ChecksList
                      v-if="activeFeature === 'KYC'"
                      :features="KYCFeatures"
                    />
                  </Transition>
                </div>
              </div>
              <h6 class="link">
                <a href="/kyc" rel="nofollow">
                  {{ $t("solutions_kyc_link") }}
                </a>
                <i class="fad fa-arrow-right" />
              </h6>
            </div>
          </article>
        </div>
        <article @click="$router.push({ name: 'kyb' })" class="card">
          <div class="article-container">
            <h3 class="text-gradient-2">{{ $t("cdp_title") }}</h3>
            <p>{{ $t("solutions_cdp_body") }}</p>
            <h6 class="link">
              <a href="/kyb" rel="nofollow">
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
.offsetX
  &-move
    transition: opacity 0.1s ease-in-out, transform 0.25s ease-in-out
  &-leave-active
    transition: opacity 0.2s linear, transform 0.2s cubic-bezier(.5, 0, .7, .4)
    transition-delay: 0s
  &-enter-active
    transition: opacity 0.5s linear, transform 0.5s cubic-bezier(.5, 1, 1, 1)
    transition-delay: 0.2s
  &-enter,
  &-leave-to
    opacity: 0
  &-enter
    transform: translateX(200px)
  &-leave-to
    transform: translateX(200px)
.products-container
  display: flex
  flex-direction: column
  gap: $spacing-md
  .card
    font-family: $font-body
    color: #fff
    display: flex
    flex-direction: column
    overflow-x: hidden
    &:hover
      cursor: pointer
    .solutions-body-wrapper
      color: $bg-dark-lighten-2
      margin-bottom: $spacing-md
      h3
        color: $bg-dark-lighten-1
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
          border-radius: $radius-md

  .article-container
    text-align: left
    flex: 1 1 auto
    display: flex
    flex-direction: column
    h3,h3, h6
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
              opacity: 1
    &>*
      flex: 1 1 20%
    .card
      transition: 0.3s ease-in-out
      &.active
        flex-grow: 2
        i
          display: initial

.products-demo-buttons
  margin: $spacing-md 0 0
</style>
