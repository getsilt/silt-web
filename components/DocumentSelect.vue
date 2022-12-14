<template>
  <div class="step__container">
    <template>
      <div class="v-steps__progress">
        <div class="v-steps__progress-bar-rail" :style="background"></div>
        <div class="v-steps__progress-bar" :style="background"></div>
      </div>
      <div class="form-grid step__footer">
        <div class="step__title">
          <h4 :style="typography">
            {{ $t("customization_screenshot_title") }}
          </h4>
          <span class="step__subtitle">
            {{ $t("customization_screenshot_subtitle") }}
          </span>
        </div>
        <div class="instructions">
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
              <div class="v-list__item__icon-left">
                <i class="fad fa-id-card large" :style="color" />
              </div>
              <div class="v-list__item__content">
                {{ $t("customization_screenshot_ID") }}
              </div>
              <div class="v-list__item__icon-right">
                <i class="fad fa-chevron-right large" :style="color" />
              </div>
            </li>
            <li class="v-list__item">
              <div class="v-list__item__icon-left">
                <i class="fad fa-passport large" :style="color" />
              </div>
              <div class="v-list__item__content">
                {{ $t("customization_screenshot_passport") }}
              </div>
              <div class="v-list__item__icon-right">
                <i class="fad fa-chevron-right large" :style="color" />
              </div>
            </li>
            <li class="v-list__item">
              <div class="v-list__item__icon-left">
                <i class="fad fa-id-card large" :style="color" />
              </div>
              <div class="v-list__item__content">
                {{ $t("customization_screenshot_DL") }}
              </div>
              <div class="v-list__item__icon-right">
                <i class="fad fa-chevron-right large" :style="color" />
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
    buttonStyle: {
      required: true,
    },
    background: { required: true },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"

.disabled
  pointer-events: none
  margin-top: $spacing-sm

.step__container
  max-width: 350px
  order: 2
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

  .v-steps__progress
    width: 30%
    height: 5px
    position: relative
    margin: auto

    .v-steps__progress-bar-rail
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      opacity: 0.2
      border-radius: 5px

    .v-steps__progress-bar
      float: left
      width: 40%
      height: 100%
      border-radius: 5px
      box-shadow: 0px 0px 1px 0px

.instructions
  border-radius: $radius-lg
  padding: 0 $spacing-md
  background-color: rgba($color-grey-lighten-2, 0.2)
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
  display: flex
  flex-direction: column
  flex: 1 1 auto

  .v-list__item
    display: flex

    &:active, &:hover
      .v-list__item__arrow
        transition: 0.1s ease-in-out
        transform: translateX(5px)

    .v-list__item__icon-left
      flex: start
      padding: $spacing-sm $spacing-md $spacing-sm 0

      &.large
        flex: 0 0 60px

      &.small
        flex: 0 0 20px
    .v-list__item__icon-right
      flex: end
      padding: $spacing-sm 0 $spacing-sm $spacing-md

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
