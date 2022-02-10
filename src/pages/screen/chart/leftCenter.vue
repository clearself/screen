<template>
    <div class="container">
        <div class="ub w100 ub-pc ub-ac title">
            <div class="title-left"></div>
            <div class="title-center">标签体系建设背景</div>
            <div class="title-right"></div>
        </div>
        <div class="ub ub-ac ub-pc main-content">
            <div class="main-item">
                <div class="pdf floating">
                    <img src="../../../assets/img/newScreen/pdf1.jpg" alt="">
                </div>
                <div class="pdf-title">指导意见发布</div>
                <div class="year">2020</div>
                <div class="text">2020年国网公司互联网部明确标签体系建设总体架构及要求</div>
                <div class="h-line">
                    <i><span></span></i>
                    <span></span>
                </div>
            </div>
            <div class="main-item">
                <div class="pdf floating">
                    <img src="../../../assets/img/newScreen/pdf2.jpg" alt="">
                </div>
                <div class="pdf-title">试点单位推广</div>
                <div class="year">2020</div>
                <div class="text">2020年在重庆、安徽等省公司开展标签试点建设</div>
                <div class="h-line">
                    <i><span></span></i>
                    <span></span>
                </div>
            </div>
            <div class="main-item">
                <div class="pdf floating">
                    <img src="../../../assets/img/newScreen/pdf3.jpg" alt="">
                </div>
                <div class="pdf-title">工作内容强调</div>
                <div class="year">2021</div>
                <div class="text">2021年互联网专业工作会上强调标签建设</div>
                <div class="h-line">
                    <i><span></span></i>
                    <span></span>
                </div>
            </div>
            <div class="main-item">
                <div class="pdf floating">
                    <img src="../../../assets/img/newScreen/pdf4.jpg" alt="">
                </div>
                <div class="pdf-title">重点工作通知</div>
                <div class="year">2021</div>
                <div class="text">2021年明确推进标签中心基础服务能力深化建设</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftCenter',
    data() {
        return {}
    },

    mounted() {
        this.$nextTick(() => {

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
    align-items: center;
}

.ub-pc {
    justify-content: center;
}
.container{
    width:100%;
    height:100%;
}
.left{
    width:2780px;
    height:1880px;
}
.title{
    margin-bottom:40px;
    margin:190px auto 58px;
    .title-left{
        width:360px;
        height:42px;
        background-image: url('../../../assets/img/newScreen/title_left.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }
    .title-center{
        margin:0 30px;
        font-family: JLinXin;
        font-size: 40px;
        line-height: 15px;
        letter-spacing: 4px;
        color: #ffffff;
    }
    .title-right{
        width:360px;
        height:42px;
        background-image: url('../../../assets/img/newScreen/title_right.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }
}
.main-content{
    width: 5572px;
    height: 1798px;
    margin:0 auto;
    background-color: rgba(0,0,0,.2);
}
.main-item{
    width:692px;
    height:1350px;
    margin:0 320px;
    position: relative;
    .pdf{
        width: 592px;
        height: 840px;
        position: absolute;
        left:50%;
        top:0;
        margin-left:-296px;
        padding:5px;
        background-image: url(../../../assets/img/newScreen/pdf_img.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        img{
            display: block;
            width:100%;
            height:100%;
        }
    }
    .pdf-title{
        width: 1070px;
        height: 114px;
        line-height: 138px;
        position: absolute;
        left:50%;
        top:882px;
        font-family: PingFang-SC-Regular;
        font-size: 46px;
        color: #ffffff;
        text-shadow: 0px 0px 10px #0099ff;
        transform: translate(-50%);
        background-image: url(../../../assets/img/newScreen/pdf_title.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .year{
        width: 505px;
        height: 160px;
        line-height: 244px;
        position: absolute;
        left:50%;
        top:996px;
        font-size: 46px;
        color: #ffffff;
        text-shadow: 0px 0px 10px #0099ff;
        transform: translate(-50%);
        background-image: url(../../../assets/img/newScreen/pdf_year.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .text{
        width: 345px;
        position: absolute;
        left:50%;
        bottom:0;
        transform: translate(-50%);
        font-family: PingFang-SC-Regular;
        font-size: 38px;
        line-height: 50px;
        color: #ffffff;
    }
    .h-line{
        width: 847px;
        height: 2px;
        background-color: #2f8bb2;
        position: absolute;
        left: 85%;
        bottom: 233px;
        >i{
            width:30px;
            height:30px;
            position: absolute;
            left:0;
            top:50%;
            margin-top:-15px;
            -webkit-animation: leftAnimation 10s linear infinite;
                animation: leftAnimation 10s linear infinite;
                font-size:0;

            >span{
                width:100%;
                height:100%;
                display: inline-block;
                background-color:#1debff;
                border-radius:50%;
                -webkit-animation: myAnimation 1.5s linear infinite;
                animation: myAnimation 1.5s linear infinite;
            }
        }
        >span{
            width: 70px;
            height: 52px;
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            background-image: url(../../../assets/img/newScreen/qianjin.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }
}

.floating{
    animation-name: floating;
    -webkit-animation-name: floating;

    animation-duration: 1.5s;
    -webkit-animation-duration: 1.5s;

    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;

}
@-webkit-keyframes leftAnimation {
  0% {
    left: 0;;
  }
  100% {
    left: 100%;
  }
}

@keyframes leftAnimation {
  0% {
    left: 0;;
  }
  100% {
    left: 100%;
  }
}
@-webkit-keyframes myAnimation {
  0% {
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
}

@keyframes myAnimation {
  0% {
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
@keyframes floating {
    0% {
        -webkit-transform: translateY(0%);
        transform: translateY(0%);
    }
    50% {
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
    }
    100% {
        -webkit-transform: translateY(0%);
        transform: translateY(0%);
    }
}

@-webkit-keyframes floating {
0% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
}
50% {
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
}
100% {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
}
}
</style>
