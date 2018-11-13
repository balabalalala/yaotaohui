<template>

    <div class="gradeline-box">
        <div>
            <div class="title">
                视觉传达 <img src="@/assets/school-img/bottom.png" alt="">
            </div>
            <div class="line-img">
                <img src="@/assets/school-img/fenshu.png" alt="">
            </div>
            <div class="comment">
                <p class="commentitle">最新评论</p>
                <ul>
                    <li>
                        <img src="@/assets/school-img/small4.png" alt="">
                        <div class="name">
                            <p>不完美的小孩</p>
                            <p>2018-04-06</p>
                        </div>
                        <div class="comment_up">
                            <span @click="changeNum1" ><img  :class='{active:dzActive}' src="@/assets/school-img/dianzan.png" alt="">{{num1}}</span>
                            <span><img src="@/assets/school-img/pinglun.png" alt=""></span>
                        </div>
                        <p class="pinglun"> 今年的分数线普遍提高，视觉传达特别突出，希望同学们做好择校的相关准备。 </p>
                    </li>
                    <li>
                        <img src="@/assets/school-img/small6.png" alt="">
                        <div class="name">
                            <p>小姑娘</p>
                            <p>2018-04-06</p>
                        </div>
                        <div class="comment_up">
                            <span @click="changeNum2"><img  :class='{active:dzActive2}'  src="@/assets/school-img/dianzan.png" alt="">{{num2}}</span>
                            <span><img src="@/assets/school-img/pinglun.png" alt=""></span>
                        </div>
                        <p class="pinglun"> 今年的分数线普遍提高，视觉传达特别突出，希望同学们做好择校的相关准备。 </p>
                    </li>
                    <li>
                        <img src="@/assets/school-img/small5.png" alt="">
                        <div class="name">
                            <p>蓝色的小小帽</p>
                            <p>2018-04-06</p>
                        </div>
                        <div class="comment_up">
                            <span  @click="changeNum3"><img  :class='{active:dzActive3}'  src="@/assets/school-img/dianzan.png" alt="">{{num3}}</span>
                            <span><img src="@/assets/school-img/pinglun.png" alt=""></span>
                        </div>
                        <p class="pinglun"> 今年的分数线普遍提高，视觉传达特别突出，希望同学们做好择校的相关准备。 </p>
                    </li>
                </ul>
            </div>
            <div class="speak">
                <input type="text" placeholder="发表评论">
                <img @click="showShare" src="@/assets/school-img/fenxiang.png" alt="">
                <p>分享</p>
            </div>
            <share @closeShare="closeShare" v-if="shareShow"></share>
        </div>
    </div>
</template>
<script>
import share from "@/components/share"
import BetterScroll from "@/components/better-scroll"
export default {
  components:{
      share,
      BetterScroll
  },
  data(){
    return {
        isActive:false,
        shareShow:false ,
        num1:0,
        num2:0,
        num3:0,
        count:0,
        count2:0,
        count3:0,
        dzActive:false,
        dzActive2:false,
        dzActive3:false,
    }
  },
  methods:{
      showShare(){
          this.shareShow =!this.shareShow;
      },
      closeShare(){
           this.shareShow =!this.shareShow;
      },
      changeNum(num){
          console.log(this.num)
          this.count ++;
        if(this.count %2 == 1){
             this.num ++;
        }else{
             this.num --
        }
      },
    changeNum1(){
        this.dzActive =!this.dzActive;
         this.count ++;
        if(this.count %2 == 1){
             this.num1 ++;
        }else{
             this.num1 --
        }
    },
     changeNum2(){
          this.dzActive2 =!this.dzActive2;
         this.count2 ++;
        if(this.count2 %2 == 1){
             this.num2 ++;
        }else{
             this.num2 --
        }
    },
     changeNum3(){
          this.dzActive3 =!this.dzActive3;
         this.count3 ++;
        if(this.count3 %2 == 1){
             this.num3 ++;
        }else{
             this.num3 --
        }
    },
  }

}
</script>
<style scoped  lang="stylus">
.gradeline-box{
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
    .line-img{
        margin-top 10px
        width 100%
        height 246px 
        background #fff
        img{
            width 100%
            height 95%
        }
    }
    .comment{
        margin-top 10px 
        width 100%
        background #fff
        .commentitle{
            padding 0 20px 
            box-sizing border-box
            color #454242
            font-size 20px 
            text-align left 
            line-height 66px
            border-bottom 1px solid #D8D8D8
        }
        ul{
            width 100%
            li{
                overflow hidden
                padding 0 20px 
                box-sizing border-box                
                width 100%
                height 150px 
                border-bottom 1px solid #D8D8D8
                img{
                    float left
                    margin-top 10px
                    width 52px 
                    height 52px
                }
                .name{
                    float left 
                    height 45px
                    text-align left 
                    margin-top 15px
                    margin-left 10px
                    p:nth-child(1){
                        color #454242
                        font-size 16px
                        letter-spacing: 0.21px;
                    }
                     p:nth-child(2){
                        margin-top 10px
                        color #979797 
                        font-size 14px
                    }
                }
                .comment_up{
                    float right 
                    position relative
                    margin-top 20px
                    width 140px
                    height 30px
                    span{
                        position absolute
                        right 0 
                        top 0
                        width 20px 
                        height 20px 
                        float right
                        img{
                             position absolute
                             left 0 
                             top 0
                             height 22px
                             width 26px 
                        }
                        img.active{
                            border-radius 50%
                            background orange
                        }
                    }
                    span:nth-child(1){
                        line-height 1px
                       img {
                            width 24px
                            height 20px
                        }
                    }
                    span:nth-child(2){
                        
                        margin-right 50px
                        img {
                            width 20px
                            height 17px
                        }
                    }
                }
                .pinglun{
                    padding 0 12px
                    box-sizing border-box
                    float left
                    margin-top 20px
                    width 280px
                    color #5B5959
                    font-size 14px 
                    line-height 20px
                    text-align left 
                }
            }
        }
    }
    .speak{
        overflow hidden
        position fixed
        left 0
        bottom 0
        width 100%
        height 50px 
        background #fff
        input{
            float left
            margin-left 20px
            padding 6px
            box-sizing border-box
            margin-top 5px
            width 289px
            height 38px
            border 1px solid #DADADA
            border-radius 8px
        }
        input::-webkit-input-placeholder{
            font-size 18px 
            color #909090
        }
        img{
            position absolute
            right 12px
            top 5px
            width 27px
            height 21px
        }
       
        p{
            position absolute
            right 15px
            top 30px
            color #454242
        }
    }
}
</style>
