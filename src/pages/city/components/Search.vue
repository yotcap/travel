<template>
    <div>
        <div class="search">
            <input v-model="keywords" class="s-input" placeholder="输入城市名或拼音" />
        </div>
        <!-- class 和 ref 命名不能冲突，否则下面的 $ref 获取不到 -->
        <div class="result" v-show="keywords" ref="resultRef">
            <ul>
                <li v-for="item of resultList" :key="item.id" class="result-item border-bottom" @click="handleCityClick(item.name)">{{ item.name }}</li>
                <li class="result-item border-bottom" v-if="hasNoData">没有找到数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'

export default {
  name: 'citySearch',
  data () {
    return {
      keywords: '',
      timer: null,
      resultList: []
    }
  },
  computed: {
    hasNoData () {
      return !this.resultList.length
    }
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keywords) {
        this.resultList = []
        return
      }
      setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 通过拼音或汉字查找
            if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
              result.push(value)
            }
          })
          this.resultList = result
        }
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('clickedCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.resultRef, { mouseWheel: true, click: true, tap: true })
  },
  props: {
    cities: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'

.search
    height: .72rem
    padding: 0 .1rem
    background: $themeColor
    .s-input
        width: 100%
        height: .62rem
        line-height: .62rem
        padding: 0 .1rem
        border-radius: .06rem
        text-align: center
        box-sizing: border-box
        color: #666
.result
    z-index: 1
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background: #eee
    .result-item
        line-height: .62rem
        padding: 0 0 0 .2rem
        color: #666
        background: #fff
</style>
