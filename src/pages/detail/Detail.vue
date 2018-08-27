<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <List :list="list"></List>
    <div class="content"></div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'

export default {
  name: 'Detali',
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票-单人',
              children: [
                {
                  title: '成人票-单人-A'
                }
              ]
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '双人票'
        }
      ]
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
