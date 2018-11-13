<template>
	<div class="school-home-content-box">
		<sheader></sheader>
		 <!--<better-scroll class="content">-->
		 	<div class="content-scroll">
		 		<sbanner></sbanner>
		 		<smsg></smsg>
		 		<sdata></sdata>
		 	</div>
		 <!--</better-scroll>-->
		 <router-view></router-view>
	</div>
</template>
<script>
	import Sheader from "@/components/header"
	import Sbanner from "./components/school-banner"
	import Smsg from "./components/msg"
	import Sdata from "./components/data"
	import BetterScroll from "@/components/better-scroll"
	export default{
		components:{
			Sheader,
			Sbanner,
			Smsg,
			Sdata,
			BetterScroll
		}
	}
</script>
<style scoped lang="stylus">
	.school-home-content-box{
		position relative
		left 0
		top 0
		padding-top 45px
		width: 100%
		height 100%
		background: #F0F0F0;
		padding-bottom 50px;
		// .content{
		// 	margin-top: 45px;
		// 	width: 100%;
		// 	height 670px
		// 	padding-bottom: 50px;
			.content-scroll{
				width: 100%;
				// height: 772px;
				padding-bottom: 30px;
			}
		// }
	}
</style>