<template>
  <div id="content">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-link to="/">Go to 主页</router-link>
        <el-row :gutter="0">
          <el-col :span="12" v-for="(list,index) in lists" :key="index">
            <router-link :to="{path: 'content', query: {books_id: id,id:list.id}}">
              <div>{{list.name}}</div>
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
    name: "List",
    data() {
      return {
        id: this.$route.query.id,
        lists: []
      };
    },
    mounted: function () {
      var self = this;
      const params = new URLSearchParams();
      params.append('id', this.$route.query.id);
      axios
        .post("https://www.zhengw.top/getBook ", params)
        .then(function (response) {
          self.lists = response.data.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content {
    text-align: left;
  }
</style>
