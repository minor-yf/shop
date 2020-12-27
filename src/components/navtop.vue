<template>
  <!-- 顶部 -->
  <div class="body">
    <div v-if=" username == null" style="float:left">
      <router-link to="/" class="text_left" >游客 , 请登录</router-link>
      <router-link to="/register" class="text_left" style="margin-left:20px" >注册</router-link>
    </div>
    
    <div v-if=" username != null" style="float:left">
      <span class="text_left">欢迎您! {{username}}</span>
      <a class="text_left" style="margin-left:10px" @click="loginOut()">退出登录</a>
    </div>

    <div  class="text_right"><icon name="shopping-cart" class="top" /><router-link to="/home/shoppingcart" style="color:blue">购物车</router-link></div>
    <div  class="text_right"><icon name="home" class="top" /><router-link name="user" to="/home" style="color: rgb(43, 211, 99);">商城首页</router-link></div>
    <div  class="text_right"><icon name="heart" class="top" /><a @click="task" style="color:grey">欢迎光临本数码商城</a></div>
  </div>
</template>

<script>
export default {
  name: 'navtop',
  data () {
    return {
      username : '',
    }
  },
  methods:{
    loginOut(){
      localStorage.removeItem("username")
      this.$router.go(0)
    },
    task(){
      this.$Message.info({
        content: '....欢迎光临本数码商城....',
        duration: 3,
        background: true,
        closable: true
      });
    }
  },
  // 从浏览器（localstrong）中取出用户名
  created(){
    this.username = localStorage.getItem('username')
  }
}
</script>

<style>
  .top{
    color:rgb(0, 0, 0);
    padding-right:5px;
    height:14px
  }
  .body{
    margin-top: 5px;
    text-align: left;
  }
  .text_left{
    font-size: 14px;
    color: red;
    font-weight: bold;
  }
  .text_right{
    font-size: 14px;
    font-weight: bold;
    float: right;
    margin-left: 10px;
  }
</style>