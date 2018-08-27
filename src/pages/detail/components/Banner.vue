<template>
  <div>
    <div class="banner" @click="fShowGallary">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" />
      <div class="banner-info">
        <div class="banner-title">大连亚圣海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          15
        </div>
      </div>
    </div>
    <Gallary
      v-if="isGallaryShow"
      @closeGallary="fCloseGallary"
      :imgs="imgs"
    ></Gallary>
  </div>
</template>
<script>
import Gallary from '@/components/Gallary'

export default {
  data () {
    return {
      isGallaryShow: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg',
        'http://img1.qunarzz.com/sight/p0/1606/a7/a7d6ecdcf11a272fb4.water.jpg_r_800x800_257d0e5a.jpg'
      ]
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
  components: {
    Gallary
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
