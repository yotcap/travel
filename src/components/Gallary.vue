<template>
  <div class="container" @click="fCloseGallry">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-pagination v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-pagination>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observer: true,
        // 将observe应用于Swiper的父元素，当父元素更新时，Swiper 更新
        observeParents: true
      }
    }
  },
  methods: {
    fCloseGallry () {
      this.$emit('closeGallary')
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped lang="stylus">
.container >>> .swiper-container
  overflow: inherit
// 使图片垂直居中
.container >>> .swiper-wrapper
  display: flex
  align-items: center
.container
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  display: flex
  flex-direction: column
  justify-content: center
  background: #000
  .wrapper
    width: 100%
    height: 0
    // 正方形
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      bottom: -1rem
      color: #fff
</style>
