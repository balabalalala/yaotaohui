<template>
    <div class="followList">
        <ul class="friendItem">
            <router-link tag="li" to="/chat" v-for="(item,index) of allFriend" :key="index">
                <img :src="item.url" alt="">
                <div class="words">
                    <p class="chinese">{{item.text}}</p>
                    <p class="english">{{item.words}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        allFriend:{

        }
    }
}
</script>
<style scoped lang="styl">
.followList{
    position: relative;
    width:100%;
    height: 415px;
    margin-top:44px;
    /* background-color: pink; */
    .friendItem{
        position: absolute;
        left: 0;
        top:0;
        width:100%;
        height: 100%;
        li{
            position: relative;
            width:100%;
            height: 60px;
            margin-top:20px;
            /* background-color: orange; */
            img{
                position: absolute;
                left: 12px;
                top:0;
                width:60px;
                height: 60px;
            }
            .words{
                position: absolute;
                left: 85px;
                top:0;
                width:276px;
                height: 60px;
                background: #FFFFFF;
                box-shadow: 0 2px 10px 0 rgba(0,0,0,0.06);
                border-radius: 4px;
                p{
                    width:100%;
                    height: 22px;
                    margin-left:17px;
                    line-height:22px;
                    text-align:left;
                    font-size: 16px;
                    color: #525252;
                }
                .chinese{
                    margin-top:7px;
                }
                .english{
                    margin-top:3px;
                    color: #888888;
                }
            }
        }
    }
}
</style>

