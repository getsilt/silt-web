<template>
  <section>
    <div id="header-wrapper" class="header-wrapper">
      <consent-cookies />
      <vsm-menu id="main-menu" ref="menu" :menu="menu">
        <template #default="data">
          <component :is="data.item.content" class="content" />
          <component
            :is="data.item.secondaryContent"
            class="content--secondary"
          />
        </template>
        <li slot="before-nav" class="logo vsm-section vsm-mob-full">
          <nuxt-link :to="localePath({ name: 'business' })">
            <img
              src="@/assets/img/logo/silt_logo_white.svg"
              :alt="$t('silt_name')"
              height="30"
              class="logo_dark"
            />
            <img
              src="@/assets/img/logo/silt_logo_black.svg"
              :alt="$t('silt_name')"
              height="30"
			  class="logo_light"
            />
          </nuxt-link>
        </li>
        <template slot="after-nav">
          <li class="vsm-section vsm-section_menu vsm-mob-hide">
            <a
              target="blank"
              href="https://blog.getsilt.com"
              @click="onCloseNav()"
              ><button class="vsm-link">Blog</button>
            </a>
          </li>
          <li class="vsm-section vsm-section_menu vsm-mob-hide vsm-link">
            <nuxt-link
              :to="localePath({ name: 'developers' })"
              @click.native="closeNav()"
            >
              Developers
            </nuxt-link>
          </li>
          <!-- TODO: Update using new copies -->
          <a href="https://dashboard.getsilt.com/welcome" rel="nofollow" target="_blank">
            <button class="demo-button small secondary icon">
              {{ $t("btn_cta_navBar_demo") }}<i class="simple-arrow"></i>
            </button>
          </a>
          <!--Display mobile menu-->
          <vsm-mob ref="menumov">
            <mobile-nav @onCloseNav="closeNav()" />
          </vsm-mob>
        </template>
      </vsm-menu>
    </div>
  </section>
</template>

<script>
import featuresDropdown from "./FeaturesDropdown.vue";
import mobileNav from "./MobileNav.vue";

export default {
  components: { featuresDropdown, mobileNav },
  data() {
    return {
      openednav: false,
      menu: [
        {
          title: this.$t("nav_link_features"),
          dropdown: "features",
          content: "featuresDropdown",
        },
        {
          title: this.$t("nav_link_pricing"),
          element: "router-link",
          attributes: {
            to: { name: "pricing" },
          },
        },
      ],
    };
  },
  mounted() {
    this.$consentCookies.show();
  },
  methods: {
    closeNav() {
      this.$refs["menumov"].closeDropdown();
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
header
	z-index: 999
section
	top: 0
	left: 0
	width: 100%
	margin: 0
	padding: 0
	z-index: 9999999999
	display: flex
	justify-content: center
	font-family: $font-body
	background: #fff
	position: fixed
	top: 0
	

.header-wrapper
	margin: 0
	padding: 0
	z-index: 100
	display: flex
	max-width: 1600px
	padding: 0
	width: 100%
	transition: 0.3s ease-in-out
	@media (min-width: 768px)
		padding: 0 40px

	.header-bar
		position: relative
		padding: 20px
		background: #fff
		display: flex
		justify-content: space-between
		align-items: center
		z-index: 90
		height: 70px
		flex: 1 1 auto
		transition: 0.3s ease-in-out
		@media (min-width: 768px)
			margin-left: -30px
			padding: 20px 40px
		&>*:not(:last-child)
			margin-right: $spacing-sm
		.logo
			font-size: 60px
			flex: 0 0 auto
			display: flex
			align-items: stretch
			max-height: 30px
			a
				height: 30px
				flex: 1 1 auto
			img
				max-width: 100%
				width: auto
				margin: 0
				height: 100%
				display: block
		.hamburger-button
			display: block
			position: relative
			height: 20px
			width: 24px
			flex: 0 0 auto
			@media (min-width: 768px)
				display: none

			span, &:after, &:before
				content: ''
				position: absolute
				display: block
				background: $color-grey
				border-radius: 3px
				height: 4px
				width: 24px
				top: 8px
				left: 0
				transition: transform ease .3s, top ease .3s .3s
				transform: rotate(0)
			&:after
				top: 16px
			&:before
				top: 0px

			&.opened
				&> *, &:before, &:after
					transition: top ease .3s, transform ease .3s .3s
				span
					top: 8px
					transform: rotate(-45deg)
				&:after
					top: 8px
					transform: rotate(-45deg)
				&:before
					top: 8px
					transform: rotate(45deg)

	nav
		flex: 0 0 auto
		display: flex
		align-items: center
		z-index: 70
		background: #fff
		width: 100%
		position: absolute
		top: 0
		left: 0
		text-align: right
		padding-top: 70px
		transform: translateY(calc(-100% - 70px))
		transition: all .5s cubic-bezier(0.1,0,.58,1) 0.3s

		@media (min-width: 768px)
			transform: none
			position: relative
			display: flex
			padding: 0
			flex: 1 1 auto
			background: none

		&.opened
			transform: translateY(0)
			transition: all .5s cubic-bezier(0,0,.58,1)
		.nav-links
			margin-left: auto
			flex: 1 1 auto
			display: flex
			flex-direction: column

			@media (min-width: 768px)
				transform: none
				flex-direction: row
				flex: 0 0 auto
				align-items: center

			a
				text-decoration: none
				color: $color-grey
				transition: 0.3s
				padding: $spacing-md $spacing-lg
				width: 100%
				&:hover
					color: $color-black

			@media (min-width: 768px)
			.nav-links
				&>*, &>a
					width: auto
					padding: $spacing-sm $spacing-md

.header-wrapper.dark
	background: $bg-dark
	transition: 0.3s ease-in-out
	.header-bar
		color: #fff
		transition: 0.3s ease-in-out
	nav
		background: $bg-dark
		transition: 0.3s ease-in-out


@keyframes opennav
	0%
		transform: translateY(calc(-100% - 70px))
	30%
		transform: translateY(6px)
	45%
		transform: translateY(-4px)
	60%
		transform: translateY(2px)
	80%
		transform: translateY(-2px)
	100%
		transform: translateY(0)

@keyframes closenav
	0%
		transform: translateY(0)
	30%
		transform: translateY(-2px)
	45%
		transform: translateY(2px)
	60%
		transform: translateY(-4px)
	80%
		transform: translateY(6px)
	100%
		transform: translateY(calc(-100% - 70px))

@media (min-width: 768px)
.header-bar
	.demo-button
		display: none
nav
	.demo-button
		display: inherit
</style>
