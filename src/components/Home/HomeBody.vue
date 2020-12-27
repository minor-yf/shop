<template>
  <div>
    <carousel></carousel>
    <bodyItem1></bodyItem1>
    <bodyItem2></bodyItem2>
    <div style="padding-top:50px;"><Divider>到底了</Divider></div>
  </div>
</template>

<script>
import carousel from '@/components/Home/Carousel.vue'
import bodyItem1 from '@/components/Home/BodyItem1.vue'
import bodyItem2 from '@/components/Home/BodyItem2.vue'
export default {
  name: 'HomeBody',
  components: {
      carousel,
      bodyItem1,
      bodyItem2
  },
}
</script>

<style scoped>

</style>