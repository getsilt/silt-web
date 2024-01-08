<template>
  <div>
    <div>
      <h3 class="dropdown--section_title">
        {{ $t("nav_features_kyc_and_kyb") }}
      </h3>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'kyb' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-university scan-icon" />
          <div>
            <h3 class="title_menu">{{ $t("nav_feature_kyb") }}</h3>
            <p class="subtitle_menu">{{ $t("product_subtitle_kyb") }}</p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'kyc' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-id-card scan-icon" />
          <div>
            <h3 class="title_menu">{{ $t("nav_feature_kyc") }}</h3>
            <p class="subtitle_menu">{{ $t("product_subtitle_kyc") }}</p>
          </div>
        </nuxt-link>
      </div>
      <div class="dropdown--section_title">{{ $t("nav_features_other") }}</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'rules' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-code-branch fa-rotate-90-custom" />
          <div>
            <h3 class="title_menu">{{ $t("nav_feature_rules") }}</h3>
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
            <h3 class="title_menu" v-html="$t('nav_feature_misconduct')" />
            <p class="subtitle_menu">
              {{ $t("product_subtitle_misconduct_list") }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'aml' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-address-book scan-icon" />
          <div>
            <h3 class="title_menu">{{ $t("nav_feature_aml") }}</h3>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_aml") }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'biocheck' })"
          @click.native="$emit('onCloseNav')"
        >
          <i class="fad fa-lg fa-head-side scan-icon" />
          <div>
            <h3 class="title_menu">{{ $t("nav_feature_biocheck") }}</h3>
            <p class="subtitle_menu">
              {{ $t("product_subtitle_biometric_check") }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="dropdown-wrap other-sections">
      <nuxt-link
        class="dropdown-wrap__content"
        :to="localePath({ name: 'pricing' })"
        @click.native="$emit('onCloseNav')"
      >
        <h3 class="title_menu">{{ $t("nav_link_pricing") }}</h3>
      </nuxt-link>
      <nuxt-link
        class="dropdown-wrap__content"
        :to="localePath({ name: 'faq' })"
        @click.native="$emit('onCloseNav')"
      >
        <h6 class="title_menu">{{ $t("FAQ_title") }}</h6>
      </nuxt-link>
      <a
        target="blank"
        class="dropdown-wrap__content"
        href="https://blog.getsilt.com"
        @click="$emit('onCloseNav')"
      >
        Blog
      </a>
      <nuxt-link
        class="dropdown-wrap__content"
        :to="localePath({ name: 'demo' })"
        @click="$emit('onCloseNav')"
      >
        <button class="small">{{ $t("btn_cta_navBar_demo") }}</button>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.title_menu
  font-size: 1.1rem
</style>
