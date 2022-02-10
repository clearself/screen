<template>
    <section class="wrapper">
        <div class="ub ub-pc header-top">
            <!-- <dv-decoration-1 style="width:400px;height:100px;margin:4px 0px 0px -168px;" /> -->
            <span>国网重庆公司标签体系监测大屏</span>
        </div>
        <div class="ub w100 main">
            <div class="ub ub-ver left">
                <div class="ub w100 ub-pc ub-ac title">
                    <div class="title-left"></div>
                    <div class="title-center">标签画像</div>
                    <div class="title-right"></div>
                </div>
                <div class="ub black-bg content-box">
                    <div class="ub ub-ac ub-pc ub-ver left-nav">
                        <div class="ub ub-ac" :class="{'active':left_nav_status===0}" @click="changeNav(0)" >客户标签</div>
                        <div class="ub ub-ac center" :class="{'active':left_nav_status===1}" @click="changeNav(1)">设备标签</div>
                        <div class="ub ub-ac" :class="{'active':left_nav_status===2}" @click="changeNav(2)">供应商标签</div>
                    </div>
                    <div class="ub ub-ac word-box">
                        <div class="word-inner">
                            <div class="word-list" :class="{'one':left_nav_status===0,'two':left_nav_status===1,'three':left_nav_status===2}">
                                <div>
                                    <div class="word-clound two">
                                        <i class="iconfont icon-kehu-kehuxinxi"></i>
                                        <word-clound :chartData="pieTwoData" :type="1" />
                                    </div>
                                    <div class="word-clound two">
                                        <i class="iconfont icon-kehuqunzu"></i>
                                        <word-clound :chartData="pieTwoData" :type="2" />
                                    </div>
                                </div>
                                <div>
                                    <div class="word-clound three">
                                        <i class="iconfont icon-biandianshebei"></i>
                                        <word-clound :chartData="pieTwoData" :type="3" />
                                    </div>
                                    <div class="word-clound three">
                                        <i class="iconfont icon-peidianshebei"></i>
                                        <word-clound :chartData="pieTwoData" :type="4" />
                                    </div>
                                    <div class="word-clound three">
                                        <i class="iconfont icon-zidonghuashebei"></i>
                                        <word-clound :chartData="pieTwoData" :type="5" />
                                    </div>
                                </div>
                                <div>
                                    <div class="word-clound one">
                                        <i class="iconfont icon-gongyingshangbiaoqian"></i>
                                        <word-clound :chartData="pieTwoData" :type="6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="ub w100 ub-pc ub-ac title">
                    <div class="title-left"></div>
                    <div class="title-center">统计分析</div>
                    <div class="title-right"></div>
                </div>
                <div class="ub ub-f1 black-bg content-box center-content">
                    <div class="ub ub-ver center-left">
                        <div class="center-left-top">
                            <div class="ub ub-pc w100 center-left-top-title">标签点击top图（单位：次）</div>
                            <div class="center-left-top-chart">
                                <div class="w100" v-for="(item,index) in list" :key="index">
                                    <Process :obj="item" :order="index+1" />
                                </div>
                            </div>
                        </div>
                        <div class="center-left-bottom w100">
                            <div class="ub ub-ac w100 center-left-bottom-title">
                                <div><i></i><span>客户标签</span></div>
                                <div><i></i><span>商标签</span></div>
                                <div><i></i><span>设备标签</span></div>
                            </div>
                            <div class="center-left-bottom-chart">
                                <Bubble />
                            </div>
                        </div>
                    </div>
                    <div class="center-right">
                        <div class="center-right-top w100">
                            <SingleLine v-if="s_line_no_data" :chartData="s_lineData"  :isData="s_line_no_data" />
                        </div>
                        <div class="center-right-bottom w100">
                            <BrokenLine v-if="line_no_data" :chartData="lineData"  :isData="line_no_data" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="ub w100 ub-pc ub-ac title">
                    <div class="title-left"></div>
                    <div class="title-center">标签管理</div>
                    <div class="title-right"></div>
                </div>
                <div class="ub ub-f1 black-bg content-box right-content">
                    <div class="ub ub-ver right-left">
                        <div class="right-left-top">
                            <img style="width:100%;height:100%;" src="@/assets/img/newScreen/top_flow.png" alt="">
                        </div>
                        <div class="right-left-bottom w100">
                            <img style="width:100%;height:100%;" src="@/assets/img/newScreen/bottom_flow.png" alt="">
                        </div>
                    </div>
                    <div class="right-right">
                        <div
                            class="box-item left"
                            :class="{
                                'up':isLeftUp,
                                'down':!isLeftUp
                            }"
                            @click="changeUpDown(1)">
                            <div class="box-item-top">传统业务应用流程</div>
                            <div class="ub ub-ver ub-ac box-item-bottom">
                                <span class="angle1"></span>
                                <span class="angle2"></span>
                                <span class="angle3"></span>
                                <span class="angle4"></span>
                                <div class="ub ub-ac box-item-bottom-item"><i></i><span>业务应用场景确立</span></div>
                                <div class="ub ub-ac box-item-bottom-item"><i></i><span>需求分析</span></div>
                                <div class="ub ub-ac box-item-bottom-item left"><i></i><span>数据范围分析</span></div>
                                <div class="ub ub-ac box-item-bottom-item left"><i></i><span>数据收集</span></div>
                                <div class="ub ub-ac box-item-bottom-item left"><i></i><span>数据分析模型设计</span></div>
                                <div class="ub ub-ac box-item-bottom-item"><i></i><span>模型与应用关联</span></div>
                            </div>
                        </div>
                        <div
                            class="box-item right"
                            :class="{
                                'up':!isLeftUp,
                                'down':isLeftUp
                            }"
                            @click="changeUpDown(2)">
                            <div class="box-item-top">业务应用结合标签数据流程</div>
                            <div class="ub ub-ver ub-ac box-item-bottom right">
                                <span class="angle1"></span>
                                <span class="angle2"></span>
                                <span class="angle3"></span>
                                <span class="angle4"></span>
                                <div class="ub ub-ac box-item-bottom-item "><i></i><span>业务应用场景确立</span></div>
                                <div class="ub ub-ac box-item-bottom-item right-item"><i></i><span>需求分析</span></div>
                                <div class="ub ub-ac box-item-bottom-item right right-item"><i></i><span>确认标签数据需求</span></div>
                                <div class="ub ub-ac box-item-bottom-item right right-item"><i></i><span>标签数据调用</span></div>
                                <div class="ub ub-ac box-item-bottom-item "><i></i><span>模型与应用关联</span></div>
                            </div>
                        </div>
                        <div class="time-tips">节省时间</div>
                        <dv-decoration-9 :dur="8" class="box-item-center">40%</dv-decoration-9>
                        <div class="box-item-top-arraw" :class="{'active':isLeftUp}"></div>
                        <div class="box-item-bottom-arraw" :class="{'active':isLeftUp}"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BrokenLine from './chart/brokenLine.vue'
import SingleLine from './chart/singleLine.vue'
import WordClound from '@/pages/screen/chart/wordClound.vue'
import Process from '@/pages/screen/chart/process.vue'
import Bubble from '@/pages/screen/chart/bubble.vue'
export default {
    name: 'MiddleScreen',
    components: {
        SingleLine,
        BrokenLine,
        WordClound,
        Process,
        Bubble
    },
    data() {
        return {
            line_no_data: false,
            lineData: [],
            s_line_no_data: false,
            s_lineData: [],
            pieOneData: [],
            pieTwoData: [],
            left_nav_status: 0,
            list: [],
            isLeftUp: true,
            timer1: null,
            timer2: null

        }
    },
    mounted() {
        this.initLine()
        this.initSLine()
        this.initT0p10()
        this.timer1 = setInterval(() => {
            this.initLine()
        }, 10 * 1000)
        this.timer1 = setTimeout(() => {
            this.timer1 = setInterval(() => {
                this.initSLine()
            }, 10 * 1000)
        }, 5 * 1000)
    },
    beforeDestroy() {
        if (this.timer1) {
            clearInterval(this.timer1)
            this.timer1 = null
        }
        if (this.timer2) {
            clearInterval(this.timer2)
            this.timer1 = null
        }
        if (this.timer3) {
            clearTimeout(this.timer3)
            this.timer3 = null
        }
    },
    methods: {
        changeUpDown(status) {
            if (status === 1 && this.isLeftUp) {
                this.isLeftUp = false
            }
            if (status === 2 && !this.isLeftUp) {
                this.isLeftUp = true
            }
        },
        initT0p10() {
            let data = [
                {
                    name: '区域空置率检测_重庆部分地区空置率检测',
                    num: 1980
                }, {
                    name: '大客户健康指数_实际功率因数不考核客户',
                    num: 1800
                }, {
                    name: '区域空置率检测_重庆区县空置率检测',
                    num: 1000
                }, {
                    name: '设备异常化运维_输入数据异常',
                    num: 1000
                }, {
                    name: '设备异常化运维_异常设备',
                    num: 800
                }, {
                    name: '大客户健康指数_实际功率因数低客户',
                    num: 800
                }, {
                    name: '设备异常化运维_正常设备',
                    num: 700
                }, {
                    name: '大客户健康指数_实际功率因数中客户',
                    num: 500
                }, {
                    name: '大客户健康指数_实际功率因数高客户',
                    num: 500
                }
            ]
            let total = data.reduce((pre, cur) => {
                return pre + cur.num
            }, 0)
            this.list = data.map(item => {
                item.precent = parseInt(item.num / total * 100)
                return item
            })
            console.log('total', total)
        },
        changeNav(status) {
            this.left_nav_status = status
        },
        initLine() {
            this.lineData = []
            this.line_no_data = false
            let data = [
                {
                    day: '1210',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 23
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 45
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 25
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 65
                        }
                    ]
                },
                {
                    day: '1211',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 64
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 73
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 43
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 56
                        }
                    ]
                },
                {
                    day: '1212',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 43
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 74
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 34
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 52
                        }
                    ]
                },
                {
                    day: '1213',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 63
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 75
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 57
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 36
                        }
                    ]
                },
                {
                    day: '1214',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 53
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 15
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 73
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 47
                        }
                    ]
                },
                {
                    day: '1215',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 86
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 76
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 146
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 73
                        }
                    ]
                },
                {
                    day: '1216',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 84
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 23
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 58
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 17
                        }
                    ]
                },
                {
                    day: '1217',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 23
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 93
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 39
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 65
                        }
                    ]
                },
                {
                    day: '1218',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 63
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 47
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 35
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 61
                        }
                    ]
                },
                {
                    day: '1219',
                    list: [
                        {
                            name: '标签总调用频次与日期',
                            num: 23
                        },
                        {
                            name: '发展专业调用频次与日期',
                            num: 23
                        },
                        {
                            name: '营销专业调用频次与日期',
                            num: 34
                        },
                        {
                            name: '设备专业调用频次与时间',
                            num: 66
                        }
                    ]
                }
            ]
            setTimeout(() => {
                this.line_no_data = true
                this.lineData = data
            }, 200)
        },
        initSLine() {
            this.s_lineData = []
            this.s_line_no_data = false
            let data = [
                {
                    day: '1201',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 23
                        }
                    ]
                },
                {
                    day: '1202',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 64
                        }
                    ]
                },
                {
                    day: '1203',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 43
                        }
                    ]
                },
                {
                    day: '1204',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 63
                        }
                    ]
                },
                {
                    day: '1205',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 53
                        }
                    ]
                },
                {
                    day: '1206',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 86
                        }
                    ]
                },
                {
                    day: '1207',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 84
                        }
                    ]
                },
                {
                    day: '1208',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 23
                        }
                    ]
                },
                {
                    day: '1209',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 63
                        }
                    ]
                },
                {
                    day: '1210',
                    list: [
                        {
                            name: '变更数量与日期',
                            num: 23
                        }
                    ]
                }
            ]
            setTimeout(() => {
                this.s_line_no_data = true
                this.s_lineData = data
            }, 200)
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
    width:9800px;
    height:2100px;
    padding:0 56px;
    box-sizing: border-box;
    background-image: url('../../assets/img/middle_bg.jpg');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 9800px 2100px;
}
.header-top{
    width:3280px;
    height:190px;
    margin:0 auto;
    background-image: url('../../assets/img/newScreen/top_bg.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 3280px 190px;
    span{
        position: absolute;
        width:800px;
        left:50%;
        top:17px;
        margin-left:-400px;
        color:#fff;
        text-align: center;
        font-size: 42px;
        font-weight: 600;
    }
}
.main{
    margin-top:30px;
}
.left{
    width:2780px;
    height:1880px;
}
.title{
    margin-bottom:20px;
    .title-left{
        width:360px;
        height:42px;
        background-image: url('../../assets/img/newScreen/title_left.png');
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
        background-image: url('../../assets/img/newScreen/title_right.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }
}
 .black-bg{
        background-color: rgba(0,0,0,.2);
    }
.content-box{
    width:100%;
    height:1798px;
}

.center{
    width: 2992px;
    height:1800px;
    margin:0 56px;
}
.right{
    width: 3804px;
    height:1800px;
}
.left-nav{
    width:223px;
    height:100%;
    >div{
        width:99px;
        height: 467px;
        font-family: MicrosoftYaHei;
        font-size: 45px;
        letter-spacing: 6px;
        color: rgba(255,255,255,.5);
        cursor: pointer;
        background-image: url('../../assets/img/newScreen/nav_btn_bg_active.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
        &.center{
            margin:40px 0;
        }
        &.active{
            font-family: MicrosoftYaHei-Bold;
            color: #ffffff;
            background-image: url('../../assets/img/newScreen/nav_btn_bg.png');
        }
    }
}
.word-box{
    .word-inner{
        width:2500px;
        height:1700px;
        position: relative;
        overflow: hidden;
        >div{
            width:100%;
            height:4680px;
            position: absolute;
            left:0;
            top:-1560px;
            transition: all .3s linear;
            &.one{
                top:0px;
            }
            &.two{
                top:-1700px;
            }
            &.three{
                top:-3400px;
            }
            >div{
             width:2500px;
            }
        }
    }
}
.word-clound{
    padding-top:67px;
    height:1700px;
    box-sizing: border-box;
    border:1px solid #0096ff;
    position: relative;
     &.one{
        font-size:0;
         &:before{
            content:'供应商主体';
            font-size:28px;
            color:#fff;
            line-height: 44pxs;
        }
        >i{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            font-size:350px;
            color: #00fffc;
            opacity: 0.1;
        }
    }
    &.two{
        height:850px;
        font-size:0;
        &:nth-child(1):before{
            content:'自然人客户';
            font-size:28px;
            color:#fff;
            line-height: 44pxs;
        }
         &:nth-child(2):before{
            content:'组织客户';
            font-size:28px;
            color:#fff;
            line-height: 44pxs;
        }
        >i{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            font-size:350px;
            color: #00fffc;
            opacity: 0.1;
        }
    }
    &.three{
        height:566px;
        font-size:0;
        &:nth-child(1):before{
            content:'变电设备';
            font-size:28px;
            color:#fff;
            line-height: 44pxs;
        }
        &:nth-child(2):before{
            content:'配电设备';
            font-size:28px;
            color:#fff;
            line-height: 44pxs;
        }
        &:nth-child(3):before{
            content:'自动化设备';
            font-size:28px;
            color:#fff;
            line-height: 44pxs;
        }
        >i{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            font-size:350px;
            color: #00fffc;
            opacity: 0.1;
        }
    }
    &::before{
        content:' ';
        width:285px;
        height:67px;
        position: absolute;
        left:50%;
        top:0;
        transform: translateX(-50%);
        background-image: url('../../assets/img/newScreen/word_top_bg.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }
}
.center-content{
    padding:50px;
    box-sizing: border-box;
}
.center-left{
    width:1568px;
    margin-right:113px;
}
.center-left-top-title{
    font-family: MicrosoftYaHei;
    font-size: 24px;
    line-height: 60px;
    color: #ffffff;
}
.center-left-top-chart{
    width:100%;
    height: 900px;
    >div{
        margin-bottom:43px;
    }
    >div:last-child{
        margin-bottom:0px;
    }
}
.center-left-bottom-title{
    height:30px;
    >div{
        margin-right:23px;
        i{
            display: inline-block;
            width:14px;
            height:14px;
            border-radius:50%;
        }
        span{
            font-family: MicrosoftYaHei;
            font-size: 22px;
            color: #ffffff;
            margin-left:5px;
        }
    }
    >div:nth-child(1){
        i{
            background-color:#2399ff;
        }
    }
     >div:nth-child(2){
        i{
            background-color:#e3ab3e;
        }
    }
     >div:nth-child(3){
        i{
            background-color:#15d6cf;
        }
    }
}
.center-left-bottom-chart{
    width:100%;
    height:710px;
}
.center-right{
    width: 1407px;
}
.center-right-top{
   height: 835px;
}
.center-right-bottom{
    height: 714px;
    margin-top:148px;
}
.right-content{
    padding:50px;
    box-sizing: border-box;
}
.right-left{
    width: 1608px;
}
.right-left-top{
    width: 100%;
    height: 772px;
}
.right-left-bottom{
    width: 100%;
    height: 880px;
    margin-top:40px;
}
.right-right{
    width: 1890px;
    height: 1690px;
    // background-color:yellow;
    margin-left:300px;
    transform-style: preserve-3d;
    perspective: 600;
    transform-origin: center, center;
    position: relative;
}
.box-item{
    width:504px;
    height:1400px;
    position: absolute;
    top:50%;
    margin-top:-700px;
    cursor: pointer;
    &.left{
        left:50px;
        // border:1px solid red;
        &.down{
            animation: down_left 1s linear forwards;
        }
        &.up{
            animation: up_left 1s linear forwards;
        }
    }
    &.right{
        right:50px;
        // border:1px solid green;
        opacity:.5;
        &.down{
            animation: down_right 1s linear forwards;
        }
        &.up{
            animation: up_right 1s linear forwards;
        }
    }
}
@keyframes down_left{
    0%{
        opacity:1;
        left:50px;
        top:50%;
        transform: translateZ(0);

    }
    50%{
        left:0;
        transform: translateZ(-50px);

    }
    100%{
        opacity:.5;
        left:50px;
        top:58%;
        transform: translateZ(-100px);

    }
}
@keyframes up_left{
    0%{
        opacity:.5;
        left:50px;
        top:58%;
        transform: translateZ(-100px);

    }
    50%{
        left:0;
        transform: translateZ(-50px);

    }
    100%{
        opacity:1;
        left:50px;
        top:50%;
        transform: translateZ(0);

    }
}
@keyframes down_right{
    0%{
        opacity:1;
        right:50px;
        top:50%;
        transform: translateZ(0);

    }
    50%{
        right:0;
        transform: translateZ(-50px);

    }
    100%{
        opacity:.5;
        right:50px;
        top:58%;
        transform: translateZ(-100px);

    }
}
@keyframes up_right{
    0%{
        opacity:.5;
        right:50px;
        top:58%;
        transform: translateZ(-100px);

    }
    50%{
        right:0;
        transform: translateZ(-50px);

    }
    100%{
        opacity:1;
        right:50px;
        top:50%;
        transform: translateZ(0);

    }
}
.box-item-top{
    width: 467px;
    height: 79px;
    line-height: 79px;
    margin:0 auto;
    font-family: MicrosoftYaHei-Bold;
    font-size: 30px;
    letter-spacing: 6px;
    color: #ffffff;
    background-image: url('../../assets/img/newScreen/flow_title.png');
    background-repeat: no-repeat;
    background-position:0 0;
    background-size:100% 100%;
}
.box-item-bottom{
    width:100%;
    height: 1400px;
    margin-top:10px;
    background-color:rgba(3,55,103,.6);
    border:1px solid #0087ff;
    &.right{
        .box-item-bottom-item.right-item{
            margin:106px 0;
        }
    }
    >span {
        position: absolute;
        left: -1px;
        top: -1px;
        width: 10px;
        height: 10px;
        z-index: 10;
        background: url('../../assets/img/newScreen/icon-jiao.png') no-repeat;
        &.angle2 {
            left: auto;
            right: -1px;
            transform: rotate(90deg);
        }
        &.angle3 {
            left: auto;
            right: -1px;
            top: auto;
            bottom: -1px;
            transform: rotate(180deg);
        }
        &.angle4 {
            top: auto;
            bottom: -1px;
            transform: rotate(270deg);
        }
    }
}
.box-item-bottom-item{
    width: 382px;
    height: 100px;
    margin:66px 0;
    background-image: url('../../assets/img/newScreen/flow_text.png');
    background-repeat: no-repeat;
    background-position:0 0;
    background-size:100% 100%;
    font-size:0;
    padding-left:43px;
    box-sizing: border-box;
    &.left{
        background-image: url('../../assets/img/newScreen/flow_text_left.png');
        i{
            background-image: url('../../assets/img/newScreen/icon_yellow.png');
        }
        span{
            color: #fffd1d;
        }
    }
    &.right{
        background-image: url('../../assets/img/newScreen/flow_text_right.png');
         i{
              background-image: url('../../assets/img/newScreen/icon_green.png');
        }
        span{
            color: #1fff9b;
        }
    }
    i{
        display: inline-block;
        width:47px;
        height:43px;
        background-image: url('../../assets/img/newScreen/flow_icon.png');
        background-repeat: no-repeat;
        background-position:0 0;
        background-size:100% 100%;
        margin-right:23px;
    }
    span{
        font-family: MicrosoftYaHei-Bold;
        font-size: 30px;
        line-height: 19px;
        color: #1ee3f3;
    }
}
.box-item-center{
    width:544px;
    height:550px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-272px;
    margin-top:-190px;
    font-size: 70px;
    color: #fff;
    // background-image: url('../../assets/img/newScreen/flow_center.png');
    // background-repeat: no-repeat;
    // background-position:20px center;
    // background-size: 544px 550px;
    transform: translateZ(-25px);
}
.box-item-top-arraw{
    width:182px;
    height:77px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-91px;
    margin-top:-350px;
    background-image: url('../../assets/img/newScreen/flow_top_arraw.png');
    background-repeat: no-repeat;
    background-position:center;
    background-size: 182px 77px;
    transform: translateZ(-25px);
    transition: all 1s linear;
    &.active{
        transform: rotateY(45deg)
    }
}
.box-item-bottom-arraw{
    width:182px;
    height:77px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-91px;
    margin-top:414px;
    background-image: url('../../assets/img/newScreen/flow_bottom_arraw.png');
    background-repeat: no-repeat;
    background-position:center;
    background-size: 182px 77px;
    transform: translateZ(-25px);
    transition: all 1s linear;
     &.active{
        transform: rotateY(45deg)
    }
}
.time-tips{
    width:186px;
    height:50px;
    text-align: center;
    line-height: 50px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-98px;
    margin-top:-24px;
    transform: translateZ(-25px);
    font-family: MyriadPro-Regular;
    font-size:32px;
    font-weight: bolder;
    color: rgb(105, 224, 240);
}
</style>
