<template>
    <div class="myDetial">
        <img src="@/assets/my/my.png" alt="">
        <p class="month">八月AUG</p>
        <ul class="myList">
            <router-link tag="li" to="/friend">
                <p class="words">好友</p>
                <p class="number">5</p>
            </router-link>
            <router-link tag="li" to="/follow">
                <p class="words">关注</p>
                <p class="number">3</p>
            </router-link>
            <router-link tag="li" to="/chat">
                <p class="words three">群聊</p>
                <p class="number">1</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.myDetial{
    position: relative;
    width:100%;
    height: 209px;
    margin-top:44px;
    background-color: #fff;
    img{
        position: absolute;
        left: 140px;
        top:12px;
        width:91px;
        height: 92px;
    }
    .month{
        position: absolute;
        left: 0;
        top:110px;
        width:100%;
        height: 22px;
        text-align: center;
        line-height: 22px;
        font-size: 16px;
        color: #292929;
    }
    .myList{
        position: absolute;
        left: 60px;
        top: 147px;
        width:255px;
        height: 50px;
        /* background-color: orange; */
        li{
            /* position: relative; */
            width:33.3%;
            height: 100%;
            float: left;
            .words{
                width:100%;
                height: 25px;
                line-height: 25px;
                text-align: center;
                font-size: 18px;
                color: #161616;
                border-right:1px solid #DADADA;
                box-sizing:border-box;  
            }
            .three{
                border-right:none
            }
            .number{
                width:100%;
                height: 25px;
                line-height: 25px;
                text-align: center;
                font-size: 18px;
                color: #5B5B5B;
            }
        }
    }
}
</style>

