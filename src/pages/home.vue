<template>
<div>
  <home-header :city="city"></home-header>
  <home-swiper :swiperList="swiperList"></home-swiper>
  <home-icons :iconList="iconList"></home-icons>
  <home-recommend :recommendList="recommendList"></home-recommend>
  <home-weekend :weekendList="weekendList"></home-weekend>
</div>
</template>
<script>
import homeHeader from '@/components/header'
import homeSwiper from '@/components/homeSwiper'
import homeIcons from '@/components/homeIcons'
import homeRecommend from '@/components/homeRecommend'
import homeWeekend from '@/components/homeWeekend'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []
    }
  },
  mounted () {
    this.getIndexInfo()
  },
  methods: {
    getIndexInfo () {
      axios.get('/api/indexInfo.json')
      .then((res) => {
        if (res.data.code === "10") {
          const data = res.data.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
          this.iconList = data.iconList
        }
        
      }).catch((err) => {
        console.log(err)
      })
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
