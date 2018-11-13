<template>
    <div class="home-search">
        <small-header></small-header>
        <search-container :hotMsg="hotMsg" :schoolMsg="schoolMsg"></search-container>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
import searchContainer from './components/searchContainer'
export default {
    name:'homeSearch',
    components:{
        smallHeader,
        searchContainer,
    },
    data(){
        return {
            hotMsg:[
                {
                    id:'01',
                    hotName:'视觉传达',
                    num:'15663'
                },
                {
                    id:'02',
                    hotName:'中央美院',
                    num:'6763'
                },
                {
                    id:'03',
                    hotName:'工业设计专业',
                    num:'5467'
                },
                {
                    id:'04',
                    hotName:'服装设计',
                    num:'1963'
                },
                {
                    id:'05',
                    hotName:'安藤忠雄',
                    num:'4876'
                },
            ],
            schoolMsg:[
                {
                    schoolName:'上海大学'
                },
                {
                    schoolName:'江南大学'
                },
                {
                    schoolName:'世界现代设计史'
                },
                {
                    schoolName:'中国工艺美术史'
                },
            ]
        }
    }
}
</script>
<style scoped lang='styl'>
    .home-search{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(241,241,241,0.50);
    }
</style>

