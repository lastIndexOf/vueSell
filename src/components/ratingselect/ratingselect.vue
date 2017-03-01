<template>
	<div class="ratingselect">
		<div class="rating-detail">
			<div class="rating-type">
				<span @click="select(2, $event)" class="type" :class="{'selected':selectType===2}">{{ desc.all }} <span class="num">{{ ratings.length }}</span></span>
				<span @click="select(0, $event)" class="type" :class="{'selected':selectType===0}">{{ desc.positive }} <span class="num">{{ positive }}</span></span>
				<span @click="select(1, $event)" class="type" :class="{'selected':selectType===1}">{{ desc.negative }} <span class="num">{{ negative }}</span></span>
			</div>
			<div @click="contentShow" class="only-content" :class="{'hasContent': onlyContent}">
				<i class="iconfont icon-anonymous-iconfont"></i>
				<span class="content">只显示有内容的评价</span>
			</div>
			<div class="ratings-list">
				<ul class="list" v-if="ratings.length">
					<li v-show="(!onlyContent||rating.text)&&(selectType===2||(selectType===0&&rating.rateType===0)||(selectType===1&&rating.rateType===1))" class="rating-item" v-for="rating of ratings">
						<time>{{ rating.rateTime | formateDate }}</time>
						<div class="user">
							<span class="username">{{ rating.username }}</span>
							<img :src="rating.avatar" class="avatar" width="12" height="12" />
						</div>
						<div class="content">
							<i class="iconfont" :class="{'icon-cai':rating.rateType===1,'icon-dianzan':rating.rateType===0}"></i>
							<span class="text">{{ rating.text }}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import moment from 'moment'

	const POSITIVE = 0
			, NEGATIVE = 1
			, ALL = 2

	export default {
		props: {
			ratings: {
				type: Array,
				default() {
					return []
				}
			},
			selectType: {
				type: Number,
				default: ALL
			},
			onlyContent: {
				type: Boolean,
				default: false
			},
			desc: {
				type: Object,
				default() {
					return {
						all: '全部',
						positive: '满意',
						negative: '不满意'
					}
				}
			}
		},
		computed: {
			positive() {
				let num = 0

				this.ratings.forEach(rating => {
					if (rating.rateType === 0)
						num ++
				})

				return num
			},
			negative() {
				let num = 0

				this.ratings.forEach(rating => {
					if (rating.rateType === 1)
						num ++
				})

				return num
			}
		},
		methods: {
			select(type, e) {
				if (!e._constructed)
					return

				this.$emit('typeChanged', type)
			},
			contentShow(e) {
				if (!e._constructed)
					return

				this.$emit('contentChanged')
			}
		},
		filters: {
			formateDate(time) {
				return moment(time).format('YYYY-MM-DD HH:mm')
			} 
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl'

	.ratingselect
		.rating-detail
			.rating-type
				padding 12px 0 18px 0
				border-1px(rgba(7, 17, 27, .1))
				.type
					display inline-block
					margin-right 8px
					padding 8px 12px
					font-size 12px
					font-weight 200
					line-height 16px
					background-color rgba(0, 160, 220, .2)
					color rgb(77, 85, 93)
					&.selected
						background-color rgb(0, 160, 220)
						color #fff
					&:last-child
						background-color rgba(77, 85, 93, .2)
						margin-right 0
						color rgb(77, 85, 93)
						&.selected
							background-color rgb(77, 85, 93)
							color #fff
					.num
						font-size 8px
			.only-content
				width 100%
				padding 12px 0 18px 0
				border-1px(rgba(7, 17, 27, .1))
				&.hasContent
					.icon-anonymous-iconfont
						color #00c850
					.content
						font-weight 700
				.icon-anonymous-iconfont
					font-size 24px
					line-height 24px
					color rgb(147, 153, 159) 	
				.content
					font-size 12px
					color rgb(147, 153, 159)
					line-height 24px
					vertical-align top
			.ratings-list
				.list
					.rating-item
						positive relative
						padding 16px 0
						border-1px(rgba(7, 17, 27, .1))
						time
							font-size 10px
							line-height 12px
							color rgb(147, 153, 159)
						.user
							float right
							.username
								font-size 10px
								color rgb(147, 153, 159)
								line-height 12px
								padding-right 6px
							img
								border-radius 50%
						.content
							padding-top 6px
							.icon-cai, icon-dianzan
								font-size 12px
								line-height 24px
								color rgb(147, 153, 159)
								padding-right 4px
							.icon-dianzan
								color rgb(0, 160, 220)
							.text
								font-size 12px
								line-height 16px
								color rgb(7, 17, 27)
								padding-right 4px
</style>