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
        <img
          class="screenshot login"
          src="@/assets/img/screenshots/personal-details.png"
          :alt="$t('seo_2')"
        />
        <img
          class="screenshot take-picture"
          src="@/assets/img/screenshots/take-picture.png"
          :alt="$t('seo_3')"
        />
        <img
          class="screenshot complete"
          src="@/assets/img/screenshots/complete.png"
          :alt="$t('seo_4')"
        />
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
              <!-- <span class="big">{{$t(differences.header)}}</span>
            {{$t(differences.headerDescription)}} -->
              <img :src="difference.img" :alt="$t('seo_' + (i + 5))" />
            </div>
            <h3>{{ $t(difference.title) }}</h3>
            <p v-html="$t(difference.content)">{{ $t(difference.content) }}</p>
          </div>
        </article>
      </div>
      <!-- <p>{{$t('business_friction_oneregister_title')}}</p> -->
    </section>

    <!-- PRODUCT HIGHLIGHTS -->
    <section class="highlights-wrapper" id="producthighlights">
      <div class="section-headers">
        <span class="tag">{{ $t("business_friction_section") }}</span>
        <h2>{{ $t("business_friction_title") }}</h2>
      </div>
      <div class="highlights-container">
        <article v-for="highlight in highlights" :key="highlight.title">
          <div class="article-container">
            <div class="article-header">
              <span class="big">{{ $t(highlight.header) }}</span>
              {{ $t(highlight.headerDescription) }}
              <!-- <img src="@/assets/img/icons/rocket.svg" alt /> -->
            </div>
            <h3>{{ $t(highlight.title) }}</h3>
            <p>{{ $t(highlight.content) }}</p>
          </div>
        </article>
      </div>
      <!-- <p>{{$t('business_friction_oneregister_title')}}</p> -->
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
          <!-- <img :src="feature.img" /> -->
          <h3>{{ $t(feature.title) }}</h3>
        </div>
      </div>
    </section>



    <!-- Costs -->

    <!-- <span>{{$t('business_costs_title')}}</span> -->
    <!-- <div class="claim-container" id="costsManagement">
        <div class="claim-info">
          <h2 class="title">{{$t('business_costs_title')}}</h2>
          <h4 class="subtitle">{{$t('business_costs_manage_content')}}</h4>
          <a :href="`mailto:${getEmail()}`">
            <button class="primary">{{$t('btn_cta_contact')}}</button>
          </a>
        </div>
        <div class="developers-img fw-container">
          <img src="@/assets/img/bg/api-response.png" />
        </div>
      </div> -->

    <!-- <div class="claim-container" id="costsRetargeting">
        <div class="developers-img fw-container">
          <img src="@/assets/img/bg/api-response.png" />
        </div>
        <div class="claim-info right">
          <h2 class="title">{{$t('business_costs_retargeting_title')}}</h2>
          <h4 class="subtitle">{{$t('business_costs_retargeting_content')}}</h4>
          <a :href="`mailto:${getEmail()}`">
            <button class="primary">{{$t('btn_cta_contact')}}</button>
          </a>
        </div>
      </div>  -->

    <!-- HOW TO -->
    <!-- <section class="features-wrapper" id="howto">
      <div class="section-headers">
        <span class="tag">{{$t('business_howto_section')}}</span>
        <h2>{{$t('business_howto_title')}}</h2>
        <p>{{$t('business_howto_content')}}</p>
      </div>
      <div class="features-container">
        <ul>
            <li><b>{{$t('business_howto_content1')}}</b></li>
            <li><b>{{$t('business_howto_content2')}}</b></li>
            <li><b>{{$t('business_howto_content3')}}</b></li>
          </ul>
      </div>
      <p>{{$t('business_howto_content4')}}</p>
      <a :href="`mailto:${getEmail()}`">
        <button class="primary">{{$t('btn_cta_contact')}}</button>
      </a>
    </section> -->
    <section class="claim-wrapper" id="howto">
      <div class="section-headers">
        <span class="tag">{{ $t("business_howto_section") }}</span>
        <h2>{{ $t("business_howto_title") }}</h2>
      </div>
      <div class="claim-container">
        <div class="claim-info">
          <h4 class="subtitle">{{ $t("business_howto_content") }}</h4>
          <!-- <span class="subtitle">{{$t('business_benefits_integration_content')}}</span> -->
          <ol>
            <li>{{ $t("business_howto_content1") }}</li>
            <li>{{ $t("business_howto_content2") }}</li>
            <li>{{ $t("business_howto_content3") }}</li>
          </ol>
          <span v-html="$t('business_howto_content4')">{{
            $t("business_howto_content4")
          }}</span>
          <a :href="`mailto:${getEmail()}`" target="_blank">
            <button class="primary">{{ $t("btn_cta_contact") }}</button>
          </a>
        </div>
        <div class="claim-side-img">
          <img
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
      <div class="claim-container">
        <div class="claim-info">
          <h2 class="title">{{ $t("business_highlights_countries_title") }}</h2>
          <h4 class="subtitle">
            {{ $t("business_highlights_countries_content") }}
          </h4>
          <a :href="`mailto:${getEmail()}`" target="_blank">
            <button class="primary">{{ $t("btn_cta_contact") }}</button>
          </a>
        </div>
        <div class="claim-side-img">
          <img
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
          <!-- <img :src="feature.img" /> -->
          <h3>{{ $t(usecase.title) }}</h3>
        </div>
      </div>
      <a :href="`mailto:${getEmail()}`" target="_blank">
        <button class="primary">{{ $t("btn_cta_contact") }}</button>
      </a>
    </section>

    <section class="features-wrapper" id="pricing">
      <div class="section-headers">
        <span class="tag">{{ $t("business_pricing_section") }}</span>
        <h2>{{ $t("business_pricing_title") }}</h2>
        <p>{{ $t("business_pricing_content") }}</p>
      </div>
      <a :href="`mailto:${getEmail()}`" target="_blank">
        <button class="primary">{{ $t("btn_cta_start") }}</button>
      </a>
    </section>
  </div>
</template>

<script>
// Animate on scroll
var controllerHolder;
export default {
  nuxtI18n: {
    paths: {
      en: '/', // -> accessible at / (no prefix since it's the default locale)
      es: '/'     // -> accessible at /es/sobre
    }
  },
  data() {
    return {
      structuredData: {
        "@context": "https://getsilt.com",
        "@type": "Organization",
        "url": "https://getsilt.com",
        "name": "Verified ID signups, KYC, PEP, AML, Fraud control",
        "email": "hello@getsilt.com",
        "logo": "https://getsilt.com/silt_blue.svg"
      },
      email: "hello@getsilt.com",
      differences: [
        {
          title: "business_differences_oneRegister_title",
          content: "business_differences_oneRegister_content",
          header: "business_friction_oneregister_header",
          headerDescription: "business_friction_oneregister_headerDescription",
          img: require("assets/img/illustrations/drinks-user.svg")
        },
        {
          title: "business_differences_technology_title",
          content: "business_differences_technology_content",
          header: "business_friction_trust_header",
          headerDescription: "business_friction_trust_headerDescription",
          img: require("assets/img/illustrations/bulbrocket.svg")
        },
        {
          title: "business_differences_noManagement_title",
          content: "business_differences_noManagement_content",
          header: "business_friction_fast_header",
          headerDescription: "business_friction_fast_headerDescription",
          img: require("assets/img/illustrations/meditation.svg")
        }
      ],
      highlights: [
        {
          title: "business_friction_oneregister_title",
          content: "business_friction_oneregister_content",
          header: "business_friction_oneregister_header",
          headerDescription: "business_friction_oneregister_headerDescription"
        },
        {
          title: "business_friction_trust_title",
          content: "business_friction_trust_content",
          header: "business_friction_trust_header",
          headerDescription: "business_friction_trust_headerDescription"
        },
        {
          title: "business_friction_fast_title",
          content: "business_friction_fast_content",
          header: "business_friction_fast_header",
          headerDescription: "business_friction_fast_headerDescription"
        }
      ],
      techfeatures: [
        {
          // img: require('assets/img/icons/credit-card.svg'),
          title: "business_highlights_faceRecognition_title"
        },
        {
          // img: require('assets/img/icons/money-bag.svg'),
          title: "business_highlights_liveness_title"
        },
        {
          // img: require('assets/img/icons/invest.svg'),
          title: "business_highlights_docscan_title"
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_authenticity_title"
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_biometric_title"
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_highlights_dashboard_title"
        }
      ],
      usecases: [
        {
          // img: require('assets/img/icons/credit-card.svg'),
          title: "business_usecases_neobank"
        },
        {
          // img: require('assets/img/icons/money-bag.svg'),
          title: "business_usecases_sharing"
        },
        {
          // img: require('assets/img/icons/invest.svg'),
          title: "business_usecases_p2p"
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_usecases_gaming"
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: "business_usecases_contract"
        }
      ]
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    getEmail() {
      return this.email;
    },
    startFirstAnimationScene: _this => {
      const controller = new _this.$ScrollMagic.Controller({
        globalSceneOptions: { offset: -300 }
      });
      const sections = [
        "#usecases",
        "#countries",
        "#howto",
        "#differences",
        "#techfeatures",
        "#producthighlights"
      ];
      let tm = {};
      for (let section of sections) {
        tm[section] = TweenMax.from(section, 1, {
          ease: Power2.easeOut,
          scale: 0.9,
          y: 200,
          opacity: 0.3
        });
        new _this.$ScrollMagic.Scene({
          triggerElement: section,
          duration: "100%"
        })
          .setTween(tm[section])
          .addTo(controller);
      }

      controllerHolder = controller;
    }
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    controllerHolder = controllerHolder.destroy();
  }
};
</script>

<style lang="sass" scoped>
.screenshots-container
  display: flex
  perspective: 300px
  overflow: visible
  width: 100%
  @media(min-width: 768px)
    width: auto
  img.screenshot
    flex: 1 1 auto
    min-width: 120px
    max-width: 180px
    align-self: center
    box-shadow: 2px 2px 20px -6px rgba(0,0,0,0.3)
    transform: rotateY(10deg)
    transition: 0.3s
    border-radius: 10px
    &:nth-child(1)
      transform: rotateY(7deg) translateX(50px)
    &:nth-child(2)
      transform: rotateY(7deg) translateX(20px)
    &:nth-child(3)
      transform: rotateY(7deg) translateX(0px)

    @media(min-width: 768px)
      &:nth-child(1)
        transform: rotateY(7deg) translateX(0px)
      &:nth-child(2)
        transform: rotateY(7deg) translateX(-70px)
      &:nth-child(3)
        transform: rotateY(7deg) translateX(-125px)
    // &:hover
    //   transform: rotateY(0) scale(1.2)
    //   z-index: 1
    //   transition: 0.3s
</style>
