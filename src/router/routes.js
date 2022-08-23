
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../view/Detail'
import Cart from '../view/Cart'
import AddCart from '../view/AddCart'

export default [
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
            name:'Search',
            path:'/Search/:keyword?',//params传参占位
            component:Search,
            props:true,
            meta:{
                show:true
            }
        },
        {
            name:'Detail',
            path:'/Detail/:intemId?',
            component:Detail,
            meta:{
                show:true
            }
        },
        {
            name:'Cart',
            path:'/Cart',
            component:Cart,
        },
        {
            name:'AddCart',
            path:'/AddCart/:skuId/:skuNum',
            component:AddCart,
        },
        //重定向
        {
            path:'/',
            redirect:"/Home"
        }
    ]