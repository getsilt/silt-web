<template>
  <!-- Unique advantage  -->
  <div class="fw-container--dark">
    <div class="section-headers">
      <span class="tag">{{
        $t("business_highlights_vanguardTech_section")
      }}</span>
      <h2>{{ $t("business_highlights_vanguardTech_title") }}</h2>
      <p>{{ $t("business_highlights_vanguardTech_content") }}</p>
    </div>

    <!-- Carrousel Tabs-->
    <section class="container-md">
      <div class="cards-wrapper_flex" id="features">
        <div class="tabs-wrapper tabs-wrapper--carousel tab-md tab-squared">
          <v-tab
            activeTabName="digitalID"
            @onActiveTabChange="solutionTab = $event"
            :isSelected="solutionTab"
            :class="{ 'text-gradient-1-child': solutionTab == 'digitalID' }"
          >
            <span>{{ $t("business_differences_oneRegister_title") }}</span>
          </v-tab>
          <v-tab
            activeTabName="list"
            @onActiveTabChange="solutionTab = $event"
            :isSelected="solutionTab"
            :class="{ 'text-gradient-2-child': solutionTab == 'list' }"
          >
            <span>{{ $t("business_benefits_list_title") }}</span>
          </v-tab>
          <v-tab
            activeTabName="updated"
            @onActiveTabChange="solutionTab = $event"
            :isSelected="solutionTab"
            :class="{ 'text-gradient-3-child': solutionTab == 'updated' }"
          >
            <span>{{ $t("business_benefits_updatedDocs_title") }}</span>
          </v-tab>
          <v-tab
            activeTabName="customize"
            @onActiveTabChange="solutionTab = $event"
            :isSelected="solutionTab"
            :class="{ 'text-gradient-4-child': solutionTab == 'customize' }"
          >
            <span>{{ $t("customization_guide_title") }}</span>
          </v-tab>
        </div>
        <!-- Carrousel Content-->
        <div class="cards-carroussel">
          <div
            v-if="solutionTab == 'digitalID'"
            class="card"
            :class="{
              'bg-gradient-1': solutionTab == 'digitalID',
              'bg-gradient-2': solutionTab == 'list',
              'bg-gradient-3': solutionTab == 'updated',
              'bg-gradient-4': solutionTab == 'customize',
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
                    <demo-buttons />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="solutionTab == 'customize'" class="card bg-gradient-4">
            <div class="claim-wrapper" id="differences">
              <div class="claim-container left">
                <div
                  class="
                    claim-side-img
                    section-information-wrapper
                    customize-verification-flow-wrapper
                  "
                >
                  <div
                    v-show="activeTabName === 'default'"
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
                    v-show="activeTabName === 'roboto'"
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
                    v-show="activeTabName === 'comfortaa'"
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
                          @onActiveTabChange="activeTabName = $event"
                          :isSelected="activeTabName"
                        >
                          <p>Default</p>
                        </v-tab>
                        <v-tab
                          activeTabName="roboto"
                          @onActiveTabChange="activeTabName = $event"
                          :isSelected="activeTabName"
                          class="roboto"
                        >
                          <p>Roboto</p>
                        </v-tab>
                        <v-tab
                          activeTabName="comfortaa"
                          @onActiveTabChange="activeTabName = $event"
                          :isSelected="activeTabName"
                          class="comfortaa"
                        >
                          <p>Comfortaa</p>
                        </v-tab>
                        <v-tab
                          activeTabName="your-font"
                          @onActiveTabChange="activeTabName = $event"
                          :isSelected="activeTabName"
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
        </div>

        <!-- Features -->
        <div class="features-container">
          <div class="flex-col">
            <card
              class="features-item"
              v-for="feature in techfeatures.slice(0, 2)"
              :key="feature.title"
            >
              <i slot="image" class="fad fa-2x" :class="feature.icon"></i>
              <h5 slot="title">{{ $t(feature.title) }}</h5>
              <!-- <span slot="body">{{ $t(feature.body) }}</span> -->
            </card>
          </div>
          <div class="flex-col">
            <card
              class="features-item"
              v-for="feature in techfeatures.slice(2, 3)"
              :key="feature.title"
            >
              <i slot="image" class="fad fa-2x" :class="feature.icon"></i>
              <h5 slot="title">{{ $t(feature.title) }}</h5>
              <!-- <span slot="body">{{ $t(feature.body) }}</span> -->
            </card>
          </div>
          <div class="flex-col">
            <card
              class="features-item"
              v-for="feature in techfeatures.slice(3, 6)"
              :key="feature.title"
            >
              <i slot="image" class="fad fa-2x" :class="feature.icon"></i>
              <h5 slot="title">{{ $t(feature.title) }}</h5>
              <!-- <span slot="body">{{ $t(feature.body) }}</span> -->
            </card>
          </div>
        </div>
      </div>
    </section>

    <!-- Silt's Fraud List & Up to date docs -->
    <!-- <div id="unique-benefits">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_unique_benefits_section") }}</span>
        </div>
        <div class="highlights-container pins two-cols">
          <article v-for="benefit in uniqueBenefits" :key="benefit.title">
            <div class="article-container">
              <div class="article-icon-container">
                <i class="fad" :class="benefit.icon"></i>
              </div>
              <h4>{{ $t(benefit.title) }}</h4>
              <p>{{ $t(benefit.content) }}</p>
            </div>
          </article>
        </div>
      </section>
    </div> -->
    <!-- <section class="claim-wrapper" id="countries">
      <div class="claim-container left">
        <div class="claim-info-wrapper">
          <div class="claim-info">
            <h3 class="title">
              {{ $t("business_highlights_countries_title") }}
            </h3>
            <p>
              {{ $t("business_highlights_countries_content") }}
            </p>
            <demo-buttons />
          </div>
        </div>
        <div class="claim-side-img">
          <img
            width="400"
            height="400"
            src="@/assets/img/illustrations/hand-globe.svg"
            :alt="$t('seo_8')"
          />
        </div>
      </div>
    </section>
    <div class="fw-container--light">
      <section class="claim-container">
        <div class="section-headers">
          <span class="tag">{{ $t("business_usecases_section") }}</span>
          <h2>{{ $t("customization_guide_title") }}</h2>
          <p>{{ $t("customization_guide_subtitle") }}</p>
          <p>{{ $t("customization_guide_description") }}</p>
        </div>
        <div
          class="
            section-information-wrapper
            customize-verification-flow-wrapper
          "
        >
          <div class="customize-verification-flow-wrapper__options">
            <color-picker-slider @onChange="updateColor($event)" />
            <div class="tabs-wrapper-bussiness vertical">
              <h5 class="typography-heading">
                {{ $t("customization_guide_font") }}
              </h5>
              <v-tab
                activeTabName="default"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
              >
                <p>Default</p>
              </v-tab>
              <v-tab
                activeTabName="roboto-slab"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
                class="roboto"
              >
                <p>Roboto</p>
              </v-tab>
              <v-tab
                activeTabName="comfortaa"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
                class="comfortaa"
              >
                <p>Comfortaa</p>
              </v-tab>
              <v-tab
                activeTabName="your-font"
                @onActiveTabChange="activeTabName = $event"
                :isSelected="activeTabName"
                class="your-font"
              >
                <p>Your font</p>
              </v-tab>
            </div>
          </div>
          <div
            v-show="activeTabName === 'default'"
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
            v-show="activeTabName === 'roboto'"
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
            v-show="activeTabName === 'comfortaa'"
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
      </section>
    </div> -->
  </div>
</template>

<script>
import gsap from "gsap";
import VTab from "@/components/VTab.vue";
import Card from "@/components/Card.vue";
import DocumentSelect from "@/components/DocumentSelect.vue";
import ColorPickerSlider from "@/components/ColorPickerSlider.vue";

export default {
  components: { VTab, DocumentSelect, ColorPickerSlider, Card },
  data() {
    return {
      email: "hello@getsilt.com",
      differences: [
        {
          title: "business_differences_oneRegister_title",
          content: "business_differences_oneRegister_content",
          header: "business_friction_oneregister_header",
          headerDescription: "business_friction_oneregister_headerDescription",
          img: require("assets/img/illustrations/drinks-user.svg"),
        },
        {
          title: "business_differences_technology_title",
          content: "business_differences_technology_content",
          header: "business_friction_trust_header",
          headerDescription: "business_friction_trust_headerDescription",
          img: require("assets/img/illustrations/bulbrocket.svg"),
        },
        {
          title: "business_differences_noManagement_title",
          content: "business_differences_noManagement_content",
          header: "business_friction_fast_header",
          headerDescription: "business_friction_fast_headerDescription",
          img: require("assets/img/illustrations/meditation.svg"),
        },
      ],
      uniqueBenefits: [
        {
          icon: "fa-calendar-exclamation fa-3x",
          title: "business_benefits_updatedDocs_title",
          content: "business_benefits_updatedDocs_content",
        },
        {
          icon: "fa-badge-sheriff fa-3x",
          title: "business_benefits_list_title",
          content: "business_benefits_list_content",
        },
      ],
      techfeatures: [
        {
          icon: "fa-head-side scan-icon",
          title: "business_highlights_faceRecognition_title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
        },
        {
          icon: "fa-heartbeat",
          title: "business_highlights_liveness_title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
        },
        {
          icon: "fa-id-card scan-icon",
          title: "business_highlights_docscan_title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
        },
        {
          icon: "fa-badge-check",
          title: "business_highlights_authenticity_title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
        },
        {
          icon: "fa-user-check",
          title: "business_highlights_biometric_title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis est non sunt expedita tenetur voluptatibus iste. Fuga itaque quae veniam numquam voluptatum at. Officia fugiat quo accusamus praesentium tenetur.",
        },
      ],
      solutionTab: "digitalID",
      activeTabName: "default",
      color: "#2963ff",
      backgroundColor: "#2963ff",
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    getEmail() {
      return this.email;
    },
    updateColor(event) {
      this.color = `hsl(${event.h}, ${event.s}, ${event.l})`;
      this.backgroundColor = `hsla(${event.h}, ${event.s}, ${event.l})`;
    },
    startFirstAnimationScene: (_this) => {
      const sections = ["#unique-benefits"];
      let tm = {};
      for (let section of sections) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        });
        tl.from(section, {
          duration: 1,
          scale: 1,
          y: 100,
          opacity: 0,
        });
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#features .features-container",
            start: "top 80%",
            scrub: false,
            markers: false,
          },
        })
        .from("#features .features-item", {
          duration: 0.2,
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
  margin-bottom: $spacing-md
  text-align: center

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

.cards-carroussel
  .claim-side-img .diagram
    padding: 0
  .claim-container .claim-side-img > img
    min-height: 200px
    max-height: 600px
    height: 100%
    width: auto

.roboto
  font-family: "Roboto"
.comfortaa
  font-family: "Comfortaa", sans-serif

.your-font
  pointer-events: none
  color: $color-grey-darken-1

.tabs-wrapper--carousel
  margin-bottom: $spacing-md
  .tab.active
    background: transparent !important
</style>
