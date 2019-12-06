<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('business_claim1')"></h1>
        <h4 class="subtitle">{{$t('business_claim2')}}</h4>
        <a :href="`mailto:${email}`">
          <button class="primary">{{$t('btn_cta_contact')}}</button>
        </a>
      </div>
      <div class="claim-bg fw-container-absolute" id="radar">
        <!-- <RadarSVG /> -->
      </div>
    </section>

    <!-- TECH FEATURES -->
    <section class="features-wrapper" id="techfeatures">
      <div class="section-headers">
        <h6 class="tag">{{$t('business_highlights_vanguardTech_section')}}</h6>
        <h2>{{$t('business_highlights_vanguardTech_title')}}</h2>
        <p>{{$t('business_highlights_vanguardTech_content')}}</p>
      </div>
      <div class="features-container">
        <div class="features-item" v-for="feature in techfeatures" :key="feature.title">
          <!-- <img :src="feature.img" /> -->
          <h3>{{$t(feature.title)}}</h3>
        </div>
      </div>
    </section>

    <!-- PRODUCT HIGHLIGHTS -->
    <section class="highlights-wrapper" id="producthighlights">
      <div class="section-headers">
        <h6 class="tag">{{$t('business_friction_section')}}</h6>
        <h2>{{$t('business_friction_title')}}</h2>
      </div>
      <div class="highlights-container">
        <article v-for="highlight in highlights" :key="highlight.title">
        <div class="article-container">
          <div class="article-header">
            <span class="big">{{$t(highlight.header)}}</span>
            {{$t(highlight.headerDescription)}}
            <!-- <img src="@/assets/img/icons/rocket.svg" alt /> -->
          </div>
          <h3>{{$t(highlight.title)}}</h3>
          <p>{{$t(highlight.content)}}</p>
        </div>
      </article>
      </div>
      <!-- <p>{{$t('business_friction_oneregister_title')}}</p> -->
    </section>

    <!-- Costs -->
    <section class="claim-wrapper" >
      <!-- <h5>{{$t('business_costs_title')}}</h5> -->
      <div class="claim-container" id="costsManagement">
        <div class="claim-info">
          <h2 class="title">{{$t('business_costs_title')}}</h2>
          <h4 class="subtitle">{{$t('business_costs_manage_content')}}</h4>
          <a :href="`mailto:${email}`">
            <button class="primary">{{$t('btn_cta_contact')}}</button>
          </a>
        </div>
        <div class="developers-img fw-container">
          <!-- <img src="@/assets/img/bg/api-response.png" /> -->
        </div>
      </div>
      
      <div class="claim-container" id="costsRetargeting">
        <div class="developers-img fw-container">
          <!-- <img src="@/assets/img/bg/api-response.png" /> -->
        </div>
        <div class="claim-info right">
          <h2 class="title">{{$t('business_costs_retargeting_title')}}</h2>
          <h4 class="subtitle">{{$t('business_costs_retargeting_content')}}</h4>
          <a :href="`mailto:${email}`">
            <button class="primary">{{$t('btn_cta_contact')}}</button>
          </a>
        </div>
      </div> 

    <div class="claim-container" id="sdk">
      <div class="claim-info">
        <h2 class="title">{{$t('business_benefits_sdk_title')}}</h2>
        <h4 class="subtitle">{{$t('business_benefits_sdk_content')}}</h4>
        <h6 class="subtitle">{{$t('business_benefits_integration_content')}}</h6>
        <ul>
          <li>{{$t('business_benefits_fraud')}}</li>
          <li>{{$t('business_benefits_gdpr')}}</li>
          <li>{{$t('business_benefits_kyc')}}</li>
          <li>{{$t('business_benefits_aml')}}</li>
          <li>{{$t('business_benefits_pep')}}</li>
          <li>{{$t('business_benefits_legal')}}</li>
        </ul>
        <a :href="`mailto:${email}`">
          <button class="primary">{{$t('btn_cta_contact')}}</button>
        </a>
      </div>
      <div class="developers-img fw-container" id="benefits">
        <!-- <img src="@/assets/img/bg/api-response.png" /> -->
      </div>
    </div>
    </section>

     <section class="features-wrapper" id="usecases">
      <div class="section-headers">
        <h6 class="tag">{{$t('business_usecases_section')}}</h6>
        <h2>{{$t('business_usecases_title')}}</h2>
        <p>{{$t('business_usecases_content')}}</p>
      </div>
      <div class="features-container">
        <div class="features-item" v-for="usecase in usecases" :key="usecase.title">
          <!-- <img :src="feature.img" /> -->
          <h3>{{$t(usecase.title)}}</h3>
        </div>
      </div>
      <a :href="`mailto:${email}`">
        <button class="primary">{{$t('btn_cta_contact')}}</button>
      </a>
    </section>

  </div>
</template>

<script>
// Animate on scroll
var controllerHolder;
if (process.client) {
  //const ScrollMagic = require('~/plugins/scrollmagic');
}

// import RadarSVG from '~/assets/img/bg/radar.svg?inline';
export default {
  components: {
    // RadarSVG
  },
  head() {
    return {
      title: this.$t('business_claim1'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('business_claim2')
        }
      ]
    };
  },
  data() {
    return {
      email: 'hello@joinsilt.com',
      highlights: [
        {
          title: 'business_friction_oneregister_title',
          content: 'business_friction_oneregister_content',
          header: 'business_friction_oneregister_header',
          headerDescription: 'business_friction_oneregister_headerDescription'
        },
        {
          title: 'business_friction_trust_title',
          content: 'business_friction_trust_content',
          header: 'business_friction_trust_header',
          headerDescription: 'business_friction_trust_headerDescription'
        },
        {
          title: 'business_friction_fast_title',
          content: 'business_friction_fast_content',
          header: 'business_friction_fast_header',
          headerDescription: 'business_friction_fast_headerDescription'
        },
      ],
      techfeatures: [
        {
          // img: require('assets/img/icons/credit-card.svg'),
          title: 'business_highlights_faceRecognition_title'
        },
        {
          // img: require('assets/img/icons/money-bag.svg'),
          title: 'business_highlights_liveness_title'
        },
        {
          // img: require('assets/img/icons/invest.svg'),
          title: 'business_highlights_docscan_title'
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: 'business_highlights_authenticity_title'
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: 'business_highlights_biometric_title'
        },
      ],
      usecases: [
        {
          // img: require('assets/img/icons/credit-card.svg'),
          title: 'business_usecases_neobank'
        },
        {
          // img: require('assets/img/icons/money-bag.svg'),
          title: 'business_usecases_sharing'
        },
        {
          // img: require('assets/img/icons/invest.svg'),
          title: 'business_usecases_p2p'
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: 'business_usecases_gaming'
        },
        {
          // img: require('assets/img/icons/graph-bars.svg'),
          title: 'business_usecases_contract'
        },
      ]
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    startFirstAnimationScene: _this => {
      const controller = new _this.$ScrollMagic.Controller({
        globalSceneOptions: { offset: -300 }
      });

      // highlights
      const producthighlights = TweenMax.from('#producthighlights', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      new _this.$ScrollMagic.Scene({
        triggerElement: '#producthighlights',
        duration: '100%'
      })
        .setTween(producthighlights)
        .addTo(controller);

      //techfeatures
      const techfeatures = TweenMax.from('#techfeatures', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      new _this.$ScrollMagic.Scene({
        triggerElement: '#techfeatures',
        duration: '100%'
      })
        .setTween(techfeatures)
        .addTo(controller);

      //costsManagement
      const costsManagement = TweenMax.from('#costsManagement', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      new _this.$ScrollMagic.Scene({
        triggerElement: '#costsManagement',
        duration: '100%'
      })
        .setTween(costsManagement)
        .addTo(controller);

      //costsRetargeting
      const costsRetargeting = TweenMax.from('#costsRetargeting', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      new _this.$ScrollMagic.Scene({
        triggerElement: '#costsRetargeting',
        duration: '100%'
      })
        .setTween(costsRetargeting)
        .addTo(controller);

      //sdk
      const sdk = TweenMax.from('#sdk', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      new _this.$ScrollMagic.Scene({
        triggerElement: '#sdk',
        duration: '100%'
      })
        .setTween(sdk)
        .addTo(controller);

      //usecases
      const usecases = TweenMax.from('#usecases', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      new _this.$ScrollMagic.Scene({
        triggerElement: '#usecases',
        duration: '100%'
      })
        .setTween(usecases)
        .addTo(controller);
      // // api-response
      // const apiresponse = TweenMax.from('#', 1, {
      //   ease: Power2.easeOut,
      //   scale: 1,
      //   x: -300,
      //   opacity: 0
      // });
      // const scene3 = new _this.$ScrollMagic.Scene({
      //   triggerElement: '#api-response',
      //   duration: '100%'
      // })
			// 		.setTween(apiresponse)
      //     .addTo(controller);
      
      

      controllerHolder = controller;
    }
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    controllerHolder = controllerHolder.destroy();
  }
};
</script>