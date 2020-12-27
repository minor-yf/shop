<template>
  <!-- home的可视主体 -->
  <div class="homebody">
    <navtop/>
    <div style="clear:both"></div>
    
    <search class="searchstyle"></search>
    <midmenu></midmenu>
    
    <router-view/>
    <div class="bottom">联系我：1170688799@qq.com 版权所有</div>
  </div>
</template>

<script>

import navtop from '@/components/navtop.vue'
import search from '@/components/Home/Search.vue'
import midmenu from '@/components/Home/MidMenu.vue'

export default {
  name: 'Home',
  props: {
  },
  components: {
      navtop,
      search,
      midmenu,
  }
}
</script>

<style>
  .homebody{
    margin-left: 8%;
    margin-right:8%;
  }
  .searchstyle{
    margin:20px 10% 0 10%;
  }
  .bottom{
    margin-top:10px;
  }
</style>