<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
  <div>tttttttt</div>
</div>
</template>
<script>
import homeHeader from '@/components/header'
import homeSwiper from '@/components/homeSwiper'
import homeIcons from '@/components/homeIcons'
import homeRecommend from '@/components/homeRecommend'
import homeWeekend from '@/components/homeWeekend'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  }
}

</script>
<style lang="stylus" scoped>
</style>
