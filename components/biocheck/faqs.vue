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
          title: "faq_biometric_recheck_what_is_it_question",
          body: "faq_biometric_recheck_what_is_it_answer",
        },
        {
          title: "faq_biometric_recheck_importance_question",
          body: "faq_biometric_recheck_importance_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
