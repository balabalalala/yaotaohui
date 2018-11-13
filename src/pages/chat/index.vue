<template>
    <div class="chat">
        <myHeader></myHeader>
        <allChat></allChat>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import allChat from "@/pages/chat/components/allChat"
export default {
    components:{
        myHeader,
        allChat
    },
}
</script>
<style>
.chat{
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


