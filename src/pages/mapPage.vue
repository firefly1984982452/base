<template>
  <div class="map-page">
    <div id="allmap" class="map-content"></div>
  </div>
</template>

<script>
export default {
  name: 'map-page',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 百度地图API功能
      var map = new BMap.Map('allmap') // 创建Map实例
      var point = new BMap.Point(121.405196, 31.073719)
      map.centerAndZoom(point, 11) // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
      )
      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
      setTimeout(() => {
        map.removeOverlay(marker)
      }, 2000)
    },
  },
}
</script>
<style lang="less" scoped>
.map-page {
  width: 100%;
  height: 100%;
  .map-content {
    width: 100%;
    height: 100vh;
  }
}
</style>