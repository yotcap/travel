<template>
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'FadeAnimation',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="stylus">
// 如果 transition 没有名字，则 v- 是这些类名的默认前缀。如果使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter
.v-enter, .v-leave-to
  opacity: 0
.v-enter-active, .v-leave-active
  transition: opacity .5s
</style>
