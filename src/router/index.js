import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import config from '@/config/config'

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
      title: 'user'
    },
    beforeEnter: (to, from, next) => {
      // ...
      console.log(config.a)
      console.log(config.bb)
      console.log(config.clear(10))
      document.title = to.meta['title']
      next()
    }
  }]
})
