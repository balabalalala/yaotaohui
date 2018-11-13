<template>
	<div class="banner-box">
		<ul> 
			<li @click="changeActive1"  :class="{ active: isActive===1 }"  >
				中央美院
				<span></span>
			</li>
			<li @click="changeActive2" :class="{ active: isActive===2 }"  >
				中国美院
				<span></span>
			</li>
			<li  @click="changeActive3" :class="{ active: isActive===3 }"  >
				清华美院
			</li>
		</ul>
		<img src="@/assets/school-img/meiyuan.png" alt="">
	</div>
</template>
<script >
	export default {
		data(){
			return {
				isActive :1
				
			}
		},
		methods :{
			changeActive1(){
				console.log("点击1");
				this.isActive = 1;
			},
			changeActive2(){
				this.isActive = 2;
			},
			changeActive3(){
				this.isActive = 3;
			}
		}
	}
</script>
<style scoped lang="stylus">
	.banner-box{
		width: 100%;
		height: 220px;
		padding-bottom: 20px;
		background:#fff;
		ul{
			overflow: hidden;
			padding-top: 15px;
			padding-bottom: 15px;
			width: 100%;
			height: 25px;
			li{
				float: left;
				width: 33.33%;
				height: 25px;
				line-height: 25px;
				color: #8A8A8A;
				font-size: 18px;
				text-align: center;
				span{
					float: right;
					margin-top:3px;
					width: 1px;
					height: 16px;
					background-color: #E9E9E9;
				}
				img{
					float: left;
				}
			}
			li.active{
				color: #000000;
			}
		}
	}
</style>
