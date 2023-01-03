<template>
  <!-- Unique advantage  -->
  <div>
    <section class="claim-wrapper" id="differences">
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
    </section>
    <!-- Silt's Fraud List & Up to date docs -->
    <div class="fw-container--light" id="unique-benefits">
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
    </div>
    <section class="claim-wrapper" id="countries">
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
  </div>
</template>

<script>
import gsap from "gsap";
export default {
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
    };
  },
  mounted() {
    this.startFirstAnimationScene(this);
  },
  methods: {
    getEmail() {
      return this.email;
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
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
