<template>
    <div class="follow">
        <myHeader></myHeader>
        <followList :allFriend=allFriend></followList>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import followList from "@/pages/follow/components/followList"
import pictrue5 from "@/assets/friend/friend (4).png"
import pictrue1 from "@/assets/friend/follow (1).png"
import pictrue2 from "@/assets/friend/follow (2).png"
import pictrue3 from "@/assets/friend/follow (3).png"
export default {
    components:{
        myHeader,
        followList
    },
    data () {
        return {
            allFriend:[
                {
                    url:pictrue5,
                    text:"研讨助手",
                    words:"欢迎新同学"
                },
                {
                    url:pictrue2,
                    text:"Fireye峰",
                    words:"广州 | 插画师"
                },
                {
                    url:pictrue3,
                    text:"井川",
                    words:"成都 | 艺术工作者"
                },
                {
                    url:pictrue1,
                    text:"ARCHKEVIN",
                    words:"北京 | 艺术工作者"
                }
            ]
        }
    }
}
</script>
<style>
.follow{
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


