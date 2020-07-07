export default function({ app, params, route, redirect }) {
  // hypothetical set of all supported locales
  if (route.path.includes("/users")) {
    if (app.i18n.locale === 'es')
        redirect('301', '/identidad-digital-para-usuarios');
    else if (app.i18n.locale === 'en')
        redirect('301', '/en/digital-identity-for-users');
    else
        redirect('301', '/en/digital-identity-for-users');

  } else if (route.path.includes("/business")) {
    redirect("301", "/");
  }
}
