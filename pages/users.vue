<template>
  <div>
    <!-- CLAIMS -->
    <section class="claim-container">
      <div class="claim-info">
        <h1 class="title" v-html="$t('personal_claim1')"></h1>
        <h4 class="subtitle" v-html="$t('personal_claim2')">
          {{ $t("personal_claim2") }}
        </h4>
      </div>
      <div class="claim-side-img screenshots-container">
        <img
          class=""
          src="@/assets/img/illustrations/silt-workflow-v.svg"
          :alt="$t('seo_2')"
        />
      </div>
    </section>

    <!-- PRODUCT HIGHLIGHTS -->
    <section class="highlights-wrapper" id="producthighlights">
      <div class="section-headers">
        <span class="tag">{{ $t("personal_highlights_section") }}</span>
        <h2>{{ $t("personal_highlights_title") }}</h2>
      </div>
      <div class="highlights-container">
        <article v-for="(highlight, i) in highlights" :key="highlight.title">
          <div class="article-container">
            <div class="article-img-container">
              <img :src="highlight.img" :alt="$t('seo_' + (i + 5))" />
            </div>
            <h3>{{ $t(highlight.title) }}</h3>
            <p>{{ $t(highlight.content) }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Silt For Business -->
    <div class="fw-container--light">
      <section class="">
        <div class="section-headers">
          <span class="tag">{{ $t("personal_business_section") }}</span>
          <h3>{{ $t("personal_business_redirect_title") }}</h3>
        </div>
        <div class="highlights-container">
          <h5 class="subtitle">
            {{ $t("personal_business_redirect_content") }}
          </h5>
        </div>
        <nuxt-link :to="localePath({ name: 'business' })">
          <button>{{ $t("btn_cta_business") }}</button>
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: "/digital-identity-for-users",
      es: "/identidad-digital-para-usuarios",
    },
  },
  components: {},
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: `${this.$t("personal_claim1")} | Silt Digital ID & KYC`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("personal_claim1"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("personal_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("personal_claim2"),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    };
  },
  data() {
    return {
      email: "hello@getsilt.com",
      highlights: [
        {
          title: "personal_highlights_privacy_title",
          content: "personal_highlights_privacy_content",
          img: require("assets/img/illustrations/prisoner.svg"),
        },
        {
          title: "personal_highlights_oneregister_title",
          content: "personal_highlights_oneregister_content",
          img: require("assets/img/illustrations/cloud.svg"),
        },
        {
          title: "personal_highlights_security_title",
          content: "personal_highlights_security_content",
          img: require("assets/img/illustrations/security.svg"),
        },
      ],
    };
  },
  mounted() {},
  methods: {
    getEmail() {
      return this.email;
    },
  },
};
</script>

<style lang="sass" scoped>
.fw-container--light
  section
    max-width: 1000px
    display: flex
    flex-direction: column
    align-items: center
    h3
      margin-bottom: 20px
    h5
      margin-top: 0
  .tag
    margin-top: -26px
</style>
