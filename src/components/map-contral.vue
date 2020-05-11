<template>

  <div class="contral-map">
      <i></i>
      <i></i>
      <i></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<style lang="less" scoped>

.contral-map {
    position: absolute;
    left: -.47rem;
    bottom: 0;
    width: .47rem;
    height: 1.47rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    i{
        display: flex;
        width: .47rem;
        height: .47rem;
    }
    :nth-child(1){
        background: url('../assets/images/icon-map-contral1.png') no-repeat;
        background-size: 100%;
    }
    :nth-child(2){
        background: url('../assets/images/icon-map-contral2.png') no-repeat;
        background-size: 100%;
    }
    :nth-child(3){
        background: url('../assets/images/icon-map-contral3.png') no-repeat;
        background-size: 100%;
    }
}
</style>
