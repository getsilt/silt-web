<template>
  <div class="feature-dropdown">
    <div>
      <div class="dropdown--section_title">{{ $t("nav_features_kyc") }}</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'kyc' })"
          @click.native="closeNav()"
        >
          <i class="fad fa-lg fa-id-card scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_kyc") }}</h6>
            <p class="subtitle_menu">{{ $t("product_subtitle_kyc") }}</p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'rules' })"
          @click.native="closeNav()"
        >
          <i class="fad fa-lg fa-code-branch fa-rotate-90-custom" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_rules") }}</h6>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_rules") }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'misconduct' })"
          @click.native="closeNav()"
        >
          <i class="fad fa-lg fa-badge-sheriff scan-icon" />
          <div>
            <h6 class="title_menu" v-html="$t('nav_feature_misconduct')" />
            <p class="subtitle_menu">
              {{ $t("product_subtitle_misconduct_list") }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'aml' })"
          @click.native="closeNav()"
        >
          <i class="fad fa-lg fa-address-book scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_aml") }}</h6>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_aml") }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div>
      <div class="dropdown--section_title">{{ $t("nav_features_other") }}</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'kyb' })"
          @click.native="closeNav()"
        >
          <i class="fad fa-lg fa-university scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_kyb") }}</h6>
            <p class="subtitle_menu">{{ $t("product_subtitle_kyb") }}</p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'biocheck' })"
          @click.native="closeNav()"
        >
          <i class="fad fa-lg fa-head-side scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_biocheck") }}</h6>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_biometric_check") }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    closeNav() {
      window.dispatchEvent(new Event("onCloseNav"));
    },
  },
});
</script>
