import { reqLogin, reqUserInfo } from "../../api";

const state = {
    token:'',
    userInfo:{},
    loginError:''
}

const actions = {
    async login({commit},params) {
        let result = await reqLogin(params) 
        if (result.code == 200) {
            commit('LOGIN',result.data.token)
        }else{
            commit('ERROR',result.massage)
        }
    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo() 
        if (result.code == 200) {
            commit('GETUSERINFO',result.data)
        }else{
            commit('ERROR',result.massage)
        }
    },
    logout({commit}){
        commit('LOGOUT')
    }
}

const mutations = {
    LOGIN(state,val) {
        state.token= val
        localStorage.setItem('token',val)
    },
    GETUSERINFO(state,val) {
        state.userInfo = val
    },
    ERROR(state,val) {
        state.loginError = val
    },
    LOGOUT(state) {
        state.userInfo = {}
        state.token = ''
        localStorage.removeItem('token')
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}