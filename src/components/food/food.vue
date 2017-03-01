<template>
	<transition name="rightin">
		<div class="food-detail" v-show="showFlag" ref="food">
			<div class="container">
				<div class="desc-img">
					<img :src="food.image" width="100%">
					<i @click="showFlag = false" class="iconfont icon-arrow_lift"></i>
				</div>
				<div class="content">
					<header class="detail-header">
						<div class="name">{{ food.name }}</div>
						<div class="description">
							<span class="sellCount">月售{{ food.sellCount }}份</span><span class="rating">好评率{{ food.rating }}%</span>
						</div>
						<div class="prices">
							<span class="price">￥{{ food.price }}</span><span v-show="food.oldPrice" class="oldPrice">￥{{ food.oldPrice }}</span>
						</div>
						<div class="cartcontrol-wrapper">
							<cartcontrol v-show="food.count > 0" ref="cartcontro" @addball="addball" :food="food"></cartcontrol>
						</div>
						<transition name="loseout">
							<div class="buy" v-show="!food.count || food.count === 0" @click="addFirst">
							加入购物车
						</div>
						</transition>
					</header>
					<section class="detail-content">
						<h1 class="content-head">商品介绍</h1>
						<p v-if="food.info" class="content-desc">{{ food.info }}</p>
						<p class="content-desc" v-else>暂无简介..</p>
					</section>
					<section class="rating">
						<h1 class="title">商品评价</h1>
						<div class="ratingselect-wrapper">
							<ratingselect @contentChanged="contentChanged" @typeChanged="typeChanged" :ratings="food.ratings" :desc="desc" :onlyContent="onlyContent" :selectType="selectType"></ratingselect>
						</div>
					</section>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import BScroll from 'better-scroll'
	import cartcontrol from '../cartcontrol/cartcontrol'
	import ratingselect from '../ratingselect/ratingselect'

	const POSITIVE = 0
		, NEGATIVE = 1
		, ALL = 2

	export default {
		props: [ 'food' ],
		data() {
			return {
				showFlag: false,
				selectType: ALL,
				onlyContent: true,
				desc: {
					all: '全部',
					positive: '推荐',
					negative: '吐槽'
				}
			}
		},
		methods: {
			show() {
				this.showFlag = true
				
				this.selectType = ALL
				this.onlyContent = true

				this.$nextTick(() => {
					if (!this._scroll) {
						this._scroll = new BScroll(this.$refs.food, {
							click: true
						})
					} else {
						this._scroll.refresh()
					}
				})
			},
			typeChanged(type) {
				this.selectType = type

				this.$nextTick(() => {
					this._scroll.refresh()
				})
			},
			contentChanged() {
				this.onlyContent = !this.onlyContent

				this.$nextTick(() => {
					this._scroll.refresh()
				})
			},
			addball(el) {
				this.$emit('addBall', el)
			},
			addFirst(e) {
				if (!e._constructed)
					return

				Vue.set(this.food, 'count', 1)
				this.$emit('addBall', e.target)
			}
		},
		components: { cartcontrol, ratingselect }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.loseout-enter-active
	.loseout-leave-active
		transition all .5s
	.loseout-enter
	.loseout-leave-active
		opacity 0
	.rightin-enter-active
	.rightin-leave-active
		transition all .5s
	.rightin-enter
	.rightin-leave-active
		transform translate3d(100%, 0, 0)
	.food-detail
		position fixed
		left 0
		top 0
		bottom 48px
		width 100%
		z-index 20
		font-size 0
		overflow hidden
		background-color #f3f5f7
		.container
			background-color #f3f5f7
			.desc-img
				position relative
				.icon-arrow_lift
					position absolute
					left 3px
					top 6px
					padding 8px
					font-size 18px
					color #fff
			.content
				.detail-header
					position relative
					background-color #fff
					padding 18px 0 18px 18px
					margin-bottom 16px
					.name
						font-size 14px
						font-weight 700
						line-height 14px
						color rgb(7, 17, 27)
						padding-bottom 8px
					.description
						padding-bottom 18px
						.sellCount, .rating
							font-size 10px
							line-height 10px
							color rgb(147, 153, 159)
							padding-right 12px
					.prices
						.price
							font-size 14px
							font-weight 700
							line-height 24px
							color rgb(240, 20, 20)
							padding-right 12px
						.oldPrice
							font-size 10px
							font-weight normal
							line-height 24px
							color rgb(147, 153, 159)
							text-decoration line-through
					.buy
						position absolute
						right 18px
						bottom 18px
						height 24px
						width 84px
						padding 0 12px
						line-height 24px
						text-align center
						color #fff
						font-size 10px
						border-radius 12px
						background-color rgb(0, 160 ,220)
						box-sizing border-box
					.cartcontrol-wrapper
						position absolute
						right 12px
						bottom 12px
				.detail-content
					background-color #fff
					padding 18px
					margin-bottom 16px
					.content-head
						font-size 14px
						font-weight 500
						line-height 14px
						color rgb(7, 17, 27)
						padding-bottom 6px
					.content-desc
						padding 8px
						font-size 12px
						font-weight 200
						line-height 24px
						color rgb(77, 85, 93)
				.rating
					background-color #fff
					padding 18px
					margin-bottom 16px
					.title
						font-size 14px
						font-weight 500
						line-height 14px
						color rgb(7, 17, 27)
						padding-bottom 6px
</style>