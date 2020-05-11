<template>
  <div class="global-page">
      <div class="global-page-left">
        <div class="global-box">
            <BoxTitle :title="'性别比例1'" />
            <ehcart style="margin: .21rem 0 0 0" config='home-志愿者' height="2.32rem" width='4.63rem'/>
        </div>
        <div class="global-box">
            <div class="global-title-box">
                <BoxTitle :title="'年龄分布'" />
                <right-echarts-info :list="homeAgeList"></right-echarts-info>
            </div>
            <ehcart style="margin: .24rem 0 0 0" config='home-年龄分布' height="2.34rem" width='4.48rem'/>
        </div>
        <div class="global-box">
            <BoxTitle :title="'养老模式'" />
            <div class="global-box-content">
                <ehcart config='home-养老模式' height="1.93rem" width='2.57rem'/>
                <div class="home-model-right-info">
                    <div class="info" v-for="item in 5" :key="item+10">
                        <span>子女同处</span>
                        <span>7358</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="global-page-content">
        <div class="home-center">
            <div class="top-info">
                <div class="box-info" v-for="item in 3" :key="item+20">
                    <i></i>
                    <div class="right-info">
                        <p>223456</p>
                        <div>常驻人口</div>
                    </div>
                </div>
            </div>
            <dailog-map :title="'颛溪五村居委会'"/>
            <div class="bottom-info">
                <div class="box-info" v-for="item in 6" :key="item+30">
                    <p>89</p>
                    <div>为老中心</div>
                </div>
            </div>
        </div>
    </div>
    <div class="global-page-right">
        <div class="global-box">
            <div class="global-title-box">
                <BoxTitle :title="'老龄趋势'" />
                <right-echarts-info :list="homeOldList"></right-echarts-info>
            </div>
            <ehcart style="margin: .24rem 0 0 0" config='home-老龄趋势' height="2.34rem" width='4.63rem'/>
        </div>
        <div class="global-box">
            <BoxTitle :title="'服务项目'" />
            <div class="global-box-content">
                <div class="home-server-left-info">
                    <div class="top">
                        <div>
                            <p>289</p>
                            <span>服务项目</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <div>
                            <p>89</p>
                            <span>服务商</span>
                        </div>
                    </div>
                </div>
                <ehcart config='home-服务项目' height="2.35rem" width='2.8rem'/>
            </div>
        </div>
        <div class="global-box">
            <BoxTitle :title="'志愿者'" />
            <ehcart style="margin: .21rem 0 0 0" config='home-志愿者' height="2.32rem" width='4.63rem'/>
        </div>
        <contral-map />
    </div>
  </div>
</template>

<script>
import dailogMap from '@/components/dailog-map';
import contralMap from '@/components/map-contral';
export default {
  data () {
    return {
        homeOldList: [{
            title:'人数',
            style: 'background:#69D89B'
        },{
            title:'百分比',
            style: 'background:#EFB864'
        }],
        homeAgeList: [{
            title:'男',
            style: 'background:#4983E1'
        },{
            title:'女',
            style: 'background:#DB69BA'
        }],
    }
  },
  mounted() {
  },
  methods:{
  },
  components:{
      dailogMap,
      contralMap
  }
}
</script>

<style lang="less" scoped>
// 左边养老模式
.home-model-right-info{
    width: 1.34rem;
    height: 1.81rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info{
        display: flex;
        flex-direction: row;
        span {
            color: #fff;
            font-size: .2rem;

        }
    }
}
// 中间
.home-center{
    width: 7.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top-info{
        width: 100%;
        height: .99rem;
        background: url('../../assets/images/home-top-center-bg.png') no-repeat;
        background-size: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .13rem .37rem;
        .box-info{
            display: flex;
            flex-direction: row;
            align-items: center;
            i{
                width: .4rem;
                height: .4rem;
                background: url('../../assets/images/icon-home-top-info-icon1.png') no-repeat;
                background-size: 100%;
            }
            .right-info{
                margin: 0 0 0 .16rem;
                p{
                    width:auto;
                    height:.55rem;
                    font-size:.45rem;
                    font-family:"DIGITAL-Regular";
                    color:rgba(158,195,255,1);
                    line-height:.55rem;
                }
                div{
                    width:.52rem;
                    height:.19rem;
                    font-size:.13rem;
                    font-family:"PINGFANG-REGULAR";
                    font-weight:400;
                    color:rgba(154,180,223,1);
                    line-height:.19rem;
                }
            }
        }
    }
    .bottom-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 6.81rem;
        margin: 0 .31rem .15rem;
        .box-info {
            width: 1.04rem;
            height: .91rem;
            background: url('../../assets/images/home-bottom-box-bg.png') no-repeat;
            background-size: 100%;
            padding: .16rem .26rem .18rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            p{
                width: auto;
                height:.33rem;
                font-size:.29rem;
                font-family:"arial";
                font-weight:normal;
                color:rgba(158,195,255,1);
                line-height:.34rem;
            }
            div{
                width:.52rem;
                height:.19rem;
                font-size:.13rem;
                font-family:"PINGFANG-REGULAR";
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:.19rem;
            }
        }
    }
}
// 右边服务项目处
.home-server-left-info{
    width: 1.2rem;
    height: 2.17rem;
    position: relative;
    .top,.bottom{
        width:1.20rem;
        height:1.20rem;
        line-height:1.20rem;
        border:.02rem solid rgba(239,184,100,1);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div{
            width: .6rem;
            height: .62rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            p{
                width:.54rem;
                height:.36rem;
                font-size:.32rem;
                font-family:"arial";
                font-weight:normal;
                color:rgba(239,184,100,1);
                line-height:.37rem;
                text-align: center;
            }
            span{
                width:.48rem;
                height:.17rem;
                font-size:.12rem;
                font-family:"PINGFANG-REGULAR";
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:.17rem;
                margin: .09rem 0 0 0;
                text-align: center;
            }
        }
    }
    .top{
        padding: 0 0 .2rem 0;
    }
    .bottom {
        position: absolute;
        bottom: 0;
        padding: .2rem 0 0 0;
        border-color: #69D89B;
        div{
            p{
                color:#69D89B
            }
            span{
                color:#69D89B
            }
        }
    }
}
</style>
