<template>
  <FaqsList :faqsList="cdpFAQs" />
</template>

<script>
import FaqsList from "../FaqsList.vue";

export default {
  components: { FaqsList },
  data() {
    return {
      cdpFAQs: [
        {
          title: "faq_cdp_what_is_cdp_question",
          body: "faq_cdp_what_is_cdp_answer",
        },
        {
          title: "faq_cdp_process_document_question",
          body: "faq_cdp_process_document_answer",
        },
        {
          title: "faq_cdp_access_documents_question",
          body: "faq_cdp_access_documents_answer",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
