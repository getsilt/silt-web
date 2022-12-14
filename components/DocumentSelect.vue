<template>
  <div class="step__container">
    <template>
      <div class="form-grid step__footer">
        <div class="step__title">
          <h4 :style="typography">
            {{ $t("customization_screenshot_title") }}
          </h4>
          <span class="step__subtitle">
            {{ $t("customization_screenshot_subtitle") }}
          </span>
        </div>
        <div>
          <div class="instructions-wrapper">
            <template>
              <h6
                :style="`${color}; ${typography}`"
                class="instructions-wrapper__title"
              >
                {{ $t("customization_screenshot_document_type") }}
              </h6>
            </template>
          </div>
          <ul class="v-list">
            <li class="v-list__item">
              <div class="v-list__item__icon">
                <i class="fad fa-id-card large" :style="color" />
              </div>
              <div class="v-list__item__content">
                {{ $t("customization_screenshot_ID") }}
              </div>
            </li>
            <li class="v-list__item">
              <div class="v-list__item__icon">
                <i class="fad fa-passport large" :style="color" />
              </div>
              <div class="v-list__item__content">
                {{ $t("customization_screenshot_passport") }}
              </div>
            </li>
            <li class="v-list__item">
              <div class="v-list__item__icon">
                <i class="fad fa-id-card large" :style="color" />
              </div>
              <div class="v-list__item__content">
                {{ $t("customization_screenshot_DL") }}
              </div>
            </li>
          </ul>
        </div>

        <v-button large class="full-width disabled" :style="buttonStyle">
          {{ $t("customization_screenshot_finish_verification") }}
        </v-button>
      </div>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import VButton from "./VButton.vue";

export default Vue.extend({
  name: "document-select",
  components: { VButton },
  props: {
    color: { required: true },
    typography: { require: true },
    buttonStyle: { required: true },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.disabled
  pointer-events: none

.step__container
  max-width: 400px
  box-shadow: $box-shadow-1
  border-radius: $radius-lg
  padding: $spacing-lg
  display: flex
  flex-direction: column
  flex: 1 1 auto
  .step__title
    color: $color-grey
    padding-bottom: 20px

    h4, h5, h6
      margin-bottom: 1rem

.instructions-wrapper
  .instructions-wrapper__title
    margin-bottom: $spacing-lg
    margin-top: $spacing-md

  .step__footer
    margin-top: auto
    flex: 0 0 auto
    display: flex
    flex-direction: column

.form-grid
  display: flex
  flex-direction: column

  & > *:not(:last-child)
    margin-bottom: 10px

.v-list
  list-style: none
  padding: 0
  margin: 0 -20px
  display: flex
  flex-direction: column
  flex: 1 1 auto

  .v-list__item
    display: flex
    padding: 0 20px

    &:active, &:hover
      .v-list__item__arrow
        transition: 0.1s ease-in-out
        transform: translateX(5px)

    .v-list__item__icon
      flex: 0 0 50px
      padding: $spacing-sm $spacing-md $spacing-sm 0

      &.large
        flex: 0 0 60px

      &.small
        flex: 0 0 20px

    .v-list__item__content, .v-list__item__arrow
      flex: 1 1 auto
      display: flex
      align-items: center

    .v-list__item__arrow
      display: none
      flex: 0 0 auto
      color: var(--primary-color)
      transition: 0.1s ease-in-out
</style>
