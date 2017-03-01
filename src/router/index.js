import Vue from 'vue'
import Router from 'vue-router'
import vGoods from 'components/goods/goods'
import vSeller from 'components/seller/seller'
import vRatings from 'components/ratings/ratings'

Vue.use(Router)

export default new Router({
  routes: [ 
  { path: '/goods', component: vGoods },
  { path: '/seller', component: vSeller },
  { path: '/ratings', component: vRatings } ]
})
