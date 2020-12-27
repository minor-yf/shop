<template>
    <!-- 轮播图 -->
    <Carousel autoplay v-model="value2" loop >
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/1.png" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/2.png" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/3.png" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
        name:'carousel',
        data () {
            return {
                value2: 0,
                autoplaySpeed: 3000,
                trigger: 'hover',
                arrow: 'hover'
            }
        }
    }
</script>