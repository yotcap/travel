import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/city', name: 'city', component: City},
    {path: '/detail/:id', name: 'detail', component: Detail}
  ],
  // 进入新页面，重置页面滚动位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
