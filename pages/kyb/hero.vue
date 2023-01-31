<template>
  <section class="claim-container">
    <div class="claim-info">
      <h1 class="title" v-html="$t('kyb_claim1')" />
      <h4 class="subtitle" v-html="$t('kyb_claim2')" />
      <demo-buttons />
    </div>
    <div class="claim-side-img screenshots-container">
      <div v-if="$root.$i18n.locale === 'es'">
        <img
          src="@/assets/img/illustrations/kyb_flow_es_light.svg"
          :alt="$t('seo_3')"
          width="300"
        />
      </div>
      <div v-else>
        <img
          src="@/assets/img/illustrations/kyb_flow_en_light.svg"
          :alt="$t('seo_3')"
          width="300"
        />
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

<style lang="sass" scoped>

.claim-container .claim-side-img.diagram
  margin: 0
  padding: 0
  & > img
    min-width: 300px
    max-width: 700px
</style>
