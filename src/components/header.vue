<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入框
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont city-icon">&#xe64a;</span>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
    }
  },
  props: {
    city: {
      type: String,
      default: '中国'
    }
  }
}
</script>

<style lang="stylus" scoped>
// 在 css 中引入其他的 css 文件，如果想使用自定义路径 ，必须在 路径 前添加 ~
@import '~styles/varibles.styl';

.header
  display: flex
  line-height: .86rem
  background: $themeColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    height: .64rem
    line-height: .64rem
    margin: .12rem .2rem 0 .2rem
    padding-left: .3rem
    flex: 1
    color: #000
    background: #fff
    border-radius: .1rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    color: #fff
    .city-icon
      font-size: .25rem
</style>
