<template>
    <div style="width:100%;height:100%;position: relative;">
        <div class="ub ub-ac ub-pc no-data" v-if="isData">暂无数据</div>
        <div ref="myEcharts" class="echarts"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud'
export default {
    name: 'WordClound',
    props: ['chartData', 'isData', 'type'],
    data() {
        return {
            myChart: null,
            loading: true
        }
    },
    watch: {
        chartData: {
            deep: true, // 深度监听
            handler(newVal) {
                console.log('newVal', newVal)
                if (newVal.length > 0) {
                    this.loading = false
                } else {
                    this.loading = true
                }
                this.init()
            }
        },
        isData: {
            deep: true, // 深度监听
            handler(newVal) {
                if (newVal) {
                    this.loading = false
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods: {
        init() {
            let that = this
            let list = []
            let data1 = [
                {
                    name: '所属供电单位'
                },
                {
                    name: '用电类别'
                },
                {
                    name: '新建小区'
                },
                {
                    name: '成熟小区'
                },
                {
                    name: '老旧小区'
                },
                {
                    name: '电压等级'
                },
                {
                    name: '用户分类'
                },
                {
                    name: '用电性质'
                },
                {
                    name: '欠费'
                },
                {
                    name: '有窃电历史'
                },
                {
                    name: '零度用户'
                },
                {
                    name: '城镇小电量'
                },
                {
                    name: '城镇零度用户'
                },
                {
                    name: '乡村小电量'
                },
                {
                    name: '乡村零度户'
                },
                {
                    name: '高用电量用户'
                },
                {
                    name: '低用电量用户'
                },
                {
                    name: '空置'
                },
                {
                    name: '闲置'
                },
                {
                    name: '正常用电'
                },
                {
                    name: '常驻居民'
                },
                {
                    name: '长期离家'
                },
                {
                    name: '上月离家'
                },
                {
                    name: '当月返回'
                },
                {
                    name: '城镇常驻居民'
                },
                {
                    name: '城镇长期离家'
                },
                {
                    name: '城镇当月离家'
                },
                {
                    name: '城镇当月返回'
                },
                {
                    name: '乡村常驻居民'
                },
                {
                    name: '乡村长期离家'
                },
                {
                    name: '乡村当月离家'
                },
                {
                    name: '乡村当月返回'
                },
                {
                    name: '人员流入'
                },
                {
                    name: '人员流出'
                },
                {
                    name: '高频外出旅游用户'
                },
                {
                    name: '冬季迁入'
                },
                {
                    name: '冬季迁出'
                },
                {
                    name: '夏季迁入'
                },
                {
                    name: '夏季迁出'
                },
                {
                    name: '春节候鸟'
                },
                {
                    name: '用电量增加'
                },
                {
                    name: '用电量减少'
                },
                {
                    name: '高消费用户'
                },
                {
                    name: '高档社区'
                },
                {
                    name: '普通社区'
                },
                {
                    name: '空置率（合格）'
                },
                {
                    name: '空置率（危险）'
                },
                {
                    name: '空置率（严重积压）'
                },
                {
                    name: '福利结构'
                }
            ]
            let data2 = [
                {
                    name: '低压非居民失信用客户'
                }, {
                    name: '低压居民高信用客户'
                }, {
                    name: '低压居民中信用客户'
                }, {
                    name: '低压居民低信用客户'
                }, {
                    name: '低压居民失信用客户'
                }, {
                    name: '高健康指数客户'
                }, {
                    name: '高压客户'
                }, {
                    name: '低压居民客户'
                }, {
                    name: '低压非居民客户'
                }, {
                    name: '电力大客户'
                }, {
                    name: '大客户'
                }, {
                    name: '包括493个电力行业分类'
                }, {
                    name: '经营效益增加'
                }, {
                    name: '经营效益降低'
                }, {
                    name: '民生产业'
                }, {
                    name: '支柱产业'
                }, {
                    name: '危化品制造业'
                }, {
                    name: '医疗防疫生产企业'
                }, {
                    name: '大健康产业'
                }, {
                    name: '高碳排放企业'
                }, {
                    name: '数字产品制造业'
                }, {
                    name: '数字技术应用业'
                }, {
                    name: '数字产品服务业'
                }, {
                    name: '数字产品驱动业'
                }, {
                    name: '数字化效率提升业'
                }, {
                    name: '挥发性有机物（VOCs)排放重点行业'
                }, {
                    name: '规上企业'
                }, {
                    name: '高新技术产业'
                }, {
                    name: '航空航天技术行业'
                }, {
                    name: '新能源与节能行业'
                }, {
                    name: '资源与环境保护行业'
                }, {
                    name: '先进制造与自动化行业'
                }, {
                    name: '信息技术行业'
                }, {
                    name: '新材料技术行业'
                }, {
                    name: '生物产业'
                }, {
                    name: '新能源汽车产业'
                }, {
                    name: '凌晨生产'
                }, {
                    name: '上午生产'
                }, {
                    name: '下午生产'
                }, {
                    name: '晚上生产'
                }, {
                    name: '全天生产'
                }, {
                    name: '资源与环境保护行业'
                }, {
                    name: '先进制造与自动化行业'
                }, {
                    name: '正常生产'
                }, {
                    name: '超产'
                }, {
                    name: '低产'
                }, {
                    name: '停产'
                }, {
                    name: '实际功率因数中客户'
                }, {
                    name: '实际功率因数低客户'
                }, {
                    name: '经营良好客户'
                }, {
                    name: '经营下降客户'
                }, {
                    name: '经营稳健客户'
                }, {
                    name: '用电增长客户'
                }, {
                    name: '用电下降客户'
                }, {
                    name: '用电稳定客户'
                }, {
                    name: '运行容量减少客户'
                }, {
                    name: '运行容量增长客户'
                }, {
                    name: '运行容量稳健客户'
                }, {
                    name: '信誉良好'
                }, {
                    name: '实际功率因数高客户'
                }, {
                    name: '实际功率因数不考核客户'
                }, {
                    name: '信誉不好'
                }, {
                    name: '重污染'
                }, {
                    name: '轻污染'
                }, {
                    name: '低耗能'
                }, {
                    name: '高压高信用客户'
                }, {
                    name: '高压失信用客户'
                }, {
                    name: '低压非居民高信用客户'
                }, {
                    name: '高压低信用客户'
                }, {
                    name: '高压中信用客户'
                }, {
                    name: '低压非居民中信用客户'
                }, {
                    name: '低压非居民低信用客户'
                }, {
                    name: '中健康指数客户'
                }, {
                    name: '低健康指数客户'
                }, {
                    name: '高压一星用户'
                }, {
                    name: '高压二星用户'
                }, {
                    name: '高压三星用户'
                }, {
                    name: '高压四星用户'
                }, {
                    name: '高压五星用户'
                }, {
                    name: '低压非居一星用户'
                }, {
                    name: '低压非居二星用户'
                }, {
                    name: '低压非居三星用户'
                }, {
                    name: '低压非居四星用户'
                }, {
                    name: '低压非居五星用户'
                }, {
                    name: '低压一星用户'
                }, {
                    name: '低压二星用户'
                }, {
                    name: '低压三星用户'
                }, {
                    name: '低压四星用户'
                }, {
                    name: '低压五星用户'
                }
            ]
            let data3 = [
                {
                    name: '设备状态正常'
                }, {
                    name: '设备状态注意'
                }, {
                    name: '设备状态异常'
                }, {
                    name: '设备状态严重'
                }, {
                    name: '设备状态输入异常'
                }, {
                    name: '正常设备'
                }, {
                    name: '异常设备'
                }
            ]
            let data4 = [
                {
                    name: '达产快'
                }, {
                    name: '达产慢'
                }, {
                    name: '未达产'
                }, {
                    name: '设备过载'
                }, {
                    name: '设备重载'
                }, {
                    name: '设备轻载'
                }, {
                    name: '设备空载'
                }, {
                    name: '利用率高'
                }, {
                    name: '利用率适中'
                }, {
                    name: '利用率低'
                }, {
                    name: '设备备用'
                }, {
                    name: '配变备用'
                }, {
                    name: '线路重载'
                }, {
                    name: '线路过载'
                }, {
                    name: '线路轻载'
                }, {
                    name: '线路空载'
                }, {
                    name: '供电能力卡脖子'
                }, {
                    name: '主干配电线路供电能力差'
                }, {
                    name: '供电能力充裕'
                }, {
                    name: '供电能力适中'
                }, {
                    name: '供电能力紧张'
                }, {
                    name: '紧张'
                }, {
                    name: '适中'
                }, {
                    name: '充裕'
                }
            ]
            let data5 = [
                {
                    name: '变电设备类'
                }, {
                    name: '配电设备类'
                }, {
                    name: '电站设备类'
                }, {
                    name: '输电线路类'
                }, {
                    name: '总部性质'
                }, {
                    name: '分部性质'
                }, {
                    name: '子公司性质'
                }, {
                    name: '用户性质'
                }, {
                    name: '省公司性质'
                }, {
                    name: '长期重过载'
                }, {
                    name: '高龄化设备'
                }, {
                    name: '设备可靠性'
                }, {
                    name: '最大负载率'
                }
            ]
            let data6 = [
                {
                    name: '规上企业'
                }, {
                    name: '涉美企业'
                }, {
                    name: '核备项目'
                }, {
                    name: '非核备项目'
                }, {
                    name: '目投资进度'
                }, {
                    name: '物资招标较计划偏差率'
                }, {
                    name: '财务入账较计划偏差率'
                }, {
                    name: '未开工'
                }, {
                    name: '开工滞后程度轻'
                }, {
                    name: '开工滞后程度适中'
                }, {
                    name: '开工滞后程度严重'
                }, {
                    name: '未竣工'
                }, {
                    name: '竣工滞后程度轻'
                }, {
                    name: '竣工滞后程度适中'
                }, {
                    name: '竣工滞后程度严重'
                }, {
                    name: '未投产'
                }, {
                    name: '投产滞后程度轻'
                }, {
                    name: '投产滞后程度适中'
                }, {
                    name: '投产滞后程度严重'
                }, {
                    name: '新能源汽车充电桩项目'
                }, {
                    name: '特高压项目'
                }, {
                    name: '需求提报较计划偏差率'
                }, {
                    name: '物资招标较计划偏差率'
                }, {
                    name: '财务入账较计划偏差率'
                }, {
                    name: '项目投资进度'
                }
            ]
            console.log('data1', data1)
            console.log('data2', data2)
            if (this.type === 1) {
                let data1s = this.getRandomArrayElements(data1, 30)
                console.log('data1s', data1s)
                list = data1s.map(item => {
                    item.value = this.randomNum(10, 1000)
                    return item
                })
            } else if (this.type === 2) {
                let data2s = this.getRandomArrayElements(data2, 25)
                console.log('data2s', data2s)
                list = data2s.map(item => {
                    item.value = this.randomNum(10, 1000)
                    return item
                })
            } else if (this.type === 3) {
                list = data3.map(item => {
                    item.value = this.randomNum(10, 1000)
                    return item
                })
            } else if (this.type === 4) {
                list = data4.map(item => {
                    item.value = this.randomNum(10, 1000)
                    return item
                })
            } else if (this.type === 5) {
                list = data5.map(item => {
                    item.value = this.randomNum(10, 1000)
                    return item
                })
            } else if (this.type === 6) {
                list = data6.map(item => {
                    item.value = this.randomNum(10, 1000)
                    return item
                })
            }
            let sizeRange = []
            let gridSize = 60
            if (this.type === 6) {
                sizeRange = [24, 80]
                gridSize = 90
            } else {
                sizeRange = [10, 66]
            }
            let option = {
                title: {
                    show: false,
                    text: '', // 标题
                    x: 'center',
                    textStyle: {
                        fontSize: 23
                    }

                },
                // backgroundColor: '#F7F7F7',
                tooltip: {
                    show: false
                },
                series: [{
                    name: '热点分析', // 数据提示窗标题
                    type: 'wordCloud',
                    sizeRange: sizeRange, // 画布范围，如果设置太大会出现少词（溢出屏幕）
                    rotationRange: [0, 0], // 数据翻转范围

                    textPadding: '100px',
                    autoSize: {
                        enable: true,
                        minSize: 24
                    },
                    gridSize: gridSize,
                    shape: 'diamond',
                    left: 'center',
                    top: 'center',
                    width: '70%',
                    height: '80%',
                    right: null,
                    bottom: null,
                    drawOutOfBound: true, // 词云显示完整，超出画布的也显示
                    textStyle: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255)
                            ].join(',') + ')'
                        }
                    },
                    data: list
                }]
            }
            // eslint-disable-next-line no-undef
            this.myChart = echarts.init(this.$refs.myEcharts)
            this.myChart.setOption(option)

            window.addEventListener('resize', function() {
                that.myChart.resize()
            })
        },
        getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0); var i = arr.length; var min = i - count; var temp; var index
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random())
                temp = shuffled[index]
                shuffled[index] = shuffled[i]
                shuffled[i] = temp
            }
            return shuffled.slice(min)
        },
        randomNum(minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1, 10)
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
                default:
                    return 0
            }
        }
    }
}
</script>

<style scoped lang="less">
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
    .echarts {
        width: 100%;
        height: 100%;
    }
    .no-data{
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        color:#fff;
        font-size:14px;
    }
    .echarts ::v-deep .el-loading-mask{
        background-color:rgba(0,0,0,.5);
    }
</style>
