<template>
	<div class="nav-box">
		<ul class="nav">
			<router-link tag='li' to='/' exact class="first">
				<div class="bg"></div>
				<p class="word">首页</p>
			</router-link>
			<router-link tag='li' to='/schoolhome'  class="two">
				<div class="bg"></div>
				<p class="word">院校</p>
			</router-link>
			<router-link tag='li' to='/organization'  class="three">
				<div class="bg"></div>
				<p class="word">机构</p>
			</router-link>
			<router-link tag='li' to='/my'  class="last">
				<div class="bg"></div>
				<p class="word">我的</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
	props: {
	},
	data() {
		return {
		}
	},
	created(){
	}
	
}
</script>
<style scoped lang="styl">
		.nav{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 9999;
			background-color: #ffffff;
			height: 83px;
			li{
				margin-top: 20px;
				float: left;
				width: 25%;
				height: 100%;
				text-align: center;
				p{
					margin-top: 3px;
					font-size: 12px;
					color: #000;
					text-align: center;
				}
			}
		}
		/*底部导航栏字体的激活样式*/
		/*底部导航栏图片,点击的时候切换背景图片*/
		.bg{
			/*width: 27px;*/
			height: 24px;
		}
		li.first .bg{
			background: url('../assets/home/home2.png') no-repeat center
		}
		li.router-link-active.first .bg{
			background: url('../assets/home/home.png') no-repeat center
		}
		li.two .bg{
			background: url('../assets/home/school.png') no-repeat center
		}
		li.router-link-active.two .bg{
			background: url('../assets/home/school2.png') no-repeat center
		}
		li.three .bg{
			background: url('../assets/home/reform.png') no-repeat center
		}
		li.router-link-active.three .bg{
			background: url('../assets/home/reform2.png') no-repeat center
		}
		li.last .bg{
			background: url('../assets/home/my.png') no-repeat center
		}
		li.router-link-active.last .bg{
			background: url('../assets/home/my2.png') no-repeat center
		}
	

</style>