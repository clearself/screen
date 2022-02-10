<template>
    <div class="ub ub-ac ub-pc container-box-box">
        <div class="ub w100 ub-pc ub-ac title">
            <div class="title-left"></div>
            <div class="title-center">标签体系架构</div>
            <div class="title-right"></div>
        </div>
        <div class="container-box">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Org',
    data() {
        return {}
    },

    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.init()
            }, 100)
        })
    },
    methods: {
        init() {
            var data = [
                {
                    name: '数据标签体系',
                    root: true,
                    children: [
                        {
                            name: '客户标签',
                            isSecond: true,
                            iconName: 'icon-kehubiaoqian',
                            children: [
                                {
                                    name: '自然人客户',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '基础属性',
                                            isFouth: true,
                                            children: [
                                                {
                                                    name: '社会属性',
                                                    children: [
                                                        {
                                                            name: '地址属性'
                                                        },
                                                        {
                                                            name: '个人属性'
                                                        },
                                                        {
                                                            name: '家庭属性'
                                                        },
                                                        {
                                                            name: '职业属性'
                                                        },
                                                        {
                                                            name: '楼宇年限'
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: '用电属性',
                                                    children: [
                                                        {
                                                            name: '电力属性'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: '行为特征',
                                            isFouth: true,
                                            children: [
                                                {
                                                    name: '信用情况'
                                                },
                                                {
                                                    name: '用电行为',
                                                    children: [
                                                        {
                                                            name: '用电情况'
                                                        },
                                                        {
                                                            name: '人员流动情况'
                                                        },
                                                        {
                                                            name: '迁徙行为'
                                                        },
                                                        {
                                                            name: '用电趋势分析'
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: '消费行为',
                                                    children: [
                                                        {
                                                            name: '消费水平'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: '需求特征',
                                            isFouth: true,
                                            children: [
                                                {
                                                    name: '居住分析需求'
                                                },
                                                {
                                                    name: '服务需求'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: '组织客户',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '基础属性',
                                            isFouth: true,
                                            children: [
                                                {
                                                    name: '电力属性',
                                                    children: [
                                                        {
                                                            name: '用电分类'
                                                        },
                                                        {
                                                            name: '客户类型'
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: '组织属性',
                                                    children: [
                                                        {
                                                            name: '行业分类'
                                                        },
                                                        {
                                                            name: '新型产业分类'
                                                        },
                                                        {
                                                            name: '经营情况'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: '行为特征',
                                            isFouth: true,
                                            children: [
                                                {
                                                    name: '用电行为',
                                                    children: [
                                                        {
                                                            name: '营业行为'
                                                        },
                                                        {
                                                            name: '功率因数分类'
                                                        },
                                                        {
                                                            name: '客户评估'
                                                        },
                                                        {
                                                            name: '用电趋势'
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: '企业信誉度'
                                                },
                                                {
                                                    name: '污染程度'
                                                },
                                                {
                                                    name: '耗能情况'
                                                }
                                            ]
                                        },
                                        {
                                            name: '需求特征',
                                            isFouth: true,
                                            children: [
                                                {
                                                    name: '客户评价',
                                                    children: [
                                                        {
                                                            name: '风险评估'
                                                        },
                                                        {
                                                            name: '用电健康评估'
                                                        },
                                                        {
                                                            name: '用电价值评估'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: '员工标签',
                            isSecond: true,
                            iconName: 'icon-renyuanbiaoqian',
                            children: [
                                {
                                    name: '员工',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '基础属性',
                                            isFouth: true
                                        },
                                        {
                                            name: '绩效特征',
                                            isFouth: true
                                        },
                                        {
                                            name: '人际特征',
                                            isFouth: true
                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            name: '组织对象标签',
                            isSecond: true,
                            iconName: 'icon-zuzhiduixiangbiaoqian',
                            children: [
                                {
                                    name: '单位组织',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '业务特征',
                                            isFouth: true
                                        },
                                        {
                                            name: '基础属性',
                                            isFouth: true
                                        },
                                        {
                                            name: '经营特征',
                                            isFouth: true
                                        }
                                    ]
                                }, {
                                    name: '部门及组织',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '业务特征',
                                            isFouth: true
                                        },
                                        {
                                            name: '基础属性',
                                            isFouth: true
                                        },
                                        {
                                            name: '经营特征',
                                            isFouth: true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: '供应商标签',
                            isSecond: true,
                            iconName: 'icon-gongyingshangbiaoqian',
                            children: [
                                {
                                    name: '供应商',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '履约特征',
                                            isFouth: true
                                        },
                                        {
                                            name: '质量特征',
                                            isFouth: true
                                        },
                                        {
                                            name: '基础属性',
                                            isFouth: true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: '设备标签',
                            isSecond: true,
                            iconName: 'icon-shebeibiaoqian',
                            children: [
                                {
                                    name: '换流设备',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '输电设备',
                                            isThird: true,
                                            children: [
                                                {
                                                    name: '配电设备',
                                                    isThird: true,
                                                    children: [
                                                        {
                                                            name: '用电设备',
                                                            isThird: true,
                                                            children: [
                                                                {
                                                                    name: '变电设备',
                                                                    isThird: true
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: '信息设备',
                                    isThird: true,
                                    children: [
                                        {
                                            name: '通信设备',
                                            isThird: true,
                                            children: [
                                                {
                                                    name: '保护设备',
                                                    isThird: true,
                                                    children: [
                                                        {
                                                            name: '自动化设备',
                                                            isThird: true,
                                                            children: [
                                                                {
                                                                    name: '基础属性',
                                                                    isFouth: true
                                                                },
                                                                {
                                                                    name: '生产特征',
                                                                    isFouth: true
                                                                },
                                                                {
                                                                    name: '监测特征',
                                                                    isFouth: true
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                }
            ]

            $('.container-box').HOkrTree({
                data: data,
                css: {
                    lineColor: '#1debff',
                    iconColor: '#1debff'
                },
                itemTemplate: function(data) {
                    if (data.root) {
                        return [
                            '<div class="root"><div><i class="iconfont icon-root"></i></div><span>',
                            data.name,
                            '</span></div>'
                        ].join(' ')
                    } else if (data.isSecond) {
                        return [
                            '<div class="second"><i class="iconfont ' + data.iconName + '"></i><span>',
                            data.name,
                            '</span></div>'
                        ].join(' ')
                    } else if (data.isThird) {
                        return [
                            '<div class="third"><span>',
                            data.name,
                            '</span></div>'
                        ].join(' ')
                    } else if (data.isFouth) {
                        return [
                            '<div class="fouth"><span>',
                            data.name,
                            '</span></div>'
                        ].join(' ')
                    } else {
                        return [
                            '<div class="other"><span>',
                            data.name,
                            '</span></div>'
                        ].join(' ')
                    }
                }
            })
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
.container-box-box{
    width:100%;
    height:100%;
    box-sizing: border-box;
    overflow:hidden;

}
.title{
    width:100%;
    height:100px;
    position: absolute;
    left:0;
    top:0;
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
.container-box{
    transform: scale(1.12);
}
</style>
<style>
.container-box *{
        font-size:0px;
    }
.container-box{
    color:#333;
}
.container-box img{
    display:inline-block;
}
.root{
    width: 400px;
    height: 200px;
    padding:24px 0;
    background-image: url('../../../assets/img/newScreen/big_title.png');
    background-repeat: no-repeat;
    background-position:0 0;
    background-size:100% 100%;
}
.root>div{
    width:100%;
    text-align: center;
}
.root>div>i{
    font-size:50px;
    color:#ffffff;
}
.root span{
    display: block;
    width:100%;
    margin-top:10px;
    text-align: center;
    font-size: 40px;
    line-height: 36px;
    color: #ffffff;
    text-shadow: 0px 0px 10px #3085fd, 0px 0px 10px #3085fd;

}
.second{
    width: 380px;
    height: 126px;
    line-height: 126px;
    text-align: left;
    text-indent:50px;
    /* padding:24px 0; */
    background-image: url('../../../assets/img/newScreen/second_title.png');
    background-repeat: no-repeat;
    background-position:0 0;
    background-size:100% 100%;
}
.second i{
    font-size:30px;
    color:#ffffff;
}
.second span{
    margin-left:20px;
    font-size: 36px;
    color: #ffffff;
    text-shadow: 0px 0px 10px #3085fd, 0px 0px 10px #3085fd;
}
.third{
    width: 260px;
    height: 90px;
    line-height: 90px;
    /* padding:24px 0; */
    background-image: url('../../../assets/img/newScreen/three_title.png');
    background-repeat: no-repeat;
    background-position:0 0;
    background-size:100% 100%;
}
.third span{
    font-size: 34px;
    color: #ffffff;
    text-shadow: 0px 0px 10px #3085fd, 0px 0px 10px #3085fd;
}
.fouth{
    width: 260px;
    height: 40px;
    line-height: 36px;
    text-align: left;
    text-indent:30px;
    background-color: #001e41;
    border: solid 2px rgba(29,235,255,.6);
    position: relative;
}
.fouth span{
    font-size: 28px;
    color: #ffffff;
    text-shadow: 0px 0px 10px #3085fd, 0px 0px 10px #3085fd;
}
.fouth:before{
    content:'';
    position: absolute;
    width:2px;
    height:20px;
    background-color:#ffec1d;
    left:-2px;
    top:50%;
    margin-top:-10px;
}
.other{
    width: 260px;
    height: 40px;
    line-height: 36px;
    text-align: left;
    text-indent:30px;
    background-color: #001e41;
    border: solid 2px rgba(29,235,255,.6);
    position: relative;
}
.other span{
    font-size: 26px;
    color: #ffffff;
    text-shadow: 0px 0px 10px #3085fd, 0px 0px 10px #3085fd;
}
.item-template{
    background:#fff;
    /* border-radius:50px; */
    width:140px;
    /* border:solid 1px #ddd; */
    overflow: hidden;
    /* box-shadow: 0px 0px 10px #eee; */
    box-sizing:border-box;
    text-align:left;
}
.item-template img{
height:40px;width:40px;border-radius:50%;margin-left:1px;vertical-align:middle;
}
.item-template span{
display:inline-block;vertical-align:middle;font-size:12px;margin-left:10px;
}
.container-box .node-parent,
.container-box .node-childrens {
    display: table-cell;
    height: 100%;
    vertical-align: middle;
}
.container-box .node {
    box-sizing: border-box;
}
.container-box .node-cell {
    position: relative;
    /*padding: 10px;*/
    padding: 0 10px;
    /*padding-left: 20px;*/
}
.container-box .node-lines {
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
}
.container-box .line {
    display: table-cell;
    vertical-align: middle;
}
.container-box .line > .line-right {
    width: 15px;
    border-bottom: solid 1px #1debff;
}
.container-box .line-top,
.container-box .line-bottom {
    height: 50%;
    border-left: solid 1px #1debff;
    width: 20px;
    box-sizing: border-box;
}
.container-box .expandIcon {
    display: table-cell;
    vertical-align: middle;
}
.container-box .expandIcon > div {
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #cbcbcb;
    color: #333;
    font-size: 12px;
    line-height: 20px;
    border-radius: 50%;
    position: relative;
    top: -2px;
    cursor: pointer;
    text-align: center;
}
.container-box .line-top {
    border-bottom: solid 1px #1debff;
}
.container-box .line-top.first {
    border: 0;
    border-bottom: solid 1px #1debff;
}
.container-box .line-bottom.last {
    border: 0;
}
.container-box .tagBox {
    display: table-cell;
    vertical-align: middle;
}
.container-box .tagNode {
    position: relative;
}
.container-box .tag-line {
    height: 50px;
    border-bottom: solid 1px #1debff;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    width: 100%;
}
.container-box .taglineDown {
    width: 0;
    border-left: solid 1px #1debff;
    height: 100%;
    margin: auto;
}
#ColorPickerPanel {
    width: 160px;
    height: 42px;
    position: fixed;
    bottom: 2px;
    right: 2px;
    background-color: #31333d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0 10px;
}
#ColorPickerPanel .color-block {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
}
#ColorPickerPanel .color-words {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
#ColorPickerPanel .color-words p {
    font-size: 12px;
    color: #fff;
    line-height: 1.5;
    margin: 0;
}
#ColorPickerPointer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2147483646;
    cursor: default !important;
}
#ColorPickerPointer .pointer-wrapper {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 170px;
    height: 170px;
    border: 1px solid #bbb;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.8) 1px 1px 6px;
}
#ColorPickerPointer .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 1px solid #bbb;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    background-color: #e0e0e0;
    overflow: hidden;
    cursor: none !important;
    transform: translate(-50%, -50%);
}
#ColorPickerPointer .pointer .centerBlock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border: 1px solid red;
}
#ColorPickerPointer .pointer .floatTip {
    position: absolute;
    top: calc(50% + 30px);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 28px;
    border-radius: 2px;
    background-color: #1a1a1a;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 28px;
}
.cp-waiting {
    cursor: wait !important;
}
.clickAnimate {
    animation: clickAnimate 0.3s linear;
}
@keyframes clickAnimate {
    0% {
        transform: scale(0.95);
    }
    30% {
        transform: scale(1.05);
    }
    60% {
        transform: scale(1);
    }
    90% {
        transform: scale(1.02);
    }
    100% {
        transform: scale(1);
    }
}
</style>
