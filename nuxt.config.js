const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/"
        }
      }
    : {};

export default {
  target: 'static',
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
    { src: "@/plugins/gtag", ssr: false },
    { src: "~/plugins/gsap", ssr: false },
    { src: "~/plugins/jsontree", ssr: false },
    { src: "@/plugins/stripe-menu"},
    { src: "~/plugins/consentCookies/index.js", ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
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
            iso: "en-US"
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
        defaultLocale: "es",
        baseUrl: "https://getsilt.com",
      }
    ],
    "@nuxtjs/router-extras",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
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
      "/privacy",
      "/demo",
      "/en/demo",
      "/es/demo"
    ]
  },

  robots: {
    Sitemap: "https://getsilt.com/sitemap.xml",
    UserAgent: "*",
    Disallow: ["/cookies", "/legal-notice", "/privacy","/en/cookies", "/en/legal-notice", "/en/privacy", "/demo", "/es/demo", "/en/demo"]
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
