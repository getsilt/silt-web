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
      <h1 class="title">
        {{ $t("business_benefits_list_title") }}
      </h1>
      <h4 class="subtitle">
        {{ $t("business_benefits_list_content") }}
      </h4>

      <demo-buttons />
    </div>
    <div class="claim-side-img diagram">
      <img
        src="@/assets/img/illustrations/watch_list_diagram_flow.svg"
        :alt="$t('seo_document_scan')"
        width="250"
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
