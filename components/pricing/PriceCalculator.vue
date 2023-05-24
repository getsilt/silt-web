<template>
  <div class="price-grid">
    <div class="card price_card_1">
      <h6>{{ $t("price_per_verification_monthly") }}</h6>
      <input
        v-model="priceEstimateVerifications"
        placeholder="Ex: 3200"
        class="v-input"
        :class="activeInput ? 'active' : ''"
        @click="activeInput = !activeInput"
      />
    </div>
    <div class="card price_card_2">
      <h6>{{ $t("price_per_verification_total_calculation") }}</h6>
      <p>
        {{
          $t("price_per_verification_prices_2", {
            amount: priceEstimateCost,
          })
        }}
      </p>
    </div>
    <div
      v-if="hasKYC || hasKYB || hasAML || hasOCR || hasBiocheck"
      class="card price_card_3"
    >
      <TransitionGroup name="offsetX">
        <div v-if="hasKYC" key="KYC" class="price-card-description">
          <h6>{{ $t("price_per_verification_KYC") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(priceSplit.kyc),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetX">
        <div v-if="hasKYB" key="KYB" class="price-card-description">
          <h6>{{ $t("price_per_verification_KYB") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(priceSplit.kyb),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetX">
        <div v-if="hasOCR" key="OCR" class="price-card-description">
          <h6>{{ $t("price_per_verification_OCR") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(priceSplit.ocr),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasPEP" key="PEP" class="price-card-description">
          <h6>{{ $t("price_per_verification_PEP") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(priceSplit.pep),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasAML" key="AML" class="price-card-description">
          <h6>{{ $t("price_per_verification_AML") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(priceSplit.aml),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasBiocheck" key="BIOCH" class="price-card-description">
          <h6>{{ $t("price_per_verification_biocheck") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(priceSplit.biocheck),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
    </div>
    <div
      v-if="hasKYC || hasKYB || hasAML || hasOCR || hasBiocheck"
      class="card price_card_4"
    >
      <TransitionGroup name="offsetX">
        <div v-if="hasKYC" key="KYC" class="price-card-description">
          <h6>{{ $t("price_per_verification_KYC") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableKYC[priceTableKYC.length - 1]
                ),
                amountUp: formatCurrency(priceTableKYC[1]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetX">
        <div v-if="hasKYB" key="KYB" class="price-card-description">
          <h6>{{ $t("price_per_verification_KYB") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableKYB[priceTableKYB.length - 1]
                ),
                amountUp: formatCurrency(priceTableKYB[1]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetX">
        <div v-if="hasOCR" key="OCR" class="price-card-description">
          <h6>{{ $t("price_per_verification_OCR") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableOCR[priceTableOCR.length - 1]
                ),
                amountUp: formatCurrency(priceTableOCR[1]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasPEP" key="PEP" class="price-card-description">
          <h6>{{ $t("price_per_verification_PEP") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableAMLPEP[priceTableAMLPEP.length - 1]
                ),
                amountUp: formatCurrency(priceTableAMLPEP[1]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasAML" key="AML" class="price-card-description">
          <h6>{{ $t("price_per_verification_AML") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableAMLPEP[priceTableAMLPEP.length - 1]
                ),
                amountUp: formatCurrency(priceTableAMLPEP[1]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasBiocheck" key="BIOCH" class="price-card-description">
          <h6>{{ $t("price_per_verification_biocheck") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableBiocheck[priceTableBiocheck.length - 1]
                ),
                amountUp: formatCurrency(priceTableBiocheck[1]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
    </div>
    <div v-if="totalPrice" class="card price_card_5">
      <h6>{{ $t("price_per_verification_total_description") }}</h6>
      <p>
        {{
          $t("price_per_verification_prices_1", {
            amountLow: totalPrice.min,
            amountUp: totalPrice.max,
          })
        }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    hasKYC: { required: true },
    hasKYB: { required: true },
    hasAML: { required: true },
    hasPEP: { required: true },
    hasOCR: { required: true },
    hasBiocheck: { required: true },
  },
  data() {
    return {
      priceEstimateVerifications: null,
      priceTableKYB: [2.75, 2.55, 2.35],
      priceTableKYC: [0, 0.5, 0.4, 0.3, 0.2],
      priceTableOCR: [0.3, 0.25, 0.2, 0.16, 0.13],
      priceTableAMLPEP: [0.15, 0.05, 0.042, 0.036, 0.032],
      priceTableBiocheck: [0.5, 0.4, 0.35],
      rangeTableKYB: [500, 1000],
      rangeTableKYC: [200, 1000, 5000, 10000],
      rangeTableAMLPEP: [200, 1000, 5000, 10000],
      rangeTableBiocheck: [5000, 20000],
      rangeTableOCR: [50, 1000, 5000, 10000, 30000],
      priceSplit: { kyc: 0, aml: 0, pep: 0, kyb: 0, biocheck: 0, ocr: 0 },
      activeInput: false,
    };
  },
  computed: {
    totalPrice() {
      let maxPrice = 0;
      let minPrice = 0;
      if (this.hasKYC) {
        maxPrice += this.priceTableKYC[1];
        minPrice += this.priceTableKYC[this.priceTableKYC.length - 1];
      }
      if (this.hasKYB) {
        maxPrice += this.priceTableKYB[0];
        minPrice += this.priceTableKYB[this.priceTableKYB.length - 1];
      }
      if (this.hasAML || this.hasPEP) {
        maxPrice += this.priceTableAMLPEP[0];
        minPrice += this.priceTableAMLPEP[this.priceTableAMLPEP.length - 1];
      }
      if (this.hasBiocheck) {
        maxPrice += this.priceTableBiocheck[0];
        minPrice += this.priceTableBiocheck[this.priceTableBiocheck.length - 1];
      }
      if (this.hasOCR) {
        maxPrice += this.priceTableOCR[0];
        minPrice += this.priceTableOCR[this.priceTableOCR.length - 1];
      }
      return {
        max: this.formatCurrency(maxPrice),
        min: this.formatCurrency(minPrice),
      };
    },

    priceEstimateCost() {
      if (!this.priceEstimateVerifications) return 0;
      let totalPrice = 0;
      const priceEstimate = this.priceEstimateVerifications || 0;
      this.priceSplit = { kyc: 0, aml: 0, pep: 0, kyb: 0, ocr: 0, biocheck: 0 };
      if (this.hasKYC) {
        for (let i in this.priceTableKYC) {
          if (this.rangeTableKYC[i] && this.rangeTableKYC[i] < priceEstimate) {
            continue;
          }
          this.priceSplit.kyc = this.priceTableKYC[i] * priceEstimate;
          if (this.priceSplit.kyc === 0 || this.priceSplit.kyc < 99) {
            this.priceSplit.kyc = 99;
          }
          break;
        }
      }
      if (this.hasKYB) {
        for (let i in this.priceTableKYB) {
          if (this.rangeTableKYB[i] && this.rangeTableKYB[i] < priceEstimate) {
            continue;
          }
          this.priceSplit.kyb = this.priceTableKYB[i] * priceEstimate;
          break;
        }
      }
      if (this.hasAML) {
        for (let i in this.priceTableAMLPEP) {
          if (
            this.rangeTableAMLPEP[i] &&
            this.rangeTableAMLPEP[i] < priceEstimate
          ) {
            continue;
          }
          this.priceSplit.aml += this.priceTableAMLPEP[i] * priceEstimate;
          break;
        }
      }
      if (this.hasPEP) {
        for (let i in this.priceTableAMLPEP) {
          if (
            this.rangeTableAMLPEP[i] &&
            this.rangeTableAMLPEP[i] < priceEstimate
          ) {
            continue;
          }
          this.priceSplit.pep += this.priceTableAMLPEP[i] * priceEstimate;
          break;
        }
      }
      if (this.hasBiocheck) {
        for (let i in this.priceTableBiocheck) {
          if (
            this.rangeTableBiocheck[i] &&
            this.rangeTableBiocheck[i] < priceEstimate
          ) {
            continue;
          }
          this.priceSplit.biocheck +=
            this.priceTableBiocheck[i] * priceEstimate;
          break;
        }
      }
      if (this.hasOCR) {
        for (let i in this.priceTableOCR) {
          if (this.rangeTableOCR[i] && this.rangeTableOCR[i] < priceEstimate) {
            continue;
          }
          this.priceSplit.ocr += this.priceTableOCR[i] * priceEstimate;
          break;
        }
      }
      totalPrice =
        this.priceSplit.kyc +
        this.priceSplit.kyb +
        this.priceSplit.aml +
        this.priceSplit.pep +
        this.priceSplit.biocheck +
        this.priceSplit.ocr;
      return this.formatCurrency(totalPrice);
    },
  },
  methods: {
    formatCurrency(amount) {
      const roundedAmount = Number(amount.toFixed(2));
      const formattedAmount = roundedAmount.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      });

      return formattedAmount;
    },
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

.price-grid
  display: grid
  grid-template-columns: 25% 35% 1fr
  h6
    margin-bottom: 0

  .price_card_5
    grid-column: 3
    grid-row: 1
    display: flex
    p
      margin: 0
  .price_card_4
    grid-column: 3
    grid-row: 2
    flex-direction: column
  .price_card_3
    grid-column: 2
    grid-row: 2
    flex-direction: column
  .price_card_2
    grid-column: 2
    grid-row: 1
    p
      margin: 0
  .price_card_1
    grid-column: 1
    grid-row: 1
    display: flex
    flex-direction: column
    h6
      margin-bottom: $spacing-md
    .v-input
      border: 2px solid #d8d8d8
      border-radius: 10px
      font-family: $font-body
      &.active
        border: 2px solid #2963ff
  .card
    text-align: left
    display: flex
    justify-content: space-between
    margin: $spacing-sm
    .price-card-description
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      p
        margin: $spacing-sm 0

.offsetY
  &-move
    transition: opacity 0.1s ease-in-out, transform 0.25s ease-in-out
  &-leave-active
    transition: opacity 0.2s linear, transform 0.4s cubic-bezier(.5, 0, .7, .4)
    transition-delay: calc(0.1s * (2 - 1))
  &-enter-active
    transition: opacity 0.5s linear, transform 0.5s cubic-bezier(.5, 1, 1, 1)
    transition-delay: 0.5s
  &-enter,
  &-leave-to
    opacity: 0
  &-enter
    transform: translateY(-0.2em)
  &-leave-to
    transform: translateY(1em)

.offsetX
  &-move
    transition: opacity 0.1s ease-in-out, transform 0.25s ease-in-out
  &-leave-active
    transition: opacity 0.2s linear, transform 0.4s cubic-bezier(.5, 0, .7, .4)
    transition-delay: calc(0.1s * (2 - 1))
  &-enter-active
    transition: opacity 0.5s linear, transform 0.5s cubic-bezier(.5, 1, 1, 1)
    transition-delay: 0.5s
  &-enter,
  &-leave-to
    opacity: 0
  &-enter
    transform: translateX(-0.2em)
  &-leave-to
    transform: translateX(1em)

@media (max-width: 768px)
  .price-grid
    display: flex
    flex-wrap: wrap
    .card
      width: 100%
</style>
