<template>
  <div id="content">
    <el-container>
      <el-header>{{chapter}}</el-header>
      <el-main>
        <el-row :gutter="0">
          <el-col :span="8">
            <router-link v-if="prev" @click.native="flushCom"
                         :to="{path: 'content', query: {books_id:books_id,id: prev}}">上一回
            </router-link>
            <span v-else>上一回</span>
          </el-col>
          <el-col :span="8">
            <router-link :to="{path: 'list', query: {id: books_id}}">Go to 目录</router-link>
          </el-col>
          <el-col :span="8">
            <router-link @click.native="flushCom" v-if="next"
                         :to="{path: 'content', query: {books_id:books_id,id: next}}">下一回
            </router-link>
            <span v-else>下一回</span>
          </el-col>
        </el-row>

        <pre id="book-content">{{content}}</pre>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Content",
    data() {
      return {
        books_id: this.$route.query.books_id,
        content: '',
        chapter: '',
        prev: '',
        next: ''
      };
    },
    mounted: function () {
      var self = this;
      const params = new URLSearchParams();
      params.append('books_id', this.$route.query.books_id);
      params.append('id', this.$route.query.id);
      axios
        .post("https://www.zhengw.top/getContent ", params)
        .then(function (response) {
          self.content = response.data[0].content;
          self.chapter = response.data[0].name;
          self.prev = response.data.prev;
          self.next = response.data.next;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      flushCom: function () {
        this.$router.go(0);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #book-content {
    word-break: break-all;
    text-align: left;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
</style>
