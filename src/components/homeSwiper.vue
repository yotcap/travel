<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        // 页码导航
        pagination: '.swiper-pagination',
        // 是否循环
        loop: true,
        effect: 'coverflow',
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  props: {
    swiperList: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped lang="stylus">
  // >>> 样式穿透， wrapper 下所有子组件的 .swiper-pagination-bullet-active 样式都给为规定的样式
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 27%
    overflow: hidden
    background: #eee
    .swiper-img
      width: 100%
</style>
