<template>
    <div>
        <city-header></city-header>
        <search></search>
    </div>
</template>
<script>
import cityHeader from './components/cityHeader'
import search from './components/Search'

export default {
    data () {
        return {
        }
    },
    components: {
        cityHeader,
        search
    }
}
</script>
<style lang="stylus" scoped>
</style>
