<template>
  <div>
    <Header />
    <div class="main-content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="sass" scoped>
.main-content
  margin-top: 10px
  @media(min-height: 700px)
    margin-top: 40px
</style>