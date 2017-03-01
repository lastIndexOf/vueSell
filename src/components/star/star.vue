<template>
	<div class="star-wrapper">
		<span v-for="item of items" :class="[item, 'size' + size]" class="star"></span>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: [ 'size', 'score' ],
		data() {
			return {

			}
		},
		computed: {
			items() {
				const Length = 5

				let results = []
					, ons = Math.floor(this.score)
					, isHalf = (this.score - ons) < 0.5 ? false : true

				for (let on = 0; on < ons; on++)
					results.push('on')	

				if (isHalf)
					results.push('half')

				while (results.length < Length)
					results.push('off')
				
				return results
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
	.star-wrapper
		.star
			display inline-block
			&:last-child
				margin-right 0
			&.size48
				width 20px
				height 20px
				background-size 20px 20px
				margin-right 24px	
			&.on.size48
				bg-image('star48_on')
			&.half.size48
				bg-image('star48_half')
			&.off.size48
				bg-image('star48_off')
			&.size36
				width 15px
				height 15px
				background-size 15px 15px
				margin-right 6px	
			&.on.size36
				bg-image('star36_on')
			&.half.size36
				bg-image('star36_half')
			&.off.size36
				bg-image('star36_off')
			&.size24
				width 10px
				height 10px
				background-size 10px 10px
				margin-right 4px	
			&.on.size24
				bg-image('star24_on')
			&.half.size24
				bg-image('star24_half')
			&.off.size24
				bg-image('star24_off')
				
</style>
