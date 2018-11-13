<template>
    <div class="nowStudy" >
        <ul class="stydyList">
            <router-link tag="li" to="/loda">
                <img src="@/assets/school/study1.png" alt="">
            </router-link>
            <router-link tag="li" to="/loda">
                <img src="@/assets/school/study2.png" alt="">
            </router-link>
            <router-link tag="li" to="/loda">
                <img src="@/assets/school/study3.png" alt="">
            </router-link>
            <router-link tag="li" to="/loda">
                <img src="@/assets/school/study4.png" alt="">
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.nowStudy{
    position: relative;
    width:100%;
    /* height: 570px; */
    margin-top:16px;
    background-color: pink;
    .stydyList{
        position: absolute;
        left: 0;
        top:0;
        width:100%;
        height: 100%;
        li{
            width:345px;
            height: 110px;
            margin-left: 16px;
            margin-bottom:1px;
            img{
                width:345px;
                height: 110px;  
            }
        }
    }
}
</style>

