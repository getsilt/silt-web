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
      <h1 class="title" v-html="$t('business_hero_rules_title')" />
      <h4 class="subtitle" v-html="$t('business_hero_rules_subtitle')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img">
      <img
        src="@/assets/img/illustrations/rules_flow.svg"
        :alt="$t('seo_document_scan')"
        class="rules-hero-img"
      />
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

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.rules-hero-img
  width: 600px

@media (max-width: 768px)
  .rules-hero-img
    margin-top: $spacing-lg
    width: 370px
</style>
