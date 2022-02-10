<template>
    <div style="width:100%;height:100%;position: relative;">
        <!-- <div class="ub ub-ac ub-pc no-data" v-if="isData">暂无数据</div> -->
        <div ref="myEcharts" class="echarts"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'BrokenLine',
    props: ['chartData', 'isData'],
    data() {
        return {
            myChart: null,
            loading: true
        }
    },
    // watch: {
    //     chartData: {
    //         deep: true, // 深度监听
    //         handler(newVal) {
    //             console.log('newVal', newVal)
    //             if (newVal.length > 0) {
    //                 this.loading = false
    //             } else {
    //                 this.loading = true
    //             }
    //             this.init()
    //         }
    //     },
    //     isData: {
    //         deep: true, // 深度监听
    //         handler(newVal) {
    //             if (newVal) {
    //                 this.loading = false
    //             }
    //         }
    //     }
    // },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let that = this
            //
            var data = this.$deepCopy(this.chartData)
            let xData = []
            let legendData = []
            let series = []
            let colors = ['#00ffea', '#1890ff', '#13c2c2', '#52c41a', '#722ed1', '#ed4014']
            if (data.length > 0) {
                xData = data.map(item => {
                    return item.day
                })
            }
            if (data[0] && data[0].list.length > 0) {
                data[0].list.forEach((item, index) => {
                    let names = []
                    let list = []
                    data.forEach((_item, _index) => {
                        list.push(_item.list[index].num)
                    })
                    legendData.push(item.name)
                    let obj = {
                        name: item.name,
                        type: 'line',
                        symbolSize: 14,
                        // smooth: true, // true 为平滑曲线，false为直线
                        itemStyle: {
                            normal: {
                                color: colors[index],
                                lineStyle: {
                                    color: colors[index],
                                    width: 4
                                }
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [{
                                        offset: 0,
                                        color: 'rgba(0,255,234, 0.5)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,255,234,0)'
                                    }
                                    ],
                                    false
                                )
                            }
                        },
                        data: list
                    }
                    series.push(obj)
                })
            }

            let option = {
                title: [
                    {
                        text: '标签每日变化趋势图',
                        textStyle: {
                            fontSize: 24,
                            color: 'white'
                        },
                        left: 0,
                        top: 0
                    }],
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderColor: '#2b2b2b',
                    textStyle: {
                        fontSize: 24,
                        color: 'white',
                        lineHeight: 30
                    }
                },
                legend: {
                    show: true,
                    orient: 'horizontal',
                    top: 60,
                    right: '4%',
                    align: 'left',
                    data: legendData,
                    itemWidth: 14,
                    itemHeight: 14,
                    icon: 'circle',
                    itemGap: 20, // 每条图例的距离
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 22
                    },
                    nameTextStyle: {
                        color: '#ffffff'
                    }

                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '5%',
                    top: '20%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xData,
                    axisLabel: {
                        fontSize: 26,
                        color: '#ffffff'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#19d8ff'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    // nameGap: 100,
                    axisLabel: {
                        fontSize: 26,
                        color: '#ffffff'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#8596a5'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            type: 'dashed',
                            color: 'rgba(25,216,255,.5)'
                        }
                    }
                },

                series: series
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
