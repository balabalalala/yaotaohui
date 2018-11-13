<template>
    <div class="school-content">
        <div class="project">
            <ul class="group">
                <li class="list">19考研</li>
                <li class="list">20考研</li>
                <li class="list">公开课</li>
            </ul>
        </div>
        <img src="@/assets/school/school1.png" alt="sorry" class="banner">
        <div class="draw-title">
            <span class="name hand" :class="{active:isColor === 1}" @click="goback">手绘</span>
            <div class="hand-line" :class="{active:moveLine}"></div>
            <span class="name theory" :class="{active:isColor === 2}" @click="move">理论</span>
        </div>
        <router-link to='/signUp'>
            <img src="@/assets/school/school2.png" alt="sorry" class="year first">
        </router-link>
        <router-link to='/signUp'>
            <img src="@/assets/school/school3.png" alt="sorry" class="year">
        </router-link>
        <router-link to='/signUp'>
            <img src="@/assets/school/school4.png" alt="sorry" class="year">
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            moveLine:false,
            isColor:1,
        }
    },
    methods:{
        move(moveLine){
            this.moveLine = true;
            this.isColor = 1;
        },
        goback(){
            this.moveLine = false
            this.isColor = 2;
        }
    }
}
</script>
<style scoped lang='styl'>
    .school-content{
        position: relative;
        width: 100%;
        height: 400px;
        margin-top: 65px;
        .project{
            position: absolute;
            left: 0;
            top: 0;
            width: 375px;
            border-bottom:1px solid #dadada;
            .group{
                width: 100%;
                height: 100%;
                .list{
                    float: left;
                    width: 33%;
                    height: 25px;
                    font-size: 18px;
                    color: #545454;
                    line-height:25px;
                    text-align:center;
                    padding-bottom:10px;
                    /* padding-right:10px; */
                }
                li:nth-child(1){
                    font-size: 18px;
                    color: #000000;
                }
            }
        }
        .banner{
            margin-top: 50px;
        }
        .draw-title{
            position: relative;
            width: 160px;
            height: 28px;
            margin: 0 auto;
            .name{
                width: 44px;
                height: 22px;
                line-height: 22px;
                text-align: center;
                font-size: 16px;
                padding-right:48px;
                color: #000;
            }
            .name.active{
                color: #545454;
            }
            .hand-line{
                position: absolute;
                left: 15px;
                bottom: 0;
                width: 44px;
                height: 3px;
                background: #FDD003;
                transform: translateX(0);
            }
            .hand-line.active{
                transform: translateX(84px);
            }
            .theory{
                padding-right: 0;
                color: #000;
            }
        }
        .first{
            margin-top: 10px;
        }
    }
</style>
