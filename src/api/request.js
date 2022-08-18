import store from "@/store";
import axios from "axios";

const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})

requests.interceptors.request.use((config)=>{
    // if (store.state.Login.token) {
    //     config.headers.token = store.state.Login.token
    // }
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    return config
})

requests.interceptors.response.use((res)=>{
    return res.data
},
(err)=>{
    return Promise.reject();
})

export default requests