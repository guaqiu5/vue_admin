<template>
  <div>
      Home
      <el-button type="primary" @click="exit">注销</el-button>
  </div>
</template>

<script>
export default {
 methods:{
   exit(){
     window.sessionStorage.clear()
     this.$router.push('/login')
   }
 }
}
</script>

<style>

</style>