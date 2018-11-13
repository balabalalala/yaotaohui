<template>
        <div class="groupSet-box">
          <div class="top">
            <div>
              讨论组名称 <span>中央美院视觉群</span>
            </div>
            <div>
              讨论组成员 <div>  
                            <img src="@/assets/school-img/small1.png" alt="">
                            <img src="@/assets/school-img/small4.png" alt="">
                            <img src="@/assets/school-img/small6.png" alt="">
                            <img  class="lessshow" @click="addfalse"  v-if="lessShow" src="@/assets/school-img/jian.png" alt="">
                            <img  class="lessshow" @click="addfalse" v-else src="@/assets/school-img/jia.png" alt="">
                        </div>
                       
            </div>
             <p v-if= "lessShow">
                          <span><img src="@/assets/school-img/small4.png" alt="">走过...</span> 
                          <span><img src="@/assets/school-img/small6.png" alt="">LIKE…</span> 
                          <span><img src="@/assets/school-img/small1.png" alt="">拓海</span> 
                          <span><img src="@/assets/school-img/small5.png" alt="">青鱼</span> 
                          <span><img src="@/assets/school-img/small6.png" alt="">冰冰</span> 
                          <span><img src="@/assets/school-img/small7.png" alt="">初光.</span> 
                          <span><img src="@/assets/school-img/small8.png" alt="">安</span> 
             </p>
          </div>
          
          <div class="groupSet-bottom">
              <div>
                 消息提醒
                 <p @click="onoff" :class="{active:close}"> <span></span> </p>
              </div>
              <span>退出群聊</span>
          </div>

        </div>
</template>
<script>
export default {
  data(){
      return {
        lessShow :false,
        close: false
      }
  },
  methods:{
    addfalse(){
        this.lessShow =!this.lessShow
    },
    onoff(){
      this.close =!this.close
    }
  }
}
</script>

<style scoped lang= "stylus">
.groupSet-box{
  position absolute;
  left 0; top 0;
  width 100% 
  padding-top 45px
  background #F0F0F0
  height 100%
  .top{
    margin-top 10px 
    background #fff
    div{
      width 100% 
      height 60px 
      color #454242 
      font-size 20px  
      text-align left 
      box-sizing border-box
      padding 0 20px 
      line-height 60px 
    }
     div:nth-child(1){
      overflow hidden
      border-bottom 1px solid #E9E9E9;
      span{
        float right
        font-size 17px
        letter-spacing  1px
      }
    }
     div:nth-child(2){
        overflow hidden
        div{
          float right 
          margin-top 15px 
          padding 0
          border 0
          width 133px 
          height 35px
          img{
           
            float left
            margin-left 6px
            width 27px 
            height 27px
          }
          .lessshow{
            float right
            width 25px ;
            height 23px;
          }
        }
     }
     p{
       transition  all  0.8s ease;
       overflow hidden
       width 100%  
       padding 0 20px
       box-sizing border-box
       span{
         position relative
         float left 
         width 45px 
         height 60px
         padding 10px 0;  
         margin-left 20px
         margin-bottom 20px
         box-sizing border-box
         img{
           float left
           margin-bottom 10px
           width 100%
           height 100%
           
         }
       }
     }
  }
  .groupSet-bottom {
    position relative
    margin-top 15px 
    width 100% 
    height 85%
    background #fff
    div{
      overflow hidden
      width 100% 
      height 57px 
      padding 0 20px 
      box-sizing border-box
      color #454242
      font-size 20px 
      text-align left 
      line-height  57px 
      border-bottom 1px solid #DADADA
      p{
        transition all 0.5s ease
        position absolute
        right 17px
        top 0
        margin 16px 0 0 0
        width 51px
        height 31px
        background-color #FDD003
        border-radius 18px 
        span{
          transition all 0.5s ease
          margin 0
          margin-top .5px
          width 30px
          height 30px
          background #fff
          border-radius 50%
        }
      }
      p.active{
        background gray 
        span{
          transform translateX(-21px)
        }
      }
    }
    span{
      float right
      width 278px
      height 44px
      background #FFCD01
      border-radius 8px
      text-align center
      line-height 44px
      margin-right 50px 
      margin-top 30px 
      color #000000
      font-size 20px 
    }
  }
}
</style>
