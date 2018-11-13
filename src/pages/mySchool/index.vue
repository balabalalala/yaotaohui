<template>
    <div class="mySchool">
        <myHeader></myHeader>
        <SchoolCollect></SchoolCollect>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import SchoolCollect from "@/pages/mySchool/components/schoolCollect"
export default {
    components:{
        myHeader,
        SchoolCollect
    },
}
</script>
<style>
.mySchool{
    position: absolute;
    left: 0;
    top:0;
    right: 0;
    bottom:0;
    width:100%;
    height: 100%;
    background-color: #F2F2F2;
}
</style>




