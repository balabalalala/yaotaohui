<template>
	<div class="study">
		<div class="box">
			<img src="@/assets/study/study1.png" alt="sorry">
			<p>用心打造的学习氛围,只为你的到来</p>
		</div>
		<div class="box">
			<img src="@/assets/study/study.png" alt="sorry">
			<p>有在家里学习一样的舒适</p>
		</div>
		<div class="box">
			<img src="@/assets/study/study2.png" alt="sorry">
			<p>有在野外安静的学习氛围</p>
		</div>
		<div class="box">
			<img src="@/assets/study/study3.png" alt="sorry">
			<p>还有不一般的学习效率</p>
		</div>
	</div>
</template>
<script>

	export default{
		components:{
			
		},
		methods:{
			
		},
	}
</script>
<style scoped>
	.study{
		width: 375px;
		margin-top: 60px;
	}
	.study .box{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 140px;
		background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, #202020 100%);
		border-radius: 4px;
	}
	.study .box img{
		width: 350px;
		height: 140px;
	}
	.study .box p{
		position: absolute;
		bottom: 15px;
		left: 40px;
		font-size: 12px;
		color: #FFFFFF;
	}
</style>