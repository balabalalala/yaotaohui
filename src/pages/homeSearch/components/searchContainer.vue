<template>
    <div class="search-container">
        <div class="search-content">
            <router-link to='/homeSearch'>
                <img src="@/assets/home/search.png" alt="sorry" class="search">
            </router-link>
            <input type="text" placeholder="视觉传达" class="input-word">
        </div>
        <div class="hot">
            <p class="hot-title">热搜</p>
            <div class="hot-group">
                <ul class="hot-list">
                    <li class="hot-intro" v-for="(item,index) of hotMsg" :key="item.id">
                        <span class="hot-name">{{item.hotName}}</span>
                        <span class="num">{{item.num}}</span>
                    </li>
                </ul>
            </div>
            <div class="line"></div>
            <div class="school">
                <ul class="school-msg">
                    <li class="category" v-for="(item,index) of schoolMsg" :key="index">
                        <img src="@/assets/search/time.png" alt="sorry" class="time">
                        <span class="school-name">{{item.schoolName}}</span>
                    </li>
                    <!-- <li class="category">
                        <img src="@/assets/search/time.png" alt="sorry" class="time">
                        <span class="school-name">上海大学</span>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        hotMsg:{
            type:Array
        },
        schoolMsg:{
            type:Array
        }
    }
    
}
</script>
<style scoped lang='styl'>
    .search-container{
        position: relative;
        width: 100%;
        margin-top: 63px;
        height: 100%;
        .search-content{
            position: absolute;
            left: 13px;
            top: 8px;
            width: 351px;
            height: 30px;
            border-radius: 1px;
            background: #fff;
            .search{
                position: absolute;
                left: 14px;
                top: 9px;
                width: 14px;
                height: 14px;
            }
            .input-word{
                position: absolute;
                left: 42px;
                top: 5px;
                width: 96px;
                height: 22px;
                line-height: 22px;
                font-size: 16px;
                color: #888888;
            }
        }
        .hot{
            position: absolute;
            left: 0;
            top: 64px;
            width: 100%;
            height: 292px;
            background-color: #fff;
            .hot-title{
                position: absolute;
                left: 31px;
                top: 34px;
                font-size: 20px;
                color: #000000;
            }
            .hot-group{
                position: absolute;
                left: 31px;
                top: 89px;
                width: 320px;
                height: 100%;
                .hot-list{
                    width: 100%;
                    height: 100%;
                    .hot-intro{
                        width: 100%;
                        height: 25px;
                        line-height: 25px;
                        font-size: 18px;
                        color: #888888;
                        padding-bottom: 15px;
                        .hot-name{
                            float: left;
                        }
                        .num{
                            float: right;
                        }
                    }
                }
            }
            .line{
                position: absolute;
                left: 31px;
                top: 292px;
                width: 313px;
                height: 1px;
                opacity: 0.6;
                background: #DADADA;
            }
            .school{
                position: absolute;
                left: 0;
                top: 293px;
                width: 100%;
                /* height: 100%; */
                background: #fff;
                padding-bottom: 90px;
                .school-msg{
                    width: 320px;
                    height: 100%;
                    .category{
                        width: 200px;
                        height: 25px;
                        line-height: 25px;
                        font-size: 18px;
                        color: #888888;
                        text-align: left;
                        padding-top: 15px;
                        margin-left: 31px;
                        .time{
                            margin-bottom: 5px;
                            padding-right:5px;
                        }
                    }
                }
            }
        }
    }
</style>

