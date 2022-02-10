<template>
    <div style="width:100%;height:100%;position: relative;">
        <div class="ub ub-ac ub-pc no-data" v-if="isData">暂无数据</div>
        <div ref="myEcharts" class="echarts"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { Divider } from 'view-design'
export default {
    name: 'Bubble',
    props: ['chartData', 'isData'],
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
        randomNum(minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1, 10)
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
                default:
                    return 0
            }
        },
        init() {
            let that = this
            var colorList = [
                {
                    name: '客户标签',
                    color: '#2399ff'
                }, {
                    name: '商标签',
                    color: '#e3ab3e'
                }, {
                    name: '设备标签',
                    color: '#15d6cf'
                }
            ]
            var symbolSizeArr = []
            let data = [
                {
                    name: '高压高信用客户',
                    type: '客户标签'
                }, {
                    name: '低健康指数客户',
                    type: '客户标签'
                }, {
                    name: '实际公路因数高客户',
                    type: '客户标签'
                }, {
                    name: '低压非居民高信用客户',
                    type: '客户标签'
                }, {
                    name: '开工滞后程度适中',
                    type: '客户标签'
                }, {
                    name: '用电下降客户',
                    type: '商标签'
                }, {
                    name: '实际功率因数',
                    type: '商标签'
                }, {
                    name: '电力大客户',
                    type: '商标签'
                }, {
                    name: '经营下降客户',
                    type: '商标签'
                }, {
                    name: '输电线路类',
                    type: '设备标签'
                }, {
                    name: '变电设备累',
                    type: '设备标签'
                }, {
                    name: '核备项目',
                    type: '设备标签'
                }, {
                    name: '非核备项目',
                    type: '设备标签'
                }, {
                    name: '未开工',
                    type: '设备标签'
                }, {
                    name: '配电设备类',
                    type: '设备标签'
                }, {
                    name: '最大负载率',
                    type: '设备标签'
                }
            ]
            data = data.map(item => {
                item.value = this.randomNum(300, 1500)
                item.itemStyle = {}
                item.itemStyle.color = colorList.filter(e => e.name === item.type)[0].color
                return item
            })
            let dataList = data.map(item => {
                let obj = {}
                obj.name = item.name
                obj.value = item.value
                obj.type = item.type
                obj.itemStyle = item.itemStyle
                return obj
            })
            console.log('dataList', dataList)
            console.log('symbolSizeArr', symbolSizeArr)
            let option = {
                title: [
                    {
                        text: '标签点击频次明细图',
                        textStyle: {
                            fontSize: 28,
                            color: 'white'
                        },
                        left: 'center',
                        bottom: 0
                    }],
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,.5)',
                    formatter: function(parms) {
                        var str = '<div style="width:360px;text-align:left;font-size:26px;color:#fff;line-height:40px;padding-left:20px;">' +
                        '类型：' + parms.data.type + '</br>' +
            '名称：' + parms.data.name + '</br>' +
            '点击频次：' + parms.data.value + '</div>'
                        return str
                    }
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: false
                },
                series: [{
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 400,
                        edgeLength: [30, 50]
                    },
                    label: {
                        show: true,
                        color: '#fff',
                        formatter: [
                            // '{title|{c}}',
                            '{name|{b}}'
                        ].join('\n'),
                        rich: {
                            title: {
                                fontSize: 28,
                                color: '#fff',
                                textAlign: 'center'
                            },
                            name: {
                                fontSize: 28,
                                color: '#fff',
                                textAlign: 'center'
                            }
                        }
                    },
                    symbolSize: function(value, params) {
                        console.log('value', value)
                        console.log('params', params)
                        return parseInt(value / 10) + 50
                    },
                    draggable: true, // 设置是否可拖动
                    data: dataList
                }]
            }
            // eslint-disable-next-line no-undef
            this.myChart = echarts.init(this.$refs.myEcharts)
            this.myChart.setOption(option)

            window.addEventListener('resize', function() {
                that.myChart.resize()
            })
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
