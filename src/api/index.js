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

export const reqSearchInfoList = (params) =>requests({
    url:'/list',
    method:'post',
    data:params //data指明传输的数据对象，必记住    这里params至少是个空对象
})