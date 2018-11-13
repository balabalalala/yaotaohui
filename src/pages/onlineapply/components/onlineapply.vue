router-link<template>
	<div class="onlineapply">
		<div class="box">
			<input type="text" value="真实姓名：">
			<input type="text" value="手机号码：">
			<input type="text" value="所在高中：">
			<button>立即报名</button>
		</div>
		<div class="footer">
			<router-link tag="span" to="/onlineconsult" class="left">在线咨询</router-link>
			<router-link tag="span" to="/返回学校首页" class="right">返回学校主页</router-link>
		</div>
	</div>
</template>
<script>

	export default{
	}
</script>
<style scoped>
	.onlineapply{
		width: 100%;
		margin-top: 60px;
	}
	.onlineapply .box{
		width:338px;
		height: 250px;
		margin:0 auto;
		background: #FFFFFF;
		box-shadow: 0 6px 10px 0 rgba(236,236,236,0.50);
		border-radius: 4px;
	}
	.onlineapply .box input{
		width: 300px;
		height: 35px;
		opacity: 0.6;
		background: #FFFFFF;
		border: 1px solid #DADADA;
		border-radius: 4px;
		margin-top: 20px;
		font-size: 16px;
		color: #666666;
		padding-left: 17px;
		box-sizing: border-box;
	}
	.onlineapply .box button{
		width: 300px;
		height: 45px;
		background-color: #FDD003;
		border-radius: 4px;
		margin:20px auto;
		font-size: 20px;
		color: #000000;
		line-height: 45px;
	}
	.onlineapply .footer{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 338px;
		margin:28px auto;
		background-color: red;
	}
	.onlineapply .footer .left{
		position: absolute;
		top: 0;
		left: 10px;
		width: 56px;
		height: 20px;
		font-size: 14px;
		color: #666666;
	}
	.onlineapply .footer .right{
		position: absolute;
		top: 0;
		right: 0;
		width: 85px;
		height: 20px;
		font-size: 14px;
		color: #545454;
	}
</style>