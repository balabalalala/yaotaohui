<template>
<div class="all">
    <div class="schoolCollect">
        <ul class="schoolList">
            <router-link class="list" tag="li" to="/loda">
                <img src="@/assets/school/gansu.png" alt="">
                <p class="title">甘肃大学</p>
                <p class="text">学校简介：校园景观设计根据其不同的功能区域可分为校园形象展示景观区行政...</p>
            </router-link>
            <router-link class="list" tag="li" to="/loda">
                <img src="@/assets/school/guangxi.png" alt="">
                <p class="title">广西大学</p>
                <p class="text">学校简介：通过对琴棋书画的元素的提炼，巧妙的贯穿设计中，渲染一种书香智慧…</p>
            </router-link>
            <router-link class="list" tag="li" to="/loda">
                <img src="@/assets/school/henan.png" alt="">
                <p class="title">河南大学</p>
                <p class="text">学校简介：通过每个具有不同功能属性的区域,景观设计力求区域差异化，满足不…</p>
            </router-link>
        </ul>
    </div>
    <div class="add">
        <img src="@/assets/school/add.png" alt="">
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.schoolCollect{
    position: relative;
    width:100%;
    height: 320px;
    margin-top:72px;
    overflow: hidden;

    /* background-color: pink; */
    .schoolList{
        position: absolute;
        left: 0;
        top:0;
        width:375px;
        height: 100%;

        .list{
            position: relative;
            width:375px;
            height: 94px;
            margin-left: 19px;
            margin-bottom:14px;
            /* background: orange; */
            img{
                position: absolute;
                left: 19px;
                top:50%;
                transform:translateY(-50%);
                width:66px;
                height: 66px;
            }
            .title{
                position: absolute;
                left: 95px;
                top:0;
                /* width:80px; */
                height: 28px;
                line-height:28px;
                font-size: 20px;
                color: #000000;
            }
            .text{
                position: absolute;
                left: 95px;
                top:26px;
                width:245px;
                height: 66px;
                line-height:22px;
                font-size: 16px;
                color: #666666;
                text-align: left
                /* background-color: green; */
                
            }
            /* .delete{
                position: absolute;
                left: 355px;
                top:0;
                width:80px;
                height: 94px;
                line-height:80px;
                font-size: 22px;
                color: #000000;
                text-align: center;
                background-color: yellow;
            } */
        }
    }
}
.add{
    position: relative;
    width:319px;
    height: 44px;
    margin-top:20px;
    margin-left: 30px;
    background: #FDD003;
    border-radius: 4px;
    img{
        position: absolute;
        left: 157px;
        top: 11px;
        width:23px;
        height: 23px;
        /* background: #000000; */
        /* border-radius: 100px; */
        
    }
}
</style>


