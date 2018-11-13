<template>
    <div class="setup">
        <myHeader></myHeader>
        <setupList></setupList>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import setupList from "@/pages/setup/components/setupList"
export default {
    components:{
        myHeader,
        setupList
    }
}
</script>
<style scoped lang="styl">
.setup{
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




