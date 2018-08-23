<template>
    <div>
        <div class="list" ref="wrapper">
            <div>
                <div class="item">
                    <div class="item-title border-topbottom">当前城市</div>
                    <div class="item-child">
                        <div class="item-child-wrapper">
                            <div class="i-c-city">北京</div>
                        </div>
                        <div class="item-child-wrapper">
                            <div class="i-c-city">北京</div>
                        </div>
                        <div class="item-child-wrapper">
                            <div class="i-c-city">北京</div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title border-topbottom">热门城市</div>
                    <div class="item-child">
                        <div class="item-child-wrapper">
                            <div class="i-c-city">济南</div>
                        </div>
                        <div class="item-child-wrapper">
                            <div class="i-c-city">济南</div>
                        </div>
                        <div class="item-child-wrapper">
                            <div class="i-c-city">济南</div>
                        </div>
                        <div class="item-child-wrapper">
                            <div class="i-c-city">济南</div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title border-topbottom">A</div>
                    <div class="i-list">
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                    </div>
                    <div class="item-title border-topbottom">B</div>
                    <div class="i-list">
                        <div class="i-l-item border-bottom">巴中</div>
                        <div class="i-l-item border-bottom">巴中</div>
                        <div class="i-l-item border-bottom">巴中</div>
                        <div class="i-l-item border-bottom">巴中</div>
                        <div class="i-l-item border-bottom">巴中</div>
                    </div>
                    <div class="item-title border-topbottom">C</div>
                    <div class="i-list">
                        <div class="i-l-item border-bottom">长沙</div>
                        <div class="i-l-item border-bottom">长沙</div>
                        <div class="i-l-item border-bottom">长沙</div>
                        <div class="i-l-item border-bottom">长沙</div>
                        <div class="i-l-item border-bottom">长沙</div>
                    </div>
                    <div class="item-title border-topbottom">A</div>
                    <div class="i-list">
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                    </div>
                    <div class="item-title border-topbottom">A</div>
                    <div class="i-list">
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                        <div class="i-l-item border-bottom">阿拉尔</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'

export default {
    name: 'cityList',
    data () {
        return {
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>
<style scoped lang="stylus">
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #666
.list
    position: absolute
    left: 0
    top: 1.58rem
    right: 0
    bottom: 0
    overflow: hidden
    .item-title
        line-height: .54rem
        padding: 0 0 0 .2rem
        font-size: .26rem
        color: #666
        background: #eee
    .item-child
        padding: .1rem .6rem .1rem .1rem
        overflow: hidden
        .item-child-wrapper
            width: 33.3%
            float: left
            .i-c-city
                margin: .1rem
                padding: .1rem 0
                border: .02rem solid #ccc
                text-align: center
    .i-list
        .i-l-item
            line-height: .76rem 
            padding: .1rem .1rem .1rem .2rem
</style>
