<template>
    <div class="home-content">
        <div class="home-container">
            <div class="function">
                <ul class="group">
                    <router-link tag='li' to='/dailyPunch' class="item">
                        <img src="@/assets/home/day.png" alt="sorry" class="photo">
                        <p class="title">每日打卡</p>
                    </router-link>
                    <router-link tag='li' to='/schoolHouse' class="item">
                        <img src="@/assets/home/book.png" alt="sorry" class="photo">
                        <p class="title">学堂</p>
                    </router-link>
                    <router-link tag='li' to='/liveShow' class="item">
                        <img src="@/assets/home/show.png" alt="sorry" class="photo">
                        <p class="title">直播</p>
                    </router-link>
                    <router-link tag='li' to='/inquiry' class="item">
                        <img src="@/assets/home/msg.png" alt="sorry" class="photo">
                        <p class="title">研讯</p>
                    </router-link>
                </ul>
            </div>
            <div class="recom">
                <p class="recom-title">推荐</p>
                <img src="@/assets/home/smile.png" alt="sorry" class="picture">
                <img src="@/assets/home/fly.png" alt="sorry" class="picture">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .home-content{
        position: relative;
        width: 100%;
        margin-top: 242px;
        .home-container{
            width: 342px;
            height: 100%;
            margin:0 auto;
            .function{
                width: 100%;
                height: 94px;
                border-top: 0.3px solid #DADADA;
                border-bottom: 0.3px solid #DADADA;
                .group{
                    width: 100%;
                    height: 100%;
                    .item{
                        float:left;
                        width: 25%;
                        height: 66px;
                        padding-top: 16px;
                        .title{
                            font-size: 14px;
                            color: #000000;
                            text-align: center;
                            line-height: 20px;
                            margin-right:-3px;
                            margin-top:12px;
                        }
                    }
                }
            }
            .recom{
                margin-top: 8px;
                font-size: 14px;
                color: #545454;
                .recom-title{
                    text-align: left;
                    margin-left:8px;
                    margin-bottom:8px;
                }
            }
        }
    }
</style>


