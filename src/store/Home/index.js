import {reqCategoryList} from '../../api'

const state = {
    categoryList:[]
}

const actions = {
    categoryList() {
        commit('categoryList')
    }
}

const mutations = {
    categoryList() {
        // reqCategoryList().then(function(data){
        //         console.log(data);
        //     })
        console.log(1);
    }
}

const getters = {}



export default {    
    namescaped:true,
    state,
    actions,
    mutations,
    getters,
}
