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
      <h1 class="title color_blue_text" v-html="$t('kyb_claim1')" />
      <h4 class="subtitle" v-html="$t('kyb_claim2')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img">
      <div class="dark-illustration screenshots-container">
        <template v-if="$root.$i18n.locale === 'es'">
          <img
            class="ubo_diagram_screenshot screenshot"
            src="@/assets/img/screenshots/screenshot_ubo_diagram.png"
            :alt="$t('seo_document_scan')"
          />
        </template>
        <template v-else>
          <img
            class="ubo_diagram_screenshot screenshot"
            src="@/assets/img/screenshots/screenshot_ubo_diagram.png"
            :alt="$t('seo_document_scan')"
          />
        </template>
      </div>
      <div class="light-illustration screenshots-container">
        <template v-if="$root.$i18n.locale === 'es'">
          <img
            class="ubo_diagram_screenshot screenshot"
            src="@/assets/img/screenshots/screenshot_ubo_diagram.png"
            :alt="$t('seo_document_scan')"
          />
        </template>
        <template v-else>
          <img
            class="ubo_diagram_screenshot screenshot"
            src="@/assets/img/screenshots/screenshot_ubo_diagram.png"
            :alt="$t('seo_document_scan')"
          />
        </template>
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
  transform: rotateY(5deg)
  @media (max-width: 767px)
    max-width: 300px
</style>