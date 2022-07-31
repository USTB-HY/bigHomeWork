import { reqSearchInfoList } from '../../api'

const state = {
    searchList: {
        attrsList: [],
        goodsList: [],
        pageNo: 1,
        pageSize: 10,
        total: null,
        totalPages: null,
        trademarkList: []
    },
    searchParams: {
        "category1Id": "",
        "category2Id": "",
        "category3Id": "",
        "categoryName": "",
        "keyword": "",
        "order": "",
        "pageNo": 1,
        "pageSize": 10,
        "props": [],
        "trademark": "",
    },
}

const actions = {
    searchList(context, params) {
        context.commit('SEARCHLIST', reqSearchInfoList(params))
    },
}

const mutations = {
    SEARCHLIST(state, promiseVal) {
        promiseVal.then((data) => {
            state.searchList = data.data
            console.log('返回参数');
        })
    },
}

const getters = {}



export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
