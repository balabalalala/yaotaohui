<template>
    <div class="course-price">
        <div class="price-content">
            <div class="protocol-container">
                <div class="user-protocol">
                    <input type="checkbox" name="btn" id="btn1" class="select">
                    <label for="btn1"></label>
                    <!-- <span class="select"></span> -->
                    <span class="word">我已同意并阅读《研讨绘用户协议》</span>
                </div>
                <div class="user-protocol pay">
                    <input type="checkbox" name="btn" id="btn1" class="select">
                    <label for="btn1"></label>
                    <!-- <input type="checkbox" class="select"> -->
                    <!-- <span class="select"></span> -->
                    <span class="word money">我已同意并阅读《研讨绘用户支付协议》</span>
                </div>
                <div class="total">
                    <span class="total-name">总计金额</span>
                    <span class="total-num">¥120</span>
                </div>
                <div class="total coupon">
                    <span class="total-name">活动优惠</span>
                    <span class="total-num">-¥120</span>
                </div>
            </div>
            <div class="bottom-nav">
                <span class="all-money">合计：¥120</span>
                <router-link tag='span' to='/receiptInformation' class="give">付款</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .course-price{
        width: 100%;
        height: 100%;
        .price-content{
            position: relative;
            width: 100%;
            height: 100%;
            .protocol-container{
                position: absolute;
                left: 0;
                top: 308px;
                width: 100%;
                height: 100%;
                .user-protocol{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 48px;
                    border-bottom: .3px solid #DADADA;
                    input[type="checkbox"]{
                        position: absolute;
                        left: 16px;
                        top: 11px;
                        width: 25px;
                        height: 25px;
                        display: inline-block;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 20px;
                    }
                    input[type="checkbox"]::before{
                        position: absolute;
                        left: 0;
                        top: 0;
                        content: "";
                        width: 100%;
                        height: 100%;
                        background: #fff;
                        border: 1px solid #DADADA;
                        border-radius: 3px;
                    }
                    input[type="checkbox"]:checked::before{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        content: "\2713";
                        text-align: center;
                        vertical-align: middle;
                        border: 1px solid #DADADA;
                        color:#000;
                         line-height: 25px;
                        font-size: 20px;
                        /* font-weight: bold; */
                        background: #fff;
                    }
                    .word{
                        font-size: 14px;
                        color: #545454;
                        line-height: 48px;
                        margin-left:-50px;
                    }
                }
                .pay{
                    top: 48px;
                    .money{
                        margin-left:-20px;
                    }
                }
                .total{
                    position: absolute;
                    left: 0;
                    top: 97px;
                    width: 100%;
                    height: 61px;
                    font-size: 16px;
                    color: #4A4A4A;
                    line-height: 61px;
                    border-bottom: .3px solid #DADADA;
                    .total-name{
                        float: left;
                        padding-left:15px;
                        box-sizing:border-box;
                    }
                    .total-num{
                        float: right;
                        font-size: 18px;
                        color: #545454;
                        padding-right:15px;
                        box-sizing:border-box;
                    }
                }
                .coupon{
                    top: 158px;
                    padding-bottom: 200px;
                }
            }
            .bottom-nav{
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 56px;
                font-size: 20px;
                color: #545454;
                line-height: 56px;
                text-align: center;
                .all-money{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 225px;
                    height: 100%;
                    background:#fff;
                }
                .give{
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 150px;
                    height: 100%;
                    color: #000000;
                    background: #FDD003;
                }
            }
        }
    }
</style>
