// eslint-disable-next-line vue/valid-template-root
<template>
    <section class="wrapper" @mouseover="enter" @mouseleave="leave">
        <swiper class="swiper-wrapper" ref="mySwiper" :options="swiperOptions">
            <swiper-slide><LeftCenter /></swiper-slide>
            <swiper-slide><Org /></swiper-slide>
            <swiper-slide><LeftRight /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
import Org from './chart/org.vue'
import LeftCenter from './chart/leftCenter.vue'
import LeftRight from './chart/leftRight.vue'
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name: 'LeftScreen',
    components: {
        swiper,
        swiperSlide,
        Org,
        LeftCenter,
        LeftRight
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'my-bullet', // 需设置.my-bullet样式
                    bulletActiveClass: 'my-bullet-active',
                    renderBullet(index, className) {
                        return `<span class="${className} swiper-pagination-bullet-custom">${(index + 1)}</span>`
                    // toChinesNum这个方法参照我的公用方法上面链接
                    }

                },
                autoplay: {
                    delay: 1000 * 10,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }
            }
        }
    },
    directives: {
        swiper: directive
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {

    },
    methods: {
        enter() {
            this.swiper.autoplay.stop()
        },
        leave() {
            this.swiper.autoplay.start()
        }
    }

}
</script>

<style lang="scss" scoped>
.chart-wrapper{
    width:300px;
    height:300px;
    border:1px solid green
}
.wrapper{
    width:5600px;
    height:2100px;
    box-sizing: border-box;
    background-image: url('../../assets/img/newScreen/left_bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    &:after{
        content:'';
        width:5600px;
        position: absolute;
        height:702px;
        top:50%;
        left:0;
        margin-top:-351px;
        background-image: url('../../assets/img/newScreen/wave.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }
}
.swiper-wrapper{
    width:5600px;
    height:2100px;
    overflow: hidden;
}
.swiper-slide{
    width:5600px;
    height:2100px;
    font-size:100px;
    color:#fff;
}
.swiper-pagination{
    top:30px;
    bottom:auto;
    text-align: right;
    padding-right:30px;
}
.wrapper /deep/ .my-bullet.swiper-pagination-bullet-custom{
    display: inline-block;
    width:50px;
    height:50px;
    line-height: 50px;
    text-align: center;
    border-radius:50%;
    background-color:rgba(0,0,0,.5);
    font-size:40px;
    color:#fff;
    cursor: pointer;
    margin:0 30px;
}
.wrapper /deep/ .my-bullet.my-bullet-active{
    background-color:#1ee3f3;
    color:#000;
}
</style>
