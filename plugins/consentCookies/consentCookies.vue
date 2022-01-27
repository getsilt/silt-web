<template>
  <div>
    <transition name="page">
      <div v-if="show" :class="['consent-cookies']">
        <slot><span v-html="options.text">{{ options.text }}</span></slot>
        <button
          class="button small"
          v-if="options.type === 'accept'"
          @click="close()"
        >
          {{ $t("global_accept") }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import consentCookies from "~/plugins/consentCookies/consentCookies";
import {getCookie, setCookie} from '~/lib/cookies.js';
export default {
  data() {
    return {
      options: {
        text: this.$t("legal_consentCookies"),
        type: "accept"
      },
      show: false,
      timer: 0
    };
  },
  beforeMount() {
    consentCookies.event.$on("show", () => {
      if(!getCookie('consentCookies')) this.show = true;
    });
    consentCookies.event.$on("reboke", () => {
      this.rebokeConsent();
    });
  },
  methods: {
    close() {
      this.show = false;
      setCookie('consentCookies', 'true', 100)
    },
    rebokeConsent() {
      setCookie('consentCookies', '', 0)
      this.show = true;
    }
  }
};
</script>

<style lang="sass" scoped>
.consent-cookies
  width: calc(100%)
  background-color: rgba(250, 250, 250, 0.8)
  backdrop-filter: blur(5px)
  color: #666
  text-align: center
  border-radius: 0px
  padding: 10px
  position: fixed
  z-index: 1
  left: 0px
  bottom: 0px
  font-size: 14px

  .button
    margin-left: 10px
</style>