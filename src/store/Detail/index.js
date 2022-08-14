import {reqItemDetail} from '../../api'

const state = {
    goodsInfo:{}

}

const actions = {
    async getGoodsInfo({commit},skuId){
        let result = await reqItemDetail(skuId)
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
}

const mutations = {
    GETGOODSINFO(state,val) {
        state.goodsInfo = val
    },
    CLEAR(state) {
        state.goodsInfo = {}
    }
}

const getters = {
    CategoryView() {return state.goodsInfo.categoryView || {}},
    Price() { return state.goodsInfo.price || ""},
    SkuInfo() { return state.goodsInfo.skuInfo || {}},
    SpuSaleAttrList() { return state.goodsInfo.spuSaleAttrList || []},
    ValuesSkuJson() { return state.goodsInfo.valuesSkuJson || ""},
}



export default {    
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}
