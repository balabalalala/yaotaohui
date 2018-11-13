<template>
    <div class="loda">
        <myHeader></myHeader>
        <LodaPage></LodaPage>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import LodaPage from "@/pages/loda/components/lodaPage"
export default {
    components:{
        myHeader,
        LodaPage
        
    },
}
</script>
<style>
.loda{
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




