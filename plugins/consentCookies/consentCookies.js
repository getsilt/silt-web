import consentCookies from "~/plugins/consentCookies/consentCookies.vue";

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return;
    }
    this.installed = true;

    /**
     * Create event bus
     */

    this.event = new Vue();

    /**
     * Plugin methods
     */
    Vue.prototype.$consentCookies = {
      show(options = {}) {
        Plugin.event.$emit("show", options, true);
      },
      rebokeConsent() {
        Plugin.event.$emit("reboke");
      }
    };

    /**
     * Registration of <snackbar/> component
     */
    Vue.component("consent-cookies", consentCookies);
  }
};

export default Plugin;