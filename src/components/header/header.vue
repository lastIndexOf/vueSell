<template>
	<header class="header">
		<div class="content-wrapper">
			<div class="left">
				<img :src="seller.avatar">
			</div>
			<div class="right">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{ seller.name }}</span>
				</div>
				<div class="description">
					{{ seller.description }}/{{ seller.deliveryTime }}分钟送达
				</div>
				<div class="supports" v-if="seller.supports">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{ seller.supports[0].description }}</span>	
				</div>
			</div>
			<div class="support-nums" v-if="seller.supports" @click="detailShow = true">
				<span class="support-length">{{ seller.supports.length }}个</span>
				<span class="arrow_lift">></span>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-img"></span>
			<span class="bulletin-text">{{ seller.bulletin }}</span>
			<span class="arrow_lift" @click="detailShow = true">></span>
		</div>
		<div class="bg-img">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<transition name="detail">
			<div class="detail" v-show="detailShow">
				<div class="detail-wrapper clearfix">
					<div class="detail-main">
						<div class="detail-name">
							{{ seller.name }}
						</div>
						<div class="wrapper-star">
							<star :size="48" :score="seller.score"></star>
						</div>
						<div class="preferential">
							<div class="item-line"></div>
							<div class="item-text">优惠信息</div>
							<div class="item-line"></div>
						</div>
						<ul class="supports-items" v-if="seller.supports">
							<li v-for="support of seller.supports">
								<span class="support-img" :class="classMap[support.type]"></span>
								<span class="support-content">{{ support.description }}</span>
							</li>
						</ul>
						<div class="preferential">
							<div class="item-line"></div>
							<div class="item-text">商家信息</div>
							<div class="item-line"></div>
						</div>
						<div class="bulletin">
							<p class="bulletin-content">{{ seller.bulletin }}</p>
						</div>
					</div>
				</div>
				<div class="detail-close" >
					<span @click="detailShow = false">&times;</span>
				</div>
			</div>
		</transition>
	</header>
</template>

<script type="text/ecmascript-6">
	import star from 'components/star/star'

	export default {
		props: [ 'seller' ],
		data() {
			return {
				classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
				detailShow: false
			}
		},
		components: { star }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
	.detail-enter-active
	.detail-leave-active
		transition all .5s
	.detail-enter
	.detail-leave-active
		opacity: 0
	.header
		color #fff
		background-color rgba(7, 17, 28, .5)
		font-size 0
		.bg-img
			position absolute
			width 100%
			height 135px
			overflow hidden
			top 0
			left 0
			z-index -1
			filter: blur(10px)
		.content-wrapper
			position relative
			padding 24px 12px 18px 24px
			.left
				display inline-block
				vertical-align top
				img
					height 64px
					width 64px
					border-radius 2px
			.right
				display inline-block
				margin-left 16px
				.title
					.brand
						display inline-block
						width 36px
						height 18px
						bg-image('brand')
						background-size 36px 18px
						background-repeat no-repeat
						vertical-align top
					.name
						font-size 16px
						line-height 18px
						font-weight bold
						margin-left 6px
				.description
					font-size 12px
					line-height 12px
					font-weight 200
					margin 8px 0 10px 0
				.supports
					.icon
						display inline-block
						margin-left 2px
						width 12px
						height 12px
						background-size 12px 12px
						background-repeat no-repeat
						vertical-align top
						&.decrease
							bg-image('decrease_1')
						&.discount
							bg-image('discount_1')
						&.guarantee
							bg-image('guarantee_1')
						&.invoice
							bg-image('invoice_1')
						&.special
							bg-image('special_1')
					.text
						display inline-block
						margin-left 4px
						font-size 10px
						max-width 140px
						overflow hidden
						text-overflow ellipsis
						white-space nowrap
			.support-nums
				position absolute
				right 12px
				bottom 14px
				padding 7px 8px
				border-radius 14px
				background-color rgba(0, 0, 0, .2)
				text-align center
				.support-length
					font-size 12px
					vertical-align center
				.arrow_lift
					font-size 12px
					margin-left 2px
		.bulletin-wrapper
			height 28px
			line-height 28px
			padding-left 12px
			padding-right 12px
			.bulletin-img
				display inline-block
				bg-image('bulletin')
				width 22px
				height 12px
				background-size 22px 12px
				margin-bottom 7px
			.bulletin-text
				display inline-block
				margin-left 4px
				width 85%
				margin-left 4px
				font-size 10px
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
			.arrow_lift
				font-size 10px
				float right
		.detail
			z-index 100
			position fixed
			top 0
			left 0
			width 100%
			height 100%
			font-size 14px
			overflow auto
			background-color rgba(7, 17, 28, .8)
			backdrop-filter blur(10px)
			.detail-wrapper
				width 100%
				min-height 100%
				.detail-main
					margin-top 64px
					padding-bottom 64px
					.detail-name
						font-size 16px
						font-weight 700
						line-height 16px
						text-align center
					.wrapper-star
						width 100%
						margin-top 16px
						text-align center
					.preferential
						display flex
						width 80%
						margin 28px auto 24px auto
						.item-line
							flex 1
							position relative
							top -7px
							border-bottom 1px solid rgba(255, 255, 255, .2)
						.item-text
							padding 0 12px
							line-height 14px
							font-size 14px
							font-weight 700
					.supports-items
						width 80%
						margin 0 auto
						padding 0 12px
						box-sizing border-box
						li
							margin-bottom 12px
							&:last-child
								margin-bottom 28px 
						.support-img
							display inline-block
							width 16px
							height 16px
							background-size 16px 16px
							vertical-align middle
							&.decrease
								bg-image('decrease_2')
							&.discount
								bg-image('discount_2')
							&.guarantee
								bg-image('guarantee_2')
							&.invoice
								bg-image('invoice_2')
							&.special
								bg-image('special_2')
						.support-content
							padding-left 6px
							font-size 12px
							font-weight 200
							line-height 12px
					.bulletin
						width 80%
						margin 0 auto
						.bulletin-content
							padding 0 12px
							font-weight 200
							font-size 12px
							line-height 24px
			.detail-close
				width 32px
				height 32px
				margin -64px auto
				clear both
				span
					font-size 32px
</style>
