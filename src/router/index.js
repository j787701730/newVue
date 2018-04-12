import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Books from '@/components/Books'
import Error from '@/components/Error'
// import config from '@/config/config'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    meta: {
      title: '主页'
    },
    component: Index,
    beforeEnter: (to, from, next) => {
      // ...
      // console.log('index')
      document.title = to.meta['title']
      next()
    }
  }, {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: '书籍',
      books: []
    },
    beforeEnter: (to, from, next) => {
      // ...
      // console.log(to)
      // console.log(config.a)
      // console.log(config.bb)
      // console.log(config.clear(10))
      document.title = to.meta['title']
      next()
    }
  }, {
    path: '*',
    name: 'Error',
    component: Error,
    meta: {
      title: '错误'
    },
    beforeEnter: (to, from, next) => {
      document.title = to.meta['title']
      next()
    }
  }]
})
