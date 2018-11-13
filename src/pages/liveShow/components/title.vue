<template>
    <div class="live-titles">
        <ul class="title-list">
            <li class="channal-title" :class="{active:isActive === 1}" @click="channalClick">
                频道
                 <div class="hand-line"></div>
            </li>
            <li class="channal-title" :class="{active:isActive === 2}" @click="hotClick">热门
                 <div class="hand-line"></div>
            </li>
            <li class="channal-title" :class="{active:isActive === 3}" @click="newClick">最新
                 <div class="hand-line"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{

    },
    data(){
        return {
            isActive:1,
        }
    },
    methods:{
        channalClick(){
            this.$emit('channalClick');
            this.isActive = 1;
        },
        hotClick(){
            this.$emit('hotClick');
            this.isActive = 2;
        },
        newClick(){
            this.$emit('newClick');
            this.isActive = 3;
        },
    }
}
</script>
<style scoped lang='styl'>
    .live-titles{
        position: relative;
        width: 100%;
        margin-top: 138px;
        .title-list{
            position: absolute;
            left: 0;
            top: 0;
            width: 375px;
            border-bottom:1px solid #dadada;
            .channal-title{
                float: left;
                width: 33%;
                height: 25px;
                font-size: 19px;
                color: #545454;
                line-height:25px;
                text-align:center;
                padding-bottom:10px;
            }
            li.active{
                position: relative;
                color: #000000; 
                .hand-line{
                    position: absolute;
                    left:50%
                    bottom:0;
                    width: 44px;
                    height: 3px;
                    transform: translateX(-50%);
                    background: #FDD003;
                }
            }
        }
    }
</style>
