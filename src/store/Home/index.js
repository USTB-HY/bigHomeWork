import {reqCategoryList} from '../../api'

const state = {
    categoryList:[],
}

const actions = {
    categoryList(context) {
        context.commit('CATEGORYLIST',reqCategoryList())
    },

}

const mutations = {
    CATEGORYLIST(state,promiseVal) {
        promiseVal.then((data) => {
            state.categoryList = data.data
        })
    },

}

const getters = {}



export default {    
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}
