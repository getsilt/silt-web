<template>
  <div>
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
            {{ $t("nav_feature_kyc") }}
            <p class="subtitle_menu">{{ $t("product_subtitle_kyc") }}</p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'users' })"
          @click.native="$emit('ononCloseNav')"
        >
          <i class="fad fa-lg fa-bolt scan-icon" />
          <div>
            {{ $t("nav_feature_digital_id") }}
            <p class="subtitle_menu">
              {{ $t("product_subtitile_digital_identity") }}
            </p>
          </div>
        </nuxt-link>
      </div>
      <div class="dropdown--section_title">{{ $t("nav_features_other") }}</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'biocheck' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-head-side scan-icon" />
          <div>
            {{ $t("nav_feature_biocheck") }}
            <p class="subtitle_menu">
              {{ $t("product_subtitle_biometric_check") }}
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
            {{ $t("nav_feature_misconduct") }}
            <p class="subtitle_menu">
              {{ $t("product_subtitle_misconduct_list") }}
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
            {{ $t("nav_feature_kyb") }}
            <p class="subtitle_menu">{{ $t("product_subtitle_kyb") }}</p>
          </div>
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
    <div class="dropdown-wrap other-sections">
      <nuxt-link
        class="dropdown-wrap__content"
        :to="localePath({ name: 'pricing' })"
        @click.native="onCloseNav()"
      >
        {{ $t("nav_link_pricing") }}
      </nuxt-link>
      <a
        target="blank"
        class="dropdown-wrap__content"
        href="https://blog.getsilt.com"
        @click="onCloseNav()"
      >
        Blog
      </a>
      <nuxt-link
        class="dropdown-wrap__content demo-button"
        :to="localePath({ name: 'demo' })"
        @click="onCloseNav()"
      >
        <button class="small">{{ $t("btn_cta_navBar_demo") }}</button>
      </nuxt-link>
    </div>
  </div>
</template>
