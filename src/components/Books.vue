<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-link to="/">Go to 主页</router-link>
        <el-row :gutter="20" v-for="(book,index) in books" :key="index">
          <el-col :span="6">
            <router-link :to="{path: 'list', query: {id: book.id}}">
              <div>{{book.name}}</div>
              <div>{{book.author}}</div>
            </router-link>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Books",
    data() {
      return {
        // msg: "Books",
        // id: this.$route.params.id
        // id: this.$route.query.a,
        books: []
      };
    },
    mounted: function () {
      var self = this;
      // const params = new URLSearchParams();
      // params.append('id', this.$route.query.id);
      axios
        .post("https://www.zhengw.top/getBooks")
        .then(function (response) {
          self.books = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
