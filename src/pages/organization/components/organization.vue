<template>
	<div class="organization">
		<div class="head">
			<div class="box">
				<input type="text">
				<img class="icon" src="@/assets/icon/Search.png" alt="sorry">
			</div>
		</div>
		<img class="top-p" src="@/assets/jigou/shouhui.png" alt="sorry">
		<div class="container">
			<p class="left">热门机构</p>
			<router-link tag="div" to="handdraw" class="right">不凡手绘</router-link>
		</div>
		<div class="box2">
			<mo-betterscroll class="city">
			
			<ul>
				<li  @click="itemClick(index)" :class="{active:isactive===index}" class="item" v-for="(item,index) in list" :key="item.id">
					<span>{{item.p}}</span>
				</li>
			</ul>
			</mo-betterscroll>
		</div>
		
		<router-link tag="ul" to="handdraw" class="location">
			<li class="detail" v-for="detail in details">
				<span>{{detail.p1}}</span>
			</li>
		</router-link>
	</div>
</template>
<script>
 import MoBetterscroll from '@/components/better-scroll'
	export default{
		components:{
			 MoBetterscroll
			},
		methods:{
			//点击事件.激活变色
				itemClick(index){
					this.isactive=index
					console.log(this.isactive)
				},
			},
		data(){
			return{
				isactive:null,

				list:[
					{
					id:1,
					p:'北京'
					},
					{
					id:2,
					p:'北京'
					},
					{
					id:3,
					p:'广州'
					},
					{
					id:4,
					p:'广州'
					},
					{
					id:5,
					p:'深圳'
					},
					{
					id:6,
					p:'海南'
					},
					{
					id:7,
					p:'海南'
					},
					{
					id:8,
					p:'郑州'
					},
					{
					id:9,
					p:'郑州'
					},
					{
					id:10,
					p:'中山'
					},
					{
					id:11,
					p:'中山'
					},
					{
					id:12,
					p:'广西'
					},
					{
					id:13,
					p:'小榄'
					},
				],

				details:[
				{
					id:11,
					p1:'北京水木源手绘'
				},
				{
					id:22,
					p1:'北京水木源手绘'
				},
				{
					id:33,
					p1:'北京水木源手绘'
				},
				{
					id:44,
					p1:'北京水木源手绘'
				},
				{
					id:55,
					p1:'北京水木源手绘'
				},
				{
					id:66,
					p1:'北京水木源手绘'
				},
				{
					id:77,
					p1:'北京水木源手绘'
				},
				{
					id:88,
					p1:'北京水木源手绘'
				},
				{
					id:99,
					p1:'北京水木源手绘'
				},
				{
					id:100,
					p1:'北京水木源手绘'
				},
				{
					id:90,
					p1:'北京水木源手绘'
				},
				{
					id:92,
					p1:'北京水木源手绘'
				},
				],
			}
		},

	}
</script>
<style scoped>
.organization{
	width: 375px;
}
	.box2{
		position: absolute;
		top: 210px;
		bottom:50px;
		left: 0;
		overflow: hidden;
	}
	.organization .city{
		height: 100%;
	}
	.organization .city ul li.active{
		background-color:#FDD003;
	}
	.organization .head{
		width: 375px;
		height: 85px;
		/*padding-left: 85px;*/
		background: #FDD003; 
		box-sizing: border-box;
		margin:0 auto;
	}
	.organization .head .box{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 375px;
		height: 30px;
	}
	.organization .head .box input{
		width: 250px;
		font-size: 20px;
		background: #FFFFFF;
		border-radius: 8px;
		margin:10px auto 22px;
		padding-left: 40px;
		box-sizing: border-box;
	}
	.organization .head .box img{
		position: absolute;
		top: 18px;
		left: 80px;
	}
	.organization .top-p{
		position: absolute;
		top: 50px;
		left: 15px;
		width: 345px;
		height: 82px;
	}
	.organization .container{
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin-top: 70px;
		width: 100%;
	}
	.organization .container .left{
		width: 116px;
		height: 55px;
		background: #FDD003;
		text-align: center;
		line-height: 55px;
		font-size: 18px;
		color: #000000;
	}
	.organization .container .right{
		position: absolute;
		top: 0;
		right: 0;
		width: 258px;
		height: 55px;
		background: #F1F1F1;
		text-align: center;
		line-height: 55px;
		font-size: 16px;
		color: #000000;
	}
	.organization ul{
		width: 116px;
	}
	.organization ul li{
		width: 100%;
		height: 35px;
		padding-top: 10px;
	}
	.organization ul li span{
		font-size: 16px;
		color: #666666;
		text-align: center;
		line-height: 32px;

	}
	.organization .location{
		position: absolute;
		top: 210px;
		right: 0;
		width: 258px;
		background: #F1F1F1;
	}
	.organization .location li{
		width: 100%;
	}
	.organization .location li span{
		font-size: 16px;
		color: #666666;
	}
</style>