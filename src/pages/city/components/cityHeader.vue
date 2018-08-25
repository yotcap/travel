<template>
    <div>
        <div class="header">选择城市</div>
        <router-link to="/">
          <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

  .header
    height: .86rem
    line-height: .86rem
    font-size: .38rem
    position: relative
    text-align: center
    color: #fff
    background: $themeColor
  .header-back
    line-height: .86rem
    position: absolute
    left: .32rem
    top: 0
    color: #fff
</style>
