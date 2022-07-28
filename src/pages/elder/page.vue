<template>
  <div class="global-page">
    <div class="global-page-left">
      <div class="global-box">
        <BoxTitle :title="'性别比例'" />
        <ehcart style="margin: .21rem 0 0 0" config='home-志愿者' height="1rem" />
      </div>
      <div class="global-box">
        <BoxTitle :title="'年龄分布'" />
        <ehcart style="margin: .24rem 0 0 0" config='home-年龄分布' height="1rem" />
      </div>
      <div class="global-box">
        <BoxTitle :title="'养老模式'" />
        <ehcart config='home-养老模式' height="1rem" />
      </div>
    </div>

    <div class="global-page-right">
      <div class="global-box">
        <BoxTitle :title="'老龄趋势'" />
        <ehcart style="margin: .24rem 0 0 0" config='home-老龄趋势' height="1rem" />
      </div>
      <div class="global-box">
        <BoxTitle :title="'服务项目'" />
        <ehcart config='home-服务项目' height="1rem" width='2.8rem' />
      </div>
      <div class="global-box">
        <BoxTitle :title="'志愿者'" />
        <ehcart style="margin: .21rem 0 0 0" config='home-志愿者' height="1rem" />
      </div>
      <contral-map />
    </div>
  </div>
</template>

<script>
import dailogMap from '@/components/dailog-map'
import contralMap from '@/components/map-contral'
export default {
  data() {
    return {
      homeOldList: [
        {
          title: '人数',
          style: 'background:#69D89B',
        },
        {
          title: '百分比',
          style: 'background:#EFB864',
        },
      ],
      homeAgeList: [
        {
          title: '男',
          style: 'background:#4983E1',
        },
        {
          title: '女',
          style: 'background:#DB69BA',
        },
      ],
    }
  },
  mounted() {},
  methods: {},
  components: {
    dailogMap,
    contralMap,
  },
}
</script>

<style lang="less" scoped>
// 左边养老模式
.home-model-right-info {
  width: 1.34rem;
  height: 1.81rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: row;
    span {
      color: #fff;
      font-size: 0.2rem;
    }
  }
}
// 右边服务项目处
.home-server-left-info {
  width: 1.2rem;
  height: 2.17rem;
  position: relative;
  .top,
  .bottom {
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border: 0.02rem solid rgba(239, 184, 100, 1);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 0.6rem;
      height: 0.62rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      p {
        width: 0.54rem;
        height: 0.36rem;
        font-size: 0.32rem;
        font-weight: normal;
        color: rgba(239, 184, 100, 1);
        line-height: 0.37rem;
        text-align: center;
      }
      span {
        width: 0.48rem;
        height: 0.17rem;
        font-size: 0.12rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.17rem;
        margin: 0.09rem 0 0 0;
        text-align: center;
      }
    }
  }
  .top {
    padding: 0 0 0.2rem 0;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    padding: 0.2rem 0 0 0;
    border-color: #69d89b;
    div {
      p {
        color: #69d89b;
      }
      span {
        color: #69d89b;
      }
    }
  }
}
</style>
