<template>
  <div>
    <div class="banner" @click="fShowGallary">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ title }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          15
        </div>
      </div>
    </div>
    <!-- gallary 添加动画效果 -->
    <fade-animation>
      <Gallary
        v-if="isGallaryShow"
        @closeGallary="fCloseGallary"
        :imgs="gallaryImgs"
      ></Gallary>
    </fade-animation>
  </div>
</template>
<script>
import FadeAnimation from '@/components/FadeAnimation'
import Gallary from '@/components/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      isGallaryShow: false
    }
  },
  methods: {
    fShowGallary () {
      this.isGallaryShow = true
    },
    fCloseGallary () {
      this.isGallaryShow = false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    bannerImg: {
      type: String,
      default: ''
    },
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Gallary,
    FadeAnimation
  }
}
</script>
<style scoped lang="stylus">
.banner
  height: 0
  padding-bottom: 55%
  position: relative
  overflow: hidden
  .banner-img
    width: 100%
  .banner-info
    line-height: .6rem
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    color: #fff
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
