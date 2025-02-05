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
          title: "faq_pricing_free_trial_question",
          body: "faq_pricing_free_trial_answer",
        },
        {
          title: "faq_pricing_incomplete_verification_question",
          body: "faq_pricing_incomplete_verification_answer",
        },
        {
          title: "faq_pricing_setup_charges_question",
          body: "faq_pricing_setup_charges_answer",
        },
        {
          title: "faq_pricing_commitment_question",
          body: "faq_pricing_commitment_answer",
        },
        {
          title: "faq_pricing_unitary_cost_question",
          body: "faq_pricing_unitary_cost_answer",
        },
        {
          title: "faq_pricing_difference_kyc_kyb_cdp_question",
          body: "faq_pricing_difference_kyc_kyb_cdp_answer",
        },
        {
          title: "faq_pricing_steps_to_start_question",
          body: "faq_pricing_steps_to_start_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
