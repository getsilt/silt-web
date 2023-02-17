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
      <h1 class="title" v-html="$t('kyb_claim1')" />
      <h4 class="subtitle" v-html="$t('kyb_claim2')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img">
      <div class="dark-illustration">
        <template v-if="$root.$i18n.locale === 'es'">
          <img
            src="@/assets/img/illustrations/kyb_flow_es.svg"
            :alt="$t('seo_document_scan')"
            width="300"
          />
        </template>
        <template v-else>
          <img
            src="@/assets/img/illustrations/kyb_flow_en.svg"
            :alt="$t('seo_document_scan')"
            width="300"
          />
        </template>
      </div>
      <div class="light-illustration">
        <template v-if="$root.$i18n.locale === 'es'">
          <img
            src="@/assets/img/illustrations/kyb_flow_es_light.svg"
            :alt="$t('seo_document_scan')"
            width="300"
          />
        </template>
        <template v-else>
          <img
            src="@/assets/img/illustrations/kyb_flow_en_light.svg"
            :alt="$t('seo_document_scan')"
            width="300"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import DemoButtons from "../../components/DemoButtons.vue";
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
