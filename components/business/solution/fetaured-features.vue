<template>
  <!-- Carrousel Tabs-->
  <div class="cards-wrapper_flex" id="features">
    <div class="tabs-wrapper tabs-wrapper--background list tab-squared">
      <div class="tab-wrapper">
        <v-tab
          activeTabName="digitalID"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h3 class="seo_header">
            {{ $t("business_solution_carrousel_kyc") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          v-if="hiddenTab !== 'kyb'"
          activeTabName="kyb"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h3 class="seo_header">{{ $t("nav_feature_kyb") }}</h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          v-if="hiddenTab !== 'customize'"
          activeTabName="customize"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h3 class="seo_header">
            {{ $t("business_solution_carrousel_customization") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="list"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h3 class="seo_header">
            {{ $t("business_solution_carrousel_fraud") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="biocheck"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
        >
          <h3 class="seo_header">
            {{ $t("business_solution_carrousel_biocheck") }}
          </h3>
        </v-tab>
      </div>
    </div>

    <!-- Carrousel Content-->
    <div class="cards-carroussel">
      <!-- Slide Digital ID-->
      <div v-if="featuredTab == 'digitalID'" class="card">
        <div class="claim-wrapper" id="differences">
          <div class="claim-container left">
            <div class="claim-side-img diagram" id="diagram">
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  class=""
                  src="@/assets/img/illustrations/user_flow_diagram_es.svg"
                  :alt="$t('seo_document_scan')"
                  width="709"
                  height="843"
                />
              </template>
              <template v-else>
                <img
                  class=""
                  src="@/assets/img/illustrations/user_flow_diagram_en.svg"
                  :alt="$t('seo_document_scan')"
                  width="709"
                  height="843"
                />
              </template>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h4 class="title">
                  {{ $t("business_differences_title") }}
                </h4>
                <p v-html="$t('business_solution_kyc_page_content2')" />
                <p>
                  <nuxt-link
                    :to="localePath({ name: 'kyc' })"
                    class="bold-link with-arrow"
                  >
                    {{ $t("business_solution_card_kyc_link") }}
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide Digital ID-->

      <!-- Slide Fraud-->
      <div v-if="featuredTab == 'list'">
        <div class="claim-wrapper" id="differences">
          <div class="list-wrapper pins fraud-grid">
            <card
              v-for="fraud in frauds"
              :key="fraud.title"
              :class="fraud.class"
            >
              <div class="article-container" slot="body">
                <h5 v-html="$t(`${fraud.title}`)" class="color_primary_text" />
                <p>{{ $t(fraud.content) }}</p>
              </div>
            </card>
          </div>
        </div>
      </div>
      <!-- END Fraud-->

      <!-- Slide Customize-->
      <div v-if="featuredTab == 'customize'" class="card">
        <div class="claim-wrapper">
          <div class="claim-container left">
            <div
              class="claim-side-img section-information-wrapper customize-verification-flow-wrapper"
            >
              <div
                v-show="activeCustomizeTab === 'default'"
                class="claim-side-img right screenshots-container"
              >
                <document-select
                  :color="`color: ${color}`"
                  :buttonStyle="`background-color: ${color}; font-family: Futura-Bold`"
                  :background="`background-color: ${backgroundColor}`"
                  typography="font-family: Futura-Bold"
                />
              </div>
              <div
                v-show="activeCustomizeTab === 'roboto'"
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
                v-show="activeCustomizeTab === 'comfortaa'"
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
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h4>{{ $t("customization_guide_title") }}</h4>
                <p>{{ $t("customization_guide_description") }}</p>
                <div class="customize-verification-flow-wrapper__options">
                  <color-picker-slider @onChange="updateColor($event)" />
                  <div class="tabs-wrapper vertical dark">
                    <h5 class="typography-heading">
                      {{ $t("customization_guide_font") }}
                    </h5>
                    <v-tab
                      activeTabName="default"
                      @onActiveTabChange="activeCustomizeTab = $event"
                      :isSelected="activeCustomizeTab"
                    >
                      <p>Default</p>
                    </v-tab>
                    <v-tab
                      activeTabName="roboto"
                      @onActiveTabChange="activeCustomizeTab = $event"
                      :isSelected="activeCustomizeTab"
                      class="roboto"
                    >
                      <p>Roboto</p>
                    </v-tab>
                    <v-tab
                      activeTabName="comfortaa"
                      @onActiveTabChange="activeCustomizeTab = $event"
                      :isSelected="activeCustomizeTab"
                      class="comfortaa"
                    >
                      <p>Comfortaa</p>
                    </v-tab>
                    <v-tab
                      activeTabName="your-font"
                      @onActiveTabChange="activeCustomizeTab = $event"
                      :isSelected="activeCustomizeTab"
                      class="your-font"
                    >
                      <p>Your font</p>
                    </v-tab>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide Customize-->

      <!-- Slide KYB-->
      <div v-if="featuredTab == 'kyb'" class="card">
        <div class="claim-wrapper">
          <div class="claim-container left">
            <div class="claim-side-img custom-requirements-list-wrapper">
              <ul>
                <li
                  v-for="(
                    customRequirementsCopy, index
                  ) of customRequirementsCopies"
                  :key="customRequirementsCopy.title"
                  class="custom-requirements-list"
                >
                  <div class="custom-requirements-list-number">
                    {{ index + 1 }}
                  </div>
                  <h4 class="seo_header">
                    {{ $t(customRequirementsCopy.title) }}
                  </h4>
                </li>
              </ul>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h4 class="title">
                  {{ $t("kyb_solution_carousel_custom_requirements_subtitle") }}
                </h4>
                <p>
                  {{ $t("kyb_solution_carousel_custom_requirements_content") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide KYB-->

      <!-- Slide Biocheck-->
      <div v-if="featuredTab == 'biocheck'" class="card">
        <div class="claim-wrapper" id="differences">
          <div class="claim-container left">
            <div class="claim-side-img diagram-small" id="diagram">
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  src="@/assets/img/illustrations/silt-workflow-biocheck_es.svg"
                  :alt="$t('seo_document_scan')"
                />
              </template>
              <template v-else>
                <img
                  src="@/assets/img/illustrations/silt-workflow-biocheck_en.svg"
                  :alt="$t('seo_document_scan')"
                />
              </template>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h4 class="title">
                  {{ $t("biocheck_claim1") }}
                </h4>
                <p v-html="$t('biocheck_claim2')" />
                <p>
                  <a href="/biocheck" class="bold-link with-arrow">
                    {{ $t("business_solution_card_biocheck_link") }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide Biocheck-->
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import VTab from "@/components/VTab.vue";
import DocumentSelect from "@/components/DocumentSelect.vue";
import ColorPickerSlider from "@/components/ColorPickerSlider.vue";
import DemoButtons from "@/components/DemoButtons.vue";
import Card from "@/components/Card.vue";

export default {
  components: { VTab, DocumentSelect, ColorPickerSlider, DemoButtons, Card },
  data() {
    return {
      featuredTab: "digitalID",
      color: "#2963ff",
      backgroundColor: "#2963ff",
      activeCustomizeTab: "default",
      frauds: [
        {
          title: "business_solution_carousel_rules_title",
          class: "fraud-card-1",
          content: "business_solution_carousel_rules_subtitle",
        },
        {
          title: "business_solution_carousel_phone_verification_title",
          class: "fraud-card-2",
          content: "business_solution_carousel_phone_verification_subtitle",
        },
        {
          title: "business_solution_carousel_misconduct_title",
          class: "fraud-card-3",
          content: "business_solution_carousel_misconduct_subtitle",
        },
        {
          title: "features_security_expired_documents_title",
          class: "fraud-card-4",
          content: "business_solution_carousel_expired_documents_subtitle",
        },
        {
          title: "business_solution_carousel_aml_pep_title",
          class: "fraud-card-5",
          content: "business_solution_carousel_aml_pep_subtitle",
        },
      ],
      customRequirementsCopies: [
        {
          title: "kyb_solution_carousel_custom_requirements_step_1",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_2",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_3",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_4",
        },
        {
          title: "kyb_solution_carousel_custom_requirements_step_5",
        },
      ],
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    updateColor(event) {
      this.color = `hsl(${event.h}, ${event.s}, ${event.l})`;
      this.backgroundColor = `hsla(${event.h}, ${event.s}, ${event.l})`;
    },
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
        .from("#features .tabs-wrapper", {
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
  props: {
    hiddenTab: {
      required: false,
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.typography-heading
  text-align: center

.bold-link
  color: #fff

.fraud-grid
  display: grid
  .fraud-card-1
    grid-column: 1
    grid-row: 1
  .fraud-card-2
    grid-column: 1
    grid-row: 2
  .fraud-card-3
    grid-column: 2
    grid-row: 1 / 2
  .fraud-card-4
    grid-column: 3
    grid-row: 1
  .fraud-card-5
    grid-column: 3
    grid-row: 2

@media (max-width: 768px)
  .fraud-grid
    display: flex

.tabs-wrapper.vertical
  margin-right: $spacing-md

.custom-requirements-list-wrapper
  text-align: left
  ul
    padding: 0
  .custom-requirements-list
    display: flex
    list-style: none
    margin-bottom: $spacing-xlg
    .custom-requirements-list-number
      background-color: rgba(255,255,255,0.2)
      width: 25px
      height: 25px
      border-radius: 50%
      margin-right: $spacing-sm
      display: flex
      justify-content: center
      align-items: center
      color: $color-primary

.customize-verification-flow-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center
.customize-verification-flow-wrapper__options
  display: flex
  flex-direction: row
  flex-wrap: wrap
  align-items: center
  justify-content: space-around
  width: 100%
  &>*
    margin: $spacing-sm

  h5
    margin: 0
    margin-bottom: $spacing-lg

  .roboto
    font-family: "Roboto"
  .comfortaa
    font-family: "Comfortaa", sans-serif
  .your-font
    pointer-events: none
    color: $color-grey-darken-1

.cards-carroussel
  flex: 1 1
  max-width: 1000px
  margin: auto
.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    width: 100%
    max-width: 450px
    height: auto
.claim-side-img.diagram-small
  padding-right: $spacing-lg
  padding-left: $spacing-lg
  & > img
    width: 100%
    max-width: 350px
    height: auto
.claim-info-wrapper.differences
  padding-bottom: 0
</style>
