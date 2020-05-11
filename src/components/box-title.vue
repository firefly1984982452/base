<template>
    <p class="title">
      <i></i>
      <span>{{title}}</span>
    </p>
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
  .title{
    display: flex;
    height: .25rem;
    line-height: .25rem;
    align-items: center;
    i{
      width: .12rem;
      height: .12rem;
      background: url('../assets/images/icon-box-title.png') no-repeat;
      background-size: 100%;
    }
    span {
      width: auto;
      height: .25rem;
      font-size:.18rem;
      font-family:"PINGFANG-MEDIUM";
      font-weight:500;
      color:rgba(129,172,244,1);
      line-height: .25rem;
      margin: 0 0 0 .05rem;
    }
  }
</style>
