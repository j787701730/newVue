import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import config from '@/config/config'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    meta: {
      title: 'index'
    },
    component: HelloWorld,
    beforeEnter: (to, from, next) => {
      // ...
      console.log('index')
      document.title = to.meta['title']
      next()
    }
  }, {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: 'user',
      books: []
    },
    beforeEnter: (to, from, next) => {
      // ...
      console.log(to);
      console.log(config.a)
      console.log(config.bb)
      console.log(config.clear(10))
      document.title = to.meta['title']
      axios.post('https://www.zhengw.top/getBooks', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
        .then(function (response) {
          console.log(response.data)
          to.meta['books'] = response.data
          next()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }]
})
