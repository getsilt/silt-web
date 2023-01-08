<template>
  <div
    class="expandable dark"
    :class="{ expanded }"
    @click="expanded = !expanded"
  >
    <slot v-if="$slots.image" name="image"></slot>
    <slot v-if="$slots.title" name="title"></slot>
    <div v-if="$slots.body" class="expandable_body" ref="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "expandable",
  props: {
    expandedProp: {
      default: false
    }
  },
  data: function () {
    return {
      expanded: this.expandedProp,
    };
  },
  watch: {
    expanded() {
      this.checkExpanded()
    }
  },
  mounted() {
    this.checkExpanded()
  },
  methods: {
    checkExpanded(){
      if(!this.$refs.body) return
      if(this.expanded) this.$refs.body.style=`max-height: ${this.$refs.body.scrollHeight}px`
      else this.$refs.body.style=`max-height: 0px`
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.expandable
  background: $color-grey-lighten-3
  border-radius: $radius-md
  border: 3px solid rgba($color-grey-lighten-3, 0.5)
  padding: $spacing-md
  overflow: hidden
  cursor: pointer
  h1, h2, h3, h4, h5
    margin: 0
  &>*
    margin-top: 0
    margin-bottom: $spacing-sm
  &>:last-child
    margin-bottom: 0
  & >:first-child:before
    content: '+'
    display: inline-block
    margin-right: $spacing-md
    flex: 0 0 auto
    text-transform: none
    font-size: 1.5em
    line-height: 0.7em
    transform: rotate(0deg)
    transition: 0.3s ease-in-out
    position: relative
    top: 0
    width: 0.5em
    text-align: center
  .expandable_body
    max-height: 0
    transition: 0.3s ease-in-out
    overflow: hidden
    margin-top: 0

.expandable.expanded
  &>:first-child:before
    content: '-'
    top: 3px
    transform: rotate(180deg)
    transition: 0.3s ease-in-out
  .expandable_body
    margin-top: $spacing-sm
    transition: 0.3s ease-in-out

.expandable.dark
  background: $bg-dark-lighten-1
  border-color: rgba($bg-dark-lighten-2, 0.5)
</style>
