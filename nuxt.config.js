const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/"
        }
      }
    : {};

export default {
  target: 'server',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
    { src: "~/plugins/gsap", ssr: false },
    { src: "~/plugins/consentCookies/index.js", ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    [
      "nuxt-i18n",
      {
        strategy: "prefix_and_default",
        locales: [
          {
            name: "Español",
            code: "es",
            iso: "es-ES"
          },
          {
            name: "English",
            code: "en",
            iso: "en-US"
          }
        ],
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: require("./locale/en.json"),
            es: require("./locale/es.json")
          },
          silentTranslationWarn: false
        },
        defaultLocale: "es",
        seo: false,
        baseUrl: "https://getsilt.com",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true,
        }
      }
    ],
    "@nuxtjs/router-extras",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    [
      "@nuxtjs/google-analytics",
      {
        id: "G-GWZBSHCZTK"
      }
    ]
  ],
  sitemap: {
    i18n: true,
    i18n: {
      locales: ['en', 'es'],
      routesNameSeparator: '___'
    },
    hostname: "https://getsilt.com",
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: false,
    gzip: true,
    exclude: [
      "/en/cookies",
      "/en/legal-notice",
      "/en/privacy",
      "/cookies",
      "/legal-notice",
      "/privacy"
    ]
  },

  robots: {
    Sitemap: "https://getsilt.com/sitemap.xml",
    UserAgent: "*",
    Disallow: ["/cookies", "/legal-notice", "/privacy","/en/cookies", "/en/legal-notice", "/en/privacy", "/developers", "/en/developers"]
  },

  ...routerBase,
  router: {
    trailingSlash: false,
    middleware: "redirects",
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/business.vue')
      })
    }
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
    extend(config, ctx) {},
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
