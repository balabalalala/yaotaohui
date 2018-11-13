<template>
    <div class="calendar">
        <div class="time">
            <p class="date">2018九月</p>
            <div class="week">
                <ul class="group">
                    <li class="each">一</li>
                    <li class="each">二</li>
                    <li class="each">三</li>
                    <li class="each">四</li>
                    <li class="each">五</li>
                    <li class="each">六</li>
                    <li class="each">日</li>
                </ul>
            </div>
            <div class="week day">
                <ul class="group">
                    <li v-for="(item,index) of arr" class="each" :key="index" :class="{pink:item.isPink}" @click=handleClick(item)><span :class="{yellow:item.isYellow,'today': item.isToday }">{{item.text}}</span></li>
                </ul>
            </div>
            <p class="go">
                <img src="@/assets/home/pic.png" alt="sorry" class="pic">
                <span class="go-word">今天也是元气满满的一天！</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        makeWord:{
            type:Array
        },
        arr:{
            type:Array
        }
    },
    data(){
        return{
            isActive:false,
        }
    },
    methods:{
        changdeCorlor(){
            this.isActive = !this.isActive;
        },
        handleClick(item){
            item.isPink = !item.isPink;

        }
    }
}
</script>
<style scoped lang='styl'>
    .calendar{
        position: relative;
        width: 100%;
        margin-top: 65px;
        .time{
            width: 327px;
            height: 60px;
            .date{
                position: absolute;
                left: 14px;
                top: 0;
                font-size: 16px;
                color: #888888;
            }
            .week{
                position: absolute;
                left: 25px;
                top: 35px;
                width: 327px;
                height: 28px;
                .group{
                    width: 327px;
                    height: 100%;
                    margin-top:3px;
                    .each{
                        float: left;
                        width: 14.2%;
                        height: 28px;
                        font-size: 20px;
                        color: #545454;
                        text-align: center;
                    }
                }
            }
            .day{
                top: 73px;
                .group{
                    width: 327px;
                    height: 100%;
                    .each{
                        font-size: 16px;
                        color: pink;
                        margin-bottom: 8px;
                        text-align:center;
                        line-height: 30px;
                        .yellow{
                            display: inline-block;
                            width: 27px;
                            height: 27px;
                            border-radius: 50%;
                            font-size: 14px;
                            color: #FFFFFF;
                            /* line-height: 27px; */
                            text-align:center;
                            background: #FDD003;
                        }
                        .today{
                            display: inline-block;
                            width: 27px;
                            height: 27px;
                            border-radius: 50%;
                            font-size: 14px;
                            color: #FFFFFF;
                            /* line-height: 27px; */
                            text-align:center;
                            background: #393939;
                            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
                        }
                    }
                    .pink{
                        color: #888888;
                    }
                }
            }
            .go{
                position: absolute;
                left: 0;
                top: 263px;
                padding: 19px 0;
                width: 100%;
                height: 36px;
                border-bottom:.3px solid #dadada;
                background: #fff;
                .pic{
                    position: absolute;
                    left: 25px;
                    top: 19px;
                }
                .go-word{
                    position: absolute;
                    left: 72px;
                    top: 30px;
                    font-size: 16px;
                    color: #8A8A8A;
                }
            }
        }
    }
</style>

