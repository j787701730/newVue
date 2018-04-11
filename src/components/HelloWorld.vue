<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{id}}</h2>
    <h2>Essential Links</h2>
    <router-link to="/user">Go to User</router-link>
    <el-carousel indicator-position="outside" :interval="4000" type="card" height="300px" trigger="click" :autoplay="autoplay">
      <el-carousel-item v-for="(item,index) in items" :key="index">
        <div class="carousel-pic" :style="item.pic"></div>
        <!-- <img :src="item" alt=""> -->
        <!-- <h3>{{ index }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <div>{{id}}</div>
  </div>
</template>

<script>
import jpg1 from "@/assets/1.jpg";
import jpg2 from "@/assets/2.jpg";
import jpg3 from "@/assets/3.jpg";
import jpg4 from "@/assets/4.jpg";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      id: this.$route.params.id,
      // id: this.$route.query.a,
      items: [
        { pic: { "background-image": "url(" + jpg1 + ")" }, img: jpg1 },
        { pic: { "background-image": "url(" + jpg2 + ")" }, img: jpg2 },
        { pic: { "background-image": "url(" + jpg3 + ")" }, img: jpg3 },
        { pic: { "background-image": "url(" + jpg4 + ")" }, img: jpg4 }
      ],
      autoplay: false
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
