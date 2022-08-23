import { reqCart } from '../../api'
import { reqAddCartList } from '../../api'
import { reqDeleteCart } from '../../api'

const state = {
    cartList:[]
}

const actions = {
    async getCartList({commit}) {
        let result = await reqCart()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    async addCartList({commit},params) {
        let result = await reqAddCartList(params)
        if (result.code == 200) {
            return 'ok'
        }else{
            result.Promise.reject('failed!')
        }
    },
    async deleteCart({commit},params) {
        let result = await reqDeleteCart(params)
        if (result.code == 200) {
            return 'ok'
        }else{
            result.Promise.reject('failed!')
        }
    },
}

const mutations = {
    GETCARTLIST(state, Val) {
        state.cartList = Val
    },
}

// const getters = {
//     CartInfoListActivity() {return state.cartList[0].cartInfoList}
// }

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    // getters
}