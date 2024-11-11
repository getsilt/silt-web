<template>
  <div class="fw-container--dark">
    <div class="section-headers">
      <span class="tag">{{ $t("business_solution_section") }}</span>
      <h2>
        <span class="text-gradient-1 title-bold">
          {{ $t("cdp_solution_title") }}
        </span>
      </h2>
      <p class="subtitle" v-html="$t('cdp_solution_subtitle')" />
      <Card class="card">
        <div class="article-container solution_wrapper" slot="body">
          <div>
            <h2 class="color_accent_text"><b>99%</b></h2>
            <h3 class="color_accent_text">
              <b>{{ $t("global_accuracy") }}</b>
            </h3>
          </div>
          <span>
            {{ $t("cdp_solution_accuracy_body") }}
          </span>
        </div>
      </Card>
      <div class="solution_wrapper">
        <h4 class="solution_wrapper__book-a-demo">
          {{ $t("book_a_demo_cdp") }}
        </h4>
        <DemoButtons :dark="true" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
import DemoButtons from "../DemoButtons.vue";
export default {
  components: { Card, DemoButtons },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

h2,h3
  margin-bottom: 0

.card
  margin-bottom: $spacing-xlg

.solution_wrapper
  display: flex
  flex-direction: row
  gap: $spacing-xlg
  text-align: left
  justify-content: space-between
  width: 100%
  &__book-a-demo
    max-width: 400px
</style>
