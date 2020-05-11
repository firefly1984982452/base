<template>
  <div class="page">
        <div class="header">
            <div class="logo" @click="changePage('0')"></div>
            <div class="menu">
                <div class="left-button">
                    <div class="button" :class="currentMenu == '1' ? 'actived' : ''" @click="changePage('1')"></div>
                    <div class="button" :class="currentMenu == '2' ? 'actived' : ''" @click="changePage('2')"></div>
                    <div class="button" :class="currentMenu == '3' ? 'actived' : ''" @click="changePage('3')"></div>
                    <div class="button" :class="currentMenu == '4' ? 'actived' : ''" @click="changePage('4')"></div>
                </div>
                <div class="null">
                    <div class="line"></div>
                </div>
            </div>
            <div class="info">
                <time-info />
            </div>
        </div>
        <div class="global-big-contral"></div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import timeInfo from '../components/time'
export default {
  data () {
    return {
        currentMenu: '0' // 当前选中的菜单，默认是首页（0）
    }
  },
  components: {
      timeInfo
  },
  methods: {
      changePage (data) {
          this.currentMenu = data;
          let url = ''
          switch (data) {
              case '0':
                  url = 'page'
                  break;
          
              case '1':
                  url = 'PageElder'
                  break;
          
              case '2':
                  url = 'PageResource'
                  
                  break;
          
              default:
                  break;
          }
          this.$router.push({
              path: url
          })
      }
  }
}
</script>

<style lang="less" scoped>
.page {
    width: 100%;
    // height: 100%;
    background: url('../assets/images/bg-home.png') no-repeat;
    background-size: 100%;
    .header {
        width: 100%;
        height: .88rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .22rem .7rem .16rem .15rem;
        background: url('../assets/images/home-herder-bg.png') no-repeat;
        background-size: 100%;
        .logo {
            width: 1.18rem;
            height: .5rem;
            background:url('../assets/images/LOGO.png') no-repeat;
            background-size: 100%;
            display: flex;
        }
        .menu {
            width: 15.9rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 0 0 .83rem;
            .null{
                width: 10.43rem;
                display: flex;
                align-items: flex-end;
                padding: 0 0 0 .4rem;
                .line {
                    width: 4.74rem;
                    height: .12rem;
                    background: url('../assets/images/home-header-bottom-line.png') no-repeat;
                    background-size: 100%;
                }
            }
            .left-button{
                width: 4.64rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .button{
                    width: 1.1rem;
                    height: .4rem;
                }
                :nth-child(1){
                    background: url('../assets/images/menu-elder.png') no-repeat;
                    background-size: 100%;
                }
                :nth-child(2){
                    background: url('../assets/images/menu-resource.png') no-repeat;
                    background-size: 100%;
                }
                :nth-child(3){
                    background: url('../assets/images/menu-service.png') no-repeat;
                    background-size: 100%;
                }
                :nth-child(4){
                    background: url('../assets/images/menu-hml.png') no-repeat;
                    background-size: 100%;
                }
                .actived:nth-child(1){
                    background: url('../assets/images/menu-elder-actived.png') no-repeat;
                    background-size: 100%;
                }
                .actived:nth-child(2){
                    background: url('../assets/images/menu-resource.png') no-repeat;
                    background-size: 100%;
                }
                .actived:nth-child(3){
                    background: url('../assets/images/menu-service.png') no-repeat;
                    background-size: 100%;
                }
                .actived:nth-child(4){
                    background: url('../assets/images/menu-hml.png') no-repeat;
                    background-size: 100%;
                }
            }
        }
        .info {
            width: 1.27rem;
            height: .45rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
        .global-big-contral{
            width:.45rem;
            height:.45rem;
            background:url('../assets/images/icon-contral-full.png') no-repeat;
            background-size: 100%;
            position: fixed;
            right: 0;
            top: 0;
        }
    .content {
        height: 9.92rem;
    }
}
</style>
