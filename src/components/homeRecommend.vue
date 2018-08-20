<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of itemList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
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
                    id: '1001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/c8/c8fa052a53e569c3b4.img.jpg_200x200_6a28d20a.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                    id: '1001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/c8/c8fa052a53e569c3b4.img.jpg_200x200_6a28d20a.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                    id: '1002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/c8/c8fa052a53e569c3b4.img.jpg_200x200_6a28d20a.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                    id: '1003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/c8/c8fa052a53e569c3b4.img.jpg_200x200_6a28d20a.jpg',
                    title: '大连圣亚海洋世界',
                    desc: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                },
                {
                    id: '1004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/c8/c8fa052a53e569c3b4.img.jpg_200x200_6a28d20a.jpg',
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
.item
    height: 2.1rem
    display:flex
    overflow: hidden
    .item-img
        width: 2rem
        height: 2rem
        padding: .1rem
    .item-info
        min-width: 0
        flex: 1
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
