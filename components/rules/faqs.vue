<template>
  <FaqsList :faqsList="rulesFAQs" />
</template>

<script>
import FaqsList from "../FaqsList.vue";

export default {
  components: { FaqsList },
  data() {
    return {
      rulesFAQs: [
        {
          title: "faq_rules_implement_new_rule_question",
          body: "faq_rules_implement_new_rule_answer",
        },
        {
          title: "faq_rules_number_of_rules_question",
          body: "faq_rules_number_of_rules_answer",
        },
        {
          title: "faq_rules_deactivate_rule_question",
          body: "faq_rules_deactivate_rule_answer",
        },
        {
          title: "faq_rules_affect_entire_company_question",
          body: "faq_rules_affect_entire_company_answer",
        },
        {
          title: "faq_rules_user_flagged_question",
          body: "faq_rules_user_flagged_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
