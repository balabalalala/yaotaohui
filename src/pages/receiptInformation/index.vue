<template>
    <div class="receipt-information">
        <!-- 收货信息的头部 -->
        <small-header></small-header>
        <!-- 付款方式的头部 -->
        <div class="small-header" v-show="payHeader">
            <a href="javascript:;" class="search" @click="$router.go(-1);"><img src="@/assets/home/arrow.png" alt="sorry"></a>
            <p class="title">付款方式</p>
        </div>
        <div class="receipt-container">
            <ul class="group">
                <li><input type="text" class="each" value="* 姓名："></li>
                <li><input type="text" class="each" value="* 手机号："></li>
                <li><input type="text" class="each" value="* QQ号："></li>
                <li><input type="text" class="each" value="* 所在地区："></li>
                <li><input type="text" class="each" value="* 收货地址："></li>
            </ul>
            <div class="confirm" @click="open(isClose)"> 确定</div>
        </div>
        <div class="mask" v-show="isClose">
            <div class="return"></div>
            <!-- 确认付款的底部 -->
            <div class="confirm-pay" >
                <p class="confirm-content">
                    <span class="close" @click="close(isClose)">+</span>
                    <span class="pay-content">确认付款</span>
                </p>
                <p class="money">¥120</p>
                <div class="account">
                    <span class="my">我的账号</span>
                    <span class="num">ZZ555333</span>
                </div>
                <div class="account pay-method">
                    <img src="@/assets/search/return.png" class="num" @click="payShow">
                    <span class="my">付款方式</span>
                </div>
                <div class="instant">立即付款</div>
            </div>
            <!-- 付款方式的底部 -->
            <div class="confirm-pay pay-money" v-show="payMethod">
                <p class="confirm-content">
                    <span class="return2" @click="$router.go(-1);"><img src="@/assets/search/return2.png" alt="sorry"></span>
                    <span class="pay-content">付款方式</span>
                </p>
                <div class="account wx-method">
                    <img src="@/assets/pay/wx.png" alt="sorry" class="wx">
                    <span class="wx-word">微信</span>
                    <img src="@/assets/pay/select.png" alt="sorry" class="select">
                </div>
                <div class="account wx-method zfb-method">
                    <img src="@/assets/pay/zfb.png" alt="sorry" class="wx">
                    <span class="wx-word">支付宝</span>
                </div>
                <div class="instant">立即付款</div>
            </div>
        </div>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
export default {
    components:{
        smallHeader,
    },
    data(){
        return{
            isClose:false,
            payHeader:false,
            payMethod:false,
        }
    },
    methods:{
        close(){
            this.isClose = false;
        },
        open(){
            this.isClose = true;
        },
        payShow(){
            this.payHeader = true;
            this.payMethod = true;
        }
    }
}
</script>
<style scoped lang='styl'>
    .receipt-information{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        .small-header{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 44px;
            padding-bottom: 13px;
            line-height: 44px;
            background: #FDD003;
            z-index:3;
            .search {
                position: absolute;
                left: 16px;
                top: 8px;
                width: 20px;
                height: 20px;
            }
            .title {
                padding-top: 8px;
                box-sizing:border-box;
                font-size: 22px;
                color: #000000;
                text-align: center;
            }
        }
        .receipt-container{
            position: absolute;
            left: 0;
            top: 55px;
            width: 100%;
            height: 100%;
            .each{
                width: 100%;
                height: 47px;
                padding-left: 41px;
                margin-top: 24px;
                box-sizing: border-box;
                font-size: 18px;
                color: #545454;
                text-align: left;
                border-bottom: 1px solid #dadada;
            }
            .confirm{
                position: absolute;
                left: 38px;
                top: 400px;
                width: 304px;
                height: 44px;
                background: #FDD003;
                border-radius: 4px;
                font-size: 20px;
                color: #000000;
                text-align: center;
                line-height: 44px;
            }
        }
        .mask{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 612px;
            z-index:5;
            .return{
                position: absolute;
                left: 0;
                top: -70px;
                width: 100%;
                height: 366px;
                opacity: 0.53;
                background: #595959;
            }
            .confirm-pay{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 330px;
                background:#fff;
                z-index:5;
                .confirm-content{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 40px;
                    border-bottom:0.3px solid #dadada;
                    .close{
                        position: absolute;
                        left: 18px;
                        top: 5px;
                        transform: rotate(45deg);
                        font-size: 35px;
                        color: #C1C1C1;
                    }
                    .pay-content{
                        text-align: center;
                        line-height: 40px;
                        font-size: 19px;
                        color: #545454;
                    }
                }
                .money{
                    position: absolute;
                    left: 155px;
                    top: 62px;
                    font-size: 36px;
                    color: #474747;
                }
                .account{
                    position: absolute;
                    left: 0;
                    top: 130px;
                    width: 100%;
                    height: 30px;
                    margin-bottom: 18px;
                    font-size: 18px;
                    color: #545454;
                    border-bottom: 1px solid #dadada;
                    .my{
                        float: left;
                        padding-left:30px;
                        box-sizing:border-box;
                    }
                    .num{
                        float: right;
                        padding-right:30px;
                        box-sizing:border-box;
                    }
                }
                .pay-method{
                    top:185px;
                }
                .instant{
                    position: absolute;
                    right: 50px;
                    bottom: 29px;
                    width: 282px;
                    height: 40px;
                    font-size: 20px;
                    color: #000000;
                    text-align: center;
                    line-height: 40px;
                    background: #FDD003;
                    border-radius: 4px;
                }
            }
            .pay-money{
                .return2{
                     position: absolute;
                    left: 18px;
                    top: 12px;
                }
                .wx-method{
                    top: 105px;
                    .wx{
                        position: absolute;
                        left: 15px;
                        bottom: 8px;
                    }
                    .wx-word{
                        position: absolute;
                        left: 43px;
                        bottom: 8px;
                        font-size: 18px;
                        color: #545454;
                    }
                    .select{
                        position: absolute;
                        right: 13px;
                        bottom: 8px;
                    }
                }
                .zfb-method{
                    top: 160px;
                }
            }
        }
    }
</style>
