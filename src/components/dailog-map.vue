<template>
  <div class="box">
    <p class="title">{{title}}</p>
    <div class="info">
      <div class="info-line" v-for="item in 4" :key="item+40">
        <i></i>
        <p>上海市闵行区颛盛路118号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: String,
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 3.34rem;
  height: 2.14rem;
  background: url('../assets/images/dailog-map-bg.png') no-repeat;
  background-size: 100%;
  position: relative;
  &::before {
    content: '';
    width: 0.23rem;
    height: 0.26rem;
    background: url('../assets/images/icon-dailog-map-close.png') no-repeat;
    background-size: 100%;
    position: absolute;
    top: -0.1rem;
    right: -0.06rem;
  }
  .title {
    width: 2rem;
    height: 0.25rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: rgba(129, 172, 244, 1);
    line-height: 0.25rem;
    margin: 0.07rem 0 0.04rem 0.2rem;
  }
  .info {
    height: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 0 0.2rem;
    padding: 0.19rem 0 0.25rem 0;
    .info-line {
      display: flex;
      flex-direction: row;
      align-items: center;
      i {
        width: 0.2rem;
        height: 0.2rem;
        background: url('../assets/images/icon-home-top-info-icon2.png')
          no-repeat;
        background-size: 100%;
        margin: 0 0.12rem 0 0;
      }
      p {
        width: 2.5rem;
        height: 0.23rem;
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(154, 180, 223, 1);
        line-height: 0.23rem;
      }
    }
  }
}
</style>
