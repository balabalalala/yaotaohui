<template>
    <div class="collectItem">
        <ul class="collectList">
            <router-link class="list" tag="li" to="/loda">
                <img src="@/assets/collect/1.png" alt="">
                <p class="title">图标应如何设计四要素</p>
                <p class="text">1.提取关键词...</p>
                <p class="time">2018-9-19</p>
            </router-link>
            <router-link class="list" tag="li" to="/loda">
                <img src="@/assets/collect/2.png" alt="">
                <p class="title">插画技法从现在开始</p>
                <p class="text">插画的构图是...</p>
                <p class="time">2018-9-20</p>
            </router-link>
            <router-link class="list" tag="li" to="/loda">
                <img src="@/assets/collect/3.png" alt="">
                <p class="title">漂亮的颜色是这样</p>
                <p class="text">颜色的选取在...</p>
                <p class="time">2018-9-22</p>
            </router-link>
        </ul>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.collectItem{
    position: relative;
    width:100%;
    height: 440px;
    margin-top:16px;
    /* background: pink; */
    .collectList{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        /* background-color: green; */
        .list{
            position: relative;
            width:334px;
            height: 112px;
            margin-bottom:23px;
            margin-left:21px;
            background-color: #fff;
            img{
                position: absolute;
                left: 24px;
                top: 17px;
                width:55px;
                height: 55px;
            }
            .title{
                position: absolute;
                left: 87px;
                top: 13px;
                width:181px;
                height: 25px;
                text-align: left;
                line-height: 25px;
                font-size: 18px;
                color: #121921;
            }
            .text{
                position: absolute;
                left: 87px;
                top: 47px;
                width:181px;
                height: 25px;
                 text-align: left;
                line-height: 25px;
                font-size: 18px;
                color: #666666;
            }
            .time{
                position: absolute;
                left: 24px;
                top: 86px;
                /* width:181px; */
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                color: #888888;
            }
        }
    }
}
</style>


