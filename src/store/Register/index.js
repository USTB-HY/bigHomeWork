import { reqRegister } from '../../api'
import { reqCode } from '../../api'

const state = {
    code:'',
    phone:''
}

const actions = {
    async getCode({commit},params) {
        let result = await reqCode(params)
        if (result.code == 200) {
            commit('GETCODE', result.data)
        }
    },
    async register({commit},params) {
        let result = await reqRegister(params)
        if (result.code == 200) {
            if (result.message === '成功') {
                commit('REGISTER', params.phone)
            }
        }
    },
}

const mutations = {
    GETCODE(state, result) {
        state.code = result
    },
    REGISTER(state, result) {
        state.phone = result
    }
}

const getters = {
}



export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
