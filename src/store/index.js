import Vue from 'vue'
import Vuex from 'vuex'
import Home from "./Home";
Vue.use(Vuex)

export default new Vuex.Store({
    // state:{
    //     num:0
    // },
    // actions:{},
    // mutations:{
    //     Add() {
    //         return this.state.num++
    //     }
    // },
    // getters:{},
    modules:{
        Home,
    }
})
