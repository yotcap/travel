<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of imgList" :key="item.id">
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
        //页码导航
        pagination: '.swiper-pagination',
        //是否循环
        loop: true
      },
      imgList: [
        {
          id: '000',
          imgUrl: require('@/assets/img/1.jpg')
        },
        {
          id: '001',
          imgUrl: require('@/assets/img/2.jpg')
        },
        {
          id: '002',
          imgUrl: require('@/assets/img/3.jpg')
        }
      ]
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