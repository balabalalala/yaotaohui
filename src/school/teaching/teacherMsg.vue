<template>

<div class="teacherMsg-box">
        <img src="@/assets/school-img/wangshouzhi.png" alt="">
        <p>
            王受之，1946年生，广州人，设计理论和设计史专家，现代设计和现代设计教育的重要奠基人之一。1987年作为富布赖特学者，在宾夕法尼亚州立大学切斯特学院和威斯康星大学麦迪逊学院从事设计理论研究和教学。现为美国设计教育最高学府———美国艺术中心设计学院教授，美国南加州建筑学院教授，中国汕头大学长江艺术与设计学院院长，加拿大楷硕建筑设计有限公司总顾问。光华龙腾奖中国设计贡献奖金质奖章获得者。  
    
        </p>
        <p>
            兼任中央美术学院、清华大学美术学院、鲁迅美术学院、上海大学美术学院、汕头大学长江艺术与设计学院等高等艺术设计院校院长。
        </p>
        <p>
            他还在美国奥迪斯艺术与设计学院、加州美术学院、南加州建筑学院和洛杉矶南加州大学教授设计类课程。设计理论家，曾编有《世界现代设计史》《世界平面设计史》等。

        </p>
        
        <share v-if="shareShow" @closeShare="closeShare"></share>

            <div class="teacherMsg-footer">
            <input type="text" placeholder="发表评论">
            <div class="share">
                <img @click="showShare" src="@/assets/school-img/fenxiang.png" alt="">
                <span>分享</span>
            </div>
            <div @click="changeStar" class="Collection">
                <img v-if="Collection" src="@/assets/school-img/Star.png" alt="">
                <img v-else  src="@/assets/school-img/StarCopy.png" alt="">
                <span>收藏</span>
            </div>
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
        return{
            shareShow:false,
            Collection :{
                default :true
            } 
        }
    },
    methods:{
        changeStar(){
            this.Collection =!this.Collection
        },
        closeShare(){
            this.shareShow =!this.shareShow
        },
        showShare(){
            this.shareShow =!this.shareShow
        }
    }
}
</script>
<style scoped lang="stylus">


        .teacherMsg-box{
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            background #fff
            padding 45px 15px 0
            box-sizing border-box
            img{
                margin-top 10px 
                margin-bottom 20px 
                width 342px
                height 150px 
            }
            p{
                text-align left 
                letter-spacing 1px
                text-indent 30px
                color #A0A0A0 
                font-size 16px 
                line-height 25px
            }
            .teacherMsg-footer{
                position fixed 
                left 0
                bottom 0
                float left
                width 100%
                height 50px
                background #fff
                input {
                        font-size 20px
                        line-height 38px 
                        float left
                        margin-left 20px
                        text-indent 15px
                        box-sizing border-box
                        margin-top 5px
                        width 242px 
                        height 38px 
                        color #A0A0A0 
                        border 1px solid #DADADA
                        border-radius 8px
                }
                input::-webkit-input-placeholder{
                    line-height 38px 
                    font-size 20px 
                    color #909090
                }
                div{
                    width 25px 
                    height 80%
                    img{
                        margin 0
                        width 25px 
                        height 21px
                    }
                }
                .share{
                    position absolute
                    right 60px 
                    bottom 9px
                    img{
                        float left
                    }
                    span{
                        float left
                        margin-top 7px
                    }
                }
                .Collection{
                    position absolute 
                    right 10px
                    bottom 9px
                    img{
                        float left
                    }
                    span{
                        float left
                        margin-top 7px
                    }
                }
            }
            
            
        }

</style>
