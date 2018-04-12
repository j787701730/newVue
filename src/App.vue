<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "微软雅黑",
    "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
    /* margin-top: 60px; */
  }
</style>
