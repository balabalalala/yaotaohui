<template>
        <Scroll class="scrollHeight">
            <div class="my">
                <Yu-header></Yu-header>
                <myDetial></myDetial>
                <myItem></myItem>
            </div>
        </Scroll>
</template>
<script>
import YuHeader from "@/pages/my/components/header"
import myDetial from "@/pages/my/components/myDetial"
import myItem from "@/pages/my/components/myItem"
// import bottomNav from "@/components/bottomNav"
import Scroll from '@/components/scroll'
export default {
    components:{
        YuHeader,
        myDetial,
        myItem,
        // bottomNav,
        Scroll
    }
}
</script>
<style scoped lang="styl">
.scrollHeight{
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    height: 200px;
    /* background: #fdd003; */
    padding-bottom: 83px
    .my{
        position: absolute;
        left: 0;
        top:0;
        /* right: 0; */
        /* bottom:0; */
        width:100%;
        height: 500px;
        background-color: #F2F2F2;
    }
}
</style>
