import Vue from 'vue'
import Vuex from 'vuex'
import Home from "./Home";
import ListContainer from './ListContainer'
import SearchList from './SearchList'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Home,
        ListContainer,
        SearchList
    },
})
