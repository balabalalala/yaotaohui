<template>
    <div class="channal-content">
        <ul class="channal-group">
            <router-link tag='li' to='/hotDetail' class="each" v-for="(item,index) of channalData" :key='index'>
                <img :src="item.url" alt="sorry" class="picture">
                <img :src="item.sanjiao" alt="sorry" class="sanjiao">
                <p class="course">{{item.course}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        channalData:{
            type:Array
        }
    }
}
</script>
<style scoped lang='styl'>
    .channal-content{
        position: relative;
        width: 100%;
        /* height: 100%; */
        .channal-group{
            position: absolute;
            left: 20px;
            top: 56px;
            width: 340px;
            height: 100%;
            .each{
                position: relative;
                float: left;
                width: 148px;
                height: 178px;
                padding-right: 22px;
                font-size: 16px;
                color: #545454;
                text-align: center;
                /* box-sizing: border-box */
                .sanjiao{
                    margin-left: 18px;
                    margin-top: -165px;
                }
                .course{
                    position: absolute;
                    left  0
                    bottom 16px
                    letter-spacing 1px
                    width 100%
                    text-align center
                    line-height 22px
                }
            }
        }
    }
</style>
