<template>
  <div id="app">
    <vHeader :seller="seller"></vHeader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link class="router-link" to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link class="router-link" to="/ratings">
          评论
        </router-link></div>
      <div class="tab-item">
        <router-link class="router-link" to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <transition name="fade">
      <router-view @addballs="addball" :seller="seller" :goods="goods"></router-view>
    </transition>
    <shopcart ref="shopCart" :selectMenu="selectMenu" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
  </div>
</template>

<script type="text/ecmascript-6">
  import request from 'superagent'
  import vHeader from 'components/header/header'
  import shopcart from 'components/shopcart/shopcart'

  const ERR_OK = 0

  export default {
    data() {
      return {
        seller: {},
        goods: []
      }
    },
    computed: {
      selectMenu() {
        let foods = []
        this.goods.forEach(good => good.foods.forEach(food => {
          if (food.count)
            foods.push(food)
        }))
        return foods
      }
    },
    methods: {
      addball(el) {
        //异步执行下落动画，优化体验
        this.$nextTick(() => {
          this.$refs.shopCart.drop(el)
        })
      }
    },
    created() {
      request.get('api/seller')
          .end((err, res) => {
            if (err)
              console.log(err)
            if (res.body.errno === ERR_OK)
              this.seller = res.body.data
          })
      request.get('/api/goods')
        .end((err, res) => {
          if (err)
            console.log(err)

          this.goods = res.body.data
        })
    },
    components: { vHeader, shopcart }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
  #app
    .tab
      width 100%
      height 40px
      display flex
      flex-flow row
      border-1px(rgba(7, 17, 27, .1))
      .tab-item
        flex 1
        line-height 40px
        text-align center
        & > .router-link
          display inline-block
          width 100%
          height 100%
          font-size 14px
          color rgb(77, 85, 93)
          &.router-link-active
            color rgb(240, 20, 20)
    .fade-enter
    .fade-leave-active
      opacity 0
    .fade-enter-active
    .fade-leave-active
      transition all .5s
      position absolute
</style>
