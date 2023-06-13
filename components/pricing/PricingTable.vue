<template>
  <div class="pricing_table__wrapper">
    <div class="pricing_table__container">
      <table>
        <th colspan="2">
          <h6>{{ $t("nav_feature_kyc") }}</h6>
        </th>
        <tr>
          <td>
            {{ $t("business_pricing_upto", { amount: 200 }) }}
            <span class="hint">{{
              $t("business_pricing_verificationsMonth")
            }}</span>
          </td>
          <td>
            <b>99€</b>
            <span class="hint">/ {{ $t("business_pricing_month") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "201",
                amountUp: "1.000",
              })
            }}
            <span class="hint">{{
              $t("business_pricing_verificationsMonth")
            }}</span>
          </td>
          <td>
            <b>0,5€</b>
            <span class="hint"> / {{ $t("global_verification") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "1.000",
                amountUp: "5.000",
              })
            }}
            <span class="hint">{{
              $t("business_pricing_verificationsMonth")
            }}</span>
          </td>
          <td>
            <b>0,4€</b
            ><span class="hint"> / {{ $t("global_verification") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "5.001",
                amountUp: "10.000",
              })
            }}
            <span class="hint">{{
              $t("business_pricing_verificationsMonth")
            }}</span>
          </td>
          <td>
            <b>0,3€</b>
            <span class="hint"> / {{ $t("global_verification") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_moreThan", {
                amount: "10.001",
              })
            }}
            <span class="hint">{{
              $t("business_pricing_verificationsMonth")
            }}</span>
          </td>
          <td>
            <b>0,2€</b>
            <span class="hint"> / {{ $t("global_verification") }}</span>
          </td>
        </tr>

        <!-- START AML -->
        <th colspan="2">
          <h6>{{ $t("business_pricing_PEPAML") }}</h6>
        </th>

        <tr>
          <td>
            {{ $t("business_pricing_upto", { amount: 200 }) }}
            <span class="hint"
              >{{ $t("global_check") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,150€</b>
            <span class="hint">/ {{ $t("global_check") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "201",
                amountUp: "1.000",
              })
            }}
            <span class="hint"
              >{{ $t("global_check") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,075€</b>
            <span class="hint"> / {{ $t("global_check") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "1.001",
                amountUp: "5.000",
              })
            }}
            <span class="hint"
              >{{ $t("global_check") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,064€</b><span class="hint"> / {{ $t("global_check") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "5.001",
                amountUp: "10.000",
              })
            }}
            <span class="hint"
              >{{ $t("global_check") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,058€</b>
            <span class="hint"> / {{ $t("global_check") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "10.001",
                amountUp: "40.000",
              })
            }}
            <span class="hint"
              >{{ $t("global_check") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,050€</b>
            <span class="hint"> / {{ $t("global_check") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "40.001",
                amountUp: "80.000",
              })
            }}
            <span class="hint"
              >{{ $t("global_check") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,042€</b>
            <span class="hint"> / {{ $t("global_check") }}</span>
          </td>
        </tr>
        <tr>
          <td>
            {{ $t("business_pricing_unlimited") }}
          </td>
          <td>
            <b>3.500€</b>
            <span class="hint"> / {{ $t("business_pricing_month") }}</span>
          </td>
        </tr>

        <!-- END AML -->

        <th colspan="2">
          <h6>{{ $t("nav_feature_biocheck") }}</h6>
        </th>
        <tr>
          <td>
            {{ $t("business_pricing_upto", { amount: "5.000" }) }}
            <span class="hint"
              >{{ $t("global_unique_user") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,5€</b>
            <span class="hint">
              {{ $t("global_unique_user") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "5.001",
                amountUp: "20.000",
              })
            }}
            <span class="hint"
              >{{ $t("global_unique_user") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,4€</b>
            <span class="hint">
              {{ $t("global_unique_user") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_moreThan", {
                amount: "20.001",
              })
            }}
            <span class="hint"
              >{{ $t("global_unique_user") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
          <td>
            <b>0,35€</b>
            <span class="hint">
              {{ $t("global_unique_user") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
        </tr>

        <th colspan="2">
          <h6>{{ $t("nav_feature_kyb") }}</h6>
        </th>
        <tr>
          <td>
            {{ $t("business_pricing_upto", { amount: "500" }) }}
            <span class="hint">/{{ $t("business_pricing_month") }}</span>
          </td>
          <td>
            <b>2,75€</b>
            <span class="hint">
              {{ $t("global_verified_company") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_between", {
                amountLow: "501",
                amountUp: "1.000",
              })
            }}
            <span class="hint">/ {{ $t("business_pricing_month") }}</span>
          </td>
          <td>
            <b>2,55€</b>
            <span class="hint">
              {{ $t("global_verified_company") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
        </tr>
        <tr>
          <td>
            {{
              $t("business_pricing_moreThan", {
                amount: "1.001",
              })
            }}
            <span class="hint"> / {{ $t("business_pricing_month") }}</span>
          </td>
          <td>
            <b>2,35€</b>
            <span class="hint"
              >{{ $t("global_verified_company") }} /
              {{ $t("business_pricing_month") }}</span
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'
.pricing_table__wrapper
  display: flex
  flex-direction: column
  align-items: center
.pricing_table__container
  padding: $spacing-lg
  background: var(--bg-secondary)
  border-radius: $radius-lg
  margin: auto

h6
  margin-bottom: $spacing-sm
table
  th
    padding-top: $spacing-sm
    text-align: left
    th:not(:first-child)
      padding-top: $spacing-xlg
    td
      padding: $spacing-xsm $spacing-md

    .hint
      text-transform: lowercase
</style>
