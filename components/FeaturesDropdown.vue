<template>
  <div class="feature-dropdown">
      <div class="dropdown--section_title">KYC</div>
      <div class="dropdown-wrap">
          <nuxt-link class="dropdown-wrap__content type1"
            :to="localePath({ name: 'business' })"
            @click.native="closeNav()"
          >
            <slideshow-svg />
            {{ $t("nav_feature_digital_id") }}
          </nuxt-link>
          <nuxt-link class="dropdown-wrap__content type1"
            :to="localePath({ name: 'business' })"
            @click.native="closeNav()"
          >
            <slideshow-svg />
            {{ $t("nav_feature_kyc") }}
          </nuxt-link>
          
      </div>
      <div class="dropdown--section_title">Other Solutions</div>
      <div class="dropdown-wrap">
        <nuxt-link class="dropdown-wrap__content type1"
            :to="localePath({ name: 'business' })"
            @click.native="closeNav()"
          >
            <slideshow-svg />
            {{ $t("nav_feature_biocheck") }}
          </nuxt-link>
          <nuxt-link class="dropdown-wrap__content type1"
            :to="localePath({ name: 'business' })"
            @click.native="closeNav()"
          >
            <slideshow-svg />
            {{ $t("nav_feature_kyb") }}
          </nuxt-link>
          <nuxt-link class="dropdown-wrap__content type1"
            :to="localePath({ name: 'business' })"
            @click.native="closeNav()"
          >
            <slideshow-svg />
            {{ $t("nav_feature_por") }}
          </nuxt-link>
      </div>
    </div>
</template>