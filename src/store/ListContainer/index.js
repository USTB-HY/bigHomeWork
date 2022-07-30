import {mockReqBanner} from '../../api'

const state = {
    banner:[]
}

const actions = {
    banner(context) {
        context.commit('BANNER',mockReqBanner())
    }
}

const mutations = {
    BANNER(state,promiseVal) {
        promiseVal.then((data) => {
            state.banner = data.data
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
