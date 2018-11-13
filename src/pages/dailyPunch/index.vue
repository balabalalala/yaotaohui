<template>
    <div class="daily-punch">
        <small-header></small-header>
        <xp-calendar :arr="arr"></xp-calendar>
        <div class="daily-list">
            <daily-list  v-for="(item,index) of dailyData" :key="index" :item="item"></daily-list>
        </div>
        <daily-bottom></daily-bottom>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
import xpCalendar from './components/calendar'
import dailyList from './components/dailyList'
import dailyBottom from './components/dailyBottom'
export default {
    name:'dailyPunch',
    components:{
        smallHeader,
        xpCalendar,
        dailyList,
        dailyBottom
    },
    data(){
        return{
            dailyData:[
                {
                    id:'21',
                    learn:'今天早起了'
                },
                {
                    id:'22',
                    learn:'学习了外语'
                },
                {
                    id:'23',
                    learn:'学习了政治'
                },
                {
                    id:'24',
                    learn:'学习专业课'
                },
                {
                    id:'25',
                    learn:'学习了理论'
                },
                {
                    id:'26',
                    learn:'锻炼了身体'
                },
            ],
            arr:[
                {
                    text:   27,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   28,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   29,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   30,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   31,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '补',
                    isYellow:true,
                    isPink:false,
                    isToday:false,
                },
                {
                    text: '今',
                    isYellow:true,
                    isPink:false,
                    isToday:true,
                },
                {
                    text:   20,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   21,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   22,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   23,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   24,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   25,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   26,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   27,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   28,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   29,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
                {
                    text:   30,
                    isYellow:false,
                    isPink:true,
                    isToday:false,
                },
          ]
        }
    }
}
</script>
<style scoped lang='styl'>
    .daily-punch{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -200px;
        background: rgba(241,241,241,0.50);
        .daily-list{
            background: rgba(241,241,241,0.50);
            margin-top: 278px;
            /* padding-bottom: 100px; */
        }
    }
</style>

