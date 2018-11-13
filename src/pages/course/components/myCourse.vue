<template>
    <div class="myCourse">
        <div class="search">
            <img src="@/assets/school/search.png" alt="">
            <input type="text">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.myCourse{
    position: relative;
    width:100%;
    height: 48px;
    margin-top:44px;
    /* background: pink; */
    .search{
        position: absolute;
        left: 17px;
        top: 10px;
        width:342px;
        height: 35px;
        opacity: 0.6;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        border-radius: 8px;
        img{
            position: absolute;
            left: 12px;
            top:7.5px;
            width:20px;
            height: 20px;
        }
        input{
            position: absolute;
            left: 40px;
            top: 7px;
            width: 96px;
            height: 22px;
            font-size: 16px;
            color: #888888;
        }
    }
}
</style>

