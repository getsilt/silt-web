<template>
  <!-- Carrousel Tabs-->
  <div class="cards-wrapper_flex" id="features">
    <div class="tabs-wrapper tab-md tab-squared vertical text-left">
      <div class="tab-wrapper">
        <v-tab
          activeTabName="KYC"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <span>{{ $t("nav_feature_kyc") }}</span>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="KYB"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <span>{{ $t("nav_feature_kyb") }}</span>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="OCR"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <span>{{ $t("nav_feature_ocr") }}</span>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="PEP"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <span>{{ $t("nav_feature_pep") }}</span>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="AML"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <span>{{ $t("nav_feature_aml") }}</span>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="biocheck"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <span>{{ $t("nav_feature_biocheck") }}</span>
        </v-tab>
      </div>
    </div>

    <div class="cards-carroussel"></div>
  </div>
</template>

<script>
import gsap from "gsap";
import VTab from "@/components/VTab.vue";
import Card from "@/components/Card.vue";

export default {
  components: { VTab, Card },
  data() {
    return {
      featuredTab: "KYC",
      activeCustomizeTab: "default",
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
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
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

@media (max-width: 768px)

.tabs-wrapper.vertical
    margin-right: $spacing-md
    .tab
        margin-bottom: $spacing-md

.cards-carroussel
    flex: 1 1
    width: -webkit-fill-available
</style>
