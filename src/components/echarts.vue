<template>
  <div :style="{width: width, height:height}">
      <div class="echarts" :id="domID" :style="{width: width,height:height,cursor: 'col-resize'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { guid } from '../assets/js/common'
export default {
  data () {
    return {
      hasError: false,
      err: '',
      domID: 'd_' + guid(),
      option: null,
      chart: null
    }
  },
  props: {
    width: {
      default: '100%',
      type: String
    },
    height: {
      default: '100%',
      type: String
    },
    config: {
      default: '',
      type: String
    },
    hand: {
      default: 'false',
      type: String
    }
  },
  created () {
    this.option = require('../config/echartsConfig/' + this.config).option
  },
  mounted: function () {
    window.addEventListener(
        "resize",this.resizeB,false
    )
    try {
      if (this.option == null) {
        this.err = '找不到配置信息'
        this.hasError = true
      } else {
        this.chart = echarts.init(document.getElementById(this.domID))
        document.getElementById(this.domID).style.height = '100%'
        this.chart.setOption(this.option)
        this.chart.on('click', (params) => {
          this.$bus.emit('dataFromE', params)
          if (this.option.selfTitle === '事件统计') {
            if (params.componentType === 'xAxis') {
              this.option.xAxis.axisLabel.textStyle.color = (value, index) => {
                return value === params.value ? '#40F6B9' : '#89ADBF'
              }
              this.option.series[0].itemStyle.normal = {
                barBorderRadius: [5, 5, 0, 0],
                color: (value, index) => {
                  return value.name === params.value ? new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(66,255,190,1)'},
                      {offset: 1, color: 'rgba(66,255,190,0.13)'}
                    ]
                  ) : new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(0,226,255,1)'},
                      {offset: 1, color: 'rgba(0,193,255,0.13)'}
                    ]
                  )
                }
              }
            } else {
              this.option.xAxis.axisLabel.textStyle.color = (value, index) => {
                return value === params.name ? '#40F6B9' : '#89ADBF'
              }
              this.option.series[0].itemStyle.normal = {
                barBorderRadius: [5, 5, 0, 0],
                color: (value, index) => {
                  return value.name === params.name ? new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(66,255,190,1)'},
                      {offset: 1, color: 'rgba(66,255,190,0.13)'}
                    ]
                  ) : new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(0,226,255,1)'},
                      {offset: 1, color: 'rgba(0,193,255,0.13)'}
                    ]
                  )
                }
              }
            }
            this.chart.setOption(this.option)
          }
        })
      }
    } catch (e) {
      this.err = e.message
      this.hasError = true
    }
  },
  activated () {
    let timer = setTimeout(() => {
      this.raiseSroll()
      clearTimeout(timer)
    }, 400)
    window.onresize =() => {
        this.resizeB
    }
    window.addEventListener(
        "resize",this.resizeB,false
    )
  },
  deactivated () {
    window.removeEventListener("resize",this.resizeB);
    this.raiseSroll(false)
  },
  methods: {
    refresh: function () {
      this.chart.setOption(this.option)
    },
    dispatchAction (e) {
      setTimeout(() => {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        this.chart.on('mouseout', (params) => {
          this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
        })
        this.chart.on('mouseover', (params) => {
          if (params.name === e[0].name) {
            this.chart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: 0
            })
          } else {
            this.chart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 0
            })
          }
        })
      }, 400)
      this.chart.setOption(this.option)
    },
    resizeB: function () {
      let timer1 = setTimeout(() => {
        this.chart.resize()
        // console.log('调用了改变echart自适应')
        this.refresh()
        clearTimeout(timer1)
      }, 400)
    }
  }
}
</script>

<style scoped>
.echarts {
  height: 100% !important;
}
.echarts div {
  height: 100% !important;
}
</style>
<style>
  .handClass>div>canvas{
    cursor: col-resize !important;
  }
</style>
