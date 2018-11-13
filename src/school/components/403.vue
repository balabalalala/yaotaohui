<template>
  <div class="error-page">
      <div class="error-code">4<span>0</span>3</div>
      <div class="wrapper" 
        @touchstart.prevent='handleTouchStart'
		@touchmove='handleTouchMove'
		@touchend='handleTouchEnd'
        ref='box'
      >
          <div class="yuan" 
          ref="yuan"
          >

          </div>
      </div>
      <div class="error-desc">啊哦~ 你没有权限访问该页面哦</div>
      <div class="error-handle">
          <router-link to="/">
            <el-button type="primary" size="large">返回首页</el-button>
          </router-link>
          <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            isT:false,
            touchXY:{
                start:0,
                end:0
            }
        }
    },
  methods: {
      goBack(){
          this.$router.go(-1);
      },
      handleTouchStart(e){
          this.isT = true 
          this.touchXY.start = e.touches[0].pageX
          
      },
      handleTouchMove(e){
          if(this.isT){
              this.touchXY.end = e.touches[0].pageX
             var cha = Math.abs(this.touchXY.end) - Math.abs(this.touchXY.start)
          var boxW =  this.$refs.box.offsetWidth
          var yuanW = this.$refs.yuan.offsetWidth
          if(cha>=0){
              console.log('>0')
              console.log(boxW)
              if(boxW/2>=cha){
                  
                  console.log('???')
                  this.$refs.yuan.style.left = cha+'px'
              }else{
                  this.$refs.yuan.style.left = boxW-yuanW+'px'
              }
          }else{
               var cha = Math.abs(this.touchXY.start) - Math.abs(this.touchXY.end)
              if(cha>=boxW/2){
                  this.$refs.yuan.style.left = 0+'px'
              }else{
                  this.$refs.yuan.style.left =boxW-cha+'px'
              }
          }
              
          }
         
      },
      handleTouchEnd(){
         
          this.isT = false 
      }
  }
}
</script>


<style scoped>
.wrapper{
    position: relative;
    z-index: 100;
    width: 100px;
    height: 30px;
    border: 1px solid gray;
    overflow: hidden;
}
.yuan{
    width: 30%;
    height: 100%;
    background-color: red;
    position: absolute;
    left: 0;
}
    .error-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #f3f3f3;
        box-sizing: border-box;
    }
    .error-code{
        line-height: 1;
        font-size: 250px;
        font-weight: bolder;
        color: #f02d2d;
    }
    .error-code span{
        color: #00a854;
    }
    .error-desc{
        font-size: 30px;
        color: #777;
    }
    .error-handle{
        margin-top: 30px;
        padding-bottom: 200px;
    }
    .error-btn{
        margin-left: 100px;
    }
</style>
