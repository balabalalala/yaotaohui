<template>
	<div class="smallclass">
		<div class="top">
			<img src="@/assets/smallclass/small.png" alt="sorry">
		</div>
		<div class="choose">
			<p class="choose-l">理论班</p>
			<p class="choose-r">手绘班</p>
		</div>
		<ul>
			<li>
				<p>入门初学</p>
				<img class="imgleft" src="@/assets/smallclass/small1.png" alt="sorry">
				<img class="imgright" src="@/assets/smallclass/small2.png" alt="sorry">
			</li>
			<li>
				<p>实物临摹</p>
				<img src="@/assets/smallclass/small3.png" alt="sorry">
				<img src="@/assets/smallclass/small4.png" alt="sorry">
			</li>
			<li>
				<p>后期作品</p>
				<img src="@/assets/smallclass/small5.png" alt="sorry">
				<img src="@/assets/smallclass/small6.png" alt="sorry">
			</li>
		</ul>
	</div>
</template>
<script>


	export default{
		
	}
</script>
<style scoped>
	.smallclass{
		width: 375px;
	}
	.smallclass .top{
		width: 100%;
		height: 120px;
		margin-top: 60px;
	}
	.smallclass .top img{
		width: 350px;
		height: 120px;
	}
	.smallclass .choose{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 45px;
		width: 100%;
	}
	.smallclass .choose p{
		width: 50%;
		font-size: 18px;
		color: #545454;
		line-height: 45px;
	}
	.smallclass .choose .choose-l{
		position: absolute;
		top: 0;
		left: 0;
	}
	.smallclass .choose .choose-r{
		position: absolute;
		top: 0;
		right: 0;
	}
	.smallclass ul{
		width: 100%;
	}
	.smallclass ul li{
		float: left;
		width: 100%;
		margin-top: 15px;
		
		box-sizing: border-box;
	}
	.smallclass ul li p{
		font-size: 16px;
		color: #282828;
		line-height: 22px;
		text-align: left;
		padding-left: 25px;
	}
	.smallclass ul li img{
		width: 170px;
		height: 120px;
	}

</style>