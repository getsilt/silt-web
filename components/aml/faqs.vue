<template>
  <FaqsList :faqsList="amlFAQs" />
</template>

<script>
import FaqsList from "../FaqsList.vue";

export default {
  components: { FaqsList },
  data() {
    return {
      amlFAQs: [
        {
          title: "faq_aml_check_recurrent_question",
          body: "faq_aml_check_recurrent_answer",
        },
        {
          title: "faq_aml_check_organizations_question",
          body: "faq_aml_check_organizations_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
