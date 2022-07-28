<template>
  <div class="page">
    <map-page class="page-map" />
    <index-page class="page-index" />
  </div>
</template>

<script>
import mapPage from './mapPage'
import indexPage from './indexPage'
export default {
  data() {
    return {}
  },
  components: {
    mapPage,
    indexPage,
  },
}
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  position: relative;
  .page-map,
  .page-index {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .page-index {
    pointer-events: none;
  }
}
</style>
