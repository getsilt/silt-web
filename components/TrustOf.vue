<template>
  <section class="trust__wrapper">
    <h6 class="seo_header">{{ $t("footer_trust") }}</h6>
    <div class="trust__logos">
      <ul class="trust__logos_list">
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/gobierno_de_españa.svg.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/tech_bcn.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/accio.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/deloitte.svg.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/glovo.svg.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img
            style="padding: 20px"
            src="@/assets/img/logo/nester_software.svg"
            alt=""
          />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/offugo.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/aefi.png" alt="" />
        </li>
        <li class="trust__logos_item">
          <img
            style="padding: 10px"
            src="@/assets/img/logo/plan_recuperacion.png"
            alt=""
          />
        </li>
        <li class="trust__logos_item">
          <img src="@/assets/img/logo/recoletas.svg" alt="" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="sass">
@import "@/assets/sass/vars.sass"

@keyframes slide-then-hide
  0%
    transform: translate(0, 0)

  100%
    display: none
    transform: translate(-100%, 0)

@keyframes slide
  0%
    transform: translate(0, 0)

  100%
    transform: translate(-100%, 0)

.seo_header
  filter: contrast(5%) grayscale(1)

.trust__wrapper
  text-align: center
  padding: 30px
  margin: auto
  margin-top: -80px
  .trust__logos
    display: flex
    width: 100%
    height: 100%
    max-width: 100%
    max-height: 100%
    place-items: center
    margin: 0px
    padding: 10px
    list-style-type: none
    opacity: 1
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)
    overflow: hidden
    .trust__logos_list
      display: flex
      width: 100%
      height: 100%
      max-width: 100%
      max-height: 100%
      place-items: center
      margin: 0
      padding: 0
      list-style-type: none
      text-indent: none
      gap: 48px
      position: relative
      flex-direction: row
      will-change: transform
      transform: translateX(0px)
      animation-name: slide
      animation-duration: 40s
      animation-timing-function: linear
      animation-iteration-count: infinite
      .trust__logos_item
        img
          filter: contrast(5%) grayscale(1)
          margin: 10px
          height: 80px
          max-height: 60px
          width: auto
          padding: 15px
</style>
