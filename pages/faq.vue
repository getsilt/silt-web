<template>
  <section>
    <div class="section-headers">
      <h1>{{ $t("FAQ_title_2") }}</h1>
    </div>
    <div class="faqs-list-wrapper">
      <FaqsList :faqsList="generalFAQs" :animated="false" />
      <FaqsList
        :faqsList="eIDFAQs"
        headerCopy="FAQ_subtitle_eID_and_integration"
        :animated="false"
      />
      <FaqsList
        :faqsList="integrationFAQs"
        headerCopy="FAQ_subtitle_integration"
        :animated="false"
      />
    </div>
  </section>
</template>

<script>
import FaqsList from "../components/FaqsList.vue";

export default {
  nuxtI18n: {
    paths: {
      en: "/faq",
      es: "/faq",
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead();
    return {
      title: this.$t("FAQ_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("nav_feature_aml"),
        },
      ],
    };
  },
  components: { FaqsList },
  data() {
    return {
      email: "hello@getsilt.com",
      generalFAQs: [
        {
          title: "FAQ_what_is _identity_verification_title",
          body: "FAQ_what_is _identity_verification_body",
        },
        {
          title: "FAQ_sectors_identity_verification_title",
          body: "FAQ_sectors_identity_verification_body",
        },
        {
          title: "FAQ_countries_and_languages_supported_title",
          body: "FAQ_countries_and_languages_supported_body",
        },
        {
          title: "FAQ_contact_Silt_title",
          body: "FAQ_contact_Silt_body",
        },
      ],
      eIDFAQs: [
        {
          title: "FAQ_difference_KYC_KYB_title",
          body: "FAQ_difference_KYC_KYB_body",
        },
        {
          title: "FAQ_biocheck_secure_title",
          body: "FAQ_biocheck_secure_body",
        },
        {
          title: "FAQ_time_identity_verification_title",
          body: "FAQ_time_identity_verification_body",
        },
        {
          title: "FAQ_how_identity_verification_technology_title",
          body: "FAQ_how_identity_verification_technology_body",
        },
        {
          title: "FAQ_regulations_compliance_title",
          body: "FAQ_regulations_compliance_body",
        },
        {
          title: "FAQ_data_storage_title",
          body: "FAQ_data_storage_body",
        },
        {
          title: "FAQ_user_needs automatic_verification_title",
          body: "FAQ_user_needs automatic_verification_body",
        },
        {
          title: "FAQ_contact_Silt_title",
          body: "FAQ_contact_Silt_body",
        },
      ],
      integrationFAQs: [
        {
          title: "FAQ_integration_with_Silt_title",
          body: "FAQ_integration_with_Silt_body",
        },
        {
          title: "FAQ_time_integration_with_Silt_title",
          body: "FAQ_time_integration_with_Silt_body",
        },
        {
          title: "FAQ_link_clients_CRM_title",
          body: "FAQ_link_clients_CRM_body",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.section-headers
  margin-bottom: 0

.faqs-list-wrapper
  display: flex
  justify-content: center
  flex-direction: column
  section
    margin: 0
</style>
