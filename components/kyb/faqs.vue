<template>
  <FaqsList :faqsList="kybFAQs" />
</template>

<script>
import FaqsList from "../FaqsList.vue";

export default {
  components: { FaqsList },
  data() {
    return {
      kybFAQs: [
        {
          title: "FAQ_kyb_what_is_kyb_title",
          body: "FAQ_kyb_what_is_kyb_body",
        },
        {
          title: "FAQ_kyb_difference_kyb_and_kyc_title",
          body: "FAQ_kyb_difference_kyb_and_kyc_body",
        },
        {
          title: "FAQ_kyb_regulation_title",
          body: "FAQ_kyb_regulation_body",
        },
        {
          title: "FAQ_kyb_importance_in_compliance_title",
          body: "FAQ_kyb_importance_in_compliance_body",
        },
        {
          title: "FAQ_kyb_who_needs_it_title",
          body: "FAQ_kyb_who_needs_it_body",
        },
        {
          title: "FAQ_kyb_who_is_a_UBO_title",
          body: "FAQ_kyb_who_is_a_UBO_body",
        },
        {
          title: "FAQ_kyb_automated_kyb_processes_title",
          body: "FAQ_kyb_automated_kyb_processes_body",
        },
        {
          title: "FAQ_kyb_time_saved_title",
          body: "FAQ_kyb_time_saved_body",
        },
        {
          title: "FAQ_kyb_why_silts_kyb_title",
          body: "FAQ_kyb_why_silts_kyb_body",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
