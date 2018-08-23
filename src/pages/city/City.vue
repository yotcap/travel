<template>
    <div>
        <city-header></city-header>
        <search></search>
        <list :cityList="cityList"></list>
        <alphabet :cityList="cityList"></alphabet>
    </div>
</template>
<script>
import cityHeader from './components/cityHeader'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'

export default {
    data () {
        return {
            cityList: {}
        }
    },
    beforeMount () {
        axios.get('/api/city.json')
            .then((res) => {
                if (res.data.code === 1001) {
                    this.cityList = res.data.data
                }
            })
    },
    components: {
        cityHeader,
        Search,
        List,
        Alphabet
    }
}
</script>
<style lang="stylus" scoped>
</style>
