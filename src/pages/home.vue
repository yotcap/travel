<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <div>tttttttt</div>
</div>
</template>
<script>
import homeHeader from '@/components/header'
import homeSwiper from '@/components/homeSwiper'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSwiper
  }
}

</script>
<style lang="stylus" scoped>
</style>
