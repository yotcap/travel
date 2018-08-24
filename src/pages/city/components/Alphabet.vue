<template>
    <div>
        <ul class="list">
            <li
                class="item"
                v-for="item of cities"
                :key="item"
                :ref="item"
                @click="handleClick"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'alphabet',
    data () {
        return {
            isTouched: false,
            startY: 0,
            timer: null
        }
    },
    computed: {
        cities () {
            const cities = []
            for (let i in this.cityList.cities) {
                cities.push(i)
            }
            return cities
        }
    },
    updata () {
        // 优化性能
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleClick (e) {
            this.$emit('aClick', e.target.innerText)
        },
        handleTouchStart () {
            this.isTouched = true
        },
        handleTouchMove (e) {
            // 增加 timer ，优化性能
            if (this.timer) {
                clearTimeout(this.timer)
            }
            setTimeout(() => {
                const touchY = e.touches[0].clientY -79
                const indexY = Math.floor((touchY - this.startY) /20)
                if (indexY >=0 && indexY < this.cities.length) {
                    this.$emit('aClick', this.cities[indexY])
                }
            }, 16)
        },
        handleTouchEnd () {
            this.isTouched = false
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
