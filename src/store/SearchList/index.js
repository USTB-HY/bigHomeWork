import { reqSearchInfoList } from '../../api'

const state = {
    searchList: {
        attrsList: [],
        goodsList: [],
        pageNo: undefined,
        pageSize: undefined,
        total: undefined,
        totalPages: undefined,
        trademarkList: []
    },
    searchParams: {
        "category1Id": "",
        "category2Id": "",
        "category3Id": "",
        "categoryName": "",
        "keyword": "",
        "order": "",
        "pageNo": undefined,
        "pageSize": undefined,
        "props": [],
        "trademark": "",
    },
}

const actions = {
    searchList(context) {
        context.commit('SEARCHLIST', reqSearchInfoList(context.state.searchParams))
    },
}

const mutations = {
    SEARCHLIST(state, promiseVal) {
        promiseVal.then((data) => {
            state.searchList = data.data
            console.log(state.searchList,11);
        })
    },
    SEARCHPARAMS(state, val) {
        state.searchParams.category1Id = val.query.category1Id
        state.searchParams.category2Id = val.query.category2Id
        state.searchParams.category3Id = val.query.category3Id
        state.searchParams.categoryName = val.query.categoryName
        state.searchParams.keyword = val.params.k
        state.searchParams.pageNo = val.params.pageNo
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
