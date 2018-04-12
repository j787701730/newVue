<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-link to="/books">Go to Books</router-link>
        <el-carousel class="carousel-con" indicator-position="outside" :interval="4000" type="card" height="400px"
                     trigger="click"
                     :autoplay="autoplay">
          <el-carousel-item v-for="(item,index) in items" :key="index">
            <div class="carousel-pic" :style="item.pic"></div>
            <!-- <img :src="item" alt=""> -->
            <!-- <h3>{{ index }}</h3> -->
          </el-carousel-item>
        </el-carousel>
        <h1>人生的最高境界是佛为心，道为骨，儒为表，大度看世界。技在手，能在身，思在脑，从容过生活。</h1>
        <h1>三千年读史，不外功名利禄；九万里悟道，终归诗酒田园。</h1>
        <h1>秋风落叶乱为堆，
          <br>扫去还来千百回。
          <br>一笑罢休闲处坐，
          <br>任他着地自成灰。
        </h1>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import jpg1 from "@/assets/1.jpg";
  import jpg2 from "@/assets/2.jpg";
  import jpg3 from "@/assets/3.jpg";
  import jpg4 from "@/assets/4.jpg";

  export default {
    name: "Index",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        id: this.$route.params.id,
        // id: this.$route.query.a,
        items: [
          {pic: {"background-image": "url(" + jpg1 + ")"}, img: jpg1},
          {pic: {"background-image": "url(" + jpg2 + ")"}, img: jpg2},
          {pic: {"background-image": "url(" + jpg3 + ")"}, img: jpg3},
          {pic: {"background-image": "url(" + jpg4 + ")"}, img: jpg4}
        ],
        autoplay: true
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  .el-carousel__item h3 {
    color: #fff;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .carousel-con {
    background: #f9f9f9;
  }

  .carousel-pic {
    height: 100%;
    background-clip: content-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
