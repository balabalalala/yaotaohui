<template>
    <div class="yanPage">
        <img class="img" src="@/assets/school/logo.png" alt="">
        <p class="title">研讨会</p>
        <p class="text">考研网官方 APP，是考研网和考研论坛所属移动客户端 APP，隶属于好未来集团（美国纽交所上市公司，股票代码 XRS），集院校资讯、考研经验、考研资料、考研论坛于一体的考研人的掌上家园！考研帮学生端，旨在提供一个平台，学生通过搜索可以找到适合自己的老师，提供终端进行约课、上课、支付课酬、评价。
        </p>
        <p class="text text1">在这里，你可以享受性价比超高的辅导，和老师即时互动，解决专业课复习的所有难题。</p>
        <p class="text text2">考研网:www.yantaoh.com</p>
        <p class="text text3">考研帮:bang.yantaoh.com</p>
        <p class="text text4">考研论坛:bbs.yantaoh.com </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.yanPage{
    position: relative;
    width:100%;
    height: 650px;
    margin-top:44px;
    /* background-color: pink; */
    .img{
        position: absolute;
        left: 143px;
        top:43px;
        width:90px;
        height: 90px;
    }
    .title{
        position: absolute;
        left: 0;
        top:157px;
        width:100%;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 20px;
        color: #353535;
    }
    .text{
        position: absolute;
        left: 17px;
        top:187px;
        width:342px;
        height: 252px;
        line-height: 28px;
        text-align: left;
        font-size: 19px;
        color: #797979;
        line-height: 28px;
    }
    .text1{
        top:460px;
        height: 84px;
        /* background-color: pink; */
    }
    .text2{
        top:544px;
        height: 28px;
    }
    .text3{
        top:572px;
        height: 28px;
    }
    .text4{
        top:600px;
        height: 28px;
    }
}
</style>
