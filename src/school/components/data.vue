<template>
	<div class="data-box">
		<ul>
			<router-link tag="li" :to="'/schoolhome/'+item.id" v-for="item in datalist" :key="item.id">
				<img class="imgleft" :src="item.img1" alt="">
				<p>	{{item.title}}</p>
				
				<img class="imgright" :src="item.img2" alt="">
				<span>{{item.text}}</span>
			</router-link>
		</ul>
	</div>
</template>
<script>
	import img1 from "@/assets/school-img/aixin.png"
	import img2 from "@/assets/school-img/msg.png"
	import imgright from "@/assets/icons/right.png"
	export default{
		data(){
			return{
				datalist:[
					{
						id:1,
						img1:img1,
						title:"分数线",
						text:"近五年分数线",
						img2:imgright
					},
					{
						id:2,
						img1:img2,
						title:"讨论组 (61)",
						text:" ",
						img2:imgright
					},
					{
						id:3,
						img1:img1,
						title:"报录比",
						text:"近五年报录比",
						img2:imgright
					},
					{
						id:4,
						img1:img2,
						title:"名师指导",
						text:" ",
						img2:imgright
					}
				]
			}
		},


	}
</script>
<style scoped lang="stylus">
	.data-box{
		overflow: hidden;
		background: #fff;
		margin-top: 15px;
		width: 100%;
		ul{
			width: 100%;
			li{
				width: 100%;
				height: 55px;
				padding: 0 15px; 
				box-sizing: border-box;
				border-bottom: 1px solid #f4f4f4;
				p{
					float: left;
					line-height: 55px;
					color: #000000;
					font-size: 18px;
				}
				.imgleft{
					margin-top: 15px;
					float: left;
					margin-right: 20px;
				}
				span{
					float: right;
					margin-right: 20px;
					color: #8A8A8A;
					font-size: 15px;
					line-height: 55px;
				}
				.imgright{
					float: right;
					margin-top: 15px;
				}
			}
		}
	}
</style>