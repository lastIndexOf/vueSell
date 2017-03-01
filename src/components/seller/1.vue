<template>
	<div class="seller" ref="seller">
		<div class="seller-container">
			<div class="overview">
				<div class="top">
					<h1 class="title">
						{{ seller.name }}
					</h1>
					<div class="star-wrapper">
						<star :score="seller.score" :size="36"></star>
						<span class="num">({{ ratings.length }})</span>
						<span class="sellCount">月售{{ seller.sellCount }}单</span>
					</div>
					<div class="loves" @click="isLoved">
						<i class="iconfont icon-xihuan" :class="{'selected':collected}"></i>
						<span class="collect">{{ loved }}</span>
						<!-- <transition 
									name="fadeout"
									@enter-before="enterBefore"
									@enter="Enter"
									@after-enter="afterEnter">
							<span class="plus-1" v-show="collected">+1</span>
						</transition> -->
					</div>
				</div>
				<div class="bottom">
					<div class="first">
						<h3 class="title">起送价</h3>
						<span class="price">{{ seller.minPrice }}<span>元</span></span>
					</div>
					<div class="first">
						<h3 class="title">商家配送</h3>
						<span class="price">{{ seller.deliveryPrice }}<span>元</span></span>
					</div>
					<div class="first">
						<h3 class="title">平均配送时间</h3>
						<span class="price">{{ seller.deliveryTime }}<span>分钟</span></span>
					</div>
				</div>
			</div>
			<div class="activities">
				<div class="bulletin">
					<h1 class="title">公告与活动</h1>
					<p class="content">{{ seller.bulletin }}</p>
				</div>
				<div class="activity">
					<ul class="item-list" v-if="seller.supports">
						<li class="item" v-for="support of seller.supports">
							<span class="icon" :class="classMap[support.type]"></span>
							<span class="text">{{ support.description }}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="pics-wrapper">
				<h1 class="title">
					商家实景
				</h1>
				<div class="pics">
					<div ref="picWrapper">
						<img width="120" height="90" v-for="pic of seller.pics" :src="pic">
					</div>
				</div>
			</div>
			<div class="information-wrapper">
				<h1 class="title">
					商机信息
				</h1>
				<div class="informations">
					<ul class="information-list">
						<li class="information" v-for="info of seller.infos">
							<span>{{ info }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import request from 'superagent'
	import BScroll from 'better-scroll'
	import star from '../star/star'

	export default {
		props: [ 'seller' ],
		data() {
			return {
				collected: false,
				ratings: [],
				classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
			}
		},
		computed: {
			loved() {
				if (this.collected)
					return '已收藏'
				else
					return '点击收藏'
			}
		},
		methods: {
			isLoved(e) {
				if (e._constructed)
					return

				this.collected = !this.collected
			}
		},
		created() {
			request.get('/api/ratings')
					.end((err, res) => {
						if (err)
							console.log(err)

						this.ratings = res.body.data
						this.$nextTick(() => {
							this.scroll = new BScroll(this.$refs.seller, {
								click: true
							})
						})
					})
		},
		mounted() {
			if (this.seller.pics) {
				const picWidth = 120
						, margin = 6
						, width = (picWidth + margin) * this.seller.pics.length - margin

				this.$refs.picWrapper.style.width = width + 'px'

				this.$nextTick(() => {
					if (!this.picScroll)
						this.picScroll = new BScroll(this.$refs.picWrapper, {
							scrollX: true,
							eventPassthrough: 'vertical'
						})
					else this.picScroll.refresh()

					console.log(this.picScroll)
				})
			}
		},
		components: { star }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
	// .fadeout-enter-active
	// .fadeout-leave-active
	// 	transition all .3s
	// .fadeout-enter
	// .fadeout-leave-active
	// 	opacity 0
	// 	transform translateY(150%)
	.seller
		position fixed
		top 174px
		bottom 48px
		width 100%
		overflow hidden
		background-color #f3f5f7
		.seller-container
			font-size 0
			.overview
				background-color #fff
				margin-bottom 16px
				.top
					position relative
					padding 18px
					border-1px(rgba(147, 153, 159, .2))
					.title
						font-size 14px
						line-height 14px
						color rgb(7, 17, 27)
						padding-bottom 8px
					.star-wrapper
						display inline-block
						.num
							vertical-align top
							font-size 10px
							line-height 18px
							color rgb(77, 85, 93)
							padding-right 12px
						.sellCount
							vertical-align top
							font-size 10px
							line-height 18px
							color rgb(77, 85, 93)
					.loves
						position absolute
						right 18px
						top 50%
						padding 5px
						text-align center
						transform translateY(-50%)
						.icon-xihuan
							display block
							font-size 24px
							line-height 24px
							color #000
							padding-bottom 4px
							&.selected
								color rgb(240, 20, 20)
						.collect
							font-size 10px
							color rgb(77, 85, 93)
						.plus-1
							position absolute
							top -5%
							right -10%
							font-size 10px
							color rgb(240, 20, 20)
							transition all .3s
				.bottom
					display flex
					flex-flow row
					.first
						flex 1
						margin 18px auto 18px auto
						text-align center
						border-right 1px solid rgba(7, 17, 27, .1)
						&:last-child
							border-right 0
						.title
							font-size 10px
							line-height 10px
							color rgb(147, 153, 159)
							padding-bottom 4px
						.price
							font-size 24px
							font-weight 200
							line-height 24px
							color rgb(7, 17, 27)
							span
								font-size 10px
			.activities
				background-color #fff
				margin-bottom 16px
				.bulletin
					margin 0 18px
					padding 18px 0
					border-1px(rgba(7, 17, 27, .2))
					.title
						font-size 14px
						line-height 14px
						color rgb(7, 17, 27)
						padding-bottom 8px
					.content
						padding 0 12px
						font-size 12px
						font-weight 200
						line-height 24px
						color rgb(240, 20, 20)
				.activity
					margin 0 18px
					.item-list
						.item
							border-top 1px solid rgba(7, 17, 27, .1)
							padding 16px 12px 16px 16px
							&:first-child
								border-top 0
							.icon
								display inline-block
								width 16px
								height 16px
								background-size 16px 16px
								background-repeat no-repeat
								padding-right 6px
								&.decrease
									bg-image('decrease_4')
								&.discount
									bg-image('discount_4')
								&.guarantee
									bg-image('guarantee_4')
								&.invoice
									bg-image('invoice_4')
								&.special
									bg-image('special_4')
							.text
								vertical-align top
								font-size 12px
								font-weight 200
								line-height 16px
								color rgb(7, 17, 27)
			.pics-wrapper
				background-color #fff
				margin-bottom 16px
				.title
					font-size 14px
					line-height 14px
					color rgb(7, 17, 27)
					padding 18px 0 12px 18px
				.pics
					padding 0 0 18px 18px
					overflow hidden
					width 100%
					white-space nowrap
					img
						display inline-block
						padding-right 6px
						&:last-child
							padding-right 0
			.information-wrapper
				background-color #fff
				.title
					font-size 14px
					line-height 14px
					color rgb(7, 17, 27)
					padding 18px 0 12px 18px
				.informations
					.information-list
						margin 0 18px
						.information
							padding 16px 12px
							border-top 1px solid rgba(7, 17, 27, .1)
							span
								font-size 12px
								font-weight 200
								line-height 16px
								color rgb(7, 17, 27)
								
</style>