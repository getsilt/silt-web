<template>
  <!-- Carrousel Tabs-->
  <div class="cards-wrapper_flex" id="features">
    <div
      class="tabs-wrapper tabs-wrapper--carousel tab-md tab-squared vertical text-left"
    >
      <v-tab
        activeTabName="digitalID"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-1-child': featuredTab == 'digitalID' }"
      >
        <span>{{ $t("business_solution_carrousel_kyc") }}</span>
      </v-tab>
      <v-tab
        v-if="hiddenTab !== 'customize'"
        activeTabName="customize"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-1-child': featuredTab == 'customize' }"
      >
        <span>{{ $t("business_solution_carrousel_customization") }}</span>
      </v-tab>
      <v-tab
        activeTabName="list"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-1-child': featuredTab == 'list' }"
      >
        <span>{{ $t("business_solution_carrousel_fraud") }}</span>
      </v-tab>
      <v-tab
        v-if="hiddenTab !== 'kyb'"
        activeTabName="kyb"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-1-child': featuredTab == 'kyb' }"
      >
        <span>{{ $t("nav_feature_kyb") }}</span>
      </v-tab>
      <v-tab
        activeTabName="biocheck"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-1-child': featuredTab == 'biocheck' }"
      >
        <span>{{ $t("business_solution_carrousel_biocheck") }}</span>
      </v-tab>
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
                <p>
                  <a href="/developers" class="bold-link link-with-arrow">
                    {{ $t("business_solution_card_kyc_link") }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide Digital ID-->

      <!-- Slide Fraud-->
      <div v-if="featuredTab == 'list'" class="card">
        <div class="claim-wrapper" id="differences">
          <div class="claim-container left">
            <div class="claim-side-img diagram-small" id="diagram">
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  class=""
                  src="@/assets/img/illustrations/watch_list_diagram_flow.png"
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
                  {{ $t("business_benefits_list_title") }}
                </h3>
                <ul class="checklist">
                  <li v-html="$t('features_security_expired_documents_title')">
                    {{ $t("features_security_expired_documents_title") }}
                  </li>
                  <li
                    v-html="
                      $t('features_security_document_forgery_detector_title')
                    "
                  >
                    {{
                      $t("features_security_document_forgery_detector_title")
                    }}
                  </li>
                  <li>
                    {{ $t("nav_feature_misconduct") }}
                  </li>
                  <li>
                    {{ $t("business_highlights_rules_title") }}
                  </li>
                </ul>
              </div>
            </div>
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
                <h3>{{ $t("customization_guide_title") }}</h3>
                <p>{{ $t("customization_guide_subtitle") }}</p>
                <!-- <p>{{ $t("customization_guide_description") }}</p> -->
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
        <div class="claim-wrapper" id="differences">
          <div class="claim-container left">
            <div class="claim-side-img diagram-small" id="diagram">
              <!-- TODO: Update kyb_flow_es.png and kyb_flow_en.png -->
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  class=""
                  src="@/assets/img/illustrations/kyb_flow_es.svg"
                  :alt="$t('seo_3')"
                  width="709"
                  height="843"
                />
              </template>
              <template v-else>
                <img
                  class=""
                  src="@/assets/img/illustrations/kyb_flow_en.svg"
                  :alt="$t('seo_3')"
                  width="709"
                  height="843"
                />
              </template>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h3 class="title">
                  {{ $t("kyb_claim1") }}
                </h3>
                <p v-html="$t('business_differences_oneRegister_content')">
                  {{ $t("kyb_solution_content1") }}
                </p>
                <p v-html="$t('business_differences_oneRegister_content')">
                  {{ $t("kyb_solution_content2") }}
                </p>
                <p>
                  <a href="/developers" class="bold-link link-with-arrow">
                    {{ $t("business_solution_card_kyb_link") }}
                  </a>
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
            <div class="claim-side-img diagram" id="diagram">
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  class=""
                  src="@/assets/img/illustrations/silt-workflow-biocheck_es.png"
                  :alt="$t('seo_3')"
                  width="709"
                  height="843"
                />
              </template>
              <template v-else>
                <img
                  class=""
                  src="@/assets/img/illustrations/silt-workflow-biocheck_en.png"
                  :alt="$t('seo_3')"
                  width="709"
                  height="843"
                />
              </template>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h3 class="title">
                  {{ $t("biocheck_claim1") }}
                </h3>
                <p v-html="$t('biocheck_claim2')">
                  {{ $t("biocheck_claim2") }}
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
import VTab from "@/components/VTab.vue";
import DocumentSelect from "@/components/DocumentSelect.vue";
import ColorPickerSlider from "@/components/ColorPickerSlider.vue";
import DemoButtons from "@/components/DemoButtons.vue";

export default {
  components: { VTab, DocumentSelect, ColorPickerSlider, DemoButtons },
  data() {
    return {
      featuredTab: "digitalID",
      color: "#2963ff",
      backgroundColor: "#2963ff",
      activeCustomizeTab: "default",
    };
  },
  methods: {
    updateColor(event) {
      this.color = `hsl(${event.h}, ${event.s}, ${event.l})`;
      this.backgroundColor = `hsla(${event.h}, ${event.s}, ${event.l})`;
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

.link-with-arrow
    position: relative
    &:after, &:before
      transition: 0.2s ease-in-out
      opacity: 0
      transform: translateX(0%)
      position: absolute
      right: 0
      font-family: "Font Awesome 5 Duotone"
      content: "\f061"
      color: #fff
    &:hover:after
      transition: 0.2s ease-in-out
      opacity: 1
      transform: translateX(100%)

.tabs-wrapper.vertical
  margin-right: $spacing-md

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
  width: -webkit-fill-available
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
.tabs-wrapper--carousel
  margin-bottom: $spacing-md
  .tab.active
    background: transparent !important
</style>
