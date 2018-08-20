<template>
  <div class="icons">

    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <div class="icon-desc">{{ item.desc }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeIcons',
  data () {
    return {
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
           pages[page] = []
        }
        pages[page].push(item)
        
      })
      return pages
    }
  },
  props: {
    iconList: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'

  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin: .1rem 0 0 0
    .icon
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      overflow: hidden
      position: relative
      .icon-img
        padding: .1rem
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        .icon-img-content
          height: 100%
          margin: 0 auto
          display: block
      .icon-desc
        height: .44rem
        line-height: .44rem
        position: absolute
        left: 0
        right: 0
        bottom: 0
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
