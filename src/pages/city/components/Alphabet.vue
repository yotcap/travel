<template>
    <div>
        <ul class="list">
            <li class="item" v-for="(item, index) of cityList.cities" :key="index">{{ index }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'alphabet',
    data () {
        return {
        }
    },
    props: {
        cityList: {
            type: Object,
            default: {}
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'

.list
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
        line-height: .4rem
        text-align: center
        color: $themeColor
</style>
