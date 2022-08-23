import Vue from 'vue'
import Vuex from 'vuex'
import Home from "./Home";
import ListContainer from './ListContainer'
import SearchList from './SearchList'
import Detail from './Detail'
import Register from './Register'
import Login from "./Login";
import Cart from "./Cart";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Home,
        ListContainer,
        SearchList,
        Detail,
        Register,
        Login,
        Cart        
    },
})
