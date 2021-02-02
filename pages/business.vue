<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('business_claim1')"></h1>
        <h4 class="subtitle" v-html="$t('business_claim2')">
          {{ $t("business_claim2") }}
        </h4>
        <a :href="`mailto:${getEmail()}`" target="_blank">
          <button class="primary">{{ $t("btn_cta_contact") }}</button>
        </a>
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

    <!-- Unique advantadge -->
    <section class="highlights-wrapper" id="differences">
      <div class="section-headers">
        <span class="tag">{{ $t("business_differences_section") }}</span>
        <h2>{{ $t("business_differences_title") }}</h2>
      </div>
      <div class="highlights-container">
        <article v-for="(difference, i) in differences" :key="difference.title">
          <div class="article-container">
            <div class="article-img-container">
              <img
                :src="difference.img"
                :alt="$t('seo_' + (i + 5))"
                width="213"
                height="239"
              />
            </div>
            <h4>{{ $t(difference.title) }}</h4>
            <p v-html="$t(difference.content)">{{ $t(difference.content) }}</p>
          </div>
        </article>
      </div>
    </section>
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
              v-html="$t('business_differences_assistedPictureQuality_content')"
            >
              {{ $t("business_differences_assistedPictureQuality_content") }}
            </p>
            <p
              v-html="
                $t('business_differences_assistedPictureQuality_content2')
              "
            ></p>
            <nuxt-link :to="localePath({ name: 'demo' })">
              <button class="primary">{{ $t("btn_cta_demo") }}</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCT HIGHLIGHTS -->
    <section class="highlights-wrapper" id="producthighlights">
      <div class="section-headers">
        <span class="tag">{{ $t("business_friction_section") }}</span>
        <h2>{{ $t("business_friction_title") }}</h2>
      </div>
      <div class="highlights-container pins">
        <article v-for="highlight in highlights" :key="highlight.title">
          <div class="article-container">
            <div class="article-header">
              <span class="big">{{ $t(highlight.header) }}</span>
              {{ $t(highlight.headerDescription) }}
            </div>
            <h4>{{ $t(highlight.title) }}</h4>
            <p>{{ $t(highlight.content) }}</p>
          </div>
        </article>
      </div>
    </section>

    

    <!-- HOW TO -->
    <section class="claim-wrapper" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_howto_section") }}</span>
        <h2>{{ $t("business_howto_title") }}</h2>
      </div>
      <div class="claim-container">
        <div class="claim-info">
          <p v-html="$t('business_howto_content')">{{ $t("business_howto_content") }}</p>
          <ol>
            <li v-html="$t('business_howto_content1')">{{ $t("business_howto_content1") }}</li>
            <li v-html="$t('business_howto_content2')">{{ $t("business_howto_content2") }}</li>
            <li v-html="$t('business_howto_content3')">{{ $t("business_howto_content3") }}</li>
          </ol>
          <span v-html="$t('business_howto_content4')">{{
            $t("business_howto_content4")
          }}</span>
          <!-- <a :href="`mailto:${getEmail()}`" target="_blank">
            <button class="primary">{{ $t("btn_cta_contact") }}</button>
          </a> -->
        </div>
        <div class="claim-side-img">
          <img
            width="400"
            height="400"
            src="@/assets/img/illustrations/book-imac.svg"
            :alt="$t('seo_7')"
          />
        </div>
      </div>
    </section>

    <!-- SDK -->
    <!-- <section class="claim-wrapper" id="sdk">
      <div class="claim-container" >
        <div class="claim-info">
          <h2 class="title">asdf{{$t('business_benefits_sdk_title')}}</h2>
          <h4 class="subtitle">{{$t('business_benefits_sdk_content')}}</h4>
          <span class="subtitle">{{$t('business_benefits_integration_content')}}</span>
          <ul>
            <li><b>{{$t('business_benefits_fraud')}}</b></li>
            <li><b>{{$t('business_benefits_kyc')}}</b></li>
            <li><b>{{$t('business_benefits_aml')}}</b></li>
            <li><b>{{$t('business_benefits_pep')}}</b></li>
            <li><b>{{$t('business_benefits_gdpr')}}</b></li>
            <li><b>{{$t('business_benefits_legal')}}</b></li>
          </ul>
          <a :href="`mailto:${getEmail()}`">
            <button class="primary">{{$t('btn_cta_contact')}}</button>
          </a>
        </div>
        <div class="claim-side-img">
          <img src="@/assets/img/illustrations/book-imac.svg" />
        </div>
      </div>
    </section> -->
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
            <a :href="`mailto:${getEmail()}`" target="_blank">
              <button class="primary">{{ $t("btn_cta_contact") }}</button>
            </a>
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
      <a :href="`mailto:${getEmail()}`" target="_blank">
        <button class="primary">{{ $t("btn_cta_contact") }}</button>
      </a>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  nuxtI18n: {
    paths: {
      en: "/", // -> accessible at / (no prefix since it's the default locale)
      es: "/",
    },
  },
  data() {
    return {
      structuredData: {
        "@context": "https://getsilt.com",
        "@type": "Organization",
        url: "https://getsilt.com",
        name: this.$t("silt_name"),
        email: "hello@getsilt.com",
        logo: "https://getsilt.com/silt_blue.png",
      },
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
      const sections = [
        "#assistedPictureQuality",
        "#usecases",
        "#countries",
        "#howto",
        "#differences",
        "#techfeatures",
        "#producthighlights",
      ];
      let tm = {};
      for (let section of sections) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#techfeatures .features-container",
            start: "top bottom",
            scrub: false,
            markers: false,
          },
        })
        .from("#techfeatures .features-item", {
          duration: 1,
          scale: 1,
          y: 100,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#usecases .features-container",
            start: "top bottom",
            scrub: false,
            markers: false,
          },
        })
        .from("#usecases .features-item", {
          duration: 1,
          scale: 1,
          y: 100,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#assistedPictureQualityScreenshots",
            start: "top center",
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
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px
</style>
