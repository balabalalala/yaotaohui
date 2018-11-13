<template>
	<div class="handdraw">
		<div class="box top">
			<img class=""  src="@/assets/jigou/666.jpg" alt="sorry">

		</div>
		<ul class="zong">
			<li>
				<span>浏览</span>
				<span class="span-r">43234</span>
			</li>
			<li>
				<span>报名</span>
				<span class="span-r">234</span>
			</li>
			<li>
				<span>粉丝</span>
				<span class="span-r">434</span>
			</li>
		</ul>
		
		<div class="box two">
			<router-link tag="div" to="goodteacher" class="case two-left">
			<img class="left" src="@/assets/jigou/two.png" alt="sorry">
			</router-link>
			<router-link tag="div" to="/smallclass" class="case two-right">
				<img class="right" src="@/assets/jigou/three.png" alt="sorry">
			</router-link>
		</div>
		
		<router-link tag="div" to="aboutwe"  class="box aboutwe">
			<img class="aboutimg" src="@/assets/jigou/four.png" alt="sorry">
		</router-link>
		<router-link tag="div" to="study" class="box study">
			<img class="studyimg" src="@/assets/jigou/shouhui.png" alt="sorry">
			<p class="study-t">学习环境</p>
			<p class="study-b">用心打造的学习氛围,只为你的到来</p>
		</router-link>
	</div>
</template>
<script>
	export default{
		components:{
		},
	}
</script>
<style scoped>
	.handdraw{
		width: 375px;
		margin-bottom: 50px;
	}
	.handdraw .zong{
		width: 100%;
		height: 2px;
		margin-top: -10px;
	}
	.handdraw .zong li{
		float: left;
		width: 33.33%;
	}
	.handdraw .zong li span{
		font-size: 10px;
		color: #666666;
	}
	.handdraw .zong li .span-r{
		padding-left: 20px;
	}
	.handdraw .box{
		width: 100%;
		height: 140px;
	}
	.handdraw .box img{
		height: 120px;
	}
	.handdraw .top{
		width: 100%;
		margin:60px auto 0;
	}
	.handdraw .two {
		width: 100%;
		height: 120px;
		margin:50px auto 0;
	}
	.handdraw .two .case{
		float: left;

	}
	.handdraw .two .two-left{
		width: 170px;
		height: 120px;
		padding-left: 14px;
		padding-right: 6px;
	}
	.handdraw .two  .two-right{
		width: 170px;
		height: 120px;
	}
	.handdraw .aboutwe{
		width: 350px;
		margin:20px auto 0;
	}
	.handdraw .study{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}
	.handdraw .study .studyimg{
		width: 350px;
		height: 140px;
	}
	.handdraw .study .study-t{
		position: absolute;
		bottom: 28px;
		left: 26px;
		font-size: 16px;
		color: #FFFFFF;
	}
	.handdraw .study .study-b{
		position: absolute;
		left: 26px;
		bottom: 15px;
		font-size: 12px;
		color: #FFFFFF;
	}
</style>