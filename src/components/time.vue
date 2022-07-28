<template>
  <div class="time-info">
    <div class="time">
      <p>{{time}}</p>
      <span>{{date}}</span>
    </div>
    <div class="weather"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      date: '',
    }
  },
  created() {
    this.getTime()
    this.getDate()
    let intervalID = setInterval(() => {
      this.getTime()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalID)
  },
  methods: {
    getTime() {
      var time = new Date()
      var H = time.getHours()
      var mi = time.getMinutes()
      var s = time.getSeconds()
      if (H < 10) {
        H = '0' + H
      }
      if (mi < 10) {
        mi = '0' + mi
      }
      if (s < 10) {
        s = '0' + s
      }
      this.time = H + ':' + mi + ':' + s
      if (H == '0' && mi == '00' && s == '00') {
        this.getDate()
      }
    },
    getDate() {
      var time = new Date()
      var Y = time.getFullYear()
      var m = time.getMonth() + 1
      var d = time.getDate()
      if (m < 10) {
        m = '0' + m
      }
      if (d < 10) {
        d = '0' + d
      }
      this.date = Y + '-' + m + '-' + d
    },
  },
}
</script>

<style lang="less" scoped>
.time-info {
  width: 1.26rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .time {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      width: 0.8rem;
      height: 0.28rem;
      font-size: 0.2rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 0.28rem;
    }
    span {
      width: 0.8rem;
      height: 0.18rem;
      font-size: 0.13rem;
      font-weight: 400;
      color: rgba(185, 193, 232, 1);
      line-height: 0.18rem;
    }
  }
  .weather {
    width: 0.4rem;
    height: 0.4rem;
    background: url('../assets/images/icon-weather.png') no-repeat;
    background-size: 100%;
  }
}
</style>
