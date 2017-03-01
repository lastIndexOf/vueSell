// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from 'router/index'

import 'common/stylus/index.styl'

Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  components: { App }
})

router.push('/goods')