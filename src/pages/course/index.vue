<template>
    <div class="course">
        <myHeader></myHeader>
        <myCourse></myCourse>
        <Title @nowStudy='nowStudy' @openClass='openClass' @haveBuy='haveBuy'></Title>
        <nowStudy v-if="isShow"  ></nowStudy>
        <haveBuy v-if="isShow1" ></haveBuy>
        <open v-if="isShow2"   ></open>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import myCourse from "@/pages/course/components/myCourse"
import Title from "@/pages/course/components/title"
import nowStudy from "@/pages/course/components/nowStudy"
import haveBuy from "@/pages/course/components/haveBuy"
import open from "@/pages/course/components/open"
export default {
    components:{
        myHeader,
        myCourse,
        Title,
        nowStudy,
        haveBuy,
        open
    },
    data (){
        return {
            isShow: true,
            isShow1: false,
            isShow2: false
        }
    },
    methods:{
        nowStudy(){
            this.isShow = true,
            this.isShow1 = false,
            this.isShow2 = false
        },
        haveBuy(){
            this.isShow = false,
            this.isShow1 = true,
            this.isShow2 = false
        },
        openClass(){
            this.isShow = false,
            this.isShow1 = false,
            this.isShow2 = true
        }
       
    }
}
</script>
<style>
.course{
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




