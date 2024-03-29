<template>
  <div class="price-grid">
    <div class="card price_card_1">
      <h6>{{ $t("price_per_verification_monthly") }}</h6>
      <div
        v-for="feature of features"
        :key="feature.name"
        class="price-calculator-checks-wrapper"
      >
        <PriceCalculatorCheckbox
          :checkBoxText="feature.translationKey"
          :isSelected="feature.isActive"
          @onCheckboxChange="updateCalculator(feature.name)"
        />
      </div>
      <input
        v-model="priceEstimateVerifications"
        placeholder="Ex: 3200"
        class="v-input"
        :class="activeInput ? 'active' : ''"
        @click="activeInput = !activeInput"
      />
    </div>
    <div v-if="hasKYC || hasAML" class="card price_card_2">
      <TransitionGroup name="offsetX">
        <div v-if="hasKYC" key="KYC" class="price-card-description">
          <h6>{{ $t("price_per_verification_KYC") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_2", {
                amount: formatCurrency(
                  priceEstimateVerifications ? priceSplit.kyc : 199
                ),
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
                amount: formatCurrency(
                  priceEstimateVerifications ? priceSplit.pep : 0
                ),
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
                amount: formatCurrency(
                  priceEstimateVerifications ? priceSplit.aml : 0
                ),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <div class="price-card-description total-monthly-cost-wrapper">
        <h5>{{ $t("price_per_verification_total_calculation") }}</h5>
        <h5>
          {{
            $t("price_per_verification_prices_2", {
              amount: priceEstimateVerifications
                ? priceEstimateCost
                : "199,00 €",
            })
          }}
        </h5>
      </div>
    </div>
    <div class="card price_card_3">
      <TransitionGroup name="offsetX">
        <div v-if="hasKYC" key="KYC-2" class="price-card-description">
          <h6>{{ $t("price_per_verification_KYC") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableKYC[priceTableKYC.length - 1]
                ),
                amountUp: formatCurrency(priceTableKYC[0]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasPEP" key="PEP-2" class="price-card-description">
          <h6>{{ $t("price_per_verification_PEP") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableAMLPEP[priceTableAMLPEP.length - 1]
                ),
                amountUp: formatCurrency(priceTableAMLPEP[0]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
      <TransitionGroup name="offsetY">
        <div v-if="hasAML" key="AML-2" class="price-card-description">
          <h6>{{ $t("price_per_verification_AML") }}</h6>
          <p>
            {{
              $t("price_per_verification_prices_1", {
                amountLow: formatCurrency(
                  priceTableAMLPEP[priceTableAMLPEP.length - 1]
                ),
                amountUp: formatCurrency(priceTableAMLPEP[0]),
              })
            }}
          </p>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PriceCalculatorCheckbox from "./PriceCalculatorCheckbox.vue";

export default Vue.extend({
  components: { PriceCalculatorCheckbox },
  props: {},
  data() {
    return {
      priceEstimateVerifications: null,
      priceTableKYC: [0.5, 0.4, 0.35, 0.3],
      priceTableAMLPEP: [0.15, 0.075, 0.064, 0.058, 0.05, 0.042],
      rangeTableKYC: [1000, 5000, 10000, 15000, 20000],
      rangeTableAMLPEP: [200, 1000, 5000, 10000, 40000],
      priceSplit: { kyc: 199, aml: 0, pep: 0 },
      activeInput: false,
      features: [
        {
          name: "PEP",
          isActive: false,
          translationKey: "business_pricing_add_pep",
        },
        {
          name: "AML",
          isActive: false,
          translationKey: "business_pricing_add_aml",
        },
      ],
      hasPEP: false,
      hasKYC: true,
      hasAML: false,
    };
  },
  computed: {
    priceEstimateCost() {
      let totalPrice = 0;
      const priceEstimate = this.priceEstimateVerifications || 0;
      this.priceSplit = { kyc: 0, aml: 0, pep: 0 };
      if (!this.hasKYC && !this.hasAML && !this.hasPEP)
        return this.formatCurrency(0);
      if (this.hasKYC) {
        for (let i in this.priceTableKYC) {
          if (this.rangeTableKYC[i] && this.rangeTableKYC[i] < priceEstimate) {
            continue;
          }
          this.priceSplit.kyc = this.priceTableKYC[i] * priceEstimate;
          if (this.priceSplit.kyc === 0 || this.priceSplit.kyc < 99) {
            this.priceSplit.kyc = 199;
          }
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
      totalPrice =
        this.priceSplit.kyc + this.priceSplit.aml + this.priceSplit.pep;
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
    updateCalculator(featureName) {
      const feature = this.features.find(
        (feature) => feature.name === featureName
      );
      feature.isActive = !feature.isActive;
      if (feature.name === "AML") this.hasAML = !this.hasAML;
      if (feature.name === "PEP") this.hasPEP = !this.hasPEP;
    },
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

.price-grid
  display: grid
  grid-template-columns: 35% 35% 1fr
  h6, h5
    margin-bottom: 0

  .price_card_2
    grid-column: 3
    grid-row: 1
    flex-direction: column
  .price_card_3
    grid-column: 2
    grid-row: 1
    flex-direction: column
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
    .price-calculator-checks-wrapper
      margin-bottom: $spacing-sm
  .card
    text-align: left
    display: flex
    justify-content: flex-start
    margin: $spacing-sm
    .price-card-description
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      p
        margin: $spacing-sm 0
      &.total-monthly-cost-wrapper
        margin-top: $spacing-md

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
