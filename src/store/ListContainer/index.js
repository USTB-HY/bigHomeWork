import {mockReqBanner} from '../../api'

const state = {
    banners:[]
}

const actions = {
    banner(context) {
        context.commit('BANNER',mockReqBanner())
    }
}

const mutations = {
    BANNER(state,promiseVal) {
        promiseVal.then((data) => {
            state.banners = data.data
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
