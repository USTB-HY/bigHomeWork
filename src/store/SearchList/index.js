import { reqSearchInfoList } from '../../api'

const state = {
    searchList: {
        attrsList: [],
        goodsList: [],
        pageNo: 1,
        pageSize: 10,
        total: undefined,
        totalPages: undefined,
        trademarkList: []
    },
}

const actions = {
    async searchList({commit},params) {
        let result = await reqSearchInfoList(params)
        if (result.code == 200) {
            commit('SEARCHLIST', result.data)
        }
    },
}

const mutations = {
    SEARCHLIST(state, Val) {
        state.searchList = Val
    },
}

const getters = {
    AttrsList(){ return state.searchList.attrsList },
    GoodsList(){ return state.searchList.goodsList },
    PageNo() { return state.searchList.pageNo},
    PageSize() { return state.searchList.pageSize},
    Total() { return state.searchList.total},
    TotalPages() { return state.searchList.totalPages},
    TrademarkList() { return state.searchList.trademarkList},
}



export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
