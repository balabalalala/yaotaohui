<template>
    <div class="small-container">
        <div class="small-header">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/arrow.png" alt="sorry"></a>
            <p class="title">{{$route.meta.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods:{
    }
}
</script>
<style scoped lang='styl'>
.small-container{
    width: 100%;
    /* height: 100%; */
    .small-header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 44px;
        padding-bottom: 13px;
        line-height: 44px;
        background: #FDD003;
        z-index:3;
        .search {
            position: absolute;
            left: 16px;
            top: 8px;
            width: 20px;
            height: 20px;
        }
        .title {
            padding-top: 8px;
            box-sizing:border-box;
            font-size: 22px;
            color: #000000;
            text-align: center;
        }
    }
}
</style>
