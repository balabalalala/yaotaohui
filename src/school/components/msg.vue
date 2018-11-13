<template>
	<div class="msg-box">
		<ul class="msg-title">
			<li  @click="msgActive1"  :class="{ active: msgActive===1 }" >
				招生信息
				<span></span>
			</li>
			<li  @click="msgActive2"  :class="{ active: msgActive===2 }">
				专业介绍
				<span></span>
			</li>
			<li  @click="msgActive3"  :class="{ active: msgActive===3 }">
				复试调剂
				<span></span>
			</li>
			<li  @click="msgActive4"  :class="{ active: msgActive===4 }">
				学校论坛
				<span></span>
			</li>
		</ul>
		<ul class="msg-text">
			<li>2019年中央美术学院硕士研究生招生简章
				<img src="@/assets/icons/right.png" alt="">
			</li>
			<li>2018年中央美术学院硕士研究生招生简章
				<img src="@/assets/icons/right.png" alt="">
			</li>
			<li>2017年中央美术学院硕士研究生招生简章
				<img src="@/assets/icons/right.png" alt="">
			</li>
		</ul>
		<router-link class="more" tag="p" to="/schoolhome">
			查看更多
		</router-link>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msgActive :1
				
			}
		},
		methods :{
			msgActive1(){
				console.log("点击1");
				this.msgActive = 1;
			},
			msgActive2(){
				this.msgActive = 2;
			},
			msgActive3(){
				this.msgActive = 3;
			},
			msgActive4(){
				this.msgActive = 4;
			}
		}
	}
</script>
<style scoped lang="stylus">
	.msg-box{
		float left
		width: 100%;
		height: 215px;
		.msg-title{
			background: #fff;
			overflow: hidden;
			width: 100%;
			height: 45px;
			li{	
				position: relative;
				float: left;
				width: 25%;
				height: 45px;
				line-height: 45px;
				text-align: center;
				color: #8A8A8A;
				font-size: 16px;
				span{
					position: absolute;left: 7px;bottom: 2px;
					width: 82px;
					height: 3px;
				}
			}
			li.active{
				color: #000000;
				span{
					background-color: #FDCF02;
				}
			}
		}
		.msg-text{
			background: #fff;
			overflow: hidden;
			width: 100%;
			li{
				border-top: 1px solid #f4f4f4;
				width: 100%;height: 41px;
				line-height: 41px;
				color: #454242;
				font-size: 15px;
				padding: 0 15px;
				box-sizing: border-box;
				text-align: left;
				img{
					float: right;
					margin-top: 8px;
				}
			}
			li:last-child{
				border-bottom: 1px solid #f4f4f4;
			}
		}
		.more{
			background-color: #fff;
			color: #8A8A8A ;
			font-size: 16px;
			line-height: 41px;
			text-align: center;
		}
	}
</style>