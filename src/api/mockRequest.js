import axios from "axios";

const requests = axios.create({
    baseURL:'/mock',
    timeout:5000
})

requests.interceptors.request.use((config)=>{
    return config
})

requests.interceptors.response.use((res)=>{
    console.log(res.data);
    return res.data
},
(err)=>{
    return Promise.reject();
})

export default requests