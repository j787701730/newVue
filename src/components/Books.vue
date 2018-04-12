<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{id}}</h2>
    <h2>Essential Links</h2>
    <router-link to="/">Go to 主页</router-link>
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  <template>
    <el-table
      :data="books"
      >
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="author"
        label="作品">
      </el-table-column>
    </el-table>
  </template>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Books",
  data() {
    return {
      msg: "Books",
      // id: this.$route.params.id
      id: this.$route.query.a,
      books: []
    };
  },
  mounted: function() {
    var self = this;

    axios
      .post("https://www.zhengw.top/getBooks", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        console.log(response.data);
        self.books = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
