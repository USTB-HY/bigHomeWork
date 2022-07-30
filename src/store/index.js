import Vue from 'vue'
import Vuex from 'vuex'
import Home from "./Home";
import ListContainer from './ListContainer'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Home,
        ListContainer,
    },
})
