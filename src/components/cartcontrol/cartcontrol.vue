<template>
	<div class="cartcontrol">
		<transition name="slod">
			<div class="cart-decrease" v-show="food.count > 0" @click.stop.prevent="decreaseCount">
				<i class="iconfont icon-jian"></i>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>	
		<div class="cart-increase" @click.stop.prevent="increaseCount">
			<i class="iconfont icon-anonymous-iconfont"></i>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'

	export default{
		props: [ 'food' ],
		methods: {
			decreaseCount(e) {
				if (!e._constructed)
					return

				if (this.food.count > 0){
					this.food.count--
				}

			},
			increaseCount(e) {
				if (!e._constructed)
					return

				if (!this.food.count){
					Vue.set(this.food, 'count', 1)
				}
				else
					this.food.count++

				this.$emit('addball', e.target)
			}
		},
		created() {

		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	// @import '../../common/stylus/mixin.styl'
	.slod-enter-active
	.slod-leave-active
		transition all .5s
	.slod-enter
	.slod-leave-active
		opacity 0
		transform translate3d(24px, 0, 0) rotate(360deg)
	.cartcontrol
		font-size 0
		.cart-decrease
			display inline-block
			padding 6px
			.icon-jian
				color rgb(0, 160, 220)
				font-size 24px
				font-weight 700
				line-height 24px
		.cart-count
			display inline-block
			width 24px
			line-height 24px
			vertical-align top
			margin-top 6px
			font-size 10px
			color rgb(147, 153, 159)
			text-align center
		.cart-increase
			display inline-block
			padding 6px
			.icon-anonymous-iconfont
				color rgb(0, 160, 220)
				font-size 24px
				font-weight 700
				line-height 24px
		
</style>