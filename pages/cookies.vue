<template>
  <div>
    <section>
      <div v-html="$t('legal_cookies_generalInfo')" />
      <a
        href="#"
        @click.prevent.stop="cancelConsent()"
        v-html="$t('legal_cookies_changeConsent')"
      />
      <div v-html="$t('legal_cookies_stats')" />
      <div v-html="$t('legal_cookies_otherInfo')" />
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    cancelConsent() {
      this.$consentCookies.rebokeConsent();
      return false;
    },
  },
};
</script>
<style scoped lang="sass">
section
    max-width: 900px
</style>
