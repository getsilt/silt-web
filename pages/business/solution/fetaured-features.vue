<template>
  <!-- Carrousel Tabs-->
  <div class="cards-wrapper_flex" id="features">
    <div
      class="
        tabs-wrapper tabs-wrapper--carousel
        tab-md tab-squared
        vertical
        text-left
      "
    >
      <v-tab
        activeTabName="digitalID"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-1-child': featuredTab == 'digitalID' }"
      >
        <span>{{ $t("business_differences_oneRegister_title") }}</span>
      </v-tab>
      <v-tab
        activeTabName="list"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-2-child': featuredTab == 'list' }"
      >
        <span>{{ $t("business_benefits_list_title") }}</span>
      </v-tab>
      <v-tab
        activeTabName="updated"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-3-child': featuredTab == 'updated' }"
      >
        <span>{{ $t("business_benefits_updatedDocs_title") }}</span>
      </v-tab>
      <v-tab
        activeTabName="customize"
        @onActiveTabChange="featuredTab = $event"
        :isSelected="featuredTab"
        :class="{ 'text-gradient-4-child': featuredTab == 'customize' }"
      >
        <span>{{ $t("customization_guide_title") }}</span>
      </v-tab>
    </div>

    <!-- Carrousel Content-->
    <div class="cards-carroussel">
      <!-- Slide Digital ID-->
      <div
        v-if="featuredTab == 'digitalID'"
        class="card"
        :class="{
          'bg-gradient-1': featuredTab == 'digitalID',
          'bg-gradient-2': featuredTab == 'list',
          'bg-gradient-3': featuredTab == 'updated',
          'bg-gradient-4': featuredTab == 'customize',
        }"
      >
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
                <!-- <p v-html="$t('business_differences_technology_content')">
                 {{ $t("business_differences_technology_content") }}
              </p> -->
                <demo-buttons class="colored" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide Digital ID-->

      <!-- Slide Fraud-->
      <div
        v-if="featuredTab == 'list'"
        class="card"
        :class="{
          'bg-gradient-1': featuredTab == 'digitalID',
          'bg-gradient-2': featuredTab == 'list',
          'bg-gradient-3': featuredTab == 'updated',
          'bg-gradient-4': featuredTab == 'customize',
        }"
      >
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
                  {{ $t("business_benefits_list_title") }}
                </h3>
                <h3 class="title">
                  {{ $t("business_highlights_authenticity_title") }}
                </h3>
                <h3 class="title">
                  {{ $t("business_highlights_rules_title") }}
                </h3>
                <h3 class="title">
                  {{ $t("business_benefits_updatedDocs_title") }}
                </h3>
                <!-- <p v-html="$t('business_differences_oneRegister_content')">
                  {{ $t("business_differences_oneRegister_content") }}
                </p> -->
                <!-- <p v-html="$t('business_differences_technology_content')">
                 {{ $t("business_differences_technology_content") }}
              </p> -->
                <demo-buttons class="colored" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Fraud-->

      <!-- Slide Customize-->
      <div v-if="featuredTab == 'customize'" class="card bg-gradient-4">
        <div class="claim-wrapper">
          <div class="claim-container left">
            <div
              class="
                claim-side-img
                section-information-wrapper
                customize-verification-flow-wrapper
              "
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
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.typography-heading
  margin-bottom: $spacing-md
  text-align: center

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
  align-items: flex-start
  justify-content: space-between
  width: 100%
  &>*
    margin: $spacing-sm

  h5
    margin: 0
    margin-bottom: $spacing-sm

  .roboto
    font-family: "Roboto"
  .comfortaa
    font-family: "Comfortaa", sans-serif
  .your-font
    pointer-events: none
    color: $color-grey-darken-1

.cards-carroussel
  flex: 1 1
.claim-side-img .diagram
  padding: 0
.claim-container .claim-side-img > img
  min-height: 200px
  max-height: 600px
  height: 100%
  width: auto

.tabs-wrapper--carousel
  margin-bottom: $spacing-md
  .tab.active
    background: transparent !important
</style>