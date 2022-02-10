<template>
    <div class="ub w100">
        <div class="ub ub-ae order">NO.{{order}}</div>
        <div class="ub ub-f1 ub-ver">
            <div class="ub ub-pj ub-ac w100 title-wrapper">
                <div class="title">{{obj.name}}</div>
                <div class="num">{{obj.num}}</div>
            </div>
            <div class="process-line">
                <span ref="span-obj" :class="{'active':obj.precent > 0&&onOff}"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Process',
    props: {
        obj: {
            type: Object,
            default: null
        },
        order: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            onOff: false
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.onOff = true
        // }, 2000)
        this.$nextTick(() => {
            if (this.obj.precent > 0) {
                // transition: all 0.5s ease-in;
                setTimeout(() => {
                    this.onOff = true
                    this.$refs['span-obj'].style.width = this.obj.precent + '%'
                }, 100)
            }
        })
    },
    methods: {
        init() {

        }
    }
}
</script>

<style scoped lang="scss">
    .ub {
        display: flex;
        position: relative;
    }
    .ub-ac {
        align-items:center;
    }

    .ub-pc {
        justify-content:center;
    }
    .order{
        width:90px;
        font-family: MicrosoftYaHei;
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 15px;
        letter-spacing: 0px;
        color: #ffffff;
        text-shadow: 0px 0px 10px
        #3085fd,
        0px 0px 10px
        #3085fd;
    }
    .title-wrapper{
        height:30px;
        margin-bottom:10px;
        .title{
            font-family: MicrosoftYaHei;
            font-size: 26px;
            letter-spacing: 3px;
            color: #ffffff;
            opacity: 0.7;
        }
        .num{
            font-family: MicrosoftYaHei;
            font-size: 34px;
            color: #ffffff;
            text-shadow: 0px 0px 10px
                #3085fd,
                0px 0px 10px
                #3085fd;
        }
    }
    .process-line{
        width:100%;
        height:16px;
        border-radius:8px;
        position: relative;
        background-color: #082d5c;
        span{
            position: absolute;
            width:0;
            left:0;
            top:0;
            height:100%;
            border-radius:8px;
            background-image: linear-gradient(
            #2f84fe,
            #2f84fe),
            linear-gradient(
            #35fdf3,
            #35fdf3);
            background-blend-mode: normal,
            normal;
            transition:all 0.5s ease-in;
            &.active:after{
                content:'';
                position:absolute;
                right:-9px;
                top:-10px;
                width: 34px;
                height: 34px;
                background-image: url('../../../assets/img/newScreen/dian.png');
                background-repeat: no-repeat;
                background-position:0 0;
                background-size:100% 100%;
            }
        }

    }
</style>
