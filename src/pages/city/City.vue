<template>
    <div>
        <city-header></city-header>
        <search></search>
        <list></list>
        <alphabet></alphabet>
    </div>
</template>
<script>
import cityHeader from './components/cityHeader'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'

export default {
    data () {
        return {
        }
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
