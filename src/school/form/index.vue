<template>

    <div class="baolubi-box">

         <div class="speak" >
                <input type="text" placeholder="发表评论">
                <img @click="showShare"  src="@/assets/school-img/fenxiang.png" alt="">
                <p >分享</p>
            </div>
<!--    
        <better-scroll class="form-box">
            <div> -->
                    <div class="title">
                        视觉传达 <img src="@/assets/school-img/bottom.png" alt="">
                    </div>
                    <table>
                        <tr>
                            <th>年份</th>
                            <th>报名人数</th>
                            <th>录取人数</th>
                        </tr>
                        <tr>
                            <td>2018</td>
                            <td>940</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>2017</td>
                            <td>890</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2016</td>
                            <td>856</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2015</td>
                            <td>812</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>2014</td>
                            <td>758</td>
                            <td>1</td>
                        </tr>
                    </table>
                    <div class="comment">
                        <p class="commentitle">最新评论</p>
                        <ul>
                            <li>
                                <img src="@/assets/school-img/small2.png" alt="">
                                <div class="name">
                                    <p>走过沙漠的仓鼠</p>
                                    <p>2018-04-06</p>
                                </div>
                                <div class="comment_up">
                                    <span @click="changeNum1" ><img  :class='{active:dzActive}' src="@/assets/school-img/dianzan.png" alt="">{{num1}}</span>
                                    <span><img src="@/assets/school-img/pinglun.png" alt=""></span>
                                </div>
                                <p class="pinglun"> 今年报名人数增多，录取人数比基本不变，希望各位研友能一起努力考上理想学校。 </p>
                            </li>
                            <li>
                                <img src="@/assets/school-img/small6.png" alt="">
                                <div class="name">
                                    <p>LIKE FITE</p>
                                    <p>2018-04-06</p>
                                </div>
                                <div class="comment_up">
                                    <span @click="changeNum2"><img  :class='{active:dzActive2}'   src="@/assets/school-img/dianzan.png" alt="">{{num2}}</span>
                                    <span><img src="@/assets/school-img/pinglun.png" alt=""></span>
                                </div>
                                <p class="pinglun"> 武汉大学欢迎我 </p>
                            </li>
                            <li>
                                <img src="@/assets/school-img/small5.png" alt="">
                                <div class="name">
                                    <p>蓝色的小小帽</p>
                                    <p>2018-04-06</p>
                                </div>
                                <div class="comment_up">
                                    <span @click="changeNum3"><img  :class='{active:dzActive3}'  src="@/assets/school-img/dianzan.png" alt="">{{num3}}</span>
                                    <span><img src="@/assets/school-img/pinglun.png" alt=""></span>
                                </div>
                                <p class="pinglun"> 想去北大或清华</p>
                            </li>
                        </ul>
                    </div>
                    <share v-show="showShare" @closeSharetwo ="closeShare"></share>
<!--                 
            </div>
        </better-scroll> -->

    </div>
</template>
<script>
import share from "@/components/share"
import BetterScroll from "@/components/better-scroll"
export default {
  components:{
      BetterScroll,
      share
  },
  data(){
      return {
        showShare : false,
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
          this.showShare=!this.showShare
      },
      closeShare(){
          this.showShare=!this.showShare
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
<style scoped lang="stylus">
.baolubi-box{
    position absolute
    left 0
    top 0
    width 100%
    padding-top 45px
    background #f0f0f0
    // .form-box{
    //     position absolute
    //     left 0
    //     top 0
    //     width 100%
    //     height 100%
    //     background #f0f0f0
    //     div{
    //       width 100%
    //       height 818px
            .title{
                margin-bottom 10px
                width 100% 
                height 50px 
                background #fff
                text-align center 
                line-height  50px 
                color #454242
                font-size 18px 
                letter-spacing  1.5px
                img{
                    width 23px 
                    height 13px
                }
        
            }
            table{
                width 100%
                height 60px
                tr{
                    height 40px
                    line-height 40px 
                    th,td{
                        width 33.33%
                        text-align center
                        color #474747 
                        font-size 18px
                        font-weight 500 
                    }
                }

                tr:nth-child(2n-1){
                    background #fff
                    
                }
            }   
            .comment{
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
                        background #fff
                        overflow hidden
                        padding 0 20px 
                        box-sizing border-box                
                        width 100%
                        height 151px 
                        border-bottom 1px solid #D8D8D8
                        img{
                            float left
                            margin-top 10px
                            width 52px 
                            height 52px
                        }
                        .name{
                            float left 
                            width 130px
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
                            letter-spacing 1px
                        }
                    }
                }
            }
            
    //     }
    // }
    .speak{
            z-index 3
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
