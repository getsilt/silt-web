<template>
  <div class="context">
    <div class="price__wrapper">
      <div class="card">
        <table>
          <tr v-if="hasKYC" class="price__service">
            <td>{{ $t("price_per_verification_ID") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: priceTableKYC[priceTableKYC.length - 1],
                  amountUp: priceTableKYC[1],
                })
              }}
            </td>
          </tr>
          <tr v-if="hasKYB" class="price__service">
            <td>{{ $t("price_per_verification_KYB") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: priceTableKYB[priceTableKYB.length - 1],
                  amountUp: priceTableKYB[1],
                })
              }}
            </td>
          </tr>
          <tr v-if="hasOCR" class="price__service">
            <td>{{ $t("price_per_verification_OCR") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: priceTableOCR[priceTableOCR.length - 1],
                  amountUp: priceTableOCR[0],
                })
              }}
            </td>
          </tr>
          <tr v-if="hasPEP" class="price__service">
            <td>{{ $t("price_per_verification_PEP") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: priceTableAMLPEP[priceTableAMLPEP.length - 1],
                  amountUp: priceTableAMLPEP[0],
                })
              }}
            </td>
          </tr>
          <tr v-if="hasAML" class="price__service">
            <td>{{ $t("price_per_verification_AML") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: priceTableAMLPEP[priceTableAMLPEP.length - 1],
                  amountUp: priceTableAMLPEP[0],
                })
              }}
            </td>
          </tr>
          <tr v-if="hasBiocheck" class="price__service">
            <td>{{ $t("price_per_verification_biocheck") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: priceTableBiocheck[priceTableBiocheck.length - 1],
                  amountUp: priceTableBiocheck[0],
                })
              }}
            </td>
          </tr>
          <tr v-if="totalPrice" class="price__total">
            <td>{{ $t("price_per_verification_total_description") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_1", {
                  amountLow: totalPrice.min,
                  amountUp: totalPrice.max,
                })
              }}
            </td>
          </tr>
        </table>
      </div>
      <div class="card">
        <table>
          <tr class="price__service">
            <td>{{ $t("price_per_verification_monthly") }}</td>
            <td>
              <v-text-field
                v-model="priceEstimateVerifications"
                placeholder="Ex: 3200"
                class="small text-right"
              />
            </td>
          </tr>
          <tr v-if="hasKYC" class="price__service">
            <td>{{ $t("price_per_verification_ID") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_2", {
                  amount: priceSplit.kyc,
                })
              }}
            </td>
          </tr>
          <tr v-if="hasKYB" class="price__service">
            <td>+ Company/freelance verification (KYB)</td>
            <td>
              {{
                $t("price_per_verification_prices_2", {
                  amount: priceSplit.kyb,
                })
              }}
            </td>
          </tr>
          <tr v-if="hasAML" class="price__service">
            <td>{{ $t("price_per_verification_AML") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_2", {
                  amount: priceSplit.aml,
                })
              }}
            </td>
          </tr>
          <tr v-if="hasPEP" class="price__service">
            <td>{{ $t("price_per_verification_PEP") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_2", {
                  amount: priceSplit.pep,
                })
              }}
            </td>
          </tr>
          <tr class="price__total">
            <td>{{ $t("price_per_verification_total_calculation") }}</td>
            <td>
              {{
                $t("price_per_verification_prices_2", {
                  amount: priceEstimateCost,
                })
              }}
            </td>
          </tr>
        </table>
      </div>
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
      if (this.hasAML) {
        maxPrice += this.priceAML;
        minPrice += this.priceAML;
      }
      if (this.hasPEP) {
        maxPrice += this.pricePEP;
        minPrice += this.pricePEP;
      }
      return { max: maxPrice, min: minPrice };
    },

    priceEstimateCost() {
      if (!this.priceEstimateVerifications) return 0;
      let totalPrice = 0;
      const priceEstimate = this.priceEstimateVerifications || 0;
      this.priceSplit = { kyc: 0, aml: 0, pep: 0, kyb: 0 };
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
      return totalPrice;
    },
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

.price__wrapper
  align-self: flex-start
  display: flex
  flex-wrap: wrap

  .card
    text-align: left

  .price__service
    margin-bottom: $spacing-lg

  &>*
    display: flex

    &:first-child
      margin-right: $spacing-lg

    td:first-child
      padding-right: $spacing-lg

    td:last-child
      text-align: right

    .price__total
      font-family: $font-bold

    .v-input input
      text-align: right
</style>
