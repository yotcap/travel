<template>
  <div>
    <!-- 顶部显示的头部样式 -->
    <router-link
      tag="div"
      to="/"
      class="header-top"
      v-if="isHeaderShow"
    >
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <!-- 下拉显示的头部样式 -->
    <div class="header-content" v-if="!isHeaderShow" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-content-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isHeaderShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    fScroll () {
      const hhh = document.documentElement.scrollTop
      if (hhh > 60) {
        // 动画效果
        let opacity = hhh / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isHeaderShow = false
      } else {
        this.isHeaderShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.fScroll)
  },
  deactivated() {
    // 及时对全局事件解绑
    window.removeEventListener('scroll', this.fScroll)
  },
}
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'

.header-top
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  position: absolute
  top: .2rem
  left: .2rem
  background: rgba(0, 0, 0, .8)
  text-align: center
  .header-back
    font-size: .4rem
    color: #fff
.header-content
  height: .86rem
  line-height: .86rem
  font-size: .32rem
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  color: #fff
  background: $themeColor
  text-align: center
  .header-content-back
    line-height: .86rem
    position: absolute
    left: .32rem
    top: 0
    color: #fff
</style>
