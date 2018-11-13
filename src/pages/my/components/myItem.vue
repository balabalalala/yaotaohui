<template>
    <div class="myItem">
        <ul class="myList">
            <router-link tag="li" to="/mySchool">
                <img src="@/assets/my/Group 8.png" alt="">
                <p class="words">我的院校</p>
            </router-link>
            <router-link tag="li" to="/course">
                <img src="@/assets/my/Group 6.png" alt="">
                <p class="words">我的课程</p>
            </router-link>
            <router-link tag="li" to="/collect">
                <img src="@/assets/my/Group 9.png" alt="">
                <p class="words">我的收藏</p>
            </router-link>
            <router-link tag="li" to="/setup">
                <img src="@/assets/my/Group 10.png" alt="">
                <p class="words">个人设置</p>
            </router-link>
            <router-link tag="li" to="/onlineconsult">
                <img src="@/assets/my/Group 11.png" alt="">
                <p class="words">在线客服</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.myItem{
    width:100%;
    height: 240px;
    margin-top:14px;
    /* background-color: pink; */
    .myList{
        width:100%;
        height: 100%;
        /* background-color: #fff; */
        li{
            position: relative;
            width:100%;
            height: 44px;
            margin-bottom:5px;
            background-color: #fff;
            img{
                position: absolute;
                left: 26px;
                top:50%;
                transform: translateY(-50%);
                width:26px;
                height: 26px;
            }
            .words{
                position: absolute;
                left: 69px;
                top:50%;
                transform: translateY(-50%);
                width:200px;
                height: 30px;
                line-height: 30px;
                text-align: left;
                color: #161616;
                font-size: 20px;
            }
        }
    }
}
</style>

