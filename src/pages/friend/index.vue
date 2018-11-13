<template>
    <div class="friend">
        <myHeader></myHeader>
        <friendList :allFriend=allFriend></friendList>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import friendList from "@/pages/friend/components/friendList"
import pictrue1 from "@/assets/friend/friend (1).png"
import pictrue2 from "@/assets/friend/friend (2).png"
import pictrue3 from "@/assets/friend/friend (3).png"
import pictrue4 from "@/assets/friend/friend (5).png"
import pictrue5 from "@/assets/friend/friend (4).png"
export default {
    components:{
        myHeader,
        friendList
        
    },
    data () {
        return {
            allFriend:[
                {
                    url:pictrue1,
                    text:"一本竹子小姐",
                    words:"Type something"
                },
                {
                    url:pictrue2,
                    text:"陈晨Loop",
                    words:"Type something"
                },
                {
                    url:pictrue3,
                    text:"珠珠",
                    words:"Type something"
                },
                {
                    url:pictrue4,
                    text:"Springhug",
                    words:"Type something"
                },
                {
                    url:pictrue5,
                    text:"研讨助手",
                    words:"欢迎新同学"
                }
            ]
        }
    }
}
</script>
<style scoped="styl">
.friend{
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


