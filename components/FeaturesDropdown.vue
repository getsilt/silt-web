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
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_kyc") }}</h6>
            <p class="subtitle_menu">{{ $t("product_subtitle_kyc") }}</p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'rules' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-pencil-ruler scan-icon" />
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
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-badge-sheriff scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_misconduct") }}</h6>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_misconduct_list") }}
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
          :to="localePath({ name: 'biocheck' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-head-side scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_biocheck") }}</h6>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_biometric_check") }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'kyb' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-university scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_kyb") }}</h6>
            <p class="subtitle_menu">{{ $t("product_subtitle_kyb") }}</p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'aml' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-address-book scan-icon" />
          <div>
            <h6 class="title_menu">{{ $t("nav_feature_aml") }}</h6>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_aml") }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1 deactivated"
          :to="localePath({ name: 'business' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-house scan-icon" />
          <div>
            <h6 class="title_menu">
              {{ $t("nav_feature_por") }} ({{ $t("global_contactUs") }})
            </h6>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
