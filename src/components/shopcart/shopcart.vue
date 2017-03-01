<template>
	<div class="shopcart">
		<div class="content">
			<div class="left" @click="isFlod">
				<div class="logo-wrapper" :class="{'shopping': totalPrice > 0}">
					<div class="logo">
						<i class="iconfont icon-baketb"></i>	
					</div>
					<div class="num" v-show="shopNum > 0">{{ shopNum }}</div>			
				</div>
				<div class="totalPrice" :class="{'shopping': totalPrice > 0}">￥{{ totalPrice }}</div>
				<div class="extraPrice">另还需配送费￥{{ deliveryPrice }}元</div>
			</div>
			<div class="right" @click="pay">
				<div class="sendPrice" :class="{ 'shopping': totalPrice >= minPrice, 'notEnough': totalPrice < minPrice && totalPrice > 0 }">
					{{ sendPrice }}
				</div>
			</div>
		</div>
		<div class="ball-container">
			<div v-for="ball of balls">
				<transition
					name="drop"
					@before-enter="beforeEnter"
					@enter="enter"
					@after-enter="afterEnter">
					<div class="ball" v-show="ball.show">
						<div class="inner inner-hook"></div>
					</div>
				</transition>
			</div>	
		</div>
		<transition name="flod">
			<div class="shopcart-list" v-show="isShow">
				<div class="list-header">
					<h1 class="title">购物车</h1>
					<span class="empty" @click="empty">清空</span>
				</div>
				<div class="list-content" ref="listContent">
					<ul>
						<li class="food" v-for="food of selectMenu">
							<div class="name">{{ food.name }}</div>
							<div class="price">
								￥{{ food.price * food.count }}
							</div>
							<div class="cartcontrol-wrapper">
								<cartcontrol @addball="addball" :food="food"></cartcontrol>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</transition>
		<transition name="fadein">
			<div class="mark" v-show="isShow" @click="isFlod"></div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
	import cartcontrol from '../cartcontrol/cartcontrol'
	import BScroll from 'better-scroll'

	export default {
		props: {
			selectMenu: {
				type: Array,
				default() {
					return []
				}
			},
			deliveryPrice: {
				type: Number,
				default: 0
			},
			minPrice: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				balls: [{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				},
				{
					show: false
				}],
				dropBalls: [],
				flod: true
			}
		},
		computed: {
			totalPrice() {
				let total = 0
				this.selectMenu.forEach(item => total += (item.price * item.count))

				return total
			},
			shopNum() {
				let num = 0
				this.selectMenu.forEach(item => num += item.count)
				return num
			},
			sendPrice() {
				if (this.totalPrice === 0)
					return `￥${ this.minPrice }元起送`
				if (this.totalPrice > 0 && this.totalPrice < this.minPrice)
					return `还差￥${ this.minPrice - this.totalPrice }元起送`
				if (this.totalPrice >= this.minPrice)
					return `去结算`
			},
			isShow() {
				if (!this.shopNum)
					return false

				if (!this.flod) {
					this.$nextTick(() => {
						if (!this.scroll) {
							this.scroll = new BScroll(this.$refs.listContent, {
								click: true
							})
						} else {
							this.scroll.refresh()
						}
					})
				}

				return !this.flod
			}
		},
		methods: {
			isFlod() {
				if (this.shopNum)
					this.flod = !this.flod
				else return
			},
			drop(el) {
				for (let ball of this.balls) {
					if (!ball.show) {
						ball.el = el
						ball.show = true
						this.dropBalls.push(ball)

						return
					}
				}
			},
			addball(el) {
				this.$nextTick(() => {
					this.drop(el)
				})
			},
			empty() {
				this.selectMenu.forEach(food => food.count = 0)
			},
			pay() {
				if (this.totalPrice < this.minPrice)
					return

				alert(`支付${ this.totalPrice }元`)
			},
			beforeEnter(el) {
				for (let ball of this.balls) {
					if (ball.show) {
						const rect = ball.el.getBoundingClientRect()
								, x = rect.left - 32
								, y = -(window.innerHeight - rect.top -22)
								, inner = el.querySelector('.inner-hook')

						el.style.webkitTransform = `translate3d(0, ${ y }px, 0)`
						el.style.transform = `translate3d(0, ${ y }px, 0)`
						inner.style.webkitTransform = `translate3d(${ x }px, 0, 0)`
						inner.style.transform = `translate3d(${ x }px, 0, 0)`
					}
				}
			},
			enter(el, done) {
				const rf = el.offsetHeight

				this.$nextTick(() => {
					const inner = el.querySelector('.inner-hook')

					el.style.webkitTransform = 'translate3d(0, 0, 0)'
					el.style.transform = 'translate3d(0, 0, 0)'
					inner.style.webkitTransform = 'translate3d(0, 0, 0)'
					inner.style.transform = 'translate3d(0, 0, 0)'
					el.addEventListener('transitionend', done);
				})
			},
			afterEnter(el) {
				const ball = this.dropBalls.shift()

				if (ball) {
					ball.show = false
					el.style.display = 'none'
				}
			}
		},
		components: { cartcontrol }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
	.fadein-enter-active
	.fadein-leave-active
		transition all .5s
	.fadein-enter
	.fadein-leave-active
		opacity 0
	.flod-enter-active
	.flod-leave-active
		transition all .5s
	.flod-enter
	.flod-leave-active
		transform-origin 0% 200%
		transform rotateX(90deg)
	.drop-enter-active
	.drop-leave-active
		transition all .4s cubic-bezier(.49, -0.29, .75, .41)
	.shopcart
		position fixed
		z-index 50
		left 0
		bottom 0
		width 100%
		.content
			display flex
			font-size 0
			height 48px
			.left
				flex 1
				background-color #141d27
				.logo-wrapper
					display inline-block
					position relative
					top -10px
					width 44px
					height 44px
					margin 0 12px
					padding 6px
					border-radius 50%
					background-color #141d27
					.num
						position absolute
						top 0
						right 0
						width 24px
						height 16px
						line-height 16px
						text-align center
						font-size 9px
						font-weight 700
						color #fff
						border-radius 6px
						background-color rgb(240, 20, 20)
						box-shadow 0px 4px 8px 0px rgba(0, 0, 0, .4)
					&.shopping
						.logo
							background-color rgb(0, 160, 220)
							.icon-baketb
								color #fff
					.logo
						width 100%
						height 100%
						border-radius 50%
						background-color #2b343c
						text-align center
						.icon-baketb
							font-size 24px
							line-height 44px
							color rgba(255, 255, 255, .4)
				.totalPrice
					display inline-block
					line-height 24px
					font-size 16px
					font-weight 700
					color rgba(255, 255, 255, .4)
					padding-right 12px
					margin-top 12px
					border-right 1px solid rgba(255, 255, 255, .2)
					vertical-align top
					&.shopping
						color #fff
				.extraPrice
					display inline-block
					font-size 12px
					font-weight 200
					line-height 48px
					padding-left 12px
					color rgba(255, 255, 255, .4)
					vertical-align top
					@media screen and (max-width: 350px)
						width 30%
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
			.right
				flex 0 0 105px
				width 105px
				text-align center
				.sendPrice
					height 100%
					font-size 12px
					line-height 48px
					color rgba(255, 255, 255, .4)
					background-color #666
					&.notEnough
						background-color #2b333b
					&.shopping
						color #fff
						font-weight 700
						background-color #00b43c
		.ball-container
			.ball
				position fixed
				left 32px
				bottom 22px
				z-index 200
				.inner
					width 16px
					height 16px
					border-radius 50%
					background-color rgb(0, 160, 220)
					transition all .4s linear
		.shopcart-list
			position absolute
			bottom 48px
			left 0
			z-index -1
			width 100%
			.list-header
				height 40px
				line-height 40px
				padding 0 18px
				background-color #f3f5f7
				border-bottom 1px solid rgba(7, 17, 27, .1)
				.title
					float left
					font-size 17px
					color rgb(7, 17, 27)
				.empty
					float right
					font-size 12px
					color rgb(0, 160, 220)
			.list-content
				width 100%
				max-height 217px
				overflow hidden
				background-color #fff
				.food
					position relative
					padding 12px 0
					margin 0 18px
					border-1px(rgba(7, 17, 27, .1))
					.name
						display inline-block
						font-size 14px
						line-height 24px
						color rgb(7, 17, 27)
					.price
						position absolute
						right 90px
						bottom 12px
						line-height 24px
						margin 0 12px 0 18px
						font-size 14px
						font-weight 700
						color rgb(240, 20, 20)
					.cartcontrol-wrapper
						position absolute
						right 0px
						bottom 6px
		.mark
			position fixed
			top 0
			left 0
			width 100%
			height 100%
			z-index -2
			background-color rgba(7, 17, 27, .6)
			backdrop-filter: blur(10px)
</style>