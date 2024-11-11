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
      <Card class="card--w-sm">
        <div class="article-container" slot="body">
          <h2 class="color_primary_text"><b>99%</b></h2>
          <p>{{ $t("cdp_solution_body_claim") }}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
export default {
  components: { Card },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
</style>
