<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul class="foods-menu">
				<li class="food border-1px" :class="{'highlist': currentIndex === index}" v-for="(good, index) of goods" @click="selectmenu(index, $event)">
					<span class="food-text">
						<span class="food-support" :class="classMap[good.type]" v-if="good.type!=-1"></span>
						{{ good.name }}
					</span>
				</li>
			</ul>
		</div>
		<div class="goods-wrapper" ref="goodsWrapper">
			<ul class="foods-items">
				<li class="foods-item food-list-hook" v-for="good of goods">
					<h1 class="title">{{ good.name }}</h1>
					<ul class="foods">
						<li @click="selectFood(food, $event)" class="food" v-for="food of good.foods">
							<div class="food-item">
								<div class="icon">
									<img width="57px" height="57px" :src="food.icon">
								</div>
								<div class="content">
									<div class="name">{{ food.name }}</div>
									<div class="desc">{{ food.description }}</div>
									<div class="ratings">
										<span class="sellCount">月售{{ food.sellCount }}</span><span class="rating">好评率{{ food.rating }}%</span>
									</div>
									<div class="prices">
										<span class="price">￥{{ food.price }}</span>
										<span class="oldPrice" v-show="food.oldPrice != ''">￥{{ food.oldPrice }}</span>
									</div>
									<div class="cartcontrol-wrapper">
										<cartcontrol :food="food" @addball="addball"></cartcontrol>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<food ref="foodDetail" :food="selectfood" @addBall="addball"></food>
		<!-- <shopCart ref="shopCart" :selectMenu="selectMenu" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"><shopCart> -->
	</div>
	
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import request from 'superagent'
	import BScroll from 'better-scroll'
	import shopCart from '../shopcart/shopcart'
	import cartcontrol from '../cartcontrol/cartcontrol'
	import food from '../food/food'

	const ERR_OK = 0

	export default {
		props: [ 'seller', 'goods' ],
		data() {
			return {
				// goods: [],
				heightList: [],
				scrollY: 0,
				selectfood: {},
			}
		},
		computed: {
			classMap() {
				return ['decrease', 'discount', 'special', 'invoice', 'guarantee']
			},
			currentIndex() {
				for (let [index, value] of this.heightList.entries()) {
					const cur = value
							, next = this.heightList[index + 1]

					if (!next || (this.scrollY < next && this.scrollY >= cur))
						return index
				}

				return 0
			},
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
			selectFood(food, e) {
				if (!e._constructed)
					return

				this.selectfood = food
				this.$refs.foodDetail.show()
			},
			_initScroll() {
				this.menuScroll = new BScroll(this.$refs.menuWrapper, {
					click: true
				})
				this.goodsScroll = new BScroll(this.$refs.goodsWrapper, {
					probeType: 3,
					click: true
				})

				this.goodsScroll.on('scroll', pos => {
					this.scrollY = Math.abs(Math.round(pos.y))
				})
			},
			_calculateHeight() {
				let goodList = this.$refs.goodsWrapper.querySelectorAll('.food-list-hook')
					, height = 0

				for (let item of goodList) {
					this.heightList.push(height)
					height += item.clientHeight
				}
			},
			selectmenu(index, e) {
				if (!e._constructed)
					return

				const target = this.$refs.goodsWrapper.querySelectorAll('.food-list-hook')[index]

				this.goodsScroll.scrollToElement(target, 500)
			},
			addball(el) {
				this.$emit('addballs', el)
				//异步执行下落动画，优化体验
				// this.$nextTick(() => {
				// 	this.$refs.shopCart.drop(el)
				// })
			}
		},
		created() {
			request.get('/api/goods')
					.end((err, res) => {
						if (err)
							console.log(err)

						// this.goods = res.body.data
						this.$nextTick(() => {
							this._initScroll()
							this._calculateHeight()
						})
					})
		},
		components: { shopCart, cartcontrol, food }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl'
	.goods
		display flex
		flex-flow row nowrap
		width 100%
		position absolute
		top 174px
		bottom 46px
		overflow hidden
		.menu-wrapper
			flex 0 0 80px
			width 80px
			background-color #f3f5f7
			.foods-menu
				.food
					display table
					width 56px
					height 54px
					padding-left 12px
					padding-right 12px
					&.highlist
						position relative
						margin-top -1px
						z-index 100
						background-color #fff
						.food-text
							border-none()
							font-weight 700
					.food-text
						display table-cell
						vertical-align middle
						width 56px
						font-size 12px
						font-weight 200
						line-height 14px
						padding-left 2px
						border-1px(rgba(7, 17, 27, .1))	
						.food-support
							display inline-block
							width 12px
							height 12px
							vertical-align top
							background-size 12px 12px
							background-repeat no-repeat
							&.decrease
								bg-image('decrease_3')
							&.discount
								bg-image('discount_3')
							&.guarantee
								bg-image('guarantee_3')
							&.invoice
								bg-image('invoice_3')
							&.special
								bg-image('special_3')		
		.goods-wrapper
			flex 1
			.foods-items
				.foods-item
					.title
						height 26px
						line-height 26px
						padding-left 14px
						font-size 12px
						color rgb(147, 153, 159)
						border-left 2px solid #d9dde1
						background-color #f3f5f7
					.foods
						& > .food:last-child
							.food-item
								border-none()
								padding-bottom 14px
								margin-bottom 0
						.food
							.food-item
								display flex
								margin 18px
								padding-bottom 18px
								font-size 0
								border-1px(rgba(7, 17, 27, .1))
								.icon
									display inline-block
									flex 0 0 57px
									margin-right 10px
								.content
									flex 1
									.name
										padding-top 2px
										font-size 14px
										line-height 14px
										color rgb(7, 17, 27)
										margin-bottom 8px
									.desc, .ratings
										font-size 10px
										line-height 10px
										margin-bottom 8px
										color rgb(147, 153, 159)
									.desc
										line-height 14px
									.ratings
										.rating
											padding-left 12px
									.prices
										.price
											color red
											font-size 14px
											font-weight 700
											line-height 24px
											padding-right 8px
										.oldPrice
											line-height 24px
											font-size 10px
											color rgb(147, 153, 159)
											text-decoration line-through
									.cartcontrol-wrapper
										position absolute
										right 18px
										bottom 10px
										
</style>