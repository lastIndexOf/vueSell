<template>
	<div class="ratings-details" ref="rating">	
		<div class="ratings">
			<header class="scores">
				<div class="left-score">
					<h1 class="all-score">{{ seller.score }}</h1>
					<p class="desc-all">综合评分</p>
					<p class="rankRate">高于周边商家{{ seller.rankRate }}%</p>
				</div>
				<div class="right-score">
					<div class="serviceScore">
						<span class="service-desc">服务评分</span>
						<div class="star-wrapper">
							<star :size="36" :score="seller.serviceScore"></star>
						</div>
						<span class="score">{{ seller.serviceScore }}</span>
					</div>
					<div class="serviceScore">
						<span class="service-desc">食物评分</span>
						<div class="star-wrapper">
							<star :size="36" :score="seller.serviceScore"></star>
						</div>
						<span class="score">{{ seller.foodScore }}</span>
					</div>
					<p class="arriveTime">
						送达时间
						<span class="arrived">{{ seller.deliveryTime }}分钟</span>
					</p>
				</div>
			</header>
			<section class="ratings-wrapper">
				<furating @contentChanged="contentChanged" @typeChanged="typeChanged" :ratings="ratings" :onlyContent="onlyContent" :selectType="selectType"></furating>
			</section>
			<div class="details-list">
				<ul class="details" v-if="ratings.length">
					<li v-show="(!onlyContent||rating.text)&&(selectType===2||(selectType===0&&rating.rateType===0)||(selectType===1&&rating.rateType===1))" class="detail-item" v-for="rating of ratings">
						<div class="item-heading">
							<img :src="rating.avatar" width="28" height="28">
							<div class="user">
								<div class="top">
									<span class="username">{{ rating.username }}</span>
									<time>{{ rating.rateTime | formateDate }}</time>
								</div>
								<div class="desc">
									<div class="star-wrapper">
										<star :size="24" :score="rating.score"></star>
									</div>
									<span class="deliveryTime">{{ rating.deliveryTime }}分钟送达</span>
								</div>
							</div>
						</div>
						<div class="content">
							<p class="text">
								{{ rating.text }}
							</p>
							<div class="recommend" v-if="rating.recommend">
								<i class="iconfont" :class="{'icon-dianzan':rating.rateType===0,'icon-cai':rating.rateType===1}"></i>
								<span class="recommend" v-for="recommend of rating.recommend">
									{{ recommend }}
								</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
	</div>
</template>

<script type="text/ecmascript-6">
	import moment from 'moment'
	import BScroll from 'better-scroll'
	import request from 'superagent'
	import star from '../star/star'
	import furating from '../furating/furating'
	import shopcart from '../shopcart/shopcart'

	const POSITIVE = 0
			, NEGATIVE = 1
			, ALL = 2

	export default {
		props: [ 'seller' ],
		data() {
			return {
				ratings: [],
				selectType: ALL,
				onlyContent: true
			}
		},
		computed: {
		},
		methods: {
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
			}
		},
		created() {
			request.get('/api/ratings')
					.end((err, res) => {
						if (err)
							console.log(err)

						this.ratings = res.body.data
						
						this.$nextTick(() => {
							if (!this._scroll)
								this._scroll = new BScroll(this.$refs.rating, {
									click: true
								})
							else
								this._scroll.refresh()

						})
					})
		},
		filters: {
			formateDate(time) {
				return moment(time).format('YYYY-MM-DD HH:mm')
			}
		},
		components: { star, furating, shopcart }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.ratings-details
		position fixed
		top 174px
		bottom 48px
		overflow hidden
		.ratings
			background-color #f3f5f7
			font-size 0
			.scores
				padding 18px 24px 18px 0
				background-color #fff
				margin-bottom 16px
				@media screen and (max-width:350px)
					display flex
					.left-score
						flex 1
					.right-score
						flex 2
				.left-score
					display inline-block
					width 138px
					text-align center
					border-right 1px solid rgba(7, 17, 27, .2)
					vertical-align top
					.all-score
						font-size 24px
						line-height 28px
						color rgb(255, 153, 0)
						padding-bottom 6px
					.desc-all
						font-size 12px
						line-height 12px
						color rgb(7, 17, 27)
						padding-bottom 8px
					.rankRate
						font-size 10px
						line-height 20px
						color rgb(147, 153, 159)
						padding-bottom 6px
				.right-score
					display inline-block
					padding-left 24px
					padding-top 4px
					.serviceScore
						padding-bottom 8px
						.service-desc
							padding-right 12px
							font-size 12px
							line-height 18px
							color rgb(7, 17, 27)
							vertical-align top
						.star-wrapper
							display inline-block
						.score
							font-size 12px
							line-height 14px
							color rgb(255, 153, 0)
							vertical-align top
					.arriveTime
						font-size 12px
						line-height 18px
						color rgb(7, 17, 27)
						vertical-align top
						.arrived
							font-size 12px
							line-height 18px
							padding-left 12px
							color rgb(147, 153, 159)
			.ratings-wrapper
				background-color #fff
				padding 18px 18px 0 18px
			.details-list
				background-color #fff
				.details
					.detail-item
						.item-heading
							padding 18px 18px 0 18px
							img
								border-radius 50%
							.user
								display inline-block
								posititon relative
								padding-left 12px
								vertical-align top
								.top
									padding-bottom 4px
									.username
										font-size 10px
										line-height 12px
										color rgb(7, 17, 27)
									time
										position absolute
										right 18px
										font-size 10px
										font-weight 200
										line-height 12px
										color rgb(147, 153, 159)
								.desc
									display inline-block
									vertical-align top
									.star-wrapper
										display inline-block
									.deliveryTime
										display inline-block
										font-size 10px
										font-weight 200
										line-height 12px
										color rgb(147, 153, 159)
						.content
							padding 6px 18px 18px 58px
							.text
								font-size 12px
								line-height 18px
								color rgb(7, 17, 27)
								padding-bottom 8px
							.recommend
								.icon-dianzan
									font-size 12px
									line-height 16px
									color rgb(0, 160, 220)
									vertical-align middle
								.icon-cai
									font-size 12px
									line-height 16px
									color rgb(183, 187 ,191)
									padding-right 8px
									vertical-align middle
								.recommend
									vertical-align middle
									display inline-block
									font-size 9px
									padding 1px 6px
									max-width 50px
									margin-right 8px
									margin-bottom 4px
									border 1px solid rgba(7, 17, 27, .1)
									color rgb(147, 153, 159)
									line-height 16px
									white-space nowrap
									overflow hidden
									text-overflow ellipsis
									box-sizing border-box
									&:last-child
										margin-right 0
</style>