<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('kyb_claim1')">{{ $t("kyb_claim1") }}</h1>
        <h4 class="subtitle" v-html="$t('kyb_claim2')">
          {{ $t("kyb_claim2") }}
        </h4>
        <demo-buttons />
      </div>
      <div class="claim-side-img screenshots-container">
        <div v-if="$root.$i18n.locale === 'es'">
          <img
            class=""
            src="@/assets/img/illustrations/kyb_flow_es_light.svg"
            :alt="$t('seo_3')"
            width="300"
          />
        </div>
        <div v-else>
          <img
            class=""
            src="@/assets/img/illustrations/kyb_flow_en_light.svg"
            :alt="$t('seo_3')"
            width="300"
          />
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <div class="fw-container--dark" id="problem">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("kyb_problem_section") }}</span>
          <h4>{{ $t("kyb_problem_title") }}</h4>
        </div>
      </section>
    </div>
    <!-- KYB Benefits -->
    <div class="fw-container--light" id="benefits">
      <section class="highlights-wrapper">
        <div class="section-headers">
          <span class="tag">{{ $t("business_benefits_section") }}</span>
        </div>
        <div class="highlights-container pins two-cols">
          <article v-for="benefit in benefits" :key="benefit.title">
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
    <section class="claim-wrapper" id="solution">
      <div class="claim-container left">
        <div class="claim-side-img diagram" id="diagram">
          <template v-if="$root.$i18n.locale === 'es'">
            <img
              class=""
              src="@/assets/img/illustrations/kyb_flow_es_light.svg"
              :alt="$t('seo_3')"
              width="300"
            />
          </template>
          <template v-else>
            <img
              class=""
              src="@/assets/img/illustrations/kyb_flow_en_light.svg"
              :alt="$t('seo_3')"
              width="300"
            />
          </template>
        </div>
        <div class="claim-info-wrapper differences">
          <div class="claim-info">
            <h3 class="title">
              {{ $t("kyb_solution_title") }}
            </h3>
            <p>
              {{ $t("kyb_solution_content1") }}
            </p>
            <p>
              {{ $t("kyb_solution_content2") }}
            </p>
            <p>
              <b>{{ $t("kyb_solution_compliant") }}</b>
            </p>
            <demo-buttons />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DemoButtons from "../components/DemoButtons.vue";
import gsap from "gsap";
export default {
  components: { DemoButtons },
  nuxtI18n: {
    paths: {
      en: "/kyb-company-and-freelancer-verification",
      es: "/kyb-verificacion-de-empresas-y-autonomos",
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("nav_feature_kyb"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("kyb_claim2"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("nav_feature_kyb"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("kyb_claim2"),
        },
      ],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      benefits: [
        {
          icon: "fa-lightbulb-dollar fa-3x",
          title: "kyb_benefit_scale_title",
          content: "kyb_benefit_scale_content",
        },
        {
          icon: "fa-sack-dollar fa-3x",
          title: "kyb_benefit_income_title",
          content: "kyb_benefit_income_content",
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
      const sections = ["#problem", "#solution", "#benefits"];
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
@import "@/assets/sass/vars.sass"
.scan-icon
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25%2c 50%25' stroke-dashoffset='14' stroke-linecap='butt'/%3e%3c/svg%3e")
  padding: 10px
  font-size: 25px

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 250px
    max-width: 300px

.screenshot
  min-width: 120px
  max-width: 240px
  box-shadow: $box-shadow-1
.claim-info-wrapper.differences
  display: flex
  align-items: center
</style>
