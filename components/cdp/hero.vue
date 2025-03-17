<template>
  <section class="claim-container">
    <div class="bg-shadow__wrapper">
      <div class="bg-shadow__container">
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_kyc')"
          width="700"
          height="500"
        />
        <img
          class="bg-shadow"
          src="@/assets/img/illustrations/shadow.svg"
          :alt="$t('seo_kyc')"
          width="700"
          height="500"
        />
      </div>
    </div>
    <div class="hero-wrapper">
      <div class="hero-header_wrapper">
        <h1 class="title color_primary_text" v-html="$t('cpdpage_title_h1')" />
        <h4 class="subtitle" v-html="$t('cdp_claim2')" />
        <demo-buttons />
      </div>
      <div class="claim-side-img">
        <div class="screenshots-container">
          <img
            src="@/assets/img/illustrations/cdp_flow_diagram.svg"
            :alt="$t('seo_document_scan')"
            width="100%"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DemoButtons from "@/components/DemoButtons.vue";
export default {
  components: { DemoButtons },
  data() {
    return {
      email: "hello@getsilt.com",
    };
  },
  methods: {
    getEmail() {
      return this.email;
    },
  },
};
</script>
<style lang="sass" scoped>
.ubo_diagram_screenshot
  border-radius: 20px
  max-width: 450px
  @media (max-width: 767px)
    max-width: 300px
</style>