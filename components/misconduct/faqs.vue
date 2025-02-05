<template>
  <FaqsList :faqsList="misconductFAQs" />
</template>

<script>
import FaqsList from "../FaqsList.vue";

export default {
  components: { FaqsList },
  data() {
    return {
      misconductFAQs: [
        {
          title: "faq_misconduct_list_how_does_it_work_question",
          body: "faq_misconduct_list_how_does_it_work_answer",
        },
        {
          title: "faq_misconduct_list_data_safety_question",
          body: "faq_misconduct_list_data_safety_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
