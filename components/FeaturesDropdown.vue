<template>
  <div class="feature-dropdown">
    <div>
      <div class="dropdown--section_title">{{ $t("nav_features_kyc") }}</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'business' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-id-card scan-icon" />
          {{ $t("nav_feature_kyc") }}
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'users' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-bolt scan-icon" />
          {{ $t("nav_feature_digital_id") }}
        </nuxt-link>
      </div>
    </div>
    <div>
      <div class="dropdown--section_title">{{ $t("nav_features_other") }}</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'biocheck' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-head-side scan-icon" />
          {{ $t("nav_feature_biocheck") }}
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'kyb' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-university scan-icon" />
          {{ $t("nav_feature_kyb") }}
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1 deactivated"
          :to="localePath({ name: 'business' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-house scan-icon" />
          {{ $t("nav_feature_por") }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>