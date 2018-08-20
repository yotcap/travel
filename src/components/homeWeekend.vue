<template>
    <div>
        <div class="title">
            周末游
        </div>
        <ul>
            <li class="item" v-for="item of itemList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'homeRecommend',
    data () {
        return {
            itemList: [
                {
                    id: '101',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1507/c7/dae0666d416570.jpg_r_640x214_8ed0c3f1.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                    id: '102',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1507/c7/dae0666d416570.jpg_r_640x214_8ed0c3f1.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                    id: '103',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1507/c7/dae0666d416570.jpg_r_640x214_8ed0c3f1.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                }
            ]
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~styles/mixins.styl'

.title
    margin: .2rem 0 0 0
    line-height: .8rem
    text-indent: .2rem
    background: #eee
.item-img-wrapper
    height: 0
    padding-bottom: 33.3%
    overflow: hidden
    .item-img
        width: 100%
.item-info
    min-width: 0
    padding: .4rem 0 0 .3rem
    .item-title
        line-height: .70rem
        font-size: .32rem
        ellipsis()
    .item-desc
        line-height: .5rem
        color: #bbb
        ellipsis()
</style>
