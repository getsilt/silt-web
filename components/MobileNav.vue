<template>
  <div>
    <div>
      <div class="dropdown--section_title">KYC</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'users' })"
          @click.native="$emit('closeNav')"
        >
          <i class="fad fa-lg fa-bolt scan-icon" />
          {{ $t("nav_feature_digital_id") }}
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'business' })"
          @click.native="$emit('closeNav')"
        >
          <i class="fad fa-lg fa-id-card scan-icon" />
          {{ $t("nav_feature_kyc") }}
        </nuxt-link>
      </div>
      <div class="dropdown--section_title">Other Solutions</div>
      <div class="dropdown-wrap">
        <nuxt-link
          class="dropdown-wrap__content type1"
          :to="localePath({ name: 'biocheck' })"
          @click.native="$emit('closeNav')"
        >
          <i class="fad fa-lg fa-head-side scan-icon" />
          {{ $t("nav_feature_biocheck") }}
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1 deactivated"
          :to="localePath({ name: 'business' })"
          @click.native="$emit('closeNav')"
        >
          <i class="fad fa-lg fa-university scan-icon" />
          {{ $t("nav_feature_kyb") }}
        </nuxt-link>
        <nuxt-link
          class="dropdown-wrap__content type1 deactivated"
          :to="localePath({ name: 'business' })"
          @click.native="$emit('closeNav')"
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
        @click.native="closeNav()"
      >
        {{ $t("nav_link_pricing") }}
      </nuxt-link>
      <nuxt-link
        class="dropdown-wrap__content demo-button"
        :to="localePath({ name: 'demo' })"
        @click.native="closeNav()"
      >
        <button class="small">{{ $t("btn_cta_navBar_demo") }}</button>
      </nuxt-link>
    </div>
  </div>
</template>