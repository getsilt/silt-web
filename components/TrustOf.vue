<template>
  <section class="trust__wrapper">
    <h3>{{ $t("footer_trust") }}</h3>
    <div class="trust__logos">
      <img src="@/assets/img/logo/deloitte.svg.png" alt="" />
      <img src="@/assets/img/logo/glovo.svg.png" alt="" />
      <img src="@/assets/img/logo/nester_software.svg" alt="" />
      <img src="@/assets/img/logo/offugo.png" alt="" />
      <img src="@/assets/img/logo/recoletas.svg" alt="" />
    </div>
    <div class="trust__logos">
      <img src="@/assets/img/logo/gobierno_de_españa.svg.png" alt="" />
      <img src="@/assets/img/logo/tech_bcn.png" alt="" />
      <img src="@/assets/img/logo/accio.png" alt="" />
      <img src="@/assets/img/logo/aefi.png" alt="" />
      <img
        style="padding: 10px"
        src="@/assets/img/logo/plan_recuperacion.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="sass">
@import "@/assets/sass/vars.sass"

.trust__wrapper
    text-align: center
    padding: 30px
    margin: 0
    .trust__logos
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap
        padding: 0px
        img
            filter: grayscale(1)
            margin: 10px
            height: 80px
            max-height: 60px
            width: auto
            padding: 15px
    @media (min-width: 768px)
    .trust__wrapper
        .trust__logos
            img
                padding: 20px
                height: 80px
                max-height: 80px
                margin: 40px
</style>
