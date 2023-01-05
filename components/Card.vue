<template>
  <div class="card">
    <div v-if="$slots.image"><slot name="image"></slot></div>
    <div v-if="$slots.title"><slot name="title"></slot></div>
    <div v-if="$slots.body"><slot name="body"></slot></div>
    <div v-if="$slots.footer"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
