<template>
   <div class="share-box" @click="closeShare">
       <ul>
           <p class="ul_p">分享到</p>
           <li>
               <img src="@/assets/school-img/pyq.png" alt="">
               <p>朋友圈</p>
           </li>
           <li>
               <img src="@/assets/school-img/wx.png" alt="">
               <p>微信好友</p>
           </li>
           <li>
               <img src="@/assets/school-img/weibo.png" alt="">
               <p>新浪微博</p>
           </li>
           <li>
               <img src="@/assets/school-img/qqkj.png" alt="">
               <p>QQ空间</p>
           </li>
            <li>
               <img src="@/assets/school-img/qq.png" alt="">
               <p>QQ好友</p>
           </li>
            <li>
               <img src="@/assets/school-img/zhihu.png" alt="">
               <p>知乎</p>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
  methods:{
      closeShare(){
          console.log("jinlail")
          this.$emit("closeShare");
          this.$emit("closeSharetwo");
      }
  }

}
</script>
<style scoped lang="stylus">
.share-box{
    position fixed
    left 0 
    top 0
    width 100%
    height 100%
    background-color rgba(0,0,0,.5)
    ul{
        position absolute
        left 0 
        bottom 0
        width 100%
        height 281px 
        background #fff
        padding 10px 20px 
        box-sizing border-box
        .ul_p{
            color #454242
            font-size 20px
            text-align center 
            margin 15px 0
        }
        li{
            float left 
            width 33.33%
            margin-top 20px
            img{
                width 52px 
                height 48px 
            }
            p{
                color #979797
                font-size 16px
                margin-top 10px
            }
        }
    }
}

</style>
