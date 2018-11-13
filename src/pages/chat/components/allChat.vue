<template>
<div class="all">
    <div class="allChat">
        <div class="myWords">
            <img class="myPhoto" src="@/assets/friend/friend (1).png" alt="">
            <div class="words">
                <p class="firstWords">在不在</p>
            </div>
        </div>
        <div class="friend">
            <img class="yourPhoto"  src="@/assets/friend/friend (5).png" alt="">
            <div class="words2">
                <p>嗯</p>
            </div>
        </div>
        
        <div class="myWords myWords2">
            <img class="myPhoto" src="@/assets/friend/friend (1).png" alt="">
            <div class="words words3">
                <p>千库网会员借我下</p>
            </div>
        </div>
        <div class="friend friend2">
            <img  class="yourPhoto" src="@/assets/friend/friend (5).png" alt="">
            <div class="words2">
                <p>好的</p>
            </div>
        </div>
    </div>
    <div class="inputBox">
        <img class="voice" src="@/assets/my/Group.png" alt="">
        <input class="input" type="text">
        <img class="add" src="@/assets/my/add.png" alt="">
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="styl">
.allChat{
    position: relative;
    width:100%;
    /* height:550px; */
    margin-top:44px;
    /* background-color: pink; */
    .myWords{
        position: absolute;
        top:31px;
        right:19px;
        width:170px;
        height: 55px;
        /* background-color: orange; */
        .myPhoto{
            position: absolute;
            right: 0;
            top:0;
            width:54px;
            height: 55px;
        }
        .words{
            position: absolute;
            right:65px;
            top:50%;
            transform: translateY(-50%);
            width:83px;
            height: 44px;
            background: #F7F7F7;
            border-radius: 8px;
            p{
                width:100%;
                height: 100%;
                line-height:44px;
                text-align:center;
                font-size: 18px;
                color: #666666;
            }
        }

    }
    .friend{
        position: absolute;
        left: 17px;
        top:90px;
        width:128px;
        height: 54px;
        /* background-color: green; */
        .yourPhoto{
            position: absolute;
            left: 0;
            top:0;
            width:54px;
            height: 55px;
        }
        .words2{
            position: absolute;
            left:60px;
            top:50%;
            transform: translateY(-50%);
            width:44px;
            height: 44px;
            background: #F7F7F7;
            border-radius: 8px;
            p{
                width:100%;
                height: 100%;
                line-height:44px;
                text-align:center;
                font-size: 18px;
                color: #666666;
            }
        }
    }
    .myWords2{
        top:178px
        .words3{
            width:169px;
        }
    }
    .friend2{
        top:257px
    }
}
.inputBox{
    position: fixed;
    left: 0;
    bottom:0;
    width:100%;
    height: 62px;
    background: #F7F7F7;
    .voice{
        position: absolute;
        left:18px;
        top:50%;
        transform: translateY(-50%);
        width:34px;
        height: 33px;
    }
    .input{
        position: absolute;
        left:62px;
        top:50%;
        transform: translateY(-50%);
        width:266px;
        height: 40px;
        text-indent: 20px;
        background: #FFFFFF;
        border-radius: 100px;
    }
    .add{
        position: absolute;
        right:14px;
        top:50%;
        transform: translateY(-50%);
        width:21px;
        height: 21px;
    }

}
</style>
