<template>
  <div>
    <div class="list" ref="wrapper" v-if="cityList">
      <div>
        <div class="item">
          <div class="item-title border-topbottom">当前城市</div>
          <div class="item-child">
            <div class="item-child-wrapper">
              <div class="i-c-city">{{ this.$store.state.currentCity }}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-title border-topbottom">热门城市</div>
          <div class="item-child">
            <div
              class="item-child-wrapper"
              v-for="item of cityList.hotCities"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              <div class="i-c-city">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="item"
          v-for="(items, index) of cityList.cities"
          :key="index"
          :ref="index"
        >
          <div class="item-title border-topbottom">{{ index }}</div>
          <div class="i-list">
            <div class="i-l-item border-bottom" v-for="item of items" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'

export default {
  name: 'cityList',
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  },
  watch: {
    choiceAlphabet () {
      if (this.choiceAlphabet) {
        const element = this.$refs[this.choiceAlphabet][0] // 定位到节点
        this.scroll.scrollToElement(element) // 跳至该节点
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // 没有异步操作，而且也很简单，所以可以绕过 dispatch 直接调用 commit
      // this.$store.dispatch('clickCity', city)
      this.$store.commit('clickedCity', city)
      this.$router.push('/')
    }
  },
  props: {
    cityList: {
      type: Object,
      default: () => {
        return {}
      }
    },
    choiceAlphabet: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="stylus">
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #666
.list
    position: absolute
    left: 0
    top: 1.58rem
    right: 0
    bottom: 0
    overflow: hidden
    .item-title
        line-height: .54rem
        padding: 0 0 0 .2rem
        font-size: .26rem
        color: #666
        background: #eee
    .item-child
        padding: .1rem .6rem .1rem .1rem
        overflow: hidden
        .item-child-wrapper
            width: 33.3%
            float: left
            .i-c-city
                margin: .1rem
                padding: .1rem 0
                border: .02rem solid #ccc
                text-align: center
    .i-list
        .i-l-item
            line-height: .76rem
            padding: .1rem .1rem .1rem .2rem
</style>
