import Vue from "vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-GEBTCR5Y94" },
});

gtag("set", "linker", {
  domains: ["getsilt.com", "dashboard.getsilt.com"],
});
