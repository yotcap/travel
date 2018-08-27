<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <div class="content"></div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import Header from './components/Header'

export default {
  name: 'Detali',
  data () {
    return {
    }
  },
  components: {
    Banner,
    Header
  }
}
</script>
<style scoped lang="stylus">
.content
  height: 18rem
  background: orange
</style>
