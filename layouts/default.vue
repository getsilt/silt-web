<template>
  <div class="main-wrapper">
    <Header />
    <div class="main-content">
      <nuxt />
    </div>
    <button
      class="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      @click="toggleTheme()"
    >
      <svg
        class="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask class="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          class="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g class="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({
      addDirAttribute: true,
      addSeoAttributes: true,
    });
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      title: `Silt Digital ID & KYC | ${this.$t("business_claim1")}`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("business_claim1"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("business_claim2"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("business_claim2"),
        },
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    };
  },
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    this.isDark = localStorage.getItem("dark-theme") === "true";
    this.loadTheme();
  },
  methods: {
    loadTheme() {
      const expandables = document.getElementsByClassName("expandable");
      if (this.isDark) {
        document.firstElementChild.setAttribute("dark-theme", "true");
        document.getElementById("html").classList.add("dark");
        document.getElementById("main-menu").classList.add("dark");
        document.getElementById("header-wrapper").classList.add("dark");
        document.getElementById("body").classList.add("dark");
        for (let i = 0; i < expandables.length; i++) {
          expandables[i].classList.add("dark");
        }
      } else {
        document.firstElementChild.setAttribute("dark-theme", "false");
        document.getElementById("html").classList.remove("dark");
        document.getElementById("main-menu").classList.remove("dark");
        document.getElementById("header-wrapper").classList.remove("dark");
        document.getElementById("body").classList.remove("dark");
        for (let i = 0; i < expandables.length; i++) {
          expandables[i].classList.remove("dark");
        }
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("dark-theme", this.isDark);
      this.loadTheme();
    },
  },
};
</script>
<style lang="sass">
@import "@/assets/sass/vars.sass"

:root
  --icon-fill: var(--bg-main)
  --icon-fill-hover: var(--bg-main)
  --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25)
  --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25)

.theme-toggle
  position: fixed
  right: 15px
  bottom: 100px
  background: var(--bg-primary)
  border-color: var(--bg-primary)
  padding: 10px
  &:hover
    background: var(--bg-primary) !important

.sun-and-moon > :is(.moon, .sun, .sun-beams)
  transform-origin: center

.sun-and-moon > :is(.moon, .sun)
  fill: var(--icon-fill)

.theme-toggle:is(:hover, :focus-visible) > .sun-and-moon > :is(.moon, .sun)
  fill: var(--icon-fill-hover)

.sun-and-moon > .sun-beams
  stroke: var(--icon-fill)
  stroke-width: 2px

.theme-toggle:is(:hover, :focus-visible) .sun-and-moon > .sun-beams
  stroke: var(--icon-fill-hover)

[dark-theme="true"] .sun-and-moon > .sun
  transform: scale(1.75)

[dark-theme="true"] .sun-and-moon > .sun-beams
  opacity: 0

[dark-theme="true"] .sun-and-moon > .moon > circle
  transform: translateX(-7px)

@media (prefers-reduced-motion: no-preference)
  .sun-and-moon > .sun
    transition: transform .5s var(--ease-elastic-3)

  .sun-and-moon > .sun-beams
    transition: transform .5s var(--ease-elastic-4), opacity .5s var(--ease-3)

  .sun-and-moon .moon > circle
    transition: transform .25s ease-out

  [dark-theme="true"] .sun-and-moon > .sun
    transition-timing-function: ease-in-out
    transition-duration: .25s
    transform: scale(1.75)

  [dark-theme="true"] .sun-and-moon > .sun-beams
    transition-duration: .15s
    transform: rotateZ(-25deg)

  [dark-theme="true"] .sun-and-moon > .moon > circle
    transition-duration: .5s
    transition-delay: .25s
</style>
