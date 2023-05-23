<template>
  <div class="cards-wrapper_flex" id="features">
    <div class="tabs-wrapper tab-md tab-squared vertical text-left">
      <div
        class="tab-wrapper"
        v-for="(feature, index) in features"
        :key="index"
        @click="updateCalculator(feature.name)"
      >
        <v-tab
          :activeTabName="feature.name"
          :class="isFeatureActive(feature.name) ? 'active' : ''"
          :isSelected="isFeatureActive(feature.name)"
        >
          <span>{{ $t(feature.translationKey) }}</span>
        </v-tab>
      </div>
    </div>
    <div class="cards-carroussel">
      <div class="card">
        <PriceCalculator
          :hasAML="priceCalculatorProps.hasAML"
          :hasBiocheck="priceCalculatorProps.hasBiocheck"
          :hasKYB="priceCalculatorProps.hasKYB"
          :hasKYC="priceCalculatorProps.hasKYC"
          :hasOCR="priceCalculatorProps.hasOCR"
          :hasPEP="priceCalculatorProps.hasPEP"
        />
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import VTab from "@/components/VTab.vue";
import PriceCalculator from "./PriceCalculator.vue";

export default {
  components: { VTab, PriceCalculator },
  data() {
    return {
      features: [
        { name: "KYC", isActive: false, translationKey: "nav_feature_kyc" },
        { name: "KYB", isActive: false, translationKey: "nav_feature_kyb" },
        { name: "OCR", isActive: false, translationKey: "nav_feature_ocr" },
        { name: "PEP", isActive: false, translationKey: "nav_feature_pep" },
        { name: "AML", isActive: false, translationKey: "nav_feature_aml" },
        {
          name: "biocheck",
          isActive: false,
          translationKey: "nav_feature_biocheck",
        },
      ],
      priceCalculatorProps: {
        hasAML: false,
        hasKYC: false,
        hasKYB: false,
        hasOCR: false,
        hasPEP: false,
        hasBiocheck: false,
      },
    };
  },
  mounted() {
    this.startFirstAnimationScene();
  },
  methods: {
    startFirstAnimationScene() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#features .tabs-wrapper",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#features .tab-wrapper", {
          duration: 1,
          scale: 1,
          y: 75,
          rotateY: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        });
    },
    updateCalculator(featureName) {
      const feature = this.features.find((f) => f.name === featureName);
      if (feature) {
        feature.isActive = !feature.isActive;

        const propertyMap = {
          KYC: "hasKYC",
          KYB: "hasKYB",
          OCR: "hasOCR",
          PEP: "hasPEP",
          AML: "hasAML",
          biocheck: "hasBiocheck",
        };

        if (propertyMap.hasOwnProperty(featureName)) {
          const property = propertyMap[featureName];
          this.priceCalculatorProps[property] = feature.isActive;
        }
      }
    },
    isFeatureActive(featureName) {
      const feature = this.features.find((f) => f.name === featureName);
      return feature ? feature.isActive : false;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

@media (max-width: 768px)

.cards-wrapper_flex
  justify-content: center
  align-items: center

.tabs-wrapper.vertical
  margin-right: $spacing-md
  .tab
    margin-bottom: $spacing-sm

.cards-carroussel
  flex: 1 1
  width: -webkit-fill-available
  .card
    background: transparent
</style>
