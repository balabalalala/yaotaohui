<template>
	<div class="onlineconsult">
		<div class="box girl">
			<img class="girlimg" src="@/assets/online/girl.png" alt="sorry">
			<p class="girlp">在吗？</p>
		</div>
		<div class="box boy">
			<p class="boyp">怎么啦亲</p>
			<img class="boyimg" src="@/assets/online/boy.png" alt="sorry">
		</div>
		<div class="box girl">
			<img class="girlimg" src="@/assets/online/girl.png" alt="sorry">
			<p class="girlp girlpp">选哪个专业会更好点呢</p>
		</div>
		<div class="bottom">
			<img class="speak-l" src="@/assets/online/speak.png" alt="sorry">
			<input type="text" value="">
			<img class="add-r" src="@/assets/online/add.png" alt="sorry">
		</div>
	</div>
</template>
<script>

	export default{
	}
</script>
<style lang="" scoped>
	.onlineconsult{
		width: 100%;
	}
	.onlineconsult .box{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 35px;
		margin-top: 60px;
	}
	.onlineconsult .box img{
		width: 55px;
		height: 55px;
	}
	.onlineconsult .box .girlimg{
		position: absolute;
		top: 0;
		left: 20px;
		
	}
	.onlineconsult .box p{
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		color: #666666;
		background-color: #F7F7F7;
		border-radius: 4px;
	}
	.onlineconsult .box .girlp{
		position: absolute;
		top: 10px;
		left: 100px;
		width: 70px;
		
	}
	.onlineconsult .box .girlpp{
		width: 220px;
	}
	.onlineconsult .box .boyimg{
		position: absolute;
		top: 0;
		right: 10px;
	}
	.onlineconsult .box .boyp{
		position: absolute;
		top: 10px;
		right: 100px;
		width: 100px;
	}
	.onlineconsult .bottom{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 70px;
		background-color: #fff;
	}
	.onlineconsult .bottom .speak-l{
		position: absolute;
		top: 22px;
		left: 11px;
	}
	.onlineconsult .bottom .add-r{
		position: absolute;
		top: 22px;
		right: 11px;
	}
	.onlineconsult .bottom input{
		width: 260px;
		height: 40px;
		margin-top: 20px;
		background: #FFFFFF;
		border-radius: 100px;
		font-size: 20px;
		border:1px solid #fff;
		padding-left: 20px;
		box-sizing: border-box;
	}
</style>