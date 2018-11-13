<template>
	<div class="bottom">
		<ul>
			<router-link class="online" tag="li" to="onlineconsult">
				<img src="@/assets/jigou/zaixian.png" alt="sorry">
				<p>在线咨询</p>
			</router-link>
			<li @click="showClick" class="online show">
				<img src="@/assets/jigou/tel.png" alt="sorry">
				<p>电话咨询</p>
			</li>
			<router-link class="online" tag="li" to="/onlineapply"><p class="last">在线报名</p></router-link>
		</ul>
		<div v-if="isShow" @click="heishowClick" class="heishow">
			<div class="show-box">
				<p class="tel">136-4334-xxxx</p>
				<p class="collect">
					<span class="left" @click="leftClick">取消</span>
					<span class="right" @click="rightClick">拨打</span>
				</p>
			</div>
		</div>
		<div v-if="isShows"  class="photo">
			<p @click="telClick" class="tel">15815815888</p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isShow:false,
				isShows:false
			}
		},
		components:{
			
		},
		methods:{
			showClick(){
				this.isShow = true
			},
			leftClick(){
				this.isShow = false
			},
			heishowClick(){
				this.isShow = false
			},
			rightClick(){
				this.isShows = true
			},
			telClick(){
				this.isShows = false
			}
		},
	}
</script>
<style scoped>
	.bottom{
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		width: 375px;
		height: 56px;
		background-color: #fff;
	}
	.bottom .photo{
		position: fixed;
		left: 0;
		top: 0;
		width: 375px;
		height: 620px;
		background-color: #fff;
		z-index: 100;
	}
	.bottom .photo p{
		font-size: 50px;
		background: #FFFFFF;
	}
	.bottom .heishow{
		z-index: 20;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 375px;
		height: 620px;
		background:rgba(0,0,0,.5);
	}
	.bottom .heishow .show-box{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 220px;
		height: 80px;
		background: #FFFFFF;
		border-radius: 4px;
		margin:270px auto;
	}
	.bottom .heishow .show-box .tel{
		position: absolute;
		top: 5px;
		left: 0;
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 22px;
		color: #000000;
		border-bottom:1px solid #DADADA;
	}
	.bottom .heishow .show-box .collect{
		position: absolute;
		top: 40px;
		left: 0;
		width: 100%;
		height: 40px;
		line-height: 30px;
	}
	.bottom .heishow .show-box .collect span{
		width: 50%;
		height: 40px;
		font-size: 16px;
		color: #000000;
		border-right:1px solid #DADADA;
	}
	.bottom .heishow .show-box .collect .left{
		position: absolute;
		top: 0;
		left: 0;
	}
	.bottom .heishow .show-box .collect .right{
		position: absolute;
		top: 0;
		right: 0;
	}
	.bottom ul{
		
		width: 100%;
		background: #fff;
	}
	.bottom ul .online{
		float: left;
		width: 33.33%;
		height: 56px;

	}
	.bottom ul li img{
		margin-top: 10px;
	}
	.bottom ul li p{
		margin-top: 5px;
		font-size: 8px;
		color: #545454;
	}
	.bottom ul .online .last{
		background: #FDD003;
		height: 56px;
		line-height: 56px;
		font-size: 16px;
		color: #545454;
		
	}
</style>