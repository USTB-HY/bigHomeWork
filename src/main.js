import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import TypeNav from "./components/TypeNav";//注册全局组件，不需要再子组件中一个个引用了
Vue.component(TypeNav.name,TypeNav)
import Carsouel from "./components/Carsouel";//注册全局组件，不需要再子组件中一个个引用了
Vue.component(Carsouel.name,Carsouel)
import store from './store';
import "./mock/mockServe";
import "swiper/css/swiper.css";

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
