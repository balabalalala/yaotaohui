<template>
   <div class="teaching-box">
        <div class="title">
            视觉传达 <img src="@/assets/school-img/bottom.png" alt="">
        </div>
        <ul>
            <router-link tag="li" to="/schoolhome/4/teacherMSg" v-for="item in teacherlist" :key="item.id">
                <div>
                    <p>{{item.title1}}</p>
                    <p>{{item.title2}}</p>
                    <span>{{item.name}}</span>
                    <span>{{item.job}}</span>
                </div>
                <p class="teacher-img"><img :src="item.img" alt=""> </p>
                <span class="guanzhu">{{item.guanzhu}}</span>
            </router-link>
        
        </ul>
        <router-view></router-view>
   </div>
    
</template>
<script>
    import teacherone from "@/assets/school-img/mingshi1.png"
    import teachertwo from "@/assets/school-img/mingshi2.png"
    import teacherthree from "@/assets/school-img/mingshi3.png"
    import teacherfour from "@/assets/school-img/mingshi4.png"
    import BetterScroll from "@/components/better-scroll"
export default {
  components:{
    BetterScroll
  },
  data(){
      return {
          teacherlist:[
              {  
                   id:1,
                  title1:"中央美术学院",
                  title2:"资深视觉传达导师",
                  name :"陈卫平",
                  job:"教授",
                  img:teacherone,
                  guanzhu:"已有1209人关注"
              },
              {  
                   id:2,
                  title1:"中央美术学院",
                  title2:"资深视觉传达导师",
                  name :"杭海",
                  job:"教授",
                   img:teachertwo,
                   guanzhu:"已有860人关注"
              },
              {  
                   id:3,
                  title1:"中央美术学院",
                  title2:"资深视觉传达导师",
                  name :"何浩",
                  job:"教授",
                  img:teacherthree,
                  guanzhu:"已有1250人关注"
              },
              {  
                   id:4,
                  title1:"中央美术学院",
                  title2:"资深视觉传达导师",
                  name :"王受之",
                  job:"副教授",
                  img:teacherfour,
                  guanzhu:"已有799人关注"
              },
          ]
      }
  }
}
</script>
<style scoped lang="stylus">
.teaching-box{
    overflow hidden
    padding-top 45px
    position absolute 
    left 0 
    top 0
    width 100%
    background #F0F0F0
   
    .title {
        width 100% 
        height 50px 
        background #fff
        text-align center 
        line-height  50px 
        color #454242
        font-size 18px 
        letter-spacing: 1.5px;
        img{
            width 23px 
            height 13px
        }
    }
     ul{
            width 100%
            margin-top 10px 
            margin-bottom  30px 
            li{
                position relative
                padding 20px 17px 
                box-sizing border-box
                width 100%
                height 144px 
                background #fff
                margin-top 30px
                div{ 
                    position absolute
                    left 17px 
                    top 20px
                    width 60% 
                    height 80%
                    p{
                        font-family: PingFangSC-Medium;
                        color #454242
                        font-size 18px
                        text-align left
                        line-height 25px
                    
                    }
                    span{
                        position absolute 
                        left 0
                        bottom 10px
                        padding 0 15px
                        box-sizing border-box
                        line-height 30px
                        background #FFCD01
                        border-radius 8px
                        color #303030 
                        font-size 18px
                        text-align center
                    }
                    span:nth-child(4){
                        margin-left 100px
                    }
                    
                }
                .teacher-img{
                    position absolute 
                    top 20px
                    right 17px
                    width 100px 
                    height 95px 
                    img{
                        width 100%
                        height 100%
                    }
                }
                .guanzhu{
                    line-height 5px   
                    position absolute
                    right 10px
                    bottom -17px
                    color #989898
                    font-size 15px
                }
            }
            li:nth-child(1){
                margin 0
            }
        }
    }  

</style>
