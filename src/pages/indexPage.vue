<template>
  <div class="index-page">
    <div class="header">
      <div class="logo" @click="changePage(0)"></div>
      <div class="menu">
        <div class="left-button">
          <div class="button" :class="currentMenu == 1 ? 'actived' : ''" @click="changePage(1)">菜单1</div>
          <div class="button" :class="currentMenu == 2 ? 'actived' : ''" @click="changePage(2)">菜单2</div>
          <div class="button" :class="currentMenu == 3 ? 'actived' : ''" @click="changePage(3)">菜单3</div>
          <div class="button" :class="currentMenu == 4 ? 'actived' : ''" @click="changePage(4)">菜单4</div>
        </div>
      </div>
      <h1 class="title">标题</h1>
      <div class="info">
        <time-info />
      </div>
      <div class="global-big-contral"></div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import timeInfo from '../components/time'
export default {
  name: 'index-page',
  data() {
    return {
      currentMenu: 0, // 当前选中的菜单，默认是首页（0）
    }
  },
  components: {
    timeInfo,
  },
  methods: {
    changePage(data) {
      this.currentMenu = data
      let url = ''
      switch (data) {
        case 0:
          url = 'home'
          this.$router.push({
            path: url,
          })
          break

        case 1:
          url = 'PageElder'
          this.$router.push({
            path: url,
          })
          break

        case 2:
        case 3:
        case 4:
          console.log('开发中')

          break

        default:
          break
      }
    },
  },
}
</script>

<style lang="less" scoped>
.index-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    background: #252525;
    pointer-events: all;
    .logo {
      width: 0.5rem;
      height: 0.5rem;
      background: url('../assets/images/vue.png') no-repeat;
      background-size: 100%;
    }
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left-button {
        width: 4.64rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .button {
          width: 1.1rem;
          height: 0.4rem;
          text-align: center;
          line-height: 0.4rem;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 1);
          &:hover {
            background-color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
    h1.title {
      color: #fff;
      font-size: 2em;
    }
    .info {
      width: 1.27rem;
      height: 0.45rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .global-big-contral {
      width: 0.5rem;
      height: 0.5rem;
      background: url('../assets/images/icon-contral-full.png') no-repeat;
      background-size: 100%;
    }
  }
  .content {
    flex: 1;
  }
}
</style>

