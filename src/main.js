import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import TypeNav from "./components/TypeNav";//注册全局组件，不需要再子组件中一个个引用了
Vue.component(TypeNav.name,TypeNav)
import store from './store';

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
