<template>
  <div>
    <Banner :title="title" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
    <Header></Header>
    <List :list="categoryList"></List>
    <div class="content"></div>
  </div>
</template>
<script>
import axios from 'axios'
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      title: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    this.fGetJson()
  },
  methods: {
    fGetJson () {
      // axios.get('/api/detail.json' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        if (res.data.code === 2333) {
          const data = res.data.data
          this.title = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
        }
      })
    }
  },
  components: {
    Banner,
    Header,
    List
  }
}
</script>
<style scoped lang="stylus">
.content
  height: 18rem
  background: orange
</style>
