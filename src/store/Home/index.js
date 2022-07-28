import {reqCategoryList} from '../../api'

const state = {
    categoryList
}

const actions = {
    categoryList(val) {
        commit('categoryList',val)
    }
}

const mutations = {
    categoryLis(val) {
        this.state.categoryList = val
    }
}

const getters = {}



export default {    
    state,
    actions,
    mutations,
    getters,
}
