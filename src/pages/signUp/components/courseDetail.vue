<template>
    <div class="course-detail">
        <div class="container">
            <div class="course-price">
                <p class="course-name">2019手绘视觉设计教程</p>
                <p class="all">
                    <span class="small-money">¥120</span>
                    <span class="more-money">市场价：¥240</span>
                    <span class="line"></span>
                </p>
            </div>
            <div class="time">
                <span class="num">10</span>
                <span class="word">天</span>
                <span class="num">6</span>
                <span class="word">时</span>
                <span class="num">34</span>
                <span class="word">分</span>
                <span class="num">7</span>
                <span class="word">秒</span>
            </div>
            <p class="over">限时结束  恢复市场价</p>
            <div class="over-line"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .course-detail{
        width: 100%;
        height: 100%;
        .container{
            position: relative;
            width: 100%;
            height: 100%;
            margin-top:65px;
            .course-price{
                position: absolute;
                left: 12px;
                top: 0;
                width: 342px;
                height: 193px;
                background-image: url('../../../assets/school/price.png');
                .course-name{
                    position: absolute;
                    left: 48px;
                    top: 66px;
                    font-size: 24px;
                    color: #FFFFFF;
                }
                .all{
                    position: absolute;
                    left: 101px;
                    top: 107px;
                    font-size: 20px;
                    color: #FFFFFF;
                    .more-money{
                        font-size: 12px;
                        margin-left:10px;
                    }
                    .line{
                        position: absolute;
                        left: 54px;
                        top: 12px;
                        width: 88px;
                        height: 1px;
                        background: #fff;
                    }
                }
            }
            .time{
                position: absolute;
                left: 42px;
                top: 220px;
                width: 304px;
                height: 37px;
                .num{
                    display: inline-block;
                    width: 35px;
                    height: 33px;
                    font-size: 19px;
                    color: #353535;
                    text-align:center;
                    line-height:33px;
                    border: 2px solid #C9C9C9;
                    border-radius: 4px;
                }
                .word{
                    font-size: 16px;
                    color: #888888;
                    padding: 0 5px;
                }
            }
            .over{
                position: absolute;
                left: 115px;
                top: 275px;
                font-size: 16px;
                color: #848282;
            }
            .over-line{
                position: absolute;
                left: 0;
                top: 301px;
                width: 375px;
                height: 18px;
                background: rgba(241,241,241,0.50);
            }
        }
    }
</style>
