<template>
    <div class="title">
        <ul class="titleList">
            <li :class="{active:isActive === 1}" @click="picture">图片</li>
            <li class="artcil" :class="{active:isActive === 2}" @click="artcil">文章</li>
            <li :class="{active:isActive === 3}" @click="ridio">视频</li>
        </ul>
    </div>
</template>
<script>
export default {
    data (){
        return {
            isActive:2
        }
    },
    methods:{
        picture(){
            this.isActive = 1
        },
        artcil(){
            this.isActive = 2
        },
        ridio(){
            this.isActive = 3
        }
    }
}
</script>
<style scoped lang="styl">
.title{
   width:334px;
   height: 60px;
   margin-top:76px;
   margin-left:21px;
   /* background-color: pink; */
   .titleList{
        width:100%;
        height: 100%;
        /* opacity: 0.5; */
        border: 1px solid #A2A2A2;
        border-radius: 3px;
        box-sizing: border-box
        li{
           width:33.3%;
           height: 100%;
           line-height:60px;
           text-align: center;
           font-size: 20px;
           color: #3D3D3D;
           float: left;
           
       }
       li.active{
           background: #FDD003;
       }
   }
}
</style>
