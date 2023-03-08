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
    <div class="claim-info">
      <h1 class="title" v-html="$t('business_hero_aml_title')" />
      <h4 class="subtitle" v-html="$t('business_hero_aml_subtitle')" />
      <demo-buttons />
    </div>
    <div
      v-if="$root.$i18n.locale === 'es'"
      class="claim-side-img"
    >
      <img
        src="@/assets/img/illustrations/aml_flow_es.svg"
        :alt="$t('seo_document_scan')"
        width="300"
      />
    </div>
    <div v-else class="claim-side-img">
      <img
        src="@/assets/img/illustrations/aml_flow_en.svg"
        :alt="$t('seo_document_scan')"
        width="300"
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