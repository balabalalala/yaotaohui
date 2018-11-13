<template>
    <div class="haveBuy" >
        <img src="@/assets/my/loda.png" alt="">
        <p class="words1">你还未购买任何课程</p>
        <p class="words2">老师正在耐心的等候上课，快快去选课吧！</p>
        <button class="choose">去选课</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.haveBuy{
     position: relative;
    width:100%;
    /* height: 570px; */
    margin-top:16px;
    background-color: pink;
    img{
        position: absolute;
        left: 116px;
        top:60px;
        width:145px;
        height: 173px;
    }
    .words1{
        position: absolute;
        left: 0;
        top:310px;
        width:100%;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 20px;
        color: #353535;
    }
    .words2{
        position: absolute;
        left: 0;
        top:338px;
        width:100%;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        color: #6C6C6C;
    }
    .choose{
        position: absolute;
        left:89px;
        top:410px;
        width:198px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
        color: #000000;
        background: #FDD003;
        border: 1px solid #F8E71C;
        border-radius: 4px;
    }
}
</style>

