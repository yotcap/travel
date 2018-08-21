<template>
    <div class="search">
        <input class="s-input" placeholder="输入城市名或拼音" />
    </div>
</template>
<script>
export default {
    data () {
        return {
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
</style>
