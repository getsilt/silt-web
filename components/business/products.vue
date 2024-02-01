<template>
  <div class="fw-container--dark">
    <section class="container-md" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_howto_section") }}</span>
        <h2 v-html="$t('business_howto_title')" class="color_blue_text" />
      </div>
      <div class="products-container">
        <div class="products-wrapper">
          <article class="card bg-gradient-3">
            <div class="article-container">
              <div class="article-header-wrapper">
                <h3 class="text-gradient-2">{{ $t("kyb_title") }}</h3>
                <i class="fad fa-lg fa-arrow-right" />
              </div>
              <h4>{{ $t("solutions_kyb_title") }}</h4>
              <p>{{ $t("solutions_kyb_body") }}</p>
              <ChecksList :features="features" />
              <h6 class="link">
                <a href="/legal-notice" rel="nofollow">
                  {{ $t("solutions_kyb_link") }}
                </a>
                <i class="fad fa-arrow-right" />
              </h6>
            </div>
          </article>
          <article class="card bg-gradient-3">
            <div class="article-container">
              <div class="article-header-wrapper">
                <h3 class="text-gradient-2">{{ $t("kyc_title") }}</h3>
                <i class="fad fa-lg fa-arrow-right" />
              </div>
              <h4>{{ $t("solutions_kyc_title") }}</h4>
              <p>{{ $t("solutions_kyc_body") }}</p>
              <ChecksList :features="features" />
              <h6 class="link">
                <a href="/legal-notice" rel="nofollow">
                  {{ $t("solutions_kyc_link") }}
                </a>
                <i class="fad fa-arrow-right" />
              </h6>
            </div>
          </article>
        </div>
        <article class="card">
          <div class="article-container">
            <h3 class="text-gradient-2">{{ $t("cdp_title") }}</h3>
            <p>{{ $t("solutions_cdp_body") }}</p>
            <h6 class="link">
              <a href="/legal-notice" rel="nofollow">
                {{ $t("solutions_cdp_link") }}
              </a>
              <i class="fad fa-arrow-right" />
            </h6>
          </div>
        </article>
      </div>
      <DemoButtons class="products-demo-buttons" />
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
      features: [
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
          title: "solutions_kyb_body_list_aml",
        },
        {
          title: "solutions_kyb_body_list_government_info",
        },
        {
          title: "solutions_kyb_body_list_cdp",
        },
        {
          title: "solutions_kyb_body_list_kyc",
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
    &:hover
      cursor: pointer

  .article-container
    text-align: left
    h3,h4, h6
      margin-bottom: $spacing-xsm

    .link
      margin-top: $spacing-md
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
    .content-list
      display: none
      justify-content: flex-start
  .products-wrapper
    display: flex
    flex-direction: row
    gap: $spacing-md
    @media (max-width:768px)
      flex-direction: column
      .content-list
        display: initial
    &>*
      flex: 1 1 20%
    .card
      transition: 0.3s ease-in-out
      height: fit-content
      &:hover
        flex-grow: 2
        .content-list
          display: initial
        i
          display: initial

.products-demo-buttons
  margin: $spacing-md 0 0
</style>
