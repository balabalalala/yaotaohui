<template>
    <div class="course-intro">
        <div class="intro-container">
            <div class="intro-msg">
                <span class="line"></span>
                <span class="intro-title">课程简介</span>
                <span class="line right-line"></span>
            </div>
            <div class="intro-each">
                <p class="major">
                    <span class="title">适用专业：</span>
                    <span class="msg">视觉传达+数字媒体</span>
                </p>
                <p class="major year">
                    <span class="title">适用年份：</span>
                    <span class="msg">2019</span>
                </p>
                <p class="major stage">
                    <span class="title">课程阶段：</span>
                    <span class="strong msg">强化</span>
                    <span class="strong msg">冲刺</span>
                </p>
            </div>
             <div class="intro-msg teacher">
                <span class="line"></span>
                <span class="intro-title">师资介绍</span>
                <span class="line right-line"></span>
            </div>
            <div class="teacher-intro">
                <div class="teacher-msg">
                    <img src="@/assets/school/teacher.png" alt="sorry" class="photo">
                    <span class="name">杭海</span>
                </div>
                <p class="teacher-word">中央美术学院设计学院获文学硕士学位。现任中央美术学院设计学院视觉传达设计专业教师。</p>
            </div>
            <div class="bottom-nav">
                <ul class="consult">
                    <router-link tag='li' to='/onlineconsult' class="item">在线咨询</router-link>
                    <router-link tag='li' to='/loda' class="item">电话咨询</router-link>
                    <router-link tag='li' to='/confirmSign' class="item">立即报名</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='styl'>
    .course-intro{
        width: 100%;
        height: 100%;
        .intro-container{
            position: relative;
            width: 100%;
            height: 100%;
            .intro-msg{
                position: absolute;
                left: 0;
                top: 340px;
                width: 100%;
                height: 25px;
                font-size: 18px;
                color: #848282;
                .line{
                    position: absolute;
                    left: 0;
                    top: 45%;
                    width: 145px;
                    height: 0.6px;
                    background-color:#DADADA;
                }
                .right-line{
                    left: auto;
                    right: 0;
                }
            }
            .intro-each{
                position: absolute;
                left: 0;
                top: 375px;
                .major{
                    position: absolute;
                    left: 17px;
                    top: 0;
                    width: 195px;
                    height: 30px;
                    text-align:left;
                    .title{
                        font-size: 14px;
                        color: #848282;
                    }
                    .msg{
                        font-size: 14px;
                        color: #000000;
                    }
                }
                .year{
                    top: 30px;
                }
                .stage{
                    top: 60px;
                    .strong{
                        display: inline-block;
                        width: 49px;
                        height: 25px;
                        text-align:center;
                        line-height:25px;
                        border: 0.3px solid #C7C7C7;
                    }
                }
            }
            .teacher{
                top: 485px;
            }
            .teacher-intro{
                position: absolute;
                left: 0;
                top: 500px;
                width: 100%;
                height: 100%;
                .teacher-msg{
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 100px;
                    height: 45px;
                    font-size: 19px;
                    color: #4A4A4A;
                }
                .teacher-word{
                    position: absolute;
                    left: 17px;
                    top: 65px;
                    padding-bottom: 50px;
                    width: 335px;
                    height: 63px;
                    text-align: left;
                    line-height: 25px;
                    text-indent: 2em;
                    font-size: 15px;
                    color: #4A4A4A;
                }
            }
            .bottom-nav{
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 45px;
                background: #fff;
                .item{
                    float: left;
                    width: 33%;
                    height: 45px;
                    font-size: 20px;
                    color: #545454;
                    text-align:center;
                    line-height:45px;
                    border-right:0.3px solid #DADADA;
                }
                li:nth-child(3){
                    background: #FDD003;
                }
                li.router-link-exact-active{
                    background: #FDD003;
                }
            }
        }
    }
</style>
