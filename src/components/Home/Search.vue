<template>
<!-- 购物车首页的界面的输入框 -->
<div class="searchbody">
  <div style="display:flex">
    <img src="@/assets/shoppingbar.png" alt="" width="90px" height="90px">
    <input type="text" class="input" placeholder="搜索">
    <button class="search">搜索</button>
  </div>
</div>
</template>

<script>
  export default {
    name: 'search',
  }
</script>

<style>
  .input{
    width:700px;
    height:50px;
    margin-top:25px;
    margin-left:5%;
    border:3px rgb(31, 158, 216) solid
  }
  .search{
    width:150px;
    height:50px;
    margin-top:25px;
    background:rgb(145, 145, 245);
    border:none;
    color:#fff;
    font-size:16px;
    padding:10px
  }
</style>