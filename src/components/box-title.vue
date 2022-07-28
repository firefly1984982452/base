<template>
  <p class="title">
    <i></i>
    <span>{{title}}</span>
  </p>
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
.title {
  display: flex;
  height: 0.25rem;
  line-height: 0.25rem;
  align-items: center;
  i {
    width: 0.12rem;
    height: 0.12rem;
    background: url('../assets/images/icon-box-title.png') no-repeat;
    background-size: 100%;
  }
  span {
    width: auto;
    height: 0.25rem;
    font-size: 0.18rem;
    font-weight: 500;
    color: rgba(129, 172, 244, 1);
    line-height: 0.25rem;
    margin: 0 0 0 0.05rem;
  }
}
</style>
