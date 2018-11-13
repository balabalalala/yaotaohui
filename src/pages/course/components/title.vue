<template>
    <div class="title">
        <ul class="titleList">
            <li>
                <p class="one" :class="{active:isActive ===1}" @click="nowStudy"><span class="line1" ></span>正在学习</p>
            </li>
            <li>
                <p class="two" :class="{active:isActive ===2}" @click="haveBuy"><span class="line2"></span>已购买</p>
            </li>
            <li>
              <p class="three" :class="{active:isActive ===3}" @click="openClass"><span class="line3"></span>公开课</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data (){
        return {
            isActive:1,
            // isLine:false
        }
    },
    methods:{
        nowStudy(){
            this.$emit('nowStudy');
            this.isActive = 1
        },
        haveBuy(){
            this.$emit('haveBuy');
            this.isActive = 2
        },
        openClass(){
            this.$emit('openClass');
            this.isActive = 3
        }
    }
}
</script>
<style scoped lang="styl">
.title{
    width:100%;
    height: 34px;
    margin-top:36px;
    border-bottom:1px solid #DADADA;
    box-sizing: border-box
    /* background-color: pink; */
    .titleList{
        width:100%;
        height: 100%;
        li{
            position: relative;
            width:33.3%;
            height: 100%;
            float: left;
            p{
                width:100%;
                height: 25px;
                line-height:25px;
                text-align: center;
                font-size: 18px;
                color: #888888;
            }
            p.active{
                color: #2C2C2C;
            }

            span{
                position: absolute;
                bottom:0;
                left: 50%;
                transform:translateX(-50%);
                width:78px;
                height: 2px;
                /* background: #FFE260; */
            }
            p.active span{
                 background: #FFE260;
            }
        }
    }
}
</style>

