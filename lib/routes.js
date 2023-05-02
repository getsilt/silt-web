export const defaultLocale = "en"
export const locales = ["en", "es"]
export const routes = [
  {
    biocheck: {
      es: "/reverificacion-biometrica/",
      en: "/biometric-reverification/",
      priority: 0.2
    },
  }
  , {
    index: {
      en: "/",
      es: "/",
      priority: 1
    },
  }
  , {
    kyb: {
      en: "/kyb-company-and-freelancer-verification/",
      es: "/kyb-verificacion-de-empresas-y-autonomos/",
      priority: 0.7
    },
  }
  , {
    kyc: {
      en: "/kyc-user-verification/",
      es: "/kyc-verificacion-de-usuarios/",
      priority: 0.8
    },
  }
  , {
    minimalSDKDoc: {
      en: "/minimal-sdk-documentation/",
      es: "/minimal-sdk-documentation/",
      excludeSitemap: true
    },
  }
  , {
    pricing: {
      en: "/pricing/",
      es: "/precios/",
      priority: 0.3
    },
  }
  , {
    rules: {
      en: "/rules/",
      es: "/reglas/",
      priority: 0.2
    },
  }
  , {
    misconduct: {
      en: "/misconduct-watch-list/",
      es: "/mala-conducta-watch-list/",
      priority: 0.2
    }
  }
  , {
    aml: {
      en: "/aml-anti-money-laundering/",
      es: "/aml-anti-blanqueo-de-capitales/",
      priority: 0.3
    }
  }
]

export function selectProps(...props) {
  return function (obj) {
    const newObj = {};
    props.forEach(name => {
      newObj[name] = obj[name];
    });

    return newObj;
  }
}

export function getRoutesForGenerate() {
  const generatedRoutes = routes.reduce((obj, item) => {
    const key = Object.keys(item)[0]
    obj[key] = selectProps(...locales)(item[key])
    return obj
  }, {})
  return generatedRoutes
}

export function getRoutesForSitemap(langParam) {
  let routesMapped = []
  const mainLocaleOfRoutes = langParam || locales
  for (const route of routes) {
    const attrs = Object.values(route)[0]
    if (attrs.excludeSitemap) continue;
    
    for (const lang1 of mainLocaleOfRoutes) {
      let url = ""
      const links = []
      for (const lang2 of locales) {
        if (lang1 == lang2) url = lang2 + attrs[lang2]
        links.push({ lang: lang2, url: lang2 + attrs[lang2] })
      }
      routesMapped.push({ url, links, priority: attrs.priority })
    }
  }
  return routesMapped
}