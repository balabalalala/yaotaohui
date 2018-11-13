<template>
	<div class="header-box"> 
		<img class="left" @click="$router.back(-1)" v-if="$route.meta.show" src="@/assets/header-img/return.png" alt="">
		<p>{{this.$route.meta.text}}</p>
		 <router-link  v-if="$route.meta.moreshow" tag="img" to="/schoolhome/2/groupSet" class="right" :src="$route.meta.imgmore" alt="" >

		 </router-link>
	</div>
</template>
<script> 
	export default{
		data(){
			return {
				
			}
		}
	}
</script>
<style scoped lang="stylus">
	.header-box{
		z-index: 1;
		position: fixed;
		left: 0; top: 0;
		width: 100%;
		height: 45px;
		background: #FECE02;	
		.left{
			position: absolute;left: 10px;top: 10px;
		}
		p{
			color: #000000;
			font-size: 20px;
			text-align: center;
			line-height: 45px;
		}
		.right{
			position: absolute;right: 10px;top: 20px;
			width:30px;height:8px;
		}
	}
</style>