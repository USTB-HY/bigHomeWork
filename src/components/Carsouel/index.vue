<template>
    <div class="swiper-container" id="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in List" :key="banner.id">
                <img :src="banner.imagesURL" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        name:'Carsouel',
        props:['List'],
        mounted() {
            this.$nextTick(()=>{ //挂载的时机还是不对！！！！
                var mySwiper = new Swiper('#mySwiper', {
                    autoplay: true,
                    loop: true,
                    // 如果需要分页器
                    pagination: {
                        el: ".swiper-pagination",
                        //点击小球的时候也切换图片
                        clickable: true,
                    },
                // 如果需要前进后退按钮
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                })
            })
        }
    }
</script>

<style lang="less" scoped>

</style>