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
import axios from "axios";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login
  },

  //测试发出请求
  beforeMount() {
    let a = axios({
      method:'GET',
      url:'https://api.github.com/search/users?q=123'
    }).then(
      response=>{
      console.log(response);
      },      
      error=>{
        console.log(error.code);
      }
    )
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
