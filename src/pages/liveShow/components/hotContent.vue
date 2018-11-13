<template>
    <div class="hot-content">
        <div class="container">
            <img src="@/assets/hot/red.png" alt="sorry" class="red">
            <div class="user">
                <div class="user-infor">
                    <img src="@/assets/hot/sweet.png" alt="sorry" class="usr-photo">
                    <span class="user-name">糖果雨</span>
                </div>
                <span class="see">4363准备看</span>
                <img src="@/assets/hot/tiger.png" alt="sorry" class="tiger">
                <router-link to='/hotDetail'>
                    <img src="@/assets/channal/sanjiao.png" alt="sorry" class="sanjiao">
                </router-link>
            </div>
            <div class="user user2">
                <div class="user-infor">
                    <img src="@/assets/hot/cat.png" alt="sorry" class="usr-photo">
                    <span class="user-name">TRYLEA</span>
                </div>
                <span class="see">3600准备看</span>
                <img src="@/assets/hot/big.png" alt="sorry" class="tiger">
                <img src="@/assets/channal/sanjiao.png" alt="sorry" class="sanjiao">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .hot-content{
        width: 100%;
        height: 100%;
        .container{
            position: relative;
            width: 100%;
            height: 100%;
            .red{
                position: absolute;
                left: 3px;
                top: 60px;
            }
            .user{
                position: absolute;
                left: 14px;
                top: 200px;
                width: 345px;
                height: 260px;
                .user-infor{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 110px;
                    text-align:left;
                    .user-name{
                        position: absolute;
                        left: 53px;
                        top: 20px;
                        font-size: 18px;
                        color: #545454;
                    }
                }
                .see{
                    position: absolute;
                    right: 0;
                    top: 25px;
                    font-size: 14px;
                    color: #545454;
                }
                .tiger{
                    position: absolute;
                    left: 0;
                    top: 48px;
                }
                .sanjiao{
                    position: absolute;
                    left: 152px;
                    top: 150px;
                }
            }
            .user2{
                margin-top: 260px;
                .sanjiao{
                    top: 100px;
                }
            }
        }
    }
</style>
