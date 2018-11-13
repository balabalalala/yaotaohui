<template>
    <div class="collect">
        <myHeader></myHeader>
        <Title></Title>
        <CollectItem></CollectItem>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import Title from "@/pages/collect/components/title"
import CollectItem from "@/pages/collect/components/collectItem"
export default {
    components:{
        myHeader,
        Title,
        CollectItem
        
    },
}
</script>
<style>
.collect{
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




