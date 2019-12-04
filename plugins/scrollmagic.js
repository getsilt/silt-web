import Vue from 'vue'
import { TweenMax } from 'gsap/TweenMax'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

const GSAPScrollMagic = {
  install (Vue, options) {
    // GSAP
    Vue.prototype.$GSAP = {
      TweenMax,
      TimelineMax,
      Linear,
      Power1,
      Power2,
      Power3,
      Back
    }
    // ScrollMagic
    Vue.prototype.$ScrollMagic = {
      Controller: ScrollMagic.Controller,
      Scene: ScrollMagic.Scene
    }
  }
}

Vue.use(GSAPScrollMagic)