<template>
	<div class="tops">
		<img class="return" @click="returnClick" src="@/assets/icon/left.png" alt="sorry">
		<p>{{$route.meta.Title}}</p>
	</div>
</template>
<script>
	export default{
		components:{
			
		},
		methods:{
			returnClick(){
				this.$router.go(-1)
			}
		},
	}
</script>
<style scoped>
	.tops{
		position: fixed;
		top: 0;
		left: 0;
		width: 375px;
		height: 45px;
		background: #FDD003;
	}
	.tops img{
		position: absolute;
		top: 10px;
		left: 10px;
		width: 12px;
		height: 20px;
	}
	.tops p{
		font-size: 22px;
		color: #000000;
		line-height: 45px;
	}
</style>