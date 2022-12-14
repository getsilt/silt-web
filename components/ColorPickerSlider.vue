<template class="color-picker-template">
  <div class="color-picker">
    <transition name="pop">
      <div class="color-picker__flyout">
        <div class="color-picker__inner">
          <h5 class="color-picker-text">
            {{ $t("customization_guide_color") }}
          </h5>
          <div class="control" v-bind:style="gradientH">
            <input
              type="range"
              min="0"
              max="360"
              v-model="h"
              @change="$emit('onChange', { h, s: '80%', l: '99%' })"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "color-picker-slider",
  data: function () {
    return {
      h: "265",
      s: "80",
      l: "99",
    };
  },
  computed: {
    gradientH: function () {
      let stops = [];
      for (let i = 0; i < 7; i++) {
        let h = i * 60;

        let hsl = hsb2hsl(
          parseFloat(h / 360),
          parseFloat(this.s) / 100,
          parseFloat(this.l / 100)
        );

        let c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
        stops.push("hsl(" + c + ")");
      }

      return {
        backgroundImage: "linear-gradient(to right, " + stops.join(", ") + ")",
      };
    },
  },
  mounted: function () {
    this.h = parseInt(Math.random() * 360);
  },
});

function hsb2hsl(h, s, b) {
  let hsl = {
    h: h,
  };
  hsl.l = (2 - s) * b;
  hsl.s = s * b;

  if (hsl.l <= 1 && hsl.l > 0) {
    hsl.s /= hsl.l;
  } else {
    hsl.s /= 2 - hsl.l;
  }

  hsl.l /= 2;

  if (hsl.s > 1) {
    hsl.s = 1;
  }

  if (!hsl.s > 0) hsl.s = 0;

  hsl.h *= 360;
  hsl.s *= 100;
  hsl.l *= 100;

  return hsl;
}
</script>
<style scoped>
.color-picker__flyout {
  width: 240px;
}

.color-picker__inner {
  padding: 1.5rem 0;
}

.control {
  width: 100%;
  height: 12px;
  border-radius: 12px;
}

.control + .control {
  margin-top: 1rem;
}

.control input {
  width: 100%;
  margin: 0;
}

.color-picker-text {
  text-align: center;
  margin-bottom: 20px;
}

.control input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
}

.control input[type="range"]:focus {
  outline: none;
}

.control input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

.control input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
  margin-top: -18px;
}
</style>
