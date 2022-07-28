import requests from "./request";

//请求地址

export const reqCategoryList = () =>requests({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })