<template>
    <div class="setupList">
        <ul class="setupItem">
            <li class="listOne">
                <p>清理缓存</p>
                <span>0.56M</span>
                <img  class="right" src="@/assets/icons/right.png" alt="">
                <!-- <span class="right">></span> -->
            </li>
            <li class="listOne">
                <p>夜间模式</p>
                <div class="ball" :class="{active:isActive}" @click="colorChange">
                    <div class="ballRun" :class="{active:ball}"></div>
                </div>
            </li>
            <li>
                <p>接收热点推送</p>
                <div class="ball" :class="{active:isActive1}" @click="colorChange1">
                    <div class="ballRun" :class="{active:ball1}"></div>
                </div>
            </li>
            <li>
                <p>接收系统提醒</p>
                <div class="ball" :class="{active:isActive2}" @click="colorChange2">
                    <div class="ballRun" :class="{active:ball2}"></div>
                </div>
            </li>
            <li>
                <p>允许非WIFI网络下下载视频</p>
                <div class="ball" :class="{active:isActive3}" @click="colorChange3">
                    <div class="ballRun" :class="{active:ball3}"></div>
                </div>
            </li>
            <li class="listOne">
                <p>视频缓存路径</p>
            </li>
            <router-link tag="li" to="/aboutYan">
                <p>关于研讨绘</p>
            </router-link>
            <li>
                <p>推荐给好友</p>
            </li>
        </ul>
        <button>退出登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isActive: true,
            ball: true,
            isActive1: true,
            ball1: true,
            isActive2: true,
            ball2: true,
            isActive3: true,
            ball3: true,
        }
    },
    methods:{
        colorChange(){
            this.isActive =!this.isActive,
            this.ball = !this.ball
        },
        colorChange1(){
            this.isActive1 =!this.isActive1,
            this.ball1 = !this.ball1
        },
        colorChange2(){
            this.isActive2 =!this.isActive2,
            this.ball2 = !this.ball2
        },
        colorChange3(){
            this.isActive3 =!this.isActive3,
            this.ball3 = !this.ball3
        }
    }
}
</script>
<style scoped lang="styl">
.setupList{
    position: relative;
    width:100%;
    height: 430px;
    margin-top:70px;
    /* background-color: pink; */
    .setupItem{
        position: absolute;
        left: 0;
        top:0;
        width:100%;
        height: 100%;
        li{
            position: relative;
            width:345px;
            height: 46px;
            margin-left:16px;
            opacity: 0.9;
            border: 1px solid #DADADA;
            border-radius: 4px;
            box-sizing: border-box;
            background: #FCFCFC;
            border: 1px solid #DADADA;
            border-radius: 4px;
            p{
                position: absolute;
                left: 11px;
                top: 10px;
                /* width:216px; */
                height: 25px;
                line-height:25px;
                text-align:left;
                font-size: 18px;
                color: #696969;
            }
            span{
                position: absolute;
                left: 271px;
                top:13px ;
                width:42px;
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                color: #4A4A4A;
            }
            .right{
                position: absolute;
                left: 315px;
                top:15px ;
                width:12.6px;
                height: 12.6px;
                line-height: 20px;
                /* font-size: 14px; */
                color: #888888;
            }
            .ball{
                position: absolute;
                right: 14px;
                top:14px;
                width:32px;
                height: 14px;
                background:#FFF1AF ;
                border-radius: 100px;
                box-shadow: inset 0 1px 3px 0 rgba(147,147,147,0.50);
                .ballRun{
                    position: absolute;
                    left: -7px;
                    top:-4px;
                    width:20px;
                    height: 20px;
                    border-radius: 50%;
                    transform:translateX(25px);
                    background: #FDD003;
                    box-shadow: 0 1px 2px 0 #DBCE8F;

                    /* background: #EAE7E7; */
                    /* box-shadow: 0 1px 2px 0 rgba(129,129,129,0.50); */

                }
                .ballRun.active{
                    transform: translateX(0);
                    background: #EAE7E7;
                    box-shadow: 0 1px 2px 0 rgba(129,129,129,0.50);

                    /* background: #FDD003;
                    box-shadow: 0 1px 2px 0 #DBCE8F; */
                }
            }
            .ball.active{
                background:  #D8D8D8;
            }
        }
        .listOne{
            margin-bottom:16px;
        }
    }
    button{
        position: absolute;
        width:198px;
        height: 46px;
        left: 89px;
        top:450px;
        background: #FDD003;
        border: 1px solid #FDD003;
        border-radius: 4px;
        text-align: center;
        line-height: 46px;
        font-size: 20px;
        color: #000000;
    }
}
</style> 