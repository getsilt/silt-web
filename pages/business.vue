<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title">
          <span class="primary">{{ $t("business_claim_scale") }}</span
          ><br />{{ $t("business_claim1") }}
        </h1>
        <h4 class="subtitle" v-html="$t('business_claim2')">
          {{ $t("business_claim2") }}
        </h4>
        <demo-buttons />
      </div>
      <div class="claim-side-img screenshots-container">
        <div class="screenshot-container">
          <img
            class="screenshot login"
            src="@/assets/img/screenshots/screenshot_documentSelect_es.jpg"
            :alt="$t('seo_2')"
            width="180"
            height="353"
          />
        </div>
        <div class="screenshot-container">
          <img
            class="screenshot take-picture"
            src="@/assets/img/screenshots/screenshot_selfie_es.jpg"
            :alt="$t('seo_3')"
            width="180"
            height="353"
          />
        </div>
        <div class="screenshot-container">
          <img
            class="screenshot complete"
            src="@/assets/img/screenshots/screenshot_finish_es.jpg"
            :alt="$t('seo_4')"
            width="180"
            height="353"
          />
        </div>
      </div>
    </section>

    <!-- PRODUCT BENEFITS -->
    <div class="fw-container--light" id="benefits">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_benefits_section") }}</span>
          <h2>{{ $t("business_benefits_title") }}</h2>
        </div>
        <div class="highlights-container pins">
          <article v-for="benefit in benefits" :key="benefit.title">
            <div class="article-container">
              <div class="article-icon-container">
                <i class="fad" :class="benefit.icon"></i>
              </div>
              <h4>{{ $t(benefit.title) }}</h4>
              <p>{{ $t(benefit.content) }}</p>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Unique advantage  -->
    <section class="claim-wrapper" id="differences">
      <div class="claim-container left">
        <div class="claim-side-img diagram" id="diagram">
          <template v-if="$root.$i18n.locale === 'es'">
            <img
              class=""
              src="@/assets/img/illustrations/user_flow_diagram_es.png"
              :alt="$t('seo_3')"
              width="709"
              height="843"
            />
          </template>
          <template v-else>
            <img
              class=""
              src="@/assets/img/illustrations/user_flow_diagram_en.png"
              :alt="$t('seo_3')"
              width="709"
              height="843"
            />
          </template>
        </div>
        <div class="claim-info-wrapper differences">
          <div class="claim-info">
            <h3 class="title">
              {{ $t("business_differences_title") }}
            </h3>
            <p v-html="$t('business_differences_oneRegister_content')">
              {{ $t("business_differences_oneRegister_content") }}
            </p>
            <!-- <p v-html="$t('business_differences_technology_content')">
               {{ $t("business_differences_technology_content") }}
            </p> -->
            <demo-buttons />
          </div>
        </div>
      </div>
    </section>

    <!-- Silt's Fraud List & Up to date docs -->
    <div class="fw-container--light" id="unique-benefits">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_unique_benefits_section") }}</span>
        </div>
        <div class="highlights-container pins two-cols">
          <article v-for="benefit in uniqueBenefits" :key="benefit.title">
            <div class="article-container">
              <div class="article-icon-container">
                <i class="fad" :class="benefit.icon"></i>
              </div>
              <h4>{{ $t(benefit.title) }}</h4>
              <p>{{ $t(benefit.content) }}</p>
            </div>
          </article>
        </div>
      </section>
    </div>

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

    <!-- DEVELOPERS -->
    <section class="highlights-wrapper" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_howto_section") }}</span>
        <h2>{{ $t("business_howto_title") }}</h2>
      </div>
      <div class="highlights-container">
        <article>
          <div class="article-container">
            <div class="article-icon-container">
              <i class="fad fa-link fa-2x"></i>
            </div>
            <h4>Link</h4>
            <p>{{ $t("business_howto_content1") }}</p>
          </div>
        </article>
        <article>
          <div class="article-container">
            <div class="article-icon-container">
              <i class="fad fa-cogs fa-2x"></i>
            </div>
            <h4>SDK</h4>
            <p>{{ $t("business_howto_content2") }}</p>
          </div>
        </article>
        <article>
          <div class="article-container">
            <div class="article-icon-container">
              <i class="fad fa-network-wired fa-2x"></i>
            </div>
            <h4>API</h4>
            <p>{{ $t("business_howto_content3") }}</p>
          </div>
        </article>
      </div>
      <p class="centered-block">
        <a href="/developers" class="bold-link">{{
          $t("business_howto_content4")
        }}</a>
      </p>
    </section>

    <section class="claim-wrapper" id="countries">
      <div class="claim-container left">
        <div class="claim-info-wrapper">
          <div class="claim-info">
            <h3 class="title">
              {{ $t("business_highlights_countries_title") }}
            </h3>
            <p>
              {{ $t("business_highlights_countries_content") }}
            </p>
            <demo-buttons />
          </div>
        </div>
        <div class="claim-side-img">
          <img
            width="400"
            height="400"
            src="@/assets/img/illustrations/hand-globe.svg"
            :alt="$t('seo_8')"
          />
        </div>
      </div>
    </section>

    <section class="features-wrapper" id="usecases">
      <div class="section-headers">
        <span class="tag">{{ $t("business_usecases_section") }}</span>
        <h2>{{ $t("business_usecases_title") }}</h2>
        <p>{{ $t("business_usecases_content") }}</p>
      </div>
      <div class="features-container">
        <div
          class="features-item"
          v-for="usecase in usecases"
          :key="usecase.title"
        >
          <i class="fad fa-2x" :class="usecase.icon"></i>
          <h4>{{ $t(usecase.title) }}</h4>
        </div>
      </div>
      <demo-buttons />
    </section>

    <div class="fw-container--light">
      <section class="claim-container">
        <div class="section-headers">
          <span class="tag">{{ $t("business_usecases_section") }}</span>
          <h2>{{ $t("customization_guide_title") }}</h2>
          <p>{{ $t("customization_guide_subtitle") }}</p>
          <p>{{ $t("customization_guide_description") }}</p>
        </div>
        <div
          class="section-information-wrapper customize-verification-flow-wrapper"
        >
          <div class="customize-verification-flow-wrapper__options">
            <color-picker-slider @onChange="updateColor($event)" />
            <div class="tabs-wrapper-bussiness vertical">
              <h5 class="typography-heading">
                {{ $t("customization_guide_font") }}
              </h5>
              <v-tab
                activeTabName="roboto-slab"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
                class="roboto-slab"
              >
                <p>Roboto Slab</p>
              </v-tab>
              <v-tab
                activeTabName="comfortaa"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
                class="comfortaa"
              >
                <p>Comfortaa</p>
              </v-tab>
              <v-tab
                activeTabName="your-font"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
                class="your-font"
              >
                <p>Your font</p>
              </v-tab>
            </div>
          </div>
          <div
            v-show="activeTabName === 'roboto-slab'"
            class="claim-side-img right screenshots-container"
          >
            <document-select
              :color="`color: ${color}`"
              :buttonStyle="`background-color: ${color}; font-family: Roboto`"
              typography="font-family: Roboto"
              :background="`background-color: ${backgroundColor}`"
            />
          </div>
          <div
            v-show="activeTabName === 'comfortaa'"
            class="claim-side-img right screenshots-container"
          >
            <document-select
              :color="`color: ${color}`"
              :buttonStyle="`background-color: ${color}; font-family: Comfortaa`"
              :background="`background-color: ${backgroundColor}`"
              typography="font-family: Comfortaa"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import DemoButtons from "../components/DemoButtons.vue";
import VTab from "../components/VTab.vue";
import DocumentSelect from "../components/DocumentSelect.vue";
import ColorPickerSlider from "../components/ColorPickerSlider.vue";

export default {
  nuxtI18n: {
    paths: {
      en: "/", // -> accessible at / (no prefix since it's the default locale)
      es: "/",
    },
  },
  components: { DemoButtons, VTab, DocumentSelect, ColorPickerSlider },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("nav_feature_kyc"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("nav_feature_kyc"),
        },
      ],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      differences: [
        {
          title: "business_differences_oneRegister_title",
          content: "business_differences_oneRegister_content",
          header: "business_friction_oneregister_header",
          headerDescription: "business_friction_oneregister_headerDescription",
          img: require("assets/img/illustrations/drinks-user.svg"),
        },
        {
          title: "business_differences_technology_title",
          content: "business_differences_technology_content",
          header: "business_friction_trust_header",
          headerDescription: "business_friction_trust_headerDescription",
          img: require("assets/img/illustrations/bulbrocket.svg"),
        },
        {
          title: "business_differences_noManagement_title",
          content: "business_differences_noManagement_content",
          header: "business_friction_fast_header",
          headerDescription: "business_friction_fast_headerDescription",
          img: require("assets/img/illustrations/meditation.svg"),
        },
      ],
      benefits: [
        {
          icon: "fa-funnel-dollar fa-2x",
          title: "business_benefits_cac_title",
          content: "business_benefits_cac_content",
        },
        {
          icon: "fa-rabbit-fast fa-3x",
          title: "business_benefits_time_title",
          content: "business_benefits_time_content",
        },
        {
          icon: "fa-sack-dollar fa-3x",
          title: "business_benefits_costs_title",
          content: "business_benefits_costs_content",
        },
      ],
      uniqueBenefits: [
        {
          icon: "fa-calendar-exclamation fa-3x",
          title: "business_benefits_updatedDocs_title",
          content: "business_benefits_updatedDocs_content",
        },
        {
          icon: "fa-badge-sheriff fa-3x",
          title: "business_benefits_list_title",
          content: "business_benefits_list_content",
        },
      ],
      highlights: [
        {
          title: "business_friction_automatic_title",
          content: "business_friction_automatic_content",
          header: "business_friction_automatic_header",
          headerDescription: "business_friction_automatic_headerDescription",
        },
        {
          title: "business_friction_trust_title",
          content: "business_friction_trust_content",
          header: "business_friction_trust_header",
          headerDescription: "business_friction_trust_headerDescription",
        },
        {
          title: "business_friction_fast_title",
          content: "business_friction_fast_content",
          header: "business_friction_fast_header",
          headerDescription: "business_friction_fast_headerDescription",
        },
      ],
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
      usecases: [
        {
          //img: require('assets/img/icons/credit-card.svg'),
          icon: "fa-university",
          title: "business_usecases_neobank",
        },
        {
          icon: "fa-expand-arrows", //fa-recycle
          // img: require('assets/img/icons/money-bag.svg'),
          title: "business_usecases_sharing",
        },
        {
          icon: "fa-comments-alt-dollar",
          // img: require('assets/img/icons/invest.svg'),
          title: "business_usecases_p2p",
        },
        {
          icon: "fa-dice",
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_usecases_gaming",
        },
        {
          icon: "fa-arrows", //fa-chart-network fa-rocket
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_usecases_contract",
        },
      ],
      activeTabName: "roboto-slab",
      color: "#2963ff",
      backgroundColor: "#2963ff",
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    getEmail() {
      return this.email;
    },
    updateColor(event) {
      this.color = `hsl(${event.h}, ${event.s}, ${event.l})`;
      this.backgroundColor = `hsla(${event.h}, ${event.s}, ${event.l})`;
    },
    startFirstAnimationScene: (_this) => {
      const sections = [
        "#assistedPictureQuality",
        "#benefits",
        "#unique-benefits",
        "#usecases",
        "#countries",
        "#howto",
        "#differences",
        "#techfeatures",
      ];
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
          y: 75,
          opacity: 0.1,
        });
      }

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
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 700px

.claim-info-wrapper.differences
  display: flex
  align-items: center

.typography-heading
  margin-bottom: $spacing-md
  text-align: center

.right
  flex: 0.4
.section-information-wrapper
  width: 1400px

.customize-verification-flow-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center
  .customize-verification-flow-wrapper__options
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 60px

.roboto-slab
  font-family: "Roboto"
.comfortaa
  font-family: "Comfortaa", sans-serif

.your-font
  pointer-events: none
  color: $color-grey-darken-1
</style>
