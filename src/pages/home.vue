<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <div>tttttttt</div>
</div>
</template>
<script>
import homeHeader from '@/components/header'
import homeSwiper from '@/components/homeSwiper'
import homeIcons from '@/components/homeIcons'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}

</script>
<style lang="stylus" scoped>
</style>
