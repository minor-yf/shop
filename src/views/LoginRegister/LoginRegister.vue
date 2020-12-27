<template>
  <div class="background">
    <navtop/>
    <div style="clear:both"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import navtop from '@/components/navtop.vue'

  export default {
    name: 'LoginRegister',
    components: {
      navtop, 
    },
  }

</script>

<style >
  .background{
    text-align: center;
    margin-left: 10%;
    margin-right:10%;
    background:url('../../assets/login-body.jpg') ;
    background-size: 100% 100%;
    height: 70%;
    position: fixed;
    width: 84%;
  }
</style>