<template>
    <div class="list">
      <div v-for="item in list" :key="item.title">
        <i :style="item.style"></i>
        <span>{{item.title}}</span>
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
    list: {
      type:Array,
      default: () => []
    }
  },
  watch:{
    list:{
        handler: function (newval, oldval) {
          console.log(newval,oldval)
        },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .list{
    width: auto;
    height: .12rem;
    display: flex;
    flex-direction: row;
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 0 0 .1rem;
      i{
        display: flex;
        width:.12rem;
        height:.12rem;
        background:rgba(105,216,155,1);
        border-radius:.02rem;
      }
      span{
        width:auto;
        height:.17rem;
        font-size:.12rem;
        font-family:"PINGFANG-REGULAR";
        font-weight:400;
        color:rgba(255,255,255,0.8);
        line-height:.17rem;
        margin: 0 0 0 .08rem;
      }
    }
  }
</style>
