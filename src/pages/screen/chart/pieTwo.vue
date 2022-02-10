<template>
    <div style="width:100%;height:100%;position: relative;">
        <div class="ub ub-ac ub-pc no-data" v-if="isData">暂无数据</div>
        <div ref="myEcharts" class="echarts"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'PieTwo',
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
        this.init()
    },
    methods: {
        init() {
            let that = this
            //
            var data = this.$deepCopy(this.chartData)
            var m2R2Data = [
                { value: 137, legendname: '营销专业', name: '营销专业  137', itemStyle: { color: '#0096ff' }},
                { value: 34, legendname: '设备专业', name: '设备专业  34', itemStyle: { color: '#aaaaaa' }},
                { value: 50, legendname: '财务专业', name: '财务专业  50', itemStyle: { color: '#fbb734' }},
                { value: 54, legendname: '发展专业', name: '发展专业  54', itemStyle: { color: '#1de639' }},
                { value: 23, legendname: '物资专业', name: '物资专业  23', itemStyle: { color: '#35fff3' }}

            ]

            let option = {
                title: [
                    {
                        text: '标签专业分类统计图',
                        textStyle: {
                            fontSize: 24,
                            color: 'white'
                        },
                        left: '26%',
                        bottom: 60
                    }],
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    align: 'left',
                    top: 'middle',
                    icon: 'circle',
                    itemWidth: 26,
                    itemHeight: 26,
                    itemGap: 30,
                    textStyle: {
                        color: '#fff',
                        fontSize: 34
                    },
                    height: 500
                },

                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderColor: '#2b2b2b',
                    textStyle: {
                        fontSize: 30,
                        color: 'white',
                        lineHeight: 30
                    },
                    padding: 20,
                    formatter: function(parms) {
                        var str = parms.seriesName + '</br>' +
            parms.marker + '' + parms.data.legendname + '</br>' +
            '数量：' + parms.data.value + '</br>' +
            '占比：' + parms.percent + '%'
                        return str
                    }
                },
                series: [
                    {
                        name: '标签专业分类统计图',
                        type: 'pie',
                        radius: ['0%', '70%'],
                        center: ['35%', '45%'],
                        roseType: 'radius',
                        data: m2R2Data,
                        label: {
                            normal: {
                                show: false,
                                position: 'outter',
                                formatter: function(parms) {
                                    return parms.data.legendname
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 5,
                                length2: 3,
                                smooth: true
                            }
                        }
                    }
                ]
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
