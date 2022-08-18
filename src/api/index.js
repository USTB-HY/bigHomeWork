import requests from "./request";
import mockRequests from "./mockRequest";

//请求地址

export const reqCategoryList = () =>requests({
    url:'/product/getBaseCategoryList',
    method:'GET'
})

export const reqItemDetail = (val) =>requests({
    url:`/item/${val}`,
    method:'GET'
})//捞Detail的接口

export const mockReqBanner = () =>mockRequests({
    url:'/banner',
    method:'GET'
})

export const reqSearchInfoList = (params) =>requests({
    url:'/list',
    method:'post',
    data:params //data指明传输的数据对象，必记住    这里params至少是个空对象
})

export const reqRegister = (params) =>requests({
    url:'/user/passport/register',
    method:'post',
    data:params //data指明传输的数据对象，必记住    这里params至少是个空对象
})

export const reqCode = (params) =>requests({
    url:'/user/passport/sendCode/'+params,
    method:'GET'
})

export const reqLogin = (params) =>requests({
    url:'/user/passport/login',
    method:'Post',
    data:params
})

export const reqUserInfo = () =>requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get',
})

