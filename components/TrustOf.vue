<template>
  <section class="trust__wrapper">
    <h6 class="seo_header">{{ $t("footer_trust") }}</h6>
    <div class="trust__logos">
      <ul class="trust__logos_list">
        <li
          class="trust__logos_item"
          v-for="clientImage of clientsImages"
          :key="clientImage.scr"
        >
          <img
            :style="clientImage.style"
            :src="require(`@/assets/img/logo/${clientImage.src}`)"
            :alt="clientImage.alt"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clientsImages: [
        {
          src: "gobierno_de_españa.svg.png",
          alt: "gobierno_de_españa",
          style: "filter: contrast(100%) grayscale(1)",
        },
        {
          src: "tech_bcn.png",
          alt: "tech_bcn",
          style: "",
        },
        { src: "accio.png", alt: "accio", style: "" },
        {
          src: "deloitte.svg.png",
          alt: "deloitte.svg",
          style: "",
        },
        {
          src: "glovo.svg.png",
          alt: "glovo.svg",
          style: "",
        },
        {
          src: "nester_software.svg",
          alt: "nester_software",
          style: "padding: 20px",
        },
        { src: "offugo.png", alt: "offugo", style: "" },
        { src: "aefi.png", alt: "aefi", style: "" },
        {
          src: "plan_recuperacion.png",
          alt: "plan_recuperacion",
          style: "padding: 10px",
        },
        {
          src: "recoletas.svg",
          alt: "recoletas",
          style: "",
        },
      ],
    };
  },
  methods: {
    cloneAndAppendItems() {
      const logosList = document.querySelector(".trust__logos_list");
      const items = logosList.querySelectorAll(".trust__logos_item");

      items.forEach((item) => {
        const clone = item.cloneNode(true);
        logosList.appendChild(clone);
      });
    },
  },
  mounted() {
    // this.cloneAndAppendItems();
  },
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/vars.sass"
.seo_header
  filter: contrast(5%) grayscale(1)

@keyframes infiniteScroll
  from
    transform: translateX(0)
  to
    transform: translateX(calc(0px - 50% - 500px))

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
      font-size: 40px
      gap: $spacing-xlg
      width: 2600px
      animation-name: infiniteScroll
      animation-duration: 20s
      animation-iteration-count: infinite
      animation-timing-function: linear
      list-style: none
      .trust__logos_item
        height: 100%
        width: 200px
        background-size: cover
        img
          filter: contrast(5%) grayscale(1)
          margin: 10px
          height: 80px
          max-height: 60px
          width: auto
          padding: 15px
</style>
