<template>
    <div class="daily-list2">
        <div class="daily-each">
            <span class="word">{{item.learn}}</span>
            <div class="slip" :class="{ active: isActive }" @click="move">
                <span class="small-slip" :class="{ active: smallActive}" ></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
       item:{

            type:Object
        }
    },
    data(){
        return{
            isActive: true,
            smallActive:true,
        }
    },
    methods:{
        move(){
            this.isActive= !this.isActive;
            this.smallActive = !this.smallActive;
        },
    }
}
</script>
<style scoped lang='styl'>
    /* .daily-list{
        position: relative;
        left: 0;
        width: 100%;
        height: 100%;
        margin-top: 278px; */
        .daily-each{
            /* position: absolute;
            left: 0;
            top: 0; */
            position: relative;
            width: 100%;
            height: 46px;
            background:#fff;
            /* margin-bottom:40px; */
            border-bottom:.3px solid #dadada;
            .word{
                position: absolute;
                left: 25px;
                top: 0;
                font-size: 16px;
                color: #8A8A8A;
                line-height: 46px;
            }
            .slip{
                    float:right;
                    margin-right: 17px;
                    width: 51px;
                    height: 31px;
                    background: #666;
                    border-radius: 18px;
                    margin-top: 6px;
                    .small-slip{
                        float: right;
                        width: 28px;
                        height: 28px;
                        margin-top:1px;
                        border-radius: 50%;
                        transform: translateX(-21px);
                        transition:all .2s linear;
                        background: #FFFFFF;
                        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.10), 0 2px 2px 0 rgba(0,0,0,0.30);
                    }
                }
                .slip.active{
                    background: #FDD003;
                }
                .small-slip.active{
                    transform: translateX(0);
                }
        }
    /* } */
</style>
