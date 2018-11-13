<template>
    <div class="live-detail">
        <div class="live-user">
            <div class="each-user">
                <img src="@/assets/hot/ice.png" alt="sorry" class="picture">
                <div class="intro">
                    <p class="name">飞旋的板砖</p>
                    <p class="work">杭州 | 手绘师</p>
                </div>
                <span class="see">4532观看</span>
            </div>
            <img src="@/assets/hot/draw.png" alt="sorry" class="picture-msg">
        </div>
        <div class="comment">
            <ul class="comment-detail">
                <li class="list">可笑的橘：大神啊  666</li>
                <li class="list">无忧：可以啊 比我画的稍微好点</li>
                <li class="list">Keith：流弊～</li>
                <li class="list">差不多先生：大佬～ 求教……</li>
                <li class="list">落尘：求各种手绘免费资源</li>
                <li class="list">崇拜者：默默地学习～</li>
            </ul>
            <div class="hot-bottom">
                <input type="text" class="bottom-input" placeholder="发表评论">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .live-detail{
        position: relative;
        width: 100%;
        height: 100%;
        .live-user{
            position: relative;
            width: 100%;
            height: 100%;
            margin-top:65px;
            .each-user{
                position: absolute;
                left: 0;
                top: 0;
                width: 330px;
                height: 45px;
                .picture{
                    position: absolute;
                    left: 23px;
                    top: 0;
                }
                .intro{
                    position: absolute;
                    left: 70px;
                    top: 10px;
                    .name{
                        font-size: 18px;
                        color: #404040;
                    }
                    .work{
                        font-size: 14px;
                        color: #545454;
                    }
                }
                .see{
                    position: absolute;
                    right: -14px;
                    bottom: 0;
                    font-size: 14px;
                    color: #545454;
                }
            }
            .picture-msg{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 45px;
            }
        }
        .comment{
            position: absolute;
            left: 0;
            top: 375px;
            width: 100%;
            .comment-detail{
                width: 100%;
                height: 100%;
                .list{
                    width: 100%;
                    height: 41px;
                    padding-left: 28px;
                    box-sizing: border-box;
                    font-size: 16px;
                    color: #666666;
                    text-align: left;
                    line-height: 41px;
                    border-bottom: 1px solid #f2f2f2;
                }
            }
            .hot-bottom{
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 55px;
                background: #F0F0F0;
                .bottom-input{
                    position: absolute;
                    left: 14px;
                    top: 8px;
                    font-size: 20px;
                    color: #8A8A8A;
                    text-indent:1em;
                    background: #FFFFFF;
                    border: 1px solid #DADADA;
                    border-radius: 8px;
                    width: 349px;
                    height: 38px;
                }
            }
        }
    }
</style>
