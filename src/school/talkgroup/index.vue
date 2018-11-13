<template>
	<div class="talkgroup-box">
		<div>
			<img src="@/assets/school-img/nv.png" alt="">	
			<p>在吗？</p>
		</div>
		<div>
			<img src="@/assets/school-img/nan.png" alt="">
			<p>怎么啦？</p>
		</div>
		<div>
			<img src="@/assets/school-img/nv.png" alt="">	
			<p>你们都选择什么专业？</p>
		</div>
		<p class='footer'>
			<img src="@/assets/school-img/mike.png" alt="">
			<input type="text">
			<img src="@/assets/school-img/jia.png" alt="">
		</p>
		<router-view></router-view>
	</div>
</template>
<script>
	
</script>
<style scoped lang="stylus">
	.talkgroup-box{
		position: absolute;left: 0;top: 0;
		width: 100%;
		padding-top 45px
		padding-left:15px;
		padding-right:15px;
		box-sizing:border-box;
		height: 100%;
		background: #fff;
		div{
			overflow hidden
			width:100%;
			p{
				text-align left
				padding  0 12px
				background #F7F7F7
				height 55px 
				line-height 55px
				border-radius  4px
				color #4A4A4A
				font-size 18px 
			}
		}
		div:nth-child(1){
			margin-top 20px 
			img{
					float left
					width 55px  height 55px
			}	
			p{	
				float left
				margin-left 10px
				background #F7F7F7
			}
		}
		div:nth-child(2){
			margin-top 20px
			img {
				float right 
			}
			p{
				float right
				margin-right 10px 
			}
		}
		div:nth-child(3){
			margin-top 20px
			img {
				float left 
			}
			p{
				float left
				margin-left 10px 
			}
		}
		.footer{
			position fixed 
			left 0
			bottom 0
			width 100%
			height 65px
			background #F7F7F7
			input {
				text-indent 15px
				font-size 18px
				width 272px
				height 40px
				border-radius 100px
				margin-top 12px
			}
			img:nth-child(1){
				float left 
				margin-top 18px
				margin-left 10px
			}
			img:nth-child(3){
				float right 
				margin-top 18px
				margin-right 10px
			}
		}
		
	}
</style>