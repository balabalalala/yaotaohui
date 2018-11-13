<template>
	<div class="aboutwe">
		<div class="about">
			<img src="@/assets/jigou/four.png" alt="sorry">
		</div>
		<div class="container">
			<p>关于我们 About us</p>
			<div class="des">
				<p>不凡因子科技有限公司以互联网设计和软件开发为主营业务。</p>
				<p>我们是年轻的创业公司 公司员工都是80后，我们从北京一线城市带着技术、经验、理想回到家乡，在看好互 联网发展越来越好的前提下，希望充分发挥自己的技术优势，立足中原，创立自己的 品牌！</p>
				 
			</div>
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
	.aboutwe{
		width: 375px;
		margin-top: 60px;
	}
	.aboutwe .about{
		width: 100%;
		height: 120px;
	}
	.aboutwe .about img{
		width: 350px;
		height: 120px;
	}
	.aboutwe .container{
		width: 350px;
		height: 350px;
		margin:45px auto;
	}
	.aboutwe .container p{
		font-size: 22px;
		color: #282828;
		text-align: left;
	}
	.aboutwe .container .des{
		width: 350px;
		height: 300px;
		text-align: left;
	}
	.aboutwe .container .des p{
		font-size: 18px;
		color: #797979;
		line-height: 28px;
		text-indent: 40px;
		margin-top: 10px;
	}
</style>