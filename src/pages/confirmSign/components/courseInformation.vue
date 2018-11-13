<template>
    <div class="course-information">
        <div class="container">
            <div class="adress-input">
                <input type="text" placeholder="填写收货信息" class="word">
            </div>
            <div class="course-price">
                <p class="course-name">2019手绘视觉设计教程</p>
                <p class="all">
                    <span class="small-money">¥120</span>
                    <span class="more-money">市场价：¥240</span>
                    <span class="line"></span>
                </p>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .course-information{
        width: 100%;
        height: 100%;
        .container{
            position: relative;
            width: 100%;
            height: 100%;
            margin-top:65px;
            .adress-input{
                position: absolute;
                left: 16px;
                top: 19px;
                background: #FFFFFF;
                border: 1px solid #DADADA;
                border-radius: 4px;
                width: 342px;
                height: 44px;
                .word{
                    position: absolute;
                    left: 18px;
                    top: 11px;
                    font-size: 16px;
                    color: #545454;
                }
            }
            .course-price{
                position: absolute;
                left: 12px;
                top: 80px;
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
            .line{
                position: absolute;
                left: 0;
                top: 307px;
                width: 100%;
                height: 1px;
                background: #DADADA;
            }
        }
    }
</style>
