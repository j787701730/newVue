<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>{{id}}</h2> -->
    <h2>我是详情页</h2>
    <router-link to="/">Go to 主页</router-link>


  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      msg: "Detail",
      // id: this.$route.params.id
      // id: this.$route.query.a,
      books: []
    };
  },
  mounted: function() {
    // var self = this;

    // axios
    //   .post("https://www.zhengw.top/getBooks", {
    //     firstName: "Fred",
    //     lastName: "Flintstone"
    //   })
    //   .then(function(response) {
    //     console.log(response.data);
    //     self.books = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
