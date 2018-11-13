<template>
    <div class="hot-detail">
        <small-header></small-header>
        <live-detail></live-detail>
    </div>
</template>
<script>
import smallHeader from '@/components/smallHeader'
import liveDetail from './components/liveDetail'
export default {
    name:'hotDetail',
    components:{
        smallHeader,
        liveDetail,
    }
}
</script>
<style scoped lang='styl'>
    .hot-detail{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: -100px;
    }
</style>
