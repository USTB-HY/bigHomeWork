
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

export default new VueRouter({
    routes:[
        {
            path:'/Home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:'/Login',
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:'/Register',
            component:Register,
            meta:{
                show:false
            }
        },
        {
            path:'/Search',
            component:Search,
            meta:{
                show:true
            }
        },
        //重定向
        {
            path:'/',
            redirect:"/Home"
        }
    ]
})