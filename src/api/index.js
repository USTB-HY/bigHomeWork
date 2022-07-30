import requests from "./request";
import mockRequests from "./mockRequest";

//请求地址

export const reqCategoryList = () =>requests({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })

export const mockReqBanner = () =>mockRequests({
    url:'/banner',
    method:'GET'
})