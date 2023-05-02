export default function({ app, params, route, redirect }) {
  // hypothetical set of all supported locales
  if (route.path !== '/' && route.path.endsWith('/')) {
    let nextPath = route.path.replace(/\/$/, "")
    if(route.fullPath.indexOf('?')>-1){
      nextPath = route.fullPath.replace("/?", "?")
    }
    return redirect("301", nextPath);
  }
  
  if (route.path=== "/terms") {
    redirect("301", "/legal-notice");
  }
  if (route.path=== "/users") {
    if (app.i18n.locale === 'es')
        redirect('301', '/identidad-digital-para-usuarios');
    else if (app.i18n.locale === 'en')
        redirect('301', '/en/digital-identity-for-users');
    else
        redirect('301', '/en/digital-identity-for-users');

  } else if (route.path === "/business") {
    redirect("301", "/");
  }
}
