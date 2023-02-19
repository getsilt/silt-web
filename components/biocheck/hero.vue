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
    <!-- CLAIMS -->
    <div class="claim-info">
      <h1 class="title" v-html="$t('biocheck_claim1')" />
      <h4 class="subtitle" v-html="$t('biocheck_claim2')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img screenshots-container">
      <img
        class="screenshot take-picture"
        src="@/assets/img/screenshots/screenshot_selfie_es.jpg"
        :alt="$t('seo_document_scan')"
      />
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
