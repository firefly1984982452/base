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
  data () {
    return {
    }
  },
  props: {
    title: String
  },
}
</script>

<style lang="less" scoped>
  .box {
    width: 3.34rem;
    height:2.14rem;
    background: url('../assets/images/dailog-map-bg.png') no-repeat;
    background-size: 100%;
    position: relative;
    &::before{
      content: '';
      width: .23rem;
      height: .26rem;
      background: url('../assets/images/icon-dailog-map-close.png') no-repeat;
      background-size: 100%;
      position: absolute;
      top: -.1rem;
      right: -.06rem;
    }
    .title{
      width: 2rem;
      height:.25rem;
      font-size:.18rem;
      font-family:"PINGFANG-BOLD";
      font-weight:600;
      color:rgba(129,172,244,1);
      line-height:.25rem;
      margin: .07rem 0 .04rem .2rem;
    }
    .info{
      height: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 0 0 .2rem;
      padding: .19rem 0 .25rem 0;
      .info-line{
        display: flex;
        flex-direction: row;
        align-items: center;
        i{
          width: .2rem;
          height: .2rem;
          background: url('../assets/images/icon-home-top-info-icon2.png') no-repeat;
          background-size: 100%;
          margin: 0 .12rem 0 0;
        }
        p{
          width: 2.5rem;
          height:.23rem;
          font-size:.16rem;
          font-family:"PINGFANG-REGULAR";
          font-weight:400;
          color:rgba(154,180,223,1);
          line-height:.23rem;
        }
      }
    }
  }
</style>
