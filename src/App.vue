<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/Login'
import {reqSearchInfoList} from './api'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login
  },
  mounted() {
    //买次开启网页只发出一次请求
    this.$store.dispatch('Home/categoryList')
    this.$store.dispatch('ListContainer/banner')
    console.log(reqSearchInfoList({"categoryName": "手机"}
    ));//成功
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
