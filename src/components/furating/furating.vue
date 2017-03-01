<template>
	<div class="ratingselect" ref="details">
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
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import star from '../star/star'

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
		components: { star }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/mixin.styl'

	.ratingselect
		height 100%
		overflow hidden
		.rating-detail
			width 100%
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
			
</style>