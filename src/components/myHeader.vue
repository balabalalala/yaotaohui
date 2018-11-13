<template>
    <div class="myHeader">
        <img src="@/assets/header-img/return.png" alt="" @click="goBack">
        <p>{{$route.meta.title}}</p>
    </div>
</template>
<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="styl">
.myHeader{
    position: fixed;
    left: 0;
    top:0;
    width:100%;
    height: 44px;
    z-index: 10;
    background: #FDD003;

    img{
        position: absolute;
        left: 9px;
        top:50%;
        transform:translateY(-50%);
        width:12;
        height: 21px;
        z-index: 2;
    }
    P{
        position: absolute;
        top: 0;
        left:0;
        width:100%;
        height: 60px;
        line-height:44px;
        text-align: center;
        font-size: 22px;
        color: #000000;
    }
}
</style>

