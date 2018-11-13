<template>
    <div class="inquiry">
        <small-header></small-header>
        <img src="@/assets/inquiry/inquiry.png" alt="sorry" class="banner">
        <div class="live-titles">
            <ul class="title-list">
                <li class="channal-title"  :class="{active:isActive === 1}" @click="channalClick">
                    报考经验
                    <div class="hand-line"></div>
                </li>
                <li class="channal-title" :class="{active:isActive === 2}" @click="hotClick" >
                    政策新闻
                    <div class="hand-line"></div>
                </li>
                <li class="channal-title" :class="{active:isActive === 3}" @click="newClick">
                    复试调剂
                    <div class="hand-line"></div>
                </li>
            </ul>
            <div class="hand-line"></div>
        </div>
        <div class="experience" v-for="(item,index) of experData" :key="index">
            <p class="exper-title">{{item.title}}</p>
            <p class="exper-content">{{item.content}}</p>
            <p class="date">{{item.date}}</p>
        </div>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
export default {
    name:'inquiry',
    components:{
        smallHeader,
    },
    data(){
        return{
            experData:[
                {
                    title:'2019年全国硕士研究生招生考试时间',
                    content:'根据《2019年全国硕士研究生招生工作管理定》现将2019年全国硕士研究生招生考…',
                    date:'2018-08-22'
                },
                {
                    title:'2019年全国硕士研究生招生考试时间',
                    content:'摘要：从各地招生办获悉 ，各省市2019年研究生招生考试报考公告开始发布，包括报 …',
                    date:'2018-09-05'
                },
                {
                    title:'2019年全国硕士研究生招生考试时间',
                    content:'摘要：各院校2019年硕士研究生招生简章 、专业目录及考试科目陆续发布阶段，研讨 …',
                    date:'2018-09-15'
                },
                {
                    title:'考研倒计时！关于时间的坑不要踩',
                    content:'摘要：各院校2019年硕士研究生招生简章 、专业目录及考试科目陆续发布阶段，研讨…',
                    date:'2018-09-19'
                },
            ],
            isActive:1,
        }
    },
     methods:{
        channalClick(){
            this.isActive = 1;
        },
        hotClick(){
            this.isActive = 2;
        },
        newClick(){
            this.isActive = 3;
        },
    }
}
</script>
<style scoped lang='styl'>
    .inquiry{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -200px;
        width: 100%;
        .banner{
            margin-top: 69px;
        }
        .live-titles{
            position: relative;
            width: 100%;
            height: 36px;
            .title-list{
                position: absolute;
                left: 0;
                top: 0;
                width: 375px;
                border-bottom:1px solid #dadada;
                .channal-title{
                    float: left;
                    width: 33%;
                    height: 25px;
                    font-size: 19px;
                    color: #545454;
                    line-height:25px;
                    text-align:center;
                    padding-bottom:10px;
                }
                li:nth-child(1){
                    box-sizing: border-box;
                }
                li:nth-child(2){
                    box-sizing: border-box;
                }
                li.active{
                    position: relative;
                    color: #000000; 
                    .hand-line{
                        position: absolute;
                        left: 20px;
                        top: 32px;
                        width: 80px;
                        height: 3px;
                        background: #FDD003;
                    }
                }
            }
            
        }
        .experience{
            position: relative;
            width: 100%;
            height: 105px;
            margin-top: 13px;
            border-bottom:0.3px solid #dadada;
            p{
                position: absolute;
                left: 16px;
                top: 0;
                width: 347px;
                text-align:left;
            }
            .exper-title{
                height: 25px;
                font-size: 18px;
                color: #000000;
            }
            .exper-content{
                width: 347px;
                height: 44px;
                top: 30px;
                font-size: 16px;
                line-height: 22px;
                color: #666666;
            }
            .date{
                height: 22px;
                top: 80px;
                font-size: 16px;
                color: #4A4A4A;
            }
        }
    }
</style>
