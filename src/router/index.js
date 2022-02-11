import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: 'login'
}, {
    path: '/login',
    component: Login
}, {
    path: '/home',
    component: Home
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//添加路由守卫,到除了'/login'的路径前 没有检测到token  跳回到'/login'
router.beforeEach((to, from, next) => {
    if (to.path === '/login')
        return next();

    //获取token
    const tokenStr = window.sessionStorage.getItem('token');

    if (!tokenStr)
        return next('/login');

    next();

})

export default router