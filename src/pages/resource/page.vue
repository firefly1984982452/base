<template>
  <div class="hello">
    <div class="global-box">
      <ehcart
        config='test'
        height="3.58rem"
        width='100%'/>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created(){
    // console.log(this.$store.state.tabsList)
  },
  mounted() {
    this.$eventBus.$on('sendMsg', v=> {
      console.log(v)
    })
  }
}
</script>

<style scoped>
p{
  width: 4.9rem;
  background-color: #f0f;
}
</style>
