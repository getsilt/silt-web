<template>
  <!-- Carrousel Tabs-->
  <div class="cards-wrapper_flex" id="features">
    <div
      class="tabs-wrapper tabs-wrapper--carousel tab-md tab-squared vertical text-left"
    >
      <div class="tab-wrapper">
        <v-tab
          activeTabName="automaticDetection"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
          :class="{
            'text-gradient-1-child': featuredTab == 'automaticDetection',
          }"
        >
          <h3 class="seo_header">
            {{ $t("kyb_solution_carousel_collection_title") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="automaticVerification"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
          :class="{
            'text-gradient-1-child': featuredTab == 'automaticVerification',
          }"
        >
          <h3 class="seo_header">
            {{ $t("kyb_solution_carousel_verification_title") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="customRequirements"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
          :class="{
            'text-gradient-1-child': featuredTab == 'customRequirements',
          }"
        >
          <h3 class="seo_header">
            {{ $t("kyb_solution_carousel_custom_requirements_title") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="LLM"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
          :class="{ 'text-gradient-1-child': featuredTab == 'LLM' }"
        >
          <h3 class="seo_header">
            {{ $t("kyb_solution_carousel_LLM_title") }}
          </h3>
        </v-tab>
      </div>
      <div class="tab-wrapper">
        <v-tab
          activeTabName="companyDatabase"
          @onActiveTabChange="featuredTab = $event"
          :isSelected="featuredTab"
          :class="{ 'text-gradient-1-child': featuredTab == 'companyDatabase' }"
        >
          <h3 class="seo_header">
            {{ $t("kyb_solution_carousel_database_title") }}
          </h3>
        </v-tab>
      </div>
    </div>

    <!-- Carrousel Content-->
    <div class="cards-carroussel">
      <!-- Slide Automatic Detection-->
      <div v-if="featuredTab == 'automaticDetection'">
        <div class="claim-wrapper">
          <div class="list-wrapper pins grid-section">
            <card
              v-for="automaticCollectionCopy in automaticCollectionCopies"
              :key="automaticCollectionCopy.title"
              :class="automaticCollectionCopy.class"
            >
              <div class="article-container" slot="body">
                <h5
                  v-html="$t(`${automaticCollectionCopy.title}`)"
                  class="color_blue_text"
                />
                <p>{{ $t(automaticCollectionCopy.content) }}</p>
              </div>
            </card>
          </div>
        </div>
      </div>
      <!-- END Slide Automatic Detection-->

      <!-- Slide Custom Requirements-->
      <div v-if="featuredTab == 'customRequirements'" class="card">
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
                  <div class="custom-requirements-list-number">{{ index }}</div>
                  <span>{{ $t(customRequirementsCopy.title) }}</span>
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
      <!-- END Custom Requirements-->

      <!-- Slide Automatic Verification-->
      <div v-if="featuredTab == 'automaticVerification'">
        <div class="claim-wrapper">
          <div class="list-wrapper pins grid-section">
            <card
              v-for="automaticVerificationCopy in automaticVerificationCopies"
              :key="automaticVerificationCopy.title"
              :class="automaticVerificationCopy.class"
            >
              <div class="article-container" slot="body">
                <h5
                  v-html="$t(`${automaticVerificationCopy.title}`)"
                  class="color_blue_text"
                />
                <p>{{ $t(automaticVerificationCopy.content) }}</p>
              </div>
            </card>
          </div>
        </div>
      </div>
      <!-- END Slide Automatic Verification-->

      <!-- Slide LLM (AI for your KYC)-->
      <div v-if="featuredTab == 'LLM'" class="card">
        <div class="claim-wrapper">
          <div class="claim-container left">
            <div class="claim-side-img diagram-small" id="diagram">
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  class=""
                  src="@/assets/img/illustrations/llm_example.svg"
                  :alt="$t('seo_document_scan')"
                  width="709"
                  height="843"
                />
              </template>
              <template v-else>
                <img
                  class=""
                  src="@/assets/img/illustrations/llm_example.svg"
                  :alt="$t('seo_document_scan')"
                  width="709"
                  height="843"
                />
              </template>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h4 class="title">
                  {{ $t("kyb_solution_carousel_LLM_subtitle") }}
                </h4>
                <p>{{ $t("kyb_solution_carousel_LLM_content") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Slide LLM (AI for your KYC)-->

      <!-- Slide Biocheck-->
      <div v-if="featuredTab == 'companyDatabase'" class="card">
        <div class="claim-wrapper">
          <div class="claim-container left">
            <div class="claim-side-img diagram-small" id="diagram">
              <template v-if="$root.$i18n.locale === 'es'">
                <img
                  src="@/assets/img/illustrations/company_database.svg"
                  :alt="$t('seo_document_scan')"
                />
              </template>
              <template v-else>
                <img
                  src="@/assets/img/illustrations/company_database.svg"
                  :alt="$t('seo_document_scan')"
                />
              </template>
            </div>
            <div class="claim-info-wrapper differences">
              <div class="claim-info">
                <h4 class="title">
                  {{ $t("kyb_solution_carousel_database_subtitle") }}
                </h4>
                <p v-html="$t('kyb_solution_carousel_database_content')" />
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
      featuredTab: "automaticDetection",
      color: "#2963ff",
      backgroundColor: "#2963ff",
      activeCustomizeTab: "default",
      automaticCollectionCopies: [
        {
          title: "kyb_solution_carousel_company_information_title",
          class: "card-card-1",
          content: "kyb_solution_carousel_company_information_content",
        },
        {
          title: "kyb_solution_carousel_financials_title",
          class: "card-card-4",
          content: "kyb_solution_carousel_financials_content",
        },
        {
          title: "kyb_solution_carousel_UBO_discovery_title",
          class: "card-card-2",
          content: "kyb_solution_carousel_UBO_discovery_content",
        },
        {
          title: "kyb_solution_carousel_AI_title",
          class: "card-card-5",
          content: "kyb_solution_carousel_AI_content",
        },
      ],
      automaticVerificationCopies: [
        {
          title: "kyb_solution_carousel_representatives_title",
          class: "card-card-1",
          content: "kyb_solution_carousel_representatives_content",
        },
        {
          title: "kyb_solution_carousel_UBO_verification_title",
          class: "card-card-3",
          content: "kyb_solution_carousel_UBO_verification_content",
        },
        {
          title: "kyb_solution_carousel_safety_title",
          class: "card-card-4",
          content: "kyb_solution_carousel_safety_content",
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
      ],
      frauds: [
        {
          title: "business_solution_carousel_rules_title",
          class: "card-card-1",
          content: "business_solution_carousel_rules_subtitle",
        },
        {
          title: "business_solution_carousel_phone_verification_title",
          class: "card-card-2",
          content: "business_solution_carousel_phone_verification_subtitle",
        },
        {
          title: "business_solution_carousel_misconduct_title",
          class: "card-card-3",
          content: "business_solution_carousel_misconduct_subtitle",
        },
        {
          title: "features_security_expired_documents_title",
          class: "card-card-4",
          content: "business_solution_carousel_expired_documents_subtitle",
        },
        {
          title: "business_solution_carousel_aml_pep_title",
          class: "card-card-5",
          content: "business_solution_carousel_aml_pep_subtitle",
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
.typography-heading
  text-align: center

.bold-link
  color: #fff

.grid-section
  display: grid
  .card-card-1
    grid-column: 1
    grid-row: 1
  .card-card-2
    grid-column: 1
    grid-row: 2
  .card-card-3
    grid-column: 2
    grid-row: 1 / 2
  .card-card-4
    grid-column: 3
    grid-row: 1
  .card-card-5
    grid-column: 3
    grid-row: 2

@media (max-width: 768px)
  .grid-section
    display: flex

.custom-requirements-list-wrapper
  text-align: left
  ul
    padding: 0
  .custom-requirements-list
    display: flex
    align-items: center
    list-style: none
    margin-bottom: $spacing-xlg
    font-family: $font-bold
    .custom-requirements-list-number
      @extend .bg-gradient-1 !optional
      padding-top: 2px
      width: 30px
      height: 30px
      border-radius: 50%
      margin-right: $spacing-md
      display: flex
      justify-content: center
      align-items: center
      color: #fff
      font-family: $font-bold

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
