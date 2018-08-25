<template>
<div>
  <home-header></home-header>
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
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: [],
      lastCity: ''
    }
  },
  computed: {
    // 映射 vuex 中的 state，整个页面调用 state 时，不需要 填写 this.$store.state.XXX
    ...mapState(['currentCity'])
  },
  mounted () {
    this.lastCity = this.currentCity
    this.getIndexInfo()
  },
  activated() { // 使用 keeplive 后，新增的周期
    // 如果新选择的城市与上一次选择的城市不等，则重新调取 json
    if (this.lastCity !== this.currentCity) {
      this.lastCity = this.currentCity
      this.getIndexInfo()
    }
  },
  methods: {
    getIndexInfo () {
      axios.get('/api/indexInfo.json?currentCity=' + this.currentCity)
        .then((res) => {
          if (res.data.code === '10') {
            const data = res.data.data
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
