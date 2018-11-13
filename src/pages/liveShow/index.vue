<template>
    <div class="live-show">
        <small-header></small-header>
        <search-input></search-input>
        <live-title @channalClick="channalClick" @hotClick="hotClick" @newClick="newClick"></live-title>
        <channal-content :channalData="channalData" v-if="isShow1"></channal-content>
        <hot-content v-if="isShow2" :hotData="hotData"></hot-content>
        <channal-content v-if="isShow3" :channalData="channalData"></channal-content>
    </div>
</template>
<script>
import channal1 from '@/assets/channal/channal1.png'
import channal2 from '@/assets/channal/channal2.png'
import channal3 from '@/assets/channal/channal3.png'
import channal4 from '@/assets/channal/channal4.png'
import channal5 from '@/assets/channal/channal5.png'
import channal6 from '@/assets/channal/channal6.png'
import sweet from '@/assets/hot/sweet.png'
import tiger from '@/assets/hot/tiger.png'
import cat from '@/assets/hot/cat.png'
import big from '@/assets/hot/big.png'
import sanjiao from '@/assets/channal/sanjiao.png'
import smallHeader from '@/components/smallHeader'
import searchInput from './components/searchInput'
import liveTitle from './components/title'
import channalContent from './components/channalContent'
import hotContent from './components/hotContent'
export default {
    name:'liveShow',
    components:{
        smallHeader,
        searchInput,
        liveTitle,
        channalContent,
        hotContent,
    },
    data(){
        return {
            isShow1:true,
            isShow2:false,
            isShow3:false,
            channalData:[
                {
                    url:channal1,
                    course:'大师讲座',
                    sanjiao:sanjiao
                },
                {
                    url:channal2,
                    course:'插画风格',
                    sanjiao:sanjiao
                },
                {
                    url:channal3,
                    course:'手绘指导',
                    sanjiao:sanjiao
                },
                {
                    url:channal4,
                    course:'手绘插画',
                    sanjiao:sanjiao
                },
                {
                    url:channal5,
                    course:'手绘字体技巧',
                    sanjiao:sanjiao
                },
                {
                    url:channal6,
                    course:'18研展',
                    sanjiao:sanjiao
                },
                {
                    url:channal2,
                    course:'手绘字体技巧',
                    sanjiao:sanjiao
                },
                {
                    url:channal3,
                    course:'18研展',
                    sanjiao:sanjiao
                },
            ],
            hotData:[
                {
                    photo:sweet,
                    name:'糖果雨',
                    see:'4363准备看',
                    big:tiger,
                },
                {
                    photo:cat,
                    name:'糖果雨',
                    see:'4363准备看',
                    big:big,
                },
            ]
        }
    },
    methods:{
        channalClick(){
            this.isShow1 = true;
            this.isShow2 = false;
            this.isShow3 = false;
        },
        hotClick(){
            this.isShow1 = false;
             this.isShow2 = true;
            this.isShow3 = false;
        },
        newClick(){
            this.isShow1 = false;
            this.isShow2 = false;
             this.isShow3 = true;
        },
    }
}
</script>
<style scoped lang='styl'>
    .live-show{
        /* position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0; */
    }
</style>
