<template>
    <div class="aboutYan">
        <myHeader></myHeader>
        <yanPage></yanPage>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import yanPage from "@/pages/aboutYan/components/yanPage"
export default {
    components:{
        myHeader,
        yanPage
    },
}
</script>
<style>
.aboutYan{
    position: absolute;
    left: 0;
    top:0;
    right: 0;
    bottom:0;
    width:100%;
    height: 100%;
    /* background-color: #F2F2F2; */
}
</style>




