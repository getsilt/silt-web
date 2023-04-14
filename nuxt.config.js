const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/"
      }
    }
    : {};

import { getRoutesForGenerate, getRoutesForSitemap } from './lib/routes.js'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head() {
    const i18nHead = this.$nuxtI18nHead
      ? this.$nuxtI18nHead({ addSeoAttributes: true })
      : { htmlAttrs: [], meta: [], link: [] }
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Onboarding Automation KYC & KYB'
        },
        ...i18nHead.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nHead.link
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */

  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/sass/main.sass"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/gtag", ssr: false },
    { src: "~/plugins/gsap", ssr: false },
    { src: "~/plugins/jsontree", ssr: false },
    { src: "@/plugins/stripe-menu" },
    { src: "~/plugins/consentCookies/index.js", ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    "nuxt-trailingslash-module",
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix",
        locales: [
          {
            name: "Español",
            code: "es",
            iso: "es-ES"
          },
          {
            name: "English",
            code: "en",
            iso: "en-US",
            isCatchallLocale: true
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: false
        },
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: require("./locale/en.json"),
            es: require("./locale/es.json")
          },
          silentTranslationWarn: false
        },
        defaultLocale: "en",
        baseUrl: "https://getsilt.com",
        parsePages: false,
        // pages: getRoutesForGenerate()
      }
    ],
    "@nuxtjs/router-extras",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  sitemap: {
    hostname: "https://getsilt.com",
    path: "/sitemap.xml",
    routes: getRoutesForSitemap(),
    exclude: ['/**'],
    gzip: true,
    sitemaps: [
      { path: "/sitemap-en.xml", routes: getRoutesForSitemap(["en"]), exclude: ['/**'], gzip: true},
      { path: "/sitemap-es.xml", routes: getRoutesForSitemap(["es"]), exclude: ['/**'], gzip: true}
    ]
  },

  robots: {
    Sitemap: "https://getsilt.com/sitemap.xml",
    UserAgent: "*",
    Disallow: ["/cookies", "/legal-notice", "/privacy", "/en/cookies", "/en/legal-notice", "/en/privacy", "/demo", "/es/demo", "/en/demo"]
  },

  ...routerBase,
  router: {
    trailingSlash: false,
    middleware: "redirects",
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'index',
    //     path: '/',
    //     component: resolve(__dirname, 'pages/businessbusiness.vue')
    //   })
    // }
  },
  generate: {
    fallback: "404.html",
    subFolders: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        "postcss-url": false,
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
};
