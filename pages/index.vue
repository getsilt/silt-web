<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-wrapper">
      <div class="claim-info">
        <h1 class="title">{{$t('home_claim1')}}</h1>
        <h4 class="subtitle">{{$t('home_claim2')}}</h4>
        <a :href="`mailto:${email}`">
          <button class="primary">{{$t('btn_cta')}}</button>
        </a>
      </div>
      <div class="claim-bg fw-container-absolute" id="radar">
        <!-- <RadarSVG /> -->
      </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="highlights-wrapper" id="highlights">
      <article>
        <div class="article-container">
          <div>
            <!-- <img src="@/assets/img/icons/rocket.svg" alt /> -->
          </div>
          <h3>{{$t('home_highlights_api_title')}}</h3>
          <p>{{$t('home_highlights_api_content')}}</p>
        </div>
      </article>
      <article>
        <div class="article-container">
          <div>
            <!-- <img src="@/assets/img/icons/latam.svg" alt /> -->
          </div>
          <h3>{{$t('home_highlights_latam_title')}}</h3>
          <p>{{$t('home_highlights_latam_content')}}</p>
        </div>
      </article>
      <article>
        <div class="article-container">
          <div>
            <!-- <img src="@/assets/img/icons/security.svg" alt /> -->
          </div>
          <h3>{{$t('home_highlights_security_title')}}</h3>
          <p>{{$t('home_highlights_security_content')}}</p>
        </div>
      </article>
    </section>

    <!-- FEATURES -->
    <!-- <section class="features-wrapper" id="features">
      <h1>{{$t('home_features_title')}}</h1>
      <div class="features-container">
        <div class="features-item" v-for="feature in features" :key="feature.title">
          <img :src="feature.img" />
          <h3>{{$t(feature.title)}}</h3>
        </div>
      </div>
    </section> -->

    <!-- DEVELOPERS -->
    <section class="claim-wrapper">
      <div class="developers-img fw-container" id="api-response">
        <!-- <img src="@/assets/img/bg/api-response.png" /> -->
      </div>
      <div class="claim-info right">
        <h1 class="title">{{$t('home_developers_title')}}</h1>
        <h4 class="subtitle">{{$t('home_developers_content')}}</h4>
        <a :href="`mailto:${email}`">
          <button class="primary">{{$t('btn_cta')}}</button>
        </a>
      </div>
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
      title: this.$t('home_claim1'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home_claim2')
        }
      ]
    };
  },
  data() {
    return {
      email: 'hello@joinsilt.com',
      // features: [
      //   {
      //     img: require('assets/img/icons/credit-card.svg'),
      //     title: 'home_features_finance_management_title'
      //   },
      //   {
      //     img: require('assets/img/icons/money-bag.svg'),
      //     title: 'home_features_credit_title'
      //   },
      //   {
      //     img: require('assets/img/icons/invest.svg'),
      //     title: 'home_features_investment_title'
      //   },
      //   {
      //     img: require('assets/img/icons/graph-bars.svg'),
      //     title: 'home_features_accounting_software_title'
      //   },
      //   {
      //     img: require('assets/img/icons/diamond.svg'),
      //     title: 'home_features_savings_title'
      //   },
      //   {
      //     img: require('assets/img/icons/authentication.svg'),
      //     title: 'home_features_account_authentication_title'
      //   }
      // ]
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
      const highlights = TweenMax.from('#highlights', 1, {
        ease: Power2.easeOut,
        scale: 0.9,
        y: 100,
        opacity: 0
      });
      const scene1 = new _this.$ScrollMagic.Scene({
        triggerElement: '#highlights',
        duration: '100%'
      })
        .setTween(highlights)
        .addTo(controller);

      // features
      // const features = TweenMax.from('#features', 1, {
      //   ease: Power2.easeOut,
      //   scale: 0.9,
      //   y: 100,
      //   opacity: 0
      // });
      // const scene2 = new _this.$ScrollMagic.Scene({
      //   triggerElement: '#features',
      //   duration: '100%'
      // })
      //   .setTween(features)
      //   .addTo(controller);

      // api-response
      const apiresponse = TweenMax.from('#api-response', 1, {
        ease: Power2.easeOut,
        scale: 1,
        x: -300,
        opacity: 0
      });
      const scene3 = new _this.$ScrollMagic.Scene({
        triggerElement: '#api-response',
        duration: '100%'
      })
					.setTween(apiresponse)
          .addTo(controller);
      
      

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
@import '@/assets/sass/vars.sass'
.claim-wrapper
  display: flex
  flex-wrap: wrap
  @media (max-width: 767px)
    position: relative
  .claim-info
    max-width: 500px
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-top: 10px
    margin-bottom: 10px
    justify-content: center
    &.right
      @media (min-width: 768px)
        align-items: flex-end
        text-align: right
        margin-left: auto
    .title
      margin: 0 0 40px 0
    .subtitle
      margin: 0 0 40px 0
      max-width: 440px

  .claim-bg
    margin-top: 10px
    margin-bottom: 10px
    text-align: right
    z-index: -1
    opacity: 0.5
    @media (min-width: 768px)
      margin-right: -40px
      opacity: 1
    svg
      max-width: 100%
      overflow: visible
      $radar-duration: 6s
      #bullet1, #bullet2, #bullet3
        circle
          animation: radarPoint $radar-duration infinite linear
          opacity: 0
      #bullet1 circle
        animation-delay: $radar-duration*0.85
      #bullet2 circle
        animation-delay: $radar-duration*0.725
      #bullet3 circle
        animation-delay: $radar-duration*0.083
      #radar-bar
        animation: rotate $radar-duration infinite linear
        transform-origin: 60% 50%
      @media (max-width: 767px)
        margin-top: 190px
        margin-right: -40px

      @keyframes rotate 
        from 
          transform: rotate(0deg)
        to
          transform: rotate(359deg)

      @keyframes radarPoint 
        0%
          opacity: 0
        3%
          opacity: 1
        80%
          opacity: 0


  .developers-img
    margin-top: 10px
    margin-bottom: 10px
    img
      width: 100%
      @media (min-width: 1000px)
        max-width: 450px
      @media (min-width: 1400px)
        max-width: 700px

.highlights-wrapper
  display: flex
  background: #ffffff
  flex-wrap: wrap
  border-radius: $radius-md
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05)
  color: $color-grey-lighten-1
  padding: 80px 0
  article
    padding: 0 40px
    flex: 1 1 100%
    @media (min-width: 768px)
      flex: 1 1 33.33%
    @media (min-width: 1200px)
      padding: 0 80px
    &:not(:first-child)
      @media (min-width: 768px)
        border-left: 1px solid $color-grey-lighten-2
    .article-container
      padding: 20px 0
      h3
        color: rgba($color-primary, 0.9)
        
.features-wrapper
  h1
    max-width: 900px
  .features-container
    display: flex
    flex-wrap: wrap
    .features-item
      display: flex
      flex-wrap: nowrap
      width: 100%
      margin: 40px 0
      @media (min-width: 768px)
        width: 50%
      @media (min-width: 1200px)
        width: 33.33%
      h3
        margin: auto 20px
        line-height: 1.5em
        font-size: 1.5rem


</style>