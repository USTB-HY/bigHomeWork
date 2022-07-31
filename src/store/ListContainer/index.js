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
            console.log('返回参数');
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
