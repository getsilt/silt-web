<template>
  <section>
    <div class="logo">
      <nuxt-link to="/">
        <!-- <img src="@/assets/img/logo/silt_logo.svg" alt=""> -->
      </nuxt-link>
    </div>
    <nav>
      <button class="small rounded translucid">Coming soon</button>
    </nav>
  </section>
</template>

<style lang="sass" scoped>
section
  margin: 0
  padding: 30px 0
  display: flex
  justify-content: space-between

  .logo
    font-size: 60px
    flex: 1 1 auto
    max-width: 50%
    display: flex
    align-items: center
    a
      display: flex
    img
      max-width: 100%

  nav
    flex: 0 0 auto
    display: flex
    align-items: center
    margin-left: 20px
    button
      cursor: default

</style>
