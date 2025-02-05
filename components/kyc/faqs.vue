<template>
  <FaqsList :faqsList="generalFAQs" />
</template>

<script>
import FaqsList from "../FaqsList.vue";

export default {
  components: { FaqsList },
  data() {
    return {
      generalFAQs: [
        {
          title: "faq_kyc_what_is_kyc_question",
          body: "faq_kyc_what_is_kyc_answer",
        },
        {
          title: "faq_kyc_complex_needs_question",
          body: "faq_kyc_complex_needs_answer",
        },
        {
          title: "faq_kyc_access_user_data_question",
          body: "faq_kyc_access_user_data_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
